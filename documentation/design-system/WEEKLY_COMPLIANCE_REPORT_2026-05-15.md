# ISMR Design System Compliance Audit
**Date:** 2026-05-15 (Friday)
**Auditor:** Automated — `isrm-design-compliance` scheduled task
**Reference:** Previous audit 2026-05-14

---

## Section 1: EXECUTIVE SUMMARY

```
ISMR Design System Compliance Audit
Date: 2026-05-15
Pages Audited: 59 (site has grown from 55 to 59 pages)

OVERALL COMPLIANCE: 64% (was 0% / methodology corrected — see note)
- Compliant pages (0 issues):  38 / 59
- Pages with minor issues:     12 / 59  (1–2 issues each)
- Pages with major issues:      5 / 59  (3–5 issues each)
- Pages with critical issues:   4 / 59  (6+ issues each)

Improvement since last audit: Significant — C7 shadow check recalibrated
(previous audit wrongly flagged `var(--shadow)` usage as hardcoded; corrected
this cycle). 38/59 pages fully compliant.

Most common issues:
1. C3 Font family — 14 pages (JetBrains Mono / Georgia serif in style blocks)
2. C4 Border-radius — 14 pages (hardcoded px fallbacks; 4 critical pages)
3. C1 Missing stylesheet — 9 pages (all in specific newer batches)
4. C7 Missing shadows — 10 pages (pages without any box-shadow at all)
```

> **Note on C7 recalibration:** The previous audit (2026-05-14) flagged 49/55 pages as failing
> shadows because `box-shadow: var(--shadow)` was incorrectly parsed. This audit correctly
> identifies pages that have NO shadow at all vs pages using shadow variables. Result: 49/59
> now pass C7 (83%).

> **Note on C4 recalibration:** `var(--radius-md, 8px)` (CSS variable with px fallback) is
> treated as compliant in this audit. Only truly bare `px` values (e.g. `border-radius: 6px`)
> or mixed shorthand (e.g. `0 6px 6px 0`) are flagged.

---

## Section 2: COMPLIANCE BY CATEGORY

| Check | Pass | Fail | Pass Rate | Change vs 2026-05-14 |
|-------|------|------|-----------|----------------------|
| C1 — Stylesheet link present        | 50/59 | 9/59  | 85% | −6% (more pages added) |
| C2 — No hardcoded hex colors        | 54/59 | 5/59  | 92% | +21% |
| C3 — Correct font families          | 45/59 | 14/59 | 76% | +23% |
| C4 — No hardcoded border-radius     | 45/59 | 14/59 | 76% | −15% (stricter detection) |
| C5 — Responsive media queries       | 53/59 | 6/59  | 90% | +1% |
| C6 — Transitions on interactions    | 59/59 | 0/59  | 100% | +22% |
| C7 — Shadow variables (not missing) | 49/59 | 10/59 | 83% | +72% (methodology corrected) |
| C8 — Component pattern compliance   | 55/59 | 4/59  | 93% | +57% |
| C9 — Accessibility basics           | 55/59 | 4/59  | 93% | +4% |

**C6 Transitions is now 100% compliant** — all pages with hover states use `transition:` declarations.

---

## Section 3: PAGE-BY-PAGE ASSESSMENT

### ✓ FULLY COMPLIANT PAGES (38/59)

The following pages pass all 9 checks:

