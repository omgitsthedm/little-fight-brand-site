/* ═══════════════════════════════════════════════════════════════
   Little Fight NYC — Shared Motion Primitives v1.0
   For static HTML pages (React app uses Framer Motion)
   All functions respect prefers-reduced-motion
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 1. CONCIERGE REVEAL ────────────────────────────────────── */
  /* One-shot viewport entrance: .vg-reveal → .vg-reveal.revealed  */

  function initConciergeReveal() {
    var elements = document.querySelectorAll('.vg-reveal');
    if (!elements.length) return;

    if (prefersReducedMotion) {
      elements.forEach(function (el) { el.classList.add('revealed'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(function (el) { observer.observe(el); });
  }


  /* ── 2. READING RAIL ────────────────────────────────────────── */
  /* Scroll progress bar: .reading-rail width = scroll %           */

  function initReadingRail() {
    var rail = document.querySelector('.reading-rail');
    if (!rail || prefersReducedMotion) return;

    var ticking = false;

    function updateRail() {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      rail.style.width = Math.min(progress, 100) + '%';
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(updateRail);
        ticking = true;
      }
    }, { passive: true });
  }


  /* ── 3. PROOF COUNTER DRIFT ────────────────────────────────── */
  /* Animated count-up: [data-count-target="97"] counts 0→97      */

  function initProofCounters() {
    var counters = document.querySelectorAll('[data-count-target]');
    if (!counters.length) return;

    if (prefersReducedMotion) {
      counters.forEach(function (el) {
        el.textContent = el.getAttribute('data-count-target');
        el.classList.add('revealed');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-count-target'));
    var suffix = el.getAttribute('data-count-suffix') || '';
    var prefix = el.getAttribute('data-count-prefix') || '';
    var duration = 1200;
    var startTime = null;
    var isDecimal = target % 1 !== 0;

    el.classList.add('revealed');

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);

      /* Ease-out cubic */
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = eased * target;

      el.textContent = prefix + (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }


  /* ── 4. ACCORDION BREATHING ────────────────────────────────── */
  /* FAQ toggle: .vg-accordion-item.open toggles content           */

  function initAccordionBreathing() {
    var items = document.querySelectorAll('.vg-accordion-item');
    if (!items.length) return;

    items.forEach(function (item) {
      var trigger = item.querySelector('.vg-accordion-trigger');
      if (!trigger) return;

      trigger.addEventListener('click', function () {
        var wasOpen = item.classList.contains('open');

        /* Close all siblings (single-open mode) */
        var parent = item.parentElement;
        if (parent) {
          parent.querySelectorAll('.vg-accordion-item.open').forEach(function (sibling) {
            sibling.classList.remove('open');
            var btn = sibling.querySelector('.vg-accordion-trigger');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          });
        }

        /* Toggle this one */
        if (!wasOpen) {
          item.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }


  /* ── 5. SIGNAL LINE DRAW ────────────────────────────────────── */
  /* Horizontal line animation on viewport enter                    */

  function initSignalLines() {
    var lines = document.querySelectorAll('.vg-signal-line');
    if (!lines.length || prefersReducedMotion) {
      lines.forEach(function (el) { el.classList.add('active'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    lines.forEach(function (el) { observer.observe(el); });
  }


  /* ── 6. HIGHLIGHT SWEEP ────────────────────────────────────── */
  /* Editorial emphasis on viewport enter                           */

  function initHighlightSweep() {
    var sweeps = document.querySelectorAll('.vg-highlight-sweep');
    if (!sweeps.length || prefersReducedMotion) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    sweeps.forEach(function (el) { observer.observe(el); });
  }


  /* ── 7. CLOSING SIGNAL ─────────────────────────────────────── */
  /* Footer entrance animation at scroll end                        */

  function initClosingSignal() {
    var signals = document.querySelectorAll('.vg-closing-signal');
    if (!signals.length) {
      return;
    }

    if (prefersReducedMotion) {
      signals.forEach(function (el) { el.classList.add('revealed'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    signals.forEach(function (el) { observer.observe(el); });
  }


  /* ── 8. MOBILE NAV TOGGLE ──────────────────────────────────── */
  /* Hamburger menu for static pages                                */

  function initMobileNav() {
    var toggle = document.querySelector('.vg-nav-toggle');
    var menu = document.querySelector('.vg-nav-mobile');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.contains('open');
      menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });
  }


  /* ── INIT ──────────────────────────────────────────────────── */

  function init() {
    initConciergeReveal();
    initReadingRail();
    initProofCounters();
    initAccordionBreathing();
    initSignalLines();
    initHighlightSweep();
    initClosingSignal();
    initMobileNav();
  }

  /* Run after DOM ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
