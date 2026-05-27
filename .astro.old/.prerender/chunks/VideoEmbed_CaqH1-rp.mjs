import { c as createComponent } from './Navbar_ktrNnMAt.mjs';
import 'piccolore';
import { t as maybeRenderHead, j as addAttribute, B as renderTemplate } from './prerender_DndgnZDT.mjs';
import 'clsx';

const $$VideoEmbed = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$VideoEmbed;
  const { videoId, title, creator } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="video-embed"> <div class="video-embed-title">🎬 ${title}</div> <div class="video-container"> <iframe${addAttribute(`https://www.youtube-nocookie.com/embed/${videoId}`, "src")}${addAttribute(title, "title")} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div> ${creator && renderTemplate`<p class="video-source"> <strong>Video:</strong> "${title}"${creator ? ` · ${creator}` : ""} &nbsp;
<a${addAttribute(`https://www.youtube.com/watch?v=${videoId}`, "href")} target="_blank" rel="noopener">↗ Watch on YouTube</a> </p>`} </div>`;
}, "/sessions/sharp-gifted-meitner/mnt/interactive scooter repair manuals - ISRM/src/components/VideoEmbed.astro", void 0);

export { $$VideoEmbed as $ };
