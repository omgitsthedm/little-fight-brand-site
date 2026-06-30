import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, GraduationCap, Heart, MapPin, MessageCircle, Zap } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import { usePageMeta } from '../hooks/usePageMeta';

const values = [
  {
    icon: MessageCircle,
    title: 'No Jargon, Ever',
    description:
      "We explain things in plain English so owners can make good decisions without pretending to be technical.",
  },
  {
    icon: MapPin,
    title: 'Show Up',
    description:
      'On-site in Manhattan when the business needs hands-on help, not a vague promise that somebody will circle back later.',
  },
  {
    icon: GraduationCap,
    title: "Teach, Don't Just Fix",
    description:
      'We leave owners and teams with a clearer understanding of what changed, what matters, and what to do next.',
  },
  {
    icon: Heart,
    title: 'Actually Care',
    description:
      'The work should lower stress, not just close a ticket. That only happens when the relationship is human.',
  },
  {
    icon: Zap,
    title: 'Move Fast',
    description:
      'When revenue, staff, or credibility are on the line, speed matters. We fix the critical path before optional polish.',
  },
];

export default function About() {
  usePageMeta({
    title: 'About Little Fight NYC | Small-Business Tech Partner',
    description:
      'Why Little Fight NYC exists, what we stand for, and how we support small businesses that need technology to make more sense.',
    path: '/about/',
  });

  return (
    <main id="main-content" className="relative">
      <PageHero
        eyebrow="About"
        title="We built Little Fight for owners who are tired of being left alone with important technology decisions."
        description="The business owner usually has enough to carry already: payroll, customers, staff, timing, and reputation. They should not also need to become an accidental web strategist or IT manager just to keep the place running."
        detail="Little Fight exists to close that gap with warmer communication, faster action, and work that makes the business feel clearer on the outside and calmer behind the scenes."
      />

      <section className="section-luxury bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <article className="rounded-[2rem] bg-[var(--lf-bone)] p-8 lg:p-10">
              <p className="eyebrow">Why We Exist</p>
              <h2 className="mb-6 text-3xl font-bold text-[var(--lf-charcoal)] lg:text-4xl">
                Good businesses were paying too much for unclear help and still ending up with fragile systems.
              </h2>
              <div className="space-y-5 text-lg leading-[1.85] text-[var(--lf-muted)]">
                <p>
                  We kept seeing the same pattern in small businesses across the city: a polished-looking website that did not convert, a patchwork of Wi-Fi and POS fixes that nobody trusted, or a growing team running on workarounds because nobody had time to step back and clean the system up properly.
                </p>
                <p>
                  None of that meant the owners were behind. It usually meant they were busy, successful enough to have outgrown the cheap setup, and unsupported in the moments where clearer guidance would have saved the most money and stress.
                </p>
                <p>
                  That is the gap this business is designed to close.
                </p>
              </div>
            </article>

            <div className="grid gap-6">
              <article className="rounded-[2rem] border border-[var(--lf-stone-light)] bg-white p-8 lg:p-9">
                <p className="eyebrow">How We Work</p>
                <div className="space-y-5 text-lg leading-[1.85] text-[var(--lf-muted)]">
                  <p>
                    We do not try to impress people with complexity. We want the owner to understand what is wrong, what matters first, and what the cleanest next move actually is.
                  </p>
                  <p>
                    Sometimes that means redesigning a dated website. Sometimes it means starting with an audit. Sometimes it means showing up and steadying a messy tech setup so the staff can get through the week without friction.
                  </p>
                </div>
              </article>

              <article className="rounded-[2rem] bg-[var(--lf-charcoal)] p-8 lg:p-9 text-white">
                <div className="mb-4 flex items-center gap-3">
                  <Coffee className="h-6 w-6 text-[var(--lf-orange)]" />
                  <p className="text-xl font-semibold text-white">The name says it plainly.</p>
                </div>
                <p className="text-lg leading-[1.85] text-white/74">
                  Small businesses are always in some kind of fight: rising costs, stronger competition, dated tools, confusing vendors, or customers with less patience than they had five years ago. We exist to help owners punch above their weight.
                </p>
              </article>
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] border border-[var(--lf-orange)]/15 bg-gradient-to-br from-[var(--lf-charcoal)] to-[var(--lf-graphite)] p-10 text-center text-white lg:p-14">
            <p className="eyebrow text-white/60">What Matters To Us</p>
            <h3 className="mx-auto mb-5 max-w-3xl text-2xl font-bold text-white lg:text-3xl">
              When small businesses feel sharper, calmer, and easier to trust, neighborhoods keep their character.
            </h3>
            <p className="mx-auto max-w-3xl text-lg leading-[1.85] text-white/72">
              That is the real point of the work. Better systems are not just about convenience. They help good businesses stay competitive, keep their standards high, and show up the way they deserve to.
            </p>
          </div>
        </div>
      </section>

      <section className="section-luxury section-luxury-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionIntro
            eyebrow="How We Operate"
            title="The standards behind the work"
            description="The experience should feel clear, respectful, and grounded in what the owner actually needs."
            className="mb-14"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-[2rem] border border-[var(--lf-stone-light)] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--lf-orange)]/10">
                  <value.icon className="h-7 w-7 text-[var(--lf-orange)]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[var(--lf-charcoal)]">{value.title}</h3>
                <p className="text-base leading-[1.8] text-[var(--lf-muted)]">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-luxury bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--lf-charcoal)] mb-6">
            If the business needs a calmer next step, start there.
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-[1.85] text-[var(--lf-muted)]">
            We can talk through the situation in plain language and point you toward the cleanest first move.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact/" className="btn-primary">
              Start a Conversation
            </Link>
            <Link to="/work/" className="btn-secondary">
              See Our Work <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
