'use client';

import { useEffect } from 'react';

export default function BannerAd() {
  useEffect(() => {
    // Prevent duplicate ads
    if (document.getElementById('adsterra-script')) return;

    // atOptions must exist on window
    (window as any).atOptions = {
      key: '26985683759ed90ebd2497232a5046ba',
      format: 'iframe',
      height: 90,
      width: 728,
      params: {},
    };

    const script = document.createElement('script');
    script.id = 'adsterra-script';
    script.src =
      'https://www.highperformanceformat.com/26985683759ed90ebd2497232a5046ba/invoke.js';
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="adsterra-banner"
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 8,
        minHeight: 90,
      }}
    />
  );
}
