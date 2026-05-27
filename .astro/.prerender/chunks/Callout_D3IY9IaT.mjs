import { c as createComponent } from './Navbar_D-cSPFBH.mjs';
import 'piccolore';
import { t as maybeRenderHead, j as addAttribute, z as renderSlot, B as renderTemplate } from './prerender_C3Md0h36.mjs';
import 'clsx';

const $$Callout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Callout;
  const { type } = Astro2.props;
  const icon = type === "warn" ? "⚠️" : type === "danger" ? "🚨" : "💡";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`callout callout-${type}`, "class")}> ${icon} ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/sessions/sharp-gifted-meitner/mnt/interactive scooter repair manuals - ISRM/src/components/Callout.astro", void 0);

export { $$Callout as $ };
