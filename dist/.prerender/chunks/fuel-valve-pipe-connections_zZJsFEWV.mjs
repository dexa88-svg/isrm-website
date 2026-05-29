import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_Csyy2u02.mjs';
import { $ as $$VideoEmbed } from './VideoEmbed_BrrohuIG.mjs';
import { $ as $$Callout } from './Callout_xSNqD3f4.mjs';
import { $ as $$SourceBox } from './SourceBox_BRfTi5yL.mjs';
import 'clsx';

const frontmatter = {
  "title": "Fuel Valve Pipe Connections — Carburettor Engine",
  "description": "How to correctly connect the two hoses on a vacuum-operated fuel valve (petcock): fuel hose to carburettor inlet, vacuum hose to intake manifold. GY6 & Piaggio.",
  "publishDate": "2026-05-22T00:00:00.000Z",
  "updatedDate": "2026-05-22T00:00:00.000Z",
  "difficulty": "Beginner",
  "timeEstimate": "~15 min",
  "tags": ["GY6", "Piaggio", "Vespa", "fuel valve", "petcock", "vacuum", "carburetor", "hoses", "fuel system"],
  "appliesTo": ["GY6 50cc (139QMB)", "GY6 125cc (152QMI)", "GY6 150cc (157QMJ)", "BTC Riva", "La Souris Sourini / City", "Santini Capri", "Piaggio Zip 50 4T", "Piaggio Zip 100 4T", "Vespa Primavera 50", "Vespa Sprint 50"],
  "videos": [{
    "id": "kQReNSk64Nc",
    "title": "Vacuum petcock fuel valve hose connections on a scooter",
    "creator": "YouTube",
    "position": "hero"
  }],
  "tools": ["Small flat-blade screwdriver (for hose clamps, if fitted)", "Hose-clamp pliers or narrow-nose pliers", "Short length of spare hose (for the suck-test)", "Rag or paper towels", "Fuel-safe container (small cup or bowl)"],
  "sources": [{
    "name": "GY6 Service Manual — Loncin / Jonway (community scan)",
    "url": "https://github.com/ismr-online/reference-docs"
  }, {
    "name": "Piaggio Zip 50 4T Official Workshop Manual",
    "url": "https://github.com/ismr-online/reference-docs"
  }, {
    "name": "ScrewsAndNuts Scooter Forum — Petcock Hose FAQ",
    "url": "https://www.screwsandnuts.co.uk"
  }],
  "canonical": "https://ismr.online/repair-guides/fuel-valve-pipe-connections.html",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-the-vacuum-petcock-works",
    "text": "How the Vacuum Petcock Works"
  }, {
    "depth": 2,
    "slug": "before-you-start--safety",
    "text": "Before You Start — Safety"
  }, {
    "depth": 2,
    "slug": "step-1--identify-the-two-ports-without-any-tools",
    "text": "Step 1 — Identify the Two Ports Without Any Tools"
  }, {
    "depth": 2,
    "slug": "step-2--the-suck-test-positive-identification-in-60-seconds",
    "text": "Step 2 — The “Suck Test” (Positive Identification in 60 Seconds)"
  }, {
    "depth": 2,
    "slug": "step-3--connect-the-hoses",
    "text": "Step 3 — Connect the Hoses"
  }, {
    "depth": 3,
    "slug": "fuel-hose-fuel-out--carburettor",
    "text": "Fuel hose (FUEL OUT → carburettor)"
  }, {
    "depth": 3,
    "slug": "vacuum-hose-vacuum--intake-manifold",
    "text": "Vacuum hose (VACUUM → intake manifold)"
  }, {
    "depth": 2,
    "slug": "step-4--verify-the-connections",
    "text": "Step 4 — Verify the Connections"
  }, {
    "depth": 2,
    "slug": "common-mistakes",
    "text": "Common Mistakes"
  }, {
    "depth": 2,
    "slug": "gy6--specific-routing-reference",
    "text": "GY6 — Specific Routing Reference"
  }, {
    "depth": 2,
    "slug": "piaggio-zip--vespa--specific-routing-reference",
    "text": "Piaggio Zip / Vespa — Specific Routing Reference"
  }, {
    "depth": 2,
    "slug": "related-guides",
    "text": "Related Guides"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
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
      sources: [{
        name: "GY6 Service Manual — Loncin / Jonway (community scan)",
        url: "https://github.com/ismr-online/reference-docs"
      }, {
        name: "Piaggio Zip 50 4T Official Workshop Manual",
        url: "https://github.com/ismr-online/reference-docs"
      }, {
        name: "ScrewsAndNuts Scooter Forum — Petcock Hose FAQ",
        url: "https://www.screwsandnuts.co.uk"
      }]
    }), "\n", createVNode(_components.p, {
      children: ["The fuel valve (petcock) on carburettor-equipped scooters is ", createVNode(_components.strong, {
        children: "vacuum-operated"
      }), " — it stays closed when the engine is off, and opens automatically when the engine runs. It has exactly two barbed hose fittings. Getting them mixed up means the engine gets no fuel, or creates a fuel leak. This guide explains how it works, how to identify which hose is which in under two minutes, and how to connect everything correctly."]
    }), "\n", createVNode($$VideoEmbed, {
      videoId: "kQReNSk64Nc",
      title: "Vacuum petcock fuel valve hose connections on a scooter",
      creator: "YouTube"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "how-the-vacuum-petcock-works",
      children: "How the Vacuum Petcock Works"
    }), "\n", createVNode(_components.p, {
      children: ["Inside the fuel valve is a rubber diaphragm. Atmospheric pressure holds it closed when there is no vacuum. As soon as the engine cranks, the piston creates a ", createVNode(_components.strong, {
        children: "negative pressure (vacuum)"
      }), " on the intake stroke. This vacuum is piped from the intake manifold to the diaphragm, pulling it open and allowing fuel to flow."]
    }), "\n", createVNode(_components.p, {
      children: "The result: fuel only flows when the engine is running (or cranking). If a fuel line cracks and falls off while the scooter is parked, the tank does not drain — a useful safety feature."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Two ports on the valve body:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Port"
          }), createVNode(_components.th, {
            children: "Connects to"
          }), createVNode(_components.th, {
            children: "Position (typical)"
          }), createVNode(_components.th, {
            children: "Hose size"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "FUEL OUT"
            })
          }), createVNode(_components.td, {
            children: "Carburettor fuel inlet (bottom of float bowl / side nipple)"
          }), createVNode(_components.td, {
            children: "Upper barb (or marked with arrow)"
          }), createVNode(_components.td, {
            children: "~6 mm ID"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "VACUUM"
            })
          }), createVNode(_components.td, {
            children: "Intake manifold vacuum nipple"
          }), createVNode(_components.td, {
            children: "Lower barb"
          }), createVNode(_components.td, {
            children: "~4–5 mm ID"
          })]
        })]
      })]
    }), "\n", createVNode("figure", {
      class: "step-photo",
      children: [createVNode("img", {
        src: "/repair-guides/images/fuel-valve-petcock-hose-connections.png",
        alt: "Vacuum-operated petcock with two hose connections labelled: large hose to vacuum source between carb and intake (red arrow), small fitting dripping fuel to carburettor (blue arrow)"
      }), createVNode("figcaption", {
        children: [createVNode("strong", {
          children: "Vacuum petcock — two ports identified."
        }), " Red arrow: large hose → vacuum source (between carb and intake manifold). Blue arrow: small fitting → fuel out to carburettor."]
      })]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["On most GY6 valves the two barbs are ", createVNode(_components.strong, {
          children: "different diameters"
        }), " — the fuel barb is slightly larger (~6 mm) and the vacuum barb is slightly smaller (~4 mm). If you have two different-sized hoses, that alone tells you which goes where before you do any test."]
      })
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["On Piaggio Zip 50/100 4T the petcock is mounted on the left side of the tank and the ports are usually labelled with moulded arrows or the letters ", createVNode(_components.strong, {
          children: "F"
        }), " (fuel) and ", createVNode(_components.strong, {
          children: "VAC"
        }), " (vacuum). Check for markings before reaching for the hose."]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "before-you-start--safety",
      children: "Before You Start — Safety"
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: "Work in a well-ventilated area away from open flames or sparks. Fuel vapour is heavier than air and pools at floor level. Keep a rag handy to mop up any spills immediately."
      })
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: ["If you are reconnecting hoses after removing the tank, make sure the fuel tap is in the ", createVNode(_components.strong, {
          children: "OFF"
        }), " position (if your valve has a manual override lever) before disconnecting anything."]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "step-1--identify-the-two-ports-without-any-tools",
      children: "Step 1 — Identify the Two Ports Without Any Tools"
    }), "\n", createVNode(_components.p, {
      children: "Look at the fuel valve where it is mounted on the tank."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "a. Check for markings first."
      }), " Many valves have moulded or stamped text: ", createVNode(_components.code, {
        children: "FUEL"
      }), ", ", createVNode(_components.code, {
        children: "OUT"
      }), ", ", createVNode(_components.code, {
        children: "VAC"
      }), ", ", createVNode(_components.code, {
        children: "PRI"
      }), ", or small arrows. If markings are present, you are done — skip to Step 3."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "b. Check hose diameters."
      }), " If you have the original hoses still attached (or removed but labelled), compare their inner diameter. The fuel hose is typically 6 mm ID (slightly thicker wall). The vacuum hose is 4–5 mm ID (thinner). Different diameters → the valve body barbs are also different diameters, which makes it physically much harder to swap them accidentally."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "c. Check port position."
      }), " As a general rule on GY6 and Piaggio:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Top or rear barb"
        }), " → fuel outlet"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Bottom or front barb"
        }), " → vacuum inlet"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This is a guideline, not a guarantee — always confirm with the suck-test below if you are unsure."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "step-2--the-suck-test-positive-identification-in-60-seconds",
      children: "Step 2 — The “Suck Test” (Positive Identification in 60 Seconds)"
    }), "\n", createVNode(_components.p, {
      children: "Use this test any time you are unsure which port is which, or when fitting a replacement valve with no markings."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "What you need:"
      }), " a short (~20 cm) scrap of hose that fits over each barb, a small container, and someone to hold the scooter (or a centre-stand)."]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Make sure the tank has ", createVNode(_components.strong, {
          children: "a small amount of fuel"
        }), " — at least 100–200 ml. Tilt the scooter slightly so fuel sits near the valve."]
      }), "\n", createVNode(_components.li, {
        children: "Place your container on the floor under the valve."
      }), "\n", createVNode(_components.li, {
        children: ["Fit the scrap hose over ", createVNode(_components.strong, {
          children: "one barb"
        }), " (no fuel should flow by itself — the valve is closed with no vacuum)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Suck firmly on the scrap hose"
        }), " with your mouth for 1–2 seconds, then release."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Interpret the result:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "What happens"
          }), createVNode(_components.th, {
            children: "What it means"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: ["Fuel flows out of the ", createVNode(_components.strong, {
              children: "other"
            }), " barb (into your container)"]
          }), createVNode(_components.td, {
            children: ["The barb you sucked on is the ", createVNode(_components.strong, {
              children: "VACUUM port"
            }), " — connect it to the intake manifold. The other barb is ", createVNode(_components.strong, {
              children: "FUEL OUT"
            }), " — connect it to the carburettor."]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Nothing happens from the other barb"
          }), createVNode(_components.td, {
            children: ["You sucked on the ", createVNode(_components.strong, {
              children: "FUEL OUT"
            }), " port — swap your scrap hose to the other barb and repeat."]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Fuel comes into your mouth"
          }), createVNode(_components.td, {
            children: "You accidentally sucked on the FUEL OUT port with a non-vacuum-operated valve or a faulty diaphragm. Spit, rinse, check the valve."
          })]
        })]
      })]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["You are applying a small suction to mimic what the engine intake does. The valve diaphragm opens and fuel flows out the other port. As soon as you release suction, flow stops. If the flow does ", createVNode(_components.strong, {
          children: "not"
        }), " stop when you release, the diaphragm is torn — replace the valve before riding."]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "step-3--connect-the-hoses",
      children: "Step 3 — Connect the Hoses"
    }), "\n", createVNode(_components.h3, {
      id: "fuel-hose-fuel-out--carburettor",
      children: "Fuel hose (FUEL OUT → carburettor)"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Route the ", createVNode(_components.strong, {
          children: "fuel hose"
        }), " from the FUEL OUT barb on the valve down to the ", createVNode(_components.strong, {
          children: "carburettor fuel inlet"
        }), " — the small barbed nipple on the side of the float bowl or on the bottom of the carb body. On GY6 carbs (PD18/PZ19/PD24/CVK) it is typically on the ", createVNode(_components.strong, {
          children: "left side"
        }), " of the carb body, pointing downward at a slight angle."]
      }), "\n", createVNode(_components.li, {
        children: "Push the hose firmly over the barb until it bottoms out — you should feel a definite stop."
      }), "\n", createVNode(_components.li, {
        children: "Fit a hose clamp (spring-type or screw-type) at least 5 mm back from the end of the barb. On GY6 50cc engines the fuel hose is often a push-fit without a clamp from the factory, but a small spring clamp is good practice, especially if the hose is old."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "vacuum-hose-vacuum--intake-manifold",
      children: "Vacuum hose (VACUUM → intake manifold)"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Route the ", createVNode(_components.strong, {
          children: "vacuum hose"
        }), " from the VACUUM barb on the valve to the ", createVNode(_components.strong, {
          children: "small nipple on the intake manifold"
        }), " (the rubber or aluminium tube between the carburettor and the cylinder head). On GY6 engines this nipple is usually on the ", createVNode(_components.strong, {
          children: "underside"
        }), " of the manifold, pointing downward — it is smaller in diameter than the main carb inlet and sometimes has a blanking cap if it has never been used."]
      }), "\n", createVNode(_components.li, {
        children: ["On ", createVNode(_components.strong, {
          children: "Piaggio Zip / Vespa"
        }), " engines the vacuum nipple is on the intake manifold near the carburettor flange, also on the underside."]
      }), "\n", createVNode(_components.li, {
        children: "Push the hose fully onto the nipple. No clamp is needed on the vacuum side (low pressure), but a cable tie is fine if the hose feels loose."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: ["Do ", createVNode(_components.strong, {
          children: "not"
        }), " leave the intake manifold vacuum nipple open (uncapped) even temporarily — a vacuum leak here causes the engine to idle very fast or not idle at all, and can lean out the mixture enough to cause engine damage at speed."]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "step-4--verify-the-connections",
      children: "Step 4 — Verify the Connections"
    }), "\n", createVNode(_components.p, {
      children: "Before starting the engine, do a quick visual and function check:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Visually trace both hoses"
        }), " — no kinks, no sharp bends, no contact with hot surfaces (exhaust pipe), no contact with moving parts (drive belt cover, variator)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Check hose ends are fully seated"
        }), " on both barbs — you should not be able to pull them off with light finger pressure."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Start the engine."
        }), " Within a few seconds of cranking, fuel should be flowing through the system and the engine should start and idle normally."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "After starting, inspect both hose connections"
        }), " for drips or seeping fuel. Any wet spot at a hose join means the hose is not fully seated or the clamp is too loose."]
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["If the engine cranks but does not start, turn the fuel tap to ", createVNode(_components.strong, {
          children: "PRI"
        }), " (prime) if fitted — this bypasses the vacuum diaphragm and opens the valve mechanically. If fuel then flows and the engine starts, the diaphragm is intact but there may be an air leak in the vacuum hose circuit preventing the valve from opening on its own."]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Swapping the two hoses"
      }), " — the most common error. The vacuum barb connected to the carburettor will deliver no fuel (the carb fuel inlet expects liquid, not vacuum). The engine will crank but not start, or start briefly on residual fuel then die. Run the suck-test in Step 2 to confirm which is which."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Using a fuel hose for the vacuum line"
      }), " — thick-walled fuel hose will fit the vacuum barb but collapses slightly under suction, restricting or blocking the vacuum signal. Always use a vacuum-rated hose (thinner wall, slightly stiffer) on the vacuum side."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Leaving the vacuum nipple on the intake manifold uncapped"
      }), " — if you remove the vacuum hose for any reason and do not immediately reconnect it, cap the manifold nipple with a short bolt, a golf tee, or a purpose-made vacuum cap. Even a minute of running with an open vacuum port will cause a severe lean condition."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Hose routing too close to the exhaust"
      }), " — fuel hose routed near the exhaust header will soften, crack, and eventually leak. Route hoses on the cold side of the engine and secure them with a cable tie to prevent vibration wear."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "gy6--specific-routing-reference",
      children: "GY6 — Specific Routing Reference"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "[Fuel Tank]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    |"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "[Fuel Valve / Petcock]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    |                \\"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: " FUEL OUT           VACUUM"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    |                    \\"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "[Carb fuel inlet]     [Intake manifold vacuum nipple]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "(side of carb body)   (underside of manifold, near carb flange)"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["On the GY6 139QMB (50cc), the intake manifold vacuum nipple points ", createVNode(_components.strong, {
        children: "straight down"
      }), " and is approximately 4 mm OD. The carburettor fuel inlet is a 6 mm OD barb on the left side of the PD18J/PD22J body."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "piaggio-zip--vespa--specific-routing-reference",
      children: "Piaggio Zip / Vespa — Specific Routing Reference"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "[Fuel Tank — left side of scooter]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    |"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "[Fuel Valve — mounted on tank underside or left frame rail]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    |                \\"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: " FUEL OUT (upper)   VACUUM (lower)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    |                    \\"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "[Carb fuel inlet]     [Intake manifold vacuum nipple]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "(left side of PHVA carb)   (underside of manifold stub)"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["On the Piaggio Zip 50 4T and Vespa Primavera 50, the carburettor is a ", createVNode(_components.strong, {
        children: "Dellorto PHVA 12"
      }), " or ", createVNode(_components.strong, {
        children: "PHVA 17.5"
      }), ". The fuel inlet is a single 6 mm barb on the left of the body. The vacuum nipple on the manifold is 4 mm and points downward — it may have a factory cap if the bike came without vacuum-operated accessories."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "related-guides",
      children: "Related Guides"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/repair-guides/gy6-carburetor-cleaning-guide",
          children: "GY6 Carburetor Cleaning Guide"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/repair-guides/gy6-hard-start-intake-flooding",
          children: "GY6 Hard Start / Intake Flooding"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/repair-guides/gy6-carburetor-adjustment-guide",
          children: "GY6 Carburetor Adjustment Guide"
        })
      }), "\n"]
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

const url = "src/content/repair-guides/fuel-valve-pipe-connections.mdx";
const file = "/sessions/kind-sleepy-hamilton/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/fuel-valve-pipe-connections.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/kind-sleepy-hamilton/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/fuel-valve-pipe-connections.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
