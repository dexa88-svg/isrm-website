import { c as createComponent, $ as $$Base, a as $$Navbar } from './Navbar_DLUfw84o.mjs';
import 'piccolore';
import { w as renderComponent, B as renderTemplate, j as addAttribute, t as maybeRenderHead } from './prerender_CuGQ4WK_.mjs';
import { g as getCollection } from './_astro_content_fsqDaBRQ.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allGuides = (await getCollection("repair-guides", ({ data }) => !data.draft)).sort((a, b) => b.data.updatedDate.valueOf() - a.data.updatedDate.valueOf());
  const cardMeta = {
    "gy6-scooter-storage-revival-guide": { category: "maintenance", engine: "gy6", fuel: "both" },
    "gy6-oil-change-guide": { category: "maintenance", engine: "gy6", fuel: "both" },
    "gy6-spark-plug-guide": { category: "maintenance", engine: "gy6", fuel: "both" },
    "gy6-air-filter-guide": { category: "maintenance", engine: "gy6", fuel: "both" },
    "gy6-4stroke-maintenance-schedule": { category: "maintenance", engine: "gy6", fuel: "both" },
    "gy6-carburetor-adjustment-guide": { category: "maintenance", engine: "gy6", fuel: "carb" },
    "gy6-carburetor-cleaning-guide": { category: "maintenance", engine: "gy6", fuel: "carb" },
    "carburetor-needle-height-adjustment": { category: "maintenance", engine: "both", fuel: "carb" },
    "gy6-speedometer-cable-replacement": { category: "maintenance", engine: "gy6", fuel: "both" },
    "gy6-fuel-pump-maintenance": { category: "maintenance", engine: "gy6", fuel: "both" },
    "vespa-primavera-sprint-oil-change": { category: "maintenance", engine: "piaggio", fuel: "both" },
    "vespa-diy-maintenance-tips": { category: "maintenance", engine: "piaggio", fuel: "both" },
    "vespa-scooter-routine-service-checklist": { category: "maintenance", engine: "piaggio", fuel: "both" },
    "vespa-primavera-dent-bodywork-repair": { category: "maintenance", engine: "piaggio", fuel: "both" },
    "gy6-brake-pads-guide": { category: "safety", engine: "both", fuel: "both" },
    "gy6-brake-fluid-guide": { category: "safety", engine: "both", fuel: "both" },
    "gy6-ignition-coil-guide": { category: "electrical", engine: "gy6", fuel: "both" },
    "gy6-cdi-no-spark-diagnosis": { category: "electrical", engine: "gy6", fuel: "both" },
    "gy6-electrical-wiring-troubleshooting": { category: "electrical", engine: "gy6", fuel: "both" },
    "gy6-ignition-timing-adjustment-guide": { category: "electrical", engine: "gy6", fuel: "both" },
    "gy6-stator-replacement-guide": { category: "electrical", engine: "gy6", fuel: "both" },
    "gy6-cvt-variator-belt-replacement": { category: "transmission", engine: "gy6", fuel: "both" },
    "scooter-cvt-clutch-variator-guide": { category: "transmission", engine: "both", fuel: "both" },
    "gy6-efi-hard-start-intake-flooding": { category: "fuel-system", engine: "gy6", fuel: "efi" },
    "gy6-hard-start-intake-flooding": { category: "fuel-system", engine: "gy6", fuel: "carb" },
    "gy6-carburetor-jetting-guide": { category: "advanced", engine: "gy6", fuel: "carb" },
    "gy6-valve-adjustment-guide": { category: "advanced", engine: "gy6", fuel: "both" },
    "gy6-top-end-rebuild-piston-rings": { category: "advanced", engine: "gy6", fuel: "both" },
    "gy6-big-bore-kit-guide": { category: "advanced", engine: "gy6", fuel: "carb" },
    "gy6-performance-upgrades-guide": { category: "advanced", engine: "gy6", fuel: "both" }
  };
  function engineTag(slug, appliesTo) {
    const meta = cardMeta[slug];
    const engine = meta?.engine ?? "both";
    const fuel = meta?.fuel ?? "both";
    const parts = [];
    if (engine === "gy6") parts.push("GY6");
    else if (engine === "piaggio") parts.push("Vespa · Piaggio");
    else parts.push("GY6 · Vespa");
    if (fuel === "efi") parts.push("EFI");
    else if (fuel === "carb") parts.push("Carb");
    return parts.join(" · ");
  }
  const title = "Repair Guides — ISMR";
  const description = "Complete repair guide library for GY6 and Piaggio/Vespa scooters — oil changes, spark plugs, carburetor, CVT belt, brakes, valve adjustment, and more.";
  const canonical = "https://ismr.online/repair-guides/";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": title,
    "description": description,
    "url": canonical,
    "isPartOf": { "@type": "WebSite", "name": "ISMR", "url": "https://ismr.online/" }
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "canonical": canonical, "jsonLd": jsonLd }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["  ", " ", '<main data-pagefind-body role="main"> <section class="page-hero"> <div class="page-hero-inner"> <div class="breadcrumb" style="padding: 0 0 1rem; margin: 0;"> <a href="/">ISMR Home</a><span>›</span>Repair Guides\n</div> <h1>Repair Guides</h1> <p>Step-by-step maintenance and repair procedures for GY6-platform and Piaggio/Vespa petrol scooters. Every guide is sourced, verified, and written for DIY owners.</p> <div class="page-hero-stats"> <div class="hero-stat"><span class="hero-stat-number">', '</span><span class="hero-stat-label">Guides</span></div> <div class="hero-stat"><span class="hero-stat-number">GY6</span><span class="hero-stat-label">Engine family</span></div> <div class="hero-stat"><span class="hero-stat-number">5</span><span class="hero-stat-label">Categories</span></div> <div class="hero-stat"><span class="hero-stat-number">Free</span><span class="hero-stat-label">Always</span></div> </div> </div> </section> <div class="filters-bar"> <div class="filters-inner"> <div class="filter-row"> <button class="filter-btn active" data-filter-type="category" data-filter="all">All</button> <button class="filter-btn" data-filter-type="category" data-filter="maintenance">🔩 Maintenance</button> <button class="filter-btn" data-filter-type="category" data-filter="safety">🛑 Safety</button> <button class="filter-btn" data-filter-type="category" data-filter="electrical">⚡ Electrical</button> <button class="filter-btn" data-filter-type="category" data-filter="transmission">⚙️ Transmission</button> <button class="filter-btn" data-filter-type="category" data-filter="fuel-system">⛽ Fuel System</button> <button class="filter-btn" data-filter-type="category" data-filter="advanced">🔬 Advanced</button> <input type="search" class="filters-search" id="guidesSearch" placeholder="Search guides…" aria-label="Search repair guides"> </div> <div class="filter-row"> <span class="filter-label">Engine:</span> <button class="filter-btn" data-filter-type="engine" data-filter="gy6">GY6</button> <button class="filter-btn" data-filter-type="engine" data-filter="piaggio">Piaggio / Vespa</button> <span class="filter-divider" aria-hidden="true"></span> <span class="filter-label">Fuel:</span> <button class="filter-btn" data-filter-type="fuel" data-filter="carb">Carb</button> <button class="filter-btn" data-filter-type="fuel" data-filter="efi">EFI</button> </div> </div> </div> <section class="guides-section"> <div class="guides-section-inner"> <p class="guides-count"><strong id="visibleCount">', '</strong> guides</p> <div class="guides-grid" id="guidesGrid"> ', ` <div class="no-results" id="noResults">No guides match your filters.</div> </div> </div> </section> <script>
      function initializeFilters() {
        const cards = document.querySelectorAll('.guide-card');
        const countEl = document.getElementById('visibleCount');
        const noResults = document.getElementById('noResults');
        const searchInput = document.getElementById('guidesSearch');
        const active = { category: 'all', engine: 'all', fuel: 'all' };
        function applyFilters() {
          const term = searchInput.value.trim().toLowerCase();
          let visible = 0;
          cards.forEach(card => {
            const cat = card.getAttribute('data-category') || '';
            const eng = card.getAttribute('data-engine') || 'both';
            const fuel = card.getAttribute('data-fuel') || 'both';
            const categoryMatch = active.category === 'all' || cat === active.category;
            const engineMatch  = active.engine === 'all'  || eng === active.engine || eng === 'both';
            const fuelMatch    = active.fuel === 'all'    || fuel === active.fuel   || fuel === 'both';
            let textMatch = true;
            if (term) {
              const haystack = [card.querySelector('h3')?.textContent, card.querySelector('p')?.textContent, card.querySelector('.card-guide-tag')?.textContent].filter(Boolean).join(' ').toLowerCase();
              textMatch = haystack.includes(term);
            }
            const show = categoryMatch && engineMatch && fuelMatch && textMatch;
            card.classList.toggle('hidden', !show);
            if (show) visible++;
          });
          countEl.textContent = visible;
          noResults.classList.toggle('visible', visible === 0);
        }
        document.querySelectorAll('.filter-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const type = btn.getAttribute('data-filter-type');
            const value = btn.getAttribute('data-filter');
            if (active[type] === value) { active[type] = 'all'; btn.classList.remove('active'); }
            else { document.querySelectorAll(\`.filter-btn[data-filter-type="\${type}"]\`).forEach(b => b.classList.remove('active')); active[type] = value; btn.classList.add('active'); }
            applyFilters();
          });
        });
        searchInput.addEventListener('input', applyFilters);
        const urlSearch = new URLSearchParams(window.location.search).get('search');
        if (urlSearch) { searchInput.value = urlSearch; applyFilters(); searchInput.focus(); }
      }
      if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initializeFilters); } else { initializeFilters(); }
    <\/script> </main> <footer data-pagefind-ignore class="guide-footer"> <p>ISMR — Interactive Scooter Manuals for Repair. Content for educational purposes. CC BY-SA 4.0.</p> <p style="margin-top: 1rem;"><a href="/" style="color: var(--accent);">⚙️ ISMR Home</a></p> <p style="margin-top:0.75rem;font-size:0.82rem;color:var(--text-secondary);"><a href="/legal/privacy.html" style="color:var(--accent);">Privacy Policy</a> &nbsp;·&nbsp; <a href="/legal/terms.html" style="color:var(--accent);">Terms of Service</a></p> </footer> `], ["  ", " ", '<main data-pagefind-body role="main"> <section class="page-hero"> <div class="page-hero-inner"> <div class="breadcrumb" style="padding: 0 0 1rem; margin: 0;"> <a href="/">ISMR Home</a><span>›</span>Repair Guides\n</div> <h1>Repair Guides</h1> <p>Step-by-step maintenance and repair procedures for GY6-platform and Piaggio/Vespa petrol scooters. Every guide is sourced, verified, and written for DIY owners.</p> <div class="page-hero-stats"> <div class="hero-stat"><span class="hero-stat-number">', '</span><span class="hero-stat-label">Guides</span></div> <div class="hero-stat"><span class="hero-stat-number">GY6</span><span class="hero-stat-label">Engine family</span></div> <div class="hero-stat"><span class="hero-stat-number">5</span><span class="hero-stat-label">Categories</span></div> <div class="hero-stat"><span class="hero-stat-number">Free</span><span class="hero-stat-label">Always</span></div> </div> </div> </section> <div class="filters-bar"> <div class="filters-inner"> <div class="filter-row"> <button class="filter-btn active" data-filter-type="category" data-filter="all">All</button> <button class="filter-btn" data-filter-type="category" data-filter="maintenance">🔩 Maintenance</button> <button class="filter-btn" data-filter-type="category" data-filter="safety">🛑 Safety</button> <button class="filter-btn" data-filter-type="category" data-filter="electrical">⚡ Electrical</button> <button class="filter-btn" data-filter-type="category" data-filter="transmission">⚙️ Transmission</button> <button class="filter-btn" data-filter-type="category" data-filter="fuel-system">⛽ Fuel System</button> <button class="filter-btn" data-filter-type="category" data-filter="advanced">🔬 Advanced</button> <input type="search" class="filters-search" id="guidesSearch" placeholder="Search guides…" aria-label="Search repair guides"> </div> <div class="filter-row"> <span class="filter-label">Engine:</span> <button class="filter-btn" data-filter-type="engine" data-filter="gy6">GY6</button> <button class="filter-btn" data-filter-type="engine" data-filter="piaggio">Piaggio / Vespa</button> <span class="filter-divider" aria-hidden="true"></span> <span class="filter-label">Fuel:</span> <button class="filter-btn" data-filter-type="fuel" data-filter="carb">Carb</button> <button class="filter-btn" data-filter-type="fuel" data-filter="efi">EFI</button> </div> </div> </div> <section class="guides-section"> <div class="guides-section-inner"> <p class="guides-count"><strong id="visibleCount">', '</strong> guides</p> <div class="guides-grid" id="guidesGrid"> ', ` <div class="no-results" id="noResults">No guides match your filters.</div> </div> </div> </section> <script>
      function initializeFilters() {
        const cards = document.querySelectorAll('.guide-card');
        const countEl = document.getElementById('visibleCount');
        const noResults = document.getElementById('noResults');
        const searchInput = document.getElementById('guidesSearch');
        const active = { category: 'all', engine: 'all', fuel: 'all' };
        function applyFilters() {
          const term = searchInput.value.trim().toLowerCase();
          let visible = 0;
          cards.forEach(card => {
            const cat = card.getAttribute('data-category') || '';
            const eng = card.getAttribute('data-engine') || 'both';
            const fuel = card.getAttribute('data-fuel') || 'both';
            const categoryMatch = active.category === 'all' || cat === active.category;
            const engineMatch  = active.engine === 'all'  || eng === active.engine || eng === 'both';
            const fuelMatch    = active.fuel === 'all'    || fuel === active.fuel   || fuel === 'both';
            let textMatch = true;
            if (term) {
              const haystack = [card.querySelector('h3')?.textContent, card.querySelector('p')?.textContent, card.querySelector('.card-guide-tag')?.textContent].filter(Boolean).join(' ').toLowerCase();
              textMatch = haystack.includes(term);
            }
            const show = categoryMatch && engineMatch && fuelMatch && textMatch;
            card.classList.toggle('hidden', !show);
            if (show) visible++;
          });
          countEl.textContent = visible;
          noResults.classList.toggle('visible', visible === 0);
        }
        document.querySelectorAll('.filter-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const type = btn.getAttribute('data-filter-type');
            const value = btn.getAttribute('data-filter');
            if (active[type] === value) { active[type] = 'all'; btn.classList.remove('active'); }
            else { document.querySelectorAll(\\\`.filter-btn[data-filter-type="\\\${type}"]\\\`).forEach(b => b.classList.remove('active')); active[type] = value; btn.classList.add('active'); }
            applyFilters();
          });
        });
        searchInput.addEventListener('input', applyFilters);
        const urlSearch = new URLSearchParams(window.location.search).get('search');
        if (urlSearch) { searchInput.value = urlSearch; applyFilters(); searchInput.focus(); }
      }
      if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initializeFilters); } else { initializeFilters(); }
    <\/script> </main> <footer data-pagefind-ignore class="guide-footer"> <p>ISMR — Interactive Scooter Manuals for Repair. Content for educational purposes. CC BY-SA 4.0.</p> <p style="margin-top: 1rem;"><a href="/" style="color: var(--accent);">⚙️ ISMR Home</a></p> <p style="margin-top:0.75rem;font-size:0.82rem;color:var(--text-secondary);"><a href="/legal/privacy.html" style="color:var(--accent);">Privacy Policy</a> &nbsp;·&nbsp; <a href="/legal/terms.html" style="color:var(--accent);">Terms of Service</a></p> </footer> `])), renderComponent($$result2, "Navbar", $$Navbar, { "activePage": "guides" }), maybeRenderHead(), allGuides.length, allGuides.length, allGuides.map((guide) => {
    const meta = cardMeta[guide.id] ?? { category: "maintenance", engine: "both", fuel: "both" };
    const tag = engineTag(guide.id, guide.data.appliesTo);
    ({ Beginner: 1, Intermediate: 2, Advanced: 3 })[guide.data.difficulty] ?? 1;
    return renderTemplate`<article class="guide-card"${addAttribute(meta.category, "data-category")}${addAttribute(meta.engine, "data-engine")}${addAttribute(meta.fuel, "data-fuel")}> <div class="card-guide-tag">${tag}</div> <h3><a${addAttribute(`/repair-guides/${guide.id}.html`, "href")}>${guide.data.title}</a></h3> <p>${guide.data.description}</p> <div class="card-meta"> <span class="guide-guide-tag">${meta.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}</span> <span class="time">${guide.data.timeEstimate}</span> <span class="guide-guide-tag">${guide.data.difficulty}</span> </div> <a${addAttribute(`/repair-guides/${guide.id}.html`, "href")} class="read-more">Read Guide</a> </article>`;
  })) })}`;
}, "/sessions/ecstatic-zealous-goldberg/mnt/interactive scooter repair manuals - ISRM/src/pages/repair-guides/index.astro", void 0);

const $$file = "/sessions/ecstatic-zealous-goldberg/mnt/interactive scooter repair manuals - ISRM/src/pages/repair-guides/index.astro";
const $$url = "/repair-guides";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
