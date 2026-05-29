import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_BWJ2jjys.mjs';
import './VideoEmbed_CJiqPfg_.mjs';
import { $ as $$Callout } from './Callout_Cl3Utv58.mjs';
import { $ as $$SourceBox } from './SourceBox_fMH6NBt7.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 Engine Codes & Parts Compatibility Guide",
  "description": "GY6 engine code decoder and parts compatibility guide — 50cc, 125cc, 150cc variants. Cross-reference carbs, pistons, valves, CDI and electrical parts.",
  "publishDate": "2026-05-19",
  "updatedDate": "2026-05-19",
  "difficulty": "Beginner",
  "timeEstimate": "~30 min",
  "tags": ["gy6", "parts", "compatibility", "engine-codes"],
  "appliesTo": [],
  "videos": [],
  "sources": [{
    "name": "Locate GY6 Engine Code — NCY Store",
    "url": "https://ncystore.com/blog/gy6-engine-code"
  }, {
    "name": "Chinese Scooter Parts 150cc — NCY Store",
    "url": "https://ncystore.com/blog/chinese-scooter-parts-150cc"
  }],
  "canonical": "https://ismr.online/parts/gy6-engine-codes-parts-compatibility.html",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-to-read-a-gy6-engine-code",
    "text": "How to Read a GY6 Engine Code"
  }, {
    "depth": 2,
    "slug": "common-gy6-engine-codes",
    "text": "Common GY6 Engine Codes"
  }, {
    "depth": 2,
    "slug": "crankcase-block-types-a-block-vs-b-block",
    "text": "Crankcase Block Types: A-Block vs B-Block"
  }, {
    "depth": 2,
    "slug": "parts-interchangeability-reference",
    "text": "Parts Interchangeability Reference"
  }, {
    "depth": 3,
    "slug": "gy6-50cc-139qmb--b-block",
    "text": "GY6 50cc (139QMB / B-Block)"
  }, {
    "depth": 3,
    "slug": "gy6-125cc--150cc-152qmi--157qmj--a-block",
    "text": "GY6 125cc / 150cc (152QMI / 157QMJ — A-Block)"
  }, {
    "depth": 2,
    "slug": "how-to-locate-your-engine-code",
    "text": "How to Locate Your Engine Code"
  }, {
    "depth": 2,
    "slug": "big-bore-upgrade-compatibility",
    "text": "Big Bore Upgrade Compatibility"
  }, {
    "depth": 2,
    "slug": "key-torque-specifications-gy6-reference",
    "text": "Key Torque Specifications (GY6 Reference)"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
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
    children: [createVNode($$SourceBox, {
      sources: [{
        name: "Locate GY6 Engine Code — NCY Store",
        url: "https://ncystore.com/blog/gy6-engine-code"
      }, {
        name: "Chinese Scooter Parts 150cc — NCY Store",
        url: "https://ncystore.com/blog/chinese-scooter-parts-150cc"
      }]
    }), "\n", createVNode(_components.p, {
      children: "The GY6 engine family is the most widely used small-displacement four-stroke engine platform in the world, powering hundreds of scooter models from manufacturers across China, Taiwan, and Europe. Understanding GY6 engine codes is essential for identifying the correct replacement parts, as the codes encode displacement, bore size, and cylinder head type directly into the engine designation."
    }), "\n", createVNode(_components.h2, {
      id: "how-to-read-a-gy6-engine-code",
      children: "How to Read a GY6 Engine Code"
    }), "\n", createVNode(_components.p, {
      children: "The engine code is stamped or cast on the lower side of the engine, near the CVT cover — just beside the oil drain bolt. It follows a consistent pattern across all variants."
    }), "\n", createVNode(_components.p, {
      children: ["Taking the code ", createVNode(_components.code, {
        children: "157QMJ"
      }), " as an example:"]
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Position"
          }), createVNode("th", {
            children: "Characters"
          }), createVNode("th", {
            children: "Meaning"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "1st digit"
          }), createVNode("td", {
            children: createVNode("code", {
              children: "1"
            })
          }), createVNode("td", {
            children: "Number of cylinders (all GY6 engines are single-cylinder, so always “1”)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "2nd–3rd digits"
          }), createVNode("td", {
            children: createVNode("code", {
              children: "57"
            })
          }), createVNode("td", {
            children: "Bore diameter in millimetres — 57 mm in this case (determines displacement)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "4th character"
          }), createVNode("td", {
            children: createVNode("code", {
              children: "Q"
            })
          }), createVNode("td", {
            children: "Cooling type: “Q” = forced air-cooled (not liquid-cooled)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "5th character"
          }), createVNode("td", {
            children: createVNode("code", {
              children: "M"
            })
          }), createVNode("td", {
            children: "Engine type: “M” = motorcycle/scooter/ATV application"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "6th character"
          }), createVNode("td", {
            children: createVNode("code", {
              children: "J"
            })
          }), createVNode("td", {
            children: "Crankcase variant: “J” = horizontal case (scooter layout), “I” = inclined"
          })]
        })]
      })
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "⚠️ “P” Series Engines:"
        }), " Some engines have a prefix “1P” instead of just “1” — for example, ", createVNode(_components.code, {
          children: "1P57QMJ"
        }), ". The “P” indicates a performance variant with a taller cylinder head and a different cam seating depth. The crankcase is the same dimensions, but the cylinder and cylinder head must be matched (both P or both non-P). Do not mix P and non-P top-end components without converting both together."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "common-gy6-engine-codes",
      children: "Common GY6 Engine Codes"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Engine Code"
          }), createVNode("th", {
            children: "Displacement"
          }), createVNode("th", {
            children: "Bore × Stroke"
          }), createVNode("th", {
            children: "Stud Spacing"
          }), createVNode("th", {
            children: "Common Applications"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("code", {
              children: "139QMB"
            })
          }), createVNode("td", {
            children: "50 cc"
          }), createVNode("td", {
            children: "39 mm × 41.4 mm"
          }), createVNode("td", {
            children: "44 mm (B-Block)"
          }), createVNode("td", {
            children: "BTC Riva 50, La Souris Sourini, Santini Capri, generic Chinese 50cc scooters"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("code", {
              children: "152QMI"
            })
          }), createVNode("td", {
            children: "125 cc"
          }), createVNode("td", {
            children: "54 mm × 54 mm"
          }), createVNode("td", {
            children: "54 mm (A-Block)"
          }), createVNode("td", {
            children: "Generic 125cc Chinese scooters, some GY6 125 variants"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("code", {
              children: "157QMJ"
            })
          }), createVNode("td", {
            children: "150 cc"
          }), createVNode("td", {
            children: "57 mm × 57.8 mm"
          }), createVNode("td", {
            children: "54 mm (A-Block)"
          }), createVNode("td", {
            children: "Most common 150cc GY6 scooters and ATVs worldwide"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("code", {
              children: "1P39QMB"
            })
          }), createVNode("td", {
            children: "50 cc"
          }), createVNode("td", {
            children: "39 mm × 41.4 mm"
          }), createVNode("td", {
            children: "44 mm (B-Block)"
          }), createVNode("td", {
            children: "Performance 50cc variant — taller head than standard 139QMB"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("code", {
              children: "1P57QMJ"
            })
          }), createVNode("td", {
            children: "150 cc"
          }), createVNode("td", {
            children: "57 mm × 57.8 mm"
          }), createVNode("td", {
            children: "54 mm (A-Block)"
          }), createVNode("td", {
            children: "Performance 150cc variant — taller cylinder head"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "crankcase-block-types-a-block-vs-b-block",
      children: "Crankcase Block Types: A-Block vs B-Block"
    }), "\n", createVNode(_components.p, {
      children: "Parts compatibility is primarily determined by the crankcase “block type”, which controls cylinder stud spacing and overall engine dimensions."
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Block Type"
          }), createVNode("th", {
            children: "Stud Spacing"
          }), createVNode("th", {
            children: "Engine Codes"
          }), createVNode("th", {
            children: "Notes"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "A-Block"
            })
          }), createVNode("td", {
            children: "54 mm"
          }), createVNode("td", {
            children: [createVNode("code", {
              children: "152QMI"
            }), ", ", createVNode("code", {
              children: "157QMJ"
            }), ", ", createVNode("code", {
              children: "1P57QMJ"
            })]
          }), createVNode("td", {
            children: "125cc and 150cc GY6 — largest installed base, most aftermarket parts"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: createVNode("strong", {
              children: "B-Block"
            })
          }), createVNode("td", {
            children: "44 mm"
          }), createVNode("td", {
            children: [createVNode("code", {
              children: "139QMB"
            }), ", ", createVNode("code", {
              children: "1P39QMB"
            })]
          }), createVNode("td", {
            children: "50cc GY6 — different cylinder, head, and variator sizes; NOT interchangeable with A-Block"
          })]
        })]
      })
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "⚠️ Critical Compatibility Rule:"
        }), " A-Block and B-Block parts are NOT interchangeable. A 157QMJ (150cc) cylinder cannot be fitted to a 139QMB (50cc) crankcase and vice versa. Always confirm your block type before ordering."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "parts-interchangeability-reference",
      children: "Parts Interchangeability Reference"
    }), "\n", createVNode(_components.h3, {
      id: "gy6-50cc-139qmb--b-block",
      children: "GY6 50cc (139QMB / B-Block)"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Component"
          }), createVNode("th", {
            children: "Compatible Codes"
          }), createVNode("th", {
            children: "Notes"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Cylinder & piston (stock)"
          }), createVNode("td", {
            children: [createVNode("code", {
              children: "139QMB"
            }), ", ", createVNode("code", {
              children: "1P39QMB"
            }), " (if matching head)"]
          }), createVNode("td", {
            children: "39 mm bore; P-series needs matching tall head"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Cylinder head"
          }), createVNode("td", {
            children: [createVNode("code", {
              children: "139QMB"
            }), " or ", createVNode("code", {
              children: "1P39QMB"
            }), " — must match cylinder"]
          }), createVNode("td", {
            children: "Non-P and P heads are NOT interchangeable without swapping both"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Carburetor (PD18J / PD19J)"
          }), createVNode("td", {
            children: "All 50cc GY6"
          }), createVNode("td", {
            children: "18–19 mm bore carburettor; intake bolt pattern 50mm"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Variator"
          }), createVNode("td", {
            children: "All 50cc GY6 scooters"
          }), createVNode("td", {
            children: "Smaller diameter than 150cc; not shared with A-Block engines"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Drive belt"
          }), createVNode("td", {
            children: "Most 50cc GY6 scooters"
          }), createVNode("td", {
            children: "Confirm length — common spec: 835 × 20 mm"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "CDI"
          }), createVNode("td", {
            children: "Most AC-CDI 6-pin units shared across 50cc GY6"
          }), createVNode("td", {
            children: "Confirm AC (alternator-powered) vs DC (battery-powered) type"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "gy6-125cc--150cc-152qmi--157qmj--a-block",
      children: "GY6 125cc / 150cc (152QMI / 157QMJ — A-Block)"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Component"
          }), createVNode("th", {
            children: "Compatible Codes"
          }), createVNode("th", {
            children: "Notes"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Cylinder & piston"
          }), createVNode("td", {
            children: [createVNode("code", {
              children: "152QMI"
            }), " (54 mm), ", createVNode("code", {
              children: "157QMJ"
            }), " (57 mm)"]
          }), createVNode("td", {
            children: "NOT interchangeable — different bore sizes"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Cylinder head"
          }), createVNode("td", {
            children: "A-Block heads are compatible between 125 and 150cc if ports match"
          }), createVNode("td", {
            children: "Combustion chamber volume differs — verify torque specs"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Crankcase"
          }), createVNode("td", {
            children: [createVNode("code", {
              children: "152QMI"
            }), ", ", createVNode("code", {
              children: "157QMJ"
            }), ", ", createVNode("code", {
              children: "1P57QMJ"
            }), " — all share 54mm stud spacing"]
          }), createVNode("td", {
            children: "Crankcases are functionally interchangeable on the A-Block platform"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Carburetor (CVK24)"
          }), createVNode("td", {
            children: "All 125–150cc GY6"
          }), createVNode("td", {
            children: "24 mm bore; most common is the CVK24 slide-diaphragm type"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Variator"
          }), createVNode("td", {
            children: "All A-Block 125–150cc GY6 scooters"
          }), createVNode("td", {
            children: "Larger diameter than 50cc; confirm roller weight (4–10 g range)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Drive belt"
          }), createVNode("td", {
            children: "Most 125–150cc GY6"
          }), createVNode("td", {
            children: "Common spec: 835 × 22 mm or 842 × 22 mm — measure old belt"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "CDI"
          }), createVNode("td", {
            children: "Most DC-CDI 5-pin units shared across 125–150cc GY6"
          }), createVNode("td", {
            children: "Confirm DC vs AC system and pin count before substituting"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Ignition coil"
          }), createVNode("td", {
            children: "Shared across most A-Block GY6"
          }), createVNode("td", {
            children: "Match resistance specs: primary ~0.4 Ω, secondary ~3.5 kΩ"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "how-to-locate-your-engine-code",
      children: "How to Locate Your Engine Code"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Place the scooter on its centre stand or lean it against a wall."
      }), "\n", createVNode(_components.li, {
        children: "Look at the lower-left side of the engine block, just above the oil drain bolt and beside the CVT cover."
      }), "\n", createVNode(_components.li, {
        children: "The code is stamped directly into the casting. It may be partially obscured by grime — clean with a cloth and solvent if needed."
      }), "\n", createVNode(_components.li, {
        children: "Photograph the code before ordering parts to avoid errors."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "big-bore-upgrade-compatibility",
      children: "Big Bore Upgrade Compatibility"
    }), "\n", createVNode(_components.p, {
      children: "Big bore kits increase displacement by fitting a larger-bore cylinder and matching piston. Compatibility rules:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "150cc → 171cc (61 mm bore):"
        }), " Fits without crankcase modification on most A-Block engines. This is the recommended first step for performance upgrades."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "150cc → 180cc (63 mm bore):"
        }), " Requires crankcase boring/machining. Not a beginner job."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "50cc → 70cc (47 mm bore):"
        }), " Common upgrade for B-Block engines. Drop-in on most 139QMB crankcases."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "When fitting a big bore kit, always re-jet the carburetor (or remap the EFI) to match the increased displacement. A larger bore burns more fuel at the same air/fuel ratio — running lean will damage the engine."
    }), "\n", createVNode(_components.h2, {
      id: "key-torque-specifications-gy6-reference",
      children: "Key Torque Specifications (GY6 Reference)"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Component"
          }), createVNode("th", {
            children: "Torque (Nm)"
          }), createVNode("th", {
            children: "Notes"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Cylinder head nuts (M6)"
          }), createVNode("td", {
            children: "10–12 Nm"
          }), createVNode("td", {
            children: "Torque in cross pattern; retighten after first heat cycle"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Spark plug"
          }), createVNode("td", {
            children: "10–14 Nm"
          }), createVNode("td", {
            children: "Do not overtighten — aluminium head strips easily"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Variator nut"
          }), createVNode("td", {
            children: "40–50 Nm"
          }), createVNode("td", {
            children: "Use a strap wrench to hold the variator; left-hand thread on some models"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Clutch bell nut"
          }), createVNode("td", {
            children: "40–50 Nm"
          }), createVNode("td", {
            children: "Standard right-hand thread"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Oil drain bolt"
          }), createVNode("td", {
            children: "18–22 Nm"
          }), createVNode("td", {
            children: "Replace washer at every oil change"
          })]
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

const url = "src/content/parts/gy6-engine-codes-parts-compatibility.mdx";
const file = "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/content/parts/gy6-engine-codes-parts-compatibility.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/content/parts/gy6-engine-codes-parts-compatibility.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
