import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Ambient blur orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-[var(--lf-orange)]/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[var(--lf-ice-blue)]/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text content */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.p
              {...fadeUp(0.1)}
              className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6"
            >
              Manhattan &middot; Remote Nationwide
            </motion.p>

            {/* H1 */}
            <motion.h1
              {...fadeUp(0.25)}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-semibold text-white leading-[1.08] mb-6"
            >
              Clearer systems.{' '}
              <br className="hidden sm:block" />
              Better websites.{' '}
              <br className="hidden sm:block" />
              Smarter support.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              {...fadeUp(0.4)}
              className="text-lg lg:text-xl text-white/60 leading-relaxed mb-8 max-w-2xl"
            >
              Most businesses are better than they look online. We close that gap — sharper websites,
              cleaner systems, and a digital presence that earns the trust your work already deserves.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.55)}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link to="/#contact" className="btn btn-primary group">
                <span>Book a Private Consult</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://audits.littlefightnyc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary group"
              >
                <span>Audit Your Website</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.p
              {...fadeUp(0.7)}
              className="text-sm text-white/30 tracking-wide"
            >
              On-site in Manhattan &middot; Remote nationwide &middot; First conversation free
            </motion.p>
          </div>

          {/* Right: hero image */}
          <motion.div
            {...fadeUp(0.4)}
            className="hidden lg:block relative"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/hero_workspace.jpg"
                alt="Modern business workspace"
                className="w-full h-auto object-cover"
                style={{ filter: 'contrast(1.1) saturate(0.85) brightness(0.95)' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
