# ISMR Design System & Guidelines

## Overview

The ISMR website has been redesigned with a modern, professional aesthetic that prioritizes usability, performance, and visual hierarchy. The design follows contemporary web trends while maintaining a lightweight footprint using vanilla HTML, CSS, and JavaScript.

---

## Design Philosophy

### Core Principles

1. **Modern & Professional**: Clean lines, sophisticated color usage, contemporary typography
2. **Lightweight**: No heavy frameworks; optimized for fast loading on any connection
3. **Accessible**: WCAG 2.1 AA compliance, keyboard navigation, semantic HTML
4. **Interactive**: Smooth animations, immediate feedback, engaging micro-interactions
5. **Responsive**: Perfect experience from mobile (320px) to desktop (1920px+)
6. **Dark Mode by Default**: Reduces eye strain, modern aesthetic, energy efficient

---

## Color Palette

### Primary Colors
- **Primary Orange**: `#ff6b35` - Call-to-action, highlights, interactive elements
- **Primary Dark**: `#e55a24` - Hover states, depth
- **Primary Light**: `#ff8c5a` - Subtle backgrounds, borders

### Secondary & Accent Colors
- **Secondary Blue**: `#004e89` - Data, secondary text, backgrounds
- **Accent Cyan**: `#00a8cc` - Feature highlights, accents
- **Accent Light**: `#00d4ff` - Hover states, focus indicators
- **Success Green**: `#06a77d` - Checkmarks, positive feedback
- **Warning Yellow**: `#f5a623` - Alerts, warnings
- **Danger Red**: `#d63031` - Errors, destructive actions

### Neutral Colors
- **Background Dark**: `#0f1419` - Main background
- **Surface**: `#1a2332` - Cards, containers
- **Surface 2**: `#242f3e` - Lighter surface containers
- **Text Primary**: `#f5f5f5` - Main text
- **Text Secondary**: `#a0a0a0` - Secondary text
- **Text Tertiary**: `#707070` - Disabled, metadata
- **Border**: `#2a3548` - Dividers, outlines

---

## Typography

### Font Family
- **System Font Stack**: Uses platform-native fonts for optimal performance
  ```
  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 
  Cantarell, sans-serif
  ```

### Font Sizes
- **H1**: 3.5rem (56px) - Page hero titles
- **H2**: 2.5rem (40px) - Section headers
- **H3**: 1.8rem (28px) - Subsection headers
- **H4**: 1.4rem (22px) - Card titles
- **Body**: 1rem (16px) - Default text
- **Small**: 0.85-0.95rem - Metadata, timestamps

### Font Weights
- **Regular**: 400 - Body text
- **Medium**: 500 - Emphasis, labels
- **Semibold**: 600 - Headings, calls-to-action
- **Bold**: 700 - Hero titles, strong emphasis

### Line Height
- **Headings**: 1.2 - Tighter spacing for impact
- **Body**: 1.6 - Optimal readability
- **Dense**: 1.4 - Slightly condensed text

---

## Spacing & Layout

### Spacing Scale
```
--radius-sm: 4px     (Subtle, minimal radius)
--radius-md: 8px     (Small components)
--radius-lg: 12px    (Cards, larger elements)
--radius-xl: 16px    (Hero, major sections)
```

### Grid & Container
- **Max Container Width**: 1200px (comfortable for content)
- **Padding**: 2rem desktop, 1rem mobile
- **Gap**: 1.5-2rem between major sections
- **Card Gap**: 1.5-2rem in grids

### Responsive Breakpoints
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px-1199px (adjusted grids)
- **Mobile**: 480px-767px (stacked layout)
- **Small Mobile**: <480px (optimized for small screens)

---

## Components

### Navigation Bar
- **Position**: Sticky top, stays visible during scroll
- **Background**: Semi-transparent with blur effect (backdrop-filter)
- **Brand**: Gradient text with icon
- **Links**: Animated underline on hover
- **Mobile**: Hamburger toggle (hidden on desktop)

### Hero Section
- **Height**: 600px minimum
- **Background**: Gradient + animated floating shape
- **Search**: Full-width input with button
- **Features**: Badges showcasing key metrics
- **CTA**: Clear, focused call-to-action

### Cards
- **Base**: Subtle border, dark background, rounded corners
- **Hover**: Transform up (8px), enhanced shadow, border color change
- **Variants**:
  - **Primary**: Orange accent
  - **Secondary**: Blue accent
  - **Accent**: Cyan accent
- **Border Effect**: Top border grows on hover

### Guide Cards
- **Layout**: Vertical stack with tag, title, description, metadata
- **Tag**: Positioned top-right, colored badge (model name)
- **Meta**: Category tags and reading time
- **CTA**: "Read Guide" link with hover animation

### Resource Links
- **Layout**: Icon, title, description stacked center
- **Hover**: Move up, highlight border
- **Icon**: Large (2.5rem) emoji or symbol
- **Responsive**: Grid adjusts from 4 columns → 2 → 1

