#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Count repair guide files
const guidesDir = path.join(__dirname, '../public/repair-guides');
const guideFiles = fs.readdirSync(guidesDir)
  .filter(file => file.endsWith('.html') && file !== 'index.html');

const stats = {
  guides: guideFiles.length,
  lastUpdated: new Date().toISOString()
};

// Create or update data directory
const dataDir = path.join(__dirname, '../public/data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Write stats to JSON file
fs.writeFileSync(
  path.join(dataDir, 'stats.json'),
  JSON.stringify(stats, null, 2)
);

console.log(`✓ Generated stats: ${stats.guides} guides`);
