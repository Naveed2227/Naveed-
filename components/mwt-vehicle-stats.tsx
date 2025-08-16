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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
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
    id: 25,
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
    id: 30,
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
    id: 31,
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
    id: 32,
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
    id: 35,
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
    id: 36,
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
    id: 37,
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
    id: 38,
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
    id: 39,
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
    id: 40,
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
    id: 41,
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
    id: 42,
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
    id: 43,
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
    id: 44,
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
    id: 45,
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
    id: 46,
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
    id: 49,
    name: "T-25 Pamir",
    type: "Tank",
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
    type: "Tank",
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
    type: "Tank",
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
    type: "Tank",
    faction: "Russian",
    tier: "IV",
    description: "Future main battle tank concept with AI-assisted systems and modular armor.",
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
    type: "Tank",
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
    type: "Tank",
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
    type: "Tank",
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
    type: "Tank",
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
    type: "Tank",
    faction: "French",
    tier: "IV",
    description: "European Main Battle Tank demonstrator with multinational technology integration.",
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
    type: "Tank",
    faction: "British",
    tier: "IV",
    description: "Theatre Entry Standard variant with enhanced urban warfare protection.",
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
    type: "Tank",
    faction: "Iranian",
    tier: "IV",
    description: "Indigenous main battle tank with locally developed systems and modern armor.",
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
    type: "Tank",
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
]

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
    "Leopard 2A7V",
    "Type 16 MCV",
  ]
  return marketVehicles.includes(vehicleName)
}

