interface OrnamentProps {
  variant?: 'default' | 'transparent' | 'dark' | 'white' | 'primary'
  className?: string
}

export default function Ornament({ variant = 'default', className }: OrnamentProps) {
  const classes = [
    'ornament',
    variant !== 'default' ? variant : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} aria-hidden="true">
      <svg
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <path d="M30 4C30 4 33.5 15 42 18C33.5 21 30 32 30 32C30 32 26.5 21 18 18C26.5 15 30 4 30 4Z" fill="currentColor" />
        <path d="M30 28C30 28 33.5 39 42 42C33.5 45 30 56 30 56C30 56 26.5 45 18 42C26.5 39 30 28 30 28Z" fill="currentColor" />
        <path d="M4 30C4 30 15 26.5 18 18C21 26.5 32 30 32 30C32 30 21 33.5 18 42C15 33.5 4 30 4 30Z" fill="currentColor" />
        <path d="M28 30C28 30 39 26.5 42 18C45 26.5 56 30 56 30C56 30 45 33.5 42 42C39 33.5 28 30 28 30Z" fill="currentColor" />
        <circle cx="30" cy="30" r="3" fill="currentColor" />
      </svg>
    </div>
  )
}
