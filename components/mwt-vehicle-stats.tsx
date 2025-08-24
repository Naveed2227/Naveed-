"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BotMessageSquareIcon, X, Send, Search, Bot, CalendarSearchIcon, Calendar, ChevronDown, ChevronRight, Trophy } from "lucide-react"
import { useRouter } from "next/navigation"

// Battle Pass Data Structure
const BATTLE_PASSES = [
  {
    id: 9,
    month: "August 2025",
    name: "Sentinels union",
    image: "2025-Aug.jpg", // Upload your custom image to the same directory
    description: "Dominate the frozen battlefields with elite winter warfare vehicles",
    vehicles: [129, 123], // Vehicle IDs from VEHICLES array
    rewards: {
      premium: ["EMBT 120"],
      free: ["KF-31"]
    }
  },
  {
    id: 8,
    month: "July 2025",
    name: "Steal Eagle",
    image: "2025-Jul.jpg", // Upload your custom image to the same directory
    description: "Dominate the frozen battlefields with elite winter warfare vehicles",
    vehicles: [111, 127], // Vehicle IDs from VEHICLES array
    rewards: {
      premium: ["Obj 640"],
      free: ["Type 16 MCV"]
    }
  },
  {
    id: 7,
    month: "June 2025",
    name: "Royal dragon",
    image: "2025-Jun.jpg", // Upload your custom image to the same directory
    description: "Dominate the frozen battlefields with elite winter warfare vehicles",
    vehicles: [414, 8], // Vehicle IDs from VEHICLES array
    rewards: {
      premium: ["YF-23"],
      free: ["Gepard 1A2"]
    }
  },
  {
    id: 6,
    month: "May 2025",
    name: "Golden Sky",
    image: "2025-May.jpg", // Upload your custom image to the same directory
    description: "Dominate the frozen battlefields with elite winter warfare vehicles",
    vehicles: [132, 113], // Vehicle IDs from VEHICLES array
    rewards: {
      premium: ["Merkava MK.4"],
      free: ["M-SHORAD"]
    }
  },
  {
    id: 5,
    month: "April 2025",
    name: "Crosswind",
    image: "2025-Apr.jpg", // Upload your custom image to the same directory
    description: "Dominate the frozen battlefields with elite winter warfare vehicles",
    vehicles: [419, 1], // Vehicle IDs from VEHICLES array
    rewards: {
      premium: ["Su-57M"],
      free: ["Type 625E"]
    }
  },
  {
    id: 4,
    month: "March 2025",
    name: "Living steel",
    image: "2025-Mar.jpg", // Upload your custom image to the same directory
    description: "Dominate the frozen battlefields with elite winter warfare vehicles",
    vehicles: [104, 101], // Vehicle IDs from VEHICLES array
    rewards: {
      premium: ["Abram X"],
      free: ["Leopard 2A7+"]
    }
  },
  {
    id: 3,
    month: "February 2025",
    name: "Operation G.H.O.S.T",
    image: "2025-Feb.jpg", // Upload your custom image to the same directory
    description: "Dominate the frozen battlefields with elite winter warfare vehicles",
    vehicles: [427, 203], // Vehicle IDs from VEHICLES array
    rewards: {
      premium: ["KA-58"],
      free: ["HSTV-L"]
    }
  },
  {
    id: 2,
    month: "January 2025",
    name: "Zero hour",
    image: "2025-Jan.jpg", // Upload your custom image to the same directory
    description: "Dominate the frozen battlefields with elite winter warfare vehicles",
    vehicles: [102, 4], // Vehicle IDs from VEHICLES array
    rewards: {
      premium: ["TU-222"],
      free: ["Type-10"]
    }
  },
  {
    id: 1,
    month: "December 2024",
    name: "Season Two",
    image: "2024-Dec.jpg", // Upload your custom image to the same directory
    description: "Dominate the frozen battlefields with elite winter warfare vehicles",
    vehicles: [119, 105], // Vehicle IDs from VEHICLES array
    rewards: {
      premium: ["kF-51"],
      free: ["VT-4A1"]
    }
  }

];

