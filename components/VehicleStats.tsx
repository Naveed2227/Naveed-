// Vehicle data for MWT Vehicle Stats

export interface Vehicle {
  id: number | string;
  name: string;
  type: string;
  faction: string;
  tier: string;
  description: string;
  image: string;
  stats: {
    health: number;
    speed: number;
    afterburnerSpeed?: number;
    agility: number;
    armor?: number;
    [key: string]: any;
  };
  weapons: Array<{
    name: string;
    type: string;
    damage: number;
    penetration: number;
    reload?: number;
  }>;
}

export const VEHICLES_DATA: Vehicle[] = [
  {
    id: 1,
    name: "Su-57M",
    type: "Fighter Jet",
    faction: "Russian",
    tier: "IV",
    description: "Advanced fifth-generation stealth fighter with supercruise capability and advanced avionics.",
    image: "Su-57M.jpg",
    stats: { health: 24500, speed: 880, afterburnerSpeed: 2520, agility: 55 },
    weapons: [
      { "name": "KAB-250", "type": "Guided Bomb", "damage": 14900, "penetration": 130, "reload": 25 },
      { "name": "GROM-E1", "type": "Air-to-Ground Missile", "damage": 16200, "penetration": 170, "reload": 36 },
      { "name": "KAB500KR", "type": "Guided Bomb", "damage": 17800, "penetration": 320, "reload": 40 },
      { "name": "KAB500L", "type": "Guided Bomb", "damage": 17300, "penetration": 310, "reload": 40 },
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
    stats: { health: 25100, speed: 770, afterburnerSpeed: 2170, agility: 40 },
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
    stats: { health: 21200, speed: 848, afterburnerSpeed: 2200, agility: 52},
    weapons: [
      { "name": "FT-3", "type": "Air-to-Ground Missile", "damage": 15800, "penetration": 210, "reload": 34 },
      { "name": "LS-6/250", "type": "Guided Bomb", "damage": 17300, "penetration": 300, "reload": 40 },
      { "name": "TL-20", "type": "Guided Bomb", "damage": 16120, "penetration": 143, "reload": 25 },
      { "name": "CM-506KG", "type": "Air-to-Ground Missile", "damage": 13000, "penetration": 90, "reload": 25 },
      { "name": "PL-10", "type": "Short-Range AAM", "damage": 7400, "penetration": 60, "reload": 20 },
      { "name": "AR-1", "type": "Anti-Radiation Missile", "damage": 7400, "penetration": 1000, "reload": 16 },
      { "name": "PL-15", "type": "BVR AAM", "damage": 7800, "penetration": 70, "reload": 30 },
      { "name": "PL-12", "type": "BVR AAM", "damage": 7600, "penetration": 56, "reload": 30 },
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
    stats: { health: 32800, speed: 870, afterburnerSpeed: 2880, agility: 29 },
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
    image: "J-35A.jpg",
    description: "Fifth-generation stealth fighter with advanced sensor fusion and networking capabilities.",
    stats: { health: 22600, speed: 780, afterburnerSpeed: 2250, agility: 48 },
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
    stats: { health: 21200, speed: 880, afterburnerSpeed: 4050, agility: 43 },
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
    image: "SU-57-Felon.jpg",
    stats: { health: 21900, speed: 860, afterburnerSpeed: 2340, agility: 53 },
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
    name: "B-Type",
    type: "Fighter Jet",
    faction: "Chinese",
    tier: "IV",
    image: "B-Type.jpg",
    description: "The B-Type is a futuristic Chinese stealth jet with extreme speed, agility, and firepower, capable of near-space and atmospheric dominance.",
    stats: { health: 0, speed: 0, afterburnerSpeed: 3675, agility: 0 },
    weapons: [
      { "name": "KD-21", "type": "Ballistic Missile", "damage": 40000, "penetration": 0, "reload": 0 },
      { "name": "PL-17", "type": "Air-to-Air Missile", "damage": 0, "penetration": 0, "reload": 0 },
      { "name": "HD-1A", "type": "Air-to-Ground Missile", "damage": 25000, "penetration": 0, "reload": 0 },
      { "name": "LS-6/250", "type": "Guided Bomb", "damage": 0, "penetration": 0, "reload": 0 }
      

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
  id: 9,
  name: "YF-23",
  type: "Fighter Jet",
  faction: "American",
  tier: "IV",
  image: "YF-23.jpg",
  description: "Experimental stealth fighter designed for air superiority, rival to the F-22.",
  stats: { health: 23800, speed: 790, afterburnerSpeed: 2070, agility: 35 },
  weapons: [
    { "name": "GBU-38", "type": "Guided Bomb", "damage": 14300, "penetration": 120, "reload": 25 },
      { "name": "GBU-39", "type": "Guided Bomb", "damage": 14700, "penetration": 120, "reload": 28 },
      { "name": "GBU-31", "type": "Guided Bomb", "damage": 19400, "penetration": 360, "reload": 40 },
      { "name": "Brimstone", "type": "Air-to-Ground Missile", "damage": 8100, "penetration": 800, "reload": 20 },
      { "name": "AGM-65", "type": "Air-to-Ground Missile", "damage": 11000, "penetration": 830, "reload": 22 },
      { name: "AGM-84H/K", type: "Anti-Ship Missile", damage: 18900, penetration: 310, reload: 35 },
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
  id: 10,
  name: "F-35B Lightning II",
  type: "Fighter Jet",
  faction: "American",
  tier: "IV",
  image: "F-35B-Lightning-II.jpg",
  description: "Fifth-generation stealth multirole fighter with STOVL capability.",
  stats: { health: 20200, speed: 770, afterburnerSpeed: 1780, agility: 38 },
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
  id: 11,
  name: "J-50",
  type: "Fighter Jet",
  faction: "Chinese",
  tier: "IV",
  image: "J-50.jpg",
  description: "Advanced stealth air superiority fighter concept with heavy armament.",
  stats: { health: 26600, speed: 840, afterburnerSpeed: 2480, agility: 55 },
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
  id: 12,
  name: "Su-75 Checkmate",
  type: "Fighter Jet",
  faction: "Russian",
  tier: "IV",
  image: "Su-75-Checkmate.jpg",
  description: "Light stealth fighter designed for export and versatile combat missions.",
  stats: { health: 18900, speed: 900, afterburnerSpeed: 2310, agility: 60 },
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
  id: 13,
  name: "X2 Shinshin",
  type: "Fighter Jet",
  faction: "Japanese",
  tier: "IV",
  image: "X2-Shinshin.jpg",
  description: "Japan’s stealth technology demonstrator, testing advanced avionics, radar, and maneuverability for future fighters.",
  stats: { health: 21400, speed: 810, afterburnerSpeed: 2230, agility: 53 },
  weapons: [
      { "name": "AAM-3", "type": "Air-to-Ground Missile", "damage": 5900, "penetration": 45, "reload": 15 },
      { "name": "AAM-4", "type": "BVR AAM", "damage": 7500, "penetration": 75, "reload": 30 },
      { "name": "AAM-5", "type": "Short-Range AAM", "damage": 6100, "penetration": 60, "reload": 20 },
      { "name": "GCS-1", "type": "Guided Bomb", "damage": 14300, "penetration": 120, "reload": 25 },
      { "name": "GBU-38", "type": "Guided Bomb", "damage": 14300, "penetration": 120, "reload": 25 },
      { "name": "GBU-32", "type": "Guided Bomb", "damage": 15700, "penetration": 200, "reload": 35 },
      { "name": "GBU-31", "type": "Guided Bomb", "damage": 19400, "penetration": 360, "reload": 40 },
      { "name": "JNAAM", "type": "Guided Bomb", "damage": 8100, "penetration": 85, "reload": 35 },
      { "name": "Type 12 STS", "type": "Guided Bomb", "damage": 16200, "penetration": 170, "reload": 40 },
      { "name": "JLAU-3/A", "damage": 5200, "penetration": 128, "reload": 20 },
      


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
    stats: { health: 38900, speed: 70, reverseSpeed: 70, armor: "1200mm", agility: 34 },
    weapons: [
      { name: "3BM69 Vacuum-1", type: "Main Gun", damage: 10670, penetration: 900 },
      { name: "30F26", type: "Main Gun", damage: 5000, penetration: 920 },
      { name: "3BK18M", type: "Main Gun", damage: 12390, penetration: 550 },
      { name: "3BK21", type: "Main Gun", damage: 10250, penetration: 800 }

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
    stats: { health: 40300, speed: 75, reverseSpeed: 45, armor: "1100mm", agility: 35 },
    weapons: [
      { name: "M829A3", type: "Main Gun", damage: 10450, penetration: 670 },
      { name: "MRM-KE", type: "Main Gun", damage: 9150, penetration: 980 },
      { name: "MRM-CE", type: "Main Gun", damage: 10000, penetration: 850 },
      { name: "M830", type: "Main Gun", damage: 10930, penetration: 800 },
      { name: "Stinger Launcher", type: "Missile", damage: 6110, penetration: 35, reload: 10 },
      { name: "SwitchBlade 300", type: "Missile", damage: 6730, penetration: 390, reload: 12.4 }
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
    stats: { health: 38000, speed: 71, reverseSpeed: 71, armor: "850mm", agility: 40 },
    weapons: [
      { name: "JM33 APFSDS", type: "Main Gun", damage: 11330, penetration: 481 },
      { name: "JM12A1 HEAT", type: "Main Gun", damage: 12360, penetration: 480 },
      { name: "Type 10 APFSDS", type: "Main Gun", damage: 11680, penetration: 650 }
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
    name: "Altay",
    type: "Main Battle Tank",
    faction: "Turkish",
    tier: "IV",
    image: "Altay.jpg",
    description: "Turkey’s modern main battle tank, emphasizing firepower, protection, mobility, and advanced technology.",
    stats: { health: 42600, speed: 62,armor: "1200mm", agility: 36 },
    weapons: [
      { name: "DM63A1 APFSDS", type: "Main Gun", damage: 18500, penetration: 950, reload: 5.2 },
      { name: "DM11", type: "Main Gun", damage: 5000, penetration: 87 },
      { name: "DM12A2 HEATFS", type: "Main Gun", damage: 19200, penetration: 1250, reload: 5.2 },
      { name: "DM73 APFSDS", type: "Main Gun", damage: 19200, penetration: 1250, reload: 5.2 }
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
    id: 104,
    name: "T-90A",
    type: "Main Battle Tank",
    faction: "Russian",
    tier: "IV",
    image: "T-90A.jpg",
    description: "Modernized main battle tank with improved armor and advanced fire control.",
    stats: { health: 39400, speed: 65, reverseSpeed: 30, maneuverability: 44, armor: "1050mm", agility: 44 },
    weapons: [
      { name: "3BM42", type: "Main Gun", damage: 11700, penetration: 720 },
      { name: "9M112", type: "Main Gun", damage: 10070, penetration: 700 },
      { name: "30F26", type: "Main Gun", damage: 5000, penetration: 92 },
      { name: "3BK18M", type: "Main Gun", damage: 12390, penetration: 550 }
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
    id: 105,
    name: "KF-51 Panther",
    type: "Main Battle Tank",
    faction: "German",
    tier: "IV",
    image: "KF-51-Panther.jpg",
    description: "Next-generation main battle tank with 130mm gun and advanced digital systems.",
    stats: { health: 38500, speed: 65, armor: "1200mm", agility: 38 },
    weapons: [
      { name: "DM-11-1", type: "Main Gun", damage: 14850, penetration: 135 },
      { name: "DM-12-1", type: "Main Gun", damage: 13640, penetration: 800 },
      { name: "DM-33-1", type: "Main Gun", damage: 11500, penetration: 596 },
      { name: "DM-73-1", type: "Main Gun", damage: 12954, penetration: 980 },
      { name: "Hero 120", type: "Missile", damage: 8075, penetration: 440, reload: 13.5 }
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
    name: "M1 Abrams Block 3",
    type: "Main Battle Tank",
    faction: "American",
    tier: "IV",
    image: "M1-Abrams-Block-3.jpg",
    description: "An Experimental prototype tank intended as a successor to the Abrams MBT family",
    stats: { health: 39600, speed: 80, reverseSpeed: 50, maneuverability: 40, armor: "1150mm", agility: 40 },
    weapons: [
      { name: "M830A1", type: "Main Gun", damage: 12100, penetration: 850 },
      { name: "M829A3", type: "Main Gun", damage: 10450, penetration: 670 },
      { name: "MRM-CE", type: "Main Gun", damage: 10000, penetration: 850 },
      { name: "MRM-KE", type: "Main Gun", damage: 9150, penetration: 980 }
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
    id: 107,
    name: "Leopard 2A7+",
    type: "Main Battle Tank",
    faction: "German",
    tier: "IV",
    image: "Leopard-2A7V.jpg",
    description: "Most advanced Leopard variant with urban warfare modifications and enhanced protection.",
    stats: { health: 36200, speed: 68, armor: "1080mm", agility: 70 },
    weapons: [
      { name: "DM12", type: "Main Gun", damage: 12100, penetration: 480 },
      { name: "DM33", type: "Main Gun", damage: 10620, penetration: 496 },
      { name: "DM-73-1", type: "Main Gun", damage: 12954, penetration: 980 },
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
    id: 108,
    name: "T-25 Pamir",
    type: "Main Battle Tank",
    faction: "Russian",
    tier: "IV",
    image: "T-25-Pamir.jpg",
    description: "Advanced main battle tank with next-generation armor and fire control systems.",
    stats: { health: 40000, speed: 65, armor: "1250mm", agility: 30 },
    weapons: [
      { name: "3BM42", type: "Main Gun", damage: 11700, penetration: 720 },
      { name: "30F26", type: "Main Gun", damage: 5000, penetration: 92 },
      { name: "3BK18M", type: "Main Gun", damage: 12390, penetration: 550 },
      { name: "3BK21", type: "Main Gun", damage: 10250, penetration: 800 }

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
    id: 109,
    name: "T-95M",
    type: "Main Battle Tank",
    faction: "Russian",
    tier: "IV",
    image: "T-95M.jpg",
    description: "Experimental heavy tank with revolutionary armor design and 152mm gun.",
    stats: { health: 38100, speed: 75, armor: "1400mm", agility: 30 },
    weapons: [
      { name: "GRIFFEL 1", type: "Main Gun", damage: 15580, penetration: 850 },
      { name: "GRIFFEL 2", type: "Main Gun", damage: 16710, penetration: 1100 },
      { name: "LEAD1", type: "Main Gun", damage: 10800, penetration: 850 },
      { name: "VOG-17M", type: "Missile", damage: 1600, penetration: 60, reload: 1.7 },
      { name: "VOG-30", type: "Missile", damage: 1800, penetration: 76, reload: 1.7 }

    ],
    modules: {
      engine: [
        { name: "A-85-3A MK1", bonus: "+8 km/h speed" },
        { name: "A-85-3A MK2", bonus: "+16 km/h speed" },
        { name: "-85-3A MK3", bonus: "+24 km/h speed" },
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
    stats: { health: 42200, speed: 60, armor: "1320mm", agility: 45 },
    weapons: [
      { name: "GRIFFEL 1", type: "Main Gun", damage: 15580, penetration: 850 },
      { name: "GRIFFEL 2", type: "Main Gun", damage: 16710, penetration: 1100 },
      { name: "GRIFFEL 3", type: "Main Gun", damage: 16100, penetration: 900 },
      { name: "30F38", type: "Main Gun", damage: 10600, penetration: 480 }
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
    stats: { health: 33000, speed: 100, armor: "420mm", agility: 42 },
    weapons: [
      { name: "M735", type: "Main Gun", damage: 9940, penetration: 318 },
      { name: "Type 75", type: "Main Gun", damage: 10460, penetration: 127 },
      { name: "Type 91", type: "Main Gun", damage: 11070, penetration: 425 },
      { name: "Type 93(B)", type: "Main Gun", damage: 10380, penetration: 550 }
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
  image: "T-14-(152).jpg",
  description: "Next-generation Russian MBT prototype equipped with a powerful 152mm smoothbore gun and advanced armor.",
  stats: { health: 39700, speed: 73, armor: "1000mm", agility: 34 },
  weapons: [
      { name: "GRIFFEL 1", type: "Main Gun", damage: 15580, penetration: 850 },
      { name: "GRIFFEL 2", type: "Main Gun", damage: 16710, penetration: 1100 },
      { name: "GRIFFEL 3", type: "Main Gun", damage: 16100, penetration: 900 },
      { name: "30F38", type: "Main Gun", damage: 10600, penetration: 480 }
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
    stats: { health: 42500, speed: 64, armor: "1050mm", agility: 38 },
    weapons: [
      { name: "M322", type: "Main Gun", damage: 9900, penetration: 589 },
      { name: "M338", type: "Main Gun", damage: 10000, penetration: 620 },
      { name: "M339", type: "Main Gun", damage: 12800, penetration: 85 },
      { name: "M325", type: "Main Gun", damage: 10200, penetration: 480 }
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
    stats: { health: 36400, speed: 60, armor: "850mm", agility: 38 },
    weapons: [
      { name: "3UBR6", type: "Main Gun", damage: 560, penetration: 71 },
      { name: "3UBR8", type: "Main Gun", damage: 590, penetration: 165 },
      { name: "30F8", type: "Main Gun", damage: 675, penetration: 50 },
      { name: "M929", type: "Main Gun", damage: 630, penetration: 189 },
      { name: "9M120 Ataka", type: "Missile", damage: 3900, penetration: 750, reload: 12 }

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
    stats: { health: 29900, speed: 85, armor: "380mm", agility: 18 },
    weapons: [
      { name: "BRE1 HE", type: "Missile", damage: 9400, penetration: 120, reload: 12 },
      { name: "BRE7 HESH", type: "Missile", damage: 10100, penetration: 280, reload: 12 },
      { name: "GR70 HE", type: "Missile", damage: 11100, penetration: 140, reload: 20 },
      { name: "GR1 HESH", type: "Missile", damage: 13000, penetration: 200, reload: 20 },
      { name: "Dragon Drone", type: "Missile", damage: 12350, penetration: 800, reload: 20 }
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
    type: "SPH",
    faction: "Russian",
    tier: "IV",
    image: "2S19-Msta-S.jpg",
    description: "Self-propelled howitzer with long-range precision artillery capability.",
    stats: { health: 34300, speed: 60, armor: "450mm", agility: 32 },
    weapons: [
      { name: "30F25", type: "Main Gun", damage: 15000, penetration: 160 },
      { name: "30F45", type: "Main Gun", damage: 16200, penetration: 180 },
      { name: "Z023", type: "Main Gun", damage: 13800, penetration: 400 },
      { name: "30F39", type: "Main Gun", damage: 8800, penetration: 480 }
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
    stats: { health: 32500, speed: 70, armor: "420mm", agility: 35 },
    weapons: [
      { name: "3UBR6", type: "Main Gun", damage: 560, penetration: 71 },
      { name: "3UBR8", type: "Main Gun", damage: 590, penetration: 165 },
      { name: "30F8", type: "Main Gun", damage: 675, penetration: 50 },
      { name: "AAM 57E6M", type: "Missile", damage: 8910, penetration: 95, reload: 18 }
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
    stats: { health: 28800, speed: 97, armor: "380mm", agility: 40.1 },
    weapons: [
      { name: "M392A2", type: "Main Gun", damage: 9480, penetration: 372 },
      { name: "M393A2", type: "Main Gun", damage: 10340, penetration: 127 },
      { name: "M456A2", type: "Main Gun", damage: 10890, penetration: 400 },
      { name: "M900", type: "Main Gun", damage: 10320, penetration: 582 }
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
    name: "M1 Abrams CATTB",
    type: "Main Battle Tank",
    faction: "American",
    tier: "IV",
    image: "M1-Abrams-CATTB.jpg",
    description: "Experimental American tank with 140mm gun, advanced armor, and fire control, testing technologies to boost combat effectiveness.",
    stats: { health: 43700, speed: 72, armor: "1100mm", agility: 36 },
    weapons: [
      { name: "XM965", type: "Main Gun", damage: 16560, penetration: 1000, Reload: 8 },
      { name: "XM964", type: "Main Gun", damage: 14640, penetration: 1050, Reload: 8 }
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
    id: 120,
    name: "VT-4A1",
    type: "Main Battle Tank",
    faction: "Chinese",
    tier: "IV",
    image: "VT-4A1.jpg",
    description: "Export variant main battle tank with advanced fire control and modular protection.",
    stats: { health: 39100, speed: 71, armor: "1100mm", agility: 37 },
    weapons: [
      { name: "BTJ1", type: "Main Gun", damage: 10200, penetration: 1000 },
      { name: "BTA4", type: "Main Gun", damage: 11600, penetration: 700 },
      { name: "BTE2", type: "Main Gun", damage: 11475, penetration: 123 },
      { name: "GP125", type: "Main Gun", damage: 9120, penetration: 650 }
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
    id: 121,
    name: "ZTZ99A",
    type: "Main Battle Tank",
    faction: "Chinese",
    tier: "IV",
    image: "ZTZ99A.jpg",
    description: "Advanced main battle tank with composite armor and laser warning systems.",
    stats: { health: 37500, speed: 76, armor: "1150mm", agility: 40 },
    weapons: [
      { name: "DTB-125", type: "Main Gun", damage: 12760, penetration: 160 },
      { name: "DTP-125", type: "Main Gun", damage: 12230, penetration: 480 },
      { name: "DTC10-125", type: "Main Gun", damage: 11620, penetration: 680 },
      { name: "GP125", type: "Main Gun", damage: 9120, penetration: 650 }
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
    id: 122,
    name: "ZTZ99-III",
    type: "Main Battle Tank",
    faction: "Chinese",
    tier: "IV",
    image: "ZTZ99-III.jpg",
    description: "Latest variant with enhanced armor package and improved battlefield management systems.",
    stats: { health: 38300, speed: 70, armor: "1200mm", agility: 32 },
    weapons: [
      { name: "BTJ1", type: "Main Gun", damage: 10200, penetration: 1000 },
      { name: "BTA4", type: "Main Gun", damage: 11600, penetration: 700 },
      { name: "BTE2", type: "Main Gun", damage: 11475, penetration: 123 },
      { name: "GP125", type: "Main Gun", damage: 9120, penetration: 650 }
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
    id: 123,
    name: "Challenger 3",
    type: "Main Battle Tank",
    faction: "British",
    tier: "IV",
    image: "Challenger-3.jpg",
    description: "Next-generation British main battle tank with smoothbore gun and digital turret.",
    stats: { health: 43000, speed: 70, armor: "1180mm", agility: 32 },
    weapons: [
      { name: "DM12", type: "Main Gun", damage: 12100, penetration: 480 },
      { name: "DM23", type: "Main Gun", damage: 8911, penetration: 337 },
      { name: "DM33", type: "Main Gun", damage: 10620, penetration: 496 },
      { name: "DM63", type: "Main Gun", damage: 11760, penetration: 810 }
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
    id: 124,
    name: "EMBT 120",
    type: "Main Battle Tank",
    faction: "French",
    tier: "IV",
    image: "EMBT-120.jpg",
    description: "A hybrid European main battle tank, combining Leopard 2 chassis with Leclerc turret.",
    stats: { health: 41900, speed: 75, armor: "1160mm", agility: 38 },
    weapons: [
      { name: "OCC120G1", type: "Main Gun", damage: 11840, penetration: 480 },
      { name: "OE120F1", type: "Main Gun", damage: 4800, penetration: 85 },
      { name: "OFL120F1", type: "Main Gun", damage: 11040, penetration: 575 },
      { name: "SHARD120", type: "Main Gun", damage: 11300, penetration: 575 }
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
    id: 125,
    name: "FV4034 Challenger 2 TES",
    type: "Main Battle Tank",
    faction: "British",
    tier: "IV",
    image: "FV4034-Challenger-2-TES.jpg",
    description: "A heavily upgraded British main battle tank with advanced armor for urban warfare.",
    stats: { health: 42700, speed: 56, armor: "1120mm", agility: 30 },
    weapons: [
      { name: "L26", type: "Main Gun", damage: 11600, penetration: 494 },
      { name: "L27A1", type: "Main Gun", damage: 11850, penetration: 610 },
      { name: "L31A7", type: "Main Gun", damage: 13800, penetration: 160 }
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
    id: 126,
    name: "Karrar",
    type: "Main Battle Tank",
    faction: "Iranian",
    tier: "IV",
    image: "Karrar.jpg",
    description: "An Iranian main battle tank, featuring upgraded armor, firepower, and technology from T-72 design.",
    stats: { health: 39800, speed: 70, armor: "980mm", agility: 35 },
    weapons: [
      { name: "3BK29", type: "Main Gun", damage: 12630, penetration: 660 },
      { name: "3OF19", type: "Main Gun", damage: 5000, penetration: 82 },
      { name: "3BM29", type: "Main Gun", damage: 11150, penetration: 450 },
      { name: "Tondar", type: "Main Gun", damage: 10160, penetration: 750 }
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
    id: 127,
    name: "Leclerc S2 AZUR",
    type: "Main Battle Tank",
    faction: "French",
    tier: "IV",
    image: "Leclerc-S2-AZUR.jpg",
    description: "Upgraded French main battle tank with urban warfare package and improved armor.",
    stats: { health: 42400, speed: 80, armor: "1080mm", agility: 38 },
    weapons: [
      { name: "OCC120G1", type: "Main Gun", damage: 11840, penetration: 480 },
      { name: "OE120F1", type: "Main Gun", damage: 4800, penetration: 85 },
      { name: "OFL120F1", type: "Main Gun", damage: 11040, penetration: 575 },
      { name: "OR-281", type: "Main Gun", damage: 2106, penetration: 83 }
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
    id: 128,
    name: "Object 640",
    type: "Main Battle Tank",
    faction: "Russian",
    tier: "IV",
    image: "Object-640.jpg",
    description: "The Object 640 “Black Eagle” is a Russian prototype main battle tank with modular armor.",
    stats: { health: 42400, speed: 80, armor: "1200mm", agility: 38 },
    weapons: [
      { name: "3BM22", type: "Main Gun", damage: 11100, penetration: 425 },
      { name: "3BM42", type: "Main Gun", damage: 11700, penetration: 720 },
      { name: "3BK12M", type: "Main Gun", damage: 12140, penetration: 440 },
      { name: "3OF39", type: "Main Gun", damage: 11040, penetration: 480 },
      { name: "9M119", type: "Main Gun", damage: 10160, penetration: 750 }
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
    id: 129,
    name: "Leopard 2A-RC 3.0",
    type: "Main Battle Tank",
    faction: "German",
    tier: "IV",
    image: "Leopard-2-A-RC-3.0.jpg",
    description: "Mobile gun system with rapid deployment capability and stealth features.",
    stats: { health: 41900, speed: 70, armor: "300mm", agility: 38 },
    weapons: [
      { name: "XM1401E APFSDS", type: "Main Gun", damage: 13090, penetration: 950 },
      { name: "XME140 HEI", type: "Main Gun", damage: 13780, penetration: 103 },
      { name: "XMH140 HEAT", type: "Main Gun", damage: 14080, penetration: 866 },
      { name: "SpikeNLOS", type: "Missile", damage: 14250, penetration: 1000, reload: 3.6 },
      
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
    id: 130,
    name: "Leopard 2A8",
    type: "Main Battle Tank",
    faction: "German",
    tier: "IV",
    image: "Leopard-2A8.jpg",
    description: "A modern German main battle tank, featuring advanced armor, improved firepower, and upgraded targeting systems for battlefield dominance.",
    stats: { health: 45900, speed: 72, armor: "710", agility: 38 },
    weapons: [
      { name: "DM53 APFSDS", type: "Main Gun", damage: 11440, penetration: 650 },
      { name: "DM11 HEI", type: "Main Gun", damage: 5000, penetration: 85 },
      { name: "DM73 APFSDS", type: "Main Gun", damage: 11940, penetration: 900 },
      { name: "DM12A1 HEATFS", type: "Main Gun", damage: 12140, penetration: 500 },
      
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
    "id": 131,
    "name": "T-20 Monolit",
    "type": "Tank Destroyer",
    "faction": "Russian",
    "tier": "IV",
    image: "T-20-Monolit.jpg",
    "description": "Advanced Russian main battle tank equipped with a 2A42 autocannon, Kornet ATGMs, and a 30mm AGS-30 grenade launcher. Known for its formidable firepower and versatility on the battlefield.",
    "stats": {
      "health": 39400,
      "speed": 70,
      "reverseSpeed": 50,
      "turretRotationSpeed": 49.8,
      "hullRotationSpeed": 40,
      "armor": 400,
      "agility": 40
    },
    "weapons": [
      { name: "3UBR6", type: "Main Gun", damage: 560, penetration: 71 },
      { name: "3UBR8", type: "Main Gun", damage: 590, penetration: 165 },
      { name: "30F8", type: "Main Gun", damage: 675, penetration: 50 },
      { name: "M929", type: "Main Gun", damage: 630, penetration: 189 },
      { name: "VOG-17M", type: "Missile", damage: 1600, penetration: 60, reload: 1.7 },
      { name: "VOG-30", type: "Missile", damage: 1800, penetration: 76, reload: 1.7 }
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
    "id": 132,
    "name": "T-90M",
    "type": "Main Battle Tank",
    "faction": "Russian",
    "tier": "IV",
    image: "T-90M.jpg",
    "description": "A modernized Russian MBT featuring advanced armor, digital fire controls, autoloader, improved mobility, and powerful 125 mm weaponry.",
    "stats": {
      "health": 0,
      "speed": 70,
      "reverseSpeed": 0,
      "turretRotationSpeed": 0,
      "hullRotationSpeed": 0,
      "armor": 0,
      "agility": 0 },
    "weapons": [
      { name: "3BM46 APFSDS", type: "Main Gun", damage: 0, penetration: 690 },
      { name: "3OF26 HE", type: "Main Gun", damage: 0, penetration: 0 },
      { name: "3BK18 HEATFS", type: "Main Gun", damage: 0, penetration: 0 },
      { name: "3BM70 APFSDS", type: "Main Gun", damage: 15000, penetration: 870 },
      { name: "9M119 HEATFS", type: "Main Gun", damage: 10160, penetration: 750 }
      
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
    "id": 133,
    "name": "KF31 Lynx",
    "type": "Light Tank",
    "faction": "German",
    "tier": "IV",
    image: "KF31-Lynx.jpg",
    "description": "A versatile German infantry fighting vehicle equipped with a 30mm autocannon and Spike LR2 missiles, adaptable for various combat roles.",
    "stats": {
      "health": 38600,
      "speed": 80,
      "reverseSpeed": 30,
      "turretRotationSpeed": 50,
      "hullRotationSpeed": 40,
      "armor": 300,
      "agility": 40
    },
    "weapons": [
      { name: "PMC287", type: "Main Gun", damage: 970, penetration: 195 },
      { name: "PMC308", type: "Main Gun", damage: 300, penetration: 55 },
      { name: "MK246", type: "Main Gun", damage: 870, penetration: 117 },
      { name: "MK266", type: "Main Gun", damage: 500, penetration: 55 },
      { name: "SPIKE-LR II", type: "Missile", damage: 9830, penetration: 750, reload: 10 }
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
    "id": 134,
    "name": "K2 Black Panther",
    "type": "Main Battle Tank",
    "faction": "SouthKorean",
    "tier": "IV",
    image: "K2-Black-Panther.jpg",
    "description": "South Korea’s advanced main battle tank, featuring superior firepower, mobility, armor protection, and state-of-the-art battlefield technology.",
    "stats": {
      "health": 42800,
      "speed": 75,
      "reverseSpeed": 0,
      "turretRotationSpeed": 0,
      "hullRotationSpeed": 40,
      "armor": 600,
      "agility": 0 },
    "weapons": [
      { name: "K276 APFSDS", type: "Main Gun", damage: 11500, penetration: 600 },
      { name: "K279 APFSDS", type: "Main Gun", damage: 11830, penetration: 740 },
      { name: "K280 HEAT-MP", type: "Main Gun", damage: 12450, penetration: 680 },
      { name: "KSTAM", type: "Missile", damage: 9560, penetration: 850, reload: 4.1}
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
    "id": 135,
    "name": "Al-Khalid",
    "type": "Main Battle Tank",
    "faction": "Pakistani",
    "tier": "IV",
    image: "Al-Khalid.jpg",
    "description": "Pakistani main battle tank, jointly developed with China, featuring advanced firepower, mobility, and protection, serving as Pakistan Army’s backbone.",
    "stats": {
      "health": 40800,
      "speed": 70,
      "reverseSpeed": 0,
      "turretRotationSpeed": 0,
      "hullRotationSpeed": 0,
      "armor": 810,
      "agility": 38 },
    "weapons": [
      { name: "DTB-125 HE", type: "Main Gun", damage: 4980, penetration: 83 },
      { name: "DTP-125 HEAT", type: "Main Gun", damage: 12230, penetration: 480 },
      { name: "DTC10-125", type: "Main Gun", damage: 11620, penetration: 680 },
      { name: "TYPE 1985-I", type: "Main Gun", damage: 11120, penetration: 466 },
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
    "id": 136,
    "name": "Arjun Mk.2",
    "type": "Main Battle Tank",
    "faction": "Indian",
    "tier": "IV",
    image: "Arjun-Mk.2.jpg",
    "description": "India’s upgraded battle tank with stronger armor, 120mm missile-firing gun, advanced systems, and better mobility for modern combat.",
    "stats": {
      "health": 46600,
      "speed": 70,
      "reverseSpeed": 0,
      "turretRotationSpeed": 0,
      "hullRotationSpeed": 35,
      "armor": 810,
      "agility": 35 },
    "weapons": [
      { name: "L31A7 HESH", type: "Main Gun", damage: 11500, penetration: 152 },
      { name: "PCD APHE", type: "Main Gun", damage: 12160, penetration: 450 },
      { name: "Mk.II APFSD", type: "Main Gun", damage: 11560, penetration: 650 },
      { name: "LAHAT HEAT", type: "Main Gun", damage: 10250, penetration: 800 },
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
    "id": 137,
    "name": "M10 Booker",
    "type": "Light Tank",
    "faction": "American",
    "tier": "IV",
    image: "M10-Booker.jpg",
    "description": "A mobile assault gun designed to neutralize fortified positions and light armor, featuring a 105mm M35 gun.",
    "stats": {
      "health": 39300,
      "speed": 72,
      "reverseSpeed": 30,
      "turretRotationSpeed": 30,
      "hullRotationSpeed": 35,
      "armor": 350,
      "agility": 30
    },
    "weapons": [
      { name: "M392A2", type: "Main Gun", damage: 9480, penetration: 372 },
      { name: "M393A2", type: "Main Gun", damage: 10340, penetration: 127 },
      { name: "M456A2", type: "Main Gun", damage: 10890, penetration: 400 },
      { name: "M900", type: "Main Gun", damage: 10320, penetration: 582 },
      { name: "SwitchBlade 300", type: "Missile", damage: 6730, penetration: 390, reload: 12.4 }
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
    "id": 138,
    "name": "PL-01",
    "type": "Light Tank",
    "faction": "Polish",
    "tier": "IV",
    image: "PL-01.jpg",
    "description": "A concept stealth tank featuring a 120mm cannon and advanced camouflage systems.",
    "stats": {
      "health": 36100,
      "speed": 85,
      "reverseSpeed": 45,
      "turretRotationSpeed": 40,
      "hullRotationSpeed": 30,
      "armor": 320,
      "agility": 36
    },
    "weapons": [
      { name: "M829A3", type: "Main Gun", damage: 10450, penetration: 670 },
      { name: "M830", type: "Main Gun", damage: 10930, penetration: 800 },
      { name: "MRM-CE", type: "Main Gun", damage: 10000, penetration: 850 },
      { name: "MRM-KE", type: "Main Gun", damage: 9150, penetration: 980 }
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
  "id": 139,
  "name": "M-SHORAD",
  "type": "Anti-Air",
  "faction": "American",
  "tier": "IV",
  image: "M-SHORAD.jpg",
  "description": "Mobile short-range air defense system equipped with autocannons, Stinger missiles, and radar-guided targeting.",
  "stats": {
    "health": 27900,
    "speed": 97,
    "reverseSpeed": 30,
    "turretRotationSpeed": 55,
    "hullRotationSpeed": 50,
    "armor": 250,
    "agility": 55
  },
  "weapons": [
    { name: "M789", type: "Main Gun", damage: 633, penetration: 120 },
 { name: "M799", type: "Main Gun", damage: 743, penetration: 60 },
 { name: "Stinger Launcher", type: "Missile", damage: 6110, penetration: 35, reload: 10 },
 { name: "AGM-114 Hellfire", type: "Missile", damage: 11700, penetration: 950, reload: 10 }
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
  "id": 140,
  "name": "TOS-1A",
  "type": "MLRS",
  "faction": "Russian",
  "tier": "IV",
  image: "TOS-1A.jpg",
  "description": "Heavy flamethrower rocket launcher mounted on a tank chassis, designed for area suppression and destruction of entrenched enemies.",
  "stats": {
    "health": 37100,
    "speed": 60,
    "reverseSpeed": 25,
    "turretRotationSpeed": 20,
    "hullRotationSpeed": 30,
    "armor": 400,
    "agility": 44
  },
  "weapons": [
    { name: "M0.1.01.04 TBC", type: "Missile", damage: 4500, penetration: 260, reload: 24 },
    { name: "M0.1.01.04M INC", type: "Missile", damage: 10500, penetration: 85, reload: 24 }
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
    id: 141,
    name: "M270 MLRS",
    type: "MLRS",
    faction: "American",
    tier: "IV",
    image: "M270-MLRS.jpg",
    description: "Multiple Launch Rocket System capable of delivering devastating area bombardment.",
    stats: { health: 31400, speed: 72, armor: "450mm", agility: 26 },
    weapons: [
      { name: "M31", type: "Guided Rocket", damage: 18225, penetration: 165, reload: 15.7 },
      { name: "M31", type: "Guided Rocket", damage: 15525, penetration: 400, reload: 15.7},
      { name: "G-MLRS-ER", type: "Guided Rocket", damage: 16200, penetration: 250, reload: 15.7 },
      { name: "ATACMS Block I", type: "Missile", damage: 20500, penetration: 200, reload: 20 },
     { name: "ATACMS Block II", type: "Missile", damage: 21250, penetration: 600, reload: 20 }
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
  "id": 142,
  "name": "PLZ-05",
  "type": "SPH",
  "faction": "Chinese",
  "tier": "IV",
  image: "PLZ-05.jpg",
  "description": "Modern 155mm self-propelled howitzer designed for long-range artillery support and rapid deployment.",
  "stats": {
    "health": 31200,
    "speed": 56,
    "reverseSpeed": 16,
    "turretRotationSpeed": 25,
    "hullRotationSpeed": 30,
    "armor": 350,
    "agility": 30
  },
  "weapons": [
    { name: "BEE17A/155", type: "Main Gun", damage: 16875, penetration: 135 },
    { name: "GP155A", type: "Main Gun", damage: 11250, penetration: 200 },
    { name: "GP155B", type: "Main Gun", damage: 10625, penetration: 250 },
    { name: "GP155E", type: "Main Gun", damage: 10250, penetration: 400 }
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
  "id": 143,
  "name": "M109A6 Paladin",
  "type": "SPH",
  "faction": "American",
  "tier": "IV",
  image: "M109A6-Paladin.jpg",
  "description": "Modernized 155mm self-propelled artillery system providing rapid, accurate fire support for ground forces.",
  "stats": {
    "health": 31100,
    "speed": 64,
    "reverseSpeed": 26,
    "turretRotationSpeed": 25,
    "hullRotationSpeed": 30,
    "armor": 350,
    "agility": 28
  },
  "weapons": [
    { name: "M107", type: "Main Gun", damage: 7200, penetration: 112 }

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
  "id": 144,
  "name": "FK 2000",
  "type": "Anti-Air",
  "faction": "Chinese",
  "tier": "IV",
  image: "FK-2000.jpg",
  "description": "Modern Chinese mobile anti-aircraft system with radar-guided missiles and rapid-fire autocannons for air defense.",
  "stats": {
    "health": 35000,
    "speed": 60,
    "reverseSpeed": 60,
    "turretRotationSpeed": 60,
    "hullRotationSpeed": 50,
    "armor": 300,
    "agility": 75
  },
  "weapons": [
   { name: "BZT-30", type: "Main Gun", damage: 500, penetration: 116 },
   { name: "OZT-30", type: "Main Gun", damage: 680, penetration: 56 },
   { name: "FK-2000", type: "Missile", damage: 9720, penetration: 102, reload: 25 }
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
    id: 145,
    name: "Otomatic 76",
    type: "Anti-Air",
    faction: "Italian",
    tier: "IV",
    image: "Otomatic-76.jpg",
    description: "Self-propelled anti-aircraft gun with rapid-fire 76mm cannon.",
    stats: { health: 33700, speed: 62, armor: "380mm", agility: 36 },
    weapons: [
      { name: "76-62 APFSDS", type: "Main Gun", damage: 2340, penetration: 310 },
      { name: "76-62 HE MOM", type: "Main Gun", damage: 1079.230769, penetration: 80 },
      { name: "76-62 SAPOM", type: "Main Gun", damage: 1860, penetration: 160 }
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
  "id": 146,
  "name": "BM-57-2 Kochevnik",
  "type": "Tank Destroyer",
  "faction": "Russian",
  "tier": "IV",
  image: "BM-57-2-Kochevnik.jpg",
  "description": "A modern Russian heavy tank armed with a 125mm smoothbore cannon and multiple defensive systems, built for frontline dominance.",
  "stats": {
    "health": 36200,
    "speed": 75,
    "reverseSpeed": 28,
    "turretRotationSpeed": 45,
    "hullRotationSpeed": 40,
    "armor": 500,
    "agility": 40
  },
  "weapons": [
    { name: "BR-281SP", type: "Main Gun", damage: 1560, penetration: 147 },
    { name: "BR-281U", type: "Main Gun", damage: 1400, penetration: 156 },
    { name: "OR-281", type: "Main Gun", damage: 2106, penetration: 83 },
    { name: "9K135 Kornet", type: "Missile", damage: 10410, penetration: 1000, reload: 12 }

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
  "id": 147,
  "name": "ADATS",
  "type": "Missile Carrier",
  "faction": "American",
  "tier": "IV",
  image: "ADATS.jpg",
  "description": "A mobile air-defense system with radar-guided missiles, protecting forces from aerial threats.",
  "stats": {
    "health": 25500,
    "speed": 66,
    "reverseSpeed": 21,
    "turretRotationSpeed": 45,
    "hullRotationSpeed": 35,
    "armor": 500,
    "agility": 25
  },
  "weapons": [
   { name: "PGU-32U/T", type: "Main Gun", damage: 405, penetration: 115 },
   { name: "M791", type: "Main Gun", damage: 473, penetration: 111 },
   { name: "M792", type: "Main Gun", damage: 608, penetration: 48 },
   { name: "M919", type: "Main Gun", damage: 495, penetration: 140 },
   { name: "MIM-146", type: "Missile", damage: 12120, penetration: 900, reload: 12 }

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
  "id": 148,
  "name": "MGM-166 LOSAT",
  "type": "Missile Carrier",
  "faction": "American",
  "tier": "IV",
  image: "MGM-166.jpg",
  "description": "A U.S. prototype missile, using hypervelocity kinetic energy to destroy heavily armored tanks at range.",
  "stats": {
    "health": 29000,
    "speed": 69,
    "reverseSpeed": 24,
    "turretRotationSpeed": 45,
    "hullRotationSpeed": 35,
    "armor": 500,
    "agility": 41
  },
  "weapons": [
   { name: "LOSAT MGM", type: "Missile", damage: 12740, penetration: 764, reload: 20 }

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
    stats: { health: 28000, speed: 300, verticalSpeed: 19.2, agility: 60 },
    weapons: [
      { name: "B8V20", type: "Air-to-Ground Missile", damage: 5100, penetration: 420, reload: 20 },
      { name: "Attack ATGM", type: "Anti-Tank Missile", damage: 7500, penetration: 850, reload: 30 },
      { name: "9K38 IGLA-V", type: "Short-Range AAM", damage: 4100, penetration: 30, reload: 15 },
      { name: "KAB-250", type: "Air-to-Ground Missile", damage: 14900, penetration: 130, reload: 25 },
      { name: "PZRK Verba", type: "Short-Range AAM", damage: 4300, penetration: 35, reload: 10 },
      { name: "Hermes", type: "Anti-Tank Missile", damage: 11500, penetration: 1000, reload: 35 },
      { name: "9-A-5013", type: "Air-to-Ground Missile", damage: 5100, penetration: 460, reload: 20 },
      { name: "B-13L", type: "Air-to-Ground Missile", damage: 9200, penetration: 160, reload: 40 },
      { name: "Izdeliye 305", type: "Air-to-Ground Missile", damage: 11900, penetration: 250, reload: 16 }
    ],
    guns: [
      { name: "UPK-23-250(23mm)", type: "Rocket Pod", damage: 300, penetration: 70, reload: 1200 },
      { name: "2A42(30mm)", type: "Autocannon", damage: 90, penetration: 85, reload: 300 }
    ],
    modules: {
      engine: [
        { name: "VK-2500P MK1", bonus: "+22 km/h speed" },
        { name: "VK-2500P MK2", bonus: "+44 km/h speed" },
        { name: "VK-2500P MK3", bonus: "+66 km/h speed" }
      ],
      survivability: [
        { name: "Armor Plating MK1", bonus: "+12% protection" },
        { name: "Armor Plating MK2", bonus: "+24% protection" },
        { name: "Armor Plating MK3", bonus: "+36% protection" }
      ],
      avionics: [
        { name: "N025 Radar MK1", bonus: "+18% detection" },
        { name: "N025 Radar MK2", bonus: "+32% detection" },
        { name: "N025 Radar MK3", bonus: "+46% detection" }
      ]
    }
  },
  {
    id: 201,
    name: "WZ-10",
    type: "Helicopter",
    faction: "Chinese",
    tier: "IV",
    image: "WZ-10.jpg",
    description: "Dedicated attack helicopter with tandem-seat configuration and advanced sensors.",
    stats: { health: 20000, speed: 290, verticalSpeed: 20, agility: 60 },
    weapons: [
      { name: "Type 57-1", type: "Rocket Pod", damage: 3700, penetration: 200, reload: 15 },
      { name: "HJ-10", type: "Anti-Tank Missile", damage: 13800, penetration: 1400, reload: 30 },
      { name: "TG-250", type: "Air-to-Ground Missile", damage: 14600, penetration: 120, reload: 20 },
      { name: "FS-70", type: "Rocket Pod", damage: 4200, penetration: 290, reload: 20 },
      { name: "TY-90", type: "Short-Range AAM", damage: 4600, penetration: 30, reload: 10 },
      { name: "AKD-9", type: "Air-to-Ground Missile", damage: 8000, penetration: 800, reload: 15 },
      { name: "BA-21", type: "Air-to-Ground Missile", damage: 8300, penetration: 1400, reload: 38 },
      { name: "CM501XA", type: "Air-to-Ground Missile", damage: 6900, penetration: 800, reload: 16 },
      { name: "CM-502KG", type: "Air-to-Ground Missile", damage: 7800, penetration: 1000, reload: 28 }
    ],
    guns: [
      { name: "Type 23 L(23mm)", type: "Autocannon", damage: 80, penetration: 70, reload: 180 }
    ],
    modules: {
      engine: [
        { name: "WZ-9 Turboshaft MK1", bonus: "+20 km/h speed" },
        { name: "WZ-9 Turboshaft MK2", bonus: "+40 km/h speed" },
        { name: "WZ-9 Turboshaft MK3", bonus: "+60 km/h speed" }
      ],
      survivability: [
        { name: "Composite Armor MK1", bonus: "+10% protection" },
        { name: "Composite Armor MK2", bonus: "+20% protection" },
        { name: "Composite Armor MK3", bonus: "+30% protection" }
      ],
      avionics: [
        { name: "Millimeter Wave Radar MK1", bonus: "+16% detection" },
        { name: "Millimeter Wave Radar MK2", bonus: "+28% detection" },
        { name: "Millimeter Wave Radar MK3", bonus: "+40% detection" }
      ]
    }
  },
  {
    id: 202,
    name: "Z-19E",
    type: "Helicopter",
    faction: "Chinese",
    tier: "IV",
    image: "Z-19E.png",
    description: "Light attack and reconnaissance helicopter with stealth characteristics.",
    stats: { health: 19000, speed: 280, verticalSpeed: 19.4, agility: 55 },
    weapons: [
      { name: "TY-90", type: "Short-Range AAM", damage: 4600, penetration: 30, reload: 10 },
      { name: "AKD-9", type: "Air-to-Ground Missile", damage: 8000, penetration: 800, reload: 15 },
      { name: "HJ-10", type: "Anti-Tank Missile", damage: 13800, penetration: 1400, reload: 30 },
      { name: "TL-12", type: "Air-to-Ground Missile", damage: 10500, penetration: 870, reload: 14200 },
      { name: "BA-21", type: "Air-to-Ground Missile", damage: 8300, penetration: 1400, reload: 38 },
      { name: "AKD-10", type: "Air-to-Ground Missile", damage: 8600, penetration: 1400, reload: 20 },
      { name: "FS-70", type: "Rocket Pod", damage: 4200, penetration: 290, reload: 20 },
      { name: "CM-502KG", type: "Air-to-Ground Missile", damage: 7800, penetration: 1000, reload: 28 }
    ],
    guns: [
      { name: "QJK99(12.7mm)", type: "Heavy MG", damage: 50, penetration: 40, reload: 100 }
    ],
    modules: {
      engine: [
        { name: "WZ-8C Turboshaft MK1", bonus: "+18 km/h speed" },
        { name: "WZ-8C Turboshaft MK2", bonus: "+36 km/h speed" },
        { name: "WZ-8C Turboshaft MK3", bonus: "+54 km/h speed" }
      ],
      survivability: [
        { name: "Stealth Features MK1", bonus: "+12% evasion" },
        { name: "Stealth Features MK2", bonus: "+22% evasion" },
        { name: "Stealth Features MK3", bonus: "+32% evasion" }
      ],
      avionics: [
        { name: "EO/IR System MK1", bonus: "+14% detection" },
        { name: "EO/IR System MK2", bonus: "+26% detection" },
        { name: "EO/IR System MK3", bonus: "+38% detection" }
      ]
    }
  },
  {
    id: 203,
    name: "Ka-58 Black Ghost",
    type: "Helicopter",
    faction: "Russian",
    tier: "IV",
    image: "Ka-58-Black-Ghost.jpg",
    description: "Stealth attack helicopter with advanced composite materials and reduced signature.",
    stats: { health: 28000, speed: 330, verticalSpeed: 21.7, agility: 65 },
    weapons: [
      { name: "B-13L", type: "Air-to-Ground Missile", damage: 9200, penetration: 160, reload: 40 },
      { name: "Izdeliye 305", type: "Air-to-Ground Missile", damage: 11900, penetration: 250, reload: 16 },
      { name: "Hermes", type: "Anti-Tank Missile", damage: 11500, penetration: 1000, reload: 35 },
      { name: "KAB500KR", type: "Air-to-Ground Missile", damage: 17800, penetration: 320, reload: 40 },
      { name: "RVV-SD", type: "Medium-Range AAM", damage: 6500, penetration: 65, reload: 20 },
      { name: "9M120 Attack", type: "Anti-Tank Missile", damage: 7500, penetration: 850, reload: 25 },
      { name: "B8V20", type: "Air-to-Ground Missile", damage: 5100, penetration: 420, reload: 20 },
      { name: "KAB-250", type: "Air-to-Ground Missile", damage: 14900, penetration: 130, reload: 25 },
      { name: "R-93M", type: "Short-Range AAM", damage: 5000, penetration: 65, reload: 15 }
    ],
    guns: [
      { name: "UPK-23-250(23mm)", type: "Rocket Pod", damage: 300, penetration: 70, reload: 1200 },
      { name: "GSh-30-2(30mm)", type: "Autocannon", damage: 95, penetration: 90, reload: 280 }
    ],
    modules: {
      engine: [
        { name: "VK-2500M MK1", bonus: "+28 km/h speed" },
        { name: "VK-2500M MK2", bonus: "+56 km/h speed" },
        { name: "VK-2500M MK3", bonus: "+84 km/h speed" }
      ],
      survivability: [
        { name: "Stealth Coating MK1", bonus: "+18% evasion" },
        { name: "Stealth Coating MK2", bonus: "+32% evasion" },
        { name: "Stealth Coating MK3", bonus: "+46% evasion" }
      ],
      avionics: [
        { name: "Advanced Radar MK1", bonus: "+22% detection" },
        { name: "Advanced Radar MK2", bonus: "+38% detection" },
        { name: "Advanced Radar MK3", bonus: "+54% detection" }
      ]
    }
  },
  {
    id: 204,
    name: "SB-1",
    type: "Helicopter",
    faction: "American",
    tier: "IV",
    image: "SB-1.jpg",
    description: "High-speed American compound helicopter with heavy firepower including Storm Shadow missiles in MWT.",
    stats: { health: 26000, speed: 500, verticalSpeed: 25, agility: 75 },
    weapons: [
      { name: "Storm Shadow", type: "Cruise Missile", damage: 20000, penetration: 370, reload: 40 },
      { name: "AGM-114 Hellfire", type: "Air-to-Ground Missile", damage: 9000, penetration: 950, reload: 30 },
      { name: "LAU-61", type: "Rocket Pod", damage: 4100, penetration: 290, reload: 20 },
      { name: "AIM-9 Sidewinder", type: "Short-Range AAM", damage: 5700, penetration: 45, reload: 15 },
      { name: "AIM-92", type: "Short-Range AAM", damage: 4700, penetration: 35, reload: 10 },
      { name: "Brimstone", type: "Air-to-Ground Missile", damage: 8100, penetration: 800, reload: 20 },
      { name: "ADS STARSTREAK", type: "Air-to-Ground Missile", damage: 7300, penetration: 50, reload: 15 },
      { name: "LAU-10", type: "Rocket Pod", damage: 7400, penetration: 500, reload: 30 },
      { name: "LAU-150", type: "Rocket Pod", damage: 7800, penetration: 600, reload: 40 }
    ],
    guns: [
      { name: "M230(30mm)", type: "Autocannon", damage: 90, penetration: 85, reload: 300 }
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
    stats: { health: 26000, speed: 300, verticalSpeed: 20.6, agility: 65 },
    weapons: [
      { name: "9K38 IGLA-V", type: "Short-Range AAM", damage: 4100, penetration: 30, reload: 15 },
      { name: "9K121 Vikhr", type: "Anti-Tank Missile", damage: 7800, penetration: 1000, reload: 30 },
      { name: "Attack ATGM", type: "Anti-Tank Missile", damage: 7500, penetration: 850, reload: 30 },
      { name: "KAB-250", type: "Air-to-Ground Missile", damage: 14900, penetration: 130, reload: 25 },
      { name: "B8V20", type: "Air-to-Ground Missile", damage: 5100, penetration: 420, reload: 20 },
      { name: "PZRK Verba", type: "Short-Range AAM", damage: 4300, penetration: 35, reload: 10 },
      { name: "9-A-5013", type: "Air-to-Ground Missile", damage: 5100, penetration: 460, reload: 20 },
      { name: "Kh-25MLE", type: "Air-to-Ground Missile", damage: 16000, penetration: 160, reload: 35 },
      { name: "B-13L", type: "Air-to-Ground Missile", damage: 9200, penetration: 160, reload: 40 }
    ],
    guns: [
      { name: "2A42(30mm)", type: "Autocannon", damage: 90, penetration: 85, reload: 300 },
      { name: "UPK-23-250(23mm)", type: "Rocket Pod", damage: 300, penetration: 70, reload: 1200 }
    ],
    modules: {
      engine: [
        { name: "VK-2500 MK1", bonus: "+25 km/h speed" },
        { name: "VK-2500 MK2", bonus: "+50 km/h speed" },
        { name: "VK-2500 MK3", bonus: "+75 km/h speed" }
      ],
      survivability: [
        { name: "Chaff/Flare MK1", bonus: "+12% evasion" },
        { name: "Chaff/Flare MK2", bonus: "+24% evasion" },
        { name: "Chaff/Flare MK3", bonus: "+36% evasion" }
      ],
      avionics: [
        { name: "Arbalet Radar MK1", bonus: "+18% detection" },
        { name: "Arbalet Radar MK2", bonus: "+32% detection" },
        { name: "Arbalet Radar MK3", bonus: "+46% detection" }
      ]
    }
  },
  {
    id: 206,
    name: "AH-84",
    type: "Helicopter",
    faction: "American",
    tier: "IV",
    image: "AH-84.jpg",
    description: "Next-generation attack helicopter with stealth features and advanced weapons.",
    stats: { health: 18000, speed: 320, verticalSpeed: 22.2, agility: 65 },
    weapons: [
      { name: "LAU-61", type: "Rocket Pod", damage: 4100, penetration: 290, reload: 20 },
      { name: "LAU-10", type: "Rocket Pod", damage: 7400, penetration: 500, reload: 30 },
      { name: "AIM-92", type: "Short-Range AAM", damage: 4700, penetration: 35, reload: 10 },
      { name: "LAU-150", type: "Rocket Pod", damage: 7800, penetration: 600, reload: 40 },
      { name: "ADS STARSTREAK", type: "Air-to-Ground Missile", damage: 7300, penetration: 50, reload: 15 },
      { name: "AIM-9 Sidewinder", type: "Short-Range AAM", damage: 5700, penetration: 45, reload: 15 },
      { name: "AGR-20 BLR", type: "Rocket Pod", damage: 5200, penetration: 128, reload: 20 },
      { name: "AGM-65 Maverick", type: "Air-to-Ground Missile", damage: 11000, penetration: 830, reload: 22 },
      { name: "AGM-114 Hellfire", type: "Air-to-Ground Missile", damage: 9000, penetration: 950, reload: 30 },
      { name: "Brimstone", type: "Air-to-Ground Missile", damage: 8100, penetration: 800, reload: 20 }
    ],
    guns: [
      { name: "XM915(20mm)", type: "Autocannon", damage: 70, penetration: 60, reload: 220 }
    ],
    modules: {
      engine: [
        { name: "T901 Turboshaft MK1", bonus: "+25 km/h speed" },
        { name: "T901 Turboshaft MK2", bonus: "+50 km/h speed" },
        { name: "T901 Turboshaft MK3", bonus: "+75 km/h speed" }
      ],
      survivability: [
        { name: "Stealth Coating MK1", bonus: "+15% evasion" },
        { name: "Stealth Coating MK2", bonus: "+28% evasion" },
        { name: "Stealth Coating MK3", bonus: "+40% evasion" }
      ],
      avionics: [
        { name: "MTADS/PNVS MK1", bonus: "+20% detection" },
        { name: "MTADS/PNVS MK2", bonus: "+35% detection" },
        { name: "MTADS/PNVS MK3", bonus: "+50% detection" }
      ]
    }
  },
  {
  id: 300,
  name: "Mitsubishi F-2B",
  type: "Fighter Jet",
  faction: "Japanese",
  tier: "III",
  image: "Mitsubishi-F-2B.jpg",
  description: "Multirole fighter developed from the F-16, optimized for anti-ship and air-to-air roles.",
  stats: { health: 20400, speed: 550, afterburnerSpeed: 2210, agility: 49 },
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
    stats: { health: 17500, speed: 790, afterburnerSpeed: 2178, agility: 48 },
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
  stats: { health: 18100, speed: 810, afterburnerSpeed: 1730, agility: 41 },
  weapons: [
      { name: "LAU-61", type: "Rocket Pod", damage: 4100, penetration: 290, reload: 20 },
      { "name": "GBU-32", "type": "Guided Bomb", "damage": 15700, "penetration": 200, "reload": 35 },
      { "name": "GBU-12", "type": "Guided Bomb", "damage": 18590, "penetration": 120, "reload": 30 },
      { name: "AIM-7", type: "Medium-Range AAM", damage: 6200, penetration: 65, reload: 20 },
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
  stats: { health: 21300, speed: 780, afterburnerSpeed: 2030, agility: 43 },
  weapons: [
    { "name": "FT-3", "type": "Air-to-Ground Missile", "damage": 15800, "penetration": 210, "reload": 34 },
      { "name": "LS-6/250", "type": "Guided Bomb", "damage": 17300, "penetration": 300, "reload": 40 },
      { "name": "KD-88", "type": "Air-to-Ground Missile", "damage": 16200, "penetration": 170, "reload": 36 },
      { "name": "PL-10", "type": "Short-Range Air-to-Air Missile", "damage": 7400, "penetration": 60, "reload": 20 },
      { "name": "PL-12", "type": "BVR AAM", "damage": 7600, "penetration": 56, "reload": 30 },
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
  stats: { health: 21700, speed: 800, afterburnerSpeed: 2250, agility: 48 },
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
  stats: { health: 21000, speed: 750, afterburnerSpeed: 860, agility: 43 },
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
  stats: { health: 24400, speed: 880, afterburnerSpeed: 2250, agility: 49 },
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
  stats: { health: 23500, speed: 860, afterburnerSpeed: 2070, agility: 49 },
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
  stats: { health: 18400, speed: 800, afterburnerSpeed: 2250, agility: 43 },
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
  name: "F-15SE Silent Eagle",
  type: "Fighter Jet",
  faction: "American",
  tier: "III",
  image: "F-15EX-Eagle-II.jpg",
  description: "advanced variant of the F-15 Strike Eagle with modern avionics and stealth characteristics.",
  stats: { health: 19800, speed: 780, afterburnerSpeed: 2390, agility: 43 },
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
  image: "Su-35S.png",
  description: "Highly maneuverable 4++ generation multirole fighter with thrust vectoring engines and powerful radar.",
  stats: { health: 24400, speed: 880, afterburnerSpeed: 2250, agility: 49 },
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
    stats: { health: 27600, speed: 560, afterburnerSpeed: 760, agility: 48 },
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
    stats: { health: 39200, speed: 72, armor: "800mm", agility: 32 },
    weapons: [
      { name: "DM12", type: "Main Gun", damage: 12100, penetration: 480 },
      { name: "DM13", type: "Main Gun", damage: 9800, penetration: 393 },
      { name: "DM23", type: "Main Gun", damage: 38911, penetration: 337 }

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
    stats: { health: 37500, speed: 60, armor: "750mm", agility: 44 },
    weapons: [
      { name: "3BM22", type: "Main Gun", damage: 11100, penetration: 425 },
      { name: "30F26", type: "Main Gun", damage: 5000, penetration: 92 },
      { name: "9M119", type: "Main Gun", damage: 10160, penetration: 750 },
      { name: "3BM42", type: "Main Gun", damage: 11700, penetration: 720 },
      { name: "3BK12M", type: "Main Gun", damage: 12140, penetration: 440 }
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
    "stats": { "health": 38400, "speed": 69, "armor": "900mm", "agility": 36 },
    "weapons": [
      { name: "M829", type: "Main Gun", damage: 9020, penetration: 490 },
      { name: "M830", type: "Main Gun", damage: 10930, penetration: 800 },
      { name: "AMP", type: "Main Gun", damage: 11070, penetration: 200 },
      { name: "M829A1", type: "Main Gun", damage: 9520, penetration: 630 }
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
    "stats": { "health": 37200, "speed": 65, "armor": "800mm", "agility": 30 },
    "weapons": [
      { name: "XM578E1", type: "Main Gun", damage: 10400, penetration: 285 },
      { name: "M657A2", type: "Main Gun", damage: 13500, penetration: 138 },
      { name: "MGM51 Shillelagh", type: "Main Gun", damage: 9500, penetration: 431 },
      { name: "M657A2", type: "Main Gun", damage: 11300, penetration: 380 }

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
    "stats": { "health": 38200, "speed": 60, "armor": "820mm", "agility": 40 },
    "weapons": [
      { name: "3BM22", type: "Main Gun", damage: 11100, penetration: 425 },
      { name: "30F26", type: "Main Gun", damage: 5000, penetration: 92 },
      { name: "9M119", type: "Main Gun", damage: 10160, penetration: 750 },
      { name: "3BM42", type: "Main Gun", damage: 11700, penetration: 720 },
      { name: "3BK12M", type: "Main Gun", damage: 12140, penetration: 440 }
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
    "stats": { "health": 36700, "speed": 55, "armor": "800mm", "agility": 45 },
    "weapons": [
      { name: "3BM42", type: "Main Gun", damage: 11700, penetration: 720 },
      { name: "9M112", type: "Main Gun", damage: 10070, penetration: 700 },
      { name: "30F26", type: "Main Gun", damage: 5000, penetration: 92 },
      { name: "3BK18M", type: "Main Gun", damage: 12390, penetration: 550 }
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
    "stats": { "health": 37000, "speed": 55, "armor": "720mm", "agility": 40 },
    "weapons": [
      { name: "JM33", type: "Main Gun", damage: 11330, penetration: 481 },
      { name: "JM12A1", type: "Main Gun", damage: 12360, penetration: 480 },
      { name: "Type 10", type: "Main Gun", damage: 2920, penetration: 650 }
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
    "name": "M60A3 (MZK)",
    "type": "Main Battle Tank",
    "faction": "Turkish",
    "tier": "III",
    image: "M60A3-(MZK).jpg",
    "description": "Improved export variant of ZTZ96 with enhanced protection and gun systems.",
    "stats": { "health": 39100, "speed": 55, "armor": "770mm", "agility": 36 },
    "weapons": [
      { name: "DM12 HEAT", type: "Main Gun", damage: 10630, penetration: 400 },
      { name: "DM512 HESH", type: "Main Gun", damage: 10090, penetration: 127 },
      { name: "DM23 APFSDS", type: "Main Gun", damage: 9630, penetration: 337 },
      { name: "DM33 APFSDS", type: "Main Gun", damage: 9940, penetration: 508 }
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
    "id": 408,
    "name": "ZTZ85-II",
    "type": "Main Battle Tank",
    "faction": "Chinese",
    "tier": "III",
    image: "ZTZ85-II.jpg",
    "description": "Chinese upgrade of Type 85 tank with improved armor and firepower.",
    "stats": { "health": 35200, "speed": 57, "armor": "700mm", "agility": 38 },
    "weapons": [
      { name: "125-I", type: "Main Gun", damage: 9020, penetration: 465 },
      { name: "DTB125", type: "Main Gun", damage: 4300, penetration: 160 },
      { name: "DTP-125", type: "Main Gun", damage: 9430, penetration: 480 },
      { name: "DTC10-125", type: "Main Gun", damage: 8800, penetration: 680 }
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
    "id": 409,
    "name": "ZTZ96",
    "type": "Main Battle Tank",
    "faction": "Chinese",
    "tier": "III",
    image: "ZTZ96.jpg",
    "description": "Modern Chinese MBT with 125mm smoothbore and composite armor.",
    "stats": { "health": 36500, "speed": 24, "armor": "750mm", "agility": 34 },
    "weapons": [
      { name: "125-I", type: "Main Gun", damage: 9020, penetration: 465 },
      { name: "DTB125", type: "Main Gun", damage: 4300, penetration: 160 },
      { name: "DTP-125", type: "Main Gun", damage: 9430, penetration: 480 },
      { name: "DTC10-125", type: "Main Gun", damage: 8800, penetration: 680 }
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
    "id": 410,
    "name": "ZTZ-96A (P)",
    "type": "Main Battle Tank",
    "faction": "Chinese",
    "tier": "III",
    image: "ZTZ-96A-(P).jpg",
    "description": "Improved export variant of ZTZ96 with enhanced protection and gun systems.",
    "stats": { "health": 36900, "speed": 24, "armor": "770mm", "agility": 34 },
    "weapons": [
      { name: "DTB125", type: "Main Gun", damage: 4300, penetration: 160 },
      { name: "DTP-125", type: "Main Gun", damage: 9430, penetration: 480 },
      { name: "Type1985 I", type: "Main Gun", damage: 10220, penetration: 466 },
      { name: "GP125", type: "Main Gun", damage: 9120, penetration: 650 }
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
    "id": 411,
    "name": "AMX-30 Super",
    "type": "Main Battle Tank",
    "faction": "French",
    "tier": "III",
    image: "AMX-30-Super.jpg",
    "description": "French Main Battle Tank featuring improved armor, a powerfull 105mm gun and control system",
    "stats": { "health": 36000, "speed": 65, "armor": "770mm", "agility": 42 },
    "weapons": [
      { name: "OF 105 F1 APFSDS", type: "Main Gun", damage: 9910, penetration: 361 },
      { name: "OE 105 F1 HEI", type: "Main Gun", damage: 4500, penetration: 55 },
      { name: "OCC 105 F1 HEAT", type: "Main Gun", damage: 10790, penetration: 350 },
      { name: "OF 105 F2 APFSDS", type: "Main Gun", damage: 10090, penetration: 459 },
     
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
    id: 412,
    name: "Merkava Mk.3",
    type: "Main Battle Tank",
    faction: "Israeli",
    tier: "III",
    description: "An Israeli MBT featuring modular armor, advanced fire control, 120mm gun, and rear troop compartment.",
    image: "Merkava-Mk.3.jpg",
    stats: { health: 0, speed: 0, armor: "0", agility: 0 },
    weapons: [
      { name: "3BM22", type: "Main Gun", damage: 11100, penetration: 425 },
      { name: "30F26", type: "Main Gun", damage: 5000, penetration: 92 },
      { name: "9M119", type: "Main Gun", damage: 10160, penetration: 750 },
      { name: "3BM42", type: "Main Gun", damage: 11700, penetration: 720 },
      { name: "3BK12M", type: "Main Gun", damage: 12140, penetration: 440 }
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
    "id": 412,
    "name": "PLZ-07B",
    "type": "SPH",
    "faction": "Chinese",
    "tier": "III",
    image: "PLZ-07B.jpg",
    "description": "Chinese 155mm self-propelled howitzer with high mobility and firepower.",
    "stats": { "health": 26000, "speed": 59, "armor": "200mm", "agility": 35 },
    "weapons": [
      { name: "GP120A", type: "Main Gun", damage: 8100, penetration: 240 },
      { name: "GP120B", type: "Main Gun", damage: 7400, penetration: 480 },
      { name: "3OF56", type: "Main Gun", damage: 12200, penetration: 120 },
      { name: "ZBP1", type: "Main Gun", damage: 10450, penetration: 400 }
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
    "id": 413,
    "name": "M110A2",
    "type": "SPH",
    "faction": "Japanese",
    "tier": "III",
    image: "M110A2.jpg",
    "description": "American 203mm self-propelled artillery for heavy bombardment.",
    "stats": { "health": 27800, "speed": 63, "armor": "150mm", "agility": 36 },
    "weapons": [
      { name: "M106", type: "Main Gun", damage: 10600, penetration: 152 },
      { name: "M650", type: "Main Gun", damage: 11700, penetration: 185 },
      { name: "M404", type: "Main Gun", damage: 9500, penetration: 120 }
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
    "id": 414,
    "name": "2S31 Vena",
    "type": "SPH",
    "faction": "Russian",
    "tier": "III",
    image: "2S31-Vena.jpg",
    "description": "Russian 120mm mortar howitzer on tracked chassis.",
    "stats": { "health": 23500, "speed": 79, "armor": "180mm", "agility": 42 },
    "weapons": [
      { name: "ZVOF110", type: "Main Gun", damage: 11500, penetration: 120 },
      { name: "KM-8 Gran", type: "Main Gun", damage: 7000, penetration: 180 },
      { name: "3BO34", type: "Main Gun", damage: 9800, penetration: 240 },
      { name: "Kitolov 2M", type: "Main Gun", damage: 5100, penetration: 280 }
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
    "id": 415,
    "name": "XM2001 Crusader",
    "type": "SPH",
    "faction": "American",
    "tier": "III",
    image: "XM2001-Crusader.jpg",
    "description": "Experimental 155mm self-propelled howitzer with automatic loading.",
    "stats": { "health": 34800, "speed": 67, "armor": "200mm", "agility": 38 },
    "weapons": [
      { name: "M982 HEDP", type: "Main Gun", damage: 6600, penetration: 280 },
      { name: "M795 HE", type: "Main Gun", damage: 12700, penetration: 950 },
      { name: "M267A2 HEAT", type: "Main Gun", damage: 8900, penetration: 135 },
      { name: "M864 CH", type: "Main Gun", damage: 8000, penetration: 85 }
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
    "id": 416,
    "name": "Gepard 1A2",
    "type": "Anti-Air",
    "faction": "German",
    "tier": "III",
    image: "Gepard-1A2.jpg",
    "description": "German SPAAG with twin 35mm Oerlikon cannons and radar-guided fire control.",
    "stats": { "health": 28900, "speed": 65, "armor": "35mm", "agility": 30 },
    "weapons": [
       { name: "25 x 228 API", type: "Main Gun", damage: 580, penetration: 75 },
       { name: "25 x 228 HEI", type: "Main Gun", damage: 300, penetration: 59 },
       { name: "35 x 228 APDS", type: "Main Gun", damage: 610, penetration: 127 },
       { name: "Fliegerfaust 2 Stinger", type: "Missile", damage: 4210, penetration: 60, reload: 12 }
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
    "id": 418,
    "name": "K-31 Cheonma",
    "type": "Anti-Air",
    "faction": "SouthKorean",
    "tier": "III",
    image: "K-31-Cheonma.jpg",
    "description": "Korean SPAAG with 30mm cannons and short-range SAM missiles.",
    "stats": { "health": 23100, "speed": 60, "armor": "25mm", "agility": 35 },
    "weapons": [
      { name: "Crotale-NG-Launcher", type: "Missile", damage: 5790, penetration: 58, reload: 12 },
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
    "id": 419,
    "name": "PGZ-09",
    "type": "Anti-Air",
    "faction": "Chinese",
    "tier": "III",
    image: "PGZ-09.jpg",
    "description": "Tracked Chinese self-propelled AA, twin 35mm guns, light armor, medium mobility, excels against helicopters and low-flying aircraft.",
    "stats": { "health": 25500, "speed": 60, "armor": "30mm", "agility": 30 },
    "weapons": [
      { name: "DKG01A", type: "Main Gun", damage: 270, penetration: 59 },
      { name: "DKP01A", type: "Main Gun", damage: 500, penetration: 75 },
      { name: "DM23", type: "Main Gun", damage: 530, penetration: 127 },
      { name: "PMD062", type: "Main Gun", damage: 290, penetration: 59 }
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
    "id": 420,
    "name": "2S6M1 Tunguska-M1",
    "type": "Anti-Air",
    "faction": "Russian",
    "tier": "III",
    image: "2S6M1-Tunguska-M1.jpg",
    "description": "Russian SPAAG with twin 30mm cannons and 9M311 SAM missiles.",
    "stats": { "health": 25000, "speed": 65, "armor": 35, "agility": 35 },
    "weapons": [
      { name: "3UBR6", type: "Main Gun", damage: 560, penetration: 71 },
      { name: "30F8", type: "Main Gun", damage: 675, penetration: 50 },
      { name: "3UBR8", type: "Main Gun", damage: 590, penetration: 165 },
      { name: "ZUR 9M311", type: "Missile", damage: 8100, penetration: 69, reload: 24 }
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
    "id": 421,
    "name": "Type 625E SHORAD",
    "type": "Anti-Air",
    "faction": "Chinese",
    "tier": "III",
    image: "Type-625E-SHORAD.jpg",
    "description": "Chinese short-range air defense vehicle with 25mm cannons and SAM missiles.",
    "stats": { "health": 22000, "speed": 100, "armor": "25mm", "agility": 60 },
    "weapons": [
      { name: "30*160 APFSDS", type: "Main Gun", damage: 0, penetration: 128 },
      { name: "30*160 HEI", type: "Main Gun", damage: 351, penetration: 60 },
      { name: "FB-10A", type: "Missile", damage: 4800, penetration: 55, reload: 15 },
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
    "name": "XM975",
    "type": "Anti-Air",
    "faction": "American",
    "tier": "III",
    image: "XM975.jpg",
    "description": "US SPAAG with 20mm Vulcan cannon and Stinger SAM missiles.",
    "stats": { "health": 23500, "speed": 57, "armor": "40mm", "agility": 30 },
    "weapons": [
      { name: "SAM Rokand", type: "Missile", damage: 8910, penetration: 85, reload: 6 }
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
    "id": 423,
    "name": "AFT-10",
    "type": "Anti-Air",
    "faction": "Chinese",
    "tier": "III",
    image: "AFT-10.jpg",
    "description": "Modern armored combat vehicle with high mobility, HJ-10 Missiles, advanced targeting, versatile for battlefield assaults and defense operationsand",
    "stats": { "health": 26000, "speed": 70, "armor": "30mm", "agility": 40 },
    "weapons": [
      { name: "HJ-10", type: "Missile", damage: 12558, penetration: 1400, reload: 13 }
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
    "id": 424,
    "name": "M113 Hellfire",
    "type": "Missile Carrier",
    "faction": "American",
    "tier": "III",
    image: "M113-Hellfire.jpg",
    "description": "M113 variant carrying AGM-114 Hellfire missiles for ground and air targets.",
    "stats": { "health": 24500, "speed": 62, "armor": "25mm", "agility": 35 },
    "weapons": [
      { name: "ATGMs ARL", type: "Missile", damage: 9000, penetration: 950, reload: 10 },
      { name: "ATGMs Laser", type: "Missile", damage: 10900, penetration: 1000, reload: 10 },
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
    "id": 425,
    "name": "9A52-2 Smerch",
    "type": "MLRS",
    "faction": "Russian",
    "tier": "III",
    image: "9A52-2-Smerch.jpg",
    "description": "Heavy Russian MLRS with 300mm rockets for long-range bombardment.",
    "stats": { "health": 26000, "speed": 60, "armor": "25mm", "agility": 23 },
    "weapons": [
      { name: "9M542 HE", type: "Missile", damage: 18000, penetration: 120, reload: 16 },
      { name: "9M530 HESH", type: "Missile", damage: 16600, penetration: 300, reload: 16 },
      { name: "9M55K5 CH", type: "Missile", damage: 17100, penetration: 460, reload: 16 }
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
    "id": 426,
    "name": "Type 89 MLRS",
    "type": "MLRS",
    "faction": "Chinese",
    "tier": "III",
    image: "Type-89-MLRS.jpg",
    "description": "Japanese 300mm MLRS for long-range artillery strikes.",
    "stats": { "health": 24500, "speed": 55, "armor": "25mm", "agility": 36 },
    "weapons": [
      { name: "Type 81 FSBS", type: "Missile", damage: 11900, penetration: 165, reload: 20 },
      { name: "Type 81 FFBE", type: "Missile", damage: 10600, penetration: 220, reload: 20 },
      { name: "Type 81", type: "Missile", damage: 9350, penetration: 260, reload: 20 }
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
    "id": 427,
    "name": "Type 75 MLRS",
    "type": "MLRS",
    "faction": "Japanese",
    "tier": "III",
    image: "Type-75-MLRS.jpg",
    "description": "Japanese 300mm MLRS for long-range artillery strikes.",
    "stats": { "health": 22800, "speed": 51, "armor": "30mm", "agility": 35.5 },
    "weapons": [
      { name: "Type 75 HE", type: "Missile", damage: 5700, penetration: 85, reload: 30 },
      { name: "Type 75 mod 2 HEAT", type: "Missile", damage: 10300, penetration: 350, reload: 30 },
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
    "id": 428,
    "name": "AFT-09",
    "type": "Anti-Air",
    "faction": "Chinese",
    "tier": "III",
    image: "AFT-09.jpg",
    "description": "Mobile missile tank with reinforced armor, launches guided missiles, excels in long-range strikes, tactical support, and battlefield versatility.",
    "stats": { "health": 23000, "speed": 96, "armor": "30mm", "agility": 40 },
    "weapons": [
      { name: "ATGM HJ-9", type: "Missile", damage: 10192, penetration: 1200, reload: 6 }
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
    "id": 429,
    "name": "LAV-600",
    "type": "Tank Destroyer",
    "faction": "American",
    "tier": "III",
    image: "LAV-600.jpg",
    "description": "Armored wheeled vehicle equipped with short-range missiles and machine guns.",
    "stats": { "health": 24000, "speed": 95, "armor": "20mm", "agility": 27 },
    "weapons": [
      { name: "M392", type: "Main Gun", damage: 8295, penetration: 350 },
      { name: "M393", type: "Main Gun", damage: 11800, penetration: 127 },
      { name: "M456", type: "Main Gun", damage: 9800, penetration: 400 },
      { name: "M833", type: "Main Gun", damage: 9900, penetration: 472 }
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
    "name": "HSTV-L",
    "type": "Light Tank",
    "faction": "American",
    "tier": "III",
    image: "HSTV-L.jpg",
    "description": "A lightweight prototype tank, emphasizing mobility, advanced optics, and rapid firepower.",
    "stats": { "health": 26000, "speed": 84, "armor": "47mm", "agility": 40 },
    "weapons": [
     { name: "XM855HE", type: "Main Gun", damage: 7560, penetration: 68 },
     { name: "XM885AP", type: "Main Gun", damage: 6160, penetration: 370 }
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
    "id": 431,
    "name": "K21 KNIFV",
    "type": "Light Tank",
    "faction": "SouthKorean",
    "tier": "III",
    image: "K21-KNIFV.jpg",
    "description": "South Korean infantry fighting vehicle, offering strong firepower, amphibious capability, protection, and advanced digital battlefield systems.",
    "stats": { "health": 35900, "speed": 76 , "armor": 50, "agility": 42 },
    "weapons": [
     { name: "K237 APFSDS", type: "Main Gun", damage: 1490, penetration: 200 },
     { name: "K236 HEI", type: "Main Gun", damage: 770, penetration: 74 },
     { name: "K219 AP", type: "Main Gun", damage: 1340, penetration: 147 },
     { name: "K216 HEI", type: "Main Gun", damage: 690, penetration: 68 },
     { name: "Spike-LR2", type: "Missile", damage: 10090, penetration: 900, reload: 10 },
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
    "id": 432,
    "name": "Rookiat MTTD",
    "type": "Light Tank",
    "faction": "British",
    "tier": "III",
    image: "Rookiat-MTTD.jpg",
    "description": "The Rooikat MTTD is a fast, wheeled tank destroyer with strong firepower.",
    "stats": { "health": 27200, "speed": 120, "armor": "40mm", "agility": 28 },
    "weapons": [
    { name: "DM23", type: "Main Gun", damage: 8911, penetration: 337 },
    { name: "DM33", type: "Main Gun", damage: 10060, penetration: 508 },
    { name: "DM12", type: "Main Gun", damage: 12100, penetration: 480 },
    { name: "DM512", type: "Main Gun", damage: 10210, penetration: 127 }

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
    "id": 433,
    "name": "ZBL-08",
    "type": "Light Tank",
    "faction": "Chinese",
    "tier": "III",
    image: "ZBL-08.jpg.png",
    "description": "Wheeled armored personnel carrier with good mobility, moderate armor, versatile weapon options.",
    "stats": { "health": 26900, "speed": 111, "armor": "40mm", "agility": 64 },
    "weapons": [
      { name: "ZUBR6 APBC", type: "Main Gun", damage: 540, penetration: 112 },
      { name: "Z0F8", type: "Main Gun", damage: 675, penetration: 50 },
      { name: "ZUBR8", type: "Main Gun", damage: 525, penetration: 165 },
      { name: "M929", type: "Main Gun", damage: 630, penetration: 189 },
      { name: "HJ-73B", type: "Missile", damage: 7800, penetration: 500, reload: 6 }

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
    "id": 434,
    "name": "ХM8 AGS",
    "type": "Light Tank",
    "faction": "American",
    "tier": "III",
    image: "XM8.png",
    "description": "Wheeled armored personnel carrier with good mobility, moderate armor, versatile weapon options.",
    "stats": { "health": 26900, "speed": 111, "armor": "40mm", "agility": 64 },
    "weapons": [
      { name: "ZUBR6 APBC", type: "Main Gun", damage: 540, penetration: 112 },
      { name: "Z0F8", type: "Main Gun", damage: 675, penetration: 50 },
      { name: "ZUBR8", type: "Main Gun", damage: 525, penetration: 165 },
      { name: "M929", type: "Main Gun", damage: 630, penetration: 189 },
      { name: "HJ-73B", type: "Missile", damage: 7800, penetration: 500, reload: 6 }

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
    "id": 435,
    "name": "VBCI-2",
    "type": "Light Tank",
    "faction": "French",
    "tier": "III",
    image: "VBCI-2.jpg",
    "description": "A French 8×8 infantry fighting vehicle, upgraded from the VBCI with better armor and mobility",
    "stats": { "health": 26900, "speed": 111, "armor": "40mm", "agility": 64 },
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
    "id": 436,
    "name": "WMA301",
    "type": "Tank Destroyer",
    "faction": "Chinese",
    "tier": "III",
    image: "WMA301.jpg",
    "description": "A Chinese modern wheeled armored vehicle with strong firepower, protection, and mobility..",
    "stats": { "health": 28200, "speed": 85, "armor": "25mm", "agility": 35 },
    "weapons": [
      { name: "Type 83 APFSDS", type: "Main Gun", damage: 10340, penetration: 425 },
      { name: "Type 83 HEAT", type: "Main Gun", damage: 9900, penetration: 400 },
      { name: "Type 83 HESH", type: "Main Gun", damage: 9410, penetration: 127 },
      { name: "GP 105", type: "Main Gun", damage: 9180, penetration: 750 }
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
    "id": 437,
    "name": "Centauro I 120",
    "type": "Tank Destroyer",
    "faction": "Italian",
    "tier": "III",
    image: "Centauro-I-120.jpg",
    "description": "Italian wheeled tank destroyer, 120mm gun, fast and mobile, light armor, strong firepower, ideal for hit-and-run and reconnaissance.",
    "stats": { "health": 26800, "speed": 110, "armor": "40mm", "agility": 41.8 },
    "weapons": [
      { name: "DM33 APFSDS", type: "Main Gun", damage: 11120, penetration: 550 },
      { name: "DM12A1 HEATFS", type: "Main Gun", damage: 12100, penetration: 480 },
      { name: "CL3143 APFSDS", type: "Main Gun", damage: 11520, penetration: 690 }
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
    id: 438,
    name: "BMD3",
    type: "Light Tank",
    faction: "Russian",
    tier: "III",
    description: "Light infantry fighting vehicle with amphibious capability and rapid deployment design.",
    image: "BMD3.jpg",
    stats: { health: 24000, speed: 70, armor: "420mm", agility: 40 },
    weapons: [
      { name: "3UBR6", type: "Main Gun", damage: 560, penetration: 71 },
      { name: "3UBR8", type: "Main Gun", damage: 590, penetration: 165 },
      { name: "30F8", type: "Main Gun", damage: 675, penetration: 50 },
      { name: "M929", type: "Main Gun", damage: 630, penetration: 189 },
      { name: "9K135 Kornet", type: "Missile", damage: 9473, penetration: 1000, reload: 8 },
      { name: "AGS-17", type: "Missile", damage: 2640, penetration: 50, reload: 6 }
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
      }
    },
    {
    "id": 439,
    "name": "Strf 9040 BILL",
    "type": "Light Tank",
    "faction": "Sweden",
    "tier": "III",
    image: "Strf-9040-BILL.jpg",
    "description": "Swedish light tank with 40 mm autocannon and ATGMs, versatile but lightly armored, fast, lethal.",
    "stats": { "health": 26300, "speed": 80, "armor": "47mm", "agility": 36 },
    "weapons": [
     { name: "Rbs 56", type: "Missile", damage: 7850, penetration: 510, reload: 10 },
     { name: "Slsgr m/90 HEI", type: "Main Gun", damage: 640, penetration: 61 },
     { name: "Slpprj m/90 APSFSDS", type: "Main Gun", damage: 1370, penetration: 173 },
     { name: "Slpprj m/01 APFSDS", type: "Main Gun", damage: 1380, penetration: 239 },


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
    "id": 440,
    "name": "M3A3 Bradley",
    "type": "Light Tank",
    "faction": "American",
    "tier": "III",
    image: "M3A3-Bradley.jpg",
    "description": "Fast, armored infantry vehicle with strong firepower and decent survivability.",
    "stats": { "health": 26000, "speed": 84, "armor": "47mm", "agility": 40 },
    "weapons": [
     { name: "PGU-32U/T", type: "Main Gun", damage: 405, penetration: 115 },
     { name: "M791", type: "Main Gun", damage: 473, penetration: 111 },
     { name: "M792", type: "Main Gun", damage: 608, penetration: 48 },
     { name: "M919", type: "Main Gun", damage: 495, penetration: 140 }


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
    id: 500,
    name: "Mi-35P Hind-F",
    type: "Helicopter",
    faction: "Russian",
    tier: "III",
    image: "Mi-35P-Hind-F.jpg",
    description: "Export version of Mi-24 family — gunship/transport hybrid with heavy ATGMs and rockets in MWT.",
    stats: { health: 21840, speed: 221, verticalSpeed: 13, agility: 46 },
    weapons: [
      { name: "9K38 IGLA-V", type: "Short-Range AAM", damage: 4100, penetration: 30, reload: 15 },
      { name: "9K121 Vikhr", type: "Anti-Tank Missile", damage: 7800, penetration: 1000, reload: 30 },
      { name: "Attack ATGM", type: "Anti-Tank Missile", damage: 7500, penetration: 850, reload: 30 },
      { name: "9-A 5013", type: "Air-to-Ground Missile", damage: 5100, penetration: 460, reload: 20 },
      { name: "B8V20", type: "Air-to-Ground Missile", damage: 5100, penetration: 420, reload: 20 },
      { name: "B-13L", type: "Air-to-Ground Missile", damage: 9200, penetration: 160, reload: 40 },
      { name: "Kh-29T", type: "Air-to-Ground Missile", damage: 17800, penetration: 280, reload: 38 }
    ],
    guns: [
      { name: "GSh-23L(23mm)", type: "Autocannon", damage: 60, penetration: 70, reload: 250 },
      { name: "UPK-23-250(23mm)", type: "Rocket Pod", damage: 300, penetration: 70, reload: 1200 }
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
    name: "Mi-24 Super Hind",
    type: "Helicopter",
    faction: "Russian",
    tier: "III",
    image: "Mi-24-Super-Hind.jpg",
    description: "Export version of Mi-24 family — gunship/transport hybrid with heavy ATGMs and rockets in MWT.",
    stats: { health: 28100, speed: 335, verticalSpeed: 25, agility: 79 },
    weapons: [
      { name: "UB-32-57", type: "Rocket Pod", damage: 3900, penetration: 220, reload: 20 },
      { name: "9K38 Igla-V", type: "AAM (MANPADS)", damage: 4100, penetration: 30, reload: 15 },
      { name: "S-24", type: "Missile", damage: 14600, penetration: 180, reload: 15 },
      { name: "R-60", type: "AAM", damage: 4600, penetration: 36, reload: 10 },
      { name: "B8v20", type: "Rocket Pod", damage: 5100, penetration: 420, reload: 20 },
      { name: "9M120 Attack", type: "Missile", damage: 7500, penetration: 850, reload: 25 },
      { name: "B-13L", type: "Rocket Pod", damage: 9200, penetration: 160, reload: 40 },
      { name: "Attack ATGM", type: "Missile", damage: 7500, penetration: 850, reload: 30 },
      { name: "KAB-250", type: "Missile", damage: 14900, penetration: 130, reload: 25 },
      { name: "DENEL ZT3 Ingwe", type: "Missile", damage: 10260, penetration: 1000, reload: 25 }
    ],
    guns: [
      { name: "Giat M693(20mm)", type: "Autocannon", damage: 65, penetration: 55, reload: 240 }
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
    id: 502,
    name: "AH-64E Apache",
    type: "Helicopter",
    faction: "American",
    tier: "III",
    image: "AH-64E-Apache.jpg",
    description: "Advanced attack helicopter with multi-role capabilities and proven combat record.",
    stats: { health: 20000, speed: 280, verticalSpeed: 19.4, agility: 60 },
    weapons: [
      { name: "ADS Starstreak", type: "Air-to-Ground Missile", damage: 7300, penetration: 50, reload: 15 },
      { name: "AIM-9 Sidewinder", type: "Short-Range AAM", damage: 5700, penetration: 45, reload: 15 },
      { name: "AIM-92", type: "Short-Range AAM", damage: 4700, penetration: 35, reload: 10 },
      { name: "AGM-114 Hellfire", type: "Air-to-Ground Missile", damage: 9000, penetration: 950, reload: 30 },
      { name: "AGM-169 JAGM", type: "Air-to-Ground Missile", damage: 9800, penetration: 1200, reload: 30 },
      { name: "AGR-20 BLR", type: "Rocket Pod", damage: 5200, penetration: 128, reload: 20 },
      { name: "Brimstone", type: "Air-to-Ground Missile", damage: 8100, penetration: 800, reload: 20 },
      { name: "LAU-61", type: "Rocket Pod", damage: 4100, penetration: 290, reload: 20 },
      { name: "LAU-10", type: "Rocket Pod", damage: 7400, penetration: 500, reload: 30 }
    ],
    guns: [
      { name: "M230(30mm)", type: "Autocannon", damage: 90, penetration: 85, reload: 300 }
    ],
    modules: {
      engine: [
        { name: "T700-GE-701D MK1", bonus: "+20 km/h speed" },
        { name: "T700-GE-701D MK2", bonus: "+40 km/h speed" },
        { name: "T700-GE-701D MK3", bonus: "+60 km/h speed" }
      ],
      survivability: [
        { name: "Chaff/Flare MK1", bonus: "+10% evasion" },
        { name: "Chaff/Flare MK2", bonus: "+20% evasion" },
        { name: "Chaff/Flare MK3", bonus: "+30% evasion" }
      ],
      avionics: [
        { name: "Longbow Radar MK1", bonus: "+15% detection" },
        { name: "Longbow Radar MK2", bonus: "+25% detection" },
        { name: "Longbow Radar MK3", bonus: "+35% detection" }
      ]
    }
  },
  {
    id: 503,
    name: "OH-1 Ninja",
    type: "Helicopter",
    faction: "Japanese",
    tier: "III",
    image: "OH-1-Ninja.jpg",
    description: "Agile Japanese attack/recon helicopter—fast and nimble with light AAMs in MWT.",
    stats: { health: 17900, speed: 297, verticalSpeed: 32, agility: 70 },
    weapons: [
      { name: "LAU-68", type: "Rocket Pod", damage: 4300, penetration: 290, reload: 20 },
      { name: "AGR-20-BLR", type: "Rocket Pod", damage: 5200, penetration: 128, reload: 20 },
      { name: "FASGWL", type: "Air-to-Ground Missile", damage: 5300, penetration: 250, reload: 20 },
      { name: "LAU-150", type: "Rocket Pod", damage: 7800, penetration: 600, reload: 40 },
      { name: "Brimstone", type: "Air-to-Ground Missile", damage: 8100, penetration: 800, reload: 20 },
      { name: "Toshiba Type-91", type: "Air-to-Ground Missile", damage: 4700, penetration: 35, reload: 10 },
      { name: "AGM-114 Hellfire", type: "Air-to-Ground Missile", damage: 9000, penetration: 950, reload: 30 },
      { name: "ADS Starstreak", type: "Air-to-Ground Missile", damage: 7300, penetration: 50, reload: 15 }
    ],
    guns: [],
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
    id: 504,
    name: "Super Lynx Mk88A",
    type: "Helicopter",
    faction: "British",
    tier: "III",
    image: "Super-Lynx-Mk88A.jpg",
    description: "British naval helicopter adapted for anti-ship and light attack roles (small weapon capacity in MWT).",
    stats: { health: 22000, speed: 300, verticalSpeed: 16.7, agility: 40 },
    weapons: [
      { name: "Storm Shadow", type: "Cruise Missile", damage: 20000, penetration: 370, reload: 40 },
      { name: "APKWS", type: "Guided Rocket", damage: 5400, penetration: 140, reload: 20 },
      { name: "AIM-9 Sidewinder", type: "Short-Range AAM", damage: 5700, penetration: 45, reload: 15 },
      { name: "FASGWL", type: "Air-to-Ground Missile", damage: 5300, penetration: 250, reload: 20 },
      { name: "FASGW-ANL", type: "Air-to-Ground Missile", damage: 10300, penetration: 350, reload: 38 },
      { name: "Brimstone", type: "Air-to-Ground Missile", damage: 8100, penetration: 800, reload: 20 },
      { name: "AIM-92", type: "Short-Range AAM", damage: 4700, penetration: 35, reload: 10 },
      { name: "MBDA Meteor", type: "BVR AAM", damage: 11900, penetration: 300, reload: 32 }
    ],
    guns: [],
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
    id: 505,
    name: "Z-9WA Harbin",
    type: "Helicopter",
    faction: "Chinese",
    tier: "III",
    image: "Z-9WA-Harbin.jpg",
    description: "Heavily armed Z-9 variant with multi-mount capability (x4 mounts for some missiles in MWT).",
    stats: { health: 17800, speed: 320, verticalSpeed: 22.2, agility: 60 },
    weapons: [
      { name: "HJ-8E", type: "Anti-Tank Missile", damage: 9890, penetration: 480, reload: 15 },
      { name: "TYPE 57-1", type: "Rocket Pod", damage: 3700, penetration: 200, reload: 15 },
      { name: "TY-90", type: "Short-Range AAM", damage: 4600, penetration: 30, reload: 10 },
      { name: "FS-70", type: "Rocket Pod", damage: 4200, penetration: 290, reload: 20 },
      { name: "TYPE-90", type: "Air-to-Ground Missile", damage: 6400, penetration: 320, reload: 40 },
      { name: "AKD-9", type: "Air-to-Ground Missile", damage: 8000, penetration: 800, reload: 15 },
      { name: "FS-70", type: "Rocket Pod", damage: 4200, penetration: 290, reload: 20 },
      { name: "AKD-10", type: "Air-to-Ground Missile", damage: 8600, penetration: 1400, reload: 20 }
    ],
    guns: [
      { name: "QJK99(12.7mm)", type: "Heavy MG", damage: 50, penetration: 40, reload: 100 }
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
    id: 506,
    name: "Z-20 Harbin",
    type: "Helicopter",
    faction: "Chinese",
    tier: "III",
    image: "Z-20-Harbin.jpg",
    description: "Modern multi-role Chinese helicopter with stub wings; carries Chinese ATGMs and rockets in MWT.",
    stats: { health: 18400, speed: 280, verticalSpeed: 16.7, agility: 55 },
    weapons: [
      { name: "HJ-10", type: "Anti-Tank Missile", damage: 13800, penetration: 1400, reload: 30 },
      { name: "TYPE 57-1", type: "Rocket Pod", damage: 3700, penetration: 200, reload: 15 },
      { name: "TY-90", type: "Short-Range AAM", damage: 4600, penetration: 30, reload: 10 },
      { name: "TYPE 90", type: "Air-to-Ground Missile", damage: 6400, penetration: 320, reload: 40 },
      { name: "FT-9", type: "Air-to-Ground Missile", damage: 10800, penetration: 70, reload: 20 },
      { name: "HJ-8E", type: "Anti-Tank Missile", damage: 9890, penetration: 480, reload: 15 },
      { name: "AG-300/M", type: "Air-to-Ground Missile", damage: 9200, penetration: 600, reload: 20 },
      { name: "CM-502KG", type: "Air-to-Ground Missile", damage: 7800, penetration: 1000, reload: 28 }
    ],
    guns: [
      { name: "CS-LM12(7.62mm)", type: "MG", damage: 25, penetration: 20, reload: 80 }
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
    id: 507,
    name: "MH-60L DAP",
    type: "Helicopter",
    faction: "American",
    tier: "III",
    image: "MH-60L-DAP.jpg",
    description: "Armed MH-60 variant (DAP) with a flexible loadout for rockets, ATGMs and air-to-air missiles.",
    stats: { health: 20020, speed: 209, verticalSpeed: 12, agility: 34 },
    weapons: [
      { name: "AGM 169-JAGM", type: "Air-to-Ground Missile", damage: 9800, penetration: 1200, reload: 30 },
      { name: "LAU-61", type: "Rocket Pod", damage: 4100, penetration: 290, reload: 20 },
      { name: "AGR-20 BLR", type: "Rocket Pod", damage: 5200, penetration: 128, reload: 20 },
      { name: "LAU-68", type: "Rocket Pod", damage: 4300, penetration: 290, reload: 20 },
      { name: "AIM-9 Sidewinder", type: "Short-Range AAM", damage: 5700, penetration: 45, reload: 15 },
      { name: "AGM-114 Hellfire", type: "Air-to-Ground Missile", damage: 9000, penetration: 950, reload: 30 },
      { name: "AIM-92", type: "Short-Range AAM", damage: 4700, penetration: 35, reload: 10 },
      { name: "ADS Starstreak", type: "Air-to-Ground Missile", damage: 7300, penetration: 50, reload: 15 }
    ],
    guns: [
      { name: "M230(30mm)", type: "Autocannon", damage: 90, penetration: 85, reload: 300 },
      { name: "M134 minigun(7.62mm)", type: "Rotary Gun", damage: 25, penetration: 20, reload: 80 }
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
    id: 508,
    name: "AH-1Z Viper",
    type: "Helicopter",
    faction: "American",
    tier: "III",
    image: "AH-1Z-Viper.jpg",
    description: "Upgraded Cobra with improved sensors, weapons flexibility and survivability.",
    stats: { health: 17472, speed: 219, verticalSpeed: 14, agility: 46 },
    weapons: [
      { name: "AIM-92", type: "Short-Range AAM", damage: 4700, penetration: 35, reload: 10 },
      { name: "AIM-9 Sidewinder", type: "Short-Range AAM", damage: 5700, penetration: 45, reload: 15 },
      { name: "AGM-169 JAGM", type: "Air-to-Ground Missile", damage: 9800, penetration: 1200, reload: 30 },
      { name: "AGM-114 Hellfire", type: "Air-to-Ground Missile", damage: 9000, penetration: 950, reload: 30 },
      { name: "LAU-68", type: "Rocket Pod", damage: 4300, penetration: 290, reload: 20 },
      { name: "AIM-92", type: "Short-Range AAM", damage: 4700, penetration: 35, reload: 10 },
      { name: "AGM-65 Maverick", type: "Air-to-Ground Missile", damage: 11000, penetration: 830, reload: 22 },
      { name: "LAU-10", type: "Rocket Pod", damage: 7400, penetration: 500, reload: 30 }
    ],
    guns: [
      { name: "M197(20mm)", type: "Autocannon", damage: 60, penetration: 50, reload: 200 }
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
    id: 509,
    name: "Ka-50 Black Shark",
    type: "Helicopter",
    faction: "Russian",
    tier: "III",
    image: "Ka-50-Black-Shark.jpg",
    description: "Single-seat heavy attack helicopter with heavy ATGMs and cannon armament in MWT.",
    stats: { health: 21840, speed: 222, verticalSpeed: 53, agility: 50 },
    weapons: [
      { name: "B8V20", type: "Air-to-Ground Missile", damage: 5100, penetration: 420, reload: 20 },
      { name: "9-A-5013", type: "Air-to-Ground Missile", damage: 5100, penetration: 460, reload: 20 },
      { name: "B-13L", type: "Air-to-Ground Missile", damage: 9200, penetration: 160, reload: 40 },
      { name: "Attack ATGM", type: "Anti-Tank Missile", damage: 7500, penetration: 850, reload: 30 },
      { name: "9k38 IGLA V", type: "Short-Range AAM", damage: 4100, penetration: 30, reload: 15 },
      { name: "PZRK Verba", type: "Short-Range AAM", damage: 4300, penetration: 35, reload: 10 },
      { name: "9K121 Vikhr", type: "Anti-Tank Missile", damage: 7800, penetration: 1000, reload: 30 },
      { name: "X-29T", type: "Air-to-Ground Missile", damage: 17800, penetration: 280, reload: 38 }
    ],
    guns: [
      { name: "UPK-23-250(23mm)", type: "Rocket Pod", damage: 300, penetration: 70, reload: 1200 },
      { name: "2A42(30mm)", type: "Autocannon", damage: 90, penetration: 85, reload: 300 }
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
    image: "AV-8B-Harrier.jpg",
    stats: { health: 18600, speed: 700, afterburnerSpeed: 960, agility: 34 },
    weapons: [
      { name: "LAU-61", type: "Rocket Pod", damage: 4100, penetration: 290, reload: 20 },
    { name: "LAU-10 x3", type: "Rocket Pod", damage: 7400, penetration: 500, reload: 40 },
    { name: "GBU-12", type: "Guided Bomb", damage: 18590, penetration: 120, reload: 30 },
    { name: "MK-82 x3", type: "Bomb", damage: 14300, penetration: 120, reload: 40 },
    { name: "AGM-62A", type: "Air-to-Surface Missile", damage: 17600, penetration: 240, reload: 28 },
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
    stats: { health: 21400, speed: 600, afterburnerSpeed: 2240, agility: 52 },
    weapons: [
       { name: "GBU-38", type: "Guided Bomb", damage: 14300, penetration: 120, reload: 25 },
    { name: "GBU-31", type: "Guided Bomb", damage: 19400, penetration: 360, reload: 40 },
    { name: "GBU-12", type: "Guided Bomb", damage: 18590, penetration: 120, reload: 30 },
    { name: "AGM-65", type: "Air-to-Surface Missile", damage: 11000, penetration: 830, reload: 22 },
    { name: "AIM-7", type: "Medium-Range AAM", damage: 6200, penetration: 65, reload: 20 },
    { name: "AIM-54", type: "Long-Range AAM", damage: 8600, penetration: 100, reload: 30 },
    { name: "AIM-132", type: "Long-Range AAM", damage: 5200, penetration: 65, reload: 15 }

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
    stats: { health: 19900, speed: 820, afterburnerSpeed: 1990, agility: 49 },
    weapons: [
     { name: "Type 2(100)", type: "Bomb", damage: 14000, penetration: 110, reload: 30 },
    { name: "Type 90", type: "Short-Range AAM", damage: 6400, penetration: 320, reload: 40 },
    { name: "TL-20", type: "Guided Bomb", damage: 16120, penetration: 143, reload: 25 },
    { name: "AR-1", type: "Guided Bomb", damage: 7400, penetration: 1000, reload: 16 },
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
    stats: { health: 19700, speed: 790, afterburnerSpeed: 2700, agility: 37 },
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
    stats: { health: 16200, speed: 780, afterburnerSpeed: 1090, agility: 47 },
    weapons: [
     { name: "Type 2(100)", type: "Bomb", damage: 14000, penetration: 110, reload: 30 },
    { name: "Type 90", type: "Short-Range AAM", damage: 6400, penetration: 320, reload: 40 },
    { name: "Type 1", type: "Bomb", damage: 15100, penetration: 120, reload: 32 },
    { name: "Type 3", type: "Bomb", damage: 16000, penetration: 210, reload: 35 },
    { name: "AR-1", type: "Guided Bomb", damage: 7400, penetration: 1000, reload: 16 },
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
    stats: { health: 19300, speed: 790, afterburnerSpeed: 1910, agility: 35 },
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
    stats: { health: 32000, speed: 50, armor: "93mm", agility: 36 },
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
    "id": 701,
    "name": "Object 122 TM",
    "type": "Main Battle Tank",
    "faction": "Chinese",
    "tier": "II",
    "image": "Object-122-TM.jpg",
    "description": "Chinese prototype main battle tank, based on the Type 59, mounting a 120 mm gun.",
    "stats": {
      "health": 29300,
      "speed": 55,
      "armor": "100mm",
      "agility": 33
    },
    "weapons": [
      {
        "name": "Object 122 TM Main Gun",
        "type": "Main Gun",
        "damage": 10500,
        "penetration": 610
      },
      {
        "name": "Object 122 TM Secondary MG",
        "type": "Machine Gun",
        "damage": 160,
        "penetration": 21,
        "rateOfFire": "601 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "Object 122 TM Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "Object 122 TM Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "Object 122 TM Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "Object 122 TM Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "Object 122 TM Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "Object 122 TM Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "Object 122 TM FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "Object 122 TM FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "Object 122 TM FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },
  {
    "id": 702,
    "name": "Type 74E",
    "type": "Main Battle Tank",
    "faction": "Japanese",
    "tier": "II",
    "image": "Type-74E.jpg",
    "description": "Japanese main battle tank, upgraded from the Type 74 series, featuring improved fire control systems.",
    "stats": {
      "health": 30000,
      "speed": 54,
      "armor": "80mm",
      "agility": 32
    },
    "weapons": [
      {
        "name": "Type 74E Main Gun",
        "type": "Main Gun",
        "damage": 11000,
        "penetration": 620
      },
      {
        "name": "Type 74E Secondary MG",
        "type": "Machine Gun",
        "damage": 170,
        "penetration": 22,
        "rateOfFire": "602 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "Type 74E Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "Type 74E Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "Type 74E Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "Type 74E Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "Type 74E Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "Type 74E Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "Type 74E FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "Type 74E FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "Type 74E FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },
  {
    "id": 703,
    "name": "Type 74G/Kai",
    "type": "Main Battle Tank",
    "faction": "Japanese",
    "tier": "II",
    "image": "Type-74G-Kai.jpg",
    "description": "An upgraded Japanese MBT variant, featuring enhanced armor, improved fire control, and modernized night-fighting capability.",
    "stats": {
      "health": 31000,
      "speed": 54,
      "armor": "80mm",
      "agility": 32
    },
    "weapons": [
      {
        "name": "Type 74G/Kai Main Gun",
        "type": "Main Gun",
        "damage": 11500,
        "penetration": 630
      },
      {
        "name": "Type 74G/Kai Secondary MG",
        "type": "Machine Gun",
        "damage": 100,
        "penetration": 23,
        "rateOfFire": "603 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "Type 74G/Kai Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "Type 74G/Kai Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "Type 74G/Kai Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "Type 74G/Kai Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "Type 74G/Kai Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "Type 74G/Kai Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "Type 74G/Kai FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "Type 74G/Kai FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "Type 74G/Kai FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },
  {
    "id": 704,
    "name": "T-62",
    "type": "Main Battle Tank",
    "faction": "Russian",
    "tier": "II",
    "image": "T-62.jpg",
    "description": "Soviet main battle tank, armed with a 115 mm smoothbore gun and improved armor protection.",
    "stats": {
      "health": 29000,
      "speed": 51,
      "armor": "100mm",
      "agility": 44
    },
    "weapons": [
      {
        "name": "T-62 Main Gun",
        "type": "Main Gun",
        "damage": 12000,
        "penetration": 640
      },
      {
        "name": "T-62 Secondary MG",
        "type": "Machine Gun",
        "damage": 190,
        "penetration": 24,
        "rateOfFire": "604 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "T-62 Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "T-62 Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "T-62 Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "T-62 Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "T-62 Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "T-62 Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "T-62 FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "T-62 FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "T-62 FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },
  {
    "id": 705,
    "name": "T-62 545",
    "type": "Main Battle Tank",
    "faction": "Russian",
    "tier": "II",
    "image": "T-62-545.jpg",
    "description": "Soviet T-62 variant, equipped with the 545 hp V-55 engine and improved reliability.",
    "stats": {
      "health": 31000,
      "speed": 51,
      "armor": "200mm",
      "agility": 44
    },
    "weapons": [
      {
        "name": "T-62 545 Main Gun",
        "type": "Main Gun",
        "damage": 10000,
        "penetration": 650
      },
      {
        "name": "T-62 545 Secondary MG",
        "type": "Machine Gun",
        "damage": 150,
        "penetration": 20,
        "rateOfFire": "605 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "T-62 545 Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "T-62 545 Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "T-62 545 Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "T-62 545 Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "T-62 545 Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "T-62 545 Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "T-62 545 FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "T-62 545 FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "T-62 545 FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },
  {
    "id": 706,
    "name": "Stridsvagn 105",
    "type": "Main Battle Tank",
    "faction": "Sweden",
    "tier": "II",
    "description": "A modified Centurion with a 105mm gun, improved armor, and mobility for defense and reconnaissance missions.",
    "image": "Stridsvagn-105.jpg",
    "stats": {
      "health": 36000,
      "speed": 50,
      "armour": 76,
      "agility": 35
    },
    "weapons": [
      { name: "slpprj m/90c APFSDS", type: "Main Gun", damage: 9800, penetration: 430 },
      { name: "slpprj m/80 APFSDS", type: "Main Gun", damage: 9630, penetration: 337 },
      { name: "slsgr m/61A HEI", type: "Main Gun", damage: 4400, penetration: 70 },
      { name: "slspgr m/61 SAPHEI", type: "Main Gun", damage: 10090, penetration: 127 }
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
    "id": 707,
    "name": "XM803",
    "type": "Main Battle Tank",
    "faction": "American",
    "tier": "II",
    "image": "XM803.jpg",
    "description": "American prototype main battle tank, developed from the MBT-70 project, featuring advanced firepower and mobility.",
    "stats": {
      "health": 35000,
      "speed": 60,
      "armor": "150mm",
      "agility": 30
    },
    "weapons": [
      {
        "name": "XM803 Main Gun",
        "type": "Main Gun",
        "damage": 10500,
        "penetration": 660
      },
      {
        "name": "XM803 Secondary MG",
        "type": "Machine Gun",
        "damage": 160,
        "penetration": 21,
        "rateOfFire": "606 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "XM803 Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "XM803 Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "XM803 Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "XM803 Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "XM803 Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "XM803 Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "XM803 FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "XM803 FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "XM803 FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },
  {
    "id": 708,
    "name": "XM1 (GM)",
    "type": "Main Battle Tank",
    "faction": "American",
    "tier": "II",
    "image": "XM1-GM.jpg",
    "description": "U.S. prototype main battle tank by General Motors, competing against Chrysler’s design for the Abrams.",
    "stats": {
      "health": 33600,
      "speed": 83,
      "armor": "100mm",
      "agility": 40
    },
    "weapons": [
      {
        "name": "XM1 (GM) Main Gun",
        "type": "Main Gun",
        "damage": 11000,
        "penetration": 670
      },
      {
        "name": "XM1 (GM) Secondary MG",
        "type": "Machine Gun",
        "damage": 170,
        "penetration": 22,
        "rateOfFire": "607 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "XM1 (GM) Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "XM1 (GM) Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "XM1 (GM) Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "XM1 (GM) Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "XM1 (GM) Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "XM1 (GM) Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "XM1 (GM) FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "XM1 (GM) FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "XM1 (GM) FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },
  {
    "id": 709,
    "name": "BMP-2",
    "type": "Light Tank",
    "faction": "Russian",
    "tier": "II",
    "image": "BMP-2.jpg",
    "description": "Soviet infantry fighting vehicle, armed with a 30 mm autocannon and anti-tank guided missiles, supporting mechanized troops.",
    "stats": {
      "health": 23000,
      "speed": 68,
      "armor": "36mm",
      "agility": 36
    },
    "weapons": [
      {
        "name": "BMP-2 Main Gun",
        "type": "Main Gun",
        "damage": 11500,
        "penetration": 680
      },
      {
        "name": "BMP-2 Secondary MG",
        "type": "Machine Gun",
        "damage": 180,
        "penetration": 23,
        "rateOfFire": "608 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "BMP-2 Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "BMP-2 Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "BMP-2 Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "BMP-2 Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "BMP-2 Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "BMP-2 Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "BMP-2 FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "BMP-2 FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "BMP-2 FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },
  {
    "id": 710,
    "name": "BTR-82AT",
    "type": "Light Tank",
    "faction": "Russian",
    "tier": "II",
    "image": "BTR-82AT.jpg",
    "description": "Russian armored personnel carrier, upgraded with a 30 mm autocannon, improved armor, and anti-tank missile capability.",
    "stats": {
      "health": 22800,
      "speed": 87,
      "armor": "10mm",
      "agility": 45
    },
    "weapons": [
      {
        "name": "BTR-82AT Main Gun",
        "type": "Main Gun",
        "damage": 12000,
        "penetration": 690
      },
      {
        "name": "BTR-82AT Secondary MG",
        "type": "Machine Gun",
        "damage": 190,
        "penetration": 24,
        "rateOfFire": "609 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "BTR-82AT Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "BTR-82AT Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "BTR-82AT Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "BTR-82AT Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "BTR-82AT Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "BTR-82AT Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "BTR-82AT FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "BTR-82AT FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "BTR-82AT FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },
  {
    "id": 711,
    "name": "BTR-82A1",
    "type": "Light Tank",
    "faction": "Russian",
    "tier": "II",
    "image": "BTR-82A1.jpg",
    "description": "Modern Russian armored personnel carrier, featuring a 30 mm autocannon, enhanced armor, and improved mobility for troops.",
    "stats": {
      "health": 22000,
      "speed": 87,
      "armor": "10mm",
      "agility": 40
    },
    "weapons": [
      {
        "name": "BTR-82A1 Main Gun",
        "type": "Main Gun",
        "damage": 10000,
        "penetration": 600
      },
      {
        "name": "BTR-82A1 Secondary MG",
        "type": "Machine Gun",
        "damage": 150,
        "penetration": 20,
        "rateOfFire": "610 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "BTR-82A1 Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "BTR-82A1 Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "BTR-82A1 Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "BTR-82A1 Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "BTR-82A1 Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "BTR-82A1 Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "BTR-82A1 FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "BTR-82A1 FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "BTR-82A1 FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },
    {
    id: 712,
    name: "M3 Bradley",
    type: "Multirole-IFV",
    faction: "American",
    tier: "II",
    description: "Infantry fighting vehicle with TOW missile system and troop transport capability.",
    image: "M3-Bradley.jpg",
    stats: { health: 25000, speed: 62, armor: "38mm", agility: 35 },
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
    "id": 713,
    "name": "M551 Sheridan",
    "type": "Light Tank",
    "faction": "American",
    "tier": "II",
    "image": "M551-Sheridan.jpg",
    "description": "The M551 Sheridan is a lightweight U.S. airborne tank with a 152mm gun-launcher, amphibious capability, and limited armor protection.",
    "stats": {
      "health": 24000,
      "speed": 70,
      "armor": "32mm",
      "agility": 40
    },
    "weapons": [
      {
        "name": "M551 Sheridan Main Gun",
        "type": "Main Gun",
        "damage": 11000,
        "penetration": 620
      },
      {
        "name": "M551 Sheridan Secondary MG",
        "type": "Machine Gun",
        "damage": 170,
        "penetration": 22,
        "rateOfFire": "612 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "M551 Sheridan Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "M551 Sheridan Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "M551 Sheridan Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "M551 Sheridan Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "M551 Sheridan Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "M551 Sheridan Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "M551 Sheridan FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "M551 Sheridan FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "M551 Sheridan FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },
  {
    "id": 714,
    "name": "Object 685",
    "type": "Light Tank",
    "faction": "Russian",
    "tier": "II",
    "image": "Object-685.jpg",
    "description": "Soviet experimental amphibious light tank, designed for reconnaissance and river-crossing operations with light armor and armament.",
    "stats": {
      "health": 24500,
      "speed": 70,
      "armor": "60mm",
      "agility": 39
    },
    "weapons": [
      {
        "name": "Object 685 Main Gun",
        "type": "Main Gun",
        "damage": 11500,
        "penetration": 630
      },
      {
        "name": "Object 685 Secondary MG",
        "type": "Machine Gun",
        "damage": 180,
        "penetration": 23,
        "rateOfFire": "613 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "Object 685 Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "Object 685 Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "Object 685 Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "Object 685 Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "Object 685 Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "Object 685 Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "Object 685 FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "Object 685 FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "Object 685 FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },
  
    {
    id: 715,
    name: "IT-1 Dragon",
    type: "Missile Carrier",
    faction: "Russian",
    tier: "II",
    description: "Experimental missile tank destroyer with unique guided missile system.",
    image: "IT-1-Dragon.jpg",
    stats: { health: 22800, speed: 50, armor: "35mm", agility: 55 },
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
    "id": 716,
    "name": "M163 VADS",
    "type": "Anti-Air",
    "faction": "American",
    "tier": "II",
    "image": "M163-VADS.jpg",
    "description": "U.S. self-propelled anti-aircraft system, mounting a 20 mm Vulcan cannon on an M113 chassis.",
    "stats": {
      "health": 20000,
      "speed": 65,
      "armor": "30mm",
      "agility": 35
    },
    "weapons": [
      {
        "name": "M163 VADS Main Gun",
        "type": "Main Gun",
        "damage": 10000,
        "penetration": 650
      },
      {
        "name": "M163 VADS Secondary MG",
        "type": "Machine Gun",
        "damage": 150,
        "penetration": 20,
        "rateOfFire": "615 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "M163 VADS Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "M163 VADS Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "M163 VADS Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "M163 VADS Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "M163 VADS Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "M163 VADS Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "M163 VADS FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "M163 VADS FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "M163 VADS FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },
  {
    "id": 717,
    "name": "PGZ-04A",
    "type": "Anti-Air",
    "faction": "Chinese",
    "tier": "II",
    "image": "PGZ-04A.jpg",
    "description": "Chinese self-propelled anti-aircraft system, equipped with twin 35 mm cannons and radar for short-range air defense.",
    "stats": {
      "health": 22000,
      "speed": 62,
      "armor": "12mm",
      "agility": 30
    },
    "weapons": [
      {
        "name": "PGZ-04A Main Gun",
        "type": "Main Gun",
        "damage": 10500,
        "penetration": 660
      },
      {
        "name": "PGZ-04A Secondary MG",
        "type": "Machine Gun",
        "damage": 160,
        "penetration": 21,
        "rateOfFire": "616 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "PGZ-04A Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "PGZ-04A Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "PGZ-04A Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "PGZ-04A Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "PGZ-04A Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "PGZ-04A Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "PGZ-04A FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "PGZ-04A FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "PGZ-04A FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },
   {
    id: 718,
    name: "ZSU-23-4M4 Shilka",
    type: "Anti-Air",
    faction: "Russian",
    tier: "II",
    description: "Modernized Soviet/Russian self-propelled anti-aircraft system, armed with four 23 mm autocannons and radar targeting.",
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
    "id": 719,
    "name": "LAV-300",
    "type": "Tank Destroyer",
    "faction": "American",
    "tier": "II",
    "image": "LAV-300.jpg",
    "description": "U.S. wheeled armored vehicle, designed for reconnaissance and troop transport, armed with a turret-mounted autocannon.",
    "stats": {
      "health": 39000,
      "speed": 53,
      "armor": "660mm",
      "agility": 38
    },
    "weapons": [
      {
        "name": "LAV-300 Main Gun",
        "type": "Main Gun",
        "damage": 11500,
        "penetration": 680
      },
      {
        "name": "LAV-300 Secondary MG",
        "type": "Machine Gun",
        "damage": 180,
        "penetration": 23,
        "rateOfFire": "618 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "LAV-300 Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "LAV-300 Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "LAV-300 Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "LAV-300 Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "LAV-300 Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "LAV-300 Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "LAV-300 FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "LAV-300 FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "LAV-300 FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },
  {
    "id": 720,
    "name": "PTL-02",
    "type": "Tank Destroyer",
    "faction": "Chinese",
    "tier": "II",
    "image": "PTL-02.jpg",
    "description": "Chinese wheeled self-propelled anti-tank vehicle, armed with a 100 mm gun capable of firing guided missiles.",
    "stats": {
      "health": 39500,
      "speed": 54,
      "armor": "680mm",
      "agility": 39
    },
    "weapons": [
      {
        "name": "PTL-02 Main Gun",
        "type": "Main Gun",
        "damage": 12000,
        "penetration": 690
      },
      {
        "name": "PTL-02 Secondary MG",
        "type": "Machine Gun",
        "damage": 190,
        "penetration": 24,
        "rateOfFire": "619 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "PTL-02 Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "PTL-02 Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "PTL-02 Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "PTL-02 Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "PTL-02 Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "PTL-02 Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "PTL-02 FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "PTL-02 FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "PTL-02 FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },
  {
    "id": 721,
    "name": "M109",
    "type": "SPH",
    "faction": "American",
    "tier": "II",
    "image": "M109.jpg",
    "description": "U.S. self-propelled howitzer, mounting a 155 mm gun for long-range artillery support on a tracked chassis.",
    "stats": {
      "health": 40000,
      "speed": 45,
      "armor": "600mm",
      "agility": 30
    },
    "weapons": [
      {
        "name": "M109 Main Gun",
        "type": "Main Gun",
        "damage": 10000,
        "penetration": 600
      },
      {
        "name": "M109 Secondary MG",
        "type": "Machine Gun",
        "damage": 150,
        "penetration": 20,
        "rateOfFire": "620 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "M109 Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "M109 Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "M109 Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "M109 Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "M109 Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "M109 Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "M109 FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "M109 FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "M109 FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },
  {
    "id": 722,
    "name": "PLL-05",
    "type": "SPH",
    "faction": "Chinese",
    "tier": "II",
    "image": "PLL-05.jpg",
    "description": "Chinese wheeled self-propelled howitzer, armed with a 120 mm gun-mortar capable of both direct and indirect fire.",
    "stats": {
      "health": 40500,
      "speed": 46,
      "armor": "620mm",
      "agility": 31
    },
    "weapons": [
      {
        "name": "PLL-05 Main Gun",
        "type": "Main Gun",
        "damage": 10500,
        "penetration": 610
      },
      {
        "name": "PLL-05 Secondary MG",
        "type": "Machine Gun",
        "damage": 160,
        "penetration": 21,
        "rateOfFire": "621 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "PLL-05 Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "PLL-05 Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "PLL-05 Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "PLL-05 Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "PLL-05 Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "PLL-05 Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "PLL-05 FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "PLL-05 FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "PLL-05 FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },
  {
    "id": 723,
    "name": "PLZ-83",
    "type": "SPH",
    "faction": "Chinese",
    "tier": "II",
    "image": "PLZ-83.jpg",
    "description": "Chinese tracked self-propelled howitzer, equipped with a 152 mm gun for long-range artillery support.",
    "stats": {
      "health": 41000,
      "speed": 47,
      "armor": "640mm",
      "agility": 32
    },
    "weapons": [
      {
        "name": "PLZ-83 Main Gun",
        "type": "Main Gun",
        "damage": 11000,
        "penetration": 620
      },
      {
        "name": "PLZ-83 Secondary MG",
        "type": "Machine Gun",
        "damage": 170,
        "penetration": 22,
        "rateOfFire": "622 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "PLZ-83 Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "PLZ-83 Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "PLZ-83 Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "PLZ-83 Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "PLZ-83 Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "PLZ-83 Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "PLZ-83 FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "PLZ-83 FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "PLZ-83 FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },
  {
    "id": 724,
    "name": "2S1 Gvozdika",
    "type": "SPH",
    "faction": "Russian",
    "tier": "II",
    "image": "2S1-Gvozdika.jpg",
    "description": "Soviet self-propelled 122 mm howitzer, fully tracked, providing mobile artillery support for mechanized units.",
    "stats": {
      "health": 41500,
      "speed": 48,
      "armor": "660mm",
      "agility": 33
    },
    "weapons": [
      {
        "name": "2S1 Gvozdika Main Gun",
        "type": "Main Gun",
        "damage": 11500,
        "penetration": 630
      },
      {
        "name": "2S1 Gvozdika Secondary MG",
        "type": "Machine Gun",
        "damage": 180,
        "penetration": 23,
        "rateOfFire": "623 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "2S1 Gvozdika Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "2S1 Gvozdika Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "2S1 Gvozdika Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "2S1 Gvozdika Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "2S1 Gvozdika Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "2S1 Gvozdika Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "2S1 Gvozdika FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "2S1 Gvozdika FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "2S1 Gvozdika FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },
  {
    "id": 725,
    "name": "2S3 Akatsiya",
    "type": "SPH",
    "faction": "Russian",
    "tier": "II",
    "image": "2S3-Akatsiya.jpg",
    "description": "Soviet self-propelled 152 mm howitzer, tracked, providing long-range artillery support with high mobility.",
    "stats": {
      "health": 42000,
      "speed": 49,
      "armor": "680mm",
      "agility": 34
    },
    "weapons": [
      {
        "name": "2S3 Akatsiya Main Gun",
        "type": "Main Gun",
        "damage": 12000,
        "penetration": 640
      },
      {
        "name": "2S3 Akatsiya Secondary MG",
        "type": "Machine Gun",
        "damage": 190,
        "penetration": 24,
        "rateOfFire": "624 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "2S3 Akatsiya Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "2S3 Akatsiya Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "2S3 Akatsiya Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "2S3 Akatsiya Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "2S3 Akatsiya Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "2S3 Akatsiya Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "2S3 Akatsiya FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "2S3 Akatsiya FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "2S3 Akatsiya FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },
  {
    "id": 726,
    "name": "Type 74 SPH",
    "type": "SPH",
    "faction": "Japanese",
    "tier": "II",
    "image": "Type-74-SPH.jpg",
    "description": "Japanese self-propelled 105 mm howitzer, mounted on a tracked chassis for mobile artillery support.",
    "stats": {
      "health": 42500,
      "speed": 50,
      "armor": "600mm",
      "agility": 35
    },
    "weapons": [
      {
        "name": "Type 74 SPH Main Gun",
        "type": "Main Gun",
        "damage": 10000,
        "penetration": 650
      },
      {
        "name": "Type 74 SPH Secondary MG",
        "type": "Machine Gun",
        "damage": 150,
        "penetration": 20,
        "rateOfFire": "625 rpm"
      }
    ],
    "modules": {
      "engine": [
        {
          "name": "Type 74 SPH Engine MK1",
          "bonus": "+5 km/h speed"
        },
        {
          "name": "Type 74 SPH Engine MK2",
          "bonus": "+10 km/h speed"
        },
        {
          "name": "Type 74 SPH Engine MK3",
          "bonus": "+15 km/h speed"
        }
      ],
      "armor": [
        {
          "name": "Type 74 SPH Armor MK1",
          "bonus": "+100mm protection"
        },
        {
          "name": "Type 74 SPH Armor MK2",
          "bonus": "+200mm protection"
        },
        {
          "name": "Type 74 SPH Armor MK3",
          "bonus": "+300mm protection"
        }
      ],
      "fireControl": [
        {
          "name": "Type 74 SPH FCS MK1",
          "bonus": "+10% accuracy"
        },
        {
          "name": "Type 74 SPH FCS MK2",
          "bonus": "+18% accuracy"
        },
        {
          "name": "Type 74 SPH FCS MK3",
          "bonus": "+26% accuracy"
        }
      ]
    }
  },

{
    id: 800,
    name: "Z-9G Harbin",
    type: "Helicopter",
    faction: "Chinese",
    tier: "II",
    image: "Z-9G-Harbin.jpg",
    description: "Multi-role Chinese helicopter equipped with light rockets, cannons, and ATGMs in MWT.",
    stats: { health: 16900, speed: 305, verticalSpeed: 22, agility: 60 },
    weapons: [
      { name: "Type 57-1", type: "Rocket Pod", damage: 3700, penetration: 200, reload: 15 },
      { name: "FS-70", type: "Rocket Pod", damage: 4200, penetration: 290, reload: 20 },
      { name: "AKD-10", type: "Air-to-Ground Missile", damage: 8600, penetration: 1400, reload: 20 },
      { name: "AKD-9", type: "Air-to-Ground Missile", damage: 8000, penetration: 800, reload: 15 },
      { name: "HJ-8E", type: "Anti-Tank Missile", damage: 9890, penetration: 480, reload: 15 },
      { name: "Type 90", type: "Air-to-Ground Missile", damage: 6400, penetration: 320, reload: 40 },
      { name: "TY-90", type: "Short-Range AAM", damage: 4600, penetration: 30, reload: 10 }
    ],
    guns: [
      { name: "QJK99(12.7mm)", type: "Heavy MG", damage: 50, penetration: 40, reload: 100 }
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
    stats: { health: 16616, speed: 200, verticalSpeed: 46, agility: 52 },
    weapons: [
      { name: "UB-16-57UM", type: "Rocket Pod", damage: 3900, penetration: 220, reload: 15 },
      { name: "UB-32-57", type: "Rocket Pod", damage: 3900, penetration: 220, reload: 20 },
      { name: "B8V20", type: "Air-to-Ground Missile", damage: 5100, penetration: 420, reload: 20 },
      { name: "B-13L", type: "Air-to-Ground Missile", damage: 9200, penetration: 160, reload: 40 },
      { name: "9K38 IGLA-V", type: "Short-Range AAM", damage: 4100, penetration: 30, reload: 15 },
      { name: "Attack ATGM", type: "Anti-Tank Missile", damage: 7500, penetration: 850, reload: 30 },
      { name: "9M17 Falanga", type: "Anti-Tank Missile", damage: 7400, penetration: 650, reload: 30 }
    ],
    guns: [
      { name: "Afanasev A 12.7(12.7mm)", type: "Heavy MG", damage: 45, penetration: 42, reload: 100 },
      { name: "UPK-23-250(23mm)", type: "Rocket Pod", damage: 300, penetration: 70, reload: 1200 }
    ],
    modules: {
      engine: [
        { name: "TV3-117MT MK1", bonus: "+18 km/h speed" },
        { name: "TV3-117MT MK2", bonus: "+36 km/h speed" },
        { name: "TV3-117MT MK3", bonus: "+54 km/h speed" }
      ],
      survivability: [
        { name: "Armor Plating MK1", bonus: "+8% protection" },
        { name: "Armor Plating MK2", bonus: "+16% protection" },
        { name: "Armor Plating MK3", bonus: "+24% protection" }
      ],
      avionics: [
        { name: "Navigation Suite MK1", bonus: "+10% accuracy" },
        { name: "Navigation Suite MK2", bonus: "+18% accuracy" },
        { name: "Navigation Suite MK3", bonus: "+26% accuracy" }
      ]
    }
  },
  {
    id: 802,
    name: "MH-6 Little Bird",
    type: "Helicopter",
    faction: "American",
    tier: "II",
    image: "MH-6-Little-Bird.jpg",
    description: "Ultra-light scout/assault helicopter used for special operations; light armament but excellent maneuverability.",
    stats: { health: 15000, speed: 282, verticalSpeed: 26, agility: 75 },
    weapons: [
      { name: "AGM 169-JAGM", type: "Air-to-Ground Missile", damage: 9800, penetration: 1200, reload: 30 },
      { name: "AGM-114K X2", type: "Air-to-Ground Missile", damage: 9000, penetration: 950, reload: 30 },
      { name: "AGR-20 BLR", type: "Rocket Pod", damage: 5200, penetration: 128, reload: 20 },
      { name: "LAU-68", type: "Rocket Pod", damage: 4300, penetration: 290, reload: 20 },
      { name: "AIM-92", type: "Short-Range AAM", damage: 4700, penetration: 35, reload: 10 },
      { name: "AGM-65 Maverick", type: "Air-to-Ground Missile", damage: 11000, penetration: 830, reload: 22 }
    ],
    guns: [
      { name: "GAU-19 MH-6 (12.7mm)", type: "Heavy MG", damage: 45, penetration: 42, reload: 90 },
      { name: "M134 Minigun(7.62mm)", type: "Rotary Gun", damage: 25, penetration: 20, reload: 80 }
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
    stats: { health: 18421, speed: 170, verticalSpeed: 44, agility: 40 },
    weapons: [
      { name: "HJ-8E", type: "Anti-Tank Missile", damage: 9890, penetration: 480, reload: 15 },
      { name: "TYPE 57-1", type: "Rocket Pod", damage: 3700, penetration: 200, reload: 15 },
      { name: "TY-90", type: "Short-Range AAM", damage: 4600, penetration: 30, reload: 10 },
      { name: "AKD-9", type: "Air-to-Ground Missile", damage: 8000, penetration: 800, reload: 15 },
      { name: "SW6-Drone", type: "Loitering Munition", damage: 7800, penetration: 800, reload: 16 },
      { name: "TL-6", type: "Air-to-Ground Missile", damage: 19400, penetration: 830, reload: 21 },
      { name: "FS-70", type: "Rocket Pod", damage: 4200, penetration: 290, reload: 20 },
      { name: "AKD-10", type: "Air-to-Ground Missile", damage: 8600, penetration: 1400, reload: 20 },
      { name: "FT-9", type: "Air-to-Ground Missile", damage: 10800, penetration: 70, reload: 20 },
      { name: "Type-90", type: "Air-to-Ground Missile", damage: 6400, penetration: 320, reload: 40 }
    ],
    guns: [
      { name: "CS-LM12(7.62mm)", type: "MG", damage: 25, penetration: 20, reload: 80 }
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
    id: 804,
    name: "Mi-171SH",
    type: "Helicopter",
    faction: "Russian",
    tier: "II",
    image: "Mi-171SH.jpg",
    description: "Modernized transport helicopter with enhanced combat capabilities and weapon systems.",
    stats: { health: 17500, speed: 210, verticalSpeed: 48, agility: 45 },
    weapons: [
      { name: "Type 57-1", type: "Rocket Pod", damage: 3700, penetration: 200, reload: 15 },
      { name: "TY-90", type: "Short-Range AAM", damage: 4600, penetration: 30, reload: 10 },
      { name: "AKD-9", type: "Air-to-Ground Missile", damage: 8000, penetration: 800, reload: 15 },
      { name: "Type 90", type: "Air-to-Ground Missile", damage: 6400, penetration: 320, reload: 40 },
      { name: "HJ-8E", type: "Anti-Tank Missile", damage: 9890, penetration: 480, reload: 15 },
      { name: "FS-70", type: "Rocket Pod", damage: 4200, penetration: 290, reload: 20 },
      { name: "SW6-Drone", type: "Loitering Munition", damage: 7800, penetration: 800, reload: 16 },
      { name: "TL-6", type: "Air-to-Ground Missile", damage: 19400, penetration: 830, reload: 21 },
      { name: "AKD-10", type: "Air-to-Ground Missile", damage: 8600, penetration: 1400, reload: 20 }
    ],
    guns: [
      { name: "6P46 Kord(12.7mm)", type: "Heavy MG", damage: 48, penetration: 45, reload: 95 },
      { name: "UPK-23-250(23mm)", type: "Rocket Pod", damage: 300, penetration: 70, reload: 1200 }
    ],
    modules: {
      engine: [
        { name: "TV3-117VM Upgrade MK1", bonus: "+12% speed" },
        { name: "TV3-117VM Upgrade MK2", bonus: "+24% speed" }
      ],
      avionics: [
        { name: "Modern Avionics MK1", bonus: "+15% detection" },
        { name: "Modern Avionics MK2", bonus: "+30% detection" }
      ],
      defense: [
        { name: "Countermeasure System MK1", bonus: "+18% evasion" },
        { name: "Countermeasure System MK2", bonus: "+32% evasion" }
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
    "faction": "Chinese",
    "tier": 1,
    "description": "Chinese tank destroyer, lightly armored, equipped with 100mm gun, excels at ambushes and long-range engagements.",
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
        "damage": 1400,
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
    "id": 919,
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
    "id": 920,
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
    "id": 921,
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
    "id": 922,
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
    "id": 923,
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
    "id": 924,
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
    "id": 925,
    "name": "9K31 Strela-1",
    "type": "Anti-Air",
    "faction": "Indian",
    "tier": 1,
    "description": "A short-range, mobile surface-to-air missile system with upgraded targeting, mounted on a tracked chassis for air defense.",
    "image": "9K31-Strela-1.png",
    "stats": {
      "health": 21200,
      "speed": 127,
      "reverseSpeed": 0,
      "agility": 37
    },
    "weapons": [
        { name: "9M31M HEI", type: "Missile", damage: 5870, penetration: 60, reload: 9 },
        { name: "9M31 HEI", type: "Missile", damage: 4530, penetration: 60, reload: 9 },
   
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
    "id": 926,
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
    "id": 927,
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
  // ... rest of the vehicle data ...
];
