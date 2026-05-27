import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_C3Md0h36.mjs';
import { $ as $$VideoEmbed } from './VideoEmbed_BrYUpKbm.mjs';
import { $ as $$Callout } from './Callout_D3IY9IaT.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 EFI Hard Start — Intake Flooding Fix",
  "description": "GY6 EFI hard starting caused by intake flooding — cracked intake insulator gasket or leaking fuel injector. Diagnosis and repair guide with real photos and…",
  "publishDate": "2026-05-19",
  "updatedDate": "2026-05-19",
  "difficulty": "Intermediate",
  "timeEstimate": "~30 min",
  "tags": ["GY6 EFI", "Hard Starting", "Intake Flooding", "Intake Insulator", "Fuel Injector", "Throttle Body", "157QMJ"],
  "appliesTo": [],
  "videos": [{
    "id": "ywegXGFAnCs",
    "title": "GY6 EFI hard start — intake flooding from cracked insulator and leaking injector",
    "creator": "YouTube",
    "position": "hero"
  }],
  "sources": [],
  "canonical": "https://ismr.online/repair-guides/gy6-efi-hard-start-intake-flooding.html",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-is-intake-flooding-on-an-efi-scooter",
    "text": "What Is Intake Flooding on an EFI Scooter?"
  }, {
    "depth": 3,
    "slug": "video-efi-intake-flooding--real-example",
    "text": "Video: EFI Intake Flooding — Real Example"
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
    "slug": "cause-2--leaking-fuel-injector",
    "text": "Cause 2 — Leaking Fuel Injector"
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
    "slug": "step-3--inspect-the-fuel-injector-o-rings",
    "text": "Step 3 — Inspect the Fuel Injector O-Rings"
  }, {
    "depth": 3,
    "slug": "step-4--replace-the-intake-insulator",
    "text": "Step 4 — Replace the Intake Insulator"
  }, {
    "depth": 3,
    "slug": "step-5--replace-the-injector-o-rings",
    "text": "Step 5 — Replace the Injector O-Rings"
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
      id: "what-is-intake-flooding-on-an-efi-scooter",
      children: "What Is Intake Flooding on an EFI Scooter?"
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "This guide covers EFI (fuel-injected) GY6 engines only"
        }), " — scooters with a throttle body, fuel injector, and ECU. There is no float bowl or needle valve. If your scooter has a carburetor with a float bowl, see the ", createVNode(_components.a, {
          href: "gy6-hard-start-intake-flooding.html",
          children: "GY6 Carburetor Intake Flooding guide"
        }), " instead."]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Most hard-start guides tell you the engine is starved of fuel. This guide covers the opposite problem: ", createVNode(_components.strong, {
        children: "too much fuel in the intake"
      }), ". When excess petrol pools in the intake port or cylinder, the spark plug drowns and cannot ignite the mixture. The engine cranks normally but refuses to fire — or fires once with a cough of black smoke and immediately dies."]
    }), "\n", createVNode(_components.p, {
      children: ["On EFI GY6 engines, intake flooding has two common causes: a ", createVNode(_components.strong, {
        children: "cracked rubber intake insulator"
      }), " (the mounting block between the throttle body and the cylinder head) or a ", createVNode(_components.strong, {
        children: "leaking fuel injector"
      }), " that drips raw fuel into the intake port when the engine is switched off. Both allow liquid fuel to pool in the port rather than being delivered as a precisely metered mist on demand."]
    }), "\n", createVNode(_components.h3, {
      id: "video-efi-intake-flooding--real-example",
      children: "Video: EFI Intake Flooding — Real Example"
    }), "\n", createVNode($$VideoEmbed, {
      videoId: "ywegXGFAnCs",
      title: "GY6 EFI hard start — intake flooding from cracked insulator and leaking injector",
      creator: "YouTube"
    }), "\n", createVNode(_components.p, {
      children: "Video shows a real EFI scooter with fuel pooled in the intake — cracked insulator and injector leak identified and repaired."
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
            children: "No fault codes on the ECU (flooding is a mechanical problem, not a sensor fault)"
          }), createVNode("td", {
            children: "Supports flooding diagnosis"
          })]
        })]
      })
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Do not confuse with a lean no-start."
        }), " A lean no-start (blocked injector, failed fuel pump, bad TPS) produces a dry, light-coloured spark plug. An intake flood produces a wet, fuel-soaked plug. Remove the plug first — it tells you immediately which problem you are dealing with. If you have ECU fault codes, check the ", createVNode(_components.a, {
          href: "/diagnostics/gy6-efi-fuel-injection-troubleshooting.html",
          children: "EFI Fuel Injection Troubleshooting guide"
        }), " first."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "the-two-main-causes",
      children: "The Two Main Causes"
    }), "\n", createVNode(_components.h3, {
      id: "cause-1--cracked-intake-insulator-manifold-gasket-block",
      children: "Cause 1 — Cracked Intake Insulator (Manifold Gasket Block)"
    }), "\n", createVNode(_components.p, {
      children: "The intake insulator is the rubber block connecting the throttle body to the cylinder head inlet port. It absorbs vibration and provides a heat barrier. After several years, the rubber cracks — often across the top, along the inner bore, or at the mounting flange. On an EFI engine, a cracked insulator allows unmetered air in (confusing the ECU’s fuelling calculations) and, critically, lets condensed or dripped fuel bypass the intake air path and pool directly in the port."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/repair-guides/images/intake_gasket_broken.jpg",
        alt: "Cracked GY6 rubber intake insulator held in hand, showing a visible crack across the top of the inner bore"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Cracked intake insulator."
      }), " Crack visible across the top of the inner bore — this is the rubber block between the throttle body and the cylinder head. Once cracked, it must be replaced; silicone is not a permanent fix."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/repair-guides/images/intake_full_of_fuel.png",
        alt: "GY6 EFI engine intake port with fuel pooled inside, visible as wet residue around the port opening"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Intake port flooded with fuel."
      }), " Fuel has pooled in the intake port — this is what the engine encounters when a cracked insulator or leaking injector allows raw fuel to collect rather than reaching the cylinder as a calibrated mist."]
    }), "\n", createVNode(_components.h3, {
      id: "cause-2--leaking-fuel-injector",
      children: "Cause 2 — Leaking Fuel Injector"
    }), "\n", createVNode(_components.p, {
      children: "The fuel injector on a GY6 EFI engine is held in the intake manifold by two rubber O-rings (top and bottom). When these O-rings harden and crack with age, fuel weeps past the seal and drips into the intake port while the engine is at rest — the fuel rail remains pressurised for some time after the engine is switched off. Even a slow drip accumulates quickly enough to flood the cylinder overnight. A leaking injector body itself (cracked solenoid housing, degraded pintle seal) is less common but produces the same symptom."
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Quick check:"
        }), " Switch off the engine and wait 5 minutes. Remove the air intake duct and shine a torch into the throttle body bore. If you can see a wet sheen or fuel droplets on the port walls — and the engine has been off for several minutes — the injector is leaking past its seals."]
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
            children: "Clamp screws, air duct clips"
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
            children: "Intake insulator mounting nuts"
          }), createVNode("td", {
            children: "—"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Torx T20 or T25 (varies by model)"
          }), createVNode("td", {
            children: "Throttle body mounting screws on some models"
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
            children: "GY6 EFI intake insulator (rubber manifold block)"
          }), createVNode("td", {
            children: "Replace if cracked"
          }), createVNode("td", {
            children: "€3–8"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Fuel injector O-ring kit"
          }), createVNode("td", {
            children: "Replace both O-rings if injector is weeping"
          }), createVNode("td", {
            children: "€2–5"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Replacement injector (same part number)"
          }), createVNode("td", {
            children: "Only if injector body itself is cracked or pintle seal failed"
          }), createVNode("td", {
            children: "€15–40"
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
        children: "Turn the ignition off. On EFI engines the fuel pump stays primed — if possible, locate the fuel pump fuse and remove it to depressurise the rail before opening anything."
      }), "\n", createVNode(_components.li, {
        children: "Remove the spark plug using a 16 mm plug socket. Inspect it: if it is wet and smells strongly of petrol, flooding is confirmed."
      }), "\n", createVNode(_components.li, {
        children: "With the plug still out, hold the throttle fully open and crank the engine for 5–8 seconds (electric starter). This expels excess fuel from the cylinder as vapour."
      }), "\n", createVNode(_components.li, {
        children: "Leave the plug out for 5–10 minutes to allow the cylinder to air out further."
      }), "\n", createVNode(_components.li, {
        children: "Reinstall the spark plug (or a new one if the old plug is fuel-fouled). Tighten finger-tight plus one-quarter turn."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Test start now:"
        }), " Reinstall the fuel pump fuse, turn the ignition on, wait for the pump prime cycle (2–3 seconds), then start. If it starts and runs normally, the flooding was a one-off event. If it floods again within minutes of stopping — there is an underlying leak to fix."]
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-2--inspect-the-intake-insulator",
      children: "Step 2 — Inspect the Intake Insulator"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Remove the side panel or access cover to expose the throttle body."
      }), "\n", createVNode(_components.li, {
        children: "Loosen both clamps securing the throttle body — the air duct side and the head-side insulator clamp."
      }), "\n", createVNode(_components.li, {
        children: "Twist and pull the throttle body slightly away from the insulator to expose it. You do not need to disconnect all wiring harness connectors at this stage — just rotate it enough to see the insulator."
      }), "\n", createVNode(_components.li, {
        children: "Squeeze and flex the insulator in all directions. Cracks often hide on the inner bore surface, along the top edge, or at the head-facing flange. Look for crazing, splits, or any visible gap."
      }), "\n", createVNode(_components.li, {
        children: "CRACKED: Replace immediately — see Step 4."
      }), "\n", createVNode(_components.li, {
        children: "INTACT: Refit the throttle body clamp. Proceed to Step 3 to check the injector."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-3--inspect-the-fuel-injector-o-rings",
      children: "Step 3 — Inspect the Fuel Injector O-Rings"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "With the fuel pump fuse removed, fully disconnect the throttle body (harness connectors, throttle cable, coolant hoses if fitted). Set it on a clean rag."
      }), "\n", createVNode(_components.li, {
        children: "Locate the fuel injector — it sits in a bore in the intake manifold or throttle body, held by a retaining clip or bracket. Release the clip and pull the injector straight out."
      }), "\n", createVNode(_components.li, {
        children: "Inspect both O-rings on the injector body. They should be soft, uniformly round, and black. If they are flat, cracked, or shiny-hardened, they are no longer sealing."
      }), "\n", createVNode(_components.li, {
        children: "Also inspect the injector body for fuel staining or wetness at the O-ring grooves — this confirms the leak path."
      }), "\n", createVNode(_components.li, {
        children: "O-RINGS DEGRADED: Replace with a new O-ring kit — see Step 5."
      }), "\n", createVNode(_components.li, {
        children: "INJECTOR BODY DAMAGED: Replace the entire injector — match the part number stamped on the injector body."
      }), "\n", createVNode(_components.li, {
        children: "O-RINGS INTACT: Reinstall and check float height (not applicable — EFI). Re-examine for other causes such as a leaking fuel pressure regulator or a failed fuel pump check valve holding rail pressure after shutdown."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-4--replace-the-intake-insulator",
      children: "Step 4 — Replace the Intake Insulator"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Fully disconnect the throttle body (wiring harness, throttle cable, breather hoses) and set it aside."
      }), "\n", createVNode(_components.li, {
        children: "Remove the two M6 nuts or bolts holding the insulator to the cylinder head studs. Use a 10 mm spanner or socket."
      }), "\n", createVNode(_components.li, {
        children: "Pull the insulator free. Clean the cylinder head mating face — remove any old gasket material or debris."
      }), "\n", createVNode(_components.li, {
        children: "Fit the new insulator. Ensure the paper or rubber gasket on the head-facing side is in place. Tighten the mounting nuts evenly to approximately 10 Nm — do not overtighten in the aluminium head."
      }), "\n", createVNode(_components.li, {
        children: "Refit the throttle body into the insulator bore. Tighten both clamps firmly but not so tight that the clamp cuts into the rubber."
      }), "\n", createVNode(_components.li, {
        children: "Reconnect all harness connectors, throttle cable, and hoses."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Do not use RTV silicone"
        }), " on the intake insulator as a repair or seal. Silicone pieces can detach and enter the engine. Always replace with a new insulator."]
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-5--replace-the-injector-o-rings",
      children: "Step 5 — Replace the Injector O-Rings"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Source an O-ring kit for your injector. Most GY6 EFI injectors use standard 14 mm × 1.5 mm and 11 mm × 1.5 mm Viton O-rings — confirm by measuring the old ones or searching your injector part number."
      }), "\n", createVNode(_components.li, {
        children: "Lubricate the new O-rings lightly with clean engine oil before fitting — this prevents tearing on installation and ensures a proper seat."
      }), "\n", createVNode(_components.li, {
        children: "Slide both O-rings onto the injector body into their respective grooves."
      }), "\n", createVNode(_components.li, {
        children: "Push the injector squarely back into its bore in the manifold. It should seat without force — if it resists, check the O-ring is not folded or misaligned."
      }), "\n", createVNode(_components.li, {
        children: "Refit the retaining clip or bracket so the injector cannot be pushed out by fuel pressure."
      }), "\n", createVNode(_components.li, {
        children: "Reconnect the fuel rail and injector electrical connector."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-6--verify-the-repair",
      children: "Step 6 — Verify the Repair"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Reinstall the fuel pump fuse. Turn the ignition to ON (do not start) — you should hear the pump prime for 2–3 seconds. Wait 60 seconds and check around the injector and manifold for any fuel drips."
      }), "\n", createVNode(_components.li, {
        children: "If no drips: start the engine and allow it to reach operating temperature (approximately 4–5 minutes)."
      }), "\n", createVNode(_components.li, {
        children: "Switch the engine off and wait 10 minutes. Remove the spark plug and confirm it is dry. Reinstall and start normally."
      }), "\n", createVNode(_components.li, {
        children: "A cold start should now require just the normal key-on pump prime and one or two cranks."
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
            children: "Injector O-ring not seated correctly, or injector body itself is cracked"
          }), createVNode("td", {
            children: "Re-inspect O-rings. If body has visible cracks or fuel staining through the housing, replace the whole injector."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Floods after sitting overnight but not immediately"
          }), createVNode("td", {
            children: "Fuel pump check valve failed — rail depressurises slowly, injector weeps under lower pressure"
          }), createVNode("td", {
            children: "Replace the fuel pump assembly (check valve is internal). Confirm by installing a fuel rail pressure gauge and watching if pressure bleeds off after shutdown."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Erratic idle after insulator replacement"
          }), createVNode("td", {
            children: "Throttle body-to-insulator clamp loose, or air duct not reseated"
          }), createVNode("td", {
            children: ["Tighten both clamps. Re-run the spray test from the ", createVNode("a", {
              href: "/diagnostics/gy6-air-leak-diagnosis.html",
              children: "Air Leak Diagnosis guide"
            }), ". Check for new ECU fault codes (unmetered air will upset fuelling trim)."]
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "CEL / fault code after repair"
          }), createVNode("td", {
            children: "ECU learned incorrect fuel trim during the flooding period"
          }), createVNode("td", {
            children: "Clear fault codes with a diagnostic tool or by disconnecting the battery for 30 seconds. Allow the ECU to re-learn idle trim over a short test ride."
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "related-guides",
      children: "Related Guides"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "gy6-hard-start-intake-flooding.html",
          children: "GY6 Carburetor Hard Start: Intake Flooding (cracked insulator & needle valve — carbureted engines)"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/diagnostics/gy6-efi-fuel-injection-troubleshooting.html",
          children: "GY6 EFI Fuel Injection Troubleshooting (fault codes, fuel pump, sensors)"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/diagnostics/gy6-air-leak-diagnosis.html",
          children: "Diagnosing Air Leaks & Vacuum Sucking (lean air leak — opposite problem)"
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
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Photos: original ISMR content (CC BY-SA 4.0). Video: YouTube. Sources: GY6 EFI service documentation; community-contributed real-world repair cases. Last updated: 2026-05-10. Licensed CC BY-SA 4.0."
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

const url = "src/content/repair-guides/gy6-efi-hard-start-intake-flooding.mdx";
const file = "/sessions/sharp-gifted-meitner/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-efi-hard-start-intake-flooding.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/sharp-gifted-meitner/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-efi-hard-start-intake-flooding.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
