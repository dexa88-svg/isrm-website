# ISMR Repair Guide Structure & Format

**Version:** 2.0  
**Last Updated:** 2026-06-26  
**Purpose:** Define the standardized structure for all repair guides to ensure consistency, usability, and video integration

---

## Overview

Every repair guide in ISMR follows a **standardized HTML structure** that includes:
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

> **Design system rule:** Use CSS variables only — no hardcoded hex colors. All variables are defined in `public/styles.css`.

```css
.video-hero {
  margin: 2rem 0;
  padding: 1.5rem;
  background: var(--surface);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--warning);
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
  background: var(--surface-2);
  border-radius: var(--radius-md);
}

.video-source {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

.video-caption {
  color: var(--text-secondary);
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
  background: var(--surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  transition: var(--transition);
}

.video-card:hover {
  border-color: var(--warning);
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}

.video-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.video-card h4 {
  color: var(--warning);
  padding: 0.8rem 1rem 0.3rem;
  margin: 0;
}

.video-card p {
  color: var(--text-secondary);
  padding: 0 1rem 0.5rem;
  margin: 0;
  font-size: 0.9rem;
}

.video-card a {
  display: inline-block;
  padding: 0.5rem 1rem 1rem;
  color: var(--accent);
  text-decoration: none;
  font-size: 0.9rem;
  transition: var(--transition);
}
```

---

## 2. Complete Guide Structure (HTML Template)

> **Last template update:** 2026-06-26  
> **Gold-standard reference page:** `public/models/piaggio-zip-100-technical-overview.html`  
> **Full style block to copy verbatim:** `_dev/scheduled-tasks-updated/isrm-content-sync-SKILL.md`

### ⚠️ Critical rules — read before creating any page

