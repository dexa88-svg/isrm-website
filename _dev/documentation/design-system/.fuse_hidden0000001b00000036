# ISRM Design System Compliance Audit
**Date:** Tuesday, 12 May 2026  
**Auditor:** Claude (Automated Scheduled Task — `isrm-design-compliance`)  
**Audit Type:** Weekly Design System Compliance Check (9 Checks)  
**Pages in Scope:** 16 (community/index.html absent from filesystem — not audited)  
**Pages Audited:** 13

---

## Section 1: EXECUTIVE SUMMARY

```
ISRM Design System Compliance Audit
Date: 2026-05-12
Pages Audited: 13 (community/index.html does not yet exist)

OVERALL COMPLIANCE: 8% strictly  (1/13 — zero issues)
                    77% broadly  (10/13 — zero or minor issues only)
                    (was 8% strictly / 46% broadly on 2026-05-11)

- Compliant pages (0 issues):      1/13  (repair-guides/index.html)
- Pages with minor issues (1–2):   9/13
- Pages with major issues (3–5):   3/13  (index.html, gy6-carburetor-cleaning-guide.html, videos/index.html)
- Pages with critical issues (6+): 0/13

Change since last audit (2026-05-11):
  Strict compliance:  → stable at 8%  (1/13)
  Broad compliance:   ↑ improved from 46% to 77% (+31 pp)
  Systemic improvement: no new critical pages; major-issue count reduced

KEY FINDING: The dominant systemic issue this week is missing :focus styles
(11/13 pages), which is a new widespread accessibility gap not present at scale
in last week's audit. All other checks show significant improvement.
```

---

## Section 2: COMPLIANCE BY CATEGORY

| Check | Category | Compliant | Non-Compliant Pages |
|-------|----------|-----------|---------------------|
| C1 | Stylesheet Links | 13/13 ✅ | None |
| C2 | No Hardcoded Colors | 12/13 ✅ | gy6-carburetor-cleaning-guide |
| C3 | Font Consistency | 13/13 ✅ | None |
| C4 | Border Radius Variables | 11/13 ⚠️ | gy6-carburetor-cleaning-guide, la-souris-sourini-city-overview |
| C5 | Responsive Design | 10/13 ⚠️ | index.html, gy6-carburetor-cleaning-guide, parts/index.html |
| C6 | Transitions/Animations | 12/13 ✅ | gy6-carburetor-cleaning-guide |
| C7 | Shadow Usage | 8/13 ⚠️ | index.html, diagnostics/index, models/index, parts/index, videos/index |
| C8 | Component Patterns | 12/13 ✅ | videos/index.html |
| C9 | Accessibility Basics | 2/13 ✗ | 11 pages missing :focus styles |

**Systemic patterns identified:**
- Missing `:focus` styles on 11/13 pages — the single largest compliance gap
- Missing `box-shadow` on 5 category/index pages with card elements
- `gy6-carburetor-cleaning-guide.html` is an outlier with 5 issues (only MAJOR page among guides)
- `border-radius: 20px` pill shape still used in la-souris page (no CSS variable equivalent)

---

## Section 3: PAGE-BY-PAGE ASSESSMENT

---

### 📄 index.html
**Status:** ✗ MAJOR (3 issues)

Issues Found:
1. **Responsive Design (C5)** — No `@media (max-width: 768px)` or `@media (max-width: 480px)` breakpoints in page-level styles. The global `styles.css` may provide some, but page-specific inline styles lack responsive overrides.
2. **Shadow Usage (C7)** — Card elements (`.card`, card-like sections) present in markup but no `box-shadow` declarations in page styles — neither variable nor hardcoded.
3. **Accessibility (C9)** — No `:focus` styles defined in the page `<style>` block. Interactive elements (links, buttons) may lack visible focus indicators for keyboard users.

Recommended Actions:
- Add page-level `@media` queries for card grid reflow at 768px and 480px
- Add `box-shadow: var(--shadow)` to `.card` and card-like containers
- Add `:focus-visible { outline: 2px solid var(--accent); }` globally or per-component

---

### 📄 repair-guides/index.html
**Status:** ✓ COMPLIANT (0 issues)

