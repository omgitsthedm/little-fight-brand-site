import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Wrench, 
  TrendingUp, 
  CreditCard, 
  Apple, 
  Home as HomeIcon,
  ArrowRight,
  ChevronDown,
  MapPin,
  Globe,
  Clock
} from 'lucide-react';
import CityGrowth from '../components/CityGrowth';

gsap.registerPlugin(ScrollTrigger);

// FAQ data from handoff
const faqs = [
  {
    question: "I'm not good with technology. Can you still help me?",
    answer: "Absolutely — that's exactly who we're here for! We specialize in helping business owners who aren't tech-savvy. We explain everything in plain English, never make you feel dumb for asking questions, and set up systems that are easy for you to use."
  },
  {
    question: "Do you come to my business location?",
    answer: "Yes! We provide on-site IT support throughout Manhattan and the greater NYC area. We'll come directly to your shop, restaurant, office, or wherever you need us. No need to unplug everything and drag it somewhere — we come to you."
  },
  {
    question: "How much does this cost?",
    answer: "Our pricing varies based on what you need, but we're specifically designed to be affordable for small businesses. We offer a free first hour of consulting so you can understand exactly what you need before spending anything."
  },
  {
    question: "Can you help fix my POS system or cash register?",
    answer: "Yes! POS system issues are one of our specialties. We work with Square, Clover, Toast, Lightspeed, and other common systems. Whether your register is freezing or your card reader won't connect, we've got you covered."
  },
  {
    question: "Why is it called Little Fight NYC?",
    answer: "Small businesses in NYC are in a constant fight — against rising rents, big corporations, and tech that makes life harder. We help small businesses punch above their weight. When local businesses succeed, neighborhoods stay interesting."
  }
];

// Services data from handoff
const services = [
  {
    icon: Wrench,
    title: 'On-Site IT Support',
    description: 'We show up and fix it. Mac, PC, printers, Wi-Fi, POS systems — whatever\'s driving you crazy.',
    link: '/services/on-site-it-support-nyc/'
  },
  {
    icon: Monitor,
    title: 'Website Design',
    description: 'Beautiful, fast websites that actually bring in customers. Built on platforms you can update yourself.',
    link: '/services/website-design-small-business-nyc/'
  },
  {
    icon: TrendingUp,
    title: 'Local SEO & Ads',
    description: 'Get found on Google by people in your neighborhood. We handle the technical stuff.',
    link: '/services/local-seo-and-google-ads-nyc/'
  },
  {
    icon: Apple,
    title: 'Apple Device Setup',
    description: 'iPhones, iPads, Macs for your team — set up, secured, and managed simply.',
    link: '/services/apple-device-setup-nyc/'
  },
  {
    icon: CreditCard,
    title: 'POS & Registers',
    description: 'Square, Clover, Toast — we work with them all. Setup, troubleshooting, training.',
    link: '/services/pos-and-register-setup-nyc/'
  },
  {
    icon: HomeIcon,
    title: 'Smart Home & Business Systems',
    description: 'Planning, deployment, and maintenance for smart homes, apartments, offices, and retail spaces.',
    link: '/services/smart-home-services-nyc/'
  }
];

