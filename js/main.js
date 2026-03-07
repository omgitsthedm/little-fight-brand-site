/* ═══════════════════════════════════════════════════════════════
   Little Fight NYC — Main JS v3.0
   Mobile nav, FAQ accordion, form handling, scroll reveal, nav state
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Nav scroll state ──────────────────────────────────────── */

  var nav = document.querySelector('.nav');

  function updateNavState() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }

  window.addEventListener('scroll', updateNavState, { passive: true });
  updateNavState();

  /* ── Mobile nav toggle ─────────────────────────────────────── */

  var trigger = document.querySelector('.nav__mobile-trigger');
  var overlay = document.getElementById('mobile-menu');

  function closeMobileNav() {
    if (!trigger || !overlay) return;
    overlay.classList.remove('is-open');
    trigger.classList.remove('is-open');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-label', 'Open menu');
    document.body.classList.remove('nav-open');
  }

  if (trigger && overlay) {
    trigger.addEventListener('click', function () {
      var isOpen = overlay.classList.toggle('is-open');
      trigger.classList.toggle('is-open', isOpen);
      trigger.setAttribute('aria-expanded', String(isOpen));
      trigger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      document.body.classList.toggle('nav-open', isOpen);
    });

    // Close on link click
    overlay.querySelectorAll('.nav__mobile-link').forEach(function (link) {
      link.addEventListener('click', closeMobileNav);
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
        closeMobileNav();
        trigger.focus();
      }
    });
  }

  /* ── FAQ accordion ─────────────────────────────────────────── */

  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    var btn = item.querySelector('.faq-trigger');
    var answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');

      // Close all
      faqItems.forEach(function (other) {
        other.classList.remove('is-open');
        var otherBtn = other.querySelector('.faq-trigger');
        var otherAnswer = other.querySelector('.faq-answer');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        if (otherAnswer) {
          otherAnswer.setAttribute('aria-hidden', 'true');
          otherAnswer.style.maxHeight = null;
        }
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        answer.setAttribute('aria-hidden', 'false');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ── Smooth scroll ─────────────────────────────────────────── */

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#' || href.length < 2) return;

      var target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      var offset = nav ? nav.offsetHeight + 16 : 16;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: top, behavior: 'smooth' });
      closeMobileNav();
    });
  });

  /* ── Scroll reveal ─────────────────────────────────────────── */

  var reveals = document.querySelectorAll('.reveal');

  if (reveals.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show everything
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ── Contact form ──────────────────────────────────────────── */

  var form = document.getElementById('contact-form');
  var statusEl = document.getElementById('form-status');

  if (form && statusEl) {
    // Set timestamp on load for bot detection
    var tsField = form.querySelector('[name="submitted-at"]');
    if (tsField) tsField.value = new Date().toISOString();

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Bot check: if honeypot filled, silently succeed
      var honeypot = form.querySelector('[name="bot-field"]');
      if (honeypot && honeypot.value) {
        showFormStatus('success', 'Thanks! We\'ll be in touch soon.');
        form.reset();
        return;
      }

      // Show loading state
      var submitBtn = form.querySelector('[type="submit"]');
      var originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      showFormStatus('loading', 'Sending your message...');

      // Submit via fetch
      var formData = new FormData(form);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
        .then(function (response) {
          if (response.ok) {
            showFormStatus('success', 'Thanks! We\'ll be in touch soon.');
            form.reset();
            if (tsField) tsField.value = new Date().toISOString();

            // Track conversion
            if (window.dataLayer) {
              window.dataLayer.push({
                event: 'form_submission',
                form_name: 'contact'
              });
            }
          } else {
            throw new Error('Form submission failed');
          }
        })
        .catch(function () {
          showFormStatus('error', 'Something went wrong. Please email us directly at hello@littlefightnyc.com');
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        });
    });

    function showFormStatus(type, message) {
      // Clear existing content safely
      while (statusEl.firstChild) {
        statusEl.removeChild(statusEl.firstChild);
      }

      statusEl.className = 'form__status form__status--' + type;

      if (type === 'loading') {
        var spinner = document.createElement('div');
        spinner.className = 'form__spinner';
        statusEl.appendChild(spinner);

        var text = document.createTextNode(' ' + message);
        statusEl.appendChild(text);
      } else {
        statusEl.textContent = message;
      }
    }
  }

  /* ── CTA tracking ──────────────────────────────────────────── */

  document.querySelectorAll('[data-cta]').forEach(function (el) {
    el.addEventListener('click', function () {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'cta_click',
          cta_name: this.getAttribute('data-cta'),
          cta_text: this.textContent.trim(),
          cta_url: this.getAttribute('href') || ''
        });
      }
    });
  });

})();
