#!/usr/bin/env python3
"""Add Schema.org JSON-LD structured data to ISMR pages.

Security hardening:
  - All strings serialized via json.dumps() — handles quotes, backslashes,
    Unicode, and all special characters correctly.
  - </script> escaped as <\\/script> after serialization to prevent
    HTML tag injection from inside a <script> block (the one XSS risk
    in JSON-LD even on fully static sites).
  - All URLs hardcoded as https://.
  - No user-supplied data is ever embedded.
  - type="application/ld+json" — tells browsers this is structured data,
    not executable JavaScript.
"""

import json
import re
from pathlib import Path

PUBLIC = Path(
    "/Users/Dzianis_Paulavets/Documents/Claude/Projects/"
    "interactive scooter repair manuals - ISRM/public"
)
BASE_URL = "https://ismr.online"
MARKER = "application/ld+json"  # skip if already injected


# ── Security helpers ──────────────────────────────────────────────────────────

def safe_json(obj: dict) -> str:
    """Serialize obj to pretty JSON and escape </script> to prevent breakout."""
    raw = json.dumps(obj, ensure_ascii=False, indent=2)
    # Replacing </ with <\/ is valid JSON and stops the parser from treating
    # the sequence as an HTML closing tag.
    return raw.replace("</", r"<\/")


def step(name: str, text: str) -> dict:
    return {"@type": "HowToStep", "name": name, "text": text}


def tool(name: str) -> dict:
    return {"@type": "HowToTool", "name": name}


def cost(value: str, currency: str = "EUR") -> dict:
    return {"@type": "MonetaryAmount", "currency": currency, "value": value}


# ── Schema definitions ────────────────────────────────────────────────────────

SCHEMAS: dict[str, dict] = {}

# ── Homepage: WebSite ─────────────────────────────────────────────────────────
SCHEMAS["index.html"] = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ISMR — Interactive Scooter Manuals for Repair",
    "url": f"{BASE_URL}/",
    "description": (
        "Free wiki-style repair manuals for GY6 (139QMB, 152QMI, 157QMJ) and "
        "Piaggio/Vespa scooters. Step-by-step guides, interactive diagnostics, "
        "and parts cross-reference tables."
    ),
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": f"{BASE_URL}/repair-guides/?q={{search_term_string}}",
        },
        "query-input": "required name=search_term_string",
    },
}

# ── Repair guides: HowTo ──────────────────────────────────────────────────────

SCHEMAS["repair-guides/gy6-oil-change-guide.html"] = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "GY6 Engine Oil Change Guide",
    "description": (
        "Step-by-step GY6 engine oil change for 50cc (139QMB), 125cc, "
        "and 150cc (157QMJ) scooters. Correct oil spec, drain and refill procedure."
    ),
    "url": f"{BASE_URL}/repair-guides/gy6-oil-change-guide.html",
    "totalTime": "PT30M",
    "estimatedCost": cost("8"),
    "tool": [
        tool("17 mm socket or spanner"),
        tool("Drain tray (minimum 1 litre)"),
        tool("10W-40 JASO MA/MA2 motorcycle oil"),
        tool("Replacement drain bolt crush washer (12 mm)"),
        tool("Clean rag"),
    ],
    "step": [
        step("Warm the engine",
             "Run the engine for 3–5 minutes. Warm oil drains more completely "
             "and carries more contaminants with it. Do not bring to full "
             "temperature — the oil will be dangerously hot."),
        step("Place scooter on centre stand",
             "Position the scooter on a level surface on its centre stand. "
             "Tilt slightly to the right to direct oil toward the drain plug."),
        step("Position drain tray",
             "Place the drain tray beneath the engine crankcase drain bolt "
             "at the lowest point of the engine."),
        step("Remove the oil filler cap",
             "Open the dipstick/filler cap on top of the engine first. "
             "This allows air in and improves drainage speed."),
        step("Remove the drain bolt",
             "Unscrew the 17 mm drain bolt counter-clockwise. Hold the tray "
             "underneath — oil flows immediately. Allow 3–5 minutes for full "
             "drainage."),
        step("Inspect the drain bolt",
             "Check for metallic particles. Fine silver flakes are normal wear. "
             "Large chunks indicate engine damage. Clean the bolt threads."),
        step("Replace crush washer and refit drain bolt",
             "Fit a new crush washer and reinstall the drain bolt. Tighten to "
             "18–20 Nm — do not overtighten; the aluminium crankcase threads "
             "strip easily."),
        step("Refill with new oil",
             "Pour new 10W-40 JASO MA oil through the filler cap using a small "
             "funnel. GY6 50cc takes 0.7–0.8 L; 125/150cc takes 0.9–1.0 L."),
        step("Check oil level",
             "Insert the dipstick without threading it in (rest it on the "
             "threads). Fill to the upper mark but not above it."),
        step("Start the engine and check for leaks",
             "Run for 2 minutes, shut off, wait 2 minutes, and recheck level. "
             "Inspect the drain bolt area for seepage."),
    ],
}

