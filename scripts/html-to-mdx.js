#!/usr/bin/env node
/**
 * html-to-mdx.js
 * Converts existing ISRM static HTML pages to Astro MDX content files.
 * Run: node scripts/html-to-mdx.js
 */

const fs = require('fs');
const path = require('path');
const { parse } = require('node-html-parser');
const TurndownService = require('turndown');

const ROOT = path.resolve(__dirname, '..');

// Map HTML source dirs → MDX target collection dirs
const SECTIONS = [
  { src: 'public/repair-guides',  dest: 'src/content/repair-guides',  collection: 'repair-guides' },
  { src: 'public/diagnostics',    dest: 'src/content/diagnostics',     collection: 'diagnostics'   },
  { src: 'public/models',         dest: 'src/content/models',          collection: 'models'        },
  { src: 'public/parts',          dest: 'src/content/parts',           collection: 'parts'         },
  { src: 'public/videos',         dest: 'src/content/videos',          collection: 'videos'        },
];

// Pages already manually migrated — skip them
const SKIP = new Set([
  'gy6-spark-plug-guide.html',
  'gy6-oil-change-guide.html',
  'gy6-carburetor-cleaning-guide.html',
]);

// ── Turndown config ──────────────────────────────────────────────────────────
const td = new TurndownService({
  headingStyle: 'atx',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced',
});

// Preserve <iframe> tags (video embeds)
td.addRule('iframe', {
  filter: 'iframe',
  replacement: (_content, node) => {
    const src = node.getAttribute('src') || '';
    const title = node.getAttribute('title') || '';
    const match = src.match(/embed\/([A-Za-z0-9_-]{11})/);
    if (match) {
      return `\n<VideoEmbed videoId="${match[1]}" title="${title}" creator="YouTube" />\n`;
    }
    return `\n<iframe src="${src}" title="${title}" allowfullscreen></iframe>\n`;
  },
});

// Convert callout divs → <Callout> component
td.addRule('callout', {
  filter: (node) => {
    const cls = node.getAttribute('class') || '';
    return node.nodeName === 'DIV' && /callout-(warn|danger|tip)/.test(cls);
  },
  replacement: (content, node) => {
    const cls = node.getAttribute('class') || '';
    const typeMatch = cls.match(/callout-(warn|danger|tip)/);
    const type = typeMatch ? typeMatch[1] : 'tip';
    // Strip leading emoji added by Callout component
    const clean = content.replace(/^[\s]*[⚠️🚨💡]\s*/, '').trim();
    return `\n<Callout type="${type}">\n  ${clean}\n</Callout>\n`;
  },
});

// Convert source-box divs → <SourceBox> component placeholder
td.addRule('sourceBox', {
  filter: (node) => {
    const cls = node.getAttribute('class') || '';
    return node.nodeName === 'DIV' && cls.includes('source-box');
  },
  replacement: (content) => {
    return `\n{/* SOURCE_BOX_PLACEHOLDER */}\n`;
  },
});

// Keep tables as HTML (markdown tables break on complex cells)
td.addRule('table', {
  filter: ['table'],
  replacement: (_content, node) => {
    return '\n' + node.outerHTML + '\n';
  },
});

// ── Helpers ──────────────────────────────────────────────────────────────────

function getMeta(doc, name) {
  const el = doc.querySelector(`meta[name="${name}"]`) ||
             doc.querySelector(`meta[property="${name}"]`);
  return el ? el.getAttribute('content') || '' : '';
}

function getCanonical(doc) {
  const el = doc.querySelector('link[rel="canonical"]');
  return el ? el.getAttribute('href') || '' : '';
}

function extractVideoIds(doc) {
  const iframes = doc.querySelectorAll('iframe[src*="youtube"]');
  const ids = [];
  iframes.forEach((iframe) => {
    const src = iframe.getAttribute('src') || '';
    const match = src.match(/embed\/([A-Za-z0-9_-]{11})/);
    if (match && !ids.find(v => v.id === match[1])) {
      const title = iframe.getAttribute('title') || 'Video';
      ids.push({ id: match[1], title, creator: 'YouTube', position: ids.length === 0 ? 'hero' : 'inline' });
    }
  });
  return ids;
}

