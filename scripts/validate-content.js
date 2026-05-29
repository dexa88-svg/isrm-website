#!/usr/bin/env node
/**
 * validate-content.js
 * Pre-build validator for src/content MDX files.
 *
 * Checks every .mdx file before `astro build` runs so that broken or
 * duplicate pages are caught in CI, not discovered on the live site.
 *
 * Exit codes
 *   0  All checks passed
 *   1  One or more checks failed (deploy is blocked)
 *
 * Run: node scripts/validate-content.js
 * Also wired into: npm test  (via package.json)
 */

'use strict';

const fs   = require('fs');
const path = require('path');

// ─── Configuration ────────────────────────────────────────────────────────────

const ROOT         = path.join(__dirname, '..');
const CONTENT_ROOT = path.join(ROOT, 'src', 'content');

/**
 * Required frontmatter fields per collection.
 * Values are either a plain string (any non-empty value accepted) or an
 * array of allowed values (enum check).
 */
const REQUIRED_FIELDS = {
  'repair-guides': {
    title:        'string',
    description:  'string',
    publishDate:  'date',
    updatedDate:  'date',
    difficulty:   ['Beginner', 'Intermediate', 'Advanced'],
    timeEstimate: 'string',
    tags:         'array',
    appliesTo:    'array',
    canonical:    'url',
    draft:        'boolean',
  },
  diagnostics: {
    title:       'string',
    description: 'string',
    publishDate: 'date',
    updatedDate: 'date',
    difficulty:  ['Beginner', 'Intermediate', 'Advanced'],
    tags:        'array',
    appliesTo:   'array',
    canonical:   'url',
    draft:       'boolean',
    category:    ['starting', 'fuel', 'transmission', 'electrical'],
    engine:      ['gy6', 'piaggio', 'both'],
    fuel:        ['carb', 'efi', 'both'],
    section:     'string',
  },
  models: {
    title:       'string',
    description: 'string',
    publishDate: 'date',
    updatedDate: 'date',
    tags:        'array',
    canonical:   'url',
    draft:       'boolean',
  },
  parts: {
    title:       'string',
    description: 'string',
    publishDate: 'date',
    updatedDate: 'date',
    tags:        'array',
    canonical:   'url',
    draft:       'boolean',
  },
  videos: {
    title:       'string',
    description: 'string',
    publishDate: 'date',
    updatedDate: 'date',
    tags:        'array',
    canonical:   'url',
    draft:       'boolean',
  },
};

/**
 * Title similarity threshold: two titles are considered duplicates when
 * their normalised edit distance is below this value (0–1 scale).
 * 0.08 = titles must differ by at least 8% of their combined length.
 * Set conservatively to avoid false positives on legitimate sibling guides
 * (e.g. "Spark Plug Replacement" vs "Stator Replacement" score ~0.13 — allowed).
 * Only fires on near-identical pages like "ZIP 50 Overview" vs "ZIP 50/100 Overview".
 */
const TITLE_SIMILARITY_THRESHOLD = 0.08;

// ─── Frontmatter parser ───────────────────────────────────────────────────────

/**
 * Extract raw frontmatter block from MDX/MD source.
 * Returns null when no valid --- ... --- block is found.
 */
function extractFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return match ? match[1] : null;
}

/**
 * Parse a YAML-like frontmatter block into a plain object.
 * Handles: strings, quoted strings, booleans, dates, arrays (- item), and
 * nested objects (used for videos/sources arrays — treated as "present").
 *
 * This is intentionally simple: it covers the ISMR schema without pulling
 * in a full YAML library, so the validator has zero extra dependencies.
 */
