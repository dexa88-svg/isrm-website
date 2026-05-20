# ISMR Guide Structure — MDX Format

**Version:** 3.0 (Astro + MDX)  
**Last Updated:** 2026-05-20  
**Purpose:** Reference template for all new content pages. The site is built with Astro 6 + MDX — content lives in `src/content/`, not in `public/`.

> ⚠️ Do NOT write raw HTML files for content. Create `.mdx` files in `src/content/[section]/` only. Astro generates the HTML output at build time.

---

## 1. File Naming & Location

| Section | Folder | Slug format |
|---------|--------|-------------|
| Repair guides | `src/content/repair-guides/` | `gy6-carburetor-cleaning-guide.mdx` |
| Diagnostics | `src/content/diagnostics/` | `gy6-no-spark-diagnosis.mdx` |
| Model pages | `src/content/models/` | `piaggio-zip-100-technical-overview.mdx` |
| Parts | `src/content/parts/` | `gy6-variator-roller-weights.mdx` |
| Videos | `src/content/videos/` | `gy6-engine-rebuild-playlist.mdx` |

**Naming convention:** lowercase kebab-case, `[model/engine]-[component]-[action].mdx`

---

## 2. Frontmatter Reference

All fields are validated by Zod in `src/content.config.ts`. A build error fires if a required field is missing or the wrong type.

### repair-guides (full schema)

```yaml
---
title: "GY6 Carburetor Cleaning Guide"
description: "Step-by-step carburetor cleaning for GY6 50cc–150cc engines. Covers disassembly, jet cleaning, gasket inspection, and reassembly for PD18J, PZ20, PZ27, and PZ30 carbs."
publishDate: "2026-05-20"
updatedDate: "2026-05-20"           # ← MUST update every time you edit this file
difficulty: "Beginner"              # Beginner | Intermediate | Advanced
timeEstimate: "~1 hour"
tags: ["gy6", "carburetor", "cleaning", "fuel"]
appliesTo:
  - "GY6 139QMB (50cc)"
  - "GY6 152QMI (125cc)"
  - "GY6 157QMJ (150cc)"
  - "BTC Riva"
  - "La Souris Sourini / City"
  - "Santini Capri"
videos:
  - id: "YOUTUBE_VIDEO_ID"          # just the video ID, not the full URL
    title: "GY6 Carb Cleaning Full Walkthrough"
    creator: "Channel Name"
    position: "hero"                # hero | inline | related
  - id: "ANOTHER_VIDEO_ID"
    title: "Pilot Jet Cleaning Tips"
    creator: "Channel Name"
    position: "inline"
tools:                              # optional — list the tools needed
  - "Flat-head screwdriver"
  - "Phillips screwdriver"
  - "Carburettor cleaner spray"
  - "Compressed air or bulb blower"
  - "Small wire or carb cleaning needles"
sources:
  - name: "GY6 Service Manual (139QMB)"
    url: "https://example.com/gy6-manual"
  - name: "ScooterWest Tech Forum"
    url: "https://example.com/forum-thread"
canonical: "https://ismr.online/repair-guides/gy6-carburetor-cleaning-guide.html"
draft: false                        # set true while writing; false to publish
---
```

### diagnostics (repair-guide fields plus these)

```yaml
category: "fuel"                   # starting | fuel | transmission | electrical
engine: "gy6"                      # gy6 | piaggio | both
fuel: "carb"                       # carb | efi | both
section: "Fuel System"             # display group on the diagnostics index
cardTag: "Carb"                    # optional short label shown on index card
```

### models / parts / videos

Simpler — only need: `title`, `description`, `publishDate`, `updatedDate`, `tags`, `videos`, `sources`, `canonical`, `draft`. See `src/content.config.ts` for the exact schema.

---

## 3. MDX Body Template (repair-guides)

Copy this template and fill in the placeholders. Everything below the `---` closing fence is MDX — standard Markdown plus Astro component imports.

