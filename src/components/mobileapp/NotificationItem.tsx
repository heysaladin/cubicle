import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export interface NotificationItemProps {
  title: string;
  body: string;
  time: string;
  avatar?: string;
  avatarFallback?: string;
  icon?: React.ReactNode;
  unread?: boolean;
  onClick?: () => void;
}

export function NotificationItem({
  title,
  body,
  time,
  avatar,
  avatarFallback = '?',
  icon,
  unread = false,
  onClick,
}: NotificationItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex w-full items-start gap-3 px-4 py-3 text-left transition-colors active:bg-muted',
        unread && 'bg-primary/5',
      )}
    >
      {/* Avatar / icon */}
      <div className="relative shrink-0">
        {avatar !== undefined ? (
          <Avatar className="h-10 w-10">
            <AvatarImage src={avatar} />
            <AvatarFallback className="text-xs">{avatarFallback}</AvatarFallback>
          </Avatar>
        ) : (
          <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center [&_svg]:h-5 [&_svg]:w-5">
            {icon}
          </div>
        )}
        {unread && (
          <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-primary border-2 border-background" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className={cn('text-xs font-semibold leading-tight', unread ? 'text-foreground' : 'text-muted-foreground')}>
            {title}
          </p>
          <span className="text-[10px] text-muted-foreground shrink-0">{time}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{body}</p>
      </div>
    </button>
  );
}
