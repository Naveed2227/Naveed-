import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Gift, Info } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Vehicle {
  id: number;
  name: string;
  type: string;
  faction: string;
  tier: string;
  image?: string;
  description?: string;
  [key: string]: any;
}

interface EventData {
  id: number;
  title: string;
  month: string;
  image: string;
  vehicles: (string | Vehicle)[];
  rewards: {
    premium: string[];
    free: string[];
  };
  description: string;
  startDate: string;
  endDate: string;
}

const EVENTS: EventData[] = [
  {
    id: 1,
    title: "Frozen Frontlines",
    month: "January 2025",
    image: "/frozen-frontlines.jpg", // Make sure to place the image in the public folder
    description: "Brave the frozen wasteland with these elite winter warfare vehicles!",
    startDate: "2025-01-01",
    endDate: "2025-01-31",
    vehicles: [
      "BM-57-2 Kochevnik",
      "T-14 Armata",
      "M1A3 Abrams",
      "Leopard 2A8"
    ],
    rewards: {
      premium: [
        "Premium Time: 30 Days",
        "Gold: 10,000",
        "Unique Camo: Summer Digital",
        "Commander: Summer Specialist"
      ],
      free: [
        "Silver: 1,000,000",
        "Boosters: x5 200%",
        "Crew XP: 500,000"
      ]
    }
  },
  // Add more events as needed
  ...Array(19).fill(0).map((_, i) => ({
    id: i + 2,
    title: `Special Event ${i + 1}`,
    month: new Date(2025, (i % 12) + 1).toLocaleString('default', { month: 'long' }),
    image: "https://via.placeholder.com/400x200/1e293b/64748b?text=Event",
    description: `Limited time event with exclusive rewards and vehicles!`,
    startDate: new Date(2025, (i % 12), 1).toISOString().split('T')[0],
    endDate: new Date(2025, (i % 12) + 1, 0).toISOString().split('T')[0],
    vehicles: Array(6).fill(0).map((_, j) => `Event ${i+1} Vehicle ${j+1}`),
    rewards: {
      premium: [
        `Premium Reward 1`,
        `Premium Reward 2`,
        `Premium Reward 3`
      ],
      free: [
        `Free Reward 1`,
        `Free Reward 2`,
        `Free Reward 3`
      ]
    }
  }))
];

interface EventComponentProps {
  onClose: () => void;
  onVehicleSelect: (vehicleName: string) => void;
}

