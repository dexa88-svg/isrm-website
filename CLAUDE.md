# ISRM — Interactive Scooter Repair Manuals
## Claude Code Context File

**Project owner:** Den (Dzianis) — dexa88@gmail.com  
**Last updated:** 2026-05-08 (reindexed)  
**Current phase:** Phase 1 in progress (GitHub → Hetzner auto-deploy active, Astro project removed from workspace)

---

## What Is This Project

ISRM is a free, community-driven, wiki-style repair manual website for scooter owners. Think Wikipedia meets ETKA (VAG parts catalog), but for DIY scooter repair — with embedded videos, future 3D models, and eventual AI-assisted diagnostics.

**One-liner candidates (not yet locked):**
- "The Wikipedia of scooter repair"
- "Free scooter repair: find parts, learn procedures, diagnose problems"

**Long-term vision:** Website → AI chat platform → Mobile app

---

## Workspace Structure

The project is split into two clear areas: **`public/`** holds live publishable content (HTML guides, assets), and **`_dev/`** holds all development code, documentation, and tooling.

```
interactive scooter repair manuals - ISRM/
├── CLAUDE.md                        ← this file
├── .github/
│   └── workflows/
│       └── deploy.yml               ← GitHub Actions: auto-deploy to Hetzner via FTP
│
├── public/                          ← PUBLISHABLE CONTENT (served to users)
│   ├── index.html                   ← homepage
│   ├── styles.css
│   ├── script.js
│   ├── sources-registry.json        ← 68 known content sources
│   ├── sync-manifest.json           ← 17 generated pages with metadata
│   ├── repair-guides/               ← 12 HTML guides (GY6-focused) + index
│   ├── parts/                       ← parts index
│   ├── diagnostics/                 ← 2 troubleshooting guides + index
│   ├── models/                      ← 2 scooter model pages + index
│   ├── news/
│   ├── videos/                      ← 1 video guide + index
│   └── community/
│
└── _dev/                            ← DEVELOPMENT & DOCUMENTATION (not published)
    ├── README.md                    ← contributor guide & project overview
    ├── PROJECT-SCOPE.md             ← MVP scope, mandated sources, automation
    ├── PROJECT_INSTRUCTIONS.md      ← content standards & Hetzner T&C
    ├── ROADMAP.md                   ← 13-phase build plan
    ├── SETUP_SUMMARY.md             ← hosting decisions & credentials
    ├── GUIDE-STRUCTURE.md           ← HTML template for repair guides
    ├── VIDEO-SOURCING.md            ← how to find & embed videos
    ├── DESIGN-SYSTEM.md             ← CSS variables, UI patterns
    ├── DESIGN-GUIDE.md
    ├── IMPLEMENTATION-NOTES.md      ← video integration notes
    ├── PHASE0-GUIDANCE.md           ← phase 0 worksheet & persona guidance
    ├── INTEGRATION-EXAMPLES.md
    ├── resources-gy6-master-list.md
    ├── scheduled-tasks-updated/     ← updated skill prompts for scheduled tasks
    │   ├── isrm-content-sync-SKILL.md
    │   ├── isrm-design-compliance-check-SKILL.md
    │   └── isrm-consistency-check-SKILL.md
    ├── documentation/               ← LIVING PROJECT DOCS
    │   ├── README.md                ← documentation hub index
    │   ├── SCHEDULED_TASKS.md       ← all 3 scheduled tasks documented
    │   ├── FTP-AUTO-DEPLOY-PROCESS.md ← GitHub → Hetzner FTP pipeline docs
    │   └── design-system/           ← design tokens & style guide
    │       ├── README.md
    │       ├── ISRM_StyleGuide.docx ← comprehensive style guide
    │       ├── ISRM_StyleGuide_Compliance_Audit.txt ← compliance audit results
    │       ├── styles-reference.css ← all CSS variables
    │       ├── INDEX.md
    │       ├── QUICKSTART.md
    │       ├── ACTION_PLAN.md
    │       └── AUDIT_SUMMARY.txt
    ├── docs/
    │   └── PHASE0-DEFINITION.md
    ├── _archive/                    ← old HTML prototypes
    └── _removed/                    ← out-of-scope content (electric scooter pages)
```

