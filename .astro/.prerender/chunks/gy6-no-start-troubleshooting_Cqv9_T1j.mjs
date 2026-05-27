import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_C3Md0h36.mjs';
import './VideoEmbed_BrYUpKbm.mjs';
import { $ as $$Callout } from './Callout_D3IY9IaT.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 Scooter Won't Start — Troubleshooting Checklist",
  "description": "Interactive no-start diagnostic tool for GY6 scooters. Step-by-step fault-finding for spark, fuel, compression, and electrical issues on 50/125/150cc engines.",
  "publishDate": "2026-05-07",
  "updatedDate": "2026-05-07",
  "difficulty": "Beginner",
  "timeEstimate": "~30 min",
  "tags": [],
  "appliesTo": [],
  "videos": [],
  "sources": [],
  "canonical": "https://ismr.online/diagnostics/gy6-no-start-troubleshooting.html",
  "draft": false,
  "category": "starting",
  "engine": "gy6",
  "fuel": "both",
  "section": "Won't Start"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "quick-symptom-guide-start-here",
    "text": "Quick Symptom Guide (Start Here)"
  }, {
    "depth": 2,
    "slug": "section-1--spark",
    "text": "Section 1 — Spark"
  }, {
    "depth": 3,
    "slug": "1a--basic-spark-test",
    "text": "1A — Basic Spark Test"
  }, {
    "depth": 3,
    "slug": "1b--spark-plug-condition",
    "text": "1B — Spark Plug Condition"
  }, {
    "depth": 3,
    "slug": "1c--ignition-system-check",
    "text": "1C — Ignition System Check"
  }, {
    "depth": 2,
    "slug": "section-2--fuel",
    "text": "Section 2 — Fuel"
  }, {
    "depth": 3,
    "slug": "2a--basic-fuel-flow-check",
    "text": "2A — Basic Fuel Flow Check"
  }, {
    "depth": 3,
    "slug": "2b--carburetor-check",
    "text": "2B — Carburetor Check"
  }, {
    "depth": 3,
    "slug": "2c--auto-choke-thermostatic-enricher-check",
    "text": "2C — Auto-Choke (Thermostatic Enricher) Check"
  }, {
    "depth": 2,
    "slug": "section-3--compression",
    "text": "Section 3 — Compression"
  }, {
    "depth": 3,
    "slug": "3a--basic-compression-check",
    "text": "3A — Basic Compression Check"
  }, {
    "depth": 3,
    "slug": "3b--compression-test-with-gauge",
    "text": "3B — Compression Test (with gauge)"
  }, {
    "depth": 2,
    "slug": "section-4--starter-system--battery",
    "text": "Section 4 — Starter System & Battery"
  }, {
    "depth": 3,
    "slug": "4a--battery-check",
    "text": "4A — Battery Check"
  }, {
    "depth": 3,
    "slug": "4b--starter-relay-solenoid",
    "text": "4B — Starter Relay (Solenoid)"
  }, {
    "depth": 2,
    "slug": "checklist-summary",
    "text": "Checklist Summary"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["A GY6 engine requires three things to start: ", createVNode(_components.strong, {
        children: "spark"
      }), ", ", createVNode(_components.strong, {
        children: "fuel"
      }), ", and ", createVNode(_components.strong, {
        children: "compression"
      }), ". Work through this checklist in order — most no-start problems can be diagnosed and fixed in under an hour using only basic hand tools."]
    }), "\n", createVNode(_components.h2, {
      id: "quick-symptom-guide-start-here",
      children: "Quick Symptom Guide (Start Here)"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Symptom"
          }), createVNode("th", {
            children: "Most Likely Cause"
          }), createVNode("th", {
            children: "Jump to Section"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Engine cranks but won’t fire"
          }), createVNode("td", {
            children: "No spark, no fuel, or low compression"
          }), createVNode("td", {
            children: "Sections 1, 2, 3"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Engine won’t even crank (starter spins but engine doesn’t)"
          }), createVNode("td", {
            children: "Low battery, faulty starter relay, or compression release stuck open"
          }), createVNode("td", {
            children: "Section 4"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Fires briefly then dies"
          }), createVNode("td", {
            children: "Fuel starvation (blocked jet or closed petcock)"
          }), createVNode("td", {
            children: "Section 2"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Starts with choke but dies without it"
          }), createVNode("td", {
            children: "Pilot jet blocked, mixture too lean"
          }), createVNode("td", {
            children: "Section 2B"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Starts cold but not hot (or hot but not cold)"
          }), createVNode("td", {
            children: "Auto-choke malfunction"
          }), createVNode("td", {
            children: "Section 2C"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Kick-start works but electric starter doesn’t"
          }), createVNode("td", {
            children: "Battery, starter motor, or relay fault"
          }), createVNode("td", {
            children: "Section 4"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "section-1--spark",
      children: "Section 1 — Spark"
    }), "\n", createVNode(_components.h3, {
      id: "1a--basic-spark-test",
      children: "1A — Basic Spark Test"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Remove the spark plug lead from the spark plug."
      }), "\n", createVNode(_components.li, {
        children: "Remove the spark plug using a spark plug socket (usually 16 mm or 18 mm)."
      }), "\n", createVNode(_components.li, {
        children: "Reconnect the spark plug lead to the plug and rest the threaded body of the plug against a bare metal part of the engine (ground contact is essential)."
      }), "\n", createVNode(_components.li, {
        children: "Have an assistant crank the engine while you observe the electrode gap."
      }), "\n", createVNode(_components.li, {
        children: "PASS: A fat blue-white spark jumps across the gap — spark system is good, proceed to Section 2."
      }), "\n", createVNode(_components.li, {
        children: "FAIL: No spark, weak orange spark, or intermittent spark — proceed to 1B."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "1b--spark-plug-condition",
      children: "1B — Spark Plug Condition"
    }), "\n", createVNode(_components.p, {
      children: "Inspect the removed spark plug tip:"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Plug Appearance"
          }), createVNode("th", {
            children: "Diagnosis"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Light tan/grey — dry"
          }), createVNode("td", {
            children: "Normal. Plug is probably fine. Check ignition system."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Black, sooty, dry"
          }), createVNode("td", {
            children: "Running rich or plug too cold. Clean or replace plug."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Black, oily"
          }), createVNode("td", {
            children: "Oil getting past rings — compression issue, possible engine wear."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "White/light grey, eroded electrode"
          }), createVNode("td", {
            children: "Running lean or plug too hot. Check fuel system."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Wet with fuel"
          }), createVNode("td", {
            children: "Engine is flooded. Remove plug, crank 5× with throttle fully open to clear."
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Replace the spark plug if in doubt — they cost very little and eliminate the plug as a variable. Standard plug for GY6 50cc: ", createVNode(_components.code, {
        children: "A7TC"
      }), " or ", createVNode(_components.code, {
        children: "A6TC"
      }), ". For 125–150cc: ", createVNode(_components.code, {
        children: "A7RTC"
      }), " or equivalent."]
    }), "\n", createVNode(_components.h3, {
      id: "1c--ignition-system-check",
      children: "1C — Ignition System Check"
    }), "\n", createVNode(_components.p, {
      children: "If a new plug still shows no spark:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Check the kill switch"
        }), " — flip it to the RUN position. Test with it disconnected entirely (short the wires)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Check the main fuse"
        }), " — usually a 10A or 15A blade fuse in the wiring loom near the battery or under the seat. A blown fuse means no power to the CDI unit."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Inspect the CDI unit"
        }), " — the small black box connected to several wires, typically under the seat or behind the panels. Check the connector for corrosion or pushed-out pins. A faulty CDI is a common cause of total no-spark on GY6 engines."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Check the ignition coil"
        }), " — disconnect and test resistance: primary winding should read ", createVNode(_components.strong, {
          children: "0.4–0.6 Ω"
        }), "; secondary (to plug cap) should read ", createVNode(_components.strong, {
          children: "4–6 kΩ"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Check the stator pick-up coil"
        }), " (pulse generator coil) — resistance typically ", createVNode(_components.strong, {
          children: "80–120 Ω"
        }), ". Located inside the left engine cover behind the flywheel."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "section-2--fuel",
      children: "Section 2 — Fuel"
    }), "\n", createVNode(_components.h3, {
      id: "2a--basic-fuel-flow-check",
      children: "2A — Basic Fuel Flow Check"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Ensure there is fuel in the tank (check visually — fuel gauges on Chinese scooters are notoriously inaccurate)."
      }), "\n", createVNode(_components.li, {
        children: ["Locate the fuel petcock (tap) on the underside of the tank. Ensure it is in the ", createVNode(_components.strong, {
          children: "ON"
        }), " or ", createVNode(_components.strong, {
          children: "RES"
        }), " position."]
      }), "\n", createVNode(_components.li, {
        children: "Disconnect the fuel line from the carburetor inlet. Place a container below and briefly open the petcock — fuel should flow freely. If it trickles or doesn’t flow, the petcock filter is blocked. Remove and clean the petcock screen."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2b--carburetor-check",
      children: "2B — Carburetor Check"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Remove the float bowl (one screw at the bottom of the carburetor). Check for fuel presence — if empty, fuel is not reaching the carb (check petcock and fuel line). If full, fuel delivery is OK."
      }), "\n", createVNode(_components.li, {
        children: "Inspect the main jet and pilot jet for blockage. Even a partially blocked pilot jet causes lean stumble and no-start when cold. Clean with carburetor cleaner and compressed air — never use wire through the jet orifice."
      }), "\n", createVNode(_components.li, {
        children: "Check the float needle valve: a stuck or worn needle valve floods the engine. If the plug was found wet, this is likely the cause."
      }), "\n", createVNode(_components.li, {
        children: "Check the emulsion tube passages are clear (the brass tube with holes inside the carburetor body)."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2c--auto-choke-thermostatic-enricher-check",
      children: "2C — Auto-Choke (Thermostatic Enricher) Check"
    }), "\n", createVNode(_components.p, {
      children: "Most GY6 50cc scooters use an automatic choke (enricher valve) instead of a manual choke lever. It is a wax-element or bimetal device that opens when cold (rich mixture) and closes when warm."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Locate the auto-choke on the side of the carburetor — a small cylindrical device with a wire or hose attached."
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cold test:"
        }), " Disconnect the choke from the carburetor. When cold, the choke plunger should be extended (pushed out). If it is retracted when cold, the choke is stuck open — the engine will run lean and refuse to start cold."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Warm test:"
        }), " After warming the choke with a heat gun or hot water for 1 minute, the plunger should retract. If it stays extended, it is stuck — the engine will run rich when warm and flood after warm-up."]
      }), "\n", createVNode(_components.li, {
        children: "If the auto-choke is malfunctioning, replace it (inexpensive and widely available for GY6) or temporarily disconnect and use a manually operated enrichment procedure (crack throttle open slightly when starting cold)."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "section-3--compression",
      children: "Section 3 — Compression"
    }), "\n", createVNode(_components.h3, {
      id: "3a--basic-compression-check",
      children: "3A — Basic Compression Check"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Remove the spark plug."
      }), "\n", createVNode(_components.li, {
        children: "Cover the spark plug hole with your thumb and crank the engine (kick or electric)."
      }), "\n", createVNode(_components.li, {
        children: "PASS: Your thumb is pushed off firmly — there is compression. Proceed to Sections 1 and 2 for the no-start cause."
      }), "\n", createVNode(_components.li, {
        children: "FAIL: Little or no resistance felt — low or zero compression. Proceed to 3B."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "3b--compression-test-with-gauge",
      children: "3B — Compression Test (with gauge)"
    }), "\n", createVNode(_components.p, {
      children: "A proper compression gauge gives a reading. Specifications for GY6:"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Engine"
          }), createVNode("th", {
            children: "Minimum Acceptable"
          }), createVNode("th", {
            children: "Healthy Range"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "GY6 50cc (139QMB)"
          }), createVNode("td", {
            children: "70 PSI (4.8 bar)"
          }), createVNode("td", {
            children: "90–120 PSI (6.2–8.3 bar)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "GY6 150cc (157QMJ)"
          }), createVNode("td", {
            children: "80 PSI (5.5 bar)"
          }), createVNode("td", {
            children: "100–130 PSI (6.9–9.0 bar)"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Low compression causes: worn or stuck piston rings, burned valves, blown head gasket, worn cylinder bore, or valves with zero clearance (not seating properly). Check valve clearance first (see the ", createVNode(_components.a, {
        href: "/repair-guides/gy6-valve-adjustment-guide.html",
        children: "valve adjustment guide"
      }), ") before condemning rings or bore."]
    }), "\n", createVNode(_components.h2, {
      id: "section-4--starter-system--battery",
      children: "Section 4 — Starter System & Battery"
    }), "\n", createVNode(_components.h3, {
      id: "4a--battery-check",
      children: "4A — Battery Check"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Check battery voltage with a multimeter: ", createVNode(_components.strong, {
          children: "12.6 V or above"
        }), " = fully charged; ", createVNode(_components.strong, {
          children: "below 12.0 V"
        }), " = discharged or failing."]
      }), "\n", createVNode(_components.li, {
        children: "If the starter sounds slow or clicks but doesn’t crank, the battery is likely the cause. Charge for 4 hours and retest."
      }), "\n", createVNode(_components.li, {
        children: "GY6 scooter batteries (typically YTX5L-BS or YTX7A-BS) have a short lifespan — 2–3 years is typical. If the battery is over 2 years old, replacement is the most reliable fix."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "4b--starter-relay-solenoid",
      children: "4B — Starter Relay (Solenoid)"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "When pressing the electric starter, you should hear a click from the starter relay (located near the battery). No click = relay or wiring fault."
      }), "\n", createVNode(_components.li, {
        children: "Bypass test: use a jumper wire directly between the starter motor terminal and the battery positive. If the engine cranks, the starter relay or its wiring is faulty."
      }), "\n", createVNode(_components.li, {
        children: "The relay can be tested with a multimeter or simply replaced — they cost very little and are standard across all GY6 scooters."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "checklist-summary",
      children: "Checklist Summary"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "#"
          }), createVNode("th", {
            children: "Check"
          }), createVNode("th", {
            children: "Tool Needed"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "1"
          }), createVNode("td", {
            children: "Spark plug — condition and spark test"
          }), createVNode("td", {
            children: "Plug socket, assistant"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "2"
          }), createVNode("td", {
            children: "Kill switch and fuse"
          }), createVNode("td", {
            children: "Visual / multimeter"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "3"
          }), createVNode("td", {
            children: "CDI unit connector — clean contacts"
          }), createVNode("td", {
            children: "Contact spray"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "4"
          }), createVNode("td", {
            children: "Fuel in tank — visually confirm"
          }), createVNode("td", {
            children: "None"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "5"
          }), createVNode("td", {
            children: "Fuel petcock — open and flowing freely"
          }), createVNode("td", {
            children: "Container"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "6"
          }), createVNode("td", {
            children: "Float bowl — fuel present and jets clear"
          }), createVNode("td", {
            children: "Flat-head screwdriver"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "7"
          }), createVNode("td", {
            children: "Auto-choke — functioning correctly"
          }), createVNode("td", {
            children: "Visual / heat source"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "8"
          }), createVNode("td", {
            children: "Compression — thumb test or gauge"
          }), createVNode("td", {
            children: "Compression gauge"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "9"
          }), createVNode("td", {
            children: "Valve clearance — set to spec"
          }), createVNode("td", {
            children: "Feeler gauge"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "10"
          }), createVNode("td", {
            children: "Battery voltage ≥ 12.6 V"
          }), createVNode("td", {
            children: "Multimeter"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "11"
          }), createVNode("td", {
            children: "Starter relay — clicking when operated"
          }), createVNode("td", {
            children: "Multimeter / jumper wire"
          })]
        })]
      })
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["� ", createVNode(_components.strong, {
          children: "Pro tip:"
        }), " When a GY6 starts with easy starting fluid or carb cleaner sprayed into the intake but won’t start on its own, you have confirmed spark and compression are good — the problem is always in the fuel system (petcock, jet, auto-choke, or fuel line)."]
      })
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

const url = "src/content/diagnostics/gy6-no-start-troubleshooting.mdx";
const file = "/sessions/sharp-gifted-meitner/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-no-start-troubleshooting.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/sharp-gifted-meitner/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-no-start-troubleshooting.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
