"use client"

import { motion } from "framer-motion"
import { BotMessageSquareIcon, X, Send, Search, Bot } from "lucide-react"
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
    description: "Next-generation main battle tank with unmanned turret and advanced armor systems.",
    stats: { health: 38900, speed: 70, armor: "1200mm", agility: 65 },
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
    id: 3,
    name: "Leopard 2A4",
    type: "Tank",
    faction: "German",
    tier: "III",
    description: "Proven main battle tank with excellent firepower and mobility balance.",
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
    id: 4,
    name: "AH-64E Apache",
    type: "Helicopter",
    faction: "American",
    tier: "III",
    description: "Advanced attack helicopter with multi-role capabilities and proven combat record.",
    stats: { health: 22000, speed: 293, maxSpeed: 365, agility: 75 },
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
    id: 5,
    name: "J-35",
    type: "Fighter Jet",
    faction: "Chinese",
    tier: "IV",
    description: "Fifth-generation stealth fighter with advanced sensor fusion and networking capabilities.",
    stats: { health: 22600, speed: 762, afterburnerSpeed: 2199, agility: 82 },
    weapons: [
      { name: "PL-15", type: "Long-Range AAM", damage: 9500, penetration: 480 },
      { name: "PL-10", type: "Short-Range AAM", damage: 7800, penetration: 420 },
      { name: "YJ-91", type: "Anti-Radiation Missile", damage: 12500, penetration: 650 },
      { name: "Type 23-III 23mm", type: "Autocannon", damage: 350, penetration: 60, rateOfFire: "1800 rpm" },
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
    name: "F-22 Raptor",
    type: "Fighter Jet",
    faction: "American",
    tier: "IV",
    description: "Air superiority fighter with unmatched stealth and supercruise capabilities.",
    stats: { health: 25100, speed: 770, afterburnerSpeed: 2170, agility: 88 },
    weapons: [
      { name: "AIM-120D AMRAAM", type: "Medium-Range AAM", damage: 9200, penetration: 460 },
      { name: "AIM-9X Sidewinder", type: "Short-Range AAM", damage: 7500, penetration: 400 },
      { name: "GBU-39 SDB", type: "Guided Bomb", damage: 11800, penetration: 580 },
      { name: "M61A2 20mm", type: "Autocannon", damage: 320, penetration: 55, rateOfFire: "6000 rpm" },
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
    id: 7,
    name: "J-20 Mighty Dragon",
    type: "Fighter Jet",
    faction: "Chinese",
    tier: "IV",
    description: "Long-range stealth fighter designed for air superiority and strike missions.",
    stats: { health: 21200, speed: 694, afterburnerSpeed: 1803, agility: 78 },
    weapons: [
      { name: "PL-15", type: "Long-Range AAM", damage: 9500, penetration: 480 },
      { name: "PL-10", type: "Short-Range AAM", damage: 7800, penetration: 420 },
      { name: "YJ-12", type: "Anti-Ship Missile", damage: 15200, penetration: 780 },
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
    id: 8,
    name: "TU-222",
    type: "Bomber",
    faction: "Russian",
    tier: "IV",
    description: "Next-generation supersonic strategic bomber with hypersonic missile capability.",
    stats: { health: 15500, speed: 186, afterburnerSpeed: 209, agility: 50 },
    weapons: [
      { name: "Kh-47M2 Kinzhal", type: "Hypersonic Missile", damage: 25000, penetration: 1500 },
      { name: "P-800 Onix", type: "Cruise Missile", damage: 18500, penetration: 950 },
      { name: "Kh-38MKE", type: "Air-to-Ground Missile", damage: 12800, penetration: 680 },
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
    id: 9,
    name: "Abrams X",
    type: "Tank",
    faction: "American",
    tier: "IV",
    description: "Next-generation prototype tank with unmanned turret and advanced systems.",
    stats: { health: 36800, speed: 72, armor: "1100mm", agility: 68 },
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
    id: 10,
    name: "Type 10",
    type: "Tank",
    faction: "Japanese",
    tier: "IV",
    description: "Modern main battle tank optimized for Japanese terrain with advanced fire control.",
    stats: { health: 31200, speed: 70, armor: "950mm", agility: 75 },
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
    id: 11,
    name: "Merkava Mk.4",
    type: "Tank",
    faction: "Israeli",
    tier: "IV",
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
    id: 12,
    name: "Ka-52M",
    type: "Helicopter",
    faction: "Russian",
    tier: "IV",
    description: "Advanced reconnaissance and attack helicopter with coaxial rotor design.",
    stats: { health: 26000, speed: 300, maxSpeed: 350, agility: 80 },
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
    id: 13,
    name: "M270 MLRS",
    type: "Tank",
    faction: "American",
    tier: "IV",
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
    id: 14,
    name: "Otomatic 76",
    type: "Tank",
    faction: "Italian",
    tier: "III",
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
    id: 15,
    name: "Type 16 MCV",
    type: "Tank",
    faction: "Japanese",
    tier: "IV",
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
    id: 16,
    name: "A-10A Thunderbolt",
    type: "Fighter Jet",
    faction: "American",
    tier: "III",
    description: "Close air support aircraft designed around the GAU-8 Avenger cannon.",
    stats: { health: 28500, speed: 560, afterburnerSpeed: 706, agility: 55 },
    weapons: [
      { name: "GAU-8/A Avenger", type: "Autocannon", damage: 850, penetration: 120, rateOfFire: "3900 rpm" },
      { name: "AGM-65 Maverick", type: "Air-to-Ground Missile", damage: 14500, penetration: 750 },
      { name: "Hydra 70 Rockets", type: "Rocket Pod", damage: 6800, penetration: 320 },
      { name: "GBU-12 Paveway", type: "Guided Bomb", damage: 18200, penetration: 900 },
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
    id: 17,
    name: "M60 Patton",
    type: "Tank",
    faction: "American",
    tier: "II",
    description: "Cold War era main battle tank with proven reliability and combat effectiveness.",
    stats: { health: 28500, speed: 48, armor: "650mm", agility: 58 },
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
    id: 18,
    name: "T-72A",
    type: "Tank",
    faction: "Russian",
    tier: "III",
    description: "Widely exported main battle tank with robust design and effective firepower.",
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
    id: 19,
    name: "F-4E Phantom",
    type: "Fighter Jet",
    faction: "American",
    tier: "II",
    description: "Legendary multi-role fighter with proven combat record and versatile weapon systems.",
    stats: { health: 19800, speed: 1472, afterburnerSpeed: 2370, agility: 68 },
    weapons: [
      { name: "AIM-7 Sparrow", type: "Medium-Range AAM", damage: 7200, penetration: 380 },
      { name: "AIM-9 Sidewinder", type: "Short-Range AAM", damage: 6500, penetration: 340 },
      { name: "AGM-65 Maverick", type: "Air-to-Ground Missile", damage: 12800, penetration: 680 },
      { name: "M61A1 20mm", type: "Autocannon", damage: 280, penetration: 48, rateOfFire: "6000 rpm" },
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
    id: 20,
    name: "F-16C Night Falcon",
    type: "Fighter Jet",
    faction: "American",
    tier: "III",
    description: "Multi-role fighter with advanced night vision and precision strike capabilities.",
    stats: { health: 18500, speed: 1320, afterburnerSpeed: 2124, agility: 92 },
    weapons: [
      { name: "AIM-120 AMRAAM", type: "Medium-Range AAM", damage: 8500, penetration: 420 },
      { name: "AIM-9X Sidewinder", type: "Short-Range AAM", damage: 7200, penetration: 380 },
      { name: "AGM-88 HARM", type: "Anti-Radiation Missile", damage: 11500, penetration: 580 },
      { name: "M61A1 20mm", type: "Autocannon", damage: 280, penetration: 48, rateOfFire: "6000 rpm" },
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
    id: 21,
    name: "MiG-41M",
    type: "Fighter Jet",
    faction: "Russian",
    tier: "IV",
    description: "Next-generation interceptor with hypersonic capabilities and advanced radar systems.",
    stats: { health: 23800, speed: 1800, afterburnerSpeed: 4320, agility: 75 },
    weapons: [
      { name: "R-37M", type: "Long-Range AAM", damage: 11500, penetration: 520 },
      { name: "R-77M", type: "Medium-Range AAM", damage: 9200, penetration: 460 },
      { name: "Kh-47M2 Kinzhal", type: "Hypersonic Missile", damage: 22000, penetration: 1400 },
      { name: "GSh-6-30 30mm", type: "Autocannon", damage: 420, penetration: 75, rateOfFire: "6000 rpm" },
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
    id: 22,
    name: "Mi-8TV",
    type: "Helicopter",
    faction: "Russian",
    tier: "II",
    description: "Versatile transport helicopter with light attack capabilities and proven reliability.",
    stats: { health: 16500, speed: 250, maxSpeed: 280, agility: 65 },
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
    id: 23,
    name: "IT-1 Dragon",
    type: "Tank",
    faction: "Russian",
    tier: "II",
    description: "Experimental missile tank destroyer with unique guided missile system.",
    stats: { health: 22800, speed: 50, armor: "520mm", agility: 55 },
    weapons: [
      { name: "3M7 Drakon ATGM", type: "Anti-Tank Missile", damage: 15200, penetration: 800 },
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
    id: 24,
    name: "M3 Bradley",
    type: "Tank",
    faction: "American",
    tier: "II",
    description: "Infantry fighting vehicle with TOW missile system and troop transport capability.",
    stats: { health: 19500, speed: 66, armor: "380mm", agility: 78 },
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
    id: 25,
    name: "ZSU-23-4M4 Shilka",
    type: "Tank",
    faction: "Russian",
    tier: "II",
    description: "Self-propelled anti-aircraft gun with quad 23mm cannons and radar guidance.",
    stats: { health: 18200, speed: 44, armor: "280mm", agility: 68 },
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
    id: 26,
    name: "Su-57 Felon",
    type: "Fighter Jet",
    faction: "Russian",
    tier: "IV",
    description: "Fifth-generation stealth fighter with advanced maneuverability and sensor fusion.",
    stats: { health: 23200, speed: 1100, afterburnerSpeed: 2100, agility: 90 },
    weapons: [
      { name: "R-74M2", type: "Short-Range AAM", damage: 7800, penetration: 410 },
      { name: "R-77-1", type: "Medium-Range AAM", damage: 8900, penetration: 450 },
      { name: "R-77M", type: "Long-Range AAM", damage: 9500, penetration: 480 },
      { name: "GSh-30-1 30mm", type: "Autocannon", damage: 380, penetration: 65, rateOfFire: "1800 rpm" },
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
    id: 27,
    name: "BMD3",
    type: "Tank",
    faction: "Russian",
    tier: "III",
    description: "Light infantry fighting vehicle with amphibious capability and rapid deployment design.",
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
  },
  {
    id: 28,
    name: "BMPT Terminator 2",
    type: "Tank",
    faction: "Russian",
    tier: "IV",
    description: "Tank support fighting vehicle designed for urban combat and infantry support.",
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
    id: 29,
    name: "SR-5 GMLRS",
    type: "Tank",
    faction: "Chinese",
    tier: "IV",
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
    id: 30,
    name: "2S19 Msta-S",
    type: "Tank",
    faction: "Russian",
    tier: "IV",
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
    id: 31,
    name: "Pantsir S-1",
    type: "Tank",
    faction: "Russian",
    tier: "IV",
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
    id: 32,
    name: "M1128 Stryker",
    type: "Tank",
    faction: "American",
    tier: "IV",
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
    id: 33,
    name: "AH-84",
    type: "Helicopter",
    faction: "American",
    tier: "IV",
    description: "Next-generation attack helicopter with stealth features and advanced weapons.",
    stats: { health: 18000, speed: 320, maxSpeed: 380, agility: 85 },
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
    id: 34,
    name: "Mi-28NM",
    type: "Helicopter",
    faction: "Russian",
    tier: "IV",
    description: "Night hunter attack helicopter with all-weather combat capability.",
    stats: { health: 28000, speed: 300, maxSpeed: 324, agility: 78 },
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
    id: 35,
    name: "WZ-10",
    type: "Helicopter",
    faction: "Chinese",
    tier: "IV",
    description: "Dedicated attack helicopter with tandem-seat configuration and advanced sensors.",
    stats: { health: 20000, speed: 290, maxSpeed: 316, agility: 80 },
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
    id: 36,
    name: "Z-19E",
    type: "Helicopter",
    faction: "Chinese",
    tier: "IV",
    description: "Light attack and reconnaissance helicopter with stealth characteristics.",
    stats: { health: 19000, speed: 280, maxSpeed: 305, agility: 88 },
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
    id: 37,
    name: "M1 Abrams Block 3",
    type: "Tank",
    faction: "American",
    tier: "IV",
    description: "An Experimental prototype tank intended as a successor to the Abrams MBT family",
    stats: { health: 37500, speed: 67, armor: "1150mm", agility: 66 },
    weapons: [
      { name: "M256A1 120mm", type: "Main Gun", damage: 15500, penetration: 830 },
      { name: "M830A1 HEAT", type: "HEAT Round", damage: 17200, penetration: 1050 },
      { name: "M2HB 12.7mm", type: "Machine Gun", damage: 220, penetration: 35, rateOfFire: "550 rpm" },
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
    id: 38,
    name: "Leopard 2A7V",
    type: "Tank",
    faction: "German",
    tier: "IV",
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
    id: 39,
    name: "KF-51 Panther",
    type: "Tank",
    faction: "German",
    tier: "IV",
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
    id: 40,
    name: "MiG-35 Fulcrum-F",
    type: "Fighter Jet",
    faction: "Russian",
    tier: "III",
    description: "Advanced multi-role fighter with AESA radar and enhanced maneuverability.",
    stats: { health: 19500, speed: 1400, afterburnerSpeed: 2100, agility: 95 },
    weapons: [
      { name: "R-77-1", type: "Medium-Range AAM", damage: 8800, penetration: 440 },
      { name: "R-73", type: "Short-Range AAM", damage: 7200, penetration: 380 },
      { name: "Kh-38MLE", type: "Air-to-Ground Missile", damage: 12500, penetration: 650 },
      { name: "GSh-30-1 30mm", type: "Autocannon", damage: 380, penetration: 65, rateOfFire: "1800 rpm" },
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
    id: 41,
    name: "Ka-58 Black Ghost",
    type: "Helicopter",
    faction: "Russian",
    tier: "IV",
    description: "Stealth attack helicopter with advanced composite materials and reduced signature.",
    stats: { health: 24500, speed: 310, maxSpeed: 360, agility: 92 },
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
    id: 42,
    name: "HSTV-L",
    type: "Tank",
    faction: "American",
    tier: "III",
    description: "High Survivability Test Vehicle with lightweight design and rapid-fire gun.",
    stats: { health: 22800, speed: 84, armor: "320mm", agility: 95 },
    weapons: [
      { name: "ARES 75mm", type: "Rapid-Fire Gun", damage: 8500, penetration: 420, rateOfFire: "60 rpm" },
      { name: "M240 7.62mm", type: "Coaxial MG", damage: 120, penetration: 15, rateOfFire: "750 rpm" },
    ],
    modules: {
      engine: [
        { name: "AVCR-1360 MK1", bonus: "+18 km/h speed" },
        { name: "AVCR-1360 MK2", bonus: "+36 km/h speed" },
        { name: "AVCR-1360 MK3", bonus: "+54 km/h speed" },
      ],
      armor: [
        { name: "Composite Armor MK1", bonus: "+60mm protection" },
        { name: "Composite Armor MK2", bonus: "+120mm protection" },
        { name: "Composite Armor MK3", bonus: "+180mm protection" },
      ],
      fireControl: [
        { name: "Digital FCS MK1", bonus: "+25% accuracy" },
        { name: "Digital FCS MK2", bonus: "+42% accuracy" },
        { name: "Digital FCS MK3", bonus: "+60% accuracy" },
      ],
    },
  },
  {
    id: 43,
    name: "TOS-1A",
    type: "Tank",
    faction: "Russian",
    tier: "IV",
    description: "Heavy flamethrower system designed for bunker-busting and area denial.",
    stats: { health: 35800, speed: 60, armor: "780mm", agility: 48 },
    weapons: [
      { name: "220mm Thermobaric Rockets", type: "Rocket System", damage: 32000, penetration: 1100 },
      { name: "PKT 7.62mm", type: "Machine Gun", damage: 95, penetration: 12, rateOfFire: "800 rpm" },
    ],
    modules: {
      engine: [
        { name: "V-84MS MK1", bonus: "+8 km/h speed" },
        { name: "V-84MS MK2", bonus: "+16 km/h speed" },
        { name: "V-84MS MK3", bonus: "+24 km/h speed" },
      ],
      armor: [
        { name: "T-72 Chassis Armor MK1", bonus: "+140mm protection" },
        { name: "T-72 Chassis Armor MK2", bonus: "+280mm protection" },
        { name: "T-72 Chassis Armor MK3", bonus: "+420mm protection" },
      ],
      fireControl: [
        { name: "Rocket Guidance MK1", bonus: "+15% accuracy" },
        { name: "Rocket Guidance MK2", bonus: "+28% accuracy" },
        { name: "Rocket Guidance MK3", bonus: "+40% accuracy" },
      ],
    },
  },
  {
    id: 44,
    name: "T-20 Monolit",
    type: "Tank",
    faction: "Russian",
    tier: "IV",
    description: "Advanced tank destroyer with stealth capabilities and powerful anti-tank systems.",
    stats: { health: 29500, speed: 75, armor: "680mm", agility: 78 },
    weapons: [
      { name: "2A75 125mm", type: "Anti-Tank Gun", damage: 16800, penetration: 920 },
      { name: "9M133 Kornet", type: "ATGM", damage: 19500, penetration: 1300 },
      { name: "NSVT 12.7mm", type: "Machine Gun", damage: 200, penetration: 32, rateOfFire: "700 rpm" },
    ],
    modules: {
      engine: [
        { name: "Diesel Engine MK1", bonus: "+12 km/h speed" },
        { name: "Diesel Engine MK2", bonus: "+24 km/h speed" },
        { name: "Diesel Engine MK3", bonus: "+36 km/h speed" },
      ],
      armor: [
        { name: "Stealth Armor MK1", bonus: "+120mm protection" },
        { name: "Stealth Armor MK2", bonus: "+240mm protection" },
        { name: "Stealth Armor MK3", bonus: "+360mm protection" },
      ],
      fireControl: [
        { name: "Advanced FCS MK1", bonus: "+20% accuracy" },
        { name: "Advanced FCS MK2", bonus: "+35% accuracy" },
        { name: "Advanced FCS MK3", bonus: "+50% accuracy" },
      ],
    },
  },
  {
    id: 45,
    name: "T-14 (152)",
    type: "Tank",
    faction: "Russian",
    tier: "IV",
    description: "Armata variant with massive 152mm gun for maximum firepower.",
    stats: { health: 40200, speed: 68, armor: "1250mm", agility: 62 },
    weapons: [
      { name: "2A83 152mm", type: "Main Gun", damage: 22500, penetration: 1200 },
      { name: "Kornet ATGM", type: "Anti-Tank Missile", damage: 20800, penetration: 1350 },
      { name: "12.7mm Kord", type: "Machine Gun", damage: 180, penetration: 25, rateOfFire: "700 rpm" },
    ],
    modules: {
      engine: [
        { name: "ChTZ 12N360 MK1", bonus: "+10 km/h speed" },
        { name: "ChTZ 12N360 MK2", bonus: "+20 km/h speed" },
        { name: "ChTZ 12N360 MK3", bonus: "+30 km/h speed" },
      ],
      armor: [
        { name: "Malachit ERA MK1", bonus: "+250mm protection" },
        { name: "Malachit ERA MK2", bonus: "+500mm protection" },
        { name: "Malachit ERA MK3", bonus: "+750mm protection" },
      ],
      fireControl: [
        { name: "Kalina FCS MK1", bonus: "+18% accuracy" },
        { name: "Kalina FCS MK2", bonus: "+32% accuracy" },
        { name: "Kalina FCS MK3", bonus: "+46% accuracy" },
      ],
    },
  },
  {
    id: 46,
    name: "M110A2",
    type: "Tank",
    faction: "Japanese",
    tier: "III",
    description: "Self-propelled howitzer with long-range artillery capability and proven reliability.",
    stats: { health: 26800, speed: 56, armor: "380mm", agility: 45 },
    weapons: [
      { name: "M201A1 203mm", type: "Howitzer", damage: 26500, penetration: 880 },
      { name: "M2HB 12.7mm", type: "Machine Gun", damage: 220, penetration: 35, rateOfFire: "550 rpm" },
    ],
    modules: {
      engine: [
        { name: "Detroit Diesel 8V71T MK1", bonus: "+8 km/h speed" },
        { name: "Detroit Diesel 8V71T MK2", bonus: "+16 km/h speed" },
        { name: "Detroit Diesel 8V71T MK3", bonus: "+24 km/h speed" },
      ],
      armor: [
        { name: "Steel Armor MK1", bonus: "+70mm protection" },
        { name: "Steel Armor MK2", bonus: "+140mm protection" },
        { name: "Steel Armor MK3", bonus: "+210mm protection" },
      ],
      fireControl: [
        { name: "Artillery Computer MK1", bonus: "+18% accuracy" },
        { name: "Artillery Computer MK2", bonus: "+32% accuracy" },
        { name: "Artillery Computer MK3", bonus: "+46% accuracy" },
      ],
    },
  },
  {
    id: 47,
    name: "ZBL-08",
    type: "Tank",
    faction: "Chinese",
    tier: "III",
    description: "Wheeled infantry fighting vehicle with amphibious capability and modern systems.",
    stats: { health: 21500, speed: 100, armor: "420mm", agility: 85 },
    weapons: [
      { name: "ZPT-99 30mm", type: "Autocannon", damage: 420, penetration: 75, rateOfFire: "330 rpm" },
      { name: "HJ-73C ATGM", type: "Anti-Tank Missile", damage: 14200, penetration: 750 },
      { name: "QJT-88 5.8mm", type: "Coaxial MG", damage: 85, penetration: 8, rateOfFire: "650 rpm" },
    ],
    modules: {
      engine: [
        { name: "Deutz BF6M1015C MK1", bonus: "+15 km/h speed" },
        { name: "Deutz BF6M1015C MK2", bonus: "+30 km/h speed" },
        { name: "Deutz BF6M1015C MK3", bonus: "+45 km/h speed" },
      ],
      armor: [
        { name: "Composite Armor MK1", bonus: "+80mm protection" },
        { name: "Composite Armor MK2", bonus: "+160mm protection" },
        { name: "Composite Armor MK3", bonus: "+240mm protection" },
      ],
      fireControl: [
        { name: "Digital FCS MK1", bonus: "+16% accuracy" },
        { name: "Digital FCS MK2", bonus: "+28% accuracy" },
        { name: "Digital FCS MK3", bonus: "+40% accuracy" },
      ],
    },
  },
  {
    id: 48,
    name: "ADATS",
    type: "Tank",
    faction: "American",
    tier: "IV",
    description: "Air Defense Anti-Tank System with dual-purpose missile capability.",
    stats: { health: 24800, speed: 67, armor: "350mm", agility: 72 },
    weapons: [
      { name: "MIM-146 ADATS", type: "SAM/ATGM", damage: 15500, penetration: 900 },
      { name: "M240 7.62mm", type: "Machine Gun", damage: 120, penetration: 15, rateOfFire: "750 rpm" },
    ],
    modules: {
      engine: [
        { name: "Detroit Diesel 8V92TA MK1", bonus: "+10 km/h speed" },
        { name: "Detroit Diesel 8V92TA MK2", bonus: "+20 km/h speed" },
        { name: "Detroit Diesel 8V92TA MK3", bonus: "+30 km/h speed" },
      ],
      armor: [
        { name: "Aluminum Armor MK1", bonus: "+65mm protection" },
        { name: "Aluminum Armor MK2", bonus: "+130mm protection" },
        { name: "Aluminum Armor MK3", bonus: "+195mm protection" },
      ],
      fireControl: [
        { name: "Dual-Mode Radar MK1", bonus: "+25% accuracy" },
        { name: "Dual-Mode Radar MK2", bonus: "+42% accuracy" },
        { name: "Dual-Mode Radar MK3", bonus: "+60% accuracy" },
      ],
    },
  },
]

const getFlagImage = (faction: string): string => {
  const flags: { [key: string]: string } = {
    Russian: "/russia-flag.png",
    American: "/usa-flag.png",
    Chinese: "/china-flag.png",
    German: "/germany-flag.jpeg",
    British: "/uk-flag.png",
    European: "/eu-flag.png",
    Japanese: "/japan-flag.webp",
    Turkish: "/turkey-flag.png",
    Canadian: "/canada-flag.png",
    Israeli: "/israel-flag.webp",
    French: "/france-flag.webp",
    Italian: "/italy-flag.png",
    "South Korean": "/flags/kr.png",
    Ukrainian: "/ukraine-flag.png",
    Swedish: "/sweden-flag.png",
  }
  return flags[faction] || "/default-flag.png"
}

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

const MwtVehicleStats = () => {
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
      "Leopard 2A4",
      "KF-51 Panther",
      "HSTV-L",
      "Ka-58 Black Ghost",
      "T-14 (152)",
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

  const getVehicleDetailedInfo = (vehicle: any) => {
    const weaponsList = vehicle.weapons
      .map((weapon: any) => `${weapon.name}: ${weapon.damage} DMG, ${weapon.penetration} PEN`)
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

${isMarketVehicle(vehicle.name) ? "💰 PREMIUM VEHICLE - Available in Market" : "🆓 Standard Vehicle"}`
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
          const helicopters = VEHICLES.filter((v) => v.type === "Helicopter")
          return helicopters.reduce((prev, current) =>
            (prev.stats.speed || 0) > (current.stats.speed || 0) ? prev : current,
          )
        },
        strongestHelicopter: () => {
          const helicopters = VEHICLES.filter((v) => v.type === "Helicopter")
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
              `⚔️ TACTICAL COMBAT ANALYSIS: ${vehicle1.name} vs ${vehicle2.name}\n\n` +
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
        return `🤖 MWT TACTICAL AI ASSISTANT\n\nI'm an advanced military vehicle analysis system. I can provide:\n\n🔍 VEHICLE ANALYSIS:\n• "Su-57M" - Complete specifications\n• "T-14 vs Abrams X" - Tactical comparisons\n\n🏆 PERFORMANCE QUERIES:\n• "Fastest tank" - Speed analysis\n• "Strongest jet" - Durability rankings\n• "Most armored vehicle" - Protection analysis\n\n🌍 NATION ANALYSIS:\n• "Best Russian vehicle" - National superiority\n• "American vehicles" - Fleet listings\n\n📊 DATA INSIGHTS:\n• "Tier IV vehicles" - Tier breakdowns\n• "Market vehicles" - Premium platforms\n\nWhat tactical intelligence do you need?`
      }

      // Default intelligent response
      return `🤖 MWT TACTICAL AI - Advanced Military Analysis System\n\nI didn't recognize that specific query, but I can analyze our database of ${VEHICLES.length} combat vehicles.\n\n💡 TRY ASKING:\n• "What's the fastest tank?" - Performance analysis\n• "Su-57M vs F-22" - Combat comparisons\n• "Best Chinese vehicle" - National rankings\n• "Tier IV vehicles" - Category listings\n\nI'm designed to think analytically about military vehicle performance, tactics, and specifications. What would you like to analyze?`
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
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                MWT Assistant (Demo)
              </h1>
              <p className="text-slate-400 mt-1">Modern Warfare Tanks Assistant</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="pb-6">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search vehicles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500"
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
                    className="px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500"
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
                    className="px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500"
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

            {(() => {
              const vehicle1 = VEHICLES.find((v) => v.id.toString() === compare[0])
              const vehicle2 = VEHICLES.find((v) => v.id.toString() === compare[1])
              if (vehicle1 && vehicle2) {
                return (
                  <div className="mt-6 bg-slate-800/30 rounded-lg p-4 border border-cyan-500/20">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                      🤖 AI Tactical Analysis
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
          <p className="text-slate-400">
            Showing {indexOfFirstVehicle + 1}-{Math.min(indexOfLastVehicle, filteredVehicles.length)} of{" "}
            {filteredVehicles.length} vehicles
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedVehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative bg-slate-900/60 rounded-xl p-6 border border-slate-800 hover:border-cyan-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              {/* Tier indicator bookmark */}
              <div
                className={`absolute top-0 left-0 border-b-transparent w-1.5 h-1.5 border-l-[30px] border-r-0 border-b-[30px] ${getTierColor(vehicle.tier)}`}
                title={`Tier ${vehicle.tier}`}
              />

              {/* Market vehicle indicator */}
              {isMarketVehicle(vehicle.name) && (
                <div
                  className="absolute top-0 left-3 w-0 h-0 border-b-transparent border-l-yellow-500 z-10 px-0 border-l-[20px] border-b-[20px] mx-[-12px]"
                  title="Market Vehicle"
                />
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
        <div className="mt-8 flex justify-center">
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(filteredVehicles.length / vehiclesPerPage) }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  className={`px-3 py-2 rounded transition-colors ${
                    currentPage === number ? "bg-cyan-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  {number}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Chat Interface */}
        {chatOpen && (
          <div className="fixed bottom-4 right-4 w-96 h-96 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50">
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
            className="fixed bottom-6 right-6 p-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg transition-colors z-40 px-10"
          >
            <BotMessageSquareIcon className="w-[35px] h-[50px] px-0 mx-1.5" /> Ask Ai
          </button>
        )}

        <footer className="mt-16 pt-8 border-t border-slate-800">
          <div className="text-center space-x-8">
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

        {showAbout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-slate-800 p-6 rounded-lg max-w-md px-6 h-full py-60 mx-0.5 my-0 w-[400px]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-cyan-400">About</h3>
                <button onClick={() => setShowAbout(false)} className="text-slate-400 hover:text-white">
                  ✕
                </button>
              </div>
              <p className="text-slate-300">This MWT Vehicle Statistics website was developed by Naveed2227 :)</p>
              <p className="text-slate-400 text-sm mt-4">
                A comprehensive database of military vehicles from MWT Tank Battles featuring detailed specifications,
                weapons, and upgrade modules.
              </p>
            </div>
          </div>
        )}

        {showCredits && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-slate-900 p-6 rounded-lg max-w-4xl mx-4 max-h-[80vh] overflow-y-auto h-full px-6 w-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-cyan-400">Credits</h3>
                <button onClick={() => setShowCredits(false)} className="text-slate-400 hover:text-white">
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-white font-semibold">Naveed2227</h4>
                  <p className="text-slate-400 text-sm">Developer and creator</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Hoffman Derpin</h4>
                  <p className="text-slate-400 text-sm">Supporter</p>
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
                  <p className="text-slate-400 text-sm">Supporter</p>
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
              </div>
            </div>
          </div>
        )}

        {/* Vehicle Info Modal */}
        {vehicleInfoOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-900 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <h3 className="text-xl font-bold text-cyan-300">AI Vehicle Analysis</h3>
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
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-400">Damage: </span>
                        <span className="text-cyan-300 font-bold text-lg">{weapon.damage}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Penetration: </span>
                        <span className="text-cyan-300 font-bold text-lg">{weapon.penetration}</span>
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

export default MwtVehicleStats
