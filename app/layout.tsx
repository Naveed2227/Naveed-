import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const v0FontGeist = V0_Font_Geist({ subsets: ["latin"], weight: ["100","200","300","400","500","600","700","800","900"], preload: false })
const v0FontGeistMono = V0_Font_Geist_Mono({ subsets: ["latin"], weight: ["100","200","300","400","500","600","700","800","900"], preload: false })
const v0FontSourceSerif4 = V0_Font_Source_Serif_4({ subsets: ["latin"], weight: ["200","300","400","500","600","700","800","900"], preload: false })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

// This is a Client Component
'use client';

import dynamic from 'next/dynamic';

// Dynamically import CookieBanner with SSR disabled
const CookieBanner = dynamic(() => import('../components/CookieBanner'), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <main className="flex-1">
          {children}
        </main>
        <CookieBanner />
      </body>
    </html>
  )
}
