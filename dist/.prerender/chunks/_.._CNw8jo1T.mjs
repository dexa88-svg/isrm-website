import { c as createComponent } from './Navbar_CMfptZPu.mjs';
import 'piccolore';
import { w as renderComponent, B as renderTemplate } from './prerender_C1PmNaGI.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_BYjDau5S.mjs';
import { $ as $$Page } from './Page_DOsO_eJz.mjs';

async function getStaticPaths() {
  const pages = await getCollection("videos", ({ data }) => !data.draft);
  return pages.map((page) => ({
    params: { slug: page.id },
    props: { page }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const { Content } = await renderEntry(page);
  const { title, description, canonical, updatedDate, publishDate, tags, videos } = page.data;
  const primaryVideo = videos[0];
  const jsonLd = primaryVideo ? {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: primaryVideo.title || title,
    description,
    url: canonical,
    embedUrl: `https://www.youtube.com/embed/${primaryVideo.id}`,
    thumbnailUrl: `https://img.youtube.com/vi/${primaryVideo.id}/maxresdefault.jpg`,
    uploadDate: publishDate.toISOString().slice(0, 10),
    dateModified: updatedDate.toISOString().slice(0, 10),
    keywords: tags.join(", "),
    publisher: {
      "@type": "Organization",
      name: "ISMR — Interactive Scooter Manuals for Repair",
      url: "https://ismr.online"
    }
  } : {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description,
    url: canonical,
    datePublished: publishDate.toISOString().slice(0, 10),
    dateModified: updatedDate.toISOString().slice(0, 10),
    keywords: tags.join(", "),
    publisher: {
      "@type": "Organization",
      name: "ISMR — Interactive Scooter Manuals for Repair",
      url: "https://ismr.online"
    }
  };
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": title, "description": description, "canonical": canonical, "updatedDate": updatedDate.toISOString().slice(0, 10), "publishDate": publishDate.toISOString().slice(0, 10), "jsonLd": jsonLd }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/sessions/tender-pensive-knuth/mnt/interactive scooter repair manuals - ISRM/src/pages/videos/[...slug].astro", void 0);

const $$file = "/sessions/tender-pensive-knuth/mnt/interactive scooter repair manuals - ISRM/src/pages/videos/[...slug].astro";
const $$url = "/videos/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
