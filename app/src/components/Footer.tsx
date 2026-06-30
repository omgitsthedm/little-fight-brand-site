import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06]">
      {/* Top glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[var(--lf-orange)]/30 to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-24 bg-[var(--lf-orange)]/[0.03] blur-[60px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-18">
        {/* Main grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center">
                <span className="text-white text-[9px] font-bold leading-tight text-center tracking-wider">
                  LF<br />NYC
                </span>
              </div>
              <div>
                <span className="font-semibold text-white text-sm">Little Fight NYC</span>
                <p className="text-[10px] text-white/40 -mt-0.5">Business Modernization Studio</p>
              </div>
            </Link>

            <p className="text-white/40 leading-relaxed max-w-sm mb-6 text-sm">
              Clearer systems, better websites, and smarter support for businesses that take their presence seriously.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Standards-first', '30-day guarantee', 'First conversation free'].map((pill) => (
                <span
                  key={pill}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/[0.08] text-white/30"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link to="/#contact" className="btn btn-primary text-sm px-6 py-2.5 min-h-[44px]">
                Book a Private Consult
              </Link>
              <a
                href="tel:646-360-0318"
                className="btn btn-secondary text-sm px-6 py-2.5 min-h-[44px]"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </div>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/30 mb-5">
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href="tel:646-360-0318"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                646-360-0318
              </a>
              <a
                href="mailto:hello@littlefightnyc.com"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                hello@littlefightnyc.com
              </a>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Manhattan, NYC
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/30 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'How We Help', href: '/#services' },
                { label: 'Work', href: '/work' },
                { label: 'About', href: '/about' },
                { label: 'Blog', href: '/blog/' },
                { label: 'Contact', href: '/#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/40 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/30 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Website Design', href: '/services/website-design-small-business-nyc/' },
                { label: 'IT Support', href: '/services/on-site-it-support-nyc/' },
                { label: 'Local SEO', href: '/services/local-seo-and-google-ads-nyc/' },
                { label: 'POS Systems', href: '/services/pos-and-register-setup-nyc/' },
                { label: 'Smart Systems', href: '/services/smart-home-services-nyc/' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/30 mb-5">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://audits.littlefightnyc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                >
                  Free Website Audit
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              {[
                { label: 'FAQ', href: '/faq' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/40 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/25">
            <span>&copy; {currentYear} Little Fight NYC</span>
            <Link to="/privacy" className="hover:text-white/50 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white/50 transition-colors">
              Terms
            </Link>
          </div>
          <p className="text-sm font-medium text-[var(--lf-orange)]">
            Designed, Hosted and Cared For by LittleFightNYC.com
          </p>
        </div>
      </div>
    </footer>
  );
}
