import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_CrppOBcV.mjs';
import { $ as $$VideoEmbed } from './VideoEmbed_CRZrF2Zc.mjs';
import { $ as $$Callout } from './Callout_4os8_15B.mjs';
import 'clsx';

const frontmatter = {
  "title": "Side Stand Kill Switch: No-Start Diagnosis",
  "description": "GY6 side stand kill switch diagnosis — scooter won't start in gear or dies when side stand is deployed. Step-by-step test and bypass procedure for GY6 scooters.",
  "publishDate": "2026-05-19",
  "updatedDate": "2026-05-19",
  "difficulty": "Beginner",
  "timeEstimate": "~30 min",
  "tags": ["GY6", "Piaggio", "Won't Start", "Kill Switch", "Electrical"],
  "appliesTo": ["GY6 50cc (139QMB)", "GY6 125cc (152QMI)", "GY6 150cc (157QMJ)", "BTC Riva", "La Souris Sourini", "Vespa Primavera 125/150", "Vespa Sprint 125/150", "Piaggio Zip 50 4T"],
  "videos": [{
    "id": "-xoh8QE5l10",
    "title": "Side Stand Kill Switch Diagnosis — Scooter Won't Start",
    "creator": "YouTube",
    "position": "hero"
  }],
  "sources": [],
  "canonical": "https://ismr.online/diagnostics/gy6-side-stand-kill-switch.html",
  "draft": false,
  "category": "starting",
  "engine": "gy6",
  "fuel": "both",
  "section": "Won't Start"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-is-the-side-stand-kill-switch",
    "text": "What Is the Side Stand Kill Switch?"
  }, {
    "depth": 2,
    "slug": "how-to-quickly-check-first-test",
    "text": "How to Quickly Check (First Test)"
  }, {
    "depth": 3,
    "slug": "the-stand-up-test",
    "text": "The Stand-Up Test"
  }, {
    "depth": 2,
    "slug": "reference-video",
    "text": "Reference Video"
  }, {
    "depth": 2,
    "slug": "locating-the-side-stand-switch",
    "text": "Locating the Side Stand Switch"
  }, {
    "depth": 2,
    "slug": "full-diagnostic-procedure",
    "text": "Full Diagnostic Procedure"
  }, {
    "depth": 3,
    "slug": "step-1--visual-inspection",
    "text": "Step 1 — Visual Inspection"
  }, {
    "depth": 3,
    "slug": "step-2--bypass-test-temporary",
    "text": "Step 2 — Bypass Test (Temporary)"
  }, {
    "depth": 3,
    "slug": "step-3--multimeter-test",
    "text": "Step 3 — Multimeter Test"
  }, {
    "depth": 2,
    "slug": "cleaning-a-dirty-switch",
    "text": "Cleaning a Dirty Switch"
  }, {
    "depth": 2,
    "slug": "replacing-the-side-stand-switch",
    "text": "Replacing the Side Stand Switch"
  }, {
    "depth": 2,
    "slug": "related-guides",
    "text": "Related Guides"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
    children: [createVNode(_components.h2, {
      id: "what-is-the-side-stand-kill-switch",
      children: "What Is the Side Stand Kill Switch?"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.strong, {
        children: "side stand kill switch"
      }), " (also called a side stand inhibitor or kickstand switch) is a safety device that prevents the engine from running while the side stand is deployed. The switch is mounted at the base of the side stand pivot. When the stand is down, the switch opens the ignition circuit, cutting power to the CDI unit or ECU and stopping the engine (or preventing it from starting)."]
    }), "\n", createVNode(_components.p, {
      children: ["This is an important safety feature — but the switch is exposed to road dirt, water, and corrosion, and it is one of the ", createVNode(_components.strong, {
        children: "most common electrical causes of a no-start condition"
      }), " on older scooters. The switch can fail in the open position, which makes the ECU or CDI think the side stand is always down, even when it is fully retracted."]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-quickly-check-first-test",
      children: "How to Quickly Check (First Test)"
    }), "\n", createVNode(_components.h3, {
      id: "the-stand-up-test",
      children: "The Stand-Up Test"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Ensure the side stand is ", createVNode(_components.strong, {
          children: "fully retracted (up)"
        }), " and you are sitting on the scooter."]
      }), "\n", createVNode(_components.li, {
        children: "Attempt to start the engine normally."
      }), "\n", createVNode(_components.li, {
        children: ["If it does not start, try ", createVNode(_components.strong, {
          children: "pushing the side stand down and back up again"
        }), " several times. Sometimes the switch contact is dirty and this mechanical cycling cleans the contact momentarily."]
      }), "\n", createVNode(_components.li, {
        children: "Now try starting again with the stand fully up."
      }), "\n", createVNode(_components.li, {
        children: "Starts: The switch contact was dirty or sticking. Clean or replace the switch."
      }), "\n", createVNode(_components.li, {
        children: "Still won’t start: Proceed to the multimeter test below."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "reference-video",
      children: "Reference Video"
    }), "\n", createVNode($$VideoEmbed, {
      videoId: "-xoh8QE5l10",
      title: "Side Stand Kill Switch Diagnosis — Scooter Won't Start",
      creator: "YouTube"
    }), "\n", createVNode(_components.p, {
      children: "Complete walkthrough of diagnosing and testing the side stand kill switch on a GY6 scooter."
    }), "\n", createVNode(_components.h2, {
      id: "locating-the-side-stand-switch",
      children: "Locating the Side Stand Switch"
    }), "\n", createVNode(_components.p, {
      children: "The switch is a small black plastic or metal unit mounted on the frame near the base of the side stand pivot. It has either two or three wires connected to it. Trace the wires from the side stand hinge point upward — they typically route along the frame and connect to a 2-pin or 3-pin inline connector under the bodywork or under the seat."
    }), "\n", createVNode(_components.h2, {
      id: "full-diagnostic-procedure",
      children: "Full Diagnostic Procedure"
    }), "\n", createVNode(_components.h3, {
      id: "step-1--visual-inspection",
      children: "Step 1 — Visual Inspection"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Locate the side stand switch and its wiring connector."
      }), "\n", createVNode(_components.li, {
        children: ["Check the connector for ", createVNode(_components.strong, {
          children: "corrosion, green/white oxidation, or moisture"
        }), " inside the connector housing."]
      }), "\n", createVNode(_components.li, {
        children: "Check the wires close to the switch for chafing against the frame, cracked insulation, or bare wire touching metal."
      }), "\n", createVNode(_components.li, {
        children: "Check the switch body itself — the plunger or lever that the stand actuates should move freely when you operate the stand by hand."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-2--bypass-test-temporary",
      children: "Step 2 — Bypass Test (Temporary)"
    }), "\n", createVNode(_components.p, {
      children: "This test confirms whether the side stand switch circuit is the cause of the no-start, without needing a multimeter."
    }), "\n", createVNode($$Callout, {
      type: "danger",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "⚠ Safety:"
        }), " Bypassing the side stand switch removes the safety interlock. Only do this as a temporary diagnostic test with the scooter on its centre stand. Do not ride the scooter with the switch bypassed permanently."]
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Locate the ", createVNode(_components.strong, {
          children: "2-pin or 3-pin connector"
        }), " in the side stand switch wiring loom (typically under the bodywork near the left footboard area)."]
      }), "\n", createVNode(_components.li, {
        children: "Disconnect the connector."
      }), "\n", createVNode(_components.li, {
        children: ["Using a short length of wire or a paperclip, ", createVNode(_components.strong, {
          children: "bridge the two terminals"
        }), " on the loom side of the connector (the side that goes into the harness, not the side that goes to the switch)."]
      }), "\n", createVNode(_components.li, {
        children: "Attempt to start the engine."
      }), "\n", createVNode(_components.li, {
        children: "Engine starts: The side stand switch is confirmed faulty. The switch needs to be cleaned or replaced."
      }), "\n", createVNode(_components.li, {
        children: "Engine still won’t start: The side stand switch is not the cause. Remove your bridge wire, reconnect the connector, and continue to the full no-start troubleshooting guide."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Note on 3-wire switches:"
        }), " Some scooters use a 3-wire inhibitor switch that interacts with the gear/neutral switch. If the bypass test does not work, try bridging a different pair of terminals. Consult your model’s wiring diagram."]
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-3--multimeter-test",
      children: "Step 3 — Multimeter Test"
    }), "\n", createVNode(_components.p, {
      children: "This confirms the switch is operating correctly (or not) before you purchase a replacement."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Disconnect the switch connector."
      }), "\n", createVNode(_components.li, {
        children: ["Set your multimeter to ", createVNode(_components.strong, {
          children: "continuity / resistance (Ω)"
        }), " mode."]
      }), "\n", createVNode(_components.li, {
        children: ["Probe the two terminals on the ", createVNode(_components.strong, {
          children: "switch side"
        }), " of the connector."]
      }), "\n", createVNode(_components.li, {
        children: ["With the side stand ", createVNode(_components.strong, {
          children: "up (retracted)"
        }), ": the circuit should be ", createVNode(_components.strong, {
          children: "closed (continuity / near 0 Ω)"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["With the side stand ", createVNode(_components.strong, {
          children: "down (deployed)"
        }), ": the circuit should be ", createVNode(_components.strong, {
          children: "open (no continuity / infinite Ω)"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "PASS: Switch behaves as described — switch is working correctly. Look for a wiring fault between switch and CDI/ECU."
      }), "\n", createVNode(_components.li, {
        children: "FAIL: Switch shows open circuit with stand up, or closed circuit with stand down — switch has failed. Replace it."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "cleaning-a-dirty-switch",
      children: "Cleaning a Dirty Switch"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Disconnect the switch connector."
      }), "\n", createVNode(_components.li, {
        children: ["Spray a small amount of ", createVNode(_components.strong, {
          children: "electrical contact cleaner"
        }), " into the switch body through any available opening."]
      }), "\n", createVNode(_components.li, {
        children: "Operate the side stand up and down 10–15 times to work the cleaner through the contact mechanism."
      }), "\n", createVNode(_components.li, {
        children: "Allow to dry for 5 minutes."
      }), "\n", createVNode(_components.li, {
        children: "Reconnect the switch and retest."
      }), "\n", createVNode(_components.li, {
        children: "Also clean the connector terminals: use contact cleaner on a small brush, or use a connector cleaning tool. Apply dielectric grease to the connector pins before reassembly to prevent future corrosion."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "replacing-the-side-stand-switch",
      children: "Replacing the Side Stand Switch"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Step"
          }), createVNode("th", {
            children: "Detail"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "1. Source replacement switch"
          }), createVNode("td", {
            children: "GY6 side stand switches are largely standardised. Search for “GY6 side stand switch” or “kickstand inhibitor switch 2-pin.” Piaggio/Vespa units are manufacturer-specific — use OEM part number."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "2. Remove old switch"
          }), createVNode("td", {
            children: "Typically one or two M6 bolts. Disconnect wiring connector."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "3. Install new switch"
          }), createVNode("td", {
            children: "Position switch so the actuator lever contacts the side stand arm correctly when the stand is deployed. Test stand movement before fully tightening."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "4. Route wiring"
          }), createVNode("td", {
            children: "Ensure wires are routed away from moving parts (stand pivot, exhaust). Secure with a cable tie if needed."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "5. Test"
          }), createVNode("td", {
            children: "Confirm engine starts with stand up and cuts out (or does not start) with stand down."
          })]
        })]
      })
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Permanent bypass (not recommended, but documented):"
        }), " Some riders permanently bridge the side stand switch to eliminate the circuit entirely. This means the engine will run with the stand down — a genuine safety hazard on a scooter, as the stand can dig into the road surface when cornering. Replace the switch instead of bypassing it permanently."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "related-guides",
      children: "Related Guides"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "gy6-no-start-troubleshooting.html",
          children: "GY6 Scooter Won’t Start — Full Troubleshooting Checklist"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "gy6-dirty-buttons-no-start.html",
          children: "Dirty Handlebar Buttons Causing No-Start"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Sources: GY6 and Piaggio wiring diagrams; community diagnostic data from scootdawg.com; video reference: YouTube. Licensed CC BY-SA 4.0."
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

const url = "src/content/diagnostics/gy6-side-stand-kill-switch.mdx";
const file = "/sessions/vibrant-hopeful-dijkstra/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-side-stand-kill-switch.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/vibrant-hopeful-dijkstra/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-side-stand-kill-switch.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
