import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_CrppOBcV.mjs';
import { $ as $$Callout } from './Callout_4os8_15B.mjs';
import { $ as $$VideoEmbed } from './VideoEmbed_CRZrF2Zc.mjs';
import { $ as $$SourceBox } from './SourceBox_BTWGR00M.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 EFI System Troubleshooting Checklist",
  "description": "Step-by-step checklist for diagnosing GY6 EFI faults: grounding, fuel pressure (42 PSI), air leaks, TPS reset, woodruff key, and fuel pump regulator check.",
  "publishDate": "2026-05-29T00:00:00.000Z",
  "updatedDate": "2026-05-29T00:00:00.000Z",
  "difficulty": "Intermediate",
  "timeEstimate": "60 min",
  "tags": ["GY6", "EFI", "Fuel Injection", "Diagnostics", "Troubleshooting"],
  "appliesTo": ["GY6 150cc (157QMJ)", "GY6 125cc (152QMI)", "BTC Riva (EFI)", "La Souris Sourini (EFI)"],
  "videos": [],
  "tools": ["Multimeter", "Fuel pressure gauge (0–70 PSI)", "OBD2 / KKL diagnostic cable", "Carburetor cleaner (for air leak detection)", "8-gauge ground wire"],
  "sources": [{
    "name": "Rolling Wrench — Having trouble with your GY6 EFI System?",
    "url": "https://www.rollingwrenchdenver.com/blogs/news/i-am-having-trouble-with-my-gy6-efi-system"
  }],
  "canonical": "https://ismr.online/diagnostics/gy6-efi-system-troubleshooting-checklist.html",
  "draft": false,
  "category": "fuel",
  "engine": "gy6",
  "fuel": "efi",
  "section": "EFI / Fuel Injection"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "tools--parts-needed",
    "text": "Tools & Parts Needed"
  }, {
    "depth": 2,
    "slug": "step-by-step-diagnostic-checklist",
    "text": "Step-by-Step Diagnostic Checklist"
  }, {
    "depth": 3,
    "slug": "step-1--verify-ground-connection",
    "text": "Step 1 — Verify Ground Connection"
  }, {
    "depth": 3,
    "slug": "step-2--check-fuel-supply-to-tank",
    "text": "Step 2 — Check Fuel Supply to Tank"
  }, {
    "depth": 3,
    "slug": "step-3--measure-fuel-pressure-at-injector",
    "text": "Step 3 — Measure Fuel Pressure at Injector"
  }, {
    "depth": 3,
    "slug": "step-4--check-for-air-leaks-at-intake",
    "text": "Step 4 — Check for Air Leaks at Intake"
  }, {
    "depth": 3,
    "slug": "step-5--read-fault-codes-obd2",
    "text": "Step 5 — Read Fault Codes (OBD2)"
  }, {
    "depth": 3,
    "slug": "step-6--reset-the-throttle-position-sensor-tps",
    "text": "Step 6 — Reset the Throttle Position Sensor (TPS)"
  }, {
    "depth": 3,
    "slug": "step-7--adjust-the-idle-airfuel-screw",
    "text": "Step 7 — Adjust the Idle Air/Fuel Screw"
  }, {
    "depth": 3,
    "slug": "step-8--verify-woodruff-key-and-magneto-timing",
    "text": "Step 8 — Verify Woodruff Key and Magneto Timing"
  }, {
    "depth": 3,
    "slug": "step-9--confirm-correct-efi-kit-for-engine-size",
    "text": "Step 9 — Confirm Correct EFI Kit for Engine Size"
  }, {
    "depth": 3,
    "slug": "step-10--check-the-fuel-pump-regulator",
    "text": "Step 10 — Check the Fuel Pump Regulator"
  }, {
    "depth": 2,
    "slug": "specifications-summary",
    "text": "Specifications Summary"
  }, {
    "depth": 2,
    "slug": "next-steps-if-fault-persists",
    "text": "Next Steps if Fault Persists"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$SourceBox, {
      sources: frontmatter.sources
    }), "\n", createVNode(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "If your GY6 EFI scooter won’t start, idles roughly, or stalls, work through this checklist in order before replacing parts. Most EFI faults on GY6 scooters come down to a handful of root causes: poor grounding, insufficient fuel pressure, air leaks, or a TPS that needs resetting. This guide applies to BTC Riva, La Souris Sourini, Santini Capri, and other GY6-platform scooters fitted with Rongmao, Delphi, or Rolling Wrench ProBld EFI systems."
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: "Always confirm ignition is off and the fuel system is depressurised before disconnecting fuel lines. Fuel sprayed onto a hot engine is a fire hazard."
      })
    }), "\n", createVNode(_components.h2, {
      id: "tools--parts-needed",
      children: "Tools & Parts Needed"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Multimeter (DC voltage and resistance)"
      }), "\n", createVNode(_components.li, {
        children: "Fuel pressure gauge rated to at least 70 PSI (5 bar)"
      }), "\n", createVNode(_components.li, {
        children: "OBD2 / KKL 6-pin diagnostic cable (for fault code reading)"
      }), "\n", createVNode(_components.li, {
        children: "Carburetor cleaner spray (air leak detection — do NOT use near flame)"
      }), "\n", createVNode(_components.li, {
        children: "8-gauge ground wire and ring terminals"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "step-by-step-diagnostic-checklist",
      children: "Step-by-Step Diagnostic Checklist"
    }), "\n", createVNode(_components.h3, {
      id: "step-1--verify-ground-connection",
      children: "Step 1 — Verify Ground Connection"
    }), "\n", createVNode(_components.p, {
      children: "A weak ground is the single most common cause of EFI faults on GY6 scooters."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Locate the EFI system’s ground wire (usually black, from the ECU harness)."
      }), "\n", createVNode(_components.li, {
        children: ["Run a dedicated 8-gauge wire from the ", createVNode(_components.strong, {
          children: "negative battery terminal directly to the starter motor mounting bolt"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Connect the EFI system’s ground wire to that same bolt, sharing the earthing point."
      }), "\n", createVNode(_components.li, {
        children: "Check with a multimeter: resistance between battery negative and ECU ground should be < 0.2 Ω."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: "Do not rely on chassis grounds through frame bolts painted or corroded with oxidation — always use a direct battery-to-starter dedicated ground."
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-2--check-fuel-supply-to-tank",
      children: "Step 2 — Check Fuel Supply to Tank"
    }), "\n", createVNode(_components.p, {
      children: "An air bubble at the inlet can prevent the pump from priming."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Confirm the fuel tank is at least one-quarter full."
      }), "\n", createVNode(_components.li, {
        children: ["Trace the fuel inlet line from the pump to the tank. ", createVNode(_components.strong, {
          children: "No part of the inlet line should run above the bottom of the fuel tank"
        }), " — any high loop creates an air bubble the pump cannot overcome."]
      }), "\n", createVNode(_components.li, {
        children: "Disconnect the inlet line at the pump and allow fuel to flow briefly onto a rag to purge any air pocket, then reconnect."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-3--measure-fuel-pressure-at-injector",
      children: "Step 3 — Measure Fuel Pressure at Injector"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Connect a fuel pressure gauge between the fuel pump outlet and the injector supply line using a T-fitting."
      }), "\n", createVNode(_components.li, {
        children: "Key on (engine not started) — the pump should prime and hold pressure within 5 seconds."
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Target pressure: 42 PSI (2.9 bar)."
        }), " Low pressure indicates a failing pump or clogged filter; high pressure indicates a faulty regulator."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Pressure"
          }), createVNode(_components.th, {
            children: "Likely Cause"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "< 35 PSI"
          }), createVNode(_components.td, {
            children: "Weak pump, clogged inline filter, or air in inlet"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "42 PSI ± 3"
          }), createVNode(_components.td, {
            children: "Normal"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "> 50 PSI"
          }), createVNode(_components.td, {
            children: "Faulty fuel pressure regulator"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "step-4--check-for-air-leaks-at-intake",
      children: "Step 4 — Check for Air Leaks at Intake"
    }), "\n", createVNode(_components.p, {
      children: "Air leaks cause the ECU to run lean, leading to rough idle, hesitation, or stalling."
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: "Use carburetor cleaner for leak detection only with the engine cold or idling at low RPM. Keep a fire extinguisher nearby and do not use near ignition sources."
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Confirm the plastic intake manifold spacer is ", createVNode(_components.strong, {
          children: "removed"
        }), " — EFI systems tuned for a specific throttle body bore do not use this spacer."]
      }), "\n", createVNode(_components.li, {
        children: "Start the engine and allow it to idle."
      }), "\n", createVNode(_components.li, {
        children: "Spray short bursts of carburetor cleaner around the intake manifold joint, throttle body clocking flange, and any vacuum ports."
      }), "\n", createVNode(_components.li, {
        children: "If engine RPM changes (rises then drops) when sprayed, that location is sucking air — reseal with fresh clamps or RTV sealant and re-test."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-5--read-fault-codes-obd2",
      children: "Step 5 — Read Fault Codes (OBD2)"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "With the ignition off, plug the KKL OBD2 cable into the 6-pin diagnostic connector (typically under the seat or near the battery)."
      }), "\n", createVNode(_components.li, {
        children: "Open HUD ECU Hacker or a compatible OBD2 app and key on."
      }), "\n", createVNode(_components.li, {
        children: ["Navigate to ", createVNode(_components.strong, {
          children: "Fault Codes / DTC"
        }), " — note all stored codes."]
      }), "\n", createVNode(_components.li, {
        children: "Clear codes and re-test after completing other steps. Codes that reappear after clearing indicate active faults."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Common codes and their meanings are documented in the ", createVNode(_components.a, {
        href: "/diagnostics/gy6-efi-obd2-dtc-fault-codes.html",
        children: "GY6 EFI OBD-2 DTC Fault Codes guide"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "step-6--reset-the-throttle-position-sensor-tps",
      children: "Step 6 — Reset the Throttle Position Sensor (TPS)"
    }), "\n", createVNode(_components.p, {
      children: "A TPS out of calibration causes idle instability, stalling on deceleration, and hesitation off idle."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Key on, engine off."
      }), "\n", createVNode(_components.li, {
        children: "Follow the TPS reset procedure for your ECU variant — typically: key on → slowly open throttle from fully closed to fully open 3 times → key off → wait 10 seconds → key on."
      }), "\n", createVNode(_components.li, {
        children: ["Alternatively, connect the OBD2 cable and use the ECU software’s ", createVNode(_components.strong, {
          children: "TPS Reset / Throttle Adaptation"
        }), " function."]
      }), "\n", createVNode(_components.li, {
        children: "After reset, start the engine and verify idle stabilises within 30 seconds of warm-up."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["For a detailed TPS diagnosis and replacement guide, see ", createVNode(_components.a, {
        href: "/diagnostics/gy6-efi-tps-sensor-diagnosis.html",
        children: "GY6 EFI TPS Sensor Diagnosis & Replacement"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "step-7--adjust-the-idle-airfuel-screw",
      children: "Step 7 — Adjust the Idle Air/Fuel Screw"
    }), "\n", createVNode(_components.p, {
      children: "The finger screw (mixture screw) on the throttle body is a manual trim for the idle zone (below approximately 2,800 RPM). The ECU does not auto-tune at idle."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "With the engine warm and at idle, turn the screw in (clockwise) by ¼-turn increments and wait 10 seconds after each."
      }), "\n", createVNode(_components.li, {
        children: "Turn back out if idle drops or engine hunts."
      }), "\n", createVNode(_components.li, {
        children: ["Find the position where idle RPM is ", createVNode(_components.strong, {
          children: "highest and most stable"
        }), " — this is the correct setting."]
      }), "\n", createVNode(_components.li, {
        children: "If the engine stalls when coming to a stop from road speed, this screw is the adjustment to make."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-8--verify-woodruff-key-and-magneto-timing",
      children: "Step 8 — Verify Woodruff Key and Magneto Timing"
    }), "\n", createVNode(_components.p, {
      children: "If none of the above resolves a no-start:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Remove the left engine cover and inspect the magneto rotor."
      }), "\n", createVNode(_components.li, {
        children: ["Confirm the ", createVNode(_components.strong, {
          children: "woodruff key slot on the magneto rotor is fully seated over the woodruff key on the crankshaft"
        }), ". A displaced woodruff key throws ignition timing off completely and causes no-start with no spark fault code."]
      }), "\n", createVNode(_components.li, {
        children: "Remove the rotor with a flywheel puller if needed, inspect the key and slot for damage, and reinstall with the key seated."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "danger",
      children: createVNode(_components.p, {
        children: "Never attempt to hammer the rotor onto the crankshaft — this damages the key slot and crankshaft taper. Always use a flywheel puller for removal and hand-tighten plus torque spec for installation (typically 35–40 Nm)."
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-9--confirm-correct-efi-kit-for-engine-size",
      children: "Step 9 — Confirm Correct EFI Kit for Engine Size"
    }), "\n", createVNode(_components.p, {
      children: "If the scooter was recently converted to EFI or the ECU was replaced:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["A ", createVNode(_components.strong, {
          children: "150cc kit (157QMJ)"
        }), " uses different injector sizing, fuel maps, and throttle body bore than a ", createVNode(_components.strong, {
          children: "125cc kit (152QMI)"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Using the wrong kit results in chronic rich or lean running that no amount of adjustment will correct — the ECU must match the engine displacement."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-10--check-the-fuel-pump-regulator",
      children: "Step 10 — Check the Fuel Pump Regulator"
    }), "\n", createVNode(_components.p, {
      children: "A failing pressure regulator allows pressure to bleed off after the pump stops, causing hard hot-start and lean surging."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Run the pump until pressure is at 42 PSI."
      }), "\n", createVNode(_components.li, {
        children: "Key off — note pressure on the gauge."
      }), "\n", createVNode(_components.li, {
        children: "If pressure drops below 30 PSI within 2 minutes, the check valve in the pump or the pressure regulator is leaking."
      }), "\n", createVNode(_components.li, {
        children: "Replace the integrated pump/regulator assembly."
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "specifications-summary",
      children: "Specifications Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Parameter"
          }), createVNode(_components.th, {
            children: "Specification"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Fuel pressure (static)"
          }), createVNode(_components.td, {
            children: "42 PSI (2.9 bar)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Ground resistance (battery neg to ECU)"
          }), createVNode(_components.td, {
            children: "< 0.2 Ω"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Idle RPM (warm, GY6 150cc EFI)"
          }), createVNode(_components.td, {
            children: "1,400–1,800 RPM"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "TPS voltage at idle (closed throttle)"
          }), createVNode(_components.td, {
            children: "~0.5 V"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "TPS voltage at WOT (wide open throttle)"
          }), createVNode(_components.td, {
            children: "~4.5 V"
          })]
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "next-steps-if-fault-persists",
      children: "Next Steps if Fault Persists"
    }), "\n", createVNode(_components.p, {
      children: "If all 10 steps pass but the fault remains:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Verify the fuel injector is spraying — disconnect the return line and observe injector spray pattern."
      }), "\n", createVNode(_components.li, {
        children: "Swap the ECU for a known-good unit to rule out ECU failure."
      }), "\n", createVNode(_components.li, {
        children: "Contact the EFI manufacturer for an ECU re-flash with updated fuel maps."
      }), "\n"]
    }), "\n", frontmatter.videos.length > 0 && createVNode($$VideoEmbed, {
      videoId: frontmatter.videos[0].id,
      title: frontmatter.videos[0].title,
      creator: frontmatter.videos[0].creator
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

const url = "src/content/diagnostics/gy6-efi-system-troubleshooting-checklist.mdx";
const file = "/sessions/vibrant-hopeful-dijkstra/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-efi-system-troubleshooting-checklist.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/vibrant-hopeful-dijkstra/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-efi-system-troubleshooting-checklist.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
