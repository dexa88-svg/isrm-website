# ISRM Design System

This folder contains the complete design system and style guide for the Interactive Scooter Repair Manuals (ISRM) website.

## 📋 Files

### `ISRM_StyleGuide.docx`
**Comprehensive style guide document** containing:
- Color palette with CSS variables
- Typography system (font families, sizes, weights)
- Spacing & layout guidelines
- Border radius scale
- Shadows & effects
- Component patterns (buttons, cards, badges, inputs)
- Interactive states (hover, active, focus)
- Responsive design breakpoints
- Animation specifications
- Implementation guidelines

**Use this as:** Your reference guide when building new pages or components.

### `styles-reference.css`
**Complete CSS source file** with all design tokens defined as CSS variables.

- Color variables (primary, secondary, accent, status colors)
- Typography settings
- Spacing, border radius, shadows
- Component styles
- Responsive breakpoints

**Use this as:** The foundation for any new stylesheet. Copy variables and patterns from here.

---

## 🎨 Design Tokens Overview

### Colors
All colors are defined as CSS variables in `:root`:

```css
--primary: #ff6b35          /* Main action color (orange) */
--secondary: #004e89        /* Secondary actions (blue) */
--accent: #00a8cc           /* Links & highlights (cyan) */
--success: #06a77d          /* Success messages (green) */
--warning: #f5a623          /* Warnings (yellow) */
--danger: #d63031           /* Errors (red) */
--bg-dark: #0f1419          /* Main background */
--surface: #1a2332          /* Card backgrounds */
--text-primary: #f5f5f5     /* Main text */
--text-secondary: #a0a0a0   /* Secondary text */
```

### Typography
- **Font:** System stack (-apple-system, BlinkMacSystemFont, etc.)
- **Headings:** H1 (56px), H2 (40px), H3 (28px), H4 (22px)
- **Body:** 16px with 1.6 line height
- **Weights:** Regular (400), Medium (500), Semibold (600)

### Spacing
Based on 8px unit:
- **xs:** 4px
- **sm:** 8px
- **md:** 16px
- **lg:** 24px
- **xl:** 32px

### Radius
- **sm:** 4px (tags, badges)
- **md:** 8px (buttons, inputs)
- **lg:** 12px (cards, modals)
- **xl:** 16px (large panels)

### Shadows
- **Shadow SM:** `0 2px 8px rgba(0, 0, 0, 0.2)`
- **Shadow:** `0 4px 20px rgba(0, 0, 0, 0.3)`

### Transitions
- **Default:** `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

---

## 🛠️ How to Use This Guide

### Building New Pages

1. **Reference the style guide** (`ISRM_StyleGuide.docx`) for design decisions
2. **Copy CSS variables** from `styles-reference.css` into your new stylesheet
3. **Follow the component patterns** documented in the guide
4. **Maintain consistent spacing, colors, and typography**

### Creating Components

Always use CSS variables instead of hardcoding values:

```css
/* ✅ DO THIS */
.my-button {
  background: var(--primary);
  padding: 1rem 2rem;
  border-radius: var(--radius-lg);
  color: white;
}

/* ❌ DON'T DO THIS */
.my-button {
  background: #ff6b35;
  padding: 16px 32px;
  border-radius: 12px;
  color: #ffffff;
}
```

### Responsive Design

Use defined breakpoints:
- **Tablet:** 768px and below
- **Mobile:** 480px and below

Media queries:
```css
@media (max-width: 768px) {
  /* Tablet adjustments */
}

