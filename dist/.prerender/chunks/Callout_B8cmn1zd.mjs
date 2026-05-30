import { c as createComponent } from './Navbar_Dxk6_s8X.mjs';
import 'piccolore';
import { t as maybeRenderHead, j as addAttribute, z as renderSlot, B as renderTemplate } from './prerender_DxUxf521.mjs';
import 'clsx';

const $$Callout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Callout;
  const { type } = Astro2.props;
  const icon = type === "warn" ? "⚠️" : type === "danger" ? "🚨" : "💡";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`callout callout-${type}`, "class")}> ${icon} ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/sessions/optimistic-keen-davinci/mnt/interactive scooter repair manuals - ISRM/src/components/Callout.astro", void 0);

export { $$Callout as $ };
