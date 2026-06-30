# Little Fight NYC — Premium UX Refinement Design Spec

**Date:** 2026-03-18
**Baseline:** /showcase page visual system
**Source:** Handover doc from Qwen3.5-Plus session
**Architecture:** Hybrid — React app (core pages) + Static HTML (blog, legal, extras)

> **CLAUDE.md Override:** This project uses a React + static HTML hybrid architecture by explicit user approval, overriding the CLAUDE.md "static-only by default" directive. The React app was built externally and is the established production codebase.

---

## 1. Architecture Overview

### Hybrid Deployment Model

The site runs as a hybrid where **static HTML files take routing precedence** over the React SPA. Netlify serves static files first; only paths without a matching static file fall through to the React SPA.

- **React app** (`app/src/`) — Home, Services, About, Work, Contact
- **Static HTML** (`Website-Rebuild/`) — Blog (index + 3 articles), Privacy, Terms, FAQ page (new), Areas (7 neighborhoods), Industries, Solutions, SEO landing pages (3), 404
- **Shared design system** — A single CSS file consumed by both React (via Tailwind + index.css) and static pages (via `<link>`)
- **Deploy target:** Netlify, publish root = `Website-Rebuild/`, React dist embedded at `app/dist/`

**Routing rule:** Static HTML files at specific paths (e.g., `/privacy.html`, `/blog/index.html`) are served directly by Netlify. The React SPA handles `/`, `/services`, `/about`, `/work`, `/contact` via `app/dist/index.html`. The existing `netlify.toml` catch-all rewrite (`/* -> /404.html 404`) handles unknown paths.

### What Gets Deployed

```
Website-Rebuild/           <- Netlify publish root
  app/dist/
    index.html             <- React SPA shell (handles /, /services, /about, /work, /contact)
    assets/                <- Hashed JS/CSS chunks
  blog/                    <- Static HTML pages (served directly by Netlify)
  privacy.html             <- Static HTML (served directly by Netlify)
  terms.html               <- Static HTML
  about/index.html         <- Static fallback; React route /about takes precedence when SPA is loaded
  services/                <- Static sub-pages
  work/index.html          <- Static
  areas/                   <- Static neighborhood pages
  css/
    design-system.css      <- NEW: shared variables, components, motion
    styles.css             <- Existing: page-specific styles
  js/
    motion.js              <- NEW: shared IntersectionObserver + animation JS
  assets/
  netlify.toml
  robots.txt
  sitemap.xml
  404.html
```

---

## 2. Shared Design System (`css/design-system.css`)

This file is the single source of truth for visual consistency across both codebases. It contains everything from the handover doc's "Immutable Core" section.

### 2.1 CSS Variables

```css
:root {
  /* Base */
  --color-bg: #071119;
  --color-surface-panel: #0f1a22;
  --color-surface-utility: rgba(15,26,34,0.6);

  /* Action & Status */
  --color-accent: #FE5900;
  --color-ice-blue: #7DD3FC;
  --color-success: #62E6B7;
  --color-triage: #FE5900;
  --color-fault: #EF4444;

  /* Text */
  --color-text-primary: #ffffff;
  --color-text-secondary: #94a3b8;
  --color-text-utility: #64748b;

  /* Borders */
  --border-white-5: rgba(255,255,255,0.05);
  --border-white-10: rgba(255,255,255,0.1);
  --border-accent-40: rgba(254,89,0,0.4);

  /* Spacing scale (4px increments) */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
  --space-32: 8rem;
}
```

**Hard rule:** `--color-accent` (Signal Orange) is for actions, critical status, or discovery ONLY. Never decorative. Never background fills.

### 2.2 Typography Classes

- `.vg-font-display` — Space Grotesk 700, tracking -0.05em, line-height 0.85
- `.vg-font-body` — Inter 400-500, line-height 1.7, max-width 65ch
- `.vg-font-utility` — monospace, tracking -0.02em
- `.vg-eyebrow` — Space Grotesk 500, uppercase, tracking 0.05em

### 2.3 Surface Hierarchy

