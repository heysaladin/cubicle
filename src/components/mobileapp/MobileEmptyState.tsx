import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface MobileEmptyStateProps {
  icon?: React.ReactNode;
  illustration?: React.ReactNode;
  title: string;
  description?: string;
  primaryAction?: { label: string; onClick: () => void };
  secondaryAction?: { label: string; onClick: () => void };
  className?: string;
}

export function MobileEmptyState({
  icon,
  illustration,
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
}: MobileEmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center py-16 px-6 text-center', className)}>
      {illustration ?? (
        icon && (
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted text-muted-foreground [&_svg]:h-8 [&_svg]:w-8">
            {icon}
          </div>
        )
      )}
      <h3 className="text-base font-semibold mt-2">{title}</h3>
      {description && (
        <p className="text-sm text-muted-foreground mt-1.5 max-w-[260px] leading-relaxed">
          {description}
        </p>
      )}
      {primaryAction && (
        <Button onClick={primaryAction.onClick} className="mt-5">
          {primaryAction.label}
        </Button>
      )}
      {secondaryAction && (
        <button
          onClick={secondaryAction.onClick}
          className="mt-2 text-sm text-primary font-medium"
        >
          {secondaryAction.label}
        </button>
      )}
    </div>
  );
}
