'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function BodyManager() {
  const pathname = usePathname()

  useEffect(() => {
    document.body.dataset.pageTransition = 'not-active'
    document.body.dataset.navigationStatus = 'not-active'
    document.body.dataset.scrollingStarted = 'false'
    document.body.dataset.scrollingDirection = 'down'
    document.body.dataset.themeNav = 'light'
    document.body.dataset.bgNav = 'light'

    let lastScrollTop = 0
    const threshold = 50
    const thresholdTop = 50

    function checkThemeSection() {
      const themeSections = document.querySelectorAll<HTMLElement>('[data-theme-section]')
      const navBar = document.querySelector<HTMLElement>('.main-nav-bar .nav-bar-scrolled-height')
      const navHeight = navBar?.offsetHeight ?? 80
      const viewportCenter = window.innerHeight / 2

      for (const section of Array.from(themeSections)) {
        const rect = section.getBoundingClientRect()

        if (rect.top <= navHeight && rect.bottom >= navHeight) {
          const theme = section.dataset.themeSection
          if (theme && document.body.dataset.themeNav !== theme) {
            document.body.dataset.themeNav = theme
          }
        }

        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          const bg = section.dataset.bgSection
          if (bg && document.body.dataset.bgNav !== bg) {
            document.body.dataset.bgNav = bg
          }
        }
      }
    }

    function handleScroll() {
      const nowScrollTop = window.scrollY

      if (Math.abs(lastScrollTop - nowScrollTop) >= threshold) {
        document.body.dataset.scrollingDirection = nowScrollTop > lastScrollTop ? 'down' : 'up'
        lastScrollTop = nowScrollTop
        document.body.dataset.scrollingStarted = nowScrollTop > thresholdTop ? 'true' : 'false'
      }

      checkThemeSection()
    }

    checkThemeSection()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  return null
}
