# ISRM Style Guide Compliance - Action Plan

## Executive Summary

**Current Status:** 47% Compliance (8/16 pages compliant)  
**Target:** 100% Compliance  
**Timeline:** 5-6 hours over 4 weeks  
**Priority:** CRITICAL - Fix now to avoid technical debt

---

## Quick Stats

| Category | Status | Impact |
|----------|--------|--------|
| **Stylesheet Linking** | 50% | Missing on 6 pages (critical) |
| **CSS Variables** | 50% | Hardcoded colors on 8 pages |
| **Typography** | 50% | Wrong fonts on 8 pages |
| **Responsive Design** | 50% | Broken on mobile for 8 pages |
| **Spacing/Border Radius** | 50% | Inconsistent |
| **Overall Compliance** | **47%** | **Requires immediate attention** |

---

## Phase 1: CRITICAL FIXES (This Week - 2 hours)

### Issue #1: Missing Stylesheet Links (5 min)

**Problem:** 6 pages don't link to the main stylesheet, blocking CSS variables.

**Affected Pages:**
```
- repair-guides/gy6-oil-change-guide.html
- repair-guides/gy6-valve-adjustment-guide.html
- repair-guides/gy6-carburetor-adjustment-guide.html
- repair-guides/gy6-cvt-variator-belt-replacement.html
- diagnostics/gy6-no-start-troubleshooting.html
- models/la-souris-sourini-city-overview.html
```

**Fix:**
Add this line to the `<head>` section of each page:
```html
<link rel="stylesheet" href="../../styles.css">
```

**Note:** The path uses `../../` because these pages are 2 levels deep in subdirectories.

---

### Issue #2: Hardcoded Colors (30 min)

**Problem:** 8 pages use hardcoded hex values instead of CSS variables, making global color updates impossible.

**Affected Pages:**
- All 6 pages from Issue #1
- Plus 2 additional pages with color issues

**Color Mapping - Replace these:**

```
OLD HEX               →  NEW CSS VARIABLE
#f5a623              →  var(--warning)
#7ec8e3              →  var(--accent)
#0f0f0f              →  var(--bg-dark)
#e8e8e8              →  var(--text-primary)
#1a1a1a              →  var(--surface)
#151515              →  var(--surface-2)
#4caf50              →  var(--success)
#333                 →  var(--border)
#ff6b35              →  var(--primary)
#e55a24              →  var(--primary-dark)
#004e89              →  var(--secondary)
#d63031              →  var(--danger)
#a0a0a0              →  var(--text-secondary)
#707070              →  var(--text-tertiary)
```

**How to Fix:**
1. Open each affected page in a text editor
2. Use Find & Replace (Ctrl+H / Cmd+H)
3. Replace each hex color with its corresponding CSS variable
4. Save the file

**Example:**
```css
/* BEFORE */
.guide-content {
  background: #1a1a1a;
  color: #e8e8e8;
  border: 1px solid #333;
}

/* AFTER */
.guide-content {
  background: var(--surface);
  color: var(--text-primary);
  border: 1px solid var(--border);
}
```

---

### Issue #3: Wrong Font Family (10 min)

**Problem:** 8 pages use Georgia serif instead of system font stack, breaking visual consistency.

**Find & Replace:**
```
Find:    font-family: Georgia, serif;
Replace: font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

Apply to all 8 non-compliant pages in the `<style>` or inline style sections.

---

### Issue #4: Border Radius Inconsistency (10 min)

**Problem:** Pages use hardcoded border-radius instead of design system values.

**Find & Replace (perform these in order):**

```
Find:    border-radius: 6px;
Replace: border-radius: var(--radius-md);

Find:    border-radius: 3px;
Replace: border-radius: var(--radius-sm);

Find:    border-radius: 12px;
Replace: border-radius: var(--radius-lg);

Find:    border-radius: 16px;
Replace: border-radius: var(--radius-xl);

