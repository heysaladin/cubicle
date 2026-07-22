import { primaryLinks, villaLinks, discoverLinks, baseUrl } from '@/lib/data/navigation'
import Dots from '@/components/ui/Dots'
import DamaiOrnamentSVG from '@/components/ui/DamaiOrnamentSVG'
import TripAdvisorStars from '@/components/ui/TripAdvisorStars'

export default function Footer() {
  return (
    <footer className="section section-footer" data-theme-section="light" data-bg-section="light">
      <div className="container full">
        <div className="row row-links">
          <div className="border-top"></div>
          <nav className="col col-links-primary" aria-label="Navigation Footer Primary">
            <div className="col-row col-row-eyebrow">
              <span className="eyebrow small">Menu</span>
            </div>
            <ul className="col-row col-row-links-primary">
              {primaryLinks.map(({ label, href }) => (
                <li className="nav-link" data-link-status="not-active" key={href}>
                  <a className="nav-link-click" href={`${baseUrl}${href}`}>
                    <div className="nav-link-content">
                      <span>{label}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="col col-links-secondary">
            <div className="border-left"></div>
            <div className="col-split col-split-link-stay">
              <div className="col-row col-row-eyebrow">
                <span className="eyebrow small">Stay</span>
              </div>
              <ul className="col-row col-row-links">
                {villaLinks.map(({ label, href }) => (
                  <li className="link" data-link-status="not-active" key={href}>
                    <a className="link-click" href={`${baseUrl}${href}`}>
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="col-row-more-link">
                <div className="icon-link">
                  <a href={`${baseUrl}/stay`} className="icon-link-click">
                    <div className="icon-link-content">
                      <span>Overview</span>
                      <Dots />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-split col-split-link-discover">
              <div className="col-row col-row-eyebrow">
                <span className="eyebrow small">Discover</span>
              </div>
              <ul className="col-row col-row-links">
                {discoverLinks.slice(0, 3).map(({ label, href }) => (
                  <li className="link" data-link-status="not-active" key={href}>
                    <a className="link-click" href={`${baseUrl}${href}`}>
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="col-row-more-link">
                <div className="icon-link">
                  <a href={`${baseUrl}/discover`} className="icon-link-click">
                    <div className="icon-link-content">
                      <span>Show more</span>
                      <Dots />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-credentials">
            <div className="border-left"></div>
            <div className="col-row col-row-eyebrow">
              <span className="eyebrow small">Contact</span>
            </div>
            <div className="col-row col-row-address">
              <p className="medium">Jl. Damai, Kayu Putih</p>
              <p className="medium">Lovina, Buleleng, Bali, Indonesia</p>
            </div>
            <ul className="col-row col-row-external-links">
              <li className="link">
                <a className="link-click" href="tel:+6287788841008">
                  <span>T: +62 877 888 41008</span>
                </a>
              </li>
              <li className="link">
                <a className="link-click" href="mailto:resort@thedamai.com">
                  <span>E: resort@thedamai.com</span>
                </a>
              </li>
              <li className="link">
                <div className="link-click">
                  <span>Reception: WhatsApp</span>
                  <div className="overlay whatsapp-link-desktop" data-whatsapp-toggle="toggle"></div>
                  <a href="https://wa.me/6287788841008" className="overlay whatsapp-link-mobile"></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row row-credits">
          <div className="border-top"></div>
          <div className="col col-reviews">
            <div className="col-row col-row-reviews">
              <a href="https://www.tripadvisor.com/Hotel_Review-g1599559-d309351-Reviews-The_Damai-Lovina_Beach_Buleleng_District_Buleleng_Regency_Bali.html" target="_blank" className="tripadvisor-stats">
                <TripAdvisorStars />
                <div className="tripadvisor-text">
                  <span className="small tripadvisor-rating">5.0</span>
                  <span className="small inactive tripadvisor-slash">/</span>
                  <span className="small inactive tripadvisor-reviews-count">0 reviews</span>
                </div>
              </a>
            </div>
          </div>
          <div className="col col-socials">
            <div className="border-left"></div>
            <ul className="col-row col-row-socials">
              <li className="link small inactive">
                <a className="link-click" href="https://www.instagram.com/the_damai/" target="_blank">
                  <span>Instagram</span>
                </a>
              </li>
              <li className="link small inactive">
                <a className="link-click" href="https://www.tripadvisor.com/Hotel_Review-g1599559-d309351-Reviews-The_Damai-Lovina_Beach_Buleleng_District_Buleleng_Regency_Bali.html" target="_blank">
                  <span>Tripadvisor</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col col-copyright">
            <div className="border-left"></div>
            <div className="col-split">
              <p className="small inactive">© 2026 The Damai</p>
            </div>
            <div className="col-split">
              <div className="icon-link built-in">
                <div className="icon-link-click" data-credits-toggle="toggle">
                  <div className="icon-link-content">
                    <DamaiOrnamentSVG />
                    <span>Built in Bali at the Damai</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-book">
          <div className="col">
            <figure className="overlay">
              <picture className="styled-image overlay">
                <img alt="Gate with leaves and bed" className="lazy overlay" src="https://thedamai.com/media/pages/stay/8b954c387e-1703335778/footer-gate-192x48-crop-q72.webp" data-src="https://thedamai.com/media/pages/stay/8b954c387e-1703335778/footer-gate-1920x480-crop-q72.webp" width="1920" height="480" />
              </picture>
            </figure>
            <div className="btn secondary">
              <div className="btn-click" data-mews-toggle="open" data-mews-voucher="" data-mews-room-id="">
                <div className="btn-content">
                  <DamaiOrnamentSVG />
                  <span>Book your stay</span>
                  <DamaiOrnamentSVG />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