- `diagnostics/gy6-air-leak-diagnosis.html`
- `diagnostics/gy6-carburetor-pilot-idle-jet.html`
- `diagnostics/gy6-cvt-roller-noise-diagnosis.html`
- `diagnostics/gy6-dirty-buttons-no-start.html`
- `diagnostics/gy6-efi-cel-flash-codes.html`
- `diagnostics/gy6-efi-fuel-injection-troubleshooting.html`
- `diagnostics/gy6-no-start-troubleshooting.html`
- `diagnostics/gy6-side-stand-kill-switch.html`
- `diagnostics/index.html`
- `diagnostics/piaggio-zip-100-troubleshooting.html`
- `diagnostics/wizard.html`
- `models/index.html`
- `models/la-souris-sourini-city-overview.html`
- `models/piaggio-zip-100-technical-overview.html`
- `models/vespa-primavera-125-technical-overview.html`
- `models/vespa-zip-50-4t-technical-overview.html`
- `news/index.html`
- `parts/index.html`
- `repair-guides/gy6-air-filter-guide.html`
- `repair-guides/gy6-brake-fluid-guide.html`
- `repair-guides/gy6-brake-pads-guide.html`
- `repair-guides/gy6-carburetor-adjustment-guide.html`
- `repair-guides/gy6-cvt-variator-belt-replacement.html`
- `repair-guides/gy6-efi-hard-start-intake-flooding.html`
- `repair-guides/gy6-electrical-wiring-troubleshooting.html`
- `repair-guides/gy6-hard-start-intake-flooding.html`
- `repair-guides/gy6-ignition-coil-guide.html`
- `repair-guides/gy6-oil-change-guide.html`
- `repair-guides/gy6-spark-plug-guide.html`
- `repair-guides/gy6-speedometer-cable-replacement.html`
- `repair-guides/gy6-top-end-rebuild-piston-rings.html`
- `repair-guides/gy6-valve-adjustment-guide.html`
- `repair-guides/index.html`
- `repair-guides/scooter-cvt-clutch-variator-guide.html`
- `videos/gy6-carburetor-intake-change-tutorial.html`
- `videos/index.html`
- `videos/vespa-carb-idle-adjustment-video.html`
- `videos/vespa-primavera-oil-change-video.html`

---

### ⚠️ MINOR ISSUES (1–2 issues) — 12 pages

---

📄 **diagnostics/gy6-efi-hud-ecu-hacker-setup.html** — ⚠️ MINOR (1 issue)

Issues Found:
1. C3 Font Family — `'JetBrains Mono', 'Fira Code', 'Courier New', monospace` used in `<style>` block. Monospace stack is for code blocks but should not appear as a page-level or body font.

Recommended Actions:
- Ensure monospace font declarations are scoped only to `code`, `pre`, `kbd` elements (acceptable). If used as general body font, replace with system UI stack.

---

📄 **diagnostics/gy6-efi-obd2-dtc-fault-codes.html** — ⚠️ MINOR (2 issues)

Issues Found:
1. C2 Hardcoded Colors — `#06a77d` (→ `var(--success)`), `#d63031` (→ `var(--danger)`)
2. C3 Font Family — `'JetBrains Mono', 'Fira Code', 'Courier New', monospace`

Recommended Actions:
- Replace `#06a77d` → `var(--success)` and `#d63031` → `var(--danger)` in `<style>` block.
- Scope monospace font to code elements only.

---

📄 **index.html** — ⚠️ MINOR (1 issue)

Issues Found:
1. C7 Shadow — No `box-shadow` declarations found in page-level `<style>`. Homepage cards/sections lack elevation styling.

Recommended Actions:
- Add `box-shadow: var(--shadow)` to card/section elements.

---

📄 **models/btc-riva-50-model-overview.html** — ⚠️ MINOR (1 issue)

Issues Found:
1. C4 Border-Radius — `0 6px 6px 0` (shorthand with raw px) — likely on a left-border accent element.

Recommended Actions:
- Replace `0 6px 6px 0` → `0 var(--radius-sm) var(--radius-sm) 0` (using `--radius-sm: 4px` or `--radius-md: 8px` as appropriate).

---

📄 **repair-guides/gy6-carburetor-cleaning-guide.html** — ⚠️ MINOR (2 issues)

Issues Found:
1. C4 Border-Radius — `3px` hardcoded value.
2. C5 Responsive — Missing `@media (max-width: 480px)` breakpoint (only has 768px).

Recommended Actions:
- Replace `border-radius: 3px` → `border-radius: var(--radius-sm)`.
- Add `@media (max-width: 480px)` block for mobile layout.

---

📄 **repair-guides/gy6-carburetor-jetting-guide.html** — ⚠️ MINOR (1 issue)

Issues Found:
1. C4 Border-Radius — `0 6px 6px 0` and `0 4px 4px 0` shorthand values.

Recommended Actions:
- Replace with `0 var(--radius-md) var(--radius-md) 0` / `0 var(--radius-sm) var(--radius-sm) 0`.

---

📄 **repair-guides/gy6-cdi-no-spark-diagnosis.html** — ⚠️ MINOR (1 issue)

