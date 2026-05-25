export function Footer() {
  return (
    <div className="footer without-top-space">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="footer-with-line-wrapper">

          <div
            className="line-grey"
            style={{ opacity: 1, translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, 0px, 0px)' } as React.CSSProperties}
          ></div>

          <div className="footer-wrapper">

            {/* Brand + CTA */}
            <div className="footer-brand-wrapper">
              <div className="footer-logo-wrapper">
                <div className="brand-footer-wrap slide-up">
                  <div className="footer-brand-info-wrapper">
                    <a href="/" aria-current="page" className="footer-brand w-nav-brand w--current">
                      <img
                        loading="lazy"
                        height={30}
                        alt="logo"
                        src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/696cc4e0c2f7faf82e9fbb1f_2065dd17b63a50bc47a8fc58ae3fd5d9_LOGO.svg"
                        className="footer-logo"
                      />
                    </a>
                    <div>
                      <div className="footer-brand-description">Business, the [company] way.</div>
                    </div>
                  </div>
                </div>
                <div className="slide-up">
                  <a href="/contact-us" className="primary-button button-dark w-inline-block">
                    <div className="link-content-wrapper">
                      <div
                        className="arrow-wrapper-before"
                        style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                      >
                        <img
                          src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69724dc1a5a8992137ccd9e5_Arrow%20Icon%20White.svg"
                          loading="lazy"
                          alt="SVG"
                          className="arrow-icon"
                        />
                      </div>
                      <div
                        className="button-text"
                        style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                      >Contact us</div>
                      <div
                        className="arrow-wrapper"
                        style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                      >
                        <img
                          src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69724dc1a5a8992137ccd9e5_Arrow%20Icon%20White.svg"
                          loading="lazy"
                          width={20}
                          height={20}
                          alt="SVG"
                          className="arrow-icon"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Link columns */}
            <div className="footer-columns-wrapper">

              {/* Company */}
              <div className="footer-links-wrapper slide-up">
                <div className="footer-intro-title">Company</div>
                <div className="links-column">
                  <a href="/" aria-current="page" className="footer-link w--current">Home</a>
                  <a href="/about-us" className="footer-link">About Us</a>
                  <a href="/contact-us" className="footer-link">Join Us</a>
                </div>
              </div>

              {/* Solutions */}
              <div className="footer-links-wrapper slide-up">
                <div className="footer-intro-title">Solutions</div>
                <div className="footer-links-list-wrapper w-dyn-list">
                  <div role="list" className="links-column w-dyn-items">
                    <div role="listitem" className="footer-link-item w-dyn-item">
                      <a href="/solutions/strategic-direction" className="footer-link">Strategic Direction</a>
                    </div>
                    <div role="listitem" className="footer-link-item w-dyn-item">
                      <a href="/solutions/operational-execution" className="footer-link">Operational Execution</a>
                    </div>
                    <div role="listitem" className="footer-link-item w-dyn-item">
                      <a href="/solutions/growth-optimization" className="footer-link">Growth Optimization</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="footer-links-wrapper slide-up">
                <div className="footer-intro-title">Resources</div>
                <div className="links-column">
                  <a href="/case-studies" className="footer-link">Case Studies</a>
                  <a href="/faq" className="footer-link">FAQ</a>
                  <a href="/blog" className="footer-link">Blog</a>
                </div>
              </div>

              {/* Blog card */}
              <div className="footer-links-list-wrapper slide-up w-dyn-list">
                <div role="list" className="footer-blog-item w-dyn-items">
                  <div role="listitem" className="footer-blog-item w-dyn-item">
                    <div className="footer-link-blog-wrapper">
                      <a href="/blog-posts/decision-making" className="footer-card-wrapper w-inline-block">
                        <div className="footer-card-info-wrapper">
                          <div className="footer-blog-title">March 12, 2026</div>
                          <div className="footer-blog-title-wrap">
                            <div className="footer-title-card">Decision Making</div>
                            <div>
                              <p className="footer-card-description">Growth comes from doing the right things consistently.</p>
                            </div>
                          </div>
                        </div>
                        <div className="plus-button-wrapper">
                          <div className="plus-line"></div>
                          <div className="plus-line horizontal"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-wrapper">
          <div className="footer-left-column-wrap">
            <div className="footer-rights right-tablet">
              © [Company]. All Rights Reserved.{' '}
              <a href="/templates/licensing" className="footer-rights-link">Licensing</a>
            </div>
            <div className="footer-social-links-wrapper">
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link">YouTube</a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link">Instagram</a>
            </div>
          </div>
          <div className="footer-rights-wrapper">
            <div className="footer-rights">
              <a href="https://www.128.digital/webflow-templates" target="_blank" rel="noopener noreferrer" className="footer-rights-link">Webflow Templates</a>
              {' '}by{' '}
              <a href="https://www.128.digital/" target="_blank" rel="noopener noreferrer" className="footer-rights-link">128.digital. </a>
            </div>
            <div className="footer-rights">
              Powered by{' '}
              <a href="https://webflow.com/" target="_blank" rel="noopener noreferrer" className="footer-rights-link">Webflow</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
