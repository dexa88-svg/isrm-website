# Design System Quick Start Guide

Welcome to the ISMR Design System documentation! This folder contains everything you need to understand, implement, and maintain visual consistency across the website.

---

## 📂 What's Here

### Core Documents

| File | Purpose | Read Time |
|------|---------|-----------|
| **ISMR_StyleGuide.docx** | Complete design system specification with color swatches, typography, components, and patterns | 20 min |
| **styles-reference.css** | CSS source file with all design tokens as variables | 5 min |
| **README.md** | Design system overview, best practices, and implementation guidelines | 10 min |

### Audit & Action Items

| File | Purpose | Read Time |
|------|---------|-----------|
| **AUDIT_SUMMARY.txt** | Executive summary of compliance audit with quick checklist | 5 min |
| **ISMR_StyleGuide_Compliance_Audit.txt** | Detailed technical audit of all 16 website pages | 15 min |
| **ACTION_PLAN.md** | Step-by-step instructions to fix non-compliant pages | 10 min |

### This File

| File | Purpose |
|------|---------|
| **QUICKSTART.md** | You are here! Navigation and getting started guide |

---

## 🚀 Getting Started (5 Minutes)

### If You're Building New Pages

1. **Read** the **README.md** (~10 min) for design principles
2. **Open** the **ISMR_StyleGuide.docx** to see design specifications
3. **Copy** CSS variables from **styles-reference.css** into your stylesheet
4. **Follow** the component patterns documented in the style guide

### If You're Fixing Existing Pages

1. **Read** **AUDIT_SUMMARY.txt** (~5 min) to see what's broken
2. **Open** **ACTION_PLAN.md** for step-by-step fix instructions
3. **Follow** Phase 1 (critical fixes) first, then Phase 2, then Phase 3
4. **Test** at 480px, 768px, and desktop widths

### If You're Learning the System

1. **Start** with **README.md** for overview
2. **Study** **styles-reference.css** for actual implementation
3. **Review** **ISMR_StyleGuide.docx** for design decisions and specifications
4. **Look** at **index.html** in the project root for a working example

---

## 🎯 Current Status

### Compliance Audit Results

```
Overall: 47% Compliant
- 8 pages fully compliant ✓
- 8 pages need fixes ✗

Critical Issues:
- 6 pages missing stylesheet links
- 8 pages with hardcoded colors
- 8 pages with no responsive design
- 8 pages with wrong fonts
```

### Timeline to 100% Compliance

| Phase | Duration | Effort | Deadline |
|-------|----------|--------|----------|
| Phase 1: Critical | 2 hours | Low | This week |
| Phase 2: High Priority | 2 hours | Low | +2 weeks |
| Phase 3: Polish | 1 hour | Low | +1 month |

---

## 🎨 Design System At a Glance

