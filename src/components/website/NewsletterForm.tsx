import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export interface NewsletterFormProps {
  headline?: string;
  description?: string;
  placeholder?: string;
  ctaLabel?: string;
  onSubmit?: (email: string) => void;
  layout?: 'inline' | 'stacked';
}

export function NewsletterForm({
  headline = 'Stay in the loop',
  description = 'Get the latest updates delivered to your inbox.',
  placeholder = 'Enter your email',
  ctaLabel = 'Subscribe',
  onSubmit,
  layout = 'inline',
}: NewsletterFormProps) {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onSubmit?.(email);
    setSubmitted(true);
  };

  return (
    <div className="space-y-3">
      {headline && <h3 className="text-sm font-semibold">{headline}</h3>}
      {description && <p className="text-sm text-muted-foreground">{description}</p>}

      {submitted ? (
        <p className="text-sm text-primary font-medium">Thanks for subscribing!</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={cn('flex gap-2', layout === 'stacked' && 'flex-col max-w-xs')}
        >
          <Input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={cn(layout === 'inline' && 'max-w-[220px]')}
          />
          <Button type="submit" size="sm">
            {ctaLabel}
          </Button>
        </form>
      )}
    </div>
  );
}
