# ISMR Content Integration Guide

## Quick Start

Your new website has a beautiful modern frame. Now let's fill it with your actual content.

---

## Example 1: Integrating Repair Guide Content

### Your Current Content
Your repair guides are well-structured HTML files in `/repair-guides/`. For example, `brake-adjustment-maintenance-guide.html` contains:
- Title, metadata, warnings
- Step-by-step instructions
- Images and code blocks
- Source attribution

### How to Display in New Design

**Location:** In the "Featured Content" tabs or "Get Started" section

**Option A: Show in Featured Grid**
```html
<!-- In the "Latest Guides" tab -->
<div class="featured-grid">
  <div class="content-card">
    <div class="content-card-image">🛑</div>
    <div class="content-card-body">
      <h3>Electric Scooter Brake Adjustment & Maintenance Guide</h3>
      <p class="card-description">Step-by-step instructions for adjusting and maintaining disc, drum, and electronic brakes safely.</p>
      <div class="card-footer">
        <span class="card-tag">maintenance</span>
        <span>12 min read</span>
      </div>
    </div>
  </div>
  <!-- More cards... -->
</div>
```

**Option B: Link from "Get Started" Section**
```html
<div class="category-card">
  <div class="category-icon">🔨</div>
  <h3>Repair Guides</h3>
  <p>Step-by-step tutorials for fixing common problems. Starting with Ninebot—expanding to all major brands.</p>
  <div class="card-meta">
    <span>📚 248 guides</span>
  </div>
  <a href="repair-guides/index.html">Browse Guides →</a>
</div>
```

### The Detail Page
Your existing repair guide pages can stay exactly as they are. The new homepage just links to them. No need to change their internal design.

---

## Example 2: Integrating Your News Content

### Your Current Structure
You have news articles like:
- `firmware-updates-and-release-notes-2026.html`
- `electric-scooter-firmware-updates-guide.html`

### Display in New Design

**In the "Trending" tab:**
```html
<div id="trending" class="tab-content">
  <div class="featured-grid">
    <div class="content-card">
      <div class="content-card-image">⚡</div>
      <div class="content-card-body">
        <h3>Firmware Updates & Release Notes (2026)</h3>
        <p class="card-description">Latest firmware releases for Ninebot, Xiaomi, and Apollo. Security patches and new features.</p>
        <div class="card-footer">
          <span class="card-tag">breaking</span>
          <span>2 days ago</span>
        </div>
      </div>
    </div>
    <!-- More news... -->
  </div>
</div>
```

---

## Example 3: Parts & Compatibility Database

### Your Current Structure
You have a `/parts/` section that lists compatible parts.

### Integrate into New Design

**Step 1: Update the "Quick Parts Finder" Section**
```html
<section class="section" id="parts">
  <div class="section-header">
    <h2>Quick Part Finder</h2>
    <a href="parts/index.html" class="view-all">View database <span>→</span></a>
  </div>

  <div style="background: var(--dark-card); border: 1px solid var(--border); border-radius: var(--radius); padding: 2rem; text-align: center;">
    <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Select your scooter model and we'll show you compatible parts and replacements.</p>

    <select id="modelSelect" style="padding: 0.8rem; border-radius: 6px; border: 1px solid var(--border); background: var(--dark); color: var(--text-light); font-size: 1rem; margin-bottom: 1rem; width: 100%; max-width: 400px;">
      <option value="">-- Select Your Scooter Model --</option>
      <option value="ninebot">Ninebot / Segway</option>
      <option value="xiaomi">Xiaomi</option>
      <option value="apollo">Apollo City / Explore</option>
      <option value="dualtron">Dualtron</option>
      <option value="kaabo">Kaabo / Minimotors</option>
      <option value="other">Other Brand</option>
    </select>

    <button class="btn btn-primary" onclick="findParts()">Find Compatible Parts</button>
  </div>
</section>

<script>
function findParts() {
  const model = document.getElementById('modelSelect').value;
  if (!model) {
    alert('Please select a scooter model');
    return;
  }
  // Redirect to your parts database filtered by model
  window.location.href = `parts/index.html?model=${model}`;
}
</script>
```

