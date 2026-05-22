import Link from 'next/link'

const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'Home',                  href: '/' },
      { label: 'About Us',              href: '/about' },
      { label: 'Solutions',             href: '/solutions' },
      { label: 'Strategic Direction',   href: '/solutions' },
      { label: 'Operational Execution', href: '/solutions' },
      { label: 'Growth Optimization',   href: '/solutions' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'FAQ',          href: '/faq' },
      { label: 'Blog',         href: '/blog' },
    ],
  },
]

const socialLinks = [
  { label: 'YouTube',           href: '#' },
  { label: 'Instagram',         href: '#' },
  { label: 'Webflow Templates', href: '#' },
]

const legalLinks = [
  { label: 'Licensing', href: '/licensing' },
]

export function Footer() {
  return (
    <footer className="pt-[7xl] pb-[3xl] bg-white border-t border-bestra-gray">
      <div className="base-container">

        {/* Main grid */}
        <div className="flex flex-col md:flex-row justify-between gap-[5xl] mb-[5xl]">

          {/* Brand col */}
          <div className="flex flex-col gap-[3xl] max-w-[280px]">
            <Link href="/" className="text-h3 font-medium tracking-tightest text-black leading-[1.1em]">
              Bestra
            </Link>
            <p className="text-primary text-text-body leading-[1.2em] font-medium">
              Business, the bestra way.
            </p>
            <div className="flex gap-l">
              {socialLinks.map((s) => (
                <Link key={s.label} href={s.href} className="text-primary text-text-body hover:text-near-black transition-colors duration-350">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-[5xl]">
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-l min-w-[140px]">
                <span className="text-text-body font-medium text-primary leading-[1.2em]">{col.title}</span>
                <div className="flex flex-col gap-l">
                  {col.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-text-body text-primary font-normal hover:text-near-black transition-colors duration-350"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div className="border border-bestra-gray rounded-m p-[3xl] flex flex-col gap-[2xl] max-w-[230px] self-start">
            <p className="text-h5 font-medium tracking-tightest leading-[1.2em] text-black">
              Let's grow up your business
            </p>
            <Link href="/contact" className="text-primary text-text-body font-medium hover:text-near-black transition-colors duration-350">
              Contact us →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="line-grey mb-[3xl]" />
        <div className="flex flex-wrap items-center justify-between gap-l">
          <div className="flex items-center gap-xs text-primary text-text-body">
            <span>© {new Date().getFullYear()} Bestra.</span>
            <span>All rights reserved.</span>
          </div>
          <div className="flex items-center gap-l">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary text-text-body font-normal hover:text-near-black transition-colors duration-350"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
