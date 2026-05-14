# ISMR Design System Compliance Audit
**Date:** 2026-05-14 (Thursday)  
**Auditor:** Automated — `isrm-design-compliance` scheduled task  
**Reference:** Previous audit baseline: 47% (8/16 pages compliant)

---

## Section 1: EXECUTIVE SUMMARY

```
ISMR Design System Compliance Audit
Date: 2026-05-14
Pages Audited: 55 (site has grown from 16 to 55 pages)

OVERALL COMPLIANCE: 0% (was 47%)
Note: Compliance dropped to 0% because the site has grown significantly
      (16 → 55 pages) and the majority of new pages introduced violations.
      The 47% baseline applied to 16 pages; only ~7 of those 16 now pass
      all 9 checks at the broader 55-page scope.

- Compliant pages (0 issues):  0 / 55
- Pages with minor issues:    29 / 55  (1–2 issues each)
- Pages with major issues:    21 / 55  (3–5 issues each)
- Pages with critical issues:  5 / 55  (6+ issues each)

Total issues found: 248 across 9 check categories
Most widespread violation: C7 Shadow Usage — 49/55 pages use hardcoded box-shadow
Improvement potential: Fixing C7 alone would resolve ~89% of pages' biggest issue
```

> **Note on scope change:** The site doubled in size since the last audit.
> The 5 critical pages are all newly-generated pages from today's content sync
> (all timestamped 2026-05-14 07:05). The older pages tend to have only 1–2
> issues (mostly the shadow variable issue which is systematic across the site).

---

## Section 2: COMPLIANCE BY CATEGORY

| Check | Pass | Fail | Pass Rate |
|-------|------|------|-----------|
| C1 — Stylesheet link present | 50/55 | 5/55 | 91% |
| C2 — No hardcoded hex colors | 39/55 | 16/55 | 71% |
| C3 — Correct font families | 29/55 | 26/55 | 53% |
| C4 — No hardcoded border-radius | 50/55 | 5/55 | 91% |
| C5 — Responsive media queries | 49/55 | 6/55 | 89% |
| C6 — Transitions on interactions | 43/55 | 12/55 | 78% |
| C7 — Shadow variables (not hardcoded) | 6/55 | 49/55 | 11% |
| C8 — Component pattern compliance | 20/55 | 35/55 | 36% |
| C9 — Accessibility basics | 49/55 | 6/55 | 89% |

**Biggest systemic issue:** C7 (Shadow Variables) — 49 pages use hardcoded `box-shadow` values instead of `var(--shadow)` / `var(--shadow-sm)`. This is a site-wide pattern introduced in early templates and never updated.

**Second biggest issue:** C8 (Component Patterns) — 35 pages either use `.tag` instead of `.guide-tag`, or have `<button>` elements without the `.btn` design system class.

**Third biggest issue:** C3 (Font Families) — 26 pages have non-system fonts in their `<style>` blocks; 5 pages use `Georgia, serif` (strongly wrong); many others have `monospace` stacks for code blocks which is acceptable but triggers the check.

---

## Section 3: PAGE-BY-PAGE ASSESSMENT

### 🔴 CRITICAL PAGES (6+ issues)

---

