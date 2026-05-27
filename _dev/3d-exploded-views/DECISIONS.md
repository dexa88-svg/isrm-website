# DECISIONS — 3D Exploded Views

Locked-in choices and the reasoning behind them. Append new entries when something changes; do not edit historical entries silently.

Format: each decision has an ID (D1, D2, …), date, status (locked / provisional / superseded), the choice, and the reasoning. If a decision is superseded, leave the old entry in place and add a new one that references it.

---

## D1. Rendering stack — vanilla Three.js
- **Date:** 2026-05-26
- **Status:** locked
- **Choice:** Vanilla Three.js loaded as an Astro client island. **Not** React Three Fiber, **not** model-viewer, **not** Sketchfab embeds, **not** Babylon.js.
- **Why:**
  - The site is Astro + MDX with no React runtime today. Adding R3F pulls in React + ReactDOM (~45 KB gzipped) for a feature used on a handful of pages.
  - Three.js has the largest community, the best documentation, and the easiest hiring pool.
  - `model-viewer` is too restrictive for click-to-select-part and stepped explode animations.
  - Sketchfab embeds break the requirement to deep-link clicks into our own repair guides.
  - Babylon.js is excellent but smaller community and heavier bundle.

## D2. Model format — glTF / GLB with Draco + KTX2
- **Date:** 2026-05-26
- **Status:** locked
- **Choice:** glTF 2.0 binary (GLB) with Draco mesh compression and KTX2 textures.
- **Why:**
  - GLB packs geometry, materials, textures, and animations into one file — clean for HTTP caching and CDN delivery.
  - Draco typically cuts mesh size 5–10×. KTX2 (Basis Universal) cuts texture size 4–6× and decodes directly on the GPU.
  - Both are first-class in Three.js (`DRACOLoader`, `KTX2Loader`).

## D3. Pilot assembly — GY6 engine top end
- **Date:** 2026-05-26
- **Status:** locked
- **Choice:** GY6 cylinder head + valvetrain + valve cover + head gasket + spark plug. Roughly 25–35 parts.
- **Why:**
  - Highest educational value: valve-clearance, head-gasket, decoking, and timing guides all link in.
  - Service manual is already in `documents/`, so spec extraction is fast.
  - Manageable part count for the first build.
  - Was selected over GY6 CVT (also a strong contender, kept as next assembly) and full long block (too large for a pilot).

## D4. Metadata authoring — MDX content collection
- **Date:** 2026-05-26
- **Status:** locked
- **Choice:** New collection `src/content/parts-3d/`, Zod-validated, with a `parts[]` array. Node names in the GLB are the join key.
- **Why:**
  - Fits the existing Astro + Zod pipeline. Build-time validation is free.
  - Version-controlled, PR-reviewable. Scheduled tasks (`isrm-content-sync`, `isrm-consistency-check`) can already manipulate MDX.
  - `guideSlug` can be validated against the `repair-guides` collection via Zod `refine`, so broken cross-links fail the build.
  - JSON sidecars were considered and rejected: they live outside the content collections and skip Zod.
  - Embedding metadata in GLB `userData` was rejected: hard to edit, hard to review in a PR.

## D5. Sourcing strategy — free-CAD-first, fallback chain
- **Date:** 2026-05-26
- **Status:** provisional (depends on A1 outcome)
- **Choice:**
  1. First pass: scour GrabCAD / Sketchfab / Thingiverse / GitHub for separable GY6 CAD with a permissive license.
  2. If nothing usable: commission a freelance modeller (budget €200–400).
  3. If still blocked: photogrammetry-scan a real head, or hand-model from manual diagrams.
- **Why:** the cheapest acceptable option that produces a parts-hierarchy GLB we can ship.

## D6. License posture
- **Date:** 2026-05-26
- **Status:** provisional — needs Den's call once A1 lands.
- **Constraint:** the site is CC BY-SA 4.0. Any third-party CAD must be attributable and not impose terms that conflict with CC BY-SA (e.g. no NC-only assets, no NoDerivatives).
- **Preferred licenses:** CC0, CC BY, MIT, public domain. CC BY-SA is fine. CC BY-NC and "all rights reserved" are not.

## D7. No personal / infra data in this folder
- **Date:** 2026-05-26
- **Status:** locked
- **Choice:** Everything in `_dev/3d-exploded-views/` must be safe to publish on GitHub. No email addresses, no server hostnames or IPs, no SFTP paths, no API keys, no scheduled-task IDs, no internal-only URLs. Reference photos taken from a personal phone go to `_dev/3d-exploded-views/reference/` which will be added to `.gitignore` before the first commit.
- **Why:** the repository is public-facing.

---

## Open questions (not yet decided)

- Q1. Whether to render static OG thumbnails with headless Blender (slow, high quality) or `puppeteer` + offscreen WebGL (fast, lower quality). Decide in Phase E2.
- Q2. Whether the assembly animation plays automatically on first view or requires an explicit user click. Lean towards click-to-play to keep the page calm.
- Q3. Whether to ship a "compare assembled vs exploded" side-by-side mode. Probably no for the pilot — adds complexity without proven demand.
- Q4. Whether to expose the explode amount in the URL (`?explode=0.6&part=valve_intake_1`) for sharable deep links. Lean yes, cheap to implement.