No issues found. This page passes all 9 checks — stylesheet linked correctly, no hardcoded colors, correct fonts, uses CSS variable border-radius, has responsive media queries, proper transitions, shadow variables, design-system components, and :focus styles.

---

### 📄 repair-guides/gy6-oil-change-guide.html
**Status:** ⚠️ MINOR (1 issue)

Issues Found:
1. **Accessibility (C9)** — No `:focus` styles in page `<style>` block. Keyboard navigation may lack visible focus indicators.

Recommended Actions:
- Add `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }` to `<style>` block

---

### 📄 repair-guides/gy6-valve-adjustment-guide.html
**Status:** ⚠️ MINOR (1 issue)

Issues Found:
1. **Accessibility (C9)** — No `:focus` styles in page `<style>` block.

Recommended Actions:
- Add `:focus-visible` outline rule (same as above)

---

### 📄 repair-guides/gy6-carburetor-cleaning-guide.html
**Status:** ✗ MAJOR (5 issues)

Issues Found:
1. **Hardcoded Colors (C2)** — 9 hardcoded hex colors found in `<style>` block: `#888` → `var(--text-tertiary)`, `#1a1a1a` → close to `var(--bg-dark)`, `#f5a623` → `var(--warning)`, `#222` → `var(--bg-dark)`, `#2a1a00` → (no direct variable — near `var(--surface)`), plus 4 additional values.
2. **Border Radius Variables (C4)** — 4 hardcoded `border-radius` pixel values: `border-radius: 0 6px`, `border-radius: 0 4px`, `border-radius: 12px`. Should use `var(--radius-sm)`, `var(--radius-md)`, `var(--radius-lg)`.
3. **Responsive Design (C5)** — No `@media` breakpoints at 768px or 480px.
4. **Transitions (C6)** — `:hover` states defined but no `transition` declarations present. Hover effects appear instant with no animation.
5. **Accessibility (C9)** — No `:focus` styles defined.

Recommended Actions:
- Replace all hardcoded hex colors with CSS variable equivalents (see Section 5)
- Replace `border-radius: Npx` with `var(--radius-sm/md/lg)` equivalents
- Add `transition: var(--transition)` to interactive elements
- Add responsive media queries at 768px and 480px
- Add `:focus-visible` outline rule

---

### 📄 repair-guides/gy6-cvt-variator-belt-replacement.html
**Status:** ⚠️ MINOR (1 issue)

Issues Found:
1. **Accessibility (C9)** — No `:focus` styles in page `<style>` block.

Recommended Actions:
- Add `:focus-visible` outline rule

---

### 📄 diagnostics/index.html
**Status:** ⚠️ MINOR (2 issues)

Issues Found:
1. **Shadow Usage (C7)** — Card elements present but no `box-shadow` declarations found. Cards appear visually flat.
2. **Accessibility (C9)** — No `:focus` styles defined.

Recommended Actions:
- Add `box-shadow: var(--shadow)` to card elements
- Add `:focus-visible` outline rule

---

### 📄 diagnostics/gy6-no-start-troubleshooting.html
**Status:** ⚠️ MINOR (1 issue)

Issues Found:
1. **Accessibility (C9)** — No `:focus` styles in page `<style>` block.

Recommended Actions:
- Add `:focus-visible` outline rule

---

### 📄 models/index.html
**Status:** ⚠️ MINOR (2 issues)

Issues Found:
1. **Shadow Usage (C7)** — Card elements present but no `box-shadow` variable usage found.
2. **Accessibility (C9)** — No `:focus` styles defined.

Recommended Actions:
- Add `box-shadow: var(--shadow)` to model cards
- Add `:focus-visible` outline rule

---

### 📄 models/la-souris-sourini-city-overview.html
**Status:** ⚠️ MINOR (2 issues)

Issues Found:
1. **Border Radius Variables (C4)** — `border-radius: 20px` used for pill/badge shape. No `--radius-pill` or equivalent variable currently exists in the design system.
2. **Accessibility (C9)** — No `:focus` styles defined.

Recommended Actions:
- Define `--radius-pill: 20px` in `styles.css` and replace hardcoded value
- Add `:focus-visible` outline rule

---

### 📄 parts/index.html
**Status:** ⚠️ MINOR (2 issues)

