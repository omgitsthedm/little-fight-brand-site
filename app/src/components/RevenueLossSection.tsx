import { AlertTriangle, Globe, Wrench } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const painPoints = [
  {
    icon: Globe,
    text: 'The website no longer reflects the quality of the business.',
  },
  {
    icon: Wrench,
    text: 'Systems, tools, and vendors are creating more friction than progress.',
  },
  {
    icon: AlertTriangle,
    text: 'The digital presence is costing trust instead of building it.',
  },
];

export default function RevenueLossSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-midnight">
      {/* Gradient divider at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--lf-orange)]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--lf-orange)] mb-3"
          >
            Most businesses arrive here because&hellip;
          </motion.p>

          {/* Pain points */}
          <ul className="space-y-6">
            {painPoints.map((point, i) => (
              <motion.li
                key={i}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--lf-orange)]/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <point.icon className="w-5 h-5 text-[var(--lf-orange)]" />
                </div>
                <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                  {point.text}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
