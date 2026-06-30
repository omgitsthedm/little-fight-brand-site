import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Clock, 
  Users,
  Star,
  Phone
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: 'noodle-house',
    business: 'Noodle House',
    type: 'Restaurant',
    location: 'SoHo',
    image: '/cafe_interior.jpg',
    challenge: 'POS system constantly crashing during dinner rush. Losing orders, frustrating customers, staff stressed.',
    solution: 'Complete POS system overhaul, staff training, backup system setup.',
    results: [
      { metric: 'Zero', label: 'downtime since', icon: Clock },
      { metric: '25%', label: 'faster processing', icon: TrendingUp },
      { metric: '100%', label: 'staff confidence', icon: Users }
    ],
    quote: "Our POS was crashing during dinner rush. Little Fight had us back online in an hour. They saved our Friday night service.",
    quoteAuthor: 'Tom Chen',
    quoteRole: 'Owner, Noodle House'
  },
  {
    id: 'bloom-salon',
    business: 'Bloom Salon',
    type: 'Hair Salon',
    location: 'East Village',
    image: '/salon_interior.jpg',
    challenge: 'Website was outdated, not mobile-friendly, and wasn\'t showing up in local searches.',
    solution: 'Complete website redesign with online booking, local SEO optimization.',
    results: [
      { metric: '40%', label: 'more bookings', icon: TrendingUp },
      { metric: '#1', label: 'local ranking', icon: Star },
      { metric: '60%', label: 'new inquiries', icon: Users }
    ],
    quote: "They fixed our booking system in 30 minutes. Finally, an IT company that doesn't talk down to me.",
    quoteAuthor: 'Sarah Mitchell',
    quoteRole: 'Owner, Bloom Salon'
  },
  {
    id: 'core-fitness',
    business: 'Core Fitness',
    type: 'Boutique Gym',
    location: 'Midtown',
    image: '/gym_interior.jpg',
    challenge: 'No online presence. Relying entirely on walk-ins and word-of-mouth.',
    solution: 'Complete digital presence: website, booking, SEO, social media.',
    results: [
      { metric: '3x', label: 'more inquiries', icon: TrendingUp },
      { metric: '50%', label: 'online discovery', icon: Users },
      { metric: '100%', label: 'booked classes', icon: Star }
    ],
    quote: "They didn't just build us a website. They built us a growth engine.",
    quoteAuthor: 'Jennifer Lopez',
    quoteRole: 'Founder, Core Fitness'
  }
];

export default function Work() {
  const heroRef = useRef<HTMLDivElement>(null);
  const casesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.case-study',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: casesRef.current, start: 'top 70%' }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="section-luxury pt-28 lg:pt-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[var(--lf-orange)]/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Our Work</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--lf-charcoal)] leading-tight mb-6">
              Real businesses. Real results. Real fights won.
            </h1>
            <p className="text-lg lg:text-xl text-[var(--lf-muted)] leading-relaxed">
              Every small business has a story. Here's how we helped some of our favorites punch above their weight.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section ref={casesRef} className="section-luxury section-luxury-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id}
              className={`case-study py-16 lg:py-20 ${index !== 0 ? 'border-t border-[var(--lf-stone-light)]' : ''}`}
            >
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl image-hover-luxury">
                    <img
                      src={study.image}
                      alt={study.business}
                      className="w-full h-80 lg:h-[500px] object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                      <p className="text-sm font-medium text-[var(--lf-charcoal)]">{study.type}</p>
                      <p className="text-xs text-[var(--lf-muted)]">{study.location}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[var(--lf-charcoal)] mb-2">
                    {study.business}
                  </h2>
                  <p className="text-[var(--lf-orange)] font-medium mb-8">{study.type} • {study.location}</p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="font-semibold text-[var(--lf-charcoal)] mb-2">The Challenge</h3>
                      <p className="text-[var(--lf-muted)] leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[var(--lf-charcoal)] mb-2">Our Solution</h3>
                      <p className="text-[var(--lf-muted)] leading-relaxed">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[var(--lf-charcoal)] mb-4">The Results</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {study.results.map((result, i) => (
                          <div key={i} className="bg-[var(--lf-bone)] rounded-2xl p-4 text-center">
                            <result.icon className="w-6 h-6 text-[var(--lf-orange)] mx-auto mb-2" />
                            <p className="text-2xl font-bold text-[var(--lf-charcoal)]">{result.metric}</p>
                            <p className="text-xs text-[var(--lf-muted)]">{result.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <blockquote className="border-l-4 border-[var(--lf-orange)] pl-6 py-2">
                      <p className="text-lg text-[var(--lf-charcoal)] italic mb-4">"{study.quote}"</p>
                      <footer>
                        <p className="font-medium text-[var(--lf-charcoal)]">{study.quoteAuthor}</p>
                        <p className="text-sm text-[var(--lf-muted)]">{study.quoteRole}</p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-luxury bg-[var(--lf-charcoal)] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--lf-orange)]/10 rounded-full blur-[100px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="stat-number-luxury mb-2">200+</p>
              <p className="text-white/60">Businesses Helped</p>
            </div>
            <div>
              <p className="stat-number-luxury mb-2">4.9/5</p>
              <p className="text-white/60">Average Rating</p>
            </div>
            <div>
              <p className="stat-number-luxury mb-2">12</p>
              <p className="text-white/60">NYC Neighborhoods</p>
            </div>
            <div>
              <p className="stat-number-luxury mb-2">98%</p>
              <p className="text-white/60">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-luxury bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--lf-charcoal)] mb-6">
            Ready to be our next success story?
          </h2>
          <p className="text-lg text-[var(--lf-muted)] mb-10 max-w-2xl mx-auto">
            Every small business deserves a fighting chance. Let's talk about how we can help yours punch above its weight.
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
