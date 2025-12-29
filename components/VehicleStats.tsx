// Define the vehicle data
const vehicles = [
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
    ]
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
    ]
  },
  {
    id: 3,
    name: "J-20 Mighty Dragon",
    type: "Fighter Jet",
    faction: "Chinese",
    tier: "IV",
    image: "J-20-Mighty-Dragon.jpg",
    description: "Long-range stealth fighter designed for air superiority and strike missions.",
    stats: { health: 21200, speed: 848, afterburnerSpeed: 2200, agility: 52 },
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
    ]
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
      { "name": "KAB-250", "damage": 14900, "penetration": 130, "reload": 25 },
      { "name": "FAB-250-M62", "damage": 15100, "penetration": 130, "reload": 30 },
      { "name": "GROM-E1", "damage": 16200, "penetration": 170, "reload": 36 },
      { "name": "KAB500KR", "damage": 17800, "penetration": 320, "reload": 40 },
      { "name": "Kh-MD-E", "damage": 12400, "penetration": 250, "reload": 20 },
      { "name": "R-93M", "damage": 5000, "penetration": 65, "reload": 15 },
      { "name": "Kh-25MLE", "damage": 16000, "penetration": 160, "reload": 35 },
      { "name": "R-37", "damage": 8400, "penetration": 80, "reload": 30 },
      { "name": "Kh-38ME", "damage": 17300, "penetration": 230, "reload": 40 },
      { "name": "Kh-69", "damage": 18400, "penetration": 230, "reload": 40 }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
      { "name": "AGM-84H/K", "type": "Anti-Ship Missile", "damage": 18900, "penetration": 310, "reload": 35 },
      { "name": "AIM-132", "type": "Short-Range AAM", "damage": 5200, "penetration": 65, "reload": 15 },
      { "name": "AIM-120", "type": "BVR AAM", "damage": 11300, "penetration": 60, "reload": 20 }
    ]
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
    ]
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
      { "name": "FT-3", "damage": 15800, "penetration": 210, "reload": 34 },
      { "name": "LS-6/250", "damage": 17300, "penetration": 300, "reload": 40 },
      { "name": "TL-20", "damage": 16120, "penetration": 143, "reload": 25 },
      { "name": "Type 3", "damage": 16000, "penetration": 210, "reload": 35 },
      { "name": "YJ-1000", "damage": 21600, "penetration": 500, "reload": 40 },
      { "name": "PL-10", "damage": 7400, "penetration": 60, "reload": 20 },
      { "name": "PL-12", "damage": 7600, "penetration": 56, "reload": 30 },
      { "name": "PL-15", "damage": 7800, "penetration": 70, "reload": 30 },
      { "name": "CM-102A", "damage": 14600, "penetration": 110, "reload": 40 },
      { "name": "AKF-98A", "damage": 20500, "penetration": 410, "reload": 40 }
    ]
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
    ]
  },
  {
    id: 13,
    name: "X2 Shinshin",
    type: "Fighter Jet",
    faction: "Japanese",
    tier: "IV",
    image: "X2-Shinshin.jpg",
    description: "Japan's stealth technology demonstrator, testing advanced avionics, radar, and maneuverability for future fighters.",
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
      { "name": "JLAU-3/A", "damage": 5200, "penetration": 128, "reload": 20 }
    ]
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
    ]
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
    ]
  },
  {
    id: 102,
    name: "Type 10",
    type: "Main Battle Tank",
    faction: "Japanese",
    tier: "IV",
    image: "Type-10.jpg",
    description: "Modern main battle tank optimized for Japanese terrain with advanced fire control.",
    stats: { health: 39800, speed: 72, reverseSpeed: 72, armor: "850mm", agility: 45 },
    weapons: [
      { name: "JM33 APFSDS", type: "Main Gun", damage: 11330, penetration: 481 },
      { name: "JM12A1 HEAT", type: "Main Gun", damage: 12360, penetration: 480 },
      { name: "Type 10 APFSDS", type: "Main Gun", damage: 11680, penetration: 650 }
    ]
  },
  {
    id: 103,
    name: "Altay",
    type: "Main Battle Tank",
    faction: "Turkish",
    tier: "IV",
    image: "Altay.jpg",
    description: "Turkey's modern main battle tank, emphasizing firepower, protection, mobility, and advanced technology.",
    stats: { health: 42600, speed: 62, armor: "1200mm", agility: 36 },
    weapons: [
      { name: "DM63A1 APFSDS", type: "Main Gun", damage: 18500, penetration: 950, reload: 5.2 },
      { name: "DM11", type: "Main Gun", damage: 5000, penetration: 87 },
      { name: "DM12A2 HEATFS", type: "Main Gun", damage: 19200, penetration: 1250, reload: 5.2 },
      { name: "DM73 APFSDS", type: "Main Gun", damage: 19200, penetration: 1250, reload: 5.2 }
    ]
  },
  {
    id: 104,
    name: "T-90A",
    type: "Main Battle Tank",
    faction: "Russian",
    tier: "IV",
    image: "T-90A.jpg",
    description: "Modernized main battle tank with improved armor and advanced fire control.",
    stats: { health: 40000, speed: 65, reverseSpeed: 30, maneuverability: 44, armor: "1050mm", agility: 44 },
    weapons: [
      { name: "3BM42", type: "Main Gun", damage: 11390, penetration: 565 },
      { name: "30F26", type: "Main Gun", damage: 5000, penetration: 92 },
      { name: "3BM50 Lead-1", type: "Main Gun", damage: 11170, penetration: 755 },
      { name: "3BK18M", type: "Main Gun", damage: 12390, penetration: 550 },
      { name: "9M119", type: "Main Gun", damage: 10160, penetration: 750 },
    ]
  },
  {
    id: 105,
    name: "KF-51 Panther",
    type: "Main Battle Tank",
    faction: "German",
    tier: "IV",
    image: "KF-51-Panther.jpg",
    description: "Next-generation main battle tank with 130mm gun and advanced digital systems.",
    stats: { health: 44000, speed: 74, armor: "1200mm", agility: 39 },
    weapons: [
      { name: "DM11-1", type: "Main Gun", damage: 5300, penetration: 117 },
      { name: "DM12-1", type: "Main Gun", damage: 13640, penetration: 800 },
      { name: "DM33-1", type: "Main Gun", damage: 12060, penetration: 596 },
      { name: "DM73-1", type: "Main Gun", damage: 12954, penetration: 980 },
      { name: "Hero 120", type: "Missile", damage: 8910, penetration: 520, reload: 13.5 }
    ]
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
    ]
  },
  {
    id: 107,
    name: "Leopard 2A7+",
    type: "Main Battle Tank",
    faction: "German",
    tier: "IV",
    image: "Leopard-2A7V.jpg",
    description: "Most advanced Leopard variant with urban warfare modifications and enhanced protection.",
    stats: { health: 42100, speed: 64, armor: "1080mm", agility: 37 },
    weapons: [
      { name: "DM11", type: "Main Gun", damage: 5000, penetration: 85 },
      { name: "DM12", type: "Main Gun", damage: 12100, penetration: 480 },
      { name: "DM33", type: "Main Gun", damage: 11230, penetration: 550 },
      { name: "DM73", type: "Main Gun", damage: 11940, penetration: 900 }
    ]
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
      { name: "3BM50 Lead-1", type: "Main Gun", damage: 11170, penetration: 755 },
      { name: "30F26", type: "Main Gun", damage: 5000, penetration: 92 },
      { name: "3BK18M", type: "Main Gun", damage: 12390, penetration: 550 },
      { name: "3BK21", type: "Main Gun", damage: 10250, penetration: 800 }
    ]
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
      { name: "Grifel-1", type: "Main Gun", damage: 15440, penetration: 850 },
      { name: "Grifel-2", type: "Main Gun", damage: 16100, penetration: 1100 },
      { name: "Grifel-3", type: "Main Gun", damage: 16990, penetration: 900 },
      { name: "Lead-1", type: "Main Gun", damage: 10800, penetration: 760 },
      { name: "VOG-17A", type: "Missile", damage: 2640, penetration: 50, reload: 6 },
      { name: "VOG-30", type: "Missile", damage: 2970, penetration: 65, reload: 6 }
    ]
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
      { name: "Grifel-1", type: "Main Gun", damage: 15440, penetration: 850 },
      { name: "Grifel-2", type: "Main Gun", damage: 16100, penetration: 1100 },
      { name: "Grifel-3", type: "Main Gun", damage: 16990, penetration: 900 },
      { name: "30F39 Krasnopol", type: "Main Gun", damage: 11040, penetration: 480 }
    ]
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
      { name: "M735", type: "Main Gun", damage: 9630, penetration: 340 },
      { name: "Type 75", type: "Main Gun", damage: 10460, penetration: 127 },
      { name: "Type 91", type: "Main Gun", damage: 11070, penetration: 425 },
      { name: "Type 93(B)", type: "Main Gun", damage: 10380, penetration: 550 }
    ]
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
      { name: "Grifel-1", type: "Main Gun", damage: 15440, penetration: 850 },
      { name: "Grifel-2", type: "Main Gun", damage: 16100, penetration: 1100 },
      { name: "Grifel-3", type: "Main Gun", damage: 16990, penetration: 900 },
      { name: "30F38", type: "Main Gun", damage: 10780, penetration: 480 }
    ]
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
    ]
  },
  {
    id: 114,
    name: "BMPT Terminator 2",
    type: "Tank Destroyer",
    faction: "Russian",
    tier: "IV",
    description: "Tank support fighting vehicle designed for urban combat and infantry support.",
    image: "BMPT-Terminator-2.jpg",
    stats: { health: 40600, speed: 65, armor: "850mm", agility: 44 },
    weapons: [
      { name: "3UBR6", type: "Main Gun", damage: 560, penetration: 71 },
      { name: "3UBR8", type: "Main Gun", damage: 590, penetration: 165 },
      { name: "30F8", type: "Main Gun", damage: 675, penetration: 50 },
      { name: "M929", type: "Main Gun", damage: 630, penetration: 189 },
      { name: "9M120 Ataka", type: "Missile", damage: 13220, penetration: 800, reload: 12 }
    ]
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
      { name: "BRE1 HE", type: "Missile", damage: 9400, penetration: 120, reload: 10 },
      { name: "BRE7 HESH", type: "Missile", damage: 11100, penetration: 140, reload: 15 },
      
    ]
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
      { name: "30F39 Krasnopol", type: "Main Gun", damage: 8800, penetration: 480 }
    ]
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
      { name: "3UBR6", type: "Main Gun", damage: 540, penetration: 112 },
      { name: "3UBR8", type: "Main Gun", damage: 525, penetration: 165 },
      { name: "30F8", type: "Main Gun", damage: 290, penetration: 48 },
      { name: "AAM 57E6M", type: "Missile", damage: 8910, penetration: 95, reload: 18 }
    ]
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
    ]
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
    ]
  },
  {
    id: 120,
    name: "VT-4A1",
    type: "Main Battle Tank",
    faction: "Chinese",
    tier: "IV",
    image: "VT-4A1.jpg",
    description: "Export variant main battle tank with advanced fire control and modular protection.",
    stats: { health: 43200, speed: 71, armor: "1100mm", agility: 37 },
    weapons: [
      { name: "BTA4", type: "Main Gun", damage: 11660, penetration: 7000 },
      { name: "DTB12-125", type: "Main Gun", damage: 5000, penetration: 83 },
      { name: "BTS8 PELE", type: "Main Gun", damage: 13320, penetration: 1000 },
      { name: "GP125", type: "Main Gun", damage: 10190, penetration: 800 }
    ]
  },
  {
    id: 121,
    name: "ZTZ99A",
    type: "Main Battle Tank",
    faction: "Chinese",
    tier: "IV",
    image: "ZTZ99A.jpg",
    description: "Advanced main battle tank with composite armor and laser warning systems.",
    stats: { health: 42400, speed: 76, armor: "1150mm", agility: 40 },
    weapons: [
      { name: "DTB-125 HE", type: "Main Gun", damage: 4980, penetration: 183 },
      { name: "DTP-125 HEAT", type: "Main Gun", damage: 12230, penetration: 480 },
      { name: "DTC10-125", type: "Main Gun", damage: 11620, penetration: 680 },
      { name: "GP125", type: "Main Gun", damage: 10190, penetration: 800 }
    ]
  },
  {
    id: 122,
    name: "ZTZ99-III",
    type: "Main Battle Tank",
    faction: "Chinese",
    tier: "IV",
    image: "ZTZ99-III.jpg",
    description: "Latest variant with enhanced armor package and improved battlefield management systems.",
    stats: { health: 41700, speed: 65, armor: "1200mm", agility: 34 },
    weapons: [
      { name: "DTB-125 HEI", type: "Main Gun", damage: 4980, penetration: 83 },
      { name: "BTA4", type: "Main Gun", damage: 11600, penetration: 700 },
      { name: "BTS8 PELE", type: "Main Gun", damage: 10200, penetration: 1000 },
      { name: "GP125", type: "Main Gun", damage: 10190, penetration: 800 }
    ]
  },
  {
    id: 123,
    name: "Challenger 3",
    type: "Main Battle Tank",
    faction: "British",
    tier: "IV",
    image: "Challenger-3.jpg",
    description: "Next-generation British main battle tank with smoothbore gun and digital turret.",
    stats: { health: 46200, speed: 70, armor: "1180mm", agility: 32 },
    weapons: [
      { name: "DM11", type: "Main Gun", damage: 5000, penetration: 85 },
      { name: "DM12", type: "Main Gun", damage: 12100, penetration: 480 },
      { name: "DM33", type: "Main Gun", damage: 11230, penetration: 550 },
      { name: "DM63", type: "Main Gun", damage: 11760, penetration: 810 }
    ]
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
    ]
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
      
      { name: "L27A1", type: "Main Gun", damage: 11850, penetration: 610 },
      { name: "L23A1", type: "Main Gun", damage: 11400, penetration: 397 },
      { name: "L31A7", type: "Main Gun", damage: 11870, penetration: 152 },
      { name: "L26", type: "Main Gun", damage: 11600, penetration: 494 },
    ]
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
      { name: "3OF19", type: "Main Gun", damage: 5000, penetration: 82 },
      { name: "3BK29", type: "Main Gun", damage: 12630, penetration: 660 },
      { name: "3BM29 Nadfil", type: "Main Gun", damage: 11250, penetration: 500 },
      { name: "3BM50 Lead-1", type: "Main Gun", damage: 11170, penetration: 755 },
      { name: "Tondar", type: "Main Gun", damage: 10160, penetration: 750 }
    ]
  },
  {
    id: 127,
    name: "Leclerc S2 AZUR",
    type: "Main Battle Tank",
    faction: "French",
    tier: "IV",
    image: "Leclerc-S2-AZUR.jpg",
    description: "Upgraded French main battle tank with urban warfare package and improved armor.",
    stats: { health: 42400, speed: 72, armor: "1080mm", agility: 41 },
    weapons: [
      { name: "OFL 120 G1 APFSDS", type: "Main Gun", damage: 11240, penetration: 495 },
      { name: "OE 120 F1 HEI", type: "Main Gun", damage: 5000, penetration: 85 },
      { name: "OCC 120 G1 HEAT", type: "Main Gun", damage: 12230, penetration: 480 },
      { name: "OFL 120 F1 APFSDS", type: "Main Gun", damage: 11610, penetration: 675 },
      
    ]
  },
  {
    id: 128,
    name: "Object 640",
    type: "Main Battle Tank",
    faction: "Russian",
    tier: "IV",
    image: "Object-640.jpg",
    description: "The Object 640 \"Black Eagle\" is a Russian prototype main battle tank with modular armor.",
    stats: { health: 42400, speed: 80, armor: "1200mm", agility: 38 },
    weapons: [
      { name: "3BM60 Lead-2", type: "Main Gun", damage: 11830, penetration: 780 },
      { name: "3BK18M", type: "Main Gun", damage: 12390, penetration: 550 },
      { name: "3OF26", type: "Main Gun", damage: 5000, penetration: 92 },
      { name: "9M119", type: "Main Gun", damage: 10160, penetration: 750 }
    ]
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
      { name: "SpikeNLOS", type: "Missile", damage: 14250, penetration: 1000, reload: 4 }
    ]
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
      { name: "DM12A1 HEAT", type: "Main Gun", damage: 12140, penetration: 500 }
    ]
  },
  {
    id: 131,
    name: "T-20 Monolit",
    type: "Tank Destroyer",
    faction: "Russian",
    tier: "IV",
    image: "T-20-Monolit.jpg",
    description: "Advanced Russian main battle tank equipped with a 2A42 autocannon, Kornet ATGMs, and a 30mm AGS-30 grenade launcher. Known for its formidable firepower and versatility on the battlefield.",
    stats: {
      health: 42300,
      speed: 70,
      reverseSpeed: 50,
      turretRotationSpeed: 49.8,
      hullRotationSpeed: 40,
      armor: 400,
      agility: 45
    },
    weapons: [
      { name: "3UBR6", type: "Main Gun", damage: 560, penetration: 71 },
      { name: "3UBR8", type: "Main Gun", damage: 590, penetration: 165 },
      { name: "30F8", type: "Main Gun", damage: 675, penetration: 50 },
      { name: "M929", type: "Main Gun", damage: 630, penetration: 189 },
      { name: "VOG-17M", type: "Missile", damage: 1600, penetration: 60, reload: 1.7 },
      { name: "VOG-30", type: "Missile", damage: 1800, penetration: 76, reload: 1.7 },
      { name: "9K135 Kornet", type: "Missile", damage: 14820, penetration: 1000, reload: 12 },
    ]
  },
  {
    id: 132,
    name: "KF31 Lynx",
    type: "Light Tank",
    faction: "German",
    tier: "IV",
    image: "KF31-Lynx.jpg",
    description: "A versatile German infantry fighting vehicle equipped with a 30mm autocannon and Spike LR2 missiles, adaptable for various combat roles.",
    stats: {
      health: 38600,
      speed: 80,
      reverseSpeed: 30,
      turretRotationSpeed: 50,
      hullRotationSpeed: 40,
      armor: 300,
      agility: 40
    },
    weapons: [
      { name: "PMC287", type: "Main Gun", damage: 570, penetration: 195 },
      { name: "PMC308", type: "Main Gun", damage: 300, penetration: 80 },
      { name: "MK246", type: "Main Gun", damage: 510, penetration: 87 },
      { name: "MK266", type: "Main Gun", damage: 270, penetration: 55 },
      { name: "SPIKE-LR II", type: "Missile", damage: 10090, penetration: 900, reload: 10 }
    ]
  },
  {
    id: 133,
    name: "K2 Black Panther",
    type: "Main Battle Tank",
    faction: "SouthKorean",
    tier: "IV",
    image: "K2-Black-Panther.jpg",
    description: "South Korea's advanced main battle tank, featuring superior firepower, mobility, armor protection, and state-of-the-art battlefield technology.",
    stats: {
      health: 42800,
      speed: 75,
      reverseSpeed: 0,
      turretRotationSpeed: 0,
      hullRotationSpeed: 40,
      armor: 600,
      agility: 0
    },
    weapons: [
      { name: "K276 APFSDS", type: "Main Gun", damage: 11500, penetration: 600 },
      { name: "K279 APFSDS", type: "Main Gun", damage: 11830, penetration: 740 },
      { name: "K280 HEAT-MP", type: "Main Gun", damage: 12450, penetration: 680 },
      { name: "KSTAM-II", type: "Missile", damage: 9560, penetration: 850}
    ]
  },
  {
    id: 134,
    name: "Al-Khalid",
    type: "Main Battle Tank",
    faction: "Pakistani",
    tier: "IV",
    image: "Al-Khalid.jpg",
    description: "Pakistani main battle tank, jointly developed with China, featuring advanced firepower, mobility, and protection, serving as Pakistan Army's backbone.",
    stats: {
      health: 40800,
      speed: 70,
      reverseSpeed: 0,
      turretRotationSpeed: 0,
      hullRotationSpeed: 0,
      armor: 810,
      agility: 38
    },
    weapons: [
      { name: "DTB-125 HE", type: "Main Gun", damage: 4980, penetration: 83 },
      { name: "DTP-125 HEAT", type: "Main Gun", damage: 12230, penetration: 480 },
      { name: "DTC10-125", type: "Main Gun", damage: 11620, penetration: 680 },
      { name: "TYPE 1985-I", type: "Main Gun", damage: 11120, penetration: 466 }
    ]
  },
  {
    id: 135,
    name: "Arjun Mk.2",
    type: "Main Battle Tank",
    faction: "Indian",
    tier: "IV",
    image: "Arjun-Mk.2.jpg",
    description: "India's upgraded battle tank with stronger armor, 120mm missile-firing gun, advanced systems, and better mobility for modern combat.",
    stats: {
      health: 46600,
      speed: 70,
      reverseSpeed: 0,
      turretRotationSpeed: 0,
      hullRotationSpeed: 35,
      armor: 810,
      agility: 35
    },
    weapons: [
      { name: "L31A7 HESH", type: "Main Gun", damage: 11500, penetration: 152 },
      { name: "PCD APHE", type: "Main Gun", damage: 12160, penetration: 450 },
      { name: "Mk.II APFSD", type: "Main Gun", damage: 11560, penetration: 650 },
      { name: "LAHAT HEAT", type: "Main Gun", damage: 10250, penetration: 800 }
    ]
  },
  {
    id: 136,
    name: "M10 Booker",
    type: "Light Tank",
    faction: "American",
    tier: "IV",
    image: "M10-Booker.jpg",
    description: "A mobile assault gun designed to neutralize fortified positions and light armor, featuring a 105mm M35 gun.",
    stats: {
      health: 39300,
      speed: 75,
      reverseSpeed: 30,
      turretRotationSpeed: 30,
      hullRotationSpeed: 35,
      armor: 350,
      agility: 38
    },
    weapons: [
      { name: "M392A2", type: "Main Gun", damage: 9480, penetration: 372 },
      { name: "M393A2", type: "Main Gun", damage: 10340, penetration: 127 },
      { name: "M456A2", type: "Main Gun", damage: 10890, penetration: 400 },
      { name: "M900", type: "Main Gun", damage: 10320, penetration: 582 },
      { name: "SwitchBlade 300", type: "Missile", damage: 6730, penetration: 390, reload: 15}
    ]
  },
  {
    id: 137,
    name: "PL-01",
    type: "Light Tank",
    faction: "Polish",
    tier: "IV",
    image: "PL-01.jpg",
    description: "A concept stealth tank featuring a 120mm cannon and advanced camouflage systems.",
    stats: {
      health: 36100,
      speed: 85,
      reverseSpeed: 45,
      turretRotationSpeed: 40,
      hullRotationSpeed: 30,
      armor: 320,
      agility: 36
    },
    weapons: [
      { name: "M829A3", type: "Main Gun", damage: 10450, penetration: 670 },
      { name: "M830", type: "Main Gun", damage: 10930, penetration: 800 },
      { name: "MRM-CE", type: "Main Gun", damage: 10000, penetration: 850 },
      { name: "MRM-KE", type: "Main Gun", damage: 9150, penetration: 980 }
    ]
  },
  {
    id: 138,
    name: "M-SHORAD",
    type: "Anti-Air",
    faction: "American",
    tier: "IV",
    image: "M-SHORAD.jpg",
    description: "Mobile short-range air defense system equipped with autocannons, Stinger missiles, and radar-guided targeting.",
    stats: {
      health: 27900,
      speed: 97,
      reverseSpeed: 30,
      turretRotationSpeed: 55,
      hullRotationSpeed: 50,
      armor: 250,
      agility: 55
    },
    weapons: [
      { name: "XM914", type: "Main Gun", damage: 633, penetration: 120 },
      { name: "Stinger Launcher", type: "Missile", damage: 4700, penetration: 35, reload: 10 },
      { name: "AGM-114 Hellfire", type: "Missile", damage: 11700, penetration: 950, reload: 10 }
    ]
  },
  {
    id: 139,
    name: "TOS-1A",
    type: "MLRS",
    faction: "Russian",
    tier: "IV",
    image: "TOS-1A.jpg",
    description: "Heavy flamethrower rocket launcher mounted on a tank chassis, designed for area suppression and destruction of entrenched enemies.",
    stats: {
      health: 37100,
      speed: 60,
      reverseSpeed: 25,
      turretRotationSpeed: 20,
      hullRotationSpeed: 30,
      armor: 400,
      agility: 44
    },
    weapons: [
      { name: "M0.1.01.04 TBC", type: "Missile", damage: 4500, penetration: 160, reload: 35 },
      { name: "M0.1.01.04M INC", type: "Missile", damage: 12600, penetration: 85, reload: 35 }
    ]
  },
  {
    id: 140,
    name: "M270 MLRS",
    type: "MLRS",
    faction: "American",
    tier: "IV",
    image: "M270-MLRS.jpg",
    description: "Multiple Launch Rocket System capable of delivering devastating area bombardment.",
    stats: { health: 31400, speed: 65, armor: "450mm", agility: 26 },
    weapons: [
      { name: "M31", type: "Guided Rocket", damage: 18225, penetration: 165, reload: 15.7 },
      { name: "M31", type: "Guided Rocket", damage: 15525, penetration: 400, reload: 15.7 },
      { name: "G-MLRS-ER", type: "Guided Rocket", damage: 16200, penetration: 250, reload: 15.7 },
      { name: "ATACMS Block I", type: "Missile", damage: 20500, penetration: 200, reload: 20 },
      { name: "ATACMS Block II", type: "Missile", damage: 21250, penetration: 600, reload: 20 }
    ]
  },
  {
    id: 141,
    name: "PLZ-05",
    type: "SPH",
    faction: "Chinese",
    tier: "IV",
    image: "PLZ-05.jpg",
    description: "Modern 155mm self-propelled howitzer designed for long-range artillery support and rapid deployment.",
    stats: {
      health: 31200,
      speed: 56,
      reverseSpeed: 16,
      turretRotationSpeed: 25,
      hullRotationSpeed: 30,
      armor: 350,
      agility: 30
    },
    weapons: [
      { name: "BEE17A/155", type: "Main Gun", damage: 16875, penetration: 135 },
      { name: "GP155A", type: "Main Gun", damage: 11250, penetration: 200 },
      { name: "GP155B", type: "Main Gun", damage: 10625, penetration: 250 },
      { name: "GP155E", type: "Main Gun", damage: 10250, penetration: 400 }
    ]
  },
  {
    id: 142,
    name: "M109A6 Paladin",
    type: "SPH",
    faction: "American",
    tier: "IV",
    image: "M109A6-Paladin.jpg",
    description: "Modernized 155mm self-propelled artillery system providing rapid, accurate fire support for ground forces.",
    stats: {
      health: 31100,
      speed: 64,
      reverseSpeed: 26,
      turretRotationSpeed: 25,
      hullRotationSpeed: 30,
      armor: 350,
      agility: 28
    },
    weapons: [
      { name: "M107", type: "Main Gun", damage: 7200, penetration: 112 },
      { name: "M549A1", type: "Main Gun", damage: 14940, penetration: 187 },
      { name: "M48A1", type: "Main Gun", damage: 6820, penetration: 115 },
      { name: "M712 Copperhead", type: "Main Gun", damage: 4900, penetration: 431 },
    ]
  },
  {
    id: 143,
    name: "FK 2000",
    type: "Anti-Air",
    faction: "Chinese",
    tier: "IV",
    image: "FK-2000.jpg",
    description: "Modern Chinese mobile anti-aircraft system with radar-guided missiles and rapid-fire autocannons for air defense.",
    stats: {
      health: 35000,
      speed: 60,
      reverseSpeed: 60,
      turretRotationSpeed: 60,
      hullRotationSpeed: 50,
      armor: 300,
      agility: 75
    },
    weapons: [
      { name: "BZT-30", type: "Main Gun", damage: 500, penetration: 116 },
      { name: "OZT-30", type: "Main Gun", damage: 680, penetration: 56 },
      { name: "FK-2000", type: "Missile", damage: 9720, penetration: 102, reload: 25 }
    ]
  },
  {
    id: 144,
    name: "Otomatic 76",
    type: "Anti-Air",
    faction: "Italian",
    tier: "IV",
    image: "Otomatic-76.jpg",
    description: "Self-propelled anti-aircraft gun with rapid-fire 76mm cannon.",
    stats: { health: 39100, speed: 65, armor: "380mm", agility: 36 },
    weapons: [
      { name: "76/62 APFSDS", type: "Main Gun", damage: 3570, penetration: 413 },
      { name: "76/62 HE-VT MOM", type: "Main Gun", damage: 1610, penetration: 89 },
      { name: "76/62 SAPOM", type: "Main Gun", damage: 2750, penetration: 100 }
    ]
  },
  {
    id: 145,
    name: "BM-57-2 Kochevnik",
    type: "Tank Destroyer",
    faction: "Russian",
    tier: "IV",
    image: "BM-57-2-Kochevnik.jpg",
    description: "A modern Russian heavy tank armed with a 125mm smoothbore cannon and multiple defensive systems, built for frontline dominance.",
    stats: {
      health: 42800,
      speed: 75,
      reverseSpeed: 28,
      turretRotationSpeed: 45,
      hullRotationSpeed: 40,
      armor: 500,
      agility: 40
    },
    weapons: [
      { name: "BR-281SP", type: "Main Gun", damage: 1540, penetration: 147 },
      { name: "BR-281U", type: "Main Gun", damage: 1400, penetration: 181 },
      { name: "OR-281", type: "Main Gun", damage: 800, penetration: 73 },
      { name: "9K135 Kornet", type: "Missile", damage: 14820, penetration: 1000, reload: 12 }
    ]
  },
  {
    id: 146,
    name: "ADATS",
    type: "Missile Carrier",
    faction: "American",
    tier: "IV",
    image: "ADATS.jpg",
    description: "A mobile air-defense system with radar-guided missiles, protecting forces from aerial threats.",
    stats: {
      health: 32300,
      speed: 66,
      reverseSpeed: 21,
      turretRotationSpeed: 45,
      hullRotationSpeed: 35,
      armor: 500,
      agility: 35
    },
    weapons: [
      { name: "PGU-32U/T", type: "Main Gun", damage: 410, penetration: 104 },
      { name: "M791", type: "Main Gun", damage: 480, penetration: 120 },
      { name: "M792", type: "Main Gun", damage: 240, penetration: 52 },
      { name: "M919", type: "Main Gun", damage: 510, penetration: 171 },
      { name: "MIM-146", type: "Missile", damage: 12120, penetration: 900, reload: 12 },
      { name: "MIM-146", type: "Missile", damage: 7780, penetration: 290, reload: 9 },
    ]
  },
  {
    id: 147,
    name: "MGM-166 LOSAT",
    type: "Missile Carrier",
    faction: "American",
    tier: "IV",
    image: "MGM-166.jpg",
    description: "A U.S. prototype missile, using hypervelocity kinetic energy to destroy heavily armored tanks at range.",
    stats: {
      health: 29000,
      speed: 69,
      reverseSpeed: 24,
      turretRotationSpeed: 45,
      hullRotationSpeed: 35,
      armor: 500,
      agility: 41
    },
    weapons: [
      { name: "LOSAT MGM", type: "Missile", damage: 12740, penetration: 764, reload: 20 }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },

{
    "id": 309,
    "name": "F-15SE Silent Eagle",
    "type": "Fighter Jet",
    "faction": "American",
    "tier": "III",
    "image": "F-15EX-Eagle-II.jpg",
    "description": "advanced variant of the F-15 Strike Eagle with modern avionics and stealth characteristics.",
    "stats": { "health": 19800, "speed": 780, "afterburnerSpeed": 2390, "agility": 43 },
    "weapons": [
      { "name": "GBU-38", "type": "Guided Bomb", "damage": 14300, "penetration": 120, "reload": 25 },
      { "name": "GBU-31", "type": "Guided Bomb", "damage": 19400, "penetration": 360, "reload": 40 },
      { "name": "GBU-32", "type": "Guided Bomb", "damage": 15700, "penetration": 200, "reload": 35 },
      { "name": "AGM-65", "type": "Air-to-Surface Missile", "damage": 11000, "penetration": 830, "reload": 22 },
      { "name": "AIM-7", "type": "Medium-Range AAM", "damage": 6200, "penetration": 65, "reload": 20 },
      { "name": "AGM-84H/K", "type": "Anti-Ship Missile", "damage": 18900, "penetration": 310, "reload": 35 },
      { "name": "AIM-120", "type": "Medium-Range AAM", "damage": 11300, "penetration": 60, "reload": 20 }
    ]
  },
  {
    "id": 310,
    "name": "Su-35S",
    "type": "Fighter Jet",
    "faction": "Russian",
    "tier": "III",
    "image": "Su-35S.png",
    "description": "Highly maneuverable 4++ generation multirole fighter with thrust vectoring engines and powerful radar.",
    "stats": { "health": 24400, "speed": 880, "afterburnerSpeed": 2250, "agility": 49 },
    "weapons": [
      { "name": "R-73", "type": "Short-Range AAM", "damage": 4900, "penetration": 60, "reload": 15 },
      { "name": "R-27", "type": "Medium-Range AAM", "damage": 8100, "penetration": 65, "reload": 20},
      { "name": "R-77", "type": "Medium-Range AAM", "damage": 8100, "penetration": 55, "reload": 20 },
      { "name": "Kh-31", "type": "Air-to-Surface Missile", "damage": 8100, "penetration": 230, "reload": 20 },
      { "name": "Kh-38M", "type": "Air-to-Ground Missile", "damage": 17300, "penetration": 310, "reload": 40 },
      { "name": "KAB-500L", "type": "Guided Bomb (Laser)", "damage": 17300, "penetration": 320, "reload": 40 },
      { "name": "KAB-500Kr", "type": "Guided Bomb (TV)", "damage": 17800, "penetration": 210, "reload": 40 },
      { "name": "FAB-500", "type": "Unguided Bomb", "damage": 16000, "penetration": 210, "reload": 35 },
      { "name": "B-8M1", "type": "Rocket Pod (S-8)", "damage": 5100, "penetration": 420, "reload": 20, "rateOfFire": "80 rockets" },
      { "name": "B-13L", "type": "Rocket Pod (S-13)", "damage": 9200, "penetration": 250, "reload": 40, "rateOfFire": "20 rockets" },
      { "name": "GSh-30-1 30mm", "type": "Autocannon", "damage": 400, "penetration": 70, "rateOfFire": "1500 rpm" }
    ]
  },
  {
    "id": 311,
    "name": "A-10A Thunderbolt",
    "type": "Fighter Jet",
    "faction": "American",
    "tier": "III",
    "image": "A-10A-Thunderbolt.jpg",
    "description": "Close air support aircraft designed around the GAU-8 Avenger cannon.",
    "stats": { "health": 27600, "speed": 560, "afterburnerSpeed": 760, "agility": 48 },
    "weapons": [
      { "name": "LAU-61", "type": "Rocket Pod", "damage": 4100, "penetration": 290, "reload": 20 },
      { "name": "MK-84", "type": "General-Purpose Bomb", "damage": 19400, "penetration": 360, "reload": 40 },
      { "name": "LAU-10 x3", "type": "Rocket Pod", "damage": 7400, "penetration": 500, "reload": 40 },
      { "name": "GBU-32", "type": "Guided Bomb", "damage": 15700, "penetration": 200, "reload": 35 },
      { "name": "GBU-12", "type": "Guided Bomb", "damage": 18590, "penetration": 120, "reload": 30 },
      { "name": "AGM-65", "type": "Air-to-Surface Missile", "damage": 11000, "penetration": 830, "reload": 22 },
      { "name": "AIM-132", "type": "Short-Range AAM", "damage": 5200, "penetration": 65, "reload": 15 },
      { "name": "AGM-12B", "type": "Air-to-Surface Missile", "damage": 11500, "penetration": 600, "reload": 41 },
      { "name": "AIM-120", "type": "Medium-Range AAM", "damage": 11300, "penetration": 60, "reload": 20 }
    ]
  },
  {
    "id": 400,
    "name": "Leopard 2A4",
    "type": "Main Battle Tank",
    "faction": "German",
    "tier": "III",
    "description": "Proven main battle tank with excellent firepower and mobility balance.",
    "image": "Leopard-2A4.jpg",
    "stats": { "health": 39200, "speed": 72, "armor": "800mm", "agility": 32 },
    "weapons": [
      { "name": "DM12", "type": "Main Gun", "damage": 12100, "penetration": 480 },
      { "name": "DM13", "type": "Main Gun", "damage": 9800, "penetration": 393 },
      { "name": "DM23", "type": "Main Gun", "damage": 38911, "penetration": 337 }
    ]
  },
  {
    "id": 401,
    "name": "T-72A",
    "type": "Main Battle Tank",
    "faction": "Russian",
    "tier": "III",
    "description": "Widely exported main battle tank with robust design and effective firepower.",
    "image": "T-72A.jpg",
    "stats": { "health": 37500, "speed": 60, "armor": "750mm", "agility": 44 },
    "weapons": [
      { "name": "3BM22", "type": "Main Gun", "damage": 11100, "penetration": 425 },
      { "name": "30F26", "type": "Main Gun", "damage": 5000, "penetration": 92 },
      { "name": "9M119", "type": "Main Gun", "damage": 10160, "penetration": 750 },
      { "name": "3BM42", "type": "Main Gun", "damage": 11700, "penetration": 720 },
      { "name": "3BK12M", "type": "Main Gun", "damage": 12140, "penetration": 440 }
    ]
  },
  {
    "id": 402,
    "name": "M1 Abrams",
    "type": "Main Battle Tank",
    "faction": "American",
    "tier": "III",
    "image": "M1-Abrams.jpg",
    "description": "M1A1 with M256 120mm smoothbore.",
    "stats": { "health": 38400, "speed": 69, "armor": "900mm", "agility": 36 },
    "weapons": [
      { "name": "M829", "type": "Main Gun", "damage": 9020, "penetration": 490 },
      { "name": "M830", "type": "Main Gun", "damage": 10930, "penetration": 800 },
      { "name": "AMP", "type": "Main Gun", "damage": 11070, "penetration": 200 },
      { "name": "M829A1", "type": "Main Gun", "damage": 9520, "penetration": 630 }
    ]
  },
  {
    "id": 403,
    "name": "MBT-70",
    "type": "Main Battle Tank",
    "faction": "American",
    "tier": "III",
    "image": "MBT-70.jpg",
    "description": "Experimental joint American-German tank with 152mm gun/missile launcher.",
    "stats": { "health": 37200, "speed": 65, "armor": "800mm", "agility": 30 },
    "weapons": [
      { "name": "XM578E1", "type": "Main Gun", "damage": 10400, "penetration": 285 },
      { "name": "M657A2", "type": "Main Gun", "damage": 13500, "penetration": 138 },
      { "name": "MGM51 Shillelagh", "type": "Main Gun", "damage": 9500, "penetration": 431 },
      { "name": "M657A2", "type": "Main Gun", "damage": 11300, "penetration": 380 }
    ]
  },
  {
    "id": 404,
    "name": "PT-91 Twardy",
    "type": "Main Battle Tank",
    "faction": "Polish",
    "tier": "III",
    "image": "PT-91-Twardy.jpg",
    "description": "Polish upgrade of the Soviet T-72M1 with improved armor and fire control.",
    "stats": { "health": 38200, "speed": 60, "armor": "820mm", "agility": 40 },
    "weapons": [
      { "name": "3BM22", "type": "Main Gun", "damage": 11100, "penetration": 425 },
      { "name": "30F26", "type": "Main Gun", "damage": 5000, "penetration": 92 },
      { "name": "9M119", "type": "Main Gun", "damage": 10160, "penetration": 750 },
      { "name": "3BM42", "type": "Main Gun", "damage": 11700, "penetration": 720 },
      { "name": "3BK12M", "type": "Main Gun", "damage": 12140, "penetration": 440 }
    ]
  },
  {
    "id": 405,
    "name": "T-64BV",
    "type": "Main Battle Tank",
    "faction": "Russian",
    "tier": "III",
    "image": "T-64BV.jpg",
    "description": "Soviet main battle tank with composite armor and 125mm smoothbore gun.",
    "stats": { "health": 36700, "speed": 55, "armor": "800mm", "agility": 45 },
    "weapons": [
      { "name": "3BM42", "type": "Main Gun", "damage": 11700, "penetration": 720 },
      { "name": "9M112", "type": "Main Gun", "damage": 10070, "penetration": 700 },
      { "name": "30F26", "type": "Main Gun", "damage": 5000, "penetration": 92 },
      { "name": "3BK18M", "type": "Main Gun", "damage": 12390, "penetration": 550 }
    ]
  },
  {
    "id": 406,
    "name": "Type 90",
    "type": "Main Battle Tank",
    "faction": "Japanese",
    "tier": "III",
    "image": "Type-90.jpg",
    "description": "Japanese main battle tank with advanced armor and 120mm smoothbore gun.",
    "stats": { "health": 37000, "speed": 55, "armor": "720mm", "agility": 40 },
    "weapons": [
      { "name": "JM33", "type": "Main Gun", "damage": 11330, "penetration": 481 },
      { "name": "JM12A1", "type": "Main Gun", "damage": 12360, "penetration": 480 },
      { "name": "Type 10", "type": "Main Gun", "damage": 2920, "penetration": 650 }
    ]
  },
  {
    "id": 407,
    "name": "M60A3 (MZK)",
    "type": "Main Battle Tank",
    "faction": "Turkish",
    "tier": "III",
    "image": "M60A3-(MZK).jpg",
    "description": "Improved export variant of ZTZ96 with enhanced protection and gun systems.",
    "stats": { "health": 39100, "speed": 55, "armor": "770mm", "agility": 36 },
    "weapons": [
      { "name": "DM12 HEAT", "type": "Main Gun", "damage": 10630, "penetration": 400 },
      { "name": "DM512 HESH", "type": "Main Gun", "damage": 10090, "penetration": 127 },
      { "name": "DM23 APFSDS", "type": "Main Gun", "damage": 9630, "penetration": 337 },
      { "name": "DM33 APFSDS", "type": "Main Gun", "damage": 9940, "penetration": 508 }
    ]
  },
  {
    "id": 408,
    "name": "ZTZ85-II",
    "type": "Main Battle Tank",
    "faction": "Chinese",
    "tier": "III",
    "image": "ZTZ85-II.jpg",
    "description": "Chinese upgrade of Type 85 tank with improved armor and firepower.",
    "stats": { "health": 35200, "speed": 57, "armor": "700mm", "agility": 38 },
    "weapons": [
      { "name": "125-I", "type": "Main Gun", "damage": 9020, "penetration": 465 },
      { "name": "DTB125", "type": "Main Gun", "damage": 4300, "penetration": 160 },
      { "name": "DTP-125", "type": "Main Gun", "damage": 9430, "penetration": 480 },
      { "name": "DTC10-125", "type": "Main Gun", "damage": 8800, "penetration": 680 }
    ]
  },
  {
    "id": 409,
    "name": "ZTZ96",
    "type": "Main Battle Tank",
    "faction": "Chinese",
    "tier": "III",
    "image": "ZTZ96.jpg",
    "description": "Modern Chinese MBT with 125mm smoothbore and composite armor.",
    "stats": { "health": 36500, "speed": 24, "armor": "750mm", "agility": 34 },
    "weapons": [
      { "name": "125-I", "type": "Main Gun", "damage": 9020, "penetration": 465 },
      { "name": "DTB125", "type": "Main Gun", "damage": 4300, "penetration": 160 },
      { "name": "DTP-125", "type": "Main Gun", "damage": 9430, "penetration": 480 },
      { "name": "DTC10-125", "type": "Main Gun", "damage": 8800, "penetration": 680 }
    ]
  },
  {
    "id": 410,
    "name": "ZTZ-96A (P)",
    "type": "Main Battle Tank",
    "faction": "Chinese",
    "tier": "III",
    "image": "ZTZ-96A-(P).jpg",
    "description": "Improved export variant of ZTZ96 with enhanced protection and gun systems.",
    "stats": { "health": 36900, "speed": 24, "armor": "770mm", "agility": 34 },
    "weapons": [
      { "name": "DTB125", "type": "Main Gun", "damage": 4300, "penetration": 160 },
      { "name": "DTP-125", "type": "Main Gun", "damage": 9430, "penetration": 480 },
      { "name": "Type1985 I", "type": "Main Gun", "damage": 10220, "penetration": 466 },
      { "name": "GP125", "type": "Main Gun", "damage": 9120, "penetration": 650 }
    ]
  },
  {
    "id": 411,
    "name": "AMX-30 Super",
    "type": "Main Battle Tank",
    "faction": "French",
    "tier": "III",
    "image": "AMX-30-Super.jpg",
    "description": "French Main Battle Tank featuring improved armor, a powerfull 105mm gun and control system",
    "stats": { "health": 36000, "speed": 65, "armor": "770mm", "agility": 42 },
    "weapons": [
      { "name": "OF 105 F1 APFSDS", "type": "Main Gun", "damage": 9910, "penetration": 361 },
      { "name": "OE 105 F1 HEI", "type": "Main Gun", "damage": 4500, "penetration": 55 },
      { "name": "OCC 105 F1 HEAT", "type": "Main Gun", "damage": 10790, "penetration": 350 },
      { "name": "OF 105 F2 APFSDS", "type": "Main Gun", "damage": 10090, "penetration": 459 }
    ]
  },
  {
    "id": 412,
    "name": "Merkava Mk.3",
    "type": "Main Battle Tank",
    "faction": "Israeli",
    "tier": "III",
    "description": "An Israeli MBT featuring modular armor, advanced fire control, 120mm gun, and rear troop compartment.",
    "image": "Merkava-Mk.3.jpg",
    "stats": { "health": 0, "speed": 0, "armor": "0", "agility": 0 },
    "weapons": [
      { "name": "3BM22", "type": "Main Gun", "damage": 11100, "penetration": 425 },
      { "name": "30F26", "type": "Main Gun", "damage": 5000, "penetration": 92 },
      { "name": "9M119", "type": "Main Gun", "damage": 10160, "penetration": 750 },
      { "name": "3BM42", "type": "Main Gun", "damage": 11700, "penetration": 720 },
      { "name": "3BK12M", "type": "Main Gun", "damage": 12140, "penetration": 440 }
    ]
  },
  {
    "id": 412,
    "name": "PLZ-07B",
    "type": "SPH",
    "faction": "Chinese",
    "tier": "III",
    "image": "PLZ-07B.jpg",
    "description": "Chinese 155mm self-propelled howitzer with high mobility and firepower.",
    "stats": { "health": 26000, "speed": 59, "armor": "200mm", "agility": 35 },
    "weapons": [
      { "name": "GP120A", "type": "Main Gun", "damage": 8100, "penetration": 240 },
      { "name": "GP120B", "type": "Main Gun", "damage": 7400, "penetration": 480 },
      { "name": "3OF56", "type": "Main Gun", "damage": 12200, "penetration": 120 },
      { "name": "ZBP1", "type": "Main Gun", "damage": 10450, "penetration": 400 }
    ]
  },
  {
    "id": 413,
    "name": "M110A2",
    "type": "SPH",
    "faction": "Japanese",
    "tier": "III",
    "image": "M110A2.jpg",
    "description": "American 203mm self-propelled artillery for heavy bombardment.",
    "stats": { "health": 27800, "speed": 63, "armor": "150mm", "agility": 36 },
    "weapons": [
      { "name": "M106", "type": "Main Gun", "damage": 10600, "penetration": 152 },
      { "name": "M650", "type": "Main Gun", "damage": 11700, "penetration": 185 },
      { "name": "M404", "type": "Main Gun", "damage": 9500, "penetration": 120 }
    ]
  },
  {
    "id": 414,
    "name": "2S31 Vena",
    "type": "SPH",
    "faction": "Russian",
    "tier": "III",
    "image": "2S31-Vena.jpg",
    "description": "Russian 120mm mortar howitzer on tracked chassis.",
    "stats": { "health": 23500, "speed": 79, "armor": "180mm", "agility": 42 },
    "weapons": [
      { "name": "ZVOF110", "type": "Main Gun", "damage": 11500, "penetration": 120 },
      { "name": "KM-8 Gran", "type": "Main Gun", "damage": 7000, "penetration": 180 },
      { "name": "3BO34", "type": "Main Gun", "damage": 9800, "penetration": 240 },
      { "name": "Kitolov 2M", "type": "Main Gun", "damage": 5100, "penetration": 280 }
    ]
  },
  {
    "id": 415,
    "name": "XM2001 Crusader",
    "type": "SPH",
    "faction": "American",
    "tier": "III",
    "image": "XM2001-Crusader.jpg",
    "description": "Experimental 155mm self-propelled howitzer with automatic loading.",
    "stats": { "health": 34800, "speed": 67, "armor": "200mm", "agility": 38 },
    "weapons": [
      { "name": "M982 HEDP", "type": "Main Gun", "damage": 6600, "penetration": 280 },
      { "name": "M795 HE", "type": "Main Gun", "damage": 12700, "penetration": 950 },
      { "name": "M267A2 HEAT", "type": "Main Gun", "damage": 8900, "penetration": 135 },
      { "name": "M864 CH", "type": "Main Gun", "damage": 8000, "penetration": 85 }
    ]
  },
  {
    "id": 416,
    "name": "Gepard 1A2",
    "type": "Anti-Air",
    "faction": "German",
    "tier": "III",
    "image": "Gepard-1A2.jpg",
    "description": "German SPAAG with twin 35mm Oerlikon cannons and radar-guided fire control.",
    "stats": { "health": 28900, "speed": 65, "armor": "35mm", "agility": 30 },
    "weapons": [
      { "name": "25 x 228 API", "type": "Main Gun", "damage": 580, "penetration": 75 },
      { "name": "25 x 228 HEI", "type": "Main Gun", "damage": 300, "penetration": 59 },
      { "name": "35 x 228 APDS", "type": "Main Gun", "damage": 610, "penetration": 127 },
      { "name": "Fliegerfaust 2 Stinger", "type": "Missile", "damage": 4210, "penetration": 60, "reload": 12 }
    ]
  },
  {
    "id": 418,
    "name": "K-31 Cheonma",
    "type": "Anti-Air",
    "faction": "SouthKorean",
    "tier": "III",
    "image": "K-31-Cheonma.jpg",
    "description": "Korean SPAAG with 30mm cannons and short-range SAM missiles.",
    "stats": { "health": 23100, "speed": 60, "armor": "25mm", "agility": 35 },
    "weapons": [
      { "name": "Crotale-NG-Launcher", "type": "Missile", "damage": 5790, "penetration": 58, "reload": 12 }
    ]
  },
  {
    "id": 419,
    "name": "PGZ-09",
    "type": "Anti-Air",
    "faction": "Chinese",
    "tier": "III",
    "image": "PGZ-09.jpg",
    "description": "Tracked Chinese self-propelled AA, twin 35mm guns, light armor, medium mobility, excels against helicopters and low-flying aircraft.",
    "stats": { "health": 25500, "speed": 60, "armor": "30mm", "agility": 30 },
    "weapons": [
      { "name": "DKG01A", "type": "Main Gun", "damage": 270, "penetration": 59 },
      { "name": "DKP01A", "type": "Main Gun", "damage": 500, "penetration": 75 },
      { "name": "DM23", "type": "Main Gun", "damage": 530, "penetration": 127 },
      { "name": "PMD062", "type": "Main Gun", "damage": 290, "penetration": 59 }
    ]
  },
  {
    "id": 420,
    "name": "2S6M1 Tunguska-M1",
    "type": "Anti-Air",
    "faction": "Russian",
    "tier": "III",
    "image": "2S6M1-Tunguska-M1.jpg",
    "description": "Russian SPAAG with twin 30mm cannons and 9M311 SAM missiles.",
    "stats": { "health": 25000, "speed": 65, "armor": 35, "agility": 35 },
    "weapons": [
      { "name": "3UBR6", "type": "Main Gun", "damage": 560, "penetration": 71 },
      { "name": "30F8", "type": "Main Gun", "damage": 675, "penetration": 50 },
      { "name": "3UBR8", "type": "Main Gun", "damage": 590, "penetration": 165 },
      { "name": "ZUR 9M311", "type": "Missile", "damage": 8100, "penetration": 69, "reload": 24 }
    ]
  },
  {
    "id": 421,
    "name": "Type 625E SHORAD",
    "type": "Anti-Air",
    "faction": "Chinese",
    "tier": "III",
    "image": "Type-625E-SHORAD.jpg",
    "description": "Chinese short-range air defense vehicle with 25mm cannons and SAM missiles.",
    "stats": { "health": 22000, "speed": 100, "armor": "25mm", "agility": 60 },
    "weapons": [
      { "name": "30*160 APFSDS", "type": "Main Gun", "damage": 0, "penetration": 128 },
      { "name": "30*160 HEI", "type": "Main Gun", "damage": 351, "penetration": 60 },
      { "name": "FB-10A", "type": "Missile", "damage": 4800, "penetration": 55, "reload": 15 }
    ]
  },
  {
    "id": 422,
    "name": "XM975",
    "type": "Anti-Air",
    "faction": "American",
    "tier": "III",
    "image": "XM975.jpg",
    "description": "US SPAAG with 20mm Vulcan cannon and Stinger SAM missiles.",
    "stats": { "health": 23500, "speed": 57, "armor": "40mm", "agility": 30 },
    "weapons": [
      { "name": "SAM Rokand", "type": "Missile", "damage": 8910, "penetration": 85, "reload": 6 }
    ]
  },
  {
    "id": 423,
    "name": "AFT-10",
    "type": "Anti-Air",
    "faction": "Chinese",
    "tier": "III",
    "image": "AFT-10.jpg",
    "description": "Modern armored combat vehicle with high mobility, HJ-10 Missiles, advanced targeting, versatile for battlefield assaults and defense operationsand",
    "stats": { "health": 26000, "speed": 70, "armor": "30mm", "agility": 40 },
    "weapons": [
      { "name": "HJ-10", "type": "Missile", "damage": 12558, "penetration": 1400, "reload": 13 }
    ]
  },
  {
    "id": 424,
    "name": "M113 Hellfire",
    "type": "Missile Carrier",
    "faction": "American",
    "tier": "III",
    "image": "M113-Hellfire.jpg",
    "description": "M113 variant carrying AGM-114 Hellfire missiles for ground and air targets.",
    "stats": { "health": 24500, "speed": 62, "armor": "25mm", "agility": 35 },
    "weapons": [
      { "name": "ATGMs ARL", "type": "Missile", "damage": 9000, "penetration": 950, "reload": 10 },
      { "name": "ATGMs Laser", "type": "Missile", "damage": 10900, "penetration": 1000, "reload": 10 }
    ]
  },
  {
    "id": 425,
    "name": "9A52-2 Smerch",
    "type": "MLRS",
    "faction": "Russian",
    "tier": "III",
    "image": "9A52-2-Smerch.jpg",
    "description": "Heavy Russian MLRS with 300mm rockets for long-range bombardment.",
    "stats": { "health": 26000, "speed": 60, "armor": "25mm", "agility": 23 },
    "weapons": [
      { "name": "9M542 HE", "type": "Missile", "damage": 18000, "penetration": 120, "reload": 16 },
      { "name": "9M530 HESH", "type": "Missile", "damage": 16600, "penetration": 300, "reload": 16 },
      { "name": "9M55K5 CH", "type": "Missile", "damage": 17100, "penetration": 460, "reload": 16 }
    ]
  },
  {
    "id": 426,
    "name": "Type 89 MLRS",
    "type": "MLRS",
    "faction": "Chinese",
    "tier": "III",
    "image": "Type-89-MLRS.jpg",
    "description": "Japanese 300mm MLRS for long-range artillery strikes.",
    "stats": { "health": 24500, "speed": 55, "armor": "25mm", "agility": 36 },
    "weapons": [
      { "name": "Type 81 FSBS", "type": "Missile", "damage": 11900, "penetration": 165, "reload": 20 },
      { "name": "Type 81 FFBE", "type": "Missile", "damage": 10600, "penetration": 220, "reload": 20 },
      { "name": "Type 81", "type": "Missile", "damage": 9350, "penetration": 260, "reload": 20 }
    ]
  },
  {
    "id": 427,
    "name": "Type 75 MLRS",
    "type": "MLRS",
    "faction": "Japanese",
    "tier": "III",
    "image": "Type-75-MLRS.jpg",
    "description": "Japanese 300mm MLRS for long-range artillery strikes.",
    "stats": { "health": 22800, "speed": 51, "armor": "30mm", "agility": 35.5 },
    "weapons": [
      { "name": "Type 75 HE", "type": "Missile", "damage": 5700, "penetration": 85, "reload": 30 },
      { "name": "Type 75 mod 2 HEAT", "type": "Missile", "damage": 10300, "penetration": 350, "reload": 30 }
    ]
  },
  {
    "id": 428,
    "name": "AFT-09",
    "type": "Anti-Air",
    "faction": "Chinese",
    "tier": "III",
    "image": "AFT-09.jpg",
    "description": "Mobile missile tank with reinforced armor, launches guided missiles, excels in long-range strikes, tactical support, and battlefield versatility.",
    "stats": { "health": 23000, "speed": 96, "armor": "30mm", "agility": 40 },
    "weapons": [
      { "name": "ATGM HJ-9", "type": "Missile", "damage": 10192, "penetration": 1200, "reload": 6 }
    ]
  },
  {
    "id": 429,
    "name": "LAV-600",
    "type": "Tank Destroyer",
    "faction": "American",
    "tier": "III",
    "image": "LAV-600.jpg",
    "description": "Armored wheeled vehicle equipped with short-range missiles and machine guns.",
    "stats": { "health": 24000, "speed": 95, "armor": "20mm", "agility": 27 },
    "weapons": [
      { "name": "M392", "type": "Main Gun", "damage": 8295, "penetration": 350 },
      { "name": "M393", "type": "Main Gun", "damage": 11800, "penetration": 127 },
      { "name": "M456", "type": "Main Gun", "damage": 9800, "penetration": 400 },
      { "name": "M833", "type": "Main Gun", "damage": 9900, "penetration": 472 }
    ]
  },
  {
    "id": 430,
    "name": "HSTV-L",
    "type": "Light Tank",
    "faction": "American",
    "tier": "III",
    "image": "HSTV-L.jpg",
    "description": "A lightweight prototype tank, emphasizing mobility, advanced optics, and rapid firepower.",
    "stats": { "health": 26000, "speed": 84, "armor": "47mm", "agility": 40 },
    "weapons": [
      { "name": "XM855HE", "type": "Main Gun", "damage": 7560, "penetration": 68 },
      { "name": "XM885AP", "type": "Main Gun", "damage": 6160, "penetration": 370 }
    ]
  },
  {
    "id": 431,
    "name": "K21 KNIFV",
    "type": "Light Tank",
    "faction": "SouthKorean",
    "tier": "III",
    "image": "K21-KNIFV.jpg",
    "description": "South Korean infantry fighting vehicle, offering strong firepower, amphibious capability, protection, and advanced digital battlefield systems.",
    "stats": { "health": 35900, "speed": 76 , "armor": 50, "agility": 42 },
    "weapons": [
      { "name": "K237 APFSDS", "type": "Main Gun", "damage": 1490, "penetration": 200 },
      { "name": "K236 HEI", "type": "Main Gun", "damage": 770, "penetration": 74 },
      { "name": "K219 AP", "type": "Main Gun", "damage": 1340, "penetration": 147 },
      { "name": "K216 HEI", "type": "Main Gun", "damage": 690, "penetration": 68 },
      { "name": "Spike-LR2", "type": "Missile", "damage": 10090, "penetration": 900, "reload": 10 }
    ]
  },
  {
    "id": 432,
    "name": "Rookiat MTTD",
    "type": "Light Tank",
    "faction": "British",
    "tier": "III",
    "image": "Rookiat-MTTD.jpg",
    "description": "The Rooikat MTTD is a fast, wheeled tank destroyer with strong firepower.",
    "stats": { "health": 27200, "speed": 120, "armor": "40mm", "agility": 28 },
    "weapons": [
      { "name": "DM23", "type": "Main Gun", "damage": 8911, "penetration": 337 },
      { "name": "DM33", "type": "Main Gun", "damage": 10060, "penetration": 508 },
      { "name": "DM12", "type": "Main Gun", "damage": 12100, "penetration": 480 },
      { "name": "DM512", "type": "Main Gun", "damage": 10210, "penetration": 127 }
    ]
  },
  {
    "id": 433,
    "name": "ZBL-08",
    "type": "Light Tank",
    "faction": "Chinese",
    "tier": "III",
    "image": "ZBL-08.jpg.png",
    "description": "Wheeled armored personnel carrier with good mobility, moderate armor, versatile weapon options.",
    "stats": { "health": 26900, "speed": 111, "armor": "40mm", "agility": 64 },
    "weapons": [
      { "name": "ZUBR6 APBC", "type": "Main Gun", "damage": 540, "penetration": 112 },
      { "name": "Z0F8", "type": "Main Gun", "damage": 675, "penetration": 50 },
      { "name": "ZUBR8", "type": "Main Gun", "damage": 525, "penetration": 165 },
      { "name": "M929", "type": "Main Gun", "damage": 630, "penetration": 189 },
      { "name": "HJ-73B", "type": "Missile", "damage": 7800, "penetration": 500, "reload": 6 }
    ]
  },
  {
    "id": 434,
    "name": "ХM8 AGS",
    "type": "Light Tank",
    "faction": "American",
    "tier": "III",
    "image": "XM8.png",
    "description": "Wheeled armored personnel carrier with good mobility, moderate armor, versatile weapon options.",
    "stats": { "health": 26900, "speed": 111, "armor": "40mm", "agility": 64 },
    "weapons": [
      { "name": "ZUBR6 APBC", "type": "Main Gun", "damage": 540, "penetration": 112 },
      { "name": "Z0F8", "type": "Main Gun", "damage": 675, "penetration": 50 },
      { "name": "ZUBR8", "type": "Main Gun", "damage": 525, "penetration": 165 },
      { "name": "M929", "type": "Main Gun", "damage": 630, "penetration": 189 },
      { "name": "HJ-73B", "type": "Missile", "damage": 7800, "penetration": 500, "reload": 6 }
    ]
  },
  {
    "id": 435,
    "name": "VBCI-2",
    "type": "Light Tank",
    "faction": "French",
    "tier": "III",
    "image": "VBCI-2.jpg",
    "description": "A French 8×8 infantry fighting vehicle, upgraded from the VBCI with better armor and mobility",
    "stats": { "health": 26900, "speed": 111, "armor": "40mm", "agility": 64 },
    "weapons": [
      { "name": "MK246 API", "type": "Cannon", "damage": 1000, "penetration": 117, "reload": 10},
      { "name": "MK266 HEI", "type": "Cannon", "damage": 520, "penetration": 55, "reload": 10 },
      { "name": "MK258 APFSDS", "type": "Cannon", "damage": 1100, "penetration": 165, "reload": 10 },
      { "name": "MBDA-MMP", "type": "Missile", "damage": 12540, "penetration": 1000, "reload": 10 }
    ]
  },
  {
    "id": 436,
    "name": "WMA301",
    "type": "Tank Destroyer",
    "faction": "Chinese",
    "tier": "III",
    "image": "WMA301.jpg",
    "description": "A Chinese modern wheeled armored vehicle with strong firepower, protection, and mobility..",
    "stats": { "health": 28200, "speed": 85, "armor": "25mm", "agility": 35 },
    "weapons": [
      { "name": "Type 83 APFSDS", "type": "Main Gun", "damage": 10340, "penetration": 425 },
      { "name": "Type 83 HEAT", "type": "Main Gun", "damage": 9900, "penetration": 400 },
      { "name": "Type 83 HESH", "type": "Main Gun", "damage": 9410, "penetration": 127 },
      { "name": "GP 105", "type": "Main Gun", "damage": 9180, "penetration": 750 }
    ]
  },
  {
    "id": 437,
    "name": "Centauro I 120",
    "type": "Tank Destroyer",
    "faction": "Italian",
    "tier": "III",
    "image": "Centauro-I-120.jpg",
    "description": "Italian wheeled tank destroyer, 120mm gun, fast and mobile, light armor, strong firepower, ideal for hit-and-run and reconnaissance.",
    "stats": { "health": 26800, "speed": 110, "armor": "40mm", "agility": 41.8 },
    "weapons": [
      { "name": "DM33 APFSDS", "type": "Main Gun", "damage": 11120, "penetration": 550 },
      { "name": "DM12A1 HEATFS", "type": "Main Gun", "damage": 12100, "penetration": 480 },
      { "name": "CL3143 APFSDS", "type": "Main Gun", "damage": 11520, "penetration": 690 }
    ]
  },
  {
    "id": 438,
    "name": "BMD3",
    "type": "Light Tank",
    "faction": "Russian",
    "tier": "III",
    "description": "Light infantry fighting vehicle with amphibious capability and rapid deployment design.",
    "image": "BMD3.jpg",
    "stats": { "health": 24000, "speed": 70, "armor": "420mm", "agility": 40 },
    "weapons": [
      { "name": "3UBR6", "type": "Main Gun", "damage": 560, "penetration": 71 },
      { "name": "3UBR8", "type": "Main Gun", "damage": 590, "penetration": 165 },
      { "name": "30F8", "type": "Main Gun", "damage": 675, "penetration": 50 },
      { "name": "M929", "type": "Main Gun", "damage": 630, "penetration": 189 },
      { "name": "9K135 Kornet", "type": "Missile", "damage": 9473, "penetration": 1000, "reload": 8 },
      { "name": "AGS-17", "type": "Missile", "damage": 2640, "penetration": 50, "reload": 6 }
    ]
  },
  {
    "id": 439,
    "name": "Strf 9040 BILL",
    "type": "Light Tank",
    "faction": "Sweden",
    "tier": "III",
    "image": "Strf-9040-BILL.jpg",
    "description": "Swedish light tank with 40 mm autocannon and ATGMs, versatile but lightly armored, fast, lethal.",
    "stats": { "health": 26300, "speed": 80, "armor": "47mm", "agility": 36 },
    "weapons": [
      { "name": "Rbs 56", "type": "Missile", "damage": 7850, "penetration": 510, "reload": 10 },
      { "name": "Slsgr m/90 HEI", "type": "Main Gun", "damage": 640, "penetration": 61 },
      { "name": "Slpprj m/90 APSFSDS", "type": "Main Gun", "damage": 1370, "penetration": 173 },
      { "name": "Slpprj m/01 APFSDS", "type": "Main Gun", "damage": 1380, "penetration": 239 }
    ]
  },
  {
    "id": 440,
    "name": "M3A3 Bradley",
    "type": "Light Tank",
    "faction": "American",
    "tier": "III",
    "image": "M3A3-Bradley.jpg",
    "description": "Fast, armored infantry vehicle with strong firepower and decent survivability.",
    "stats": { "health": 26000, "speed": 84, "armor": "47mm", "agility": 40 },
    "weapons": [
      { "name": "PGU-32U/T", "type": "Main Gun", "damage": 405, "penetration": 115 },
      { "name": "M791", "type": "Main Gun", "damage": 473, "penetration": 111 },
      { "name": "M792", "type": "Main Gun", "damage": 608, "penetration": 48 },
      { "name": "M919", "type": "Main Gun", "damage": 495, "penetration": 140 }
    ]
  },
  {
    "id": 500,
    "name": "Mi-35P Hind-F",
    "type": "Helicopter",
    "faction": "Russian",
    "tier": "III",
    "image": "Mi-35P-Hind-F.jpg",
    "description": "Export version of Mi-24 family — gunship/transport hybrid with heavy ATGMs and rockets in MWT.",
    "stats": { "health": 21840, "speed": 221, "verticalSpeed": 13, "agility": 46 },
    "weapons": [
      { "name": "9K38 IGLA-V", "type": "Short-Range AAM", "damage": 4100, "penetration": 30, "reload": 15 },
      { "name": "9K121 Vikhr", "type": "Anti-Tank Missile", "damage": 7800, "penetration": 1000, "reload": 30 },
      { "name": "Attack ATGM", "type": "Anti-Tank Missile", "damage": 7500, "penetration": 850, "reload": 30 },
      { "name": "9-A 5013", "type": "Air-to-Ground Missile", "damage": 5100, "penetration": 460, "reload": 20 },
      { "name": "B8V20", "type": "Air-to-Ground Missile", "damage": 5100, "penetration": 420, "reload": 20 },
      { "name": "B-13L", "type": "Air-to-Ground Missile", "damage": 9200, "penetration": 160, "reload": 40 },
      { "name": "Kh-29T", "type": "Air-to-Ground Missile", "damage": 17800, "penetration": 280, "reload": 38 }
    ],
    "guns": [
      { "name": "GSh-23L(23mm)", "type": "Autocannon", "damage": 60, "penetration": 70, "reload": 250 },
      { "name": "UPK-23-250(23mm)", "type": "Rocket Pod", "damage": 300, "penetration": 70, "reload": 1200 }
    ]
  },
  {
    "id": 501,
    "name": "Mi-24 Super Hind",
    "type": "Helicopter",
    "faction": "Russian",
    "tier": "III",
    "image": "Mi-24-Super-Hind.jpg",
    "description": "Export version of Mi-24 family — gunship/transport hybrid with heavy ATGMs and rockets in MWT.",
    "stats": { "health": 28100, "speed": 335, "verticalSpeed": 25, "agility": 79 },
    "weapons": [
      { "name": "UB-32-57", "type": "Rocket Pod", "damage": 3900, "penetration": 220, "reload": 20 },
      { "name": "9K38 Igla-V", "type": "AAM (MANPADS)", "damage": 4100, "penetration": 30, "reload": 15 },
      { "name": "S-24", "type": "Missile", "damage": 14600, "penetration": 180, "reload": 15 },
      { "name": "R-60", "type": "AAM", "damage": 4600, "penetration": 36, "reload": 10 },
      { "name": "B8v20", "type": "Rocket Pod", "damage": 5100, "penetration": 420, "reload": 20 },
      { "name": "9M120 Attack", "type": "Missile", "damage": 7500, "penetration": 850, "reload": 25 },
      { "name": "B-13L", "type": "Rocket Pod", "damage": 9200, "penetration": 160, "reload": 40 },
      { "name": "Attack ATGM", "type": "Missile", "damage": 7500, "penetration": 850, "reload": 30 },
      { "name": "KAB-250", "type": "Missile", "damage": 14900, "penetration": 130, "reload": 25 },
      { "name": "DENEL ZT3 Ingwe", "type": "Missile", "damage": 10260, "penetration": 1000, "reload": 25 }
    ],
    "guns": [
      { "name": "Giat M693(20mm)", "type": "Autocannon", "damage": 65, "penetration": 55, "reload": 240 }
    ]
  },
  {
    "id": 502,
    "name": "AH-64E Apache",
    "type": "Helicopter",
    "faction": "American",
    "tier": "III",
    "image": "AH-64E-Apache.jpg",
    "description": "Advanced attack helicopter with multi-role capabilities and proven combat record.",
    "stats": { "health": 20000, "speed": 280, "verticalSpeed": 19.4, "agility": 60 },
    "weapons": [
      { "name": "ADS Starstreak", "type": "Air-to-Ground Missile", "damage": 7300, "penetration": 50, "reload": 15 },
      { "name": "AIM-9 Sidewinder", "type": "Short-Range AAM", "damage": 5700, "penetration": 45, "reload": 15 },
      { "name": "AIM-92", "type": "Short-Range AAM", "damage": 4700, "penetration": 35, "reload": 10 },
      { "name": "AGM-114 Hellfire", "type": "Air-to-Ground Missile", "damage": 9000, "penetration": 950, "reload": 30 },
      { "name": "AGM-169 JAGM", "type": "Air-to-Ground Missile", "damage": 9800, "penetration": 1200, "reload": 30 },
      { "name": "AGR-20 BLR", "type": "Rocket Pod", "damage": 5200, "penetration": 128, "reload": 20 },
      { "name": "Brimstone", "type": "Air-to-Ground Missile", "damage": 8100, "penetration": 800, "reload": 20 },
      { "name": "LAU-61", "type": "Rocket Pod", "damage": 4100, "penetration": 290, "reload": 20 },
      { "name": "LAU-10", "type": "Rocket Pod", "damage": 7400, "penetration": 500, "reload": 30 }
    ],
    "guns": [
      { "name": "M230(30mm)", "type": "Autocannon", "damage": 90, "penetration": 85, "reload": 300 }
    ]
  },
  {
    "id": 503,
    "name": "OH-1 Ninja",
    "type": "Helicopter",
    "faction": "Japanese",
    "tier": "III",
    "image": "OH-1-Ninja.jpg",
    "description": "Agile Japanese attack/recon helicopter—fast and nimble with light AAMs in MWT.",
    "stats": { "health": 17900, "speed": 297, "verticalSpeed": 32, "agility": 70 },
    "weapons": [
      { "name": "LAU-68", "type": "Rocket Pod", "damage": 4300, "penetration": 290, "reload": 20 },
      { "name": "AGR-20-BLR", "type": "Rocket Pod", "damage": 5200, "penetration": 128, "reload": 20 },
      { "name": "FASGWL", "type": "Air-to-Ground Missile", "damage": 5300, "penetration": 250, "reload": 20 },
      { "name": "LAU-150", "type": "Rocket Pod", "damage": 7800, "penetration": 600, "reload": 40 },
      { "name": "Brimstone", "type": "Air-to-Ground Missile", "damage": 8100, "penetration": 800, "reload": 20 },
      { "name": "Toshiba Type-91", "type": "Air-to-Ground Missile", "damage": 4700, "penetration": 35, "reload": 10 },
      { "name": "AGM-114 Hellfire", "type": "Air-to-Ground Missile", "damage": 9000, "penetration": 950, "reload": 30 },
      { "name": "ADS Starstreak", "type": "Air-to-Ground Missile", "damage": 7300, "penetration": 50, "reload": 15 }
    ],
    "guns": []
  },
  {
    "id": 504,
    "name": "Super Lynx Mk88A",
    "type": "Helicopter",
    "faction": "British",
    "tier": "III",
    "image": "Super-Lynx-Mk88A.jpg",
    "description": "British naval helicopter adapted for anti-ship and light attack roles (small weapon capacity in MWT).",
    "stats": { "health": 22000, "speed": 300, "verticalSpeed": 16.7, "agility": 40 },
    "weapons": [
      { "name": "Storm Shadow", "type": "Cruise Missile", "damage": 20000, "penetration": 370, "reload": 40 },
      { "name": "APKWS", "type": "Guided Rocket", "damage": 5400, "penetration": 140, "reload": 20 },
      { "name": "AIM-9 Sidewinder", "type": "Short-Range AAM", "damage": 5700, "penetration": 45, "reload": 15 },
      { "name": "FASGWL", "type": "Air-to-Ground Missile", "damage": 5300, "penetration": 250, "reload": 20 },
      { "name": "FASGW-ANL", "type": "Air-to-Ground Missile", "damage": 10300, "penetration": 350, "reload": 38 },
      { "name": "Brimstone", "type": "Air-to-Ground Missile", "damage": 8100, "penetration": 800, "reload": 20 },
      { "name": "AIM-92", "type": "Short-Range AAM", "damage": 4700, "penetration": 35, "reload": 10 },
      { "name": "MBDA Meteor", "type": "BVR AAM", "damage": 11900, "penetration": 300, "reload": 32 }
    ],
    "guns": []
  },
  {
    "id": 505,
    "name": "Z-9WA Harbin",
    "type": "Helicopter",
    "faction": "Chinese",
    "tier": "III",
    "image": "Z-9WA-Harbin.jpg",
    "description": "Heavily armed Z-9 variant with multi-mount capability (x4 mounts for some missiles in MWT).",
    "stats": { "health": 17800, "speed": 320, "verticalSpeed": 22.2, "agility": 60 },
    "weapons": [
      { "name": "HJ-8E", "type": "Anti-Tank Missile", "damage": 9890, "penetration": 480, "reload": 15 },
      { "name": "TYPE 57-1", "type": "Rocket Pod", "damage": 3700, "penetration": 200, "reload": 15 },
      { "name": "TY-90", "type": "Short-Range AAM", "damage": 4600, "penetration": 30, "reload": 10 },
      { "name": "FS-70", "type": "Rocket Pod", "damage": 4200, "penetration": 290, "reload": 20 },
      { "name": "TYPE-90", "type": "Air-to-Ground Missile", "damage": 6400, "penetration": 320, "reload": 40 },
      { "name": "AKD-9", "type": "Air-to-Ground Missile", "damage": 8000, "penetration": 800, "reload": 15 },
      { "name": "FS-70", "type": "Rocket Pod", "damage": 4200, "penetration": 290, "reload": 20 },
      { "name": "AKD-10", "type": "Air-to-Ground Missile", "damage": 8600, "penetration": 1400, "reload": 20 }
    ],
    "guns": [
      { "name": "QJK99(12.7mm)", "type": "Heavy MG", "damage": 50, "penetration": 40, "reload": 100 }
    ]
  },
  {
    "id": 506,
    "name": "Z-20 Harbin",
    "type": "Helicopter",
    "faction": "Chinese",
    "tier": "III",
    "image": "Z-20-Harbin.jpg",
    "description": "Modern multi-role Chinese helicopter with stub wings; carries Chinese ATGMs and rockets in MWT.",
    "stats": { "health": 18400, "speed": 280, "verticalSpeed": 16.7, "agility": 55 },
    "weapons": [
      { "name": "HJ-10", "type": "Anti-Tank Missile", "damage": 13800, "penetration": 1400, "reload": 30 },
      { "name": "TYPE 57-1", "type": "Rocket Pod", "damage": 3700, "penetration": 200, "reload": 15 },
      { "name": "TY-90", "type": "Short-Range AAM", "damage": 4600, "penetration": 30, "reload": 10 },
      { "name": "TYPE 90", "type": "Air-to-Ground Missile", "damage": 6400, "penetration": 320, "reload": 40 },
      { "name": "FT-9", "type": "Air-to-Ground Missile", "damage": 10800, "penetration": 70, "reload": 20 },
      { "name": "HJ-8E", "type": "Anti-Tank Missile", "damage": 9890, "penetration": 480, "reload": 15 },
      { "name": "AG-300/M", "type": "Air-to-Ground Missile", "damage": 9200, "penetration": 600, "reload": 20 },
      { "name": "CM-502KG", "type": "Air-to-Ground Missile", "damage": 7800, "penetration": 1000, "reload": 28 }
    ],
    "guns": [
      { "name": "CS-LM12(7.62mm)", "type": "MG", "damage": 25, "penetration": 20, "reload": 80 }
    ]
  },
  {
    "id": 507,
    "name": "MH-60L DAP",
    "type": "Helicopter",
    "faction": "American",
    "tier": "III",
    "image": "MH-60L-DAP.jpg",
    "description": "Armed MH-60 variant (DAP) with a flexible loadout for rockets, ATGMs and air-to-air missiles.",
    "stats": { "health": 20020, "speed": 209, "verticalSpeed": 12, "agility": 34 },
    "weapons": [
      { "name": "AGM 169-JAGM", "type": "Air-to-Ground Missile", "damage": 9800, "penetration": 1200, "reload": 30 },
      { "name": "LAU-61", "type": "Rocket Pod", "damage": 4100, "penetration": 290, "reload": 20 },
      { "name": "AGR-20 BLR", "type": "Rocket Pod", "damage": 5200, "penetration": 128, "reload": 20 },
      { "name": "LAU-68", "type": "Rocket Pod", "damage": 4300, "penetration": 290, "reload": 20 },
      { "name": "AIM-9 Sidewinder", "type": "Short-Range AAM", "damage": 5700, "penetration": 45, "reload": 15 },
      { "name": "AGM-114 Hellfire", "type": "Air-to-Ground Missile", "damage": 9000, "penetration": 950, "reload": 30 },
      { "name": "AIM-92", "type": "Short-Range AAM", "damage": 4700, "penetration": 35, "reload": 10 },
      { "name": "ADS Starstreak", "type": "Air-to-Ground Missile", "damage": 7300, "penetration": 50, "reload": 15 }
    ],
    "guns": [
      { "name": "M230(30mm)", "type": "Autocannon", "damage": 90, "penetration": 85, "reload": 300 },
      { "name": "M134 minigun(7.62mm)", "type": "Rotary Gun", "damage": 25, "penetration": 20, "reload": 80 }
    ]
  },
  {
    "id": 508,
    "name": "AH-1Z Viper",
    "type": "Helicopter",
    "faction": "American",
    "tier": "III",
    "image": "AH-1Z-Viper.jpg",
    "description": "Upgraded Cobra with improved sensors, weapons flexibility and survivability.",
    "stats": { "health": 17472, "speed": 219, "verticalSpeed": 14, "agility": 46 },
    "weapons": [
      { "name": "AIM-92", "type": "Short-Range AAM", "damage": 4700, "penetration": 35, "reload": 10 },
      { "name": "AIM-9 Sidewinder", "type": "Short-Range AAM", "damage": 5700, "penetration": 45, "reload": 15 },
      { "name": "AGM-169 JAGM", "type": "Air-to-Ground Missile", "damage": 9800, "penetration": 1200, "reload": 30 },
      { "name": "AGM-114 Hellfire", "type": "Air-to-Ground Missile", "damage": 9000, "penetration": 950, "reload": 30 },
      { "name": "LAU-68", "type": "Rocket Pod", "damage": 4300, "penetration": 290, "reload": 20 },
      { "name": "AIM-92", "type": "Short-Range AAM", "damage": 4700, "penetration": 35, "reload": 10 },
      { "name": "AGM-65 Maverick", "type": "Air-to-Ground Missile", "damage": 11000, "penetration": 830, "reload": 22 },
      { "name": "LAU-10", "type": "Rocket Pod", "damage": 7400, "penetration": 500, "reload": 30 }
    ],
    "guns": [
      { "name": "M197(20mm)", "type": "Autocannon", "damage": 60, "penetration": 50, "reload": 200 }
    ]
  },
  {
    "id": 509,
    "name": "Ka-50 Black Shark",
    "type": "Helicopter",
    "faction": "Russian",
    "tier": "III",
    "image": "Ka-50-Black-Shark.jpg",
    "description": "Single-seat heavy attack helicopter with heavy ATGMs and cannon armament in MWT.",
    "stats": { "health": 21840, "speed": 222, "verticalSpeed": 53, "agility": 50 },
    "weapons": [
      { "name": "B8V20", "type": "Air-to-Ground Missile", "damage": 5100, "penetration": 420, "reload": 20 },
      { "name": "9-A 5013", "type": "Air-to-Ground Missile", "damage": 5100, "penetration": 460, "reload": 20 },
      { "name": "B-13L", "type": "Air-to-Ground Missile", "damage": 9200, "penetration": 160, "reload": 40 },
      { "name": "Attack ATGM", "type": "Anti-Tank Missile", "damage": 7500, "penetration": 850, "reload": 30 },
      { "name": "9k38 IGLA V", "type": "Short-Range AAM", "damage": 4100, "penetration": 30, "reload": 15 },
      { "name": "PZRK Verba", "type": "Short-Range AAM", "damage": 4300, "penetration": 35, "reload": 10 },
      { "name": "9K121 Vikhr", "type": "Anti-Tank Missile", "damage": 7800, "penetration": 1000, "reload": 30 },
      { "name": "X-29T", "type": "Air-to-Ground Missile", "damage": 17800, "penetration": 280, "reload": 38 }
    ],
    "guns": [
      { "name": "UPK-23-250(23mm)", "type": "Rocket Pod", "damage": 300, "penetration": 70, "reload": 1200 },
      { "name": "2A42(30mm)", "type": "Autocannon", "damage": 90, "penetration": 85, "reload": 300 }
    ]
  },
  {
    "id": 600,
    "name": "AV-8B Harrier II",
    "type": "Fighter Jet",
    "faction": "American",
    "tier": "II",
    "description": "Vertical/Short Takeoff and Landing (V/STOL) attack aircraft with excellent ground support capabilities.",
    "image": "AV-8B-Harrier.jpg",
    "stats": { "health": 18600, "speed": 700, "afterburnerSpeed": 960, "agility": 34 },
    "weapons": [
      { "name": "LAU-61", "type": "Rocket Pod", "damage": 4100, "penetration": 290, "reload": 20 },
      { "name": "LAU-10 x3", "type": "Rocket Pod", "damage": 7400, "penetration": 500, "reload": 40 },
      { "name": "GBU-12", "type": "Guided Bomb", "damage": 18590, "penetration": 120, "reload": 30 },
      { "name": "MK-82 x3", "type": "Bomb", "damage": 14300, "penetration": 120, "reload": 40 },
      { "name": "AGM-62A", "type": "Air-to-Surface Missile", "damage": 17600, "penetration": 240, "reload": 28 },
      { "name": "AGM-65", "type": "Air-to-Surface Missile", "damage": 11000, "penetration": 830, "reload": 22 },
      { "name": "AIM-132", "type": "Short-Range AAM", "damage": 5200, "penetration": 65, "reload": 15 },
      { "name": "AIM-120", "type": "Medium-Range AAM", "damage": 11300, "penetration": 60, "reload": 20 }
    ]
  },
  {
    "id": 601,
    "name": "Alpha Jet",
    "type": "Fighter Jet",
    "faction": "German",
    "tier": "II",
    "description": "Light attack aircraft and advanced trainer with excellent maneuverability.",
    "image": "Alpha-Jet.jpg",
    "stats": { "health": 14200, "speed": 927, "afterburnerSpeed": 1000, "agility": 85 },
    "weapons": [
      { "name": "SUU-20", "type": "Bomb Cluster", "damage": 14300, "penetration": 120, "reload": 40 },
      { "name": "LAU-51", "type": "Rocket Pod", "damage": 4100, "penetration": 290, "reload": 20 },
      { "name": "LAU-51 x2", "type": "Rocket Pod", "damage": 4100, "penetration": 290, "reload": 20 },
      { "name": "GBU-38", "type": "Guided Bomb", "damage": 14300, "penetration": 120, "reload": 25 },
      { "name": "AIM-132", "type": "Short-Range AAM", "damage": 5200, "penetration": 65, "reload": 15 },
      { "name": "AGM-65", "type": "Air-to-Surface Missile", "damage": 11000, "penetration": 830, "reload": 22 },
      { "name": "AIM-120", "type": "Medium-Range AAM", "damage": 11300, "penetration": 60, "reload": 20 }
    ]
  },
  {
    "id": 602,
    "name": "F-14D Super Tomcat",
    "type": "Fighter Jet",
    "faction": "American",
    "tier": "II",
    "description": "Twin-engine, variable-sweep wing fighter designed for fleet defense and air superiority.",
    "image": "F-14D-Super-Tomcat.jpg",
    "stats": { "health": 21400, "speed": 600, "afterburnerSpeed": 2240, "agility": 52 },
    "weapons": [
      { "name": "GBU-38", "type": "Guided Bomb", "damage": 14300, "penetration": 120, "reload": 25 },
      { "name": "GBU-31", "type": "Guided Bomb", "damage": 19400, "penetration": 360, "reload": 40 },
      { "name": "GBU-12", "type": "Guided Bomb", "damage": 18590, "penetration": 120, "reload": 30 },
      { "name": "AGM-65", "type": "Air-to-Surface Missile", "damage": 11000, "penetration": 830, "reload": 22 },
      { "name": "AIM-7", "type": "Medium-Range AAM", "damage": 6200, "penetration": 65, "reload": 20 },
      { "name": "AIM-54", "type": "Long-Range AAM", "damage": 8600, "penetration": 100, "reload": 30 },
      { "name": "AIM-132", "type": "Long-Range AAM", "damage": 5200, "penetration": 65, "reload": 15 }
    ]
  },
  {
    "id": 603,
    "name": "J-10 Chengdu",
    "type": "Fighter Jet",
    "faction": "Chinese",
    "tier": "II",
    "description": "Single-engine, multirole fighter with delta wing configuration and advanced avionics.",
    "image": "J-10-Chengdu.jpg",
    "stats": { "health": 19900, "speed": 820, "afterburnerSpeed": 1990, "agility": 49 },
    "weapons": [
      { "name": "Type 2(100)", "type": "Bomb", "damage": 14000, "penetration": 110, "reload": 30 },
      { "name": "Type 90", "type": "Short-Range AAM", "damage": 6400, "penetration": 320, "reload": 40 },
      { "name": "TL-20", "type": "Guided Bomb", "damage": 16120, "penetration": 143, "reload": 25 },
      { "name": "AR-1", "type": "Guided Bomb", "damage": 7400, "penetration": 1000, "reload": 16 },
      { "name": "Type 3", "type": "Bomb", "damage": 16000, "penetration": 210, "reload": 35 },
      { "name": "LT-2", "type": "Air-to-Surface Missile", "damage": 16200, "penetration": 250, "reload": 38 },
      { "name": "PL-2", "type": "Short-Range AAM", "damage": 5800, "penetration": 40, "reload": 15 },
      { "name": "PL-5", "type": "Short-Range AAM", "damage": 7100, "penetration": 40, "reload": 15 },
      { "name": "PL-7", "type": "Short-Range AAM", "damage": 6500, "penetration": 50, "reload": 20 }
    ]
  },
  {
    "id": 604,
    "name": "MiG-31BM Foxhound",
    "type": "Fighter Jet",
    "faction": "Russian",
    "tier": "II",
    "image": "MiG-31BM-Foxhound.jpg",
    "description": "High-speed interceptor designed for long-range air defense missions.",
    "stats": { "health": 19700, "speed": 790, "afterburnerSpeed": 2700, "agility": 37 },
    "weapons": [
      { "name": "KAB-250", "type": "Guided Bomb", "damage": 14900, "penetration": 130, "reload": 25 },
      { "name": "FAB-500", "type": "Bomb", "damage": 16000, "penetration": 210, "reload": 35 },
      { "name": "KAB-500L", "type": "Guided Bomb", "damage": 17300, "penetration": 310, "reload": 40 },
      { "name": "R-73", "type": "Short-Range AAM", "damage": 4800, "penetration": 56, "reload": 15 },
      { "name": "Kh-38ME", "type": "Air-to-Surface Missile", "damage": 17300, "penetration": 230, "reload": 40 },
      { "name": "R-40TD", "type": "Long-Range AAM", "damage": 7800, "penetration": 70, "reload": 30 },
      { "name": "Kh-59M", "type": "Air-to-Surface Missile", "damage": 18400, "penetration": 280, "reload": 50 },
      { "name": "R-37", "type": "Long-Range AAM", "damage": 8400, "penetration": 80, "reload": 30 }
    ]
  },
  {
    "id": 605,
    "name": "Q-5A Nanchang",
    "type": "Fighter Jet",
    "faction": "Chinese",
    "tier": "II",
    "image": "Q-5A-Nanchang.jpg",
    "description": "Ground attack aircraft derived from the MiG-19, optimized for close air support.",
    "stats": { "health": 16200, "speed": 780, "afterburnerSpeed": 1090, "agility": 47 },
    "weapons": [
      { "name": "Type 2(100)", "type": "Bomb", "damage": 14000, "penetration": 110, "reload": 30 },
      { "name": "Type 90", "type": "Short-Range AAM", "damage": 6400, "penetration": 320, "reload": 40 },
      { "name": "Type 1", "type": "Bomb", "damage": 15100, "penetration": 120, "reload": 32 },
      { "name": "Type 3", "type": "Bomb", "damage": 16000, "penetration": 210, "reload": 35 },
      { "name": "AR-1", "type": "Guided Bomb", "damage": 7400, "penetration": 1000, "reload": 16 },
      { "name": "Type 130", "type": "Air-to-Surface Missile", "damage": 6900, "penetration": 450, "reload": 40 },
      { "name": "PL-2", "type": "Short-Range AAM", "damage": 5800, "penetration": 40, "reload": 15 },
      { "name": "PL-5", "type": "Short-Range AAM", "damage": 7100, "penetration": 40, "reload": 15 },
      { "name": "PL-7", "type": "Short-Range AAM", "damage": 6500, "penetration": 50, "reload": 20 }
    ]
  },
  {
    "id": 606,
    "name": "Su-24M",
    "type": "Fighter Jet",
    "faction": "Russian",
    "tier": "II",
    "description": "Variable-sweep wing tactical bomber designed for all-weather ground attack missions.",
    "image": "Su-24M.jpg",
    "stats": { "health": 24200, "speed": 1315, "afterburnerSpeed": 2317, "agility": 68 },
    "weapons": [
      { "name": "B8M1", "type": "Rocket Pod", "damage": 5100, "penetration": 420, "reload": 20 },
      { "name": "FAB-250", "type": "Bomb", "damage": 15100, "penetration": 130, "reload": 30 },
      { "name": "B-13L", "type": "Rocket Pod", "damage": 9200, "penetration": 160, "reload": 40 },
      { "name": "KAB-500L", "type": "Guided Bomb", "damage": 17300, "penetration": 310, "reload": 40 },
      { "name": "R-60", "type": "Short-Range AAM", "damage": 4600, "penetration": 36, "reload": 10 },
      { "name": "Kh-23M", "type": "Air-to-Surface Missile", "damage": 12900, "penetration": 800, "reload": 38 },
      { "name": "Kh-25MLE", "type": "Air-to-Surface Missile", "damage": 16000, "penetration": 160, "reload": 35 },
      { "name": "Kh-38ME", "type": "Air-to-Surface Missile", "damage": 17300, "penetration": 230, "reload": 40 },
      { "name": "Kh-59M", "type": "Air-to-Surface Missile", "damage": 18400, "penetration": 280, "reload": 50 }
    ]
  },
  {
    "id": 607,
    "name": "F-4E Phantom",
    "type": "Fighter Jet",
    "faction": "American",
    "tier": "II",
    "description": "Legendary multi-role fighter with proven combat record and versatile weapon systems.",
    "image": "F-4E-Phantom.jpg",
    "stats": { "health": 19300, "speed": 790, "afterburnerSpeed": 1910, "agility": 35 },
    "weapons": [
      { "name": "LAU-61", "type": "Rocket Pod", "damage": 4100, "penetration": 290, "reload": 20 },
      { "name": "LAU-10 x3", "type": "Rocket Pod", "damage": 7400, "penetration": 500, "reload": 40 },
      { "name": "AGM-65", "type": "Air-to-Surface Missile", "damage": 11000, "penetration": 830, "reload": 22 },
      { "name": "AIM-7", "type": "Medium-Range AAM", "damage": 6200, "penetration": 65, "reload": 20 },
      { "name": "AGM-12B", "type": "Air-to-Surface Missile", "damage": 11500, "penetration": 600, "reload": 41 }
    ]
  },
  {
    "id": 700,
    "name": "M60 Patton",
    "type": "Main Battle Tank",
    "faction": "American",
    "tier": "II",
    "image": "M60-Patton.jpg",
    "description": "Cold War era main battle tank with proven reliability and combat effectiveness.",
    "stats": { "health": 32000, "speed": 50, "armor": "93mm", "agility": 36 },
    "weapons": [
      { "name": "M68 105mm L52", "type": "Main Gun", "damage": 11800, "penetration": 620 },
      { "name": "M85 12.7mm", "type": "Machine Gun", "damage": 180, "penetration": 28, "rateOfFire": "450 rpm" },
      { "name": "M240 7.62mm", "type": "Coaxial MG", "damage": 120, "penetration": 15, "rateOfFire": "750 rpm" }
    ]
  },
  {
    "id": 701,
    "name": "Object 122 TM",
    "type": "Main Battle Tank",
    "faction": "Chinese",
    "tier": "II",
    "image": "Object-122-TM.jpg",
    "description": "Chinese prototype main battle tank, based on the Type 59, mounting a 120 mm gun.",
    "stats": { "health": 29300, "speed": 55, "armor": "100mm", "agility": 33 },
    "weapons": [
      { "name": "Object 122 TM Main Gun", "type": "Main Gun", "damage": 10500, "penetration": 610 },
      { "name": "Object 122 TM Secondary MG", "type": "Machine Gun", "damage": 160, "penetration": 21, "rateOfFire": "601 rpm" }
    ]
  },
  {
    "id": 702,
    "name": "Type 74E",
    "type": "Main Battle Tank",
    "faction": "Japanese",
    "tier": "II",
    "image": "Type-74E.jpg",
    "description": "Japanese main battle tank, upgraded from the Type 74 series, featuring improved fire control systems.",
    "stats": { "health": 30000, "speed": 54, "armor": "80mm", "agility": 32 },
    "weapons": [
      { "name": "Type 74E Main Gun", "type": "Main Gun", "damage": 11000, "penetration": 620 },
      { "name": "Type 74E Secondary MG", "type": "Machine Gun", "damage": 170, "penetration": 22, "rateOfFire": "602 rpm" }
    ]
  },
  {
    "id": 703,
    "name": "Type 74G/Kai",
    "type": "Main Battle Tank",
    "faction": "Japanese",
    "tier": "II",
    "image": "Type-74G-Kai.jpg",
    "description": "An upgraded Japanese MBT variant, featuring enhanced armor, improved fire control, and modernized night-fighting capability.",
    "stats": { "health": 31000, "speed": 54, "armor": "80mm", "agility": 32 },
    "weapons": [
      { "name": "Type 74G/Kai Main Gun", "type": "Main Gun", "damage": 11500, "penetration": 630 },
      { "name": "Type 74G/Kai Secondary MG", "type": "Machine Gun", "damage": 100, "penetration": 23, "rateOfFire": "603 rpm" }
    ]
  },
  {
    "id": 704,
    "name": "T-62",
    "type": "Main Battle Tank",
    "faction": "Russian",
    "tier": "II",
    "image": "T-62.jpg",
    "description": "Soviet main battle tank, armed with a 115 mm smoothbore gun and improved armor protection.",
    "stats": { "health": 29000, "speed": 51, "armor": "100mm", "agility": 44 },
    "weapons": [
      { "name": "T-62 Main Gun", "type": "Main Gun", "damage": 12000, "penetration": 640 },
      { "name": "T-62 Secondary MG", "type": "Machine Gun", "damage": 190, "penetration": 24, "rateOfFire": "604 rpm" }
    ]
  },
  {
    "id": 705,
    "name": "T-62 545",
    "type": "Main Battle Tank",
    "faction": "Russian",
    "tier": "II",
    "image": "T-62-545.jpg",
    "description": "Soviet T-62 variant, equipped with the 545 hp V-55 engine and improved reliability.",
    "stats": { "health": 31000, "speed": 51, "armor": "200mm", "agility": 44 },
    "weapons": [
      { "name": "T-62 545 Main Gun", "type": "Main Gun", "damage": 10000, "penetration": 650 },
      { "name": "T-62 545 Secondary MG", "type": "Machine Gun", "damage": 150, "penetration": 20, "rateOfFire": "605 rpm" }
    ]
  },
  {
    "id": 706,
    "name": "Stridsvagn 105",
    "type": "Main Battle Tank",
    "faction": "Sweden",
    "tier": "II",
    "description": "A modified Centurion with a 105mm gun, improved armor, and mobility for defense and reconnaissance missions.",
    "image": "Stridsvagn-105.jpg",
    "stats": { "health": 36000, "speed": 50, "armour": 76, "agility": 35 },
    "weapons": [
      { "name": "slpprj m/90c APFSDS", "type": "Main Gun", "damage": 9800, "penetration": 430 },
      { "name": "slpprj m/80 APFSDS", "type": "Main Gun", "damage": 9630, "penetration": 337 },
      { "name": "slsgr m/61A HEI", "type": "Main Gun", "damage": 4400, "penetration": 70 },
      { "name": "slspgr m/61 SAPHEI", "type": "Main Gun", "damage": 10090, "penetration": 127 }
    ]
  },
  {
    "id": 707,
    "name": "XM803",
    "type": "Main Battle Tank",
    "faction": "American",
    "tier": "II",
    "image": "XM803.jpg",
    "description": "American prototype main battle tank, developed from the MBT-70 project, featuring advanced firepower and mobility.",
    "stats": { "health": 35000, "speed": 60, "armor": "150mm", "agility": 30 },
    "weapons": [
      { "name": "XM803 Main Gun", "type": "Main Gun", "damage": 10500, "penetration": 660 },
      { "name": "XM803 Secondary MG", "type": "Machine Gun", "damage": 160, "penetration": 21, "rateOfFire": "606 rpm" }
    ]
    
  },
  {
    "id": 708,
    "name": "XM1 (GM)",
    "type": "Main Battle Tank",
    "faction": "American",
    "tier": "II",
    "image": "XM1-GM.jpg",
    "description": "U.S. prototype main battle tank by General Motors, competing against Chrysler's design for the Abrams.",
    "stats": { "health": 33600, "speed": 83, "armor": "100mm", "agility": 40 },
    "weapons": [
      { "name": "XM1 (GM) Main Gun", "type": "Main Gun", "damage": 11000, "penetration": 670 },
      { "name": "XM1 (GM) Secondary MG", "type": "Machine Gun", "damage": 170, "penetration": 22, "rateOfFire": "607 rpm" }
    ]
  },
  {
    "id": 709,
    "name": "BMP-2",
    "type": "Light Tank",
    "faction": "Russian",
    "tier": "II",
    "image": "BMP-2.jpg",
    "description": "Soviet infantry fighting vehicle, armed with a 30 mm autocannon and anti-tank guided missiles, supporting mechanized troops.",
    "stats": { "health": 23000, "speed": 68, "armor": "36mm", "agility": 36 },
    "weapons": [
      { "name": "BMP-2 Main Gun", "type": "Main Gun", "damage": 11500, "penetration": 680 },
      { "name": "BMP-2 Secondary MG", "type": "Machine Gun", "damage": 180, "penetration": 23, "rateOfFire": "608 rpm" }
    ]
  },
  {
    "id": 710,
    "name": "BTR-82AT",
    "type": "Light Tank",
    "faction": "Russian",
    "tier": "II",
    "image": "BTR-82AT.jpg",
    "description": "Russian armored personnel carrier, upgraded with a 30 mm autocannon, improved armor, and anti-tank missile capability.",
    "stats": { "health": 22800, "speed": 87, "armor": "10mm", "agility": 45 },
    "weapons": [
      { "name": "BTR-82AT Main Gun", "type": "Main Gun", "damage": 12000, "penetration": 690 },
      { "name": "BTR-82AT Secondary MG", "type": "Machine Gun", "damage": 190, "penetration": 24, "rateOfFire": "609 rpm" }
    ]
  },
  {
    "id": 711,
    "name": "BTR-82A1",
    "type": "Light Tank",
    "faction": "Russian",
    "tier": "II",
    "image": "BTR-82A1.jpg",
    "description": "Modern Russian armored personnel carrier, featuring a 30 mm autocannon, enhanced armor, and improved mobility for troops.",
    "stats": { "health": 22000, "speed": 87, "armor": "10mm", "agility": 40 },
    "weapons": [
      { "name": "BTR-82A1 Main Gun", "type": "Main Gun", "damage": 10000, "penetration": 600 },
      { "name": "BTR-82A1 Secondary MG", "type": "Machine Gun", "damage": 150, "penetration": 20, "rateOfFire": "610 rpm" }
    ]
  },
  {
    "id": 712,
    "name": "M3 Bradley",
    "type": "Multirole-IFV",
    "faction": "American",
    "tier": "II",
    "image": "M3-Bradley.jpg",
    "description": "Infantry fighting vehicle with TOW missile system and troop transport capability.",
    "stats": { "health": 25000, "speed": 62, "armor": "38mm", "agility": 35 },
    "weapons": [
      { "name": "TOW-2 ATGM", "type": "Anti-Tank Missile", "damage": 14800, "penetration": 780 },
      { "name": "M242 25mm", "type": "Autocannon", "damage": 320, "penetration": 58, "rateOfFire": "200 rpm" },
      { "name": "M240C 7.62mm", "type": "Coaxial MG", "damage": 110, "penetration": 14, "rateOfFire": "750 rpm" }
    ]
  },
  {
    "id": 713,
    "name": "M551 Sheridan",
    "type": "Light Tank",
    "faction": "American",
    "tier": "II",
    "image": "M551-Sheridan.jpg",
    "description": "Lightweight U.S. airborne tank with a 152mm gun-launcher, amphibious capability, and limited armor protection.",
    "stats": { "health": 24000, "speed": 70, "armor": "32mm", "agility": 40 },
    "weapons": [
      { "name": "M551 Sheridan Main Gun", "type": "Main Gun", "damage": 11000, "penetration": 620 },
      { "name": "M551 Sheridan Secondary MG", "type": "Machine Gun", "damage": 170, "penetration": 22, "rateOfFire": "612 rpm" }
    ]
  },
  {
    "id": 714,
    "name": "Object 685",
    "type": "Light Tank",
    "faction": "Russian",
    "tier": "II",
    "image": "Object-685.jpg",
    "description": "Soviet experimental amphibious light tank, designed for reconnaissance and river-crossing operations with light armor and armament.",
    "stats": { "health": 24500, "speed": 70, "armor": "60mm", "agility": 39 },
    "weapons": [
      { "name": "Object 685 Main Gun", "type": "Main Gun", "damage": 11500, "penetration": 630 },
      { "name": "Object 685 Secondary MG", "type": "Machine Gun", "damage": 180, "penetration": 23, "rateOfFire": "613 rpm" }
    ]
  },
  {
    "id": 715,
    "name": "IT-1 Dragon",
    "type": "Missile Carrier",
    "faction": "Russian",
    "tier": "II",
    "image": "IT-1-Dragon.jpg",
    "description": "Experimental missile tank destroyer with unique guided missile system.",
    "stats": { "health": 22800, "speed": 50, "armor": "35mm", "agility": 55 },
    "weapons": [
      { "name": "3M7 Drakon ATGM", "type": "Anti-Tank Missile", "damage": 15200, "penetration": 500 },
      { "name": "PKT 7.62mm", "type": "Machine Gun", "damage": 95, "penetration": 12, "rateOfFire": "800 rpm" }
    ]
  },
  {
    "id": 716,
    "name": "M163 VADS",
    "type": "Anti-Air",
    "faction": "American",
    "tier": "II",
    "image": "M163-VADS.jpg",
    "description": "U.S. self-propelled anti-aircraft system, mounting a 20 mm Vulcan cannon on an M113 chassis.",
    "stats": { "health": 20000, "speed": 65, "armor": "30mm", "agility": 35 },
    "weapons": [
      { "name": "M163 VADS Main Gun", "type": "Main Gun", "damage": 10000, "penetration": 650 },
      { "name": "M163 VADS Secondary MG", "type": "Machine Gun", "damage": 150, "penetration": 20, "rateOfFire": "615 rpm" }
    ]
  },
  {
    "id": 717,
    "name": "PGZ-04A",
    "type": "Anti-Air",
    "faction": "Chinese",
    "tier": "II",
    "image": "PGZ-04A.jpg",
    "description": "Chinese self-propelled anti-aircraft system, equipped with twin 35 mm cannons and radar for short-range air defense.",
    "stats": { "health": 22000, "speed": 62, "armor": "12mm", "agility": 30 },
    "weapons": [
      { "name": "PGZ-04A Main Gun", "type": "Main Gun", "damage": 10500, "penetration": 660 },
      { "name": "PGZ-04A Secondary MG", "type": "Machine Gun", "damage": 160, "penetration": 21, "rateOfFire": "616 rpm" }
    ]
  },
  {
    "id": 718,
    "name": "ZSU-23-4M4 Shilka",
    "type": "Anti-Air",
    "faction": "Russian",
    "tier": "II",
    "image": "ZSU-23-4M4-Shilka.jpg",
    "description": "Modernized Soviet/Russian self-propelled anti-aircraft system, armed with four 23 mm autocannons and radar targeting.",
    "stats": { "health": 21000, "speed": 68, "armor": "30mm", "agility": 32 },
    "weapons": [
      { "name": "AZP-23 23mm Quad", "type": "Anti-Aircraft Gun", "damage": 1800, "penetration": 95, "rateOfFire": "3400 rpm" },
      { "name": "9M311 Sosna", "type": "SAM", "damage": 7500, "penetration": 380 }
    ]
  },
  {
    "id": 719,
    "name": "LAV-300",
    "type": "Tank Destroyer",
    "faction": "American",
    "tier": "II",
    "image": "LAV-300.jpg",
    "description": "U.S. wheeled armored vehicle, designed for reconnaissance and troop transport, armed with a turret-mounted autocannon.",
    "stats": { "health": 39000, "speed": 53, "armor": "50mm", "agility": 38 },
    "weapons": [
      { "name": "LAV-300 Main Gun", "type": "Main Gun", "damage": 11500, "penetration": 680 },
      { "name": "LAV-300 Secondary MG", "type": "Machine Gun", "damage": 180, "penetration": 23, "rateOfFire": "618 rpm" }
    ]
  },
  {
    "id": 720,
    "name": "PTL-02",
    "type": "Tank Destroyer",
    "faction": "Chinese",
    "tier": "II",
    "image": "PTL-02.jpg",
    "description": "Chinese wheeled self-propelled anti-tank vehicle, armed with a 100 mm gun capable of firing guided missiles.",
    "stats": { "health": 39500, "speed": 54, "armor": "50mm", "agility": 39 },
    "weapons": [
      { "name": "PTL-02 Main Gun", "type": "Main Gun", "damage": 12000, "penetration": 690 },
      { "name": "PTL-02 Secondary MG", "type": "Machine Gun", "damage": 190, "penetration": 24, "rateOfFire": "619 rpm" }
    ]
  },
  {
    "id": 721,
    "name": "M109",
    "type": "SPH",
    "faction": "American",
    "tier": "II",
    "image": "M109.jpg",
    "description": "U.S. self-propelled howitzer, mounting a 155 mm gun for long-range artillery support on a tracked chassis.",
    "stats": { "health": 40000, "speed": 45, "armor": "50mm", "agility": 30 },
    "weapons": [
      { "name": "M109 Main Gun", "type": "Main Gun", "damage": 10000, "penetration": 600 },
      { "name": "M109 Secondary MG", "type": "Machine Gun", "damage": 150, "penetration": 20, "rateOfFire": "620 rpm" }
    ]
  },
  {
    "id": 722,
    "name": "PLL-05",
    "type": "SPH",
    "faction": "Chinese",
    "tier": "II",
    "image": "PLL-05.jpg",
    "description": "Chinese wheeled self-propelled howitzer, armed with a 120 mm gun-mortar capable of both direct and indirect fire.",
    "stats": { "health": 40500, "speed": 46, "armor": "50mm", "agility": 31 },
    "weapons": [
      { "name": "PLL-05 Main Gun", "type": "Main Gun", "damage": 10500, "penetration": 610 },
      { "name": "PLL-05 Secondary MG", "type": "Machine Gun", "damage": 160, "penetration": 21, "rateOfFire": "621 rpm" }
    ]
  },
  {
    "id": 723,
    "name": "PLZ-83",
    "type": "SPH",
    "faction": "Chinese",
    "tier": "II",
    "image": "PLZ-83.jpg",
    "description": "Chinese tracked self-propelled howitzer, equipped with a 152 mm gun for long-range artillery support.",
    "stats": { "health": 41000, "speed": 47, "armor": "50mm", "agility": 32 },
    "weapons": [
      { "name": "PLZ-83 Main Gun", "type": "Main Gun", "damage": 11000, "penetration": 620 },
      { "name": "PLZ-83 Secondary MG", "type": "Machine Gun", "damage": 170, "penetration": 22, "rateOfFire": "622 rpm" }
    ]
  },
  {
    "id": 724,
    "name": "2S1 Gvozdika",
    "type": "SPH",
    "faction": "Russian",
    "tier": "II",
    "image": "2S1-Gvozdika.jpg",
    "description": "Soviet self-propelled 122 mm howitzer, fully tracked, providing mobile artillery support for mechanized units.",
    "stats": { "health": 41500, "speed": 48, "armor": "50mm", "agility": 33 },
    "weapons": [
      { "name": "2S1 Gvozdika Main Gun", "type": "Main Gun", "damage": 11500, "penetration": 630 },
      { "name": "2S1 Gvozdika Secondary MG", "type": "Machine Gun", "damage": 180, "penetration": 23, "rateOfFire": "623 rpm" }
    ]
  },
  {
    "id": 725,
    "name": "2S3 Akatsiya",
    "type": "SPH",
    "faction": "Russian",
    "tier": "II",
    "image": "2S3-Akatsiya.jpg",
    "description": "Soviet self-propelled 152 mm howitzer, tracked, providing long-range artillery support with high mobility.",
    "stats": { "health": 42000, "speed": 49, "armor": "50mm", "agility": 34 },
    "weapons": [
      { "name": "2S3 Akatsiya Main Gun", "type": "Main Gun", "damage": 12000, "penetration": 640 },
      { "name": "2S3 Akatsiya Secondary MG", "type": "Machine Gun", "damage": 190, "penetration": 24, "rateOfFire": "624 rpm" }
    ]
  },
  {
    "id": 726,
    "name": "Type 74 SPH",
    "type": "SPH",
    "faction": "Japanese",
    "tier": "II",
    "image": "Type-74-SPH.jpg",
    "description": "Japanese self-propelled 105 mm howitzer, mounted on a tracked chassis for mobile artillery support.",
    "stats": { "health": 42500, "speed": 50, "armor": "50mm", "agility": 35 },
    "weapons": [
      { "name": "Type 74 SPH Main Gun", "type": "Main Gun", "damage": 10000, "penetration": 650 },
      { "name": "Type 74 SPH Secondary MG", "type": "Machine Gun", "damage": 150, "penetration": 20, "rateOfFire": "625 rpm" }
    ]
  }
  {
    "id": 800,
    "name": "Z-9G Harbin",
    "type": "Helicopter",
    "faction": "Chinese",
    "tier": "II",
    "image": "Z-9G-Harbin.jpg",
    "description": "Multi-role Chinese helicopter equipped with light rockets, cannons, and ATGMs in MWT.",
    "stats": {
      "health": 16900,
      "speed": 305,
      "verticalSpeed": 22,
      "agility": 60
    },
    "weapons": [
      {
        "name": "Type 57-1",
        "type": "Rocket Pod",
        "damage": 3700,
        "penetration": 200,
        "reload": 15
      },
      {
        "name": "FS-70",
        "type": "Rocket Pod",
        "damage": 4200,
        "penetration": 290,
        "reload": 20
      },
      {
        "name": "AKD-10",
        "type": "Air-to-Ground Missile",
        "damage": 8600,
        "penetration": 1400,
        "reload": 20
      },
      {
        "name": "AKD-9",
        "type": "Air-to-Ground Missile",
        "damage": 8000,
        "penetration": 800,
        "reload": 15
      },
      {
        "name": "HJ-8E",
        "type": "Anti-Tank Missile",
        "damage": 9890,
        "penetration": 480,
        "reload": 15
      },
      {
        "name": "Type 90",
        "type": "Air-to-Ground Missile",
        "damage": 6400,
        "penetration": 320,
        "reload": 40
      },
      {
        "name": "TY-90",
        "type": "Short-Range AAM",
        "damage": 4600,
        "penetration": 30,
        "reload": 10
      }
    ],
    "guns": [
      {
        "name": "QJK99(12.7mm)",
        "type": "Heavy MG",
        "damage": 50,
        "penetration": 40,
        "reload": 100
      }
    ]
  },
  {
    "id": 801,
    "name": "Mi-8TV",
    "type": "Helicopter",
    "faction": "Russian",
    "tier": "II",
    "description": "Versatile transport helicopter with light attack capabilities and proven reliability.",
    "image": "Mi-8TV.jpg",
    "stats": {
      "health": 16616,
      "speed": 200,
      "verticalSpeed": 46,
      "agility": 52
    },
    "weapons": [
      {
        "name": "UB-16-57UM",
        "type": "Rocket Pod",
        "damage": 3900,
        "penetration": 220,
        "reload": 15
      },
      {
        "name": "UB-32-57",
        "type": "Rocket Pod",
        "damage": 3900,
        "penetration": 220,
        "reload": 20
      },
      {
        "name": "B8V20",
        "type": "Air-to-Ground Missile",
        "damage": 5100,
        "penetration": 420,
        "reload": 20
      },
      {
        "name": "B-13L",
        "type": "Air-to-Ground Missile",
        "damage": 9200,
        "penetration": 160,
        "reload": 40
      },
      {
        "name": "9K38 IGLA-V",
        "type": "Short-Range AAM",
        "damage": 4100,
        "penetration": 30,
        "reload": 15
      },
      {
        "name": "Attack ATGM",
        "type": "Anti-Tank Missile",
        "damage": 7500,
        "penetration": 850,
        "reload": 30
      },
      {
        "name": "9M17 Falanga",
        "type": "Anti-Tank Missile",
        "damage": 7400,
        "penetration": 650,
        "reload": 30
      }
    ],
    "guns": [
      {
        "name": "Afanasev A 12.7(12.7mm)",
        "type": "Heavy MG",
        "damage": 45,
        "penetration": 42,
        "reload": 100
      },
      {
        "name": "UPK-23-250(23mm)",
        "type": "Rocket Pod",
        "damage": 300,
        "penetration": 70,
        "reload": 1200
      }
    ]
  },
  {
    "id": 802,
    "name": "MH-6 Little Bird",
    "type": "Helicopter",
    "faction": "American",
    "tier": "II",
    "image": "MH-6-Little-Bird.jpg",
    "description": "Ultra-light scout/assault helicopter used for special operations; light armament but excellent maneuverability.",
    "stats": {
      "health": 15000,
      "speed": 282,
      "verticalSpeed": 26,
      "agility": 75
    },
    "weapons": [
      {
        "name": "AGM 169-JAGM",
        "type": "Air-to-Ground Missile",
        "damage": 9800,
        "penetration": 1200,
        "reload": 30
      },
      {
        "name": "AGM-114K X2",
        "type": "Air-to-Ground Missile",
        "damage": 9000,
        "penetration": 950,
        "reload": 30
      },
      {
        "name": "AGR-20 BLR",
        "type": "Rocket Pod",
        "damage": 5200,
        "penetration": 128,
        "reload": 20
      },
      {
        "name": "LAU-68",
        "type": "Rocket Pod",
        "damage": 4300,
        "penetration": 290,
        "reload": 20
      },
      {
        "name": "AIM-92",
        "type": "Short-Range AAM",
        "damage": 4700,
        "penetration": 35,
        "reload": 10
      },
      {
        "name": "AGM-65 Maverick",
        "type": "Air-to-Ground Missile",
        "damage": 11000,
        "penetration": 830,
        "reload": 22
      }
    ],
    "guns": [
      {
        "name": "GAU-19 MH-6 (12.7mm)",
        "type": "Heavy MG",
        "damage": 45,
        "penetration": 42,
        "reload": 90
      },
      {
        "name": "M134 Minigun(7.62mm)",
        "type": "Rotary Gun",
        "damage": 25,
        "penetration": 20,
        "reload": 80
      }
    ]
  },
  {
    "id": 803,
    "name": "Z-11WB Changhe",
    "type": "Helicopter",
    "faction": "Chinese",
    "tier": "II",
    "image": "Z-11WB-Changhe.jpg",
    "description": "Light Chinese helicopter (Changhe Z-11WB) with multiple light ATGM/rocket options.",
    "stats": {
      "health": 18421,
      "speed": 170,
      "verticalSpeed": 44,
      "agility": 40
    },
    "weapons": [
      {
        "name": "HJ-8E",
        "type": "Anti-Tank Missile",
        "damage": 9890,
        "penetration": 480,
        "reload": 15
      },
      {
        "name": "TYPE 57-1",
        "type": "Rocket Pod",
        "damage": 3700,
        "penetration": 200,
        "reload": 15
      },
      {
        "name": "TY-90",
        "type": "Short-Range AAM",
        "damage": 4600,
        "penetration": 30,
        "reload": 10
      },
      {
        "name": "AKD-9",
        "type": "Air-to-Ground Missile",
        "damage": 8000,
        "penetration": 800,
        "reload": 15
      },
      {
        "name": "SW6-Drone",
        "type": "Loitering Munition",
        "damage": 7800,
        "penetration": 800,
        "reload": 16
      },
      {
        "name": "TL-6",
        "type": "Air-to-Ground Missile",
        "damage": 19400,
        "penetration": 830,
        "reload": 21
      },
      {
        "name": "FS-70",
        "type": "Rocket Pod",
        "damage": 4200,
        "penetration": 290,
        "reload": 20
      },
      {
        "name": "AKD-10",
        "type": "Air-to-Ground Missile",
        "damage": 8600,
        "penetration": 1400,
        "reload": 20
      },
      {
        "name": "FT-9",
        "type": "Air-to-Ground Missile",
        "damage": 10800,
        "penetration": 70,
        "reload": 20
      },
      {
        "name": "Type-90",
        "type": "Air-to-Ground Missile",
        "damage": 6400,
        "penetration": 320,
        "reload": 40
      }
    ],
    "guns": [
      {
        "name": "CS-LM12(7.62mm)",
        "type": "MG",
        "damage": 25,
        "penetration": 20,
        "reload": 80
      }
    ]
  },
  {
    "id": 804,
    "name": "Mi-171SH",
    "type": "Helicopter",
    "faction": "Russian",
    "tier": "II",
    "image": "Mi-171SH.jpg",
    "description": "Modernized transport helicopter with enhanced combat capabilities and weapon systems.",
    "stats": {
      "health": 17500,
      "speed": 210,
      "verticalSpeed": 48,
      "agility": 45
    },
    "weapons": [
      {
        "name": "Type 57-1",
        "type": "Rocket Pod",
        "damage": 3700,
        "penetration": 200,
        "reload": 15
      },
      {
        "name": "TY-90",
        "type": "Short-Range AAM",
        "damage": 4600,
        "penetration": 30,
        "reload": 10
      },
      {
        "name": "AKD-9",
        "type": "Air-to-Ground Missile",
        "damage": 8000,
        "penetration": 800,
        "reload": 15
      },
      {
        "name": "Type 90",
        "type": "Air-to-Ground Missile",
        "damage": 6400,
        "penetration": 320,
        "reload": 40
      },
      {
        "name": "HJ-8E",
        "type": "Anti-Tank Missile",
        "damage": 9890,
        "penetration": 480,
        "reload": 15
      },
      {
        "name": "FS-70",
        "type": "Rocket Pod",
        "damage": 4200,
        "penetration": 290,
        "reload": 20
      },
      {
        "name": "SW6-Drone",
        "type": "Loitering Munition",
        "damage": 7800,
        "penetration": 800,
        "reload": 16
      },
      {
        "name": "TL-6",
        "type": "Air-to-Ground Missile",
        "damage": 19400,
        "penetration": 830,
        "reload": 21
      },
      {
        "name": "AKD-10",
        "type": "Air-to-Ground Missile",
        "damage": 8600,
        "penetration": 1400,
        "reload": 20
      }
    ],
    "guns": [
      {
        "name": "6P46 Kord(12.7mm)",
        "type": "Heavy MG",
        "damage": 48,
        "penetration": 45,
        "reload": 95
      },
      {
        "name": "UPK-23-250(23mm)",
        "type": "Rocket Pod",
        "damage": 300,
        "penetration": 70,
        "reload": 1200
      }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
      }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
      }
    ]
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
    ]
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
      {
        "name": "9M31M HEI",
        "type": "Missile",
        "damage": 5870,
        "penetration": 60,
        "reload": 9
      },
      {
        "name": "9M31 HEI",
        "type": "Missile",
        "damage": 4530,
        "penetration": 60,
        "reload": 9
      }
    ]
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
    ]
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
    ]
  }
];

// Export as default
export default vehicles;

// Also export as VEHICLES_DATA for compatibility
export const VEHICLES_DATA = vehicles;