1. **Never add `body { max-width }` or `body { margin }`** — this collapses the full-width navbar
2. **Never set `h1 { color }` or `h2 { color }` globally** — `.page-hero h1` gradient is handled by `styles.css`
3. **Always put the breadcrumb inside `<div class="page-hero-inner">`** — it sits on the dark hero gradient
4. **Use `class="callout callout-warn"` / `callout-danger` / `callout-tip`** — not `.warn` / `.tip` / `.warning-box`
5. **Use `class="guide-tag"` (teal)** — not `class="tag"` (yellow, wrong colour)
6. **YouTube embeds** → always use `youtube-nocookie.com`, never `youtube.com`
7. **`<script src="../script.js"></script>`** at end of body handles the hamburger nav toggle — don't inline it
8. **Local preview** → always use `python3 -m http.server 8080 --directory public` then open `http://localhost:8080/...` — **never open `file://` URLs directly**, as fetch() calls fail silently and scroll animations behave differently

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="[150–160 character summary for search engines — REQUIRED for SEO]">
  <meta property="og:title" content="[Page Title] — ISMR">
  <meta property="og:description" content="[Same as meta description]">
  <meta property="og:url" content="https://ismr.online/[SECTION]/[SLUG].html">
  <meta property="og:type" content="article">
  <meta property="og:image" content="https://ismr.online/og-image.jpg">
  <meta property="og:site_name" content="ISMR — Interactive Scooter Manuals for Repair">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="[Page Title] — ISMR">
  <meta name="twitter:description" content="[Same as meta description]">
  <meta name="twitter:image" content="https://ismr.online/og-image.jpg">
  <link rel="canonical" href="https://ismr.online/[SECTION]/[SLUG].html">
  <link rel="icon" href="../favicon.ico">
  <title>[Scooter Model] [Repair Type] Guide — ISMR</title>
  <!-- TITLE: keep under 60 characters total including " — ISMR" -->

  <!-- Google Analytics 4 — copy exactly, do not modify -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-53LY3KPDYM"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-53LY3KPDYM');
  </script>

  <!--
    JSON-LD Structured Data — REQUIRED on every page.
    • repair-guides  → use @type "HowTo"
    • diagnostics    → use @type "Article"
    • models         → use @type "TechArticle"
    Replace ALL [PLACEHOLDER] values before publishing.
  -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "[Scooter Model] [Repair Type] Guide",
    "description": "[One-sentence description of what this guide teaches]",
    "image": "https://ismr.online/images/[SLUG]-thumb.jpg",
    "totalTime": "PT[N]H[M]M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": "[APPROXIMATE_COST]"
    },
    "tool": [
      { "@type": "HowToTool", "name": "[Tool 1]" },
      { "@type": "HowToTool", "name": "[Tool 2]" }
    ],
    "supply": [
      { "@type": "HowToSupply", "name": "[Part/Material 1]" }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "[Step 1 Title]",
        "text": "[Step 1 brief description]"
      },
      {
        "@type": "HowToStep",
        "name": "[Step 2 Title]",
        "text": "[Step 2 brief description]"
      }
    ],
    "author": { "@type": "Organization", "name": "ISMR", "url": "https://ismr.online" },
    "dateModified": "[YYYY-MM-DD]",
    "publisher": { "@type": "Organization", "name": "ISMR", "url": "https://ismr.online" }
  }
  </script>

  <!-- Global styles — always load styles.css FIRST -->
  <link rel="stylesheet" href="../styles.css">

  <!--
    Page-specific styles ONLY.
    ⚠️ DO NOT override body, h1, or h2 globally — it breaks the navbar.
    Copy the full <style> block from:
      _dev/scheduled-tasks-updated/isrm-content-sync-SKILL.md
  -->
  <style>
    .guide-content { max-width: 900px; margin: 0 auto; padding: 2.5rem 2rem 4rem; }
    .guide-content h2 {
      font-size: 1.55rem; color: var(--text-primary);
      margin-top: 2.5rem; margin-bottom: 0.9rem;
      padding-bottom: 0.5rem; border-bottom: 1px solid var(--border);
    }
    .guide-content h2:first-child { margin-top: 0; }
    .guide-content h3 { font-size: 1.1rem; color: var(--accent); margin-top: 1.5rem; margin-bottom: 0.6rem; }
    .guide-content p { color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.7; }
    .guide-content a { color: var(--accent); }
    .guide-content a:hover { color: var(--primary); }
    .guide-content ul, .guide-content ol { padding-left: 1.5rem; margin-bottom: 1rem; color: var(--text-secondary); }
    .guide-content li { margin-bottom: 0.5rem; }
    .guide-content li strong { color: var(--text-primary); }
    .guide-content code {
      background: var(--surface-2); border: 1px solid var(--border); color: var(--accent-light);
      padding: 0.15rem 0.45rem; border-radius: var(--radius-sm);
      font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace; font-size: 0.87em;
    }
    .guide-content table { width: 100%; border-collapse: collapse; margin: 1.25rem 0; font-size: 0.9rem; }
    .guide-content th {
      background: var(--surface-2); color: var(--primary); font-weight: 600; padding: 0.7rem 1rem;
      text-align: left; border: 1px solid var(--border); text-transform: uppercase; letter-spacing: 0.04em;
    }
    .guide-content td { padding: 0.65rem 1rem; border: 1px solid var(--border); color: var(--text-secondary); }
    .guide-content tr:nth-child(even) td { background: rgba(26,35,50,0.6); }
    .callout { padding: 1rem 1.25rem; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin: 1.5rem 0; font-size: 0.95rem; color: var(--text-secondary); }
    .callout strong { color: var(--text-primary); }
    .callout-warn { background: rgba(245,166,35,0.08); border: 1px solid rgba(245,166,35,0.25); border-left: 4px solid var(--warning); }
    .callout-danger { background: rgba(214,48,49,0.08); border: 1px solid rgba(214,48,49,0.25); border-left: 4px solid var(--danger); }
    .callout-tip { background: rgba(6,167,125,0.08); border: 1px solid rgba(6,167,125,0.25); border-left: 4px solid var(--success); }
    .source-box {
      background: rgba(255,107,53,0.07); border: 1px solid rgba(255,107,53,0.2);
      border-left: 4px solid var(--primary); border-radius: 0 var(--radius-md) var(--radius-md) 0;
      padding: 1rem 1.25rem; margin: 1.5rem 0; font-size: 0.95rem; color: var(--text-secondary);
    }
    .source-box strong { color: var(--text-primary); }
    .source-box a { color: var(--accent); }
    .guide-tags { display: flex; flex-wrap: wrap; gap: 0.45rem; margin-top: 0.6rem; }
    .guide-tag {
      background: rgba(0,168,204,0.1); color: var(--accent); border: 1px solid rgba(0,168,204,0.3);
      padding: 0.25rem 0.7rem; border-radius: var(--radius-pill); font-size: 0.78rem; font-weight: 500;
    }
    .applies-to {
      background: rgba(255,107,53,0.07); border: 1px solid rgba(255,107,53,0.2);
      border-left: 4px solid var(--primary); border-radius: 0 var(--radius-md) var(--radius-md) 0;
      padding: 1rem 1.25rem; margin-top: 1.5rem; font-size: 0.95rem; color: var(--text-secondary);
    }
    .applies-to strong { color: var(--text-primary); }
    .video-embed { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.5rem; margin: 1.5rem 0; }
    .video-embed-title { font-size: 1rem; font-weight: 600; color: var(--text-primary); margin-bottom: 1rem; }
    .video-container { position: relative; width: 100%; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: var(--radius-md); margin-bottom: 0.75rem; }
    .video-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; }
    .video-source { font-size: 0.85rem; color: var(--text-tertiary); }
    .video-source a { color: var(--accent); }
    .related-videos { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin-top: 1rem; }
    .video-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.25rem; transition: var(--transition); }
    .video-card:hover { border-color: var(--primary); transform: translateY(-4px); box-shadow: var(--shadow-sm); }
    .video-card h4 { color: var(--text-primary); margin-bottom: 0.5rem; font-size: 0.95rem; font-weight: 600; }
    .video-card p { font-size: 0.875rem; margin-bottom: 0.75rem; color: var(--text-secondary); }
    .video-card a { color: var(--primary); font-weight: 600; font-size: 0.9rem; }
    .guide-footer { background: var(--surface); border-top: 1px solid var(--border); padding: 2rem; text-align: center; font-size: 0.825rem; color: var(--text-tertiary); }
    @media (max-width: 768px) { .guide-content { padding: 1.5rem 1rem 3rem; } }
    @media (max-width: 480px) { .guide-content h2 { font-size: 1.2rem; } }
  </style>
