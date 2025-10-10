import type React from "react";
import type { Metadata } from "next";
import { Inter, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const v0FontGeist = V0_Font_Geist({ subsets: ["latin"], weight: ["100","200","300","400","500","600","700","800","900"], preload: false });
const v0FontGeistMono = V0_Font_Geist_Mono({ subsets: ["latin"], weight: ["100","200","300","400","500","600","700","800","900"], preload: false });
const v0FontSourceSerif4 = V0_Font_Source_Serif_4({ subsets: ["latin"], weight: ["200","300","400","500","600","700","800","900"], preload: false });

export const metadata: Metadata = {
  title: "MWT Assistant – Vehicle Stats & Info",
  description: "View and compare all vehicles in Modern War Thunder, including tanks, aircraft, and ships with detailed stats, weapons, and modules.",
  generator: "v0.dev",
  openGraph: {
    title: "MWT Assistant",
    description: "Detailed stats for Modern War Thunder vehicles.",
    url: "https://www.mwtassistant.com",
    siteName: "MWT Assistant",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "MWT Assistant Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MWT Assistant",
    description: "Detailed stats for Modern War Thunder vehicles.",
    images: ["/icon-512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* SEO Meta */}
        <meta name="description" content="MWT Assistant – View and compare all vehicles in Modern War Thunder, including tanks, aircraft, and ships with detailed stats." />

        {/* Open Graph */}
        <meta property="og:title" content="MWT Assistant" />
        <meta property="og:description" content="Detailed stats for Modern War Thunder vehicles." />
        <meta property="og:image" content="/icon-512.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mwtassistant.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MWT Assistant" />
        <meta name="twitter:description" content="Detailed stats for Modern War Thunder vehicles." />
        <meta name="twitter:image" content="/icon-512.png" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "MWT Assistant",
              "url": "https://www.mwtassistant.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.mwtassistant.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
