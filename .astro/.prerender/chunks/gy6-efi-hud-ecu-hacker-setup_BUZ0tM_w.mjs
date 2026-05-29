import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_BMl4oaXa.mjs';
import { $ as $$VideoEmbed } from './VideoEmbed_mQVbxB8I.mjs';
import { $ as $$Callout } from './Callout_DQ5SKjQD.mjs';
import 'clsx';

/*SOURCE_BOX_PLACEHOLDER*/
const frontmatter = {
  "title": "GY6 EFI Diagnostics — HUD ECU Hacker Setup Guide",
  "description": "Step-by-step setup guide for HUD ECU Hacker on GY6 EFI scooters. Install FTDI drivers, connect OBD2 KKL adapter to the 6-pin diagnostic port, and read live…",
  "publishDate": "2026-05-19",
  "updatedDate": "2026-05-19",
  "difficulty": "Beginner",
  "timeEstimate": "~30 min",
  "tags": ["diagnostics", "GY6 EFI", "HUD ECU Hacker", "OBD2 KKL", "Delphi MT05", "fault codes", "Windows"],
  "appliesTo": ["GY6 50cc (139QMB)", "GY6 125cc (152QMI)", "GY6 150cc (157QMJ)", "BTC Riva", "La Souris Sourini", "La Souris City S", "Santini Capri"],
  "videos": [{
    "id": "cF_D_Exy86Y",
    "title": "HUD ECU HACKER!! A Must Have Diagnostic Software Tool for GY6 EFI Scooters",
    "creator": "YouTube",
    "position": "hero"
  }, {
    "id": "BI4WgTFN8mM",
    "title": "Testing HUD ECU Hacker on a Chinese scooter — Lexmoto Titan walkthrough",
    "creator": "YouTube",
    "position": "inline"
  }],
  "sources": [],
  "canonical": "https://ismr.online/diagnostics/gy6-efi-hud-ecu-hacker-setup.html",
  "draft": false,
  "category": "fuel",
  "engine": "gy6",
  "fuel": "efi",
  "section": "Fuel System & Idle",
  "cardTag": "GY6 · EFI · Advanced"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "video-guide",
    "text": "Video Guide"
  }, {
    "depth": 2,
    "slug": "what-you-need",
    "text": "What You Need"
  }, {
    "depth": 3,
    "slug": "hardware",
    "text": "Hardware"
  }, {
    "depth": 3,
    "slug": "software-free",
    "text": "Software (free)"
  }, {
    "depth": 2,
    "slug": "setup-steps",
    "text": "Setup Steps"
  }, {
    "depth": 3,
    "slug": "install-the-ftdi-ft232rl-drivers",
    "text": "Install the FTDI FT232RL Drivers"
  }, {
    "depth": 3,
    "slug": "download-and-install-hud-ecu-hacker",
    "text": "Download and Install HUD ECU Hacker"
  }, {
    "depth": 3,
    "slug": "locate-the-6-pin-diagnostic-connector-on-your-scooter",
    "text": "Locate the 6-Pin Diagnostic Connector on Your Scooter"
  }, {
    "depth": 3,
    "slug": "connect-the-adapter-chain",
    "text": "Connect the Adapter Chain"
  }, {
    "depth": 3,
    "slug": "configure-hud-ecu-hacker-and-connect",
    "text": "Configure HUD ECU Hacker and Connect"
  }, {
    "depth": 3,
    "slug": "read-live-data-and-fault-codes",
    "text": "Read Live Data and Fault Codes"
  }, {
    "depth": 2,
    "slug": "additional-reference-video",
    "text": "Additional Reference Video"
  }, {
    "depth": 2,
    "slug": "important-caveats",
    "text": "Important Caveats"
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
    code: "code",
    em: "em",
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
    children: [createVNode(_components.p, {
      children: ["Most GY6 EFI scooters sold in Europe from 2016 onwards carry a ", createVNode(_components.strong, {
        children: "Delphi MT05 or MT05.2 ECU"
      }), " that exposes a K-line diagnostic interface through a 6-pin connector hidden under the seat. With a €5–10 adapter and the free ", createVNode(_components.strong, {
        children: "HUD ECU Hacker"
      }), " software you can read and clear fault codes, monitor every live sensor, and even back up or reflash the ECU — directly from any Windows laptop."]
    }), "\n", createVNode(_components.p, {
      children: "This guide walks you through the complete setup: buying the right hardware, installing drivers, locating the scooter connector, and making your first live connection."
    }), "\n", createVNode(_components.p, {
      children: "Difficulty Beginner"
    }), "\n", createVNode(_components.p, {
      children: "Time Required 30 – 45 min"
    }), "\n", createVNode(_components.p, {
      children: "Software Cost Free"
    }), "\n", createVNode(_components.p, {
      children: "Hardware Cost €5 – €15"
    }), "\n", createVNode(_components.p, {
      children: "OS Windows 7 / 10 / 11"
    }), "\n", createVNode(_components.h2, {
      id: "video-guide",
      children: "Video Guide"
    }), "\n", createVNode($$VideoEmbed, {
      videoId: "cF_D_Exy86Y",
      title: "HUD ECU HACKER!! A Must Have Diagnostic Software Tool for GY6 EFI Scooters",
      creator: "YouTube"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Video:"
      }), " “HUD ECU HACKER!! A Must Have Diag Software Tool.” (2026) ", createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=cF_D_Exy86Y",
        children: "↗ Watch on YouTube"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "what-you-need",
      children: "What You Need"
    }), "\n", createVNode(_components.h3, {
      id: "hardware",
      children: "Hardware"
    }), "\n", createVNode(_components.p, {
      children: ["The connection chain is simple: ", createVNode(_components.strong, {
        children: "scooter 6-pin connector → 6-pin-to-OBD2 adapter → OBD2 KKL USB cable → laptop"
      }), ". You need exactly two pieces of hardware:"]
    }), "\n", createVNode("table", {
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "Item"
          }), createVNode("th", {
            children: "Chip / Spec"
          }), createVNode("th", {
            children: "Notes"
          }), createVNode("th", {
            children: "Link"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            children: [createVNode("strong", {
              children: "OBD2 KKL USB cable"
            }), " (VAG KKL 409.1)"]
          }), createVNode("td", {
            children: ["FTDI FT232RL ", createVNode("em", {
              children: "(essential)"
            })]
          }), createVNode("td", {
            children: "Blue cable, K-line support. Avoid CH340 chips — they cause timeouts on K-line."
          }), createVNode("td", {
            children: createVNode("a", {
              class: "buy-link",
              href: "https://nl.aliexpress.com/item/1005011569161432.html",
              target: "_blank",
              rel: "noopener sponsored",
              children: "AliExpress →"
            })
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "6-pin to OBD2 adapter"
            })
          }), createVNode("td", {
            children: "GY6 Delphi 6-pin female ↔ OBD2 16-pin male"
          }), createVNode("td", {
            children: "Small short cable. Plugs scooter diag port into the KKL cable."
          }), createVNode("td", {
            children: createVNode("a", {
              class: "buy-link",
              href: "https://nl.aliexpress.com/item/1005009348874599.html",
              target: "_blank",
              rel: "noopener sponsored",
              children: "AliExpress →"
            })
          })]
        })]
      })]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "⚠️ Chip matters:"
        }), " Only buy the KKL cable with the ", createVNode(_components.strong, {
          children: "FTDI FT232RL"
        }), " chip. Cheaper CH340-based cables often cause connection timeouts or are silently blocked by Windows 11 security policies. The Aliexpress listing linked above specifies FTDI FT232RL explicitly."]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "/diagnostics/images/ecu-hacker/1cables.jpg",
        alt: "VAG KKL OBD2 USB cable (blue) and 6-pin GY6 diagnostic adapter laid out on a table"
      }), " The two adapters you need: VAG KKL USB cable (blue) and the 6-pin scooter adapter"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "/diagnostics/images/ecu-hacker/4cables.jpg",
        alt: "VAG KKL and 6-pin adapter connected together on grass, showing full cable chain"
      }), " The full cable chain connected: 6-pin adapter → OBD2 → KKL → USB to laptop"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "/diagnostics/images/ecu-hacker/2cables.jpg",
        alt: "Close-up of the 6-pin GY6 diagnostic connector showing yellow internal contacts"
      }), " The 6-pin scooter diagnostic connector — white housing, yellow contacts"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "/diagnostics/images/ecu-hacker/3cables.jpg",
        alt: "Close-up of the OBD2 16-pin male plug of the adapter cable"
      }), " OBD2 16-pin plug on the adapter — this mates with the KKL cable"]
    }), "\n", createVNode(_components.h3, {
      id: "software-free",
      children: "Software (free)"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "HUD ECU Hacker"
        }), " — free, Windows-only diagnostic suite for Delphi / Rongmao ECUs. ", createVNode(_components.a, {
          href: "https://www.netcult.ch/elmue/HUD%20ECU%20Hacker/",
          children: "Download from netcult.ch →"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "FTDI VCP drivers"
        }), " — required before plugging in the KKL cable. Usually provided on CD with the KKL cable supplier, or ", createVNode(_components.a, {
          href: "https://ftdichip.com/drivers/",
          children: "download from ftdichip.com →"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "setup-steps",
      children: "Setup Steps"
    }), "\n", createVNode(_components.p, {
      children: "1"
    }), "\n", createVNode(_components.h3, {
      id: "install-the-ftdi-ft232rl-drivers",
      children: "Install the FTDI FT232RL Drivers"
    }), "\n", createVNode(_components.p, {
      children: ["The KKL cable uses an FTDI FT232RL chip that appears to Windows as a virtual COM port (VCP). You must install the drivers ", createVNode(_components.em, {
        children: "before"
      }), " plugging in the cable, otherwise Windows may assign a generic driver that does not expose a COM port to HUD ECU Hacker."]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Download and install the ", createVNode(_components.strong, {
          children: "FTDI VCP drivers"
        }), ". You have two options:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "From CD:"
            }), " Many KKL cable suppliers include driver files on a CD or in a download link. Check the package or supplier documentation first."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "From ftdichip.com:"
            }), " Go to ", createVNode(_components.a, {
              href: "https://ftdichip.com/drivers/",
              children: "ftdichip.com/drivers"
            }), " and download the official ", createVNode(_components.strong, {
              children: "VCP Drivers"
            }), " for your version of Windows (Windows 7 / 8.1 / 10 / 11)."]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "Run the installer as Administrator and follow the prompts. Restart is usually not required."
      }), "\n", createVNode(_components.li, {
        children: ["Now plug the KKL USB cable into your laptop. Windows should show a notification: ", createVNode(_components.em, {
          children: "“Device driver software installed successfully”"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Open ", createVNode(_components.strong, {
          children: "Device Manager"
        }), " (", createVNode(_components.code, {
          children: "Win + X → Device Manager"
        }), ") and look under ", createVNode(_components.em, {
          children: "Ports (COM & LPT)"
        }), ". You should see ", createVNode(_components.strong, {
          children: "USB Serial Port (COMx)"
        }), ". Note the COM number — you will need it in Step 5."]
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "💡 Windows 11 tip:"
        }), " If the device appears under ", createVNode(_components.em, {
          children: "Other devices"
        }), " with a yellow exclamation mark, right-click it → ", createVNode(_components.em, {
          children: "Update driver"
        }), " → ", createVNode(_components.em, {
          children: "Browse my computer"
        }), " → point it to the folder where you extracted the FTDI zip. This manually forces the correct VCP driver."]
      })
    }), "\n", createVNode(_components.p, {
      children: "2"
    }), "\n", createVNode(_components.h3, {
      id: "download-and-install-hud-ecu-hacker",
      children: "Download and Install HUD ECU Hacker"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Visit ", createVNode(_components.a, {
          href: "https://www.netcult.ch/elmue/HUD%20ECU%20Hacker/",
          children: "netcult.ch/elmue/HUD ECU Hacker"
        }), " and scroll to the download section. The software is free with no registration required."]
      }), "\n", createVNode(_components.li, {
        children: ["Download the latest installer (e.g. ", createVNode(_components.code, {
          children: "HudEcuHackerSetup.exe"
        }), ")."]
      }), "\n", createVNode(_components.li, {
        children: ["Run the installer. Windows Defender SmartScreen may warn that the publisher is unknown — click ", createVNode(_components.em, {
          children: "“More info → Run anyway”"
        }), ". The software has been widely used in the GY6 community since 2015."]
      }), "\n", createVNode(_components.li, {
        children: ["Launch HUD ECU Hacker. ", createVNode(_components.strong, {
          children: "Do not connect the scooter yet"
        }), " — configure the software first."]
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "⚠️ Licence prompt:"
        }), " When HUD ECU Hacker opens for the first time it may show a licence / disclaimer dialog. Read it carefully and tick the correct boxes. If you tick the ", createVNode(_components.em, {
          children: "wrong"
        }), " boxes, the software locks itself — the only fix is to fully uninstall and reinstall it."]
      })
    }), "\n", createVNode(_components.p, {
      children: "3"
    }), "\n", createVNode(_components.h3, {
      id: "locate-the-6-pin-diagnostic-connector-on-your-scooter",
      children: "Locate the 6-Pin Diagnostic Connector on Your Scooter"
    }), "\n", createVNode(_components.p, {
      children: ["Open the scooter seat. On most GY6 EFI models the 6-pin diagnostic connector is located ", createVNode(_components.strong, {
        children: "near the battery"
      }), ", in the under-seat compartment. It is a white or light-grey square connector, often capped with a rubber dust cover or small rubber plug."]
    }), "\n", createVNode(_components.p, {
      children: "On some models (e.g. BTC Riva, La Souris) the connector hangs loose near the battery terminals; on others it is cable-tied to the wiring loom beside the ECU. The connector is usually left unconnected when no diagnostic tool is attached — this is normal."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "/diagnostics/images/ecu-hacker/6connector.jpg",
        alt: "Under-seat area of a GY6 scooter showing the 6-pin diagnostic connector near the battery"
      }), " Under-seat area — the 6-pin connector is the white plug near the battery"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "/diagnostics/images/ecu-hacker/7connector.jpg",
        alt: "Hand holding the GY6 scooter 6-pin diagnostic plug showing orange internal contacts"
      }), " The 6-pin diagnostic plug — orange/yellow contacts, white housing"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "ℹ️ Can’t find it?"
      }), " On the Delphi EFI system the connector is almost always near the battery. On some models it may be taped to the wiring harness or tucked behind a side panel near the ECU box. Consult the wiring diagram for your specific model if needed."]
    }), "\n", createVNode(_components.p, {
      children: "4"
    }), "\n", createVNode(_components.h3, {
      id: "connect-the-adapter-chain",
      children: "Connect the Adapter Chain"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Plug the ", createVNode(_components.strong, {
          children: "6-pin end"
        }), " of the adapter cable into the scooter’s diagnostic connector. It fits in one orientation only — do not force it."]
      }), "\n", createVNode(_components.li, {
        children: ["Connect the ", createVNode(_components.strong, {
          children: "OBD2 end"
        }), " of the adapter to the OBD2 socket of the KKL cable."]
      }), "\n", createVNode(_components.li, {
        children: ["Plug the ", createVNode(_components.strong, {
          children: "USB end"
        }), " of the KKL cable into your laptop."]
      }), "\n", createVNode(_components.li, {
        children: ["Turn the scooter ignition to ", createVNode(_components.strong, {
          children: "ON"
        }), " (do not start the engine — key-on is sufficient)."]
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "⚠️ Ignition must be ON:"
        }), " The ECU only powers its K-line interface when the ignition is on. Connecting with the ignition off will result in a “Timeout waiting for response” error in HUD ECU Hacker."]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "/diagnostics/images/ecu-hacker/5cables_laptop.jpg",
        alt: "VAG KKL cable connected to a Lenovo laptop, ready to connect to scooter"
      }), " Cable connected to the laptop — USB end in, ready to plug into the scooter"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "/diagnostics/images/ecu-hacker/8setupconnected.jpg",
        alt: "Full diagnostic setup: scooter open under seat, KKL cable running to laptop on the ground"
      }), " Full setup in the field — laptop next to the scooter, cable connected to the 6-pin port"]
    }), "\n", createVNode(_components.p, {
      children: "5"
    }), "\n", createVNode(_components.h3, {
      id: "configure-hud-ecu-hacker-and-connect",
      children: "Configure HUD ECU Hacker and Connect"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Open HUD ECU Hacker. In the ", createVNode(_components.strong, {
          children: "Control"
        }), " tab, click ", createVNode(_components.strong, {
          children: "ECU Model"
        }), " and select the correct ECU for your scooter:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Delphi MT05 / MT05.2"
            }), " — most GY6 EFI scooters sold in Europe (BTC Riva, La Souris, Santini, etc.)"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Rongmao MT05"
            }), " — some Chinese-market and grey-import models"]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.strong, {
              children: "Motion SE08"
            }), " — certain Euro 5 models (2021+), though compatibility varies — see Caveats belowNot sure which ECU your scooter has? Check the label on the ECU box under the seat."]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["From the ", createVNode(_components.strong, {
          children: "COM port"
        }), " dropdown, select the port you noted in Step 1 (e.g. ", createVNode(_components.code, {
          children: "COM3"
        }), "). If you see multiple ports, try each one until the connection succeeds."]
      }), "\n", createVNode(_components.li, {
        children: ["Click ", createVNode(_components.strong, {
          children: "Echo Test"
        }), ", then click ", createVNode(_components.strong, {
          children: "Connect"
        }), ". You will see a stream of raw data in the Trace tab. If no red “Timeout” errors appear, the Echo Test passed."]
      }), "\n", createVNode(_components.li, {
        children: ["Click ", createVNode(_components.strong, {
          children: "Echo Test"
        }), " again to toggle it off, then click ", createVNode(_components.strong, {
          children: "Connect"
        }), " to establish a live session with the ECU."]
      }), "\n", createVNode(_components.li, {
        children: ["The status bar should now show ", createVNode(_components.strong, {
          children: "Connected"
        }), " and a session timer."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "/diagnostics/images/ecu-hacker/9appview.jpg",
        alt: "HUD ECU Hacker software main screen showing the Control tab with ECU model and COM port selection"
      }), " HUD ECU Hacker v5.8.8 — Control tab showing ECU model selector and Connect button"]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "⚠️ “Timeout waiting for response” — this is normal."
        }), " K-line timing is highly sensitive. The connection may fail on the first 5–10 attempts. Simply go back to the Control tab and click Connect again. If it consistently fails after many attempts, try reducing the baud rate in the software’s Troubleshooting settings (see the HUD ECU Hacker documentation on netcult.ch under “Trouble Shooting”)."]
      })
    }), "\n", createVNode(_components.p, {
      children: "6"
    }), "\n", createVNode(_components.h3, {
      id: "read-live-data-and-fault-codes",
      children: "Read Live Data and Fault Codes"
    }), "\n", createVNode(_components.p, {
      children: "Once connected you have access to all ECU data in real time. Key tabs:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Dashboard"
        }), " — graphical overview of all sensor groups: engine, throttle, fuel, O2 sensors, temperatures."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Data Grid"
        }), " — tabular view of every raw parameter: RPM, coolant temp, MAP pressure, IAT, throttle position, short/long term fuel trims, spark advance, vehicle speed, and more."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "DTC (Fault Codes)"
        }), " — read and clear stored Diagnostic Trouble Codes. On Euro 4 and later models, codes must be cleared with this tool — they do not auto-reset after the fault disappears."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Graph"
        }), " — plot any parameter over time for intermittent fault diagnosis."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Tuning"
        }), " — advanced: read/write ECU maps (only for experienced users)."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "/diagnostics/images/ecu-hacker/10livedata.jpg",
        alt: "HUD ECU Hacker Data Grid showing live sensor readings: coolant temp, MAP, throttle, fuel trims"
      }), " Data Grid — all live sensor values including coolant temp, MAP pressure and fuel trims"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "/diagnostics/images/ecu-hacker/12livedata.jpg",
        alt: "HUD ECU Hacker Dashboard view showing comprehensive sensor panels across the full screen"
      }), " Dashboard view — all sensor groups visible simultaneously when connected"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "/diagnostics/images/ecu-hacker/11livedata.jpg",
        alt: "HUD ECU Hacker Data Grid alternative view showing emission count DTC and O2 sensor data"
      }), " Data Grid with emission DTC count visible — O2 sensor status and closed-loop operation"]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "💡 Clearing fault codes:"
        }), " Navigate to the DTC tab, confirm the codes, resolve the underlying fault, then click ", createVNode(_components.em, {
          children: "Clear DTCs"
        }), ". On Euro 4 scooters the MIL (engine warning light) will only go off after the ECU confirms the fault is no longer present — clearing the code alone does not guarantee the light stays off if the problem persists."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "additional-reference-video",
      children: "Additional Reference Video"
    }), "\n", createVNode($$VideoEmbed, {
      videoId: "BI4WgTFN8mM",
      title: "Testing HUD ECU Hacker on a Chinese scooter — Lexmoto Titan walkthrough",
      creator: "YouTube"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Video:"
      }), " “Testing HUD ECU Hacker — Lexmoto Titan” (2024) — real-world walkthrough on a Chinese EFI scooter with Delphi ECU. ", createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=BI4WgTFN8mM",
        children: "↗ Watch on YouTube"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "important-caveats",
      children: "Important Caveats"
    }), "\n", createVNode(_components.p, {
      children: "Based on community experience and forum reports, be aware of the following before you start:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["🚫 ", createVNode(_components.strong, {
          children: "Generic OBD2 readers will not work."
        }), " Many users with standard Bluetooth ELM327 scanners or generic car-OBD apps receive a ", createVNode(_components.em, {
          children: "“Vehicle not connected”"
        }), " error. This is because the GY6 ECU uses the K-line (ISO 9141-2 / KWP2000) protocol — not the CAN bus found in modern cars. Standard ELM327 dongles often lack K-line support or have incompatible timing. The OBD2 KKL cable with FTDI chip and HUD ECU Hacker together form a K-line-aware combination that actually works. Source: ", createVNode(_components.a, {
          href: "https://scooterforum.net/tags/la-souris/",
          children: "ScooterForum.net"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["⚠️ ", createVNode(_components.strong, {
          children: "Euro 4 fault codes do not self-clear."
        }), " From Euro 4 onwards, stored DTCs remain in the ECU memory even after the underlying fault is repaired. The engine warning light will stay on until you actively clear the codes with a diagnostic tool like HUD ECU Hacker. Simply fixing the problem is not enough — you must connect and erase the codes. Source: ", createVNode(_components.a, {
          href: "https://www.gentlemen-riders.com/lecteur-obdii-pour-code-defaut/9519-lecteur-obdii-pour-moto-euro4.html",
          children: "Gentlemen Riders"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["🔴 ", createVNode(_components.strong, {
          children: "Motion EFI (Euro 5, some 2021+ models) may not connect."
        }), " Some newer scooters — particularly those with a ", createVNode(_components.strong, {
          children: "Motion SE08"
        }), " ECU introduced for Euro 5 compliance — use a proprietary protocol that HUD ECU Hacker cannot fully support. If your scooter was registered after 2021 and HUD ECU Hacker consistently fails to connect despite correct hardware and settings, check the ECU label. If it reads “Motion” or “SE08 E5”, you likely need a dedicated Motion diagnostic scanner instead."]
      }), "\n", createVNode(_components.li, {
        children: ["⏳ ", createVNode(_components.strong, {
          children: "Connection attempts may take multiple tries."
        }), " K-line timing is extremely sensitive. It is normal for the first 5–15 connection attempts to time out. Simply return to the Control tab and click Connect again. If it never connects after 20+ attempts with the ignition on, try a different COM port or reduce the baud rate via the software’s Troubleshooting settings."]
      }), "\n", createVNode(_components.li, {
        children: ["💾 ", createVNode(_components.strong, {
          children: "Never use the Tuning / Flash functions unless you know what you are doing."
        }), " HUD ECU Hacker can read and write ECU flash memory and fuel maps. Incorrect values can make the scooter unrideable or damage the ECU. The diagnostic and DTC functions covered in this guide are safe; the Tuning tab is for experienced users only."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", createVNode("table", {
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "Problem"
          }), createVNode("th", {
            children: "Likely Cause"
          }), createVNode("th", {
            children: "Solution"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "No COM port in Device Manager"
            })
          }), createVNode("td", {
            children: "FTDI drivers not installed, or Windows assigned a generic driver"
          }), createVNode("td", {
            children: "Install the FTDI VCP driver from ftdichip.com, then replug the cable"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "HUD ECU Hacker doesn’t show COM port"
            })
          }), createVNode("td", {
            children: "Cable not plugged in when software opened"
          }), createVNode("td", {
            children: "Plug in the cable first, then start HUD ECU Hacker"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "”Timeout waiting for response”"
            })
          }), createVNode("td", {
            children: "K-line timing mismatch, or ignition not on"
          }), createVNode("td", {
            children: "Ensure ignition is ON; retry Connect 10–20 times; if persistent, reduce baud rate in Troubleshooting settings"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "”Vehicle not connected”"
            })
          }), createVNode("td", {
            children: "Wrong ECU model selected, or incompatible adapter"
          }), createVNode("td", {
            children: "Verify ECU model on the ECU label; confirm you have a KKL cable (not ELM327)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Connection drops after a few seconds"
            })
          }), createVNode("td", {
            children: "Poor USB connection or power fluctuation"
          }), createVNode("td", {
            children: "Try a different USB port; connect directly to laptop (avoid USB hubs); check cable for damage"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Software locks after licence dialog"
            })
          }), createVNode("td", {
            children: "Wrong tick boxes selected in the disclaimer"
          }), createVNode("td", {
            children: "Fully uninstall HUD ECU Hacker, delete any remaining config files, and reinstall"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "Connects but no live data (all zeros)"
            })
          }), createVNode("td", {
            children: "Engine not running (some parameters only populate at idle)"
          }), createVNode("td", {
            children: "Start the engine; MAP, RPM and O2 sensors only show values with the engine running"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "MIL (warning light) stays on after clearing codes"
            })
          }), createVNode("td", {
            children: "Fault is still present / recurring"
          }), createVNode("td", {
            children: "The ECU re-sets the code because the fault was not actually fixed — diagnose and repair the root cause first"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "frequently-asked-questions",
      children: "Frequently Asked Questions"
    }), "\n", createVNode(_components.p, {
      children: "Does this work on macOS or Linux?"
    }), "\n", createVNode(_components.p, {
      children: "HUD ECU Hacker is Windows-only. It does not run natively on macOS or Linux. You can use a Windows virtual machine (VMware, Parallels, VirtualBox) and pass through the USB adapter — most users report this works well. Alternatively, keep an old cheap Windows laptop (like the Lenovo ThinkPad shown in the photos) dedicated to scooter diagnostics."
    }), "\n", createVNode(_components.p, {
      children: "Can I use this on a Piaggio Vespa (Primavera, Zip, Sprint)?"
    }), "\n", createVNode(_components.p, {
      children: "No — Piaggio uses its own proprietary diagnostic interface (Piaggio Diagnostic Tool / PDT), not the Delphi K-line protocol used by GY6 clones. HUD ECU Hacker is specifically for Chinese GY6 EFI systems with Delphi or Rongmao ECUs."
    }), "\n", createVNode(_components.p, {
      children: "Is HUD ECU Hacker really free?"
    }), "\n", createVNode(_components.p, {
      children: "Yes, HUD ECU Hacker is free for diagnostics (reading data, reading and clearing fault codes, monitoring sensors). Advanced features such as ECU flash and map editing are unlocked with a small paid licence. For the purposes of this guide — setting up, connecting, and reading/clearing codes — everything is free."
    }), "\n", createVNode(_components.p, {
      children: "What fault codes are available on the GY6 Delphi ECU?"
    }), "\n", createVNode(_components.p, {
      children: ["The Delphi MT05 reports standard OBD2 DTC codes plus some manufacturer-specific codes covering: oxygen sensor faults, coolant temperature sensor, throttle position sensor (TPS), MAP sensor, IAT sensor, injector circuit, IACV (idle air control), and ignition coil. Refer to our ", createVNode(_components.a, {
        href: "gy6-efi-cel-flash-codes.html",
        children: "GY6 EFI CEL Flash Codes guide"
      }), " for a full list of codes and their meanings."]
    }), "\n", createVNode(_components.p, {
      children: "The 6-pin connector on my scooter looks different — could it still work?"
    }), "\n", createVNode(_components.p, {
      children: "There are a few variants of the GY6 diagnostic connector. The most common is the 6-pin white rectangular connector shown in this guide. Some models use a 4-pin connector or a different housing. If your connector doesn’t match, check the ECU label to confirm it is a Delphi MT05 — if it is, the wiring pinout is the same and an adapter may still exist. Post on a GY6-specific forum with photos for community guidance."
    }), "\n", createVNode(_components.h2, {
      id: "related-guides",
      children: "Related Guides"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "gy6-efi-cel-flash-codes.html",
          children: "GY6 EFI CEL Flash Codes — Manual Diagnostic Mode"
        }), " — decode check-engine blink patterns without any tools"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "gy6-efi-fuel-injection-troubleshooting.html",
          children: "GY6 EFI Fuel Injection Troubleshooting"
        }), " — systematic guide to injection faults"]
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/repair-guides/index.html",
          children: "All Repair Guides"
        })
      }), "\n"]
    }), "\n", "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Last Updated:"
      }), " 2026-05-12  |  ", createVNode(_components.strong, {
        children: "License:"
      }), " CC BY-SA 4.0  |  ", createVNode(_components.em, {
        children: ["Have corrections or improvements? ", createVNode(_components.a, {
          href: "https://github.com/ismr-online/ismr/issues",
          children: "Submit feedback on GitHub"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Content sourced from HUD ECU Hacker documentation and community guides. For educational purposes only."
    }), "\n", createVNode(_components.p, {
      children: "Always verify procedures against your scooter’s workshop manual before performing repairs."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "/index.html",
        children: "⚙️ ISMR Home"
      }), "  ·  ", createVNode(_components.a, {
        href: "/repair-guides/index.html",
        children: "All Diagnostics"
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "/legal/privacy.html",
        children: "Privacy Policy"
      }), "  ·  ", createVNode(_components.a, {
        href: "/legal/terms.html",
        children: "Terms of Service"
      })]
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

const url = "src/content/diagnostics/gy6-efi-hud-ecu-hacker-setup.mdx";
const file = "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-efi-hud-ecu-hacker-setup.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/content/diagnostics/gy6-efi-hud-ecu-hacker-setup.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
