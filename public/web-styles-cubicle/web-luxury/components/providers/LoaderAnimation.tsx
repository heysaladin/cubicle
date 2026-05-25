'use client'

import { useEffect } from 'react'
import gsap from 'gsap'

export default function LoaderAnimation() {

  useEffect(() => {

    function initLoader() {

      console.log('AW AW AW')

      const tl = gsap.timeline()

      tl.set('html', {
        cursor: 'wait',
      })

      tl.to('.loading-screen', {
        duration: 0.8,
        autoAlpha: 0,
        ease: 'power3.out',
      }, 1)

      tl.to('.loading-logo svg', {
        yPercent: -100,
        rotate: 0.001,
        duration: 1.2,
        ease: 'expo.inOut',
      }, 0.2)

      tl.set('html', {
        cursor: 'auto',
      })

      tl.set('.transition-screen', {
        autoAlpha: 1,
      }, 0)

      tl.to('.transition-screen', {
        duration: 0.8,
        autoAlpha: 0,
        ease: 'power3.out',
      }, 0.1)

    }

    // RUN DIRECTLY
    initLoader()

  }, [])

  return null
}