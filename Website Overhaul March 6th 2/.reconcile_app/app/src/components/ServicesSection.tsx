import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Monitor, 
  TrendingUp, 
  Apple, 
  CreditCard, 
  Home,
  ArrowRight,
  Check,
  Zap
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Wrench,
    title: 'On-Site IT Support',
    tagline: 'We show up and fix it.',
    description: 'Mac, PC, printers, Wi-Fi, POS systems — whatever\'s driving you crazy. Same-day service in Manhattan.',
    features: ['Same-day response', 'No fix, no fee', '30-day guarantee'],
    link: '/services/on-site-it-support-nyc/',
    highlight: true
  },
  {
    icon: Monitor,
    title: 'Website Design',
    tagline: 'Your 24/7 storefront.',
    description: 'Beautiful, fast websites that actually bring in customers. Built on platforms you can update yourself.',
    features: ['2-4 week delivery', 'SEO built-in', 'Mobile-first design'],
    link: '/services/website-design-small-business-nyc/'
  },
  {
    icon: TrendingUp,
    title: 'Local SEO & Google Ads',
    tagline: 'Get found locally.',
    description: 'Get found on Google by people in your neighborhood. We handle the technical stuff.',
    features: ['Google Business optimization', 'Local keyword targeting', 'Monthly reporting'],
    link: '/services/local-seo-and-google-ads-nyc/'
  },
  {
    icon: Apple,
    title: 'Apple Device Setup',
    tagline: 'Macs, iPads, iPhones.',
    description: 'iPhones, iPads, Macs for your team — set up, secured, and managed simply.',
    features: ['MDM deployment', 'Security policies', 'Remote management'],
    link: '/services/apple-device-setup-nyc/'
  },
  {
    icon: CreditCard,
    title: 'POS & Registers',
    tagline: 'Keep sales flowing.',
    description: 'Square, Clover, Toast — we work with them all. Setup, troubleshooting, training.',
    features: ['All major systems', 'Staff training', 'Integration help'],
    link: '/services/pos-and-register-setup-nyc/'
  },
  {
    icon: Home,
    title: 'Smart Systems',
    tagline: 'Modernize your space.',
    description: 'Planning, deployment, and maintenance for smart homes, apartments, offices, and retail spaces.',
    features: ['Smart lighting', 'Security cameras', 'Access control'],
    link: '/services/smart-home-services-nyc/'
  }
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.services-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo('.service-card-luxury',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.services-grid', start: 'top 75%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="services"
      className="section-luxury section-luxury-soft"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="services-header section-header-luxury text-center mb-16">
          <p className="eyebrow">What We Do</p>
          <h2 className="title">Concierge Tech Support for Your Business</h2>
          <p className="description mx-auto">
            Like a Ritz-Carlton concierge for your technology — we anticipate problems before they happen, 
            and we're there the moment you need us. No judgment. No tech-speak. Just solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className={`service-card-luxury group relative bg-white rounded-3xl p-8 transition-all duration-500 ${
                service.highlight 
                  ? 'border-2 border-[var(--lf-orange)] shadow-xl shadow-[var(--lf-orange)]/10' 
                  : 'border border-[var(--lf-stone-light)]/50 hover:border-[var(--lf-orange)]/30'
              } hover:shadow-2xl hover:-translate-y-2`}
            >
              {/* Highlight Badge */}
              {service.highlight && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-[var(--lf-orange)] text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                service.highlight 
                  ? 'bg-[var(--lf-orange)]' 
                  : 'bg-[var(--lf-orange)]/10 group-hover:bg-[var(--lf-orange)]/20'
              }`}>
                <service.icon className={`w-8 h-8 ${service.highlight ? 'text-white' : 'text-[var(--lf-orange)]'}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-[var(--lf-charcoal)] mb-1 group-hover:text-[var(--lf-orange)] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--lf-orange)] font-medium mb-3">{service.tagline}</p>
              <p className="text-[var(--lf-muted)] text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[var(--lf-graphite)]">
                    <Check className="w-4 h-4 text-[var(--lf-orange)]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex items-center gap-2 text-[var(--lf-orange)] font-semibold text-sm group-hover:gap-3 transition-all">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-[var(--lf-stone-light)]">
            <Zap className="w-5 h-5 text-[var(--lf-orange)]" />
            <span className="text-[var(--lf-charcoal)] font-medium">Not sure what you need?</span>
            <Link to="/#contact" className="link-luxury text-sm">
              Let's talk — first hour free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
