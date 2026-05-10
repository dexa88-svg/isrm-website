# ISMR Scheduled Tasks - Split Work Approach

## Overview

Two complementary scheduled tasks work together to maintain ISMR website quality:

```
Monday 9:00 AM    →  Design Compliance Check (Weekly)
                         ↓
Monday 10:01 AM   →  Consistency Check (Daily)
```

---

## Task 1: Design Compliance Check ⭐ NEW

**Schedule:** Every Monday at 9:00 AM  
**Duration:** ~15 minutes  
**Purpose:** Audit visual/presentation consistency  
**Scope:** Design system compliance

### What It Does

Audits all 16 pages against the ISMR style guide:

1. ✓ Stylesheet links (can access CSS variables)
2. ✓ No hardcoded colors (using var(--primary), etc.)
3. ✓ Font consistency (system font stack)
4. ✓ Border radius variables (not hardcoded pixels)
5. ✓ Responsive design (768px, 480px breakpoints)
6. ✓ Transitions (smooth hover effects)
7. ✓ Shadow usage (proper elevation)
8. ✓ Component patterns (buttons, cards follow design system)
9. ✓ Accessibility basics (contrast, focus states)

### Output

Generates detailed weekly report with:
- **Compliance percentage** (was 47%, tracking improvement)
- **Page-by-page assessment** (✓ compliant, ⚠️ minor issues, ✗ major issues)
- **Issues by category** (which checks are failing)
- **Fix recommendations** (critical → high → medium priority)
- **Action items** (with time estimates)
- **Trends** (are we improving week-to-week?)

### Reports Location

`/documentation/design-system/WEEKLY_COMPLIANCE_REPORT_[DATE].md`

New report generated every Monday before 10 AM.

---

## Task 2: Consistency Check (Existing)

**Schedule:** Every day at 10:01 AM  
**Duration:** ~5 minutes  
**Purpose:** Audit structural/content integrity  
**Scope:** Content management

### What It Does

Audits all pages for structural consistency:

1. ✓ Scope violations (only petrol scooters)
2. ✓ Orphaned files (files not in manifest)
3. ✓ Ghost entries (manifest entries missing files)
4. ✓ Navigation links (all links work)
5. ✓ Category index completeness (all pages listed)
6. ✓ Stale planning files (archive old versions)
7. ✓ HTML structure validation (required tags present)
8. ✓ Recent pages freshness (root index up-to-date)

### Output

Generates daily summary showing:
- Files moved to _removed/ (out-of-scope)
- Orphaned files fixed
- Broken links repaired
- Manifest updates
- Files archived

---

## How They Work Together

### Weekly Workflow

```
MONDAY 9:00 AM: Design Compliance Check
├─ Audits visual/presentation layer
├─ Generates compliance report
├─ Identifies design issues
└─ Recommends fixes (with time estimates)
        ↓ (1 hour later)
MONDAY 10:01 AM: Consistency Check
├─ Audits content/structural layer
├─ Verifies scope enforcement
├─ Checks navigation integrity
└─ Maintains manifest synchronization
        ↓ (Continues daily)
DAILY 10:01 AM: Consistency Check
├─ Runs every day
├─ Catches content issues
├─ Maintains structural integrity
└─ Keeps manifest in sync
```

### Separate Concerns

| Aspect | Design Check | Consistency Check |
|--------|---|---|
| **Runs** | Weekly (Monday 9 AM) | Daily (10:01 AM) |
| **Scope** | Visual/presentation | Content/structure |
| **Checks** | Colors, fonts, CSS variables | Scope, navigation, manifests |
| **Purpose** | Design consistency | Content integrity |
| **Speed** | ~15 minutes | ~5 minutes |
| **Change Frequency** | Weekly (design stable) | Daily (content changes) |

---

## Compliance Tracking

### Design Compliance Score

Tracked weekly by `isrm-design-compliance-check`:

```
Week 1 (May 5):   47% compliant (starting point)
Week 2 (May 12):  X% compliant (track improvement)
Week 3 (May 19):  X% compliant (trend)
...
Target:          100% compliant (all pages aligned)
```

### Structural Consistency

Monitored daily by `isrm-consistency-check`:

```
Daily:  ✓ Content scope enforced
        ✓ Navigation links verified
        ✓ Manifest kept in sync
        ✓ Files properly organized
```

---

## How to Use These Reports

### After Design Compliance Check (Monday 9 AM)

1. **Check the report** in `/documentation/design-system/WEEKLY_COMPLIANCE_REPORT_[DATE].md`
2. **Note the compliance percentage** — is it improving?
3. **Review action items** — prioritize fixes
4. **Follow ACTION_PLAN.md** for detailed instructions

### After Consistency Check (Daily 10:01 AM)

1. **Spot check for any issues** flagged
2. **Review moved files** (if any went to _removed/)
3. **Verify manifest is updated**

