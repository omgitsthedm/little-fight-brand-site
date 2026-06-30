import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandMark from './BrandMark';
import MdiIcon from './MdiIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--lf-charcoal)] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--lf-orange)]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-12 grid gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <BrandMark className="w-11 border-white/10 bg-white sm:w-12" />
              <div>
                <span className="text-lg font-semibold text-white">Little Fight NYC</span>
                <p className="text-xs text-white/50 -mt-0.5">Clearer websites. Calmer operations. Better support.</p>
              </div>
            </Link>

            <p className="max-w-md text-base leading-[1.85] text-white/60 mb-4">
              Helping small businesses feel stronger online and calmer behind the scenes with clearer customer paths, steadier systems, and support that feels direct and human.
            </p>
            <p className="max-w-md text-base leading-[1.8] text-white/45 mb-8">
              On-site help in Manhattan. Remote strategy and website work nationwide.
            </p>

            <div className="mb-8 grid gap-3 sm:grid-cols-2 md:max-w-md">
              <Link
                to="/services/website-audit-small-business/"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-5 py-3 text-base font-medium text-white transition-colors hover:border-[var(--lf-orange)] hover:text-[var(--lf-orange)]"
              >
                Get Clarity First
              </Link>
              <Link to="/contact/" className="btn-primary">
                Book a Call
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a href="tel:646-360-0318" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base text-white/70 transition-colors hover:text-[var(--lf-orange)]">
                <MdiIcon name="phone-outline" className="text-lg" />
                <span>646-360-0318</span>
              </a>
              <a href="mailto:hello@littlefightnyc.com" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base text-white/70 transition-colors hover:text-[var(--lf-orange)]">
                <MdiIcon name="email-outline" className="text-lg" />
                <span>hello@littlefightnyc.com</span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base text-white/70 sm:col-span-2">
                <MdiIcon name="map-marker-radius-outline" className="text-lg" />
                <span>Manhattan, NYC</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/40 mb-4">Explore</h3>
              <ul className="grid gap-2">
                <li>
                  <Link to="/" className="block rounded-xl px-3 py-2 text-base text-white/60 transition-colors hover:bg-white/5 hover:text-[var(--lf-orange)]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services/" className="block rounded-xl px-3 py-2 text-base text-white/60 transition-colors hover:bg-white/5 hover:text-[var(--lf-orange)]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/" className="block rounded-xl px-3 py-2 text-base text-white/60 transition-colors hover:bg-white/5 hover:text-[var(--lf-orange)]">
                    How We Work
                  </Link>
                </li>
                <li>
                  <Link to="/industries/" className="block rounded-xl px-3 py-2 text-base text-white/60 transition-colors hover:bg-white/5 hover:text-[var(--lf-orange)]">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link to="/work/" className="block rounded-xl px-3 py-2 text-base text-white/60 transition-colors hover:bg-white/5 hover:text-[var(--lf-orange)]">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="/about/" className="block rounded-xl px-3 py-2 text-base text-white/60 transition-colors hover:bg-white/5 hover:text-[var(--lf-orange)]">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact/" className="block rounded-xl px-3 py-2 text-base text-white/60 transition-colors hover:bg-white/5 hover:text-[var(--lf-orange)]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/40 mb-4">Quick Help</h3>
              <ul className="grid gap-2">
                <li>
                  <Link
                    to="/services/website-design-small-business-nyc/"
                    className="flex items-center gap-1 rounded-xl px-3 py-2 text-base text-white/60 transition-colors hover:bg-white/5 hover:text-[var(--lf-orange)]"
                  >
                    Fix a dated website
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/website-audit-small-business/"
                    className="flex items-center gap-1 rounded-xl px-3 py-2 text-base text-white/60 transition-colors hover:bg-white/5 hover:text-[var(--lf-orange)]"
                  >
                    Get clarity first
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link to="/contact/" className="block rounded-xl px-3 py-2 text-base text-white/60 transition-colors hover:bg-white/5 hover:text-[var(--lf-orange)]">
                    Talk through an urgent issue
                  </Link>
                </li>
                <li>
                  <Link to="/privacy/" className="block rounded-xl px-3 py-2 text-base text-white/60 transition-colors hover:bg-white/5 hover:text-[var(--lf-orange)]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms/" className="block rounded-xl px-3 py-2 text-base text-white/60 transition-colors hover:bg-white/5 hover:text-[var(--lf-orange)]">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-white/40">
            &copy; {currentYear} Little Fight NYC. Built to help small businesses feel clear, cared for, and ready.
          </p>
          <p className="text-sm text-white/30">Designed, hosted, and cared for by LittleFightNYC.com</p>
        </div>
      </div>
    </footer>
  );
}
