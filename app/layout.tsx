import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Source_Serif_4 } from 'next/font/google';
import Script from 'next/script';

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-source-serif',
  display: 'swap',
});

// Site constants
const SITE_URL = 'https://www.mwtassistant.com';
const SITE_NAME = 'MWT Assistant';
const DESCRIPTION = 'View and compare all vehicles in MWT, including Su-57M, Abram X, Mi-35, F-22 Raptor — only on MWT Assistant.';
const KEYWORDS = [
  'MWT', 'vehicle stats', 'tank comparison', 'war thunder mobile',
  'military vehicles', 'battle pass', 'game guide', 'tank specs', 'aircraft stats'
];

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export const metadata: Metadata = {
  title: {
    default: 'MWT Assistant: Vehicle Stats, Battle Pass and Events',
    template: '%s | MWT Assistant',
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MWT Assistant - Vehicle Stats & Comparison Tool',
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [{
      url: `${SITE_URL}/icon-512.png`,
      width: 512,
      height: 512,
      alt: 'MWT Assistant Logo',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MWT Assistant - Vehicle Stats & Comparison Tool',
    description: DESCRIPTION,
    images: [`${SITE_URL}/icon-512.png`],
  },
  icons: {
    icon: '/icon-512.png',
    apple: '/icon-512.png',
    shortcut: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
    generator: 'v0.app'
};

// Schema.org structured data
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    sameAs: [
      'https://www.facebook.com/profile.php?id=61581489612967',
      'https://www.instagram.com/mwt_assistant/',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  },
];

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`} suppressHydrationWarning>
      <head>
        {/* Google AdSense */}
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3724137161724998"
        />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}


import './globals.css'