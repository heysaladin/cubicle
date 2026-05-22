import Image from 'next/image'
import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'

export default function HomeHeader() {
  return (
    <section className="section-home-header">
      {/* Background media */}
      <div className="background-media overlay">
        <Image
          src="/images/hero-bg.webp"
          alt="The Damai Resort — North Bali"
          fill
          priority
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
        <div className="overlay overlay-dark-gradient" aria-hidden="true"></div>
      </div>

      <div className="container wide">
        <div className="row row-title">
          <div className="col">
            <div className="styled-col">
              <div className="col-row-eyebrow">
                <Eyebrow variant="secondary">Lovina, North Bali</Eyebrow>
              </div>
              <div className="col-row-title large">
                <h1 style={{ color: 'var(--color-white)' }}>
                  A Sanctuary<br />Above the Sea
                </h1>
              </div>
              <div className="col-row-text">
                <p style={{ color: 'var(--color-text-light)' }}>
                  Nestled in the jungle-clad hills of North Bali, The Damai is a private luxury retreat
                  where time slows, nature heals, and every detail is crafted for your serenity.
                </p>
              </div>
              <div className="col-row-deco">
                <div className="deco-line-y"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-btn">
          <div className="col">
            <div className="col-row-btn">
              <Link href="/stay" className="btn primary">
                <div className="btn-click">
                  <div className="btn-content">
                    <span>Explore Villas</span>
                  </div>
                </div>
              </Link>
              <Link href="/discover" className="btn blur">
                <div className="btn-click">
                  <div className="btn-content">
                    <span>Discover Bali</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
