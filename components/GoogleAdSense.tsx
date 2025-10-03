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
}

export default function GoogleAdSense({ className = "" }: GoogleAdSenseProps) {
  const [adLoaded, setAdLoaded] = useState(false);
  const [adError, setAdError] = useState(false);

  useEffect(() => {
    try {
      // Initialize AdSense
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      
      // Set up a timeout to detect if ad fails to load
      const timeout = setTimeout(() => {
        if (!adLoaded) {
          setAdError(true);
        }
      }, 5000); // 5 second timeout

      return () => clearTimeout(timeout);
    } catch (error) {
      console.error('AdSense error:', error);
      setAdError(true);
    }
  }, [adLoaded]);

  const handleAdLoad = () => {
    setAdLoaded(true);
    setAdError(false);
  };

  const handleAdError = () => {
    setAdError(true);
    setAdLoaded(false);
  };

  return (
    null
  );
}