Find:    border-radius: 4px;
Replace: border-radius: var(--radius-sm);
```

---

## Phase 1 Completion Checklist

After completing all Phase 1 fixes:

- [ ] All 6 guide pages have `<link rel="stylesheet" href="../../styles.css">`
- [ ] All hardcoded hex colors replaced with CSS variables
- [ ] All font-family declarations use system font stack
- [ ] All border-radius values use CSS variables
- [ ] Test pages in browser - they should display correctly with proper colors
- [ ] Check responsive design structure (should work better now)

**Expected Result:** Compliance increases to ~85%

---

## Phase 2: High Priority Fixes (Next 2 Weeks - 2 hours)

### Issue #5: No Responsive Design (45 min)

**Problem:** Pages use fixed `max-width: 820px` with no mobile media queries. Mobile layout is broken.

**Fix:** Add responsive media queries to all 8 non-compliant pages.

**Step 1: Find and update max-width**
```css
/* BEFORE */
.container {
  max-width: 820px;
  margin: 0 auto;
}

/* AFTER */
.container {
  max-width: 820px;
  margin: 0 auto;
  padding: 0 2rem;
}
```

**Step 2: Add media queries**

Add this at the end of each page's `<style>` block:

```css
/* Tablet devices */
@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }
  
  h1 { font-size: 2rem; }
  h2 { font-size: 1.5rem; }
  h3 { font-size: 1.2rem; }
  
  .controls-bar {
    flex-direction: column;
    align-items: stretch;
  }
  
  .search-bar {
    min-width: 100%;
  }
}

/* Mobile devices */
@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  
  h1 { font-size: 1.5rem; }
  h2 { font-size: 1.2rem; }
  h3 { font-size: 1rem; }
  
  .nav-menu {
    display: none;
  }
  
  .nav-toggle {
    display: block;
  }
}
```

---

### Issue #6: Missing Transitions (15 min)

**Problem:** Interactive elements lack smooth transitions, making the UI feel unpolished.

**Find:** All hover states in the CSS
**Add:** `transition: var(--transition);` to elements with `:hover` rules

**Example:**
```css
/* BEFORE */
.button {
  background: var(--primary);
}

.button:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

/* AFTER */
.button {
  background: var(--primary);
  transition: var(--transition);
}

.button:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}
```

---

### Issue #7: Navigation Consistency (20 min)

**Problem:** Navigation structure differs from main site design system.

**Fix:**
1. Update navbar classes to match main `index.html` structure
2. Use `.navbar`, `.nav-container`, `.nav-brand`, `.nav-menu`, `.nav-link`
3. Ensure all pages have consistent navigation

---

## Phase 2 Completion Checklist

- [ ] Added responsive media queries (768px and 480px) to all pages
- [ ] All hover states use `transition: var(--transition);`
- [ ] Navigation structure matches main site
- [ ] Test on tablet device (768px width) - layout should reflow
- [ ] Test on mobile device (480px width) - layout should stack vertically
- [ ] All text is readable and clickable on mobile

**Expected Result:** Compliance reaches ~95%

---

## Phase 3: Medium Priority Fixes (Next Month - 1 hour)

### Issue #8: Missing Shadow Effects (15 min)

**Problem:** Hover states lack depth with shadow effects.

**Fix:** Add shadow variables to elevated elements

```css
/* BEFORE */
.card:hover {
  transform: translateY(-4px);
}

