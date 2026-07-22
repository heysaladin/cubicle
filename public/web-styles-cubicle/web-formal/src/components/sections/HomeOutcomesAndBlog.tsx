interface BlogCard {
  title: string
  description: string
  href: string
  imageSrc: string
  overlay?: '_40' | '_60'
}

interface HomeOutcomesAndBlogProps {
  outcomesTitle?: string
  blogTitle?: string
  blogCta?: { label: string; href: string }
  posts?: BlogCard[]
}

const defaultPosts: BlogCard[] = [
  {
    title: 'Strategic Planning',
    description: 'How to build a clear business strategy that actually drives results.',
    href: '/blog-posts/strategic-planning',
    imageSrc: 'https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/69773b74ec1dd5a8a9291e52_Strategic%20Planning.png',
    overlay: '_40',
  },
  {
    title: 'Operations & Efficiency',
    description: 'Simple ways to reduce complexity and improve day-to-day performance.',
    href: '/blog-posts/operations-efficiency',
    imageSrc: 'https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/69773b8da84f6e373d883305_Operations%20%26%20Efficiency.png',
    overlay: '_60',
  },
  {
    title: 'Growth & Scaling',
    description: 'What growing businesses must fix before scaling further.',
    href: '/blog-posts/growth-scaling',
    imageSrc: 'https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb2a/69773ba1503964b53d523eb4_Growth%20%26%20Scaling.png',
    overlay: '_60',
  },
]

export function HomeOutcomesAndBlog({
  outcomesTitle = 'Modern businesses face predictable patterns of growth and slowdown',
  blogTitle = 'Practical guides to help your business grow',
  blogCta = { label: 'All resources', href: '/blog' },
  posts = defaultPosts,
}: HomeOutcomesAndBlogProps) {
  return (
    <section className="section primary-background">
      <div className="w-layout-blockcontainer base-container w-container">

        {/* Outcomes */}
        <div className="outcomes-wrapper">
          <div
            data-w-id="c1f707d7-2426-067a-b095-2883473dd1f3"
            style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' } as React.CSSProperties}
            className="outcomes-column-wrapper home"
          >
            <div className="slide-up"><div className="label text-white">How we can help you</div></div>
            <div className="slide-up">
              <h2 className="outcomes-title">{outcomesTitle}</h2>
            </div>
          </div>

          <div className="outcomes-column-wrapper home-bottom-column">
            <div
              data-w-id="11f3250d-7572-dc51-0f57-49cfcd7a8a28"
              style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' } as React.CSSProperties}
              className="outcomes-image-wrapper slide-up"
            ></div>
            <div>
              <div className="outcomes-card-grid">
                {[
                  { label: 'Challange', number: '$', description: 'Productivity suffers due to costly inefficiencies and delayed decisions.' },
                  { label: 'Opportunity', number: '2×', description: 'Boost performance by synchronizing strategy, execution, and insights.' },
                  { label: 'Impact', number: '100%', description: 'Transparency and control enable informed decisions and growth.' },
                ].map((item, i) => (
                  <div
                    key={i}
                    data-w-id={`outcome-card-${i}`}
                    style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' } as React.CSSProperties}
                    className="outcomes-card-wrapper"
                  >
                    <div className="slide-up"><div className="label text-white">{item.label}</div></div>
                    <div className="outcomes-card-content-wrap">
                      <div className="slide-up"><div className="large-card-number outcomes-number-white">{item.number}</div></div>
                      <div className="outcomes-description-wrapper slide-up">
                        <p className="outcomes-card-description">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="line-grey primary-bg"
            style={{ opacity: 1, translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, 0px, 0px)' } as React.CSSProperties}
          ></div>
        </div>

        {/* Blog resources */}
        <div className="resources-wrapper">
          <div className="horizontal-title-wrap">
            <div className="slide-up">
              <h2
                data-w-id="9095d635-28fd-7811-adcf-99788e28e1fc"
                style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' } as React.CSSProperties}
                className="resourses-title"
              >{blogTitle}</h2>
            </div>
            <div className="hidden-mobile">
              <div
                data-w-id="1458710e-e394-5e87-cfe4-d10fa1984cf2"
                style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' } as React.CSSProperties}
                className="slide-up"
              >
                <a href={blogCta.href} className="primary-button button-white w-inline-block">
                  <div className="link-content-wrapper">
                    <div className="arrow-wrapper before" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                      <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69724dc1a5a8992137ccd9e5_Arrow%20Icon%20White.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                    </div>
                    <div className="button-text" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>{blogCta.label}</div>
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
              {posts.map((post, i) => (
                <div
                  key={i}
                  data-w-id={`blog-card-${i}`}
                  style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' } as React.CSSProperties}
                  role="listitem"
                  className="blog-collection-item w-dyn-item"
                >
                  <a href={post.href} className="blog-card-wrapper w-inline-block">
                    <div className="blog-card-title">{post.title}</div>
                    <div><p className="blog-card-description">{post.description}</p></div>
                    <div className="background-image-wrapper">
                      <img src={post.imageSrc} loading="lazy" alt="" className="full-image" />
                      <div className={`overlay ${post.overlay ?? '_40'}`}></div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div
            data-w-id="62906bc3-0287-5e2d-897a-3ea7daba2774"
            style={{ opacity: 0, transform: 'translate3d(0px, 15px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' } as React.CSSProperties}
            className="hidden-desktop"
          >
            <div className="slide-up">
              <a href={blogCta.href} className="primary-button button-white w-inline-block">
                <div className="link-content-wrapper">
                  <div className="arrow-wrapper before" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                    <img src="https://cdn.prod.website-files.com/696cc4e0c2f7faf82e9fbb10/69724dc1a5a8992137ccd9e5_Arrow%20Icon%20White.svg" loading="lazy" alt="SVG" className="arrow-icon" />
                  </div>
                  <div className="button-text" style={{ transform: 'translate3d(0rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>{blogCta.label}</div>
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
  )
}
