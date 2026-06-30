import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BrandMark from './BrandMark';
import { useMobileExperience } from '@/hooks/useMobileExperience';

const navItems = [
  { label: 'Services', to: '/services/', description: 'Websites, support, and systems' },
  { label: 'How It Works', to: '/#how-it-works', description: 'What the first project usually looks like' },
  { label: 'Work', to: '/work/', description: 'Examples of real client problems we solve' },
  { label: 'About', to: '/about/', description: 'How we work and why people call us' },
];

function navLinkClass(isActive: boolean) {
  return `relative text-base font-medium transition-colors py-2 ${
    isActive
      ? 'text-[var(--lf-orange)]'
      : 'text-[var(--lf-graphite)] hover:text-[var(--lf-orange)]'
  }`;
}

function isNavItemActive(to: string, pathname: string, hash: string) {
  if (to.startsWith('/#')) {
    return pathname === '/' && hash === to.replace('/', '');
  }

  const normalized = to.endsWith('/') ? to.slice(0, -1) : to;
  return pathname === normalized || pathname.startsWith(`${normalized}/`);
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isCompactViewport } = useMobileExperience();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > (isCompactViewport ? 8 : 24));
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCompactViewport]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isCompactViewport
            ? 'glass-luxury shadow-lg py-3'
            : 'bg-transparent py-4 lg:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4 sm:gap-6">
            <Link to="/" className="flex items-center gap-3 group">
              <BrandMark className="w-11 shadow-[0_22px_45px_rgba(38,35,31,0.12)] transition-transform duration-300 group-hover:-translate-y-0.5 sm:w-12" />
              <div>
                <span className="font-semibold text-[0.98rem] text-[var(--lf-charcoal)] tracking-tight transition-colors group-hover:text-[var(--lf-orange)] sm:text-base">
                  Little Fight NYC
                </span>
                <p className="hidden md:block text-xs text-[var(--lf-muted)] -mt-0.5">
                  Clearer websites. Calmer operations. Better support.
                </p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className={navLinkClass(
                    isNavItemActive(item.to, location.pathname, location.hash),
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/services/website-audit-small-business/"
                className="px-4 py-2.5 text-base font-medium text-[var(--lf-graphite)] border border-[var(--lf-stone)] rounded-full hover:border-[var(--lf-orange)] hover:text-[var(--lf-orange)] transition-all"
              >
                Start Here
              </Link>
              <a
                href="tel:646-360-0318"
                className="flex items-center gap-2 px-4 py-2.5 text-base font-medium text-[var(--lf-graphite)] hover:text-[var(--lf-orange)] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>646-360-0318</span>
              </a>
              <Link to="/contact/" className="btn-primary px-6 py-3">
                Book a Warm Intro Call
              </Link>
            </div>

            <button
              className="rounded-2xl border border-white/65 bg-white/80 p-3 shadow-sm transition-colors hover:bg-[var(--lf-orange)]/10 lg:hidden"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[var(--lf-charcoal)]" />
              ) : (
                <Menu className="w-6 h-6 text-[var(--lf-charcoal)]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute left-3 right-3 overflow-y-auto rounded-[2rem] border border-white/70 bg-white/95 p-4 shadow-[0_30px_80px_rgba(38,35,31,0.18)] transition-all duration-500 sm:left-4 sm:right-4 sm:p-6 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
          style={{
            top: 'calc(env(safe-area-inset-top, 0px) + 4.75rem)',
            maxHeight: 'calc(100dvh - env(safe-area-inset-top, 0px) - 5.5rem)',
            paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 1rem)',
          }}
        >
          <div className="mb-4 rounded-[1.5rem] bg-[var(--lf-bone)] p-4 sm:p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--lf-orange)]">Start Here</p>
            <p className="mt-2 text-base leading-[1.7] text-[var(--lf-muted)]">
              Pick the path that feels closest to the problem, or call if business is already being disrupted.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`rounded-[1.35rem] border px-4 py-4 transition-colors ${
                  isNavItemActive(item.to, location.pathname, location.hash)
                    ? 'border-[var(--lf-orange)]/20 bg-[var(--lf-orange)]/10 text-[var(--lf-orange)]'
                    : 'border-transparent text-[var(--lf-charcoal)] hover:bg-gray-50'
                }`}
              >
                <span className="block text-[1.15rem] font-medium">{item.label}</span>
                <span className="mt-1 block text-sm leading-[1.6] text-[var(--lf-muted)]">
                  {item.description}
                </span>
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100 space-y-3">
              <Link
                to="/services/website-audit-small-business/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full px-6 py-3.5 text-base text-[var(--lf-graphite)] font-medium border border-[var(--lf-stone)] rounded-full hover:border-[var(--lf-orange)] hover:text-[var(--lf-orange)] transition-all"
              >
                Start Here
              </Link>
              <a
                href="tel:646-360-0318"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 text-base text-[var(--lf-graphite)] font-medium border border-[var(--lf-stone)] rounded-full hover:border-[var(--lf-orange)] hover:text-[var(--lf-orange)] transition-all"
              >
                <Phone className="w-4 h-4" />
                646-360-0318
              </a>
              <Link
                to="/contact/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full px-6 py-3.5 text-base bg-[var(--lf-orange)] text-white font-semibold rounded-full hover:bg-[var(--lf-orange-dark)] transition-colors"
              >
                Book a Warm Intro Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
