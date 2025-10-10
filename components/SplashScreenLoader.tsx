'use client';

import dynamic from 'next/dynamic';

const SplashScreen = dynamic(
  () => import('./SplashScreen'),
  { 
    ssr: false,
    loading: () => null
  }
);

export default function SplashScreenLoader() {
  return <SplashScreen />;
}
