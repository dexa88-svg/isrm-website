import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_DdzkH7gs.mjs';
import { $ as $$Callout } from './Callout_CxV-zfuj.mjs';
import { $ as $$VideoEmbed } from './VideoEmbed_CgkNQ7QK.mjs';
import { $ as $$SourceBox } from './SourceBox_vUGqdss1.mjs';
import 'clsx';

const frontmatter = {
  "title": "Vespa Primavera & Sprint Spark Plug Guide",
  "description": "Step-by-step spark plug replacement for Vespa Primavera and Sprint 50/125/150cc. NGK part numbers, gap specs, torque, and service interval for 2V and 3V heads.",
  "publishDate": "2026-05-30T00:00:00.000Z",
  "updatedDate": "2026-05-30T00:00:00.000Z",
  "difficulty": "Beginner",
  "timeEstimate": "20 min",
  "tags": ["Vespa", "Primavera", "Sprint", "Spark Plug", "Maintenance"],
  "appliesTo": ["Vespa Primavera 50 4T 4V", "Vespa Primavera 125 3V", "Vespa Primavera 150 3V", "Vespa Sprint 125 3V", "Vespa Sprint 150 3V"],
  "videos": [],
  "tools": ["Spark plug socket (16 mm or 18 mm depending on engine)", "Torque wrench", "Ratchet with extension", "Feeler gauge or spark plug gap tool", "Dielectric grease"],
  "sources": [{
    "name": "ScooterWest — Modern Vespa Spark Plugs",
    "url": "https://www.scooterwest.com/modern-vespa/maintenance-tune-up/spark-plugs.html"
  }, {
    "name": "Vespa Club of Chicago — Scooter Spark Plug Reference",
    "url": "https://vcoachicago.com/scooter-spark-plug-reference/"
  }],
  "canonical": "https://ismr.online/repair-guides/vespa-primavera-sprint-spark-plug-guide.html",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "choosing-the-correct-plug",
    "text": "Choosing the Correct Plug"
  }, {
    "depth": 2,
    "slug": "tools--parts-needed",
    "text": "Tools & Parts Needed"
  }, {
    "depth": 2,
    "slug": "step-by-step-procedure",
    "text": "Step-by-Step Procedure"
  }, {
    "depth": 3,
    "slug": "step-1--access-the-plug-well",
    "text": "Step 1 — Access the plug well"
  }, {
    "depth": 3,
    "slug": "step-2--remove-the-plug-cap",
    "text": "Step 2 — Remove the plug cap"
  }, {
    "depth": 3,
    "slug": "step-3--clean-the-plug-well",
    "text": "Step 3 — Clean the plug well"
  }, {
    "depth": 3,
    "slug": "step-4--remove-the-old-plug",
    "text": "Step 4 — Remove the old plug"
  }, {
    "depth": 3,
    "slug": "step-5--inspect-the-old-plug",
    "text": "Step 5 — Inspect the old plug"
  }, {
    "depth": 3,
    "slug": "step-6--check-the-gap-on-the-new-plug",
    "text": "Step 6 — Check the gap on the new plug"
  }, {
    "depth": 3,
    "slug": "step-7--install-the-new-plug",
    "text": "Step 7 — Install the new plug"
  }, {
    "depth": 3,
    "slug": "step-8--refit-the-plug-cap",
    "text": "Step 8 — Refit the plug cap"
  }, {
    "depth": 3,
    "slug": "step-9--test",
    "text": "Step 9 — Test"
  }, {
    "depth": 2,
    "slug": "specifications",
    "text": "Specifications"
  }, {
    "depth": 2,
    "slug": "common-mistakes-to-avoid",
    "text": "Common Mistakes to Avoid"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
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
      children: "The spark plug is one of the cheapest, easiest maintenance items on any scooter and has a direct impact on cold-start reliability, fuel consumption, and throttle response. On the Vespa Primavera and Sprint (2013–present), the plug is accessible in about five minutes once you know where to look. This guide covers the carburetor and fuel-injected variants of both the 50cc 4V and the 125/150cc 3V engines."
    }), "\n", createVNode(_components.p, {
      children: "Service intervals from the Piaggio workshop manuals:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Standard NGK plug:"
        }), " every 6,000 km or annually"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Iridium NGK plug:"
        }), " every 12,000 km"]
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: "Always let the engine cool completely before removing the spark plug. A hot aluminium cylinder head will strip threads far more easily than a cold one."
      })
    }), "\n", createVNode(_components.h2, {
      id: "choosing-the-correct-plug",
      children: "Choosing the Correct Plug"
    }), "\n", createVNode(_components.p, {
      children: "The Primavera and Sprint family uses two different engine families. Make sure you match the plug to your specific engine before purchasing."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Engine"
          }), createVNode(_components.th, {
            children: "Piaggio Part Number"
          }), createVNode(_components.th, {
            children: "NGK Standard"
          }), createVNode(_components.th, {
            children: "NGK Iridium"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "50cc 4T 4V (Primavera 50, Sprint 50)"
          }), createVNode(_components.td, {
            children: "641387"
          }), createVNode(_components.td, {
            children: "ER9EH"
          }), createVNode(_components.td, {
            children: "—"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "125cc / 150cc 3V (Primavera / Sprint 2013+)"
          }), createVNode(_components.td, {
            children: "638853"
          }), createVNode(_components.td, {
            children: "CR8EB"
          }), createVNode(_components.td, {
            children: "CR8EIB"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Electrode gap:"
      }), " Both engines use a pre-gapped plug from NGK and normally do not require adjustment. If you are re-gapping, the target is ", createVNode(_components.strong, {
        children: "0.6–0.7 mm"
      }), " for the 3V engines and ", createVNode(_components.strong, {
        children: "0.5 mm"
      }), " for the 4V 50cc engine."]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: "Iridium plugs (CR8EIB) have a finer electrode and last roughly twice as long as the standard CR8EB. The small extra cost is usually worthwhile at annual service time."
      })
    }), "\n", createVNode(_components.h2, {
      id: "tools--parts-needed",
      children: "Tools & Parts Needed"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "NGK CR8EB (125/150cc 3V) or NGK ER9EH (50cc 4V)"
      }), "\n", createVNode(_components.li, {
        children: "16 mm spark plug socket with rubber insert (protects the ceramic insulator)"
      }), "\n", createVNode(_components.li, {
        children: "Short extension bar (100–150 mm)"
      }), "\n", createVNode(_components.li, {
        children: "3/8” ratchet"
      }), "\n", createVNode(_components.li, {
        children: "Torque wrench (5–20 N·m range)"
      }), "\n", createVNode(_components.li, {
        children: "Feeler gauge (optional, for gap check)"
      }), "\n", createVNode(_components.li, {
        children: "Small amount of dielectric grease"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "step-by-step-procedure",
      children: "Step-by-Step Procedure"
    }), "\n", createVNode(_components.h3, {
      id: "step-1--access-the-plug-well",
      children: "Step 1 — Access the plug well"
    }), "\n", createVNode(_components.p, {
      children: "On the Primavera and Sprint, the engine is under the seat. Lift the seat, locate the engine on the right side of the chassis, and find the spark plug cap — a black rubber boot on the top of the cylinder head. On some variants a plastic engine cover must be unclipped first (usually two or three plastic press-studs)."
    }), "\n", createVNode(_components.h3, {
      id: "step-2--remove-the-plug-cap",
      children: "Step 2 — Remove the plug cap"
    }), "\n", createVNode(_components.p, {
      children: "Grip the rubber cap firmly and pull it straight off the plug terminal. Do not pull on the wire itself. Inspect the inside of the cap for cracks or carbon deposits — a damaged cap can cause intermittent misfires and should be replaced."
    }), "\n", createVNode(_components.h3, {
      id: "step-3--clean-the-plug-well",
      children: "Step 3 — Clean the plug well"
    }), "\n", createVNode(_components.p, {
      children: "Use a dry cloth or a burst of compressed air to clear any dirt from the recess around the plug. On the 3V engines the plug sits in a deep well in the aluminium head — any grit falling in when the plug is out can damage the cylinder."
    }), "\n", createVNode(_components.h3, {
      id: "step-4--remove-the-old-plug",
      children: "Step 4 — Remove the old plug"
    }), "\n", createVNode(_components.p, {
      children: "Insert the 16 mm plug socket with extension and ratchet. Turn anti-clockwise. The plug should unscrew smoothly; if it is very stiff, re-seat it and wait longer for the engine to cool. Once loose, lift it out carefully to avoid dropping debris into the cylinder."
    }), "\n", createVNode(_components.h3, {
      id: "step-5--inspect-the-old-plug",
      children: "Step 5 — Inspect the old plug"
    }), "\n", createVNode(_components.p, {
      children: "The electrode and insulator colour tell you how the engine is running:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Appearance"
          }), createVNode(_components.th, {
            children: "What it means"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Light tan / grey"
          }), createVNode(_components.td, {
            children: "Correct mixture — engine healthy"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Black, sooty deposits"
          }), createVNode(_components.td, {
            children: "Rich mixture or oil consumption"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "White / blistered"
          }), createVNode(_components.td, {
            children: "Lean mixture or overheating"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Worn, rounded electrode"
          }), createVNode(_components.td, {
            children: "Plug past service life"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "A plug that looks black and sooty may indicate a clogged air filter or carburetor enrichment circuit; white or blistered indicates a lean condition worth investigating before fitting a new plug."
    }), "\n", createVNode(_components.h3, {
      id: "step-6--check-the-gap-on-the-new-plug",
      children: "Step 6 — Check the gap on the new plug"
    }), "\n", createVNode(_components.p, {
      children: "NGK plugs are factory-gapped but a quick check with a feeler gauge confirms nothing shifted in transit. Slide the appropriate gauge blade between the centre and ground electrodes — it should pass with light resistance. On iridium plugs, use only a wire-type feeler gauge, never a flat one, which can chip the fine iridium tip."
    }), "\n", createVNode(_components.h3, {
      id: "step-7--install-the-new-plug",
      children: "Step 7 — Install the new plug"
    }), "\n", createVNode(_components.p, {
      children: "Thread the plug in by hand first to avoid cross-threading. Once it seats on the gasket, tighten with the socket wrench to the torque specification below. On the 3V engine with the deep plug well, it is easy to lose feel — a torque wrench is strongly recommended."
    }), "\n", createVNode(_components.h3, {
      id: "step-8--refit-the-plug-cap",
      children: "Step 8 — Refit the plug cap"
    }), "\n", createVNode(_components.p, {
      children: "Push the rubber cap firmly onto the terminal until it clicks or seats fully. A loose cap will cause misfiring or no-start."
    }), "\n", createVNode(_components.h3, {
      id: "step-9--test",
      children: "Step 9 — Test"
    }), "\n", createVNode(_components.p, {
      children: "Start the engine and let it idle for two minutes. It should fire cleanly with no hesitation. If the engine misfires or runs rough, check that the cap is fully seated before investigating further."
    }), "\n", createVNode(_components.h2, {
      id: "specifications",
      children: "Specifications"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Parameter"
          }), createVNode(_components.th, {
            children: "50cc 4V engine"
          }), createVNode(_components.th, {
            children: "125/150cc 3V engine"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "NGK plug (standard)"
          }), createVNode(_components.td, {
            children: "ER9EH"
          }), createVNode(_components.td, {
            children: "CR8EB"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "NGK plug (iridium)"
          }), createVNode(_components.td, {
            children: "—"
          }), createVNode(_components.td, {
            children: "CR8EIB"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Electrode gap"
          }), createVNode(_components.td, {
            children: "0.5 mm"
          }), createVNode(_components.td, {
            children: "0.6–0.7 mm"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Plug socket size"
          }), createVNode(_components.td, {
            children: "16 mm"
          }), createVNode(_components.td, {
            children: "16 mm"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Torque (cold engine)"
          }), createVNode(_components.td, {
            children: "12 N·m"
          }), createVNode(_components.td, {
            children: "12 N·m"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Service interval (standard)"
          }), createVNode(_components.td, {
            children: "6,000 km"
          }), createVNode(_components.td, {
            children: "6,000 km"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Service interval (iridium)"
          }), createVNode(_components.td, {
            children: "—"
          }), createVNode(_components.td, {
            children: "12,000 km"
          })]
        })]
      })]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: "Apply a very light film of dielectric grease to the inside of the plug cap before refitting. This prevents the rubber from bonding to the terminal over time and makes future plug changes easier."
      })
    }), "\n", createVNode(_components.h2, {
      id: "common-mistakes-to-avoid",
      children: "Common Mistakes to Avoid"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Over-tightening:"
      }), " The aluminium cylinder head strips easily. Tighten to 12 N·m — that is roughly the force of pulling firmly on a short ratchet, not leaning on a breaker bar."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Fitting the wrong heat range:"
      }), " Always use the NGK part number specified for your engine. A plug that is too cold will foul quickly; one that is too hot risks pre-ignition."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Ignoring the plug cap:"
      }), " The plug cap (Piaggio p/n 642200 for the 3V) ages and cracks. If you are experiencing intermittent misfires and the plug itself looks fine, the cap is the next suspect."]
    }), "\n", frontmatter.videos.length > 0 && createVNode($$VideoEmbed, {
      videoId: frontmatter.videos[0].id,
      title: frontmatter.videos[0].title,
      creator: frontmatter.videos[0].creator
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

const url = "src/content/repair-guides/vespa-primavera-sprint-spark-plug-guide.mdx";
const file = "/sessions/great-confident-cray/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/vespa-primavera-sprint-spark-plug-guide.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/great-confident-cray/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/vespa-primavera-sprint-spark-plug-guide.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
