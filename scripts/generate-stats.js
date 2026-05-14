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
 * @param {string} [options.publicDir]  Root public directory (used for sitemap).
 * @returns {{ guides: number, videos: number, lastUpdated: string }}
 */
function generateStats({ guidesDir, videosDir, outputDir, publicDir } = {}) {
  const resolvedPublicDir = publicDir || path.join(__dirname, '../public');
  const resolvedGuidesDir = guidesDir || path.join(resolvedPublicDir, 'repair-guides');
  const resolvedVideosDir = videosDir || path.join(resolvedPublicDir, 'videos');
  const resolvedOutputDir = outputDir || path.join(resolvedPublicDir, 'data');

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

  // Regenerate sitemap.xml
  generateSitemap(resolvedPublicDir);

  return stats;
}

/**
 * Regenerate public/sitemap.xml by scanning all HTML files under public/.
 * Excludes index.html files (listed as their parent directory), _removed/ pages,
 * and wizard.html (not a content page).
 */
function generateSitemap(publicDir) {
  const today = new Date().toISOString().split('T')[0];
  const SITE = 'https://ismr.online';

  // Sections that get listed as directory entries (no trailing index.html in sitemap)
  const dirSections = ['repair-guides', 'diagnostics', 'parts', 'models', 'videos', 'news'];

  // Priority rules by section
  const priority = {
    '': '1.0',            // root
    'repair-guides': '0.8',
    'diagnostics': '0.8',
    'parts': '0.7',
    'models': '0.7',
    'videos': '0.6',
    'news': '0.7',
  };
  const dirPriority = {
    'repair-guides': '0.9',
    'diagnostics': '0.9',
    'parts': '0.8',
    'models': '0.8',
    'videos': '0.7',
    'news': '0.7',
  };

  const entries = [];

  // Root
  entries.push({ url: `${SITE}/`, priority: '1.0', changefreq: 'weekly', lastmod: today });

  // Section index pages
  for (const section of dirSections) {
    const indexPath = path.join(publicDir, section, 'index.html');
    if (fs.existsSync(indexPath)) {
      entries.push({
        url: `${SITE}/${section}/`,
        priority: dirPriority[section] || '0.7',
        changefreq: ['repair-guides', 'diagnostics', 'news'].includes(section) ? 'weekly' : 'monthly',
        lastmod: today,
      });
    }
  }

  // Individual content pages
  const SKIP = new Set(['index.html', 'wizard.html']);
  for (const section of dirSections) {
    const sectionDir = path.join(publicDir, section);
    if (!fs.existsSync(sectionDir)) continue;
    const files = fs.readdirSync(sectionDir)
      .filter(f => f.endsWith('.html') && !SKIP.has(f))
      .sort();
    for (const file of files) {
      // Skip _removed subdirectory files (shouldn't appear at root level but guard anyway)
      if (file.startsWith('_')) continue;
      entries.push({
        url: `${SITE}/${section}/${file}`,
        priority: priority[section] || '0.7',
        changefreq: 'monthly',
        lastmod: today,
      });
    }
  }

  const urlEntries = entries.map(e =>
    `  <url>\n    <loc>${e.url}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n    <lastmod>${e.lastmod}</lastmod>\n  </url>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n${urlEntries}\n\n</urlset>\n`;

  const sitemapFile = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapFile, xml);
  console.log(`✓ Sitemap regenerated: ${entries.length} URLs → ${sitemapFile}`);
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

module.exports = { generateStats, generateSitemap };

