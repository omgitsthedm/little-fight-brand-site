import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const navLinks = [
  { label: 'How We Help', href: '/#services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-full px-5 lg:px-6 py-3 transition-all duration-500 ${
              isScrolled
                ? 'glass-nav shadow-lg shadow-black/20'
                : 'bg-transparent border border-transparent'
            }`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group min-h-[44px]">
              <div className="relative">
                <div className="w-10 h-10 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center overflow-hidden group-hover:border-[var(--lf-orange)]/30 transition-all duration-300">
                  <span className="text-white text-[9px] font-bold leading-tight text-center tracking-wider">
                    LF<br />NYC
                  </span>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="font-semibold text-white group-hover:text-[var(--lf-ice-blue)] transition-colors text-sm tracking-tight">
                  Little Fight NYC
                </span>
                <p className="text-[10px] text-white/40 -mt-0.5">Business Modernization Studio</p>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`relative text-sm font-medium transition-all px-4 py-2 rounded-full min-h-[44px] flex items-center ${
                    isActive(link.href)
                      ? 'text-white bg-white/10'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:646-360-0318"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white/60 hover:text-white transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4" />
                <span>646-360-0318</span>
              </a>
              <Link
                to="/#contact"
                className="btn-primary text-sm px-6 py-2.5 min-h-[44px]"
              >
                Book a Private Consult
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 rounded-xl hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Panel */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="fixed top-20 left-4 right-4 z-50 glass-nav rounded-2xl p-6 lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`text-lg font-medium py-4 px-4 rounded-xl transition-colors min-h-[44px] ${
                      isActive(link.href)
                        ? 'bg-white/10 text-white'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-white/10 space-y-3">
                  <a
                    href="tel:646-360-0318"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 text-white/70 font-medium border border-white/10 rounded-full hover:border-white/20 hover:text-white transition-all min-h-[44px]"
                  >
                    <Phone className="w-4 h-4" />
                    646-360-0318
                  </a>
                  <Link
                    to="/#contact"
                    className="flex items-center justify-center w-full px-6 py-3.5 bg-[var(--lf-orange)] text-white font-semibold rounded-full hover:brightness-110 transition-all min-h-[44px]"
                  >
                    Book a Private Consult
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
