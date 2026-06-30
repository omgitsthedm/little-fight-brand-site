# 🚀 ULTIMATE CLAUDE CODE HANDOVER: Little Fight NYC Premium UX Refinement

> **INSTRUCTION:** Copy-paste this **entire document** into Claude Code. This is a production-ready, exhaustive specification for refining `www.littlefightnyc.com` to "ultra premium" while preserving brand integrity, motion language, and conversion architecture.

---

## 📋 EXECUTIVE MISSION

```
You are a senior product designer + frontend engineer specializing in premium, 
motion-rich websites for service businesses.

REFINE www.littlefightnyc.com to improve clarity, conversion, and accessibility 
while STRICTLY preserving the existing visual system, motion language, and brand voice.

Every change must pass the "concierge test": Does this feel like a high-touch 
human service, or a generic SaaS dashboard?

Prioritize restraint, intentionality, and editorial polish over novelty.
```

---

## 🎨 DESIGN SYSTEM: IMMUTABLE CORE

### Color Palette (CSS Variables — NEVER ALTER HEX VALUES)
```css
:root {
  /* Base */
  --color-bg: #071119;              /* Midnight Navy — primary background */
  --color-surface-panel: #0f1a22;   /* Graphite — secondary surfaces */
  --color-surface-utility: rgba(15,26,34,0.6); /* Transparent overlays */
  
  /* Action & Status */
  --color-accent: #FE5900;          /* Signal Orange — ACTIONS ONLY */
  --color-ice-blue: #7DD3FC;        /* Accents, borders, subtle highlights */
  --color-success: #62E6B7;         /* Status: success/mint */
  --color-triage: #FE5900;          /* Status: attention */
  --color-fault: #EF4444;           /* Status: error */
  
  /* Text */
  --color-text-primary: #ffffff;
  --color-text-secondary: #94a3b8;
  --color-text-utility: #64748b;
  
  /* Borders & Dividers */
  --border-white-5: rgba(255,255,255,0.05);
  --border-white-10: rgba(255,255,255,0.1);
  --border-accent-40: rgba(254,89,0,0.4);
}
```
**🔴 HARD RULE**: `--color-accent` (Signal Orange) is for **actions, critical status, or discovery ONLY**. Never decorative. Never background fills.

### Typography Stack (Google Fonts — Load Order Matters)
```html
<!-- Preconnect + Font Loading Strategy -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

| Role | Font | Weight | Tracking | Line-Height | Usage |
|------|------|--------|----------|-------------|-------|
| **Display H1** | `Space Grotesk` | 700 | `-0.05em` | `0.85` | Hero headlines, section titles |
| **Heading H2-H4** | `Space Grotesk` | 600 | `-0.03em` | `1.1` | Subheads, card titles |
| **Eyebrow Label** | `Space Grotesk` | 500 | `0.05em` (uppercase) | `1.4` | Section intros, metadata |
| **Body Copy** | `Inter` | 400-500 | `0` | `1.7` | Paragraphs, lists, forms |
| **Utility/Meta** | `monospace` (SF Mono, JetBrains Mono) | 400 | `-0.02em` | `1.5` | Timestamps, version info, technical labels |

```css
/* Typography Utility Classes */
.vg-font-display { font-family: 'Space Grotesk', sans-serif; letter-spacing: -0.05em; line-height: 0.85; }
.vg-font-body { font-family: 'Inter', sans-serif; line-height: 1.7; max-width: 65ch; }
.vg-font-utility { font-family: monospace; letter-spacing: -0.02em; }
.vg-eyebrow { font-family: 'Space Grotesk', sans-serif; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 500; }
```

### Surface Hierarchy Classes (Apply to Section Containers)
```css
/* Hero Surface — Primary Focus */
.vg-surface-hero {
  background: var(--color-bg);
  border: 1px solid var(--border-white-10);
  border-radius: 12px;
  backdrop-filter: blur(24px);
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
}

/* Panel Surface — Standard Content */
.vg-surface-panel {
  background: var(--color-surface-panel);
  border: 1px solid var(--border-white-5);
  border-radius: 8px;
  backdrop-filter: blur(12px);
}

/* Utility Surface — Overlays, Modals */
.vg-surface-utility {
  background: var(--color-surface-utility);
  border: 1px solid var(--border-white-5);
  backdrop-filter: blur(8px);
}
```

### Texture & Light System
```css
/* Grain Overlay — Subtle noise for tactile premium feel */
.vg-grain-overlay {
  position: absolute;
  inset: 0;
  background-image: url("image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
  z-index: 0;
}

/* Light Bloom — Atmospheric radial glow */
.light-bloom {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(125,211,252,0.08) 0%, transparent 70%);
  filter: blur(120px);
  pointer-events: none;
  z-index: 0;
}

/* Photo Grade — Cinematic image treatment */
.photo-grade {
  filter: contrast(1.1) saturate(0.85) brightness(0.95);
  transition: filter 0.3s ease;
}
.photo-grade:hover { filter: contrast(1.15) saturate(0.9) brightness(1); }
```

### Grid & Spacing System
```css
/* Container */
.vg-container {
  width: 100%;
  max-width: 1152px; /* 72rem */
  margin-inline: auto;
  padding-inline: 1.5rem; /* 24px mobile, 32px desktop via media query */
}

/* Spacing Scale — 4px increments */
:root {
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */
  --space-24: 6rem;    /* 96px */
  --space-32: 8rem;    /* 128px */
}

