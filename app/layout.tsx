import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

// This is a Server Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script - Only load once */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR-PUBLISHER-ID" 
          crossOrigin="anonymous"
          data-ad-client="ca-pub-YOUR-PUBLISHER-ID"
          data-check-loaded="true"
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}

// Client-side components
'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'

const CookieBanner = dynamic(() => import('../components/CookieBanner'), {
  ssr: false,
})

function ClientLayout({ children }: { children: React.ReactNode }) {
  // Initialize ads safely
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('Failed to initialize ads:', err);
      }
    }
  }, [])

  return (
    <>
      <main className="flex-1">
        {children}
      </main>
      <CookieBanner />
    </>
  )
}
