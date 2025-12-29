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
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      color: '#94a3b8',
      fontSize: '12px',
      fontWeight: '500',
      border: '1px solid #334155',
      borderRadius: '4px',
      boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* AdMob Ad */}
      <div style={{ 
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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

      {/* Fallback/Placeholder content */}
      <div style={{ 
        textAlign: 'center',
        padding: '0.5rem',
        zIndex: 1,
        pointerEvents: 'none' // Allow clicks to pass through to the ad
      }}>
        <div style={{ fontSize: '12px', marginBottom: '2px', color: '#e2e8f0' }}>Advertisement</div>
        <div style={{ fontSize: '10px' }}>Mobile Banner (320×50)</div>
      </div>
    </div>
  );
};

export default AdMobBanner;