const newVehicles = [
  {
    id: 61,
    name: "KF31 Lynx",
    type: "Tank",
    faction: "German",
    tier: "IV",
    description: "Next-generation infantry fighting vehicle with modular mission equipment and advanced protection.",
    stats: { health: 28500, speed: 70, armor: "650mm", agility: 78 },
    weapons: [
      { name: "MK30-2/ABM 30mm", type: "Autocannon", damage: 480, penetration: 85, rateOfFire: "200 rpm" },
      { name: "Spike LR2", type: "ATGM", damage: 16800, penetration: 1120 },
      { name: "MG4 5.56mm", type: "Machine Gun", damage: 85, penetration: 8, rateOfFire: "885 rpm" },
    ],
    modules: {
      engine: [
        { name: "MTU 8V199 MK1", bonus: "+12 km/h speed" },
        { name: "MTU 8V199 MK2", bonus: "+24 km/h speed" },
        { name: "MTU 8V199 MK3", bonus: "+36 km/h speed" },
      ],
      armor: [
        { name: "AMAP Composite MK1", bonus: "+120mm protection" },
        { name: "AMAP Composite MK2", bonus: "+240mm protection" },
        { name: "AMAP Composite MK3", bonus: "+360mm protection" },
      ],
      fireControl: [
        { name: "LANCE Turret MK1", bonus: "+20% accuracy" },
        { name: "LANCE Turret MK2", bonus: "+35% accuracy" },
        { name: "LANCE Turret MK3", bonus: "+50% accuracy" },
      ],
    },
  },
  {
    id: 62,
    name: "PL-01",
    type: "Tank",
    faction: "European",
    tier: "IV",
    description: "Stealth light tank concept with advanced camouflage systems and rapid deployment capability.",
    stats: { health: 26800, speed: 70, armor: "580mm", agility: 85 },
    weapons: [
      { name: "RUAG CTG 120mm", type: "Main Gun", damage: 13500, penetration: 720 },
      { name: "Spike NLOS", type: "ATGM", damage: 17500, penetration: 1150 },
      { name: "MG3 7.62mm", type: "Machine Gun", damage: 130, penetration: 16, rateOfFire: "1200 rpm" },
    ],
    modules: {
      engine: [
        { name: "Hybrid Powerpack MK1", bonus: "+14 km/h speed" },
        { name: "Hybrid Powerpack MK2", bonus: "+28 km/h speed" },
        { name: "Hybrid Powerpack MK3", bonus: "+42 km/h speed" },
      ],
      armor: [
        { name: "Adaptive Camouflage MK1", bonus: "+110mm protection" },
        { name: "Adaptive Camouflage MK2", bonus: "+220mm protection" },
        { name: "Adaptive Camouflage MK3", bonus: "+330mm protection" },
      ],
      fireControl: [
        { name: "Digital FCS MK1", bonus: "+18% accuracy" },
        { name: "Digital FCS MK2", bonus: "+32% accuracy" },
        { name: "Digital FCS MK3", bonus: "+46% accuracy" },
      ],
    },
  },
  {
    id: 63,
    name: "MGM-166 LOSAT",
    type: "Tank",
    faction: "American",
    tier: "IV",
    description: "Line-of-Sight Anti-Tank missile system with kinetic energy projectiles.",
    stats: { health: 24500, speed: 67, armor: "420mm", agility: 72 },
    weapons: [
      { name: "MGM-166 LOSAT", type: "Kinetic Missile", damage: 22500, penetration: 1400 },
      { name: "M240 7.62mm", type: "Machine Gun", damage: 120, penetration: 15, rateOfFire: "750 rpm" },
    ],
    modules: {
      engine: [
        { name: "Caterpillar C7 MK1", bonus: "+10 km/h speed" },
        { name: "Caterpillar C7 MK2", bonus: "+20 km/h speed" },
        { name: "Caterpillar C7 MK3", bonus: "+30 km/h speed" },
      ],
      armor: [
        { name: "Aluminum Armor MK1", bonus: "+80mm protection" },
        { name: "Aluminum Armor MK2", bonus: "+160mm protection" },
        { name: "Aluminum Armor MK3", bonus: "+240mm protection" },
      ],
      fireControl: [
        { name: "LOSAT Guidance MK1", bonus: "+25% accuracy" },
        { name: "LOSAT Guidance MK2", bonus: "+42% accuracy" },
        { name: "LOSAT Guidance MK3", bonus: "+60% accuracy" },
      ],
    },
  },
  {
    id: 64,
    name: "M-SHORAD",
    type: "Tank",
    faction: "American",
    tier: "IV",
    description: "Maneuver-Short Range Air Defense system with multi-mission capability.",
    stats: { health: 26200, speed: 97, armor: "380mm", agility: 78 },
    weapons: [
      { name: "Stinger Missiles", type: "SAM", damage: 9500, penetration: 480 },
      { name: "Hellfire Longbow", type: "ATGM", damage: 16500, penetration: 1100 },
      { name: "M230LF 30mm", type: "Chain Gun", damage: 420, penetration: 75, rateOfFire: "200 rpm" },
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
        { name: "Sentinel Radar MK1", bonus: "+22% accuracy" },
        { name: "Sentinel Radar MK2", bonus: "+38% accuracy" },
        { name: "Sentinel Radar MK3", bonus: "+54% accuracy" },
      ],
    },
  },
  {
    id: 65,
    name: "TOS-1A",
    type: "Tank",
    faction: "Russian",
    tier: "IV",
    description: "Heavy flamethrower system designed for bunker destruction,Aromourd Vehicles and area denial.",
    stats: { health: 35800, speed: 60, armor: "750mm", agility: 55 },
    weapons: [
      { name: "220mm Thermobaric Rockets", type: "Heavy Rocket", damage: 32000, penetration: 1200 },
      { name: "PKT 7.62mm", type: "Machine Gun", damage: 95, penetration: 12, rateOfFire: "800 rpm" },
    ],
    modules: {
      engine: [
        { name: "V-84MS MK1", bonus: "+8 km/h speed" },
        { name: "V-84MS MK2", bonus: "+16 km/h speed" },
        { name: "V-84MS MK3", bonus: "+24 km/h speed" },
      ],
      armor: [
        { name: "Steel Armor MK1", bonus: "+140mm protection" },
        { name: "Steel Armor MK2", bonus: "+280mm protection" },
        { name: "Steel Armor MK3", bonus: "+420mm protection" },
      ],
      fireControl: [
        { name: "Fire Control MK1", bonus: "+15% accuracy" },
        { name: "Fire Control MK2", bonus: "+28% accuracy" },
        { name: "Fire Control MK3", bonus: "+40% accuracy" },
      ],
    },
  },
  {
    id: 66,
    name: "PLZ-05",
    type: "Tank",
    faction: "Chinese",
    tier: "IV",
    description: "Self-propelled howitzer with automated loading and digital fire control.",
    stats: { health: 32500, speed: 60, armor: "480mm", agility: 58 },
    weapons: [
      { name: "PLZ05 155mm", type: "Howitzer", damage: 26500, penetration: 900 },
      { name: "QJC88 12.7mm", type: "Machine Gun", damage: 220, penetration: 35, rateOfFire: "600 rpm" },
    ],
    modules: {
      engine: [
        { name: "Diesel Engine MK1", bonus: "+9 km/h speed" },
        { name: "Diesel Engine MK2", bonus: "+18 km/h speed" },
        { name: "Diesel Engine MK3", bonus: "+27 km/h speed" },
      ],
      armor: [
        { name: "Steel Armor MK1", bonus: "+90mm protection" },
        { name: "Steel Armor MK2", bonus: "+180mm protection" },
        { name: "Steel Armor MK3", bonus: "+270mm protection" },
      ],
      fireControl: [
        { name: "Digital FCS MK1", bonus: "+20% accuracy" },
        { name: "Digital FCS MK2", bonus: "+35% accuracy" },
        { name: "Digital FCS MK3", bonus: "+50% accuracy" },
      ],
    },
  },
  {
    id: 67,
    name: "M109A6 Paladin",
    type: "Tank",
    faction: "American",
    tier: "IV",
    description: "Self-propelled howitzer with automated fire control and shoot-and-scoot capability.",
    stats: { health: 30800, speed: 56, armor: "450mm", agility: 52 },
    weapons: [
      { name: "M284 155mm", type: "Howitzer", damage: 25500, penetration: 850 },
      { name: "M2HB 12.7mm", type: "Machine Gun", damage: 220, penetration: 35, rateOfFire: "550 rpm" },
    ],
    modules: {
      engine: [
        { name: "Detroit Diesel 8V71T MK1", bonus: "+8 km/h speed" },
        { name: "Detroit Diesel 8V71T MK2", bonus: "+16 km/h speed" },
        { name: "Detroit Diesel 8V71T MK3", bonus: "+24 km/h speed" },
      ],
      armor: [
        { name: "Aluminum Armor MK1", bonus: "+85mm protection" },
        { name: "Aluminum Armor MK2", bonus: "+170mm protection" },
        { name: "Aluminum Armor MK3", bonus: "+255mm protection" },
      ],
      fireControl: [
        { name: "AFATDS MK1", bonus: "+18% accuracy" },
        { name: "AFATDS MK2", bonus: "+32% accuracy" },
        { name: "AFATDS MK3", bonus: "+46% accuracy" },
      ],
    },
  },
  {
    id: 68,
    name: "FK 2000",
    type: "Tank",
    faction: "Chinese",
    tier: "IV",
    description: "Self-propelled artillery system with rapid deployment and high mobility.",
    stats: { health: 28200, speed: 70, armor: "420mm", agility: 65 },
    weapons: [
      { name: "L52 155mm", type: "Howitzer", damage: 24000, penetration: 800 },
      { name: "MG3 7.62mm", type: "Machine Gun", damage: 130, penetration: 16, rateOfFire: "1200 rpm" },
    ],
    modules: {
      engine: [
        { name: "MTU 8V183 MK1", bonus: "+10 km/h speed" },
        { name: "MTU 8V183 MK2", bonus: "+20 km/h speed" },
        { name: "MTU 8V183 MK3", bonus: "+30 km/h speed" },
      ],
      armor: [
        { name: "Steel Armor MK1", bonus: "+80mm protection" },
        { name: "Steel Armor MK2", bonus: "+160mm protection" },
        { name: "Steel Armor MK3", bonus: "+240mm protection" },
      ],
      fireControl: [
        { name: "Artillery FCS MK1", bonus: "+16% accuracy" },
        { name: "Artillery FCS MK2", bonus: "+28% accuracy" },
        { name: "Artillery FCS MK3", bonus: "+40% accuracy" },
      ],
    },
  },
  {
    id: 69,
    name: "BM-57-2 Kochevnik",
    type: "Tank",
    faction: "Russian",
    tier: "IV",
    description: "Tank destroyer with advanced anti-tank guided missiles and stealth features.",
    stats: { health: 29500, speed: 65, armor: "580mm", agility: 75 },
    weapons: [
      { name: "9M133 Kornet", type: "ATGM", damage: 19500, penetration: 1300 },
      { name: "2A42 30mm", type: "Autocannon", damage: 420, penetration: 75, rateOfFire: "550 rpm" },
      { name: "PKT 7.62mm", type: "Machine Gun", damage: 95, penetration: 12, rateOfFire: "800 rpm" },
    ],
    modules: {
      engine: [
        { name: "UTD-29 MK1", bonus: "+10 km/h speed" },
        { name: "UTD-29 MK2", bonus: "+20 km/h speed" },
        { name: "UTD-29 MK3", bonus: "+30 km/h speed" },
      ],
      armor: [
        { name: "Composite Armor MK1", bonus: "+110mm protection" },
        { name: "Composite Armor MK2", bonus: "+220mm protection" },
        { name: "Composite Armor MK3", bonus: "+330mm protection" },
      ],
      fireControl: [
        { name: "Missile Guidance MK1", bonus: "+20% accuracy" },
        { name: "Missile Guidance MK2", bonus: "+35% accuracy" },
        { name: "Missile Guidance MK3", bonus: "+50% accuracy" },
      ],
    },
  },
  {
    id: 70,
    name: "Object 640",
    type: "Tank",
    faction: "Russian",
    tier: "IV",
    description: "Experimental main battle tank with revolutionary design and advanced systems.",
    stats: { health: 41500, speed: 70, armor: "1350mm", agility: 72 },
    weapons: [
      { name: "2A83 152mm", type: "Main Gun", damage: 21500, penetration: 1150 },
      { name: "9M119M1 Invar-M", type: "ATGM", damage: 20500, penetration: 1380 },
      { name: "Kord 12.7mm", type: "Machine Gun", damage: 240, penetration: 38, rateOfFire: "650 rpm" },
    ],
    modules: {
      engine: [
        { name: "A-85-3A MK1", bonus: "+12 km/h speed" },
        { name: "A-85-3A MK2", bonus: "+24 km/h speed" },
        { name: "A-85-3A MK3", bonus: "+36 km/h speed" },
      ],
      armor: [
        { name: "Experimental ERA MK1", bonus: "+270mm protection" },
        { name: "Experimental ERA MK2", bonus: "+540mm protection" },
        { name: "Experimental ERA MK3", bonus: "+810mm protection" },
      ],
      fireControl: [
        { name: "Advanced AI FCS MK1", bonus: "+24% accuracy" },
        { name: "Advanced AI FCS MK2", bonus: "+42% accuracy" },
        { name: "Advanced AI FCS MK3", bonus: "+60% accuracy" },
      ],
    },
  },
  {
    id: 71,
    name: "HSTV-L",
    type: "Tank",
    faction: "American",
    tier: "III",
    description: "High Survivability Test Vehicle - Light with advanced armor and rapid-fire gun.",
    stats: { health: 22500, speed: 70, armor: "520mm", agility: 88 },
    weapons: [
      { name: "ARES 75mm", type: "Rapid-Fire Gun", damage: 3200, penetration: 180, rateOfFire: "60 rpm" },
      { name: "M240 7.62mm", type: "Machine Gun", damage: 120, penetration: 15, rateOfFire: "750 rpm" },
    ],
    modules: {
      engine: [
        { name: "AVCR-1360 MK1", bonus: "+12 km/h speed" },
        { name: "AVCR-1360 MK2", bonus: "+24 km/h speed" },
        { name: "AVCR-1360 MK3", bonus: "+36 km/h speed" },
      ],
      armor: [
        { name: "Composite Armor MK1", bonus: "+100mm protection" },
        { name: "Composite Armor MK2", bonus: "+200mm protection" },
        { name: "Composite Armor MK3", bonus: "+300mm protection" },
      ],
      fireControl: [
        { name: "Digital FCS MK1", bonus: "+20% accuracy" },
        { name: "Digital FCS MK2", bonus: "+35% accuracy" },
        { name: "Digital FCS MK3", bonus: "+50% accuracy" },
      ],
    },
  },
  {
    id: 72,
    name: "ZBL-08",
    type: "Tank",
    faction: "Chinese",
    tier: "III",
    description: "Wheeled infantry fighting vehicle with amphibious capability and modular design.",
    stats: { health: 24800, speed: 100, armor: "480mm", agility: 82 },
    weapons: [
      { name: "ZPT99 30mm", type: "Autocannon", damage: 380, penetration: 68, rateOfFire: "330 rpm" },
      { name: "HJ-73D", type: "ATGM", damage: 14200, penetration: 750 },
      { name: "QJT 5.8mm", type: "Machine Gun", damage: 75, penetration: 6, rateOfFire: "650 rpm" },
    ],
    modules: {
      engine: [
        { name: "Deutz BF6M1015C MK1", bonus: "+15 km/h speed" },
        { name: "Deutz BF6M1015C MK2", bonus: "+30 km/h speed" },
        { name: "Deutz BF6M1015C MK3", bonus: "+45 km/h speed" },
      ],
      armor: [
        { name: "Steel Armor MK1", bonus: "+90mm protection" },
        { name: "Steel Armor MK2", bonus: "+180mm protection" },
        { name: "Steel Armor MK3", bonus: "+270mm protection" },
      ],
      fireControl: [
        { name: "Integrated FCS MK1", bonus: "+16% accuracy" },
        { name: "Integrated FCS MK2", bonus: "+28% accuracy" },
        { name: "Integrated FCS MK3", bonus: "+40% accuracy" },
      ],
    },
  },
]

