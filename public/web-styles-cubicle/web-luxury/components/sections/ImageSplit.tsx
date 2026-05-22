import Image from 'next/image'
import Eyebrow from '@/components/ui/Eyebrow'
import Button from '@/components/ui/Button'

interface ImageSplitProps {
  image: string
  alt: string
  title: string
  eyebrow?: string
  description?: string
  href?: string
  flipped?: boolean
  theme?: 'light' | 'dark'
  bgSection?: 'dark' | 'lightgray'
}

export default function ImageSplit({
  image,
  alt,
  title,
  eyebrow,
  description,
  href,
  flipped = false,
  theme = 'light',
  bgSection,
}: ImageSplitProps) {
  return (
    <section
      className="section section-image-split"
      data-theme-section={theme}
      data-bg-section={bgSection}
    >
      <div className="container wide">
        <div className={`row grid${flipped ? ' flipped' : ''}`}>
          {/* Image column */}
          <div className="col col-image">
            <div className="styled-figure default" style={{ position: 'relative' }}>
              <Image
                src={image}
                alt={alt}
                fill
                style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text column */}
          <div className="col col-text">
            <div className="styled-col">
              {eyebrow && (
                <div className="col-row-eyebrow">
                  <Eyebrow>{eyebrow}</Eyebrow>
                </div>
              )}
              <div className="col-row-title">
                <h2>{title}</h2>
              </div>
              {description && (
                <div className="col-row-text">
                  <p>{description}</p>
                </div>
              )}
              {href && (
                <div className="col-row-btn">
                  <Button href={href} variant={theme === 'dark' ? 'blur' : 'outline'}>
                    Learn More
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
