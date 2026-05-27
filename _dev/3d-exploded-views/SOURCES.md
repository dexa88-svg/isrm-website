# SOURCES — 3D Exploded Views

Living document. Populated during Phase A and updated as the project grows.

Three sections:
1. **CAD candidates** — models we're evaluating or have chosen.
2. **Reference photos & diagrams** — visual references for modelling and texturing.
3. **Spec references** — torque, clearance, dimensional values pulled from service manuals and forums.

---

## 1. CAD candidates (Task A1)

### Search log

| Date | Platform | Search term | Hits worth reviewing |
|------|----------|-------------|----------------------|
| 2026-05-26 | GrabCAD | `gy6` (tag) | 4 results total: oil pump, bendix 3D scan, CVT assembly, CVT remover. Zero top-end/cylinder head models. |
| 2026-05-26 | GrabCAD | `scooter engine` + STEP filter | No GY6-specific results; mostly e-scooter frames and gearboxes. |
| 2026-05-26 | GrabCAD | `4 stroke single cylinder engine` + STEP filter | 2 usable candidates (see C-001, C-002 below). |
| 2026-05-26 | Sketchfab | `gy6 engine` (downloadable) | 0 results. |
| 2026-05-26 | Sketchfab | `scooter engine` (downloadable) | 0 results (JS rendering issue; page returned no models). |
| 2026-05-26 | Sketchfab (manual) | `engine exploded view` | 1 result with CC-BY licence (see C-003). |
| 2026-05-26 | CGTrader | `gy6 engine` (free) | 0 results. |
| 2026-05-26 | 3DCADBrowser | `scooter engine 100cc` | 1 result with Royalty-Free licence (see C-004); not separable. |
| 2026-05-26 | Yeggi / Printables | `gy6 engine` | Blocked (bot protection / CAPTCHA). |
| 2026-05-26 | GrabCAD | `honda ruckus` | Full scooter body concept, no engine assembly. |
| 2026-05-26 | GrabCAD | `CVT GY6 150CC QMI` | CVT-only (see note below). Good pilot candidate for the CVT assembly, but not the top end. |

**Key finding:** No free, separable GY6 top-end CAD model exists on any major public repository as of 2026-05-26. The closest are generic 4-stroke single-cylinder student projects (C-001, C-002) and one CC-BY exploded view of unknown engine type (C-003). **Fallback route A2 will be needed for a GY6-accurate asset.**

---

### Candidate shortlist

| ID | Source URL | Author | Title | License | Poly count | Separable parts? | Textures? | File format | Cost | Verdict |
|----|------------|--------|-------|---------|------------|------------------|-----------|-------------|------|---------|
| C-001 | https://grabcad.com/library/4-stroke-single-cylinder-engine-2 | Dallara (student group) | 4 Stroke Single Cylinder Engine | GrabCAD community (free download; no explicit open licence stated) | Unknown | ✅ Yes — 73 files: crank, cylinder head, piston, valves, carburettor, camshaft all separate `.SLDPRT` + one assembly `.STEP` | ❌ No | STEP + SOLIDWORKS | Free | ⭐ **Best structural candidate.** Fully separable, STEP export exists, similar layout to GY6 OHC. Not GY6-accurate geometry — would need reshaping. Licence is ambiguous (GrabCAD default). |
| C-002 | https://grabcad.com/library/4-stroke-single-cylinder-engine-1 | Mei Rezki | 4 Stroke Single Cylinder Engine (110cc) | GrabCAD community (free download; no explicit open licence) | Unknown | ⚠️ Likely single fused STL — only 1 STL + 1 STP file in the listing | ❌ No | STEP + STL | Free | 🟡 **Fallback reference.** 1320 downloads, 110cc (close to GY6 displacement). Single-part STEP likely means not separable. Useful for visual reference only. |
| C-003 | https://sketchfab.com/3d-models/engine-exploded-view-0a740cd20bfd4107a1e3c9fbcc5fe70b | rondinellisophia | engine exploded view | **CC Attribution (CC BY)** | 156.5k triangles / 78.6k vertices | ⚠️ Unknown — model shows exploded state but node separation unconfirmed | ❌ No description | GLB (Sketchfab) | Free | 🟡 **Only CC-licensed exploded engine found.** Licence is compatible (CC BY ≤ CC BY-SA). Unknown engine type. Need to download and check node hierarchy. |
| C-004 | https://www.3dcadbrowser.com/3d-model/scooter-engine-100cc | Duncan Yang | Scooter Engine 100cc | Royalty-Free (site licence — redistribution of source files not permitted) | Unknown | ❌ Likely single solid — described as "ready-to-use 3D asset" with STEP/IGES + polygon conversions | ❌ No | STEP/IGES, MAX, FBX, OBJ, BLEND | Free download | ❌ **Rejected.** Licence prohibits redistribution of source files, conflicts with CC BY-SA. Likely not separable anyway. |
| C-005 | https://grabcad.com/library/cvt-gy6-150cc-qmi-1 | Áquila Pereira | CVT GY6 150CC QMI | GrabCAD community (free) | Unknown | ✅ Yes — 46 files, organised into folders (rollers, gear box, belt) | ❌ No | STEP + SOLIDWORKS 2017 | Free | ✅ **GY6-accurate CVT assembly — best asset for Phase D next assembly.** Not the pilot scope (top-end), but save for the CVT exploded view later. |