@media (max-width: 480px) {
  /* Mobile adjustments */
}
```

### Interactive States

Always include:
- **Hover:** Visual feedback (color change, lift, shadow)
- **Active:** Indicates current/selected state
- **Focus:** For keyboard navigation accessibility

---

## 📐 Component Examples

### Button Styles

**Primary Button:**
- Background: `var(--primary)`
- Hover: Darker background, lift up, add shadow
- Padding: `1rem 2rem`
- Border radius: `var(--radius-lg)`

**Secondary Button:**
- Background: transparent
- Border: `2px solid white`
- Hover: White background, dark text

### Card Patterns

**Quick Access Cards:**
- Gradient background by theme
- Hover: Lift (-8px), add shadow
- Top border animation on hover
- Three variants: Primary, Secondary, Accent

**Guide Cards:**
- Background: `var(--surface)`
- Border: `1px solid var(--border)`
- Hover: Border to primary, lift, shadow
- Contains: Tag, title, description, meta, link

### Badge & Tag Styles

**Card Tag:**
- Background: `var(--primary)`
- Position: Top-right, absolute
- Uppercase, small font

**Feature Badge:**
- Background: `rgba(var(--accent), 0.1)`
- Border: `1px solid var(--accent)`
- Text: `var(--accent)`

---

## ✅ Best Practices

### CSS Variables
- **Always** use CSS variables for colors, spacing, shadows
- Define all tokens in `:root` for easy theming
- Use clear, descriptive variable names
- Group related variables (colors together, spacing together, etc.)

### Naming Conventions
- Use descriptive class names: `.card`, `.btn`, `.badge`, `.section-title`
- Use modifiers for variants: `.card-primary`, `.btn-secondary`, `.btn-lg`
- Use pseudo-classes for states: `:hover`, `:active`, `:focus`

### Performance
- Use `transform` and `opacity` for animations (GPU-accelerated)
- Prefer transitions over animations for state changes
- Limit shadows on mobile devices
- Keep animation duration at 0.3s or less

### Accessibility
- Ensure color contrast meets WCAG AA standards
- Always include focus states with visible outlines
- Reduce motion for users with `prefers-reduced-motion` setting
- Use semantic HTML (buttons, links, etc.)

---

## 🔄 Maintaining Consistency

When updating or extending the design system:

1. **Update CSS variables first** in `styles-reference.css`
2. **Document changes** in the style guide
3. **Test across all pages** to ensure consistency
4. **Communicate updates** to team members
5. **Maintain backward compatibility** when possible

---

## 📱 Responsive Considerations

### Typography Scaling
- At 768px: Reduce headings (H1: 2.5rem, H2: 1.8rem)
- At 480px: Further reduce (H1: 2rem, H2: 1.8rem)

### Grid Adjustments
- 768px: 3-column → 2-column layouts
- 480px: All layouts → 1 column
- Stack navigation menu vertically on mobile

### Mobile-First Approach
- Container padding: `2rem` → `1rem` at 480px
- Search inputs stack vertically
- CTA buttons go full width
- Hide/simplify animated backgrounds

---

## 🎬 Animations

### Float Animation
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```
Used on hero background elements. Duration: 6s, easing: ease-in-out

### Slide In Animation
```css
@keyframes slideInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```
Duration: 0.6s, easing: ease-out

### Easing Curve
`cubic-bezier(0.4, 0, 0.2, 1)` - Material Design standard. Fast start, smooth deceleration.

---

## 🤝 Contributing

When adding new components or patterns:

1. Design using the established color palette and spacing scale
2. Follow naming conventions
3. Test responsive behavior at all breakpoints
4. Document the component in the style guide
5. Ensure accessibility standards are met

---

## 📞 Questions?

Refer to:
- **Style Guide Document** for design decisions and specifications
- **CSS Reference File** for exact variable values and syntax
- **Source Code** (`index.html`, `styles.css`) for implementation examples

---

## 📊 Compliance Audit & Action Plan

### Current Status

An audit was completed on all 16 HTML pages in the ISRM website:

- **Compliance:** 47% (8 compliant, 8 non-compliant)
- **Critical Issues:** 5 categories requiring fixes
- **Timeline:** 5-6 hours over 4 weeks to reach 100%

**Three detailed documents have been created:**

1. **AUDIT_SUMMARY.txt** - Executive summary with quick fix checklist
2. **ISRM_StyleGuide_Compliance_Audit.txt** - Detailed technical audit of all pages
3. **ACTION_PLAN.md** - Step-by-step fix instructions organized by priority

### Top Issues to Fix

1. **Missing Stylesheets** (6 pages) - Critical
   - Guide pages don't link to main styles.css
   - Blocks access to all CSS variables
   - Fix time: 5 minutes

2. **Hardcoded Colors** (8 pages) - Critical
   - Using hex values instead of CSS variables
   - Makes global updates impossible
   - Fix time: 30 minutes

3. **No Responsive Design** (8 pages) - Critical
   - Fixed max-width with no mobile breakpoints
   - Mobile layout is broken
   - Fix time: 45 minutes

4. **Wrong Font Family** (8 pages) - High
   - Georgia serif instead of system fonts
   - Breaks visual consistency
   - Fix time: 10 minutes

5. **Missing Transitions** (8 pages) - Medium
   - No smooth animation on hover states
   - Feels unpolished
   - Fix time: 15 minutes

### Next Steps

1. **This Week** - Complete Phase 1 critical fixes (2 hours)
   - Add missing stylesheets
   - Replace hardcoded colors with CSS variables
   - Update fonts
   - Fix border radius values

2. **Next 2 Weeks** - Complete Phase 2 high priority fixes (2 hours)
   - Add responsive media queries
   - Update navigation consistency
   - Add transitions to interactive elements

3. **Next Month** - Complete Phase 3 polish (1 hour)
   - Add shadow effects
   - Refine components
   - Final testing

**See ACTION_PLAN.md for detailed step-by-step instructions.**

---

**Last Updated:** May 2026  
**Version:** 1.0
