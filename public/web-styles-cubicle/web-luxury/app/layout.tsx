import type { Metadata } from 'next'
import '@/styles/globals.css'
import '@/styles/components.css'
import '@/styles/layout.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LoadingScreen from '@/components/layout/LoadingScreen'
import CustomCursor from '@/components/layout/CustomCursor'
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
        data-theme-nav="light"
        data-bg-nav="light"
      >
        <LenisProvider>
          <BodyManager />
          <div className="loading-container">
            <LoadingScreen />
          </div>
          <header>
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
          </div>
        </LenisProvider>
      </body>
    </html>
  )
}
