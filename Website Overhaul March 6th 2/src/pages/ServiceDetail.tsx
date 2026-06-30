import { useMemo, useState } from 'react';
import { Navigate, Link, useParams } from 'react-router-dom';
import { ArrowRight, Check, ChevronDown, MapPin, Phone } from 'lucide-react';
import { getServiceBySlug, resolveServiceSlug } from '../data/services';
import { usePageMeta } from '../hooks/usePageMeta';
import MdiIcon from '../components/MdiIcon';

export default function ServiceDetail() {
  const { slug = '' } = useParams();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const resolvedSlug = resolveServiceSlug(slug);
  const service = useMemo(() => getServiceBySlug(slug), [slug]);
  const isAuditService = service?.slug === 'website-audit-small-business';

  usePageMeta({
    title: service?.title ?? 'Services',
    description:
      service?.description ??
      'Website design, local SEO, private website reviews, on-site IT support, POS setup, Apple device help, and practical technology consulting for small businesses.',
    path: service ? `/services/${service.slug}/` : '/services/',
  });

  if (slug && resolvedSlug !== slug) {
    return <Navigate to={`/services/${resolvedSlug}/`} replace />;
  }

  if (!service) {
    return <Navigate to="/services/" replace />;
  }

  return (
    <main id="main-content" className="relative">
      <section className="section-luxury pt-28 lg:pt-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-0 w-[420px] h-[420px] bg-[var(--lf-orange)]/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-white/30 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-base text-[var(--lf-muted)] mb-4">
            <Link to="/" className="hover:text-[var(--lf-orange)] transition-colors">
              Home
            </Link>{' '}
            /{' '}
            <Link to="/services/" className="hover:text-[var(--lf-orange)] transition-colors">
              Services
            </Link>
          </p>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-14 items-start">
            <div className="max-w-3xl">
              <p className="eyebrow">Service</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--lf-charcoal)] leading-tight mb-6">
                {service.title}
              </h1>
              <p className="text-xl lg:text-[1.35rem] text-[var(--lf-muted)] leading-[1.85] mb-6">
                {service.description}
              </p>
              <p className="text-base text-[var(--lf-muted)] leading-[1.8] mb-8 max-w-3xl">
                If you are not completely sure this is the perfect label, that is okay. Start with the problem that feels closest and we will help you sort out the right next step.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[var(--lf-stone-light)] text-base text-[var(--lf-muted)]">
                  <MapPin className="w-4 h-4 text-[var(--lf-orange)]" />
                  {service.availability}
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--lf-orange)]/10 text-base font-medium text-[var(--lf-orange)]">
                  {service.category}
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                {isAuditService ? (
                  <a
                    href="https://audits.littlefightnyc.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Start the audit
                  </a>
                ) : (
                  <Link to="/contact/" className="btn-primary">
                    Talk it through
                  </Link>
                )}
                <Link to="/contact/" className="btn-secondary">
                  {isAuditService ? 'Ask a question first' : 'Book a warm intro call'}
                </Link>
                <a href="tel:646-360-0318" className="btn-secondary">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 646-360-0318
                </a>
              </div>
            </div>

            <aside className="bg-white rounded-3xl p-8 border border-[var(--lf-stone-light)] shadow-xl">
              <div className="w-16 h-16 bg-[var(--lf-orange)]/10 rounded-2xl flex items-center justify-center mb-6">
                <MdiIcon name={service.icon} className="text-[1.9rem] text-[var(--lf-orange)]" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--lf-orange)] mb-3">
                Why owners ask for this
              </p>
              <p className="text-[var(--lf-charcoal)] text-xl font-medium mb-4">{service.tagline}</p>
              <p className="text-base text-[var(--lf-muted)] leading-[1.8] mb-4">{service.heroNote}</p>
              <div className="rounded-2xl bg-[var(--lf-bone)] px-4 py-4">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--lf-orange)] mb-2">
                  What usually starts the conversation
                </p>
                <p className="text-base leading-[1.75] text-[var(--lf-graphite)]">{service.painPoints[0]}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-luxury section-luxury-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12">
          <div className="bg-white rounded-3xl p-8 border border-[var(--lf-stone-light)] shadow-sm">
            <p className="eyebrow">Common Problems</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--lf-charcoal)] mb-6">
              Signs this is the part of the business that needs attention.
            </h2>
            <div className="space-y-4">
              {service.painPoints.map((item) => (
                <div key={item} className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--lf-orange)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[var(--lf-orange)]" />
                  </div>
                  <p className="text-base text-[var(--lf-muted)] leading-[1.8]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[var(--lf-charcoal)] rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--lf-orange)]/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <p className="eyebrow text-white/60">What We Handle</p>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                The work is practical, specific, and built around real operations.
              </h2>
              <div className="space-y-4">
                {service.includes.map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[var(--lf-orange)]" />
                    </div>
                    <p className="text-base text-white/75 leading-[1.8]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-luxury bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="eyebrow">Why It Pays Off</p>
            <h2 className="title">What owners usually get back</h2>
            <p className="description mx-auto">{service.roiSummary}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {service.outcomes.map((item) => (
              <article
                key={item}
                className="bg-[var(--lf-bone)] rounded-3xl p-8 border border-transparent hover:border-[var(--lf-orange)]/20 hover:bg-white hover:shadow-lg transition-all"
              >
                <p className="text-lg font-semibold text-[var(--lf-charcoal)] leading-snug">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-luxury section-luxury-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="eyebrow">Examples</p>
            <h2 className="title">How this changes shape across different kinds of businesses</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {service.examples.map((example) => (
              <article
                key={example.title}
                className="bg-white rounded-3xl p-8 border border-[var(--lf-stone-light)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--lf-orange)] mb-3">
                  {example.label}
                </p>
                <h3 className="text-xl font-semibold text-[var(--lf-charcoal)] mb-3">{example.title}</h3>
                <p className="text-base text-[var(--lf-muted)] leading-[1.8]">{example.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-luxury bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow">FAQ</p>
            <h2 className="title">Questions that usually come up first</h2>
          </div>

          <div className="faq-list">
            {service.faqs.map((faq, index) => (
              <div key={faq.question} className="faq-item">
                <button
                  className="faq-question w-full flex items-center justify-between py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span className="font-medium text-[var(--lf-charcoal)] pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--lf-muted)] transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-5 text-base text-[var(--lf-muted)] leading-[1.8]">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-luxury bg-[var(--lf-charcoal)] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[360px] h-[360px] bg-[var(--lf-orange)]/15 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="eyebrow text-white/60">Next Step</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            If this sounds close to what you need, start there.
          </h2>
          <p className="text-lg text-white/70 leading-[1.85] mb-10">
            We can map the problem, decide what matters most, and tell you the cleanest next move without turning the conversation into jargon or pressure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact/" className="btn-primary">
              Talk it through
            </Link>
            <Link to="/services/" className="btn-secondary">
              See All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
