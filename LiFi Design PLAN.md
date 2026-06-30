# Little Fight NYC Unified Handoff v2

## Summary
As of March 7, 2026, the live system is two public properties: `littlefightnyc.com` and `audits.littlefightnyc.com`. Keep that split, but make them one brand family with two jobs:
- Main site: trust, services, proof, contact, story.
- Audit site: fast conversion for both public self-serve audits and private prospect-specific reports.

Use the fuller Little Fight codebase as the main-site baseline, not the stripped alternate snapshot. Keep `audits.littlefightnyc.com` as the only audit domain, and treat the audit product as a first-class part of the funnel rather than a side link.

## Brand And UX System
- Keep the core principle: orange is the signature, not the wallpaper. Apply an explicit usage ratio of roughly 70-80% neutral surfaces, 15-20% dark surfaces, 5-10% orange accents.
- Replace aspirational font stacks with production-safe defaults:
  - Headlines: `Space Grotesk, Inter, system-ui, sans-serif`
  - Body: `Inter, system-ui, sans-serif`
  - Split typography tokens into usable variables such as weight, tracking, and line-height; do not use shorthand-like custom props.
- Main-site header: `Services | How It Works | Work | FAQ | Contact` plus two CTAs, secondary `Free Audit` and primary `Get Help Today`.
- Audit-site header: minimal brand link, `How It Works`, `FAQ`, and `Audit My Site`.
- Footer split:
  - Main site gets the full footer.
  - Audit site gets a slim footer with brand, privacy, terms, contact, and `Need help fixing this?`.
- Visual rules:
  - Do: use calm backgrounds, generous whitespace, monochrome line icons, restrained motion, orange on CTA moments.
  - Don’t: use emoji as primary iconography, fill cards with orange by default, over-animate, or give the audit site a brochure-style footer.

## Main Site Structure And Copy
- Homepage order is fixed: Hero -> business-type strip -> 6 core services -> how it works -> proof/results -> why Little Fight -> audit CTA band -> FAQ -> contact -> footer.
- Main hero copy:
  - Eyebrow: `NYC’s Friendliest Tech Support`
  - Headline: `We fix the tech problems slowing down your business.`
  - Primary CTA: `Get Help Today`
  - Secondary CTA: `Free Website Audit`
  - Trust line: `First hour of consulting is free.`
- Replace the emoji business strip with custom line icons and tighter labels: `Cafés`, `Retail`, `Bars`, `Salons`.
- Cap homepage services at 6 cards:
  - On-Site IT Support
  - Website Design
  - Local SEO & Ads
  - POS & Registers
  - Apple Device Setup
  - Free Website Audit
- Move Branding, E-Commerce, and Consulting into secondary pages or grouped service content.
- Replace copy that reads too loose:
  - Change “look legit” to “look clear, polished, and memorable.”
- Standardize proof as a reusable module with: client name, business type, problem, what we fixed, result, optional quote.

## Audit Site Structure And Flows
- Public audit homepage should use a sharper business-value hook:
  - Headline: `See what’s slowing down your website and your sales.`
  - Subhead keeps the promise of speed, SEO, mobile, and conversion insight in under 60 seconds.
- Public audit page structure: hero form -> what you’ll get -> how it works -> FAQ -> help CTA -> slim footer.
- Private report pages under `/report/:slug` should include:
  - Company-specific hero and audit date
  - Overall score and grade
  - Category breakdown
  - Key findings with severity
  - Revenue or conversion impact
  - Recommended roadmap
  - CTA back to Little Fight contact/help flow
- Keep both audit roles:
  - Public self-serve lead magnet
  - Private outreach/prospect reports
- Audit success states and report pages must always offer a route back to the main site via `Talk to our team`, `Work`, or `Contact`.

## Shared Interfaces, Tracking, And Deployment
- Shared contract across both properties:
  - one token system for color, radius, spacing, motion, and button/form/card styles
  - one icon style
  - one logo system
  - one CTA hierarchy
- Main-site to audit links should carry source metadata, for example `source=main_site` and placement tags like `hero`, `services`, or `footer`.
- Audit-site to main-site help links should carry source metadata such as `source=audit_tool` and intent tags like `fix_help`.
- Public audit endpoints remain part of the system: `/api/run-audit`, `/api/status`, `/api/og`, `/api/report-views`, plus `/report/:slug` for private pages.
- Deployment default:
  - Main site remains Git-backed and becomes the canonical marketing codebase.
  - Audit site should be moved from manual Netlify-only source into tracked Git before redesign work, to eliminate deploy drift and make brand sharing maintainable.

## Test Plan
- Re-audit both live properties after the redesign; main site should clear current sitemap, metadata, accessibility, and internal-linking weaknesses, while the audit site should stay in A-range.
- Verify mobile-first behavior: 16px+ body copy, 44px+ targets, fast above-the-fold hero, simple audit form, and contact access within two taps.
- Verify accessibility: labeled fields, visible focus, one `<main>`, skip link, heading order, ARIA live form states, reduced-motion compliance.
- Verify conversion paths:
  - main-site hero, nav, services, and footer expose both `Get Help Today` and `Free Website Audit`
  - audit flow always routes users toward help after results
  - private report views preserve tracking and CTA clarity
- Verify content integrity:
  - no singular `audit.littlefightnyc.com` references
  - no emoji-led UI
  - proof module uses the same structure everywhere
  - orange remains selective and intentional

## Assumptions And Defaults
- The correct audit domain is `audits.littlefightnyc.com`.
- The desired tone is warm premium, not gritty or SaaS-cold.
- `Work` replaces `Proof` in top-level navigation, while “proof” remains a content module concept.
- The combined system is dual-path by default: service inquiry and audit lead generation are equally important.
