'use client'

import { useEffect } from 'react'

export function WebflowInit() {
  useEffect(() => {
    // ── Scroll-triggered fade-in for data-w-id elements ─────────────────────
    const animatedEls = document.querySelectorAll<HTMLElement>('[data-w-id]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
          el.style.opacity = '1'
          el.style.transform =
            'translate3d(0px,0px,0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)'
          observer.unobserve(el)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    animatedEls.forEach((el) => {
      if (parseFloat(el.style.opacity) < 1) observer.observe(el)
    })

    // ── Button arrow hover animation ─────────────────────────────────────────
    const buttons = document.querySelectorAll<HTMLElement>('.primary-button')

    const EASE = 'transform 0.35s ease'
    const IN   = 'translate3d(1.5rem,0px,0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)'
    const REST = 'translate3d(0rem,0px,0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)'

    buttons.forEach((btn) => {
      // Supports both .arrow-wrapper-before and .arrow-wrapper.before
      const arrowBefore = btn.querySelector<HTMLElement>('.arrow-wrapper-before, .arrow-wrapper.before')
      const arrowAfter  = btn.querySelector<HTMLElement>('.arrow-wrapper:not(.before):not(.arrow-wrapper-before)')

      if (!arrowBefore || !arrowAfter) return

      arrowBefore.style.transition = EASE
      arrowAfter.style.transition  = EASE

      btn.addEventListener('mouseenter', () => {
        arrowBefore.style.transform = IN
        arrowAfter.style.transform  = IN
      })
      btn.addEventListener('mouseleave', () => {
        arrowBefore.style.transform = REST
        arrowAfter.style.transform  = REST
      })
    })

    // ── Video play/pause button ──────────────────────────────────────────────
    const playPauseButtons = document.querySelectorAll<HTMLButtonElement>(
      '[data-w-bg-video-control]',
    )
    playPauseButtons.forEach((btn) => {
      const videoId = btn.getAttribute('aria-controls')
      const video = videoId ? document.getElementById(videoId) as HTMLVideoElement | null : null
      if (!video) return

      const playStates = Array.from(btn.querySelectorAll<HTMLElement>('.play-state'))
      const [playState, pauseState] = playStates

      btn.addEventListener('click', () => {
        if (video.paused) {
          video.play()
          if (playState)  playState.hidden  = false
          if (pauseState) pauseState.hidden = true
        } else {
          video.pause()
          if (playState)  playState.hidden  = true
          if (pauseState) pauseState.hidden = false
        }
      })
    })

    return () => observer.disconnect()
  }, [])

  return null
}
