import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: { default: 'Bestra', template: '%s | Bestra' },
  description: 'Strategic consulting for modern businesses. Clarity. Strategy. Growth.',
  openGraph: {
    siteName: 'Bestra',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-[60px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