Issues Found:
1. C5 Responsive — Missing `@media (max-width: 480px)` breakpoint.

Recommended Actions:
- Add mobile breakpoint at 480px.

---

📄 **repair-guides/gy6-fuel-pump-maintenance.html** — ⚠️ MINOR (1 issue)

Issues Found:
1. C4 Border-Radius — `0 6px 6px 0` shorthand.

Recommended Actions:
- Replace with `0 var(--radius-md) var(--radius-md) 0`.

---

📄 **repair-guides/vespa-primavera-dent-bodywork-repair.html** — ⚠️ MINOR (1 issue)

Issues Found:
1. C3 Font Family — `'JetBrains Mono', 'Courier New', monospace` in style block.

Recommended Actions:
- Scope monospace to code/pre elements only.

---

📄 **repair-guides/vespa-primavera-sprint-oil-change.html** — ⚠️ MINOR (1 issue)

Issues Found:
1. C4 Border-Radius — `0 6px 6px 0` shorthand.

Recommended Actions:
- Replace with `0 var(--radius-md) var(--radius-md) 0`.

---

📄 **videos/vespa-piaggio-advanced-clutch-repair-video.html** — ⚠️ MINOR (1 issue)

Issues Found:
1. C3 Font Family — `'JetBrains Mono', 'Courier New', monospace`.

Recommended Actions:
- Scope monospace to code elements only.

---

📄 **videos/vespa-primavera-belt-transmission-video.html** — ⚠️ MINOR (1 issue)

Issues Found:
1. C3 Font Family — `'JetBrains Mono', 'Courier New', monospace`.

Recommended Actions:
- Scope monospace to code elements only.

---

### ✗ MAJOR ISSUES (3–5 issues) — 5 pages

---

📄 **parts/gy6-engine-codes-parts-compatibility.html** — ✗ MAJOR (4 issues)

Issues Found:
1. C1 Stylesheet — Missing `<link rel="stylesheet" href="../styles.css">` in `<head>`.
2. C3 Font Family — `'JetBrains Mono', 'Fira Code', 'Courier New', monospace`.
3. C4 Border-Radius — `0 var(--radius-md, 8px) var(--radius-md, 8px) 0`, `var(--radius-lg, 12px)`, `var(--radius-sm, 4px)`.
4. C7 Shadow — No `box-shadow` declarations found.

Recommended Actions:
- Add stylesheet link immediately (page is rendering without global styles).
- C4: The `var(--radius-*, Npx)` fallback pattern is nearly compliant — remove the px fallback or verify CSS variable is defined in global stylesheet.
- Add shadow to card/container elements.

---

📄 **repair-guides/gy6-4stroke-maintenance-schedule.html** — ✗ MAJOR (4 issues)

Issues Found:
1. C1 Stylesheet — Missing `<link rel="stylesheet" href="../styles.css">`.
2. C3 Font Family — `'JetBrains Mono', 'Fira Code', 'Courier New', monospace`.
3. C4 Border-Radius — Same `var(--radius-*, Npx)` fallback pattern.
4. C7 Shadow — No `box-shadow` declarations.

Recommended Actions:
- Add stylesheet link (page is rendering without global styles).
- Remove px fallbacks from radius variables.
- Add shadow variables to elevated elements.

---

📄 **repair-guides/gy6-big-bore-kit-guide.html** — ✗ MAJOR (4 issues)

Issues Found:
1. C1 Stylesheet — Missing `<link rel="stylesheet" href="../styles.css">`.
2. C3 Font Family — `'JetBrains Mono', 'Fira Code', 'Courier New', monospace`.
3. C4 Border-Radius — `var(--radius-*, Npx)` fallback pattern.
4. C7 Shadow — No `box-shadow` declarations.

Recommended Actions:
- Same as above batch (this is a newly-generated page from the same template).

---

📄 **repair-guides/gy6-performance-upgrades-guide.html** — ✗ MAJOR (4 issues)

Issues Found:
1. C1 Stylesheet — Missing `<link rel="stylesheet" href="../styles.css">`.
2. C3 Font Family — `'JetBrains Mono', 'Fira Code', 'Courier New', monospace`.
3. C4 Border-Radius — `var(--radius-*, Npx)` fallback pattern.
4. C7 Shadow — No `box-shadow` declarations.

