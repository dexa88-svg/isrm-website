# PROGRESS — 3D Exploded Views

Per-task status. Update this file (and only the changed rows) whenever a task moves. The "Next up" line at the top is the single source of truth for what to pick up next.

**Next up:** A2 — Fallback decision gate (Den to decide CAD sourcing route — see SOURCES.md recommendation).

Status legend: `⏳ pending` · `🔄 in progress` · `✅ done` · `🚫 blocked` · `⏭️ skipped`.

---

## Phase A — Research & decisions

| ID | Task | Owner | Status | Notes |
|----|------|-------|--------|-------|
| A1 | CAD asset hunt — shortlist GY6 top-end candidates | Claude | ✅ done | No free separable GY6 top-end found. 5 candidates logged in `SOURCES.md`. Recommendation: proceed to A2. |
| A2 | Fallback decision gate (A1 found no suitable model) | Den | ⏳ pending | Den to choose: (1) commission freelancer ~€200–400, (2) adapt C-001 student STEP + contact author, or (3) photogrammetry scan of real head. See SOURCES.md §Recommendation. |
| A3 | Reference photos + spec extraction | Den + Claude | ⏳ pending | Photos to `_dev/3d-exploded-views/reference/` (gitignored). Specs to `SOURCES.md`. |
| A4 | Competitive teardown of Easemble + comparables | Claude | ✅ done | Deliverable: `COMPETITIVE-TEARDOWN.md`. Reviewed Partful, Sketchfab, Artec3D, IKEA pattern, BMW iETK. Feature matrix + copy/skip list written. |

## Phase B — Pipeline & tooling

| ID | Task | Owner | Status | Notes |
|----|------|-------|--------|-------|
| B1 | Blender prep workflow | Claude | ⏳ pending | Gated on A1 (need an actual model to test the workflow against). |
| B2 | Naming convention + Zod schema for `parts-3d` | Claude | ⏳ pending | Can start in parallel with A1. |
| B3 | Build-time validator `validate-3d-parts.js` | Claude | ⏳ pending | Depends on B2 + at least one GLB. |

## Phase C — Viewer component

| ID | Task | Owner | Status | Notes |
|----|------|-------|--------|-------|
| C1 | `<ExplodedViewer>` Astro island | Claude | ⏳ pending | Depends on B2; can be prototyped with a stand-in GLB. |
| C2 | Mobile + a11y pass | Claude + Den | ⏳ pending | Den QA on real device. |
| C3 | Performance budget enforcement | Claude | ⏳ pending | |

## Phase D — Content integration

| ID | Task | Owner | Status | Notes |
|----|------|-------|--------|-------|
| D1 | Pilot page (`gy6-top-end.mdx` + route) | Claude | ⏳ pending | |
| D2 | Cross-link from existing top-end guides | Claude | ⏳ pending | |
| D3 | `/3d/` index page | Claude | ⏳ pending | |
| D4 | Stats integration | Claude | ⏳ pending | |

## Phase E — SEO + structured data

| ID | Task | Owner | Status | Notes |
|----|------|-------|--------|-------|
| E1 | JSON-LD (`LearningResource` + `3DModel`) | Claude | ⏳ pending | |
| E2 | Static OG image per assembly | Claude | ⏳ pending | Decide rendering route (Q1 in DECISIONS.md). |
| E3 | Sitemap + canonical verification | Claude | ⏳ pending | |

## Phase F — Verification

| ID | Task | Owner | Status | Notes |
|----|------|-------|--------|-------|
| F1 | Build validation (`npm test` + validator + `npm run build`) | Claude | ⏳ pending | |
| F2 | Manual QA on real device | Den | ⏳ pending | |
| F3 | Lighthouse audit (≥85 perf, ≥95 a11y/SEO) | Claude | ⏳ pending | |
| F4 | Cross-browser pass | Claude + Den | ⏳ pending | |

## Phase G — Documentation + backlog

| ID | Task | Owner | Status | Notes |
|----|------|-------|--------|-------|
| G1 | `AUTHORING-3D-PAGES.md` contributor guide | Claude | ⏳ pending | |
| G2 | Prioritised next-assemblies backlog | Claude | ⏳ pending | |

---

## Changelog

- **2026-05-26** — Plan created. All tasks pending. Next up: A1.
- **2026-05-26** — A1 complete: exhaustive search of GrabCAD, Sketchfab, CGTrader, 3DCADBrowser, Yeggi. No free separable GY6 top-end CAD found. 5 candidates logged in SOURCES.md. GY6 CVT (C-005) noted as ready for the second assembly. Next up: Den decides A2 fallback route.
- **2026-05-26** — A4 complete: COMPETITIVE-TEARDOWN.md written covering Partful, Sketchfab, Artec3D scan, IKEA assembly viewer, BMW iETK. Feature matrix produced. MVP feature set for C1 confirmed. Key differentiator: bidirectional deep-links between 3D viewer and repair guides.
