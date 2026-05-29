import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_BWJ2jjys.mjs';
import { $ as $$Callout } from './Callout_Cl3Utv58.mjs';
import { $ as $$VideoEmbed } from './VideoEmbed_CJiqPfg_.mjs';
import { $ as $$SourceBox } from './SourceBox_fMH6NBt7.mjs';
import 'clsx';

const frontmatter = {
  "title": "Vespa & Piaggio Coolant System Maintenance",
  "description": "How to check, top up, and change the coolant on liquid-cooled Vespa and Piaggio scooters. Covers GTS, Primavera, Sprint and Zip 4T with step-by-step procedures.",
  "publishDate": "2026-05-28",
  "updatedDate": "2026-05-28",
  "difficulty": "Beginner",
  "timeEstimate": "45 min",
  "tags": ["Vespa", "Piaggio", "Cooling System", "Coolant", "Maintenance"],
  "appliesTo": ["Vespa GTS 250", "Vespa GTS 300 HPE", "Vespa Primavera 125", "Vespa Primavera 150", "Vespa Sprint 125", "Vespa Sprint 150", "Piaggio Zip 50 4T", "Piaggio Zip 100 4T"],
  "videos": [{
    "id": "D2yBHjVkJv4",
    "title": "Vespa GTS Coolant Flush / Change Tutorial",
    "creator": "Mitch's Scooter Stuff",
    "position": "hero"
  }, {
    "id": "Qn8bBPdEJKg",
    "title": "How to Flush the Coolant on a Vespa GTS HPE",
    "creator": "YouTube",
    "position": "related"
  }],
  "tools": ["T25 Torx screwdriver", "Phillips screwdriver", "Flat-head screwdriver", "Drain container (at least 1 litre)", "Funnel", "Clear bleed hose (30 cm)", "Distilled water", "Torque wrench"],
  "sources": [{
    "name": "Vespa Mag — Cooling System Guide",
    "url": "https://www.vespamag.com/en/3487/well-cooled-is-half-the-ride-the-cooling-system"
  }, {
    "name": "Modern Vespa — Coolant System Flush and Fluid Replacement",
    "url": "https://modernvespa.com/forum/topic85356"
  }, {
    "name": "scegliauto.com — How to Replace Coolant on Piaggio Vespa GTS 300",
    "url": "https://www.scegliauto.com/en/video/piaggio/moto_tutorial/36589/"
  }],
  "canonical": "https://ismr.online/repair-guides/vespa-piaggio-coolant-system-maintenance.html",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "which-models-use-liquid-cooling",
    "text": "Which Models Use Liquid Cooling?"
  }, {
    "depth": 2,
    "slug": "tools--parts-needed",
    "text": "Tools & Parts Needed"
  }, {
    "depth": 2,
    "slug": "maintenance-schedule",
    "text": "Maintenance Schedule"
  }, {
    "depth": 2,
    "slug": "step-1--check-the-coolant-level-quick-check",
    "text": "Step 1 — Check the Coolant Level (Quick Check)"
  }, {
    "depth": 2,
    "slug": "step-2--visual-hose-inspection",
    "text": "Step 2 — Visual Hose Inspection"
  }, {
    "depth": 2,
    "slug": "step-3--full-coolant-flush-and-refill",
    "text": "Step 3 — Full Coolant Flush and Refill"
  }, {
    "depth": 3,
    "slug": "step-31--prepare-the-scooter",
    "text": "Step 3.1 — Prepare the Scooter"
  }, {
    "depth": 3,
    "slug": "step-32--access-the-radiator-cap",
    "text": "Step 3.2 — Access the Radiator Cap"
  }, {
    "depth": 3,
    "slug": "step-33--drain-the-old-coolant",
    "text": "Step 3.3 — Drain the Old Coolant"
  }, {
    "depth": 3,
    "slug": "step-34--refill-with-fresh-coolant",
    "text": "Step 3.4 — Refill with Fresh Coolant"
  }, {
    "depth": 3,
    "slug": "step-35--bleed-the-air-from-the-system",
    "text": "Step 3.5 — Bleed the Air from the System"
  }, {
    "depth": 2,
    "slug": "step-4--post-service-check",
    "text": "Step 4 — Post-Service Check"
  }, {
    "depth": 2,
    "slug": "coolant-specification-summary",
    "text": "Coolant Specification Summary"
  }, {
    "depth": 2,
    "slug": "common-coolant-system-issues",
    "text": "Common Coolant System Issues"
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$SourceBox, {
      sources: frontmatter.sources
    }), "\n", createVNode(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "All modern Vespa and Piaggio scooters — the GTS 250/300, Primavera 125/150, Sprint 125/150, and Zip 4T — use liquid-cooled engines. The cooling system circulates a water–antifreeze mixture through the engine block, radiator, water pump, and hoses to keep temperatures stable under all load conditions. Unlike air-cooled classics, liquid-cooled Vespas require periodic coolant changes to maintain corrosion protection and heat-transfer efficiency."
    }), "\n", createVNode(_components.p, {
      children: "This guide covers the complete coolant maintenance routine: level checks, visual hose inspection, coolant flush and refill, and bleeding the system."
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: "Always work on a cold engine. Opening the radiator cap on a hot engine releases scalding pressurised steam and fluid. Allow the engine to cool for at least 30 minutes before starting any coolant work."
      })
    }), "\n", createVNode(_components.h2, {
      id: "which-models-use-liquid-cooling",
      children: "Which Models Use Liquid Cooling?"
    }), "\n", createVNode(_components.p, {
      children: "All Vespa models from the GTS/GT generation onward (2005–present) are water-cooled. The Primavera and Sprint families (2013–present) are also fully liquid-cooled. The older LX/S 50 and 125 two-valve models vary — the 50 4T versions are air-cooled, while larger-displacement 125–150 cc 3V (three-valve) units are liquid-cooled. The Piaggio Zip 50 4T is air-cooled; the Zip 100 4T is water-cooled."
    }), "\n", createVNode(_components.h2, {
      id: "tools--parts-needed",
      children: "Tools & Parts Needed"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "T25 Torx screwdriver (radiator cap cover screw on most models)"
      }), "\n", createVNode(_components.li, {
        children: "Phillips screwdriver (body panel screws)"
      }), "\n", createVNode(_components.li, {
        children: "Drain container of at least 1 litre capacity"
      }), "\n", createVNode(_components.li, {
        children: "Funnel for refilling"
      }), "\n", createVNode(_components.li, {
        children: "30 cm of clear hose (for bleed procedure)"
      }), "\n", createVNode(_components.li, {
        children: "Distilled water — never use tap water"
      }), "\n", createVNode(_components.li, {
        children: "Approved coolant/antifreeze: Piaggio recommends a 50:50 pre-mixed OAT (Organic Acid Technology) coolant, equivalent to ASTM D3306. Motul Mocool or SIP Scootershop own-brand coolant are widely used by Vespa owners."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "maintenance-schedule",
      children: "Maintenance Schedule"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Service"
          }), createVNode(_components.th, {
            children: "Interval"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Coolant level check"
          }), createVNode(_components.td, {
            children: "Every 1,000 km or monthly"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Visual hose inspection"
          }), createVNode(_components.td, {
            children: "Every service or 3,000 km"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Full coolant flush & replacement"
          }), createVNode(_components.td, {
            children: "Every 2 years or 10,000 km"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Thermostat check"
          }), createVNode(_components.td, {
            children: "Every 4 years or 20,000 km"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "step-1--check-the-coolant-level-quick-check",
      children: "Step 1 — Check the Coolant Level (Quick Check)"
    }), "\n", createVNode(_components.p, {
      children: "On Vespa GTS, Primavera, and Sprint models, the coolant expansion tank is accessible without removing any body panels. Open the front storage compartment and locate the translucent expansion tank on the right side of the engine bay. The fluid level should sit between the MIN and MAX marks on the tank."
    }), "\n", createVNode(_components.p, {
      children: "If the level is below MIN, top up carefully with a 50:50 distilled-water/antifreeze mixture. Do not overfill above MAX — excess fluid will be expelled when hot and can damage surrounding components."
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: "If you need to top up frequently (more than once per season), the system has a slow leak. Inspect hoses and the water pump seal. Low coolant combined with an overheating warning indicates a more serious issue — stop the engine and allow it to cool before continuing."
      })
    }), "\n", createVNode(_components.h2, {
      id: "step-2--visual-hose-inspection",
      children: "Step 2 — Visual Hose Inspection"
    }), "\n", createVNode(_components.p, {
      children: "Each time you wash or service your scooter, take 60 seconds to inspect the coolant hoses. Run your fingers along each hose, feeling for:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Softness or sponginess"
        }), " — indicates internal corrosion of the rubber"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Surface cracking"
        }), " — a sign of age and impending failure"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Swelling at clamp points"
        }), " — the clamp may be over-tightened or the hose already failing"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Staining or dried residue"
        }), " — coolant leaves a white or green chalky residue at the site of a small leak"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Replace any hose that shows cracking or softness. Use only OEM or high-quality silicone replacement hoses suitable for 50:50 antifreeze mixtures."
    }), "\n", createVNode(_components.h2, {
      id: "step-3--full-coolant-flush-and-refill",
      children: "Step 3 — Full Coolant Flush and Refill"
    }), "\n", createVNode(_components.p, {
      children: "This procedure applies to the Vespa GTS 300, Primavera 125/150, Sprint 125/150, and Piaggio Zip 100 4T. Steps for other models are similar; consult your owner’s manual for panel removal specifics."
    }), "\n", createVNode(_components.h3, {
      id: "step-31--prepare-the-scooter",
      children: "Step 3.1 — Prepare the Scooter"
    }), "\n", createVNode(_components.p, {
      children: "Place the scooter on the centre stand on a level surface. Allow the engine to cool completely — at least 30 minutes after the last ride."
    }), "\n", createVNode(_components.h3, {
      id: "step-32--access-the-radiator-cap",
      children: "Step 3.2 — Access the Radiator Cap"
    }), "\n", createVNode(_components.p, {
      children: "On the Vespa GTS 300, remove the small plastic cover on the radiator cap using a T25 Torx screw. On Primavera and Sprint, open the front storage compartment — the expansion tank cap is accessible directly."
    }), "\n", createVNode(_components.h3, {
      id: "step-33--drain-the-old-coolant",
      children: "Step 3.3 — Drain the Old Coolant"
    }), "\n", createVNode(_components.p, {
      children: "Locate the water pump casing on the right side of the engine (left side from the rider’s perspective, near the exhaust). Unscrew the two or three Phillips screws securing the pump casing drain plug/cover. Position your drain container below the pump and allow the fluid to drain fully — this typically takes 5–10 minutes."
    }), "\n", createVNode(_components.p, {
      children: "Once drained, retighten the pump casing screws. Torque to approximately 4–5 N·m (do not over-tighten plastic or aluminium pump casings)."
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: "Coolant is toxic to animals and has a sweet smell that can attract pets. Dispose of old coolant at a recycling centre or automotive waste collection point — never pour it down a drain."
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-34--refill-with-fresh-coolant",
      children: "Step 3.4 — Refill with Fresh Coolant"
    }), "\n", createVNode(_components.p, {
      children: "Using a funnel, pour the fresh 50:50 coolant mixture into the radiator/expansion tank slowly. Fill until the fluid reaches the MAX mark. Do not cap it yet — you need to bleed the system in the next step."
    }), "\n", createVNode(_components.h3, {
      id: "step-35--bleed-the-air-from-the-system",
      children: "Step 3.5 — Bleed the Air from the System"
    }), "\n", createVNode(_components.p, {
      children: "Air pockets trapped in the cooling system cause localised overheating and prevent accurate temperature readings. To bleed the system:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Locate the bleed valve on the thermostat housing (on the GTS 300, this is near the top of the radiator on the left side)."
      }), "\n", createVNode(_components.li, {
        children: "Connect a 30 cm length of clear hose to the bleed nipple and place the other end into the expansion tank opening."
      }), "\n", createVNode(_components.li, {
        children: "Start the engine and let it idle. Watch the clear hose — bubbles will rise into the expansion tank as air purges."
      }), "\n", createVNode(_components.li, {
        children: "Continue idling until no more bubbles appear — typically 3–5 minutes."
      }), "\n", createVNode(_components.li, {
        children: "Top up the expansion tank to MAX if the level has dropped during bleeding."
      }), "\n", createVNode(_components.li, {
        children: "Stop the engine, cap the expansion tank firmly, and replace any covers."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "step-4--post-service-check",
      children: "Step 4 — Post-Service Check"
    }), "\n", createVNode(_components.p, {
      children: "Start the engine and allow it to reach operating temperature (the fan should cycle at least once on liquid-cooled models). Watch the temperature gauge — it should stabilise in the normal range. Check around the water pump area for drips or weeping coolant. Recheck the expansion tank level once the engine is cold again."
    }), "\n", createVNode(_components.h2, {
      id: "coolant-specification-summary",
      children: "Coolant Specification Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Parameter"
          }), createVNode(_components.th, {
            children: "Specification"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Type"
          }), createVNode(_components.td, {
            children: "OAT (Organic Acid Technology) antifreeze"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Mix ratio"
          }), createVNode(_components.td, {
            children: "50% antifreeze / 50% distilled water"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "System capacity (GTS 300)"
          }), createVNode(_components.td, {
            children: "~1.0 litre"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "System capacity (Primavera/Sprint)"
          }), createVNode(_components.td, {
            children: "~0.7 litre"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Freeze protection"
          }), createVNode(_components.td, {
            children: "−35 °C at 50:50 ratio"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Replacement interval"
          }), createVNode(_components.td, {
            children: "Every 2 years or 10,000 km"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Water pump screw torque"
          }), createVNode(_components.td, {
            children: "4–5 N·m"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Thermostat cover torque"
          }), createVNode(_components.td, {
            children: "3–4 N·m"
          })]
        })]
      })]
    }), "\n", frontmatter.videos.length > 0 && createVNode($$VideoEmbed, {
      videoId: frontmatter.videos[0].id,
      title: frontmatter.videos[0].title,
      creator: frontmatter.videos[0].creator
    }), "\n", createVNode(_components.h2, {
      id: "common-coolant-system-issues",
      children: "Common Coolant System Issues"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Overheating despite correct coolant level"
      }), " — usually indicates a failing water pump impeller, blocked radiator fins (inspect and clean with compressed air), or a faulty thermostat stuck in the closed position."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Coolant in the oil (milky oil)"
      }), " — indicates a blown head gasket or cracked cylinder head. This requires engine disassembly and professional repair. Stop riding immediately if milky oil is detected."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Low coolant with no visible external leak"
      }), " — the system may be consuming coolant internally through the combustion chamber. A cylinder compression test and combustion gas analysis can confirm this."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Fan running constantly"
      }), " — normal on hot days at low speed or in traffic, but if the fan runs even when ambient temperatures are cool, suspect a faulty coolant temperature sensor or thermostat."]
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

const url = "src/content/repair-guides/vespa-piaggio-coolant-system-maintenance.mdx";
const file = "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/vespa-piaggio-coolant-system-maintenance.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/vespa-piaggio-coolant-system-maintenance.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
