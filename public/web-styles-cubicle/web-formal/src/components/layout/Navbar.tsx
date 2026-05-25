'use client'

import { useState, useEffect } from 'react'

export function Navbar() {
  const [menuOpen, setMenuOpen]         = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 991) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const mobileMenuContent = (
    <>
      <div className="tablet-menu">
        <a href="/" aria-current="page" className="brand-tablet w-nav-brand w--current" aria-label="home">
          <img loading="lazy" height={30} alt="logo"
            src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/696cc4e0c2f7faf82e9fbb1f_2065dd17b63a50bc47a8fc58ae3fd5d9_LOGO.svg"
            className="brand-logo" />
        </a>
        <div
          className={`close-menu-button w-nav-button${menuOpen ? ' w--open' : ''}`}
          style={{ WebkitUserSelect: 'text' }}
          aria-label="menu" role="button" tabIndex={0}
          aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded={menuOpen}
          onClick={() => setMenuOpen(false)}
        >
          <img loading="lazy"
            src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/696cc4e0c2f7faf82e9fbb23_close-btn.svg"
            alt="icon" className="nav-close-icon" />
        </div>
      </div>

      <div className="menu-wrap">
        <a href="/" aria-current="page"
          className={`nav-link w-nav-link w--current${menuOpen ? ' w--nav-link-open' : ''}`}
          style={{ maxWidth: '1280px' }}>Home</a>
        <a href="/about-us"
          className={`nav-link w-nav-link${menuOpen ? ' w--nav-link-open' : ''}`}
          style={{ maxWidth: '1280px' }}>About</a>
        <a href="/solutions"
          className={`nav-link w-nav-link${menuOpen ? ' w--nav-link-open' : ''}`}
          style={{ maxWidth: '1280px' }}>Solutions</a>
        <a href="/blog"
          className={`nav-link w-nav-link${menuOpen ? ' w--nav-link-open' : ''}`}
          style={{ maxWidth: '1280px' }}>blog</a>

        <div
          data-delay="0" data-hover="true"
          data-w-id="7cdfb070-a6a3-3dbc-0549-4854ad3516ab"
          className={`nav-dropdown w-dropdown${dropdownOpen ? ' w--open w--nav-dropdown-open' : ''}`}
          style={{ maxWidth: '1280px' }}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <div
            className={`nav-dropdown-toggle w-dropdown-toggle${dropdownOpen ? ' w--nav-dropdown-toggle-open' : ''}`}
            id="w-dropdown-toggle-0"
            aria-controls="w-dropdown-list-0" aria-haspopup="menu"
            aria-expanded={dropdownOpen} role="button" tabIndex={0}
            onClick={() => setDropdownOpen((v) => !v)}
          >
            <p className="nav-item-title">All Pages</p>
            <div className="dot-element navbar-dot"></div>
          </div>

          <nav
            className={`nav-dropdown-list megamenu w-dropdown-list${dropdownOpen ? ' w--open w--nav-dropdown-list-open' : ''}`}
            id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0"
          >
            <div className="nav-dropdown-column">
              <div className="nav-dropdown-link-wrapper">
                <a href="/" aria-current="page" className="nav-dropdown-link w-dropdown-link w--current" tabIndex={0}><span className="nav-dropdown-span"> </span>Home</a>
                <a href="/about-us" className="nav-dropdown-link w-dropdown-link" tabIndex={0}><span className="nav-dropdown-span"> </span>About us</a>
                <a href="/our-values" className="nav-dropdown-link w-dropdown-link" tabIndex={0}><span className="nav-dropdown-span"> </span>Our Values</a>
                <a href="/solutions" className="nav-dropdown-link w-dropdown-link" tabIndex={0}><span className="nav-dropdown-span"> </span>Solutions</a>
                <div className="nav-collection-list-wrapper w-dyn-list">
                  <div role="list" className="nav-collection-list w-dyn-items">
                    <div role="listitem" className="nav-collection-item w-dyn-item">
                      <a href="/solutions/leadership-advisory" className="nav-dropdown-link w-dropdown-link" tabIndex={0}><span className="nav-dropdown-span"> </span>Solutions Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-dropdown-column">
              <div className="nav-dropdown-link-wrapper">
                <a href="/our-team" className="nav-dropdown-link w-dropdown-link" tabIndex={0}><span className="nav-dropdown-span"> </span>Our Team</a>
                <a href="/pricing" className="nav-dropdown-link w-dropdown-link" tabIndex={0}><span className="nav-dropdown-span"> </span>Pricing</a>
                <a href="/testimonials" className="nav-dropdown-link w-dropdown-link" tabIndex={0}><span className="nav-dropdown-span"> </span>Testimonials</a>
                <a href="/faq" className="nav-dropdown-link w-dropdown-link" tabIndex={0}><span className="nav-dropdown-span"> </span>FAQ</a>
                <a href="/case-studies" className="nav-dropdown-link w-dropdown-link" tabIndex={0}><span className="nav-dropdown-span"> </span>Case Studies</a>
              </div>
            </div>
            <div className="nav-dropdown-column">
              <div className="nav-dropdown-link-wrapper">
                <div className="nav-collection-list-wrapper w-dyn-list">
                  <div role="list" className="nav-collection-list w-dyn-items">
                    <div role="listitem" className="nav-collection-item w-dyn-item">
                      <a href="/case-studies/decision-clarity" className="nav-dropdown-link w-dropdown-link" tabIndex={0}><span className="nav-dropdown-span"> </span>Case Studies Details</a>
                    </div>
                  </div>
                </div>
                <a href="/blog" className="nav-dropdown-link w-dropdown-link" tabIndex={0}><span className="nav-dropdown-span"> </span>Blog</a>
                <div className="nav-collection-list-wrapper w-dyn-list">
                  <div role="list" className="nav-collection-list w-dyn-items">
                    <div role="listitem" className="nav-collection-item w-dyn-item">
                      <a href="/blog-posts/rethinking-decision-making" className="nav-dropdown-link w-dropdown-link" tabIndex={0}><span className="nav-dropdown-span"> </span>Blog Details</a>
                    </div>
                  </div>
                </div>
                <a href="/contact-us" className="nav-dropdown-link w-dropdown-link" tabIndex={0}><span className="nav-dropdown-span"> </span>Contact Us</a>
              </div>
            </div>
          </nav>
        </div>

        <div className="nav-button-tablet">
          <a href="/contact-us" className="primary-button w-button">Let&apos;s talk</a>
        </div>
      </div>
    </>
  )

  return (
    <>
    <div
      data-animation="over-left"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      data-doc-height="1"
      role="banner"
      className="navbar w-nav"
    >
      <div className="base-container w-container">
        <div className="nav-menu-wrapper">

          <a href="/" aria-current="page" className="brand w-nav-brand w--current" aria-label="home">
            <img loading="lazy" height={30} alt="logo"
              src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/696cc4e0c2f7faf82e9fbb1f_2065dd17b63a50bc47a8fc58ae3fd5d9_LOGO.svg"
              className="brand-logo" />
          </a>

          <div className="right-header-column-wrap">
            {/* Desktop nav — hidden ≤991px via Webflow CSS */}
            <nav role="navigation" className="nav-menu w-nav-menu">
              {mobileMenuContent}
            </nav>

            <div className="nav-button-wrap">
              <a href="/contact-us" className="primary-button header-button w-button">Let&apos;s talk</a>
            </div>

            <div
              className={`menu-button w-nav-button${menuOpen ? ' w--open' : ''}`}
              style={{ WebkitUserSelect: 'text' }}
              aria-label="menu" role="button" tabIndex={0}
              aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <img loading="lazy" height={16} alt="Icon"
                src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/696cc4e0c2f7faf82e9fbb1e_menu-btn.svg"
                className="image-burger" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile overlay — slides in from left, 320px wide, full viewport height */}
      <div
        className="w-nav-overlay"
        data-wf-ignore=""
        id="w-nav-overlay-0"
        style={{
          display: menuOpen ? 'block' : 'none',
          width: '320px',
          height: '100vh',
        }}
      >
        <nav
          role="navigation"
          className="nav-menu w-nav-menu"
          data-nav-menu-open=""
          style={{
            transform: menuOpen ? 'translateX(0px) translateY(0px)' : 'translateX(-100%)',
            transition: 'transform 400ms ease',
            height: '100vh',
            overflowY: 'auto',
          }}
        >
          {mobileMenuContent}
        </nav>
      </div>

    </div>
    {menuOpen && (
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          background: 'rgba(0,0,0,0.3)',
          cursor: 'pointer',
        }}
      />
    )}
    </>
  )
}
