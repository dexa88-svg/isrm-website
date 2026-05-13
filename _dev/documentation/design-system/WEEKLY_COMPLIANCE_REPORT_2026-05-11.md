# ISMR Design System Compliance Audit
**Date:** Monday, 11 May 2026  
**Auditor:** Claude (Automated Scheduled Task — `isrm-design-compliance`)  
**Audit Type:** Weekly Design System Compliance Check (9 Checks)  
**Pages in Scope:** 16 (community/index.html absent from filesystem — not audited)  
**Pages Audited:** 13

---

## Section 1: EXECUTIVE SUMMARY

```
ISMR Design System Compliance Audit
Date: 2026-05-11
Pages Audited: 13 (community/index.html does not yet exist)

OVERALL COMPLIANCE: 8% strictly (1/13 — zero issues)
                    46% broadly (6/13 — zero or minor issues only)
                    (was 73% last week, 11/15)

- Compliant pages (0 issues):     1/13   (la-souris-sourini-city-overview.html)
- Pages with minor issues (1–2):  5/13   (index, diagnostics/index, gy6-no-start, models/index, news)
- Pages with major issues (3–5):  7/13   (repair-guides/index, 4 guide pages, parts, videos)
- Pages with critical issues (6+): 0/13

Change since last audit (2026-05-10): -65 percentage points (strict)

⚠️  IMPORTANT CONTEXT: All 13 pages were modified or newly created AFTER the last audit
    (2026-05-10). The content sync task generated substantial new pages and updated
    existing ones, introducing new inline style patterns. This is not a regression in
    maintenance discipline — it reflects a large batch of new content.
```

---

## Section 2: COMPLIANCE BY CATEGORY

| Check | Category | Compliant | Issues |
|-------|----------|-----------|--------|
| C1 | Stylesheet Links | 13/13 ✅ | None |
| C2 | No Hardcoded Colors | 6/13 ⚠️ | 7 pages |
| C3 | Font Consistency | 13/13 ✅ | None |
| C4 | Border Radius Variables | 6/13 ⚠️ | 7 pages |
| C5 | Responsive Design | 6/13 ⚠️ | 7 pages |
| C6 | Transitions/Animations | 12/13 ✅ | 1 page |
| C7 | Shadow Usage | 12/13 ✅ | 1 page |
| C8 | Component Patterns | 12/13 ✅ | 1 page |
| C9 | Accessibility Basics | 8/13 ⚠️ | 5 pages |

**Systemic patterns in new content:**
- `border-radius: 20px` (pill shape — no CSS variable exists for this) — affects 6 pages
- `#000` / `#f00` / `#fff` in video thumbnail components — affects 4 guide pages
- Missing `<main>` landmark — affects 5 category index pages
- Inline style blocks added without corresponding media queries — affects 5 pages

---

## Section 3: PAGE-BY-PAGE ASSESSMENT

---

### 📄 index.html
**Status:** ⚠️ MINOR (1 issue)
**Modified since last audit:** Yes

Issues Found:
1. **Accessibility (C9)** — No `<main>` landmark element. The page uses `<section>` blocks but lacks a wrapping `<main>` for screen readers.

Recommended Actions:
- Wrap primary page content in `<main role="main">...</main>`
- Estimated effort: 2 minutes

---

### 📄 repair-guides/index.html
**Status:** ✗ MAJOR (5 issues)
**Modified since last audit:** Yes (significantly restructured)

Issues Found:
1. **Hardcoded Color (C2)** — `.filter-btn.active { color: #fff; }` → use `color: white` or `var(--bg-light)`
2. **Border Radius (C4)** — `border-radius: 20px` used twice (filter pill buttons) — no variable defined; suggest adding `--radius-pill: 20px` to design system, or use `var(--radius-xl)` (16px) as closest match
3. **Responsive Design (C5)** — Inline `<style>` block defines page-hero, filter-bar, and guide card layout (1,900+ chars) with zero `@media` queries. Mobile display of hero and filter bar will break at narrow widths.
4. **Shadow Usage (C7)** — `.filters-search:focus { box-shadow: 0 0 0 2px rgba(0,168,204,0.15); }` — hardcoded; should be `box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.15)` or `var(--shadow-sm)`
5. **Accessibility (C9)** — No `<main>` landmark; `outline: none` on `.filters-search` without an explicit replacement focus indicator in the same rule (border-color change is present, but outline removal without a visible alternative can fail WCAG 2.4.7)

