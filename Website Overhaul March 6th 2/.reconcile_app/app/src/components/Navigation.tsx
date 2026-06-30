import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass-luxury shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Luxury Style */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-[var(--lf-charcoal)] rounded-xl flex items-center justify-center overflow-hidden group-hover:shadow-lg group-hover:shadow-[var(--lf-orange)]/20 transition-all duration-300">
                  <span className="text-white text-[9px] font-bold leading-tight text-center tracking-wider">
                    LF<br/>NYC
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[var(--lf-orange)] rounded-full flex items-center justify-center">
                  <span className="text-white text-[6px] font-bold">+</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="font-semibold text-[var(--lf-charcoal)] group-hover:text-[var(--lf-orange)] transition-colors text-sm tracking-tight">
                  Little Fight NYC
                </span>
                <p className="text-[10px] text-[var(--lf-muted)] -mt-0.5">Tech Support for Small Business</p>
              </div>
            </Link>

            {/* Desktop Nav - Luxury */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`relative text-sm font-medium transition-all py-2 ${
                    isActive(link.href) 
                      ? 'text-[var(--lf-orange)]' 
                      : 'text-[var(--lf-graphite)] hover:text-[var(--lf-orange)]'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-[var(--lf-orange)] transition-all duration-300 ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            {/* CTA Buttons - Luxury */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:646-360-0318"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[var(--lf-graphite)] hover:text-[var(--lf-orange)] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>646-360-0318</span>
              </a>
              <Link 
                to="/#contact" 
                className="btn-primary text-sm px-6 py-3"
              >
                Get Help Now
              </Link>
            </div>

            {/* Mobile Menu Button - Luxury */}
            <button
              className="lg:hidden p-2.5 rounded-xl hover:bg-[var(--lf-orange)]/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
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

      {/* Mobile Menu - Luxury */}
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
          className={`absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-2xl p-6 transition-all duration-500 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-lg font-medium py-4 px-4 rounded-xl transition-colors ${
                  isActive(link.href) 
                    ? 'bg-[var(--lf-orange)]/10 text-[var(--lf-orange)]' 
                    : 'text-[var(--lf-charcoal)] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100 space-y-3">
              <a
                href="tel:646-360-0318"
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 text-[var(--lf-graphite)] font-medium border border-[var(--lf-stone)] rounded-full hover:border-[var(--lf-orange)] hover:text-[var(--lf-orange)] transition-all"
              >
                <Phone className="w-4 h-4" />
                646-360-0318
              </a>
              <Link 
                to="/#contact" 
                className="flex items-center justify-center w-full px-6 py-3.5 bg-[var(--lf-orange)] text-white font-semibold rounded-full hover:bg-[var(--lf-orange-dark)] transition-colors"
              >
                Get Help Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
