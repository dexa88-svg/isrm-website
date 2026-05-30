import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_DxUxf521.mjs';
import { $ as $$VideoEmbed } from './VideoEmbed_U3NluMvj.mjs';
import { $ as $$Callout } from './Callout_B8cmn1zd.mjs';
import 'clsx';

const frontmatter = {
  "title": "Scooter Brake Fluid Change & Bleed Guide",
  "description": "GY6 scooter brake fluid change guide. DOT 3 vs DOT 4, bleeding sequence, and reservoir refill procedure for front hydraulic disc brakes on 50–150cc models.",
  "publishDate": "2026-05-07",
  "updatedDate": "2026-05-07",
  "difficulty": "Beginner",
  "timeEstimate": "~30 min",
  "tags": ["repair-guides", "GY6", "Vespa", "brakes", "hydraulics", "safety"],
  "appliesTo": ["GY6 50cc (139QMB)", "GY6 125cc (152QMI)", "GY6 150cc (157QMJ)", "BTC Riva", "La Souris Sourini", "Vespa Primavera 125/150", "Vespa Sprint 125/150", "Piaggio Zip 50 4T"],
  "videos": [{
    "id": "nhfPUISx-FU",
    "title": "Bleeding the Front Brake on a 150cc GY6 Scooter",
    "creator": "YouTube",
    "position": "hero"
  }],
  "sources": [],
  "canonical": "https://ismr.online/repair-guides/gy6-brake-fluid-guide.html",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "fluid-specification",
    "text": "Fluid Specification"
  }, {
    "depth": 2,
    "slug": "tools--materials-required",
    "text": "Tools & Materials Required"
  }, {
    "depth": 2,
    "slug": "step-by-step-brake-bleed-procedure",
    "text": "Step-by-Step Brake Bleed Procedure"
  }, {
    "depth": 3,
    "slug": "preparation",
    "text": "Preparation"
  }, {
    "depth": 3,
    "slug": "draining--filling",
    "text": "Draining & Filling"
  }, {
    "depth": 3,
    "slug": "bleeding-two-person-or-one-person-method",
    "text": "Bleeding (Two-Person or One-Person Method)"
  }, {
    "depth": 3,
    "slug": "finishing",
    "text": "Finishing"
  }, {
    "depth": 2,
    "slug": "service-intervals",
    "text": "Service Intervals"
  }, {
    "depth": 2,
    "slug": "related-videos",
    "text": "Related Videos"
  }, {
    "depth": 4,
    "slug": "how-to-bleed-gy6-scooter-brakes",
    "text": "How to Bleed GY6 Scooter Brakes"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    h3: "h3",
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
      children: ["DOT brake fluid is hygroscopic — it absorbs moisture from the atmosphere through the reservoir vent and brake line walls. As water content builds up over time, the fluid’s boiling point drops. Under hard or prolonged braking the fluid can boil, creating vapour bubbles in the line. Vapour compresses (liquid does not), so the lever becomes spongy and braking force is lost — this is called ", createVNode(_components.em, {
        children: "vapour lock"
      }), ". Fresh fluid prevents this and also reduces internal corrosion in the master cylinder and caliper pistons."]
    }), "\n", createVNode($$Callout, {
      type: "danger",
      children: createVNode(_components.p, {
        children: ["� ", createVNode(_components.strong, {
          children: "Hazard:"
        }), " Brake fluid strips paint and damages plastic within seconds. Protect all painted and plastic surfaces with rags before starting. Wear nitrile gloves. If skin contact occurs, wash immediately with soap and water. Dispose of old brake fluid at a recycling centre — never pour it down the drain."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "fluid-specification",
      children: "Fluid Specification"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Model"
          }), createVNode("th", {
            children: "Fluid type"
          }), createVNode("th", {
            children: "Notes"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "GY6 125/150 (most clones)"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "DOT 4"
            })
          }), createVNode("td", {
            children: "Check reservoir cap — it is stamped with the correct grade"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Vespa Primavera / Sprint"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "DOT 4"
            })
          }), createVNode("td", {
            children: "Piaggio recommends DOT 4 for all modern hydraulic systems"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Vespa GTS 250/300"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "DOT 4"
            })
          }), createVNode("td", {
            children: "Both front and rear circuits"
          })]
        })]
      })
    }), "\n", createVNode($$Callout, {
      type: "danger",
      children: createVNode(_components.p, {
        children: ["� ", createVNode(_components.strong, {
          children: "Never mix fluid grades or brands."
        }), " DOT 3, 4, and 5.1 are glycol-based and miscible with each other — but mixing grades lowers the effective boiling point of the blend. DOT 5 (silicone-based) is ", createVNode(_components.strong, {
          children: "completely incompatible"
        }), " with DOT 3/4/5.1 systems and must never be used unless the entire system has been flushed and rebuilt."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "tools--materials-required",
      children: "Tools & Materials Required"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "8 mm ring spanner (bleed nipple)"
      }), "\n", createVNode(_components.li, {
        children: "Phillips screwdriver (master cylinder reservoir cap screws)"
      }), "\n", createVNode(_components.li, {
        children: "Fresh, sealed DOT 4 brake fluid (100–200 ml is sufficient for one circuit)"
      }), "\n", createVNode(_components.li, {
        children: "Clear vinyl bleed tube (~30 cm, 4–5 mm inner diameter)"
      }), "\n", createVNode(_components.li, {
        children: "Small glass jar or container for old fluid"
      }), "\n", createVNode(_components.li, {
        children: "Syringe or turkey baster (for reservoir management)"
      }), "\n", createVNode(_components.li, {
        children: "Rags and newspaper to protect painted surfaces"
      }), "\n", createVNode(_components.li, {
        children: "Nitrile gloves"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "🎬 Video Guide — Bleeding the Front Brake on a 150cc GY6 Scooter"
    }), "\n", createVNode($$VideoEmbed, {
      videoId: "nhfPUISx-FU",
      title: "Bleeding the Front Brake on a 150cc GY6 Scooter",
      creator: "YouTube"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Video:"
      }), " “Bleeding the Front Brake on a 150cc GY6 Scooter” | YouTube   ", createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=nhfPUISx-FU",
        children: "↗ Watch on YouTube"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "step-by-step-brake-bleed-procedure",
      children: "Step-by-Step Brake Bleed Procedure"
    }), "\n", createVNode(_components.h3, {
      id: "preparation",
      children: "Preparation"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Protect surrounding surfaces"
        }), " — lay rags over the scooter’s painted panels, plastics, and the fuel tank around the handlebar area. Brake fluid contact causes immediate paint damage."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Locate the brake caliper bleed nipple"
        }), " — a small valve on the caliper body with a rubber dust cap. Remove the dust cap."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Attach the bleed tube"
        }), " over the nipple. Place the other end into the collection jar. Loop the tube upward above the caliper height — this prevents air from being drawn back into the system between pumps."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "draining--filling",
      children: "Draining & Filling"
    }), "\n", createVNode(_components.ol, {
      start: "4",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Open the master cylinder reservoir"
        }), " on the handlebar — remove the two Phillips screws, lift off the cap, and remove the rubber diaphragm. Keep the reservoir level at all times to prevent air entry."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Note the fluid color"
        }), " — fresh DOT 4 is clear/pale yellow. Old fluid is amber to dark brown. Heavily contaminated fluid may be almost black."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Top up the reservoir"
        }), " with fresh fluid to the MAX line before opening the bleed nipple. This prevents the reservoir from running dry and drawing air into the system."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "bleeding-two-person-or-one-person-method",
      children: "Bleeding (Two-Person or One-Person Method)"
    }), "\n", createVNode(_components.ol, {
      start: "7",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Open the bleed nipple"
        }), " ½ turn counter-clockwise. Old fluid will begin to flow by gravity."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Pump-bleed cycle"
        }), " — squeeze the brake lever ", createVNode(_components.em, {
          children: "slowly"
        }), " to the handlebar. With the lever held in, open the nipple ½ turn and allow fluid to flow out. Close the nipple before releasing the lever. Repeat this cycle 8–10 times. This pushes old fluid out faster and purges air bubbles."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Watch the reservoir constantly"
        }), " — top up with fresh fluid every 3–4 pump cycles. If the reservoir runs empty, air enters the system and you must start over."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Continue until"
        }), " the fluid flowing out of the bleed tube is clear and pale yellow (matching the fresh fluid in the bottle), with no air bubbles visible in the tube."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Final close:"
        }), " with the brake lever squeezed to the handlebar, close the bleed nipple firmly (5–8 Nm — snug, not over-tight). Release the lever."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "finishing",
      children: "Finishing"
    }), "\n", createVNode(_components.ol, {
      start: "12",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Top up the reservoir"
        }), " to the MAX line with fresh fluid. Refit the rubber diaphragm (ensure it seats without folds) and reinstall the cap and screws."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Pump the lever"
        }), " several times — it should feel firm throughout its travel with no sponginess. If still spongy, air remains in the system and the bleed procedure must be repeated."]
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "Refit the bleed nipple dust cap."
        })
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Wipe down all surfaces"
        }), " that may have been contaminated with fluid. Check carefully around the reservoir cap and bleed nipple."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Test ride carefully"
        }), " at low speed before normal use."]
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["� ", createVNode(_components.strong, {
          children: "One-person bleeding tip:"
        }), " A cheap vacuum bleeder kit (syringe + tube with one-way valve, ~€10 online) makes solo bleeding much easier and faster. You can also use the gravity-bleed method — open the nipple ½ turn and let fluid drip out by gravity while keeping the reservoir topped up, no lever pumping needed. Gravity bleed is slower but foolproof for removing old fluid."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "service-intervals",
      children: "Service Intervals"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Situation"
          }), createVNode("th", {
            children: "Action"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Every 2 years (regardless of km)"
          }), createVNode("td", {
            children: "Full fluid change — drain and refill both circuits"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Spongy lever feel at any time"
          }), createVNode("td", {
            children: "Check for leaks, then bleed to remove air"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "After any brake line or caliper work"
          }), createVNode("td", {
            children: "Full bleed required to remove introduced air"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "After new brake pads fitted"
          }), createVNode("td", {
            children: "Top up reservoir, pump lever to re-seat pistons"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "related-videos",
      children: "Related Videos"
    }), "\n", createVNode(_components.h4, {
      id: "how-to-bleed-gy6-scooter-brakes",
      children: "How to Bleed GY6 Scooter Brakes"
    }), "\n", createVNode(_components.p, {
      children: "Step-by-step pump-bleed method on a GY6 Chinese scooter — shows reservoir top-up technique, bleed nipple procedure, and checking for a firm lever feel."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=Bjt2mEA_lGs",
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

const url = "src/content/repair-guides/gy6-brake-fluid-guide.mdx";
const file = "/sessions/optimistic-keen-davinci/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-brake-fluid-guide.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/optimistic-keen-davinci/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-brake-fluid-guide.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