### Color Palette
- **Primary:** #ff6b35 (Orange) - Main actions
- **Secondary:** #004e89 (Blue) - Secondary actions
- **Accent:** #00a8cc (Cyan) - Links, highlights
- **Status:** Success (#06a77d), Warning (#f5a623), Danger (#d63031)

### Typography
- **Font:** System stack (no custom fonts)
- **Headings:** 56px (H1) → 22px (H4)
- **Body:** 16px with 1.6 line height
- **Weights:** Regular (400), Medium (500), Semibold (600)

### Spacing
- **Base Unit:** 8px
- **Scale:** xs (4px), sm (8px), md (16px), lg (24px), xl (32px)

### Borders
- **Radius:** 4px (sm), 8px (md), 12px (lg), 16px (xl)

### Effects
- **Shadows:** 2 levels for depth
- **Transitions:** 0.3s cubic-bezier easing
- **Animations:** Float and slide-in

### Responsive
- **Tablet:** 768px (2-column → 1-column)
- **Mobile:** 480px (full-width, stacked)

---

## 📋 Common Tasks

### "I'm Building a New Page"

1. Copy this template HTML structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title - ISMR</title>
  <link rel="stylesheet" href="styles.css">  <!-- Link to main stylesheet -->
  <style>
    /* Your custom styles here, using CSS variables */
  </style>
</head>
<body>
  <!-- Use navbar, container, and other design system components -->
</body>
</html>
```

2. Reference the style guide for design decisions
3. Use only CSS variables (no hardcoded colors)
4. Include responsive media queries (768px, 480px)
5. Test at all breakpoints

### "I Found a Hardcoded Color"

Find & replace it with the CSS variable:
```
#ff6b35 → var(--primary)
#004e89 → var(--secondary)
#00a8cc → var(--accent)
(See ACTION_PLAN.md for complete list)
```

### "I Need to Add a Button"

Follow this pattern:
```css
.btn {
  padding: 1rem 2rem;
  border-radius: var(--radius-lg);
  font-weight: 600;
  transition: var(--transition);
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}
```

### "I Need to Update a Color Globally"

1. Open **styles-reference.css** (or styles.css in root)
2. Find the color variable in `:root`
3. Change the value once
4. All pages automatically update (because they use the variable)

---

## ✅ Checklist Before Publishing

Before pushing any changes, verify:

- [ ] Using CSS variables for colors (no hex values)
- [ ] Using system font stack (-apple-system, etc.)
- [ ] All interactive elements have hover states
- [ ] All inputs have focus states
- [ ] Page is responsive at 768px and 480px
- [ ] Navigation is consistent with main site
- [ ] Colors have proper contrast (WCAG AA)
- [ ] All transitions use `var(--transition)`
- [ ] All shadows use `var(--shadow)` or `var(--shadow-sm)`
- [ ] No JavaScript errors in console

---

## 🔗 File Structure

```
documentation/
├── design-system/
│   ├── ISMR_StyleGuide.docx          ← Main design guide
│   ├── styles-reference.css          ← CSS variable reference
│   ├── README.md                     ← Implementation guide
│   ├── AUDIT_SUMMARY.txt             ← Compliance audit summary
│   ├── ISMR_StyleGuide_Compliance_Audit.txt  ← Detailed audit
│   ├── ACTION_PLAN.md                ← Fix instructions
│   └── QUICKSTART.md                 ← This file
└── README.md                         ← Documentation hub
```

---

## 🆘 I'm Stuck

### "Where do I find the color for X?"
→ Check **ISMR_StyleGuide.docx** color palette section

### "What's the spacing between elements?"
→ See **styles-reference.css** or README.md spacing section

### "How do I make it responsive?"
→ Read **ACTION_PLAN.md** Phase 2 "Responsive Design" section

### "What's the font for headings?"
→ Look at **styles-reference.css** typography section

### "How do I fix a non-compliant page?"
→ Follow steps in **ACTION_PLAN.md** for that specific page

### "Is my page compliant?"
→ Compare to the checklist at end of **ACTION_PLAN.md**

---

## 📞 Quick Reference

| Need | Document |
|------|----------|
| Design specs & colors | ISMR_StyleGuide.docx |
| CSS variable names | styles-reference.css |
| Implementation guide | README.md |
| Compliance status | AUDIT_SUMMARY.txt |
| Detailed audit findings | ISMR_StyleGuide_Compliance_Audit.txt |
| How to fix pages | ACTION_PLAN.md |
| Help & navigation | QUICKSTART.md (this file) |

---

## 🎓 Learning Path

### Beginner (1 hour)
1. Read QUICKSTART.md (this file) - 5 min
2. Read README.md - 10 min
3. Browse ISMR_StyleGuide.docx - 20 min
4. Look at index.html for examples - 15 min
5. Explore styles-reference.css - 10 min

### Intermediate (2 hours)
All of Beginner, plus:
1. Read ACTION_PLAN.md - 15 min
2. Understand responsive design section - 20 min
3. Study component patterns - 20 min
4. Review best practices in README.md - 15 min
5. Create a test page using design system - 30 min

### Advanced (3 hours)
All of Intermediate, plus:
1. Read detailed audit - 20 min
2. Identify and fix one non-compliant page - 45 min
3. Test responsive design - 15 min
4. Review accessibility guidelines - 20 min
5. Create documentation for custom components - 30 min

---

## 🚀 Ready to Start?

1. **Read this file** (you are here!)
2. **Read README.md** (~10 min) for principles
3. **Open ISMR_StyleGuide.docx** for reference
4. **Check your page** against the compliance checklist
5. **Use ACTION_PLAN.md** if fixes are needed

---

## 💡 Pro Tips

- **Always use CSS variables** - it's the foundation of the system
- **Copy from existing pages** - look at index.html for correct patterns
- **Test responsively** - use Chrome DevTools to test 480px, 768px widths
- **Use find-replace** - bulk changes are faster than manual edits
- **Ask questions** - refer to the audit and action plan before guessing
- **Keep it simple** - if you find yourself overcomplicating it, check the style guide

---

## 📅 Next Steps

### This Week
- [ ] Read this guide
- [ ] Review style guide
- [ ] Apply Phase 1 fixes (if needed)

### Next 2 Weeks
- [ ] Apply Phase 2 fixes
- [ ] Test all pages at 768px
- [ ] Test all pages at 480px

### Next Month
- [ ] Apply Phase 3 polish
- [ ] Final testing
- [ ] Celebrate 100% compliance! 🎉

---

**Last Updated:** May 2026  
**Version:** 1.0  
**Status:** Ready to use

Happy building! 🚀
