interface DecoLineProps {
  axis?: 'y' | 'x'
  className?: string
}

export default function DecoLine({ axis = 'y', className }: DecoLineProps) {
  const classes = [
    axis === 'y' ? 'deco-line-y' : 'deco-line-x',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classes} aria-hidden="true" />
}
