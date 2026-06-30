import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionIntroProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  align?: 'left' | 'center';
}

export default function SectionIntro({
  eyebrow,
  title,
  description,
  className,
  align = 'center',
}: SectionIntroProps) {
  const isCentered = align === 'center';

  return (
    <div className={cn(isCentered ? 'mx-auto max-w-3xl text-left sm:text-center' : 'max-w-3xl', className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={cn('title', isCentered && 'sm:mx-auto')}>{title}</h2>
      {description ? (
        <p className={cn('description', isCentered && 'sm:mx-auto')}>{description}</p>
      ) : null}
    </div>
  );
}