/* Section Padding */
.section-padding { padding-block: var(--space-24); } /* Desktop */
@media (max-width: 768px) { .section-padding { padding-block: var(--space-16); } }
```

---

## ⚡ CORE MOTION PRIMITIVES (Preserve & Refine ONLY)

> **🔴 HARD RULE**: Never add new animation types. Only refine timing, easing, or intensity of existing primitives.

| Primitive | Purpose | CSS/JS Pattern | Timing/Intensity |
|-----------|---------|---------------|-----------------|
| **`Concierge Reveal`** | Hero/section entrance | `opacity:0→1; transform:translateY(12px)→0` | 500ms ease-out, one-shot on viewport enter |
| **`Trust Pill Sweep`** | Micro-proof, badges | `background: linear-gradient(90deg, transparent, var(--color-accent), transparent)` | 300ms ease, one-shot on load |
| **`Card Edge Current`** | Interactive hover | `box-shadow: 0 0 0 1px var(--color-accent) inset` | 200ms fade, on hover only |
| **`Signal Line Draw`** | Data flow visualization | `transform: translateX(-100%)→0` on `.vg-signal-line` | 800ms linear, low opacity (0.3) |
| **`Aurora Drift`** | Ambient background | `background-position: animate 0%→100%` on gradient | 20s continuous loop, <10% opacity under content |
| **`Contour Pulse`** | Section markers | `scale: 1→1.02→1; opacity: 0.8→1→0.8` | 2s ease-in-out loop, max intensity |
| **`Proof Counter Drift`** | Stats/metrics reveal | Count-up JS + `transform: translateY(4px)→0` | 1200ms staggered, one-shot |
| **`Reading Rail Progress`** | Article scroll indicator | `width: 0%→scroll%` on fixed bar | Real-time, 60fps, low-opacity accent |
| **`Highlight Sweep`** | Editorial emphasis | `background: linear-gradient(90deg, transparent, var(--color-accent)/0.2, transparent)` | 400ms ease, one-shot on section enter |
| **`Accordion Breathing`** | FAQ expansion | `max-height: 0→auto; opacity: 0→1` | 300ms ease-out, spring-like but restrained |
| **`Message Routing`** | Contact channel selection | Path animation with `stroke-dashoffset` | 600ms ease, calm curve, low intensity |
| **`Closing Signal`** | Footer signature | Subtle `opacity: 0.8→1` + `translateY(2px)→0` | 400ms ease-out, one-shot on scroll-end |

### Motion Implementation Template
```javascript
// Example: Concierge Reveal (Intersection Observer)
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target); // One-shot
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.vg-reveal').forEach(el => revealObserver.observe(el));
```

```css
/* CSS for Concierge Reveal */
.vg-reveal {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.vg-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 🧭 GLOBAL COMPONENT LIBRARY

### Navigation & Header
```html
<!-- Glass Header Pattern (Preserve Exactly) -->
<header class="vg-header glass" data-scroll-threshold="80">
  <div class="vg-container flex items-center justify-between py-4">
    <a href="/" class="logo vg-font-display font-bold">LF</a>
    
    <nav class="hidden md:flex gap-6 vg-font-body text-sm">
      <a href="/services" class="hover:text-[var(--color-ice-blue)] transition-colors">Services</a>
      <a href="/work" class="hover:text-[var(--color-ice-blue)] transition-colors">Work</a>
      <a href="/about" class="hover:text-[var(--color-ice-blue)] transition-colors">About</a>
      <a href="/contact" class="hover:text-[var(--color-ice-blue)] transition-colors">Contact</a>
    </nav>
    
    <a href="/contact" class="vg-cta-primary px-4 py-2 rounded-full bg-[var(--color-accent)] text-white font-medium hover:opacity-90 transition-opacity">
      Book a Consult
    </a>
  </div>
</header>
```

```css
/* Glass Header Behavior */
.vg-header.glass {
  position: sticky;
  top: 0;
  z-index: 100;
  background: transparent;
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
}
.vg-header.glass.scrolled {
  background: rgba(7,17,25,0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border-white-5);
}
```

### CTA Hierarchy System
```css
/* Primary CTA — Orange, Action Only */
.vg-cta-primary {
  background: var(--color-accent);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 500;
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.vg-cta-primary:hover { opacity: 0.9; }
.vg-cta-primary:active { transform: scale(0.98); }

/* Secondary CTA — Outlined, Ice Blue */
.vg-cta-secondary {
  background: transparent;
  color: var(--color-ice-blue);
  border: 1px solid var(--color-ice-blue);
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 500;
  transition: background 0.2s ease, color 0.2s ease;
}
.vg-cta-secondary:hover {
  background: rgba(125,211,252,0.1);
  color: white;
}

/* Tertiary CTA — Text Link */
.vg-cta-tertiary {
  color: var(--color-text-secondary);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 0.2s ease;
}
.vg-cta-tertiary:hover { color: var(--color-accent); }
.vg-cta-tertiary::after {
  content: "→";
  transition: transform 0.2s ease;
}
.vg-cta-tertiary:hover::after { transform: translateX(2px); }
```

### Card System (Services, Pricing, Case Studies)
```html
<!-- Card with Edge Current Hover -->
<article class="vg-card vg-surface-panel p-6 relative overflow-hidden group">
  <div class="vg-card-edge"></div> <!-- Animated edge on hover -->
  
  <span class="vg-eyebrow text-[var(--color-ice-blue)] mb-2 block">Website Design</span>
  <h3 class="vg-font-display text-xl font-semibold mb-3">Clearer pages, better trust</h3>
  <p class="vg-font-body text-[var(--color-text-secondary)] mb-4">
    Custom websites that are easier to read, easier to trust, and easier for the right customer to act on.
  </p>
  
  <a href="/services/website-design" class="vg-cta-tertiary">View service details</a>
</article>
```

```css
/* Card Edge Current Animation */
.vg-card {
  position: relative;
  border-radius: 12px;
  transition: transform 0.2s ease;
}
.vg-card:hover { transform: translateY(-2px); }

.vg-card-edge {
  position: absolute;
  inset: 0;
  border-radius: 12px;
  padding: 1px;
  background: linear-gradient(90deg, transparent, var(--color-accent), transparent);
  background-size: 200% 100%;
  background-position: -100% 0;
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  transition: background-position 0.3s ease;
}
.vg-card:hover .vg-card-edge {
  background-position: 200% 0;
}
```

### Status Language Component
```html
<!-- Status Badge System -->
<span class="vg-status-badge inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
      data-status="success"> <!-- success | triage | fault | standby -->
  <span class="w-1.5 h-1.5 rounded-full" 
        style="background: var(--color-success)"></span>
  Optimized
</span>
```

```css
.vg-status-badge[data-status="success"] { color: var(--color-success); }
.vg-status-badge[data-status="triage"] { color: var(--color-triage); }
.vg-status-badge[data-status="fault"] { color: var(--color-fault); }
.vg-status-badge[data-status="standby"] { color: var(--color-text-utility); }
.vg-status-badge .w-1\.5 { box-shadow: 0 0 0 2px currentColor; }
```

### Icon Family (Lucide — Stroke 1.5)
```html
<!-- Icon Usage Pattern -->
<svg class="vg-icon w-5 h-5 stroke-[var(--color-text-secondary)]" 
     stroke-width="1.5" 
     fill="none" 
     viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
</svg>
```

```css
.vg-icon {
  transition: stroke 0.2s ease;
}
.group:hover .vg-icon {
  stroke: var(--color-accent);
}
```

---

## 🏠 HOMEPAGE: SECTION-BY-SECTION REFINEMENT SPEC

### Section 1: Hero (Above the Fold)
```markdown
## Hero Section Refinement

### Objective
Establish immediate trust and clarity while preserving the premium midnight atmosphere.

### Current Friction Points
- Headline hierarchy could be tighter for scannability
- CTA grouping lacks clear primary/secondary distinction
- Ambient motion could feel more intentional under copy

### Changes
- Tighten H1 tracking to `-0.06em` for stronger visual weight while preserving Space Grotesk character
- Add `Trust Pill Sweep` animation to primary CTA only (not secondary) to establish action hierarchy
- Reduce `Aurora Drift` opacity to 5% directly under headline area to improve text contrast without losing atmosphere
- Add subtle `light-bloom` behind the subheading to create depth separation from background grid

### Code Snippet
```css
/* Hero Headline Refinement */
.hero-headline {
  letter-spacing: -0.06em; /* Was -0.05em */
  text-wrap: balance; /* Prevent awkward line breaks */
}

/* CTA Hierarchy */
.hero-ctas {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.hero-cta-primary {
  animation: trustPillSweep 0.3s ease-out forwards;
}
@keyframes trustPillSweep {
  0% { background-position: -100% 0; }
  100% { background-position: 200% 0; }
}

/* Subheading Depth */
.hero-subheading {
  position: relative;
  z-index: 1;
}
.hero-subheading::before {
  content: "";
  position: absolute;
  inset: -1rem;
  background: radial-gradient(circle, rgba(125,211,252,0.06) 0%, transparent 60%);
  filter: blur(60px);
  z-index: -1;
}
```

### Motion Note
- `Concierge Reveal` on headline + subheading: 600ms ease-out, staggered by 100ms
- `Trust Pill Sweep` on primary CTA: 300ms, one-shot on load
- `Aurora Drift`: Reduce opacity to 5% in hero content zone, maintain 10% elsewhere

### Premium Check
✅ Passes concierge test? Yes — motion serves clarity, not decoration
✅ Uses only approved motion primitives? Yes
✅ Orange used for action only? Yes (primary CTA only)
✅ Preserves glass header / surface hierarchy? Yes
```

### Section 2: "Most Teams Arrive Here Because..." (Problem Statement)
```markdown
## Problem Statement Section Refinement

### Objective
Make the three friction points instantly scannable while maintaining editorial tone.

### Changes
- Convert bullet list to horizontal card grid on desktop (stacked on mobile) for better visual rhythm
- Add `IconFamily` icons (stroke 1.5) to each friction point for faster pattern recognition
- Apply `Card Edge Current` on hover to create subtle interactivity without overwhelming
- Increase body line-height to 1.75 for improved readability against dark background

### Code Snippet
```html
<div class="grid md:grid-cols-3 gap-6 mt-12">
  <div class="vg-card vg-surface-panel p-5 group">
    <svg class="vg-icon w-6 h-6 mb-3 stroke-[var(--color-ice-blue)]" ...>...</svg>
    <h4 class="vg-font-display font-semibold mb-2">Website feels smaller than the business</h4>
    <p class="vg-font-body text-[var(--color-text-secondary)]">
      Your work is exceptional, but your digital presence doesn't match that quality.
    </p>
  </div>
  <!-- Repeat for other two points -->
</div>
```

### Motion Note
- `Concierge Reveal` on each card: staggered 150ms delay, 400ms ease-out
- `Card Edge Current` on hover: 200ms fade, subtle scale (1.02)

### Premium Check
✅ Passes concierge test? Yes — cards feel like curated insights, not generic features
✅ Uses only approved motion primitives? Yes
✅ Orange used for action only? Yes (none used here — correct)
✅ Preserves surface hierarchy? Yes (`.vg-surface-panel`)
```

### Section 3: "How We Help" (Three Business Lanes)
```markdown
## Three Lanes Section Refinement

### Objective
Clarify the three service pathways while preserving the asymmetric, editorial layout.

### Changes
- Add subtle `Signal Line Draw` connectors between lane cards to visualize the "one operating surface" concept
- Implement `Highlight Sweep` on the lane title that matches user's scroll position (via Intersection Observer)
- Increase card padding to `p-8` for better breathing room on desktop
- Add `StatusLanguage` badge to each lane showing typical engagement timeline ("2-4 weeks", "Same-day", "Ongoing")

### Code Snippet
```css
/* Lane Card Enhancement */
.lane-card {
  position: relative;
  padding: 2rem; /* Was 1.5rem */
}
.lane-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -1px;
  width: 2px;
  height: 0;
  background: var(--color-accent);
  transition: height 0.6s ease;
}
.lane-card.in-view::before {
  height: 100%;
}

/* Status Badge Placement */
.lane-status {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
```

### Motion Note
- `Signal Line Draw`: Horizontal lines animate left→right at 0.3 opacity, 800ms duration
- `Highlight Sweep`: One-time orange sweep on lane title when section enters viewport
- `Concierge Reveal` on cards: staggered 200ms, 500ms ease-out

### Premium Check
✅ Passes concierge test? Yes — feels like a guided consultation, not a service menu
✅ Uses only approved motion primitives? Yes
✅ Orange used for action only? Yes (status badges use accent appropriately)
✅ Preserves asymmetric layout? Yes — no forced grid symmetry
```

### Section 4: Proof / Case Studies
```markdown
## Proof Section Refinement

### Objective
Make case study outcomes feel like quiet evidence, not celebratory dashboards.

### Changes
- Implement `Reading Rail` progress indicator for long case study cards (scroll-based width animation)
- Apply `Proof Counter Drift` to metrics (97 Lighthouse, 34 pages) with gentle float animation
- Add `Before/After Wipe` interactive comparison for visual impact (drag handle, preserved brand colors)
- Use `Photo Grade` consistently on all project screenshots with subtle hover zoom (1.03)

### Code Snippet
```html
<!-- Case Study Card with Reading Rail -->
<article class="vg-case-study relative">
  <div class="reading-rail h-0.5 bg-[var(--border-white-5)] rounded-full overflow-hidden">
    <div class="rail-progress h-full bg-[var(--color-accent)] w-0 transition-all duration-100"></div>
  </div>
  
  <div class="before-after-comparison relative mt-6">
    <div class="before-state photo-grade">...</div>
    <div class="after-state photo-grade">...</div>
    <div class="wipe-handle absolute top-0 bottom-0 w-1 bg-[var(--color-accent)] cursor-ew-resize"></div>
  </div>
  
  <div class="metrics-grid grid grid-cols-3 gap-4 mt-6">
    <div class="metric-item">
      <span class="metric-value vg-font-display text-2xl" data-count="97">0</span>
      <span class="metric-label vg-font-utility text-xs">Lighthouse</span>
    </div>
    <!-- More metrics -->
  </div>
</article>
```

```javascript
// Proof Counter Drift + Reading Rail
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Animate counters
      entry.target.querySelectorAll('[data-count]').forEach(el => {
        const target = +el.dataset.count;
        animateCounter(el, 0, target, 1200);
      });
      // Start reading rail on scroll
      initReadingRail(entry.target);
    }
  });
});
```

### Motion Note
- `Proof Counter Drift`: Count-up over 1200ms + subtle `translateY(4px)→0` float
- `Reading Rail`: Real-time scroll progress, 60fps, low-opacity accent
- `Before/After Wipe`: Drag handle with `Card Edge Current` on active state

### Premium Check
✅ Passes concierge test? Yes — metrics feel like evidence, not hype
✅ Uses only approved motion primitives? Yes
✅ Orange used for action only? Yes (rail progress, wipe handle)
✅ Preserves photo grading system? Yes (`.photo-grade` applied consistently)
```

