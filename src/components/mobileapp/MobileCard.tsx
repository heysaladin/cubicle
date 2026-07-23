import * as React from 'react';
import { cn } from '@/lib/utils';

export interface MobileCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  padding?: 'none' | 'sm' | 'md';
}

export function MobileCard({ children, className, onClick, padding = 'md' }: MobileCardProps) {
  const Tag = onClick ? 'button' : 'div';
  const padClass = { none: '', sm: 'p-3', md: 'p-4' }[padding];

  return (
    <Tag
      onClick={onClick}
      className={cn(
        'w-full text-left rounded-xl border bg-card shadow-sm',
        padClass,
        onClick && 'active:bg-muted/50 transition-colors',
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export interface MobileStatCardProps {
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'increase' | 'decrease' | 'neutral';
  icon?: React.ReactNode;
}

export function MobileStatCard({ label, value, change, changeType = 'neutral', icon }: MobileStatCardProps) {
  const changeColor = {
    increase: 'text-emerald-600',
    decrease: 'text-red-500',
    neutral: 'text-muted-foreground',
  }[changeType];

  return (
    <MobileCard>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">{label}</p>
          <p className="text-xl font-bold tracking-tight">{value}</p>
          {change && (
            <p className={cn('text-xs font-medium', changeColor)}>{change}</p>
          )}
        </div>
        {icon && (
          <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center [&_svg]:h-4 [&_svg]:w-4">
            {icon}
          </div>
        )}
      </div>
    </MobileCard>
  );
}