SCHEMAS["repair-guides/gy6-spark-plug-guide.html"] = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "GY6 Spark Plug Replacement Guide",
    "description": (
        "How to replace the spark plug on a GY6 scooter engine (139QMB, 157QMJ). "
        "Covers plug selection, gap check, and installation torque."
    ),
    "url": f"{BASE_URL}/repair-guides/gy6-spark-plug-guide.html",
    "totalTime": "PT20M",
    "estimatedCost": cost("5"),
    "tool": [
        tool("16 mm spark plug socket"),
        tool("Socket wrench with extension"),
        tool("Feeler gauge"),
        tool("NGK C7HSA or CR7HSA spark plug"),
        tool("Compressed air or clean rag"),
    ],
    "step": [
        step("Let the engine cool",
             "Wait at least 10 minutes after riding. Removing a plug from a hot "
             "aluminium head risks seizing the threads."),
        step("Remove the spark plug cap",
             "Pull the HT cap straight off the plug — grip the cap body, never "
             "the wire, to avoid damaging the lead connection inside."),
        step("Clean the plug recess",
             "Blow out any debris around the plug with compressed air or wipe "
             "with a dry rag. Grit that falls into an open cylinder bore can "
             "score it."),
        step("Remove the old plug",
             "Unscrew counter-clockwise with the 16 mm socket. If tight, apply "
             "penetrating oil and wait 5 minutes. Do not force it."),
        step("Inspect the old plug electrode",
             "Light tan or grey is normal. Black and sooty indicates rich "
             "mixture. White or blistered indicates lean running or overheating. "
             "Oily black indicates oil burning."),
        step("Check the new plug gap",
             "Measure with a feeler gauge — gap should be 0.6–0.7 mm for GY6 "
             "engines. Adjust by bending only the side (ground) electrode."),
        step("Thread the new plug in by hand",
             "Start threading by hand for the first 3–4 turns to avoid "
             "cross-threading the aluminium head. It should turn smoothly "
             "without resistance."),
        step("Torque the plug",
             "Tighten: hand-tight plus a quarter turn, or 10–14 Nm with a "
             "torque wrench. Do not apply anti-seize paste — the torque spec "
             "assumes bare threads."),
        step("Reconnect the spark plug cap",
             "Push the HT cap firmly onto the plug until it seats fully. "
             "A loose cap causes intermittent misfires."),
        step("Start the engine and verify",
             "Confirm clean idle and smooth throttle response through the rev "
             "range."),
    ],
}

