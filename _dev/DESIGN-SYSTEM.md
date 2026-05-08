# ISRM Design System & Implementation Guide

## Overview

The new ISRM website is built on a **modern, lightweight, and interactive** design system. It uses **vanilla HTML/CSS/JavaScript** (no heavy frameworks) for maximum performance and compatibility.

**Key Features:**
- ✨ Modern, professional aesthetics
- ⚡ Lightweight and fast (no dependencies)
- 🎨 Smooth animations and transitions
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ Accessible navigation and components
- 🎯 Built for easy content integration

---

## Design Philosophy

### 1. **Color Palette**

| Role | Color | Usage |
|------|-------|-------|
| **Primary** | `#f5a623` (Orange) | Headings, buttons, highlights, icons |
| **Secondary** | `#7ec8e3` (Light Blue) | Links, hover states, accents |
| **Dark Background** | `#0f0f0f` | Main page background |
| **Card Background** | `#1a1a1a` | Content cards, modals |
| **Border** | `#2a2a2a` | Dividers, card borders |
| **Text Light** | `#e8e8e8` | Primary text |
| **Text Muted** | `#a0a0a0` | Secondary text, descriptions |

**Why this palette?**
- High contrast for readability
- Professional yet approachable
- Maintains your brand identity from the original design
- Works well on all screen sizes

### 2. **Typography**

```css
Font Family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
```

This uses system fonts for:
- ✓ Instant loading (no font files to download)
- ✓ Native look on every platform
- ✓ Improved accessibility
- ✓ Better performance

**Font Sizes:**
- H1: `clamp(2rem, 5vw, 3.5rem)` — Responsive, scales with viewport
- H2: `2rem`
- H3: `1.3rem`
- Body: `16px` (1rem)
- Small: `0.85rem` for metadata

### 3. **Spacing System**

Uses consistent spacing based on `1rem = 16px`:
- **Cards/Sections**: `2rem` padding
- **Items within cards**: `1rem - 1.5rem`
- **Grid gaps**: `1.5rem`
- **Section margins**: `3rem - 5rem`

Benefits:
- Visual consistency
- Predictable layout
- Easy to adjust globally via CSS variables

### 4. **Border Radius**

- **Primary**: `var(--radius) = 12px` for cards and major elements
- **Buttons**: `8px` for a slightly sharper look
- **Inputs**: `25px` (pills) for search bar
- **Tags**: `6px` for smaller elements

---

## Component Library

### Cards

**Category Card** (Main navigation)
```html
<div class="category-card">
  <div class="category-icon">🔨</div>
  <h3>Repair Guides</h3>
  <p>Detailed step-by-step instructions...</p>
  <div class="card-meta">
    <span>📚 248 guides</span>
  </div>
  <a href="repair-guides/index.html">Browse Guides →</a>
</div>
```

**Content Card** (Featured content)
```html
<div class="content-card">
  <div class="content-card-image">🔌</div>
  <div class="content-card-body">
    <h3>Battery Replacement Guide</h3>
    <p class="card-description">Complete guide...</p>
    <div class="card-footer">
      <span class="card-tag">repair</span>
      <span>5 min read</span>
    </div>
  </div>
</div>
```

### Buttons

**Primary Button** (Main CTA)
```html
<button class="btn btn-primary">Search Guides</button>
```

**Secondary Button** (Alternative action)
```html
<a href="#" class="btn btn-secondary">Learn More</a>
```

### Navigation

**Sticky Header with Search**
- Logo with icon
- Navigation links with underline hover effect
- Search bar with icon
- Fully responsive on mobile

### Tabs

**Tab Component**
```html
<div class="tabs">
  <button class="tab active" data-tab="guides">Latest Guides</button>
  <button class="tab" data-tab="trending">Trending</button>
</div>

<div id="guides" class="tab-content active"><!-- content --></div>
<div id="trending" class="tab-content"><!-- content --></div>
```

### Tags & Badges

```html
<span class="card-tag">repair</span>
<span class="card-tag">maintenance</span>
```

---

## Patterns

### Full-Card Clickable

Every `.guide-card` must be fully clickable, not just the "Read Guide" link.
Use the **pseudo-element stretch** technique — no extra markup, valid HTML:

```html
<article class="guide-card">
  <!-- card content -->
  <a href="path/to/guide.html" class="read-more">Read Guide</a>
</article>
```

