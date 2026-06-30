import { useEffect, useRef } from 'react';
import { gsap, registerScrollTrigger } from '@/lib/gsap';
import MdiIcon from './MdiIcon';
import { useMobileExperience } from '@/hooks/useMobileExperience';

const workflowSteps = [
  {
    step: '01',
    title: 'We find what is really hurting the business',
    description:
      'The real issue may be the website, the network, the checkout path, or the messy handoff between them.',
  },
  {
    step: '02',
    title: 'We fix the highest-cost problem first',
    description:
      'We start with the part that is wasting time, trust, or sales before we touch optional polish.',
  },
  {
    step: '03',
    title: 'We leave you with a simpler next step',
    description:
      'You get a stable fix, plain-English follow-up, and a plan your team can actually use.',
  },
];

const guarantees = [
  {
    icon: 'shield-check-outline',
    title: 'No Fix, No Fee',
    description: 'If we cannot solve the problem, you do not pay. The help has to be real.'
  },
  {
    icon: 'clipboard-check-outline',
    title: '30-Day Warranty',
    description: 'If the same issue comes back within 30 days, we handle it again without charging you.'
  },
  {
    icon: 'clock-outline',
    title: 'Fast Response',
    description: 'In Manhattan, we aim to respond quickly because downtime gets expensive fast.'
  },
  {
    icon: 'phone-outline',
    title: 'Direct Contact',
    description: 'No call centers and no handoff maze. You talk to the person helping you.'
  }
];

export default function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { reduceEffects } = useMobileExperience();

  useEffect(() => {
    registerScrollTrigger();
    const ctx = gsap.context(() => {
      if (reduceEffects) {
        gsap.set(['.trust-header', '.guarantee-card', '.process-card'], { opacity: 1, y: 0 });
        return;
      }

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

      gsap.fromTo('.process-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.process-grid', start: 'top 80%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reduceEffects]);

  return (
    <section 
      ref={sectionRef}
      id="how-it-works"
      className="section-luxury bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="trust-header mb-12 max-w-3xl text-left sm:mx-auto sm:mb-16 sm:text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--lf-orange)]/10 rounded-full mb-6">
            <MdiIcon name="hand-heart-outline" className="text-base text-[var(--lf-orange)]" />
            <span className="text-sm font-semibold text-[var(--lf-orange)] uppercase tracking-[0.16em]">How It Works</span>
          </div>
          <h2 className="mb-5 text-[2.1rem] font-bold leading-[1.08] text-[var(--lf-charcoal)] sm:mb-6 sm:text-4xl lg:text-5xl">
            Good help should fix the thing<br />
            <span className="text-[var(--lf-orange)]">that is costing the business the most.</span>
          </h2>
          <p className="text-lg text-[var(--lf-muted)] leading-[1.8] sm:text-xl sm:leading-[1.85]">
            If the website is confusing, customers hesitate. If the systems are messy, staff lose time. The job is to find the real bottleneck, fix it first, and leave the business easier to run.
          </p>
        </div>

        <div className="process-grid mb-12 grid gap-4 md:grid-cols-3 md:gap-6 lg:mb-16">
          {workflowSteps.map((step) => (
            <article
              key={step.step}
              className="process-card rounded-[1.75rem] border border-[var(--lf-stone-light)] bg-white p-6 shadow-sm sm:p-8"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--lf-orange)] mb-4">
                {step.step}
              </p>
              <h3 className="mb-3 text-[1.45rem] font-semibold text-[var(--lf-charcoal)] sm:text-2xl">{step.title}</h3>
              <p className="text-base text-[var(--lf-muted)] leading-[1.8]">{step.description}</p>
            </article>
          ))}
        </div>

        {/* Guarantees Grid */}
        <div className="guarantees-grid grid gap-4 md:grid-cols-2 md:gap-6 lg:mb-20 lg:grid-cols-4">
          {guarantees.map((guarantee, index) => (
            <div 
              key={index}
              className="guarantee-card group rounded-[1.75rem] border border-transparent bg-[var(--lf-bone)] p-6 transition-all duration-500 hover:border-[var(--lf-orange)]/20 hover:bg-white hover:shadow-xl sm:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--lf-orange)]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--lf-orange)] sm:mb-6 sm:h-14 sm:w-14">
                <MdiIcon
                  name={guarantee.icon}
                  className="text-[1.7rem] text-[var(--lf-orange)] transition-colors group-hover:text-white"
                />
              </div>
              <h3 className="mb-3 text-[1.2rem] font-semibold text-[var(--lf-charcoal)] sm:text-xl">{guarantee.title}</h3>
              <p className="text-base text-[var(--lf-muted)] leading-[1.8]">{guarantee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
