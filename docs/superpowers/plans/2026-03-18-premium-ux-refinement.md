# Little Fight NYC — Premium UX Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refine all pages on littlefightnyc.com to match the /showcase premium visual baseline — midnight dark theme, glass navigation, premium motion, and editorial polish.

**Architecture:** Hybrid deployment — React app (Home, Services, About, Work, Contact) + Static HTML (Blog, Privacy, Terms, FAQ, Areas, etc.). Both share a design system CSS layer. Netlify serves static files first, React SPA handles core routes.

**Tech Stack:** React 19 + Vite + Tailwind CSS + Framer Motion (app), vanilla HTML/CSS/JS (static pages), Netlify hosting, CSS custom properties, IntersectionObserver for animations.

**Spec:** `docs/superpowers/specs/2026-03-18-premium-ux-refinement-design.md`
**Handover Reference:** `docs/superpowers/specs/handover-reference.md`
**Existing Tokens:** `css/tokens.css` (light-theme token system, already well-structured)

---

## File Map

### Files to Create
- `css/design-system.css` — Midnight dark theme overrides + component classes + motion primitives
- `js/motion.js` — IntersectionObserver-based reveal animations for static pages
- `faq/index.html` — New standalone FAQ page
- `css/design-system.min.css` — Minified version for production

### Files to Modify (Static HTML)
- `privacy.html` — Full rebuild to premium design system (currently light-theme inline styles)
- `terms.html` — Full rebuild to premium design system (currently light-theme inline styles)
- `blog/index.html` — Add card system, editorial polish
- `blog/cybersecurity-for-small-business.html` — Reading rail, pullquotes, schema
- `blog/nyc-small-business-digital.html` — Reading rail, pullquotes, schema
- `blog/protecting-kids-from-ai.html` — Reading rail, pullquotes, schema
- `404.html` — Match premium design system
- `css/tokens.css` — Add midnight-dark color tokens (additive, no breaking changes)

### Files to Modify (React App)
- `app/src/index.css` — Incorporate design system variables if not already present
- `app/src/components/HeroSection.tsx` — Refine per handover spec
- `app/src/components/RevenueLossSection.tsx` — Card grid + status badges
- `app/src/components/ServicesSection.tsx` — Edge current hover + outcome ladders
- `app/src/components/TrustSection.tsx` — Proof counters + before/after
- `app/src/components/WorkSection.tsx` — Pricing tier refinement
- `app/src/components/CTASection.tsx` — Closing signal + CTA consolidation
- `app/src/pages/Services.tsx` — Card system + categories
- `app/src/pages/About.tsx` — Process thread + narrative
- `app/src/pages/Work.tsx` — Proof counters + case study cards
- `app/src/pages/Contact.tsx` — Form states + trust builders

### Files to Verify (No Changes Expected)
- `app/src/components/Navigation.tsx` — Verify matches live nav structure
- `app/src/components/Footer.tsx` — Verify footer credit per CLAUDE.md
- `app/src/components/AmbientBackground.tsx` — Verify aurora drift opacity
- `netlify.toml` — Verify routing rules are correct for hybrid deployment
- `css/consent-banner.css` — Verify premium design system match

---

## Task 1: Design System Foundation — `css/design-system.css`

**Files:**
- Create: `css/design-system.css`
- Modify: `css/tokens.css` (add midnight-dark tokens)

- [ ] **Step 1: Add midnight-dark color tokens to `tokens.css`**

Add a new section to `css/tokens.css` after the existing `:root` block. These extend the existing token system with the midnight palette used by the deployed React app, without breaking the light-theme tokens.

```css
/* ── Midnight Dark Theme (Showcase Baseline) ──────────────────── */
:root {
  /* Midnight surfaces */
  --lf-midnight: #071119;
  --lf-midnight-panel: #0f1a22;
  --lf-midnight-utility: rgba(15,26,34,0.6);

  /* Ice blue accent */
  --lf-ice-blue: #7DD3FC;

  /* Status colors */
  --lf-success: #62E6B7;
  --lf-fault: #EF4444;

  /* Midnight text */
  --lf-text-primary: #ffffff;
  --lf-text-secondary: #94a3b8;
  --lf-text-utility: #64748b;

  /* Midnight borders */
  --lf-border-5: rgba(255,255,255,0.05);
  --lf-border-10: rgba(255,255,255,0.1);
  --lf-border-accent: rgba(254,89,0,0.4);
}
```

