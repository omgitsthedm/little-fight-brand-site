# PAGE-STRUCTURES.md -- Little Fight NYC Site Blueprint

Generated: 2026-03-10
Source: `/Users/davidmarsh/Desktop/LiFi NYC/Brand/Website-Rebuild/`

This document maps the DOM structure, section order, component patterns, and
class naming conventions for every page type on the Little Fight NYC site. It is
intended as a construction reference so that a build agent can reproduce matching
layouts from data alone.

---

## Table of Contents

1. [Global Shell (shared across all pages)](#1-global-shell)
2. [Homepage -- index.html](#2-homepage)
3. [About -- about/index.html](#3-about)
4. [Services Hub -- services/index.html](#4-services-hub)
5. [Service Detail -- services/website-design-small-business-nyc/index.html](#5-service-detail)
6. [Areas Hub -- areas/index.html](#6-areas-hub)
7. [Work -- work/index.html](#7-work)
8. [Blog Hub -- blog/index.html](#8-blog-hub)
9. [Contact -- contact/index.html](#9-contact)
10. [Industries -- industries.html](#10-industries)
11. [Component Pattern Library](#11-component-pattern-library)
12. [CSS Class Naming Conventions](#12-css-class-naming-conventions)
13. [Stylesheet Stack](#13-stylesheet-stack)

---

## 1. Global Shell

Every page (except `areas/` which uses a legacy nav variant) shares these
structural elements.

### 1a. Head -- Meta & Stylesheets

```
<head>
  [consent-bootstrap script -- GTM consent defaults]
  [GTM container script -- GTM-PGPGKMKC]
  <meta charset="UTF-8">
  <meta name="viewport" ...>
  <title>{Page Title} | Little Fight NYC</title>
  <meta name="description" content="{page-specific}">
  <link rel="canonical" href="https://littlefightnyc.com/{path}/">
  [OG tags: og:type, og:title, og:description, og:url]
  [Twitter tags: twitter:card, twitter:title, twitter:description]
  [Favicons: favicon.ico, favicon-32x32.png, favicon-16x16.png, apple-touch-icon.png]
  <link rel="manifest" href="/site.webmanifest">
  <meta name="theme-color" content="#FF5A00">
  <link rel="stylesheet" href="/css/tokens.css">
  <link rel="stylesheet" href="/css/styles.css?v=20260307a">
  <link rel="stylesheet" href="/css/a11y-fixes.css?v=20260307a">
  <link rel="stylesheet" href="/css/services.css?v=20260307a">
  <link rel="stylesheet" href="/css/consent-banner.css?v=20260307a">
</head>
```

### 1b. Body Classes

| Page             | `<body>` classes                          |
|------------------|-------------------------------------------|
| Homepage         | (no class)                                |
| About            | `page-shell`                              |
| Services Hub     | `page-shell service-hub`                  |
| Service Detail   | `page-shell service-detail theme-{color}` |
| Areas Hub        | (no class -- legacy variant)              |
| Work             | `page-shell work-hub`                     |
| Blog Hub         | `page-shell blog-hub`                     |
| Contact          | `page-shell`                              |
| Industries       | `page-shell service-detail theme-ocean`   |

Theme modifier values seen: `theme-ember`, `theme-ocean`.

### 1c. Primary Nav (v3 -- used on all pages except areas)

```html
<nav role="navigation" aria-label="Main navigation">
  <div class="nav-container">
    <a href="/" class="nav-logo" aria-label="Little Fight NYC - Home">
      <div class="nav-logo-box" aria-hidden="true">LITTLE<br>FIGHT<br>NYC</div>
      <span class="nav-logo-text">Little Fight NYC</span>
    </a>

    <button class="nav-toggle" aria-label="Toggle navigation menu"
            aria-expanded="false" aria-controls="nav-links">
      <span></span><span></span><span></span>
    </button>

    <div class="nav-links" id="nav-links">
      <a href="/services/">Services</a>
      <a href="/#how-it-works">How It Works</a>
      <a href="/work/">Work</a>
      <a href="/#faq">FAQ</a>
      <a href="/#contact">Contact</a>
      <a href="https://audits.littlefightnyc.com" class="nav-cta-outline">Free Audit</a>
      <a href="/#contact" class="nav-cta">Get Help Today</a>
    </div>
  </div>
</nav>
```

DATA NEEDED: None -- static links.

### 1d. Footer (v3 -- shared by all pages except areas)

```html
<footer>
  <div class="container">
    <div class="footer-grid">                        <!-- 4-column grid -->
      <div>                                          <!-- Col 1: Brand -->
        <div class="footer-brand">
          <div class="footer-logo-box">LITTLE<br>FIGHT<br>NYC</div>
          <span>{brand name}</span>
        </div>
        <p class="footer-text">{tagline paragraph}</p>
      </div>
      <div>                                          <!-- Col 2: Services -->
        <h2 class="footer-heading">Services</h2>
        <div class="footer-links">
          <a href="/services/website-design-small-business-nyc/">Website Design</a>
          <a href="/services/on-site-it-support-nyc/">On-Site IT Support</a>
          <a href="/services/local-seo-and-google-ads-nyc/">Local SEO & Ads</a>
          <a href="/services/pos-and-register-setup-nyc/">POS Setup</a>
          <a href="/services/smart-home-services-nyc/">Smart Systems</a>
        </div>
      </div>
      <div>                                          <!-- Col 3: Company -->
        <h2 class="footer-heading">Company</h2>
        <div class="footer-links">
          <a href="/">Home</a>
          <a href="/solutions/">Solutions</a>
          <a href="/work/">Work</a>
          <a href="/about/">About</a>
          <a href="/blog/">Blog</a>
          <a href="/industries.html">Industries</a>
          <a href="/contact/">Contact</a>
        </div>
      </div>
      <div>                                          <!-- Col 4: Contact -->
        <h2 class="footer-heading">Get In Touch</h2>
        <div class="footer-links">
          <a href="mailto:hello@littlefightnyc.com">hello@littlefightnyc.com</a>
          <a href="tel:+16463600318">646-360-0318</a>
          <a href="/contact/">Manhattan, NYC</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="footer-copyright">&copy; 2026 Little Fight NYC. Built in New York with guts & grit.</p>
      <div class="footer-legal">
        <a href="/privacy.html">Privacy Policy</a>
        <a href="/terms.html">Terms of Service</a>
      </div>
    </div>

    <div class="footer-credit">
      <a href="https://littlefightnyc.com" target="_blank" rel="noopener">
        Designed, Hosted and Cared For by LittleFightNYC.com
      </a>
    </div>
  </div>
</footer>
```

### 1e. Bottom Scripts & Schema

```html
<script type="application/ld+json">{LocalBusiness schema -- present on every page}</script>
<script src="/js/main.js?v=20260307a" defer></script>
<script src="/js/consent-banner.js" defer></script>
```

---

## 2. Homepage

**File:** `index.html`
**Body class:** none
**Unique:** Homepage has its own critical CSS inlined in `<style>` in `<head>`.
It does NOT use `page-shell` class. It also preloads fonts inline.

### Section Order

```
<body>
  [GTM noscript]
  nav (primary v3)

  <main id="main-content">
    1. section.hero                          -- dark bg, 2-col grid hero
    2. section.proof-strip.section-shell     -- 3-pill trust strip
    3. section#services.section-shell-soft   -- 6-card service grid
    4. section#how-it-works.premium-difference.section-shell-soft -- before/after/outcome
    5. section#about.cta-section.section-shell   -- "Why Us" short CTA
    6. section#areas.section-shell-soft      -- Manhattan on-site + nationwide remote
    7. section#faq.section-shell             -- accordion FAQ (5 items)
    8. section#contact.section-shell-soft    -- contact form + info cards
  </main>

  footer (v3)
  [LocalBusiness JSON-LD]
  [FAQPage JSON-LD]
```

### Section Details

#### 2.1 Hero (`section.hero`)

```html
<section class="hero">
  <div class="hero-shape hero-shape-1"></div>    <!-- decorative bg shapes -->
  <div class="hero-shape hero-shape-2"></div>
  <div class="hero-container">                   <!-- 2-col: 1fr 1.2fr -->
    <div class="hero-content">
      <div class="hero-badge">
        <span class="hero-badge-dot"></span>
        {badge text}
      </div>
      <h1 class="hero-title">{title with <span class="highlight">}</h1>
      <p class="hero-subtitle">{subtitle}</p>
      <div class="hero-buttons">
        <a class="btn btn-primary">{primary CTA}</a>
        <a class="btn btn-secondary">{secondary CTA}</a>
      </div>
      <p class="hero-note">{note text}</p>
    </div>
    <div class="hero-visual">
      <div class="illustration" id="streetStage">
        [CSS-only animated NYC street scene with 5 buildings]
        [city-buildings-row > city-building * 5]
        [city-sidewalk]
        [replay button]
      </div>
    </div>
  </div>
</section>
```

DATA NEEDED: badge text, h1 title, highlight word(s), subtitle, primary CTA label+href, secondary CTA label+href, note text.

#### 2.2 Proof Strip (`section.proof-strip`)

```html
<section class="proof-strip section-shell">
  <div class="container">
    <p class="proof-strip-label">{label text}</p>
    <h2 class="sr-only">{screen-reader heading}</h2>
    <div class="proof-pill-grid">               <!-- 3-column grid -->
      <article class="proof-pill">
        <h3>{title}</h3>
        <p>{description}</p>
      </article>
      <!-- repeat x3 -->
    </div>
    <p class="proof-strip-links">
      See it in action: <a href="/work/">Case studies</a> ...
    </p>
  </div>
</section>
```

DATA NEEDED per pill: title, description. Also: label text, link list.

#### 2.3 Services Grid (`section#services`)

```html
<section id="services" class="section-shell section-shell-soft">
  <div class="container">
    <div class="section-header">
      <p class="section-eyebrow">{eyebrow}</p>
      <h2 class="section-title">{title}</h2>
      <p class="section-description">{description}</p>
    </div>
    <div class="services-grid">                  <!-- auto-fit grid -->
      <div class="service-card">
        <div class="service-icon">
          <i class="mdi mdi-{icon}" aria-hidden="true"></i>
        </div>
        <h3 class="service-title"><a href="{url}">{name}</a></h3>
        <p class="service-description">{description}</p>
      </div>
      <!-- repeat x6 -->
    </div>
    <p><a href="/services/" class="btn btn-secondary">View All Services</a></p>
  </div>
</section>
```

DATA NEEDED per card: MDI icon name, service title, service URL, description.

#### 2.4 Premium Difference (`section#how-it-works.premium-difference`)

```html
<section id="how-it-works" class="premium-difference section-shell section-shell-soft">
  <div class="container premium-difference-grid">  <!-- 2-col: copy + list -->
    <div class="premium-difference-copy">
      <p class="section-eyebrow">{eyebrow}</p>
      <h2 class="section-title">{title}</h2>
      <p class="section-description">{description}</p>
      <div class="premium-difference-links">
        <a href="{url}">{link text}</a>
        <!-- repeat -->
      </div>
    </div>
    <div class="premium-difference-list">
      <article class="premium-point">
        <h3>{label}</h3>
        <p>{text}</p>
      </article>
      <!-- repeat x3: Before / After / Outcome -->
    </div>
  </div>
</section>
```

#### 2.5 CTA Section (`section#about.cta-section`)

```html
<section id="about" class="cta-section section-shell">
  <div class="container">
    <div class="section-header">
      <p class="section-eyebrow">{eyebrow}</p>
      <h2 class="section-title">{title}</h2>
      <p class="section-description">{description}</p>
    </div>
  </div>
</section>
```

#### 2.6 Service Areas (`section#areas`)

Two inline-styled card boxes: Manhattan on-site (with area links) and Nationwide remote.

#### 2.7 FAQ (`section#faq`)

Uses the standard FAQ accordion component (see Component Library below).

#### 2.8 Contact (`section#contact`)

Uses `contact-grid` with info items + Netlify form (see Component Library below).

---

## 3. About

**File:** `about/index.html`
**Body class:** `page-shell`

### Section Order

```
nav (v3)
<main id="main-content">
  1. section.page-hero           -- breadcrumbs + eyebrow + h1 + description
  2. section.page-content        -- content-block articles + final-cta
</main>
footer (v3)
```

### Section Details

#### 3.1 Page Hero (standard subpage hero)

```html
<section class="page-hero">
  <div class="container">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a><span>/</span><span>About</span>
    </nav>
    <p class="section-eyebrow">ABOUT</p>
    <h1 class="section-title">{title}</h1>
    <p class="section-description">{description}</p>
  </div>
</section>
```

#### 3.2 Page Content

```html
<section class="page-content">
  <div class="container">
    <article class="content-block">
      <h2>{heading}</h2>
      <p>{paragraph(s)}</p>
    </article>
    <article class="content-block">
      <h2>{heading}</h2>
      <ul><li>{item}</li>...</ul>
    </article>
    <article class="final-cta">
      <h2>{CTA heading}</h2>
      <p>{CTA text}</p>
      <div class="hero-actions">
        <a href="{url}" class="btn btn-primary">{label}</a>
        <a href="{url}" class="btn btn-secondary">{label}</a>
      </div>
    </article>
  </div>
</section>
```

DATA NEEDED: Multiple content-block articles with h2 + body text/lists. Final CTA with heading, text, 2 buttons.

---

## 4. Services Hub

**File:** `services/index.html`
**Body class:** `page-shell service-hub`

### Section Order

```
nav (v3)
<main id="main-content">
  1. section.page-hero                  -- back-links + eyebrow + h1 + desc + hero-actions
  2. section.services-signal-band       -- 3-card signal strip
  3. section.page-content
     3a. article.content-block.visual-strip-block   -- stats-image-grid (9 photo cards)
     3b. section.hub-cluster "Websites & Growth"    -- service-link-grid (5 cards)
     3c. section.hub-cluster "Business Tech & IT"   -- service-link-grid (5 cards)
     3d. section.hub-cluster "Smart Systems"        -- service-link-grid (2 cards)
     3e. article.content-block.premium-process-block -- 3-step process grid
     3f. article.final-cta                          -- CTA with 2 buttons
</main>
footer (v3)
```

### Key Components

#### 4.1 Services Signal Band

```html
<section class="services-signal-band">
  <div class="container services-signal-grid">      <!-- 3-col -->
    <article class="services-signal-card">
      <p class="services-signal-kicker">Signal 01</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
    <!-- x3 -->
  </div>
</section>
```

#### 4.2 Stats Image Grid

```html
<div class="stats-image-grid" id="stats-grid">
  <figure class="stats-image-card">
    <img src="{src}" alt="{alt}" loading="lazy" decoding="async" width="1600" height="1000">
    <span class="stats-image-kicker">{topic label}</span>
    <div class="stats-image-overlay">
      <span class="stats-image-number">{stat number}</span>
      <span class="stats-image-label">{stat description}</span>
    </div>
  </figure>
  <!-- repeat x9 -->
</div>
```

DATA NEEDED per card: image src+alt, kicker text, stat number, stat label.

#### 4.3 Hub Cluster with Service Link Cards

```html
<section class="hub-cluster">
  <h2>{cluster name}</h2>
  <div class="service-link-grid">
    <a class="service-link-card" data-service="{slug}" href="{url}">
      <div class="service-link-icon" aria-hidden="true">
        <svg class="lf-micro-icon icon-{slug}" viewBox="0 0 64 64" role="img">
          {custom SVG paths -- unique per service}
        </svg>
      </div>
      <h3>{service name}</h3>
      <p>{short description}</p>
    </a>
    <!-- repeat per service -->
  </div>
</section>
```

DATA NEEDED per card: slug, URL, inline SVG icon, title, description.

#### 4.4 Premium Process Grid

```html
<article class="content-block premium-process-block">
  <h2>{heading}</h2>
  <p>{intro text}</p>
  <div class="premium-process-grid">             <!-- 3-col -->
    <article class="premium-process-step">
      <p class="premium-process-label">Phase 1</p>
      <h3>{step title}</h3>
      <p>{step text}</p>
    </article>
    <!-- x3 -->
  </div>
</article>
```

---

## 5. Service Detail

**File:** `services/website-design-small-business-nyc/index.html`
**Body class:** `page-shell service-detail theme-ember`

This is the template for all individual service pages.

### Section Order

```
nav (v3)
<main id="main-content">
  1. section.page-hero
     - back-links (Home + All Services)
     - section-eyebrow "SERVICE"
     - service-wayfinder (MDI icon + label)
     - h1.section-title
     - p.section-description
     - hero-actions (2 buttons)
     - p.hero-note

  2. section.page-content
     <div class="container">
       2a. article.content-block#who-this-is-for  -- h2 + ul + p
       2b. article.content-block#what-we-do       -- h2 + h3/p pairs (5 sub-services)
       2c. article.content-block#real-examples     -- h2 + h3/p pairs (3 case briefs)
       2d. article.content-block#industry-examples -- h2 + industry-example-grid (3 cards)
       2e. article.content-block#how-it-works      -- h2 + ol.steps-list (4 steps)
       2f. article.content-block#faqs              -- h2 + faq-list (6 FAQ items)
       2g. article.content-block#related-services  -- h2 + related-grid (4 link cards)
       2h. article.final-cta#final-cta             -- h2 + p + hero-actions
     </div>

  3. section.accent-photo-band.section-shell  -- single full-width accent photo
</main>
footer (v3)
[LocalBusiness JSON-LD]
[Service JSON-LD]
[FAQPage JSON-LD]
```

### Key Components

#### 5.1 Service Wayfinder

```html
<div class="service-wayfinder">
  <i class="mdi mdi-{icon}" aria-hidden="true"></i>
  <span>{service category label}</span>
</div>
```

#### 5.2 Industry Example Grid

```html
<div class="industry-example-grid">
  <article class="industry-example-card">
    <p class="example-kicker">{industry name}</p>
    <h3>{short title}</h3>
    <p>{description}</p>
    <div class="example-links">
      <a href="{url}">{link text}</a>
      <a href="{url}">{link text}</a>
    </div>
  </article>
  <!-- x3 -->
</div>
```

#### 5.3 Steps List

```html
<ol class="steps-list">
  <li>{step text}</li>
  <!-- x4 -->
</ol>
```

#### 5.4 Related Services Grid

```html
<div class="related-grid">
  <a class="related-card" href="{url}">{service name}</a>
  <!-- x4 -->
</div>
```

#### 5.5 Accent Photo Band

```html
<section class="accent-photo-band section-shell">
  <div class="container">
    <figure class="accent-photo-card">
      <img src="{src}" alt="{alt}" loading="lazy" decoding="async" width="1600" height="1000">
    </figure>
  </div>
</section>
```

#### 5.6 Back Links (service pages)

```html
<p class="back-links">
  <a href="/">&#8592; Home</a>
  <span>&bull;</span>
  <a href="/services/">All Services</a>
</p>
```

---

## 6. Areas Hub

**File:** `areas/index.html`
**Body class:** none (legacy page)

**NOTE:** This page uses a DIFFERENT nav structure (BEM-style `nav__` classes)
and a different footer structure (`footer__` classes). It pre-dates the v3
rebuild.

### Section Order

```
<a href="#main" class="skip-link">Skip to main content</a>

nav.nav (legacy BEM variant)
  nav__inner > nav__logo + nav__links + nav__ctas + nav__mobile-trigger

div#mobile-menu.nav__mobile-overlay

<main id="main">
  1. section.page-hero              -- page-hero__eyebrow + title + desc
  2. section.section > .areas-grid  -- 7 area cards
  3. section.cta-band               -- "Don't see your neighborhood?" CTA
</main>

footer.footer (legacy BEM variant)
```

### Key Components

#### 6.1 Legacy Nav (BEM)

```html
<nav class="nav" role="navigation" aria-label="Main navigation">
  <div class="nav__inner">
    <a href="../" class="nav__logo" aria-label="Little Fight NYC - Home">
      <div class="nav__logo-mark"><svg ...></svg></div>
      <span class="nav__logo-text">Little Fight NYC</span>
    </a>
    <div class="nav__links">
      <a href="../#services" class="nav__link">Services</a>
      ...
    </div>
    <div class="nav__ctas">
      <a class="btn btn--secondary">Free Website Audit</a>
      <a class="btn btn--primary">Get Help Today</a>
    </div>
    <button class="nav__mobile-trigger" ...></button>
  </div>
</nav>
```

#### 6.2 Area Card (legacy `service-card`)

```html
<a href="{area-slug}.html" class="service-card reveal">
  <svg class="service-card__icon" viewBox="0 0 24 24" aria-hidden="true">
    {location pin SVG}
  </svg>
  <h3 class="service-card__title">{area name}</h3>
  <p class="service-card__desc">{description}</p>
  <span class="service-card__link">
    Learn more <svg ...>{arrow}</svg>
  </span>
</a>
```

DATA NEEDED per card: slug for href, area name, description.

#### 6.3 CTA Band

```html
<section class="cta-band">
  <div class="container">
    <h2 class="cta-band__title">{heading}</h2>
    <p class="cta-band__desc">{text}</p>
    <a class="btn btn--primary btn--lg btn--on-dark" data-cta="areas-contact">{CTA label}</a>
  </div>
</section>
```

---

## 7. Work

**File:** `work/index.html`
**Body class:** `page-shell work-hub`

### Section Order

```
<div class="ambient-dots" aria-hidden="true" id="ambient-dots"></div>
nav (v3)
<main id="main-content">
  1. section.page-hero              -- breadcrumbs + eyebrow + h1 + desc
  2. section.work-metrics-band      -- 3-card metric strip
  3. section.page-content.section-shell.section-shell-soft
     3a. div.services-grid          -- 3 case study cards (image + text)
     3b. article.content-block.building-viewer-block  -- 3D building viewer
     3c. article.content-block.work-process-block     -- 3-step process
     3d. article.final-cta          -- CTA with 2 buttons
</main>
footer (v3)
```

### Key Components

#### 7.1 Work Metrics Band

```html
<section class="work-metrics-band">
  <div class="container work-metric-grid">          <!-- 3-col -->
    <article class="work-metric-card">
      <p class="work-metric-kicker">{kicker}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
    <!-- x3 -->
  </div>
</section>
```

#### 7.2 Case Study Card (in services-grid)

```html
<article class="service-card">
  <figure class="service-case-media">
    <img src="{src}" alt="{alt}" loading="lazy" decoding="async" width="1600" height="1000">
  </figure>
  <h3 class="service-title">{case study title}</h3>
  <p class="service-description">{description}</p>
  <p><a href="{service-url}">Learn about our {service} &rarr;</a></p>
</article>
```

DATA NEEDED: image src+alt, case study title, description, related service link.

#### 7.3 Building Viewer Block (3D interactive)

```html
<article class="content-block building-viewer-block">
  <div class="building-viewer-header">
    <p class="work-metric-kicker">{kicker}</p>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
  <div class="building-viewer-wrap" id="building-viewer" role="img" aria-label="{label}">
    <canvas id="building-canvas"></canvas>
    <div class="building-viewer-fallback" id="building-fallback">Loading...</div>
    <div class="building-viewer-hint">{interaction hints}</div>
  </div>
  <div class="building-viewer-meta">
    <div class="building-viewer-tags">
      <span class="building-tag">{tag}</span> <!-- x4 -->
    </div>
    <p class="building-viewer-cta">
      <a href="/contact/">{CTA text} <span>&rarr;</span></a>
    </p>
  </div>
</article>
```

#### 7.4 Work Process Grid

```html
<article class="content-block work-process-block">
  <h2>{heading}</h2>
  <p>{intro}</p>
  <div class="work-process-grid">                  <!-- 3-col -->
    <article class="work-process-step">
      <p class="work-process-label">Step 1</p>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
    <!-- x3 -->
  </div>
</article>
```

---

## 8. Blog Hub

**File:** `blog/index.html`
**Body class:** `page-shell blog-hub`

### Section Order

```
nav (v3)
<main id="main-content">
  1. section.page-hero.section-shell        -- back-links + eyebrow + h1 + desc + hero-actions
  2. section.blog-signal-band               -- 3-card signal strip
  3. section.page-content.section-shell.section-shell-soft.blog-hub-section
     3a. div.insight-grid                   -- 6 insight cards
     3b. article.final-cta                  -- CTA with 2 buttons
</main>
footer (v3)
[CollectionPage JSON-LD]
```

### Key Components

#### 8.1 Blog Signal Band

```html
<section class="blog-signal-band">
  <div class="container blog-signal-grid">
    <article class="blog-signal-card">
      <p class="blog-signal-kicker">Focus 01</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
    <!-- x3 -->
  </div>
</section>
```

#### 8.2 Insight Card (Blog Article Card)

```html
<article class="insight-card">
  <a class="insight-visual insight-visual-{n}" href="{post-url}" aria-label="Read {title}">
    <i class="mdi mdi-{icon} insight-icon" aria-hidden="true"></i>
    <span class="insight-callout">{callout label}</span>
  </a>
  <div class="insight-content">
    <div class="insight-meta-row">
      <span class="insight-chip">{category}</span>
      <span class="insight-meta">{date} &middot; {read time}</span>
    </div>
    <h2 class="insight-title">
      <a href="{post-url}">{title}</a>
    </h2>
    <p class="insight-description">{excerpt}</p>
  </div>
</article>
```

DATA NEEDED per card: post URL, MDI icon, callout label, category chip, date, read time, title, excerpt. The `insight-visual-{n}` class (1-6) applies unique gradient/color backgrounds via CSS.

---

## 9. Contact

**File:** `contact/index.html`
**Body class:** `page-shell`

### Section Order

```
nav (v3)
<main id="main-content">
  1. section.page-hero      -- breadcrumbs + eyebrow + h1 + desc
  2. section.page-content   -- contact-grid (info items + form)
</main>
footer (v3)
```

### Key Components

#### 9.1 Contact Grid

```html
<section class="page-content">
  <div class="container">
    <div class="contact-grid">                    <!-- 2-col: info | form -->
      <div>
        <!-- Contact Info Items -->
        <a href="mailto:{email}" class="contact-info-item">
          <div class="contact-icon"><i class="mdi mdi-email-outline"></i></div>
          <div>
            <div>{label}</div>
            <div>{value}</div>
          </div>
        </a>
        <a href="tel:{phone}" class="contact-info-item">
          <div class="contact-icon"><i class="mdi mdi-phone-outline"></i></div>
          <div>
            <div>{label}</div>
            <div>{value}</div>
          </div>
        </a>
        <div class="contact-info-item">
          <div class="contact-icon"><i class="mdi mdi-map-marker"></i></div>
          <div>
            <div>{label}</div>
            <div>{value}</div>
          </div>
        </div>
      </div>

      <div class="form-container">
        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact">
          <p class="hidden">[honeypot field]</p>
          <div class="form-row">
            <div>
              <label class="form-label" for="contact-name">Your Name</label>
              <input type="text" name="name" id="contact-name" class="form-input" required>
            </div>
            <div>
              <label class="form-label" for="contact-email">Email</label>
              <input type="email" name="email" id="contact-email" class="form-input" required>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label" for="contact-message">What do you need help with?</label>
            <textarea name="message" id="contact-message" class="form-textarea" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">{submit text}</button>
        </form>
      </div>
    </div>
  </div>
</section>
```

DATA NEEDED: email, phone, location, form field labels, submit button text.

---

## 10. Industries

**File:** `industries.html`
**Body class:** `page-shell service-detail theme-ocean`

### Section Order

```
nav (v3)
<main id="main-content">
  1. section.page-hero
     - back-links (Home + Solutions Story)
     - section-eyebrow "INDUSTRIES"
     - service-wayfinder (MDI icon + label)
     - h1 + description
     - hero-actions

  2. section.industries-nyc-sequence      -- scroll-driven image sequence (pill-to-fullscreen)
     - industries-nyc-sequence__sticky
       - industries-nyc-sequence__bg
       - industries-nyc-sequence__pill
         - industries-nyc-sequence__media
           - industries-nyc-sequence__frame (x16 images)

  3. section.page-content
     3a. article.content-block#industry-index     -- jump-link grid (10 cards)
     3b. article.content-block#industry-map       -- 10 industry map cards
     3c. article.content-block                    -- "Need the narrative?" with story-links
</main>
footer (v3)
[inline JS for scroll-driven animation]
```

### Key Components

#### 10.1 Industry Index Card

```html
<div class="industry-index-grid">
  <a class="industry-index-card" href="#industry-{slug}">
    {industry name}
    <span>{tagline}</span>
  </a>
  <!-- x10 -->
</div>
```

#### 10.2 Industry Map Card

```html
<article class="industry-map-card" id="industry-{slug}">
  <h3>{industry name}</h3>
  <p>{description}</p>
  <div class="stack-list">
    <a href="{service-url}">{service name}</a>
    <!-- x3 service links -->
  </div>
  <p class="industry-map-meta">Story angle: {angle text}</p>
</article>
```

DATA NEEDED per card: slug, name, description, 3 service links, story angle text.

#### 10.3 NYC Scroll Sequence

This is a scroll-driven animation that expands a pill-shaped photo viewport to
full screen while cycling through 16 NYC photos. It uses inline `<style>` and
inline `<script>` with requestAnimationFrame-based scroll tracking.

Image sources: `/images/lf-photo-set/nyc-scroll/{filename}.webp` (16 images).

---

## 11. Component Pattern Library

### 11.1 Section Header (reusable)

```html
<div class="section-header">
  <p class="section-eyebrow">{UPPERCASE LABEL}</p>
  <h2 class="section-title">{Title}</h2>
  <p class="section-description">{Description}</p>
</div>
```

### 11.2 Page Hero (subpage variant)

Two variants exist:

**Variant A -- Breadcrumb style** (About, Contact, Work):
```html
<section class="page-hero">
  <div class="container">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a><span>/</span><span>{page}</span>
    </nav>
    <p class="section-eyebrow">{LABEL}</p>
    <h1 class="section-title">{title}</h1>
    <p class="section-description">{description}</p>
  </div>
</section>
```

**Variant B -- Back-links style** (Services Hub, Blog, Service Detail, Industries):
```html
<section class="page-hero">
  <div class="container">
    <p class="back-links">
      <a href="/">&#8592; Home</a>
      [optional: <span>&bull;</span><a href="{parent}">{parent label}</a>]
    </p>
    <p class="section-eyebrow">{LABEL}</p>
    [optional: <div class="service-wayfinder">...]
    <h1 class="section-title">{title}</h1>
    <p class="section-description">{description}</p>
    <div class="hero-actions">
      <a class="btn btn-primary">{CTA}</a>
      <a class="btn btn-secondary">{CTA}</a>
    </div>
    [optional: <p class="hero-note">{note}</p>]
  </div>
</section>
```

### 11.3 Final CTA Block

```html
<article class="final-cta">
  <h2>{heading}</h2>
  <p>{text}</p>
  <div class="hero-actions">
    <a href="{url}" class="btn btn-primary">{label}</a>
    <a href="{url}" class="btn btn-secondary">{label}</a>
  </div>
</article>
```

### 11.4 FAQ Accordion

```html
<div class="faq-list">
  <div class="faq-item">
    <button class="faq-question" aria-expanded="false">
      {question text}
      <span class="faq-icon" aria-hidden="true">
        <i class="mdi mdi-chevron-down"></i>
      </span>
    </button>
    <div class="faq-answer">
      <div class="faq-answer-content">{answer text}</div>
    </div>
  </div>
  <!-- repeat -->
</div>
```

### 11.5 Signal/Metric Band (3-card strip)

Multiple variants share the same pattern:

| Context         | Section class            | Card class              | Kicker class              |
|-----------------|--------------------------|-------------------------|---------------------------|
| Services Hub    | `services-signal-band`   | `services-signal-card`  | `services-signal-kicker`  |
| Work            | `work-metrics-band`      | `work-metric-card`      | `work-metric-kicker`      |
| Blog Hub        | `blog-signal-band`       | `blog-signal-card`      | `blog-signal-kicker`      |

Structure is always:
```html
<section class="{band-class}">
  <div class="container {grid-class}">
    <article class="{card-class}">
      <p class="{kicker-class}">{kicker text}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
    <!-- x3 -->
  </div>
</section>
```

### 11.6 Buttons

```
.btn                   -- base button (pill-shaped, 16px 32px padding)
.btn-primary           -- orange bg (#FE5900), white text
.btn-secondary         -- transparent bg, border, dark/light text depending on context
.nav-cta               -- nav primary CTA (smaller padding)
.nav-cta-outline       -- nav outline CTA
```

Legacy area page uses BEM buttons: `.btn--primary`, `.btn--secondary`, `.btn--lg`, `.btn--on-dark`, `.btn--full`.

### 11.7 Content Block

```html
<article class="content-block" id="{optional-id}">
  <h2>{heading}</h2>
  <p>{text}</p>
  [optional: <ul>, <ol>, nested <h3>/<p> pairs, grids]
</article>
```

---

## 12. CSS Class Naming Conventions

### Primary System (v3 pages)

- **Layout wrappers:** `.container`, `.section-shell`, `.section-shell-soft`
- **Page types:** `.page-shell`, `.service-hub`, `.work-hub`, `.blog-hub`, `.service-detail`
- **Theme modifiers:** `.theme-ember`, `.theme-ocean`
- **Sections:** Flat class names: `.page-hero`, `.page-content`, `.proof-strip`, `.premium-difference`
- **Components:** Hyphenated flat: `.service-card`, `.insight-card`, `.faq-item`, `.contact-grid`
- **Sub-elements:** Hyphenated compound: `.section-eyebrow`, `.section-title`, `.section-description`, `.hero-actions`, `.hero-note`
- **Typography helpers:** `.section-eyebrow` (uppercase kicker), `.section-title`, `.section-description`
- **Navigation:** `.nav-container`, `.nav-logo`, `.nav-logo-box`, `.nav-logo-text`, `.nav-links`, `.nav-toggle`, `.nav-cta`, `.nav-cta-outline`
- **Footer:** `.footer-grid`, `.footer-brand`, `.footer-logo-box`, `.footer-heading`, `.footer-links`, `.footer-text`, `.footer-bottom`, `.footer-copyright`, `.footer-legal`, `.footer-credit`

### Legacy System (areas page)

- **BEM notation:** `.nav__inner`, `.nav__logo`, `.nav__logo-mark`, `.nav__logo-text`, `.nav__links`, `.nav__link`, `.nav__ctas`, `.nav__mobile-trigger`
- **BEM footer:** `.footer__grid`, `.footer__brand`, `.footer__heading`, `.footer__links`, `.footer__link`, `.footer__bottom`, `.footer__legal`, `.footer__credit`, `.footer__tagline`
- **BEM components:** `.service-card__icon`, `.service-card__title`, `.service-card__desc`, `.service-card__link`
- **BEM buttons:** `.btn--primary`, `.btn--secondary`, `.btn--lg`, `.btn--on-dark`, `.btn--full`
- **BEM hero:** `.page-hero__eyebrow`, `.page-hero__title`, `.page-hero__desc`

### General Rules

1. No BEM on v3 pages -- flat hyphenated names only
2. Suffix `-grid` for grid containers: `services-grid`, `contact-grid`, `insight-grid`, `related-grid`, `industry-map-grid`
3. Suffix `-card` for card components: `service-card`, `insight-card`, `industry-map-card`, `related-card`
4. Suffix `-band` for full-width strip sections: `services-signal-band`, `work-metrics-band`, `blog-signal-band`, `accent-photo-band`, `cta-band`
5. Suffix `-block` for content articles with special styling: `visual-strip-block`, `premium-process-block`, `work-process-block`, `building-viewer-block`
6. Icon classes: `lf-micro-icon icon-{service-slug}` for service hub SVGs, `mdi mdi-{name}` for Material Design Icons

---

## 13. Stylesheet Stack

All v3 pages load these in order:

| File                        | Purpose                                      |
|-----------------------------|----------------------------------------------|
| `/css/tokens.css`           | Design tokens / CSS custom properties         |
| `/css/styles.css`           | Core layout, typography, component styles     |
| `/css/a11y-fixes.css`       | Accessibility fixes and overrides             |
| `/css/services.css`         | Service-specific components and page layouts  |
| `/css/consent-banner.css`   | Cookie consent banner                         |

The homepage additionally inlines critical CSS in `<style>` for the hero,
nav, buttons, and responsive breakpoints.

Some pages have additional inline `<style>` blocks for page-specific
components (e.g., `work/index.html` for the 3D building viewer,
`industries.html` for the scroll sequence animation).

---

## Quick Reference: Page-to-Section Map

| Page            | Hero Type    | Signal Band | Content Sections         | Special Features            |
|-----------------|--------------|-------------|---------------------------|-----------------------------|
| Homepage        | Dark 2-col   | proof-strip | services, premium-diff, about, areas, faq, contact | CSS city illustration |
| About           | Breadcrumb   | --          | content-blocks, final-cta | Minimal                     |
| Services Hub    | Back-links   | signal-band | stats-images, hub-clusters, process, final-cta | SVG micro-icons        |
| Service Detail  | Back-links+wayfinder | -- | who/what/examples/industry/how/faq/related, final-cta, accent-photo | FAQPage schema |
| Areas Hub       | Legacy       | --          | areas-grid, cta-band      | Legacy BEM nav/footer       |
| Work            | Breadcrumb   | metrics-band| case studies, 3D viewer, process, final-cta | Three.js 3D building  |
| Blog Hub        | Back-links   | signal-band | insight-grid, final-cta   | Gradient visual cards       |
| Contact         | Breadcrumb   | --          | contact-grid (info+form)  | Netlify form                |
| Industries      | Back-links+wayfinder | -- | index-grid, map-grid, story-links | Scroll image sequence  |
