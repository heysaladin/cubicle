'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface SideNavProps {
  isOpen: boolean
  onClose: () => void
}

const primaryLinks = [
  { label: 'Stay', href: '/stay' },
  { label: 'Dining', href: '/dining' },
  { label: 'Relax', href: '/relax' },
  { label: 'Discover', href: '/discover' },
  { label: 'Packages', href: '/packages' },
]

const secondaryLinksCol1 = [
  { label: 'Garden Villa', href: '/stay/garden-villa' },
  { label: 'Pool Villa', href: '/stay/pool-villa' },
  { label: 'Luxury Pool Villa', href: '/stay/luxury-pool-villa' },
  { label: 'Two Bedroom Pool Villa', href: '/stay/two-bedroom-pool-villa' },
]

const secondaryLinksCol2 = [
  { label: 'Secret Waterfalls', href: '/discover/secret-waterfalls' },
  { label: 'Dolphins of Lovina', href: '/discover/dolphins-of-lovina' },
  { label: 'Diving and Snorkling', href: '/discover/diving-and-snorkling' },
  { label: 'Golf in the Volcano', href: '/discover/golf-in-the-volcano' },
  { label: 'North Bali', href: '/discover/north-bali' },
]

export default function SideNav({ isOpen, onClose }: SideNavProps) {
  const pathname = usePathname()

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <>
      {/* Dark overlay / backdrop */}
      <div
        className="overlay overlay-dark side-nav-back"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Side nav box */}
      <div className="side-nav-box" aria-label="Site navigation" aria-hidden={!isOpen}>
        <div className="side-nav">
          {/* Close button */}
          <button className="close" onClick={onClose} aria-label="Close navigation">
            <div className="close-inner">
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </button>

          {/* Primary links */}
          <div className="row row-links-primary">
            <div className="col">
              <div className="col-row-eyebrow">
                <span className="eyebrow">Menu</span>
              </div>
              <ul>
                {primaryLinks.map((link) => (
                  <li
                    key={link.href}
                    className="nav-link"
                    data-link-status={pathname.startsWith(link.href) ? 'active' : undefined}
                  >
                    <Link href={link.href} className="nav-link-click" onClick={onClose}>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Secondary links */}
          <div className="row row-links-secondary">
            <div className="col">
              <div className="col-row-eyebrow">
                <span className="eyebrow">Stay</span>
              </div>
              <ul>
                {secondaryLinksCol1.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="link small" onClick={onClose}>
                      <div className="link-click">
                        <span>{link.label}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col">
              <div className="col-row-eyebrow">
                <span className="eyebrow">Discover</span>
              </div>
              <ul>
                {secondaryLinksCol2.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="link small" onClick={onClose}>
                      <div className="link-click">
                        <span>{link.label}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="col-row-more-link">
                <a href="tel:+6287788841008" className="link small">
                  <span className="link-click">
                    <span>+62 877 888 41008</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Rating row */}
          <div className="row row-rating">
            <div className="col">
              <div className="col-row-rating">
                <div className="tripadvisor-stats">
                  <div className="reviews-stars" data-tripadvisor-stars="bubble_50">
                    {[1,2,3,4,5].map((i) => (
                      <svg key={i} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="7,1 9,5 13,5.5 10,8.5 10.8,13 7,11 3.2,13 4,8.5 1,5.5 5,5" />
                      </svg>
                    ))}
                  </div>
                  <div className="tripadvisor-text">
                    <span className="tripadvisor-rating eyebrow">5.0</span>
                    <span className="eyebrow inactive">/ 5 on TripAdvisor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
