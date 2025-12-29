'use client';

import { useEffect, useState } from 'react';

// Declare the adsbygoogle property on the Window interface
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface GoogleAdSenseProps {
  className?: string;
  slot?: string;
  format?: string;
  responsive?: string | boolean;
  style?: React.CSSProperties;
}

export default function GoogleAdSense({ 
  className = "", 
  slot = "6518875801", 
  format = "auto",
  responsive = true,
  style = { display: 'block' }
}: GoogleAdSenseProps) {
  const [adLoaded, setAdLoaded] = useState(false);
  const [adError, setAdError] = useState(false);

  useEffect(() => {
    // Check if script is already added
    if (document.querySelector('script[src*="pagead2.googlesyndication.com"]')) {
      initializeAdSense();
      return;
    }

    // Load the AdSense script
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3724137161724998';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('crossorigin', 'anonymous');
    
    script.onload = initializeAdSense;
    script.onerror = handleScriptError;

    document.head.appendChild(script);

    return () => {
      // Don't remove the script as it's needed by other ad units
      script.onload = null;
      script.onerror = null;
    };
  }, []);

  const initializeAdSense = () => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-3724137161724998",
        enable_page_level_ads: true,
        publisher_id: "pub-3724137161724998"
      });
      setAdLoaded(true);
      setAdError(false);
    } catch (error) {
      console.error('AdSense error:', error);
      setAdError(true);
    }
  };

  const handleScriptError = () => {
    console.error('Failed to load AdSense script');
    setAdError(true);
  };

  // Don't render anything on the server
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className={`ad-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '100%',
          height: '90px',
          ...style
        }}
        data-ad-client="ca-pub-3724137161724998"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
      {adError && (
        <div style={{
          width: '100%',
          height: '90px',
          backgroundColor: '#f3f4f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #e5e7eb',
          color: '#6b7280',
          fontSize: '14px',
          borderRadius: '4px'
        }}>
          Ad failed to load
        </div>
      )}
    </div>
  );
}
