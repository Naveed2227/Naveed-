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
    image: "/images/su57m.png",
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
    type: "Main Battle Tank",
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
    type: "Main Battle Tank",
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
    name: "AV-8B Harrier II",
    type: "Fighter Jet",
    faction: "American",
    tier: "II",
    description:
      "Vertical/Short Takeoff and Landing (V/STOL) attack aircraft with excellent ground support capabilities.",
    stats: { health: 18500, speed: 662, afterburnerSpeed: 1085, agility: 78 },
    weapons: [
      { name: "GAU-12 25mm", type: "Autocannon", damage: 320, penetration: 45, rateOfFire: "4200 rpm" },
      { name: "AGM-65 Maverick", type: "Air-to-Ground Missile", damage: 8500, penetration: 420 },
      { name: "AIM-9 Sidewinder", type: "Short-Range AAM", damage: 6800, penetration: 380 },
      { name: "Mk 82 Bomb", type: "Unguided Bomb", damage: 9200, penetration: 450 },
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
    id: 5,
    name: "Alpha Jet",
    type: "Fighter Jet",
    faction: "German",
    tier: "II",
    description: "Light attack aircraft and advanced trainer with excellent maneuverability.",
    stats: { health: 14200, speed: 927, afterburnerSpeed: 1000, agility: 85 },
    weapons: [
      { name: "DEFA 553 30mm", type: "Autocannon", damage: 380, penetration: 55, rateOfFire: "1300 rpm" },
      { name: "AS.30L", type: "Laser-Guided Missile", damage: 7200, penetration: 350 },
      { name: "SNEB 68mm Rockets", type: "Rocket Pod", damage: 450, penetration: 85, rateOfFire: "Multiple" },
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
    id: 6,
    name: "F-14D Super Tomcat",
    type: "Fighter Jet",
    faction: "American",
    tier: "II",
    description: "Twin-engine, variable-sweep wing fighter designed for fleet defense and air superiority.",
    stats: { health: 22800, speed: 913, afterburnerSpeed: 2485, agility: 72 },
    weapons: [
      { name: "M61A1 20mm", type: "Autocannon", damage: 280, penetration: 35, rateOfFire: "6000 rpm" },
      { name: "AIM-54 Phoenix", type: "Long-Range AAM", damage: 12500, penetration: 650 },
      { name: "AIM-7 Sparrow", type: "Medium-Range AAM", damage: 8200, penetration: 420 },
      { name: "AIM-9 Sidewinder", type: "Short-Range AAM", damage: 6800, penetration: 380 },
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
    id: 7,
    name: "J-10 Chengdu",
    type: "Fighter Jet",
    faction: "Chinese",
    tier: "II",
    description: "Single-engine, multirole fighter with delta wing configuration and advanced avionics.",
    stats: { health: 19500, speed: 1200, afterburnerSpeed: 2120, agility: 82 },
    weapons: [
      { name: "Type 23-3 23mm", type: "Autocannon", damage: 290, penetration: 40, rateOfFire: "3400 rpm" },
      { name: "PL-12", type: "Medium-Range AAM", damage: 8500, penetration: 450 },
      { name: "PL-8", type: "Short-Range AAM", damage: 6200, penetration: 350 },
      { name: "YJ-91", type: "Anti-Radiation Missile", damage: 9800, penetration: 520 },
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
    id: 8,
    name: "MiG-31BM Foxhound",
    type: "Fighter Jet",
    faction: "Russian",
    tier: "II",
    description: "High-speed interceptor designed for long-range air defense missions.",
    stats: { health: 26500, speed: 1500, afterburnerSpeed: 3000, agility: 65 },
    weapons: [
      { name: "GSh-6-23 23mm", type: "Autocannon", damage: 320, penetration: 45, rateOfFire: "10000 rpm" },
      { name: "R-33", type: "Long-Range AAM", damage: 14500, penetration: 720 },
      { name: "R-37M", type: "Ultra Long-Range AAM", damage: 16800, penetration: 850 },
      { name: "R-40TD", type: "Medium-Range AAM", damage: 9200, penetration: 480 },
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
    id: 9,
    name: "Q-5A Nanchang",
    type: "Fighter Jet",
    faction: "Chinese",
    tier: "II",
    description: "Ground attack aircraft derived from the MiG-19, optimized for close air support.",
    stats: { health: 16800, speed: 1190, afterburnerSpeed: 1540, agility: 75 },
    weapons: [
      { name: "Type 23-2K 23mm", type: "Autocannon", damage: 310, penetration: 42, rateOfFire: "3000 rpm" },
      { name: "HJ-8", type: "Anti-Tank Missile", damage: 8800, penetration: 450 },
      { name: "Type 90-1 Rockets", type: "Rocket Pod", damage: 520, penetration: 95, rateOfFire: "Multiple" },
      { name: "250kg Bomb", type: "Unguided Bomb", damage: 11200, penetration: 580 },
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
    id: 10,
    name: "Su-24M",
    type: "Fighter Jet",
    faction: "Russian",
    tier: "II",
    description: "Variable-sweep wing tactical bomber designed for all-weather ground attack missions.",
    stats: { health: 24200, speed: 1315, afterburnerSpeed: 2317, agility: 68 },
    weapons: [
      { name: "GSh-6-23 23mm", type: "Autocannon", damage: 320, penetration: 45, rateOfFire: "9000 rpm" },
      { name: "Kh-25ML", type: "Laser-Guided Missile", damage: 9500, penetration: 480 },
      { name: "Kh-29L", type: "Air-to-Ground Missile", damage: 12800, penetration: 650 },
      { name: "FAB-500", type: "Unguided Bomb", damage: 15200, penetration: 780 },
      { name: "R-60M", type: "Short-Range AAM", damage: 5800, penetration: 320 },
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
    id: 11,
    name: "AH-64E Apache",
    type: "Helicopter",
    faction: "American",
    tier: "III",
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
    name: "Abrams X",
    type: "Main Battle Tank",
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
    id: 17,
    name: "Type 10",
    type: "Main Battle Tank",
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
    id: 18,
    name: "Merkava Mk.4",
    type: "Main Battle Tank",
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
    id: 19,
    name: "Ka-52M",
    type: "Helicopter",
    faction: "Russian",
    tier: "IV",
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
    id: 20,
    name: "M270 MLRS",
    type: "MLRS",
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
    id: 21,
    name: "Otomatic 76",
    type: "Anti-Air",
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
    id: 22,
    name: "Type 16 MCV",
    type: "Tank Destroyer",
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
  id: 23,
  name: "T-14 Armata (152)",
  type: "Main Battle Tank",
  faction: "Russian",
  tier: "IV",
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
    id: 24,
    name: "M60 Patton",
    type: "Main Battle Tank",
    faction: "American",
    tier: "II",
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
    id: 25,
    name: "T-72A",
    type: "Main Battle Tank",
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
    id: 26,
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
    id: 27,
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
    id: 28,
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
    id: 29,
    name: "Mi-8TV",
    type: "Helicopter",
    faction: "Russian",
    tier: "II",
    description: "Versatile transport helicopter with light attack capabilities and proven reliability.",
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
    id: 30,
    name: "IT-1 Dragon",
    type: "Missile Carrier",
    faction: "Russian",
    tier: "II",
    description: "Experimental missile tank destroyer with unique guided missile system.",
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
    id: 31,
    name: "M3 Bradley",
    type: "Multirole-IFV",
    faction: "American",
    tier: "II",
    description: "Infantry fighting vehicle with TOW missile system and troop transport capability.",
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
    id: 32,
    name: "ZSU-23-4M4 Shilka",
    type: "Anti-Air",
    faction: "Russian",
    tier: "II",
    description: "Self-propelled anti-aircraft gun with quad 23mm cannons and radar guidance.",
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
    id: 33,
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
    id: 34,
    name: "BMD3",
    type: "Light Tank",
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
    id: 35,
    name: "BMPT Terminator 2",
    type: "Tank Destroyer",
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
    id: 36,
    name: "SR-5 GMLRS",
    type: "MLRS",
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
    id: 37,
    name: "2S19 Msta-S",
    type: "SPA",
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
    id: 38,
    name: "Pantsir S-1",
    type: "Anti-Air",
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
    id: 39,
    name: "M1128 Stryker",
    type: "Tank Destroyer",
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
    id: 40,
    name: "AH-84",
    type: "Helicopter",
    faction: "American",
    tier: "IV",
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
    id: 41,
    name: "Mi-28NM",
    type: "Helicopter",
    faction: "Russian",
    tier: "IV",
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
    id: 42,
    name: "WZ-10",
    type: "Helicopter",
    faction: "Chinese",
    tier: "IV",
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
    id: 43,
    name: "Z-19E",
    type: "Helicopter",
    faction: "Chinese",
    tier: "IV",
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
    id: 44,
    name: "M1 Abrams Block 3",
    type: "Main Battle Tank",
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
    id: 45,
    name: "Leopard 2A7V",
    type: "Main Battle Tank",
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
    id: 46,
    name: "KF-51 Panther",
    type: "Main Battle Tank",
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
    id: 47,
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
    id: 48,
    name: "Ka-58 Black Ghost",
    type: "Helicopter",
    faction: "Russian",
    tier: "IV",
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
    id: 49,
    name: "T-25 Pamir",
    type: "Main Battle Tank",
    faction: "Russian",
    tier: "IV",
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
    id: 50,
    name: "T-90A",
    type: "Main Battle Tank",
    faction: "Russian",
    tier: "IV",
    description: "Modernized main battle tank with improved armor and advanced fire control.",
    stats: { health: 35800, speed: 65, armor: "1050mm", agility: 68 },
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
    id: 51,
    name: "T-95M",
    type: "Main Battle Tank",
    faction: "Russian",
    tier: "IV",
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
    id: 52,
    name: "T-104 Bastion",
    type: "Main Battle Tank",
    faction: "Russian",
    tier: "IV",
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
    id: 53,
    name: "VT-4A1",
    type: "Main Battle Tank",
    faction: "Chinese",
    tier: "IV",
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
    id: 54,
    name: "ZTZ99A",
    type: "Main Battle Tank",
    faction: "Chinese",
    tier: "IV",
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
    id: 55,
    name: "ZTZ99-III",
    type: "Main Battle Tank",
    faction: "Chinese",
    tier: "IV",
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
    id: 56,
    name: "Challenger 3",
    type: "Main Battle Tank",
    faction: "British",
    tier: "IV",
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
    id: 57,
    name: "EMBT 120",
    type: "Main Battle Tank",
    faction: "French",
    tier: "IV",
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
    id: 58,
    name: "FV4034 Challenger 2 TES",
    type: "Main Battle Tank",
    faction: "British",
    tier: "IV",
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
    id: 59,
    name: "Karrar",
    type: "Main Battle Tank",
    faction: "Iranian",
    tier: "IV",
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
    id: 60,
    name: "Leclerc S2 AZUR",
    type: "Main Battle Tank",
    faction: "French",
    tier: "IV",
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
    "id": 61,
    "name": "T-20 Monolit",
    "type": "Tank Destroyer",
    "faction": "Russian",
    "tier": "IV",
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
    "id": 62,
    "name": "KF31 Lynx",
    "type": "Multirole-IFV",
    "faction": "German",
    "tier": "IV",
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
    "id": 63,
    "name": "M10 Booker",
    "type": "Light Tank",
    "faction": "American",
    "tier": "IV",
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
    "id": 64,
    "name": "PL-01",
    "type": "Light Tank",
    "faction": "Polish",
    "tier": "IV",
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
  "id": 65,
  "name": "M-SHORAD",
  "type": "Anti-Air",
  "faction": "American",
  "tier": "IV",
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
  "id": 66,
  "name": "TOS-1A",
  "type": "MLRS",
  "faction": "Russian",
  "tier": "IV",
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
  "id": 67,
  "name": "PLZ-05",
  "type": "SPA",
  "faction": "Chinese",
  "tier": "IV",
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
  "id": 68,
  "name": "M109A6 Paladin",
  "type": "SPA",
  "faction": "American",
  "tier": "IV",
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
  "id": 69,
  "name": "FK 2000",
  "type": "Anti-Air",
  "faction": "Chinese",
  "tier": "IV",
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
  "id": 70,
  "name": "BM-57-2 Kochevnik",
  "type": "Tank Destroyer",
  "faction": "Russian",
  "tier": "IV",
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
  id: 71,
  name: "F/A-18F Super Hornet",
  type: "Fighter Jet",
  faction: "American",
  tier: "III",
  description: "Twin-engine carrier-based multirole fighter with excellent versatility for both air-to-air and air-to-ground combat.",
  stats: { health: 19800, speed: 770, afterburnerSpeed: 1985, agility: 46 },
  weapons: [
    { name: "M61A2 Vulcan 20mm", type: "Autocannon", damage: 320, penetration: 50, rateOfFire: "6000 rpm" },
    { name: "AIM-9X Sidewinder", type: "Short-Range AAM", damage: 7600, penetration: 380 },
    { name: "AIM-120D AMRAAM", type: "Long-Range AAM", damage: 9100, penetration: 460 },
    { name: "AGM-84 Harpoon", type: "Anti-Ship Missile", damage: 12500, penetration: 600 },
    { name: "GBU-31 JDAM", type: "Guided Bomb", damage: 13200, penetration: 650 }
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
  id: 72,
  name: "J-16",
  type: "Fighter Jet",
  faction: "Chinese",
  tier: "III",
  description: "Chinese twin-seat multirole fighter derived from Su-30, capable of carrying heavy weapons payload.",
  stats: { health: 21000, speed: 780, afterburnerSpeed: 2050, agility: 48 },
  weapons: [
    { name: "PL-10", type: "Short-Range AAM", damage: 7800, penetration: 380 },
    { name: "PL-15", type: "Long-Range AAM", damage: 9800, penetration: 470 },
    { name: "KD-88", type: "Air-to-Surface Missile", damage: 12200, penetration: 580 },
    { name: "LS-6 Glide Bomb", type: "Guided Bomb", damage: 11800, penetration: 500 },
    { name: "30mm Cannon", type: "Autocannon", damage: 350, penetration: 60, rateOfFire: "1500 rpm" }
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
  id: 73,
  name: "Su-37 Terminator",
  type: "Fighter Jet",
  faction: "Russian",
  tier: "III",
  description: "Experimental Russian fighter with thrust-vectoring for extreme maneuverability.",
  stats: { health: 20500, speed: 765, afterburnerSpeed: 2020, agility: 82 },
  weapons: [
    { name: "R-73", type: "Short-Range AAM", damage: 7200, penetration: 360 },
    { name: "R-77", type: "Medium-Range AAM", damage: 8700, penetration: 420 },
    { name: "Kh-29T", type: "Air-to-Ground Missile", damage: 11600, penetration: 540 },
    { name: "KAB-500Kr", type: "Guided Bomb", damage: 12000, penetration: 580 },
    { name: "30mm GSh-301", type: "Autocannon", damage: 380, penetration: 65, rateOfFire: "1500 rpm" }
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
  id: 74,
  name: "Su-25UB",
  type: "Fighter Jet",
  faction: "Russian",
  tier: "III",
  description: "Twin-seat variant of the Su-25, specialized for ground attack with heavy armor.",
  stats: { health: 24500, speed: 720, afterburnerSpeed: 1680, agility: 28 },
  weapons: [
    { name: "30mm GSh-30-2 Cannon", type: "Autocannon", damage: 400, penetration: 70, rateOfFire: "3000 rpm" },
    { name: "Kh-25ML", type: "Air-to-Ground Missile", damage: 9500, penetration: 480 },
    { name: "S-25 Rocket", type: "Rocket Pod", damage: 8800, penetration: 440 },
    { name: "FAB-500", type: "Unguided Bomb", damage: 10000, penetration: 500 }
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
  id: 75,
  name: "Su-39",
  type: "Fighter Jet",
  faction: "Russian",
  tier: "III",
  description: "Upgraded variant of Su-25 with improved avionics and guided weapons.",
  stats: { health: 25200, speed: 730, afterburnerSpeed: 1700, agility: 30 },
  weapons: [
    { name: "30mm GSh-30-2 Cannon", type: "Autocannon", damage: 420, penetration: 70, rateOfFire: "3000 rpm" },
    { name: "Kh-29T", type: "Air-to-Ground Missile", damage: 11600, penetration: 540 },
    { name: "Kh-31P", type: "Anti-Radiation Missile", damage: 12100, penetration: 600 },
    { name: "FAB-500", type: "Unguided Bomb", damage: 10000, penetration: 500 }
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
  id: 76,
  name: "J-15",
  type: "Fighter Jet",
  faction: "Chinese",
  tier: "III",
  description: "Chinese carrier-based fighter based on Su-33 design, versatile in both air and ground roles.",
  stats: { health: 20100, speed: 765, afterburnerSpeed: 2000, agility: 45 },
  weapons: [
    { name: "PL-8", type: "Short-Range AAM", damage: 7300, penetration: 370 },
    { name: "PL-12", type: "Medium-Range AAM", damage: 8900, penetration: 440 },
    { name: "YJ-83K", type: "Anti-Ship Missile", damage: 12000, penetration: 580 },
    { name: "LS-6 Glide Bomb", type: "Guided Bomb", damage: 11500, penetration: 520 }
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
  id: 77,
  name: "MiG-35",
  type: "Fighter Jet",
  faction: "Russian",
  tier: "III",
  description: "Advanced MiG fighter with modern avionics, thrust-vectoring, and strong multirole performance.",
  stats: { health: 20200, speed: 775, afterburnerSpeed: 2060, agility: 52 },
  weapons: [
    { name: "R-73", type: "Short-Range AAM", damage: 7200, penetration: 360 },
    { name: "R-77-1", type: "Medium-Range AAM", damage: 9100, penetration: 450 },
    { name: "Kh-31A", type: "Anti-Ship Missile", damage: 11800, penetration: 560 },
    { name: "Kh-29T", type: "Air-to-Ground Missile", damage: 11600, penetration: 540 },
    { name: "30mm GSh-30-1", type: "Autocannon", damage: 380, penetration: 65, rateOfFire: "1500 rpm" }
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
  id: 78,
  name: "J-10B",
  type: "Fighter Jet",
  faction: "Chinese",
  tier: "III",
  description: "Modernized version of the J-10 with updated avionics and thrust-vectoring engine.",
  stats: { health: 18500, speed: 765, afterburnerSpeed: 1960, agility: 56 },
  weapons: [
    { name: "PL-10", type: "Short-Range AAM", damage: 7800, penetration: 380 },
    { name: "PL-12", type: "Medium-Range AAM", damage: 8900, penetration: 440 },
    { name: "LS-6", type: "Glide Bomb", damage: 11500, penetration: 520 },
    { name: "23mm Cannon", type: "Autocannon", damage: 300, penetration: 45, rateOfFire: "1500 rpm" }
  ],
  modules: {
    engine: [
      { name: "AL-31FN MK1", bonus: "+150 km/h speed" },
      { name: "AL-31FN MK2", bonus: "+300 km/h speed" },
      { name: "AL-31FN MK3", bonus: "+450 km/h speed" }
    ],
    avionics: [
      { name: "KLJ-7A MK1", bonus: "+20% detection" },
      { name: "KLJ-7A MK2", bonus: "+35% detection" },
      { name: "KLJ-7A MK3", bonus: "+50% detection" }
    ],
  },
},
{
  id: 79,
  name: "F-15EX Eagle II",
  type: "Fighter Jet",
  faction: "American",
  tier: "III",
  description: "Latest advanced variant of the F-15 with modern avionics and expanded weapons payload.",
  stats: { health: 23000, speed: 800, afterburnerSpeed: 2100, agility: 58 },
  weapons: [
    { name: "AIM-9X Sidewinder", type: "Short-Range AAM", damage: 7600, penetration: 380 },
    { name: "AIM-120D AMRAAM", type: "Long-Range AAM", damage: 9100, penetration: 460 },
    { name: "AGM-158 JASSM", type: "Cruise Missile", damage: 14500, penetration: 700 },
    { name: "GBU-31 JDAM", type: "Guided Bomb", damage: 13200, penetration: 650 },
    { name: "M61A1 Vulcan 20mm", type: "Autocannon", damage: 320, penetration: 50, rateOfFire: "6000 rpm" }
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
  id: 80,
  name: "Mitsubishi F-2B",
  type: "Fighter Jet",
  faction: "Japanese",
  tier: "III",
  description: "Multirole fighter developed from the F-16, optimized for anti-ship and air-to-air roles.",
  stats: { health: 19200, speed: 750, afterburnerSpeed: 1900, agility: 80 },
  weapons: [
    { name: "AAM-4B", type: "Medium-Range AAM", damage: 8500, penetration: 460 },
    { name: "ASM-2", type: "Anti-Ship Missile", damage: 14000, penetration: 720 },
    { name: "Mk82 Bomb", type: "Unguided Bomb", damage: 5000, penetration: 250 },
    { name: "20mm JM61A1 Vulcan", type: "Autocannon", damage: 320, penetration: 60, rateOfFire: "6000 rpm" }
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
    id: 81,
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
  id: 82,
  name: "YF-23",
  type: "Fighter Jet",
  faction: "American",
  tier: "IV",
  description: "Experimental stealth fighter designed for air superiority, rival to the F-22.",
  stats: { health: 23800, speed: 770, afterburnerSpeed: 2200, agility: 84 },
  weapons: [
    { name: "AIM-120D AMRAAM", type: "Medium-Range AAM", damage: 9000, penetration: 480 },
    { name: "AIM-9X Sidewinder", type: "Short-Range AAM", damage: 6200, penetration: 330 },
    { name: "GBU-32 JDAM", type: "Guided Bomb", damage: 12800, penetration: 620 },
    { name: "M61A2 Vulcan 20mm", type: "Autocannon", damage: 300, penetration: 55, rateOfFire: "6000 rpm" }
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
  id: 83,
  name: "F-35B Lightning II",
  type: "Fighter Jet",
  faction: "American",
  tier: "IV",
  description: "Fifth-generation stealth multirole fighter with STOVL capability.",
  stats: { health: 23000, speed: 740, afterburnerSpeed: 2000, agility: 82 },
  weapons: [
    { name: "AIM-120C AMRAAM", type: "Medium-Range AAM", damage: 8700, penetration: 470 },
    { name: "AIM-9X Sidewinder", type: "Short-Range AAM", damage: 6200, penetration: 330 },
    { name: "GBU-31 JDAM", type: "Guided Bomb", damage: 14500, penetration: 720 },
    { name: "GAU-22/A 25mm", type: "Autocannon", damage: 360, penetration: 70, rateOfFire: "3300 rpm" }
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
  id: 84,
  name: "J-50",
  type: "Fighter Jet",
  faction: "Chinese",
  tier: "IV",
  description: "Advanced stealth air superiority fighter concept with heavy armament.",
  stats: { health: 24000, speed: 760, afterburnerSpeed: 2150, agility: 83 },
  weapons: [
    { name: "PL-15", type: "Long-Range AAM", damage: 9500, penetration: 500 },
    { name: "PL-10", type: "Short-Range AAM", damage: 6400, penetration: 340 },
    { name: "LS-6 Guided Bomb", type: "Guided Bomb", damage: 13000, penetration: 680 },
    { name: "23mm Cannon", type: "Autocannon", damage: 340, penetration: 65, rateOfFire: "1800 rpm" }
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
  id: 85,
  name: "Su-75 Checkmate",
  type: "Fighter Jet",
  faction: "Russian",
  tier: "IV",
  description: "Light stealth fighter designed for export and versatile combat missions.",
  stats: { health: 22000, speed: 755, afterburnerSpeed: 2100, agility: 85 },
  weapons: [
    { name: "R-77M", type: "Medium-Range AAM", damage: 8800, penetration: 470 },
    { name: "R-74M2", type: "Short-Range AAM", damage: 6300, penetration: 340 },
    { name: "KAB-500S", type: "Guided Bomb", damage: 12500, penetration: 640 },
    { name: "30mm Cannon GSh-301", type: "Autocannon", damage: 380, penetration: 65, rateOfFire: "1500 rpm" }
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
  id: 86,
  name: "Z-9G Harbin",
  type: "Helicopter",
  faction: "Chinese",
  tier: "II",
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
  id: 87,
  name: "AH-64E Apache Guardian",
  type: "Helicopter",
  faction: "American",
  tier: "III",
  description: "Advanced multi-role gunship with heavy ATGMs, Hydra rockets, and 30mm cannon in MWT.",
  stats: { health: 22300, speed: 290, verticalSpeed: 65, agility: 65 },
  weapons: [
    { name: "AGM-114 Hellfire", type: "ATGM", damage: 3200, penetration: 200 },
    { name: "Hydra-70 Rocket Pods", type: "Rocket Pod", damage: 850, penetration: 50 },
    { name: "AIM-92 Stinger", type: "AAM", damage: 1800, penetration: 90 },
    { name: "M230 30mm Chain Gun", type: "Autocannon", damage: 180, penetration: 25 }
  ],
  modules: {
    engine: [
      { name: "T700-GE-701D MK1", bonus: "+10% speed" },
      { name: "T700-GE-701D MK2", bonus: "+20% speed" }
    ],
    avionics: [
      { name: "Targeting & Sensor Suite MK1", bonus: "+20% detection" },
      { name: "Targeting & Sensor Suite MK2", bonus: "+40% detection" }
    ],
    defense: [
      { name: "Chaff/Flare MK1", bonus: "+20% countermeasures" },
      { name: "Chaff/Flare MK2", bonus: "+35% countermeasures" }
    ]
  }
},
{
  id: 88,
  name: "MH-6 Little Bird",
  type: "Helicopter",
  faction: "American",
  tier: "II",
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
  id: 89,
  name: "Z-11WB Changhe",
  type: "Helicopter",
  faction: "Chinese",
  tier: "II",
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
  id: 90,
  name: "Super Lynx Mk88A",
  type: "Helicopter",
  faction: "British",
  tier: "III",
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
  id: 91,
  name: "Z-9WA Harbin",
  type: "Helicopter",
  faction: "Chinese",
  tier: "III",
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
  id: 92,
  name: "Z-20 Harbin",
  type: "Helicopter",
  faction: "Chinese",
  tier: "III",
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
  id: 93,
  name: "MH-60L DAP",
  type: "Helicopter",
  faction: "American",
  tier: "III",
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
  id: 94,
  name: "Mi-35P Hind-F",
  type: "Helicopter",
  faction: "Russian",
  tier: "III",
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
  id: 95,
  name: "AH-1Z Viper",
  type: "Helicopter",
  faction: "American",
  tier: "III",
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
  id: 96,
  name: "Ka-50 Black Shark",
  type: "Helicopter",
  faction: "Russian",
  tier: "III",
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
  id: 97,
  name: "Tiger HAD",
  type: "Helicopter",
  faction: "French",
  tier: "III",
  description: "French multi-role attack helicopter with rockets, HOT-3/Spike ATGMs, and 30mm cannon in MWT.",
  stats: { health: 21000, speed: 285, verticalSpeed: 60, agility: 58 },
  weapons: [
    { name: "HOT-3 ATGM", type: "ATGM", damage: 3000, penetration: 180 },
    { name: "Spike ER ATGM", type: "ATGM", damage: 3500, penetration: 220 },
    { name: "Rocket Pods (Hydra-70 variants)", type: "Rocket Pod", damage: 850, penetration: 55 },
    { name: "30mm GIAT Cannon", type: "Autocannon", damage: 180, penetration: 25 }
  ],
  modules: {
    engine: [
      { name: "MTR390-2C MK1", bonus: "+10% speed" },
      { name: "MTR390-2C MK2", bonus: "+20% speed" }
    ],
    avionics: [
      { name: "Tiger Sensor Suite MK1", bonus: "+20% detection" },
      { name: "Tiger Sensor Suite MK2", bonus: "+35% detection" }
    ],
    defense: [
      { name: "Chaff/Flare MK1", bonus: "+20% countermeasures" },
      { name: "Chaff/Flare MK2", bonus: "+35% countermeasures" }
    ]
  }
},
{
  id: 98,
  name: "EC665 Tiger UHT",
  type: "Helicopter",
  faction: "French",
  tier: "III",
  description: "French Tiger gunship optimized for air-to-ground combat with heavy missile load in MWT.",
  stats: { health: 21500, speed: 287, verticalSpeed: 61, agility: 60 },
  weapons: [
    { name: "HOT-3 ATGM", type: "ATGM", damage: 3000, penetration: 180 },
    { name: "Spike ER ATGM", type: "ATGM", damage: 3500, penetration: 220 },
    { name: "Rocket Pods (Hydra-70)", type: "Rocket Pod", damage: 850, penetration: 55 },
    { name: "30mm GIAT Cannon", type: "Autocannon", damage: 180, penetration: 25 }
  ],
  modules: {
    engine: [
      { name: "MTR390-2C MK1", bonus: "+10% speed" },
      { name: "MTR390-2C MK2", bonus: "+20% speed" }
    ],
    avionics: [
      { name: "Tiger Targeting Suite MK1", bonus: "+20% detection" },
      { name: "Tiger Targeting Suite MK2", bonus: "+35% detection" }
    ],
    defense: [
      { name: "Chaff/Flare MK1", bonus: "+20% countermeasures" },
      { name: "Chaff/Flare MK2", bonus: "+35% countermeasures" }
    ]
  }
}


]

const getAircraftRole = (vehicle: any) => {
  if (vehicle.type !== "Fighter Jet" && vehicle.type !== "Bomber" && vehicle.type !== " Helicopter") return null

  // Specific aircraft role assignments
  if (vehicle.name.includes("J-10")) return "multi-role"
  if (vehicle.name.includes("J-50")) return "stealth"
  if (vehicle.name.includes("J-35")) return "stealth"
  if (vehicle.name.includes("MiG-41M")) return "interceptor"
  if (vehicle.name.includes("F-16C Night Falcon")) return "multi-role"
  if (vehicle.name.includes("TU-222")) return "bomber"
  if (vehicle.name.includes("Ka-52M")) return "Helicopter"

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

  const hasHelicopterCharacteristics = weapons.some(
     (w: any) =>
      vehicle.name.includes("Ka-52M") ||
      vehicle.name.includes("AH-64E Apache"),
  )

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
    case "Helicopter":
      return "/Helicopter-Icon.png"
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
    Turkish: "/turkey-flag.png",
    Canadian: "/canada-flag.png",
    Israeli: "/israel-flag.webp",
    French: "/france-flag.webp",
    Italian: "/italy-flag.png",
    Ukrainian: "/ukraine-flag.png",
    Swedish: "/sweden-flag.png",
    Iranian: "/Iranian-flag.png",
    Polish: "/Poland-flag.webp",
  
  
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
      return "bg-purple-500"
    default:
      return "bg-gray-500"
  }
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
      "YF-23"
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
"ZTZ96",
"M109A6 Paladin",
"FK 2000",
"BM-57-2 Kochevnik",
"Su-39",
"J-10B",
"Mitsubishi F-2B",
"J-50",
"Z-11WB Changhe",
"Tiger HAD",
"EC665 Tiger UHT"
        

]
    return exclusiveVehicles.includes(vehicleName)
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
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 shadow-sm">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {"MWT Assistant (Unofficial)\n(Demo)"}
              </h1>
              <p className="text-slate-400 mt-1">    MWT Assistant</p>
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
              <div className="absolute top-0 left-0 w-0 h-0 z-10">
                <div
                  className={`w-0 h-0 border-r-[40px] border-t-[40px] border-r-transparent ${
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
                  <div className="h-0 border-b-transparent border-l-red-500 ml-0 w-[0-] w-[aut-] w-[auto-] w-[auto-10] w-[auto-10px] w-[au-10px] w-[-10px] border-r-0 text-transparent border-l-[25px] border-b-[25px]" />
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
                        className="w-6 h-6 opacity-80"
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

              <p className="text-slate-300 text-sm mb-4 leading-relaxed">{vehicle.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-4">
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
          <div className="fixed bottom-4 right-4 h-96 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 w-[344px]">
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <h3 className="font-semibold text-cyan-300">Vehicle Database Chat</h3>
              <button onClick={() => setChatOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-64 overflow-y-auto p-4 space-y-3 px-1.5 w-[340px] mx-0">
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
            className="fixed bottom-6 right-6 p-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg transition-colors z-40 px-4 my-0 mx-0 py-2 pb-[-2px] pb-[-7px] pb-[-5px] pt-[-5px] pt-0 pr-2.5 pl-2.5 pb-1.5"
          >
            <BotMessageSquareIcon className="px-0 mx-1.5 h-11 w-10" /> Ask Ai
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

        {/* About Modal */}
        {showAbout && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-cyan-400">About MWT Assistant</h2>
                  <button onClick={() => setShowAbout(false)} className="text-slate-400 hover:text-white">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p>
                    MWT Assistant is a comprehensive database and analysis tool for Modern Warfare Tanks (MWT) vehicles.
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

                  <div className="mt-6 pt-4 border-t border-slate-600">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Updates</h3>
                    <div className="space-y-3">
                     <div className="bg-slate-700/50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-cyan-300">Version Beta 1.3 </span>
                          <span className="text-sm text-slate-400">Latest</span>
                        </div>
                        <ul className="text-sm text-slate-300 space-y-1">
                          <li>• Added 34 new Vehicles including YF-23, T20 monolit and Su-37 Terminator</li>
                          <li>• New Tank Role drop doen box</li>
                          <li>• Tu-222 now has the Bomber Icon </li>
                        </ul>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-cyan-300">Version Beta 1.2 </span>
                          <span className="text-sm text-slate-400">Previous</span>
                        </div>
                        <ul className="text-sm text-slate-300 space-y-1">
                          <li>• Added 7 new aircraft including AV-8B Harrier II and F-14D Super Tomcat</li>
                          <li>• Fixed header positioning to stay in place during scroll</li>
                          <li>• Enhanced AI chat system with improved vehicle analysis</li>
                        </ul>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-cyan-300">Version Beta 1.1 </span>
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
                          <span className="font-medium text-cyan-300">Version Beta 1.0 </span>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div>
                  <h4 className="text-white font-semibold"> 枕頭 </h4>
                  <p className="text-slate-400 text-sm">Supporter</p>
                </div>
                 <div>
                  <h4 className="text-white font-semibold">VIPER2729</h4>
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