SCHEMAS["repair-guides/gy6-air-filter-guide.html"] = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "GY6 Air Filter Inspection and Replacement Guide",
    "description": (
        "How to inspect, clean, or replace the air filter on a GY6 "
        "50cc/125cc/150cc scooter (paper and foam element types)."
    ),
    "url": f"{BASE_URL}/repair-guides/gy6-air-filter-guide.html",
    "totalTime": "PT20M",
    "estimatedCost": cost("6"),
    "tool": [
        tool("Phillips or flat-blade screwdriver (airbox cover)"),
        tool("Replacement air filter element"),
        tool("Clean rag"),
        tool("Compressed air (for foam element cleaning)"),
    ],
    "step": [
        step("Access the airbox",
             "The airbox is mounted on the right side of the engine bay. "
             "Remove the side panel if fitted to reach the airbox cover screws."),
        step("Remove the airbox cover",
             "Unscrew the cover fasteners and lift the cover off. Note the "
             "orientation for refitting."),
        step("Remove and inspect the filter element",
             "Lift out the filter element. Determine if it is a paper or foam "
             "type — they are serviced differently."),
        step("Clean or replace",
             "Paper filter: tap gently to dislodge loose dust — do not wash or "
             "blow with compressed air. Foam filter: wash in warm soapy water, "
             "rinse, dry fully, then lightly re-oil with foam air filter oil. "
             "Replace a paper filter if torn, deformed, or heavily soiled."),
        step("Inspect the airbox interior",
             "Wipe any loose debris inside the airbox before fitting the new "
             "element."),
        step("Refit the filter element and cover",
             "Seat the filter element correctly. Refit the cover and tighten "
             "all screws evenly. A misseated filter allows unfiltered air into "
             "the engine."),
        step("Start the engine and verify",
             "Check for smooth idle. A clogged filter causes rich running and "
             "black smoke; an improperly seated filter causes lean running."),
    ],
}

SCHEMAS["repair-guides/gy6-valve-adjustment-guide.html"] = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "GY6 Valve Clearance Adjustment Guide",
    "description": (
        "How to adjust intake and exhaust valve clearances on a GY6 OHC engine "
        "(139QMB, 157QMJ) at cold engine temperature."
    ),
    "url": f"{BASE_URL}/repair-guides/gy6-valve-adjustment-guide.html",
    "totalTime": "PT60M",
    "tool": [
        tool("Feeler gauge set"),
        tool("8 mm spanner (valve cover bolts)"),
        tool("8 mm or 10 mm socket (rocker lock nut)"),
        tool("Flat-blade screwdriver (adjuster screw)"),
        tool("New valve cover gasket (recommended)"),
    ],
    "step": [
        step("Work on a cold engine",
             "Valve clearances must be set cold — wait at least 2 hours after "
             "last use, typically at ambient temperature (below 30°C)."),
        step("Remove the valve cover",
             "Remove the spark plug cap, then the valve cover bolts. Lift off "
             "the cover carefully — do not drop the small O-rings."),
        step("Bring piston to TDC on compression stroke",
             "Rotate the crankshaft by hand until the piston is at Top Dead "
             "Centre (TDC) on the compression stroke — both rocker arms must "
             "be loose (no cam lobe pressure on either)."),
        step("Confirm TDC alignment mark",
             "Align the TDC mark on the flywheel with the index mark on the "
             "crankcase. The camshaft timing mark should also align with its "
             "reference mark on the cylinder head."),
        step("Measure intake valve clearance",
             "Insert the correct feeler gauge blade between the intake rocker "
             "arm and valve stem. Standard GY6 clearance: 0.05–0.10 mm. The "
             "blade should slide with slight resistance."),
        step("Adjust intake valve clearance if needed",
             "Loosen the rocker lock nut with the socket. Turn the adjuster "
             "screw in or out to set the clearance. Hold the adjuster while "
             "retightening the lock nut, then recheck — tightening often "
             "changes the setting slightly."),
        step("Measure and adjust exhaust valve clearance",
             "Repeat on the exhaust rocker. Standard GY6 exhaust clearance: "
             "0.10–0.15 mm."),
        step("Refit the valve cover",
             "Clean the mating surfaces. Fit a new cover gasket if the old one "
             "is compressed or damaged. Tighten cover bolts evenly to 8–10 Nm."),
        step("Refit spark plug cap and test",
             "Start the engine. A correctly adjusted engine is quieter at idle. "
             "Persistent loud ticking after adjustment requires recheck."),
    ],
}

