'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function BodyManager() {
  const pathname = usePathname()

  useEffect(() => {
    // Set initial data attributes
    document.body.dataset.pageTransition = 'not-active'
    document.body.dataset.navigationStatus = 'not-active'
    document.body.dataset.scrollingStarted = 'false'
    document.body.dataset.themeNav = 'light'
    document.body.dataset.bgNav = 'light'

    const handleScroll = () => {
      const scrolled = window.scrollY > 10
      document.body.dataset.scrollingStarted = scrolled ? 'true' : 'false'
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  return null
}
