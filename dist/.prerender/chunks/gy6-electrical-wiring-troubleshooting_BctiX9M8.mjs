import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_C1PmNaGI.mjs';
import './VideoEmbed_CYqcL_Lr.mjs';
import { $ as $$Callout } from './Callout_Cmo--wc0.mjs';
import { $ as $$SourceBox } from './SourceBox_B6HrCIyX.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 Electrical System & Wiring Troubleshooting Guide",
  "description": "GY6 electrical system and wiring troubleshooting guide. Diagnose no-spark, charging faults, and lighting issues on 50/125/150cc GY6 scooters with a multimeter.",
  "publishDate": "2026-05-12",
  "updatedDate": "2026-05-12",
  "difficulty": "Beginner",
  "timeEstimate": "~30 min",
  "tags": ["GY6", "Electrical", "Wiring"],
  "appliesTo": ["GY6 50cc (139QMB)", "GY6 125cc (152QMI)", "GY6 150cc (157QMJ)", "BTC Riva", "La Souris Sourini", "La Souris City S", "Santini Capri"],
  "videos": [],
  "sources": [{
    "name": "Buggy Depot — GY6 150cc Ignition Troubleshooting",
    "url": "https://www.buggydepot.com/tech-center/gy6-150cc-ignition-troubleshooting-guide-no-spark/"
  }, {
    "name": "Moo Wiring — GY6 DC CDI Wiring Diagrams",
    "url": "https://moowiring.com/"
  }],
  "canonical": "https://ismr.online/repair-guides/gy6-electrical-wiring-troubleshooting.html",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "gy6-electrical-system-overview",
    "text": "GY6 Electrical System Overview"
  }, {
    "depth": 4,
    "slug": "ac-cdi-system",
    "text": "AC CDI System"
  }, {
    "depth": 4,
    "slug": "dc-cdi-system",
    "text": "DC CDI System"
  }, {
    "depth": 2,
    "slug": "key-electrical-components",
    "text": "Key Electrical Components"
  }, {
    "depth": 2,
    "slug": "standard-gy6-wire-colour-codes",
    "text": "Standard GY6 Wire Colour Codes"
  }, {
    "depth": 2,
    "slug": "systematic-fault-diagnosis",
    "text": "Systematic Fault Diagnosis"
  }, {
    "depth": 3,
    "slug": "before-you-start--ground-first",
    "text": "Before You Start — Ground First"
  }, {
    "depth": 3,
    "slug": "no-spark-diagnosis",
    "text": "No Spark Diagnosis"
  }, {
    "depth": 3,
    "slug": "charging-system-diagnosis",
    "text": "Charging System Diagnosis"
  }, {
    "depth": 3,
    "slug": "lighting-fault-diagnosis",
    "text": "Lighting Fault Diagnosis"
  }, {
    "depth": 2,
    "slug": "essential-multimeter-tests-at-a-glance",
    "text": "Essential Multimeter Tests at a Glance"
  }, {
    "depth": 2,
    "slug": "common-wiring-connector-problems-on-gy6-scooters",
    "text": "Common Wiring Connector Problems on GY6 Scooters"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Added: 2026-05-12 | Sources: ", createVNode(_components.a, {
        href: "https://www.buggydepot.com/tech-center/gy6-150cc-ignition-troubleshooting-guide-no-spark/",
        children: "Buggy Depot"
      }), ", ", createVNode(_components.a, {
        href: "https://moowiring.com/",
        children: "Moo Wiring"
      }), ", ", createVNode(_components.a, {
        href: "https://scootdawg.proboards.com/",
        children: "ScootDawg Forum"
      }), " |"]
    }), "\n", createVNode(_components.p, {
      children: "GY6 Electrical Wiring"
    }), "\n", createVNode($$SourceBox, {
      sources: [{
        name: "Buggy Depot — GY6 150cc Ignition Troubleshooting",
        url: "https://www.buggydepot.com/tech-center/gy6-150cc-ignition-troubleshooting-guide-no-spark/"
      }, {
        name: "Moo Wiring — GY6 DC CDI Wiring Diagrams",
        url: "https://moowiring.com/"
      }]
    }), "\n", createVNode(_components.p, {
      children: "Electrical faults are among the most common and misdiagnosed problems on GY6-engine scooters. Poor grounding, corroded connectors, and misunderstood wiring configurations account for the majority of intermittent starting failures, charging issues, and lighting faults. This guide explains the GY6 electrical system architecture and provides a systematic diagnostic process."
    }), "\n", createVNode(_components.h2, {
      id: "gy6-electrical-system-overview",
      children: "GY6 Electrical System Overview"
    }), "\n", createVNode(_components.p, {
      children: ["The GY6 uses a ", createVNode(_components.strong, {
        children: "magneto-based AC/DC charging system"
      }), ". All modern GY6 scooters use a DC electrical system (battery-powered), but the stator generates AC current which the regulator/rectifier converts to regulated DC. There are two common ignition system configurations:"]
    }), "\n", createVNode(_components.h4, {
      id: "ac-cdi-system",
      children: "AC CDI System"
    }), "\n", createVNode(_components.p, {
      children: "Older configuration. CDI fires directly from AC current produced by the stator’s pickup coil. Does not rely on battery voltage for spark. Common on pre-2010 GY6 50cc models."
    }), "\n", createVNode(_components.h4, {
      id: "dc-cdi-system",
      children: "DC CDI System"
    }), "\n", createVNode(_components.p, {
      children: "Modern configuration. CDI draws energy from the battery (12V DC). Requires a charged battery to fire spark. Standard on 125cc/150cc models and all Euro 4 variants."
    }), "\n", createVNode(_components.h2, {
      id: "key-electrical-components",
      children: "Key Electrical Components"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Component"
          }), createVNode("th", {
            children: "Function"
          }), createVNode("th", {
            children: "Typical Failure Symptoms"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Stator (Magneto)"
            })
          }), createVNode("td", {
            children: "Generates AC current for charging and (on AC systems) ignition"
          }), createVNode("td", {
            children: "No charge, no spark (AC CDI), weak spark"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Regulator/Rectifier (RR)"
            })
          }), createVNode("td", {
            children: "Converts AC to DC, regulates voltage to ~14V"
          }), createVNode("td", {
            children: "Battery overcharge or no charge, flickering lights"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "CDI Unit"
            })
          }), createVNode("td", {
            children: "Controls spark timing and ignition pulse"
          }), createVNode("td", {
            children: "No spark, spark only at low RPM, intermittent starting"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Ignition Coil"
            })
          }), createVNode("td", {
            children: "Steps up low voltage CDI pulse to 20,000+ V for spark plug"
          }), createVNode("td", {
            children: "No spark or weak spark, spark plug fouling rapidly"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Pickup Coil (Trigger)"
            })
          }), createVNode("td", {
            children: "Detects crankshaft position and signals CDI"
          }), createVNode("td", {
            children: "No spark at all RPMs, engine won’t start"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Battery (12V 5–7 Ah)"
            })
          }), createVNode("td", {
            children: "Powers DC CDI, starter motor, lights, horn"
          }), createVNode("td", {
            children: "No electric start, no spark (DC CDI), weak crank"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Main Fuse (10–15 A)"
            })
          }), createVNode("td", {
            children: "Protects main wiring harness from overcurrent"
          }), createVNode("td", {
            children: "Complete electrical shutdown"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "standard-gy6-wire-colour-codes",
      children: "Standard GY6 Wire Colour Codes"
    }), "\n", createVNode(_components.p, {
      children: "Wire colour conventions are relatively consistent across GY6 manufacturers, though not 100% universal. Always verify against your specific wiring diagram:"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Wire Colour"
          }), createVNode("th", {
            children: "Typical Function"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Red"
          }), createVNode("td", {
            children: "Battery positive (+12V switched or permanent)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Black"
          }), createVNode("td", {
            children: "Ground (chassis / battery negative)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Yellow"
          }), createVNode("td", {
            children: "AC output from stator (charging coil)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Green"
          }), createVNode("td", {
            children: "Ground (often for lighting circuits)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Blue"
          }), createVNode("td", {
            children: "DC power from regulator/rectifier"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "White"
          }), createVNode("td", {
            children: "AC lighting coil or kill switch"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Orange"
          }), createVNode("td", {
            children: "CDI signal / ignition pulse"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Pink / Light Green"
          }), createVNode("td", {
            children: "Pickup coil signal"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Grey / Brown"
          }), createVNode("td", {
            children: "Lighting circuits (varies by model)"
          })]
        })]
      })
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["� ", createVNode(_components.strong, {
          children: "Always obtain the wiring diagram for your specific model."
        }), " ScootDawg Forum and 49ccScoot host generic GY6 wiring diagrams. Many BTC Riva, La Souris Sourini, and Santini Capri models use a nearly identical loom to the generic GY6 150cc Chinese scooter diagram."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "systematic-fault-diagnosis",
      children: "Systematic Fault Diagnosis"
    }), "\n", createVNode(_components.h3, {
      id: "before-you-start--ground-first",
      children: "Before You Start — Ground First"
    }), "\n", createVNode(_components.p, {
      children: "Poor grounding is the single most common electrical fault on Chinese scooters. Before testing any component, do the following:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Locate the main ground point — usually a black wire bolted to the engine case or frame near the battery."
      }), "\n", createVNode(_components.li, {
        children: "Unbolt it, clean the contact surface with sandpaper until shiny, and re-bolt firmly."
      }), "\n", createVNode(_components.li, {
        children: "Inspect all black wire connectors in the loom. Clean or replace corroded connectors."
      }), "\n", createVNode(_components.li, {
        children: "Check that the battery negative cable makes a solid connection to the frame."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "no-spark-diagnosis",
      children: "No Spark Diagnosis"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Check for spark:"
        }), " Remove the spark plug. Reconnect the plug lead. Hold the plug against the engine case (ground). Crank the engine. You should see a strong blue spark. A weak yellow spark or no spark means a fault in the ignition chain."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Check the kill switch:"
        }), " Disconnect the kill switch wire from the CDI (usually the white/black wire). Try cranking again. If spark returns, the kill switch is shorted — clean or replace it."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Check the sidestand switch:"
        }), " Many GY6s cut ignition when the sidestand is down. Disconnect the sidestand switch and jump its two terminals together. If spark returns, the switch is faulty."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Check CDI input voltage (DC CDI only):"
        }), " With a multimeter, probe the red/battery wire on the CDI connector to ground. You should read 12V when the ignition is on. No voltage → check fuse and ignition switch."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Test the pickup coil:"
        }), " Disconnect the pickup coil from the CDI. Measure resistance across the two pickup coil wires with a multimeter. Typical specification is 80–150 Ω. Open circuit (infinite resistance) or short to ground means replace the stator assembly."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Test the ignition coil primary:"
        }), " Measure resistance between the coil’s two primary terminals (where the CDI wire connects). Typical: 0.3–0.8 Ω. Test secondary (plug cap to ground): 5,000–15,000 Ω. Out-of-specification → replace coil."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Substitute the CDI:"
        }), " If all components test within specification but there is still no spark, the CDI itself is likely faulty. CDI units are inexpensive (€10–30); swap with a known-good unit to confirm."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "charging-system-diagnosis",
      children: "Charging System Diagnosis"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Battery voltage:"
        }), " Measure battery voltage at rest (engine off, 15 minutes after last use). Healthy 12V AGM battery: 12.6–12.8V. Below 12.0V indicates a discharged or failing battery."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Charging voltage:"
        }), " Start the engine. Measure battery voltage with the engine running at ~3,500 RPM. Should read 13.8–14.5V. Above 15V indicates a failed regulator/rectifier (RR). Below 13.5V at speed indicates a weak stator or failed RR."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Stator AC output:"
        }), " Disconnect the stator yellow wire from the RR. With the engine running at 3,500 RPM, measure AC voltage between the yellow wire and engine ground. Should read 30–60V AC. Low output suggests a weak stator winding."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "RR diode test:"
        }), " With a multimeter in diode test mode, test each diode leg of the rectifier section of the RR. A shorted diode (reads 0 in both directions) means replace the RR."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "lighting-fault-diagnosis",
      children: "Lighting Fault Diagnosis"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Headlight not working:"
        }), " First check the main fuse and the dedicated headlight fuse/relay if fitted. Check for 12V at the headlight connector with ignition on. If voltage is present, the bulb is blown — replace with correct rating (typically 12V 35/35W halogen, BA20d base)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Indicators flashing too fast or too slow:"
        }), " Caused by mismatched bulb wattage or a failing flasher relay. Replace with standard 10W indicator bulbs and/or the flasher relay."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Brake light not working:"
        }), " Check both front (lever) and rear (pedal) brake light switches. Measure resistance across the switch — should read closed circuit (0 Ω) when brake is applied. Clean or adjust switch if sticking open."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "essential-multimeter-tests-at-a-glance",
      children: "Essential Multimeter Tests at a Glance"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Test"
          }), createVNode("th", {
            children: "Meter Setting"
          }), createVNode("th", {
            children: "Good Result"
          }), createVNode("th", {
            children: "Bad Result"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Battery voltage (rest)"
          }), createVNode("td", {
            children: "DC Volts"
          }), createVNode("td", {
            children: "12.6–12.8V"
          }), createVNode("td", {
            children: "<12.0V — charge or replace"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Charging voltage"
          }), createVNode("td", {
            children: "DC Volts (engine on)"
          }), createVNode("td", {
            children: "13.8–14.5V"
          }), createVNode("td", {
            children: "<13.5V or >15V"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Stator AC output"
          }), createVNode("td", {
            children: "AC Volts (engine on)"
          }), createVNode("td", {
            children: "30–60V AC"
          }), createVNode("td", {
            children: "<20V — check stator"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Pickup coil resistance"
          }), createVNode("td", {
            children: "Resistance (Ω)"
          }), createVNode("td", {
            children: "80–150 Ω"
          }), createVNode("td", {
            children: "0 Ω (short) or OL (open)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Ignition coil primary"
          }), createVNode("td", {
            children: "Resistance (Ω)"
          }), createVNode("td", {
            children: "0.3–0.8 Ω"
          }), createVNode("td", {
            children: "OL (open) — replace coil"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Ignition coil secondary"
          }), createVNode("td", {
            children: "Resistance (Ω)"
          }), createVNode("td", {
            children: "5,000–15,000 Ω"
          }), createVNode("td", {
            children: "OL or <1,000 Ω"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Ground continuity"
          }), createVNode("td", {
            children: "Continuity / Ω"
          }), createVNode("td", {
            children: "0–0.5 Ω"
          }), createVNode("td", {
            children: ">1 Ω — clean ground"
          })]
        })]
      })
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["� ", createVNode(_components.strong, {
          children: "GY6 wiring diagrams:"
        }), " Generic DC CDI GY6 150cc wiring diagrams are available at ", createVNode(_components.a, {
          href: "https://moowiring.com/",
          children: "moowiring.com"
        }), " and on the ", createVNode(_components.a, {
          href: "https://scootdawg.proboards.com/",
          children: "ScootDawg forum"
        }), ". The BTC Riva 50, La Souris Sourini, and Santini Capri all use a loom closely matching the standard Chinese 50cc GY6 DC CDI diagram."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "common-wiring-connector-problems-on-gy6-scooters",
      children: "Common Wiring Connector Problems on GY6 Scooters"
    }), "\n", createVNode(_components.p, {
      children: "GY6 scooters use generic Molex-style multi-pin connectors that are vulnerable to corrosion, especially in wet climates. The most problematic connectors to check are the main harness junction block (usually under the headset covers), the CDI connector, the RR connector (which handles high charging current and can melt if undersized), and the ignition switch connector. Apply dielectric grease to all connectors when reassembling to prevent future corrosion."
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

const url = "src/content/repair-guides/gy6-electrical-wiring-troubleshooting.mdx";
const file = "/sessions/tender-pensive-knuth/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-electrical-wiring-troubleshooting.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/tender-pensive-knuth/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-electrical-wiring-troubleshooting.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