SCHEMAS["repair-guides/gy6-carburetor-adjustment-guide.html"] = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "GY6 Carburetor Idle Adjustment Guide",
    "description": (
        "How to adjust carburetor idle speed and air/fuel mixture on a "
        "GY6 50cc/125cc/150cc scooter (PD18/PZ19/PZ24 carbs)."
    ),
    "url": f"{BASE_URL}/repair-guides/gy6-carburetor-adjustment-guide.html",
    "totalTime": "PT30M",
    "tool": [
        tool("Flat-blade screwdriver"),
        tool("Tachometer (optional — for accurate idle RPM)"),
    ],
    "step": [
        step("Warm the engine",
             "Run the engine for 5–10 minutes until fully warm. Adjustments "
             "made cold will shift once the engine reaches operating temperature."),
        step("Locate the idle speed screw",
             "The idle speed (throttle stop) screw has a spring and sits on the "
             "right side of the carb body. Turning clockwise raises idle RPM."),
        step("Set base idle speed",
             "Turn the screw to achieve 1,400–1,600 RPM (or a steady warm "
             "idle). Use a tachometer if available."),
        step("Locate the pilot air/fuel mixture screw",
             "The mixture screw is often under a brass emissions cap on the "
             "left side of the carb body. Remove the cap with a small drill "
             "bit if it is present."),
        step("Find peak idle with the mixture screw",
             "Turn the mixture screw slowly counter-clockwise (richer), "
             "one quarter turn at a time, until idle speed peaks. Then turn "
             "slowly clockwise (leaner) until it just begins to drop. Back off "
             "one quarter turn to the peak position."),
        step("Readjust idle speed",
             "After setting the mixture, re-adjust the idle speed screw to the "
             "target RPM."),
        step("Test throttle response",
             "Snap the throttle briefly. The engine should rev cleanly with no "
             "stumble. A stumble on opening indicates lean mixture; black smoke "
             "indicates rich."),
    ],
}

SCHEMAS["repair-guides/gy6-carburetor-cleaning-guide.html"] = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "GY6 Carburetor Cleaning Guide",
    "description": (
        "Full disassembly and cleaning of the GY6 carburetor (PD18/PZ19/PZ24). "
        "Covers jet removal, soaking, passage blow-through, and reassembly."
    ),
    "url": f"{BASE_URL}/repair-guides/gy6-carburetor-cleaning-guide.html",
    "totalTime": "PT90M",
    "estimatedCost": cost("10"),
    "tool": [
        tool("Flat-blade and Phillips screwdrivers"),
        tool("Carburetor cleaner spray"),
        tool("Small parts tray or egg carton"),
        tool("Compressed air"),
        tool("Soft wire brush or toothbrush"),
        tool("New carburetor gasket kit (recommended)"),
    ],
    "step": [
        step("Remove the carburetor",
             "Turn off the fuel tap. Loosen the airbox clamp and throttle "
             "cable. Remove the two mounting bolts or inlet clamp. Disconnect "
             "the fuel line and overflow tubes."),
        step("Drain the float bowl",
             "Remove the float bowl drain screw (if fitted) or the bowl "
             "retaining screw to drain residual fuel into a rag."),
        step("Remove the float bowl",
             "Unscrew the bowl retaining screw and lower the bowl carefully."),
        step("Remove the float and needle valve",
             "Slide out the float pivot pin, lift out the float, and remove the "
             "needle valve. Inspect the needle valve tip for wear grooves."),
        step("Remove the main jet and pilot jet",
             "Unscrew the main jet (larger brass jet in the bowl centre) and "
             "pilot/slow jet (smaller, beside it). Keep them separate in the "
             "parts tray — do not mix sizes."),
        step("Spray all passages with carb cleaner",
             "Spray carb cleaner through every orifice: main jet hole, pilot "
             "jet hole, idle circuit port, mixture screw port, and emulsion tube "
             "holes. Spray until it exits clean from the other side."),
        step("Blow through with compressed air",
             "Blow compressed air through every passage after soaking. Hold "
             "jets up to a light — you must see clean daylight through the "
             "hole."),
        step("Reassemble in reverse order",
             "Reinstall jets, float assembly, bowl gasket, and float bowl. Do "
             "not overtighten the bowl screw — hand-tight plus one quarter "
             "turn."),
        step("Reinstall and test",
             "Refit the carb on the engine, reconnect fuel line and throttle "
             "cable, open the fuel tap, and start. Check for fuel leaks at the "
             "bowl and inlet manifold joint."),
    ],
}

