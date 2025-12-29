'use client';

import { useEffect, useState } from 'react';

// Declare the adsbygoogle property on the Window interface
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function HeaderWithAdSense() {
  const [adLoaded, setAdLoaded] = useState(false);
  const [adError, setAdError] = useState(false);

  useEffect(() => {
    try {
      // Initialize AdSense after component mounts
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      
      // Set up timeout to detect if ad fails to load
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
    <>
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 shadow-sm pt-16 sm:pt-0">
        <div className="max-w-7xl xl:max-w-[90rem] mx-auto p-4 sm:p-6 md:p-6 lg:p-8 mb-0 mt-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
            <div className="flex-1 min-w-0">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text mx-14">
                  MWT Assistant
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 ml-14">
                  Comprehensive vehicle statistics and comparisons
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=app.mwtassistantunofficial.android&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-xs md:text-sm font-semibold rounded-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-blue-500 text-slate-900 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:from-emerald-400 hover:via-cyan-300 hover:to-blue-400 transition-all duration-300 animate-pulse border border-cyan-300/70 whitespace-nowrap"
              >
                Install App Version
              </a>
              <div className="pb-4 w-full">
                <div className="flex flex-col lg:flex-row gap-3 md:gap-4 items-start lg:items-center justify-between">
                  <div className="relative w-full lg:w-64 xl:w-80 flex-1">
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search vehicles..."
                      className="pl-10 pr-10 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm touch-manipulation w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Google AdSense - 728x90 Leaderboard */}
      <div className="flex justify-center my-4">
        <div className="w-full max-w-4xl">
          <ins
            className="adsbygoogle block"
            style={{ 
              display: 'inline-block',
              width: '728px',
              height: '90px'
            }}
            data-ad-client="ca-pub-3724137161724998"
            data-ad-slot="7926158958"
            data-ad-format="auto"
            data-full-width-responsive="true"
            onLoad={handleAdLoad}
            onError={handleAdError}
          />
          
        </div>
      </div>
    </>
  );
}
