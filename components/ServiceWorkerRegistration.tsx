'use client';

import { useEffect } from 'react';

const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      // Check if the browser supports service workers and we're on HTTPS
      const isLocalhost = window.location.hostname === 'localhost' || 
                         window.location.hostname === '127.0.0.1';
      
      // Only register service worker in production or if explicitly enabled in development
      if (!isLocalhost || process.env.NODE_ENV === 'production') {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/',
          type: 'classic'
        });
        
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
        
        // Optional: Check for updates
        registration.update();
      }
    } catch (error) {
      console.error('ServiceWorker registration failed: ', error);
    }
  }
};

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    // Only run on client-side and after the component has mounted
    if (typeof window !== 'undefined') {
      // Check if service workers are supported
      if ('serviceWorker' in navigator) {
        // Wait for the page to be fully loaded before registering the service worker
        window.addEventListener('load', registerServiceWorker);
        
        // Clean up the event listener
        return () => {
          window.removeEventListener('load', registerServiceWorker);
        };
      }
    }
  }, []);

  return null; // This component doesn't render anything
}