// Manhattan neighborhoods
const manhattanAreas = [
  'East Village',
  'Lower East Side', 
  'West Village',
  'Meatpacking District',
  'SoHo',
  'Midtown',
  'Upper East Side'
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.hero-badge',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );
      gsap.fromTo('.hero-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: 'power2.out' }
      );
      gsap.fromTo('.hero-subtitle',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo('.hero-buttons',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.5, ease: 'power2.out' }
      );

      // Scroll-triggered animations
      gsap.fromTo('.proof-pill',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.proof-strip',
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.service-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 75%',
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main id="main-content">
      {/* Hero Section - Handoff Pattern */}
      <section ref={heroRef} className="hero relative min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #f5f7f9 0%, #eef2f6 100%)' }}
      >
        {/* Decorative shapes */}
        <div className="hero-shape hero-shape-1 absolute top-20 left-10 w-64 h-64 bg-[var(--lf-orange)]/5 rounded-full blur-3xl" />
        <div className="hero-shape hero-shape-2 absolute bottom-20 right-10 w-80 h-80 bg-[var(--lf-orange)]/5 rounded-full blur-3xl" />

        <div className="hero-container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero Content */}
            <div className="hero-content">
              <div className="hero-badge inline-flex items-center gap-2 mb-6">
                <span className="hero-badge-dot w-2 h-2 bg-[var(--lf-orange)] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-[var(--lf-muted)]">NYC's Friendliest Tech Support</span>
              </div>
              
              <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--lf-charcoal)] leading-tight mb-6">
                We fix the tech slowing down your business.
              </h1>
              
              <p className="hero-subtitle text-lg lg:text-xl text-[var(--lf-muted)] leading-relaxed mb-8 max-w-xl">
                No jargon. No judgment. Just warm, practical help for NYC small businesses who have better things to do than fight with their Wi-Fi.
              </p>
              
              <div className="hero-buttons flex flex-wrap gap-4 mb-6">
                <Link to="/#contact" className="btn-primary">
                  Get Help Today
                </Link>
                <Link to="/services" className="btn-secondary">
                  See What We Do
                </Link>
              </div>
              
              <p className="hero-note text-sm text-[var(--lf-muted)]">
                First hour of consulting is free — no strings attached.
              </p>
            </div>

            {/* Hero Visual - City Growth */}
            <div className="hero-visual">
              <CityGrowth />
              <p className="text-center text-xs text-[var(--lf-muted)] mt-3">
                Bakery · Cafe · Hotel · Realty · Restaurant
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Strip - Handoff Pattern */}
      <section className="proof-strip section-shell">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="proof-strip-label text-sm font-bold uppercase tracking-wider text-[var(--lf-orange)] mb-6">
            Built for the businesses that keep NYC alive
          </p>
          <h2 className="sr-only">Why small businesses choose Little Fight NYC</h2>
          
          <div className="proof-pill-grid grid md:grid-cols-3 gap-4">
            <article className="proof-pill">
              <h3 className="text-base font-semibold text-[var(--lf-charcoal)] mb-2">Clarity-First Messaging</h3>
              <p className="text-sm text-[var(--lf-muted)] leading-relaxed">
                Your service pages explain what you do in plain language people and search systems can parse quickly.
              </p>
            </article>
            <article className="proof-pill">
              <h3 className="text-base font-semibold text-[var(--lf-charcoal)] mb-2">Fast, Trustworthy UX</h3>
              <p className="text-sm text-[var(--lf-muted)] leading-relaxed">
                Mobile-first structure, clean hierarchy, and high-contrast design choices that feel premium and dependable.
              </p>
            </article>
            <article className="proof-pill">
              <h3 className="text-base font-semibold text-[var(--lf-charcoal)] mb-2">Real Entity Signals</h3>
              <p className="text-sm text-[var(--lf-muted)] leading-relaxed">
                Connected pages, local context, and clear contact pathways that make your business easier to verify.
              </p>
            </article>
          </div>
          
          <p className="proof-strip-links mt-6 text-sm text-[var(--lf-muted)]">
            See it in action:{' '}
            <Link to="/work/" className="link-primary">Case studies</Link> ·{' '}
            <Link to="/services/" className="link-primary">Services</Link> ·{' '}
            <Link to="/contact/" className="link-primary">Start a project</Link>
          </p>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="section-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path fill="rgba(234,235,236,0.5)" d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* Services Grid - Handoff Pattern */}
      <section ref={servicesRef} id="services" className="section-shell section-shell-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="section-header text-center mb-12">
            <p className="section-eyebrow">What We Do</p>
            <h2 className="section-title">Tech Support That Actually Helps</h2>
            <p className="section-description mx-auto">
              From websites to Wi-Fi, we handle the technical headaches so you can focus on customers, team, and momentum.
            </p>
          </div>

          <div className="services-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link 
                key={index}
                to={service.link}
                className="service-card group"
              >
                <div className="service-icon w-14 h-14 bg-[var(--lf-orange)]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[var(--lf-orange)]/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-[var(--lf-orange)]" />
                </div>
                <h3 className="service-title text-lg font-semibold text-[var(--lf-charcoal)] mb-3 group-hover:text-[var(--lf-orange)] transition-colors">
                  {service.title}
                </h3>
                <p className="service-description text-sm text-[var(--lf-muted)] leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services/" className="btn-secondary">
              View All Services <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Difference - Handoff Pattern */}
      <section id="how-it-works" className="premium-difference section-shell section-shell-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="premium-difference-grid grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8 items-stretch">
            {/* Left Column - Copy */}
            <div className="premium-difference-copy bg-white border border-[#e7edf2] rounded-2xl p-7 shadow-lg">
              <p className="section-eyebrow">What Feels Different</p>
              <h2 className="section-title text-2xl lg:text-3xl mb-4">
                Premium doesn't mean fancy words. It means less friction.
              </h2>
              <p className="section-description text-base mb-6">
                When structure, messaging, and speed are aligned, customers understand your value faster and search systems trust your pages sooner.
              </p>
              <div className="premium-difference-links flex flex-wrap gap-3">
                <Link to="/blog/" className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full border border-[#d6e2ea] text-[var(--lf-orange)] hover:border-[var(--lf-orange)] transition-colors">
                  Read strategy insights
                </Link>
                <Link to="/services/website-design-small-business-nyc/" className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full border border-[#d6e2ea] text-[var(--lf-orange)] hover:border-[var(--lf-orange)] transition-colors">
                  Explore website design
                </Link>
              </div>
            </div>

            {/* Right Column - Before/After/Outcome */}
            <div className="premium-difference-list flex flex-col gap-3">
              <article className="premium-point">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--lf-orange)] mb-2">Before</h3>
                <p className="text-sm text-[var(--lf-muted)]">
                  Generic pages, mixed messages, and traffic that doesn't convert.
                </p>
              </article>
              <article className="premium-point">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--lf-orange)] mb-2">After</h3>
                <p className="text-sm text-[var(--lf-muted)]">
                  Focused pages, clearer trust signals, and easier decision-making for the right clients.
                </p>
              </article>
              <article className="premium-point">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--lf-orange)] mb-2">Outcome</h3>
                <p className="text-sm text-[var(--lf-muted)]">
                  Less explaining on calls. More inbound leads that already understand what you do.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us CTA Section */}
      <section id="about" className="cta-section section-shell bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="section-header">
            <p className="section-eyebrow">Why Us</p>
            <h2 className="section-title text-3xl lg:text-4xl">We're Small Business People Too</h2>
            <p className="section-description mx-auto">
              Big corporations have IT departments. You have us — a small, scrappy team that actually cares about keeping NYC's independent businesses thriving.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas - Handoff Pattern */}
      <section id="areas" className="section-shell section-shell-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="section-header text-center mb-12">
            <p className="section-eyebrow">Where We Help</p>
            <h2 className="section-title">Manhattan On-Site + Nationwide Remote</h2>
            <p className="section-description mx-auto">
              On-site IT support throughout Manhattan. Remote support for small businesses anywhere in the United States.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Manhattan On-Site */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--lf-stone-light)] shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-[var(--lf-orange)]/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[var(--lf-orange)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--lf-charcoal)]">Manhattan On-Site Service</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {manhattanAreas.map((area, index) => (
                  <Link 
                    key={index}
                    to={`/areas/${area.toLowerCase().replace(/\s+/g, '-')}.html`}
                    className="px-3 py-1.5 text-sm bg-[var(--lf-bone)] text-[var(--lf-graphite)] rounded-full hover:bg-[var(--lf-orange)] hover:text-white transition-colors"
                  >
                    {area}
                  </Link>
                ))}
              </div>
            </div>

            {/* Nationwide Remote */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--lf-stone-light)] shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-[var(--lf-orange)]/10 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[var(--lf-orange)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--lf-charcoal)]">Nationwide Remote Support</h3>
              </div>
              <p className="text-[var(--lf-muted)] mb-4">
                Not in NYC? We've got you covered. Our remote IT support helps small businesses across all 50 states.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-[var(--lf-graphite)]">
                  <Monitor className="w-4 h-4 text-[var(--lf-orange)]" />
                  Screen sharing troubleshooting
                </li>
                <li className="flex items-center gap-2 text-sm text-[var(--lf-graphite)]">
                  <Clock className="w-4 h-4 text-[var(--lf-orange)]" />
                  Phone & video support
                </li>
                <li className="flex items-center gap-2 text-sm text-[var(--lf-graphite)]">
                  <Monitor className="w-4 h-4 text-[var(--lf-orange)]" />
                  Website design & SEO
                </li>
                <li className="flex items-center gap-2 text-sm text-[var(--lf-graphite)]">
                  <Globe className="w-4 h-4 text-[var(--lf-orange)]" />
                  Cloud setup & management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Handoff Pattern */}
      <section id="faq" className="section-shell bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="section-header text-center mb-12">
            <p className="section-eyebrow">FAQ</p>
            <h2 className="section-title">Questions We Get A Lot</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question w-full flex items-center justify-between py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span className="font-medium text-[var(--lf-charcoal)] pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[var(--lf-muted)] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`faq-answer overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="faq-answer-content pb-5 text-[var(--lf-muted)] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-sm text-[var(--lf-muted)]">
            Can't find what you're looking for?{' '}
            <a href="tel:646-360-0318" className="link-primary">Give us a call</a>
          </p>
        </div>
      </section>

      {/* Contact Section - Handoff Pattern */}
      <section id="contact" className="section-shell section-shell-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="section-header text-center mb-12">
            <p className="section-eyebrow">Get In Touch</p>
            <h2 className="section-title">Let's Talk About Your Tech</h2>
            <p className="section-description mx-auto">
              Got a question? Need help? Just want to vent about your printer? We're here for it.
            </p>
          </div>

          <div className="contact-grid grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <a 
                href="mailto:hello@littlefightnyc.com"
                className="contact-info-item flex items-center gap-4 p-5 bg-white rounded-2xl border border-[var(--lf-stone-light)] hover:border-[var(--lf-orange)] transition-colors group"
              >
                <div className="contact-icon w-12 h-12 bg-[var(--lf-orange)]/10 rounded-xl flex items-center justify-center group-hover:bg-[var(--lf-orange)]/20 transition-colors">
                  <Monitor className="w-5 h-5 text-[var(--lf-orange)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--lf-muted)] uppercase tracking-wider">Email us</p>
                  <p className="font-medium text-[var(--lf-charcoal)]">hello@littlefightnyc.com</p>
                </div>
              </a>

              <a 
                href="tel:646-360-0318"
                className="contact-info-item flex items-center gap-4 p-5 bg-white rounded-2xl border border-[var(--lf-stone-light)] hover:border-[var(--lf-orange)] transition-colors group"
              >
                <div className="contact-icon w-12 h-12 bg-[var(--lf-orange)]/10 rounded-xl flex items-center justify-center group-hover:bg-[var(--lf-orange)]/20 transition-colors">
                  <Clock className="w-5 h-5 text-[var(--lf-orange)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--lf-muted)] uppercase tracking-wider">Call us</p>
                  <p className="font-medium text-[var(--lf-charcoal)]">646-360-0318</p>
                </div>
              </a>

              <div className="contact-info-item flex items-center gap-4 p-5 bg-white rounded-2xl border border-[var(--lf-stone-light)]">
                <div className="contact-icon w-12 h-12 bg-[var(--lf-orange)]/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[var(--lf-orange)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--lf-muted)] uppercase tracking-wider">Based in</p>
                  <p className="font-medium text-[var(--lf-charcoal)]">Manhattan, NYC</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="form-container bg-white rounded-2xl p-6 lg:p-8 border border-[var(--lf-stone-light)]">
              <form name="contact" method="POST" className="space-y-4">
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="form-row grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label block text-sm font-medium text-[var(--lf-charcoal)] mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Jane Smith"
                      className="form-input w-full px-4 py-3 rounded-xl border border-[var(--lf-stone-light)] focus:border-[var(--lf-orange)] focus:ring-2 focus:ring-[var(--lf-orange)]/20 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label block text-sm font-medium text-[var(--lf-charcoal)] mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="jane@business.com"
                      className="form-input w-full px-4 py-3 rounded-xl border border-[var(--lf-stone-light)] focus:border-[var(--lf-orange)] focus:ring-2 focus:ring-[var(--lf-orange)]/20 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label block text-sm font-medium text-[var(--lf-charcoal)] mb-2">
                    Business Name
                  </label>
                  <input 
                    type="text" 
                    name="business"
                    placeholder="Jane's Coffee Shop"
                    className="form-input w-full px-4 py-3 rounded-xl border border-[var(--lf-stone-light)] focus:border-[var(--lf-orange)] focus:ring-2 focus:ring-[var(--lf-orange)]/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="form-label block text-sm font-medium text-[var(--lf-charcoal)] mb-2">
                    Location
                  </label>
                  <input 
                    type="text" 
                    name="location"
                    placeholder="City, State"
                    className="form-input w-full px-4 py-3 rounded-xl border border-[var(--lf-stone-light)] focus:border-[var(--lf-orange)] focus:ring-2 focus:ring-[var(--lf-orange)]/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="form-label block text-sm font-medium text-[var(--lf-charcoal)] mb-2">
                    What do you need help with?
                  </label>
                  <textarea 
                    name="message"
                    rows={4}
                    placeholder="My Wi-Fi keeps dropping, my website looks like it's from 2005, and I think my POS hates me..."
                    className="form-textarea w-full px-4 py-3 rounded-xl border border-[var(--lf-stone-light)] focus:border-[var(--lf-orange)] focus:ring-2 focus:ring-[var(--lf-orange)]/20 outline-none transition-all resize-none"
                    required
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
