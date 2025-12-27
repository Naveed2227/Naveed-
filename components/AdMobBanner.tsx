"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

type AdSize = {
  width: number;
  height: number;
};

const AdMobBanner = () => {
  const [adSize, setAdSize] = useState<AdSize | null>(null);
  const adUnitId = "ca-app-pub-3724137161724998/3470769238";

  useEffect(() => {
    const calculateAdSize = (): AdSize => {
      const width = Math.min(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );

      // Smaller sizes (~3x smaller than original)
      if (width >= 1024) {
        return { width: 468, height: 60 }; // was 728x90
      } else if (width >= 768) {
        return { width: 320, height: 50 }; // was 468x60
      } else {
        return { width: 200, height: 35 }; // was 320x50
      }
    };

    setAdSize(calculateAdSize());

    const handleResize = () => {
      setAdSize(calculateAdSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Push ad only after adSize is set
  useEffect(() => {
    if (!adSize) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.warn("adsbygoogle push error", e);
    }
  }, [adSize]);

  return (
    <div className="w-full bg-white dark:bg-gray-800 py-2">
      {/* Google Ads script — load only once */}
      <Script
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3724137161724998"
        crossOrigin="anonymous"
      />

      {adSize && (
        <div className="flex justify-center w-full">
          <ins
            className="adsbygoogle"
            style={{
              display: "block",
              width: `${adSize.width}px`,
              height: `${adSize.height}px`,
              margin: "0 auto",
              maxWidth: "100%",
            }}
            data-ad-client="ca-pub-3724137161724998"
            data-ad-slot="3470769238"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      )}
    </div>
  );
};

export default AdMobBanner;
