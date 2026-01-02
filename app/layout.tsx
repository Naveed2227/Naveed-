import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: "MWT Assistant: Vehicle Stats, Battle Pass and Events",
  description: "View and compare all vehicles in MWT with detailed stats.",
  metadataBase: new URL('https://www.mwtassistant.com'),
  generator: 'v0.app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>

        {/* ========================= */}
        {/* Content Security Policy */}
        {/* ========================= */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="
            default-src 'self';
            script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.gstatic.com https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com https://encouragementglutton.com;
            connect-src 'self' https://*.google-analytics.com https://*.google.com https://*.gstatic.com https://pagead2.googlesyndication.com https://*.doubleclick.net https://firebase.googleapis.com https://adtrafficquality.google;
            frame-src 'self' https://*.doubleclick.net https://encouragementglutton.com;
          "
        />

        {/* Ezoic Privacy Scripts */}
        <script data-cfasync="false" src="https://cmp.gatekeeperconsent.com/min.js" />
        <script data-cfasync="false" src="https://the.gatekeeperconsent.com/cmp.min.js" />

        {/* Ezoic Header Script */}
        <script async src="//www.ezojs.com/ezoic/sa.min.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.ezstandalone = window.ezstandalone || {};
              ezstandalone.cmd = ezstandalone.cmd || [];
            `,
          }}
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Google AdSense */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3724137161724998"
          crossOrigin="anonymous"
        />
      </head>

      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">

          {/* ========================= */}
          {/* Adsterra Banner at the TOP */}
          {/* ========================= */}
          <Script
            id="adsterra-options"
            dangerouslySetInnerHTML={{
              __html: `
                atOptions = {
                  'key' : '28147349',
                  'format' : 'iframe',
                  'height' : 90,
                  'width' : 728,
                  'params' : {}
                };
              `,
            }}
          />
          <Script
            src="https://encouragementglutton.com/28147349/invoke.js"
            strategy="afterInteractive"
          />
          <div id="adsterra-container" className="w-full flex justify-center my-4" />

          {/* Ezoic top_of_page Ad */}
          <div id="ezoic-pub-ad-placeholder-101" />

          {/* Main Content */}
          <main className="flex-grow">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
