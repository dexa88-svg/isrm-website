import 'piccolore';
import { A as AstroError, d as InvalidComponentArgs, m as createRenderInstruction, B as renderTemplate, z as renderSlot, y as renderHead, D as unescapeHTML, j as addAttribute, t as maybeRenderHead } from './prerender_s1sCz3qV.mjs';
import 'clsx';

function validateArgs(args) {
  if (args.length !== 3) return false;
  if (!args[0] || typeof args[0] !== "object") return false;
  return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
  const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
  const fn = (...args) => {
    if (!validateArgs(args)) {
      throw new AstroError({
        ...InvalidComponentArgs,
        message: InvalidComponentArgs.message(name)
      });
    }
    return cb(...args);
  };
  Object.defineProperty(fn, "name", { value: name, writable: false });
  fn.isAstroComponentFactory = true;
  fn.moduleId = moduleId;
  fn.propagation = propagation;
  return fn;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
  return cb;
}
function createComponent(arg1, moduleId, propagation) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId, propagation);
  } else {
    return createComponentWithOptions(arg1);
  }
}

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Base;
  const {
    title,
    description,
    canonical,
    ogImage = "https://ismr.online/og-image.jpg",
    ogType = "website",
    jsonLd
  } = Astro2.props;
  return renderTemplate(_b || (_b = __template(['<html lang="en"> <head><!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-53LY3KPDYM"><\/script>', '<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><link rel="canonical"', '><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:site_name" content="ISMR — Interactive Scooter Manuals for Repair"><meta property="og:image"', '><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', "><title>", "</title>", '<!-- Favicons --><link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><meta name="theme-color" content="#ff6b35">', "", "</head> <body> ", ' <script src="/script.js"><\/script> </body> </html>'])), renderScript($$result, "/sessions/friendly-eager-maxwell/mnt/interactive scooter repair manuals - ISRM/src/layouts/Base.astro?astro&type=script&index=0&lang.ts"), addAttribute(description, "content"), addAttribute(canonical, "href"), addAttribute(ogType, "content"), addAttribute(canonical, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), title, jsonLd && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(jsonLd))), renderSlot($$result, $$slots["head"]), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/sessions/friendly-eager-maxwell/mnt/interactive scooter repair manuals - ISRM/src/layouts/Base.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Navbar;
  const { activePage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="navbar" data-pagefind-ignore id="navbar"> <div class="nav-container"> <a href="/" class="nav-brand"> <span class="brand-icon">⚙️</span> <span class="brand-text">ISMR</span> </a> <ul class="nav-menu" id="navMenu"> <li><a href="/repair-guides/"${addAttribute(["nav-link", { active: activePage === "guides" }], "class:list")}>Guides</a></li> <li><a href="/diagnostics/"${addAttribute(["nav-link", { active: activePage === "diagnostics" }], "class:list")}>Diagnostics</a></li> <li><a href="/parts/"${addAttribute(["nav-link", { active: activePage === "parts" }], "class:list")}>Parts</a></li> <li><a href="/models/"${addAttribute(["nav-link", { active: activePage === "models" }], "class:list")}>Models</a></li> <li><a href="/#about" class="nav-link">About</a></li> </ul> <button class="nav-toggle" id="navToggle">☰</button> </div> </nav>`;
}, "/sessions/friendly-eager-maxwell/mnt/interactive scooter repair manuals - ISRM/src/components/Navbar.astro", void 0);

export { $$Base as $, $$Navbar as a, createComponent as c };
