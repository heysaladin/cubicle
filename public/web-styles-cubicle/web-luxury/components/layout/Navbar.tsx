'use client'

import { useState } from 'react'
import { WordmarkSVG } from './LoadingScreen'
import SideNav from './SideNav'
import Dots from '@/components/ui/Dots'
import { primaryLinks, villaLinks, discoverLinks, baseUrl } from '@/lib/data/navigation'

function DropdownNavLink({
  label,
  modifier,
  links,
}: {
  label: string
  modifier: string
  links: { label: string; href: string }[]
}) {
  return (
    <div className={`nav-link nav-link-absolute ${modifier}`}>
      <div className="nav-link-click">
        <div className="nav-link-content">
          <span>{label}</span>
          <Dots />
        </div>
      </div>
      <div className="nav-link-dropdown">
        <ul className="nav-link-dropdown-inner">
          {links.map(({ label: text, href }) => (
            <li className="link" data-barba-update="" data-link-status="not-active" key={href}>
              <a className="link-click" href={`${baseUrl}${href}`}>
                <span>{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)

  const openNav = () => {
    setNavOpen(true)
    document.body.dataset.navigationStatus = 'active'
  }

  const closeNav = () => {
    setNavOpen(false)
    document.body.dataset.navigationStatus = 'not-active'
  }

  return (
    <>
      <div className="main-nav-bar">
        <div className="overlay overlay-background"></div>
        <div className="overlay overlay-alt-background"></div>
        <div className="border-bottom"></div>
        <div className="row nav-bar-scrolled-height">
          <div className="logo">
            <a href={baseUrl} className="logo-click" aria-label="The Damai home">
              <WordmarkSVG />
            </a>
          </div>
          <nav aria-label="Navigation Desktop">
            <div
              className="cheeseburger"
              data-navigation-toggle="toggle"
              role="button"
              tabIndex={0}
              aria-label="Open navigation"
              aria-expanded={navOpen}
              onClick={openNav}
              onKeyDown={(event) => event.key === 'Enter' && openNav()}
            >
              <div className="cheeseburger-inner">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
            <div className="deco-line"></div>
            <ul className="nav-link-ul" data-barba-update="" data-link-status="dropdown-not-active">
              <DropdownNavLink label="Other villas" modifier="nav-link-absolute-stay" links={villaLinks} />
              <DropdownNavLink label="Discover" modifier="nav-link-absolute-discover" links={discoverLinks} />
              {primaryLinks.map(({ label: text, href }) => (
                <li className="nav-link nav-link-relative" data-barba-update="" data-link-status="not-active" key={href}>
                  <a className="nav-link-click" href={`${baseUrl}${href}`}>
                    <div className="nav-link-content">
                      <span>{text}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="btn btn-nav secondary small">
            <div className="btn-click" data-mews-update="" data-mews-toggle="open" data-mews-voucher="" data-mews-room-id="">
              <div className="btn-content">
                <span className="text-desktop">Book your stay</span>
                <span className="text-mobile">Book</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SideNav isOpen={navOpen} onClose={closeNav} />
    </>
  )
}
