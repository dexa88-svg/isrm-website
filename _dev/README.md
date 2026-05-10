# ISMR — Interactive Scooter Manuals for Repair

**Your free, community-driven repair guide for scooters (GY6, Vespa, Piaggio, and more)**

A wiki-style repair manual for DIY scooter owners featuring:
- 📖 Step-by-step repair guides with **videos**
- 🔧 Parts compatibility & sourcing
- 🚨 Troubleshooting & diagnostics
- 🎯 Model-specific technical data
- 👥 Community contributions & updates

---

## Quick Links

- **[Start Repairing](repair-guides/)** — Browse all repair guides
- **[Find Parts](parts/)** — OEM numbers, compatibility, sourcing
- **[Troubleshoot Issues](diagnostics/)** — Symptom-to-solution guides
- **[Model Overview](models/)** — Specs, quirks, maintenance schedules
- **[Watch Videos](videos/)** — Video tutorials & playlists

---

## For New Contributors

### Creating a Repair Guide

Every repair guide follows a **standardized structure** with video support:

1. **Read the Template** → [`GUIDE-STRUCTURE.md`](GUIDE-STRUCTURE.md)
   - Complete HTML template
   - Video embedding best practices
   - Metadata requirements
   - Quality checklist

2. **Find Videos** → [`VIDEO-SOURCING.md`](VIDEO-SOURCING.md)
   - Where to find repair videos
   - Attribution & licensing
   - Embedding tutorials

3. **See an Example** → [`repair-guides/gy6-carburetor-adjustment-guide.html`](repair-guides/gy6-carburetor-adjustment-guide.html)
   - Reference implementation
   - Video placement examples
   - Inline video tips

### Key Requirements

✅ **Every guide must include:**
- Minimum 1 embedded video (YouTube, Vimeo, or self-hosted)
- Step-by-step text instructions
- Tools & parts list
- Difficulty & time estimate
- Safety warnings
- Source attribution
- Related videos section

### Folder Structure

```
ISMR/
├── repair-guides/       # Step-by-step repair procedures
├── parts/              # Parts lookup & compatibility
├── diagnostics/        # Troubleshooting guides
├── models/             # Scooter model overviews
├── videos/             # Video playlists & resources
├── community/          # Community discussions, FAQs
│
├── GUIDE-STRUCTURE.md  # How to create a guide (with videos)
├── VIDEO-SOURCING.md   # How to find & embed videos
├── DESIGN-SYSTEM.md    # UI/UX guidelines
├── PHASE0-GUIDANCE.md  # Project phase definitions
└── README.md           # This file
```

---

## Supported Scooters (MVP)

### GY6 Benzine 50cc / 125cc / 150cc
- Engine codes: **139QMB** (50cc), **152QMI** (125cc), **157QMJ** (150cc)
- Models: BTC Riva, La Souris Sourini/City, Santini Capri, and Chinese-market variants
- Fuel: Carburetor & Fuel Injector versions
- Content: Oil changes, carburetor tuning, CVT belt, valve adjustments, cooling system

### Piaggio/Vespa (Coming Soon)
- **Vespa Primavera** (50cc, 125cc)
- **Vespa Sprint** (50cc, 125cc)
- **Vespa Zip** (50cc, 125cc)
- Fuel: Carburetor & Fuel Injector

**Phases 3+:** Electric scooters, motorcycles, ATVs

---

## Content Sources

We pull trusted information from:
- 📘 Official manufacturer manuals (Piaggio, Yamaha, etc.)
- 🎥 Professional repair YouTube channels & creators
- 💬 Scooter forums & communities (49ccScoot, VespaForums, etc.)
- 🛠️ Professional mechanics & certified shops
- 👥 Community contributions (you!)

**All sources are cited & credited.**

---

## Technology Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript (no frameworks)
- **Styling:** CSS variables for theming
- **Video:** YouTube, Vimeo, self-hosted embeds
- **Hosting:** Static site (GitHub Pages, Netlify, or custom)
- **Future:** Astro static site generator, 3D model viewer, AI diagnostics

---

## Getting Started as a Contributor

### Option 1: Submit via GitHub
1. Fork the repo
2. Create a branch: `git checkout -b add/my-guide`
3. Add your guide HTML file to the appropriate folder
4. Commit & push: `git push origin add/my-guide`
5. Create a pull request with your guide

### Option 2: Submit via Discussion
Can't use Git? No problem.
- [Start a discussion](https://github.com/ISMR/discussions)
- Share your guide as a text/HTML snippet
- We'll format & integrate it

### Option 3: Direct Contribution
Working with Den? Email or DM your guide draft and we'll handle formatting.

---

## Why Videos?

Every guide includes at least one video because:
- ✅ **Visual learning** is how most people prefer to learn mechanics
- ✅ **Confidence** — seeing someone do it first builds confidence
- ✅ **Accessibility** — written + video + images covers all learning styles
- ✅ **Engagement** — users are more likely to complete a repair with video support

---

## License

All content is licensed under **CC BY-SA 4.0** (Creative Commons Attribution-ShareAlike).

This means:
- ✅ You can use, modify, and share
- ✅ You must credit the original author(s)
- ✅ Any derivative work must use the same license

Videos are linked, not hosted, so they retain their original creator's license.

---

## Project Phases

| Phase | Focus | Status |
|-------|-------|--------|
| **Phase 0** | Project definition & structure | 🔄 In Progress |
| **Phase 1** | MVP launch (GY6 guides + videos) | 📋 Planned |
| **Phase 2** | Piaggio/Vespa guides | 📋 Planned |
| **Phase 3** | Parts sourcing & compatibility | 📋 Planned |
| **Phase 4** | Community features (comments, uploads) | 📋 Planned |
| **Phase 5** | 3D interactive models | 📋 Planned |
| **Phase 6** | AI-powered diagnostics | 📋 Planned |
| **Phase 7** | Mobile app | 📋 Planned |

See [`PHASE0-GUIDANCE.md`](PHASE0-GUIDANCE.md) for detailed phase definitions.

---

## FAQ

**Q: Can I use your guides for my YouTube channel?**  
A: Yes! They're CC BY-SA 4.0 licensed. Just credit ISMR and link back.

**Q: What if I find incorrect information in a guide?**  
A: [Report it here](https://github.com/ISMR/issues). We'll investigate & correct it.

**Q: Can I contribute without technical knowledge?**  
A: Absolutely. You can contribute by: finding videos, reviewing guides, translating, or just pointing out errors.

**Q: How do I propose a new scooter model?**  
A: [Start a discussion](https://github.com/ISMR/discussions/new). We prioritize based on community demand.

**Q: When will you add [electric scooter model]?**  
A: Phase 2+. We're focusing on benzine scooters (GY6, Vespa) for MVP to maintain quality.

---

## Keep in Touch

- **GitHub Issues:** [Report bugs or request features](https://github.com/ISMR/issues)
- **GitHub Discussions:** [Ask questions, share ideas](https://github.com/ISMR/discussions)
- **Email:** [dexa88@gmail.com](mailto:dexa88@gmail.com)
- **Community Forums:** [Coming soon]

---

## Credits

- **Lead:** Den (dexa88@gmail.com)
- **Contributors:** [You?]

---

**Last Updated:** 2026-05-07  
**Version:** 1.0 (MVP Foundation)

