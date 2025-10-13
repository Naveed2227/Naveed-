'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
// Import the vehicles data from the public directory
const vehiclesData = require('../../public/vehicles.json');

// Dynamically import the MwtVehicleStats component with SSR disabled
const MwtVehicleStats = dynamic(
  () => import('../../components/mwt-vehicle-stats'),
  { ssr: false, loading: () => <div className="h-64 flex items-center justify-center">Loading stats...</div> }
);

interface Vehicle {
  id: string | number;
  name: string;
  type: string;
  faction: string;
  tier: string;
  image: string;
  stats: {
    health: number;
    speed: number;
    [key: string]: any;
  };
  weapons: Array<{
    name: string;
    type: string;
    damage: number;
    penetration: number;
    reload?: number;
  }>;
  modules: {
    [key: string]: Array<{
      name: string;
      bonus: string;
    }>;
  };
  description?: string;
}

export default function VehicleDetailsPage({ params }: { params: { vehicleName: string } }) {
  const router = useRouter();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Decode the vehicle name from URL (replacing hyphens with spaces)
    const decodedName = decodeURIComponent(params.vehicleName).replace(/-/g, ' ');
    
    // Find the vehicle from the preloaded data
    const findVehicle = () => {
      try {
        const foundVehicle = vehiclesData.find((v: Vehicle) => 
          v.name.toLowerCase() === decodedName.toLowerCase() ||
          v.name.toLowerCase().replace(/[^a-z0-9]/g, '') === decodedName.toLowerCase().replace(/[^a-z0-9]/g, '')
        );

        if (!foundVehicle) {
          throw new Error('Vehicle not found');
        }
        
        setVehicle(foundVehicle);
        setLoading(false);
      } catch (err) {
        console.error('Error finding vehicle:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setLoading(false);
      }
    };

    findVehicle();
  }, [params.vehicleName]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-700">Loading vehicle details...</p>
        </div>
      </div>
    );
  }

  if (error || !vehicle) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {error || 'Vehicle Not Found'}
          </h1>
          <p className="text-gray-600 mb-6">
            {error ? 'Failed to load vehicle details.' : 'The requested vehicle could not be found.'}
          </p>
          <button
            onClick={() => router.push('/')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Vehicles List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => router.back()}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
              clipRule="evenodd" 
            />
          </svg>
          Back to List
        </button>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{vehicle.name}</h1>
            <div className="border-t border-gray-200 pt-4">
              <MwtVehicleStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// This function gets called at build time
export async function generateStaticParams() {
  // Pre-render all vehicle pages at build time
  return vehiclesData.map((vehicle: Vehicle) => ({
    vehicleName: vehicle.name.toLowerCase().replace(/\s+/g, '-')
  }));
}
