import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredServiceSlugs, serviceDetails } from '../data/services';
import { gsap, registerScrollTrigger } from '@/lib/gsap';
import MdiIcon from './MdiIcon';
import { useMobileExperience } from '@/hooks/useMobileExperience';

const services = featuredServiceSlugs
  .map((slug) => serviceDetails.find((service) => service.slug === slug))
  .filter((service): service is NonNullable<typeof service> => Boolean(service));

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { reduceEffects } = useMobileExperience();

  useEffect(() => {
    registerScrollTrigger();

    const ctx = gsap.context(() => {
      if (reduceEffects) {
        gsap.set(['.services-header', '.service-card-clean'], { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        '.services-header',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.72,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' },
        },
      );

      gsap.fromTo(
        '.service-card-clean',
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.56,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.services-grid-clean', start: 'top 78%' },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reduceEffects]);

  return (
    <section ref={sectionRef} id="services" className="section-luxury section-luxury-soft">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="services-header mb-10 text-left sm:mb-14 md:text-center">
          <p className="eyebrow">Services & Offerings</p>
          <h2 className="title md:mx-auto">Start with the problem that is costing the business the most.</h2>
          <p className="description md:mx-auto">
            These are the core ways we help. Most services pay back in one of three places: stronger trust, fewer wasted staff hours, or a clearer path to calls, bookings, and sales.
          </p>
        </div>

        <div className="services-grid-clean grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}/`}
              className="service-card-clean group rounded-[1.75rem] border border-[var(--lf-stone-light)]/70 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[var(--lf-orange)]/25 hover:shadow-xl sm:p-7 lg:rounded-[2rem]"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--lf-orange)]/10 text-[var(--lf-orange)] sm:h-14 sm:w-14">
                  <MdiIcon name={service.icon} className="text-[1.75rem]" />
                </div>
                <span className="rounded-full border border-[var(--lf-stone-light)] bg-[var(--lf-bone)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--lf-muted)]">
                  {service.category}
                </span>
              </div>

              <h3 className="mb-2 text-[1.45rem] font-semibold text-[var(--lf-charcoal)] transition-colors group-hover:text-[var(--lf-orange)] sm:text-[1.7rem]">
                {service.shortTitle}
              </h3>
              <p className="mb-3 text-base font-medium leading-[1.7] text-[var(--lf-orange)]">
                {service.tagline}
              </p>
              <p className="mb-5 text-base leading-[1.8] text-[var(--lf-muted)]">
                {service.description}
              </p>

              <div className="space-y-3 rounded-[1.35rem] bg-[var(--lf-bone)] px-4 py-4 sm:px-5">
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--lf-orange)]">
                    Common pain
                  </p>
                  <p className="text-base leading-[1.75] text-[var(--lf-graphite)]">{service.painPoints[0]}</p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--lf-orange)]">
                    Payoff
                  </p>
                  <p className="text-base leading-[1.75] text-[var(--lf-graphite)]">{service.roiSummary}</p>
                </div>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-[var(--lf-orange)] transition-all group-hover:gap-3">
                <span>Open service page</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
