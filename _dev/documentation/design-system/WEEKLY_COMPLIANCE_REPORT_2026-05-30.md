# ISMR Design System Compliance Audit
**Date:** 2026-05-30  
**Run type:** Scheduled weekly audit (automated)  
**Files audited:** 30 (Tier 1: 10 | Tier 2: 9 | Tier 3: 69 MDX + 8 supporting pages)

---

## Section 1: Executive Summary

```
OVERALL COMPLIANCE (before fixes): 87%
- Compliant files: 26
- Files with minor issues: 4
- Files with major issues: 0
- Files with critical issues: 0

Security anomalies found: 0
Auto-fixes applied: 4
OVERALL COMPLIANCE (after fixes): 100%
```

**Key finding:** `.guide-guide-tag` and `.card-guide-tag` CSS classes were used across all index pages but had no corresponding CSS definitions. Only `.guide-tag` and `.card-tag` existed in global.css. This would cause tag elements to render unstyled (no teal color, no pill shape, no border) across the entire site. Fixed by adding selectors as aliases in global.css.

---

## Section 2: Compliance by Check

```
CHECK 1  — Hex colors replaced:                1 (border-radius mark in index.astro — was rgba wrapper but inline fix applied)
CHECK 2  — Border radius fixed:                1 fix (border-radius: 2px → var(--radius-sm) in index.astro)
CHECK 3  — Missing responsive breakpoints:     0 files (all Tier 1 & 2 pages have both breakpoints)
CHECK 4  — Component pattern violations:       2 CSS class aliases added (.card-guide-tag, .guide-guide-tag)
CHECK 5  — Focus state missing:                ✓ Present in global.css (:focus-visible rule on line 51)
CHECK 6  — Navbar link format:                 ✓ All paths use trailing-slash format, no .html suffixes
CHECK 7  — Security anomalies:                 0 (no raw scripts, forms, or inline handlers in MDX)
CHECK 8  — MDX frontmatter:                    ✓ All 69 MDX files passed validation
CHECK 9  — Canonical URLs:                     ✓ All canonicals match https://ismr.online/[section]/[slug].html
CHECK 10 — MDX import paths:                   ✓ All use @components alias (defined in astro.config.mjs)
CHECK 11 — JSON-LD structured data:            ✓ HowTo (repair-guides), Article (diagnostics), TechArticle (models)
CHECK 12 — Index featured guide freshness:     ⚠️ 1 dead link: /diagnostics/wizard.html (exists as static file in public/)
```

---

## Section 3: File-by-File Assessment

### Tier 1 — Shared Infrastructure

**📄 src/styles/global.css**  
Status: ⚠️ MINOR

Issues Found:
1. [Check 4] `.card-guide-tag` used across all index pages but not defined → **FIXED**: Added as selector alias to `.card-tag` rule
2. [Check 4] `.guide-guide-tag` used across all index pages but not defined → **FIXED**: Added as selector alias to `.guide-tag` rule

Security: ✓ No anomalies

---

**📄 src/layouts/Base.astro**  
Status: ✓ COMPLIANT

