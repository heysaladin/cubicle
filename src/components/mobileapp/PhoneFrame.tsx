import * as React from 'react';
import { cn } from '@/lib/utils';

export interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
  statusBar?: boolean;
  homeIndicator?: boolean;
}

export function PhoneFrame({
  children,
  className,
  statusBar = true,
  homeIndicator = true,
}: PhoneFrameProps) {
  return (
    <div
      className={cn(
        'relative mx-auto flex flex-col w-[375px] rounded-[44px] border-[8px] border-foreground/10 bg-background shadow-2xl overflow-hidden',
        className,
      )}
      style={{ height: 700 }}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-28 h-7 bg-foreground/10 rounded-b-2xl pointer-events-none" />

      {/* Status bar */}
      {statusBar && (
        <div className="relative z-10 flex shrink-0 items-center justify-between px-6 pt-2 pb-1 text-[11px] font-medium text-foreground h-11">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 8.5a13 13 0 0121 0M5 12a10 10 0 0114 0M8.5 15.5a6 6 0 017 0M12 19h.01" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" />
            </svg>
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="7" width="16" height="11" rx="2" stroke="currentColor" fill="none" strokeWidth="2" />
              <path d="M22 11v3" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
              <rect x="4" y="9" width="10" height="7" rx="1" fill="currentColor" />
            </svg>
          </div>
        </div>
      )}

      {/* Screen content — flex-1 works because parent is flex column with definite height */}
      <div className="relative flex-1 overflow-y-auto">
        {children}
      </div>

      {/* Home indicator */}
      {homeIndicator && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1 w-28 rounded-full bg-foreground/20 pointer-events-none" />
      )}
    </div>
  );
}

export function PhoneScreen({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col bg-background min-h-full', className)}>
      {children}
    </div>
  );
}