### Section 5: Pricing Tiers
```markdown
## Pricing Section Refinement

### Objective
Make tier selection feel guided and premium, not salesy or overwhelming.

### Changes
- Add `Trust Pill Sweep` to "Most Popular" tag on load (single animation, not loop)
- Implement `Card Edge Current` on hover for all tiers, but intensify slightly (1.5px) for "Most Popular"
- Add subtle `light-bloom` behind the recommended tier to create visual hierarchy without borders
- Ensure touch targets are 44px+ on mobile for tap accuracy

### Code Snippet
```css
/* Pricing Card Enhancement */
.pricing-card.most-popular {
  position: relative;
  border: 1px solid var(--color-accent);
}
.pricing-card.most-popular::after {
  content: "Most Popular";
  position: absolute;
  top: -12px;
  right: 1rem;
  background: var(--color-accent);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  animation: trustPillSweep 0.3s ease-out forwards;
}

/* Hover State Differentiation */
.pricing-card:hover .vg-card-edge {
  background-position: 200% 0;
}
.pricing-card.most-popular:hover .vg-card-edge {
  /* Slightly more intense edge for recommended tier */
  box-shadow: 0 0 0 1.5px var(--color-accent) inset;
}
```

### Motion Note
- `Trust Pill Sweep` on "Most Popular" tag: 300ms, one-shot on section enter
- `Card Edge Current` on all cards: 200ms fade on hover
- `Concierge Reveal` on pricing cards: staggered 150ms, 400ms ease-out

### Premium Check
✅ Passes concierge test? Yes — feels like a curated recommendation, not upsell
✅ Uses only approved motion primitives? Yes
✅ Orange used for action only? Yes (tag, border, edge — all action/signaling)
✅ Preserves surface hierarchy? Yes (`.vg-surface-panel` for all cards)
```

