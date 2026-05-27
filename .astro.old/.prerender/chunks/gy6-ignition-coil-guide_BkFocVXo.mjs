import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_DndgnZDT.mjs';
import { $ as $$VideoEmbed } from './VideoEmbed_CaqH1-rp.mjs';
import { $ as $$Callout } from './Callout_D9S1x2uL.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 Ignition Coil (Bobine) Diagnosis & Replacement",
  "description": "GY6 ignition coil testing and replacement guide. Ohm specs for primary and secondary coil, CDI wiring, and spark test procedure for 50cc–150cc GY6 engines.",
  "publishDate": "2026-05-07",
  "updatedDate": "2026-05-07",
  "difficulty": "Beginner",
  "timeEstimate": "~30 min",
  "tags": ["repair-guides", "GY6", "electrical", "ignition", "no-spark"],
  "appliesTo": [],
  "videos": [{
    "id": "kZY1XVcIzhA",
    "title": "GY6 No Spark Diagnosis — CDI, Ignition Coil and Stator",
    "creator": "YouTube",
    "position": "hero"
  }],
  "sources": [],
  "canonical": "https://ismr.online/repair-guides/gy6-ignition-coil-guide.html",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-the-gy6-ignition-system-works",
    "text": "How the GY6 Ignition System Works"
  }, {
    "depth": 2,
    "slug": "symptoms-of-a-faulty-ignition-coil",
    "text": "Symptoms of a Faulty Ignition Coil"
  }, {
    "depth": 2,
    "slug": "diagnostic-procedure--step-by-step",
    "text": "Diagnostic Procedure — Step by Step"
  }, {
    "depth": 3,
    "slug": "step-1--confirm-no-spark",
    "text": "Step 1 — Confirm No Spark"
  }, {
    "depth": 3,
    "slug": "step-2--eliminate-the-spark-plug",
    "text": "Step 2 — Eliminate the Spark Plug"
  }, {
    "depth": 3,
    "slug": "step-3--check-the-kill-switch",
    "text": "Step 3 — Check the Kill Switch"
  }, {
    "depth": 3,
    "slug": "step-4--check-earth-connections",
    "text": "Step 4 — Check Earth Connections"
  }, {
    "depth": 3,
    "slug": "step-5--test-the-coil-with-a-multimeter",
    "text": "Step 5 — Test the Coil with a Multimeter"
  }, {
    "depth": 3,
    "slug": "step-6--swap-the-cdi",
    "text": "Step 6 — Swap the CDI"
  }, {
    "depth": 2,
    "slug": "ignition-coil-replacement-procedure",
    "text": "Ignition Coil Replacement Procedure"
  }, {
    "depth": 2,
    "slug": "applicable-models",
    "text": "Applicable Models"
  }, {
    "depth": 2,
    "slug": "related-videos",
    "text": "Related Videos"
  }, {
    "depth": 4,
    "slug": "how-to-replace-a-scooter-ignition-coil",
    "text": "How to Replace a Scooter Ignition Coil"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
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
      children: ["The ignition coil (French: ", createVNode(_components.em, {
        children: "bobine d’allumage"
      }), ") transforms the low-voltage pulse from the CDI unit into the 15,000–20,000 V needed to fire the spark plug. A failed coil results in no spark and a no-start condition. However, the coil is only one of four components that must all work together — always diagnose systematically before replacing parts."]
    }), "\n", createVNode(_components.h2, {
      id: "how-the-gy6-ignition-system-works",
      children: "How the GY6 Ignition System Works"
    }), "\n", createVNode(_components.p, {
      children: ["The GY6 uses a ", createVNode(_components.strong, {
        children: "CDI (Capacitor Discharge Ignition)"
      }), " system with four main components in the spark circuit:"]
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Component"
          }), createVNode("th", {
            children: "Function"
          }), createVNode("th", {
            children: "Failure symptom"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Stator / Pickup coil"
          }), createVNode("td", {
            children: "Generates trigger signal as flywheel rotates"
          }), createVNode("td", {
            children: "No spark, weak spark"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "CDI unit"
          }), createVNode("td", {
            children: "Stores charge, fires on trigger signal"
          }), createVNode("td", {
            children: "No spark — most common failure"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Ignition coil (bobine)"
          }), createVNode("td", {
            children: "Steps CDI pulse up to ~20,000 V"
          }), createVNode("td", {
            children: "No spark, cuts out when hot"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Spark plug + cap"
          }), createVNode("td", {
            children: "Produces arc in combustion chamber"
          }), createVNode("td", {
            children: "No spark, misfires"
          })]
        })]
      })
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["� ", createVNode(_components.strong, {
          children: "On GY6 clones, the CDI unit fails far more often than the ignition coil."
        }), " Always swap or test the CDI before buying a new coil. A replacement CDI costs €5–15; a coil costs €8–20."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "symptoms-of-a-faulty-ignition-coil",
      children: "Symptoms of a Faulty Ignition Coil"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Engine cranks but will not start"
        }), " — no spark at the plug"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Starts cold, cuts out when warm"
        }), " — classic thermal failure (coil breaks down under heat)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Intermittent misfires"
        }), " or sudden stalling while riding"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Visible physical damage"
        }), " — cracked coil body, scorched or melted insulation, corroded HT lead connector"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Weak orange spark"
        }), " instead of a sharp blue-white arc"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "🎬 Video Guide — GY6 No Spark Diagnosis (CDI, Coil & Stator)"
    }), "\n", createVNode($$VideoEmbed, {
      videoId: "kZY1XVcIzhA",
      title: "GY6 No Spark Diagnosis — CDI, Ignition Coil and Stator",
      creator: "YouTube"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Video:"
      }), " “GY6 No Spark Diagnosis — CDI, Ignition Coil and Stator” | YouTube   ", createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=kZY1XVcIzhA",
        children: "↗ Watch on YouTube"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "diagnostic-procedure--step-by-step",
      children: "Diagnostic Procedure — Step by Step"
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: "️ High-voltage ignition circuits can deliver a painful shock. Do not hold bare HT wires while cranking. Keep fingers away from the spark plug cap end of the HT lead during testing."
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-1--confirm-no-spark",
      children: "Step 1 — Confirm No Spark"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Remove the spark plug from the engine."
      }), "\n", createVNode(_components.li, {
        children: "Reconnect the plug to the HT cap (spark plug cap)."
      }), "\n", createVNode(_components.li, {
        children: "Lay the threaded body of the plug against bare engine metal (earth/ground)."
      }), "\n", createVNode(_components.li, {
        children: "Crank the engine with the kickstart or electric start."
      }), "\n", createVNode(_components.li, {
        children: ["Observe: ", createVNode(_components.strong, {
          children: "bright blue arc = healthy spark"
        }), ". Weak orange glow or nothing = ignition fault."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-2--eliminate-the-spark-plug",
      children: "Step 2 — Eliminate the Spark Plug"
    }), "\n", createVNode(_components.p, {
      children: "Substitute a known-good spark plug and repeat the spark test. A fouled or dead plug can mimic a coil failure."
    }), "\n", createVNode(_components.h3, {
      id: "step-3--check-the-kill-switch",
      children: "Step 3 — Check the Kill Switch"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Locate the black wire running from the kill switch to the CDI/coil."
      }), "\n", createVNode(_components.li, {
        children: "Disconnect this wire completely."
      }), "\n", createVNode(_components.li, {
        children: "Try to start. If spark is now present, the kill switch is faulty — it is permanently earthing the circuit."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-4--check-earth-connections",
      children: "Step 4 — Check Earth Connections"
    }), "\n", createVNode(_components.p, {
      children: "A loose or corroded earth (ground) connection is an extremely common cause of no-spark on GY6 clones. Check:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Ignition coil mounting bolts — they must contact bare metal, not paint."
      }), "\n", createVNode(_components.li, {
        children: "Battery negative terminal and its connection to the frame."
      }), "\n", createVNode(_components.li, {
        children: "Engine earth strap from engine to frame."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-5--test-the-coil-with-a-multimeter",
      children: "Step 5 — Test the Coil with a Multimeter"
    }), "\n", createVNode(_components.p, {
      children: "Set your multimeter to resistance (Ω) mode:"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Test point"
          }), createVNode("th", {
            children: "Healthy reading"
          }), createVNode("th", {
            children: "Failed coil"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Primary winding (between the two low-voltage terminals)"
          }), createVNode("td", {
            children: "0.3 – 0.5 Ω"
          }), createVNode("td", {
            children: "Open (∞) or short (0 Ω)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Secondary winding (HT lead to earth terminal)"
          }), createVNode("td", {
            children: "3,000 – 7,000 Ω"
          }), createVNode("td", {
            children: "Open (∞) or far outside range"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "If either reading is outside the normal range, the coil is defective and should be replaced."
    }), "\n", createVNode(_components.h3, {
      id: "step-6--swap-the-cdi",
      children: "Step 6 — Swap the CDI"
    }), "\n", createVNode(_components.p, {
      children: "If the coil tests OK, the CDI is the next most likely culprit. Swap it with a known-good unit (or a new €10 replacement). If spark is restored, the CDI was faulty."
    }), "\n", createVNode(_components.h2, {
      id: "ignition-coil-replacement-procedure",
      children: "Ignition Coil Replacement Procedure"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Disconnect the battery"
        }), " — negative terminal first."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Locate the ignition coil."
        }), " On GY6 engines it is mounted on the frame or engine bracket near the cylinder head — typically a black rectangular block with one HT lead going to the spark plug and two small wires (or a 2-pin connector) going to the CDI and kill switch."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Remove the HT lead"
        }), " from the spark plug cap — unscrew counter-clockwise if threaded, or pull straight off if clip-type."]
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "Disconnect the low-voltage wiring connector."
        })
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Unbolt the coil"
        }), " (2 × M6 bolts) from its mounting bracket and remove it."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Fit the new coil"
        }), " — ensure the mounting bolts make clean metal-to-metal contact with the frame/engine for proper earthing. Tighten bolts firmly."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Reconnect all wiring"
        }), " and the HT lead to the plug cap."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Reconnect the battery"
        }), " (positive first, negative last)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Test for spark"
        }), " as described in Step 1 above before reassembling any bodywork."]
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["� ", createVNode(_components.strong, {
          children: "Pro tip:"
        }), " Buy a spare CDI and ignition coil together (under €30 total for GY6 parts). Carry them when touring. Intermittent ignition failures that only appear when hot are impossible to diagnose by the roadside without a spare to swap in."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "applicable-models",
      children: "Applicable Models"
    }), "\n", createVNode(_components.p, {
      children: ["This guide applies to all GY6 CDI ignition systems — ", createVNode(_components.code, {
        children: "139QMB"
      }), ", ", createVNode(_components.code, {
        children: "152QMI"
      }), ", ", createVNode(_components.code, {
        children: "157QMJ"
      }), " engines used in ", createVNode(_components.strong, {
        children: "BTC Riva"
      }), ", ", createVNode(_components.strong, {
        children: "La Souris Sourini / City"
      }), ", ", createVNode(_components.strong, {
        children: "Santini Capri"
      }), ", and all Chinese 50–150cc clones. Vespa Primavera and Sprint with electronic injection use a different ignition architecture (integrated ECU) — coil testing values and replacement procedures differ; consult the Piaggio workshop manual."]
    }), "\n", createVNode(_components.h2, {
      id: "related-videos",
      children: "Related Videos"
    }), "\n", createVNode(_components.h4, {
      id: "how-to-replace-a-scooter-ignition-coil",
      children: "How to Replace a Scooter Ignition Coil"
    }), "\n", createVNode(_components.p, {
      children: "Physical coil removal and installation on a GY6 scooter — shows connector locations, HT lead removal, mounting bolt access and post-install spark test."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=9y4IwMVjwJM",
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

const url = "src/content/repair-guides/gy6-ignition-coil-guide.mdx";
const file = "/sessions/sharp-gifted-meitner/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-ignition-coil-guide.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/sharp-gifted-meitner/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-ignition-coil-guide.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
