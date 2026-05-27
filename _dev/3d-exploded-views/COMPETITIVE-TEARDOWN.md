# COMPETITIVE TEARDOWN — Interactive 3D Parts Viewers

**Task:** A4  
**Date:** 2026-05-26  
**Reviewed by:** Claude  
**Den's action:** Review and veto any features before Phase C begins.

---

## 1. Products reviewed

| # | Product | Type | URL | Notes |
|---|---------|------|-----|-------|
| 1 | **Partful** (formerly SamsonVT) | Commercial OEM 3D EPC platform | https://partful.io/ | Used by Norton Motorcycles, IDEX. CAD + BoM → 3D exploded catalog. |
| 2 | **Sketchfab** (engine models) | Model viewer / marketplace | https://sketchfab.com/tags/scooter | Reference: "engine exploded view" model CC-BY |
| 3 | **Artec3D free motorcycle engine** | Photogrammetry scan showcase | https://www.artec3d.com/3d-models/motorcycle-engine-hd | HD scan, viewer only |
| 4 | **GrabCAD Viewer** | Engineering model viewer | https://grabcad.com | Used implicitly when reviewing candidates |
| 5 | **3DCADBrowser** | CAD model library + viewer | https://www.3dcadbrowser.com/ | Royalty-free, no redistribution |
| 6 | **Meshy AI** | AI 3D generator + model gallery | https://www.meshy.ai/ | CC BY 4.0 on free plan |
| 7 | **Tripo3D** | AI text/image → 3D | https://www.tripo3d.ai/ | Fast generation, improving mechanical quality |

*Note: Easemble was listed in the original plan brief as a reference URL but was not reachable during this research pass. If Den has a direct URL, add it as item 8.*

---

## 2. Teardown notes

### 2.1 Partful — the gold standard to beat

**What it does well:**
- Converts existing OEM CAD and BoM data directly into an interactive 3D exploded parts catalog with almost no rebuild effort.
- Each part is clickable and links to its part number, purchase flow, and related documentation.
- Work Instructions module adds step-by-step assembly animations (similar to IKEA's stop-motion style).
- Always-current: when CAD changes, the catalog re-generates — no manual content maintenance.
- Proven with motorcycle OEMs (Norton Motorcycles is a named customer).

**What it doesn't do (that ISMR will):**
- No public community contribution. It's a closed OEM tool — dealers and customers read; only the OEM writes.
- No repair guides cross-linking. Part info shows purchase data; it doesn't route users to a "how to replace this part" procedure.
- Not free / open source. Pricing is enterprise (demo required).
- No YouTube/video integration per part.

**Copy from Partful:**
- The core UX pattern: click a part → side panel slides in with name, part number, and action links.
- "Turn CAD + BoM into a catalog in hours, not weeks" — adopt the same MDX-driven authoring shortcut.
- The stat they surface: "67% of parts revenue lost to non-OEM sellers because of inaccessible catalogs." Frame ISMR similarly: community loses because the information is fragmented across forums and PDFs.

**Skip from Partful:**
- Purchase/ecommerce flow — not our lane in Phase 2.
- Dedicated iPad/tablet kiosk mode — not needed yet.
- Enterprise SSO and dealer permissioning.

---

### 2.2 Sketchfab — the de facto 3D model embed standard

**What it does well:**
- Universal WebGL viewer, works on any device, handles very large models (millions of polygons) gracefully.
- Annotations: clickable hotspots that pop up text/media. This is the closest free equivalent to what we want.
- Downloadable models with licence metadata.
- Good mobile performance (native app + responsive web).

**What it doesn't do:**
- Annotations can't deep-link to external pages (they're a pop-up bubble, not a router-aware link to `/repair-guides/valve-clearance`).
- Explode-slider and stepped assembly animations require their own "Sketchfab API" inside an embed — fragile and subject to Sketchfab's terms.
- We'd be locked in to their embedding infrastructure; if they go down, our viewers go down.
- No branded design control. Every embed has Sketchfab chrome.

**Copy from Sketchfab:**
- Annotation positioning (small circle indicator on the 3D surface → click → info panel). Simple and learnable.
- Model loading overlay: spinner with model name, then fade-in.
- "Fullscreen" button in the top-right corner of the viewer.

**Skip from Sketchfab:**
- Embedded iframe approach entirely. We build our own viewer (Decision D1 already locked this in).

---

### 2.3 Artec3D motorcycle engine scan — reference for visual quality target

**What it shows:**
- A photogrammetry-scanned motorcycle engine with excellent surface detail: visible casting marks, bolt heads, gasket edges.
- Viewer is Sketchfab-based (see 2.2 above).
- Shows that a real-world scanned engine, properly lit, is visually compelling enough for user trust.

**Key takeaway for ISMR:**
- Users will judge the 3D viewer by whether the model "looks like their engine." A geometrically inaccurate AI-generated shape will undermine trust. Invest in accurate geometry (from service-manual-based modelling or photogrammetry) even if it costs time/money.
- Surface finish matters less than topology: getting the part count and assembly hierarchy right is more important than textures in Phase 2.

