import Image from 'next/image'
import Eyebrow from '@/components/ui/Eyebrow'
import Button from '@/components/ui/Button'
import Ornament from '@/components/ui/Ornament'

export default function HomeIntro() {
  return (
    <section className="section section-home-intro">
      <div className="container">
        <div className="row grid" style={{ '--columns': '3' } as React.CSSProperties}>
          {/* Left images */}
          <div className="col col-images-left">
            <div className="col-row">
              <figure className="styled-figure default">
                <Image
                  src="/images/intro-garden.webp"
                  alt="Tropical garden at The Damai"
                  fill
                  style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                  sizes="25vw"
                />
              </figure>
            </div>
            <div className="col-row">
              <figure className="styled-figure default">
                <Image
                  src="/images/intro-main.webp"
                  alt="The Damai villa"
                  fill
                  style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                  sizes="33vw"
                />
              </figure>
            </div>
          </div>

          {/* Text column */}
          <div className="col">
            <div className="styled-col">
              <div className="col-row-eyebrow">
                <Eyebrow>Welcome to The Damai</Eyebrow>
              </div>
              <div className="col-row-title">
                <h2>A Hidden World in the Hills of Bali</h2>
              </div>
              <div className="col-row-text">
                <p>
                  Perched above the tranquil shores of Lovina, The Damai is a haven of quiet
                  luxury. Our hillside retreat is home to four private pool villas surrounded by
                  lush tropical gardens, with views stretching across the Bali Sea.
                </p>
              </div>
              <div className="col-row-ornament">
                <Ornament variant="transparent" />
              </div>
              <div className="col-row-btn">
                <Button href="/stay" variant="outline">
                  Our Villas
                </Button>
              </div>
            </div>
          </div>

          {/* Right images */}
          <div className="col col-images-right">
            <div className="col-row">
              <figure className="styled-figure default">
                <Image
                  src="/images/intro-pool.webp"
                  alt="Private pool at The Damai"
                  fill
                  style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                  sizes="33vw"
                />
              </figure>
            </div>
            <div className="col-row">
              <figure className="styled-figure default">
                <Image
                  src="/images/intro-spa.webp"
                  alt="Spa treatment at The Damai"
                  fill
                  style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                  sizes="25vw"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
