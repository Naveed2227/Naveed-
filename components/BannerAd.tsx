'use client'; // ensures this runs only in the browser

import { useEffect, useState } from 'react';

export default function BannerAd() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // run only after hydration
  }, []);

  if (!mounted) return null; // prevent server-side render

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            atOptions = {
              'key' : '12ed5f2a30761db8a8f48d836b669b85',
              'format' : 'iframe',
              'height' : 50,
              'width' : 320,
              'params' : {}
            };
          `
        }}
      />
      <script src="https://www.highperformanceformat.com/12ed5f2a30761db8a8f48d836b669b85/invoke.js"></script>
    </div>
  );
}
