/**
 * @jest-environment jsdom
 */
'use strict';

// ── Helpers ───────────────────────────────────────────────────────────────────

function buildDOM() {
  document.body.innerHTML = `
    <nav id="navbar" style="box-shadow: none;">
      <button id="navToggle" aria-label="Toggle menu">Menu</button>
      <ul id="navMenu">
        <li><a class="nav-link" href="#section1">Section 1</a></li>
        <li><a class="nav-link" href="#section2">Section 2</a></li>
      </ul>
    </nav>
    <div class="hero">
      <input id="searchInput" type="text" />
      <button class="search-btn">Search</button>
    </div>
    <div class="tabs">
      <button class="tab-btn active" data-filter="all">All</button>
      <button class="tab-btn" data-filter="forums">Forums</button>
      <button class="tab-btn" data-filter="blogs">Blogs</button>
    </div>
    <div class="resource-item" data-category="forums">Forum A</div>
    <div class="resource-item" data-category="blogs">Blog A</div>
    <div class="resource-item" data-category="forums">Forum B</div>
    <section id="section1">Section 1</section>
    <section id="section2">Section 2</section>
    <div class="card">Card</div>
    <img data-src="/images/lazy.jpg" alt="lazy" />
  `;
}

function loadScript() {
  jest.resetModules();
  require('../public/script.js');
}

// ── Setup ─────────────────────────────────────────────────────────────────────

beforeEach(() => {
  // Provide browser APIs that jsdom lacks
  global.IntersectionObserver = jest.fn().mockReturnValue({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  });
  global.requestAnimationFrame = jest.fn(cb => cb());
  window.scrollTo = jest.fn();

  jest.spyOn(console, 'log').mockImplementation(() => {});

  buildDOM();
  loadScript();
});

afterEach(() => {
  jest.restoreAllMocks();
});

// ── Mobile Navigation Toggle ──────────────────────────────────────────────────

describe('Mobile Navigation Toggle', () => {
  it('adds "active" class to navMenu when navToggle is clicked', () => {
    document.getElementById('navToggle').click();

    expect(document.getElementById('navMenu').classList.contains('active')).toBe(true);
  });

  it('removes "active" class from navMenu on a second click (toggle off)', () => {
    const toggle = document.getElementById('navToggle');
    toggle.click();
    toggle.click();

    expect(document.getElementById('navMenu').classList.contains('active')).toBe(false);
  });

  it('removes "active" class from navMenu when a nav link is clicked', () => {
    const toggle = document.getElementById('navToggle');
    toggle.click();
    expect(document.getElementById('navMenu').classList.contains('active')).toBe(true);

    document.querySelector('.nav-link').click();

    expect(document.getElementById('navMenu').classList.contains('active')).toBe(false);
  });

  it('closes menu when any nav link is clicked', () => {
    document.getElementById('navToggle').click();
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
      document.getElementById('navMenu').classList.add('active');
      link.click();
      expect(document.getElementById('navMenu').classList.contains('active')).toBe(false);
    });
  });
});

// ── Keyboard Navigation ───────────────────────────────────────────────────────

describe('Keyboard Navigation', () => {
  it('closes navMenu when Escape key is pressed', () => {
    document.getElementById('navMenu').classList.add('active');

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

    expect(document.getElementById('navMenu').classList.contains('active')).toBe(false);
  });

  it('does not close navMenu for keys other than Escape', () => {
    document.getElementById('navMenu').classList.add('active');

    ['Enter', 'Tab', 'Space', 'ArrowDown'].forEach(key => {
      document.getElementById('navMenu').classList.add('active');
      document.dispatchEvent(new KeyboardEvent('keydown', { key }));
      expect(document.getElementById('navMenu').classList.contains('active')).toBe(true);
    });
  });
});

// ── Search Functionality ──────────────────────────────────────────────────────