SCHEMAS["repair-guides/gy6-carburetor-jetting-guide.html"] = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "GY6 Carburetor Jetting Guide",
    "description": (
        "How to select the correct main jet size for a GY6 carb based on "
        "altitude, air filter, and exhaust modifications."
    ),
    "url": f"{BASE_URL}/repair-guides/gy6-carburetor-jetting-guide.html",
    "totalTime": "PT45M",
    "tool": [
        tool("Flat-blade screwdriver"),
        tool("Main jet set (GY6 M5 thread, various sizes)"),
        tool("Spark plug for reading"),
    ],
    "step": [
        step("Identify your current main jet size",
             "Remove the float bowl and unscrew the main jet. The size is "
             "stamped on the brass body (e.g., '98', '102', '105')."),
        step("Determine your altitude",
             "Sea level to 500 m: use stock jetting. 500–1,000 m: go one size "
             "down (leaner). Above 1,000 m: go two sizes down. Thinner air "
             "requires less fuel."),
        step("Account for engine modifications",
             "Performance exhaust: +2 to +4 jet sizes. High-flow air filter: "
             "+2 sizes. Stock engine: no change from the altitude baseline."),
        step("Install the selected jet and test-ride",
             "Fit the new jet, reassemble, and ride for at least 10 minutes "
             "including full-throttle acceleration and steady cruising."),
        step("Read the spark plug",
             "Remove and inspect the plug electrode while still warm. Light "
             "tan/grey means correct. Black and sooty means too rich (go "
             "smaller). White or pale means too lean (go larger). Repeat until "
             "the plug reads light tan."),
    ],
}

SCHEMAS["repair-guides/carburetor-adjustment-tuning-guide.html"] = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Advanced Carburetor Tuning Guide for GY6 Scooters",
    "description": (
        "Needle clip position, main jet, pilot jet, and choke circuit explained "
        "for precise GY6 carburetor tuning across the full throttle range."
    ),
    "url": f"{BASE_URL}/repair-guides/carburetor-adjustment-tuning-guide.html",
    "totalTime": "PT60M",
    "tool": [
        tool("Flat-blade screwdriver"),
        tool("Needle-nose pliers (for needle clip)"),
        tool("Main and pilot jet sets"),
        tool("Spark plug for reading"),
    ],
    "step": [
        step("Understand the three fuel circuits",
             "Idle (0–1/4 throttle): pilot jet and mixture screw. Mid-range "
             "(1/4–3/4 throttle): needle height and clip position. Full throttle: "
             "main jet size. Each circuit must be tuned in order."),
        step("Set pilot jet and mixture screw",
             "Start with the idle circuit. Adjust the mixture screw to peak "
             "idle RPM as described in the basic carburetor adjustment guide."),
        step("Diagnose mid-range by needle clip position",
             "Hesitant or lean from 1/4 to 3/4 throttle: lower the needle clip "
             "one groove (raises the needle, richer). Boggy or rich in mid-range: "
             "raise the clip (lowers needle, leaner). Most GY6 needles have "
             "3–5 clip grooves."),
        step("Set main jet for full throttle",
             "Perform a wide-open throttle run. Read the plug after. Adjust "
             "jet size until the plug reads light tan at full throttle."),
        step("Verify the choke circuit",
             "The choke should only be needed when cold. If the engine only "
             "runs cleanly with choke partially closed when warm, the pilot "
             "jet is too small or partially blocked."),
    ],
}

