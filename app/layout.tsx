import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Script from "next/script";
import "./globals.css";

// Initialize fonts
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "MWT Assistant: Vehicle Stats, Battle Pass and Events",
  description:
    "View and compare all vehicles in MWT, including Su-57M, Abram X, Mi-35, F-22 Raptor — only on MWT Assistant.",
  keywords: ["MWT", "vehicle stats", "tank comparison", "war thunder mobile", "military vehicles", "battle pass", "game guide", "tank specs", "aircraft stats"],
  metadataBase: new URL('https://www.mwtassistant.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "MWT Assistant - Vehicle Stats & Comparison Tool",
    description:
      "Comprehensive stats and comparison tool for all vehicles in Modern War Thunder. Compare tanks, aircraft, and more with detailed specifications and performance data.",
    url: "https://www.mwtassistant.com",
    siteName: "MWT Assistant",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: "https://www.mwtassistant.com/icon-512.png",
        width: 512,
        height: 512,
        alt: "MWT Assistant Logo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MWT Assistant - Vehicle Stats & Comparison Tool',
    description: 'Compare and analyze all vehicles in Modern War Thunder with detailed stats and specifications.',
    images: ['https://www.mwtassistant.com/icon-512.png'],
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
  },
  icons: {
    icon: "/icon-512.png",
    apple: "/icon-512.png",
    shortcut: "/icon-512.png",
  },
  generator: 'v0.app'
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${inter.variable}`}>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3724137161724998"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