- [ ] **Step 2: Create `css/design-system.css` with component classes**

Create the file with: surface hierarchy, CTA system, card system, typography utilities, texture/light effects, motion primitives, and `@supports` fallbacks. Use the exact CSS from spec Section 2 and handover doc. Reference tokens via `var()`.

Key classes to implement:
- `.vg-surface-hero`, `.vg-surface-panel`, `.vg-surface-utility`
- `.vg-cta-primary`, `.vg-cta-secondary`, `.vg-cta-tertiary`
- `.vg-card`, `.vg-card-edge`
- `.vg-font-display`, `.vg-font-body`, `.vg-font-utility`, `.vg-eyebrow`
- `.vg-grain-overlay`, `.light-bloom`, `.photo-grade`
- `.vg-reveal`, `.vg-reveal.revealed` (Concierge Reveal)
- `.vg-status-badge` with `[data-status]` variants
- `.reading-rail` (scroll progress)
- `.faq-item` (accordion breathing)
- `@supports` fallback for `backdrop-filter`
- `@media (prefers-reduced-motion: reduce)` — disable all transitions/animations

- [ ] **Step 3: Verify design-system.css loads without conflicts**

Add `<link rel="stylesheet" href="/css/design-system.css">` to `privacy.html` temporarily and open locally. Confirm: no CSS conflicts with existing `styles.css`, midnight variables resolve correctly, component classes render.

- [ ] **Step 4: Commit**

```bash
git add css/design-system.css css/tokens.css
git commit -m "feat: add midnight design system foundation and token extensions"
```

---

## Task 2: Shared Motion JS — `js/motion.js`

**Files:**
- Create: `js/motion.js`

- [ ] **Step 1: Create `js/motion.js` with IntersectionObserver-based reveals**

Implements Concierge Reveal, Reading Rail, Accordion Breathing, and Proof Counter Drift for static pages. The React app handles its own motion via Framer Motion.

```javascript
// Concierge Reveal — one-shot viewport enter
// Reading Rail — scroll progress bar
// Accordion Breathing — FAQ toggle
// Proof Counter Drift — animated count-up
// All respect prefers-reduced-motion
```

Key implementation:
- `IntersectionObserver` with `threshold: 0.1`, `rootMargin: '0px 0px -50px 0px'`
- `.vg-reveal` elements get `.revealed` class on viewport enter (one-shot, unobserve after)
- Reading rail: `scroll` event listener updates `width` of `.reading-rail` element
- FAQ accordion: click handler toggles `.open` class, CSS handles animation
- Counter drift: count-up from 0 to `data-target` value over 1200ms
- `prefers-reduced-motion` check: if true, add `.revealed` immediately, skip counters animation

- [ ] **Step 2: Test motion.js in browser**

Temporarily add `<script src="/js/motion.js" defer></script>` and a few `.vg-reveal` elements to `privacy.html`. Open in browser. Verify:
- Elements start at opacity 0, translateY 12px
- Scrolling into view triggers `.revealed` class (opacity 1, translateY 0)
- With `prefers-reduced-motion` enabled (browser DevTools > Rendering), elements appear immediately without animation

Remove the temporary additions from privacy.html after testing.

- [ ] **Step 3: Commit**

```bash
git add js/motion.js
git commit -m "feat: add shared motion primitives for static pages"
```

---

## Task 3: Privacy Page Rebuild — `privacy.html`

**Files:**
- Modify: `privacy.html` (full rewrite of `<body>` content)

- [ ] **Step 1: Create the shared static page shell**

Before rewriting privacy.html, establish the reusable HTML pattern that all static pages will use. This shell includes:
- GTM/consent scripts (keep existing `<head>` scripts)
- Skip-to-content link
- Glass navigation matching the deployed React nav structure (For Business, For Home, How We Help, About, Contact + phone + CTA)
- `<main id="main-content">` wrapper
- Premium footer with Reach Us / Browse / Start Here sections + credit line
- Schema markup (`WebPage` + `BreadcrumbList`)
- Links to: `tokens.css`, `styles.css`, `design-system.css`, `motion.js`

