import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import PageHero from '../components/PageHero';
import { usePageMeta } from '../hooks/usePageMeta';
import { caseStudies } from '../data/caseStudies';
import { gsap, registerScrollTrigger } from '@/lib/gsap';
import { useMobileExperience } from '@/hooks/useMobileExperience';

export default function Work() {
  const casesRef = useRef<HTMLDivElement>(null);
  const { reduceEffects } = useMobileExperience();

  usePageMeta({
    title: 'Work & Case Patterns | Little Fight NYC',
    description:
      'Representative examples of the kinds of problems Little Fight NYC solves for restaurants, salons, fitness brands, and other small businesses.',
    path: '/work/',
  });

  useEffect(() => {
    registerScrollTrigger();
    const ctx = gsap.context(() => {
      if (reduceEffects) {
        gsap.set('.case-study', { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo('.case-study',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: casesRef.current, start: 'top 70%' }
        }
      );
    });

    return () => ctx.revert();
  }, [reduceEffects]);

  return (
    <main id="main-content" className="relative">
      <PageHero
        eyebrow="Our Work"
        title="Representative examples of the kinds of business problems we actually solve."
        description="These examples are based on real client situations. The names stay private. The problems are common, and the fixes are practical."
      />

      <section ref={casesRef} className="section-luxury section-luxury-soft">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id}
              className={`case-study py-12 sm:py-16 lg:py-20 ${index !== 0 ? 'border-t border-[var(--lf-stone-light)]' : ''}`}
            >
              <div className={`grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-20`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative overflow-hidden rounded-[2rem] shadow-xl image-hover-luxury sm:rounded-3xl">
                    <img
                      src={study.image}
                      alt={study.business}
                      width={1248}
                      height={832}
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="h-72 w-full object-cover sm:h-80 lg:h-[500px]"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                      <p className="text-base font-medium text-[var(--lf-charcoal)]">{study.type}</p>
                      <p className="text-sm text-[var(--lf-muted)]">{study.location}</p>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[var(--lf-charcoal)] mb-2">
                    {study.business}
                  </h2>
                  <p className="text-lg text-[var(--lf-orange)] font-medium mb-2">{study.type} • {study.location}</p>
                  <p className="text-sm uppercase tracking-[0.16em] text-[var(--lf-muted)] mb-8">{study.note}</p>

                  <div className="space-y-8">
                    <div className="rounded-[1.75rem] bg-[var(--lf-bone)] p-5 sm:rounded-3xl sm:p-6">
                      <h3 className="text-lg font-semibold text-[var(--lf-charcoal)] mb-2">What changed</h3>
                      <p className="text-base text-[var(--lf-muted)] leading-[1.8]">{study.summary}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[var(--lf-charcoal)] mb-2">The Challenge</h3>
                      <p className="text-base text-[var(--lf-muted)] leading-[1.8]">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[var(--lf-charcoal)] mb-2">Our Solution</h3>
                      <p className="text-base text-[var(--lf-muted)] leading-[1.8]">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[var(--lf-charcoal)] mb-4">The Results</h3>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                        {study.results.map((result, i) => (
                          <div key={i} className="rounded-2xl bg-[var(--lf-bone)] p-4 text-center">
                            <result.icon className="w-6 h-6 text-[var(--lf-orange)] mx-auto mb-2" />
                            <p className="text-lg font-bold text-[var(--lf-charcoal)]">{result.metric}</p>
                            <p className="text-sm text-[var(--lf-muted)]">{result.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-luxury bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--lf-charcoal)] mb-6">
            If one of these patterns feels familiar, that is probably the right starting point.
          </h2>
          <p className="text-lg text-[var(--lf-muted)] leading-[1.85] mb-10 max-w-2xl mx-auto">
            We can talk through the website, the day-to-day issue, or the private review path without turning it into a long sales process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact/" className="btn-primary">
              Book a Warm Intro Call
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
