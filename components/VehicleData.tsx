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
    ]
  },
  // ... rest of the vehicle data ...
];
