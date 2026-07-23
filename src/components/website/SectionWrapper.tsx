import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  background?: 'default' | 'muted' | 'none';
}

const sizeStyles = {
  sm: 'py-10 sm:py-14',
  md: 'py-14 sm:py-20',
  lg: 'py-20 sm:py-28',
};

const bgStyles = {
  default: 'bg-background',
  muted: 'bg-muted',
  none: '',
};

export function SectionWrapper({
  children,
  className,
  size = 'md',
  background = 'default',
}: SectionWrapperProps) {
  return (
    <section className={cn(sizeStyles[size], bgStyles[background])}>
      <div className={cn('mx-auto max-w-6xl px-4 sm:px-6', className)}>{children}</div>
    </section>
  );
}

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl space-y-3 mb-10', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="text-base text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