function extractTags(doc) {
  const tags = [];
  doc.querySelectorAll('.guide-tag').forEach(el => {
    const t = el.text.trim();
    if (t) tags.push(t);
  });
  return tags;
}

function extractSources(doc) {
  const box = doc.querySelector('.source-box');
  if (!box) return [];
  const sources = [];
  box.querySelectorAll('a[href]').forEach(a => {
    const url = a.getAttribute('href') || '';
    const name = a.text.trim();
    if (url.startsWith('http') && name) {
      sources.push({ name, url });
    }
  });
  return sources;
}

function extractDifficulty(doc) {
  const text = doc.querySelector('.meta, .guide-meta')?.text || '';
  if (/advanced/i.test(text)) return 'Advanced';
  if (/intermediate/i.test(text)) return 'Intermediate';
  return 'Beginner';
}

function extractTimeEstimate(doc) {
  const text = doc.querySelector('.meta, .guide-meta')?.text || '';
  const match = text.match(/time[:\s]+([^|]+)/i);
  return match ? match[1].trim() : '~30 min';
}

function extractUpdatedDate(doc) {
  const footerText = doc.querySelector('footer')?.text || '';
  const match = footerText.match(/(\d{4}-\d{2}-\d{2})/g);
  if (match) return match[match.length - 1];
  return new Date().toISOString().slice(0, 10);
}

function extractPublishDate(doc) {
  const footerText = doc.querySelector('footer')?.text || '';
  const match = footerText.match(/(\d{4}-\d{2}-\d{2})/g);
  if (match) return match[0];
  return new Date().toISOString().slice(0, 10);
}

