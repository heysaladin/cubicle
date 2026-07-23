import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export interface TeamMemberCardProps {
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
  socials?: { platform: string; href: string; icon?: React.ReactNode }[];
  variant?: 'card' | 'minimal';
}

export function TeamMemberCard({
  name,
  role,
  bio,
  avatar,
  socials,
  variant = 'card',
}: TeamMemberCardProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const inner = (
    <div className={cn('flex flex-col items-center text-center', variant === 'card' ? 'space-y-3' : 'space-y-2')}>
      <Avatar className="h-16 w-16">
        {avatar && <AvatarImage src={avatar} alt={name} />}
        <AvatarFallback className="text-sm font-medium">{initials}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
      {bio && <p className="text-xs text-muted-foreground max-w-[180px] leading-relaxed">{bio}</p>}
      {socials && socials.length > 0 && (
        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.platform}
              href={s.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={s.platform}
            >
              {s.icon ?? <span className="text-xs">{s.platform}</span>}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  if (variant === 'minimal') return inner;

  return (
    <Card>
      <CardContent className="pt-6">{inner}</CardContent>
    </Card>
  );
}
