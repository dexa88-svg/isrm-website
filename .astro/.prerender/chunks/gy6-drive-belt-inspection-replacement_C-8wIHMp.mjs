import { n as createVNode, c as Fragment, _ as __astro_tag_component__ } from './prerender_BMl4oaXa.mjs';
import { $ as $$Callout } from './Callout_DQ5SKjQD.mjs';
import { $ as $$VideoEmbed } from './VideoEmbed_mQVbxB8I.mjs';
import { $ as $$SourceBox } from './SourceBox_DnvRH-wp.mjs';
import 'clsx';

const frontmatter = {
  "title": "GY6 Drive Belt Inspection & Replacement",
  "description": "How to inspect, measure, and replace the CVT drive belt on GY6 50cc–150cc scooters. Covers belt sizes, wear signs, quick-change method, and break-in procedure.",
  "publishDate": "2026-05-27T00:00:00.000Z",
  "updatedDate": "2026-05-27T00:00:00.000Z",
  "difficulty": "Beginner",
  "timeEstimate": "30 min",
  "tags": ["GY6", "Drive Belt", "CVT", "Transmission", "Maintenance"],
  "appliesTo": ["GY6 50cc (139QMB)", "GY6 125cc (152QMI)", "GY6 150cc (157QMJ)", "BTC Riva 50", "La Souris Sourini / City", "Santini Capri"],
  "videos": [{
    "id": "XakWj8YM_P4",
    "title": "Simplest Way To Replace A GY6 Scooter CV Belt",
    "creator": "electronicsNmore",
    "position": "hero"
  }],
  "tools": ["Phillips screwdriver", "10 mm socket and ratchet", "Flat-head screwdriver or small pry bar", "Vernier calipers or ruler (belt width measurement)", "Clean cloth"],
  "sources": [{
    "name": "electronicsNmore — Simplest Way To Replace A GY6 Scooter CV Belt (YouTube)",
    "url": "https://www.youtube.com/watch?v=XakWj8YM_P4"
  }, {
    "name": "Q9 PowerSports USA — Scooter Drive Belt Replacement Complete Guide 2026",
    "url": "https://q9powersportsusa.com/blogs/technical-support-q9-powersports-usa/change-drive-belt-motor-scooter"
  }, {
    "name": "Scooterworks USA — GY6 Drive Belt 835x20x30",
    "url": "https://www.scooterworks.com/products/blue-line-belt-835x20x30-gy6-standard"
  }],
  "canonical": "https://ismr.online/repair-guides/gy6-drive-belt-inspection-replacement.html",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "drive-belt-sizes",
    "text": "Drive Belt Sizes"
  }, {
    "depth": 2,
    "slug": "when-to-replace-the-belt",
    "text": "When to Replace the Belt"
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
    "slug": "step-1--let-the-engine-cool",
    "text": "Step 1 — Let the Engine Cool"
  }, {
    "depth": 3,
    "slug": "step-2--place-the-scooter-on-its-centre-stand",
    "text": "Step 2 — Place the Scooter on its Centre Stand"
  }, {
    "depth": 3,
    "slug": "step-3--remove-the-variator-cover",
    "text": "Step 3 — Remove the Variator Cover"
  }, {
    "depth": 3,
    "slug": "step-4--remove-the-old-belt",
    "text": "Step 4 — Remove the Old Belt"
  }, {
    "depth": 3,
    "slug": "step-5--inspect-the-pulleys",
    "text": "Step 5 — Inspect the Pulleys"
  }, {
    "depth": 3,
    "slug": "step-6--fit-the-new-belt",
    "text": "Step 6 — Fit the New Belt"
  }, {
    "depth": 3,
    "slug": "step-7--verify-belt-seating",
    "text": "Step 7 — Verify Belt Seating"
  }, {
    "depth": 3,
    "slug": "step-8--refit-the-cover",
    "text": "Step 8 — Refit the Cover"
  }, {
    "depth": 3,
    "slug": "step-9--break-in-the-new-belt",
    "text": "Step 9 — Break-in the New Belt"
  }, {
    "depth": 2,
    "slug": "specifications-summary",
    "text": "Specifications Summary"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$SourceBox, {
      sources: frontmatter.sources
    }), "\n", createVNode(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "The drive belt is the only link between the engine and the rear wheel on a GY6 CVT scooter. It sits inside the variator cover on the left side of the engine and transfers power from the driving pulley (connected to the crankshaft) through to the driven pulley (connected to the gearbox). A worn or broken belt causes loss of drive, reduced top speed, belt slip under load, or squealing on acceleration."
    }), "\n", createVNode(_components.p, {
      children: "Replacing a GY6 drive belt is one of the most beginner-friendly maintenance tasks on these engines — the belt can be swapped in around 30 minutes without removing the variator assembly, provided the variator and clutch are in good working order."
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: "Always let the engine cool completely before opening the variator cover. The CVT components reach high temperatures during normal operation."
      })
    }), "\n", createVNode(_components.h2, {
      id: "drive-belt-sizes",
      children: "Drive Belt Sizes"
    }), "\n", createVNode(_components.p, {
      children: "The correct belt depends on the engine variant. Using the wrong size causes slipping, premature wear, or inability to close the variator cover."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Engine"
          }), createVNode(_components.th, {
            children: "Belt size (circumference × width × height)"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "GY6 50cc 139QMB"
          }), createVNode(_components.td, {
            children: "743 × 20 × 30 mm"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "GY6 125cc 152QMI"
          }), createVNode(_components.td, {
            children: "835 × 20 × 30 mm"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "GY6 150cc 157QMJ"
          }), createVNode(_components.td, {
            children: "835 × 20 × 30 mm"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "The size is stamped on the outside face of the original belt. Always verify before ordering. Quality replacement belts are available from Scooterworks USA, VMC Chinese Parts, and NCY Store."
    }), "\n", createVNode(_components.h2, {
      id: "when-to-replace-the-belt",
      children: "When to Replace the Belt"
    }), "\n", createVNode(_components.p, {
      children: "Replace the drive belt when any of the following are observed:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Visible cracks, fraying, or missing teeth/chunks on the belt surface"
      }), "\n", createVNode(_components.li, {
        children: "Belt width less than 18 mm (standard width is 20 mm — a worn belt narrows over time)"
      }), "\n", createVNode(_components.li, {
        children: "Scooter revs freely but has sluggish or delayed acceleration"
      }), "\n", createVNode(_components.li, {
        children: "Squealing or slipping sound from the variator cover under load"
      }), "\n", createVNode(_components.li, {
        children: "Belt has exceeded 8,000 km (approximately 5,000 miles) since last replacement"
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: "Belts are inexpensive — if you are already opening the variator cover for roller or clutch work, replace the belt at the same time regardless of wear, as you will have no additional labour cost."
      })
    }), "\n", createVNode(_components.h2, {
      id: "tools--parts-needed",
      children: "Tools & Parts Needed"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Replacement drive belt (correct size for your engine — see table above)"
      }), "\n", createVNode(_components.li, {
        children: "Phillips screwdriver (variator cover screws)"
      }), "\n", createVNode(_components.li, {
        children: "10 mm socket and ratchet (if cover uses bolts)"
      }), "\n", createVNode(_components.li, {
        children: "Flat-head screwdriver or small pry bar"
      }), "\n", createVNode(_components.li, {
        children: "Vernier calipers or ruler (to measure old belt width before discarding)"
      }), "\n", createVNode(_components.li, {
        children: "Clean cloth (wipe dust from pulleys)"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "step-by-step-procedure",
      children: "Step-by-Step Procedure"
    }), "\n", createVNode(_components.h3, {
      id: "step-1--let-the-engine-cool",
      children: "Step 1 — Let the Engine Cool"
    }), "\n", createVNode(_components.p, {
      children: "The variator and driven pulley operate at high temperatures. Wait at least 20 minutes after the last ride before opening the cover. Touching a hot variator assembly can cause burns."
    }), "\n", createVNode(_components.h3, {
      id: "step-2--place-the-scooter-on-its-centre-stand",
      children: "Step 2 — Place the Scooter on its Centre Stand"
    }), "\n", createVNode(_components.p, {
      children: "The scooter must be stable and the rear wheel must be able to spin freely. The centre stand is the correct position — side stand leaves the variator cover inaccessible."
    }), "\n", createVNode(_components.h3, {
      id: "step-3--remove-the-variator-cover",
      children: "Step 3 — Remove the Variator Cover"
    }), "\n", createVNode(_components.p, {
      children: "The variator cover (CVT cover) is the large plastic or pressed-steel panel on the left side of the engine. It is held by 4–6 Phillips or 10 mm hex screws arranged around its perimeter. Remove all screws and store them safely. Pull the cover straight off — it may be lightly stuck to a gasket; a gentle twist will free it."
    }), "\n", createVNode($$Callout, {
      type: "tip",
      children: createVNode(_components.p, {
        children: "Take a photograph of the belt routing before removing it. The belt passes around the driving pulley (front/upper) and the driven pulley (rear/lower). The photo helps confirm correct routing when fitting the new belt."
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-4--remove-the-old-belt",
      children: "Step 4 — Remove the Old Belt"
    }), "\n", createVNode(_components.p, {
      children: "With the cover off, the drive belt is visible running between the two pulleys. The quick-change method (without removing the variator or clutch) works as follows:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Rotate the rear wheel slowly by hand until the belt is at its loosest position — the driving pulley will be at its smallest effective diameter (rollers pushed inward)."
      }), "\n", createVNode(_components.li, {
        children: "Grip the belt firmly and push it down toward the bottom of the driving pulley, compressing it inward to create slack."
      }), "\n", createVNode(_components.li, {
        children: "Work the belt off the driving pulley first by rolling it over the pulley face — this takes a little force but no special tools."
      }), "\n", createVNode(_components.li, {
        children: "Once off the driving pulley, the belt has enough slack to lift off the driven pulley easily."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "If the belt has snapped, simply pull the pieces out."
    }), "\n", createVNode(_components.h3, {
      id: "step-5--inspect-the-pulleys",
      children: "Step 5 — Inspect the Pulleys"
    }), "\n", createVNode(_components.p, {
      children: "With the belt removed, visually inspect both pulleys. The pulley faces should be smooth and free of deep grooves. Light surface marks are normal. Check for:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Deep score marks or ridges (belt wear pattern — indicates misalignment or worn rollers)"
      }), "\n", createVNode(_components.li, {
        children: "Grease or oil contamination (if present, identify and fix the leak source before fitting a new belt — oil will destroy a new belt quickly)"
      }), "\n", createVNode(_components.li, {
        children: "Variator roller condition (visible through the front pulley face — if rollers look flat, replace them while the cover is open; see the CVT Variator & Roller Inspection Guide)"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Clean both pulley faces with a dry cloth. Do not use grease or lubricant on the pulley contact surfaces."
    }), "\n", createVNode(_components.h3, {
      id: "step-6--fit-the-new-belt",
      children: "Step 6 — Fit the New Belt"
    }), "\n", createVNode(_components.p, {
      children: "Loop the new belt around the driven pulley (rear/lower) first — it sits in the groove easily at this stage. Then stretch the belt over the driving pulley by holding it at the top and bottom and rolling it onto the pulley face while rotating the rear wheel slowly. The belt will seat itself into the groove as the pulleys are turned."
    }), "\n", createVNode($$Callout, {
      type: "warn",
      children: createVNode(_components.p, {
        children: "Do not force the belt into position with a screwdriver or pry bar — this can nick or crack the new belt. Use hand pressure and wheel rotation only."
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-7--verify-belt-seating",
      children: "Step 7 — Verify Belt Seating"
    }), "\n", createVNode(_components.p, {
      children: "Rotate the rear wheel by hand several full turns and observe the belt tracking. It should run centrally on both pulleys with no twisting or bunching. Check that the belt is not rubbing against any edge of the variator housing."
    }), "\n", createVNode(_components.h3, {
      id: "step-8--refit-the-cover",
      children: "Step 8 — Refit the Cover"
    }), "\n", createVNode(_components.p, {
      children: "Check that the cover gasket (if present) is intact and correctly seated. Refit the cover and tighten all screws evenly in a cross pattern. Do not overtighten — the screws thread into plastic or soft alloy and strip easily. Finger-tight plus a quarter turn is sufficient."
    }), "\n", createVNode(_components.h3, {
      id: "step-9--break-in-the-new-belt",
      children: "Step 9 — Break-in the New Belt"
    }), "\n", createVNode(_components.p, {
      children: "New belts require a brief break-in period. For the first 50–80 km, avoid full-throttle acceleration and high-speed sustained riding. Gentle to moderate throttle allows the belt to conform to the pulley profiles and reach its final operating dimensions."
    }), "\n", createVNode(_components.p, {
      children: "Inspect the belt again after the first 100 km by removing the cover briefly and checking for any unusual wear marks."
    }), "\n", createVNode(_components.h2, {
      id: "specifications-summary",
      children: "Specifications Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Parameter"
          }), createVNode(_components.th, {
            children: "Value"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Belt replacement interval"
          }), createVNode(_components.td, {
            children: "Every 8,000 km (5,000 miles)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Minimum belt width (scrap threshold)"
          }), createVNode(_components.td, {
            children: "18 mm"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Cover screw torque"
          }), createVNode(_components.td, {
            children: "6–8 Nm (finger-tight + ¼ turn)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Belt break-in distance"
          }), createVNode(_components.td, {
            children: "50–80 km at moderate throttle"
          })]
        })]
      })]
    }), "\n", frontmatter.videos.length > 0 && createVNode($$VideoEmbed, {
      videoId: frontmatter.videos[0].id,
      title: frontmatter.videos[0].title,
      creator: frontmatter.videos[0].creator
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

const url = "src/content/repair-guides/gy6-drive-belt-inspection-replacement.mdx";
const file = "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-drive-belt-inspection-replacement.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/content/repair-guides/gy6-drive-belt-inspection-replacement.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
