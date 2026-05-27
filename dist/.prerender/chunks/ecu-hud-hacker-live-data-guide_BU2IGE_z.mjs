import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_DndgnZDT.mjs';
import { $ as $$VideoEmbed } from './VideoEmbed_CaqH1-rp.mjs';
import { $ as $$Callout } from './Callout_D9S1x2uL.mjs';
import 'clsx';

const frontmatter = {
  "title": "Reading Real-Time ECU Data with HUD Hacker",
  "description": "How to read real-time ECU data with HUD Hacker on injected GY6 and Piaggio scooters. All live data fields explained with normal value ranges.",
  "publishDate": "2026-05-20",
  "updatedDate": "2026-05-20",
  "difficulty": "Intermediate",
  "timeEstimate": "~20 min setup + reading",
  "tags": ["diagnostics", "ECU", "OBD2", "HUD Hacker", "fuel injection", "live data"],
  "appliesTo": ["GY6 150cc EFI (BTC Riva, La Souris Sourini/City, Santini Capri)", "Piaggio Vespa Primavera 125/150", "Vespa Sprint 125/150", "Piaggio Zip 50 4T (post-2007)", "Any scooter with K-line / ISO 9141-2 / ISO 14230 diagnostic port"],
  "videos": [{
    "id": "lx7tF0eDl2A",
    "title": "HUD ECU Hacker OBD2 Live Data Tutorial",
    "creator": "YouTube",
    "position": "hero"
  }],
  "sources": [{
    "name": "OBD-II PID reference (obdii.com)",
    "url": "https://www.obdii.com/pid.html"
  }, {
    "name": "OBD-II PIDs — Wikipedia",
    "url": "https://en.wikipedia.org/wiki/OBD-II_PIDs"
  }],
  "canonical": "https://ismr.online/diagnostics/ecu-hud-hacker-live-data-guide.html",
  "draft": false,
  "category": "fuel",
  "engine": "both",
  "fuel": "efi",
  "section": "Fuel System & Idle"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-you-need",
    "text": "What You Need"
  }, {
    "depth": 2,
    "slug": "connector--setup-photos",
    "text": "Connector & Setup Photos"
  }, {
    "depth": 2,
    "slug": "connecting-and-opening-live-data",
    "text": "Connecting and Opening Live Data"
  }, {
    "depth": 2,
    "slug": "live-data-fields-explained--normal-values",
    "text": "Live Data Fields Explained — Normal Values"
  }, {
    "depth": 3,
    "slug": "engine-parameters",
    "text": "Engine Parameters"
  }, {
    "depth": 3,
    "slug": "fuel-system--closed-loop",
    "text": "Fuel System & Closed Loop"
  }, {
    "depth": 3,
    "slug": "temperature--pressure-sensors",
    "text": "Temperature & Pressure Sensors"
  }, {
    "depth": 3,
    "slug": "throttle--vehicle-speed",
    "text": "Throttle & Vehicle Speed"
  }, {
    "depth": 3,
    "slug": "mil-lamp-runtime--distance",
    "text": "MIL Lamp, Runtime & Distance"
  }, {
    "depth": 3,
    "slug": "vehicle--ecu-information",
    "text": "Vehicle & ECU Information"
  }, {
    "depth": 3,
    "slug": "o2--lambda-sensors",
    "text": "O2 / Lambda Sensors"
  }, {
    "depth": 2,
    "slug": "quick-diagnostic-reference--whats-normal-at-a-glance",
    "text": "Quick Diagnostic Reference — What’s Normal at a Glance"
  }, {
    "depth": 2,
    "slug": "common-patterns--what-they-tell-you",
    "text": "Common Patterns & What They Tell You"
  }, {
    "depth": 3,
    "slug": "pattern-1--lean-mixture-with-high-idle",
    "text": "Pattern 1 — Lean mixture with high idle"
  }, {
    "depth": 3,
    "slug": "pattern-2--rich-mixture-with-black-smoke",
    "text": "Pattern 2 — Rich mixture with black smoke"
  }, {
    "depth": 3,
    "slug": "pattern-3--open-loop-on-a-warm-engine",
    "text": "Pattern 3 — Open loop on a warm engine"
  }, {
    "depth": 3,
    "slug": "pattern-4--erratic-rpm--hunting-idle",
    "text": "Pattern 4 — Erratic RPM / hunting idle"
  }, {
    "depth": 3,
    "slug": "pattern-5--high-coolant-temperature-with-normal-fuelling",
    "text": "Pattern 5 — High coolant temperature with normal fuelling"
  }, {
    "depth": 2,
    "slug": "related-videos--resources",
    "text": "Related Videos & Resources"
  }, {
    "depth": 2,
    "slug": "frequently-asked-questions",
    "text": "Frequently Asked Questions"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode("div", {
      class: "guide-meta",
      children: [createVNode("span", {
        children: "Intermediate"
      }), createVNode("span", {
        class: "guide-meta-sep",
        children: "·"
      }), createVNode("span", {
        children: "~20 min setup + reading"
      }), createVNode("span", {
        class: "guide-meta-sep",
        children: "·"
      }), createVNode("span", {
        children: "Updated: 2026-05-20"
      })]
    }), "\n", createVNode("div", {
      class: "guide-tags",
      children: [createVNode("span", {
        class: "guide-tag",
        children: "diagnostics"
      }), createVNode("span", {
        class: "guide-tag",
        children: "ECU"
      }), createVNode("span", {
        class: "guide-tag",
        children: "OBD2"
      }), createVNode("span", {
        class: "guide-tag",
        children: "HUD Hacker"
      }), createVNode("span", {
        class: "guide-tag",
        children: "fuel injection"
      }), createVNode("span", {
        class: "guide-tag",
        children: "live data"
      })]
    }), "\n", createVNode("div", {
      class: "applies-to",
      children: createVNode(_components.p, {
        children: [createVNode("strong", {
          children: "Applies to:"
        }), " All fuel-injected (EFI) scooters with OBD2-compatible ECUs — including GY6 150cc EFI (BTC Riva, La Souris Sourini/City, Santini Capri), Piaggio Vespa Primavera 125/150, Vespa Sprint 125/150, Piaggio Zip 50 4T (post-2007), and any scooter running an ECU with a K-line or ISO 9141-2 / ISO 14230 diagnostic port. ", createVNode("strong", {
          children: "Not applicable to carburettor-only models."
        })]
      })
    }), "\n", createVNode("div", {
      class: "source-box",
      children: createVNode(_components.p, {
        children: [createVNode("strong", {
          children: "📚 Sources & Reference:"
        }), ' ', "\nHUD ECU Hacker v5.8.8 software (Autodetect mode, All OBD2-compliant ECUs),\nreal-world data captured from a GY6-based EFI scooter,", ' ', "\n", createVNode("a", {
          href: "https://www.obdii.com/pid.html",
          target: "_blank",
          rel: "noopener",
          children: "OBD-II PID reference (obdii.com)"
        }), ",", ' ', "\n", createVNode("a", {
          href: "https://en.wikipedia.org/wiki/OBD-II_PIDs",
          target: "_blank",
          rel: "noopener",
          children: "OBD-II PIDs — Wikipedia"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["HUD ECU Hacker is a Windows-based OBD2 diagnostic application that connects to your scooter’s ECU via a K-line or CAN-bus USB adapter and streams real-time sensor data directly to your laptop. Unlike generic OBD2 scanners that only show fault codes, HUD Hacker’s ", createVNode(_components.strong, {
        children: "Data Grid"
      }), " tab exposes every parameter the ECU broadcasts — engine load, fuel trims, ignition timing, coolant temperature, throttle position, and more — updated several times per second while the engine runs."]
    }), "\n", createVNode(_components.p, {
      children: ["This guide explains what every field means, what values are normal at idle and under load, and which readings immediately indicate a problem. Use it alongside the ", createVNode(_components.a, {
        href: "/diagnostics/wizard.html",
        children: "Diagnosis Wizard"
      }), " to pinpoint faults quickly without removing any components."]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode("strong", {
          children: "Safety first:"
        }), " Always connect the OBD2 adapter and launch HUD Hacker ", createVNode("em", {
          children: "before"
        }), " starting the engine. Keep the laptop away from hot engine parts and moving CVT components. Never ride while monitoring the laptop — use a helper to ride or place the scooter on a centre stand for stationary tests."]
      })
    }), "\n", createVNode($$VideoEmbed, {
      videoId: "lx7tF0eDl2A",
      title: "HUD ECU Hacker OBD2 Live Data Demo",
      creator: "YouTube"
    }), "\n", createVNode(_components.h2, {
      id: "what-you-need",
      children: "What You Need"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "HUD ECU Hacker v5.8+"
        }), " — free download, runs on Windows 7/10/11"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "OBD2 USB adapter"
        }), " — K-line / ELM327-compatible (blue or black cable type); avoid cheap Bluetooth ELM327 clones as they drop data at high refresh rates"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "OBD2 diagnostic connector"
        }), " — usually a 4- or 6-pin proprietary plug under the seat or near the battery; you may need a scooter-specific adapter harness (see connector photos below)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Windows laptop"
        }), " — the software does not run on macOS or Linux natively"]
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode("strong", {
          children: "Connector tip:"
        }), " Many GY6 EFI scooters use a 4-pin Sumitomo connector rather than the standard 16-pin OBD2 socket. A short adapter cable with the correct pin-out is available cheaply online — search for “GY6 EFI OBD2 diagnostic cable”. Piaggio models from 2007+ often have a dedicated 3-pin EOBD connector under the seat cowl."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "connector--setup-photos",
      children: "Connector & Setup Photos"
    }), "\n", createVNode("div", {
      class: "screenshot-grid",
      children: [createVNode("div", {
        class: "screenshot-item",
        children: [createVNode("img", {
          src: "/diagnostics/images/ecu-hacker/1cables.jpg",
          alt: "OBD2 USB adapter cable overview",
          loading: "lazy"
        }), createVNode("div", {
          class: "screenshot-caption",
          children: "The USB OBD2 K-line adapter — this blue cable type works reliably with HUD Hacker."
        })]
      }), createVNode("div", {
        class: "screenshot-item",
        children: [createVNode("img", {
          src: "/diagnostics/images/ecu-hacker/2cables.jpg",
          alt: "Cable connectors close-up",
          loading: "lazy"
        }), createVNode("div", {
          class: "screenshot-caption",
          children: "Close-up of cable ends: USB to laptop on one side, scooter diagnostic plug on the other."
        })]
      }), createVNode("div", {
        class: "screenshot-item",
        children: [createVNode("img", {
          src: "/diagnostics/images/ecu-hacker/3cables.jpg",
          alt: "Cable routing on scooter",
          loading: "lazy"
        }), createVNode("div", {
          class: "screenshot-caption",
          children: "Route the cable clear of hot and moving parts before starting the engine."
        })]
      }), createVNode("div", {
        class: "screenshot-item",
        children: [createVNode("img", {
          src: "/diagnostics/images/ecu-hacker/4cables.jpg",
          alt: "Scooter diagnostic port location",
          loading: "lazy"
        }), createVNode("div", {
          class: "screenshot-caption",
          children: "Locating the diagnostic port — typically behind the side panel or under the seat near the battery."
        })]
      }), createVNode("div", {
        class: "screenshot-item",
        children: [createVNode("img", {
          src: "/diagnostics/images/ecu-hacker/5cables_laptop.jpg",
          alt: "Laptop connected to scooter via OBD2 cable",
          loading: "lazy"
        }), createVNode("div", {
          class: "screenshot-caption",
          children: "Full setup: laptop sitting beside the scooter on a centre stand, cable routed safely."
        })]
      }), createVNode("div", {
        class: "screenshot-item",
        children: [createVNode("img", {
          src: "/diagnostics/images/ecu-hacker/6connector.jpg",
          alt: "Diagnostic connector pin detail",
          loading: "lazy"
        }), createVNode("div", {
          class: "screenshot-caption",
          children: "Diagnostic connector pin detail — match the pin-out carefully if using an adapter harness."
        })]
      }), createVNode("div", {
        class: "screenshot-item",
        children: [createVNode("img", {
          src: "/diagnostics/images/ecu-hacker/7connector.jpg",
          alt: "Connector seated in socket",
          loading: "lazy"
        }), createVNode("div", {
          class: "screenshot-caption",
          children: "Connector fully seated. It should click or feel snug — a loose connection causes intermittent data loss."
        })]
      }), createVNode("div", {
        class: "screenshot-item",
        children: [createVNode("img", {
          src: "/diagnostics/images/ecu-hacker/8setupconnected.jpg",
          alt: "HUD Hacker setup screen showing connection confirmed",
          loading: "lazy"
        }), createVNode("div", {
          class: "screenshot-caption",
          children: "HUD Hacker setup screen — “Connected” status confirms the ECU handshake was successful."
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "connecting-and-opening-live-data",
      children: "Connecting and Opening Live Data"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Plug the OBD2 adapter into the scooter’s diagnostic socket and into the laptop’s USB port."
      }), "\n", createVNode(_components.li, {
        children: ["Turn the scooter’s ignition key to ", createVNode(_components.strong, {
          children: "ON"
        }), " (do not start the engine yet)."]
      }), "\n", createVNode(_components.li, {
        children: ["Open HUD ECU Hacker. On the ", createVNode(_components.strong, {
          children: "Control"
        }), " tab, select ", createVNode(_components.em, {
          children: "Autodetect (All OBD2 compliant ECUs)"
        }), " from the protocol dropdown."]
      }), "\n", createVNode(_components.li, {
        children: ["Click ", createVNode(_components.strong, {
          children: "Connect"
        }), ". The status bar at the bottom should show “Scanning” followed by “Connected”. If it fails, try toggling the COM port or checking the adapter driver."]
      }), "\n", createVNode(_components.li, {
        children: "Start the engine."
      }), "\n", createVNode(_components.li, {
        children: ["Click the ", createVNode(_components.strong, {
          children: "Data Grid"
        }), " tab. You will see all available PIDs streaming live values."]
      }), "\n"]
    }), "\n", createVNode("div", {
      class: "screenshot-grid",
      children: [createVNode("div", {
        class: "screenshot-item",
        children: [createVNode("img", {
          src: "/diagnostics/images/ecu-hacker/9appview.jpg",
          alt: "HUD Hacker Data Grid showing full parameter list",
          loading: "lazy"
        }), createVNode("div", {
          class: "screenshot-caption",
          children: "The full Data Grid view in HUD Hacker — every parameter the ECU broadcasts is listed here."
        })]
      }), createVNode("div", {
        class: "screenshot-item",
        children: [createVNode("img", {
          src: "/diagnostics/images/ecu-hacker/10livedata.jpg",
          alt: "HUD Hacker live data fields at idle",
          loading: "lazy"
        }), createVNode("div", {
          class: "screenshot-caption",
          children: "Live data at warm idle — note the coolant temp, MAP pressure, RPM, spark advance, and fuel trim columns."
        })]
      }), createVNode("div", {
        class: "screenshot-item",
        children: [createVNode("img", {
          src: "/diagnostics/images/ecu-hacker/11livedata.jpg",
          alt: "HUD Hacker live data scrolled down",
          loading: "lazy"
        }), createVNode("div", {
          class: "screenshot-caption",
          children: "Scrolled further — throttle position, vehicle speed, IAT, MIL status and runtime fields visible."
        })]
      }), createVNode("div", {
        class: "screenshot-item",
        children: [createVNode("img", {
          src: "/diagnostics/images/ecu-hacker/12livedata.jpg",
          alt: "HUD Hacker dashboard view with grouped parameters",
          loading: "lazy"
        }), createVNode("div", {
          class: "screenshot-caption",
          children: "The Dashboard view groups parameters into Engine, Sensors, Throttle, Fuel, Closed Loop, and O2 Sensors panels."
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "live-data-fields-explained--normal-values",
      children: "Live Data Fields Explained — Normal Values"
    }), "\n", createVNode(_components.p, {
      children: ["The table below covers every field visible in the HUD Hacker Data Grid for a typical GY6 / Piaggio EFI ECU. Values are given for ", createVNode(_components.strong, {
        children: "warm idle"
      }), " (engine at operating temperature, no throttle) and ", createVNode(_components.strong, {
        children: "light cruise"
      }), " (~30–40 km/h, light throttle). A cold engine will read differently — always allow 3–5 minutes for the coolant temperature to stabilise before drawing conclusions."]
    }), "\n", createVNode(_components.h3, {
      id: "engine-parameters",
      children: "Engine Parameters"
    }), "\n", createVNode("table", {
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "Field (UID)"
          }), createVNode("th", {
            children: "Unit"
          }), createVNode("th", {
            children: "Normal — Warm Idle"
          }), createVNode("th", {
            children: "Normal — Light Cruise"
          }), createVNode("th", {
            children: "What it means & what to check"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            children: "Engine Speed (RPM)"
          }), createVNode("td", {
            children: "rpm"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "1,000–1,400"
            })
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "3,500–6,000"
            })
          }), createVNode("td", {
            children: "Current crankshaft speed. Idle below 800 rpm indicates a lean mixture, air leak, or low idle screw setting. High idle (above 1,800 rpm) suggests a stuck throttle body, air leak, or incorrect TPS zero-point."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Calculated Engine Load (LOA)"
          }), createVNode("td", {
            children: "%"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "0–15 %"
            })
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "20–60 %"
            })
          }), createVNode("td", {
            children: "How hard the engine is working, derived from airflow and RPM. Unusually high load at idle (above 25 %) can point to an air leak letting unmetered air past the MAP sensor, or a blocked exhaust."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Spark Advance (SPA)"
          }), createVNode("td", {
            children: "°CA BTDC"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "4–10 °"
            })
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "20–32 °"
            })
          }), createVNode("td", {
            children: "How many degrees before top dead centre the ECU fires the spark plug. Very low advance at cruise (below 15 °) suggests the ECU is retarding timing due to knock or a coolant/MAP sensor fault. Very high advance (above 38 °) risks detonation."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Air/Fuel Ratio"
          }), createVNode("td", {
            children: "λ or A/F ratio"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "~14.7:1 (λ=1.00)"
            })
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "13.5–15.5:1"
            })
          }), createVNode("td", {
            children: "Stoichiometric target for a catalytic converter is 14.7:1. Rich mixture (below 13.0) wastes fuel and can foul the plug. Lean mixture (above 16.0) causes overheating and potential damage. If the ECU cannot reach stoich, check the injector, fuel pressure, and O2 sensor."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Air Status"
          }), createVNode("td", {
            children: "text"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "Upstream O2 control"
            })
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "Upstream O2 control"
            })
          }), createVNode("td", {
            children: "Describes the current air management mode. Should always show O2 sensor-based closed-loop control once the engine is warm. “Open Loop” means the ECU is ignoring the O2 sensor — a cold start state or a sensor fault."
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "fuel-system--closed-loop",
      children: "Fuel System & Closed Loop"
    }), "\n", createVNode("table", {
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "Field (UID)"
          }), createVNode("th", {
            children: "Unit"
          }), createVNode("th", {
            children: "Normal — Warm Idle"
          }), createVNode("th", {
            children: "Normal — Light Cruise"
          }), createVNode("th", {
            children: "What it means & what to check"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            children: "Closed Loop #1 / #2 (FUE)"
          }), createVNode("td", {
            children: "enum"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "Closed Loop"
            })
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "Closed Loop"
            })
          }), createVNode("td", {
            children: "Indicates whether the fuel system is in closed-loop (actively corrected by the O2 sensor) or open-loop (fixed fuel map, no O2 correction). “Unavailable” or “Open Loop” on a warm engine almost always means a failed or unplugged O2 sensor."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Short Term Fuel Trim Bank 1 (STF)"
          }), createVNode("td", {
            children: "%"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "−5 % to +5 %"
            })
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "−8 % to +8 %"
            })
          }), createVNode("td", {
            children: "The ECU’s real-time fuel correction applied on top of the base fuel map. Consistently positive (e.g. +15 %) means the engine is running lean and the ECU is adding fuel to compensate — look for an air leak, weak injector, or low fuel pressure. Consistently negative means running rich — check for a leaking injector or stuck choke/cold-start enrichment."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Long Term Fuel Trim Bank 1 (LTF)"
          }), createVNode("td", {
            children: "%"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "−10 % to +10 %"
            })
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "−10 % to +10 %"
            })
          }), createVNode("td", {
            children: "A learned correction built up over many drive cycles. LTFT drifting beyond ±15 % is a red flag. Unlike STFT (which reacts second-by-second), LTFT reveals a persistent underlying problem. Reset LTFT by clearing adaptive memory (via the DTC clear function) after fixing the root cause."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Short Term Fuel Trim Bank 3 / Bank 4"
          }), createVNode("td", {
            children: "%"
          }), createVNode("td", {
            children: "N/A on single-cylinder"
          }), createVNode("td", {
            children: "N/A on single-cylinder"
          }), createVNode("td", {
            children: "On single-cylinder GY6 and Piaggio engines, Banks 3 and 4 will show N/A or 0. Non-zero values indicate a multi-bank ECU protocol mismatch."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Long Term Fuel Trim Bank 2 (LTF)"
          }), createVNode("td", {
            children: "%"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "−2.3 % (typical)"
            })
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "Within ±10 %"
            })
          }), createVNode("td", {
            children: "Same interpretation as Bank 1 LTFT. On the test scooter, −2.3 % at idle is normal — a slight learned lean correction."
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "temperature--pressure-sensors",
      children: "Temperature & Pressure Sensors"
    }), "\n", createVNode("table", {
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "Field (UID)"
          }), createVNode("th", {
            children: "Unit"
          }), createVNode("th", {
            children: "Normal — Warm Idle"
          }), createVNode("th", {
            children: "Normal — Light Cruise"
          }), createVNode("th", {
            children: "What it means & what to check"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            children: "Coolant Temperature (COO)"
          }), createVNode("td", {
            children: "°C"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "80–100 °C"
            })
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "85–105 °C"
            })
          }), createVNode("td", {
            children: ["Engine Head Temperature (EHT) sensor reading on air-cooled engines, or actual coolant temp on liquid-cooled. Below 60 °C after 10 min of riding indicates a stuck-open thermostat or faulty sensor. Above 120 °C at idle means overheating — check coolant level, fan, and water pump (liquid-cooled) or check for lean mixture / ignition timing (air-cooled). On the test scooter: ", createVNode("strong", {
              children: "34 °C"
            }), " was shown during initial warm-up — a normal cold reading."]
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Intake Air Temperature (IAT)"
          }), createVNode("td", {
            children: "°C"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "Ambient +5–15 °C"
            })
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "Ambient +5–20 °C"
            })
          }), createVNode("td", {
            children: ["Temperature of air entering the throttle body. Should be close to ambient air temperature when cold, rising slightly once the engine bay warms up. An IAT reading stuck at −40 °C or 215 °C (the sensor’s rail-value errors) means a disconnected or failed IAT sensor. The ECU will then fall back to a fixed fuelling map and may run rich. On the test scooter: ", createVNode("strong", {
              children: "14 °C"
            }), " at a 12 °C ambient day — normal."]
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "MAP Pressure (MAP)"
          }), createVNode("td", {
            children: "kPa"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "25–45 kPa"
            })
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "50–90 kPa"
            })
          }), createVNode("td", {
            children: ["Manifold Absolute Pressure — the vacuum in the intake manifold. At idle, a healthy engine draws strong vacuum, so MAP is well below atmospheric (~101 kPa). A MAP reading close to 101 kPa at idle means little or no vacuum — suspect a large air leak, a stuck-open throttle body, or a disconnected MAP sensor hose. On the test scooter: ", createVNode("strong", {
              children: "55 kPa (85 kPa displayed)"
            }), " — normal warm idle range."]
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "throttle--vehicle-speed",
      children: "Throttle & Vehicle Speed"
    }), "\n", createVNode("table", {
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "Field (UID)"
          }), createVNode("th", {
            children: "Unit"
          }), createVNode("th", {
            children: "Normal — Closed Throttle"
          }), createVNode("th", {
            children: "Normal — Wide Open Throttle"
          }), createVNode("th", {
            children: "What it means & what to check"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            children: "Throttle Position Absolute (TPS)"
          }), createVNode("td", {
            children: "%"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "0–5 %"
            })
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "95–100 %"
            })
          }), createVNode("td", {
            children: ["Absolute position of the throttle plate. At closed throttle (idle) it should read near 0 %. If it reads 10–20 % at idle with the throttle physically closed, the TPS zero-point needs calibration, or the butterfly is not fully closing. A high resting TPS causes high idle RPM and rich mixture. On the test scooter: ", createVNode("strong", {
              children: "11.8 %"
            }), " at mild throttle — normal mid-range position."]
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Throttle Position Relative (TPS rel)"
          }), createVNode("td", {
            children: "%"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "0 %"
            })
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "~95 %"
            })
          }), createVNode("td", {
            children: "Position relative to the learned closed-throttle baseline. This is the value the ECU actually uses for fuel calculations. Should be 0 % at idle regardless of the absolute reading, as long as TPS calibration has been performed correctly."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Vehicle Speed (SPE)"
          }), createVNode("td", {
            children: "km/h"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "0 km/h"
            })
          }), createVNode("td", {
            children: "Matches speedo"
          }), createVNode("td", {
            children: ["Speed signal from the wheel sensor. If the ECU reads 0 km/h while you are moving, the speed sensor or its wiring is faulty — this can also prevent the ECU from performing speed-dependent ignition advance. On the test scooter: ", createVNode("strong", {
              children: "0 km/h"
            }), " on centre stand — correct."]
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "mil-lamp-runtime--distance",
      children: "MIL Lamp, Runtime & Distance"
    }), "\n", createVNode("table", {
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "Field (UID)"
          }), createVNode("th", {
            children: "Unit"
          }), createVNode("th", {
            children: "Normal Value"
          }), createVNode("th", {
            children: "What it means & what to check"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            children: "Emission DTC Count (DTC)"
          }), createVNode("td", {
            children: "count"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "0"
            })
          }), createVNode("td", {
            children: "Number of active (confirmed) Diagnostic Trouble Codes stored in the ECU. Any value above 0 means a fault is present. Switch to the Control tab and click “Read DTCs” to retrieve the fault codes with their descriptions."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "MIL Fault Light On (MIL flags)"
          }), createVNode("td", {
            children: "on/off"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "Off"
            })
          }), createVNode("td", {
            children: "Whether the Malfunction Indicator Light (check engine light) is commanded on by the ECU. “On” with no visible dashboard lamp usually means the dashboard bulb is blown. “Off” with a lamp lit on the dash means the lamp is shorted to ground."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Distance run with MIL on (MIL)"
          }), createVNode("td", {
            children: "km"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "0 km"
            })
          }), createVNode("td", {
            children: "Cumulative distance the scooter has been ridden with the MIL illuminated. A high value (e.g. 1,092 km on the test scooter) means the fault has been present for a long time and may have caused secondary damage — prioritise fault investigation."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Distance since DTC clear (MIL)"
          }), createVNode("td", {
            children: "km"
          }), createVNode("td", {
            children: "—"
          }), createVNode("td", {
            children: "Kilometres since someone last cleared fault codes. Useful for knowing whether a recent repair has resolved the fault or whether codes have returned."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Time run with MIL on (MIL)"
          }), createVNode("td", {
            children: "hh:mm:ss"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "00:00:00"
            })
          }), createVNode("td", {
            children: "Engine hours the MIL has been lit. Complements the km counter."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Total Runtime (MIL)"
          }), createVNode("td", {
            children: "hh:mm:ss"
          }), createVNode("td", {
            children: "—"
          }), createVNode("td", {
            children: "Total engine-on time stored in the ECU since manufacture or last reset. Useful for estimating true usage when the odometer is unknown or suspected of tampering."
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "vehicle--ecu-information",
      children: "Vehicle & ECU Information"
    }), "\n", createVNode("table", {
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "Field (UID)"
          }), createVNode("th", {
            children: "Normal / Expected Value"
          }), createVNode("th", {
            children: "Notes"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            children: "OBD Compliance (OBD)"
          }), createVNode("td", {
            children: "EOBD"
          }), createVNode("td", {
            children: "European OBD standard. All scooters sold in the EU post-2007 should show EOBD. If blank, the ECU may use a proprietary protocol and may not support all standard PIDs."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Vehicle ID / VIN (VIN)"
          }), createVNode("td", {
            children: "17-character string"
          }), createVNode("td", {
            children: "The chassis number broadcast by the ECU. Cross-check against the frame stamp to detect ECU swaps or cloned VINs."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Calibration Version (CAL)"
          }), createVNode("td", {
            children: ["Manufacturer string (e.g. ", createVNode("code", {
              children: "RMDP02G1…"
            }), ")"]
          }), createVNode("td", {
            children: ["The ECU firmware/calibration version. Useful when contacting a dealer or searching for known ECU bugs. On the test scooter: ", createVNode("code", {
              children: "52.4D… RMDP02G1"
            }), "."]
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Existing O2 Sensors (O2)"
          }), createVNode("td", {
            children: "1 (single-cylinder)"
          }), createVNode("td", {
            children: "Number of O2 sensor banks the ECU knows about. GY6 and Piaggio single-cylinder engines have one upstream O2 sensor. A value of 0 may mean the ECU has lost communication with the sensor."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Adapter Voltage (Vehicle)"
          }), createVNode("td", {
            children: "12.5–14.8 V (engine running)"
          }), createVNode("td", {
            children: "Battery/charging voltage as seen by the OBD adapter. Below 12.0 V with the engine running indicates a failing stator or rectifier/regulator. Above 15.0 V risks overcharging the battery."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Remaining Battery"
          }), createVNode("td", {
            children: "—"
          }), createVNode("td", {
            children: "Estimated remaining battery capacity — accuracy depends on ECU support. Treat as indicative only."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Freeze Frame DTC"
          }), createVNode("td", {
            children: "None (healthy)"
          }), createVNode("td", {
            children: "The fault code that was active when the ECU last froze a data snapshot. If populated, it shows the exact operating conditions (RPM, load, temp) at the moment the fault was detected — invaluable for intermittent faults."
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "o2--lambda-sensors",
      children: "O2 / Lambda Sensors"
    }), "\n", createVNode(_components.p, {
      children: "The O2 Sensors panel shows live voltage from the upstream (and, if fitted, downstream) oxygen sensors. On a single-cylinder GY6 or Piaggio engine there is typically one upstream narrowband sensor."
    }), "\n", createVNode("table", {
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "Parameter"
          }), createVNode("th", {
            children: "Unit"
          }), createVNode("th", {
            children: "Normal (Warm, Closed Loop)"
          }), createVNode("th", {
            children: "What to check if abnormal"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            children: "O2 Voltage Bank 1 Sensor 1"
          }), createVNode("td", {
            children: "V"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "0.1–0.9 V, switching ~2×/sec"
            })
          }), createVNode("td", {
            children: "A sensor stuck at 0.45 V (mid-point) is lazy or failed. Stuck low (0.1 V) = lean or dead sensor. Stuck high (0.9 V) = rich or shorted. No switching at all on a warm engine = failed sensor or open-loop ECU mode."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Wide Range O2 (Lambda) — if fitted"
          }), createVNode("td", {
            children: "λ"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "val-ok",
              children: "0.97–1.03 λ at idle"
            })
          }), createVNode("td", {
            children: "Wide-range (wideband) sensors give a precise λ value rather than a binary 0/1 V swing. A reading consistently above 1.05 λ = lean; below 0.95 λ = rich. Most budget EFI scooters use a narrowband sensor — wideband fields will show dashes."
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "quick-diagnostic-reference--whats-normal-at-a-glance",
      children: "Quick Diagnostic Reference — What’s Normal at a Glance"
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode("strong", {
          children: "Pro tip:"
        }), " Watch the Short Term Fuel Trim and MAP Pressure together. If STFT is strongly positive (lean correction) and MAP is high (low vacuum), the most likely cause is an intake air leak — unmetered air enters downstream of the MAP sensor, making the mixture lean without the ECU seeing higher airflow."]
      })
    }), "\n", createVNode("table", {
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "Parameter"
          }), createVNode("th", {
            children: "Warm Idle"
          }), createVNode("th", {
            children: "Concerning Value"
          }), createVNode("th", {
            children: "Likely cause if abnormal"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            children: "RPM"
          }), createVNode("td", {
            children: "1,000–1,400"
          }), createVNode("td", {
            children: "<800 or >1,800"
          }), createVNode("td", {
            children: "Air leak, idle screw, stuck throttle, TPS fault"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Coolant / EHT Temp"
          }), createVNode("td", {
            children: "80–100 °C"
          }), createVNode("td", {
            children: "<60 °C after 10 min, or >120 °C"
          }), createVNode("td", {
            children: "Thermostat, sensor failure, overheating, lean mixture"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "MAP Pressure"
          }), createVNode("td", {
            children: "25–45 kPa"
          }), createVNode("td", {
            children: ">70 kPa at idle"
          }), createVNode("td", {
            children: "Air leak, disconnected MAP hose, throttle body stuck open"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "IAT"
          }), createVNode("td", {
            children: "Ambient +5–15 °C"
          }), createVNode("td", {
            children: "−40 °C or 215 °C"
          }), createVNode("td", {
            children: "Disconnected or failed IAT sensor"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Short Term Fuel Trim"
          }), createVNode("td", {
            children: "−5 % to +5 %"
          }), createVNode("td", {
            children: ">+15 % or <−15 %"
          }), createVNode("td", {
            children: "Air leak (lean), injector drip (rich), O2 sensor fault"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Long Term Fuel Trim"
          }), createVNode("td", {
            children: "−10 % to +10 %"
          }), createVNode("td", {
            children: ">±15 %"
          }), createVNode("td", {
            children: "Persistent lean/rich — injector, fuel pressure, air leak"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Spark Advance"
          }), createVNode("td", {
            children: "4–10 ° BTDC"
          }), createVNode("td", {
            children: "<2 ° or >15 ° at idle"
          }), createVNode("td", {
            children: "Knock retard, MAP/coolant sensor fault, ECU adaptation issue"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Closed Loop Status"
          }), createVNode("td", {
            children: "Closed Loop"
          }), createVNode("td", {
            children: "Open Loop / Unavailable (warm)"
          }), createVNode("td", {
            children: "Failed O2 sensor, unplugged sensor connector"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "O2 Voltage"
          }), createVNode("td", {
            children: "0.1–0.9 V switching"
          }), createVNode("td", {
            children: "Stuck at 0.45 V, or no switching"
          }), createVNode("td", {
            children: "Lazy or failed O2 sensor, rich/lean condition"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "TPS (Absolute)"
          }), createVNode("td", {
            children: "0–5 % at closed throttle"
          }), createVNode("td", {
            children: ">10 % at closed throttle"
          }), createVNode("td", {
            children: "TPS calibration needed, butterfly not closing fully"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Adapter Voltage"
          }), createVNode("td", {
            children: "13.5–14.5 V (running)"
          }), createVNode("td", {
            children: "<12.0 V or >15.0 V"
          }), createVNode("td", {
            children: "Failing stator, rectifier/regulator fault"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "DTC Count"
          }), createVNode("td", {
            children: "0"
          }), createVNode("td", {
            children: "Any number >0"
          }), createVNode("td", {
            children: "Read DTCs — investigate and clear after repair"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "common-patterns--what-they-tell-you",
      children: "Common Patterns & What They Tell You"
    }), "\n", createVNode(_components.h3, {
      id: "pattern-1--lean-mixture-with-high-idle",
      children: "Pattern 1 — Lean mixture with high idle"
    }), "\n", createVNode(_components.p, {
      children: ["STFT strongly positive (+15 % or more), RPM above 1,600 at idle, MAP pressure high (above 60 kPa at idle). This combination almost always means an ", createVNode(_components.strong, {
        children: "air leak"
      }), " between the throttle body and the engine — a cracked intake boot, loose injector O-ring, or split vacuum hose. Spray carb cleaner briefly around joints while watching RPM; the engine will stumble and RPM will change over the leak point."]
    }), "\n", createVNode(_components.h3, {
      id: "pattern-2--rich-mixture-with-black-smoke",
      children: "Pattern 2 — Rich mixture with black smoke"
    }), "\n", createVNode(_components.p, {
      children: "STFT strongly negative (−15 % or more), O2 voltage stuck high (0.8–0.9 V), possible fuel smell. Causes: leaking injector (drips fuel when not commanded), incorrect TPS zero-point causing the ECU to think the throttle is open at idle, or a failed O2 sensor that reads rich when the mixture is actually stoichiometric."
    }), "\n", createVNode(_components.h3, {
      id: "pattern-3--open-loop-on-a-warm-engine",
      children: "Pattern 3 — Open loop on a warm engine"
    }), "\n", createVNode(_components.p, {
      children: "Closed Loop status shows “Open Loop” or “Unavailable” after the engine has been running for 5+ minutes. The O2 sensor either is not heating up (check the heater circuit — usually 2 wires plus the signal wire) or is completely failed. The ECU will run on a fixed fuelling map, typically making the engine slightly rich. Fuel trim values will show 0 % because no corrections are being made."
    }), "\n", createVNode(_components.h3, {
      id: "pattern-4--erratic-rpm--hunting-idle",
      children: "Pattern 4 — Erratic RPM / hunting idle"
    }), "\n", createVNode(_components.p, {
      children: ["RPM oscillates between 800 and 1,800 in a slow wave, STFT swings between +20 % and −20 % rapidly. This is characteristic of a ", createVNode(_components.strong, {
        children: "lazy or slow O2 sensor"
      }), " causing the closed-loop system to over-correct. Replace the O2 sensor if it is more than 20,000 km old or shows no brisk switching in the live data."]
    }), "\n", createVNode(_components.h3, {
      id: "pattern-5--high-coolant-temperature-with-normal-fuelling",
      children: "Pattern 5 — High coolant temperature with normal fuelling"
    }), "\n", createVNode(_components.p, {
      children: "COO above 115 °C, fuel trims and MAP normal. On an air-cooled engine, check for a blocked cylinder fin area (mud or debris), a lean ignition condition caused by advanced timing, or a faulty temperature sensor giving a false reading. On liquid-cooled engines, check the coolant level, radiator fan operation, and thermostat."
    }), "\n", createVNode(_components.h2, {
      id: "related-videos--resources",
      children: "Related Videos & Resources"
    }), "\n", createVNode("div", {
      class: "related-videos",
      children: [createVNode("div", {
        class: "video-card",
        children: [createVNode("h4", {
          children: "Reading OBD2 Fuel Trims on Small Engines"
        }), createVNode("p", {
          children: "Detailed explanation of short-term and long-term fuel trims and how to use them to diagnose lean/rich faults."
        }), createVNode("a", {
          href: "https://www.youtube.com/results?search_query=OBD2+fuel+trim+diagnosis+scooter",
          target: "_blank",
          rel: "noopener",
          children: "Search on YouTube →"
        })]
      }), createVNode("div", {
        class: "video-card",
        children: [createVNode("h4", {
          children: "HUD ECU Hacker Setup & First Connection"
        }), createVNode("p", {
          children: "Step-by-step guide to installing the software, selecting the right COM port, and making the first ECU connection."
        }), createVNode("a", {
          href: "https://www.youtube.com/results?search_query=HUD+ECU+Hacker+setup+tutorial",
          target: "_blank",
          rel: "noopener",
          children: "Search on YouTube →"
        })]
      }), createVNode("div", {
        class: "video-card",
        children: [createVNode("h4", {
          children: "GY6 EFI O2 Sensor Replacement"
        }), createVNode("p", {
          children: "How to identify, remove, and replace the upstream oxygen sensor on a GY6 EFI engine."
        }), createVNode("a", {
          href: "https://www.youtube.com/results?search_query=GY6+EFI+O2+sensor+replacement",
          target: "_blank",
          rel: "noopener",
          children: "Search on YouTube →"
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "frequently-asked-questions",
      children: "Frequently Asked Questions"
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "My HUD Hacker shows “Scanning” indefinitely and never connects. What should I check?"
      }), createVNode("p", {
        children: "First confirm the correct COM port is selected — open Device Manager in Windows and look for the USB serial adapter under “Ports (COM & LPT)”. Also check that the ignition is ON before connecting (the ECU must be powered). Some cheap ELM327 adapters require you to select “ISO 9141-2” or “KWP2000 fast” protocol manually rather than Autodetect. Try toggling the protocol selector on the Control tab."
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "The software connects but most fields show “N/A” or 0. Is that normal?"
      }), createVNode("p", {
        children: "Partially — many advanced fields (multi-bank fuel trims, wide-range O2 sensors, torque parameters) are not supported by budget scooter ECUs and will always show N/A. The important fields — RPM, coolant temp, MAP, IAT, TPS, fuel trims, and closed loop status — should all have live values once the engine is running. If core fields are also blank, try a different OBD2 protocol setting or check the adapter cable connection."
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "Should I clear fault codes after reading them?"
      }), createVNode("p", {
        children: "Only after you have fixed the underlying problem. Clearing codes without repairing the fault will temporarily turn off the MIL lamp, but the code will return within one drive cycle once the ECU re-detects the fault. Also note: clearing codes resets the Long Term Fuel Trim, the freeze frame data, and the MIL-distance/time counters — so take a screenshot or note down everything before clearing."
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "My LTFT is at +18 % but there are no fault codes. Should I be worried?"
      }), createVNode("p", {
        children: "Yes — a Long Term Fuel Trim beyond ±15 % is a significant lean (positive) or rich (negative) condition. The ECU is compensating for a real problem without yet setting a code because the fault may be intermittent or just below the code-setting threshold. Investigate intake air leaks, fuel pressure, and injector condition. If left unaddressed, the LTFT will continue to climb until a P0171 (System Too Lean) or similar code appears."
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "What is the difference between the Data Grid and Dashboard views?"
      }), createVNode("p", {
        children: ["The ", createVNode("strong", {
          children: "Data Grid"
        }), " shows every single PID as a scrollable table with raw values, scaled values, min/max columns, and a bar graph gauge. It is the most complete view and best for systematic diagnosis. The ", createVNode("strong", {
          children: "Dashboard"
        }), " groups parameters into logical panels (Engine, Sensors, Throttle, Fuel, Closed Loop, O2 Sensors) with a cleaner layout — useful for a quick overview or for showing a customer what the readings mean."]
      })]
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

const url = "src/content/diagnostics/ecu-hud-hacker-live-data-guide.mdx";
const file = "/sessions/sharp-gifted-meitner/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/ecu-hud-hacker-live-data-guide.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/sharp-gifted-meitner/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/ecu-hud-hacker-live-data-guide.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
