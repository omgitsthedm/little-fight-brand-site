# MDI Icon Reference -- Little Fight NYC

Complete inventory of every Material Design Icon used across the Little Fight NYC brand site rebuild.

**Source:** `/Desktop/LiFi NYC/Brand/Website-Rebuild/`
**MDI Library:** `/Desktop/LiFi NYC/Shared/_libraries/mdi/node_modules/@mdi/svg/svg/`
**Generated:** 2026-03-10

---

## Summary

- **30 unique icons** used across the site
- **0 icons** found in archived animations (`money-splash.html`, `overhaul-reference.html`)
- **0 icons** found in pill scroll demo (`pill-scroll-demo/index.html`)
- All icons use the `<i class="mdi mdi-{name}">` font class pattern
- SVG equivalents are provided in `./svg/` for every icon

---

## Font Assets (in `./fonts/`)

| File | Size | Purpose |
|------|------|---------|
| `mdi-subset.woff2` | 3.4 KB | Subset font -- only the 30 icons used on the site |
| `mdi-subset.woff` | 4.3 KB | Subset font (WOFF fallback) |
| `mdi-subset.css` | 2.5 KB | CSS for the subset font (maps class names to glyphs) |
| `materialdesignicons-webfont.woff2` | 403 KB | Full MDI webfont (7,447 icons) |
| `materialdesignicons-webfont.woff` | 588 KB | Full MDI webfont (WOFF fallback) |
| `materialdesignicons.min.css` | 347 KB | Full MDI CSS (all icon class definitions) |

The site preloads `mdi-subset.woff2` for performance (only 3.4 KB) and falls back to the full webfont when needed.

---

## Icon Inventory

### Service Wayfinder Icons

These icons appear in the service card grid on the homepage and as wayfinder markers at the top of each service detail page.

| # | Icon Class | SVG File | Visual | Pages |
|---|-----------|----------|--------|-------|
| 1 | `mdi mdi-lan-connect` | `lan-connect.svg` | Network/connected nodes | Homepage service grid, All 7 area pages (service cards), On-Site IT Support wayfinder |
| 2 | `mdi mdi-monitor-dashboard` | `monitor-dashboard.svg` | Monitor with dashboard layout | Homepage service grid, All 7 area pages (service cards), Website Design wayfinder |
| 3 | `mdi mdi-map-marker-radius` | `map-marker-radius.svg` | Map pin with radius circle | Homepage service grid, All 7 area pages (service cards), Local SEO & Google Ads wayfinder |
| 4 | `mdi mdi-cellphone` | `cellphone.svg` | Smartphone outline | Homepage service grid, Apple Device Setup wayfinder |
| 5 | `mdi mdi-cash-register` | `cash-register.svg` | Point-of-sale register | Homepage service grid, All 7 area pages (service cards), POS & Register Setup wayfinder, Cybersecurity blog pill |
| 6 | `mdi mdi-home-automation` | `home-automation.svg` | Smart home/connected house | Homepage service grid, Smart Systems wayfinder |
| 7 | `mdi mdi-compass-outline` | `compass-outline.svg` | Compass (navigation/guidance) | Tech Consulting wayfinder, Solutions page wayfinder |
| 8 | `mdi mdi-cart-outline` | `cart-outline.svg` | Shopping cart | E-Commerce Setup wayfinder |
| 9 | `mdi mdi-palette-outline` | `palette-outline.svg` | Artist palette | Branding & Identity wayfinder |
| 10 | `mdi mdi-city` | `city.svg` | City skyline | Industries page wayfinder |

### City Animation Icons (Homepage)

These icons appear inside the animated NYC storefront cityscape on the homepage hero section.

| # | Icon Class | SVG File | Visual | Context |
|---|-----------|----------|--------|---------|
| 11 | `mdi mdi-bread-slice` | `bread-slice.svg` | Loaf/slice of bread | Bakery storefront window (round window) |
| 12 | `mdi mdi-door-open` | `door-open.svg` | Open door | Storefront door (bakery + boutique buildings) |
| 13 | `mdi mdi-coffee` | `coffee.svg` | Coffee cup | Cafe chalkboard menu sign |
| 14 | `mdi mdi-door-closed` | `door-closed.svg` | Closed door | Cafe narrow door |
| 15 | `mdi mdi-home-city` | `home-city.svg` | Building/house cluster | Co-working space arched doorway |
| 16 | `mdi mdi-silverware-fork-knife` | `silverware-fork-knife.svg` | Fork and knife | Restaurant double doors |

### Contact & Communication Icons

