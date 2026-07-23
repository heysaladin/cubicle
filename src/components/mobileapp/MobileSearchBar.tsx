import * as React from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface MobileSearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onCancel?: () => void;
  showCancel?: boolean;
  className?: string;
}

export function MobileSearchBar({
  placeholder = 'Search',
  value = '',
  onChange,
  onCancel,
  showCancel = false,
  className,
}: MobileSearchBarProps) {
  const [focused, setFocused] = React.useState(false);

  return (
    <div className={cn('flex items-center gap-2 px-4 py-2', className)}>
      <div className="flex flex-1 items-center gap-2 rounded-xl bg-muted px-3 h-9">
        <Search className="h-4 w-4 text-muted-foreground shrink-0" />
        <input
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
        {value && (
          <button
            onClick={() => onChange?.('')}
            className="text-muted-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      {(showCancel || focused) && (
        <button
          onClick={onCancel}
          className="text-sm text-primary font-medium shrink-0"
        >
          Cancel
        </button>
      )}
    </div>
  );
}
