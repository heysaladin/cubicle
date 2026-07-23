import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BottomNavItem {
  label: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
  badge?: number | string;
  active?: boolean;
  onClick?: () => void;
}

export interface BottomNavProps {
  items: BottomNavItem[];
}

export function BottomNav({ items }: BottomNavProps) {
  return (
    <div className="border-t bg-background/95 backdrop-blur-sm">
      <div className="flex items-end pb-safe">
        {items.map((item) => (
          <button
            key={item.label}
            onClick={item.onClick}
            className={cn(
              'flex flex-1 flex-col items-center gap-0.5 py-2 px-1 text-[10px] font-medium transition-colors',
              item.active ? 'text-primary' : 'text-muted-foreground',
            )}
          >
            <div className="relative">
              <span className="[&_svg]:h-6 [&_svg]:w-6">
                {item.active && item.activeIcon ? item.activeIcon : item.icon}
              </span>
              {item.badge !== undefined && (
                <span className="absolute -top-1 -right-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-destructive text-[9px] font-bold text-destructive-foreground px-0.5">
                  {typeof item.badge === 'number' && item.badge > 99 ? '99+' : item.badge}
                </span>
              )}
            </div>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
