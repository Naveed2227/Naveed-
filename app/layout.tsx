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

          {/* ========================= */}
          {/* DESKTOP Adsterra Banner */}
          {/* ========================= */}
          <div className="mobileHide w-full flex justify-center my-4" style={{ minHeight: 90 }}>
            <Script
              id="adsterra-desktop-options"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.atOptions = {
                    key: '26985683759ed90ebd2497232a5046ba',
                    format: 'iframe',
                    height: 90,
                    width: 728,
                    params: {}
                  };
                `,
              }}
            />
            <Script
              src="https://encouragementglutton.com/26985683759ed90ebd2497232a5046ba/invoke.js"
              strategy="afterInteractive"
            />
          </div>

          {/* ========================= */}
          {/* Main Content */}
          {/* ========================= */}
          <main className="flex-grow">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