function cleanContent(html) {
  // Remove inline styles and script tags from content
  html = html.replace(/<style[\s\S]*?<\/style>/gi, '');
  html = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  // Fix relative links → absolute paths
  html = html.replace(/href="\.\.\/repair-guides\//g, 'href="/repair-guides/');
  html = html.replace(/href="\.\.\/diagnostics\//g, 'href="/diagnostics/');
  html = html.replace(/href="\.\.\/models\//g, 'href="/models/');
  html = html.replace(/href="\.\.\/parts\//g, 'href="/parts/');
  html = html.replace(/href="\.\.\/index\.html/g, 'href="/index.html');
  html = html.replace(/href="\.\.\/legal\//g, 'href="/legal/');
  html = html.replace(/href="index\.html/g, 'href="/repair-guides/index.html');
  html = html.replace(/src="\.\.\/styles\.css"/g, '');
  html = html.replace(/src="\.\.\/script\.js"/g, '');
  return html;
}

function buildFrontmatter(fields) {
  const lines = ['---'];
  for (const [key, val] of Object.entries(fields)) {
    if (val === null || val === undefined) continue;
    if (typeof val === 'string') {
      lines.push(`${key}: "${val.replace(/"/g, '\\"')}"`);
    } else if (typeof val === 'boolean') {
      lines.push(`${key}: ${val}`);
    } else if (Array.isArray(val)) {
      if (val.length === 0) {
        lines.push(`${key}: []`);
      } else if (typeof val[0] === 'string') {
        lines.push(`${key}:`);
        val.forEach(v => lines.push(`  - "${v.replace(/"/g, '\\"')}"`));
      } else {
        // array of objects (videos, sources)
        lines.push(`${key}:`);
        val.forEach(obj => {
          const entries = Object.entries(obj);
          entries.forEach(([k, v], i) => {
            const prefix = i === 0 ? '  - ' : '    ';
            lines.push(`${prefix}${k}: "${String(v).replace(/"/g, '\\"')}"`);
          });
        });
      }
    }
  }
  lines.push('---');
  return lines.join('\n');
}

function buildImports(videos, sources) {
  const imports = [];
  imports.push("import VideoEmbed from '@components/VideoEmbed.astro';");
  imports.push("import Callout from '@components/Callout.astro';");
  if (sources.length > 0) {
    imports.push("import SourceBox from '@components/SourceBox.astro';");
  }
  return imports.join('\n');
}

function buildSourceBoxMdx(sources) {
  if (sources.length === 0) return '';
  const entries = sources.map(s =>
    `  { name: "${s.name.replace(/"/g, '\\"')}", url: "${s.url}" }`
  ).join(',\n');
  return `<SourceBox sources={[\n${entries}\n]} />\n`;
}

// ── Main conversion ──────────────────────────────────────────────────────────

function convertFile(srcPath, destPath, collection) {
  const html = fs.readFileSync(srcPath, 'utf8');
  const doc = parse(html);

  const title = (doc.querySelector('title')?.text || '').replace(/ — ISMR$/, '').trim();
  const description = getMeta(doc, 'description');
  const canonical = getCanonical(doc);
  const videos = extractVideoIds(doc);
  const tags = extractTags(doc);
  const sources = extractSources(doc);
  const difficulty = extractDifficulty(doc);
  const timeEstimate = extractTimeEstimate(doc);
  const publishDate = extractPublishDate(doc);
  const updatedDate = extractUpdatedDate(doc);

  // Build frontmatter object based on collection type
  const fm = {
    title,
    description,
    publishDate,
    updatedDate,
    difficulty,
    timeEstimate,
    tags,
    appliesTo: [],
    videos,
    sources,
    canonical,
    draft: false,
  };

  // models collection has no difficulty/timeEstimate
  if (collection === 'models') {
    delete fm.difficulty;
    delete fm.timeEstimate;
    delete fm.appliesTo;
  }

  // Extract main content
  const mainEl = doc.querySelector('main[data-pagefind-body]') ||
                 doc.querySelector('main') ||
                 doc.querySelector('.guide-content');

  if (!mainEl) {
    console.warn(`  ⚠ No main content found in ${path.basename(srcPath)}`);
    return false;
  }

  const cleanedHtml = cleanContent(mainEl.innerHTML);
  let mdxBody = td.turndown(cleanedHtml);

  // Replace source-box placeholder with actual component
  const sourceMdx = buildSourceBoxMdx(sources);
  mdxBody = mdxBody.replace('{/* SOURCE_BOX_PLACEHOLDER */}', sourceMdx || '');

  // Clean up excess blank lines
  mdxBody = mdxBody.replace(/\n{4,}/g, '\n\n').trim();

  const frontmatter = buildFrontmatter(fm);
  const imports = buildImports(videos, sources);
  const output = `${frontmatter}\n\n${imports}\n\n${mdxBody}\n`;

  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, output, 'utf8');
  return true;
}

// ── Run ──────────────────────────────────────────────────────────────────────

let converted = 0;
let skipped = 0;
let errors = 0;

for (const section of SECTIONS) {
  const srcDir = path.join(ROOT, section.src);
  const destDir = path.join(ROOT, section.dest);

  if (!fs.existsSync(srcDir)) {
    console.log(`⏭  ${section.src} — directory not found, skipping`);
    continue;
  }

  const files = fs.readdirSync(srcDir).filter(f =>
    f.endsWith('.html') && f !== 'index.html' && !f.startsWith('_')
  );

  console.log(`\n📂 ${section.src} (${files.length} files)`);

  for (const file of files) {
    if (SKIP.has(file)) {
      console.log(`  ✓ skip  ${file} (already migrated)`);
      skipped++;
      continue;
    }

    const slug = file.replace('.html', '');
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, `${slug}.mdx`);

    try {
      const ok = convertFile(srcPath, destPath, section.collection);
      if (ok) {
        console.log(`  ✓ done  ${file} → ${slug}.mdx`);
        converted++;
      }
    } catch (err) {
      console.error(`  ✗ error ${file}: ${err.message}`);
      errors++;
    }
  }
}

console.log(`\n════════════════════════════════`);
console.log(`Converted: ${converted}  |  Skipped: ${skipped}  |  Errors: ${errors}`);
console.log(`════════════════════════════════\n`);
