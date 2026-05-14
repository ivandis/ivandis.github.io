// IVANDIS — nav state, mobile menu, scroll reveals, year stamp.

(function () {
  'use strict';

  const nav    = document.querySelector('.nav');
  const burger = document.querySelector('.nav__burger');
  const mobile = document.querySelector('.nav__mobile');
  const brand  = document.querySelector('.brand');

  /* ----- Logo click: always scroll to top, no matter the URL hash state ----- */
  if (brand) {
    brand.addEventListener('click', (e) => {
      e.preventDefault();
      // Close mobile drawer if open
      if (nav && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        if (burger) burger.setAttribute('aria-expanded', 'false');
        if (mobile) mobile.setAttribute('aria-hidden', 'true');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Clear any hash so a subsequent click still works
      if (location.hash) {
        history.replaceState(null, '', location.pathname + location.search);
      }
    });
  }

  /* ----- Sticky nav state on scroll ----- */
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ----- Mobile menu toggle ----- */
  if (burger && nav && mobile) {
    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
      mobile.setAttribute('aria-hidden', String(!open));
    });
    // Tapping any link inside the drawer closes it
    mobile.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        mobile.setAttribute('aria-hidden', 'true');
      })
    );
  }

  /* ----- Reveal-on-scroll animations ----- */
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items   = document.querySelectorAll('.reveal');

  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ----- Footer copyright year ----- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