Issues Found:
1. **Responsive Design (C5)** — No `@media` breakpoints in page-level styles for 768px or 480px.
2. **Shadow Usage (C7)** — Card elements present but no `box-shadow` usage.

Recommended Actions:
- Add responsive layout breakpoints for parts grid
- Add `box-shadow: var(--shadow)` to card elements

---

### 📄 news/index.html
**Status:** ⚠️ MINOR (1 issue)

Issues Found:
1. **Accessibility (C9)** — No `:focus` styles in page `<style>` block.

Recommended Actions:
- Add `:focus-visible` outline rule

---

### 📄 videos/index.html
**Status:** ✗ MAJOR (3 issues)

Issues Found:
1. **Shadow Usage (C7)** — Card elements present but no `box-shadow` declarations.
2. **Component Patterns (C8)** — Custom `.guide-card` class defined in page styles duplicates the design system `.card` pattern. This creates divergence and maintenance overhead.
3. **Accessibility (C9)** — No `:focus` styles defined.

Recommended Actions:
- Replace `.guide-card` custom styles with `.card` design system class
- Add `box-shadow: var(--shadow)` to video cards
- Add `:focus-visible` outline rule

---

## Section 4: ISSUES SUMMARY TABLE

| Page | C1 Links | C2 Colors | C3 Fonts | C4 Radius | C5 Responsive | C6 Trans. | C7 Shadows | C8 Comp. | C9 A11y | Issues |
|------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| index.html | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✗ | ✓ | ✗ | 3 |
| repair-guides/index.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **0** |
| repair-guides/gy6-oil-change-guide | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | 1 |
| repair-guides/gy6-valve-adjustment-guide | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | 1 |
| repair-guides/gy6-carburetor-cleaning-guide | ✓ | ✗ | ✓ | ✗ | ✗ | ✗ | ✓ | ✓ | ✗ | 5 |
| repair-guides/gy6-cvt-variator-belt-replacement | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | 1 |
| diagnostics/index.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✗ | 2 |
| diagnostics/gy6-no-start-troubleshooting | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | 1 |
| models/index.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✗ | 2 |
| models/la-souris-sourini-city-overview | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✗ | 2 |
| parts/index.html | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✗ | ✓ | ✓ | 2 |
| news/index.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | 1 |
| videos/index.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | 3 |
| **TOTAL** | **13/13** | **12/13** | **13/13** | **11/13** | **10/13** | **12/13** | **8/13** | **12/13** | **2/13** | |

---

## Section 5: FIX RECOMMENDATIONS

### CRITICAL (Fix This Week)

**1. Missing :focus Styles — 11 pages affected**

This is the most widespread issue and a WCAG AA requirement. Adding a single focus rule to `styles.css` would fix this globally for all pages that inherit it.

Affected pages: index.html, gy6-oil-change, gy6-valve-adjustment, gy6-carburetor-cleaning, gy6-cvt-belt, diagnostics/index, gy6-no-start, models/index, la-souris, news/index, videos/index

Fix — add to `public/styles.css`:
```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

Estimated effort: 2 minutes. Fixes 11 pages simultaneously.

---

### HIGH (Fix Next 2 Weeks)

**2. Missing box-shadow on Card Elements — 5 pages**

Affected pages: index.html, diagnostics/index, models/index, parts/index, videos/index

Fix — add to each page's `<style>` block or to `.card` rule in `styles.css`:
```css
.card, [class*="card"] {
  box-shadow: var(--shadow);
}
```
Estimated effort: 10 minutes total.

**3. gy6-carburetor-cleaning-guide.html — 5 compound issues**

This page needs a focused fix pass:
- Replace 9 hardcoded hex colors with CSS variables
- Replace 4 `border-radius: Npx` values with `var(--radius-*)` 
- Add `@media (max-width: 768px)` and `@media (max-width: 480px)` blocks
- Add `transition: var(--transition)` to all interactive elements

Estimated effort: 30 minutes.

**4. Missing Responsive Breakpoints — 3 pages**

Affected pages: index.html, gy6-carburetor-cleaning-guide, parts/index.html

Add `@media (max-width: 768px)` and `@media (max-width: 480px)` blocks to each page's `<style>`.
Estimated effort: 15 minutes per page (45 min total).

---

### MEDIUM (Fix Next Month)

**5. videos/index.html — Custom `.guide-card` Component**

Replace custom `.guide-card` CSS with the standard `.card` design system class. This removes duplicate CSS and ensures consistency.
Estimated effort: 20 minutes.

**6. la-souris-sourini-city-overview.html — border-radius: 20px**

No CSS variable exists for pill-shaped radius. Two options:
- Add `--radius-pill: 20px` to `styles.css` and use it everywhere
- Use `border-radius: 999px` as a fluid pill value (no px variable needed)

Estimated effort: 5 minutes once decision made on approach.

---

## Section 6: TRENDS & NOTES

```
Compliance Progress (Strict — 0 issues):
- 2026-05-10: 73% (11/15)
- 2026-05-11: 8%  (1/13) ← large content batch introduced inline styles
- 2026-05-12: 8%  (1/13) → stable

