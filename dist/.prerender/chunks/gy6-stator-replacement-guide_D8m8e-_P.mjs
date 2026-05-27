import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_DndgnZDT.mjs';
import { $ as $$VideoEmbed } from './VideoEmbed_CaqH1-rp.mjs';
import { $ as $$Callout } from './Callout_D9S1x2uL.mjs';
import { $ as $$SourceBox } from './SourceBox_gwbjJEKP.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 Stator Replacement Guide",
  "description": "Step-by-step GY6 stator removal and installation. Covers flywheel puller use, coil wiring, magneto reassembly, and post-install charging system tests for 139QMB and 157QMJ.",
  "publishDate": "2026-05-21",
  "updatedDate": "2026-05-21",
  "difficulty": "Intermediate",
  "timeEstimate": "~1.5 hours",
  "tags": ["gy6", "stator", "electrical", "alternator", "charging"],
  "appliesTo": ["GY6 139QMB (50cc)", "GY6 152QMI (125cc)", "GY6 157QMJ (150cc)", "BTC Riva", "La Souris Sourini / City", "Santini Capri"],
  "videos": [{
    "id": "2Wfi9pSoHbA",
    "title": "GY6 Stator and Rectifier Replacement",
    "creator": "YouTube",
    "position": "hero"
  }],
  "tools": ["GY6 flywheel puller (M28×1.0 RH or M27×1.0 depending on variant — do NOT substitute a 3-jaw puller)", "19 mm socket and torque wrench", "8 mm socket", "Multimeter", "Wire connector crimps or soldering iron", "Threadlock (medium-strength)"],
  "sources": [{
    "name": "Buggy Depot Tech Center — GY6 150cc Stator Installation Guide",
    "url": "https://www.buggydepot.com/tech-center/gy6-150cc-stator-installation-guide/"
  }, {
    "name": "Rolling Wrench — Understanding Stators",
    "url": "https://www.rollingwrenchdenver.com/blogs/news/understanding-stators-a-comprehensive-guide"
  }],
  "canonical": "https://ismr.online/repair-guides/gy6-stator-replacement-guide.html",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "diagnosing-a-faulty-stator-before-replacing",
    "text": "Diagnosing a Faulty Stator Before Replacing"
  }, {
    "depth": 2,
    "slug": "tools--parts",
    "text": "Tools & Parts"
  }, {
    "depth": 2,
    "slug": "step-by-step-procedure",
    "text": "Step-by-Step Procedure"
  }, {
    "depth": 3,
    "slug": "1--prepare-and-disconnect-battery",
    "text": "1 — Prepare and Disconnect Battery"
  }, {
    "depth": 3,
    "slug": "2--remove-the-right-side-cooling-shroud-and-fan",
    "text": "2 — Remove the Right-Side Cooling Shroud and Fan"
  }, {
    "depth": 3,
    "slug": "2b--remove-the-magneto-cover",
    "text": "2b — Remove the Magneto Cover"
  }, {
    "depth": 3,
    "slug": "3--remove-the-flywheel",
    "text": "3 — Remove the Flywheel"
  }, {
    "depth": 3,
    "slug": "4--remove-the-old-stator",
    "text": "4 — Remove the Old Stator"
  }, {
    "depth": 3,
    "slug": "5--install-the-new-stator",
    "text": "5 — Install the New Stator"
  }, {
    "depth": 3,
    "slug": "6--refit-the-flywheel",
    "text": "6 — Refit the Flywheel"
  }, {
    "depth": 3,
    "slug": "7--post-install-test",
    "text": "7 — Post-Install Test"
  }, {
    "depth": 2,
    "slug": "stator-output-specifications-typical-gy6",
    "text": "Stator Output Specifications (typical GY6)"
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
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["The stator is the fixed generating coil assembly inside the magneto (flywheel magneto alternator) on the ", createVNode(_components.strong, {
        children: "right side"
      }), " of the GY6 engine (the non-drive side — the left side houses the CVT/variator). As the flywheel’s permanent magnets spin around it, the stator produces AC power which is then rectified to DC by the regulator/rectifier to charge the battery and power the electrical system. A failed stator typically causes a flat battery that will not hold charge, dim or dead lighting, or — if the CDI pickup coil is also on the stator — total ignition failure."]
    }), "\n", createVNode($$VideoEmbed, {
      videoId: "2Wfi9pSoHbA",
      title: "GY6 Stator and Rectifier Replacement",
      creator: "YouTube"
    }), "\n", createVNode(_components.h2, {
      id: "diagnosing-a-faulty-stator-before-replacing",
      children: "Diagnosing a Faulty Stator Before Replacing"
    }), "\n", createVNode(_components.p, {
      children: "Before pulling the flywheel, confirm the stator is the fault. Most stator failures show up as charging problems, not ignition failures — the pickup coil is a separate winding and can fail independently."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Charging test (battery voltage method):"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Start the engine and bring it to normal operating temperature."
      }), "\n", createVNode(_components.li, {
        children: "Set a multimeter to DC voltage and probe the battery terminals."
      }), "\n", createVNode(_components.li, {
        children: ["At idle (~1,800 rpm): expect ", createVNode(_components.strong, {
          children: "12.5–13.5 V"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["At ~4,000 rpm: expect ", createVNode(_components.strong, {
          children: "13.5–14.5 V"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "If voltage barely rises above 12 V at any rpm, the stator, regulator/rectifier, or wiring harness is at fault."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Stator AC output test (with engine off, by resistance):"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Disconnect the stator connector (usually a 3-wire yellow AC output plus a separate 2-wire pickup coil connector)."
      }), "\n", createVNode(_components.li, {
        children: ["Measure resistance between each yellow wire pair with the multimeter on Ω:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["A healthy 8-coil GY6 stator typically reads ", createVNode(_components.strong, {
              children: "0.4–0.8 Ω"
            }), " between each pair of yellow leads."]
          }), "\n", createVNode(_components.li, {
            children: "Open circuit (infinite/OL) = broken coil winding → replace stator."
          }), "\n", createVNode(_components.li, {
            children: "Very low resistance near 0 Ω = shorted winding → replace stator."
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["Check pickup coil (trigger coil) resistance between its two leads: typically ", createVNode(_components.strong, {
          children: "100–400 Ω"
        }), " on GY6 engines."]
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Do NOT use a 3-jaw puller to remove the GY6 flywheel."
        }), " The flywheel is tapered onto the crankshaft with no key — a 3-jaw puller will distort and destroy the stator coils before the flywheel breaks free. You must use a dedicated GY6 flywheel puller that threads into the flywheel centre boss."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "tools--parts",
      children: "Tools & Parts"
    }), "\n", createVNode(_components.p, {
      children: "The flywheel puller thread size varies between GY6 variants:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Most 50cc (139QMB):"
        }), " M27×1.0 left-hand thread or M28×1.0 right-hand thread — check your flywheel"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Most 125/150cc (157QMJ):"
        }), " M28×1.0 right-hand thread"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Confirm before ordering a puller. Replacement stators are available in 5-coil (AC-only) and 8-coil (DC) configurations — match the winding count to your original. The 8-coil DC stator is standard on modern Euro 4/5 GY6 scooters."
    }), "\n", createVNode(_components.h2, {
      id: "step-by-step-procedure",
      children: "Step-by-Step Procedure"
    }), "\n", createVNode(_components.h3, {
      id: "1--prepare-and-disconnect-battery",
      children: "1 — Prepare and Disconnect Battery"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Park the scooter on its centre stand on a level surface."
      }), "\n", createVNode(_components.li, {
        children: "Remove the seat and access panels to reach the left side of the engine."
      }), "\n", createVNode(_components.li, {
        children: ["Disconnect the ", createVNode(_components.strong, {
          children: "negative (−) terminal"
        }), " of the battery first. This prevents accidental shorts through the electrical system while working."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2--remove-the-right-side-cooling-shroud-and-fan",
      children: "2 — Remove the Right-Side Cooling Shroud and Fan"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Locate the black plastic cooling fan shroud on the ", createVNode(_components.strong, {
          children: "right side"
        }), " of the engine."]
      }), "\n", createVNode(_components.li, {
        children: "Remove the shroud bolts (typically four 6 mm hex-head bolts, 8 mm spanner)."
      }), "\n", createVNode(_components.li, {
        children: "Lift the shroud away to expose the white plastic cooling fan and the flywheel behind it."
      }), "\n", createVNode(_components.li, {
        children: "Remove the cooling fan: four 8 mm bolts secure it to the flywheel face. Note the fan orientation (it is directional)."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2b--remove-the-magneto-cover",
      children: "2b — Remove the Magneto Cover"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "With the fan removed, the cast alloy magneto cover is now accessible. Remove its bolts (typically five or six 8 mm hex-head bolts around the perimeter)."
      }), "\n", createVNode(_components.li, {
        children: "Carefully pry the cover free — it may be sealed with a gasket or RTV sealant. Note the condition of the gasket; replace it if torn or compressed."
      }), "\n", createVNode(_components.li, {
        children: "The flywheel is now fully exposed inside the engine casing."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "3--remove-the-flywheel",
      children: "3 — Remove the Flywheel"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Prevent the flywheel from rotating: use a flywheel holding tool, or place the transmission in gear and apply the rear brake firmly."
      }), "\n", createVNode(_components.li, {
        children: ["Loosen and remove the large central flywheel nut (19 mm). Note the thread direction — on GY6 engines this is a ", createVNode(_components.strong, {
          children: "standard right-hand thread"
        }), " (counter-clockwise to loosen)."]
      }), "\n", createVNode(_components.li, {
        children: ["Thread the flywheel puller into the central boss of the flywheel until fully engaged (at least 5–6 full turns). ", createVNode(_components.strong, {
          children: "Check your puller’s thread direction"
        }), " — most GY6 pullers are right-hand thread (turn clockwise to engage), but some 50cc variants use a left-hand thread boss; confirm before forcing."]
      }), "\n", createVNode(_components.li, {
        children: "Hold the puller body still and turn the central bolt clockwise. As the puller pushes against the crankshaft end, the flywheel will pop free with a sharp crack — this is normal."
      }), "\n", createVNode(_components.li, {
        children: "Carefully slide the flywheel off the tapered crankshaft."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Check woodruff key:"
        }), " As the flywheel comes off, a small semicircular woodruff key should be visible on the crankshaft taper. Do not lose it — it aligns the flywheel timing. If the key is damaged (sheared), replace it before reassembly."]
      })
    }), "\n", createVNode(_components.h3, {
      id: "4--remove-the-old-stator",
      children: "4 — Remove the Old Stator"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "The stator is secured to the right engine casing (inside the magneto cover) by 2–3 bolts (Phillips or 8 mm hex)."
      }), "\n", createVNode(_components.li, {
        children: "Trace the stator wiring loom through the engine casing grommet. Disconnect the main stator connector and the pickup coil connector from the main wiring harness."
      }), "\n", createVNode(_components.li, {
        children: "Unroute the wiring and remove the stator."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "5--install-the-new-stator",
      children: "5 — Install the New Stator"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Position the new stator in the casing, aligning the mounting holes."
      }), "\n", createVNode(_components.li, {
        children: "Route the wiring loom back through the casing grommet. Ensure the grommet seals properly to prevent oil leaks."
      }), "\n", createVNode(_components.li, {
        children: ["Apply a small drop of medium-strength threadlock to the stator bolts and torque to approximately ", createVNode(_components.strong, {
          children: "8–10 Nm"
        }), ". Do not overtighten — the casing is aluminium."]
      }), "\n", createVNode(_components.li, {
        children: "Reconnect the stator and pickup coil connectors to the main harness."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Wire routing matters:"
        }), " Before refitting the flywheel, check that no wires are routed anywhere near the flywheel path. Any wire that contacts the spinning flywheel will be severed within minutes of riding. Tuck all wiring clear of the flywheel sweep area."]
      })
    }), "\n", createVNode(_components.h3, {
      id: "6--refit-the-flywheel",
      children: "6 — Refit the Flywheel"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Clean the crankshaft taper and the inside of the flywheel boss with a clean rag — no oil or grease on these surfaces."
      }), "\n", createVNode(_components.li, {
        children: "Reinstall the woodruff key into its groove on the crankshaft."
      }), "\n", createVNode(_components.li, {
        children: "Align the flywheel keyway with the woodruff key and slide the flywheel onto the taper. The flywheel magnets will pull it snugly into position."
      }), "\n", createVNode(_components.li, {
        children: ["Refit the flywheel nut and torque to ", createVNode(_components.strong, {
          children: "30–40 Nm"
        }), " (or the specification in your service manual). Under-torquing allows the flywheel to work loose; over-torquing can damage the crankshaft thread."]
      }), "\n", createVNode(_components.li, {
        children: ["Refit the magneto cover with a new gasket (or fresh RTV sealant if no gasket was used). Torque the cover bolts evenly in a cross pattern to approximately ", createVNode(_components.strong, {
          children: "8–10 Nm"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Refit the cooling fan in the correct orientation, then reinstall the cooling shroud."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "7--post-install-test",
      children: "7 — Post-Install Test"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Reconnect the battery negative terminal."
      }), "\n", createVNode(_components.li, {
        children: "Start the engine and perform the charging voltage test described above."
      }), "\n", createVNode(_components.li, {
        children: "At ~4,000 rpm the voltage should read 13.5–14.5 V DC at the battery. If it does not, suspect the regulator/rectifier before concluding the new stator is faulty."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "stator-output-specifications-typical-gy6",
      children: "Stator Output Specifications (typical GY6)"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Parameter"
          }), createVNode("th", {
            children: "Value"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Charging coil resistance (yellow leads, each pair)"
          }), createVNode("td", {
            children: "0.4–0.8 Ω"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Pickup coil resistance"
          }), createVNode("td", {
            children: "100–400 Ω"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "AC output at 5,000 rpm (before rectifier)"
          }), createVNode("td", {
            children: "40–80 V AC"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "DC charging voltage at battery (at 4,000 rpm)"
          }), createVNode("td", {
            children: "13.5–14.5 V"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Flywheel nut torque"
          }), createVNode("td", {
            children: "30–40 Nm"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Stator bolt torque"
          }), createVNode("td", {
            children: "8–10 Nm"
          })]
        })]
      })
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

const url = "src/content/repair-guides/gy6-stator-replacement-guide.mdx";
const file = "/sessions/sharp-gifted-meitner/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-stator-replacement-guide.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/sharp-gifted-meitner/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-stator-replacement-guide.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