The `.read-more::after` pseudo-element expands to cover the entire card via `margin: -2rem` (matching the card's padding). The `.guide-card` gets `cursor: pointer`. Never wrap the whole `<article>` in an `<a>` — that produces invalid HTML when the card contains other links.

### Navigation Logo

Always use `<a class="nav-brand">`, never `<div class="nav-brand">`:

```html
<!-- Root level pages -->
<a href="index.html" class="nav-brand">
  <span class="brand-icon">⚙️</span>
  <span class="brand-text">ISRM</span>
</a>

<!-- Pages in subdirectories (repair-guides/, parts/, etc.) -->
<a href="../index.html" class="nav-brand">
  <span class="brand-icon">⚙️</span>
  <span class="brand-text">ISRM</span>
</a>
```

---

## Animations & Interactions

### 1. **Hover Effects on Cards**

- Smooth color transition on borders
- Subtle lift effect (`translateY(-8px)`)
- Smooth shadow expansion
- Top border gradient appears with animation

### 2. **Smooth Transitions**

All interactive elements use:
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

This creates a natural, non-jarring feel.

### 3. **Fade-in Animation**

Cards fade in with staggered delays on page load:
```css
animation: fadeIn 0.5s ease-out forwards;
```

Delays increase for each card for a cascading effect.

### 4. **Modal Animation**

Search results modal slides in smoothly:
```css
animation: slideIn 0.3s ease-out;
```

---

## Responsive Design

The site uses **mobile-first CSS** with breakpoints:

### Mobile (< 768px)
- Single-column layouts
- Optimized navigation (stacked)
- Full-width search bar
- Touch-friendly button sizes

### Tablet (768px - 1200px)
- 2-column grids for cards
- Horizontal navigation
- Balanced spacing

### Desktop (1200px+)
- Multi-column grids
- Full navigation bar
- Maximum content width: 1400px

---

## Integration Guide

### Step 1: Replace Content Sections

The prototype uses placeholder content. Here's how to integrate your actual content:

#### **Main Categories**
Current: 8 category cards
Replace the HTML in the "Get Started" section with your categories:

```html
<div class="category-card">
  <div class="category-icon">YOUR_EMOJI</div>
  <h3>Your Category Title</h3>
  <p>Your description...</p>
  <div class="card-meta">
    <span>📊 Your stat</span>
  </div>
  <a href="your-path/index.html">Browse →</a>
</div>
```

#### **Featured Content**
Replace the tab content with your actual guides, videos, and posts:

```html
<div id="guides-featured" class="tab-content active">
  <div class="featured-grid">
    <!-- Your content cards here -->
  </div>
</div>
```

### Step 2: Customize Colors

All colors use CSS variables. To rebrand, update:

```css
:root {
  --primary: #f5a623;        /* Main orange */
  --secondary: #7ec8e3;      /* Light blue */
  --dark: #0f0f0f;           /* Very dark background */
  --dark-card: #1a1a1a;      /* Card background */
  /* ... etc ... */
}
```

### Step 3: Add Search Functionality

The search bar currently shows a demo modal. To connect it to your database:

1. Create a search API endpoint
2. Modify the `performSearch()` function:

```javascript
async function performSearch(query) {
  const response = await fetch(`/api/search?q=${query}`);
  const results = await response.json();
  
  // Format results and display in modal
  displaySearchResults(results);
}
```

### Step 4: Connect Navigation Links

Update all href attributes to point to your actual content paths:

```html
<a href="repair-guides/index.html">Browse Guides →</a>
<a href="parts/index.html">View Parts →</a>
<a href="models/index.html">Browse Models →</a>
<!-- etc -->
```

---

## Page Structure

### Key Sections

1. **Header** - Sticky navigation with logo, nav links, search
2. **Hero** - Large headline with CTAs
3. **Stats** - Quick stats grid
4. **Main Categories** - 8 category cards (Get Started)
5. **Featured Content** - Tabbed section (Guides, Trending, Videos, Community)
6. **Quick Parts Finder** - Model selector
7. **About Section** - ISRM mission and vision
8. **Footer** - Links and metadata

---

## CSS Variables for Easy Customization

All colors, spacing, and transitions use CSS variables defined in `:root`:

```css
:root {
  --primary: #f5a623;
  --secondary: #7ec8e3;
  --dark: #0f0f0f;
  --dark-card: #1a1a1a;
  --text-light: #e8e8e8;
  --text-muted: #a0a0a0;
  --border: #2a2a2a;
  --radius: 12px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

Change any variable to instantly update your entire site's theme.

---

## JavaScript Features

### Currently Implemented

1. **Tab Switching** - Click tabs to show different content
2. **Search** - Type in search bar, hit Enter for demo modal
3. **Modal** - Search results display in a modal, click X or outside to close
4. **Smooth Scroll** - Anchor links scroll smoothly

### Ready to Extend

All JavaScript is vanilla and modular. Easy to add:
- Backend API calls
- Dynamic content loading
- Form validation
- Advanced filtering
- User authentication

---

## Performance Tips

### Why This Design is Lightweight

1. **No Dependencies** - Just HTML, CSS, JavaScript
2. **System Fonts** - No custom font files to download
3. **CSS Variables** - Minimal CSS code duplication
4. **Vanilla JS** - No jQuery, React, or Vue overhead
5. **Optimized Images** - Using emojis instead of image files for icons
6. **Minimal DOM** - Clean, semantic HTML

### File Size Comparison

- Current design: ~8KB (minified)
- vs. Framework-based design: 200KB+

---

## Accessibility

The design follows WCAG 2.1 guidelines:

- ✓ Semantic HTML (header, nav, main, footer, section)
- ✓ High contrast colors (meet WCAG AA standards)
- ✓ Proper heading hierarchy (H1, H2, H3)
- ✓ Keyboard navigation (Tab through links)
- ✓ Focus indicators (visible on all interactive elements)
- ✓ Alt text for emoji icons (via title attributes)

---

## Browser Support

- ✓ Chrome 88+
- ✓ Firefox 85+
- ✓ Safari 14+
- ✓ Edge 88+
- ✓ Mobile browsers (iOS Safari, Chrome Mobile)

The design uses modern CSS features (Grid, Flexbox, CSS Variables) that are widely supported.

---

## Next Steps

1. **Test the prototype** - Open `index-new.html` in your browser
2. **Replace placeholder content** - Add your actual guides, parts, models
3. **Customize colors** - If you want different branding
4. **Add backend integration** - Connect search, filtering, community features
5. **Deploy** - Host on your server or static hosting (GitHub Pages, Netlify, etc.)

---

## Questions?

The design system is fully documented and ready for:
- Adding new content
- Extending with backend APIs
- Mobile app development
- 3D model integration
- Community features

All CSS is organized and commented for easy modification.
