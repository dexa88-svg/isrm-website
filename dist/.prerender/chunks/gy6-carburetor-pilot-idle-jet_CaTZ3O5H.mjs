import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_CuGQ4WK_.mjs';
import { $ as $$VideoEmbed } from './VideoEmbed_xzJISfAr.mjs';
import { $ as $$Callout } from './Callout_QX-gPCwg.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 Carburetor Pilot & Idle Jet Diagnosis",
  "description": "Diagnose GY6 carburetor pilot/idle jet problems — rough idle, stalling, and lean bog at low throttle. Includes cleaning and replacement procedure for GY6 carbs.",
  "publishDate": "2026-05-15",
  "updatedDate": "2026-05-15",
  "difficulty": "Beginner",
  "timeEstimate": "~30 min",
  "tags": ["GY6", "Carburetor", "Pilot Jet", "Idle Jet", "Idle Problems", "Won't Start"],
  "appliesTo": ["GY6 50cc (139QMB)", "GY6 125cc (152QMI)", "GY6 150cc (157QMJ)", "BTC Riva", "La Souris Sourini", "La Souris City S", "Santini Capri"],
  "videos": [{
    "id": "4QuFHsGA5KE",
    "title": "GY6 Carburetor Pilot Jet Diagnosis",
    "creator": "YouTube",
    "position": "hero"
  }, {
    "id": "_2ecpUtAYJU",
    "title": "GY6 Idle Jet Cleaning Procedure",
    "creator": "YouTube",
    "position": "inline"
  }, {
    "id": "oHYrfK9MAuU",
    "title": "GY6 Idle Screw and Pilot Jet Adjustment",
    "creator": "YouTube",
    "position": "inline"
  }, {
    "id": "xhaVVH-sLNo",
    "title": "GY6 Scooter Idling Bad — Pilot Jet Fix",
    "creator": "YouTube",
    "position": "inline"
  }],
  "sources": [],
  "canonical": "https://ismr.online/diagnostics/gy6-carburetor-pilot-idle-jet.html",
  "draft": false,
  "category": "fuel",
  "engine": "gy6",
  "fuel": "carb",
  "section": "Fuel System & Idle"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-pilot-jet--what-it-does-and-why-it-blocks",
    "text": "The Pilot Jet — What It Does and Why It Blocks"
  }, {
    "depth": 2,
    "slug": "symptoms-of-a-blocked-pilot-jet",
    "text": "Symptoms of a Blocked Pilot Jet"
  }, {
    "depth": 2,
    "slug": "reference-videos",
    "text": "Reference Videos"
  }, {
    "depth": 3,
    "slug": "idle-circuit--diagnosis-and-pilot-jet-identification",
    "text": "Idle Circuit — Diagnosis and Pilot Jet Identification"
  }, {
    "depth": 2,
    "slug": "gy6-carburetor-idle-circuit--how-it-works",
    "text": "GY6 Carburetor Idle Circuit — How It Works"
  }, {
    "depth": 2,
    "slug": "step-by-step-pilot-jet-cleaning",
    "text": "Step-by-Step Pilot Jet Cleaning"
  }, {
    "depth": 3,
    "slug": "step-1--preparation",
    "text": "Step 1 — Preparation"
  }, {
    "depth": 3,
    "slug": "step-2--remove-the-float-bowl",
    "text": "Step 2 — Remove the Float Bowl"
  }, {
    "depth": 3,
    "slug": "step-3--remove-and-inspect-the-pilot-jet",
    "text": "Step 3 — Remove and Inspect the Pilot Jet"
  }, {
    "depth": 3,
    "slug": "step-4--clean-the-pilot-jet",
    "text": "Step 4 — Clean the Pilot Jet"
  }, {
    "depth": 3,
    "slug": "step-5--clean-the-carburetor-body-passages",
    "text": "Step 5 — Clean the Carburetor Body Passages"
  }, {
    "depth": 3,
    "slug": "step-6--check-and-clean-the-airfuel-mixture-screw",
    "text": "Step 6 — Check and Clean the Air/Fuel Mixture Screw"
  }, {
    "depth": 3,
    "slug": "step-7--reassemble-and-test",
    "text": "Step 7 — Reassemble and Test"
  }, {
    "depth": 2,
    "slug": "pilot-jet-size-reference-gy6-stock",
    "text": "Pilot Jet Size Reference (GY6 Stock)"
  }, {
    "depth": 2,
    "slug": "after-a-full-clean--setting-idle-correctly",
    "text": "After a Full Clean — Setting Idle Correctly"
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
      id: "the-pilot-jet--what-it-does-and-why-it-blocks",
      children: "The Pilot Jet — What It Does and Why It Blocks"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.strong, {
        children: "pilot jet"
      }), " (also called the ", createVNode(_components.strong, {
        children: "slow jet"
      }), ") is a small brass jet with a tiny metering hole — typically 0.35–0.42 mm in diameter on a stock GY6 carburetor. It supplies fuel to the engine at idle and at throttle openings below approximately 1/4. At these low throttle positions, the main jet plays almost no role — the entire idle and low-speed fuel circuit depends entirely on the pilot jet being clean and clear."]
    }), "\n", createVNode(_components.p, {
      children: "Because the pilot jet hole is so small, even a microscopic deposit of varnish — formed when old fuel evaporates inside the carburetor — can partially or fully block it. This is extremely common on scooters that have been stored for a season, or that run on fuel with ethanol content (E10 or higher), which degrades faster and leaves more varnish residue."
    }), "\n", createVNode(_components.h2, {
      id: "symptoms-of-a-blocked-pilot-jet",
      children: "Symptoms of a Blocked Pilot Jet"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Symptom"
          }), createVNode("th", {
            children: "Pilot Jet Blocked?"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Engine starts and runs at high rpm but will not idle — dies when throttle is released"
          }), createVNode("td", {
            children: "Very likely — classic pilot jet blockage"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Engine only runs with choke on; dies when choke is turned off"
          }), createVNode("td", {
            children: "Very likely — choke enriches mixture to compensate for lean pilot circuit"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Idle is erratic, surging, or hunting — not a steady rpm"
          }), createVNode("td", {
            children: "Likely — combined with possible air leak (check both)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Engine starts fine when warm but not from cold"
          }), createVNode("td", {
            children: "Likely — partial blockage that only affects cold idle circuit"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Scooter runs well at half to full throttle but poorly at small throttle openings"
          }), createVNode("td", {
            children: "Highly likely — pilot circuit is responsible for 0–1/4 throttle fuelling"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Engine won’t idle even with idle screw fully in (clockwise)"
          }), createVNode("td", {
            children: "Likely pilot blockage or air/fuel mixture screw issue"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "reference-videos",
      children: "Reference Videos"
    }), "\n", createVNode(_components.h3, {
      id: "idle-circuit--diagnosis-and-pilot-jet-identification",
      children: "Idle Circuit — Diagnosis and Pilot Jet Identification"
    }), "\n", createVNode($$VideoEmbed, {
      videoId: "4QuFHsGA5KE",
      title: "GY6 Carburetor Pilot Jet Diagnosis",
      creator: "YouTube"
    }), "\n", createVNode(_components.p, {
      children: "Identifying pilot jet blockage and the idle fuel circuit on GY6 carburetor."
    }), "\n", createVNode($$VideoEmbed, {
      videoId: "_2ecpUtAYJU",
      title: "GY6 Idle Jet Cleaning Procedure",
      creator: "YouTube"
    }), "\n", createVNode(_components.p, {
      children: "Step-by-step pilot/idle jet cleaning procedure."
    }), "\n", createVNode($$VideoEmbed, {
      videoId: "oHYrfK9MAuU",
      title: "GY6 Idle Screw and Pilot Jet Adjustment",
      creator: "YouTube"
    }), "\n", createVNode(_components.p, {
      children: "Idle screw and pilot jet adjustment after cleaning."
    }), "\n", createVNode($$VideoEmbed, {
      videoId: "xhaVVH-sLNo",
      title: "GY6 Scooter Idling Bad — Pilot Jet Fix",
      creator: "YouTube"
    }), "\n", createVNode(_components.p, {
      children: "Poor idling caused by dirty pilot circuit — complete diagnosis and fix."
    }), "\n", createVNode(_components.h2, {
      id: "gy6-carburetor-idle-circuit--how-it-works",
      children: "GY6 Carburetor Idle Circuit — How It Works"
    }), "\n", createVNode(_components.p, {
      children: "Understanding the circuit helps you know where to look and what to clean:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Pilot jet:"
        }), " A small brass jet screwed into the carb body, typically accessible from the bowl side. Meters fuel into the idle circuit."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Pilot fuel passage:"
        }), " A small drilled channel inside the carb body that carries fuel from the pilot jet to the idle mixture screw and then up to the pilot outlet hole in the carb throat."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Air/fuel mixture screw (pilot air screw):"
        }), " A tapered brass screw sealed with an O-ring, usually covered by a tamper-proof plug from the factory. It meters air (on some GY6 carbs) or fuel (on others) into the idle circuit. Standard setting is 1.5–2.5 turns out from lightly seated."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Idle speed screw:"
        }), " A separate, larger screw (not the mixture screw) that controls how far the throttle slide sits off its seat at idle, setting engine speed. This does not affect mixture, only rpm."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Pilot outlet port:"
        }), " A small hole in the carburetor throat (below the slide), through which the idle mixture enters the engine air stream. Can become blocked with varnish."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "A blockage at any point in this circuit causes idle failure. The most common blockage is in the pilot jet itself and in the small drillings within the carb body."
    }), "\n", createVNode(_components.h2, {
      id: "step-by-step-pilot-jet-cleaning",
      children: "Step-by-Step Pilot Jet Cleaning"
    }), "\n", createVNode(_components.h3, {
      id: "step-1--preparation",
      children: "Step 1 — Preparation"
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "⚠ Fire safety:"
        }), " Work in a well-ventilated area away from ignition sources. Carburetor cleaner is highly flammable. Have a fire extinguisher nearby. Protect your eyes — carb cleaner is caustic."]
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Allow the engine to cool completely — at least 30 minutes after last running."
      }), "\n", createVNode(_components.li, {
        children: ["Turn the fuel petcock to ", createVNode(_components.strong, {
          children: "OFF"
        }), " or close the fuel valve."]
      }), "\n", createVNode(_components.li, {
        children: "Place a small container under the float bowl drain screw (if fitted) or under the bowl itself. You will be draining residual fuel."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-2--remove-the-float-bowl",
      children: "Step 2 — Remove the Float Bowl"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Locate the float bowl drain screw at the bottom of the carburetor bowl (if present) and loosen it to drain residual fuel."
      }), "\n", createVNode(_components.li, {
        children: "Remove the single retaining screw (or two screws, depending on carb type) from the bottom of the float bowl."
      }), "\n", createVNode(_components.li, {
        children: "Lower the float bowl carefully — it may still contain fuel. Note the condition of the fuel: if it is dark brown, thick, or smells of varnish, the entire carb needs a full clean."
      }), "\n", createVNode(_components.li, {
        children: "Inspect the float bowl gasket — replace if it shows cracks, compression set, or deformation."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-3--remove-and-inspect-the-pilot-jet",
      children: "Step 3 — Remove and Inspect the Pilot Jet"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["With the bowl removed, identify the ", createVNode(_components.strong, {
          children: "pilot jet"
        }), ": it is the ", createVNode(_components.strong, {
          children: "smaller"
        }), " of the two jets. On GY6 carbs it is typically the jet closest to the engine side (rear), while the main jet is larger and sits towards the centre or front."]
      }), "\n", createVNode(_components.li, {
        children: "Use a flat-head screwdriver that fits the slot precisely — a poor-fitting screwdriver will damage the soft brass jet head. A proper jet screwdriver with a wide, thin blade is ideal."
      }), "\n", createVNode(_components.li, {
        children: "Unscrew the pilot jet anti-clockwise. It should come free with moderate effort. Do not use excessive force — the jet is soft brass and strips easily."
      }), "\n", createVNode(_components.li, {
        children: "Hold the jet up to a light source and look through it. Clear hole: Jet is unobstructed. Move to cleaning the passages. Blocked or no light visible: Jet is blocked."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-4--clean-the-pilot-jet",
      children: "Step 4 — Clean the Pilot Jet"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Soak the pilot jet in ", createVNode(_components.strong, {
          children: "carb cleaner"
        }), " for 10–15 minutes. Fresh cleaner dissolves varnish deposits effectively."]
      }), "\n", createVNode(_components.li, {
        children: "After soaking, spray carb cleaner through the jet from both ends using the tube nozzle on the carb cleaner can."
      }), "\n", createVNode(_components.li, {
        children: "Hold the jet up to light — you should see a clean, round hole. If not, soak again for 30 minutes and repeat."
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Do not use wire, drill bits, or anything solid"
        }), " to push through the jet hole. The hole size is precisely calibrated — enlarging it even slightly will permanently alter the fuel mixture. The only acceptable mechanical cleaning is with a ", createVNode(_components.strong, {
          children: "jet cleaning wire"
        }), " (a soft bristle from a brass wire brush, or a strand from a brass wire). Even this should be used with great care."]
      }), "\n", createVNode(_components.li, {
        children: "Blow the jet out with compressed air. Confirm the hole is clear visually."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-5--clean-the-carburetor-body-passages",
      children: "Step 5 — Clean the Carburetor Body Passages"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["With the pilot jet removed and the bowl off, spray carb cleaner into the ", createVNode(_components.strong, {
          children: "pilot jet port"
        }), " (the threaded hole where the jet sits). Watch for cleaner to emerge from the small pilot outlet port in the carb throat — if it does, the main passage is clear."]
      }), "\n", createVNode(_components.li, {
        children: "Spray cleaner into all small holes and drillings visible in the carb body. Each small hole should show cleaner emerging from somewhere else in the carb — if it does not, the passage is blocked."
      }), "\n", createVNode(_components.li, {
        children: "Use compressed air to blow through all passages after spraying with cleaner."
      }), "\n", createVNode(_components.li, {
        children: "If the pilot outlet port in the carb throat (the small hole below the slide) is blocked with varnish, carefully clear it with a thin strand of wire or a strand of straw bristle. It is critical that this port is clear."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-6--check-and-clean-the-airfuel-mixture-screw",
      children: "Step 6 — Check and Clean the Air/Fuel Mixture Screw"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Locate the mixture screw — a tapered brass screw on the engine side of the carb body, often covered with a small aluminium plug from the factory (emissions tamper-proof cap)."
      }), "\n", createVNode(_components.li, {
        children: "If a plug is present, remove it with a small pick or drill (use a 4 mm drill bit carefully — just enough to create a grip point for the pick)."
      }), "\n", createVNode(_components.li, {
        children: "Carefully unscrew the mixture screw fully. Note exactly how many turns it takes to remove it from lightly seated — this is your baseline. It should be approximately 1.5–2.5 turns out."
      }), "\n", createVNode(_components.li, {
        children: "The mixture screw will have a small O-ring and a small spring — do not lose these."
      }), "\n", createVNode(_components.li, {
        children: "Soak the screw in carb cleaner. Spray carb cleaner through the mixture screw port and the adjacent air bleed passages."
      }), "\n", createVNode(_components.li, {
        children: "Inspect the O-ring — replace if hardened, cracked, or deformed (use a fuel-grade O-ring matching the original diameter)."
      }), "\n", createVNode(_components.li, {
        children: "Reinstall the mixture screw to its original number of turns. Do not tighten past lightly seated — the tapered tip seats on a soft aluminium seat and is easily damaged."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-7--reassemble-and-test",
      children: "Step 7 — Reassemble and Test"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Reinstall the pilot jet. Tighten firmly but not with excessive force — snug is enough."
      }), "\n", createVNode(_components.li, {
        children: "Reinstall the main jet (if removed)."
      }), "\n", createVNode(_components.li, {
        children: "Fit a new float bowl gasket if the old one is compromised. Reinstall the float bowl and tighten the screw."
      }), "\n", createVNode(_components.li, {
        children: "Open the fuel petcock to ON. Check for fuel leaks around the bowl."
      }), "\n", createVNode(_components.li, {
        children: "Start the engine. Allow it to warm for 2–3 minutes."
      }), "\n", createVNode(_components.li, {
        children: ["With the engine warm, set the idle speed to approximately ", createVNode(_components.strong, {
          children: "1,500–1,800 rpm"
        }), " using the idle speed screw."]
      }), "\n", createVNode(_components.li, {
        children: "Fine-tune the mixture screw: turn it out (anti-clockwise) in 1/4-turn increments and listen. The idle should rise slightly as mixture richens. Find the position that gives the highest, smoothest idle, then turn the idle speed screw back down to your desired idle rpm."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "pilot-jet-size-reference-gy6-stock",
      children: "Pilot Jet Size Reference (GY6 Stock)"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Engine"
          }), createVNode("th", {
            children: "Carburetor"
          }), createVNode("th", {
            children: "Standard Pilot Jet"
          }), createVNode("th", {
            children: "Standard Main Jet"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "GY6 50cc (139QMB)"
          }), createVNode("td", {
            children: "PZ19 or PZ18"
          }), createVNode("td", {
            children: "#38–#42"
          }), createVNode("td", {
            children: "#78–#82"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "GY6 125cc (152QMI)"
          }), createVNode("td", {
            children: "PZ20 or CV22"
          }), createVNode("td", {
            children: "#38–#42"
          }), createVNode("td", {
            children: "#95–#100"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "GY6 150cc (157QMJ)"
          }), createVNode("td", {
            children: "PZ22 or CV24"
          }), createVNode("td", {
            children: "#42–#45"
          }), createVNode("td", {
            children: "#105–#110"
          })]
        })]
      })
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "When to replace rather than clean:"
        }), " If the pilot jet is clear but the engine still idles poorly, and all passages are unobstructed, the jet itself may have enlarged from wear or improper cleaning. Replace with an exact OEM-spec jet — they cost less than €1 each. Always carry a spare pilot jet on older carbureted GY6 scooters."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "after-a-full-clean--setting-idle-correctly",
      children: "After a Full Clean — Setting Idle Correctly"
    }), "\n", createVNode(_components.p, {
      children: "After cleaning, the carburetor requires proper idle adjustment. There are two separate adjustments — do not confuse them:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Idle speed screw (large, spring-loaded, on the side of the carb body):"
        }), " Controls engine rpm at idle. Turn clockwise to raise idle, anti-clockwise to lower. Target: 1,500–1,800 rpm when fully warm."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Air/fuel mixture screw (small, tapered, usually under a plug):"
        }), " Controls the richness of the idle mixture. Turn out (anti-clockwise) to richen, in (clockwise) to lean. Adjust for highest smooth idle, then set idle speed with the idle speed screw."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "related-guides",
      children: "Related Guides"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/repair-guides/gy6-carburetor-cleaning-guide.html",
          children: "GY6 Carburetor Full Cleaning Guide"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/repair-guides/gy6-carburetor-adjustment-guide.html",
          children: "GY6 Carburetor Adjustment Guide"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/repair-guides/gy6-carburetor-jetting-guide.html",
          children: "GY6 Carburetor Jetting Guide"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "gy6-air-leak-diagnosis.html",
          children: "Air Leak Diagnosis (can mimic pilot jet symptoms)"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "gy6-no-start-troubleshooting.html",
          children: "GY6 Won’t Start — Full Troubleshooting Checklist"
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

const url = "src/content/diagnostics/gy6-carburetor-pilot-idle-jet.mdx";
const file = "/sessions/ecstatic-zealous-goldberg/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-carburetor-pilot-idle-jet.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/ecstatic-zealous-goldberg/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-carburetor-pilot-idle-jet.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
