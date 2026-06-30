import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MessageCircle, ArrowRight, Sparkles, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );

      gsap.fromTo('.cta-button',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.cta-buttons', start: 'top 80%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="section-luxury relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--lf-charcoal)] via-[var(--lf-graphite)] to-[var(--lf-charcoal)]" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--lf-orange)]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[var(--lf-orange)]/5 rounded-full blur-[100px]" />
      
      {/* Animated Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Content */}
        <div className="cta-content">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-[var(--lf-orange)]" />
            <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">No Judgment. Just Help.</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Stop losing money<br />
            <span className="text-[var(--lf-orange)]">to broken tech.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-white/70 leading-relaxed mb-4 max-w-2xl mx-auto">
            Whether it's a crashed website, a POS that won't cooperate, or Wi-Fi that's driving you insane — 
            <span className="text-white font-medium"> we're here to help.</span>
          </p>

          <p className="text-lg text-white/50 mb-12">
            No tech-speak. No judgment. Just warm, practical support from people who actually care.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="cta-buttons flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a 
            href="tel:646-360-0318" 
            className="cta-button btn-primary text-lg px-10 py-5 group"
          >
            <Phone className="w-5 h-5 mr-2" />
            <span>Call Now: 646-360-0318</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="mailto:hello@littlefightnyc.com" 
            className="cta-button inline-flex items-center gap-2 px-8 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all"
          >
            <Mail className="w-5 h-5" />
            <span>Email Us</span>
          </a>
        </div>

        {/* Contact Options */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="cta-button flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <Clock className="w-5 h-5 text-[var(--lf-orange)]" />
            <div className="text-left">
              <p className="text-white font-medium text-sm">2-Hour Response</p>
              <p className="text-white/50 text-xs">In Manhattan</p>
            </div>
          </div>
          <div className="cta-button flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <MessageCircle className="w-5 h-5 text-[var(--lf-orange)]" />
            <div className="text-left">
              <p className="text-white font-medium text-sm">Text Us</p>
              <p className="text-white/50 text-xs">646-360-0318</p>
            </div>
          </div>
          <div className="cta-button flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <Sparkles className="w-5 h-5 text-[var(--lf-orange)]" />
            <div className="text-left">
              <p className="text-white font-medium text-sm">First Hour FREE</p>
              <p className="text-white/50 text-xs">No strings attached</p>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-white/40 text-sm">
          Available Monday–Friday, 8am–8pm. Emergency? Call us anyway — we answer.
        </p>
      </div>
    </section>
  );
}
