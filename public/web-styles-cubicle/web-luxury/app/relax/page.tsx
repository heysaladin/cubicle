import { Metadata } from 'next'
import Image from 'next/image'
import Eyebrow from '@/components/ui/Eyebrow'
import Button from '@/components/ui/Button'
import ImageSplit from '@/components/sections/ImageSplit'
import SectionBigImage from '@/components/sections/SectionBigImage'

export const metadata: Metadata = {
  title: 'Relax & Wellness',
  description:
    'Discover deeply restorative spa rituals and wellness experiences at The Damai. Inspired by Balinese healing traditions.',
}

const treatments = [
  {
    name: 'Damai Signature Massage',
    duration: '90 min',
    description:
      'A full-body journey combining traditional Balinese techniques with therapeutic deep tissue work.',
  },
  {
    name: 'Volcanic Stone Ritual',
    duration: '75 min',
    description:
      'Warmed volcanic stones melt away tension as aromatic oils restore balance to body and mind.',
  },
  {
    name: 'Boreh Body Wrap',
    duration: '60 min',
    description:
      'A traditional Balinese warming treatment using a blend of spices to detoxify and revitalise.',
  },
  {
    name: 'Couples Harmony Ritual',
    duration: '120 min',
    description:
      'Share a deeply restorative experience with your partner in our private couples suite.',
  },
]

export default function RelaxPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section full-height default-image-header"
        style={{ minHeight: '80vh' }}
      >
        <div className="overlay overlay-dark-gradient" style={{ zIndex: 1 }} />
        <Image
          src="/images/spa-hero.webp"
          alt="Spa and wellness at The Damai"
          fill
          style={{ objectFit: 'cover', zIndex: 0 }}
          priority
          sizes="100vw"
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="styled-col">
            <div className="col-row-eyebrow">
              <Eyebrow variant="secondary">Spa & Wellness</Eyebrow>
            </div>
            <div className="col-row-title">
              <h1 style={{ color: 'var(--color-white)' }}>
                Surrender to
                <br />
                the Rhythm of Bali
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container medium">
          <div className="styled-col" style={{ alignItems: 'center', textAlign: 'center' }}>
            <div className="col-row-eyebrow">
              <Eyebrow>Healing Traditions</Eyebrow>
            </div>
            <div className="col-row-title">
              <h2>Ancient Wisdom, Modern Sanctuary</h2>
            </div>
            <div className="col-row-text">
              <p style={{ maxWidth: '34em' }}>
                Our spa draws on centuries of Balinese healing knowledge, combining ritual,
                touch, and natural botanicals to restore harmony to the body and spirit.
                Each treatment is personalised and performed by our expert therapists in
                the open-air surroundings of our jungle spa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments list */}
      <section className="section" data-bg-section="lightgray" style={{ paddingTop: 'var(--section-padding)' }}>
        <div className="container">
          <div className="styled-col" style={{ marginBottom: 'var(--gap)' }}>
            <div className="col-row-eyebrow">
              <Eyebrow>Treatments</Eyebrow>
            </div>
            <div className="col-row-title">
              <h2>Our Signature Rituals</h2>
            </div>
          </div>
          <div
            className="row grid"
            style={{ '--columns': '2' } as React.CSSProperties}
          >
            {treatments.map((t) => (
              <div key={t.name} className="col">
                <div
                  style={{
                    background: 'var(--color-white)',
                    borderRadius: '0.75em',
                    padding: '1.5em',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5em',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <Eyebrow>{t.duration}</Eyebrow>
                  <h3 style={{ fontSize: 'calc(var(--title-size) * 0.28)' }}>{t.name}</h3>
                  <p style={{ fontSize: 'var(--copy-size-m)' }}>{t.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 'var(--gap)', display: 'flex', justifyContent: 'center' }}>
            <Button href="/contact" variant="outline">
              Book a Treatment
            </Button>
          </div>
        </div>
      </section>

      {/* Yoga */}
      <ImageSplit
        image="/images/yoga.webp"
        alt="Yoga at The Damai"
        eyebrow="Yoga & Meditation"
        title="Rise with the Sun"
        description="Begin each day with a guided yoga practice or sunrise meditation session on our open-air pavilion, surrounded by the sounds of the jungle."
        href="/contact"
        flipped
      />

      {/* CTA */}
      <SectionBigImage
        src="/images/spa-cta.webp"
        alt="Book a spa experience"
        hasText
        eyebrow="Book Now"
        title="Begin Your Restoration"
        href="/contact"
        hrefLabel="Reserve a Treatment"
      />
    </>
  )
}
