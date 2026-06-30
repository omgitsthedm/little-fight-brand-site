# Little Fight NYC — Complete Handoff Package

**For:** Kimi 2.5k Agent (combining with Kimi_Agent_Deployment_v6)
**Date:** 2026-03-10
**Source:** Consolidated from 11 versions of littlefightnyc.com

---

## Quick Start

This `handoff/` folder contains ALL content, assets, animations, and structure docs
from the definitive Little Fight NYC website. Use it to enhance the Kimi build.

---

## Folder Structure

```
handoff/
├── HANDOFF-README.md          ← You are here
│
├── copy/
│   └── ALL-SITE-COPY.md       ← Every word of text from every page (51KB)
│                                 Organized by page, then section, with CSS class refs
│
├── structure/
│   └── PAGE-STRUCTURES.md     ← HTML structure blueprint for all 9 page types
│                                 Section order, class names, component patterns
│
├── css/
│   ├── tokens.css             ← Design system tokens (colors, spacing, type, motion)
│   ├── styles.css             ← Main stylesheet (2,889 lines, all animations)
│   ├── styles.min.css         ← Minified version
│   ├── services.css           ← Service detail page styles (1,764 lines)
│   ├── a11y-fixes.css         ← Accessibility enhancements
│   ├── a11y-fixes.min.css     ← Minified version
│   ├── consent-banner.css     ← Cookie consent styles
│   ├── mdi-subset.css         ← MDI icon subset classes
│   └── materialdesignicons.min.css ← Full MDI classes
│
├── animations/
│   ├── core-js/
│   │   ├── main.js            ← All interactions (554 lines):
│   │   │                        - Ambient pulsating dots (lines 180-205)
│   │   │                        - Hero spotlight drift (lines 207-265)
│   │   │                        - Image tilt on hover (lines 267-395)
│   │   │                        - Scroll-based reveals (lines 398-428)
│   │   │                        - Stats counter animation (lines 485-553) ← "bar graph"
│   │   │                        - Scroll progress bar (lines 148-177)
│   │   │                        - Back-to-top button (lines 452-483)
│   │   │                        - FAQ accordion (lines 77-111)
│   │   │                        - Nav scroll state (lines 53-75)
│   │   └── city-growth.js     ← Signature NYC city growth animation (92 lines)
│   │
│   ├── pill-scroll-demo/      ← GSAP scroll-driven pill expansion
│   │   ├── index.html         ← Self-contained demo (open in browser)
│   │   ├── assets/            ← 16 curated NYC WebP images
│   │   └── vendor/            ← GSAP + ScrollTrigger
│   │
│   └── archived/
│       ├── page-loader.html        ← "Getting ready to help..." full-screen loader
│       ├── money-splash.html       ← "$" particle burst on city growth floors
│       ├── micro-demo-services.html ← 11 pure-CSS service card animations
│       ├── overhaul-reference.html  ← Proof strip + premium difference sections
│       └── city-growth-fast.js      ← 2.4x faster city growth timing variant
│
├── icons/
│   ├── ICON-REFERENCE.md      ← Complete icon inventory (30 icons, by page)
│   ├── fonts/                 ← MDI webfont files (subset + full)
│   │   ├── mdi-subset.woff2   ← Production subset (3.4KB, just the 30 used icons)
│   │   ├── mdi-subset.woff
│   │   ├── mdi-subset.css
│   │   ├── materialdesignicons-webfont.woff2 ← Full library (403KB, 7,447 icons)
│   │   ├── materialdesignicons-webfont.woff
│   │   └── materialdesignicons.min.css
│   └── svg/                   ← Individual SVG files for each icon used
│       ├── bread-slice.svg
│       ├── coffee.svg
│       ├── compass-outline.svg
│       └── ... (30 total)
│
├── images/                    ← All 130 site images
│   ├── lf-photo-set/          ← 50+ curated NYC/business WebP photos
│   │   ├── nyc-scroll/        ← Scroll sequence frames
│   │   └── *.webp             ← Optimized photos
│   ├── blog/                  ← Blog feature images
│   ├── brand-logo-mark.svg    ← Logo SVG
│   ├── *.webp                 ← Coasters, storefronts, logos
│   └── *.png                  ← Fallback PNGs
│
└── fonts/                     ← MDI webfonts (also in icons/fonts/)
    ├── mdi-subset.woff2
    ├── mdi-subset.woff
    ├── materialdesignicons-webfont.woff2
    └── materialdesignicons-webfont.woff
```

---

## Brand Tokens (from tokens.css)

### Colors
- **Primary Orange:** `#FE5900` (--lf-orange) — 5-10% of surfaces only
- **Bone:** `#F6F3EE` (--lf-bone) — 70-80% neutral surface
- **Charcoal:** `#26231F` (--lf-charcoal) — dark sections
- **Graphite:** `#1B1B1B` (--lf-graphite) — primary text
- **Muted:** `#6B6560` (--lf-muted) — secondary text
- **Stone:** `#CFC6BB` / Light: `#E8E3DC` — borders, subtle

