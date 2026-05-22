"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PlusPlusLogo } from "@/components/svg/PlusPlusLogo";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { MobileMenu } from "./MobileMenu";

export function Nav({ bagCount = 0 }: { bagCount?: number }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Theme switcher — desktop only, separate fixed element */}
      <div className="fixed top-[2.56rem] right-6 z-[3] hidden md:block" id="theme-switcher">
        <ThemeSwitcher size="sm" />
      </div>

      {/* Mobile menu overlay */}
      <MobileMenu open={menuOpen} bagCount={bagCount} currentPath={pathname} />

      {/* Nav bar */}
      <nav
        id="header"
        className="red:text-[oklab(0.73_-0.14_-0.1)] fixed top-0 left-0 z-[3] flex w-full items-center justify-between text-white mix-blend-difference"
      >
        <div className="mx-auto flex w-full items-center justify-between px-4 py-8 lg:px-6">
          <Link className="mr-2 lg:mr-6" href="/" aria-label="OUTFIT®">
            <PlusPlusLogo />
            <span className="sr-only">OUTFIT®</span>
          </Link>

          <div className="flex items-center gap-3 md:gap-16">
            <ul className="text-md flex gap-8 tracking-tight md:items-center md:gap-16 md:text-2xl">
              <li className="hidden md:block">
                <Link
                  className="link-hover"
                  href="/"
                  data-selected={pathname === "/" ? "true" : undefined}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className="link-hover"
                  href="/bag"
                  data-selected={pathname === "/bag" ? "true" : undefined}
                >
                  Bag <span>({bagCount})</span>
                </Link>
              </li>
              <li className="md:hidden">
                <button
                  className="min-w-[2.625rem]"
                  onClick={() => setMenuOpen((v) => !v)}
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                  {menuOpen ? "Close" : "Menu"}
                </button>
              </li>
            </ul>
            {/* Spacer matching theme switcher width on desktop */}
            <div className="hidden h-[1.265625rem] w-[3.875rem] md:block" />
          </div>
        </div>
      </nav>
    </>
  );
}
