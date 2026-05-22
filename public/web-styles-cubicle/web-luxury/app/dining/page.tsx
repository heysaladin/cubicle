import { Metadata } from 'next'
import Image from 'next/image'
import Eyebrow from '@/components/ui/Eyebrow'
import Button from '@/components/ui/Button'
import ImageSplit from '@/components/sections/ImageSplit'
import SectionBigImage from '@/components/sections/SectionBigImage'

export const metadata: Metadata = {
  title: 'Dining',
  description:
    'Experience farm-to-table dining at The Damai. Every meal is crafted from organic ingredients grown in our own gardens, prepared with love and Balinese flair.',
}

export default function DiningPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section full-height default-image-header"
        style={{ minHeight: '80vh' }}
      >
        <div className="overlay overlay-dark-gradient" style={{ zIndex: 1 }} />
        <Image
          src="/images/dining-hero.webp"
          alt="Dining at The Damai"
          fill
          style={{ objectFit: 'cover', zIndex: 0 }}
          priority
          sizes="100vw"
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="styled-col">
            <div className="col-row-eyebrow">
              <Eyebrow variant="secondary">Dining</Eyebrow>
            </div>
            <div className="col-row-title">
              <h1 style={{ color: 'var(--color-white)' }}>
                From Our Garden
                <br />
                to Your Table
              </h1>
            </div>
            <div className="col-row-text">
              <p style={{ color: 'rgba(var(--color-white-rgb), 0.75)', maxWidth: '28em' }}>
                At The Damai, dining is a celebration of the land. Our chefs cultivate over
                sixty varieties of herbs, vegetables and fruits just steps from the kitchen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy section */}
      <section className="section">
        <div className="container medium">
          <div className="styled-col" style={{ alignItems: 'center', textAlign: 'center' }}>
            <div className="col-row-eyebrow">
              <Eyebrow>Our Philosophy</Eyebrow>
            </div>
            <div className="col-row-title">
              <h2>Honest, Seasonal, Soulful</h2>
            </div>
            <div className="col-row-text">
              <p style={{ maxWidth: '36em' }}>
                We believe great food begins long before the kitchen. Our organic garden
                provides the foundation for every dish — from morning breakfast spreads to
                intimate candlelit dinners. Each plate reflects the season, the soil, and
                the skilled hands that prepared it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image split */}
      <ImageSplit
        image="/images/dining-garden.webp"
        alt="Our organic garden at The Damai"
        eyebrow="The Garden"
        title="Grown with Care"
        description="Our certified organic garden is the heart of The Damai experience. Sixty varieties of herbs, vegetables, fruits and edible flowers are lovingly tended by our garden team and harvested daily for the kitchen."
        flipped
      />

      {/* Private dining */}
      <ImageSplit
        image="/images/dining-private.webp"
        alt="Private dining at The Damai"
        eyebrow="Private Dining"
        title="Table for Two"
        description="Reserve your private dining experience — a candlelit table in the garden, a poolside feast, or an intimate balcony setting. Every detail is arranged to your wishes."
        href="/contact"
        theme="dark"
        bgSection="dark"
      />

      {/* CTA */}
      <SectionBigImage
        src="/images/dining-cta.webp"
        alt="Book a dining experience"
        hasText
        eyebrow="Reservations"
        title="Reserve Your Table"
        href="/contact"
        hrefLabel="Make a Reservation"
      />
    </>
  )
}
