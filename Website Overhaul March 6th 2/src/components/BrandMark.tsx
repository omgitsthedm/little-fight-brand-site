import { cn } from '@/lib/utils';
import MdiIcon from './MdiIcon';

interface BrandMarkProps {
  className?: string;
  iconClassName?: string;
}

const markCells = [
  { name: 'web', tone: 'bg-[#ff6421] text-white' },
  { name: 'tools', tone: 'bg-[var(--lf-bone)] text-[var(--lf-charcoal)]' },
  { name: 'chart-line', tone: 'bg-white text-[var(--lf-orange)]' },
  { name: 'shield-check-outline', tone: 'bg-[var(--lf-charcoal)] text-[var(--lf-orange)]' },
];

export default function BrandMark({ className, iconClassName }: BrandMarkProps) {
  return (
    <div
      className={cn(
        'grid aspect-square w-12 grid-cols-2 gap-1 rounded-[1.15rem] border border-[var(--lf-charcoal)]/10 bg-white p-1.5 shadow-[0_20px_45px_rgba(38,35,31,0.1)]',
        className,
      )}
      aria-hidden="true"
    >
      {markCells.map((cell) => (
        <span
          key={cell.name}
          className={cn(
            'flex items-center justify-center rounded-[0.8rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]',
            cell.tone,
          )}
        >
          <MdiIcon name={cell.name} className={cn('text-[1.15rem]', iconClassName)} />
        </span>
      ))}
    </div>
  );
}
