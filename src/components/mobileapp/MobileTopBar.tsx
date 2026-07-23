import * as React from 'react';
import { ChevronLeft, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface MobileTopBarProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: React.ReactNode;
  leftAction?: React.ReactNode;
  bordered?: boolean;
  large?: boolean;
}

export function MobileTopBar({
  title,
  subtitle,
  showBack = false,
  onBack,
  rightAction,
  leftAction,
  bordered = true,
  large = false,
}: MobileTopBarProps) {
  return (
    <div
      className={cn(
        'bg-background px-4 pt-2',
        bordered && 'border-b',
        large ? 'pb-3' : 'pb-2',
      )}
    >
      <div className="flex items-center justify-between min-h-[44px]">
        {/* Left */}
        <div className="w-16 flex items-center">
          {showBack ? (
            <button
              onClick={onBack}
              className="flex items-center gap-0.5 text-primary text-sm font-medium -ml-1 p-1 rounded-lg active:bg-muted"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>Back</span>
            </button>
          ) : leftAction ? (
            leftAction
          ) : null}
        </div>

        {/* Center title (non-large) */}
        {!large && (
          <div className="flex-1 text-center">
            {title && <p className="text-sm font-semibold leading-tight">{title}</p>}
            {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
          </div>
        )}

        {/* Right */}
        <div className="w-16 flex items-center justify-end">
          {rightAction ?? (
            <button className="p-1 rounded-lg active:bg-muted text-muted-foreground">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Large title */}
      {large && title && (
        <div className="mt-1 pb-1">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
        </div>
      )}
    </div>
  );
}
