# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

**Project:** ISMR — Interactive Scooter Manuals for Repair  
**Owner:** Den (Dzianis) — dexa88@gmail.com | **Domain:** ismr.online  
**Phase:** 1 largely complete — deploy pipeline active, GA4 live, design system 100% compliant, Jest suite added

---

## Commands

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Regenerate public/data/stats.json (must run before deploy if guide counts changed)
npm run generate-stats

# Run site locally
python3 -m http.server 8080 --directory public
# or: npx serve public
```

There is **no build step, no bundler, no lint command.** The site is static HTML/CSS/JS — what's in `public/` is what gets served.

---

## Architecture

### Two-area split
- **`public/`** — everything deployed to Hetzner (HTML pages, `styles.css`, `script.js`, JSON data). Never put dev tooling here.
- **`_dev/`** — documentation, templates, scheduled-task prompts, Python utilities. Never deployed.

### Static-only, no framework (Phase 1)
No transpilation, no bundler. One global stylesheet (`styles.css`), one JS file (`script.js`), and one stats loader (`load-stats.js`). All content is pre-written HTML.

### Content page structure
Pages live under `public/repair-guides/`, `public/diagnostics/`, `public/models/`, `public/videos/`. Every category has an `index.html` listing page. When adding a new guide, follow the template in `_dev/GUIDE-STRUCTURE.md`.

**Model page style rules** (gold-standard template: `public/models/piaggio-zip-100-technical-overview.html`):
- All `<style>` blocks must be in `<head>` — never in `<body>`
- Single H1 per page, inside `.page-hero-inner` only
- Single breadcrumb, inside `.page-hero-inner` only — no additional breadcrumbs in `<main>`
- Use `.guide-tag` (teal: `rgba(0,168,204,0.1)` bg, `var(--accent)` text) — not `.tag` (yellow `var(--warning)`)
- Table `<th>`: `var(--primary)` text, `var(--surface-2)` bg, `text-transform: uppercase`, `letter-spacing: 0.04em`
- `.source-box`: `rgba(255,107,53,0.07)` bg, `rgba(255,107,53,0.2)` border, `4px solid var(--primary)` left border
- `code`: `var(--surface-2)` bg, `1px solid var(--border)` border, JetBrains Mono font stack
- Add `<script src="../script.js"></script>` before `</body>` for navbar toggle
- Add `class="nav-link active"` to the matching nav link for the current section

### Stats pipeline
`scripts/generate-stats.js` counts HTML files in `public/repair-guides/` and `public/diagnostics/` (excluding `index.html`), then writes `public/data/stats.json`. `public/load-stats.js` fetches that JSON on DOMContentLoaded and updates `.feature-badge` and `.stat-number` DOM elements. The deploy workflow runs this script before uploading.

### Deploy pipeline
Push to `main` → GitHub Actions runs `npm test` → if passing, runs `generate-stats` → uploads all of `public/` to Hetzner via SFTP curl loop. Live within ~30s. Documented in `_dev/documentation/FTP-AUTO-DEPLOY-PROCESS.md`.

### Tracking files (keep in sync)
- `public/sync-manifest.json` — one entry per generated page (URL, title, category, sources, addedAt)
- `public/sources-registry.json` — 91 known content sources with type, model, lastChecked, active flag
- `public/sitemap.xml` — must be updated when pages are added/removed

### Scheduled automation
Three Claude scheduled tasks run against this repo (prompts live in `_dev/scheduled-tasks-updated/`):
- **`isrm-content-sync`** (daily 8:01 AM) — discover + generate new HTML guide pages
- **`isrm-design-compliance`** (Mon 9:00 AM) — audit all pages; write compliance report to `_dev/documentation/design-system/WEEKLY_COMPLIANCE_REPORT_[DATE].md`
- **`isrm-consistency-check`** (daily 10:01 AM) — fix broken links, enforce scope, sync manifest

---

## Design System

CSS custom properties (canonical reference: `_dev/documentation/design-system/styles-reference.css`):

```css
--primary: #ff6b35       /* orange-red — buttons, accents */
--secondary: #004e89     /* navy */
--accent: #00a8cc        /* cyan */
--bg-dark: #0f1419       /* page background */
--surface: #1a2332       /* card background */
--surface-2: #242f3e     /* elevated surface */
--text-primary: #f5f5f5
--text-secondary: #a0a0a0
--border: #2a3548
--warning: #f5a623       /* amber — NOT the primary colour */
```

---

## Content Standards

Every repair guide must include: minimum 1 embedded video (use `youtube-nocookie.com`, not `youtube.com`), step-by-step instructions, tools/parts list, difficulty + time estimate, safety warnings, source attribution, and a **"Last Updated" date** (policy in `_dev/PAGE-UPDATE-TRACKING.md`).

**In-scope:** GY6 engines (50–150cc), Piaggio/Vespa (Primavera, Sprint, Zip). Petrol-only — no electric scooters until Phase 3.

**Language:** Formal, professional, technically accurate. CC BY-SA 4.0 license.

---

## Key Reference Files

| File | Purpose |
|------|---------|
| `_dev/GUIDE-STRUCTURE.md` | HTML template for all new guides |
| `_dev/PROJECT-SCOPE.md` | Canonical scope + mandated content sources |
| `_dev/ROADMAP.md` | 13-phase build plan |
| `_dev/documentation/design-system/styles-reference.css` | CSS variables source of truth |
| `_dev/documentation/SCHEDULED_TASKS.md` | Scheduled tasks in full detail |
| `public/sync-manifest.json` | All generated pages |
| `public/sources-registry.json` | All 91 content sources |
| `documents/` | Reference PDFs: GY6, Zip 50 4T, Zip 100 4T service manuals |

---

## Phase 2 Plans (not yet started)

Framework: **Astro** (chosen). Content: Markdown/MDX via Astro Content Collections. Hosting: possibly Cloudflare Pages. CMS: Sanity or Contentlayer (TBD). Search: Pagefind.

Open decisions: Markdown-in-Git vs database at scale; GitHub-PR-as-CMS (Decap/Sveltia) vs custom editor; first hero model for 3D treatment.
