import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap, registerScrollTrigger } from '@/lib/gsap';
import MdiIcon from './MdiIcon';
import { useMobileExperience } from '@/hooks/useMobileExperience';

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { reduceEffects } = useMobileExperience();

  useEffect(() => {
    registerScrollTrigger();
    const ctx = gsap.context(() => {
      if (reduceEffects) {
        gsap.set(['.cta-content', '.cta-button'], { opacity: 1, y: 0 });
        return;
      }

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
  }, [reduceEffects]);

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="section-luxury relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--lf-charcoal)] via-[var(--lf-graphite)] to-[var(--lf-charcoal)]" />
      <div className="absolute left-1/4 top-0 hidden h-[600px] w-[600px] rounded-full bg-[var(--lf-orange)]/10 blur-[120px] sm:block" />
      <div className="absolute bottom-0 right-1/4 hidden h-[400px] w-[400px] rounded-full bg-[var(--lf-orange)]/5 blur-[100px] sm:block" />
      
      {/* Animated Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02] sm:opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="cta-content rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8 sm:text-center lg:p-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <MdiIcon name="hand-heart-outline" className="text-base text-[var(--lf-orange)]" />
            <span className="text-sm font-semibold text-white/80 uppercase tracking-[0.16em]">Plain-English help for busy owners</span>
          </div>

          {/* Headline */}
          <h2 className="mb-6 text-[2.3rem] font-bold leading-[1.06] text-white sm:text-5xl lg:text-6xl">
            Tell us what is costing<br />
            <span className="text-[var(--lf-orange)]">time, trust, or sales.</span>
          </h2>

          {/* Subtitle */}
          <p className="mb-4 max-w-3xl text-lg leading-[1.8] text-white/74 sm:mx-auto sm:text-xl sm:leading-[1.85]">
            If the website feels old, the tech keeps breaking, or you are tired of guessing what to fix first,
            <span className="text-white font-medium"> start there.</span>
          </p>

          <p className="mb-10 max-w-3xl text-[1.02rem] leading-[1.8] text-white/60 sm:mx-auto sm:mb-12 sm:text-lg">
            Most owners do not need more jargon. They need a clear next move. The first conversation is free, practical, and meant to save time, not waste it.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="cta-buttons mb-10 flex flex-col items-stretch justify-center gap-3 sm:mb-12 sm:flex-row sm:items-center sm:gap-4">
          <a 
            href="tel:646-360-0318" 
            className="cta-button btn-primary text-lg px-10 py-5 group"
          >
            <MdiIcon name="phone-outline" className="mr-2 text-[1.35rem]" />
            <span>Call 646-360-0318</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            to="/services/website-audit-small-business/"
            className="cta-button inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-5 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            <MdiIcon name="clipboard-check-outline" className="text-[1.35rem]" />
            <span>Start with Clarity</span>
          </Link>
        </div>

        {/* Contact Options */}
        <div className="grid max-w-3xl gap-3 sm:mx-auto sm:grid-cols-3 sm:gap-4">
          <div className="cta-button flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <MdiIcon name="clock-outline" className="text-[1.3rem] text-[var(--lf-orange)]" />
            <div className="text-left">
              <p className="text-white font-medium text-base">Fast response</p>
              <p className="text-white/50 text-sm">Especially in Manhattan</p>
            </div>
          </div>
          <div className="cta-button flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <MdiIcon name="email-outline" className="text-[1.3rem] text-[var(--lf-orange)]" />
            <div className="text-left">
              <p className="text-white font-medium text-base">Email the situation</p>
              <p className="text-white/50 text-sm">hello@littlefightnyc.com</p>
            </div>
          </div>
          <div className="cta-button flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <MdiIcon name="star-outline" className="text-[1.3rem] text-[var(--lf-orange)]" />
            <div className="text-left">
              <p className="text-white font-medium text-base">First hour free</p>
              <p className="text-white/50 text-sm">A clear first conversation</p>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="mt-10 text-base text-white/42 sm:mt-12 sm:text-center">
          Monday through Friday, 8am–8pm. If it feels urgent, call anyway.
        </p>
      </div>
    </section>
  );
}
