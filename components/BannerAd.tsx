'use client';

import { useEffect } from 'react';

export default function BannerAd() {
  useEffect(() => {
    // This code runs only on the client side
    const script = document.createElement('script');
    script.innerHTML = `
      var atOptions = {
        'key': '12ed5f2a30761db8a8f48d836b669b85',
        'format': 'iframe',
        'height': 50,
        'width': 320,
        'params': {}
      };
    `;
    document.head.appendChild(script);

    const adScript = document.createElement('script');
    adScript.src = 'https://www.highperformanceformat.com/12ed5f2a30761db8a8f48d836b669b85/invoke.js';
    adScript.async = true;
    document.body.appendChild(adScript);

    return () => {
      // Cleanup
      document.head.removeChild(script);
      if (document.body.contains(adScript)) {
        document.body.removeChild(adScript);
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-center py-2 bg-gray-100">
      <div id="banner-slot"></div>
    </div>
  );
}