Recommended Actions:
- Same batch fix as above.

---

📄 **repair-guides/vespa-diy-maintenance-tips.html** — ✗ MAJOR (4 issues)

Issues Found:
1. C1 Stylesheet — Missing `<link rel="stylesheet" href="../styles.css">`.
2. C3 Font Family — `'JetBrains Mono', 'Fira Code', 'Courier New', monospace`.
3. C4 Border-Radius — `var(--radius-*, Npx)` fallback pattern.
4. C7 Shadow — No `box-shadow` declarations.

Recommended Actions:
- Same batch fix (same generation template).

---

### ✗✗ CRITICAL ISSUES (6+ issues) — 4 pages

These 4 pages share an identical problem profile: they were generated from a legacy template that predates the ISMR design system. They lack the global stylesheet, use bare hex colors, use Georgia serif, use hardcoded border-radius, have no responsive design, and have no shadow variables.

---

📄 **diagnostics/piaggio-gilera-2stroke-cdi-ignition-fault-finding.html** — ✗✗ CRITICAL (8 issues)

Issues Found:
1. C1 — Missing stylesheet link
2. C2 — Hardcoded colors: `#0f0f0f`, `#e8e8e8`, `#f5a623`, `#e8b84b`, `#7ec8e3`, `#888`, `#1a1a1a`, `#222`, `#333`, `#555`, `#1f1000`, `#000`, `#1a2332`, `#2a3548`
3. C3 — `Georgia, serif` font family
4. C4 — `0 6px 6px 0`, `12px`, `3px` hardcoded border-radius
5. C5 — No media queries at all
6. C7 — No box-shadow
7. C8 — Uses `.tag` instead of `.guide-tag`
8. C9 — No `:focus` states

Color replacements needed:
- `#f5a623` → `var(--warning)`
- `#1a2332` → `var(--surface)`
- `#2a3548` → `var(--border)` / `var(--surface-2)`
- `#0f0f0f`, `#1a1a1a`, `#000` → `var(--bg-dark)`
- `#e8e8e8` → `var(--text-primary)`
- `#888`, `#555`, `#333`, `#222` → `var(--text-secondary)` or `var(--text-tertiary)`
- `#7ec8e3` → `var(--accent)` (closest match)
- `#e8b84b`, `#1f1000` → no direct map; evaluate if needed or remove

---

📄 **diagnostics/piaggio-gilera-starter-motor-fault-finding.html** — ✗✗ CRITICAL (8 issues)

Issues Found:
1. C1 — Missing stylesheet link
2. C2 — Hardcoded colors: same palette as above plus `#ff6b35`, `#0d1a2a`, `#00a8cc`
3. C3 — `Georgia, serif` font family
4. C4 — `0 6px 6px 0`, `12px`, `3px`, `4px` hardcoded
5. C5 — No media queries
6. C7 — No box-shadow
7. C8 — Uses `.tag` instead of `.guide-tag`
8. C9 — No `:focus` states

Additional color replacements:
- `#ff6b35` → `var(--primary)`
- `#00a8cc` → `var(--accent)`
- `#0d1a2a` → `var(--bg-dark)`

---

📄 **repair-guides/gy6-ignition-timing-adjustment-guide.html** — ✗✗ CRITICAL (8 issues)

Issues Found:
1. C1 — Missing stylesheet link
2. C2 — Hardcoded colors: `#0f0f0f`, `#e8e8e8`, `#f5a623`, `#e8b84b`, `#7ec8e3`, `#888`, `#1a1a1a`, `#222`, `#333`, `#555`, `#1f1000`, `#ff6b35`, `#0d1a2a`, `#00a8cc`, `#1a2332`, `#2a3548`, `#0d2b00`, `#7ed957`
3. C3 — `Georgia, serif` font family
4. C4 — `0 6px 6px 0`, `12px`, `3px` hardcoded
5. C5 — No media queries
6. C7 — No box-shadow
7. C8 — Uses `.tag` instead of `.guide-tag`
8. C9 — No `:focus` states

Note: `#0d2b00` (dark green) and `#7ed957` (bright green) have no design system equivalent — evaluate if content requires them or replace with `var(--success)`.

---

