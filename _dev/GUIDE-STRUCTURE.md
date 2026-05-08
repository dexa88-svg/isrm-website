# ISRM Repair Guide Structure & Format

**Version:** 1.0  
**Last Updated:** 2026-05-07  
**Purpose:** Define the standardized structure for all repair guides to ensure consistency, usability, and video integration

---

## Overview

Every repair guide in ISRM follows a **standardized HTML structure** that includes:
- Text-based step-by-step instructions
- **Video demonstrations (minimum 1 required)**
- Safety warnings and tips
- Tools & parts lists
- Source attribution
- Metadata (difficulty, time, compatibility)

This ensures users can learn through multiple media: reading, watching, and doing.

---

## 1. Video Integration (Required)

### Video Requirement
- **Minimum:** 1 video per guide
- **Recommended:** 1–3 videos (overview, detailed steps, common mistakes)
- **Sources:** YouTube, Vimeo, or self-hosted (MP4 preferred)

### Video Placement in Guide

**A. Lead Video (Hero Position)**
Place immediately after the guide title and metadata, before the "Tools Required" section.

```html
<div class="video-hero">
  <h2>Video Guide</h2>
  <div class="video-container">
    <iframe 
      width="100%" 
      height="480" 
      src="https://www.youtube-nocookie.com/embed/VIDEO_ID" 
      title="GY6 Carburetor Adjustment - Full Guide"
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  </div>
  <p class="video-source">
    <strong>Video:</strong> "GY6 Carburetor Tuning Complete Guide" by TechMechanic 
    <a href="https://youtube.com/watch?v=VIDEO_ID" target="_blank">↗ Watch on YouTube</a>
  </p>
</div>
```

**B. Step-by-Step Videos (Inline)**
For complex steps, embed videos next to or within the step description.

```html
<h3>Step 3 — Fine-Tune the Air/Fuel Mixture</h3>
<p>With the engine at full operating temperature...</p>

<div class="video-inline">
  <iframe 
    width="100%" 
    height="360" 
    src="https://www.youtube-nocookie.com/embed/STEP3_VIDEO_ID" 
    title="Step 3: Mixture Tuning"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
  <p class="video-caption">Detailed mixture screw adjustment technique (3:15–6:40)</p>
</div>

<ol>
  <li>With the engine at full operating temperature and idle set...</li>
  <!-- ... rest of step ... -->
</ol>
```

**C. Related Videos Section (Bottom)**
After the main content, add a "Related Videos" section linking to supplementary content.

```html
<h2>Related Videos & Resources</h2>
<div class="related-videos">
  <div class="video-card">
    <img src="thumbnail.jpg" alt="Video thumbnail">
    <h4>Carburettor Cleaning Guide</h4>
    <p>How to deep-clean a GY6 carburettor</p>
    <a href="https://youtube.com/watch?v=..." target="_blank">Watch →</a>
  </div>
  <!-- ... more cards ... -->
</div>
```

### Video CSS Styling

```css
.video-hero {
  margin: 2rem 0;
  padding: 1.5rem;
  background: #1a1a1a;
  border-radius: 12px;
  border-left: 4px solid #f5a623;
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  margin: 1rem 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-inline {
  margin: 1.5rem 0;
  padding: 1rem;
  background: #151515;
  border-radius: 8px;
}

.video-source {
  color: #a0a0a0;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

.video-caption {
  color: #a0a0a0;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.related-videos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.video-card {
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #2a2a2a;
  transition: all 0.3s ease;
}

.video-card:hover {
  border-color: #f5a623;
  transform: translateY(-4px);
}

.video-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.video-card h4 {
  color: #f5a623;
  padding: 0.8rem 1rem 0.3rem;
  margin: 0;
}

.video-card p {
  color: #a0a0a0;
  padding: 0 1rem 0.5rem;
  margin: 0;
  font-size: 0.9rem;
}

.video-card a {
  display: inline-block;
  padding: 0.5rem 1rem 1rem;
  color: #7ec8e3;
  text-decoration: none;
  font-size: 0.9rem;
}
```

---

## 2. Complete Guide Structure (HTML Template)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Scooter Model] [Repair Type] Guide — ISRM</title>
  <style>
    /* Use the same CSS as existing guides + video CSS above */
  </style>