describe('Search Functionality', () => {
  beforeEach(() => {
    // Replace window.location so we can assert href assignments
    delete window.location;
    window.location = { href: '' };
  });

  it('redirects to repair-guides on search button click', () => {
    document.getElementById('searchInput').value = 'carburetor';
    document.querySelector('.search-btn').click();

    expect(window.location.href).toBe('repair-guides/index.html?search=carburetor');
  });

  it('URL-encodes spaces in the search query', () => {
    document.getElementById('searchInput').value = 'oil change';
    document.querySelector('.search-btn').click();

    expect(window.location.href).toBe('repair-guides/index.html?search=oil%20change');
  });

  it('URL-encodes special characters in the search query', () => {
    document.getElementById('searchInput').value = 'GY6 & valve';
    document.querySelector('.search-btn').click();

    expect(window.location.href).toBe('repair-guides/index.html?search=GY6%20%26%20valve');
  });

  it('does not redirect when search input is empty', () => {
    document.getElementById('searchInput').value = '';
    document.querySelector('.search-btn').click();

    expect(window.location.href).toBe('');
  });

  it('does not redirect when search input contains only whitespace', () => {
    document.getElementById('searchInput').value = '   ';
    document.querySelector('.search-btn').click();

    expect(window.location.href).toBe('');
  });

  it('redirects when Enter key is pressed in the search input', () => {
    document.getElementById('searchInput').value = 'spark plug';
    document.getElementById('searchInput').dispatchEvent(
      new KeyboardEvent('keypress', { key: 'Enter', bubbles: true })
    );

    expect(window.location.href).toBe('repair-guides/index.html?search=spark%20plug');
  });

  it('does not redirect when a key other than Enter is pressed in the search input', () => {
    document.getElementById('searchInput').value = 'spark plug';
    document.getElementById('searchInput').dispatchEvent(
      new KeyboardEvent('keypress', { key: 'a', bubbles: true })
    );

    expect(window.location.href).toBe('');
  });
});

// ── Resource Tab Filtering ────────────────────────────────────────────────────

describe('Resource Tab Filtering', () => {
  it('shows all resource items when the "all" tab is clicked', () => {
    document.querySelector('[data-filter="all"]').click();

    document.querySelectorAll('.resource-item').forEach(item => {
      expect(item.style.display).toBe('block');
    });
  });

  it('shows only matching items and hides others when a category tab is clicked', () => {
    document.querySelector('[data-filter="forums"]').click();

    document.querySelectorAll('[data-category="forums"]').forEach(item => {
      expect(item.style.display).toBe('block');
    });
    document.querySelectorAll('[data-category="blogs"]').forEach(item => {
      expect(item.style.display).toBe('none');
    });
  });

  it('adds "active" class to the clicked tab', () => {
    const forumsTab = document.querySelector('[data-filter="forums"]');
    forumsTab.click();

    expect(forumsTab.classList.contains('active')).toBe(true);
  });

  it('removes "active" class from all other tabs when a new tab is clicked', () => {
    const allTab = document.querySelector('[data-filter="all"]');
    const forumsTab = document.querySelector('[data-filter="forums"]');

    forumsTab.click();

    expect(allTab.classList.contains('active')).toBe(false);
    expect(forumsTab.classList.contains('active')).toBe(true);
  });

  it('switching tabs updates display for all items correctly', () => {
    document.querySelector('[data-filter="forums"]').click();
    document.querySelector('[data-filter="blogs"]').click();

    document.querySelectorAll('[data-category="forums"]').forEach(item => {
      expect(item.style.display).toBe('none');
    });
    document.querySelectorAll('[data-category="blogs"]').forEach(item => {
      expect(item.style.display).toBe('block');
    });
  });
});

// ── Navbar Scroll Shadow ──────────────────────────────────────────────────────

describe('Navbar Scroll Shadow', () => {
  it('adds box-shadow when scrollY is greater than 50', () => {
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true });
    window.dispatchEvent(new Event('scroll'));

    expect(document.getElementById('navbar').style.boxShadow).toBe('var(--shadow-sm)');
  });

  it('removes box-shadow when scrollY is 50 or less', () => {
    const navbar = document.getElementById('navbar');
    navbar.style.boxShadow = 'var(--shadow-sm)';

    Object.defineProperty(window, 'scrollY', { value: 20, writable: true, configurable: true });
    window.dispatchEvent(new Event('scroll'));

    expect(navbar.style.boxShadow).toBe('none');
  });

  it('adds box-shadow at exactly scrollY = 51', () => {
    Object.defineProperty(window, 'scrollY', { value: 51, writable: true, configurable: true });
    window.dispatchEvent(new Event('scroll'));

    expect(document.getElementById('navbar').style.boxShadow).toBe('var(--shadow-sm)');
  });

  it('removes box-shadow at exactly scrollY = 50', () => {
    const navbar = document.getElementById('navbar');
    navbar.style.boxShadow = 'var(--shadow-sm)';

    Object.defineProperty(window, 'scrollY', { value: 50, writable: true, configurable: true });
    window.dispatchEvent(new Event('scroll'));

    expect(navbar.style.boxShadow).toBe('none');
  });
});
