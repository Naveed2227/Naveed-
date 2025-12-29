'use client';

import { useEffect } from 'react';

export default function BannerAd() {
  useEffect(() => {
    // Adsterra banner ad code
    const atOptions = {
      'key': 'YOUR_PUBLISHER_ID', // Replace with your actual Adsterra publisher ID
      'format': 'iframe',
      'height': 250,
      'width': 300,
      'params': {}
    };

    // Create script element for ad configuration
    const configScript = document.createElement('script');
    configScript.innerHTML = `var atOptions = ${JSON.stringify(atOptions)};`;
    
    // Create script element for ad loader
    const adScript = document.createElement('script');
    adScript.src = '//www.highperformancedformats.com/at.js';
    adScript.async = true;
    adScript.defer = true;

    // Append scripts to document
    document.head.appendChild(configScript);
    document.body.appendChild(adScript);

    // Cleanup function
    return () => {
      if (document.head.contains(configScript)) {
        document.head.removeChild(configScript);
      }
      if (document.body.contains(adScript)) {
        document.body.removeChild(adScript);
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-center my-4">
      <div id="container">
        <script type="text/javascript">
          atOptions = atOptions || {};
        </script>
        <script type="text/javascript" src="//www.highperformancedformats.com/at.js"></script>
      </div>
    </div>
  );
}