/* AFTER */
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}
```

---

### Issue #9: Component Refinement (30 min)

**Verify:**
- [ ] All buttons have proper hover states
- [ ] All cards have proper spacing and shadows
- [ ] All inputs have proper focus states (border color + outline glow)
- [ ] All interactive elements provide visual feedback
- [ ] All text has proper contrast (WCAG AA minimum)

---

### Issue #10: Final Testing (15 min)

**Test Checklist:**
- [ ] Desktop (1200px+) - Full layout visible
- [ ] Tablet (768px) - 2-column layouts reflow, readable
- [ ] Mobile (480px) - Single column, full width, no overflow
- [ ] Touch targets - All buttons/links > 44px
- [ ] Keyboard navigation - Can tab through all interactive elements
- [ ] Hover states - All interactive elements show visual feedback
- [ ] Focus states - All inputs show focus ring
- [ ] Colors - No hardcoded hex values, only CSS variables
- [ ] Print - Pages print legibly (optional but nice)

---

## Non-Compliant Pages - Detailed Fix Guide

### 1. repair-guides/gy6-oil-change-guide.html
**Issues:** Missing stylesheet, hardcoded colors, no responsive design, wrong fonts
**Time to Fix:** 15 minutes
**Steps:** Apply all Phase 1 + Phase 2 fixes

### 2. repair-guides/gy6-valve-adjustment-guide.html
**Issues:** Missing stylesheet, hardcoded colors, no responsive design, wrong fonts
**Time to Fix:** 15 minutes
**Steps:** Apply all Phase 1 + Phase 2 fixes

### 3. repair-guides/gy6-carburetor-adjustment-guide.html
**Issues:** Missing stylesheet, hardcoded colors, no responsive design, wrong fonts
**Time to Fix:** 15 minutes
**Steps:** Apply all Phase 1 + Phase 2 fixes

### 4. repair-guides/gy6-cvt-variator-belt-replacement.html
**Issues:** Missing stylesheet, hardcoded colors, no responsive design, wrong fonts
**Time to Fix:** 15 minutes
**Steps:** Apply all Phase 1 + Phase 2 fixes

### 5. diagnostics/gy6-no-start-troubleshooting.html
**Issues:** Missing stylesheet, hardcoded colors, no responsive design, wrong fonts
**Time to Fix:** 15 minutes
**Steps:** Apply all Phase 1 + Phase 2 fixes

### 6. models/la-souris-sourini-city-overview.html
**Issues:** Missing stylesheet, hardcoded colors, no responsive design, wrong fonts
**Time to Fix:** 15 minutes
**Steps:** Apply all Phase 1 + Phase 2 fixes

---

## Fully Compliant Pages (No Changes Needed)

These pages properly implement the design system and need no fixes:

✅ **index.html** - Landing page  
✅ **repair-guides/index.html** - Guide list  
✅ **diagnostics/index.html** - Diagnostics hub  
✅ **models/index.html** - Model list  
✅ **parts/index.html** - Parts database  
✅ **news/index.html** - News hub  
✅ **videos/index.html** - Video gallery  
✅ **community/index.html** - Community hub  

---

## Implementation Timeline

| Phase | Focus | Time | Target Compliance | Deadline |
|-------|-------|------|-------------------|----------|
| **1** | Critical fixes (sheets, colors, fonts) | 2 hrs | 85% | This week |
| **2** | High priority (responsive, transitions) | 2 hrs | 95% | +2 weeks |
| **3** | Medium priority (shadows, polish) | 1 hr | 100% | +1 month |

**Total Time Required:** 5-6 hours  
**Effort Level:** Low (mostly find-replace)  
**Complexity:** Simple (no code logic needed)

---

## Success Criteria

After completing all three phases, the website should:

- ✅ Use CSS variables for all colors (no hardcoded hex)
- ✅ Have consistent typography (system font stack)
- ✅ Use design system border radius values
- ✅ Support all breakpoints (768px, 480px)
- ✅ Have smooth transitions on interactive elements
- ✅ Have proper shadows on elevated elements
- ✅ Have consistent navigation across all pages
- ✅ Maintain 100% compliance with style guide
- ✅ Be easily maintainable and themeable
- ✅ Provide excellent user experience on all devices

---

## Resources

- **Style Guide:** `ISRM_StyleGuide.docx` - Reference for design decisions
- **CSS Variables:** `styles-reference.css` - Copy variable definitions
- **Audit Report:** `ISRM_StyleGuide_Compliance_Audit.txt` - Detailed technical findings
- **This Plan:** `ACTION_PLAN.md` - Step-by-step fix instructions

---

## Notes for Developers

- Always use CSS variables instead of hardcoded colors
- Test changes at all three breakpoints (desktop, tablet, mobile)
- Use find-replace to make bulk changes efficiently
- Refer to compliant pages (like index.html) as examples
- When uncertain, check the style guide documentation
- Push completed fixes to version control with clear commit messages

---

**Last Updated:** May 2026  
**Version:** 1.0  
**Status:** Ready for implementation
