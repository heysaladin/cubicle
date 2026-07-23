import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';

export interface CookieBannerProps {
  message?: string;
  acceptLabel?: string;
  declineLabel?: string;
  learnMoreHref?: string;
  onAccept?: () => void;
  onDecline?: () => void;
}

export function CookieBanner({
  message = 'We use cookies to improve your experience. By continuing, you agree to our cookie policy.',
  acceptLabel = 'Accept all',
  declineLabel = 'Decline',
  learnMoreHref = '#',
  onAccept,
  onDecline,
}: CookieBannerProps) {
  const [dismissed, setDismissed] = React.useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="mx-auto max-w-2xl bg-background border rounded-lg shadow-lg p-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Cookie className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-sm text-muted-foreground flex-1">
            {message}{' '}
            <a href={learnMoreHref} className="underline hover:text-foreground transition-colors">
              Learn more
            </a>
          </p>
          <div className="flex gap-2 shrink-0">
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                onDecline?.();
                setDismissed(true);
              }}
            >
              {declineLabel}
            </Button>
            <Button
              size="sm"
              onClick={() => {
                onAccept?.();
                setDismissed(true);
              }}
            >
              {acceptLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
