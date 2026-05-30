import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_CuGQ4WK_.mjs';
import './VideoEmbed_xzJISfAr.mjs';
import { $ as $$Callout } from './Callout_QX-gPCwg.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 Hard Start — Cracked Insulator & Carb Overflow",
  "description": "GY6 hard starting caused by intake flooding — cracked intake insulator gasket or leaking carburetor needle valve. Diagnosis and repair guide with real photos.",
  "publishDate": "2026-05-19",
  "updatedDate": "2026-05-19",
  "difficulty": "Intermediate",
  "timeEstimate": "~30 min",
  "tags": ["GY6", "Hard Starting", "Intake Flooding", "Intake Insulator", "Needle Valve", "139QMB", "157QMJ"],
  "appliesTo": ["GY6 50cc (139QMB)", "GY6 125cc (152QMI)", "GY6 150cc (157QMJ)", "BTC Riva", "La Souris Sourini", "La Souris City S", "Santini Capri"],
  "videos": [],
  "sources": [],
  "canonical": "https://ismr.online/repair-guides/gy6-hard-start-intake-flooding.html",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-is-intake-flooding",
    "text": "What Is Intake Flooding?"
  }, {
    "depth": 2,
    "slug": "symptoms",
    "text": "Symptoms"
  }, {
    "depth": 2,
    "slug": "the-two-main-causes",
    "text": "The Two Main Causes"
  }, {
    "depth": 3,
    "slug": "cause-1--cracked-intake-insulator-manifold-gasket-block",
    "text": "Cause 1 — Cracked Intake Insulator (Manifold Gasket Block)"
  }, {
    "depth": 3,
    "slug": "cause-2--leaking-needle-valve-float-chamber-overflow",
    "text": "Cause 2 — Leaking Needle Valve (Float Chamber Overflow)"
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
    "slug": "step-1--confirm-flooding-and-clear-the-cylinder",
    "text": "Step 1 — Confirm Flooding and Clear the Cylinder"
  }, {
    "depth": 3,
    "slug": "step-2--inspect-the-intake-insulator",
    "text": "Step 2 — Inspect the Intake Insulator"
  }, {
    "depth": 3,
    "slug": "step-3--inspect-the-carburetor-needle-valve",
    "text": "Step 3 — Inspect the Carburetor Needle Valve"
  }, {
    "depth": 3,
    "slug": "step-4--replace-the-intake-insulator",
    "text": "Step 4 — Replace the Intake Insulator"
  }, {
    "depth": 3,
    "slug": "step-5--replace-the-needle-valve",
    "text": "Step 5 — Replace the Needle Valve"
  }, {
    "depth": 3,
    "slug": "step-6--verify-the-repair",
    "text": "Step 6 — Verify the Repair"
  }, {
    "depth": 2,
    "slug": "troubleshooting-table",
    "text": "Troubleshooting Table"
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
      id: "what-is-intake-flooding",
      children: "What Is Intake Flooding?"
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "This guide covers carbureted GY6 engines only"
        }), " (PD18/PD22/PD24 and CVK-type carburetors). It does not apply to EFI/injected scooters — those have a fuel injector controlled by an ECU, which is a different system entirely. If your scooter has a throttle body and no float bowl, see the ", createVNode(_components.a, {
          href: "/diagnostics/gy6-efi-fuel-injection-troubleshooting.html",
          children: "EFI Fuel Injection Troubleshooting guide"
        }), " instead."]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Most hard-start guides tell you the engine is starved of fuel. This guide covers the opposite problem: ", createVNode(_components.strong, {
        children: "too much fuel in the intake"
      }), ". When excess petrol collects in the intake port or cylinder, the spark plug drowns and cannot ignite the mixture. The engine cranks normally but refuses to fire — or fires once with a cough of black smoke and immediately dies."]
    }), "\n", createVNode(_components.p, {
      children: ["On carbureted GY6 engines, this flooding usually has one of two causes: a ", createVNode(_components.strong, {
        children: "cracked rubber intake insulator"
      }), " (the mounting block between the carburetor and the cylinder head) or a ", createVNode(_components.strong, {
        children: "leaking needle valve"
      }), " inside the carburetor float chamber. Both allow raw fuel to pool in the intake port rather than being drawn through as a calibrated mist."]
    }), "\n", createVNode(_components.h2, {
      id: "symptoms",
      children: "Symptoms"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Symptom"
          }), createVNode("th", {
            children: "Flooding Likelihood"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Engine cranks freely but will not fire at all"
          }), createVNode("td", {
            children: "High"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Starts briefly, fires once or twice, then immediately dies"
          }), createVNode("td", {
            children: "Very high"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Black smoke from the exhaust on the rare occasions it fires"
          }), createVNode("td", {
            children: "Very high"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Strong petrol smell from the airbox or around the engine"
          }), createVNode("td", {
            children: "High"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Spark plug electrode is wet and smells of petrol when removed"
          }), createVNode("td", {
            children: "Definitive confirmation"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Engine starts after leaving it overnight (fuel evaporates)"
          }), createVNode("td", {
            children: "High"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Fuel visible or wet residue inside the intake port"
          }), createVNode("td", {
            children: "Definitive confirmation"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Engine starts on the kick but not on the starter motor (starter cranks faster, worsening the flood)"
          }), createVNode("td", {
            children: "Medium"
          })]
        })]
      })
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Do not confuse with a lean no-start."
        }), " A lean no-start (caused by a blocked pilot jet or air leak) produces a dry, light-coloured spark plug. An intake flood produces a wet, fuel-soaked plug. Remove the plug first — it tells you immediately which problem you are dealing with."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "the-two-main-causes",
      children: "The Two Main Causes"
    }), "\n", createVNode(_components.h3, {
      id: "cause-1--cracked-intake-insulator-manifold-gasket-block",
      children: "Cause 1 — Cracked Intake Insulator (Manifold Gasket Block)"
    }), "\n", createVNode(_components.p, {
      children: "The intake insulator is the rubber or plastic-rubber block that connects the carburetor to the cylinder head inlet port. It absorbs vibration and provides a heat barrier. After several years, the rubber cracks — often across the top, along the inner bore, or at the mounting flange. A cracked insulator does two things: it introduces an air leak (lean symptoms at idle) and, critically, it allows liquid fuel that condenses on the carburetor inlet face to drip directly into the intake port rather than being vaporised into the airflow."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/repair-guides/images/intake_gasket_broken.jpg",
        alt: "Cracked GY6 rubber intake insulator held in hand, showing a visible crack across the top of the inner bore"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Cracked intake insulator."
      }), " Crack visible across the top of the inner bore. This insulator is from a GY6 engine — the crack allows fuel to drip straight into the intake port rather than being drawn in as vapour."]
    }), "\n", createVNode(_components.h3, {
      id: "cause-2--leaking-needle-valve-float-chamber-overflow",
      children: "Cause 2 — Leaking Needle Valve (Float Chamber Overflow)"
    }), "\n", createVNode(_components.p, {
      children: ["The needle valve (also called the float valve or fuel shutoff needle) controls how much fuel enters the float bowl. It is a small brass or plastic needle with a rubber cone that seats against a brass seat when the float rises to the correct level. If the rubber cone is worn (it develops a visible groove after 3–5 years), the needle no longer seals — fuel continues entering the bowl, overfills it, and overflows through the pilot circuit and idle port directly into the intake bore. This is sometimes called a ", createVNode(_components.strong, {
        children: "rich flooding condition"
      }), " and is distinct from a stuck or misadjusted float, though the result is the same."]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Quick check:"
        }), " Remove the fuel line from the carburetor with the fuel tap open (engine off). If fuel runs freely even after you manually lift the float to the closed position, the needle valve is not sealing and must be replaced."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "tools--parts-needed",
      children: "Tools & Parts Needed"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Item"
          }), createVNode("th", {
            children: "Why needed"
          }), createVNode("th", {
            children: "Approx. cost"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Flat-blade screwdriver (3 mm & 5 mm)"
          }), createVNode("td", {
            children: "Carburetor screws, clamp screws"
          }), createVNode("td", {
            children: "—"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Phillips #2 screwdriver"
          }), createVNode("td", {
            children: "Side panel screws, air filter cover"
          }), createVNode("td", {
            children: "—"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "10 mm spanner"
          }), createVNode("td", {
            children: "Intake insulator mounting nuts (if present)"
          }), createVNode("td", {
            children: "—"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Clean rags"
          }), createVNode("td", {
            children: "Absorbing spilled fuel"
          }), createVNode("td", {
            children: "—"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "GY6 intake insulator (rubber manifold gasket block)"
          }), createVNode("td", {
            children: "Replace if cracked"
          }), createVNode("td", {
            children: "€2–5"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Carburetor needle valve kit"
          }), createVNode("td", {
            children: "Replace if leaking (usually sold with float bowl gasket)"
          }), createVNode("td", {
            children: "€3–8"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Spark plug (NGK CR6HIX or equivalent)"
          }), createVNode("td", {
            children: "Replace if plug was severely fouled with fuel"
          }), createVNode("td", {
            children: "€4–8"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "step-by-step-procedure",
      children: "Step-by-Step Procedure"
    }), "\n", createVNode(_components.h3, {
      id: "step-1--confirm-flooding-and-clear-the-cylinder",
      children: "Step 1 — Confirm Flooding and Clear the Cylinder"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Turn the fuel tap to ", createVNode(_components.strong, {
          children: "OFF"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Remove the spark plug using a 16 mm plug socket. Inspect it: if it is wet and smells strongly of petrol, flooding is confirmed."
      }), "\n", createVNode(_components.li, {
        children: "With the plug still out, hold the throttle fully open and crank the engine for 5–8 seconds (electric starter or kick). This expels excess fuel from the cylinder as vapour."
      }), "\n", createVNode(_components.li, {
        children: "Leave the plug out for 5–10 minutes to allow the cylinder to air out further."
      }), "\n", createVNode(_components.li, {
        children: "Reinstall the spark plug (or a new one if the old plug is fuel-fouled). Tighten finger-tight plus one-quarter turn — do not overtighten in the aluminium head."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Test start now:"
        }), " With fuel tap back to ON, try starting. If it starts and runs normally, the flooding was a one-off event (perhaps the scooter was left on its side, or the fuel tap was left on PRI overnight). If it floods again within minutes of stopping — there is an underlying leak to fix."]
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-2--inspect-the-intake-insulator",
      children: "Step 2 — Inspect the Intake Insulator"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Remove the side panel or access cover to expose the carburetor."
      }), "\n", createVNode(_components.li, {
        children: "Loosen (do not remove) both clamps — the airbox-side clamp and the head-side clamp — so the carburetor can twist free."
      }), "\n", createVNode(_components.li, {
        children: "Twist and pull the carburetor away from the insulator. You do not need to disconnect throttle or fuel lines at this stage — just push the carb aside far enough to see the insulator."
      }), "\n", createVNode(_components.li, {
        children: "Inspect the insulator carefully: squeeze and flex it in all directions. Cracks often hide on the inner bore surface, along the top edge, or at the head-facing flange. Look for crazing, splits, or any visible gap."
      }), "\n", createVNode(_components.li, {
        children: "CRACKED: Replace immediately — see Step 4. Do not seal with RTV; a cracked insulator must be replaced with a new one."
      }), "\n", createVNode(_components.li, {
        children: "INTACT: Reinstall the carburetor. Proceed to Step 3 to check the needle valve."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-3--inspect-the-carburetor-needle-valve",
      children: "Step 3 — Inspect the Carburetor Needle Valve"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "With the fuel tap off, remove the float bowl retaining screw and lower the bowl carefully."
      }), "\n", createVNode(_components.li, {
        children: "Slide out the float hinge pin and lift out the float assembly. The needle valve will come away attached to the float arm or hanging from the float seat."
      }), "\n", createVNode(_components.li, {
        children: "Inspect the needle valve tip (the rubber or brass cone). If you can see a groove worn into the rubber, the needle is no longer sealing properly."
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Bench test:"
        }), " Blow through the carburetor fuel inlet nipple while holding the float in the raised (closed) position. You should feel complete resistance — zero air should pass. If air passes easily, the needle is not seating and must be replaced."]
      }), "\n", createVNode(_components.li, {
        children: "LEAKING: Replace the needle valve — see Step 5."
      }), "\n", createVNode(_components.li, {
        children: "SEALING: Check float height: with the carb body held so the float bowl face is horizontal, the float arms should be parallel to or just slightly below that face. If the float is sitting too low (too much fuel allowed in), bend the tab that contacts the needle valve slightly upward to raise the float level."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-4--replace-the-intake-insulator",
      children: "Step 4 — Replace the Intake Insulator"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Fully disconnect the carburetor (throttle cable, fuel line, choke cable) and set it aside on a clean rag."
      }), "\n", createVNode(_components.li, {
        children: "Remove the two M6 nuts or bolts holding the insulator to the cylinder head studs. These are often behind the insulator flange — use a 10 mm spanner or socket."
      }), "\n", createVNode(_components.li, {
        children: "Pull the insulator free. Clean the cylinder head mating face with a rag — remove any old gasket material or debris."
      }), "\n", createVNode(_components.li, {
        children: "Fit the new insulator. On most GY6 engines the insulator has a paper or thin rubber gasket on the head-facing side — do not omit it. Tighten the mounting nuts evenly to approximately 10 Nm (hand-tight plus about one-quarter turn with a spanner). Do not overtighten — the aluminium head threads strip easily."
      }), "\n", createVNode(_components.li, {
        children: "Refit the carburetor into the insulator bore. Push it in squarely and tighten both clamps — firm, but not so tight that the clamp bites into the rubber."
      }), "\n", createVNode(_components.li, {
        children: "Reconnect the fuel line, throttle cable, and choke cable."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Do not use RTV silicone or exhaust paste"
        }), " on the intake insulator as a repair or seal. Silicone pieces can detach and enter the engine. Always replace with a new insulator — they cost €2–5 and are a consumable service item."]
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-5--replace-the-needle-valve",
      children: "Step 5 — Replace the Needle Valve"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Source a replacement needle valve for your carburetor model. For GY6 PD18/PD22/PD24 carburetors, a standard GY6 carburetor rebuild kit (€3–8) includes the needle valve, float bowl O-ring, and main jet O-ring — replacing all of these at once while the carb is open is good practice."
      }), "\n", createVNode(_components.li, {
        children: "Remove the old needle valve from the float arm clip or the float seat housing."
      }), "\n", createVNode(_components.li, {
        children: "Seat the new needle valve. Press it gently into the seat housing — it should drop in squarely. Attach the float arm."
      }), "\n", createVNode(_components.li, {
        children: "Set float height: hold the carb body with the bowl-mating face level. The float arms should be parallel to that face (±1 mm). Adjust by carefully bending the small brass tab on the float arm that contacts the needle valve tip."
      }), "\n", createVNode(_components.li, {
        children: "Install a new float bowl O-ring if one is included in the kit. Refit the bowl and tighten the retaining screw — snug, not tight."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-6--verify-the-repair",
      children: "Step 6 — Verify the Repair"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Turn the fuel tap to ON. Wait 60 seconds — do not start yet. Check underneath the carburetor for any fuel drips (indicates the needle valve is still not seating or the float bowl O-ring is pinched)."
      }), "\n", createVNode(_components.li, {
        children: "If no drips: start the engine and allow it to reach operating temperature (approximately 4–5 minutes)."
      }), "\n", createVNode(_components.li, {
        children: "Observe idle quality. If it was previously erratic due to the cracked insulator admitting unmetered air, it should now be smoother. Adjust the idle speed screw as needed."
      }), "\n", createVNode(_components.li, {
        children: "After the engine has cooled and sat for 30 minutes, remove the spark plug and confirm it is dry. Reinstall and start normally. A cold start should now require just choke + one or two cranks."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "troubleshooting-table",
      children: "Troubleshooting Table"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Problem after repair"
          }), createVNode("th", {
            children: "Likely cause"
          }), createVNode("th", {
            children: "Action"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Still floods immediately after stopping"
          }), createVNode("td", {
            children: "Needle valve not seating — wrong part, seated crooked, or seat itself is damaged"
          }), createVNode("td", {
            children: "Re-inspect needle and seat. If seat has a groove worn into it, the carb body needs replacement."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Floods after sitting for an hour"
          }), createVNode("td", {
            children: "Fuel tap (petcock) not closing — diaphragm failed"
          }), createVNode("td", {
            children: "Test by turning tap to OFF after every ride. If flooding stops, replace the fuel tap diaphragm."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Erratic idle after insulator replacement"
          }), createVNode("td", {
            children: "Carb-to-insulator clamp loose, or air filter joint not reseated"
          }), createVNode("td", {
            children: ["Tighten both clamps. Re-run the spray test from the ", createVNode("a", {
              href: "/diagnostics/gy6-air-leak-diagnosis.html",
              children: "Air Leak Diagnosis guide"
            }), "."]
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Starts fine but runs rich (black smoke, poor fuel economy)"
          }), createVNode("td", {
            children: "Float level set too low after needle valve replacement"
          }), createVNode("td", {
            children: "Re-open float bowl, re-check float height, bend the tab to raise the float slightly."
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "related-guides",
      children: "Related Guides"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/diagnostics/gy6-air-leak-diagnosis.html",
          children: "Diagnosing Air Leaks & Vacuum Sucking (lean air leak — opposite problem)"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "gy6-carburetor-cleaning-guide.html",
          children: "GY6 Carburetor Deep-Cleaning Guide"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/diagnostics/gy6-no-start-troubleshooting.html",
          children: "GY6 Won’t Start — Full Troubleshooting Checklist"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "gy6-spark-plug-guide.html",
          children: "Reading Your Spark Plug — Fuel, Oil, and Heat Diagnosis"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "gy6-carburetor-adjustment-guide.html",
          children: "GY6 Carburetor Adjustment & Tuning"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Photos: original ISMR content (CC BY-SA 4.0). Sources: GY6 service documentation; scootdawg.com community diagnostics; community-contributed real-world repair cases. Last updated: 2026-05-10. Licensed CC BY-SA 4.0."
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

const url = "src/content/repair-guides/gy6-hard-start-intake-flooding.mdx";
const file = "/sessions/ecstatic-zealous-goldberg/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-hard-start-intake-flooding.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/ecstatic-zealous-goldberg/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-hard-start-intake-flooding.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
