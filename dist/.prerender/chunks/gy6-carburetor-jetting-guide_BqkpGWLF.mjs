import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_CuGQ4WK_.mjs';
import './VideoEmbed_xzJISfAr.mjs';
import { $ as $$Callout } from './Callout_QX-gPCwg.mjs';
import { $ as $$SourceBox } from './SourceBox_CpGjlmkY.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 Carburetor Jetting & Rejetting Guide",
  "description": "GY6 carburetor jetting guide with main jet size charts by altitude, air filter, and exhaust. Tune your 50/125/150cc scooter carb for optimal performance.",
  "publishDate": "2026-05-08",
  "updatedDate": "2026-05-08",
  "difficulty": "Beginner",
  "timeEstimate": "~30 min",
  "tags": ["GY6", "Carburetor", "139QMB", "157QMJ"],
  "appliesTo": ["GY6 50cc (139QMB)", "GY6 125cc (152QMI)", "GY6 150cc (157QMJ)", "BTC Riva", "La Souris Sourini", "La Souris City S", "Santini Capri"],
  "videos": [],
  "sources": [{
    "name": "Carburetor Jetting 101 — Scooterworks USA",
    "url": "https://www.scooterworks.com/blogs/news/carburetor-jetting-101"
  }, {
    "name": "Carburetor Jetting Help — Rolling Wrench Denver",
    "url": "https://www.rollingwrenchdenver.com/blogs/news/carburetor-help-jetting-and-tuning-help"
  }],
  "canonical": "https://ismr.online/repair-guides/gy6-carburetor-jetting-guide.html",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "understanding-the-throttle-zones",
    "text": "Understanding the Throttle Zones"
  }, {
    "depth": 2,
    "slug": "diagnosing-rich-vs-lean",
    "text": "Diagnosing Rich vs Lean"
  }, {
    "depth": 2,
    "slug": "stock-jetting-reference-sea-level-standard-air-filter",
    "text": "Stock Jetting Reference (Sea Level, Standard Air Filter)"
  }, {
    "depth": 2,
    "slug": "jetting-for-modifications",
    "text": "Jetting for Modifications"
  }, {
    "depth": 2,
    "slug": "performance-air-filter",
    "text": "Performance Air Filter"
  }, {
    "depth": 2,
    "slug": "performance-exhaust",
    "text": "Performance Exhaust"
  }, {
    "depth": 2,
    "slug": "altitude-correction",
    "text": "Altitude Correction"
  }, {
    "depth": 2,
    "slug": "how-to-change-a-main-jet",
    "text": "How to Change a Main Jet"
  }, {
    "depth": 2,
    "slug": "where-to-buy-gy6-jets",
    "text": "Where to Buy GY6 Jets"
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
        href: "https://www.scooterworks.com/blogs/news/carburetor-jetting-101",
        children: "scooterworks.com"
      }), ", ", createVNode(_components.a, {
        href: "https://www.rollingwrenchdenver.com/blogs/news/carburetor-help-jetting-and-tuning-help",
        children: "rollingwrenchdenver.com"
      }), ", ", createVNode(_components.a, {
        href: "https://www.jetsrus.com/FAQs/FAQ_rejetting_101_how_to_rejet.htm",
        children: "jetsrus.com"
      }), "  |  GY6 Carburetor 139QMB 157QMJ"]
    }), "\n", createVNode($$SourceBox, {
      sources: [{
        name: "Carburetor Jetting 101 — Scooterworks USA",
        url: "https://www.scooterworks.com/blogs/news/carburetor-jetting-101"
      }, {
        name: "Carburetor Jetting Help — Rolling Wrench Denver",
        url: "https://www.rollingwrenchdenver.com/blogs/news/carburetor-help-jetting-and-tuning-help"
      }]
    }), "\n", createVNode(_components.p, {
      children: "Jetting refers to selecting the correct size of the brass main jet and pilot jet inside the carburetor to achieve the right air-to-fuel ratio for your engine’s conditions. A stock GY6 scooter is jetted conservatively from the factory — usually slightly lean — which can cause hesitation, flat spots, or overheating. If you have added an aftermarket exhaust, performance air filter, or high-compression piston, rejetting is essential."
    }), "\n", createVNode(_components.h2, {
      id: "understanding-the-throttle-zones",
      children: "Understanding the Throttle Zones"
    }), "\n", createVNode(_components.p, {
      children: "The GY6 slide-type carburetor (PD-series or CVK) controls the mixture across the throttle range via different circuits. Knowing which circuit governs each zone tells you which component to adjust:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "0–¼ throttle (idle and off-idle):"
        }), " Governed by the pilot jet and the air/fuel mixture screw. Symptoms of a lean pilot: stumbling, stalling at idle, engine hunts."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "¼–¾ throttle (mid-range):"
        }), " Governed by the needle position and its clip groove. A needle that is too lean causes hesitation when rolling on from partial throttle."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "¾–full throttle (wide-open):"
        }), " Governed by the main jet size. A lean main jet causes flat top-end power and possible overheating at sustained full throttle."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "diagnosing-rich-vs-lean",
      children: "Diagnosing Rich vs Lean"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Symptom"
          }), createVNode("th", {
            children: "Likely Cause"
          }), createVNode("th", {
            children: "Correction"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Black sooty spark plug, dark smoke"
          }), createVNode("td", {
            children: "Rich mixture (too large a jet)"
          }), createVNode("td", {
            children: "Go down 2–5 jet sizes"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "White/grey spark plug, overheating"
          }), createVNode("td", {
            children: "Lean mixture (too small a jet)"
          }), createVNode("td", {
            children: "Go up 2–5 jet sizes"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Stumbling at idle, stalls when warm"
          }), createVNode("td", {
            children: "Lean pilot circuit"
          }), createVNode("td", {
            children: "Richen mixture screw or upsize pilot jet"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Hesitation at ¼–½ throttle roll-on"
          }), createVNode("td", {
            children: "Lean needle position"
          }), createVNode("td", {
            children: "Raise needle clip (lower the clip groove number)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Bog at full throttle"
          }), createVNode("td", {
            children: "Lean main jet or clogged main jet"
          }), createVNode("td", {
            children: "Upsize main jet by 3–5 sizes; clean jet first"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Rich surge, black plug at full throttle"
          }), createVNode("td", {
            children: "Rich main jet"
          }), createVNode("td", {
            children: "Downsize main jet by 3–5 sizes"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "stock-jetting-reference-sea-level-standard-air-filter",
      children: "Stock Jetting Reference (Sea Level, Standard Air Filter)"
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Engine Code"
          }), createVNode("th", {
            children: "Displacement"
          }), createVNode("th", {
            children: "Carb"
          }), createVNode("th", {
            children: "Main Jet"
          }), createVNode("th", {
            children: "Pilot Jet"
          }), createVNode("th", {
            children: "Needle Clip"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "139QMB"
          }), createVNode("td", {
            children: "50cc (49cc)"
          }), createVNode("td", {
            children: "PD18J"
          }), createVNode("td", {
            children: "#75"
          }), createVNode("td", {
            children: "#35"
          }), createVNode("td", {
            children: "3rd groove (middle)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "152QMI"
          }), createVNode("td", {
            children: "125cc"
          }), createVNode("td", {
            children: "PD22J"
          }), createVNode("td", {
            children: "#95"
          }), createVNode("td", {
            children: "#38"
          }), createVNode("td", {
            children: "3rd groove"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "157QMJ"
          }), createVNode("td", {
            children: "150cc"
          }), createVNode("td", {
            children: "PD24J / CVK24"
          }), createVNode("td", {
            children: "#98–#102"
          }), createVNode("td", {
            children: "#40"
          }), createVNode("td", {
            children: "3rd groove"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "jetting-for-modifications",
      children: "Jetting for Modifications"
    }), "\n", createVNode(_components.h2, {
      id: "performance-air-filter",
      children: "Performance Air Filter"
    }), "\n", createVNode(_components.p, {
      children: ["A high-flow air filter (K&N style pod filter or similar) allows more air through the carburetor. This leans the mixture and requires a main jet increase. A typical starting point is to increase the main jet by ", createVNode(_components.strong, {
        children: "5–8 sizes"
      }), " (e.g., from #98 to #105 on a 150cc engine) and adjust from there using the spark plug color method."]
    }), "\n", createVNode(_components.h2, {
      id: "performance-exhaust",
      children: "Performance Exhaust"
    }), "\n", createVNode(_components.p, {
      children: ["An aftermarket exhaust that reduces back-pressure also leans the mixture, especially in the mid-to-high throttle range. Increase the main jet by ", createVNode(_components.strong, {
        children: "3–5 sizes"
      }), " as a starting point, and raise the needle one clip position (move the clip from the 3rd to the 2nd groove from the top)."]
    }), "\n", createVNode(_components.h2, {
      id: "altitude-correction",
      children: "Altitude Correction"
    }), "\n", createVNode(_components.p, {
      children: ["At higher altitudes, air is thinner, so the stock jetting becomes progressively richer as altitude increases. A rough rule of thumb is to decrease the main jet by ", createVNode(_components.strong, {
        children: "3 sizes per 1,000 m"
      }), " of altitude above sea level."]
    }), "\n", createVNode("table", {
      children: createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("th", {
            children: "Altitude"
          }), createVNode("th", {
            children: "Approx. Main Jet Correction (GY6 150cc baseline #98)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "0–500 m"
          }), createVNode("td", {
            children: "Stock (#98–#102)"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "500–1,000 m"
          }), createVNode("td", {
            children: "#95–#98"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "1,000–1,500 m"
          }), createVNode("td", {
            children: "#92–#95"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "1,500–2,000 m"
          }), createVNode("td", {
            children: "#88–#92"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "how-to-change-a-main-jet",
      children: "How to Change a Main Jet"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Ensure the engine is cold. Turn the fuel tap off."
      }), "\n", createVNode(_components.li, {
        children: ["Remove the float bowl (see the ", createVNode(_components.a, {
          href: "gy6-carburetor-cleaning-guide.html",
          children: "Deep-Cleaning Guide"
        }), " for step-by-step bowl removal)."]
      }), "\n", createVNode(_components.li, {
        children: "Unscrew the main jet with a flat-blade screwdriver. Note the existing size stamped on the jet body."
      }), "\n", createVNode(_components.li, {
        children: "Thread in the new jet finger-tight, then snug with the screwdriver. Do not overtighten."
      }), "\n", createVNode(_components.li, {
        children: "Refit the float bowl, turn the fuel on, and start the engine."
      }), "\n", createVNode(_components.li, {
        children: "After a warm-up run, remove the spark plug and read its color. A correct mixture gives a tan to light brown plug tip. Black = too rich; white/grey = too lean."
      }), "\n", createVNode(_components.li, {
        children: "Adjust one jet size at a time until the plug color is correct."
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: ["️ Always clean the carburetor thoroughly before rejetting. A partially blocked jet will give false lean symptoms regardless of jet size. See the ", createVNode(_components.a, {
          href: "gy6-carburetor-cleaning-guide.html",
          children: "Deep-Cleaning Guide"
        }), " first."]
      })
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: ["� ", createVNode(_components.strong, {
          children: "Tip:"
        }), " Jets are typically sized in increments of 2–3 (e.g., #95, #98, #100, #102, #105). Buy a jet kit covering a range of ±15 from your stock size so you can tune without repeated ordering."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "where-to-buy-gy6-jets",
      children: "Where to Buy GY6 Jets"
    }), "\n", createVNode(_components.p, {
      children: ["Replacement GY6 jets (both main and pilot) are widely available from vendors including ", createVNode(_components.a, {
        href: "https://www.vmcchineseparts.com/",
        children: "VMC Chinese Parts"
      }), ", ", createVNode(_components.a, {
        href: "https://www.rollingwrenchdenver.com/",
        children: "Rolling Wrench Denver"
      }), ", and ", createVNode(_components.a, {
        href: "https://www.scooterworks.com/collections/gy6",
        children: "Scooterworks USA"
      }), ". When ordering, confirm the carburetor model (PD18J, PD22J, PD24J, or CVK) to ensure thread pitch compatibility."]
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

const url = "src/content/repair-guides/gy6-carburetor-jetting-guide.mdx";
const file = "/sessions/ecstatic-zealous-goldberg/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-carburetor-jetting-guide.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/ecstatic-zealous-goldberg/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-carburetor-jetting-guide.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
