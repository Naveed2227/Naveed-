'use client';

import { useEffect, useState } from 'react';

export default function BannerAd() {
  const [balance, setBalance] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [adLoaded, setAdLoaded] = useState(false);

  // Fetch balance from the backend
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch('/api/ads');
        if (!response.ok) {
          throw new Error('Failed to fetch balance');
        }
        const data = await response.json();
        setBalance(`$${data.balance.toFixed(2)}`);
      } catch (err) {
        console.error('Error fetching balance:', err);
        setError('Failed to load balance');
      }
    };

    fetchBalance();
  }, []);

  // Load Adstera ad
  useEffect(() => {
    if (adLoaded) return;

    const loadAd = () => {
      const atOptions = {
        'key': '12ed5f2a30761db8a8f48d836b669b85',
        'format': 'iframe',
        'height': 50,
        'width': 320,
        'params': {}
      };

      // Create script element for ad configuration
      const configScript = document.createElement('script');
      configScript.innerHTML = `var atOptions = ${JSON.stringify(atOptions)};`;
      
      // Create script element for ad loader
      const adScript = document.createElement('script');
      adScript.src = '//www.highperformanceformat.com/12ed5f2a30761db8a8f48d836b669b85/invoke.js';
      adScript.async = true;
      adScript.defer = true;
      adScript.onload = () => setAdLoaded(true);

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
    };

    loadAd();
  }, [adLoaded]);

  return (
    <div className="w-full flex flex-col items-center my-4 p-4 bg-gray-50 rounded-lg">
      {/* Balance Display */}
      <div className="mb-4 text-center">
        <h3 className="text-lg font-medium text-gray-700">Adstera Balance</h3>
        <div className="text-2xl font-bold text-blue-600">
          {balance || (error ? 'Error loading balance' : 'Loading...')}
        </div>
      </div>
      
      {/* Ad Container */}
      <div className="w-full max-w-md flex justify-center">
        <div id="my-ad"></div>
      </div>
    </div>
  );
}