const EventComponent: React.FC<EventComponentProps> = ({ onClose, onVehicleSelect }) => {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const router = useRouter();

  // Toggle expanded state for an event
  const toggleEvent = (eventId: number) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  // Helper function to find vehicle by name
  const findVehicleByName = (name: string): Vehicle | null => {
    if (typeof window === 'undefined') return null;
    const vehicles = (window as any).VEHICLES || [];
    if (!Array.isArray(vehicles)) return null;
    return vehicles.find((v: any) => v?.name?.toLowerCase() === name.toLowerCase()) || null;
  };

  // Process events with vehicle data
  const [processedEvents, setProcessedEvents] = useState<EventData[]>(EVENTS);

  useEffect(() => {
    const updateEvents = async () => {
      const updatedEvents = await Promise.all(EVENTS.map(async (event) => {
        const vehicles = await Promise.all(
          event.vehicles.map(async (vehicle) => {
            if (typeof vehicle === 'string') {
              return findVehicleByName(vehicle) || vehicle;
            }
            return vehicle;
          })
        );
        return { ...event, vehicles };
      }));
      setProcessedEvents(updatedEvents);
    };

    updateEvents();
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-start p-0 bg-black/50 backdrop-blur-sm">
      <div className="relative flex flex-col w-full max-w-md h-full bg-slate-800 border-r border-slate-600/50 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-slate-800/90 backdrop-blur-sm p-4 border-b border-slate-700/50 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Special Events</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-purple-200 transition-colors p-2 hover:bg-white/10 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="h-full overflow-y-auto p-4">
            <div className="space-y-4">
            {processedEvents.map((event) => (
              <div key={event.id} className="group">
                {/* Event Card */}
                <div 
                  className="relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 bg-slate-700/50 hover:bg-slate-700/70 border border-slate-600/50 group"
                  onClick={() => toggleEvent(event.id)}
                >
                  {/* Full-width Event Banner */}
                  <div className="relative w-full h-32 overflow-hidden">
                    <img 
                      src={event.image.startsWith('http') ? event.image : `https://via.placeholder.com/1200x300/1e293b/64748b?text=${encodeURIComponent(event.title)}`}
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.onerror = null;
                        target.src = `https://via.placeholder.com/1200x300/1e293b/64748b?text=${encodeURIComponent(event.title)}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-bold text-white drop-shadow-lg">{event.title}</h3>
                      <p className="text-xs text-slate-300">
                        {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
                      </p>
                    </div>
                    <ChevronRight 
                      className={`absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-white/80 transition-transform duration-300 ${
                        expandedEvent === event.id ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`} 
                    />
                  </div>
                  
                  <div className="p-4">
                      
                      {/* Event Info - Moved to banner */}
                    </div>
                    
                    {/* Expanded Content */}
                    {expandedEvent === event.id && (
                      <div className="mt-4 pt-4 border-t border-slate-700/50">
                        <p className="text-sm text-slate-300 mb-4">{event.description}</p>
                        
                        {/* Rewards */}
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-white mb-3">Event Rewards</h4>
                          <div className="grid grid-cols-2 gap-4">
                            {/* Premium Reward */}
                            {event.rewards.premium[0] && (
                              <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-900/10 border border-yellow-800/50 rounded-lg p-3">
                                <div className="flex items-center justify-center mb-2">
                                  <Gift className="w-8 h-8 text-yellow-400" />
                                </div>
                                <div className="text-center">
                                  <span className="text-xs font-medium text-yellow-400">MAIN REWARD</span>
                                  <p className="text-sm text-yellow-300 font-medium mt-1">
                                    {event.rewards.premium[0].split(':')[0]}
                                  </p>
                                </div>
                              </div>
                            )}
                            
                            {/* Free Reward */}
                            {event.rewards.free[0] && (
                              <div className="bg-gradient-to-br from-green-900/30 to-green-900/10 border border-green-800/50 rounded-lg p-3">
                                <div className="flex items-center justify-center mb-2">
                                  <Gift className="w-8 h-8 text-green-400" />
                                </div>
                                <div className="text-center">
                                  <span className="text-xs font-medium text-green-400">FREE REWARD</span>
                                  <p className="text-sm text-green-300 font-medium mt-1">
                                    {event.rewards.free[0].split(':')[0]}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Vehicles */}
                        <div>
                          <h4 className="text-sm font-medium text-white mb-3">Featured Vehicles ({event.vehicles.length})</h4>
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                            {event.vehicles.map((vehicle, idx) => {
                              const vehicleData = typeof vehicle === 'object' ? vehicle : null;
                              const vehicleName = vehicleData?.name || String(vehicle);
                              const vehicleImage = vehicleData?.image || `https://via.placeholder.com/80/1e293b/64748b?text=${encodeURIComponent(vehicleName.split(' ')[0])}`;
                              const country = vehicleData?.faction || 'Unknown';
                              
                              return (
                                <div key={idx} className="bg-slate-800/50 rounded-lg p-2 hover:bg-slate-700/70 transition-colors">
                                  <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-slate-700/50 mb-2">
                                    <img
                                      src={vehicleImage}
                                      alt={vehicleName}
                                      className="w-full h-full object-cover"
                                      onError={(e) => {
                                        const target = e.currentTarget as HTMLImageElement;
                                        target.onerror = null;
                                        target.src = `https://via.placeholder.com/80/1e293b/64748b?text=${encodeURIComponent(vehicleName.split(' ')[0])}`;
                                      }}
                                    />
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium text-white truncate" title={vehicleName}>
                                      {vehicleName}
                                    </p>
                                    <p className="text-[10px] text-slate-400">
                                      {country}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Vehicles List - Animated */}
                <AnimatePresence>
                  {expandedEvent === event.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pr-2 py-2 space-y-2 border-t border-slate-700/50">
                        {event.vehicles.map((vehicle, index) => (
                            <div 
                              key={index}
                              className="flex items-center p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer group"
                              onClick={(e) => {
                                e.stopPropagation();
                                const vehicleName = typeof vehicle === 'string' ? vehicle : vehicle.name;
                                onVehicleSelect(vehicleName);
                                onClose();
                              }}
                            >
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-white text-sm">
                                  {typeof vehicle === 'string' ? vehicle : vehicle.name}
                                </h4>
                              </div>
                              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors flex-shrink-0" />
                            </div>
                        ))}
                        
                        {/* Rewards Preview */}
                        <div className="mt-2 pt-2 border-t border-slate-700/50">
                          <div className="flex items-center text-[11px] text-slate-400 mb-1.5">
                            <span>Event Rewards</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {[...event.rewards.premium.slice(0, 2), ...event.rewards.free.slice(0, 1)].map((reward, i) => (
                              <span 
                                key={i} 
                                className={`text-[10px] px-1.5 py-0.5 rounded ${
                                  i < 2 
                                    ? 'bg-yellow-600/20 text-yellow-300 border border-yellow-600/30' 
                                    : 'bg-slate-600/30 text-slate-300 border border-slate-600/50'
                                }`}
                              >
                                {reward.split(':')[0]}
                              </span>
                            ))}
                            {event.rewards.premium.length + event.rewards.free.length > 3 && (
                              <span className="text-[10px] text-slate-500 ml-0.5">
                                +{event.rewards.premium.length + event.rewards.free.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
