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
              'key' : '28165066',
              'format' : 'iframe',
              'height' : 50,
              'width' : 320,
              'params' : {}
            };
          `
        }}
      />
      <script src="https://www.highperformanceformat.com/28165066/invoke.js"></script>
    </div>
  );
}
