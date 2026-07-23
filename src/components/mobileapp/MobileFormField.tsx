import * as React from 'react';
import { cn } from '@/lib/utils';

export interface MobileFormFieldProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  disabled?: boolean;
  trailing?: React.ReactNode;
}

export function MobileFormField({
  label,
  value = '',
  onChange,
  placeholder,
  type = 'text',
  error,
  helperText,
  multiline = false,
  rows = 3,
  required = false,
  disabled = false,
  trailing,
}: MobileFormFieldProps) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {label}
        {required && <span className="text-destructive ml-0.5">*</span>}
      </label>
      <div
        className={cn(
          'flex items-center gap-2 rounded-xl border bg-background px-4',
          error && 'border-destructive',
          disabled && 'opacity-50',
        )}
      >
        {multiline ? (
          <textarea
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
            rows={rows}
            disabled={disabled}
            className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground resize-none"
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            className="flex-1 bg-transparent py-3 h-12 text-sm outline-none placeholder:text-muted-foreground"
          />
        )}
        {trailing && <div className="shrink-0 text-muted-foreground">{trailing}</div>}
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
      {helperText && !error && <p className="text-xs text-muted-foreground">{helperText}</p>}
    </div>
  );
}
