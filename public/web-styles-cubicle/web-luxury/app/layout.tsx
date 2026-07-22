import type { Metadata } from 'next'
import '@/styles/globals.css'
import '@/styles/components.css'
import '@/styles/layout.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LoadingScreen from '@/components/layout/LoadingScreen'
import CustomCursor from '@/components/layout/CustomCursor'
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp'
import LenisProvider from '@/components/providers/LenisProvider'
import BodyManager from '@/components/providers/BodyManager'

export const metadata: Metadata = {
  title: {
    default: "The Damai Resort | Bali's Secluded Luxury in Lovina",
    template: '%s | The Damai',
  },
  description:
    'Escape to The Damai, a hidden luxury retreat in the hills of North Bali. Four private pool villas, farm-to-table dining, and Balinese spa rituals await.',
  keywords: [
    'luxury resort Bali',
    'North Bali hotel',
    'Lovina luxury',
    'private villa Bali',
    'boutique resort Bali',
  ],
  openGraph: {
    title: "The Damai Resort | Bali's Secluded Luxury",
    description: 'A private luxury retreat in the hills of North Bali.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        data-page-transition="not-active"
        data-navigation-status="not-active"
        data-scrolling-started="false"
        data-scrolling-direction="down"
        data-theme-nav="light"
        data-bg-nav="light"
      >
        <LenisProvider>
          <BodyManager />
          <div className="loading-container">
            <LoadingScreen />
          </div>
          <header>
            <div className="transition-screen" />
            <div className="loading-circle">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="19.5" stroke="black" />
              </svg>
            </div>
            <Navbar />
          </header>
          <main className="main" id="main">
            <div className="main-wrap" id="main-wrap" data-scroll-container>
              {children}
              <Footer />
            </div>
          </main>
          <div className="floating-elements">
            <CustomCursor />
            <FloatingWhatsApp />
          </div>
        </LenisProvider>
      </body>
    </html>
  )
}
