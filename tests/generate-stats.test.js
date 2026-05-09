'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');

// generateStats is exported by the refactored script
const { generateStats } = require('../scripts/generate-stats');

describe('generateStats', () => {
  let tmpDir;
  let guidesDir;
  let outputDir;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'isrm-test-'));
    guidesDir = path.join(tmpDir, 'repair-guides');
    outputDir = path.join(tmpDir, 'data');
    fs.mkdirSync(guidesDir);
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  // ── File counting ──────────────────────────────────────────────────────────

  it('counts HTML guide files and excludes index.html', () => {
    fs.writeFileSync(path.join(guidesDir, 'guide-one.html'), '');
    fs.writeFileSync(path.join(guidesDir, 'guide-two.html'), '');
    fs.writeFileSync(path.join(guidesDir, 'index.html'), '');

    const stats = generateStats({ guidesDir, outputDir });

    expect(stats.guides).toBe(2);
  });

  it('returns zero when no HTML guide files exist', () => {
    const stats = generateStats({ guidesDir, outputDir });

    expect(stats.guides).toBe(0);
  });

  it('ignores non-HTML files in the guides directory', () => {
    fs.writeFileSync(path.join(guidesDir, 'guide.html'), '');
    fs.writeFileSync(path.join(guidesDir, 'README.md'), '');
    fs.writeFileSync(path.join(guidesDir, 'styles.css'), '');
    fs.writeFileSync(path.join(guidesDir, 'script.js'), '');

    const stats = generateStats({ guidesDir, outputDir });

    expect(stats.guides).toBe(1);
  });

  it('counts the actual number of guide files (regression: correct total)', () => {
    const guideNames = [
      'gy6-oil-change-guide.html',
      'gy6-spark-plug-guide.html',
      'gy6-carburetor-cleaning-guide.html',
      'index.html',
    ];
    guideNames.forEach(name => fs.writeFileSync(path.join(guidesDir, name), ''));

    const stats = generateStats({ guidesDir, outputDir });

    expect(stats.guides).toBe(3);
  });

  // ── Output directory ───────────────────────────────────────────────────────

  it('creates the output directory when it does not exist', () => {
    expect(fs.existsSync(outputDir)).toBe(false);

    generateStats({ guidesDir, outputDir });

    expect(fs.existsSync(outputDir)).toBe(true);
  });

  it('does not throw when the output directory already exists', () => {
    fs.mkdirSync(outputDir);

    expect(() => generateStats({ guidesDir, outputDir })).not.toThrow();
  });

  it('creates nested output directories with recursive mkdirSync', () => {
    const nestedOutput = path.join(outputDir, 'nested', 'deep');

    generateStats({ guidesDir, outputDir: nestedOutput });

    expect(fs.existsSync(nestedOutput)).toBe(true);
  });

  // ── stats.json content ─────────────────────────────────────────────────────

  it('writes stats.json to the output directory', () => {
    generateStats({ guidesDir, outputDir });

    expect(fs.existsSync(path.join(outputDir, 'stats.json'))).toBe(true);
  });

  it('writes valid JSON to stats.json', () => {
    generateStats({ guidesDir, outputDir });

    const raw = fs.readFileSync(path.join(outputDir, 'stats.json'), 'utf8');
    expect(() => JSON.parse(raw)).not.toThrow();
  });

  it('includes the correct guides count in stats.json', () => {
    fs.writeFileSync(path.join(guidesDir, 'guide1.html'), '');
    fs.writeFileSync(path.join(guidesDir, 'guide2.html'), '');

    generateStats({ guidesDir, outputDir });

    const stats = JSON.parse(fs.readFileSync(path.join(outputDir, 'stats.json'), 'utf8'));
    expect(stats.guides).toBe(2);
  });

  it('includes a lastUpdated ISO 8601 timestamp in stats.json', () => {
    generateStats({ guidesDir, outputDir });

    const stats = JSON.parse(fs.readFileSync(path.join(outputDir, 'stats.json'), 'utf8'));
    expect(stats.lastUpdated).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
  });

  it('overwrites an existing stats.json on subsequent runs', () => {
    fs.mkdirSync(outputDir);
    fs.writeFileSync(path.join(outputDir, 'stats.json'), JSON.stringify({ guides: 999 }));

    fs.writeFileSync(path.join(guidesDir, 'guide1.html'), '');
    generateStats({ guidesDir, outputDir });

    const stats = JSON.parse(fs.readFileSync(path.join(outputDir, 'stats.json'), 'utf8'));
    expect(stats.guides).toBe(1);
  });

  // ── Return value ───────────────────────────────────────────────────────────

  it('returns a stats object with guides and lastUpdated properties', () => {
    fs.writeFileSync(path.join(guidesDir, 'guide1.html'), '');

    const result = generateStats({ guidesDir, outputDir });

    expect(result).toHaveProperty('guides', 1);
    expect(result).toHaveProperty('lastUpdated');
  });

  // ── Error handling ─────────────────────────────────────────────────────────

  it('throws when the guides directory does not exist', () => {
    const missing = path.join(tmpDir, 'nonexistent-dir');

    expect(() => generateStats({ guidesDir: missing, outputDir })).toThrow();
  });
});
