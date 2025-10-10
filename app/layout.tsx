import type { Metadata, Viewport } from 'next';
import { Inter, Geist_Sans as Geist, Geist_Mono, Source_Serif_4 } from 'next/font/google';
import "./globals.css";

// Font loading with optimization
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
  preload: true
});

const geist = Geist({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-geist',
  preload: true
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-geist-mono',
  preload: true
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-source-serif',
  weight: ['400', '500', '600', '700'],
  preload: true
});

// Viewport configuration for responsive design
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export const metadata: Metadata = {
  title: {
    default: 'MWT Assistant – Vehicle Stats & Info',
    template: '%s | MWT Assistant'
  },
  description: 'View and compare all vehicles in Modern War Thunder, including tanks, aircraft, and ships with detailed stats, weapons, and modules.',
  keywords: [
    'Modern War Thunder',
    'MWT',
    'vehicle stats',
    'tank comparison',
    'military vehicles',
    'war thunder stats'
  ],
  authors: [{ name: 'MWT Assistant Team' }],
  creator: 'MWT Assistant',
  publisher: 'MWT Assistant',
  metadataBase: new URL('https://www.mwtassistant.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'MWT Assistant – Vehicle Stats & Info',
    description: 'View and compare all vehicles in Modern War Thunder with detailed stats, weapons, and modules.',
    url: 'https://www.mwtassistant.com',
    siteName: 'MWT Assistant',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MWT Assistant - Modern War Thunder Vehicle Stats',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MWT Assistant – Vehicle Stats & Info',
    description: 'View and compare all vehicles in Modern War Thunder with detailed stats, weapons, and modules.',
    images: ['/twitter-image.jpg'],
    creator: '@mwtassistant',
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
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    yandex: 'YANDEX_VERIFICATION_CODE',
    yahoo: 'YAHOO_VERIFICATION_CODE',
    other: {
      me: ['mailto:contact@mwtassistant.com', 'https://twitter.com/mwtassistant'],
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#da532c',
    'msapplication-config': '/browserconfig.xml',
  },
    generator: 'v0.app'
};

// JSON-LD structured data for the homepage
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "MWT Assistant",
  "url": "https://www.mwtassistant.com",
  "description": "View and compare all vehicles in Modern War Thunder with detailed stats, weapons, and modules.",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "publisher": {
    "@type": "Organization",
    "name": "MWT Assistant",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.mwtassistant.com/logo.png"
    }
  },
  "screenshot": "https://www.mwtassistant.com/screenshot.jpg",
  "softwareVersion": "1.0.0"
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${geist.variable} ${geistMono.variable} ${sourceSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google AdSense */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID" 
          crossOrigin="anonymous"
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Additional meta tags */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="MWT Assistant" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* PWA related tags */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="application-name" content="MWT Assistant" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        {children}
        
        {/* Google Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  );
}
