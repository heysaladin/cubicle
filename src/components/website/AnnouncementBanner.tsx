import * as React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AnnouncementBannerProps {
  message: string;
  linkLabel?: string;
  linkHref?: string;
  variant?: 'default' | 'brand' | 'warning';
  dismissible?: boolean;
  onDismiss?: () => void;
}

const variantStyles = {
  default: 'bg-muted text-foreground',
  brand: 'bg-primary text-primary-foreground',
  warning: 'bg-amber-500 text-white',
};

export function AnnouncementBanner({
  message,
  linkLabel,
  linkHref = '#',
  variant = 'brand',
  dismissible = true,
  onDismiss,
}: AnnouncementBannerProps) {
  const [dismissed, setDismissed] = React.useState(false);

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss?.();
  };

  return (
    <div className={cn('relative w-full py-2 px-4 text-center text-sm', variantStyles[variant])}>
      <span>{message}</span>
      {linkLabel && (
        <a
          href={linkHref}
          className="ml-2 inline-flex items-center gap-0.5 font-medium underline underline-offset-2 hover:no-underline"
        >
          {linkLabel}
          <ArrowRight className="h-3 w-3" />
        </a>
      )}
      {dismissible && (
        <button
          onClick={handleDismiss}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-sm opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Dismiss"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}
