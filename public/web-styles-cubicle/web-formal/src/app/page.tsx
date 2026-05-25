import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '[Company]',
  description: '[Company] streamlines operations and drives business growth.',
}

export default function Home() {
  return (
    <>

      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <section className="section home-banner">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="home-banner-wrapper">

            <div
              className="home-top-banner-wrapper"
              style={{ opacity: 1, translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, 0px, 0px)' } as React.CSSProperties}
            >
              <h1 className="home-title-banner">Business, the [company] way</h1>
              <div className="right-column-home-wrap">
                <p className="home-banner-description">[Company] streamlines operations and drives business growth.</p>
                <a href="/solutions" className="primary-button button-dark w-inline-block">
                  <div className="link-content-wrapper">
                    <div className="arrow-wrapper-before" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                      <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69724dc1a5a8992137ccd9e5_Arrow%20Icon%20White.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                    </div>
                    <div className="button-text" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>Discover our solutions</div>
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

      {/* ── Rationale ───────────────────────────────────────────── */}
      <section className="section without-top-space">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="center-wrapper flex-20">
            <div className="slide-up">
              <div
                data-w-id="d44a6d1a-57d5-7c35-dd4e-8fb4f5b131ff"
                style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                className="label"
              >Why we build [Company]</div>
            </div>
            <div className="slide-up">
              <h2
                data-w-id="d44a6d1a-57d5-7c35-dd4e-8fb4f5b13201"
                style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                className="rationale-title"
              >Because good intentions aren't enough</h2>
            </div>
            <div className="slide-up">
              <p
                data-w-id="d44a6d1a-57d5-7c35-dd4e-8fb4f5b13203"
                style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                className="rationale-descripiton"
              >Businesses start with ambition, focus, and clear goals—but day-to-day pressure, complexity, and constant change get in the way.</p>
            </div>
          </div>

          <div className="rationale-content-wrap">

            {/* Card 1 */}
            <div className="rationale-card-wrapper">
              <div
                data-w-id="1b731167-9b1d-833b-53a2-0290bef020af"
                style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                className="rationale-image-wrapper"
              >
                <img
                  src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69764dd7c66ce2ceada59cda_Photo%20in%20motion%20Green.webp"
                  loading="lazy"
                  width={1000}
                  height={1000}
                  alt="Image"
                  srcSet="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69764dd7c66ce2ceada59cda_Photo%20in%20motion%20Green-p-500.webp 500w, https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69764dd7c66ce2ceada59cda_Photo%20in%20motion%20Green-p-800.webp 800w, https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69764dd7c66ce2ceada59cda_Photo%20in%20motion%20Green.webp 1050w"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  className="full-image slide-up"
                />
                <img
                  src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69764e95554906b552fa2acc_Revenue%20Card%20Element.png"
                  loading="lazy"
                  width={800}
                  alt="Image"
                  className="revenue-card-image slide-up"
                />
              </div>
              <div
                data-w-id="a7dbfb02-8b3a-2a45-3cd6-990efb4527ec"
                style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                className="rationale-card-content-wrapper"
              >
                <div className="rationale-card-text-wrapper">
                  <div className="slide-up"><div className="label">The reality</div></div>
                  <div className="slide-up"><h3 className="rationale-card-title">Progress slows without clarity</h3></div>
                  <div className="slide-up">
                    <p className="rationale-card-description">When priorities compete and decisions stack up, teams lose consistency. Growth becomes reactive instead of intentional, and opportunities are missed before they're recognized.</p>
                  </div>
                </div>
                <div className="slide-up">
                  <a href="/case-studies" className="primary-button w-inline-block">
                    <div className="link-content-wrapper">
                      <div className="arrow-wrapper before" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                        <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69724dc1a5a8992137ccd9e5_Arrow%20Icon%20White.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                      </div>
                      <div className="button-text" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>Learn more</div>
                      <div className="arrow-wrapper" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                        <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6972420529c59e77c2bf4fa4_Arrow%20Icon.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rationale-card-wrapper bottom-card">
              <div
                data-w-id="ec4f1b5d-01c9-d69e-8dc3-1d7c11889018"
                style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                className="rationale-card-content-wrapper bottom-card"
              >
                <div className="rationale-card-text-wrapper">
                  <div className="slide-up"><div className="label">Our response</div></div>
                  <div className="slide-up"><h3 className="rationale-card-title">We built [Company] to restore focus</h3></div>
                  <div className="slide-up">
                    <p className="rationale-card-description bottom-card">[Company] helps businesses turn strategy into steady progress. By simplifying complexity and creating clear direction, we help teams stay aligned, move with confidence, and build momentum that lasts.</p>
                  </div>
                </div>
                <div className="slide-up">
                  <a href="/our-values" className="primary-button w-inline-block">
                    <div className="link-content-wrapper">
                      <div className="arrow-wrapper before" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                        <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69724dc1a5a8992137ccd9e5_Arrow%20Icon%20White.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                      </div>
                      <div className="button-text" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>Learn more</div>
                      <div className="arrow-wrapper" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                        <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6972420529c59e77c2bf4fa4_Arrow%20Icon.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                data-w-id="ec4f1b5d-01c9-d69e-8dc3-1d7c11889015"
                style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                className="rationale-image-wrapper"
              >
                <img
                  src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/697652f0f32d48fb79c38190_Photo%20in%20motion%20Red.webp"
                  loading="lazy"
                  width={1000}
                  height={1000}
                  alt="Image"
                  srcSet="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/697652f0f32d48fb79c38190_Photo%20in%20motion%20Red-p-500.webp 500w, https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/697652f0f32d48fb79c38190_Photo%20in%20motion%20Red.webp 1050w"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  className="full-image slide-up"
                />
                <img
                  src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/697661af9c7d454fd78d3eb9_01%20Clarity%20Card%20Element.webp"
                  loading="lazy"
                  width={800}
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 800px"
                  alt="Image"
                  srcSet="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/697661af9c7d454fd78d3eb9_01%20Clarity%20Card%20Element-p-500.webp 500w, https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/697661af9c7d454fd78d3eb9_01%20Clarity%20Card%20Element.webp 825w"
                  className="revenue-card-image slide-up"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Outcomes + Blog (primary-background) ────────────────── */}
      <section className="section primary-background">
        <div className="w-layout-blockcontainer base-container w-container">

          {/* Outcomes */}
          <div className="outcomes-wrapper">
            <div
              data-w-id="c1f707d7-2426-067a-b095-2883473dd1f3"
              style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
              className="outcomes-column-wrapper home"
            >
              <div className="slide-up"><div className="label text-white">How we can help you</div></div>
              <div className="slide-up">
                <h2 className="outcomes-title">Modern businesses face predictable patterns of growth and slowdown</h2>
              </div>
            </div>

            <div className="outcomes-column-wrapper home-bottom-column">
              <div
                data-w-id="11f3250d-7572-dc51-0f57-49cfcd7a8a28"
                style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                className="outcomes-image-wrapper slide-up"
              ></div>
              <div>
                <div className="outcomes-card-grid">

                  <div
                    data-w-id="fec6a6e2-7073-f6d5-dd49-4069c37726b9"
                    style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                    className="outcomes-card-wrapper"
                  >
                    <div className="slide-up"><div className="label text-white">Challange</div></div>
                    <div className="outcomes-card-content-wrap">
                      <div className="slide-up"><div className="large-card-number outcomes-number-white">$</div></div>
                      <div className="outcomes-description-wrapper slide-up">
                        <p className="outcomes-card-description">Productivity suffers due to costly inefficiencies and delayed decisions.</p>
                      </div>
                    </div>
                  </div>

                  <div
                    data-w-id="c6e963d4-1977-0fe8-ca45-eec8e545e5fa"
                    style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                    className="outcomes-card-wrapper"
                  >
                    <div className="slide-up"><div className="label text-white">Opportunity</div></div>
                    <div className="outcomes-card-content-wrap">
                      <div className="slide-up"><div className="large-card-number outcomes-number-white">2×</div></div>
                      <div className="outcomes-description-wrapper slide-up">
                        <p className="outcomes-card-description">Boost performance by synchronizing strategy, execution, and insights.</p>
                      </div>
                    </div>
                  </div>

                  <div
                    data-w-id="54a8efc5-fb35-d53a-5f46-daa0b3686df3"
                    style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                    className="outcomes-card-wrapper"
                  >
                    <div className="slide-up"><div className="label text-white">Impact</div></div>
                    <div className="outcomes-card-content-wrap">
                      <div className="slide-up"><div className="large-card-number outcomes-number-white">100%</div></div>
                      <div className="outcomes-description-wrapper slide-up">
                        <p className="outcomes-card-description">Transparency and control enable informed decisions and growth.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div
              className="line-grey primary-bg"
              style={{ opacity: 1, translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, 0px, 0px)' } as React.CSSProperties}
            ></div>
          </div>

          {/* Resources / Blog */}
          <div className="resources-wrapper">
            <div className="horizontal-title-wrap">
              <div className="slide-up">
                <h2
                  data-w-id="9095d635-28fd-7811-adcf-99788e28e1fc"
                  style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                  className="resourses-title"
                >Practical guides to help your business grow</h2>
              </div>
              <div className="hidden-mobile">
                <div
                  data-w-id="1458710e-e394-5e87-cfe4-d10fa1984cf2"
                  style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                  className="slide-up"
                >
                  <a href="/blog" className="primary-button button-white w-inline-block">
                    <div className="link-content-wrapper">
                      <div className="arrow-wrapper before" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                        <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69724dc1a5a8992137ccd9e5_Arrow%20Icon%20White.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                      </div>
                      <div className="button-text" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>All resources</div>
                      <div className="arrow-wrapper" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                        <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6972420529c59e77c2bf4fa4_Arrow%20Icon.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="blog-collection-list-wrap slide-up w-dyn-list">
              <div role="list" className="resources-column-grid-list w-dyn-items">

                <div
                  data-w-id="c29dece4-9586-b7df-5fee-275a0d508fe2"
                  style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                  role="listitem"
                  className="blog-collection-item w-dyn-item"
                >
                  <a href="/blog-posts/strategic-planning" className="blog-card-wrapper w-inline-block">
                    <div className="blog-card-title">Strategic Planning</div>
                    <div><p className="blog-card-description">How to build a clear business strategy that actually drives results.</p></div>
                    <div className="background-image-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/69773b74ec1dd5a8a9291e52_Strategic%20Planning.png"
                        loading="lazy"
                        alt=""
                        sizes="100vw"
                        srcSet="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/69773b74ec1dd5a8a9291e52_Strategic%20Planning-p-500.png 500w, https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/69773b74ec1dd5a8a9291e52_Strategic%20Planning.png 800w"
                        className="full-image"
                      />
                      <div className="overlay _40"></div>
                      <div className="overlay _60 w-condition-invisible"></div>
                    </div>
                  </a>
                </div>

                <div
                  data-w-id="c29dece4-9586-b7df-5fee-275a0d508fe2"
                  style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                  role="listitem"
                  className="blog-collection-item w-dyn-item"
                >
                  <a href="/blog-posts/operations-efficiency" className="blog-card-wrapper w-inline-block">
                    <div className="blog-card-title">Operations &amp; Efficiency</div>
                    <div><p className="blog-card-description">Simple ways to reduce complexity and improve day-to-day performance.</p></div>
                    <div className="background-image-wrapper">
                      <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/69773b8da84f6e373d883305_Operations%20%26%20Efficiency.png" loading="lazy" alt="" className="full-image" />
                      <div className="overlay _40 w-condition-invisible"></div>
                      <div className="overlay _60"></div>
                    </div>
                  </a>
                </div>

                <div
                  data-w-id="c29dece4-9586-b7df-5fee-275a0d508fe2"
                  style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                  role="listitem"
                  className="blog-collection-item w-dyn-item"
                >
                  <a href="/blog-posts/growth-scaling" className="blog-card-wrapper w-inline-block">
                    <div className="blog-card-title">Growth &amp; Scaling</div>
                    <div><p className="blog-card-description">What growing businesses must fix before scaling further.</p></div>
                    <div className="background-image-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/69773ba1503964b53d523eb4_Growth%20%26%20Scaling.png"
                        loading="lazy"
                        alt=""
                        sizes="100vw"
                        srcSet="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/69773ba1503964b53d523eb4_Growth%20%26%20Scaling-p-500.png 500w, https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/69773ba1503964b53d523eb4_Growth%20%26%20Scaling.png 800w"
                        className="full-image"
                      />
                      <div className="overlay _40 w-condition-invisible"></div>
                      <div className="overlay _60"></div>
                    </div>
                  </a>
                </div>

              </div>
            </div>

            <div
              data-w-id="62906bc3-0287-5e2d-897a-3ea7daba2774"
              style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
              className="hidden-desktop"
            >
              <div className="slide-up">
                <a href="/blog" className="primary-button button-white w-inline-block">
                  <div className="link-content-wrapper">
                    <div className="arrow-wrapper before" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                      <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69724dc1a5a8992137ccd9e5_Arrow%20Icon%20White.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                    </div>
                    <div className="button-text" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>All resources</div>
                    <div className="arrow-wrapper" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                      <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6972420529c59e77c2bf4fa4_Arrow%20Icon.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────────── */}
      <section className="section">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="background-image-wrapper">
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6985b0088e58aba251f0b060_12847.jpg"
              alt=""
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
              srcSet="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6985b0088e58aba251f0b060_12847-p-500.jpg 500w, https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6985b0088e58aba251f0b060_12847-p-800.jpg 800w, https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6985b0088e58aba251f0b060_12847-p-1080.jpg 1080w, https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6985b0088e58aba251f0b060_12847-p-1600.jpg 1600w, https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6985b0088e58aba251f0b060_12847.jpg 2000w"
              className="about-image"
            />
            <div className="overlay _40"></div>
          </div>
          <div className="two-columns-wrapper">
            <div className="slide-up">
              <div
                data-w-id="5e52ad0c-430e-b6c1-0874-1295585e8526"
                className="label text-white"
                style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
              >About [Company]</div>
            </div>
            <div className="about-content-wrapper">
              <div className="slide-up">
                <h2
                  data-w-id="5e52ad0c-430e-b6c1-0874-1295585e852a"
                  className="about-title"
                  style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                >[Company] is a business-focused team dedicated to helping companies grow with clarity, confidence, and purpose</h2>
              </div>
              <div className="about-bottom-wrapper">
                <div className="about-descriptions-wrapper">
                  <div className="slide-up">
                    <p
                      data-w-id="5e52ad0c-430e-b6c1-0874-1295585e852f"
                      className="about-description"
                      style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                    >We work at the intersection of strategy, execution, and insight—supporting organizations as they navigate complexity and turn ideas into measurable results.</p>
                  </div>
                  <div className="slide-up">
                    <p
                      data-w-id="5e52ad0c-430e-b6c1-0874-1295585e8532"
                      className="about-description"
                      style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                    >Our approach is simple: understand the challenge, define what truly matters, and build solutions that are practical, scalable, and aligned with long-term goals.</p>
                  </div>
                </div>
                <div
                  data-w-id="5e52ad0c-430e-b6c1-0874-1295585e8534"
                  className="button-wrapper slide-up"
                  style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                >
                  <a href="/about-us" className="primary-button button-white w-inline-block">
                    <div className="link-content-wrapper">
                      <div className="arrow-wrapper before" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                        <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69724dc1a5a8992137ccd9e5_Arrow%20Icon%20White.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                      </div>
                      <div className="button-text" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>Discover more about [Company]</div>
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

      {/* ── Services ────────────────────────────────────────────── */}
      <section className="section">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="two-columns-wrapper">
            <div className="slide-up">
              <div
                data-w-id="376d8e7d-e6f6-4a9d-42c5-38b5fd1ee1d4"
                style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                className="label"
              >Our solutions</div>
            </div>
            <div className="about-content-wrapper">
              <div className="slide-up">
                <h2
                  data-w-id="98c29cfd-4009-d673-2531-4a8500075ca7"
                  style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                  className="services-title"
                >Our services are built around clarity, execution, and measurable impact</h2>
              </div>
            </div>
          </div>

          <div className="services-list-wrapper w-dyn-list">
            <div role="list" className="services-grid-list w-dyn-items">

              <div
                data-w-id="330b50f1-9d07-aa84-187c-1dabbadca2ce"
                style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                role="listitem"
                className="services-list-item slide-up w-dyn-item"
              >
                <div className="services-card-wrapper">
                  <div className="icon-wrapper">
                    <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/6977741ad97f45c14e56d6da_Strategic%20Direction%20Icon.svg" loading="lazy" alt="Icon" className="icon-image" />
                  </div>
                  <div className="services-card-bottom-wrapper">
                    <div className="services-card-title-wrapper">
                      <a href="/solutions/strategic-direction" className="services-card-title">Strategic Direction</a>
                      <p className="services-csrd-description">We guide businesses in setting priorities and establishing a long-term vision.</p>
                    </div>
                    <div className="fix-button-wrapper">
                      <a href="/solutions/strategic-direction" className="primary-button w-inline-block">
                        <div className="link-content-wrapper">
                          <div className="arrow-wrapper before" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                            <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69724dc1a5a8992137ccd9e5_Arrow%20Icon%20White.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                          </div>
                          <div className="button-text" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>Learn more</div>
                          <div className="arrow-wrapper" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                            <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6972420529c59e77c2bf4fa4_Arrow%20Icon.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-w-id="330b50f1-9d07-aa84-187c-1dabbadca2ce"
                style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                role="listitem"
                className="services-list-item slide-up w-dyn-item"
              >
                <div className="services-card-wrapper">
                  <div className="icon-wrapper">
                    <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/697773fe346038aa58945cc1_Operational%20Execution%20Icon.svg" loading="lazy" alt="Icon" className="icon-image" />
                  </div>
                  <div className="services-card-bottom-wrapper">
                    <div className="services-card-title-wrapper">
                      <a href="/solutions/operational-execution" className="services-card-title">Operational Execution</a>
                      <p className="services-csrd-description">Our team actively transforms strategic plans into tangible results.</p>
                    </div>
                    <div className="fix-button-wrapper">
                      <a href="/solutions/operational-execution" className="primary-button w-inline-block">
                        <div className="link-content-wrapper">
                          <div className="arrow-wrapper before" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                            <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69724dc1a5a8992137ccd9e5_Arrow%20Icon%20White.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                          </div>
                          <div className="button-text" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>Learn more</div>
                          <div className="arrow-wrapper" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                            <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6972420529c59e77c2bf4fa4_Arrow%20Icon.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-w-id="330b50f1-9d07-aa84-187c-1dabbadca2ce"
                style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                role="listitem"
                className="services-list-item slide-up w-dyn-item"
              >
                <div className="services-card-wrapper">
                  <div className="icon-wrapper">
                    <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/697773d1c9029e5988e442c1_Performance%20Optimization%20Icon.svg" loading="lazy" alt="Icon" className="icon-image" />
                  </div>
                  <div className="services-card-bottom-wrapper">
                    <div className="services-card-title-wrapper">
                      <a href="/solutions/growth-optimization" className="services-card-title">Growth Optimization</a>
                      <p className="services-csrd-description">We continuously analyze performance to identify opportunities for improvement.</p>
                    </div>
                    <div className="fix-button-wrapper">
                      <a href="/solutions/growth-optimization" className="primary-button w-inline-block">
                        <div className="link-content-wrapper">
                          <div className="arrow-wrapper before" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                            <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69724dc1a5a8992137ccd9e5_Arrow%20Icon%20White.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                          </div>
                          <div className="button-text" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>Learn more</div>
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
            <div role="navigation" aria-label="List" className="w-pagination-wrapper"></div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────── */}
      <section className="section without-top-space">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="testimonials-top-column-wrap">
            <div
              data-w-id="d16d1d3c-7924-a9f1-462d-aa594956afee"
              style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
              className="testimonials-title-wrap"
            >
              <div className="slide-up"><div className="label">Testimonials</div></div>
              <div className="slide-up"><h2>What our clients say about working with us</h2></div>
            </div>
            <div className="hidden-mobile">
              <div
                data-w-id="354a6ddd-cb41-d27f-732a-346300f7550d"
                style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                className="slide-up"
              >
                <a href="/contact-us" className="primary-button button-dark w-inline-block">
                  <div className="link-content-wrapper">
                    <div className="arrow-wrapper-before" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                      <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69724dc1a5a8992137ccd9e5_Arrow%20Icon%20White.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                    </div>
                    <div className="button-text" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>Ready to get started? Contact us</div>
                    <div className="arrow-wrapper" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                      <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69724dc1a5a8992137ccd9e5_Arrow%20Icon%20White.svg" loading="lazy" width={20} height={20} alt="SVG" className="arrow-icon" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="testimonials-list-wrapper w-dyn-list">
            <div
              data-w-id="d895bb3d-974e-1e6e-6026-f89fa79b8bb6"
              style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
              role="list"
              className="testimonials-list w-dyn-items"
            >

              <div
                data-w-id="d895bb3d-974e-1e6e-6026-f89fa79b8bb7"
                style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                role="listitem"
                className="testimonials-list-item slide-up w-dyn-item"
              >
                <div className="testimonials-card-item">
                  <div className="testimonials-image">
                    <img
                      src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/69778871110ad658770f16af_Daniel%2C%20Head%20of%20Operations%2C.png"
                      loading="lazy"
                      width={800}
                      height={800}
                      alt=""
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 800px"
                      srcSet="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/69778871110ad658770f16af_Daniel%2C%20Head%20of%20Operations%2C-p-500.png 500w, https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/69778871110ad658770f16af_Daniel%2C%20Head%20of%20Operations%2C-p-800.png 800w, https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/69778871110ad658770f16af_Daniel%2C%20Head%20of%20Operations%2C.png 885w"
                      className="full-image"
                    />
                  </div>
                  <div className="testimonials-number">01</div>
                  <div className="testimonials-right-column-wrapper">
                    <div className="testimonials-card-title">&quot;Clear strategy from day one&quot;</div>
                    <div><p className="testimonials-card-description">Partnering with [Company] illuminated the path we needed. Their organized approach allowed us to set priorities, make rapid decisions, and proceed with certainty.</p></div>
                    <div>Daniel, Head of Operations, Growth Company</div>
                  </div>
                </div>
              </div>

              <div
                data-w-id="d895bb3d-974e-1e6e-6026-f89fa79b8bb7"
                style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                role="listitem"
                className="testimonials-list-item slide-up w-dyn-item"
              >
                <div className="testimonials-card-item">
                  <div className="testimonials-image">
                    <img
                      src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/69778866b0cdccc4588fce87_Mark%2C%20Managing%20Director%2C.png"
                      loading="lazy"
                      width={800}
                      height={800}
                      alt=""
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 800px"
                      srcSet="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/69778866b0cdccc4588fce87_Mark%2C%20Managing%20Director%2C-p-500.png 500w, https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/69778866b0cdccc4588fce87_Mark%2C%20Managing%20Director%2C-p-800.png 800w, https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/69778866b0cdccc4588fce87_Mark%2C%20Managing%20Director%2C.png 885w"
                      className="full-image"
                    />
                  </div>
                  <div className="testimonials-number">02</div>
                  <div className="testimonials-right-column-wrapper">
                    <div className="testimonials-card-title">&quot;More than just a service provider&quot;</div>
                    <div><p className="testimonials-card-description">[Company] worked closely with our team at every stage. Their hands-on support and practical thinking made a real difference in how we execute and measure results.</p></div>
                    <div>Mark, Managing Director, Mid-Market Business</div>
                  </div>
                </div>
              </div>

              <div
                data-w-id="d895bb3d-974e-1e6e-6026-f89fa79b8bb7"
                style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                role="listitem"
                className="testimonials-list-item slide-up w-dyn-item"
              >
                <div className="testimonials-card-item">
                  <div className="testimonials-image">
                    <img
                      src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/6977883e31a67334b12b8a58_Sofia%2C%20CEO%2C.png"
                      loading="lazy"
                      width={800}
                      height={800}
                      alt=""
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 800px"
                      srcSet="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/6977883e31a67334b12b8a58_Sofia%2C%20CEO%2C-p-500.png 500w, https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/6977883e31a67334b12b8a58_Sofia%2C%20CEO%2C-p-800.png 800w, https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/6977883e31a67334b12b8a58_Sofia%2C%20CEO%2C.png 885w"
                      className="full-image"
                    />
                  </div>
                  <div className="testimonials-number">03</div>
                  <div className="testimonials-right-column-wrapper">
                    <div className="testimonials-card-title">&quot;Significant boost in performance&quot;</div>
                    <div><p className="testimonials-card-description">The improvements we saw were tangible. From streamlined processes to clearer reporting, [Company] helped us build a stronger, more scalable foundation.</p></div>
                    <div>Sofia, CEO, Technology Company</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div
            data-w-id="4abc95f2-5e29-96fb-7fae-ecd3f5b7513e"
            style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
            className="hidden-desktop with-top-space"
          >
            <div className="slide-up">
              <a href="/contact-us" className="primary-button button-dark w-inline-block">
                <div className="link-content-wrapper">
                  <div className="arrow-wrapper-before" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                    <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69724dc1a5a8992137ccd9e5_Arrow%20Icon%20White.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                  </div>
                  <div className="button-text" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>Ready to get started? Contact us</div>
                  <div className="arrow-wrapper" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                    <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69724dc1a5a8992137ccd9e5_Arrow%20Icon%20White.svg" loading="lazy" width={20} height={20} alt="SVG" className="arrow-icon" />
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="section cta-section">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="overlay _40-mobile"></div>
          <div className="cta-wrapper">
            <div className="slide-up">
              <div
                data-w-id="14af5a4b-4cf5-437e-ab59-56a303a62f54"
                className="label text-white"
                style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
              >Contact us</div>
            </div>
            <div className="cta-title-spacing slide-up">
              <h1
                data-w-id="14af5a4b-4cf5-437e-ab59-56a303a62f56"
                className="cta-title"
                style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
              >Discuss your business and aspirations with us.</h1>
            </div>
            <div
              data-w-id="14af5a4b-4cf5-437e-ab59-56a303a62f58"
              className="button-wrapper slide-up"
              style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
            >
              <a href="/contact-us" className="primary-button button-white w-inline-block">
                <div className="link-content-wrapper">
                  <div className="arrow-wrapper before" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                    <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69724dc1a5a8992137ccd9e5_Arrow%20Icon%20White.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                  </div>
                  <div className="button-text" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>Let's grow up your business</div>
                  <div className="arrow-wrapper" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                    <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6972420529c59e77c2bf4fa4_Arrow%20Icon.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="background-image-wrapper">
            <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/6977938313beb4127c2e40c2_6247e7d907ceb1a76c9ca032c81508bb_CTA%20Image.webp" loading="lazy" alt="Image" className="full-image" />
            <div className="overlay"></div>
          </div>
        </div>
      </section>

    </>
  )
}
