# ISMR Search Architecture — Pagefind

**Added:** 2026-05-19  
**Version:** Pagefind 1.5.2  
**Status:** Live — runs on every deploy  

---

## Overview

ISMR uses **Pagefind** for full-text search. It is a build-time search engine — the index is pre-computed during deployment and served as static files. There is no search server, no database, and no API. The entire search operation runs in the user's browser against pre-built files on Hetzner.

---

## Architecture in Two Phases

### Phase 1 — Build Time (GitHub Actions)

```
Push to main
    │
    ▼
npm test
    │
    ▼
node scripts/generate-stats.js   ← regenerates stats.json + sitemap.xml
    │
    ▼
npx pagefind --site public --output-path public/pagefind   ← NEW
    │   reads every <main data-pagefind-body> element
    │   ignores <nav data-pagefind-ignore> and <footer data-pagefind-ignore>
    │   tokenises 5,644 words across 63 pages
    │   writes pre-built index to public/pagefind/
    │
    ▼
curl SFTP upload → Hetzner (entire public/ including pagefind/)
    │
    ▼
IndexNow ping
```

Pagefind runs in ~0.2 seconds and produces a `public/pagefind/` directory containing:

| File / Directory | Purpose |
|---|---|
| `pagefind.js` | Core search engine (runs in browser) |
| `pagefind-ui.css` | Default UI styles (used for `.mark` highlight styling) |
| `pagefind-entry.json` | Index metadata (language, version) |
| `index/` (16 files) | Compressed word/position index chunks |
| `fragment/` (129 files) | Pre-rendered result snippets (title + excerpt per page) |
| `pagefind-highlight.js` | In-page term highlighting (future use) |

### Phase 2 — Runtime (Browser)

```
User types in search box (#searchInput)
    │
    ▼ 220ms debounce
    │
    ▼
pagefind.js loaded lazily (only on first keypress, ~30 KB)
    │
    ▼
pagefind.search(query)
    │   fetches only the index chunks relevant to this query
    │   no full index download — partial fetches only
    │
    ▼
top 8 results returned: { url, meta.title, excerpt }
    │   excerpt includes <mark> tags around matched terms
    │
    ▼
results rendered as dropdown below search box (#search-results)
    │
    ▼
user clicks result → browser navigates to that page
```

---

## HTML Attributes

Two attributes control what Pagefind indexes on each page:

| Attribute | Applied to | Effect |
|---|---|---|
| `data-pagefind-body` | `<main>` | Marks the content region to index. Pages without this are skipped entirely. |
| `data-pagefind-ignore` | `<nav class="navbar">` and `<footer>` | Excludes nav links and footer text from the index so they don't pollute results. |

These were added to all 64 HTML pages (excluding `_removed/`) via a batch Python script on 2026-05-19.

**Example on a guide page:**
```html
<nav class="navbar" data-pagefind-ignore>...</nav>

<main data-pagefind-body>
  <!-- everything here is indexed -->
</main>

<footer data-pagefind-ignore>...</footer>
```

---

## Search UI (Homepage)

The search UI is built directly into the existing hero search box on `public/index.html` — no separate search page.

**Relevant HTML:**
```html
<div class="hero-search">
  <input type="text" id="searchInput" autocomplete="off" />
  <button class="search-btn">🔍</button>
</div>
<div id="search-results" aria-live="polite"></div>
```

**JavaScript (module script, bottom of index.html):**
- Loads `pagefind.js` lazily on first keypress (not on page load)
- 220ms debounce to avoid searching on every character
- Returns top 8 results with title + highlighted excerpt
- Closes on Escape key or click outside
- `aria-live="polite"` announces results to screen readers

**CSS classes:**

| Class | Description |
|---|---|
| `#search-results` | Absolutely positioned dropdown, hidden when empty |
| `.search-result-item` | Individual result row (link) |
| `.search-result-title` | Page title |
| `.search-result-excerpt` | Snippet with `<mark>` highlights |
| `.search-no-results` | "No results found" message |

---

## Local Development

To rebuild the search index locally after adding or editing pages:

```bash
# Rebuild index only
npm run search-index

# Rebuild stats + index together (equivalent to what deploy does)
npm run build

# Always preview via HTTP server, never file://
python3 -m http.server 8080 --directory public
# Then open: http://localhost:8080
```

> ⚠️ Search will not work when opening HTML files directly via `file://` — the browser blocks the fetch calls Pagefind uses to load index chunks. Always use the HTTP server.

---

## What Gets Indexed

- **63 pages** across `repair-guides/`, `diagnostics/`, `models/`, `videos/`, `parts/`, `legal/`
- **5,644 words** in the English index
- Pages without `data-pagefind-body` are skipped (currently: none — all content pages have it)
- The `_removed/` directory is not indexed (Pagefind follows `.gitignore`-style exclusions; files in subdirectories named `_removed` are not walked)

---

## Files Changed / Added

| File | Change |
|---|---|
| `package.json` | Added `pagefind` dev dependency, `search-index` and `build` npm scripts |
| `.github/workflows/deploy.yml` | Added `npx pagefind` step in deploy job (after generate-stats, before SFTP) |
| `.gitignore` | Added `public/pagefind/` — index is generated at deploy time, not committed |
| `public/index.html` | Added Pagefind CSS link, `#search-results` container, inline module script, result styles |
| All 64 HTML pages | Added `data-pagefind-body` on `<main>`, `data-pagefind-ignore` on `<nav>` and `<footer>` |
| `public/pagefind/` | Generated directory — **not in git**, rebuilt on every deploy |

---

## Maintenance

**Adding new pages:** No action needed. The next deploy automatically reindexes everything in `public/`.

**Updating the Pagefind version:**
```bash
npm install pagefind@latest --save-dev
# Test locally, then push
```

**Checking index health:**
```bash
node -e "
const fs = require('fs');
const e = JSON.parse(fs.readFileSync('public/pagefind/pagefind-entry.json','utf8'));
console.log('Version:', e.version, '| Languages:', Object.keys(e.languages));
console.log('Fragments:', fs.readdirSync('public/pagefind/fragment').length);
"
```

**If search stops working on the live site:** most likely cause is that the deploy ran without the Pagefind step (e.g. a manual SFTP upload). Fix: push any commit to `main` to trigger the full Actions pipeline.

---

## Future Improvements

- **Filters:** Pagefind supports metadata-based filtering (e.g. filter by `engine: GY6` or `type: diagnostic`). This would require adding `data-pagefind-meta` attributes to pages and exposing filter UI. Planned for Phase 3 polish.
- **In-page highlighting:** `pagefind-highlight.js` can highlight the search term when a user lands on a result page. Low effort, good UX.
- **Phase 7 — AI assistant:** Pagefind's indexed corpus can also feed the RAG pipeline for the future AI repair assistant, avoiding duplicate indexing work.

---

*Document maintained by: ISMR project (Den Paulavets)*  
*Last updated: 2026-05-19*
