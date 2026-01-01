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
      <script>
  atOptions = {
    'key' : '26985683759ed90ebd2497232a5046ba',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };
</script>
<script src="https://www.highperformanceformat.com/26985683759ed90ebd2497232a5046ba/invoke.js"></script>
    </div>
  );
}
