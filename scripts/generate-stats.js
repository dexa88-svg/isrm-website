#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Generate site statistics by counting MDX content files and writing the
 * result to public/data/stats.json (Astro copies it to dist/ during build).
 *
 * @param {object} [options]
 * @param {string} [options.contentDir]  src/content root (MDX source files).
 * @param {string} [options.outputDir]   Directory where stats.json is written.
 * @param {string} [options.publicDir]   Root public directory (fallback/sitemap).
 * @returns {{ guides: number, videos: number, lastUpdated: string }}
 */
function generateStats({ contentDir, outputDir, publicDir } = {}) {
  const resolvedPublicDir = publicDir || path.join(__dirname, '../public');
  const resolvedContentDir = contentDir || path.join(__dirname, '../src/content');
  const resolvedOutputDir = outputDir || path.join(resolvedPublicDir, 'data');

  const countMdx = dir => {
    if (!fs.existsSync(dir)) return 0;
    return fs.readdirSync(dir).filter(f => f.endsWith('.mdx')).length;
  };

  const stats = {
    guides: countMdx(path.join(resolvedContentDir, 'repair-guides')),
    videos: countMdx(path.join(resolvedContentDir, 'videos')),
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

  // Regenerate sitemap — scan dist/ if it exists (post-build), else public/
  const distDir = path.join(__dirname, '../dist');
  generateSitemap(fs.existsSync(distDir) ? distDir : resolvedPublicDir);

  return stats;
}

/**
 * Regenerate public/sitemap.xml by scanning all HTML files under public/.
 * Excludes index.html files (listed as their parent directory), _removed/ pages,
 * and wizard.html (not a content page).
 */
function generateSitemap(publicDir) {
  const SITE = 'https://ismr.online';

  /** Return the file's last-modified date as YYYY-MM-DD, or today as fallback. */
  function fileMtime(filePath) {
    try {
      return fs.statSync(filePath).mtime.toISOString().split('T')[0];
    } catch (_) {
      return new Date().toISOString().split('T')[0];
    }
  }

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
  const rootIndex = path.join(publicDir, 'index.html');
  entries.push({ url: `${SITE}/`, priority: '1.0', changefreq: 'weekly', lastmod: fileMtime(rootIndex) });

  // Section index pages
  for (const section of dirSections) {
    const indexPath = path.join(publicDir, section, 'index.html');
    if (fs.existsSync(indexPath)) {
      entries.push({
        url: `${SITE}/${section}/`,
        priority: dirPriority[section] || '0.7',
        changefreq: ['repair-guides', 'diagnostics', 'news'].includes(section) ? 'weekly' : 'monthly',
        lastmod: fileMtime(indexPath),
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
      const filePath = path.join(sectionDir, file);
      entries.push({
        url: `${SITE}/${section}/${file}`,
        priority: priority[section] || '0.7',
        changefreq: 'monthly',
        lastmod: fileMtime(filePath),
      });
    }
  }

  const urlEntries = entries.map(e =>
    `  <url>\n    <loc>${e.url}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n    <lastmod>${e.lastmod}</lastmod>\n  </url>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n${urlEntries}\n\n</urlset>\n`;

  // Write sitemap to the scanned directory; also mirror to public/ so Astro picks it up
  const sitemapFile = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapFile, xml);
  const publicSitemapFile = path.join(__dirname, '../public/sitemap.xml');
  if (sitemapFile !== publicSitemapFile) {
    fs.writeFileSync(publicSitemapFile, xml);
  }
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