</head>
<body>

  <!-- ═══ NAVBAR — copy exactly, update active link only ═══ -->
  <nav class="navbar">
    <div class="nav-container">
      <a href="../index.html" class="nav-brand">
        <span class="nav-logo">🔧</span>
        <span class="nav-title">ISMR</span>
        <span class="nav-subtitle">Interactive Scooter Manuals</span>
      </a>
      <button class="nav-toggle" aria-label="Toggle navigation">☰</button>
      <ul class="nav-menu">
        <li><a href="../index.html" class="nav-link">Home</a></li>
        <li><a href="../repair-guides/index.html" class="nav-link">Repair Guides</a></li>
        <li><a href="../diagnostics/index.html" class="nav-link">Diagnostics</a></li>
        <li><a href="../models/index.html" class="nav-link">Models</a></li>
        <!-- Add class="nav-link active" to the link matching the current section -->
      </ul>
    </div>
  </nav>

  <!-- ═══ PAGE HERO — breadcrumb + title + tags MUST all be inside page-hero-inner ═══ -->
  <section class="page-hero">
    <div class="page-hero-inner">
      <!-- Breadcrumb inside hero so it appears on the dark gradient background -->
      <div class="breadcrumb" style="padding: 0 0 1rem; margin: 0;">
        <a href="../index.html">ISMR Home</a>
        <span>›</span>
        <a href="index.html">[Category Name, e.g. Repair Guides]</a>
        <span>›</span>
        [Short Page Title]
      </div>
      <h1>[Full Page Title — e.g. GY6 Spark Plug Replacement Guide]</h1>
      <div class="guide-meta">
        <span>[Difficulty: Beginner / Intermediate / Advanced]</span>
        <span>·</span>
        <span>[Time estimate, e.g. ~30 min]</span>
        <span>·</span>
        <span>Updated: [YYYY-MM-DD]</span>
      </div>
      <div class="guide-tags">
        <span class="guide-tag">[category tag, e.g. repair]</span>
        <span class="guide-tag">[engine tag, e.g. GY6]</span>
        <span class="guide-tag">[component tag, e.g. ignition]</span>
        <!-- Use guide-tag (teal). Never use class="tag" (that's yellow, wrong colour). -->
      </div>
      <div class="applies-to">
        <strong>Applies to:</strong> [List scooter models, engine codes, years]
      </div>
    </div>
  </section>

  <!-- ═══ MAIN CONTENT ═══ -->
  <main class="guide-content">

    <!-- Source attribution box -->
    <div class="source-box">
      <strong>📚 Sources:</strong>
      <a href="[SOURCE_URL]" target="_blank" rel="noopener">[Source Name]</a>,
      <a href="[SOURCE_URL]" target="_blank" rel="noopener">[Source Name]</a>
    </div>

    <!-- Lead paragraph -->
    <p>[Introduction: what the repair is, why it matters, what users will learn]</p>

    <!-- Safety warning — always first callout -->
    <div class="callout callout-danger">
      ⚠️ <strong>[Safety Warning Title]:</strong> [Detailed safety warning]
    </div>

    <!-- LEAD VIDEO (required — minimum 1 per guide) -->
    <div class="video-embed">
      <div class="video-embed-title">🎬 Video Guide</div>
      <div class="video-container">
        <iframe
          src="https://www.youtube-nocookie.com/embed/[VIDEO_ID]"
          title="[Video Title]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <p class="video-source">
        <strong>Video:</strong> "[Video Title]" by [Creator Name]
        — <a href="https://www.youtube.com/watch?v=[VIDEO_ID]" target="_blank" rel="noopener">↗ Watch on YouTube</a>
      </p>
    </div>

    <!-- Tools Required -->
    <h2>Tools Required</h2>
    <ul>
      <li><strong>[Tool 1]</strong> — [why/spec]</li>
      <li><strong>[Tool 2]</strong> — [why/spec]</li>
    </ul>

    <!-- Parts & Materials -->
    <h2>Parts &amp; Materials</h2>
    <table>
      <thead>
        <tr>
          <th>Part</th>
          <th>OEM Part #</th>
          <th>Approx. Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>[Part Name]</td>
          <td><code>[Part Number]</code></td>
          <td>€[Cost]</td>
        </tr>
      </tbody>
    </table>

    <!-- Background / How It Works (optional but recommended) -->
    <h2>Background: How [Component] Works</h2>
    <p>[Explanation of the system, why it wears out, what goes wrong]</p>

    <!-- Step-by-Step Instructions -->
    <h2>Step-by-Step Instructions</h2>

    <h3>Step 1 — [Title]</h3>
    <p>[Context for this step]</p>
    <ol>
      <li>[First action]</li>
      <li>[Second action]</li>
    </ol>
    <div class="callout callout-tip">
      💡 <strong>[Tip Title]:</strong> [Helpful advice for this step]
    </div>

    <!-- Optional: inline video for a complex step -->
    <div class="video-embed">
      <div class="video-container">
        <iframe
          src="https://www.youtube-nocookie.com/embed/[STEP_VIDEO_ID]"
          title="Step 1: [Title]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <p class="video-source">[Brief description and timestamp, e.g. 3:15–6:40]</p>
    </div>

    <h3>Step 2 — [Title]</h3>
    <ol>
      <li>[Action]</li>
    </ol>
    <div class="callout callout-warn">
      ⚠️ <strong>[Warning Title]:</strong> [Step-specific caution]
    </div>

    <!-- ... Continue for all steps ... -->

    <!-- Troubleshooting -->
    <h2>Troubleshooting</h2>
    <table>
      <thead>
        <tr>
          <th>Problem</th>
          <th>Likely Cause</th>
          <th>Solution</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>[Problem]</td>
          <td>[Cause]</td>
          <td>[Solution]</td>
        </tr>
      </tbody>
    </table>

    <!-- Related Videos (recommended) -->
    <h2>Related Videos &amp; Resources</h2>
    <div class="related-videos">
      <div class="video-card">
        <h4>[Video Title]</h4>
        <p>[Brief description]</p>
        <a href="https://www.youtube.com/watch?v=[VIDEO_ID]" target="_blank" rel="noopener">Watch on YouTube →</a>
      </div>
      <!-- Add more video-card divs as needed -->
    </div>

    <!-- FAQ (optional) -->
    <h2>Frequently Asked Questions</h2>
    <details>
      <summary>Q: [Question]?</summary>
      <p>A: [Answer]</p>
    </details>

  </main>

  <!-- ═══ FOOTER — copy exactly ═══ -->
  <footer class="guide-footer">
    <p>
      <strong>Sources:</strong>
      <a href="[SOURCE]" target="_blank" rel="noopener">[Source Name]</a>,
      <a href="[SOURCE]" target="_blank" rel="noopener">[Source Name]</a>
    </p>
    <p>
      <strong>Last Updated:</strong> [YYYY-MM-DD]
      &nbsp;·&nbsp;
      <strong>License:</strong> CC BY-SA 4.0
      &nbsp;·&nbsp;
      <a href="../index.html">← Back to ISMR</a>
    </p>
    <p>
      <em>Something wrong? <a href="https://github.com/[REPO]/issues" target="_blank" rel="noopener">Submit feedback on GitHub</a></em>
    </p>
  </footer>

  <!-- Nav toggle script — handles ☰ hamburger menu -->
  <script src="../script.js"></script>

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
7. **Regenerate stats & sitemap** — Run `npm run generate-stats` after adding the page. This script now **also auto-regenerates `public/sitemap.xml`** — do not edit the sitemap manually.
8. **Promote** — Link from related guides, model pages

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
