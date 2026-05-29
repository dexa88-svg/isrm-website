import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_DeAbtbX6.mjs';
import { $ as $$Callout } from './Callout_Bvcq2dPT.mjs';
import { $ as $$SourceBox } from './SourceBox_DEB7vRAy.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 EFI TPS Sensor Diagnosis & Replacement",
  "description": "Diagnose and replace the Throttle Position Sensor (TPS) on GY6 EFI scooters — Euro 4/5 Delphi and Motion ECU. Includes fault codes P0121/P0122, voltage tests.",
  "publishDate": "2026-05-21",
  "updatedDate": "2026-05-21",
  "difficulty": "Intermediate",
  "timeEstimate": "~45 min",
  "tags": ["gy6", "efi", "tps", "throttle", "fuel-injection", "euro4", "diagnostics"],
  "appliesTo": ["GY6 139QMB Euro 4/5 EFI (50cc)", "GY6 157QMJ EFI (150cc)", "BTC Riva EFI", "La Souris Sourini / City EFI", "AGM VX50 EFI"],
  "videos": [],
  "tools": ["Multimeter (DC voltage range)", "OBD2 KKL cable (optional — for fault code reading)", "HUD ECU Hacker software (optional — see EFI diagnostics guide)", "Phillips screwdriver", "8 mm spanner"],
  "sources": [{
    "name": "Motorroller.de — Euro 4 Scooter Error & Blink Codes (4T50E4)",
    "url": "https://www.motorroller.de/en/fehlercodes-blinkcodes-4t50e4/"
  }, {
    "name": "China Scooter Onderdelen — TPS/MAP Sensor GY6 Euro 4/5",
    "url": "https://en.chinascooteronderdelen.nl/product/tps-map-sensor-gy6-euro-4-5-delphi-motion-efi/"
  }, {
    "name": "ScootDawg Forum — Throttle Position Sensor",
    "url": "https://scootdawg.proboards.com/thread/51358/throttle-position-sensor"
  }, {
    "name": "49ccScoot Forum — GY6 TPS and Oxygen Sensor",
    "url": "https://49ccscoot.proboards.com/thread/29582/gy6-tps-oxygen-sensor"
  }],
  "canonical": "https://ismr.online/diagnostics/gy6-efi-tps-sensor-diagnosis.html",
  "category": "fuel",
  "engine": "gy6",
  "fuel": "efi",
  "section": "Fuel Injection (EFI)",
  "cardTag": "TPS",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "fault-codes-for-tps-faults",
    "text": "Fault Codes for TPS Faults"
  }, {
    "depth": 2,
    "slug": "symptoms-of-a-failing-tps",
    "text": "Symptoms of a Failing TPS"
  }, {
    "depth": 2,
    "slug": "step-1--visual-inspection",
    "text": "Step 1 — Visual Inspection"
  }, {
    "depth": 2,
    "slug": "step-2--voltage-test-live-signal",
    "text": "Step 2 — Voltage Test (Live Signal)"
  }, {
    "depth": 2,
    "slug": "step-3--reference-voltage-check",
    "text": "Step 3 — Reference Voltage Check"
  }, {
    "depth": 2,
    "slug": "step-4--replacing-the-tps",
    "text": "Step 4 — Replacing the TPS"
  }, {
    "depth": 2,
    "slug": "replacement-tps-part-notes",
    "text": "Replacement TPS Part Notes"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      children: "The Throttle Position Sensor (TPS) is a variable resistor mounted on the throttle body of GY6 EFI scooters. As you open the throttle, a sliding contact inside the TPS changes resistance, sending a voltage signal to the ECU that represents throttle opening angle. The ECU uses this data — alongside the MAP sensor and O2 sensor — to calculate the correct fuel injection duration and ignition timing."
    }), "\n", createVNode(_components.p, {
      children: "On Euro 4 and Euro 5 GY6 50cc scooters (2017 onwards), the TPS is part of the throttle body assembly used by the Delphi MT05 or Motion EFI systems. A faulty TPS causes erratic fuelling, stuttering, poor idle, or a complete no-start with a CEL (Check Engine Light) flashing."
    }), "\n", createVNode(_components.h2, {
      id: "fault-codes-for-tps-faults",
      children: "Fault Codes for TPS Faults"
    }), "\n", createVNode(_components.p, {
      children: "Most GY6 EFI systems flash a code sequence via the CEL/MIL light. On Delphi MT05-based systems:"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "DTC Code"
          }), createVNode("th", {
            children: "Meaning"
          }), createVNode("th", {
            children: "CEL Blink Pattern"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "P0121"
          }), createVNode("td", {
            children: "TPS signal out of range — intermittent"
          }), createVNode("td", {
            children: "1 long, 2 short"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "P0122"
          }), createVNode("td", {
            children: "TPS circuit low (below 0.2 V)"
          }), createVNode("td", {
            children: "1 long, 2 short (variant)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "P0123"
          }), createVNode("td", {
            children: "TPS circuit high (above 4.8 V)"
          }), createVNode("td", {
            children: "1 long, 2 short (variant)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "—"
          }), createVNode("td", {
            children: "TPS not connected or contact problem"
          }), createVNode("td", {
            children: "CEL permanent on"
          })]
        })]
      })
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["For GY6 EFI scooters sold in Belgium and the Netherlands (BTC Riva, La Souris Sourini/City, AGM VX50), the fault code list published by motorroller.de covers the 4T50E4 ECU blink code protocol used on many Chinese Euro 4 50cc scooters. See the ", createVNode(_components.a, {
          href: "/diagnostics/gy6-efi-obd2-dtc-fault-codes.html",
          children: "GY6 EFI OBD-2 DTC Fault Codes guide"
        }), " for the complete list."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "symptoms-of-a-failing-tps",
      children: "Symptoms of a Failing TPS"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Engine stutters or hesitates when opening throttle from idle"
      }), "\n", createVNode(_components.li, {
        children: "Erratic idle speed — surging up and down"
      }), "\n", createVNode(_components.li, {
        children: "Poor fuel economy or black exhaust smoke (ECU over-fuelling due to incorrect TPS signal)"
      }), "\n", createVNode(_components.li, {
        children: "CEL/MIL illuminated — flashing P0121, P0122, or P0123"
      }), "\n", createVNode(_components.li, {
        children: "Engine runs fine at idle but cuts out under load"
      }), "\n", createVNode(_components.li, {
        children: "Hard starting (ECU applies incorrect starting enrichment)"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "step-1--visual-inspection",
      children: "Step 1 — Visual Inspection"
    }), "\n", createVNode(_components.p, {
      children: "Before testing with a multimeter, inspect the TPS physically:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Locate the throttle body on the intake side of the engine. The TPS is a small sensor plugged into the side of the throttle body with a 3-wire connector."
      }), "\n", createVNode(_components.li, {
        children: ["Unplug the connector and inspect both the sensor pins and the harness connector for:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Corrosion (green or white residue on the pins)"
          }), "\n", createVNode(_components.li, {
            children: "Bent or pushed-back pins"
          }), "\n", createVNode(_components.li, {
            children: "Cracked or chafed wiring near the connector"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "Reconnect and wiggle the connector while the engine idles. If this changes idle behaviour, the connection is intermittent — clean and re-pin before replacing the sensor."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "step-2--voltage-test-live-signal",
      children: "Step 2 — Voltage Test (Live Signal)"
    }), "\n", createVNode(_components.p, {
      children: "This test checks whether the TPS is producing a correct, smooth voltage output as the throttle is opened."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Setup:"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "With the ignition ON and engine off (or running), back-probe the TPS connector with a multimeter set to DC Voltage."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Identify the three wires:"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "5 V reference (Vref)"
            }), " — from ECU, typically green or white wire"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Ground"
            }), " — black wire"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Signal output"
            }), " — yellow, orange, or blue wire (goes back to ECU)"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Measure between the Signal wire and Ground wire."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Expected readings:"
      })
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Throttle Position"
          }), createVNode("th", {
            children: "Expected Voltage"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Fully closed (idle)"
          }), createVNode("td", {
            children: "0.4–0.7 V"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Half throttle (~45°)"
          }), createVNode("td", {
            children: "~2.0–2.5 V"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Wide open throttle (WOT)"
          }), createVNode("td", {
            children: "4.0–4.8 V"
          })]
        })]
      })
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Key test:"
        }), " Slowly open and close the throttle while watching the multimeter. The voltage must change ", createVNode(_components.strong, {
          children: "smoothly and continuously"
        }), " — no sudden jumps, flat spots, or drop-outs. Any discontinuity in the sweep means the sliding contact inside the TPS is worn or damaged and the sensor must be replaced."]
      })
    }), "\n", createVNode(_components.p, {
      children: "If the voltage is stuck at 0 V or 5 V regardless of throttle position, check the 5 V reference supply and ground first. If those are correct, the TPS itself is faulty."
    }), "\n", createVNode(_components.h2, {
      id: "step-3--reference-voltage-check",
      children: "Step 3 — Reference Voltage Check"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Unplug the TPS connector."
      }), "\n", createVNode(_components.li, {
        children: "With ignition ON, measure between the Vref pin in the harness connector and the Ground pin."
      }), "\n", createVNode(_components.li, {
        children: ["Expected: ", createVNode(_components.strong, {
          children: "4.8–5.2 V DC"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "If you read 0 V or battery voltage: the ECU or wiring harness has a fault — not the TPS."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "step-4--replacing-the-tps",
      children: "Step 4 — Replacing the TPS"
    }), "\n", createVNode(_components.p, {
      children: "On most GY6 EFI throttle bodies, the TPS is a bolt-on sensor on the throttle body:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Unplug the 3-wire TPS connector."
      }), "\n", createVNode(_components.li, {
        children: "Remove the 2 Phillips screws securing the TPS to the throttle body."
      }), "\n", createVNode(_components.li, {
        children: "Slide the old TPS off the throttle shaft."
      }), "\n", createVNode(_components.li, {
        children: "Fit the new TPS — align the slot on the sensor’s drive with the throttle shaft flat."
      }), "\n", createVNode(_components.li, {
        children: ["Reinstall and tighten the screws finger-tight. ", createVNode(_components.strong, {
          children: "Do not fully tighten yet"
        }), " — the TPS may need adjustment."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "TPS Adjustment (Closed Throttle Voltage):"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "With the ignition ON, measure the TPS signal voltage with the throttle fully closed."
      }), "\n", createVNode(_components.li, {
        children: ["Rotate the TPS body slightly while watching the voltage until it reads ", createVNode(_components.strong, {
          children: "0.50–0.55 V"
        }), " (fully closed position per Delphi MT05 spec)."]
      }), "\n", createVNode(_components.li, {
        children: "Once set, tighten the mounting screws firmly."
      }), "\n", createVNode(_components.li, {
        children: "Recheck: open the throttle to WOT and confirm voltage reaches approximately 4.5 V, then returns to 0.5 V when released."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Clear fault codes after replacement."
        }), " If you have an OBD2 KKL cable and HUD ECU Hacker, clear any stored P0121–P0123 codes after fitting the new sensor. Without a scanner, disconnect the battery for 5 minutes to reset the ECU — the CEL will extinguish if the fault is resolved."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "replacement-tps-part-notes",
      children: "Replacement TPS Part Notes"
    }), "\n", createVNode(_components.p, {
      children: "Euro 4/5 GY6 50cc scooters (BTC Riva, La Souris, AGM etc.) use a TPS integrated into the throttle body for the Delphi MT05 or Motion EFI system. The TPS and MAP sensor are often combined into a single unit on these platforms. When ordering a replacement, specify:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "ECU type:"
        }), " Delphi MT05 or Motion (check the ECU label under the seat panel)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Engine code:"
        }), " 139QMB (50cc) or 157QMJ (150cc)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Euro standard:"
        }), " Euro 4 or Euro 5"]
      }), "\n"]
    }), "\n", createVNode($$SourceBox, {
      sources: frontmatter.sources
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

const url = "src/content/diagnostics/gy6-efi-tps-sensor-diagnosis.mdx";
const file = "/sessions/tender-pensive-knuth/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-efi-tps-sensor-diagnosis.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/tender-pensive-knuth/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-efi-tps-sensor-diagnosis.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
