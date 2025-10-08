import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// Lazy load components that might cause issues on the server
const ChevronDown = dynamic(() => import('lucide-react').then(mod => mod.ChevronDown), { ssr: false });
const AnimatePresence = dynamic(() => import('framer-motion').then(mod => mod.AnimatePresence), { ssr: false });
const motion = {
  div: dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false })
};

type VehicleType = 'free' | 'main' | 'gacha';

interface Vehicle extends VehicleData {
  type: VehicleType;
  image?: string;
  thumbnail?: string;
}

interface Event {
  id: number;
  name: string;
  image: string;
  startDate: string; // Expected format: YYYY-MM-DD
  endDate: string;   // Expected format: YYYY-MM-DD
  vehicles: Vehicle[];
}

interface VehicleData {
  id: number;
  name: string;
  type?: string;
  faction?: string;
  tier?: string | number;
  role?: string;
}

interface EventListProps {
  onVehicleSelect?: (vehicleName: string) => void;
}

// Default vehicle data in case VEHICLES is not available
declare global {
  interface Window {
    VEHICLES?: VehicleData[];
  }
}

const DEFAULT_VEHICLES: VehicleData[] = [];

const EventList: React.FC<EventListProps> = ({ onVehicleSelect }) => {
  const [vehiclesData, setVehiclesData] = useState<VehicleData[]>(DEFAULT_VEHICLES);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Load vehicles data safely
  useEffect(() => {
    try {
      setIsClient(true);
      
      const loadVehicles = () => {
        try {
          // Try to get vehicles from window object (client-side)
          if (typeof window !== 'undefined' && window.VEHICLES) {
            return Array.isArray(window.VEHICLES) ? window.VEHICLES : [];
          }
          // Fallback to module-scoped VEHICLES if available
          if (typeof VEHICLES !== 'undefined') {
            return Array.isArray(VEHICLES) ? VEHICLES : [];
          }
          return [];
        } catch (e) {
          console.warn('Error loading vehicle data:', e);
          return [];
        }
      };
      
      setVehiclesData(loadVehicles());
      setError(null);
    } catch (err) {
      console.error('Error in vehicle data initialization:', err);
      setError('Failed to load vehicle data. Some features may be limited.');
      setVehiclesData([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Memoize the vehicle info getter
  const getVehicleInfo = useCallback((vehicleName: string): Vehicle => {
    if (!vehicleName) {
      return {
        id: 0,
        name: 'Unknown Vehicle',
        type: 'free',
        image: '/vehicles/placeholder.jpg',
        thumbnail: '/vehicles/thumbnails/placeholder.jpg'
      };
    }

    // Find vehicle by name (case insensitive)
    const vehicle = vehiclesData.find(v => 
      v.name?.toLowerCase() === vehicleName.toLowerCase()
    );

    // Generate safe image paths
    const generateImageName = (name: string): string => {
      if (!name) return 'placeholder';
      return name
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '')
        .toUpperCase();
    };

    const imageName = generateImageName(vehicleName);
    
    return {
      id: vehicle?.id || 0,
      name: vehicle?.name || vehicleName,
      type: (vehicle?.type as VehicleType) || 'free',
      faction: vehicle?.faction,
      tier: vehicle?.tier,
      role: vehicle?.role,
      image: `/vehicles/${imageName}.jpg`,
      thumbnail: `/vehicles/thumbnails/${imageName}.jpg`
    };
  }, [vehiclesData]);

  const toggleExpand = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedEvent(expandedEvent === id ? null : id);
  };

  const handleVehicleClick = (vehicleName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onVehicleSelect) {
      onVehicleSelect(vehicleName);
    } else if (typeof window !== 'undefined') {
      window.location.href = `/?search=${encodeURIComponent(vehicleName)}`;
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const toggleVehicleImageError = (vehicleId: number) => {
    setImageError(prev => ({ ...prev, [vehicleId]: true }));
  };

  const renderEventCard = (event: Event) => (
    <div key={event.id} className="space-y-2">
      <div
        className="relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50 shadow-lg"
        onClick={(e) => toggleExpand(event.id, e)}
      >
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

        <div className="flex items-center justify-center py-2 bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
          <ChevronDown 
            className={`w-5 h-5 text-slate-300 transition-transform duration-300 ${expandedEvent === event.id ? 'rotate-180' : ''}`}
          />
        </div>
      </div>

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
                  free: { text: 'text-green-400', bg: 'bg-green-900/20', border: 'border-green-500/30' },
                  main: { text: 'text-orange-400', bg: 'bg-orange-900/20', border: 'border-orange-500/30' },
                  gacha: { text: 'text-purple-400', bg: 'bg-purple-900/20', border: 'border-purple-500/30' }
                }[vehicle.type] || {};

                const vehicleImageName = vehicle.name
                  .toUpperCase()
                  .replace(/[^A-Z0-9\s]/g, '')
                  .replace(/\s+/g, '-');

                const imagePath = `/vehicles/${vehicleImageName}.jpg`;
                const hasError = imageError[vehicle.id];

                return (
                  <div 
                    key={`${event.id}-${i}`}
                    className={`p-2 sm:p-3 rounded-lg border ${typeStyles.border} ${typeStyles.bg} hover:border-purple-500/50 transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-purple-500/10`}
                    onClick={(e) => handleVehicleClick(vehicle.name, e)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleVehicleClick(vehicle.name, e);
                      }
                    }}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div 
                        className="flex-shrink-0 w-14 h-10 xs:w-16 xs:h-12 sm:w-20 sm:h-16 rounded-md overflow-hidden border border-slate-600/50 bg-slate-800/50"
                        aria-label={`${vehicle.name} image`}
                      >
                        <div className="relative w-full h-full">
                          {!hasError ? (
                            <img
                              src={imagePath}
                              alt={`${vehicle.name}`}
                              className="w-full h-full object-cover"
                              onError={() => toggleVehicleImageError(vehicle.id)}
                              loading="lazy"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-800/80 text-[10px] xs:text-xs text-slate-300">
                              {vehicle.name.split(' ').map(word => word[0]).join('').toUpperCase()}
                            </div>
                          )}
                        </div>
                      </div>
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

  // All events in chronological order
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
    image: "/Events/Eagle’s-Vigil.jpg",
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

  // Format date to YYYY-MM-DD without time
  const formatDate = useCallback((dateString: string): string => {
    try {
      if (!dateString) return 'Date not available';
      
      // Handle both YYYY-MM-DD and other formats
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString; // Return original if invalid
      
      return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD
    } catch (e) {
      console.warn('Error formatting date:', e);
      return dateString || 'Invalid date';
    }
  }, []);

  // Toggle event expansion
  const toggleExpand = useCallback((id: number, e: React.MouseEvent) => {
    e?.stopPropagation();
    setExpandedEvent(prev => prev === id ? null : id);
  }, []);

  // Handle vehicle click
  const handleVehicleClick = useCallback((vehicleName: string, e: React.MouseEvent) => {
    e?.stopPropagation();
    
    if (onVehicleSelect) {
      onVehicleSelect(vehicleName);
      return;
    }
    
    // Fallback to URL-based navigation
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set('search', vehicleName);
      window.history.pushState({}, '', `?${searchParams.toString()}`);
    }
  }, [onVehicleSelect]);

  // Safely enrich events with vehicle data
  const enrichedEvents = useMemo(() => {
    if (!isClient || isLoading) return [];
    
    try {
      return events.map(event => ({
        ...event,
        startDate: formatDate(event.startDate),
        endDate: formatDate(event.endDate),
        vehicles: event.vehicles.map(vehicle => ({
          ...getVehicleInfo(vehicle.name),
          ...vehicle // Allow event-specific overrides
        }))
      }));
    } catch (err) {
      console.error('Error enriching events:', err);
      setError('Failed to load events. Some data may be incomplete.');
      return [];
    }
  }, [isClient, isLoading, events, vehiclesData, getVehicleInfo, formatDate]);

  // Render event card with error boundaries
  const renderEventCard = (event: Event) => {
    const isExpanded = expandedEvent === event.id;
    
    return (
      <div key={event.id} className="space-y-2">
        <div
          className="relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50 shadow-lg"
          onClick={(e) => toggleExpand(event.id, e)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleExpand(event.id, e as any)}
        >
          {/* Event Header */}
          <div className="relative w-full h-48 overflow-hidden">
            <img 
              src={event.image} 
              alt={event.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = '/images/event-placeholder.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-2xl font-bold text-white mb-1">{event.name}</h3>
              <div className="text-sm text-slate-200">
                <p>{event.startDate} - {event.endDate}</p>
              </div>
            </div>
          </div>
          
          {/* Expand/Collapse Indicator */}
          <div className="flex items-center justify-center py-2 bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
            <ChevronDown 
              className={`w-5 h-5 text-slate-300 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Event Content */}
        <AnimatePresence>
          {isExpanded && (
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
                  const hasImageError = imageError[vehicle.id];
                  const typeStyles = {
                    free: { text: 'text-green-400', bg: 'bg-green-900/20', border: 'border-green-500/30' },
                    main: { text: 'text-orange-400', bg: 'bg-orange-900/20', border: 'border-orange-500/30' },
                    gacha: { text: 'text-purple-400', bg: 'bg-purple-900/20', border: 'border-purple-500/30' }
                  }[vehicle.type] || {};

                  return (
                    <div 
                      key={`${event.id}-${i}`}
                      className={`p-3 rounded-lg border ${typeStyles.border} ${typeStyles.bg} hover:border-purple-500/50 transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-purple-500/10`}
                      onClick={(e) => handleVehicleClick(vehicle.name, e)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleVehicleClick(vehicle.name, e as any)}
                    >
                      <div className="flex items-center gap-3">
                        {/* Vehicle Image */}
                        <div className="flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 rounded-md overflow-hidden border border-slate-600/50 bg-slate-800/50">
                          <div className="relative w-full h-full">
                            {!hasImageError ? (
                              <img
                                src={vehicle.image}
                                alt={vehicle.name}
                                className="w-full h-full object-cover"
                                onError={() => setImageError(prev => ({ ...prev, [vehicle.id]: true }))}
                                loading="lazy"
                              />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center bg-slate-800/80 text-xs text-slate-300">
                                {vehicle.name.split(' ').map(w => w[0]).join('').toUpperCase()}
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
  };

  // Main component render
  return (
    <div className="space-y-6 max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Events</h2>
      
      {isLoading ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mb-4"></div>
          <p className="text-slate-300">Loading events...</p>
        </div>
      ) : error ? (
        <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6 max-w-2xl mx-auto my-8">
          <h3 className="text-xl font-bold text-red-400 mb-2">Error Loading Events</h3>
          <p className="text-slate-300 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
          >
            Try Again
          </button>
        </div>
      ) : enrichedEvents.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
          <p className="text-slate-400">No events available at the moment.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {enrichedEvents.map(event => (
            <React.Fragment key={event.id}>
              {renderEventCard(event)}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
