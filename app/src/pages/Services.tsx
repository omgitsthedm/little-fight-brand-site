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
  ArrowRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const serviceClusters = [
  {
    title: 'Website Design & Rebuild',
    tagline: 'Your digital credibility layer.',
    description: 'A website that reflects the actual quality of your business. Fast, clean, and built to earn trust from the first visit.',
    link: '/services/website-design-small-business-nyc/',
    icon: Monitor,
    location: 'Anywhere in the world',
    features: ['2-4 week delivery', 'SEO built-in', 'Mobile-first design', 'Training included']
  },
  {
    title: 'Local SEO & Search Presence',
    tagline: 'Be found by the right people.',
    description: 'Strengthen your visibility where it matters. Local search, Google Business, and the signals that build credibility over time.',
    link: '/services/local-seo-and-google-ads-nyc/',
    icon: TrendingUp,
    location: 'Anywhere in the US',
    features: ['Google Business optimization', 'Local search strategy', 'Monthly reporting', 'Review management']
  },
  {
    title: 'On-Site IT & Infrastructure',
    tagline: 'Fewer disruptions. Smoother operations.',
    description: 'Network, devices, and systems that work the way they should. On-site resolution for the problems that interrupt your business.',
    link: '/services/on-site-it-support-nyc/',
    icon: Wrench,
    location: 'Manhattan, NYC only',
    features: ['Same-day response', 'Standards-first approach', '30-day guarantee', 'Direct access']
  },
  {
    title: 'Apple Device Management',
    tagline: 'Clean device operations.',
    description: 'iPhones, iPads, and Macs for your team — set up, secured, and managed with clear policies and minimal friction.',
    link: '/services/apple-device-setup-nyc/',
    icon: Apple,
    location: 'Manhattan, NYC only',
    features: ['MDM deployment', 'Security policies', 'Remote management', 'App distribution']
  },
  {
    title: 'POS & Payment Systems',
    tagline: 'Reliable revenue infrastructure.',
    description: 'Square, Clover, Toast, and more. Setup, troubleshooting, and the training your team needs to operate confidently.',
    link: '/services/pos-and-register-setup-nyc/',
    icon: CreditCard,
    location: 'Manhattan, NYC only',
    features: ['All major systems', 'Staff training', 'Integration support', 'Ongoing reliability']
  },
  {
    title: 'Smart Systems & Spaces',
    tagline: 'Modern without complicated.',
    description: 'Planning, deployment, and maintenance for smart offices, retail spaces, and homes. Premium systems, cleanly executed.',
    link: '/services/smart-home-services-nyc/',
    icon: Home,
    location: 'Manhattan, NYC only',
    features: ['Smart lighting', 'Security cameras', 'Access control', 'Network infrastructure']
  }
];

const whyChooseUs = [
  {
    icon: Zap,
    title: 'Efficient Timelines',
    description: 'Websites in 2-4 weeks. IT issues resolved same day. We respect your time and move accordingly.'
  },
  {
    icon: Shield,
    title: 'No Lock-In',
    description: 'Flexible engagement structure. No mandatory retainers or long-term contracts. We earn the relationship.'
  },
  {
    icon: Sparkles,
    title: 'Premium Standards',
    description: 'The same quality and attention you would expect from a top-tier firm, applied to businesses that deserve it.'
  },
  {
    icon: Clock,
    title: 'Clear Communication',
    description: 'You will always know what we are doing, why it matters, and what comes next. No jargon, no disappearing acts.'
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
              Your business should look as good as it actually is.
            </h1>
            <p className="text-lg lg:text-xl text-[var(--lf-muted)] leading-relaxed mb-8">
              We modernize how businesses present, operate, and are experienced — from websites and search presence to infrastructure and ongoing support.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-[var(--lf-stone-light)]">
                <Globe className="w-4 h-4 text-[var(--lf-orange)]" />
                <span className="text-sm text-[var(--lf-muted)]">Web Presence: Worldwide</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-[var(--lf-stone-light)]">
                <MapPin className="w-4 h-4 text-[var(--lf-orange)]" />
                <span className="text-sm text-[var(--lf-muted)]">On-Site Operations: Manhattan</span>
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
            <h2 className="title">Presence, Operations, and Ongoing Support</h2>
            <p className="description mx-auto">
              Three areas of focus. Each one strengthens how your business is perceived, how it runs, and how much trust it earns.
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
              A partner, not a vendor.
            </h2>
            <p className="text-lg text-white/60">
              We are selective about who we work with — so we can deliver the standard every client deserves.
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
            Not sure where your site stands?
          </h2>
          <p className="text-lg text-[var(--lf-muted)] mb-10 max-w-2xl mx-auto">
            Start with a website audit to understand what is working, what is not, and what would make the biggest difference. Or book a private consult to discuss your project directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://audits.littlefightnyc.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Audit Your Website
            </a>
            <Link to="/#contact" className="btn-secondary">
              Book a Private Consult
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
