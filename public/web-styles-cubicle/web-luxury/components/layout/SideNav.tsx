'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { primaryLinks, villaLinks, discoverLinks, baseUrl } from '@/lib/data/navigation'
import TripAdvisorStars from '@/components/ui/TripAdvisorStars'

const navImages: Record<string, { src: string; alt: string }> = {
  stay: { src: '/images/navigation-image-stay-720x1440-crop-q72.webp', alt: 'Edge of studio pool' },
  dining: { src: '/images/blacktable-720x1440-crop-q72.webp', alt: 'Female having drinks at the bar' },
  relax: { src: '/images/singingbowl-720x1440-crop-q72.webp', alt: 'Singing bowl on wooden surface' },
  discover: { src: '/images/navigation-image-discover-720x1440-crop-q72.webp', alt: 'Nerves of a leaf' },
}

interface SideNavProps {
  isOpen: boolean
  onClose: () => void
}

export default function SideNav({ isOpen, onClose }: SideNavProps) {
  const pathname = usePathname()
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <>
      <div
        className="overlay overlay-dark side-nav-back"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="side-nav-box" aria-label="Site navigation" aria-hidden={!isOpen}>
        <ul className="side-nav-images" data-nav-image-group="">
          {Object.entries(navImages).map(([id, img]) => (
            <li
              key={id}
              className="single-nav-image overlay"
              data-nav-image-status={hoveredNav === id ? 'active' : 'not-active'}
              data-nav-image-id={id}
            >
              <figure className="overlay">
                <picture className="styled-image overlay">
                  <img alt={img.alt} className="overlay" src={img.src} width="720" height="1440" />
                </picture>
              </figure>
            </li>
          ))}
          <li
            className="single-nav-image overlay"
            data-nav-image-status="not-active"
            data-nav-image-id="packages"
          />
        </ul>

        <div className="side-nav" data-lenis-prevent="">
          <button className="close" onClick={onClose} aria-label="Close navigation">
            <div className="close-inner">
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </button>

          <div className="row row-links-primary">
            <nav className="col" aria-label="Navigation Mobile">
              <div className="col-row col-row-eyebrow">
                <span className="eyebrow small">Menu</span>
              </div>
              <ul className="col-row col-row-mobile-nav">
                {primaryLinks.map((link) => {
                  const id = link.href.replace('/', '')
                  return (
                    <li
                      key={link.href}
                      className="nav-link"
                      data-link-status={pathname.startsWith(link.href) ? 'active' : 'not-active'}
                      data-nav-image-id={id}
                      onMouseEnter={() => setHoveredNav(id)}
                      onMouseLeave={() => setHoveredNav(null)}
                    >
                      <a className="nav-link-click" href={`${baseUrl}${link.href}`} onClick={onClose}>
                        <div className="nav-link-content">
                          <span>{link.label}</span>
                        </div>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          <div className="row row-links-secondary">
            <div className="border-top"></div>
            <div className="col col-link-stay">
              <div className="col-row col-row-eyebrow">
                <span className="eyebrow small">Stay</span>
              </div>
              <ul className="col-row col-row-links">
                {villaLinks.map(({ label, href }) => (
                  <li className="link" data-link-status="not-active" key={href}>
                    <a className="link-click" href={`${baseUrl}${href}`} onClick={onClose}>
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col col-link-discover">
              <div className="col-row col-row-eyebrow">
                <span className="eyebrow small">Discover</span>
              </div>
              <ul className="col-row col-row-links">
                {discoverLinks.map(({ label, href }) => (
                  <li className="link" data-link-status="not-active" key={href}>
                    <a className="link-click" href={`${baseUrl}${href}`} onClick={onClose}>
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row row-rating">
            <div className="border-top"></div>
            <div className="col">
              <div className="col-row col-row-rating">
                <a
                  href="https://www.tripadvisor.com/Hotel_Review-g1599559-d309351-Reviews-The_Damai-Lovina_Beach_Buleleng_District_Buleleng_Regency_Bali.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tripadvisor-stats"
                >
                  <TripAdvisorStars />
                  <div className="tripadvisor-text">
                    <span className="small tripadvisor-rating">5.0</span>
                    <span className="small inactive tripadvisor-slash">/</span>
                    <span className="small inactive tripadvisor-reviews-count">1,300 reviews</span>
                  </div>
                </a>
                <li className="link small inactive">
                  <div className="link-click">
                    <span>WhatsApp</span>
                    <a href="https://wa.me/6287788841008" className="overlay whatsapp-link-mobile" />
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
