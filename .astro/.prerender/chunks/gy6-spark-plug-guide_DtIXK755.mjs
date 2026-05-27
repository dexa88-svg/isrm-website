import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_C3Md0h36.mjs';
import { $ as $$VideoEmbed } from './VideoEmbed_BrYUpKbm.mjs';
import { $ as $$Callout } from './Callout_D3IY9IaT.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 Spark Plug Replacement Guide",
  "description": "GY6 spark plug replacement guide. Correct plug specs (NGK C7HSA / CR7HSA), gap settings, and torque values for 50cc, 125cc, and 150cc GY6 scooter engines.",
  "publishDate": "2026-04-01T00:00:00.000Z",
  "updatedDate": "2026-05-07T00:00:00.000Z",
  "difficulty": "Beginner",
  "timeEstimate": "~20 min",
  "tags": ["maintenance", "GY6", "spark-plug", "ignition"],
  "appliesTo": ["GY6 50cc (139QMB)", "GY6 125cc (152QMI)", "GY6 150cc (157QMJ)", "BTC Riva", "La Souris Sourini/City", "Santini Capri"],
  "videos": [{
    "id": "oHWW1GAanqo",
    "title": "Replacing Spark Plug on Chinese Scooter GY6",
    "creator": "YouTube",
    "position": "hero"
  }],
  "tools": ["16 mm spark plug socket", "Socket wrench with extension", "Feeler gauge", "NGK C7HSA or CR7HSA spark plug", "Compressed air or clean rag"],
  "sources": [{
    "name": "NGK Spark Plug Application Guide",
    "url": "https://www.ngk.com/"
  }],
  "canonical": "https://ismr.online/repair-guides/gy6-spark-plug-guide.html",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "spark-plug-specifications",
    "text": "Spark Plug Specifications"
  }, {
    "depth": 2,
    "slug": "tools--materials-required",
    "text": "Tools & Materials Required"
  }, {
    "depth": 2,
    "slug": "reading-the-old-plug--what-it-tells-you",
    "text": "Reading the Old Plug — What It Tells You"
  }, {
    "depth": 2,
    "slug": "step-by-step-replacement-procedure",
    "text": "Step-by-Step Replacement Procedure"
  }, {
    "depth": 2,
    "slug": "spark-plug-service-intervals",
    "text": "Spark Plug Service Intervals"
  }, {
    "depth": 2,
    "slug": "applicable-models",
    "text": "Applicable Models"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
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
    children: [createVNode(_components.p, {
      children: "The spark plug is one of the cheapest and most impactful maintenance items on any petrol scooter. A worn or incorrectly gapped plug causes hard starting, rough idle, misfires, and increased fuel consumption. Replacing it takes 10–15 minutes and costs less than €5 for a standard NGK."
    }), "\n", createVNode(_components.h2, {
      id: "spark-plug-specifications",
      children: "Spark Plug Specifications"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Engine"
          }), createVNode(_components.th, {
            children: "Standard Plug"
          }), createVNode(_components.th, {
            children: "Upgrade (Iridium)"
          }), createVNode(_components.th, {
            children: "Gap"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "GY6 50cc (139QMB)"
          }), createVNode(_components.td, {
            children: "NGK C7HSA"
          }), createVNode(_components.td, {
            children: "NGK CR7HIX"
          }), createVNode(_components.td, {
            children: "0.6–0.7 mm"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "GY6 125/150cc (157QMJ)"
          }), createVNode(_components.td, {
            children: "NGK CR7HSA"
          }), createVNode(_components.td, {
            children: "NGK CR7HIX"
          }), createVNode(_components.td, {
            children: "0.6–0.7 mm"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Vespa Primavera 125 iGet"
          }), createVNode(_components.td, {
            children: "NGK ILZKBR7B8DG (OEM)"
          }), createVNode(_components.td, {
            children: "—"
          }), createVNode(_components.td, {
            children: "0.7–0.8 mm"
          })]
        })]
      })]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode("strong", {
          children: "Tip:"
        }), " Keep a spare NGK CR7HSA under your seat. It weighs nothing, costs under €4, and can save a long walk home if the plug fails on the road."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "tools--materials-required",
      children: "Tools & Materials Required"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Spark plug socket — ", createVNode(_components.strong, {
          children: "16 mm"
        }), " for most GY6 engines (check your cap diameter first)"]
      }), "\n", createVNode(_components.li, {
        children: "Socket wrench extension (the plug is often deep in the head)"
      }), "\n", createVNode(_components.li, {
        children: "Feeler gauge (to verify the gap on the new plug)"
      }), "\n", createVNode(_components.li, {
        children: "Torque wrench (optional but recommended — 10–14 Nm)"
      }), "\n", createVNode(_components.li, {
        children: "Compressed air or a rag to clean the plug recess"
      }), "\n", createVNode(_components.li, {
        children: "New spark plug (see specifications above)"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "reading-the-old-plug--what-it-tells-you",
      children: "Reading the Old Plug — What It Tells You"
    }), "\n", createVNode(_components.p, {
      children: "Before discarding the old plug, inspect the electrode. The color and condition reveal a lot about engine health:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Electrode appearance"
          }), createVNode(_components.th, {
            children: "Diagnosis"
          }), createVNode(_components.th, {
            children: "Action"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Light tan/grey, slight electrode wear"
          }), createVNode(_components.td, {
            children: "✅ Normal — engine running correctly"
          }), createVNode(_components.td, {
            children: "Replace at service interval"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Dry black, sooty carbon deposits"
          }), createVNode(_components.td, {
            children: "Rich mixture or clogged air filter"
          }), createVNode(_components.td, {
            children: "Check/clean air filter; check carb jetting"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Wet/oily, black"
          }), createVNode(_components.td, {
            children: "Oil in combustion — worn piston rings or valve seals"
          }), createVNode(_components.td, {
            children: "Engine inspection needed"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "White or pale grey, blistered"
          }), createVNode(_components.td, {
            children: "Lean mixture or overheating"
          }), createVNode(_components.td, {
            children: "Check fuel delivery, coolant/air flow"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Rounded/eroded electrode"
          }), createVNode(_components.td, {
            children: "Normal wear — replace now"
          }), createVNode(_components.td, {
            children: "Standard replacement"
          })]
        })]
      })]
    }), "\n", createVNode($$VideoEmbed, {
      videoId: "oHWW1GAanqo",
      title: "Replacing Spark Plug on Chinese Scooter GY6",
      creator: "YouTube"
    }), "\n", createVNode(_components.h2, {
      id: "step-by-step-replacement-procedure",
      children: "Step-by-Step Replacement Procedure"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Let the engine cool for at least 10 minutes."
        }), " Working on a hot engine risks burns and can cause the plug to seize in the aluminium head if torqued incorrectly when hot."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Remove the spark plug cap"
        }), " by pulling it straight off the plug. Pull the cap, not the wire — pulling the wire can damage the HT lead connection inside the cap."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Clean around the plug recess"
        }), " with compressed air or a dry rag. Any debris that falls into the cylinder when the plug is removed can score the bore."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Unscrew the old plug"
        }), " counter-clockwise using the spark plug socket. If it is tight, apply penetrating oil (WD-40 or equivalent) around the base and wait 5 minutes before trying again. Do not force it."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Inspect and note the condition"
        }), " of the old plug electrode as described in the reading guide above."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Check the gap on the new plug"
        }), " with a feeler gauge. For GY6 engines, the gap should be ", createVNode(_components.strong, {
          children: "0.6–0.7 mm"
        }), ". Most NGK plugs are pre-gapped but verify. To adjust, carefully bend only the side (ground) electrode — never the centre electrode."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Thread the new plug in by hand"
        }), " for the first 3–4 turns. Cross-threading an aluminium cylinder head is an expensive mistake. If it does not thread smoothly by hand, stop and recheck alignment."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Tighten with the socket."
        }), " With a new plug and a copper washer seat: hand-tight + ", createVNode(_components.strong, {
          children: "¼ turn"
        }), ". With a torque wrench: ", createVNode(_components.strong, {
          children: "10–14 Nm"
        }), ". Do not overtighten — aluminium threads strip easily."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Reconnect the spark plug cap"
        }), " firmly until it seats fully. A loose cap is a common cause of intermittent misfires."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Start the engine"
        }), " and confirm it runs cleanly at idle and through the rev range."]
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode("strong", {
          children: "Note on anti-seize compound:"
        }), " Do not apply anti-seize paste to spark plug threads in aluminium heads. The torque specification is designed for bare threads. Anti-seize changes the effective clamping force and can cause under- or over-tightening."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "spark-plug-service-intervals",
      children: "Spark Plug Service Intervals"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Plug type"
          }), createVNode(_components.th, {
            children: "Inspection"
          }), createVNode(_components.th, {
            children: "Replacement"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Standard copper (NGK C7HSA / CR7HSA)"
          }), createVNode(_components.td, {
            children: "Every 3,000 km"
          }), createVNode(_components.td, {
            children: "Every 3,000–5,000 km"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Iridium (NGK CR7HIX)"
          }), createVNode(_components.td, {
            children: "Every 5,000 km"
          }), createVNode(_components.td, {
            children: "Every 10,000–15,000 km"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Vespa OEM iridium"
          }), createVNode(_components.td, {
            children: "Per Piaggio service schedule"
          }), createVNode(_components.td, {
            children: "Every 8,000–10,000 km"
          })]
        })]
      })]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode("strong", {
          children: "Upgrade tip:"
        }), " The NGK CR7HIX iridium plug is a genuine upgrade for GY6 engines. It produces a stronger, more consistent spark which improves cold starting and smooth idle. At roughly €8–12 it costs more than the standard plug but lasts 3× longer."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "applicable-models",
      children: "Applicable Models"
    }), "\n", createVNode(_components.p, {
      children: ["This procedure applies to all GY6-engined scooters including the ", createVNode(_components.strong, {
        children: "BTC Riva"
      }), ", ", createVNode(_components.strong, {
        children: "La Souris Sourini / City"
      }), ", ", createVNode(_components.strong, {
        children: "Santini Capri"
      }), ", and all other ", createVNode(_components.code, {
        children: "139QMB"
      }), " / ", createVNode(_components.code, {
        children: "157QMJ"
      }), " engine family scooters. For Vespa Primavera and Sprint models, the plug location and cap type differ but the procedure is identical — consult your model’s service manual for the exact plug recess location."]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: [createVNode(_components.p, {
        children: [createVNode("strong", {
          children: "Piaggio ZIP 50/100 4T spark plug specs"
        }), " — from the official Piaggio MSS ZIP 100 4T Service Station Manual:"]
      }), createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "100 cc:"
        }), " Champion RG4HC / Champion RG4PHP / NGK CR9EB  |  Gap: ", createVNode(_components.strong, {
          children: "0.7–0.8 mm"
        }), "  |  Torque: ", createVNode(_components.strong, {
          children: "10–15 Nm"
        })]
      }), createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "50 cc:"
        }), " NGK CR8EB / Denso U24ESR-NB3  |  Gap: ", createVNode(_components.strong, {
          children: "0.7–0.8 mm"
        }), "  |  Torque: ", createVNode(_components.strong, {
          children: "10–15 Nm"
        })]
      }), createVNode(_components.p, {
        children: "The ZIP uses a hotter plug (CR9EB vs CR7HSA on GY6) due to its SOHC combustion chamber design and compression ratio (10.5–11.5:1)."
      })]
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

const url = "src/content/repair-guides/gy6-spark-plug-guide.mdx";
const file = "/sessions/sharp-gifted-meitner/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-spark-plug-guide.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/sharp-gifted-meitner/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-spark-plug-guide.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
