import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from '@/lib/gsap';
import MdiIcon from './MdiIcon';
import { useMobileExperience } from '@/hooks/useMobileExperience';

const quickStartCards = [
  {
    icon: 'tools',
    title: 'The business keeps losing time to tech problems',
    description:
      'When Wi-Fi, printers, POS, or devices keep failing, staff lose time and customers feel the slowdown. We fix the critical path first.',
    badge: 'Urgent support',
    to: '/contact/',
    cta: 'Get urgent help',
    external: false,
    accent: 'warning',
  },
  {
    icon: 'monitor-shimmer',
    title: 'The website feels dated, hard to read, or hard to trust',
    description:
      'When the site looks weak, good businesses look smaller than they are. We rebuild the first impression and the path to action.',
    badge: 'Website design',
    to: '/services/website-design-small-business-nyc/',
    cta: 'See website design',
    external: false,
    accent: 'default',
  },
  {
    icon: 'clipboard-check-outline',
    title: 'You want a clear review before spending more money',
    description:
      'Before you pay for a redesign, we show what is really hurting trust, mobile use, and lead flow so the next spend is smarter.',
    badge: 'Private review',
    to: '/services/website-audit-small-business/',
    cta: 'Start with a review',
    external: false,
    accent: 'default',
  },
] as const;

