import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3724137161724998"
          crossOrigin="anonymous"
        />
        <style>{`
          .banner-ad {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 50px; /* Smaller height */
            background: #fff;
            text-align: center;
            z-index: 9999;
          }
          .banner-ad ins {
            display: block !important;
            height: 50px !important;
          }
        `}</style>
      </head>
      <body className={inter.className}>
        {children}

        {/* Banner Ad fixed at bottom */}
        <div className="banner-ad">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-3724137161724998"
            data-ad-slot="YOUR_AD_SLOT_ID"   // ← replace with your AdSense slot ID
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <Script id="ads-init" strategy="afterInteractive">
            {`(adsbygoogle = window.adsbygoogle || []).push({});`}
          </Script>
        </div>
      </body>
    </html>
  )
}