```mdx
---
[frontmatter as above]
---

import VideoEmbed from '@components/VideoEmbed.astro';
import Callout from '@components/Callout.astro';
import SourceBox from '@components/SourceBox.astro';

[Lead paragraph: what this repair is, why it matters, what the reader will be able to do after following this guide. 2–4 sentences.]

## Applies To

[List the specific models / engine codes this guide covers — repeat from frontmatter `appliesTo` for visibility in the text.]

<SourceBox sources={frontmatter.sources} />

---

<Callout type="danger">
  ⚠️ **Safety first:** [Mandatory safety warning — fuel vapours, hot engine, etc.]
</Callout>

## Video Guide

<VideoEmbed
  videoId="YOUTUBE_VIDEO_ID"
  title="Full video title here"
  creator="Creator / Channel Name"
/>

---

## Tools Required

- **[Tool 1]** — [why / spec]
- **[Tool 2]** — [why / spec]

## Parts & Materials

| Part | OEM / Aftermarket # | Approx. Cost |
|------|---------------------|--------------|
| [Part name] | `[Part number]` | €[cost] |

---

## Background: How [Component] Works

[Optional but recommended — explain what this component does, why it wears or fails, and what happens when it does. Helps users understand why each step matters.]

---

## Step-by-Step Instructions

### Step 1 — [Title]

[Context for this step — what you're doing and why.]

1. [First action]
2. [Second action]
3. [Third action]

<Callout type="tip">
  💡 **Tip:** [Helpful note for this step]
</Callout>

### Step 2 — [Title]

[For a complex step, add an inline video:]

<VideoEmbed
  videoId="STEP_VIDEO_ID"
  title="Step 2 detail"
  creator="Creator Name"
  position="inline"
/>

1. [Action]
2. [Action]

<Callout type="warn">
  ⚠️ **Warning:** [Step-specific caution]
</Callout>

### Step 3 — [Continue for all steps]

---

## Troubleshooting

| Problem | Likely Cause | Solution |
|---------|--------------|----------|
| [Problem] | [Cause] | [Fix] |

---

## Frequently Asked Questions

**Q: [Question]?**  
A: [Answer]

---

## Related Guides

- [Link to related guide 1](/repair-guides/related-guide.html)
- [Link to related guide 2](/diagnostics/related-diagnostic.html)
```

---

## 4. SEO — What You Need to Do vs. What Astro Does Automatically

Because SEO tags are handled by the layout components, your only job is to write correct frontmatter.

| SEO element | Your action |
|-------------|-------------|
| Meta description | Set `description` (150–160 chars) in frontmatter |
| Page title | Set `title` (keep ≤ ~53 chars so " — ISMR" stays ≤ 60 total) |
| Canonical URL | Set `canonical` with the full `https://ismr.online/...` URL |
| Favicons | Nothing — `Base.astro` injects all three favicon tags |
| JSON-LD structured data | Nothing — layout injects the right schema type per section |
| Sitemap | Nothing — Astro generates it at build time from all non-draft pages |
| Open Graph / Twitter cards | Nothing — `Base.astro` injects OG tags from frontmatter |

**After adding a page:** run `npm run build` (or push to `main` to trigger CI). No separate `generate-stats` step needed — it runs as part of the build.

---

## 5. Component Reference

### `<VideoEmbed>`

```mdx
<VideoEmbed
  videoId="D9UnD1ibIIw"
  title="GY6 Carb Adjustment Full Guide"
  creator="TechMechanic"
  position="hero"
/>
```

Always uses `youtube-nocookie.com`. `position` is optional (defaults to `"hero"`).

### `<Callout type="...">`

```mdx
<Callout type="danger">⚠️ Hot engine — let it cool 20 min before touching the carb.</Callout>
<Callout type="warn">⚠️ Do not overtighten the float bowl bolt — plastic threads strip easily.</Callout>
<Callout type="tip">💡 A cheap USB endoscope is excellent for inspecting the intake port.</Callout>
```

Types: `danger` (red), `warn` (amber), `tip` (green).

### `<SourceBox>`

```mdx
<SourceBox sources={frontmatter.sources} />
```

Renders the source attribution block automatically from the `sources` frontmatter array. No manual HTML needed.

---

## 6. Content Quality Standards

- Minimum 1 video per guide (`position: "hero"`)
- Step-by-step as numbered lists — bullets for unordered items only
- All safety warnings in `<Callout type="danger">` or `<Callout type="warn">`
- All YouTube embeds via `<VideoEmbed>` — never raw iframes in MDX
- External links: standard Markdown `[text](url)` — Astro adds `rel="noopener"` automatically
- `updatedDate` must match today's date every time you edit the file
- `draft: true` while writing — flip to `false` only when the guide is complete and has at least one real video

---

## 7. Publishing Checklist

- [ ] Frontmatter passes all required fields (build will error otherwise)
- [ ] `description` is 150–160 characters
- [ ] `title` is ≤ 53 characters
- [ ] `canonical` URL matches the actual page path
- [ ] At least 1 video embedded (`position: "hero"`)
- [ ] At least 1 source in `sources`
- [ ] `appliesTo` lists the specific models covered
- [ ] `draft` set to `false`
- [ ] `npm run build` completes with no errors
- [ ] Page appears in `dist/` and renders correctly with `npm run preview`