Save this pattern mentally — it will be reused for Terms, FAQ, 404, and blog pages.

- [ ] **Step 2: Rewrite `privacy.html` body**

Replace the entire inline-styled content with:
- Premium shell (glass nav, midnight background, premium footer)
- Hero section with `.vg-surface-hero`: eyebrow "Privacy Policy", H1 "How we handle your information", subtext, CTAs (Ask a Privacy Question + Review Terms)
- Content body in `.vg-surface-panel`: 8 sections (What we collect, How we use it, Analytics, Spam protection, Sharing, Retention, Your choices, Contact)
- Sidebar with related links (Terms, FAQ, Blog)
- Reading Rail progress indicator
- `.vg-reveal` on each content section for Concierge Reveal
- Schema: `WebPage` + `BreadcrumbList` JSON-LD
- Footer credit: "Designed, Hosted and Cared For by LittleFightNYC.com" in orange

Content: Use the **deployed live version's content** (from the curl output we captured), not the local file's content. The deployed version has better copy (Cloudflare Turnstile mention, retention policy, etc.).

- [ ] **Step 3: Test locally — open in browser, verify**

Open `privacy.html` in browser. Verify:
- Midnight background renders
- Glass nav appears (transparent, not scrolled state since no JS for scroll)
- Content is readable (white text on dark surfaces)
- Footer matches expected structure
- Reading Rail appears at top
- `.vg-reveal` elements start hidden (opacity 0)
- Links to Terms, FAQ, Blog work

- [ ] **Step 4: Commit**

```bash
git add privacy.html
git commit -m "feat: rebuild privacy page with premium midnight design system"
```

---

## Task 4: Terms Page Rebuild — `terms.html`

**Files:**
- Modify: `terms.html` (full rewrite of `<body>` content)

- [ ] **Step 1: Rewrite `terms.html` using same premium shell as privacy**

Same structure as privacy.html:
- Premium shell (glass nav, midnight bg, premium footer)
- Hero: eyebrow "Terms of Service", H1 "Working together, clearly", CTAs
- Content in `.vg-surface-panel`: 6 sections (Website use, Project scope, IP, Third-party, Communication, Limits)
- Sidebar with related links
- Reading Rail, `.vg-reveal` on sections
- Schema: `WebPage` + `BreadcrumbList`
- Footer credit in orange

Content: Use **deployed live version's content** (plain-language terms covering website use, project scope/estimates, IP, third-party services, communication/approvals, limits).

- [ ] **Step 2: Test locally, verify same criteria as privacy page**

- [ ] **Step 3: Commit**

```bash
git add terms.html
git commit -m "feat: rebuild terms page with premium midnight design system"
```

---

## Task 5: FAQ Standalone Page — `faq/index.html`

**Files:**
- Create: `faq/index.html`

- [ ] **Step 1: Create `faq/index.html`**

New page using the premium static shell:
- Hero: eyebrow "FAQ", H1 "Questions we hear most", subtext
- Accordion FAQ list using `.faq-item` with Accordion Breathing animation
- Pull questions from the homepage FAQ section (already has ~8 questions) plus contact page FAQ (5 questions)
- Group into categories: "Getting Started", "Services & Pricing", "How We Work"
- Each question: `<button class="faq-question">` toggles `<div class="faq-answer">`
- Schema: `FAQPage` JSON-LD with all Q&A pairs
- CTA section at bottom: "Still have questions?" + Book a Consult
- Reading Rail, `.vg-reveal`, footer credit

- [ ] **Step 2: Test locally — verify accordion toggles, schema validates**

- [ ] **Step 3: Commit**

```bash
git add faq/index.html
git commit -m "feat: create standalone FAQ page with accordion breathing"
```

---

## Task 6: 404 Page Polish — `404.html`

**Files:**
- Modify: `404.html`

- [ ] **Step 1: Rebuild `404.html` with premium design system**

