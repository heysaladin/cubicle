import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BottomSheetProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  showHandle?: boolean;
  showClose?: boolean;
}

export function BottomSheet({
  open,
  onClose,
  title,
  children,
  className,
  showHandle = true,
  showClose = false,
}: BottomSheetProps) {
  if (!open) return null;

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />
      {/* Sheet */}
      <div
        className={cn(
          'relative z-10 rounded-t-2xl bg-background pt-2 pb-8 max-h-[80%] overflow-y-auto',
          className,
        )}
      >
        {showHandle && (
          <div className="mx-auto mb-4 h-1 w-9 rounded-full bg-muted-foreground/30" />
        )}
        {(title || showClose) && (
          <div className="flex items-center justify-between px-4 mb-4">
            {title && <h3 className="text-base font-semibold">{title}</h3>}
            {showClose && (
              <button
                onClick={onClose}
                className="rounded-full bg-muted p-1.5 text-muted-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

export interface ActionSheetItem {
  label: string;
  icon?: React.ReactNode;
  destructive?: boolean;
  onClick?: () => void;
}

export interface ActionSheetProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  items: ActionSheetItem[];
}

export function ActionSheet({ open, onClose, title, items }: ActionSheetProps) {
  return (
    <BottomSheet open={open} onClose={onClose} showHandle={false} className="pb-2">
      {title && (
        <p className="text-center text-xs text-muted-foreground px-4 pb-2">{title}</p>
      )}
      <div className="mx-4 rounded-xl border divide-y overflow-hidden mb-3">
        {items.map((item) => (
          <button
            key={item.label}
            onClick={() => { item.onClick?.(); onClose?.(); }}
            className={cn(
              'flex w-full items-center justify-center gap-2 py-3.5 text-sm font-medium transition-colors active:bg-muted',
              item.destructive ? 'text-destructive' : 'text-foreground',
            )}
          >
            {item.icon && <span className="[&_svg]:h-4 [&_svg]:w-4">{item.icon}</span>}
            {item.label}
          </button>
        ))}
      </div>
      <div className="mx-4">
        <button
          onClick={onClose}
          className="w-full py-3.5 rounded-xl border text-sm font-medium transition-colors active:bg-muted"
        >
          Cancel
        </button>
      </div>
    </BottomSheet>
  );
}