---

### 2.4 IKEA assembly viewer — patterns for stepped animations

Not directly reviewed (IKEA's assembly viewer is embedded in product pages and doesn't expose a standalone URL). Based on known interaction pattern:

**Copy:**
- Step counter ("Step 3 of 12") with back/forward arrows.
- Parts not yet needed in a step are shown ghost/transparent — they don't disappear, they visually recede. This preserves context.
- A single prominent "play all" button for users who just want to watch.
- Each step highlights exactly one part with a coloured outline and shows the tool needed.

**Skip:**
- IKEA's cartoonish explode vectors (parts fly off in straight lines perpendicular to the assembly face). For mechanical engines, the vectors should follow realistic dis-assembly directions (e.g. head lifts vertically off the block).

---

### 2.5 BMW interactive parts catalogue (iETK) — ETKA equivalent

Not publicly web-accessible (dealer login required), but known from public documentation and community screenshots:

**Relevant patterns:**
- Navigation tree on the left (Assemblies → Sub-assemblies → Parts list).
- Clicking a part number in the 2D diagram highlights the part and vice versa.
- Part descriptions include OEM number, supersession chain, applicable model years.

**Copy for ISMR:**
- The bidirectional highlight between the parts list and the viewer is the most important UX feature to replicate. Click a part in the 3D view → highlight its row in the side panel. Click a row in the side panel → camera flies to that part in 3D.
- The OEM number field in the part metadata schema (add to the Zod `parts[]` entry as `oemNumber?: string`).

**Skip:**
- The flat 2D diagram fallback — our MDX repair guides with photos serve that role already.
- Supersession chains — too complex for Phase 2.

---

## 3. Feature matrix — what to copy vs skip

| Feature | Partful | Sketchfab | IKEA | BMW iETK | Copy? | Phase |
|---------|---------|-----------|------|----------|-------|-------|
| Click part → slide-in info panel | ✅ | ✅ (annotation) | ❌ | ✅ | **YES** | C1 |
| Explode slider (0–100%) | ✅ | ❌ | ❌ | ❌ | **YES** | C1 |
| Stepped assembly animation | ✅ | ❌ | ✅ | ❌ | **YES** | C1 |
| Bidirectional parts list ↔ 3D highlight | ✅ | ❌ | ❌ | ✅ | **YES** | C1 |
| Deep-link to repair guide | ❌ | ❌ | ❌ | ❌ | **YES — unique to ISMR** | C1 |
| Camera fly-to on part select | ✅ | ❌ | ❌ | ✅ | **YES** | C1 |
| Fullscreen button | ✅ | ✅ | ❌ | ✅ | YES | C1 |
| Reset / "back to assembled" | ✅ | ✅ | ✅ | ✅ | YES | C1 |
| OEM part number in panel | ❌ | ❌ | ❌ | ✅ | Optional | D1 |
| Ghost/transparent non-active parts during steps | ❌ | ❌ | ✅ | ❌ | YES | C1 |
| Mobile touch (pinch/pan) | ✅ | ✅ | ❌ | ❌ | YES | C2 |
| Keyboard-navigable parts list (a11y) | ❌ | ❌ | ❌ | ❌ | **YES — differentiator** | C2 |
| `prefers-reduced-motion` disables animation | ❌ | ❌ | ❌ | ❌ | **YES — differentiator** | C2 |
| URL deep-link to part + explode amount | ❌ | ❌ | ❌ | ❌ | YES (see DECISIONS Q4) | D1 |
| Community-contributed part metadata | ❌ | ❌ | ❌ | ❌ | Phase 4 | later |
| Purchase flow | ✅ | ❌ | ✅ | ✅ | NO (not our lane) | never |
| Sketchfab/vendor branding | — | ✅ | — | — | NO | — |

---

## 4. Summary recommendation

**Build it ourselves (Decision D1 stands):**  
All five references confirm that no off-the-shelf solution provides the combination of: deep-link to repair guides + open contribution + zero vendor lock-in + our design system. Building a vanilla Three.js island is the right call.

**The MVP feature set (Phase C1) should be:**
1. Click any part → camera animates to focus; slide-in panel shows display name, description, specs, and "Go to repair guide →" link.
2. Explode slider (0–100%) with smooth linear interpolation.
3. Play / pause stepped assembly animation (IKEA pattern: ghost non-active parts, step counter).
4. Reset button.
5. Fullscreen toggle.
6. Keyboard-navigable parts list in the panel for a11y.

**One pattern to add that no competitor does well:**  
When a user is already reading a repair guide (e.g. "How to adjust valve clearance"), a persistent "View in 3D →" CTA at the top deep-links into the viewer with the relevant parts pre-selected and the explode slider set to a useful position. This is ISMR's unique differentiator: the 3D viewer and the repair guide are two-way linked, not siloed.

---

*End of competitive teardown — Den to review and flag any vetoes before Phase C begins.*
