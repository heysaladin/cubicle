import { Metadata } from 'next'
import Eyebrow from '@/components/ui/Eyebrow'
import StayCard from '@/components/cards/StayCard'
import { stays } from '@/lib/data/stays'

export const metadata: Metadata = {
  title: 'Stay',
  description:
    'Discover our collection of private pool villas set in the hills of North Bali. Each villa is a sanctuary of luxury, nature, and tranquillity.',
}

export default function StayPage() {
  return (
    <>
      {/* Header */}
      <section className="section default-header">
        <div className="container small">
          <div className="row centered">
            <div className="styled-col" style={{ textAlign: 'center', alignItems: 'center' }}>
              <div className="col-row-eyebrow">
                <Eyebrow>Accommodation</Eyebrow>
              </div>
              <div className="col-row-title">
                <h1>Where Luxury Meets Nature</h1>
              </div>
              <div className="col-row-text">
                <p>
                  Each of our four private pool villas is a sanctuary, thoughtfully designed to
                  harmonise with the surrounding landscape and offer a supremely personal
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="section section-stay-cards" style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            className="row grid"
            style={{ '--columns': '2' } as React.CSSProperties}
          >
            {stays.map((stay) => (
              <div key={stay.id} className="col">
                <StayCard stay={stay} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
