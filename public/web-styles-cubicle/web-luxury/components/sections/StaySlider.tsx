'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { stays } from '@/lib/data/stays'
import Eyebrow from '@/components/ui/Eyebrow'

export default function StaySlider() {
  const swiperFadeRef = useRef<HTMLDivElement>(null)
  const swiperTextRef = useRef<HTMLDivElement>(null)
  const swiperMainRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const instancesRef = useRef<{ destroy: () => void }[]>([])

  useEffect(() => {
    const initSwiper = async () => {
      const { Swiper } = await import('swiper')
      const { EffectFade, Autoplay } = await import('swiper/modules')

      if (!swiperFadeRef.current || !swiperTextRef.current || !swiperMainRef.current) return

      const swiperFade = new Swiper(swiperFadeRef.current, {
        modules: [EffectFade, Autoplay],
        effect: 'fade',
        fadeEffect: { crossFade: true },
        loop: true,
        speed: 1200,
        autoplay: { delay: 5000, disableOnInteraction: false },
        on: {
          slideChange: (s) => setActiveIndex(s.realIndex),
        },
      })

      instancesRef.current = [swiperFade]
    }

    initSwiper()

    return () => {
      instancesRef.current.forEach((s) => s.destroy())
    }
  }, [])

  const totalSlides = stays.length

  return (
    <section className="section section-stay-slider">
      <div className="swiper-slider-group" data-swiper-slider-type="stay">
        <div className="row row-back">
          {/* Fade background slider */}
          <div ref={swiperFadeRef} className="swiper swiper-carousel swiper-carousel-fade">
            <div className="swiper-wrapper">
              {stays.map((stay, i) => (
                <div key={stay.id} className="swiper-slide">
                  <Image
                    src={stay.images[0]}
                    alt={stay.name}
                    fill
                    style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                    priority={i === 0}
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="overlay overlay-dark"></div>

          {/* Text carousel */}
          <div className="swiper-carousel swiper-carousel-text">
            <div className="swiper-wrapper">
              {stays.map((stay) => (
                <div key={stay.id} className="swiper-slide">
                  <div className="swiper-slide-inner">
                    <Eyebrow variant="secondary">
                      {stay.bedrooms} Bedroom · {stay.area}
                    </Eyebrow>
                    <h2 style={{ color: 'var(--color-white)', textAlign: 'center' }}>{stay.name}</h2>
                    <p style={{ color: 'var(--color-text-light)', textAlign: 'center' }}>
                      {stay.shortDescription}
                    </p>
                    <div className="col-row-btn" style={{ justifyContent: 'center' }}>
                      <Link href={`/stay/${stay.slug}`} className="btn blur small">
                        <div className="btn-click">
                          <div className="btn-content">
                            <span>View Villa</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide count */}
        <div className="swiper-count">
          <span className="swiper-active-slide">{String(activeIndex + 1).padStart(2, '0')}</span>
          <span className="inactive" style={{ color: 'var(--color-white)', opacity: 0.5 }}>/</span>
          <span style={{ color: 'var(--color-white)', opacity: 0.5 }}>{String(totalSlides).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  )
}
