import { motion, useReducedMotion } from 'framer-motion';

const caseStudies = [
  {
    name: 'Grand Funding LLC',
    location: 'Arizona & California',
    industry: 'Hard Money Lending',
    score: '97',
    grade: 'A',
    summary:
      'A private lender needed a site reflecting speed and sophistication. We rebuilt from scratch — cinematic and conversion-focused. The website became the strongest asset in their sales process.',
    image: '/agency_card_01.jpg',
    imageAlt: 'Grand Funding LLC website — hard money lending',
  },
  {
    name: 'Logan Loans',
    location: 'Nationwide',
    industry: 'Mortgage Lending',
    score: '96',
    grade: 'A',
    summary:
      'An industry full of jargon needed a platform that humanized lending. We built a jargon translator and 15+ geo-landing pages. First-time buyers reported understanding the process for the first time.',
    image: '/agency_card_02.jpg',
    imageAlt: 'Logan Loans website — mortgage lending',
  },
  {
    name: 'The Wild Dandelion',
    location: 'NYC',
    industry: 'Premium Hair Salon',
    score: '95',
    grade: 'A',
    summary:
      'Three distinct client types were arriving at a flat homepage with no differentiation. We built distinct conversion paths for each. Bookings became intentional, not accidental.',
    image: '/salon_interior.jpg',
    imageAlt: 'The Wild Dandelion salon interior — NYC',
  },
  {
    name: 'Army & Navy Bags',
    location: 'Greenwich Village, NYC',
    industry: 'Heritage Surplus (est. 1956)',
    score: '98',
    grade: 'A+',
    summary:
      'A 69-year-old institution featured by The New York Times needed a digital presence that matched its legacy. We built a site that feels like walking into the store — curated, tactile, authentic.',
    image: '/retail_interior.jpg',
    imageAlt: 'Army & Navy Bags store interior — Greenwich Village',
  },
];

export default function TrustSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-midnight">
      {/* Gradient divider at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--lf-orange)] mb-3">
            Recent Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight max-w-xl">
            Businesses that closed the gap.
          </h2>
          <p className="text-sm text-white/40 mt-4">
            4 live projects &middot; 66 total pages &middot; 96.5 average Trust Score
          </p>
        </motion.div>

        {/* Case study cards — 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.name}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              {/* Case study image */}
              <div className="h-48 overflow-hidden relative z-[1]">
                <img
                  src={study.image}
                  alt={study.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ filter: 'contrast(1.1) saturate(0.85) brightness(0.95)' }}
                />
                {/* Location badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5">
                  <p className="text-[11px] font-medium text-white/80">{study.location}</p>
                </div>
              </div>

              <div className="p-6 lg:p-8 relative z-[1]">
                {/* Industry */}
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/30 mb-1">
                  {study.industry}
                </p>

                {/* Business name */}
                <h3 className="text-xl font-semibold text-white mb-3">{study.name}</h3>

                {/* Trust score */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-[var(--lf-ice-blue)]">{study.score}</span>
                  <span className="text-sm text-white/30">Trust Score</span>
                  <span className="ml-auto text-xs font-bold uppercase tracking-wider text-[var(--lf-orange)]">
                    {study.grade}
                  </span>
                </div>

                {/* Summary */}
                <p className="text-sm text-white/50 leading-relaxed">{study.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
