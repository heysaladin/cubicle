import Image from 'next/image'

interface StyledFigureProps {
  src: string
  alt: string
  ratio?: 'portrait' | 'landscape' | 'square' | 'tall'
  className?: string
  priority?: boolean
}

export default function StyledFigure({
  src,
  alt,
  ratio = 'portrait',
  className,
  priority = false,
}: StyledFigureProps) {
  const ratioClass = ratio === 'landscape' ? 'landscape' : ''
  const classes = [
    'styled-figure',
    'default',
    ratioClass,
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <figure className={classes}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </figure>
  )
}