</head>
<body>
  <!-- Navigation -->
  <nav>
    <a href="../../index.html">ISRM Home</a> › 
    <a href="../index.html">Repair Guides</a> › 
    <a href="#">[Specific Guide]</a>
  </nav>

  <!-- Title & Metadata -->
  <h1>[Scooter Model] [Repair Type] Guide</h1>
  <div class="meta">
    Added: [DATE] | Updated: [DATE]
    &nbsp;|&nbsp; 
    Sources: 
    <a href="[SOURCE_URL]" target="_blank">[Source Name]</a>,
    <a href="[SOURCE_URL]" target="_blank">[Source Name]</a>
    &nbsp;|&nbsp; 
    <span class="tag">repair</span>
    <span class="tag">[Component]</span>
    <span class="tag">[Scooter Type]</span>
  </div>

  <!-- Applicability Box -->
  <div class="source-box">
    📌 <strong>Applies to:</strong> 
    [Scooter models], engine codes [codes], years [years]
  </div>

  <!-- Lead Paragraph -->
  <p>[Introduction paragraph explaining what the repair is, why it matters, and what users will learn]</p>

  <!-- LEAD VIDEO (REQUIRED) -->
  <div class="video-hero">
    <h2>Video Guide</h2>
    <div class="video-container">
      <iframe 
        width="100%" 
        height="480" 
        src="https://www.youtube-nocookie.com/embed/[VIDEO_ID]" 
        title="[Video Title]"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
    <p class="video-source">
      <strong>Video:</strong> "[Video Title]" by [Creator]
      <a href="https://youtube.com/watch?v=[VIDEO_ID]" target="_blank">↗ Watch on YouTube</a>
    </p>
  </div>

  <!-- Safety Warnings -->
  <div class="warn">
    ⚠️ <strong>[Warning Title]:</strong> [Detailed warning about safety concerns]
  </div>

  <!-- Difficulty & Time -->
  <div class="meta-info">
    <strong>Difficulty:</strong> [Beginner/Intermediate/Advanced]
    &nbsp;|&nbsp;
    <strong>Time Required:</strong> [30 min / 1 hour / 2+ hours]
    &nbsp;|&nbsp;
    <strong>Cost:</strong> $[Amount]
  </div>

  <!-- Tools Required -->
  <h2>Tools Required</h2>
  <ul>
    <li>[Tool 1]</li>
    <li>[Tool 2]</li>
    <!-- ... etc ... -->
  </ul>

  <!-- Parts/Materials Required (if applicable) -->
  <h2>Parts & Materials</h2>
  <table>
    <tr>
      <th>Part Name</th>
      <th>OEM Part #</th>
      <th>Approximate Cost</th>
    </tr>
    <tr>
      <td>[Part]</td>
      <td>[Part Number]</td>
      <td>$[Cost]</td>
    </tr>
  </table>

  <!-- Background Info (Optional) -->
  <h2>Background: How [Component] Works</h2>
  <p>[Explanation of the system, why it needs adjustment/repair, common failure modes]</p>

  <!-- Step-by-Step Instructions -->
  <h2>Step-by-Step Instructions</h2>

  <h3>Step 1 — [Title]</h3>
  <ol>
    <li>[First action]</li>
    <li>[Second action]</li>
  </ol>
  <div class="tip">
    💡 <strong>[Tip Title]:</strong> [Helpful advice for this step]
  </div>

  <!-- Optional: Inline video for this step -->
  <div class="video-inline">
    <iframe 
      width="100%" 
      height="360" 
      src="https://www.youtube-nocookie.com/embed/[STEP_VIDEO_ID]" 
      title="Step 1: [Title]"
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
    <p class="video-caption">[Brief description and timestamp]</p>
  </div>

  <h3>Step 2 — [Title]</h3>
  <ol>
    <li>[Action]</li>
  </ol>

  <!-- ... Continue for all steps ... -->

  <!-- Troubleshooting Section -->
  <h2>Troubleshooting</h2>
  <table>
    <tr>
      <th>Problem</th>
      <th>Likely Cause</th>
      <th>Solution</th>
    </tr>
    <tr>
      <td>[Problem]</td>
      <td>[Cause]</td>
      <td>[Solution]</td>
    </tr>
  </table>

  <!-- Related Videos (RECOMMENDED) -->
  <h2>Related Videos & Resources</h2>
  <div class="related-videos">
    <div class="video-card">
      <img src="thumbnail.jpg" alt="[Video Title]">
      <h4>[Video Title]</h4>
      <p>[Brief description]</p>
      <a href="[YouTube URL]" target="_blank">Watch →</a>
    </div>
    <!-- ... more cards ... -->
  </div>

  <!-- FAQ (Optional) -->
  <h2>Frequently Asked Questions</h2>
  <details>
    <summary>Q: [Question]?</summary>
    <p>A: [Answer]</p>
  </details>

  <!-- Footer & Sources -->
  <footer>
    <p>
      <strong>Sources:</strong>
      <a href="[SOURCE]" target="_blank">[Source Name]</a>,
      <a href="[SOURCE]" target="_blank">[Source Name]</a>
    </p>
    <p>
      <strong>Last Updated:</strong> [DATE] | 
      <strong>Contributed by:</strong> [Name/Community] |
      <strong>License:</strong> CC BY-SA 4.0
    </p>
    <p>
      <em>Have improvements? <a href="https://github.com/[REPO]/issues">Submit feedback on GitHub</a></em>
    </p>
  </footer>