| # | Icon Class | SVG File | Visual | Pages |
|---|-----------|----------|--------|-------|
| 17 | `mdi mdi-email-outline` | `email-outline.svg` | Envelope (outlined) | Homepage footer contact, Contact page |
| 18 | `mdi mdi-phone` | `phone.svg` | Telephone handset (solid) | All 7 area pages ("Call Now" button), Homepage |
| 19 | `mdi mdi-phone-outline` | `phone-outline.svg` | Telephone handset (outlined) | Homepage footer contact, Contact page |
| 20 | `mdi mdi-map-marker` | `map-marker.svg` | Map pin (solid) | Homepage footer "Based in", Contact page, All 7 area pages |

### Blog & Insights Icons

These icons serve as article hero icons, callout pill icons, and blog index card icons.

| # | Icon Class | SVG File | Visual | Pages |
|---|-----------|----------|--------|-------|
| 21 | `mdi mdi-shield-lock-outline` | `shield-lock-outline.svg` | Shield with lock | Cybersecurity blog (hero + pills), Protecting Kids blog pill, Blog index card, What Google Looks For callout |
| 22 | `mdi mdi-cloud-check-outline` | `cloud-check-outline.svg` | Cloud with checkmark | Cybersecurity blog pill ("Practical controls") |
| 23 | `mdi mdi-robot-outline` | `robot-outline.svg` | Robot head/face | AI/Google article callouts, Protecting Kids blog (hero + pills), Blog index cards, Why Invisible article callouts |
| 24 | `mdi mdi-chart-line` | `chart-line.svg` | Line chart trending up | What Google Looks For article icon + callout, Why Invisible callout, AI/Google article callout, Blog index card, NYC Digital blog pill |
| 25 | `mdi mdi-eye-off-outline` | `eye-off-outline.svg` | Eye with slash (hidden) | Why Invisible article icon + callout, Blog index card |
| 26 | `mdi mdi-storefront-outline` | `storefront-outline.svg` | Storefront/shop facade | NYC Digital blog (hero + pill), Blog index card |
| 27 | `mdi mdi-google` | `google.svg` | Google "G" logo | NYC Digital blog pill ("Search-ready presence") |
| 28 | `mdi mdi-web` | `web.svg` | Globe/world wide web | What Google Looks For callout ("Clear structure") |

### UI / Utility Icons

| # | Icon Class | SVG File | Visual | Pages |
|---|-----------|----------|--------|-------|
| 29 | `mdi mdi-chevron-down` | `chevron-down.svg` | Downward-pointing chevron/arrow | Homepage FAQ accordion, All 9 service page FAQ accordions |
| 30 | `mdi mdi-replay` | `replay.svg` | Circular replay/refresh arrow | Homepage city animation "Replay" button |

---

## Usage by Page

### Homepage (`index.html`)
- `mdi-bread-slice` -- city animation bakery window
- `mdi-door-open` -- city animation storefront doors (x2)
- `mdi-coffee` -- city animation cafe chalkboard
- `mdi-door-closed` -- city animation cafe door
- `mdi-home-city` -- city animation co-working door
- `mdi-silverware-fork-knife` -- city animation restaurant doors
- `mdi-replay` -- city animation replay button
- `mdi-lan-connect` -- service grid (IT support)
- `mdi-monitor-dashboard` -- service grid (website design)
- `mdi-map-marker-radius` -- service grid (local SEO)
- `mdi-cellphone` -- service grid (Apple devices)
- `mdi-cash-register` -- service grid (POS setup)
- `mdi-home-automation` -- service grid (smart systems)
- `mdi-phone` -- "Phone & video" CTA
- `mdi-chevron-down` -- FAQ accordions (x5)
- `mdi-email-outline` -- footer contact
- `mdi-phone-outline` -- footer contact
- `mdi-map-marker` -- footer "Based in"

### Service Pages (all share `mdi-chevron-down` for FAQ accordions x6 each)
- `services/on-site-it-support-nyc/` -- `mdi-lan-connect`
- `services/website-design-small-business-nyc/` -- `mdi-monitor-dashboard`
- `services/local-seo-and-google-ads-nyc/` -- `mdi-map-marker-radius`
- `services/apple-device-setup-and-management/` -- `mdi-cellphone`
- `services/pos-and-register-setup-nyc/` -- `mdi-cash-register`
- `services/smart-home-services-nyc/` -- `mdi-home-automation`
- `services/ecommerce-setup-shopify-square-woocommerce/` -- `mdi-cart-outline`
- `services/tech-consulting-small-business/` -- `mdi-compass-outline`
- `services/branding-and-identity-design/` -- `mdi-palette-outline`