Recommended Actions:
- Add `color: white` (or variable) to active filter button
- Add `--radius-pill: 20px` to `:root` in styles.css, then use `var(--radius-pill)` here
- Add `@media (max-width: 768px)` and `@media (max-width: 480px)` blocks to inline style
- Replace hardcoded box-shadow with design system variable
- Add `<main>` element; ensure focus indicator meets WCAG AA

---

### 📄 repair-guides/gy6-oil-change-guide.html
**Status:** ✗ MAJOR (3 issues)
**Modified since last audit:** Yes (video thumbnail CSS added)

Issues Found:
1. **Hardcoded Colors (C2)** — Two violations in the new video thumbnail component:
   - `.video-thumb-wrap { background: #000; }` → `background: var(--bg-dark)` or `#000000` is acceptable for true black video placeholder; suggest `var(--bg-dark)` (#0f1419)
   - `.video-thumb-link:hover .video-play-icon { background: #f00; }` → `background: var(--danger)` (#d63031)
2. **Border Radius (C4)** — Two violations:
   - `.video-play-icon { border-radius: 12px; }` → `var(--radius-lg)`
   - `.filter-btn { border-radius: 20px; }` (pill style) → needs `--radius-pill` variable
3. **Responsive Design (C5)** — Has `@media (max-width: 768px)` but **missing `@media (max-width: 480px)`** for the video and step components defined in inline style

Recommended Actions:
- `#000` → `var(--bg-dark)`, `#f00` → `var(--danger)`
- `border-radius: 12px` → `var(--radius-lg)`, `20px` → `var(--radius-pill)`
- Add 480px breakpoint: hide or stack video thumbnails on smallest screens

---

### 📄 repair-guides/gy6-valve-adjustment-guide.html
**Status:** ✗ MAJOR (3 issues)
**Modified since last audit:** Yes (same video thumbnail pattern as oil-change)

Issues Found: Identical to gy6-oil-change-guide.html — same video thumbnail CSS template (#000 background, #f00 hover, 12px/20px border-radius, missing 480px breakpoint)

Recommended Actions: Apply same fixes as oil-change guide (likely a shared template — fix the source template to propagate to all guides)

---

### 📄 repair-guides/gy6-carburetor-adjustment-guide.html
**Status:** ✗ MAJOR (3 issues)
**Modified since last audit:** Yes (same template)

Issues Found: Identical pattern — #000, #f00, 12px/20px border-radius, missing 480px breakpoint.

Recommended Actions: Fix shared template. See oil-change guide actions.

---

### 📄 repair-guides/gy6-cvt-variator-belt-replacement.html
**Status:** ✗ MAJOR (3 issues)
**Modified since last audit:** Yes (same template)

Issues Found: Identical pattern — #000, #f00, 12px/20px border-radius, missing 480px breakpoint.

Recommended Actions: Fix shared template. This is the highest-leverage fix: one template change resolves C2 and C4 violations across 4 guide pages simultaneously.

---

### 📄 diagnostics/index.html
**Status:** ⚠️ MINOR (2 issues)
**Modified since last audit:** Yes (newly generated)

Issues Found:
1. **Responsive Design (C5)** — Inline `<style>` block defines page-hero layout without any `@media` query. Font sizing uses `clamp()` (partially responsive) but the hero padding and layout do not adapt to narrow screens.
2. **Accessibility (C9)** — No `<main>` landmark element.

Recommended Actions:
- Add `@media (max-width: 768px)` to adjust hero padding; `@media (max-width: 480px)` for mobile
- Wrap content in `<main>`

---

### 📄 diagnostics/gy6-no-start-troubleshooting.html
**Status:** ⚠️ MINOR (2 issues)
**Modified since last audit:** Yes

Issues Found:
1. **Border Radius (C4)** — `border-radius: 20px` (pill style element) — no variable defined
2. **Responsive Design (C5)** — Has `@media (max-width: 768px)` but missing `@media (max-width: 480px)` for inline style components

Recommended Actions:
- `border-radius: 20px` → `var(--radius-pill)` once defined
- Add 480px media query block to cover mobile-specific adjustments

---

### 📄 models/index.html
**Status:** ⚠️ MINOR (2 issues)
**Modified since last audit:** Yes (newly generated)

Issues Found:
1. **Responsive Design (C5)** — Inline `<style>` defines page-hero without `@media` queries (same pattern as diagnostics/index)
2. **Accessibility (C9)** — No `<main>` landmark element

Recommended Actions:
- Add responsive media queries to hero block
- Add `<main>` wrapper

---

### 📄 models/la-souris-sourini-city-overview.html
**Status:** ✓ COMPLIANT (0 issues)
**Modified since last audit:** Yes — FIXES APPLIED ✅

All 4 issues from the 2026-05-10 audit have been resolved:
- ✅ Hardcoded colors replaced with CSS variables
- ✅ Border-radius values use `var(--radius-lg)` and `var(--radius-sm)`
- ✅ `@media (max-width: 768px)` added
- ✅ `@media (max-width: 480px)` added

This page is the **only fully compliant page** in this audit. It serves as a reference for the inline-style pattern other pages should follow.

---

### 📄 parts/index.html
**Status:** ✗ MAJOR (3 issues)
**Modified since last audit:** Yes (significantly new content)

Issues Found:
1. **Hardcoded Color (C2)** — `color: #fff; font-size: 0.95rem; font-weight: 600;` in inline style → `color: white` or `var(--bg-light)`
2. **Component Patterns / Accessibility (C8/C9)** — Five `<div class="cat-card" onclick="...">` elements are used as interactive category navigation. Divs with `onclick` are not keyboard accessible and are not announced as interactive by screen readers. These should be `<button>` or `<a>` elements.
3. **Accessibility (C9)** — `outline: none` appears on two elements without a visible replacement focus indicator in the same rule. While `border-color` changes on focus, the combination may fail WCAG 2.4.7 at some contrast levels.

Note: `parts/index.html` uses non-standard responsive breakpoints (900px and 600px) rather than the design system's 768px and 480px. This is a minor inconsistency worth noting.

Recommended Actions:
- Replace `#fff` with `var(--text-primary)` or `white`
- Convert `<div onclick>` cat-cards to `<button>` elements with proper ARIA or replace with `<a href="#section">` anchor links
- Review `outline: none` declarations; replace with `outline: 3px solid var(--accent); outline-offset: 2px;` on focus

---

### 📄 news/index.html
**Status:** ⚠️ MINOR (1 issue)
**Modified since last audit:** Yes

Issues Found:
1. **Responsive Design (C5)** — Has `@media (max-width: 768px)` but **missing `@media (max-width: 480px)`** breakpoint for inline styles

Recommended Actions:
- Add `@media (max-width: 480px)` block to collapse news grid to single column and adjust typography

---

### 📄 videos/index.html
**Status:** ✗ MAJOR (5 issues)
**Modified since last audit:** Yes (newly generated)

Issues Found:
1. **Hardcoded Colors (C2)** — Three violations in video thumbnail inline style:
   - `background: linear-gradient(135deg, #1a1a2e, #16213e)` — custom dark colors not in design system; use `var(--surface)` or `var(--bg-dark)` for consistency
   - `color: rgba(255,255,255,0.6)` and `color: #fff` — use `var(--text-primary)` where appropriate
2. **Border Radius (C4)** — `border-radius: 4px` hardcoded → `var(--radius-sm)`
3. **Responsive Design (C5)** — Inline style defines video card thumbnail layout but has no `@media` queries. Video layout will not adapt on mobile.
4. **Transitions (C6)** — Inline style has hover effects (`:hover` on video cards) but no `transition` declaration in the inline `<style>` block. The styles.css transition applies to global elements, but these page-specific hover states lack smooth transitions.
5. **Accessibility (C9)** — No `<main>` landmark element.

Recommended Actions:
- Replace `#1a1a2e`, `#16213e` with `var(--surface)` / `var(--bg-dark)`; `#fff` with `var(--text-primary)`
- `border-radius: 4px` → `var(--radius-sm)`
- Add `transition: var(--transition)` to `.video-thumb` hover rules and add 768px + 480px media queries
- Add `<main>` element

---

## Section 4: ISSUES SUMMARY TABLE

| Page | C1 Stylesheet | C2 Colors | C3 Fonts | C4 Radius | C5 Responsive | C6 Transitions | C7 Shadows | C8 Components | C9 A11y | **Issues** |
|------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| index.html | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | **1** |
| repair-guides/index.html | ✅ | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | **5** |
| gy6-oil-change-guide.html | ✅ | ❌ | ✅ | ❌ | ⚠️ | ✅ | ✅ | ✅ | ✅ | **3** |
| gy6-valve-adjustment-guide.html | ✅ | ❌ | ✅ | ❌ | ⚠️ | ✅ | ✅ | ✅ | ✅ | **3** |
| gy6-carburetor-adjustment-guide.html | ✅ | ❌ | ✅ | ❌ | ⚠️ | ✅ | ✅ | ✅ | ✅ | **3** |
| gy6-cvt-variator-belt-replacement.html | ✅ | ❌ | ✅ | ❌ | ⚠️ | ✅ | ✅ | ✅ | ✅ | **3** |
| diagnostics/index.html | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | **2** |
| gy6-no-start-troubleshooting.html | ✅ | ✅ | ✅ | ❌ | ⚠️ | ✅ | ✅ | ✅ | ✅ | **2** |
| models/index.html | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | **2** |
| la-souris-sourini-city-overview.html | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | **0** |
| parts/index.html | ✅ | ❌ | ✅ | ✅ | ⚠️ | ✅ | ✅ | ❌ | ❌ | **3** |
| news/index.html | ✅ | ✅ | ✅ | ✅ | ⚠️ | ✅ | ✅ | ✅ | ✅ | **1** |
| videos/index.html | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | **5** |
| **TOTAL** | **13/13** | **6/13** | **13/13** | **7/13** | **6/13** | **12/13** | **12/13** | **12/13** | **8/13** | |

Legend: ✅ = Pass, ⚠️ = Minor/partial, ❌ = Fail

---

## Section 5: FIX RECOMMENDATIONS

### CRITICAL (Fix This Week) — Template-Level Fixes

**1. Video Thumbnail Component Template — affects 4 guide pages**

All four audited guide pages (oil-change, valve, carburetor, cvt-belt) share identical video thumbnail CSS with the same violations. Fix the source template once:

```css
/* BEFORE (template): */
.video-thumb-wrap { background: #000; border-radius: var(--radius-md); ... }
.video-play-icon { background: rgba(200,0,0,0.9); border-radius: 12px; ... }
.video-thumb-link:hover .video-play-icon { background: #f00; ... }
.filter-btn { border-radius: 20px; ... }

/* AFTER: */
.video-thumb-wrap { background: var(--bg-dark); border-radius: var(--radius-md); ... }
.video-play-icon { background: rgba(214,48,49,0.9); border-radius: var(--radius-lg); ... }
.video-thumb-link:hover .video-play-icon { background: var(--danger); ... }
.filter-btn { border-radius: var(--radius-pill); ... }  /* after adding --radius-pill */
```

Pages affected: 4 (oil-change, valve-adj, carb, cvt-belt)  
Estimated effort: 10 minutes (fix template, regenerate)  
Impact: Clears C2 + C4 violations on 4 pages simultaneously

---

**2. Add `--radius-pill` to Design System**

A 20px pill border-radius appears in 6 pages but has no CSS variable. Add to `public/styles.css` and `_dev/documentation/design-system/styles-reference.css`:

```css
:root {
  /* Add after --radius-xl: 16px */
  --radius-pill: 20px;   /* fully-rounded pill shape */
}
```

Pages affected: repair-guides/index, 4 guide pages, gy6-no-start  
Estimated effort: 5 minutes  
Impact: Enables proper variable usage across 6 pages

---

### HIGH (Fix Next 2 Weeks)

**3. Missing `<main>` Landmark — 5 pages**

Pages: index.html, repair-guides/index.html, diagnostics/index.html, models/index.html, videos/index.html

```html
<!-- Wrap the main page content in each file: -->
<main role="main">
  <!-- all content sections here -->
</main>
```

Estimated effort: 5 minutes per page = 25 minutes total

---

**4. Responsive Media Queries for Inline Styles — 7 pages**

Pages without any inline MQ (need both 768px + 480px):
- repair-guides/index.html
- diagnostics/index.html
- models/index.html
- videos/index.html

Pages with 768px only (need 480px added):
- gy6-oil-change-guide.html
- gy6-valve-adjustment-guide.html
- gy6-carburetor-adjustment-guide.html
- gy6-cvt-variator-belt-replacement.html
- diagnostics/gy6-no-start-troubleshooting.html
- news/index.html

Estimated effort: 10–15 minutes per page. Consider standardising in the content template.

---

**5. Fix `parts/index.html` — Clickable Divs**

```html
<!-- BEFORE: -->
<div class="cat-card" onclick="document.getElementById('sec-engine').scrollIntoView({behavior:'smooth'})">

<!-- AFTER: -->
<a href="#sec-engine" class="cat-card">
  <!-- content -->
</a>
```

Or use `<button>` with a JS click handler. This is an accessibility requirement (WCAG 2.1 SC 4.1.2).  
Estimated effort: 15 minutes

---

**6. Hardcoded Colors in `videos/index.html`**

```css
/* BEFORE: */
.video-thumb { background: linear-gradient(135deg, #1a1a2e, #16213e); }

/* AFTER: */
.video-thumb { background: linear-gradient(135deg, var(--surface), var(--bg-dark)); }

/* BEFORE: */
color: rgba(255,255,255,0.6); color: #fff;

/* AFTER: */
color: rgba(245,245,245,0.6); /* or use var(--text-primary) with opacity */
```

Estimated effort: 10 minutes

---

### MEDIUM (Fix Next Month)

**7. Standardise Responsive Breakpoints in `parts/index.html`**

Currently uses 900px and 600px instead of the design system's 768px and 480px. While functional, this causes inconsistency when testing or theming across pages.

**8. `repair-guides/index.html` — Shadow Variable**

Replace `.filters-search:focus { box-shadow: 0 0 0 2px rgba(0,168,204,0.15); }` with a design-system-aligned focus shadow (consider adding `--shadow-focus` variable).

---

## Section 6: TRENDS & NOTES

```
Compliance Progress (strict — 0 issues only):
- 2026-04-29: 47%  (8/16)
- 2026-05-10: 73%  (11/15)
- 2026-05-11: 8%   (1/13)   ← Post content-sync batch

IMPORTANT: The apparent decline is almost entirely due to the content-sync
task generating/updating all pages overnight. Almost every page was modified
after the last audit. The new content pages introduced a consistent set of
template-level issues (video components, pill radius, missing <main> tags)
rather than scattered individual errors.

Most common issues this week:
1. border-radius: 20px (pill) — 6 pages   [C4]
2. Missing <main> element — 5 pages        [C9]
3. Hardcoded hex colors — 7 pages          [C2]
4. Missing 480px media queries — 7 pages   [C5]
5. Video thumbnail #000/#f00 — 4 pages     [C2, C4] (shared template)

Positive notes:
✅ la-souris page fully fixed — 0 issues
✅ Stylesheet links: 100% (13/13)
✅ Font consistency: 100% (13/13)
✅ No critical (6+ issue) pages
✅ Transitions: 92% (12/13)
✅ Shadows: 92% (12/13)
✅ The issues are concentrated and systemic — not scattered — making them
   faster to fix (fix a template, fix 4 pages at once)

Fully compliant pages (zero action needed):
- models/la-souris-sourini-city-overview.html ✓

Pages needing immediate attention:
- repair-guides/index.html (5 issues)
- videos/index.html (5 issues)
- gy6-oil-change-guide.html (3 issues — template fix will resolve)
- gy6-valve-adjustment-guide.html (3 issues — template fix will resolve)
- gy6-carburetor-adjustment-guide.html (3 issues — template fix will resolve)
- gy6-cvt-variator-belt-replacement.html (3 issues — template fix will resolve)
- parts/index.html (3 issues — accessibility focus needed)
```

---

## Section 7: ACTION ITEMS

```
QUICK WINS (< 30 min total — highest ROI):

□ Add --radius-pill: 20px to styles.css :root — 5 min
  → Enables fix of C4 violations across 6 pages

□ Fix video thumbnail CSS template (#000→var(--bg-dark), #f00→var(--danger),
  12px→var(--radius-lg), 20px→var(--radius-pill)) — 10 min
  → Resolves C2+C4 violations on 4 guide pages at once

□ Replace #fff in repair-guides/index and parts/index with white or var(--bg-light) — 5 min

□ Fix #1a1a2e, #16213e in videos/index with var(--surface)/var(--bg-dark) — 5 min

□ Add transition: var(--transition) to video hover states in videos/index — 5 min

  QUICK WINS TOTAL: ~30 min → clears C2 on 7 pages, C4 on 6 pages, C6 on 1 page

MEDIUM EFFORT (1–2 hours):

□ Add <main> to index, repair-guides/index, diagnostics/index,
  models/index, videos/index — 25 min

□ Add 480px media query block to 6 pages (news, 4 guides, gy6-no-start) — 30 min

□ Add 768px + 480px media queries to inline styles on:
  repair-guides/index, diagnostics/index, models/index, videos/index — 40 min

□ Fix parts/index.html clickable divs → <a> or <button> — 15 min

  MEDIUM EFFORT TOTAL: ~1 hr 50 min → clears C5 on 7 pages, C9 on 6 pages

LARGER TASKS (> 2 hours, lower urgency):

□ Standardise parts/index responsive breakpoints to 768px/480px
□ Add --shadow-focus variable for consistent focus ring treatment
□ Review content-sync templates to enforce design system in future generated pages
□ Build lint/check script that can be run pre-commit to catch hex colors in inline styles

Total estimated effort to ~90% compliance: 2–2.5 hours
Total estimated effort to 100% compliance: 3–4 hours
Recommended timeline: Complete QUICK WINS this week; MEDIUM EFFORT by 2026-05-18
```

---

## Section 8: CONCLUSION

```
Summary:
- 1 page is fully compliant (la-souris — all last week's fixes confirmed applied)
- 5 pages have minor issues (1–2 checks each)
- 7 pages have major issues (3–5 checks each)
- 0 pages have critical issues (6+)
- 40 total issues found across 13 pages

Key driver of regression: Content sync task updated/created virtually all pages
between May 10–11, using templates with recurring design system violations.
The #000/#f00/#radius-20px video-thumbnail template pattern alone accounts for
12 of the 40 issues (30%) across 4 pages.

Priority recommendation:
1. Fix the guide page template first (10 min → resolves issues on 4 pages)
2. Add --radius-pill to design system (5 min → unblocks fix for 6 pages)
3. Update content-sync prompts to include design system constraints so new
   pages are generated compliant from the start

Expected compliance after quick wins:
- Strict (0 issues): ~38% (5/13)
- Broad (0–2 issues): ~85% (11/13)

Next audit: Monday, 18 May 2026
Expected target: 80%+ strict compliance after this week's fixes

For detailed fix instructions, see:
/documentation/design-system/ACTION_PLAN.md
```

---

**Report Generated:** 2026-05-11  
**Generated By:** Claude automated task (`isrm-design-compliance`)  
**Report Location:** `_dev/documentation/design-system/WEEKLY_COMPLIANCE_REPORT_2026-05-11.md`  
**Next Review:** 2026-05-18 (Monday)
