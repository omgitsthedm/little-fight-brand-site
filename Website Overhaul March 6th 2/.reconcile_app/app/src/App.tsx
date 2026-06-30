import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import FilmGrain from './components/FilmGrain';
import AmbientBackground from './components/AmbientBackground';

// Home page components
import HeroSection from './components/HeroSection';
import RevenueLossSection from './components/RevenueLossSection';
import ServicesSection from './components/ServicesSection';
import TrustSection from './components/TrustSection';
import WorkSection from './components/WorkSection';
import CTASection from './components/CTASection';

// Other pages
import Services from './pages/Services';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Home Page Component
function HomePage() {
  return (
    <main className="relative">
      <HeroSection />
      <RevenueLossSection />
      <ServicesSection />
      <TrustSection />
      <WorkSection />
      <CTASection />
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Premium Effects */}
      <AmbientBackground />
      <ScrollProgress />
      <FilmGrain />
      
      <div className="relative min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
