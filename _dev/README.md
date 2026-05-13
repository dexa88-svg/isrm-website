# ISMR — Interactive Scooter Manuals for Repair

**Your free, community-driven repair guide for GY6 and Piaggio/Vespa scooters.**

A wiki-style repair manual for DIY scooter owners featuring step-by-step repair guides with embedded videos, parts compatibility tables, interactive diagnostics, and model-specific technical data.

Live at **[ismr.online](https://ismr.online)**

---

## Quick links

- [Repair Guides](../public/repair-guides/) — Browse all repair procedures
- [Diagnostics](../public/diagnostics/) — Symptom-to-solution fault finding
- [Parts & Compatibility](../public/parts/) — OEM numbers, fitment, sourcing
- [Model Overviews](../public/models/) — Specs and technical data per model
- [Videos](../public/videos/) — Curated video tutorials

---

## Supported scooters (Phase 1 scope)

### GY6 — 50 / 125 / 150cc
- Engine codes: 139QMB (50cc), 152QMI (125cc), 157QMJ (150cc)
- Models: BTC Riva, La Souris Sourini/City, Santini Capri, and Chinese-market variants
- Both carburettor and fuel-injection variants covered

### Piaggio / Vespa
- Vespa Primavera 125 i.e. 3V
- Vespa Sprint 125
- Piaggio Zip 50 2T / 100 4T
- Both carburettor and fuel-injection variants covered

Petrol only — electric scooters are out of scope until Phase 3.

---

## For contributors

### Creating a repair guide

1. Read the template — [`GUIDE-STRUCTURE.md`](GUIDE-STRUCTURE.md) — complete HTML structure, metadata requirements, quality checklist
2. Check the scope — [`PROJECT-SCOPE.md`](PROJECT-SCOPE.md) — mandated content sources and in/out-of-scope definitions
3. See a reference implementation — [`public/models/piaggio-zip-100-technical-overview.html`](../public/models/piaggio-zip-100-technical-overview.html)

Every guide must include:
- At least one embedded video (`youtube-nocookie.com` embeds only)
- Step-by-step instructions
- Tools and parts list with part numbers where possible
- Difficulty rating and time estimate
- Safety warnings
- Source attribution
- A "Last Updated" date (see [`PAGE-UPDATE-TRACKING.md`](PAGE-UPDATE-TRACKING.md) for policy)

### Submitting

Open a pull request — one topic per PR. If you can't use Git, email [dexa88@gmail.com](mailto:dexa88@gmail.com) with your draft and we'll handle formatting.

### License

All content is licensed under **CC BY-SA 4.0** (Creative Commons Attribution-ShareAlike 4.0). By contributing you agree your content is published under this licence. Videos are linked, not hosted — they retain their original creator's licence.

---

## Technology stack

- **Frontend:** Vanilla HTML, CSS, JavaScript — no framework, no build step
- **Styling:** CSS custom properties (design system in [`documentation/design-system/styles-reference.css`](documentation/design-system/styles-reference.css))
- **Video:** YouTube `youtube-nocookie.com` embeds
- **Hosting:** Hetzner (static files via SFTP)
- **CI/CD:** GitHub Actions — push to `main` triggers tests then deploy
- **Analytics:** Google Analytics 4
- **Tests:** Jest (`npm test`)

**Phase 2 (planned):** Migrate to Astro with Markdown/MDX content collections, Pagefind search, possibly Cloudflare Pages hosting.

---

## Project phases

See [`ROADMAP.md`](ROADMAP.md) for the full 13-phase plan. Current status:

| Phase | Focus | Status |
|-------|-------|--------|
| Phase 1 | Static HTML site — GY6 + Piaggio/Vespa guides, deploy pipeline, automated tasks | Largely complete |
| Phase 2 | Astro migration, MDX content, Pagefind search | Planned |
| Phase 3 | Electric scooters, additional models | Planned |
| Phase 4 | Wiki-style community contributions | Planned |
| Phase 5 | Automated content ingestion pipeline | Planned |
| Phase 6 | Interactive 3D / exploded-view models | Planned |
| Phase 7 | AI-powered repair assistant (chat) | Planned |
| Phase 8 | Mobile PWA / native app | Planned |

---

## Content sources

We draw from and cite: official manufacturer service manuals (Piaggio, GY6 variants), professional repair YouTube channels, scooter forums and communities (49ccScoot, ModernVespa, etc.), and community contributions. All 91 known sources are tracked in [`public/sources-registry.json`](../public/sources-registry.json).

---

## FAQ

**Can I use guides from this site in my own content?**  
Yes — CC BY-SA 4.0. Credit ISMR and link back, and apply the same licence to derivatives.

**I found incorrect information. How do I report it?**  
Open a GitHub issue or email [dexa88@gmail.com](mailto:dexa88@gmail.com).

**Can I contribute without knowing Git?**  
Yes. You can find videos, review guides, flag errors, or email a text draft to Den.

**When will electric scooters be added?**  
Phase 3. The MVP focuses on petrol GY6 and Piaggio/Vespa to maintain quality.

---

## Contact

- **Lead:** Den — [dexa88@gmail.com](mailto:dexa88@gmail.com)
- **Domain:** [ismr.online](https://ismr.online)
