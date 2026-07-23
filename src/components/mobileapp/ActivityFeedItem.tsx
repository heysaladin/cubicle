import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface ActivityFeedItemProps {
  avatar?: string;
  avatarFallback?: string;
  avatarIcon?: React.ReactNode;
  title: string;
  description?: string;
  time: string;
  media?: string;
  badge?: string;
  badgeVariant?: 'default' | 'secondary' | 'destructive' | 'outline';
  actions?: React.ReactNode;
  onClick?: () => void;
}

export function ActivityFeedItem({
  avatar,
  avatarFallback = '?',
  avatarIcon,
  title,
  description,
  time,
  media,
  badge,
  badgeVariant = 'secondary',
  actions,
  onClick,
}: ActivityFeedItemProps) {
  return (
    <div
      className={cn('px-4 py-3', onClick && 'cursor-pointer active:bg-muted transition-colors')}
      onClick={onClick}
    >
      <div className="flex gap-3">
        <div className="shrink-0">
          {avatarIcon ? (
            <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center [&_svg]:h-4 [&_svg]:w-4">
              {avatarIcon}
            </div>
          ) : (
            <Avatar className="h-9 w-9">
              {avatar && <AvatarImage src={avatar} />}
              <AvatarFallback className="text-xs">{avatarFallback}</AvatarFallback>
            </Avatar>
          )}
        </div>
        <div className="flex-1 min-w-0 space-y-1.5">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <p className="text-xs font-medium leading-snug">{title}</p>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              {badge && (
                <Badge variant={badgeVariant} className="text-[10px] px-1.5 py-0">{badge}</Badge>
              )}
              <span className="text-[10px] text-muted-foreground">{time}</span>
            </div>
          </div>
          {description && (
            <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
          )}
          {media && (
            <div className="mt-1.5 rounded-lg overflow-hidden aspect-video bg-muted">
              <img src={media} alt="" className="w-full h-full object-cover" />
            </div>
          )}
          {actions && <div className="flex gap-3 mt-1.5">{actions}</div>}
        </div>
      </div>
    </div>
  );
}