VEHICLES.push(...newVehicles)

const getAircraftRole = (vehicle: any) => {
  if (vehicle.type !== "Fighter Jet" && vehicle.type !== "Bomber") return null

  // Specific aircraft role assignments
  if (vehicle.name.includes("J-10")) return "multi-role"
  if (vehicle.name.includes("J-35")) return "stealth"
  if (vehicle.name.includes("MiG-41M")) return "interceptor"
  if (vehicle.name.includes("F-16C Night Falcon")) return "multi-role"
  if (vehicle.name.includes("Tu-222")) return "bomber"

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

  const hasMultiRoleWeapons = weapons.some(
    (w: any) => w.type.includes("Air-to-Ground") && weapons.some((w2: any) => w2.type.includes("AAM")),
  )

  if (hasStealthWeapons) return "stealth"
  if (hasGroundAttackWeapons && !hasInterceptorCharacteristics) return "ground-attack"
  if (hasInterceptorCharacteristics && !hasGroundAttackWeapons) return "interceptor"
  if (hasMultiRoleWeapons || (hasGroundAttackWeapons && hasInterceptorCharacteristics)) return "multi-role"

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
    Iranian: "/iran-flag.png",
    "South Korean": "/flags/kr.png",
    Ukrainian: "/ukraine-flag.png",
    Swedish: "/sweden-flag.png",
  }
  return flags[faction] || "/default-flag.png"
}