- Premium shell (glass nav, midnight bg, footer)
- Centered content: H1 "This page took a wrong turn", subtext "The page you're looking for doesn't exist or has been moved."
- Navigation suggestions: Home, Services, Contact (as `.vg-cta-secondary` buttons)
- Primary CTA: "Go Home" or "Book a Consult"
- `.vg-reveal` on content
- Keep it simple — no decoration beyond the ambient background

- [ ] **Step 2: Test locally — open in browser, verify midnight design renders**

- [ ] **Step 3: Commit**

```bash
git add 404.html
git commit -m "feat: rebuild 404 page with premium midnight design system"
```

---

## Task 7: Blog Index Refinement — `blog/index.html`

**Files:**
- Modify: `blog/index.html`

- [ ] **Step 1: Read current `blog/index.html` and identify gaps vs spec**

The blog index already uses the premium static shell (we saw it loads `styles.css`, `services.css`, `a11y-fixes.css`). Check what needs adding:
- Card system with `.vg-card` and edge current hover on article cards
- Reading time estimates per article
- Category badges ("Search Strategy", "From The Field")
- Featured article treatment (hero surface for latest)
- Grid layout: 1 featured + 2-column for rest

- [ ] **Step 2: Add `design-system.css` link and apply card/category refinements**

Add `<link rel="stylesheet" href="/css/design-system.css">` and `<script src="/js/motion.js" defer></script>` to the page.
Apply `.vg-card` classes to article cards. Add `.vg-reveal` to cards. Add category badges with `.vg-eyebrow`. Add featured treatment to first article.

- [ ] **Step 3: Commit**

```bash
git add blog/index.html
git commit -m "feat: refine blog index with card system and editorial polish"
```

---

## Task 8: Blog Post Refinements — 3 articles

**Files:**
- Modify: `blog/cybersecurity-for-small-business.html`
- Modify: `blog/nyc-small-business-digital.html`
- Modify: `blog/protecting-kids-from-ai.html`

- [ ] **Step 1: Add design-system.css and motion.js to each blog post**

For each of the 3 blog posts:
- Add `<link rel="stylesheet" href="/css/design-system.css">` to `<head>`
- Add `<script src="/js/motion.js" defer></script>` before `</body>`
- Add `.reading-rail` element at top of `<body>` (scroll progress bar)
- Add `.vg-reveal` to article sections
- Add `Article` schema JSON-LD
- Verify content max-width is constrained (65ch or equivalent)

- [ ] **Step 2: Test — open one blog post in browser**

Verify: reading rail appears at top and grows on scroll, `.vg-reveal` sections animate on scroll, Article schema is present in page source.

- [ ] **Step 3: Commit**

```bash
git add blog/
git commit -m "feat: add reading rails, schema, and reveal animations to blog posts"
```

---

## Task 9: React Homepage Refinements

**Files:**
- Modify: `app/src/components/HeroSection.tsx`
- Modify: `app/src/components/RevenueLossSection.tsx`
- Modify: `app/src/components/ServicesSection.tsx`
- Modify: `app/src/components/TrustSection.tsx`
- Modify: `app/src/components/WorkSection.tsx`
- Modify: `app/src/components/CTASection.tsx`

- [ ] **Step 1: Read all 6 homepage component files to understand current state**

Read each file. Note what's already implemented vs what the spec adds. The deployed site is already premium — these are refinements, not rewrites.

- [ ] **Step 2: HeroSection.tsx — Trust Pill Sweep on primary CTA, aurora drift reduction**

Per spec: Add Trust Pill Sweep animation (gradient background-position sweep) to primary CTA. Reduce ambient aurora opacity to 5% in hero content zone. Add `text-wrap: balance` to H1. Stagger Concierge Reveal: headline first, subheading 100ms later.

- [ ] **Step 3: RevenueLossSection.tsx — 3-column card grid with status badges**

Per spec: Convert friction points to card grid. Each card gets: icon + title + 2-line description + status badge. Add signal line connecting the three cards. Stagger reveal per card.

- [ ] **Step 4: ServicesSection.tsx — Edge current hover + outcome ladders**