- `.vg-surface-hero` — color-bg, border white/10, blur 24px, deep shadow
- `.vg-surface-panel` — surface-panel, border white/5, blur 12px
- `.vg-surface-utility` — surface-utility, border white/5, blur 8px

### 2.4 CTA System

- `.vg-cta-primary` — Orange fill, white text, rounded-full, hover opacity 0.9
- `.vg-cta-secondary` — Transparent, ice-blue border, hover bg ice-blue/10
- `.vg-cta-tertiary` — Text link with arrow (->), hover color accent

### 2.5 Card System

- `.vg-card` — Panel surface, 12px radius, translateY(-2px) on hover
- `.vg-card-edge` — Animated orange edge sweep on hover (gradient mask)

### 2.6 Texture & Light

- `.vg-grain-overlay` — SVG noise at 3% opacity, absolute fill, pointer-events none
- `.light-bloom` — 600px radial gradient, ice-blue at 8%, blur 120px
- `.photo-grade` — contrast 1.1, saturation 0.85, brightness 0.95

### 2.7 Motion Primitives

All animation code lives in `js/motion.js` (static pages) and equivalent React hooks (app).

| Primitive | Trigger | CSS Pattern | Timing |
|-----------|---------|-------------|--------|
| Concierge Reveal | Viewport enter (one-shot) | opacity 0->1, translateY 12px->0 | 500ms ease-out |
| Trust Pill Sweep | Load (one-shot) | gradient bg-position -100%->200% | 300ms ease |
| Card Edge Current | Hover | box-shadow inset accent | 200ms fade |
| Aurora Drift | Continuous | bg-position 0%->100% | 20s loop, <10% opacity |
| Accordion Breathing | Toggle | max-height 0->auto, opacity 0->1 | 300ms ease-out |
| Reading Rail | Scroll | width 0%->scroll% | Real-time, 60fps |
| Proof Counter Drift | Viewport enter | Count-up + translateY 4px->0 | 1200ms staggered |
| Closing Signal | Scroll-end | opacity 0.8->1, translateY 2px->0 | 400ms ease-out |

Additional named effects from the handover doc (Signal Line Draw, Contour Pulse, Highlight Sweep, Quiet Header Fade, etc.) are considered **refinements of existing primitives**, not new types. Signal Line Draw = variant of Concierge Reveal with horizontal axis. Highlight Sweep = variant of Trust Pill Sweep. Quiet Header Fade = variant of Concierge Reveal. Map each to its parent primitive when implementing.

**Hard rule:** Never add fundamentally new animation types. Named variants of existing primitives are acceptable.

**Duration note:** CLAUDE.md's 150-300ms guidance applies to interaction animations (hover, click). Reveal/ambient animations follow the timing in this table (up to 1200ms for reveals, continuous for ambient).

---

## 3. React App Refinements (`app/src/`)

Apply the handover doc's section-by-section specs to the existing React components. The React app already implements the premium design system — these are refinements, not rewrites.

### 3.1 Homepage Sections