const isMarketVehicleCheck = (vehicleName: string) => {
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
    "Leopard 2A7V",
    "Type 16 MCV",
  ]
  return marketVehicles.includes(vehicleName)
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

  const handleChatSubmit = () => {
    if (!chatInput.trim()) return

    const userMessage = { role: "user", content: chatInput }
    setChatMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    setTimeout(() => {
      const response = "AI response would go here"
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

              {isMarketVehicleCheck(vehicle.name) && (
                <div className="absolute top-0 left-0 w-0 h-0 z-10">
                  <div className="h-0 border-l-yellow-500 border-b-transparent ml-0 w-0 border-l-[25px] border-b-[25px]" />
                </div>
              )}

              {(vehicle.type === "Fighter Jet" || vehicle.type === "Bomber") && (
                <div className="absolute top-4 right-4">
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

              <div className="flex items-center gap-3 mb-2">
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
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-xs text-slate-400 mb-1">Speed</div>
                  <div className="text-lg font-bold text-cyan-300">{vehicle.stats.speed} km/h</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-xs text-slate-400 mb-1">Armor</div>
                  <div className="text-lg font-bold text-cyan-300">{vehicle.stats.armor}</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-xs text-slate-400 mb-1">Agility</div>
                  <div className="text-lg font-bold text-cyan-300">{vehicle.stats.agility}</div>
                </div>
              </div>

              <div className="flex gap-2 mb-3">
                <button
                  onClick={() => toggleCompare(vehicle.id.toString())}
                  disabled={compare.length >= 2 && !compare.includes(vehicle.id.toString())}
                  className={`flex-1 text-sm rounded transition-colors px-5 py-4 font-bold ${
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
      </main>

      {/* Chat Toggle Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 bg-cyan-600 hover:bg-cyan-700 text-white p-4 rounded-full shadow-lg transition-colors z-50"
      >
        <BotMessageSquareIcon className="w-6 h-6" />
      </button>

      {/* Chat Interface */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-96 bg-slate-900 border border-slate-700 rounded-lg shadow-xl z-50">
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <h3 className="font-semibold text-cyan-400">MWT AI Assistant</h3>
            <button onClick={() => setChatOpen(false)} className="text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto h-64">
            {chatMessages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
                <div
                  className={`inline-block p-3 rounded-lg max-w-xs ${
                    message.role === "user" ? "bg-cyan-600 text-white" : "bg-slate-800 text-slate-300"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-left mb-4">
                <div className="inline-block p-3 rounded-lg bg-slate-800 text-slate-300">Thinking...</div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleChatSubmit()}
                placeholder="Ask about vehicles..."
                className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button
                onClick={handleChatSubmit}
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-700 mt-12">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">© 2024 MWT Assistant. All rights reserved.</div>
            <div className="flex gap-6">
              <button
                onClick={() => setShowAbout(true)}
                className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
              >
                About
              </button>
              <button
                onClick={() => setShowCredits(true)}
                className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
              >
                Credits
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MwtVehicleStats