### Buttons
- **Primary**: Orange background, white text
- **Secondary**: Transparent, white border
- **Hover**: Lift effect (-4px), enhanced shadow
- **Size**: 1rem padding, 2rem horizontal
- **State**: Disabled state with reduced opacity

### Tabs/Filters
- **Border Style**: 2px bottom border (color on active)
- **States**: Inactive (gray), hover (border highlight), active (colored)
- **Transition**: Smooth color change
- **Responsive**: Stack on mobile

---

## Animations & Transitions

### Global Transition
- **Duration**: 0.3s
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` - Material Design standard
- **Apply To**: Colors, transforms, borders, shadows

### Key Animations

#### Hover Effects
- **Cards**: `translateY(-8px)` + shadow enhancement
- **Links**: Color change + underline grow
- **Buttons**: `translateY(-4px)` + shadow

#### Scroll Animations
- **Sections**: Fade in + slide up (opacity + translateY)
- **Threshold**: 10% visible
- **Duration**: 0.6s ease-out

#### Interactive Feedback
- **Search Button**: Immediate color change + transform
- **Tab Selection**: Color transition + background change
- **Focus States**: Outline with primary color

#### Floating Animation
- **Hero Background Shape**: Continuous up/down motion (6s loop)

### Micro-interactions
- **Link Underline**: Grows from left on hover
- **Button Lift**: Moves up with shadow on interaction
- **Card Borders**: Dynamic color change on state change
- **Input Focus**: Shadow expansion, border color

---

## Accessibility Features

### Semantic HTML
- Proper heading hierarchy (H1 → H2 → H3)
- Semantic tags: `<nav>`, `<section>`, `<article>`, `<footer>`
- Descriptive link text (no "click here")

### Color Contrast
- Text on background: WCAG AA minimum (4.5:1 for body, 3:1 for large)
- Focus indicators: 2px outline with primary color
- Redundant indicators: Don't rely on color alone

### Keyboard Navigation
- Tab order follows visual flow
- Focus visible on all interactive elements
- Escape key closes mobile menu
- Enter key activates buttons

### Responsive Text
- Base 16px font size for zoom compatibility
- Proper zoom support (browser can scale to 200%)
- No small text (<12px) for important content

---

## Performance Optimizations

### CSS
- **Variables**: Centralized color/spacing system
- **Grid Layout**: Efficient for responsive design
- **No Preprocessing**: Pure CSS (faster load)
- **Minified**: Single stylesheet (~20KB)

### JavaScript
- **Vanilla JS**: No dependencies, ~8KB
- **Event Delegation**: Efficient event handling
- **Debouncing**: Scroll events optimized
- **Lazy Loading**: Images load on demand

### Loading
- **CSS-in-file**: No critical rendering path issues
- **Fonts**: System fonts (no downloads)
- **Icons**: Unicode/emoji (no image files)
- **Images**: Responsive, lazy-loaded

---

## Usage Guidelines

### How to Extend

#### Adding New Cards
```html
<div class="card card-primary">
  <div class="card-icon">🔨</div>
  <h3>Title</h3>
  <p>Description</p>
  <span class="card-arrow">→</span>
</div>
```

#### Adding New Section
```html
<section class="your-section">
  <div class="container">
    <h2 class="section-title">Section Title</h2>
    <!-- Your content -->
  </div>
</section>
```

#### Custom Colors
Use CSS variables instead of hardcoded colors:
```css
background: var(--primary);
color: var(--text-secondary);
border-color: var(--border);
```

### Mobile Considerations

1. **Test at 320px, 480px, 768px, 1024px**
2. **Touch targets**: Minimum 48px × 48px
3. **Font sizes**: No smaller than 16px without zoom
4. **Spacing**: Increase gaps on mobile for touch
5. **Images**: Use responsive srcset for different screens

### Dark Mode
The entire design is optimized for dark mode. If implementing light mode:
1. Create `:root[data-theme="light"]` selector
2. Invert the color values
3. Maintain contrast ratios
4. Test accessibility on both themes

---

## Future Enhancements

### Short Term
- [ ] Add breadcrumb navigation
- [ ] Implement search suggestions
- [ ] Add loading skeletons for content
- [ ] Create model comparison tool

### Medium Term
- [ ] 3D model viewer integration
- [ ] Interactive diagnostic tool
- [ ] Video player with chapters
- [ ] Community ratings/reviews

### Long Term
- [ ] Chat-based repair assistant
- [ ] AR parts visualization
- [ ] Mobile app (React Native)
- [ ] Offline support (PWA)

---

## Version History

- **v2.0** (2026-05-07): Complete redesign with modern aesthetic, interactive elements, responsive improvements
- **v1.0** (2026-05-07): Initial ISMR website

---

## Support & Questions

For design-related questions or to propose changes, please refer to the main project documentation or community forums.

**Last Updated**: 2026-05-07