Compliance Progress (Broad — 0–2 issues):
- 2026-05-10: N/A (first audit in this format)
- 2026-05-11: 46% (6/13)
- 2026-05-12: 77% (10/13) ↑ +31 percentage points

Most common issues this week:
1. Missing :focus styles (C9) — 11/13 pages
2. Missing box-shadow on cards (C7) — 5/13 pages
3. Missing responsive breakpoints (C5) — 3/13 pages
4. Hardcoded colors (C2) — 1/13 pages (isolated to carburetor-cleaning guide)

Fully compliant pages (no action needed):
- repair-guides/index.html ✓

Pages needing immediate attention (most issues):
- repair-guides/gy6-carburetor-cleaning-guide.html (5 issues — only guide with compound failures)
- index.html (3 issues — homepage visibility makes this high priority)
- videos/index.html (3 issues — includes component pattern violation)

Notable improvements since last audit:
- repair-guides/index.html: achieved full compliance (new)
- Most guide pages (oil-change, valve-adj, cvt-belt): dropped to only 1 minor issue each
- No pages in "critical" (6+ issues) category for 2nd consecutive week
```

---

## Section 7: ACTION ITEMS

```
QUICK WINS (< 30 min total — fix today):
☐ Add :focus-visible rule to public/styles.css             — 2 min  → fixes 11 pages
☐ Add box-shadow: var(--shadow) to .card in styles.css     — 5 min  → fixes 5 pages
☐ Fix border-radius: 20px in la-souris page                — 5 min
☐ Fix videos/index.html .guide-card → .card                — 10 min

MEDIUM EFFORT (1–2 hours):
☐ Fix gy6-carburetor-cleaning-guide.html (5 issues):
   ☐ Replace 9 hardcoded hex colors with CSS variables     — 10 min
   ☐ Replace border-radius pixel values with var()         — 5 min
   ☐ Add transition: var(--transition) to hover elements   — 5 min
   ☐ Add responsive media query blocks                     — 10 min
☐ Add responsive breakpoints to index.html                 — 15 min
☐ Add responsive breakpoints to parts/index.html           — 15 min

LARGER TASKS (> 2 hours — Phase 2 work):
☐ Add <main> landmark to all pages missing it
☐ Audit img alt attributes across all pages systematically
☐ Review WCAG AA color contrast on all text/background combinations

Total estimated effort to reach 85%+ broad compliance: ~1 hour
Total estimated effort to reach 100% strict compliance: ~3 hours
Recommended timeline: 1–2 sessions this week
```

---

## Section 8: CONCLUSION

```
Summary:
- 1/13 pages fully compliant (repair-guides/index.html — new this week)
- Broad compliance improved from 46% → 77% since last audit (+31 pp)
- The dominant remaining issue is :focus styles — fixable with a single 
  2-line CSS rule added to styles.css
- gy6-carburetor-cleaning-guide.html remains the only guide page with 
  compound failures and needs a targeted fix pass
- No critical pages (6+ issues) — positive trend holding

Next audit: Monday, 18 May 2026

For detailed fix instructions, see:
/_dev/documentation/design-system/ACTION_PLAN.md
```

---

*Report generated automatically by `isrm-design-compliance` scheduled task on 2026-05-12.*  
*Audit covers 9 compliance checks across 13 pages (community/index.html excluded — not yet created).*
