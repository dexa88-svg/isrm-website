#!/usr/bin/env python3
"""Add Open Graph + Twitter Card meta tags to all ISMR HTML pages."""

import re
from pathlib import Path

PUBLIC = Path("/Users/Dzianis_Paulavets/Documents/Claude/Projects/interactive scooter repair manuals - ISRM/public")
BASE_URL = "https://ismr.online"
OG_IMAGE = f"{BASE_URL}/og-image.jpg"

# rel_path → (url_path, seo_description)
PAGE_META = {
    "index.html": (
        "/",
        "Free wiki-style repair manuals for GY6 (139QMB, 152QMI, 157QMJ) and Piaggio/Vespa scooters. Step-by-step guides, interactive diagnostics, and parts cross-reference tables."
    ),
    "repair-guides/index.html": (
        "/repair-guides/",
        "Complete repair guide library for GY6 and Piaggio/Vespa scooters — oil changes, spark plugs, carburetor, CVT belt, brakes, valve adjustment, and more."
    ),
    "repair-guides/gy6-oil-change-guide.html": (
        "/repair-guides/gy6-oil-change-guide.html",
        "Step-by-step GY6 engine oil change guide. Correct oil spec, drain and refill procedure for 50cc, 125cc, and 150cc scooters (139QMB, 152QMI, 157QMJ)."
    ),
    "repair-guides/gy6-spark-plug-guide.html": (
        "/repair-guides/gy6-spark-plug-guide.html",
        "GY6 spark plug replacement guide. Correct plug specs (NGK C7HSA / CR7HSA), gap settings, and torque for 50cc, 125cc, and 150cc engines."
    ),
    "repair-guides/gy6-air-filter-guide.html": (
        "/repair-guides/gy6-air-filter-guide.html",
        "GY6 air filter inspection and replacement guide. Paper vs foam element, cleaning procedure, and refit tips for Chinese 50/125/150cc scooters."
    ),
    "repair-guides/gy6-valve-adjustment-guide.html": (
        "/repair-guides/gy6-valve-adjustment-guide.html",
        "GY6 valve clearance adjustment guide. Correct intake and exhaust clearances, feeler gauge procedure, and cold-engine timing tips."
    ),
    "repair-guides/gy6-carburetor-adjustment-guide.html": (
        "/repair-guides/gy6-carburetor-adjustment-guide.html",
        "GY6 carburetor idle adjustment guide. Idle screw, air/fuel mixture screw settings, and pilot jet tuning for PD18/PZ19/PZ24 carbs."
    ),
    "repair-guides/gy6-carburetor-cleaning-guide.html": (
        "/repair-guides/gy6-carburetor-cleaning-guide.html",
        "GY6 carburetor cleaning guide — full disassembly, jet soaking, passage blow-out, and reassembly for Chinese 50/125/150cc scooters."
    ),
    "repair-guides/gy6-carburetor-jetting-guide.html": (
        "/repair-guides/gy6-carburetor-jetting-guide.html",
        "GY6 carburetor jetting guide with main jet size charts by altitude, air filter, and exhaust. Tune your 50/125/150cc scooter for optimal performance."
    ),
    "repair-guides/carburetor-adjustment-tuning-guide.html": (
        "/repair-guides/carburetor-adjustment-tuning-guide.html",
        "Advanced carburetor adjustment and tuning guide for GY6 scooters. Needle clip position, main jet, pilot jet, and choke circuit explained."
    ),
    "repair-guides/gy6-cvt-variator-belt-replacement.html": (
        "/repair-guides/gy6-cvt-variator-belt-replacement.html",
        "GY6 CVT belt and variator replacement guide. Belt size spec, roller weight selection, and step-by-step variator disassembly for 50/125/150cc scooters."
    ),
    "repair-guides/scooter-cvt-clutch-variator-guide.html": (
        "/repair-guides/scooter-cvt-clutch-variator-guide.html",
        "Complete scooter CVT system guide — variator, rollers, clutch bell, torque driver, and belt explained for GY6 and Piaggio scooters."
    ),
    "repair-guides/gy6-brake-pads-guide.html": (
        "/repair-guides/gy6-brake-pads-guide.html",
        "GY6 scooter brake pad replacement guide. Front disc and rear drum pad specs, wear indicators, and bleeding procedure for 50/125/150cc models."
    ),
    "repair-guides/gy6-brake-fluid-guide.html": (
        "/repair-guides/gy6-brake-fluid-guide.html",
        "GY6 scooter brake fluid change guide. DOT 3 vs DOT 4, bleeding sequence, and reservoir refill procedure for front hydraulic disc brakes."
    ),
    "repair-guides/gy6-ignition-coil-guide.html": (
        "/repair-guides/gy6-ignition-coil-guide.html",
        "GY6 ignition coil testing and replacement guide. Ohm specs for primary and secondary coil, CDI wiring, and spark test procedure."
    ),
    "diagnostics/index.html": (
        "/diagnostics/",
        "Interactive diagnostic tools for GY6 and Piaggio/Vespa scooters — no-start troubleshooting, carburetor issues, CVT noise, EFI fault codes, and more."
    ),
    "diagnostics/gy6-no-start-troubleshooting.html": (
        "/diagnostics/gy6-no-start-troubleshooting.html",
        "Interactive no-start diagnostic tool for GY6 scooters. Step-by-step fault-finding for spark, fuel, compression, and electrical issues on 50/125/150cc engines."
    ),
    "diagnostics/gy6-air-leak-diagnosis.html": (
        "/diagnostics/gy6-air-leak-diagnosis.html",
        "GY6 intake air leak diagnosis guide. Symptoms, spray test procedure, and common leak points on the inlet manifold, carb boot, and gaskets."
    ),
    "diagnostics/gy6-carburetor-pilot-idle-jet.html": (
        "/diagnostics/gy6-carburetor-pilot-idle-jet.html",
        "Diagnose GY6 carburetor pilot/idle jet problems — rough idle, stalling, and lean bog at low throttle. Cleaning and replacement procedure."
    ),
    "diagnostics/gy6-cvt-roller-noise-diagnosis.html": (
        "/diagnostics/gy6-cvt-roller-noise-diagnosis.html",
        "Diagnose CVT roller and variator noise on GY6 scooters. Rattle, vibration, and judder causes — roller wear, flat spots, and variator face scoring."
    ),
    "diagnostics/gy6-dirty-buttons-no-start.html": (
        "/diagnostics/gy6-dirty-buttons-no-start.html",
        "GY6 scooter won't start due to dirty kill switch or starter button. Diagnosis and contact cleaning procedure for handlebar switches."
    ),
    "diagnostics/gy6-efi-cel-flash-codes.html": (
        "/diagnostics/gy6-efi-cel-flash-codes.html",
        "GY6 EFI check engine light flash code reader. Decode CEL blink patterns for fuel injection fault codes on Chinese 125/150cc EFI scooters."
    ),
    "diagnostics/gy6-efi-fuel-injection-troubleshooting.html": (
        "/diagnostics/gy6-efi-fuel-injection-troubleshooting.html",
        "GY6 EFI fuel injection troubleshooting guide. Injector, TPS, MAP sensor, O2 sensor, and ECU fault diagnosis for Chinese EFI scooters."
    ),
    "diagnostics/gy6-side-stand-kill-switch.html": (
        "/diagnostics/gy6-side-stand-kill-switch.html",
        "GY6 side stand kill switch diagnosis — scooter won't start in gear or dies when side stand is deployed. Test and bypass procedure."
    ),
    "diagnostics/piaggio-zip-100-troubleshooting.html": (
        "/diagnostics/piaggio-zip-100-troubleshooting.html",
        "Interactive troubleshooting guide for Piaggio Zip 50/100. No-start, poor idle, and performance issues on the 2-stroke and 4-stroke Zip platform."
    ),
    "parts/index.html": (
        "/parts/",
        "Parts compatibility and cross-reference tables for GY6, Vespa LX/GTS, Primavera 125, and Piaggio Zip scooters — tyres, batteries, spark plugs, belts, and consumables."
    ),
    "models/index.html": (
        "/models/",
        "Overview of all scooter platforms covered by ISMR — GY6 50/125/150cc, Vespa LX/GTS, Primavera 125, and Piaggio Zip 50/125."
    ),
    "models/la-souris-sourini-city-overview.html": (
        "/models/la-souris-sourini-city-overview.html",
        "Technical overview of the La Souris / Sourini City GY6 50cc scooter (139QMB engine). Specs, service intervals, and known issues."
    ),
    "models/piaggio-zip-100-technical-overview.html": (
        "/models/piaggio-zip-100-technical-overview.html",
        "Piaggio Zip 50 2T and 125 4T technical overview — engine specs, CVT specs, service intervals, and model year differences."
    ),
    "models/vespa-primavera-125-technical-overview.html": (
        "/models/vespa-primavera-125-technical-overview.html",
        "Vespa Primavera 125 i.e. 3V technical overview — fuel injection specs, service schedule, and common fault codes."
    ),
    "news/index.html": (
        "/news/",
        "Latest news for ISMR — new repair guides, safety recalls, firmware updates, and community announcements for GY6 and Piaggio/Vespa scooter owners."
    ),
    "videos/index.html": (
        "/videos/",
        "Curated repair and maintenance video guides for GY6 and Piaggio/Vespa scooters, with annotations and step-by-step companion text."
    ),
    "videos/gy6-carburetor-intake-change-tutorial.html": (
        "/videos/gy6-carburetor-intake-change-tutorial.html",
        "Video tutorial: GY6 carburetor and intake manifold change on a 50/125/150cc scooter. Annotated step-by-step with parts list."
    ),
}


