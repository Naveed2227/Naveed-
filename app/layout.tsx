"use client";

import { useEffect, useRef, useState } from "react";

type Jet = { id: number; x: string; y: string; angle: number; opacity: number; };

const generateJetMarkers = (count: number): Jet[] =>
  Array.from({ length: count }, (_, i) => {
    const radius = 20 + Math.random() * 40;
    const angle = Math.random() * 360;
    const rad = (angle * Math.PI) / 180;
    const x = 50 + radius * Math.cos(rad);
    const y = 50 + radius * Math.sin(rad);
    return { id: i, x: `${x}%`, y: `${y}%`, angle, opacity: 0 };
  });

export default function Radar() {
  const [radarAngle, setRadarAngle] = useState(0);
  const jetMarkers = useRef<Jet[]>(generateJetMarkers(15));

  useEffect(() => {
    let start = performance.now();
    const animate = (time: number) => {
      const elapsed = time - start;
      const rotation = (elapsed / 6000) * 360;
      setRadarAngle(rotation % 360);

      jetMarkers.current.forEach((jet) => {
        const delta = Math.abs(((rotation % 360) - jet.angle + 360) % 360);
        jet.opacity = delta < 10 ? 1 : jet.opacity * 0.96;
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="military-bg" aria-hidden="true">
      {jetMarkers.current.map((jet) => (
        <div key={jet.id} className="jet-marker" style={{ left: jet.x, top: jet.y, opacity: jet.opacity }} />
      ))}
    </div>
  );
}


import './globals.css'

export const metadata = {
      generator: 'v0.app'
    };
