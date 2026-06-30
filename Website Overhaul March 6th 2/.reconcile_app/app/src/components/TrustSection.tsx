import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, RefreshCw, Clock, Phone, HeartHandshake, BadgeCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const guarantees = [
  {
    icon: Shield,
    title: 'No Fix, No Fee',
    description: "If we can't solve your problem, you don't pay a dime. We only charge for results."
  },
  {
    icon: RefreshCw,
    title: '30-Day Warranty',
    description: "If the same issue comes back within 30 days, we'll fix it again — absolutely free."
  },
  {
    icon: Clock,
    title: '2-Hour Response',
    description: 'In Manhattan, we aim to be at your door within 2 hours. Because tech emergencies wait for no one.'
  },
  {
    icon: Phone,
    title: 'Direct Line to Your Tech',
    description: 'No call centers. No offshore teams. You talk directly to the person fixing your problem.'
  }
];

const testimonials = [
  {
    quote: "Our POS crashed during the lunch rush. Little Fight was at our door in 90 minutes. They didn't just fix it — they showed us how to prevent it from happening again.",
    author: 'Tom Chen',
    business: 'Noodle House, SoHo'
  },
  {
    quote: "I was embarrassed to call because I'm not tech-savvy. They made me feel comfortable immediately. No judgment, just help.",
    author: 'Sarah Mitchell',
    business: 'Bloom Salon, East Village'
  },
  {
    quote: "They didn't just build us a website. They built us a growth engine. Our online bookings tripled in the first month.",
    author: 'Jennifer Lopez',
    business: 'Core Fitness, Midtown'
  }
];

export default function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.trust-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo('.guarantee-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.guarantees-grid', start: 'top 75%' }
        }
      );

      gsap.fromTo('.testimonial-card',
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.testimonials-grid', start: 'top 75%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="how-it-works"
      className="section-luxury bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="trust-header text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--lf-orange)]/10 rounded-full mb-6">
            <HeartHandshake className="w-4 h-4 text-[var(--lf-orange)]" />
            <span className="text-sm font-semibold text-[var(--lf-orange)] uppercase tracking-wider">The Little Fight Promise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--lf-charcoal)] mb-6 leading-tight">
            We're not just fixing tech.<br />
            <span className="text-[var(--lf-orange)]">We're backing you up.</span>
          </h2>
          <p className="text-lg text-[var(--lf-muted)] leading-relaxed">
            Like a Ritz-Carlton concierge who never lets a guest leave unsatisfied, 
            we don't rest until your business is running smoothly. 
            <span className="text-[var(--lf-charcoal)] font-medium"> That's not just service — that's a partnership.</span>
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="guarantees-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {guarantees.map((guarantee, index) => (
            <div 
              key={index}
              className="guarantee-card bg-[var(--lf-bone)] rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:border-[var(--lf-orange)]/20 border border-transparent transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-[var(--lf-orange)]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--lf-orange)] group-hover:scale-110 transition-all duration-300">
                <guarantee.icon className="w-7 h-7 text-[var(--lf-orange)] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--lf-charcoal)] mb-3">{guarantee.title}</h3>
              <p className="text-sm text-[var(--lf-muted)] leading-relaxed">{guarantee.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="testimonials-grid grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card bg-gradient-to-br from-[var(--lf-charcoal)] to-[var(--lf-graphite)] rounded-3xl p-8 text-white relative overflow-hidden"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-4 text-6xl text-white/10 font-serif">"</div>
              
              <div className="relative z-10">
                <p className="text-white/90 leading-relaxed mb-6 text-sm">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--lf-orange)] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{testimonial.author}</p>
                    <p className="text-white/60 text-xs">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-[var(--lf-bone)] rounded-3xl">
            <BadgeCheck className="w-8 h-8 text-[var(--lf-orange)]" />
            <div className="text-center sm:text-left">
              <p className="font-semibold text-[var(--lf-charcoal)]">Ready to experience the difference?</p>
              <p className="text-sm text-[var(--lf-muted)]">First hour of consultation is completely free.</p>
            </div>
            <a 
              href="tel:646-360-0318" 
              className="btn-primary whitespace-nowrap"
            >
              Call 646-360-0318
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
