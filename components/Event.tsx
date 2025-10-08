import React, { useState, useEffect } from "react";
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

interface Vehicle {
  id: number;
  name: string;
  type: 'free' | 'main' | 'gacha';
  faction?: string;
  tier?: string | number;
  role?: string;
}

interface Event {
  id: number;
  name: string;
  image: string;
  startDate: string;
  endDate: string;
  vehicles: Vehicle[];
}

// Import vehicle data from mwt-vehicle-stats
declare const VEHICLES: any[];

interface EventListProps {
  onVehicleSelect?: (vehicleName: string) => void;
}

const EventList: React.FC<EventListProps> = ({ onVehicleSelect }) => {
  const [vehiclesData, setVehiclesData] = useState<any[]>([]);
  
  useEffect(() => {
    // This will be populated by the parent component
    if (typeof VEHICLES !== 'undefined') {
      setVehiclesData(VEHICLES);
    }
  }, []);
  
  const getVehicleInfo = (vehicleName: string) => {
    // First try to find the exact match in vehiclesData
    let vehicle = vehiclesData.find(v => v.name === vehicleName);
    
    // If not found, try case-insensitive search
    if (!vehicle) {
      vehicle = vehiclesData.find(v => 
        v.name.toLowerCase() === vehicleName.toLowerCase()
      );
    }
    
    // Generate image name in format K21-KNIFV.jpg
    const generateImageName = (name: string) => {
      // First, handle special cases and replacements
      let processedName = name
        .replace(/[^\w\s-]/g, '')  // Remove special characters
        .replace(/\s+/g, '-')       // Replace spaces with hyphens
        .replace(/-+/g, '-')        // Replace multiple hyphens with single
        .replace(/^-+|-+$/g, '')    // Remove leading/trailing hyphens
        .toUpperCase();             // Convert to uppercase
      
      console.log(`Generated image name for "${name}":`, processedName);
      return processedName;
    };
    
    const imageName = generateImageName(vehicleName);
    // Paths are relative to the public directory
    const imagePath = `/vehicles/${imageName}.jpg`;
    const thumbnailPath = `/vehicles/thumbnails/${imageName}.jpg`;
    
    console.log(`Looking for vehicle images at:`, { imagePath, thumbnailPath });
    
    // If vehicle not found, return with generated image path
    if (!vehicle) {
      console.warn(`Vehicle not found: ${vehicleName}`);
      return { 
        name: vehicleName,
        image: imagePath,
        thumbnail: imagePath
      };
    }
    
    console.log(`Vehicle: ${vehicleName}`, {
      image: imagePath,
      thumbnail: thumbnailPath,
      found: !!vehicle
    });
    
    return {
      ...vehicle,
      name: vehicle.name || vehicleName, // Ensure we always have a name
      image: imagePath,
      thumbnail: thumbnailPath
    };
  };
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  
  // Event data with actual vehicle references
  const events: Event[] = [
  {
    id: 22,
    name: "Great Middle of Autumn",
    image: "/Events/Great-Middle-of-Autumn.jpg",
    startDate: "2025-10-01",
    endDate: "2025-10-12",
    vehicles: [
      { id: 1, name: "K21 KNIFV", type: "free" },
      { id: 2, name: "K2 Black Panther", type: "main" },
    ],
  },
  {
    id: 21,
    name: "Octoberfest",
    image: "/Events/Octoberfest.jpg",
    startDate: "2025-09-18",
    endDate: "2025-09-30",
    vehicles: [
      { id: 3, name: "Strf 9040 BILL", type: "free" },
      { id: 4, name: "Leopard 2 A-RC 3.0", type: "main" },
    ],
  },
  {
    id: 20,
    name: "Grape Symphony",
    image: "/Events/Grape-Symphony.jpg",
    startDate: "2025-09-05",
    endDate: "2025-09-17",
    vehicles: [
      { id: 5, name: "Centauro I 120", type: "free" },
      { id: 6, name: "Challenger 3", type: "main" },
    ],
  },
  {
    id: 19,
    name: "Operation Zafer",
    image: "/Events/Operation-Zafer.jpg",
    startDate: "2025-08-29",
    endDate: "2025-09-04",
    vehicles: [
      { id: 7, name: "M60A3 MZK", type: "free" },
      { id: 8, name: "Altay", type: "main" },
    ],
  },
  {
    id: 18,
    name: "Winged March",
    image: "/Events/Winged-March.jpg",
    startDate: "2025-08-14",
    endDate: "2025-08-28",
    vehicles: [
      { id: 9, name: "PT-91", type: "free" },
      { id: 10, name: "PL-01", type: "main" },
    ],
  },
  {
    id: 17,
    name: "Hunting for the Legend",
    image: "/Events/Hunting-for-the-Legend.jpg",
    startDate: "2025-08-09",
    endDate: "2025-08-24",
    vehicles: [
      { id: 11, name: "T-72A", type: "free" },
    ],
  },
  {
    id: 16,
    name: "Long March",
    image: "/Events/Long-March.jpg",
    startDate: "2025-07-31",
    endDate: "2025-08-13",
    vehicles: [
      { id: 12, name: "WMA301", type: "free" },
      { id: 13, name: "FK-2000", type: "main" },
    ],
  },
  {
    id: 15,
    name: "Time of Change",
    image: "/Events/Time-of-Change.jpg",
    startDate: "2025-07-14",
    endDate: "2025-07-30",
    vehicles: [
      { id: 14, name: "VCBI-2", type: "free" },
      { id: 15, name: "Leclerc S2 AZUR", type: "main" },
    ],
  },
  {
    id: 14,
    name: "Thunder of Freedom",
    image: "/Events/Thunder-of-Freedom.jpg",
    startDate: "2025-06-30",
    endDate: "2025-07-13",
    vehicles: [
      { id: 16, name: "M109A6 Paladin", type: "free" },
      { id: 17, name: "MGM-166 LOSAT", type: "main" },
    ],
  },
  {
    id: 13,
    name: "Summer's Heyday",
    image: "/Events/Summer-Heyday.jpg",
    startDate: "2025-06-12",
    endDate: "2025-06-29",
    vehicles: [
      { id: 18, name: "Rooikat MTTD", type: "free" },
      { id: 19, name: "Challenger 3", type: "main" },
    ],
  },
  {
    id: 12,
    name: "Rise of the Dragon",
    image: "/Events/Rise-of-the-Dragon.jpg",
    startDate: "2025-05-30",
    endDate: "2025-06-12",
    vehicles: [
      { id: 20, name: "ZTZ96A (P)", type: "free" },
      { id: 21, name: "SR-5 GMLRS", type: "main" },
    ],
  },
  {
    id: 11,
    name: "Eagle's Vigil",
    image: "/Events/Eagle's-Vigil.jpg",
    startDate: "2025-05-15",
    endDate: "2025-05-29",
    vehicles: [
      { id: 22, name: "XM2001 Crusader", type: "free" },
      { id: 23, name: "M270 MLRS", type: "main" },
    ],
  },
  {
    id: 10,
    name: "Victory Day",
    image: "/Events/Victory-Day.jpg",
    startDate: "2025-05-08",
    endDate: "2025-05-14",
    vehicles: [
      { id: 24, name: "T-90A", type: "free" },
      { id: 25, name: "M1A1 Abrams", type: "free" },
      { id: 26, name: "FV4034 Challenger 2", type: "main" },
    ],
  },
  {
    id: 9,
    name: "Golden Week",
    image: "/Events/Golden-Week.jpg",
    startDate: "2025-04-28",
    endDate: "2025-05-07",
    vehicles: [
      { id: 27, name: "K-31 Cheonma", type: "free" },
      { id: 28, name: "J-50 Trident", type: "main" },
      { id: 29, name: "Type 90", type: "gacha" },
    ],
  },
  {
    id: 8,
    name: "Spring Surge",
    image: "/Events/Spring-Surge.jpg",
    startDate: "2025-04-11",
    endDate: "2025-04-27",
    vehicles: [
      { id: 30, name: "Leopard 2A4", type: "free" },
      { id: 31, name: "T-104 Bastion", type: "main" },
    ],
  },
  {
    id: 7,
    name: "Battle Spirit",
    image: "/Events/Battle-Spirit.jpg",
    startDate: "2025-04-01",
    endDate: "2025-04-10",
    vehicles: [
      { id: 32, name: "AFT-09", type: "free" },
      { id: 33, name: "T-20 Monolith", type: "main" },
    ],
  },
  {
    id: 6,
    name: "Lucky Strike",
    image: "/Events/Lucky-Strike.jpg",
    startDate: "2025-03-14",
    endDate: "2025-03-30",
    vehicles: [
      { id: 34, name: "AFT-10", type: "free" },
      { id: 35, name: "FV4034 Challenger 2", type: "main" },
    ],
  },
  {
    id: 5,
    name: "Carnival of Fire",
    image: "/Events/Carnival-of-Fire.jpg",
    startDate: "2025-02-28",
    endDate: "2025-03-13",
    vehicles: [
      { id: 36, name: "M113 Hellfire", type: "free" },
      { id: 37, name: "PL-01", type: "main" },
    ],
  },
  {
    id: 4,
    name: "Lunar Dawn",
    image: "/Events/Lunar-Dawn.jpg",
    startDate: "2026-01-24",
    endDate: "2026-02-13",
    vehicles: [
      { id: 38, name: "Type 89 MLRS", type: "free" },
      { id: 39, name: "J-50", type: "main" },
      { id: 40, name: "F-4E", type: "gacha" },
      { id: 41, name: "Mig-35", type: "gacha" },
      { id: 42, name: "J-10", type: "gacha" },
      { id: 43, name: "AV88 Harrier", type: "gacha" },
    ],
  },
  {
    id: 2,
    name: "Frozen Frontlines",
    image: "/Events/Frozen-Frontlines.jpg",
    startDate: "2025-12-13",
    endDate: "2026-01-06",
    vehicles: [
      { id: 47, name: "Type 74E", type: "free" },
      { id: 48, name: "BM-57-2 Kochevnik", type: "main" },
      { id: 49, name: "ZSU-57-2", type: "gacha" },
      { id: 50, name: "M113A1 FMS AIFV", type: "gacha" },
      { id: 51, name: "BTR-80", type: "gacha" },
      { id: 52, name: "LAV-25", type: "gacha" },
    ],
  },
  ];
  
  // Enrich event vehicles with data from VEHICLES
  const enrichedEvents = events.map(event => ({
    ...event,
    vehicles: event.vehicles.map(vehicle => ({
      ...vehicle,
      ...getVehicleInfo(vehicle.name)
    }))
  }));

  const router = useRouter();

  const toggleExpand = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedEvent(expandedEvent === id ? null : id);
  };

  const handleVehicleClick = (vehicleName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onVehicleSelect) {
      onVehicleSelect(vehicleName);
    } else if (typeof window !== 'undefined') {
      // Fallback in case onVehicleSelect is not provided
      window.location.href = `/?search=${encodeURIComponent(vehicleName)}`;
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const renderEventCard = (event: Event) => (
    <div key={event.id} className="space-y-2">
      <div
        className="relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50 shadow-lg"
        onClick={(e) => toggleExpand(event.id, e)}
      >
        {/* Large Event Image */}
        <div className="relative w-full h-48 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://via.placeholder.com/800x300/1e293b/64748b?text=Event';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-2xl font-bold text-white mb-1">{event.name}</h3>
            <div className="text-sm text-slate-200">
              <p>{formatDate(event.startDate)} - {formatDate(event.endDate)}</p>
            </div>
          </div>
        </div>
        
        {/* Expand/Collapse Indicator */}
        <div className="flex items-center justify-center py-2 bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
          <ChevronDown 
            className={`w-5 h-5 text-slate-300 transition-transform duration-300 ${expandedEvent === event.id ? 'rotate-180' : ''}`}
          />
        </div>
      </div>
      
      {/* Expanded Content */}
      <AnimatePresence>
        {expandedEvent === event.id && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-3">
              <h5 className="text-sm font-semibold text-purple-300 mb-3">Featured Vehicles:</h5>
              {event.vehicles.map((vehicle, i) => {
                const vehicleData = getVehicleInfo(vehicle.name);
                const typeStyles = {
                  free: {
                    text: 'text-green-400',
                    bg: 'bg-green-900/20',
                    border: 'border-green-500/30'
                  },
                  main: {
                    text: 'text-orange-400',
                    bg: 'bg-orange-900/20',
                    border: 'border-orange-500/30'
                  },
                  gacha: {
                    text: 'text-purple-400',
                    bg: 'bg-purple-900/20',
                    border: 'border-purple-500/30'
                  }
                }[vehicle.type] || {};

                return (
                  <div 
                    key={`${event.id}-${i}`}
                    className={`p-3 rounded-lg border ${typeStyles.border} ${typeStyles.bg} hover:border-purple-500/50 transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-purple-500/10`}
                    onClick={(e) => handleVehicleClick(vehicle.name, e)}
                  >
                    <div className="flex items-start gap-3">
                      {/* Vehicle Image */}
                      <div className="flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 rounded-md overflow-hidden border border-slate-600/50 bg-slate-800/50">
                        <div className="relative w-full h-full">
                          {!imageError[vehicle.id] ? (
                            <img
                              src={`/vehicles/${formatVehicleImageName(vehicle.name)}.jpg`}
                              alt={vehicle.name}
                              className="w-full h-full object-cover"
                              onError={() => setImageError(prev => ({ ...prev, [vehicle.id]: true }))}
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-800/80 text-xs text-slate-300">
                              {vehicle.name
                                .split(' ')
                                .map(word => word[0])
                                .join('')
                                .toUpperCase()}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Vehicle Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-1">
                          <span className={`font-medium ${typeStyles.text}`}>
                            {vehicle.name}
                          </span>
                          {vehicle.faction && (
                            <span className="text-xs px-1.5 py-0.5 rounded bg-slate-700/50 text-slate-300">
                              {vehicle.faction}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-slate-400">
                            {vehicle.type.charAt(0).toUpperCase() + vehicle.type.slice(1)} Vehicle
                          </span>
                          
                          {vehicle.tier && (
                            <div className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                              vehicle.tier === 'IV' ? 'bg-purple-600 text-white' :
                              vehicle.tier === 'III' ? 'bg-blue-600 text-white' :
                              vehicle.tier === 'II' ? 'bg-green-600 text-white' :
                              'bg-gray-600 text-white'
                            }`}>
                              Tier {vehicle.tier}
                            </div>
                          )}
                        </div>
                        
                        {vehicle.role && (
                          <div className="mt-1 text-xs text-slate-400">
                            Role: {vehicle.role}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  // Get current date to check active events
  const currentDate = new Date();
  
  // Show all events as current
  const filteredEvents = [...enrichedEvents];
  
  // If no current events, show a message
  if (filteredEvents.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-6">
        <div className="bg-slate-800/80 rounded-lg p-8 max-w-2xl w-full">
          <h2 className="text-2xl font-bold text-white mb-4">No Active Events</h2>
          <p className="text-slate-300 mb-6">There are currently no active events. Please check back later for upcoming events!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Events</h2>
      <div className="space-y-8">
        {filteredEvents.map((event) => renderEventCard(event))}
      </div>
    </div>
  );
};

export default EventList;