SCHEMAS["repair-guides/gy6-cvt-variator-belt-replacement.html"] = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "GY6 CVT Belt and Variator Replacement Guide",
    "description": (
        "How to replace the CVT drive belt and variator rollers on a "
        "GY6 50/125/150cc scooter."
    ),
    "url": f"{BASE_URL}/repair-guides/gy6-cvt-variator-belt-replacement.html",
    "totalTime": "PT60M",
    "estimatedCost": cost("25"),
    "tool": [
        tool("Screwdrivers or 8 mm socket (CVT cover)"),
        tool("Variator holding tool or strap wrench"),
        tool("19 mm or 22 mm socket (variator nut)"),
        tool("Torque wrench"),
        tool("Replacement CVT belt (669x18x30 for most 50cc GY6)"),
        tool("Replacement variator rollers"),
    ],
    "step": [
        step("Remove the CVT left cover",
             "Remove the 8–10 screws securing the left-side CVT cover. Tap "
             "gently with a rubber mallet if stuck — do not pry on the mating "
             "faces."),
        step("Inspect the old belt",
             "Before removing, note the belt routing and check for cracking, "
             "fraying, or glazed contact faces. A glazed belt slips and causes "
             "poor acceleration."),
        step("Lock the variator and remove the nut",
             "Use a variator holding tool or strap wrench. Remove the variator "
             "nut (right-hand thread, counter-clockwise)."),
        step("Disassemble the variator",
             "Remove the face plate, ramp plate, and rollers. Note roller "
             "weight (stamped in grams) and inspect each roller for flat spots "
             "or worn edges."),
        step("Remove the drive belt",
             "Slip the old belt off the variator and route it out past the "
             "clutch bell. Note the direction-of-travel arrow if printed on "
             "the belt."),
        step("Fit the new belt",
             "Route the new belt over the rear clutch bell first, then seat "
             "it on the variator. Ensure correct seating in both pulley "
             "grooves."),
        step("Reassemble the variator",
             "Install new or inspected rollers, ramp plate, and face plate. "
             "Tighten the variator nut to 40–50 Nm. Recheck belt seating."),
        step("Refit the CVT cover and test-ride",
             "Torque all cover bolts evenly. Test-ride progressively — new "
             "belts require 30–50 km to fully seat."),
    ],
}

SCHEMAS["repair-guides/scooter-cvt-clutch-variator-guide.html"] = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Scooter CVT System Service Guide — Variator, Rollers, and Clutch",
    "description": (
        "Complete guide to servicing the CVT system on GY6 and Piaggio scooters "
        "— variator, rollers, clutch bell, torque driver, and belt."
    ),
    "url": f"{BASE_URL}/repair-guides/scooter-cvt-clutch-variator-guide.html",
    "totalTime": "PT90M",
    "tool": [
        tool("CVT cover removal tools"),
        tool("Variator puller (if required)"),
        tool("Clutch spring compressor"),
        tool("Torque wrench"),
        tool("Replacement belt and roller set"),
    ],
    "step": [
        step("Remove CVT cover and inspect",
             "Remove the CVT cover and inspect belt condition, roller wear, "
             "and clutch bell interior for scoring or glazing."),
        step("Remove and disassemble the variator",
             "Remove the variator nut, disassemble the front pulley, and "
             "extract all rollers. Weigh rollers against spec — lighter rollers "
             "raise engagement RPM; heavier lower it."),
        step("Inspect the torque driver (rear variator half)",
             "Check the rear movable pulley sliding faces for wear and the "
             "spring preload. A worn torque driver causes poor top-speed "
             "engagement."),
        step("Inspect the clutch assembly",
             "Remove the clutch bell and inspect the friction surface for "
             "scoring or heat damage (blueing). Inspect clutch shoes for "
             "even wear."),
        step("Replace components as a set",
             "Replace belt, rollers, and clutch spring together as a service "
             "set. Mixing old and new rollers of different weights causes "
             "vibration and uneven engagement."),
        step("Reassemble and torque to specification",
             "Reassemble in reverse order, torquing all nuts to spec. Refit "
             "the CVT cover."),
        step("Test-ride and evaluate",
             "Assess engagement RPM, mid-range acceleration, and top speed. "
             "Adjust roller weight if engagement or top speed is not as "
             "expected."),
    ],
}

