import { Metadata } from 'next'
import Image from 'next/image'
import Eyebrow from '@/components/ui/Eyebrow'
import CardsGrid from '@/components/sections/CardsGrid'

export const metadata: Metadata = {
  title: 'Discover',
  description:
    'Explore North Bali with The Damai. From wild spinner dolphins to ancient temples, secret waterfalls to world-class diving — adventure awaits.',
}

export default function DiscoverPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section full-height default-image-header"
        style={{ minHeight: '70vh' }}
      >
        <div className="overlay overlay-dark-gradient" style={{ zIndex: 1 }} />
        <Image
          src="/images/discover-hero.webp"
          alt="Discover North Bali"
          fill
          style={{ objectFit: 'cover', zIndex: 0 }}
          priority
          sizes="100vw"
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="styled-col">
            <div className="col-row-eyebrow">
              <Eyebrow variant="secondary">Explore</Eyebrow>
            </div>
            <div className="col-row-title">
              <h1 style={{ color: 'var(--color-white)' }}>Discover North Bali</h1>
            </div>
            <div className="col-row-text">
              <p style={{ color: 'rgba(var(--color-white-rgb), 0.75)', maxWidth: '28em' }}>
                The region around The Damai is rich with natural wonders, cultural treasures,
                and unforgettable experiences — all waiting to be discovered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="section section-discover-cards">
        <div className="container">
          <CardsGrid type="discover" columns={3} eyebrow="Activities" title="What to Explore" />
        </div>
      </section>
    </>
  )
}
