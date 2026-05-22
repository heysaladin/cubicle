import { cn } from '@/lib/utils'

interface TagProps {
  children: React.ReactNode
  className?: string
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-[10px] py-[3px]',
        'text-text-sm text-primary font-medium',
        'border border-dark-grey rounded-l bg-soft-white',
        className,
      )}
    >
      {children}
    </span>
  )
}