---

## Tech Stack

### Current (live content)
| Layer | Decision | Notes |
|-------|----------|-------|
| **Frontend** | Vanilla HTML/CSS/JS | Static files in `public/` |
| **Hosting** | Hetzner Webhosting S | EU-based, €3-5/month, WordPress installed |
| **CMS** | WordPress | Non-technical owner friendly; to be replaced |
| **Domain** | ismr.online | Registered on Namecheap |

**WordPress temp URL:** `azkh.your-vhost.de` (pending DNS to ismr.online)  
**Hetzner server:** www703.your-server.de (IP: 157.90.184.167)

### Deploy Pipeline (active)
| Step | Tool | Notes |
|------|------|-------|
| **Source control** | GitHub (`dexa88-svg/isrm-website`) | `main` branch triggers deploy |
| **CI/CD** | GitHub Actions (`deploy.yml`) | Runs on every push to `main` |
| **Deploy target** | Hetzner via FTP | Live within ~30s of push |

Full pipeline documented in `_dev/documentation/FTP-AUTO-DEPLOY-PROCESS.md`.

### Future Stack (Phase 2+)
| Layer | Decision | Notes |
|-------|----------|-------|
| **Framework** | **Astro** | Chosen for Phase 2 — not currently in workspace |
| **Hosting** | Cloudflare Pages | TBD — may replace Hetzner |
| **Domain** | ismr.online | Same domain |
| **Content** | Astro Content Collections | Phase 2 — Markdown/MDX |
| **CMS** | Sanity or Contentlayer | TBD in Phase 2 |

**Note:** The Astro scaffold (`rollerdoc-site/`) previously existed in `_dev/` but has been removed from the local workspace. It may exist in the GitHub repo.

---

## MVP Scope (Current Focus)

### Scooter Models In Scope
- **GY6 engine** (Chinese/Taiwanese 50–150cc): BTC Riva, La Souris Sourini/City, Santini Capri
  - Engine codes: 139QMB (50cc), 152QMI (125cc), 157QMJ (150cc)
- **Piaggio/Vespa**: Primavera, Sprint, Zip (50cc, 125cc)
- Both carburetor and EFI variants

### Out of Scope for MVP
- Electric scooters (Phase 3+)
- Motorcycles, ATVs (later phases)
- AI chat (Phase 7)
- 3D interactive models (Phase 6)
- Community auth/contributions (Phase 4)

---

## Content Currently Built (as of 2026-05-08)

**Repair Guides (12 HTML guides + index):**
- gy6-carburetor-adjustment-guide.html
- gy6-carburetor-cleaning-guide.html
- gy6-carburetor-jetting-guide.html
- gy6-cvt-variator-belt-replacement.html
- gy6-oil-change-guide.html
- gy6-spark-plug-guide.html
- gy6-valve-adjustment-guide.html
- gy6-air-filter-guide.html
- gy6-brake-fluid-guide.html
- gy6-brake-pads-guide.html
- gy6-ignition-coil-guide.html
- scooter-cvt-clutch-variator-guide.html

**Models (2 + index):** La Souris Sourini/City, Vespa Primavera 125

**Diagnostics (2 + index):** gy6-no-start-troubleshooting, gy6-efi-fuel-injection-troubleshooting

**Videos (1 + index):** gy6-carburetor-intake-change-tutorial

**Sources registry:** 68 sources across forums (14), blogs (18), YouTube channels (5), manufacturer sites (7), wikis (8), others (13)

---

## Automation (Scheduled Tasks)

Three automated Claude tasks are configured. Full details in `_dev/documentation/SCHEDULED_TASKS.md`.