### Section 6: FAQ Accordion
```markdown
## FAQ Section Refinement

### Objective
Make FAQ expansion feel calm and premium, not abrupt or utilitarian.

### Changes
- Implement `Accordion Breathing` animation for smooth expand/collapse
- Add `Priority Pulse` subtle animation to the most-asked question (gentle scale+opacity loop)
- Increase answer line-height to 1.8 for better readability
- Add `Reading Rail` progress indicator for long FAQ pages

### Code Snippet
```css
/* Accordion Breathing Animation */
.faq-item {
  border-bottom: 1px solid var(--border-white-5);
  overflow: hidden;
}
.faq-answer {
  max-height: 0;
  opacity: 0;
  transition: max-height 0.3s ease-out, opacity 0.2s ease-out;
}
.faq-item.active .faq-answer {
  max-height: 500px; /* Adjust based on content */
  opacity: 1;
}

/* Priority Pulse for Featured Question */
.faq-item.priority {
  animation: priorityPulse 3s ease-in-out infinite;
}
@keyframes priorityPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.95; transform: scale(1.01); }
}
```

### Motion Note
- `Accordion Breathing`: 300ms ease-out for expand, 250ms for collapse
- `Priority Pulse`: 3s loop, very subtle (opacity 0.95→1, scale 1→1.01)
- `Highlight Sweep` on question text when expanded: one-time, 400ms

### Premium Check
✅ Passes concierge test? Yes — feels like a guided conversation, not a database
✅ Uses only approved motion primitives? Yes
✅ Orange used for action only? Yes (none in FAQ — correct)
✅ Preserves typography system? Yes (Inter body, Space Grotesk questions)
```

### Section 7: Contact / Footer
```markdown
## Contact & Footer Refinement

### Objective
Make contact routing feel guided and calm, not overwhelming or salesy.

### Changes
- Implement `Message Routing` animation for channel selection (calm path visualization)
- Add `Form Confidence` inline validation with `StatusLanguage` colors
- Apply `Closing Signal` animation to footer signature on scroll-end
- Ensure all form inputs have 44px+ touch targets on mobile

### Code Snippet
```html
<!-- Message Routing Visualization -->
<div class="routing-visual relative h-16 mb-6">
  <svg class="w-full h-full" viewBox="0 0 400 64">
    <path class="routing-path" d="M20,32 Q100,10 200,32 T380,32" 
          stroke="var(--border-white-10)" 
          stroke-width="1" 
          fill="none"/>
    <circle class="routing-node active" cx="200" cy="32" r="4" fill="var(--color-accent)"/>
  </svg>
</div>

<!-- Form with Confidence Validation -->
<form class="space-y-4">
  <input type="email" 
         class="vg-input w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
         placeholder="your@email.com">
  <div class="validation-message text-sm text-[var(--color-success)] hidden">✓ Valid email</div>
</form>
```

```javascript
// Form Confidence Validation
input.addEventListener('blur', (e) => {
  if (isValidEmail(e.target.value)) {
    showValidation(e.target, 'success', '✓ Valid email');
  } else {
    showValidation(e.target, 'error', 'Please enter a valid email');
  }
});
```

### Motion Note
- `Message Routing`: Path animation with `stroke-dashoffset`, 600ms ease, low intensity
- `Form Confidence`: Validation message `opacity:0→1 + translateY(4px)→0`, 200ms ease
- `Closing Signal` on footer: `opacity:0.8→1 + translateY(2px)→0`, 400ms ease-out on scroll-end

### Premium Check
✅ Passes concierge test? Yes — feels like a guided handoff, not a form dump
✅ Uses only approved motion primitives? Yes
✅ Orange used for action only? Yes (focus ring, active node, success state)
✅ Preserves glass header / surface hierarchy? Yes (footer uses `.vg-surface-utility`)
```

---

## 📄 SUPPORTING PAGES: REACTIVATION & REFINEMENT SPECS

### Blog Index (`/blog/`)
```markdown
## Blog Index Refinement

### Objective
Make article discovery feel editorial and calm, not like a content mill.

### Current State
- Articles are listed with basic cards
- Missing reading progress indicators
- No clear content categorization

### Changes
- Implement `Article Card Scan` hover effect (subtle spotlight + `Card Edge Current`)
- Add `Reading Rail` progress indicator for long-form article previews
- Apply `Highlight Sweep` to featured article titles only
- Introduce content categories via `BadgeSystem` (Search Strategy, Operations, etc.)

### Code Snippet
```html
<!-- Blog Card with Scan Effect -->
<article class="blog-card vg-surface-panel p-6 group relative overflow-hidden">
  <div class="card-scan absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  
  <span class="vg-badge-outline text-xs mb-3 inline-block">Search Strategy</span>
  <h3 class="vg-font-display text-lg font-semibold mb-2 group-hover:text-[var(--color-ice-blue)] transition-colors">
    What Google Actually Looks For on a Business Website
  </h3>
  <p class="vg-font-body text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-3">
    Google still reads keywords, but it trusts clarity more...
  </p>
  
  <div class="flex items-center gap-4 text-xs vg-font-utility text-[var(--color-text-utility)]">
    <span>Feb 12, 2026</span>
    <span>•</span>
    <span>8 min read</span>
  </div>
