# ISMR Design System Compliance Audit
**Date:** 2026-05-29  
**Task:** isrm-design-compliance-check (weekly automated run)

---

## Section 1: Executive Summary

```
ISMR Design System Compliance Audit
Date: 2026-05-29
Files Audited: 76 pages built
  Tier 1 (layouts/components): 10 files
  Tier 2 (index/static pages): 9 files
  Tier 3 (MDX content files): 57 files

OVERALL COMPLIANCE: 99%

- Compliant files (0 issues):      75
- Files with minor issues (1–2):    1  (global.css — warning scope drift, minor)
- Files with major issues (3–5):    0
- Files with critical issues (6+):  0

Security anomalies found: 0
Auto-fixes applied: 0
Build result: ✓ SUCCESS — 76 pages built, 0 errors
```

---

## Section 2: Compliance by Check

```
CHECK 1  — Hex colors replaced:                0 violations — all colors use CSS variables ✓
CHECK 2  — Border radius fixed:                0 violations — all radii use var(--radius-*) ✓
CHECK 3  — Missing responsive breakpoints:     0 files — all index pages have 768px + 480px ✓
CHECK 4  — Component pattern violations:       0 — .tag class not found anywhere ✓
CHECK 5  — Focus state missing:                0 — :focus-visible rule present in global.css ✓
CHECK 6  — Navbar link format:                 ✓ — all links use trailing-slash paths ✓
CHECK 7  — Security anomalies:                 0 — no raw scripts, forms, or inline handlers ✓
CHECK 8  — MDX frontmatter:                    0 violations — all required fields present ✓
CHECK 9  — Canonical URLs:                     0 violations — all canonicals correct ✓
CHECK 10 — MDX import paths:                   0 violations — @components/ alias is configured
                                               in astro.config.mjs (Vite resolve.alias) ✓
CHECK 11 — JSON-LD structured data:            ✓ — HowTo (repair-guides), Article (diagnostics),
                                               TechArticle (models) — all correct ✓
CHECK 12 — Index featured guide freshness:     ✓ — all 14 hardcoded slugs resolve to
                                               non-draft MDX files ✓

WARNING SCOPE (CHECK 1 caveat):
  var(--warning) used in .construction-banner and .construction-text strong
  — UI context (site-wide banner), not callout-warn — flagged for manual review
```

---

## Section 3: File-by-File Assessment

### Tier 1 — Shared Infrastructure

```
📄 src/styles/global.css
Status: ⚠️ MINOR

Issues Found:
1. [Check 1 — Warning scope] var(--warning) applied to .construction-banner
   border-bottom (L173) and .construction-text strong color (L200) — these are
   UI elements (site-wide construction notice), not callout-warn contexts.
   Per spec this is a design violation flagged for manual review; no auto-fix.
   Note: val-warn (L1247) and flash-demo (L1355) are diagnostic/content contexts
   and are acceptable uses.

Security: ✓ No anomalies
```

```
📄 src/layouts/Base.astro
Status: ✓ COMPLIANT
  - GA4 script: present (G-53LY3KPDYM) ✓
  - Favicons: favicon.ico, favicon.svg, apple-touch-icon, webmanifest ✓
  - JSON-LD: injected via jsonLd prop ✓
  - meta description, canonical, OG/Twitter tags: all present ✓
Security: ✓ GA4 script uses is:inline (allowed)
```

```
📄 src/layouts/Guide.astro
Status: ✓ COMPLIANT
  - JSON-LD @type: HowTo (set by [...slug].astro) ✓
  - Breadcrumb: Home → Repair Guides → {title} ✓
  - Uses Navbar + Footer components ✓
Security: ✓ No anomalies
```

```
📄 src/layouts/Diagnostic.astro
Status: ✓ COMPLIANT
  - JSON-LD @type: Article (set by [...slug].astro) ✓
  - Breadcrumb: Home → Diagnostics → {title} ✓
Security: ✓ No anomalies
```

```
📄 src/layouts/ModelPage.astro
Status: ✓ COMPLIANT
  - JSON-LD @type: TechArticle (set by [...slug].astro) ✓
  - Breadcrumb: Home → Models → {title} ✓
Security: ✓ No anomalies
```

```
📄 src/components/Navbar.astro
Status: ✓ COMPLIANT
  - Brand: href="/" ✓
  - Guides: href="/repair-guides/" ✓
  - Diagnostics: href="/diagnostics/" ✓
  - Parts: href="/parts/" ✓
  - Models: href="/models/" ✓
  - About: href="/#about" ✓
  - All links use trailing-slash format (no .html suffixes) ✓
Security: ✓ No anomalies
```

