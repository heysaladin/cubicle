interface EyebrowProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'small' | 'tiny'
  className?: string
}

export default function Eyebrow({ children, variant, className }: EyebrowProps) {
  const classes = [
    'eyebrow',
    variant ?? '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return <span className={classes}>{children}</span>
}
