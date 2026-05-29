import { c as createComponent, $ as $$Base, a as $$Navbar } from './Navbar_D29TrTyL.mjs';
import 'piccolore';
import { w as renderComponent, B as renderTemplate, j as addAttribute, t as maybeRenderHead } from './prerender_BWJ2jjys.mjs';
import { g as getCollection } from './_astro_content_BCLJuLHn.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Diagnostics — ISMR";
  const description = "Interactive diagnostic tools for GY6 and Piaggio/Vespa scooters — no-start troubleshooting, carburetor issues, CVT noise, EFI fault codes, and more.";
  const canonical = "https://ismr.online/diagnostics/";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Diagnostics — ISMR",
    "description": description,
    "url": canonical,
    "isPartOf": { "@type": "WebSite", "name": "ISMR", "url": "https://ismr.online/" }
  };
  const allGuides = await getCollection("diagnostics", ({ data }) => !data.draft);
  const SECTION_ORDER = [
    "Piaggio ZIP 50/100 4T",
    "Won't Start",
    "Fuel System & Idle",
    "Transmission & Noise",
    "Piaggio & Gilera — Electrical Fault Finding"
  ];
  function getCardTag(data) {
    if (data.cardTag) return data.cardTag;
    const parts = [];
    if (data.engine === "gy6") parts.push("GY6");
    else if (data.engine === "piaggio") parts.push("Piaggio / Vespa");
    else {
      parts.push("GY6");
      parts.push("Piaggio");
    }
    if (data.fuel === "efi") parts.push("EFI");
    return parts.join(" · ");
  }
  const sectionMap = /* @__PURE__ */ new Map();
  for (const s of SECTION_ORDER) sectionMap.set(s, []);
  for (const guide of allGuides) {
    const s = guide.data.section;
    if (!sectionMap.has(s)) sectionMap.set(s, []);
    sectionMap.get(s).push(guide);
  }
  for (const list of sectionMap.values()) {
    list.sort((a, b) => a.data.publishDate.getTime() - b.data.publishDate.getTime());
  }
  const sections = [...sectionMap.entries()].filter(([, list]) => list.length > 0);
  const total = allGuides.length;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "canonical": canonical, "jsonLd": jsonLd }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["  ", " ", '<main data-pagefind-body role="main"> <section class="page-hero"> <div class="page-hero-inner"> <div class="breadcrumb" style="padding: 0 0 1rem; margin: 0;"> <a href="/">ISMR Home</a><span>›</span>Diagnostics\n</div> <h1>Diagnostics</h1> <p>Fault codes, error symptoms, and troubleshooting trees for carbureted and EFI petrol scooters. Start with a symptom, end with a fix.</p> <div class="page-hero-stats"> <div class="hero-stat"><span class="hero-stat-number">', `</span><span class="hero-stat-label">Guides</span></div> <div class="hero-stat"><span class="hero-stat-number">Carb + EFI</span><span class="hero-stat-label">Coverage</span></div> <div class="hero-stat"><span class="hero-stat-number">Free</span><span class="hero-stat-label">Always</span></div> </div> </div> </section> <div class="filters-bar"> <div class="filters-inner"> <div class="filter-row"> <button class="filter-btn active" data-filter-type="category" data-filter="all">All</button> <button class="filter-btn" data-filter-type="category" data-filter="starting">🚫 Won't Start</button> <button class="filter-btn" data-filter-type="category" data-filter="fuel">⛽ Fuel &amp; Idle</button> <button class="filter-btn" data-filter-type="category" data-filter="transmission">⚙️ Transmission</button> <button class="filter-btn" data-filter-type="category" data-filter="electrical">⚡ Electrical</button> <input type="search" class="filters-search" id="diagSearch" placeholder="Search diagnostics…" aria-label="Search diagnostic guides"> </div> <div class="filter-row"> <span class="filter-label">Engine:</span> <button class="filter-btn" data-filter-type="engine" data-filter="gy6">GY6</button> <button class="filter-btn" data-filter-type="engine" data-filter="piaggio">Piaggio / Vespa</button> <span class="filter-divider" aria-hidden="true"></span> <span class="filter-label">Fuel:</span> <button class="filter-btn" data-filter-type="fuel" data-filter="carb">Carb</button> <button class="filter-btn" data-filter-type="fuel" data-filter="efi">EFI</button> </div> </div> </div> <section style="padding: 1.5rem 2rem 0;"> <div style="max-width: 1100px; margin: 0 auto;"> <a href="/diagnostics/wizard.html" class="wizard-banner"> <div style="display:flex; align-items:center; gap:1rem;"> <span style="font-size:2rem; line-height:1;">🔍</span> <div> <div style="font-weight:700; font-size:1rem; color:var(--text-primary);">Not sure where to start? Try the Diagnosis Wizard</div> <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:0.15rem;">Answer a few questions and we'll point you to the likely fault.</div> </div> </div> <span style="color:var(--primary); font-size:1.4rem; flex-shrink:0;">→</span> </a> </div> </section> <section class="guides-section"> <div class="guides-section-inner"> <p class="guides-count"><strong id="visibleCount">`, "</strong> diagnostic guides</p> ", ` <div class="no-results" id="noResults">No guides match these filters — try a different combination.</div> </div> </section> <script>
      function initializeFilters() {
        const cards = document.querySelectorAll('.guide-card');
        const countEl = document.getElementById('visibleCount');
        const noResults = document.getElementById('noResults');
        const searchInput = document.getElementById('diagSearch');
        const active = { category: 'all', engine: 'all', fuel: 'all' };

        function applyFilters() {
          const term = searchInput.value.trim().toLowerCase();
          let visible = 0;
          cards.forEach(card => {
            const cat  = card.getAttribute('data-category') || '';
            const eng  = card.getAttribute('data-engine')   || 'both';
            const fuel = card.getAttribute('data-fuel')     || 'both';
            const categoryMatch = active.category === 'all' || cat === active.category;
            const engineMatch   = active.engine === 'all'   || eng === active.engine  || eng === 'both';
            const fuelMatch     = active.fuel === 'all'     || fuel === active.fuel    || fuel === 'both';
            let textMatch = true;
            if (term) {
              const haystack = [
                card.querySelector('h3')?.textContent,
                card.querySelector('p')?.textContent,
                card.querySelector('.card-guide-tag')?.textContent,
              ].filter(Boolean).join(' ').toLowerCase();
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
            const type  = btn.getAttribute('data-filter-type');
            const value = btn.getAttribute('data-filter');
            if (active[type] === value) {
              active[type] = 'all';
              btn.classList.remove('active');
            } else {
              document.querySelectorAll(\`.filter-btn[data-filter-type="\${type}"]\`).forEach(b => b.classList.remove('active'));
              active[type] = value;
              btn.classList.add('active');
            }
            applyFilters();
          });
        });

        searchInput.addEventListener('input', applyFilters);
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeFilters);
      } else {
        initializeFilters();
      }
    <\/script> </main> <footer data-pagefind-ignore class="guide-footer"> <p>ISMR — Interactive Scooter Manuals for Repair. Content for educational purposes. CC BY-SA 4.0.</p> <p style="margin-top: 1rem;"><a href="/" style="color: var(--accent);">⚙️ ISMR Home</a></p> <p style="margin-top:0.75rem;font-size:0.82rem;color:var(--text-secondary);"><a href="/legal/privacy.html" style="color:var(--accent);">Privacy Policy</a> &nbsp;·&nbsp; <a href="/legal/terms.html" style="color:var(--accent);">Terms of Service</a></p> </footer> `], ["  ", " ", '<main data-pagefind-body role="main"> <section class="page-hero"> <div class="page-hero-inner"> <div class="breadcrumb" style="padding: 0 0 1rem; margin: 0;"> <a href="/">ISMR Home</a><span>›</span>Diagnostics\n</div> <h1>Diagnostics</h1> <p>Fault codes, error symptoms, and troubleshooting trees for carbureted and EFI petrol scooters. Start with a symptom, end with a fix.</p> <div class="page-hero-stats"> <div class="hero-stat"><span class="hero-stat-number">', `</span><span class="hero-stat-label">Guides</span></div> <div class="hero-stat"><span class="hero-stat-number">Carb + EFI</span><span class="hero-stat-label">Coverage</span></div> <div class="hero-stat"><span class="hero-stat-number">Free</span><span class="hero-stat-label">Always</span></div> </div> </div> </section> <div class="filters-bar"> <div class="filters-inner"> <div class="filter-row"> <button class="filter-btn active" data-filter-type="category" data-filter="all">All</button> <button class="filter-btn" data-filter-type="category" data-filter="starting">🚫 Won't Start</button> <button class="filter-btn" data-filter-type="category" data-filter="fuel">⛽ Fuel &amp; Idle</button> <button class="filter-btn" data-filter-type="category" data-filter="transmission">⚙️ Transmission</button> <button class="filter-btn" data-filter-type="category" data-filter="electrical">⚡ Electrical</button> <input type="search" class="filters-search" id="diagSearch" placeholder="Search diagnostics…" aria-label="Search diagnostic guides"> </div> <div class="filter-row"> <span class="filter-label">Engine:</span> <button class="filter-btn" data-filter-type="engine" data-filter="gy6">GY6</button> <button class="filter-btn" data-filter-type="engine" data-filter="piaggio">Piaggio / Vespa</button> <span class="filter-divider" aria-hidden="true"></span> <span class="filter-label">Fuel:</span> <button class="filter-btn" data-filter-type="fuel" data-filter="carb">Carb</button> <button class="filter-btn" data-filter-type="fuel" data-filter="efi">EFI</button> </div> </div> </div> <section style="padding: 1.5rem 2rem 0;"> <div style="max-width: 1100px; margin: 0 auto;"> <a href="/diagnostics/wizard.html" class="wizard-banner"> <div style="display:flex; align-items:center; gap:1rem;"> <span style="font-size:2rem; line-height:1;">🔍</span> <div> <div style="font-weight:700; font-size:1rem; color:var(--text-primary);">Not sure where to start? Try the Diagnosis Wizard</div> <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:0.15rem;">Answer a few questions and we'll point you to the likely fault.</div> </div> </div> <span style="color:var(--primary); font-size:1.4rem; flex-shrink:0;">→</span> </a> </div> </section> <section class="guides-section"> <div class="guides-section-inner"> <p class="guides-count"><strong id="visibleCount">`, "</strong> diagnostic guides</p> ", ` <div class="no-results" id="noResults">No guides match these filters — try a different combination.</div> </div> </section> <script>
      function initializeFilters() {
        const cards = document.querySelectorAll('.guide-card');
        const countEl = document.getElementById('visibleCount');
        const noResults = document.getElementById('noResults');
        const searchInput = document.getElementById('diagSearch');
        const active = { category: 'all', engine: 'all', fuel: 'all' };

        function applyFilters() {
          const term = searchInput.value.trim().toLowerCase();
          let visible = 0;
          cards.forEach(card => {
            const cat  = card.getAttribute('data-category') || '';
            const eng  = card.getAttribute('data-engine')   || 'both';
            const fuel = card.getAttribute('data-fuel')     || 'both';
            const categoryMatch = active.category === 'all' || cat === active.category;
            const engineMatch   = active.engine === 'all'   || eng === active.engine  || eng === 'both';
            const fuelMatch     = active.fuel === 'all'     || fuel === active.fuel    || fuel === 'both';
            let textMatch = true;
            if (term) {
              const haystack = [
                card.querySelector('h3')?.textContent,
                card.querySelector('p')?.textContent,
                card.querySelector('.card-guide-tag')?.textContent,
              ].filter(Boolean).join(' ').toLowerCase();
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
            const type  = btn.getAttribute('data-filter-type');
            const value = btn.getAttribute('data-filter');
            if (active[type] === value) {
              active[type] = 'all';
              btn.classList.remove('active');
            } else {
              document.querySelectorAll(\\\`.filter-btn[data-filter-type="\\\${type}"]\\\`).forEach(b => b.classList.remove('active'));
              active[type] = value;
              btn.classList.add('active');
            }
            applyFilters();
          });
        });

        searchInput.addEventListener('input', applyFilters);
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeFilters);
      } else {
        initializeFilters();
      }
    <\/script> </main> <footer data-pagefind-ignore class="guide-footer"> <p>ISMR — Interactive Scooter Manuals for Repair. Content for educational purposes. CC BY-SA 4.0.</p> <p style="margin-top: 1rem;"><a href="/" style="color: var(--accent);">⚙️ ISMR Home</a></p> <p style="margin-top:0.75rem;font-size:0.82rem;color:var(--text-secondary);"><a href="/legal/privacy.html" style="color:var(--accent);">Privacy Policy</a> &nbsp;·&nbsp; <a href="/legal/terms.html" style="color:var(--accent);">Terms of Service</a></p> </footer> `])), renderComponent($$result2, "Navbar", $$Navbar, { "activePage": "diagnostics" }), maybeRenderHead(), total, total, sections.map(([sectionName, guides]) => renderTemplate`<div> <div class="section-label">${sectionName}</div> <div class="guides-grid"> ${guides.map((guide) => {
    const { title: title2, description: description2, tags, timeEstimate, difficulty, category, engine, fuel } = guide.data;
    const slug = guide.id;
    const href = `/diagnostics/${slug}.html`;
    const cardTag = getCardTag(guide.data);
    const displayTags = tags.filter((t) => !["diagnostics", "Diagnostics"].includes(t)).slice(0, 2);
    return renderTemplate`<article class="guide-card"${addAttribute(category, "data-category")}${addAttribute(engine, "data-engine")}${addAttribute(fuel, "data-fuel")}> <div class="card-guide-tag">${cardTag}</div> <h3><a${addAttribute(href, "href")}>${title2}</a></h3> <p>${description2}</p> <div class="card-meta"> ${displayTags.length > 0 ? displayTags.map((t) => renderTemplate`<span class="guide-guide-tag">${t}</span>`) : renderTemplate`<span class="guide-guide-tag">${difficulty}</span>`} ${timeEstimate && renderTemplate`<span class="time">${timeEstimate}</span>`} </div> <a${addAttribute(href, "href")} class="read-more">Read Guide</a> </article>`;
  })} </div> </div>`)) })}`;
}, "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/pages/diagnostics/index.astro", void 0);

const $$file = "/sessions/exciting-laughing-tesla/mnt/interactive scooter repair manuals - ISRM/src/pages/diagnostics/index.astro";
const $$url = "/diagnostics";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
