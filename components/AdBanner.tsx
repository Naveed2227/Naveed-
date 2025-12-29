'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    adsbygoogle: any[];
    atOptions: {
      key: string;
      format: string;
      height: number;
      width: number;
      params: Record<string, any>;
    };
  }
}

const AdBanner = (): JSX.Element => {
  useEffect(() => {
    // Initialize ads after component mounts
    if (typeof window !== 'undefined') {
      try {
        // Initialize Google AdSense
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        
        // Initialize Adsterra
        window.atOptions = window.atOptions || {};
        window.atOptions = {
          'key': '26985683759ed90ebd2497232a5046ba',
          'format': 'iframe',
          'height': 90,
          'width': 728,
          'params': {}
        };
      } catch (err) {
        console.error('Failed to initialize ads:', err);
      }
    }
  }, []);

  return (
    <>
      {/* Google AdSense Script */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3724137161724998"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      
      {/* Adsterra Script */}
      <Script
        id="adsterra-script"
        src="https://www.highperformanceformat.com/26985683759ed90ebd2497232a5046ba/invoke.js"
        strategy="afterInteractive"
      />
      
      {/* Google AdSense Ad Container */}
      <div className="w-full max-w-4xl mx-auto my-4 text-center">
        "test  add"
      </div>
      
      {/* Adsterra Ad Container */}
      <div className="w-full max-w-4xl mx-auto my-4 text-center">
        <div id="container-26985683759ed90ebd2497232a5046ba"></div>
      </div>
  );
};

export default AdBanner;