📄 **repair-guides/vespa-scooter-routine-service-checklist.html** — ✗✗ CRITICAL (8 issues)

Issues Found:
1. C1 — Missing stylesheet link
2. C2 — Hardcoded colors: same legacy palette
3. C3 — `Georgia, serif` font family
4. C4 — `0 6px 6px 0`, `12px`, `3px` hardcoded
5. C5 — No media queries
6. C7 — No box-shadow
7. C8 — Uses `.tag` instead of `.guide-tag`
8. C9 — No `:focus` states

---

## Section 4: ISSUES SUMMARY TABLE

| Page | SS | Col | Fnt | Rad | Rsp | Trn | Shd | Cmp | A11y | Total |
|------|----|-----|-----|-----|-----|-----|-----|-----|------|-------|
| diagnostics/gy6-air-leak-diagnosis.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| diagnostics/gy6-carburetor-pilot-idle-jet.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| diagnostics/gy6-cvt-roller-noise-diagnosis.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| diagnostics/gy6-dirty-buttons-no-start.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| diagnostics/gy6-efi-cel-flash-codes.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| diagnostics/gy6-efi-fuel-injection-troubleshooting.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| diagnostics/gy6-efi-hud-ecu-hacker-setup.html | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 1 |
| diagnostics/gy6-efi-obd2-dtc-fault-codes.html | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 2 |
| diagnostics/gy6-no-start-troubleshooting.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| diagnostics/gy6-side-stand-kill-switch.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| diagnostics/index.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| diagnostics/piaggio-gilera-2stroke-cdi-ignition-fault-finding.html | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | 8 |
| diagnostics/piaggio-gilera-starter-motor-fault-finding.html | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | 8 |
| diagnostics/piaggio-zip-100-troubleshooting.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| diagnostics/wizard.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| index.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | 1 |
| models/btc-riva-50-model-overview.html | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | 1 |
| models/index.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| models/la-souris-sourini-city-overview.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| models/piaggio-zip-100-technical-overview.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| models/vespa-primavera-125-technical-overview.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| models/vespa-zip-50-4t-technical-overview.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| news/index.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| parts/gy6-engine-codes-parts-compatibility.html | ✗ | ✓ | ✗ | ✗ | ✓ | ✓ | ✗ | ✓ | ✓ | 4 |
| parts/index.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| repair-guides/gy6-4stroke-maintenance-schedule.html | ✗ | ✓ | ✗ | ✗ | ✓ | ✓ | ✗ | ✓ | ✓ | 4 |
| repair-guides/gy6-air-filter-guide.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| repair-guides/gy6-big-bore-kit-guide.html | ✗ | ✓ | ✗ | ✗ | ✓ | ✓ | ✗ | ✓ | ✓ | 4 |
| repair-guides/gy6-brake-fluid-guide.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| repair-guides/gy6-brake-pads-guide.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| repair-guides/gy6-carburetor-adjustment-guide.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| repair-guides/gy6-carburetor-cleaning-guide.html | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | 2 |
| repair-guides/gy6-carburetor-jetting-guide.html | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | 1 |
| repair-guides/gy6-cdi-no-spark-diagnosis.html | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | 1 |
| repair-guides/gy6-cvt-variator-belt-replacement.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| repair-guides/gy6-efi-hard-start-intake-flooding.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| repair-guides/gy6-electrical-wiring-troubleshooting.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| repair-guides/gy6-fuel-pump-maintenance.html | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | 1 |
| repair-guides/gy6-hard-start-intake-flooding.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| repair-guides/gy6-ignition-coil-guide.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| repair-guides/gy6-ignition-timing-adjustment-guide.html | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | 8 |
| repair-guides/gy6-oil-change-guide.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| repair-guides/gy6-performance-upgrades-guide.html | ✗ | ✓ | ✗ | ✗ | ✓ | ✓ | ✗ | ✓ | ✓ | 4 |
| repair-guides/gy6-spark-plug-guide.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| repair-guides/gy6-speedometer-cable-replacement.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| repair-guides/gy6-top-end-rebuild-piston-rings.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| repair-guides/gy6-valve-adjustment-guide.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| repair-guides/index.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| repair-guides/scooter-cvt-clutch-variator-guide.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| repair-guides/vespa-diy-maintenance-tips.html | ✗ | ✓ | ✗ | ✗ | ✓ | ✓ | ✗ | ✓ | ✓ | 4 |
| repair-guides/vespa-primavera-dent-bodywork-repair.html | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 1 |
| repair-guides/vespa-primavera-sprint-oil-change.html | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | 1 |
| repair-guides/vespa-scooter-routine-service-checklist.html | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | 8 |
| videos/gy6-carburetor-intake-change-tutorial.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| videos/index.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| videos/vespa-carb-idle-adjustment-video.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |
| videos/vespa-piaggio-advanced-clutch-repair-video.html | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 1 |
| videos/vespa-primavera-belt-transmission-video.html | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 1 |
| videos/vespa-primavera-oil-change-video.html | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 0 |

