import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AdsterraBanner from "./components/AdsterraBanner"; // import component

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>

      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">

          {/* Adsterra Banner at the top */}
          <AdsterraBanner />

          {/* Main content */}
          <main className="flex-grow">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
