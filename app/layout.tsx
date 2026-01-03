import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter', 
  display: 'swap' 
});

export const metadata: Metadata = {
  title: "MWT Assistant: Vehicle Stats, Battle Pass and Events",
  description: "View and compare all vehicles in MWT with detailed stats.",
  metadataBase: new URL('https://www.mwtassistant.com'),
  generator: 'v0.app',
  other: {
    'google-adsense-account': 'ca-pub-3724137161724998'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Preconnect to required domains */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://encouragementglutton.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* Google AdSense */}
        <Script
          id="google-adsense"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3724137161724998"
          crossOrigin="anonymous"
        />
      </head>

      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {/* Adsterra Top Banner */}
          <div id="adsterra-top" className="w-full flex justify-center my-4"></div>
          
          {/* Main Content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Adsterra Bottom Banner - Mobile */}
          <div id="adsterra-bottom" className="w-full flex justify-center my-4 lg:hidden">
            <ins className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-3724137161724998"
              data-ad-slot="1234567890"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
          </div>
        </div>

        {/* Adsterra Scripts */}
        <Script
          id="adsterra-top-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var atOptions = {
                'key' : '28147349',
                'format' : 'iframe',
                'height' : 90,
                'width' : 728,
                'params' : {}
              };
              var s = document.createElement('script');
              s.type = 'text/javascript';
              s.async = true;
              s.src = 'https://encouragementglutton.com/28147349/invoke.js';
              document.getElementById('adsterra-top').appendChild(s);
            `
          }}
        />

        <Script
          id="adsterra-bottom-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var atOptions = {
                'key' : '28147349',
                'format' : 'iframe',
                'height' : 250,
                'width' : 300,
                'params' : {}
              };
              var s = document.createElement('script');
              s.type = 'text/javascript';
              s.async = true;
              s.src = 'https://encouragementglutton.com/28147349/invoke.js';
              document.getElementById('adsterra-bottom').appendChild(s);
            `
          }}
        />
      </body>
    </html>
  );
}