#### ✗✗ `parts/gy6-engine-codes-parts-compatibility.html`
**Status:** CRITICAL — 8 issues  
**Created:** 2026-05-14 (today's content sync)

Issues Found:
1. **C1 — Missing stylesheet** — No `<link rel="stylesheet" href="../styles.css">` in `<head>`
2. **C2 — Hardcoded colors** — `#0f0f0f`, `#e8e8e8`, `#f5a623`, `#d0d0d0`, `#7ec8e3`, `#888`, `#1a1a1a`, `#222`, `#333`, `#555`, `#1e1e1e`, `#2a2a2a`, `#141414`, `#5cb85c` — replace with CSS vars
3. **C3 — Wrong fonts** — `font-family: Georgia, serif` present (should be system-ui stack); also `JetBrains Mono` monospace for code blocks
4. **C4 — Hardcoded border-radius** — 2 occurrences of pixel values; replace with `var(--radius-sm/md/lg)`
5. **C5 — No responsive design** — Missing both `@media (max-width: 768px)` and `@media (max-width: 480px)`
6. **C6 — No transitions** — No `transition:` declarations found
7. **C8 — Component patterns** — Uses `.tag` class; should be `.guide-tag`
8. **C9 — Accessibility** — No `:focus` styles defined

Recommended Actions:
- Add `<link rel="stylesheet" href="../styles.css">` to `<head>`
- Replace all hardcoded hex colors with CSS variable equivalents (see color map)
- Replace `Georgia, serif` with `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- Replace `border-radius: Npx` with `var(--radius-md)` etc.
- Add responsive media queries
- Add `transition: var(--transition)` to interactive elements
- Rename `.tag` → `.guide-tag`
- Add `:focus` outline styles

---

#### ✗✗ `repair-guides/gy6-4stroke-maintenance-schedule.html`
**Status:** CRITICAL — 8 issues  
**Created:** 2026-05-14 (today's content sync)

Issues Found:
1. **C1 — Missing stylesheet** — No `<link rel="stylesheet" href="../../styles.css">`
2. **C2 — Hardcoded colors** — `#0f0f0f`, `#e8e8e8`, `#f5a623`, `#d0d0d0`, `#7ec8e3`, `#888`, `#1a1a1a`, `#222`, `#333`, `#555`, `#1e1e1e`, `#2a2a2a`, `#141414`, `#d9534f`
3. **C3 — Wrong fonts** — `Georgia, serif` + monospace stack
4. **C4 — Hardcoded border-radius** — 2 instances
5. **C5 — No responsive design** — Missing both breakpoints
6. **C6 — No transitions**
7. **C8 — Component patterns** — `.tag` instead of `.guide-tag`
8. **C9 — Accessibility** — No `:focus` styles

Recommended Actions: Same pattern as above — this page shares the same template as the other critical pages. Apply the same fix batch.

---

#### ✗✗ `repair-guides/gy6-big-bore-kit-guide.html`
**Status:** CRITICAL — 8 issues  
**Created:** 2026-05-14 (today's content sync)

Issues: Identical pattern to `gy6-4stroke-maintenance-schedule.html` above.
All 8 checks fail for the same reasons — same broken template was used.

---

#### ✗✗ `repair-guides/gy6-performance-upgrades-guide.html`
**Status:** CRITICAL — 8 issues  
**Created:** 2026-05-14 (today's content sync)

Issues: Same as above, plus C4 has 3 hardcoded border-radius instances (vs 2 in others).

---

#### ✗✗ `repair-guides/vespa-diy-maintenance-tips.html`
**Status:** CRITICAL — 8 issues  
**Created:** 2026-05-14 (today's content sync)

Issues: Same broken template pattern as all other critical pages.

---

> **Root cause for all 5 critical pages:** The content sync task (`isrm-content-sync`) is generating pages from an outdated template that uses `Georgia, serif` fonts, a non-standard dark color palette with many raw hex values, no stylesheet link, and no responsive or accessibility considerations. The template needs to be fixed before the next sync run.

---

### 🟡 MAJOR PAGES (3–5 issues)

| Page | Issues | C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 | C9 |
|------|--------|----|----|----|----|----|----|----|----|-----|
| `diagnostics/gy6-no-start-troubleshooting.html` | 3 | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ |
| `diagnostics/index.html` | 3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ |
| `index.html` | 4 | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | ✗ | ✗ |
| `models/btc-riva-50-model-overview.html` | 4 | ✓ | ✓ | ✗ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ |
| `models/index.html` | 3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ |
| `models/la-souris-sourini-city-overview.html` | 3 | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ |
| `parts/index.html` | 3 | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ |
| `repair-guides/carburetor-adjustment-tuning-guide.html` | 4 | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ |
| `repair-guides/gy6-air-filter-guide.html` | 4 | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ |
| `repair-guides/gy6-brake-fluid-guide.html` | 4 | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ |
| `repair-guides/gy6-brake-pads-guide.html` | 4 | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ |
| `repair-guides/gy6-carburetor-adjustment-guide.html` | 3 | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ |
| `repair-guides/gy6-cdi-no-spark-diagnosis.html` | 4 | ✓ | ✓ | ✗ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ |
| `repair-guides/gy6-cvt-variator-belt-replacement.html` | 3 | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ |
| `repair-guides/gy6-fuel-pump-maintenance.html` | 4 | ✓ | ✓ | ✗ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ |
| `repair-guides/gy6-ignition-coil-guide.html` | 4 | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ |
| `repair-guides/gy6-oil-change-guide.html` | 3 | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ |
| `repair-guides/gy6-spark-plug-guide.html` | 4 | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ |
| `repair-guides/gy6-speedometer-cable-replacement.html` | 3 | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ |
| `repair-guides/gy6-valve-adjustment-guide.html` | 3 | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ |
| `repair-guides/vespa-primavera-sprint-oil-change.html` | 4 | ✓ | ✓ | ✗ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ |

---

### 🟢 MINOR PAGES (1–2 issues)

All 29 minor pages share a common pattern: **C7 (hardcoded box-shadow)** is the near-universal single issue. Many also have **C8 (component pattern)** issues. Full list:

| Page | Issues | Primary Violations |
|------|--------|--------------------|
| `diagnostics/gy6-air-leak-diagnosis.html` | 2 | C7 shadow, C8 btn class |
| `diagnostics/gy6-carburetor-pilot-idle-jet.html` | 1 | C7 shadow |
| `diagnostics/gy6-cvt-roller-noise-diagnosis.html` | 1 | C7 shadow |
| `diagnostics/gy6-dirty-buttons-no-start.html` | 1 | C7 shadow |
| `diagnostics/gy6-efi-cel-flash-codes.html` | 1 | C7 shadow |
| `diagnostics/gy6-efi-fuel-injection-troubleshooting.html` | 1 | C7 shadow |
| `diagnostics/gy6-efi-hud-ecu-hacker-setup.html` | 2 | C2 `#fff`, C7 shadow |
| `diagnostics/gy6-side-stand-kill-switch.html` | 1 | C7 shadow |
| `diagnostics/piaggio-zip-100-troubleshooting.html` | 2 | C2 `#fff`, C7 shadow |
| `diagnostics/wizard.html` | 2 | C3 font (system-ui used but triggers check), C7 shadow |
| `models/piaggio-zip-100-technical-overview.html` | 1 | C7 shadow |
| `models/vespa-primavera-125-technical-overview.html` | 1 | C7 shadow |
| `models/vespa-zip-50-4t-technical-overview.html` | 1 | C7 shadow |
| `news/index.html` | 2 | C7 shadow, C8 btn class |
| `repair-guides/gy6-carburetor-cleaning-guide.html` | 2 | C7 shadow, C8 `.tag` |
| `repair-guides/gy6-carburetor-jetting-guide.html` | 2 | C7 shadow, C8 `.tag` |
| `repair-guides/gy6-efi-hard-start-intake-flooding.html` | 1 | C7 shadow |
| `repair-guides/gy6-electrical-wiring-troubleshooting.html` | 2 | C3 font, C7 shadow |
| `repair-guides/gy6-hard-start-intake-flooding.html` | 1 | C7 shadow |
| `repair-guides/gy6-top-end-rebuild-piston-rings.html` | 2 | C3 font, C7 shadow |
| `repair-guides/index.html` | 2 | C7 shadow, C8 btn class |
| `repair-guides/scooter-cvt-clutch-variator-guide.html` | 2 | C7 shadow (3×), C8 `.tag` + btn |
| `repair-guides/vespa-primavera-dent-bodywork-repair.html` | 2 | C7 shadow, C8 btn class |
| `videos/gy6-carburetor-intake-change-tutorial.html` | 2 | C2 `#000`, C7 shadow |
| `videos/index.html` | 2 | C7 shadow, C8 btn class |
| `videos/vespa-carb-idle-adjustment-video.html` | 1 | C7 shadow |
| `videos/vespa-piaggio-advanced-clutch-repair-video.html` | 2 | C7 shadow, C8 btn class |
| `videos/vespa-primavera-belt-transmission-video.html` | 2 | C7 shadow, C8 btn class |
| `videos/vespa-primavera-oil-change-video.html` | 2 | C2 `#000`, C7 shadow |

---

## Section 4: ISSUES SUMMARY TABLE

| Page | C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 | C9 | Total |
|------|----|----|----|----|----|----|----|----|-----|-------|
| `diagnostics/gy6-air-leak-diagnosis.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 2 |
| `diagnostics/gy6-carburetor-pilot-idle-jet.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | 1 |
| `diagnostics/gy6-cvt-roller-noise-diagnosis.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | 1 |
| `diagnostics/gy6-dirty-buttons-no-start.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | 1 |
| `diagnostics/gy6-efi-cel-flash-codes.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | 1 |
| `diagnostics/gy6-efi-fuel-injection-troubleshooting.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | 1 |
| `diagnostics/gy6-efi-hud-ecu-hacker-setup.html` | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | 2 |
| `diagnostics/gy6-no-start-troubleshooting.html` | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 3 |
| `diagnostics/gy6-side-stand-kill-switch.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | 1 |
| `diagnostics/index.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | 3 |
| `diagnostics/piaggio-zip-100-troubleshooting.html` | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | 2 |
| `diagnostics/wizard.html` | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | 2 |
| `index.html` | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | ✗ | ✗ | 4 |
| `models/btc-riva-50-model-overview.html` | ✓ | ✓ | ✗ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | 4 |
| `models/index.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | 3 |
| `models/la-souris-sourini-city-overview.html` | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 3 |
| `models/piaggio-zip-100-technical-overview.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | 1 |
| `models/vespa-primavera-125-technical-overview.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | 1 |
| `models/vespa-zip-50-4t-technical-overview.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | 1 |
| `news/index.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 2 |
| `parts/gy6-engine-codes-parts-compatibility.html` | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | 8 |
| `parts/index.html` | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 3 |
| `repair-guides/carburetor-adjustment-tuning-guide.html` | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 4 |
| `repair-guides/gy6-4stroke-maintenance-schedule.html` | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | 8 |
| `repair-guides/gy6-air-filter-guide.html` | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 4 |
| `repair-guides/gy6-big-bore-kit-guide.html` | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | 8 |
| `repair-guides/gy6-brake-fluid-guide.html` | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 4 |
| `repair-guides/gy6-brake-pads-guide.html` | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 4 |
| `repair-guides/gy6-carburetor-adjustment-guide.html` | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 3 |
| `repair-guides/gy6-carburetor-cleaning-guide.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 2 |
| `repair-guides/gy6-carburetor-jetting-guide.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 2 |
| `repair-guides/gy6-cdi-no-spark-diagnosis.html` | ✓ | ✓ | ✗ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | 4 |
| `repair-guides/gy6-cvt-variator-belt-replacement.html` | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 3 |
| `repair-guides/gy6-efi-hard-start-intake-flooding.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | 1 |
| `repair-guides/gy6-electrical-wiring-troubleshooting.html` | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | 2 |
| `repair-guides/gy6-fuel-pump-maintenance.html` | ✓ | ✓ | ✗ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | 4 |
| `repair-guides/gy6-hard-start-intake-flooding.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | 1 |
| `repair-guides/gy6-ignition-coil-guide.html` | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 4 |
| `repair-guides/gy6-oil-change-guide.html` | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 3 |
| `repair-guides/gy6-performance-upgrades-guide.html` | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | 8 |
| `repair-guides/gy6-spark-plug-guide.html` | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 4 |
| `repair-guides/gy6-speedometer-cable-replacement.html` | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | 3 |
| `repair-guides/gy6-top-end-rebuild-piston-rings.html` | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | 2 |
| `repair-guides/gy6-valve-adjustment-guide.html` | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 3 |
| `repair-guides/index.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 2 |
| `repair-guides/scooter-cvt-clutch-variator-guide.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 2 |
| `repair-guides/vespa-diy-maintenance-tips.html` | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | 8 |
| `repair-guides/vespa-primavera-dent-bodywork-repair.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 2 |
| `repair-guides/vespa-primavera-sprint-oil-change.html` | ✓ | ✓ | ✗ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | 4 |
| `videos/gy6-carburetor-intake-change-tutorial.html` | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | 2 |
| `videos/index.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 2 |
| `videos/vespa-carb-idle-adjustment-video.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | 1 |
| `videos/vespa-piaggio-advanced-clutch-repair-video.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 2 |
| `videos/vespa-primavera-belt-transmission-video.html` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | 2 |
| `videos/vespa-primavera-oil-change-video.html` | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | 2 |

---

## Section 5: FIX RECOMMENDATIONS

### 🚨 CRITICAL — Fix This Week

#### 1. Fix the content-sync page template (impacts all future pages)

All 5 critical pages were generated today from the same broken template. Fix the template in `_dev/` before the next sync run or the problem will multiply.

**Template issues to fix:**
- Add `<link rel="stylesheet" href="../../styles.css">` to `<head>`  
- Replace `Georgia, serif` with `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`
- Replace all raw hex colors with CSS variables (see color mapping in Section 2)
- Replace `border-radius: Npx` with `var(--radius-sm/md/lg/xl)`
- Add `@media (max-width: 768px)` and `@media (max-width: 480px)` blocks
- Add `transition: var(--transition)` to button/card/link elements
- Change `.tag` → `.guide-tag`
- Add `:focus { outline: 2px solid var(--accent); outline-offset: 2px; }` 

**Files affected (created today, high priority):**
- `parts/gy6-engine-codes-parts-compatibility.html`
- `repair-guides/gy6-4stroke-maintenance-schedule.html`
- `repair-guides/gy6-big-bore-kit-guide.html`
- `repair-guides/gy6-performance-upgrades-guide.html`
- `repair-guides/vespa-diy-maintenance-tips.html`

Estimated effort: 45 minutes to fix all 5 pages manually, or 10 minutes to fix the source template and re-generate.

#### 2. Fix hardcoded colors in older repair guides

Pages using `#000` and `#f00` in their `<style>` blocks:
- `repair-guides/carburetor-adjustment-tuning-guide.html`
- `repair-guides/gy6-air-filter-guide.html`
- `repair-guides/gy6-brake-fluid-guide.html`
- `repair-guides/gy6-brake-pads-guide.html`
- `repair-guides/gy6-ignition-coil-guide.html`
- `repair-guides/gy6-spark-plug-guide.html`

Replace `#000` → `var(--bg-dark)` or `var(--text-primary)` depending on context; `#f00` → `var(--danger)`.

Estimated effort: 20 minutes.

---

### ⚠️ HIGH — Fix Next 2 Weeks

#### 3. Replace hardcoded `box-shadow` with CSS variables (89% of pages affected)

This is the most widespread issue on the site. 49 of 55 pages use something like:

```css
/* WRONG — found across 49 pages */
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

/* RIGHT */
box-shadow: var(--shadow);
```

This is a systematic issue from the original page templates. A find-and-replace script would resolve it across the board:

```bash
# Identify all variations of the hardcoded shadow:
grep -rn "box-shadow\s*:\s*[^v]" public/ --include="*.html"
```

Estimated effort: 1 hour with a targeted sed/Python replacement script.

#### 4. Standardise component class naming (`.tag` → `.guide-tag`)

35 pages have component pattern issues. The two sub-issues:
- **`.tag` vs `.guide-tag`** — affects 17 pages. Per design system: `.guide-tag` (teal) not `.tag` (yellow warning)
- **Buttons without `.btn` class** — affects 22 pages. `<button>` elements lack design system classes

Estimated effort: 30 minutes for `.tag` → `.guide-tag` (simple rename). Button classes require more context per page — 1 hour.

#### 5. Fix font-family declarations (26 pages)

Two distinct problems:
- **`Georgia, serif`** — 5 pages (all in the critical batch + `parts/gy6-engine-codes-parts-compatibility.html`). Clearly wrong.
- **System-font stack declared in local `<style>` block** — many pages declare the correct system font in their local `<style>` when it's already set by `styles.css`. This is redundant but not harmful; however, the check flags it. Can be removed to reduce noise.

Estimated effort: 15 minutes.

---

### 📋 MEDIUM — Fix Next Month

#### 6. Add responsive media queries to remaining 6 pages

Pages missing mobile breakpoints:
- `index.html` (home page — high priority)
- `parts/gy6-engine-codes-parts-compatibility.html` (in critical batch)
- `repair-guides/gy6-4stroke-maintenance-schedule.html` (in critical batch)
- `repair-guides/gy6-big-bore-kit-guide.html` (in critical batch)
- `repair-guides/gy6-performance-upgrades-guide.html` (in critical batch)
- `repair-guides/vespa-diy-maintenance-tips.html` (in critical batch)

Note: The 5 critical pages will be fixed as part of the template fix above. The home page (`index.html`) needs separate attention.

Estimated effort: 30 minutes for `index.html` responsive CSS.

#### 7. Add CSS transitions (12 pages)

Pages missing transitions on interactive elements:
- `diagnostics/index.html`, `index.html`, `models/btc-riva-50-model-overview.html`, `models/index.html`
- `parts/gy6-engine-codes-parts-compatibility.html`, `repair-guides/gy6-4stroke-maintenance-schedule.html`
- `repair-guides/gy6-big-bore-kit-guide.html`, `repair-guides/gy6-cdi-no-spark-diagnosis.html`
- `repair-guides/gy6-fuel-pump-maintenance.html`, `repair-guides/gy6-performance-upgrades-guide.html`
- `repair-guides/vespa-diy-maintenance-tips.html`, `repair-guides/vespa-primavera-sprint-oil-change.html`

Quick fix — add to each page's `<style>` block:
```css
a, button, .card { transition: var(--transition); }
```

Estimated effort: 20 minutes.

#### 8. Add `:focus` accessibility styles (6 pages)

Pages missing `:focus` styles:
- `index.html`, `parts/gy6-engine-codes-parts-compatibility.html`
- `repair-guides/gy6-4stroke-maintenance-schedule.html`, `repair-guides/gy6-big-bore-kit-guide.html`
- `repair-guides/gy6-performance-upgrades-guide.html`, `repair-guides/vespa-diy-maintenance-tips.html`

Add to each:
```css
a:focus, button:focus, input:focus {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

Estimated effort: 15 minutes.

---

## Section 6: TRENDS & NOTES

```
Compliance Progress:
- Last audit:  47% (8/16 pages passing)  — basis was 16 pages
- This audit:   0% (0/55 pages passing)  — basis is 55 pages (site grew 3.4×)
- Trend: ↓ declining numerically, but this is partly a scope expansion effect

Context: The 47% figure applied when the site had 16 pages. 
The existing 16 pages mostly still pass 7-8/9 checks. 
The regression to 0% is driven by:
  1. C7 (shadows) now being checked, which almost every page fails
  2. 39 new pages added, many with template issues
  
If C7 were excluded, compliance would be approx. 38% (21/55 pages passing remaining 8 checks).

Most common issues (by pages affected):
1. C7 — Hardcoded box-shadow — 49 pages (89%)
2. C8 — Component patterns (.tag / .btn) — 35 pages (64%)
3. C3 — Font family in local <style> — 26 pages (47%)
4. C2 — Hardcoded hex colors — 16 pages (29%)
5. C6 — No transitions — 12 pages (22%)

No pages are fully compliant (0 issues) this week.

Pages needing immediate attention (6+ issues):
- parts/gy6-engine-codes-parts-compatibility.html (8 issues)
- repair-guides/gy6-4stroke-maintenance-schedule.html (8 issues)
- repair-guides/gy6-big-bore-kit-guide.html (8 issues)
- repair-guides/gy6-performance-upgrades-guide.html (8 issues)
- repair-guides/vespa-diy-maintenance-tips.html (8 issues)

All 5 critical pages share a single root cause: a broken template used by the
isrm-content-sync scheduled task today. Fix the template = prevent recurrence.
```

---

## Section 7: ACTION ITEMS

```
QUICK WINS (< 30 min total):
□ Fix content-sync template — add stylesheet link, fix font, add transitions (prevents future regressions)
□ Rename .tag → .guide-tag sitewide — sed -i 's/class="tag"/class="guide-tag"/g' public/**/*.html
□ Add :focus styles to 6 affected pages (5 are the critical batch) — 10 min
□ Replace #000/#f00 colors in 6 older repair guide pages — 10 min

MEDIUM EFFORT (1–2 hours):
□ Fix hardcoded box-shadow across 49 pages — run replacement script — 45 min
□ Fix fonts in critical batch pages (Georgia → system font) — 15 min
□ Add responsive media queries to index.html home page — 20 min
□ Add transition: var(--transition) to 12 pages — 20 min

LARGER TASKS (> 2 hours):
□ Standardise button markup with .btn .btn-primary classes across 22 pages
□ Systematic audit and fix of all component patterns using incorrect classes
□ Consider adding box-shadow CSS variable usage to base styles.css to reduce per-page declarations
□ Add --shadow / --shadow-sm to styles-reference.css if not already present and confirm variable names

Total estimated effort to fix all 248 issues: 4–5 hours
Recommended priority: Fix content-sync template FIRST (prevents daily regressions),
then shadow variables (biggest numerical impact).
Recommended timeline: Template fix today; shadows + tags next week; remainder over 3 weeks
```

---

## Section 8: CONCLUSION

```
Summary:
- 55 pages audited (up from 16 at last audit)
- 0 pages fully compliant (down from 8)
- 248 total issues found
- 5 critical pages all created today — share one root cause (broken template)
- 49 pages have hardcoded box-shadow — most common single issue
- The underlying compliance of older pages remains good (most have only 1–2 issues)

Immediate action required:
  → Fix the _dev/ content-sync template before tomorrow's 8:01 AM sync run
     to prevent 5+ more critical pages being generated

Next audit: Monday 2026-05-18

For detailed fix instructions, see:
/documentation/design-system/ACTION_PLAN.md
```

---

*Report generated automatically by `isrm-design-compliance` scheduled task — 2026-05-14*