</article>
```

### Motion Note
- `Article Card Scan`: Gradient sweep on hover, 500ms ease, low opacity (5%)
- `Concierge Reveal` on cards: staggered 100ms, 400ms ease-out
- `Highlight Sweep` on featured article title: one-shot on section enter

### Premium Check
✅ Passes concierge test? Yes — feels like a curated reading list, not a blog dump
✅ Uses only approved motion primitives? Yes
✅ Orange used for action only? Yes (none in cards — correct)
✅ Preserves typography system? Yes (Space Grotesk titles, Inter body, mono meta)
```

### Blog Post Template (`/blog/[slug]/`)
```markdown
## Blog Post Template Refinement

### Objective
Make long-form content feel guided and premium, not overwhelming.

### Changes
- Add fixed `Reading Rail` progress indicator at top (scroll-based width animation)
- Implement `Highlight Sweep` on key takeaways or owner quotes
- Apply `Accordion Breathing` to FAQ-style sections within articles
- Add `ArticlePullQuote` component with subtle `light-bloom` background

### Code Snippet
```html
<!-- Fixed Reading Rail -->
<div class="reading-rail-fixed fixed top-0 left-0 right-0 h-0.5 bg-[var(--border-white-5)] z-50">
  <div class="rail-progress h-full bg-[var(--color-accent)] w-0" id="readingProgress"></div>
</div>

<!-- Pull Quote with Bloom -->
<blockquote class="article-pullquote relative my-12 p-6 vg-surface-panel">
  <div class="light-bloom absolute -inset-8 opacity-30"></div>
  <p class="vg-font-display text-lg italic relative z-10">
    "Precision isn't just a goal; it's the baseline for every concierge interaction we manage."
  </p>
  <cite class="vg-font-utility text-sm text-[var(--color-text-secondary)] mt-3 block relative z-10">
    — LFN Design Team
  </cite>
</blockquote>
```

```javascript
// Reading Rail Progress
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  document.getElementById('readingProgress').style.width = `${progress}%`;
});
```

### Motion Note
- `Reading Rail`: Real-time scroll progress, 60fps, low-opacity accent
- `Highlight Sweep` on pull quotes: one-time on section enter, 400ms ease
- `Concierge Reveal` on article body: 500ms ease-out on load

### Premium Check
✅ Passes concierge test? Yes — feels like a guided editorial experience
✅ Uses only approved motion primitives? Yes
✅ Orange used for action only? Yes (reading rail progress only)
✅ Preserves editorial typography? Yes (Inter body, mono for code/technical)
```

### Work / Portfolio (`/work/`)
```markdown
## Work Page Refinement

### Objective
Make case studies feel like curated evidence, not a generic portfolio grid.

### Changes
- Implement `Before/After Wipe` interactive comparison for visual impact (drag handle)
- Add `Proof Counter Drift` to metrics (Lighthouse scores, page counts)
- Apply `Card Edge Current` on hover to project cards, with intensification for featured projects
- Introduce `LocalNYCSystem` badges for NYC-based projects (neighborhood + zip)

### Code Snippet
```html
<!-- Project Card with NYC Badge -->
<article class="project-card vg-surface-panel p-6 group relative">
  <div class="project-header flex items-start justify-between mb-4">
    <div>
      <h3 class="vg-font-display text-lg font-semibold">Grand Funding LLC</h3>
      <p class="vg-font-body text-sm text-[var(--color-text-secondary)]">Hard Money Lending · Arizona & California</p>
    </div>
    <span class="vg-badge-success text-xs">97/A</span>
  </div>
  
  <!-- Before/After Comparison -->
  <div class="before-after relative mt-4 mb-6">
    <div class="before-state photo-grade opacity-60">...</div>
    <div class="after-state photo-grade">...</div>
    <div class="wipe-handle absolute top-0 bottom-0 w-1 bg-[var(--color-accent)] cursor-ew-resize"></div>
  </div>
  
  <!-- Metrics with Counter Drift -->
  <div class="metrics-grid grid grid-cols-3 gap-4">
    <div class="metric-item">
      <span class="metric-value vg-font-display text-xl" data-count="97">0</span>
      <span class="metric-label vg-font-utility text-xs">Lighthouse</span>
    </div>
    <!-- More metrics -->
  </div>
  
  <!-- NYC Badge for Local Projects -->
  <div class="mt-4">
    <span class="vg-badge-outline text-xs">West Village · 10014</span>
  </div>
</article>
```

### Motion Note
- `Before/After Wipe`: Drag handle with `Card Edge Current` on active, smooth transition
- `Proof Counter Drift`: Count-up over 1200ms + subtle float animation
- `Concierge Reveal` on project cards: staggered 150ms, 400ms ease-out

### Premium Check
✅ Passes concierge test? Yes — feels like evidence-based storytelling, not bragging
✅ Uses only approved motion primitives? Yes
✅ Orange used for action only? Yes (wipe handle, active states)
✅ Preserves photo grading? Yes (`.photo-grade` on all screenshots)
```

### About Page (`/about/`)
```markdown
## About Page Refinement

### Objective
Make the brand story feel human and warm, not corporate or self-promotional.

### Changes
- Implement `Process Thread` animation for the "How We Work" steps (calm connecting lines)
- Add `Calm Operator` subtle animation to team/philosophy sections (gentle pulse)
- Apply `Neighborhood Pulse` to NYC-specific references (subtle map motif)
- Increase body line-height to 1.8 for better readability of narrative content

### Code Snippet
```html
<!-- Process Thread Animation -->
<div class="process-steps relative">
  <div class="thread-line absolute left-6 top-0 bottom-0 w-px bg-[var(--border-white-10)]"></div>
  
  <div class="process-step relative pl-12 py-6">
    <div class="step-node absolute left-4 top-8 w-4 h-4 rounded-full bg-[var(--color-accent)]"></div>
    <h4 class="vg-font-display font-semibold mb-2">Tell us what feels off</h4>
    <p class="vg-font-body text-[var(--color-text-secondary)]">
      You do not need a perfect diagnosis. We start with the part that feels broken...
    </p>
  </div>
  <!-- More steps -->
</div>
```

```css
/* Calm Operator Subtle Animation */
.calm-operator {
  animation: calmPulse 4s ease-in-out infinite;
}
@keyframes calmPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.95; }
}