| Task | Schedule | Purpose |
|------|----------|---------|
| `isrm-content-sync` | Daily 8:01 AM | Discover new sources + scan for new content + generate HTML pages |
| `isrm-design-compliance` | Mondays 9:00 AM | Audit all pages against design system; generate compliance report |
| `isrm-consistency-check` | Daily 10:01 AM | Audit structure, fix broken links, ensure nav consistency |

**Design compliance reports** are saved to `_dev/documentation/design-system/WEEKLY_COMPLIANCE_REPORT_[DATE].md`.

**Mandated sources for sync:**
- Forums: scootdawg.com, modernvespa.com, reddit r/scooters, r/Piaggio, vespaclub.us
- Parts/technical: treatland.tv/blogs/news, scooterworks.com/articles/, scooterswap.com
- Manufacturer: vespa.com/news, piaggio.com/news, btcbikes.com
- YouTube: @zandri, @its-that-easy (mandated 2026-05-07)

---

## Build Phases (Roadmap Summary)

| Phase | Focus | Status |
|-------|-------|--------|
| 0 | Vision, scope, brand, domain | ✅ Complete |
| 1 | Stack + hosting + deploy | 🔄 In Progress |
| 2 | Data model (Markdown schema) | 📋 Planned |
| 3 | MVP browse + search (5–10 models) | 📋 Planned |
| 4 | Wiki-style contributions (GitHub PR as CMS) | 📋 Planned |
| 5 | Automated content ingestion | 📋 Planned |
| 6 | Interactive 3D exploded views | 📋 Later |
| 7 | AI repair assistant (RAG chat) | 📋 Later |
| 8 | Mobile PWA → native app | 📋 Later |

**Suggested 90-day MVP cut:** Phase 3 live by week 6, Phase 4 by week 8, Phase 5 v0 by week 10.

---

## Content & Design Standards

**Design system CSS variables:**
- Primary/accent: `#f5a623` (orange)
- Dark card: `#1a1a1a`
- Text muted: `#a0a0a0`
- Border: `#2a2a2a`

**Every repair guide must include:**
- Minimum 1 embedded video (YouTube preferred, youtube-nocookie.com)
- Step-by-step text instructions
- Tools & parts list
- Difficulty rating + time estimate
- Safety warnings
- Source attribution
- Related videos section

**Language:** Formal, professional. No slang. Technical accuracy required.

**License:** CC BY-SA 4.0 (all content)

---

## Hetzner Hosting Restrictions (Important)

Prohibited on this hosting: adult content, hate speech, gambling, IP violations, defamation, spam, crypto mining, DDoS. GDPR compliance required. User responsible for backups.

---

## Open Decisions (Not Yet Resolved)

1. Markdown-in-Git vs database (when scaling)
2. GitHub-PR-as-CMS vs custom edit system
3. Headless CMS choice — Sanity vs Contentlayer (Phase 2)
4. First hero seed model for full 3D treatment

**Resolved:**
- ✅ Brand name: **ISRM** (Interactive Scooter Manuals for Repair), domain ismr.online
- ✅ Framework: **Astro** — chosen for Phase 2 (scaffold removed from local workspace)
- ✅ Deploy pipeline: GitHub Actions → Hetzner FTP (active)

---

## Key Files to Read First

- `_dev/PROJECT-SCOPE.md` — canonical scope + automation sources
- `_dev/ROADMAP.md` — full 13-phase build plan with constraints
- `_dev/SETUP_SUMMARY.md` — hosting credentials and decisions
- `_dev/GUIDE-STRUCTURE.md` — template when creating any new guide
- `_dev/documentation/FTP-AUTO-DEPLOY-PROCESS.md` — GitHub Actions → Hetzner deploy pipeline
- `_dev/documentation/SCHEDULED_TASKS.md` — all 3 scheduled tasks in detail
- `_dev/scheduled-tasks-updated/` — latest skill prompts for all 3 scheduled tasks
- `_dev/documentation/design-system/README.md` — design system quick reference
- `public/sync-manifest.json` — list of all 17 generated pages
- `public/sources-registry.json` — all 68 content sources
