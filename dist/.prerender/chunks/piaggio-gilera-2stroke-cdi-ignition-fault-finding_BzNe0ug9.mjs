import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_C1PmNaGI.mjs';
import './VideoEmbed_CYqcL_Lr.mjs';
import { $ as $$Callout } from './Callout_Cmo--wc0.mjs';
import { $ as $$SourceBox } from './SourceBox_B6HrCIyX.mjs';
import 'clsx';

const frontmatter = {
  "title": "Piaggio & Gilera 2T CDI Ignition Fault Finding",
  "description": "Fault-finding guide for 2-stroke CDI ignition systems on Piaggio and Gilera scooters. Diagnose no-spark, weak spark, and CDI failures with multimeter tests…",
  "publishDate": "2026-05-19",
  "updatedDate": "2026-05-19",
  "difficulty": "Beginner",
  "timeEstimate": "~30 min",
  "tags": ["Piaggio", "Gilera", "2-Stroke", "Ignition"],
  "appliesTo": ["Vespa Primavera 125/150", "Vespa Sprint 125/150", "Vespa Zip 50 4T", "Piaggio Zip 50 4T", "Piaggio Zip 100 4T"],
  "videos": [],
  "sources": [{
    "name": "Piaggio No Spark — CDI Testing — PedParts UK Blog",
    "url": "https://www.pedparts.co.uk/blog/piaggio-ignition-fault-finding"
  }],
  "canonical": "https://ismr.online/diagnostics/piaggio-gilera-2stroke-cdi-ignition-fault-finding.html",
  "draft": false,
  "category": "electrical",
  "engine": "piaggio",
  "fuel": "both",
  "section": "Piaggio & Gilera — Electrical Fault Finding",
  "cardTag": "Piaggio · Gilera · 2-Stroke"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "component-overview",
    "text": "Component Overview"
  }, {
    "depth": 2,
    "slug": "step-1--verify-the-spark-quality",
    "text": "Step 1 — Verify the Spark Quality"
  }, {
    "depth": 2,
    "slug": "step-2--test-the-pickup-coil-red-wire",
    "text": "Step 2 — Test the Pickup Coil (Red Wire)"
  }, {
    "depth": 2,
    "slug": "step-3--test-the-cdi-earth-white-wire",
    "text": "Step 3 — Test the CDI Earth (White Wire)"
  }, {
    "depth": 2,
    "slug": "step-4--test-the-stator-power-coil-green-wire",
    "text": "Step 4 — Test the Stator Power Coil (Green Wire)"
  }, {
    "depth": 3,
    "slug": "quick-voltage-test",
    "text": "Quick voltage test"
  }, {
    "depth": 3,
    "slug": "resistance-test-static",
    "text": "Resistance test (static)"
  }, {
    "depth": 3,
    "slug": "ignition-switch-test",
    "text": "Ignition switch test"
  }, {
    "depth": 3,
    "slug": "load-test",
    "text": "Load test"
  }, {
    "depth": 2,
    "slug": "step-5--if-all-tests-pass-replace-the-cdi",
    "text": "Step 5 — If All Tests Pass: Replace the CDI"
  }, {
    "depth": 2,
    "slug": "quick-reference-fault-table",
    "text": "Quick-Reference Fault Table"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$SourceBox, {
      sources: [{
        name: "Piaggio No Spark — CDI Testing — PedParts UK Blog",
        url: "https://www.pedparts.co.uk/blog/piaggio-ignition-fault-finding"
      }]
    }), "\n", createVNode(_components.p, {
      children: "This guide covers systematic ignition fault-finding for all 50cc Piaggio and Gilera 2-stroke scooters (plus some geared 50cc engines such as Derbi which share the same ignition architecture). You will need a multimeter. The Piaggio/Gilera ignition system is completely independent from the rest of the bike’s electrics — it is unaffected by battery condition, charging system faults, or other electrical problems — which makes it straightforward to test methodically."
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: ["️ ", createVNode(_components.strong, {
          children: "Important — spark strength matters:"
        }), " Seeing a spark out of the engine is not enough. A weak spark may jump a 1 mm gap in open air but fail to fire the compressed mixture in the cylinder. The spark must be able to jump ", createVNode(_components.strong, {
          children: "at least 7 mm in open air"
        }), ", which corresponds to over 15,000 V. Use a dedicated spark tester with an adjustable gap, or improvise with two screws in a wooden block set 7–10 mm apart."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "component-overview",
      children: "Component Overview"
    }), "\n", createVNode(_components.p, {
      children: "The Piaggio 2-stroke ignition circuit has four main parts:"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Component"
          }), createVNode("th", {
            children: "Wire colour"
          }), createVNode("th", {
            children: "Function"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Pickup coil"
          }), createVNode("td", {
            children: "Red → CDI"
          }), createVNode("td", {
            children: "Generates a voltage pulse each time a lobe on the flywheel passes, triggering the CDI to fire"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "CDI earth"
          }), createVNode("td", {
            children: "White → CDI"
          }), createVNode("td", {
            children: "Must be solidly earthed (0 Ω) at all times"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Stator power coil"
          }), createVNode("td", {
            children: "Green → CDI"
          }), createVNode("td", {
            children: "Generates ~80 V AC to power the CDI; independent of the charging coils"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "CDI unit"
          }), createVNode("td", {
            children: "All wires"
          }), createVNode("td", {
            children: "Processes the pickup signal and controls the HT coil to produce spark"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "step-1--verify-the-spark-quality",
      children: "Step 1 — Verify the Spark Quality"
    }), "\n", createVNode(_components.p, {
      children: ["Remove the spark plug and connect a known-good plug (or a new one) to the HT lead. Rest the threaded portion against a clean engine-earth point, or secure it with a jump lead. Turn the engine over on the starter or kick it with the ignition on. If using a spark tester, increase the gap until the spark stops jumping; ", createVNode(_components.strong, {
        children: "7 mm minimum"
      }), " is required for reliable ignition."]
    }), "\n", createVNode(_components.p, {
      children: "If spark is absent or weak, proceed to Step 2."
    }), "\n", createVNode(_components.h2, {
      id: "step-2--test-the-pickup-coil-red-wire",
      children: "Step 2 — Test the Pickup Coil (Red Wire)"
    }), "\n", createVNode(_components.p, {
      children: "Disconnect the CDI multi-connector (so a faulty CDI cannot skew readings)."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Set your multimeter to resistance (Ω)."
      }), "\n", createVNode(_components.li, {
        children: ["Measure between the ", createVNode(_components.strong, {
          children: "red wire"
        }), " at the CDI connector and a good engine earth point."]
      }), "\n", createVNode(_components.li, {
        children: ["Expected reading: ", createVNode(_components.strong, {
          children: "80–140 Ω"
        }), " (Piaggio spec is 80–90 Ω, but healthy units typically read 120–130 Ω)."]
      }), "\n", createVNode(_components.li, {
        children: ["Also check the air gap between the pickup and flywheel lobe: it should be approximately ", createVNode(_components.strong, {
          children: "0.8 mm"
        }), ". Anything over 1 mm, loosen the two mounting screws and reposition the pickup."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "If the reading is outside range, disconnect the flywheel block connector and retest the red wire from there. If it reads correctly there but not at the CDI connector, the fault is in the wiring between the flywheel connector and the CDI (often a corroded or damaged block connector). If the reading is still out of spec from the flywheel connector, the pickup/stator assembly needs replacement."
    }), "\n", createVNode(_components.h2, {
      id: "step-3--test-the-cdi-earth-white-wire",
      children: "Step 3 — Test the CDI Earth (White Wire)"
    }), "\n", createVNode(_components.p, {
      children: "With the flywheel block connector reconnected and the CDI block connector still disconnected:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Measure resistance between the ", createVNode(_components.strong, {
          children: "white wire"
        }), " at the CDI connector and battery negative (or a solid earth point)."]
      }), "\n", createVNode(_components.li, {
        children: ["Expected reading: ", createVNode(_components.strong, {
          children: "0 Ω"
        }), " — the white wire must be a direct earth."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "If not 0 Ω, disconnect the flywheel connector and retest. A good reading there confirms a broken or corroded earth between the flywheel connector and the CDI. Rectify the wiring before proceeding."
    }), "\n", createVNode(_components.h2, {
      id: "step-4--test-the-stator-power-coil-green-wire",
      children: "Step 4 — Test the Stator Power Coil (Green Wire)"
    }), "\n", createVNode(_components.p, {
      children: ["The green wire carries approximately 80 V AC from the stator to the CDI when the engine is cranked. The ignition key must be in the ", createVNode(_components.strong, {
        children: "ON"
      }), " position."]
    }), "\n", createVNode(_components.h3, {
      id: "quick-voltage-test",
      children: "Quick voltage test"
    }), "\n", createVNode(_components.p, {
      children: ["With both block connectors reconnected, measure AC voltage between the ", createVNode(_components.strong, {
        children: "green wire"
      }), " at the CDI connector and earth while cranking. If you read ", createVNode(_components.strong, {
        children: "50 V AC or more"
      }), ", the stator coil output is sufficient — skip to Step 5."]
    }), "\n", createVNode(_components.h3, {
      id: "resistance-test-static",
      children: "Resistance test (static)"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Disconnect the CDI block connector (leave flywheel block connected)."
      }), "\n", createVNode(_components.li, {
        children: "Set multimeter to Ω, measure between green wire and earth."
      }), "\n", createVNode(_components.li, {
        children: ["Expected: ", createVNode(_components.strong, {
          children: "600–1,000 Ω"
        }), ". Open circuit (∞) or short (0 Ω) indicates a definite fault."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "ignition-switch-test",
      children: "Ignition switch test"
    }), "\n", createVNode(_components.p, {
      children: "With both block connectors disconnected, measure resistance between the green wire at the CDI connector and earth:"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Key position"
          }), createVNode("th", {
            children: "Expected reading"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "OFF"
          }), createVNode("td", {
            children: "0 Ω (switch grounds the coil to kill ignition)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "ON"
          }), createVNode("td", {
            children: ">20 MΩ (open circuit — coil is free to generate voltage)"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Any intermediate value indicates a faulty ignition switch or tacho wiring."
    }), "\n", createVNode(_components.h3, {
      id: "load-test",
      children: "Load test"
    }), "\n", createVNode(_components.p, {
      children: ["Reconnect both block connectors and measure green-wire AC voltage again while cranking. It should still be ", createVNode(_components.strong, {
        children: "≥50 V AC"
      }), " under load. If it drops below this, the stator fails under load and the stator/pickup assembly must be replaced."]
    }), "\n", createVNode(_components.h2, {
      id: "step-5--if-all-tests-pass-replace-the-cdi",
      children: "Step 5 — If All Tests Pass: Replace the CDI"
    }), "\n", createVNode(_components.p, {
      children: ["If Steps 2–4 all return correct readings, every component except the CDI has been verified. The CDI unit itself is faulty and should be replaced. The standard Piaggio/Gilera CDI is restricted to approximately ", createVNode(_components.strong, {
        children: "10,500–11,000 rpm"
      }), ". If higher revs are needed (e.g., after fitting a 70cc cylinder kit), consider an unrestricted aftermarket CDI such as an Athena de-restricted unit."]
    }), "\n", createVNode(_components.h2, {
      id: "quick-reference-fault-table",
      children: "Quick-Reference Fault Table"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Symptom"
          }), createVNode("th", {
            children: "Likely cause"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "No spark at all"
          }), createVNode("td", {
            children: "Faulty CDI, broken pickup, open-circuit stator coil, or wiring fault"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Weak spark (fails 7 mm gap test)"
          }), createVNode("td", {
            children: "Failing HT coil or CDI nearing end of life"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Pickup resistance out of range"
          }), createVNode("td", {
            children: "Faulty pickup coil or damaged flywheel-block connector"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Stator reads 0 Ω or ∞ Ω (green wire)"
          }), createVNode("td", {
            children: "Stator coil shorted or open-circuited — replace stator/pickup assembly"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "White wire not 0 Ω"
          }), createVNode("td", {
            children: "Broken or corroded earth connection — check flywheel block connector"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Green wire reads mid-range in OFF position"
          }), createVNode("td", {
            children: "Faulty ignition switch or tacho short-circuit"
          })]
        })]
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

const url = "src/content/diagnostics/piaggio-gilera-2stroke-cdi-ignition-fault-finding.mdx";
const file = "/sessions/tender-pensive-knuth/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/piaggio-gilera-2stroke-cdi-ignition-fault-finding.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/tender-pensive-knuth/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/piaggio-gilera-2stroke-cdi-ignition-fault-finding.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