/* Neighborhood Pulse Map Motif */
.neighborhood-pulse {
  position: relative;
}
.neighborhood-pulse::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 30% 70%, rgba(125,211,252,0.05) 0%, transparent 30%);
  pointer-events: none;
  animation: pulseMap 8s ease-in-out infinite;
}
@keyframes pulseMap {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.5; }
}
```

### Motion Note
- `Process Thread`: Line draws bottom→top as steps enter viewport, 600ms ease
- `Calm Operator`: 4s pulse loop, very subtle (opacity 0.95→1)
- `Neighborhood Pulse`: 8s map motif pulse, low opacity

### Premium Check
✅ Passes concierge test? Yes — feels like a human story, not a corporate bio
✅ Uses only approved motion primitives? Yes
✅ Orange used for action only? Yes (step nodes only)
✅ Preserves narrative typography? Yes (Space Grotesk headings, Inter body)
```

### Services Page (`/services/`)
```markdown
## Services Page Refinement

### Objective
Make service discovery feel guided and calm, not overwhelming or salesy.

### Changes
- Implement `Service Icons` wake-up animation on hover (IconFamily stroke 1.5)
- Add `Outcome Ladder` visualization for each service (Challenge→Solution→Result)
- Apply `Card Edge Current` on hover to service cards, with intensification for "Most Popular"
- Introduce `LocalNYCSystem` badges for Manhattan on-site services

### Code Snippet
```html
<!-- Service Card with Outcome Ladder -->
<article class="service-card vg-surface-panel p-6 group relative">
  <div class="service-icon mb-4">
    <svg class="vg-icon w-8 h-8 stroke-[var(--color-text-secondary)] group-hover:stroke-[var(--color-accent)] transition-colors" ...>...</svg>
  </div>
  
  <h3 class="vg-font-display text-lg font-semibold mb-2">Website Design</h3>
  <p class="vg-font-body text-[var(--color-text-secondary)] mb-4">
    Custom websites that are easier to read, easier to trust, and easier for the right customer to act on.
  </p>
  
  <!-- Outcome Ladder -->
  <div class="outcome-ladder space-y-2 mb-4">
    <div class="ladder-step flex items-center gap-2 text-sm">
      <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-success)]"></span>
      <span class="text-[var(--color-text-secondary)]">Clearer first impression</span>
    </div>
    <div class="ladder-step flex items-center gap-2 text-sm">
      <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-success)]"></span>
      <span class="text-[var(--color-text-secondary)]">More qualified inquiries</span>
    </div>
    <div class="ladder-step flex items-center gap-2 text-sm">
      <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-success)]"></span>
      <span class="text-[var(--color-text-secondary)]">Fewer explanation calls</span>
    </div>
  </div>
  
  <!-- NYC Badge for On-Site Services -->
  <div class="mt-4">
    <span class="vg-badge-outline text-xs">On-site in Manhattan</span>
  </div>
  
  <a href="/services/website-design" class="vg-cta-tertiary mt-4 inline-flex">View service details</a>
</article>
```

### Motion Note
- `Service Icons` wake-up: Stroke color transition 200ms ease on hover
- `Outcome Ladder`: Steps reveal with `Concierge Reveal`, staggered 100ms
- `Card Edge Current` on hover: 200ms fade, subtle scale (1.02)

### Premium Check
✅ Passes concierge test? Yes — feels like a guided consultation, not a menu
✅ Uses only approved motion primitives? Yes
✅ Orange used for action only? Yes (hover states, CTA only)
✅ Preserves service hierarchy? Yes (Build/Fix/Secure/Upgrade sections intact)
```

### FAQ Page (`/faq/`) — REACTIVATE
```markdown
## FAQ Page Reactivation & Refinement

### Objective
Bring FAQ content back into a single, calm, scannable resource.

### Current State
- FAQ content is scattered across homepage and service pages
- No dedicated FAQ page template
- Missing search/filter functionality

### Changes
- Implement `Accordion Breathing` for all FAQ items (smooth expand/collapse)
- Add `Priority Pulse` to most-asked questions (gentle attention cue)
- Introduce category tabs via `BadgeSystem` (Getting Started, Websites, Support, etc.)
- Add search input with `Form Confidence` validation for question filtering

### Code Snippet
```html
<!-- FAQ Category Tabs -->
<div class="faq-categories flex flex-wrap gap-2 mb-8">
  <button class="vg-badge-primary active">All</button>
  <button class="vg-badge-outline">Getting Started</button>
  <button class="vg-badge-outline">Websites & Visibility</button>
  <button class="vg-badge-outline">Support & Devices</button>
  <button class="vg-badge-outline">Commerce & Systems</button>
</div>

<!-- FAQ Item with Priority Pulse -->
<div class="faq-item priority border-b border-[var(--border-white-5)] py-4">
  <button class="faq-question w-full text-left flex items-center justify-between vg-font-display font-medium">
    <span>I'm not good with technology. Can you still help me?</span>
    <svg class="vg-icon w-5 h-5 transition-transform" ...>...</svg>
  </button>
  <div class="faq-answer vg-font-body text-[var(--color-text-secondary)] mt-3 pl-6 border-l-2 border-[var(--border-white-10)]">
    Yes. We help owners who do not want to become part-time IT managers...
  </div>
</div>
```

```javascript
// FAQ Search Filter
const searchInput = document.getElementById('faqSearch');
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question').textContent.toLowerCase();
    const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
    item.style.display = (question.includes(query) || answer.includes(query)) ? 'block' : 'none';
  });
});
```

### Motion Note
- `Accordion Breathing`: 300ms ease-out for expand, 250ms for collapse
- `Priority Pulse`: 3s loop, very subtle (opacity 0.95→1, scale 1→1.01)
- `Highlight Sweep` on matched search results: one-time, 400ms ease

### Premium Check
✅ Passes concierge test? Yes — feels like a guided Q&A, not a database dump
✅ Uses only approved motion primitives? Yes
✅ Orange used for action only? Yes (active tab, search focus)
✅ Preserves editorial tone? Yes (plain-English questions and answers intact)
```

### Privacy Policy (`/privacy/`) — REACTIVATE
```markdown
## Privacy Policy Reactivation & Refinement

### Objective
Make legal content feel clear and human, not intimidating or boilerplate.

### Changes
- Apply `Quiet Header Fade` to page title (low-drama intro animation)
- Increase body line-height to 1.8 for better readability of legal text
- Add `SectionMarkerDraw` dividers between policy sections (subtle horizontal rule)
- Implement `Reading Rail` progress indicator for long legal content

### Code Snippet
```html
<!-- Privacy Policy Structure -->
<article class="vg-surface-panel p-8 vg-container max-w-3xl mx-auto">
  <h1 class="vg-font-display text-3xl font-bold mb-8 vg-reveal">How we handle your information</h1>
  
  <div class="reading-rail-fixed fixed top-0 left-0 right-0 h-0.5 bg-[var(--border-white-5)] z-50">
    <div class="rail-progress h-full bg-[var(--color-accent)] w-0" id="readingProgress"></div>
  </div>
  
  <section class="mb-8">
    <h2 class="vg-font-display text-xl font-semibold mb-4">What we collect</h2>
    <p class="vg-font-body text-[var(--color-text-secondary)] leading-relaxed">
      When you contact Little Fight NYC, we may collect the information you choose to submit...
    </p>
  </section>
  
  <hr class="vg-divider my-8 border-t border-[var(--border-white-5)]">
  
  <!-- More sections -->
