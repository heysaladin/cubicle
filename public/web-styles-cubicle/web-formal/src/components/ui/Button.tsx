import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'white' | 'dark'
type ButtonSize = 'default' | 'sm'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  showArrow?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:opacity-90',
  white:   'bg-white text-black hover:bg-light-gray',
  dark:    'bg-black text-white hover:opacity-90',
}

const sizeClasses: Record<ButtonSize, string> = {
  default: 'px-6 py-3 text-text-body',
  sm:      'px-5 py-2 text-text-body',
}

export function Button({
  variant = 'primary',
  size = 'default',
  href,
  onClick,
  children,
  className,
  showArrow = true,
  type = 'button',
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center gap-1 rounded-l font-medium',
    'min-h-[40px] transition-all duration-350 relative overflow-hidden',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

  const inner = (
    <span className="flex items-center justify-center gap-1 relative overflow-hidden">
      <span className="relative">{children}</span>
      {showArrow && (
        <span className="flex items-center justify-center w-4 h-4 relative" aria-hidden>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      )}
    </span>
  )

  if (href) {
    return <Link href={href} className={base}>{inner}</Link>
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {inner}
    </button>
  )
}