function parseFrontmatter(raw) {
  const result = {};
  const lines  = raw.split(/\r?\n/);
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Top-level key: value
    const kvMatch = line.match(/^([a-zA-Z_][a-zA-Z0-9_-]*):\s*(.*)/);
    if (!kvMatch) { i++; continue; }

    const key   = kvMatch[1];
    let   value = kvMatch[2].trim();

    // Inline array:  key: [a, b, c]
    if (value.startsWith('[')) {
      const inner = value.replace(/^\[/, '').replace(/\]$/, '');
      result[key] = inner
        .split(',')
        .map(s => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
      i++;
      continue;
    }

    // Block array: next lines start with "- "
    if (value === '') {
      const items = [];
      i++;
      while (i < lines.length && /^\s+-\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s+-\s+/, '').trim().replace(/^["']|["']$/g, ''));
        i++;
      }
      if (items.length > 0) {
        result[key] = items;
      } else {
        // Empty block — could be a nested object (videos, sources)
        // Just mark as present so required-field checks pass
        result[key] = [];
      }
      continue;
    }

    // Quoted string
    if (/^["']/.test(value)) {
      result[key] = value.replace(/^["']|["']$/g, '');
      i++;
      continue;
    }

    // Boolean
    if (value === 'true')  { result[key] = true;  i++; continue; }
    if (value === 'false') { result[key] = false; i++; continue; }

    // Plain string (includes dates — stored as string, validated separately)
    result[key] = value;
    i++;
  }

  return result;
}

// ─── Field validators ─────────────────────────────────────────────────────────

const DATE_RE    = /^\d{4}-\d{2}-\d{2}$/;
const CANON_RE   = /^https:\/\/ismr\.online\//;

function validateField(key, value, rule) {
  if (Array.isArray(rule)) {
    // Enum check
    if (!rule.includes(value)) {
      return `"${key}" must be one of [${rule.join(', ')}], got "${value}"`;
    }
    return null;
  }

  switch (rule) {
    case 'string':
      if (typeof value !== 'string' || value.trim() === '') {
        return `"${key}" must be a non-empty string`;
      }
      return null;

    case 'date':
      if (typeof value !== 'string' || !DATE_RE.test(value)) {
        return `"${key}" must be a YYYY-MM-DD date, got "${value}"`;
      }
      return null;

    case 'array':
      if (!Array.isArray(value) || value.length === 0) {
        return `"${key}" must be a non-empty array`;
      }
      return null;

    case 'url':
      if (typeof value !== 'string' || !CANON_RE.test(value)) {
        return `"${key}" must start with https://ismr.online/, got "${value}"`;
      }
      return null;

    case 'boolean':
      if (typeof value !== 'boolean') {
        return `"${key}" must be true or false, got "${value}"`;
      }
      return null;

    default:
      return null;
  }
}

// ─── Duplicate detection ──────────────────────────────────────────────────────

/**
 * Normalise a title for comparison: lowercase, strip punctuation, collapse spaces.
 */
function normaliseTitle(title) {
  if (typeof title !== 'string') return '';
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Levenshtein edit distance between two strings (capped at max for performance).
 */
function editDistance(a, b) {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) => [i]);
  for (let j = 1; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

/**
 * Returns true when two normalised titles are suspiciously similar.
 * distance / (len_a + len_b) < TITLE_SIMILARITY_THRESHOLD
 */
function titlesAreDuplicates(a, b) {
  if (a === b) return true;
  const dist = editDistance(a, b);
  return dist / (a.length + b.length) < TITLE_SIMILARITY_THRESHOLD;
}

// ─── Canonical URL format check ───────────────────────────────────────────────

/**
 * Derive the expected canonical from file path.
 * src/content/repair-guides/gy6-spark-plug-guide.mdx
 *   → https://ismr.online/repair-guides/gy6-spark-plug-guide.html
 */
function expectedCanonical(section, slug) {
  return `https://ismr.online/${section}/${slug}.html`;
}

// ─── Main validation logic ────────────────────────────────────────────────────

/**
 * Scan all MDX files under CONTENT_ROOT and run every check.
 * Returns { errors, warnings, checked } — does NOT call process.exit().
 * This keeps the function unit-testable.
 *
 * @param {object} [opts]
 * @param {string} [opts.contentRoot]  Override content root path (for tests).
 * @returns {{ errors: string[], warnings: string[], checked: number }}
 */
function validateContent(opts = {}) {
  const contentRoot = opts.contentRoot || CONTENT_ROOT;
  const errors   = [];
  const warnings = [];
  let   checked  = 0;

  // Collect all pages keyed by "section/slug" for cross-file duplicate checks
  // { normalisedTitle → "section/slug" }
  const titleIndex = {};
  // { canonical → "section/slug" }
  const canonicalIndex = {};
  // { section/slug → { title, section, slug } }
  const allPages = {};

  // ── Pass 1: per-file checks ──────────────────────────────────────────────
  const sections = Object.keys(REQUIRED_FIELDS);

  for (const section of sections) {
    const sectionPath = path.join(contentRoot, section);
    if (!fs.existsSync(sectionPath)) continue;

    const files = fs.readdirSync(sectionPath)
      .filter(f => f.endsWith('.mdx') || f.endsWith('.md'));

    for (const file of files) {
      const slug     = file.replace(/\.(mdx|md)$/, '');
      const id       = `${section}/${slug}`;
      const filePath = path.join(sectionPath, file);
      checked++;

      // — Read file ——————————————————————————————————————————————————————————
      let source;
      try {
        source = fs.readFileSync(filePath, 'utf8');
      } catch (err) {
        errors.push(`[${id}] Cannot read file: ${err.message}`);
        continue;
      }

      // Security gate: flag suspiciously injected content
      if (/ignore.{0,30}previous.{0,30}instructions/i.test(source) ||
          /you are now/i.test(source) ||
          /override.{0,20}system/i.test(source)) {
        warnings.push(`[${id}] SECURITY: possible injected content — manual review required`);
      }

      // — Frontmatter ———————————————————————————————————————————————————————
      const rawFm = extractFrontmatter(source);
      if (!rawFm) {
        errors.push(`[${id}] Missing frontmatter block (file has no --- ... --- section)`);
        continue;
      }

      const fm = parseFrontmatter(rawFm);

      // Draft pages skip most checks (they won't be built)
      const isDraft = fm.draft === true;

      // — Required fields ———————————————————————————————————————————————————
      const schema = REQUIRED_FIELDS[section];
      for (const [key, rule] of Object.entries(schema)) {
        const value = fm[key];
        if (value === undefined || value === null || value === '') {
          if (!isDraft || key === 'title') {
            // Always require title even on drafts (slug collision detection needs it)
            errors.push(`[${id}] Missing required field: "${key}"`);
          }
          continue;
        }
        const fieldError = validateField(key, value, rule);
        if (fieldError && !isDraft) {
          errors.push(`[${id}] ${fieldError}`);
        }
      }

      // — Title length (SEO) ————————————————————————————————————————————————
      if (fm.title && typeof fm.title === 'string' && fm.title.length > 53) {
        warnings.push(
          `[${id}] Title is ${fm.title.length} chars — layout appends " — ISMR", total may exceed 60 chars for SEO`
        );
      }

      // — Description length (SEO) ——————————————————————————————————————————
      if (fm.description && typeof fm.description === 'string' && !isDraft) {
        const len = fm.description.length;
        if (len < 50) {
          errors.push(`[${id}] Description is too short (${len} chars, minimum 50)`);
        } else if (len < 120 || len > 165) {
          warnings.push(`[${id}] Description is ${len} chars — aim for 120–160 chars for SEO`);
        }
      }

      // — Canonical URL format ——————————————————————————————————————————————
      if (fm.canonical && !isDraft) {
        const want = expectedCanonical(section, slug);
        if (fm.canonical !== want) {
          errors.push(
            `[${id}] Canonical mismatch:\n` +
            `     got:  ${fm.canonical}\n` +
            `     want: ${want}`
          );
        }
      }

      // — updatedDate not before publishDate ————————————————————————————————
      if (fm.publishDate && fm.updatedDate && !isDraft) {
        const pub     = new Date(fm.publishDate);
        const updated = new Date(fm.updatedDate);
        if (!isNaN(pub) && !isNaN(updated) && updated < pub) {
          errors.push(
            `[${id}] updatedDate (${fm.updatedDate}) is before publishDate (${fm.publishDate})`
          );
        }
      }

      // — No raw <script> or <form> in body —————————————————————————————————
      const bodyStart = source.indexOf('\n---', 3);
      const body      = bodyStart >= 0 ? source.slice(bodyStart) : '';

      if (/<script(?!\s+type=["']module["']|\s+is:inline|\s+type=["']application\/ld\+json["'])/i.test(body)) {
        errors.push(`[${id}] Raw <script> tag found in MDX body — use <VideoEmbed> or is:inline`);
      }
      if (/<form\b/i.test(body)) {
        errors.push(`[${id}] Raw <form> tag found in MDX body — forms must go in Astro components`);
      }
      if (/\bon(click|load|error|submit|mouseover)=/i.test(body)) {
        errors.push(`[${id}] Inline event handler found in MDX body`);
      }
      if (/<iframe[^>]*\bsrc=["'][^"']*youtube\.com(?!-nocookie)/i.test(body)) {
        errors.push(`[${id}] Raw youtube.com iframe — use <VideoEmbed> component (youtube-nocookie.com)`);
      }

      // — Collect for cross-file checks ————————————————————————————————————
      if (!isDraft && fm.title) {
        allPages[id] = {
          title:     fm.title,
          normTitle: normaliseTitle(fm.title),
          canonical: fm.canonical,
          section,
          slug,
        };
      }
    }
  }

  // ── Pass 2: cross-file duplicate detection ───────────────────────────────
  const pageList = Object.entries(allPages);

  for (const [id, page] of pageList) {
    // — Canonical collision (exact) ——————————————————————————————————————————
    if (page.canonical) {
      const existing = canonicalIndex[page.canonical];
      if (existing) {
        errors.push(
          `Duplicate canonical URL "${page.canonical}":\n` +
          `     ${existing}\n` +
          `     ${id}`
        );
      } else {
        canonicalIndex[page.canonical] = id;
      }
    }

    // — Title similarity ——————————————————————————————————————————————————————
    const existingTitle = titleIndex[page.normTitle];
    if (existingTitle) {
      // Exact normalised match
      errors.push(
        `Duplicate title detected:\n` +
        `     "${page.title}"\n` +
        `     ${existingTitle}  ↔  ${id}`
      );
    } else {
      // Near-duplicate check against all previously indexed titles
      for (const [indexedNorm, indexedId] of Object.entries(titleIndex)) {
        if (titlesAreDuplicates(page.normTitle, indexedNorm)) {
          warnings.push(
            `Near-duplicate titles:\n` +
            `     "${allPages[indexedId]?.title || indexedNorm}" (${indexedId})\n` +
            `     "${page.title}" (${id})\n` +
            `     Consider merging or differentiating these pages`
          );
          break; // one warning per page is enough
        }
      }
      titleIndex[page.normTitle] = id;
    }
  }

  return { errors, warnings, checked };
}

// ─── CLI entry point ──────────────────────────────────────────────────────────

function main() {
  const { errors, warnings, checked } = validateContent();

  const sections = Object.keys(REQUIRED_FIELDS);
  console.log(`\nISMR Content Validator`);
  console.log(`Scanned ${checked} MDX file(s) across: ${sections.join(', ')}\n`);

  if (warnings.length > 0) {
    console.warn(`⚠️  ${warnings.length} warning(s):`);
    warnings.forEach(w => console.warn(`   ${w}`));
    console.warn('');
  }

  if (errors.length > 0) {
    console.error(`❌  ${errors.length} error(s) — fix these before deploying:\n`);
    errors.forEach(e => console.error(`   ${e}\n`));
    process.exit(1);
  }

  console.log(`✅  All ${checked} content file(s) passed validation.\n`);
}

// Allow require() in tests without running main()
if (require.main === module) {
  main();
}

module.exports = { validateContent, extractFrontmatter, parseFrontmatter, titlesAreDuplicates, normaliseTitle, expectedCanonical };
