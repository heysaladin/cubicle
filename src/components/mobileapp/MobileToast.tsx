import { CheckCircle2, AlertCircle, Info, XCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface MobileToastProps {
  message: string;
  variant?: ToastVariant;
  visible?: boolean;
  onDismiss?: () => void;
  action?: { label: string; onClick: () => void };
}

const variantConfig = {
  success: { icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-950' },
  error: { icon: XCircle, color: 'text-destructive', bg: 'bg-destructive/10' },
  warning: { icon: AlertCircle, color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-950' },
  info: { icon: Info, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-950' },
};

export function MobileToast({
  message,
  variant = 'info',
  visible = true,
  onDismiss,
  action,
}: MobileToastProps) {
  if (!visible) return null;
  const { icon: Icon, color, bg } = variantConfig[variant];

  return (
    <div
      className={cn(
        'mx-4 flex items-center gap-3 rounded-xl px-4 py-3 shadow-lg border',
        bg,
      )}
    >
      <Icon className={cn('h-4 w-4 shrink-0', color)} />
      <p className="flex-1 text-xs font-medium">{message}</p>
      {action && (
        <button
          onClick={action.onClick}
          className={cn('text-xs font-semibold shrink-0', color)}
        >
          {action.label}
        </button>
      )}
      {onDismiss && (
        <button onClick={onDismiss} className="text-muted-foreground shrink-0">
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
