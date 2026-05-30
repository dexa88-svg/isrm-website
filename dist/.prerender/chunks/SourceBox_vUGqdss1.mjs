import { c as createComponent } from './Navbar_ns9bQ4PX.mjs';
import 'piccolore';
import { t as maybeRenderHead, j as addAttribute, B as renderTemplate } from './prerender_DdzkH7gs.mjs';
import 'clsx';

const $$SourceBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SourceBox;
  const { sources } = Astro2.props;
  return renderTemplate`${sources && sources.length > 0 && renderTemplate`${maybeRenderHead()}<div class="source-box"><strong>Sources:</strong><ul>${sources.map((s) => renderTemplate`<li><a${addAttribute(s.url, "href")} target="_blank" rel="noopener noreferrer">${s.name}</a></li>`)}</ul></div>`}`;
}, "/sessions/great-confident-cray/mnt/interactive scooter repair manuals - ISRM/src/components/SourceBox.astro", void 0);

export { $$SourceBox as $ };
