'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'About',        href: '/about' },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Leadership Advisory', href: '/leadership-advisory' },
      { label: 'Decision Clarity',    href: '/decision-clarity' },
    ],
  },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Our Team',     href: '/our-team' },
  { label: 'Blog',         href: '/blog' },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-bestra-gray">
      <nav className="base-container flex items-center justify-between py-[15px]">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <span className="text-h5 font-medium tracking-tightest text-black">Bestra</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center justify-between flex-1 ml-[5xl]">
          <ul className="flex items-center gap-0">
            {navLinks.map((link) => (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={cn(
                    'nav-link px-5 py-5 text-text-body font-normal text-primary leading-[1.2em] capitalize transition-all duration-350',
                    pathname === link.href ? 'text-near-black font-medium' : '',
                  )}
                  onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <span className="flex items-center gap-0">
                    {link.label}
                    {link.children && (
                      <span className="dot-element" />
                    )}
                  </span>
                </Link>

                {link.children && (
                  <div
                    className={cn(
                      'absolute top-full left-0 bg-white border border-bestra-gray rounded-m w-[260px] py-[15px] px-5',
                      'transition-all duration-350 origin-top',
                      openDropdown === link.label ? 'opacity-100 pointer-events-auto scale-y-100' : 'opacity-0 pointer-events-none scale-y-95',
                    )}
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-[10px] text-text-body text-primary hover:text-near-black capitalize transition-colors duration-350"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <Button href="/contact" size="sm" variant="primary">
            Let's talk
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={cn('w-5 h-[2px] bg-black transition-all', mobileOpen && 'rotate-45 translate-y-[7px]')} />
          <span className={cn('w-5 h-[2px] bg-black transition-all', mobileOpen && 'opacity-0')} />
          <span className={cn('w-5 h-[2px] bg-black transition-all', mobileOpen && '-rotate-45 -translate-y-[7px]')} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-bestra-gray px-[15px] pb-5">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="block py-3 text-text-body font-medium text-black capitalize border-b border-bestra-gray"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block py-2 pl-4 text-text-body text-primary capitalize"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="mt-5">
            <Button href="/contact" variant="primary" className="w-full justify-center">
              Let's talk
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
