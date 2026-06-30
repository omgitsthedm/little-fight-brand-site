import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import { usePageMeta } from '../hooks/usePageMeta';

const phases = [
  {
    title: 'Understand the business first',
    description:
      'We start with what is actually slowing the business down: unclear messaging, a dated website, weak local visibility, or a daily problem that keeps coming back.',
  },
  {
    title: 'Choose the right first move',
    description:
      'Not every problem needs a redesign. Sometimes the right first move is an audit, a service-page cleanup, a local-search fix, or hands-on support.',
  },
  {
    title: 'Build the clearer version',
    description:
      'Once the direction is clear, we build the cleaner, stronger version and keep the path readable for owners, staff, and customers.',
  },
];

export default function Solutions() {
  usePageMeta({
    title: 'How We Work',
    description:
      'How Little Fight NYC approaches websites, audits, and small-business tech support without layering on unnecessary process.',
    path: '/solutions/',
  });

  return (
    <main id="main-content" className="relative">
      <PageHero
        eyebrow="How We Work"
        title="A better website gets built by making better decisions in the right order."
        description="We do better work when we stop pretending every business needs the same answer. The method is simple: understand the situation, choose the right first move, then build the stronger version cleanly."
      />

      <section className="section-luxury section-luxury-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionIntro
            eyebrow="Process"
            title="Three steps. No fake complexity."
            description="This is the structure behind the work, whether the business needs a redesign, a cleanup, or a calmer first diagnosis."
            className="mb-14"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {phases.map((phase, index) => (
              <article key={phase.title} className="bg-white rounded-3xl p-8 border border-[var(--lf-stone-light)] shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[var(--lf-orange)]/10 text-[var(--lf-orange)] flex items-center justify-center font-bold text-lg mb-5">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-[var(--lf-charcoal)] mb-3">{phase.title}</h3>
                <p className="text-[var(--lf-muted)] leading-relaxed">{phase.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-luxury bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-[var(--lf-charcoal)] mb-6">
            If the current site feels messy, the answer is not more layers. It is a cleaner system.
          </h2>
          <p className="text-lg text-[var(--lf-muted)] leading-relaxed mb-10">
            Start with the service that matches the problem, or start with a private review if the first question is what deserves fixing at all.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/services/" className="btn-primary">
              Explore Services
            </Link>
            <Link to="/services/website-audit-small-business/" className="btn-secondary">
              Get Clarity First
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
