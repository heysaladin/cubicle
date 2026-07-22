interface AboutPreviewProps {
  label?: string
  title?: string
  descriptions?: string[]
  cta?: { label: string; href: string }
  imageSrc?: string
}

export function AboutPreview({
  label = 'About [Company]',
  title = '[Company] is a business-focused team dedicated to helping companies grow with clarity, confidence, and purpose',
  descriptions = [
    'We work at the intersection of strategy, execution, and insight—supporting organizations as they navigate complexity and turn ideas into measurable results.',
    'Our approach is simple: understand the challenge, define what truly matters, and build solutions that are practical, scalable, and aligned with long-term goals.',
  ],
  cta = { label: 'Discover more about [Company]', href: '/about-us' },
  imageSrc = 'https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6985b0088e58aba251f0b060_12847.jpg',
}: AboutPreviewProps) {
  return (
    <section className="section">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="background-image-wrapper">
          <img
            loading="lazy"
            src={imageSrc}
            alt=""
            sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
            className="about-image"
          />
          <div className="overlay _40"></div>
        </div>
        <div className="two-columns-wrapper">
          <div className="slide-up">
            <div
              data-w-id="5e52ad0c-430e-b6c1-0874-1295585e8526"
              className="label text-white"
              style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' } as React.CSSProperties}
            >{label}</div>
          </div>
          <div className="about-content-wrapper">
            <div className="slide-up">
              <h2
                data-w-id="5e52ad0c-430e-b6c1-0874-1295585e852a"
                className="about-title"
                style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' } as React.CSSProperties}
              >{title}</h2>
            </div>
            <div className="about-bottom-wrapper">
              <div className="about-descriptions-wrapper">
                {descriptions.map((desc, i) => (
                  <div key={i} className="slide-up">
                    <p
                      data-w-id={`about-desc-${i}`}
                      className="about-description"
                      style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' } as React.CSSProperties}
                    >{desc}</p>
                  </div>
                ))}
              </div>
              <div
                data-w-id="5e52ad0c-430e-b6c1-0874-1295585e8534"
                className="button-wrapper slide-up"
                style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' } as React.CSSProperties}
              >
                <a href={cta.href} className="primary-button button-white w-inline-block">
                  <div className="link-content-wrapper">
                    <div className="arrow-wrapper before" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                      <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69724dc1a5a8992137ccd9e5_Arrow%20Icon%20White.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                    </div>
                    <div className="button-text" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>{cta.label}</div>
                    <div className="arrow-wrapper" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                      <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6972420529c59e77c2bf4fa4_Arrow%20Icon.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
