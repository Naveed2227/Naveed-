import type React from "react"
import type { Metadata } from "next"
import {
  Inter,
  Geist as V0_Font_Geist,
  Geist_Mono as V0_Font_Geist_Mono,
  Source_Serif_4 as V0_Font_Source_Serif_4
} from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const v0FontGeist = V0_Font_Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: false
})
const v0FontGeistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: false
})
const v0FontSourceSerif4 = V0_Font_Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  preload: false
})

export const metadata: Metadata = {
  title: "MWT Assistant: Vehicle Stats, Battle Pass and Events",
  description:
    "View and compare all vehicles in MWT, including Su-57M, Abram X, Mi-35, F-22 Raptor — only on MWT Assistant.",
  keywords: [
    "vehicles",
    "stats",
    "MWT Assistant"
  ],
  openGraph: {
     title: "Su-57M Stats & Info",
  description:
    "Explore detailed stats for the Su-57M in MWT: health 24,500, cruise speed 762 km/h, afterburner speed 1,200 km/h, and advanced stealth capabilities.",

    url: "https://www.mwtassistant.com",
    siteName: "MWT Assistant",
    images: [
      {
        url: "https://www.mwtassistant.com/icon-512.png",
        width: 512,
        height: 512,
        alt: "MWT Assistant Logo"
      }
    ],
    type: "website"
  },
  icons: {
    icon: "/icon-512.png",
    apple: "/icon-512.png",
    shortcut: "/icon-512.png"
  },
  metadataBase: new URL("https://www.mwtassistant.com"),
    generator: 'v0.app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Basic Meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Open Graph / Twitter */}
        <meta property="og:image" content="https://www.mwtassistant.com/icon-512.png" />
        <meta property="twitter:image" content="https://www.mwtassistant.com/icon-512.png" />

        {/* Favicon / Logo */}
        <link rel="icon" href="/icon-512.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon-512.png" />
        <link rel="shortcut icon" href="/icon-512.png" type="image/png" />

        {/* Schema.org for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MWT Assistant",
              url: "https://www.mwtassistant.com",
              logo: "https://www.mwtassistant.com/icon-512.png",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61581489612967",
                "https://www.instagram.com/mwt_assistant/"
              ]
            })
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
                target:
                  "https://www.mwtassistant.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
