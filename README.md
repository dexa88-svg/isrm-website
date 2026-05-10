# ISRM — Interactive Scooter Repair Manuals

A free, wiki-style repair reference for GY6 (Chinese 50/125/150cc) and Piaggio/Vespa scooters. Static HTML — no framework, no build step, no login required.

## What's inside

| Section | Description |
|---------|-------------|
| **Repair Guides** | Step-by-step guides: oil change, spark plug, CVT belt, carburetor, brakes, valve adjustment, and more |
| **Diagnostics** | Interactive no-start and fault-finding tools |
| **Parts & Compatibility** | Cross-reference table for consumables, tyres, and electrical parts across GY6 / Vespa / Primavera / Zip |
| **Models** | Overview of supported scooter families |
| **News** | Firmware releases, safety recalls, new guide announcements |

## Supported platforms

- GY6 50cc (139QMB engine) — La Souris, Sourini, Capri, BTC Riva, and most Chinese 50/125/150cc clones
- GY6 125/150cc (152QMI / 157QMJ)
- Piaggio Vespa LX / GTS 125–150 (4-stroke)
- Piaggio Primavera 125 i.e. 3V
- Piaggio Zip 50 2T / 125 4T

## Project structure

```
public/
├── index.html              # Landing page
├── styles.css              # Global stylesheet
├── script.js               # Shared JS (nav, search)
├── repair-guides/          # Individual guide pages
├── diagnostics/            # Interactive diagnostic tools
├── parts/                  # Parts & compatibility tables
├── models/                 # Model overview pages
├── news/                   # News & updates feed
├── videos/                 # Video index
└── data/                   # JSON data files
```

## Running locally

No build step needed — just open `public/index.html` in a browser, or serve with any static file server:

```bash
npx serve public
# or
python3 -m http.server 8080 --directory public
```

## Contributing

Corrections, missing part numbers, and additional guides are welcome. Open an issue or a PR — keep one topic per PR.

## License

Content is provided for informational purposes. No warranty — always verify specs against your specific model year and VIN before ordering parts or performing repairs.
