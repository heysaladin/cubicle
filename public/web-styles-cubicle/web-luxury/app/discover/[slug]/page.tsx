import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { discoverItems } from '@/lib/data/discover'
import Eyebrow from '@/components/ui/Eyebrow'
import Button from '@/components/ui/Button'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return discoverItems.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const item = discoverItems.find((d) => d.slug === params.slug)
  if (!item) return {}
  return {
    title: item.title,
    description: item.description,
  }
}

export default function DiscoverSinglePage({ params }: PageProps) {
  const item = discoverItems.find((d) => d.slug === params.slug)
  if (!item) notFound()

  return (
    <>
      {/* Hero */}
      <section
        className="section full-height default-image-header"
        style={{ minHeight: '80vh' }}
      >
        <div className="overlay overlay-dark-gradient" style={{ zIndex: 1 }} />
        <Image
          src={item.image}
          alt={item.title}
          fill
          style={{ objectFit: 'cover', zIndex: 0 }}
          priority
          sizes="100vw"
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="styled-col">
            <div className="col-row-eyebrow">
              <Eyebrow variant="secondary">{item.location}</Eyebrow>
            </div>
            <div className="col-row-title">
              <h1 style={{ color: 'var(--color-white)' }}>{item.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container medium">
          <div className="row grid" style={{ '--columns': '2', alignItems: 'start' } as React.CSSProperties}>
            <div className="col">
              <div className="styled-col">
                <div className="col-row-eyebrow">
                  <Eyebrow>About</Eyebrow>
                </div>
                <div className="col-row-title">
                  <h2>{item.title}</h2>
                </div>
                <div className="col-row-text">
                  <p>{item.description}</p>
                </div>
                <div className="col-row-btn">
                  <Button href="/contact" variant="outline">
                    Arrange This Experience
                  </Button>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  background: 'var(--color-lightgray)',
                  borderRadius: '0.75em',
                  padding: '1.5em',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75em',
                }}
              >
                <Eyebrow>Details</Eyebrow>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid var(--color-border)',
                      paddingBottom: '0.5em',
                    }}
                  >
                    <span style={{ fontSize: 'var(--copy-size-m)', opacity: 0.6 }}>Location</span>
                    <span style={{ fontSize: 'var(--copy-size-m)' }}>{item.location}</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid var(--color-border)',
                      paddingBottom: '0.5em',
                    }}
                  >
                    <span style={{ fontSize: 'var(--copy-size-m)', opacity: 0.6 }}>Arrangement</span>
                    <span style={{ fontSize: 'var(--copy-size-m)' }}>Via The Damai</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
