/**
 * Midnight Shell Rebuild Script
 * Converts all static HTML pages to the midnight design system.
 * Extracts main content from each page, wraps in unified nav/footer shell.
 * Run with: node _rebuild-midnight.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

// ── NAV + FOOTER SHELL FRAGMENTS ──────────────────────────────

const HEAD_COMMON = (title, description, canonical) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${esc(description)}" />
    <meta name="theme-color" content="#FE5900" />

    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="https://littlefightnyc.com/og-image.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="https://littlefightnyc.com/og-image.jpg" />
    <link rel="canonical" href="${canonical}" />

    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

    <title>${esc(title)}</title>

    <!-- Design system only -->
    <link rel="stylesheet" href="/css/design-system.css?v=20260318" />
    <link rel="stylesheet" href="/css/consent-banner.css?v=20260214a" />
  </head>`;

const NAV = `
    <!-- Reading Rail -->
    <div class="reading-rail" aria-hidden="true"></div>

    <!-- Skip Link -->
    <a href="#main-content" class="vg-skip-link">Skip to main content</a>

    <!-- NAVIGATION -->
    <nav class="vg-nav" role="navigation" aria-label="Main navigation">
      <div class="vg-nav-inner">
        <a href="/" style="display:flex;align-items:center;gap:0.75rem;text-decoration:none;">
          <div style="width:2.25rem;height:2.25rem;border-radius:0.5rem;background:var(--color-accent);display:flex;align-items:center;justify-content:center;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:0.75rem;color:#fff;line-height:1;">LF</div>
          <span class="vg-font-heading" style="font-size:1rem;color:var(--color-text-primary);white-space:nowrap;">Little Fight NYC</span>
        </a>

        <div class="vg-nav-links">
          <a class="vg-nav-link" href="/#services">How We Help</a>
          <a class="vg-nav-link" href="/work/">Work</a>
          <a class="vg-nav-link" href="/about/">About</a>
          <a class="vg-nav-link" href="/blog/">Blog</a>
          <a class="vg-nav-link" href="/#contact">Contact</a>
        </div>

        <div style="display:none;align-items:center;gap:0.75rem;" class="vg-nav-desktop-ctas">
          <a href="tel:646-360-0318" class="vg-cta-secondary" style="padding:0.5rem 1rem;font-size:0.875rem;">646-360-0318</a>
          <a href="/contact/" class="vg-cta-primary" style="padding:0.5rem 1.25rem;font-size:0.875rem;">Book a Private Consult</a>
        </div>

        <button class="vg-nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false"
          style="display:flex;align-items:center;justify-content:center;width:2.85rem;height:2.85rem;border-radius:1rem;border:1px solid var(--border-white-5);background:rgba(9,19,30,0.68);color:var(--color-text-secondary);cursor:pointer;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path>
          </svg>
        </button>
      </div>

      <div class="vg-nav-mobile" style="display:none;position:absolute;left:0.75rem;right:0.75rem;top:5rem;border-radius:2rem;border:1px solid var(--border-white-5);background:rgba(9,19,30,0.96);padding:1.5rem;backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);">
        <div style="display:flex;flex-direction:column;gap:0.5rem;">
          <a href="/#services" style="display:block;padding:0.75rem 1rem;border-radius:1rem;color:var(--color-text-primary);text-decoration:none;font-weight:500;">How We Help</a>
          <a href="/work/" style="display:block;padding:0.75rem 1rem;border-radius:1rem;color:var(--color-text-primary);text-decoration:none;font-weight:500;">Work</a>
          <a href="/about/" style="display:block;padding:0.75rem 1rem;border-radius:1rem;color:var(--color-text-primary);text-decoration:none;font-weight:500;">About</a>
          <a href="/blog/" style="display:block;padding:0.75rem 1rem;border-radius:1rem;color:var(--color-text-primary);text-decoration:none;font-weight:500;">Blog</a>
          <a href="/#contact" style="display:block;padding:0.75rem 1rem;border-radius:1rem;color:var(--color-text-primary);text-decoration:none;font-weight:500;">Contact</a>
          <div style="margin-top:0.75rem;display:flex;flex-direction:column;gap:0.75rem;">
            <a href="tel:646-360-0318" class="vg-cta-secondary" style="justify-content:center;">Call 646-360-0318</a>
            <a href="/contact/" class="vg-cta-primary" style="justify-content:center;">Book a Private Consult</a>
          </div>
        </div>
      </div>
    </nav>`;

const FOOTER = `
    <!-- FOOTER -->
    <footer class="vg-footer" style="position:relative;overflow:hidden;border-top:1px solid var(--border-white-10);padding:3rem 1.25rem 2rem;">
      <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(7,17,25,0.14),rgba(7,17,25,0.08) 36%,rgba(7,17,25,0.16) 100%);"></div>

      <div style="position:relative;z-index:10;max-width:80rem;margin:0 auto;">
        <div style="display:grid;gap:2rem;border-bottom:1px solid var(--border-white-10);padding-bottom:2.5rem;margin-bottom:2.5rem;" class="footer-top-grid">

          <!-- Brand block -->
          <div class="vg-surface-panel" style="border-radius:2rem;padding:1.5rem;">
            <a href="/" style="display:flex;align-items:center;gap:1rem;text-decoration:none;">
              <div style="width:3rem;height:3rem;border-radius:0.625rem;background:var(--color-accent);display:flex;align-items:center;justify-content:center;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:1rem;color:#fff;line-height:1;flex-shrink:0;">LF</div>
              <div>
                <div style="font-size:1.5rem;font-weight:700;letter-spacing:-0.03em;color:var(--color-ice-blue);">Little Fight NYC</div>
                <p style="font-size:1rem;line-height:1.6;color:rgba(255,255,255,0.72);">Clearer systems. Better websites. Smarter support.</p>
              </div>
            </a>
            <p style="margin-top:1.5rem;font-size:1.05rem;line-height:1.82;color:rgba(255,255,255,0.7);max-width:42rem;">One trusted partner for websites, business tech, local visibility, and practical modernization for small businesses and households that want technology to feel easier.</p>

            <div style="margin-top:1.5rem;display:flex;flex-wrap:wrap;gap:0.5rem;">
              <span style="border-radius:9999px;border:1px solid var(--border-white-10);background:rgba(255,255,255,0.05);padding:0.5rem 0.75rem;font-size:0.68rem;font-weight:600;text-transform:uppercase;letter-spacing:0.16em;color:rgba(255,255,255,0.62);">First hour free</span>
              <span style="border-radius:9999px;border:1px solid var(--border-white-10);background:rgba(255,255,255,0.05);padding:0.5rem 0.75rem;font-size:0.68rem;font-weight:600;text-transform:uppercase;letter-spacing:0.16em;color:rgba(255,255,255,0.62);">Manhattan on-site</span>
              <span style="border-radius:9999px;border:1px solid var(--border-white-10);background:rgba(255,255,255,0.05);padding:0.5rem 0.75rem;font-size:0.68rem;font-weight:600;text-transform:uppercase;letter-spacing:0.16em;color:rgba(255,255,255,0.62);">Remote nationwide</span>
            </div>

            <div style="margin-top:1.75rem;display:flex;flex-wrap:wrap;gap:0.75rem;">
              <a href="tel:646-360-0318" class="vg-cta-primary">Call 646-360-0318</a>
              <a href="/contact/" class="vg-cta-secondary">Book a Private Consult</a>
            </div>
          </div>

          <!-- Contact + Links -->
          <div style="display:grid;gap:1rem;">
            <div class="vg-surface-panel" style="border-radius:2rem;padding:1.5rem;">
              <h3 style="margin-bottom:1.25rem;font-size:0.875rem;font-weight:600;text-transform:uppercase;letter-spacing:0.18em;color:rgba(255,255,255,0.4);">Reach Us</h3>
              <div style="display:grid;gap:0.75rem;">
                <div style="border-radius:1.4rem;border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.03);padding:1rem;">
                  <p style="font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.14em;color:rgba(255,255,255,0.4);">Call or text</p>
                  <a href="tel:646-360-0318" style="display:inline-flex;margin-top:0.25rem;font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.76);text-decoration:none;">646-360-0318</a>
                </div>
                <div style="border-radius:1.4rem;border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.03);padding:1rem;">
                  <p style="font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.14em;color:rgba(255,255,255,0.4);">Email</p>
                  <a href="mailto:hello@littlefightnyc.com" style="display:inline-flex;margin-top:0.25rem;font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.76);text-decoration:none;">hello@littlefightnyc.com</a>
                </div>
                <div style="border-radius:1.4rem;border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.03);padding:1rem;">
                  <p style="font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.14em;color:rgba(255,255,255,0.4);">Based in</p>
                  <p style="margin-top:0.25rem;font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.76);">Manhattan, NYC</p>
                </div>
              </div>
            </div>

            <div style="display:grid;gap:1rem;grid-template-columns:1fr 1fr;">
              <div class="vg-surface-utility" style="border-radius:2rem;padding:1.5rem;">
                <h3 style="margin-bottom:1.25rem;font-size:0.875rem;font-weight:600;text-transform:uppercase;letter-spacing:0.18em;color:rgba(255,255,255,0.4);">Browse</h3>
                <div style="display:grid;gap:1.5rem;">
                  <div>
                    <p class="vg-eyebrow" style="margin-bottom:0.75rem;">Company</p>
                    <ul style="list-style:none;padding:0;display:grid;gap:0.5rem;">
                      <li><a href="/" style="font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.66);text-decoration:none;">Home</a></li>
                      <li><a href="/#services" style="font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.66);text-decoration:none;">How We Help</a></li>
                      <li><a href="/work/" style="font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.66);text-decoration:none;">Work</a></li>
                      <li><a href="/about/" style="font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.66);text-decoration:none;">About</a></li>
                      <li><a href="/blog/" style="font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.66);text-decoration:none;">Blog</a></li>
                      <li><a href="/#contact" style="font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.66);text-decoration:none;">Contact</a></li>
                    </ul>
                  </div>
                  <div>
                    <p class="vg-eyebrow" style="margin-bottom:0.75rem;">Services</p>
                    <ul style="list-style:none;padding:0;display:grid;gap:0.5rem;">
                      <li><a href="/services/website-design-small-business-nyc/" style="font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.66);text-decoration:none;">Website Design</a></li>
                      <li><a href="/services/on-site-it-support-nyc/" style="font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.66);text-decoration:none;">IT Support</a></li>
                      <li><a href="/services/local-seo-and-google-ads-nyc/" style="font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.66);text-decoration:none;">Local SEO</a></li>
                      <li><a href="/services/pos-and-register-setup-nyc/" style="font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.66);text-decoration:none;">POS Systems</a></li>
                      <li><a href="/services/smart-home-services-nyc/" style="font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.66);text-decoration:none;">Smart Systems</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="vg-surface-utility" style="border-radius:2rem;padding:1.5rem;">
                <h3 style="margin-bottom:1rem;font-size:0.875rem;font-weight:600;text-transform:uppercase;letter-spacing:0.18em;color:rgba(255,255,255,0.4);">Resources</h3>
                <ul style="list-style:none;padding:0;display:grid;gap:0.625rem;">
                  <li><a href="https://audits.littlefightnyc.com/" style="font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.66);text-decoration:none;">Audit Your Website</a></li>
                  <li><a href="/faq.html" style="font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.66);text-decoration:none;">FAQ</a></li>
                  <li><a href="/privacy.html" style="font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.66);text-decoration:none;">Privacy Policy</a></li>
                  <li><a href="/terms.html" style="font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.66);text-decoration:none;">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1rem;">
          <p style="font-size:0.875rem;line-height:1.7;color:rgba(255,255,255,0.42);max-width:50rem;">&copy; 2026 Little Fight NYC. Built in New York for owners, teams, and households who want a calmer relationship with technology.</p>
          <div style="display:flex;gap:1rem;font-size:0.875rem;color:rgba(255,255,255,0.4);">
            <a href="/privacy.html" style="color:rgba(255,255,255,0.4);text-decoration:none;">Privacy Policy</a>
            <a href="/terms.html" style="color:rgba(255,255,255,0.4);text-decoration:none;">Terms of Service</a>
          </div>
        </div>

        <p style="text-align:center;margin-top:2rem;font-size:0.875rem;font-weight:500;color:var(--color-accent);">Designed, Hosted and Cared For by LittleFightNYC.com</p>
      </div>
    </footer>`;

const SCRIPTS = `
    <script src="/js/consent-banner.js" defer></script>
    <script src="/js/motion.js" defer></script>`;

const PAGE_STYLES = `
    <style>
      .footer-top-grid { grid-template-columns: 1fr; }
      @media (min-width: 1024px) {
        .footer-top-grid { grid-template-columns: 1.06fr 0.94fr; }
      }
      @media (min-width: 1024px) {
        .vg-nav-desktop-ctas { display: flex !important; }
        .vg-nav-toggle { display: none !important; }
      }
    </style>`;

// ── HELPERS ──────────────────────────────────────────────────

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function extractMainContent(html) {
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) return mainMatch[1].trim();
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    let body = bodyMatch[1];
    body = body.replace(/<nav[\s\S]*?<\/nav>/gi, '');
    body = body.replace(/<footer[\s\S]*?<\/footer>/gi, '');
    body = body.replace(/<noscript>[\s\S]*?<\/noscript>/gi, '');
    return body.trim();
  }
  return '';
}

function extractSchemaScripts(html) {
  const scripts = [];
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    scripts.push(`    <script type="application/ld+json">\n${m[1].trim()}\n    </script>`);
  }
  return scripts.join('\n');
}

function extractMeta(html, name) {
  if (name === 'title') {
    const m = html.match(/<title>([^<]+)<\/title>/i);
    return m ? m[1].trim() : 'Little Fight NYC';
  }
  if (name === 'description') {
    const m = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
    return m ? m[1].trim() : '';
  }
  if (name === 'canonical') {
    const m = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
    return m ? m[1].trim() : 'https://littlefightnyc.com/';
  }
  return '';
}

function cleanInlineStyles(content) {
  content = content.replace(/color:\s*#222\b/g, 'color:var(--color-text-primary)');
  content = content.replace(/color:\s*#444\b/g, 'color:var(--color-text-secondary)');
  content = content.replace(/color:\s*#666\b/g, 'color:var(--color-text-secondary)');
  content = content.replace(/color:\s*#888\b/g, 'color:var(--color-text-muted)');
  content = content.replace(/background:\s*#f5f5f5\b/g, 'background:rgba(255,255,255,0.05)');
  content = content.replace(/background:\s*#222\b/g, 'background:rgba(255,255,255,0.08)');
  content = content.replace(/border-top:\s*1px solid #e0e0e0/g, 'border-top:1px solid var(--border-white-10)');
  content = content.replace(/class="btn btn-primary"/g, 'class="vg-cta-primary"');
  content = content.replace(/class="btn btn-secondary"/g, 'class="vg-cta-secondary"');
  content = content.replace(/class="section-eyebrow"/g, 'class="vg-eyebrow"');
  content = content.replace(/style="color: #407C8A;/g, 'style="color:var(--color-accent);');
  content = content.replace(/color: #fff/g, 'color:var(--color-text-primary)');
  return content;
}

function wrapInMidnightShell(content, title, description, canonical, schemas) {
  return `${HEAD_COMMON(title, description, canonical)}
${schemas ? schemas + '\n' : ''}
  <body class="midnight-shell">
${NAV}

    <main id="main-content">
${content}
    </main>

${FOOTER}
${SCRIPTS}
${PAGE_STYLES}
  </body>
</html>`;
}

// ── BLOG POST TEMPLATE ─────────────────────────────────────

function buildBlogPost(absPath, originalHtml) {
  const title = extractMeta(originalHtml, 'title');
  const desc = extractMeta(originalHtml, 'description');
  const canonical = extractMeta(originalHtml, 'canonical');
  const schemas = extractSchemaScripts(originalHtml);

  let mainContent = extractMainContent(originalHtml);
  mainContent = mainContent.replace(/<section class="accent-photo-band[\s\S]*?<\/section>/gi, '');
  mainContent = cleanInlineStyles(mainContent);

  const wrappedContent = `
      <section style="position:relative;overflow:hidden;padding-top:7rem;">
        <div style="pointer-events:none;position:absolute;inset:0;">
          <div style="position:absolute;left:-5rem;top:4rem;width:26rem;height:26rem;border-radius:50%;background:rgba(254,89,0,0.07);filter:blur(100px);"></div>
        </div>
        <div style="position:relative;z-index:10;max-width:52rem;margin:0 auto;padding:0 1.25rem;">
          <div class="vg-surface-panel vg-reveal" style="border-radius:2rem;padding:2rem;">
            <a href="/blog/" style="color:var(--color-accent);text-decoration:none;font-weight:500;font-size:0.95rem;">Back to Blog</a>
            <div class="content-body" style="margin-top:1.5rem;display:flex;flex-direction:column;gap:1.5rem;font-size:1.125rem;line-height:1.8;color:var(--color-text-secondary);">
${mainContent}
            </div>
          </div>
        </div>
      </section>

      <section class="vg-reveal" style="padding:3rem 0;">
        <div style="max-width:52rem;margin:0 auto;padding:0 1.25rem;">
          <div class="vg-surface-panel" style="border-radius:2rem;padding:2rem;text-align:center;">
            <p class="vg-eyebrow">Next Step</p>
            <h2 class="vg-font-heading" style="font-size:1.5rem;color:var(--color-text-primary);margin:0.75rem 0;">Not sure how your own site is holding up?</h2>
            <div style="margin-top:1.25rem;display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:center;">
              <a href="https://audits.littlefightnyc.com/" class="vg-cta-primary">Audit Your Website</a>
              <a href="/contact/" class="vg-cta-secondary">Discuss Your Project</a>
            </div>
          </div>
        </div>
      </section>`;

  return wrapInMidnightShell(wrappedContent, title, desc, canonical, schemas);
}

// ── SERVICE PAGE TEMPLATE ───────────────────────────────────

function buildServicePage(absPath, originalHtml, addAuditCta) {
  const title = extractMeta(originalHtml, 'title');
  const desc = extractMeta(originalHtml, 'description');
  const canonical = extractMeta(originalHtml, 'canonical');
  const schemas = extractSchemaScripts(originalHtml);

  let mainContent = extractMainContent(originalHtml);
  mainContent = mainContent.replace(/<section class="accent-photo-band[\s\S]*?<\/section>/gi, '');

  const heroMatch = mainContent.match(/<section class="page-hero">([\s\S]*?)<\/section>/i);
  mainContent = mainContent.replace(/<section class="page-hero">[\s\S]*?<\/section>/i, '');

  let h1 = title.replace(' | Little Fight NYC', '');
  let heroDesc = desc;

  if (heroMatch) {
    const hm = heroMatch[1];
    const h1m = hm.match(/<h1[^>]*>([^<]+)<\/h1>/i);
    if (h1m) h1 = h1m[1].trim();
    const descm = hm.match(/section-description[^>]*>([^<]+)</i);
    if (descm) heroDesc = descm[1].trim();
  }

  mainContent = cleanInlineStyles(mainContent);
  mainContent = mainContent.replace(/<section class="page-content">/gi, '<section style="padding:2rem 0;">');
  mainContent = mainContent.replace(/<div class="container">/gi, '<div style="max-width:52rem;margin:0 auto;padding:0 1.25rem;">');
  mainContent = mainContent.replace(/class="content-block"/g, 'class="vg-surface-panel vg-reveal" style="border-radius:2rem;padding:1.5rem;margin-bottom:1.5rem;"');
  mainContent = mainContent.replace(/class="final-cta"/g, 'class="vg-surface-panel vg-reveal" style="border-radius:2rem;padding:2rem;text-align:center;margin-bottom:1.5rem;"');
  mainContent = mainContent.replace(/<h2>/g, '<h2 class="vg-font-heading" style="font-size:1.5rem;color:var(--color-text-primary);margin-bottom:0.75rem;">');
  mainContent = mainContent.replace(/<h3>/g, '<h3 style="font-size:1.25rem;font-weight:600;color:var(--color-text-primary);margin:1rem 0 0.5rem;">');
  mainContent = mainContent.replace(/<p>/g, '<p style="color:var(--color-text-secondary);line-height:1.78;">');
  mainContent = mainContent.replace(/<li>/g, '<li style="color:var(--color-text-secondary);line-height:1.78;">');
  mainContent = mainContent.replace(/class="faq-question"/g, 'class="faq-question" style="width:100%;text-align:left;background:none;border:none;color:var(--color-text-primary);font-size:1.05rem;font-weight:600;padding:0.75rem 0;cursor:pointer;display:flex;justify-content:space-between;align-items:center;"');
  mainContent = mainContent.replace(/class="faq-answer-content"/g, 'style="color:var(--color-text-secondary);padding-bottom:0.75rem;line-height:1.78;"');
  mainContent = mainContent.replace(/class="related-card"/g, 'class="vg-cta-secondary" style="text-decoration:none;"');
  mainContent = mainContent.replace(/class="industry-example-card"/g, 'class="vg-surface-panel" style="border-radius:1.5rem;padding:1.25rem;"');
  mainContent = mainContent.replace(/>Book a Friendly Call</g, '>Book a Private Consult<');
  mainContent = mainContent.replace(/>Let's Talk</g, '>Book a Private Consult<');

  const auditCta = addAuditCta ? `
      <section class="vg-reveal" style="padding:2rem 0 3rem;">
        <div style="max-width:52rem;margin:0 auto;padding:0 1.25rem;">
          <div class="vg-surface-panel" style="border-radius:2rem;padding:2rem;text-align:center;">
            <p class="vg-eyebrow">Free Assessment</p>
            <h2 class="vg-font-heading" style="font-size:1.5rem;color:var(--color-text-primary);margin:0.75rem 0;">See where your current site stands</h2>
            <div style="margin-top:1.25rem;display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:center;">
              <a href="https://audits.littlefightnyc.com/" class="vg-cta-secondary">Audit Your Website</a>
            </div>
          </div>
        </div>
      </section>` : '';

  const wrappedContent = `
      <section style="position:relative;overflow:hidden;padding-top:7rem;">
        <div style="pointer-events:none;position:absolute;inset:0;">
          <div style="position:absolute;left:-5rem;top:4rem;width:26rem;height:26rem;border-radius:50%;background:rgba(254,89,0,0.07);filter:blur(100px);"></div>
        </div>
        <div style="position:relative;z-index:10;max-width:80rem;margin:0 auto;padding:0 1.25rem;">
          <div class="vg-surface-panel" style="max-width:56rem;border-radius:2rem;padding:2rem;position:relative;overflow:hidden;">
            <div style="pointer-events:none;position:absolute;inset:0;background:radial-gradient(circle at top right,rgba(254,89,0,0.08),transparent 34%),radial-gradient(circle at bottom left,rgba(125,211,252,0.08),transparent 28%);"></div>
            <div style="position:relative;z-index:10;">
              <p class="vg-eyebrow">Service</p>
              <h1 class="vg-font-display" style="margin-bottom:1.25rem;font-size:clamp(2rem,5vw,3.75rem);line-height:1.08;color:var(--color-text-primary);">${h1}</h1>
              <p class="vg-font-body" style="color:var(--color-text-secondary);font-size:1.125rem;">${heroDesc}</p>
              <div style="margin-top:2rem;display:flex;flex-wrap:wrap;gap:0.75rem;">
                <a href="/contact/" class="vg-cta-primary">Book a Private Consult</a>
                <a href="/#services" class="vg-cta-secondary">How We Help</a>
              </div>
            </div>
          </div>
        </div>
      </section>

${mainContent}
${auditCta}`;

  return wrapInMidnightShell(wrappedContent, title, desc, canonical, schemas);
}

// ── GENERIC PAGE TEMPLATE ───────────────────────────────────

function buildGenericPage(absPath, originalHtml, eyebrow, addAudit) {
  const title = extractMeta(originalHtml, 'title');
  const desc = extractMeta(originalHtml, 'description');
  const canonical = extractMeta(originalHtml, 'canonical');
  const schemas = extractSchemaScripts(originalHtml);

  let mainContent = extractMainContent(originalHtml);
  mainContent = mainContent.replace(/<section class="accent-photo-band[\s\S]*?<\/section>/gi, '');

  const heroMatch = mainContent.match(/<section class="page-hero[^"]*">([\s\S]*?)<\/section>/i);
  mainContent = mainContent.replace(/<section class="page-hero[^"]*">[\s\S]*?<\/section>/i, '');

  let h1 = title.replace(' | Little Fight NYC', '');
  let heroDesc = desc;

  if (heroMatch) {
    const hm = heroMatch[1];
    const h1m = hm.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    if (h1m) h1 = h1m[1].trim().replace(/<[^>]+>/g, '');
    const descm = hm.match(/section-description[^>]*>([\s\S]*?)<\/p>/i);
    if (descm) heroDesc = descm[1].trim().replace(/<[^>]+>/g, '');
  }

  mainContent = cleanInlineStyles(mainContent);
  mainContent = mainContent.replace(/<section class="page-content[^"]*">/gi, '<section style="padding:2rem 0;">');
  mainContent = mainContent.replace(/<div class="container">/gi, '<div style="max-width:52rem;margin:0 auto;padding:0 1.25rem;">');
  mainContent = mainContent.replace(/class="content-block"/g, 'class="vg-surface-panel vg-reveal" style="border-radius:2rem;padding:1.5rem;margin-bottom:1.5rem;"');
  mainContent = mainContent.replace(/class="final-cta"/g, 'class="vg-surface-panel vg-reveal" style="border-radius:2rem;padding:2rem;text-align:center;margin-bottom:1.5rem;"');
  mainContent = mainContent.replace(/<h2>/g, '<h2 class="vg-font-heading" style="font-size:1.5rem;color:var(--color-text-primary);margin-bottom:0.75rem;">');
  mainContent = mainContent.replace(/<p>/g, '<p style="color:var(--color-text-secondary);line-height:1.78;">');
  mainContent = mainContent.replace(/<li>/g, '<li style="color:var(--color-text-secondary);line-height:1.78;">');
  mainContent = mainContent.replace(/>Book a Friendly Call</g, '>Book a Private Consult<');
  mainContent = mainContent.replace(/>Let's Talk</g, '>Book a Private Consult<');

  const auditSection = addAudit ? `
      <section class="vg-reveal" style="padding:2rem 0 3rem;">
        <div style="max-width:52rem;margin:0 auto;padding:0 1.25rem;">
          <div class="vg-surface-panel" style="border-radius:2rem;padding:2rem;text-align:center;">
            <p class="vg-eyebrow">Free Assessment</p>
            <h2 class="vg-font-heading" style="font-size:1.5rem;color:var(--color-text-primary);margin:0.75rem 0;">Not sure how your own site is holding up?</h2>
            <div style="margin-top:1.25rem;display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:center;">
              <a href="https://audits.littlefightnyc.com/" class="vg-cta-primary">Audit Your Website</a>
              <a href="/contact/" class="vg-cta-secondary">Discuss Your Project</a>
            </div>
          </div>
        </div>
      </section>` : '';

  const wrappedContent = `
      <section style="position:relative;overflow:hidden;padding-top:7rem;">
        <div style="pointer-events:none;position:absolute;inset:0;">
          <div style="position:absolute;left:-5rem;top:4rem;width:26rem;height:26rem;border-radius:50%;background:rgba(254,89,0,0.07);filter:blur(100px);"></div>
        </div>
        <div style="position:relative;z-index:10;max-width:80rem;margin:0 auto;padding:0 1.25rem;">
          <div class="vg-surface-panel" style="max-width:56rem;border-radius:2rem;padding:2rem;position:relative;overflow:hidden;">
            <div style="pointer-events:none;position:absolute;inset:0;background:radial-gradient(circle at top right,rgba(254,89,0,0.08),transparent 34%),radial-gradient(circle at bottom left,rgba(125,211,252,0.08),transparent 28%);"></div>
            <div style="position:relative;z-index:10;">
              <p class="vg-eyebrow">${eyebrow || 'Little Fight NYC'}</p>
              <h1 class="vg-font-display" style="margin-bottom:1.25rem;font-size:clamp(2rem,5vw,3.75rem);line-height:1.08;color:var(--color-text-primary);">${h1}</h1>
              <p class="vg-font-body" style="color:var(--color-text-secondary);font-size:1.125rem;">${heroDesc}</p>
              <div style="margin-top:2rem;display:flex;flex-wrap:wrap;gap:0.75rem;">
                <a href="/contact/" class="vg-cta-primary">Book a Private Consult</a>
                <a href="/#services" class="vg-cta-secondary">How We Help</a>
              </div>
            </div>
          </div>
        </div>
      </section>

${mainContent}
${auditSection}`;

  return wrapInMidnightShell(wrappedContent, title, desc, canonical, schemas);
}

// ── AREA PAGE BUILDER ───────────────────────────────────────

function buildAreaPage(areaName, areaSlug) {
  const title = areaSlug === 'index'
    ? 'Areas We Serve | Little Fight NYC'
    : `${areaName} Tech Services | Little Fight NYC`;
  const desc = areaSlug === 'index'
    ? 'On-site support, local SEO, and practical tech services for Manhattan businesses.'
    : `Website design, IT support, local SEO, and smart systems for businesses in ${areaName}, NYC.`;
  const canonical = areaSlug === 'index'
    ? 'https://littlefightnyc.com/areas/'
    : `https://littlefightnyc.com/areas/${areaSlug}.html`;

  const isIndex = areaSlug === 'index';

  const areas = [
    { name: 'East Village', slug: 'east-village' },
    { name: 'Lower East Side', slug: 'lower-east-side' },
    { name: 'Meatpacking District', slug: 'meatpacking-district' },
    { name: 'Midtown', slug: 'midtown' },
    { name: 'SoHo', slug: 'soho' },
    { name: 'Upper East Side', slug: 'upper-east-side' },
    { name: 'West Village', slug: 'west-village' }
  ];

  let content;
  if (isIndex) {
    const areaGrid = areas.map(a =>
      `              <a href="/areas/${a.slug}.html" class="vg-surface-panel vg-reveal" style="border-radius:1.5rem;padding:1.25rem;text-decoration:none;display:block;">
                <h3 style="font-size:1.125rem;font-weight:600;color:var(--color-text-primary);">${a.name}</h3>
                <p style="color:var(--color-text-secondary);font-size:0.95rem;margin-top:0.5rem;">Website design, IT, and local search for ${a.name} businesses.</p>
              </a>`
    ).join('\n');

    content = `
      <section style="position:relative;overflow:hidden;padding-top:7rem;">
        <div style="pointer-events:none;position:absolute;inset:0;">
          <div style="position:absolute;left:-5rem;top:4rem;width:26rem;height:26rem;border-radius:50%;background:rgba(254,89,0,0.07);filter:blur(100px);"></div>
        </div>
        <div style="position:relative;z-index:10;max-width:80rem;margin:0 auto;padding:0 1.25rem;">
          <div class="vg-surface-panel" style="max-width:56rem;border-radius:2rem;padding:2rem;position:relative;overflow:hidden;">
            <div style="pointer-events:none;position:absolute;inset:0;background:radial-gradient(circle at top right,rgba(254,89,0,0.08),transparent 34%);"></div>
            <div style="position:relative;z-index:10;">
              <p class="vg-eyebrow">Areas We Serve</p>
              <h1 class="vg-font-display" style="margin-bottom:1.25rem;font-size:clamp(2rem,5vw,3.75rem);line-height:1.08;color:var(--color-text-primary);">Manhattan neighborhoods we know well</h1>
              <p class="vg-font-body" style="color:var(--color-text-secondary);font-size:1.125rem;">On-site support, local SEO, and practical tech services tailored to your block.</p>
              <div style="margin-top:2rem;display:flex;flex-wrap:wrap;gap:0.75rem;">
                <a href="/contact/" class="vg-cta-primary">Book a Private Consult</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style="padding:3rem 0;">
        <div style="max-width:80rem;margin:0 auto;padding:0 1.25rem;">
          <div style="display:grid;gap:1rem;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));">
${areaGrid}
          </div>
        </div>
      </section>`;
  } else {
    content = `
      <section style="position:relative;overflow:hidden;padding-top:7rem;">
        <div style="pointer-events:none;position:absolute;inset:0;">
          <div style="position:absolute;left:-5rem;top:4rem;width:26rem;height:26rem;border-radius:50%;background:rgba(254,89,0,0.07);filter:blur(100px);"></div>
        </div>
        <div style="position:relative;z-index:10;max-width:80rem;margin:0 auto;padding:0 1.25rem;">
          <div class="vg-surface-panel" style="max-width:56rem;border-radius:2rem;padding:2rem;position:relative;overflow:hidden;">
            <div style="pointer-events:none;position:absolute;inset:0;background:radial-gradient(circle at top right,rgba(254,89,0,0.08),transparent 34%);"></div>
            <div style="position:relative;z-index:10;">
              <p class="vg-eyebrow">${areaName}</p>
              <h1 class="vg-font-display" style="margin-bottom:1.25rem;font-size:clamp(2rem,5vw,3.75rem);line-height:1.08;color:var(--color-text-primary);">Tech services for ${areaName} businesses</h1>
              <p class="vg-font-body" style="color:var(--color-text-secondary);font-size:1.125rem;">${desc}</p>
              <div style="margin-top:2rem;display:flex;flex-wrap:wrap;gap:0.75rem;">
                <a href="/contact/" class="vg-cta-primary">Book a Private Consult</a>
                <a href="/areas/" class="vg-cta-secondary">All Areas</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style="padding:3rem 0;">
        <div style="max-width:52rem;margin:0 auto;padding:0 1.25rem;">
          <div class="vg-surface-panel vg-reveal" style="border-radius:2rem;padding:1.5rem;margin-bottom:1.5rem;">
            <h2 class="vg-font-heading" style="font-size:1.5rem;color:var(--color-text-primary);margin-bottom:0.75rem;">What we do in ${areaName}</h2>
            <p style="color:var(--color-text-secondary);line-height:1.78;">We serve businesses in ${areaName} with on-site IT support, website design, local SEO, POS setup, and smart systems. Whether you run a restaurant, retail shop, studio, or office, we show up and handle the technology so you can focus on your work.</p>
          </div>

          <div class="vg-surface-panel vg-reveal" style="border-radius:2rem;padding:1.5rem;margin-bottom:1.5rem;">
            <h2 class="vg-font-heading" style="font-size:1.5rem;color:var(--color-text-primary);margin-bottom:0.75rem;">Services available</h2>
            <ul style="list-style:none;padding:0;display:grid;gap:0.5rem;">
              <li style="color:var(--color-text-secondary);line-height:1.78;"><a href="/services/website-design-small-business-nyc/" style="color:var(--color-accent);text-decoration:none;">Website Design</a> for local businesses</li>
              <li style="color:var(--color-text-secondary);line-height:1.78;"><a href="/services/on-site-it-support-nyc/" style="color:var(--color-accent);text-decoration:none;">On-Site IT Support</a> in ${areaName}</li>
              <li style="color:var(--color-text-secondary);line-height:1.78;"><a href="/services/local-seo-and-google-ads-nyc/" style="color:var(--color-accent);text-decoration:none;">Local SEO</a> to rank in ${areaName} searches</li>
              <li style="color:var(--color-text-secondary);line-height:1.78;"><a href="/services/pos-and-register-setup-nyc/" style="color:var(--color-accent);text-decoration:none;">POS Setup</a> for shops and restaurants</li>
              <li style="color:var(--color-text-secondary);line-height:1.78;"><a href="/services/smart-home-services-nyc/" style="color:var(--color-accent);text-decoration:none;">Smart Systems</a> for connected spaces</li>
            </ul>
          </div>

          <div class="vg-surface-panel vg-reveal" style="border-radius:2rem;padding:2rem;text-align:center;">
            <p class="vg-eyebrow">Get Started</p>
            <h2 class="vg-font-heading" style="font-size:1.5rem;color:var(--color-text-primary);margin:0.75rem 0;">Ready to upgrade your ${areaName} business?</h2>
            <div style="margin-top:1.25rem;display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:center;">
              <a href="/contact/" class="vg-cta-primary">Book a Private Consult</a>
              <a href="https://audits.littlefightnyc.com/" class="vg-cta-secondary">Audit Your Website</a>
            </div>
          </div>
        </div>
      </section>`;
  }

  return wrapInMidnightShell(content, title, desc, canonical, '');
}

// ── BLOG INDEX BUILDER ──────────────────────────────────────

function buildBlogIndex(originalHtml) {
  const schemas = extractSchemaScripts(originalHtml);

  const content = `
      <section style="position:relative;overflow:hidden;padding-top:7rem;">
        <div style="pointer-events:none;position:absolute;inset:0;">
          <div style="position:absolute;left:-5rem;top:4rem;width:26rem;height:26rem;border-radius:50%;background:rgba(254,89,0,0.07);filter:blur(100px);"></div>
        </div>
        <div style="position:relative;z-index:10;max-width:80rem;margin:0 auto;padding:0 1.25rem;">
          <div class="vg-surface-panel" style="max-width:56rem;border-radius:2rem;padding:2rem;position:relative;overflow:hidden;">
            <div style="pointer-events:none;position:absolute;inset:0;background:radial-gradient(circle at top right,rgba(254,89,0,0.08),transparent 34%);"></div>
            <div style="position:relative;z-index:10;">
              <p class="vg-eyebrow">Insights</p>
              <h1 class="vg-font-display" style="margin-bottom:1.25rem;font-size:clamp(2rem,5vw,3.75rem);line-height:1.08;color:var(--color-text-primary);">Ideas that make websites feel clearer, faster, and harder to ignore</h1>
              <p class="vg-font-body" style="color:var(--color-text-secondary);font-size:1.125rem;">Practical strategy for business owners. Better structure, stronger visibility, more qualified leads.</p>
              <div style="margin-top:2rem;display:flex;flex-wrap:wrap;gap:0.75rem;">
                <a href="/contact/" class="vg-cta-primary">Book a Private Consult</a>
                <a href="/work/" class="vg-cta-secondary">See Client Outcomes</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="vg-reveal" style="padding:3rem 0;">
        <div style="max-width:80rem;margin:0 auto;padding:0 1.25rem;">
          <div style="display:grid;gap:1rem;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));">
            <div class="vg-surface-panel" style="border-radius:1.5rem;padding:1.25rem;">
              <p class="vg-eyebrow">Focus 01</p>
              <h2 style="font-size:1.125rem;font-weight:600;color:var(--color-text-primary);margin:0.5rem 0;">Modern search behavior</h2>
              <p style="color:var(--color-text-secondary);font-size:0.95rem;">How AI answers, summaries, and zero-click patterns are changing the way customers find businesses.</p>
            </div>
            <div class="vg-surface-panel" style="border-radius:1.5rem;padding:1.25rem;">
              <p class="vg-eyebrow">Focus 02</p>
              <h2 style="font-size:1.125rem;font-weight:600;color:var(--color-text-primary);margin:0.5rem 0;">High-clarity website strategy</h2>
              <p style="color:var(--color-text-secondary);font-size:0.95rem;">How to structure pages so humans trust faster and machines understand your services without guessing.</p>
            </div>
            <div class="vg-surface-panel" style="border-radius:1.5rem;padding:1.25rem;">
              <p class="vg-eyebrow">Focus 03</p>
              <h2 style="font-size:1.125rem;font-weight:600;color:var(--color-text-primary);margin:0.5rem 0;">Practical implementation</h2>
              <p style="color:var(--color-text-secondary);font-size:0.95rem;">Actions small teams can apply now without bloated marketing stacks or complicated toolchains.</p>
            </div>
          </div>
        </div>
      </section>

      <section style="padding:2rem 0;">
        <div style="max-width:80rem;margin:0 auto;padding:0 1.25rem;">
          <div style="display:grid;gap:1.5rem;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));">
            <a href="/what-google-looks-for-business-website/" class="vg-surface-panel vg-reveal" style="border-radius:2rem;padding:1.5rem;text-decoration:none;display:block;">
              <p class="vg-eyebrow">SEO Strategy</p>
              <h2 style="font-size:1.25rem;font-weight:600;color:var(--color-text-primary);margin:0.5rem 0;">What Google Actually Looks For on a Business Website</h2>
              <p style="color:var(--color-text-secondary);font-size:0.95rem;">Google now evaluates credibility, clarity, and trust signals more than keyword repetition.</p>
              <p style="color:var(--color-text-muted);font-size:0.85rem;margin-top:0.75rem;">February 2026 &middot; 8 min read</p>
            </a>
            <a href="/why-business-websites-will-be-invisible/" class="vg-surface-panel vg-reveal" style="border-radius:2rem;padding:1.5rem;text-decoration:none;display:block;">
              <p class="vg-eyebrow">Search Visibility</p>
              <h2 style="font-size:1.25rem;font-weight:600;color:var(--color-text-primary);margin:0.5rem 0;">Why Most Business Websites Will Be Invisible in 18 Months</h2>
              <p style="color:var(--color-text-secondary);font-size:0.95rem;">Business websites are becoming invisible as AI answers influence decisions before users click.</p>
              <p style="color:var(--color-text-muted);font-size:0.85rem;margin-top:0.75rem;">February 2026 &middot; 8 min read</p>
            </a>
            <a href="/ai-google-broke-the-internet-websites-survive/" class="vg-surface-panel vg-reveal" style="border-radius:2rem;padding:1.5rem;text-decoration:none;display:block;">
              <p class="vg-eyebrow">Search &amp; AI</p>
              <h2 style="font-size:1.25rem;font-weight:600;color:var(--color-text-primary);margin:0.5rem 0;">AI and Google Broke the Internet (How Websites Survive Now)</h2>
              <p style="color:var(--color-text-secondary);font-size:0.95rem;">Search changed fast. How modern websites stay visible when answers show up before clicks.</p>
              <p style="color:var(--color-text-muted);font-size:0.85rem;margin-top:0.75rem;">February 2026 &middot; 7 min read</p>
            </a>
            <a href="/blog/protecting-kids-from-ai.html" class="vg-surface-panel vg-reveal" style="border-radius:2rem;padding:1.5rem;text-decoration:none;display:block;">
              <p class="vg-eyebrow">Parenting</p>
              <h2 style="font-size:1.25rem;font-weight:600;color:var(--color-text-primary);margin:0.5rem 0;">Protecting Your Kids From AI, the Smart Way</h2>
              <p style="color:var(--color-text-secondary);font-size:0.95rem;">A practical reality check for parents who want to understand AI risks and guide kids with confidence.</p>
              <p style="color:var(--color-text-muted);font-size:0.85rem;margin-top:0.75rem;">January 2025 &middot; 4 min read</p>
            </a>
            <a href="/blog/cybersecurity-for-small-business.html" class="vg-surface-panel vg-reveal" style="border-radius:2rem;padding:1.5rem;text-decoration:none;display:block;">
              <p class="vg-eyebrow">Cybersecurity</p>
              <h2 style="font-size:1.25rem;font-weight:600;color:var(--color-text-primary);margin:0.5rem 0;">How Small Businesses Can Stay Safe in a Digital World</h2>
              <p style="color:var(--color-text-secondary);font-size:0.95rem;">Actionable cybersecurity practices for teams that want better protection without enterprise complexity.</p>
              <p style="color:var(--color-text-muted);font-size:0.85rem;margin-top:0.75rem;">January 2025 &middot; 5 min read</p>
            </a>
            <a href="/blog/nyc-small-business-digital.html" class="vg-surface-panel vg-reveal" style="border-radius:2rem;padding:1.5rem;text-decoration:none;display:block;">
              <p class="vg-eyebrow">Digital Strategy</p>
              <h2 style="font-size:1.25rem;font-weight:600;color:var(--color-text-primary);margin:0.5rem 0;">Why NYC's Mom-and-Pop Shops Need to Go Digital, Now</h2>
              <p style="color:var(--color-text-secondary);font-size:0.95rem;">How local businesses can strengthen visibility, trust, and recurring revenue through practical digital upgrades.</p>
              <p style="color:var(--color-text-muted);font-size:0.85rem;margin-top:0.75rem;">January 2025 &middot; 5 min read</p>
            </a>
          </div>
        </div>
      </section>

      <section class="vg-reveal" style="padding:2rem 0 3rem;">
        <div style="max-width:52rem;margin:0 auto;padding:0 1.25rem;">
          <div class="vg-surface-panel" style="border-radius:2rem;padding:2rem;text-align:center;">
            <p class="vg-eyebrow">Next Step</p>
            <h2 class="vg-font-heading" style="font-size:1.5rem;color:var(--color-text-primary);margin:0.75rem 0;">Not sure how your own site is holding up?</h2>
            <p style="color:var(--color-text-secondary);margin-bottom:1.25rem;">We review your current site and explain exactly what it signals to customers and modern search systems.</p>
            <div style="display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:center;">
              <a href="https://audits.littlefightnyc.com/" class="vg-cta-primary">Audit Your Website</a>
              <a href="/contact/" class="vg-cta-secondary">Discuss Your Project</a>
            </div>
          </div>
        </div>
      </section>`;

  return wrapInMidnightShell(content, 'Blog | Little Fight NYC', 'Strategic insights on modern search visibility, websites, and practical tech decisions for small businesses.', 'https://littlefightnyc.com/blog/', schemas);
}

// ── MAIN BUILD ──────────────────────────────────────────────

function processFile(relPath, builder, extraArg1, extraArg2) {
  const absPath = path.join(ROOT, relPath);
  console.log('  Processing: ' + relPath);

  let originalHtml = '';
  try {
    originalHtml = fs.readFileSync(absPath, 'utf-8');
  } catch (e) {
    console.log('    WARNING: Could not read ' + absPath);
  }

  const result = builder(absPath, originalHtml, extraArg1, extraArg2);
  fs.writeFileSync(absPath, result, 'utf-8');
  console.log('    Done: ' + relPath);
}

console.log('=== Midnight Shell Rebuild ===\n');

// Blog index
console.log('--- Blog ---');
const blogIndexHtml = fs.readFileSync(path.join(ROOT, 'blog/index.html'), 'utf-8');
fs.writeFileSync(path.join(ROOT, 'blog/index.html'), buildBlogIndex(blogIndexHtml), 'utf-8');
console.log('  Done: blog/index.html');

// Blog posts
processFile('blog/cybersecurity-for-small-business.html', buildBlogPost);
processFile('blog/nyc-small-business-digital.html', buildBlogPost);
processFile('blog/protecting-kids-from-ai.html', buildBlogPost);

// Services index
console.log('\n--- Services ---');
processFile('services/index.html', buildGenericPage, 'Services', false);

// Service sub-pages
processFile('services/website-design-small-business-nyc/index.html', buildServicePage, true);
processFile('services/on-site-it-support-nyc/index.html', buildServicePage, false);
processFile('services/local-seo-and-google-ads-nyc/index.html', buildServicePage, false);
processFile('services/pos-and-register-setup-nyc/index.html', buildServicePage, false);
processFile('services/smart-home-services-nyc/index.html', buildServicePage, false);
processFile('services/tech-consulting-small-business/index.html', buildServicePage, false);
processFile('services/branding-and-identity-design/index.html', buildServicePage, false);
processFile('services/ecommerce-setup-shopify-square-woocommerce/index.html', buildServicePage, false);
processFile('services/apple-device-setup-and-management/index.html', buildServicePage, false);

// Area pages
console.log('\n--- Areas ---');
const areas = [
  { name: 'Areas We Serve', slug: 'index' },
  { name: 'East Village', slug: 'east-village' },
  { name: 'Lower East Side', slug: 'lower-east-side' },
  { name: 'Meatpacking District', slug: 'meatpacking-district' },
  { name: 'Midtown', slug: 'midtown' },
  { name: 'SoHo', slug: 'soho' },
  { name: 'Upper East Side', slug: 'upper-east-side' },
  { name: 'West Village', slug: 'west-village' }
];

areas.forEach(function(a) {
  const fileName = a.slug === 'index' ? 'areas/index.html' : 'areas/' + a.slug + '.html';
  const result = buildAreaPage(a.name, a.slug);
  fs.writeFileSync(path.join(ROOT, fileName), result, 'utf-8');
  console.log('  Done: ' + fileName);
});

// Other pages
console.log('\n--- Other Pages ---');
processFile('work/index.html', buildGenericPage, 'Work', false);
processFile('about/index.html', buildGenericPage, 'About', false);
processFile('contact/index.html', buildGenericPage, 'Contact', false);
processFile('solutions/index.html', buildGenericPage, 'Solutions', false);
processFile('industries.html', buildGenericPage, 'Industries', false);

// Insights redirect to blog
var insightsHtml = '<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta http-equiv="refresh" content="0;url=/blog/" />\n  <title>Redirecting to Blog | Little Fight NYC</title>\n  <link rel="canonical" href="https://littlefightnyc.com/blog/" />\n</head>\n<body class="midnight-shell" style="background:#071119;color:#fff;font-family:Inter,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;">\n  <p>Redirecting to <a href="/blog/" style="color:#FE5900;">Blog</a>...</p>\n</body>\n</html>';
fs.writeFileSync(path.join(ROOT, 'insights/index.html'), insightsHtml, 'utf-8');
console.log('  Done: insights/index.html (redirect to /blog/)');

// SEO landing pages
console.log('\n--- SEO Landing Pages ---');
processFile('ai-google-broke-the-internet-websites-survive/index.html', buildGenericPage, 'Search & AI', true);
processFile('why-business-websites-will-be-invisible/index.html', buildGenericPage, 'Search Visibility', true);
processFile('what-google-looks-for-business-website/index.html', buildGenericPage, 'SEO Strategy', true);

console.log('\n=== Rebuild Complete ===');
console.log('All pages now use the midnight design system shell.');
