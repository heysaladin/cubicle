import * as React from 'react';
import { Trash2, Archive } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SwipeableRowProps {
  children: React.ReactNode;
  onDelete?: () => void;
  onArchive?: () => void;
  className?: string;
}

export function SwipeableRow({ children, onDelete, onArchive, className }: SwipeableRowProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Revealed actions (visual mock — static) */}
      <div className="absolute inset-y-0 right-0 flex items-stretch">
        {onArchive && (
          <button
            onClick={onArchive}
            className="flex items-center justify-center w-16 bg-blue-500 text-white text-xs font-medium"
          >
            <div className="flex flex-col items-center gap-0.5">
              <Archive className="h-4 w-4" />
              <span className="text-[9px]">Archive</span>
            </div>
          </button>
        )}
        {onDelete && (
          <button
            onClick={onDelete}
            className="flex items-center justify-center w-16 bg-destructive text-destructive-foreground text-xs font-medium"
          >
            <div className="flex flex-col items-center gap-0.5">
              <Trash2 className="h-4 w-4" />
              <span className="text-[9px]">Delete</span>
            </div>
          </button>
        )}
      </div>

      {/* Main content */}
      <div className="relative z-10 bg-background">{children}</div>
    </div>
  );
}
