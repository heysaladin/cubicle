import { HellohelloSvg } from "@/components/svg/HellohelloSvg";

export function Footer() {
  return (
    <footer className="mx-auto mb-10 px-4 text-sm lg:px-6">
      {/* Top rule */}
      <div className="mb-6 h-[5px] w-full bg-current" />

      {/* Tagline + ©26 */}
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:gap-8">
        <div className="flex-1 text-[2.75rem] leading-[1] font-[900] tracking-tighter text-balance md:text-[6vw]">
          <p>Made to be worn.</p>
          <p className="red:text-red text-[#5A5A5A]">Or judged. Or both.</p>
        </div>
        <div>
          <p className="text-[45vw] leading-[1] font-[900] tracking-tighter md:text-[12.75vw]">
            ©26
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-[8rem] mb-4 md:mt-[16rem]">
        <p className="max-w-[52ch] tracking-tight text-balance md:text-2xl">
          Created by the ++hellohello team, this store and signature collection celebrates our
          collective creativity and passion for apparel. Carefully designed.
        </p>
      </div>

      {/* Divider */}
      <hr className="mb-6 h-[2px] w-full bg-current border-0" />

      {/* Bottom grid */}
      <div className="grid grid-cols-16 gap-x-6 gap-y-20 font-bold md:gap-6">
        {/* Brand + copyright */}
        <div className="order-last col-span-16 md:order-first md:col-span-4">
          <div className="flex flex-col">
            <a
              href="https://www.hellohello.is"
              target="_blank"
              rel="noreferrer noopener"
            >
              <HellohelloSvg className="mb-2" />
              <span className="sr-only">++hellohello</span>
            </a>
            <span>All rights reserved ©&nbsp;2026</span>
          </div>
        </div>

        {/* Address */}
        <div className="col-span-8 md:col-span-3">
          Libertad 2529
          <br />
          Office 102
          <br />
          Montevideo, Uruguay
        </div>

        {/* Privacy */}
        <div className="col-span-8 md:col-span-4">
          <a
            href="https://www.hellohello.is/privacy-policy"
            target="_blank"
            rel="noreferrer noopener"
            className="link-hover max-w-fit"
          >
            Privacy Policy
          </a>
        </div>

        {/* Links */}
        <div className="order-first col-span-16 flex justify-evenly md:order-last md:col-span-5">
          <div className="flex flex-1 flex-col gap-3">
            {[
              { label: "Dribbble", href: "https://dribbble.com/hellohelloteam" },
              { label: "Instagram", href: "https://www.instagram.com/hellohelloteam" },
              { label: "LinkedIn", href: "https://www.linkedin.com/company/hellohello" },
              { label: "Twitter (X)", href: "https://twitter.com/hellohelloteam" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="link-hover max-w-fit"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-3">
            {[
              { label: "Work", href: "https://www.hellohello.is/work" },
              { label: "Services", href: "https://www.hellohello.is/services" },
              { label: "About", href: "https://www.hellohello.is/about" },
              { label: "Careers", href: "https://www.hellohello.is/careers" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="link-hover max-w-fit"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex-1">
            <a
              href="https://www.hellohello.is/contact"
              target="_blank"
              rel="noreferrer noopener"
              className="link-hover max-w-fit"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
