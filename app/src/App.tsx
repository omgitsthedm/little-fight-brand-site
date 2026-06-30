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
import BlogTeaser from './components/BlogTeaser';

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

// Placeholder page for routes without dedicated pages yet
function PlaceholderPage({ title }: { title: string }) {
  return (
    <main className="relative pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-white mb-4">{title}</h1>
        <p className="text-white/50">This page is coming soon.</p>
      </div>
    </main>
  );
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
      <BlogTeaser />
      <CTASection />
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Ambient Effects */}
      <AmbientBackground />
      <ScrollProgress />
      <FilmGrain />

      <div className="relative min-h-screen overflow-x-clip">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
          <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
          <Route path="/faq" element={<PlaceholderPage title="FAQ" />} />
          <Route path="/showcase" element={<PlaceholderPage title="Showcase" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
