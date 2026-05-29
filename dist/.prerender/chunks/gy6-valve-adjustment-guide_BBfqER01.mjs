import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_CtnUbeEl.mjs';
import { $ as $$VideoEmbed } from './VideoEmbed_D3SFnAEQ.mjs';
import { $ as $$Callout } from './Callout_CIe87PJ6.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 Valve Clearance Adjustment Guide",
  "description": "GY6 valve clearance adjustment guide. Correct intake and exhaust clearances, feeler gauge procedure, and cold-engine timing tips for 139QMB, 152QMI, 157QMJ.",
  "publishDate": "2026-05-07",
  "updatedDate": "2026-05-07",
  "difficulty": "Beginner",
  "timeEstimate": "~30 min",
  "tags": ["gy6", "valve", "clearance", "engine"],
  "appliesTo": ["GY6 50cc (139QMB)", "GY6 125cc (152QMI)", "GY6 150cc (157QMJ)", "BTC Riva", "La Souris Sourini", "La Souris City S", "Santini Capri"],
  "videos": [{
    "id": "5vl1mrTVCQ0",
    "title": "Highly Detailed GY6 Valve Adjustment Step By Step",
    "creator": "YouTube",
    "position": "hero"
  }],
  "sources": [],
  "canonical": "https://ismr.online/repair-guides/gy6-valve-adjustment-guide.html",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "valve-clearance-specifications",
    "text": "Valve Clearance Specifications"
  }, {
    "depth": 2,
    "slug": "tools-required",
    "text": "Tools Required"
  }, {
    "depth": 2,
    "slug": "step-by-step-procedure",
    "text": "Step-by-Step Procedure"
  }, {
    "depth": 2,
    "slug": "symptoms-of-incorrect-valve-clearance",
    "text": "Symptoms of Incorrect Valve Clearance"
  }, {
    "depth": 2,
    "slug": "related-videos",
    "text": "Related Videos"
  }, {
    "depth": 4,
    "slug": "qmb139--gy6-valve-adjustment--the-easy-way",
    "text": "QMB139 & GY6 Valve Adjustment — The Easy Way"
  }, {
    "depth": 4,
    "slug": "gy6-valve-adjustment--step-by-step-bintelli",
    "text": "GY6 Valve Adjustment — Step by Step (Bintelli)"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Valve clearance (also called valve lash) is the small gap between the rocker arm and the top of the valve stem. Too little clearance causes valves to stay slightly open — leading to burnt valves, overheating, and compression loss. Too much clearance produces a characteristic ticking noise and reduced power. On GY6 engines, the valves are the single most commonly neglected maintenance item."
    }), "\n", createVNode(_components.h2, {
      id: "valve-clearance-specifications",
      children: "Valve Clearance Specifications"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Engine"
          }), createVNode("th", {
            children: "Intake Valve"
          }), createVNode("th", {
            children: "Exhaust Valve"
          }), createVNode("th", {
            children: "Condition"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "GY6 50cc (139QMB)"
          }), createVNode("td", {
            children: "0.05 mm (0.00197 in)"
          }), createVNode("td", {
            children: "0.05 mm (0.00197 in)"
          }), createVNode("td", {
            children: "Cold engine"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "GY6 125cc (152QMI)"
          }), createVNode("td", {
            children: "0.05 mm (0.00197 in)"
          }), createVNode("td", {
            children: "0.05 mm (0.00197 in)"
          }), createVNode("td", {
            children: "Cold engine"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "GY6 150cc (157QMJ)"
          }), createVNode("td", {
            children: "0.05 mm (0.00197 in)"
          }), createVNode("td", {
            children: "0.05 mm (0.00197 in)"
          }), createVNode("td", {
            children: "Cold engine"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Always measure and adjust valve clearance on a ", createVNode(_components.strong, {
        children: "cold engine"
      }), " (not run for at least 2 hours). Hot metal expands — measuring hot gives an incorrect reading."]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: ["️ ", createVNode(_components.strong, {
          children: "Critical:"
        }), " These are tight tolerances. A feeler gauge of exactly 0.05 mm should pass through with ", createVNode(_components.em, {
          children: "slight drag"
        }), " when the engine is cold. These specifications come from the official Tank GY6 workshop manual and apply across all GY6 variants (139QMB, 152QMI, 157QMJ)."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "tools-required",
      children: "Tools Required"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Feeler gauge set (metric) — must include 0.05 mm blade (essential for GY6)"
      }), "\n", createVNode(_components.li, {
        children: "10 mm spanner or socket (for valve cover bolts)"
      }), "\n", createVNode(_components.li, {
        children: "8 mm spanner (for rocker arm lock nuts, on some variants)"
      }), "\n", createVNode(_components.li, {
        children: "Flat-head screwdriver"
      }), "\n", createVNode(_components.li, {
        children: "17 mm socket (for crankshaft rotation via CVT or flywheel bolt)"
      }), "\n", createVNode(_components.li, {
        children: "Timing mark inspection torch"
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: ["️ ", createVNode(_components.strong, {
          children: "Do not attempt valve adjustment on a warm engine."
        }), " Thermal expansion will cause you to set the clearance incorrectly, which can lead to immediate valve damage when the engine reaches operating temperature."]
      })
    }), "\n", createVNode(_components.p, {
      children: "🎬 Video Guide — Highly Detailed GY6 Valve Adjustment Step By Step"
    }), "\n", createVNode($$VideoEmbed, {
      videoId: "5vl1mrTVCQ0",
      title: "Highly Detailed GY6 Valve Adjustment Step By Step",
      creator: "YouTube"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Video:"
      }), " “Highly Detailed GY6 Valve Adjustment Step By Step” | YouTube   ", createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=5vl1mrTVCQ0",
        children: "↗ Watch on YouTube"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "step-by-step-procedure",
      children: "Step-by-Step Procedure"
    }), "\n", createVNode(_components.p, {
      children: "1"
    }), "\n", createVNode(_components.p, {
      children: "Access the Valve Cover"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Remove the seat and any panels necessary to access the top of the engine cylinder head. On most GY6 scooters the head is under the floor panel or accessible from under the seat."
      }), "\n", createVNode(_components.li, {
        children: "Disconnect the breather hose from the valve cover (small rubber hose, usually routing to the air box)."
      }), "\n", createVNode(_components.li, {
        children: "Remove the valve cover bolts — typically two bolts, 10 mm. Remove the cover and set the gasket aside carefully (reuse it if it is not torn or compressed flat)."
      }), "\n", createVNode(_components.li, {
        children: ["You will see two rocker arms — the ", createVNode(_components.strong, {
          children: "intake rocker"
        }), " (connected to the intake valve, facing toward the carburetor side) and the ", createVNode(_components.strong, {
          children: "exhaust rocker"
        }), " (facing toward the exhaust pipe)."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "2"
    }), "\n", createVNode(_components.p, {
      children: "Find Top Dead Centre (TDC)"
    }), "\n", createVNode(_components.p, {
      children: "Valve clearance must be measured when the piston is at Top Dead Centre (TDC) on the compression stroke — the moment when both valves are closed and the cam lobe is pointing away from both rocker arms."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Locate the inspection window on the left side of the engine casing (round rubber or metal plug). Remove it to see the flywheel timing marks."
      }), "\n", createVNode(_components.li, {
        children: "Also remove the small plug on the top of the cylinder head — this is the manual decompressor or TDC inspection port on some models."
      }), "\n", createVNode(_components.li, {
        children: "Rotate the engine slowly by hand using the rear wheel (in gear) or by turning the flywheel bolt clockwise (when viewed from the flywheel side). Do not use the electric starter for this."
      }), "\n", createVNode(_components.li, {
        children: ["Watch the timing mark through the inspection window. When the line marked ", createVNode(_components.strong, {
          children: "“T”"
        }), " (or “上” on some Chinese engines) aligns with the pointer, the piston is at TDC."]
      }), "\n", createVNode(_components.li, {
        children: ["Confirm you are on the ", createVNode(_components.strong, {
          children: "compression stroke"
        }), " (not the exhaust stroke, which also puts the piston at TDC): at compression TDC, both rocker arms should be loose — you should be able to wiggle them slightly by hand. If one rocker is pressing down on a valve, rotate the engine one full turn and realign the T mark."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "3"
    }), "\n", createVNode(_components.p, {
      children: "Measure Valve Clearance"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Slide the 0.05 mm feeler gauge blade between the rocker arm and the top of the valve stem (or the cam follower surface, depending on configuration)."
      }), "\n", createVNode(_components.li, {
        children: "The gauge should slide through with light, uniform drag — not tight, not loose. If it slides freely with no resistance, the clearance is too large. If it does not fit at all, the clearance is too small."
      }), "\n", createVNode(_components.li, {
        children: "Repeat for both intake and exhaust rockers."
      }), "\n", createVNode(_components.li, {
        children: "Record the current clearance: too tight (gauge does not fit), correct (slight drag), or too loose (gauge falls through)."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "4"
    }), "\n", createVNode(_components.p, {
      children: "Adjust if Required"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Locate the adjustment screw on the rocker arm — it is a slotted screw with a lock nut."
      }), "\n", createVNode(_components.li, {
        children: "Hold the adjustment screw with a flat-head screwdriver to prevent it rotating, and loosen the lock nut with an 8 mm spanner (counter-clockwise)."
      }), "\n", createVNode(_components.li, {
        children: ["With the feeler gauge in place, turn the adjustment screw:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Clockwise → decreases gap (tightens clearance)"
          }), "\n", createVNode(_components.li, {
            children: "Counter-clockwise → increases gap (widens clearance)"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "Adjust until the feeler gauge moves with a slight, consistent drag."
      }), "\n", createVNode(_components.li, {
        children: "Hold the adjustment screw firmly in position and tighten the lock nut. The act of tightening the lock nut often rotates the adjustment screw slightly — recheck clearance after the nut is tight."
      }), "\n", createVNode(_components.li, {
        children: "Repeat for the other valve."
      }), "\n", createVNode(_components.li, {
        children: "Recheck both valves one final time after all lock nuts are tightened."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["� ", createVNode(_components.strong, {
          children: "Tip:"
        }), " If your engine has been difficult to start, runs roughly at idle, or you hear a persistent ticking from the cylinder head area, check valves before replacing the spark plug or cleaning the carburetor. Tight valves are frequently misdiagnosed as carburetor problems."]
      })
    }), "\n", createVNode(_components.p, {
      children: "5"
    }), "\n", createVNode(_components.p, {
      children: "Reassemble"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Clean the valve cover mating surface on the cylinder head with a clean rag."
      }), "\n", createVNode(_components.li, {
        children: "Refit the valve cover gasket. If the gasket is compressed or cracked, replace it — a leaking valve cover allows oil to contaminate the air filter via the breather."
      }), "\n", createVNode(_components.li, {
        children: ["Refit the valve cover and tighten the two bolts to approximately ", createVNode(_components.strong, {
          children: "10 Nm"
        }), ". Do not overtighten — the cylinder head is aluminium and strips easily."]
      }), "\n", createVNode(_components.li, {
        children: "Reconnect the breather hose."
      }), "\n", createVNode(_components.li, {
        children: "Reinstall the timing inspection plug and any engine covers removed."
      }), "\n", createVNode(_components.li, {
        children: "Start the engine. A slight increase in idle smoothness and a reduction in valve noise confirm a successful adjustment."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "symptoms-of-incorrect-valve-clearance",
      children: "Symptoms of Incorrect Valve Clearance"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Symptom"
          }), createVNode("th", {
            children: "Likely Cause"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Ticking/clattering from engine top at idle"
          }), createVNode("td", {
            children: "Valve clearance too large (excessive lash)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Hard starting, especially when cold"
          }), createVNode("td", {
            children: "Valve clearance too small (insufficient lash — valves may not seat fully)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Loss of compression / low power"
          }), createVNode("td", {
            children: "Intake or exhaust valve stuck open from zero clearance"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Engine backfires on deceleration"
          }), createVNode("td", {
            children: "Exhaust valve not seating fully — check exhaust valve clearance"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Oil in air filter / blue smoke"
          }), createVNode("td", {
            children: "Valve cover gasket leaking (secondary issue from valve access)"
          })]
        })]
      })
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: [createVNode(_components.p, {
        children: ["� ", createVNode(_components.strong, {
          children: "Piaggio ZIP 50/100 4T valve clearances"
        }), " — from the official Piaggio MSS ZIP 100 4T Service Station Manual:"]
      }), createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Intake:"
        }), " 0.10 mm  |  ", createVNode(_components.strong, {
          children: "Exhaust:"
        }), " 0.15 mm  |  Check cold engine only  |  Lock nut torque: ", createVNode(_components.strong, {
          children: "7–9 Nm"
        })]
      }), createVNode(_components.p, {
        children: ["Note: the Piaggio ZIP 100 4T uses ", createVNode(_components.strong, {
          children: "different"
        }), " valve clearances from GY6 engines — the ZIP intake is twice the GY6 spec, and the exhaust is three times wider. Do not cross-apply these figures. The procedure is the same (cold engine, piston at TDC on compression stroke), but always use the specification for your specific engine. Check at every 6,000 km service on the ZIP. See the ", createVNode(_components.a, {
          href: "/models/piaggio-zip-100-technical-overview.html",
          children: "Piaggio ZIP 100 Technical Overview"
        }), " for full specification table."]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "related-videos",
      children: "Related Videos"
    }), "\n", createVNode(_components.h4, {
      id: "qmb139--gy6-valve-adjustment--the-easy-way",
      children: "QMB139 & GY6 Valve Adjustment — The Easy Way"
    }), "\n", createVNode(_components.p, {
      children: "Clear demonstration of finding TDC and setting valve clearance on both 50cc (139QMB) and 125/150cc (157QMJ) engines with a feeler gauge."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=Y8R28-v5mz0",
        children: "Watch on YouTube →"
      })
    }), "\n", createVNode(_components.h4, {
      id: "gy6-valve-adjustment--step-by-step-bintelli",
      children: "GY6 Valve Adjustment — Step by Step (Bintelli)"
    }), "\n", createVNode(_components.p, {
      children: "Concise walkthrough from rocker cover removal through feeler gauge measurement and lock-nut tightening on a typical GY6 clone scooter."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=v335dScngi8",
        children: "Watch on YouTube →"
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

const url = "src/content/repair-guides/gy6-valve-adjustment-guide.mdx";
const file = "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-valve-adjustment-guide.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-valve-adjustment-guide.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
