import type React from "react";
import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'
import BannerAd from "@/components/BannerAd";
import { Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const geist = Geist({ 
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap'
});

const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap'
});

const sourceSerif = Source_Serif_4({ 
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "MWT Assistant: Vehicle Stats, Battle Pass and Events",
  description:
    "View and compare all vehicles in MWT, including Su-57M, Abram X, Mi-35, F-22 Raptor — only on MWT Assistant.",
  keywords: ["MWT", "vehicle stats", "tank comparison", "military vehicles", "battle pass", "game guide", "tank specs", "aircraft stats"],
  metadataBase: new URL('https://www.mwtassistant.com'),
  alternates: { canonical: '/' },
  // SINGLE icons object with all required sizes
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/logo-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/logo-512x512.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "MWT Assistant - Vehicle Stats & Comparison Tool",
    description:
      "Comprehensive stats and comparison tool for all vehicles in MWT. Compare tanks, aircraft, and more with detailed specifications and performance data.",
    url: "https://www.mwtassistant.com",
    siteName: "MWT Assistant",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: "https://www.mwtassistant.com/logo-512x512.png",
        width: 512,
        height: 512,
        alt: "MWT Assistant Logo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MWT Assistant - Vehicle Stats & Comparison Tool',
    description: 'Compare and analyze all vehicles in MWT with detailed stats and specifications.',
    images: ['https://www.mwtassistant.com/logo-512x512.png'],
  },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '' },
  generator: 'v0.app'
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="0E0mlLMmecWQ_VTuwdcySiIQMIOKn6lGFUUQDMA8Fu4" />

        {/* Favicon links are handled by Next.js metadata */}

        {/* Open Graph / Twitter */}
        <meta property="og:title" content={metadata.openGraph?.title} />
        <meta property="og:description" content={metadata.openGraph?.description} />
        <meta property="og:image" content="https://www.mwtassistant.com/logo-512x512.png" />
        <meta property="og:url" content={metadata.openGraph?.url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.openGraph?.title} />
        <meta name="twitter:description" content={metadata.openGraph?.description} />
        <meta name="twitter:image" content="https://www.mwtassistant.com/logo-512x512.png" />

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MWT Assistant",
              url: "https://www.mwtassistant.com",
              logo: "https://www.mwtassistant.com/logo-512x512.png",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61581489612967",
                "https://www.instagram.com/mwt_assistant/",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "MWT Assistant",
              url: "https://www.mwtassistant.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.mwtassistant.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {/* Main Content */}
          <main className="flex-grow">
            {children}
          </main>
          {/* Ad Banner */}
          <BannerAd />
        </div>
      </body>
    </html>
  );
}
