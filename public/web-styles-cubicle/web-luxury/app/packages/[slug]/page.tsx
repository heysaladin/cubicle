import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { packages } from '@/lib/data/packages'
import Eyebrow from '@/components/ui/Eyebrow'
import Button from '@/components/ui/Button'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const pkg = packages.find((p) => p.slug === params.slug)
  if (!pkg) return {}
  return {
    title: pkg.title,
    description: pkg.description,
  }
}

export default function PackageSinglePage({ params }: PageProps) {
  const pkg = packages.find((p) => p.slug === params.slug)
  if (!pkg) notFound()

  return (
    <>
      {/* Hero */}
      <section
        className="section full-height default-image-header"
        style={{ minHeight: '80vh' }}
      >
        <div className="overlay overlay-dark-gradient" style={{ zIndex: 1 }} />
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          style={{ objectFit: 'cover', zIndex: 0 }}
          priority
          sizes="100vw"
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="styled-col">
            <div className="col-row-eyebrow">
              <Eyebrow variant="secondary">{pkg.eyebrow}</Eyebrow>
            </div>
            <div className="col-row-title">
              <h1 style={{ color: 'var(--color-white)' }}>{pkg.title}</h1>
            </div>
            {pkg.duration && (
              <div className="col-row-text">
                <p style={{ color: 'rgba(var(--color-white-rgb), 0.7)' }}>
                  Duration: {pkg.duration}
                </p>
              </div>
            )}
            <div className="col-row-btn">
              <Button href="/contact" variant="blur">
                Book This Package
              </Button>
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
                  <Eyebrow>{pkg.eyebrow} Package</Eyebrow>
                </div>
                <div className="col-row-title">
                  <h2>{pkg.title}</h2>
                </div>
                <div className="col-row-text">
                  <p>{pkg.description}</p>
                </div>
                <div className="col-row-btn">
                  <Button href="/contact">Book Now</Button>
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
                <Eyebrow>Package Includes</Eyebrow>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
                  {[
                    'Accommodation in a private villa',
                    'Daily breakfast from our garden',
                    'One signature spa treatment',
                    'Welcome amenities',
                    'All taxes and service charges',
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6em',
                        fontSize: 'var(--copy-size-m)',
                        paddingBottom: '0.5em',
                        borderBottom: '1px solid var(--color-border)',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--color-primary)',
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                {pkg.duration && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25em' }}>
                    <span style={{ fontSize: 'var(--copy-size-s)', opacity: 0.6 }}>Duration</span>
                    <span style={{ fontSize: 'var(--copy-size-m)' }}>{pkg.duration}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
