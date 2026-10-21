/* LUMORA landing — shared interactions
   Mobile menu · nav scroll state · scroll reveal. No dependencies. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Mobile menu ─────────────────────────────────────────────────── */
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('mobileMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    menu.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  /* ── Nav: transparent over hero → solid after scroll ─────────────── */
  var nav = document.querySelector('.nav');
  if (nav) {
    var ticking = false;

    function syncNav() {
      nav.classList.toggle('is-scrolled', window.scrollY > 32);
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(syncNav);
      }
    }, { passive: true });

    syncNav();
  }

  /* ── Scroll reveal ───────────────────────────────────────────────── */
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  var selectors = [
    '.section-head',
    '.stats-grid > .stat',
    '.grid-2 > .card',
    '.grid-3 > .card',
    '.grid-4 > .card',
    '.species-grid > .card',
    '.gallery > .case',
    '.pillars > .pillar',
    '.teach-gallery > .teach-photo',
    '.advisor-card',
    '.contact-grid > .contact-card',
    '.cta'
  ];

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  var targets = document.querySelectorAll(selectors.join(','));
  var viewportH = window.innerHeight;

  targets.forEach(function (el) {
    /* Only elements still below the first screen get the animation,
       so nothing above the fold flashes on load. */
    if (el.getBoundingClientRect().top < viewportH * 0.92) return;

    var siblings = el.parentElement ? Array.prototype.slice.call(el.parentElement.children) : [];
    var index = Math.max(0, siblings.indexOf(el));
    el.style.transitionDelay = Math.min(index, 5) * 65 + 'ms';
    el.classList.add('reveal');
    observer.observe(el);
  });
})();
