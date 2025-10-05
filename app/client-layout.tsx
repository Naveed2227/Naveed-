'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'

const CookieBanner = dynamic(() => import('../components/CookieBanner'), {
  ssr: false,
})

export function ClientLayout({ children }: { children: React.ReactNode }) {
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
