# PLAN — Interactive 3D Exploded Views

Phases A → G, each task numbered. Every task lists owner (Claude / Den / shared), deliverable, and dependencies. Tasks are designed to be picked up one at a time across separate chats — read `README.md` first, then jump to the next pending task in `PROGRESS.md`.

---

## Phase A — Research & decisions

### A1. CAD asset hunt
- **Owner:** Claude (with sign-off from Den)
- **Goal:** find a free or cheap GY6 cylinder head / top-end CAD model that has parts as separate, named nodes (not one fused mesh).
- **Where to look:** GrabCAD, GitHub, Thingiverse, Printables, CGTrader (free tier), Sketchfab (downloadable + permissive licenses), Open3DModel.
- **Search terms:** `GY6 139QMB`, `GY6 cylinder head`, `157QMJ`, `GY6 top end`, `50cc scooter engine`, `four-stroke single cylinder head`.
- **For each candidate, log in `SOURCES.md`:** URL, author, license, polycount, file format, whether parts are separable, whether textures are included.
- **Deliverable:** shortlist of 3–5 candidates with a written recommendation.
- **Den's action:** approve the recommendation (and any small spend if needed).

### A2. Fallback decision gate
- **Owner:** Den (decision), Claude (executor on the chosen route).
- **Trigger:** only if A1 finds no usable separable model.
- **Options:**
  1. Commission a freelance modeller (Fiverr / Blender community), budget ~€200–400 for a top-end assembly.
  2. Photogrammetry-scan a real GY6 head Den owns (Polycam free tier on phone), then clean topology in Blender.
  3. Hand-model from the GY6 service manual diagrams in `documents/`.
- **Deliverable:** route chosen, kickoff plan written.

### A3. Reference photo & spec collection
- **Owner:** Den (photos), Claude (spec extraction from manuals).
- **Photos needed (Den):** GY6 cylinder head top, bottom, both sides; head removed and inverted; valves seated; cam + rocker assembly; head gasket; valve cover with markings; spark plug seated. Phone photos are fine — even lighting beats high resolution.
- **Specs needed (Claude extracts from `documents/`):** valve clearances (intake / exhaust), head-bolt torque sequence, valve stem diameters, valve spring free length, compression ratio, decarbonisation interval, spark plug gap and type.
- **Deliverable:** photos in `_dev/3d-exploded-views/reference/` (gitignored — see verification step), spec table written into `SOURCES.md`.

### A4. Competitive teardown
- **Owner:** Claude.
- **Goal:** inspect the Easemble reference URL plus 3–4 comparable interactive parts viewers; write a one-page "what to copy, what to skip" note.
- **Also reviewed:** Sketchfab popular engine models, BMW interactive parts catalogue, IKEA assembly viewers (for stepped-animation patterns).
- **Deliverable:** `_dev/3d-exploded-views/COMPETITIVE-TEARDOWN.md`.
- **Den's action:** review and veto features.

---

## Phase B — Pipeline & tooling

### B1. Blender prep workflow
- **Owner:** Claude.
- **Goal:** document the exact Blender steps so any future contributor can prepare a new assembly the same way.
- **Steps to cover:** import, set origins per part, apply naming convention, decimate to total <50 k triangles, bake basic PBR materials, export GLB with Draco + KTX2.
- **Naming convention:** `<engine>.<assembly>.<part>` — e.g. `gy6.tophead.cylinder_head`, `gy6.tophead.valve_intake_1`, `gy6.tophead.cam`. All lowercase, snake_case, dot-separated.
- **Deliverable:** `_dev/3d-exploded-views/BLENDER-WORKFLOW.md`.

### B2. Naming convention & metadata schema
- **Owner:** Claude.
- **Goal:** define the new MDX content collection.
- **Collection:** `src/content/parts-3d/`.
- **Frontmatter:** `assembly`, `displayName`, `description`, `engine`, `model` (GLB path), `cameraDefault` (xyz + target), `defaultExplodeAmount`, `parts[]`.
- **Each `parts[]` entry:** `nodeName` (matches GLB), `displayName`, `description`, `specs` (key-value), `guideSlug` (Zod-validated against `repair-guides` collection), `category` (head / valvetrain / gasket / fastener / sensor), `explodeVector` (xyz unit direction), `explodeDistance` (number), `explodeOrder` (integer for stepped assembly playback).
- **Deliverable:** PR adding schema to `src/content.config.ts`, plus `_dev/GUIDE-STRUCTURE-3D.md`.

### B3. Build-time validator
- **Owner:** Claude.
- **Goal:** prevent silent drift between the GLB node names and MDX `parts[]` entries.
- **Behaviour:** opens each GLB referenced by a `parts-3d` entry, walks the scene graph, builds a set of node names, cross-checks against the MDX `parts[]`. Build fails on any mismatch.
- **Deliverable:** `scripts/validate-3d-parts.js`, wired into `npm run build` before the Astro build step.

---

## Phase C — Viewer component

