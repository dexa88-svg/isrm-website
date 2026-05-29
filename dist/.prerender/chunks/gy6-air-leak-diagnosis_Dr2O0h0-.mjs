import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_95gpAyKK.mjs';
import { $ as $$VideoEmbed } from './VideoEmbed_BzRCdj2C.mjs';
import { $ as $$Callout } from './Callout_D7kgzWMu.mjs';
import 'clsx';

const frontmatter = {
  "title": "Diagnosing Air Leaks and Vacuum Sucking — GY6 Scooter",
  "description": "GY6 intake air leak diagnosis guide. Symptoms, spray test procedure, and common leak points on the inlet manifold, carb boot, and gaskets for GY6 scooters.",
  "publishDate": "2026-05-19",
  "updatedDate": "2026-05-19",
  "difficulty": "Beginner",
  "timeEstimate": "~30 min",
  "tags": ["GY6", "Carburetor", "Air Leak", "Vacuum Leak", "Idle Problems"],
  "appliesTo": ["GY6 50cc (139QMB)", "GY6 125cc (152QMI)", "GY6 150cc (157QMJ)", "BTC Riva", "La Souris Sourini", "La Souris City S", "Santini Capri"],
  "videos": [{
    "id": "OxPTTEL1iA4",
    "title": "GY6 Air Leak Diagnosis — Video Guide",
    "creator": "YouTube",
    "position": "hero"
  }],
  "sources": [],
  "canonical": "https://ismr.online/diagnostics/gy6-air-leak-diagnosis.html",
  "draft": false,
  "category": "fuel",
  "engine": "both",
  "fuel": "both",
  "section": "Fuel System & Idle"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "video-guide",
    "text": "Video Guide"
  }, {
    "depth": 2,
    "slug": "what-is-an-air-leak",
    "text": "What Is an Air Leak?"
  }, {
    "depth": 2,
    "slug": "symptoms-of-an-air-leak",
    "text": "Symptoms of an Air Leak"
  }, {
    "depth": 2,
    "slug": "common-air-leak-locations-on-gy6-engines",
    "text": "Common Air Leak Locations on GY6 Engines"
  }, {
    "depth": 2,
    "slug": "photo-reference",
    "text": "Photo Reference"
  }, {
    "depth": 2,
    "slug": "diagnostic-methods",
    "text": "Diagnostic Methods"
  }, {
    "depth": 3,
    "slug": "method-1--carb-cleaner-spray-test-most-effective",
    "text": "Method 1 — Carb Cleaner Spray Test (Most Effective)"
  }, {
    "depth": 3,
    "slug": "method-2--visual-inspection",
    "text": "Method 2 — Visual Inspection"
  }, {
    "depth": 3,
    "slug": "method-3--smoke-test-workshop-method",
    "text": "Method 3 — Smoke Test (Workshop Method)"
  }, {
    "depth": 2,
    "slug": "fixing-the-air-leak",
    "text": "Fixing the Air Leak"
  }, {
    "depth": 2,
    "slug": "after-repair--verifying-the-fix",
    "text": "After Repair — Verifying the Fix"
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "video-guide",
      children: "Video Guide"
    }), "\n", createVNode($$VideoEmbed, {
      videoId: "OxPTTEL1iA4",
      title: "GY6 Air Leak Diagnosis — Video Guide",
      creator: "YouTube"
    }), "\n", createVNode(_components.h2, {
      id: "what-is-an-air-leak",
      children: "What Is an Air Leak?"
    }), "\n", createVNode(_components.p, {
      children: ["An ", createVNode(_components.strong, {
        children: "air leak"
      }), " (also called a ", createVNode(_components.strong, {
        children: "vacuum leak"
      }), " or ", createVNode(_components.strong, {
        children: "false air"
      }), ") is an unintended gap or crack somewhere in the intake path — between the air filter and the combustion chamber — through which unmetered air enters the engine. Because a carburetor or EFI injector measures only the air passing through its own throat, any air that bypasses this measurement causes the engine to run lean."]
    }), "\n", createVNode(_components.p, {
      children: "On a carbureted engine, the effect is particularly pronounced because the carburetor relies on intake vacuum to draw fuel. Extra air reduces vacuum signal, weakens fuel delivery, and upsets the carefully calibrated air-fuel mixture."
    }), "\n", createVNode(_components.h2, {
      id: "symptoms-of-an-air-leak",
      children: "Symptoms of an Air Leak"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Symptom"
          }), createVNode("th", {
            children: "Air Leak Likelihood"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Idle is erratic, hunting, or surging (revs rise and fall repeatedly)"
          }), createVNode("td", {
            children: "Very high"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Idle that is much higher than normal and cannot be lowered with idle screw"
          }), createVNode("td", {
            children: "Very high"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Engine starts fine but dies at idle; recovers when throttle is cracked open"
          }), createVNode("td", {
            children: "High"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Hard cold start; starts easily on choke but won’t idle without it"
          }), createVNode("td", {
            children: "High"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Lean backfire or popping on deceleration"
          }), createVNode("td", {
            children: "Medium–High"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Loss of power at low rpm; normal power at higher rpm"
          }), createVNode("td", {
            children: "Medium"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Spark plug reads white/light grey (lean mixture)"
          }), createVNode("td", {
            children: "Medium"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: ["EFI CEL Code 21 (O₂ sensor lean) — see ", createVNode("a", {
              href: "gy6-efi-cel-flash-codes.html",
              children: "CEL flash codes guide"
            })]
          }), createVNode("td", {
            children: "High (EFI)"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "common-air-leak-locations-on-gy6-engines",
      children: "Common Air Leak Locations on GY6 Engines"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Intake manifold gasket (most common)"
        }), " The rubber or paper gasket between the intake manifold and cylinder head. It hardens and cracks with age. Inspect where the manifold bolts to the head."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Carburetor-to-manifold clamp and boot"
        }), " The rubber inlet boot (also called the intake sock) that connects the carburetor inlet to the manifold. The jubilee clamp can loosen, and the rubber develops cracks after several years. Check both ends."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Air filter-to-carburetor connection"
        }), " The joint between the air filter box and the carburetor inlet. Foam or rubber seal degrades. Also check that the air filter lid is properly seated."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Vacuum port hoses (carburetor)"
        }), " Small vacuum ports on the carburetor body connected to petcock, EGR (if fitted), or emissions hoses. Cracked, loose, or plugged hoses create significant leaks. These are often capped with small rubber plugs that can fall off."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Choke plunger seal (carb)"
        }), " The rubber O-ring on the enrichment circuit plunger (tickler or butterfly choke). Worn O-rings allow air entry around the plunger body."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Throttle shaft bushings (carb)"
        }), " The throttle slide shaft passes through the carb body. Worn bushings allow air to enter around the shaft — common on high-mileage carburetors."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "MAP sensor vacuum hose (EFI only)"
        }), " A cracked or disconnected vacuum hose between the throttle body and MAP sensor causes the ECU to misread manifold pressure and run the engine lean."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cylinder head gasket (less common)"
        }), " A minor head gasket leak between intake port and the combustion chamber is rare but possible. Usually accompanied by other symptoms (overheating, white smoke, coolant loss on LC engines)."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "photo-reference",
      children: "Photo Reference"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/images/diagnostics/gy6-air-leak-diagnosis-1.png",
        alt: "Cracked and worn GY6 intake manifold rubber boot — a common air leak source"
      })
    }), "\n", createVNode(_components.p, {
      children: "Cracked GY6 intake manifold rubber boot. Note the split around the port opening — this is a classic source of vacuum leaks causing erratic idle."
    }), "\n", createVNode(_components.h2, {
      id: "diagnostic-methods",
      children: "Diagnostic Methods"
    }), "\n", createVNode(_components.h3, {
      id: "method-1--carb-cleaner-spray-test-most-effective",
      children: "Method 1 — Carb Cleaner Spray Test (Most Effective)"
    }), "\n", createVNode(_components.p, {
      children: "This is the fastest and most reliable method for locating an air leak without dismantling anything."
    }), "\n", createVNode($$Callout, {
      type: "danger",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "🔥 Fire hazard:"
        }), " Carb cleaner is highly flammable. Work in a well-ventilated area, away from ignition sources and hot exhaust. Never spray near a running engine’s exhaust pipe. Keep a fire extinguisher nearby. Do not smoke."]
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Start the engine and allow it to reach normal idle (even if the idle is erratic)."
      }), "\n", createVNode(_components.li, {
        children: ["With a short burst, spray a small amount of carb cleaner around the ", createVNode(_components.strong, {
          children: "intake manifold gasket"
        }), " — where the manifold meets the cylinder head."]
      }), "\n", createVNode(_components.li, {
        children: "Listen carefully. If the idle speed changes (smooths out, increases, or the engine bogs for a moment), you have found a leak at that joint."
      }), "\n", createVNode(_components.li, {
        children: ["Move systematically: spray around the ", createVNode(_components.strong, {
          children: "carb-to-manifold boot"
        }), ", then the ", createVNode(_components.strong, {
          children: "air filter joint"
        }), ", then any ", createVNode(_components.strong, {
          children: "vacuum hose connections"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "FOUND: Idle changes when you spray a specific area — that is your leak location. Mark it and stop spraying."
      }), "\n", createVNode(_components.li, {
        children: "NOT FOUND: No idle change at any location — air leak is unlikely; investigate other causes of erratic idle (carb jetting, pilot jet blockage)."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Alternative:"
        }), " WD-40 can be used instead of carb cleaner and is less flammable, though it is less reliable on very small leaks. Avoid starting fluid (ether) — it is too flammable for this test."]
      })
    }), "\n", createVNode(_components.h3, {
      id: "method-2--visual-inspection",
      children: "Method 2 — Visual Inspection"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["With the engine ", createVNode(_components.strong, {
          children: "off and cold"
        }), ", remove the air filter and inspect the intake boot/sock for cracks, tears, or deformation. Squeeze and twist the rubber — cracks hidden inside folds will open under flex."]
      }), "\n", createVNode(_components.li, {
        children: "Check that the jubilee clamp at the carburetor inlet and manifold end are tight (requires a flathead screwdriver — tighten until snug, do not overtighten on rubber)."
      }), "\n", createVNode(_components.li, {
        children: "Inspect the intake manifold mounting bolts. Hand-tighten if loose, but do not overtorque — the manifold is aluminium and the studs strip easily."
      }), "\n", createVNode(_components.li, {
        children: "Trace all vacuum hoses from the carburetor. Look for cracks, kinks, or missing end caps. Gently tug each hose — a loose-fitting hose will pull free easily."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "method-3--smoke-test-workshop-method",
      children: "Method 3 — Smoke Test (Workshop Method)"
    }), "\n", createVNode(_components.p, {
      children: "A smoke machine forces low-pressure smoke into the intake system with the engine off. Smoke escaping from any point reveals the exact leak location. This is the professional workshop method and is unambiguous, but requires a smoke machine. Many independent scooter shops offer this test for a small fee if you do not own the equipment."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Remove the air filter and connect the smoke machine to the intake."
      }), "\n", createVNode(_components.li, {
        children: "Block all known openings (throttle, choke plunger port) to pressurise the system."
      }), "\n", createVNode(_components.li, {
        children: "Introduce smoke at low pressure (~0.5 psi)."
      }), "\n", createVNode(_components.li, {
        children: "Watch for smoke escaping around gaskets, hose joints, or manifold faces."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "fixing-the-air-leak",
      children: "Fixing the Air Leak"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Location"
          }), createVNode("th", {
            children: "Fix"
          }), createVNode("th", {
            children: "Parts Needed"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Intake manifold gasket"
          }), createVNode("td", {
            children: "Replace gasket. Clean mating faces. Torque bolts evenly to ~10 Nm."
          }), createVNode("td", {
            children: "GY6 intake manifold gasket (≈€1–3)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Intake boot / rubber sock"
          }), createVNode("td", {
            children: "Replace the rubber intake boot. Do not attempt to repair cracks with sealant — they will return."
          }), createVNode("td", {
            children: "GY6 intake rubber boot + jubilee clamps (≈€3–8)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Loose jubilee clamp"
          }), createVNode("td", {
            children: "Tighten or replace the clamp. Use worm-drive type for secure seating on rubber."
          }), createVNode("td", {
            children: "Jubilee clamp (≈€0.50)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Vacuum port hose cracked/missing"
          }), createVNode("td", {
            children: "Replace hose or fit a vacuum cap (short rubber nipple cap). Use fuel-rated rubber hose."
          }), createVNode("td", {
            children: "Vacuum hose per metre / vacuum cap plugs"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Choke plunger O-ring"
          }), createVNode("td", {
            children: "Remove plunger, measure O-ring OD and cross-section, replace with fuel-rated Viton O-ring."
          }), createVNode("td", {
            children: "O-ring (≈€0.20–0.50)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Throttle shaft worn bushings"
          }), createVNode("td", {
            children: "Carburetor body replacement is generally required; shaft bushings are not sold separately for most GY6 carbs. A complete PWK or VM22 carb is often more practical."
          }), createVNode("td", {
            children: "Replacement carb (≈€15–40)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "MAP sensor vacuum hose (EFI)"
          }), createVNode("td", {
            children: "Replace hose. Confirm sensor is fully seated and hose is pushed firmly onto nipple."
          }), createVNode("td", {
            children: "Vacuum hose"
          })]
        })]
      })
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Do not use RTV sealant or exhaust paste as a permanent fix"
        }), " on the intake manifold gasket. These sealants can be sucked into the engine if they fail, causing serious damage. Always use a proper replacement gasket."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "after-repair--verifying-the-fix",
      children: "After Repair — Verifying the Fix"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Reassemble all components and start the engine."
      }), "\n", createVNode(_components.li, {
        children: "Allow the engine to warm for 3–4 minutes at idle."
      }), "\n", createVNode(_components.li, {
        children: "Observe the idle: it should be stable and consistent, without hunting or surging."
      }), "\n", createVNode(_components.li, {
        children: "Repeat the carb cleaner spray test to confirm no remaining leaks."
      }), "\n", createVNode(_components.li, {
        children: "If the idle is now stable but set too high, adjust the idle speed screw (clockwise to lower) until the engine idles at approximately 1,500–1,800 rpm."
      }), "\n", createVNode(_components.li, {
        children: ["On EFI scooters, clear any stored fault codes (see ", createVNode(_components.a, {
          href: "gy6-efi-cel-flash-codes.html",
          children: "CEL flash codes guide"
        }), ") and confirm the CEL does not return after a short ride."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "related-guides",
      children: "Related Guides"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "gy6-no-start-troubleshooting.html",
          children: "GY6 Won’t Start — Troubleshooting Checklist"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "gy6-carburetor-pilot-idle-jet.html",
          children: "Carburetor Pilot & Idle Jet Diagnosis"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "gy6-efi-cel-flash-codes.html",
          children: "GY6 EFI CEL Flash Codes Reference"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/repair-guides/gy6-carburetor-cleaning-guide.html",
          children: "GY6 Carburetor Cleaning Guide"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Sources: GY6 service documentation; scootdawg.com community diagnostics; modernvespa.com forum threads on vacuum leaks. Licensed CC BY-SA 4.0."
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

const url = "src/content/diagnostics/gy6-air-leak-diagnosis.mdx";
const file = "/sessions/friendly-eager-maxwell/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-air-leak-diagnosis.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/friendly-eager-maxwell/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-air-leak-diagnosis.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
