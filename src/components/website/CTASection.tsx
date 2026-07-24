import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface CTASectionProps {
  headline: string;
  subheadline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: 'default' | 'muted' | 'brand';
}

const variantStyles = {
  default: 'bg-background border-y',
  muted: 'bg-muted',
  brand: 'bg-primary text-primary-foreground',
};

export function CTASection({
  headline = 'Ready to get started?',
  subheadline = 'Join thousands of teams already using our platform.',
  primaryCta = { label: 'Start for free', href: '#' },
  secondaryCta,
  variant = 'muted',
}: CTASectionProps) {
  const isBrand = variant === 'brand';

  return (
    <section className={cn('w-full py-16', variantStyles[variant])}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{headline}</h2>
        {subheadline && (
          <p className={cn('text-base max-w-xl mx-auto', isBrand ? 'text-primary-foreground/80' : 'text-muted-foreground')}>
            {subheadline}
          </p>
        )}
        <div className="flex flex-wrap gap-3 justify-center">
          {primaryCta && (
            <Button size="lg" variant={isBrand ? 'secondary' : 'default'} asChild>
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
    </section>
  );
}
