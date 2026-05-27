# 3D Exploded Views — Planning Folder

This folder is the single source of truth for the Interactive 3D Exploded Views feature on ISMR. Any new chat that needs to continue this work should start by reading the files in this folder in the order below.

> **Resume hint for Claude (or any contributor):** read every file in this folder before writing code or making suggestions. The plan, decisions, sources, and progress tracker are deliberately split so each chat can update only what changed.

---

## Goal

Add interactive Three.js exploded views to ISMR. Users can:

- Rotate, zoom, and pan a 3D model of a scooter assembly.
- Click any part to see its name, key specs, and a link to the relevant repair guide.
- Play a stepped "assembly / disassembly" animation.
- Use a slider to control how exploded the view is.

The reference UX is the Easemble creator product layout — but scoped specifically to GY6 and Piaggio scooter assemblies covered elsewhere on the site.

## Pilot scope

**GY6 engine top end.** Cylinder head, valves, rocker arms, cam, head gasket, valve cover, spark plug — roughly 25–35 parts. Chosen because it's small enough to ship, has high educational value (valve clearance and head-gasket guides are repeat-visit pages), and the GY6 service manual already lives in `documents/` for spec extraction.

## Stack (locked in)

- **Renderer:** vanilla Three.js (no React Three Fiber — adds ~45 KB gzipped for no benefit on a mostly-static Astro site).
- **Model format:** glTF / GLB with Draco compression and KTX2 textures.
- **Integration:** Astro client island, lazy-loaded only on pages that render `<ExplodedViewer>`.
- **Metadata:** new MDX content collection `src/content/parts-3d/` validated by Zod. Node names inside the GLB are the join key between mesh and metadata.

See `DECISIONS.md` for the full rationale.

## Folder map

| File | Purpose |
|------|---------|
| `README.md` | You are here. Entry point, scope, stack summary. |
| `PLAN.md` | Full task list, phases A–G. The thing to execute against. |
| `DECISIONS.md` | Locked-in choices and the reasoning. Add new entries when decisions change. |
| `PROGRESS.md` | Per-task status. Update as work moves. |
| `SOURCES.md` | CAD candidates, photo references, spec references. Filled in during Phase A. |

## Where this fits in the wider project

- The site is Astro + MDX, content collections defined in `src/content.config.ts`.
- Design tokens live in `src/styles/global.css` — the viewer must use those CSS variables, not hard-coded colours.
- A new collection `parts-3d` will be added alongside `repair-guides`, `diagnostics`, `models`, `parts`, `videos`.
- Build pipeline already runs `npm test` → `npm run build` → deploy on push to `main`. The 3D parts validator (Task B3) will hook into `npm run build`.

## What a new chat should do first

1. Read `README.md`, then `DECISIONS.md`, then `PLAN.md`, then `PROGRESS.md`, then `SOURCES.md`.
2. Look at `PROGRESS.md` to see the next pending task.
3. Open `PLAN.md` at the matching task ID for the full brief.
4. Do the work. Update `PROGRESS.md` on completion.
5. If a decision is required, add an entry to `DECISIONS.md` and ask the user.

## Out of scope (for now)

- Electric scooters (Phase 3 of the wider roadmap).
- VR / AR viewer modes.
- User-uploaded models / wiki-style 3D editing (Phase 4 of the wider roadmap).
- Live physics simulation. Animations are pre-authored, deterministic, and cheap.
