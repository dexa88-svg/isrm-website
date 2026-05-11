#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Generate site statistics by counting repair guide and video HTML files and
 * writing the result to a JSON file.
 *
 * @param {object} [options]
 * @param {string} [options.guidesDir]  Directory containing guide HTML files.
 * @param {string} [options.videosDir]  Directory containing video HTML files.
 * @param {string} [options.outputDir]  Directory where stats.json is written.
 * @returns {{ guides: number, videos: number, lastUpdated: string }}
 */
function generateStats({ guidesDir, videosDir, outputDir } = {}) {
  const resolvedGuidesDir = guidesDir || path.join(__dirname, '../public/repair-guides');
  const resolvedVideosDir = videosDir || path.join(__dirname, '../public/videos');
  const resolvedOutputDir = outputDir || path.join(__dirname, '../public/data');

  const countHtml = dir => fs.readdirSync(dir)
    .filter(file => file.endsWith('.html') && file !== 'index.html').length;

  const stats = {
    guides: countHtml(resolvedGuidesDir),
    videos: countHtml(resolvedVideosDir),
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

  console.log(`✓ Generated stats: ${stats.guides} guides, ${stats.videos} videos`);
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

