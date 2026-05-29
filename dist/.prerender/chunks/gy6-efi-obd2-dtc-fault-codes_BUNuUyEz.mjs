import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_C1PmNaGI.mjs';
import { $ as $$Callout } from './Callout_Cmo--wc0.mjs';
import { $ as $$SourceBox } from './SourceBox_B6HrCIyX.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 EFI OBD-2 DTC Fault Codes",
  "description": "Complete OBD-2 DTC fault code reference for GY6 EFI scooters with Rongmao, Delphi, and Motion injection systems. Includes step-by-step diagnostic procedures…",
  "publishDate": "2026-05-19",
  "updatedDate": "2026-05-19",
  "difficulty": "Beginner",
  "timeEstimate": "~30 min",
  "tags": ["GY6 EFI", "OBD-2 / DTC", "Rongmao", "Delphi", "Motion EFI", "Fault Codes", "Diagnostics"],
  "appliesTo": ["GY6 EFI 125cc (Rongmao)", "GY6 EFI 150cc (Delphi)", "GY6 EFI 125cc (Motion)"],
  "videos": [],
  "sources": [{
    "name": "GY6 Injectie Centrum — Foutcodes",
    "url": "https://www.gy6-injectie-centrum.nl/gy6-injectie/foutcodes"
  }, {
    "name": "CC BY-SA 4.0",
    "url": "https://creativecommons.org/licenses/by-sa/4.0/"
  }],
  "canonical": "https://ismr.online/diagnostics/gy6-efi-obd2-dtc-fault-codes.html",
  "draft": false,
  "category": "fuel",
  "engine": "gy6",
  "fuel": "efi",
  "section": "Fuel System & Idle",
  "cardTag": "GY6 · EFI · Euro 4/5"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-you-need",
    "text": "What You Need"
  }, {
    "depth": 2,
    "slug": "reading-codes-with-car-scanner",
    "text": "Reading Codes with Car Scanner"
  }, {
    "depth": 2,
    "slug": "precautions-from-rongmao-efi-owner-manual",
    "text": "Precautions (from Rongmao EFI Owner Manual)"
  }, {
    "depth": 2,
    "slug": "dtc-reference-table--all-codes",
    "text": "DTC Reference Table — All Codes"
  }, {
    "depth": 2,
    "slug": "step-by-step-diagnostic-procedures",
    "text": "Step-by-Step Diagnostic Procedures"
  }, {
    "depth": 2,
    "slug": "symptom-based-diagnostic-flows",
    "text": "Symptom-Based Diagnostic Flows"
  }, {
    "depth": 2,
    "slug": "before-starting-fault-analysis--checklist",
    "text": "Before Starting Fault Analysis — Checklist"
  }, {
    "depth": 2,
    "slug": "clearing-dtcs",
    "text": "Clearing DTCs"
  }, {
    "depth": 2,
    "slug": "related-guides--resources",
    "text": "Related Guides & Resources"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "ℹ️ This page vs the flash code page:"
      }), " Older GY6 EFI ECUs (KEIHIN PGM-FI clones) communicate faults as ", createVNode(_components.em, {
        children: "blink sequences"
      }), " — no scanner needed. Modern Rongmao, Delphi, and Motion ECUs speak standard ", createVNode(_components.strong, {
        children: "OBD-2 DTCs"
      }), " (P0xxx codes) and require an OBD-2 reader. This page covers the OBD-2 / DTC system only."]
    }), "\n", createVNode(_components.h2, {
      id: "what-you-need",
      children: "What You Need"
    }), "\n", createVNode(_components.p, {
      children: "To read and clear fault codes on a Rongmao / Delphi / Motion EFI system you need an OBD-2 reader. The ECU communicates over the K-line (ISO 9141-2) or CAN bus depending on the variant. The following tools are confirmed to work:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Car Scanner"
        }), " (Android / iOS) — free app, works with a generic ELM327 Bluetooth or Wi-Fi adapter"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "HUD ECU Hacker"
        }), " (Windows PC) — purpose-built for Rongmao/Delphi GY6 ECUs; allows reading, clearing, and remapping"]
      }), "\n", createVNode(_components.li, {
        children: "Any generic OBD-2 scanner that supports ISO 9141-2 / KWP2000"
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "⚠️ Before reading codes:"
        }), " Check the MIL (malfunction indicator lamp) is working correctly by verifying it illuminates on key-on. Clear any history codes first, then repeat the fault condition and re-read. A code that appears only in history but not as a current fault may have been a one-off transient event."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "reading-codes-with-car-scanner",
      children: "Reading Codes with Car Scanner"
    }), "\n", createVNode(_components.p, {
      children: ["Connect a generic ", createVNode(_components.strong, {
        children: "ELM327 Bluetooth or Wi-Fi adapter"
      }), " to the 6-pin OBD-2 diagnostic port (usually under the seat or near the battery). Open ", createVNode(_components.strong, {
        children: "Car Scanner"
      }), " (Android / iOS), select the ELM327 adapter, and choose ", createVNode(_components.em, {
        children: "Read fault codes"
      }), ". The app will list any active P-codes — cross-reference them in the DTC table below. Use ", createVNode(_components.em, {
        children: "Clear fault codes"
      }), " after completing your repair to reset the MIL."]
    }), "\n", createVNode(_components.h2, {
      id: "precautions-from-rongmao-efi-owner-manual",
      children: "Precautions (from Rongmao EFI Owner Manual)"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Ensure battery positive and negative terminals are reliable and cannot be interchanged. When the engine is running, the battery cannot be disassembled."
      }), "\n", createVNode(_components.li, {
        children: "If the fuel gauge alarm sounds, refuel as soon as possible — the fuel pump cannot operate in air or media other than fuel."
      }), "\n", createVNode(_components.li, {
        children: "Do not arbitrarily disassemble vehicle parts, especially the fuel system (pipeline pressure approx. 250 kPa). Disassembly must be carried out by professional maintenance personnel to prevent fire risk."
      }), "\n", createVNode(_components.li, {
        children: "Do not arbitrarily adjust the throttle valve door plate limit screw. Idle speed on EFI scooters is controlled automatically by the ECU via the IACV."
      }), "\n", createVNode(_components.li, {
        children: "Vehicles may only use the same type of parts specified by the manufacturer. Turn off the ignition switch before disassembly or replacement of any electrical parts."
      }), "\n", createVNode(_components.li, {
        children: "Never pierce the wiring harness to measure signals — use back-probing tools or proper breakout connectors."
      }), "\n", createVNode(_components.li, {
        children: "Ensure the ECU temperature remains below 80 °C."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "dtc-reference-table--all-codes",
      children: "DTC Reference Table — All Codes"
    }), "\n", createVNode(_components.p, {
      children: ["The following OBD-2 P-codes apply to GY6 EFI scooters using Rongmao, Delphi, and Motion injection systems. This table is aligned with the ", createVNode(_components.a, {
        href: "https://www.gy6-injectie-centrum.nl/gy6-injectie/foutcodes",
        children: "GY6 Injectie Centrum fault code reference"
      }), " and the Rongmao EFI Owner Manual. Detailed step-by-step diagnostic procedures for each code follow below."]
    }), "\n", createVNode("table", {
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "DTC Code"
          }), createVNode("th", {
            children: "Component"
          }), createVNode("th", {
            children: "Fault Description"
          }), createVNode("th", {
            children: "Severity"
          }), createVNode("th", {
            children: "Typical Symptom"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0107"
          }), createVNode("td", {
            children: "MAP sensor"
          }), createVNode("td", {
            children: "Manifold Absolute Pressure — low voltage or open circuit"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "Rough idle, stalling, poor performance"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0108"
          }), createVNode("td", {
            children: "MAP sensor"
          }), createVNode("td", {
            children: "Manifold Absolute Pressure — high voltage"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "Rich running, black exhaust smoke, poor power"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0112"
          }), createVNode("td", {
            children: "IAT sensor"
          }), createVNode("td", {
            children: "Inlet Air Temperature — low voltage or open circuit"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-low",
              children: "Low"
            })
          }), createVNode("td", {
            children: "Slightly degraded fuel mapping, rarely noticeable"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0113"
          }), createVNode("td", {
            children: "IAT sensor"
          }), createVNode("td", {
            children: "Inlet Air Temperature — high voltage"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-low",
              children: "Low"
            })
          }), createVNode("td", {
            children: "Slightly degraded fuel mapping, rarely noticeable"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0117"
          }), createVNode("td", {
            children: "ECT / CTS sensor"
          }), createVNode("td", {
            children: "Engine Coolant/Oil Temperature — low voltage or open circuit"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-med",
              children: "Medium"
            })
          }), createVNode("td", {
            children: "Poor cold start enrichment, rough warm-up"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0118"
          }), createVNode("td", {
            children: "ECT / CTS sensor"
          }), createVNode("td", {
            children: "Engine Coolant/Oil Temperature — high voltage or open circuit"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-med",
              children: "Medium"
            })
          }), createVNode("td", {
            children: "Engine may over-enrich on warm engine"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0122"
          }), createVNode("td", {
            children: "TPS sensor"
          }), createVNode("td", {
            children: "Throttle Position Sensor — low voltage or open circuit"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "Surging, hesitation, possible stalling on acceleration"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0123"
          }), createVNode("td", {
            children: "TPS sensor"
          }), createVNode("td", {
            children: "Throttle Position Sensor — high voltage"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "Surging, incorrect fuelling across throttle range"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0131"
          }), createVNode("td", {
            children: "Lambda sensor 1 (O₂S1)"
          }), createVNode("td", {
            children: "Upstream O₂ sensor — low voltage or open circuit"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-med",
              children: "Medium"
            })
          }), createVNode("td", {
            children: "Lean running, closed-loop fuelling disabled"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0132"
          }), createVNode("td", {
            children: "Lambda sensor 1 (O₂S1)"
          }), createVNode("td", {
            children: "Upstream O₂ sensor — high voltage"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-med",
              children: "Medium"
            })
          }), createVNode("td", {
            children: "Rich running, closed-loop fuelling disabled"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0031"
          }), createVNode("td", {
            children: "Lambda sensor 1 heater"
          }), createVNode("td", {
            children: "O₂S1 heater element — low voltage or open circuit"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-med",
              children: "Medium"
            })
          }), createVNode("td", {
            children: "Slow O₂ sensor warm-up, open-loop fuelling longer at cold start"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0032"
          }), createVNode("td", {
            children: "Lambda sensor 1 heater"
          }), createVNode("td", {
            children: "O₂S1 heater element — high voltage"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-med",
              children: "Medium"
            })
          }), createVNode("td", {
            children: "Short circuit in heater circuit"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0137"
          }), createVNode("td", {
            children: "Lambda sensor 2 (O₂S2)"
          }), createVNode("td", {
            children: "Downstream O₂ sensor — low voltage or open circuit"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-low",
              children: "Low"
            })
          }), createVNode("td", {
            children: "MIL on; emissions monitoring affected"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0138"
          }), createVNode("td", {
            children: "Lambda sensor 2 (O₂S2)"
          }), createVNode("td", {
            children: "Downstream O₂ sensor — high voltage"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-low",
              children: "Low"
            })
          }), createVNode("td", {
            children: "MIL on; emissions monitoring affected"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0037"
          }), createVNode("td", {
            children: "Lambda sensor 2 heater"
          }), createVNode("td", {
            children: "O₂S2 heater element — low voltage or open circuit"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-low",
              children: "Low"
            })
          }), createVNode("td", {
            children: "MIL on; heater circuit fault"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0038"
          }), createVNode("td", {
            children: "Lambda sensor 2 heater"
          }), createVNode("td", {
            children: "O₂S2 heater element — high voltage"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-low",
              children: "Low"
            })
          }), createVNode("td", {
            children: "MIL on; short circuit in heater circuit"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0201"
          }), createVNode("td", {
            children: "Fuel injector"
          }), createVNode("td", {
            children: "Injector cylinder 1 — circuit malfunction"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "Engine will not start or runs very poorly; misfire"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0202"
          }), createVNode("td", {
            children: "Fuel injector"
          }), createVNode("td", {
            children: "Injector cylinder 2 — circuit malfunction"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "As P0201 (single-cylinder GY6 scooters only have cylinder 1)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0230"
          }), createVNode("td", {
            children: "Fuel pump relay (FPR)"
          }), createVNode("td", {
            children: "Fuel pump relay coil — low voltage or open circuit"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "No fuel pump prime on key-on; engine will not start"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0232"
          }), createVNode("td", {
            children: "Fuel pump relay (FPR)"
          }), createVNode("td", {
            children: "Fuel pump relay coil — high voltage"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "Short circuit in relay coil circuit"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0351"
          }), createVNode("td", {
            children: "Ignition coil"
          }), createVNode("td", {
            children: "Cylinder 1 ignition coil — circuit malfunction"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "No spark; engine will not start"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0352"
          }), createVNode("td", {
            children: "Ignition coil"
          }), createVNode("td", {
            children: "Cylinder 2 ignition coil — circuit malfunction"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "As P0351 (not applicable on single-cylinder GY6)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0444"
          }), createVNode("td", {
            children: "PCV / Purge Control Valve"
          }), createVNode("td", {
            children: "Evaporative emission purge control valve — low voltage or open circuit"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-low",
              children: "Low"
            })
          }), createVNode("td", {
            children: "MIL on; emissions system affected; drivability usually normal"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0445"
          }), createVNode("td", {
            children: "PCV / Purge Control Valve"
          }), createVNode("td", {
            children: "Evaporative emission purge control valve — high voltage"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-low",
              children: "Low"
            })
          }), createVNode("td", {
            children: "MIL on; short circuit in PCV circuit"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0500"
          }), createVNode("td", {
            children: "VSS (Vehicle Speed Sensor)"
          }), createVNode("td", {
            children: "No speed signal detected"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-med",
              children: "Medium"
            })
          }), createVNode("td", {
            children: "Speedometer inoperative; speed-dependent fuelling maps may be affected"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0505"
          }), createVNode("td", {
            children: "IACV (Idle Air Control Valve)"
          }), createVNode("td", {
            children: "Idle Speed Control — system error"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-med",
              children: "Medium"
            })
          }), createVNode("td", {
            children: "Idle too high, too low, or hunting; stalling at traffic lights"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0562"
          }), createVNode("td", {
            children: "System voltage"
          }), createVNode("td", {
            children: "Battery / charging system voltage — too low"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-med",
              children: "Medium"
            })
          }), createVNode("td", {
            children: "Multiple secondary sensor faults may appear; difficult starting"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0563"
          }), createVNode("td", {
            children: "System voltage / regulator"
          }), createVNode("td", {
            children: "Battery / charging system voltage — too high"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "Overcharging; risk of ECU and battery damage — address immediately"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0650"
          }), createVNode("td", {
            children: "MIL lamp"
          }), createVNode("td", {
            children: "Malfunction Indicator Lamp — circuit fault"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-low",
              children: "Low"
            })
          }), createVNode("td", {
            children: "MIL lamp itself is defective or its circuit is open/shorted"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P0850"
          }), createVNode("td", {
            children: "Neutral switch"
          }), createVNode("td", {
            children: "Neutral position sensor — circuit fault"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-low",
              children: "Low"
            })
          }), createVNode("td", {
            children: "Incorrect neutral detection; may affect idle speed in gear"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P1693"
          }), createVNode("td", {
            children: "Tachometer"
          }), createVNode("td", {
            children: "Tachometer signal — low voltage or open circuit"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-low",
              children: "Low"
            })
          }), createVNode("td", {
            children: "Rev counter inoperative"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "dtc-code",
            children: "P1695"
          }), createVNode("td", {
            children: "Tachometer"
          }), createVNode("td", {
            children: "Tachometer signal — high voltage"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-low",
              children: "Low"
            })
          }), createVNode("td", {
            children: "Rev counter erratic or pegged"
          })]
        })]
      })]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Fault code legend:"
        }), " “Low voltage or open circuit” means the signal at the ECU pin is unexpectedly low — caused by a short to ground, broken wire, or disconnected sensor. “High voltage” means the signal is unexpectedly high — caused by a short to battery, open circuit in the return/ground path, or a failed sensor. Always check connectors and wiring before replacing sensors."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "step-by-step-diagnostic-procedures",
      children: "Step-by-Step Diagnostic Procedures"
    }), "\n", createVNode(_components.p, {
      children: "The following procedures are derived from the Rongmao EFI Owner Manual. For each code, follow the numbered steps in order. Connect your OBD-2 diagnostic tool first (Step 1 in every procedure)."
    }), "\n", createVNode(_components.p, {
      children: "P0107 MAP Sensor — Low Voltage or Open Circuit"
    }), "\n", createVNode("table", {
      class: "procedure-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "#"
          }), createVNode("th", {
            children: "Operation"
          }), createVNode("th", {
            children: "Yes"
          }), createVNode("th", {
            children: "No"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "1"
          }), createVNode("td", {
            children: "Connect the diagnostic tool and turn ignition on."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Next"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "—"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "2"
          }), createVNode("td", {
            children: "Check the BARO data — confirm it reads approx. 100 kPa (adjust for altitude)."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Step 5"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "3"
          }), createVNode("td", {
            children: "Disconnect the MAP sensor connector. Use a multimeter to check voltage between pin 4 and pin 3 of the connector — should be approx. 5 V."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Step 5"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "4"
          }), createVNode("td", {
            children: "Check whether pins j2-11, j2-10, j2-16 of the ECU and pins 5, 3, 4 of the connector are shorted to ground."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Check the harness"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "5"
          }), createVNode("td", {
            children: "Start engine and let it idle. Check that MAP reads 30–50 kPa at idle; then open throttle fully (WOT) and confirm MAP rises to approx. 90 kPa."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Diagnostic help needed"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Change the MAP sensor"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "P0108 MAP Sensor — High Voltage"
    }), "\n", createVNode("table", {
      class: "procedure-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "#"
          }), createVNode("th", {
            children: "Operation"
          }), createVNode("th", {
            children: "Yes"
          }), createVNode("th", {
            children: "No"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "1"
          }), createVNode("td", {
            children: "Connect the diagnostic tool and turn ignition on."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Next"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "—"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "2"
          }), createVNode("td", {
            children: "Check BARO data — confirm approx. 100 kPa."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Step 5"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "3"
          }), createVNode("td", {
            children: "Disconnect sensor connector. Check voltage between pin 4 and pin 3 — should be approx. 5 V."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Step 5"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "4"
          }), createVNode("td", {
            children: "Check whether pins j2-11, j2-10, j2-16 of the ECU and pins 5, 3, 4 of the connector are shorted to ground."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Check the harness"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "5"
          }), createVNode("td", {
            children: "Start engine at idle. Verify MAP reads 30–50 kPa; at WOT, MAP should reach approx. 90 kPa."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Diagnostic help needed"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Change the MAP sensor"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "P0112 IAT Sensor — Low Voltage or Open Circuit"
    }), "\n", createVNode("table", {
      class: "procedure-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "#"
          }), createVNode("th", {
            children: "Operation"
          }), createVNode("th", {
            children: "Yes"
          }), createVNode("th", {
            children: "No"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "1"
          }), createVNode("td", {
            children: "Connect the diagnostic tool and turn ignition on."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Next"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "—"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "2"
          }), createVNode("td", {
            children: "Check “intake air temperature” data — confirm it equals the actual ambient temperature."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Step 5"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "3"
          }), createVNode("td", {
            children: "Disconnect sensor connector. Use multimeter to check resistance between pin 1 and pin 3 — should be reasonable for the current temperature (see sensor spec table)."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Step 5"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "4"
          }), createVNode("td", {
            children: "Check voltage between pin 3 and pin 4 of the connector — should be approx. 5 V."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Next"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Check harness"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "5"
          }), createVNode("td", {
            children: "Check whether pins j2-8, j2-10 of the ECU and pins 1 and 3 of the connector are shorted to battery."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Check the harness"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "6"
          }), createVNode("td", {
            children: "Start engine and stay at idle. Check that “intake air temperature” rises as the engine warms up."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Help needed"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Change the sensor"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "P0113 IAT Sensor — High Voltage"
    }), "\n", createVNode("table", {
      class: "procedure-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "#"
          }), createVNode("th", {
            children: "Operation"
          }), createVNode("th", {
            children: "Yes"
          }), createVNode("th", {
            children: "No"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "1"
          }), createVNode("td", {
            children: "Connect the diagnostic tool and turn ignition on."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Next"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "—"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "2"
          }), createVNode("td", {
            children: "Check “intake air temperature” data — confirm it matches actual ambient temperature."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Step 5"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "3"
          }), createVNode("td", {
            children: "Disconnect connector. Check resistance between pin 1 and pin 3 matches temperature expectations."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Step 5"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "4"
          }), createVNode("td", {
            children: "Check voltage between pin 3 and pin 4 — should be approx. 5 V."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Next"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Check harness"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "5"
          }), createVNode("td", {
            children: "Check whether pins j2-8, j2-10 of the ECU and pins 1 and 3 are shorted to battery."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Check the harness"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "6"
          }), createVNode("td", {
            children: "Start engine and idle. Verify “intake air temperature” rises when engine warms up."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Help needed"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Change the sensor"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "P0117 ECT / CTS Sensor — Low Voltage or Open Circuit"
    }), "\n", createVNode("table", {
      class: "procedure-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "#"
          }), createVNode("th", {
            children: "Operation"
          }), createVNode("th", {
            children: "Yes"
          }), createVNode("th", {
            children: "No"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "1"
          }), createVNode("td", {
            children: "Connect the diagnostic tool and turn ignition on."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Next"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "—"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "2"
          }), createVNode("td", {
            children: "Check “engine temperature” data — confirm it matches actual engine temperature."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Step 5"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "3"
          }), createVNode("td", {
            children: "Disconnect sensor connector. Check resistance between pin 1 and pin 2 — should match temperature (e.g. approx. 2.5 kΩ at 20 °C, approx. 300 Ω at 80 °C)."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Step 5"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "4"
          }), createVNode("td", {
            children: "Check whether pins j2-10, j2-14 of the ECU and pins C and D of the sensor connector are shorted to ground or open."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Harness issue"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "5"
          }), createVNode("td", {
            children: "Start engine and idle. Verify “engine temperature” rises as engine gets warm."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Help needed"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Change the sensor"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "P0118 ECT / CTS Sensor — High Voltage or Open Circuit"
    }), "\n", createVNode("table", {
      class: "procedure-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "#"
          }), createVNode("th", {
            children: "Operation"
          }), createVNode("th", {
            children: "Yes"
          }), createVNode("th", {
            children: "No"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "1"
          }), createVNode("td", {
            children: "Connect the diagnostic tool and turn ignition on."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Next"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "—"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "2"
          }), createVNode("td", {
            children: "Check “engine temperature” data — confirm it matches actual temperature."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Step 5"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "3"
          }), createVNode("td", {
            children: "Disconnect connector. Check resistance between pin 1 and pin 2 of the sensor."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Step 5"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "4"
          }), createVNode("td", {
            children: "Check whether pins j2-10, j2-14 of the ECU and pins 1 and 2 of the sensor are shorted to ground or open."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Harness issue"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "5"
          }), createVNode("td", {
            children: "Start engine and idle. Verify “engine temperature” rises when engine gets warm."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Help needed"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Change the sensor"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "P0122 TPS — Low Voltage or Open Circuit"
    }), "\n", createVNode("table", {
      class: "procedure-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "#"
          }), createVNode("th", {
            children: "Operation"
          }), createVNode("th", {
            children: "Yes"
          }), createVNode("th", {
            children: "No"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "1"
          }), createVNode("td", {
            children: "Connect the diagnostic tool and turn ignition on."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Next"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "—"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "2"
          }), createVNode("td", {
            children: "Check “Throttle opening” data — confirm it reads 0%–1% at closed throttle."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Step 5"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "3"
          }), createVNode("td", {
            children: "Open throttle slowly to 100%. Verify “throttle opening” goes from 0% to 90%–100%."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Step 5"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "4"
          }), createVNode("td", {
            children: "Repeat step 3. Check whether the data jumps or skips when opening throttle slowly."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Change the sensor"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "5"
          }), createVNode("td", {
            children: "Disconnect connector. Check whether the following pins are shorted to ground or open: j2-12, j2-16 of the ECU and pins 2 and 4 of the sensor."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Harness issue"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "6"
          }), createVNode("td", {
            children: "Use multimeter to check voltage between pin 4 and pin 3 of the sensor connector — should be approx. 5 V."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Help needed"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Step 5"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "P0123 TPS — High Voltage"
    }), "\n", createVNode("table", {
      class: "procedure-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "#"
          }), createVNode("th", {
            children: "Operation"
          }), createVNode("th", {
            children: "Yes"
          }), createVNode("th", {
            children: "No"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "1"
          }), createVNode("td", {
            children: "Connect the diagnostic tool and turn ignition on."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Next"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "—"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "2"
          }), createVNode("td", {
            children: "Check “Throttle opening” data — should read 0%–1% at closed throttle."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Step 5"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "3"
          }), createVNode("td", {
            children: "Open throttle slowly to 100%. Verify data climbs smoothly to 90%–100%."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Step 5"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "4"
          }), createVNode("td", {
            children: "Repeat step 3 and check for data jumps when opening throttle."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Change the sensor"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "5"
          }), createVNode("td", {
            children: "Disconnect connector. Check whether pins j2-12, j2-16 of the ECU and pins 2 and 4 of the sensor are shorted to ground or open."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Harness issue"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "6"
          }), createVNode("td", {
            children: "Check voltage between pin 4 and pin 3 of the sensor — should be approx. 5 V."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Help needed"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Step 5"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "P0131 / P0132 O₂ Sensor 1 — Low / High Voltage"
    }), "\n", createVNode("table", {
      class: "procedure-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "#"
          }), createVNode("th", {
            children: "Operation"
          }), createVNode("th", {
            children: "Yes"
          }), createVNode("th", {
            children: "No"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "1"
          }), createVNode("td", {
            children: "Connect the diagnostic tool and turn ignition on."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Next"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "—"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "2"
          }), createVNode("td", {
            children: "Use a multimeter to check the connection between pin B of the oxygen sensor and pin j1-17 of the ECU — is it open? Check whether pin B of the sensor is shorted to pin A."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Harness issue"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "3"
          }), createVNode("td", {
            children: "Start engine and warm up. Use multimeter to check whether voltage between pins A and B keeps jumping between 100–900 mV (normal closed-loop switching)."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Help needed"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "4"
          }), createVNode("td", {
            children: "Check for: A) emission pipe block/leakage; B) injector leakage; C) fuel pressure too high or too low; D) valve clearance too small."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Engine maintenance required"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Change the sensor"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "P0201 Injector 1 — Circuit Malfunction"
    }), "\n", createVNode("table", {
      class: "procedure-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "#"
          }), createVNode("th", {
            children: "Operation"
          }), createVNode("th", {
            children: "Yes"
          }), createVNode("th", {
            children: "No"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "1"
          }), createVNode("td", {
            children: "Connect the diagnostic tool and turn ignition on."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Next"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "—"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "2"
          }), createVNode("td", {
            children: "Disconnect the injector connector. Use multimeter to check whether the voltage of pin A is approx. 12 V."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Step 4"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "3"
          }), createVNode("td", {
            children: "Check whether the connection between pin A and the main power relay is open or shorted to ground."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Harness issue"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "4"
          }), createVNode("td", {
            children: "Use multimeter to measure resistance between pin A and pin B of the injector — should be approx. 10–14 Ω at 20 °C."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Change the injector"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "5"
          }), createVNode("td", {
            children: "Use multimeter to check whether the voltage of pin B is approx. 12 V."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Help needed"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "6"
          }), createVNode("td", {
            children: "Check whether the connection between pin B of the injector and j2-05 of the ECU is open or shorted to battery/ground."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Harness issue"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Help needed"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "P0230 / P0232 Fuel Pump Relay — Low / High Voltage or Open Circuit"
    }), "\n", createVNode("table", {
      class: "procedure-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "#"
          }), createVNode("th", {
            children: "Operation"
          }), createVNode("th", {
            children: "Yes"
          }), createVNode("th", {
            children: "No"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "1"
          }), createVNode("td", {
            children: "Connect the diagnostic tool and turn ignition on."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Next"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "—"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "2"
          }), createVNode("td", {
            children: "Wait 30 s. Remove the fuel pump relay. Turn ignition on. Check whether the voltage of the relay feeder ear is approx. 12 V."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Change the pump"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "3"
          }), createVNode("td", {
            children: "Check whether the feeder ear is shorted to ground or open."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Harness issue"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Help needed"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "P0351 Ignition Coil — Cylinder 1 Circuit Malfunction"
    }), "\n", createVNode("table", {
      class: "procedure-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "#"
          }), createVNode("th", {
            children: "Operation"
          }), createVNode("th", {
            children: "Yes"
          }), createVNode("th", {
            children: "No"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "1"
          }), createVNode("td", {
            children: "Connect the diagnostic tool and turn ignition on."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Next"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "—"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "2"
          }), createVNode("td", {
            children: "Disconnect the coil connector. Check whether the voltage of pin (+) is approx. 12 V."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Step 4"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "3"
          }), createVNode("td", {
            children: "Check whether the connection between pin (+) and the main power relay is open or shorted to ground."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Harness issue"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "4"
          }), createVNode("td", {
            children: "Use multimeter to check whether the resistance of the two coil pins is 0.5–0.65 Ω at 20 °C."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Change the coil"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "5"
          }), createVNode("td", {
            children: "Use multimeter to check whether voltage of pin B is approx. 12 V."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Help needed"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Next"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "6"
          }), createVNode("td", {
            children: "Check whether the connection between pin 2 of the coil and j2-01 of the ECU is open or shorted to battery/ground."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Harness issue"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Help needed"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "P0505 IACV — Idle Speed Control Error"
    }), "\n", createVNode("table", {
      class: "procedure-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "#"
          }), createVNode("th", {
            children: "Operation"
          }), createVNode("th", {
            children: "Yes"
          }), createVNode("th", {
            children: "No"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "1"
          }), createVNode("td", {
            children: "Connect the diagnostic tool and turn ignition on."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Next"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "—"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "2"
          }), createVNode("td", {
            children: "Remove the IACV connector. Use multimeter to check resistance between pin A and pin D, and between pin B and pin C — should be approx. 53 ± 5.3 Ω each."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Next"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Change the stepper motor (IACV)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            class: "step-num",
            children: "3"
          }), createVNode("td", {
            children: "Check whether all 4 wires of the IACV are shorted to battery/ground or open."
          }), createVNode("td", {
            class: "result-yes nextstep",
            children: "Harness issue"
          }), createVNode("td", {
            class: "result-no nextstep",
            children: "Help needed"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "symptom-based-diagnostic-flows",
      children: "Symptom-Based Diagnostic Flows"
    }), "\n", createVNode(_components.p, {
      children: "If you cannot read a fault code, or want to verify the code is the root cause, use these symptom-driven checklists directly from the Rongmao EFI Owner Manual."
    }), "\n", createVNode(_components.p, {
      children: "🚫 Engine Cannot Start"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Check battery voltage — should be 8–12 V"
      }), "\n", createVNode(_components.li, {
        children: "Crank engine; check cranking voltage remains above 8 V"
      }), "\n", createVNode(_components.li, {
        children: "Check starter motor operation"
      }), "\n", createVNode(_components.li, {
        children: "In winter: check oil and gearbox oil viscosity"
      }), "\n", createVNode(_components.li, {
        children: "Check engine rotation resistance is not excessive"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "⚡ Hard / Difficult to Start"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Check fuel pump pressure — approx. 250 kPa at idle"
      }), "\n", createVNode(_components.li, {
        children: "Remove spark plug; check spark is normal"
      }), "\n", createVNode(_components.li, {
        children: "Check engine temperature sensor connector and signal"
      }), "\n", createVNode(_components.li, {
        children: "With slightly more throttle, check if engine starts — clean throttle body and bypass channel if yes"
      }), "\n", createVNode(_components.li, {
        children: "Pull injector; crank engine — check injector spray pattern"
      }), "\n", createVNode(_components.li, {
        children: "Check if spark plug is wet (flooding) — dry plug and combustion chamber"
      }), "\n", createVNode(_components.li, {
        children: "Check cylinder compression pressure"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "〰️ Unstable Idle"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Check air filter and intake pipe for leaks or blockage"
      }), "\n", createVNode(_components.li, {
        children: "Check throttle body for carbon deposits in bypass channel"
      }), "\n", createVNode(_components.li, {
        children: "Check IACV operation"
      }), "\n", createVNode(_components.li, {
        children: "Check fuel pressure — approx. 250 kPa"
      }), "\n", createVNode(_components.li, {
        children: "Check injector for blockage"
      }), "\n", createVNode(_components.li, {
        children: "Verify correct spark plug type and condition"
      }), "\n", createVNode(_components.li, {
        children: "Check cylinder compression pressure"
      }), "\n", createVNode(_components.li, {
        children: "Check engine temperature sensor signal"
      }), "\n", createVNode(_components.li, {
        children: "Check TPS signal with throttle at idle"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "⬆️ High Idle"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Check throttle cable for sticking or incorrect adjustment"
      }), "\n", createVNode(_components.li, {
        children: "Check idle pintle adjustment of throttle body"
      }), "\n", createVNode(_components.li, {
        children: "Check intake pipe for air leaks"
      }), "\n", createVNode(_components.li, {
        children: "Check IACV operation"
      }), "\n", createVNode(_components.li, {
        children: "Remove engine temperature sensor; check if engine runs well — change sensor if yes"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "📉 Poor Acceleration"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Check air filter and intake pipe for blockage or leaks"
      }), "\n", createVNode(_components.li, {
        children: "Check fuel pressure — approx. 250 kPa"
      }), "\n", createVNode(_components.li, {
        children: "Remove spark plug — check if wet or dry"
      }), "\n", createVNode(_components.li, {
        children: "Check T-MAP sensor, TPS, and all connectors"
      }), "\n", createVNode(_components.li, {
        children: "Check injector for blockage"
      }), "\n", createVNode(_components.li, {
        children: "Check spark plug type and electrode gap"
      }), "\n", createVNode(_components.li, {
        children: "Check cylinder compression pressure"
      }), "\n", createVNode(_components.li, {
        children: "Check exhaust pipe for blockage"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "💥 Backfire"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Remove spark plug; check spark is normal"
      }), "\n", createVNode(_components.li, {
        children: "Check ignition timing is correct"
      }), "\n", createVNode(_components.li, {
        children: "Check valve clearance for leakage"
      }), "\n", createVNode(_components.li, {
        children: "Check injector for blockage or leaking"
      }), "\n", createVNode(_components.li, {
        children: "Check oxygen sensor operation"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "before-starting-fault-analysis--checklist",
      children: "Before Starting Fault Analysis — Checklist"
    }), "\n", createVNode(_components.p, {
      children: "From the Rongmao EFI Owner Manual — complete this checklist before beginning any fault code diagnosis:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Confirm the MIL lamp works correctly (illuminates on key-on self-check)."
      }), "\n", createVNode(_components.li, {
        children: "Clear history fault codes, then repeat the fault condition and re-read."
      }), "\n", createVNode(_components.li, {
        children: "When a new fault code appears, note the exact conditions (hot/cold, idle/acceleration, etc.)."
      }), "\n", createVNode(_components.li, {
        children: "Visually inspect: check for fuel pipe leakage; check for blockage or damage to the intake pipe; check ground connections are secure; check all connectors are properly seated."
      }), "\n", createVNode(_components.li, {
        children: "If any visual defect is found, repair it first before proceeding with fault code diagnosis."
      }), "\n", createVNode(_components.li, {
        children: "If no cause is found after completing all steps: do not ignore maintenance items (cylinder pressure, mechanical timing, fuel quality). As a last resort, swap the ECU to test — if the fault disappears, the ECU was the root cause."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "clearing-dtcs",
      children: "Clearing DTCs"
    }), "\n", createVNode(_components.p, {
      children: "On Rongmao / Delphi / Motion systems, codes must be cleared with an OBD-2 scanner — the battery-disconnect method is not guaranteed to clear stored codes on these ECUs (it will reset live data but not always non-volatile fault memory). Use Car Scanner or HUD ECU Hacker to send the “Clear fault codes” command after completing your repair."
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "⚠️ Always repair the root cause first."
        }), " Clearing a code without fixing the underlying fault will cause it to return within minutes of running the engine."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "related-guides--resources",
      children: "Related Guides & Resources"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/diagnostics/gy6-efi-cel-flash-codes.html",
          children: "GY6 EFI CEL Flash Codes — older KEIHIN/clone ECUs without OBD-2"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/diagnostics/gy6-efi-fuel-injection-troubleshooting.html",
          children: "GY6 EFI Fuel Injection Full Troubleshooting Guide"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/diagnostics/gy6-efi-hud-ecu-hacker-setup.html",
          children: "HUD ECU Hacker Setup Guide"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/diagnostics/gy6-air-leak-diagnosis.html",
          children: "Diagnosing Air Leaks and Vacuum Leaks"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/repair-guides/gy6-ignition-coil-guide.html",
          children: "Ignition Coil Replacement Guide"
        })
      }), "\n"]
    }), "\n", createVNode($$SourceBox, {
      sources: [{
        name: "GY6 Injectie Centrum — Foutcodes",
        url: "https://www.gy6-injectie-centrum.nl/gy6-injectie/foutcodes"
      }, {
        name: "CC BY-SA 4.0",
        url: "https://creativecommons.org/licenses/by-sa/4.0/"
      }]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/diagnostics/gy6-efi-obd2-dtc-fault-codes.mdx";
const file = "/sessions/tender-pensive-knuth/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-efi-obd2-dtc-fault-codes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/tender-pensive-knuth/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-efi-obd2-dtc-fault-codes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
