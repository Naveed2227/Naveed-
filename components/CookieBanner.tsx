"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Cookie utility functions
const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null;
  const nameEQ = name + '=';
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') cookie = cookie.substring(1);
    if (cookie.indexOf(nameEQ) === 0) return cookie.substring(nameEQ.length);
  }
  return null;
};

const setCookie = (name: string, value: string, days = 365) => {
  if (typeof document === 'undefined') return;
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/; SameSite=Lax` + (location.protocol === 'https:' ? '; Secure' : '');
};

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const cookieValue = getCookie('cookiesAccepted');
    setShowBanner(cookieValue !== 'true');
    setMounted(true);
  }, []);

  const acceptCookies = () => {
    setCookie('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  if (!mounted || !showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t border-slate-700 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-300 text-center sm:text-left">
              We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
              {' '}
              <a 
                href="/privacy" 
                className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            </p>
            <div className="flex-shrink-0 flex gap-3">
              <button
                onClick={acceptCookies}
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
