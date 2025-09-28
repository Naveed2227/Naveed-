import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const v0FontGeist = V0_Font_Geist({ weight: ["100","200","300","400","500","600","700","800","900"] })
const v0FontGeistMono = V0_Font_Geist_Mono({ weight: ["100","200","300","400","500","600","700","800","900"] })
const v0FontSourceSerif4 = V0_Font_Source_Serif_4({ weight: ["200","300","400","500","600","700","800","900"] })

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