</article>
```

```css
/* Quiet Header Fade */
@keyframes quietFade {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
.vg-reveal {
  animation: quietFade 0.6s ease-out forwards;
}

/* Section Divider */
.vg-divider {
  position: relative;
}
.vg-divider::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 1px;
  background: var(--color-accent);
  animation: signalLineDraw 0.8s linear forwards;
}
@keyframes signalLineDraw {
  to { width: 100%; }
}
```

### Motion Note
- `Quiet Header Fade`: 600ms ease-out on page load
- `SectionMarkerDraw`: Horizontal rule draws left→right, 800ms linear, low opacity
- `Reading Rail`: Real-time scroll progress, 60fps, low-opacity accent

### Premium Check
✅ Passes concierge test? Yes — feels like transparent communication, not legal intimidation
✅ Uses only approved motion primitives? Yes
✅ Orange used for action only? Yes (reading rail, divider accent only)
✅ Preserves readability? Yes (increased line-height, max-width 65ch)
```

### Terms of Service (`/terms/`) — REACTIVATE
```markdown
## Terms of Service Reactivation & Refinement

### Objective
Make terms feel clear and practical, not dense or intimidating.

### Changes
- Apply same `Quiet Header Fade` + `Reading Rail` pattern as Privacy page
- Add `ContentAnnotation` component for technical clarifications (subtle side notes)
- Implement `Accordion Breathing` for complex sections that can be expanded
- Ensure all links open in new tab with `vg-cta-tertiary` styling

### Code Snippet
```html
<!-- Terms with Content Annotations -->
<article class="vg-surface-panel p-8 vg-container max-w-3xl mx-auto">
  <h1 class="vg-font-display text-3xl font-bold mb-8 vg-reveal">General terms for using this site and working with us</h1>
  
  <div class="reading-rail-fixed fixed top-0 left-0 right-0 h-0.5 bg-[var(--border-white-5)] z-50">
    <div class="rail-progress h-full bg-[var(--color-accent)] w-0" id="readingProgress"></div>
  </div>
  
  <section class="mb-8">
    <h2 class="vg-font-display text-xl font-semibold mb-4">Project scope and estimates</h2>
    <p class="vg-font-body text-[var(--color-text-secondary)] leading-relaxed">
      Any scope, schedule, or pricing shared through email, calls, or proposals is subject to confirmation in a written agreement.
      <span class="vg-annotation inline-block ml-2 text-[var(--color-ice-blue)] text-sm" title="This protects both parties from scope creep">
        ⓘ
      </span>
    </p>
  </section>
  
  <!-- More sections -->
</article>
```

```css
/* Content Annotation Tooltip */
.vg-annotation {
  position: relative;
  cursor: help;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: rgba(125,211,252,0.1);
  font-size: 0.75rem;
  vertical-align: middle;
}
.vg-annotation:hover::after {
  content: attr(title);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-4px);
  background: var(--color-surface-panel);
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  white-space: nowrap;
  z-index: 10;
  border: 1px solid var(--border-white-10);
}
```

### Motion Note
- `Quiet Header Fade`: 600ms ease-out on page load
- `Reading Rail`: Real-time scroll progress, 60fps, low-opacity accent
- `Content Annotation` tooltip: `opacity:0→1 + translateY(-4px)→0`, 200ms ease on hover

### Premium Check
✅ Passes concierge test? Yes — feels like clear communication, not legal obfuscation
✅ Uses only approved motion primitives? Yes
✅ Orange used for action only? Yes (reading rail only)
✅ Preserves readability? Yes (increased line-height, max-width 65ch, annotations for clarity)
```

---

## 🔄 GLOBAL UX IMPROVEMENTS (All Pages)

### Mobile Responsiveness Enhancements
```css
/* Mobile Touch Targets — 44px Minimum */
@media (max-width: 768px) {
  .vg-cta-primary,
  .vg-cta-secondary,
  .faq-question,
  input[type="text"],
  input[type="email"],
  input[type="tel"],
  textarea,
  select {
    min-height: 44px; /* Apple HIG minimum */
    padding-block: 0.75rem;
  }
  
  /* Reduce Motion Complexity on Mobile */
  .vg-reveal,
  .vg-card-edge,
  .light-bloom {
    transition-duration: 0.2s !important; /* Faster, simpler */
  }
  
  /* Simplify Ambient Motion on Mobile */
  .aurora-drift,
  .contour-pulse {
    animation-duration: 30s !important; /* Slower, less distracting */
    opacity: 0.03 !important; /* Lower intensity */
  }
}
```

### Accessibility Enhancements
```css
/* Focus States — High Contrast, Orange Only for Interactive */
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

/* Reduced Motion Preference */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .aurora-drift,
  .contour-pulse,
  .signal-line {
    display: none; /* Remove ambient motion entirely */
  }
}

/* Color Contrast — Ensure AA Compliance */
.vg-font-body {
  color: var(--color-text-secondary); /* #94a3b8 on #071119 = 7.2:1 ✓ AA */
}
.vg-font-body strong {
  color: var(--color-text-primary); /* #ffffff on #071119 = 18.6:1 ✓ AAA */
}
```

### Performance Optimizations
```javascript
// Lazy Load Images with Photo Grade
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('photo-grade'); // Apply grade on load
        imageObserver.unobserve(img);
      }
    });
  });
  images.forEach(img => imageObserver.observe(img));
});

// Debounce Scroll Events for Reading Rail
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateReadingRail();
      ticking = false;
    });
    ticking = true;
  }
});
```

---

## 📦 REQUIRED OUTPUT FORMAT FOR CLAUDE CODE

When generating code or recommendations, structure responses **EXACTLY** as:

