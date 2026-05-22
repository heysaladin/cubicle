import { cn } from '@/lib/utils'

type LabelVariant = 'default' | 'bordered' | 'white'

interface LabelProps {
  children: React.ReactNode
  variant?: LabelVariant
  className?: string
}

const variantClasses: Record<LabelVariant, string> = {
  default: 'text-primary',
  bordered: 'text-primary px-[10px] py-[3px] border border-dark-grey rounded-l bg-soft-white',
  white:    'text-white',
}

export function Label({ children, variant = 'default', className }: LabelProps) {
  return (
    <span
      className={cn(
        'text-text-body font-medium leading-[1.5em]',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