### Combined View

Both reports tell you:
- **Design Health:** Visual consistency across pages
- **Content Health:** Structural integrity and scope
- **Overall Quality:** Both layers working together

---

## Timeline to 100% Compliance

### Phase 1: Critical Fixes (Week 1-2)
**Design Check Identifies:**
- Missing stylesheets (6 pages)
- Hardcoded colors (8 pages)
- Wrong fonts (8 pages)

**You Fix Using:** ACTION_PLAN.md Phase 1  
**Result:** ~85% compliance

### Phase 2: High Priority (Week 3-4)
**Design Check Identifies:**
- No responsive design (8 pages)
- Missing transitions (8 pages)

**You Fix Using:** ACTION_PLAN.md Phase 2  
**Result:** ~95% compliance

### Phase 3: Polish (Month 2)
**Design Check Identifies:**
- Missing shadows
- Component refinement needed

**You Fix Using:** ACTION_PLAN.md Phase 3  
**Result:** 100% compliance ✅

---

## Key Advantages of Split Approach

✅ **Clear separation:** Each task has one job  
✅ **Faster execution:** Design check takes 15 min, consistency 5 min  
✅ **Independent fixes:** Can fix design without touching content  
✅ **Better reporting:** Separate metrics for each layer  
✅ **Easier debugging:** Issues isolated by category  
✅ **Scalable:** Can add more specialized checks later  
✅ **Professional:** Aligns with industry best practices  

---

## Documentation Structure

```
documentation/
├── design-system/
│   ├── QUICKSTART.md              ← Start here
│   ├── README.md                  ← Implementation guide
│   ├── ISMR_StyleGuide.docx       ← Design specs
│   ├── styles-reference.css       ← CSS variables
│   ├── ACTION_PLAN.md             ← How to fix issues
│   ├── WEEKLY_COMPLIANCE_REPORT_*.md  ← Reports (new each week)
│   └── [other audit files]
└── README.md
```

---

## Scheduled Task Files

Located in: `/Users/Dzianis_Paulavets/Documents/Claude/Scheduled/`

```
isrm-consistency-check/
├── SKILL.md          ← Daily task (10:01 AM)
└── [session files]

isrm-design-compliance-check/
├── SKILL.md          ← Weekly task (Monday 9:00 AM) ← NEW
└── [session files]
```

---

## Next Steps

### Immediate (This Week)

1. **Review this document** to understand the split approach
2. **Wait for first Design Compliance report** (Monday 9 AM)
3. **Read the compliance report** when it's generated
4. **Start Phase 1 fixes** using ACTION_PLAN.md
5. **Track improvements** week-to-week

### Ongoing

1. **Check weekly compliance reports** for trends
2. **Fix issues prioritized by design check**
3. **Monitor daily consistency check** for content issues
4. **Update documentation** as design evolves
5. **Celebrate** when compliance reaches 100% 🎉

---

## FAQ

**Q: Why not one task that does everything?**  
A: Separates concerns. Design changes weekly, content changes daily. Mixing them would make the task slow and hard to maintain.

**Q: What if I don't want to wait for Monday?**  
A: You can manually trigger the design compliance check anytime:
1. Go to Scheduled tasks
2. Find "isrm-design-compliance-check"
3. Click "Run now"

**Q: How long does the design check take?**  
A: ~15 minutes to audit all 16 pages and generate a comprehensive report.

**Q: Will it fix things automatically?**  
A: No, it identifies issues and recommends fixes. You follow ACTION_PLAN.md to apply fixes manually. This prevents unwanted changes.

**Q: What if a page is already fixed?**  
A: The report will show ✓ COMPLIANT with 0 issues. It tracks progress week-to-week.

**Q: Can I see all reports?**  
A: Yes, they're saved in `/documentation/design-system/WEEKLY_COMPLIANCE_REPORT_[DATE].md`. Check the folder for historical reports.

---

## Success Metrics

| Metric | Current | Target | Timeline |
|--------|---------|--------|----------|
| Design Compliance | 47% | 100% | 4 weeks |
| Pages Audited | 16 | 16 | Ongoing |
| Critical Issues | 5 types | 0 types | Week 1 |
| Pages with Stylesheets | 10/16 | 16/16 | Week 1 |
| Pages with CSS Variables | 8/16 | 16/16 | Week 1 |
| Responsive Pages | 8/16 | 16/16 | Week 2 |

---

## Related Documentation

- **QUICKSTART.md** — How to use the design system
- **ACTION_PLAN.md** — Step-by-step fix instructions
- **AUDIT_SUMMARY.txt** — Current audit status
- **ISMR_StyleGuide.docx** — Design specifications
- **styles-reference.css** — CSS variable reference

---

**Last Updated:** May 7, 2026  
**Status:** Both tasks active and scheduled  
**Next Design Report:** Monday, May 12, 2026 at 9:00 AM
