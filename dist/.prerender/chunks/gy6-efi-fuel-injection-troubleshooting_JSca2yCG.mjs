import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_CtnUbeEl.mjs';
import './VideoEmbed_D3SFnAEQ.mjs';
import { $ as $$Callout } from './Callout_CIe87PJ6.mjs';
import { $ as $$SourceBox } from './SourceBox_BiqyyDv_.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 EFI Fuel Injection Troubleshooting Guide",
  "description": "GY6 EFI fuel injection troubleshooting guide. Injector, TPS, MAP sensor, O2 sensor, and ECU fault diagnosis for Chinese EFI 125cc and 150cc scooter models.",
  "publishDate": "2026-05-08",
  "updatedDate": "2026-05-08",
  "difficulty": "Beginner",
  "timeEstimate": "~30 min",
  "tags": ["GY6", "Fuel Injection", "EFI", "Diagnostics"],
  "appliesTo": ["GY6 50cc (139QMB)", "GY6 125cc (152QMI)", "GY6 150cc (157QMJ)", "BTC Riva", "La Souris Sourini", "La Souris City S", "Santini Capri"],
  "videos": [],
  "sources": [{
    "name": "GY6 EFI Troubleshooting — Rolling Wrench Denver",
    "url": "https://www.rollingwrenchdenver.com/blogs/news/i-am-having-trouble-with-my-gy6-efi-system"
  }, {
    "name": "GY6 Fuel Pump Guide — Kemso Racing",
    "url": "https://www.kemsoracing.com/blogs/news/the-ultimate-guide-to-gy6-fuel-pump-maintenance-troubleshooting-replacement"
  }],
  "canonical": "https://ismr.online/diagnostics/gy6-efi-fuel-injection-troubleshooting.html",
  "draft": false,
  "category": "fuel",
  "engine": "gy6",
  "fuel": "efi",
  "section": "Fuel System & Idle"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "gy6-efi-system-overview",
    "text": "GY6 EFI System Overview"
  }, {
    "depth": 2,
    "slug": "first-steps-before-any-diagnosis",
    "text": "First Steps: Before Any Diagnosis"
  }, {
    "depth": 2,
    "slug": "symptom-based-diagnostic-table",
    "text": "Symptom-Based Diagnostic Table"
  }, {
    "depth": 2,
    "slug": "reading-efi-fault-codes-on-gy6",
    "text": "Reading EFI Fault Codes on GY6"
  }, {
    "depth": 2,
    "slug": "blink-code-method-no-scanner",
    "text": "Blink-Code Method (No Scanner)"
  }, {
    "depth": 2,
    "slug": "common-ecotrons--probld-efi-fault-codes",
    "text": "Common Ecotrons / ProBld EFI Fault Codes"
  }, {
    "depth": 2,
    "slug": "fuel-pump-testing",
    "text": "Fuel Pump Testing"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Added: 2026-05-08  |  Sources: ", createVNode(_components.a, {
        href: "https://www.rollingwrenchdenver.com/blogs/news/i-am-having-trouble-with-my-gy6-efi-system",
        children: "rollingwrenchdenver.com"
      }), ", ", createVNode(_components.a, {
        href: "https://www.kemsoracing.com/blogs/news/the-ultimate-guide-to-gy6-fuel-pump-maintenance-troubleshooting-replacement",
        children: "kemsoracing.com"
      }), ", ", createVNode(_components.a, {
        href: "https://49ccscoot.proboards.com/thread/32665/gy6-fuel-injection-build",
        children: "49ccscoot.proboards.com"
      })]
    }), "\n", createVNode(_components.p, {
      children: "GY6 Fuel Injection EFI Diagnostics"
    }), "\n", createVNode($$SourceBox, {
      sources: [{
        name: "GY6 EFI Troubleshooting — Rolling Wrench Denver",
        url: "https://www.rollingwrenchdenver.com/blogs/news/i-am-having-trouble-with-my-gy6-efi-system"
      }, {
        name: "GY6 Fuel Pump Guide — Kemso Racing",
        url: "https://www.kemsoracing.com/blogs/news/the-ultimate-guide-to-gy6-fuel-pump-maintenance-troubleshooting-replacement"
      }]
    }), "\n", createVNode(_components.p, {
      children: "While the majority of GY6-engined scooters sold in Europe and the UK use a carburetor, a growing number of models — and all Euro 5-compliant variants — use electronic fuel injection (EFI). Some owners also retrofit aftermarket EFI systems (such as the Ecotrons or Rolling Wrench ProBld kit) to carbureted GY6 engines. This guide covers the most common EFI fault symptoms and how to diagnose them systematically."
    }), "\n", createVNode(_components.h2, {
      id: "gy6-efi-system-overview",
      children: "GY6 EFI System Overview"
    }), "\n", createVNode(_components.p, {
      children: "A typical GY6 EFI system consists of the following components working together:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "ECU (Engine Control Unit):"
        }), " The electronic brain; maps fuel injection quantity and ignition timing based on sensor inputs."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Electric fuel pump:"
        }), " Mounted in or near the fuel tank; delivers fuel at 15–25 PSI (1.0–1.7 bar) to the injector."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Fuel injector:"
        }), " A solenoid valve that sprays a metered amount of fuel into the intake port."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Throttle position sensor (TPS):"
        }), " Reports throttle angle to the ECU."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Manifold absolute pressure sensor (MAP) or intake air temperature sensor (IAT):"
        }), " Measures intake conditions for fuel map corrections."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Coolant temperature sensor (CTS):"
        }), " Enables cold-start enrichment."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Crankshaft/camshaft position sensor:"
        }), " Triggers injection timing."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "first-steps-before-any-diagnosis",
      children: "First Steps: Before Any Diagnosis"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Check the battery voltage with a multimeter. EFI systems need a minimum of approximately 11.5 V to operate correctly. A weak battery is a very common cause of erratic EFI behaviour."
      }), "\n", createVNode(_components.li, {
        children: "Check the main fuse and any EFI-specific inline fuses in the wiring harness."
      }), "\n", createVNode(_components.li, {
        children: "Inspect all EFI connector plugs for corrosion, pushed-back terminals, or water ingress. Clean with electrical contact cleaner and reseat firmly."
      }), "\n", createVNode(_components.li, {
        children: "Verify the ground connections: the EFI system requires a clean, low-resistance earth. A dedicated earth wire from battery negative to a bare metal chassis point is essential. A poor earth is responsible for a significant proportion of EFI faults."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: ["️ ", createVNode(_components.strong, {
          children: "EFI vs carburetor:"
        }), " Do not apply aerosol starting fluid (ether) to a fuel-injected GY6 engine — it can damage the injector seal and the catalytic converter if fitted. Use the correct cold-start procedure instead."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "symptom-based-diagnostic-table",
      children: "Symptom-Based Diagnostic Table"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Symptom"
          }), createVNode("th", {
            children: "Most Likely Cause"
          }), createVNode("th", {
            children: "Diagnostic Action"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Engine cranks but will not fire"
          }), createVNode("td", {
            children: "No fuel pressure; dead fuel pump; ECU not powered"
          }), createVNode("td", {
            children: "Listen for pump prime (2-sec buzz on key-on); test fuel pressure at injector inlet (target: 15–25 PSI)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Hard cold start only"
          }), createVNode("td", {
            children: "CTS fault; cold-start enrichment not working"
          }), createVNode("td", {
            children: "Check CTS resistance (typically 2–3 kΩ at 20°C); inspect CTS wiring connector"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Rough idle, intermittent stall"
          }), createVNode("td", {
            children: "TPS out of range; air leak; dirty injector"
          }), createVNode("td", {
            children: "Check TPS voltage (typically 0.4–0.8 V at idle); spray intake manifold joints with carb cleaner while running to detect air leaks"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Black smoke, rich running"
          }), createVNode("td", {
            children: "TPS stuck or miscalibrated; injector stuck open; MAP sensor fault"
          }), createVNode("td", {
            children: "Check TPS signal sweep from idle to WOT (should read 0.4 V to ~4.5 V); test injector resistance (typically 11–16 Ω)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "White smoke, lean running"
          }), createVNode("td", {
            children: "Fuel pump weak; injector clogged; fuel filter blocked"
          }), createVNode("td", {
            children: "Test fuel pressure under load; replace fuel filter; clean injector with ultrasonic cleaner or injector-cleaning kit"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Loss of power above half throttle"
          }), createVNode("td", {
            children: "Fuel pump not maintaining pressure at high demand; clogged fuel filter"
          }), createVNode("td", {
            children: "Test pump pressure at full throttle simulation (should not drop below 15 PSI); replace filter"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Engine misfires, popping on deceleration"
          }), createVNode("td", {
            children: "Ignition coil; crankshaft position sensor; air leak"
          }), createVNode("td", {
            children: "Check spark output; test crank position sensor resistance per manufacturer spec"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Check-engine / fault lamp illuminated"
          }), createVNode("td", {
            children: "Stored fault code(s)"
          }), createVNode("td", {
            children: "Read fault codes (see below)"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "reading-efi-fault-codes-on-gy6",
      children: "Reading EFI Fault Codes on GY6"
    }), "\n", createVNode(_components.p, {
      children: "Factory EFI GY6 scooters and aftermarket EFI kits typically signal fault codes either through a malfunction indicator lamp (MIL) blink pattern or via a diagnostic connector that accepts a generic OBD-II style reader or the manufacturer’s proprietary tool."
    }), "\n", createVNode(_components.h2, {
      id: "blink-code-method-no-scanner",
      children: "Blink-Code Method (No Scanner)"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Switch the ignition on (do not start the engine)."
      }), "\n", createVNode(_components.li, {
        children: "Observe the warning lamp: it will flash a series of long and short pulses to indicate a fault code. The pattern is typically: long flashes = tens digit, short flashes = units digit. For example, two long flashes followed by three short flashes = fault code 23."
      }), "\n", createVNode(_components.li, {
        children: "Count all flash sequences carefully and write them down."
      }), "\n", createVNode(_components.li, {
        children: "Cross-reference against your ECU’s fault code table (supplied with aftermarket kits; available in the manufacturer service manual for factory EFI models)."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "common-ecotrons--probld-efi-fault-codes",
      children: "Common Ecotrons / ProBld EFI Fault Codes"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Code"
          }), createVNode("th", {
            children: "Description"
          }), createVNode("th", {
            children: "Typical Cause"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "11"
          }), createVNode("td", {
            children: "Crankshaft position sensor signal absent"
          }), createVNode("td", {
            children: "Sensor gap too large; wiring break; sensor failure"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "13"
          }), createVNode("td", {
            children: "MAP/vacuum sensor out of range"
          }), createVNode("td", {
            children: "Disconnected vacuum line; sensor failure"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "14"
          }), createVNode("td", {
            children: "Intake air temperature sensor fault"
          }), createVNode("td", {
            children: "Connector corrosion; sensor open circuit"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "21"
          }), createVNode("td", {
            children: "Coolant temperature sensor fault"
          }), createVNode("td", {
            children: "Open or short in CTS circuit; sensor failure"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "22"
          }), createVNode("td", {
            children: "Throttle position sensor fault"
          }), createVNode("td", {
            children: "TPS connector loose; incorrect idle voltage; sensor failure"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "44"
          }), createVNode("td", {
            children: "O₂ / lambda sensor (lean)"
          }), createVNode("td", {
            children: "Air leak; lean fuel map; O₂ sensor aging"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "45"
          }), createVNode("td", {
            children: "O₂ / lambda sensor (rich)"
          }), createVNode("td", {
            children: "Stuck injector; rich fuel map; O₂ sensor failure"
          })]
        })]
      })
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["� ", createVNode(_components.strong, {
          children: "Tip:"
        }), " For aftermarket EFI kits (Ecotrons SE-EFI, Rolling Wrench ProBld), the installation manual PDF contains full fault code tables and sensor resistance charts. Download it from the manufacturer’s website and keep a copy with the scooter’s documents."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "fuel-pump-testing",
      children: "Fuel Pump Testing"
    }), "\n", createVNode(_components.p, {
      children: "The electric fuel pump on an EFI GY6 typically operates at 15–25 PSI. Testing procedure:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Connect a fuel pressure gauge (T-fitting or Schrader port if available) between the fuel pump outlet and the injector inlet."
      }), "\n", createVNode(_components.li, {
        children: "Switch the ignition on — the pump should run for approximately 2 seconds to prime, then stop. Pressure should rise to the operating range and hold."
      }), "\n", createVNode(_components.li, {
        children: "If pressure does not rise, test voltage at the pump connector (should be battery voltage when the ECU activates the pump relay)."
      }), "\n", createVNode(_components.li, {
        children: "If voltage is present but pressure is absent or low, the pump is failing and should be replaced. Kemso Racing and VMC Chinese Parts both supply direct-replacement GY6 EFI pumps at affordable prices."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["� ", createVNode(_components.strong, {
          children: "Related guides:"
        }), " ", createVNode(_components.a, {
          href: "gy6-no-start-troubleshooting.html",
          children: "GY6 Won’t Start — Troubleshooting Checklist"
        }), " | ", createVNode(_components.a, {
          href: "/repair-guides/gy6-carburetor-cleaning-guide.html",
          children: "GY6 carburetor Deep-Cleaning Guide"
        })]
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

const url = "src/content/diagnostics/gy6-efi-fuel-injection-troubleshooting.mdx";
const file = "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-efi-fuel-injection-troubleshooting.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-efi-fuel-injection-troubleshooting.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