SCHEMAS["repair-guides/gy6-brake-pads-guide.html"] = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "GY6 Scooter Brake Pad Replacement Guide",
    "description": (
        "How to inspect and replace front disc brake pads on a GY6 "
        "50/125/150cc scooter."
    ),
    "url": f"{BASE_URL}/repair-guides/gy6-brake-pads-guide.html",
    "totalTime": "PT45M",
    "estimatedCost": cost("12"),
    "tool": [
        tool("10 mm socket (caliper bolts)"),
        tool("Flat-blade screwdriver or brake pad spreader"),
        tool("Brake cleaner spray"),
        tool("Clean rag"),
        tool("Replacement brake pads"),
    ],
    "step": [
        step("Inspect pad thickness",
             "Through the caliper inspection window, check friction material "
             "thickness. Replace when below 2 mm or at the wear groove."),
        step("Remove the caliper",
             "Support the scooter and remove the two caliper mounting bolts. "
             "Slide the caliper off the disc — do not let it hang by the "
             "brake hose."),
        step("Remove the pad retaining pin",
             "Slide out the pad retaining pin or clip. Remove both pads."),
        step("Retract the caliper piston",
             "Push the piston back into the caliper using a pad spreader or "
             "flat-blade screwdriver. Open the reservoir cap first to prevent "
             "overpressure. Fluid may overflow — have a rag ready."),
        step("Clean the caliper",
             "Spray brake cleaner on the caliper body, piston face, and disc "
             "surface. Keep cleaner away from tyre sidewalls."),
        step("Install new pads",
             "Fit the new pads and reinstall the retaining pin. Confirm the "
             "pads seat correctly with no binding."),
        step("Bed in the new pads",
             "Before normal use, perform 5–8 moderate brake applications from "
             "30 km/h to walking pace to bed the new pads. Avoid hard stops "
             "until bedded."),
    ],
}

SCHEMAS["repair-guides/gy6-brake-fluid-guide.html"] = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "GY6 Scooter Brake Fluid Change Guide",
    "description": (
        "How to change the brake fluid on the front hydraulic disc brake of a "
        "GY6 scooter. DOT 4 specification, bleeding sequence, and reservoir "
        "refill."
    ),
    "url": f"{BASE_URL}/repair-guides/gy6-brake-fluid-guide.html",
    "totalTime": "PT40M",
    "estimatedCost": cost("8"),
    "tool": [
        tool("8 mm spanner (bleed nipple)"),
        tool("Clear plastic tubing (to fit bleed nipple)"),
        tool("Small container for old fluid"),
        tool("DOT 4 brake fluid"),
        tool("Syringe (for topping up reservoir)"),
        tool("Clean rag and masking tape (to protect paintwork)"),
    ],
    "step": [
        step("Protect paintwork and prepare materials",
             "Brake fluid strips paint on contact. Tape around the reservoir "
             "and have rags ready. Use DOT 4 unless the reservoir cap "
             "specifies DOT 3."),
        step("Attach bleed tube to the caliper nipple",
             "Push clear plastic tubing over the bleed nipple at the caliper. "
             "Place the other end in a container with a small amount of new "
             "fluid to prevent air being drawn back."),
        step("Open the master cylinder reservoir",
             "Remove the reservoir cap and diaphragm. Top up with new fluid. "
             "Keep the reservoir topped up throughout — never let it run dry."),
        step("Open the bleed nipple",
             "Crack the bleed nipple counter-clockwise by half a turn. Old "
             "fluid will slowly flow through the tube. Watch for air bubbles."),
        step("Pump the brake lever",
             "Slowly squeeze and release the brake lever repeatedly, keeping "
             "the reservoir topped up. Continue until no air bubbles appear "
             "in the fluid exiting the bleed tube."),
        step("Close the nipple and check lever feel",
             "Tighten the bleed nipple. Test the lever — it should be firm "
             "with no sponginess. If spongy, repeat the bleeding sequence."),
        step("Top up reservoir and refit cap",
             "Fill to the MAX mark. Refit the diaphragm and cap. Clean any "
             "spilled fluid immediately with water."),
    ],
}

