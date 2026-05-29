import { c as createComponent, $ as $$Base, a as $$Navbar } from './Navbar_D29TrTyL.mjs';
import 'piccolore';
import { w as renderComponent, B as renderTemplate, t as maybeRenderHead } from './prerender_BWJ2jjys.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "News & Updates — ISMR";
  const description = "Latest news for ISMR — new repair guides, safety recalls, firmware updates, and community announcements for GY6 and Piaggio/Vespa scooter owners.";
  const canonical = "https://ismr.online/news/";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "News & Updates — ISMR",
    "description": description,
    "url": canonical,
    "isPartOf": { "@type": "WebSite", "name": "ISMR", "url": "https://ismr.online/" }
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "canonical": canonical, "jsonLd": jsonLd }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", " ", `<section class="page-hero"> <div class="page-hero-inner"> <div class="breadcrumb" style="padding: 0 0 1rem; margin: 0;"> <a href="/">ISMR Home</a><span>›</span>News &amp; Updates
</div> <h1>News &amp; Updates</h1> <p>Latest repair guide additions, firmware releases, safety recalls, and community announcements for GY6 and Vespa/Piaggio scooter owners.</p> <div class="page-hero-stats"> <div class="hero-stat"><span class="hero-stat-number">6</span><span class="hero-stat-label">Updates</span></div> <div class="hero-stat"><span class="hero-stat-number">5</span><span class="hero-stat-label">Categories</span></div> <div class="hero-stat"><span class="hero-stat-number">2026</span><span class="hero-stat-label">Season</span></div> </div> </div> </section> <main data-pagefind-body class="container" style="padding-top: 2rem; padding-bottom: 4rem;"> <div class="news-filters"> <button class="news-filter active" data-type="all">All Updates</button> <button class="news-filter" data-type="firmware">Firmware</button> <button class="news-filter" data-type="recall">Recalls</button> <button class="news-filter" data-type="guide">New Guides</button> </div> <div class="news-feed" id="newsFeed"> <article class="news-item" data-type="firmware"> <div class="news-header"> <div> <div class="news-date">May 7, 2026</div> <h3 class="news-title">Piaggio ECU Update v3.2.1 Released</h3> </div> <span class="news-badge">Firmware</span> </div> <div class="news-content"> <p class="news-excerpt">New firmware update available for Vespa Primavera and ZIP models. Includes fuel injection improvements and cold-start fixes.</p> <div class="news-meta"> <span class="meta-tag">Vespa</span> <span class="meta-tag">Injector</span> <span class="meta-tag">ECU</span> </div> <a href="#" class="read-more">Download Update →</a> </div> </article> <article class="news-item" data-type="guide"> <div class="news-header"> <div> <div class="news-date">May 5, 2026</div> <h3 class="news-title">New GY6 Spring Maintenance Guide Published</h3> </div> <span class="news-badge">New Guide</span> </div> <div class="news-content"> <p class="news-excerpt">Comprehensive spring maintenance checklist for GY6 scooters. Learn what to inspect and service before the riding season begins.</p> <div class="news-meta"> <span class="meta-tag">GY6</span> <span class="meta-tag">Maintenance</span> <span class="meta-tag">Seasonal</span> </div> <a href="/repair-guides/" class="read-more">Read Guide →</a> </div> </article> <article class="news-item" data-type="recall"> <div class="news-header"> <div> <div class="news-date">May 1, 2026</div> <h3 class="news-title">BTC Riva Fuel Line Recall Notice</h3> </div> <span class="news-badge">Recall</span> </div> <div class="news-content"> <p class="news-excerpt">Important safety notice: BTC Riva models 2024-2025 may have defective fuel lines. Check your vehicle serial number and contact dealer for free replacement.</p> <div class="news-meta"> <span class="meta-tag">BTC</span> <span class="meta-tag">Safety</span> <span class="meta-tag">Riva</span> </div> <a href="#" class="read-more">Check Serial Number →</a> </div> </article> <article class="news-item" data-type="guide"> <div class="news-header"> <div> <div class="news-date">April 25, 2026</div> <h3 class="news-title">Advanced Carburetor Jetting Guide Updated</h3> </div> <span class="news-badge">Updated</span> </div> <div class="news-content"> <p class="news-excerpt">Major update to our carburetor jetting guide with new diagrams, tools recommendations, and altitude adjustment tables for different regions.</p> <div class="news-meta"> <span class="meta-tag">GY6</span> <span class="meta-tag">Carburetor</span> <span class="meta-tag">Advanced</span> </div> <a href="/repair-guides/" class="read-more">Read Updated Guide →</a> </div> </article> <article class="news-item" data-type="firmware"> <div class="news-header"> <div> <div class="news-date">April 20, 2026</div> <h3 class="news-title">Diagnostic Tool for Vespa Emission Systems</h3> </div> <span class="news-badge">New Tool</span> </div> <div class="news-content"> <p class="news-excerpt">New interactive diagnostic tool helps troubleshoot catalytic converter, EGR, and oxygen sensor issues on Vespa Primavera and ZIP models.</p> <div class="news-meta"> <span class="meta-tag">Vespa</span> <span class="meta-tag">Diagnostics</span> <span class="meta-tag">Emissions</span> </div> <a href="/diagnostics/" class="read-more">Use Diagnostic Tool →</a> </div> </article> </div> </main> <footer data-pagefind-ignore class="footer"> <div class="container"> <div class="footer-content"> <div class="footer-section"> <h4>ISMR</h4> <p>Interactive Scooter Manuals for Repair</p> </div> <div class="footer-section"> <h4>Quick Links</h4> <ul> <li><a href="/">Home</a></li> <li><a href="/repair-guides/">Guides</a></li> <li><a href="/models/">Models</a></li> </ul> </div> </div> <div class="footer-bottom"> <p>Last sync: 2026-05-07</p> <p style="margin-top:0.5rem;font-size:0.85rem;"><a href="/legal/privacy.html" style="color:var(--accent);">Privacy Policy</a> &nbsp;·&nbsp; <a href="/legal/terms.html" style="color:var(--accent);">Terms of Service</a></p> </div> </div> </footer> <script>
    const newsFilters = document.querySelectorAll('.news-filter');
    const newsItems = document.querySelectorAll('.news-item');

    newsFilters.forEach(filter => {
      filter.addEventListener('click', () => {
        const type = filter.getAttribute('data-type');
        newsFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
        newsItems.forEach(item => {
          const itemType = item.getAttribute('data-type');
          item.style.display = (type === 'all' || itemType === type) ? 'block' : 'none';
        });
      });
    });
  <\/script> `])), renderComponent($$result2, "Navbar", $$Navbar, {}), maybeRenderHead()) })}`;
}, "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/pages/news/index.astro", void 0);

const $$file = "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/pages/news/index.astro";
const $$url = "/news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
