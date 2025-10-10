'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import Framer Motion with SSR disabled
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);

const AnimatePresence = dynamic(
  () => import('framer-motion').then((mod) => mod.AnimatePresence),
  { ssr: false }
);

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide splash screen after 3 seconds or when the page is fully loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 3000);

    // Also hide splash screen when page is fully loaded (in case it takes longer than 3 seconds)
    const handleLoad = () => {
      clearTimeout(timer);
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <MotionDiv
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: 'easeInOut' }
          }}
        >
          <MotionDiv
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              transition: { 
                ease: [0.22, 1, 0.36, 1]
              }
            }}
            className="flex flex-col items-center justify-center p-8"
          >
            <MotionDiv
              animate={{
                scale: [1, 1.1, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }
              }}
            >
              <Image 
                src="/icon-512.png" 
                alt="Logo" 
                width={150} 
                height={150}
                priority
              />
            </MotionDiv>
            <MotionDiv 
              className="mt-6 h-1 w-40 overflow-hidden rounded-full bg-gray-700"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { delay: 0.3 }
              }}
            >
              <MotionDiv
                className="h-full bg-white"
                initial={{ width: '0%' }}
                animate={{
                  width: '100%',
                  transition: {
                    duration: 2.5,
                    ease: 'easeInOut'
                  }
                }}
              />
            </MotionDiv>
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}
