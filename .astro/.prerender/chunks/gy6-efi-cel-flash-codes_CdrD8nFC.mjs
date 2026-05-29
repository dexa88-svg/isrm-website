import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_BWJ2jjys.mjs';
import { $ as $$VideoEmbed } from './VideoEmbed_CJiqPfg_.mjs';
import { $ as $$Callout } from './Callout_Cl3Utv58.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 EFI CEL Flash Codes — Manual Diagnostic Mode",
  "description": "GY6 EFI check engine light flash code reader. Decode CEL blink patterns for fuel injection fault codes on Chinese 125/150cc EFI scooters — Rongmao and Delphi…",
  "publishDate": "2026-05-19",
  "updatedDate": "2026-05-21",
  "difficulty": "Beginner",
  "timeEstimate": "~30 min",
  "tags": ["GY6 EFI", "Fault Codes", "CEL / MIL", "Diagnostics", "Piaggio"],
  "appliesTo": ["GY6 50cc (139QMB)", "GY6 125cc (152QMI)", "GY6 150cc (157QMJ)", "BTC Riva", "La Souris Sourini", "La Souris City S", "Santini Capri"],
  "videos": [{
    "id": "_Jkr_L9xxg8",
    "title": "How to Activate CEL Diagnostic Mode on GY6 EFI Scooters",
    "creator": "",
    "position": "hero"
  }],
  "sources": [],
  "canonical": "https://ismr.online/diagnostics/gy6-efi-cel-flash-codes.html",
  "draft": false,
  "category": "fuel",
  "engine": "gy6",
  "fuel": "efi",
  "section": "Fuel System & Idle"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-is-the-cel--mil",
    "text": "What Is the CEL / MIL?"
  }, {
    "depth": 2,
    "slug": "how-to-enter-manual-diagnostic-mode",
    "text": "How to Enter Manual Diagnostic Mode"
  }, {
    "depth": 3,
    "slug": "standard-activation-procedure-most-gy6-efi-and-chinese-efi-scooters",
    "text": "Standard Activation Procedure (most GY6 EFI and Chinese EFI scooters)"
  }, {
    "depth": 3,
    "slug": "piaggio--vespa-activation-procedure-d-tronik-ecu-pre-2015",
    "text": "Piaggio / Vespa Activation Procedure (D-Tronik ECU, pre-2015)"
  }, {
    "depth": 3,
    "slug": "activation-with-diagnostic-toggle-wire-some-chinese-ecus",
    "text": "Activation with Diagnostic Toggle Wire (some Chinese ECUs)"
  }, {
    "depth": 2,
    "slug": "how-to-read-the-flash-codes",
    "text": "How to Read the Flash Codes"
  }, {
    "depth": 3,
    "slug": "pattern-1--long--short-flashes-keihin-pgm-fi-clones-older-chinese-ecus",
    "text": "Pattern 1 — Long + Short Flashes (KEIHIN PGM-FI clones, older Chinese ECUs)"
  }, {
    "depth": 3,
    "slug": "pattern-2--all-short-flashes-tens-as-10-pulses-some-chinese--taiwanese-efi-ecus",
    "text": "Pattern 2 — All Short Flashes, Tens as 10 Pulses (some Chinese / Taiwanese EFI ECUs)"
  }, {
    "depth": 2,
    "slug": "gy6-efi-flash-code-reference-table",
    "text": "GY6 EFI Flash Code Reference Table"
  }, {
    "depth": 2,
    "slug": "clearing-stored-fault-codes",
    "text": "Clearing Stored Fault Codes"
  }, {
    "depth": 3,
    "slug": "method-1--battery-disconnect-universal",
    "text": "Method 1 — Battery Disconnect (Universal)"
  }, {
    "depth": 3,
    "slug": "method-2--ignition-cycle-reset-some-ecus",
    "text": "Method 2 — Ignition Cycle Reset (some ECUs)"
  }, {
    "depth": 2,
    "slug": "sensor-location-reference",
    "text": "Sensor Location Reference"
  }, {
    "depth": 2,
    "slug": "diagnostic-flow--cel-is-on",
    "text": "Diagnostic Flow — CEL Is On"
  }, {
    "depth": 2,
    "slug": "related-guides",
    "text": "Related Guides"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
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
    children: [createVNode(_components.h2, {
      id: "what-is-the-cel--mil",
      children: "What Is the CEL / MIL?"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.strong, {
        children: "Check Engine Light (CEL)"
      }), ", also called the ", createVNode(_components.strong, {
        children: "Malfunction Indicator Lamp (MIL)"
      }), ", is the dashboard warning light — typically an engine outline icon or the words “CHECK” or “INJECTION.” When the ECU detects a sensor reading outside its acceptable range, it stores a fault code and illuminates this light."]
    }), "\n", createVNode(_components.p, {
      children: ["Most GY6 EFI ECUs support a built-in ", createVNode(_components.strong, {
        children: "manual diagnostic mode"
      }), " that flashes stored fault codes as a sequence of light pulses — no OBD scanner required. This guide explains how to enter that mode and how to read the resulting flash patterns."]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "⚠ Note on ECU variants:"
        }), " Chinese GY6 EFI scooters may use any of several ECU types (KEIHIN PGM-FI clones, Delphi MT05 variants, proprietary clones). Flash code sequences and activation procedures are largely standardised across these, but minor differences exist. If in doubt, cross-reference your scooter’s service manual."]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "ℹ️ Wrong page?"
      }), " This guide covers ", createVNode(_components.strong, {
        children: "CEL blink/flash codes"
      }), " — the older diagnostic method used by KEIHIN PGM-FI clone ECUs that flash patterns without any scanner. ", createVNode(_components.strong, {
        children: "If your scooter has a Rongmao, Delphi, or Motion EFI system"
      }), " (typically Euro 4 / Euro 5 models from approx. 2017+), it uses standard OBD-2 P-codes and does not support blink codes. See the ", createVNode(_components.a, {
        href: "gy6-efi-obd2-dtc-fault-codes.html",
        children: "GY6 EFI OBD-2 DTC Fault Codes guide"
      }), " instead."]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-enter-manual-diagnostic-mode",
      children: "How to Enter Manual Diagnostic Mode"
    }), "\n", createVNode(_components.h3, {
      id: "standard-activation-procedure-most-gy6-efi-and-chinese-efi-scooters",
      children: "Standard Activation Procedure (most GY6 EFI and Chinese EFI scooters)"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Park the scooter on its centre stand on level ground. Engine must be ", createVNode(_components.strong, {
          children: "off"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Turn the ignition key to ", createVNode(_components.strong, {
          children: "ON"
        }), " — do not start the engine."]
      }), "\n", createVNode(_components.li, {
        children: "Watch the CEL: it will illuminate for ~2 seconds (self-check), then go out. This is normal."
      }), "\n", createVNode(_components.li, {
        children: "If no fault is stored, the CEL stays off and you are done — no codes present."
      }), "\n", createVNode(_components.li, {
        children: ["If one or more fault codes are stored, the CEL will begin ", createVNode(_components.strong, {
          children: "flashing sequences automatically"
        }), " after the self-check (no further input needed on most units)."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "On some ECUs (particularly older Piaggio D-Tronik / Wave ECU), the manual mode requires a specific sequence — see below."
    }), "\n", createVNode(_components.h3, {
      id: "piaggio--vespa-activation-procedure-d-tronik-ecu-pre-2015",
      children: "Piaggio / Vespa Activation Procedure (D-Tronik ECU, pre-2015)"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Turn ignition key to ", createVNode(_components.strong, {
          children: "OFF"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Turn ignition key to ", createVNode(_components.strong, {
          children: "ON"
        }), " (do not start)."]
      }), "\n", createVNode(_components.li, {
        children: ["Immediately turn back to ", createVNode(_components.strong, {
          children: "OFF"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Turn to ", createVNode(_components.strong, {
          children: "ON"
        }), " again within 5 seconds."]
      }), "\n", createVNode(_components.li, {
        children: "The CEL will flash stored codes. If the CEL flashes once then holds steady for 3 seconds, no codes are stored."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "activation-with-diagnostic-toggle-wire-some-chinese-ecus",
      children: "Activation with Diagnostic Toggle Wire (some Chinese ECUs)"
    }), "\n", createVNode(_components.p, {
      children: ["Some Chinese EFI scooters have a ", createVNode(_components.strong, {
        children: "diagnostic wire"
      }), " — a short pigtail under the seat or near the ECU, usually ", createVNode(_components.strong, {
        children: "white or green"
      }), ", with a connector plug or bare terminal. To enter diagnostic mode:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Turn ignition to ", createVNode(_components.strong, {
          children: "OFF"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Connect the diagnostic wire to ", createVNode(_components.strong, {
          children: "ground"
        }), " (any clean chassis bolt)."]
      }), "\n", createVNode(_components.li, {
        children: ["Turn ignition to ", createVNode(_components.strong, {
          children: "ON"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "The CEL will flash the stored codes."
      }), "\n", createVNode(_components.li, {
        children: "Disconnect the wire from ground when done."
      }), "\n"]
    }), "\n", createVNode($$VideoEmbed, {
      videoId: "_Jkr_L9xxg8",
      title: "How to Activate CEL Diagnostic Mode on GY6 EFI Scooters"
    }), "\n", createVNode(_components.h2, {
      id: "how-to-read-the-flash-codes",
      children: "How to Read the Flash Codes"
    }), "\n", createVNode(_components.p, {
      children: "GY6 EFI ECUs use one of two flash code patterns depending on the ECU generation. Identify which pattern your scooter uses before trying to decode any codes."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "pattern-1--long--short-flashes-keihin-pgm-fi-clones-older-chinese-ecus",
      children: "Pattern 1 — Long + Short Flashes (KEIHIN PGM-FI clones, older Chinese ECUs)"
    }), "\n", createVNode(_components.p, {
      children: ["Codes are expressed as ", createVNode(_components.strong, {
        children: "two groups of pulses"
      }), " separated by a brief pause. The ", createVNode(_components.strong, {
        children: "first group uses longer flashes"
      }), " to encode the tens digit; the ", createVNode(_components.strong, {
        children: "second group uses shorter flashes"
      }), " for the units digit. A longer pause separates one code from the next, and the ECU loops through all stored codes continuously."]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Reading tip:"
        }), " Count the long flashes first, then the short flashes after the pause. Write the pair as a two-digit number — for example, 1 long + 2 short = Code ", createVNode(_components.strong, {
          children: "12"
        }), "."]
      })
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "What you see (CEL)"
          }), createVNode("th", {
            children: "How to read it"
          }), createVNode("th", {
            children: "Code"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("div", {
              class: "flash-demo",
              children: [createVNode("span", {
                class: "flash-long"
              }), createVNode("span", {
                class: "flash-gap"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              })]
            })
          }), createVNode("td", {
            children: "1 long flash · pause · 2 short flashes"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "12"
            })
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("div", {
              class: "flash-demo",
              children: [createVNode("span", {
                class: "flash-long"
              }), createVNode("span", {
                class: "flash-long"
              }), createVNode("span", {
                class: "flash-gap"
              }), createVNode("span", {
                class: "flash-short"
              })]
            })
          }), createVNode("td", {
            children: "2 long flashes · pause · 1 short flash"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "21"
            })
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("div", {
              class: "flash-demo",
              children: [createVNode("span", {
                class: "flash-long"
              }), createVNode("span", {
                class: "flash-long"
              }), createVNode("span", {
                class: "flash-long"
              }), createVNode("span", {
                class: "flash-gap"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              })]
            })
          }), createVNode("td", {
            children: "3 long flashes · pause · 3 short flashes"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "33"
            })
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("div", {
              class: "flash-demo",
              children: [createVNode("span", {
                class: "flash-long"
              }), createVNode("span", {
                class: "flash-gap"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-long-pause"
              }), createVNode("span", {
                class: "flash-long"
              }), createVNode("span", {
                class: "flash-long"
              }), createVNode("span", {
                class: "flash-gap"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-loop-pause"
              }), createVNode("span", {
                class: "flash-long"
              }), createVNode("span", {
                class: "flash-gap"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              })]
            })
          }), createVNode("td", {
            children: "Two codes stored: Code 12, then Code 21 — then loop restarts"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "12 + 21"
            })
          })]
        })]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "pattern-2--all-short-flashes-tens-as-10-pulses-some-chinese--taiwanese-efi-ecus",
      children: "Pattern 2 — All Short Flashes, Tens as 10 Pulses (some Chinese / Taiwanese EFI ECUs)"
    }), "\n", createVNode(_components.p, {
      children: ["Some ECU variants use ", createVNode(_components.strong, {
        children: "only short flashes of equal length"
      }), " — there are no long flashes at all. The tens digit is encoded by counting out exactly ", createVNode(_components.strong, {
        children: "10 individual short pulses"
      }), ", followed by a ", createVNode(_components.strong, {
        children: "short pause (~1 s)"
      }), ". The units digit then follows as additional short pulses, then a ", createVNode(_components.strong, {
        children: "longer pause (~2 s)"
      }), " before the next code. If multiple codes are stored, they play back-to-back; when the full sequence ends, the ECU waits with a ", createVNode(_components.strong, {
        children: "triple-length pause (~4–5 s)"
      }), " before looping."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Examples:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Code ", createVNode(_components.strong, {
          children: "13"
        }), " → 10 short flashes · short pause (~1 s) · 3 short flashes · longer pause (~2 s) · loop"]
      }), "\n", createVNode(_components.li, {
        children: ["Code ", createVNode(_components.strong, {
          children: "08"
        }), " → 8 short flashes · longer pause (~2 s) · loop ", createVNode(_components.em, {
          children: "(single-digit codes: no tens group, just the units count)"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Codes ", createVNode(_components.strong, {
          children: "13 + 08"
        }), " in sequence → 10 flashes · short pause · 3 flashes · longer pause · 8 flashes · triple-long pause (~4 s) · repeat"]
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Reading tip:"
        }), " Count every flash group carefully. If a group has exactly 10 pulses followed by a short gap, those 10 are the tens digit — wait for the units group after the pause. If a group has fewer than 10 pulses and is followed by a longer pause, that group is the entire code (a single-digit code, e.g. 8 flashes = Code 08)."]
      })
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "What you see (CEL)"
          }), createVNode("th", {
            children: "How to read it"
          }), createVNode("th", {
            children: "Code"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("div", {
              class: "flash-demo",
              children: [createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              })]
            })
          }), createVNode("td", {
            children: "8 short flashes · longer pause (~2 s) · loop"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "08"
            })
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("div", {
              class: "flash-demo",
              children: [createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-gap"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              })]
            })
          }), createVNode("td", {
            children: "10 short flashes · short pause (~1 s) · 3 short flashes · longer pause (~2 s) · loop"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "13"
            })
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: [createVNode("div", {
              style: "font-size:0.72em;color:var(--text-secondary);margin-bottom:2px;",
              children: "Code 13:"
            }), createVNode("div", {
              class: "flash-demo",
              children: [createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-gap"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              })]
            }), createVNode("div", {
              style: "font-size:0.72em;color:var(--text-secondary);margin:4px 0 2px;",
              children: "Code 08:"
            }), createVNode("div", {
              class: "flash-demo",
              children: [createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              }), createVNode("span", {
                class: "flash-short"
              })]
            }), createVNode("div", {
              style: "font-size:0.72em;color:var(--text-secondary);margin-top:4px;",
              children: "↩ triple-long pause → repeats from Code 13"
            })]
          }), createVNode("td", {
            children: ["Code 13: 10 flashes · short pause (~1 s) · 3 flashes · longer pause (~2 s)", createVNode("br", {}), "Code 08: 8 flashes · longer pause (~2 s)", createVNode("br", {}), "Then triple-long pause (~4–5 s) before loop restarts"]
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "13 + 08"
            })
          })]
        })]
      })
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Which pattern does my scooter use?"
        }), " Watch the first flash group carefully. If you see two clearly different flash lengths (some obviously longer than others), you have Pattern 1. If every flash looks identical in length and only the gaps between groups differ, you have Pattern 2. When counting Pattern 2, a group of exactly 10 identical flashes is always the tens digit — stop counting and wait for the short pause, then count the next group for the units digit."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "gy6-efi-flash-code-reference-table",
      children: "GY6 EFI Flash Code Reference Table"
    }), "\n", createVNode(_components.p, {
      children: "The following codes are used by GY6-compatible EFI ECUs (KEIHIN PGM-FI clones, MT05-type, and Piaggio D-Tronik variants). Severity indicates how urgently the fault should be addressed."
    }), "\n", createVNode("table", {
      class: "code-table",
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Code"
          }), createVNode("th", {
            children: "Fault Description"
          }), createVNode("th", {
            children: "Affected Component"
          }), createVNode("th", {
            children: "Severity"
          }), createVNode("th", {
            children: "Typical Cause"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "01"
          }), createVNode("td", {
            children: "No fault stored / System OK"
          }), createVNode("td", {
            children: "—"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-low",
              children: "None"
            })
          }), createVNode("td", {
            children: "Normal operation. CEL may have been triggered by a transient event."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "07"
          }), createVNode("td", {
            children: "Throttle Position Sensor (TPS) — signal out of range"
          }), createVNode("td", {
            children: "TPS"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "Faulty TPS, wiring break, or loose connector. Engine may run rich/lean or surge."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "08"
          }), createVNode("td", {
            children: "Throttle Position Sensor (TPS) — low voltage"
          }), createVNode("td", {
            children: "TPS"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "Short circuit in TPS signal wire or failed TPS. Check 5 V reference at ECU pin."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "09"
          }), createVNode("td", {
            children: "Throttle Position Sensor (TPS) — high voltage"
          }), createVNode("td", {
            children: "TPS"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "Open circuit in TPS or wiring. Replace TPS if voltage > 4.8 V at idle."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "12"
          }), createVNode("td", {
            children: "Coolant Temperature Sensor (CTS / ECT) — short to ground"
          }), createVNode("td", {
            children: "CTS"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-med",
              children: "Medium"
            })
          }), createVNode("td", {
            children: "Sensor or wiring shorted to ground. Cold start enrichment may be incorrect."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "13"
          }), createVNode("td", {
            children: "Coolant Temperature Sensor (CTS / ECT) — open circuit"
          }), createVNode("td", {
            children: "CTS"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-med",
              children: "Medium"
            })
          }), createVNode("td", {
            children: "Sensor unplugged or open circuit. ECU defaults to a fixed temperature; cold starts may be rough."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "14"
          }), createVNode("td", {
            children: "Inlet Air Temperature Sensor (IAT) — short to ground"
          }), createVNode("td", {
            children: "IAT"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-low",
              children: "Low"
            })
          }), createVNode("td", {
            children: "IAT sensor or wiring short. Engine runs but fuel mapping is degraded."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "15"
          }), createVNode("td", {
            children: "Inlet Air Temperature Sensor (IAT) — open circuit"
          }), createVNode("td", {
            children: "IAT"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-low",
              children: "Low"
            })
          }), createVNode("td", {
            children: "Sensor unplugged. Often found combined with MAP sensor in a single unit (T-MAP)."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "17"
          }), createVNode("td", {
            children: "MAP / IAP Sensor — voltage out of range"
          }), createVNode("td", {
            children: "MAP / IAP"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "Failed MAP sensor, split vacuum hose to sensor, or clogged intake. Engine may stall or idle roughly."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "18"
          }), createVNode("td", {
            children: "MAP / IAP Sensor — low voltage"
          }), createVNode("td", {
            children: "MAP / IAP"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "Wiring short or failed sensor. Check vacuum hose integrity and sensor 5 V supply."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "19"
          }), createVNode("td", {
            children: "MAP / IAP Sensor — high voltage"
          }), createVNode("td", {
            children: "MAP / IAP"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "Open circuit to MAP sensor. Replace sensor if supply voltage is correct but signal is high."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "21"
          }), createVNode("td", {
            children: "O₂ Sensor — lean mixture detected"
          }), createVNode("td", {
            children: "Lambda / O₂ sensor"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-med",
              children: "Medium"
            })
          }), createVNode("td", {
            children: ["Air leak (vacuum leak), weak fuel pump, blocked injector, or failed O₂ sensor. See ", createVNode("a", {
              href: "gy6-air-leak-diagnosis.html",
              children: "air leak guide"
            }), "."]
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "22"
          }), createVNode("td", {
            children: "O₂ Sensor — rich mixture detected"
          }), createVNode("td", {
            children: "Lambda / O₂ sensor"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-med",
              children: "Medium"
            })
          }), createVNode("td", {
            children: "Leaking injector (dripping at rest), failed O₂ sensor, or high fuel pressure."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "23"
          }), createVNode("td", {
            children: "O₂ Sensor — no response / heater fault"
          }), createVNode("td", {
            children: "Lambda / O₂ sensor"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-med",
              children: "Medium"
            })
          }), createVNode("td", {
            children: "Sensor heater failed or open circuit. Closed-loop fuelling disabled; fuel economy affected."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "29"
          }), createVNode("td", {
            children: "Idle Speed Control (ISC) valve — fault"
          }), createVNode("td", {
            children: "ISC / IAC valve"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-med",
              children: "Medium"
            })
          }), createVNode("td", {
            children: "ISC valve stuck, blocked, or wiring fault. Idle may be too high, too low, or unstable."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "33"
          }), createVNode("td", {
            children: "Crankshaft Position Sensor (CKP) — signal absent"
          }), createVNode("td", {
            children: "CKP sensor"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "Broken or disconnected CKP sensor. Engine may not start at all. Check reluctor wheel gap (0.5–1.5 mm)."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "34"
          }), createVNode("td", {
            children: "Crankshaft Position Sensor (CKP) — intermittent signal"
          }), createVNode("td", {
            children: "CKP sensor"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "Damaged reluctor ring teeth, wiring intermittent, or air gap too large. Can cause stalling under load."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "36"
          }), createVNode("td", {
            children: "Camshaft Position Sensor (CMP) — no signal"
          }), createVNode("td", {
            children: "CMP sensor"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "Failed cam sensor or wiring break. Engine may still run using CKP only (degraded mode)."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "41"
          }), createVNode("td", {
            children: "Fuel injector — circuit fault"
          }), createVNode("td", {
            children: "Injector"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "Open or short circuit in injector wiring, or failed injector solenoid. Engine will not start correctly."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "46"
          }), createVNode("td", {
            children: "Ignition coil — primary circuit fault"
          }), createVNode("td", {
            children: "Ignition coil"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: ["Open or short in coil primary winding or wiring. No spark. See ", createVNode("a", {
              href: "/repair-guides/gy6-ignition-coil-guide.html",
              children: "ignition coil guide"
            }), "."]
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "54"
          }), createVNode("td", {
            children: "Fuel pump relay — no response"
          }), createVNode("td", {
            children: "Fuel pump / relay"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "Failed fuel pump relay, blown fuse, or open circuit. Fuel pump does not prime on key-on. Engine will not start."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "56"
          }), createVNode("td", {
            children: "Battery / system voltage — low"
          }), createVNode("td", {
            children: "Battery / charging"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-med",
              children: "Medium"
            })
          }), createVNode("td", {
            children: "Voltage below ~10.5 V. Charge or replace battery. Check rectifier/regulator output (should be 13.5–14.5 V at idle)."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "57"
          }), createVNode("td", {
            children: "Battery / system voltage — high"
          }), createVNode("td", {
            children: "Rectifier / regulator"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "Voltage above ~15 V. Failed rectifier/regulator — replace immediately to prevent ECU and battery damage."
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "63"
          }), createVNode("td", {
            children: "ECU internal fault — RAM or ROM error"
          }), createVNode("td", {
            children: "ECU"
          }), createVNode("td", {
            children: createVNode("span", {
              class: "severity-high",
              children: "High"
            })
          }), createVNode("td", {
            children: "ECU self-test failed. Try disconnecting battery for 10 minutes to reset. If persistent, ECU replacement likely required."
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "clearing-stored-fault-codes",
      children: "Clearing Stored Fault Codes"
    }), "\n", createVNode(_components.h3, {
      id: "method-1--battery-disconnect-universal",
      children: "Method 1 — Battery Disconnect (Universal)"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Ensure the ignition is ", createVNode(_components.strong, {
          children: "OFF"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Disconnect the ", createVNode(_components.strong, {
          children: "negative (–) terminal"
        }), " from the battery."]
      }), "\n", createVNode(_components.li, {
        children: ["Wait at least ", createVNode(_components.strong, {
          children: "10 minutes"
        }), " for ECU capacitors to discharge fully."]
      }), "\n", createVNode(_components.li, {
        children: "Reconnect the battery. Start the engine and confirm the CEL is extinguished."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Important:"
        }), " Clearing codes does not fix the underlying fault. If the root cause is not repaired, the code will return within a few minutes of running."]
      })
    }), "\n", createVNode(_components.h3, {
      id: "method-2--ignition-cycle-reset-some-ecus",
      children: "Method 2 — Ignition Cycle Reset (some ECUs)"
    }), "\n", createVNode(_components.p, {
      children: "Perform five full ignition ON → OFF cycles in quick succession. On some ECU types this triggers an adaptive memory reset. Codes may persist on other types — use Method 1 if codes return immediately."
    }), "\n", createVNode(_components.h2, {
      id: "sensor-location-reference",
      children: "Sensor Location Reference"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Sensor"
          }), createVNode("th", {
            children: "Typical Location (GY6 125/150)"
          }), createVNode("th", {
            children: "Connector Colour"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "MAP / IAP sensor"
          }), createVNode("td", {
            children: "Intake manifold or air box, short vacuum hose"
          }), createVNode("td", {
            children: "Black 3-pin"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "IAT sensor"
          }), createVNode("td", {
            children: "Air filter box, or combined with MAP in T-MAP unit"
          }), createVNode("td", {
            children: "Black 2-pin or 3-pin (T-MAP)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "CTS sensor"
          }), createVNode("td", {
            children: "Cylinder head coolant passage (liquid-cooled) or head fin (air-cooled simulacrum)"
          }), createVNode("td", {
            children: "Black 2-pin"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "TPS"
          }), createVNode("td", {
            children: "Side of throttle body, on throttle shaft"
          }), createVNode("td", {
            children: "Black 3-pin"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "O₂ / Lambda"
          }), createVNode("td", {
            children: "Exhaust header, 15–25 cm from cylinder head"
          }), createVNode("td", {
            children: "Black 4-pin (heated)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "CKP sensor"
          }), createVNode("td", {
            children: "Left-side engine case, near flywheel/magneto"
          }), createVNode("td", {
            children: "Black 3-pin"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "CMP sensor"
          }), createVNode("td", {
            children: "Cylinder head cam cover, rear or side"
          }), createVNode("td", {
            children: "Black 3-pin"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "ISC / IAC valve"
          }), createVNode("td", {
            children: "Throttle body bypass circuit"
          }), createVNode("td", {
            children: "Black 4-pin"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "diagnostic-flow--cel-is-on",
      children: "Diagnostic Flow — CEL Is On"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Enter manual diagnostic mode"
        }), " using the procedure above for your ECU type."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Record all flash codes"
        }), " — multiple codes may be stored. Write every code down before starting repairs."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cross-reference the code table"
        }), " above to identify the affected component."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Inspect wiring and connectors first"
        }), " — the majority of faults on Chinese EFI scooters are due to corroded connectors or chafed wiring, not failed sensors."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Test the sensor"
        }), " with a multimeter (resistance, voltage, or signal as appropriate for the sensor type)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Repair or replace"
        }), " as required."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Clear the code"
        }), " (battery disconnect method) and retest."]
      }), "\n", createVNode(_components.li, {
        children: "If the same code returns immediately, recheck your repair. If a different code appears, continue through the code table."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Pro tip:"
        }), " Always repair the highest-severity code first. A battery voltage fault (Code 56/57) can cause multiple secondary sensor codes to appear because sensor supply voltages are affected. Fixing the root voltage issue may clear several codes at once."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "related-guides",
      children: "Related Guides"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "gy6-efi-fuel-injection-troubleshooting.html",
          children: "GY6 EFI Fuel Injection Full Troubleshooting Guide"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "gy6-no-start-troubleshooting.html",
          children: "GY6 Scooter Won’t Start — Troubleshooting Checklist"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "gy6-air-leak-diagnosis.html",
          children: "Diagnosing Air Leaks and Vacuum Sucking"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/repair-guides/gy6-ignition-coil-guide.html",
          children: "Ignition Coil Replacement Guide"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Sources: GY6 EFI service manuals (KEIHIN PGM-FI, Delphi MT05); Piaggio D-Tronik ECU documentation; community-verified flash code data from scootdawg.com and modernvespa.com forums. Licensed CC BY-SA 4.0."
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

const url = "src/content/diagnostics/gy6-efi-cel-flash-codes.mdx";
const file = "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-efi-cel-flash-codes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-efi-cel-flash-codes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