const trustPills = [
  'Plain English',
  'Easy to read on mobile',
  'On-site in Manhattan',
  'Remote nationwide',
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { reduceEffects } = useMobileExperience();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (reduceEffects) {
        gsap.set(
          [
            '.hero-eyebrow',
            '.hero-title span',
            '.hero-subtitle',
            '.hero-support-copy',
            '.hero-cta-group',
            '.hero-pill',
            '.hero-quick-card',
          ],
          { opacity: 1, y: 0 },
        );
        return;
      }

      gsap.fromTo(
        '.hero-eyebrow',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.15 },
      );
      gsap.fromTo(
        '.hero-title span',
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.82, stagger: 0.1, ease: 'power3.out', delay: 0.25 },
      );
      gsap.fromTo(
        ['.hero-subtitle', '.hero-support-copy'],
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out', delay: 0.55 },
      );
      gsap.fromTo(
        '.hero-cta-group',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out', delay: 0.82 },
      );
      gsap.fromTo(
        '.hero-pill',
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out', delay: 0.95 },
      );
      gsap.fromTo(
        '.hero-quick-card',
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.58, stagger: 0.12, ease: 'power3.out', delay: 1.02 },
      );
    }, heroRef);

    return () => ctx.revert();
  }, [reduceEffects]);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden pb-12 pt-24 sm:pb-16 sm:pt-28 lg:pb-24 lg:pt-32"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-[-9rem] top-[14%] hidden h-[30rem] w-[30rem] rounded-full bg-[var(--lf-orange)]/6 blur-[100px] animate-pulse-soft sm:block lg:h-[34rem] lg:w-[34rem]" />
        <div className="absolute right-[-7rem] top-[22%] hidden h-[24rem] w-[24rem] rounded-full bg-white/55 blur-[88px] animate-float md:block lg:h-[28rem] lg:w-[28rem]" />
        <div className="absolute bottom-[-8rem] left-[18%] hidden h-[20rem] w-[20rem] rounded-full bg-[var(--lf-stone)]/24 blur-[82px] animate-pulse-soft sm:block lg:h-[22rem] lg:w-[22rem]" />
        <div
          className="absolute inset-0 opacity-[0.018] sm:opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(var(--lf-stone) 1px, transparent 1px), linear-gradient(90deg, var(--lf-stone) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="max-w-3xl rounded-[2rem] border border-white/70 bg-white p-6 shadow-[0_20px_60px_rgba(38,35,31,0.08)] backdrop-blur-sm sm:bg-white/92 sm:p-8 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none">
            <div className="hero-eyebrow mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--lf-stone-light)] bg-white/75 px-4 py-2 backdrop-blur-sm">
              <MdiIcon name="hand-heart-outline" className="text-lg text-[var(--lf-orange)]" />
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--lf-muted)] sm:hidden">
                Clear websites. Calm tech help.
              </span>
              <span className="hidden text-sm font-bold uppercase tracking-[0.16em] text-[var(--lf-muted)] sm:inline">
                Clear websites, calm tech help, and plain-English advice
              </span>
            </div>

            <h1 className="hero-title mb-6 text-[2.35rem] font-semibold leading-[1.02] text-[var(--lf-charcoal)] sm:mb-7 sm:text-5xl lg:text-6xl xl:text-[4.7rem]">
              <span className="block">Your business should be</span>
              <span className="block text-[var(--lf-orange)]">easy to trust online</span>
              <span className="block">and easy to run day to day.</span>
            </h1>

            <p className="hero-subtitle mb-4 max-w-2xl text-lg leading-[1.8] text-[var(--lf-muted)] sm:mb-5 sm:text-xl sm:leading-[1.85] lg:text-[1.33rem]">
              When the website is dated, the phones stay quiet, or the tech keeps breaking, owners lose time, staff lose momentum, and customers lose confidence.
            </p>

            <p className="hero-support-copy mb-8 max-w-2xl text-[1.02rem] leading-[1.8] text-[var(--lf-graphite)]/82 sm:mb-10 sm:text-lg sm:leading-[1.88]">
              We build clear websites, run honest site reviews, and fix the everyday tech problems that make small businesses harder to run than they should be. Most projects pay back through fewer missed calls, less staff friction, or a stronger first impression.
            </p>

            <div className="hero-cta-group mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link to="/contact/" className="btn-primary group">
                <span>Book a Warm Intro Call</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services/website-audit-small-business/" className="btn-secondary">
                Start with a Private Review
              </Link>
            </div>

            <div className="mb-2 grid gap-3 sm:mb-8 sm:flex sm:flex-wrap">
              {trustPills.map((pill) => (
                <span
                  key={pill}
                  className="hero-pill rounded-full border border-[var(--lf-stone-light)] bg-white/75 px-4 py-2 text-sm font-medium text-[var(--lf-graphite)] backdrop-blur-sm"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-3 sm:gap-4">
              {quickStartCards.map((card) => {
                const content = (
                  <>
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div
                        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl sm:h-14 sm:w-14 ${
                          card.accent === 'warning'
                            ? 'bg-red-50 text-red-500'
                            : 'bg-[var(--lf-orange)]/10 text-[var(--lf-orange)]'
                        }`}
                      >
                        <MdiIcon name={card.icon} className="text-[1.7rem]" />
                      </div>
                      <span className="rounded-full border border-[var(--lf-stone-light)] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--lf-muted)]">
                        {card.badge}
                      </span>
                    </div>
                    <h2 className="mb-3 text-[1.3rem] font-semibold leading-tight text-[var(--lf-charcoal)] sm:text-[1.45rem] lg:text-[1.55rem]">
                      {card.title}
                    </h2>
                    <p className="mb-5 text-base leading-[1.82] text-[var(--lf-muted)]">
                      {card.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-base font-semibold text-[var(--lf-orange)] transition-all group-hover:gap-3">
                      <span>{card.cta}</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </>
                );

                const classes =
                  'hero-quick-card group rounded-[1.75rem] border bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-7 lg:rounded-[2rem] lg:p-8';

                if (card.external) {
                  return (
                    <a
                      key={card.title}
                      href={card.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${classes} border-[var(--lf-stone-light)]/65 hover:border-[var(--lf-orange)]/25`}
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <Link
                    key={card.title}
                    to={card.to}
                    className={`${classes} ${
                      card.accent === 'warning'
                        ? 'border-red-200/80 hover:border-red-300'
                        : 'border-[var(--lf-stone-light)]/65 hover:border-[var(--lf-orange)]/25'
                    }`}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