---

### Recommendation

**A1 verdict: No suitable free separable GY6 top-end model found. Proceed to A2 (fallback decision gate).**

Recommended fallback route (in order of preference):
1. **Commission a freelance modeller** (~€200–400 on Fiverr or Blender Artists) to build a GY6 top-end assembly from the service manual diagrams in `documents/`. This produces a clean, named-node GLB we own outright (or CC0 by contract).
2. **Adapt C-001** (student STEP): import into Blender, reshape to match GY6 dimensions from the service manual, re-export as GLB. Fastest path if geometric accuracy is not critical for launch. Note the ambiguous GrabCAD licence — would need explicit written permission from the author (meirezki96@gmail.com).
3. **Photogrammetry** (Polycam on a real GY6 head Den owns): free, GY6-accurate, but requires Den's time and a clean-up pass in Blender.
4. **AI generation** (Tripo3D / Meshy): can generate a plausible engine shape from reference images in ~2 minutes. Quality is improving but anatomical accuracy of named sub-parts is not yet reliable for a technical manual context. Use only as a last resort or for decorative hero images.

**For the GY6 CVT (second assembly):** C-005 is ready to use as a starting point — download and check node separation in Blender.

---

## 2. Reference photos & diagrams (Task A3)

Photo set to collect — Den. Save originals to `_dev/3d-exploded-views/reference/` (gitignored). When entries below get filled in, store only filenames here, not paths that include personal directories.

| ID | Subject | Required angles | Status |
|----|---------|-----------------|--------|
| P-001 | Cylinder head, assembled, on engine | top, both sides, front (intake), rear (exhaust) | ⏳ pending |
| P-002 | Cylinder head, removed and inverted | combustion chamber view | ⏳ pending |
| P-003 | Valves seated in head | close-up of seats, valve faces | ⏳ pending |
| P-004 | Camshaft + rocker arm assembly | top-down, side, with markings visible | ⏳ pending |
| P-005 | Head gasket | both sides, in-plane | ⏳ pending |
| P-006 | Valve cover | outside (with markings), inside | ⏳ pending |
| P-007 | Spark plug seated in head | close-up of plug well | ⏳ pending |

### Diagram references (from service manuals already in `documents/`)

- `documents/` includes the GY6 service manual and the Piaggio Zip 50 4T / 100 4T service manuals. Pages with exploded diagrams of the top end are the primary diagram references.
- Specific pages to identify and bookmark: cylinder head exploded view, valve clearance procedure, head bolt torque sequence.

---

## 3. Spec references (Task A3)

Filled by Claude during spec-extraction pass. All values must cite a source.

| Spec | Value | Unit | Source | Notes |
|------|-------|------|--------|-------|
| Valve clearance (intake) | _tbd_ | mm | GY6 service manual, page _tbd_ | Cold engine. |
| Valve clearance (exhaust) | _tbd_ | mm | GY6 service manual, page _tbd_ | Cold engine. |
| Head bolt torque (final) | _tbd_ | N·m | GY6 service manual, page _tbd_ | Two-stage if applicable. |
| Head bolt tightening sequence | _tbd_ | n/a | GY6 service manual, page _tbd_ | Diagram or numbered order. |
| Valve stem diameter | _tbd_ | mm | GY6 service manual, page _tbd_ | |
| Valve spring free length | _tbd_ | mm | GY6 service manual, page _tbd_ | |
| Compression ratio | _tbd_ | : 1 | GY6 service manual, page _tbd_ | |
| Decarbonisation interval | _tbd_ | km | GY6 service manual, page _tbd_ | |
| Spark plug type | _tbd_ | n/a | GY6 service manual, page _tbd_ | NGK / equivalent. |
| Spark plug gap | _tbd_ | mm | GY6 service manual, page _tbd_ | |

### Equivalent values for Piaggio Zip 4T (for the next assembly, post-pilot)

To be extracted from the Piaggio service manuals already in `documents/`. Not blocking the pilot.

---

## Source-quality conventions

- Always cite the platform, author handle (where known), and page or timestamp for documents and videos.
- Prefer primary sources (manufacturer service manuals) over secondary (forum posts).
- For values that differ between sources, record both with the source name and flag the conflict in a `Notes` cell.
- License of each source is mandatory — leave blank only if literally unknown, and flag for follow-up.