</body>
</html>
```

---

## 3. Video Sources & Guidelines

### Preferred Video Platforms
1. **YouTube** (most accessible, embeddable)
2. **Vimeo** (good quality, professional content)
3. **Self-hosted MP4** (full control, best for long-term availability)

### Finding Videos for Guides

**Priority order:**
1. **Official manufacturer** (Piaggio, Yamaha, etc.)
2. **Professional mechanics** (certified repair shops)
3. **Reputable YouTube creators** (verified, high views, recent)
4. **Community uploads** (forums, experienced users)

### Video Attribution Template

```html
<p class="video-source">
  <strong>Video:</strong> "[Exact Video Title]" by [Creator Name] 
  [Date]
  <a href="[URL]" target="_blank">↗ Watch on [Platform]</a>
</p>
```

### Fair Use & Licensing

- Always link to the original video, never re-upload
- Include creator attribution in the metadata
- Use the embed iframe (not direct download) for YouTube
- Check video licensing (Creative Commons preferred)
- Add copyright notice in footer if necessary

---

## 4. Metadata Requirements

Every guide must include:

| Element | Format | Example |
|---------|--------|---------|
| **Title** | [Model] [Component] Guide | GY6 Carburetor Adjustment Guide |
| **Added Date** | YYYY-MM-DD | 2026-05-07 |
| **Last Updated Date** | YYYY-MM-DD | **2026-05-08** ⚠️ *MUST update every edit* |
| **Applies To** | Model/Engine Code | GY6 50cc (139QMB), BTC Riva, La Souris |
| **Difficulty** | Beginner/Intermediate/Advanced | Intermediate |
| **Time** | Duration estimate | 1–1.5 hours |
| **Tags** | Comma-separated categories | repair, GY6, carburetor |
| **Sources** | Links to references | [URL], [URL] |
| **Video** | YouTube embed (minimum 1) | iframe embed |

### ⚠️ CRITICAL: Last Updated Date

**Every time you edit a guide, update the "Last Updated" date to today.** This includes:
- Fixing typos or grammar
- Revising instructions
- Updating links or videos
- Verifying accuracy

**See:** `PAGE-UPDATE-TRACKING.md` for complete update tracking requirements and procedures.

---

## 5. Content Quality Standards

### Text Content
- ✓ Clear, concise step-by-step format
- ✓ Numbered lists (not bullets) for sequential steps
- ✓ Safety warnings in highlighted boxes
- ✓ Inline tips for common mistakes
- ✓ Proper spelling & grammar
- ✓ Links to related guides

### Video Content
- ✓ Minimum 1 video per guide
- ✓ Clear audio and video quality (720p+)
- ✓ Relevant to the guide topic
- ✓ Created/uploaded within last 3 years (unless it's evergreen content)
- ✓ Proper attribution & licensing

### Images (if used)
- ✓ High contrast for dark theme
- ✓ Labeled diagrams with callouts
- ✓ Alt text for accessibility

---

## 6. File Organization

```
repair-guides/
├── index.html (guides list/directory)
├── gy6-carburetor-adjustment-guide.html
├── gy6-oil-change-guide.html
├── gy6-valve-adjustment-guide.html
├── gy6-cvt-variator-belt-replacement.html
├── vespa-spark-plug-replacement.html
├── _removed/
│   └── [archived guides]
```

**Naming Convention:**
- Lowercase, kebab-case
- Format: `[scooter-model]-[component]-[action].html`
- Examples: `gy6-carburetor-adjustment`, `vespa-spark-plug-replacement`

---

## 7. Video Integration Checklist

Before publishing a guide, verify:

- [ ] Lead video embedded and working
- [ ] Video title and creator attributed
- [ ] Video link to original source included
- [ ] Video platform (YouTube/Vimeo) confirmed
- [ ] Responsive iframe (width: 100%, aspect ratio maintained)
- [ ] Related videos section populated (2–3 minimum)
- [ ] All embedded videos have titles & allowFullscreen
- [ ] Videos are relevant and recent (within 3 years)
- [ ] Fair use attribution in place
- [ ] Mobile responsiveness tested

---

## 8. Creating a New Guide

### Process
1. **Research** — Gather videos, forum posts, manual excerpts
2. **Outline** — Define steps and where videos fit
3. **Write** — Create text-based instructions (3–5 paragraphs per step)
4. **Embed Videos** — Add lead video + inline videos for complex steps
5. **Test** — Verify links, video embeds, mobile layout
6. **Publish** — Add to index, update sync manifest
7. **Promote** — Link from related guides, model pages

### Video Strategy per Guide Type

**Simple Repairs** (oil change, filter swap)
- 1 lead video (full walkthrough)
- Optional: inline video for tricky step

**Complex Repairs** (carburetor tuning, engine rebuild)
- 1 lead video (overview & full walkthrough)
- 2–3 inline videos (detailed steps)
- 1–2 related videos (background info)

**Maintenance** (valve checks, bolt torque specs)
- 1 overview video
- 1–2 related videos (model-specific variants)
- Emphasis on tables & reference data

---

## 9. Example: Inline Video with Text

```html
<h3>Step 5 — Reassemble the Float Bowl</h3>
<p>
  Carefully align the float bowl gasket with the carburetor body. 
  The gasket must sit flat without any creases or gaps.
