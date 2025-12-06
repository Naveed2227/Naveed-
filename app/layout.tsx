import type { Metadata, Viewport } from 'next';
import { Inter, Source_Serif_4 } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

// Optimize font loading with next/font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif']
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-source-serif',
  display: 'swap',
  preload: true
});

const SITE_URL = 'https://www.mwtassistant.com';
const SITE_NAME = 'MWT Assistant';
const SITE_DESCRIPTION = 'View and compare all vehicles in MWT, including Su-57M, Abram X, Mi-35, F-22 Raptor with detailed specifications and performance data.';

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Vehicle Stats & Battle Pass`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'MWT', 'War Thunder Mobile', 'vehicle stats', 'tank comparison', 
    'military vehicles', 'battle pass', 'game guide', 'tank specs', 
    'aircraft stats', 'vehicle comparison', 'war thunder stats'
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: {
      default: `${SITE_NAME} | Vehicle Stats & Comparison Tool`,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/icon-512.png`,
        width: 512,
        height: 512,
        alt: `${SITE_NAME} Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - Vehicle Stats & Comparison Tool`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/icon-512.png`],
    creator: '@mwt_assistant',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#ffffff',
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html 
      lang="en" 
      className={`${GeistSans.variable} ${GeistMono.variable} ${inter.variable} ${sourceSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Google AdSense */}
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased min-h-screen bg-background font-sans`}>
        {children}
      </body>
    </html>
  );
}
