import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RadarBackground from "@/components/radar-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "v0 App",
  description: "Radar with sweep dots",
  generator: "v0.dev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RadarBackground />
        {children}
      </body>
    </html>
  );
}