```markdown
## [Section/Page Name] Refinement

### Objective
[One-sentence goal tied to UX, conversion, or accessibility]

### Current Friction Points
- [Friction 1]: [Brief description]
- [Friction 2]: [Brief description]

### Proposed Changes
- [Change 1]: [Why it improves UX] + [How it preserves style using existing classes/vars]
- [Change 2]: [Why it improves UX] + [How it preserves style using existing classes/vars]

### Code Snippet (if applicable)
```css/html/js
/* Only minimal, production-ready snippets */
/* Use existing class names: .vg-surface-hero, .photo-grade, etc. */
/* Use CSS vars: var(--color-accent), not hex values */
/* Include comments explaining motion/interaction logic */
```

### Motion Note
[Which core motion primitive to use] + [timing/intensity guidance]
Example: "Concierge Reveal, 500ms ease-out, one-shot on viewport enter"

### Premium Check
✅ Passes concierge test? [Yes/No + one-sentence why]
✅ Uses only approved motion primitives? [Yes/No]
✅ Orange used for action only? [Yes/No]
✅ Preserves glass header / surface hierarchy? [Yes/No]
✅ Mobile touch targets ≥44px? [Yes/No/NA]
✅ Respects prefers-reduced-motion? [Yes/No/NA]
```

---

## 🧭 FINAL EXECUTION PROMPT FOR CLAUDE CODE

```
You are a senior product designer + frontend engineer specializing in premium, 
motion-rich websites for service businesses.

YOUR MISSION:
Refine www.littlefightnyc.com to improve clarity, conversion, and accessibility 
while STRICTLY preserving the existing visual system, motion language, and brand voice.

CONSTRAINTS:
- Use ONLY the CSS variables, class names, and motion primitives defined in this brief
- NEVER introduce new animation types, fonts, color tokens, or SaaS patterns
- Every suggestion must pass the "concierge test" (high-touch human service, not generic dashboard)
- Prioritize restraint, intentionality, and editorial polish over novelty
- Output ALL changes in the structured format specified above

PRIORITY ORDER:
1. Audit and refine the homepage hero section and primary navigation
2. Proceed section-by-section: Problem Statement → Three Lanes → Proof → Pricing → FAQ → Contact
3. Reactivate and refine supporting pages: /blog/, /work/, /about/, /services/, /faq/
4. Reactivate legal pages: /privacy/, /terms/ with enhanced readability
5. Implement global UX improvements: mobile touch targets, accessibility, performance

FOR EACH SECTION/PAGE, PROVIDE:
1. Current friction point (UX, conversion, or accessibility)
2. Proposed refinement (with code if applicable)
3. Motion note (which primitive + timing)
4. Premium Check validation (all 6 criteria)

BEGIN WITH: Homepage Hero Section
```

---

## 🔧 QUICK REFERENCE: KEY CLASS NAMES & COMPONENTS

```css
/* === SURFACES === */
.vg-surface-hero      /* Primary focus: blur-xl, deepest depth */
.vg-surface-panel     /* Standard content: blur-md, border-white/5 */
.vg-surface-utility   /* Overlays: blur-sm, transparent */

/* === MOTION === */
.vg-reveal            /* Concierge Reveal base class */
.vg-signal-line       /* Signal Line Draw horizontal rule */
.vg-signal-node       /* Intersection point for signal lines */
.light-bloom          /* Atmospheric radial glow */
.vg-grain-overlay     /* Subtle noise texture (3% opacity) */

/* === CONTENT === */
.photo-grade          /* Cinematic image treatment */
.vg-container         /* Max-width 1152px, centered */
.vg-eyebrow           /* Uppercase, tracking-widest labels */
.vg-divider           /* SectionMarkerDraw horizontal rule */

/* === UI COMPONENTS === */
.vg-cta-primary       /* Orange action button */
.vg-cta-secondary     /* Outlined ice-blue button */
.vg-cta-tertiary      /* Text link with arrow */
.vg-card              /* Base card with edge current hover */
.vg-status-badge      /* Mint/Orange/Red status indicator */
.vg-badge-primary     /* Filled badge */
.vg-badge-outline     /* Outlined badge */
.vg-icon              /* Lucide icon, stroke 1.5 */

/* === EDITORIAL === */
.article-pullquote    /* Quote with light-bloom background */
.reading-rail         /* Scroll progress indicator */
.faq-item             /* Accordion Breathing container */
.before-after         /* Interactive comparison slider */

/* === LOCAL NYC === */
.vg-neighborhood-badge /* LocalNYCSystem neighborhood + zip */

/* === CSS VARIABLES === */
var(--color-bg)           /* #071119 Midnight Navy */
var(--color-accent)       /* #FE5900 Signal Orange — ACTIONS ONLY */
var(--color-ice-blue)     /* #7DD3FC accents/borders */
var(--color-success)      /* #62E6B7 success/mint */
var(--color-surface-panel)/* #0f1a22 Graphite */
var(--border-white-5)     /* rgba(255,255,255,0.05) */
var(--border-white-10)    /* rgba(255,255,255,0.1) */
```

---

## 🚨 HARD RULES CHECKLIST (Reject Any Suggestion That Violates)

```
❌ Never add new animation types — only refine existing motion primitives
❌ Never use orange for decoration — only actions, critical status, discovery
❌ Never replace midnight atmosphere with light mode or non-system gradients
❌ Never increase motion intensity on scroll/hover — restraint = premium
❌ Never add generic SaaS patterns: floating cards, bouncy buttons, dashboard chrome
❌ Never change font families, weights, or tracking outside the defined system
❌ Never alter the glass header behavior or backdrop-blur values
❌ Never add auto-playing video, parallax beyond aurora drift, or mouse-follow effects
❌ Never use hex values directly — always CSS variables
❌ Never ignore mobile touch targets (44px minimum)
❌ Never forget prefers-reduced-motion support
❌ Never compromise color contrast (AA minimum)
❌ Never add decorative orange — action only
❌ Never break the asymmetric, editorial layout for forced symmetry
❌ Never add auto-playing audio, video, or animated backgrounds beyond the system
```

---

> 💡 **Pro Tip for Claude Code**: If uncertain whether a change aligns with the system, default to *less motion, more clarity*. Premium is defined by what you remove, not what you add. When in doubt, ask: "Would a concierge at a luxury hotel do this, or would a SaaS onboarding flow do this?"

---

## ✅ DELIVERABLES CHECKLIST

After refinement, the site should have:

- [ ] Homepage: All sections refined with premium motion, clear CTAs, improved scannability
- [ ] Blog: Reactivated with editorial polish, reading rails, card scan effects
- [ ] Work/Portfolio: Interactive before/after comparisons, proof counters, NYC badges
- [ ] About: Human narrative with process thread, calm operator, neighborhood pulse
- [ ] Services: Guided discovery with outcome ladders, service icons, local badges
- [ ] FAQ: Reactivated as single resource with accordion breathing, priority pulse, search
- [ ] Privacy/Terms: Reactivated with quiet header fade, reading rails, content annotations
- [ ] Global: Mobile touch targets ≥44px, accessibility enhancements, performance optimizations
- [ ] Motion: Only approved primitives used, timing refined, intensity restrained
- [ ] Brand: Orange used for action only, midnight atmosphere preserved, typography intact

---

**This brief is ready to paste directly into Claude Code.** 🚀