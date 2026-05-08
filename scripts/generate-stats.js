#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

try {
  // Count repair guide files
  const guidesDir = path.join(__dirname, '../public/repair-guides');
  const guideFiles = fs.readdirSync(guidesDir)
    .filter(file => file.endsWith('.html') && file !== 'index.html');

  const stats = {
    guides: guideFiles.length,
    lastUpdated: new Date().toISOString()
  };

  // Create data directory
  const dataDir = path.join(__dirname, '../public/data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
    console.log(`Created directory: ${dataDir}`);
  }

  // Write stats to JSON file
  const statsFile = path.join(dataDir, 'stats.json');
  fs.writeFileSync(statsFile, JSON.stringify(stats, null, 2));

  console.log(`✓ Generated stats: ${stats.guides} guides`);
  console.log(`✓ File written to: ${statsFile}`);
} catch (error) {
  console.error('Error generating stats:', error);
  process.exit(1);
}

