'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdBanner = (): JSX.Element => {
  useEffect(() => {
    // Initialize ads after component mounts
    if (window) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('Failed to push ad to adsbygoogle:', err);
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
      
      {/* Ad Container */}
      <div className="w-full max-w-4xl mx-auto my-4 text-center">
        <ins
          className="adsbygoogle block"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-3724137161724998"
          data-ad-slot="3470769238"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </>
  );
};

export default AdBanner;
