import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--lf-charcoal)] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--lf-orange)]/5 rounded-full blur-[100px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="text-[var(--lf-charcoal)] text-[9px] font-bold leading-tight text-center tracking-wider">
                  LF<br/>NYC
                </span>
              </div>
              <div>
                <span className="font-semibold text-white">Little Fight NYC</span>
                <p className="text-[10px] text-white/50 -mt-0.5">Tech Support for Small Business</p>
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed max-w-md mb-8">
              Like a Ritz-Carlton concierge for your technology. We show up, we fix it, 
              and we make sure you never feel left in the dark. 
              <span className="text-white"> That's the Little Fight promise.</span>
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:646-360-0318" className="flex items-center gap-3 text-white/60 hover:text-[var(--lf-orange)] transition-colors">
                <Phone className="w-4 h-4" />
                <span>646-360-0318</span>
              </a>
              <a href="mailto:hello@littlefightnyc.com" className="flex items-center gap-3 text-white/60 hover:text-[var(--lf-orange)] transition-colors">
                <Mail className="w-4 h-4" />
                <span>hello@littlefightnyc.com</span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="w-4 h-4" />
                <span>Manhattan, NYC</span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid sm:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/services/on-site-it-support-nyc/" className="text-white/60 hover:text-[var(--lf-orange)] transition-colors text-sm">
                    On-Site IT Support
                  </Link>
                </li>
                <li>
                  <Link to="/services/website-design-small-business-nyc/" className="text-white/60 hover:text-[var(--lf-orange)] transition-colors text-sm">
                    Website Design
                  </Link>
                </li>
                <li>
                  <Link to="/services/local-seo-and-google-ads-nyc/" className="text-white/60 hover:text-[var(--lf-orange)] transition-colors text-sm">
                    Local SEO & Ads
                  </Link>
                </li>
                <li>
                  <Link to="/services/pos-and-register-setup-nyc/" className="text-white/60 hover:text-[var(--lf-orange)] transition-colors text-sm">
                    POS Setup
                  </Link>
                </li>
                <li>
                  <Link to="/services/smart-home-services-nyc/" className="text-white/60 hover:text-[var(--lf-orange)] transition-colors text-sm">
                    Smart Systems
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-white/60 hover:text-[var(--lf-orange)] transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-white/60 hover:text-[var(--lf-orange)] transition-colors text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="text-white/60 hover:text-[var(--lf-orange)] transition-colors text-sm">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/60 hover:text-[var(--lf-orange)] transition-colors text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/#contact" className="text-white/60 hover:text-[var(--lf-orange)] transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://audits.littlefightnyc.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[var(--lf-orange)] transition-colors text-sm flex items-center gap-1"
                  >
                    Free Website Audit
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <Link to="/#faq" className="text-white/60 hover:text-[var(--lf-orange)] transition-colors text-sm">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-white/60 hover:text-[var(--lf-orange)] transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-white/60 hover:text-[var(--lf-orange)] transition-colors text-sm">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} Little Fight NYC. Built in New York with guts & grit.
          </p>
          <p className="text-white/30 text-xs">
            Designed, hosted, and cared for by LittleFightNYC.com
          </p>
        </div>
      </div>
    </footer>
  );
}
