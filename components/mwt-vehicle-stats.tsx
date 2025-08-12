"use client"

import { motion } from "framer-motion"
import { ChevronDown, MessageCircle, X, Send, Search } from "lucide-react"
import { useState } from "react"

const VEHICLES = [
  {
    id: 1,
    name: "Su-57M",
    type: "Fighter Jet",
    faction: "Russian",
    tier: "IV",
    description: "Advanced fifth-generation stealth fighter with supercruise capability and advanced avionics.",
    stats: { health: 24500, speed: 762, afterburnerSpeed: 2100, agility: 85 },
    weapons: [
      { name: "Kh-38MLE", type: "Air-to-Ground Missile", damage: 9800, penetration: 380 },
      { name: "Kh-47M2 Kinzhal", type: "Hypersonic Missile", damage: 18500, penetration: 1200 },
      { name: "KAB-250", type: "Guided Bomb", damage: 12500, penetration: 600 },
      { name: "GROM-E1", type: "Glide Bomb", damage: 14200, penetration: 750 },
      { name: "Kh-69", type: "Cruise Missile", damage: 11800, penetration: 520 },
      { name: "RVV-SD", type: "Medium-Range AAM", damage: 8200, penetration: 450 },
      { name: "9A1-4071K 30mm", type: "Autocannon", damage: 380, penetration: 65, rateOfFire: "1800 rpm" },
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
    name: "T-14 Armata",
    type: "Tank",
    faction: "Russian",
    tier: "IV",
    description: "Next-generation main battle tank with unmanned turret and active protection system.",
    stats: { health: 38900, speed: 70, armor: 1200, agility: 34 },
    weapons: [
      { name: "2A82-1M 125mm", type: "Main Gun", damage: 12500, penetration: 850 },
      { name: "3BM60 Svinets", type: "APFSDS Round", damage: 13800, penetration: 1000 },
      { name: "9M119M1 Invar", type: "Gun-Launched ATGM", damage: 15200, penetration: 1200 },
      { name: "12.7mm Kord", type: "Remote Machine Gun", damage: 180, penetration: 25 },
      { name: "7.62mm PKTM", type: "Coaxial Machine Gun", damage: 95, penetration: 8 },
    ],
    modules: {
      engine: [
        { name: "ChTZ 12N360 MK1", bonus: "+10 km/h speed" },
        { name: "ChTZ 12N360 MK2", bonus: "+20 km/h speed" },
        { name: "ChTZ 12N360 MK3", bonus: "+30 km/h speed" },
      ],
      armor: [
        { name: "Malachit ERA MK1", bonus: "+100 armor" },
        { name: "Malachit ERA MK2", bonus: "+200 armor" },
        { name: "Malachit ERA MK3", bonus: "+300 armor" },
      ],
      fireControl: [
        { name: "Kalina FCS MK1", bonus: "+15% accuracy" },
        { name: "Kalina FCS MK2", bonus: "+25% accuracy" },
        { name: "Kalina FCS MK3", bonus: "+35% accuracy" },
      ],
    },
  },
  {
    id: 3,
    name: "M1A1 Abrams",
    type: "Tank",
    faction: "American",
    tier: "III",
    description: "Proven main battle tank with superior firepower and mobility among Tier III MBTs.",
    stats: { health: 35200, speed: 67, armor: 820, agility: 28 },
    weapons: [
      { name: "M256 120mm", type: "Main Gun", damage: 11200, penetration: 630 },
      { name: "M830A1 HEAT", type: "HEAT Shell", damage: 9800, penetration: 800 },
      { name: "M240 7.62mm", type: "Machine Gun", damage: 120, penetration: 15 },
    ],
    modules: {
      engine: [
        { name: "AGT1500 MK1", bonus: "+8 km/h speed" },
        { name: "AGT1500 MK2", bonus: "+15 km/h speed" },
        { name: "AGT1500 MK3", bonus: "+22 km/h speed" },
      ],
      armor: [
        { name: "DU Armor MK1", bonus: "+80 armor" },
        { name: "DU Armor MK2", bonus: "+150 armor" },
        { name: "DU Armor MK3", bonus: "+220 armor" },
      ],
      fireControl: [
        { name: "M1A1 FCS MK1", bonus: "+12% accuracy" },
        { name: "M1A1 FCS MK2", bonus: "+20% accuracy" },
        { name: "M1A1 FCS MK3", bonus: "+28% accuracy" },
      ],
    },
  },
  {
    id: 4,
    name: "Ka-52M",
    type: "Helicopter",
    faction: "Russian",
    tier: "IV",
    description: "Advanced attack helicopter with coaxial rotors and comprehensive sensor suite.",
    stats: { health: 26000, speed: 300, maxSpeed: 350, agility: 65 },
    weapons: [
      { name: "Vikhr ATGM", type: "Anti-Tank Missile", damage: 13800, penetration: 900 },
      { name: "S-8 Rockets", type: "Rocket Pod", damage: 2400, penetration: 180 },
      { name: "2A42 30mm", type: "Autocannon", damage: 420, penetration: 85 },
    ],
    modules: {
      engine: [
        { name: "VK-2500 MK1", bonus: "+25 km/h speed" },
        { name: "VK-2500 MK2", bonus: "+45 km/h speed" },
        { name: "VK-2500 MK3", bonus: "+65 km/h speed" },
      ],
      survivability: [
        { name: "Vitebsk DIRCM MK1", bonus: "+20% missile defense" },
        { name: "Vitebsk DIRCM MK2", bonus: "+35% missile defense" },
        { name: "Vitebsk DIRCM MK3", bonus: "+50% missile defense" },
      ],
      avionics: [
        { name: "Arbalet Radar MK1", bonus: "+18% target acquisition" },
        { name: "Arbalet Radar MK2", bonus: "+30% target acquisition" },
        { name: "Arbalet Radar MK3", bonus: "+42% target acquisition" },
      ],
    },
  },
  {
    id: 5,
    name: "F-22 Raptor",
    type: "Fighter Jet",
    faction: "American",
    tier: "IV",
    description: "Fifth-generation air superiority fighter with advanced stealth and supercruise.",
    stats: { health: 23800, speed: 770, afterburnerSpeed: 2170, agility: 88 },
    weapons: [
      { name: "AIM-120D AMRAAM", type: "Medium-Range AAM", damage: 9200, penetration: 480 },
      { name: "AIM-9X Sidewinder", type: "Short-Range AAM", damage: 7800, penetration: 420 },
      { name: "GBU-39 SDB", type: "Small Diameter Bomb", damage: 8500, penetration: 400 },
      { name: "GBU-32 JDAM", type: "Guided Bomb", damage: 15200, penetration: 800 },
      { name: "M61A2 Vulcan", type: "Autocannon", damage: 380, penetration: 65, rateOfFire: "6000 rpm" },
    ],
    modules: {
      engine: [
        { name: "F119-PW-100 MK1", bonus: "+180 km/h speed" },
        { name: "F119-PW-100 MK2", bonus: "+320 km/h speed" },
        { name: "F119-PW-100 MK3", bonus: "+460 km/h speed" },
      ],
      stealth: [
        { name: "RAM Coating MK1", bonus: "+18% stealth" },
        { name: "RAM Coating MK2", bonus: "+28% stealth" },
        { name: "RAM Coating MK3", bonus: "+38% stealth" },
      ],
      avionics: [
        { name: "AN/APG-77 MK1", bonus: "+22% detection" },
        { name: "AN/APG-77 MK2", bonus: "+38% detection" },
        { name: "AN/APG-77 MK3", bonus: "+54% detection" },
      ],
    },
  },
  {
    id: 6,
    name: "J-35",
    type: "Fighter Jet",
    faction: "Chinese",
    tier: "IV",
    description: "Advanced stealth fighter with carrier capability and modern avionics.",
    stats: { health: 22600, speed: 762.3, afterburnerSpeed: 2198.9, agility: 82 },
    weapons: [
      { name: "PL-15", type: "Long-Range AAM", damage: 10200, penetration: 510 },
      { name: "PL-10", type: "Short-Range AAM", damage: 7600, penetration: 400 },
      { name: "Type 30 30mm", type: "Autocannon", damage: 360, penetration: 60, rateOfFire: "1800 rpm" },
    ],
    modules: {
      engine: [
        { name: "WS-19 MK1", bonus: "+170 km/h speed" },
        { name: "WS-19 MK2", bonus: "+310 km/h speed" },
        { name: "WS-19 MK3", bonus: "+450 km/h speed" },
      ],
      stealth: [
        { name: "Stealth Coating MK1", bonus: "+16% stealth" },
        { name: "Stealth Coating MK2", bonus: "+26% stealth" },
        { name: "Stealth Coating MK3", bonus: "+36% stealth" },
      ],
      avionics: [
        { name: "KLJ-7A Radar MK1", bonus: "+20% detection" },
        { name: "KLJ-7A Radar MK2", bonus: "+35% detection" },
        { name: "KLJ-7A Radar MK3", bonus: "+50% detection" },
      ],
    },
  },
  {
    id: 7,
    name: "TU-222",
    type: "Bomber",
    faction: "Russian",
    tier: "IV",
    description: "Strategic stealth bomber with long-range strike capability and advanced countermeasures.",
    stats: { health: 45000, speed: 850, afterburnerSpeed: 1200, agility: 25 },
    weapons: [
      { name: "Kh-102", type: "Cruise Missile", damage: 18500, penetration: 1200 },
      { name: "FAB-3000", type: "Bomb", damage: 22000, penetration: 800 },
      { name: "GSh-23", type: "Defensive Gun", damage: 280, penetration: 45, rateOfFire: "3400 rpm" },
    ],
    modules: {
      engine: [
        { name: "NK-32-02 MK1", bonus: "+120 km/h speed" },
        { name: "NK-32-02 MK2", bonus: "+220 km/h speed" },
        { name: "NK-32-02 MK3", bonus: "+320 km/h speed" },
      ],
      stealth: [
        { name: "Stealth Package MK1", bonus: "+12% stealth" },
        { name: "Stealth Package MK2", bonus: "+22% stealth" },
        { name: "Stealth Package MK3", bonus: "+32% stealth" },
      ],
      avionics: [
        { name: "Navigation Suite MK1", bonus: "+15% accuracy" },
        { name: "Navigation Suite MK2", bonus: "+25% accuracy" },
        { name: "Navigation Suite MK3", bonus: "+35% accuracy" },
      ],
    },
  },
  {
    id: 8,
    name: "Leopard 2A4",
    type: "Tank",
    faction: "German",
    tier: "III",
    description: "Reliable main battle tank with excellent gun and proven combat record.",
    stats: { health: 33800, speed: 68, armor: 780, agility: 30 },
    weapons: [
      { name: "Rh120 L/44", type: "Main Gun", damage: 10800, penetration: 620 },
      { name: "DM33 APFSDS", type: "Sabot Round", damage: 11500, penetration: 750 },
      { name: "MG3 7.62mm", type: "Machine Gun", damage: 110, penetration: 12 },
    ],
    modules: {
      engine: [
        { name: "MTU MB 873 MK1", bonus: "+7 km/h speed" },
        { name: "MTU MB 873 MK2", bonus: "+14 km/h speed" },
        { name: "MTU MB 873 MK3", bonus: "+21 km/h speed" },
      ],
      armor: [
        { name: "Composite Armor MK1", bonus: "+70 armor" },
        { name: "Composite Armor MK2", bonus: "+140 armor" },
        { name: "Composite Armor MK3", bonus: "+210 armor" },
      ],
      fireControl: [
        { name: "EMES 15 MK1", bonus: "+10% accuracy" },
        { name: "EMES 15 MK2", bonus: "+18% accuracy" },
        { name: "EMES 15 MK3", bonus: "+26% accuracy" },
      ],
    },
  },
  {
    id: 9,
    name: "AH-64E Apache",
    type: "Helicopter",
    faction: "American",
    tier: "III",
    description: "Advanced attack helicopter with Longbow radar and comprehensive weapon systems.",
    stats: { health: 24500, speed: 280, maxSpeed: 320, agility: 62 },
    weapons: [
      { name: "AGM-114 Hellfire", type: "Anti-Tank Missile", damage: 12200, penetration: 850 },
      { name: "Hydra 70", type: "Rocket Pod", damage: 2200, penetration: 160 },
      { name: "M230 30mm", type: "Chain Gun", damage: 380, penetration: 75, rateOfFire: "625 rpm" },
    ],
    modules: {
      engine: [
        { name: "T700-GE-701D MK1", bonus: "+22 km/h speed" },
        { name: "T700-GE-701D MK2", bonus: "+40 km/h speed" },
        { name: "T700-GE-701D MK3", bonus: "+58 km/h speed" },
      ],
      survivability: [
        { name: "CMWS MK1", bonus: "+18% missile defense" },
        { name: "CMWS MK2", bonus: "+32% missile defense" },
        { name: "CMWS MK3", bonus: "+46% missile defense" },
      ],
      avionics: [
        { name: "Longbow Radar MK1", bonus: "+16% target acquisition" },
        { name: "Longbow Radar MK2", bonus: "+28% target acquisition" },
        { name: "Longbow Radar MK3", bonus: "+40% target acquisition" },
      ],
    },
  },
  {
    id: 10,
    name: "Type 90",
    type: "Tank",
    faction: "Japanese",
    tier: "III",
    description: "Advanced Japanese main battle tank with sophisticated fire control system.",
    stats: { health: 32500, speed: 70, armor: 750, agility: 32 },
    weapons: [
      { name: "JM33 120mm", type: "Main Gun", damage: 10600, penetration: 610 },
      { name: "Type 90 APFSDS", type: "Sabot Round", damage: 11200, penetration: 720 },
      { name: "Type 74 7.62mm", type: "Machine Gun", damage: 105, penetration: 10 },
    ],
    modules: {
      engine: [
        { name: "Mitsubishi 10ZG MK1", bonus: "+8 km/h speed" },
        { name: "Mitsubishi 10ZG MK2", bonus: "+16 km/h speed" },
        { name: "Mitsubishi 10ZG MK3", bonus: "+24 km/h speed" },
      ],
      armor: [
        { name: "Composite Armor MK1", bonus: "+65 armor" },
        { name: "Composite Armor MK2", bonus: "+130 armor" },
        { name: "Composite Armor MK3", bonus: "+195 armor" },
      ],
      fireControl: [
        { name: "Type 90 FCS MK1", bonus: "+11% accuracy" },
        { name: "Type 90 FCS MK2", bonus: "+19% accuracy" },
        { name: "Type 90 FCS MK3", bonus: "+27% accuracy" },
      ],
    },
  },
  {
    id: 11,
    name: "T-72A",
    type: "Tank",
    faction: "Russian",
    tier: "III",
    description: "Proven Soviet main battle tank with reliable performance and widespread service.",
    stats: { health: 32800, speed: 60, armor: 720, agility: 26 },
    weapons: [
      { name: "2A46 125mm", type: "Main Gun", damage: 10400, penetration: 580 },
      { name: "3BM42 Mango", type: "APFSDS Round", damage: 11000, penetration: 680 },
      { name: "PKT 7.62mm", type: "Machine Gun", damage: 100, penetration: 8 },
    ],
    modules: {
      engine: [
        { name: "V-46-6 MK1", bonus: "+6 km/h speed" },
        { name: "V-46-6 MK2", bonus: "+12 km/h speed" },
        { name: "V-46-6 MK3", bonus: "+18 km/h speed" },
      ],
      armor: [
        { name: "Steel Armor MK1", bonus: "+60 armor" },
        { name: "Steel Armor MK2", bonus: "+120 armor" },
        { name: "Steel Armor MK3", bonus: "+180 armor" },
      ],
      fireControl: [
        { name: "1A40 FCS MK1", bonus: "+9% accuracy" },
        { name: "1A40 FCS MK2", bonus: "+16% accuracy" },
        { name: "1A40 FCS MK3", bonus: "+23% accuracy" },
      ],
    },
  },
  {
    id: 12,
    name: "F-35B Lightning II",
    type: "Fighter Jet",
    faction: "American",
    tier: "IV",
    description: "Multi-role stealth fighter with STOVL capability and advanced sensor fusion.",
    stats: { health: 21800, speed: 720, afterburnerSpeed: 1930, agility: 75 },
    weapons: [
      { name: "AIM-120C AMRAAM", type: "Medium-Range AAM", damage: 8800, penetration: 460 },
      { name: "AIM-9X Block II", type: "Short-Range AAM", damage: 7400, penetration: 390 },
      { name: "GAU-22/A", type: "Autocannon", damage: 340, penetration: 58, rateOfFire: "3300 rpm" },
    ],
    modules: {
      engine: [
        { name: "F135-PW-600 MK1", bonus: "+160 km/h speed" },
        { name: "F135-PW-600 MK2", bonus: "+290 km/h speed" },
        { name: "F135-PW-600 MK3", bonus: "+420 km/h speed" },
      ],
      stealth: [
        { name: "RAM Coating MK1", bonus: "+17% stealth" },
        { name: "RAM Coating MK2", bonus: "+27% stealth" },
        { name: "RAM Coating MK3", bonus: "+37% stealth" },
      ],
      avionics: [
        { name: "AN/APG-81 MK1", bonus: "+21% detection" },
        { name: "AN/APG-81 MK2", bonus: "+37% detection" },
        { name: "AN/APG-81 MK3", bonus: "+53% detection" },
      ],
    },
  },
  {
    id: 13,
    name: "M60 Patton",
    type: "Tank",
    faction: "American",
    tier: "II",
    description: "Cold War era main battle tank with proven reliability and combat effectiveness.",
    stats: { health: 28500, speed: 48, armor: 650, agility: 22 },
    weapons: [
      { name: "M68 105mm", type: "Main Gun", damage: 8800, penetration: 480 },
      { name: "M392A2 APDS", type: "Sabot Round", damage: 9400, penetration: 580 },
      { name: "M85 .50 cal", type: "Heavy Machine Gun", damage: 140, penetration: 18 },
    ],
    modules: {
      engine: [
        { name: "Continental AVDS MK1", bonus: "+5 km/h speed" },
        { name: "Continental AVDS MK2", bonus: "+10 km/h speed" },
        { name: "Continental AVDS MK3", bonus: "+15 km/h speed" },
      ],
      armor: [
        { name: "Steel Armor MK1", bonus: "+50 armor" },
        { name: "Steel Armor MK2", bonus: "+100 armor" },
        { name: "Steel Armor MK3", bonus: "+150 armor" },
      ],
      fireControl: [
        { name: "M60 FCS MK1", bonus: "+8% accuracy" },
        { name: "M60 FCS MK2", bonus: "+14% accuracy" },
        { name: "M60 FCS MK3", bonus: "+20% accuracy" },
      ],
    },
  },
  {
    id: 14,
    name: "Mi-28NM Havoc",
    type: "Helicopter",
    faction: "Russian",
    tier: "IV",
    description: "Night-capable attack helicopter with advanced targeting systems and heavy armament.",
    stats: { health: 27500, speed: 315, maxSpeed: 365, agility: 68 },
    weapons: [
      { name: "9M120 Ataka", type: "Anti-Tank Missile", damage: 13500, penetration: 920 },
      { name: "S-13 Rockets", type: "Rocket Pod", damage: 2600, penetration: 200 },
      { name: "2A42 30mm", type: "Autocannon", damage: 410, penetration: 82, rateOfFire: "550 rpm" },
    ],
    modules: {
      engine: [
        { name: "Klimov TV3-117 MK1", bonus: "+24 km/h speed" },
        { name: "Klimov TV3-117 MK2", bonus: "+42 km/h speed" },
        { name: "Klimov TV3-117 MK3", bonus: "+60 km/h speed" },
      ],
      survivability: [
        { name: "President-S MK1", bonus: "+19% missile defense" },
        { name: "President-S MK2", bonus: "+33% missile defense" },
        { name: "President-S MK3", bonus: "+47% missile defense" },
      ],
      avionics: [
        { name: "GOES-342 MK1", bonus: "+17% target acquisition" },
        { name: "GOES-342 MK2", bonus: "+29% target acquisition" },
        { name: "GOES-342 MK3", bonus: "+41% target acquisition" },
      ],
    },
  },
  {
    id: 15,
    name: "ZTZ-99A",
    type: "Tank",
    faction: "Chinese",
    tier: "IV",
    description: "Advanced Chinese main battle tank with modern fire control and active protection.",
    stats: { health: 37200, speed: 65, armor: 1150, agility: 31 },
    weapons: [
      { name: "ZPT-98 125mm", type: "Main Gun", damage: 12200, penetration: 820 },
      { name: "DTC10-125", type: "APFSDS Round", damage: 13000, penetration: 950 },
      { name: "QJC88 12.7mm", type: "Heavy Machine Gun", damage: 160, penetration: 22 },
    ],
    modules: {
      engine: [
        { name: "150HB MK1", bonus: "+9 km/h speed" },
        { name: "150HB MK2", bonus: "+18 km/h speed" },
        { name: "150HB MK3", bonus: "+27 km/h speed" },
      ],
      armor: [
        { name: "FY-4 ERA MK1", bonus: "+90 armor" },
        { name: "FY-4 ERA MK2", bonus: "+180 armor" },
        { name: "FY-4 ERA MK3", bonus: "+270 armor" },
      ],
      fireControl: [
        { name: "Type 99A FCS MK1", bonus: "+13% accuracy" },
        { name: "Type 99A FCS MK2", bonus: "+23% accuracy" },
        { name: "Type 99A FCS MK3", bonus: "+33% accuracy" },
      ],
    },
  },
  {
    id: 16,
    name: "F-4E Phantom II",
    type: "Fighter Jet",
    faction: "American",
    tier: "II",
    description: "Legendary multi-role fighter with proven combat record and heavy payload capacity.",
    stats: { health: 19200, speed: 650, afterburnerSpeed: 2370, agility: 58 },
    weapons: [
      { name: "AIM-7 Sparrow", type: "Medium-Range AAM", damage: 6800, penetration: 320 },
      { name: "AIM-9 Sidewinder", type: "Short-Range AAM", damage: 5400, penetration: 280 },
      { name: "M61A1 Vulcan", type: "Autocannon", damage: 320, penetration: 55, rateOfFire: "6000 rpm" },
    ],
    modules: {
      engine: [
        { name: "J79-GE-17 MK1", bonus: "+140 km/h speed" },
        { name: "J79-GE-17 MK2", bonus: "+250 km/h speed" },
        { name: "J79-GE-17 MK3", bonus: "+360 km/h speed" },
      ],
      stealth: [
        { name: "ECM Pod MK1", bonus: "+8% stealth" },
        { name: "ECM Pod MK2", bonus: "+14% stealth" },
        { name: "ECM Pod MK3", bonus: "+20% stealth" },
      ],
      avionics: [
        { name: "AN/APQ-120 MK1", bonus: "+12% detection" },
        { name: "AN/APQ-120 MK2", bonus: "+20% detection" },
        { name: "AN/APQ-120 MK3", bonus: "+28% detection" },
      ],
    },
  },
  {
    id: 17,
    name: "Pantsir-S1",
    type: "Tank",
    faction: "Russian",
    tier: "IV",
    description: "Combined gun-missile air defense system with excellent anti-aircraft capability.",
    stats: { health: 32500, speed: 70, armor: 450, agility: 35 },
    weapons: [
      { name: "57E6 SAM", type: "Surface-to-Air Missile", damage: 8500, penetration: 400 },
      { name: "2A38M 30mm", type: "Twin Autocannon", damage: 580, penetration: 95, rateOfFire: "5000 rpm" },
      { name: "57E6-E SAM", type: "Extended Range SAM", damage: 9200, penetration: 450 },
    ],
    modules: {
      engine: [
        { name: "KAMAZ Engine MK1", bonus: "+8 km/h speed" },
        { name: "KAMAZ Engine MK2", bonus: "+16 km/h speed" },
        { name: "KAMAZ Engine MK3", bonus: "+24 km/h speed" },
      ],
      armor: [
        { name: "Steel Plating MK1", bonus: "+40 armor" },
        { name: "Steel Plating MK2", bonus: "+80 armor" },
        { name: "Steel Plating MK3", bonus: "+120 armor" },
      ],
      fireControl: [
        { name: "1RS2-1E Radar MK1", bonus: "+20% AA accuracy" },
        { name: "1RS2-1E Radar MK2", bonus: "+35% AA accuracy" },
        { name: "1RS2-1E Radar MK3", bonus: "+50% AA accuracy" },
      ],
    },
  },
  {
    id: 18,
    name: "A-10A Thunderbolt II",
    type: "Fighter Jet",
    faction: "American",
    tier: "III",
    description: "Close air support aircraft built around the GAU-8 cannon for tank-busting missions.",
    stats: { health: 28500, speed: 420, afterburnerSpeed: 420, agility: 35 },
    weapons: [
      { name: "GAU-8/A Avenger", type: "Rotary Cannon", damage: 1200, penetration: 180, rateOfFire: "3900 rpm" },
      { name: "AGM-65 Maverick", type: "Air-to-Ground Missile", damage: 11500, penetration: 750 },
      { name: "Mk 82 Bomb", type: "General Purpose Bomb", damage: 8800, penetration: 400 },
    ],
    modules: {
      engine: [
        { name: "TF34-GE-100 MK1", bonus: "+35 km/h speed" },
        { name: "TF34-GE-100 MK2", bonus: "+60 km/h speed" },
        { name: "TF34-GE-100 MK3", bonus: "+85 km/h speed" },
      ],
      stealth: [
        { name: "Armor Plating MK1", bonus: "+15% survivability" },
        { name: "Armor Plating MK2", bonus: "+25% survivability" },
        { name: "Armor Plating MK3", bonus: "+35% survivability" },
      ],
      avionics: [
        { name: "Pave Penny MK1", bonus: "+18% ground target detection" },
        { name: "Pave Penny MK2", bonus: "+30% ground target detection" },
        { name: "Pave Penny MK3", bonus: "+42% ground target detection" },
      ],
    },
  },
  {
    id: 19,
    name: "M270 MLRS",
    type: "Tank",
    faction: "American",
    tier: "IV",
    description: "Multiple Launch Rocket System capable of delivering devastating area bombardment.",
    stats: { health: 29900, speed: 64, armor: 380, agility: 18 },
    weapons: [
      { name: "M26 Rocket", type: "Artillery Rocket", damage: 15500, penetration: 600 },
      { name: "ATACMS", type: "Tactical Missile", damage: 22000, penetration: 800 },
      { name: "M240 7.62mm", type: "Machine Gun", damage: 115, penetration: 12 },
    ],
    modules: {
      engine: [
        { name: "Cummins VTA-903T MK1", bonus: "+7 km/h speed" },
        { name: "Cummins VTA-903T MK2", bonus: "+14 km/h speed" },
        { name: "Cummins VTA-903T MK3", bonus: "+21 km/h speed" },
      ],
      armor: [
        { name: "Aluminum Armor MK1", bonus: "+35 armor" },
        { name: "Aluminum Armor MK2", bonus: "+70 armor" },
        { name: "Aluminum Armor MK3", bonus: "+105 armor" },
      ],
      fireControl: [
        { name: "AFATDS MK1", bonus: "+25% artillery accuracy" },
        { name: "AFATDS MK2", bonus: "+40% artillery accuracy" },
        { name: "AFATDS MK3", bonus: "+55% artillery accuracy" },
      ],
    },
  },
  {
    id: 20,
    name: "Z-19E",
    type: "Helicopter",
    faction: "Chinese",
    tier: "IV",
    description: "Light attack helicopter with advanced avionics and precision strike capability.",
    stats: { health: 22800, speed: 280, maxSpeed: 330, agility: 72 },
    weapons: [
      { name: "HJ-10", type: "Anti-Tank Missile", damage: 12800, penetration: 880 },
      { name: "TY-90", type: "Air-to-Air Missile", damage: 6800, penetration: 350 },
      { name: "23mm Gun Pod", type: "Autocannon", damage: 350, penetration: 70, rateOfFire: "800 rpm" },
    ],
    modules: {
      engine: [
        { name: "WZ-8A MK1", bonus: "+20 km/h speed" },
        { name: "WZ-8A MK2", bonus: "+38 km/h speed" },
        { name: "WZ-8A MK3", bonus: "+56 km/h speed" },
      ],
      survivability: [
        { name: "Chaff/Flare MK1", bonus: "+16% missile defense" },
        { name: "Chaff/Flare MK2", bonus: "+28% missile defense" },
        { name: "Chaff/Flare MK3", bonus: "+40% missile defense" },
      ],
      avionics: [
        { name: "Optronic Suite MK1", bonus: "+15% target acquisition" },
        { name: "Optronic Suite MK2", bonus: "+26% target acquisition" },
        { name: "Optronic Suite MK3", bonus: "+37% target acquisition" },
      ],
    },
  },
  {
    id: 21,
    name: "Merkava Mk.4",
    type: "Tank",
    faction: "Israeli",
    tier: "IV",
    description: "Advanced main battle tank with unique rear-engine design and modular armor system.",
    stats: { health: 36800, speed: 64, armor: 1100, agility: 29 },
    weapons: [
      { name: "IMI MG251 120mm", type: "Main Gun", damage: 12000, penetration: 800 },
      { name: "LAHAT ATGM", type: "Gun-Launched Missile", damage: 14500, penetration: 1000 },
      { name: "M2HB .50 cal", type: "Heavy Machine Gun", damage: 150, penetration: 20 },
    ],
    modules: {
      engine: [
        { name: "GD883 MK1", bonus: "+8 km/h speed" },
        { name: "GD883 MK2", bonus: "+16 km/h speed" },
        { name: "GD883 MK3", bonus: "+24 km/h speed" },
      ],
      armor: [
        { name: "Modular Armor MK1", bonus: "+85 armor" },
        { name: "Modular Armor MK2", bonus: "+170 armor" },
        { name: "Modular Armor MK3", bonus: "+255 armor" },
      ],
      fireControl: [
        { name: "Knight Mk.4 FCS MK1", bonus: "+12% accuracy" },
        { name: "Knight Mk.4 FCS MK2", bonus: "+21% accuracy" },
        { name: "Knight Mk.4 FCS MK3", bonus: "+30% accuracy" },
      ],
    },
  },
  {
    id: 22,
    name: "BMD3",
    type: "Tank",
    faction: "Russian",
    tier: "III",
    description: "Amphibious light tank with excellent mobility and anti-tank capability.",
    stats: { health: 24000, speed: 70, armor: 320, agility: 30 },
    weapons: [
      { name: "2A42 30mm", type: "Autocannon", damage: 420, penetration: 85, rateOfFire: "550 rpm" },
      { name: "9M113 Konkurs", type: "ATGM", damage: 11500, penetration: 750 },
      { name: "PKT 7.62mm", type: "Machine Gun", damage: 100, penetration: 8 },
    ],
    modules: {
      engine: [
        { name: "UTD-29 MK1", bonus: "+8 km/h speed" },
        { name: "UTD-29 MK2", bonus: "+16 km/h speed" },
        { name: "UTD-29 MK3", bonus: "+24 km/h speed" },
      ],
      armor: [
        { name: "Aluminum Armor MK1", bonus: "+30 armor" },
        { name: "Aluminum Armor MK2", bonus: "+60 armor" },
        { name: "Aluminum Armor MK3", bonus: "+90 armor" },
      ],
      fireControl: [
        { name: "1A33 FCS MK1", bonus: "+10% accuracy" },
        { name: "1A33 FCS MK2", bonus: "+18% accuracy" },
        { name: "1A33 FCS MK3", bonus: "+26% accuracy" },
      ],
    },
  },
  {
    id: 23,
    name: "BMPT Terminator 2",
    type: "Tank",
    faction: "Russian",
    tier: "IV",
    description: "Tank support combat vehicle designed for urban warfare and infantry support.",
    stats: { health: 36400, speed: 60, armor: 850, agility: 36 },
    weapons: [
      { name: "2A42 30mm Twin", type: "Twin Autocannon", damage: 840, penetration: 170, rateOfFire: "550 rpm" },
      { name: "9M120 Ataka", type: "ATGM", damage: 13800, penetration: 920 },
      { name: "AGS-17 30mm", type: "Grenade Launcher", damage: 680, penetration: 120 },
    ],
    modules: {
      engine: [
        { name: "V-92S2F MK1", bonus: "+7 km/h speed" },
        { name: "V-92S2F MK2", bonus: "+14 km/h speed" },
        { name: "V-92S2F MK3", bonus: "+21 km/h speed" },
      ],
      armor: [
        { name: "Composite Armor MK1", bonus: "+75 armor" },
        { name: "Composite Armor MK2", bonus: "+150 armor" },
        { name: "Composite Armor MK3", bonus: "+225 armor" },
      ],
      fireControl: [
        { name: "Terminator FCS MK1", bonus: "+15% accuracy" },
        { name: "Terminator FCS MK2", bonus: "+26% accuracy" },
        { name: "Terminator FCS MK3", bonus: "+37% accuracy" },
      ],
    },
  },
  {
    id: 24,
    name: "SR-5 GMLRS",
    type: "Tank",
    faction: "Chinese",
    tier: "IV",
    description: "Guided multiple launch rocket system with precision strike capability.",
    stats: { health: 29900, speed: 85, armor: 280, agility: 18 },
    weapons: [
      { name: "SR-5 Rocket", type: "Guided Rocket", damage: 16800, penetration: 650 },
      { name: "BP-12A Missile", type: "Tactical Missile", damage: 20500, penetration: 750 },
      { name: "QJC88 12.7mm", type: "Heavy Machine Gun", damage: 160, penetration: 22 },
    ],
    modules: {
      engine: [
        { name: "Dongfeng Engine MK1", bonus: "+9 km/h speed" },
        { name: "Dongfeng Engine MK2", bonus: "+18 km/h speed" },
        { name: "Dongfeng Engine MK3", bonus: "+27 km/h speed" },
      ],
      armor: [
        { name: "Steel Plating MK1", bonus: "+25 armor" },
        { name: "Steel Plating MK2", bonus: "+50 armor" },
        { name: "Steel Plating MK3", bonus: "+75 armor" },
      ],
      fireControl: [
        { name: "BeiDou GPS MK1", bonus: "+30% rocket accuracy" },
        { name: "BeiDou GPS MK2", bonus: "+50% rocket accuracy" },
        { name: "BeiDou GPS MK3", bonus: "+70% rocket accuracy" },
      ],
    },
  },
  {
    id: 25,
    name: "2S19 Msta-S",
    type: "Tank",
    faction: "Russian",
    tier: "IV",
    description: "Self-propelled howitzer with advanced fire control and long-range capability.",
    stats: { health: 34300, speed: 60, armor: 420, agility: 25 },
    weapons: [
      { name: "2A64 152mm", type: "Howitzer", damage: 18500, penetration: 800 },
      { name: "3OF45 HE", type: "High Explosive", damage: 22000, penetration: 400 },
      { name: "NSVT 12.7mm", type: "Heavy Machine Gun", damage: 170, penetration: 25 },
    ],
    modules: {
      engine: [
        { name: "V-84A MK1", bonus: "+6 km/h speed" },
        { name: "V-84A MK2", bonus: "+12 km/h speed" },
        { name: "V-84A MK3", bonus: "+18 km/h speed" },
      ],
      armor: [
        { name: "Steel Armor MK1", bonus: "+40 armor" },
        { name: "Steel Armor MK2", bonus: "+80 armor" },
        { name: "Steel Armor MK3", bonus: "+120 armor" },
      ],
      fireControl: [
        { name: "1K113 FCS MK1", bonus: "+20% artillery accuracy" },
        { name: "1K113 FCS MK2", bonus: "+35% artillery accuracy" },
        { name: "1K113 FCS MK3", bonus: "+50% artillery accuracy" },
      ],
    },
  },
  {
    id: 26,
    name: "M1128 Stryker",
    type: "Tank",
    faction: "American",
    tier: "IV",
    description: "Mobile gun system with excellent speed and firepower for rapid deployment.",
    stats: { health: 28800, speed: 97, armor: 380, agility: 40 },
    weapons: [
      { name: "M68A1E4 105mm", type: "Main Gun", damage: 10800, penetration: 620 },
      { name: "M900 APFSDS", type: "Sabot Round", damage: 11500, penetration: 750 },
      { name: "M240 7.62mm", type: "Machine Gun", damage: 115, penetration: 12 },
    ],
    modules: {
      engine: [
        { name: "Caterpillar C7 MK1", bonus: "+10 km/h speed" },
        { name: "Caterpillar C7 MK2", bonus: "+20 km/h speed" },
        { name: "Caterpillar C7 MK3", bonus: "+30 km/h speed" },
      ],
      armor: [
        { name: "Ceramic Armor MK1", bonus: "+35 armor" },
        { name: "Ceramic Armor MK2", bonus: "+70 armor" },
        { name: "Ceramic Armor MK3", bonus: "+105 armor" },
      ],
      fireControl: [
        { name: "Digital FCS MK1", bonus: "+12% accuracy" },
        { name: "Digital FCS MK2", bonus: "+21% accuracy" },
        { name: "Digital FCS MK3", bonus: "+30% accuracy" },
      ],
    },
  },
  {
    id: 27,
    name: "AH-84",
    type: "Helicopter",
    faction: "American",
    tier: "IV",
    description: "Advanced attack helicopter with stealth features and precision weapons.",
    stats: { health: 18000, speed: 320, maxSpeed: 370, agility: 65 },
    weapons: [
      { name: "AGM-114R Hellfire", type: "Anti-Tank Missile", damage: 13200, penetration: 880 },
      { name: "APKWS II", type: "Guided Rocket", damage: 3200, penetration: 220 },
      { name: "M230LF 30mm", type: "Chain Gun", damage: 400, penetration: 78, rateOfFire: "625 rpm" },
    ],
    modules: {
      engine: [
        { name: "T700-GE-701D MK1", bonus: "+26 km/h speed" },
        { name: "T700-GE-701D MK2", bonus: "+46 km/h speed" },
        { name: "T700-GE-701D MK3", bonus: "+66 km/h speed" },
      ],
      survivability: [
        { name: "Stealth Package MK1", bonus: "+22% missile defense" },
        { name: "Stealth Package MK2", bonus: "+38% missile defense" },
        { name: "Stealth Package MK3", bonus: "+54% missile defense" },
      ],
      avionics: [
        { name: "Advanced Targeting MK1", bonus: "+19% target acquisition" },
        { name: "Advanced Targeting MK2", bonus: "+33% target acquisition" },
        { name: "Advanced Targeting MK3", bonus: "+47% target acquisition" },
      ],
    },
  },
  {
    id: 28,
    name: "Mi-28NM",
    type: "Helicopter",
    faction: "Russian",
    tier: "IV",
    description: "Night hunter attack helicopter with advanced sensors and heavy armament.",
    stats: { health: 28000, speed: 300, maxSpeed: 350, agility: 60 },
    weapons: [
      { name: "9M120 Ataka-V", type: "Anti-Tank Missile", damage: 14200, penetration: 950 },
      { name: "S-8 Rocket Pod", type: "Unguided Rockets", damage: 2800, penetration: 190 },
      { name: "2A42 30mm", type: "Autocannon", damage: 430, penetration: 88, rateOfFire: "550 rpm" },
    ],
    modules: {
      engine: [
        { name: "Klimov VK-2500 MK1", bonus: "+24 km/h speed" },
        { name: "Klimov VK-2500 MK2", bonus: "+42 km/h speed" },
        { name: "Klimov VK-2500 MK3", bonus: "+60 km/h speed" },
      ],
      survivability: [
        { name: "President-S DIRCM MK1", bonus: "+20% missile defense" },
        { name: "President-S DIRCM MK2", bonus: "+35% missile defense" },
        { name: "President-S DIRCM MK3", bonus: "+50% missile defense" },
      ],
      avionics: [
        { name: "GOES-451 MK1", bonus: "+18% target acquisition" },
        { name: "GOES-451 MK2", bonus: "+31% target acquisition" },
        { name: "GOES-451 MK3", bonus: "+44% target acquisition" },
      ],
    },
  },
  {
    id: 29,
    name: "WZ-10",
    type: "Helicopter",
    faction: "Chinese",
    tier: "IV",
    description: "Dedicated attack helicopter with tandem rotors and advanced fire control.",
    stats: { health: 20000, speed: 290, maxSpeed: 340, agility: 60 },
    weapons: [
      { name: "HJ-10", type: "Anti-Tank Missile", damage: 12800, penetration: 880 },
      { name: "TY-90", type: "Air-to-Air Missile", damage: 6800, penetration: 350 },
      { name: "23mm Gun Pod", type: "Autocannon", damage: 350, penetration: 70, rateOfFire: "800 rpm" },
    ],
    modules: {
      engine: [
        { name: "WZ-9 MK1", bonus: "+22 km/h speed" },
        { name: "WZ-9 MK2", bonus: "+40 km/h speed" },
        { name: "WZ-9 MK3", bonus: "+58 km/h speed" },
      ],
      survivability: [
        { name: "Chaff/Flare MK1", bonus: "+17% missile defense" },
        { name: "Chaff/Flare MK2", bonus: "+30% missile defense" },
        { name: "Chaff/Flare MK3", bonus: "+43% missile defense" },
      ],
      avionics: [
        { name: "Millimeter Wave Radar MK1", bonus: "+16% target acquisition" },
        { name: "Millimeter Wave Radar MK2", bonus: "+28% target acquisition" },
        { name: "Millimeter Wave Radar MK3", bonus: "+40% target acquisition" },
      ],
    },
  },
  {
    id: 30,
    name: "J-20",
    type: "Fighter Jet",
    faction: "Chinese",
    tier: "IV",
    description: "Fifth-generation stealth fighter with long-range capability and advanced sensors.",
    stats: { health: 21200, speed: 693.6, afterburnerSpeed: 1803.4, agility: 80 },
    weapons: [
      { name: "PL-15", type: "Long-Range AAM", damage: 10500, penetration: 520 },
      { name: "PL-10", type: "Short-Range AAM", damage: 7800, penetration: 410 },
      { name: "Type 30 30mm", type: "Autocannon", damage: 370, penetration: 62, rateOfFire: "1800 rpm" },
    ],
    modules: {
      engine: [
        { name: "WS-15 MK1", bonus: "+165 km/h speed" },
        { name: "WS-15 MK2", bonus: "+295 km/h speed" },
        { name: "WS-15 MK3", bonus: "+425 km/h speed" },
      ],
      stealth: [
        { name: "RAM Coating MK1", bonus: "+16% stealth" },
        { name: "RAM Coating MK2", bonus: "+26% stealth" },
        { name: "RAM Coating MK3", bonus: "+36% stealth" },
      ],
      avionics: [
        { name: "AESA Radar MK1", bonus: "+21% detection" },
        { name: "AESA Radar MK2", bonus: "+37% detection" },
        { name: "AESA Radar MK3", bonus: "+53% detection" },
      ],
    },
  },
  {
    id: 31,
    name: "Su-75 Checkmate",
    type: "Fighter Jet",
    faction: "Russian",
    tier: "IV",
    description: "Single-engine stealth fighter designed for export with advanced capabilities.",
    stats: { health: 18900, speed: 900, afterburnerSpeed: 2310, agility: 85 },
    weapons: [
      { name: "R-77M", type: "Medium-Range AAM", damage: 8800, penetration: 470 },
      { name: "R-74M2", type: "Short-Range AAM", damage: 7200, penetration: 380 },
      { name: "GSh-30-1", type: "Autocannon", damage: 350, penetration: 58, rateOfFire: "1800 rpm" },
    ],
    modules: {
      engine: [
        { name: "AL-51F1 MK1", bonus: "+190 km/h speed" },
        { name: "AL-51F1 MK2", bonus: "+340 km/h speed" },
        { name: "AL-51F1 MK3", bonus: "+490 km/h speed" },
      ],
      stealth: [
        { name: "Stealth Coating MK1", bonus: "+18% stealth" },
        { name: "Stealth Coating MK2", bonus: "+28% stealth" },
        { name: "Stealth Coating MK3", bonus: "+38% stealth" },
      ],
      avionics: [
        { name: "N036L Radar MK1", bonus: "+20% detection" },
        { name: "N036L Radar MK2", bonus: "+35% detection" },
        { name: "N036L Radar MK3", bonus: "+50% detection" },
      ],
    },
  },
  {
    id: 32,
    name: "T-90A",
    type: "Tank",
    faction: "Russian",
    tier: "IV",
    description: "Modern main battle tank with Shtora active protection and thermal imaging.",
    stats: { health: 35800, speed: 65, armor: 1050, agility: 28 },
    weapons: [
      { name: "2A46M-5 125mm", type: "Main Gun", damage: 11800, penetration: 780 },
      { name: "9M119M Refleks", type: "Gun-Launched ATGM", damage: 14200, penetration: 950 },
      { name: "NSVT 12.7mm", type: "Heavy Machine Gun", damage: 170, penetration: 25 },
    ],
    modules: {
      engine: [
        { name: "V-92S2 MK1", bonus: "+8 km/h speed" },
        { name: "V-92S2 MK2", bonus: "+16 km/h speed" },
        { name: "V-92S2 MK3", bonus: "+24 km/h speed" },
      ],
      armor: [
        { name: "Kontakt-5 ERA MK1", bonus: "+80 armor" },
        { name: "Kontakt-5 ERA MK2", bonus: "+160 armor" },
        { name: "Kontakt-5 ERA MK3", bonus: "+240 armor" },
      ],
      fireControl: [
        { name: "1A45T Irtysh MK1", bonus: "+13% accuracy" },
        { name: "1A45T Irtysh MK2", bonus: "+23% accuracy" },
        { name: "1A45T Irtysh MK3", bonus: "+33% accuracy" },
      ],
    },
  },
  {
    id: 33,
    name: "Challenger 2",
    type: "Tank",
    faction: "British",
    tier: "IV",
    description: "Heavy main battle tank with exceptional armor protection and proven reliability.",
    stats: { health: 38200, speed: 59, armor: 1250, agility: 25 },
    weapons: [
      { name: "L30A1 120mm", type: "Main Gun", damage: 11600, penetration: 760 },
      { name: "L27A1 CHARM 3", type: "APFSDS Round", damage: 12800, penetration: 890 },
      { name: "L94A1 7.62mm", type: "Machine Gun", damage: 108, penetration: 10 },
    ],
    modules: {
      engine: [
        { name: "Perkins CV12 MK1", bonus: "+6 km/h speed" },
        { name: "Perkins CV12 MK2", bonus: "+12 km/h speed" },
        { name: "Perkins CV12 MK3", bonus: "+18 km/h speed" },
      ],
      armor: [
        { name: "Chobham Armor MK1", bonus: "+95 armor" },
        { name: "Chobham Armor MK2", bonus: "+190 armor" },
        { name: "Chobham Armor MK3", bonus: "+285 armor" },
      ],
      fireControl: [
        { name: "IFCS MK1", bonus: "+11% accuracy" },
        { name: "IFCS MK2", bonus: "+19% accuracy" },
        { name: "IFCS MK3", bonus: "+27% accuracy" },
      ],
    },
  },
  {
    id: 34,
    name: "Type 10",
    type: "Tank",
    faction: "Japanese",
    tier: "IV",
    description: "Advanced Japanese MBT with modular armor and sophisticated fire control.",
    stats: { health: 34500, speed: 70, armor: 1000, agility: 35 },
    weapons: [
      { name: "JM33 120mm", type: "Main Gun", damage: 11400, penetration: 740 },
      { name: "Type 10 APFSDS", type: "Sabot Round", damage: 12200, penetration: 850 },
      { name: "Type 74 7.62mm", type: "Machine Gun", damage: 105, penetration: 10 },
    ],
    modules: {
      engine: [
        { name: "Mitsubishi 10ZG32WT MK1", bonus: "+9 km/h speed" },
        { name: "Mitsubishi 10ZG32WT MK2", bonus: "+18 km/h speed" },
        { name: "Mitsubishi 10ZG32WT MK3", bonus: "+27 km/h speed" },
      ],
      armor: [
        { name: "Modular Armor MK1", bonus: "+85 armor" },
        { name: "Modular Armor MK2", bonus: "+170 armor" },
        { name: "Modular Armor MK3", bonus: "+255 armor" },
      ],
      fireControl: [
        { name: "Type 10 FCS MK1", bonus: "+14% accuracy" },
        { name: "Type 10 FCS MK2", bonus: "+24% accuracy" },
        { name: "Type 10 FCS MK3", bonus: "+34% accuracy" },
      ],
    },
  },
  {
    id: 35,
    name: "Abrams X",
    type: "Tank",
    faction: "American",
    tier: "IV",
    description: "Next-generation prototype tank with unmanned turret and advanced systems.",
    stats: { health: 41200, speed: 72, armor: 1350, agility: 36 },
    weapons: [
      { name: "XM360 120mm", type: "Main Gun", damage: 13200, penetration: 900 },
      { name: "M829A4 APFSDS", type: "Sabot Round", damage: 14500, penetration: 1100 },
      { name: "XM914 30mm", type: "Remote Weapon Station", damage: 420, penetration: 85, rateOfFire: "200 rpm" },
      { name: "Switchblade Drone", type: "Loitering Munition", damage: 8500, penetration: 350 },
      { name: "Trophy APS", type: "Active Protection", damage: 2200, penetration: 150 },
    ],
    modules: {
      engine: [
        { name: "Hybrid Powerpack MK1", bonus: "+9 km/h speed" },
        { name: "Hybrid Powerpack MK2", bonus: "+18 km/h speed" },
        { name: "Hybrid Powerpack MK3", bonus: "+27 km/h speed" },
      ],
      armor: [
        { name: "Next-Gen Armor MK1", bonus: "+100 armor" },
        { name: "Next-Gen Armor MK2", bonus: "+200 armor" },
        { name: "Next-Gen Armor MK3", bonus: "+300 armor" },
      ],
      fireControl: [
        { name: "AI-Enhanced FCS MK1", bonus: "+16% accuracy" },
        { name: "AI-Enhanced FCS MK2", bonus: "+28% accuracy" },
        { name: "AI-Enhanced FCS MK3", bonus: "+40% accuracy" },
      ],
    },
  },
  {
    id: 36,
    name: "Su-57 Felon",
    type: "Fighter Jet",
    faction: "Russian",
    tier: "IV",
    description: "Fifth-generation stealth fighter with supermaneuverability and advanced sensors.",
    stats: { health: 23200, speed: 750, afterburnerSpeed: 2100, agility: 90 },
    weapons: [
      { name: "R-77M", type: "Medium-Range AAM", damage: 8600, penetration: 460 },
      { name: "R-74M2", type: "Short-Range AAM", damage: 7000, penetration: 370 },
      { name: "GSh-30-1", type: "Autocannon", damage: 340, penetration: 56, rateOfFire: "1800 rpm" },
    ],
    modules: {
      engine: [
        { name: "AL-51F-1 MK1", bonus: "+185 km/h speed" },
        { name: "AL-51F-1 MK2", bonus: "+330 km/h speed" },
        { name: "AL-51F-1 MK3", bonus: "+475 km/h speed" },
      ],
      stealth: [
        { name: "RAM Coating MK1", bonus: "+17% stealth" },
        { name: "RAM Coating MK2", bonus: "+27% stealth" },
        { name: "RAM Coating MK3", bonus: "+37% stealth" },
      ],
      avionics: [
        { name: "N036 Byelka MK1", bonus: "+22% detection" },
        { name: "N036 Byelka MK2", bonus: "+38% detection" },
        { name: "N036 Byelka MK3", bonus: "+54% detection" },
      ],
    },
  },
  {
    id: 37,
    name: "M1A2 SEPV3",
    type: "Tank",
    faction: "American",
    tier: "IV",
    description: "Latest variant of the Abrams with enhanced armor and digital systems.",
    stats: { health: 39500, speed: 68, armor: 1280, agility: 30 },
    weapons: [
      { name: "M256A1 120mm", type: "Main Gun", damage: 12800, penetration: 880 },
      { name: "M829A4 APFSDS", type: "Sabot Round", damage: 14200, penetration: 1050 },
      { name: "M240 7.62mm", type: "Machine Gun", damage: 125, penetration: 16 },
    ],
    modules: {
      engine: [
        { name: "AGT1500C MK1", bonus: "+9 km/h speed" },
        { name: "AGT1500C MK2", bonus: "+18 km/h speed" },
        { name: "AGT1500C MK3", bonus: "+27 km/h speed" },
      ],
      armor: [
        { name: "DU Armor Package MK1", bonus: "+95 armor" },
        { name: "DU Armor Package MK2", bonus: "+190 armor" },
        { name: "DU Armor Package MK3", bonus: "+285 armor" },
      ],
      fireControl: [
        { name: "SEPV3 FCS MK1", bonus: "+15% accuracy" },
        { name: "SEPV3 FCS MK2", bonus: "+26% accuracy" },
        { name: "SEPV3 FCS MK3", bonus: "+37% accuracy" },
      ],
    },
  },
  {
    id: 38,
    name: "Leopard 2A7V",
    type: "Tank",
    faction: "German",
    tier: "IV",
    description: "Most advanced Leopard variant with urban warfare modifications.",
    stats: { health: 37800, speed: 70, armor: 1180, agility: 32 },
    weapons: [
      { name: "Rh120 L/55", type: "Main Gun", damage: 12400, penetration: 860 },
      { name: "DM63 APFSDS", type: "Sabot Round", damage: 13600, penetration: 1000 },
      { name: "MG3A1 7.62mm", type: "Machine Gun", damage: 118, penetration: 14 },
    ],
    modules: {
      engine: [
        { name: "MTU MB 873 Ka-501 MK1", bonus: "+8 km/h speed" },
        { name: "MTU MB 873 Ka-501 MK2", bonus: "+16 km/h speed" },
        { name: "MTU MB 873 Ka-501 MK3", bonus: "+24 km/h speed" },
      ],
      armor: [
        { name: "AMAP Composite MK1", bonus: "+88 armor" },
        { name: "AMAP Composite MK2", bonus: "+176 armor" },
        { name: "AMAP Composite MK3", bonus: "+264 armor" },
      ],
      fireControl: [
        { name: "EMES 15 A4 MK1", bonus: "+14% accuracy" },
        { name: "EMES 15 A4 MK2", bonus: "+24% accuracy" },
        { name: "EMES 15 A4 MK3", bonus: "+34% accuracy" },
      ],
    },
  },
  {
    id: 39,
    name: "VT-4A1",
    type: "Tank",
    faction: "Chinese",
    tier: "IV",
    description: "Export variant of Chinese MBT with advanced fire control and protection.",
    stats: { health: 36200, speed: 70, armor: 1080, agility: 33 },
    weapons: [
      { name: "ZPT-98A 125mm", type: "Main Gun", damage: 12000, penetration: 840 },
      { name: "DTC10-125A", type: "APFSDS Round", damage: 13200, penetration: 980 },
      { name: "QJC88A 12.7mm", type: "Heavy Machine Gun", damage: 165, penetration: 24 },
    ],
    modules: {
      engine: [
        { name: "150HB-2 MK1", bonus: "+9 km/h speed" },
        { name: "150HB-2 MK2", bonus: "+18 km/h speed" },
        { name: "150HB-2 MK3", bonus: "+27 km/h speed" },
      ],
      armor: [
        { name: "FY-4A ERA MK1", bonus: "+82 armor" },
        { name: "FY-4A ERA MK2", bonus: "+164 armor" },
        { name: "FY-4A ERA MK3", bonus: "+246 armor" },
      ],
      fireControl: [
        { name: "VT-4A1 FCS MK1", bonus: "+13% accuracy" },
        { name: "VT-4A1 FCS MK2", bonus: "+23% accuracy" },
        { name: "VT-4A1 FCS MK3", bonus: "+33% accuracy" },
      ],
    },
  },
  {
    id: 40,
    name: "KF-51 Panther",
    type: "Tank",
    faction: "German",
    tier: "IV",
    description: "Next-generation main battle tank with 130mm gun and advanced systems.",
    stats: { health: 40800, speed: 70, armor: 1320, agility: 34 },
    weapons: [
      { name: "Future Gun System 130mm", type: "Main Gun", damage: 15200, penetration: 1150 },
      { name: "APFSDS-T 130mm", type: "Sabot Round", damage: 16800, penetration: 1350 },
      { name: "NATTER LOSAT", type: "Loitering Munition", damage: 9200, penetration: 420 },
    ],
    modules: {
      engine: [
        { name: "MTU MT 883 MK1", bonus: "+8 km/h speed" },
        { name: "MTU MT 883 MK2", bonus: "+16 km/h speed" },
        { name: "MTU MT 883 MK3", bonus: "+24 km/h speed" },
      ],
      armor: [
        { name: "AMAP-SC MK1", bonus: "+98 armor" },
        { name: "AMAP-SC MK2", bonus: "+196 armor" },
        { name: "AMAP-SC MK3", bonus: "+294 armor" },
      ],
      fireControl: [
        { name: "EMES 15 A5 MK1", bonus: "+16% accuracy" },
        { name: "EMES 15 A5 MK2", bonus: "+28% accuracy" },
        { name: "EMES 15 A5 MK3", bonus: "+40% accuracy" },
      ],
    },
  },
  {
    id: 41,
    name: "Challenger 3",
    type: "Tank",
    faction: "British",
    tier: "IV",
    description: "Modernized Challenger with new turret and Rheinmetall gun.",
    stats: { health: 39800, speed: 62, armor: 1300, agility: 27 },
    weapons: [
      { name: "Rh120 L/55A1", type: "Main Gun", damage: 12600, penetration: 870 },
      { name: "DM73 APFSDS", type: "Sabot Round", damage: 13800, penetration: 1020 },
      { name: "L37A2 7.62mm", type: "Machine Gun", damage: 112, penetration: 12 },
    ],
    modules: {
      engine: [
        { name: "Perkins CV12-9A MK1", bonus: "+7 km/h speed" },
        { name: "Perkins CV12-9A MK2", bonus: "+14 km/h speed" },
        { name: "Perkins CV12-9A MK3", bonus: "+21 km/h speed" },
      ],
      armor: [
        { name: "Chobham Mk.2 MK1", bonus: "+92 armor" },
        { name: "Chobham Mk.2 MK2", bonus: "+184 armor" },
        { name: "Chobham Mk.2 MK3", bonus: "+276 armor" },
      ],
      fireControl: [
        { name: "IFCS Mk.3 MK1", bonus: "+12% accuracy" },
        { name: "IFCS Mk.3 MK2", bonus: "+21% accuracy" },
        { name: "IFCS Mk.3 MK3", bonus: "+30% accuracy" },
      ],
    },
  },
  {
    id: 42,
    name: "Leclerc S2 AZUR",
    type: "Tank",
    faction: "French",
    tier: "IV",
    description: "Upgraded French MBT with enhanced armor and battlefield management system.",
    stats: { health: 35600, speed: 71, armor: 1020, agility: 35 },
    weapons: [
      { name: "CN120-26 120mm", type: "Main Gun", damage: 11800, penetration: 780 },
      { name: "OFL 120 F1", type: "APFSDS Round", damage: 12800, penetration: 920 },
      { name: "M2HB .50 cal", type: "Heavy Machine Gun", damage: 148, penetration: 19 },
    ],
    modules: {
      engine: [
        { name: "SACM V8X-1500 MK1", bonus: "+8 km/h speed" },
        { name: "SACM V8X-1500 MK2", bonus: "+16 km/h speed" },
        { name: "SACM V8X-1500 MK3", bonus: "+24 km/h speed" },
      ],
      armor: [
        { name: "AZUR Package MK1", bonus: "+78 armor" },
        { name: "AZUR Package MK2", bonus: "+156 armor" },
        { name: "AZUR Package MK3", bonus: "+234 armor" },
      ],
      fireControl: [
        { name: "FINDERS MK1", bonus: "+12% accuracy" },
        { name: "FINDERS MK2", bonus: "+21% accuracy" },
        { name: "FINDERS MK3", bonus: "+30% accuracy" },
      ],
    },
  },
  {
    id: 43,
    name: "Object 640",
    type: "Tank",
    faction: "Russian",
    tier: "IV",
    description: "Experimental Russian tank with unmanned turret and advanced automation.",
    stats: { health: 42500, speed: 68, armor: 1400, agility: 30 },
    weapons: [
      { name: "2A83 152mm", type: "Main Gun", damage: 16800, penetration: 1200 },
      { name: "3BM69 Vacuum-2", type: "APFSDS Round", damage: 18500, penetration: 1450 },
      { name: "Kord 12.7mm", type: "Remote Machine Gun", damage: 185, penetration: 28 },
    ],
    modules: {
      engine: [
        { name: "A-85-3A MK1", bonus: "+8 km/h speed" },
        { name: "A-85-3A MK2", bonus: "+16 km/h speed" },
        { name: "A-85-3A MK3", bonus: "+24 km/h speed" },
      ],
      armor: [
        { name: "Relikt ERA MK1", bonus: "+105 armor" },
        { name: "Relikt ERA MK2", bonus: "+210 armor" },
        { name: "Relikt ERA MK3", bonus: "+315 armor" },
      ],
      fireControl: [
        { name: "Kalina-2 FCS MK1", bonus: "+18% accuracy" },
        { name: "Kalina-2 FCS MK2", bonus: "+31% accuracy" },
        { name: "Kalina-2 FCS MK3", bonus: "+44% accuracy" },
      ],
    },
  },
  {
    id: 44,
    name: "MiG-35 Fulcrum-F",
    type: "Fighter Jet",
    faction: "Russian",
    tier: "III",
    description: "Advanced multi-role fighter with AESA radar and modern avionics.",
    stats: { health: 20800, speed: 680, afterburnerSpeed: 2100, agility: 78 },
    weapons: [
      { name: "R-77-1", type: "Medium-Range AAM", damage: 8200, penetration: 440 },
      { name: "R-73", type: "Short-Range AAM", damage: 6800, penetration: 360 },
      { name: "GSh-30-1", type: "Autocannon", damage: 330, penetration: 54, rateOfFire: "1800 rpm" },
    ],
    modules: {
      engine: [
        { name: "RD-33MK MK1", bonus: "+155 km/h speed" },
        { name: "RD-33MK MK2", bonus: "+280 km/h speed" },
        { name: "RD-33MK MK3", bonus: "+405 km/h speed" },
      ],
      stealth: [
        { name: "ECM Suite MK1", bonus: "+12% stealth" },
        { name: "ECM Suite MK2", bonus: "+20% stealth" },
        { name: "ECM Suite MK3", bonus: "+28% stealth" },
      ],
      avionics: [
        { name: "Zhuk-AE MK1", bonus: "+18% detection" },
        { name: "Zhuk-AE MK2", bonus: "+31% detection" },
        { name: "Zhuk-AE MK3", bonus: "+44% detection" },
      ],
    },
  },
  {
    id: 45,
    name: "F-16C Night Falcon",
    type: "Fighter Jet",
    faction: "American",
    tier: "III",
    description: "Multi-role fighter with advanced night vision and precision strike capability.",
    stats: { health: 19500, speed: 640, afterburnerSpeed: 2120, agility: 82 },
    weapons: [
      { name: "AIM-120C-7", type: "Medium-Range AAM", damage: 8400, penetration: 450 },
      { name: "AIM-9X Block II", type: "Short-Range AAM", damage: 7200, penetration: 380 },
      { name: "M61A1 Vulcan", type: "Autocannon", damage: 315, penetration: 52, rateOfFire: "6000 rpm" },
    ],
    modules: {
      engine: [
        { name: "F110-GE-129 MK1", bonus: "+145 km/h speed" },
        { name: "F110-GE-129 MK2", bonus: "+260 km/h speed" },
        { name: "F110-GE-129 MK3", bonus: "+375 km/h speed" },
      ],
      stealth: [
        { name: "ECM Pod MK1", bonus: "+10% stealth" },
        { name: "ECM Pod MK2", bonus: "+17% stealth" },
        { name: "ECM Pod MK3", bonus: "+24% stealth" },
      ],
      avionics: [
        { name: "AN/APG-68(V)9 MK1", bonus: "+16% detection" },
        { name: "AN/APG-68(V)9 MK2", bonus: "+28% detection" },
        { name: "AN/APG-68(V)9 MK3", bonus: "+40% detection" },
      ],
    },
  },
  {
    id: 46,
    name: "J-16",
    type: "Fighter Jet",
    faction: "Chinese",
    tier: "III",
    description: "Twin-engine multi-role fighter with heavy payload capacity.",
    stats: { health: 22400, speed: 720, afterburnerSpeed: 2050, agility: 72 },
    weapons: [
      { name: "PL-15", type: "Long-Range AAM", damage: 9800, penetration: 490 },
      { name: "PL-10", type: "Short-Range AAM", damage: 7400, penetration: 390 },
      { name: "Type 30 30mm", type: "Autocannon", damage: 345, penetration: 58, rateOfFire: "1800 rpm" },
    ],
    modules: {
      engine: [
        { name: "WS-10B MK1", bonus: "+160 km/h speed" },
        { name: "WS-10B MK2", bonus: "+290 km/h speed" },
        { name: "WS-10B MK3", bonus: "+420 km/h speed" },
      ],
      stealth: [
        { name: "ECM Package MK1", bonus: "+11% stealth" },
        { name: "ECM Package MK2", bonus: "+19% stealth" },
        { name: "ECM Package MK3", bonus: "+27% stealth" },
      ],
      avionics: [
        { name: "KLJ-10 AESA MK1", bonus: "+17% detection" },
        { name: "KLJ-10 AESA MK2", bonus: "+29% detection" },
        { name: "KLJ-10 AESA MK3", bonus: "+41% detection" },
      ],
    },
  },
  {
    id: 47,
    name: "F-15SE Silent Eagle",
    type: "Fighter Jet",
    faction: "American",
    tier: "III",
    description: "Stealth variant of the F-15 with reduced radar signature and advanced systems.",
    stats: { health: 24200, speed: 780, afterburnerSpeed: 2650, agility: 75 },
    weapons: [
      { name: "AIM-120D", type: "Long-Range AAM", damage: 9600, penetration: 500 },
      { name: "AIM-9X Block III", type: "Short-Range AAM", damage: 7800, penetration: 410 },
      { name: "M61A1 Vulcan", type: "Autocannon", damage: 325, penetration: 54, rateOfFire: "6000 rpm" },
    ],
    modules: {
      engine: [
        { name: "F110-GE-129 MK1", bonus: "+170 km/h speed" },
        { name: "F110-GE-129 MK2", bonus: "+305 km/h speed" },
        { name: "F110-GE-129 MK3", bonus: "+440 km/h speed" },
      ],
      stealth: [
        { name: "Stealth Package MK1", bonus: "+14% stealth" },
        { name: "Stealth Package MK2", bonus: "+24% stealth" },
        { name: "Stealth Package MK3", bonus: "+34% stealth" },
      ],
      avionics: [
        { name: "AN/APG-82(V)1 MK1", bonus: "+19% detection" },
        { name: "AN/APG-82(V)1 MK2", bonus: "+33% detection" },
        { name: "AN/APG-82(V)1 MK3", bonus: "+47% detection" },
      ],
    },
  },
  {
    id: 48,
    name: "Ka-58 Black Ghost",
    type: "Helicopter",
    faction: "Russian",
    tier: "IV",
    description: "Stealth attack helicopter with advanced composite materials and reduced signature.",
    stats: { health: 24800, speed: 310, maxSpeed: 360, agility: 70 },
    weapons: [
      { name: "9M120 Ataka-VM", type: "Anti-Tank Missile", damage: 13800, penetration: 920 },
      { name: "S-8KO Rockets", type: "Rocket Pod", damage: 2600, penetration: 185 },
      { name: "2A42 30mm", type: "Autocannon", damage: 405, penetration: 80, rateOfFire: "550 rpm" },
    ],
    modules: {
      engine: [
        { name: "VK-2500P MK1", bonus: "+25 km/h speed" },
        { name: "VK-2500P MK2", bonus: "+44 km/h speed" },
        { name: "VK-2500P MK3", bonus: "+63 km/h speed" },
      ],
      survivability: [
        { name: "Stealth Coating MK1", bonus: "+25% missile defense" },
        { name: "Stealth Coating MK2", bonus: "+42% missile defense" },
        { name: "Stealth Coating MK3", bonus: "+59% missile defense" },
      ],
      avionics: [
        { name: "Advanced Targeting MK1", bonus: "+20% target acquisition" },
        { name: "Advanced Targeting MK2", bonus: "+34% target acquisition" },
        { name: "Advanced Targeting MK3", bonus: "+48% target acquisition" },
      ],
    },
  },
  {
    id: 49,
    name: "HSTV-L",
    type: "Tank",
    faction: "American",
    tier: "III",
    description: "High Survivability Test Vehicle with lightweight armor and rapid-fire gun.",
    stats: { health: 22500, speed: 85, armor: 280, agility: 45 },
    weapons: [
      { name: "ARES 75mm", type: "Rapid-Fire Gun", damage: 4200, penetration: 320, rateOfFire: "60 rpm" },
      { name: "APFSDS-T 75mm", type: "Sabot Round", damage: 4800, penetration: 420 },
      { name: "M240 7.62mm", type: "Machine Gun", damage: 115, penetration: 12 },
    ],
    modules: {
      engine: [
        { name: "AVCR-1360 MK1", bonus: "+12 km/h speed" },
        { name: "AVCR-1360 MK2", bonus: "+24 km/h speed" },
        { name: "AVCR-1360 MK3", bonus: "+36 km/h speed" },
      ],
      armor: [
        { name: "Composite Armor MK1", bonus: "+25 armor" },
        { name: "Composite Armor MK2", bonus: "+50 armor" },
        { name: "Composite Armor MK3", bonus: "+75 armor" },
      ],
      fireControl: [
        { name: "Digital FCS MK1", bonus: "+15% accuracy" },
        { name: "Digital FCS MK2", bonus: "+26% accuracy" },
        { name: "Digital FCS MK3", bonus: "+37% accuracy" },
      ],
    },
  },
  {
    id: 50,
    name: "2S6M1 Tunguska-M1",
    type: "Tank",
    faction: "Russian",
    tier: "III",
    description: "Combined gun-missile air defense system with radar guidance.",
    stats: { health: 28200, speed: 65, armor: 420, agility: 32 },
    weapons: [
      { name: "9M311-M1", type: "Surface-to-Air Missile", damage: 7800, penetration: 380 },
      { name: "2A38M 30mm", type: "Twin Autocannon", damage: 520, penetration: 88, rateOfFire: "5000 rpm" },
      { name: "9M311K SAM", type: "Extended SAM", damage: 8400, penetration: 420 },
    ],
    modules: {
      engine: [
        { name: "V-46-6 MK1", bonus: "+7 km/h speed" },
        { name: "V-46-6 MK2", bonus: "+14 km/h speed" },
        { name: "V-46-6 MK3", bonus: "+21 km/h speed" },
      ],
      armor: [
        { name: "Steel Armor MK1", bonus: "+38 armor" },
        { name: "Steel Armor MK2", bonus: "+76 armor" },
        { name: "Steel Armor MK3", bonus: "+114 armor" },
      ],
      fireControl: [
        { name: "1RL144 Radar MK1", bonus: "+18% AA accuracy" },
        { name: "1RL144 Radar MK2", bonus: "+31% AA accuracy" },
        { name: "1RL144 Radar MK3", bonus: "+44% AA accuracy" },
      ],
    },
  },
  {
    id: 51,
    name: "TOS-1A",
    type: "Tank",
    faction: "Russian",
    tier: "IV",
    description: "Heavy flamethrower system for bunker-busting and area denial operations.",
    stats: { health: 33800, speed: 60, armor: 680, agility: 22 },
    weapons: [
      { name: "220mm Thermobaric", type: "Rocket", damage: 28500, penetration: 1200 },
      { name: "MO.1.01.04M", type: "Incendiary Rocket", damage: 32000, penetration: 800 },
      { name: "NSVT 12.7mm", type: "Heavy Machine Gun", damage: 170, penetration: 25 },
    ],
    modules: {
      engine: [
        { name: "V-84MS MK1", bonus: "+6 km/h speed" },
        { name: "V-84MS MK2", bonus: "+12 km/h speed" },
        { name: "V-84MS MK3", bonus: "+18 km/h speed" },
      ],
      armor: [
        { name: "T-72 Chassis MK1", bonus: "+58 armor" },
        { name: "T-72 Chassis MK2", bonus: "+116 armor" },
        { name: "T-72 Chassis MK3", bonus: "+174 armor" },
      ],
      fireControl: [
        { name: "TOS-1A FCS MK1", bonus: "+25% rocket accuracy" },
        { name: "TOS-1A FCS MK2", bonus: "+42% rocket accuracy" },
        { name: "TOS-1A FCS MK3", bonus: "+59% rocket accuracy" },
      ],
    },
  },
]

const MwtVehicleStats = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("")
  const [tierFilter, setTierFilter] = useState("")
  const [compare, setCompare] = useState<string[]>([])
  const [expandedVehicle, setExpandedVehicle] = useState("")
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState<{ role: string; content: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [chatInput, setChatInput] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const vehiclesPerPage = 15

  const types = [...new Set(VEHICLES.map((v) => v.type))]
  const tiers = [...new Set(VEHICLES.map((v) => v.tier))].sort()

  const getVehicleInfo = (query: string): string => {
    try {
      const lowerQuery = query.toLowerCase().trim()

      // Check for comparison queries (X vs Y)
      if (lowerQuery.includes(" vs ") || lowerQuery.includes(" versus ")) {
        const parts = lowerQuery.split(/ vs | versus /)
        if (parts.length === 2) {
          const vehicle1 = findVehicleByName(parts[0].trim())
          const vehicle2 = findVehicleByName(parts[1].trim())

          if (vehicle1 && vehicle2) {
            return formatComparison(vehicle1, vehicle2)
          }
        }
      }

      // Search for specific vehicle
      const vehicle = findVehicleByName(lowerQuery)
      if (vehicle) {
        return formatVehicleInfo(vehicle)
      }

      // Search for weapon
      const weaponInfo = findWeapon(lowerQuery)
      if (weaponInfo) {
        return weaponInfo
      }

      // Handle general queries
      if (lowerQuery.includes("strongest") || lowerQuery.includes("highest health")) {
        const strongest = VEHICLES.reduce((prev, current) =>
          prev.stats.health > current.stats.health ? prev : current,
        )
        return `The strongest vehicle by health is the **${strongest.name}** with ${strongest.stats.health.toLocaleString()} HP.`
      }

      if (lowerQuery.includes("fastest")) {
        const fastest = VEHICLES.reduce((prev, current) => {
          const prevSpeed =
            current.type === "Fighter Jet" || current.type === "Bomber"
              ? current.stats.afterburnerSpeed || current.stats.speed
              : current.stats.speed
          const currentSpeed =
            prev.type === "Fighter Jet" || prev.type === "Bomber"
              ? prev.stats.afterburnerSpeed || prev.stats.speed
              : prev.stats.speed
          return prevSpeed > currentSpeed ? current : prev
        })
        const speed =
          fastest.type === "Fighter Jet" || fastest.type === "Bomber"
            ? fastest.stats.afterburnerSpeed || fastest.stats.speed
            : fastest.stats.speed
        return `The fastest vehicle is the **${fastest.name}** with ${speed} km/h.`
      }

      return `I couldn't find information about "${query}". Try asking about specific vehicles like "Su-57M", comparisons like "F-22 vs J-35", or general questions like "strongest tank".`
    } catch (error) {
      console.error("Chat error:", error)
      return `Error processing query: ${error instanceof Error ? error.message : "Unknown error"}`
    }
  }

  const findVehicleByName = (name: string) => {
    const cleanName = name.replace(/[-\s]/g, "").toLowerCase()
    return VEHICLES.find(
      (v) =>
        v.name.replace(/[-\s]/g, "").toLowerCase().includes(cleanName) ||
        cleanName.includes(v.name.replace(/[-\s]/g, "").toLowerCase()),
    )
  }

  const findWeapon = (weaponName: string): string | null => {
    const cleanWeaponName = weaponName.replace(/[-\s]/g, "").toLowerCase()

    for (const vehicle of VEHICLES) {
      for (const weapon of vehicle.weapons) {
        if (weapon.name.replace(/[-\s]/g, "").toLowerCase().includes(cleanWeaponName)) {
          return (
            `**${weapon.name}** (${weapon.type})\n` +
            `• **Damage:** ${weapon.damage}\n` +
            `• **Penetration:** ${weapon.penetration}\n` +
            `• **Used by:** ${vehicle.name}\n` +
            (weapon.rateOfFire ? `• **Rate of Fire:** ${weapon.rateOfFire}\n` : "") +
            (weapon.lockTime ? `• **Lock Time:** ${weapon.lockTime}s\n` : "")
          )
        }
      }
    }
    return null
  }

  const formatVehicleInfo = (vehicle: any): string => {
    const statsText =
      vehicle.type === "Fighter Jet" || vehicle.type === "Bomber"
        ? `• **Health:** ${vehicle.stats.health.toLocaleString()} HP\n• **Cruise Speed:** ${vehicle.stats.speed} km/h\n• **Afterburner Speed:** ${vehicle.stats.afterburnerSpeed} km/h\n• **Agility:** ${vehicle.stats.agility}`
        : vehicle.type === "Helicopter"
          ? `• **Health:** ${vehicle.stats.health.toLocaleString()} HP\n• **Speed:** ${vehicle.stats.speed} km/h\n• **Max Speed:** ${vehicle.stats.maxSpeed} km/h\n• **Agility:** ${vehicle.stats.agility}`
          : `• **Health:** ${vehicle.stats.health.toLocaleString()} HP\n• **Speed:** ${vehicle.stats.speed} km/h\n• **Armor:** ${vehicle.stats.armor}\n• **Agility:** ${vehicle.stats.agility}`

    const weaponsText = vehicle.weapons
      .map((w: any) => `  - **${w.name}**: ${w.damage} DMG, ${w.penetration} PEN`)
      .join("\n")

    return `**${vehicle.name}** (${vehicle.faction} ${vehicle.type}, Tier ${vehicle.tier})\n\n${vehicle.description}\n\n**Stats:**\n${statsText}\n\n**Weapons:**\n${weaponsText}`
  }

  const formatComparison = (vehicle1: any, vehicle2: any): string => {
    const getSpeed = (v: any) =>
      v.type === "Fighter Jet" || v.type === "Bomber" ? v.stats.afterburnerSpeed || v.stats.speed : v.stats.speed

    const healthWinner = vehicle1.stats.health > vehicle2.stats.health ? vehicle1.name : vehicle2.name
    const speedWinner = getSpeed(vehicle1) > getSpeed(vehicle2) ? vehicle1.name : vehicle2.name
    const agilityWinner = vehicle1.stats.agility > vehicle2.stats.agility ? vehicle1.name : vehicle2.name

    return (
      `**${vehicle1.name} vs ${vehicle2.name}**\n\n` +
      `**Health:** ${vehicle1.stats.health.toLocaleString()} vs ${vehicle2.stats.health.toLocaleString()} (Winner: ${healthWinner})\n` +
      `**Speed:** ${getSpeed(vehicle1)} vs ${getSpeed(vehicle2)} km/h (Winner: ${speedWinner})\n` +
      `**Agility:** ${vehicle1.stats.agility} vs ${vehicle2.stats.agility} (Winner: ${agilityWinner})\n\n` +
      `**${vehicle1.name}** is a ${vehicle1.tier} ${vehicle1.type} from ${vehicle1.faction}\n` +
      `**${vehicle2.name}** is a ${vehicle2.tier} ${vehicle2.type} from ${vehicle2.faction}`
    )
  }

  const handleChatSubmit = () => {
    if (!chatInput.trim()) return

    const userMessage = { role: "user", content: chatInput }
    setChatMessages((prev) => [...prev, userMessage])
    setChatInput("")
    setIsLoading(true)

    try {
      const response = getVehicleInfo(chatInput)
      const assistantMessage = { role: "assistant", content: response }
      setChatMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      const errorMessage = { role: "assistant", content: "Sorry, I encountered an error. Please try again." }
      setChatMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const filtered = VEHICLES.filter((vehicle) => {
    const matchesSearch =
      !searchQuery ||
      vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.faction.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = !typeFilter || vehicle.type === typeFilter
    const matchesTier = !tierFilter || vehicle.tier === tierFilter

    return matchesSearch && matchesType && matchesTier
  })

  const totalPages = Math.ceil(filtered.length / vehiclesPerPage)
  const startIndex = (currentPage - 1) * vehiclesPerPage
  const endIndex = startIndex + vehiclesPerPage
  const paginatedVehicles = filtered.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  const handleFilterChange = (filterType: string, value: string) => {
    setCurrentPage(1)
    if (filterType === "type") setTypeFilter(value)
    if (filterType === "tier") setTierFilter(value)
    if (filterType === "search") setSearchQuery(value)
  }

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

  const isMarketVehicle = (vehicleName: string) => {
    const marketVehicles = [
      "Abrams X", // Battle Pass vehicle
      "Type 10", // Premium market vehicle
      "Su-57M", // Premium market vehicle
      "TU-222", // Premium market vehicle
      "Merkava Mk.4", // Premium market vehicle
      "Leopard 2A4", // Premium market vehicle
    ]
    return marketVehicles.includes(vehicleName)
  }

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "II":
        return "border-l-green-500"
      case "III":
        return "border-l-blue-700"
      case "IV":
        return "border-l-purple-500"
      default:
        return "border-l-gray-500"
    }
  }

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <header className="bg-slate-800 p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-cyan-400 mb-4">MWT Vehicle Statistics</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search vehicles..."
                value={searchQuery}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-900/40 text-slate-100 rounded-lg border border-slate-700 focus:border-cyan-500 focus:outline-none"
              />
            </div>
            <select
              value={typeFilter}
              onChange={(e) => handleFilterChange("type", e.target.value)}
              className="bg-slate-900/40 text-slate-100 p-2 rounded-lg border border-slate-700 focus:border-cyan-500 focus:outline-none"
            >
              <option value="">All Types</option>
              {types.map((type) => (
                <option key={type} value={type} className="bg-slate-800 text-slate-100">
                  {type}
                </option>
              ))}
            </select>
            <select
              value={tierFilter}
              onChange={(e) => handleFilterChange("tier", e.target.value)}
              className="bg-slate-900/40 text-slate-100 p-2 rounded-lg border border-slate-700 focus:border-cyan-500 focus:outline-none"
            >
              <option value="">All Tiers</option>
              {tiers.map((tier) => (
                <option key={tier} value={tier} className="bg-slate-800 text-slate-100">
                  Tier {tier}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {compare.length === 2 && (
          <div className="mb-8 bg-slate-900/40 rounded-xl p-6 border border-slate-800">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Vehicle Comparison</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {compare.map((id) => {
                const vehicle = VEHICLES.find((v) => v.id.toString() === id)
                if (!vehicle) return null
                return (
                  <div key={id} className="bg-slate-800/50 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-2">{vehicle.name}</h3>
                    <p className="text-slate-400 text-sm mb-3">{vehicle.description}</p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
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
            <button
              onClick={() => setCompare([])}
              className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              Clear Comparison
            </button>
          </div>
        )}

        <div className="mb-6 flex items-center justify-between">
          <p className="text-slate-400">
            Showing {startIndex + 1}-{Math.min(endIndex, filtered.length)} of {filtered.length} vehicles
          </p>
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-slate-200 rounded transition-colors"
              >
                Previous
              </button>

              <div className="flex gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum
                  if (totalPages <= 5) {
                    pageNum = i + 1
                  } else if (currentPage <= 3) {
                    pageNum = i + 1
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i
                  } else {
                    pageNum = currentPage - 2 + i
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-3 py-1 rounded transition-colors ${
                        currentPage === pageNum
                          ? "bg-cyan-600 text-white"
                          : "bg-slate-800 hover:bg-slate-700 text-slate-200"
                      }`}
                    >
                      {pageNum}
                    </button>
                  )
                })}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-slate-200 rounded transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedVehicles.map((vehicle) => {
            // Added gold market vehicle indicator that overlaps tier indicator
            return (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`relative bg-slate-900/60 rounded-xl p-6 border border-slate-800 hover:border-cyan-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10`}
              >
                {/* Tier indicator bookmark */}
                <div
                  className={`absolute top-0 left-0 w-0 h-0 border-l-[20px] border-b-[20px] border-b-transparent ${
                    vehicle.tier === "II"
                      ? "border-l-green-500"
                      : vehicle.tier === "III"
                        ? "border-l-blue-700"
                        : vehicle.tier === "IV"
                          ? "border-l-purple-500"
                          : "border-l-gray-500"
                  }`}
                  title={`Tier ${vehicle.tier}`}
                />

                {isMarketVehicle(vehicle.name) && (
                  <div
                    className="absolute top-0 left-3 w-0 h-0 border-l-[16px] border-b-[16px] border-b-transparent border-l-yellow-500 z-10"
                    title="Market Vehicle"
                  />
                )}

                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-300">{vehicle.name}</h3>
                    <p className="text-sm text-slate-400">
                      {vehicle.type} • {vehicle.faction} • Tier {vehicle.tier}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleCompare(vehicle.id.toString())}
                      disabled={compare.length >= 2 && !compare.includes(vehicle.id.toString())}
                      className={`px-3 py-1 text-xs rounded transition-colors ${
                        compare.includes(vehicle.id.toString())
                          ? "bg-cyan-600 text-white"
                          : compare.length >= 2
                            ? "bg-slate-600 text-slate-400 cursor-not-allowed"
                            : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                      }`}
                    >
                      {compare.includes(vehicle.id.toString()) ? "✓" : "Compare"}
                    </button>
                  </div>
                </div>

                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{vehicle.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-slate-800/50 rounded-lg p-3">
                    <div className="text-xs text-slate-400 mb-1">Health</div>
                    <div className="text-lg font-bold text-cyan-300">{vehicle.stats.health.toLocaleString()}</div>
                  </div>

                  {vehicle.type === "Fighter Jet" || vehicle.type === "Bomber" ? (
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

                <div className="mb-4">
                  <button
                    onClick={() => toggleExpand(vehicle.id.toString())}
                    className="flex items-center justify-between w-full text-left text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span className="font-medium">Weapons & Equipment</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedVehicle === vehicle.id.toString() ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedVehicle === vehicle.id.toString() && (
                    <div className="mt-3 space-y-2">
                      {vehicle.weapons.map((weapon, idx) => (
                        <div key={idx} className="bg-slate-800/30 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-slate-200">{weapon.name}</span>
                            <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">{weapon.type}</span>
                          </div>
                          <div className="flex gap-4 text-sm">
                            <span className="text-cyan-300 font-bold text-lg">DMG: {weapon.damage}</span>
                            <span className="text-cyan-300 font-bold text-lg">PEN: {weapon.penetration}</span>
                            {weapon.rateOfFire && <span className="text-slate-300">ROF: {weapon.rateOfFire}</span>}
                            {weapon.lockTime && <span className="text-slate-300">Lock: {weapon.lockTime}s</span>}
                          </div>
                        </div>
                      ))}

                      {vehicle.modules && (
                        <div className="mt-3">
                          <h4 className="text-sm font-medium text-cyan-400 mb-2">Upgrade Modules</h4>
                          <div className="space-y-2">
                            {Object.entries(vehicle.modules).map(([category, modules]) => (
                              <div key={category} className="bg-slate-800/30 rounded-lg p-3">
                                <div className="text-xs font-medium text-slate-300 mb-2 capitalize">{category}</div>
                                <div className="space-y-1">
                                  {Array.isArray(modules) &&
                                    modules.map((module, idx) => (
                                      <div key={idx} className="flex justify-between items-center text-xs">
                                        <span className="text-slate-400">{module.name}</span>
                                        <span className="text-cyan-300">{module.bonus}</span>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </main>

      <footer className="max-w-7xl mx-auto p-6 mt-12 border-t border-slate-800">
        <div className="mb-6 p-4 bg-slate-900/40 rounded-lg border border-slate-800">
          <h3 className="text-lg font-semibold text-cyan-400 mb-2">About</h3>
          <p className="text-slate-300">This web was developed by Naveed2227 :)</p>
        </div>
        <div className="text-center text-slate-500 text-sm">
          <p>MWT Vehicle Statistics Database - Statistics-only content</p>
          <p className="mt-1">Vehicle data, weapons, and specifications for reference purposes</p>
        </div>
      </footer>

      {/* AI Chat Box */}
      <div className="fixed bottom-6 right-6 z-50">
        {!chatOpen ? (
          <button
            onClick={() => setChatOpen(true)}
            className="bg-cyan-600 hover:bg-cyan-700 text-white p-4 rounded-full shadow-lg transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        ) : (
          <div className="bg-slate-900 border border-slate-700 rounded-lg shadow-xl w-80 h-96 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <h3 className="font-semibold text-cyan-400">Vehicle Assistant</h3>
              <button onClick={() => setChatOpen(false)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatMessages.length === 0 && (
                <div className="text-slate-400 text-sm">
                  Ask me about MWT vehicles! Try "Su-57M" or "compare F-22 vs J-35"
                </div>
              )}
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-lg text-sm ${
                    msg.role === "user" ? "bg-cyan-600 text-white ml-8" : "bg-slate-800 text-slate-200 mr-8"
                  }`}
                >
                  <div className="whitespace-pre-wrap">{msg.content}</div>
                </div>
              ))}
              {isLoading && (
                <div className="bg-slate-800 text-slate-200 mr-8 p-3 rounded-lg text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-700">
              <div className="flex gap-2">
                <input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleChatSubmit()}
                  placeholder="Ask about vehicles..."
                  className="flex-1 bg-slate-800 text-slate-200 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button
                  onClick={handleChatSubmit}
                  disabled={!chatInput.trim() || isLoading}
                  className="bg-cyan-600 hover:bg-cyan-700 disabled:opacity-50 text-white p-2 rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MwtVehicleStats
