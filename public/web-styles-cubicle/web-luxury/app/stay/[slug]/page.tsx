import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { stays } from '@/lib/data/stays'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return stays.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const stay = stays.find((s) => s.slug === params.slug)
  if (!stay) return {}
  return {
    title: stay.name,
    description: stay.description,
  }
}

export default function StaySinglePage({ params }: PageProps) {
  const stay = stays.find((s) => s.slug === params.slug)
  if (!stay) notFound()

  return (
    <>
      {/* Hero */}
      <section className="section full-height section-stay-single-header default-image-header">
        <div className="overlay overlay-dark-gradient" style={{ zIndex: 1 }} />
        <Image
          src={stay.images[0]}
          alt={stay.name}
          fill
          className="overlay"
          style={{ objectFit: 'cover', zIndex: 0 }}
          priority
          sizes="100vw"
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row centered">
            <div className="styled-col" style={{ alignItems: 'center', textAlign: 'center' }}>
              <div className="col-row-eyebrow">
                <Eyebrow variant="secondary">Private Villa</Eyebrow>
              </div>
              <div className="col-row-title">
                <h1 style={{ color: 'var(--color-white)' }}>{stay.name}</h1>
              </div>
              <div className="col-row-btn">
                <Button href="/contact" variant="blur">
                  Request to Book
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="section">
        <div className="container medium">
          <div className="row grid" style={{ '--columns': '2' } as React.CSSProperties}>
            <div className="col">
              <div className="styled-col">
                <div className="col-row-eyebrow">
                  <Eyebrow>About This Villa</Eyebrow>
                </div>
                <div className="col-row-title">
                  <h2>{stay.name}</h2>
                </div>
                <div className="col-row-text">
                  <p>{stay.description}</p>
                </div>
                <div className="col-row-btn">
                  <Button href="/contact" variant="outline">
                    Enquire Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="styled-col">
                <div className="col-row-eyebrow">
                  <Eyebrow>Villa Details</Eyebrow>
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6em' }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5em' }}>
                    <span style={{ fontSize: 'var(--copy-size-m)', opacity: 0.6 }}>Bedrooms</span>
                    <span style={{ fontSize: 'var(--copy-size-m)', fontWeight: 400 }}>{stay.bedrooms}</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5em' }}>
                    <span style={{ fontSize: 'var(--copy-size-m)', opacity: 0.6 }}>Villa Size</span>
                    <span style={{ fontSize: 'var(--copy-size-m)', fontWeight: 400 }}>{stay.area}</span>
                  </li>
                </ul>
                <div>
                  <p style={{ fontSize: 'var(--copy-size-s)', opacity: 0.5, marginBottom: '0.75em', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Villa Features
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4em' }}>
                    {stay.features.map((f) => (
                      <span
                        key={f}
                        style={{
                          fontSize: 'var(--copy-size-s)',
                          padding: '0.3em 0.75em',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--border-radius)',
                          color: 'rgba(var(--color-dark-rgb), 0.65)',
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {stay.images.length > 1 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="row grid" style={{ '--columns': '2' } as React.CSSProperties}>
              {stay.images.map((img, i) => (
                <div key={i} className="col">
                  <div style={{ position: 'relative', borderRadius: '0.5em', overflow: 'hidden' }}>
                    <div style={{ paddingTop: '66.666%' }} />
                    <Image
                      src={img}
                      alt={`${stay.name} — image ${i + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
