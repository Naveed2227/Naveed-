"use client"
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { BotMessageSquareIcon, X, Send, Search, Bot, CalendarSearchIcon, Calendar, ChevronDown, ChevronRight, Trophy, Menu, Languages, Filter, Star, MapPin, Camera, Heart, Gift, CalendarDays, Share2 as Share } from "lucide-react"

interface Vehicle {
  id: number;
  name: string;
  type: "free" | "main" | "gacha";
}

interface Event {
  id: number;
  name: string;
  image: string;
  startDate: string;
  endDate: string;
  vehicles: Vehicle[];
}

// All events in chronological order
const events: Event[] = [
  {
    id: 29,
    name: "Steel Winter Stage 2",
    image: "/Events/Steel-Winter-2.jpg",
    startDate: "2025-12-26",
    endDate: "2026-1-11",
    vehicles: [
      { id: 1, name: "K21 KNIFV", type: "free" },
      { id: 2, name: "Leopard 2A-RC 3.0", type: "gacha" },
    
    ],
  },
  {
    id: 28,
    name: "Steel Winter",
    image: "/Events/Steel-Winter.jpg",
    startDate: "2025-11-8",
    endDate: "2025-12-25",
    vehicles: [
      { id: 1, name: "RAH-66 Comanche", type: "free" },
      { id: 2, name: "J-50", type: "gacha" },
    
    ],
  },
  {
    id: 27,
    name: "Brave Army",
    image: "/Events/Brave-army.jpg",
    startDate: "2025-11-8",
    endDate: "2025-12-18",
    vehicles: [
      { id: 1, name: "FV101 Scorpion-90", type: "free" },
      { id: 2, name: "Leopard 2 Revolution", type: "gacha" },
    
    ],
  },
{
    id: 26,
    name: "Festive Dinner",
    image: "/Events/Festive-Dinner.jpg",
    startDate: "2025-11-26",
    endDate: "2025-12-7",
    vehicles: [
      { id: 1, name: "M60A3 TTS", type: "free" },
      { id: 2, name: "M10 Booker", type: "gacha" },
      { id: 3, name: "MGM-166 LOSAT", type: "bundle" },
    ],
  },
{
    id: 25,
    name: "MWT Turns One (Stage 2)",
    image: "/Events/MWT-Turns-One.jpg",
    startDate: "2025-11-13",
    endDate: "2025-11-25",
    vehicles: [
      { id: 1, name: "Leclerc S2 AZUR", type: "free" },
      { id: 2, name: "BM-57-2 Kochevnik", type: "gacha" },
    ],
  },
{
    id: 24,
    name: "MWT Turns One (Stage 1)",
    image: "/Events/MWT-Turns-One.jpg",
    startDate: "2025-11-3",
    endDate: "2025-11-12",
    vehicles: [
      { id: 1, name: "Merkava Mk.3", type: "free" },
      { id: 2, name: "M1 Abrams Block 3", type: "free" },
      { id: 3, name: "Altay", type: "gacha" },
    ],
  },
{
    id: 23,
    name: "Light and Shadow",
    image: "/Events/Light-and-Shadow.jpg",
    startDate: "2025-11-1",
    endDate: "2025-11-9",
    vehicles: [
      { id: 1, name: "ERC-90 F4 Sagaie", type: "bundle" },
      { id: 2, name: "F-5E Tiger II", type: "bundle" },
    ],
  },
{
    id: 22,
    name: "Halloween",
    image: "/Events/Halloween.jpg",
    startDate: "2025-10-16",
    endDate: "2025-11-10",
    vehicles: [
      { id: 1, name: "Leopard 2A4", type: "free" },
      { id: 2, name: "MGM-166 LOSAT", type: "gacha" },
    ],
  },
 {
    id: 21,
    name: "Brightest Light",
    image: "/Events/Brightest-Light.jpg",
    startDate: "2025-10-13",
    endDate: "2025-10-22",
    vehicles: [
      { id: 1, name: "9K31 Strela-1", type: "free" },
      { id: 2, name: "Arjun Mk.2", type: "gacha" },
    ],
  },
  {
    id: 20,
    name: "Great Middle of Autumn",
    image: "/Events/Great-Middle-of-Autumn.jpg",
    startDate: "2025-10-01",
    endDate: "2025-10-12",
    vehicles: [
      { id: 1, name: "K21 KNIFV", type: "free" },
      { id: 2, name: "K2 Black Panther", type: "gacha" },
      { id: 41, name: "F-4E Phantom", type: "gacha" },
      { id: 42, name: "CM25", type: "gacha" },
      { id: 40, name: "WZ-121", type: "gacha" },
      { id: 44, name: "M109A6 Paladin", type: "gacha" },
      { id: 47, name: "M42A1 Duster", type: "gacha" },
    ],
  },
  {
    id: 19,
    name: "Octoberfest",
    image: "/Events/Octoberfest.jpg",
    startDate: "2025-09-18",
    endDate: "2025-09-30",
    vehicles: [
      { id: 3, name: "Strf 9040 BILL", type: "free" },
      { id: 4, name: "Leopard 2A-RC 3.0", type: "gacha" },
      { id: 41, name: "BMP-2", type: "gacha" },
      { id: 42, name: "ZSU-23-4M4 Shilka", type: "gacha" },
      { id: 40, name: "WZ-120", type: "gacha" },
      { id: 41, name: "ZTZ85-II", type: "gacha" },
      { id: 41, name: "MH-6 Little Bird", type: "gacha" },
    ],
  },
  {
    id: 18,
    name: "Grape Symphony",
    image: "/Events/Grape-Symphony.jpg",
    startDate: "2025-09-05",
    endDate: "2025-09-17",
    vehicles: [
      { id: 5, name: "Centauro I 120", type: "free" },
      { id: 6, name: "Challenger 3", type: "gacha" },
      { id: 41, name: "M60", type: "gacha" },
      { id: 42, name: "LAV-25", type: "gacha" },
      { id: 40, name: "LAV-150", type: "gacha" },
      { id: 41, name: "M163 VADS", type: "gacha" },
    ],
  },
  {
    id: 17,
    name: "Operation Zafer",
    image: "/Events/Operation-Zafer.jpg",
    startDate: "2025-08-29",
    endDate: "2025-09-04",
    vehicles: [
      { id: 7, name: "M60A3 (MZK)", type: "free" },
      { id: 8, name: "Altay", type: "gacha" },
      { id: 41, name: "T-62", type: "gacha" },
      { id: 42, name: "BTR-82AT", type: "gacha" },
      { id: 40, name: "2S1 Gvozdika", type: "gacha" },
      { id: 41, name: "PLL-05", type: "gacha" },
    ],
  },
  {
    id: 16,
    name: "Winged March",
    image: "/Events/Winged-March.jpg",
    startDate: "2025-08-14",
    endDate: "2025-08-28",
    vehicles: [
      { id: 9, name: "PT-91 Twardy", type: "free" },
      { id: 10, name: "PL-01", type: "gacha" },
      { id: 41, name: "M113A1 FMS AIP", type: "gacha" },
      { id: 42, name: "BRM-1K", type: "gacha" },
      { id: 40, name: "T-54E1", type: "gacha" },
      { id: 41, name: "BTR-80", type: "gacha" },
      { id: 41, name: "XM1 (GM)", type: "gacha" },
    ],
  },
  {
    id: 15,
    name: "Hunting for the Legend",
    image: "/Events/Hunting-for-the-Legend.jpg",
    startDate: "2025-08-09",
    endDate: "2025-08-24",
    vehicles: [
      { id: 11, name: "T-72A", type: "free" },
    ],
  },
  {
    id: 14,
    name: "Long March",
    image: "/Events/Long-March.jpg",
    startDate: "2025-07-31",
    endDate: "2025-08-13",
    vehicles: [
      { id: 12, name: "WMA301", type: "free" },
      { id: 13, name: "FK 2000", type: "gacha" },
      { id: 46, name: "BMP-2", type: "gacha" },
      { id: 47, name: "MH-6 Little Bird", type: "gacha" },
      { id: 48, name: "ZSU-23-4M4 Shilka", type: "gacha" },
      { id: 49, name: "WZ-120", type: "gacha" },
      { id: 50, name: "ZTZ85-II", type: "gacha" },
    ],
  },
  {
    id: 13,
    name: "Time of Change",
    image: "/Events/Time-of-Change.jpg",
    startDate: "2025-07-14",
    endDate: "2025-07-30",
    vehicles: [
      { id: 14, name: "VBCI-2", type: "free" },
      { id: 15, name: "Leclerc S2 AZUR", type: "gacha" },
    ],
  },
  {
    id: 12,
    name: "Thunder of Freedom",
    image: "/Events/Thunder-of-Freedom.jpg",
    startDate: "2025-06-30",
    endDate: "2025-07-13",
    vehicles: [
      { id: 16, name: "M109A6 Paladin", type: "free" },
      { id: 17, name: "MGM-166 LOSAT", type: "gacha" },
      { id: 51, name: "M163 VADS", type: "gacha" },
      { id: 52, name: "LAV-150", type: "gacha" },
      { id: 53, name: "T-62 545", type: "gacha" },
      { id: 54, name: "M113 Hellfire", type: "gacha" },
      { id: 55, name: "BRM-1K", type: "gacha" },
    ],
  },
  {
    id: 11,
    name: "Summer's Heyday",
    image: "/Events/Summer-Heyday.jpg",
    startDate: "2025-06-12",
    endDate: "2025-06-29",
    vehicles: [
      { id: 18, name: "Rookiat MTTD", type: "free" },
      { id: 19, name: "Challenger 3", type: "gacha" },
      { id: 56, name: "ZSU-23-4M4 Shilka", type: "gacha" },
      { id: 57, name: "BMP-2", type: "gacha" },
      { id: 58, name: "BTR-82A1", type: "gacha" },
      { id: 59, name: "MH-6 Little Bird", type: "gacha" },
      { id: 60, name: "Type-61", type: "gacha" },
    ],
  },
  {
    id: 10,
    name: "Rise of the Dragon",
    image: "/Events/Rise-of-the-Dragon.jpg",
    startDate: "2025-05-30",
    endDate: "2025-06-12",
    vehicles: [
      { id: 20, name: "ZTZ-96A (P)", type: "free" },
      { id: 21, name: "SR-5 GMLRS", type: "gacha" },
      { id: 40, name: "WZ-501A", type: "gacha" },
      { id: 41, name: "WZ-501", type: "gacha" },
      { id: 42, name: "WZ-121", type: "gacha" },
      { id: 42, name: "WZ-120", type: "gacha" },
      { id: 40, name: "PLZ-076", type: "gacha" },
    ],
  },
  {
    id: 9,
    name: "Eagle's Vigil",
    image: "/Events/Eagles-Vigil.jpg",
    startDate: "2025-05-15",
    endDate: "2025-05-29",
    vehicles: [
      { id: 22, name: "XM2001 Crusader", type: "free" },
      { id: 23, name: "M270 MLRS", type: "gacha" },
      { id: 40, name: "AV-8B Harrier II", type: "gacha" },
      { id: 41, name: "T-54E1", type: "gacha" },
      { id: 42, name: "MBT-70", type: "gacha" },
      { id: 40, name: "T114 BAT", type: "gacha" },
      { id: 41, name: "M3 Bradley", type: "gacha" },
    ],
  },
  {
    id: 8,
    name: "Victory Day",
    image: "/Events/Victory-Day.jpg",
    startDate: "2025-05-08",
    endDate: "2025-05-14",
    vehicles: [
      { id: 24, name: "T-90A", type: "free" },
      { id: 25, name: "M1A1 Abrams", type: "gacha" },
      { id: 26, name: "FV4034 Challenger 2", type: "gacha" },
      { id: 29, name: "PLL-05", type: "gacha" },
      { id: 40, name: "2S3 Akatsiya", type: "gacha" },
      { id: 41, name: "BTR-82AT", type: "gacha" },
    ],
  },
  {
    id: 7,
    name: "Golden Week",
    image: "/Events/Golden-Week.jpg",
    startDate: "2025-04-28",
    endDate: "2025-05-07",
    vehicles: [
      { id: 27, name: "K-31 Cheonma", type: "free" },
      { id: 28, name: "J-50", type: "gacha" },
      { id: 29, name: "Type 90", type: "gacha" },
      { id: 40, name: "9A52-2 Smerch", type: "gacha" },
      { id: 41, name: "MBT-70", type: "gacha" },
      { id: 42, name: "ZTZ96", type: "gacha" },
    ],
  },
  {
    id: 6,
    name: "Spring Surge",
    image: "/Events/Spring-Surge.jpg",
    startDate: "2025-04-11",
    endDate: "2025-04-27",
    vehicles: [
      { id: 30, name: "Leopard 2A4", type: "free" },
      { id: 31, name: "T-104 Bastion", type: "gacha" },
      { id: 40, name: "LAV-300", type: "gacha" },
      { id: 41, name: "BTR-82A1", type: "gacha" },
      { id: 42, name: "PLZ-83", type: "gacha" },
      { id: 43, name: "PGZ-04A", type: "gacha" },
      { id: 44, name: "ZSU-23-4M4 Shilka", type: "gacha" },
    ],
  },
  {
    id: 5,
    name: "Battle Spirit",
    image: "/Events/Battle-Spirit.jpg",
    startDate: "2025-04-01",
    endDate: "2025-04-10",
    vehicles: [
      { id: 32, name: "AFT-09", type: "free" },
      { id: 33, name: "T-20 Monolit", type: "gacha" },
      { id: 40, name: "T-62 545", type: "gacha" },
      { id: 41, name: "PLL-05", type: "gacha" },
      { id: 42, name: "BTR-82AT", type: "gacha" },
      { id: 43, name: "2S3 Akatsiya", type: "gacha" },
    ],
  },
  {
    id: 4,
    name: "Lucky Strike",
    image: "/Events/Lucky-Strike.jpg",
    startDate: "2025-03-14",
    endDate: "2025-03-30",
    vehicles: [
      { id: 34, name: "AFT-10", type: "free" },
      { id: 35, name: "FV4034 Challenger 2", type: "gacha" },
      { id: 40, name: "T-62 545", type: "gacha" },
      { id: 41, name: "PLL-05", type: "gacha" },
      { id: 42, name: "BTR-82AT", type: "gacha" },
      { id: 43, name: "2S3 Akatsiya", type: "gacha" },
    ],
  },
  {
    id: 3,
    name: "Carnival of Fire",
    image: "/Events/Carnival-of-Fire.jpg",
    startDate: "2025-02-28",
    endDate: "2025-03-13",
    vehicles: [
      { id: 36, name: "M113 Hellfire", type: "free" },
      { id: 37, name: "PL-01", type: "gacha" },
      { id: 40, name: "M163 VADS", type: "gacha" },
      { id: 41, name: "M60 Patton", type: "gacha" },
      { id: 42, name: "XM-800T", type: "gacha" },
      { id: 43, name: "M3 Bradley", type: "gacha" },
    ],
  },
  {
    id: 2,
    name: "Lunar Dawn",
    image: "/Events/Lunar-Dawn.jpg",
    startDate: "2025-01-24",
    endDate: "2025-02-13",
    vehicles: [
      { id: 38, name: "Type 89 MLRS", type: "free" },
      { id: 39, name: "J-50", type: "gacha" },
      { id: 40, name: "F-4E Phantom", type: "gacha" },
      { id: 41, name: "MiG-35", type: "gacha" },
      { id: 42, name: "J-10 Chengdu", type: "gacha" },
      { id: 43, name: "AV-8B Harrier II", type: "gacha" },
    ],
  },
  {
    id: 1,
    name: "Frozen Frontlines",
    image: "/Events/Frozen-Frontlines.jpg",
    startDate: "2024-12-13",
    endDate: "2025-01-06",
    vehicles: [
      { id: 44, name: "Type 74E", type: "free" },
      { id: 45, name: "BM-57-2 Kochevnik", type: "gacha" },
      { id: 46, name: "ZSU-57-2", type: "gacha" },
      { id: 47, name: "M113A1 FMS AIP", type: "gacha" },
      { id: 48, name: "BTR-80", type: "gacha" },
      { id: 49, name: "LAV-25", type: "gacha" },
    ],
  },
];

