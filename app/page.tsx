import MWTVehicleStats from "@/components/mwt-vehicle-stats"
import dynamic from 'next/dynamic';

// Dynamically import AdBanner with SSR disabled
const AdBanner = dynamic(() => import('@/components/AdBanner'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Top Ad Banner */}
      <div className="w-full bg-gray-800 py-2">
        <AdBanner />
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <MWTVehicleStats />
      </div>
      
      {/* Bottom Ad Banner */}
      <div className="w-full bg-gray-800 py-2 mt-8">
        <AdBanner />
      </div>
    </div>
  );
}
