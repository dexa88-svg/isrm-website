// ============================================
// ISMR - Interactive JavaScript
// ============================================

// Hero Mouse-Tracking Glow
(function () {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const glow = document.createElement('div');
  glow.className = 'hero-mouse-glow';
  hero.appendChild(glow);

  // Current rendered position & colour (lerped)
  let curX = 0, curY = 0;
  // Target position (raw mouse)
  let tgtX = 0, tgtY = 0;
  // Current colour channels (lerped separately for smooth hue shift)
  let curR = 0, curG = 168, curB = 204;
  let curA = 0.15;

  let mouseInHero = false;
  let rafId = null;

  // Smoothing factor: lower = silkier/slower, higher = snappier
  const EASE = 0.07;

  function lerp(a, b, t) { return a + (b - a) * t; }

  function tick() {
    curX = lerp(curX, tgtX, EASE);
    curY = lerp(curY, tgtY, EASE);

    const rect = hero.getBoundingClientRect();
    const nx = curX / rect.width;
    const ny = curY / rect.height;

    // Target colour: left→cyan (#00a8cc), right→orange (#ff6b35)
    const tR = Math.round(nx * 255);
    const tG = Math.round(168 - nx * 61);
    const tB = Math.round(204 - nx * 151);

    const distCentre = Math.hypot(nx - 0.5, ny - 0.5);
    const tA = mouseInHero ? 0.20 - distCentre * 0.07 : 0;

    // Lerp colour & alpha
    curR = lerp(curR, tR, EASE);
    curG = lerp(curG, tG, EASE);
    curB = lerp(curB, tB, EASE);
    curA = lerp(curA, tA, EASE * 0.6); // alpha fades a little slower

    const r = Math.round(curR), g = Math.round(curG), b = Math.round(curB);
    const a = curA.toFixed(3);

    glow.style.left = `${curX}px`;
    glow.style.top  = `${curY}px`;
    glow.style.opacity = '1';
    glow.style.background = `radial-gradient(circle, rgba(${r},${g},${b},${a}) 0%, rgba(${r},${g},${b},0.04) 55%, transparent 72%)`;

    rafId = requestAnimationFrame(tick);
  }

  hero.addEventListener('mouseenter', (e) => {
    mouseInHero = true;
    const rect = hero.getBoundingClientRect();
    // Teleport to cursor so it doesn't slide in from (0,0)
    curX = tgtX = e.clientX - rect.left;
    curY = tgtY = e.clientY - rect.top;
    if (!rafId) rafId = requestAnimationFrame(tick);
  });

  hero.addEventListener('mouseleave', () => {
    mouseInHero = false;
    // Keep loop running so alpha fades out gracefully, then stop
    setTimeout(() => {
      if (!mouseInHero) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }, 800);
  });

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    tgtX = e.clientX - rect.left;
    tgtY = e.clientY - rect.top;
  });
})();

// Navigation Mobile Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

// Navbar Background on Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = 'var(--shadow-sm)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// Search Functionality
const searchInput = document.getElementById('searchInput');
const searchBtn = document.querySelector('.search-btn');

if (searchBtn && searchInput) {
  searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      // Redirect to repair guides with search query
      window.location.href = `repair-guides/index.html?search=${encodeURIComponent(query)}`;
    }
  });

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const query = searchInput.value.trim();
      if (query) {
        window.location.href = `repair-guides/index.html?search=${encodeURIComponent(query)}`;
      }
    }
  });
}

// Resource Tab Filtering
const tabButtons = document.querySelectorAll('.tab-btn');
const resourceItems = document.querySelectorAll('.resource-item');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    // Update active tab
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Filter resources
    resourceItems.forEach(item => {
      const category = item.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        item.style.display = 'block';
        setTimeout(() => item.classList.add('animate-in'), 0);
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Intersection Observer for Scroll Animations
// Only animate sections that start below the fold — never hide already-visible content.
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('js-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  const rect = section.getBoundingClientRect();
  // Skip sections already in the viewport at load time — no animation, no flash.
  if (rect.top >= window.innerHeight) {
    section.classList.add('js-animate');
    observer.observe(section);
  }
});

// Smooth Scroll Enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Add active state to nav links based on scroll position
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Card Hover Effects
const cards = document.querySelectorAll('.card, .guide-card, .resource-link, .about-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px)';
  });

  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Lazy Load Images (if needed in future)
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Performance: Debounce Scroll Events
let ticking = false;
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  lastScrollY = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Scroll-based animations here
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

// Accessibility: Focus Management
document.querySelectorAll('a, button, input').forEach(element => {
  element.addEventListener('focus', function() {
    this.style.outline = '2px solid var(--primary)';
    this.style.outlineOffset = '2px';
  });

  element.addEventListener('blur', function() {
    this.style.outline = 'none';
  });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
  // Close mobile menu on Escape
  if (e.key === 'Escape' && navMenu) {
    navMenu.classList.remove('active');
  }
});

console.log('ISMR Interactive features loaded successfully');
