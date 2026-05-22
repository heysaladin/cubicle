import { cn } from '@/lib/utils'

type SectionVariant = 'default' | 'primary' | 'light-gray' | 'dark'

interface SectionProps {
  children: React.ReactNode
  variant?: SectionVariant
  className?: string
  id?: string
  noPaddingTop?: boolean
  minHeight?: string
}

const variantClasses: Record<SectionVariant, string> = {
  default:    '',
  primary:    'section primary-bg',
  'light-gray': 'section light-gray-bg',
  dark:       'section dark-bg',
}

export function Section({
  children,
  variant = 'default',
  className,
  id,
  noPaddingTop,
  minHeight,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'section',
        variant !== 'default' && variantClasses[variant],
        noPaddingTop && 'no-top-padding',
        className,
      )}
      style={minHeight ? { minHeight } : undefined}
    >
      {children}
    </section>
  )
}
