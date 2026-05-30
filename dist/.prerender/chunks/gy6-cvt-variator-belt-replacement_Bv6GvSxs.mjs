import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_CuGQ4WK_.mjs';
import { $ as $$VideoEmbed } from './VideoEmbed_xzJISfAr.mjs';
import { $ as $$Callout } from './Callout_QX-gPCwg.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 CVT Variator & Drive Belt Replacement Guide",
  "description": "GY6 CVT belt and variator replacement guide. Belt size spec, roller weight selection, and step-by-step variator disassembly for 50/125/150cc scooters.",
  "publishDate": "2026-05-07",
  "updatedDate": "2026-05-29",
  "difficulty": "Intermediate",
  "timeEstimate": "~45–90 min",
  "tags": ["gy6", "cvt", "variator", "belt", "rollers", "transmission"],
  "appliesTo": ["GY6 50cc (139QMB)", "GY6 125cc (152QMI)", "GY6 150cc (157QMJ)", "BTC Riva", "La Souris Sourini", "La Souris City S", "Santini Capri"],
  "videos": [{
    "id": "XakWj8YM_P4",
    "title": "Simplest Way to Replace GY6 CV Belt",
    "creator": "YouTube",
    "position": "inline"
  }, {
    "id": "SQ5GmXbJKQs",
    "title": "GY6 Variator/Roller Replacement & Tips (Step by Step)",
    "creator": "YouTube",
    "position": "hero"
  }],
  "sources": [],
  "canonical": "https://ismr.online/repair-guides/gy6-cvt-variator-belt-replacement.html",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-the-gy6-cvt-works",
    "text": "How the GY6 CVT Works"
  }, {
    "depth": 2,
    "slug": "when-to-replace",
    "text": "When to Replace"
  }, {
    "depth": 2,
    "slug": "belt-specification-reference",
    "text": "Belt Specification Reference"
  }, {
    "depth": 2,
    "slug": "part-1--belt-removal-without-special-tools",
    "text": "Part 1 — Belt Removal Without Special Tools"
  }, {
    "depth": 3,
    "slug": "step-by-step-belt-only",
    "text": "Step-by-Step: Belt Only"
  }, {
    "depth": 2,
    "slug": "part-2--variator-pulley-disassembly--roller-replacement",
    "text": "Part 2 — Variator Pulley Disassembly & Roller Replacement"
  }, {
    "depth": 3,
    "slug": "step-by-step-variator--rollers",
    "text": "Step-by-Step: Variator & Rollers"
  }, {
    "depth": 2,
    "slug": "torque-specifications-summary",
    "text": "Torque Specifications Summary"
  }, {
    "depth": 2,
    "slug": "related-videos",
    "text": "Related Videos"
  }, {
    "depth": 4,
    "slug": "scooter-cvt-transmission--full-service-inspection",
    "text": "Scooter CVT Transmission — Full Service Inspection"
  }, {
    "depth": 4,
    "slug": "complete-belt--variator-service--vespa-150-3v",
    "text": "Complete Belt & Variator Service — Vespa 150 3V"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "how-the-gy6-cvt-works",
      children: "How the GY6 CVT Works"
    }), "\n", createVNode(_components.p, {
      children: ["The Continuously Variable Transmission (CVT) on GY6 scooters consists of three main assemblies: the ", createVNode(_components.strong, {
        children: "variator"
      }), " (primary pulley on the crankshaft), the ", createVNode(_components.strong, {
        children: "rear clutch bell/secondary pulley"
      }), " (on the transmission input shaft), and the ", createVNode(_components.strong, {
        children: "drive belt"
      }), " that runs between them. As engine RPM rises, centrifugal rollers inside the variator push the pulley faces together, forcing the belt to ride higher — effectively changing the gear ratio automatically without any driver input."]
    }), "\n", createVNode(_components.h2, {
      id: "when-to-replace",
      children: "When to Replace"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Component"
          }), createVNode("th", {
            children: "Replacement Interval"
          }), createVNode("th", {
            children: "Symptoms of Wear"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Drive belt"
          }), createVNode("td", {
            children: "Every 8,000–12,000 km (or sooner if cracked)"
          }), createVNode("td", {
            children: "Slipping, loss of acceleration, jerky takeoff, visible cracks on belt edges"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Variator rollers"
          }), createVNode("td", {
            children: "Every 10,000–15,000 km"
          }), createVNode("td", {
            children: "Hesitation at mid-throttle, flat acceleration curve, rattling from CVT cover"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Clutch springs"
          }), createVNode("td", {
            children: "Every 15,000–20,000 km"
          }), createVNode("td", {
            children: "Clutch engaging too early (creep at idle), poor low-speed drivability"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "CVT cover gasket"
          }), createVNode("td", {
            children: "Whenever cover is removed"
          }), createVNode("td", {
            children: "Oil/grease seeping from CVT cover seam"
          })]
        })]
      })
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Safety first:"
        }), " Work on a cold engine only. The variator and clutch bell reach high temperatures during operation. Ensure the scooter is on its centre stand on a flat, stable surface."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "belt-specification-reference",
      children: "Belt Specification Reference"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Engine"
          }), createVNode("th", {
            children: "Typical Belt Size"
          }), createVNode("th", {
            children: "Notes"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "GY6 50cc (139QMB)"
          }), createVNode("td", {
            children: "669 × 18 × 30"
          }), createVNode("td", {
            children: "Most common on BTC Riva, La Souris, Santini 50cc"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "GY6 150cc (157QMJ)"
          }), createVNode("td", {
            children: "835 × 20 × 30 or 842 × 20 × 30"
          }), createVNode("td", {
            children: "Verify against your specific model"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "The three numbers represent: overall length × top width × angle. Always confirm the correct size with your parts supplier before ordering — some Chinese scooter variants deviate from standard sizes."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "part-1--belt-removal-without-special-tools",
      children: "Part 1 — Belt Removal Without Special Tools"
    }), "\n", createVNode(_components.p, {
      children: "This section covers removing and replacing the drive belt only, using a technique that avoids the need for a variator holding tool or impact wrench. Useful when you only need a belt swap and don’t intend to service the variator or rollers."
    }), "\n", createVNode($$VideoEmbed, {
      videoId: "XakWj8YM_P4",
      title: "Simplest Way to Replace GY6 CV Belt",
      creator: "YouTube"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Video:"
      }), " “Simplest Way to Replace GY6 CV Belt” | YouTube   ", createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=XakWj8YM_P4",
        children: "↗ Watch on YouTube"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "step-by-step-belt-only",
      children: "Step-by-Step: Belt Only"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Step 1 — Remove the CVT Cover"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Place the scooter on its centre stand on level ground."
      }), "\n", createVNode(_components.li, {
        children: "Locate the CVT cover on the left side of the engine (the large plastic or alloy cover with ventilation slots)."
      }), "\n", createVNode(_components.li, {
        children: "Remove all cover bolts — typically 6–8 bolts of 8 mm or 10 mm. Keep them together; they are often different lengths."
      }), "\n", createVNode(_components.li, {
        children: "Gently tap the cover with a soft mallet to break the gasket seal if it is stuck. Do not pry against the casting — it cracks easily."
      }), "\n", createVNode(_components.li, {
        children: "Remove the cover. Inspect inside for belt dust, cracked rubber fragments, or oil contamination (indicates a crankshaft seal leak)."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Step 2 — Remove the Drive Belt"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "With the cover off, you will see the drive belt running between the two pulleys."
      }), "\n", createVNode(_components.li, {
        children: "Compress (push together) the faces of the rear clutch pulley by hand while simultaneously lifting the belt off the front variator pulley. This creates slack in the belt loop."
      }), "\n", createVNode(_components.li, {
        children: "Slide the belt off the rear clutch, then off the front variator. If the belt is stiff or cracked, it may snap during removal — wear eye protection."
      }), "\n", createVNode(_components.li, {
        children: "Inspect the belt: cracks along the edge, fraying, glazing, or visible rubber chunks missing all indicate the belt needs replacement."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Step 3 — Install the New Belt & Reassemble"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Route the new belt over the rear clutch pulley first, ensuring it sits centrally in the groove."
      }), "\n", createVNode(_components.li, {
        children: "While compressing the rear pulley faces together, loop the belt over the front variator. Release the rear pulley — the spring tension will pull the belt taut."
      }), "\n", createVNode(_components.li, {
        children: "Rotate the rear wheel by hand to seat the belt evenly and check that it tracks centrally on both pulleys without twisting."
      }), "\n", createVNode(_components.li, {
        children: "Clean the CVT cover interior and replace the gasket if torn or compressed flat."
      }), "\n", createVNode(_components.li, {
        children: ["Refit the CVT cover. Tighten bolts in a cross pattern to approximately ", createVNode(_components.strong, {
          children: "10–12 Nm"
        }), ". Do not overtighten — the cover threads strip easily."]
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Break-in tip:"
        }), " After fitting a new belt, avoid full-throttle acceleration for the first 100–200 km. New belts need time to seat and conform to the pulley surfaces. Premature hard acceleration can glaze or crack a new belt prematurely."]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "part-2--variator-pulley-disassembly--roller-replacement",
      children: "Part 2 — Variator Pulley Disassembly & Roller Replacement"
    }), "\n", createVNode(_components.p, {
      children: "This section covers full variator removal, inspection of the pulley ramps, and roller replacement. Required when rollers are worn, you’re tuning for performance, or belt-only replacement hasn’t resolved your CVT symptoms."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Additional tools required for this section:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Variator holding tool (universal GY6 type) — do not attempt to jam the variator with a screwdriver"
      }), "\n", createVNode(_components.li, {
        children: "Impact wrench or breaker bar (the variator nut is torqued very tight)"
      }), "\n", createVNode(_components.li, {
        children: "Torque wrench"
      }), "\n"]
    }), "\n", createVNode($$VideoEmbed, {
      videoId: "SQ5GmXbJKQs",
      title: "GY6 Variator/Roller Replacement & Tips (Step by Step)",
      creator: "YouTube"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Video:"
      }), " “GY6 Variator/Roller Replacement & Tips (Step by Step)” | YouTube   ", createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=SQ5GmXbJKQs",
        children: "↗ Watch on YouTube"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "step-by-step-variator--rollers",
      children: "Step-by-Step: Variator & Rollers"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Step 1 — Remove the CVT Cover & Belt"
      })
    }), "\n", createVNode(_components.p, {
      children: "Follow Part 1, Steps 1 and 2 above to remove the cover and belt first."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Step 2 — Remove the Variator"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Use the variator holding tool to lock the front pulley against rotation."
      }), "\n", createVNode(_components.li, {
        children: ["With an impact wrench or breaker bar, remove the variator nut. Note: threads vary by manufacturer — if the nut won’t loosen counter-clockwise, try clockwise (some GY6 variants use a standard right-hand thread). This nut is typically torqued to ", createVNode(_components.strong, {
          children: "49 Nm (36 ft-lb)"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Slide off the outer face of the variator. Note the orientation — there is often an arrow or chamfer indicating the correct fitting direction."
      }), "\n", createVNode(_components.li, {
        children: "Lift off the outer pulley face and set it aside."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Step 3 — Inspect & Replace Rollers"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Remove the rollers from the guide cage. There are typically 6 rollers. Inspect each one: flat spots, grooves worn into the surface, or irregular wear all indicate replacement is needed."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "Roller specifications by engine:"
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["GY6 50cc (139QMB): ", createVNode(_components.strong, {
              children: "16×13 mm"
            }), " @ 7.5–8.5 g (OEM stock; aftermarket range 5–11.5 g)"]
          }), "\n", createVNode(_components.li, {
            children: ["GY6 125cc (152QMI): ", createVNode(_components.strong, {
              children: "18×14 mm"
            }), " @ 12–13 g (OEM ~12.8 g)"]
          }), "\n", createVNode(_components.li, {
            children: ["GY6 150cc (157QMJ): ", createVNode(_components.strong, {
              children: "18×14 mm"
            }), " @ 12–14 g"]
          }), "\n"]
        }), "\n", createVNode(_components.p, {
          children: "Always use the correct diameter for your engine — mixing sizes causes CVT failure. Heavier rollers delay engagement (better top speed); lighter rollers engage earlier (better acceleration). Do not deviate more than 2 g from stock unless tuning intentionally."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Inspect the variator ramp surfaces for grooving or cracks. Shallow grooves from flat-spotted rollers are normal; deep grooves mean the variator body needs replacement."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Step 4 — Inspect the Rear Clutch (while you’re in there)"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Inspect the clutch bell interior for glazing (shiny hard surface) or scoring. Light glazing can be scuffed with coarse sandpaper; heavy scoring means replacement."
      }), "\n", createVNode(_components.li, {
        children: "Check the clutch shoes for uneven wear. The shoes should contact the bell evenly around the circumference."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Step 5 — Reassemble"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Clean the variator ramp surfaces and roller guides with a dry rag. ", createVNode(_components.strong, {
          children: "Do not apply grease to the rollers"
        }), " — they must run dry. Grease attracts belt dust and accelerates wear."]
      }), "\n", createVNode(_components.li, {
        children: "Install new rollers in the guide cage."
      }), "\n", createVNode(_components.li, {
        children: ["Reinstall the outer variator face in the correct orientation and torque the nut to ", createVNode(_components.strong, {
          children: "49 Nm"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Refit the belt (Part 1, Step 3) and CVT cover."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "torque-specifications-summary",
      children: "Torque Specifications Summary"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Fastener"
          }), createVNode("th", {
            children: "Torque"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Variator nut (front pulley)"
          }), createVNode("td", {
            children: "49 Nm (36 ft-lb)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Clutch bell nut (rear pulley)"
          }), createVNode("td", {
            children: "49 Nm (36 ft-lb)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "CVT cover bolts"
          }), createVNode("td", {
            children: "10–12 Nm"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "related-videos",
      children: "Related Videos"
    }), "\n", createVNode(_components.h4, {
      id: "scooter-cvt-transmission--full-service-inspection",
      children: "Scooter CVT Transmission — Full Service Inspection"
    }), "\n", createVNode(_components.p, {
      children: "Complete teardown and inspection of a scooter CVT including variator, belt, clutch bell, and clutch shoes. Good broader reference covering the whole system."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=2EjW-iSP-Q8",
        children: "Watch on YouTube →"
      })
    }), "\n", createVNode(_components.h4, {
      id: "complete-belt--variator-service--vespa-150-3v",
      children: "Complete Belt & Variator Service — Vespa 150 3V"
    }), "\n", createVNode(_components.p, {
      children: "Full variator and drive belt service on a modern Vespa 150 — useful reference for Piaggio-platform belt routing and torque procedures."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=85_u6xw0i7k",
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

const url = "src/content/repair-guides/gy6-cvt-variator-belt-replacement.mdx";
const file = "/sessions/ecstatic-zealous-goldberg/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-cvt-variator-belt-replacement.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/ecstatic-zealous-goldberg/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-cvt-variator-belt-replacement.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
