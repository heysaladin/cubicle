import type { Metadata } from 'next'
import { InnerBanner } from '@/components/sections/InnerBanner'

export const metadata: Metadata = {
  title: 'Licensing',
  description: 'Licensing terms for [Company] frameworks, tools, and intellectual property.',
}

export default function LicensingPage() {
  return (
    <>
      <InnerBanner
        label="Licensing"
        title="Licensing"
        description="All graphical assets, fonts, and icons used in this template are licensed for personal and commercial use."
      />
      <section className="section">
        <div className="base-container">
          <div className="max-w-[720px] flex flex-col gap-[3xl]">
            <h2 className="text-h3 font-medium tracking-tightest">Images</h2>
            <p className="text-text-body text-primary">
              All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below.
            </p>
            <ul className="flex flex-col gap-s text-text-body text-primary">
              <li>UNSPLASH — Source, License</li>
              <li>Lummi — Source, License</li>
              <li>PEXELS — Source, License</li>
              <li>FREEPICK — Source, License, Video</li>
            </ul>
            <h2 className="text-h3 font-medium tracking-tightest">Fonts</h2>
            <p className="text-text-body text-primary">
              <strong>Interdisplay</strong> — You can use these fonts freely in your products &amp; projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details. (from Google Fonts website)
            </p>
            <h2 className="text-h3 font-medium tracking-tightest">Icons</h2>
            <p className="text-text-body text-primary">
              <strong>Social Icons</strong> — Font Awesome Free is free and open source font. You can use these font icons freely in your products &amp; commercial projects.{' '}
              <a href="#" className="text-near-black underline">License.</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
