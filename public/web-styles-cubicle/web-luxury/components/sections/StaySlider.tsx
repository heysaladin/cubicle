'use client'

import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const villas = [
  {
    title: 'Garden Villa',
    description: 'Sleeps 2 adults — with a small veranda and outdoor Balinese shower',
    href: 'https://thedamai.com/stay/garden-villa',
    detailImage:
      'https://thedamai.com/media/pages/stay/garden-villa/09db8cff11-1703335697/garden-night-edit-copy-1920x1440-crop-q72.webp',
    detailAlt: 'Garden Villa Detail',
    cardImage:
      'https://thedamai.com/media/pages/stay/garden-villa/dfd5bc50bf-1703335696/gardenbedspreadedit-540x720-crop-q72.webp',
    cardAlt: 'Garden Villa Overview',
  },
  {
    title: 'Pool Villa',
    description: 'Sleeps 2 adults — with a pool and outside shower',
    href: 'https://thedamai.com/stay/pool-villa',
    detailImage:
      'https://thedamai.com/media/pages/stay/pool-villa/862143d3cc-1703335742/walls-1920x1440-crop-q72.webp',
    detailAlt: 'Pool Villa Detail',
    cardImage:
      'https://thedamai.com/media/pages/stay/pool-villa/ef64322e6a-1703335737/poolstudiopool-540x720-crop-q72.webp',
    cardAlt: 'Pool Villa Overview',
  },
  {
    title: 'Luxury Pool Villa',
    description: 'Sleeps 2 adults — Includes a pool, a large veranda and inside and outside bathrooms',
    href: 'https://thedamai.com/stay/luxury-pool-villa',
    detailImage:
      'https://thedamai.com/media/pages/stay/luxury-pool-villa/f399f5c7d5-1703335746/poollookout2swallows-1920x1440-crop-q72.webp',
    detailAlt: 'Luxury Pool Villa Detail',
    cardImage:
      'https://thedamai.com/media/pages/stay/luxury-pool-villa/4455952c61-1703335743/header-pool-villa-540x720-crop-q72.webp',
    cardAlt: 'Luxury Pool Villa Overview',
  },
  {
    title: 'Two Bedroom Pool Villa',
    description: 'Sleeps 4 adults — with 2 pools, 2 bedrooms and 2 bathrooms',
    href: 'https://thedamai.com/stay/two-bedroom-pool-villa',
    detailImage:
      'https://thedamai.com/media/pages/stay/two-bedroom-pool-villa/bb83d51ce2-1703335769/masterpoolvillabalex-1920x1440-crop-q72.webp',
    detailAlt: 'Two Bedroom Pool Villa Detail',
    cardImage:
      'https://thedamai.com/media/pages/stay/two-bedroom-pool-villa/e7540f45ca-1703335764/leavesonwhite-540x720-crop-q72.webp',
    cardAlt: 'Two Bedroom Pool Villa Overview',
  },
]

const rowBackStyle = {
  '--parallax-strength': '20%',
  '--parallax-height': '1%',
} as CSSProperties

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <polyline points="14 19 21 12 14 5" fill="none" stroke="#000" strokeMiterlimit="10" />
      <line x1="21" y1="12" x2="2" y2="12" fill="none" stroke="#000" strokeMiterlimit="10" />
    </svg>
  )
}