**Legend:** SS=Stylesheet, Col=Colors, Fnt=Fonts, Rad=BorderRadius, Rsp=Responsive, Trn=Transitions, Shd=Shadows, Cmp=Components, A11y=Accessibility

---

## Section 5: FIX RECOMMENDATIONS

### CRITICAL — Fix This Week

**1. Fully rebuild 4 legacy-template pages (8 issues each)**
Pages affected:
- `diagnostics/piaggio-gilera-2stroke-cdi-ignition-fault-finding.html`
- `diagnostics/piaggio-gilera-starter-motor-fault-finding.html`
- `repair-guides/gy6-ignition-timing-adjustment-guide.html`
- `repair-guides/vespa-scooter-routine-service-checklist.html`

These pages share an identical old template. The fastest fix is to regenerate them using the current ISMR template (from `_dev/GUIDE-STRUCTURE.md`) and migrate the content. Manually patching 8 issues per page is slower than a clean rewrite.
Estimated effort: 2 hours (regenerate + review)
See: ACTION_PLAN.md "Phase 1: Critical Pages"

---

### HIGH — Fix Next 2 Weeks

**2. Add stylesheet link to 5 "MAJOR" batch pages**
Pages affected:
- `parts/gy6-engine-codes-parts-compatibility.html`
- `repair-guides/gy6-4stroke-maintenance-schedule.html`
- `repair-guides/gy6-big-bore-kit-guide.html`
- `repair-guides/gy6-performance-upgrades-guide.html`
- `repair-guides/vespa-diy-maintenance-tips.html`

These pages were generated from a template that omitted the `<link>` tag. One-liner fix per page.
Estimated effort: 5 minutes total
See: ACTION_PLAN.md "Phase 1: Issue #1"

**3. Remove JetBrains Mono font from page-level styles (5 "MAJOR" batch pages + 5 minor pages)**
These pages declare `font-family: 'JetBrains Mono', ...` at a broad selector level. The fix is to scope that font-family to `code, pre, kbd` selectors only (or rely on the global `.code` rule in `styles.css`).
Pages (10 total): same 5 batch pages above + `gy6-efi-hud-ecu-hacker-setup.html`, `gy6-efi-obd2-dtc-fault-codes.html`, `vespa-primavera-dent-bodywork-repair.html`, `vespa-piaggio-advanced-clutch-repair-video.html`, `vespa-primavera-belt-transmission-video.html`
Estimated effort: 15 minutes
See: ACTION_PLAN.md "Phase 1: Issue #3"

**4. Fix border-radius on 5 "MAJOR" batch pages**
Remove `var(--radius-*, Npx)` px fallbacks and bare shorthand `0 6px 6px 0` values. Replace with clean `var(--radius-sm)` / `var(--radius-md)` calls.
Estimated effort: 20 minutes

**5. Fix hardcoded colors in `gy6-efi-obd2-dtc-fault-codes.html`**
Replace `#06a77d` → `var(--success)`, `#d63031` → `var(--danger)`.
Estimated effort: 2 minutes

---

### MEDIUM — Fix Next Month

**6. Add `box-shadow: var(--shadow)` to 5 "MAJOR" batch pages + `index.html`**
6 pages have no shadow declarations at all. Add to card/panel elements.
Estimated effort: 15 minutes

**7. Add `@media (max-width: 480px)` to `gy6-carburetor-cleaning-guide.html` and `gy6-cdi-no-spark-diagnosis.html`**
2 pages only have the 768px breakpoint; missing mobile (480px).
Estimated effort: 15 minutes

