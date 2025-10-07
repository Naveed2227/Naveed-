import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Gift } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Vehicle {
  id: string;
  name: string;
  image: string;
  type: string;
  nation: string;
  tier: string;
  rarity?: string;
}

interface EventData {
  id: number;
  title: string;
  month: string;
  image: string;
  vehicles: string[];
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
    title: "Summer Showdown",
    month: "July 2025",
    image: "https://via.placeholder.com/400x200/1e293b/64748b?text=Summer+Event",
    description: "Special summer event with exclusive vehicles and rewards!",
    startDate: "2025-07-01",
    endDate: "2025-07-31",
    vehicles: [
      "T-14 Armata",
      "M1A3 Abrams",
      "Leopard 2A8",
      "Type 10 Kai"
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

export const EventComponent: React.FC<EventComponentProps> = ({ onClose, onVehicleSelect }) => {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const router = useRouter();

  // Toggle expanded state for an event
  const toggleEvent = (eventId: number) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-start p-0 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md h-full bg-slate-800 border-r border-slate-600/50 shadow-2xl overflow-y-auto">
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

        <div className="h-full overflow-y-auto p-4 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="space-y-4">
            {EVENTS.map((event) => (
              <div key={event.id} className="group">
                {/* Event Card */}
                <div 
                  className="relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 bg-slate-700/50 hover:bg-slate-700/70 border border-slate-600/50"
                  onClick={() => toggleEvent(event.id)}
                >
                  <div className="flex items-center p-3">
                    {/* Event Thumbnail */}
                    <div className="relative w-16 h-12 flex-shrink-0 mr-3 rounded overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.onerror = null;
                          target.src = 'https://via.placeholder.com/100x75/1e293b/64748b?text=Event';
                        }}
                      />
                    </div>
                    
                    {/* Event Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-white truncate">{event.title}</h3>
                        <span className="ml-2 px-1.5 py-0.5 rounded text-xs font-medium bg-slate-600/50 text-slate-300">
                          {event.vehicles.length}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{event.month}</p>
                    </div>
                    
                    {/* Expand/Collapse Indicator */}
                    <ChevronRight 
                      className={`w-4 h-4 ml-2 text-slate-400 transition-transform duration-300 ${expandedEvent === event.id ? 'rotate-90' : ''}`} 
                    />
                  </div>
                
                {/* Vehicles List - Animated */}
                <AnimatePresence>
                  {expandedEvent === event.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pr-2 py-2 space-y-2 border-t border-slate-700/50">
                        {event.vehicles.map((vehicleName, index) => (
                          <div
                            key={index}
                            className="flex items-center p-2 bg-slate-600/20 rounded-md hover:bg-slate-600/40 transition-colors cursor-pointer group"
                            onClick={(e) => {
                              e.stopPropagation();
                              onVehicleSelect(vehicleName);
                              onClose();
                            }}
                          >
                            <div className="relative w-12 h-9 flex-shrink-0 mr-2 bg-slate-700/50 rounded">
                              <img
                                src={`https://via.placeholder.com/80/1e293b/64748b?text=${encodeURIComponent(vehicleName.split(' ')[0])}`}
                                alt={vehicleName}
                                className="w-full h-full object-contain p-0.5"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="font-medium text-white text-xs truncate">
                                  {vehicleName}
                                </h4>
                                <span className="ml-2 px-1 py-0.5 rounded text-[10px] font-medium bg-slate-700/50 text-slate-300">
                                  T{8 + (index % 3)}
                                </span>
                              </div>
                              <div className="flex items-center mt-0.5">
                                <span className="text-[10px] text-slate-400">
                                  {['USA', 'Russia', 'Germany', 'UK', 'France', 'Japan'][index % 6]}
                                </span>
                              </div>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-500 ml-1 group-hover:text-purple-400 transition-colors flex-shrink-0" />
                          </div>
                        ))}
                        
                        {/* Rewards Preview */}
                        <div className="mt-2 pt-2 border-t border-slate-700/50">
                          <div className="flex items-center text-[11px] text-slate-400 mb-1.5">
                            <Gift className="w-3 h-3 mr-1.5 text-yellow-400" />
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
  );
};

export default EventComponent;
