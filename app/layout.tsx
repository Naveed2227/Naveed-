import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MWT Assistant – Vehicle Stats & Info",
  description:
    "View and compare all vehicles in Modern War Thunder, including tanks, aircraft, and ships with detailed stats, weapons, and modules.",
  generator: "v0.dev",
  openGraph: {
    title: "MWT Assistant",
    description: "Detailed stats for Modern War Thunder vehicles.",
    url: "https://www.mwtassistant.com",
    siteName: "MWT Assistant",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "MWT Assistant Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MWT Assistant",
    description: "Detailed stats for Modern War Thunder vehicles.",
    images: ["/icon-512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
