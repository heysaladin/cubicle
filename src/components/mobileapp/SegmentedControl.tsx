import { cn } from '@/lib/utils';

export interface SegmentedControlProps {
  segments: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function SegmentedControl({ segments, value, onChange, className }: SegmentedControlProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-0.5 rounded-lg bg-muted p-0.5',
        className,
      )}
    >
      {segments.map((seg) => (
        <button
          key={seg}
          onClick={() => onChange(seg)}
          className={cn(
            'flex-1 rounded-md py-1.5 text-xs font-medium transition-all',
            value === seg
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground',
          )}
        >
          {seg}
        </button>
      ))}
    </div>
  );
}
