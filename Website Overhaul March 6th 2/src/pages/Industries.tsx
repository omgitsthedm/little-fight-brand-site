import {
  BriefcaseBusiness,
  Building2,
  Dumbbell,
  Scissors,
  Store,
  UtensilsCrossed,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import { usePageMeta } from '../hooks/usePageMeta';

const industries = [
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & Hospitality',
    description:
      'POS reliability, reservations, menus, Wi-Fi, ordering flow, and guest-facing websites that help people decide quickly on a phone.',
  },
  {
    icon: Scissors,
    title: 'Salons, Med Spas & Wellness',
    description:
      'Booking-first websites, local visibility, cleaner device setups, and a presentation that feels calm, clear, and reassuring before someone ever calls.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Professional Services',
    description:
      'Clearer trust signals for firms, consultants, advisors, and practices that need to sound credible without sounding stiff.',
  },
  {
    icon: Store,
    title: 'Retail & Consumer Brands',
    description:
      'E-commerce, in-store tech, point-of-sale setup, and brand systems that translate cleanly from shelf to screen.',
  },
  {
    icon: Dumbbell,
    title: 'Fitness & Membership Businesses',
    description:
      'Clear conversion paths for classes, memberships, inquiries, and recurring customer communication.',
  },
  {
    icon: Building2,
    title: 'Studios, Offices & Mixed-Use Spaces',
    description:
      'Connected business systems, access control, Apple device management, and day-to-day IT help that keeps teams moving.',
  },
];

export default function Industries() {
  usePageMeta({
    title: 'Industries',
    description:
      'Little Fight NYC supports restaurants, retail, salons, studios, professional services, fitness businesses, and other small-business operators who need technology to make more sense.',
    path: '/industries/',
  });

  return (
    <main id="main-content" className="relative">
      <PageHero
        eyebrow="Industries"
        title="Different businesses have different pressure points. The work should reflect that."
        description="A salon, a restaurant, a boutique gym, and a law office should not all sound the same online or run on the same day-to-day needs. The structure changes with the business."
      />

      <section className="section-luxury section-luxury-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionIntro
            eyebrow="Who We Help"
            title="Built for small businesses that need a clearer customer path and a steadier operation."
            description="These are common categories we support, but the goal is never to force every business into the same mold."
            className="mb-14"
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <article
                key={industry.title}
                className="bg-white rounded-3xl p-8 border border-[var(--lf-stone-light)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 bg-[var(--lf-orange)]/10 rounded-2xl flex items-center justify-center mb-5">
                  <industry.icon className="w-7 h-7 text-[var(--lf-orange)]" />
                </div>
                <h2 className="text-2xl font-semibold text-[var(--lf-charcoal)] mb-3">{industry.title}</h2>
                <p className="text-base text-[var(--lf-muted)] leading-[1.8]">{industry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-luxury bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--lf-charcoal)] mb-6">
            Need help figuring out which problems matter most first?
          </h2>
          <p className="text-lg text-[var(--lf-muted)] leading-[1.85] mb-10">
            That is usually the real starting point. We can map the customer path, the staff friction, and the technology weak spots before deciding what to build or fix.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/services/website-audit-small-business/" className="btn-secondary">
              Get Clarity First
            </Link>
            <Link to="/contact/" className="btn-primary">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