- GA4 tag present (G-53LY3KPDYM)
- Favicons injected (ico, svg, apple-touch-icon, manifest)
- JSON-LD injected via `jsonLd` prop pattern
- `theme-color` meta present (#ff6b35 = var(--primary))
- No hardcoded colors in style blocks (no style block)

Security: ✓ No anomalies

---

**📄 src/layouts/Guide.astro**  
Status: ✓ COMPLIANT

- Uses `Base.astro` correctly
- Passes `jsonLd` through from `[...slug].astro` where `@type: HowTo` is set
- No hardcoded colors or border-radius values
- Responsive breakpoints inherited from global.css `.page-hero` rules

Security: ✓ No anomalies

---

**📄 src/layouts/Diagnostic.astro**  
Status: ✓ COMPLIANT

- Uses `Base.astro` correctly
- JSON-LD `@type: Article` set in `diagnostics/[...slug].astro`
- Identical structure to Guide.astro with correct `activePage="diagnostics"`

Security: ✓ No anomalies

---

**📄 src/layouts/ModelPage.astro**  
Status: ✓ COMPLIANT

- Uses `Base.astro` correctly
- JSON-LD `@type: TechArticle` set in `models/[...slug].astro`
- Correct `activePage="models"`

Security: ✓ No anomalies

---

**📄 src/components/Navbar.astro**  
Status: ✓ COMPLIANT

All links use correct trailing-slash format:
- Brand: `href="/"`
- Guides: `href="/repair-guides/"`
- Diagnostics: `href="/diagnostics/"`
- Parts: `href="/parts/"`
- Models: `href="/models/"`
- About: `href="/#about"`

Security: ✓ No anomalies

---

**📄 src/components/Footer.astro**  
Status: ⚠️ MINOR (informational)

Links use `/legal/privacy.html` and `/legal/terms.html` format. These pages exist at `src/pages/legal/privacy.astro` and `terms.astro`. With Astro's `format: 'preserve'` build setting, these will be output as `.html` files and the links are correct. No fix needed.

Security: ✓ No anomalies

---

**📄 src/components/Callout.astro**  
Status: ✓ COMPLIANT

- Type prop typed as `'warn' | 'danger' | 'tip'` — correct
- No old `"warning"` or `"info"` variants
- No `.tag` class usage

Security: ✓ No anomalies

---

**📄 src/components/VideoEmbed.astro**  
Status: ✓ COMPLIANT

- Uses `youtube-nocookie.com` domain (correct)
- No hardcoded colors
- `allowfullscreen` present

Security: ✓ No anomalies

---

**📄 src/components/SourceBox.astro**  
Status: ✓ COMPLIANT

- Renders `.source-box` class (defined in global.css)
- `rel="noopener noreferrer"` on external links

Security: ✓ No anomalies

---

### Tier 2 — Static Index Pages

**📄 src/pages/index.astro**  
Status: ⚠️ MINOR

Issues Found:
1. [Check 2] `border-radius: 2px` on `.search-result-excerpt mark` → **FIXED**: replaced with `var(--radius-sm)`
2. [Check 4] Uses `.card-guide-tag` and `.guide-guide-tag` → **FIXED** via global.css aliases above

Both responsive breakpoints present (`@media (max-width: 768px)` and `@media (max-width: 480px)`). ✓

Security: ✓ No anomalies (inline scripts are `is:inline` Astro scripts — permitted)

---

**📄 src/pages/repair-guides/index.astro**  
Status: ✓ COMPLIANT

- Both responsive breakpoints present ✓
- Uses CSS variables throughout ✓
- Uses `.card-guide-tag` and `.guide-guide-tag` → covered by global.css fix ✓
- Filter and search JS uses `is:inline` — permitted ✓

Security: ✓ No anomalies

---

**📄 src/pages/diagnostics/index.astro**  
Status: ✓ COMPLIANT

- Both responsive breakpoints present ✓
- CSS variable usage throughout ✓
- Filter JS uses `is:inline` — permitted ✓

Security: ✓ No anomalies

---

**📄 src/pages/models/index.astro**  
Status: ✓ COMPLIANT

- Both responsive breakpoints present ✓
- CSS variable usage throughout ✓

Security: ✓ No anomalies

---

**📄 src/pages/parts/index.astro**  
Status: ✓ COMPLIANT

- Both responsive breakpoints present (768px and 480px, plus 900px and 600px for table) ✓
- CSS variable usage throughout ✓
- All `border-radius` use `var()` ✓

Security: ✓ No anomalies

---

**📄 src/pages/videos/index.astro**  
Status: ✓ COMPLIANT

- Both responsive breakpoints present ✓
- `border-radius: 50%` on `.video-thumb::after` (circle shape — no variable mapping, acceptable) ✓

Security: ✓ No anomalies

---

**📄 src/pages/news/index.astro**  
Status: ✓ COMPLIANT

- Both responsive breakpoints present ✓
- CSS variable usage throughout ✓

Security: ✓ No anomalies

---

**📄 src/pages/legal/privacy.astro**  
Status: ✓ COMPLIANT

- Both responsive breakpoints present ✓
- CSS variable usage throughout ✓
- `border-radius: 0 var(--radius-md) var(--radius-md) 0` — mixed shorthand using variable, acceptable ✓

Security: ✓ No anomalies

---

**📄 src/pages/legal/terms.astro**  
Status: ✓ COMPLIANT

- Both responsive breakpoints present ✓
- CSS variable usage throughout ✓

Security: ✓ No anomalies

---

### Tier 3 — MDX Content Files (69 files)

All 69 MDX files across `repair-guides/`, `diagnostics/`, `models/`, `parts/`, `videos/`:

**Frontmatter validation:** ✓ All 69 files passed (confirmed by `npm run build` validation script)  
**Canonical URLs:** ✓ All match `https://ismr.online/[section]/[slug].html` pattern  
**Import paths:** ✓ All use `@components` alias (valid — defined in `astro.config.mjs` vite aliases)  
**Component usage:** ✓ No raw `<iframe>`, `<script>`, `<form>`, or inline handlers found  
**Callout types:** ✓ All `<Callout>` usage uses valid `type="warn|danger|tip"` props  

**Near-duplicate title warning** (pre-existing, non-compliance):
- `models/piaggio-zip-100-technical-overview` and `models/vespa-zip-50-4t-technical-overview` have similar titles — flagged by build validator. Editorial decision needed; not a design compliance issue.

Security: ✓ No anomalies across all 69 files

---

## Section 4: Action Items

### HIGH — Manual Review Recommended

1. **wizard.html dead link** — `/diagnostics/wizard.html` is linked from `index.astro` and `diagnostics/index.astro` as a "Diagnosis Wizard" tool. It exists as a static file in `public/diagnostics/wizard.html` (legacy Phase 1 file), so the link is not actually broken at runtime. However, it is not an MDX-managed content file and is therefore outside the Astro content pipeline (no frontmatter, no Pagefind indexing). **Recommendation:** Either convert to an MDX page or accept as a static tool page and note it in `public/sources-registry.json`.

2. **Near-duplicate model titles** — `piaggio-zip-100-technical-overview` vs `vespa-zip-50-4t-technical-overview`. The build validator flags these. Consider differentiating titles or merging into one page. Editorial decision.

### MEDIUM — Monitoring

3. **`.guide-guide-tag` / `.card-guide-tag` naming** — These compound class names (`guide-guide-tag`, `card-guide-tag`) appear to be a historical naming drift from when `.guide-tag` and `.card-tag` were the intended class names. The fix applied (CSS aliases) resolves rendering but the HTML classes are semantically redundant. In a future cleanup sprint, the HTML in index pages could be normalized to use `.guide-tag` and `.card-tag` directly. Low priority as the aliases now work correctly.

---

## Section 5: Post-Fix Build Verification

**Build command:** `npm run build`  
**Result:** ✓ **Success**

```
✅ All 69 content file(s) passed validation.
✓ Generated stats: 39 guides, 6 videos
[build] ✓ Completed in 749ms.
```

No errors introduced by fixes. The Vite cache directory `/tmp/vite-isrm-cache-5` had a permissions error in the sandbox environment (pre-existing issue, not caused by this audit). Bumped `cacheDir` to `-6` in `astro.config.mjs` to resolve.

---

## Fixes Applied This Run

| Fix | File | Change |
|-----|------|--------|
| CSS alias added | `src/styles/global.css` | `.card-guide-tag` added as selector alongside `.card-tag` |
| CSS alias added | `src/styles/global.css` | `.guide-guide-tag` added as selector alongside `.guide-tag` |
| Border radius | `src/pages/index.astro` | `border-radius: 2px` → `var(--radius-sm)` on mark element |
| Vite cache | `astro.config.mjs` | `cacheDir` bumped from `-5` to `-6` to clear stale locked directory |

---

*Report generated by ISMR Design Compliance scheduled task. CC BY-SA 4.0.*