**HeroSection.tsx:**
- Keep H1 tracking at -0.05em (immutable core; the handover doc's -0.06em suggestion is overridden by the design system)
- Add Trust Pill Sweep to primary CTA only
- Reduce Aurora Drift opacity to 5% under headline
- Add light-bloom behind subheading
- Concierge Reveal: 600ms stagger by 100ms on headline + subheading
- text-wrap: balance on H1

**RevenueLossSection.tsx (Problem Statement):**
- Convert friction points to 3-column card grid with status badges
- Each card: icon + title + 2-line description
- Add signal line connecting the three cards
- Concierge Reveal staggered per card

**ServicesSection.tsx (Three Lanes):**
- Apply vg-card with edge current hover to each lane card
- Add outcome ladders (3-step progression per lane)
- NYC neighborhood badges where relevant
- Guided discovery: hover expands card slightly with additional detail

**TrustSection.tsx (Proof/Case Studies):**
- Add proof counter drift (animated stats: projects, pages, avg score)
- Before/after comparison slider for case studies (if imagery available)
- NYC badges on each case study

**WorkSection.tsx (Pricing):**
- Clear tier differentiation with surface hierarchy (most popular = hero surface)
- Price anchoring: show per-month equivalent on project tiers
- Add comparison row showing what's included
- Trust Pill Sweep on recommended tier badge

**CTASection.tsx (Contact/Footer area):**
- Closing Signal animation on final CTA
- Message Routing visual: animated path showing contact flow
- Consolidate CTAs: one primary (Book a Consult), one secondary (Call)

### 3.2 Supporting Pages (React)

**Services.tsx:**
- Apply card system with edge current to all service cards
- Group into Build / Fix / Secure / Upgrade categories with eyebrow labels
- Add outcome ladder per service (problem -> solution -> result)
- NYC badges on location-dependent services

**About.tsx:**
- Process thread visual: timeline connecting founding -> methodology -> values
- Calm Operator section: human narrative, not corporate
- Neighborhood pulse: map or badge showing Manhattan base

**Work.tsx:**
- Interactive proof counters (animated on viewport enter)
- Case study cards with photo-grade treatment
- Performance badges (Lighthouse scores) with status indicators
- Client scenario cards for SoHo Restaurant, East Village Salon, Midtown Studio

**Contact.tsx:**
- Message Routing animation on channel selection
- Form fields with accent focus states
- 4-step process visualization
- Trust builders: hours, response time, free consultation badge

### 3.3 React Routes — No New Routes Needed

Blog, Privacy, Terms, FAQ, and Showcase are handled as **static HTML pages** (Section 4), NOT React routes. The React app keeps its existing 5 routes only: `/`, `/services`, `/about`, `/work`, `/contact`. This avoids routing conflicts where both a static HTML file and a React route compete for the same path on Netlify.

---

## 4. Static Page Refinements (`Website-Rebuild/`)

For pages that remain as static HTML (backup/fallback or standalone).

### 4.1 Privacy (`privacy.html`) — Full Rebuild

**Current state:** Inline styles, light-theme colors (#444 text, #222 footer), different nav structure.

**Target:** Match deployed React version's premium design — midnight background, glass nav, luxury surfaces, proper footer.

Changes:
- Replace inline styles with design-system.css classes
- Use vg-surface-panel for content area
- Add Reading Rail (scroll progress indicator)
- Quiet Header Fade animation on entry
- Sidebar with related links (Terms, FAQ, Blog)
- Section dividers between policy sections
- Contact CTA at bottom (email for privacy questions)

### 4.2 Terms (`terms.html`) — Full Rebuild

Same treatment as Privacy. Replace inline light-theme with premium dark system.

### 4.3 Blog Index (`blog/index.html`) — Refinement

**Current state:** Functional but needs editorial polish.

Changes:
- Apply card system to article cards with edge current hover
- Add reading time estimates per article
- Category badges (Search Strategy, From The Field)
- Featured article treatment: hero surface for latest
- Grid: 1 featured + 2-column grid for rest

### 4.4 Blog Posts (`blog/*.html`) — Refinement

Changes per the handover doc:
- Add Reading Rail (scroll progress bar)
- Article pullquote styling with light-bloom background
- Highlight Sweep on key paragraphs
- Related articles section at bottom
- Author/date metadata with utility typography
- Content max-width: 65ch for readability

### 4.5 Areas Pages (`areas/*.html`) — Refinement

7 neighborhood pages (East Village, LES, Meatpacking, Midtown, SoHo, UES, West Village). Apply premium design system:
- Midnight background, glass nav, premium footer
- Neighborhood badge with zip code
- Local business scenarios relevant to the area
- Service CTA specific to on-site availability
- Breadcrumb nav (Home > Areas > Neighborhood)

### 4.6 Industries, Solutions, SEO Landing Pages — Refinement

These existing pages (`industries.html`, `solutions/index.html`, 3 SEO pages) get the same treatment:
- Replace any inconsistent styling with design-system.css classes
- Ensure midnight atmosphere, glass nav, premium footer
- Verify internal links and CTAs work
- Add structured data where missing

### 4.7 404 Page — Refinement

- Match premium design system
- Concierge Reveal on entry
- Helpful navigation: suggest Home, Services, Contact
- Maintain brand voice (calm, not clever)

---

## 5. Global Improvements (All Pages)

### 5.1 Mobile Responsiveness

- Touch targets: minimum 44px on all interactive elements
- Section padding: reduce from --space-24 to --space-16 on mobile
- Typography: scale down display type appropriately
- Glass header: ensure backdrop-blur works on mobile Safari
- Hamburger menu: thumb-friendly, full-width links
- CTA buttons: full-width on mobile, stacked vertically

### 5.2 Accessibility

- `prefers-reduced-motion`: disable all animations, show static states
- Color contrast: AA minimum on all text/background combinations
- Skip-to-content link on every page
- Proper ARIA labels on interactive elements
- Focus-visible states on all focusable elements
- Semantic HTML: header, main, footer, nav, article, section

### 5.3 SEO & Schema (per CLAUDE.md)

Every page must have:
- Title tag + meta description
- One H1 per page
- Clean heading hierarchy (H2/H3 logical)
- Canonical URL
- OG + Twitter meta tags

Schema markup per page type:
- All pages: Organization, WebSite
- Home: WebPage, FAQPage (for FAQ section)
- Services/sub-pages: Service
- Blog posts: Article, BreadcrumbList
- Contact: ContactPage
- Areas: LocalBusiness with areaServed

The deployed React build already has Organization, WebSite, WebPage, and BreadcrumbList schemas. Verify static pages have equivalent markup.

### 5.4 Performance

- Lazy-load images below the fold
- Preload hero image and critical fonts
- WebP format for all photos (per CLAUDE.md tiers: hero 80, standard 78, thumbnails 75, textures 70)
- Defer non-critical JS
- Inline critical CSS for above-fold content
- Target: Lighthouse Performance 90+

---

## 6. Navigation Consistency

Ensure all pages (React and static) share identical navigation:

**Primary nav (matches live deployed site):** For Business, For Home, How We Help, About, Contact
**Utility:** Phone (646-360-0318), Book a Consult CTA
**Footer sections:** Reach Us (phone, email, location), Browse (Company links + Resources), Start Here (service categories)
**Footer credit:** "Designed, Hosted and Cared For by LittleFightNYC.com" in orange (per CLAUDE.md)

> Note: The handover doc's nav HTML shows a different structure (Services, Work, About, Contact). Use the **live deployed nav** as the authority, not the handover doc's nav HTML.

### Nav Link Targets
- For Business -> /#business
- For Home -> /#home
- How We Help -> /#services
- About -> /about/
- Contact -> /contact/
- Blog -> /blog/
- Work -> /work/
- FAQ -> /faq/
- Privacy -> /privacy/ (or /privacy.html — ensure redirect)
- Terms -> /terms/ (or /terms.html — ensure redirect)

---

## 7. Hard Rules Checklist

These rules CANNOT be violated:

- Never add new animation types — only refine existing motion primitives
- Never use orange for decoration — only actions, critical status, discovery
- Never replace midnight atmosphere with light mode
- Never increase motion intensity — restraint = premium
- Never add generic SaaS patterns (floating cards, bouncy buttons)
- Never change font families or tracking outside the defined system
- Never alter glass header behavior or backdrop-blur values
- Never add auto-playing video, parallax beyond aurora drift, or mouse-follow
- Never use hex values directly — always CSS variables
- Never ignore 44px minimum touch targets on mobile
- Never forget prefers-reduced-motion support
- Never compromise AA color contrast
- Never break asymmetric editorial layout for forced symmetry

---

## 8. Cookie Consent & Compliance

### Specification
- Component: `vg-cookie-banner` anchored to bottom of viewport
- Design: `.vg-surface-utility` background, blur, border white/5
- Options: Accept All, Essential Only, Customize
- Store consent in `localStorage` with 365-day expiry key `lf-cookie-consent`
- Block non-essential scripts (GTM, analytics) until consent granted
- On consent change, reload GTM dataLayer with updated consent state
- Motion: Concierge Reveal on first visit only, 400ms ease-up from bottom
- Respect `prefers-reduced-motion`: no animation, immediate display

### Implementation
The site already has `css/consent-banner.css` and `js/consent-banner.js` plus GTM consent mode in `index.html`. Verify these work correctly with the premium design system and add the `.vg-surface-utility` treatment if needed. The existing EU region default-deny + US default-grant logic is correct.

---

## 9. Form Backend & Spam Protection

### Specification
- Service: **Netlify Forms** (already configured — the deployed site has `<form hidden method='post' name='contact'>`)
- Spam protection: **Cloudflare Turnstile** (already deployed on contact page)
- Honeypot field: `bot-field` hidden input (already present)
- Success state: Inline confirmation with `.vg-status-badge[data-status="success"]`
- Error state: Inline validation with `.vg-status-badge[data-status="fault"]` per field
- Summary error at top of form if multiple validation issues
- Rate limiting: Netlify's built-in submission limits apply

### Form Error States
```
Field-level: red border (--color-fault), error message below field
Form-level: summary panel at top with `.vg-surface-utility` + fault status badge
Success: green confirmation with `.vg-status-badge[data-status="success"]`, fade in 300ms
```

---

## 10. Browser Support Matrix

### Target Support
- Chrome: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions (including iOS Safari 16+)
- Edge: Last 2 versions
- No IE11 support

### Fallbacks Required
- `backdrop-filter`: Graceful degradation to solid `rgba(7,17,25,0.92)` background
- `text-wrap: balance`: Accept normal wrapping on unsupported browsers
- `IntersectionObserver`: Natively supported in all targets; no polyfill needed
- CSS `@supports` queries for `backdrop-filter` and `mask-composite`

---

## 11. Schema Markup Templates

The deployed React build already includes Organization, WebSite, WebPage, and BreadcrumbList schemas. Static pages need equivalent markup.

### Homepage (already deployed)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Little Fight NYC",
  "url": "https://littlefightnyc.com",
  "telephone": "+1-646-360-0318",
  "email": "hello@littlefightnyc.com",
  "areaServed": [
    { "@type": "City", "name": "New York City" },
    { "@type": "AdministrativeArea", "name": "Manhattan" }
  ]
}
```

### Blog Posts (add to each `blog/*.html`)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Post Title]",
  "datePublished": "[ISO Date]",
  "author": { "@type": "Organization", "name": "Little Fight NYC" },
  "publisher": { "@id": "https://littlefightnyc.com/#organization" }
}
```

### FAQ Page (add to new standalone FAQ)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text]",
      "acceptedAnswer": { "@type": "Answer", "text": "[Answer text]" }
    }
  ]
}
```

### Service Pages
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[Service Name]",
  "provider": { "@id": "https://littlefightnyc.com/#organization" },
  "areaServed": { "@type": "City", "name": "New York City" }
}
```

---

## 12. Error & Loading States

### 404 Page
- Match premium design system (midnight, glass nav, premium footer)
- Concierge Reveal on entry
- Helpful navigation: Home, Services, Contact suggestions
- Brand voice: calm, not clever ("This page took a wrong turn")
- Single primary CTA: "Go Home" or "Book a Consult"

### Form Errors
- Field-level: inline validation with `--color-fault` border and message
- Form-level: summary at top using `.vg-surface-utility` + fault status badge
- Success: inline confirmation, green status badge, Concierge Reveal 300ms

### Loading States
- Skeleton screens for dynamic content: `.vg-skeleton` class
- Match surface hierarchy (`.vg-surface-panel` background color)
- Subtle opacity pulse animation (2s loop, 0.4-0.7 opacity range)
- Respect `prefers-reduced-motion`: static skeleton, no pulse

---

## 13. Performance Budget

| Metric | Target | Method |
|--------|--------|--------|
| First Contentful Paint | <1.5s | Lighthouse |
| Largest Contentful Paint | <2.5s | Lighthouse |
| Cumulative Layout Shift | <0.1 | Lighthouse |
| Total JavaScript | <150KB gzipped | Bundle analysis |
| Total CSS | <50KB gzipped | Bundle analysis |
| Hero Image | <80KB | WebP optimized |
| Font Loading | <200ms | Preconnect + font-display: swap |
| Lighthouse Performance | 90+ | All pages |

---

## 14. Analytics & Conversion Tracking

The site already has GTM (`GTM-PGPGKMKC`) with consent mode. Ensure these events are tracked:

### Required Events
- CTA clicks: primary, secondary, tertiary (with label)
- Form submissions: success, validation error, abandonment
- Phone number clicks (click-to-call)
- Email clicks
- Scroll depth: 25%, 50%, 75%, 100%
- Blog article reads (reading rail completion)

### Privacy
- No PII sent to analytics
- Consent mode gates analytics_storage
- EU visitors default-denied until consent

---

## 15. Deployment & Rollback

### Pre-Deploy Checklist
- [ ] All internal links tested (no 404s)
- [ ] Forms tested (submission + validation + spam protection)
- [ ] Mobile tested (iOS Safari + Android Chrome)
- [ ] Browser tested (Chrome, Firefox, Safari, Edge)
- [ ] Lighthouse score 90+ verified on key pages
- [ ] Schema markup validated (Google Rich Results Test)
- [ ] Cookie consent tested (EU + US behavior)
- [ ] `prefers-reduced-motion` tested

### Rollback
- Netlify deploy previews enabled for all changes
- Previous deploy retained (Netlify default 30 days)
- Deploy from Netlify dashboard > Deploys > select previous build > "Publish deploy"

### Maintenance Guide
- Design system changes must be tested on BOTH React and static pages
- Blog posts: duplicate existing post HTML, update content and schema
- Case studies: update `/work/` with new project card structure
- Never edit production directly — use deploy previews first
- CSS version number in `?v=` query param on stylesheet links

---

## 16. Deliverables Checklist

### Design System & Foundation
- [ ] Shared design-system.css created and consumed by both codebases
- [ ] Shared motion.js created for static pages
- [ ] Cookie consent matches premium design system
- [ ] Form error/success states defined and implemented

### Pages — React App
- [ ] Homepage: All 6 sections refined per handover spec
- [ ] Services: Card system, outcome ladders, NYC badges
- [ ] About: Process thread, calm operator narrative
- [ ] Work: Proof counters, case study cards, performance badges
- [ ] Contact: Form polish, trust builders, error/success states

### Pages — Static HTML
- [ ] Privacy: Rebuilt to premium design system
- [ ] Terms: Rebuilt to premium design system
- [ ] Blog index: Card system, editorial polish, categories
- [ ] Blog posts (3): Reading rails, pullquotes, highlight sweep
- [ ] FAQ: Standalone page created with accordion breathing
- [ ] 404: Matches premium design system with helpful navigation
- [ ] Areas (7): Premium design system applied
- [ ] Industries/Solutions/SEO pages: Design system applied

### Global Quality
- [ ] Mobile touch targets >= 44px on all pages
- [ ] prefers-reduced-motion support verified
- [ ] AA color contrast verified
- [ ] Lighthouse Performance 90+ on all key pages
- [ ] Navigation consistent across all pages
- [ ] Footer credit on all pages per CLAUDE.md
- [ ] Schema markup validated on all page types
- [ ] Browser support matrix tested (Chrome, Firefox, Safari, Edge)
- [ ] Analytics events configured and firing
- [ ] Performance budget met

### Brand Integrity
- [ ] Motion: Only approved primitives, timing refined
- [ ] Orange = action only, midnight preserved, typography intact
- [ ] Deploy: Clean Netlify deploy, no broken links
- [ ] Deploy preview verified before production push

---

## 17. Execution Order

1. **Design system foundation** — Create `design-system.css` and `motion.js`
2. **Static page rebuilds** — Privacy, Terms (most visually broken)
3. **React homepage refinements** — Section by section
4. **React supporting pages** — Services, About, Work, Contact
5. **Blog refinements** — Index + 3 articles
6. **New pages** — FAQ standalone, 404 polish
7. **Remaining static pages** — Areas, Industries, Solutions, SEO landing pages
8. **Cookie consent & forms** — Verify/upgrade existing consent banner and form states
9. **Schema & SEO** — Add/verify structured data on all pages
10. **Global polish** — Mobile, a11y, performance budget, analytics events
11. **Browser testing** — Cross-browser verification per support matrix
12. **Build & deploy** — Compile React, verify hybrid, deploy preview, then production
