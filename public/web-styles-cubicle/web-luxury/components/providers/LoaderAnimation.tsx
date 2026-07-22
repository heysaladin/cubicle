'use client'

import { useEffect } from 'react'
import gsap from 'gsap'

export default function LoaderAnimation() {

  useEffect(() => {

    const w = window.innerWidth
    let offset = 10
    if (w < 1024) offset = 15
    if (w < 720) offset = 20
    if (w < 540) offset = 25

    const offsetTop = w < 1024 ? '60%' : '45%'
    const offsetPositive = `${50 - offset}%`
    const offsetNegative = `${50 + offset}%`

    const tl = gsap.timeline()

    tl.set('html', { cursor: 'wait' }, 0)

    tl.set('.default-header .col-row', {
      rotate: 0.001,
      opacity: 0,
      y: '1em',
      filter: 'blur(0.25em)',
      scale: 0.975,
    }, 0)

    tl.set('body header', { autoAlpha: 0 }, 0)

    tl.set('.section', { autoAlpha: 0 }, 0)

    tl.set('.section.section-home-header', { autoAlpha: 1 }, 0.8)

    tl.set('.section', { autoAlpha: 1 }, 0.8)

    tl.set('.loading-container .loading-screen', { backgroundColor: 'transparent' }, 0)

    tl.set('.section-home-header', {
      clipPath: `polygon(${offsetPositive} ${offsetTop}, ${offsetNegative} ${offsetTop}, ${offsetNegative} 100%, ${offsetPositive} 100%)`,
    }, 0)

    tl.set('.loading-logo svg', { yPercent: 0, rotate: 0.001 }, 0)

    tl.from('.section-home-header', {
      yPercent: 50,
      rotate: 0.001,
      duration: 2,
      ease: 'expo.inOut',
    }, 0)

    tl.to('.loading-logo', {
      top: '35%',
      rotate: 0.001,
      duration: 2,
      ease: 'expo.inOut',
    }, 0)

    tl.to('.section-home-header', {
      duration: 2,
      ease: 'expo.inOut',
      clipPath: 'polygon(-1% -1%, 101% -1%, 101% 101%, -1% 101%)',
      clearProps: 'all',
    }, 1.8)

    tl.to('.loading-logo svg', {
      yPercent: -100,
      rotate: 0.001,
      duration: 0.9,
      ease: 'expo.in',
    }, 1.8)

    tl.to('.loading-logo', {
      top: '5%',
      rotate: 0.001,
      duration: 2,
      ease: 'expo.inOut',
    }, 1.8)

    tl.set('.loading-screen', { autoAlpha: 0 }, 3.8)

    tl.to('.loading-logo', {
      opacity: 0,
      duration: 0.4,
      ease: 'expo.inOut',
    }, 2.6)

    tl.from('.section-home-header .container', {
      duration: 2,
      ease: 'expo.out',
      yPercent: 10,
      clearProps: 'all',
    }, 2.6)

    tl.to('body header', {
      duration: 1.4,
      ease: 'expo.out',
      autoAlpha: 1,
      clearProps: 'all',
    }, 2.8)

    tl.set('.default-header .col-row', {
      rotate: 0.001,
      opacity: 0,
      y: '1em',
      filter: 'blur(0.25em)',
      scale: 0.975,
    }, 2.4)

    tl.to('.default-header .col-row', {
      duration: 1.4,
      rotate: 0.001,
      opacity: 1,
      y: '0em',
      ease: 'expo.out',
      stagger: 0.1,
      scale: 1,
    }, 2.6)

    tl.to('.default-header .col-row', {
      duration: 2,
      ease: 'expo.out',
      clearProps: 'all',
      stagger: 0.1,
      filter: 'blur(0em)',
      scale: 1,
    }, 2.6)

    tl.set('html', { cursor: 'auto' })

  }, [])

  return null
}
