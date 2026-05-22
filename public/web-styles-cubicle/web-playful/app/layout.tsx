import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageOverlay } from "@/components/layout/PageOverlay";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/layout/Preloader";
import { InViewObserver } from "@/components/layout/InViewObserver";

export const metadata: Metadata = {
  title: "OUTFIT® by ++hellohello",
  description:
    "Created by the ++hellohello team, this store and signature collection celebrates our collective creativity and passion for apparel. Carefully designed.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body className="bg-cream selection:bg-red red:bg-cream red:text-red red:selection:bg-black text-black selection:text-white dark:bg-black dark:text-white">
        <ThemeProvider>
          <CustomCursor />
          <Preloader />
          <PageOverlay />
          <Nav />
          <main id="page">{children}</main>
          <Footer />
          <InViewObserver />
        </ThemeProvider>
      </body>
    </html>
  );
}