### Typography
- **Headlines:** Space Grotesk (600 weight, -0.02em tracking)
- **Body:** Inter (400 weight, 1.7 line-height)
- **Scale:** 12px (xs) → 60px (6xl)

### Motion
- **Fast:** 150ms (cubic-bezier 0.4, 0, 0.2, 1)
- **Default:** 200ms
- **Entry:** 250ms (cubic-bezier 0.16, 1, 0.3, 1 — spring)
- **Slow:** 400ms

### Design Rule
"Everything else whispers so the orange can speak."

---

## Key Animations to Integrate

### 1. City Growth (SIGNATURE — must keep)
The animated NYC streetscape with 5 storefronts that grow service floors.
- Source: `animations/core-js/city-growth.js`
- Fast variant: `animations/archived/city-growth-fast.js` (150ms vs 320ms)

### 2. Stats Counter ("bar graph" animation)
Numbers animate up with easeOutCubic easing when scrolled into view.
- Source: `animations/core-js/main.js` lines 485-553
- Targets: `.stats-image-card` elements

### 3. Pill Scroll (GSAP)
Scroll-pinned rapid image flip with pill morphing.
- Source: `animations/pill-scroll-demo/` (open index.html in browser)
- Requires: GSAP + ScrollTrigger (included in vendor/)

### 4. Ambient Dots
20-35 pulsating dots scattered across viewport.
- Source: `animations/core-js/main.js` lines 180-205

### 5. Image Tilt
3D perspective tilt on hover with scroll reveal.
- Source: `animations/core-js/main.js` lines 267-395

### 6. Micro-Demo Service Cards
11 pure-CSS animations for service icons.
- Source: `animations/archived/micro-demo-services.html`

### 7. Money Splash
"$" particles burst when city growth floors complete.
- Source: `animations/archived/money-splash.html`

### 8. Page Loader
"Getting ready to help..." full-screen intro.
- Source: `animations/archived/page-loader.html`

---

## Pages in the Master Site

| Page | Path | Key Content |
|------|------|-------------|
| Homepage | `/` | Hero, proof strip, services grid, premium difference, city growth, FAQ |
| About | `/about/` | Company story, team, values |
| Services Hub | `/services/` | 9 service cards with icons |
| Service Detail (x9) | `/services/{slug}/` | Deep-dive per service |
| Areas Hub | `/areas/` | NYC neighborhoods grid |
| Area Detail (x7) | `/areas/{name}.html` | Per-neighborhood pages |
| Work/Portfolio | `/work/` | Case studies, metrics |
| Blog Hub | `/blog/` | Article listings |
| Blog Posts (x3) | `/blog/{slug}.html` | Full articles |
| Contact | `/contact/` | Form, info, map |
| Industries | `/industries.html` | Scroll-driven industry showcase |
| Solutions | `/solutions/` | Problem/solution narrative |
| Insights | `/insights/` | Thought leadership |
| Privacy | `/privacy.html` | Privacy policy |
| Terms | `/terms.html` | Terms of service |

---

## Icon Usage Summary

30 MDI icons across the site. Key categories:
- **Service wayfinders:** lan-connect, monitor-dashboard, map-marker-radius, cellphone, cash-register, home-automation, compass-outline, cart-outline, palette-outline, city
- **City animation:** bread-slice, door-open, coffee, door-closed, home-city, silverware-fork-knife
- **Contact:** email-outline, phone, phone-outline, map-marker
- **Blog:** shield-lock-outline, cloud-check-outline, robot-outline, chart-line, eye-off-outline, storefront-outline, google, web
- **UI:** chevron-down, replay

See `icons/ICON-REFERENCE.md` for full per-page breakdown.

---

## Integration Notes for Kimi Agent

1. The Kimi build uses React + Tailwind + GSAP. The handoff content is vanilla HTML/CSS/JS.
   Adapt the patterns — don't copy-paste raw HTML into React components.

2. The site uses **system fonts on production** for performance, but **Space Grotesk + Inter**
   are the design-system fonts. The Kimi build already loads both from Google Fonts.

3. All animations respect `prefers-reduced-motion`. Maintain this in React.

4. The MDI icon subset (3.4KB woff2) is much lighter than loading the full 403KB font.
   Consider building a React icon component that uses the SVGs directly.

5. Images are all WebP with responsive sizes (-640, -960, full). Use `srcset` or
   Next.js Image component equivalents.

6. Schema.org structured data (LocalBusiness, FAQPage, Service) is critical for SEO.
   Add JSON-LD to `<head>` of each page.
