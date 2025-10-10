'use client';

import { Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google';
import { ReactNode } from 'react';
import SplashScreen from "@/components/SplashScreen";

// These fonts will be used in the client component
const v0FontGeist = V0_Font_Geist({ subsets: ["latin"], weight: ["100","200","300","400","500","600","700","800","900"], preload: false });
const v0FontGeistMono = V0_Font_Geist_Mono({ subsets: ["latin"], weight: ["100","200","300","400","500","600","700","800","900"], preload: false });
const v0FontSourceSerif4 = V0_Font_Source_Serif_4({ subsets: ["latin"], weight: ["200","300","400","500","600","700","800","900"], preload: false });

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <SplashScreen>
      {children}
    </SplashScreen>
  );
}
