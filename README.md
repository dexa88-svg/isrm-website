# ISMR — Interactive Scooter Manuals for Repair

A free, wiki-style repair reference for GY6 and Piaggio/Vespa scooters.  
Live at **[ismr.online](https://ismr.online)** — static HTML, no framework, no login required.

## What's inside

| Section | Description |
|---------|-------------|
| **Repair Guides** | Step-by-step procedures: oil change, spark plug, CVT belt, carburetor, brakes, valve adjustment, and more |
| **Diagnostics** | Interactive fault-finding tools and symptom-to-solution guides |
| **Parts & Compatibility** | Cross-reference table for consumables, tyres, and electrical parts |
| **Models** | Technical overviews for each supported scooter family |
| **Videos** | Curated video tutorials with embedded YouTube players |

## Supported scooters (Phase 1 scope)

- **GY6 50cc** (139QMB) — BTC Riva, La Souris Sourini/City, Santini Capri, and Chinese-market clones
- **GY6 125/150cc** (152QMI / 157QMJ)
- **Piaggio Vespa Primavera** 125 i.e. 3V
- **Piaggio Vespa Sprint** 125
- **Piaggio Zip** 50 2T / 100 4T

Both carburettor and fuel-injection variants. Petrol only — electric scooters are out of scope until Phase 3.

## Project structure

```
public/               # Everything deployed to ismr.online
├── index.html
├── styles.css
├── script.js
├── load-stats.js
├── repair-guides/
├── diagnostics/
├── parts/
├── models/
├── news/
├── videos/
└── data/             # stats.json and other JSON data files

_dev/                 # Dev docs and tooling — never deployed
├── GUIDE-STRUCTURE.md
├── PROJECT-SCOPE.md
├── ROADMAP.md
├── PAGE-UPDATE-TRACKING.md
├── documentation/
└── scheduled-tasks-updated/

scripts/
└── generate-stats.js # Counts guide pages → writes public/data/stats.json

tests/                # Jest test suite
```

## Running locally

```bash
python3 -m http.server 8080 --directory public
# or
npx serve public
```

No build step — what's in `public/` is what gets served.

## NPM scripts

```bash
npm test                  # Run Jest test suite
npm run test:coverage     # Run tests with coverage report
npm run generate-stats    # Recount guides → update public/data/stats.json
```

Run `generate-stats` before deploying if you've added or removed guide pages.

## Deploy pipeline

Push to `main` → GitHub Actions runs `npm test` → on pass, runs `generate-stats` → uploads `public/` to Hetzner via SFTP. Live within ~30 seconds. See `_dev/documentation/FTP-AUTO-DEPLOY-PROCESS.md` for full details.

## Scheduled automation

Three Claude tasks run automatically against this repo:

| Task | Schedule | Purpose |
|------|----------|---------|
| `isrm-content-sync` | Daily 08:01 | Discover and generate new HTML guide pages |
| `isrm-design-compliance` | Mon 09:00 | Audit all pages; write compliance report to `_dev/documentation/design-system/` |
| `isrm-consistency-check` | Daily 10:01 | Fix broken links, enforce scope, sync manifest |

Prompts live in `_dev/scheduled-tasks-updated/`.

## Contributing

### Content standards

Every repair guide must include:
- At least one embedded video (use `youtube-nocookie.com`, not `youtube.com`)
- Step-by-step instructions
- Tools and parts list
- Difficulty rating and time estimate
- Safety warnings
- Source attribution
- A "Last Updated" date

See `_dev/GUIDE-STRUCTURE.md` for the full HTML template, and `_dev/PAGE-UPDATE-TRACKING.md` for the date policy.

### Scope

In scope: GY6 engines (50–150cc), Piaggio Vespa Primavera / Sprint / Zip. Petrol only.  
See `_dev/PROJECT-SCOPE.md` for the canonical scope definition.

### Submitting

Open a PR — one topic per PR. If you can't use Git, email [dexa88@gmail.com](mailto:dexa88@gmail.com) with your draft.

## AI agent instructions

If you are an AI working in this repo, read `CLAUDE.md` first. It contains the design system, content standards, deploy pipeline, and architectural constraints that override defaults.

## License

Content is licensed under **CC BY-SA 4.0** (Creative Commons Attribution-ShareAlike 4.0). You may use, modify, and share it as long as you credit the source and apply the same license to derivatives.

Videos are linked, not hosted — they retain their original creator's licence.

Always verify specifications against your specific model year and VIN before ordering parts or performing repairs. No warranty is implied.
