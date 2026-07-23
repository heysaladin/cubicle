import * as React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  variant?: 'card' | 'minimal';
}

export function FeatureCard({ icon, title, description, variant = 'card' }: FeatureCardProps) {
  if (variant === 'minimal') {
    return (
      <div className="space-y-2">
        {icon && (
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary [&_svg]:h-4 [&_svg]:w-4">
            {icon}
          </div>
        )}
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        {icon && (
          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary [&_svg]:h-5 [&_svg]:w-5">
            {icon}
          </div>
        )}
        <h3 className="text-sm font-semibold leading-tight">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export interface FeatureGridProps {
  features: { icon?: React.ReactNode; title: string; description: string }[];
  columns?: 2 | 3 | 4;
  variant?: 'card' | 'minimal';
}

export function FeatureGrid({ features, columns = 3, variant = 'card' }: FeatureGridProps) {
  const colClass = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <div className={cn('grid grid-cols-1 gap-6', colClass)}>
      {features.map((f) => (
        <FeatureCard key={f.title} {...f} variant={variant} />
      ))}
    </div>
  );
}