### Area Pages (all 7 share the same set)
Each area page (`east-village`, `lower-east-side`, `meatpacking-district`, `midtown`, `soho`, `upper-east-side`, `west-village`) uses:
- `mdi-lan-connect` -- IT support service card
- `mdi-monitor-dashboard` -- website design service card
- `mdi-map-marker-radius` -- local SEO service card
- `mdi-cash-register` -- POS setup service card
- `mdi-phone` -- "Call Now" button
- `mdi-map-marker` -- (via contact/footer context in some pages)

### Contact Page (`contact/index.html`)
- `mdi-email-outline` -- email contact item
- `mdi-phone-outline` -- phone contact item
- `mdi-map-marker` -- "Based in" contact item

### Solutions Page (`solutions/index.html`)
- `mdi-compass-outline` -- wayfinder

### Industries Page (`industries.html`)
- `mdi-city` -- wayfinder

### Blog Index (`blog/index.html`)
- `mdi-chart-line` -- insight card icon
- `mdi-eye-off-outline` -- insight card icon
- `mdi-robot-outline` -- insight card icon (x2)
- `mdi-shield-lock-outline` -- insight card icon
- `mdi-storefront-outline` -- insight card icon

### Blog: Cybersecurity for Small Business
- `mdi-shield-lock-outline` -- hero icon + callout pill
- `mdi-cash-register` -- callout pill ("POS safety")
- `mdi-cloud-check-outline` -- callout pill ("Practical controls")

### Blog: Protecting Kids from AI
- `mdi-robot-outline` -- hero icon + callout pills (x2)
- `mdi-shield-lock-outline` -- callout pill ("Privacy guardrails")

### Blog: NYC Small Business Digital
- `mdi-storefront-outline` -- hero icon + callout pill
- `mdi-google` -- callout pill ("Search-ready presence")
- `mdi-chart-line` -- callout pill ("Revenue resilience")

### Article: What Google Looks For
- `mdi-chart-line` -- article icon + callout
- `mdi-shield-lock-outline` -- callout ("Trust markers")
- `mdi-web` -- callout ("Clear structure")

### Article: Why Business Websites Will Be Invisible
- `mdi-eye-off-outline` -- article icon + callout
- `mdi-robot-outline` -- callout + secondary article icon
- `mdi-chart-line` -- callout ("Lead decline risk")

### Article: AI & Google Broke the Internet
- `mdi-robot-outline` -- callouts (x2) + secondary article icon
- `mdi-chart-line` -- callout ("Visibility strategy")

---

## Archived Animations (No MDI Usage Found)

The following archived files were checked and contain **no MDI icon references**:
- `money-splash.html` -- uses pure CSS/canvas animation, no icon font
- `overhaul-reference.html` -- legacy layout reference, no icon font
- `pill-scroll-demo/index.html` -- demo animation, no icon font

---

## SVG Files (in `./svg/`)

All 30 SVG files are sourced from the full MDI library at `@mdi/svg/svg/`.
They can be used as inline SVGs, `<img>` sources, or background images as an alternative to the webfont approach.

```
bread-slice.svg
cart-outline.svg
cash-register.svg
cellphone.svg
chart-line.svg
chevron-down.svg
city.svg
cloud-check-outline.svg
coffee.svg
compass-outline.svg
door-closed.svg
door-open.svg
email-outline.svg
eye-off-outline.svg
google.svg
home-automation.svg
home-city.svg
lan-connect.svg
map-marker.svg
map-marker-radius.svg
monitor-dashboard.svg
palette-outline.svg
phone.svg
phone-outline.svg
replay.svg
robot-outline.svg
shield-lock-outline.svg
silverware-fork-knife.svg
storefront-outline.svg
web.svg
```

---

## How to Use

### Font approach (current site method)
```html
<!-- Load the subset CSS (recommended for production) -->
<link rel="stylesheet" href="fonts/mdi-subset.css">

<!-- Or load the full library CSS -->
<link rel="stylesheet" href="fonts/materialdesignicons.min.css">

<!-- Use in HTML -->
<i class="mdi mdi-lan-connect" aria-hidden="true"></i>
```

### SVG approach (alternative)
```html
<!-- Inline SVG -->
<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
  <!-- paste SVG path data here -->
</svg>

<!-- Image tag -->
<img src="svg/lan-connect.svg" alt="" width="24" height="24">
```

### Style rule
Per the LiFi NYC design system: **monoline outline icons only, no filled defaults**.
When an outline variant exists (e.g., `phone-outline` vs `phone`), prefer the outline version for standard UI contexts. Solid variants are acceptable for compact contexts like CTA buttons.
