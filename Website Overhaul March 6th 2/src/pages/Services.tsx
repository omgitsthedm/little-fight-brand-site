import { ArrowRight, Globe, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import { serviceDetails, serviceGroups } from '../data/services';
import { usePageMeta } from '../hooks/usePageMeta';
import MdiIcon from '../components/MdiIcon';

export default function Services() {
  usePageMeta({
    title: 'Services',
    description:
      'Website design, private website reviews, local SEO, on-site IT support, POS setup, Apple device help, smart systems, and practical services for small businesses.',
    path: '/services/',
  });

  return (
    <main id="main-content" className="relative">
      <PageHero
        eyebrow="Services"
        title="Start with the part of the business that feels the most expensive, fragile, or overdue."
        description="You do not need the perfect label first. Choose the problem that feels the most urgent, dated, messy, or revenue-sensitive, and we will help you sort the right sequence."
        detail="This page is the clean overview. The deeper explanation stays on each service page so the site does not keep repeating itself."
      >
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--lf-stone-light)] bg-white px-4 py-2 shadow-sm">
            <Globe className="w-4 h-4 text-[var(--lf-orange)]" />
            <span className="text-base text-[var(--lf-muted)]">Remote work nationwide</span>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--lf-stone-light)] bg-white px-4 py-2 shadow-sm">
            <MapPin className="w-4 h-4 text-[var(--lf-orange)]" />
            <span className="text-base text-[var(--lf-muted)]">On-site in Manhattan</span>
          </span>
        </div>
      </PageHero>

      <section className="section-luxury section-luxury-soft">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
          {serviceGroups.map((group) => {
            const groupServices = serviceDetails.filter((service) => group.slugs.includes(service.slug));

            return (
              <div key={group.title}>
                <SectionIntro
                  eyebrow={group.title}
                  title={group.title}
                  description={group.description}
                  align="left"
                  className="mb-10"
                />

                <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                  {groupServices.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}/`}
                      className="group rounded-[1.85rem] border border-[var(--lf-stone-light)] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl sm:rounded-3xl sm:p-8"
                    >
                      <div className="mb-6 flex items-start gap-4 sm:gap-5">
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[var(--lf-orange)]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--lf-orange)] sm:h-16 sm:w-16">
                          <MdiIcon
                            name={service.icon}
                            className="text-[1.9rem] text-[var(--lf-orange)] transition-colors group-hover:text-white"
                          />
                        </div>
                        <div>
                          <h3 className="text-[1.45rem] font-semibold text-[var(--lf-charcoal)] transition-colors group-hover:text-[var(--lf-orange)] sm:text-2xl">
                            {service.shortTitle}
                          </h3>
                          <p className="text-base text-[var(--lf-orange)] font-medium leading-relaxed">{service.tagline}</p>
                          <p className="text-sm text-[var(--lf-muted)] mt-2">{service.availability}</p>
                        </div>
                      </div>

                      <p className="text-base text-[var(--lf-muted)] leading-[1.8] mb-6">{service.description}</p>

                      <div className="mb-4 rounded-2xl bg-[var(--lf-bone)] px-4 py-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--lf-orange)] mb-2">
                          Common pain
                        </p>
                        <p className="text-base leading-[1.75] text-[var(--lf-graphite)]">{service.painPoints[0]}</p>
                      </div>

                      <p className="mb-6 text-base leading-[1.75] text-[var(--lf-muted)]">
                        <span className="font-semibold text-[var(--lf-charcoal)]">Why owners pay for it:</span>{' '}
                        {service.roiSummary}
                      </p>

                      <div className="inline-flex items-center gap-2 text-base text-[var(--lf-orange)] font-semibold group-hover:gap-3 transition-all">
                        <span>View service details</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-luxury bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--lf-charcoal)] mb-6">
            Not sure which service is the right first move?
          </h2>
          <p className="text-lg text-[var(--lf-muted)] leading-[1.85] mb-10">
            That is normal. Most businesses do not need everything. They need the right sequence, explained plainly, without being sold five things they do not need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact/" className="btn-primary">
              Book a Friendly Call
            </Link>
            <Link to="/services/website-audit-small-business/" className="btn-secondary">
              Get Clarity First
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
