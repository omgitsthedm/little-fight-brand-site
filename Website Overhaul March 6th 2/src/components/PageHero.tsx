import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  detail?: ReactNode;
  children?: ReactNode;
  className?: string;
  align?: 'left' | 'center';
}

export default function PageHero({
  eyebrow,
  title,
  description,
  detail,
  children,
  className,
  align = 'left',
}: PageHeroProps) {
  const isCentered = align === 'center';

  return (
    <section className={cn('section-luxury relative overflow-hidden pt-24 sm:pt-28 lg:pt-32', className)}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-16 hidden h-[26rem] w-[26rem] rounded-full bg-[var(--lf-orange)]/7 blur-[100px] sm:block" />
        <div className="absolute right-0 top-10 hidden h-[20rem] w-[20rem] rounded-full bg-white/35 blur-[90px] sm:block" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div
          className={cn(
            'rounded-[2rem] border border-white/70 bg-white p-6 shadow-[0_20px_60px_rgba(38,35,31,0.08)] backdrop-blur-sm sm:bg-white/92 sm:p-8 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none',
            isCentered ? 'mx-auto max-w-4xl text-left sm:text-center' : 'max-w-4xl',
          )}
        >
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mb-5 text-[2.35rem] font-bold leading-[1.08] text-[var(--lf-charcoal)] sm:mb-6 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <div
            className={cn(
              'space-y-4 text-lg leading-[1.8] text-[var(--lf-muted)] sm:text-xl sm:leading-[1.85] lg:text-[1.35rem]',
              isCentered && 'sm:mx-auto',
            )}
          >
            <p>{description}</p>
            {detail ? (
              <p className="max-w-3xl text-base leading-[1.8] text-[var(--lf-graphite)]/82 sm:text-lg sm:leading-[1.85]">{detail}</p>
            ) : null}
          </div>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
