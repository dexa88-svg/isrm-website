import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_CuGQ4WK_.mjs';
import './VideoEmbed_xzJISfAr.mjs';
import { $ as $$Callout } from './Callout_QX-gPCwg.mjs';
import { $ as $$SourceBox } from './SourceBox_CpGjlmkY.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 Ignition Timing Adjustment Guide",
  "description": "Step-by-step guide to adjusting ignition timing on GY6 50–150cc scooter engines. Covers timing marks, stator plate adjustment, tools needed, and common…",
  "publishDate": "2026-05-19",
  "updatedDate": "2026-05-19",
  "difficulty": "Intermediate",
  "timeEstimate": "~30 min",
  "tags": ["GY6", "Carburettor", "Ignition"],
  "appliesTo": ["GY6 50cc (139QMB)", "GY6 125cc (152QMI)", "GY6 150cc (157QMJ)", "BTC Riva", "La Souris Sourini", "La Souris City S", "Santini Capri"],
  "videos": [],
  "sources": [{
    "name": "Scooter Timing Adjustment Complete Guide 2026 — Q9 PowerSports USA",
    "url": "https://q9powersportsusa.com/blogs/technical-support-q9-powersports-usa/adjust-timing-50cc-motor-scooter"
  }],
  "canonical": "https://ismr.online/repair-guides/gy6-ignition-timing-adjustment-guide.html",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "symptoms-of-incorrect-timing",
    "text": "Symptoms of Incorrect Timing"
  }, {
    "depth": 2,
    "slug": "tools-and-parts-required",
    "text": "Tools and Parts Required"
  }, {
    "depth": 2,
    "slug": "step-by-step-procedure",
    "text": "Step-by-Step Procedure"
  }, {
    "depth": 3,
    "slug": "step-1--warm-the-engine",
    "text": "Step 1 — Warm the Engine"
  }, {
    "depth": 3,
    "slug": "step-2--access-the-magneto-timing-window",
    "text": "Step 2 — Access the Magneto Timing Window"
  }, {
    "depth": 3,
    "slug": "step-3--identify-the-timing-marks",
    "text": "Step 3 — Identify the Timing Marks"
  }, {
    "depth": 3,
    "slug": "step-4--check-timing-with-a-timing-light",
    "text": "Step 4 — Check Timing with a Timing Light"
  }, {
    "depth": 3,
    "slug": "step-5--adjust-the-stator-plate",
    "text": "Step 5 — Adjust the Stator Plate"
  }, {
    "depth": 3,
    "slug": "step-6--verify-and-road-test",
    "text": "Step 6 — Verify and Road Test"
  }, {
    "depth": 2,
    "slug": "typical-gy6-timing-specifications",
    "text": "Typical GY6 Timing Specifications"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
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
    children: [createVNode($$SourceBox, {
      sources: [{
        name: "Scooter Timing Adjustment Complete Guide 2026 — Q9 PowerSports USA",
        url: "https://q9powersportsusa.com/blogs/technical-support-q9-powersports-usa/adjust-timing-50cc-motor-scooter"
      }]
    }), "\n", createVNode(_components.p, {
      children: "Ignition timing determines exactly when the spark plug fires relative to piston position. On GY6 4-stroke engines (139QMB 50cc and 157QMJ 125cc/150cc, as found in scooters such as the BTC Riva 50, La Souris Sourini/City, and Santini Capri), the timing is controlled by the position of the stator plate inside the magneto cover. Correct timing is essential for starting, fuel economy, power delivery, and preventing engine damage from detonation (pinging)."
    }), "\n", createVNode(_components.h2, {
      id: "symptoms-of-incorrect-timing",
      children: "Symptoms of Incorrect Timing"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Symptom"
          }), createVNode("th", {
            children: "Likely timing condition"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Hard starting, especially when hot"
          }), createVNode("td", {
            children: "Timing too advanced or too retarded"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Pinging or knocking under load"
          }), createVNode("td", {
            children: "Timing too far advanced"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Poor acceleration, low power"
          }), createVNode("td", {
            children: "Timing too retarded"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Overheating at normal speeds"
          }), createVNode("td", {
            children: "Timing too advanced"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "High fuel consumption"
          }), createVNode("td", {
            children: "Timing too retarded"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Engine runs but won’t idle cleanly"
          }), createVNode("td", {
            children: "Possible timing fault among other causes"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "tools-and-parts-required",
      children: "Tools and Parts Required"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Timing light (stroboscopic) — or a multimeter in AC voltage mode as an alternative"
      }), "\n", createVNode(_components.li, {
        children: "10 mm socket and ratchet"
      }), "\n", createVNode(_components.li, {
        children: "Screwdrivers (flat and Phillips)"
      }), "\n", createVNode(_components.li, {
        children: "Feeler gauges (optional, for air gap check)"
      }), "\n", createVNode(_components.li, {
        children: "Workshop manual or timing specification for your specific engine variant"
      }), "\n", createVNode(_components.li, {
        children: "Permanent marker"
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["� ", createVNode(_components.strong, {
          children: "Note on GY6 timing marks:"
        }), " GY6 engines have timing marks on the flywheel/magneto rotor and a reference mark on the engine casing. Common marks are ", createVNode(_components.code, {
          children: "T"
        }), " (Top Dead Centre) and a further mark (often a line or triangle) indicating standard ignition timing advance — typically ", createVNode(_components.strong, {
          children: "15–20° BTDC"
        }), " at idle. Consult your service manual for the precise figure."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "step-by-step-procedure",
      children: "Step-by-Step Procedure"
    }), "\n", createVNode(_components.h3, {
      id: "step-1--warm-the-engine",
      children: "Step 1 — Warm the Engine"
    }), "\n", createVNode(_components.p, {
      children: "Run the engine for 5–10 minutes until it reaches normal operating temperature. Timing specifications are given for a warm engine."
    }), "\n", createVNode(_components.h3, {
      id: "step-2--access-the-magneto-timing-window",
      children: "Step 2 — Access the Magneto Timing Window"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Locate the small rubber inspection plug on the left-side engine casing (magneto side). Remove it to expose the timing marks on the flywheel."
      }), "\n", createVNode(_components.li, {
        children: "On some GY6 variants there is no inspection window and you must remove the left-side engine cover to access the stator plate directly. Remove the three or four bolts and ease the cover off, taking care not to damage the gasket."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-3--identify-the-timing-marks",
      children: "Step 3 — Identify the Timing Marks"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Slowly rotate the flywheel by hand (or bump the starter briefly) until you can see the marks through the inspection window."
      }), "\n", createVNode(_components.li, {
        children: ["The ", createVNode(_components.code, {
          children: "T"
        }), " mark indicates Top Dead Centre (TDC) — piston at the highest point of its travel."]
      }), "\n", createVNode(_components.li, {
        children: ["The advance mark (a line, triangle, or ", createVNode(_components.code, {
          children: "F"
        }), " depending on the engine batch) indicates where the spark should fire at idle. This mark should align with the reference pointer on the casing."]
      }), "\n", createVNode(_components.li, {
        children: "Use a permanent marker to make the marks more visible if needed."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-4--check-timing-with-a-timing-light",
      children: "Step 4 — Check Timing with a Timing Light"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Connect the timing light’s inductive clamp to the HT lead (spark plug lead)."
      }), "\n", createVNode(_components.li, {
        children: "Connect the light’s power leads to the battery."
      }), "\n", createVNode(_components.li, {
        children: "Start the engine and let it idle at approximately 1,400–1,600 rpm."
      }), "\n", createVNode(_components.li, {
        children: "Point the timing light at the inspection window. The strobe will “freeze” the rotating marks."
      }), "\n", createVNode(_components.li, {
        children: "The advance/timing mark on the flywheel should align with the reference pointer on the casing. If it does not, the stator plate position needs adjustment."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-5--adjust-the-stator-plate",
      children: "Step 5 — Adjust the Stator Plate"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Stop the engine. Remove the magneto cover if not already done."
      }), "\n", createVNode(_components.li, {
        children: "Locate the two or three stator plate mounting bolts. They pass through slotted holes that allow the plate to be rotated slightly."
      }), "\n", createVNode(_components.li, {
        children: "Loosen the bolts — do not fully remove them."
      }), "\n", createVNode(_components.li, {
        children: ["To ", createVNode(_components.strong, {
          children: "advance"
        }), " timing (move the spark earlier): rotate the stator plate in the direction ", createVNode(_components.em, {
          children: "opposite"
        }), " to flywheel rotation."]
      }), "\n", createVNode(_components.li, {
        children: ["To ", createVNode(_components.strong, {
          children: "retard"
        }), " timing (move the spark later): rotate the stator plate in the ", createVNode(_components.em, {
          children: "same"
        }), " direction as flywheel rotation."]
      }), "\n", createVNode(_components.li, {
        children: "Make small adjustments (2–3 mm of plate movement at a time)."
      }), "\n", createVNode(_components.li, {
        children: "Re-tighten the bolts, refit the cover, and recheck with the timing light. Repeat until correct."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: ["️ ", createVNode(_components.strong, {
          children: "Do not over-advance:"
        }), " Too much advance causes detonation (pinging under load), overheating, and can burn a hole through the piston on a GY6. If in doubt, err on the side of slightly retarded timing."]
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-6--verify-and-road-test",
      children: "Step 6 — Verify and Road Test"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Refit the inspection plug or magneto cover securely."
      }), "\n", createVNode(_components.li, {
        children: "Start the engine and allow it to warm up."
      }), "\n", createVNode(_components.li, {
        children: "Test ride with light and heavy throttle loads. The engine should accelerate cleanly without pinging, idle smoothly at 1,400–1,600 rpm, and start readily both cold and hot."
      }), "\n", createVNode(_components.li, {
        children: "If pinging is present under load, retard timing slightly and retest."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "typical-gy6-timing-specifications",
      children: "Typical GY6 Timing Specifications"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Engine variant"
          }), createVNode("th", {
            children: "Displacement"
          }), createVNode("th", {
            children: "Timing (idle)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "139QMB (long-case)"
          }), createVNode("td", {
            children: "50cc (stock)"
          }), createVNode("td", {
            children: "~15° BTDC"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "152QMI"
          }), createVNode("td", {
            children: "125cc"
          }), createVNode("td", {
            children: "~15–18° BTDC"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "157QMJ"
          }), createVNode("td", {
            children: "150cc"
          }), createVNode("td", {
            children: "~15–18° BTDC"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Always verify against the service manual for your specific engine batch, as values vary. After fitting a big-bore kit, the optimal timing may need re-optimisation."
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

const url = "src/content/repair-guides/gy6-ignition-timing-adjustment-guide.mdx";
const file = "/sessions/ecstatic-zealous-goldberg/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-ignition-timing-adjustment-guide.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/ecstatic-zealous-goldberg/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-ignition-timing-adjustment-guide.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
