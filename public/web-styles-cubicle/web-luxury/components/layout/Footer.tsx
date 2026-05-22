import Link from 'next/link'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'

const primaryLinks = [
  { label: 'Stay', href: '/stay' },
  { label: 'Dining', href: '/dining' },
  { label: 'Relax', href: '/relax' },
  { label: 'Discover', href: '/discover' },
  { label: 'Packages', href: '/packages' },
]

const secondaryLinksAccommodation = [
  { label: 'Garden Villa', href: '/stay/garden-villa' },
  { label: 'Pool Villa', href: '/stay/pool-villa' },
  { label: 'Luxury Pool Villa', href: '/stay/luxury-pool-villa' },
  { label: 'Two Bedroom Villa', href: '/stay/two-bedroom-pool-villa' },
]

const secondaryLinksInfo = [
  { label: 'About The Damai', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'News & Events', href: '/news' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="section section-footer">
      {/* Book Now Row */}
      <div className="row row-book" data-bg-section="dark">
        <div className="col">
          <div className="styled-col" style={{ alignItems: 'center', padding: 'var(--section-padding) var(--container-padding)', textAlign: 'center' }}>
            <div className="col-row-title medium">
              <h2 style={{ color: 'var(--color-white)' }}>Ready to Escape?</h2>
            </div>
            <div className="col-row-text medium">
              <p style={{ color: 'var(--color-text-light)' }}>
                Reserve your private villa in the hills of North Bali. Limited availability.
              </p>
            </div>
            <div className="col-row-btn">
              <Button href="/contact" variant="blur">
                Book Your Stay
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Links Row */}
      <div className="row row-links">
        <div className="border-top"></div>

        {/* Primary Navigation */}
        <div className="col col-links-primary">
          <div className="border-left"></div>
          <div className="col-row-eyebrow">
            <Eyebrow>Navigation</Eyebrow>
          </div>
          <ul>
            {primaryLinks.map((link) => (
              <li key={link.href} className="nav-link">
                <Link href={link.href} className="nav-link-click">
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Secondary — Accommodation */}
        <div className="col col-links-secondary">
          <div className="border-left"></div>
          <div className="col-split">
            <div className="col-row-eyebrow">
              <Eyebrow>Accommodation</Eyebrow>
            </div>
            <ul>
              {secondaryLinksAccommodation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link small">
                    <div className="link-click">
                      <span>{link.label}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-split">
            <div className="col-row-eyebrow">
              <Eyebrow>Information</Eyebrow>
            </div>
            <ul>
              {secondaryLinksInfo.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link small">
                    <div className="link-click">
                      <span>{link.label}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Address / Contact */}
        <div className="col col-credentials">
          <div className="border-left"></div>
          <div className="col-row-eyebrow">
            <Eyebrow>Address</Eyebrow>
          </div>
          <div className="col-row-address">
            <p className="small">Jl. Damai No. 1, Kayuputih</p>
            <p className="small">Lovina, North Bali, Indonesia</p>
          </div>
          <div className="col-row-external-links">
            <a href="tel:+62123456789" className="link small">
              <div className="link-click">
                <span>+62 123 456 789</span>
              </div>
            </a>
            <a href="mailto:info@thedamai.com" className="link small">
              <div className="link-click">
                <span>info@thedamai.com</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Credits Row */}
      <div className="row row-credits">
        <div className="border-top"></div>

        {/* Reviews */}
        <div className="col col-reviews">
          <div className="border-left"></div>
          <div className="col-row-reviews">
            <div className="tripadvisor-stats">
              <div className="reviews-stars" data-tripadvisor-stars="bubble_45">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="7,1 9,5 13,5.5 10,8.5 10.8,13 7,11 3.2,13 4,8.5 1,5.5 5,5" />
                  </svg>
                ))}
              </div>
              <div className="tripadvisor-text">
                <span className="eyebrow tripadvisor-rating">4.5</span>
                <span className="eyebrow inactive">/ 5 on TripAdvisor</span>
              </div>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="col col-socials">
          <div className="border-left"></div>
          <div className="col-row-socials">
            <a href="https://instagram.com/thedamairesort" target="_blank" rel="noopener noreferrer" className="link small" aria-label="Instagram">
              <div className="link-click"><span>Instagram</span></div>
            </a>
            <a href="https://facebook.com/thedamairesort" target="_blank" rel="noopener noreferrer" className="link small" aria-label="Facebook">
              <div className="link-click"><span>Facebook</span></div>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="col col-copyright">
          <div className="border-left"></div>
          <p className="small inactive">&copy; {currentYear} The Damai. All rights reserved.</p>
          <Link href="/privacy" className="link small">
            <div className="link-click"><span>Privacy</span></div>
          </Link>
        </div>
      </div>
    </footer>
  )
}
