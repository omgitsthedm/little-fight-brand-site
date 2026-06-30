import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import FilmGrain from './components/FilmGrain';
import AmbientBackground from './components/AmbientBackground';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TrustSection from './components/TrustSection';
import WorkSection from './components/WorkSection';
import CTASection from './components/CTASection';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { usePageMeta } from './hooks/usePageMeta';
import { useMobileExperience } from './hooks/useMobileExperience';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => {
        const id = location.hash.replace('#', '');
        const target = document.getElementById(id);
        const smoothHashScroll =
          !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
          !window.matchMedia('(pointer: coarse)').matches;

        if (target) {
          target.scrollIntoView({
            behavior: smoothHashScroll ? 'smooth' : 'auto',
            block: 'start',
          });
          return;
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.hash, location.pathname]);

  return null;
}

function HomePage() {
  usePageMeta({ path: '/' });

  return (
    <main id="main-content" className="relative">
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <WorkSection />
      <CTASection />
    </main>
  );
}

export function AppShell() {
  const { reduceEffects } = useMobileExperience();

  return (
    <>
      <ScrollManager />
      <AmbientBackground />
      {!reduceEffects ? <ScrollProgress /> : null}
      {!reduceEffects ? <FilmGrain /> : null}

      <div className="relative min-h-screen overflow-x-clip">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[9999] -translate-y-24 rounded-full bg-[var(--lf-charcoal)] px-5 py-3 text-sm font-semibold text-white transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug/*" element={<ServiceDetail />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries.html" element={<Navigate to="/industries/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/privacy.html" element={<Navigate to="/privacy/" replace />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/terms.html" element={<Navigate to="/terms/" replace />} />
          <Route path="/blog" element={<Navigate to="/solutions/" replace />} />
          <Route path="/blog/*" element={<Navigate to="/solutions/" replace />} />
          <Route
            path="/areas/:slug"
            element={<Navigate to="/services/on-site-it-support-nyc/" replace />}
          />
          <Route
            path="/ai-google-broke-the-internet-websites-survive/"
            element={<Navigate to="/solutions/" replace />}
          />
          <Route
            path="/why-business-websites-will-be-invisible/"
            element={<Navigate to="/solutions/" replace />}
          />
          <Route
            path="/what-google-looks-for-business-website/"
            element={<Navigate to="/solutions/" replace />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}
