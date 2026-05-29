import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_CrppOBcV.mjs';
import { $ as $$VideoEmbed } from './VideoEmbed_CRZrF2Zc.mjs';
import { $ as $$Callout } from './Callout_4os8_15B.mjs';
import { $ as $$SourceBox } from './SourceBox_BTWGR00M.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 EFI Stalls at Idle — TPS & IAC Fix",
  "description": "EFI scooter stalls at red lights or when stopping? Learn how a misaligned TPS prevents IAC activation, causing a rich stall — and how to fix it in minutes.",
  "publishDate": "2026-05-22",
  "updatedDate": "2026-05-22",
  "difficulty": "Beginner",
  "timeEstimate": "~20 min",
  "tags": ["gy6", "efi", "tps", "iac", "idle", "stalling", "fuel-injection", "diagnostics"],
  "appliesTo": ["GY6 139QMB Euro 4/5 EFI (50cc)", "GY6 157QMJ EFI (150cc)", "BTC Riva EFI", "La Souris Sourini / City EFI", "Santini Capri EFI", "AGM VX50 EFI"],
  "videos": [{
    "id": "Wl9sqXGmijc",
    "title": "GY6 EFI Scooter Stalls at Idle — TPS and IAC Fix",
    "creator": "ISRM Community",
    "position": "hero"
  }],
  "tools": ["Phillips screwdriver", "Small flat-head screwdriver (for throttle cable adjuster)", "Multimeter (optional — for TPS voltage verification)"],
  "sources": [{
    "name": "ScootDawg Forum — EFI Idle and TPS Issues",
    "url": "https://scootdawg.proboards.com/thread/51358/throttle-position-sensor"
  }, {
    "name": "49ccScoot Forum — GY6 TPS and Idle Stalling",
    "url": "https://49ccscoot.proboards.com/thread/29582/gy6-tps-oxygen-sensor"
  }, {
    "name": "Motorroller.de — Euro 4 Scooter EFI Diagnostics",
    "url": "https://www.motorroller.de/en/fehlercodes-blinkcodes-4t50e4/"
  }],
  "canonical": "https://ismr.online/diagnostics/gy6-efi-stalling-at-idle-tps-iac.html",
  "draft": false,
  "category": "fuel",
  "engine": "gy6",
  "fuel": "efi",
  "section": "Fuel Injection (EFI)",
  "cardTag": "IAC/TPS"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "applies-to",
    "text": "Applies To"
  }, {
    "depth": 2,
    "slug": "video-guide",
    "text": "Video Guide"
  }, {
    "depth": 2,
    "slug": "background-why-the-ecu-needs-to-know-throttle-is-fully-closed",
    "text": "Background: Why the ECU Needs to Know Throttle Is Fully Closed"
  }, {
    "depth": 2,
    "slug": "symptoms",
    "text": "Symptoms"
  }, {
    "depth": 2,
    "slug": "fix-1--relax-the-throttle-cable",
    "text": "Fix 1 — Relax the Throttle Cable"
  }, {
    "depth": 3,
    "slug": "step-1--locate-the-throttle-cable-adjuster",
    "text": "Step 1 — Locate the throttle cable adjuster"
  }, {
    "depth": 3,
    "slug": "step-2--add-cable-slack",
    "text": "Step 2 — Add cable slack"
  }, {
    "depth": 3,
    "slug": "step-3--test-ride",
    "text": "Step 3 — Test ride"
  }, {
    "depth": 2,
    "slug": "fix-2--rotate-the-tps-body",
    "text": "Fix 2 — Rotate the TPS Body"
  }, {
    "depth": 3,
    "slug": "step-1--locate-the-tps-on-the-throttle-body",
    "text": "Step 1 — Locate the TPS on the throttle body"
  }, {
    "depth": 3,
    "slug": "step-2--loosen-the-tps-mounting-screws",
    "text": "Step 2 — Loosen the TPS mounting screws"
  }, {
    "depth": 3,
    "slug": "step-3--rotate-the-tps-and-test",
    "text": "Step 3 — Rotate the TPS and test"
  }, {
    "depth": 3,
    "slug": "step-4--lock-the-tps-in-position",
    "text": "Step 4 — Lock the TPS in position"
  }, {
    "depth": 2,
    "slug": "setting-the-tps-with-a-multimeter-no-scanner-needed",
    "text": "Setting the TPS With a Multimeter (No Scanner Needed)"
  }, {
    "depth": 3,
    "slug": "step-1--identify-the-three-tps-pins",
    "text": "Step 1 — Identify the three TPS pins"
  }, {
    "depth": 3,
    "slug": "step-2--back-probe-the-connector",
    "text": "Step 2 — Back-probe the connector"
  }, {
    "depth": 3,
    "slug": "step-3--read-the-closed-throttle-voltage",
    "text": "Step 3 — Read the closed-throttle voltage"
  }, {
    "depth": 3,
    "slug": "step-4--adjust-while-watching-the-meter",
    "text": "Step 4 — Adjust while watching the meter"
  }, {
    "depth": 3,
    "slug": "step-5--verify-the-full-sweep",
    "text": "Step 5 — Verify the full sweep"
  }, {
    "depth": 2,
    "slug": "troubleshooting",
    "text": "Troubleshooting"
  }, {
    "depth": 2,
    "slug": "frequently-asked-questions",
    "text": "Frequently Asked Questions"
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
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Your EFI scooter runs fine at speed but dies the moment you come to a stop at a red light — unless you blip the throttle to keep it alive. This is one of the most common and easily fixed EFI idle faults on GY6 50cc and 150cc scooters. The root cause is almost always a Throttle Position Sensor (TPS) that is not fully registering “closed throttle,” which prevents the ECU from activating the Idle Air Control (IAC) valve — the component responsible for maintaining idle speed."
    }), "\n", createVNode(_components.h2, {
      id: "applies-to",
      children: "Applies To"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "GY6 139QMB Euro 4/5 EFI (50cc) — BTC Riva, La Souris Sourini/City, Santini Capri, AGM VX50"
      }), "\n", createVNode(_components.li, {
        children: "GY6 157QMJ EFI (150cc) variants with Delphi MT05 or Motion ECU"
      }), "\n"]
    }), "\n", createVNode($$SourceBox, {
      sources: frontmatter.sources
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode($$Callout, {
      type: "danger",
      children: createVNode(_components.p, {
        children: ["⚠️ ", createVNode(_components.strong, {
          children: "Safety first:"
        }), " Work on a cold or fully cooled engine only. Keep naked flames and smoking materials away from the fuel system at all times. Do not run the engine in an enclosed space."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "video-guide",
      children: "Video Guide"
    }), "\n", createVNode($$VideoEmbed, {
      videoId: "Wl9sqXGmijc",
      title: "GY6 EFI Scooter Stalls at Idle — TPS and IAC Fix",
      creator: "ISRM Community",
      position: "hero"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "background-why-the-ecu-needs-to-know-throttle-is-fully-closed",
      children: "Background: Why the ECU Needs to Know Throttle Is Fully Closed"
    }), "\n", createVNode(_components.p, {
      children: ["On a carbureted scooter, idle is maintained mechanically by the pilot jet and the idle air/fuel screw. On an EFI scooter, that job belongs to the ", createVNode(_components.strong, {
        children: "Idle Air Control (IAC) valve"
      }), " — a motorised valve that the ECU opens slightly to let in extra air and keep the engine running at a stable idle speed when the throttle is fully closed."]
    }), "\n", createVNode(_components.p, {
      children: ["The ECU decides to engage the IAC based on the signal from the ", createVNode(_components.strong, {
        children: "Throttle Position Sensor (TPS)"
      }), ". When the TPS output voltage drops to its fully-closed threshold (typically around 0.50–0.55 V on Delphi MT05 systems), the ECU recognises idle condition and activates IAC control."]
    }), "\n", createVNode(_components.p, {
      children: ["The problem arises when the ", createVNode(_components.strong, {
        children: "throttle cable has too much tension"
      }), " — or the TPS is slightly rotated out of its optimal position — so that even with the throttle grip fully released, the throttle butterfly inside the body is not 100% closed. The TPS voltage stays slightly above the closed-throttle threshold. The ECU interprets this as “partial throttle open” and therefore:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Does ", createVNode(_components.strong, {
          children: "not"
        }), " activate the IAC valve"]
      }), "\n", createVNode(_components.li, {
        children: ["Does ", createVNode(_components.strong, {
          children: "not"
        }), " apply idle enrichment"]
      }), "\n", createVNode(_components.li, {
        children: ["Applies a slightly ", createVNode(_components.strong, {
          children: "lean"
        }), " fuelling map (as if you are gently rolling on)"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The result: at a stop, with the butterfly valve essentially closed but the ECU unaware of it, air supply collapses and the mixture goes rich — the engine stumbles and stalls. Giving it a small blip of throttle temporarily restores airflow and keeps it running, which is the tell-tale symptom."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "symptoms",
      children: "Symptoms"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Engine stalls when coming to a complete stop (traffic lights, junctions)"
      }), "\n", createVNode(_components.li, {
        children: "Keeping a small amount of throttle prevents the stall"
      }), "\n", createVNode(_components.li, {
        children: "Idle is unstable or hunts (surges up and down) when warm"
      }), "\n", createVNode(_components.li, {
        children: "No fault codes stored — the TPS voltage is in range, just slightly off the closed-throttle threshold"
      }), "\n", createVNode(_components.li, {
        children: "Scooter runs normally at all other throttle positions"
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["💡 ", createVNode(_components.strong, {
          children: "No CEL?"
        }), " This fault usually does not trigger a Check Engine Light because the TPS voltage is technically within the valid operating range — it is just not low enough to signal “fully closed.” That is why it is easy to overlook."]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "fix-1--relax-the-throttle-cable",
      children: "Fix 1 — Relax the Throttle Cable"
    }), "\n", createVNode(_components.p, {
      children: "The quickest fix is to reduce cable tension so the throttle butterfly can fully close."
    }), "\n", createVNode(_components.h3, {
      id: "step-1--locate-the-throttle-cable-adjuster",
      children: "Step 1 — Locate the throttle cable adjuster"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "At the handlebar, pull back the rubber boot on the throttle housing to expose the cable adjuster (a barrel nut threaded into the housing)."
      }), "\n", createVNode(_components.li, {
        children: "Loosen the lock nut (turn anti-clockwise) if present."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-2--add-cable-slack",
      children: "Step 2 — Add cable slack"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Turn the barrel adjuster ", createVNode(_components.strong, {
          children: "clockwise"
        }), " (thread it inward) to add slack to the cable — typically 1–2 full turns."]
      }), "\n", createVNode(_components.li, {
        children: "Check that the throttle grip returns fully and snaps back freely when released. There should be 2–3 mm of free play at the grip before the throttle begins to open."
      }), "\n", createVNode(_components.li, {
        children: "Re-tighten the lock nut."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: ["⚠️ ", createVNode(_components.strong, {
          children: "Do not add excessive slack."
        }), " The throttle must still open fully at wide open throttle (WOT). Check that the grip twists all the way to its stop and that the throttle snaps back crisply. A sluggish return is a safety risk."]
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-3--test-ride",
      children: "Step 3 — Test ride"
    }), "\n", createVNode(_components.p, {
      children: "Start the engine, warm it up for 2–3 minutes, then test at idle with the scooter stationary. If the stall is gone, you are done. If the idle is still unstable, proceed to Fix 2."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "fix-2--rotate-the-tps-body",
      children: "Fix 2 — Rotate the TPS Body"
    }), "\n", createVNode(_components.p, {
      children: "If relaxing the cable alone does not resolve the stall, the TPS itself may be sitting slightly off its optimal closed-throttle position. Rotating it a small amount lowers the closed-throttle voltage to the point where the ECU correctly engages the IAC."
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: "💡 This procedure does not require any special tools. You are physically rotating the TPS housing — the same adjustment described in the TPS replacement guide — without removing the sensor."
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-1--locate-the-tps-on-the-throttle-body",
      children: "Step 1 — Locate the TPS on the throttle body"
    }), "\n", createVNode(_components.p, {
      children: "The TPS is the small sensor clipped onto the side of the throttle body, connected by a 3-wire plug. It sits on the end of the throttle shaft — the same shaft the butterfly valve and the throttle cable drum are connected to."
    }), "\n", createVNode(_components.h3, {
      id: "step-2--loosen-the-tps-mounting-screws",
      children: "Step 2 — Loosen the TPS mounting screws"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Using a Phillips screwdriver, loosen (do not remove) the two screws that hold the TPS body to the throttle body. Turn each screw anti-clockwise by about half a turn — just enough to allow the TPS to rotate."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-3--rotate-the-tps-and-test",
      children: "Step 3 — Rotate the TPS and test"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["With the ignition ON and the engine off (or running at idle), grasp the TPS body and rotate it slowly toward the ", createVNode(_components.strong, {
          children: "closed throttle direction"
        }), " — this is usually a small rotation in the direction that lowers the signal voltage."]
      }), "\n", createVNode(_components.li, {
        children: "Rotate by the smallest amount you can feel — typically 1–2 mm of arc at the outer edge of the sensor housing."
      }), "\n", createVNode(_components.li, {
        children: "Restart the engine and check whether idle is stable and the stall at stop is gone."
      }), "\n", createVNode(_components.li, {
        children: "If not, rotate a fraction further and retest. Do this iteratively in small steps."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: ["⚠️ ", createVNode(_components.strong, {
          children: "Do not over-rotate."
        }), " If you rotate too far, the ECU will think the throttle is permanently in a sub-idle state and idle quality will worsen. The target is the smallest rotation that eliminates the stall."]
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-4--lock-the-tps-in-position",
      children: "Step 4 — Lock the TPS in position"
    }), "\n", createVNode(_components.p, {
      children: "Once the idle is stable and the scooter no longer stalls at a stop:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Hold the TPS in position and tighten both mounting screws firmly — but do not over-torque them; the TPS housing is plastic."
      }), "\n", createVNode(_components.li, {
        children: "Perform a final check: open the throttle to wide open and release it. Confirm the engine returns to a stable idle immediately."
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "setting-the-tps-with-a-multimeter-no-scanner-needed",
      children: "Setting the TPS With a Multimeter (No Scanner Needed)"
    }), "\n", createVNode(_components.p, {
      children: "A basic multimeter set to DC voltage is all you need to adjust the TPS precisely — no OBD2 scanner or laptop required. This gives you a definitive target to hit instead of adjusting by feel."
    }), "\n", createVNode(_components.h3, {
      id: "step-1--identify-the-three-tps-pins",
      children: "Step 1 — Identify the three TPS pins"
    }), "\n", createVNode(_components.p, {
      children: "The TPS connector has three wires. On virtually all GY6 EFI throttle bodies (Delphi MT05 and Motion ECU systems) the pin functions are:"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Wire colour"
          }), createVNode("th", {
            children: "Function"
          }), createVNode("th", {
            children: "What to connect your meter to"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Green or white"
          }), createVNode("td", {
            children: "5 V reference from ECU"
          }), createVNode("td", {
            children: "Do not probe this for the adjustment"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Black"
          }), createVNode("td", {
            children: "Ground (0 V)"
          }), createVNode("td", {
            children: "Negative (COM) probe — black lead"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Yellow, orange, or blue"
          }), createVNode("td", {
            children: "Signal output to ECU"
          }), createVNode("td", {
            children: "Positive probe — red lead"
          })]
        })]
      })
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["💡 ", createVNode(_components.strong, {
          children: "Not sure which wire is which?"
        }), " With the ignition ON, probe between any wire and a known chassis ground. The wire that reads a steady 4.8–5.2 V is the reference; the wire that reads 0 V is ground; the remaining wire is the signal."]
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-2--back-probe-the-connector",
      children: "Step 2 — Back-probe the connector"
    }), "\n", createVNode(_components.p, {
      children: ["Do ", createVNode(_components.strong, {
        children: "not"
      }), " unplug the TPS connector — the ECU must be powered and the circuit must be complete for the reading to be valid."]
    }), "\n", createVNode(_components.p, {
      children: ["Instead, insert the multimeter probes from the ", createVNode(_components.strong, {
        children: "rear"
      }), " of the connector alongside the existing wires (back-probing). A sewing pin or thin paperclip pushed gently into the back of the connector socket works if your probes are too thick to reach the terminals directly."]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Set your multimeter to ", createVNode(_components.strong, {
          children: "DC Voltage"
        }), ", range ", createVNode(_components.strong, {
          children: "0–20 V"
        }), " (or auto-range)."]
      }), "\n", createVNode(_components.li, {
        children: ["Connect the black (COM) lead to the ", createVNode(_components.strong, {
          children: "black ground wire"
        }), " terminal."]
      }), "\n", createVNode(_components.li, {
        children: ["Connect the red lead to the ", createVNode(_components.strong, {
          children: "signal wire"
        }), " terminal (yellow/orange/blue)."]
      }), "\n", createVNode(_components.li, {
        children: "Turn the ignition ON. The meter should display a reading immediately."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-3--read-the-closed-throttle-voltage",
      children: "Step 3 — Read the closed-throttle voltage"
    }), "\n", createVNode(_components.p, {
      children: "With the throttle grip fully released (no tension at all on the cable):"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Target:"
        }), " 0.48–0.55 V"]
      }), "\n", createVNode(_components.li, {
        children: ["If you read ", createVNode(_components.strong, {
          children: "above 0.55 V"
        }), ": the TPS is registering slightly open — this is the cause of your stall. Proceed to Step 4."]
      }), "\n", createVNode(_components.li, {
        children: "If you already read 0.48–0.55 V but the scooter still stalls, the issue may be the IAC valve rather than TPS calibration — see the FAQ below."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-4--adjust-while-watching-the-meter",
      children: "Step 4 — Adjust while watching the meter"
    }), "\n", createVNode(_components.p, {
      children: "With the TPS mounting screws loosened half a turn (as described in Fix 2 above):"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "With the ignition ON and the multimeter connected, watch the live voltage reading on the display."
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Slowly rotate the TPS body"
        }), " in small increments — the direction that causes the displayed voltage to drop toward the target range."]
      }), "\n", createVNode(_components.li, {
        children: ["Stop when the reading stabilises between ", createVNode(_components.strong, {
          children: "0.50 and 0.55 V"
        }), " with the throttle fully released."]
      }), "\n", createVNode(_components.li, {
        children: "Hold the TPS firmly in position and tighten the mounting screws without letting it move."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-5--verify-the-full-sweep",
      children: "Step 5 — Verify the full sweep"
    }), "\n", createVNode(_components.p, {
      children: "Once locked in position, perform the full sweep check:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Throttle fully closed → reading should be ", createVNode(_components.strong, {
          children: "0.50–0.55 V"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Slowly open to half throttle → voltage should rise smoothly and continuously to approximately ", createVNode(_components.strong, {
          children: "2.0–2.5 V"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Wide open throttle (WOT) → reading should reach approximately ", createVNode(_components.strong, {
          children: "4.3–4.8 V"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Release → voltage should return cleanly to ", createVNode(_components.strong, {
          children: "0.50–0.55 V"
        }), " with no hesitation or jump"]
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: ["⚠️ ", createVNode(_components.strong, {
          children: "Any flat spot, sudden jump, or drop-out during the sweep"
        }), " (where the voltage sticks at one value then skips) indicates a worn TPS sliding contact. In that case the sensor needs replacement — see the ", createVNode(_components.a, {
          href: "/diagnostics/gy6-efi-tps-sensor-diagnosis.html",
          children: "GY6 EFI TPS Sensor Diagnosis guide"
        }), "."]
      })
    }), "\n", createVNode(_components.p, {
      children: "A smooth sweep from 0.5 V to 4.5 V and back is your confirmation that the TPS is both correctly set and in good health."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Symptom after fix"
          }), createVNode("th", {
            children: "Likely cause"
          }), createVNode("th", {
            children: "Action"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Still stalls at stop"
          }), createVNode("td", {
            children: "TPS not rotated far enough, or IAC valve faulty"
          }), createVNode("td", {
            children: "Rotate TPS a fraction further; if still no improvement, check IAC valve operation and wiring"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Idle too high after fix"
          }), createVNode("td", {
            children: "TPS rotated too far or cable over-slackened"
          }), createVNode("td", {
            children: "Return TPS to previous position; re-adjust cable to restore correct free play"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Throttle stiff or slow to return"
          }), createVNode("td", {
            children: "Cable slack excessive or cable kinked"
          }), createVNode("td", {
            children: "Reduce slack at adjuster; inspect cable routing for tight bends"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "CEL lit after adjustment"
          }), createVNode("td", {
            children: "TPS voltage outside valid range (too low)"
          }), createVNode("td", {
            children: "Rotate TPS back slightly; target 0.50–0.55 V at closed throttle"
          })]
        })]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "frequently-asked-questions",
      children: "Frequently Asked Questions"
    }), "\n", createVNode("details", {
      style: "background:var(--surface);border:1px solid var(--border);border-radius:6px;padding:0;margin-bottom:0.5rem;",
      children: [createVNode("summary", {
        style: "cursor:pointer;padding:0.9rem 1.1rem;font-weight:600;color:var(--text-primary);list-style:none;display:flex;justify-content:space-between;align-items:center;",
        children: createVNode(_components.p, {
          children: ["Could this be an IAC valve fault rather than a TPS issue?\n", createVNode("span", {
            "aria-hidden": "true",
            style: "font-size:1.1rem;color:var(--accent);",
            children: "＋"
          })]
        })
      }), createVNode("div", {
        style: "padding:0 1.1rem 0.9rem;color:var(--text-secondary);border-top:1px solid var(--border);",
        children: createVNode(_components.p, {
          children: "It is possible, but TPS calibration is the far more common cause and should always be checked first because it costs nothing to fix. A failed IAC valve usually causes a much more severe idle problem — the engine will barely idle at all, even when warm and in motion. If relaxing the cable and rotating the TPS does not help, test the IAC valve resistance (typically 20–30 Ω across its terminals) and confirm it is receiving a PWM signal from the ECU."
        })
      })]
    }), "\n", createVNode("details", {
      style: "background:var(--surface);border:1px solid var(--border);border-radius:6px;padding:0;margin-bottom:0.5rem;",
      children: [createVNode("summary", {
        style: "cursor:pointer;padding:0.9rem 1.1rem;font-weight:600;color:var(--text-primary);list-style:none;display:flex;justify-content:space-between;align-items:center;",
        children: createVNode(_components.p, {
          children: ["Will this fault ever throw a fault code?\n", createVNode("span", {
            "aria-hidden": "true",
            style: "font-size:1.1rem;color:var(--accent);",
            children: "＋"
          })]
        })
      }), createVNode("div", {
        style: "padding:0 1.1rem 0.9rem;color:var(--text-secondary);border-top:1px solid var(--border);",
        children: createVNode(_components.p, {
          children: ["Rarely. Because the TPS voltage is within its valid operating range (just slightly above the closed-throttle threshold rather than completely out of range), most ECUs will not store a DTC. If a P0121 or similar code is present, follow the ", createVNode("a", {
            href: "/diagnostics/gy6-efi-tps-sensor-diagnosis.html",
            children: "GY6 EFI TPS Sensor Diagnosis guide"
          }), " to rule out a defective sensor first."]
        })
      })]
    }), "\n", createVNode("details", {
      style: "background:var(--surface);border:1px solid var(--border);border-radius:6px;padding:0;margin-bottom:0.5rem;",
      children: [createVNode("summary", {
        style: "cursor:pointer;padding:0.9rem 1.1rem;font-weight:600;color:var(--text-primary);list-style:none;display:flex;justify-content:space-between;align-items:center;",
        children: createVNode(_components.p, {
          children: ["Does this apply to carbureted GY6 models?\n", createVNode("span", {
            "aria-hidden": "true",
            style: "font-size:1.1rem;color:var(--accent);",
            children: "＋"
          })]
        })
      }), createVNode("div", {
        style: "padding:0 1.1rem 0.9rem;color:var(--text-secondary);border-top:1px solid var(--border);",
        children: createVNode(_components.p, {
          children: ["No. Carbureted engines do not have a TPS or IAC valve. If a carbureted scooter stalls at idle, the cause is almost always a blocked pilot jet or incorrect idle mixture screw setting — see the ", createVNode("a", {
            href: "/diagnostics/gy6-carburetor-pilot-idle-jet.html",
            children: "GY6 Carburetor Pilot Jet guide"
          }), "."]
        })
      })]
    }), "\n", createVNode("details", {
      style: "background:var(--surface);border:1px solid var(--border);border-radius:6px;padding:0;margin-bottom:0.5rem;",
      children: [createVNode("summary", {
        style: "cursor:pointer;padding:0.9rem 1.1rem;font-weight:600;color:var(--text-primary);list-style:none;display:flex;justify-content:space-between;align-items:center;",
        children: createVNode(_components.p, {
          children: ["My scooter has been fine for years — why has this only started happening?\n", createVNode("span", {
            "aria-hidden": "true",
            style: "font-size:1.1rem;color:var(--accent);",
            children: "＋"
          })]
        })
      }), createVNode("div", {
        style: "padding:0 1.1rem 0.9rem;color:var(--text-secondary);border-top:1px solid var(--border);",
        children: createVNode(_components.p, {
          children: "Throttle cables stretch slightly over time, and the plastic TPS housing can shift very gradually from vibration. A small amount of cable stretch alone is often enough to push the closed-throttle TPS voltage just above the IAC activation threshold after many thousands of kilometres."
        })
      })]
    }), "\n", createVNode("details", {
      style: "background:var(--surface);border:1px solid var(--border);border-radius:6px;padding:0;margin-bottom:0.5rem;",
      children: [createVNode("summary", {
        style: "cursor:pointer;padding:0.9rem 1.1rem;font-weight:600;color:var(--text-primary);list-style:none;display:flex;justify-content:space-between;align-items:center;",
        children: createVNode(_components.p, {
          children: ["Do I need an expensive multimeter for the voltage check?\n", createVNode("span", {
            "aria-hidden": "true",
            style: "font-size:1.1rem;color:var(--accent);",
            children: "＋"
          })]
        })
      }), createVNode("div", {
        style: "padding:0 1.1rem 0.9rem;color:var(--text-secondary);border-top:1px solid var(--border);",
        children: createVNode(_components.p, {
          children: "No. Any basic digital multimeter with a DC Voltage setting will work — even a €10 unit from a hardware store. You are measuring a stable DC signal between 0.5 V and 4.5 V, which is well within the range of the cheapest meters. An auto-ranging meter is slightly more convenient but not required."
        })
      })]
    }), "\n", createVNode("details", {
      style: "background:var(--surface);border:1px solid var(--border);border-radius:6px;padding:0;margin-bottom:0.5rem;",
      children: [createVNode("summary", {
        style: "cursor:pointer;padding:0.9rem 1.1rem;font-weight:600;color:var(--text-primary);list-style:none;display:flex;justify-content:space-between;align-items:center;",
        children: createVNode(_components.p, {
          children: ["What if I cannot reach 0.5 V no matter how far I rotate the TPS?\n", createVNode("span", {
            "aria-hidden": "true",
            style: "font-size:1.1rem;color:var(--accent);",
            children: "＋"
          })]
        })
      }), createVNode("div", {
        style: "padding:0 1.1rem 0.9rem;color:var(--text-secondary);border-top:1px solid var(--border);",
        children: createVNode(_components.p, {
          children: "If you have already relaxed the throttle cable fully and rotated the TPS to its mechanical limit in the correct direction but the voltage still reads above 0.55 V at closed throttle, the throttle body butterfly is likely not seating fully closed due to carbon build-up on the butterfly valve edges or a stuck/binding throttle shaft. Clean the throttle body bore and butterfly plate with throttle body cleaner, then repeat the adjustment."
        })
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "related-guides",
      children: "Related Guides"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/diagnostics/gy6-efi-tps-sensor-diagnosis.html",
          children: "GY6 EFI TPS Sensor Diagnosis & Replacement"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/diagnostics/gy6-efi-obd2-dtc-fault-codes.html",
          children: "GY6 EFI OBD-2 DTC Fault Codes"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/diagnostics/gy6-carburetor-pilot-idle-jet.html",
          children: "GY6 Carburetor Pilot Jet Diagnostics"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/diagnostics/gy6-efi-fuel-injection-troubleshooting.html",
          children: "GY6 EFI Fuel Injection Troubleshooting"
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

const url = "src/content/diagnostics/gy6-efi-stalling-at-idle-tps-iac.mdx";
const file = "/sessions/vibrant-hopeful-dijkstra/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-efi-stalling-at-idle-tps-iac.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/vibrant-hopeful-dijkstra/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-efi-stalling-at-idle-tps-iac.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
