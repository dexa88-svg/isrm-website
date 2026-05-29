import { c as createComponent, $ as $$Base, a as $$Navbar } from './Navbar_7_Rc_Bae.mjs';
import 'piccolore';
import { w as renderComponent, B as renderTemplate, j as addAttribute, t as maybeRenderHead, z as renderSlot } from './prerender_CtnUbeEl.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_C1J8Dwgf.mjs';
import { $ as $$Footer } from './Footer_Bg2m8ECz.mjs';

const $$Diagnostic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Diagnostic;
  const { title, description, canonical, ogImage, ogType = "article", jsonLd, breadcrumbLabel, updatedDate, publishDate } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `${title} — ISMR`, "description": description, "canonical": canonical, "ogImage": ogImage, "ogType": ogType, "jsonLd": jsonLd }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Navbar, { "activePage": "diagnostics" })} ${maybeRenderHead()}<section class="page-hero"> <div class="page-hero-inner"> <div class="breadcrumb" style="padding: 0 0 1rem; margin: 0;"> <a href="/">ISMR Home</a><span>›</span><a href="/diagnostics/">Diagnostics</a><span>›</span>${breadcrumbLabel} </div> <h1>${title}</h1> </div> </section> <main data-pagefind-body class="guide-content"> ${renderSlot($$result2, $$slots["default"])} </main> ${renderComponent($$result2, "Footer", $$Footer, { "updatedDate": updatedDate })} `, "head": ($$result2) => renderTemplate`${updatedDate && renderTemplate`<meta property="article:modified_time"${addAttribute(updatedDate, "content")}>`}${publishDate && renderTemplate`<meta property="article:published_time"${addAttribute(publishDate, "content")}>`}` })}`;
}, "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/layouts/Diagnostic.astro", void 0);

async function getStaticPaths() {
  const guides = await getCollection("diagnostics", ({ data }) => !data.draft);
  return guides.map((guide) => ({
    params: { slug: guide.id },
    props: { guide }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { guide } = Astro2.props;
  const { Content } = await renderEntry(guide);
  const { title, description, canonical, updatedDate, publishDate, tags, timeEstimate } = guide.data;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: title,
    description,
    url: canonical,
    dateModified: updatedDate.toISOString().slice(0, 10),
    datePublished: publishDate.toISOString().slice(0, 10),
    keywords: tags.join(", "),
    totalTime: timeEstimate,
    publisher: {
      "@type": "Organization",
      name: "ISMR — Interactive Scooter Manuals for Repair",
      url: "https://ismr.online"
    }
  };
  return renderTemplate`${renderComponent($$result, "Diagnostic", $$Diagnostic, { "title": title, "description": description, "canonical": canonical, "breadcrumbLabel": title, "updatedDate": updatedDate.toISOString().slice(0, 10), "publishDate": publishDate.toISOString().slice(0, 10), "jsonLd": jsonLd }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/pages/diagnostics/[...slug].astro", void 0);

const $$file = "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/pages/diagnostics/[...slug].astro";
const $$url = "/diagnostics/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
