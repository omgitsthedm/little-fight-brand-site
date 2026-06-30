import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Sparkles, TrendingDown, Clock, Shield } from 'lucide-react';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animations
      gsap.fromTo('.hero-eyebrow',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo('.hero-title span',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.4 }
      );
      gsap.fromTo('.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.8 }
      );
      gsap.fromTo('.hero-cta-group',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1 }
      );
      gsap.fromTo('.hero-trust',
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out', delay: 1.2 }
      );
      gsap.fromTo('.hero-stat',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out', delay: 1.4 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large floating orbs */}
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[var(--lf-orange)]/5 rounded-full blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-[var(--lf-stone)]/30 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-[var(--lf-orange)]/8 rounded-full blur-[60px] animate-pulse-soft" style={{ animationDelay: '1s' }} />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(var(--lf-stone) 1px, transparent 1px),
              linear-gradient(90deg, var(--lf-stone) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="hero-eyebrow inline-flex items-center gap-2 mb-8">
              <span className="w-2 h-2 bg-[var(--lf-orange)] rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--lf-muted)]">
                NYC's Concierge Tech Support
              </span>
            </div>

            {/* Title - The Hook */}
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--lf-charcoal)] leading-[1.05] mb-8">
              <span className="block">Every minute</span>
              <span className="block">your tech fails,</span>
              <span className="block text-[var(--lf-orange)]">you're losing money.</span>
            </h1>

            {/* Subtitle - The Promise */}
            <p className="hero-subtitle text-lg lg:text-xl text-[var(--lf-muted)] leading-relaxed mb-10 max-w-xl">
              We show up. We fix it. We make sure it stays fixed. 
              <span className="text-[var(--lf-charcoal)] font-medium"> No judgment. No tech-speak. Just results.</span>
            </p>

            {/* CTA Group */}
            <div className="hero-cta-group flex flex-wrap gap-4 mb-10">
              <Link to="/#contact" className="btn-primary group">
                <span>Get Help in 2 Hours</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="tel:646-360-0318" 
                className="btn-secondary group"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Call Now: 646-360-0318</span>
              </a>
            </div>

            {/* Trust Badge */}
            <div className="hero-trust flex items-center gap-3 mb-12">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--lf-orange)] to-[var(--lf-orange-light)] border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {['SM', 'TC', 'JL', 'MS'][i-1]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Sparkles key={i} className="w-4 h-4 text-[var(--lf-orange)] fill-[var(--lf-orange)]" />
                  ))}
                </div>
                <p className="text-sm text-[var(--lf-muted)]">
                  <span className="font-semibold text-[var(--lf-charcoal)]">200+ businesses</span> trust us
                </p>
              </div>
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div ref={statsRef} className="relative">
            <div className="grid gap-4">
              {/* Stat Card 1 - The Pain */}
              <div className="hero-stat bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-[var(--lf-stone-light)]/50 hover:shadow-2xl hover:border-[var(--lf-orange)]/20 transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                    <TrendingDown className="w-7 h-7 text-red-500" />
                  </div>
                  <div>
                    <p className="text-4xl lg:text-5xl font-bold text-red-500 mb-1">$847</p>
                    <p className="text-sm text-[var(--lf-muted)]">Average daily revenue lost to tech issues</p>
                    <p className="text-xs text-[var(--lf-muted)] mt-2">Source: Small Business Trends, 2024</p>
                  </div>
                </div>
              </div>

              {/* Stat Card 2 - The Solution */}
              <div className="hero-stat bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-[var(--lf-stone-light)]/50 hover:shadow-2xl hover:border-[var(--lf-orange)]/20 transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[var(--lf-orange)]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--lf-orange)]/20 transition-colors">
                    <Clock className="w-7 h-7 text-[var(--lf-orange)]" />
                  </div>
                  <div>
                    <p className="text-4xl lg:text-5xl font-bold text-[var(--lf-orange)] mb-1">2 hrs</p>
                    <p className="text-sm text-[var(--lf-muted)]">Average response time in Manhattan</p>
                    <p className="text-xs text-[var(--lf-muted)] mt-2">Same-day service, guaranteed</p>
                  </div>
                </div>
              </div>

              {/* Stat Card 3 - The Guarantee */}
              <div className="hero-stat bg-gradient-to-br from-[var(--lf-charcoal)] to-[var(--lf-graphite)] rounded-3xl p-6 lg:p-8 shadow-xl text-white">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-[var(--lf-orange)]" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold mb-2">The Little Fight Guarantee</p>
                    <p className="text-sm text-white/70 leading-relaxed">
                      If we can't fix it, you don't pay. If it breaks again within 30 days, we come back free. 
                      <span className="text-[var(--lf-orange)] font-medium"> No questions asked.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-[var(--lf-orange)] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-float">
              First Hour FREE
            </div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--lf-stone-light)]">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 text-center">
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-[var(--lf-charcoal)]">200+</p>
              <p className="text-sm text-[var(--lf-muted)]">Businesses Helped</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-[var(--lf-charcoal)]">4.9/5</p>
              <p className="text-sm text-[var(--lf-muted)]">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-[var(--lf-charcoal)]">12</p>
              <p className="text-sm text-[var(--lf-muted)]">NYC Neighborhoods</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-[var(--lf-charcoal)]">5+</p>
              <p className="text-sm text-[var(--lf-muted)]">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