def make_og_block(title, description, url):
    return (
        f'  <meta name="description" content="{description}">\n'
        f'  <link rel="canonical" href="{url}">\n'
        f'  <meta property="og:type" content="website">\n'
        f'  <meta property="og:url" content="{url}">\n'
        f'  <meta property="og:title" content="{title}">\n'
        f'  <meta property="og:description" content="{description}">\n'
        f'  <meta property="og:site_name" content="ISMR — Interactive Scooter Manuals for Repair">\n'
        f'  <meta property="og:image" content="{OG_IMAGE}">\n'
        f'  <meta name="twitter:card" content="summary_large_image">\n'
        f'  <meta name="twitter:title" content="{title}">\n'
        f'  <meta name="twitter:description" content="{description}">\n'
        f'  <meta name="twitter:image" content="{OG_IMAGE}">'
    )


updated = skipped = missing = 0

for rel_path, (url_path, description) in PAGE_META.items():
    fpath = PUBLIC / rel_path
    if not fpath.exists():
        print(f"MISSING : {rel_path}")
        missing += 1
        continue

    content = fpath.read_text(encoding="utf-8")

    if 'og:url' in content:
        print(f"SKIP    : {rel_path}  (already has OG tags)")
        skipped += 1
        continue

    m = re.search(r'<title>(.*?)</title>', content)
    title = m.group(1) if m else "ISMR"
    url = f"{BASE_URL}{url_path}"
    og_block = make_og_block(title, description, url)

    new_content = re.sub(
        r'(<meta name="viewport"[^>]*/?>)',
        r'\1\n' + og_block,
        content,
        count=1
    )

    if new_content == content:
        print(f"WARN    : {rel_path}  (no viewport tag found — skipped)")
        continue

    fpath.write_text(new_content, encoding="utf-8")
    print(f"OK      : {rel_path}")
    updated += 1

print(f"\n{'='*50}")
print(f"Updated : {updated}")
print(f"Skipped : {skipped}")
print(f"Missing : {missing}")
