import { c as createComponent, $ as $$Base, a as $$Navbar } from './Navbar_Dxk6_s8X.mjs';
import 'piccolore';
import { w as renderComponent, B as renderTemplate, j as addAttribute, t as maybeRenderHead, z as renderSlot } from './prerender_DxUxf521.mjs';
import { $ as $$Footer } from './Footer_BqKx14Cl.mjs';

const $$Page = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Page;
  const { title, description, canonical, ogImage, ogType = "article", jsonLd, updatedDate, publishDate } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `${title} — ISMR`, "description": description, "canonical": canonical, "ogImage": ogImage, "ogType": ogType, "jsonLd": jsonLd }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main data-pagefind-body class="guide-content"> ${renderSlot($$result2, $$slots["default"])} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} `, "head": ($$result2) => renderTemplate`${updatedDate && renderTemplate`<meta property="article:modified_time"${addAttribute(updatedDate, "content")}>`}${publishDate && renderTemplate`<meta property="article:published_time"${addAttribute(publishDate, "content")}>`}` })}`;
}, "/sessions/optimistic-keen-davinci/mnt/interactive scooter repair manuals - ISRM/src/layouts/Page.astro", void 0);

export { $$Page as $ };
