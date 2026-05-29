import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_CtnUbeEl.mjs';
import './VideoEmbed_D3SFnAEQ.mjs';
import './Callout_CIe87PJ6.mjs';
import { $ as $$SourceBox } from './SourceBox_BiqyyDv_.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 CDI No-Spark Diagnosis & Replacement",
  "description": "Step-by-step GY6 CDI no-spark diagnosis — test the pick-up coil, stator, and ignition coil before replacing the CDI. Covers 5-pin and 6-pin AC-CDI units on…",
  "publishDate": "2026-05-11",
  "updatedDate": "2026-05-11",
  "difficulty": "Beginner",
  "timeEstimate": "~30 min",
  "tags": ["GY6", "Ignition", "CDI", "Carburettor", "Fuel Injection"],
  "appliesTo": ["GY6 50cc (139QMB)", "GY6 125cc (152QMI)", "GY6 150cc (157QMJ)", "BTC Riva", "La Souris Sourini", "La Souris City S", "Santini Capri"],
  "videos": [],
  "sources": [{
    "name": "GY6 150cc Ignition Troubleshooting Guide: No Spark? — Buggy Depot Technical Center",
    "url": "https://www.buggydepot.com/tech-center/gy6-150cc-ignition-troubleshooting-guide-no-spark/"
  }, {
    "name": "How to Wire a GY6 DC CDI — Moo Wiring",
    "url": "https://moowiring.com/2025/05/24/gy6-dc-cdi-wiring-diagram/"
  }],
  "canonical": "https://ismr.online/repair-guides/gy6-cdi-no-spark-diagnosis.html",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "understanding-the-gy6-ignition-circuit",
    "text": "Understanding the GY6 Ignition Circuit"
  }, {
    "depth": 2,
    "slug": "tools-required",
    "text": "Tools Required"
  }, {
    "depth": 2,
    "slug": "step-1--confirm-the-symptom-is-no-spark",
    "text": "Step 1 — Confirm the Symptom Is No Spark"
  }, {
    "depth": 2,
    "slug": "step-2--inspect-the-basics-before-testing-components",
    "text": "Step 2 — Inspect the Basics Before Testing Components"
  }, {
    "depth": 2,
    "slug": "step-3--test-the-pick-up-coil-trigger-coil",
    "text": "Step 3 — Test the Pick-Up Coil (Trigger Coil)"
  }, {
    "depth": 2,
    "slug": "step-4--test-the-ignition-coil",
    "text": "Step 4 — Test the Ignition Coil"
  }, {
    "depth": 2,
    "slug": "step-5--test-and-replace-the-cdi-unit",
    "text": "Step 5 — Test and Replace the CDI Unit"
  }, {
    "depth": 2,
    "slug": "replacing-the-cdi",
    "text": "Replacing the CDI"
  }, {
    "depth": 2,
    "slug": "diagnostic-quick-reference",
    "text": "Diagnostic Quick-Reference"
  }, {
    "depth": 2,
    "slug": "oem-part-references",
    "text": "OEM Part References"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
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
      children: ["Added: 2026-05-11  |  Sources: ", createVNode(_components.a, {
        href: "https://www.buggydepot.com/tech-center/gy6-150cc-ignition-troubleshooting-guide-no-spark/",
        children: "buggydepot.com"
      }), ", ", createVNode(_components.a, {
        href: "https://moowiring.com/2025/05/24/gy6-dc-cdi-wiring-diagram/",
        children: "moowiring.com"
      })]
    }), "\n", createVNode(_components.p, {
      children: "GY6 Ignition CDI Carburettor Fuel Injection"
    }), "\n", createVNode($$SourceBox, {
      sources: [{
        name: "GY6 150cc Ignition Troubleshooting Guide: No Spark? — Buggy Depot Technical Center",
        url: "https://www.buggydepot.com/tech-center/gy6-150cc-ignition-troubleshooting-guide-no-spark/"
      }, {
        name: "How to Wire a GY6 DC CDI — Moo Wiring",
        url: "https://moowiring.com/2025/05/24/gy6-dc-cdi-wiring-diagram/"
      }]
    }), "\n", createVNode(_components.p, {
      children: ["A GY6-engine scooter that cranks normally but produces no spark is one of the most common breakdown scenarios. The ignition system has three main electrical components that work together to fire the spark plug: the ", createVNode(_components.strong, {
        children: "stator / pick-up coil"
      }), ", the ", createVNode(_components.strong, {
        children: "CDI unit"
      }), " (Capacitor Discharge Ignition), and the ", createVNode(_components.strong, {
        children: "ignition coil"
      }), ". This guide walks through a logical, test-before-replace diagnostic sequence so you replace only the component that has actually failed."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Applies to:"
      }), " All GY6 50 cc (139QMB) and 125/150 cc (157QMJ / QMI152) engines — both carburetor and fuel-injected variants. The AC-CDI ignition circuit is identical across carburetted and EFI models."]
    }), "\n", createVNode(_components.p, {
      children: ["⚠️ ", createVNode(_components.strong, {
        children: "Safety:"
      }), " Work with the ignition off and the kill switch in the OFF position except when explicitly told to crank the engine during a test step. Keep hands and tools clear of the flywheel and cooling fan during cranking."]
    }), "\n", createVNode(_components.h2, {
      id: "understanding-the-gy6-ignition-circuit",
      children: "Understanding the GY6 Ignition Circuit"
    }), "\n", createVNode(_components.p, {
      children: "On all standard GY6 engines the CDI is an AC-CDI: the stator generates its own alternating current to power the CDI capacitor — the main battery is not involved in spark production. Current flow is: stator charging coil → CDI capacitor → CDI trigger from pick-up coil → ignition coil primary winding → secondary winding → HT lead → spark plug."
    }), "\n", createVNode(_components.p, {
      children: "The most commonly sold replacement CDIs for GY6 scooters are the 5-pin AC-CDI (most 50 cc models) and the 6-pin AC-CDI (most 125/150 cc models). DC-CDI units (powered from the battery) are found on some fuel-injected variants and EFI conversion kits."
    }), "\n", createVNode(_components.h2, {
      id: "tools-required",
      children: "Tools Required"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Digital multimeter (AC and DC voltage, resistance)"
      }), "\n", createVNode(_components.li, {
        children: "Inline spark tester or spare known-good spark plug"
      }), "\n", createVNode(_components.li, {
        children: "Screwdrivers (Phillips and flat)"
      }), "\n", createVNode(_components.li, {
        children: "Side cutters and electrical tape or crimp connectors for any wiring repairs"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "step-1--confirm-the-symptom-is-no-spark",
      children: "Step 1 — Confirm the Symptom Is No Spark"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Remove the spark plug and reconnect the HT lead to it."
      }), "\n", createVNode(_components.li, {
        children: "Lay the plug body against the engine casing (good earth contact is essential)."
      }), "\n", createVNode(_components.li, {
        children: "Ask a helper to crank the engine for 3–4 seconds while you watch the plug gap."
      }), "\n", createVNode(_components.li, {
        children: "A healthy spark is bright blue-white and consistent. A weak orange/yellow spark or no spark at all requires investigation."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "step-2--inspect-the-basics-before-testing-components",
      children: "Step 2 — Inspect the Basics Before Testing Components"
    }), "\n", createVNode(_components.p, {
      children: "Before reaching for the multimeter, visually inspect these quick-fail points — they account for roughly 40 % of no-spark faults:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Spark plug condition:"
        }), " A fouled, cracked, or incorrectly gapped plug will not spark. Replace it with a new ", createVNode(_components.code, {
          children: "NGK C7HSA"
        }), " (50 cc) or ", createVNode(_components.code, {
          children: "NGK CR7HSA"
        }), " (125/150 cc) and retest."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Kill switch:"
        }), " Disconnect the kill-switch wire from the CDI. Many kill switches fail internally and earth the CDI permanently. Retest with it disconnected."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Side-stand switch:"
        }), " Some models have a side-stand interlock that grounds the CDI when the stand is down. Raise the stand and retest, or disconnect the switch wire."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Earth/ground wires:"
        }), " Inspect every earth strap on the engine, frame, and battery. A corroded or broken ground is a very common cause of no-spark."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "HT lead and cap:"
        }), " A cracked lead or a loose cap will break the secondary circuit. Replace if the rubber insulation is hard or cracked."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "step-3--test-the-pick-up-coil-trigger-coil",
      children: "Step 3 — Test the Pick-Up Coil (Trigger Coil)"
    }), "\n", createVNode(_components.p, {
      children: "The pick-up coil sits inside the left-hand engine cover behind the flywheel and generates the timing pulse that tells the CDI when to fire."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Locate the pick-up coil connector — typically a 2-pin or 3-pin connector coming out of the stator cover. On a 5-pin CDI the trigger wires are usually ", createVNode(_components.code, {
          children: "white/green"
        }), " and ", createVNode(_components.code, {
          children: "green"
        }), "; on 6-pin CDIs, ", createVNode(_components.code, {
          children: "white/green"
        }), " and ", createVNode(_components.code, {
          children: "black/white"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Set the multimeter to AC voltage. With the connector unplugged, backprobe the two trigger pins and crank the engine."
      }), "\n", createVNode(_components.li, {
        children: ["A healthy pick-up coil produces ", createVNode(_components.strong, {
          children: "0.5–2.5 V AC"
        }), " at cranking speed."]
      }), "\n", createVNode(_components.li, {
        children: ["If voltage is 0 V, set the meter to resistance (Ω). A healthy pick-up coil measures approximately ", createVNode(_components.strong, {
          children: "80–120 Ω"
        }), " across the two trigger wires. Open-circuit (OL) or a short to earth means a failed coil."]
      }), "\n", createVNode(_components.li, {
        children: ["Also test the stator charging coil (the yellow/yellow wires): should produce ", createVNode(_components.strong, {
          children: "2–5 V AC"
        }), " at cranking speed and read ", createVNode(_components.strong, {
          children: "1–3 Ω"
        }), " resistance."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "step-4--test-the-ignition-coil",
      children: "Step 4 — Test the Ignition Coil"
    }), "\n", createVNode(_components.p, {
      children: "The ignition coil takes the CDI’s capacitor discharge and steps it up to ~15,000–25,000 V for the spark plug. Testing it in-circuit is straightforward:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Disconnect the primary coil wires (normally ", createVNode(_components.code, {
          children: "orange"
        }), " from the CDI and ", createVNode(_components.code, {
          children: "black"
        }), " earth)."]
      }), "\n", createVNode(_components.li, {
        children: ["Measure resistance across the primary winding (the two thin wires): should read ", createVNode(_components.strong, {
          children: "0.3–1.5 Ω"
        }), ". Open-circuit = failed coil."]
      }), "\n", createVNode(_components.li, {
        children: ["Measure across the secondary winding (between the HT cap and the earth wire, with the spark plug removed from the cap): should read ", createVNode(_components.strong, {
          children: "6–15 kΩ"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "If both windings are in spec but there is still no spark, the coil may have an internal insulation breakdown only visible under the load of a real discharge. Swap with a known-good coil as the final check."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "step-5--test-and-replace-the-cdi-unit",
      children: "Step 5 — Test and Replace the CDI Unit"
    }), "\n", createVNode(_components.p, {
      children: "CDI units are solid-state and cannot be repaired — they must be swapped. However, test the input signals first so you know whether a new CDI will cure the fault:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Plug the CDI back in. Backprobe the charging input pins (yellow wires) at the CDI connector with the multimeter on AC voltage. Crank the engine. You should see ", createVNode(_components.strong, {
          children: "at least 2 V AC"
        }), ". If you see 0 V, the fault is upstream (stator/wiring), not the CDI."]
      }), "\n", createVNode(_components.li, {
        children: "Backprobe the trigger input pins. Crank. You should see a pulsing voltage (0.5–2.5 V AC). If no pulse, the pick-up coil or its wiring is the fault."
      }), "\n", createVNode(_components.li, {
        children: "If both inputs are present but there is still no spark at the output (ignition coil primary), the CDI has failed internally. Replace it."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "replacing-the-cdi",
      children: "Replacing the CDI"
    }), "\n", createVNode(_components.p, {
      children: "Identify the correct replacement before ordering — count the pins on your CDI connector (5-pin or 6-pin) and note whether your engine uses AC-CDI (most carburetted and EFI scooters) or DC-CDI (battery-powered, found on some EFI conversions). The connector positions vary by manufacturer but the wiring function is standardised:"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Wire Colour (typical)"
          }), createVNode("th", {
            children: "Function"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("code", {
              children: "Yellow / Yellow"
            })
          }), createVNode("td", {
            children: "Stator AC charging input"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("code", {
              children: "White / Green"
            })
          }), createVNode("td", {
            children: "Pick-up coil trigger input"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("code", {
              children: "Green"
            })
          }), createVNode("td", {
            children: "Earth / Ground"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("code", {
              children: "Orange"
            })
          }), createVNode("td", {
            children: "Ignition coil output"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: [createVNode("code", {
              children: "Black / White"
            }), " (6-pin)"]
          }), createVNode("td", {
            children: "Kill switch / EFI trigger signal"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: [createVNode("code", {
              children: "Red"
            }), " (DC-CDI only)"]
          }), createVNode("td", {
            children: "Battery +12 V input"
          })]
        })]
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Locate the CDI unit — usually mounted under the seat or behind the front fairing, secured with a rubber strap or bracket."
      }), "\n", createVNode(_components.li, {
        children: "Unplug the harness connector (press the release tab, pull straight out)."
      }), "\n", createVNode(_components.li, {
        children: "Fit the new CDI, routing the harness away from hot engine parts and sharp edges."
      }), "\n", createVNode(_components.li, {
        children: "Reconnect, crank, and confirm spark before reassembling bodywork."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "diagnostic-quick-reference",
      children: "Diagnostic Quick-Reference"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Symptom"
          }), createVNode("th", {
            children: "Most Likely Cause"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "No spark; kill switch disconnection fixes it"
          }), createVNode("td", {
            children: "Faulty kill switch earthing CDI signal wire"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "No spark; 0 Ω across pick-up coil"
          }), createVNode("td", {
            children: "Shorted pick-up coil — replace stator plate"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "No spark; OL (open) pick-up coil resistance"
          }), createVNode("td", {
            children: "Broken pick-up coil wire — replace stator plate"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "No spark; coil primary resistance OL"
          }), createVNode("td", {
            children: "Open-circuit ignition coil — replace coil"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Weak orange spark only"
          }), createVNode("td", {
            children: "Ignition coil secondary partially failed, or fouled plug"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "No spark; all components test OK"
          }), createVNode("td", {
            children: "CDI internal failure — replace CDI"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Intermittent spark (warm engine only)"
          }), createVNode("td", {
            children: "Heat-cracked CDI capacitor or coil insulation"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "oem-part-references",
      children: "OEM Part References"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "CDI 5-pin AC (GY6 50 cc / 139QMB):"
        }), " Generic AC-CDI 5-pin, fits most 50 cc GY6 builds. Brands: Kymco-OEM equivalent, Lifan."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "CDI 6-pin AC (GY6 125/150 cc / 157QMJ):"
        }), " Generic AC-CDI 6-pin, widely available. Performance CDIs with variable advance curves are available from NCY and Malossi."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Spark plug (50 cc):"
        }), " NGK C7HSA — gap 0.6–0.7 mm"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Spark plug (125/150 cc):"
        }), " NGK CR7HSA — gap 0.6–0.7 mm"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Ignition coil (universal GY6):"
        }), " Standard 2-pin primary coil, widely available. Gap between coil and flywheel magnet: 0.3–0.5 mm."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Page auto-generated by ISRM Content Sync on 2026-05-11. Content summarised from external sources for educational purposes. Always verify with the original source before performing repairs. ", createVNode(_components.a, {
        href: "/legal/privacy.html",
        children: "Privacy Policy"
      }), "  ·  ", createVNode(_components.a, {
        href: "/legal/terms.html",
        children: "Terms of Service"
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

const url = "src/content/repair-guides/gy6-cdi-no-spark-diagnosis.mdx";
const file = "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-cdi-no-spark-diagnosis.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-cdi-no-spark-diagnosis.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
