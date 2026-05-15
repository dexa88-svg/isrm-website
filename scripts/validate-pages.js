#!/usr/bin/env node
/**
 * validate-pages.js
 * Checks all content HTML pages under public/ for required head-level tags.
 * Run via: node scripts/validate-pages.js
 * Integrated into npm test via package.json.
 *
 * Exits with code 1 if any page fails — this gates the deploy pipeline.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'public');

// Directories with content pages to validate (index.html files are excluded)
const CONTENT_DIRS = ['repair-guides', 'diagnostics', 'models'];

const CHECKS = [
  {
    name: 'meta description',
    test: html => /<meta\s+name=["']description["']/i.test(html),
  },
  {
    name: 'canonical link',
    test: html => /<link\s[^>]*rel=["']canonical["']/i.test(html),
  },
  {
    name: 'GA4 tracking script',
    test: html => /G-53LY3KPDYM/i.test(html),
  },
  {
    name: 'JSON-LD structured data',
    test: html => /<script\s+type=["']application\/ld\+json["']/i.test(html),
  },
  {
    name: 'OG title meta',
    test: html => /<meta\s+property=["']og:title["']/i.test(html),
  },
  {
    name: 'OG description meta',
    test: html => /<meta\s+property=["']og:description["']/i.test(html),
  },
  {
    name: 'Twitter card meta',
    test: html => /<meta\s+name=["']twitter:card["']/i.test(html),
  },
  {
    name: 'styles.css link',
    test: html => /<link[^>]+styles\.css/i.test(html),
  },
  {
    name: 'script.js at end of body',
    test: html => /<script\s+src=["'][^"']*script\.js["']/i.test(html),
  },
];

let totalFailed = 0;
let totalChecked = 0;

for (const dir of CONTENT_DIRS) {
  const dirPath = path.join(ROOT, dir);
  if (!fs.existsSync(dirPath)) continue;

  const files = fs.readdirSync(dirPath).filter(
    f => f.endsWith('.html') && f !== 'index.html'
  );

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const html = fs.readFileSync(filePath, 'utf8');
    const failures = CHECKS.filter(c => !c.test(html));

    totalChecked++;

    if (failures.length > 0) {
      console.error(`\n❌  ${dir}/${file}`);
      failures.forEach(f => console.error(`     missing: ${f.name}`));
      totalFailed++;
    }
  }
}

console.log(`\nValidated ${totalChecked} page(s) across ${CONTENT_DIRS.join(', ')}.`);

if (totalFailed > 0) {
  console.error(`\n${totalFailed} page(s) failed validation. Fix the issues above before deploying.\n`);
  process.exit(1);
} else {
  console.log(`✅  All pages passed validation.\n`);
}
