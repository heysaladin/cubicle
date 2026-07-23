import * as React from 'react';
import { cn } from '@/lib/utils';

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface StatsBannerProps {
  stats: StatItem[];
  variant?: 'default' | 'muted' | 'brand';
}

export function StatsBanner({ stats, variant = 'default' }: StatsBannerProps) {
  const isBrand = variant === 'brand';

  return (
    <section
      className={cn(
        'w-full py-12',
        variant === 'default' && 'border-y bg-background',
        variant === 'muted' && 'bg-muted',
        variant === 'brand' && 'bg-primary text-primary-foreground',
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <dd className="text-3xl font-bold tracking-tight">{stat.value}</dd>
              <dt className={cn('text-sm font-medium', isBrand ? 'text-primary-foreground/80' : 'text-muted-foreground')}>
                {stat.label}
              </dt>
              {stat.description && (
                <p className={cn('text-xs', isBrand ? 'text-primary-foreground/60' : 'text-muted-foreground/70')}>
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
