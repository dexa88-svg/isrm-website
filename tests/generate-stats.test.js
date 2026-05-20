'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');

const { generateStats } = require('../scripts/generate-stats');

describe('generateStats', () => {
  let tmpDir;
  let contentDir;
  let guidesDir;
  let outputDir;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'isrm-test-'));
    contentDir = path.join(tmpDir, 'content');
    guidesDir = path.join(contentDir, 'repair-guides');
    outputDir = path.join(tmpDir, 'data');
    fs.mkdirSync(guidesDir, { recursive: true });
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  // ── File counting ──────────────────────────────────────────────────────────

  it('counts MDX guide files', () => {
    fs.writeFileSync(path.join(guidesDir, 'guide-one.mdx'), '');
    fs.writeFileSync(path.join(guidesDir, 'guide-two.mdx'), '');

    const stats = generateStats({ contentDir, outputDir });

    expect(stats.guides).toBe(2);
  });

  it('returns zero when no MDX guide files exist', () => {
    const stats = generateStats({ contentDir, outputDir });

    expect(stats.guides).toBe(0);
  });

  it('ignores non-MDX files in the guides directory', () => {
    fs.writeFileSync(path.join(guidesDir, 'guide.mdx'), '');
    fs.writeFileSync(path.join(guidesDir, 'README.md'), '');
    fs.writeFileSync(path.join(guidesDir, 'styles.css'), '');

    const stats = generateStats({ contentDir, outputDir });

    expect(stats.guides).toBe(1);
  });

  it('counts the correct number of MDX guide files (regression)', () => {
    ['gy6-oil-change-guide.mdx', 'gy6-spark-plug-guide.mdx', 'gy6-carburetor-cleaning-guide.mdx']
      .forEach(name => fs.writeFileSync(path.join(guidesDir, name), ''));

    const stats = generateStats({ contentDir, outputDir });

    expect(stats.guides).toBe(3);
  });

  // ── Output directory ───────────────────────────────────────────────────────

  it('creates the output directory when it does not exist', () => {
    expect(fs.existsSync(outputDir)).toBe(false);

    generateStats({ contentDir, outputDir });

    expect(fs.existsSync(outputDir)).toBe(true);
  });

  it('does not throw when the output directory already exists', () => {
    fs.mkdirSync(outputDir);

    expect(() => generateStats({ contentDir, outputDir })).not.toThrow();
  });

  it('creates nested output directories with recursive mkdirSync', () => {
    const nestedOutput = path.join(outputDir, 'nested', 'deep');

    generateStats({ contentDir, outputDir: nestedOutput });

    expect(fs.existsSync(nestedOutput)).toBe(true);
  });

  // ── stats.json content ─────────────────────────────────────────────────────

  it('writes stats.json to the output directory', () => {
    generateStats({ contentDir, outputDir });

    expect(fs.existsSync(path.join(outputDir, 'stats.json'))).toBe(true);
  });

  it('writes valid JSON to stats.json', () => {
    generateStats({ contentDir, outputDir });

    const raw = fs.readFileSync(path.join(outputDir, 'stats.json'), 'utf8');
    expect(() => JSON.parse(raw)).not.toThrow();
  });

  it('includes the correct guides count in stats.json', () => {
    fs.writeFileSync(path.join(guidesDir, 'guide1.mdx'), '');
    fs.writeFileSync(path.join(guidesDir, 'guide2.mdx'), '');

    generateStats({ contentDir, outputDir });

    const stats = JSON.parse(fs.readFileSync(path.join(outputDir, 'stats.json'), 'utf8'));
    expect(stats.guides).toBe(2);
  });

  it('includes a lastUpdated ISO 8601 timestamp in stats.json', () => {
    generateStats({ contentDir, outputDir });

    const stats = JSON.parse(fs.readFileSync(path.join(outputDir, 'stats.json'), 'utf8'));
    expect(stats.lastUpdated).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
  });

  it('overwrites an existing stats.json on subsequent runs', () => {
    fs.mkdirSync(outputDir);
    fs.writeFileSync(path.join(outputDir, 'stats.json'), JSON.stringify({ guides: 999 }));

    fs.writeFileSync(path.join(guidesDir, 'guide1.mdx'), '');
    generateStats({ contentDir, outputDir });

    const stats = JSON.parse(fs.readFileSync(path.join(outputDir, 'stats.json'), 'utf8'));
    expect(stats.guides).toBe(1);
  });

  // ── Return value ───────────────────────────────────────────────────────────

  it('returns a stats object with guides and lastUpdated properties', () => {
    fs.writeFileSync(path.join(guidesDir, 'guide1.mdx'), '');

    const result = generateStats({ contentDir, outputDir });

    expect(result).toHaveProperty('guides', 1);
    expect(result).toHaveProperty('lastUpdated');
  });

  // ── Missing directory ──────────────────────────────────────────────────────

  it('returns zero guides when content directory does not exist', () => {
    const result = generateStats({ contentDir: path.join(tmpDir, 'nonexistent'), outputDir });

    expect(result.guides).toBe(0);
  });
});
