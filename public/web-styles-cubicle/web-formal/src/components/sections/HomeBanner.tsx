interface HomeBannerProps {
  title?: string
  description?: string
  cta?: { label: string; href: string }
}

export function HomeBanner({
  title = 'Business, the [company] way',
  description = '[Company] streamlines operations and drives business growth.',
  cta = { label: 'Discover our solutions', href: '/solutions' },
}: HomeBannerProps) {
  return (
    <section className="section home-banner">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="home-banner-wrapper">

          <div
            className="home-top-banner-wrapper"
            style={{ opacity: 1, translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, 0px, 0px)' } as React.CSSProperties}
          >
            <h1 className="home-title-banner">{title}</h1>
            <div className="right-column-home-wrap">
              <p className="home-banner-description">{description}</p>
              <a href={cta.href} className="primary-button button-dark w-inline-block">
                <div className="link-content-wrapper">
                  <div className="arrow-wrapper-before" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                    <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69724dc1a5a8992137ccd9e5_Arrow%20Icon%20White.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                  </div>
                  <div className="button-text" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>{cta.label}</div>
                  <div className="arrow-wrapper" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                    <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69724dc1a5a8992137ccd9e5_Arrow%20Icon%20White.svg" loading="lazy" width={20} height={20} alt="SVG" className="arrow-icon" />
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div
            className="home-cards-banner-wrap"
            style={{ opacity: 1, translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, 0px, 0px)' } as React.CSSProperties}
          >
            {/* Card: New customers */}
            <div className="home-banner-card-wrapper">
              <div className="banner-catd-title">New customers</div>
              <div className="banner-card-info-wrapper">
                <div className="banner-card-number-wrapper">
                  <div className="large-card-number">849</div>
                  <div className="small-text">Last 30 days</div>
                </div>
                <div
                  className="line-grey home-banner-line"
                  style={{ opacity: 1, translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, 0px, 0px)' } as React.CSSProperties}
                ></div>
                <div className="small-text-wrapper">
                  <div className="small-text with-border">+185%</div>
                  <div className="small-text">Since previous 30 days</div>
                </div>
              </div>
            </div>

            {/* Card: Video */}
            <div id="w-node-_02c7e16a-100f-15a5-e01b-6794bab0dc81-2e9fbaff" className="home-banner-card-wrapper video-card">
              <div className="background-video-wrapper">
                <div
                  data-poster-url="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10%2F6973cc5a466975cec93cdee3_Business%20Talk%20Video_poster.0000000.jpg"
                  data-video-urls="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10%2F6973cc5a466975cec93cdee3_Business%20Talk%20Video_mp4.mp4,https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10%2F6973cc5a466975cec93cdee3_Business%20Talk%20Video_webm.webm"
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  className="background-video w-background-video w-background-video-atom"
                >
                  <video
                    id="78b8238b-168a-3bfb-0a3b-f76c3f1d37b1-video"
                    autoPlay
                    loop
                    style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10%2F6973cc5a466975cec93cdee3_Business%20Talk%20Video_poster.0000000.jpg")' }}
                    muted
                    playsInline
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10%2F6973cc5a466975cec93cdee3_Business%20Talk%20Video_mp4.mp4" data-wf-ignore="true" />
                    <source src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10%2F6973cc5a466975cec93cdee3_Business%20Talk%20Video_webm.webm" data-wf-ignore="true" />
                  </video>
                  <noscript>
                    <style>{`[data-wf-bgvideo-fallback-img]{display:none}@media(prefers-reduced-motion:reduce){[data-wf-bgvideo-fallback-img]{position:absolute;z-index:-100;display:inline-block;height:100%;width:100%;object-fit:cover}}`}</style>
                    <img data-wf-bgvideo-fallback-img="true" src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10%2F6973cc5a466975cec93cdee3_Business%20Talk%20Video_poster.0000000.jpg" alt="" />
                  </noscript>
                  <div aria-live="polite">
                    <button
                      type="button"
                      data-w-bg-video-control="true"
                      aria-controls="78b8238b-168a-3bfb-0a3b-f76c3f1d37b1-video"
                      className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button home-page w-background-video--control"
                    >
                      <span className="play-state">
                        <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69e2010b6c2e6e2a90229a41_fluent_pause-24-filled.svg" loading="lazy" alt="Pause video" />
                      </span>
                      <span hidden className="play-state">
                        <img loading="lazy" alt="Play video" src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69e2010bad1f6b80cdbdbff5_line-md_pause-to-play-filled-transition.svg" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card: Goal progress */}
            <div className="home-banner-card-wrapper">
              <div className="banner-catd-title">Goal progress</div>
              <div className="banner-card-info-wrapper last-card">
                <div className="center-wrapper">
                  <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6973f176ceca939ad2e66afd_80%20percent%20element.webp" loading="lazy" alt="Image" className="precent-image" />
                  <div className="large-card-number with-paddings">80%</div>
                  <div className="small-text">Progress toward the current target</div>
                </div>
                <div className="home-card-labels-wrapper">
                  <div className="text-with-dot-wrapper">
                    <div className="dot-large"></div>
                    <div className="small-text text-dark">Achieved</div>
                  </div>
                  <div className="text-with-dot-wrapper">
                    <div className="dot-large light-grey"></div>
                    <div className="small-text">Achieved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-w-id="ec1f1897-fba2-f2b6-2dac-5da415eb026b"
            style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' } as React.CSSProperties}
            className="banner-home-bottom-wrap"
          >
            <p className="simple-grey-title">Trusted by large businesses</p>
            <div className="logos-wrapper">
              <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6973866b3f0dad6762f9f818_Fictional%20company%20logo%201.svg" loading="lazy" width={120} height={32} alt="Logo" className="logo-image" />
              <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6973866bb8c7271b66575bdb_Fictional%20company%20logo%202.svg" loading="lazy" width={120} height={32} alt="Logo" className="logo-image" />
              <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6973866bf27de3e3b13c7dbd_Fictional%20company%20logo%206.svg" loading="lazy" width={120} height={32} alt="Logo" className="logo-image" />
              <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6973866b5cdd047cdd44bdd2_Fictional%20company%20logo%204.svg" loading="lazy" width={120} height={32} alt="Logo" className="logo-image" />
              <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6973866b8b996984f949300d_Fictional%20company%20logo%205.svg" loading="lazy" width={120} height={32} alt="Logo" className="logo-image" />
              <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6973867062fb1ca657e99423_Fictional%20company%20logo%203.svg" loading="lazy" width={120} height={32} alt="Logo" className="logo-image" />
            </div>
          </div>

          <div
            className="line-grey"
            style={{ opacity: 1, translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, 0px, 0px)' } as React.CSSProperties}
          ></div>

        </div>
      </div>
    </section>
  )
}