const VEHICLES = [
  {
    id: 1,
    name: "Su-57M",
    type: "Fighter Jet",
    faction: "Russian",
    tier: "IV",
    description: "Advanced fifth-generation stealth fighter with supercruise capability and advanced avionics.",
    image: "Su-57M.jpg",
    stats: { health: 24500, speed: 762, afterburnerSpeed: 2100, agility: 85 },
    weapons: [
      { "name": "KAB-250", "type": "Guided Bomb", "damage": 14900, "penetration": 130, "reload": 25 },
      { "name": "GROM-E1", "type": "Air-to-Ground Missile", "damage": 16200, "penetration": 170, "reload": 36 },
      { "name": "KAB500KR", "type": "Guided Bomb", "damage": 17800, "penetration": 320, "reload": 40 },
      { "name": "Kh-47M2 Kinzhal", "type": "Ballistic Missile", "damage": 35000, "penetration": 1200, "reload": 60 },
      { "name": "RVV-MD", "type": "Medium-Range AAM", "damage": 4800, "penetration": 65, "reload": 15 },
      { "name": "Kh-38MLE", "type": "Air-to-Ground Missile", "damage": 17800, "penetration": 400, "reload": 40 },
      { "name": "RVV-SD", "type": "Medium-Range AAM", "damage": 6500, "penetration": 65, "reload": 20 },
      { "name": "Kh-23M", "type": "Air-to-Ground Missile", "damage": 12900, "penetration": 800, "reload": 38 },
      { "name": "Kh-69", "type": "Air-to-Ground Missile", "damage": 18400, "penetration": 230, "reload": 40 }

    ],
    modules: {
      engine: [
        { name: "Saturn AL-51F-1 MK1", bonus: "+200 km/h speed" },
        { name: "Saturn AL-51F-1 MK2", bonus: "+400 km/h speed" },
        { name: "Saturn AL-51F-1 MK3", bonus: "+600 km/h speed" },
      ],
      stealth: [
        { name: "RAM Coating MK1", bonus: "+15% stealth" },
        { name: "RAM Coating MK2", bonus: "+25% stealth" },
        { name: "RAM Coating MK3", bonus: "+35% stealth" },
      ],
      avionics: [
        { name: "N036 Radar MK1", bonus: "+20% detection" },
        { name: "N036 Radar MK2", bonus: "+35% detection" },
        { name: "N036 Radar MK3", bonus: "+50% detection" },
      ],
    },
  },
  {
    id: 2,
    name: "F-22 Raptor",
    type: "Fighter Jet",
    faction: "American",
    tier: "IV",
    image: "F-22-Raptor.jpg",
    description: "Air superiority fighter with unmatched stealth and supercruise capabilities.",
    stats: { health: 25100, speed: 770, afterburnerSpeed: 2170, agility: 88 },
    weapons: [
     { "name": "GBU-38", "type": "Guided Bomb", "damage": 14300, "penetration": 120, "reload": 25 },
      { "name": "GBU-39", "type": "Guided Bomb", "damage": 14700, "penetration": 120, "reload": 28 },
      { "name": "GBU-31", "type": "Guided Bomb", "damage": 19400, "penetration": 360, "reload": 40 },
      { "name": "GBU-32", "type": "Guided Bomb", "damage": 15700, "penetration": 200, "reload": 35 },
      { "name": "AGM-65", "type": "Air-to-Ground Missile", "damage": 11000, "penetration": 830, "reload": 22 },
      { "name": "AIM-132", "type": "Short-Range AAM", "damage": 5200, "penetration": 65, "reload": 15 },
      { "name": "AGM-84H/K", "type": "Anti-Ship Missile", "damage": 18900, "penetration": 310, "reload": 35 },
      { "name": "AIM-120", "type": "BVR AAM", "damage": 11300, "penetration": 60, "reload": 20 }

    ],
    modules: {
      engine: [
        { name: "F119-PW-100 MK1", bonus: "+170 km/h speed" },
        { name: "F119-PW-100 MK2", bonus: "+340 km/h speed" },
        { name: "F119-PW-100 MK3", bonus: "+510 km/h speed" },
      ],
      stealth: [
        { name: "RAM Coating MK1", bonus: "+18% stealth" },
        { name: "RAM Coating MK2", bonus: "+28% stealth" },
        { name: "RAM Coating MK3", bonus: "+38% stealth" },
      ],
      avionics: [
        { name: "AN/APG-77 MK1", bonus: "+22% detection" },
        { name: "AN/APG-77 MK2", bonus: "+35% detection" },
        { name: "AN/APG-77 MK3", bonus: "+48% detection" },
      ],
    },
  },
  {
    id: 3,
    name: "J-20 Mighty Dragon",
    type: "Fighter Jet",
    faction: "Chinese",
    tier: "IV",
    image: "J-20-Mighty-Dragon.jpg",
    description: "Long-range stealth fighter designed for air superiority and strike missions.",
    image: "J-20-Mighty-Dragon.jpg",
    stats: { health: 21200, speed: 694, afterburnerSpeed: 1803, agility: 78 },
    weapons: [
      { "name": "FT-3", "type": "Air-to-Ground Missile", "damage": 15800, "penetration": 210, "reload": 34 },
      { "name": "LS-6/250", "type": "Guided Bomb", "damage": 17300, "penetration": 300, "reload": 40 },
      { "name": "TL-20", "type": "Guided Bomb", "damage": 16120, "penetration": 143, "reload": 25 },
      { "name": "CM-506KG", "type": "Air-to-Ground Missile", "damage": 13000, "penetration": 90, "reload": 25 },
      { "name": "PL-10", "type": "Short-Range AAM", "damage": 7400, "penetration": 60, "reload": 20 },
      { "name": "AR-1", "type": "Anti-Radiation Missile", "damage": 7400, "penetration": 1000, "reload": 16 },
      { "name": "PL-15", "type": "BVR AAM", "damage": 7800, "penetration": 70, "reload": 30 },
      { "name": "AKF-98A", "type": "Air-to-Ground Missile", "damage": 20500, "penetration": 410, "reload": 40 }

    ],
    modules: {
      engine: [
        { name: "WS-15 MK1", bonus: "+160 km/h speed" },
        { name: "WS-15 MK2", bonus: "+320 km/h speed" },
        { name: "WS-15 MK3", bonus: "+480 km/h speed" },
      ],
      stealth: [
        { name: "RAM Coating MK1", bonus: "+14% stealth" },
        { name: "RAM Coating MK2", bonus: "+24% stealth" },
        { name: "RAM Coating MK3", bonus: "+34% stealth" },
      ],
      avionics: [
        { name: "AESA Radar MK1", bonus: "+16% detection" },
        { name: "AESA Radar MK2", bonus: "+28% detection" },
        { name: "AESA Radar MK3", bonus: "+40% detection" },
      ],
    },
  },
  {
    id: 4,
    name: "TU-222",
    type: "Bomber",
    faction: "Russian",
    tier: "IV",
    image: "TU-222.jpg",
    description: "Next-generation supersonic strategic bomber with hypersonic missile capability.",
    stats: { health: 15500, speed: 186, afterburnerSpeed: 209, agility: 50 },
    weapons: [
      {
        "name": "KAB-250",
        "damage": 14900,
        "penetration": 130,
        "reload": 25
      },
      {
        "name": "FAB-250-M62",
        "damage": 15100,
        "penetration": 130,
        "reload": 30
      },
      {
        "name": "GROM-E1",
        "damage": 16200,
        "penetration": 170,
        "reload": 36
      },
      {
        "name": "KAB500KR",
        "damage": 17800,
        "penetration": 320,
        "reload": 40
      },
      {
        "name": "Kh-MD-E",
        "damage": 12400,
        "penetration": 250,
        "reload": 20
      },
      {
        "name": "R-93M",
        "damage": 5000,
        "penetration": 65,
        "reload": 15
      },
      {
        "name": "Kh-25MLE",
        "damage": 16000,
        "penetration": 160,
        "reload": 35
      },
      {
        "name": "R-37",
        "damage": 8400,
        "penetration": 80,
        "reload": 30
      },
      {
        "name": "Kh-38ME",
        "damage": 17300,
        "penetration": 230,
        "reload": 40
      },
      {
        "name": "Kh-69",
        "damage": 18400,
        "penetration": 230,
        "reload": 40
      }

    ],
    modules: {
      engine: [
        { name: "NK-32-02 MK1", bonus: "+15 km/h speed" },
        { name: "NK-32-02 MK2", bonus: "+30 km/h speed" },
        { name: "NK-32-02 MK3", bonus: "+45 km/h speed" },
      ],
      stealth: [
        { name: "RAM Coating MK1", bonus: "+8% stealth" },
        { name: "RAM Coating MK2", bonus: "+16% stealth" },
        { name: "RAM Coating MK3", bonus: "+24% stealth" },
      ],
      avionics: [
        { name: "Navigation System MK1", bonus: "+10% accuracy" },
        { name: "Navigation System MK2", bonus: "+20% accuracy" },
        { name: "Navigation System MK3", bonus: "+30% accuracy" },
      ],
    },
  },
  {
    id: 5,
    name: "J-35",
    type: "Fighter Jet",
    faction: "Chinese",
    tier: "IV",
    image: "J-35.jpg",
    description: "Fifth-generation stealth fighter with advanced sensor fusion and networking capabilities.",
    stats: { health: 22600, speed: 762, afterburnerSpeed: 2199, agility: 82 },
    weapons: [
      { "name": "FT-3", "type": "Air-to-Ground Missile", "damage": 15800, "penetration": 210, "reload": 34 },
      { "name": "LS-6/250", "type": "Guided Bomb", "damage": 17300, "penetration": 300, "reload": 40 },
      { "name": "TL-20", "type": "Guided Bomb", "damage": 16120, "penetration": 143, "reload": 25 },
      { "name": "YJ-1000", "type": "Anti-Ship Missile", "damage": 21600, "penetration": 500, "reload": 40 },
      { "name": "PL-10", "type": "Short-Range AAM", "damage": 7400, "penetration": 60, "reload": 20 },
      { "name": "AR-1", "type": "Anti-Radiation Missile", "damage": 7400, "penetration": 1000, "reload": 16 },
      { "name": "PL-15", "type": "BVR AAM", "damage": 7800, "penetration": 70, "reload": 30 },
      { "name": "CM-102A", "type": "Air-to-Ground Missile", "damage": 14600, "penetration": 110, "reload": 40 },
      { "name": "AKF-98A", "type": "Air-to-Ground Missile", "damage": 20500, "penetration": 410, "reload": 40 }

    ],
    modules: {
      engine: [
        { name: "WS-19 MK1", bonus: "+180 km/h speed" },
        { name: "WS-19 MK2", bonus: "+360 km/h speed" },
        { name: "WS-19 MK3", bonus: "+540 km/h speed" },
      ],
      stealth: [
        { name: "RAM Coating MK1", bonus: "+12% stealth" },
        { name: "RAM Coating MK2", bonus: "+22% stealth" },
        { name: "RAM Coating MK3", bonus: "+32% stealth" },
      ],
      avionics: [
        { name: "AESA Radar MK1", bonus: "+18% detection" },
        { name: "AESA Radar MK2", bonus: "+30% detection" },
        { name: "AESA Radar MK3", bonus: "+42% detection" },
      ],
    },
  },
  {
    id: 6,
    name: "MiG-41M",
    type: "Fighter Jet",
    faction: "Russian",
    tier: "IV",
    description: "Next-generation interceptor with hypersonic capabilities and advanced radar systems.",
    image: "MiG-41M.jpg",
    stats: { health: 23800, speed: 1800, afterburnerSpeed: 4320, agility: 75 },
    weapons: [
      { "name": "KAB-250", "type": "Guided Bomb", "damage": 14900, "penetration": 130, "reload": 25 },
      { "name": "GROM-E1", "type": "Air-to-Ground Missile", "damage": 16200, "penetration": 170, "reload": 36 },
      { "name": "C-13DF", "type": "Autocannon", "damage": 9200, "penetration": 160, "reload": 30 },
      { "name": "KAB-500L", "type": "Guided Bomb", "damage": 17300, "penetration": 310, "reload": 40 },
      { "name": "Kh-MD-E", "type": "Air-to-Ground Missile", "damage": 12400, "penetration": 250, "reload": 20 },
      { "name": "R-93M", "type": "Short-Range AAM", "damage": 5000, "penetration": 65, "reload": 15 },
      { "name": "9K38", "type": "Surface-to-Air Missile", "damage": 4100, "penetration": 30, "reload": 15 },
      { "name": "RVV-SD", "type": "Medium-Range AAM", "damage": 6500, "penetration": 65, "reload": 20 },
      { "name": "Kh-23M", "type": "Air-to-Ground Missile", "damage": 12900, "penetration": 800, "reload": 38 }

    ],
    modules: {
      engine: [
        { name: "Izdeliye 30 MK1", bonus: "+200 km/h speed" },
        { name: "Izdeliye 30 MK2", bonus: "+400 km/h speed" },
        { name: "Izdeliye 30 MK3", bonus: "+600 km/h speed" },
      ],
      stealth: [
        { name: "Plasma Stealth MK1", bonus: "+20% stealth" },
        { name: "Plasma Stealth MK2", bonus: "+35% stealth" },
        { name: "Plasma Stealth MK3", bonus: "+50% stealth" },
      ],
      avionics: [
        { name: "N036M Radar MK1", bonus: "+25% detection" },
        { name: "N036M Radar MK2", bonus: "+42% detection" },
        { name: "N036M Radar MK3", bonus: "+60% detection" },
      ],
    },
  },
  {
    id: 7,
    name: "Su-57 Felon",
    type: "Fighter Jet",
    faction: "Russian",
    tier: "IV",
    description: "Fifth-generation stealth fighter with advanced maneuverability and sensor fusion.",
    image: "Su-57-Felon.jpg",
    stats: { health: 23200, speed: 1100, afterburnerSpeed: 2100, agility: 90 },
    weapons: [
     { "name": "KAB-250", "type": "Guided Bomb", "damage": 14900, "penetration": 130, "reload": 25 },
      { "name": "FAB-250-M62", "type": "Unguided Bomb", "damage": 15100, "penetration": 130, "reload": 30 },
      { "name": "GROM-E1", "type": "Air-to-Ground Missile", "damage": 16200, "penetration": 170, "reload": 36 },
      { "name": "KAB500KR", "type": "Guided Bomb", "damage": 17800, "penetration": 320, "reload": 40 },
      { "name": "Kh-MD-E", "type": "Air-to-Ground Missile", "damage": 12400, "penetration": 250, "reload": 20 },
      { "name": "RVV-MD", "type": "Medium-Range AAM", "damage": 4800, "penetration": 65, "reload": 15 },
      { "name": "Kh-38MLE", "type": "Air-to-Ground Missile", "damage": 17800, "penetration": 400, "reload": 40 },
      { "name": "R-77", "type": "Medium-Range AAM", "damage": 8100, "penetration": 55, "reload": 20 },
      { "name": "Kh-23M", "type": "Air-to-Ground Missile", "damage": 12900, "penetration": 800, "reload": 38 }

    ],
    modules: {
      engine: [
        { name: "AL-51F1 MK1", bonus: "+180 km/h speed" },
        { name: "AL-51F1 MK2", bonus: "+360 km/h speed" },
        { name: "AL-51F1 MK3", bonus: "+540 km/h speed" },
      ],
      stealth: [
        { name: "RAM Coating MK1", bonus: "+16% stealth" },
        { name: "RAM Coating MK2", bonus: "+28% stealth" },
        { name: "RAM Coating MK3", bonus: "+40% stealth" },
      ],
      avionics: [
        { name: "N036 Byelka MK1", bonus: "+20% detection" },
        { name: "N036 Byelka MK2", bonus: "+35% detection" },
        { name: "N036 Byelka MK3", bonus: "+50% detection" },
      ],
    },
  },
  {
  id: 8,
  name: "YF-23",
  type: "Fighter Jet",
  faction: "American",
  tier: "IV",
  image: "YF-23.jpg",
  description: "Experimental stealth fighter designed for air superiority, rival to the F-22.",
  stats: { health: 23800, speed: 770, afterburnerSpeed: 2200, agility: 84 },
  weapons: [
    { "name": "GBU-38", "type": "Guided Bomb", "damage": 14300, "penetration": 120, "reload": 25 },
      { "name": "GBU-39", "type": "Guided Bomb", "damage": 14700, "penetration": 120, "reload": 28 },
      { "name": "GBU-31", "type": "Guided Bomb", "damage": 19400, "penetration": 360, "reload": 40 },
      { "name": "Brimstone", "type": "Air-to-Ground Missile", "damage": 8100, "penetration": 800, "reload": 20 },
      { "name": "AGM-65", "type": "Air-to-Ground Missile", "damage": 11000, "penetration": 830, "reload": 22 },
      { "name": "AIM-132", "type": "Short-Range AAM", "damage": 5200, "penetration": 65, "reload": 15 },
      { "name": "AIM-120", "type": "BVR AAM", "damage": 11300, "penetration": 60, "reload": 20 }

  ],
  modules: {
    engine: [
      { name: "YF119 MK1", bonus: "+200 km/h speed" },
      { name: "YF120 MK2", bonus: "+450 km/h speed" }
    ],
    stealth: [
      { name: "Advanced RAM MK1", bonus: "+25% stealth" },
      { name: "Advanced RAM MK2", bonus: "+40% stealth" }
    ],
    avionics: [
      { name: "AN/APG-77 Radar MK1", bonus: "+30% detection" },
      { name: "AN/APG-77 Radar MK2", bonus: "+50% detection" }
    ]
  }
},
{
  id: 9,
  name: "F-35B Lightning II",
  type: "Fighter Jet",
  faction: "American",
  tier: "IV",
  image: "F-35B-Lightning-II.jpg",
  description: "Fifth-generation stealth multirole fighter with STOVL capability.",
  stats: { health: 23000, speed: 740, afterburnerSpeed: 2000, agility: 82 },
  weapons: [
     { "name": "GBU-38", "type": "Guided Bomb", "damage": 14300, "penetration": 120, "reload": 25 },
      { "name": "GBU-31", "type": "Guided Bomb", "damage": 19400, "penetration": 360, "reload": 40 },
      { "name": "AGM-169", "type": "Air-to-Ground Missile", "damage": 9800, "penetration": 1200, "reload": 30 },
      { "name": "Brimstone", "type": "Air-to-Ground Missile", "damage": 8100, "penetration": 800, "reload": 20 },
      { "name": "AGM-65", "type": "Air-to-Ground Missile", "damage": 11000, "penetration": 830, "reload": 22 },
      { "name": "Storm Shadow", "type": "Cruise Missile", "damage": 20000, "penetration": 370, "reload": 40 },
      { "name": "AIM-120", "type": "BVR AAM", "damage": 11300, "penetration": 60, "reload": 20 }

  ],
  modules: {
    engine: [
      { name: "Pratt & Whitney F135 MK1", bonus: "+200 km/h speed" },
      { name: "Pratt & Whitney F135 MK2", bonus: "+400 km/h speed" }
    ],
    stealth: [
      { name: "RAM Coating MK1", bonus: "+20% stealth" },
      { name: "RAM Coating MK2", bonus: "+35% stealth" }
    ],
    avionics: [
      { name: "AN/APG-81 Radar MK1", bonus: "+25% detection" },
      { name: "AN/APG-81 Radar MK2", bonus: "+45% detection" }
    ]
  }
},
{
  id: 10,
  name: "J-50",
  type: "Fighter Jet",
  faction: "Chinese",
  tier: "IV",
  image: "J-50.jpg",
  description: "Advanced stealth air superiority fighter concept with heavy armament.",
  stats: { health: 24000, speed: 760, afterburnerSpeed: 2150, agility: 83 },
  weapons: [
    {
        "name": "FT-3",
        "damage": 15800,
        "penetration": 210,
        "reload": 34
      },
      {
        "name": "LS-6/250",
        "damage": 17300,
        "penetration": 300,
        "reload": 40
      },
      {
        "name": "TL-20",
        "damage": 16120,
        "penetration": 143,
        "reload": 25
      },
      {
        "name": "Type 3",
        "damage": 16000,
        "penetration": 210,
        "reload": 35
      },
      {
        "name": "YJ-1000",
        "damage": 21600,
        "penetration": 500,
        "reload": 40
      },
      {
        "name": "PL-10",
        "damage": 7400,
        "penetration": 60,
        "reload": 20
      },
      {
        "name": "PL-12",
        "damage": 7600,
        "penetration": 56,
        "reload": 30
      },
      {
        "name": "PL-15",
        "damage": 7800,
        "penetration": 70,
        "reload": 30
      },
      {
        "name": "CM-102A",
        "damage": 14600,
        "penetration": 110,
        "reload": 40
      },
      {
        "name": "AKF-98A",
        "damage": 20500,
        "penetration": 410,
        "reload": 40
      }

  ],
  modules: {
    engine: [
      { name: "WS-19 MK1", bonus: "+200 km/h speed" },
      { name: "WS-19 MK2", bonus: "+400 km/h speed" }
    ],
    stealth: [
      { name: "RAM Coating MK1", bonus: "+20% stealth" },
      { name: "RAM Coating MK2", bonus: "+40% stealth" }
    ],
    avionics: [
      { name: "AESAN Radar MK1", bonus: "+25% detection" },
      { name: "AESAN Radar MK2", bonus: "+45% detection" }
    ]
  }
},
{
  id: 11,
  name: "Su-75 Checkmate",
  type: "Fighter Jet",
  faction: "Russian",
  tier: "IV",
  image: "Su-75-Checkmate.jpg",
  description: "Light stealth fighter designed for export and versatile combat missions.",
  stats: { health: 22000, speed: 755, afterburnerSpeed: 2100, agility: 85 },
  weapons: [
    
    { "name": "KAB-250", "type": "Guided Bomb", "damage": 14900, "penetration": 130, "reload": 25 },
      { "name": "GROM-E1", "type": "Air-to-Ground Missile", "damage": 16200, "penetration": 170, "reload": 36 },
      { "name": "UPK-23-250", "type": "Autocannon", "damage": 400, "penetration": 71, "reload": 25 },
      { "name": "KAB500KR", "type": "Guided Bomb", "damage": 17800, "penetration": 320, "reload": 40 },
      { "name": "Kh-MD-E", "type": "Air-to-Ground Missile", "damage": 12400, "penetration": 250, "reload": 20 },
      { "name": "RVV-MD", "type": "Medium-Range AAM", "damage": 4800, "penetration": 65, "reload": 15 },
      { "name": "RVV-SD", "type": "Medium-Range AAM", "damage": 6500, "penetration": 65, "reload": 20 },
      { "name": "Kh-23M", "type": "Air-to-Ground Missile", "damage": 12900, "penetration": 800, "reload": 38 }

  ],
  modules: {
    engine: [
      { name: "Izdeliye 30 MK1", bonus: "+200 km/h speed" },
      { name: "Izdeliye 30 MK2", bonus: "+400 km/h speed" }
    ],
    stealth: [
      { name: "RAM Coating MK1", bonus: "+20% stealth" },
      { name: "RAM Coating MK2", bonus: "+35% stealth" }
    ],
    avionics: [
      { name: "Sh-121 Radar MK1", bonus: "+25% detection" },
      { name: "Sh-121 Radar MK2", bonus: "+45% detection" }
    ]
  }
},
{
    id: 100,
    name: "T-14 Armata",
    type: "Main Battle Tank",
    faction: "Russian",
    tier: "IV",
    description: "Next-generation main battle tank with unmanned turret and advanced armor systems.",
    image: "T-14-Armata.jpg",
    stats: { health: 38900, speed: 70, reverseSpeed: 70, maneuverability: 34, armor: "1200mm", agility: 65 },
    weapons: [
      { name: "2A82-1M 125mm", type: "Main Gun", damage: 15800, penetration: 850 },
      { name: "Invar ATGM", type: "Anti-Tank Missile", damage: 18500, penetration: 1200 },
      { name: "12.7mm Kord", type: "Machine Gun", damage: 180, penetration: 25, rateOfFire: "700 rpm" },
    ],
    modules: {
      engine: [
        { name: "ChTZ 12N360 MK1", bonus: "+10 km/h speed" },
        { name: "ChTZ 12N360 MK2", bonus: "+20 km/h speed" },
        { name: "ChTZ 12N360 MK3", bonus: "+30 km/h speed" },
      ],
      armor: [
        { name: "Malachit ERA MK1", bonus: "+200mm protection" },
        { name: "Malachit ERA MK2", bonus: "+400mm protection" },
        { name: "Malachit ERA MK3", bonus: "+600mm protection" },
      ],
      fireControl: [
        { name: "Kalina FCS MK1", bonus: "+15% accuracy" },
        { name: "Kalina FCS MK2", bonus: "+25% accuracy" },
        { name: "Kalina FCS MK3", bonus: "+35% accuracy" },
      ],
    },
  },
   
  {
    id: 101,
    name: "Abrams X",
    type: "Main Battle Tank",
    faction: "American",
    tier: "IV",
    image: "Abrams-X.jpg",
    description: "Next-generation prototype tank with unmanned turret and advanced systems.",
    stats: { health: 40300, speed: 75, reverseSpeed: 45, maneuverability: 35, armor: "1100mm", agility: 68 },
    weapons: [
      { name: "XM360 120mm", type: "Main Gun", damage: 15200, penetration: 820 },
      { name: "Switchblade Drone", type: "Loitering Munition", damage: 8500, penetration: 450 },
      { name: "XM914 30mm", type: "Autocannon", damage: 480, penetration: 85, rateOfFire: "200 rpm" },
      { name: "Trophy APS", type: "Active Protection", damage: 0, penetration: 0 },
    ],
    modules: {
      engine: [
        { name: "Hybrid Powerpack MK1", bonus: "+12 km/h speed" },
        { name: "Hybrid Powerpack MK2", bonus: "+24 km/h speed" },
        { name: "Hybrid Powerpack MK3", bonus: "+36 km/h speed" },
      ],
      armor: [
        { name: "Modular Armor MK1", bonus: "+180mm protection" },
        { name: "Modular Armor MK2", bonus: "+360mm protection" },
        { name: "Modular Armor MK3", bonus: "+540mm protection" },
      ],
      fireControl: [
        { name: "AI-Enhanced FCS MK1", bonus: "+18% accuracy" },
        { name: "AI-Enhanced FCS MK2", bonus: "+30% accuracy" },
        { name: "AI-Enhanced FCS MK3", bonus: "+42% accuracy" },
      ],
    },
  },
  {
    id: 102,
    name: "Type 10",
    type: "Main Battle Tank",
    faction: "Japanese",
    tier: "IV",
    image: "Type-10.jpg",
    description: "Modern main battle tank optimized for Japanese terrain with advanced fire control.",
    stats: { health: 38000, speed: 71, reverseSpeed: 71, maneuverability: 40, armor: "950mm", agility: 75 },
    weapons: [
      { name: "JSW 120mm L44", type: "Main Gun", damage: 13800, penetration: 750 },
      { name: "Type 74 7.62mm", type: "Machine Gun", damage: 110, penetration: 12, rateOfFire: "850 rpm" },
    ],
    modules: {
      engine: [
        { name: "Mitsubishi 10ZG MK1", bonus: "+10 km/h speed" },
        { name: "Mitsubishi 10ZG MK2", bonus: "+20 km/h speed" },
        { name: "Mitsubishi 10ZG MK3", bonus: "+30 km/h speed" },
      ],
      armor: [
        { name: "Modular Armor MK1", bonus: "+160mm protection" },
        { name: "Modular Armor MK2", bonus: "+320mm protection" },
        { name: "Modular Armor MK3", bonus: "+480mm protection" },
      ],
      fireControl: [
        { name: "Type 10 FCS MK1", bonus: "+16% accuracy" },
        { name: "Type 10 FCS MK2", bonus: "+28% accuracy" },
        { name: "Type 10 FCS MK3", bonus: "+40% accuracy" },
      ],
    },
  },
  {
    id: 103,
    name: "M1 Abrams Block 3",
    type: "Main Battle Tank",
    faction: "American",
    tier: "IV",
    image: "M1-Abrams-Block-3.jpg",
    description: "An Experimental prototype tank intended as a successor to the Abrams MBT family",
    stats: { health: 39600, speed: 80, reverseSpeed: 50, maneuverability: 40, armor: "1150mm", agility: 66 },
    weapons: [
      { "name": "120mm XM360 - APFSDS", "type": "APFSDS", "damage": 700, "penetration": 850, "reload": 7 },
      { "name": "120mm XM360 - HEAT", "type": "HEAT", "damage": 750, "penetration": 450, "reload": 7 },
      { "name": "120mm XM360 - HE/HEI", "type": "HE/HEI", "damage": 900, "penetration": 50, "reload": 7 },
      { "name": "M240 / 7.62mm", "type": "Machine Gun", "damage": 45, "penetration": 20, "reload": 0 }
    ],
    modules: {
      engine: [
        { name: "AGT1500 MK1", bonus: "+10 km/h speed" },
        { name: "AGT1500 MK2", bonus: "+20 km/h speed" },
        { name: "AGT1500 MK3", bonus: "+30 km/h speed" },
      ],
      armor: [
        { name: "DU Armor MK1", bonus: "+220mm protection" },
        { name: "DU Armor MK2", bonus: "+440mm protection" },
        { name: "DU Armor MK3", bonus: "+660mm protection" },
      ],
      fireControl: [
        { name: "FBCB2 MK1", bonus: "+20% accuracy" },
        { name: "FBCB2 MK2", bonus: "+35% accuracy" },
        { name: "FBCB2 MK3", bonus: "+50% accuracy" },
      ],
    },
  },
  {
    id: 104,
    name: "Leopard 2A7+",
    type: "Main Battle Tank",
    faction: "German",
    tier: "IV",
    image: "Leopard-2A7V.jpg",
    description: "Most advanced Leopard variant with urban warfare modifications and enhanced protection.",
    stats: { health: 36200, speed: 68, armor: "1080mm", agility: 70 },
    weapons: [
      { name: "Rheinmetall L55 120mm", type: "Main Gun", damage: 15200, penetration: 810 },
      { name: "MG3A1 7.62mm", type: "Machine Gun", damage: 130, penetration: 16, rateOfFire: "1200 rpm" },
    ],
    modules: {
      engine: [
        { name: "MTU MB 873 Ka-501 MK1", bonus: "+10 km/h speed" },
        { name: "MTU MB 873 Ka-501 MK2", bonus: "+20 km/h speed" },
        { name: "MTU MB 873 Ka-501 MK3", bonus: "+30 km/h speed" },
      ],
      armor: [
        { name: "Modular Armor MK1", bonus: "+200mm protection" },
        { name: "Modular Armor MK2", bonus: "+400mm protection" },
        { name: "Modular Armor MK3", bonus: "+600mm protection" },
      ],
      fireControl: [
        { name: "PERI-R17A3 MK1", bonus: "+18% accuracy" },
        { name: "PERI-R17A3 MK2", bonus: "+32% accuracy" },
        { name: "PERI-R17A3 MK3", bonus: "+46% accuracy" },
      ],
    },
  },
  {
    id: 105,
    name: "KF-51 Panther",
    type: "Main Battle Tank",
    faction: "German",
    tier: "IV",
    image: "KF-51-Panther.jpg",
    description: "Next-generation main battle tank with 130mm gun and advanced digital systems.",
    stats: { health: 38200, speed: 70, armor: "1200mm", agility: 72 },
    weapons: [
      { name: "Future Gun System 130mm", type: "Main Gun", damage: 18500, penetration: 950 },
      { name: "Spike LR2", type: "ATGM", damage: 19200, penetration: 1250 },
      { name: "MG4 5.56mm", type: "Machine Gun", damage: 85, penetration: 8, rateOfFire: "885 rpm" },
    ],
    modules: {
      engine: [
        { name: "MTU Hybrid MK1", bonus: "+12 km/h speed" },
        { name: "MTU Hybrid MK2", bonus: "+24 km/h speed" },
        { name: "MTU Hybrid MK3", bonus: "+36 km/h speed" },
      ],
      armor: [
        { name: "AMAP Composite MK1", bonus: "+240mm protection" },
        { name: "AMAP Composite MK2", bonus: "+480mm protection" },
        { name: "AMAP Composite MK3", bonus: "+720mm protection" },
      ],
      fireControl: [
        { name: "Digital FCS MK1", bonus: "+22% accuracy" },
        { name: "Digital FCS MK2", bonus: "+38% accuracy" },
        { name: "Digital FCS MK3", bonus: "+54% accuracy" },
      ],
    },
  },
  {
    id: 106,
    name: "Altay",
    type: "Main Battle Tank",
    faction: "Turkish",
    tier: "IV",
    image: "Altay.jpg",
    description: "Turkey’s modern main battle tank, emphasizing firepower, protection, mobility, and advanced technology.",
    stats: { health: 38200, speed: 65,armor: "1200mm", agility: 70 },
    weapons: [
      { name: "DM63A1 APFSDS", type: "Main Gun", damage: 18500, penetration: 950, reload: 5.2 },
      { name: "DM11 HEI", type: "Main Gun", damage: 19200, penetration: 1250, reload: 5.2 },
      { name: "DM12A2 HEATFS", type: "Main Gun", damage: 19200, penetration: 1250, reload: 5.2 },
      { name: "DM73 APFSDS", type: "Main Gun", damage: 19200, penetration: 1250, reload: 5.2 },
    ],
    modules: {
      engine: [
        { name: "RD-33MK MK1", bonus: "+120 km/h speed" },
        { name: "RD-33MK MK2", bonus: "+240 km/h speed" },
        { name: "RD-33MK MK3", bonus: "+360 km/h speed" },
      ],
      stealth: [
        { name: "ECM Suite MK1", bonus: "+8% stealth" },
        { name: "ECM Suite MK2", bonus: "+16% stealth" },
        { name: "ECM Suite MK3", bonus: "+24% stealth" },
      ],
      avionics: [
        { name: "Zhuk-AE AESA MK1", bonus: "+18% detection" },
        { name: "Zhuk-AE AESA MK2", bonus: "+32% detection" },
        { name: "Zhuk-AE AESA MK3", bonus: "+46% detection" },
      ],
    },
  },
  
   {
    id: 107,
    name: "T-25 Pamir",
    type: "Main Battle Tank",
    faction: "Russian",
    tier: "IV",
    image: "T-25-Pamir.jpg",
    description: "Advanced main battle tank with next-generation armor and fire control systems.",
    stats: { health: 39200, speed: 68, armor: "1250mm", agility: 70 },
    weapons: [
      { name: "2A82-1M 125mm", type: "Main Gun", damage: 16200, penetration: 870 },
      { name: "9M119M1 Invar-M", type: "ATGM", damage: 19500, penetration: 1300 },
      { name: "Kord 12.7mm", type: "Machine Gun", damage: 240, penetration: 38, rateOfFire: "650 rpm" },
    ],
    modules: {
      engine: [
        { name: "ChTZ 12N360 MK1", bonus: "+12 km/h speed" },
        { name: "ChTZ 12N360 MK2", bonus: "+24 km/h speed" },
        { name: "ChTZ 12N360 MK3", bonus: "+36 km/h speed" },
      ],
      armor: [
        { name: "Relikt ERA MK1", bonus: "+250mm protection" },
        { name: "Relikt ERA MK2", bonus: "+500mm protection" },
        { name: "Relikt ERA MK3", bonus: "+750mm protection" },
      ],
      fireControl: [
        { name: "Kalina-2 FCS MK1", bonus: "+20% accuracy" },
        { name: "Kalina-2 FCS MK2", bonus: "+35% accuracy" },
        { name: "Kalina-2 FCS MK3", bonus: "+50% accuracy" },
      ],
    },
  },
  {
    id: 108,
    name: "T-90A",
    type: "Main Battle Tank",
    faction: "Russian",
    tier: "IV",
    image: "T-90A.jpg",
    description: "Modernized main battle tank with improved armor and advanced fire control.",
    stats: { health: 39400, speed: 65, reverseSpeed: 30, maneuverability: 44, armor: "1050mm", agility: 68 },
    weapons: [
      { name: "2A46M-5 125mm", type: "Main Gun", damage: 15200, penetration: 820 },
      { name: "9M119 Refleks", type: "ATGM", damage: 17800, penetration: 1150 },
      { name: "NSVT 12.7mm", type: "Machine Gun", damage: 220, penetration: 35, rateOfFire: "700 rpm" },
    ],
    modules: {
      engine: [
        { name: "V-92S2F MK1", bonus: "+10 km/h speed" },
        { name: "V-92S2F MK2", bonus: "+20 km/h speed" },
        { name: "V-92S2F MK3", bonus: "+30 km/h speed" },
      ],
      armor: [
        { name: "Kontakt-5 ERA MK1", bonus: "+200mm protection" },
        { name: "Kontakt-5 ERA MK2", bonus: "+400mm protection" },
        { name: "Kontakt-5 ERA MK3", bonus: "+600mm protection" },
      ],
      fireControl: [
        { name: "1A45T Irtysh MK1", bonus: "+18% accuracy" },
        { name: "1A45T Irtysh MK2", bonus: "+32% accuracy" },
        { name: "1A45T Irtysh MK3", bonus: "+46% accuracy" },
      ],
    },
  },
  {
    id: 109,
    name: "T-95M",
    type: "Main Battle Tank",
    faction: "Russian",
    tier: "IV",
    image: "T-95M.jpg",
    description: "Experimental heavy tank with revolutionary armor design and 152mm gun.",
    stats: { health: 42500, speed: 60, armor: "1400mm", agility: 58 },
    weapons: [
      { name: "2A83 152mm", type: "Main Gun", damage: 22500, penetration: 1200 },
      { name: "9M119M1 Invar-M", type: "ATGM", damage: 20200, penetration: 1350 },
      { name: "Kord 12.7mm", type: "Machine Gun", damage: 240, penetration: 38, rateOfFire: "650 rpm" },
    ],
    modules: {
      engine: [
        { name: "A-85-3A MK1", bonus: "+8 km/h speed" },
        { name: "A-85-3A MK2", bonus: "+16 km/h speed" },
        { name: "A-85-3A MK3", bonus: "+24 km/h speed" },
      ],
      armor: [
        { name: "Malachit ERA MK1", bonus: "+280mm protection" },
        { name: "Malachit ERA MK2", bonus: "+560mm protection" },
        { name: "+560mm protection" },
        { name: "Malachit ERA MK3", bonus: "+840mm protection" },
      ],
      fireControl: [
        { name: "Advanced FCS MK1", bonus: "+22% accuracy" },
        { name: "Advanced FCS MK2", bonus: "+38% accuracy" },
        { name: "Advanced FCS MK3", bonus: "+54% accuracy" },
      ],
    },
  },
  {
    id: 110,
    name: "T-104 Bastion",
    type: "Main Battle Tank",
    faction: "Russian",
    tier: "IV",
    image: "T-104-Bastion.jpg",
    description: "A Russian heavy main battle tank, featuring strong armor, AI-assisted and protection systems.",
    stats: { health: 40800, speed: 72, armor: "1320mm", agility: 75 },
    weapons: [
      { name: "2A82-2M 125mm", type: "Main Gun", damage: 17500, penetration: 920 },
      { name: "Kornet-EM", type: "ATGM", damage: 21000, penetration: 1400 },
      { name: "Kord 12.7mm", type: "Machine Gun", damage: 240, penetration: 38, rateOfFire: "650 rpm" },
    ],
    modules: {
      engine: [
        { name: "Hybrid Powerpack MK1", bonus: "+14 km/h speed" },
        { name: "Hybrid Powerpack MK2", bonus: "+28 km/h speed" },
        { name: "Hybrid Powerpack MK3", bonus: "+42 km/h speed" },
      ],
      armor: [
        { name: "Modular ERA MK1", bonus: "+260mm protection" },
        { name: "Modular ERA MK2", bonus: "+520mm protection" },
        { name: "Modular ERA MK3", bonus: "+780mm protection" },
      ],
      fireControl: [
        { name: "AI-Enhanced FCS MK1", bonus: "+24% accuracy" },
        { name: "AI-Enhanced FCS MK2", bonus: "+42% accuracy" },
        { name: "AI-Enhanced FCS MK3", bonus: "+60% accuracy" },
      ],
    },
  },
  {
    id: 111,
    name: "Type 16 MCV",
    type: "Tank Destroyer",
    faction: "Japanese",
    tier: "IV",
    image: "Type-16-MCV.jpg",
    description: "Mobile Combat Vehicle with excellent mobility and firepower for rapid deployment.",
    stats: { health: 26400, speed: 100, armor: "420mm", agility: 85 },
    weapons: [
      { name: "JSW 105mm L52", type: "Main Gun", damage: 12500, penetration: 680 },
      { name: "Type 74 7.62mm", type: "Machine Gun", damage: 110, penetration: 12, rateOfFire: "850 rpm" },
    ],
    modules: {
      engine: [
        { name: "Mitsubishi 6SY31WX MK1", bonus: "+15 km/h speed" },
        { name: "Mitsubishi 6SY31WX MK2", bonus: "+30 km/h speed" },
        { name: "Mitsubishi 6SY31WX MK3", bonus: "+45 km/h speed" },
      ],
      armor: [
        { name: "Composite Armor MK1", bonus: "+90mm protection" },
        { name: "Composite Armor MK2", bonus: "+180mm protection" },
        { name: "Composite Armor MK3", bonus: "+270mm protection" },
      ],
      fireControl: [
        { name: "Type 16 FCS MK1", bonus: "+18% accuracy" },
        { name: "Type 16 FCS MK2", bonus: "+32% accuracy" },
        { name: "Type 16 FCS MK3", bonus: "+46% accuracy" },
      ],
    },
  },
    {
  id: 112,
  name: "T-14 Armata (152)",
  type: "Main Battle Tank",
  faction: "Russian",
  tier: "IV",
  image: "T-14-Armata-(152).jpg",
  description: "Next-generation Russian MBT prototype equipped with a powerful 152mm smoothbore gun and advanced armor.",
  stats: { health: 42000, speed: 85, armor: "1000mm", agility: 40 },
  weapons: [
    { name: "2A83 152mm Smoothbore Gun", type: "Cannon", damage: 17000, penetration: 1100, rateOfFire: "6 rpm" },
    { name: "Kord 12.7mm MG", type: "Machine Gun", damage: 180, penetration: 25, rateOfFire: "750 rpm" },
    { name: "PKTM 7.62mm MG", type: "Coaxial MG", damage: 120, penetration: 15, rateOfFire: "800 rpm" }
  ],
  modules: {
    engine: [
      { name: "A-85-3A MK1", bonus: "+5 km/h speed" },
      { name: "A-85-3A MK2", bonus: "+10 km/h speed" }
    ],
    armor: [
      { name: "Malachit ERA MK1", bonus: "+15% protection" },
      { name: "Malachit ERA MK2", bonus: "+30% protection" }
    ],
    electronics: [
      { name: "Afganit APS MK1", bonus: "+20% defense vs missiles" },
      { name: "Afganit APS MK2", bonus: "+40% defense vs missiles" }
    ]
  },
 },
 {
    id: 113,
    name: "Merkava Mk.4",
    type: "Main Battle Tank",
    faction: "Israeli",
    tier: "IV",
    image: "Merkava-Mk.4.jpg",
    description: "Heavily armored main battle tank with unique rear-engine design and crew survivability focus.",
    stats: { health: 35600, speed: 64, armor: "1050mm", agility: 62 },
    weapons: [
      { name: "IMI 120mm", type: "Main Gun", damage: 14800, penetration: 800 },
      { name: "Spike NLOS", type: "Anti-Tank Missile", damage: 17200, penetration: 1150 },
      { name: "M2HB 12.7mm", type: "Machine Gun", damage: 220, penetration: 35, rateOfFire: "550 rpm" },
    ],
    modules: {
      engine: [
        { name: "GD883 MK1", bonus: "+8 km/h speed" },
        { name: "GD883 MK2", bonus: "+16 km/h speed" },
        { name: "GD883 MK3", bonus: "+24 km/h speed" },
      ],
      armor: [
        { name: "Modular Armor MK1", bonus: "+200mm protection" },
        { name: "Modular Armor MK2", bonus: "+400mm protection" },
        { name: "Modular Armor MK3", bonus: "+600mm protection" },
      ],
      fireControl: [
        { name: "Knight FCS MK1", bonus: "+14% accuracy" },
        { name: "Knight FCS MK2", bonus: "+26% accuracy" },
        { name: "Knight FCS MK3", bonus: "+38% accuracy" },
      ],
    },
  },
 {
    id: 114,
    name: "BMPT Terminator 2",
    type: "Tank Destroyer",
    faction: "Russian",
    tier: "IV",
    description: "Tank support fighting vehicle designed for urban combat and infantry support.",
    image: "BMPT-Terminator-2.jpg",
    stats: { health: 36400, speed: 60, armor: "850mm", agility: 68 },
    weapons: [
      { name: "2A42 30mm Twin", type: "Autocannon", damage: 520, penetration: 85, rateOfFire: "550 rpm" },
      { name: "9M120 Ataka", type: "ATGM", damage: 17200, penetration: 1150 },
      { name: "PKT 7.62mm", type: "Coaxial MG", damage: 95, penetration: 12, rateOfFire: "800 rpm" },
    ],
    modules: {
      engine: [
        { name: "V-92S2F MK1", bonus: "+8 km/h speed" },
        { name: "V-92S2F MK2", bonus: "+16 km/h speed" },
        { name: "V-92S2F MK3", bonus: "+24 km/h speed" },
      ],
      armor: [
        { name: "Reactive Armor MK1", bonus: "+160mm protection" },
        { name: "Reactive Armor MK2", bonus: "+320mm protection" },
        { name: "Reactive Armor MK3", bonus: "+480mm protection" },
      ],
      fireControl: [
        { name: "Integrated FCS MK1", bonus: "+16% accuracy" },
        { name: "Integrated FCS MK2", bonus: "+28% accuracy" },
        { name: "Integrated FCS MK3", bonus: "+40% accuracy" },
      ],
    },
  },
  {
    id: 115,
    name: "SR-5 GMLRS",
    type: "MLRS",
    faction: "Chinese",
    tier: "IV",
    image: "SR-5-GMLRS.jpg",
    description: "Guided multiple launch rocket system with precision strike capability.",
    stats: { health: 29900, speed: 85, armor: "380mm", agility: 58 },
    weapons: [
      { name: "SR-5 Guided Rocket", type: "Guided Rocket", damage: 20500, penetration: 750 },
      { name: "QJC88 12.7mm", type: "Machine Gun", damage: 220, penetration: 35, rateOfFire: "600 rpm" },
    ],
    modules: {
      engine: [
        { name: "Diesel Engine MK1", bonus: "+12 km/h speed" },
        { name: "Diesel Engine MK2", bonus: "+24 km/h speed" },
        { name: "Diesel Engine MK3", bonus: "+36 km/h speed" },
      ],
      armor: [
        { name: "Steel Armor MK1", bonus: "+70mm protection" },
        { name: "Steel Armor MK2", bonus: "+140mm protection" },
        { name: "Steel Armor MK3", bonus: "+210mm protection" },
      ],
      fireControl: [
        { name: "GPS Guidance MK1", bonus: "+25% accuracy" },
        { name: "GPS Guidance MK2", bonus: "+42% accuracy" },
        { name: "GPS Guidance MK3", bonus: "+60% accuracy" },
      ],
    },
  },
  {
    id: 116,
    name: "2S19 Msta-S",
    type: "SPA",
    faction: "Russian",
    tier: "IV",
    image: "2S19-Msta-S.jpg",
    description: "Self-propelled howitzer with long-range precision artillery capability.",
    stats: { health: 34300, speed: 60, armor: "450mm", agility: 52 },
    weapons: [
      { name: "2A64 152mm", type: "Howitzer", damage: 28500, penetration: 950 },
      { name: "NSVT 12.7mm", type: "Machine Gun", damage: 200, penetration: 32, rateOfFire: "700 rpm" },
    ],
    modules: {
      engine: [
        { name: "V-84A MK1", bonus: "+8 km/h speed" },
        { name: "V-84A MK2", bonus: "+16 km/h speed" },
        { name: "V-84A MK3", bonus: "+24 km/h speed" },
      ],
      armor: [
        { name: "Steel Armor MK1", bonus: "+85mm protection" },
        { name: "Steel Armor MK2", bonus: "+170mm protection" },
        { name: "Steel Armor MK3", bonus: "+255mm protection" },
      ],
      fireControl: [
        { name: "Artillery FCS MK1", bonus: "+20% accuracy" },
        { name: "Artillery FCS MK2", bonus: "+35% accuracy" },
        { name: "Artillery FCS MK3", bonus: "+50% accuracy" },
      ],
    },
  },
  {
    id: 117,
    name: "Pantsir S-1",
    type: "Anti-Air",
    faction: "Russian",
    tier: "IV",
    image: "Pantsir-S-1.jpg",
    description: "Combined gun-missile air defense system with advanced radar capabilities.",
    stats: { health: 32500, speed: 70, armor: "420mm", agility: 75 },
    weapons: [
      { name: "2A38M 30mm Twin", type: "Anti-Aircraft Gun", damage: 2200, penetration: 120, rateOfFire: "2500 rpm" },
      { name: "57E6 SAM", type: "Surface-to-Air Missile", damage: 12500, penetration: 650 },
    ],
    modules: {
      engine: [
        { name: "KAMAZ Engine MK1", bonus: "+10 km/h speed" },
        { name: "KAMAZ Engine MK2", bonus: "+20 km/h speed" },
        { name: "KAMAZ Engine MK3", bonus: "+30 km/h speed" },
      ],
      armor: [
        { name: "Steel Armor MK1", bonus: "+80mm protection" },
        { name: "Steel Armor MK2", bonus: "+160mm protection" },
        { name: "Steel Armor MK3", bonus: "+240mm protection" },
      ],
      fireControl: [
        { name: "1RS2-1E Radar MK1", bonus: "+30% accuracy" },
        { name: "1RS2-1E Radar MK2", bonus: "+50% accuracy" },
        { name: "1RS2-1E Radar MK3", bonus: "+70% accuracy" },
      ],
    },
  },
  {
    id: 118,
    name: "M1128 Stryker",
    type: "Tank Destroyer",
    faction: "American",
    tier: "IV",
    image: "M1128-Stryker.jpg",
    description: "Mobile gun system with rapid deployment capability and stealth features.",
    stats: { health: 28800, speed: 97, armor: "380mm", agility: 88 },
    weapons: [
      { name: "M68A1E4 105mm", type: "Main Gun", damage: 12800, penetration: 680 },
      { name: "M240 7.62mm", type: "Coaxial MG", damage: 120, penetration: 15, rateOfFire: "750 rpm" },
    ],
    modules: {
      engine: [
        { name: "Caterpillar C7 MK1", bonus: "+15 km/h speed" },
        { name: "Caterpillar C7 MK2", bonus: "+30 km/h speed" },
        { name: "Caterpillar C7 MK3", bonus: "+45 km/h speed" },
      ],
      armor: [
        { name: "Ceramic Armor MK1", bonus: "+70mm protection" },
        { name: "Ceramic Armor MK2", bonus: "+140mm protection" },
        { name: "Ceramic Armor MK3", bonus: "+210mm protection" },
      ],
      fireControl: [
        { name: "Digital FCS MK1", bonus: "+18% accuracy" },
        { name: "Digital FCS MK2", bonus: "+32% accuracy" },
        { name: "Digital FCS MK3", bonus: "+46% accuracy" },
      ],
    },
  },

  {
    id: 119,
    name: "VT-4A1",
    type: "Main Battle Tank",
    faction: "Chinese",
    tier: "IV",
    image: "VT-4A1.jpg",
    description: "Export variant main battle tank with advanced fire control and modular protection.",
    stats: { health: 36500, speed: 70, armor: "1100mm", agility: 72 },
    weapons: [
      { name: "ZPT98A 125mm", type: "Main Gun", damage: 15800, penetration: 850 },
      { name: "GP125", type: "ATGM", damage: 18500, penetration: 1200 },
      { name: "QJC88 12.7mm", type: "Machine Gun", damage: 220, penetration: 35, rateOfFire: "600 rpm" },
    ],
    modules: {
      engine: [
        { name: "150HB Diesel MK1", bonus: "+12 km/h speed" },
        { name: "150HB Diesel MK2", bonus: "+24 km/h speed" },
        { name: "150HB Diesel MK3", bonus: "+36 km/h speed" },
      ],
      armor: [
        { name: "FY-4 ERA MK1", bonus: "+220mm protection" },
        { name: "FY-4 ERA MK2", bonus: "+440mm protection" },
        { name: "FY-4 ERA MK3", bonus: "+660mm protection" },
      ],
      fireControl: [
        { name: "Hunter-Killer FCS MK1", bonus: "+19% accuracy" },
        { name: "Hunter-Killer FCS MK2", bonus: "+34% accuracy" },
        { name: "Hunter-Killer FCS MK3", bonus: "+49% accuracy" },
      ],
    },
  },
  {
    id: 120,
    name: "ZTZ99A",
    type: "Main Battle Tank",
    faction: "Chinese",
    tier: "IV",
    image: "ZTZ99A.jpg",
    description: "Advanced main battle tank with composite armor and laser warning systems.",
    stats: { health: 37200, speed: 68, armor: "1150mm", agility: 70 },
    weapons: [
      { name: "ZPT98A 125mm", type: "Main Gun", damage: 16200, penetration: 870 },
      { name: "GP125", type: "ATGM", damage: 19000, penetration: 1250 },
      { name: "QJC88 12.7mm", type: "Machine Gun", damage: 220, penetration: 35, rateOfFire: "600 rpm" },
    ],
    modules: {
      engine: [
        { name: "150HB Diesel MK1", bonus: "+11 km/h speed" },
        { name: "150HB Diesel MK2", bonus: "+22 km/h speed" },
        { name: "150HB Diesel MK3", bonus: "+33 km/h speed" },
      ],
      armor: [
        { name: "FY-5 ERA MK1", bonus: "+230mm protection" },
        { name: "FY-5 ERA MK2", bonus: "+460mm protection" },
        { name: "FY-5 ERA MK3", bonus: "+690mm protection" },
      ],
      fireControl: [
        { name: "Type 99A FCS MK1", bonus: "+20% accuracy" },
        { name: "Type 99A FCS MK2", bonus: "+36% accuracy" },
        { name: "Type 99A FCS MK3", bonus: "+52% accuracy" },
      ],
    },
  },
  {
    id: 121,
    name: "ZTZ99-III",
    type: "Main Battle Tank",
    faction: "Chinese",
    tier: "IV",
    image: "ZTZ99-III.jpg",
    description: "Latest variant with enhanced armor package and improved battlefield management systems.",
    stats: { health: 38500, speed: 70, armor: "1200mm", agility: 72 },
    weapons: [
      { name: "ZPT98A 125mm", type: "Main Gun", damage: 16800, penetration: 900 },
      { name: "GP125A", type: "ATGM", damage: 19800, penetration: 1300 },
      { name: "QJC88A 12.7mm", type: "Machine Gun", damage: 240, penetration: 38, rateOfFire: "650 rpm" },
    ],
    modules: {
      engine: [
        { name: "150HB-2 Diesel MK1", bonus: "+13 km/h speed" },
        { name: "150HB-2 Diesel MK2", bonus: "+26 km/h speed" },
        { name: "150HB-2 Diesel MK3", bonus: "+39 km/h speed" },
      ],
      armor: [
        { name: "FY-6 ERA MK1", bonus: "+240mm protection" },
        { name: "FY-6 ERA MK2", bonus: "+480mm protection" },
        { name: "FY-6 ERA MK3", bonus: "+720mm protection" },
      ],
      fireControl: [
        { name: "Digital BMS MK1", bonus: "+21% accuracy" },
        { name: "Digital BMS MK2", bonus: "+37% accuracy" },
        { name: "Digital BMS MK3", bonus: "+53% accuracy" },
      ],
    },
  },
  {
    id: 122,
    name: "Challenger 3",
    type: "Main Battle Tank",
    faction: "British",
    tier: "IV",
    image: "Challenger-3.jpg",
    description: "Next-generation British main battle tank with smoothbore gun and digital turret.",
    stats: { health: 38800, speed: 59, armor: "1180mm", agility: 65 },
    weapons: [
      { name: "Rheinmetall L55A1 120mm", type: "Main Gun", damage: 16500, penetration: 880 },
      { name: "Brimstone ATGM", type: "Anti-Tank Missile", damage: 19500, penetration: 1280 },
      { name: "L94A1 7.62mm", type: "Machine Gun", damage: 140, penetration: 18, rateOfFire: "750 rpm" },
    ],
    modules: {
      engine: [
        { name: "CV12-9A MK1", bonus: "+9 km/h speed" },
        { name: "CV12-9A MK2", bonus: "+18 km/h speed" },
        { name: "CV12-9A MK3", bonus: "+27 km/h speed" },
      ],
      armor: [
        { name: "Dorchester 2F MK1", bonus: "+235mm protection" },
        { name: "Dorchester 2F MK2", bonus: "+470mm protection" },
        { name: "Dorchester 2F MK3", bonus: "+705mm protection" },
      ],
      fireControl: [
        { name: "SIACCS MK1", bonus: "+19% accuracy" },
        { name: "SIACCS MK2", bonus: "+34% accuracy" },
        { name: "SIACCS MK3", bonus: "+49% accuracy" },
      ],
    },
  },
  {
    id: 123,
    name: "EMBT 120",
    type: "Main Battle Tank",
    faction: "French",
    tier: "IV",
    image: "EMBT-120.jpg",
    description: "A hybrid European main battle tank, combining Leopard 2 chassis with Leclerc turret.",
    stats: { health: 37800, speed: 70, armor: "1160mm", agility: 74 },
    weapons: [
      { name: "Rheinmetall L55 120mm", type: "Main Gun", damage: 16200, penetration: 870 },
      { name: "PARS 3 LR", type: "ATGM", damage: 18800, penetration: 1220 },
      { name: "MG3A1 7.62mm", type: "Machine Gun", damage: 130, penetration: 16, rateOfFire: "1200 rpm" },
    ],
    modules: {
      engine: [
        { name: "MTU Euro Powerpack MK1", bonus: "+12 km/h speed" },
        { name: "MTU Euro Powerpack MK2", bonus: "+24 km/h speed" },
        { name: "MTU Euro Powerpack MK3", bonus: "+36 km/h speed" },
      ],
      armor: [
        { name: "AMAP Composite MK1", bonus: "+230mm protection" },
        { name: "AMAP Composite MK2", bonus: "+460mm protection" },
        { name: "AMAP Composite MK3", bonus: "+690mm protection" },
      ],
      fireControl: [
        { name: "European FCS MK1", bonus: "+20% accuracy" },
        { name: "European FCS MK2", bonus: "+36% accuracy" },
        { name: "European FCS MK3", bonus: "+52% accuracy" },
      ],
    },
  },
  {
    id: 124,
    name: "FV4034 Challenger 2 TES",
    type: "Main Battle Tank",
    faction: "British",
    tier: "IV",
    image: "FV4034-Challenger-2-TES.jpg",
    description: "A heavily upgraded British main battle tank with advanced armor for urban warfare.",
    stats: { health: 36200, speed: 56, armor: "1120mm", agility: 62 },
    weapons: [
      { name: "L30A1 120mm", type: "Main Gun", damage: 15500, penetration: 830 },
      { name: "L94A1 7.62mm", type: "Machine Gun", damage: 140, penetration: 18, rateOfFire: "750 rpm" },
      { name: "L37A2 7.62mm", type: "Coaxial MG", damage: 120, penetration: 15, rateOfFire: "750 rpm" },
    ],
    modules: {
      engine: [
        { name: "CV12-6A MK1", bonus: "+8 km/h speed" },
        { name: "CV12-6A MK2", bonus: "+16 km/h speed" },
        { name: "CV12-6A MK3", bonus: "+24 km/h speed" },
      ],
      armor: [
        { name: "Dorchester 2E MK1", bonus: "+220mm protection" },
        { name: "Dorchester 2E MK2", bonus: "+440mm protection" },
        { name: "Dorchester 2E MK3", bonus: "+660mm protection" },
      ],
      fireControl: [
        { name: "IFCS MK1", bonus: "+17% accuracy" },
        { name: "IFCS MK2", bonus: "+30% accuracy" },
        { name: "IFCS MK3", bonus: "+43% accuracy" },
      ],
    },
  },
  {
    id: 125,
    name: "Karrar",
    type: "Main Battle Tank",
    faction: "Iranian",
    tier: "IV",
    image: "Karrar.jpg",
    description: "An Iranian main battle tank, featuring upgraded armor, firepower, and technology from T-72 design.",
    stats: { health: 34500, speed: 65, armor: "980mm", agility: 68 },
    weapons: [
      { name: "2A46M 125mm", type: "Main Gun", damage: 14800, penetration: 800 },
      { name: "Toophan-5", type: "ATGM", damage: 17200, penetration: 1100 },
      { name: "DShK 12.7mm", type: "Machine Gun", damage: 200, penetration: 32, rateOfFire: "600 rpm" },
    ],
    modules: {
      engine: [
        { name: "V-84MS MK1", bonus: "+10 km/h speed" },
        { name: "V-84MS MK2", bonus: "+20 km/h speed" },
        { name: "V-84MS MK3", bonus: "+30 km/h speed" },
      ],
      armor: [
        { name: "Composite Armor MK1", bonus: "+195mm protection" },
        { name: "Composite Armor MK2", bonus: "+390mm protection" },
        { name: "Composite Armor MK3", bonus: "+585mm protection" },
      ],
      fireControl: [
        { name: "Karrar FCS MK1", bonus: "+16% accuracy" },
        { name: "Karrar FCS MK2", bonus: "+28% accuracy" },
        { name: "Karrar FCS MK3", bonus: "+40% accuracy" },
      ],
    },
  },
  {
    id: 126,
    name: "Leclerc S2 AZUR",
    type: "Main Battle Tank",
    faction: "French",
    tier: "IV",
    image: "Leclerc-S2-AZUR.jpg",
    description: "Upgraded French main battle tank with urban warfare package and improved armor.",
    stats: { health: 35800, speed: 71, armor: "1080mm", agility: 76 },
    weapons: [
      { name: "CN120-26 120mm", type: "Main Gun", damage: 15800, penetration: 850 },
      { name: "MILAN ATGM", type: "Anti-Tank Missile", damage: 17800, penetration: 1150 },
      { name: "M2HB 12.7mm", type: "Machine Gun", damage: 220, penetration: 35, rateOfFire: "550 rpm" },
    ],
    modules: {
      engine: [
        { name: "SACM V8X-1500 MK1", bonus: "+11 km/h speed" },
        { name: "SACM V8X-1500 MK2", bonus: "+22 km/h speed" },
        { name: "SACM V8X-1500 MK3", bonus: "+33 km/h speed" },
      ],
      armor: [
        { name: "Modular Armor MK1", bonus: "+215mm protection" },
        { name: "Modular Armor MK2", bonus: "+430mm protection" },
        { name: "Modular Armor MK3", bonus: "+645mm protection" },
      ],
      fireControl: [
        { name: "FINDERS MK1", bonus: "+18% accuracy" },
        { name: "FINDERS MK2", bonus: "+32% accuracy" },
        { name: "FINDERS MK3", bonus: "+46% accuracy" },
      ],
    },
  },
  {
    id: 127,
    name: "Object 640",
    type: "Main Battle Tank",
    faction: "Russian",
    tier: "IV",
    image: "Object-640.jpg",
    description: "The Object 640 “Black Eagle” is a Russian prototype main battle tank with modular armor.",
    stats: { health: 48000, speed: 73, armor: "1200mm", agility: 40.6 },
    weapons: [
      { name: "ZBK18M HEAT", type: "Main Gun", damage: 12390, penetration: 550 },
      { name: "ZOF25 HEI", type: "Main Gun", damage: 5000, penetration: 92 },
      { name: "ZBM42 APFSDS", type: "Main Gun", damage: 11700, penetration: 720 },
      { name: "9M119 HEAT", type: "Main Gun", damage: 10160, penetration: 750 },
    ],
    modules: {
      engine: [
        { name: "SACM V8X-1500 MK1", bonus: "+11 km/h speed" },
        { name: "SACM V8X-1500 MK2", bonus: "+22 km/h speed" },
        { name: "SACM V8X-1500 MK3", bonus: "+33 km/h speed" },
      ],
      armor: [
        { name: "Modular Armor MK1", bonus: "+215mm protection" },
        { name: "Modular Armor MK2", bonus: "+430mm protection" },
        { name: "Modular Armor MK3", bonus: "+645mm protection" },
      ],
      fireControl: [
        { name: "FINDERS MK1", bonus: "+18% accuracy" },
        { name: "FINDERS MK2", bonus: "+32% accuracy" },
        { name: "FINDERS MK3", bonus: "+46% accuracy" },
      ],
    },
  },
  {
    "id": 128,
    "name": "T-20 Monolit",
    "type": "Tank Destroyer",
    "faction": "Russian",
    "tier": "IV",
    image: "T-20-Monolit.jpg",
    "description": "Advanced Russian main battle tank equipped with a 2A42 autocannon, Kornet ATGMs, and a 30mm AGS-30 grenade launcher. Known for its formidable firepower and versatility on the battlefield.",
    "stats": {
      "health": 37100,
      "speed": 70,
      "reverseSpeed": 25,
      "turretRotationSpeed": 49.8,
      "hullRotationSpeed": 40,
      "armor": 400,
      "agility": 45
    },
    "weapons": [
      { "name": "2A42", "type": "Autocannon", "damage": 380, "penetration": 65, "rateOfFire": "1800 rpm", "reload": 6, "ammo": 600, "ammoInMagazine": 150, "range": 1666, "elevationAngle": "-10/30 degrees" },
      { "name": "9K135 Kornet", "type": "Laser-Guided ATGM", "damage": 9800, "penetration": 1200, "reload": 8, "ammo": 8, "ammoInMagazine": 1, "rateOfFire": "1 round/s", "range": 1566, "lockOnTime": "0 s" },
      { "name": "AGS-30", "type": "30mm Grenade Launcher", "damage": 380, "penetration": 65, "reload": 5, "ammo": 29, "ammoInMagazine": 1, "rateOfFire": "1.7 rounds/s", "range": 666 }
    ],
    "modules": {
      "engine": [
        { "name": "V-92S2F", "bonus": "+200 km/h speed" },
        { "name": "V-92S2F-M", "bonus": "+400 km/h speed" },
        { "name": "V-92S2F-2", "bonus": "+600 km/h speed" }
      ],
      "armor": [
        { "name": "Composite Armor MK1", "bonus": "+15% armor" },
        { "name": "Composite Armor MK2", "bonus": "+25% armor" },
        { "name": "Composite Armor MK3", "bonus": "+35% armor" }
      ],
      "electronics": [
        { "name": "T-05 Radar MK1", "bonus": "+20% detection" },
        { "name": "T-05 Radar MK2", "bonus": "+35% detection" },
        { "name": "T-05 Radar MK3", "bonus": "+50% detection" }
      ]
    }
  },
  {
    "id": 129,
    "name": "KF31 Lynx",
    "type": "Light Tank",
    "faction": "German",
    "tier": "IV",
    image: "KF31-Lynx.jpg",
    "description": "A versatile German infantry fighting vehicle equipped with a 30mm autocannon and Spike LR2 missiles, adaptable for various combat roles.",
    "stats": {
      "health": 22000,
      "speed": 80,
      "reverseSpeed": 30,
      "turretRotationSpeed": 50,
      "hullRotationSpeed": 45,
      "armor": 300,
      "agility": 70
    },
    "weapons": [
      { "name": "30mm LANCE Autocannon", "type": "Autocannon", "damage": 500, "penetration": 100, "rateOfFire": "600 rpm", "reload": 4, "ammo": 500, "ammoInMagazine": 100, "range": 2000, "elevationAngle": "-10/60 degrees" },
      { "name": "Spike LR2", "type": "Anti-Tank Guided Missile", "damage": 9800, "penetration": 750, "reload": 12, "ammo": 4, "ammoInMagazine": 1, "rateOfFire": "1 round/s", "range": 4000, "lockOnTime": "3 s" }
    ],
    "modules": {
      "engine": [
        { "name": "MTU MB 883 Ka-501", "bonus": "+200 km/h speed" },
        { "name": "MTU MB 883 Ka-502", "bonus": "+400 km/h speed" },
        { "name": "MTU MB 883 Ka-503", "bonus": "+600 km/h speed" }
      ],
      "armor": [
        { "name": "Composite Armor MK1", "bonus": "+15% armor" },
        { "name": "Composite Armor MK2", "bonus": "+25% armor" },
        { "name": "Composite Armor MK3", "bonus": "+35% armor" }
      ],
      "electronics": [
        { "name": "FCS MK1", "bonus": "+20% targeting accuracy" },
        { "name": "FCS MK2", "bonus": "+35% targeting accuracy" },
        { "name": "FCS MK3", "bonus": "+50% targeting accuracy" }
      ]
    }
  },
  {
    "id": 130,
    "name": "M10 Booker",
    "type": "Light Tank",
    "faction": "American",
    "tier": "IV",
    image: "M10-Booker.jpg",
    "description": "A mobile assault gun designed to neutralize fortified positions and light armor, featuring a 105mm M35 gun.",
    "stats": {
      "health": 28000,
      "speed": 60,
      "reverseSpeed": 20,
      "turretRotationSpeed": 30,
      "hullRotationSpeed": 35,
      "armor": 350,
      "agility": 45
    },
    "weapons": [
      { "name": "105mm M35 Gun", "type": "Main Gun", "damage": 12000, "penetration": 800, "reload": 10, "ammo": 40, "ammoInMagazine": 5, "rateOfFire": "1 round/s", "range": 3000, "elevationAngle": "-5/15 degrees" },
      { "name": "M240C 7.62mm", "type": "Coaxial MG", "damage": 200, "penetration": 50, "rateOfFire": "900 rpm", "reload": 2, "ammo": 1000, "ammoInMagazine": 200, "range": 800 }
    ],
    "modules": {
      "engine": [
        { "name": "Honeywell AGT1500", "bonus": "+150 km/h speed" },
        { "name": "Honeywell AGT1500-X", "bonus": "+300 km/h speed" },
        { "name": "Honeywell AGT1500-Y", "bonus": "+450 km/h speed" }
      ],
      "armor": [
        { "name": "Chobham Armor MK1", "bonus": "+20% armor" },
        { "name": "Chobham Armor MK2", "bonus": "+40% armor" },
        { "name": "Chobham Armor MK3", "bonus": "+60% armor" }
      ],
      "electronics": [
        { "name": "TIS MK1", "bonus": "+15% detection range" },
        { "name": "TIS MK2", "bonus": "+30% detection range" },
        { "name": "TIS MK3", "bonus": "+45% detection range" }
      ]
    }
  },
  {
    "id": 131,
    "name": "PL-01",
    "type": "Light Tank",
    "faction": "Polish",
    "tier": "IV",
    image: "PL-01.jpg",
    "description": "A concept stealth tank featuring a 120mm cannon and advanced camouflage systems.",
    "stats": {
      "health": 25000,
      "speed": 70,
      "reverseSpeed": 25,
      "turretRotationSpeed": 40,
      "hullRotationSpeed": 30,
      "armor": 320,
      "agility": 55
    },
    "weapons": [
      { "name": "120mm Cannon", "type": "Main Gun", "damage": 10000, "penetration": 900, "reload": 12, "ammo": 30, "ammoInMagazine": 5, "rateOfFire": "1 round/s", "range": 3500, "elevationAngle": "-5/15 degrees" },
      { "name": "7.62mm Coaxial MG", "type": "Coaxial MG", "damage": 150, "penetration": 40, "rateOfFire": "1000 rpm", "reload": 1, "ammo": 500, "ammoInMagazine": 100, "range": 800 }
    ],
    "modules": {
      "engine": [
        { "name": "MTU MB 838 CaM-500", "bonus": "+200 km/h speed" },
        { "name": "MTU MB 838 CaM-600", "bonus": "+400 km/h speed" },
        { "name": "MTU MB 838 CaM-700", "bonus": "+600 km/h speed" }
      ],
      "armor": [
        { "name": "Composite Armor MK1", "bonus": "+15% armor" },
        { "name": "Composite Armor MK2", "bonus": "+30% armor" },
        { "name": "Composite Armor MK3", "bonus": "+45% armor" }
      ],
      "electronics": [
        { "name": "Advanced FCS MK1", "bonus": "+20% targeting accuracy" },
        { "name": "Advanced FCS MK2", "bonus": "+40% targeting accuracy" },
        { "name": "Advanced FCS MK3", "bonus": "+60% targeting accuracy" }
      ]
    }
  },
  {
  "id": 132,
  "name": "M-SHORAD",
  "type": "Anti-Air",
  "faction": "American",
  "tier": "IV",
  image: "M-SHORAD.jpg",
  "description": "Mobile short-range air defense system equipped with autocannons, Stinger missiles, and radar-guided targeting.",
  "stats": {
    "health": 24000,
    "speed": 70,
    "reverseSpeed": 25,
    "turretRotationSpeed": 55,
    "hullRotationSpeed": 50,
    "armor": 250,
    "agility": 65
  },
  "weapons": [
    {
      "name": "M3P 30mm Autocannon",
      "type": "Autocannon",
      "damage": 300,
      "penetration": 80,
      "rateOfFire": "850 rpm",
      "ammo": 500,
      "ammoInMagazine": 100,
      "range": 1500
    },
    {
      "name": "FIM-92 Stinger",
      "type": "Surface-to-Air Missile",
      "damage": 9000,
      "penetration": 1000,
      "reload": 10,
      "ammo": 4,
      "ammoInMagazine": 1,
      "range": 3000,
      "lockOnTime": "2 s"
    }
  ],
  "modules": {
    "engine": [
      { "name": "Cummins 6VTA-903", "bonus": "+200 km/h speed" },
      { "name": "Cummins 6VTA-904", "bonus": "+400 km/h speed" },
      { "name": "Cummins 6VTA-905", "bonus": "+600 km/h speed" }
    ],
    "armor": [
      { "name": "Composite Armor MK1", "bonus": "+15% armor" },
      { "name": "Composite Armor MK2", "bonus": "+30% armor" },
      { "name": "Composite Armor MK3", "bonus": "+45% armor" }
    ],
    "electronics": [
      { "name": "FCS MK1", "bonus": "+20% targeting accuracy" },
      { "name": "FCS MK2", "bonus": "+40% targeting accuracy" },
      { "name": "FCS MK3", "bonus": "+60% targeting accuracy" }
    ]
  }
},
{
  "id": 133,
  "name": "TOS-1A",
  "type": "MLRS",
  "faction": "Russian",
  "tier": "IV",
  image: "TOS-1A.jpg",
  "description": "Heavy flamethrower rocket launcher mounted on a tank chassis, designed for area suppression and destruction of entrenched enemies.",
  "stats": {
    "health": 38000,
    "speed": 60,
    "reverseSpeed": 25,
    "turretRotationSpeed": 20,
    "hullRotationSpeed": 30,
    "armor": 400,
    "agility": 35
  },
  "weapons": [
    {
      "name": "Thermobaric Rockets",
      "type": "Rocket Launcher",
      "damage": 12000,
      "penetration": 200,
      "reload": 20,
      "ammo": 24,
      "ammoInMagazine": 12,
      "range": 3500
    }
  ],
  "modules": {
    "engine": [
      { "name": "V-84A Diesel", "bonus": "+150 km/h speed" },
      { "name": "V-84A-X", "bonus": "+300 km/h speed" },
      { "name": "V-84A-Y", "bonus": "+450 km/h speed" }
    ],
    "armor": [
      { "name": "Heavy Armor MK1", "bonus": "+20% armor" },
      { "name": "Heavy Armor MK2", "bonus": "+40% armor" },
      { "name": "Heavy Armor MK3", "bonus": "+60% armor" }
    ],
    "electronics": [
      { "name": "TOS Targeting System MK1", "bonus": "+20% accuracy" },
      { "name": "TOS Targeting System MK2", "bonus": "+40% accuracy" },
      { "name": "TOS Targeting System MK3", "bonus": "+60% accuracy" }
    ]
  }
},
{
    id: 134,
    name: "M270 MLRS",
    type: "MLRS",
    faction: "American",
    tier: "IV",
    image: "M270-MLRS.jpg",
    description: "Multiple Launch Rocket System capable of delivering devastating area bombardment.",
    stats: { health: 28500, speed: 64, armor: "450mm", agility: 45 },
    weapons: [
      { name: "M31 GMLRS", type: "Guided Rocket", damage: 22000, penetration: 800 },
      { name: "ATACMS", type: "Tactical Missile", damage: 35000, penetration: 1200 },
      { name: "M240 7.62mm", type: "Machine Gun", damage: 140, penetration: 18, rateOfFire: "750 rpm" },
    ],
    modules: {
      engine: [
        { name: "Cummins VTA-903T MK1", bonus: "+8 km/h speed" },
        { name: "Cummins VTA-903T MK2", bonus: "+16 km/h speed" },
        { name: "Cummins VTA-903T MK3", bonus: "+24 km/h speed" },
      ],
      armor: [
        { name: "Aluminum Armor MK1", bonus: "+80mm protection" },
        { name: "Aluminum Armor MK2", bonus: "+160mm protection" },
        { name: "Aluminum Armor MK3", bonus: "+240mm protection" },
      ],
      fireControl: [
        { name: "AFATDS MK1", bonus: "+20% accuracy" },
        { name: "AFATDS MK2", bonus: "+35% accuracy" },
        { name: "AFATDS MK3", bonus: "+50% accuracy" },
      ],
    },
  },
{
  "id": 135,
  "name": "PLZ-05",
  "type": "SPA",
  "faction": "Chinese",
  "tier": "IV",
  image: "PLZ-05.jpg",
  "description": "Modern 155mm self-propelled howitzer designed for long-range artillery support and rapid deployment.",
  "stats": {
    "health": 32000,
    "speed": 65,
    "reverseSpeed": 25,
    "turretRotationSpeed": 25,
    "hullRotationSpeed": 30,
    "armor": 350,
    "agility": 40
  },
  "weapons": [
    {
      "name": "155mm Howitzer",
      "type": "Artillery",
      "damage": 14000,
      "penetration": 100,
      "reload": 20,
      "ammo": 40,
      "ammoInMagazine": 5,
      "range": 4000
    }
  ],
  "modules": {
    "engine": [
      { "name": "Deutz Diesel BF6M1015", "bonus": "+200 km/h speed" },
      { "name": "Deutz Diesel BF6M1015-X", "bonus": "+400 km/h speed" },
      { "name": "Deutz Diesel BF6M1015-Y", "bonus": "+600 km/h speed" }
    ],
    "armor": [
      { "name": "Medium Armor MK1", "bonus": "+15% armor" },
      { "name": "Medium Armor MK2", "bonus": "+30% armor" },
      { "name": "Medium Armor MK3", "bonus": "+45% armor" }
    ],
    "electronics": [
      { "name": "FCS Artillery MK1", "bonus": "+20% targeting accuracy" },
      { "name": "FCS Artillery MK2", "bonus": "+40% targeting accuracy" },
      { "name": "FCS Artillery MK3", "bonus": "+60% targeting accuracy" }
    ]
  }
},
{
  "id": 136,
  "name": "M109A6 Paladin",
  "type": "SPA",
  "faction": "American",
  "tier": "IV",
  image: "M109A6-Paladin.jpg",
  "description": "Modernized 155mm self-propelled artillery system providing rapid, accurate fire support for ground forces.",
  "stats": {
    "health": 34000,
    "speed": 60,
    "reverseSpeed": 25,
    "turretRotationSpeed": 25,
    "hullRotationSpeed": 30,
    "armor": 350,
    "agility": 38
  },
  "weapons": [
    {
      "name": "155mm Howitzer",
      "type": "Artillery",
      "damage": 13500,
      "penetration": 100,
      "reload": 18,
      "ammo": 40,
      "ammoInMagazine": 5,
      "range": 4000
    }
  ],
  "modules": {
    "engine": [
      { "name": "Detroit Diesel 8V71T", "bonus": "+150 km/h speed" },
      { "name": "Detroit Diesel 8V71T-X", "bonus": "+300 km/h speed" },
      { "name": "Detroit Diesel 8V71T-Y", "bonus": "+450 km/h speed" }
    ],
    "armor": [
      { "name": "Medium Armor MK1", "bonus": "+15% armor" },
      { "name": "Medium Armor MK2", "bonus": "+30% armor" },
      { "name": "Medium Armor MK3", "bonus": "+45% armor" }
    ],
    "electronics": [
      { "name": "FCS Artillery MK1", "bonus": "+20% targeting accuracy" },
      { "name": "FCS Artillery MK2", "bonus": "+40% targeting accuracy" },
      { "name": "FCS Artillery MK3", "bonus": "+60% targeting accuracy" }
    ]
  }
},

{
  "id": 137,
  "name": "FK 2000",
  "type": "Anti-Air",
  "faction": "Chinese",
  "tier": "IV",
  image: "FK-2000.jpg",
  "description": "Modern Chinese mobile anti-aircraft system with radar-guided missiles and rapid-fire autocannons for air defense.",
  "stats": {
    "health": 28000,
    "speed": 70,
    "reverseSpeed": 25,
    "turretRotationSpeed": 60,
    "hullRotationSpeed": 50,
    "armor": 300,
    "agility": 60
  },
  "weapons": [
    {
      "name": "Type 98 35mm Autocannon",
      "type": "Autocannon",
      "damage": 350,
      "penetration": 70,
      "rateOfFire": "1000 rpm",
      "ammo": 500,
      "ammoInMagazine": 100,
      "range": 2000
    },
    {
      "name": "PL-9 Missile",
      "type": "Surface-to-Air Missile",
      "damage": 9000,
      "penetration": 1000,
      "reload": 8,
      "ammo": 8,
      "ammoInMagazine": 2,
      "range": 4000,
      "lockOnTime": "2 s"
    }
  ],
  "modules": {
    "engine": [
      { "name": "Diesel 6V150", "bonus": "+200 km/h speed" },
      { "name": "Diesel 6V150-X", "bonus": "+400 km/h speed" },
      { "name": "Diesel 6V150-Y", "bonus": "+600 km/h speed" }
    ],
    "armor": [
      { "name": "Composite Armor MK1", "bonus": "+15% armor" },
      { "name": "Composite Armor MK2", "bonus": "+30% armor" },
      { "name": "Composite Armor MK3", "bonus": "+45% armor" }
    ],
    "electronics": [
      { "name": "Radar FCS MK1", "bonus": "+20% targeting accuracy" },
      { "name": "Radar FCS MK2", "bonus": "+40% targeting accuracy" },
      { "name": "Radar FCS MK3", "bonus": "+60% targeting accuracy" }
    ]
  }
},

{
  "id": 138,
  "name": "BM-57-2 Kochevnik",
  "type": "Tank Destroyer",
  "faction": "Russian",
  "tier": "IV",
  image: "BM-57-2-Kochevnik.jpg",
  "description": "A modern Russian heavy tank armed with a 125mm smoothbore cannon and multiple defensive systems, built for frontline dominance.",
  "stats": {
    "health": 42000,
    "speed": 65,
    "reverseSpeed": 25,
    "turretRotationSpeed": 45,
    "hullRotationSpeed": 40,
    "armor": 500,
    "agility": 50
  },
  "weapons": [
    {
      "name": "125mm 2A82 Cannon",
      "type": "Main Gun",
      "damage": 14000,
      "penetration": 1000,
      "reload": 12,
      "ammo": 40,
      "ammoInMagazine": 5,
      "rateOfFire": "1 round/s",
      "range": 3500,
      "elevationAngle": "-5/15 degrees"
    },
    {
      "name": "PKT 7.62mm Coaxial MG",
      "type": "Coaxial MG",
      "damage": 200,
      "penetration": 50,
      "rateOfFire": "900 rpm",
      "ammo": 1000,
      "ammoInMagazine": 200,
      "range": 800
    }
  ],
  "modules": {
    "engine": [
      { "name": "V-92S2F Diesel", "bonus": "+200 km/h speed" },
      { "name": "V-92S2F-X Diesel", "bonus": "+400 km/h speed" },
      { "name": "V-92S2F-Y Diesel", "bonus": "+600 km/h speed" }
    ],
    "armor": [
      { "name": "Reactive Armor MK1", "bonus": "+20% armor" },
      { "name": "Reactive Armor MK2", "bonus": "+40% armor" },
      { "name": "Reactive Armor MK3", "bonus": "+60% armor" }
    ],
    "electronics": [
      { "name": "Advanced FCS MK1", "bonus": "+20% targeting accuracy" },
      { "name": "Advanced FCS MK2", "bonus": "+40% targeting accuracy" },
      { "name": "Advanced FCS MK3", "bonus": "+60% targeting accuracy" }
    ]
  }
},
{
    id: 200,
    name: "Mi-28NM",
    type: "Helicopter",
    faction: "Russian",
    tier: "IV",
    image: "Mi-28NM.jpg",
    description: "Night hunter attack helicopter with all-weather combat capability.",
    stats: { health: 22000, speed: 295, verticalSpeed: 15, agility: 75 },
    weapons: [
      { name: "9M120 Ataka-V", type: "ATGM", damage: 17800, penetration: 1200 },
      { name: "S-13 Rockets", type: "Rocket Pod", damage: 9200, penetration: 420 },
      { name: "2A42 30mm", type: "Autocannon", damage: 450, penetration: 80, rateOfFire: "550 rpm" },
    ],
    modules: {
      engine: [
        { name: "VK-2500P MK1", bonus: "+22 km/h speed" },
        { name: "VK-2500P MK2", bonus: "+44 km/h speed" },
        { name: "VK-2500P MK3", bonus: "+66 km/h speed" },
      ],
      survivability: [
        { name: "Armor Plating MK1", bonus: "+12% protection" },
        { name: "Armor Plating MK2", bonus: "+24% protection" },
        { name: "Armor Plating MK3", bonus: "+36% protection" },
      ],
      avionics: [
        { name: "N025 Radar MK1", bonus: "+18% detection" },
        { name: "N025 Radar MK2", bonus: "+32% detection" },
        { name: "N025 Radar MK3", bonus: "+46% detection" },
      ],
    },
  },
  {
    id: 201,
    name: "WZ-10",
    type: "Helicopter",
    faction: "Chinese",
    tier: "IV",
    image: "WZ-10.jpg",
    description: "Dedicated attack helicopter with tandem-seat configuration and advanced sensors.",
    stats: { health: 19000, speed: 270, verticalSpeed: 14, agility: 72 },
    weapons: [
      { name: "HJ-10", type: "ATGM", damage: 16500, penetration: 1100 },
      { name: "TY-90 AAM", type: "Air-to-Air Missile", damage: 8800, penetration: 440 },
      { name: "Type 23-2K 23mm", type: "Autocannon", damage: 380, penetration: 68, rateOfFire: "800 rpm" },
    ],
    modules: {
      engine: [
        { name: "WZ-9 Turboshaft MK1", bonus: "+20 km/h speed" },
        { name: "WZ-9 Turboshaft MK2", bonus: "+40 km/h speed" },
        { name: "WZ-9 Turboshaft MK3", bonus: "+60 km/h speed" },
      ],
      survivability: [
        { name: "Composite Armor MK1", bonus: "+10% protection" },
        { name: "Composite Armor MK2", bonus: "+20% protection" },
        { name: "Composite Armor MK3", bonus: "+30% protection" },
      ],
      avionics: [
        { name: "Millimeter Wave Radar MK1", bonus: "+16% detection" },
        { name: "Millimeter Wave Radar MK2", bonus: "+28% detection" },
        { name: "Millimeter Wave Radar MK3", bonus: "+40% detection" },
      ],
    },
  },
  {
    id: 202,
    name: "Z-19E",
    type: "Helicopter",
    faction: "Chinese",
    tier: "IV",
    image: "Z-19E.jpg",
    description: "Light attack and reconnaissance helicopter with stealth characteristics.",
    stats: { health: 16000, speed: 280, verticalSpeed: 15, agility: 85 },
    weapons: [
      { name: "HJ-10", type: "ATGM", damage: 15800, penetration: 1050 },
      { name: "TY-90 AAM", type: "Air-to-Air Missile", damage: 8500, penetration: 420 },
      { name: "Type 23-2K 23mm", type: "Autocannon", damage: 360, penetration: 65, rateOfFire: "800 rpm" },
    ],
    modules: {
      engine: [
        { name: "WZ-8C Turboshaft MK1", bonus: "+18 km/h speed" },
        { name: "WZ-8C Turboshaft MK2", bonus: "+36 km/h speed" },
        { name: "WZ-8C Turboshaft MK3", bonus: "+54 km/h speed" },
      ],
      survivability: [
        { name: "Stealth Features MK1", bonus: "+12% evasion" },
        { name: "Stealth Features MK2", bonus: "+22% evasion" },
        { name: "Stealth Features MK3", bonus: "+32% evasion" },
      ],
      avionics: [
        { name: "EO/IR System MK1", bonus: "+14% detection" },
        { name: "EO/IR System MK2", bonus: "+26% detection" },
        { name: "EO/IR System MK3", bonus: "+38% detection" },
      ],
    },
  },
  
  {
    id: 203,
    name: "Ka-58 Black Ghost",
    type: "Helicopter",
    faction: "Russian",
    tier: "IV",
    image: "Ka-58-Black-Ghost.jpg",
    description: "Stealth attack helicopter with advanced composite materials and reduced signature.",
    stats: { health: 20000, speed: 320, verticalSpeed: 19, agility: 88 },
    weapons: [
      { name: "9M120 Ataka-V", type: "ATGM", damage: 18200, penetration: 1220 },
      { name: "S-25 Rockets", type: "Heavy Rocket Pod", damage: 12500, penetration: 580 },
      { name: "2A42 30mm", type: "Autocannon", damage: 480, penetration: 85, rateOfFire: "550 rpm" },
    ],
    modules: {
      engine: [
        { name: "VK-2500M MK1", bonus: "+28 km/h speed" },
        { name: "VK-2500M MK2", bonus: "+56 km/h speed" },
        { name: "VK-2500M MK3", bonus: "+84 km/h speed" },
      ],
      survivability: [
        { name: "Stealth Coating MK1", bonus: "+18% evasion" },
        { name: "Stealth Coating MK2", bonus: "+32% evasion" },
        { name: "Stealth Coating MK3", bonus: "+46% evasion" },
      ],
      avionics: [
        { name: "Advanced Radar MK1", bonus: "+22% detection" },
        { name: "Advanced Radar MK2", bonus: "+38% detection" },
        { name: "Advanced Radar MK3", bonus: "+54% detection" },
      ],
    },
  },
  {
    id: 204,
    name: "SB-1",
    type: "Helicopter",
    faction: "American",
    tier: "IV",
    image: "SB-1.jpg",
    description: "High-speed American compound helicopter with heavy firepower including Storm Shadow missiles in MWT.",
    stats: { health: 24000, speed: 350, verticalSpeed: 70, agility: 72 },
    weapons: [
      { name: "Storm Shadow", type: "Guided Bomb/Missile", damage: 5500, penetration: 300 },
      { name: "AGM-114 Hellfire", type: "ATGM", damage: 3200, penetration: 200 },
      { name: "AIM-120 AMRAAM", type: "AAM", damage: 2200, penetration: 120 },
      { name: "SPPU-22-1 Gun Pod", type: "Gun Pod", damage: 200, penetration: 30 }
    ],
    modules: {
      engine: [
        { name: "Compound Rotary Jet MK1", bonus: "+10% speed" },
        { name: "Compound Rotary Jet MK2", bonus: "+20% speed" }
      ],
      avionics: [
        { name: "Advanced Avionics Suite MK1", bonus: "+25% detection & targeting" },
        { name: "Advanced Avionics Suite MK2", bonus: "+50% detection & targeting" }
      ],
      defense: [
        { name: "DIRCM MK1", bonus: "+25% countermeasures" },
        { name: "DIRCM MK2", bonus: "+45% countermeasures" }
      ]
    }
  },
  
  {
    id: 205,
    name: "Ka-52M",
    type: "Helicopter",
    faction: "Russian",
    tier: "IV",
    image: "Ka-52M.jpg",
    description: "Advanced reconnaissance and attack helicopter with coaxial rotor design.",
    stats: { health: 21000, speed: 310, verticalSpeed: 16, agility: 80 },
    weapons: [
      { name: "Vikhr ATGM", type: "Anti-Tank Missile", damage: 16800, penetration: 1120 },
      { name: "S-8 Rockets", type: "Rocket Pod", damage: 7800, penetration: 350 },
      { name: "2A42 30mm", type: "Autocannon", damage: 450, penetration: 80, rateOfFire: "550 rpm" },
    ],
    modules: {
      engine: [
        { name: "VK-2500 MK1", bonus: "+25 km/h speed" },
        { name: "VK-2500 MK2", bonus: "+50 km/h speed" },
        { name: "VK-2500 MK3", bonus: "+75 km/h speed" },
      ],
      survivability: [
        { name: "Chaff/Flare MK1", bonus: "+12% evasion" },
        { name: "Chaff/Flare MK2", bonus: "+24% evasion" },
        { name: "Chaff/Flare MK3", bonus: "+36% evasion" },
      ],
      avionics: [
        { name: "Arbalet Radar MK1", bonus: "+18% detection" },
        { name: "Arbalet Radar MK2", bonus: "+32% detection" },
        { name: "Arbalet Radar MK3", bonus: "+46% detection" },
      ],
    },
  },
    {
    id: 206,
    name: "AH-84",
    type: "Helicopter",
    faction: "American",
    tier: "IV",
    image: "AH-84.jpg",
    description: "Next-generation attack helicopter with stealth features and advanced weapons.",
    stats: { health: 21500, speed: 325, verticalSpeed: 20, agility: 82 },
    weapons: [
      { name: "AGM-179 JAGM", type: "Multi-Purpose Missile", damage: 17500, penetration: 1180 },
      { name: "Hydra 70 Rockets", type: "Rocket Pod", damage: 8500, penetration: 390 },
      { name: "M230LF 30mm", type: "Chain Gun", damage: 450, penetration: 80, rateOfFire: "625 rpm" },
    ],
    modules: {
      engine: [
        { name: "T901 Turboshaft MK1", bonus: "+25 km/h speed" },
        { name: "T901 Turboshaft MK2", bonus: "+50 km/h speed" },
        { name: "T901 Turboshaft MK3", bonus: "+75 km/h speed" },
      ],
      survivability: [
        { name: "Stealth Coating MK1", bonus: "+15% evasion" },
        { name: "Stealth Coating MK2", bonus: "+28% evasion" },
        { name: "Stealth Coating MK3", bonus: "+40% evasion" },
      ],
      avionics: [
        { name: "MTADS/PNVS MK1", bonus: "+20% detection" },
        { name: "MTADS/PNVS MK2", bonus: "+35% detection" },
        { name: "MTADS/PNVS MK3", bonus: "+50% detection" },
      ],
    },
  },
  {
  id: 300,
  name: "Mitsubishi F-2B",
  type: "Fighter Jet",
  faction: "Japanese",
  tier: "III",
  image: "Mitsubishi-F-2B.jpg",
  description: "Multirole fighter developed from the F-16, optimized for anti-ship and air-to-air roles.",
  stats: { health: 19200, speed: 750, afterburnerSpeed: 1900, agility: 80 },
  weapons: [
    { "name": "GCS-1", "type": "Autocannon", "damage": 14300, "penetration": 120, "reload": 25 },
      { "name": "JLAU-3/A", "type": "Rocket Pod", "damage": 5200, "penetration": 128, "reload": 20 },
      { "name": "GBU-38", "type": "Guided Bomb", "damage": 14300, "penetration": 120, "reload": 25 },
      { "name": "GBU-32", "type": "Guided Bomb", "damage": 15700, "penetration": 200, "reload": 35 },
      { "name": "GBU-31", "type": "Guided Bomb", "damage": 19400, "penetration": 360, "reload": 40 },
      { "name": "AAM-3", "type": "Short-Range AAM", "damage": 5900, "penetration": 45, "reload": 15 },
      { "name": "AAM-5", "type": "Short-Range AAM", "damage": 6100, "penetration": 60, "reload": 20 },
      { "name": "AAM-4", "type": "BVR AAM", "damage": 7500, "penetration": 75, "reload": 30 },
      { "name": "AAM-6", "type": "BVR AAM", "damage": 8100, "penetration": 85, "reload": 35 },
      { "name": "ASM-3", "type": "Anti-Ship Missile", "damage": 19400, "penetration": 240, "reload": 38 }

  ],
  modules: {
    engine: [
      { name: "IHI XF5-1 MK1", bonus: "+200 km/h speed" },
      { name: "IHI XF5-1 MK2", bonus: "+400 km/h speed" }
    ],
    avionics: [
      { name: "J/APG-2 Radar MK1", bonus: "+20% detection" },
      { name: "J/APG-2 Radar MK2", bonus: "+40% detection" }
    ],
    stealth: [
      { name: "RAM Coating MK1", bonus: "+15% stealth" }
    ]
  }
},
  {
    id: 301,
    name: "F-16C Night Falcon",
    type: "Fighter Jet",
    faction: "American",
    tier: "III",
    description: "Multi-role fighter with advanced night vision and precision strike capabilities.",
    image: "F-16C-Night-Falcon.jpg",
    stats: { health: 18500, speed: 1320, afterburnerSpeed: 2124, agility: 92 },
    weapons: [
       { name: "GBU-38", type: "Guided Bomb", damage: 14300, penetration: 120, reload: 25 },
    { name: "LAU-61", type: "Rocket Pod", damage: 4100, penetration: 290, reload: 20 },
    { name: "GBU-39", type: "Guided Bomb", damage: 14700, penetration: 120, reload: 28 },
    { name: "GBU-31", type: "Guided Bomb", damage: 19400, penetration: 360, reload: 40 },
    { name: "GBU-12", type: "Guided Bomb", damage: 18590, penetration: 120, reload: 30 },
    { name: "AIM-7", type: "Medium-Range AAM", damage: 6200, penetration: 65, reload: 20 },
    { name: "AGM-65", type: "Air-to-Surface Missile", damage: 11000, penetration: 830, reload: 22 },
    { name: "AIM-120", type: "Medium-Range AAM", damage: 11300, penetration: 60, reload: 20 },
    { name: "AGM-84H/K", type: "Anti-Ship Missile", damage: 18900, penetration: 310, reload: 35 }

    ],
    modules: {
      engine: [
        { name: "F100-PW-229 MK1", bonus: "+110 km/h speed" },
        { name: "F100-PW-229 MK2", bonus: "+220 km/h speed" },
        { name: "F100-PW-229 MK3", bonus: "+330 km/h speed" },
      ],
      stealth: [
        { name: "ECM Suite MK1", bonus: "+10% stealth" },
        { name: "ECM Suite MK2", bonus: "+20% stealth" },
        { name: "ECM Suite MK3", bonus: "+30% stealth" },
      ],
      avionics: [
        { name: "AN/APG-68 MK1", bonus: "+16% detection" },
        { name: "AN/APG-68 MK2", bonus: "+28% detection" },
        { name: "AN/APG-68 MK3", bonus: "+40% detection" },
      ],
    },
  },
  {
  id: 302,
  name: "F/A-18F Super Hornet",
  type: "Fighter Jet",
  faction: "American",
  tier: "III",
  image: "FA-18F-Super-Hornet.jpg",
  description: "Twin-engine carrier-based multirole fighter with excellent versatility for both air-to-air and air-to-ground combat.",
  stats: { health: 19800, speed: 770, afterburnerSpeed: 1985, agility: 46 },
  weapons: [
    { "name": "GBU-32", "type": "Guided Bomb", "damage": 15700, "penetration": 200, "reload": 35 },
      { "name": "GBU-12", "type": "Guided Bomb", "damage": 18590, "penetration": 120, "reload": 30 },
      { "name": "AGM-65", "type": "Air-to-Ground Missile", "damage": 11000, "penetration": 830, "reload": 22 },
      { "name": "AIM-132", "type": "Short-Range Air-to-Air Missile", "damage": 5200, "penetration": 65, "reload": 15 },
      { "name": "AIM-120", "type": "Beyond Visual Range Air-to-Air Missile", "damage": 11300, "penetration": 60, "reload": 20 }
  ],
  modules: {
    engine: [
      { name: "F414-GE-400 MK1", bonus: "+150 km/h speed" },
      { name: "F414-GE-400 MK2", bonus: "+300 km/h speed" },
      { name: "F414-GE-400 MK3", bonus: "+450 km/h speed" }
    ],
    avionics: [
      { name: "APG-79 AESA Radar MK1", bonus: "+20% detection" },
      { name: "APG-79 AESA Radar MK2", bonus: "+35% detection" },
      { name: "APG-79 AESA Radar MK3", bonus: "+50% detection" }
    ],
    survivability: [
      { name: "ALE-55 Towed Decoy MK1", bonus: "+15% evasion" },
      { name: "ALE-55 Towed Decoy MK2", bonus: "+30% evasion" },
      { name: "ALE-55 Towed Decoy MK3", bonus: "+45% evasion" }
    ],
  },
},
{
  id: 303,
  name: "J-16",
  type: "Fighter Jet",
  faction: "Chinese",
  tier: "III",
  image: "J16.jpg",
  description: "Chinese twin-seat multirole fighter derived from Su-30, capable of carrying heavy weapons payload.",
  stats: { health: 21000, speed: 780, afterburnerSpeed: 2050, agility: 48 },
  weapons: [
    { "name": "FT-3", "type": "Air-to-Ground Missile", "damage": 15800, "penetration": 210, "reload": 34 },
      { "name": "LS-6/250", "type": "Guided Bomb", "damage": 17300, "penetration": 300, "reload": 40 },
      { "name": "KD-88", "type": "Air-to-Ground Missile", "damage": 16200, "penetration": 170, "reload": 36 },
      { "name": "PL-10", "type": "Short-Range Air-to-Air Missile", "damage": 7400, "penetration": 60, "reload": 20 },
      { "name": "PL-15", "type": "Beyond Visual Range Air-to-Air Missile", "damage": 7800, "penetration": 70, "reload": 30 },
      { "name": "AKF-98A", "type": "Air-to-Ground Missile", "damage": 20500, "penetration": 410, "reload": 40 }

  ],
  modules: {
    engine: [
      { name: "WS-10A MK1", bonus: "+150 km/h speed" },
      { name: "WS-10A MK2", bonus: "+300 km/h speed" },
      { name: "WS-10A MK3", bonus: "+450 km/h speed" }
    ],
    avionics: [
      { name: "KLJ-7A Radar MK1", bonus: "+20% detection" },
      { name: "KLJ-7A Radar MK2", bonus: "+35% detection" },
      { name: "KLJ-7A Radar MK3", bonus: "+50% detection" }
    ],
    survivability: [
      { name: "ECM Suite MK1", bonus: "+15% evasion" },
      { name: "ECM Suite MK2", bonus: "+30% evasion" },
      { name: "ECM Suite MK3", bonus: "+45% evasion" }
    ],
  },
},
{
  id: 304,
  name: "Su-37 Terminator",
  type: "Fighter Jet",
  faction: "Russian",
  tier: "III",
  image: "Su-37-Terminator.jpg",
  description: "Experimental Russian fighter with thrust-vectoring for extreme maneuverability.",
  stats: { health: 20500, speed: 765, afterburnerSpeed: 2020, agility: 82 },
  weapons: [
    { "name": "B8M1", "type": "Unguided Rocket", "damage": 5100, "penetration": 420, "reload": 20 },
      { "name": "FAB-250", "type": "Unguided Bomb", "damage": 15100, "penetration": 130, "reload": 30 },
      { "name": "Kh-MD-E", "type": "Air-to-Ground Missile", "damage": 12400, "penetration": 250, "reload": 20 },
      { "name": "R-73", "type": "Short-Range Air-to-Air Missile", "damage": 4800, "penetration": 56, "reload": 15 },
      { "name": "Kh-38ME", "type": "Air-to-Ground Missile", "damage": 17300, "penetration": 230, "reload": 40 },
      { "name": "R-27", "type": "Medium-Range Air-to-Air Missile", "damage": 8100, "penetration": 80, "reload": 20 },
      { "name": "Kh-59M", "type": "Air-to-Ground Missile", "damage": 18400, "penetration": 280, "reload": 50 },
      { "name": "Kh-31", "type": "Air-to-Ground Missile", "damage": 14900, "penetration": 130, "reload": 46 }

  ],
  modules: {
    engine: [
      { name: "AL-37FU MK1", bonus: "+150 km/h speed" },
      { name: "AL-37FU MK2", bonus: "+300 km/h speed" },
      { name: "AL-37FU MK3", bonus: "+450 km/h speed" }
    ],
    avionics: [
      { name: "N011M Radar MK1", bonus: "+20% detection" },
      { name: "N011M Radar MK2", bonus: "+35% detection" },
      { name: "N011M Radar MK3", bonus: "+50% detection" }
    ],
    agility: [
      { name: "Thrust Vectoring MK1", bonus: "+10% agility" },
      { name: "Thrust Vectoring MK2", bonus: "+20% agility" },
      { name: "Thrust Vectoring MK3", bonus: "+30% agility" }
    ],
  },
},
{
  id: 305,
  name: "Su-25UB",
  type: "Fighter Jet",
  faction: "Russian",
  tier: "III",
  image: "Su-25UB.jpg",
  description: "Twin-seat variant of the Su-25, specialized for ground attack with heavy armor.",
  stats: { health: 24500, speed: 720, afterburnerSpeed: 1680, agility: 28 },
  weapons: [
    { "name": "B8M1", "type": "Unguided Rocket", "damage": 5100, "penetration": 420, "reload": 20 },
      { "name": "FAB-250", "type": "Unguided Bomb", "damage": 15100, "penetration": 130, "reload": 30 },
      { "name": "SPPU-22-1", "type": "Autocannon", "damage": 400, "penetration": 71, "reload": 25 },
      { "name": "B-13L", "type": "Autocannon", "damage": 9200, "penetration": 160, "reload": 40 },
      { "name": "KAB500KR", "type": "Guided Bomb", "damage": 17800, "penetration": 320, "reload": 40 },
      { "name": "R-60", "type": "Short-Range Air-to-Air Missile", "damage": 4600, "penetration": 36, "reload": 10 },
      { "name": "R-73", "type": "Short-Range Air-to-Air Missile", "damage": 4800, "penetration": 56, "reload": 15 },
      { "name": "Kh-25MLE", "type": "Air-to-Ground Missile", "damage": 16000, "penetration": 160, "reload": 35 },
      { "name": "9K121 Vikhr", "type": "Anti-Tank Guided Missile", "damage": 7800, "penetration": 1000, "reload": 30 },
      { "name": "Kh-29T", "type": "Air-to-Ground Missile", "damage": 17800, "penetration": 280, "reload": 38 }

  ],
  modules: {
    armor: [
      { name: "Cockpit Armor MK1", bonus: "+10% survivability" },
      { name: "Cockpit Armor MK2", bonus: "+20% survivability" },
      { name: "Cockpit Armor MK3", bonus: "+30% survivability" }
    ],
    engine: [
      { name: "R-195 Engine MK1", bonus: "+100 km/h speed" },
      { name: "R-195 Engine MK2", bonus: "+200 km/h speed" },
      { name: "R-195 Engine MK3", bonus: "+300 km/h speed" }
    ],
  },
},
{
  id: 306,
  name: "Su-39",
  type: "Fighter Jet",
  faction: "Russian",
  tier: "III",
  image: "Su-39.jpg",
  description: "Upgraded variant of Su-25 with improved avionics and guided weapons.",
  stats: { health: 25200, speed: 730, afterburnerSpeed: 1700, agility: 30 },
  weapons: [
    { "name": "B8M1", "type": "Unguided Rocket", "damage": 5100, "penetration": 420, "reload": 20 },
      { "name": "KAB-250", "type": "Guided Bomb", "damage": 14900, "penetration": 130, "reload": 25 },
      { "name": "S-24", "type": "Unguided Rocket", "damage": 14600, "penetration": 180, "reload": 15 },
      { "name": "B-13L", "type": "Autocannon", "damage": 9200, "penetration": 160, "reload": 40 },
      { "name": "KAB-500L", "type": "Guided Bomb", "damage": 17300, "penetration": 310, "reload": 40 },
      { "name": "R-73", "type": "Short-Range Air-to-Air Missile", "damage": 4800, "penetration": 56, "reload": 15 },
      { "name": "RVV-MD", "type": "Medium-Range Air-to-Air Missile", "damage": 4800, "penetration": 65, "reload": 15 },
      { "name": "R-27", "type": "Medium-Range Air-to-Air Missile", "damage": 8100, "penetration": 80, "reload": 20 },
      { "name": "Kh-25MLE", "type": "Air-to-Ground Missile", "damage": 16000, "penetration": 160, "reload": 35 },
      { "name": "Kh-38ME", "type": "Air-to-Ground Missile", "damage": 17300, "penetration": 230, "reload": 40 }
  ],
  modules: {
    engine: [
      { name: "R-195M MK1", bonus: "+100 km/h speed" },
      { name: "R-195M MK2", bonus: "+200 km/h speed" },
      { name: "R-195M MK3", bonus: "+300 km/h speed" }
    ],
    avionics: [
      { name: "Targeting Pod MK1", bonus: "+20% accuracy" },
      { name: "Targeting Pod MK2", bonus: "+35% accuracy" },
      { name: "Targeting Pod MK3", bonus: "+50% accuracy" }
    ],
  },
},
{
  id: 307,
  name: "J-15",
  type: "Fighter Jet",
  faction: "Chinese",
  tier: "III",
  image: "J-15.jpg",
  description: "Chinese carrier-based fighter based on Su-33 design, versatile in both air and ground roles.",
  stats: { health: 20100, speed: 765, afterburnerSpeed: 2000, agility: 45 },
  weapons: [
    { "name": "Type 1", "type": "Guided Bomb", "damage": 15100, "penetration": 120, "reload": 32 },
      { "name": "Type 90 x2", "type": "Air-to-Ground Missile", "damage": 6400, "penetration": 320, "reload": 40 },
      { "name": "Type 3", "type": "Guided Bomb", "damage": 16000, "penetration": 210, "reload": 35 },
      { "name": "FT-3", "type": "Air-to-Ground Missile", "damage": 15800, "penetration": 210, "reload": 34 },
      { "name": "KD-88", "type": "Air-to-Ground Missile", "damage": 16200, "penetration": 170, "reload": 36 },
      { "name": "PL-7", "type": "Short-Range Air-to-Air Missile", "damage": 6500, "penetration": 50, "reload": 20 },
      { "name": "PL-10", "type": "Short-Range Air-to-Air Missile", "damage": 7400, "penetration": 60, "reload": 20 },
      { "name": "PL-12", "type": "Medium-Range Air-to-Air Missile", "damage": 7600, "penetration": 56, "reload": 30 },
      { "name": "PL-15", "type": "Beyond Visual Range Air-to-Air Missile", "damage": 7800, "penetration": 70, "reload": 30 }

  ],
  modules: {
    engine: [
      { name: "WS-10H MK1", bonus: "+150 km/h speed" },
      { name: "WS-10H MK2", bonus: "+300 km/h speed" },
      { name: "WS-10H MK3", bonus: "+450 km/h speed" }
    ],
    avionics: [
      { name: "Type 1475 Radar MK1", bonus: "+20% detection" },
      { name: "Type 1475 Radar MK2", bonus: "+35% detection" },
      { name: "Type 1475 Radar MK3", bonus: "+50% detection" }
    ],
  },
},
{
  id: 308,
  name: "MiG-35",
  type: "Fighter Jet",
  faction: "Russian",
  tier: "III",
  image: "MiG-35.jpg",
  description: "Advanced MiG fighter with modern avionics, thrust-vectoring, and strong multirole performance.",
  stats: { health: 20200, speed: 775, afterburnerSpeed: 2060, agility: 52 },
  weapons: [
    { name: "KAB-250", type: "Guided Bomb", damage: 14900, penetration: 130, reload: 25 },
    { name: "FAB-500", type: "Bomb", damage: 16000, penetration: 210, reload: 35 },
    { name: "KAB-500L", type: "Guided Bomb", damage: 17300, penetration: 310, reload: 40 },
    { name: "R-73", type: "Short-Range AAM", damage: 4800, penetration: 56, reload: 15 },
    { name: "Kh-38ME", type: "Air-to-Surface Missile", damage: 17300, penetration: 230, reload: 40 },
    { name: "R-40TD", type: "Long-Range AAM", damage: 7800, penetration: 70, reload: 30 },
    { name: "Kh-59M", type: "Air-to-Surface Missile", damage: 18400, penetration: 280, reload: 50 },
    { name: "R-37", type: "Long-Range AAM", damage: 8400, penetration: 80, reload: 30 }

  ],
  modules: {
    engine: [
      { name: "RD-33MK MK1", bonus: "+150 km/h speed" },
      { name: "RD-33MK MK2", bonus: "+300 km/h speed" },
      { name: "RD-33MK MK3", bonus: "+450 km/h speed" }
    ],
    avionics: [
      { name: "Zhuk-AE Radar MK1", bonus: "+20% detection" },
      { name: "Zhuk-AE Radar MK2", bonus: "+35% detection" },
      { name: "Zhuk-AE Radar MK3", bonus: "+50% detection" }
    ],
    agility: [
      { name: "Thrust Vectoring MK1", bonus: "+10% agility" },
      { name: "Thrust Vectoring MK2", bonus: "+20% agility" },
      { name: "Thrust Vectoring MK3", bonus: "+30% agility" }
    ],
  },
},

{
  id: 309,
  name: "F-15EX Eagle II",
  type: "Fighter Jet",
  faction: "American",
  tier: "III",
  image: "F-15EX-Eagle-II.jpg",
  description: "Latest advanced variant of the F-15 with modern avionics and expanded weapons payload.",
  stats: { health: 23000, speed: 800, afterburnerSpeed: 2100, agility: 58 },
  weapons: [
    { name: "GBU-38", type: "Guided Bomb", damage: 14300, penetration: 120, reload: 25 },
    { name: "GBU-31", type: "Guided Bomb", damage: 19400, penetration: 360, reload: 40 },
    { name: "GBU-32", type: "Guided Bomb", damage: 15700, penetration: 200, reload: 35 },
    { name: "AGM-65", type: "Air-to-Surface Missile", damage: 11000, penetration: 830, reload: 22 },
    { name: "AIM-7", type: "Medium-Range AAM", damage: 6200, penetration: 65, reload: 20 },
    { name: "AGM-84H/K", type: "Anti-Ship Missile", damage: 18900, penetration: 310, reload: 35 },
    { name: "AIM-120", type: "Medium-Range AAM", damage: 11300, penetration: 60, reload: 20 }

  ],
  modules: {
    engine: [
      { name: "F110-GE-132 MK1", bonus: "+150 km/h speed" },
      { name: "F110-GE-132 MK2", bonus: "+300 km/h speed" },
      { name: "F110-GE-132 MK3", bonus: "+450 km/h speed" }
    ],
    avionics: [
      { name: "APG-82 AESA Radar MK1", bonus: "+20% detection" },
      { name: "APG-82 AESA Radar MK2", bonus: "+35% detection" },
      { name: "APG-82 AESA Radar MK3", bonus: "+50% detection" }
    ],
  },
},
{
  id: 310,
  name: "Su-35S",
  type: "Fighter Jet",
  faction: "Russian",
  tier: "III",
  image: "Su-35S.jpg",
  description: "Highly maneuverable 4++ generation multirole fighter with thrust vectoring engines and powerful radar.",
  stats: { health: 23300, speed: 870, afterburnerSpeed: 2200, agility: 67 },
  weapons: [
    { name: "R-73", type: "Short-Range AAM", damage: 4900, penetration: 60, reload: 15 },
    { name: "R-27", type: "Medium-Range AAM", damage: 8100, penetration: 65, reload: 20},
    { name: "R-77", type: "Medium-Range AAM", damage: 8100, penetration: 55, reload: 20 },
    { name: "Kh-31", type: "Air-to-Surface Missile", damage: 8100, penetration: 230, reload: 20 },
    { name: "Kh-38M", type: "Air-to-Ground Missile", damage: 17300, penetration: 310, reload: 40 },
    { name: "KAB-500L", type: "Guided Bomb (Laser)", damage: 17300, penetration: 320, reload: 40 },
    { name: "KAB-500Kr", type: "Guided Bomb (TV)", damage: 17800, penetration: 210, reload: 40 },
    { name: "FAB-500", type: "Unguided Bomb", damage: 16000, penetration: 210, reload: 35 },
    { name: "B-8M1", type: "Rocket Pod (S-8)", damage: 5100, penetration: 420, reload: 20, rateOfFire: "80 rockets" },
    { name: "B-13L", type: "Rocket Pod (S-13)", damage: 9200, penetration: 250, reload: 40, rateOfFire: "20 rockets" },
    { name: "GSh-30-1 30mm", type: "Autocannon", damage: 400, penetration: 70, rateOfFire: "1500 rpm" }
  ],
  modules: {
    engine: [
      { name: "Saturn AL-41F1S MK1", bonus: "+250 km/h speed" },
      { name: "Saturn AL-41F1S MK2", bonus: "+500 km/h speed" },
      { name: "Saturn AL-41F1S MK3", bonus: "+750 km/h speed" }
    ],
    stealth: [
      { name: "RAM Coating MK1", bonus: "+10% stealth" },
      { name: "RAM Coating MK2", bonus: "+20% stealth" },
      { name: "RAM Coating MK3", bonus: "+30% stealth" }
    ],
    avionics: [
      { name: "Irbis-E Radar MK1", bonus: "+20% detection" },
      { name: "Irbis-E Radar MK2", bonus: "+35% detection" },
      { name: "Irbis-E Radar MK3", bonus: "+50% detection" }
    ]
  }
},


{
    id: 311,
    name: "A-10A Thunderbolt",
    type: "Fighter Jet",
    faction: "American",
    tier: "III",
    image: "A-10A-Thunderbolt.jpg",
    description: "Close air support aircraft designed around the GAU-8 Avenger cannon.",
    stats: { health: 28500, speed: 560, afterburnerSpeed: 706, agility: 55 },
    weapons: [
     { name: "LAU-61", type: "Rocket Pod", damage: 4100, penetration: 290, reload: 20 },
    { name: "MK-84", type: "General-Purpose Bomb", damage: 19400, penetration: 360, reload: 40 },
    { name: "LAU-10 x3", type: "Rocket Pod", damage: 7400, penetration: 500, reload: 40 },
    { name: "GBU-32", type: "Guided Bomb", damage: 15700, penetration: 200, reload: 35 },
    { name: "GBU-12", type: "Guided Bomb", damage: 18590, penetration: 120, reload: 30 },
    { name: "AGM-65", type: "Air-to-Surface Missile", damage: 11000, penetration: 830, reload: 22 },
    { name: "AIM-132", type: "Short-Range AAM", damage: 5200, penetration: 65, reload: 15 },
    { name: "AGM-12B", type: "Air-to-Surface Missile", damage: 11500, penetration: 600, reload: 41 },
    { name: "AIM-120", type: "Medium-Range AAM", damage: 11300, penetration: 60, reload: 20 }

    ],
    modules: {
      engine: [
        { name: "TF34-GE-100 MK1", bonus: "+40 km/h speed" },
        { name: "TF34-GE-100 MK2", bonus: "+80 km/h speed" },
        { name: "TF34-GE-100 MK3", bonus: "+120 km/h speed" },
      ],
      stealth: [
        { name: "IR Suppression MK1", bonus: "+5% stealth" },
        { name: "IR Suppression MK2", bonus: "+10% stealth" },
        { name: "IR Suppression MK3", bonus: "+15% stealth" },
      ],
      avionics: [
        { name: "Targeting Pod MK1", bonus: "+20% accuracy" },
        { name: "Targeting Pod MK2", bonus: "+35% accuracy" },
        { name: "Targeting Pod MK3", bonus: "+50% accuracy" },
      ],
    },
  },
  
  {
    id: 400,
    name: "Leopard 2A4",
    type: "Main Battle Tank",
    faction: "German",
    tier: "III",
    description: "Proven main battle tank with excellent firepower and mobility balance.",
    image: "Leopard-2A4.jpg",
    stats: { health: 32500, speed: 68, armor: "800mm", agility: 70 },
    weapons: [
      { name: "Rheinmetall L44 120mm", type: "Main Gun", damage: 14200, penetration: 780 },
      { name: "MG3 7.62mm", type: "Machine Gun", damage: 120, penetration: 15, rateOfFire: "1200 rpm" },
    ],
    modules: {
      engine: [
        { name: "MTU MB 873 MK1", bonus: "+8 km/h speed" },
        { name: "MTU MB 873 MK2", bonus: "+16 km/h speed" },
        { name: "MTU MB 873 MK3", bonus: "+24 km/h speed" },
      ],
      armor: [
        { name: "Composite Armor MK1", bonus: "+150mm protection" },
        { name: "Composite Armor MK2", bonus: "+300mm protection" },
        { name: "Composite Armor MK3", bonus: "+450mm protection" },
      ],
      fireControl: [
        { name: "EMES 15 MK1", bonus: "+12% accuracy" },
        { name: "EMES 15 MK2", bonus: "+20% accuracy" },
        { name: "EMES 15 MK3", bonus: "+28% accuracy" },
      ],
    },
  },
   {
    id: 401,
    name: "T-72A",
    type: "Main Battle Tank",
    faction: "Russian",
    tier: "III",
    description: "Widely exported main battle tank with robust design and effective firepower.",
    image: "T-72A.jpg",
    stats: { health: 32800, speed: 60, armor: "750mm", agility: 62 },
    weapons: [
      { name: "2A46 125mm", type: "Main Gun", damage: 13500, penetration: 720 },
      { name: "9M119 Refleks", type: "ATGM", damage: 16800, penetration: 1050 },
      { name: "NSVT 12.7mm", type: "Machine Gun", damage: 200, penetration: 32, rateOfFire: "700 rpm" },
    ],
    modules: {
      engine: [
        { name: "V-46-6 MK1", bonus: "+8 km/h speed" },
        { name: "V-46-6 MK2", bonus: "+16 km/h speed" },
        { name: "V-46-6 MK3", bonus: "+24 km/h speed" },
      ],
      armor: [
        { name: "Composite Armor MK1", bonus: "+140mm protection" },
        { name: "Composite Armor MK2", bonus: "+280mm protection" },
        { name: "Composite Armor MK3", bonus: "+420mm protection" },
      ],
      fireControl: [
        { name: "TPD-K1 MK1", bonus: "+12% accuracy" },
        { name: "TPD-K1 MK2", bonus: "+22% accuracy" },
        { name: "TPD-K1 MK3", bonus: "+32% accuracy" },
      ],
    },
  },
  {
    "id": 402,
    "name": "M1 Abrams",
    "type": "Main Battle Tank",
    "faction": "American",
    "tier": "III",
    image: "M1-Abrams.jpg",
    "description": "M1A1 with M256 120mm smoothbore.",
    "stats": { "health": 49920, "speed": 85.6, "armor": 900, "agility": 40 },
    "weapons": [
      { "name": "M256 120mm - APFSDS (M1 family Mk variants e.g. APFSDS/M322/M338)", "type": "APFSDS", "damage": 480, "penetration": 700, "reload": 5, "note": "M1 family main rounds." },
      { "name": "M256 120mm - HEAT (Mk variants)", "type": "HEAT", "damage": 600, "penetration": 400, "reload": 5, "note": "Anti-tank high-explosive." },
      { "name": "M256 120mm - HE/HEI", "type": "HE/HEI", "damage": 800, "penetration": 50, "reload": 5, "note": "High-explosive/incendiary for soft targets." },
      { "name": "M2 Browning .50 cal", "type": "Machine Gun", "damage": 50, "penetration": 25, "reload": 0, "note": "Roof/AA secondary belts." },
      { "name": "M240 / 7.62mm", "type": "Machine Gun", "damage": 45, "penetration": 20, "reload": 0, "note": "Coax / commander belts." }
    ],
    "modules": {
      "engine": [
        { "name": "AGT1500 MK1", "bonus": "+8 km/h speed" },
        { "name": "AGT1500 MK2", "bonus": "+16 km/h speed" },
        { "name": "AGT1500 MK3", "bonus": "+24 km/h speed" }
      ],
      "armor": [
        { "name": "Chobham Composite MK1", "bonus": "+120mm effective armor" },
        { "name": "Chobham Composite MK2", "bonus": "+240mm effective armor" },
        { "name": "Chobham Composite MK3", "bonus": "+360mm effective armor" }
      ],
      "fireControl": [
        { "name": "CITV FCS MK1", "bonus": "+10% accuracy" },
        { "name": "CITV FCS MK2", "bonus": "+18% accuracy" },
        { "name": "CITV FCS MK3", "bonus": "+26% accuracy" }
      ]
    }
  },
  {
    "id": 403,
    "name": "MBT-70",
    "type": "Main Battle Tank",
    "faction": "American",
    "tier": "III",
    image: "MBT-70.jpg",
    "description": "Experimental joint American-German tank with 152mm gun/missile launcher.",
    "stats": { "health": 45000, "speed": 90, "armor": 800, "agility": 35 },
    "weapons": [
      { "name": "152mm Gun/Missile - APFSDS", "type": "APFSDS", "damage": 600, "penetration": 800, "reload": 8 },
      { "name": "152mm Gun/Missile - HEAT", "type": "HEAT", "damage": 650, "penetration": 500, "reload": 8 },
      { "name": "152mm Gun/Missile - HE", "type": "HE", "damage": 1000, "penetration": 50, "reload": 8 },
      { "name": "Coaxial MG 7.62mm", "type": "Machine Gun", "damage": 50, "penetration": 20, "reload": 0 }
    ],
    "modules": {
      "engine": [
        { "name": "AGT1500 MK1", "bonus": "+10% speed" },
        { "name": "AGT1500 MK2", "bonus": "+20% speed" },
        { "name": "AGT1500 MK3", "bonus": "+30% speed" }
      ],
      "armor": [
        { "name": "Composite MK1", "bonus": "+120mm armor" },
        { "name": "Composite MK2", "bonus": "+240mm armor" },
        { "name": "Composite MK3", "bonus": "+360mm armor" }
      ],
      "fireControl": [
        { "name": "Advanced FCS MK1", "bonus": "+10% accuracy" },
        { "name": "Advanced FCS MK2", "bonus": "+18% accuracy" },
        { "name": "Advanced FCS MK3", "bonus": "+26% accuracy" }
      ]
    }

  },
  {
    "id": 404,
    "name": "PT-91 Twardy",
    "type": "Main Battle Tank",
    "faction": "Polish",
    "tier": "III",
    image: "PT-91-Twardy.jpg",
    "description": "Polish upgrade of the Soviet T-72M1 with improved armor and fire control.",
    "stats": { "health": 48000, "speed": 80, "armor": 820, "agility": 38 },
    "weapons": [
      { "name": "125mm 2A46M - APFSDS", "type": "APFSDS", "damage": 680, "penetration": 750, "reload": 6 },
      { "name": "125mm 2A46M - HEAT", "type": "HEAT", "damage": 720, "penetration": 400, "reload": 6 },
      { "name": "125mm 2A46M - HE", "type": "HE", "damage": 900, "penetration": 50, "reload": 6 },
      { "name": "PKT - 7.62mm", "type": "Machine Gun", "damage": 45, "penetration": 20, "reload": 0 }
    ],
    "modules": {
      "engine": [
        { "name": "V-46-6", "bonus": "+10% speed" },
        { "name": "V-46-6A", "bonus": "+20% speed" },
        { "name": "V-46-6B", "bonus": "+30% speed" }
      ],
      "armor": [
        { "name": "Composite MK1", "bonus": "+120mm armor" },
        { "name": "Composite MK2", "bonus": "+240mm armor" },
        { "name": "Composite MK3", "bonus": "+360mm armor" }
      ],
      "fireControl": [
        { "name": "FCS-3", "bonus": "+10% accuracy" },
        { "name": "FCS-4", "bonus": "+18% accuracy" },
        { "name": "FCS-5", "bonus": "+26% accuracy" }
      ]
    }
  },
  {
    "id": 405,
    "name": "T-64BV",
    "type": "Main Battle Tank",
    "faction": "Russian",
    "tier": "III",
    image: "T-64BV.jpg",
    "description": "Soviet main battle tank with composite armor and 125mm smoothbore gun.",
    "stats": { "health": 46000, "speed": 75, "armor": 800, "agility": 35 },
    "weapons": [
      { "name": "125mm 2A46M-1 - APFSDS", "type": "APFSDS", "damage": 660, "penetration": 740, "reload": 6 },
      { "name": "125mm 2A46M-1 - HEAT", "type": "HEAT", "damage": 700, "penetration": 400, "reload": 6 },
      { "name": "125mm 2A46M-1 - HE", "type": "HE", "damage": 880, "penetration": 50, "reload": 6 },
      { "name": "PKT - 7.62mm", "type": "Machine Gun", "damage": 45, "penetration": 20, "reload": 0 },
      { "name": "NSVT - 12.7mm", "type": "Heavy Machine Gun", "damage": 100, "penetration": 40, "reload": 0 }
    ],
    "modules": {
      "engine": [
        { "name": "5TDF", "bonus": "+10% speed" },
        { "name": "5TDF-A", "bonus": "+20% speed" },
        { "name": "5TDF-B", "bonus": "+30% speed" }
      ],
      "armor": [
        { "name": "Composite MK1", "bonus": "+120mm armor" },
        { "name": "Composite MK2", "bonus": "+240mm armor" },
        { "name": "Composite MK3", "bonus": "+360mm armor" }
      ],
      "fireControl": [
        { "name": "FCS-3", "bonus": "+10% accuracy" },
        { "name": "FCS-4", "bonus": "+18% accuracy" },
        { "name": "FCS-5", "bonus": "+26% accuracy" }
      ]
    }
  },
  {
    "id": 406,
    "name": "Type 90",
    "type": "Main Battle Tank",
    "faction": "Japanese",
    "tier": "III",
    image: "Type-90.jpg",
    "description": "Japanese main battle tank with advanced armor and 120mm smoothbore gun.",
    "stats": { "health": 48000, "speed": 70, "armor": 720, "agility": 32 },
    "weapons": [
      { "name": "120mm L44 - APFSDS", "type": "APFSDS", "damage": 680, "penetration": 750, "reload": 6 },
      { "name": "120mm L44 - HEAT", "type": "HEAT", "damage": 700, "penetration": 320, "reload": 6 },
      { "name": "12.7mm M2 HB", "type": "Machine Gun", "damage": 50, "penetration": 25, "reload": 0 }
    ],
    "modules": {
      "engine": [
        { "name": "KA-501", "bonus": "+10% speed" },
        { "name": "KA-502", "bonus": "+20% speed" },
        { "name": "KA-503", "bonus": "+30% speed" }
      ],
      "armor": [
        { "name": "Composite Armor MK1", "bonus": "+120mm effective armor" },
        { "name": "Composite Armor MK2", "bonus": "+240mm effective armor" },
        { "name": "Composite Armor MK3", "bonus": "+360mm effective armor" }
      ],
      "fireControl": [
        { "name": "FCS Type-1", "bonus": "+10% accuracy" },
        { "name": "FCS Type-2", "bonus": "+18% accuracy" },
        { "name": "FCS Type-3", "bonus": "+26% accuracy" }
      ]
    }
  },
  {
    "id": 407,
    "name": "ZTZ85-II",
    "type": "Main Battle Tank",
    "faction": "Chinese",
    "tier": "III",
    image: "ZTZ85-II.jpg",
    "description": "Chinese upgrade of Type 85 tank with improved armor and firepower.",
    "stats": { "health": 46000, "speed": 60, "armor": 700, "agility": 30 },
    "weapons": [
      { "name": "105mm rifled gun - APFSDS", "type": "APFSDS", "damage": 620, "penetration": 700, "reload": 6 },
      { "name": "105mm rifled gun - HEAT", "type": "HEAT", "damage": 650, "penetration": 320, "reload": 6 },
      { "name": "Type 85 coaxial MG - 7.62mm", "type": "Machine Gun", "damage": 50, "penetration": 20, "reload": 0 }
    ],
    "modules": {
      "engine": [
        { "name": "12150L", "bonus": "+10% speed" },
        { "name": "12150L-A", "bonus": "+20% speed" },
        { "name": "12150L-B", "bonus": "+30% speed" }
      ],
      "armor": [
        { "name": "ERA MK1", "bonus": "+100mm effective armor" },
        { "name": "ERA MK2", "bonus": "+200mm effective armor" },
        { "name": "ERA MK3", "bonus": "+300mm effective armor" }
      ],
      "fireControl": [
        { "name": "FCS ZTZ-1", "bonus": "+10% accuracy" },
        { "name": "FCS ZTZ-2", "bonus": "+18% accuracy" },
        { "name": "FCS ZTZ-3", "bonus": "+26% accuracy" }
      ]
    }
  },
  {
    "id": 408,
    "name": "ZTZ96",
    "type": "Main Battle Tank",
    "faction": "Chinese",
    "tier": "III",
    image: "ZTZ96.jpg",
    "description": "Modern Chinese MBT with 125mm smoothbore and composite armor.",
    "stats": { "health": 47000, "speed": 65, "armor": 750, "agility": 31 },
    "weapons": [
      { "name": "125mm smoothbore - APFSDS", "type": "APFSDS", "damage": 700, "penetration": 800, "reload": 6 },
      { "name": "125mm smoothbore - HEAT", "type": "HEAT", "damage": 750, "penetration": 350, "reload": 6 },
      { "name": "ZPT-99 coax MG - 7.62mm", "type": "Machine Gun", "damage": 55, "penetration": 25, "reload": 0 }
    ],
    "modules": {
      "engine": [
        { "name": "Type 6A", "bonus": "+10% speed" },
        { "name": "Type 6B", "bonus": "+20% speed" },
        { "name": "Type 6C", "bonus": "+30% speed" }
      ],
      "armor": [
        { "name": "Composite MK1", "bonus": "+120mm armor" },
        { "name": "Composite MK2", "bonus": "+240mm armor" },
        { "name": "Composite MK3", "bonus": "+360mm armor" }
      ],
      "fireControl": [
        { "name": "FCS ZTZ-96 MK1", "bonus": "+10% accuracy" },
        { "name": "FCS ZTZ-96 MK2", "bonus": "+18% accuracy" },
        { "name": "FCS ZTZ-96 MK3", "bonus": "+26% accuracy" }
      ]
    }
  },
  {
    "id": 409,
    "name": "ZTZ-96A (P)",
    "type": "Main Battle Tank",
    "faction": "Chinese",
    "tier": "III",
    image: "ZTZ-96A-(P).jpg",
    "description": "Improved export variant of ZTZ96 with enhanced protection and gun systems.",
    "stats": { "health": 48000, "speed": 65, "armor": 770, "agility": 32 },
    "weapons": [
      { "name": "125mm smoothbore - APFSDS", "type": "APFSDS", "damage": 720, "penetration": 820, "reload": 6 },
      { "name": "125mm smoothbore - HEAT", "type": "HEAT", "damage": 750, "penetration": 360, "reload": 6 },
      { "name": "ZPT-99 coax MG - 7.62mm", "type": "Machine Gun", "damage": 55, "penetration": 25, "reload": 0 }
    ],
    "modules": {
      "engine": [
        { "name": "Type 6C-A", "bonus": "+10% speed" },
        { "name": "Type 6C-B", "bonus": "+20% speed" },
        { "name": "Type 6C-C", "bonus": "+30% speed" }
      ],
      "armor": [
        { "name": "Composite + ERA MK1", "bonus": "+150mm armor" },
        { "name": "Composite + ERA MK2", "bonus": "+300mm armor" },
        { "name": "Composite + ERA MK3", "bonus": "+450mm armor" }
      ],
      "fireControl": [
        { "name": "FCS ZTZ-96A MK1", "bonus": "+10% accuracy" },
        { "name": "FCS ZTZ-96A MK2", "bonus": "+18% accuracy" },
        { "name": "FCS ZTZ-96A MK3", "bonus": "+26% accuracy" }
      ]
    }
  },
  {
    "id": 410,
    "name": "PLZ-07B",
    "type": "SPA",
    "faction": "Chinese",
    "tier": "III",
    image: "PLZ-07B.jpg",
    "description": "Chinese 155mm self-propelled howitzer with high mobility and firepower.",
    "stats": { "health": 22000, "speed": 55, "armor": 200, "agility": 25 },
    "weapons": [
      { "name": "155mm Howitzer - HE", "type": "HE", "damage": 1000, "penetration": 50, "reload": 8 },
      { "name": "155mm Howitzer - AP", "type": "AP", "damage": 1200, "penetration": 100, "reload": 8 }
    ],
    "modules": {
      "engine": [
        { "name": "Diesel 12150L", "bonus": "+10% speed" },
        { "name": "Diesel 12150L-A", "bonus": "+20% speed" },
        { "name": "Diesel 12150L-B", "bonus": "+30% speed" }
      ],
      "armor": [
        { "name": "Light Composite MK1", "bonus": "+50mm armor" },
        { "name": "Light Composite MK2", "bonus": "+100mm armor" },
        { "name": "Light Composite MK3", "bonus": "+150mm armor" }
      ],
      "fireControl": [
        { "name": "SPG FCS MK1", "bonus": "+10% accuracy" },
        { "name": "SPG FCS MK2", "bonus": "+18% accuracy" },
        { "name": "SPG FCS MK3", "bonus": "+26% accuracy" }
      ]
    }
  },
  {
    "id": 411,
    "name": "M110A2",
    "type": "SPA",
    "faction": "American",
    "tier": "III",
    image: "M110A2.jpg",
    "description": "American 203mm self-propelled artillery for heavy bombardment.",
    "stats": { "health": 28000, "speed": 50, "armor": 150, "agility": 22 },
    "weapons": [
      { "name": "203mm Howitzer - HE", "type": "HE", "damage": 1500, "penetration": 70, "reload": 10 },
      { "name": "203mm Howitzer - AP", "type": "AP", "damage": 1800, "penetration": 120, "reload": 10 }
    ],
    "modules": {
      "engine": [
        { "name": "Gas Turbine A1", "bonus": "+5% speed" },
        { "name": "Gas Turbine A2", "bonus": "+10% speed" },
        { "name": "Gas Turbine A3", "bonus": "+15% speed" }
      ],
      "armor": [
        { "name": "Light Armor MK1", "bonus": "+50mm armor" },
        { "name": "Light Armor MK2", "bonus": "+100mm armor" },
        { "name": "Light Armor MK3", "bonus": "+150mm armor" }
      ],
      "fireControl": [
        { "name": "Artillery FCS MK1", "bonus": "+10% accuracy" },
        { "name": "Artillery FCS MK2", "bonus": "+18% accuracy" },
        { "name": "Artillery FCS MK3", "bonus": "+26% accuracy" }
      ]
    }
  },
  {
    "id": 412,
    "name": "2S31 Vena",
    "type": "SPA",
    "faction": "Russian",
    "tier": "III",
    image: "2S31-Vena.jpg",
    "description": "Russian 120mm mortar howitzer on tracked chassis.",
    "stats": { "health": 24000, "speed": 60, "armor": 180, "agility": 26 },
    "weapons": [
      { "name": "120mm Mortar - HE", "type": "HE", "damage": 900, "penetration": 40, "reload": 6 },
      { "name": "120mm Mortar - Smoke", "type": "Smoke", "damage": 0, "penetration": 0, "reload": 6 }
    ],
    "modules": {
      "engine": [
        { "name": "V-84A", "bonus": "+10% speed" },
        { "name": "V-84B", "bonus": "+20% speed" },
        { "name": "V-84C", "bonus": "+30% speed" }
      ],
      "armor": [
        { "name": "Light Composite MK1", "bonus": "+50mm armor" },
        { "name": "Light Composite MK2", "bonus": "+100mm armor" },
        { "name": "Light Composite MK3", "bonus": "+150mm armor" }
      ],
      "fireControl": [
        { "name": "Mortar FCS MK1", "bonus": "+10% accuracy" },
        { "name": "Mortar FCS MK2", "bonus": "+18% accuracy" },
        { "name": "Mortar FCS MK3", "bonus": "+26% accuracy" }
      ]
    }
  },
  {
    "id": 413,
    "name": "XM2001 Crusader",
    "type": "SPA",
    "faction": "American",
    "tier": "III",
    image: "XM2001-Crusader.jpg",
    "description": "Experimental 155mm self-propelled howitzer with automatic loading.",
    "stats": { "health": 25000, "speed": 60, "armor": 200, "agility": 25 },
    "weapons": [
      { "name": "155mm Howitzer - HE", "type": "HE", "damage": 1200, "penetration": 50, "reload": 5 },
      { "name": "155mm Howitzer - AP", "type": "AP", "damage": 1400, "penetration": 100, "reload": 5 }
    ],
    "modules": {
      "engine": [
        { "name": "Diesel Crusader MK1", "bonus": "+10% speed" },
        { "name": "Diesel Crusader MK2", "bonus": "+20% speed" },
        { "name": "Diesel Crusader MK3", "bonus": "+30% speed" }
      ],
      "armor": [
        { "name": "Composite MK1", "bonus": "+100mm armor" },
        { "name": "Composite MK2", "bonus": "+200mm armor" },
        { "name": "Composite MK3", "bonus": "+300mm armor" }
      ],
      "fireControl": [
        { "name": "Crusader FCS MK1", "bonus": "+10% accuracy" },
        { "name": "Crusader FCS MK2", "bonus": "+18% accuracy" },
        { "name": "Crusader FCS MK3", "bonus": "+26% accuracy" }
      ]
    }
  },
  {
    "id": 414,
    "name": "Gepard 1A2",
    "type": "Anti-Air",
    "faction": "German",
    "tier": "III",
    image: "Gepard-1A2.jpg",
    "description": "German SPAAG with twin 35mm Oerlikon cannons and radar-guided fire control.",
    "stats": { "health": 24000, "speed": 65, "armor": 35, "agility": 45 },
    "weapons": [
      { "name": "35mm Oerlikon KDA - APDS", "type": "APDS", "damage": 250, "penetration": 100, "reload": 0.1 },
      { "name": "35mm Oerlikon KDA - HEI", "type": "HEI", "damage": 320, "penetration": 50, "reload": 0.1 }
    ],
    "modules": {
      "engine": [
        { "name": "MTU MB 833 Ka-500", "bonus": "+10% speed" },
        { "name": "MTU MB 833 Ka-501", "bonus": "+20% speed" }
      ],
      "fireControl": [
        { "name": "Targeting Radar MK1", "bonus": "+20% detection" },
        { "name": "Targeting Radar MK2", "bonus": "+40% detection" }
      ],
      "defense": [
        { "name": "Chaff/Flare MK1", "bonus": "+20% countermeasures" },
        { "name": "Chaff/Flare MK2", "bonus": "+35% countermeasures" }
      ]
    }
  },
   
  {
    id: 415,
    name: "Otomatic 76",
    type: "Anti-Air",
    faction: "Italian",
    tier: "III",
    image: "Otomatic-76.jpg",
    description: "Self-propelled anti-aircraft gun with rapid-fire 76mm cannon.",
    stats: { health: 24800, speed: 65, armor: "380mm", agility: 72 },
    weapons: [
      { name: "OTO 76mm L62", type: "Anti-Aircraft Gun", damage: 2800, penetration: 180, rateOfFire: "120 rpm" },
      { name: "Aspide SAM", type: "Surface-to-Air Missile", damage: 8500, penetration: 420 },
    ],
    modules: {
      engine: [
        { name: "IVECO 8260 MK1", bonus: "+10 km/h speed" },
        { name: "IVECO 8260 MK2", bonus: "+20 km/h speed" },
        { name: "IVECO 8260 MK3", bonus: "+30 km/h speed" },
      ],
      armor: [
        { name: "Steel Armor MK1", bonus: "+70mm protection" },
        { name: "Steel Armor MK2", bonus: "+140mm protection" },
        { name: "Steel Armor MK3", bonus: "+210mm protection" },
      ],
      fireControl: [
        { name: "Radar FCS MK1", bonus: "+25% accuracy" },
        { name: "Radar FCS MK2", bonus: "+40% accuracy" },
        { name: "Radar FCS MK3", bonus: "+55% accuracy" },
      ],
    },
  },
  {
    "id": 416,
    "name": "K-31 Cheonma",
    "type": "Anti-Air",
    "faction": "SouthKorean",
    "tier": "III",
    image: "K-31-Cheonma.jpg",
    "description": "Korean SPAAG with 30mm cannons and short-range SAM missiles.",
    "stats": { "health": 22000, "speed": 70, "armor": 30, "agility": 42 },
    "weapons": [
      { "name": "30mm Cannon - APDS", "type": "APDS", "damage": 200, "penetration": 80, "reload": 0.1 },
      { "name": "Cheonma SAM Missile", "type": "SAM", "damage": 1200, "penetration": 250, "reload": 5 }
    ],
    "modules": {
      "engine": [
        { "name": "Diesel Engine MK1", "bonus": "+10% speed" },
        { "name": "Diesel Engine MK2", "bonus": "+20% speed" }
      ],
      "fireControl": [
        { "name": "Targeting Radar MK1", "bonus": "+20% detection" },
        { "name": "Targeting Radar MK2", "bonus": "+40% detection" }
      ],
      "defense": [
        { "name": "Chaff/Flare MK1", "bonus": "+20% countermeasures" },
        { "name": "Chaff/Flare MK2", "bonus": "+35% countermeasures" }
      ]
    }
  },
  {
    "id": 417,
    "name": "PGZ-09",
    "type": "Anti-Air",
    "faction": "Chinese",
    "tier": "III",
    image: "PGZ-09.jpg",
    "description": "Chinese SPAAG with twin 35mm cannons and short-range missiles.",
    "stats": { "health": 23000, "speed": 60, "armor": 30, "agility": 40 },
    "weapons": [
      { "name": "35mm Cannon - APDS", "type": "APDS", "damage": 250, "penetration": 100, "reload": 0.1 },
      { "name": "PG-99 SAM Missile", "type": "SAM", "damage": 1000, "penetration": 220, "reload": 5 }
    ],
    "modules": {
      "engine": [
        { "name": "Diesel 12150L", "bonus": "+10% speed" },
        { "name": "Diesel 12150L-A", "bonus": "+20% speed" }
      ],
      "fireControl": [
        { "name": "Targeting Radar MK1", "bonus": "+20% detection" },
        { "name": "Targeting Radar MK2", "bonus": "+40% detection" }
      ],
      "defense": [
        { "name": "Chaff/Flare MK1", "bonus": "+20% countermeasures" },
        { "name": "Chaff/Flare MK2", "bonus": "+35% countermeasures" }
      ]
    }
  },
  {
    "id": 418,
    "name": "2S6M1 Tunguska-M1",
    "type": "Anti-Air",
    "faction": "Russian",
    "tier": "III",
    image: "2S6M1-Tunguska-M1.jpg",
    "description": "Russian SPAAG with twin 30mm cannons and 9M311 SAM missiles.",
    "stats": { "health": 25000, "speed": 65, "armor": 35, "agility": 45 },
    "weapons": [
      { "name": "30mm 2A38M - APDS", "type": "APDS", "damage": 220, "penetration": 90, "reload": 0.1 },
      { "name": "30mm 2A38M - HEI", "type": "HEI", "damage": 300, "penetration": 50, "reload": 0.1 },
      { "name": "9M311 SAM Missile", "type": "SAM", "damage": 1200, "penetration": 250, "reload": 4 }
    ],
    "modules": {
      "engine": [
        { "name": "V-84A", "bonus": "+10% speed" },
        { "name": "V-84B", "bonus": "+20% speed" }
      ],
      "fireControl": [
        { "name": "Radar Targeting MK1", "bonus": "+20% detection" },
        { "name": "Radar Targeting MK2", "bonus": "+40% detection" }
      ],
      "defense": [
        { "name": "Chaff/Flare MK1", "bonus": "+20% countermeasures" },
        { "name": "Chaff/Flare MK2", "bonus": "+35% countermeasures" }
      ]
    }
  },
  {
    "id": 419,
    "name": "Type 625E SHORAD",
    "type": "Anti-Air",
    "faction": "Chinese",
    "tier": "III",
    image: "Type-625E-SHORAD.jpg",
    "description": "Chinese short-range air defense vehicle with 25mm cannons and SAM missiles.",
    "stats": { "health": 20000, "speed": 60, "armor": 25, "agility": 40 },
    "weapons": [
      { "name": "25mm autocannon - APDS", "type": "APDS", "damage": 180, "penetration": 80, "reload": 0.1 },
      { "name": "25mm autocannon - HEI", "type": "HEI", "damage": 250, "penetration": 40, "reload": 0.1 },
      { "name": "TY-90 SAM Missile", "type": "SAM", "damage": 900, "penetration": 200, "reload": 5 }
    ],
    "modules": {
      "engine": [
        { "name": "Diesel 12150L", "bonus": "+10% speed" },
        { "name": "Diesel 12150L-A", "bonus": "+20% speed" }
      ],
      "fireControl": [
        { "name": "Radar Targeting MK1", "bonus": "+20% detection" },
        { "name": "Radar Targeting MK2", "bonus": "+40% detection" }
      ],
      "defense": [
        { "name": "Chaff/Flare MK1", "bonus": "+20% countermeasures" },
        { "name": "Chaff/Flare MK2", "bonus": "+35% countermeasures" }
      ]
    }
  },
  {
    "id": 420,
    "name": "XM975",
    "type": "Anti-Air",
    "faction": "American",
    "tier": "III",
    image: "XM975.jpg",
    "description": "US SPAAG with 20mm Vulcan cannon and Stinger SAM missiles.",
    "stats": { "health": 21000, "speed": 65, "armor": 30, "agility": 42 },
    "weapons": [
      { "name": "20mm M61 Vulcan - APDS", "type": "APDS", "damage": 150, "penetration": 60, "reload": 0.05 },
      { "name": "20mm M61 Vulcan - HEI", "type": "HEI", "damage": 220, "penetration": 35, "reload": 0.05 },
      { "name": "FIM-92 Stinger", "type": "SAM", "damage": 950, "penetration": 220, "reload": 4 }
    ],
    "modules": {
      "engine": [
        { "name": "Diesel MK1", "bonus": "+10% speed" },
        { "name": "Diesel MK2", "bonus": "+20% speed" }
      ],
      "fireControl": [
        { "name": "Radar Targeting MK1", "bonus": "+20% detection" },
        { "name": "Radar Targeting MK2", "bonus": "+40% detection" }
      ],
      "defense": [
        { "name": "Chaff/Flare MK1", "bonus": "+20% countermeasures" },
        { "name": "Chaff/Flare MK2", "bonus": "+35% countermeasures" }
      ]
    }
  },
  {
    "id": 421,
    "name": "AFT-10",
    "type": "Anti-Air",
    "faction": "Chinese",
    "tier": "III",
    image: "AFT-10.jpg",
    "description": "Chinese SPAAG equipped with 30mm autocannons and HJ-10 anti-air missiles.",
    "stats": { "health": 22000, "speed": 60, "armor": 30, "agility": 41 },
    "weapons": [
      { "name": "30mm autocannon - APDS", "type": "APDS", "damage": 210, "penetration": 85, "reload": 0.1 },
      { "name": "30mm autocannon - HEI", "type": "HEI", "damage": 280, "penetration": 45, "reload": 0.1 },
      { "name": "HJ-10 SAM Missile", "type": "SAM", "damage": 1100, "penetration": 250, "reload": 5 }
    ],
    "modules": {
      "engine": [
        { "name": "Diesel 12150L", "bonus": "+10% speed" },
        { "name": "Diesel 12150L-A", "bonus": "+20% speed" }
      ],
      "fireControl": [
        { "name": "Radar Targeting MK1", "bonus": "+20% detection" },
        { "name": "Radar Targeting MK2", "bonus": "+40% detection" }
      ],
      "defense": [
        { "name": "Chaff/Flare MK1", "bonus": "+20% countermeasures" },
        { "name": "Chaff/Flare MK2", "bonus": "+35% countermeasures" }
      ]
    }
  },
  {
    "id": 422,
    "name": "M113 Hellfire",
    "type": "Missile Carrier",
    "faction": "American",
    "tier": "III",
    image: "M113-Hellfire.jpg",
    "description": "M113 variant carrying AGM-114 Hellfire missiles for ground and air targets.",
    "stats": { "health": 18000, "speed": 65, "armor": 25, "agility": 40 },
    "weapons": [
      { "name": "AGM-114 Hellfire", "type": "ATGM", "damage": 1800, "penetration": 400, "reload": 5 }
    ],
    "modules": {
      "engine": [
        { "name": "V6 Diesel MK1", "bonus": "+10% speed" },
        { "name": "V6 Diesel MK2", "bonus": "+20% speed" }
      ],
      "fireControl": [
        { "name": "Targeting System MK1", "bonus": "+20% accuracy" },
        { "name": "Targeting System MK2", "bonus": "+40% accuracy" }
      ],
      "defense": [
        { "name": "Smoke Launcher MK1", "bonus": "+20% countermeasures" },
        { "name": "Smoke Launcher MK2", "bonus": "+35% countermeasures" }
      ]
    }
  },
  {
    "id": 423,
    "name": "9A52-2 Smerch",
    "type": "MLRS",
    "faction": "Russian",
    "tier": "III",
    image: "9A52-2-Smerch.jpg",
    "description": "Heavy Russian MLRS with 300mm rockets for long-range bombardment.",
    "stats": { "health": 30000, "speed": 55, "armor": 25, "agility": 20 },
    "weapons": [
      { "name": "300mm Rocket - HE", "type": "Rocket", "damage": 2000, "penetration": 50, "reload": 15 },
      { "name": "300mm Rocket - Cluster", "type": "Rocket", "damage": 1800, "penetration": 30, "reload": 15 }
    ],
    "modules": {
      "engine": [
        { "name": "V-12 Diesel MK1", "bonus": "+10% speed" },
        { "name": "V-12 Diesel MK2", "bonus": "+20% speed" }
      ],
      "fireControl": [
        { "name": "MLRS FCS MK1", "bonus": "+10% accuracy" },
        { "name": "MLRS FCS MK2", "bonus": "+20% accuracy" }
      ],
      "defense": [
        { "name": "Smoke Launcher MK1", "bonus": "+20% countermeasures" },
        { "name": "Smoke Launcher MK2", "bonus": "+35% countermeasures" }
      ]
    }
  },
  {
    "id": 424,
    "name": "Type 89 MLRS",
    "type": "MLRS",
    "faction": "Chinese",
    "tier": "III",
    image: "Type-89-MLRS.jpg",
    "description": "Japanese 300mm MLRS for long-range artillery strikes.",
    "stats": { "health": 28000, "speed": 55, "armor": 25, "agility": 20 },
    "weapons": [
      { "name": "300mm Rocket - HE", "type": "Rocket", "damage": 1900, "penetration": 50, "reload": 14 },
      { "name": "300mm Rocket - Cluster", "type": "Rocket", "damage": 1700, "penetration": 30, "reload": 14 }
    ],
    "modules": {
      "engine": [
        { "name": "Diesel 12150L", "bonus": "+10% speed" },
        { "name": "Diesel 12150L-A", "bonus": "+20% speed" }
      ],
      "fireControl": [
        { "name": "MLRS FCS MK1", "bonus": "+10% accuracy" },
        { "name": "MLRS FCS MK2", "bonus": "+20% accuracy" }
      ],
      "defense": [
        { "name": "Smoke Launcher MK1", "bonus": "+20% countermeasures" },
        { "name": "Smoke Launcher MK2", "bonus": "+35% countermeasures" }
      ]
    }
  },
  {
    "id": 425,
    "name": "AFT-09",
    "type": "Anti-Air",
    "faction": "Chinese",
    "tier": "III",
    image: "AFT-09.jpg",
    "description": "Chinese SPAAG equipped with 30mm autocannons and short-range missiles.",
    "stats": { "health": 22000, "speed": 60, "armor": 30, "agility": 40 },
    "weapons": [
      { "name": "30mm autocannon - APDS", "type": "APDS", "damage": 210, "penetration": 85, "reload": 0.1 },
      { "name": "30mm autocannon - HEI", "type": "HEI", "damage": 280, "penetration": 45, "reload": 0.1 },
      { "name": "AFT-09 SAM Missile", "type": "SAM", "damage": 1000, "penetration": 220, "reload": 5 }
    ],
    "modules": {
      "engine": [
        { "name": "Diesel 12150L", "bonus": "+10% speed" },
        { "name": "Diesel 12150L-A", "bonus": "+20% speed" }
      ],
      "fireControl": [
        { "name": "Radar Targeting MK1", "bonus": "+20% detection" },
        { "name": "Radar Targeting MK2", "bonus": "+40% detection" }
      ],
      "defense": [
        { "name": "Chaff/Flare MK1", "bonus": "+20% countermeasures" },
        { "name": "Chaff/Flare MK2", "bonus": "+35% countermeasures" }
      ]
    }
  },
  {
    "id": 426,
    "name": "LAV-600",
    "type": "Tank Destroyer",
    "faction": "American",
    "tier": "III",
    image: "LAV-600.jpg",
    "description": "Armored wheeled vehicle equipped with short-range missiles and machine guns.",
    "stats": { "health": 18000, "speed": 80, "armor": 20, "agility": 45 },
    "weapons": [
      { "name": "Short-range SAM Missile", "type": "SAM", "damage": 900, "penetration": 200, "reload": 4 },
      { "name": "7.62mm Machine Gun", "type": "MG", "damage": 50, "penetration": 20, "reload": 0 }
    ],
    "modules": {
      "engine": [
        { "name": "Diesel V6", "bonus": "+10% speed" },
        { "name": "Diesel V6-A", "bonus": "+20% speed" }
      ],
      "fireControl": [
        { "name": "Radar Targeting MK1", "bonus": "+20% detection" },
        { "name": "Radar Targeting MK2", "bonus": "+40% detection" }
      ],
      "defense": [
        { "name": "Smoke Launcher MK1", "bonus": "+20% countermeasures" },
        { "name": "Smoke Launcher MK2", "bonus": "+35% countermeasures" }
      ]
    }
  },
  {
    "id": 427,
    "name": "HSTV-L",
    "type": "Light Tank",
    "faction": "American",
    "tier": "III",
    image: "HSTV-L.jpg",
    "description": "A lightweight prototype tank, emphasizing mobility, advanced optics, and rapid firepower.",
    "stats": { "health": 26350, "speed": 84, "armor": 47, "agility": 39 },
    "weapons": [
  { "name": "XM885AP APFSDS", "type": "Cannon", "damage": 6160, "penetration": 370, "reload": 2 },
  { "name": "XM855HE HE", "type": "Cannon", "damage": 7560, "penetration": 68, "reload": 2 }
],
    "modules": {
      "engine": [
        { "name": "Diesel V6", "bonus": "+10% speed" },
        { "name": "Diesel V6-A", "bonus": "+20% speed" }
      ],
      "fireControl": [
        { "name": "Radar Targeting MK1", "bonus": "+20% detection" },
        { "name": "Radar Targeting MK2", "bonus": "+40% detection" }
      ],
      "defense": [
        { "name": "Smoke Launcher MK1", "bonus": "+20% countermeasures" },
        { "name": "Smoke Launcher MK2", "bonus": "+35% countermeasures" }
      ]
    }
  },
  {
    "id": 428,
    "name": "Rookiat MTTD",
    "type": "Light Tank",
    "faction": "British",
    "tier": "III",
    image: "Rookiat-MTTD.jpg",
    "description": "The Rooikat MTTD is a fast, wheeled tank destroyer with strong firepower.",
    "stats": { "health": 26100, "speed": 105, "armor": 40, "agility": 50 },
    "weapons": [
  { "name": "DM23 APFSDS", "type": "Cannon", "damage": 8400, "penetration": 337, "reload": 5.8 },
  { "name": "DM512 HESH", "type": "Cannon", "damage": 9600, "penetration": 127, "reload": 5.8 },
  { "name": "DM12 HEAT", "type": "Cannon", "damage": 9200, "penetration": 400, "reload": 5.8 },
  { "name": "DM33 APFSDS", "type": "Cannon", "damage": 8800, "penetration": 508, "reload": 5.8 }
],
    "modules": {
      "engine": [
        { "name": "Diesel V6", "bonus": "+10% speed" },
        { "name": "Diesel V6-A", "bonus": "+20% speed" }
      ],
      "fireControl": [
        { "name": "Radar Targeting MK1", "bonus": "+20% detection" },
        { "name": "Radar Targeting MK2", "bonus": "+40% detection" }
      ],
      "defense": [
        { "name": "Smoke Launcher MK1", "bonus": "+20% countermeasures" },
        { "name": "Smoke Launcher MK2", "bonus": "+35% countermeasures" }
      ]
    }
  },
  {
    "id": 429,
    "name": "VBCI-2",
    "type": "Light Tank",
    "faction": "French",
    "tier": "III",
    image: "VBCI-2.jpg",
    "description": "A French 8×8 infantry fighting vehicle, upgraded from the VBCI with better armor and mobility",
    "stats": { "health": 27500, "speed": 120, "armor": 40, "agility": 52 },
    "weapons": [
      { "name": "MK246 API", "type": "Cannon", "damage": 1000, "penetration": 117, "reload": 10},
      { "name": "MK266 HEI", "type": "Cannon", "damage": 520, "penetration": 55, "reload": 10 },
      { "name": "MK258 APFSDS", "type": "Cannon", "damage": 1100, "penetration": 165, "reload": 10 },
      { "name": "MBDA-MMP", "type": "Missile", "damage": 12540, "penetration": 1000, "reload": 10 }
    ],
    "modules": {
      "engine": [
        { "name": "Diesel V6", "bonus": "+10% speed" },
        { "name": "Diesel V6-A", "bonus": "+20% speed" }
      ],
      "fireControl": [
        { "name": "Radar Targeting MK1", "bonus": "+20% detection" },
        { "name": "Radar Targeting MK2", "bonus": "+40% detection" }
      ],
      "defense": [
        { "name": "Smoke Launcher MK1", "bonus": "+20% countermeasures" },
        { "name": "Smoke Launcher MK2", "bonus": "+35% countermeasures" }
      ]
    }
  },
  {
    "id": 430,
    "name": "WMA301",
    "type": "Tank Destroyer",
    "faction": "Chinese",
    "tier": "III",
    image: "WMA301.jpg",
    "description": "A Chinese modern wheeled armored vehicle with strong firepower, protection, and mobility..",
    "stats": { "health": 28000, "speed": 65, "armor": 25, "agility": 25 },
    "weapons": [
      { "name": "300mm Rocket - HE", "type": "Rocket", "damage": 2000, "penetration": 50, "reload": 15 },
      { "name": "300mm Rocket - Cluster", "type": "Rocket", "damage": 1800, "penetration": 30, "reload": 15 }
    ],
    "modules": {
      "engine": [
        { "name": "Diesel 12150L", "bonus": "+10% speed" },
        { "name": "Diesel 12150L-A", "bonus": "+20% speed" }
      ],
      "fireControl": [
        { "name": "MLRS FCS MK1", "bonus": "+10% accuracy" },
        { "name": "MLRS FCS MK2", "bonus": "+20% accuracy" }
      ],
      "defense": [
        { "name": "Smoke Launcher MK1", "bonus": "+20% countermeasures" },
        { "name": "Smoke Launcher MK2", "bonus": "+35% countermeasures" }
      ]
    }
  },
   {
    id: 431,
    name: "BMD3",
    type: "Light Tank",
    faction: "Russian",
    tier: "III",
    description: "Light infantry fighting vehicle with amphibious capability and rapid deployment design.",
    image: "BMD3.jpg",
    stats: { health: 24000, speed: 70, armor: "420mm", agility: 82 },
    weapons: [
      { name: "2A42 30mm", type: "Autocannon", damage: 420, penetration: 75, rateOfFire: "550 rpm" },
      { name: "9M113 Konkurs", type: "ATGM", damage: 14500, penetration: 750 },
      { name: "PKT 7.62mm", type: "Coaxial MG", damage: 95, penetration: 12, rateOfFire: "800 rpm" },
    ],
    modules: {
      engine: [
        { name: "UTD-29 MK1", bonus: "+12 km/h speed" },
        { name: "UTD-29 MK2", bonus: "+24 km/h speed" },
        { name: "UTD-29 MK3", bonus: "+36 km/h speed" },
      ],
      armor: [
        { name: "Aluminum Armor MK1", bonus: "+80mm protection" },
        { name: "Aluminum Armor MK2", bonus: "+160mm protection" },
        { name: "Aluminum Armor MK3", bonus: "+240mm protection" },
      ],
      fireControl: [
        { name: "BPK-3-42 MK1", bonus: "+14% accuracy" },
        { name: "BPK-3-42 MK2", bonus: "+26% accuracy" },
        { name: "BPK-3-42 MK3", bonus: "+38% accuracy" },
      ],
    },
  {
  id: 500,
  name: "Mi-35P Hind-F",
  type: "Helicopter",
  faction: "Russian",
  tier: "III",
  image: "Mi-35P-Hind-F.jpg",
  description: "Export version of Mi-24 family — gunship/transport hybrid with heavy ATGMs and rockets in MWT.",
  stats: { health: 26400, speed: 290, verticalSpeed: 60, agility: 60 },
  weapons: [
    { name: "9K121 Vikhr / 9K121 Vikhr-1", type: "ATGM", damage: 3200, penetration: 200 },
    { name: "Ataka (where available)", type: "ATGM", damage: 3000, penetration: 180 },
    { name: "Igla-V", type: "AAM (MANPADS)", damage: 1800, penetration: 90 },
    { name: "S-8 / S-13 Rockets", type: "Rocket Pod", damage: 850, penetration: 55 },
    { name: "23mm / 30mm Gun Pod", type: "Autocannon", damage: 180, penetration: 25 }
  ],
  modules: {
    engine: [
      { name: "VK-2500 Upgrade MK1", bonus: "+10% speed" },
      { name: "VK-2500 Upgrade MK2", bonus: "+20% speed" }
    ],
    avionics: [
      { name: "Hind Targeting Suite MK1", bonus: "+20% lock speed" },
      { name: "Hind Targeting Suite MK2", bonus: "+35% lock speed" }
    ],
    defense: [
      { name: "Vitebsk ECM MK1", bonus: "+20% missile defense" }
    ]
  }
},
   {
    id: 501,
    name: "AH-64E Apache",
    type: "Helicopter",
    faction: "American",
    tier: "III",
    image: "AH-64E-Apache.jpg",
    description: "Advanced attack helicopter with multi-role capabilities and proven combat record.",
    stats: { health: 20500, speed: 293, verticalSpeed: 17, agility: 78 },
    weapons: [
      { name: "AGM-114 Hellfire", type: "Anti-Tank Missile", damage: 16500, penetration: 1100 },
      { name: "Hydra 70 Rockets", type: "Rocket Pod", damage: 8200, penetration: 380 },
      { name: "M230 30mm Chain Gun", type: "Autocannon", damage: 420, penetration: 75, rateOfFire: "625 rpm" },
    ],
    modules: {
      engine: [
        { name: "T700-GE-701D MK1", bonus: "+20 km/h speed" },
        { name: "T700-GE-701D MK2", bonus: "+40 km/h speed" },
        { name: "T700-GE-701D MK3", bonus: "+60 km/h speed" },
      ],
      survivability: [
        { name: "Chaff/Flare MK1", bonus: "+10% evasion" },
        { name: "Chaff/Flare MK2", bonus: "+20% evasion" },
        { name: "Chaff/Flare MK3", bonus: "+30% evasion" },
      ],
      avionics: [
        { name: "Longbow Radar MK1", bonus: "+15% detection" },
        { name: "Longbow Radar MK2", bonus: "+25% detection" },
        { name: "Longbow Radar MK3", bonus: "+35% detection" },
      ],
    },
  },
  {
    id: 502,
    name: "OH-1 Ninja",
    type: "Helicopter",
    faction: "Japanese",
    tier: "III",
    image: "OH-1-Ninja.jpg",
    description: "Agile Japanese attack/recon helicopter—fast and nimble with light AAMs in MWT.",
    stats: { health: 18000, speed: 320, verticalSpeed: 75, agility: 80 },
    weapons: [
      { name: "AIM-9 Sidewinder", type: "AAM", damage: 1600, penetration: 100 },
      { name: "AGM-65 Maverick", type: "ATGM", damage: 2800, penetration: 180 },
      { name: "LAU-68 Rocket Pods", type: "Rocket Pod", damage: 800, penetration: 50 }
    ],
    modules: {
      engine: [
        { name: "Mitsubishi TS-1 MK1", bonus: "+10% speed" },
        { name: "Mitsubishi TS-1 MK2", bonus: "+20% speed" }
      ],
      avionics: [
        { name: "EO Sensor Suite MK1", bonus: "+20% detection" },
        { name: "EO Sensor Suite MK2", bonus: "+40% detection" }
      ],
      defense: [
        { name: "Chaff/Flare MK1", bonus: "+20% countermeasures" },
        { name: "Chaff/Flare MK2", bonus: "+35% countermeasures" }
      ]
    }
  },
{
  id: 503,
  name: "Super Lynx Mk88A",
  type: "Helicopter",
  faction: "British",
  tier: "III",
   image: "Super-Lynx-Mk88A.jpg",
  description: "British naval helicopter adapted for anti-ship and light attack roles (small weapon capacity in MWT).",
  stats: { health: 10200, speed: 290, verticalSpeed: 55, agility: 68 },
  weapons: [
    { name: "Sea Skua", type: "Anti-Ship Missile", damage: 4200, penetration: 250 },
    { name: "20mm Cannon", type: "Autocannon", damage: 150, penetration: 20, rateOfFire: "variable" }
  ],
  modules: {
    engine: [
      { name: "Turbine Upgrade MK1", bonus: "+10% speed" },
      { name: "Turbine Upgrade MK2", bonus: "+20% speed" }
    ],
    avionics: [
      { name: "Naval Radar MK1", bonus: "+20% detection" },
      { name: "Naval Radar MK2", bonus: "+40% detection" }
    ],
    defense: [
      { name: "Chaff/Flare MK1", bonus: "+15% countermeasures" }
    ]
  }
},
{
  id: 504,
  name: "Z-9WA Harbin",
  type: "Helicopter",
  faction: "Chinese",
  tier: "III",
   image: "Z-9WA-Harbin.jpg",
  description: "Heavily armed Z-9 variant with multi-mount capability (x4 mounts for some missiles in MWT).",
  stats: { health: 19580, speed: 285, verticalSpeed: 60, agility: 60 },
  weapons: [
    { name: "Type 57-1", type: "Rocket Pod", damage: 800, penetration: 50 },
    { name: "TY-90", type: "Air-to-Air Missile", damage: 1800, penetration: 90 },
    { name: "QJK99", type: "ATGM", damage: 2500, penetration: 170 },
    { name: "AKD-9 (x4 mount option)", type: "ATGM", damage: 2200, penetration: 150 },
    { name: "HJ-8E (x4 mount option)", type: "ATGM", damage: 2500, penetration: 170 },
    { name: "AKD-10 (x4 mount option)", type: "ATGM", damage: 2800, penetration: 180 },
    { name: "FS-70", type: "Rocket Pod", damage: 780, penetration: 50 },
    { name: "Type 90", type: "Rocket Pod", damage: 800, penetration: 55 }
  ],
  modules: {
    engine: [
      { name: "WZ-8A MK1", bonus: "+10 km/h speed" },
      { name: "WZ-8A MK2", bonus: "+20 km/h speed" }
    ],
    armor: [
      { name: "Light Armor MK1", bonus: "+10% survivability" },
      { name: "Light Armor MK2", bonus: "+20% survivability" }
    ],
    avionics: [
      { name: "Heavy Targeting Pod MK1", bonus: "+20% lock speed" },
      { name: "Heavy Targeting Pod MK2", bonus: "+35% lock speed" }
    ]
  }
},
{
  id: 505,
  name: "Z-20 Harbin",
  type: "Helicopter",
  faction: "Chinese",
  tier: "III",
   image: "Z-20-Harbin.jpg",
  description: "Modern multi-role Chinese helicopter with stub wings; carries Chinese ATGMs and rockets in MWT.",
  stats: { health: 18400, speed: 280, verticalSpeed: 60, agility: 55 },
  weapons: [
    { name: "AKD-9", type: "ATGM", damage: 2200, penetration: 150 },
    { name: "AKD-10", type: "ATGM", damage: 2800, penetration: 180 },
    { name: "HJ-10 / HJ-series", type: "ATGM", damage: 2500, penetration: 170 },
    { name: "23mm Cannon Pod", type: "Autocannon", damage: 150, penetration: 20 },
    { name: "Rocket Pods (Type series)", type: "Rocket Pod", damage: 800, penetration: 50 }
  ],
  modules: {
    engine: [
      { name: "WZ-10 Derived Engine MK1", bonus: "+10% speed" },
      { name: "WZ-10 Derived Engine MK2", bonus: "+20% speed" }
    ],
    avionics: [
      { name: "Z-20 Sensor Suite MK1", bonus: "+20% detection" },
      { name: "Z-20 Sensor Suite MK2", bonus: "+40% detection" }
    ],
    defense: [
      { name: "Countermeasure Suite MK1", bonus: "+20% missile defense" }
    ]
  }
},
{
  id: 506,
  name: "MH-60L DAP",
  type: "Helicopter",
  faction: "American",
  tier: "III",
  image: "MH-60L-DAP.jpg",
  description: "Armed MH-60 variant (DAP) with a flexible loadout for rockets, ATGMs and air-to-air missiles.",
  stats: { health: 19200, speed: 285, verticalSpeed: 62, agility: 58 },
  weapons: [
    { name: "LAU-61", type: "Rocket Pod", damage: 800, penetration: 50 },
    { name: "AGR-20 BLR", type: "Rocket Pod", damage: 850, penetration: 55 },
    { name: "AGM-114 Hellfire", type: "ATGM", damage: 3200, penetration: 200 },
    { name: "AGM-179 JAGM", type: "ATGM", damage: 3500, penetration: 220 },
    { name: "AIM-9 Sidewinder", type: "Short-Range AAM", damage: 1800, penetration: 90 },
    { name: "AIM-92 (Stinger)", type: "AAM", damage: 1800, penetration: 90 },
    { name: "ADS Starstreak", type: "AAM", damage: 1900, penetration: 100 },
    { name: "M230 30mm", type: "Autocannon", damage: 180, penetration: 25 }
  ],
  modules: {
    engine: [
      { name: "T700 Series Upgrade MK1", bonus: "+10% speed" },
      { name: "T700 Series Upgrade MK2", bonus: "+20% speed" }
    ],
    avionics: [
      { name: "APG-Style Radar MK1", bonus: "+18% detection" },
      { name: "Targeting Pod MK1", bonus: "+20% accuracy" }
    ],
    defense: [
      { name: "Flares/Chaff MK1", bonus: "+20% countermeasures" }
    ]
  }
},

{
  id: 507,
  name: "AH-1Z Viper",
  type: "Helicopter",
  faction: "American",
  tier: "III",
  image: "AH-1Z-Viper.jpg",
  description: "Upgraded Cobra with improved sensors, weapons flexibility and survivability.",
  stats: { health: 21120, speed: 287, verticalSpeed: 65, agility: 60 },
  weapons: [
    { name: "AGM-114 Hellfire", type: "ATGM", damage: 3200, penetration: 200 },
    { name: "AGM-65 Maverick", type: "Air-to-Ground Missile", damage: 2800, penetration: 180 },
    { name: "AIM-9 Sidewinder", type: "Short-Range AAM", damage: 1800, penetration: 90 },
    { name: "AIM-92 (Stinger)", type: "AAM", damage: 1800, penetration: 90 },
    { name: "LAU-61 (Hydra-70 Pods)", type: "Rocket Pod", damage: 850, penetration: 55 },
    { name: "M197 20mm (or turret gun)", type: "Autocannon", damage: 150, penetration: 20 }
  ],
  modules: {
    engine: [
      { name: "T700-GE-401D MK1", bonus: "+5% speed" },
      { name: "T700-GE-401D MK2", bonus: "+10% speed" }
    ],
    avionics: [
      { name: "TSS Targeting Sight MK1", bonus: "+20% targeting accuracy" },
      { name: "TSS Targeting Sight MK2", bonus: "+35% targeting accuracy" }
    ],
    defense: [
      { name: "Chaff/Flare MK1", bonus: "+20% countermeasures" },
      { name: "Chaff/Flare MK2", bonus: "+35% countermeasures" }
    ]
  }
},
  
{
  id: 508,
  name: "Ka-50 Black Shark",
  type: "Helicopter",
  faction: "Russian",
  tier: "III",
  image: "Ka-50-Black-Shark.jpg",
  description: "Single-seat heavy attack helicopter with heavy ATGMs and cannon armament in MWT.",
  stats: { health: 22000, speed: 295, verticalSpeed: 62, agility: 62 },
  weapons: [
    { name: "Ataka / Ataka-V ATGM", type: "ATGM", damage: 3000, penetration: 180 },
    { name: "9M120 / Vikhr ATGM", type: "ATGM", damage: 3200, penetration: 200 },
    { name: "30mm 2A42 Gun", type: "Autocannon", damage: 180, penetration: 25 },
    { name: "S-8 Rocket Pod", type: "Rocket Pod", damage: 800, penetration: 50 },
    { name: "S-13 Rocket Pod", type: "Rocket Pod", damage: 850, penetration: 55 }
  ],
  modules: {
    engine: [
      { name: "TV3-117VM Upgrade MK1", bonus: "+10% speed" },
      { name: "TV3-117VM Upgrade MK2", bonus: "+20% speed" }
    ],
    avionics: [
      { name: "Ka-50 Advanced Sensor Suite MK1", bonus: "+20% detection" },
      { name: "Ka-50 Advanced Sensor Suite MK2", bonus: "+40% detection" }
    ],
    defense: [
      { name: "Vitebsk ECM MK1", bonus: "+15% countermeasure efficiency" }
    ]
  }
 },
  
  {
    id: 600,
    name: "AV-8B Harrier II",
    type: "Fighter Jet",
    faction: "American",
    tier: "II",
    description:
      "Vertical/Short Takeoff and Landing (V/STOL) attack aircraft with excellent ground support capabilities.",
    image: "AV-8B-Harrier-II.jpg",
    stats: { health: 18500, speed: 662, afterburnerSpeed: 1085, agility: 78 },
    weapons: [
      { name: "LAU-61", type: "Rocket Pod", damage: 4100, penetration: 290, reload: 20 },
    { name: "LAU-10 x3", type: "Rocket Pod", damage: 7400, penetration: 500, reload: 40 },
    { name: "GBU-12", type: "Guided Bomb", damage: 18590, penetration: 120, reload: 30 },
    { name: "AGM-65", type: "Air-to-Surface Missile", damage: 11000, penetration: 830, reload: 22 },
    { name: "AIM-132", type: "Short-Range AAM", damage: 5200, penetration: 65, reload: 15 },
    { name: "AIM-120", type: "Medium-Range AAM", damage: 11300, penetration: 60, reload: 20 }

    ],
    modules: {
      engine: [
        { name: "Rolls-Royce F402 MK1", bonus: "+150 km/h speed" },
        { name: "Rolls-Royce F402 MK2", bonus: "+280 km/h speed" },
        { name: "Rolls-Royce F402 MK3", bonus: "+420 km/h speed" },
      ],
      avionics: [
        { name: "AN/ASB-19 MK1", bonus: "+18% targeting" },
        { name: "AN/ASB-19 MK2", bonus: "+32% targeting" },
        { name: "AN/ASB-19 MK3", bonus: "+45% targeting" },
      ],
      armor: [
        { name: "Titanium Plating MK1", bonus: "+1200 health" },
        { name: "Titanium Plating MK2", bonus: "+2400 health" },
        { name: "Titanium Plating MK3", bonus: "+3600 health" },
      ],
    },
  },
  {
    id: 601,
    name: "Alpha Jet",
    type: "Fighter Jet",
    faction: "German",
    tier: "II",
    description: "Light attack aircraft and advanced trainer with excellent maneuverability.",
    image: "Alpha-Jet.jpg",
    stats: { health: 14200, speed: 927, afterburnerSpeed: 1000, agility: 85 },
    weapons: [
      { name: "SUU-20", type: "Bomb Cluster", damage: 14300, penetration: 120, reload: 40 },
    { name: "LAU-51", type: "Rocket Pod", damage: 4100, penetration: 290, reload: 20 },
    { name: "LAU-51 x2", type: "Rocket Pod", damage: 4100, penetration: 290, reload: 20 },
    { name: "GBU-38", type: "Guided Bomb", damage: 14300, penetration: 120, reload: 25 },
    { name: "AIM-132", type: "Short-Range AAM", damage: 5200, penetration: 65, reload: 15 },
    { name: "AGM-65", type: "Air-to-Surface Missile", damage: 11000, penetration: 830, reload: 22 },
    { name: "AIM-120", type: "Medium-Range AAM", damage: 11300, penetration: 60, reload: 20 }

    ],
    modules: {
      engine: [
        { name: "Larzac 04-C6 MK1", bonus: "+120 km/h speed" },
        { name: "Larzac 04-C6 MK2", bonus: "+240 km/h speed" },
        { name: "Larzac 04-C6 MK3", bonus: "+360 km/h speed" },
      ],
      avionics: [
        { name: "VE-130 HUD MK1", bonus: "+15% accuracy" },
        { name: "VE-130 HUD MK2", bonus: "+28% accuracy" },
        { name: "VE-130 HUD MK3", bonus: "+40% accuracy" },
      ],
      armor: [
        { name: "Light Armor MK1", bonus: "+800 health" },
        { name: "Light Armor MK2", bonus: "+1600 health" },
        { name: "Light Armor MK3", bonus: "+2400 health" },
      ],
    },
  },
  {
    id: 602,
    name: "F-14D Super Tomcat",
    type: "Fighter Jet",
    faction: "American",
    tier: "II",
    description: "Twin-engine, variable-sweep wing fighter designed for fleet defense and air superiority.",
    image: "F-14D-Super-Tomcat.jpg",
    stats: { health: 22800, speed: 913, afterburnerSpeed: 2485, agility: 72 },
    weapons: [
       { name: "GBU-38", type: "Guided Bomb", damage: 14300, penetration: 120, reload: 25 },
    { name: "GBU-31", type: "Guided Bomb", damage: 19400, penetration: 360, reload: 40 },
    { name: "GBU-12", type: "Guided Bomb", damage: 18590, penetration: 120, reload: 30 },
    { name: "AGM-65", type: "Air-to-Surface Missile", damage: 11000, penetration: 830, reload: 22 },
    { name: "AIM-7", type: "Medium-Range AAM", damage: 6200, penetration: 65, reload: 20 },
    { name: "AIM-54", type: "Long-Range AAM", damage: 8600, penetration: 100, reload: 30 }

    ],
    modules: {
      engine: [
        { name: "F110-GE-400 MK1", bonus: "+200 km/h speed" },
        { name: "F110-GE-400 MK2", bonus: "+380 km/h speed" },
        { name: "F110-GE-400 MK3", bonus: "+560 km/h speed" },
      ],
      radar: [
        { name: "AN/AWG-9 MK1", bonus: "+25% detection range" },
        { name: "AN/AWG-9 MK2", bonus: "+45% detection range" },
        { name: "AN/AWG-9 MK3", bonus: "+65% detection range" },
      ],
      armor: [
        { name: "Reinforced Structure MK1", bonus: "+1800 health" },
        { name: "Reinforced Structure MK2", bonus: "+3600 health" },
        { name: "Reinforced Structure MK3", bonus: "+5400 health" },
      ],
    },
  },
  {
    id: 603,
    name: "J-10 Chengdu",
    type: "Fighter Jet",
    faction: "Chinese",
    tier: "II",
    description: "Single-engine, multirole fighter with delta wing configuration and advanced avionics.",
    image: "J-10-Chengdu.jpg",
    stats: { health: 19500, speed: 1200, afterburnerSpeed: 2120, agility: 82 },
    weapons: [
     { name: "Type 2(100)", type: "Bomb", damage: 14000, penetration: 110, reload: 30 },
    { name: "Type 90", type: "Short-Range AAM", damage: 6400, penetration: 320, reload: 40 },
    { name: "TL-20", type: "Guided Bomb", damage: 16120, penetration: 143, reload: 25 },
    { name: "Type 3", type: "Bomb", damage: 16000, penetration: 210, reload: 35 },
    { name: "LT-2", type: "Air-to-Surface Missile", damage: 16200, penetration: 250, reload: 38 },
    { name: "PL-2", type: "Short-Range AAM", damage: 5800, penetration: 40, reload: 15 },
    { name: "PL-5", type: "Short-Range AAM", damage: 7100, penetration: 40, reload: 15 },
    { name: "PL-7", type: "Short-Range AAM", damage: 6500, penetration: 50, reload: 20 }

    ],
    modules: {
      engine: [
        { name: "WS-10A MK1", bonus: "+180 km/h speed" },
        { name: "WS-10A MK2", bonus: "+340 km/h speed" },
        { name: "WS-10A MK3", bonus: "+500 km/h speed" },
      ],
      radar: [
        { name: "Type 1473 MK1", bonus: "+20% detection" },
        { name: "Type 1473 MK2", bonus: "+35% detection" },
        { name: "Type 1473 MK3", bonus: "+50% detection" },
      ],
      armor: [
        { name: "Composite Armor MK1", bonus: "+1500 health" },
        { name: "Composite Armor MK2", bonus: "+3000 health" },
        { name: "Composite Armor MK3", bonus: "+4500 health" },
      ],
    },
  },
  {
    id: 604,
    name: "MiG-31BM Foxhound",
    type: "Fighter Jet",
    faction: "Russian",
    tier: "II",
    image: "MiG-31BM-Foxhound.jpg",
    description: "High-speed interceptor designed for long-range air defense missions.",
    stats: { health: 26500, speed: 1500, afterburnerSpeed: 3000, agility: 65 },
    weapons: [
      { name: "KAB-250", type: "Guided Bomb", damage: 14900, penetration: 130, reload: 25 },
    { name: "FAB-500", type: "Bomb", damage: 16000, penetration: 210, reload: 35 },
    { name: "KAB-500L", type: "Guided Bomb", damage: 17300, penetration: 310, reload: 40 },
    { name: "R-73", type: "Short-Range AAM", damage: 4800, penetration: 56, reload: 15 },
    { name: "Kh-38ME", type: "Air-to-Surface Missile", damage: 17300, penetration: 230, reload: 40 },
    { name: "R-40TD", type: "Long-Range AAM", damage: 7800, penetration: 70, reload: 30 },
    { name: "Kh-59M", type: "Air-to-Surface Missile", damage: 18400, penetration: 280, reload: 50 },
    { name: "R-37", type: "Long-Range AAM", damage: 8400, penetration: 80, reload: 30 }

    ],
    modules: {
      engine: [
        { name: "D-30F6 MK1", bonus: "+250 km/h speed" },
        { name: "D-30F6 MK2", bonus: "+450 km/h speed" },
        { name: "D-30F6 MK3", bonus: "+650 km/h speed" },
      ],
      radar: [
        { name: "Zaslon-AM MK1", bonus: "+30% detection range" },
        { name: "Zaslon-AM MK2", bonus: "+55% detection range" },
        { name: "Zaslon-AM MK3", bonus: "+80% detection range" },
      ],
      armor: [
        { name: "Steel Armor MK1", bonus: "+2200 health" },
        { name: "Steel Armor MK2", bonus: "+4400 health" },
        { name: "Steel Armor MK3", bonus: "+6600 health" },
      ],
    },
  },
  {
    id: 605,
    name: "Q-5A Nanchang",
    type: "Fighter Jet",
    faction: "Chinese",
    tier: "II",
    image: "Q-5A-Nanchang.jpg",
    description: "Ground attack aircraft derived from the MiG-19, optimized for close air support.",
    stats: { health: 16800, speed: 1190, afterburnerSpeed: 1540, agility: 75 },
    weapons: [
     { name: "Type 2(100)", type: "Bomb", damage: 14000, penetration: 110, reload: 30 },
    { name: "Type 90", type: "Short-Range AAM", damage: 6400, penetration: 320, reload: 40 },
    { name: "Type 1", type: "Bomb", damage: 15100, penetration: 120, reload: 32 },
    { name: "Type 3", type: "Bomb", damage: 16000, penetration: 210, reload: 35 },
    { name: "Type 130", type: "Air-to-Surface Missile", damage: 6900, penetration: 450, reload: 40 },
    { name: "PL-2", type: "Short-Range AAM", damage: 5800, penetration: 40, reload: 15 },
    { name: "PL-5", type: "Short-Range AAM", damage: 7100, penetration: 40, reload: 15 },
    { name: "PL-7", type: "Short-Range AAM", damage: 6500, penetration: 50, reload: 20 }

    ],
    modules: {
      engine: [
        { name: "WP-6A MK1", bonus: "+160 km/h speed" },
        { name: "WP-6A MK2", bonus: "+300 km/h speed" },
        { name: "WP-6A MK3", bonus: "+440 km/h speed" },
      ],
      avionics: [
        { name: "Type 232H MK1", bonus: "+16% targeting" },
        { name: "Type 232H MK2", bonus: "+28% targeting" },
        { name: "Type 232H MK3", bonus: "+40% targeting" },
      ],
      armor: [
        { name: "Aluminum Armor MK1", bonus: "+1200 health" },
        { name: "Aluminum Armor MK2", bonus: "+2400 health" },
        { name: "Aluminum Armor MK3", bonus: "+3600 health" },
      ],
    },
  },
  {
    id: 606,
    name: "Su-24M",
    type: "Fighter Jet",
    faction: "Russian",
    tier: "II",
    description: "Variable-sweep wing tactical bomber designed for all-weather ground attack missions.",
    image: "Su-24M.jpg",
    stats: { health: 24200, speed: 1315, afterburnerSpeed: 2317, agility: 68 },
    weapons: [
      { name: "B8M1", type: "Rocket Pod", damage: 5100, penetration: 420, reload: 20 },
    { name: "FAB-250", type: "Bomb", damage: 15100, penetration: 130, reload: 30 },
    { name: "B-13L", type: "Rocket Pod", damage: 9200, penetration: 160, reload: 40 },
    { name: "KAB-500L", type: "Guided Bomb", damage: 17300, penetration: 310, reload: 40 },
    { name: "R-60", type: "Short-Range AAM", damage: 4600, penetration: 36, reload: 10 },
    { name: "Kh-23M", type: "Air-to-Surface Missile", damage: 12900, penetration: 800, reload: 38 },
    { name: "Kh-25MLE", type: "Air-to-Surface Missile", damage: 16000, penetration: 160, reload: 35 },
    { name: "Kh-38ME", type: "Air-to-Surface Missile", damage: 17300, penetration: 230, reload: 40 },
    { name: "Kh-59M", type: "Air-to-Surface Missile", damage: 18400, penetration: 280, reload: 50 }

    ],
    modules: {
      engine: [
        { name: "AL-21F-3A MK1", bonus: "+220 km/h speed" },
        { name: "AL-21F-3A MK2", bonus: "+400 km/h speed" },
        { name: "AL-21F-3A MK3", bonus: "+580 km/h speed" },
      ],
      navigation: [
        { name: "Puma Navigation MK1", bonus: "+22% accuracy" },
        { name: "Puma Navigation MK2", bonus: "+38% accuracy" },
        { name: "Puma Navigation MK3", bonus: "+55% accuracy" },
      ],
      armor: [
        { name: "Titanium Armor MK1", bonus: "+1800 health" },
        { name: "Titanium Armor MK2", bonus: "+3600 health" },
        { name: "Titanium Armor MK3", bonus: "+5400 health" },
      ],
    },
  },
  {
    id: 607,
    name: "F-4E Phantom",
    type: "Fighter Jet",
    faction: "American",
    tier: "II",
    description: "Legendary multi-role fighter with proven combat record and versatile weapon systems.",
    image: "F-4E-Phantom.jpg",
    stats: { health: 19800, speed: 1472, afterburnerSpeed: 2370, agility: 68 },
    weapons: [
      { name: "LAU-61", type: "Rocket Pod", damage: 4100, penetration: 290, reload: 20 },
    { name: "LAU-10 x3", type: "Rocket Pod", damage: 7400, penetration: 500, reload: 40 },
    { name: "AGM-65", type: "Air-to-Surface Missile", damage: 11000, penetration: 830, reload: 22 },
    { name: "AIM-7", type: "Medium-Range AAM", damage: 6200, penetration: 65, reload: 20 },
    { name: "AGM-12B", type: "Air-to-Surface Missile", damage: 11500, penetration: 600, reload: 41 }

    ],
    modules: {
      engine: [
        { name: "J79-GE-17 MK1", bonus: "+120 km/h speed" },
        { name: "J79-GE-17 MK2", bonus: "+240 km/h speed" },
        { name: "J79-GE-17 MK3", bonus: "+360 km/h speed" },
      ],
      stealth: [
        { name: "ECM Pod MK1", bonus: "+8% stealth" },
        { name: "ECM Pod MK2", bonus: "+16% stealth" },
        { name: "ECM Pod MK3", bonus: "+24% stealth" },
      ],
      avionics: [
        { name: "AN/APQ-120 MK1", bonus: "+14% detection" },
        { name: "AN/APQ-120 MK2", bonus: "+26% detection" },
        { name: "AN/APQ-120 MK3", bonus: "+38% detection" },
      ],
    },
  },
  
  
  {
    id: 700,
    name: "M60 Patton",
    type: "Main Battle Tank",
    faction: "American",
    tier: "II",
    image: "M60-Patton.jpg",
    description: "Cold War era main battle tank with proven reliability and combat effectiveness.",
    stats: { health: 32000, speed: 50, armor: "650mm", agility: 36 },
    weapons: [
      { name: "M68 105mm L52", type: "Main Gun", damage: 11800, penetration: 620 },
      { name: "M85 12.7mm", type: "Machine Gun", damage: 180, penetration: 28, rateOfFire: "450 rpm" },
      { name: "M240 7.62mm", type: "Coaxial MG", damage: 120, penetration: 15, rateOfFire: "750 rpm" },
    ],
    modules: {
      engine: [
        { name: "Continental AVDS MK1", bonus: "+6 km/h speed" },
        { name: "Continental AVDS MK2", bonus: "+12 km/h speed" },
        { name: "Continental AVDS MK3", bonus: "+18 km/h speed" },
      ],
      armor: [
        { name: "Steel Armor MK1", bonus: "+120mm protection" },
        { name: "Steel Armor MK2", bonus: "+240mm protection" },
        { name: "Steel Armor MK3", bonus: "+360mm protection" },
      ],
      fireControl: [
        { name: "Optical Rangefinder MK1", bonus: "+10% accuracy" },
        { name: "Optical Rangefinder MK2", bonus: "+18% accuracy" },
        { name: "Optical Rangefinder MK3", bonus: "+26% accuracy" },
      ],
    },
  },
  
 
  {
    id: 701,
    name: "IT-1 Dragon",
    type: "Missile Carrier",
    faction: "Russian",
    tier: "II",
    description: "Experimental missile tank destroyer with unique guided missile system.",
    image: "IT-1-Dragon.jpg",
    stats: { health: 22800, speed: 50, armor: "520mm", agility: 55 },
    weapons: [
      { name: "3M7 Drakon ATGM", type: "Anti-Tank Missile", damage: 15200, penetration: 500 },
      { name: "PKT 7.62mm", type: "Machine Gun", damage: 95, penetration: 12, rateOfFire: "800 rpm" },
    ],
    modules: {
      engine: [
        { name: "V-54K MK1", bonus: "+6 km/h speed" },
        { name: "V-54K MK2", bonus: "+12 km/h speed" },
        { name: "V-54K MK3", bonus: "+18 km/h speed" },
      ],
      armor: [
        { name: "Steel Armor MK1", bonus: "+100mm protection" },
        { name: "Steel Armor MK2", bonus: "+200mm protection" },
        { name: "Steel Armor MK3", bonus: "+300mm protection" },
      ],
      fireControl: [
        { name: "Missile Guidance MK1", bonus: "+15% accuracy" },
        { name: "Missile Guidance MK2", bonus: "+25% accuracy" },
        { name: "Missile Guidance MK3", bonus: "+35% accuracy" },
      ],
    },
  },
  {
    id: 702,
    name: "M3 Bradley",
    type: "Multirole-IFV",
    faction: "American",
    tier: "II",
    description: "Infantry fighting vehicle with TOW missile system and troop transport capability.",
    image: "M3-Bradley.jpg",
    stats: { health: 25000, speed: 62, armor: "380mm", agility: 35 },
    weapons: [
      { name: "TOW-2 ATGM", type: "Anti-Tank Missile", damage: 14800, penetration: 780 },
      { name: "M242 25mm", type: "Autocannon", damage: 320, penetration: 58, rateOfFire: "200 rpm" },
      { name: "M240C 7.62mm", type: "Coaxial MG", damage: 110, penetration: 14, rateOfFire: "750 rpm" },
    ],
    modules: {
      engine: [
        { name: "Cummins VTA-903T MK1", bonus: "+10 km/h speed" },
        { name: "Cummins VTA-903T MK2", bonus: "+20 km/h speed" },
        { name: "Cummins VTA-903T MK3", bonus: "+30 km/h speed" },
      ],
      armor: [
        { name: "Aluminum Armor MK1", bonus: "+70mm protection" },
        { name: "Aluminum Armor MK2", bonus: "+140mm protection" },
        { name: "Aluminum Armor MK3", bonus: "+210mm protection" },
      ],
      fireControl: [
        { name: "Integrated Sight MK1", bonus: "+12% accuracy" },
        { name: "Integrated Sight MK2", bonus: "+22% accuracy" },
        { name: "Integrated Sight MK3", bonus: "+32% accuracy" },
      ],
    },
  },
  {
    id: 703,
    name: "ZSU-23-4M4 Shilka",
    type: "Anti-Air",
    faction: "Russian",
    tier: "II",
    description: "Self-propelled anti-aircraft gun with quad 23mm cannons and radar guidance.",
    image: "ZSU-23-4M4-Shilka.jpg",
    stats: { health: 21000, speed: 68, armor: "280mm", agility: 32 },
    weapons: [
      { name: "AZP-23 23mm Quad", type: "Anti-Aircraft Gun", damage: 1800, penetration: 95, rateOfFire: "3400 rpm" },
      { name: "9M311 Sosna", type: "SAM", damage: 7500, penetration: 380 },
    ],
    modules: {
      engine: [
        { name: "V-6R MK1", bonus: "+6 km/h speed" },
        { name: "V-6R MK2", bonus: "+12 km/h speed" },
        { name: "V-6R MK3", bonus: "+18 km/h speed" },
      ],
      armor: [
        { name: "Steel Armor MK1", bonus: "+50mm protection" },
        { name: "Steel Armor MK2", bonus: "+100mm protection" },
        { name: "Steel Armor MK3", bonus: "+150mm protection" },
      ],
      fireControl: [
        { name: "Gun Dish Radar MK1", bonus: "+20% accuracy" },
        { name: "Gun Dish Radar MK2", bonus: "+35% accuracy" },
        { name: "Gun Dish Radar MK3", bonus: "+50% accuracy" },
      ],
    },
  },
  

{
  id: 800,
  name: "Z-9G Harbin",
  type: "Helicopter",
  faction: "Chinese",
  tier: "II",
  image: "Z-9G-Harbin.jpg",
  description: "Multi-role Chinese helicopter equipped with light rockets, cannons, and ATGMs in MWT.",
  stats: { health: 17200, speed: 270, verticalSpeed: 55, agility: 60 },
  weapons: [
    { name: "TY-90", type: "Air-to-Air Missile", damage: 1800, penetration: 90 },
    { name: "QJK-88", type: "ATGM", damage: 2400, penetration: 160 },
    { name: "Type 57-1 Rocket Pod", type: "Rocket Pod", damage: 750, penetration: 50 },
    { name: "23mm Gun Pod", type: "Autocannon", damage: 140, penetration: 20 }
  ],
  modules: {
    engine: [
      { name: "WZ-8 Engine MK1", bonus: "+15 km/h speed" },
      { name: "WZ-8 Engine MK2", bonus: "+30 km/h speed" }
    ],
    avionics: [
      { name: "Targeting Pod MK1", bonus: "+15% lock speed" },
      { name: "Targeting Pod MK2", bonus: "+30% lock speed" }
    ],
    defense: [
      { name: "ECM Suite MK1", bonus: "+12% evasion" },
      { name: "ECM Suite MK2", bonus: "+25% evasion" }
    ]
  }
},
 {
    id: 801,
    name: "Mi-8TV",
    type: "Helicopter",
    faction: "Russian",
    tier: "II",
    description: "Versatile transport helicopter with light attack capabilities and proven reliability.",
    image: "Mi-8TV.jpg",
    stats: { health: 25000, speed: 260, verticalSpeed: 12, agility: 55 },
    weapons: [
      { name: "S-8 Rockets", type: "Rocket Pod", damage: 5800, penetration: 280 },
      { name: "PKT 7.62mm", type: "Machine Gun", damage: 95, penetration: 12, rateOfFire: "800 rpm" },
      { name: "9M17 Falanga", type: "ATGM", damage: 12500, penetration: 650 },
    ],
    modules: {
      engine: [
        { name: "TV3-117MT MK1", bonus: "+18 km/h speed" },
        { name: "TV3-117MT MK2", bonus: "+36 km/h speed" },
        { name: "TV3-117MT MK3", bonus: "+54 km/h speed" },
      ],
      survivability: [
        { name: "Armor Plating MK1", bonus: "+8% protection" },
        { name: "Armor Plating MK2", bonus: "+16% protection" },
        { name: "Armor Plating MK3", bonus: "+24% protection" },
      ],
      avionics: [
        { name: "Navigation Suite MK1", bonus: "+10% accuracy" },
        { name: "Navigation Suite MK2", bonus: "+18% accuracy" },
        { name: "Navigation Suite MK3", bonus: "+26% accuracy" },
      ],
    },
  },
{
  id: 802,
  name: "MH-6 Little Bird",
  type: "Helicopter",
  faction: "American",
  tier: "II",
  image: "MH-6-Little-Bird.jpg",
  description: "Ultra-light scout/assault helicopter used for special operations; light armament but excellent maneuverability.",
  stats: { health: 6100, speed: 280, verticalSpeed: 45, agility: 75 },
  weapons: [
    { name: "M134 Minigun", type: "Autocannon", damage: 120, penetration: 15, rateOfFire: "variable" },
    { name: "LAU-61 / Hydra-70 Rocket Pod", type: "Rocket Pod", damage: 800, penetration: 50 },
    { name: "7.62mm Door Gun", type: "Machine Gun", damage: 45, penetration: 10 }
  ],
  modules: {
    engine: [
      { name: "Turboshaft Upgrade MK1", bonus: "+10% speed" },
      { name: "Turboshaft Upgrade MK2", bonus: "+20% speed" }
    ],
    avionics: [
      { name: "Light Recon Suite MK1", bonus: "+15% detection" },
      { name: "Light Recon Suite MK2", bonus: "+30% detection" }
    ],
    defense: [
      { name: "Light Flares MK1", bonus: "+10% countermeasures" },
      { name: "Light Flares MK2", bonus: "+20% countermeasures" }
    ]
  }
},
{
  id: 803,
  name: "Z-11WB Changhe",
  type: "Helicopter",
  faction: "Chinese",
  tier: "II",
  image: "Z-11WB-Changhe.jpg",
  description: "Light Chinese helicopter (Changhe Z-11WB) with multiple light ATGM/rocket options.",
  stats: { health: 7200, speed: 270, verticalSpeed: 50, agility: 70 },
  weapons: [
    { name: "AKD-9", type: "ATGM", damage: 2200, penetration: 150 },
    { name: "AKD-10", type: "ATGM", damage: 2800, penetration: 180 },
    { name: "TY-90", type: "Air-to-Air Missile", damage: 1800, penetration: 90 },
    { name: "HJ-8E", type: "ATGM", damage: 2500, penetration: 170 },
    { name: "Type 57-1", type: "Rocket Pod", damage: 750, penetration: 50 },
    { name: "Type 90", type: "Rocket Pod", damage: 800, penetration: 55 },
    { name: "TL-6", type: "Light Anti-Ship Missile", damage: 3200, penetration: 200 },
    { name: "FS-70", type: "Rocket Pod", damage: 780, penetration: 50 }
  ],
  modules: {
    engine: [
      { name: "WZ-8 Engine MK1", bonus: "+15 km/h speed" },
      { name: "WZ-8 Engine MK2", bonus: "+30 km/h speed" }
    ],
    avionics: [
      { name: "Targeting Pod MK1", bonus: "+15% lock speed" },
      { name: "Targeting Pod MK2", bonus: "+30% lock speed" }
    ],
    defense: [
      { name: "ECM Suite MK1", bonus: "+12% evasion" },
      { name: "ECM Suite MK2", bonus: "+25% evasion" }
    ]
  }
},

{
    "id": 900,
    "name": "M41 Walker Bulldog",
    "type": "Main Battle Tank",
    "faction": "American",
    "tier": 1,
    "description": "American light tank, fast and agile, armed with 76mm gun, ideal for scouting missions.",
    "image": "M41Bulldog.jpg",
    "stats": {
      "health": 27000,
      "speed": 67,
      "reverseSpeed": 27,
      "agility": 38
    },
    "weapons": [
      {
        "name": "M339 APBC",
        "type": "Main Gun",
        "damage": 7560,
        "penetration": 173,
        "reload": 0
      },
      {
        "name": "M352 HE",
        "type": "Main Gun",
        "damage": 5600,
        "penetration": 78,
        "reload": 0
      },
      {
        "name": "M319 APCR",
        "type": "Main Gun",
        "damage": 5880,
        "penetration": 200,
        "reload": 0
      },
      {
        "name": "M331A2 APDS",
        "type": "Main Gun",
        "damage": 10800,
        "penetration": 296,
        "reload": 0
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 901,
    "name": "T-55A",
    "type": "Main Battle Tank",
    "faction": "Russian",
    "tier": 1,
    "description": "Soviet medium tank, balanced armor and firepower, armed with 100mm gun, versatile on battlefield.",
    "image": "T-55A.jpg",
    "stats": {
      "health": 29000,
      "speed": 55,
      "reverseSpeed": 12,
      "agility": 35
    },
    "weapons": [
      {
        "name": "BR-412 APHE",
        "type": "Main Gun",
        "damage": 6300,
        "penetration": 236,
        "reload": 0
      },
      {
        "name": "OF-412 HE",
        "type": "Main Gun",
        "damage": 9450,
        "penetration": 103,
        "reload": 0
      },
      {
        "name": "3BK17M HEAT",
        "type": "Main Gun",
        "damage": 8670,
        "penetration": 390,
        "reload": 0
      },
      {
        "name": "3BM8 APFSDS",
        "type": "Main Gun",
        "damage": 7700,
        "penetration": 332,
        "reload": 0
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 902,
    "name": "T-55AMD-1",
    "type": "Main Battle Tank",
    "faction": "Russian",
    "tier": 1,
    "description": "Soviet tank destroyer, lightly armored, equipped with 100mm gun, excels at ambushes and long-range engagements.",
    "image": "T-55AMD-1.jpg",
    "stats": {
      "health": 29000,
      "speed": 55,
      "reverseSpeed": 12,
      "agility": 35
    },
    "weapons": [
      {
        "name": "BR-412 APHE",
        "type": "Main Gun",
        "damage": 6300,
        "penetration": 236,
        "reload": 0
      },
      {
        "name": "OF-412 HE",
        "type": "Main Gun",
        "damage": 9450,
        "penetration": 103,
        "reload": 0
      },
      {
    "name": "3BK17M HEAT",
    "type": "Main Gun",
    "damage": 8670,
    "penetration": 390
  },
      {
    "name": "3BM24 APFSDS",
    "type": "Main Gun",
    "damage": 7920,
    "penetration": 360
  }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 903,
    "name": "Type-61",
    "type": "Main Battle Tank",
    "faction": "Japanese",
    "tier": 1,
    "description": "Japanese medium tank, agile and lightly armored, armed with 90mm gun, effective in flanking maneuvers.",
    "image": "Type61.jpg",
    "stats": {
      "health": 0,
      "speed": 0,
      "reverseSpeed": 0,
      "agility": 0
    },
    "weapons": [

     
      {
    "name": "M82 APBC",
    "type": "Main Gun",
    "damage": 7480,
    "penetration": 185
  },
   {
    "name": "M71 HE",
    "type": "Main Gun",
    "damage": 9900,
    "penetration": 90
  },
  {
    "name": "M318A1 APBC",
    "type": "Main Gun",
    "damage": 8780,
    "penetration": 194
  },
  {
    "name": "M431 HEAT",
    "type": "Main Gun",
    "damage": 8460,
    "penetration": 320
  }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 904,
    "name": "WZ-120C",
    "type": "Main Battle Tank",
    "faction": "Chinese",
    "tier": 1,
    "description": "Chinese medium tank, well-armored and mobile, equipped with 105mm gun, versatile in frontline combat.",
    "image": "WZ-120C.jpg",
    "stats": {
      "health": 28500,
      "speed": 48,
      "reverseSpeed": 11,
      "agility": 33
    },
    "weapons": [
      {
        "name": "DTP1A HEAT",
        "type": "Main Gun",
        "damage": 9280,
        "penetration": 800,
        "reload": 0
      },
      {
        "name": "Type-83 HE",
        "type": "Main Gun",
        "damage": 8100,
        "penetration": 107,
        "reload": 0
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 905,
    "name": "WZ-120",
    "type": "Main Battle Tank",
    "faction": "Chinese",
    "tier": 1,
    "description": "Chinese medium tank, balanced armor and speed, armed with 105mm gun, effective in versatile combat roles.",
    "image": "WZ-120.jpg",
    "stats": {
      "health": 28000,
      "speed": 48,
      "reverseSpeed": 11,
      "agility": 28
    },
    "weapons": [
      {
        "name": "BR-412 APHE",
        "type": "Main Gun",
        "damage": 6300,
        "penetration": 236,
        "reload": 0
      },
      {
        "name": "OF-412 HE",
        "type": "Main Gun",
        "damage": 9450,
        "penetration": 103,
        "reload": 0
      },
      {
        "name": "Type-59 APFSDS",
        "type": "Main Gun",
        "damage": 7700,
        "penetration": 325,
        "reload": 0
      },
      {
        "name": "Type-73 HEAT",
        "type": "Main Gun",
        "damage": 8050,
        "penetration": 380,
        "reload": 0
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 906,
    "name": "WZ-121",
    "type": "Main Battle Tank",
    "faction": "Chinese",
    "tier": 1,
    "description": "Chinese light tank, fast and maneuverable, armed with 76mm gun, ideal for scouting and flanking.",
    "image": "WZ-121.jpg",
    "stats": {
      "health": 30000,
      "speed": 51,
      "reverseSpeed": 12,
      "agility": 35
    },
    "weapons": [
      {
        "name": "3BM1 APFSDS",
        "type": "Main Gun",
        "damage": 7920,
        "penetration": 185,
        "reload": 0
      },
      {
        "name": "3OF15 HE",
        "type": "Main Gun",
        "damage": 9720,
        "penetration": 93,
        "reload": 0
      },
      {
        "name": "3BK3 HEAT",
        "type": "Main Gun",
        "damage": 8280,
        "penetration": 420,
        "reload": 0
      },
      {
        "name": "3BM24 APFSDS",
        "type": "Main Gun",
        "damage": 7920,
        "penetration": 360,
        "reload": 0
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 907,
    "name": "T54E1",
    "type": "Main Battle Tank",
    "faction": "American",
    "tier": 1,
    "description": "American medium tank, heavily armed with 105mm gun, balanced armor, versatile in frontline and support roles.",
    "image": "T54E1.jpg",
    "stats": {
      "health": 29000,
      "speed": 46,
      "reverseSpeed": 18,
      "agility": 29
    },
    "weapons": [
      {
        "name": "T18E1 APBC",
        "type": "Unknown",
        "damage": 9100,
        "penetration": 420,
        "reload": 0
      },
      {
    "name": "T297 HESH",
    "type": "Main Gun",
    "damage": 8150,
    "penetration": 117
  },
      {
    "name": "T297 APFSDS",
    "type": "Main Gun",
    "damage": 10200,
    "penetration": 429
  },
      {
    "name": "T298E1 HEAT",
    "type": "Main Gun",
    "damage": 9780,
    "penetration": 380
  }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 908,
    "name": "BMP-1",
    "type": "Missile Carrier",
    "faction": "Russian",
    "tier": 1,
    "description": "Soviet light armored vehicle, highly mobile, armed with 73mm gun and ATGM, excels in reconnaissance.",
    "image": "BMP-1.jpg",
    "stats": {
      "health": 19000,
      "speed": 69,
      "reverseSpeed": 17,
      "agility": 35
    },
    "weapons": [
      {
    "name": "3UBR APBC",
    "type": "Main Gun",
    "damage": 540,
    "penetration": 112
  },
      {
    "name": "30F8 HEI",
    "type": "Main Gun",
    "damage": 675,
    "penetration": 50
  },
      {
    "name": "3UBRB APDS",
    "type": "Main Gun",
    "damage": 525,
    "penetration": 163
  },
      {
    "name": "M929 APFSDS",
    "type": "Main Gun",
    "damage": 550,
    "penetration": 189
  }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 909,
    "name": "BRM-1K",
    "type": "Missile Carrier",
    "faction": "Russian",
    "tier": 1,
    "description": "Soviet reconnaissance vehicle, lightly armored, fast, equipped with 73mm gun and sensors for scouting missions.",
    "image": "BRM-1K.jpg",
    "stats": {
      "health": 20000,
      "speed": 68,
      "reverseSpeed": 18,
      "agility": 35
    },
    "weapons": [

      {
    "name": "BP-350B APHE",
    "type": "Main Gun",
    "damage": 6264,
    "penetration": 122
  },
  {
    "name": "BP-350M HE",
    "type": "Main Gun",
    "damage": 7830,
    "penetration": 76
  },
  {
    "name": "BP-350M HE",
    "type": "Main Gun",
    "damage": 7830,
    "penetration": 76
  },
   {
    "name": "BK-354M HEAT",
    "type": "Main Gun",
    "damage": 6670,
    "penetration": 320
  }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 910,
    "name": "BTR-60PB",
    "type": "Missile Carrier",
    "faction": "Russian",
    "tier": 1,
    "description": "Soviet armored personnel carrier, lightly armored, fast, armed with 14.5mm machine gun for infantry support.",
    "image": "BTR-60PB.jpg",
    "stats": {
      "health": 18500,
      "speed": 70,
      "reverseSpeed": 22,
      "agility": 45
    },
    "weapons": [
      {
        "name": "Unknown",
        "type": "Unknown",
        "damage": 0,
        "penetration": 0,
        "reload": 0
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 911,
    "name": "BTR-80",
    "type": "Missile Carrier",
    "faction": "Russian",
    "tier": 1,
    "description": "Soviet wheeled armored personnel carrier, fast and mobile, armed with 14.5mm machine gun, supports infantry effectively.",
    "image": "BTR-80.jpg",
    "stats": {
      "health": 19000,
      "speed": 87,
      "reverseSpeed": 18,
      "agility": 35
    },
    "weapons": [
      {
        "name": "PG-9 HEAT",
        "type": "Main Gun",
        "damage": 6325,
        "penetration": 300,
        "reload": 0
      },
      {
        "name": "OG-9 HE",
        "type": "Main Gun",
        "damage": 7425,
        "penetration": 66,
        "reload": 0
      },
      {
        "name": "9M14 Malyutka",
        "type": "Unknown",
        "damage": 8200,
        "penetration": 400,
        "reload": 4
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 912,
    "name": "BTR-80A",
    "type": "Missile Carrier",
    "faction": "Russian",
    "tier": 1,
    "description": "Soviet wheeled armored personnel carrier, upgraded with 30mm autocannon, fast and versatile for frontline support.",
    "image": "BTR-80A.jpg",
    "stats": {
      "health": 19500,
      "speed": 87,
      "reverseSpeed": 18,
      "agility": 35
    },
    "weapons": [
      {
        "name": "PG-9 HEAT",
        "type": "Main Gun",
        "damage": 6325,
        "penetration": 300,
        "reload": 0
      },
      {
        "name": "OG-9 HE",
        "type": "Main Gun",
        "damage": 7425,
        "penetration": 66,
        "reload": 0
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 913,
    "name": "LAV-25",
    "type": "Missile Carrier",
    "faction": "American",
    "tier": 1,
    "description": "American light armored vehicle, highly mobile, armed with 25mm autocannon, ideal for reconnaissance and rapid assaults.",
    "image": "LAV-25.jpg",
    "stats": {
      "health": 18500,
      "speed": 96,
      "reverseSpeed": 27,
      "agility": 35
    },
    "weapons": [
      {
        "name": "M601 API",
        "type": "Main Gun",
        "damage": 340,
        "penetration": 95,
        "reload": 0
      },
      {
        "name": "M599 HEI",
        "type": "Main Gun",
        "damage": 410,
        "penetration": 40,
        "reload": 0
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 914,
    "name": "LAV-150",
    "type": "Missile Carrier",
    "faction": "American",
    "tier": 1,
    "description": "American wheeled armored vehicle, fast and lightly armored, equipped with 90mm gun for versatile combat roles.",
    "image": "LAV-150.jpg",
    "stats": {
      "health": 18000,
      "speed": 98,
      "reverseSpeed": 30,
      "agility": 35
    },
    "weapons": [
      {
    "name": "PGU-32/U SAPHEI(LAV)",
    "type": "Main Gun",
    "damage": 405,
    "penetration": 115
  },
      {
    "name": "M791 APDS(LAV)",
    "type": "Main Gun",
    "damage": 473,
    "penetration": 111
  },
      {
        "name": "M719 APDS",
        "type": "Unknown",
        "damage": 450,
        "penetration": 120
      },
      {
    "name": "M919 APFSDS(LAV)",
    "type": "Main Gun",
    "damage": 495,
    "penetration": 140
  },
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 915,
    "name": "M113A1 FMS AIFV",
    "type": "Missile Carrier",
    "faction": "American",
    "tier": 1,
    "description": "American armored infantry fighting vehicle, lightly armored, armed with 12.7mm machine gun, transports troops and supports frontline combat.",
    "image": "M113A1-FMS-AIFV.jpg",
    "stats": {
      "health": 21500,
      "speed": 65,
      "reverseSpeed": 23,
      "agility": 38
    },
    "weapons": [
      {
    "name": "20×128 APCR",
    "type": "Main Gun",
    "damage": 380,
    "penetration": 135
  },
  {
    "name": "20×128 API",
    "type": "Main Gun",
    "damage": 380,
    "penetration": 105
  },
  {
    "name": "20×128 API ",
    "type": "Main Gun",
    "damage": 380,
    "penetration": 95
  },
  {
    "name": "20×128 HEI",
    "type": "Main Gun",
    "damage": 513,
    "penetration": 40
  }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 916,
    "name": "PT-76B",
    "type": "Light Tank",
    "faction": "Russian",
    "tier": 1,
    "description": "Soviet light amphibious tank, fast and mobile, armed with 76mm gun, excels in reconnaissance and river crossings.",
    "image": "PT-76B.jpg",
    "stats": {
      "health": 22500,
      "speed": 60,
      "reverseSpeed": 18,
      "agility": 25
    },
    "weapons": [
      {
        "name": "BR-281 AP",
        "type": "Main Gun",
        "damage": 1040,
        "penetration": 147,
        "reload": 0
      },
      {
        "name": "OR-281 HEI",
        "type": "Main Gun",
        "damage": 1570,
        "penetration": 83,
        "reload": 0
      },
      {
        "name": "BR-281U APHE",
        "type": "Main Gun",
        "damage": 1080,
        "penetration": 156,
        "reload": 0
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 917,
    "name": "WZ-211",
    "type": "Main Battle Tank",
    "faction": "Chinese",
    "tier": 1,
    "description": "Chinese light tank, fast and maneuverable, armed with 76mm gun, suitable for scouting and hit-and-run tactics.",
    "image": "WZ-211.jpg",
    "stats": {
      "health": 24000,
      "speed": 65,
      "reverseSpeed": 18,
      "agility": 30
    },
    "weapons": [
      {
        "name": "BR-365A APHE",
        "type": "Main Gun",
        "damage": 5850,
        "penetration": 139,
        "reload": 0
      },
      {
        "name": "BR-367P HE",
        "type": "Main Gun",
        "damage": 8775,
        "penetration": 85,
        "reload": 0
      },
      {
        "name": "O-365K APFSDS ",
        "type": "Main Gun",
        "damage": 7150,
        "penetration": 255,
        "reload": 0
      },
      {
        "name": "Type-1956 HEAT",
        "type": "Main Gun",
        "damage": 7475,
        "penetration": 370,
        "reload": 0
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 918,
    "name": "WZ-501A",
    "type": "Missile Carrier",
    "faction": "Chinese",
    "tier": 1,
    "description": "Chinese light armored vehicle, fast and agile, equipped with 73mm gun, ideal for reconnaissance and support.",
    "image": "WZ-501A.jpg",
    "stats": {
      "health": 19500,
      "speed": 70,
      "reverseSpeed": 20,
      "agility": 35
    },
    "weapons": [
      {
        "name": "Type-85 HEAT",
        "type": "Main Gun",
        "damage": 5980,
        "penetration": 320,
        "reload": 0
      },
      {
        "name": "Type-85 HE",
        "type": "Main Gun",
        "damage": 7020,
        "penetration": 66,
        "reload": 0
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 919,
    "name": "WZ-501",
    "type": "Missile Carrier",
    "faction": "Chinese",
    "tier": 1,
    "description": "Chinese light armored vehicle, highly mobile, armed with 73mm gun, effective for scouting and support roles.",
    "image": "WZ-501.jpg",
    "stats": {
      "health": 22000,
      "speed": 70,
      "reverseSpeed": 20,
      "agility": 35
    },
    "weapons": [
      {
    "name": "Type-87 APDS",
    "type": "Main Gun",
    "damage": 504,
    "penetration": 111
  },
  {
    "name": "Type-87 APFSDS",
    "type": "Main Gun",
    "damage": 528,
    "penetration": 150
  },
  {
    "name": "Type-87 HEI",
    "type": "Main Gun",
    "damage": 648,
    "penetration": 45
  },
  {
    "name": "Type-87 SAPHEI",
    "type": "Main Gun",
    "damage": 432,
    "penetration": 105
  }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 920,
    "name": "XM-800T",
    "type": "Missile Carrier",
    "faction": "American",
    "tier": 1,
    "description": "American light tank, fast and agile, armed with 76mm gun, excels at reconnaissance and flanking maneuvers.",
    "image": "XM-800T.jpg",
    "stats": {
      "health": 21000,
      "speed": 96,
      "reverseSpeed": 43,
      "agility": 37
    },
    "weapons": [
     
      {
    "name": "M792 HEI(FMS)",
    "type": "Main Gun",
    "damage": 608,
    "penetration": 48
  },
  {
    "name": "PGU-32/U SAPHEI(FMS)",
    "type": "Main Gun",
    "damage": 432,
    "penetration": 15
  },
  {
    "name": "M7911 APDS(FMS)",
    "type": "Main Gun",
    "damage": 473,
    "penetration": 111
  },
  {
    "name": "M919 APFSDS(FMS)",
    "type": "Main Gun",
    "damage": 495,
    "penetration": 140
  }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 921,
    "name": "CM25",
    "type": "Missile Carrier",
    "faction": "Chinese",
    "tier": 1,
    "description": "French light armored vehicle, fast and mobile, armed with 90mm gun, effective for reconnaissance and hit-and-run attacks.",
    "image": "CM25.jpg",
    "stats": {
      "health": 19000,
      "speed": 65,
      "reverseSpeed": 23,
      "agility": 30
    },
    "weapons": [
      {
        "name": "BGM-71A",
        "type": "Unknown",
        "damage": 10450,
        "penetration": 430,
        "reload": 6
      },
      {
        "name": "BGM-71H",
        "type": "Unknown",
        "damage": 9900,
        "penetration": 120,
        "reload": 6
      },
      {
        "name": "BGM-71C",
        "type": "Unknown",
        "damage": 12100,
        "penetration": 630,
        "reload": 6
      },
      {
        "name": "BGM-71E",
        "type": "Unknown",
        "damage": 10120,
        "penetration": 900,
        "reload": 6
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 922,
    "name": "SU-152 Taran",
    "type": "Tank Destroyer",
    "faction": "Russian",
    "tier": 1,
    "description": "Soviet tank destroyer, heavily armed with 152mm gun, excels in ambushes and destroying heavily armored targets.",
    "image": "SU-152.jpg",
    "stats": {
      "health": 24000,
      "speed": 64,
      "reverseSpeed": 24,
      "agility": 32
    },
    "weapons": [
      {
        "name": "B-32 API",
        "type": "Main Gun",
        "damage": 300,
        "penetration": 90,
        "reload": 0
      },
      {
        "name": "BZT-44 API",
        "type": "Main Gun",
        "damage": 330,
        "penetration": 90,
        "reload": 0
      },
      {
        "name": "BS-41 API",
        "type": "Main Gun",
        "damage": 310,
        "penetration": 112,
        "reload": 0
      },
     {
    "name": "BST API",
    "type": "Main Gun",
    "damage": 350,
    "penetration": 112
  },
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 923,
    "name": "T114 (BAT)",
    "type": "Tank Destroyer",
    "faction": "American",
    "tier": 1,
    "description": "American tank destroyer, heavily armored, armed with 90mm gun, designed for long-range engagements and frontline support.",
    "image": "T114.jpg",
    "stats": {
      "health": 18000,
      "speed": 59,
      "reverseSpeed": 19,
      "agility": 41
    },
    "weapons": [
     
     {
    "name": "BP-350B APHE",
    "type": "Main Gun",
    "damage": 6264,
    "penetration": 122
  },
  {
    "name": "PFF HE",
    "type": "Main Gun",
    "damage": 10400,
    "penetration": 106
  },
  {
    "name": "M344A1 HEAT",
    "type": "Main Gun",
    "damage": 10800,
    "penetration": 433
  },
  {
    "name": "106 3A HEAT",
    "type": "Main Gun",
    "damage": 10000,
    "penetration": 700
  }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 924,
    "name": "M42A1",
    "type": "Anti-Air",
    "faction": "American",
    "tier": 1,
    "description": "American self-propelled anti-aircraft vehicle, lightly armored, armed with twin 40mm autocannons for air defense support.",
    "image": "M42A1.jpg",
    "stats": {
      "health": 19000,
      "speed": 73,
      "reverseSpeed": 29,
      "agility": 38
    },
    "weapons": [
     
      {
    "name": "M81A1 API",
    "type": "Main Gun",
    "damage": 1080,
    "penetration": 135
  },
  {
    "name": "Mk2 HEI",
    "type": "Main Gun",
    "damage": 1400,
    "penetration": 56
  },
  {
    "name": "Mk3 HEI",
    "type": "Main Gun",
    "damage": 1200,
    "penetration": 76
  }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  },
  {
    "id": 925,
    "name": "ZSU-57-2",
    "type": "Anti-Air",
    "faction": "Russian",
    "tier": 1,
    "description": "Soviet self-propelled anti-aircraft vehicle, lightly armored, armed with twin 57mm autocannons, effective against low-flying aircraft.",
    "image": "ZSU-57-2.jpg",
    "stats": {
      "health": 19500,
      "speed": 47,
      "reverseSpeed": 12,
      "agility": 36
    },
    "weapons": [
      {
        "name": "BR-540 APHE",
        "type": "Main Gun",
        "damage": 9900,
        "penetration": 243
      },
      {
        "name": "OF-540 HE",
        "type": "Main Gun",
        "damage": 14850,
        "penetration": 139
      },
      {
        "name": "M69 APFSDS ",
        "type": "Main Gun",
        "damage": 11100,
        "penetration": 400
      },
      {
        "name": "BP-540 HEAT",
        "type": "Main Gun",
        "damage": 12650,
        "penetration": 480
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "Default Engine MK1",
          "bonus": "+10% speed"
        },
        {
          "name": "Default Engine MK2",
          "bonus": "+20% speed"
        }
      ],
      "stealth": [
        {
          "name": "Default Stealth MK1",
          "bonus": "+10% stealth"
        },
        {
          "name": "Default Stealth MK2",
          "bonus": "+20% stealth"
        }
      ],
      "avionics": [
        {
          "name": "Default Avionics MK1",
          "bonus": "+20% detection"
        },
        {
          "name": "Default Avionics MK2",
          "bonus": "+40% detection"
        }
      ]
    }
  }
];

// Battle Pass Data
const BATTLE_PASS_MONTHS = [
  {
    id: 1,
    month: "January 2024",
    title: "Arctic Storm",
    description: "Frozen battlefields and winter warfare dominate this month's operations. Elite units deploy advanced cold-weather equipment.",
    image: "arctic-storm-event.jpg",
    vehicles: [
      VEHICLES.find(v => v.name === "T-14 Armata"),
      VEHICLES.find(v => v.name === "Leopard 2A7+")
    ].filter(Boolean)
  },
  {
    id: 2,
    month: "February 2024",
    title: "Desert Thunder",
    description: "High-intensity desert combat with advanced air support and armored divisions clashing in sandy terrain.",
    image: "desert-thunder-event.jpg",
    vehicles: [
      VEHICLES.find(v => v.name === "F-22 Raptor"),
      VEHICLES.find(v => v.name === "Abrams X")
    ].filter(Boolean)
  },
  {
    id: 3,
    month: "March 2024",
    title: "Urban Siege",
    description: "Close-quarters urban warfare featuring specialized equipment for city combat and building clearing operations.",
    image: "urban-siege-event.jpg",
    vehicles: [
      VEHICLES.find(v => v.name === "BMPT Terminator 2"),
      VEHICLES.find(v => v.name === "M1128 Stryker")
    ].filter(Boolean)
  },
  {
    id: 4,
    month: "April 2024",
    title: "Naval Strike",
    description: "Amphibious operations and carrier-based missions with advanced naval aviation and marine assault units.",
    image: "naval-strike-event.jpg",
    vehicles: [
      VEHICLES.find(v => v.name === "F/A-18F Super Hornet"),
      VEHICLES.find(v => v.name === "Type 16 MCV")
    ].filter(Boolean)
  },
  {
    id: 5,
    month: "May 2024",
    title: "Stealth Operations",
    description: "Covert missions featuring next-generation stealth technology and advanced reconnaissance platforms.",
    image: "stealth-ops-event.jpg",
    vehicles: [
      VEHICLES.find(v => v.name === "Su-57M"),
      VEHICLES.find(v => v.name === "Ka-58 Black Ghost")
    ].filter(Boolean)
  },
  {
    id: 6,
    month: "June 2024",
    title: "Air Supremacy",
    description: "Aerial dominance campaigns with cutting-edge fighter jets and advanced air-to-air combat systems.",
    image: "air-supremacy-event.jpg",
    vehicles: [
      VEHICLES.find(v => v.name === "J-20 Mighty Dragon"),
      VEHICLES.find(v => v.name === "MiG-41M")
    ].filter(Boolean)
  }
];

const getAircraftRole = (vehicle: any) => {
  if (vehicle.type !== "Fighter Jet" && vehicle.type !== "Bomber" && vehicle.type !== "Helicopter") return null

  // Specific aircraft role assignments
  if (vehicle.name.includes("J-10")) return "multi-role"
  if (vehicle.name.includes("J-50")) return "stealth"
  if (vehicle.name.includes("J-35")) return "stealth"
  if (vehicle.name.includes("MiG-41M")) return "stealth"
  if (vehicle.name.includes("F-16C Night Falcon")) return "multi-role"
  if (vehicle.name.includes("TU-222")) return "bomber"
  if (vehicle.name.includes("AH-64E Apache")) return "helicopter"
  if (vehicle.name.includes("AH-64E Apache")) return "interceptor"
  if (vehicle.name.includes("MiG-35")) return "interceptor"
  if (vehicle.name.includes("MiG-31BM Foxhound")) return "interceptor"
  if (vehicle.name.includes("J-16")) return "multi-role"
  if (vehicle.name.includes("A-10A Thunderbolt")) return "ground-attack"
  if (vehicle.name.includes("J-15")) return "multi-role"
  if (vehicle.name.includes("F/A-18F Super Hornet")) return "multi-role"
  if (vehicle.name.includes("Su-37 Terminator")) return "multi-role"

  const weapons = vehicle.weapons || []
  const hasStealthWeapons = weapons.some(
    (w: any) =>
      w.name.includes("Kinzhal") ||
      w.name.includes("GROM") ||
      vehicle.name.includes("F-22") ||
      vehicle.name.includes("Su-57") ||
      vehicle.name.includes("J-20") ||
      vehicle.name.includes("F-35") ||
      vehicle.name.includes("YF-23") ||
      vehicle.name.includes("MiG-41M") ||
      vehicle.name.includes("Su-75"),
  )

  const hasGroundAttackWeapons = weapons.some(
    (w: any) =>
      w.type.includes("Ground") ||
      w.type.includes("Bomb") ||
      w.name.includes("Maverick") ||
      w.name.includes("Hellfire") ||
      vehicle.name.includes("A-10") ||
      vehicle.name.includes("Su-25") ||
      vehicle.name.includes("MiG-41M") ||
      vehicle.name.includes("AV-8B") ||
      vehicle.name.includes("Su-39"),
  )

  const hasInterceptorCharacteristics = weapons.some(
    (w: any) =>
      w.type.includes("AAM") ||
      w.name.includes("Phoenix") ||
      vehicle.name.includes("MiG-31") ||
      vehicle.name.includes("F-14") ||
      vehicle.name.includes("MiG-41"),
  )

  const hasHelicopterCharacteristics = 
    vehicle.type === "Helicopter" ||
    vehicle.name.includes("Z-9G") ||
    vehicle.name.includes("MH-6") ||
    vehicle.name.includes("Z-11WB") ||
    vehicle.name.includes("MI-8TV") ||
    vehicle.name.includes("SUPER LYNX") ||
    vehicle.name.includes("Z-9WA") ||
    vehicle.name.includes("Z-20") ||
    vehicle.name.includes("MH-60L") ||
    vehicle.name.includes("MI-35P") ||
    vehicle.name.includes("AH-1Z") ||
    vehicle.name.includes("AH-64E") ||
    vehicle.name.includes("KA-50") ||
    vehicle.name.includes("OH-1") ||
    vehicle.name.includes("Z-19E") ||
    vehicle.name.includes("WZ-10") ||
    vehicle.name.includes("MI-28NM") ||
    vehicle.name.includes("KA-52M") ||
    vehicle.name.includes("AH-84") ||
    vehicle.name.includes("KA-58") ||
    vehicle.name.includes("SB-1")

  const hasMultiRoleWeapons = weapons.some(
    (w: any) => w.type.includes("Air-to-Ground") && weapons.some((w2: any) => w2.type.includes("AAM")),
  )

  if (hasStealthWeapons) return "stealth"
  if (hasGroundAttackWeapons && !hasInterceptorCharacteristics) return "ground-attack"
  if (hasInterceptorCharacteristics && !hasGroundAttackWeapons) return "interceptor"
  if (hasMultiRoleWeapons || (hasGroundAttackWeapons && hasInterceptorCharacteristics)) return "multi-role"
  if (hasHelicopterCharacteristics) return "helicopter"

  return "multi-role" // Default for jets
}

const getRoleIcon = (role: string | null) => {
  switch (role) {
    case "stealth":
      return "/stealth-icon.png"
    case "multi-role":
      return "/multi-role-icon.png"
    case "ground-attack":
      return "/ground-attack-icon.png"
    case "interceptor":
      return "/interceptor-icon.png"
    case "bomber":
      return "/bomber-icon.png"
    case "helicopter":
      return "/Helicopter-Icon.png"
    default:
      return null
  }
}


const getTRoleIcon = (role: string | null) => {
  switch (role) {
    case "MBT":
      return "/MBT.png"
    case "Light Tank":
      return "/LightTank.png"
    case "Tank Destroyer":
      return "/TankDestroyer.png"
    case "MLRS":
      return "/MLRS.png"
    case "Missile Carrier":
      return "/MissileCarrier.png"
    case "SPA":
      return "/SPA.png"
    case "AA":
      return "/AA.png"
    default:
      return null
  }
}




const getFlagImage = (faction: string): string => {
  const flags: { [key: string]: string } = {
    Russian: "/russia-flag.png",
    American: "/usa-flag.png",
    Chinese: "/china-flag.png",
    German: "/germany-flag.jpeg",
    British: "/british-flag.png",
    European: "/eu-flag.png",
    Japanese: "/japan-flag.webp",
    Turkish: "/Turkey.webp",
    Canadian: "/canada-flag.png",
    Israeli: "/israel-flag.webp",
    French: "/france-flag.webp",
    Italian: "/italy-flag.png",
    Ukrainian: "/ukraine-flag.png",
    Swedish: "/sweden-flag.png",
    Iranian: "/Iranian-flag.png",
    Polish: "/Poland-flag.webp",
    SouthKorean: "/SouthKorea-flag.jpg",
  
  
  }
  return flags[faction] || "/default-flag.png"
}

const generateComparisonAnalysis = (vehicle1: any, vehicle2: any): string => {
  const healthWinner = vehicle1.stats.health > vehicle2.stats.health ? vehicle1.name : vehicle2.name
  const speedWinner = vehicle1.stats.speed > vehicle2.stats.speed ? vehicle1.name : vehicle2.name
  const agilityWinner = vehicle1.stats.agility > vehicle2.stats.agility ? vehicle1.name : vehicle2.name

  let analysis = `🤖 AI TACTICAL ANALYSIS SYSTEM(AITAS)\n\n`

  // Performance comparison
  analysis += `PERFORMANCE OVERVIEW:\n`
  analysis += `• Survivability: ${healthWinner} dominates with ${healthWinner === vehicle1.name ? vehicle1.stats.health.toLocaleString() : vehicle2.stats.health.toLocaleString()} HP\n`
  analysis += `• Mobility: ${speedWinner} leads with ${speedWinner === vehicle1.name ? vehicle1.stats.speed : vehicle2.stats.speed} km/h\n`
  analysis += `• Maneuverability: ${agilityWinner} excels with ${agilityWinner === vehicle1.name ? vehicle1.stats.agility : vehicle2.stats.agility} agility\n\n`

  // Tactical analysis
  analysis += `TACTICAL ASSESSMENT:\n`
  if (vehicle1.type === vehicle2.type) {
    analysis += `Both are ${vehicle1.type}s, making this a direct role comparison. `
  } else {
    analysis += `Cross-role comparison: ${vehicle1.type} vs ${vehicle2.type}. `
  }

  // Tier analysis
  if (vehicle1.tier === vehicle2.tier) {
    analysis += `Same tier (${vehicle1.tier}) vehicles with balanced matchup potential.\n`
  } else {
    const higherTier = vehicle1.tier > vehicle2.tier ? vehicle1.name : vehicle2.name
    analysis += `${higherTier} has tier advantage, expect superior technology and capabilities.\n`
  }

  // Weapon analysis
  analysis += `\nWEAPON SYSTEMS:\n`
  analysis += `• ${vehicle1.name}: ${vehicle1.weapons.length} weapon systems\n`
  analysis += `• ${vehicle2.name}: ${vehicle2.weapons.length} weapon systems\n`

  // Faction analysis
  if (vehicle1.faction !== vehicle2.faction) {
    analysis += `\nFACTION DOCTRINE:\n`
    analysis += `${vehicle1.faction} vs ${vehicle2.faction} represents different military philosophies and engineering approaches.`
  }

  return analysis
}

const getTierColor = (tier: string) => {
  switch (tier) {
    case "II":
      return "bg-green-500"
    case "III":
      return "bg-blue-700"
    case "IV":
      return "bg-purple-100"
    default:
      return "bg-gray-500"
  }
}

const MwtVehicleStats = () => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("")
  const [tierFilter, setTierFilter] = useState("")
  const [countryFilter, setCountryFilter] = useState("")
  const [compare, setCompare] = useState<string[]>([])
  const [expandedVehicle, setExpandedVehicle] = useState("")
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState<{ role: string; content: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [chatInput, setChatInput] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [vehicleInfoOpen, setVehicleInfoOpen] = useState<string | null>(null)
  const vehiclesPerPage = 15

  const [showAbout, setShowAbout] = useState(false)
  const [showCredits, setShowCredits] = useState(false)

  const [weaponsModalOpenId, setWeaponsModalOpenId] = useState<string | null>(null)
  
  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("battlepass")
  const [expandedMonth, setExpandedMonth] = useState<number | null>(null)
  
  // Battle Pass state
  const [battlePassOpen, setBattlePassOpen] = useState(false)
  const [selectedBattlePass, setSelectedBattlePass] = useState<number | null>(null)

  const types = [...new Set(VEHICLES.map((v) => v.type))]
  const tiers = [...new Set(VEHICLES.map((v) => v.tier))].sort()
  const countries = [...new Set(VEHICLES.map((v) => v.faction))].sort()

  const isMarketVehicle = (vehicleName: string) => {
    const marketVehicles = [
      "Abrams X",
      "Type 10",
      "Su-57M",
      "TU-222",
      "Merkava Mk.4",
      "KF-51 Panther",
      "HSTV-L",
      "Ka-58 Black Ghost",
      "T-14 (152)",
      "Leopard 2A7V",
      "Type 16 MCV",
      "M-SHORAD",
      "EMBT 120",
      "KF31 Lynx",
      "VT-4A1",
      "YF-23",
      "Gepard 1A2",
      "Type 625E SHORAD",
      "SB-1",
      "T-14 Armata (152)",
      "Leopard 2A7+"
    ]
    return marketVehicles.includes(vehicleName)
  }



  const isExclusiveVehicle = (vehicleName: string) => {
    const exclusiveVehicles = [
"Leopard 2A4",
"Alpha Jet",
"Su-24M",
"M270 MLRS",
"Otomatic 76",
"F-16C Night Falcon",
"MiG-41M",
"IT-1 Dragon",
"SR-5 GMLRS",
"T-25 Pamir",
"T-104 Bastion",
"Challenger 3",
"FV4034 Challenger 2 TES",
"Karrar",
"Leclerc S2 AZUR",
"T-20 Monolit",
"M10 Booker",
"PL-01",
"TOS-1A",
"BMD3",
"M109A6 Paladin",
"FK 2000",
"BM-57-2 Kochevnik",
"Su-39",
"J-10B",
"Mitsubishi F-2B",
"J-50",
"Z-11WB Changhe",
"Tiger HAD",
"EC665 Tiger UHT",
"M1 Abrams Block III",
"PT-91 Twardy",
"T-64BV",
"ZTZ-96A (P)",
"M110A2",
"2S31 Vena",
"Type 90",
"XM2001 Crusader",
"K-31 Cheonma",
"AFT-10",
"Type 89 MLRS",
"AFT-09",
"WMA301",
"Type 61",
"VBCI-2",
"Rookiat MTTD",
"M1 Abrams Block 3",
"J-15",
"Su-35S",
"OH-1 Ninja"

        

]
    return exclusiveVehicles.includes(vehicleName)
  }



  const getVehicleDetailedInfo = (vehicle: any) => {
    const weaponsList = vehicle.weapons
      .map((weapon: any) => weapon.name + ": " + weapon.damage + " DMG, " + weapon.penetration + " PEN, " + weapon.reload + " REL")

      .join("\n")

    const modulesList = Object.entries(vehicle.modules || {})
      .map(
        ([category, modules]: [string, any]) =>
          `${category}: ${Array.isArray(modules) ? modules.map((m: any) => m.name).join(", ") : "N/A"}`,
      )
      .join("\n")

    return `🎯 ${vehicle.name} - ${vehicle.type}
  
📊 SPECIFICATIONS:
• Faction: ${vehicle.faction}
• Tier: ${vehicle.tier}
• Health: ${vehicle.stats.health.toLocaleString()} HP
• Speed: ${vehicle.stats.speed} km/h
${vehicle.stats.afterburnerSpeed ? `• Afterburner: ${vehicle.stats.afterburnerSpeed} km/h` : ""}
${vehicle.stats.armor ? `• Armor: ${vehicle.stats.armor}` : ""}
• Agility: ${vehicle.stats.agility}

🎮 IN-GAME INFO:
${vehicle.description}

⚔️ WEAPONS:
${weaponsList}

🔧 UPGRADE MODULES:
${modulesList}

${isMarketVehicle(vehicle.name) ? "💰 PREMIUM VEHICLE - Available in Market" : isExclusiveVehicle(vehicle.name) ? "🎲 EXCLUSIVE VEHICLE - Only obtained from Gatchs and Events" : "🆓 Standard Vehicle"}`
  }

  const filteredVehicles = VEHICLES.filter((vehicle) => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = !typeFilter || vehicle.type === typeFilter
    const matchesTier = !tierFilter || vehicle.tier === tierFilter
    const matchesCountry = !countryFilter || vehicle.faction === countryFilter
    return matchesSearch && matchesType && matchesTier && matchesCountry
  })

  const indexOfLastVehicle = currentPage * vehiclesPerPage
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage
  const paginatedVehicles = filteredVehicles.slice(indexOfFirstVehicle, indexOfLastVehicle)

  const toggleCompare = (id: string) => {
    if (compare.includes(id)) {
      setCompare(compare.filter((vehicleId) => vehicleId !== id))
    } else if (compare.length < 2) {
      setCompare([...compare, id])
    }
  }

  const toggleExpand = (id: string) => {
    setExpandedVehicle(expandedVehicle === id ? "" : id)
  }

  const handleChatSubmit = () => {
    if (!chatInput.trim()) return

    const userMessage = { role: "user", content: chatInput }
    setChatMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    const getVehicleInfo = (query: string) => {
      const lowerQuery = query.toLowerCase().trim()

      // Enhanced vehicle search with better matching
      const searchVehicle = (name: string) => {
        const cleanName = name.toLowerCase().replace(/[-\s]/g, "")
        return VEHICLES.find(
          (v) =>
            v.name.toLowerCase().includes(name.toLowerCase()) ||
            v.name.toLowerCase().replace(/[-\s]/g, "").includes(cleanName) ||
            cleanName.includes(v.name.toLowerCase().replace(/[-\s]/g, "")),
        )
      }

      // Advanced data analysis functions
      const analyzeVehicles = {
        fastestTank: () => {
          const tanks = VEHICLES.filter((v) => v.type === "Tank")
          return tanks.reduce((prev, current) =>
            (prev.stats.speed || 0) > (current.stats.speed || 0) ? prev : current,
          )
        },
        strongestTank: () => {
          const tanks = VEHICLES.filter((v) => v.type === "Tank")
          return tanks.reduce((prev, current) => (prev.stats.health > current.stats.health ? prev : current))
        },
        fastestJet: () => {
          const jets = VEHICLES.filter((v) => v.type === "Fighter Jet")
          return jets.reduce((prev, current) => {
            const prevSpeed = prev.stats.afterburnerSpeed || prev.stats.speed || prev.stats.cruiseSpeed || 0
            const currentSpeed = current.stats.afterburnerSpeed || current.stats.speed || current.stats.cruiseSpeed || 0
            return prevSpeed > currentSpeed ? prev : current
          })
        },
        strongestJet: () => {
          const jets = VEHICLES.filter((v) => v.type === "Fighter Jet")
          return jets.reduce((prev, current) => (prev.stats.health > current.stats.health ? prev : current))
        },
        fastestHelicopter: () => {
          const helicopters = VEHICLES.filter((v) => v.type === "helicopter")
          return helicopters.reduce((prev, current) =>
            (prev.stats.speed || 0) > (current.stats.speed || 0) ? prev : current,
          )
        },
        strongestHelicopter: () => {
          const helicopters = VEHICLES.filter((v) => v.type === "helicopter")
          return helicopters.reduce((prev, current) => (prev.stats.health > current.stats.health ? prev : current))
        },
        mostArmoredVehicle: () => {
          return VEHICLES.filter((v) => v.stats.armor).reduce((prev, current) =>
            (prev.stats.armor || 0) > (current.stats.armor || 0) ? prev : current,
          )
        },
        mostAgileVehicle: () => {
          return VEHICLES.filter((v) => v.stats.agility).reduce((prev, current) =>
            (prev.stats.agility || 0) > (current.stats.agility || 0) ? prev : current,
          )
        },
        bestByNation: (nation: string) => {
          const nationVehicles = VEHICLES.filter((v) => v.faction.toLowerCase().includes(nation.toLowerCase()))
          return nationVehicles.reduce((prev, current) => (prev.stats.health > current.stats.health ? prev : current))
        },
      }

      // Enhanced response formatting
      const formatVehicleDetails = (vehicle: any, context = "") => {
        let response = `🎯 ${vehicle.name} (${vehicle.faction} ${vehicle.type})\n\n`

        if (context) response += `${context}\n\n`

        response += `📊 COMBAT SPECIFICATIONS:\n`
        response += `• Health: ${vehicle.stats.health.toLocaleString()} HP\n`

        if (vehicle.stats.speed) response += `• Speed: ${vehicle.stats.speed} km/h\n`
        if (vehicle.stats.cruiseSpeed) response += `• Cruise Speed: ${vehicle.stats.cruiseSpeed} km/h\n`
        if (vehicle.stats.afterburnerSpeed) response += `• Afterburner Speed: ${vehicle.stats.afterburnerSpeed} km/h\n`
        if (vehicle.stats.armor) response += `• Armor: ${vehicle.stats.armor}\n`
        if (vehicle.stats.agility) response += `• Agility: ${vehicle.stats.agility}\n`

        response += `• Combat Tier: ${vehicle.tier}\n`
        response += `• Nation: ${vehicle.faction}\n\n`

        response += `📝 TACTICAL ANALYSIS:\n${vehicle.description}\n\n`

        response += `⚔️ WEAPON SYSTEMS (${vehicle.weapons.length} total):\n`
        response += vehicle.weapons
          .map(
            (w) =>
              `• ${w.name}: ${w.damage} DMG, ${w.penetration} PEN${w.rateOfFire ? `, ${w.rateOfFire} RPM` : ""}${w.lockTime ? `, ${w.lockTime}s lock` : ""}`,
          )
          .join("\n")

        return response
      }

      // Advanced query processing with ChatGPT-like intelligence

      // Fastest vehicle queries
      if (lowerQuery.includes("fastest tank") || lowerQuery.includes("quickest tank")) {
        const fastest = analyzeVehicles.fastestTank()
        return formatVehicleDetails(
          fastest,
          `🏃‍♂️ FASTEST TANK ANALYSIS:\nAfter analyzing all ${VEHICLES.filter((v) => v.type === "Tank").length} tanks in the database, the ${fastest.name} emerges as the speed champion with ${fastest.stats.speed} km/h maximum velocity.`,
        )
      }

      if (
        lowerQuery.includes("fastest jet") ||
        lowerQuery.includes("quickest jet") ||
        lowerQuery.includes("fastest fighter")
      ) {
        const fastest = analyzeVehicles.fastestJet()
        const maxSpeed = fastest.stats.afterburnerSpeed || fastest.stats.speed || fastest.stats.cruiseSpeed
        return formatVehicleDetails(
          fastest,
          `✈️ FASTEST FIGHTER JET ANALYSIS:\nAnalyzing ${VEHICLES.filter((v) => v.type === "Fighter Jet").length} fighter aircraft, the ${fastest.name} dominates with ${maxSpeed} km/h maximum speed capability.`,
        )
      }

      if (lowerQuery.includes("fastest helicopter") || lowerQuery.includes("quickest helicopter")) {
        const fastest = analyzeVehicles.fastestHelicopter()
        return formatVehicleDetails(
          fastest,
          `🚁 FASTEST HELICOPTER ANALYSIS:\nAmong ${VEHICLES.filter((v) => v.type === "Helicopter").length} rotorcraft, the ${fastest.name} achieves the highest speed of ${fastest.stats.speed} km/h.`,
        )
      }

      // Strongest/toughest vehicle queries
      if (
        lowerQuery.includes("strongest tank") ||
        lowerQuery.includes("toughest tank") ||
        lowerQuery.includes("most durable tank")
      ) {
        const strongest = analyzeVehicles.strongestTank()
        return formatVehicleDetails(
          strongest,
          `🛡️ STRONGEST TANK ANALYSIS:\nAfter evaluating durability across all armored vehicles, the ${strongest.name} stands as the ultimate survivor with ${strongest.stats.health.toLocaleString()} HP.`,
        )
      }

      if (
        lowerQuery.includes("strongest jet") ||
        lowerQuery.includes("toughest jet") ||
        lowerQuery.includes("most durable jet")
      ) {
        const strongest = analyzeVehicles.strongestJet()
        return formatVehicleDetails(
          strongest,
          `🛡️ STRONGEST FIGHTER JET ANALYSIS:\nEvaluating combat survivability, the ${strongest.name} leads with ${strongest.stats.health.toLocaleString()} HP structural integrity.`,
        )
      }

      if (lowerQuery.includes("strongest helicopter") || lowerQuery.includes("toughest helicopter")) {
        const strongest = analyzeVehicles.strongestHelicopter()
        return formatVehicleDetails(
          strongest,
          `🛡️ STRONGEST HELICOPTER ANALYSIS:\nFor rotorcraft durability, the ${strongest.name} excels with ${strongest.stats.health.toLocaleString()} HP.`,
        )
      }

      // Most armored/agile queries
      if (lowerQuery.includes("most armored") || lowerQuery.includes("best armor")) {
        const mostArmored = analyzeVehicles.mostArmoredVehicle()
        return formatVehicleDetails(
          mostArmored,
          `🛡️ MOST ARMORED VEHICLE:\nMaximum protection analysis reveals the ${mostArmored.name} with ${mostArmored.stats.armor} armor rating.`,
        )
      }

      if (lowerQuery.includes("most agile") || lowerQuery.includes("best agility")) {
        const mostAgile = analyzeVehicles.mostAgileVehicle()
        return formatVehicleDetails(
          mostAgile,
          `🎯 MOST AGILE VEHICLE:\nManeuverability champion is the ${mostAgile.name} with ${mostAgile.stats.agility} agility rating.`,
        )
      }

      // Nation-specific best queries with intelligence
      if (lowerQuery.includes("best russian") || lowerQuery.includes("strongest russian")) {
        const best = analyzeVehicles.bestByNation("russian")
        return formatVehicleDetails(
          best,
          `🇷🇺 BEST RUSSIAN VEHICLE:\nRussian military engineering peaks with this exceptional combat platform.`,
        )
      }

      if (
        lowerQuery.includes("best american") ||
        lowerQuery.includes("best usa") ||
        lowerQuery.includes("strongest american")
      ) {
        const best = analyzeVehicles.bestByNation("american")
        return formatVehicleDetails(
          best,
          `🇺🇸 BEST AMERICAN VEHICLE:\nAmerican technological superiority demonstrated through this advanced system.`,
        )
      }

      if (
        lowerQuery.includes("best chinese") ||
        lowerQuery.includes("best china") ||
        lowerQuery.includes("strongest chinese")
      ) {
        const best = analyzeVehicles.bestByNation("chinese")
        return formatVehicleDetails(
          best,
          `🇨🇳 BEST CHINESE VEHICLE:\nChinese military innovation showcased in this cutting-edge platform.`,
        )
      }

      if (lowerQuery.includes("best german") || lowerQuery.includes("strongest german")) {
        const best = analyzeVehicles.bestByNation("german")
        return formatVehicleDetails(best, `🇩🇪 BEST GERMAN VEHICLE:\nGerman precision engineering at its finest.`)
      }

      // Vehicle comparison logic with enhanced analysis
      if (lowerQuery.includes(" vs ") || lowerQuery.includes(" versus ")) {
        const parts = lowerQuery.split(/ vs | versus /)
        if (parts.length === 2) {
          const vehicle1 = searchVehicle(parts[0].trim())
          const vehicle2 = searchVehicle(parts[1].trim())

          if (vehicle1 && vehicle2) {
            const formatComparisonStats = (vehicle: any) => {
              let stats = `• Health: ${vehicle.stats.health.toLocaleString()} HP\n`
              if (vehicle.stats.speed) stats += `• Speed: ${vehicle.stats.speed} km/h\n`
              if (vehicle.stats.cruiseSpeed) stats += `• Cruise Speed: ${vehicle.stats.cruiseSpeed} km/h\n`
              if (vehicle.stats.afterburnerSpeed)
                stats += `• Afterburner Speed: ${vehicle.stats.afterburnerSpeed} km/h\n`
              if (vehicle.stats.armor) stats += `• Armor: ${vehicle.stats.armor}\n`
              if (vehicle.stats.agility) stats += `• Agility: ${vehicle.stats.agility}\n`
              stats += `• Tier: ${vehicle.tier}\n`
              stats += `• Primary Weapons: ${vehicle.weapons
                .slice(0, 3)
                .map((w) => w.name)
                .join(", ")}`
              return stats
            }

            const getMaxSpeed = (vehicle: any) =>
              vehicle.stats.afterburnerSpeed || vehicle.stats.speed || vehicle.stats.cruiseSpeed || 0

            return (
              `⚔️ AI TACTICAL ANALYSIS SYSTEM (AITAS): ${vehicle1.name} vs ${vehicle2.name}\n\n` +
              `🔵 ${vehicle1.name} (${vehicle1.faction} ${vehicle1.type}):\n${formatComparisonStats(vehicle1)}\n\n` +
              `🔴 ${vehicle2.name} (${vehicle2.faction} ${vehicle2.type}):\n${formatComparisonStats(vehicle2)}\n\n` +
              `🏆 COMBAT SUPERIORITY ANALYSIS:\n` +
              `• Survivability: ${vehicle1.stats.health > vehicle2.stats.health ? vehicle1.name : vehicle2.name} (${Math.max(vehicle1.stats.health, vehicle2.stats.health).toLocaleString()} HP advantage)\n` +
              `• Speed: ${getMaxSpeed(vehicle1) > getMaxSpeed(vehicle2) ? vehicle1.name : vehicle2.name} (${Math.max(getMaxSpeed(vehicle1), getMaxSpeed(vehicle2))} km/h max)\n` +
              `• Firepower: ${vehicle1.weapons.length > vehicle2.weapons.length ? vehicle1.name : vehicle2.name} (${Math.max(vehicle1.weapons.length, vehicle2.weapons.length)} weapon systems)\n` +
              `• Tier Advantage: ${vehicle1.tier === vehicle2.tier ? "Equal tier" : vehicle1.tier > vehicle2.tier ? vehicle1.name : vehicle2.name}\n\n` +
              `🎯 TACTICAL RECOMMENDATION: ${vehicle1.stats.health > vehicle2.stats.health ? vehicle1.name + " for survivability" : vehicle2.name + " for survivability"}`
            )
          }
        }
      }

      // Individual vehicle search with enhanced details
      const foundVehicle = searchVehicle(lowerQuery)
      if (foundVehicle) {
        return formatVehicleDetails(foundVehicle)
      }

      // Tier and nation listings with intelligence
      if (lowerQuery.includes("tier ii") || lowerQuery.includes("tier 2")) {
        const tierVehicles = VEHICLES.filter((v) => v.tier === "Tier II")
        return `🎖️ TIER II COMBAT VEHICLES (${tierVehicles.length} platforms):\n\nThese intermediate-tier vehicles offer balanced performance for developing commanders:\n\n${tierVehicles.map((v) => `• ${v.name} (${v.faction} ${v.type}) - ${v.stats.health.toLocaleString()} HP`).join("\n")}`
      }

      if (lowerQuery.includes("tier iii") || lowerQuery.includes("tier 3")) {
        const tierVehicles = VEHICLES.filter((v) => v.tier === "Tier III")
        return `🎖️ TIER III COMBAT VEHICLES (${tierVehicles.length} platforms):\n\nAdvanced military hardware for experienced operators:\n\n${tierVehicles.map((v) => `• ${v.name} (${v.faction} ${v.type}) - ${v.stats.health.toLocaleString()} HP`).join("\n")}`
      }

      if (lowerQuery.includes("tier iv") || lowerQuery.includes("tier 4")) {
        const tierVehicles = VEHICLES.filter((v) => v.tier === "Tier IV")
        return `🎖️ TIER IV COMBAT VEHICLES (${tierVehicles.length} platforms):\n\nCutting-edge military technology for elite commanders:\n\n${tierVehicles.map((v) => `• ${v.name} (${v.faction} ${v.type}) - ${v.stats.health.toLocaleString()} HP`).join("\n")}`
      }

      // Enhanced help and default responses
      if (lowerQuery.includes("help") || lowerQuery.includes("what can you do")) {
        return `🤖 MWT AI TACTICAL ANALYSIS SYSTEM (AITAS)\n\nI'm an advanced military vehicle analysis system. I can provide:\n\n🔍 VEHICLE ANALYSIS:\n• "Su-57M" - Complete specifications\n• "T-14 vs Abrams X" - Tactical comparisons\n\n🏆 PERFORMANCE QUERIES:\n• "Fastest tank" - Speed analysis\n• "Strongest jet" - Durability rankings\n• "Most armored vehicle" - Protection analysis\n\n🌍 NATION ANALYSIS:\n• "Best Russian vehicle" - National superiority\n• "American vehicles" - Fleet listings\n\n📊 DATA INSIGHTS:\n• "Tier IV vehicles" - Tier breakdowns\n• "Market vehicles" - Premium platforms\n\nWhat tactical intelligence do you need?`
      }

      // Default intelligent response
      return `🤖 MWT AI TACTICAL ANALYSIS SYSTEM (AITAS) - Advanced Military Analysis System\n\nI didn't recognize that specific query, but I can analyze our database of ${VEHICLES.length} combat vehicles.\n\n💡 TRY ASKING:\n• "What's the fastest tank?" - Performance analysis\n• "Su-57M vs F-22" - Combat comparisons\n• "Best Chinese vehicle" - National rankings\n• "Tier IV vehicles" - Category listings\n\nI'm designed to think analytically about military vehicle performance, tactics, and specifications. What would you like to analyze?`
    }

    setTimeout(() => {
      const response = getVehicleInfo(chatInput)
      const botMessage = { role: "assistant", content: response }
      setChatMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
      setChatInput("")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Battle Pass Tab - Responsive */}
      <button
        onClick={() => setBattlePassOpen(!battlePassOpen)}
        className="fixed top-1/2 left-0 z-50 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform -translate-y-1/2 rounded-r-lg shadow-lg border-r border-purple-400 min-h-[120px] sm:min-h-[140px] min-w-[44px] sm:min-w-[48px] flex items-center justify-center"
      >
        {/* Mobile: Horizontal layout with icon + text */}
        <div className="sm:hidden flex flex-col items-center justify-center px-3 py-4 text-white font-bold text-xs tracking-wide">
          <svg className="w-5 h-5 mb-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
            <path d="M12 17L13.09 23.26L22 24L13.09 24.74L12 31L10.91 24.74L2 24L10.91 23.26L12 17Z" opacity="0.6"/>
          </svg>
          <span className="text-center leading-tight">BATTLE<br/>PASS</span>
        </div>
        
        {/* Desktop: Vertical rotated text */}
        <div 
          className="hidden sm:flex px-3 py-6 text-white font-bold text-sm md:text-lg tracking-wider items-center justify-center mr-0 ml-[-15px]"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          BATTLE PASS
        </div>
      </button>

      {/* Battle Pass Panel */}
      <AnimatePresence>
        {battlePassOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setBattlePassOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />
            
            {/* Battle Pass Content */}
            <motion.div
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              exit={{ x: -400 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full bg-gradient-to-b from-slate-800 to-slate-900 border-r border-purple-500/30 z-50 overflow-y-auto shadow-2xl w-full sm:w-[400px] max-w-[400px]"
            >
              {/* Header */}
              <div className="p-6 bg-gradient-to-r from-lime-400 to-blue-600 border-b border-purple-400/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Trophy className="w-8 h-8 text-yellow-400" />
                    <div>
                      <h2 className="text-2xl font-bold text-white">Battle Pass</h2>
                      <p className="text-purple-200 text-sm">Monthly Vehicle Collections</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setBattlePassOpen(false)}
                    className="text-white hover:text-purple-200 transition-colors p-2 hover:bg-white/10 rounded-lg"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Battle Pass List */}
              <div className="p-6 space-y-4 mx-[-22px] w-[410px]">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2 ml-1.5">
                  <Calendar className="w-5 h-5 text-lime-300" />
                  Battle Passes
                </h3>
                
                {BATTLE_PASSES.map((battlePass) => (
                  <div key={battlePass.id} className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300">
                    {/* Battle Pass Header */}
                    <button
                      onClick={() => setSelectedBattlePass(selectedBattlePass === battlePass.id ? null : battlePass.id)}
                      className="p-4 text-left hover:bg-slate-700/30 transition-colors w-56"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center border border-purple-400/30 overflow-hidden w-32 mr-1.5">
                            <img 
                              src={battlePass.image} 
                              alt={battlePass.name}
                              className="w-full h-full object-cover rounded-lg transition-opacity duration-200"
                              onError={(e) => {
                                const target = e.currentTarget as HTMLImageElement;
                                target.style.display = 'none';
                                const fallback = target.nextElementSibling as HTMLElement;
                                if (fallback) fallback.style.display = 'flex';
                              }}
                            />
                            <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center rounded-lg" style={{display: 'none'}}>
                              <Trophy className="w-8 h-8 text-yellow-400" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-white w-36">{battlePass.name}</h4>
                            <p className="text-sm font-medium text-blue-300">{battlePass.month}</p>
                            
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-white text-xs px-2 py-1 rounded-full font-medium bg-blue-600 w-[62px]">
                             Vehicles
                          </span>
                          {selectedBattlePass === battlePass.id ? (
                            <ChevronDown className="w-5 h-5 text-purple-400" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-slate-400" />
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Expanded Vehicle List */}
                    <AnimatePresence>
                      {selectedBattlePass === battlePass.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 border-t border-slate-700/50">
                            <div className="mt-4 space-y-3">
                              <h5 className="text-sm font-semibold text-purple-300 mb-3">Featured Vehicles:</h5>
                              {battlePass.vehicles.map((vehicleId) => {
                                const vehicle = VEHICLES.find(v => v.id === vehicleId);
                                if (!vehicle) return null;
                                return (
                                  <div 
                                    key={vehicle.id} 
                                    className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/50 hover:border-purple-500/50 hover:bg-slate-700/50 transition-all duration-200 cursor-pointer group"
                                    onClick={() => {
                                      setSearchQuery(vehicle.name);
                                      setBattlePassOpen(false);
                                      setExpandedVehicle(vehicle.id.toString());
                                    }}
                                  >
                                    <div className="flex items-center space-x-3">
                                      <div className="bg-slate-600 rounded-lg overflow-hidden border border-slate-500 flex-shrink-0 h-20 w-36 group-hover:border-purple-400/50 transition-colors">
                                        <img 
                                          src={`${vehicle.image}`} 
                                          alt={vehicle.name}
                                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                          onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.nextElementSibling.style.display = 'flex';
                                          }}
                                        />
                                        <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center" style={{display: 'none'}}>
                                          <span className="text-xs font-bold text-cyan-400">
                                            {vehicle.name.substring(0, 2)}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="text-sm font-semibold text-white truncate group-hover:text-purple-300 transition-colors">{vehicle.name}</div>
                                        <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">{vehicle.type} • {vehicle.faction}</div>
                                      </div>
                                      <div className="text-right text-white bg-transparent">
                                        <div className={`text-xs px-2 py-1 rounded-full font-medium bg-blue-700 ${
                                          vehicle.tier === 'IV' ? 'bg-purple-600 text-white' :
                                          vehicle.tier === 'III' ? 'bg-blue-600 text-white' :
                                          vehicle.tier === 'II' ? 'bg-green-600 text-white' :
                                          'bg-gray-600 text-white'
                                        } group-hover:shadow-lg transition-shadow`}>
                                          Tier {vehicle.tier}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            
                            {/* Rewards Section */}
                            <div className="mt-4 pt-4 border-t border-slate-700/50">
                              <h5 className="text-sm font-semibold text-yellow-400 mb-2">Premium Rewards:</h5>
                              <div className="flex flex-wrap gap-2 mb-3">
                                {battlePass.rewards.premium.map((reward, index) => (
                                  <span key={index} className="bg-yellow-600/20 text-yellow-300 text-xs px-2 py-1 rounded border border-yellow-600/30">
                                    {reward}
                                  </span>
                                ))}
                              </div>
                              <h5 className="text-sm font-semibold text-slate-300 mb-2">Free Rewards:</h5>
                              <div className="flex flex-wrap gap-2">
                                {battlePass.rewards.free.map((reward, index) => (
                                  <span key={index} className="bg-slate-600/30 text-slate-300 text-xs px-2 py-1 rounded border border-slate-600">
                                    {reward}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 shadow-sm">
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mx-1.5">
                <span className="hidden sm:inline">{"MWT Assistant (Unofficial)\n(Demo)"}</span>
                <span className="sm:hidden">MWT Assistant</span>
              </h1>
              <p className="text-slate-400 mt-1 ml-2.5 text-sm hidden sm:block">    MWT Assistant</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="pb-6">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="relative w-full sm:w-auto">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search vehicles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full sm:w-64 pl-10 pr-12 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setExpandedVehicle("");
                        }}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-sm w-5 h-5 flex items-center justify-center text-xs font-bold transition-colors"
                      >
                        ×
                      </button>
                    )}
                  </div>
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="w-full sm:w-auto px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="">All Types</option>
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <select
                    value={tierFilter}
                    onChange={(e) => setTierFilter(e.target.value)}
                    className="w-full sm:w-auto px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="">All Tiers</option>
                    {tiers.map((tier) => (
                      <option key={tier} value={tier}>
                        Tier {tier}
                      </option>
                    ))}
                  </select>
                  <select
                    value={countryFilter}
                    onChange={(e) => setCountryFilter(e.target.value)}
                    className="w-full sm:w-auto px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="">All Countries</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl p-4 sm:p-6 mx-auto px-4 sm:px-6">
        {compare.length === 2 && (
          <div className="mb-8 bg-slate-900/40 rounded-xl p-6 border border-slate-800">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Vehicle Comparison</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {compare.map((id) => {
                const vehicle = VEHICLES.find((v) => v.id.toString() === id)
                if (!vehicle) return null
                return (
                  <div key={id} className="bg-slate-800/50 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-2">{vehicle.name}</h3>
                    <p className="text-slate-400 text-sm mb-3">{vehicle.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-slate-400">Health:</span>
                        <span className="text-cyan-300 font-medium ml-2">{vehicle.stats.health.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Speed:</span>
                        <span className="text-cyan-300 font-medium ml-2">{vehicle.stats.speed} km/h</span>
                      </div>
                      {vehicle.stats.armor && (
                        <div>
                          <span className="text-slate-400">Armor:</span>
                          <span className="text-cyan-300 font-medium ml-2">{vehicle.stats.armor}</span>
                        </div>
                      )}
                      <div>
                        <span className="text-slate-400">Agility:</span>
                        <span className="text-cyan-300 font-medium ml-2">{vehicle.stats.agility}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {(() => {
              const vehicle1 = VEHICLES.find((v) => v.id.toString() === compare[0])
              const vehicle2 = VEHICLES.find((v) => v.id.toString() === compare[1])
              if (vehicle1 && vehicle2) {
                const generateComparisonAnalysis = (vehicle1: any, vehicle2: any): string => {
                  const healthWinner = vehicle1.stats.health > vehicle2.stats.health ? vehicle1.name : vehicle2.name
                  const speedWinner = vehicle1.stats.speed > vehicle2.stats.speed ? vehicle1.name : vehicle2.name
                  const agilityWinner = vehicle1.stats.agility > vehicle2.stats.agility ? vehicle1.name : vehicle2.name

                  let analysis = `🤖 AI TACTICAL ANALYSIS\n\n`

                  // Performance comparison
                  analysis += `PERFORMANCE OVERVIEW:\n`
                  analysis += `• Survivability: ${healthWinner} dominates with ${healthWinner === vehicle1.name ? vehicle1.stats.health.toLocaleString() : vehicle2.stats.health.toLocaleString()} HP\n`
                  analysis += `• Mobility: ${speedWinner} leads with ${speedWinner === vehicle1.name ? vehicle1.stats.speed : vehicle2.stats.speed} km/h\n`
                  analysis += `• Maneuverability: ${agilityWinner} excels with ${agilityWinner === vehicle1.name ? vehicle1.stats.agility : vehicle2.stats.agility} agility\n\n`

                  // Tactical analysis
                  analysis += `TACTICAL ASSESSMENT:\n`
                  if (vehicle1.type === vehicle2.type) {
                    analysis += `Both are ${vehicle1.type}s, making this a direct role comparison. `
                  } else {
                    analysis += `Cross-role comparison: ${vehicle1.type} vs ${vehicle2.type}. `
                  }

                  // Tier analysis
                  if (vehicle1.tier === vehicle2.tier) {
                    analysis += `Same tier (${vehicle1.tier}) vehicles with balanced matchup potential.\n`
                  } else {
                    const higherTier = vehicle1.tier > vehicle2.tier ? vehicle1.name : vehicle2.name
                    analysis += `${higherTier} has tier advantage, expect superior technology and capabilities.\n`
                  }

                  // Weapon analysis
                  analysis += `\nWEAPON SYSTEMS:\n`
                  analysis += `• ${vehicle1.name}: ${vehicle1.weapons.length} weapon systems\n`
                  analysis += `• ${vehicle2.name}: ${vehicle2.weapons.length} weapon systems\n`

                  // Faction analysis
                  if (vehicle1.faction !== vehicle2.faction) {
                    analysis += `\nFACTION DOCTRINE:\n`
                    analysis += `${vehicle1.faction} vs ${vehicle2.faction} represents different military philosophies and engineering approaches.`
                  }

                  return analysis
                }
                return (
                  <div className="mt-6 bg-slate-800/30 rounded-lg p-4 border border-cyan-500/20">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                      🤖 AI Tactical Analysis System (AITAS)
                    </h3>
                    <div className="text-slate-300 text-sm whitespace-pre-line leading-relaxed">
                      {generateComparisonAnalysis(vehicle1, vehicle2)}
                    </div>
                  </div>
                )
              }
              return null
            })()}

            <button
              onClick={() => setCompare([])}
              className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              Clear Comparison
            </button>
          </div>
        )}

        <div className="mb-6 flex items-center justify-between">
          <p className="text-slate-400 mx-1.5">
            Showing {indexOfFirstVehicle + 1}-{Math.min(indexOfLastVehicle, filteredVehicles.length)} of{" "}
            {filteredVehicles.length} vehicles
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedVehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`group relative bg-slate-900/60 rounded-xl p-6 border border-slate-800 transition-all duration-300 ${
      vehicle.tier === "II"
        ? "hover:border-green-500 hover:shadow-[0_0_12px_1px_rgba(34,197,94,0.6)]"
        : vehicle.tier === "III"
        ? "hover:border-blue-500 hover:shadow-[0_0_12px_1px_rgba(29,78,216,0.6)]"
        : vehicle.tier === "IV"
        ? "hover:border-purple-500 hover:shadow-[0_0_12px_1px_rgba(147,51,234,0.6)]"
        : vehicle.tier === "I"
        ? "hover:border-white-300 hover:shadow-[0_0_12px_1px_rgba(147,51,234,0.6)]"
        : ""
    }`}
>
  {/* Full border glow for Exclusive / Market (softer) */}
  {(isExclusiveVehicle(vehicle.name) || isMarketVehicle(vehicle.name)) && (
    <div
      className={`absolute top-0 left-0 w-full h-full rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300
        ${
          isExclusiveVehicle(vehicle.name)
            ? "border-4 border-red-500/30 shadow-[0_0_12px_3px_rgba(239,68,68,0.25)]"
            : "border-4 border-yellow-400/30 shadow-[0_0_12px_3px_rgba(234,179,8,0.25)]"
        }`}
    />
  )}


              
            
            
              <div className="absolute top-0 left-0 w-0 h-0 z-10">

                <div
                  className={`w-0 h-0 border-r-[40px] border-t-[40px] border-r-transparent text-fuchsia-800 ${
                    vehicle.tier === "II"
                      ? "border-t-green-500"
                      : vehicle.tier === "III"
                        ? "border-t-blue-700"
                        : vehicle.tier === "IV"
                          ? "border-t-purple-500"
                          : "border-t-gray-500"
                  }`}
                />
              </div>

              {isMarketVehicle(vehicle.name) && (
                <div className="absolute top-0 left-0 w-0 h-0 z-10">
                  <div className="h-0 border-b-transparent border-l-yellow-500 ml-0 w-[0-] w-[aut-] w-[auto-] w-[auto-10] w-[auto-10px] w-[au-10px] w-[-10px] border-l-[30px] border-r-0 border-b-[30px]" />
                </div>
              )}

              {isExclusiveVehicle(vehicle.name) && (
                <div className="absolute top-0 left-0 w-0 h-0 z-10">
                  <div className="h-0 border-b-transparent border-l-red-500 ml-0 w-[0-] w-[aut-] w-[auto-] w-[auto-10] w-[auto-10px] w-[au-10px] w-[-10px] border-r-0 border-b-[20px] border-l-[20px] text-rose-500 opacity-100" />
                </div>
              )}













              {(vehicle.type === "Fighter Jet" || vehicle.type === "Bomber" || vehicle.type === "Helicopter") && (
                <div className="absolute top-4 right-4 px-0 py-0 pl-0 pb-2.5 pt-0 border-t-0 mx-[-14px] my-[-3px]">
                  {(() => {
                    const role = getAircraftRole(vehicle)
                    const iconPath = getRoleIcon(role)
                    return iconPath ? (
                      <img
                        src={iconPath || "/placeholder.svg"}
                        alt={`${role} aircraft`}
                        className="h-6 w-auto opacity-80 object-contain"
                      />
                    ) : null
                  })()}
                </div>
              )}

              {(vehicle.type === "Main Battle Tank" || vehicle.type === "Light Tank" || vehicle.type === "Tank Destroyer" || 
                vehicle.type === "MLRS" || vehicle.type === "Missile Carrier" || vehicle.type === "SPA" || 
                vehicle.type === "Anti-Air") && (
                <div className="absolute top-4 right-4 px-0 py-0 pl-0 pb-2.5 pt-0 border-t-0 my-[-3px] mx-[-4px]">
                  {(() => {
                    const tankType = vehicle.type === "Main Battle Tank" ? "MBT" : 
                                   vehicle.type === "Anti-Air" ? "AA" : vehicle.type
                    const iconPath = getTRoleIcon(tankType)
                    return iconPath ? (
                      <img
                        src={iconPath || "/placeholder.svg"}
                        alt={`${tankType} tank`}
                        className="h-3 w-auto opacity-80 object-contain"
                      />
                    ) : null
                  })()}
                </div>
              )}

              <div className="flex items-center gap-3 mb-2 px-0">
                <img
                  src={getFlagImage(vehicle.faction) || "/placeholder.svg"}
                  alt={`${vehicle.faction} flag`}
                  className="w-8 h-6 object-cover rounded shadow-md"
                />
                <h3 className="text-xl font-bold text-white">{vehicle.name}</h3>
                <span className="text-sm text-slate-400 font-semibold">({vehicle.faction})</span>
              </div>

              {/* Vehicle Image Display */}
              {vehicle.image && (
                <div className="mb-4">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} vehicle`}
                    className="w-full h-48 object-cover rounded-lg border border-slate-700 shadow-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}

              <p className="text-slate-300 text-sm mb-4 leading-relaxed">{vehicle.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-xs text-slate-400 mb-1">Health</div>
                  <div className="text-lg font-bold text-cyan-300">{vehicle.stats.health.toLocaleString()}</div>
                </div>

                {vehicle.type === "Fighter Jet" || vehicle.type === "Bomber" || vehicle.type === "Helicopter"? (
                  <>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-xs text-slate-400 mb-1">Cruise Speed</div>
                      <div className="text-lg font-bold text-cyan-300">{vehicle.stats.speed} km/h</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-xs text-slate-400 mb-1">Afterburner Speed</div>
                      <div className="text-lg font-bold text-cyan-300">{vehicle.stats.afterburnerSpeed} km/h</div>
                    </div>
                  </>
                ) : vehicle.type === "Helicopter" ? (
                  <>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-xs text-slate-400 mb-1">Speed</div>
                      <div className="text-lg font-bold text-cyan-300">{vehicle.stats.speed} km/h</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-xs text-slate-400 mb-1">Max Speed</div>
                      <div className="text-lg font-bold text-cyan-300">{vehicle.stats.maxSpeed} km/h</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-xs text-slate-400 mb-1">Speed</div>
                      <div className="text-lg font-bold text-cyan-300">{vehicle.stats.speed} km/h</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-xs text-slate-400 mb-1">Armor</div>
                      <div className="text-lg font-bold text-cyan-300">{vehicle.stats.armor}</div>
                    </div>
                  </>
                )}

                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-xs text-slate-400 mb-1">Agility</div>
                  <div className="text-lg font-bold text-cyan-300">{vehicle.stats.agility}</div>
                </div>
              </div>

              <div className="flex gap-2 mb-3">
                <button
                  onClick={() => toggleCompare(vehicle.id.toString())}
                  disabled={compare.length >= 2 && !compare.includes(vehicle.id.toString())}
                  className={`flex-1 text-sm rounded transition-colors tabular-nums px-5 py-4 font-bold ${
                    compare.includes(vehicle.id.toString())
                      ? "bg-cyan-600 text-white"
                      : compare.length >= 2
                        ? "bg-slate-600 text-slate-400 cursor-not-allowed"
                        : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  {compare.includes(vehicle.id.toString()) ? "✓ Compare" : "Compare"}
                </button>
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => setWeaponsModalOpenId(vehicle.id.toString())}
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold rounded transition-colors"
                >
                  Weapons
                </button>

                <button
                  onClick={() => setVehicleInfoOpen(vehicle.id.toString())}
                  className="p-2 bg-cyan-600/20 hover:bg-cyan-600/30 rounded-full transition-colors group"
                  title="Get AI Analysis"
                >
                  <Bot className="group-hover:text-cyan-300 text-sky-300 w-[30px] h-[30px]" />
                </button>
              </div>

              {expandedVehicle === vehicle.id.toString() && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-slate-700"
                >
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-300 mb-2">Weapons</h4>
                      <div className="space-y-2">
                        {vehicle.weapons.map((weapon: any, idx: number) => (
                          <div key={idx} className="bg-slate-800/30 rounded p-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="font-medium text-cyan-200">{weapon.name}</div>
                                <div className="text-xs text-slate-400">{weapon.type}</div>
                              </div>
                              <div className="text-right text-xs">
                                <div className="text-cyan-300 font-bold">DMG: {weapon.damage}</div>
                                <div className="text-cyan-300 font-bold">PEN: {weapon.penetration}</div>
                                <div className="text-cyan-300 font-bold">REL: {weapon.reload}</div>
                                {weapon.rateOfFire && <div className="text-slate-400">{weapon.rateOfFire}</div>}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-cyan-300 mb-2">Upgrade Modules</h4>
                      <div className="space-y-3">
                        {Object.entries(vehicle.modules || {}).map(([category, modules]: [string, any]) => (
                          <div key={category}>
                            <div className="text-xs font-medium text-slate-300 mb-1 capitalize">{category}</div>
                            <div className="space-y-1">
                              {Array.isArray(modules) &&
                                modules.map((module: any, idx: number) => (
                                  <div key={idx} className="bg-slate-800/20 rounded px-2 py-1 text-xs">
                                    <div className="font-medium text-cyan-200">{module.name}</div>
                                    <div className="text-slate-400">{module.bonus}</div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center flex-row mx-2 sm:mx-4 mt-2.5 leading-9">
          <div className="flex gap-1 items-center flex-wrap justify-center">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-3 py-2 text-sm rounded transition-colors ${
                currentPage === 1 
                  ? "bg-slate-800 text-slate-500 cursor-not-allowed" 
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              &lt;
            </button>

            {/* Compact Page Numbers - Hidden on Mobile */}
            <div className="hidden md:flex gap-1 items-center">
              {(() => {
                const totalPages = Math.ceil(filteredVehicles.length / vehiclesPerPage);
                const current = currentPage;
                const pages = [];

                if (totalPages <= 7) {
                  // Show all pages if 7 or fewer
                  for (let i = 1; i <= totalPages; i++) {
                    pages.push(i);
                  }
                } else {
                  // Always show first page
                  pages.push(1);
                  
                  if (current <= 4) {
                    // Near beginning: 1 2 3 4 5 ... last
                    for (let i = 2; i <= 5; i++) {
                      pages.push(i);
                    }
                    pages.push('...');
                    pages.push(totalPages);
                  } else if (current >= totalPages - 3) {
                    // Near end: 1 ... (last-4) (last-3) (last-2) (last-1) last
                    pages.push('...');
                    for (let i = totalPages - 4; i <= totalPages; i++) {
                      pages.push(i);
                    }
                  } else {
                    // Middle: 1 ... (current-1) current (current+1) ... last
                    pages.push('...');
                    for (let i = current - 1; i <= current + 1; i++) {
                      pages.push(i);
                    }
                    pages.push('...');
                    pages.push(totalPages);
                  }
                }

                return pages.map((page, index) => {
                  if (page === '...') {
                    return (
                      <span key={`ellipsis-${index}`} className="px-2 py-1 text-slate-400 text-sm">
                        ...
                      </span>
                    );
                  }
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 text-sm rounded transition-colors mr-0.5 ${
                        currentPage === page 
                          ? "bg-cyan-700 text-white" 
                          : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                      }`}
                    >
                      {page}
                    </button>
                  );
                });
              })()}
            </div>

            {/* Current Page Indicator - Visible on Mobile */}
            <div className="md:hidden px-3 py-2 bg-slate-800 text-slate-300 rounded text-sm mx-2">
              {currentPage} / {Math.ceil(filteredVehicles.length / vehiclesPerPage)}
            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(Math.min(Math.ceil(filteredVehicles.length / vehiclesPerPage), currentPage + 1))}
              disabled={currentPage === Math.ceil(filteredVehicles.length / vehiclesPerPage)}
              className={`px-3 py-2 text-sm rounded transition-colors ${
                currentPage === Math.ceil(filteredVehicles.length / vehiclesPerPage)
                  ? "bg-slate-800 text-slate-500 cursor-not-allowed" 
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Chat Interface */}
        {chatOpen && (
          <div className="fixed bottom-4 right-4 h-96 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 w-[344px] sm:w-[400px] max-w-[90vw]">
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <h3 className="font-semibold text-cyan-300">Vehicle Database Chat</h3>
              <button onClick={() => setChatOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`${msg.role === "user" ? "text-right" : "text-left"}`}>
                  <div className="text-xs text-slate-400 mb-1">{msg.role === "user" ? "You:" : "Database:"}</div>
                  <div
                    className={`inline-block p-2 rounded-lg text-sm ${
                      msg.role === "user" ? "bg-cyan-600 text-white" : "bg-slate-800 text-slate-200"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && <div className="text-center text-slate-400">Thinking...</div>}
            </div>

            <div className="p-4 border-t border-slate-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleChatSubmit()}
                  placeholder="Ask about vehicles..."
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded text-sm focus:ring-2 focus:ring-cyan-500"
                />
                <button
                  onClick={handleChatSubmit}
                  className="px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Floating Chat Button */}
        {!chatOpen && (
          <button
            onClick={() => setChatOpen(true)}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 p-3 sm:p-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg transition-colors z-40"
          >
            <BotMessageSquareIcon className="h-6 w-6 sm:h-8 sm:w-8" />
            <span className="hidden sm:inline ml-2">Ask AI</span>
          </button>
        )}

        <footer className="mt-8 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-800">
          <div className="text-center space-x-4 sm:space-x-8 px-4">
            <button
              onClick={() => setShowAbout(true)}
              className="text-cyan-400 hover:text-cyan-300 underline font-medium"
            >
              About
            </button>
            <button
              onClick={() => setShowCredits(true)}
              className="text-cyan-400 hover:text-cyan-300 underline font-medium"
            >
              Credits
            </button>
          </div>
        </footer>

        {/* About Modal */}
        {showAbout && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-cyan-400">About MWT Assistant (Unofficial) </h2>
                  <button onClick={() => setShowAbout(false)} className="text-slate-400 hover:text-white">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    MWT Assistant is a comprehensive database and analysis tool for MWT vehicles.
                    This application provides detailed specifications, tactical analysis, and comparison tools for
                    military vehicles.
                  </p>
                  <p>
                    Features include vehicle statistics, weapon specifications, upgrade modules, AI-powered tactical
                    analysis, and advanced filtering capabilities.
                  </p>
                  <p className="text-sm text-slate-400">
                    Created by Naveed2227 • Version 1.0 • Built with CSS and TypeScript
                  </p>
                   <p className="text-sm text-slate-400"> 
                    Contact:
                  </p>
                  <p className="text-sm text-slate-400"> 
                    Email: naveed.miandad.007@gmail.com
                  </p>
                  <p className="text-sm text-slate-400"> 
                    Discord: naveed27
                  </p>
                  <p className="text-sm text-slate-400"> 
                    Inst: @naveed_2227
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-600">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Updates</h3>
                    <div className="space-y-3">
                     <div className="bg-slate-700/50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-cyan-300">Version Beta 1.5    (19/8/2025)</span>
                          <span className="text-sm text-slate-400">Latest</span>
                        </div>
                        <ul className="text-sm text-slate-300 space-y-1">
                          <li>• Added 26 new Vehicles including LAV-600, ZTZ-96(P) and PT-91 Twardy</li>
                          <li>• Majour Bugs fixed</li>
                        </ul>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-cyan-300">Version Beta 1.4    (18/8/2025)</span>
                          <span className="text-sm text-slate-400">Previous</span>
                        </div>
                        <ul className="text-sm text-slate-300 space-y-1">
                          <li>• Added 20 new Vehicles including Mi-35, Ka-58 Black Ghost and SB1</li>
                          <li>• New Vehicle Red Tag for Exclusive vehicles (Gatcha)</li>
                          <li>• Minor bugs fixed</li>
                        </ul>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-cyan-300">Version Beta 1.3    (17/8/2025)</span>
                          <span className="text-sm text-slate-400">Old</span>
                        </div>
                        <ul className="text-sm text-slate-300 space-y-1">
                          <li>• Added 34 new Vehicles including YF-23, T20 monolit and Su-37 Terminator</li>
                          <li>• New Tank Role drop doen box</li>
                          <li>• Tu-222 now has the Bomber Icon</li>
                        </ul>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-cyan-300">Version Beta 1.2    (16/8/2025)</span>
                          <span className="text-sm text-slate-400">Old</span>
                        </div>
                        <ul className="text-sm text-slate-300 space-y-1">
                          <li>• Added 7 new aircraft including AV-8B Harrier II and F-14D Super Tomcat</li>
                          <li>• Fixed header positioning to stay in place during scroll</li>
                          <li>• Enhanced AI chat system with improved vehicle analysis</li>
                        </ul>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-cyan-300">Version Beta 1.1    (16/8/2025)</span>
                          <span className="text-sm text-slate-400">Old</span>
                        </div>
                        <ul className="text-sm text-slate-300 space-y-1">
                          <li>• Added country flag indicators for all vehicles</li>
                          <li>• Implemented market vehicle gold badges</li>
                          <li>• Enhanced weapons modal with detailed specifications</li>
                        </ul>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-cyan-300">Version Beta 1.0    (16/8/2025)</span>
                          <span className="text-sm text-slate-400">Initial</span>
                        </div>
                        <ul className="text-sm text-slate-300 space-y-1">
                          <li>• Initial release with comprehensive vehicle database</li>
                          <li>• AI-powered chat assistant for tactical analysis</li>
                          <li>• Vehicle comparison and filtering system</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showCredits && (
          <div className="fixed inset-0 flex justify-center z-50 items-center opacity-100 bg-[rgba(0,0,0,0.4655797066895858)]">
            <div className="bg-slate-900 p-6 rounded-lg max-w-4xl mx-4 max-h-[80vh] overflow-y-auto h-full px-6 w-full opacity-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-cyan-400">Credits</h3>
                <button onClick={() => setShowCredits(false)} className="text-slate-400 hover:text-white text-2xl">
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <h4 className="text-white font-semibold">Naveed2227</h4>
                  <p className="text-slate-400 text-sm">Lead developer and creator</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Hoffman Derpin</h4>
                  <p className="text-slate-400 text-sm">Supporter,Writer</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Spector404</h4>
                  <p className="text-slate-400 text-sm">Supporter,Writer</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Unnamed</h4>
                  <p className="text-slate-400 text-sm">Suggester</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Hollyninja456</h4>
                  <p className="text-slate-400 text-sm">Writer, Supporter</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Flarakrad</h4>
                  <p className="text-slate-400 text-sm">Contributer</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Yeti</h4>
                  <p className="text-slate-400 text-sm">Yeti</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Yx190</h4>
                  <p className="text-slate-400 text-sm">Supporter, Writer</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">QWE</h4>
                  <p className="text-slate-400 text-sm">Server Moderator, Supporter, Coordinator</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">OberstLeutnantFerid</h4>
                  <p className="text-slate-400 text-sm">Militarist Officer</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Top Gun</h4>
                  <p className="text-slate-400 text-sm">Server Moderator, supporter, Coordinator</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">White Windu</h4>
                  <p className="text-slate-400 text-sm">Adviser, Coordination Manager</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Shiroko_Chan</h4>
                  <p className="text-slate-400 text-sm">Server Moderator, Supporter, Iwak</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Eidolon X</h4>
                  <p className="text-slate-400 text-sm">Adviser, Lurks</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Nesli27</h4>
                  <p className="text-slate-400 text-sm">Supporter</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold"> 枕頭 </h4>
                  <p className="text-slate-400 text-sm">Supporter</p>
                </div>
                 <div>
                  <h4 className="text-white font-semibold">VIPER2729</h4>
                  <p className="text-slate-400 text-sm">Supporter</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">THE DAWN</h4>
                  <p className="text-slate-400 text-sm">PRESS-Acc, Writer, Supporter</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">白叔</h4>
                  <p className="text-slate-400 text-sm">PRESS-Acc, Writer, Supporter</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Vehicle Info Modal */}
        {vehicleInfoOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-900 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <h3 className="text-xl font-bold text-cyan-300">AI Vehicle Analysis Syetem (AIVAS)  </h3>
                <button onClick={() => setVehicleInfoOpen(null)} className="text-slate-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6">
                <pre className="whitespace-pre-wrap text-sm text-slate-200 leading-relaxed">
                  {(() => {
                    const vehicle = VEHICLES.find((v) => v.id.toString() === vehicleInfoOpen)
                    return vehicle ? getVehicleDetailedInfo(vehicle) : "Vehicle not found"
                  })()}
                </pre>
              </div>
            </div>
          </div>
        )}

        {weaponsModalOpenId && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-900 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-slate-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">
                  {VEHICLES.find((v) => v.id.toString() === weaponsModalOpenId)?.name} - Weapons
                </h3>
                <button
                  onClick={() => setWeaponsModalOpenId(null)}
                  className="text-slate-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4">
                {VEHICLES.find((v) => v.id.toString() === weaponsModalOpenId)?.weapons.map((weapon, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <h4 className="text-lg font-semibold text-cyan-300 mb-2">{weapon.name}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-400">Damage: </span>
                        <span className="text-cyan-300 font-bold text-lg">{weapon.damage}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Penetration: </span>
                        <span className="text-cyan-300 font-bold text-lg">{weapon.penetration}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Reload: </span>
                        <span className="text-cyan-300 font-bold text-lg">{weapon.reload}</span>
                      </div>
                      {weapon.rateOfFire && (
                        <div>
                          <span className="text-slate-400">Rate of Fire: </span>
                          <span className="text-cyan-300">{weapon.rateOfFire}</span>
                        </div>
                      )}
                      {weapon.lockTime && (
                        <div>
                          <span className="text-slate-400">Lock Time: </span>
                          <span className="text-cyan-300">{weapon.lockTime}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}



export default MwtVehicleStats;
