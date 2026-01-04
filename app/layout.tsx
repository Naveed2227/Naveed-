import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MWT Assistant: Vehicle Stats, Battle Pass and Events",
  description: "View and compare all vehicles in MWT with detailed stats.",
  metadataBase: new URL("https://www.mwtassistant.com"),
  generator: 'v0.app'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">

          {/* ============================================================ */}
          {/* RESPONSIVE AD PLACEMENT                                      */}
          {/* ============================================================ */}
          
          {/* 1. DESKTOP BANNER (728x90) - Only visible on MD screens and up */}
          <div className="hidden md:flex w-full justify-center py-4 bg-transparent" style={{ minHeight: '90px' }}>
            <Script id="adsterra-desktop-config" strategy="afterInteractive">
              {`
                atOptions = {
                  'key' : '26985683759ed90ebd2497232a5046ba',
                  'format' : 'iframe',
                  'height' : 90,
                  'width' : 728,
                  'params' : {}
                };
              `}
            </Script>
            <Script 
              src="https://encouragementglutton.com/26985683759ed90ebd2497232a5046ba/invoke.js" 
              strategy="afterInteractive" 
            />
          </div>

          {/* 2. MOBILE BANNER (320x50) - Only visible on small screens */}
          <div className="flex md:hidden w-full justify-center py-2 bg-transparent" style={{ minHeight: '50px' }}>
            <Script id="adsterra-mobile-config" strategy="afterInteractive">
              {`
                if (typeof atOptions === 'undefined') {
                  var atOptions = {
                    'key' : '28165066', // This is your Mobile Ad Unit ID
                    'format' : 'iframe',
                    'height' : 50,
                    'width' : 320,
                    'params' : {}
                  };
                }
              `}
            </Script>
            <Script 
              src="https://encouragementglutton.com/28165066/invoke.js" 
              strategy="afterInteractive" 
            />
          </div>

          {/* ========================= */}
          {/* Main Content              */}
          {/* ========================= */}
          <main className="flex-grow">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
