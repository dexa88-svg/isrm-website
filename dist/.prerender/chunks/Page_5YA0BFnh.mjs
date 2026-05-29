import { c as createComponent, $ as $$Base, a as $$Navbar } from './Navbar_s-YHtJ4E.mjs';
import 'piccolore';
import { w as renderComponent, B as renderTemplate, j as addAttribute, t as maybeRenderHead, z as renderSlot } from './prerender_DeAbtbX6.mjs';
import { $ as $$Footer } from './Footer_vqyJBU3B.mjs';

const $$Page = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Page;
  const { title, description, canonical, ogImage, ogType = "article", jsonLd, updatedDate, publishDate } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `${title} — ISMR`, "description": description, "canonical": canonical, "ogImage": ogImage, "ogType": ogType, "jsonLd": jsonLd }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main data-pagefind-body class="guide-content"> ${renderSlot($$result2, $$slots["default"])} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} `, "head": ($$result2) => renderTemplate`${updatedDate && renderTemplate`<meta property="article:modified_time"${addAttribute(updatedDate, "content")}>`}${publishDate && renderTemplate`<meta property="article:published_time"${addAttribute(publishDate, "content")}>`}` })}`;
}, "/sessions/tender-pensive-knuth/mnt/interactive scooter repair manuals - ISRM/src/layouts/Page.astro", void 0);

export { $$Page as $ };
