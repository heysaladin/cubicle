import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface PricingCardProps {
  planName: string;
  price: string | number;
  period?: string;
  description?: string;
  features: string[];
  ctaLabel?: string;
  ctaHref?: string;
  highlighted?: boolean;
  badge?: string;
  onCta?: () => void;
}

export function PricingCard({
  planName,
  price,
  period = '/month',
  description,
  features,
  ctaLabel = 'Get started',
  ctaHref = '#',
  highlighted = false,
  badge,
  onCta,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        'relative flex flex-col h-full',
        highlighted && 'border-primary shadow-lg ring-1 ring-primary',
      )}
    >
      {badge && (
        <div className="absolute -top-3 left-0 right-0 flex justify-center">
          <Badge className="text-xs">{badge}</Badge>
        </div>
      )}

      <CardHeader className="pb-4">
        <h3 className="text-sm font-semibold">{planName}</h3>
        <div className="flex items-end gap-1 mt-2">
          <span className="text-3xl font-bold tracking-tight">
            {typeof price === 'number' ? `$${price}` : price}
          </span>
          <span className="text-sm text-muted-foreground mb-0.5">{period}</span>
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </CardHeader>

      <CardContent className="flex-1">
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm">
              <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          variant={highlighted ? 'default' : 'outline'}
          asChild={!onCta}
          onClick={onCta}
        >
          {onCta ? ctaLabel : <a href={ctaHref}>{ctaLabel}</a>}
        </Button>
      </CardFooter>
    </Card>
  );
}
