import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_DdzkH7gs.mjs';
import './VideoEmbed_CgkNQ7QK.mjs';
import { $ as $$Callout } from './Callout_CxV-zfuj.mjs';
import 'clsx';

const frontmatter = {
  "title": "Piaggio ZIP 50/100 4T — Troubleshooting Guide",
  "description": "Interactive troubleshooting guide for Piaggio Zip 50/100. Diagnose no-start, poor idle, and performance issues on 2-stroke and 4-stroke Zip scooter platforms.",
  "publishDate": "2026-05-10",
  "updatedDate": "2026-05-10",
  "difficulty": "Beginner",
  "timeEstimate": "~30 min",
  "tags": ["Piaggio", "ZIP 50", "ZIP 100", "Carburetor", "Diagnostics"],
  "appliesTo": ["Piaggio Zip 50 4T", "Piaggio Zip 100 4T"],
  "videos": [],
  "sources": [],
  "canonical": "https://ismr.online/diagnostics/piaggio-zip-100-troubleshooting.html",
  "draft": false,
  "category": "starting",
  "engine": "piaggio",
  "fuel": "carb",
  "section": "Piaggio ZIP 50/100 4T",
  "cardTag": "Piaggio · Official"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "engine-will-not-start--difficult-to-start",
    "text": "Engine Will Not Start / Difficult to Start"
  }, {
    "depth": 3,
    "slug": "-1-check-the-spark-plug-first",
    "text": "🔌 1. Check the Spark Plug First"
  }, {
    "depth": 3,
    "slug": "-2-check-fuel-supply",
    "text": "⛽ 2. Check Fuel Supply"
  }, {
    "depth": 3,
    "slug": "️-3-check-the-automatic-cold-start-device-choke",
    "text": "🌡️ 3. Check the Automatic Cold-Start Device (Choke)"
  }, {
    "depth": 3,
    "slug": "-4-check-the-battery--starter-motor",
    "text": "🔋 4. Check the Battery & Starter Motor"
  }, {
    "depth": 2,
    "slug": "poor-engine-performance--loss-of-power",
    "text": "Poor Engine Performance / Loss of Power"
  }, {
    "depth": 3,
    "slug": "-low-compression",
    "text": "📉 Low Compression"
  }, {
    "depth": 3,
    "slug": "-general-power-loss-compression-ok",
    "text": "🐌 General Power Loss (Compression OK)"
  }, {
    "depth": 2,
    "slug": "excessive-fuel-consumption",
    "text": "Excessive Fuel Consumption"
  }, {
    "depth": 2,
    "slug": "rear-wheel-spins-at-idle",
    "text": "Rear Wheel Spins at Idle"
  }, {
    "depth": 2,
    "slug": "clutch-faults",
    "text": "Clutch Faults"
  }, {
    "depth": 2,
    "slug": "quick-reference-diagnostic-table",
    "text": "Quick-Reference Diagnostic Table"
  }, {
    "depth": 2,
    "slug": "valve-clearance--quick-reference",
    "text": "Valve Clearance — Quick Reference"
  }, {
    "depth": 2,
    "slug": "related-pages",
    "text": "Related Pages"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Added: 2026-05-10  |  Updated: 2026-05-10  |  Sources: Official Piaggio MSS ZIP 100 4T Service Station Manual, ", createVNode(_components.a, {
        href: "https://www.manualslib.com/brand/piaggio/zip/",
        children: "ManualsLib — Piaggio ZIP"
      }), "  | "]
    }), "\n", createVNode(_components.p, {
      children: "Piaggio ZIP 50 ZIP 100 Carburetor Diagnostics"
    }), "\n", createVNode(_components.p, {
      children: "This guide covers the official fault diagnosis and remedy procedures for the Piaggio ZIP 50/100 4T as published in the Piaggio service station manual. Work systematically through each possible cause in order. If a problem persists after addressing all listed causes, the vehicle should be referred to an authorised Piaggio Service Centre."
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: ["️ ", createVNode(_components.strong, {
          children: "Safety first:"
        }), " Always work on a cold engine unless the fault can only be detected at operating temperature (e.g., oil leaks under pressure, idle hunting). Use wheel chocks. Petrol is highly flammable — keep away from open flames and ensure adequate ventilation."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "engine-will-not-start--difficult-to-start",
      children: "Engine Will Not Start / Difficult to Start"
    }), "\n", createVNode(_components.h3, {
      id: "-1-check-the-spark-plug-first",
      children: "🔌 1. Check the Spark Plug First"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            width: "35%",
            children: "Possible Cause"
          }), createVNode("th", {
            children: "Diagnosis & Remedy"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Defective spark plug or incorrect electrode gap"
            })
          }), createVNode("td", {
            children: ["Remove the spark plug and inspect. Replace if the insulator is chipped, cracked, or heavily fouled. Check the electrode gap with a feeler gauge — correct gap is ", createVNode("strong", {
              children: "0.7–0.8 mm"
            }), ". If worn, bend the outer electrode carefully to restore gap. Torque to 10–15 Nm on reinstallation.", createVNode("br", {}), createVNode("br", {}), createVNode("em", {
              children: "Correct spark plug: NGK CR9EB (100 cc) or NGK CR8EB (50 cc)."
            })]
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Incorrect valve sealing or valve adjustment"
            })
          }), createVNode("td", {
            children: ["Low compression prevents starting. Check compression with a gauge (should be consistent with 10.5–11.5:1 compression ratio). If low, remove the head and grind valve seats, descale valve heads, replace faulty parts as needed. Verify valve clearance: ", createVNode("strong", {
              children: "intake 0.10 mm, exhaust 0.15 mm"
            }), " (cold engine). Lock nuts torque: 7–9 Nm."]
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Wrong ignition advance"
            })
          }), createVNode("td", {
            children: "Check flywheel keying on the crankshaft. If the woodruff key is sheared or displaced, ignition timing will be off. Replace CDI control unit if advance values cannot be corrected mechanically."
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "-2-check-fuel-supply",
      children: "⛽ 2. Check Fuel Supply"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            width: "35%",
            children: "Possible Cause"
          }), createVNode("th", {
            children: "Diagnosis & Remedy"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Vacuum-operated fuel cock failure"
            })
          }), createVNode("td", {
            children: "The fuel tap on the ZIP is vacuum-operated. Check that fuel flows adequately through the pipe by applying a vacuum on the suction pipe. If fuel does not flow freely when vacuum is applied, replace the fuel tap."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Carburettor jets clogged or dirty"
            })
          }), createVNode("td", {
            children: "Disassemble the carburettor (KEIHIN CVK 20). Clean all passages with solvent and dry with compressed air. Verify main jet (75) and pilot jet (35) are clear and properly seated. Replace all gaskets on reassembly."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Altered or degraded fuel"
            })
          }), createVNode("td", {
            children: "If the scooter has been stored for extended periods, the petrol in the tank and carburettor bowl may have degraded. Drain all fuel from tank and carburettor. Refill with fresh unleaded petrol (minimum 95 RON)."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Engine flooded"
            })
          }), createVNode("td", {
            children: "If the engine has been repeatedly cranked without starting, it may be flooded (excess fuel in cylinder). To clear: hold the throttle fully open and crank the engine for approximately 5 seconds, then stop for 5 seconds. Repeat 3–4 times. If still flooded: remove the spark plug, crank with the throttle open (keep the HT cap touching the plug body, earthed away from the hole), refit a dry spark plug and attempt to start."
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "️-3-check-the-automatic-cold-start-device-choke",
      children: "🌡️ 3. Check the Automatic Cold-Start Device (Choke)"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            width: "35%",
            children: "Possible Cause"
          }), createVNode("th", {
            children: "Diagnosis & Remedy"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Automatic starter (choke) not functioning"
            })
          }), createVNode("td", {
            children: ["The ZIP uses an automatic thermostatic cold-start device on the carburettor. Check the electrical wiring and mechanical movement. If the starter device fails open (remains on when engine is warm), the engine will run very rich. Replace the starter device if defective. Starter piston protrusion should be ", createVNode("strong", {
              children: "11 mm at 24°C"
            }), "."]
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "-4-check-the-battery--starter-motor",
      children: "🔋 4. Check the Battery & Starter Motor"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            width: "35%",
            children: "Possible Cause"
          }), createVNode("th", {
            children: "Diagnosis & Remedy"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Battery discharged or sulphated"
            })
          }), createVNode("td", {
            children: "Check the battery state. If sluggish cranking, charge the battery. If the battery shows signs of sulphation (white crust on plates, will not hold charge), replace it. Charge a new battery for 8 hours at 1/10 of its capacity (e.g., 0.4 A for a 4 Ah battery) before first use."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Starter motor failure / start-up rpm too low"
            })
          }), createVNode("td", {
            children: "If the battery tests good but cranking is slow or the starter does not engage, check starter motor brushes, the starter relay, and wiring connections. A weak crank that can’t overcome compression indicates a failing starter motor or corroded wiring."
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "poor-engine-performance--loss-of-power",
      children: "Poor Engine Performance / Loss of Power"
    }), "\n", createVNode(_components.h3, {
      id: "-low-compression",
      children: "📉 Low Compression"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            width: "35%",
            children: "Possible Cause"
          }), createVNode("th", {
            children: "Diagnosis & Remedy"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Wrong valve adjustment"
            })
          }), createVNode("td", {
            children: ["Adjust valve clearance with a cold engine: ", createVNode("strong", {
              children: "intake 0.10 mm, exhaust 0.15 mm"
            }), ". Lock nuts torque: 7–9 Nm."]
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Incorrect valve sealing"
            })
          }), createVNode("td", {
            children: "Remove the head and valves. Grind valve seats, descale valve heads. Replace any cracked or bent valve. Check valve stem clearance."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Valve seat distorted"
            })
          }), createVNode("td", {
            children: "Replace the complete head assembly — seat distortion cannot be corrected by grinding alone."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Worn or broken piston rings"
            })
          }), createVNode("td", {
            children: ["Measure cylinder bore and piston clearance. Standard piston-cylinder clearance: ", createVNode("strong", {
              children: "0.038–0.052 mm"
            }), ". If bore is worn beyond first oversize (+0.2 mm), replace the piston and cylinder assembly. Piston rings are available in standard, 1st oversize (+0.2 mm), 2nd oversize (+0.4 mm), and 3rd oversize (+0.6 mm)."]
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "-general-power-loss-compression-ok",
      children: "🐌 General Power Loss (Compression OK)"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            width: "35%",
            children: "Possible Cause"
          }), createVNode("th", {
            children: "Diagnosis & Remedy"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Carburettor dirty / vacuum cock failure"
            })
          }), createVNode("td", {
            children: "Disassemble the KEIHIN CVK 20. Wash all parts with solvent, dry passages with compressed air. Inspect the vacuum diaphragm (throttle slide) for cracks or holes — a perforated diaphragm causes very poor throttle response. Replace if damaged; a cracked diaphragm cannot be repaired."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Excess carbon deposits in combustion chamber"
            })
          }), createVNode("td", {
            children: "Decarbonise the cylinder, piston crown, head, and valves. Stubborn deposits on valves require removal and cleaning with a wire brush or valve seat tool."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Incorrect timing or worn timing chain"
            })
          }), createVNode("td", {
            children: "Re-check camshaft timing mark alignment. A stretched timing chain can cause mild retard. Inspect chain and tensioner; replace if worn."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Exhaust muffler obstructed"
            })
          }), createVNode("td", {
            children: "A blocked catalytic converter or baffles cause severe back-pressure and power loss. If blowing through the exhaust confirms obstruction, replace the silencer."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Overheated or burnt valves"
            })
          }), createVNode("td", {
            children: "Caused by incorrect clearance (too tight) or poor seating. Remove the head, grind or replace the valves and seats."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Drive belt worn"
            })
          }), createVNode("td", {
            children: "A worn, cracked, or glazed drive belt slips under load. Inspect the belt surface — replace as a complete set including the variator rollers if the belt has been slipping."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Inefficient automatic transmission (CVT)"
            })
          }), createVNode("td", {
            children: ["Inspect the variator rollers for flat spots and oval wear. Check the pulley faces for wear grooves. Replace damaged parts as a set. Lubricate the movable driven pulley guide with ", createVNode("strong", {
              children: "Montblanc Molybdenum Grease"
            }), " (never use any other grease here — incorrect lubricant causes belt slippage)."]
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Clutch slipping"
            })
          }), createVNode("td", {
            children: "Check the clutch friction masses for oil contamination or abnormal wear. Verify the clutch bell is not scored. The clutch mass contact with the bell should be predominantly in the middle and equal across all three masses. Replace clutch masses and/or bell if worn."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Oil level exceeds maximum"
            })
          }), createVNode("td", {
            children: "Excess engine oil causes crankcase foaming, which can enter the combustion chamber. Check for cause (failed gasket, overfilling). Drain to correct level (MAX mark on dipstick)."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Air filter blocked"
            })
          }), createVNode("td", {
            children: "A saturated air filter restricts airflow, making the mixture very rich. Engine runs flat and smokes. Clean the filter sponge (water, shampoo, then 50/50 oil/petrol soak)."
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "excessive-fuel-consumption",
      children: "Excessive Fuel Consumption"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            width: "35%",
            children: "Possible Cause"
          }), createVNode("th", {
            children: "Diagnosis & Remedy"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Air filter obstructed or dirty"
            })
          }), createVNode("td", {
            children: "A blocked filter forces the engine to draw in less air, running excessively rich. Clean the sponge: wash with water and shampoo, soak in 50% Selenia Air Filter Oil + 50% petrol, wring gently by hand without twisting, allow to drip-dry, then refit."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Automatic cold-start (choke) remains on"
            })
          }), createVNode("td", {
            children: "Verify the automatic starter device de-activates correctly as the engine warms up. Check electrical wiring to the thermostatic starter and mechanical movement. Replace if stuck in the open (enriched) position."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Loose or incorrect jets"
            })
          }), createVNode("td", {
            children: "Check that the main jet (75) and pilot jet (35) are correctly fitted and tightened. A loose jet allows fuel to flow unmetered."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Incorrect float level"
            })
          }), createVNode("td", {
            children: "Remove the float bowl. The float must be parallel to the upper cover contact plane (the throttle valve membrane cover) when held upside down. Adjust the tab on the float arm if the level is incorrect. An incorrect float level causes the carburettor to flood or run lean."
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "rear-wheel-spins-at-idle",
      children: "Rear Wheel Spins at Idle"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            width: "35%",
            children: "Possible Cause"
          }), createVNode("th", {
            children: "Diagnosis & Remedy"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Idle rpm set too high"
            })
          }), createVNode("td", {
            children: ["Adjust the idle speed screw on the carburettor. Correct idle: ", createVNode("strong", {
              children: "1,500 ± 150 rpm"
            }), " (CO: 3.2% ± 0.5). Also verify the C.O. (carbon monoxide) level if an exhaust gas analyser is available."]
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Clutch fault"
            })
          }), createVNode("td", {
            children: "Check the clutch springs for fatigue and the friction masses for wear or oil contamination. If the masses are glazed or oil-contaminated, clean with brake cleaner (or replace) and inspect for the source of oil ingress. Check the clutch bell for scoring."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Air filter housing not sealed"
            })
          }), createVNode("td", {
            children: "If the air box lid or intake boot is not fully sealed, unmetered air enters the engine, causing a lean condition and erratic high idle. Refit the housing correctly; replace any damaged seals or the housing itself."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Carburettor–air filter connection damaged"
            })
          }), createVNode("td", {
            children: "Inspect the rubber boot between the carburettor and air filter box. Cracks or splits allow air leaks that lean out the mixture at idle and cause hunting. Replace the connection boot if damaged."
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "clutch-faults",
      children: "Clutch Faults"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            width: "35%",
            children: "Symptom / Cause"
          }), createVNode("th", {
            children: "Diagnosis & Remedy"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Clutch slips (engine revs but vehicle does not accelerate)"
            })
          }), createVNode("td", {
            children: "Inspect the clutch friction masses — verify no grease or oil is present on the contact surfaces. The contact pattern with the clutch bell should be mainly in the middle, uniform across all three masses. Verify the clutch bell is not scored or worn abnormally. Replace worn or contaminated components."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Clutch drag (vehicle creeps at idle)"
            })
          }), createVNode("td", {
            children: "First check idle speed is at 1,500 ± 150 rpm. If idle is correct, inspect clutch spring tension and mass pivot pins. Replace springs if fatigued (set, not elastic). Check for deformed clutch bell."
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "quick-reference-diagnostic-table",
      children: "Quick-Reference Diagnostic Table"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Symptom"
          }), createVNode("th", {
            children: "Start Here"
          }), createVNode("th", {
            children: "If No Improvement"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Engine cranks but won’t fire"
          }), createVNode("td", {
            children: "Check spark plug (gap 0.7–0.8 mm, NGK CR9EB). Check fuel supply via vacuum cock."
          }), createVNode("td", {
            children: "Check compression; inspect carburettor for blocked jets; check CDI/ignition advance."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Hard to start when cold"
          }), createVNode("td", {
            children: "Check automatic cold-start device wiring and mechanical movement."
          }), createVNode("td", {
            children: "Inspect choke piston protrusion (11 mm @ 24°C); replace if stuck."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Hard to start when hot (flooded)"
          }), createVNode("td", {
            children: "Crank with throttle wide open to clear flood. Check float level."
          }), createVNode("td", {
            children: "Inspect needle valve — replace if worn (float level drifts)."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Weak acceleration, low top speed"
          }), createVNode("td", {
            children: "Inspect drive belt surface for glazing/cracks. Check CVT roller condition."
          }), createVNode("td", {
            children: "Check clutch masses for oil; inspect variator pulley faces; check air filter."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Engine revs but no drive"
          }), createVNode("td", {
            children: "Clutch masses worn, oil-contaminated, or spring-fatigued. Inspect and replace."
          }), createVNode("td", {
            children: "Check drive belt for breakage."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Rear wheel turns at idle"
          }), createVNode("td", {
            children: "Reduce idle to 1,500 rpm with idle screw. Check for air leaks at intake boot."
          }), createVNode("td", {
            children: "Inspect clutch spring tension; replace fatigued springs."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Excessive fuel consumption"
          }), createVNode("td", {
            children: "Clean or replace air filter. Check cold-start device is not stuck open."
          }), createVNode("td", {
            children: "Check float level; verify jets (main 75, pilot 35) are correct and tight."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Engine runs rough at idle only"
          }), createVNode("td", {
            children: "Pilot (idle) jet (35) blocked — disassemble carburettor and clean with compressed air."
          }), createVNode("td", {
            children: "Air leak at carburettor boot or air box; intake manifold screws loose (7–9 Nm)."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Engine smokes (blue)"
          }), createVNode("td", {
            children: "Oil level above MAX — drain to correct level. Check valve stem seals."
          }), createVNode("td", {
            children: "Measure cylinder/piston clearance; replace rings if worn."
          })]
        })]
      })
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["� ", createVNode(_components.strong, {
          children: "Systematic approach:"
        }), " Always work through the simplest, most accessible checks first (spark plug, fuel supply, air filter, idle speed) before dismantling the carburettor or engine internals. More than 70% of no-start and poor-performance faults on carbureted scooters are resolved at the spark plug, fuel, or air filter level."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "valve-clearance--quick-reference",
      children: "Valve Clearance — Quick Reference"
    }), "\n", createVNode(_components.p, {
      children: ["Incorrect valve clearance is a common cause of hard starting and poor performance. Check only on a ", createVNode(_components.strong, {
        children: "cold engine"
      }), " (ambient temperature, not run for at least 2 hours)."]
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Valve"
          }), createVNode("th", {
            children: "Clearance"
          }), createVNode("th", {
            children: "Lock Nut Torque"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Intake (inlet)"
            })
          }), createVNode("td", {
            children: "0.10 mm"
          }), createVNode("td", {
            children: "7 – 9 Nm"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Exhaust (discharge)"
            })
          }), createVNode("td", {
            children: "0.15 mm"
          }), createVNode("td", {
            children: "7 – 9 Nm"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "related-pages",
      children: "Related Pages"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/models/piaggio-zip-100-technical-overview.html",
          children: "Piaggio ZIP 100 4T — Full Technical Specifications"
        }), " — complete specs, torque table, maintenance schedule"]
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "gy6-no-start-troubleshooting.html",
          children: "GY6 Scooter Won’t Start — Troubleshooting Checklist"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "gy6-carburetor-pilot-idle-jet.html",
          children: "GY6 Carburetor Pilot/Idle Jet Diagnosis"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/repair-guides/gy6-spark-plug-guide.html",
          children: "Spark Plug Replacement Guide"
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

const url = "src/content/diagnostics/piaggio-zip-100-troubleshooting.mdx";
const file = "/sessions/great-confident-cray/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/piaggio-zip-100-troubleshooting.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/great-confident-cray/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/piaggio-zip-100-troubleshooting.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
