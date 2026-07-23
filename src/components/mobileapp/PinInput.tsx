import * as React from 'react';
import { cn } from '@/lib/utils';

export interface PinInputProps {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  masked?: boolean;
  error?: boolean;
  className?: string;
}

export function PinInput({
  length = 6,
  value = '',
  onChange,
  masked = false,
  error = false,
  className,
}: PinInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const digits = value.split('').slice(0, length);

  return (
    <div className={cn('relative flex gap-3 justify-center', className)} onClick={() => inputRef.current?.focus()}>
      {/* Hidden real input */}
      <input
        ref={inputRef}
        type="tel"
        maxLength={length}
        value={value}
        onChange={(e) => onChange?.(e.target.value.replace(/\D/g, ''))}
        className="absolute inset-0 opacity-0 w-full cursor-default"
        inputMode="numeric"
      />

      {Array.from({ length }).map((_, i) => {
        const char = digits[i];
        const isCurrent = i === digits.length;

        return (
          <div
            key={i}
            className={cn(
              'relative flex h-14 w-11 items-center justify-center rounded-xl border-2 text-lg font-semibold transition-all',
              isCurrent && 'border-primary',
              !isCurrent && char && 'border-border',
              !isCurrent && !char && 'border-border/50',
              error && 'border-destructive',
            )}
          >
            {char ? (masked ? '•' : char) : null}
            {isCurrent && (
              <span className="absolute h-5 w-0.5 bg-primary animate-pulse" />
            )}
          </div>
        );
      })}
    </div>
  );
}