**Step 2: Your Parts Database**
Keep your detailed parts pages at `/parts/` — the homepage just provides quick access.

---

## Example 4: Video Tutorials

### Your Current Structure
You have `/videos/index.html` listing video content.

### Integrate into New Design

**In the "Top Videos" tab:**
```html
<div id="videos-featured" class="tab-content">
  <div class="featured-grid">
    <div class="content-card">
      <div class="content-card-image">▶️</div>
      <div class="content-card-body">
        <h3>Brake Pad Replacement (5 min)</h3>
        <p class="card-description">Quick visual guide from electric-scooter.guide covering all brake types safely and efficiently.</p>
        <div class="card-footer">
          <span class="card-tag">video</span>
          <span>3.5K views</span>
        </div>
      </div>
    </div>

    <div class="content-card">
      <div class="content-card-image">▶️</div>
      <div class="content-card-body">
        <h3>Throttle Sensor Recalibration</h3>
        <p class="card-description">Detailed video tutorial on fixing unresponsive throttles. Works on most controller types.</p>
        <div class="card-footer">
          <span class="card-tag">video</span>
          <span>2.1K views</span>
        </div>
      </div>
    </div>
    <!-- More videos... -->
  </div>
</div>
```

---

## Example 5: Model-Specific Guides

### Your Current Structure
You have `/models/index.html` with model-specific information.

### Integrate into New Design

**Quick Access Card:**
```html
<div class="category-card">
  <div class="category-icon">📱</div>
  <h3>Model Guides</h3>
  <p>Model-specific pages with specs, common issues, and dedicated repair procedures.</p>
  <div class="card-meta">
    <span>🏷️ 89 models</span>
  </div>
  <a href="models/index.html">Browse Models →</a>
</div>
```

**Or as a Featured Section:**
```html
<section class="section">
  <div class="section-header">
    <h2>Popular Models</h2>
    <a href="models/index.html" class="view-all">See all <span>→</span></a>
  </div>

  <div class="featured-grid">
    <div class="content-card">
      <div class="content-card-image">⚙️</div>
      <div class="content-card-body">
        <h3>Ninebot Max G30</h3>
        <p class="card-description">Detailed specs, common issues, battery troubleshooting, and community-tested repairs.</p>
        <div class="card-footer">
          <span class="card-tag">model</span>
          <span>47 guides</span>
        </div>
      </div>
    </div>

    <div class="content-card">
      <div class="content-card-image">⚙️</div>
      <div class="content-card-body">
        <h3>Xiaomi Pro 2</h3>
        <p class="card-description">Everything you need to know about the Xiaomi Pro 2. Specifications, mods, and repairs.</p>
        <div class="card-footer">
          <span class="card-tag">model</span>
          <span>32 guides</span>
        </div>
      </div>
    </div>
    <!-- More models... -->
  </div>
</section>
```

---

## Example 6: Diagnostics & Error Codes

### Your Current Structure
You have `/diagnostics/electric-scooter-error-codes-guide.html`

### Integrate into New Design

**As a Category Card:**
```html
<div class="category-card">
  <div class="category-icon">🔍</div>
  <h3>Diagnostics</h3>
  <p>Error code databases and troubleshooting trees. Identify what's wrong before you fix it.</p>
  <div class="card-meta">
    <span>⚠️ 324 codes</span>
  </div>
  <a href="diagnostics/index.html">View Diagnostics →</a>
</div>
```

---

## Example 7: Community Forum

### Your Current Structure
You plan to have `/community/index.html` for forum/discussion content.

### Integrate into New Design

