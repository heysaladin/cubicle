import * as React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ListItemProps {
  leading?: React.ReactNode;
  title: string;
  subtitle?: string;
  trailing?: React.ReactNode;
  showChevron?: boolean;
  destructive?: boolean;
  onClick?: () => void;
  className?: string;
}

export function ListItem({
  leading,
  title,
  subtitle,
  trailing,
  showChevron = false,
  destructive = false,
  onClick,
  className,
}: ListItemProps) {
  const Tag = onClick ? 'button' : 'div';

  return (
    <Tag
      onClick={onClick}
      className={cn(
        'flex items-center gap-3 px-4 py-3 w-full text-left',
        onClick && 'active:bg-muted transition-colors',
        className,
      )}
    >
      {leading && (
        <div className="shrink-0 [&_svg]:h-5 [&_svg]:w-5 text-muted-foreground">
          {leading}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className={cn('text-sm font-medium leading-tight', destructive && 'text-destructive')}>
          {title}
        </p>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{subtitle}</p>
        )}
      </div>
      {trailing && <div className="shrink-0 text-muted-foreground">{trailing}</div>}
      {showChevron && (
        <ChevronRight className="h-4 w-4 text-muted-foreground/50 shrink-0" />
      )}
    </Tag>
  );
}

export interface ListSectionProps {
  title?: string;
  footer?: string;
  children: React.ReactNode;
  inset?: boolean;
}

export function ListSection({ title, footer, children, inset = true }: ListSectionProps) {
  return (
    <div className="mb-6">
      {title && (
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 mb-1">
          {title}
        </p>
      )}
      <div className={cn('bg-background', inset && 'border-y divide-y')}>
        {children}
      </div>
      {footer && (
        <p className="text-xs text-muted-foreground px-4 mt-1">{footer}</p>
      )}
    </div>
  );
}