SCHEMAS["repair-guides/gy6-ignition-coil-guide.html"] = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "GY6 Ignition Coil Testing and Replacement Guide",
    "description": (
        "How to test GY6 ignition coil resistance with a multimeter and replace "
        "it. Covers primary coil, secondary coil, and spark test."
    ),
    "url": f"{BASE_URL}/repair-guides/gy6-ignition-coil-guide.html",
    "totalTime": "PT30M",
    "tool": [
        tool("Multimeter (resistance / Ohms mode)"),
        tool("8 mm spanner (coil mounting bolts)"),
        tool("Replacement ignition coil (if needed)"),
    ],
    "step": [
        step("Disconnect the coil wiring",
             "Locate the ignition coil near the cylinder head. Disconnect the "
             "primary wire (from CDI) and the HT lead (to spark plug cap)."),
        step("Test primary coil resistance",
             "Set multimeter to resistance. Measure between the primary wire "
             "terminal and coil body earth. Spec: 0.3–1.0 Ohm. OL (open) or "
             "0 Ohm indicates a failed primary winding."),
        step("Test secondary coil resistance",
             "Measure between the HT lead output and coil body earth. Spec: "
             "7,000–12,000 Ohm (7–12 kOhm). OL or very high resistance "
             "indicates a failed secondary winding."),
        step("Test the HT lead and plug cap",
             "Test the spark plug cap resistance separately: typically "
             "4,000–6,000 Ohm for a suppressed cap. OL indicates a broken "
             "internal resistor."),
        step("Replace the coil if out of specification",
             "Remove the two mounting bolts and fit the new coil. Reconnect "
             "primary wire and HT lead. Ensure the coil body has good earth "
             "contact to the engine."),
        step("Spark test after replacement",
             "Hold the spark plug cap on a known-good plug against the engine "
             "earth and crank. A strong blue spark confirms correct "
             "installation."),
    ],
}

# ── Inject into each file ──────────────────────────────────────────────────────

updated = skipped = missing = 0

for rel_path, schema in SCHEMAS.items():
    fpath = PUBLIC / rel_path
    if not fpath.exists():
        print(f"MISSING : {rel_path}")
        missing += 1
        continue

    content = fpath.read_text(encoding="utf-8")

    if MARKER in content:
        print(f"SKIP    : {rel_path}  (already has JSON-LD)")
        skipped += 1
        continue

    json_str = safe_json(schema)
    script_block = (
        f'  <script type="application/ld+json">\n'
        f'{json_str}\n'
        f'  </script>'
    )

    new_content = content.replace("</head>", f"{script_block}\n</head>", 1)

    if new_content == content:
        print(f"WARN    : {rel_path}  (no </head> tag found — skipped)")
        continue

    fpath.write_text(new_content, encoding="utf-8")
    print(f"OK      : {rel_path}")
    updated += 1

print(f"\n{'=' * 50}")
print(f"Updated : {updated}")
print(f"Skipped : {skipped}")
print(f"Missing : {missing}")
