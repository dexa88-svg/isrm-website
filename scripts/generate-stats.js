#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Generate site statistics by counting repair guide HTML files and writing
 * the result to a JSON file.
 *
 * @param {object} [options]
 * @param {string} [options.guidesDir]  Directory containing guide HTML files.
 * @param {string} [options.outputDir]  Directory where stats.json is written.
 * @returns {{ guides: number, lastUpdated: string }}
 */
function generateStats({ guidesDir, outputDir } = {}) {
  const resolvedGuidesDir = guidesDir || path.join(__dirname, '../public/repair-guides');
  const resolvedOutputDir = outputDir || path.join(__dirname, '../public/data');

  // Count repair guide files (exclude index.html)
  const guideFiles = fs.readdirSync(resolvedGuidesDir)
    .filter(file => file.endsWith('.html') && file !== 'index.html');

  const stats = {
    guides: guideFiles.length,
    lastUpdated: new Date().toISOString()
  };

  // Create data directory if needed
  if (!fs.existsSync(resolvedOutputDir)) {
    fs.mkdirSync(resolvedOutputDir, { recursive: true });
    console.log(`Created directory: ${resolvedOutputDir}`);
  }

  // Write stats to JSON file
  const statsFile = path.join(resolvedOutputDir, 'stats.json');
  fs.writeFileSync(statsFile, JSON.stringify(stats, null, 2));

  console.log(`✓ Generated stats: ${stats.guides} guides`);
  console.log(`✓ File written to: ${statsFile}`);

  return stats;
}

// Run when executed directly (CLI entry-point)
if (require.main === module) {
  try {
    generateStats();
  } catch (error) {
    console.error('Error generating stats:', error);
    process.exit(1);
  }
}

module.exports = { generateStats };

