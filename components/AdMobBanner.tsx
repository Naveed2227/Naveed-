import { useEffect } from 'react';
import Script from 'next/script';

const AdMobBanner = () => {
  useEffect(() => {
    // This will run on client-side only
    const loadAd = () => {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error('Error loading AdMob ad:', error);
      }
    };

    // Add event listener to load ad when the component mounts
    window.addEventListener('load', loadAd);
    
    // Cleanup
    return () => {
      window.removeEventListener('load', loadAd);
    };
  }, []);

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50px' // Ensure minimum height for the ad
    }}>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3724137161724998"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <ins
        className="adsbygoogle"
        style={{ 
          display: 'block',
          width: '320px',
          height: '50px',
          margin: '0 auto'
        }}
        data-ad-client="ca-pub-3724137161724998"
        data-ad-slot="3470769238"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdMobBanner;