const EventCard = ({ event, onVehicleSelect }: { event: Event, onVehicleSelect: (vehicleName: string) => void }) => {
  const [expanded, setExpanded] = useState(false);

  const [copyNotification, setCopyNotification] = useState('');

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const eventSlug = event.name.toLowerCase().replace(/\s+/g, '-');
    const shareUrl = `${window.location.origin}?event=${eventSlug}`;
    navigator.clipboard.writeText(shareUrl);
    
    setCopyNotification('Link copied to clipboard!');
    setTimeout(() => setCopyNotification(''), 3000);
  };

  const getVehicleTypeColor = (type: string) => {
    switch (type) {
      case 'free': return 'text-green-400';
      case 'main': return 'text-orange-400';
      case 'gacha': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getVehicleImage = (vehicleName: string) => {
    const imageName = vehicleName.replace(/ /g, '-') + '.jpg';
    return `/${imageName}`;
  }

  return (
    <div id={`event-${event.id}`} className="relative">
      {copyNotification && (
        <div className="absolute -top-2 -right-2 z-10">
          <div className="text-xs font-medium text-green-400 bg-slate-800/90 px-3 py-1 rounded-full border border-green-400/30 shadow-lg">
            {copyNotification}
          </div>
        </div>
      )}
      <motion.div 
        className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left relative h-48 bg-cover bg-center group"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl font-bold text-white tracking-wide group-hover:text-purple-300 transition-colors">
              {event.name}
            </h4>
            <button 
              onClick={handleShare}
              className="p-1.5 rounded-full bg-slate-700/70 hover:bg-slate-600/80 text-slate-200 hover:text-white transition-colors"
              title="Share event details"
            >
              <Share className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-slate-300 mt-1">
            {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
          </p>
        </div>
        <motion.div
          className="absolute top-4 right-4"
          animate={{ rotate: expanded ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </motion.div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4 border-t border-slate-700/50">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {event.vehicles.map(vehicle => (
                  <div 
                    key={vehicle.id} 
                    onClick={() => onVehicleSelect(vehicle.name)}
                    className="bg-slate-900/70 rounded-lg p-3 border border-slate-800 hover:border-purple-600/60 transition-all duration-300 shadow-lg relative cursor-pointer"
                  >
                    <div className="relative">
                      <img
                        src={getVehicleImage(vehicle.name)}
                        alt={vehicle.name}
                        className="w-full h-32 object-cover rounded-md mb-2 border-2 border-slate-700"
                        onError={(e) => (e.currentTarget.src = '/placeholder.png')}
                      />
                      {(vehicle.type === 'main' || vehicle.type === 'gacha') && (
                        <div className="absolute top-1 right-1 bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-1 rounded-full shadow-md">
                          <Star className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    <h5 className="text-md font-semibold text-white truncate">{vehicle.name}</h5>
                    <div className="flex items-center justify-between text-xs text-slate-400 mt-1">
                      <span className={`${getVehicleTypeColor(vehicle.type)} capitalize`}>{vehicle.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  </div>
  );
};

const EventList = ({ onClose, onVehicleSelect }: { onClose: () => void, onVehicleSelect: (vehicleName: string) => void }) => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Events</h2>
        <button onClick={onClose} className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
          <X className="w-6 h-6 text-slate-300" />
        </button>
      </div>
      <div className="space-y-4">
        {events.map(event => (
          <EventCard key={event.id} event={event} onVehicleSelect={onVehicleSelect} />
        ))}
      </div>
    </div>
  )
}

export default EventList;
