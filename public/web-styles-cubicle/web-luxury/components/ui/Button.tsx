import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'blur' | 'outline'
  size?: 'small' | 'tiny'
  className?: string
}

export default function Button({
  children,
  href,
  onClick,
  variant,
  size,
  className,
}: ButtonProps) {
  const classes = [
    'btn',
    variant ?? '',
    size ?? '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  const inner = (
    <div className="btn-click">
      <div className="btn-content">
        <span>{children}</span>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    )
  }

  return (
    <button className={classes} onClick={onClick} type="button">
      {inner}
    </button>
  )
}