```
📄 src/components/Footer.astro
Status: ✓ COMPLIANT
  - Legal links: /legal/privacy.html, /legal/terms.html — matches Astro output format
    (build format: 'preserve') ✓
  - Uses CSS variables for all colors ✓
Security: ✓ No anomalies
```

```
📄 src/components/Callout.astro
Status: ✓ COMPLIANT
  - Types: 'warn' | 'danger' | 'tip' — correct per spec ✓
  - No old 'warning' or 'info' variants ✓
Security: ✓ No anomalies
```

```
📄 src/components/VideoEmbed.astro
Status: ✓ COMPLIANT
  - Uses youtube-nocookie.com ✓
  - No raw youtube.com iframes ✓
Security: ✓ No anomalies
```

```
📄 src/components/SourceBox.astro
Status: ✓ COMPLIANT
  - Uses .source-box class (defined in global.css) ✓
Security: ✓ No anomalies
```

---

### Tier 2 — Static Index Pages

```
📄 src/pages/index.astro          ✓ COMPLIANT (breakpoints, focus, vars, JSON-LD WebSite)
📄 src/pages/repair-guides/index.astro  ✓ COMPLIANT (breakpoints 768+480px, JSON-LD CollectionPage)
📄 src/pages/diagnostics/index.astro   ✓ COMPLIANT (breakpoints 768+480px, JSON-LD CollectionPage)
📄 src/pages/models/index.astro        ✓ COMPLIANT
📄 src/pages/parts/index.astro         ✓ COMPLIANT
📄 src/pages/videos/index.astro        ✓ COMPLIANT
📄 src/pages/news/index.astro          ✓ COMPLIANT
📄 src/pages/legal/privacy.astro       ✓ COMPLIANT
📄 src/pages/legal/terms.astro         ✓ COMPLIANT
```

---

### Tier 3 — MDX Content Files (57 files)

All 57 MDX files across repair-guides, diagnostics, models, parts, and videos were audited. Results:

- Frontmatter (Check 8): ✓ All required fields present and valid on all files
- Canonical URLs (Check 9): ✓ All match `https://ismr.online/[section]/[slug].html`
- Import paths (Check 10): ✓ `@components/` alias is configured in Vite — correct
- Security (Check 7): ✓ No raw `<script>`, `<form>`, inline event handlers, or raw youtube.com iframes
- Featured slug freshness (Check 12): ✓ All 14 hardcoded slugs on index.astro resolve to non-draft files

---

## Section 4: Action Items

### MEDIUM Priority (manual review — no build impact)

1. **Warning colour scope drift in global.css**
   - `var(--warning)` (#f5a623) is used in `.construction-banner` (L171–176) and
     `.construction-text strong` (L199–202) — a site-wide UI banner, not a callout-warn context.
   - Per the design spec, `--warning` should only appear in callout-warn contexts.
   - **Recommended action:** Replace `var(--warning)` in `.construction-banner` with
     `var(--accent)` (cyan) or a dedicated banner colour variable. The construction banner
     is an informational notice, not a safety warning.
   - No auto-fix applied (scope issues require editorial design decision).

---

## Section 5: Post-Fix Build Verification

Build was run with a temporary Vite cache workaround (sandbox `/tmp` permissions blocked the
configured cache dir `/tmp/vite-isrm-cache-2`). The astro.config.mjs was restored unchanged
after the build.

```
Build command: npx astro build
Result: ✓ SUCCESS
Pages built: 76
Errors: 0
Warnings: 0

Route summary:
  /diagnostics/*    19 pages
  /repair-guides/*  36 pages
  /models/*          6 pages
  /videos/*          7 pages
  /parts/*           2 pages
  /legal/*           2 pages
  /news/             1 page
  /                  1 page
  ─────────────────────────
  Total:            76 pages

Stats: 37 repair guides, 6 videos (per generate-stats.js)
```

---

## Compliance: Before vs After

| Metric | Before | After |
|--------|--------|-------|
| Compliant files | 75/76 | 75/76 |
| Auto-fixes applied | — | 0 |
| Build errors | — | 0 |
| Security anomalies | 0 | 0 |
| Overall compliance | 99% | 99% |

*No auto-fixes were required this week. The codebase is in excellent compliance.*
*One medium-priority manual review item remains: warning colour scope drift in .construction-banner.*
