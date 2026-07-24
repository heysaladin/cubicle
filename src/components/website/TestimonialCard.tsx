import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorTitle?: string;
  authorAvatar?: string;
  rating?: number;
  variant?: 'card' | 'minimal';
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={cn('h-4 w-4', i < rating ? 'text-amber-400' : 'text-muted')}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCard({
  quote,
  authorName,
  authorTitle,
  authorAvatar,
  rating,
  variant = 'card',
}: TestimonialCardProps) {
  const initials = authorName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const content = (
    <div className="space-y-4">
      {rating !== undefined && <StarRating rating={rating} />}
      <blockquote className="text-sm leading-relaxed text-foreground">"{quote}"</blockquote>
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          {authorAvatar && <AvatarImage src={authorAvatar} alt={authorName} />}
          <AvatarFallback className="text-xs">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-xs font-semibold">{authorName}</p>
          {authorTitle && <p className="text-xs text-muted-foreground">{authorTitle}</p>}
        </div>
      </div>
    </div>
  );

  if (variant === 'minimal') {
    return <div className="space-y-4">{content}</div>;
  }

  return (
    <Card className="h-full">
      <CardContent className="pt-6">{content}</CardContent>
    </Card>
  );
}
