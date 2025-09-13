import { useParams, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { getTierColor, formatTier } from './utils/vehicleUtils';
import { VEHICLES } from './data/vehicles';

export default function VehicleDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find the vehicle by ID
  const selectedVehicle = VEHICLES.find(v => v.id === id);

  if (!selectedVehicle) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white p-8 text-center">
        <h1 className="text-2xl font-bold text-cyan-300 mb-4">Vehicle not found</h1>
        <button 
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md"
        >
          Back to Vehicles
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center text-cyan-400 hover:text-cyan-300 mb-6"
        >
          <X className="w-5 h-5 mr-1" /> Back
        </button>
        
        <div className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column - Image */}
              <div className="md:w-1/2">
                {selectedVehicle.image && (
                  <div className="bg-slate-900 rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={selectedVehicle.image} 
                      alt={selectedVehicle.name}
                      className="w-full h-auto max-h-[70vh] object-contain"
                    />
                  </div>
                )}
              </div>
              
              {/* Right Column - Details */}
              <div className="md:w-1/2">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-cyan-300 mb-2">{selectedVehicle.name}</h1>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
                      {selectedVehicle.faction}
                    </span>
                    <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
                      {selectedVehicle.type}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm ${getTierColor(selectedVehicle.tier)}`}>
                      Tier {formatTier(selectedVehicle.tier)}
                    </span>
                  </div>
                  
                  {selectedVehicle.description && (
                    <div className="bg-slate-900 rounded-lg p-4 mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-cyan-300">Description</h3>
                      <p className="text-slate-300">{selectedVehicle.description}</p>
                    </div>
                  )}
                </div>

                {/* Specifications */}
                <div className="bg-slate-900 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-semibold mb-4 text-cyan-300">Specifications</h3>
                  <div className="space-y-3">
                    {Object.entries(selectedVehicle.stats || {}).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-slate-700">
                        <span className="text-slate-300 capitalize">{key.replace(/_/g, ' ')}</span>
                        <span className="font-medium">{String(value)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Weapons */}
                {selectedVehicle.weapons && selectedVehicle.weapons.length > 0 && (
                  <div className="bg-slate-900 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-4 text-cyan-300">Weapons</h3>
                    <div className="space-y-4">
                      {selectedVehicle.weapons.map((weapon: any, idx: number) => (
                        <div key={idx} className="bg-slate-800/50 rounded-lg p-4">
                          <h4 className="font-medium text-cyan-200">{weapon.name}</h4>
                          <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                            {Object.entries(weapon)
                              .filter(([key]) => !['name', 'description'].includes(key))
                              .map(([key, value]) => (
                                <div key={key} className="flex justify-between">
                                  <span className="text-slate-400 capitalize">{key.replace(/_/g, ' ')}:</span>
                                  <span className="text-slate-200">{String(value)}</span>
                                </div>
                              ))}
                          </div>
                          {weapon.description && (
                            <p className="mt-2 text-sm text-slate-400">{weapon.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
