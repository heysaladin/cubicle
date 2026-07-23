import * as React from 'react';
import { cn } from '@/lib/utils';

export interface LogoCloudProps {
  label?: string;
  logos: { name: string; src?: string; element?: React.ReactNode }[];
  className?: string;
}

export function LogoCloud({
  label = 'Trusted by teams at',
  logos,
  className,
}: LogoCloudProps) {
  return (
    <div className={cn('w-full', className)}>
      {label && (
        <p className="text-center text-xs text-muted-foreground uppercase tracking-wider mb-6">
          {label}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale">
        {logos.map((logo) => (
          <div key={logo.name} className="flex items-center justify-center h-7">
            {logo.element ?? (
              logo.src ? (
                <img src={logo.src} alt={logo.name} className="h-full w-auto object-contain" />
              ) : (
                <span className="text-sm font-semibold text-muted-foreground">{logo.name}</span>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
