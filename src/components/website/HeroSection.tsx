import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface HeroSectionProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  align?: 'center' | 'left';
  media?: React.ReactNode;
}

export function HeroSection({
  badge,
  headline = 'Build something great',
  subheadline = 'The platform that helps teams ship faster with less friction.',
  primaryCta = { label: 'Get started for free', href: '#' },
  secondaryCta = { label: 'View demo', href: '#' },
  align = 'center',
  media,
}: HeroSectionProps) {
  return (
    <section className="w-full py-16 sm:py-24">
      <div
        className={cn(
          'mx-auto max-w-6xl px-4 sm:px-6',
          align === 'center' && 'text-center',
        )}
      >
        <div className={cn('max-w-3xl space-y-6', align === 'center' && 'mx-auto')}>
          {badge && (
            <div className={cn(align === 'center' && 'flex justify-center')}>
              <Badge variant="secondary" className="text-xs px-3 py-1">
                {badge}
              </Badge>
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            {headline}
          </h1>

          {subheadline && (
            <p className={cn('text-lg text-muted-foreground max-w-2xl', align === 'center' && 'mx-auto')}>
              {subheadline}
            </p>
          )}

          <div className={cn('flex flex-wrap gap-3', align === 'center' && 'justify-center')}>
            {primaryCta && (
              <Button size="lg" asChild>
                <a href={primaryCta.href}>{primaryCta.label}</a>
              </Button>
            )}
            {secondaryCta && (
              <Button size="lg" variant="outline" asChild>
                <a href={secondaryCta.href}>{secondaryCta.label}</a>
              </Button>
            )}
          </div>
        </div>

        {media && (
          <div className="mt-12 sm:mt-16">
            {media}
          </div>
        )}
      </div>
    </section>
  );
}
