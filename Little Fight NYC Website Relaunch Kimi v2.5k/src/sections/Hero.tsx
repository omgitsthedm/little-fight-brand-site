import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animations
      gsap.fromTo(
        '.hero-eyebrow',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.2 }
      );
      
      gsap.fromTo(
        '.hero-headline',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.35 }
      );
      
      gsap.fromTo(
        '.hero-subhead',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.5 }
      );
      
      gsap.fromTo(
        '.hero-ctas',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.65 }
      );
      
      gsap.fromTo(
        '.hero-pills',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.8 }
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out', delay: 0.4 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen bg-bone pt-20 lg:pt-24"
    >
      <div className="section-padding py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div ref={contentRef} className="order-2 lg:order-1">
            <span className="hero-eyebrow inline-flex items-center gap-2 text-sm text-primary font-medium mb-6">
              <span className="text-lg">👋</span>
              First hour of consulting is free!
            </span>
            
            <h1 className="hero-headline font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-graphite leading-tight mb-6">
              We fix the tech slowing down your business.
            </h1>
            
            <p className="hero-subhead text-lg text-muted leading-relaxed mb-8 max-w-lg">
              No jargon. No judgment. Just warm, practical help for NYC small businesses who have better things to do than fight with their Wi-Fi.
            </p>
            
            <div className="hero-ctas flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary"
              >
                Get Help Today
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection('#services')}
                className="btn-secondary"
              >
                See What We Do
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="hero-pills flex flex-wrap gap-3">
              {['Websites', 'Wi-Fi', 'Email', 'Ongoing IT'].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center px-4 py-2 border border-stone/60 rounded-full font-mono text-xs uppercase tracking-wider text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div ref={imageRef} className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/hero-owner.jpg"
                  alt="Small business owner working confidently"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/5 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
