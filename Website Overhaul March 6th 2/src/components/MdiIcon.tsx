import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface MdiIconProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  decorative?: boolean;
  label?: string;
}

function formatLabel(name: string) {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export default function MdiIcon({
  name,
  decorative = true,
  label,
  className,
  ...props
}: MdiIconProps) {
  return (
    <span
      {...props}
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : label ?? formatLabel(name)}
      className={cn('mdi mdi-set leading-none', `mdi-${name}`, className)}
    />
  );
}
