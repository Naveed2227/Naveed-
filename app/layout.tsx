import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import AdsterraBanner from "./components/AdsterraBanner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.className} min-h-screen flex flex-col`}>
      
      {/* ========================= */}
      {/* Ezoic / Privacy Scripts */}
      {/* ========================= */}
      <Script
        data-cfasync="false"
        src="https://cmp.gatekeeperconsent.com/min.js"
        strategy="afterInteractive"
      />
      <Script
        data-cfasync="false"
        src="https://the.gatekeeperconsent.com/cmp.min.js"
        strategy="afterInteractive"
      />
      <Script
        async
        src="//www.ezojs.com/ezoic/sa.min.js"
        strategy="afterInteractive"
      />
      <Script
        id="ezoic-standalone"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.ezstandalone = window.ezstandalone || {};
            ezstandalone.cmd = ezstandalone.cmd || [];
          `,
        }}
      />

      {/* ========================= */}
      {/* Google AdSense */}
      {/* ========================= */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3724137161724998"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      {/* ========================= */}
      {/* Adsterra Banner */}
      {/* ========================= */}
      <AdsterraBanner />

      {/* Ezoic top_of_page Ad */}
      <div id="ezoic-pub-ad-placeholder-101" />

      {/* Main Content */}
      <main className="flex-grow">{children}</main>
    </div>
  );
}

export const metadata = {
      generator: 'v0.app'
    };
