import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Wrench, 
  TrendingUp, 
  CreditCard, 
  Apple, 
  Home,
  Check,
  MapPin,
  Globe,
  Zap,
  Shield,
  Clock,
  Sparkles,
  ArrowRight,
  Phone
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const serviceClusters = [
  {
    title: 'On-Site IT Support',
    tagline: 'We show up and fix it.',
    description: 'Mac, PC, printers, Wi-Fi, POS systems — whatever\'s driving you crazy. Same-day service in Manhattan.',
    link: '/services/on-site-it-support-nyc/',
    icon: Wrench,
    location: 'Manhattan, NYC only',
    features: ['Same-day response', 'No fix, no fee', '30-day guarantee', 'Direct tech access']
  },
  {
    title: 'Website Design',
    tagline: 'Your 24/7 storefront.',
    description: 'Beautiful, fast websites that actually bring in customers. Built on platforms you can update yourself.',
    link: '/services/website-design-small-business-nyc/',
    icon: Monitor,
    location: 'Anywhere in the world',
    features: ['2-4 week delivery', 'SEO built-in', 'Mobile-first design', 'Training included']
  },
  {
    title: 'Local SEO & Google Ads',
    tagline: 'Get found locally.',
    description: 'Get found on Google by people in your neighborhood. We handle the technical stuff.',
    link: '/services/local-seo-and-google-ads-nyc/',
    icon: TrendingUp,
    location: 'Anywhere in the US',
    features: ['Google Business optimization', 'Local keyword targeting', 'Monthly reporting', 'Review management']
  },
  {
    title: 'Apple Device Setup',
    tagline: 'Macs, iPads, iPhones.',
    description: 'iPhones, iPads, Macs for your team — set up, secured, and managed simply.',
    link: '/services/apple-device-setup-nyc/',
    icon: Apple,
    location: 'Manhattan, NYC only',
    features: ['MDM deployment', 'Security policies', 'Remote management', 'App distribution']
  },
  {
    title: 'POS & Registers',
    tagline: 'Keep sales flowing.',
    description: 'Square, Clover, Toast — we work with them all. Setup, troubleshooting, training.',
    link: '/services/pos-and-register-setup-nyc/',
    icon: CreditCard,
    location: 'Manhattan, NYC only',
    features: ['All major systems', 'Staff training', 'Integration help', '24/7 support']
  },
  {
    title: 'Smart Systems',
    tagline: 'Modernize your space.',
    description: 'Planning, deployment, and maintenance for smart homes, apartments, offices, and retail spaces.',
    link: '/services/smart-home-services-nyc/',
    icon: Home,
    location: 'Manhattan, NYC only',
    features: ['Smart lighting', 'Security cameras', 'Access control', 'Network infrastructure']
  }
];

const whyChooseUs = [
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Websites in 2-4 weeks. IT support same day. No waiting months for what should take days.'
  },
  {
    icon: Shield,
    title: 'No Long-Term Contracts',
    description: 'Pay for what you need. No retainers, no minimums, no gotchas. We earn your business every time.'
  },
  {
    icon: Sparkles,
    title: 'Premium Quality',
    description: 'Big agency quality without the big agency overhead. Your project gets our full attention.'
  },
  {
    icon: Clock,
    title: 'Transparent Communication',
    description: "You'll always know what we're doing and why. No jargon, no surprises, no disappearing acts."
  }
];

export default function Services() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-cluster',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: servicesRef.current, start: 'top 75%' }
        }
      );

      gsap.fromTo('.why-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: whyRef.current, start: 'top 75%' }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="section-luxury pt-28 lg:pt-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[var(--lf-orange)]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-[var(--lf-stone)]/30 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Our Services</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--lf-charcoal)] leading-tight mb-6">
              Everything your business needs to compete — and win.
            </h1>
            <p className="text-lg lg:text-xl text-[var(--lf-muted)] leading-relaxed mb-8">
              From websites to Wi-Fi, we handle the technical headaches so you can focus on customers, team, and growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-[var(--lf-stone-light)]">
                <Globe className="w-4 h-4 text-[var(--lf-orange)]" />
                <span className="text-sm text-[var(--lf-muted)]">Websites: Worldwide</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-[var(--lf-stone-light)]">
                <MapPin className="w-4 h-4 text-[var(--lf-orange)]" />
                <span className="text-sm text-[var(--lf-muted)]">IT Support: Manhattan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="section-luxury section-luxury-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="section-header-luxury text-center mb-16">
            <p className="eyebrow">What We Do</p>
            <h2 className="title">Services Built for Small Business</h2>
            <p className="description mx-auto">
              Practical, affordable tech support that actually works for businesses like yours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {serviceClusters.map((service, index) => (
              <div 
                key={index}
                className="service-cluster group relative bg-white rounded-3xl p-8 transition-all duration-500 border border-[var(--lf-stone-light)]/50 hover:shadow-2xl hover:border-[var(--lf-orange)]/30 hover:-translate-y-2"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-16 h-16 bg-[var(--lf-orange)]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--lf-orange)] group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-[var(--lf-orange)] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[var(--lf-charcoal)] group-hover:text-[var(--lf-orange)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[var(--lf-orange)] font-medium">{service.tagline}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-[var(--lf-muted)]" />
                      <span className="text-xs text-[var(--lf-muted)]">{service.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-[var(--lf-muted)] leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[var(--lf-graphite)]">
                      <Check className="w-4 h-4 text-[var(--lf-orange)]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  to={service.link}
                  className="inline-flex items-center gap-2 text-[var(--lf-orange)] font-semibold hover:gap-3 transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyRef} className="section-luxury bg-[var(--lf-charcoal)] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--lf-orange)]/10 rounded-full blur-[100px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Why Little Fight</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Not a big agency. Not an offshore shop.
            </h2>
            <p className="text-lg text-white/60">
              We're your dedicated tech partner. Here's what makes us different.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-card bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-[var(--lf-orange)]/30">
                <div className="w-12 h-12 bg-[var(--lf-orange)]/20 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-[var(--lf-orange)]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-luxury bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--lf-charcoal)] mb-6">
            Not sure what you need?
          </h2>
          <p className="text-lg text-[var(--lf-muted)] mb-10 max-w-2xl mx-auto">
            Book a free consultation. We'll assess your situation and recommend the right solution — no pressure, no upsell.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact" className="btn-primary">
              Book Your Free Consultation
            </Link>
            <a href="tel:646-360-0318" className="btn-secondary">
              <Phone className="w-5 h-5 mr-2" />
              Call 646-360-0318
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
