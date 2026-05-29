import { c as createComponent } from './Navbar_zBrhGWHe.mjs';
import 'piccolore';
import { t as maybeRenderHead, j as addAttribute, z as renderSlot, B as renderTemplate } from './prerender_s1sCz3qV.mjs';
import 'clsx';

const $$Callout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Callout;
  const { type } = Astro2.props;
  const icon = type === "warn" ? "⚠️" : type === "danger" ? "🚨" : "💡";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`callout callout-${type}`, "class")}> ${icon} ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/sessions/friendly-eager-maxwell/mnt/interactive scooter repair manuals - ISRM/src/components/Callout.astro", void 0);

export { $$Callout as $ };
