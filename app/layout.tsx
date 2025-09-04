import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MWT App",
  description: "Created with v0",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script */}
        <Script
          id="adsense-script"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3724137161724998"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} relative min-h-screen`}>
        {/* Main content with bottom padding so content is not hidden behind sticky ad */}
        <div className="pb-[100px]">{children}</div>

        {/* Sticky AdSense Banner */}
        <div className="fixed bottom-0 left-0 w-full z-50 bg-transparent">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-3940256099942544" // Google test client
data-ad-slot="6300978111" // test ad slot

            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <Script id="ads-init" strategy="afterInteractive">
            {`(adsbygoogle = window.adsbygoogle || []).push({});`}
          </Script>
        </div>
      </body>
    </html>
  );
}
