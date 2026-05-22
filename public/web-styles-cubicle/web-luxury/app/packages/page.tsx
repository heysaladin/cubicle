import { Metadata } from 'next'
import Image from 'next/image'
import Eyebrow from '@/components/ui/Eyebrow'
import CardsGrid from '@/components/sections/CardsGrid'

export const metadata: Metadata = {
  title: 'Packages',
  description:
    'Explore curated experience packages at The Damai — from dolphin encounters and romance escapes to deep wellness retreats.',
}

export default function PackagesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section full-height default-image-header"
        style={{ minHeight: '65vh' }}
      >
        <div className="overlay overlay-dark-gradient" style={{ zIndex: 1 }} />
        <Image
          src="/images/packages-hero.webp"
          alt="Curated experiences at The Damai"
          fill
          style={{ objectFit: 'cover', zIndex: 0 }}
          priority
          sizes="100vw"
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="styled-col">
            <div className="col-row-eyebrow">
              <Eyebrow variant="secondary">Packages</Eyebrow>
            </div>
            <div className="col-row-title">
              <h1 style={{ color: 'var(--color-white)' }}>Curated Experiences</h1>
            </div>
            <div className="col-row-text">
              <p style={{ color: 'rgba(var(--color-white-rgb), 0.75)', maxWidth: '26em' }}>
                Each Damai package has been thoughtfully designed to offer a complete,
                immersive experience — from arrival to departure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="section section-packages-cards">
        <div className="container">
          <CardsGrid type="packages" columns={3} eyebrow="Our Packages" title="Choose Your Journey" />
        </div>
      </section>
    </>
  )
}
