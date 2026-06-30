import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import { gsap, registerScrollTrigger } from '@/lib/gsap';
import { useMobileExperience } from '@/hooks/useMobileExperience';

export default function WorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { reduceEffects } = useMobileExperience();

  useEffect(() => {
    registerScrollTrigger();
    const ctx = gsap.context(() => {
      if (reduceEffects) {
        gsap.set(['.work-header', '.case-card'], { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo('.work-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo('.case-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.cases-grid', start: 'top 75%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reduceEffects]);

  return (
    <section 
      ref={sectionRef}
      className="section-luxury section-luxury-soft"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="work-header mb-10 flex flex-col gap-5 sm:mb-16 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Our Work</p>
            <h2 className="title">Real examples of how this helps small businesses.</h2>
            <p className="description">
              The return usually shows up in three places: fewer lost leads, less staff frustration, and a business that feels easier to trust.
            </p>
          </div>
          <Link to="/work/" className="btn-secondary self-stretch sm:self-start lg:self-auto">
            See More Examples
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Cases Grid */}
        <div className="cases-grid grid gap-4 md:grid-cols-3 md:gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              to="/work/"
              className="case-card group relative overflow-hidden rounded-[1.85rem] bg-white shadow-lg transition-all duration-500 hover:shadow-2xl sm:rounded-3xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden sm:h-64">
                <img 
                  src={study.image} 
                  alt={study.business}
                  width={1248}
                  height={832}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1280px) 26rem, (min-width: 768px) 33vw, 100vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-[var(--lf-charcoal)]">
                  {study.type}
                </div>

                {/* Result Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">{study.highlightMetric}</span>
                  </div>
                  <p className="text-white/80 text-base">{study.highlightLabel}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-[var(--lf-charcoal)] mb-1 group-hover:text-[var(--lf-orange)] transition-colors">
                  {study.business}
                </h3>
                <p className="text-base text-[var(--lf-muted)] mb-1">{study.location}</p>
                <p className="text-sm uppercase tracking-[0.16em] text-[var(--lf-orange)] mb-3">{study.note}</p>
                <p className="text-base text-[var(--lf-muted)] leading-[1.8]">
                  {study.summary}
                </p>
                
                <div className="flex items-center gap-2 mt-4 text-[var(--lf-orange)] font-semibold text-base group-hover:gap-3 transition-all">
                  <span>Read the example</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