**8. Fix remaining border-radius shorthand in 5 minor pages**
Pages: `btc-riva-50-model-overview.html`, `gy6-carburetor-cleaning-guide.html`, `gy6-carburetor-jetting-guide.html`, `gy6-fuel-pump-maintenance.html`, `vespa-primavera-sprint-oil-change.html`
Estimated effort: 10 minutes

---

## Section 6: TRENDS & NOTES

```
Compliance Progress:
- 2026-05-14: 0%  (methodology error — shadow check incorrectly flagged all var() usage)
- 2026-05-15: 64% (38/59 pages fully compliant with corrected methodology)
- Trend: ↑ improving (methodology corrected + site growing with mostly-compliant new pages)

Most common issues (by pages affected):
1. C4 Border-Radius — 14 pages (mostly var() fallback pattern or shorthand px)
2. C3 Font Family — 14 pages (monospace in broad selectors, or Georgia serif)
3. C1 Missing Stylesheet — 9 pages (5 MAJOR batch + 4 CRITICAL legacy)
4. C7 Missing Shadow — 10 pages (9 pages with no box-shadow at all + index.html)
5. C5 No Responsive — 6 pages (4 CRITICAL + 2 minor)

Fully compliant pages (no action needed): 38 listed in Section 3
Pages needing immediate attention (6+ issues):
- diagnostics/piaggio-gilera-2stroke-cdi-ignition-fault-finding.html
- diagnostics/piaggio-gilera-starter-motor-fault-finding.html
- repair-guides/gy6-ignition-timing-adjustment-guide.html
- repair-guides/vespa-scooter-routine-service-checklist.html

New pages since yesterday (2026-05-14):
- videos/vespa-piaggio-advanced-clutch-repair-video.html (minor: font)
- videos/vespa-primavera-belt-transmission-video.html (minor: font)
- repair-guides/vespa-primavera-dent-bodywork-repair.html (minor: font)
- parts/gy6-engine-codes-parts-compatibility.html (major: 4 issues)
```

---

## Section 7: ACTION ITEMS

```
QUICK WINS (< 30 min total):
☐ Add stylesheet link to 5 MAJOR batch pages — 5 min
☐ Fix #06a77d and #d63031 in gy6-efi-obd2-dtc-fault-codes.html — 2 min
☐ Fix border-radius shorthand in 5 minor pages — 10 min
☐ Add 480px media queries to 2 pages — 10 min

MEDIUM EFFORT (1-2 hours):
☐ Scope monospace fonts to code elements (10 pages) — 15 min
☐ Fix var(--radius-*,Npx) fallbacks in 5 MAJOR pages — 20 min
☐ Add box-shadow to 6 pages missing it — 15 min

LARGER TASKS (> 2 hours):
☐ Rebuild 4 CRITICAL legacy-template pages from current ISMR template — 2 hrs

Total estimated effort to 100% compliance: ~3-4 hours
Recommended timeline: 2 weeks
```

---

## Section 8: CONCLUSION

```
Summary:
- 38/59 pages fully compliant (64%)
- 12 pages have minor issues (1-2 each), easily fixed
- 5 pages have major issues (4 each), mostly same batch template
- 4 pages are critical (8 issues each), require full rebuild from current template
- C6 Transitions: 100% pass rate — excellent
- C2 Colors: 92% pass rate — nearly clean
- C8 Components: 93% pass rate — nearly clean
- Weakest checks: C3 Fonts (76%) and C4 Border-Radius (76%)

Path to 100%:
- Fix 4 CRITICAL pages → +4 compliant → 42/59 = 71%
- Fix 5 MAJOR pages (stylesheet + font + radius + shadow) → +5 → 47/59 = 80%
- Fix 12 MINOR pages (each 1-2 small fixes) → 59/59 = 100%

Next audit: 2026-05-16

For detailed fix instructions, see:
/documentation/design-system/ACTION_PLAN.md
```

---

*Report generated automatically by `isrm-design-compliance` scheduled task on 2026-05-15.*
*Auditor: Claude (Anthropic) — Cowork mode.*
*Pages audited: 59 | Checks per page: 9 | Total check points: 531*
