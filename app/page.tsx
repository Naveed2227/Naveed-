'use client'

import MWTVehicleStats from "@/components/mwt-vehicle-stats"
import { useAmp } from 'next/amp'
import { AmpAdsenseBody } from '../components/AmpAdsense'

export const config = {
  amp: 'hybrid',
}

export default function Home() {
  const isAmp = useAmp()

  return (
    <>
      {isAmp && <AmpAdsenseBody />}
      <MWTVehicleStats />
    </>
  )
}
