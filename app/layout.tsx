"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "v0 App",
  description: "Radar with sweep dots",
  generator: "v0.dev",
};

type Jet = {
  id: number;
  x: string;
  y: string;
  angle: number;
  opacity: number;
};

const generateJetMarkers = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const radius = 20 + Math.random() * 40;
    const angle = Math.random() * 360;
    const angleRad = (angle * Math.PI) / 180;

    const x = 50 + radius * Math.cos(angleRad);
    const y = 50 + radius * Math.sin(angleRad);

    return { id: i, x: `${x}%`, y: `${y}%`, angle, opacity: 0 };
  });
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [radarAngle, setRadarAngle] = useState(0);
  const jetMarkers = useRef<Jet[]>(generateJetMarkers(15));

  useEffect(() => {
    let start = performance.now();

    const animate = (time: number) => {
      const elapsed = time - start;
      const rotation = (elapsed / 6000) * 360; // 6s per rotation
      setRadarAngle(rotation % 360);

      // Update opacity for each jet
      jetMarkers.current.forEach((jet) => {
        const delta = Math.abs(((rotation % 360) - jet.angle + 360) % 360);
        if (delta < 10) {
          jet.opacity = 1; // radar beam over jet
        } else {
          jet.opacity *= 0.96; // gradual fade out
        }
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="military-bg" aria-hidden="true">
          {jetMarkers.current.map((jet) => (
            <div
              key={jet.id}
              className="jet-marker"
              style={{
                left: jet.x,
                top: jet.y,
                opacity: jet.opacity,
              }}
            />
          ))}
        </div>
        {children}
      </body>
    </html>
  );
}
