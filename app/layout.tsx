'use client';

import { Inter } from "next/font/google";
import Script from "next/script";
import { useEffect } from "react";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize Adsterra ads after component mounts
    const loadAdsterra = () => {
      // Top banner
      const topAd = {
        'key': '28147349',
        'format': 'iframe',
        'height': 90,
        'width': 728,
        'params': {}
      };
      
      // Bottom banner
      const bottomAd = {
        'key': '28147349',
        'format': 'iframe',
        'height': 250,
        'width': 300,
        'params': {}
      };

      // @ts-ignore
      if (typeof window !== 'undefined' && !window.adsterra) {
        // @ts-ignore
        window.adsterra = true;
        
        // Load top ad
        if (document.getElementById('adsterra-top')) {
          // @ts-ignore
          window.atOptions = topAd;
          const script1 = document.createElement('script');
          script1.src = 'https://encouragementglutton.com/28147349/invoke.js';
          script1.async = true;
          document.getElementById('adsterra-top')?.appendChild(script1);
        }

        // Load bottom ad
        if (document.getElementById('adsterra-bottom')) {
          setTimeout(() => {
            // @ts-ignore
            window.atOptions = bottomAd;
            const script2 = document.createElement('script');
            script2.src = 'https://encouragementglutton.com/28147349/invoke.js';
            script2.async = true;
            document.getElementById('adsterra-bottom')?.appendChild(script2);
          }, 1000);
        }
      }
    };

    // Load ads after a short delay to ensure DOM is ready
    const timer = setTimeout(loadAdsterra, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="google-adsense-account" content="ca-pub-3724137161724998" />
        
        {/* Preconnect to required domains */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://securepubads.g.doubleclick.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://encouragementglutton.com" crossOrigin="anonymous" />
        
        {/* Google AdSense */}
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3724137161724998"
          crossOrigin="anonymous"
          onError={(e) => console.error('AdSense script failed to load', e)}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Adsterra Top Banner (728x90) */}
        <div id="adsterra-top" className="w-full flex justify-center my-4 min-h-[90px] bg-gray-50">
          <div className="w-[728px] h-[90px] flex items-center justify-center text-gray-400 text-sm">
            Loading top ad...
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Adsterra Bottom Banner (300x250) - Mobile */}
        <div id="adsterra-bottom" className="w-full flex justify-center my-4 min-h-[250px] lg:hidden bg-gray-50">
          <div className="w-[300px] h-[250px] flex items-center justify-center text-gray-400 text-sm">
            Loading bottom ad...
          </div>
        </div>

        {/* Initialize AdSense */}
        <Script
          id="adsbygoogle-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({});
            `,
          }}
        />
      </body>
    </html>
  );
}

export const metadata = {
      generator: 'v0.app'
    };
