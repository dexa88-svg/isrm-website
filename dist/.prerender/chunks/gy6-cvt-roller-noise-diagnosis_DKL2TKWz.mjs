import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_C1PmNaGI.mjs';
import { $ as $$VideoEmbed } from './VideoEmbed_CYqcL_Lr.mjs';
import { $ as $$Callout } from './Callout_Cmo--wc0.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 CVT Roller: Metallic Noise Diagnosis",
  "description": "Diagnose CVT roller and variator noise on GY6 scooters. Rattle, vibration, and judder causes — roller wear, flat spots, and variator face scoring explained.",
  "publishDate": "2026-05-19",
  "updatedDate": "2026-05-19",
  "difficulty": "Beginner",
  "timeEstimate": "~30 min",
  "tags": ["GY6", "CVT", "Rollers", "Noise", "Variator"],
  "appliesTo": ["GY6 50cc (139QMB)", "GY6 125cc (152QMI)", "GY6 150cc (157QMJ)", "BTC Riva", "La Souris Sourini", "La Souris City S", "Santini Capri"],
  "videos": [{
    "id": "l3kabcwTPeg",
    "title": "CVT Roller Noise Diagnosis — GY6 Scooter",
    "creator": "YouTube",
    "position": "hero"
  }],
  "sources": [],
  "canonical": "https://ismr.online/diagnostics/gy6-cvt-roller-noise-diagnosis.html",
  "draft": false,
  "category": "transmission",
  "engine": "both",
  "fuel": "both",
  "section": "Transmission & Noise"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "understanding-the-sound",
    "text": "Understanding the Sound"
  }, {
    "depth": 2,
    "slug": "reference-video",
    "text": "Reference Video"
  }, {
    "depth": 2,
    "slug": "quick-symptom-table",
    "text": "Quick Symptom Table"
  }, {
    "depth": 2,
    "slug": "what-are-cvt-rollers",
    "text": "What Are CVT Rollers?"
  }, {
    "depth": 2,
    "slug": "step-by-step-diagnosis",
    "text": "Step-by-Step Diagnosis"
  }, {
    "depth": 3,
    "slug": "step-1--confirm-the-noise-source",
    "text": "Step 1 — Confirm the Noise Source"
  }, {
    "depth": 3,
    "slug": "step-2--open-the-cvt-cover",
    "text": "Step 2 — Open the CVT Cover"
  }, {
    "depth": 3,
    "slug": "step-3--inspect-the-variator-and-rollers",
    "text": "Step 3 — Inspect the Variator and Rollers"
  }, {
    "depth": 3,
    "slug": "step-4--inspect-ramp-channels",
    "text": "Step 4 — Inspect Ramp Channels"
  }, {
    "depth": 2,
    "slug": "replacement-roller-specifications",
    "text": "Replacement: Roller Specifications"
  }, {
    "depth": 2,
    "slug": "reassembly-notes",
    "text": "Reassembly Notes"
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
      id: "understanding-the-sound",
      children: "Understanding the Sound"
    }), "\n", createVNode(_components.p, {
      children: ["A metallic rattling, knocking, or scraping noise from the front-left side of the engine (CVT cover side) on a GY6 scooter is a classic symptom of ", createVNode(_components.strong, {
        children: "worn or broken CVT variator rollers"
      }), ". When rollers wear unevenly, crack, or flatten on one side, they no longer roll smoothly in the variator ramps — instead they slide, bounce, and strike the variator housing walls."]
    }), "\n", createVNode(_components.p, {
      children: "The noise typically:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Is most pronounced at ", createVNode(_components.strong, {
          children: "low to mid throttle"
        }), " (when the variator is mid-travel)"]
      }), "\n", createVNode(_components.li, {
        children: "Increases or changes pitch with acceleration"
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Disappears or decreases at full throttle"
        }), " (rollers pressed hard against the outer ramp)"]
      }), "\n", createVNode(_components.li, {
        children: ["May be accompanied by ", createVNode(_components.strong, {
          children: "poor acceleration, flat spots, or the scooter reaching top speed more slowly"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "reference-video",
      children: "Reference Video"
    }), "\n", createVNode($$VideoEmbed, {
      videoId: "l3kabcwTPeg",
      title: "CVT Roller Noise Diagnosis — GY6 Scooter",
      creator: "YouTube"
    }), "\n", createVNode(_components.p, {
      children: "Demonstration of the metallic CVT roller noise and how to identify it on a GY6 scooter."
    }), "\n", createVNode(_components.h2, {
      id: "quick-symptom-table",
      children: "Quick Symptom Table"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Noise Description"
          }), createVNode("th", {
            children: "Most Likely Cause"
          }), createVNode("th", {
            children: "Action"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Metallic rattle, worst at 20–50 km/h under gentle throttle"
          }), createVNode("td", {
            children: "Worn/flat CVT rollers"
          }), createVNode("td", {
            children: "Inspect rollers — this guide"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Clunking when pulling away from standstill"
          }), createVNode("td", {
            children: "Broken roller fragment loose inside variator"
          }), createVNode("td", {
            children: "Inspect immediately — broken piece can damage variator"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Continuous scraping at all speeds"
          }), createVNode("td", {
            children: "CVT belt contacting side of casing, or large debris inside"
          }), createVNode("td", {
            children: "Open CVT cover, inspect belt and casing walls"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "High-pitched squeal under load"
          }), createVNode("td", {
            children: "Worn/glazed CVT belt"
          }), createVNode("td", {
            children: ["Inspect belt width and condition — see ", createVNode("a", {
              href: "/repair-guides/gy6-cvt-variator-belt-replacement.html",
              children: "belt replacement guide"
            })]
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Clicking from rear — worse under braking"
          }), createVNode("td", {
            children: "Not CVT — check rear brake disc, caliper, or wheel bearing"
          }), createVNode("td", {
            children: "Inspect rear end separately"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "what-are-cvt-rollers",
      children: "What Are CVT Rollers?"
    }), "\n", createVNode(_components.p, {
      children: ["CVT rollers (also called ", createVNode(_components.strong, {
        children: "variator weights"
      }), ") are cylindrical weights that sit inside the drive face of the variator (front pulley). Under centrifugal force as engine rpm rises, the rollers move outward along angled ramps, pushing the movable drive face inward, which increases the effective pulley diameter and changes the drive ratio — this is how the CVT automatically varies its ratio without a conventional gearbox."]
    }), "\n", createVNode(_components.p, {
      children: ["GY6 engines typically use ", createVNode(_components.strong, {
        children: "6 rollers"
      }), ". Standard weights are 10–18 grams depending on engine size and application. Over time, the plastic or rubber outer skin of the roller wears flat on one side, the roller deforms under heat, or the outer casing cracks — all of which cause noise and loss of performance."]
    }), "\n", createVNode(_components.h2, {
      id: "step-by-step-diagnosis",
      children: "Step-by-Step Diagnosis"
    }), "\n", createVNode(_components.h3, {
      id: "step-1--confirm-the-noise-source",
      children: "Step 1 — Confirm the Noise Source"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Start the engine and hold the scooter on the centre stand with the rear wheel clear of the ground."
      }), "\n", createVNode(_components.li, {
        children: "Slowly open the throttle from idle to about half throttle. Listen carefully for the metallic rattle."
      }), "\n", createVNode(_components.li, {
        children: ["Place your hand lightly on the ", createVNode(_components.strong, {
          children: "CVT cover (left side panel)"
        }), " — you should be able to feel a vibration corresponding to the noise if rollers are the cause."]
      }), "\n", createVNode(_components.li, {
        children: "Have an assistant press on the rear of the scooter to load the rear wheel while you hold the throttle steady at ~3,000–4,000 rpm. A loaded CVT accentuates roller noise."
      }), "\n", createVNode(_components.li, {
        children: "CONFIRMED: Noise is clearly from the CVT cover area, varies with throttle position. Proceed to Step 2."
      }), "\n", createVNode(_components.li, {
        children: "NOT CVT: Noise comes from the engine cases, exhaust, or head area — check valve clearance, cam chain, or exhaust gasket instead."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-2--open-the-cvt-cover",
      children: "Step 2 — Open the CVT Cover"
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "⚠ Safety:"
        }), " Engine must be fully off and cool before opening the CVT cover. The CVT belt and variator spin at high speed and can cause serious injury."]
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Remove the left side panel (two to four screws, depending on model)."
      }), "\n", createVNode(_components.li, {
        children: "Remove the CVT cover — typically 5–7 bolts around the perimeter. On GY6 engines these are M6 bolts."
      }), "\n", createVNode(_components.li, {
        children: "Carefully remove the cover. Note if there is any debris, rubber dust, or fragments inside the casing — this indicates a broken roller or belt."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-3--inspect-the-variator-and-rollers",
      children: "Step 3 — Inspect the Variator and Rollers"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Grip the front variator assembly and rotate it by hand to feel for roughness."
      }), "\n", createVNode(_components.li, {
        children: "Using a variator holder tool (or improvised wedge), lock the variator against rotation."
      }), "\n", createVNode(_components.li, {
        children: ["Remove the variator nut (typically M20, left-hand thread on GY6 — turn ", createVNode(_components.strong, {
          children: "clockwise"
        }), " to loosen). Use a breaker bar."]
      }), "\n", createVNode(_components.li, {
        children: "Slide off the front variator face. The rollers will be visible in the ramp channels of the rear variator half (the slotted disc)."
      }), "\n", createVNode(_components.li, {
        children: "Remove each roller by hand and inspect:"
      }), "\n"]
    }), "\n", createVNode("table", {
      style: "margin-top:0.75rem;",
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Roller Condition"
          }), createVNode("th", {
            children: "Diagnosis"
          }), createVNode("th", {
            children: "Action"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Smooth, round, uniform surface"
          }), createVNode("td", {
            children: "Good — roller is serviceable"
          }), createVNode("td", {
            children: "Clean and reinstall"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Flat spot on one side (D-shaped cross section)"
          }), createVNode("td", {
            children: "Worn — causing rattle and performance loss"
          }), createVNode("td", {
            children: "Replace full set of 6"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Cracked, chipped, or broken outer skin"
          }), createVNode("td", {
            children: "Failed — urgent replacement"
          }), createVNode("td", {
            children: "Replace full set of 6 immediately"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Oval or bulging shape"
          }), createVNode("td", {
            children: "Heat-deformed — common with wrong weight rollers"
          }), createVNode("td", {
            children: "Replace full set with correct weight"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Metal core visible through worn plastic"
          }), createVNode("td", {
            children: "Severely worn"
          }), createVNode("td", {
            children: "Replace full set; inspect ramp channels for gouging"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-4--inspect-ramp-channels",
      children: "Step 4 — Inspect Ramp Channels"
    }), "\n", createVNode(_components.p, {
      children: "While the rollers are removed, inspect the angled ramp channels in the variator disc (the rear variator half). Run your fingernail across each ramp surface."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Surface should be smooth and slightly shiny."
      }), "\n", createVNode(_components.li, {
        children: "Grooves, gouges, or rough patches indicate the rollers were running in worn condition for a long time."
      }), "\n", createVNode(_components.li, {
        children: "Light surface marks are acceptable. Deep grooves mean the variator itself should be replaced."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "replacement-roller-specifications",
      children: "Replacement: Roller Specifications"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Engine"
          }), createVNode("th", {
            children: "Standard Roller Weight"
          }), createVNode("th", {
            children: "Quantity"
          }), createVNode("th", {
            children: "Roller Dimensions (typical)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "GY6 50cc (139QMB)"
          }), createVNode("td", {
            children: "7.5–8.5 g"
          }), createVNode("td", {
            children: "6"
          }), createVNode("td", {
            children: "Ø16 × 13 mm"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "GY6 125cc (152QMI)"
          }), createVNode("td", {
            children: "12–13 g"
          }), createVNode("td", {
            children: "6"
          }), createVNode("td", {
            children: "Ø18 × 14 mm"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "GY6 150cc (157QMJ)"
          }), createVNode("td", {
            children: "15–16 g"
          }), createVNode("td", {
            children: "6"
          }), createVNode("td", {
            children: "Ø18 × 14 mm"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Piaggio Vespa Primavera 125"
          }), createVNode("td", {
            children: "11 g"
          }), createVNode("td", {
            children: "6"
          }), createVNode("td", {
            children: "Ø23 × 18 mm (Piaggio-specific)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Piaggio Zip 4T 50cc"
          }), createVNode("td", {
            children: "3.5–6 g"
          }), createVNode("td", {
            children: "6"
          }), createVNode("td", {
            children: "Ø19 × 15.5 mm"
          })]
        })]
      })
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Performance tip:"
        }), " Heavier rollers cause the variator to shift up (higher ratio) at lower rpm — more top speed, slower acceleration. Lighter rollers cause earlier upshift — quicker acceleration, lower top speed. For daily commuting, stick to OEM specification weight."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "reassembly-notes",
      children: "Reassembly Notes"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Install all 6 new rollers in the ramp channels. Ensure each roller sits in its slot fully before reassembling the front variator face."
      }), "\n", createVNode(_components.li, {
        children: ["Apply a very light smear of clean grease (high-melting-point grease, not lithium) to the ramp channels — but do ", createVNode(_components.strong, {
          children: "not"
        }), " grease the roller outer surface or the belt pulley faces."]
      }), "\n", createVNode(_components.li, {
        children: ["Torque the variator nut to the specification for your engine: typically ", createVNode(_components.strong, {
          children: "35–45 Nm"
        }), " for GY6, ", createVNode(_components.strong, {
          children: "50 Nm"
        }), " for Piaggio. The nut is left-hand thread on GY6 — tighten counter-clockwise."]
      }), "\n", createVNode(_components.li, {
        children: "Reinstall the CVT cover and test-ride at varying throttle positions to confirm the rattle has gone."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Always replace all 6 rollers at once."
        }), " Mixing old and new rollers results in uneven loading on the variator ramps, which causes noise, uneven wear, and poor shifting — exactly the problem you were trying to fix."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "related-guides",
      children: "Related Guides"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/repair-guides/gy6-cvt-variator-belt-replacement.html",
          children: "CVT Variator and Belt Replacement"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/repair-guides/scooter-cvt-clutch-variator-guide.html",
          children: "CVT Clutch and Variator Complete Guide"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Sources: GY6 CVT service documentation; community-verified diagnostic information from scootdawg.com. Video reference: YouTube Short by @its-that-easy. Licensed CC BY-SA 4.0."
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

const url = "src/content/diagnostics/gy6-cvt-roller-noise-diagnosis.mdx";
const file = "/sessions/tender-pensive-knuth/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-cvt-roller-noise-diagnosis.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/tender-pensive-knuth/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-cvt-roller-noise-diagnosis.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