export default function StaySlider() {
  const sliderId = 'swiper-slider-type-stay-id-0'
  const groupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let isDestroyed = false
    let swiperMain: any
    let swiperFade: any
    let swiperText: any
    let progressTimeline: any
    let scrollTrigger: any

    async function initSlider() {
      const [{ Swiper }, modules, gsapModule, scrollTriggerModule] = await Promise.all([
        import('swiper'),
        import('swiper/modules'),
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])
      const { Controller, EffectFade, Navigation, Pagination, Parallax } = modules
      const gsap = gsapModule.gsap
      const { ScrollTrigger } = scrollTriggerModule

      gsap.registerPlugin(ScrollTrigger)

      const sliderEl = groupRef.current
      if (isDestroyed || !sliderEl) return

      const sliderThis = sliderEl
      sliderThis.id = sliderId

      const swiperSliderMain = document.querySelector<HTMLElement>(
        `#${sliderId} .swiper-carousel-main`
      )
      const swiperSliderFade = document.querySelector<HTMLElement>(
        `#${sliderId} .swiper-carousel-fade`
      )
      const swiperSliderText = document.querySelector<HTMLElement>(
        `#${sliderId} .swiper-carousel-text`
      )
      const nextEl = document.querySelector<HTMLElement>(
        `#${sliderId} [data-swiper-control="next"]`
      )
      const prevEl = document.querySelector<HTMLElement>(
        `#${sliderId} [data-swiper-control="prev"]`
      )
      const paginationEl = document.querySelector<HTMLElement>(`#${sliderId} .swiper-pagination`)
      const activeSlideEl = sliderThis.querySelector<HTMLElement>('.swiper-active-slide')

      if (
        !swiperSliderMain ||
        !swiperSliderFade ||
        !swiperSliderText ||
        !nextEl ||
        !prevEl ||
        !paginationEl ||
        !activeSlideEl
      ) {
        return
      }

      swiperMain = new Swiper(swiperSliderMain, {
        modules: [Controller, Navigation, Pagination, Parallax],
        slidesPerView: 1,
        spaceBetween: 0,
        simulateTouch: false,
        loop: true,
        grabCursor: false,
        speed: 1200,
        navigation: { nextEl, prevEl },
        pagination: {
          el: paginationEl,
          clickable: true,
          renderBullet(_index: number, className: string) {
            return `<span class="${className}"><div class="swiper-progress"></div></span>`
          },
        },
        parallax: true,
        lazy: {
          loadPrevNext: true,
        },
        allowTouchMove: false,
        on: {},
      } as any)

      progressTimeline = gsap.timeline({ paused: true })

      function singleSwiperSliderEnd() {
        swiperMain.slideNext()
        swiperText.slideNext()
        progressTimeline.restart()
      }

      progressTimeline.to(sliderThis.querySelectorAll('.swiper-progress'), {
        duration: 5,
        scaleX: 1,
        ease: 'Power1.easeInOut',
        onComplete: singleSwiperSliderEnd,
      })

      swiperMain.on('slideChange', function () {
        activeSlideEl.textContent = String(swiperMain.realIndex + 1)
        progressTimeline.restart()
        addSwipeFadeClass()
      })

      scrollTrigger = ScrollTrigger.create({
        trigger: sliderThis,
        start: '0% 100%',
        end: '100% 0%',
        onEnter: () => progressTimeline.play(),
        onEnterBack: () => progressTimeline.play(),
        onLeave: () => progressTimeline.pause(),
        onLeaveBack: () => progressTimeline.pause(),
      })

      swiperFade = new Swiper(swiperSliderFade, {
        modules: [EffectFade, Parallax],
        slidesPerView: 1,
        simulateTouch: false,
        loop: true,
        grabCursor: false,
        parallax: true,
        effect: 'fade',
        allowTouchMove: false,
      })

      swiperText = new Swiper(swiperSliderText, {
        modules: [Navigation, Parallax],
        slidesPerView: 'auto',
        spaceBetween: 0,
        simulateTouch: false,
        loop: true,
        grabCursor: false,
        centeredSlides: true,
        speed: 1200,
        navigation: { nextEl, prevEl },
        parallax: true,
        lazy: {
          loadPrevNext: true,
        },
        allowTouchMove: false,
      } as any)

      function addSwipeFadeClass() {
        sliderThis.querySelectorAll('.swiper-slide').forEach((slide) => {
          slide.classList.add('slide-is-transitioning')
        })
        sliderThis.querySelectorAll('.swiper-slide-visible').forEach((slide) => {
          slide.classList.remove('slide-is-transitioning')
        })
        window.setTimeout(() => {
          sliderThis.querySelectorAll('.swiper-slide').forEach((slide) => {
            slide.classList.remove('slide-is-transitioning')
          })
        }, 1200)
      }

      swiperMain.controller.control = [swiperFade]
    }

    initSlider()

    return () => {
      isDestroyed = true
      scrollTrigger?.kill()
      progressTimeline?.kill()
      swiperMain?.destroy(true, true)
      swiperFade?.destroy(true, true)
      swiperText?.destroy(true, true)
    }
  }, [])

  return (
    <section
      className="section section-stay-slider"
      data-theme-section="dark"
      data-bg-section="light"
      style={{ opacity: 1, visibility: 'inherit' }}
    >
      <div
        ref={groupRef}
        className="swiper-slider-group"
        data-swiper-slider-type="stay"
        id={sliderId}
      >
        <div
          className="row row-back"
          data-parallax-strength="1"
          data-parallax-height="0.05"
          style={rowBackStyle}
        >
          <div className="swiper-pagination"></div>
          <div className="swiper-controls">
            <div
              className="swiper-arrow-overlay"
              data-swiper-control="prev"
              data-cursor-bubble-text="Prev"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
            >
              <div className="swiper-arrow">
                <ArrowIcon />
              </div>
            </div>
            <div
              className="swiper-arrow-overlay"
              data-swiper-control="next"
              data-cursor-bubble-text="Next"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
            >
              <div className="swiper-arrow">
                <ArrowIcon />
              </div>
            </div>
          </div>

          <div className="swiper-carousel swiper-carousel-fade" data-parallax-target="">
            <ul className="swiper-wrapper">
              {villas.map((villa) => (
                <li className="swiper-slide overlay" key={villa.detailImage}>
                  <div className="swiper-slide-inner overlay" data-swiper-parallax="0%">
                    <img className="overlay" src={villa.detailImage} alt={villa.detailAlt} />
                  </div>
                </li>
              ))}
            </ul>
            <div className="overlay overlay-dark"></div>
          </div>

          <div className="swiper-carousel swiper-carousel-text">
            <ul className="swiper-wrapper">
              {villas.map((villa) => (
                <li className="swiper-slide" key={villa.href}>
                  <div className="swiper-slide-inner" data-swiper-parallax="0%">
                    <p>{villa.description}</p>
                    <h2>{villa.title}</h2>
                  </div>
                  <a href={villa.href} className="overlay overlay-link" data-cursor-bubble-text="View"></a>
                </li>
              ))}
            </ul>
          </div>

          <div className="swiper-count">
            <span className="swiper-active-slide">1</span>
            <div className="deco-line-x"></div>
            <span>{villas.length}</span>
          </div>
        </div>

        <div className="row row-slider-card">
          <div className="swiper-carousel swiper-carousel-main">
            <ul className="swiper-wrapper">
              {villas.map((villa) => (
                <li className="swiper-slide" key={villa.cardImage}>
                  <div className="swiper-slide-inner overlay" data-swiper-parallax="12.5%">
                    <img className="overlay" src={villa.cardImage} alt={villa.cardAlt} />
                  </div>
                  <a href={villa.href} className="overlay overlay-link" data-cursor-bubble-text="View"></a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