### C1. `<ExplodedViewer>` Astro island
- **Owner:** Claude.
- **Features:**
  - Vanilla Three.js, dynamically imported (no cost on pages that don't use it).
  - `OrbitControls` for rotate / zoom / pan.
  - Raycaster click-to-select with hovered-part outline (custom shader pass, not the full `OutlinePass` — too heavy).
  - Slide-in info panel on the right, populated from the MDX part entry, using existing design tokens (`--surface`, `--text-primary`, etc.).
  - Explode slider 0–100 %, drives every part along its `explodeVector × explodeDistance`.
  - Play / pause button for stepped assembly playback, ordered by `explodeOrder`, ~600 ms per step with eased interpolation.
  - Reset, fullscreen, "back to assembled" controls.
- **Bundle target:** ≤300 KB gzipped for the viewer chunk (Three.js core + Draco + KTX2 loaders).
- **Deliverable:** `src/components/ExplodedViewer.astro` + the JS island.

### C2. Mobile & accessibility pass
- **Owner:** Claude (build), Den (QA on real device).
- **Mobile:** touch hit-areas, pinch-zoom, two-finger pan.
- **A11y:** every selectable part also reachable via a keyboard-navigable parts list, `aria-label` on the canvas, focus indicators, `prefers-reduced-motion` disables assembly animation and snaps to the assembled state.
- **Deliverable:** updates to `<ExplodedViewer>` + an `_dev/3d-exploded-views/A11Y-CHECKLIST.md`.

### C3. Performance budget
- **Owner:** Claude.
- **Targets:**
  - Viewer chunk ≤300 KB gzipped.
  - GLB ≤1.5 MB on the wire for the pilot.
  - Time to interactive ≤2.5 s on a Lighthouse mid-mobile profile.
  - 60 fps idle on a 2020-era laptop, 30 fps minimum on a mid-range Android.
- **Deliverable:** Lighthouse check in CI, plus a Markdown report of measured numbers.

---

## Phase D — Content integration

### D1. Pilot page
- **Owner:** Claude.
- **Deliverable:** `src/content/parts-3d/gy6-top-end.mdx` (the full parts array) + `src/pages/3d/gy6-top-end.astro` (renders the viewer).

### D2. Cross-link from existing guides
- **Owner:** Claude.
- **Goal:** every existing guide that touches the top end gets a "View in 3D →" CTA at the top, deep-linked to the relevant part. Example: a valve-clearance guide deep-links to `/3d/gy6-top-end?part=valve_intake_1`.
- **Deliverable:** an audit of `src/content/repair-guides/` for top-end guides, with PR-style edits to each.

### D3. Index page
- **Owner:** Claude.
- **Deliverable:** `src/pages/3d/index.astro` listing all available exploded views. Build-time static thumbnails (rendered with headless Blender or `puppeteer` + Three.js) per assembly.

### D4. Stats integration
- **Owner:** Claude.
- **Deliverable:** extend `scripts/generate-stats.js` to count `parts-3d` entries; surface on the homepage stat row.

---

## Phase E — SEO, sitemap, structured data

### E1. JSON-LD
- **Owner:** Claude.
- **Deliverable:** mark every 3D page with combined `LearningResource` + `3DModel` schema injected by a new section layout `src/layouts/ThreeD.astro`.

### E2. Static OG image per assembly
- **Owner:** Claude.
- **Deliverable:** build-time render of a hero shot per assembly, written to `public/images/3d/og-<assembly>.png`. Used for OG, Twitter, and the index thumbnails.

### E3. Sitemap & canonical
- **Owner:** Claude.
- **Deliverable:** verify Astro's sitemap picks up `/3d/*` automatically; add `canonical` to the `parts-3d` schema.

---

## Phase F — Verification

### F1. Build validation
- `npm test` passes.
- `scripts/validate-3d-parts.js` passes against the pilot MDX + GLB.
- `npm run build` completes cleanly.

### F2. Manual QA pass (Den)
- Click every part — info panel populates correctly.
- Every guide link in the panel resolves to a real `repair-guides/` page.
- Assembly animation plays start-to-finish without flicker.
- Mobile pinch / pan works, on iOS Safari + Android Chrome.
- `prefers-reduced-motion: reduce` disables animation.

### F3. Lighthouse audit
- Performance ≥85, Accessibility ≥95, SEO ≥95 on the 3D pilot page (throttled mobile).

### F4. Cross-browser
- Chrome (desktop + Android), Safari (desktop + iOS), Firefox (desktop). Note any iOS WebGL2 quirks.

---

## Phase G — Documentation & backlog

### G1. Author guide
- **Owner:** Claude.
- **Deliverable:** `_dev/documentation/3d/AUTHORING-3D-PAGES.md` — step-by-step for adding a new exploded view. Target: a contributor can ship a new assembly in ~half a day once CAD is sourced.

### G2. Next-assemblies backlog (prioritised)
- GY6 CVT.
- GY6 carburettor.
- GY6 bottom end.
- Piaggio Zip 4T top end.
- Piaggio Zip 4T CVT.
- Each entry: rough part count, candidate CAD source, estimated effort, dependency on this pilot's learnings.

---

## Estimated effort (focused work)

| Phase | Effort |
|-------|--------|
| A | 2–4 days (mostly waiting on sourcing / photos) |
| B | 1–2 days |
| C | 3–5 days |
| D + E | 2–3 days |
| F | 1 day |
| G | 0.5 day |
| **Total to ship the pilot** | **~2–3 weeks** |

Subsequent assemblies should drop to ~3–5 days each once Phase B's pipeline is in place.

---

## What Den has to do (consolidated)

1. Approve the CAD candidate from A1 (and any small spend).
2. Take or source reference photos for A3.
3. Sign off on the viewer UX after the C1 prototype.
4. Mobile QA on a real device after C2.
5. Make the license-posture call on any third-party CAD that isn't CC0 (CC BY-SA implications for the site).

Everything else is Claude-executed against this plan.