**Community Section:**
```html
<div class="category-card">
  <div class="category-icon">💬</div>
  <h3>Community Resources</h3>
  <p>Links to active forums, Reddit communities, and crowdsourced repair tips.</p>
  <div class="card-meta">
    <span>👥 15K+ members</span>
  </div>
  <a href="community/index.html">Join Community →</a>
</div>
```

**Featured Community Picks (in Tabs):**
```html
<div id="community-featured" class="tab-content">
  <div class="featured-grid">
    <div class="content-card">
      <div class="content-card-image">👥</div>
      <div class="content-card-body">
        <h3>Best Places to Buy Spare Parts</h3>
        <p class="card-description">Community consensus on the most reliable retailers for genuine and aftermarket parts.</p>
        <div class="card-footer">
          <span class="card-tag">community</span>
          <span>42 comments</span>
        </div>
      </div>
    </div>
    <!-- More community posts... -->
  </div>
</div>
```

---

## Example 8: 3D Models (Future Feature)

### Your Current Structure
You have `/models/index.html` placeholder for 3D content.

### Integrate into New Design

**As a Featured Card:**
```html
<div class="category-card">
  <div class="category-icon">🎯</div>
  <h3>3D Models</h3>
  <p>Interactive 3D visualizations of scooter parts. Rotate, zoom, and explore every component.</p>
  <div class="card-meta">
    <span>🧩 Coming soon</span>
  </div>
  <a href="models/index.html">Preview →</a>
</div>
```

When you're ready to add actual 3D content:
1. Use Three.js or Babylon.js for 3D rendering
2. Create an interactive model viewer page
3. Link from this card
4. Embed in individual model pages

---

## Summary: File Organization

### Recommended Directory Structure

```
/
├── index-new.html          ← Your new homepage
├── DESIGN-SYSTEM.md        ← Design documentation
├── INTEGRATION-EXAMPLES.md ← This file
├── repair-guides/
│   ├── index.html
│   ├── brake-adjustment-maintenance-guide.html
│   ├── tire-replacement-repair-guide.html
│   └── ...
├── parts/
│   ├── index.html
│   └── [parts database]
├── models/
│   ├── index.html
│   ├── ninebot-max/
│   └── ...
├── videos/
│   ├── index.html
│   └── ...
├── news/
│   ├── index.html
│   ├── firmware-updates-2026.html
│   └── ...
├── diagnostics/
│   ├── index.html
│   └── ...
├── community/
│   ├── index.html
│   └── ...
└── styles.css              ← Optional: Shared stylesheet
```

---

## Quick Migration Checklist

- [ ] Rename `index-new.html` to `index.html` (backup old one first)
- [ ] Update all links in the new homepage to point to your content directories
- [ ] Test all navigation links work correctly
- [ ] Replace placeholder stats with your actual numbers
- [ ] Update featured content sections with your best/latest guides
- [ ] Customize colors if desired (see DESIGN-SYSTEM.md)
- [ ] Add your logo/branding to the header
- [ ] Test on mobile device
- [ ] Test search functionality and connect to your backend
- [ ] Deploy and test in production

---

## Tips for Success

1. **Keep Your Content**: Don't rewrite your guides. The new homepage just links to them.

2. **Gradual Migration**: You can keep your old index.html and use the new one for a beta test.

3. **Data Integration**: Connect your stats (guide count, parts database size, etc.) to display real numbers.

4. **Search Integration**: Hook up the search bar to your content database for powerful discovery.

5. **Mobile Testing**: Open index-new.html on your phone to see responsive design in action.

6. **Accessibility**: The design is WCAG 2.1 compliant — keep it that way when adding content.

---

## Next Steps

1. **Test** - Open index-new.html in your browser (no server needed!)
2. **Customize** - Update colors, content, and branding
3. **Integrate** - Connect to your content and backend APIs
4. **Deploy** - Go live with your beautiful new site

Enjoy your new ISMR website! 🚀
