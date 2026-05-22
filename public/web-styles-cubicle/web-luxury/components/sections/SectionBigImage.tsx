import Image from 'next/image'
import Eyebrow from '@/components/ui/Eyebrow'
import Button from '@/components/ui/Button'

interface SectionBigImageProps {
  src: string
  alt: string
  hasText?: boolean
  title?: string
  eyebrow?: string
  description?: string
  href?: string
  hrefLabel?: string
}

export default function SectionBigImage({
  src,
  alt,
  hasText = false,
  title,
  eyebrow,
  description,
  href,
  hrefLabel = 'Explore',
}: SectionBigImageProps) {
  return (
    <section className={`section section-big-image${hasText ? ' section-big-image-text' : ''}`}>
      <div className="background-media">
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
          sizes="100vw"
        />
        <div className="overlay overlay-dark" aria-hidden="true"></div>
      </div>

      {hasText && (
        <div className="container small">
          <div className="row centered">
            <div className="styled-col">
              {eyebrow && (
                <div className="col-row-eyebrow">
                  <Eyebrow variant="secondary">{eyebrow}</Eyebrow>
                </div>
              )}
              {title && (
                <div className="col-row-title medium">
                  <h2 style={{ color: 'var(--color-white)' }}>{title}</h2>
                </div>
              )}
              {description && (
                <div className="col-row-text medium">
                  <p style={{ color: 'var(--color-text-light)' }}>{description}</p>
                </div>
              )}
              {href && (
                <div className="col-row-btn">
                  <Button href={href} variant="blur">
                    {hrefLabel}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
