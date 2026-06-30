import { Link } from 'react-router-dom';
import { Zap, TrendingUp, Repeat, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const tiers = [
  {
    icon: Zap,
    name: 'Focused Fix',
    price: '$150',
    suffix: '+',
    description:
      'A targeted engagement for a specific issue — system failure, website problem, or infrastructure concern. Clear scope, clean resolution.',
    features: ['Same-day response in Manhattan', 'Standards-first approach', '30-day guarantee on all work'],
    cta: 'Book a Focused Fix',
  },
  {
    icon: TrendingUp,
    name: 'Project Engagement',
    price: '$1,200',
    suffix: '+',
    description:
      'A scoped project with defined outcomes. New website, infrastructure overhaul, system migration, or digital presence rebuild.',
    features: ['Clearly defined scope and deliverables', 'Milestone-based billing', 'Dedicated project lead'],
    cta: 'Discuss Your Project',
    highlight: true,
  },
  {
    icon: Repeat,
    name: 'Ongoing Partnership',
    price: '$350',
    suffix: '/mo',
    description:
      'A retained relationship for businesses that want consistent standards. We monitor, maintain, and continuously improve your systems.',
    features: ['Priority response times', 'Monthly standards review', 'Fewer weak points over time'],
    cta: 'Start the Conversation',
  },
];

export default function WorkSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-midnight">
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
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight max-w-xl">
            Clear pricing. Honest structure.
          </h2>
          <p className="text-lg text-white/50 mt-4 max-w-xl leading-relaxed">
            Choose the engagement that fits. Every relationship starts with a free conversation.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group glass-card rounded-2xl p-6 lg:p-8 ${
                tier.highlight
                  ? '!border-[var(--lf-orange)]/30 !bg-[rgba(254,89,0,0.04)]'
                  : ''
              }`}
            >
              {/* Icon */}
              <div
                className={`relative z-[1] w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  tier.highlight ? 'bg-[var(--lf-orange)]/10' : 'bg-white/[0.06]'
                }`}
              >
                <tier.icon
                  className={`w-6 h-6 ${
                    tier.highlight ? 'text-[var(--lf-orange)]' : 'text-[var(--lf-ice-blue)]'
                  }`}
                />
              </div>

              {/* Name */}
              <h3 className="relative z-[1] text-xl font-semibold text-white mb-2">{tier.name}</h3>

              {/* Price */}
              <div className="relative z-[1] flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-white">{tier.price}</span>
                <span className="text-sm text-white/40">{tier.suffix}</span>
              </div>

              {/* Description */}
              <p className="relative z-[1] text-sm text-white/50 leading-relaxed mb-5">{tier.description}</p>

              {/* Features */}
              <ul className="relative z-[1] space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--lf-ice-blue)] mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link style={{ position: 'relative', zIndex: 1 }}
                to="/#contact"
                className={`btn w-full text-sm min-h-[44px] ${
                  tier.highlight ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Audit pathway */}
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-white/40 mt-10"
        >
          Not sure what you need?{' '}
          <a
            href="https://audits.littlefightnyc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--lf-ice-blue)] hover:text-white transition-colors"
          >
            Start with a website audit
          </a>.
        </motion.p>
      </div>
    </section>
  );
}
