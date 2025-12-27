import { useEffect, useState } from 'react';
import Script from 'next/script';

type AdSize = {
  width: number;
  height: number;
};

const AdMobBanner = () => {
  const [adSize, setAdSize] = useState<AdSize | null>(null);
  const adUnitId = 'ca-app-pub-3724137161724998/3470769238';

  useEffect(() => {
    // Calculate ad size based on viewport width
    const calculateAdSize = (): AdSize => {
      const width = Math.min(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );

      // Define ad sizes based on breakpoints
      if (width >= 1024) {
        return { width: 728, height: 90 }; // Leaderboard
      } else if (width >= 768) {
        return { width: 468, height: 60 }; // Banner
      } else {
        return { width: 320, height: 50 }; // Mobile banner
      }
    };

    // Set initial ad size
    setAdSize(calculateAdSize());

    // Update ad size on window resize
    const handleResize = () => {
      setAdSize(calculateAdSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="w-full bg-white dark:bg-gray-800 py-2">
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-3724137161724998",
              enable_page_level_ads: true
            });
          `,
        }}
      />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3724137161724998"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      
      {adSize && (
        <div className="flex justify-center w-full">
          <ins
            className="adsbygoogle"
            style={{
              display: 'block',
              width: `${adSize.width}px`,
              height: `${adSize.height}px`,
              margin: '0 auto',
            }}
            data-ad-client="ca-pub-3724137161724998"
            data-ad-slot="3470769238"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      )}
      
      <Script id="adsbygoogle-push" strategy="afterInteractive">
        {`
          (adsbygoogle = window.adsbygoogle || []).push({});
        `}
      </Script>
    </div>
  );
};

export default AdMobBanner;