Per spec: Apply card edge current hover effect. Add 3-step outcome ladder per service lane (problem -> solution -> result). NYC neighborhood badges where relevant.

- [ ] **Step 5: TrustSection.tsx — Proof counter drift**

Per spec: Add animated proof counters (projects completed, total pages, avg Lighthouse score). Counter counts up from 0 on viewport enter. NYC badges on case studies.

- [ ] **Step 6: WorkSection.tsx — Pricing tier differentiation**

Per spec: Most popular tier gets hero surface treatment. Show per-month equivalent on project tiers. Add comparison row. Trust Pill Sweep on recommended tier badge.

- [ ] **Step 7: CTASection.tsx — Closing signal + CTA consolidation**

Per spec: Add Closing Signal animation on final CTA. Consolidate to one primary (Book a Consult) + one secondary (Call). Message Routing visual if feasible.

- [ ] **Step 8: Build and verify**

```bash
cd app && npm run build
```

Open `dist/index.html` in browser. Verify all 6 sections render correctly with refinements. Check mobile layout.

- [ ] **Step 9: Commit**

```bash
git add app/src/components/
git commit -m "feat: refine homepage sections with premium motion and card system"
```

---

## Task 10: React Supporting Pages

**Files:**
- Modify: `app/src/pages/Services.tsx`
- Modify: `app/src/pages/About.tsx`
- Modify: `app/src/pages/Work.tsx`
- Modify: `app/src/pages/Contact.tsx`

- [ ] **Step 1: Read all 4 page files**

- [ ] **Step 2: Services.tsx — Card system, categories, outcome ladders**

Group services into Build/Fix/Secure/Upgrade with eyebrow labels. Apply card edge current. Add outcome ladder per service. NYC badges on location-dependent services.

- [ ] **Step 3: About.tsx — Process thread, narrative**

Add timeline connecting founding -> methodology -> values. Calm Operator section with human narrative. Manhattan neighborhood reference.

- [ ] **Step 4: Work.tsx — Proof counters, case study polish**

Animated proof counters on viewport enter. Photo-grade treatment on case study images. Performance badges (Lighthouse scores) with status indicators.

- [ ] **Step 5: Contact.tsx — Form states, trust builders**

Add success/error states per spec Section 9. Trust builders: hours, response time, free consult badge. Verify Netlify Forms + Turnstile integration.

- [ ] **Step 6: Build and verify**

```bash
cd app && npm run build
```

- [ ] **Step 7: Commit**

```bash
git add app/src/pages/
git commit -m "feat: refine services, about, work, contact pages"
```

---

## Task 11: Remaining Static Pages

**Files:**
- Modify: `areas/east-village.html`, `areas/lower-east-side.html`, `areas/meatpacking-district.html`, `areas/midtown.html`, `areas/soho.html`, `areas/upper-east-side.html`, `areas/west-village.html`, `areas/index.html`
- Modify: `industries.html`
- Modify: `solutions/index.html`
- Modify: `ai-google-broke-the-internet-websites-survive/index.html`
- Modify: `what-google-looks-for-business-website/index.html`
- Modify: `why-business-websites-will-be-invisible/index.html`

- [ ] **Step 1: Add design-system.css and motion.js to all remaining static pages**

For each file: add CSS link, add motion.js script, add `.vg-reveal` to content sections. Verify midnight background, nav, and footer are consistent.

These pages likely already use `styles.css` which has the correct dark styling. The main addition is the `design-system.css` component classes and `motion.js` for reveals.

- [ ] **Step 2: Verify nav and footer consistency across all pages**

Check that every static page has:
- Same nav links (For Business, For Home, How We Help, About, Contact + phone + CTA)
- Same footer structure (Reach Us, Browse, Start Here + credit)
- Footer credit: "Designed, Hosted and Cared For by LittleFightNYC.com" in orange

- [ ] **Step 3: Commit**

```bash
git add areas/ industries.html solutions/ ai-google-broke-the-internet-websites-survive/ what-google-looks-for-business-website/ why-business-websites-will-be-invisible/
git commit -m "feat: apply design system to remaining static pages"
```