</p>

<div class="video-inline">
  <iframe 
    width="100%" 
    height="360" 
    src="https://www.youtube-nocookie.com/embed/abc123" 
    title="Float Bowl Reassembly Technique"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
  <p class="video-caption">
    This video shows the proper alignment (watch 2:30–3:45) and 
    common mistakes to avoid when seating the gasket.
  </p>
</div>

<ol>
  <li>Position the gasket with the smooth side facing the bowl.</li>
  <li>Align the single bolt hole on the bowl with the carburetor body.</li>
  <li>
    Tighten the single bolt gently—just finger-tight, then add 1/4 turn 
    with a wrench. Over-tightening cracks the bowl.
  </li>
  <li>
    Reinstall the fuel line, ensuring the clip is fully seated.
  </li>
</ol>

<div class="tip">
  💡 <strong>Gasket Tip:</strong> If the old gasket is damaged or cracked, 
  order a new one (GY6 carb gasket set ~$5 on eBay). Reusing a bad gasket 
  causes fuel leaks.
</div>
```

---

## 10. Rollout Timeline

| Phase | Action | Date |
|-------|--------|------|
| Phase 0 (Now) | Approve structure & video requirements | 2026-05-07 |
| Phase 1 | Convert existing guides to include lead videos | 2026-05-21 |
| Phase 2 | Add inline videos to 3–5 key guides | 2026-06-04 |
| Phase 3 | Complete related videos section for all guides | 2026-06-18 |
| Phase 4 | Create video sourcing workflow (automation) | 2026-07-02 |

---

## Notes

- Videos are **mandatory** for new guides (minimum 1)
- Existing guides should be updated with videos in phases
- Use YouTube's `nocookie` domain (`youtube-nocookie.com`) for privacy
- Test all embedded videos on mobile and desktop
- Keep a spreadsheet of video URLs for easy reference
- Document video sources in the guide footer

---

**Questions?** See the example guides in `/repair-guides/` for implementation reference.
