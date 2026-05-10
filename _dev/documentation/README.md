# ISMR Documentation

Central documentation hub for the Interactive Scooter Manuals for Repair project.

## 📂 Folder Structure

```
documentation/
├── design-system/          # Design tokens, style guide, CSS reference
│   ├── README.md          # Design system overview & guidelines
│   ├── ISMR_StyleGuide.docx     # Comprehensive style guide
│   └── styles-reference.css      # CSS variable reference
└── README.md              # This file
```

## 🎨 Design System (`/design-system`)

**Purpose:** Single source of truth for visual consistency across ISMR

**Contains:**
- Complete style guide with all design tokens
- Color palette (primary, secondary, accent, semantic, neutral)
- Typography system specifications
- Spacing and layout guidelines
- Component patterns and usage
- Interactive state definitions
- Responsive design breakpoints
- Animation specifications
- Implementation best practices

**Use when:**
- Building new pages or sections
- Creating new components
- Making design decisions
- Ensuring consistency across the site
- Training new team members

**Key files:**
- `ISMR_StyleGuide.docx` - Detailed guide with color swatches and specifications
- `styles-reference.css` - All CSS variables and base styles
- `README.md` - Quick reference and best practices

---

## 🚀 Getting Started with the Design System

### 1. First Time Setup
1. Read `design-system/README.md` for an overview
2. Open `ISMR_StyleGuide.docx` to understand the design philosophy
3. Explore `styles-reference.css` to see how tokens are implemented

### 2. Building New Pages
1. Reference the style guide for design decisions
2. Copy CSS variables from `styles-reference.css`
3. Follow component patterns documented in the guide
4. Test responsive behavior at all breakpoints (768px, 480px)

### 3. Creating Custom Components
1. Always use CSS variables (not hardcoded colors)
2. Follow naming conventions from the guide
3. Include hover, active, and focus states
4. Test accessibility (color contrast, keyboard navigation)
5. Document the component pattern

---

## 🎯 Design System Highlights

### Color System
- **8 primary colors** with semantic naming
- **3 text colors** for hierarchy
- **2 surface colors** for elevation
- All accessible on dark theme

### Typography
- **System font stack** for optimal performance
- **6 heading levels** with defined sizes
- **3 font weights** for hierarchy
- Responsive scaling at tablet (768px) and mobile (480px)

### Spacing Scale
- **8px base unit** for all spacing
- **5 scales** (xs, sm, md, lg, xl)
- Consistent padding, margins, and gaps

### Component Patterns
- **Buttons** (primary, secondary with states)
- **Cards** (quick access, guides, features)
- **Badges & Tags** (categorical, feature badges)
- **Inputs** (search with focus states)

### Animations
- **Smooth transitions** (0.3s default)
- **Float animation** for depth
- **Slide-in animation** for entries
- Material Design easing curve

### Responsive Design
- **3 breakpoints:** Desktop, Tablet (768px), Mobile (480px)
- **Typography scaling** for readability
- **Grid adjustments** for layout reflow
- **Mobile-first considerations** for performance

---

## 📋 Checklist for Using the Design System

When building new features, ensure you:

- [ ] Use CSS variables for all colors, spacing, shadows
- [ ] Follow defined typography sizes and weights
- [ ] Apply consistent spacing using the 8px scale
- [ ] Use border radius from the defined scale
- [ ] Include interactive states (hover, active, focus)
- [ ] Test at tablet (768px) and mobile (480px) breakpoints
- [ ] Ensure color contrast meets WCAG AA standards
- [ ] Use semantic HTML for accessibility
- [ ] Document new patterns in the style guide

---

## 🔗 Related Project Files

- **`index.html`** - Main landing page (example of design system in use)
- **`styles.css`** - Full stylesheet (source of truth for styles)
- **`script.js`** - Behavioral scripts
- **`repair-guides/`** - Guide pages (should follow design system)
- **`diagnostics/`** - Diagnostic tool (should follow design system)
- **`models/`** - Model-specific pages (should follow design system)

---

## 🤝 Contributing to the Design System

### Adding New Colors
1. Update CSS variables in root
2. Document usage in style guide
3. Test contrast ratios
4. Apply consistently across site

### Adding New Components
1. Design using existing tokens
2. Create reusable CSS patterns
3. Document in style guide
4. Test all responsive breakpoints
5. Ensure accessibility

### Updating the Guide
1. Document the change
2. Update both the Word document and CSS reference
3. Communicate to team
4. Update all affected pages

---

## 📞 Quick Reference

**Need to find something?**
- Colors → `design-system/styles-reference.css` or style guide
- Spacing → Style guide section 3, or CSS variables
- Typography → Style guide section 2, or CSS
- Components → Style guide section 6, or HTML examples
- Responsive rules → Style guide section 8
- Best practices → `design-system/README.md`

---

**Last Updated:** May 2026  
**Version:** 1.0