---

## Task 12: Cookie Consent & Form States

**Files:**
- Modify: `css/consent-banner.css` (if needed)
- Modify: `js/consent-banner.js` (if needed)

- [ ] **Step 1: Verify existing cookie consent matches premium design system**

The site already has consent banner CSS and JS. Check if it uses `.vg-surface-utility` styling or needs updating. Verify consent mode gates GTM correctly.

- [ ] **Step 2: If needed, update consent banner styling to match midnight design system**

- [ ] **Step 3: Commit (if changes made)**

```bash
git add css/consent-banner.css js/consent-banner.js
git commit -m "fix: align cookie consent banner with premium design system"
```

---

## Task 13: Schema & SEO Verification

**Files:**
- Modify: Various static HTML files (add schema where missing)

- [ ] **Step 1: Verify schema on all static pages**

Check each static page for:
- `WebPage` schema with correct URL and description
- `BreadcrumbList` schema
- Page-type specific schema (Article for blog, FAQPage for FAQ, Service for service pages)
- Meta title + description present
- Canonical URL present
- OG + Twitter meta tags

- [ ] **Step 2: Add missing schema markup**

For each page missing schema, add JSON-LD `<script type="application/ld+json">` in `<head>` using the templates from spec Section 11.

- [ ] **Step 3: Validate with Google Rich Results Test**

Run key pages through https://search.google.com/test/rich-results (or check structured data in browser DevTools).

- [ ] **Step 4: Commit**

```bash
git add *.html blog/ faq/ areas/ services/
git commit -m "feat: add/verify schema markup across all pages"
```

---

## Task 14: Global Polish — Mobile, A11y, Performance

**Files:**
- Modify: `css/design-system.css` (add responsive rules if needed)
- Modify: Various HTML files (a11y fixes)

- [ ] **Step 1: Mobile audit — check touch targets on all pages**

Verify all interactive elements are >= 44px touch target. Check: nav links, CTA buttons, form fields, FAQ toggles, footer links. Fix any that are too small.

- [ ] **Step 2: Accessibility audit**

Verify on all pages:
- Skip-to-content link present
- All images have alt text
- Form fields have labels
- Focus-visible states work
- Heading hierarchy is logical (H1 > H2 > H3, no skips)
- `prefers-reduced-motion` disables all animations

- [ ] **Step 3: Performance budget check**

Run Lighthouse on Homepage, Privacy, Blog index, Contact. For each, verify:
- FCP < 1.5s
- LCP < 2.5s
- CLS < 0.1
- Overall score 90+

Check bundle sizes:
```bash
du -sh app/dist/assets/*.js app/dist/assets/*.css css/design-system.css
```
Targets: JS < 150KB gzipped, CSS < 50KB gzipped, hero images < 80KB.

Fix issues: compress large images, defer non-critical JS, inline critical CSS.

- [ ] **Step 4: Commit fixes**

```bash
git add css/ app/src/ *.html blog/ faq/ areas/
git commit -m "fix: mobile touch targets, a11y improvements, performance optimizations"
```

---

## Task 15: Analytics Events

**Files:**
- Modify: `js/main.js` or create `js/analytics.js`
- Modify: React components (add GTM dataLayer pushes)

- [ ] **Step 1: Add GTM event tracking to static pages**

Create event pushes for:
- CTA clicks (primary/secondary/tertiary) — `dataLayer.push({event: 'cta_click', cta_type: '...', cta_label: '...'})`
- Phone number clicks — `dataLayer.push({event: 'phone_click'})`
- Email clicks — `dataLayer.push({event: 'email_click'})`
- Scroll depth (25/50/75/100%) — IntersectionObserver on sentinel elements

Add `onclick` handlers or delegate via `js/motion.js` event listener on `.vg-cta-primary`, `.vg-cta-secondary`, `a[href^="tel:"]`, `a[href^="mailto:"]`.

- [ ] **Step 2: Add GTM events to React components**

In Contact.tsx: push `form_submit_success` / `form_submit_error` events.
In blog posts: push `blog_read_complete` when reading rail reaches 100%.

- [ ] **Step 3: Verify events fire in GTM debug mode**

Open GTM preview mode, navigate key pages, confirm events appear in the debug panel.

- [ ] **Step 4: Commit**

```bash
git add js/ app/src/
git commit -m "feat: add GTM analytics events for CTAs, forms, scroll depth"
```

---

## Task 16: Browser Testing

**Files:** None (testing only)

- [ ] **Step 1: Test in Chrome (latest)**

Navigate: homepage, privacy, blog, contact, FAQ. Verify: layout, animations, glass nav blur, card hovers, form submission, cookie consent.

- [ ] **Step 2: Test in Firefox (latest)**

Same pages. Pay attention to: `backdrop-filter` (needs `-webkit-` prefix check), card edge mask-composite, font rendering.

- [ ] **Step 3: Test in Safari (latest + iOS Safari)**

Same pages. Pay attention to: `backdrop-filter` rendering, touch targets on iOS, safe-area-inset padding, font-display swap timing.

- [ ] **Step 4: Test in Edge (latest)**

Quick pass — Edge uses Chromium so should match Chrome. Verify no Edge-specific issues.

- [ ] **Step 5: Fix any cross-browser issues found**

```bash
git add css/ app/src/
git commit -m "fix: cross-browser compatibility issues"
```

---

## Task 17: Build & Deploy

**Files:**
- Modify: `app/` (rebuild React)
- Verify: `netlify.toml`

- [ ] **Step 1: Rebuild React app**

```bash
cd "app" && npm install && npm run build
```

Verify `dist/` output contains updated assets.

- [ ] **Step 2: Verify hybrid deployment structure**

Check that `Website-Rebuild/` root contains:
- `app/dist/index.html` + `app/dist/assets/` (React SPA)
- All static HTML files (privacy, terms, blog, faq, areas, etc.)
- `css/design-system.css` and `js/motion.js`
- `robots.txt`, `sitemap.xml`, `404.html`
- `netlify.toml` with correct routing rules

- [ ] **Step 3: Deploy preview to Netlify**

```bash
cd "/Users/davidmarsh/Desktop/LiFi NYC/Brand/Website/Website-Rebuild"
netlify deploy --dir=.
```

This creates a deploy preview URL. Test all pages on the preview.

- [ ] **Step 4: Verify deploy preview**

Test on preview URL:
- [ ] Homepage loads with React SPA
- [ ] /privacy.html renders with midnight design system
- [ ] /terms.html renders with midnight design system
- [ ] /blog/ renders with card system
- [ ] /faq/ renders with accordion
- [ ] /404 renders with premium design
- [ ] Navigation consistent across all pages
- [ ] Mobile layout works on all pages
- [ ] Forms submit correctly
- [ ] Cookie consent works

- [ ] **Step 5: Deploy to production**

Only after preview verification passes:

```bash
netlify deploy --dir=. --prod
```

- [ ] **Step 6: Final production verification**

Test https://littlefightnyc.com and all key pages. Run Lighthouse. Verify schema with Rich Results Test.

- [ ] **Step 7: Commit and tag**

```bash
git add .
git commit -m "deploy: premium UX refinement v1.0"
git tag v1.0-premium-refinement
```

---

## Summary

| Task | Description | Est. Complexity |
|------|-------------|----------------|
| 1 | Design system CSS foundation | Medium |
| 2 | Shared motion JS | Low |
| 3 | Privacy page rebuild | Medium |
| 4 | Terms page rebuild | Low (clone of privacy) |
| 5 | FAQ standalone page | Medium |
| 6 | 404 page polish | Low |
| 7 | Blog index refinement | Low |
| 8 | Blog post refinements (x3) | Low |
| 9 | React homepage (6 sections) | High |
| 10 | React supporting pages (4) | High |
| 11 | Remaining static pages (~15) | Medium |
| 12 | Cookie consent & forms | Low |
| 13 | Schema & SEO | Medium |
| 14 | Global polish (mobile/a11y/perf) | Medium |
| 15 | Analytics events | Low |
| 16 | Browser testing | Medium |
| 17 | Build & deploy | Low |

**Total: 17 tasks, ~45-55 steps**
