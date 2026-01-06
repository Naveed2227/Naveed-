"use client"
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { BotMessageSquareIcon, X, Send, Search, Bot, CalendarSearchIcon, Calendar, ChevronDown, ChevronRight, Trophy, Menu, Languages, Filter, Star, MapPin, Camera, Heart, Gift, CalendarDays, Copy, Info, Mail, Shield, FileText, Share2 as Share } from "lucide-react"
import Script from "next/script";

// Pages component
const Pages = ({ activePage, onPageChange }: { activePage: string, onPageChange: (page: string) => void }) => {
  return (
    <div className="flex space-x-4 mb-6 border-b border-gray-700 pb-2">
      <button
        onClick={() => onPageChange('home')}
        className={`px-4 py-2 rounded-t-lg transition-colors ${
          activePage === 'home' 
            ? 'text-blue-400 border-b-2 border-blue-400' 
            : 'text-gray-400 hover:text-white'
        }`}
      >
        Home
      </button>
      <button
        onClick={() => onPageChange('about')}
        className={`px-4 py-2 rounded-t-lg transition-colors ${
          activePage === 'about' 
            ? 'text-blue-400 border-b-2 border-blue-400' 
            : 'text-gray-400 hover:text-white'
        }`}
      >
        About
      </button>
      <button
        onClick={() => onPageChange('contact')}
        className={`px-4 py-2 rounded-t-lg transition-colors ${
          activePage === 'contact' 
            ? 'text-blue-400 border-b-2 border-blue-400' 
            : 'text-gray-400 hover:text-white'
        }`}
      >
        Contact
      </button>
      <button
        onClick={() => onPageChange('privacy')}
        className={`px-4 py-2 rounded-t-lg transition-colors ${
          activePage === 'privacy' 
            ? 'text-blue-400 border-b-2 border-blue-400' 
            : 'text-gray-400 hover:text-white'
        }`}
      >
        Privacy Policy
      </button>
      <button
        onClick={() => onPageChange('terms')}
        className={`px-4 py-2 rounded-t-lg transition-colors ${
          activePage === 'terms' 
            ? 'text-blue-400 border-b-2 border-blue-400' 
            : 'text-gray-400 hover:text-white'
        }`}
      >
        Terms of Service
      </button>
    </div>
  );
};

// About Page Component
const AboutPage = () => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
    <div className="flex items-center mb-6">
      <Info className="text-blue-400 mr-2" size={24} />
      <h2 className="text-2xl font-bold text-white">About MWT Assistant</h2>
    </div>
    <div className="prose prose-invert text-gray-300">
      <p className="mb-4">
  MWT Assistant is your all-in-one tool for tracking MWT data with real-time stats, detailed vehicle info, and AI-powered analysis. Whether you're a seasoned commander or just starting out, it provides everything you need to understand vehicles, compare stats, and plan your strategies.
</p>
<p className="mb-4">
  The app doesn’t collect personal data. Anonymous performance data may be gathered by Google Play Services, and ads may use cookies under their own policies. We handle all information responsibly and prioritize your privacy.
</p>
<p className="mb-4">
  MWT Assistant is an independent project, not affiliated with Artstorm or Cube Software. “MWT” and related names or images are trademarks of their respective owners. Our goal is to bring accurate, accessible data to the community.
</p>
<p>
  Join thousands of commanders who rely on MWT Assistant to track data and improve gameplay. We regularly update our tools and expand features based on community feedback.
</p>
    </div>
  </div>
);

// Contact Page Component
const ContactPage = () => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-8">
    <div className="flex items-center mb-6">
      <Mail className="text-blue-400 mr-2" size={24} />
      <h2 className="text-2xl font-bold text-white">Contact Us</h2>
    </div>
    <div className="prose prose-invert text-gray-300">
      <p className="mb-4">
        We'd love to hear from you! Whether you have questions about our data, suggestions for improvement, or just want to share your thoughts about MWT Assistant, our team is here to help.
      </p>
      <p className="mb-6">
        For general inquiries, please email us at:
        <a href="mailto:mwtassistantteam@gmail.com" className="text-blue-400 hover:text-blue-300 ml-2">
          mwtassistantteam@gmail.com
        </a>
      </p>
      <p className="text-sm text-gray-400">
        We strive to respond to all messages within 24-48 hours. For technical support, please include any relevant details about your device and the issue you're experiencing.
      </p>
    </div>
  </div>
);

// Privacy Policy Page Component
const PrivacyPolicyPage = () => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
    <div className="flex items-center mb-6">
      <Shield className="text-blue-400 mr-2" size={24} />
      <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
    </div>
    <div className="prose prose-invert text-gray-300">
      <p className="mb-4">
        At MWT Assistant, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our app.
      </p>
      
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">Information We Collect</h3>
      <p className="mb-4">
        We collect non-personal information such as browser type, device information, and usage data to improve our services. This includes anonymous analytics to understand how visitors interact with our site.
      </p>
      
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">Cookies</h3>
      <p className="mb-4">
        Our website uses cookies to enhance your experience. These small text files help us remember your preferences and understand how you use our site. You can disable cookies in your browser settings, but some features may not function properly.
      </p>
      
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">Third-Party Links</h3>
      <p className="mb-4">
        Our site may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
      </p>
      
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">Data Security</h3>
      <p>
        We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
      </p>
      
      <p className="text-sm text-gray-400 mt-8">
        Last updated: October 20, 2025
      </p>
    </div>
  </div>
);

// CopyToClipboard component for copying text to clipboard
const CopyToClipboard = ({ text, className = "" }: { text: string; className?: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button 
      onClick={copyToClipboard} 
      className={`inline-flex items-center text-gray-400 hover:text-white transition-colors ${className}`}
      title={copied ? "Copied!" : "Copy to clipboard"}
    >
      <Copy size={12} className="ml-1" />
    </button>
  );
};
import dynamic from 'next/dynamic';
import TermsOfService from './TermsOfService';
import AdMobBanner from './AdMobBanner';

// Import EventComponent with SSR disabled to access window object
const EventComponent = dynamic(() => import('./Event'), { ssr: false });
import { useRouter } from "next/navigation"
import { vehicleCurrencyData } from './currency'
import { urduTranslations, getUrduTranslation } from './Urdu'
import { englishTranslations, getEnglishTranslation } from './English'
import GoogleAdSense from './GoogleAdSense'
import * as vehicleVideosData from './armour-video'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwWqkn2fY0ibA2dwib6hP2YcfdbMp1bRQ",
  authDomain: "mwt-assistant-92593.firebaseapp.com",
  databaseURL: "https://mwt-assistant-92593-default-rtdb.firebaseio.com",
  projectId: "mwt-assistant-92593",
  storageBucket: "mwt-assistant-92593.firebasestorage.app",
  messagingSenderId: "233603868776",
  appId: "1:233603868776:web:61a74b6ba8d715df8373dd",
  measurementId: "G-STD2HQBK36"
};

// Initialize Firebase only on client side
let app;
let analytics;

if (typeof window !== 'undefined') {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  
  // Initialize Analytics only if supported
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch((error) => {
    console.log('Analytics not supported:', error);
  });
}

// Roman numeral conversion utility
const toRomanNumeral = (num: number | string): string => {
  let numValue = typeof num === 'string' ? parseInt(num) : num;
  const romanNumerals = [
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];
  
  let result = '';
  for (const { value, numeral } of romanNumerals) {
    while (numValue >= value) {
      result += numeral;
      numValue -= value;
    }
  }
  return result || 'I';
};

// Check if vehicle has armour video
const hasArmourVideo = (vehicleName: string): boolean => {
  return vehicleVideosData.default.some((video: any) => video.name === vehicleName);
};

// Convert tier to Roman numeral if it's not already
const formatTier = (tier: string | number): string => {
  // If already Roman numeral, return as is
  if (typeof tier === 'string' && /^[IVX]+$/.test(tier)) {
    return tier;
  }
  // Otherwise convert to Roman numeral
  return toRomanNumeral(tier);
};

// New Vehicles System
const newVehicles = [
  "ZTQ-15",
  "Panzer 87-140",
  "M1A1 AIM TUSK",
  "EC-665 Tiger HAP",
  



];

// Upcoming Vehicles System
const upcomingVehicles = [



"HARP General Krueger",
"AMX-10RC",
"2S38 Derivation",
"Object 447A",
"Al Kafil-1",
"Vijayanta",
"Pandur II",
"EF-2000 Typhoon",


  // Add upcoming vehicle names here
];

const isNewVehicle = (vehicleName: string): boolean => {
  // Perform case-insensitive comparison for exact match
  return newVehicles.some(vehicle => 
    vehicle.toLowerCase() === vehicleName.toLowerCase()
  );
};

const isUpcomingVehicle = (vehicleName: string): boolean => {
  return upcomingVehicles.includes(vehicleName);
};

// Vehicle Rarity System
const getVehicleRarity = (vehicleName: string) => {
  const commonVehicles = [
"F-35B Lightning II",
"F/A-18F Super Hornet",
"J-20 Mighty Dragon",
"Mi-35P",
"AH-64E",
"Z-19E",
"Z-9G",
"MH-6",
"SUPER LYNX",
"Z-9WA",
"MH-60L",
"F-4E Phantom",
"J-10 Chengdu",
"MiG-31BM Foxhound",
"Q-5A Nanchang",
"J-15",
"M41 Walker Bulldog",
"LAV-25",
"LAV-150",
"M113A1 FMS AIP",
"XM800T",
"WZ-120",
"WZ-121",
"WZ-501",
"WZ-501A",
"WZ-211",
"T-55A",
"BMP-1",
"BMP-1K",
"BTR-80",
"BTR-80A",
"PT-76B",
"Type-61",
"ZSU-57-2",
"M60",
"T-62",
"BMP-2",
"BTR-82AT",
"BTR-82A1",
"M3 Bradley",
"PGZ-04A",
"ZSU-23-4M4 Shilka",
"LAV-300",
"PTL-02",
"PLZ-83",
"2S1 Gvozdika",
"M1A1 Abrams",
"T-72A",
"ZTZ85-II",
"PLZ-07B",
"2S6M1 Tunguska-M1",
"XM975",
"M113 Hellfire",
"LAV-600",
"ADATS",
"Pantsir S-1",
"M1128 Stryker",
"PLZ-05",
"MiG-35",
"Su-37 Terminator",
"Ka-52M",
"Mi-35P Hind-F",
"AH-64E Apache",
"Super Lynx Mk88A",
"Z-9WA",
"MH-60L DAP",
"Z-9G Harbin",
"MH-6 Little Bird",
"M1A1 Abrams",
"M3A3 Bradley",
"ZBL-08",
"M110A2",
"Xian JH-7A",
"T-72B1",


 ];
  const enhancedVehicles = [
"2S19 Msta-S",
"BMPT Terminator 2",
"Mi-28NM",
"WZ-10",
"AH-1Z",
"Z-11WB",
"MI-8TV",
"Z-20",
"AH-84",
"F-14D Super Tomcat",
"J-16 Shenyang",
"Su 25UB",
"F-15SE Silent Eagle",
"M42A1 Duster",
"T114 BAT",
"WZ-120C",
"Type 74E",
"Type 74G/Kai",
"T-62 545",
"XM1 (GM)",
"M163 VADS",
"2S3 Akatsiya",
"MBT70",
"ZTZ96",
"9A52-2 Smerch",
"AV-8B Harrier II",
"Su-25UB",
"A-10A Thunderbolt",
"Mi-8TV",
"Z-11WB Changhe",
"Z-20 Harbin",
"AH-1Z Viper",
"MBT-70",
"PGZ-09",
"HSTV-L",
"VBCI-2",
"Centauro I 120",
"T-90A",
"ZTZ99A",



];
  const rareVehicles = [
"Type 10",
"Challenger 3",
"Leopard 2A7+",
"T-14 Armata (152)",
"KF31 Lynx",
"M10 Booker",
"M-SHORAD",
"M109A6 Paladin",
"Otomatic 76",
"F-16C Night Falcon",
"Mitsubishi F2B",
"KA-50",
"T54E1",
"CM25",
"T-55AMD",
"SU-152 Taran",
"Leopard 2A4",
"PT-91 Twardy",
"ZTZ-96A (P)",
"2S31 Vena",
"K-31 Cheonma",
"Type 625E SHORAD",
"Type 89 MLRS",
"AFT-09",
"WMA301",
"AFT-10",
"Type 16 MCV",
"VT-4A1",
"Leopard 2A7 Plus",
"Su-39",
"Su-35S",
"Alpha Jet A",
"Mitsubishi F-2B",
"Su-24M",
"Ka-50 Black Shark",
"OH-1 Ninja",
"Leclerc S2 AZUR",
"T-64BV",
"M60A3 (MZK)",
"Rookiat MTTD",
"BMD3",
"K21 KNIFV",
"Stridsvagn 105",
"Strf 9040 BILL",
"Merkava Mk.3",
"F-5E Tiger II",
"ERC-90 F4 Sagaie",
"TAN-SAM-1C",
"M60A3 TTS",
"FV101 Scorpion-90",
"T-14 Armata",
"XM8 AGS",
"RAH-66 Comanche",
"Mi-171SH",
"EC-665 Tiger HAP",


];
  const epicVehicles = [
"Su-57 Felon",
"Su-57M",
"YF-23",
"Su-75 Checkmate",
"KF-51 Panther",
"EMBT 120",
"Type 90",
"XM2001 Crusader",
"Gepard 1A2",
"Abrams X",
"Merkava Mk.4",
"Object 640",
"Ka-58 Black Ghost",
"J-50",
"MiG-41M",
"T-20 Monolit",
"PL-01",
"M270 MLRS",
"MGM-166 LOSAT",
"SR-5 GMLRS",
"ZTZ99-III",
"FV4034 Challenger 2 TES",
"Karrar",
"M1 Abrams Block 3",
"Altay",
"AMX-30 Super",
"Type 75 MLRS",
"Mi-24 Super Hind",
"Leopard 2A-RC 3.0",
"Leopard 2A8",
"X-2 Shinshin",
"K2 Black Panther",
"Al-Khalid",
"B-Type",
"T-90M",
"Su-47 Berkut",
"T-15 Barbaris",
"Ka-90",
 "M1 AGDS",
"Leopard 2 Revolution",
"Arjun Mk.2",
"ZTQ-15",
  "Panzer 87-140",
"M1A1 AIM TUSK", 

];
  const legendaryVehicles = [
"TU-222",
"TOS-1A",
"FK 2000",
"SB-1",
 "T-25 Pamir",
 "M1 Abrams CATTB",
 "T-104 Bastion",
 "T-95M",
 "BM-57-2 Kochevnik",
];

  if (commonVehicles.includes(vehicleName)) return "Common";
  if (enhancedVehicles.includes(vehicleName)) return "Enhanced";
  if (rareVehicles.includes(vehicleName)) return "Rare";
  if (epicVehicles.includes(vehicleName)) return "Epic";
  if (legendaryVehicles.includes(vehicleName)) return "Legendary";
  return ""; // Default to Common for unlisted vehicles
};

// Get rarity color
const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case "Common": return "bg-gray-600 text-gray-100";
    case "Enhanced": return "bg-green-600 text-green-100";
    case "Rare": return "bg-blue-600 text-blue-100";
    case "Epic": return "bg-purple-600 text-purple-100";
    case "Legendary": return "bg-orange-600 text-orange-100";
    default: return "bg-gray-600 text-gray-100";
  }
};



// Battle Pass Data Structure
const BATTLE_PASSES = [
  {
    id: 14,
    month: "January 2026",
    name: "Operation New Generation",
    image: "2026-Jan.jpg", // Upload your custom image to the same directory
    description: "Dominate the frozen battlefields with elite winter warfare vehicles",
    vehicles: ["Panzer 87-140", "ZTQ-15"], // Vehicle IDs from VEHICLES array
    rewards: {
      premium: ["ZTQ-15"],
      free: ["Panzer 87-140"]
    }
  },
{
    id: 13,
    month: "December 2025",
    name: "Operation Ice Bell",
    image: "2025-Dec.jpg", // Upload your custom image to the same directory
    description: "Dominate the frozen battlefields with elite winter warfare vehicles",
    vehicles: ["T-15 Barbaris", "Ka-90"], // Vehicle IDs from VEHICLES array
    rewards: {
      premium: ["Ka-90"],
      free: ["T-15 Barbaris"]
    }
  },
{
    id: 12,
    month: "November 2025",
    name: "Scarlet Dawn",
    image: "2025-Nov.jpg", // Upload your custom image to the same directory
    description: "Dominate the frozen battlefields with elite winter warfare vehicles",
    vehicles: ["T-90M", "B-Type"], // Vehicle IDs from VEHICLES array
    rewards: {
      premium: ["B-Type"],
      free: ["T-90M"]
    }
  },
 {
    id: 11,
    month: "October 2025",
    name: "Falling Thunder",
    image: "2025-Oct.jpg", // Upload your custom image to the same directory
    description: "Dominate the frozen battlefields with elite winter warfare vehicles",
    vehicles: ["Leopard 2A8", "X-2 Shinshin"], // Vehicle IDs from VEHICLES array
    rewards: {
      premium: ["X-2 Shinshin"],
      free: ["Leopard 2A8"]
    }
  },
 {
    id: 10,
    month: "September 2025",
    name: "Labor Legends",
    image: "2025-Sep.jpg", // Upload your custom image to the same directory
    description: "Dominate the frozen battlefields with elite winter warfare vehicles",
    vehicles: ["ХM8 AGS", "M1 Abrams CATTB"], // Vehicle IDs from VEHICLES array
    rewards: {
      premium: ["M1 Abrams CATTB"],
      free: ["XM8 AGS"]
    }
  },
  {
    id: 9,
    month: "August 2025",
    name: "Sentinels union",
    image: "2025-Aug.jpg", // Upload your custom image to the same directory
    description: "Dominate the frozen battlefields with elite winter warfare vehicles",
    vehicles: ["KF31 Lynx", "EMBT 120"], // Vehicle IDs from VEHICLES array
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
    vehicles: ["Type 16 MCV", "Object 640"], // Vehicle IDs from VEHICLES array
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
    vehicles: ["Gepard 1A2", "YF-23"], // Vehicle IDs from VEHICLES array
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
    vehicles: ["M-SHORAD", "Merkava Mk.4"], // Vehicle IDs from VEHICLES array
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
    vehicles: ["Type 625E SHORAD", "Su-57M"], // Vehicle IDs from VEHICLES array
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
    vehicles: ["Leopard 2A7+", "Abrams X"], // Vehicle IDs from VEHICLES array
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
    vehicles: ["HSTV-L", "Ka-58 Black Ghost"], // Vehicle IDs from VEHICLES array
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
    vehicles: ["Type 10","TU-222"], // Vehicle IDs from VEHICLES array
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
    vehicles: ["VT-4A1", "KF-51 Panther"], // Vehicle IDs from VEHICLES array
    rewards: {
      premium: ["KF-51"],
      free: ["VT-4A1"]
    }
  },
  {
    id: 0,
    month: "November 2024",
    name: "Season One",
    image: "2024-Nov.jpg", // Upload your custom image to the same directory
    description: "Dominate the frozen battlefields with elite winter warfare vehicles",
    vehicles: ["T-14 Armata (152)", "SB-1"], // Vehicle IDs from VEHICLES array
    rewards: {
      premium: ["SB-1"],
      free: ["T-14 Armata (152)"]
    }
  }

];

const VEHICLES_DATA = [
  
  {
    id: 1,
    name: "Su-57M",
    type: "Fighter Jet",
    faction: "Russian",
    tier: "IV",
    description: "Advanced fifth-generation stealth fighter with supercruise capability and advanced avionics.",
    image: "Su-57M.jpg",
    stats: { health: 24500, speed: 1260, afterburnerSpeed: 2520, agility: 55 },
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
    stats: { health: 25100, speed: 760, afterburnerSpeed: 2170, agility: 40 },
    weapons: [
  { "name": "GBU-38 JDAM", "type": "Guided Bomb", "damage": 14300, "penetration": 120, "reload": 25 },
  { "name": "GBU-39", "type": "Guided Bomb", "damage": 14700, "penetration": 120, "reload": 28 },
  { "name": "GBU-31 JDAM", "type": "Guided Bomb", "damage": 19400, "penetration": 360, "reload": 40 },
  { "name": "GBU-32 JDAM", "type": "Guided Bomb", "damage": 15700, "penetration": 200, "reload": 35 },
  { "name": "AGM-65 Maverick", "type": "Air-to-Ground Missile", "damage": 11000, "penetration": 830, "reload": 22 },
  { "name": "AIM-132 ASRAAM", "type": "Short-Range AAM", "damage": 5200, "penetration": 65, "reload": 15 },
  { "name": "AGM-84HK", "type": "Anti-Ship Missile", "damage": 18900, "penetration": 310, "reload": 35 },
  { "name": "AIM-120 AMRAAM", "type": "BVR AAM", "damage": 11300, "penetration": 60, "reload": 20 }
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
    stats: { health: 21200, speed: 1110, afterburnerSpeed: 2200, agility: 52 },
    weapons: [
      { "name": "FT-3", "type": "Air-to-Ground Missile", "damage": 15800, "penetration": 210, "reload": 34 },
      { "name": "LS-6-250", "type": "Guided Bomb", "damage": 17300, "penetration": 300, "reload": 40 },
      { "name": "TL-20", "type": "Guided Bomb", "damage": 12400, "penetration": 143, "reload": 25 },
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
    stats: { health: 32800, speed: 1210, afterburnerSpeed: 2880, agility: 29 },
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
    name: "EF-2000 Typhoon",
    type: "Fighter Jet",
    faction: "Austrian",
    tier: "IV",
    image: "EF-2000-Typhoon.jpg",
    description: "The Eurofighter 2000 Typhoon is Austria's primary supersonic multi-role fighter jet, providing national air sovereignty and defense capabilities.",
     stats: { health: 32376, speed: 0, afterburnerSpeed: 0, agility: 0 },
    weapons: [
      
     
      { "name": "Brimstone", "type": "Air-to-Ground Missile", "damage": 8100, "penetration": 800, "reload": 20 },
      { "name": "Storm Shadow", "type": "Cruise Missile", "damage": 20000, "penetration": 370, "reload": 40 },
     
      { "name": "AIM-120 AMRAAM", "type": "BVR AAM", "damage": 11300, "penetration": 60, "reload": 20 },
      { "name": "AIM-132 ASRAAM", "type": "Short-Range AAM", "damage": 5200, "penetration": 65, "reload": 15 },
      

    ]
  },
  {
    id: 6,
    name: "J-35",
    type: "Fighter Jet",
    faction: "Chinese",
    tier: "IV",
    image: "J-35.jpg",
    description: "Fifth-generation stealth fighter with advanced sensor fusion and networking capabilities.",
    stats: { health: 22600, speed: 790, afterburnerSpeed: 2250, agility: 48 },
    weapons: [
      { "name": "FT-3", "type": "Air-to-Ground Missile", "damage": 15800, "penetration": 210, "reload": 34 },
      { "name": "LS-6-250", "type": "Guided Bomb", "damage": 17300, "penetration": 300, "reload": 40 },
      { "name": "TL-20", "type": "Guided Bomb", "damage": 12400, "penetration": 143, "reload": 25 },
      { "name": "YJ-1000", "type": "Anti-Ship Missile", "damage": 21600, "penetration": 500, "reload": 40 },
      { "name": "PL-10", "type": "Short-Range AAM", "damage": 7400, "penetration": 60, "reload": 20 },
      { "name": "AR-1", "type": "Anti-Radiation Missile", "damage": 7400, "penetration": 1000, "reload": 16 },
      { "name": "PL-15", "type": "BVR AAM", "damage": 7800, "penetration": 70, "reload": 30 },
      { "name": "CM-102A", "type": "Air-to-Ground Missile", "damage": 14600, "penetration": 110, "reload": 40 },
      { "name": "AKF-98A", "type": "Air-to-Ground Missile", "damage": 20500, "penetration": 410, "reload": 40 }
    ]
  },
  {
    id: 7,
    name: "MiG-41M",
    type: "Fighter Jet",
    faction: "Russian",
    tier: "IV",
    description: "Next-generation interceptor with hypersonic capabilities and advanced radar systems.",
    image: "MiG-41M.jpg",
    stats: { health: 21200, speed: 1350, afterburnerSpeed: 4050, agility: 43 },
    weapons: [
      { "name": "KAB-250", "type": "Guided Bomb", "damage": 14900, "penetration": 130, "reload": 25 },
      { "name": "GROM-E1", "type": "Air-to-Ground Missile", "damage": 16200, "penetration": 170, "reload": 36 },
      { "name": "C-13DF BLOCK", "type": "Autocannon", "damage": 9200, "penetration": 160, "reload": 30 },
      { "name": "KAB-500L", "type": "Guided Bomb", "damage": 17300, "penetration": 310, "reload": 40 },
      { "name": "Kh-MD-E", "type": "Air-to-Ground Missile", "damage": 12400, "penetration": 250, "reload": 20 },
      { "name": "R-93M", "type": "Short-Range AAM", "damage": 5000, "penetration": 65, "reload": 15 },
      { "name": "9K38 IGLA-V BLOCK", "type": "Surface-to-Air Missile", "damage": 4100, "penetration": 30, "reload": 15 },
      { "name": "RVV-SD", "type": "Medium-Range AAM", "damage": 6500, "penetration": 65, "reload": 20 },
      { "name": "Kh-23M", "type": "Air-to-Ground Missile", "damage": 12900, "penetration": 800, "reload": 38 }
    ]
  },
  {
    id: 8,
    name: "Su-57 Felon",
    type: "Fighter Jet",
    faction: "Russian",
    tier: "IV",
    description: "Fifth-generation stealth fighter with advanced maneuverability and sensor fusion.",
    image: "Su-57-Felon.jpg",
    stats: { health: 21900, speed: 1170, afterburnerSpeed: 2340, agility: 53 },
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
    id: 9,
    name: "B-Type",
    type: "Fighter Jet",
    faction: "Chinese",
    tier: "IV",
    image: "B-Type.jpg",
    description: "The B-Type is a futuristic Chinese stealth jet with extreme speed, agility, and firepower, capable of near-space and atmospheric dominance.",
    stats: { health: 36400, speed: 1260, afterburnerSpeed: 2960, agility: 60 },
    weapons: [
      
      { "name": "PL-10", "type": "Short-Range AAM", "damage": 7400, "penetration": 60, "reload": 16 },
      { "name": "PL-12", "damage": 7800, "penetration": 56, "reload": 17 },
      { "name": "PL-15", "type": "BVR AAM", "damage": 8400, "penetration": 70, "reload": 17 },
      { "name": "PL-17", "type": "Air-to-Air Missile", "damage": 11700, "penetration": 100, "reload": 26 },
      { "name": "FT-3", "type": "Air-to-Ground Missile", "damage": 15800, "penetration": 210, "reload": 34 },
      { "name": "LS-6-250", "type": "Guided Bomb", "damage": 17300, "penetration": 300, "reload": 40 },
      { "name": "TL-20", "type": "Guided Bomb", "damage": 12400, "penetration": 143, "reload": 25 },
      { "name": "AKF-98A", "type": "Air-to-Ground Missile", "damage": 20500, "penetration": 410, "reload": 40 },
      { "name": "HD-1A", "type": "Air-to-Ground Missile", "damage": 25000, "penetration": 1000, "reload": 40 },
      { "name": "KD-21", "type": "Ballistic Missile", "damage": 39700, "penetration": 1300, "reload": 60 },
    ]
  },
  {
    id: 10,
    name: "Su-47 Berkut",
    type: "Fighter Jet",
    faction: "Russian",
    tier: "IV",
    image: "Su-47-Berkut.jpg",
    description: "Experimental Russian fighter with forward-swept wings, advanced agility, composite materials, and testbed for next-generation aerodynamics and avionics.",
    stats: { health: 34600, speed: 1120, afterburnerSpeed: 2250, agility: 60 },
    weapons: [
    
      { "name": "R-37", "type": "Medium-Range Air-to-Air Missile", "damage": 8400, "penetration": 80, "reload": 30 },
      { "name": "R-73", "type": "Short-Range Air-to-Air Missile", "damage": 4800, "penetration": 56, "reload": 15 },
      { "name": "R-77", "type": "Short-Range Air-to-Air Missile", "damage": 8100, "penetration": 55, "reload": 20 },
      { "name": "FAB-250-M62", "type": "Unguided Bomb", "damage": 15100, "penetration": 130, "reload": 30 },
      { "name": "KAB-250", "type": "Air-to-Ground Missile", "damage": 14900, "penetration": 130, "reload": 25 },
      { "name": "KAB500KR", "type": "Air-to-Ground Missile", "damage": 17800, "penetration": 320, "reload": 40 },
      { "name": "KAB-500L", "type": "Air-to-Ground Missile", "damage": 17300, "penetration": 310, "reload": 40 },
      { "name": "Kh-25MLE", "type": "Air-to-Ground Missile", "damage": 16000, "penetration": 160, "reload": 35 },
      { "name": "Kh-69", "type": "Air-to-Ground Missile", "damage": 18400, "penetration": 230, "reload": 40 },
      { "name": "GROM-E1", "type": "Air-to-Ground Missile", "damage": 16200, "penetration": 170, "reload": 36 },
      
      
    ]
  },
  {
    id: 11,
    name: "YF-23",
    type: "Fighter Jet",
    faction: "American",
    tier: "IV",
    image: "YF-23.jpg",
    description: "Experimental stealth fighter designed for air superiority, rival to the F-22.",
    stats: { health: 23800, speed: 850, afterburnerSpeed: 2070, agility: 35 },
    weapons: [
  { "name": "GBU-38 JDAM", "type": "Guided Bomb", "damage": 14300, "penetration": 120, "reload": 25 },
  { "name": "GBU-39", "type": "Guided Bomb", "damage": 14700, "penetration": 120, "reload": 28 },
  { "name": "GBU-31 JDAM", "type": "Guided Bomb", "damage": 19400, "penetration": 360, "reload": 40 },
  { "name": "Brimstone", "type": "Air-to-Ground Missile", "damage": 8100, "penetration": 800, "reload": 20 },
  { "name": "AGM-65 Maverick", "type": "Air-to-Ground Missile", "damage": 11000, "penetration": 830, "reload": 22 },
  { "name": "AGM-84H/K", "type": "Anti-Ship Missile", "damage": 18900, "penetration": 310, "reload": 35 },
  { "name": "AIM-132 ASRAAM", "type": "Short-Range AAM", "damage": 5200, "penetration": 65, "reload": 15 },
  { "name": "AIM-120 AMRAAM", "type": "BVR AAM", "damage": 11300, "penetration": 60, "reload": 20 }
]
  },
  {
    id: 12,
    name: "F-35B Lightning II",
    type: "Fighter Jet",
    faction: "American",
    tier: "IV",
    image: "F-35B-Lightning-II.jpg",
    description: "Fifth-generation stealth multirole fighter with STOVL capability.",
    stats: { health: 20200, speed: 760, afterburnerSpeed: 1780, agility: 38 },
   weapons: [
  { "name": "GBU-38 JDAM", "type": "Guided Bomb", "damage": 14300, "penetration": 120, "reload": 25 },
  { "name": "GBU-31 JDAM", "type": "Guided Bomb", "damage": 19400, "penetration": 360, "reload": 40 },
  { "name": "GBU-32 JDAM", "type": "Guided Bomb", "damage": 15700, "penetration": 200, "reload": 35 },
  { "name": "x4 AGM-169 JAGM", "type": "Air-to-Ground Missile", "damage": 9800, "penetration": 1200, "reload": 30 },
  { "name": "Brimstone", "type": "Air-to-Ground Missile", "damage": 8100, "penetration": 800, "reload": 20 },
  { "name": "AGM-65 Maverick", "type": "Air-to-Ground Missile", "damage": 11000, "penetration": 830, "reload": 22 },
  { "name": "Storm Shadow", "type": "Cruise Missile", "damage": 20000, "penetration": 370, "reload": 40 },
  { "name": "AIM-120 AMRAAM", "type": "BVR AAM", "damage": 11300, "penetration": 60, "reload": 20 },
  { "name": "AIM-132 ASRAAM", "type": "BVR AAM", "damage": 5200, "penetration": 65, "reload": 15 }
]
  },
  {
    id: 13,
    name: "J-50",
    type: "Fighter Jet",
    faction: "Chinese",
    tier: "IV",
    image: "J-50.jpg",
    description: "Advanced stealth air superiority fighter concept with heavy armament.",
    stats: { health: 26600, speed: 1170, afterburnerSpeed: 2480, agility: 55 },
    weapons: [
      { "name": "FT-3", "damage": 15800, "penetration": 210, "reload": 34 },
      { "name": "LS-6-250", "damage": 17300, "penetration": 300, "reload": 40 },
      { "name": "TL-20", "type": "Guided Bomb", "damage": 12400, "penetration": 143, "reload": 25 },
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
    id: 14,
    name: "Su-75 Checkmate",
    type: "Fighter Jet",
    faction: "Russian",
    tier: "IV",
    image: "Su-75-Checkmate.jpg",
    description: "Light stealth fighter designed for export and versatile combat missions.",
    stats: { health: 18900, speed: 1300, afterburnerSpeed: 2310, agility: 60 },
    weapons: [
      { "name": "KAB-250", "type": "Guided Bomb", "damage": 14900, "penetration": 130, "reload": 25 },
      { "name": "KAB500KR", "type": "Guided Bomb", "damage": 17800, "penetration": 320, "reload": 40 },
      { "name": "KAB-500L", "type": "Air-to-Ground Missile", "damage": 17300, "penetration": 310, "reload": 40 },
      { "name": "Kh-MD-E", "type": "Air-to-Ground Missile", "damage": 12400, "penetration": 250, "reload": 20 },
      { "name": "GROM-E1", "type": "Air-to-Ground Missile", "damage": 16200, "penetration": 170, "reload": 36 },
      { "name": "RVV-MD", "type": "Medium-Range AAM", "damage": 4800, "penetration": 65, "reload": 15 },
      { "name": "RVV-SD", "type": "Medium-Range AAM", "damage": 6500, "penetration": 65, "reload": 20 },
      { "name": "Kh-38MLE", "type": "Air-to-Ground Missile", "damage": 17800, "penetration": 400, "reload": 40 },
      { "name": "Kh-23M", "type": "Air-to-Ground Missile", "damage": 12900, "penetration": 800, "reload": 38 },
      { "name": "Kh-69", "type": "Air-to-Ground Missile", "damage": 18400, "penetration": 230, "reload": 40 },
    ]
  },
  {
    id: 15,
    name: "X-2 Shinshin",
    type: "Fighter Jet",
    faction: "Japanese",
    tier: "IV",
    image: "X-2-Shinshin.jpg",
    description: "Japan's stealth technology demonstrator, testing advanced avionics, radar, and maneuverability for future fighters.",
    stats: { health: 21400, speed: 940, afterburnerSpeed: 2230, agility: 53 },
    weapons: [
  { "name": "AAM-3", "type": "Air-to-Ground Missile", "damage": 5900, "penetration": 45, "reload": 15 },
  { "name": "AAM-4", "type": "BVR AAM", "damage": 7500, "penetration": 75, "reload": 30 },
  { "name": "AAM-5", "type": "Short-Range AAM", "damage": 6100, "penetration": 60, "reload": 20 },
  { "name": "GCS-1", "type": "Guided Bomb", "damage": 14300, "penetration": 120, "reload": 25 },
  { "name": "GBU-38 JDAM", "type": "Guided Bomb", "damage": 14300, "penetration": 120, "reload": 25 },
  { "name": "GBU-32 JDAM", "type": "Guided Bomb", "damage": 15700, "penetration": 200, "reload": 35 },
  { "name": "GBU-31 JDAM", "type": "Guided Bomb", "damage": 19400, "penetration": 360, "reload": 40 },
  { "name": "JNAAM", "type": "Guided Bomb", "damage": 8100, "penetration": 85, "reload": 35 },
  { "name": "Type 12 STS", "type": "Guided Bomb", "damage": 16200, "penetration": 170, "reload": 40 },
  { "name": "JLAU-3A", "damage": 5200, "penetration": 128, "reload": 20 }
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
    stats: { health: 42400, speed: 75, reverseSpeed: 70, armor: "780mm", agility: 34 },
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
    stats: { health: 40300, speed: 75, reverseSpeed: 45, armor: "800mm", agility: 35 },
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
    stats: { health: 39800, speed: 72, reverseSpeed: 72, armor: "750mm", agility: 45 },
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
    stats: { health: 42600, speed: 68, armor: "650mm", agility: 35, turnRate: 46 },
    weapons: [
      { name: "DM63A1 APFSDS", type: "Main Gun", damage: 11760, penetration: 810 },
      { name: "DM11 HEI", type: "Main Gun", damage: 5000, penetration: 85 },
      { name: "DM12A2 HEAT", type: "Main Gun", damage: 12140, penetration: 500 },
      { name: "DM-73 APFSDS", type: "Main Gun", damage: 11940, penetration: 900 }
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
    stats: { health: 40000, speed: 65, reverseSpeed: 30, maneuverability: 44, armor: "600mm", agility: 44 },
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
    stats: { health: 44000, speed: 74, armor: "800mm", agility: 39 },
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
    stats: { health: 41000, speed: 80, reverseSpeed: 50, maneuverability: 40, armor: "600mm", agility: 40 },
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
    stats: { health: 42100, speed: 64, armor: "690mm", agility: 37 },
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
    stats: { health: 40000, speed: 65, armor: "810mm", agility: 30 },
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
    stats: { health: 38100, speed: 75, armor: "740mm", agility: 30 },
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
    stats: { health: 42200, speed: 60, armor: "820mm", agility: 45 },
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
    stats: { health: 43100, speed: 73, armor: "750mm", agility: 34 },
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
    stats: { health: 46900, speed: 64, armor: "730mm", agility: 38 },
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
    type: "Missile Carrier",
    faction: "Russian",
    tier: "IV",
    description: "Tank support fighting vehicle designed for urban combat and infantry support.",
    image: "BMPT-Terminator-2.jpg",
    stats: { health: 40600, speed: 65, armor: "550mm", agility: 44 },
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
    stats: { health: 32700, speed: 70, armor: "420mm", agility: 35 },
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
    stats: { health: 43700, speed: 72, armor: "870mm", agility: 36 },
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
    stats: { health: 43200, speed: 71, armor: "690mm", agility: 37 },
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
    stats: { health: 42400, speed: 76, armor: "650mm", agility: 40 },
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
    stats: { health: 41700, speed: 65, armor: "630mm", agility: 34 },
    weapons: [
      { name: "DTB-125 HEI", type: "Main Gun", damage: 4980, penetration: 83 },
      { name: "BTA4", type: "Main Gun", damage: 11600, penetration: 700 },
      { name: "BTS8 PELE", type: "Main Gun", damage: 10200, penetration: 1000 },
      { name: "GP125", type: "Main Gun", damage: 10190, penetration: 800 }
    ]
  },
  {
    "id": 123,
    "name": "Challenger 3",
    "type": "Main Battle Tank",
    "faction": "British",
    "tier": "IV",
    "image": "Challenger-3.jpg",
    "description": "Next-generation British main battle tank with smoothbore gun and digital turret.",
    "stats": { "health": 46200, "speed": 70, "armor": 800, "agility": 32 },
    "weapons": [
      { "name": "DM11", "type": "Main Gun", "damage": 5000, "penetration": 85 },
      { "name": "DM12", "type": "Main Gun", "damage": 12100, "penetration": 480 },
      { "name": "DM33", "type": "Main Gun", "damage": 11230, "penetration": 550 },
      { "name": "DM63", "type": "Main Gun", "damage": 11760, "penetration": 810 }
    ]
  },
  {
    "id": 124,
    "name": "EMBT 120",
    "type": "Main Battle Tank",
    "faction": "French",
    "tier": "IV",
    "image": "EMBT-120.jpg",
    "description": "A hybrid European main battle tank, combining Leopard 2 chassis with Leclerc turret.",
    "stats": { "health": 41900, "speed": 75, "armor": 640, "agility": 38 },
    "weapons": [
      { "name": "OCC 120 G1 HEAT", "type": "Main Gun", "damage": 12230, "penetration": 480 },
      { "name": "OE120F1 HEI", "type": "Main Gun", "damage": 4800, "penetration": 85 },
      { "name": "OFL120F1 APFSDS", "type": "Main Gun", "damage": 11610, "penetration": 675 },
      { "name": "SHARD120", "type": "Main Gun", "damage": 11910, "penetration": 820 }
    ]
  },
  {
    "id": 125,
    "name": "FV4034 Challenger 2 TES",
    "type": "Main Battle Tank",
    "faction": "British",
    "tier": "IV",
    "image": "FV4034-Challenger-2-TES.jpg",
    "description": "A heavily upgraded British main battle tank with advanced armor for urban warfare.",
    "stats": { "health": 42700, "speed": 56, "armor": 800, "agility": 30 },
    "weapons": [
      { "name": "L27A1", "type": "Main Gun", "damage": 11850, "penetration": 610 },
      { "name": "L23A1", "type": "Main Gun", "damage": 11400, "penetration": 397 },
      { "name": "L31A7", "type": "Main Gun", "damage": 11870, "penetration": 152 },
      { "name": "L26", "type": "Main Gun", "damage": 11600, "penetration": 494 }
    ]
  },
  {
    "id": 126,
    "name": "Leopard 2 Revolution",
    "type": "Main Battle Tank",
    "faction": "Indonesian",
    "tier": "IV",
    "image": "Leopard-2-Revolution.jpg",
    "description": "An upgraded German main battle tank variant operated by Indonesia, featuring enhanced armor, modern sensors, improved crew protection, and advanced digital fire-control systems.",
    "stats": { "health": 46400, "speed": 68, "armor": 640, "agility": 35 },
    "weapons": [
      { "name": "DM11", "type": "Main Gun", "damage": 4900, "penetration": 87 },
      { "name": "DM53A1", "type": "Main Gun", "damage": 11500, "penetration": 680 },
      { "name": "DM12A1", "type": "Main Gun", "damage": 12100, "penetration": 480 },
      { "name": "DM63", "type": "Main Gun", "damage": 11760, "penetration": 810 }

    ]
  },
  {
    "id": 127,
    "name": "Karrar",
    "type": "Main Battle Tank",
    "faction": "Iranian",
    "tier": "IV",
    "image": "Karrar.jpg",
    "description": "An Iranian main battle tank, featuring upgraded armor, firepower, and technology from T-72 design.",
    "stats": { "health": 39800, "speed": 70, "armor": 590, "agility": 35 },
    "weapons": [
      { "name": "3OF19", "type": "Main Gun", "damage": 5000, "penetration": 82 },
      { "name": "3BK29", "type": "Main Gun", "damage": 12630, "penetration": 660 },
      { "name": "3BM29 Nadfil", "type": "Main Gun", "damage": 11250, "penetration": 500 },
      { "name": "3BM50 Lead-1", "type": "Main Gun", "damage": 11170, "penetration": 755 },
      { "name": "Tondar", "type": "Main Gun", "damage": 10160, "penetration": 750 }
    ]
  },
  {
    "id": 128,
    "name": "ZTQ-15",
    "type": "Light Tank",
    "faction": "Chinese",
    "tier": "IV",
    "image": "ZTQ-15.jpg",
    "description": "Modern Chinese light tank designed for high-altitude operations, featuring advanced mobility, firepower, and rapid deployment capabilities.",
    "stats": { "health": 39500, "speed": 75, "armor": "265mm", "agility": 41 },
    "weapons": [
     { "name": "DTW1 APFSDS", "type": "Main Gun", "damage": 9980, "penetration": 338, "reload": 3.6 },
     { "name": "DTC02-105 APFSDS", "type": "Main Gun", "damage": 10430, "penetration": 580, "reload": 3.6 },
     { "name": "DTP2 HEAT", "type": "Main Gun", "damage": 12680, "penetration": 650, "reload": 3.6 },
     { "name": "DTB02-105 HEI", "type": "Main Gun", "damage": 11600, "penetration": 65, "reload": 3.6 },
     { "name": "GP105-GP2 HEAT", "type": "Missile", "damage": 11830, "penetration": 750, "reload": 3.6  },
     { "name": "35x32RE SAPHEI", "type": "Missile", "damage": 4020, "penetration": 80, "reload": 5 }
    ]
  },
{
    "id": 129,
    "name": "Object 447A",
    "type": "Main Battle Tank",
    "faction": "Russian",
    "tier": "IV",
    "image": "Object-447A.jpg",
    "description": "Experimental Russian main battle tank prototype emphasizing heavy firepower, improved protection systems, and advanced battlefield technology.",
    "stats": { "health": 0, "speed": 0, "armor": "0mm", "agility": 0 },
    "weapons": []
  },
  {
    "id": 130,
    "name": "Panzer 87-140",
    "type": "Main Battle Tank",
    "faction": "Swiss",
    "tier": "IV",
    "image": "Panzer-87-140.jpg",
    "description": "Swiss experimental main battle tank upgrade featuring a powerful 140mm cannon, enhanced armor protection, and improved survivability.",
    "stats": { "health": 46200, "speed": 70, "armor": "670mm", "agility": 35 },
    "weapons": [
    { "name": "Pz Kan Pfeil Pat APFSDS", "type": "Main Gun", "damage": 14520, "penetration": 1000, "reload": 6.8 },
    { "name": "Pz Kan HL Pat MZ HEAT", "type": "Main Gun", "damage": 17710, "penetration": 1100, "reload": 6.8 },
  ]
  },


  {
    "id": 131,
    "name": "Leclerc S2 AZUR",
    "type": "Main Battle Tank",
    "faction": "French",
    "tier": "IV",
    "image": "Leclerc-S2-AZUR.jpg",
    "description": "Upgraded French main battle tank with urban warfare package and improved armor.",
    "stats": { "health": 44700, "speed": 72, "armor": 640, "agility": 41 },
    "weapons": [
      { "name": "OFL 120 G1 APFSDS", "type": "Main Gun", "damage": 11240, "penetration": 495 },
      { "name": "OE 120 F1 HEI", "type": "Main Gun", "damage": 5000, "penetration": 85 },
      { "name": "OCC 120 G1 HEAT", "type": "Main Gun", "damage": 12230, "penetration": 480 },
      { "name": "OFL 120 F1 APFSDS", "type": "Main Gun", "damage": 11610, "penetration": 675 }
    ]
  },
  {
    "id": 132,
    "name": "Object 640",
    "type": "Main Battle Tank",
    "faction": "Russian",
    "tier": "IV",
    "image": "Object-640.jpg",
    "description": "The Object 640 \"Black Eagle\" is a Russian prototype main battle tank with modular armor.",
    "stats": { "health": 42400, "speed": 80, "armor": 700, "agility": 38 },
    "weapons": [
      { "name": "3BM60 Lead-2", "type": "Main Gun", "damage": 11830, "penetration": 780 },
      { "name": "3BK18M", "type": "Main Gun", "damage": 12390, "penetration": 550 },
      { "name": "3OF26", "type": "Main Gun", "damage": 5000, "penetration": 92 },
      { "name": "9M119", "type": "Main Gun", "damage": 10160, "penetration": 750 }
    ]
  },
  {
    "id": 133,
    "name": "Leopard 2A-RC 3.0",
    "type": "Main Battle Tank",
    "faction": "German",
    "tier": "IV",
    "image": "Leopard-2-A-RC-3.0.jpg",
    "description": "Mobile gun system with rapid deployment capability and stealth features.",
    "stats": { "health": 41900, "speed": 70, "armor": 640, "agility": 38 },
    "weapons": [
      { "name": "XM1401E APFSDS", "type": "Main Gun", "damage": 13090, "penetration": 950 },
      { "name": "XME140 HEI", "type": "Main Gun", "damage": 13780, "penetration": 103 },
      { "name": "XMH140 HEAT", "type": "Main Gun", "damage": 14080, "penetration": 866 },
      { "name": "SpikeNLOS", "type": "Missile", "damage": 14250, "penetration": 1000, "reload": 4 }
    ]
  },
  {
    "id": 134,
    "name": "Leopard 2A8",
    "type": "Main Battle Tank",
    "faction": "German",
    "tier": "IV",
    "image": "Leopard-2A8.jpg",
    "description": "A modern German main battle tank, featuring advanced armor, improved firepower, and upgraded targeting systems for battlefield dominance.",
    "stats": { "health": 45900, "speed": 72, "armor": 710, "agility": 38 },
    "weapons": [
      { "name": "DM53 APFSDS", "type": "Main Gun", "damage": 11440, "penetration": 650 },
      { "name": "DM11 HEI", "type": "Main Gun", "damage": 5000, "penetration": 85 },
      { "name": "DM73 APFSDS", "type": "Main Gun", "damage": 11940, "penetration": 900 },
      { "name": "DM12A1 HEAT", "type": "Main Gun", "damage": 12140, "penetration": 500 }
    ]
  },
  {
    "id": 135,
    "name": "T-15 Barbaris",
    "type": "Missile Carrier",
    "faction": "Russian",
    "tier": "IV",
    "image": "T-15-Barbaris.jpg",
    "description": "A heavily armored IFV featuring a 57 mm autocannon, Kornet-EM missiles, strong frontal protection, and impressive mobility for its weight overall.",
    "stats": { "health": 45900, "speed": 69, "armor": 120, "agility": 42 },
    "weapons": [
      { "name": "3BM22 API", "type": "Main Gun", "damage": 1540, "penetration": 147 },
      { "name": "3U08 HEI", "type": "Main Gun", "damage": 800, "penetration": 75 },
      { "name": "53-UOR-281U HEI", "type": "Main Gun", "damage": 2290, "penetration": 85 },
      { "name": "53-UBR-281U APFSDS", "type": "Main Gun", "damage": 1760, "penetration": 380 },
      { "name": "9K135 Kornet-EM", "type": "Missile", "damage": 13600, "penetration": 450, "reload": 6 }
    ]
  },
  {
    "id": 136,
    "name": "T-20 Monolit",
    "type": "Missile Carrier",
    "faction": "Russian",
    "tier": "IV",
    "image": "T-20-Monolit.jpg",
    "description": "Advanced Russian main battle tank equipped with a 2A42 autocannon, Kornet ATGMs, and a 30mm AGS-30 grenade launcher. Known for its formidable firepower and versatility on the battlefield.",
    "stats": {
      "health": 42300,
      "speed": 70,
      "reverseSpeed": 50,
      "turretRotationSpeed": 49.8,
      "hullRotationSpeed": 40,
      "armor": 400,
      "agility": 45
    },
    "weapons": [
      { "name": "3UBR6", "type": "Main Gun", "damage": 560, "penetration": 71 },
      { "name": "3UBR8", "type": "Main Gun", "damage": 590, "penetration": 165 },
      { "name": "30F8", "type": "Main Gun", "damage": 675, "penetration": 50 },
      { "name": "M929", "type": "Main Gun", "damage": 630, "penetration": 189 },
      { "name": "VOG-17M", "type": "Missile", "damage": 1600, "penetration": 60, "reload": 1.7 },
      { "name": "VOG-30", "type": "Missile", "damage": 1800, "penetration": 76, "reload": 1.7 },
      { "name": "9K135 Kornet", "type": "Missile", "damage": 14820, "penetration": 1000, "reload": 12 }
    ]
  },
  {
    "id": 137,
    "name": "KF31 Lynx",
    "type": "Light Tank",
    "faction": "German",
    "tier": "IV",
    "image": "KF31-Lynx.jpg",
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
      { "name": "PMC287", "type": "Main Gun", "damage": 570, "penetration": 195 },
      { "name": "PMC308", "type": "Main Gun", "damage": 300, "penetration": 80 },
      { "name": "MK246", "type": "Main Gun", "damage": 510, "penetration": 87 },
      { "name": "MK266", "type": "Main Gun", "damage": 270, "penetration": 55 },
      { "name": "SPIKE-LR II", "type": "Missile", "damage": 10090, "penetration": 900, "reload": 10 }
    ]
  },
  {
    "id": 138,
    "name": "T-90M",
    "type": "Main Battle Tank",
    "faction": "Russian",
    "tier": "IV",
    "image": "T-90M.jpg",
    "description": "Russia’s advanced main battle tank, featuring upgraded armor, firepower, electronics, and battlefield survivability.",
    "stats": {
      "health": 41300,
      "speed": 70,
      "reverseSpeed": 0,
      "turretRotationSpeed": 0,
      "hullRotationSpeed": 45,
      "armor": 800,
      "agility": 40
    },
    "weapons": [
      { "name": "3BM46 APFSDS", "type": "Main Gun", "damage": 11640, "penetration": 690 },
      { "name": "30F26 HEI", "type": "Main Gun", "damage": 5000, "penetration": 92 },
      { "name": "3BM70 APFSDS", "type": "Main Gun", "damage": 12010, "penetration": 870 },
      { "name": "3BK18M HEAT", "type": "Main Gun", "damage": 12390, "penetration": 550 },
      { "name": "9M119 HEAT", "type": "Main Gun", "damage": 10160, "penetration": 750 }
    ]
  },
  {
    "id": 139,
    "name": "K2 Black Panther",
    "type": "Main Battle Tank",
    "faction": "SouthKorean",
    "tier": "IV",
    "image": "K2-Black-Panther.jpg",
    "description": "South Korea's advanced main battle tank, featuring superior firepower, mobility, armor protection, and state-of-the-art battlefield technology.",
    "stats": {
      "health": 42800,
      "speed": 75,
      "reverseSpeed": 0,
      "turretRotationSpeed": 0,
      "hullRotationSpeed": 40,
      "armor": 600,
      "agility": 0
    },
    "weapons": [
      { "name": "K276 APFSDS", "type": "Main Gun", "damage": 11500, "penetration": 600 },
      { "name": "K279 APFSDS", "type": "Main Gun", "damage": 11830, "penetration": 740 },
      { "name": "K280 HEAT-MP", "type": "Main Gun", "damage": 12450, "penetration": 680 },
      { "name": "KSTAM-II", "type": "Missile", "damage": 9560, "penetration": 850 }
    ]
  },
  {
    "id": 140,
    "name": "Al-Khalid",
    "type": "Main Battle Tank",
    "faction": "Pakistani",
    "tier": "IV",
    "image": "Al-Khalid.jpg",
    "description": "Pakistani main battle tank, jointly developed with China, featuring advanced firepower, mobility, and protection.",
    "stats": {
      "health": 43600,
      "turnRate": 45,
      "speed": 70,
      "reverseSpeed": 0,
      "turretRotationSpeed": 0,
      "hullRotationSpeed": 0,
      "armor": 650,
      "agility": 38
    },
    "weapons": [
      { "name": "DTB-125 HE", "type": "Main Gun", "damage": 4980, "penetration": 83 },
      { "name": "DTP-125 HEAT", "type": "Main Gun", "damage": 12230, "penetration": 480 },
      { "name": "DTC10-125", "type": "Main Gun", "damage": 11620, "penetration": 680 },
      { "name": "TYPE 1985-I", "type": "Main Gun", "damage": 11120, "penetration": 466 }
    ]
  },
  {
    "id": 141,
    "name": "Arjun Mk.2",
    "type": "Main Battle Tank",
    "faction": "Indian",
    "tier": "IV",
    "image": "Arjun-Mk.2.jpg",
    "description": "India's upgraded battle tank with stronger armor, 120mm missile-firing gun, and advanced systems.",
    "stats": {
      "health": 46600,
      "speed": 70,
      "reverseSpeed": 0,
      "turretRotationSpeed": 0,
      "hullRotationSpeed": 35,
      "armor": 660,
      "agility": 35
    },
    "weapons": [
      { "name": "L31A7 HESH", "type": "Main Gun", "damage": 11500, "penetration": 152 },
      { "name": "PCD APHE", "type": "Main Gun", "damage": 12160, "penetration": 450 },
      { "name": "Mk.II APFSD", "type": "Main Gun", "damage": 11560, "penetration": 650 },
      { "name": "LAHAT HEAT", "type": "Main Gun", "damage": 10250, "penetration": 800 }
    ]
  },
  {
    "id": 142,
    "name": "M10 Booker",
    "type": "Light Tank",
    "faction": "American",
    "tier": "IV",
    "image": "M10-Booker.jpg",
    "description": "A mobile assault gun designed to neutralize fortified positions and light armor.",
    "stats": {
      "health": 39300,
      "speed": 75,
      "reverseSpeed": 30,
      "turretRotationSpeed": 30,
      "hullRotationSpeed": 35,
      "armor": 350,
      "agility": 38
    },
    "weapons": [
      { "name": "M392A2", "type": "Main Gun", "damage": 9480, "penetration": 372 },
      { "name": "M393A2", "type": "Main Gun", "damage": 10340, "penetration": 127 },
      { "name": "M456A2", "type": "Main Gun", "damage": 10890, "penetration": 400 },
      { "name": "M900", "type": "Main Gun", "damage": 10320, "penetration": 582 },
      { "name": "SwitchBlade 300", "type": "Missile", "damage": 6730, "penetration": 390, "reload": 15 }
    ]
   },   
  {
    "id": 143,
    "name": "PL-01",
    "type": "Light Tank",
    "faction": "Polish",
    "tier": "IV",
    "image": "PL-01.jpg",
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
      { "name": "M829A3", "type": "Main Gun", "damage": 10450, "penetration": 670 },
      { "name": "M830", "type": "Main Gun", "damage": 10930, "penetration": 800 },
      { "name": "MRM-CE", "type": "Main Gun", "damage": 10000, "penetration": 850 },
      { "name": "MRM-KE", "type": "Main Gun", "damage": 9150, "penetration": 980 }
    ]
  },
  {
    "id": 144,
    "name": "ZLT-11",
    "type": "Tank Destroyer",
    "faction": "Chinese",
    "tier": "IV",
    "image": "ZLT-11.jpg",
    "description": "A Chinese wheeled infantry fighting vehicle armed with a 105 mm cannon and anti-tank missiles.",
    "stats": {
      "health": 33900,
      "speed": 100,
      "reverseSpeed": 40,
      "turretRotationSpeed": 45.3,
      "hullRotationSpeed": 45.3,
      "armor": 30,
      "agility": 45.3
    },
    "weapons": [
      { "name": "Type 83 HEAT", "type": "Main Gun", "damage": 10890, "penetration": 425 },
      { "name": "DTB-1 HESH", "type": "Main Gun", "damage": 4500, "penetration": 55 },
      { "name": "DTW-2 APFSDS", "type": "Main Gun", "damage": 10310, "penetration": 580 },
      { "name": "GP 105 HEAT", "type": "Main Gun", "damage": 9180, "penetration": 750 }
    ]
  },
  {
    "id": 145,
    "name": "M-SHORAD",
    "type": "Missile Carrier",
    "faction": "American",
    "tier": "IV",
    "image": "M-SHORAD.jpg",
    "description": "Mobile short-range air defense system with autocannons and Stinger missiles.",
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
      { "name": "XM914", "type": "Main Gun", "damage": 633, "penetration": 120 },
      { "name": "Stinger Launcher", "type": "Missile", "damage": 4700, "penetration": 35, "reload": 10 },
      { "name": "AGM-114 Hellfire", "type": "Missile", "damage": 11700, "penetration": 950, "reload": 10 }
    ]
  },
  {
    "id": 146,
    "name": "M1 AGDS",
    "type": "Missile Carrier",
    "faction": "American",
    "tier": "IV",
    "image": "M1-AGDS.png",
    "description": "A conceptual U.S. armored air-defense vehicle design combining heavy protection, advanced sensors, and rapid-fire weapons for close-range battlefield air-defense roles.",
    "stats": { "health": 47700, "speed": 69, "armor": "770mm", "agility": 36 },
    "weapons": [
      { "name": "PMD-060 APFSDS", "type": "Main Gun", "damage": 800, "penetration": 186 },
      { "name": "PMD-074 HEI", "type": "Main Gun", "damage": 370, "penetration": 65 },
      { "name": "PMD-478 HE", "type": "Main Gun", "damage": 400, "penetration": 50 },
      { "name": "MIM-146", "type": "Missile", "damage": 5100, "penetration": 900, "reload": 16 },
      { "name": "XM1018AD HE", "type": "Missile", "damage": 1330, "penetration": 85, "reload": 6 },
      { "name": "XM1018 HEI", "type": "Missile", "damage": 1500, "penetration": 100, "reload": 6 }
    ]
  },
  {
    "id": 147,
    "name": "TOS-1A",
    "type": "MLRS",
    "faction": "Russian",
    "tier": "IV",
    "image": "TOS-1A.jpg",
    "description": "Heavy flamethrower rocket launcher mounted on a tank chassis.",
    "stats": {
      "health": 38800,
      "speed": 60,
      "reverseSpeed": 25,
      "turretRotationSpeed": 20,
      "hullRotationSpeed": 30,
      "armor": 400,
      "agility": 44
    },
    "weapons": [
      { "name": "M0.1.01.04 TBC", "type": "Missile", "damage": 4500, "penetration": 160, "reload": 35 },
      { "name": "M0.1.01.04M INC", "type": "Missile", "damage": 12600, "penetration": 85, "reload": 35 }
    ]
  },
  {
    "id": 148,
    "name": "M270 MLRS",
    "type": "MLRS",
    "faction": "American",
    "tier": "IV",
    "image": "M270-MLRS.jpg",
    "description": "Rocket artillery system capable of long-range precision and area bombardment.",
    "stats": { "health": 31400, "speed": 65, "armor": "450mm", "agility": 26 },
    "weapons": [
      { "name": "M31", "type": "Guided Rocket", "damage": 18225, "penetration": 165, "reload": 15.7 },
      { "name": "M31", "type": "Guided Rocket", "damage": 15525, "penetration": 400, "reload": 15.7 },
      { "name": "G-MLRS-ER", "type": "Guided Rocket", "damage": 16200, "penetration": 250, "reload": 15.7 },
      { "name": "ATACMS Block I", "type": "Missile", "damage": 20500, "penetration": 200, "reload": 20 },
      { "name": "ATACMS Block II", "type": "Missile", "damage": 21250, "penetration": 600, "reload": 20 }
    ]
  },
  {
    "id": 149,
    "name": "PLZ-05",
    "type": "SPH",
    "faction": "Chinese",
    "tier": "IV",
    "image": "PLZ-05.jpg",
    "description": "Modern 155mm self-propelled howitzer designed for long-range artillery support.",
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
      { "name": "BEE17A/155", "type": "Main Gun", "damage": 16875, "penetration": 135 },
      { "name": "GP155A", "type": "Main Gun", "damage": 11250, "penetration": 200 },
      { "name": "GP155B", "type": "Main Gun", "damage": 10625, "penetration": 250 },
      { "name": "GP155E", "type": "Main Gun", "damage": 10250, "penetration": 400 }
    ]
  },
  {
    "id": 150,
    "name": "M109A6 Paladin",
    "type": "SPH",
    "faction": "American",
    "tier": "IV",
    "image": "M109A6-Paladin.jpg",
    "description": "Modernized 155mm self-propelled artillery system for accurate ground fire support.",
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
      { "name": "M107", "type": "Main Gun", "damage": 7200, "penetration": 112 },
      { "name": "M549A1", "type": "Main Gun", "damage": 14940, "penetration": 187 },
      { "name": "M48A1", "type": "Main Gun", "damage": 6820, "penetration": 115 },
      { "name": "M712 Copperhead", "type": "Main Gun", "damage": 4900, "penetration": 431 }
    ]
  },
  {
    "id": 151,
    "name": "FK 2000",
    "type": "Anti-Air",
    "faction": "Chinese",
    "tier": "IV",
    "image": "FK-2000.jpg",
    "description": "Modern Chinese mobile anti-aircraft system with radar-guided missiles and autocannons.",
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
      { "name": "BZT-30", "type": "Main Gun", "damage": 500, "penetration": 116 },
      { "name": "OZT-30", "type": "Main Gun", "damage": 680, "penetration": 56 },
      { "name": "FK-2000", "type": "Missile", "damage": 9720, "penetration": 102, "reload": 25 }
    ]
  },
  {
    "id": 152,
    "name": "Otomatic 76",
    "type": "Anti-Air",
    "faction": "Italian",
    "tier": "IV",
    "image": "Otomatic-76.jpg",
    "description": "Self-propelled anti-aircraft gun with rapid-fire 76mm cannon.",
    "stats": { "health": 39100, "speed": 65, "armor": "380mm", "agility": 36 },
    "weapons": [
      { "name": "76/62 APFSDS", "type": "Main Gun", "damage": 3570, "penetration": 413 },
      { "name": "76/62 HE-VT MOM", "type": "Main Gun", "damage": 1610, "penetration": 89 },
      { "name": "76/62 SAPOM", "type": "Main Gun", "damage": 2750, "penetration": 100 }
    ]
  },
  {
    "id": 153,
    "name": "BM-57-2 Kochevnik",
    "type": "Missile Carrier",
    "faction": "Russian",
    "tier": "IV",
    "image": "BM-57-2-Kochevnik.jpg",
    "description": "A modern Russian heavy tank armed with twin 57mm cannons, dual GSh-23Ms, Kornet missiles, APS, and drone support, built for speed, agility, and flanking superiority.",
    "stats": {
      "health": 42800,
      "speed": 75,
      "reverseSpeed": 28,
      "turretRotationSpeed": 45,
      "hullRotationSpeed": 40,
      "armor": 700,
      "agility": 40
    },
    "weapons": [
      { "name": "BR-281SP", "type": "Main Gun", "damage": 1540, "penetration": 147 },
      { "name": "BR-281U", "type": "Main Gun", "damage": 1400, "penetration": 181 },
      { "name": "OR-281", "type": "Main Gun", "damage": 800, "penetration": 73 },
      { "name": "9K135 Kornet", "type": "Missile", "damage": 14820, "penetration": 1000, "reload": 12 }
    ]
  },
  {
    id: 154,
    name: "ADATS",
    type: "Missile Carrier",
    faction: "American",
    tier: "IV",
    image: "ADATS.jpg",
    description: "Mobile air-defense system equipped with radar-guided missiles.",
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
      { name: "MIM-146", type: "Missile", damage: 7780, penetration: 290, reload: 9 }
    ]
  },
  {
    id: 155,
    name: "MGM-166 LOSAT",
    type: "Missile Carrier",
    faction: "American",
    tier: "IV",
    image: "MGM-166.jpg",
    description: "A U.S. prototype hypervelocity missile system designed to defeat heavy armor.",
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
      { name: "2x HJ-10", type: "Anti-Tank Missile", damage: 13800, penetration: 1400, reload: 20 },
      { name: "TG-250", type: "Air-to-Ground Missile", damage: 14600, penetration: 120, reload: 20 },
      { name: "FS-70", type: "Rocket Pod", damage: 4200, penetration: 290, reload: 20 },
      { name: "TY-90", type: "Short-Range AAM", damage: 3300, penetration: 28, reload: 29 },
      { name: "2x AKD-9", type: "Air-to-Ground Missile", damage: 8000, penetration: 800, reload: 15 },
      { name: "4x BA-21", type: "Air-to-Ground Missile", damage: 8300, penetration: 1400, reload: 38 },
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
      { name: "TY-90", type: "Short-Range AAM", damage: 3300, penetration: 28, reload: 29 },
      { name: "2x AKD-9", type: "Air-to-Ground Missile", damage: 8000, penetration: 800, reload: 15 },
      { name: "2x AKD-10", type: "Air-to-Ground Missile", damage: 8600, penetration: 1400, reload: 20 },
      { name: "2x HJ-10", type: "Anti-Tank Missile", damage: 13800, penetration: 1400, reload: 30 },
      { name: "TL-6", type: "Air-to-Ground Missile", damage: 19400, penetration: 830, reload: 21 },
      { name: "4x BA-21", type: "Air-to-Ground Missile", damage: 8300, penetration: 1400, reload: 38 },
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
      { name: "x4 AGM-114 Hellfire", type: "Air-to-Ground Missile", damage: 9000, penetration: 950, reload: 30 },
      { name: "LAU-61", type: "Rocket Pod", damage: 4100, penetration: 290, reload: 20 },
      { name: "AIM-9 Sidewinder", type: "Short-Range AAM", damage: 5700, penetration: 45, reload: 15 },
      { name: "AIM-92", type: "Short-Range AAM", damage: 4700, penetration: 35, reload: 10 },
      { name: "Brimstone", type: "Air-to-Ground Missile", damage: 8100, penetration: 800, reload: 20 },
      { name: "ADS STARSTREAK", type: "Air-to-Ground Missile", damage: 7300, penetration: 50, reload: 15 },
      { name: "LAU-10", type: "Rocket Pod", damage: 7400, penetration: 500, reload: 30 },
      { name: "LAU-150", type: "Rocket Pod", damage: 7800, penetration: 600, reload: 40 }
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
  { "name": "LAU-61", "type": "Rocket Pod", "damage": 4100, "penetration": 290, "reload": 20 },
  { "name": "LAU-10", "type": "Rocket Pod", "damage": 7400, "penetration": 500, "reload": 30 },
  { "name": "AIM-92", "type": "Short-Range AAM", "damage": 4700, "penetration": 35, "reload": 10 },
  { "name": "LAU-150", "type": "Rocket Pod", "damage": 7800, "penetration": 600, "reload": 40 },
  { "name": "ADS STARSTREAK", "type": "Air-to-Ground Missile", "damage": 7300, "penetration": 50, "reload": 15 },
  { "name": "AIM-9 Sidewinder", "type": "Short-Range AAM", "damage": 5700, "penetration": 45, "reload": 15 },
  { "name": "AGR-20 BLR", "type": "Rocket Pod", "damage": 5200, "penetration": 128, "reload": 20 },
  { "name": "AGM-65 Maverick", "type": "Air-to-Ground Missile", "damage": 11000, "penetration": 830, "reload": 22 },
  { "name": "x4 AGM-114 Hellfire", "type": "Air-to-Ground Missile", "damage": 9000, "penetration": 950, "reload": 30 },
  { "name": "Brimstone", "type": "Air-to-Ground Missile", "damage": 8100, "penetration": 800, "reload": 20 }
]
  },
  {
    id: 207,
    name: "Ka-90",
    type: "Helicopter",
    faction: "Russian",
    tier: "IV",
    image: "Ka-90.jpg",
    description: "Russian Ka-90 concept blends helicopter lift with jet propulsion, promising vertical takeoff, high-speed cruise, advanced rotors and hybrid flight performance.",
    stats: { health: 30800, speed: 700, verticalSpeed: 40, agility: 70 },
    weapons: [
      { "name": "RVV-MD", "type": "Medium-Range AAM", "damage": 4800, "penetration": 65, "reload": 15 },
      { "name": "RVV-SD", "type": "Medium-Range AAM", "damage": 6500, "penetration": 65, "reload": 20 },
      { "name": "KAB-500L", "type": "Air-to-Ground Missile", "damage": 17300, "penetration": 310, "reload": 40 },
      { "name": "Kh-69", "type": "Air-to-Ground Missile", "damage": 18400, "penetration": 230, "reload": 40 },
      { "name": "Hermes", "type": "Air-to-Ground Missile", "damage": 11500, "penetration": 1000, "reload": 35 },
      { "name": "Kh-MD-E", "damage": 12400, "penetration": 250, "reload": 20 },
      { "name": "9M120 Attack", "damage": 7500, "penetration": 850, "reload": 25 },
      { "name": "B-13L", "damage": 9200, "penetration": 160, "reload": 40 },
      { "name": "B8V20", "damage": 5100, "penetration": 420, "reload": 20 },
      
    ]
    
  },
  {
  "id": 300,
  "name": "Mitsubishi F-2B",
  "type": "Fighter Jet",
  "faction": "Japanese",
  "tier": "III",
  "image": "Mitsubishi-F-2B.jpg",
  "description": "Multirole fighter developed from the F-16, optimized for anti-ship and air-to-air roles.",
  "stats": { "health": 20400,  "speed": 490, "afterburnerSpeed": 2210, "agility": 49  },
  "weapons": [
    { "name": "JLAU-3A", "type": "Rocket Pod", "damage": 5200, "penetration": 128, "reload": 20 },
    { "name": "GBU-38 JDAM", "type": "Guided Bomb", "damage": 14300, "penetration": 120, "reload": 25 },
    { "name": "GBU-32 JDAM", "type": "Guided Bomb", "damage": 15700, "penetration": 200, "reload": 35 },
    { "name": "GBU-31 JDAM", "type": "Guided Bomb", "damage": 19400, "penetration": 360, "reload": 40 },
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
    stats: { health: 17500, speed: 830, afterburnerSpeed: 1970, agility: 48 },
    weapons: [
      { name: "LAU-61", type: "Rocket Pod", damage: 4100, penetration: 290, reload: 20 },
      { name: "GBU-12 Paveway II", type: "Guided Bomb", damage: 18590, penetration: 120, reload: 30 },
      { name: "GBU-31 JDAM", type: "Guided Bomb", damage: 19400, penetration: 360, reload: 40 },
      { name: "GBU-38 JDAM", type: "Guided Bomb", damage: 14300, penetration: 120, reload: 25 },
      { name: "GBU-39", type: "Guided Bomb", damage: 14700, penetration: 120, reload: 28 },
      { name: "AGM-84HK", type: "Anti-Ship Missile", damage: 18900, penetration: 310, reload: 35 },
      { name: "AGM-65 Maverick", type: "Air-to-Surface Missile", damage: 11000, penetration: 830, reload: 22 },
      { name: "AIM-7 Sparrow", type: "Medium-Range AAM", damage: 6200, penetration: 65, reload: 20 },
      { name: "AIM-9 Sidewinder", type: "Medium-Range AAM", damage: 5700, penetration: 45, reload: 15 },
      { name: "AIM-120 AMRAAM", type: "Medium-Range AAM", damage: 11300, penetration: 60, reload: 20 },
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
    stats: { health: 18100, speed: 950, afterburnerSpeed: 1730, agility: 41 },
    weapons: [
      { name: "LAU-61", type: "Rocket Pod", damage: 4100, penetration: 290, reload: 20 },
      { name: "MK-81", type: "Guided Bomb", damage: 13000, penetration: 90, reload: 20 },
      { name: "MK-82", type: "Guided Bomb", damage: 14300, penetration: 120, reload: 25 },
      { name: "GBU-12 Paveway II", type: "Guided Bomb", damage: 18590, penetration: 120, reload: 30 },
      { name: "GBU-32 JDAM", type: "Guided Bomb", damage: 15700, penetration: 200, reload: 35 },
      { name: "AGM-65 Maverick", type: "Air-to-Surface Missile", damage: 11000, penetration: 830, reload: 22 },
      { name: "AIM-7 Sparrow", type: "Medium-Range AAM", damage: 6200, penetration: 65, reload: 20 },
      { name: "AIM-9 Sidewinder", type: "Medium-Range AAM", damage: 5700, penetration: 45, reload: 15 },
      { name: "AIM-120 AMRAAM", type: "Medium-Range AAM", damage: 11300, penetration: 60, reload: 20 },
      { name: "AIM-132 ASRAAM", type: "Medium-Range AAM", damage: 5200, penetration: 65, reload: 15 },
    ]
  },
  {
    id: 303,
    name: "J-16 Shenyang",
    type: "Fighter Jet",
    faction: "Chinese",
    tier: "III",
    image: "J-16-Shenyang.jpg",
    description: "Chinese twin-seat multirole fighter derived from Su-30, capable of carrying heavy weapons payload.",
    stats: { health: 21300, speed: 810, afterburnerSpeed: 2030, agility: 43 },
    weapons: [
      { "name": "FT-3", "type": "Air-to-Ground Missile", "damage": 15800, "penetration": 210, "reload": 34 },
      { "name": "LS-6-250", "type": "Guided Bomb", "damage": 17300, "penetration": 300, "reload": 40 },
      { "name": "TL-20", "type": "Air-to-Ground Missile", "damage": 12400, "penetration": 143, "reload": 25 },
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
    stats: { health: 21700, speed: 900, afterburnerSpeed: 2250, agility: 48 },
    weapons: [
      { "name": "B8M1", "type": "Unguided Rocket", "damage": 5100, "penetration": 420, "reload": 20 },
      { "name": "FAB-250", "type": "Unguided Bomb", "damage": 15100, "penetration": 130, "reload": 30 },
      { "name": "KAB-250", "type": "Unguided Bomb", "damage": 14900, "penetration": 130, "reload": 25 },
      { "name": "KAB500KR", "type": "Guided Bomb", "damage": 17800, "penetration": 320, "reload": 40 },
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
    stats: { health: 21000, speed: 670, afterburnerSpeed: 860, agility: 43 },
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
    stats: { health: 24400, speed: 670, afterburnerSpeed: 2250, agility: 49 },
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
    stats: { health: 23500, speed: 1170, afterburnerSpeed: 2070, agility: 49 },
    weapons: [
      { "name": "Type 1", "type": "Guided Bomb", "damage": 15100, "penetration": 120, "reload": 32 },
      { "name": "x2 Type 90", "type": "Air-to-Ground Missile", "damage": 6400, "penetration": 320, "reload": 40 },
      { "name": "Type 3", "type": "Guided Bomb", "damage": 16000, "penetration": 210, "reload": 35 },
      { "name": "FT-3", "type": "Air-to-Ground Missile", "damage": 15800, "penetration": 210, "reload": 34 },
      { "name": "KD-88", "type": "Air-to-Ground Missile", "damage": 16200, "penetration": 170, "reload": 36 },
      { "name": "PL-7", "type": "Short-Range Air-to-Air Missile", "damage": 6500, "penetration": 50, "reload": 20 },
      { "name": "PL-10", "type": "Short-Range Air-to-Air Missile", "damage": 7400, "penetration": 60, "reload": 20 },
      { "name": "PL-12", "type": "Medium-Range Air-to-Air Missile", "damage": 7600, "penetration": 56, "reload": 30 },
      { "name": "PL-15", "type": "Beyond Visual Range Air-to-Air Missile", "damage": 7800, "penetration": 70, "reload": 30 },
      { "name": "AKF-98A", "type": "Air-to-Ground Missile", "damage": 20500, "penetration": 410, "reload": 40 }
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
    stats: { health: 18400, speed: 720, afterburnerSpeed: 2250, agility: 43 },
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
  "description": "Advanced variant of the F-15 Strike Eagle with modern avionics and stealth characteristics.",
  "stats": { "health": 19800, "speed": 820, "afterburnerSpeed": 2390, "agility": 43 },
  "weapons": [
    { "name": "GBU-31 JDAM", "type": "Guided Bomb", "damage": 19400, "penetration": 360, "reload": 40 },
    { "name": "GBU-32 JDAM", "type": "Guided Bomb", "damage": 15700, "penetration": 200, "reload": 35 },
    { "name": "GBU-38 JDAM", "type": "Guided Bomb", "damage": 14300, "penetration": 120, "reload": 25 },
    { "name": "MK-84", "type": "Guided Bomb", "damage": 19400, "penetration": 360, "reload": 40 },
    { "name": "AGM-65 Maverick", "type": "Air-to-Surface Missile", "damage": 11000, "penetration": 830, "reload": 22 },
    { "name": "AIM-7 Sparrow", "type": "Medium-Range AAM", "damage": 6200, "penetration": 65, "reload": 20 },
    { "name": "AIM-9 Sidewinder", "type": "Medium-Range AAM", "damage": 5700, "penetration": 45, "reload": 15 },
    { "name": "AIM-120 AMRAAM", "type": "Medium-Range AAM", "damage": 11300, "penetration": 60, "reload": 20 },
    { "name": "AGM-84HK", "type": "Anti-Ship Missile", "damage": 18900, "penetration": 310, "reload": 35 },
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
    "stats": { "health": 24400, "speed": 1260, "afterburnerSpeed": 2250, "agility": 49 },
    "weapons": [
      { "name": "R-73", "type": "Short-Range AAM", "damage": 4900, "penetration": 60, "reload": 15 },
      { "name": "R-27", "type": "Medium-Range AAM", "damage": 8100, "penetration": 65, "reload": 20},
      { "name": "R-77", "type": "Medium-Range AAM", "damage": 8100, "penetration": 55, "reload": 20 },
      { "name": "Kh-31", "type": "Air-to-Surface Missile", "damage": 8100, "penetration": 230, "reload": 20 },
      { "name": "Kh-38ME", "type": "Air-to-Ground Missile", "damage": 17300, "penetration": 310, "reload": 40 },
      { "name": "KAB-500L", "type": "Guided Bomb (Laser)", "damage": 17300, "penetration": 320, "reload": 40 },
      { "name": "KAB500KR", "type": "Guided Bomb (TV)", "damage": 17800, "penetration": 210, "reload": 40 },
      { "name": "FAB-500", "type": "Unguided Bomb", "damage": 16000, "penetration": 210, "reload": 35 },
      { "name": "B8M1", "type": "Rocket Pod (S-8)", "damage": 5100, "penetration": 420, "reload": 20, "rateOfFire": "80 rockets" },
      { "name": "B-13L", "type": "Rocket Pod (S-13)", "damage": 9200, "penetration": 250, "reload": 40, "rateOfFire": "20 rockets" },

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
    "stats": { "health": 27600, "speed": 500, "afterburnerSpeed": 760, "agility": 48 },
    "weapons": [
    { name: "LAU-61", type: "Rocket Pod", damage: 4100, penetration: 290, reload: 20 },
    { name: "MK-84", type: "General-Purpose Bomb", damage: 19400, penetration: 360, reload: 40 },
    { name: "LAU-10x3", type: "Rocket Pod", damage: 7400, penetration: 500, reload: 40 },
    { name: "GBU-32 JDAM", type: "Guided Bomb", damage: 15700, penetration: 200, reload: 35 },
    { name: "GBU-12 Paveway II", type: "Guided Bomb", damage: 18590, penetration: 120, reload: 30 },
    { name: "AGM-65 Maverick", type: "Air-to-Surface Missile", damage: 11000, penetration: 830, reload: 22 },
    { name: "AGM-12B Bullpup", type: "Air-to-Surface Missile", damage: 11500, penetration: 600, reload: 41 },
    { "name": "AIM-9 Sidewinder", "type": "Medium-Range AAM", "damage": 5700, "penetration": 45, "reload": 15 },
    { name: "AIM-120 AMRAAM", type: "Medium-Range AAM", damage: 11300, penetration: 60, reload: 20 },
    { name: "AIM-132 ASRAAM", type: "Short-Range AAM", damage: 5200, penetration: 65, reload: 15 },
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
    "name": "M1A1 Abrams",
    "type": "Main Battle Tank",
    "faction": "American",
    "tier": "III",
    "image": "M1-Abrams.jpg",
    "description": "An American main battle tank with a 120mm gun, composite armor, gas turbine engine, four crew, combat-proven.",
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
    "name": "T-72B1",
    "type": "Main Battle Tank",
    "faction": "Venezuelan",
    "tier": "III",
    "image": "T-72B1.jpg",
    "description": "A modernized Soviet main battle tank in Venezuelan service, featuring improved armor, mobility, and firepower.",
    "stats": { "health": 39100, "speed": 60, "armor": "600mm", "agility": 42 },
    "weapons": [
    { "name": "3BK12M HEAT", "type": "Main Gun", "damage": 12140, "penetration": 440 },
    { "name": "30F46 HEI", "type": "Main Gun", "damage": 5000, "penetration": 92 },
    { "name": "3BM22 Zakolka APFSDS", "type": "Main Gun", "damage": 11100, "penetration": 425 },
    { "name": "3BM42 Mango APFSDS", "type": "Main Gun", "damage": 11390, "penetration": 565 },
    ]
  },
  {
    "id": 406,
    "name": "T-64BV",
    "type": "Main Battle Tank",
    "faction": "Russian",
    "tier": "III",
    "image": "T-64BV.jpg",
    "description": "Soviet main battle tank with composite armor and 125mm smoothbore gun.",
    "stats": { "health": 36700, "speed": 55, "armor": "600mm", "agility": 45 },
    "weapons": [
      { "name": "3BM42", "type": "Main Gun", "damage": 11700, "penetration": 720 },
      { "name": "9M112", "type": "Main Gun", "damage": 10070, "penetration": 700 },
      { "name": "30F26", "type": "Main Gun", "damage": 5000, "penetration": 92 },
      { "name": "3BK18M", "type": "Main Gun", "damage": 12390, "penetration": 550 }
    ]
  },
  {
    "id": 407,
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
    "id": 408,
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
    "id": 409,
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
    "id": 410,
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
    "id": 411,
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
    "id": 412,
    "name": "AMX-30 Super",
    "type": "Main Battle Tank",
    "faction": "French",
    "tier": "III",
    "image": "AMX-30-Super.jpg",
    "description": "French Main Battle Tank featuring improved armor, a powerful 105mm gun and control system.",
    "stats": { "health": 36000, "speed": 65, "armor": "770mm", "agility": 42 },
    "weapons": [
      { "name": "OF 105 F1 APFSDS", "type": "Main Gun", "damage": 9910, "penetration": 361 },
      { "name": "OE 105 F1 HEI", "type": "Main Gun", "damage": 4500, "penetration": 55 },
      { "name": "OCC 105 F1 HEAT", "type": "Main Gun", "damage": 10790, "penetration": 350 },
      { "name": "OF 105 F2 APFSDS", "type": "Main Gun", "damage": 10090, "penetration": 459 }
    ]
  },
{
    "id": 413,
    "name": "M1A1 AIM TUSK",
    "type": "Main Battle Tank",
    "faction": "Australian",
    "tier": "III",
    "image": "M1A1-AIM-TUSK.jpg",
    "description": "Upgraded American Abrams tank featuring urban survival kit, enhanced optics, reinforced armor, and improved situational awareness systems.",
    "stats": { "health": 42300, "speed": 69, "armor": "900mm", "agility": 34 },
    "weapons": [
    { "name": "KE-W APFSDS", "type": "Main Gun", "damage": 11270, "penetration": 630, "reload": 5 },
    { "name": "M830 HEAT", "type": "Main Gun", "damage": 12230, "penetration": 600, "reload": 5 },
    { "name": "M830A1 HEAT", "type": "Main Gun", "damage": 12340, "penetration": 650, "reload": 5 },
    { "name": "KE-W-A2 APFSDS", "type": "Main Gun", "damage": 11470, "penetration": 730, "reload": 5 },
  ]
  },
  {
    "id": 414,
    "name": "M60A3 TTS",
    "type": "Main Battle Tank",
    "faction": "American",
    "tier": "III",
    "image": "M60A3-TTS.jpg",
    "description": "The M60A3 TTS is a Cold War–era U.S. MBT featuring advanced thermal imaging fire control system.",
    "stats": { "health": 42100, "speed": 52, "armor": "400", "agility": 38 },
    "weapons": [

      { "name": "M392A2 APDS", "type": "Main Gun", "damage": 9860, "penetration": 372 },
      { "name": "M393 HESH", "type": "Main Gun", "damage": 10340, "penetration": 127 },
      { "name": "M456 HEAT", "type": "Main Gun", "damage": 10890, "penetration": 400 },
      { "name": "M833 APFSDS", "type": "Main Gun", "damage": 9860, "penetration": 495 },
      
    ]
  },

  {
    "id": 415,
    "name": "AMX-10RC",
    "type": "Main Battle Tank",
    "faction": "French",
    "tier": "III",
    "image": "AMX-10RC.jpg",
    "description": "Wheeled French reconnaissance tank armed with 105mm gun.",
    "stats": { "health": 0, "speed": 0, "armor": "0", "agility": 0 },
    "weapons": []
  },

  {
    "id": 416,
    "name": "Merkava Mk.3",
    "type": "Main Battle Tank",
    "faction": "Israeli",
    "tier": "III",
    "description": "An Israeli MBT featuring modular armor, advanced fire control, 120mm gun.",
    "image": "Merkava-Mk.3.jpg",
    "stats": { "health": 42100, "speed": 60, "armor": "420", "agility": 34 },
    "weapons": [
      { "name": "M325 HEAT", "type": "Main Gun", "damage": 12100, "penetration": 480 },
      { "name": "M339 HEI", "type": "Main Gun", "damage": 4900, "penetration": 85 },
      { "name": "M322 APFSDS", "type": "Main Gun", "damage": 11310, "penetration": 589 },
      { "name": "Soltam", "type": "Morter", "damage": 2970, "penetration": 125, "reload": 4 }
    ]
  },

  {
    "id": 417,
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
    "id": 418,
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
    "id": 419,
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
    "id": 420,
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
    "id": 421,
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
    "id": 422,
    "name": "2S38 Derivation",
    "type": "Anti-Air",
    "faction": "Russian",
    "tier": "III",
    "image": "2S38.jpg",
    "description": "Advanced Russian combat vehicle equipped with a 57mm autocannon, capable of engaging aerial, infantry, and armored targets.",
    "stats": { "health": 0, "speed": 0, "armor": "0mm", "agility": 0 },
    "weapons": []
  },

  {
    "id": 423,
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
    "id": 424,
    "name": "PGZ-09",
    "type": "Anti-Air",
    "faction": "Chinese",
    "tier": "III",
    "image": "PGZ-09.jpg",
    "description": "Tracked Chinese self-propelled AA, twin 35mm guns.",
    "stats": { "health": 25500, "speed": 60, "armor": "30mm", "agility": 30 },
    "weapons": [
      { "name": "DKG01A", "type": "Main Gun", "damage": 270, "penetration": 59 },
      { "name": "DKP01A", "type": "Main Gun", "damage": 500, "penetration": 75 },
      { "name": "DM23", "type": "Main Gun", "damage": 530, "penetration": 127 },
      { "name": "PMD062", "type": "Main Gun", "damage": 290, "penetration": 59 }
    ]
  },

  {
    "id": 425,
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
    "id": 426,
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
    "id": 427,
    "name": "XM975",
    "type": "Anti-Air",
    "faction": "American",
    "tier": "III",
    "image": "XM975.jpg",
    "description": "US SPAAG with Vulcan cannon and Stinger missiles.",
    "stats": { "health": 23500, "speed": 57, "armor": "40mm", "agility": 30 },
    "weapons": [
      { "name": "SAM Rokand", "type": "Missile", "damage": 8910, "penetration": 85, "reload": 6 }
    ]
  },

  {
    "id": 428,
    "name": "AFT-10",
    "type": "Missile Carrier",
    "faction": "Chinese",
    "tier": "III",
    "image": "AFT-10.jpg",
    "description": "Modern armored vehicle with HJ-10 Missiles.",
    "stats": { "health": 26000, "speed": 70, "armor": "30mm", "agility": 40 },
    "weapons": [
      { "name": "HJ-10", "type": "Missile", "damage": 12558, "penetration": 1400, "reload": 13 }
    ]
  },

  {
    "id": 429,
    "name": "TAN-SAM-1C",
    "type": "Anti-Air",
    "faction": "Japanese",
    "tier": "III",
    "image": "TAN-SAM-1C.jpg",
    "description": "Japanese short-range mobile SAM system.",
    "stats": { "health": 25400, "speed": 80, "armor": "8mm", "agility": 0 },
    "weapons": [
      { "name": "P 4001 HEI", "type": "Missile", "damage": 5070, "penetration": 68, "reload": 8 },
      { "name": "P 4001B HEI", "type": "Missile", "damage": 5630, "penetration": 68, "reload": 8 }
    ]
  },

  {
    "id": 430,
    "name": "M113 Hellfire",
    "type": "Missile Carrier",
    "faction": "American",
    "tier": "III",
    "image": "M113-Hellfire.jpg",
    "description": "M113 variant carrying AGM-114 Hellfire missiles.",
    "stats": { "health": 24500, "speed": 62, "armor": "25mm", "agility": 35 },
    "weapons": [
      { "name": "ATGMs ARL", "type": "Missile", "damage": 9000, "penetration": 950, "reload": 10 },
      { "name": "ATGMs Laser", "type": "Missile", "damage": 10900, "penetration": 1000, "reload": 10 }
    ]
  },

  {
    "id": 431,
    "name": "9A52-2 Smerch",
    "type": "MLRS",
    "faction": "Russian",
    "tier": "III",
    "image": "9A52-2-Smerch.jpg",
    "description": "Heavy Russian MLRS with 300mm rockets.",
    "stats": { "health": 26000, "speed": 60, "armor": "25mm", "agility": 23 },
    "weapons": [
      { "name": "9M542 HE", "type": "Missile", "damage": 18000, "penetration": 120, "reload": 16 },
      { "name": "9M530 HESH", "type": "Missile", "damage": 16600, "penetration": 300, "reload": 16 },
      { "name": "9M55K5 CH", "type": "Missile", "damage": 17100, "penetration": 460, "reload": 16 }
    ]
  },

  {
    "id": 432,
    "name": "Type 89 MLRS",
    "type": "MLRS",
    "faction": "Chinese",
    "tier": "III",
    "image": "Type-89-MLRS.jpg",
    "description": "Chinese MLRS system.",
    "stats": { "health": 24500, "speed": 55, "armor": "25mm", "agility": 36 },
    "weapons": [
      { "name": "Type 81 FSBS", "type": "Missile", "damage": 11900, "penetration": 165, "reload": 20 },
      { "name": "Type 81 FFBE", "type": "Missile", "damage": 10600, "penetration": 220, "reload": 20 },
      { "name": "Type 81", "type": "Missile", "damage": 9350, "penetration": 260, "reload": 20 }
    ]
  },

  {
    "id": 433,
    "name": "Type 75 MLRS",
    "type": "MLRS",
    "faction": "Japanese",
    "tier": "III",
    "image": "Type-75-MLRS.jpg",
    "description": "Japanese 300mm MLRS.",
    "stats": { "health": 22800, "speed": 51, "armor": "30mm", "agility": 35.5 },
    "weapons": [
      { "name": "Type 75 HE", "type": "Missile", "damage": 5700, "penetration": 85, "reload": 30 },
      { "name": "Type 75 mod 2 HEAT", "type": "Missile", "damage": 10300, "penetration": 350, "reload": 30 }
    ]
  },

  {
    "id": 434,
    "name": "AFT-09",
    "type": "Missile Carrier",
    "faction": "Chinese",
    "tier": "III",
    "image": "AFT-09.jpg",
    "description": "Mobile missile tank with guided missiles.",
    "stats": { "health": 23000, "speed": 96, "armor": "30mm", "agility": 40 },
    "weapons": [
      { "name": "ATGM HJ-9", "type": "Missile", "damage": 10192, "penetration": 1200, "reload": 6 }
    ]
  },

  {
    "id": 435,
    "name": "LAV-600",
    "type": "Tank Destroyer",
    "faction": "American",
    "tier": "III",
    "image": "LAV-600.jpg",
    "description": "Armored wheeled vehicle with strong firepower.",
    "stats": { "health": 24000, "speed": 95, "armor": "20mm", "agility": 27 },
    "weapons": [
      { "name": "M392", "type": "Main Gun", "damage": 8295, "penetration": 350 },
      { "name": "M393", "type": "Main Gun", "damage": 11800, "penetration": 127 },
      { "name": "M456", "type": "Main Gun", "damage": 9800, "penetration": 400 },
      { "name": "M833", "type": "Main Gun", "damage": 9900, "penetration": 472 }
    ]
  },

  {
    "id": 436,
    "name": "HSTV-L",
    "type": "Light Tank",
    "faction": "American",
    "tier": "III",
    "image": "HSTV-L.jpg",
    "description": "A lightweight prototype tank with high mobility.",
    "stats": { "health": 26000, "speed": 84, "armor": "47mm", "agility": 40 },
    "weapons": [
      { "name": "M833", "type": "Main Gun", "damage": 9900, "penetration": 472 },
      { "name": "M456 HEAT", "type": "Main Gun", "damage": 8900, "penetration": 400 },
      { "name": "M496 APFSDS", "type": "Main Gun", "damage": 10000, "penetration": 480 }
    ]
  },
  {
    "id": 437,
    "name": "Pandur II",
    "type": "Light Tank",
    "faction": "Austrian",
    "tier": "III",
    "image": "PandurII.jpg",
    "description": "Modern wheeled armored vehicle designed for troop transport, modular weapon systems, reconnaissance roles, and rapid battlefield mobility.",
    "stats": { "health": 0, "speed": 0, "armor": "0mm", "agility": 0 },
    "weapons": []
  },

  {
    "id": 438,
    "name": "K21 KNIFV",
    "type": "Light Tank",
    "faction": "SouthKorean",
    "tier": "III",
    "image": "K21-KNIFV.jpg",
    "description": "South Korean infantry fighting vehicle with strong firepower.",
    "stats": { "health": 35900, "speed": 76, "armor": 50, "agility": 42 },
    "weapons": [
      { "name": "K237 APFSDS", "type": "Main Gun", "damage": 1490, "penetration": 200 },
      { "name": "K236 HEI", "type": "Main Gun", "damage": 770, "penetration": 74 },
      { "name": "K219 AP", "type": "Main Gun", "damage": 1340, "penetration": 147 },
      { "name": "K216 HEI", "type": "Main Gun", "damage": 690, "penetration": 68 },
      { "name": "Spike-LR2", "type": "Missile", "damage": 10090, "penetration": 900, "reload": 10 }
    ]
  },
  {
    "id": 439,
    "name": "Rookiat MTTD",
    "type": "Light Tank",
    "faction": "British",
    "tier": "III",
    "image": "Rookiat-MTTD.jpg",
    "description": "The Rooikat MTTD is a fast, wheeled tank destroyer with strong firepower.",
    "stats": { "health": 27200, "speed": 110, "armor": "40mm", "agility": 28 },
    "weapons": [
      { "name": "DM23", "type": "Main Gun", "damage": 8911, "penetration": 337 },
      { "name": "DM33", "type": "Main Gun", "damage": 10060, "penetration": 508 },
      { "name": "DM12", "type": "Main Gun", "damage": 12100, "penetration": 480 },
      { "name": "DM512", "type": "Main Gun", "damage": 10210, "penetration": 127 }
    ]
  },
  {
    "id": 440,
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
    "id": 441,
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
    "id": 442,
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
    "id": 443,
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
    "id": 444,
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
    "id": 445,
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
    "id": 446,
    "name": "Strf 9040 BILL",
    "type": "Light Tank",
    "faction": "Sweden",
    "tier": "III",
    "image": "Strf-9040-BILL.jpg",
    "description": "Swedish light tank with 40 mm autocannon and ATGMs, versatile but lightly armored, fast, lethal.",
    "stats": { "health": 26300, "speed": 80, "armor": "47mm", "agility": 36 },
    "weapons": [
      { "name": "Rbs 56", "type": "Missile", "damage": 7850, "penetration": 510, "reload": 10 },
      { "name": "Slsgr m/90 HEI", "type": "Main Gun", "damage": 640, "penetration": 61 },
      { "name": "Slpprj m/90 APSFSDS", "type": "Main Gun", "damage": 1370, "penetration": 173 },
      { "name": "Slpprj m/01 APFSDS", "type": "Main Gun", "damage": 1380, "penetration": 239 }
    ]
  },
  {
    "id": 447,
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
      { "name": "x4 AGM-114 Hellfire", "type": "Air-to-Ground Missile", "damage": 9000, "penetration": 950, "reload": 30 },
      { "name": "x4 AGM-169 JAGM", "type": "Air-to-Ground Missile", "damage": 9800, "penetration": 1200, "reload": 30 },
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
      { "name": "x4 AGM-114 Hellfire", "type": "Air-to-Ground Missile", "damage": 9000, "penetration": 950, "reload": 30 },
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
    "name": "CSH-2 Rooivalk",
    "type": "Helicopter",
    "faction": "South-African",
    "tier": "III",
    "image": "Rooivalk.jpg",
    "description": "A South African attack helicopter, highly maneuverable, armed with cannons, rockets, and missiles, designed for close air support and battlefield reconnaissance.",
    "stats": { "health": 24800, "speed": 310, "verticalSpeed": 32, "agility": 70 },
    "weapons": [
      { "name": "FZ233", "type": "Cruise Missile", "damage": 4600, "penetration": 290, "reload": 10 },
      { "name": "FZ275", "type": "Guided Rocket", "damage": 4600, "penetration": 290, "reload": 16 },
      { "name": "FZ231", "type": "Guided Rocket", "damage": 4600, "penetration": 290, "reload": 26 },
      { "name": "Mistral x2", "type": "Guided Rocket", "damage": 4800, "penetration": 38, "reload": 11 },
      { "name": "V3E A-Darter", "type": "Guided Rocket", "damage": 6400, "penetration": 63, "reload": 14 },
      { "name": "FASGW-ANL", "type": "Guided Rocket", "damage": 10300, "penetration": 350, "reload": 38 },
      { "name": "Brimstone", "type": "Air-to-Ground Missile", "damage": 8100, "penetration": 800, "reload": 20 },
      { "name": "HOT-3", "type": "Guided Rocket", "damage": 9820, "penetration": 1300, "reload": 23 },
      { "name": "x4 AGM-114 Hellfire", "type": "Air-to-Ground Missile", "damage": 9900, "penetration": 1200, "reload": 30 },
      { "name": "ZT-6 Mokopa", "type": "Guided Rocket", "damage": 10010, "penetration": 1350, "reload": 22 },
     
    ],
    "guns": []
  },
  {
    "id": 506,
    "name": "Z-9WA Harbin",
    "type": "Helicopter",
    "faction": "Chinese",
    "tier": "III",
    "image": "Z-9WA-Harbin.jpg",
    "description": "Heavily armed Z-9 variant with multi-mount capability (x4 mounts for some missiles in MWT).",
    "stats": { "health": 17800, "speed": 320, "verticalSpeed": 22.2, "agility": 60 },
    "weapons": [
      { "name": "4x HJ-8E", "type": "Anti-Tank Missile", "damage": 9890, "penetration": 480, "reload": 25 },
      { "name": "Type 57-1", "type": "Rocket Pod", "damage": 3700, "penetration": 200, "reload": 15 },
      { "name": "TY-90", "type": "Short-Range AAM", "damage": 3300, "penetration": 28, "reload": 29 },
      { "name": "FS-70", "type": "Rocket Pod", "damage": 4200, "penetration": 290, "reload": 20 },
      { "name": "TY-90", "type": "Air-to-Ground Missile", "damage": 6400, "penetration": 320, "reload": 40 },
      { "name": "FS-70", "type": "Rocket Pod", "damage": 4200, "penetration": 290, "reload": 20 },
      { "name": "4x AKD-9", "type": "Air-to-Ground Missile", "damage": 8000, "penetration": 800, "reload": 15 },
      { "name": "4x AKD-10", "type": "Air-to-Ground Missile", "damage": 8600, "penetration": 1400, "reload": 25 }
    ],
    "guns": [
      { "name": "QJK99(12.7mm)", "type": "Heavy MG", "damage": 50, "penetration": 40, "reload": 100 }
    ]
  },
  {
    "id": 507,
    "name": "Z-20 Harbin",
    "type": "Helicopter",
    "faction": "Chinese",
    "tier": "III",
    "image": "Z-20-Harbin.jpg",
    "description": "Modern multi-role Chinese helicopter with stub wings; carries Chinese ATGMs and rockets in MWT.",
    "stats": { "health": 18400, "speed": 280, "verticalSpeed": 16.7, "agility": 55 },
    "weapons": [
      { "name": "4x HJ-10", "type": "Anti-Tank Missile", "damage": 13800, "penetration": 1400, "reload": 30 },
      { "name": "Type 57-1", "type": "Rocket Pod", "damage": 3700, "penetration": 200, "reload": 15 },
      { "name": "TY-90", "type": "Short-Range AAM", "damage": 3300, "penetration": 28, "reload": 29 },
      { "name": "Type 90", "type": "Air-to-Ground Missile", "damage": 6400, "penetration": 320, "reload": 40 },
      { "name": "FT-9", "type": "Air-to-Ground Missile", "damage": 10800, "penetration": 70, "reload": 20 },
      { "name": "2x HJ-8E", "type": "Anti-Tank Missile", "damage": 9890, "penetration": 480, "reload": 15 },
      { "name": "AG-300M", "type": "Air-to-Ground Missile", "damage": 9200, "penetration": 600, "reload": 20 },
      { "name": "CM-502KG", "type": "Air-to-Ground Missile", "damage": 7800, "penetration": 1000, "reload": 28 }
    ],
    "guns": [
      { "name": "CS-LM12(7.62mm)", "type": "MG", "damage": 25, "penetration": 20, "reload": 80 }
    ]
  },
  {
    "id": 508,
    "name": "EC-665 Tiger HAP",
    "type": "Helicopter",
    "faction": "German",
    "tier": "III",
    "image": "EC-665-Tiger-HAP.jpg",
    "description": "The EC-665 Tiger HAP is a maneuverable attack helicopter designed for fire support and escort, featuring a 30mm chin-mounted cannon.",
   stats: { health: 25700, speed: 322, verticalSpeed: 21.4, agility: 45},
    "weapons": [
      
      { "name": "Mistral x2", "type": "Air-to-Ground Missile", "damage": 3100, "penetration": 27, "reload": 22 },
      { "name": "FZ231", "type": "Air-to-Ground Missile", "damage": 5200, "penetration": 128, "reload": 26 },
      { "name": "FZ233", "type": "Air-to-Ground Missile", "damage": 5200, "penetration": 128, "reload": 10 },
      { "name": "Telson 12", "type": "Air-to-Ground Missile", "damage": 4100, "penetration": 300, "reload": 26 },
      { "name": "Telson 22", "type": "Air-to-Ground Missile", "damage": 4100, "penetration": 300, "reload": 26 },
      { "name": "APKWS", "type": "Air-to-Ground Missile", "damage": 5400, "penetration": 140, "reload": 20 },
      { "name": "M621", "type": "Air-to-Ground Missile", "damage": 200, "penetration": 53, "reload": 20 },
      { "name": "HOT-3", "type": "Air-to-Ground Missile", "damage": 9820, "penetration": 1300, "reload": 22 },
      { "name": "x4 AGM-114 Hellfire", "type": "Air-to-Ground Missile", "damage": 9900, "penetration": 1200, "reload": 30 },
      { "name": "ADS STARSTREAK", "type": "Air-to-Ground Missile", "damage": 7300, "penetration": 50, "reload": 15 },
    
    ]
  },
  {
    "id": 509,
    "name": "MH-60L DAP",
    "type": "Helicopter",
    "faction": "American",
    "tier": "III",
    "image": "MH-60L-DAP.jpg",
    "description": "Armed MH-60 variant (DAP) with a flexible loadout for rockets, ATGMs and air-to-air missiles.",
    "stats": { "health": 20020, "speed": 209, "verticalSpeed": 12, "agility": 34 },
    "weapons": [
      
      { "name": "LAU-61", "type": "Rocket Pod", "damage": 4100, "penetration": 290, "reload": 20 },
      { "name": "AGR-20 BLR", "type": "Rocket Pod", "damage": 5200, "penetration": 128, "reload": 20 },
      { "name": "LAU-68", "type": "Rocket Pod", "damage": 4300, "penetration": 290, "reload": 20 },
      { "name": "AIM-9 Sidewinder", "type": "Short-Range AAM", "damage": 5700, "penetration": 45, "reload": 15 },
      { "name": "x4 AGM 169-JAGM", "type": "Air-to-Ground Missile", "damage": 9800, "penetration": 1200, "reload": 30 },
      { "name": "x4 AGM-114 Hellfire", "type": "Air-to-Ground Missile", "damage": 9000, "penetration": 950, "reload": 30 },
      { "name": "AIM-92", "type": "Short-Range AAM", "damage": 4700, "penetration": 35, "reload": 10 },
      { "name": "ADS Starstreak", "type": "Air-to-Ground Missile", "damage": 7300, "penetration": 50, "reload": 15 }
    ],
    "guns": [
      { "name": "M230(30mm)", "type": "Autocannon", "damage": 90, "penetration": 85, "reload": 300 },
      { "name": "M134 minigun(7.62mm)", "type": "Rotary Gun", "damage": 25, "penetration": 20, "reload": 80 }
    ]
  },
  {
    "id": 510,
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
      { "name": "x4 AGM-169 JAGM", "type": "Air-to-Ground Missile", "damage": 9800, "penetration": 1200, "reload": 30 },
      { "name": "x4 AGM-114 Hellfire", "type": "Air-to-Ground Missile", "damage": 9000, "penetration": 950, "reload": 30 },
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
    "id": 511,
    "name": "RAH-66 Comanche",
    "type": "Helicopter",
    "faction": "American",
    "tier": "III",
    "image": "RAH-66-Comanche.jpg",
    "description": "A stealthy, agile U.S. scout/attack helicopter prototype designed for reconnaissance, low-observable operations, advanced sensors, and precision engagement, cancelled before full production.",
    "stats": { "health": 22220, "speed": 410, "verticalSpeed": 36, "agility": 70 },
    "weapons": [
      { "name": "LAND-LGR4", "type": "Air-to-Ground Missile", "damage": 4300, "penetration": 290, "reload": 20 },
      { "name": "AGM-114 Hellfire", "type": "Air-to-Ground Missile", "damage": 9000, "penetration": 950, "reload": 10 },
      { "name": "FIM-92 Stinger", "type": "Air-to-Ground Missile", "damage": 4700, "penetration": 35, "reload": 10 },
      { "name": "APKWS", "type": "Air-to-Ground Missile", "damage": 5400, "penetration": 140, "reload": 20 },
      { "name": "FASGWL", "type": "Air-to-Ground Missile", "damage": 5300, "penetration": 250, "reload": 20 },
      { "name": "LAU-150", "type": "Air-to-Ground Missile", "damage": 7800, "penetration": 600, "reload": 40 },
      { "name": "FIM-92 Stinger", "type": "Air-to-Ground Missile", "damage": 8200, "penetration": 800, "reload": 20 },
      { "name": "AGM-65 Maverick", "type": "Air-to-Ground Missile", "damage": 11000, "penetration": 830, "reload": 22 },
      { "name": "x4 AGM-114 Hellfire", "type": "Air-to-Ground Missile", "damage": 9900, "penetration": 1200, "reload": 30 },
      { "name": "ADS STARSTREAK", "type": "Air-to-Ground Missile", "damage": 7300, "penetration": 50, "reload": 15 },
    
      
    ],
   
    
  },
  {
    "id": 512,
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
    id: 513,
    name: "Mi-171SH",
    type: "Helicopter",
    faction: "Chinese",
    tier: "II",
    image: "Mi-171SH.jpg",
    description: "Modernized transport helicopter with enhanced combat capabilities and weapon systems.",
    stats: { health: 17500, speed: 210, verticalSpeed: 48, agility: 45 },
    weapons: [
      { name: "Type 57-1", type: "Rocket Pod", damage: 3700, penetration: 200, reload: 15 },
      { name: "TY-90", type: "Short-Range AAM", damage: 3300, penetration: 28, reload: 29 },
      { name: "2x AKD-9", type: "Air-to-Ground Missile", damage: 8000, penetration: 800, reload: 15 },
      { name: "Type 90", type: "Air-to-Ground Missile", damage: 6400, penetration: 320, reload: 40 },
      { name: "2x HJ-8E", type: "Anti-Tank Missile", damage: 9890, penetration: 480, reload: 15 },
      { name: "FS-70", type: "Rocket Pod", damage: 4200, penetration: 290, reload: 20 },
      { name: "SW6-Drone", type: "Loitering Munition", damage: 7800, penetration: 800, reload: 16 },
      { name: "TL-6", type: "Air-to-Ground Missile", damage: 19400, penetration: 830, reload: 21 },
      { name: "4x AKD-10", type: "Air-to-Ground Missile", damage: 8600, penetration: 1400, reload: 20 },
      { name: "UPK-23-250", type: "Air-to-Ground Missile", damage: 230, penetration: 72, reload: 20 },
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
    "id": 600,
    "name": "AV-8B Harrier II",
    "type": "Fighter Jet",
    "faction": "American",
    "tier": "II",
    "description": "Vertical/Short Takeoff and Landing (V/STOL) attack aircraft with excellent ground support capabilities.",
    "image": "AV-8B-Harrier.jpg",
    "stats": { "health": 18600, "speed": 630, "afterburnerSpeed": 960, "agility": 34 },
    "weapons": [
      { "name": "LAU-61", "type": "Rocket Pod", "damage": 4100, "penetration": 290, "reload": 20 },
      { "name": "LAU-10x3", "type": "Rocket Pod", "damage": 7400, "penetration": 500, "reload": 30 },
      { "name": "GBU-12 Paveway II", "type": "Guided Bomb", "damage": 18590, "penetration": 120, "reload": 30 },
      { "name": "MK-82", "type": "Bomb", "damage": 14300, "penetration": 120, "reload": 40 },
      { "name": "AGM-62A Walleye", "type": "Air-to-Surface Missile", "damage": 17600, "penetration": 240, "reload": 28 },
      { "name": "AGM-65 Maverick", "type": "Air-to-Surface Missile", "damage": 11000, "penetration": 830, "reload": 22 },
      { "name": "AIM-132 ASRAAM", "type": "Short-Range AAM", "damage": 5200, "penetration": 65, "reload": 15 },
      { "name": "AIM-120 AMRAAM", "type": "Medium-Range AAM", "damage": 11300, "penetration": 60, "reload": 20 }
    ]
  },
  {
    "id": 601,
    "name": "Alpha Jet A",
    "type": "Fighter Jet",
    "faction": "German",
    "tier": "II",
    "description": "Light attack aircraft and advanced trainer with excellent maneuverability.",
    "image": "Alpha-Jet.jpg",
    "stats": { "health": 14200, "speed": 700, "afterburnerSpeed": 1020, "agility": 33 },
    "weapons": [
      { "name": "SUU-20", "type": "Bomb Cluster", "damage": 14300, "penetration": 120, "reload": 40 },
      { "name": "LAU-51", "type": "Rocket Pod", "damage": 4100, "penetration": 290, "reload": 20 },
      { "name": "GBU-38 JDAM", "type": "Guided Bomb", "damage": 14300, "penetration": 120, "reload": 25 },
      { "name": "AIM-132 ASRAAM", "type": "Short-Range AAM", "damage": 5200, "penetration": 65, "reload": 15 },
      { "name": "AGM-65 Maverick", "type": "Air-to-Surface Missile", "damage": 11000, "penetration": 830, "reload": 22 },
      { "name": "AIM-120 AMRAAM", "type": "Medium-Range AAM", "damage": 11300, "penetration": 60, "reload": 20 }
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
    "stats": { "health": 21400, "speed": 540, "afterburnerSpeed": 2240, "agility": 52 },
    "weapons": [
      { "name": "GBU-38 JDAM", "type": "Guided Bomb", "damage": 14300, "penetration": 120, "reload": 25 },
      { "name": "GBU-31 JDAM", "type": "Guided Bomb", "damage": 19400, "penetration": 360, "reload": 40 },
      { "name": "GBU-12 Paveway II", "type": "Guided Bomb", "damage": 18590, "penetration": 120, "reload": 30 },
      { "name": "AGM-65 Maverick", "type": "Air-to-Surface Missile", "damage": 11000, "penetration": 830, "reload": 22 },
      { "name": "AIM-7 Sparrow", "type": "Medium-Range AAM", "damage": 6200, "penetration": 65, "reload": 20 },
      { "name": "AIM-54 Phoenix", "type": "Long-Range AAM", "damage": 8600, "penetration": 100, "reload": 30 },
      { "name": "AIM-132 ASRAAM", "type": "Long-Range AAM", "damage": 5200, "penetration": 65, "reload": 15 }
    ]
  },
  {
    "id": 603,
    "name": "F-5E Tiger II",
    "type": "Fighter Jet",
    "faction": "Mexican",
    "tier": "II",
    "description": "A nimble, supersonic fighter featuring twin J85 engines, 20 mm cannons, Sidewinders, and versatile bomb loadouts.",
    "image": "F-5E-Tiger-II.jpg",
    "stats": { "health": 17000, "speed": 760, "afterburnerSpeed": 1570, "agility": 40 },
    "weapons": [
      { "name": "GBU-12 Paveway II", "type": "Guided Bomb", "damage": 16200, "penetration": 139, "reload": 25 },
      { "name": "MK-82", "type": "Bomb", "damage": 14300, "penetration": 120, "reload": 25 },
      { "name": "MK-83", "type": "Bomb", "damage": 15700, "penetration": 200, "reload": 35 },
      { "name": "LAU-51", "type": "Rocket Pod", "damage": 4600, "penetration": 290, "reload": 26 },
      { "name": "LAU-61", "type": "Rocket Pod", "damage": 4100, "penetration": 290, "reload": 20 },
      { "name": "GAU-13A", "type": "Rocket Pod", "damage": 560, "penetration": 98, "reload": 20 },
      { "name": "AGM-65 Maverick", "type": "Air-to-Surface Missile", "damage": 11000, "penetration": 830, "reload": 22 },
      { "name": "AIM-9 Sidewinder", "type": "Short-Range AAM", "damage": 5700, "penetration": 45, "reload": 15 },
      { "name": "AIM-120 AMRAAM", "type": "Medium-Range AAM", "damage": 11300, "penetration": 80, "reload": 20 }
    ]
},
  {
    "id": 604,
    "name": "J-10 Chengdu",
    "type": "Fighter Jet",
    "faction": "Chinese",
    "tier": "II",
    "description": "Single-engine, multirole fighter with delta wing configuration and advanced avionics.",
    "image": "J-10-Chengdu.jpg",
    "stats": { "health": 19900, "speed": 990, "afterburnerSpeed": 1990, "agility": 49 },
    "weapons": [
      { "name": "Type 2(100)", "type": "Bomb", "damage": 14000, "penetration": 110, "reload": 30 },
      { "name": "Type 90", "type": "Short-Range AAM", "damage": 6400, "penetration": 320, "reload": 40 },
      { "name": "TL-20", "type": "Guided Bomb", "damage": 12400, "penetration": 143, "reload": 25 },
      { "name": "AR-1", "type": "Guided Bomb", "damage": 7400, "penetration": 1000, "reload": 16 },
      { "name": "Type 3", "type": "Bomb", "damage": 16000, "penetration": 210, "reload": 35 },
      { "name": "LT-2", "type": "Air-to-Surface Missile", "damage": 16200, "penetration": 250, "reload": 38 },
      { "name": "PL-2", "type": "Short-Range AAM", "damage": 5800, "penetration": 40, "reload": 15 },
      { "name": "PL-5", "type": "Short-Range AAM", "damage": 7100, "penetration": 40, "reload": 15 },
      { "name": "PL-7", "type": "Short-Range AAM", "damage": 6500, "penetration": 50, "reload": 20 }
    ]
  },
  {
    "id": 605,
    "name": "MiG-31BM Foxhound",
    "type": "Fighter Jet",
    "faction": "Russian",
    "tier": "II",
    "image": "MiG-31BM-Foxhound.jpg",
    "description": "High-speed interceptor designed for long-range air defense missions.",
    "stats": { "health": 19700, "speed": 950, "afterburnerSpeed": 2700, "agility": 37 },
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
    "id": 606,
    "name": "Q-5A Nanchang",
    "type": "Fighter Jet",
    "faction": "Chinese",
    "tier": "II",
    "image": "Q-5A-Nanchang.jpg",
    "description": "Ground attack aircraft derived from the MiG-19, optimized for close air support.",
    "stats": { "health": 16200, "speed": 810, "afterburnerSpeed": 1090, "agility": 47 },
    "weapons": [
      { "name": "Type 2(100)", "type": "Bomb", "damage": 14000, "penetration": 110, "reload": 30 },
      { "name": "PL-2", "type": "Short-Range AAM", "damage": 6400, "penetration": 320, "reload": 40 },
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
    "id": 607,
    "name": "Xian JH-7A",
    "type": "Fighter Jet",
    "faction": "Chinese",
    "tier": "II",
    "image": "Xian-JH-7A.jpg",
    "description": "A twin-engine Chinese strike aircraft optimized for low-level penetration, precision munitions delivery, maritime attack roles, and versatile all-weather operational capability.",
    "stats": { "health": 28600, "speed": 810, "afterburnerSpeed": 1690, "agility": 52 },
    "weapons": [
      { "name": "Type 1", "type": "Bomb", "damage": 15100, "penetration": 120, "reload": 32 },
      { "name": "PL-2", "type": "Short-Range AAM", "damage": 5900, "penetration": 35, "reload": 13 },
      { "name": "PL-5", "type": "Short-Range AAM", "damage": 7200, "penetration": 40, "reload": 16 },
      { "name": "PL-7", "type": "Short-Range AAM", "damage": 6100, "penetration": 50, "reload": 14 },
      { "name": "PL-10", "type": "Short-Range AAM", "damage": 7400, "penetration": 60, "reload": 16 },
      { "name": "Type 90", "type": "Short-Range AAM", "damage": 6400, "penetration": 320, "reload": 40 },
      { "name": "Type 130", "type": "Air-to-Surface Missile", "damage": 6900, "penetration": 450, "reload": 40 },
      { "name": "TL-20", "type": "Air-to-Surface Missile", "damage": 12400, "penetration": 143, "reload": 25 },
      { "name": "LS-6-250", "type": "Air-to-Surface Missile", "damage": 17300, "penetration": 300, "reload": 40 }
    ]
  },
  {
    "id": 608,
    "name": "Su-24M",
    "type": "Fighter Jet",
    "faction": "Russian",
    "tier": "II",
    "description": "Variable-sweep wing tactical bomber designed for all-weather ground attack missions.",
    "image": "Su-24M.jpg",
    "stats": { "health": 24200, "speed": 720, "afterburnerSpeed": 2317, "agility": 68 },
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
    "id": 609,
    "name": "F-4E Phantom",
    "type": "Fighter Jet",
    "faction": "American",
    "tier": "II",
    "description": "Legendary multi-role fighter with proven combat record and versatile weapon systems.",
    "image": "F-4E-Phantom.jpg",
    "stats": { "health": 19300, "speed": 840, "afterburnerSpeed": 1910, "agility": 35 },
    "weapons": [
      { "name": "LAU-61", "type": "Rocket Pod", "damage": 4100, "penetration": 290, "reload": 20 },
      { "name": "LAU-10x3", "type": "Rocket Pod", "damage": 7400, "penetration": 500, "reload": 30 },
      { "name": "AGM-65 Maverick", "type": "Air-to-Surface Missile", "damage": 11000, "penetration": 830, "reload": 22 },
      { "name": "AIM-7 Sparrow", "type": "Medium-Range AAM", "damage": 6200, "penetration": 65, "reload": 20 },
      { "name": "AGM-12B Bullpup", "type": "Air-to-Surface Missile", "damage": 11500, "penetration": 600, "reload": 41 }
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
    "stats": { "health": 36300, "speed": 50, "armor": "93mm", "agility": 36 },
    "weapons": [
      { "name": "M392A2 APDS", "type": "Main Gun", "damage": 9860, "penetration": 372 },
      { "name": "M393 HESH", "type": "Main Gun", "damage": 10340, "penetration": 127 },
      { "name": "M456 HEAT", "type": "Main Gun", "damage": 10890, "penetration": 400 },
      { "name": "M833 APFSDS", "type": "Main Gun", "damage": 9860, "penetration": 495 },
     
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
    "type": "Tank Destroyer",
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
    "name": "ERC-90 F4 Sagaie",
    "type": "Tank Destroyer",
    "faction": "Mexican",
    "tier": "II",
    "image": "ERC-90-F4-Sagaie.jpg",
    "description": "A fast French-Designed reconnaissance vehicle with a 90 mm gun, light armor, and high mobility for Tier II combat.",
    "stats": { "health": 27500, "speed": 95, "armor": "0mm", "agility": 45 },
    "weapons": [
      { "name": "F1 HEATFS", "type": "Main Gun", "damage": 9480, "penetration": 340 },
      { "name": "CTS-90 HESH", "type": "Main Gun", "damage": 6810, "penetration": 115 },
      { "name": "OFL 90 F1 APFSDS", "type": "Machine Gun", "damage": 8760, "penetration": 380 },
      
    ]
  },
  {
    "id": 721,
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
    "id": 722,
    "name": "FV101 Scorpion-90",
    "type": "Light Tank",
    "faction": "Indonesian",
    "tier": "II",
    "image": "FV101-Scorpion-90.jpg",
    "description": "A lightweight British armored reconnaissance vehicle used by Indonesia, combining high mobility, a 90 mm gun, and effective fire support for diverse terrain operations.",
    "stats": { "health": 29700, "speed": 80, "armor": "26", "agility": 42 },
    "weapons": [
       { "name": "M625A1 HESH", "type": "Main Gun", "damage": 9180, "penetration": 102 },
       { "name": "M620A1 HEAT", "type": "Main Gun", "damage": 9450, "penetration": 250 },
       { "name": "M652A1 APFSDS", "type": "Main Gun", "damage": 8870, "penetration": 374 },
      
    ]
  },
  {
    "id": 723,
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
    "id": 724,
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
    "id": 725,
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
    "id": 726,
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
    "id": 727,
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
    "id": 728,
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
      { name: "2x AKD-10", type: "Air-to-Ground Missile", damage: 8600, penetration: 1400, reload: 20 },
      { name: "2x AKD-9", type: "Air-to-Ground Missile", damage: 8000, penetration: 800, reload: 15 },
      { name: "2x HJ-8E", type: "Anti-Tank Missile", damage: 9890, penetration: 480, reload: 15 },
      { name: "Type 90", type: "Air-to-Ground Missile", damage: 6400, penetration: 320, reload: 40 },
      { name: "TY-90", type: "Short-Range AAM", damage: 3300, penetration: 28, reload: 29 },
      { name: "QJK99", type: "Short-Range AAM", damage: 140, penetration: 35, reload: 20 },
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
      { name: "2x HJ-8E", type: "Anti-Tank Missile", damage: 9890, penetration: 480, reload: 15 },
      { name: "Type 57-1", type: "Rocket Pod", damage: 3700, penetration: 200, reload: 15 },
      { name: "TY-90", type: "Short-Range AAM", damage: 43300, penetration: 28, reload: 29 },
      { name: "2x AKD-9", type: "Air-to-Ground Missile", damage: 8000, penetration: 800, reload: 15 },
      { name: "SW6 Drone", type: "Loitering Munition", damage: 7800, penetration: 800, reload: 16 },
      { name: "TL-6", type: "Air-to-Ground Missile", damage: 19400, penetration: 830, reload: 21 },
      { name: "FS-70", type: "Rocket Pod", damage: 4200, penetration: 290, reload: 20 },
      { name: "2x AKD-10", type: "Air-to-Ground Missile", damage: 8600, penetration: 1400, reload: 20 },
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
    "type": "Light Tank",
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
    "type": "Light Tank",
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
    "type": "Light Tank",
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
    "type": "Light Tank",
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
    "type": "Light Tank",
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
    "type": "Light Tank",
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
    "type": "Light Tank",
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
    "type": "Light Tank",
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
    "type": "Light Tank",
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
    "type": "Light Tank",
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
    "type": "Light Tank",
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
  },







  {
    "id": 1000,
    "name": "HARP General Krueger",
    "type": "Main Battle Tank",
    "faction": "Pan-Spatial",
    "tier": "IV",
    "description": "Armored vehicle mounting a high-velocity railgun, featuring advanced targeting, reinforced chassis, precision long-range fire, and rapid strike capability.",
    "image": "HARP-General-Krueger.jpg",
    "stats": { "health": 0, "speed": 0, "armor": "0", "agility": 0 },
    "weapons": [
      
    ]
  },
    {
    "id": 1006,
    "name": "Al Kafil-1",
    "type": "Main Battle Tank",
    "faction": "Iraqi",
    "tier": "",
    "image": "AlKafil1.jpg",
    "description": "Iraqi-developed main battle tank modernization focused on upgraded firepower, protection systems, and improved battlefield effectiveness.",
    "stats": { "health": 0, "speed": 0, "armor": "0mm", "agility": 0 },
    "weapons": []
  },

  {
    "id": 1008,
    "name": "Vijayanta",
    "type": "Main Battle Tank",
    "faction": "Indian",
    "tier": "",
    "image": "Vijayanta.jpg",
    "description": "Indian main battle tank based on the Vickers design, providing balanced firepower, armor protection, and battlefield reliability.",
    "stats": { "health": 0, "speed": 0, "armor": "0mm", "agility": 0 },
    "weapons": []
  },
  
  

  

];

const getAircraftRole = (vehicle: any) => {
  if (vehicle.type !== "Fighter Jet" && vehicle.type !== "Bomber" && vehicle.type !== "Helicopter") return null

  // Check for helicopters first
  if (vehicle.type === "Helicopter") return "helicopter"

  // Specific aircraft role assignments
  if (vehicle.name.includes("J-10")) return "multi-role"
  if (vehicle.name.includes("J-50")) return "stealth"
  if (vehicle.name.includes("J-35")) return "stealth"
  if (vehicle.name.includes("MiG-41M")) return "stealth"
  if (vehicle.name.includes("X2 Shinshin")) return "stealth"
  if (vehicle.name.includes("B-Type")) return "stealth"
  if (vehicle.name.includes("F-16C Night Falcon")) return "multi-role"
  if (vehicle.name.includes("F-5E Tiger II")) return "multi-role"
  if (vehicle.name.includes("TU-222")) return "bomber"
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
      return "Stealth.png"
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
    case "SPH":
      return "/SPH.png"
    case "AA":
      return "/AA.png"
    default:
      return null
  }
}




const getFlagImage = (faction: string): string => {
  const flags: { [key: string]: string } = {
    Russian: "/russia-flag.png",
    American: "/America.png",
    Chinese: "/china-flag.png",
    German: "/germany-flag.png",
    British: "/british-flag.png",
    European: "/eu-flag.png",
    Japanese: "/japan-flag.webp",
    Turkish: "/Turkey.webp",
    Canadian: "/canada-flag.png",
    Israeli: "/israel-flag.webp",
    French: "/france-flag.png",
    Italian: "/italy-flag.png",
    Ukrainian: "/ukraine-flag.png",
    Sweden: "/Sweden.png",
    Iranian: "/Iranian-flag.png",
    Polish: "/Poland-flag.webp",
     SouthKorean: "/SouthKorea-flag.jpg",
    Indian: "/India.png",
    Pakistani: "/Pakistan.png",
    Mexican: "/Mexico.png",
    "Pan-Spatial": "/PAN-SPATIAL.jpg",
    "South-African": "/south-africa.png",
    "Venezuelan": "/venezuelan-flag.png",
    "Indonesian": "/indonesian-flag.png",
    "Swiss": "/switzerland-flag.png",
    "Austrian": "/austria-flag.png",
    "Australian": "/australia-flag.png",
    "Iraqi": "/iraq-flag.png",
    "Santa": "/santa-clause.png"
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

// StatBar component with upgrade toggles
interface StatBarProps {
  label: string;
  value: number;
  baseValue: number;
  maxValue?: number;
  upgradeLevel?: number;
  onUpgradeChange?: (level: number) => void;
}

const StatBar: React.FC<StatBarProps> = ({ 
  label, 
  value, 
  baseValue, 
  maxValue = 100, 
  upgradeLevel = 0, 
  onUpgradeChange = () => {} 
}) => {
  const upgradeColors = [
    { level: 0, color: 'bg-gray-300', textColor: 'text-gray-300' },
    { level: 1, color: 'bg-green-500', textColor: 'text-green-500' },
    { level: 2, color: 'bg-blue-600', textColor: 'text-blue-600' },
    { level: 3, color: 'bg-purple-600', textColor: 'text-purple-600' },
  ];

  const displayValue = value;
  const percentage = Math.min(100, (displayValue / maxValue) * 100);
  const basePercentage = Math.min(100, ((baseValue || 0) / maxValue) * 100);

  // Handle upgrade button click
  const handleUpgradeClick = (e: React.MouseEvent, level: number) => {
    e.stopPropagation();
    onUpgradeChange(level);
  };

  return (
    <div className="mb-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-medium text-gray-300">{label}</span>
        <span className="text-xs font-bold text-white">
          {displayValue}
          {upgradeLevel > 0 && (
            <span className={`ml-1 ${upgradeColors[upgradeLevel].textColor}`}>
              (U{upgradeLevel})
            </span>
          )}
        </span>
      </div>
      
      <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden relative">
        <div 
          className="h-full bg-gray-300 absolute top-0 left-0 transition-all duration-300"
          style={{ width: `${basePercentage}%` }}
        />
        {upgradeLevel > 0 && (
          <div 
            className={`h-full absolute top-0 left-0 transition-all duration-300 ${upgradeColors[upgradeLevel].color}`}
            style={{ 
              width: `${percentage}%`,
              left: 0,
              opacity: 0.8
            }}
          />
        )}
      </div>
      
      <div className="flex justify-between items-center mt-2">
        <div className="flex space-x-1">
          {[1, 2, 3].map((level) => (
            <button
              key={level}
              type="button"
              onClick={(e) => handleUpgradeClick(e, level)}
              className={`text-xs px-2 py-1 rounded transition-colors ${
                upgradeLevel === level
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <img 
                src={`/U${level}.png`} 
                alt={`U${level}`} 
                className="w-6 h-6" 
              />
            </button>
          ))}
        </div>
        {upgradeLevel > 0 && (
          <span className={`text-xs ${upgradeColors[upgradeLevel].textColor} font-medium`}>
            {label.toLowerCase() === 'health' 
              ? `+${upgradeLevel * 10}%`
              : `+${(upgradeLevel * 3.33).toFixed(1)}%`
            }
          </span>
        )}
      </div>
    </div>
  );
};

// ComparisonStatBar component for side-by-side stat comparison
const ComparisonStatBar = ({ 
  label, 
  value1, 
  value2, 
  maxValue,
  upgradeLevel1 = 0,
  upgradeLevel2 = 0,
  showUpgrade = false
}) => {
  const upgradeColors = [
    { level: 0, color: 'bg-gray-500', textColor: 'text-gray-500' },
    { level: 1, color: 'bg-green-500', textColor: 'text-green-500' },
    { level: 2, color: 'bg-blue-500', textColor: 'text-blue-500' },
    { level: 3, color: 'bg-purple-500', textColor: 'text-purple-500' },
  ];

  const percentage1 = Math.min(100, (value1 / maxValue) * 100);
  const percentage2 = Math.min(100, (value2 / maxValue) * 100);
  
  // Calculate upgraded values for proper percentage display
  const getUpgradedValue = (baseVal: number, level: number, isHealth: boolean) => {
    if (level === 0) return baseVal;
    if (isHealth) {
      // Health: 10%, 20%, 30% increases
      return baseVal * (1 + (level * 0.1));
    } else {
      // Other stats: 3.33%, 6.66%, 10% increases
      return baseVal * (1 + (level * 0.0333));
    }
  };
  
  const upgradedValue1 = getUpgradedValue(value1, upgradeLevel1, label.toLowerCase() === 'health');
  const upgradedValue2 = getUpgradedValue(value2, upgradeLevel2, label.toLowerCase() === 'health');
  const upgradedPercentage1 = Math.min(100, (upgradedValue1 / maxValue) * 100);
  const upgradedPercentage2 = Math.min(100, (upgradedValue2 / maxValue) * 100);
  
  const color1 = upgradeColors[upgradeLevel1] || upgradeColors[0];
  const color2 = upgradeColors[upgradeLevel2] || upgradeColors[0];

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-medium text-gray-300">{label}</span>
        <div className="flex items-center gap-2">
          <span className={`text-xs font-bold ${color1.textColor}`}>
            {value1.toLocaleString()}
            {showUpgrade && upgradeLevel1 > 0 && (
              <span className="ml-1">(U{upgradeLevel1})</span>
            )}
          </span>
          <span className="text-gray-400">/</span>
          <span className={`text-xs font-bold ${color2.textColor}`}>
            {value2.toLocaleString()}
            {showUpgrade && upgradeLevel2 > 0 && (
              <span className="ml-1">(U{upgradeLevel2})</span>
            )}
          </span>
        </div>
      </div>
      
      <div className="flex items-center h-4 w-full bg-gray-800 rounded-full overflow-hidden">
        {/* Vehicle 1 bars */}
        <div className="relative flex-1 h-full">
          <div 
            className="h-full bg-gray-600 absolute top-0 left-0 transition-all duration-300"
            style={{ width: `${percentage1}%` }}
          />
          {upgradeLevel1 > 0 && (
            <div 
              className={`h-full absolute top-0 left-0 transition-all duration-300 ${color1.color}`}
              style={{ 
                width: `${upgradedPercentage1}%`,
                left: 0,
                opacity: 0.8
              }}
            />
          )}
        </div>
        
        <div className="flex-1 h-full bg-transparent" />
        
        {/* Vehicle 2 bars */}
        <div className="relative flex-1 h-full">
          <div 
            className="h-full bg-gray-600 absolute top-0 left-0 transition-all duration-300"
            style={{ width: `${percentage2}%` }}
          />
          {upgradeLevel2 > 0 && (
            <div 
              className={`h-full absolute top-0 left-0 transition-all duration-300 ${color2.color}`}
              style={{ 
                width: `${upgradedPercentage2}%`,
                left: 0,
                opacity: 0.8
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Login Form Component - Simplified to only ask for email
const LoginForm = ({ onClose, onLogin }: { onClose: () => void; onLogin: (userData: { email: string }) => void }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        onLogin({ email });
        onClose();
      } else {
        setError("Please enter a valid email address");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="rounded-2xl w-full max-w-md p-8 relative bg-[rgba(0,15,70,1)]">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[rgba(0,81,255,1)]">Sign in</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <X size={24} />
          </button>
        </div>
        
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
            <p className="text-sm">{error}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-[rgba(0,98,255,1)]">
              Email
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                autoFocus
                required
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Submitting...' : 'Continue with Email'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Mobile device detection function
const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Armour Video Component
const ArmourVideo = ({ vehicleName }: { vehicleName?: string }) => {
  const [activeVideo, setActiveVideo] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlayerInitialized, setIsPlayerInitialized] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);
  
  // Touch event handlers for mobile progress bar
  const touchStartXRef = useRef(0);
  const touchStartTimeRef = useRef(0);

  const handleProgressTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
    touchStartTimeRef.current = Date.now();
  };

  const handleProgressTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    if (!playerRef.current || !activeVideo) return;
    
    const touch = e.touches[0];
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const progressWidth = rect.width;
    const touchedTime = Math.max(0, Math.min(touchX / progressWidth, 1)) * duration;
    
    const startTime = timeToSeconds(activeVideo.start);
    playerRef.current.seekTo(startTime + touchedTime, true);
    setCurrentTime(touchedTime);
  };

  const handleProgressTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    // Additional touch end logic if needed
  };

  // Auto-show video when vehicleName is provided
  useEffect(() => {
    console.log('ArmourVideo: Component mounted, vehicleName:', vehicleName);
    console.log('ArmourVideo: Available videos data:', vehicleVideosData);
    
    if (vehicleName) {
      console.log('ArmourVideo: Looking for video with name:', vehicleName);
      console.log('ArmourVideo: Available videos:', vehicleVideosData.default);
      
      if (!vehicleVideosData.default || !Array.isArray(vehicleVideosData.default)) {
        console.error('ArmourVideo: vehicleVideosData.default is not an array:', vehicleVideosData.default);
        return;
      }
      
      const video = vehicleVideosData.default.find((v: any) => v.name === vehicleName);
      if (video) {
        console.log('ArmourVideo: Found video:', video);
        setActiveVideo(video);
        setIsPlaying(false); // Start with paused state
        setCurrentTime(0);
      } else {
        console.error('ArmourVideo: No video found for vehicle:', vehicleName);
        console.error('ArmourVideo: Available vehicle names:', vehicleVideosData.default.map((v: any) => v.name));
      }
    }
  }, [vehicleName]);

  const handleClose = () => {
    if (playerRef.current) {
      try {
        playerRef.current.pauseVideo();
        playerRef.current.destroy();
      } catch (e) {
        console.error('Error stopping player on close:', e);
      } finally {
        playerRef.current = null;
        setIsPlayerInitialized(false);
      }
    }
    setActiveVideo(null);
    setIsPlaying(false);
  };

  const handlePause = () => {
    if (playerRef.current) {
      try {
        // Mute and pause the video, then seek to beginning
        playerRef.current.mute();
        playerRef.current.pauseVideo();
        playerRef.current.seekTo(0);
        setIsPlaying(false);
      } catch (e) {
        console.error('Error pausing video:', e);
      }
    }
  };

  // Track if we've initialized the YouTube API
  const apiInitialized = useRef(false);
  const apiReadyCallback = useRef<(() => void) | null>(null);

  // Initialize YouTube API
  useEffect(() => {
    // Only initialize once
    if (apiInitialized.current) return;
    apiInitialized.current = true;

    // Load YouTube IFrame API if not already loaded
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Set up the global callback
    (window as any).onYouTubeIframeAPIReady = () => {
      console.log('YouTube API is ready');
      if (apiReadyCallback.current) {
        apiReadyCallback.current();
      }
    };

    return () => {
      // Clean up global callback
      (window as any).onYouTubeIframeAPIReady = null;
    };
  }, []);

  // Handle player initialization when activeVideo changes
  useEffect(() => {
    if (!activeVideo || !videoRef.current) return;

    const initializePlayerIfNeeded = () => {
      // Only initialize if we don't have a player instance
      if (!playerRef.current) {
        console.log('Initializing YouTube player for:', activeVideo.name);
        initializePlayer();
      } else {
        console.log('Reusing existing YouTube player');
        // Update the existing player with new video
        const startTime = timeToSeconds(activeVideo.start);
        playerRef.current.loadVideoById({
          videoId: getVideoId(activeVideo.url),
          startSeconds: startTime,
          endSeconds: timeToSeconds(activeVideo.end)
        });
        setCurrentTime(0);
      }
    };

    // Set up the API ready callback
    apiReadyCallback.current = () => {
      if ((window as any).YT) {
        initializePlayerIfNeeded();
      }
    };

    // If YT is already loaded, initialize immediately
    if ((window as any).YT) {
      initializePlayerIfNeeded();
    }

    // Cleanup function
    return () => {
      if (playerRef.current) {
        try {
          // Mute and stop any playing audio
          playerRef.current.mute();
          playerRef.current.pauseVideo();
          playerRef.current.seekTo(0);
          
          // Small delay to ensure cleanup completes
          setTimeout(() => {
            if (playerRef.current) {
              playerRef.current.destroy();
            }
          }, 100);
        } catch (e) {
          console.error('Error cleaning up player:', e);
        } finally {
          playerRef.current = null;
          setIsPlayerInitialized(false);
        }
      }
    };
  }, [activeVideo]);

  const initializePlayer = () => {
    console.log('Initializing YouTube player');
    
    if (!activeVideo || !videoRef.current || isPlayerInitialized) {
      console.log('No active video, video ref, or player already initialized');
      return;
    }

    // Clean up existing player if it exists
    if (playerRef.current) {
      try {
        playerRef.current.destroy();
      } catch (e) {
        console.error('Error destroying existing player:', e);
      }
      playerRef.current = null;
    }

    const startTime = timeToSeconds(activeVideo.start);
    const endTime = timeToSeconds(activeVideo.end);
    const videoDuration = endTime - startTime;

    console.log('ArmourVideo: Initializing player with videoId:', getVideoId(activeVideo.url));

    setDuration(videoDuration);
    setCurrentTime(0);

    try {
      // Clean up any existing player first
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          console.error('Error destroying existing player:', e);
        }
        playerRef.current = null;
      }

      // Clean up any existing player first
      if (playerRef.current) {
        try {
          playerRef.current.pauseVideo();
          playerRef.current.destroy();
        } catch (e) {
          console.error('Error destroying existing player:', e);
        }
        playerRef.current = null;
      }

      playerRef.current = new (window as any).YT.Player(videoRef.current, {
        videoId: getVideoId(activeVideo.url),
        playerVars: {
          autoplay: 0, // Disable autoplay initially - we'll start it manually
          start: startTime,
          end: endTime,
          rel: 0,
          modestbranding: 1,
          controls: 0,
          showinfo: 0,
          iv_load_policy: 3,
          cc_load_policy: 0,
          disablekb: 1,
          fs: 1, // Enable fullscreen
          playsinline: 1, // Critical for mobile playback
          vq: 'small', // Use lower quality for better mobile performance
          enablejsapi: 1,
          origin: window.location.origin,
          widget_referrer: window.location.href,
          mobile: '1', // Optimize for mobile
          html5: 1, // Force HTML5 player
          wmode: 'opaque', // Better iOS compatibility
          allowfullscreen: 'true', // Ensure fullscreen works
      },
      events: {
        onReady: (event: any) => {
          console.log('YouTube player is ready');
          setIsPlayerInitialized(true);
          // Ensure we start with audio muted
          event.target.mute();
          
          // Mobile detection
          const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
          const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
          
          // Configure iframe
          const iframe = event.target.getIframe();
          if (iframe) {
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.position = 'absolute';
            iframe.style.top = '0';
            iframe.style.left = '0';
            iframe.style.border = 'none';
            iframe.style.borderRadius = '0';
          }
          
          // Start playing the video
          setTimeout(() => {
            try {
              const currentState = event.target.getPlayerState();
              if (currentState !== (window as any).YT.PlayerState.PLAYING) {
                event.target.playVideo();
              }
              setIsPlaying(true);
              startProgressTracking();
            } catch (error) {
              console.log('Could not autoplay video:', error);
              setIsPlaying(false);
            }
          }, 100);
        },
        onError: (event: any) => {
          console.error('ArmourVideo: Player error:', event.data);
          console.error('ArmourVideo: Error code:', event.data);
        },
        onStateChange: (event: any) => {
          console.log('ArmourVideo: Player state changed:', event.data);
          const YT = (window as any).YT;
          
          switch (event.data) {
            case YT.PlayerState.PLAYING:
              // Only update state if we're not already playing to prevent unnecessary re-renders
              if (!isPlaying) {
                setIsPlaying(true);
                startProgressTracking();
              }
              break;
              
            case YT.PlayerState.PAUSED:
              // Only update if we're not already paused
              if (isPlaying) {
                setIsPlaying(false);
              }
              break;
              
            case YT.PlayerState.ENDED:
              setIsPlaying(false);
              setCurrentTime(duration);
              // Reset to start time when video ends
              if (activeVideo) {
                const startTime = timeToSeconds(activeVideo.start);
                event.target.seekTo(startTime, true);
              }
              break;
              
            case YT.PlayerState.BUFFERING:
              // Handle buffering state if needed
              break;
              
            default:
              break;
          }
        }
      }
    });
    } catch (error) {
      console.error('ArmourVideo: Error initializing YouTube player:', error);
      // Reset playerRef on error
      playerRef.current = null;
    }
  };

  const startProgressTracking = () => {
    const interval = setInterval(() => {
      if (playerRef.current && isPlaying) {
        const currentTime = playerRef.current.getCurrentTime();
        const startTime = timeToSeconds(activeVideo.start);
        const adjustedTime = Math.min(currentTime - startTime, duration);
        
        setCurrentTime(adjustedTime);
        
        // Stop at end timestamp
        if (adjustedTime >= duration) {
          playerRef.current.pauseVideo();
          setIsPlaying(false);
          setCurrentTime(duration);
          clearInterval(interval);
        }
      } else {
        clearInterval(interval);
      }
    }, 100);
  };

  const togglePlayPause = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    }
  };

  const toggleFullscreen = () => {
    if (playerRef.current) {
      try {
        // Use YouTube player's fullscreen method
        const player = playerRef.current;
        if (player.getFullscreen) {
          if (player.getFullscreen()) {
            player.exitFullscreen();
          } else {
            player.requestFullscreen();
          }
        } else {
          // Fallback: try to fullscreen the iframe container
          const container = videoRef.current?.parentElement;
          if (container) {
            if (document.fullscreenElement) {
              document.exitFullscreen();
            } else {
              container.requestFullscreen().catch(err => {
                console.error('Error attempting to enable fullscreen:', err);
              });
            }
          }
        }
      } catch (error) {
        console.error('Fullscreen error:', error);
      }
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!playerRef.current || !activeVideo) return;
    
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const progressWidth = rect.width;
    const clickedTime = (clickX / progressWidth) * duration;
    
    const startTime = timeToSeconds(activeVideo.start);
    playerRef.current.seekTo(startTime + clickedTime, true);
    setCurrentTime(clickedTime);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Convert minutes:seconds to seconds
  const timeToSeconds = (timeStr: string): number => {
    const [minutes, seconds] = timeStr.split(':').map(Number);
    return minutes * 60 + seconds;
  };

  // Extract video ID from YouTube URL
  const getVideoId = (url: string): string => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : '';
  };

  return (
    <div className="space-y-4">
      
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="flex justify-center px-2 sm:px-4 md:px-6 lg:px-8">
              <div className="w-full max-w-4xl md:max-w-5xl lg:max-w-6xl">
                {/* Responsive video card with proper scaling */}
                <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl md:rounded-2xl border border-slate-700/40 overflow-hidden shadow-xl md:shadow-2xl mx-0 my-3 md:my-4" style={{
                  transform: isMobileDevice() ? 'translateZ(0)' : 'none',
                  backfaceVisibility: isMobileDevice() ? 'hidden' : 'visible',
                  willChange: isMobileDevice() ? 'transform' : 'auto',
                  maxWidth: '100%',
                  width: '100%'
                }}>
                  {/* Video header with vehicle name */}
                  <div className="bg-slate-900/50 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border-b border-slate-700/30">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-cyan-300 flex items-center gap-1 sm:gap-1.5 md:gap-2">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"/>
                        </svg>
                        <span className="truncate text-xs sm:text-sm md:text-base">{activeVideo.name} Armour Demo</span>
                      </h3>
                      <button 
                        onClick={() => setActiveVideo(null)}
                        className="text-slate-400 hover:text-slate-200 transition-colors p-1 sm:p-1.5 md:p-2 rounded-lg hover:bg-slate-700/50"
                      >
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Video container - fully responsive with proper aspect ratio */}
                  <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-lg" style={{ 
                    aspectRatio: '16/9', // Maintain 16:9 aspect ratio
                    minHeight: isMobileDevice() ? '180px' : '240px',
                    maxHeight: isMobileDevice() ? '300px' : '480px',
                    touchAction: 'none', // Prevent unwanted touch scrolling
                    zIndex: 10, // Ensure video is above other content
                    margin: '0 auto' // Center the video container
                  }}>
                    <div 
                      ref={videoRef}
                      className="absolute inset-0 w-full h-full"
                      id={`youtube-player-${activeVideo.name.replace(/\s+/g, '-').toLowerCase()}`}
                      style={{
                        borderRadius: '0',
                        overflow: 'hidden'
                      }}
                    />
                    {/* Loading indicator - only show when player is not ready */}
                    {!playerRef.current && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <div className="text-white text-sm flex flex-col items-center gap-2">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                          <span>Loading video...</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Video controls - matching stat display design */}
                  <div className="p-3 sm:p-4 bg-slate-800/50 border-t border-slate-700/40" style={{
                    paddingBottom: isMobileDevice() ? 'env(safe-area-inset-bottom, 20px)' : '20px'
                  }}>
                    {/* Progress bar - matching stat display design */}
                    <div className="mb-3 sm:mb-4">
                      <div className="text-xs text-slate-400 mb-1">Progress</div>
                      <div 
                        className="w-full h-2.5 sm:h-3 bg-slate-600/60 rounded-full cursor-pointer hover:bg-slate-600/80 transition-colors relative overflow-hidden touch-none"
                        onClick={handleProgressClick}
                        onTouchStart={handleProgressTouchStart}
                        onTouchMove={handleProgressTouchMove}
                        onTouchEnd={handleProgressTouchEnd}
                        style={{ minHeight: isMobileDevice() ? '12px' : '8px' }}
                      >
                        {/* Progress fill */}
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full transition-all duration-150 ease-out"
                          style={{ width: `${(currentTime / duration) * 100}%` }}
                        />
                        {/* Progress handle - larger for mobile touch */}
                        <div 
                          className="absolute top-1/2 w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 bg-cyan-400 rounded-full shadow-lg border-2 border-white transition-all duration-150 ease-out"
                          style={{ left: `${(currentTime / duration) * 100}%`, transform: 'translate(-50%, -50%)' }}
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Play/Pause button - stat display style */}
                        <div className="bg-slate-800/50 rounded-lg p-3">
                          <button 
                            onClick={togglePlayPause}
                            className="text-cyan-300 hover:text-cyan-200 transition-colors"
                            title={isPlaying ? "Pause" : "Play"}
                          >
                          {isPlaying ? (
                            <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                        </div>
                        
                        {/* Fullscreen button - stat display style */}
                        <div className="bg-slate-800/50 rounded-lg p-3">
                          <button 
                            onClick={toggleFullscreen}
                            className="text-slate-300 hover:text-slate-200 transition-colors"
                            title="Fullscreen"
                          >
                          <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                        </button>
                        </div>
                        
                        {/* Time display - stat display style */}
                        <div className="bg-slate-800/50 rounded-lg p-3">
                          <div className="text-xs text-slate-400 mb-1">Time</div>
                          <div className="text-lg font-bold text-cyan-300 flex items-center gap-2">
                            <span className="font-mono">{formatTime(currentTime)}</span>
                            <span className="text-slate-400 text-base">/</span>
                            <span className="text-slate-400 font-mono text-base">{formatTime(duration)}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-800/50 rounded-lg p-3">
                        <div className="text-xs text-slate-400 mb-1">Duration</div>
                        <div className="text-lg font-bold text-cyan-300">
                          {activeVideo.start} - {activeVideo.end}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Initialize IndexedDB
const initDB = () => {
  if (!('indexedDB' in window)) {
    console.warn('IndexedDB not supported');
    return Promise.resolve(null);
  }

  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open('MWTVehicleFavoritesDB', 1);

    request.onerror = () => {
      console.error('Error opening database');
      reject('Error opening database');
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onupgradeneeded = (event) => {
      const db = request.result;
      if (!db.objectStoreNames.contains('favorites')) {
        db.createObjectStore('favorites', { keyPath: 'id' });
      }
    };
  });
};

// Get favorites from IndexedDB
const getFavorites = async (): Promise<Set<string>> => {
  if (!('indexedDB' in window)) return new Set<string>();
  
  try {
    const db = await initDB();
    if (!db) return new Set<string>();
    
    return new Promise((resolve) => {
      const transaction = db.transaction(['favorites'], 'readonly');
      const store = transaction.objectStore('favorites');
      const request = store.getAll();
      
      request.onsuccess = () => {
        const favorites = new Set<string>(request.result.map(item => item.id));
        resolve(favorites);
      };
      
      request.onerror = () => {
        console.error('Error getting favorites');
        resolve(new Set<string>());
      };
    });
  } catch (error) {
    console.error('Error accessing IndexedDB:', error);
    return new Set<string>();
  }
};

// Toggle favorite in IndexedDB
const toggleFavoriteInDB = async (vehicleId: string, isFavorite: boolean): Promise<boolean> => {
  if (!('indexedDB' in window)) return false;
  
  try {
    const db = await initDB();
    if (!db) return false;
    
    return new Promise((resolve) => {
      const transaction = db.transaction(['favorites'], 'readwrite');
      const store = transaction.objectStore('favorites');
      
      if (isFavorite) {
        const request = store.delete(vehicleId);
        request.onsuccess = () => resolve(true);
        request.onerror = () => resolve(false);
      } else {
        const request = store.add({ id: vehicleId, timestamp: Date.now() });
        request.onsuccess = () => resolve(true);
        request.onerror = () => resolve(false);
      }
    });
  } catch (error) {
    console.error('Error toggling favorite:', error);
    return false;
  }
};

interface Vehicle {
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
    [key: string]: any;
  };
  weapons: Array<{
    name: string;
    type: string;
    damage: number;
    penetration: number;
    reload?: number;
  }>;
  modules: {
    [key: string]: Array<{
      name: string;
      bonus: string;
    }>;
  };
  [key: string]: any;
}

interface MwtVehicleStatsProps {
  vehicles: Vehicle[] | undefined;
}

const MwtVehicleStats: React.FC<MwtVehicleStatsProps> = ({ vehicles: initialVehicles = [] }) => {
  // Ensure vehicles is always an array
  const vehicles = Array.isArray(initialVehicles) ? initialVehicles : [];
  
  // State for favorite vehicles
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [dbInitialized, setDbInitialized] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [vehicleTypeFilter, setVehicleTypeFilter] = useState<string | null>(null);

  // Load favorites from IndexedDB on component mount
  useEffect(() => {
    if (typeof window !== 'undefined' && !dbInitialized) {
      getFavorites().then(favs => {
        setFavorites(favs);
        setDbInitialized(true);
      });
    }
  }, [dbInitialized]);

  // Toggle favorite status for a vehicle
  const toggleFavorite = async (vehicleId: string) => {
    const isCurrentlyFavorite = favorites.has(vehicleId);
    const success = await toggleFavoriteInDB(vehicleId, isCurrentlyFavorite);
    
    if (success) {
      setFavorites(prev => {
        const newFavorites = new Set(prev);
        if (isCurrentlyFavorite) {
          newFavorites.delete(vehicleId);
        } else {
          newFavorites.add(vehicleId);
        }
        return newFavorites;
      });
    } else {
      console.error('Failed to update favorite status');
    }
  };

  // Add Google AdSense script to document head
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Only add the script if it doesn't exist
      if (!document.querySelector('script[src*="pagead2.googlesyndication"]')) {
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3724137161724998';
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
      }

      // Initialize ads
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('Error initializing ads:', e);
      }
    }
  }, []);

  // Add banner ad component with proper initialization
  const BannerAd = () => {
    useEffect(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('Error initializing ad:', e);
      }
    }, []);

    return (
      <div className="w-full bg-slate-800 py-2 px-4 flex justify-center items-center border-b border-slate-700 sticky top-0 z-50">
        <div className="w-full max-w-7xl mx-auto">
          <ins 
            className="adsbygoogle"
            style={{
              display: 'block',
              width: '100%',
              height: '90px',
              margin: '0 auto'
            }}
            data-ad-client="ca-pub-3724137161724998"
            data-ad-slot="YOUR_AD_SLOT"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      </div>
    );
  };
  const [VEHICLES, setVEHICLES] = useState(initialVehicles);
  const router = useRouter()
  const [upgradeLevels, setUpgradeLevels] = useState<Record<string, number>>({});
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [highlightedEvent, setHighlightedEvent] = useState<number | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [translations, setTranslations] = useState(englishTranslations);

  // Translation function
  const t = (key: string) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
  
  // Load saved email, language preference and vehicle data from localStorage on component mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('mwt_user_email')
    if (savedEmail) {
      setUserEmail(savedEmail)
      setIsLoggedIn(true)
    }
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('mwt_selected_language')
    if (savedLanguage) {
      if (savedLanguage === 'English') {
        setTranslations(englishTranslations)
      } else {
        setTranslations(urduTranslations)
      }
    }
    
    // Load saved vehicle data if it exists
    const savedVehicleData = localStorage.getItem('mwt_vehicles_data')
    if (savedVehicleData) {
      try {
        const parsedVehicleData = JSON.parse(savedVehicleData)
        setVEHICLES(parsedVehicleData)
        console.log('Loaded saved vehicle data from localStorage')
      } catch (error) {
        console.error('Error parsing saved vehicle data:', error)
        // Fall back to initial vehicles if parsing fails
        setVEHICLES(initialVehicles)
      }
    }

    // Listen for storage changes from other tabs/windows
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'mwt_vehicles_data' && e.newValue) {
        try {
          const updatedVehicleData = JSON.parse(e.newValue)
          setVEHICLES(updatedVehicleData)
          console.log('Vehicle data updated from another tab')
        } catch (error) {
          console.error('Error parsing updated vehicle data:', error)
        }
      }
    }

    // Listen for custom vehicle data update events
    const handleVehicleDataUpdate = (e: CustomEvent) => {
      if (e.detail && e.detail.vehicles) {
        setVEHICLES(e.detail.vehicles)
        console.log('Vehicle data updated via custom event')
      }
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('vehicleDataUpdated', handleVehicleDataUpdate as EventListener)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('vehicleDataUpdated', handleVehicleDataUpdate as EventListener)
    }
  }, [initialVehicles]);

  const handleLogin = (userData: { email: string }) => {
    setIsLoggedIn(true)
    setUserEmail(userData.email)
    // Save email to localStorage
    localStorage.setItem('mwt_user_email', userData.email)
  };

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserEmail("")
    // Remove email from localStorage on logout
    localStorage.removeItem('mwt_user_email')
  };
  
  const handleUpgradeChange = (vehicleId: string, level: number) => {
    setUpgradeLevels(prev => {
      const newLevels = { ...prev };
      // If clicking the same level, reset to 0 (base), otherwise set to the new level
      newLevels[vehicleId] = prev[vehicleId] === level ? 0 : level;
      return newLevels;
    });
  };
  
  const getUpgradedValue = (vehicle: any, statType: string) => {
    const upgradeLevel = upgradeLevels[vehicle.id] || 0;
    if (upgradeLevel === 0) return vehicle.stats[statType] || 0;
    
    // Convert statType to lowercase for consistent comparison
    const statTypeLower = statType.toLowerCase();
    const baseValue = vehicle.stats[statType] || 0;
    
    let boostMultiplier = 1;
    
    if (statTypeLower === 'health') {
      // Health: 10%, 20%, 30% increases
      boostMultiplier = 1 + (upgradeLevel * 0.1); // 1.1, 1.2, or 1.3
    } else if (statTypeLower === 'agility') {
      // Agility: 3.33%, 6.66%, 10% increases
      switch(upgradeLevel) {
        case 1: boostMultiplier = 1.0333; break; // 3.33%
        case 2: boostMultiplier = 1.0666; break; // 6.66%
        case 3: boostMultiplier = 1.1;    break; // 10%
      }
    } else {
      // Other stats (speed, afterburnerSpeed, verticalSpeed): 3.33%, 6.66%, 10% increases
      switch(upgradeLevel) {
        case 1: boostMultiplier = 1.0333; break; // 3.33%
        case 2: boostMultiplier = 1.0666; break; // 6.66%
        case 3: boostMultiplier = 1.1;    break; // 10%
      }
    }
    
    const boostableStats = ['health', 'speed', 'agility', 'afterburnerspeed', 'verticalspeed', 'damage'];
    
    if (boostableStats.includes(statTypeLower)) {
      return Math.round(baseValue * boostMultiplier);
    }
    return baseValue;
  };

  const normalizeWeaponName = (str: string) => {
    return (str || '')
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .trim()
  }

  const levenshteinDistance = (a: string, b: string) => {
    a = normalizeWeaponName(a)
    b = normalizeWeaponName(b)

    if (!a.length || !b.length) return Math.max(a.length, b.length)

    const dp = new Array(b.length + 1).fill(0)
    for (let j = 0; j <= b.length; j++) dp[j] = j

    for (let i = 1; i <= a.length; i++) {
      let prev = dp[0]
      dp[0] = i
      for (let j = 1; j <= b.length; j++) {
        const tmp = dp[j]
        if (a[i - 1] === b[j - 1]) {
          dp[j] = prev
        } else {
          dp[j] = Math.min(prev + 1, dp[j] + 1, dp[j - 1] + 1)
        }
        prev = tmp
      }
    }

    return dp[b.length]
  }

  const weaponSimilarityScore = (a: string, b: string) => {
    a = normalizeWeaponName(a)
    b = normalizeWeaponName(b)

    if (!a.length && !b.length) return 1
    const maxLen = Math.max(a.length, b.length)
    if (!maxLen) return 0
    const dist = levenshteinDistance(a, b)
    return 1 - dist / maxLen
  }
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState<string[]>([])
  const [tierFilter, setTierFilter] = useState<string[]>([])
  const [countryFilter, setCountryFilter] = useState<string[]>([])
  const [rarityFilter, setRarityFilter] = useState<string[]>([])
  const [obtainMethodFilter, setObtainMethodFilter] = useState<string[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [compare, setCompare] = useState<string[]>([])
  const [expandedVehicle, setExpandedVehicle] = useState("")
  const chatMessagesEndRef = useRef<HTMLDivElement>(null)
  const comparisonRef = useRef<HTMLDivElement>(null)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState<{ role: string; content: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [chatInput, setChatInput] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [vehicleInfoOpen, setVehicleInfoOpen] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<'all' | 'market' | 'event' | 'upcoming'>('all')
  const handleCategoryChange = (category: 'all' | 'market' | 'event' | 'upcoming') => {
    setActiveCategory(category)
    setShowUpcomingAlert(category === 'upcoming')
  }
  const [showUpcomingAlert, setShowUpcomingAlert] = useState(false)
  const vehiclesPerPage = 15

  const [showAbout, setShowAbout] = useState(false)
  const [showUpdates, setShowUpdates] = useState(false)
  const [showCredits, setShowCredits] = useState(false)
  const [armourVideoVehicle, setArmourVideoVehicle] = useState<string | null>(null)

  const [selectedWeaponForModal, setSelectedWeaponForModal] = useState<any | null>(null)
  const [vehiclesWithWeapon, setVehiclesWithWeapon] = useState<any[]>([])
  const [originalVehicleName, setOriginalVehicleName] = useState<string | null>(null)
  const [selectedVehicle, setSelectedVehicle] = useState<any | null>(null)
  const [metaVehicle, setMetaVehicle] = useState<any>(null)
  
  // Convert vehicle name to URL-friendly slug
  const toUrlSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')  // Replace non-alphanumeric with hyphens
      .replace(/(^-|-$)/g, '');      // Remove leading/trailing hyphens
  };

  // Handle sharing vehicle
  const handleShareVehicle = (vehicle: any) => {
    const vehicleSlug = toUrlSlug(vehicle.name);
    const shareUrl = `${window.location.origin}?vehicle=${encodeURIComponent(vehicleSlug)}`;
    
    const shareData = {
      title: `${vehicle.name} - MWT Assistant`,
      text: `Check out ${vehicle.name} in MWT Assistant!`,
      url: shareUrl
    };

    // Show toast function
    const showToast = () => {
      const toast = document.createElement('div');
      toast.textContent = 'Link copied to clipboard!';
      toast.style.position = 'fixed';
      toast.style.bottom = '20px';
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%)';
      toast.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      toast.style.color = 'white';
      toast.style.padding = '10px 20px';
      toast.style.borderRadius = '20px';
      toast.style.zIndex = '1000';
      toast.style.fontFamily = 'sans-serif';
      toast.style.fontSize = '14px';
      document.body.appendChild(toast);
      
      // Remove toast after 2 seconds
      setTimeout(() => {
        if (document.body.contains(toast)) {
          document.body.removeChild(toast);
        }
      }, 2000);
    };

    // Try to copy to clipboard and show message
    navigator.clipboard.writeText(shareData.url).then(() => {
      showToast();
    }).catch(() => {
      // Fallback if clipboard API fails
      const tempInput = document.createElement('input');
      document.body.appendChild(tempInput);
      tempInput.value = shareData.url;
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      showToast();
    });

    // Only try Web Share API if it's available and we're in a secure context
    if (navigator.share && window.isSecureContext) {
      try {
        // Add image to share if available
        if (vehicle.image) {
          // @ts-ignore - files is not in the type definition but is supported by some browsers
          shareData.files = [vehicle.image];
        }
        navigator.share(shareData).catch(() => {
          // If share fails, the clipboard method has already copied the link
          console.log('Share API not available, using clipboard instead');
        });
      } catch (e) {
        console.error('Error sharing:', e);
      }
    }
  };
  
  // Handle sharing battlepass
  const handleShareBattlepass = (battlepass: any) => {
    const battlepassSlug = battlepass.name.toLowerCase().replace(/\s+/g, '-');
    const shareUrl = `${window.location.origin}?battlepass=${encodeURIComponent(battlepassSlug)}`;
    
    // Show toast function
    const showToast = (message: string) => {
      // Remove any existing toasts first
      const existingToasts = document.querySelectorAll('.share-toast');
      existingToasts.forEach(toast => {
        if (document.body.contains(toast)) {
          document.body.removeChild(toast);
        }
      });
      
      const toast = document.createElement('div');
      toast.className = 'share-toast';
      toast.textContent = message;
      toast.style.position = 'fixed';
      toast.style.bottom = '20px';
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%)';
      toast.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      toast.style.color = 'white';
      toast.style.padding = '10px 20px';
      toast.style.borderRadius = '20px';
      toast.style.zIndex = '1000';
      toast.style.fontFamily = 'sans-serif';
      toast.style.fontSize = '14px';
      toast.style.transition = 'opacity 0.3s ease';
      toast.style.opacity = '0';
      
      document.body.appendChild(toast);
      
      // Trigger reflow to apply initial styles
      toast.offsetHeight;
      
      // Fade in
      toast.style.opacity = '1';
      
      // Remove toast after 2 seconds with fade out
      setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
          if (document.body.contains(toast)) {
            document.body.removeChild(toast);
          }
        }, 300);
      }, 2000);
    };

    // Try to copy to clipboard and show message
    navigator.clipboard.writeText(shareUrl).then(() => {
      showToast('Link copied to clipboard!');
    }).catch(() => {
      // Fallback if clipboard API fails
      const tempInput = document.createElement('input');
      document.body.appendChild(tempInput);
      tempInput.value = shareUrl;
      tempInput.select();
      const success = document.execCommand('copy');
      document.body.removeChild(tempInput);
      
      if (success) {
        showToast('Link copied to clipboard!');
      } else {
        showToast('Failed to copy link. Please try again.');
      }
    });
  };
  
  // Update meta tags when selected vehicle changes
  useEffect(() => {
    if (typeof document === 'undefined' || !selectedVehicle) return;

    // Function to update or create meta tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[property="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Set Open Graph meta tags
    updateMeta('og:title', `${selectedVehicle.name} - MWT Assistant`);
    updateMeta('og:description', selectedVehicle.description || `Check out ${selectedVehicle.name} in MWT Assistant!`);
    updateMeta('og:url', `${window.location.origin}?vehicle=${encodeURIComponent(selectedVehicle.id)}`);
    
    if (selectedVehicle.image) {
      // Ensure the image URL is absolute
      const imageUrl = selectedVehicle.image.startsWith('http') 
        ? selectedVehicle.image 
        : `${window.location.origin}${selectedVehicle.image.startsWith('/') ? '' : '/'}${selectedVehicle.image}`;
      
      updateMeta('og:image', imageUrl);
      updateMeta('og:image:width', '1200');
      updateMeta('og:image:height', '630');
      updateMeta('og:type', 'article');
    }

    // Also update Twitter card meta tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', `${selectedVehicle.name} - MWT Assistant`);
    updateMeta('twitter:description', selectedVehicle.description || `Check out ${selectedVehicle.name} in MWT Assistant!`);
    if (selectedVehicle.image) {
      updateMeta('twitter:image', selectedVehicle.image.startsWith('http') 
        ? selectedVehicle.image 
        : `${window.location.origin}${selectedVehicle.image.startsWith('/') ? '' : '/'}${selectedVehicle.image}`);
    }

    setMetaVehicle(selectedVehicle);
  }, [selectedVehicle]);

  // Handle battlepass URL parameter
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const battlepassSlug = urlParams.get('battlepass');
      
      if (battlepassSlug) {
        // Special case for Falling Thunder battle pass
        if (battlepassSlug === 'falling-thunder') {
          // Find the Falling Thunder battle pass
          const fallingThunderPass = BATTLE_PASSES.find(bp => 
            bp.name === 'Falling Thunder'
          );
          
          if (fallingThunderPass) {
            // Open battle pass section and select the Falling Thunder battle pass
            setBattlePassOpen(true);
            setSelectedBattlePass(fallingThunderPass.id);
            
            // Update URL to clean it up
            const cleanUrl = window.location.origin + window.location.pathname;
            window.history.replaceState({}, document.title, cleanUrl);
            
            // Scroll to battle pass section with smooth behavior
            setTimeout(() => {
              const element = document.getElementById('battle-pass-section');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 100);
            return;
          }
        }
        
        // Handle other battle passes
        const battlePass = BATTLE_PASSES.find(bp => 
          bp.name.toLowerCase().replace(/\s+/g, '-') === battlepassSlug
        );
        
        if (battlePass) {
          // Open battle pass section and select the battle pass
          setBattlePassOpen(true);
          setSelectedBattlePass(battlePass.id);
          
          // Scroll to battle pass section with smooth behavior
          setTimeout(() => {
            const element = document.getElementById('battle-pass-section');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
        }
      }
    }
  }, []);

  // Handle URL parameter for direct vehicle loading
  useEffect(() => {
    if (typeof window !== 'undefined' && VEHICLES.length > 0) {
      const params = new URLSearchParams(window.location.search);
      const vehicleSlug = params.get('vehicle');
      
      if (vehicleSlug) {
        // Find vehicle by matching the URL slug to the vehicle name
        const vehicle = VEHICLES.find(v => {
          const vehicleNameSlug = toUrlSlug(v.name);
          return vehicleNameSlug === vehicleSlug.toLowerCase();
        });
        
        if (vehicle) {
          setSelectedVehicle(vehicle);
          setVehicleDetailsOpenId(vehicle.id.toString());
          
          // Update URL to ensure consistent formatting
          const newUrl = `${window.location.origin}?vehicle=${toUrlSlug(vehicle.name)}`;
          window.history.replaceState({ path: newUrl }, '', newUrl);
        }
      }
    }
  }, [VEHICLES]);

  const vehiclesWithWeaponRef = useRef<HTMLDivElement | null>(null)
  const selectedWeaponImageRef = useRef<HTMLImageElement | null>(null)

  const [weaponsModalOpenId, setWeaponsModalOpenId] = useState<string | null>(null)
  const [vehicleDetailsOpenId, setVehicleDetailsOpenId] = useState<string | null>(null)
  const weaponsModalRef = useRef<HTMLDivElement>(null)
  const vehicleDetailsModalRef = useRef<HTMLDivElement>(null)
  
   // Auto-scroll chat to bottom when messages change
  useEffect(() => {
    chatMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Click outside handler for modals
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (weaponsModalRef.current && !weaponsModalRef.current.contains(event.target as Node)) {
        setWeaponsModalOpenId(null)
      }
      if (vehicleDetailsModalRef.current && !vehicleDetailsModalRef.current.contains(event.target as Node)) {
        setVehicleDetailsOpenId(null)
      }
    }

    if (weaponsModalOpenId || vehicleDetailsOpenId) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [weaponsModalOpenId, vehicleDetailsOpenId])

  useEffect(() => {
    if (!selectedWeaponForModal?.name) {
      setVehiclesWithWeapon([])
      return
    }

    const currentName = selectedWeaponForModal.name
    const threshold = 0.85

    const matches = VEHICLES.filter((veh: any) => {
      if (!Array.isArray(veh.weapons)) return false
      return veh.weapons.some((w: any) => {
        if (!w?.name) return false
        const normCurrent = normalizeWeaponName(currentName)
        const normWeapon = normalizeWeaponName(w.name)
        if (!normCurrent || !normWeapon) return false

        // Exact normalized match
        if (normCurrent === normWeapon) return true

        const score = weaponSimilarityScore(normCurrent, normWeapon)

        // High similarity AND one name contains the other
        const contains = normCurrent.includes(normWeapon) || normWeapon.includes(normCurrent)
        return score >= threshold && contains
      })
    })

    setVehiclesWithWeapon(matches)
  }, [selectedWeaponForModal?.name, VEHICLES])

  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("battlepass")
  const [expandedMonth, setExpandedMonth] = useState<number | null>(null)
  
  // Battle Pass state
  const [battlePassOpen, setBattlePassOpen] = useState(false)
  const [selectedBattlePass, setSelectedBattlePass] = useState<number | null>(null)
  const [isEditMode, setIsEditMode] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [saveNotification, setSaveNotification] = useState('')

  // Allowed editors and edit overrides/persistence
  const allowedEditors = [
    'naveed.miandad.007@gmail.com',
    'qwemwt@gmail.com',
    'ooaraikuromorimine@gmail.com'
  ]
  const isEditor = allowedEditors.includes(userEmail)


  // Utility to set a value by path like "stats.health" or "weapons[0].damage"
  const setByPath = (obj: any, path: string, value: any) => {
    const parts = path.replace(/\[(\d+)\]/g, '.$1').split('.')
    let cur = obj
    for (let i = 0; i < parts.length - 1; i++) {
      const p = parts[i]
      if (!(p in cur) || typeof cur[p] !== 'object') cur[p] = {}
      cur = cur[p]
    }
    cur[parts[parts.length - 1]] = value
  }

  const saveEdit = async (vehicleId: string | number, path: string, value: any) => {
    const updatedVehicles = JSON.parse(JSON.stringify(VEHICLES));
    const vehicleIndex = updatedVehicles.findIndex(v => v.id == vehicleId);
    if (vehicleIndex === -1) return;

    setByPath(updatedVehicles[vehicleIndex], path, value);
    setIsSaving(true);

    try {
      // Update the state immediately for live updates
      setVEHICLES(updatedVehicles);
      
      // Save to localStorage for persistence across sessions
      localStorage.setItem('mwt_vehicles_data', JSON.stringify(updatedVehicles));
      
      // Dispatch a custom event to notify other components/tabs
      window.dispatchEvent(new CustomEvent('vehicleDataUpdated', { 
        detail: { vehicles: updatedVehicles } 
      }));
      
      // Note: File system updates removed for client-side compatibility
      // Data persistence is handled via localStorage
      
      setSaveNotification('✅ Changes saved successfully!');
      setTimeout(() => setSaveNotification(''), 3000);
      console.log('Changes saved successfully');
    } catch (error) {
      console.error('Error saving changes:', error);
      setSaveNotification('❌ Error saving changes!');
      setTimeout(() => setSaveNotification(''), 3000);
    } finally {
      setIsSaving(false);
    }
  }

  // Function to reset vehicle data to original
  const resetVehicleData = () => {
    if (confirm('Are you sure you want to reset all vehicle data to original? This will remove all your edits.')) {
      localStorage.removeItem('mwt_vehicles_data');
      setVEHICLES(initialVehicles);
      setSaveNotification('🔄 Vehicle data reset to original!');
      setTimeout(() => setSaveNotification(''), 3000);
      
      // Notify other tabs/components
      window.dispatchEvent(new CustomEvent('vehicleDataUpdated', { 
        detail: { vehicles: initialVehicles } 
      }));
    }
  }



  // Vehicle Obtain Method System
  const getVehicleObtainMethod = (vehicleName: string) => {
    const dollarVehicles = [
      "F-35B Lightning II",
      "F/A-18F Super Hornet",
      "J-20 Mighty Dragon",
      "Mi-35P",
      "AH-64E Apache",
      "Z-19E",
      "Z-9G Harbin",
      "MH-6 Little Bird",
      "SUPER LYNX",
      "Z-9WA Harbin",
      "MH-60L DAP",
      "F-4E Phantom",
      "J-10 Chengdu",
      "MiG-31BM Foxhound",
      "Q-5A Nanchang",
      "J-15",
      "M41 Walker Bulldog",
      "LAV-25",
      "LAV-150",
      "M113A1 FMS AIP",
      "XM800T",
      "WZ-120",
      "WZ-121",
      "WZ-501",
      "WZ-501A",
      "WZ-211",
      "T-55A",
      "BMP-1",
      "BMP-1K",
      "BTR-80",
      "BTR-80A",
      "PT-76B",
      "Type-61",
      "ZSU-57-2",
      "M60",
      "T-62",
      "BMP-2",
      "BTR-82AT",
      "BTR-82A1",
      "M3 Bradley",
      "M3A3 Bradley",
      "PGZ-04A",
      "ZSU-23-4M4 Shilka",
      "LAV-300",
      "PTL-02",
      "PLZ-83",
      "2S1 Gvozdika",
      "M1A1 Abrams",
      "M1 Abrams",
      "T-72A",
      "ZTZ85-II",
      "PLZ-07B",
      "2S6M1 Tunguska-M1",
      "XM975",
      "M113 Hellfire",
      "LAV-600",
      "T-90A",
      "ZTZ99A",
      "ADATS",
      "Pantsir S-1",
      "M1128 Stryker",
      "PLZ-05",
      "MiG-35",
      "Su-37 Terminator",
      "Ka-52M",
      "Mi-35P Hind-F",
      "Super Lynx Mk88A",
      "ZBL-08",
      "M110A2"
    ];
    
    const goldVehicles = [
      "F-22 Raptor",
      "J-35",
      "T-14 Armata",
      "2S19 Msta-S",
      "BMPT Terminator 2",
      "Mi-28NM",
      "WZ-10",
      "AH-1Z Viper",
      "Z-11WB Changhe",
      "MI-8TV",
      "Z-20 Harbin",
      "AH-84",
      "F-14D Super Tomcat",
      "J-16",
      "Su-25UB",
      "F-15SE Silent Eagle",
      "M42A1 Duster",
      "T114 BAT",
      "WZ-120C",
      "Type 74E",
      "Type 74G/Kai",
      "T-62 545",
      "XM1 (GM)",
      "M163 VADS",
      "2S3 Akatsiya",
      "MBT-70",
      "ZTZ96",
      "9A52-2 Smerch",
      "AV-8B Harrier II",
      "A-10A Thunderbolt",
      "PGZ-09",
      "HSTV-L",
      "XM8 AGS",
      "VBCI-2",
      "Centauro I 120",
      "F-5E Tiger II",
  "ERC-90 F4 Sagaie",
    ];
    
    const marketVehicles = [
      "SB-1",
      "Ka-58 Black Ghost",
      "Tu-222",
      "YF-23",
      "X-2 Shinshin",
      "B-Type",
      "Su-57M",
      "T-90M",
      "KF-51 Panther",
      "Object 640",
      "Merkava Mk.4",
      "M1 Abrams CATTB",
      "Leopard 2A8",
      "EMBT 120",
      "Abrams X",
      "VT-4A1",
      "Type 16 MCV",
      "Type 10",
      "T-14 (152)",
      "M-SHORAD SPAA",
      "Leopard 2A7 Plus",
      "KF31 Lynx",
      "Gepard 1A2",
      "XM8 AGS",
      "Type 625E SHORAD",
      "HSTV-L",
      "Type 74E",
      "Ka-90",
    ];
    
    const eventGachaVehicles = [
      "Su-57 Felon",
      "Type 90",
      "XM2001 Crusader",
      "Gepard 1A2",
      "J-50",
      "MiG-41M",
      "T-20 Monolit",
      "PL-01",
      "M270 MLRS",
      "BM-57-2 Kochevnik",
      "MGM-166 LOSAT",
      "T-104 Bastion",
      "SR-5 GMLRS",
      "ZTZ99-III",
      "FV4034 Challenger 2 TES",
      "Karrar",
      "M1 Abrams Block 3",
      "Altay",
      "AMX-30 Super",
      "Type 75 MLRS",
      "Mi-24 Super Hind",
      "Leopard 2A-RC 3.0",
      "Leopard 2A8",
      "X2 Shinshin",
      "K2 Black Panther",
      "TU-222",
      "TOS-1A",
      "FK 2000",
      "SB-1"
    ];

    if (dollarVehicles.includes(vehicleName)) return "Dollar";
    if (goldVehicles.includes(vehicleName)) return "Gold";
    if (marketVehicles.includes(vehicleName)) return "Market";
    if (eventGachaVehicles.includes(vehicleName)) return "Event/Gacha";
    
    // Smart fallback for unlisted vehicles
    const vehicle = VEHICLES_DATA.find(v => v.name === vehicleName);
    if (!vehicle) return "Dollar";
    
    // Categorize unlisted vehicles based on characteristics
    const tierNum = parseInt(vehicle.tier) || 0;
    
    // High-tier vehicles (VII+) are more likely to be Gold or Market
    if (tierNum >= 7) {
      // Modern/advanced vehicles tend to be Gold or Market
      if (vehicle.name.includes("Leopard") || 
          vehicle.name.includes("Challenger") ||
          vehicle.name.includes("Abrams") ||
          vehicle.name.includes("Type 10") ||
          vehicle.name.includes("K2")) {
        return "Gold";
      }
      return "Market";
    }
    
    // Mid-tier vehicles (IV-VI) are typically Dollar
    if (tierNum >= 4 && tierNum <= 6) {
      return "Dollar";
    }
    
    // Low-tier vehicles (I-III) are typically Dollar
    if (tierNum <= 3) {
      return "Dollar";
    }
    
    return "Dollar"; // Final fallback
  };

  // Download vehicle stats as PNG using Canvas API - EXACT UI MATCH
  const downloadStats = async (vehicleId: string) => {
    const vehicle = VEHICLES_DATA.find(v => v.id === vehicleId);
    if (!vehicle) return;

    try {
      // Create a canvas element
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.error('Canvas context not available');
        return;
      }

      // Set canvas dimensions to match the UI card aspect ratio
      canvas.width = 400;
      canvas.height = 600;

      // Fill exact background from UI card: bg-slate-900/60
      ctx.fillStyle = 'rgba(15, 23, 42, 0.6)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Load and draw vehicle image
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('Failed to load image'));
        img.src = vehicle.image || '';
      });

      // Draw vehicle image with exact UI styling: rounded-lg, shadow-lg, bg-slate-800/20
      const imageX = 20;
      const imageY = 20;
      const imageWidth = canvas.width - 40;
      const imageHeight = 200;
      
      // Draw background for image area (bg-slate-800/20)
      ctx.fillStyle = 'rgba(30, 41, 59, 0.2)';
      ctx.beginPath();
      ctx.roundRect(imageX, imageY, imageWidth, imageHeight, 8);
      ctx.fill();
      
      // Draw image with rounded corners effect (rounded-lg)
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(imageX, imageY, imageWidth, imageHeight, 8);
      ctx.clip();
      ctx.drawImage(img, imageX, imageY, imageWidth, imageHeight);
      ctx.restore();

      // Set up text styling
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';

      // Draw top section with flag, name, and nation - exact UI spacing
      const nameY = imageY + imageHeight + 16; // mb-3 sm:mb-4 = 12px-16px
      
      // Draw flag with exact UI styling: w-6 h-4 sm:w-8 sm:h-6, object-cover rounded shadow-md
      const flagWidth = 32; // w-8 = 32px
      const flagHeight = 24; // h-6 = 24px
      const flagX = 20;
      const flagY = nameY;
      
      // Draw flag based on vehicle faction
      const drawFlag = (faction: string, x: number, y: number, width: number, height: number) => {
        switch (faction.toLowerCase()) {
          case 'russian':
            // Russian flag (horizontal stripes: white, blue, red)
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(x, y, width, height / 3);
            ctx.fillStyle = '#0039a6';
            ctx.fillRect(x, y + height / 3, width, height / 3);
            ctx.fillStyle = '#d52b1e';
            ctx.fillRect(x, y + 2 * height / 3, width, height / 3);
            break;
          case 'american':
            // American flag (simplified - red and white stripes with blue canton)
            const stripeHeight = height / 13;
            for (let i = 0; i < 13; i++) {
              ctx.fillStyle = i % 2 === 0 ? '#b22234' : '#ffffff';
              ctx.fillRect(x, y + i * stripeHeight, width, stripeHeight);
            }
            // Blue canton
            ctx.fillStyle = '#3c3b6e';
            ctx.fillRect(x, y, width * 0.4, height * 7/13);
            break;
          case 'chinese':
            // Chinese flag (red background with yellow stars)
            ctx.fillStyle = '#de2910';
            ctx.fillRect(x, y, width, height);
            ctx.fillStyle = '#ffde00';
            // Large star
            const starSize = height * 0.3;
            drawStar(ctx, x + width * 0.2, y + height * 0.3, starSize, 5);
            // Small stars
            const smallStarSize = height * 0.1;
            drawStar(ctx, x + width * 0.4, y + height * 0.15, smallStarSize, 5);
            drawStar(ctx, x + width * 0.45, y + height * 0.25, smallStarSize, 5);
            drawStar(ctx, x + width * 0.45, y + height * 0.4, smallStarSize, 5);
            drawStar(ctx, x + width * 0.4, y + height * 0.5, smallStarSize, 5);
            break;
          case 'japanese':
            // Japanese flag (white background with red circle)
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(x, y, width, height);
            ctx.fillStyle = '#bc002d';
            ctx.beginPath();
            ctx.arc(x + width / 2, y + height / 2, Math.min(width, height) * 0.3, 0, 2 * Math.PI);
            ctx.fill();
            break;
          case 'german':
            // German flag (horizontal stripes: black, red, gold)
            ctx.fillStyle = '#000000';
            ctx.fillRect(x, y, width, height / 3);
            ctx.fillStyle = '#dd0000';
            ctx.fillRect(x, y + height / 3, width, height / 3);
            ctx.fillStyle = '#ffce00';
            ctx.fillRect(x, y + 2 * height / 3, width, height / 3);
            break;
          case 'turkish':
            // Turkish flag (red background with white crescent and star)
            ctx.fillStyle = '#e30a17';
            ctx.fillRect(x, y, width, height);
            ctx.fillStyle = '#ffffff';
            // Crescent
            ctx.beginPath();
            ctx.arc(x + width * 0.4, y + height / 2, height * 0.25, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = '#e30a17';
            ctx.beginPath();
            ctx.arc(x + width * 0.45, y + height / 2, height * 0.2, 0, 2 * Math.PI);
            ctx.fill();
            // Star
            ctx.fillStyle = '#ffffff';
            drawStar(ctx, x + width * 0.6, y + height * 0.35, height * 0.08, 5);
            break;
          case 'israeli':
            // Israeli flag (white background with blue stripes and Star of David)
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(x, y, width, height);
            ctx.fillStyle = '#0038b8';
            // Top and bottom stripes
            ctx.fillRect(x, y, width, height * 0.15);
            ctx.fillRect(x, y + height * 0.85, width, height * 0.15);
            // Star of David (simplified as two triangles)
            const centerX = x + width / 2;
            const centerY = y + height / 2;
            const size = height * 0.25;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY - size);
            ctx.lineTo(centerX + size * 0.866, centerY + size * 0.5);
            ctx.lineTo(centerX - size * 0.866, centerY + size * 0.5);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(centerX, centerY + size);
            ctx.lineTo(centerX + size * 0.866, centerY - size * 0.5);
            ctx.lineTo(centerX - size * 0.866, centerY - size * 0.5);
            ctx.closePath();
            ctx.fill();
            break;
          default:
            // Default flag (gray with question mark)
            ctx.fillStyle = '#808080';
            ctx.fillRect(x, y, width, height);
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 16px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('?', x + width / 2, y + height / 2);
            ctx.textAlign = 'left';
            ctx.textBaseline = 'top';
            break;
        }
      };
      
      // Helper function to draw a star
      const drawStar = (ctx: CanvasRenderingContext2D, cx: number, cy: number, radius: number, points: number) => {
        const angle = Math.PI / points;
        ctx.beginPath();
        for (let i = 0; i < 2 * points; i++) {
          const r = i % 2 === 0 ? radius : radius * 0.5;
          const x = cx + r * Math.sin(i * angle);
          const y = cy - r * Math.cos(i * angle);
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.fill();
      };
      
      // Draw the flag based on vehicle faction
      drawFlag(vehicle.faction, flagX, flagY, flagWidth, flagHeight);
      
      // Add shadow to flag
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.lineWidth = 1;
      ctx.strokeRect(flagX, flagY, flagWidth, flagHeight);
      ctx.shadowColor = 'transparent';
      
      // Draw vehicle name with exact UI styling: sm:text-xl font-bold text-white, text-base flex-row
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 20px Arial'; // text-base = 16px, sm:text-xl = 20px
      ctx.fillText(vehicle.name, flagX + flagWidth + 12, nameY + 2); // gap-2 sm:gap-3 = 8px-12px

      // Draw nation with exact UI styling: text-xs sm:text-sm text-slate-400 font-semibold
      ctx.fillStyle = '#94a3b8'; // text-slate-400
      ctx.font = '600 12px Arial'; // text-xs = 12px, sm:text-sm = 14px, font-semibold = 600
      ctx.fillText('(' + vehicle.faction + ')', flagX + flagWidth + 12, nameY + 26);

      // Draw rarity badge with exact UI styling from getRarityColor
      const rarity = getVehicleRarity(vehicle.name) || 'Standard';
      const rarityColorMap = {
        'Common': { bg: '#4b5563', text: '#f3f4f6' },    // bg-gray-600 text-gray-100
        'Enhanced': { bg: '#16a34a', text: '#dcfce7' }, // bg-green-600 text-green-100
        'Rare': { bg: '#2563eb', text: '#dbeafe' },     // bg-blue-600 text-blue-100
        'Epic': { bg: '#9333ea', text: '#f3e8ff' },     // bg-purple-600 text-purple-100
        'Legendary': { bg: '#ea580c', text: '#fed7aa' } // bg-orange-600 text-orange-100
      };
      
      const colors = rarityColorMap[rarity as keyof typeof rarityColorMap] || rarityColorMap['Common'];
      
      // Badge styling: px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[10px] sm:text-xs font-semibold shadow-lg
      const badgePaddingX = 8; // px-2 = 8px
      const badgePaddingY = 4;  // py-1 = 4px
      const badgeFontSize = 12; // sm:text-xs = 12px
      
      ctx.font = `bold ${badgeFontSize}px Arial`;
      const badgeTextWidth = ctx.measureText(rarity).width;
      const badgeWidth = badgeTextWidth + badgePaddingX * 2;
      const badgeHeight = badgeFontSize + badgePaddingY * 2;
      const badgeX = canvas.width - badgeWidth - 20;
      const badgeY = nameY;
      
      // Draw badge background
      ctx.fillStyle = colors.bg;
      ctx.beginPath();
      ctx.roundRect(badgeX, badgeY, badgeWidth, badgeHeight, 4); // rounded
      ctx.fill();
      
      // Add shadow to badge (shadow-lg)
      ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
      ctx.shadowBlur = 8;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 2;
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.lineWidth = 1;
      ctx.strokeRect(badgeX, badgeY, badgeWidth, badgeHeight);
      ctx.shadowColor = 'transparent';
      
      // Draw badge text
      ctx.fillStyle = colors.text;
      ctx.font = `bold ${badgeFontSize}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(rarity, badgeX + badgeWidth / 2, badgeY + badgeHeight / 2);
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';

      // Draw description with exact UI styling: text-slate-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed
      const descY = nameY + 56; // mb-3 sm:mb-4 = 12px-16px + flag height + spacing
      ctx.fillStyle = '#cbd5e1'; // text-slate-300
      ctx.font = '12px Arial'; // text-xs = 12px, sm:text-sm = 14px
      ctx.textAlign = 'left';
      
      // Use exact description text from reference for Su-57M, or vehicle description for others
      const descriptionText = vehicle.name === 'Su-57M' 
        ? 'Advanced fifth-generation stealth fighter with supercruise capability and advanced avionics.'
        : vehicle.description || 'High-performance military aircraft.';
      
      // Wrap text for description with leading-relaxed (1.625)
      const words = descriptionText.split(' ');
      let line = '';
      let descCurrentY = descY;
      const maxWidth = canvas.width - 40; // p-4 sm:p-5 md:p-6 = 16px-24px
      const lineHeight = 19.5; // 12px * 1.625 = leading-relaxed
      
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        
        if (testWidth > maxWidth && n > 0) {
          ctx.fillText(line, 20, descCurrentY);
          line = words[n] + ' ';
          descCurrentY += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, 20, descCurrentY);

      // Draw Type and Price information with exact UI styling
      const infoY = descCurrentY + lineHeight + 12; // mb-3 sm:mb-4 = 12px-16px
      
      // Draw Type label and value - exact UI styling
      ctx.fillStyle = '#94a3b8'; // text-slate-400
      ctx.font = '12px Arial'; // text-xs
      ctx.fillText('Type:', 20, infoY);
      
      ctx.fillStyle = '#cbd5e1'; // text-slate-300
      ctx.font = '12px Arial'; // text-xs
      ctx.fillText(vehicle.type || 'Unknown', 55, infoY); // Type value
      
      // Get price information from vehicleCurrencyData
      const currencyInfo = vehicleCurrencyData.find(v => v.name === vehicle.name);
      const priceText = currencyInfo && currencyInfo.amount !== null 
        ? `${currencyInfo.amount.toLocaleString()} ${currencyInfo.currency}s` 
        : 'Not Available';
      
      // Draw Price label and value - exact UI styling
      ctx.fillStyle = '#94a3b8'; // text-slate-400
      ctx.font = '12px Arial'; // text-xs
      ctx.fillText('Price:', 20, infoY + 20); // mb-1 = 4px spacing
      
      ctx.fillStyle = '#cbd5e1'; // text-slate-300
      ctx.font = '12px Arial'; // text-xs
      ctx.fillText(priceText, 55, infoY + 20); // Price value

      // Calculate stats area position
      const statsY = infoY + 40; // Additional spacing for Type and Price section
      
      // Draw dynamic stat boxes based on vehicle type and available stats
      const boxWidth = (canvas.width - 60) / 2; // gap-2 sm:gap-3 = 8px-12px
      const boxHeight = 80; // p-2 sm:p-3 = 8px-12px padding + text height
      const boxSpacing = 12; // gap-2 sm:gap-3 = 8px-12px
      
      // Determine which stats to show based on vehicle type
      const isFighterJet = vehicle.type.includes('Fighter Jet');
      const isBomber = vehicle.type.includes('Bomber');
      const isHelicopter = vehicle.type.includes('Helicopter');
      const isMainBattleTank = vehicle.type.includes('Main Battle Tank');
      const isLightTank = vehicle.type.includes('Light Tank');
      const isSPH = vehicle.type.includes('SPH');
      const isMLRS = vehicle.type.includes('MLRS');
      const isAntiAir = vehicle.type.includes('Anti-Air');
      const isTank = isMainBattleTank || isLightTank || isSPH || isMLRS || isAntiAir;
      
      // Function to draw a stat box with exact UI styling
      const drawStatBox = (x: number, y: number, label: string, value: string | number, unit: string = '') => {
        // Background: bg-slate-800/50 rounded-lg border border-slate-700/30
        ctx.fillStyle = 'rgba(30, 41, 59, 0.5)';
        ctx.strokeStyle = 'rgba(71, 85, 105, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(x, y, boxWidth, boxHeight, 8); // rounded-lg
        ctx.fill();
        ctx.stroke();
        
        // Label: text-xs text-slate-400 mb-1
        ctx.fillStyle = '#94a3b8'; // text-slate-400
        ctx.font = '12px Arial'; // text-xs
        ctx.fillText(label, x + 12, y + 12); // p-2 sm:p-3 = 8px-12px
        
        // Value: text-lg font-bold text-cyan-300
        ctx.fillStyle = '#67e8f9'; // text-cyan-300
        ctx.font = 'bold 18px Arial'; // text-lg font-bold
        ctx.fillText(value.toString() + (unit ? ' ' + unit : ''), x + 12, y + 32);
      };
      
      // Common stats for all vehicles
      let currentX = 20;
      let statsCurrentY = statsY;
      
      // Health (always shown) - exact UI styling
      drawStatBox(currentX, statsCurrentY, 'Health', 
        (vehicle.stats.health && vehicle.stats.health > 0) ? vehicle.stats.health.toLocaleString() : 'N/A');
      
      // Speed/Cruise Speed (always shown) - exact UI styling
      currentX += boxWidth + boxSpacing;
      drawStatBox(currentX, statsCurrentY, (isFighterJet || isBomber) ? 'Cruise Speed' : 'Speed', 
        (vehicle.stats.speed && vehicle.stats.speed > 0) ? vehicle.stats.speed : 'N/A', 'km/h');
      
      // Second row stats
      currentX = 20;
      statsCurrentY += boxHeight + boxSpacing;
      
      if (isFighterJet || isBomber) {
        // Fighter Jets and Bombers: HEALTH, CRUISE SPEED, AFTERBURNER SPEED, AGILITY
        drawStatBox(currentX, statsCurrentY, 'Afterburner Speed', 
          (vehicle.stats.afterburnerSpeed && vehicle.stats.afterburnerSpeed > 0) ? vehicle.stats.afterburnerSpeed : 'N/A', 'km/h');
        
        currentX += boxWidth + boxSpacing;
        drawStatBox(currentX, statsCurrentY, 'Agility', 
          (vehicle.stats.agility && vehicle.stats.agility > 0) ? vehicle.stats.agility : 'N/A');
      } else if (isHelicopter) {
        // Helicopters: HEALTH, SPEED, VERTICAL SPEED, AGILITY
        drawStatBox(currentX, statsCurrentY, 'Vertical Speed', 
          (vehicle.stats.verticalSpeed && vehicle.stats.verticalSpeed > 0) ? vehicle.stats.verticalSpeed : 'N/A', 'm/s');
        
        currentX += boxWidth + boxSpacing;
        drawStatBox(currentX, statsCurrentY, 'Agility', 
          (vehicle.stats.agility && vehicle.stats.agility > 0) ? vehicle.stats.agility : 'N/A');
      } else if (isTank) {
        // Tanks (Main Battle Tanks, Light Tanks, SPH, MLRS, Anti-Air): HEALTH, SPEED, AGILITY, ARMOR
        drawStatBox(currentX, statsCurrentY, 'Agility', 
          (vehicle.stats.agility && vehicle.stats.agility > 0) ? vehicle.stats.agility : 'N/A');
        
        currentX += boxWidth + boxSpacing;
        drawStatBox(currentX, statsCurrentY, 'Armor', 
          (vehicle.stats.armor && vehicle.stats.armor !== '') ? vehicle.stats.armor : 'N/A');
      } else {
        // Other vehicle types: HEALTH, SPEED, plus available stats
        const availableStats = Object.keys(vehicle.stats).filter(key => 
          key !== 'health' && key !== 'speed' && vehicle.stats[key] !== null && vehicle.stats[key] !== undefined && vehicle.stats[key] !== ''
        );
        
        if (availableStats.length > 0) {
          const stat1 = availableStats[0];
          const value1 = vehicle.stats[stat1];
          const label1 = stat1.charAt(0).toUpperCase() + stat1.slice(1).replace(/([A-Z])/g, ' $1').trim();
          drawStatBox(currentX, statsCurrentY, label1, 
            (value1 && value1 > 0) ? value1 : 'N/A', 
            typeof value1 === 'number' && stat1.toLowerCase().includes('speed') ? 'km/h' : '');
          
          if (availableStats.length > 1) {
            currentX += boxWidth + boxSpacing;
            const stat2 = availableStats[1];
            const value2 = vehicle.stats[stat2];
            const label2 = stat2.charAt(0).toUpperCase() + stat2.slice(1).replace(/([A-Z])/g, ' $1').trim();
            drawStatBox(currentX, statsCurrentY, label2, 
              (value2 && value2 > 0) ? value2 : 'N/A', 
              typeof value2 === 'number' && stat2.toLowerCase().includes('speed') ? 'km/h' : '');
          } else {
            currentX += boxWidth + boxSpacing;
            drawStatBox(currentX, statsCurrentY, 'Agility', 'N/A');
          }
        } else {
          // No additional stats available
          drawStatBox(currentX, statsCurrentY, 'Agility', 'N/A');
          currentX += boxWidth + boxSpacing;
          drawStatBox(currentX, statsCurrentY, 'Special', 'N/A');
        }
      }

      // Convert canvas to blob and download
      canvas.toBlob((blob) => {
        if (!blob) return;
        
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${vehicle.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}-stats.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 'image/png');
      
    } catch (error) {
      console.error('Error generating stats poster:', error);
      alert('Failed to generate stats poster. Please try again.');
    }
  };

  const VEHICLES_VIEW = VEHICLES;

  const types = [
    'Fighter Jet',
    'Bomber',
    'Helicopter',
    'Main Battle Tank',
    'Light Tank',
    'Tank Destroyer',
    'MLRS',
    'Missile Carrier',
    'SPH',
    'Anti-Air'
  ].filter(type => new Set(VEHICLES.map(v => v.type)).has(type))
  const tiers = [...new Set(VEHICLES.map((v) => formatTier(v.tier)))].sort()
  const countries = [...new Set(VEHICLES.map((v) => v.faction))].sort()
  const rarities = ["Common", "Enhanced", "Rare", "Epic", "Legendary"]
  const obtainMethods = ["Dollar", "Gold", "Market", "Event/Gacha"]

  const getCountryFlag = (country: string) => {
    const flagMap: Record<string, string> = {
      "American": "🇺🇸",
      "Russian": "🇷🇺",
      "Chinese": "🇨🇳",
      "German": "🇩🇪",
      "British": "🇬🇧",
      "French": "🇫🇷",
      "Israeli": "🇮🇱",
      "Japanese": "🇯🇵",
      "South Korean": "🇰🇷",
      "Indian": "🇮🇳",
      "Pakistani": "🇵🇰",
      "Turkish": "🇹🇷",
      "Iranian": "🇮🇷",
      "North Korean": "🇰🇵",
      "Brazilian": "🇧🇷",
      "Italian": "🇮🇹",
      "Spanish": "🇪🇸",
      "Swedish": "🇸🇪",
      "Polish": "🇵🇱",
      "Ukrainian": "🇺🇦",
      "Australian": "🇦🇺",
      "Canadian": "🇨🇦",
      "Dutch": "🇳🇱",
      "Belgian": "🇧🇪",
      "Norwegian": "🇳🇴",
      "Danish": "🇩🇰",
      "Finnish": "🇫🇮",
      "Swiss": "🇨🇭",
      "Austrian": "🇦🇹",
      "Czech": "🇨🇿",
      "Hungarian": "🇭🇺",
      "Romanian": "🇷🇴",
      "Bulgarian": "🇧🇬",
      "Serbian": "🇷🇸",
      "Croatian": "🇭🇷",
      "Slovakian": "🇸🇰",
      "Slovenian": "🇸🇮",
      "Estonian": "🇪🇪",
      "Latvian": "🇱🇻",
      "Lithuanian": "🇱🇹",
      "Greek": "🇬🇷",
      "Portuguese": "🇵🇹",
      "Mexican": "🇲🇽",
      "Argentinian": "🇦🇷",
      "Chilean": "🇨🇱",
      "Colombian": "🇨🇴",
      "Peruvian": "🇵🇪",
      "Venezuelan": "🇻🇪",
      "South African": "🇿🇦",
      "Egyptian": "🇪🇬",
      "Saudi Arabian": "🇸🇦",
      "Emirati": "🇦🇪",
      "Qatari": "🇶🇦",
      "Kuwaiti": "🇰🇼",
      "Bahraini": "🇧🇭",
      "Omani": "🇴🇲",
      "Jordanian": "🇯🇴",
      "Lebanese": "🇱🇧",
      "Iraqi": "🇮🇶",
      "Syrian": "🇸🇾",
      "Yemeni": "🇾🇪",
      "Libyan": "🇱🇾",
      "Tunisian": "🇹🇳",
      "Algerian": "🇩🇿",
      "Moroccan": "🇲🇦",
      "Sudanese": "🇸🇩",
      "Ethiopian": "🇪🇹",
      "Kenyan": "🇰🇪",
      "Nigerian": "🇳🇬",
      "Ghanaian": "🇬🇭",
      "Ivorian": "🇨🇮",
      "Senegalese": "🇸🇳",
      "Cameroonian": "🇨🇲",
      "Angolan": "🇦🇴",
      "Mozambican": "🇲🇿",
      "Zambian": "🇿🇲",
      "Zimbabwean": "🇿🇼",
      "Botswanan": "🇧🇼",
      "Namibian": "🇳🇦",
      "Malawian": "🇲🇼",
      "Ugandan": "🇺🇬",
      "Tanzanian": "🇹🇿",
      "Rwandan": "🇷🇼",
      "Burundian": "🇧🇮",
      "Malagasy": "🇲🇬",
      "Mauritian": "🇲🇺",
      "Seychellois": "🇸🇨",
      "Comorian": "🇰🇲",
      "Djiboutian": "🇩🇯",
      "Somali": "🇸🇴",
      "Eritrean": "🇪🇷",
      "South Sudanese": "🇸🇸",
      "Central African": "🇨🇫",
      "Chadian": "🇹🇩",
      "Nigerien": "🇳🇪",
      "Malian": "🇲🇱",
      "Burkinabe": "🇧🇫",
      "Beninese": "🇧🇯",
      "Togolese": "🇹🇬",
      "Gambian": "🇬🇲",
      "Guinean": "🇬🇳",
      "Guinea-Bissauan": "🇬🇼",
      "Sierra Leonean": "🇸🇱",
      "Liberian": "🇱🇷",
      "Ivorian": "🇨🇮",
      "Ghanaian": "🇬🇭",
      "Nigerian": "🇳🇬",
      "Cameroonian": "🇨🇲",
      "Congolese": "🇨🇬",
      "Gabonese": "🇬🇦",
      "Equatorial Guinean": "🇬🇶",
      "Sao Tomean": "🇸🇹",
      "Madagascan": "🇲🇬",
      "Reunionese": "🇷🇪",
      "Mayottean": "🇾🇹",
    }
    return flagMap[country] || "🏳️"
  }

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
      "Type 16 MCV",
      "M-SHORAD",
      "EMBT 120",
      "KF31 Lynx",
      "VT-4A1",
      "Type 74E",
      "YF-23",
      "Gepard 1A2",
      "Type 625E SHORAD",
      "SB-1",
      "T-14 Armata (152)",
      "Leopard 2A7+",
      "M1 Abrams CATTB",
      "XM8 AGS",
      "Object 640",
      "Leopard 2A8",
      "X-2 Shinshin",
      "B-Type",
      "T-90M",
      "Ka-90",
      "T-15 Barbaris",
      "ZTQ-15",
      "Panzer 87-140",
    

    ]
    return marketVehicles.includes(vehicleName)
  }

  const isConstructionVehicle = (vehicleName: string) => {
    const constructionVehicles = [
   
      
      
      
"HARP General Krueger",
"AMX-10RC",,
"2S38 Derivation",
"Object 447A",
"Al Kafil-1",
"Vijayanta",
"Pandur II",



      
    ]
    return constructionVehicles.includes(vehicleName)
  }



  // Missile tagging system
 const antiFlareMissiles = [
  "Kh-47M2 Kinzhal",
  "SAM Rokand",
  "AIM-120 AMRAAM",
  "Naval Spike ER",
  "Red Arrow",
  "R-40TD",
  "R-93M",
  "Storm Shadow",
  "KD-88",
  "CM-102A",
  "9K38 IGLA-V",
  "R-60",
  "9K38 IGLA-V",
  "R-93M",
  "KD-21",
  "Storm Shadow",
  "HD-1A",
  "ADS STARSTREAK",
];

// Standard missile systems
const standardMissiles = [
  "AAM 57E6M",
  "Stinger Launcher",
  "AGM-114 Hellfire",
  "MIM-146",
  "FK-2000",
  "MIM-146",
  "MIM-146",
  "LOSAT MGM",
  "Fliegerfaust 2 Stinger",
  "Crotale-NG-Launcher",
  "ZUR 9M311",
  "FB-10A",
  "SAM Rokand",
  "9M311 Sosna",
  "9M31M HEI",
  "9M31 HEI",
  "9K338 Igla-S HEI",
  "Hongying-6 HEI",
  "9M311 HEI",
  "Roland-1 HEI",
  "Cheonma HEI",
  "FB-10A HEI",
  "AAM 57E6M HEI",
  "Stinger Launcher",
];

const antiWarningMissiles = [
  "SAM Rokand",
  "Kh-47M2 Kinzhal",
  "AIM-120 AMRAAM",
  "AIM-9",
  "AIM-132 ASRAAM",
  "AIM-7 Sparrow",
  "AAM-3",
  "AAM-4",
  "AAM-5",
  "AAM-6",
  "R-73",
  "R-60",
  "R-27",
  "R-93M",
  "R-40TD",
  "PL-2",
  "PL-5",
  "PL-7",
  "PL-10",
  "PL-12",
  "PL-15",
  "Type 90",
  "9K38",
  "Stinger",
  "Fliegerfaust 2 Stinger",
  "HJ-73",
  "HJ-73B",
  "HJ-9",
  "9M14 Malyutka",
  "9M117",
  "9M120 Ataka",
  "BGM-71A",
  "BGM-71H",
  "BGM-71C",
  "BGM-71E",
  "9K135 Kornet",
  "SwitchBlade 300",
  "Hero 120",
  "LASER ATGM (ATGMs Laser)",
  "ATGMs ARL",
  "9K135",
  "9M14",
  "Denel ZT3 Ingwe",
  "Type 90",
  "9K38 IGLA-V",
  "9M120 Attack",
  "R-93M",
  "KD-21",
  "HD-1A",
  "ADS STARSTREAK",
];

const longRangeMissiles = [
  "Kh-47M2 Kinzhal",
  "Storm Shadow",
  "R-37",
  "PL-15",
  "Kh-59M",
  "Kh-69",
  "AIM-54",
  "KD-88",
  "YJ-1000",
  "CM-102A",
  "AGM-84H/K",
  "ASM-3",
  "Kh-47M2",
  "Kh-38ME",
  "Kh-38MLE",
  "S-24",
  "KAB-250",
  "JNAAM",
  "Type 12 STS",
  "Storm Shadow",
  "KAB-250",
  "KD-21",
  "HD-1A",
];

const laserGuidedMissiles = [
  "Kh-47M2 Kinzhal",
  "AGM-12B",
  "TL-20",
  "Kh-59M",
  "Kh-23M",
  "Kh-25MLE",
  "9K121 Vikhr",
  "Kh-38MLE",
  "AGM-169 JAGM",
  "9M120 Ataka",
  "Denel ZT3 Ingwe",
  "9M120 Attack",
  "HD-1A",
  "ADS STARSTREAK",
  "KD-21",
  "S-24",
  "KAB-500L",
  "APKWS",
  "4x BA-21",
  "2x BA-21",
];

const rocketPods = [
  "UB-32-57",
  "B-8V20",
  "LAU-61",
  "LAU-10x3",
  "Type 90",
  "Type 130",
  "LAU-51",
  "LAU-51 x2",
  "B8M1",
  "B-13L",
  "Type 90 x2",
  "JLAU-3/A",
  "C-13DF BLOCK",
  "JLAU-3/A",
  "B8V20",
  "B-13L",
  "UB-32-57",
  "LAU-61",
  "LAU-68",
  "LAU-10",
  "Type 57-1",
  "FS-70",
  "AGR-20 BLR",
  "Telson 12",
  "Telson 22",
];
const missileHasTags = (missileName: string) => {
  const tags = []

  // Maintain specific order: Anti-Flare, Anti-Warning, Long-Range, Laser-guided, Rocket Pod, Standard Missile
  if (antiFlareMissiles.includes(missileName)) {
    tags.push('anti-flare')
  }
  if (antiWarningMissiles.includes(missileName)) {
    tags.push('anti-warning')
  }
  if (longRangeMissiles.includes(missileName)) {
    tags.push('long-range')
  }
  if (laserGuidedMissiles.includes(missileName)) {
    tags.push('laser-guided')
  }
  if (rocketPods.includes(missileName)) {
    tags.push('rocket-pod')
  }
  if (standardMissiles.includes(missileName)) {
    tags.push('missile')
  }

  return tags
}

const getMissileImageCandidates = (weaponName: string) => {
  const getAssetPrefix = () => {
    if (typeof window === 'undefined') return ''
    const fromNext = (window as any).__NEXT_DATA__?.assetPrefix
    if (typeof fromNext === 'string' && fromNext.trim().length > 0) {
      return fromNext.replace(/\/+$/, '')
    }
    const baseHref = (typeof document !== 'undefined'
      ? document.querySelector('base')?.getAttribute('href')
      : null) || ''
    if (baseHref && baseHref !== '/') {
      return baseHref.replace(/\/+$/, '')
    }
    return ''
  }

  const rawName = String(weaponName || '')
  const withoutParentheses = rawName.replace(/\s*\(.*?\)\s*/g, ' ').trim()
  const withNormalizedSpaces = withoutParentheses.replace(/\s+/g, ' ').trim()
  const sanitized = withNormalizedSpaces
    .replace(/["“”'`]+/g, '')
    .replace(/[\\/]+/g, '-')
    .replace(/[<>:*?|]+/g, '')
    .replace(/\s+/g, ' ')
    .trim()
  const sanitizedNoTrailingDots = sanitized.replace(/[.\s]+$/g, '').trim()
  const withHyphenBetweenLettersAndNumbers = sanitizedNoTrailingDots.replace(/([A-Za-z])([0-9])/g, '$1-$2')
  const withHyphensInsteadOfSpaces = sanitizedNoTrailingDots.replace(/\s+/g, '-')
  const withUnderscoresInsteadOfSpaces = sanitizedNoTrailingDots.replace(/\s+/g, '_')

  const encodedBase = encodeURIComponent(sanitizedNoTrailingDots)
  const encodedHyphen = encodeURIComponent(withHyphenBetweenLettersAndNumbers)
  const encodedHyphensInsteadOfSpaces = encodeURIComponent(withHyphensInsteadOfSpaces)
  const encodedUnderscoresInsteadOfSpaces = encodeURIComponent(withUnderscoresInsteadOfSpaces)

  const names = Array.from(
    new Set([
      withNormalizedSpaces,
      sanitizedNoTrailingDots,
      withHyphenBetweenLettersAndNumbers,
      withHyphensInsteadOfSpaces,
      withUnderscoresInsteadOfSpaces,
      sanitizedNoTrailingDots.toLowerCase(),
      withHyphensInsteadOfSpaces.toLowerCase(),
      withUnderscoresInsteadOfSpaces.toLowerCase(),
      encodedBase,
      encodedHyphen,
      encodedHyphensInsteadOfSpaces,
      encodedUnderscoresInsteadOfSpaces,
    ])
  ).filter(Boolean)

  const exts = ['jpg', 'png', 'webp', 'jpeg']
  const out: string[] = []

  const prefix = getAssetPrefix()
  const withPrefix = (p: string) => {
    if (!prefix) return p
    if (prefix === '.') return `.${p}`
    if (prefix.startsWith('http://') || prefix.startsWith('https://')) return `${prefix}${p}`
    return `${prefix}${p}`
  }

  const add = (p: string) => {
    out.push(withPrefix(p))
    if (p.startsWith('/')) out.push(withPrefix(p.slice(1)))
  }

  for (const n of names) add(`/missile/${n}.jpg`)
  for (const n of names) {
    for (const ext of exts) add(`/missile/${n}.${ext}`)
  }
  return out
}


  const isExclusiveVehicle = (vehicleName: string) => {
    const exclusiveVehicles = [
"Leopard 2A4",
"Alpha Jet A",
"Su-24M",
"M270 MLRS",
"Otomatic 76",
"F-16C Night Falcon",
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
"OH-1 Ninja",
"PGZ-09",
"Type-61",
"T54E1",
"BTR-60PB",
"Altay",
"Leopard 2A-RC 3.0",
"MGM-166 LOSAT",
"AMX-30 Super",
"M60A3 (MZK)",
"Type 75 MLRS",
"Mi-24 Super Hind",
"ZBL-08",
"XM1 (GM)",
"Centauro I 120",
"K21 KNIFV",
"K2 Black Panther",
"Strf 9040 BILL",
"Merkava Mk.3",
"F-5E Tiger II",
"ERC-90 F4 Sagaie",
"Su-47 Berkut",
"ZLT-11",
"TAN-SAM-1C",
"T-72B1",
"RAH-66 Comanche",
"Leopard 2 Revolution",
"FV101 Scorpion-90",
"M60A3 TTS",
"M1 AGDS",
"M1A1 AIM TUSK",
"EC-665 Tiger HAP",
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
• Tier: ${formatTier(vehicle.tier)}
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

${isMarketVehicle(vehicle.name) ? " PREMIUM VEHICLE - Available in Market" : isConstructionVehicle(vehicle.name) ? " CONSTRUCTION VEHICLE - Under Development" : isExclusiveVehicle(vehicle.name) ? " EXCLUSIVE VEHICLE - Only obtained from Gatchs and Events" : " Standard Vehicle"}`
  }

  const normalizeForSearch = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "")

  // First, separate new vehicles from others
  const [newVehiclesList, otherVehiclesList] = [...VEHICLES].reduce(
    (acc, vehicle) => {
      const normalizedName = normalizeForSearch(vehicle.name)
      const normalizedQuery = normalizeForSearch(searchQuery)
      const matchesSearch = normalizedName.includes(normalizedQuery)
      const matchesType = typeFilter.length === 0 || typeFilter.includes(vehicle.type)
      const matchesTier = tierFilter.length === 0 || tierFilter.includes(formatTier(vehicle.tier))
      const matchesCountry = countryFilter.length === 0 || countryFilter.includes(vehicle.faction)
      const matchesRarity = rarityFilter.length === 0 || rarityFilter.includes(getVehicleRarity(vehicle.name))
      const matchesObtainMethod = obtainMethodFilter.length === 0 || obtainMethodFilter.some(method => getVehicleObtainMethod(vehicle.name).includes(method))
      const matchesFavorites = !showFavoritesOnly || favorites.has(vehicle.id.toString())
      
      // Apply category filter
      let matchesCategory = true
      if (activeCategory === 'market') {
        matchesCategory = isMarketVehicle(vehicle.name)
      } else if (activeCategory === 'event') {
        matchesCategory = isExclusiveVehicle(vehicle.name)
      } else if (activeCategory === 'upcoming') {
        matchesCategory = isUpcomingVehicle(vehicle.name)
      }
      
      if (matchesSearch && matchesType && matchesTier && matchesCountry && matchesRarity && matchesObtainMethod && matchesFavorites && matchesCategory) {
        if (isNewVehicle(vehicle.name)) {
          acc[0].push(vehicle)
        } else {
          acc[1].push(vehicle)
        }
      }
      return acc
    },
    [[], []] as [Vehicle[], Vehicle[]]
  )

  // Filter vehicles by type if a filter is active
  const filterVehiclesByType = (vehicles: any[]) => {
    if (!vehicleTypeFilter) return vehicles;
    
    return vehicles.filter(vehicle => {
      const type = vehicle.type?.toLowerCase();
      if (vehicleTypeFilter === 'jets') {
        return ['jet', 'bomber', 'fighter jet'].includes(type);
      } else if (vehicleTypeFilter === 'heli') {
        return type === 'helicopter';
      } else if (vehicleTypeFilter === 'tanks') {
        return [
          'tank', 'ifv', 'spaa', 'td', 
          'main battle tank', 'light tank', 'tank destroyer',
          'mlrs', 'missile carrier', 'sph', 'anti-air'
        ].includes(type);
      }
      return true;
    });
  };

  // Combine new vehicles first, then all other vehicles in their original order, and apply type filter
  const filteredVehicles = filterVehiclesByType([...newVehiclesList, ...otherVehiclesList])

  const indexOfLastVehicle = currentPage * vehiclesPerPage
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage
  const paginatedVehicles = filteredVehicles.slice(indexOfFirstVehicle, indexOfLastVehicle)

  const toggleCompare = (id: string) => {
    if (compare.includes(id)) {
      setCompare(compare.filter((vehicleId) => vehicleId !== id))
    } else if (compare.length < 2) {
      const newCompare = [...compare, id]
      setCompare(newCompare)
      
      // Auto-scroll to comparison when second vehicle is selected
      if (newCompare.length === 2) {
        setTimeout(() => {
          comparisonRef.current?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          })
        }, 100)
      }
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
            const prevSpeed = prev.stats.afterburnerSpeed || prev.stats.speed || 0
            const currentSpeed = current.stats.afterburnerSpeed || current.stats.speed || 0
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

        // Sample vehicle data for testing
      const testVehicles = [
        {
          name: "Abrams X",
          country: "USA",
          tier: 3,
          role: "MBT",
          health: 40300,
          armor: 1100,
          speed: 75,
          agility: 35,
          image: "abrams-x.jpg"
        },
        {
          name: "Challenger 3",
          country: "UK",
          tier: 4,
          role: "MBT",
          health: 43000,
          armor: 1180,
          speed: 70,
          agility: 32,
          image: "challenger3.jpg"
        },
        {
          name: "MiG-41M",
          country: "Russia",
          tier: 4,
          role: "Fighter Jet",
          health: 23800,
          speed: 1800,
          agility: 75,
          image: "mig41m.jpg"
        },
        {
          name: "F-35C Lightning II",
          country: "USA",
          tier: 3,
          role: "Fighter Jet",
          health: 22500,
          speed: 1650,
          agility: 68,
          image: "f35c.jpg"
        }
      ]

      // Enhanced synonym mapping
      const countryMap: { [key: string]: string } = { 
        american: "USA", us: "USA", usa: "USA", 
        german: "Germany", germany: "Germany",
        russian: "Russia", russia: "Russia", 
        british: "UK", uk: "UK", britain: "UK",
        chinese: "China", china: "China",
        french: "France", france: "France",
        japanese: "Japan", japan: "Japan",
        israeli: "Israel", israel: "Israel",
        italian: "Italy", italy: "Italy"
      }
      
      const roleMap: { [key: string]: string } = { 
        tank: "MBT", mbt: "MBT", "main battle tank": "MBT", 
        jet: "Fighter Jet", fighter: "Fighter Jet", "fighter jet": "Fighter Jet",
        sph: "Self-Propelled Howitzer", "self-propelled artillery": "Self-Propelled Howitzer",
        artillery: "Self-Propelled Howitzer",
        interceptor: "Interceptor",
        helicopter: "Helicopter",
        mlrs: "MLRS"
      }
      
      const tierMap: { [key: string]: number } = { 
        "tier 1": 1, "tier i": 1, "tier 2": 2, "tier ii": 2, 
        "tier 3": 3, "tier iii": 3, "tier 4": 4, "tier iv": 4,
        "tier 5": 5, "tier v": 5, "tier 6": 6, "tier vi": 6,
        "tier 7": 7, "tier vii": 7, "tier 8": 8, "tier viii": 8,
        "tier 9": 9, "tier ix": 9, "tier 10": 10, "tier x": 10
      }

      // Parse query function
      const parseQuery = (query: string) => {
        const lowerQuery = query.toLowerCase()
        let country, tier, role

        for (const key in countryMap) {
          if (lowerQuery.includes(key)) {
            country = countryMap[key]
            break
          }
        }
        for (const key in roleMap) {
          if (lowerQuery.includes(key)) {
            role = roleMap[key]
            break
          }
        }
        for (const key in tierMap) {
          if (lowerQuery.includes(key)) {
            tier = tierMap[key]
            break
          }
        }

        return { country, tier, role }
      }

      // Ranking function - use VEHICLES database structure
      const rankVehicle = (vehicle: any) => {
        if (vehicle.type === "MBT") return (vehicle.stats.health || 0) + (vehicle.stats.armor || 0)
        if (vehicle.type === "Fighter Jet") return (vehicle.stats.speed || 0) + (vehicle.stats.agility || 0)
        if (vehicle.type === "Self-Propelled Howitzer") return (vehicle.stats.damage || vehicle.stats.health || 0) + (vehicle.stats.range || vehicle.stats.armor || 0)
        return vehicle.stats.health || 0
      }

      // Strict filtering with fallback - ALWAYS use full VEHICLES database
      const findBestVehicle = (query: string) => {
        const { country, tier, role } = parseQuery(query)
        
        // Always use full VEHICLES database
        const vehicleData = VEHICLES

        // First try exact match with proper field mapping
        let results = vehicleData.filter((v: any) => {
          const countryMatch = !country || v.faction === country
          const tierMatch = !tier || v.tier === tier
          const roleMatch = !role || v.type === role
          return countryMatch && tierMatch && roleMatch
        })

        let note = ""
        let fallbackUsed = false

        // If we have all three criteria but no exact match, try fallbacks
        if (results.length === 0 && country && tier && role) {
          // Fallback A: Ignore tier, match country + role
          results = vehicleData.filter((v: any) => v.faction === country && v.type === role)
          if (results.length > 0) {
            const availableTiers = [...new Set(results.map((v: any) => v.tier))].sort()
            note = `No Tier ${tier} ${role}s found in ${country}. Available tiers: ${availableTiers.map(t => formatTier(t)).join(', ')}.`
            fallbackUsed = true
          }
        }
        
        // Fallback B: Ignore country, match tier + role
        if (results.length === 0 && tier && role) {
          results = vehicleData.filter((v: any) => v.tier === tier && v.type === role)
          if (results.length > 0) {
            note = `No ${country || 'specified country'} Tier ${tier} ${role}s found. Showing vehicles from other nations.`
            fallbackUsed = true
          }
        }
        
        // Fallback C: Match role only
        if (results.length === 0 && role) {
          results = vehicleData.filter((v: any) => v.type === role)
          if (results.length > 0) {
            note = `No Tier ${tier || 'specified tier'} ${role}s found. Showing best available ${role}.`
            fallbackUsed = true
          }
        }

        if (results.length === 0) return null

        // Pick top ranked
        const best = results.sort((a: any, b: any) => rankVehicle(b) - rankVehicle(a))[0]

        return {
          type: 'vehicle_details',
          vehicle: {
            name: best.name,
            image: best.image,
            type: best.type,
            faction: best.faction,
            tier: formatTier(best.tier),
            description: best.description,
            isPremium: (best as any).isPremium || false,
            isMarket: (best as any).isMarket || false,
            stats: {
              health: best.stats.health,
              speed: best.stats.speed,
              armor: best.stats.armor,
              agility: best.stats.agility
            }
          },
          context: fallbackUsed ? `🔍 CLOSEST MATCH: ${note}` : `🎯 EXACT MATCH: TIER ${formatTier(best.tier)} ${best.faction} ${best.type} RECOMMENDATION`
        }
      }

      // Vehicle filtering and selection logic
      // Step 1: Normalize input mapping
      const normalizeCountry = (input: string): string => {
        const countryMap: { [key: string]: string } = {
          'american': 'USA',
          'us': 'USA', 
          'usa': 'USA',
          'german': 'Germany',
          'germany': 'Germany',
          'russian': 'Russia',
          'russia': 'Russia',
          'british': 'UK',
          'uk': 'UK',
          'britain': 'UK',
          'chinese': 'China',
          'china': 'China',
          'french': 'France',
          'france': 'France',
          'japanese': 'Japan',
          'japan': 'Japan',
          'israeli': 'Israel',
          'israel': 'Israel',
          'italian': 'Italy',
          'italy': 'Italy'
        }
        return countryMap[input.toLowerCase()] || input
      }

      const normalizeRole = (input: string): string => {
        const roleMap: { [key: string]: string } = {
          'tank': 'MBT',
          'mbt': 'MBT',
          'main battle tank': 'MBT',
          'jet': 'Fighter Jet',
          'fighter': 'Fighter Jet',
          'fighter jet': 'Fighter Jet',
          'sph': 'Self-Propelled Howitzer',
          'self-propelled artillery': 'Self-Propelled Howitzer',
          'artillery': 'Self-Propelled Howitzer',
          'interceptor': 'Interceptor',
          'helicopter': 'Helicopter',
          'mlrs': 'MLRS'
        }
        return roleMap[input.toLowerCase()] || input
      }

      // Step 2: Strict filtering with exact database field matching
      const filterVehicles = (filters: {
        tier?: number,
        role?: string,
        nation?: string,
        premium?: boolean,
        market?: boolean
      }) => {
        return VEHICLES.filter(vehicle => {
          if (filters.tier && vehicle.tier !== filters.tier) return false
          if (filters.role && vehicle.type !== filters.role) return false // Exact match
          if (filters.nation && vehicle.faction !== filters.nation) return false // Exact match
          if (filters.premium !== undefined && (vehicle as any).isPremium !== filters.premium) return false
          if (filters.market !== undefined && (vehicle as any).isMarket !== filters.market) return false
          return true
        })
      }

      const getBestVehicle = (vehicles: any[], criteria: 'health' | 'armor' | 'agility' | 'speed' | 'mbt_combined' | 'jet_combined' | 'sph_combined' = 'health') => {
        if (vehicles.length === 0) return null
        
        return vehicles.reduce((best, current) => {
          let bestScore = 0
          let currentScore = 0
          
          if (criteria === 'mbt_combined') {
            // MBT: Health + Armor
            bestScore = (best.stats.health || 0) + (best.stats.armor || 0)
            currentScore = (current.stats.health || 0) + (current.stats.armor || 0)
          } else if (criteria === 'jet_combined') {
            // Jets: Speed + Agility
            bestScore = (best.stats.speed || 0) + (best.stats.agility || 0)
            currentScore = (current.stats.speed || 0) + (current.stats.agility || 0)
          } else if (criteria === 'sph_combined') {
            // SPH: Damage + Range (fallback to health if damage/range not available)
            bestScore = (best.stats.damage || best.stats.health || 0) + (best.stats.range || best.stats.armor || 0)
            currentScore = (current.stats.damage || current.stats.health || 0) + (current.stats.range || current.stats.armor || 0)
          } else {
            // Single stat criteria
            bestScore = best.stats[criteria] || 0
            currentScore = current.stats[criteria] || 0
          }
          
          return currentScore > bestScore ? current : best
        })
      }

      // Clean and essential vehicle information formatting
      const formatVehicleDetails = (vehicle: any, context = "") => {
        if (!vehicle) {
          return {
            type: 'no_vehicle_found',
            message: "🔍 Searching through all available vehicles..."
          }
        }

        const vehicleSlug = vehicle.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')
        
        // Create a structured message object with new emoji format
        return {
          type: 'vehicle_details',
          vehicle: {
            name: vehicle.name,
            image: vehicle.image,
            type: vehicle.type,
            faction: vehicle.faction,
            tier: formatTier(vehicle.tier),
            description: vehicle.description,
            isPremium: vehicle.isPremium || false,
            isMarket: vehicle.isMarket || false,
            stats: {
              health: vehicle.stats.health,
              speed: vehicle.stats.speed,
              armor: vehicle.stats.armor,
              agility: vehicle.stats.agility
            },
            url: `https://mwt-stats.com/vehicles/${vehicleSlug}`
          },
          context: context
        }
      }

      // Advanced query processing with ChatGPT-like intelligence

      // Try the new findBestVehicle function first
      if (lowerQuery.includes("best") || lowerQuery.includes("top") || lowerQuery.includes("fastest") || lowerQuery.includes("strongest") || lowerQuery.includes("toughest")) {
        const result = findBestVehicle(lowerQuery)
        if (result) {
          return result
        }
        // Fallback to original logic if new function doesn't find anything
      }

      // Enhanced "best" vehicle queries with intelligent filtering
      if (lowerQuery.includes("best") || lowerQuery.includes("top") || lowerQuery.includes("fastest") || lowerQuery.includes("strongest") || lowerQuery.includes("toughest")) {
        let filters: any = {}
        let criteria: 'health' | 'armor' | 'agility' | 'speed' = 'health'
        
        // Parse tier with multiple formats
        const tierMatch = lowerQuery.match(/tier\s*(i{1,4}|v|vi{1,3}|ix|x|\d+)/i)
        if (tierMatch) {
          const tierStr = tierMatch[1].toLowerCase()
          if (tierStr === 'i' || tierStr === '1') filters.tier = 1
          else if (tierStr === 'ii' || tierStr === '2') filters.tier = 2
          else if (tierStr === 'iii' || tierStr === '3') filters.tier = 3
          else if (tierStr === 'iv' || tierStr === '4') filters.tier = 4
          else if (tierStr === 'v' || tierStr === '5') filters.tier = 5
          else if (tierStr === 'vi' || tierStr === '6') filters.tier = 6
          else if (tierStr === 'vii' || tierStr === '7') filters.tier = 7
          else if (tierStr === 'viii' || tierStr === '8') filters.tier = 8
          else if (tierStr === 'ix' || tierStr === '9') filters.tier = 9
          else if (tierStr === 'x' || tierStr === '10') filters.tier = 10
          else filters.tier = parseInt(tierStr)
        }
        
        // Step 1: Normalize input using mapping functions
        if (lowerQuery.includes('mbt') || lowerQuery.includes('main battle tank') || lowerQuery.includes('tank')) {
          filters.role = normalizeRole('tank')
        } else if (lowerQuery.includes('spa') || lowerQuery.includes('self-propelled artillery') || lowerQuery.includes('artillery')) {
          filters.role = normalizeRole('spa')
        } else if (lowerQuery.includes('interceptor')) {
          filters.role = normalizeRole('interceptor')
        } else if (lowerQuery.includes('fighter jet') || lowerQuery.includes('fighter')) {
          filters.role = normalizeRole('fighter')
        } else if (lowerQuery.includes('jet')) {
          filters.role = normalizeRole('jet')
        } else if (lowerQuery.includes('helicopter')) {
          filters.role = normalizeRole('helicopter')
        } else if (lowerQuery.includes('mlrs')) {
          filters.role = normalizeRole('mlrs')
        }
        
        // Step 1: Normalize country input
        if (lowerQuery.includes('american') || lowerQuery.includes('usa') || lowerQuery.includes('us')) {
          filters.nation = normalizeCountry('american')
        } else if (lowerQuery.includes('russian') || lowerQuery.includes('russia')) {
          filters.nation = normalizeCountry('russian')
        } else if (lowerQuery.includes('chinese') || lowerQuery.includes('china')) {
          filters.nation = normalizeCountry('chinese')
        } else if (lowerQuery.includes('german') || lowerQuery.includes('germany')) {
          filters.nation = normalizeCountry('german')
        } else if (lowerQuery.includes('british') || lowerQuery.includes('uk') || lowerQuery.includes('britain')) {
          filters.nation = normalizeCountry('british')
        } else if (lowerQuery.includes('french') || lowerQuery.includes('france')) {
          filters.nation = normalizeCountry('french')
        } else if (lowerQuery.includes('japanese') || lowerQuery.includes('japan')) {
          filters.nation = normalizeCountry('japanese')
        } else if (lowerQuery.includes('israeli') || lowerQuery.includes('israel')) {
          filters.nation = normalizeCountry('israeli')
        } else if (lowerQuery.includes('italian') || lowerQuery.includes('italy')) {
          filters.nation = normalizeCountry('italian')
        }
        
        // Step 3: Determine criteria based on normalized role
        if (filters.role === 'Fighter Jet' || filters.role === 'Interceptor') {
          criteria = 'jet_combined' // Speed + Agility
        } else if (filters.role === 'MBT') {
          criteria = 'mbt_combined' // Health + Armor
        } else if (filters.role === 'Self-Propelled Howitzer') {
          criteria = 'sph_combined' // Damage + Range
        }
        
        // Step 2: Strict filtering before any fallback
        let filteredVehicles = filterVehicles(filters)
        let bestVehicle = getBestVehicle(filteredVehicles, criteria)
        let contextMessage = ""
        let fallbackUsed = false
        let fallbackType = ""
        
        // Store original filters for display and fallback logic
        const originalFilters = { ...filters }
        
        // Step 4: Tier enforcement - check if requested tier exists
        let tierAvailabilityMessage = ""
        if (originalFilters.tier && !bestVehicle) {
          // Check if the role exists in other tiers
          const roleOnlyFilters = { role: originalFilters.role, nation: originalFilters.nation }
          const roleVehicles = filterVehicles(roleOnlyFilters)
          if (roleVehicles.length > 0) {
            const availableTiers = [...new Set(roleVehicles.map(v => v.tier))].sort()
            tierAvailabilityMessage = `No Tier ${formatTier(originalFilters.tier)} ${originalFilters.role} found. Available tiers: ${availableTiers.map(t => formatTier(t)).join(', ')}.`
          }
        }
        
        // Fallback A: Ignore tier, match country + role
        if (!bestVehicle && filters.tier && (filters.nation || filters.role)) {
          delete filters.tier
          filteredVehicles = filterVehicles(filters)
          bestVehicle = getBestVehicle(filteredVehicles, criteria)
          if (bestVehicle) {
            fallbackUsed = true
            fallbackType = "tier ignored"
          } else {
            filters.tier = originalFilters.tier // Reset
          }
        }
        
        // Fallback B: Ignore country, match tier + role
        if (!bestVehicle && filters.nation && (filters.tier || filters.role)) {
          filters = { ...originalFilters } // Reset to original
          delete filters.nation
          filteredVehicles = filterVehicles(filters)
          bestVehicle = getBestVehicle(filteredVehicles, criteria)
          if (bestVehicle) {
            fallbackUsed = true
            fallbackType = "country ignored"
          } else {
            filters.nation = originalFilters.nation // Reset
          }
        }
        
        // Fallback C: Ignore both, match role only
        if (!bestVehicle && filters.role) {
          filters = { role: originalFilters.role } // Keep only role
          filteredVehicles = filterVehicles(filters)
          bestVehicle = getBestVehicle(filteredVehicles, criteria)
          if (bestVehicle) {
            fallbackUsed = true
            fallbackType = "tier and country ignored"
          }
        }
        
        // Final safety: Should never happen with proper vehicle database
        if (!bestVehicle) {
          filteredVehicles = VEHICLES
          bestVehicle = getBestVehicle(filteredVehicles, criteria)
          fallbackUsed = true
          fallbackType = "all filters ignored"
        }
        
        // Step 5: Build context message with fallback indication
        if (fallbackUsed) {
          contextMessage = `🔍 CLOSEST MATCH (${fallbackType}): `
        }
        
        // Add tier availability message if applicable
        if (tierAvailabilityMessage) {
          contextMessage += tierAvailabilityMessage + " "
        }
        
        // Use original filters for display to show what user requested
        if (originalFilters.tier) contextMessage += `TIER ${formatTier(originalFilters.tier)} `
        if (originalFilters.nation) contextMessage += `${originalFilters.nation.toUpperCase()} `
        if (originalFilters.role) contextMessage += `${originalFilters.role.toUpperCase()} `
        contextMessage += "RECOMMENDATION"
        
        return formatVehicleDetails(bestVehicle, contextMessage)
      }
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
            const getCountryFlag = (faction: string) => {
              const flags: { [key: string]: string } = {
                'American': '🇺🇸',
                'Russian': '🇷🇺', 
                'Chinese': '🇨🇳',
                'German': '🇩🇪',
                'British': '🇬🇧',
                'French': '🇫🇷',
                'Israeli': '🇮🇱',
                'Japanese': '🇯🇵',
                'Italian': '🇮🇹',
                'Indian': '🇮🇳',
                'Pakistani': '🇵🇰'
              }
              return flags[faction] || '🏳️'
            }

            return {
              type: 'vehicle_comparison',
              vehicles: [
                {
                  name: vehicle1.name,
                  image: vehicle1.image,
                  faction: vehicle1.faction,
                  type: vehicle1.type,
                  tier: formatTier(vehicle1.tier),
                  flag: getCountryFlag(vehicle1.faction),
                  stats: {
                    health: vehicle1.stats.health,
                    speed: vehicle1.stats.speed,
                    armor: vehicle1.stats.armor,
                    agility: vehicle1.stats.agility
                  }
                },
                {
                  name: vehicle2.name,
                  image: vehicle2.image,
                  faction: vehicle2.faction,
                  type: vehicle2.type,
                  tier: formatTier(vehicle2.tier),
                  flag: getCountryFlag(vehicle2.faction),
                  stats: {
                    health: vehicle2.stats.health,
                    speed: vehicle2.stats.speed,
                    armor: vehicle2.stats.armor,
                    agility: vehicle2.stats.agility
                  }
                }
              ],
              analysis: {
                survivability: vehicle1.stats.health > vehicle2.stats.health ? vehicle1.name : vehicle2.name,
                survivabilityValue: Math.max(vehicle1.stats.health, vehicle2.stats.health),
                speed: (vehicle1.stats.speed || 0) > (vehicle2.stats.speed || 0) ? vehicle1.name : vehicle2.name,
                speedValue: Math.max(vehicle1.stats.speed || 0, vehicle2.stats.speed || 0),
                agility: (vehicle1.stats.agility || 0) > (vehicle2.stats.agility || 0) ? vehicle1.name : vehicle2.name,
                agilityValue: Math.max(vehicle1.stats.agility || 0, vehicle2.stats.agility || 0),
                tier: vehicle1.tier === vehicle2.tier ? "Equal tier" : vehicle1.tier > vehicle2.tier ? vehicle1.name : vehicle2.name
              },
              recommendation: vehicle1.stats.health > vehicle2.stats.health ? vehicle1.name : vehicle2.name
            }
          }
        }
      }

      // Individual vehicle search with enhanced details
      const foundVehicle = searchVehicle(lowerQuery)
      if (foundVehicle) {
        return formatVehicleDetails(foundVehicle)
      }

      // Tier and nation listings with clean formatting
      if (lowerQuery.includes("tier ii") || lowerQuery.includes("tier 2")) {
        const tierVehicles = VEHICLES.filter((v) => v.tier === "Tier II")
        let response = `**Tier II Combat Vehicles**\n`
        response += `${tierVehicles.length} intermediate-tier platforms:\n\n`
        tierVehicles.forEach(v => {
          response += `• ${v.name} (${v.faction} ${v.type}) - ${v.stats.health.toLocaleString()} HP\n`
        })
        return response
      }

      if (lowerQuery.includes("tier iii") || lowerQuery.includes("tier 3")) {
        const tierVehicles = VEHICLES.filter((v) => v.tier === "Tier III")
        let response = `**Tier III Combat Vehicles**\n`
        response += `${tierVehicles.length} advanced platforms:\n\n`
        tierVehicles.forEach(v => {
          response += `• ${v.name} (${v.faction} ${v.type}) - ${v.stats.health.toLocaleString()} HP\n`
        })
        return response
      }

      if (lowerQuery.includes("tier iv") || lowerQuery.includes("tier 4")) {
        const tierVehicles = VEHICLES.filter((v) => v.tier === "Tier IV")
        let response = `**Tier IV Combat Vehicles**\n`
        response += `${tierVehicles.length} cutting-edge platforms:\n\n`
        tierVehicles.forEach(v => {
          response += `• ${v.name} (${v.faction} ${v.type}) - ${v.stats.health.toLocaleString()} HP\n`
        })
        return response
      }

      // Help and default responses with clean formatting
      if (lowerQuery.includes("help") || lowerQuery.includes("what can you do")) {
        return `**MWT AI Tactical Analysis System**\n\n` +
               `I can help you analyze military vehicles. Here's what I can do:\n\n` +
               `**Vehicle Analysis:**\n` +
               `• Individual specs: "Su-57M"\n` +
               `• Head-to-head comparisons: "T-14 vs Abrams X"\n\n` +
               `**Performance Queries:**\n` +
               `• Speed analysis: "Fastest tank"\n` +
               `• Durability rankings: "Strongest jet"\n` +
               `• Protection analysis: "Most armored vehicle"\n\n` +
               `**Nation Analysis:**\n` +
               `• Best by nation: "Best Russian vehicle"\n` +
               `• Fleet listings: "American vehicles"\n\n` +
               `**Data Insights:**\n` +
               `• Tier breakdowns: "Tier IV vehicles"\n` +
               `• Category listings: "Market vehicles"\n\n` +
               `What would you like to analyze?`
      }

      // Default response with clean formatting
      return `**MWT AI Tactical Analysis System**\n\n` +
             `I didn't recognize that query, but I can analyze our database of ${VEHICLES.length} combat vehicles.\n\n` +
             `**Try asking:**\n` +
             `• "What's the fastest tank?" - Performance analysis\n` +
             `• "Su-57M vs F-22" - Combat comparison\n` +
             `• "Best Chinese vehicle" - Nation rankings\n` +
             `• "Tier IV vehicles" - Category listings\n\n` +
             `What would you like to analyze?`
    }

    setTimeout(() => {
      const response = getVehicleInfo(chatInput)
      const botMessage = { role: "assistant", content: response }
      setChatMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
      setChatInput("")
    }, 1000)
  }

  const Page = () => {
    const [activePage, setActivePage] = useState('home');

    return (
      <div className="min-h-screen bg-gray-900 text-white p-4">
        <div className="max-w-7xl mx-auto">
          <Pages activePage={activePage} onPageChange={setActivePage} />
          
          {activePage === 'home' && <MwtVehicleStats />}
          {activePage === 'about' && <AboutPage />}
          {activePage === 'contact' && <ContactPage />}
          {activePage === 'privacy' && <PrivacyPolicyPage />}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {showLoginForm && <LoginForm onClose={() => setShowLoginForm(false)} onLogin={handleLogin} />}
      
      {/* Burger Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute top-6 left-4 z-50 p-2 sm:p-3 bg-slate-800/90 hover:bg-slate-700/90 backdrop-blur-sm rounded-xl border border-slate-600/50 transition-all duration-200 group shadow-lg sm:top-6 sm:left-6"
        aria-label="Menu"
      >
        <div className="flex flex-col gap-1.5">
          <div className="w-6 h-0.5 bg-slate-300 group-hover:bg-white transition-colors duration-200 rounded-full"></div>
          <div className="w-6 h-0.5 bg-slate-300 group-hover:bg-white transition-colors duration-200 rounded-full"></div>
          <div className="w-6 h-0.5 bg-slate-300 group-hover:bg-white transition-colors duration-200 rounded-full"></div>
        </div>
      </button>

      {/* Filter Button */}
      <motion.button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className={`absolute top-6 right-4 z-40 p-2 sm:p-3 backdrop-blur-sm rounded-xl border transition-all duration-200 group shadow-lg sm:top-6 sm:right-6 flex items-center gap-2 ${
          (typeFilter.length > 0 || tierFilter.length > 0 || countryFilter.length > 0 || rarityFilter.length > 0 || obtainMethodFilter.length > 0) 
            ? "bg-cyan-600/90 hover:bg-cyan-700/90 border-cyan-500/50" 
            : "bg-slate-800/90 hover:bg-slate-700/90 border-slate-600/50"
        }`}
        aria-label="Filter"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ 
          delay: 0.1,
          type: "spring",
          damping: 25,
          stiffness: 200
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{
            rotate: isFilterOpen ? 180 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <Filter className={`w-5 h-5 ${
            (typeFilter.length > 0 || tierFilter.length > 0 || countryFilter.length > 0 || rarityFilter.length > 0 || obtainMethodFilter.length > 0) 
              ? "text-white" 
              : "text-slate-300 group-hover:text-white"
          }`} />
        </motion.div>
        {(typeFilter.length > 0 || tierFilter.length > 0 || countryFilter.length > 0 || rarityFilter.length > 0 || obtainMethodFilter.length > 0) && (
          <span className="w-2 h-2 bg-white rounded-full"></span>
        )}
      </motion.button>

      {/* Sliding Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-slate-800 to-slate-900 border-r border-slate-600/50 z-50 shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-white">Menu</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 text-slate-300 hover:text-white" />
                  </button>
                </div>
                
                <nav className="space-y-2">
                  <div className="relative">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                      className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-700/50 hover:bg-slate-700/80 border border-slate-600/50 hover:border-slate-500/50 transition-all duration-200 group"
                    >
                      <Languages className="w-5 h-5 text-green-400 group-hover:text-green-300" />
                      <span className="text-white font-medium group-hover:text-green-300 transition-colors duration-200">{t('menu.language')}</span>
                      <ChevronDown className={`w-4 h-4 text-green-400 group-hover:text-green-300 transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
                    </motion.button>
                    
                    {/* Language Dropdown */}
                    <AnimatePresence>
                      {isLanguageDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-600/50 rounded-xl shadow-lg z-10 overflow-hidden"
                        >
                          <button
                            onClick={() => {
                              setSelectedLanguage('English');
                              setTranslations(englishTranslations);
                              localStorage.setItem('mwt_selected_language', 'English');
                              setIsLanguageDropdownOpen(false);
                              setIsMenuOpen(false);
                            }}
                            className={`w-full px-4 py-3 text-left hover:bg-slate-700/50 transition-colors duration-200 ${selectedLanguage === 'English' ? 'bg-slate-700/30' : ''}`}
                          >
                            <span className={`text-sm font-medium ${selectedLanguage === 'English' ? 'text-green-300' : 'text-slate-300 hover:text-white'}`}>English</span>
                          </button>
                          <button
                            onClick={() => {
                              setSelectedLanguage('Urdu');
                              setTranslations(urduTranslations);
                              localStorage.setItem('mwt_selected_language', 'Urdu');
                              setIsLanguageDropdownOpen(false);
                              setIsMenuOpen(false);
                            }}
                            className={`w-full px-4 py-3 text-left hover:bg-slate-700/50 transition-colors duration-200 ${selectedLanguage === 'Urdu' ? 'bg-slate-700/30' : ''}`}
                          >
                            <span className={`text-sm font-medium ${selectedLanguage === 'Urdu' ? 'text-green-300' : 'text-slate-300 hover:text-white'}`}>Urdu</span>
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setBattlePassOpen(true);
                    }}
                    className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-700/50 hover:bg-slate-700/80 border border-slate-600/50 hover:border-slate-500/50 transition-all duration-200 group"
                  >
                    <Trophy className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300" />
                    <span className="text-white font-medium group-hover:text-yellow-300 transition-colors duration-200">{t('menu.battlePass')}</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setEventOpen(true);
                    }}
                    className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-700/50 hover:bg-slate-700/80 border border-slate-600/50 hover:border-slate-500/50 transition-all duration-200 group"
                  >
                    <Gift className="w-5 h-5 text-pink-400 group-hover:text-pink-300" />
                    <span className="text-white font-medium group-hover:text-pink-300 transition-colors duration-200">Event</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setShowAbout(true);
                    }}
                    className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-700/50 hover:bg-slate-700/80 border border-slate-600/50 hover:border-slate-500/50 transition-all duration-200 group"
                  >
                    <Bot className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                    <span className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-200">{t('menu.about')}</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setShowCredits(true);
                    }}
                    className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-700/50 hover:bg-slate-700/80 border border-slate-600/50 hover:border-slate-500/50 transition-all duration-200 group"
                  >
                    <Calendar className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                    <span className="text-white font-medium group-hover:text-purple-300 transition-colors duration-200">{t('menu.credits')}</span>
                  </motion.button>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* Sliding Filter Panel */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            {/* Filter Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            
            {/* Filter Panel */}
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 bg-gradient-to-b from-slate-800 to-slate-900 border-l border-slate-600/50 z-50 shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-white">Filters</h2>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
                    aria-label="Close filters"
                  >
                    <X className="w-6 h-6 text-slate-300 hover:text-white" />
                  </button>
                </div>
                
                {/* Clear All Filters Button */}
                {(typeFilter || tierFilter || countryFilter || rarityFilter || obtainMethodFilter) && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setTypeFilter("")
                      setTierFilter("")
                      setCountryFilter("")
                      setRarityFilter("")
                      setObtainMethodFilter("")
                    }}
                    className="w-full mb-6 px-4 py-3 bg-red-600/20 border border-red-600/30 rounded-xl text-red-400 font-medium hover:bg-red-600/30 hover:text-red-300 transition-colors"
                  >
                    Clear All Filters
                  </motion.button>
                )}
                
                <div className="space-y-6 relative">
                  {/* Category Toggle Buttons */}
                  <div className="mb-4 space-y-2 flex flex-col items-center">
                    {[
                      { id: 'market', label: 'Market', color: 'orange' },
                      { id: 'event', label: 'Event/Gacha', color: 'purple' },
                      { id: 'upcoming', label: 'Upcoming', color: 'red' },
                      { id: 'all', label: 'Show All Vehicles', color: 'cyan' }
                    ].map(({ id, label, color }) => (
                      <motion.div 
                        key={id}
                        className="relative overflow-hidden rounded-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button
                          onClick={() => setActiveCategory(id as any)}
                          className={`relative w-48 text-center p-2 text-sm rounded-lg border transition-all duration-200 ${
                            activeCategory === id 
                              ? `bg-${color}-600/30 border-${color}-500/50 text-${color}-300` 
                              : 'bg-slate-700/50 border-slate-600/50 text-slate-300 hover:bg-slate-700/80'
                          }`}
                        >
                          <AnimatePresence>
                            {activeCategory === id && (
                              <motion.span
                                layoutId="activeIndicator"
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              />
                            )}
                          </AnimatePresence>
                          <span className="relative z-10">{label}</span>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Favorites Toggle */}
                  <div className="mb-4">
                    <motion.label
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`flex items-center gap-3 p-4 rounded-xl ${favorites.size > 0 ? 'bg-pink-700/50 hover:bg-pink-700/80 border-pink-600/50' : 'bg-slate-700/50 hover:bg-slate-700/80 border-slate-600/50'} border transition-all duration-200 cursor-pointer`}
                    >
                      <input
                        type="checkbox"
                        checked={showFavoritesOnly}
                        onChange={() => setShowFavoritesOnly(!showFavoritesOnly)}
                        className="hidden"
                      />
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${showFavoritesOnly ? 'bg-pink-500' : 'bg-slate-600'}`}>
                        {showFavoritesOnly && (
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className={`text-base font-medium ${showFavoritesOnly ? 'text-pink-300' : 'text-slate-300'}`}>
                        Show Favorites Only
                      </span>
                      {favorites.size > 0 && (
                        <span className="ml-auto bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {favorites.size}
                        </span>
                      )}
                    </motion.label>
                  </div>
                  
                  {/* Type Filter */}
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setActiveFilter(activeFilter === 'type' ? null : 'type')}
                      className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-700/50 hover:bg-slate-700/80 border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-200 group"
                    >
                      <Filter className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                      <span className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-200">Vehicle Type</span>
                      <ChevronDown className={`w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-transform duration-200 ml-auto ${activeFilter === 'type' ? 'rotate-180' : ''}`} />
                    </motion.button>
                    
                    <AnimatePresence>
                      {activeFilter === 'type' && (
                        <motion.div
                          initial={{ x: 300, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 300, opacity: 0 }}
                          transition={{ duration: 0.3, damping: 25, stiffness: 200 }}
                          className="absolute top-0 right-0 w-full h-full bg-slate-800/95 backdrop-blur-sm border-l border-slate-600/50"
                        >
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                              <h3 className="text-xl font-bold text-cyan-300">Vehicle Type</h3>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setActiveFilter(null)}
                                className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700/80 border border-slate-600/50"
                              >
                                <X className="w-5 h-5 text-slate-300" />
                              </motion.button>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                              {types.map((type) => (
                                <motion.label
                                  key={type}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-700/50 border border-slate-600/30 hover:border-cyan-500/50 cursor-pointer transition-all duration-200"
                                >
                                  <input
                                    type="checkbox"
                                    checked={typeFilter.includes(type)}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        setTypeFilter([...typeFilter, type])
                                      } else {
                                        setTypeFilter(typeFilter.filter(t => t !== type))
                                      }
                                    }}
                                    className="w-5 h-5 text-cyan-600 bg-slate-700 border-slate-500 rounded focus:ring-cyan-500 focus:ring-2"
                                  />
                                  <span className={`text-base font-medium ${typeFilter.includes(type) ? 'text-cyan-300' : 'text-slate-300 hover:text-white'}`}>
                                    {type}
                                  </span>
                                </motion.label>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Tier Filter */}
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setActiveFilter(activeFilter === 'tier' ? null : 'tier')}
                      className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-700/50 hover:bg-slate-700/80 border border-slate-600/50 hover:border-yellow-500/50 transition-all duration-200 group"
                    >
                      <Star className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300" />
                      <span className="text-white font-medium group-hover:text-yellow-300 transition-colors duration-200">Tier</span>
                      <ChevronDown className={`w-4 h-4 text-yellow-400 group-hover:text-yellow-300 transition-transform duration-200 ml-auto ${activeFilter === 'tier' ? 'rotate-180' : ''}`} />
                    </motion.button>
                    
                    <AnimatePresence>
                      {activeFilter === 'tier' && (
                        <motion.div
                          initial={{ x: 300, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 300, opacity: 0 }}
                          transition={{ duration: 0.3, damping: 25, stiffness: 200 }}
                          className="absolute top-0 right-0 w-full h-full bg-slate-800/95 backdrop-blur-sm border-l border-slate-600/50"
                        >
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                              <h3 className="text-xl font-bold text-yellow-300">Tier</h3>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setActiveFilter(null)}
                                className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700/80 border border-slate-600/50"
                              >
                                <X className="w-5 h-5 text-slate-300" />
                              </motion.button>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                              {tiers.map((tier) => (
                                <motion.label
                                  key={tier}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-700/50 border border-slate-600/30 hover:border-yellow-500/50 cursor-pointer transition-all duration-200"
                                >
                                  <input
                                    type="checkbox"
                                    checked={tierFilter.includes(tier)}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        setTierFilter([...tierFilter, tier])
                                      } else {
                                        setTierFilter(tierFilter.filter(t => t !== tier))
                                      }
                                    }}
                                    className="w-5 h-5 text-yellow-600 bg-slate-700 border-slate-500 rounded focus:ring-yellow-500 focus:ring-2"
                                  />
                                  <span className={`text-base font-medium ${tierFilter.includes(tier) ? 'text-yellow-300' : 'text-slate-300 hover:text-white'}`}>
                                    Tier {tier}
                                  </span>
                                </motion.label>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Country Filter */}
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setActiveFilter(activeFilter === 'country' ? null : 'country')}
                      className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-700/50 hover:bg-slate-700/80 border border-slate-600/50 hover:border-green-500/50 transition-all duration-200 group"
                    >
                      <MapPin className="w-5 h-5 text-green-400 group-hover:text-green-300" />
                      <span className="text-white font-medium group-hover:text-green-300 transition-colors duration-200">Country</span>
                      <ChevronDown className={`w-4 h-4 text-green-400 group-hover:text-green-300 transition-transform duration-200 ml-auto ${activeFilter === 'country' ? 'rotate-180' : ''}`} />
                    </motion.button>
                    
                    <AnimatePresence>
                      {activeFilter === 'country' && (
                        <motion.div
                          initial={{ x: 300, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 300, opacity: 0 }}
                          transition={{ duration: 0.3, damping: 25, stiffness: 200 }}
                          className="absolute top-0 right-0 w-full h-full bg-slate-800/95 backdrop-blur-sm border-l border-slate-600/50"
                        >
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                              <h3 className="text-xl font-bold text-green-300">Country</h3>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setActiveFilter(null)}
                                className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700/80 border border-slate-600/50"
                              >
                                <X className="w-5 h-5 text-slate-300" />
                              </motion.button>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                              {countries.map((country) => (
                                <motion.label
                                  key={country}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-700/50 border border-slate-600/30 hover:border-green-500/50 cursor-pointer transition-all duration-200"
                                >
                                  <input
                                    type="checkbox"
                                    checked={countryFilter.includes(country)}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        setCountryFilter([...countryFilter, country])
                                      } else {
                                        setCountryFilter(countryFilter.filter(c => c !== country))
                                      }
                                    }}
                                    className="w-5 h-5 text-green-600 bg-slate-700 border-slate-500 rounded focus:ring-green-500 focus:ring-2"
                                  />
                                  <div className="flex items-center gap-3">
                                    <img
                                      src={getFlagImage(country) || "/placeholder.svg"}
                                      alt={`${country} flag`}
                                      className="w-6 h-4 object-cover rounded shadow-sm"
                                    />
                                    <span className={`text-base font-medium ${countryFilter.includes(country) ? 'text-green-300' : 'text-slate-300 hover:text-white'}`}>
                                      {country}
                                    </span>
                                  </div>
                                </motion.label>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Rarity Filter */}
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setActiveFilter(activeFilter === 'rarity' ? null : 'rarity')}
                      className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-700/50 hover:bg-slate-700/80 border border-slate-600/50 hover:border-orange-500/50 transition-all duration-200 group"
                    >
                      <Star className="w-5 h-5 text-orange-400 group-hover:text-orange-300" />
                      <span className="text-white font-medium group-hover:text-orange-300 transition-colors duration-200">Rarity</span>
                      <ChevronDown className={`w-4 h-4 text-orange-400 group-hover:text-orange-300 transition-transform duration-200 ml-auto ${activeFilter === 'rarity' ? 'rotate-180' : ''}`} />
                    </motion.button>
                    
                    <AnimatePresence>
                      {activeFilter === 'rarity' && (
                        <motion.div
                          initial={{ x: 300, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 300, opacity: 0 }}
                          transition={{ duration: 0.3, damping: 25, stiffness: 200 }}
                          className="absolute top-0 right-0 w-full h-full bg-slate-800/95 backdrop-blur-sm border-l border-slate-600/50"
                        >
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                              <h3 className="text-xl font-bold text-orange-300">Rarity</h3>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setActiveFilter(null)}
                                className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700/80 border border-slate-600/50"
                              >
                                <X className="w-5 h-5 text-slate-300" />
                              </motion.button>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                              {rarities.map((rarity) => (
                                <motion.label
                                  key={rarity}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-700/50 border border-slate-600/30 hover:border-orange-500/50 cursor-pointer transition-all duration-200"
                                >
                                  <input
                                    type="checkbox"
                                    checked={rarityFilter.includes(rarity)}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        setRarityFilter([...rarityFilter, rarity])
                                      } else {
                                        setRarityFilter(rarityFilter.filter(r => r !== rarity))
                                      }
                                    }}
                                    className="w-5 h-5 text-orange-600 bg-slate-700 border-slate-500 rounded focus:ring-orange-500 focus:ring-2"
                                  />
                                  <span className={`text-base font-medium ${rarityFilter.includes(rarity) ? 'text-orange-300' : 'text-slate-300 hover:text-white'}`}>
                                    {rarity}
                                  </span>
                                </motion.label>
                              ))}
                            </div>
                          
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                
                  {/* How to Obtain Filter */}
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setActiveFilter(activeFilter === 'obtainMethod' ? null : 'obtainMethod')}
                      className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-700/50 hover:bg-slate-700/80 border border-slate-600/50 hover:border-purple-500/50 transition-all duration-200 group"
                    >
                      <MapPin className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                      <span className="text-white font-medium group-hover:text-purple-300 transition-colors duration-200">How to Obtain</span>
                      <ChevronDown className={`w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-transform duration-200 ml-auto ${activeFilter === 'obtainMethod' ? 'rotate-180' : ''}`} />
                    </motion.button>
                    
                    <AnimatePresence>
                      {activeFilter === 'obtainMethod' && (
                        <motion.div
                          initial={{ x: 300, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 300, opacity: 0 }}
                          transition={{ duration: 0.3, damping: 25, stiffness: 200 }}
                          className="absolute top-0 right-0 w-full h-full bg-slate-800/95 backdrop-blur-sm border-l border-slate-600/50"
                        >
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                              <h3 className="text-xl font-bold text-purple-300">How to Obtain</h3>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setActiveFilter(null)}
                                className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700/80 border border-slate-600/50"
                              >
                                <X className="w-5 h-5 text-slate-300" />
                              </motion.button>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                              {obtainMethods.map((method) => (
                                <motion.label
                                  key={method}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-700/50 border border-slate-600/30 hover:border-purple-500/50 cursor-pointer transition-all duration-200"
                                >
                                  <input
                                    type="checkbox"
                                    checked={obtainMethodFilter.includes(method)}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        setObtainMethodFilter([...obtainMethodFilter, method])
                                      } else {
                                        setObtainMethodFilter(obtainMethodFilter.filter(m => m !== method))
                                      }
                                    }}
                                    className="w-5 h-5 text-purple-600 bg-slate-700 border-slate-500 rounded focus:ring-purple-500 focus:ring-2"
                                  />
                                  <span className={`text-base font-medium ${obtainMethodFilter.includes(method) ? 'text-purple-300' : 'text-slate-300 hover:text-white'}`}>
                                    {method}
                                  </span>
                                </motion.label>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                {/* Active Filters Display */}
                {(typeFilter.length > 0 || tierFilter.length > 0 || countryFilter.length > 0 || rarityFilter.length > 0 || obtainMethodFilter.length > 0) && (
                  <div className="mt-8 pt-6 border-t border-slate-700">
                    <div className="flex items-center justify-between mb-4 px-4">
                      <h4 className="text-sm font-semibold text-slate-200">Active Filters</h4>
                      <span className="text-xs text-slate-400">
                        {typeFilter.length + tierFilter.length + countryFilter.length + rarityFilter.length + obtainMethodFilter.length} active
                      </span>
                    </div>
                    <div className="max-h-40 overflow-y-auto px-4 pb-2 -mx-4">
                      <div className="flex flex-wrap gap-2 pr-4">
                        {typeFilter.map((type) => (
                          <div key={type} className="flex-shrink-0 flex items-center gap-2 px-3 py-2 bg-cyan-600/20 border border-cyan-600/30 rounded-lg">
                            <span className="text-sm text-cyan-300">{type}</span>
                          </div>
                        ))}
                        {tierFilter.map((tier) => (
                          <div key={tier} className="flex-shrink-0 flex items-center gap-2 px-3 py-2 bg-yellow-600/20 border border-yellow-600/30 rounded-lg">
                            <span className="text-sm text-yellow-300">Tier {tier}</span>
                          </div>
                        ))}
                        {countryFilter.map((country) => (
                          <div key={country} className="flex-shrink-0 flex items-center gap-2 px-3 py-2 bg-green-600/20 border border-green-600/30 rounded-lg">
                            <img
                              src={getFlagImage(country) || "/placeholder.svg"}
                              alt={`${country} flag`}
                              className="w-5 h-3 object-cover rounded shadow-sm flex-shrink-0"
                            />
                            <span className="text-sm text-green-300">{country}</span>
                          </div>
                        ))}
                        {rarityFilter.map((rarity) => (
                          <div key={rarity} className="flex-shrink-0 flex items-center gap-2 px-3 py-2 bg-orange-600/20 border border-orange-600/30 rounded-lg">
                            <span className="text-sm text-orange-300">{rarity}</span>
                          </div>
                        ))}
                        {obtainMethodFilter.map((method) => (
                          <div key={method} className="flex-shrink-0 flex items-center gap-2 px-3 py-2 bg-purple-600/20 border border-purple-600/30 rounded-lg">
                            <span className="text-sm text-purple-300">{method}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* Event Panel */}
      <AnimatePresence>
        {eventOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEventOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />
            
            {/* Event Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-full max-w-lg bg-slate-800/95 backdrop-blur-sm z-50 shadow-2xl border-r border-slate-700/50 overflow-y-auto"
            >
              <EventComponent 
                onClose={() => {
                  setEventOpen(false);
                  // Clear URL parameters when closing the events panel
                  const url = new URL(window.location.href);
                  url.searchParams.delete('event');
                  window.history.pushState({}, '', url);
                }}
                onVehicleSelect={(vehicleName) => {
                  setSearchQuery(vehicleName);
                  setEventOpen(false);
                  // Find the vehicle in the VEHICLES array and expand it
                  const vehicle = VEHICLES.find(v => v.name === vehicleName);
                  if (vehicle) {
                    setExpandedVehicle(vehicle.id.toString());
                  }
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Battle Pass Tab - Fully Responsive */}
      <button
        onClick={() => setBattlePassOpen(!battlePassOpen)}
        className={`fixed top-1/2 left-0 z-50 bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-950 hover:to-blue-900 transition-all duration-300 transform -translate-y-1/2 rounded-r-lg shadow-lg border-blue-700 flex items-center justify-center min-h-[80px] min-w-[28px] sm:min-h-[90px] sm:min-w-[32px] md:min-h-[140px] md:min-w-[48px] lg:min-h-[160px] lg:min-w-[52px] border-r-2 border-blue-600 mx-0 mr-0 ml-[-4px] ${isMenuOpen || eventOpen ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}
      >
        {/* Mobile: Compact icon + text */}
        <div className="sm:hidden flex flex-col items-center justify-center px-1 py-2 text-white font-bold text-[9px] tracking-wide">
          <svg className="w-3 h-3 mb-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
            <path d="M12 17L13.09 23.26L22 24L13.09 24.74L12 31L10.91 24.74L2 24L10.91 23.26L12 17Z" opacity="0.6"/>
          </svg>
          <span className="text-center leading-tight">BP</span>
        </div>
        
        {/* Tablet & Desktop: Vertical rotated text with responsive sizing */}
        <div 
          className="hidden sm:flex items-center justify-center text-white font-bold tracking-wider
                     sm:px-1 sm:py-3 sm:text-[10px] sm:ml-[-6px] sm:mr-[-6px]
                     md:px-3 md:py-5 md:text-sm md:ml-[-12px] md:mr-[-12px]
                     lg:px-3 lg:py-6 lg:text-base lg:ml-[-15px] lg:mr-[-12px]"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          <span className="sm:block md:hidden">BATTLE<br/>PASS</span>
          <span className="hidden md:block">BATTLE PASS</span>
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
              className="fixed left-0 top-0 h-full bg-gradient-to-b from-slate-800 to-slate-900 border-r border-purple-500/30 z-50 overflow-y-auto shadow-2xl 
                         w-full max-w-full
                         sm:w-[350px] sm:max-w-[350px]
                         md:w-[400px] md:max-w-[400px]
                         lg:w-[450px] lg:max-w-[450px]"
            >
              {/* Header */}
              <div className="p-6 bg-gradient-to-r from-blue-700 to-blue-500 border-b border-purple-400/30">
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
              <div className="space-y-4 
                             p-4 mx-0 w-full
                             sm:p-5 sm:mx-[-15px] sm:w-[365px]
                             md:p-6 md:mx-[-22px] md:w-[422px]
                             lg:p-6 lg:mx-[-22px] lg:w-[472px]">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2
                             text-lg ml-0
                             sm:text-xl sm:ml-1
                             md:text-xl md:ml-1.5">
                  <Calendar className="w-5 h-5 text-lime-300" />
                  Battle Passes
                </h3>
                
                {BATTLE_PASSES.map((battlePass) => (
                  <div key={battlePass.id} className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300">
                    {/* Battle Pass Header */}
                    <button
                      onClick={() => setSelectedBattlePass(selectedBattlePass === battlePass.id ? null : battlePass.id)}
                      className="text-left hover:bg-slate-700/30 transition-colors w-full
                                 p-3
                                 sm:p-3.5 sm:w-full
                                 md:p-4 md:w-56"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center border border-purple-400/30 overflow-hidden
                                       h-12 w-20 mr-1
                                       sm:h-14 sm:w-24 sm:mr-1.5
                                       md:h-16 md:w-32 md:mr-1.5">
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
                            <div className="flex items-center gap-2">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleShareBattlepass(battlePass);
                                }}
                                className="text-left text-base font-bold text-white hover:text-blue-400 transition-colors
                                           text-sm w-24
                                           sm:text-base sm:w-28
                                           md:text-lg md:w-36"
                              >
                                {battlePass.name}
                              </button>
                            </div>
                            <p className="font-medium text-blue-300
                                        text-xs
                                        sm:text-sm">{battlePass.month}</p>
                            
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-medium bg-blue-600 rounded-full
                                       text-[10px] px-1.5 py-0.5 w-12
                                       sm:text-xs sm:px-2 sm:py-1 sm:w-14
                                       md:text-xs md:px-2 md:py-1 md:w-[62px]">
                             Vehicles
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              handleShareBattlepass(battlePass);
                            }}
                            className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-blue-400 transition-colors"
                            title="Share battlepass"
                          >
                            <Share className="w-4 h-4" />
                          </button>
                          <ChevronRight className="w-5 h-5 text-slate-400" />
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
                              {battlePass.vehicles.map((vehicleName) => {
                                const vehicle = VEHICLES.find(v => v.name === vehicleName);
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
                                      <div className="bg-slate-600 rounded-lg overflow-hidden border border-slate-500 flex-shrink-0 group-hover:border-purple-400/50 transition-colors
                                                     h-16 w-24
                                                     sm:h-18 sm:w-28
                                                     md:h-20 md:w-36">
                                        <img 
                                          src={`${vehicle.image}`} 
                                          alt={vehicle.name}
                                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                          onError={(e) => {
                                            e.currentTarget.src = "/placeholder-vehicle.png"
                                          }}
                                        />
                                        <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center" style={{display: 'none'}}>
                                          <span className="text-xs font-bold text-cyan-400">
                                            {vehicle.name.substring(0, 2)}
                                          </span>
                                        </div>
                                         {/* Rarity Tag for Battle Pass */}
                                        <div className="absolute top-1 left-1 z-20">
                                          <div className={`px-1 py-0.5 rounded text-xs font-semibold shadow-lg ${getRarityColor(getVehicleRarity(vehicle.name))}`}>
                                            {getVehicleRarity(vehicle.name)}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="truncate">
                                          {vehicle.name}
                                        </div>
                                        <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">{vehicle.type} • {vehicle.faction}</div>
                                      </div>
                                      <div className="text-right text-white bg-transparent">
                                        <div className={`text-xs px-2 py-1 rounded-full font-medium bg-blue-700 ${
                                          formatTier(vehicle.tier) === 'IV' ? 'bg-purple-600 text-white' :
                                          formatTier(vehicle.tier) === 'III' ? 'bg-blue-600 text-white' :
                                          formatTier(vehicle.tier) === 'II' ? 'bg-green-600 text-white' :
                                          'bg-gray-600 text-white'
                                        } group-hover:shadow-lg transition-shadow`}>
                                          Tier {formatTier(vehicle.tier)}
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

      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 shadow-sm pt-2 sm:pt-2">
        <div className="max-w-7xl xl:max-w-[90rem] mx-auto p-2 sm:p-3 md:p-4 lg:p-4 mb-0 mt-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
            <div className="flex-1 min-w-0">
              <div>
                <div className="flex justify-start ml-2 mb-1">
                  <a
                    href="https://play.google.com/store/apps/details?id=app.mwtassistantunofficial.android&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-xs sm:text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-300/40 transform hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 animate-pulse"
                  >
                    Install app
                  </a>
                </div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text ml-2">MWT Assistant</h1>
                <p className="text-xs text-slate-400 ml-2">Vehicle stats & comparisons</p>
              </div>
              {[
              'naveed.miandad.007@gmail.com',
              'qwemwt@gmail.com', 
              'ooaraikuromorimine@gmail.com'



               ].includes(userEmail) && (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsEditMode(!isEditMode)}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-sm font-medium rounded-full border border-slate-600 hover:border-blue-400 transition-colors duration-200 flex items-center gap-2"
                    >
                      {isEditMode ? (
                        <>
                          <span>View Mode</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                        </>
                      ) : (
                        <>
                          <span>Edit Mode</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.793.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </>
                      )}
                    </button>
                    {isEditMode && (
                      <button
                        onClick={resetVehicleData}
                        className="px-3 py-2 bg-red-800 hover:bg-red-700 text-sm font-medium rounded-full border border-red-600 hover:border-red-400 transition-colors duration-200 flex items-center gap-2"
                        title="Reset all vehicle data to original"
                      >
                        🔄 Reset Data
                      </button>
                    )}
                  </div>
                  {saveNotification && (
                    <div className="text-sm font-medium text-green-400 bg-slate-800/50 px-3 py-1 rounded-full border border-green-400/30">
                      {saveNotification}
                    </div>
                  )}
                  {isSaving && (
                    <div className="text-sm font-medium text-blue-400 bg-slate-800/50 px-3 py-1 rounded-full border border-blue-400/30">
                      💾 Saving changes...
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {isLoggedIn ? (
                <div className="flex items-center gap-2">
                  <span className="text-slate-300 text-xs">{userEmail}</span>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-xs font-medium"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowLoginForm(true)}
                  className="px-4 py-1.5 md:px-5 md:py-2 bg-gradient-to-r from-blue-800 to-blue-700 hover:from-blue-900 hover:to-blue-800 text-white rounded-sm transition-colors text-xs md:text-sm font-medium h-7 md:h-8 flex items-center justify-center whitespace-nowrap touch-manipulation"
                >
                  Sign In
                </button>
              )}
              <div className="pb-4 w-full">
                <div className="flex flex-col lg:flex-row gap-3 md:gap-4 items-start lg:items-center justify-between">
                  <div className="relative w-full lg:w-64 xl:w-80 flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search vehicles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-10 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm touch-manipulation w-full"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setExpandedVehicle("");
                        }}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-sm flex items-center justify-center text-xs font-bold transition-colors w-6 h-6 touch-manipulation"
                      >
                        ×
                      </button>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Google AdSense Banner - Mobile 320x50 */}
<div className="w-full bg-slate-800/50 border-b border-slate-700">
  <div className="max-w-3xl mx-auto px-2 py-1">
    
    {/* Advertisement label */}
    <div className="text-center text-xs text-slate-300 mb-1">
            <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '320px',
          height: '50px',
        }}
        data-ad-client="ca-pub-3724137161724998"
        data-ad-slot="6518875801"
        data-ad-format="horizontal"
        data-full-width-responsive="false"
      />
    </div>

    {/* Real AdSense Banner */}
    <div className="w-full flex justify-center">

    </div>

  </div>
</div>

      <main className="max-w-7xl xl:max-w-[90rem] pt-16 sm:pt-6 p-4 sm:p-6 md:p-6 lg:p-8 mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Comparison Bottom Bar - Mobile */}
        {compare.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 border-t border-slate-700 shadow-lg z-50">
            <div className="max-w-7xl xl:max-w-[90rem] mx-auto px-2 sm:px-4 md:px-6 py-2 md:py-3">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 md:gap-4">
                <div className="flex items-center justify-between w-full sm:w-auto sm:space-x-2 md:space-x-4">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-cyan-400 whitespace-nowrap">
                    {compare.length === 1 ? 'Select 2nd vehicle' : 'Ready to compare'}
                  </h3>
                  <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 overflow-x-auto w-full sm:w-auto pb-1">
                    {compare.map((id, index) => {
                      const vehicle = VEHICLES.find(v => v.id.toString() === id);
                      return (
                        <div key={id} className="relative group flex-shrink-0 w-20 sm:w-24 md:w-28">
                          <div className="relative">
                            <img 
                              src={vehicle?.image} 
                              alt={vehicle?.name}
                              className="w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 object-cover rounded border border-slate-600"
                              onError={(e) => { e.currentTarget.src = "/placeholder-vehicle.png" }}
                            />
                            <div className="absolute -top-1.5 -right-1.5 bg-cyan-500 text-white text-[10px] sm:text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                              {index + 1}
                            </div>
                            {/* Vehicle Tags for comparison bar */}
                            <div className="absolute top-0 left-0 z-10 flex gap-1">
                              {isNewVehicle(vehicle?.name) && (
                                <div className="px-1 py-0.5 rounded text-[8px] font-semibold shadow-lg bg-white text-black">
                                  NEW
                                </div>
                              )}
                              {isUpcomingVehicle(vehicle?.name) && (
                                <div className="px-1 py-0.5 rounded text-[8px] font-semibold shadow-lg bg-red-600 text-white">
                                  UPCOMING
                                </div>
                              )}
                            </div>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setCompare(compare.filter(vid => vid !== id));
                              }}
                              className="absolute -top-1.5 -left-1.5 bg-red-500 text-white rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[10px] sm:text-xs touch-manipulation"
                            >
                              ×
                            </button>
                          </div>
                          <div className="text-[10px] sm:text-xs md:text-sm text-center mt-0.5 md:mt-1 truncate" title={vehicle?.name}>
                            {vehicle?.name.split(' ').slice(0, 2).join(' ')}
                          </div>
                        </div>
                      );
                    })}
                    {compare.length === 1 && (
                      <div className="w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 border-2 border-dashed border-cyan-500 rounded flex flex-col items-center justify-center text-cyan-400 text-xs sm:text-sm md:text-base">
                        <div>Select</div>
                        <div>vehicle</div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex space-x-2 w-full sm:w-auto mt-2 sm:mt-0">
                  <button
                    onClick={() => setCompare([])}
                    className="px-3 py-1.5 text-xs sm:text-sm bg-slate-700 hover:bg-slate-600 text-slate-200 rounded transition-colors flex-1 sm:flex-none"
                  >
                    Clear All
                  </button>
                  {compare.length === 2 && (
                    <button
                      onClick={() => {
                        comparisonRef.current?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-3 py-1.5 text-xs sm:text-sm bg-cyan-600 hover:bg-cyan-500 text-white rounded transition-colors flex-1 sm:flex-none"
                    >
                      Compare Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {compare.length === 2 && (
          <div ref={comparisonRef} className="mb-8 bg-slate-900/40 rounded-xl p-6 border border-slate-800">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-cyan-400">Vehicle Comparison</h2>
              
              {/* Upgrade Toggles */}
              <div className="flex items-center space-x-2 bg-slate-800/50 p-1 rounded-full">
                {[1, 2, 3].map((level) => {
                  const isActive = upgradeLevels[compare[0]] === level || upgradeLevels[compare[1]] === level;
                  return (
                    <button
                      key={level}
                      onClick={() => {
                        const newLevel = isActive ? 0 : level;
                        handleUpgradeChange(compare[0], newLevel);
                        handleUpgradeChange(compare[1], newLevel);
                      }}
                      className={`w-8 h-8 flex items-center justify-center rounded-full transition-all ${
                        isActive 
                          ? level === 1 ? 'bg-green-500/20' 
                            : level === 2 ? 'bg-blue-500/20' 
                            : 'bg-purple-500/20'
                          : 'bg-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      <span className={`text-xs font-bold ${
                        isActive 
                          ? level === 1 ? 'text-green-400' 
                            : level === 2 ? 'text-blue-400' 
                            : 'text-purple-400'
                          : 'text-slate-400'
                      }`}>
                        U{level}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {compare.map((id, idx) => {
                const vehicle = VEHICLES.find((v) => v.id.toString() === id);
                if (!vehicle) return null;
                
                const currentUpgradeLevel = upgradeLevels[id] || 0;
                const upgradedHealth = getUpgradedValue(vehicle, 'health');
                const upgradedSpeed = getUpgradedValue(vehicle, 'speed');
                const upgradedAgility = getUpgradedValue(vehicle, 'agility');
                const upgradedAfterburner = getUpgradedValue(vehicle, 'afterburnerSpeed');
                
                return (
                  <div key={id} className={`bg-slate-800/50 rounded-lg p-4 border ${
                    idx === 0 ? 'border-cyan-500/30' : 'border-purple-500/30'
                  }`}>
                    <div className="flex flex-col items-center mb-4">
                      <div className="relative w-full min-h-[300px] max-h-[400px] mb-3 flex items-center justify-center">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder-vehicle.png";
                          }}
                        />
                        {currentUpgradeLevel > 0 && (
                          <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold ${
                            currentUpgradeLevel === 1 ? 'bg-green-500/90 text-white' 
                              : currentUpgradeLevel === 2 ? 'bg-blue-500/90 text-white' 
                              : 'bg-purple-500/90 text-white'
                          }`}>
                            U{currentUpgradeLevel}
                          </div>
                        )}
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-cyan-300">
                          {vehicle.name}
                        </h3>
                        <div className="text-sm text-slate-400">
                          {vehicle.type} • {vehicle.faction} • Tier {formatTier(vehicle.tier)}
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-800/70 p-2 rounded">
                        <div className="text-xs text-slate-400">Health</div>
                        <div className="text-lg font-bold text-cyan-300">
                          {upgradedHealth.toLocaleString()}
                        </div>
                        {currentUpgradeLevel > 0 && (
                          <div className="text-xs mt-0.5">
                            <span className="text-green-400">
                              +{Math.round((upgradedHealth / vehicle.stats.health - 1) * 100)}%
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="bg-slate-800/70 p-2 rounded">
                        <div className="text-xs text-slate-400">Speed</div>
                        <div className="text-lg font-bold text-cyan-300">
                          {upgradedSpeed} km/h
                        </div>
                        {currentUpgradeLevel > 0 && (
                          <div className="text-xs mt-0.5">
                            <span className="text-green-400">
                              +{Math.round((upgradedSpeed / vehicle.stats.speed - 1) * 100)}%
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {upgradedAfterburner > 0 && (
                        <div className="bg-slate-800/70 p-2 rounded">
                          <div className="text-xs text-slate-400">Afterburner</div>
                          <div className="text-lg font-bold text-cyan-300">
                            {upgradedAfterburner} km/h
                          </div>
                          {currentUpgradeLevel > 0 && (
                            <div className="text-xs mt-0.5">
                              <span className="text-green-400">
                                +{Math.round((upgradedAfterburner / (vehicle.stats.afterburnerSpeed || upgradedAfterburner) - 1) * 100)}%
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                      
                      <div className="bg-slate-800/70 p-2 rounded">
                        <div className="text-xs text-slate-400">Agility</div>
                        <div className="text-lg font-bold text-cyan-300">
                          {upgradedAgility}
                        </div>
                        {currentUpgradeLevel > 0 && (
                          <div className="text-xs mt-0.5">
                            <span className="text-green-400">
                              +{Math.round((upgradedAgility / (vehicle.stats.agility || upgradedAgility) - 1) * 100)}%
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
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
          <div className="flex flex-wrap items-center justify-between gap-4 w-full">
            <p className="text-slate-400 mx-1.5">
              Showing {indexOfFirstVehicle + 1}-{Math.min(indexOfLastVehicle, filteredVehicles.length)} of{" "}
              {filteredVehicles.length} vehicles
            </p>
            <div className="flex flex-wrap gap-2">
              {['Jets', 'Heli', 'Tanks'].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setVehicleTypeFilter(vehicleTypeFilter === type.toLowerCase() ? null : type.toLowerCase());
                    setCurrentPage(1); // Reset to first page when changing filters
                  }}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    vehicleTypeFilter === type.toLowerCase()
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
                  }`}
                >
                  {type}
                </button>
              ))}
              {vehicleTypeFilter && (
                <button
                  onClick={() => {
                    setVehicleTypeFilter(null);
                    setCurrentPage(1); // Reset to first page when clearing filter
                  }}
                  className="px-3 py-1 text-sm text-slate-300 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Upcoming Vehicles Alert */}
       {activeCategory === 'upcoming' && (
         <div className="col-span-full mb-4 bg-red-600/20 border-l-4 border-red-500 p-4 rounded-r">
           <div className="flex items-start">
             <svg className="h-5 w-5 text-red-200 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
               <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
             </svg>
             <div>
               <h3 className="text-sm font-medium text-red-100">Upcoming Vehicles Notice</h3>
               <p className="text-sm text-red-200">These vehicles are upcoming and might not have complete or accurate data yet.</p>
             </div>
           </div>
         </div>
       )}
       
       <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedVehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`group relative bg-slate-900/60 rounded-xl p-4 sm:p-5 md:p-6 border border-slate-800 transition-all duration-300 ${
      formatTier(vehicle.tier) === "II"
        ? "hover:border-green-500 hover:shadow-[0_0_12px_1px_rgba(34,197,94,0.6)]"
        : formatTier(vehicle.tier) === "III"
        ? "hover:border-blue-500 hover:shadow-[0_0_12px_1px_rgba(29,78,216,0.6)]"
        : formatTier(vehicle.tier) === "IV"
        ? "hover:border-purple-500 hover:shadow-[0_0_12px_1px_rgba(147,51,234,0.6)]"
        : formatTier(vehicle.tier) === "I"
        ? "hover:border-white-300 hover:shadow-[0_0_12px_1px_rgba(147,51,234,0.6)]"
        : ""
    }`}
>
  {/* Full border glow for Exclusive / Market / Construction (softer) */}
  {(isExclusiveVehicle(vehicle.name) || isMarketVehicle(vehicle.name) || isConstructionVehicle(vehicle.name)) && (
    <div
      className={`absolute top-0 left-0 w-full h-full rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300
        ${
          isExclusiveVehicle(vehicle.name)
            ? "border-4 border-red-500/30 shadow-[0_0_12px_3px_rgba(239,68,68,0.25)]"
            : isConstructionVehicle(vehicle.name)
            ? "border-4 border-orange-500/30 shadow-[0_0_12px_3px_rgba(249,115,22,0.25)]"
            : "border-4 border-yellow-400/30 shadow-[0_0_12px_3px_rgba(234,179,8,0.25)]"
        }`}
    />
  )}


              
            
            
              <div className="absolute top-0 left-0 w-0 h-0 z-10">

                <div
                  className={`w-0 h-0 border-r-[40px] border-t-[40px] border-r-transparent text-fuchsia-800 ${
                    formatTier(vehicle.tier) === "II"
                      ? "border-t-green-500"
                      : formatTier(vehicle.tier) === "III"
                        ? "border-t-blue-700"
                        : formatTier(vehicle.tier) === "IV"
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

              {isConstructionVehicle(vehicle.name) && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 rounded-xl">
                  <img
                    src="Construction.png"
                    alt="Under Construction"
                    className="w-full h-full object-cover opacity-80"
                  />
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
                vehicle.type === "MLRS" || vehicle.type === "Missile Carrier" || vehicle.type === "SPH" || 
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

              <div className="flex items-center gap-4 sm:gap-3 mb-2 px-0">
                <div className="mr-1">
                  <img
                    src={getFlagImage(vehicle.faction) || "/placeholder.svg"}
                    alt={`${vehicle.faction} flag`}
                    className="w-6 h-4 sm:w-8 sm:h-6 object-cover rounded shadow-md"
                  />
                </div>
                <h3 className="sm:text-xl font-bold text-white flex items-center gap-1 text-base flex-row">
                  {vehicle.name}
                  {isEditor && isEditMode && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const next = prompt('Edit vehicle name', vehicle.name);
                        if (next && next.trim() && next !== vehicle.name) {
                          saveEdit(displayVehicle.id, 'name', next.trim());
                        }
                      }}
                      className="text-[10px] sm:text-[12px] leading-none hover:opacity-80"
                      title="Edit Vehicle Name"
                      aria-label="Edit Vehicle Name"
                    >
                      ✏️
                    </button>
                  )}
                </h3>
                <span className="text-xs sm:text-sm text-slate-400 font-semibold">({vehicle.faction})</span>
              </div>

               {/* Vehicle Image Display */}
              {vehicle.image && (
                <div className="relative">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} vehicle`}
                    className="w-full h-36 sm:h-40 md:h-48 object-cover rounded-lg bg-slate-800/20 shadow-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Rarity Tag */}
                  <div className="absolute top-2 left-2 z-20">
                    <div className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[10px] sm:text-xs font-semibold shadow-lg ${getRarityColor(getVehicleRarity(vehicle.name))}`}>
                      {getVehicleRarity(vehicle.name)}
                    </div>
                  </div>
                  
                  {/* Vehicle Tags */}
                  <div className="absolute top-2 right-2 z-20 flex flex-col gap-1">
                    {isNewVehicle(vehicle.name) && (
                      <div className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[10px] sm:text-xs font-semibold shadow-lg bg-white text-black">
                        NEW
                      </div>
                    )}
                    {isUpcomingVehicle(vehicle.name) && (
                      <div className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[10px] sm:text-xs font-semibold shadow-lg bg-red-600 text-white">
                        UPCOMING
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">
                <div className="flex-1"></div>
                <div className="flex items-center space-x-2">
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(vehicle.id);
                    }}
                    className="p-1.5 -mt-1 -mr-1 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 flex-shrink-0"
                    aria-label={favorites.has(vehicle.id) ? 'Remove from favorites' : 'Add to favorites'}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      initial={false}
                      animate={{
                        scale: favorites.has(vehicle.id) ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        scale: { duration: 0.3, type: 'spring', stiffness: 500, damping: 15 },
                      }}
                    >
                      <Heart
                        className={`w-5 h-5 transition-colors duration-300 ${
                          favorites.has(vehicle.id) ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-400"
                        }`}
                      />
                    </motion.div>
                  </motion.button>

                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShareVehicle(vehicle);
                    }}
                    className="p-1.5 -mt-1 -mr-1 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 flex-shrink-0"
                    aria-label="Share vehicle"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Share className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
                  </motion.button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="bg-slate-800/50 rounded-lg p-2 sm:p-3">
                  <div className="text-xs text-slate-400 mb-1">Health</div>
                  <div className="text-base sm:text-lg font-bold text-cyan-300 flex items-center gap-2">
                    {vehicle.stats.health.toLocaleString()}
                    {isEditor && isEditMode && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const raw = prompt('Edit Health (number)', String(vehicle.stats.health));
                          if (raw !== null) {
                            const val = parseInt(raw, 10);
                            if (!isNaN(val)) saveEdit(displayVehicle.id, 'stats.health', val);
                          }
                        }}
                        className="text-[12px] leading-none hover:opacity-80"
                        title="Edit Health"
                        aria-label="Edit Health"
                      >
                        ✏️
                      </button>
                    )}
                  </div>
                </div>

                {vehicle.type === "Fighter Jet" || vehicle.type === "Bomber" ? (
                  <>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-xs text-slate-400 mb-1">Cruise Speed</div>
                      <div className="text-lg font-bold text-cyan-300 flex items-center gap-2">
                        {vehicle.stats.speed} km/h
                        {isEditor && isEditMode && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const raw = prompt('Edit Cruise Speed (km/h)', String(vehicle.stats.speed));
                              if (raw !== null) {
                                const val = parseInt(raw, 10);
                                if (!isNaN(val)) saveEdit(displayVehicle.id, 'stats.speed', val);
                              }
                            }}
                            className="text-[12px] leading-none hover:opacity-80"
                            title="Edit Cruise Speed"
                            aria-label="Edit Cruise Speed"
                          >
                            ✏️
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-xs text-slate-400 mb-1">Afterburner Speed</div>
                      <div className="text-lg font-bold text-cyan-300 flex items-center gap-2">
                        {vehicle.stats.afterburnerSpeed} km/h
                        {isEditor && isEditMode && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const raw = prompt('Edit Afterburner Speed (km/h)', String(vehicle.stats.afterburnerSpeed));
                              if (raw !== null) {
                                const val = parseInt(raw, 10);
                                if (!isNaN(val)) saveEdit(displayVehicle.id, 'stats.afterburnerSpeed', val);
                              }
                            }}
                            className="text-[12px] leading-none hover:opacity-80"
                            title="Edit Afterburner Speed"
                            aria-label="Edit Afterburner Speed"
                          >
                            ✏️
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                ) : vehicle.type === "Helicopter" ? (
                  <>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-xs text-slate-400 mb-1">Cruise Speed</div>
                      <div className="text-lg font-bold text-cyan-300 flex items-center gap-2">
                        {vehicle.stats.speed} km/h
                        {isEditor && isEditMode && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const raw = prompt('Edit Cruise Speed (km/h)', String(vehicle.stats.speed));
                              if (raw !== null) {
                                const val = parseInt(raw, 10);
                                if (!isNaN(val)) saveEdit(displayVehicle.id, 'stats.speed', val);
                              }
                            }}
                            className="text-[12px] leading-none hover:opacity-80"
                            title="Edit Cruise Speed"
                            aria-label="Edit Cruise Speed"
                          >
                            ✏️
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-xs text-slate-400 mb-1">Vertical Speed</div>
                      <div className="text-lg font-bold text-cyan-300 flex items-center gap-2">
                        {vehicle.stats.verticalSpeed || 'N/A'} m/s
                        {isEditor && isEditMode && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const raw = prompt('Edit Vertical Speed (m/s)', String(vehicle.stats.verticalSpeed || '0'));
                              if (raw !== null) {
                                const val = parseFloat(raw);
                                if (!isNaN(val as any)) saveEdit(displayVehicle.id, 'stats.verticalSpeed', val);
                              }
                            }}
                            className="text-[12px] leading-none hover:opacity-80"
                            title="Edit Vertical Speed"
                            aria-label="Edit Vertical Speed"
                          >
                            ✏️
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-xs text-slate-400 mb-1">Speed</div>
                      <div className="text-lg font-bold text-cyan-300 flex items-center gap-2">
                        {vehicle.stats.speed} km/h
                        {isEditor && isEditMode && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const raw = prompt('Edit Speed (km/h)', String(vehicle.stats.speed));
                              if (raw !== null) {
                                const val = parseInt(raw, 10);
                                if (!isNaN(val)) saveEdit(displayVehicle.id, 'stats.speed', val);
                              }
                            }}
                            className="text-[12px] leading-none hover:opacity-80"
                            title="Edit Speed"
                            aria-label="Edit Speed"
                          >
                            ✏️
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-xs text-slate-400 mb-1 flex items-center gap-1">
                        Armor
                        <div className="relative group ml-1">
                          <button 
                            className="w-4 h-4 flex items-center justify-center text-xs rounded-full border border-blue-400 text-blue-400 hover:bg-blue-900/50 transition-colors"
                            onMouseEnter={(e) => {
                              const tooltip = e.currentTarget.nextElementSibling as HTMLElement;
                              tooltip.classList.remove('hidden');
                            }}
                            onMouseLeave={(e) => {
                              const tooltip = e.currentTarget.nextElementSibling as HTMLElement;
                              tooltip.classList.add('hidden');
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              const tooltip = e.currentTarget.nextElementSibling as HTMLElement;
                              tooltip.classList.toggle('hidden');
                            }}
                            aria-label="Armor information"
                          >
                            ?
                          </button>
                          <div className="absolute z-10 hidden left-1/2 transform -translate-x-1/2 bottom-full mb-1 w-48 bg-slate-800 text-white text-xs p-2 rounded shadow-lg">
                            Armor stats are based on average calculations and might not be 100% accurate
                          </div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-cyan-300 flex items-center gap-2">
                        {vehicle.stats.armor}
                        {isEditor && isEditMode && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const next = prompt('Edit Armor (e.g., "1100mm")', String(vehicle.stats.armor || ''));
                              if (next !== null) {
                                saveEdit(displayVehicle.id, 'stats.armor', next);
                              }
                            }}
                            className="text-[12px] leading-none hover:opacity-80"
                            title="Edit Armor"
                            aria-label="Edit Armor"
                          >
                            ✏️
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                )}

                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-xs text-slate-400 mb-1">Agility</div>
                  <div className="text-lg font-bold text-cyan-300 flex items-center gap-2">
                    {vehicle.stats.agility}
                    {isEditor && isEditMode && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const raw = prompt('Edit Agility (0-100)', String(vehicle.stats.agility));
                          if (raw !== null) {
                            const val = parseInt(raw, 10);
                            if (!isNaN(val)) saveEdit(displayVehicle.id, 'stats.agility', val);
                          }
                        }}
                        className="text-[12px] leading-none hover:opacity-80"
                        title="Edit Agility"
                        aria-label="Edit Agility"
                      >
                        ✏️
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-3">
                {/* First Row: View Details and Bot Icon */}
                <div className="flex justify-between items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setVehicleDetailsOpenId(vehicle.id.toString());
                    }}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-slate-600 to-slate-700 text-slate-200 hover:from-slate-700 hover:to-slate-800 text-sm font-semibold rounded transition-all duration-200 shadow-md hover:shadow-lg text-center"
                  >
                    View Details
                  </button>
                  
                  <button
                    onClick={() => setVehicleInfoOpen(vehicle.id.toString())}
                    className="p-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
                    title="AI Analysis"
                  >
                    <Bot className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Second Row: Weapons and Compare */}
                <div className="flex justify-between items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setWeaponsModalOpenId(vehicle.id.toString())
                    }}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-slate-600 to-slate-700 text-slate-200 hover:from-slate-700 hover:to-slate-800 text-sm font-semibold rounded transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Weapons
                  </button>
                  
                  <div className="relative flex-1">
                    <button
                      onClick={() => {
                        if (compare.length < 2 || compare.includes(vehicle.id.toString())) {
                          toggleCompare(vehicle.id.toString());
                        }
                      }}
                      disabled={compare.length >= 2 && !compare.includes(vehicle.id.toString())}
                      className={`w-full px-4 py-2 text-sm font-semibold rounded transition-all duration-200 shadow-md flex items-center justify-center gap-2 ${
                        compare.includes(vehicle.id.toString())
                          ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700"
                          : compare.length > 0
                            ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700"
                            : "bg-gradient-to-r from-slate-600 to-slate-700 text-slate-200 hover:from-slate-700 hover:to-slate-800"
                      } ${compare.length >= 2 && !compare.includes(vehicle.id.toString()) ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      {compare.includes(vehicle.id.toString()) 
                        ? <span className="flex items-center">
                            <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center mr-1">
                              {compare.indexOf(vehicle.id.toString()) + 1}
                            </span>
                            Selected
                          </span>
                        : compare.length > 0 
                          ? `Select (${compare.length}/2)`
                          : "Compare"
                      }
                    </button>
                    {compare.length > 0 && !compare.includes(vehicle.id.toString()) && (
                      <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {compare.length}/2
                      </div>
                    )}
                  </div>
                </div>
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
                      <h4 className="text-2xs font-semibold text-cyan-300/80 mb-1">WEAPONS</h4>
                      <div className="space-y-1">
                        {vehicle.weapons.map((weapon: any, idx: number) => (
                          <div key={idx} className="bg-slate-800/40 rounded p-1">
                            <div className="flex justify-between items-center">
                              <div className="text-2xs font-medium text-cyan-200/90 truncate max-w-[120px]">{weapon.name}</div>
                              <div className="flex gap-2 text-[10px]">
                                <div className="text-cyan-300/90">{weapon.damage} <span className="text-slate-400/80">DMG</span></div>
                                <div className="text-cyan-300/90">{weapon.penetration} <span className="text-slate-400/80">PEN</span></div>
                                <div className="text-cyan-300/90">{weapon.reload} <span className="text-slate-400/80">REL</span></div>
                              </div>
                            </div>
                            {weapon.rateOfFire && (
                              <div className="text-[10px] text-slate-400/80 mt-0.5">{weapon.rateOfFire}</div>
                            )}
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
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentPage(Math.max(1, currentPage - 1));
              }}
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
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setCurrentPage(page);
                      }}
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
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentPage(Math.min(Math.ceil(filteredVehicles.length / vehiclesPerPage), currentPage + 1));
              }}
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
                    {typeof msg.content === 'object' && msg.content.type === 'vehicle_details' ? (
                      <div className="space-y-3">
                        {/* Vehicle Image */}
                        <img 
                          src={`${msg.content.vehicle.image}`} 
                          alt={msg.content.vehicle.name}
                          className="w-full max-w-xs rounded-lg object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div 
                          className="w-full max-w-xs h-48 bg-slate-800 rounded-lg border border-slate-600 flex items-center justify-center text-slate-400" 
                          style={{ display: 'none' }}
                        >
                          <div className="text-center">
                            <div className="text-2xl mb-2">🚗</div>
                            <div className="text-sm">Image not available</div>
                          </div>
                        </div>
                        
                        {/* Context */}
                        {msg.content.context && (
                          <div className="text-cyan-300 font-medium mb-2">
                            {msg.content.context}
                          </div>
                        )}
                        
                        {/* Vehicle Info with Enhanced Header */}
                        <div className="space-y-2">
                          <div className="text-center">
                            <div className="text-2xl mb-1">
                              {(() => {
                                const flags: { [key: string]: string } = {
                                  'American': '🇺🇸',
                                  'Russian': '🇷🇺', 
                                  'Chinese': '🇨🇳',
                                  'German': '🇩🇪',
                                  'British': '🇬🇧',
                                  'French': '🇫🇷',
                                  'Israeli': '🇮🇱',
                                  'Japanese': '🇯🇵',
                                  'Italian': '🇮🇹',
                                  'Indian': '🇮🇳',
                                  'Pakistani': '🇵🇰'
                                }
                                return flags[msg.content.vehicle.faction] || '🏳️'
                              })()}
                            </div>
                            <h3 className="text-lg font-bold text-white">{msg.content.vehicle.name}</h3>
                            <div className="text-sm text-cyan-300">
                              {msg.content.vehicle.type} • {msg.content.vehicle.tier}
                            </div>
                          </div>
                          
                          <div className="space-y-1">
                            <div><strong>Nation:</strong> {msg.content.vehicle.faction}</div>
                            {(msg.content.vehicle.isPremium || msg.content.vehicle.isMarket) && (
                              <div><strong>Type:</strong> 
                                {msg.content.vehicle.isPremium && <span className="text-yellow-400 ml-1">Premium</span>}
                                {msg.content.vehicle.isMarket && <span className="text-green-400 ml-1">Market</span>}
                              </div>
                            )}
                          </div>
                          
                          <div>
                            <strong>Description:</strong>
                            <div className="mt-1 text-slate-300">{msg.content.vehicle.description}</div>
                          </div>
                        </div>
                        
                        {/* Key Stats with Emojis */}
                        <div>
                          <strong>Key Stats:</strong>
                          <div className="mt-2 space-y-1">
                            <div>❤️ Health: {msg.content.vehicle.stats.health?.toLocaleString()} HP</div>
                            {msg.content.vehicle.stats.speed && (
                              <div>⚡ Speed: {msg.content.vehicle.stats.speed} km/h</div>
                            )}
                            {msg.content.vehicle.stats.armor && (
                              <div>🛡️ Armor: {msg.content.vehicle.stats.armor}</div>
                            )}
                            {msg.content.vehicle.stats.agility && (
                              <div>🌀 Agility: {msg.content.vehicle.stats.agility}</div>
                            )}
                            <div>🎖️ Tier: {msg.content.vehicle.tier}</div>
                          </div>
                        </div>
                        
                        {/* View Vehicle Button */}
                        <button
                          onClick={() => {
                            const vehicle = VEHICLES.find(v => v.name === msg.content.vehicle.name)
                            if (vehicle) {
                              setSearchQuery(vehicle.name);
                              setBattlePassOpen(false);
                              setExpandedVehicle(vehicle.id.toString());
                              setChatOpen(false);
                            }
                          }}
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors mt-3"
                        >
                          View Vehicle
                        </button>
                      </div>
                    ) : typeof msg.content === 'object' && msg.content.type === 'vehicle_comparison' ? (
                      <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white text-center">Vehicle Comparison</h3>
                        
                        {/* Vehicle 1 */}
                        <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600">
                          <img 
                            src={`${msg.content.vehicles[0].image}`} 
                            alt={msg.content.vehicles[0].name}
                            className="w-full max-w-xs rounded-lg object-cover mb-3"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <h4 className="font-bold text-cyan-300 mb-2">
                            {msg.content.vehicles[0].flag} {msg.content.vehicles[0].name}
                          </h4>
                          <div className="space-y-1 text-sm">
                            <div>❤️ Health: {msg.content.vehicles[0].stats.health?.toLocaleString()} HP</div>
                            {msg.content.vehicles[0].stats.speed && (
                              <div>⚡ Speed: {msg.content.vehicles[0].stats.speed} km/h</div>
                            )}
                            {msg.content.vehicles[0].stats.agility && (
                              <div>🌀 Agility: {msg.content.vehicles[0].stats.agility}</div>
                            )}
                            <div>🎖️ Tier: {msg.content.vehicles[0].tier}</div>
                          </div>
                        </div>

                        {/* Vehicle 2 */}
                        <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600">
                          <img 
                            src={`${msg.content.vehicles[1].image}`} 
                            alt={msg.content.vehicles[1].name}
                            className="w-full max-w-xs rounded-lg object-cover mb-3"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <h4 className="font-bold text-cyan-300 mb-2">
                            {msg.content.vehicles[1].flag} {msg.content.vehicles[1].name}
                          </h4>
                          <div className="space-y-1 text-sm">
                            <div>❤️ Health: {msg.content.vehicles[1].stats.health?.toLocaleString()} HP</div>
                            {msg.content.vehicles[1].stats.speed && (
                              <div>⚡ Speed: {msg.content.vehicles[1].stats.speed} km/h</div>
                            )}
                            {msg.content.vehicles[1].stats.agility && (
                              <div>🌀 Agility: {msg.content.vehicles[1].stats.agility}</div>
                            )}
                            <div>🎖️ Tier: {msg.content.vehicles[1].tier}</div>
                          </div>
                        </div>

                        {/* Analysis Section */}
                        <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-600">
                          <h4 className="font-bold text-yellow-300 mb-2">📊 Analysis</h4>
                          <div className="space-y-1 text-sm">
                            <div>• Survivability: <strong>{msg.content.analysis.survivability}</strong> ({msg.content.analysis.survivabilityValue?.toLocaleString()} HP)</div>
                            {msg.content.analysis.speedValue > 0 && (
                              <div>• Speed: <strong>{msg.content.analysis.speed}</strong> ({msg.content.analysis.speedValue} km/h)</div>
                            )}
                            {msg.content.analysis.agilityValue > 0 && (
                              <div>• Agility: <strong>{msg.content.analysis.agility}</strong> ({msg.content.analysis.agilityValue})</div>
                            )}
                            <div>• Tier: <strong>{msg.content.analysis.tier}</strong></div>
                          </div>
                        </div>

                        {/* Recommendation */}
                        <div className="bg-green-900/30 rounded-lg p-3 border border-green-600/50">
                          <h4 className="font-bold text-green-300 mb-1">🏆 Recommendation</h4>
                          <div className="text-sm">
                            <strong>{msg.content.recommendation}</strong> for superior overall performance
                          </div>
                        </div>
                      </div>
                    ) : typeof msg.content === 'object' && msg.content.type === 'no_vehicle_found' ? (
                      <div className="text-slate-300 italic">
                        {msg.content.message}
                      </div>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}
              {isLoading && <div className="text-center text-slate-400">Thinking...</div>}
              {/* Scroll target for auto-scrolling */}
              <div ref={chatMessagesEndRef} />
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
              onClick={() => setShowUpdates(true)}
              className="text-cyan-400 hover:text-cyan-300 underline font-medium"
            >
              Updates
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
                  <p className="mb-4">
  MWT Assistant is your all-in-one tool for tracking MWT data with real-time stats, detailed vehicle info, and AI-powered analysis. Whether you're a seasoned commander or just starting out, it provides everything you need to understand vehicles, compare stats, and plan your strategies.
</p>
<p className="mb-4">
  The app doesn’t collect personal data. Anonymous performance data may be gathered by Google Play Services, and ads may use cookies under their own policies. We handle all information responsibly and prioritize your privacy.
</p>
<p className="mb-4">
  MWT Assistant is an independent project, not affiliated with Artstorm or Cube Software. “MWT” and related names or images are trademarks of their respective owners. Our goal is to bring accurate, accessible data to the community.
</p>
<p>
  Join thousands of commanders who rely on MWT Assistant to track data and improve gameplay. We regularly update our tools and expand features based on community feedback.
</p>
<p>
  <a 
    href="https://sites.google.com/view/mwtassistantpppolicy/home" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-cyan-400 underline hover:text-cyan-300"
  >
    Read the Policy
  </a>
</p>

                  <p className="text-sm text-slate-400">
                    Created and Runned by Naveed2227 
                  </p>
                   <div className="flex items-center space-x-4 pt-2">
                    <p className="text-sm text-slate-400">Contact:</p>
                    <div className="flex items-center space-x-4">
                      {/* Email */}
                      <a 
                        href="mailto:mwtassistantteam@gmail.com" 
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="Email"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </a>
                      
                      {/* Instagram */}
                      <a 
                        href="https://www.instagram.com/mwt_assistant" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="Instagram"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12.001 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         )}

      

        {showUpdates && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-cyan-400">Updates of MWT Assistant (Unofficial) </h2>
                  <button onClick={() => setShowUpdates(false)} className="text-slate-400 hover:text-white">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-4 text-slate-300">
                  <div className="mt-6 pt-4 border-t border-slate-600">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Updates</h3>
                    <div className="space-y-3">


                    <div className="bg-slate-700/50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-cyan-300">Version 1.1.01 (25/11/2025)</span>
                          <span className="text-sm text-slate-400">Update</span>
                        </div>
                        <ul className="text-sm text-slate-300 space-y-1">
                          <li>• New Vehicles added for December</li>
                          <li>• Flag problem fixed</li>
                          <li>• Minor bugs fixed</li>
                        </ul>
                      </div>
                     <div className="bg-slate-700/50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-cyan-300">Version 1.1.02 (19/11/2025)</span>
                          <span className="text-sm text-slate-400">Update</span>
                        </div>
                        <ul className="text-sm text-slate-300 space-y-1">
                          <li>• New "Vehicle with this weapon" features to show vehicles with same weapon</li>
                          <li>• Battle Pass images updated</li>
                          <li>• Minor bugs fixed</li>
                        </ul>
                      </div>


                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-cyan-300">Version 1.1.01 (14/11/2025)</span>
                          <span className="text-sm text-slate-400">Update</span>
                        </div>
                        <ul className="text-sm text-slate-300 space-y-1">
                          <li>• Updated vehicle stats</li>
                          <li>• Minor bugs fixed</li>
                        </ul>
                      </div>

                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-cyan-300">Version 1.1.00 (9/11/2025)</span>
                          <span className="text-sm text-slate-400">Major Update</span>
                        </div>
                        <ul className="text-sm text-slate-300 space-y-1">
                          <li>• Mwt Assistant is now available on Playstore!!!</li>
                        </ul>
                      </div>

                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-cyan-300">Version 1.0.04 (5/11/2025)</span>
                          <span className="text-sm text-slate-400">Update</span>
                        </div>
                        <ul className="text-sm text-slate-300 space-y-1">
                          <li>• Fixed the "Download stats" images</li>
                          <li>• New filter buttons</li>
                          <li>• Minor bugs fixed</li>
                        </ul>
                      </div>

                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-cyan-300">Version 1.0.03 (1/11/2025)</span>
                          <span className="text-sm text-slate-400">Update</span>
                        </div>
                        <ul className="text-sm text-slate-300 space-y-1">
                          <li>• Added new filtering options</li>
                          <li>• Vehicle images bug fixed</li>
                          <li>• Updated vehicle data with latest changes</li>
                        </ul>
                      </div>

                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-cyan-300">Version 1.0.02 (28/10/2025)</span>
                          <span className="text-sm text-slate-400">Update</span>
                        </div>
                        <ul className="text-sm text-slate-300 space-y-1">
                          <li>• Fixed banner ad placeholder size</li>
                          <li>• Added "New" and "Upcoming" tags</li>
                          <li>• Updated vehicle data with latest changes</li>
                        </ul>
                      </div>

                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-cyan-300">Version 1.0.01 (18/10/2025)</span>
                          <span className="text-sm text-slate-400">Update</span>
                        </div>
                        <ul className="text-sm text-slate-300 space-y-1">
                          <li>• Added new filtering options</li>
                          <li>• Fixed the Event tab bug</li>
                          <li>• Updated vehicle data with latest changes</li>
                        </ul>
                      </div>

                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-cyan-300">Version 1.0.00 (12/10/2025)</span>
                          <span className="text-sm text-slate-400">Initial</span>
                        </div>
                        <ul className="text-sm text-slate-300 space-y-1">
                          <li>• Initial release of MWT Assistant Web version</li>
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
        <button
          onClick={() => setShowCredits(false)}
          className="text-slate-400 hover:text-white text-2xl"
        >
          ✕
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">Naveed2227</h4>
          <p className="text-white text-[10px] mb-0.5 flex items-center">
            Discord: naveed27
            <CopyToClipboard text="naveed2227" className="ml-1" />
          </p>
          <p className="text-white text-xs">Lead developer and Creator, PRESS-Acc</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">Nesli27</h4>
          <p className="text-white text-[10px] mb-0.5 flex items-center">
            Discord: suncatcher_27
            <CopyToClipboard text="suncatcher_27" className="ml-1" />
          </p>
          <p className="text-white text-xs">Server Admin, Supporter</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">QWE</h4>
          <p className="text-white text-[10px] mb-0.5">Discord: qwe._.mwt</p>
          <p className="text-white text-xs">Server Admin, Supporter, Coordinator</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">Strider 1</h4>
          <p className="text-white text-[10px] mb-0.5 flex items-center">
            Discord: topgun7169
            <CopyToClipboard text="topgun7169" className="ml-1" />
          </p>
          <p className="text-white text-xs">Server Moderator, Supporter, Coordinator</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">Shiroko_Chan</h4>
          <p className="text-white text-[10px] mb-0.5 flex items-center">
            Discord: shiro_kam1
            <CopyToClipboard text="shiro_kam1" className="ml-1" />
          </p>
          <p className="text-white text-xs">Server Moderator, Supporter</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">THE DAWN</h4>
          <p className="text-white text-[10px] mb-0.5 flex items-center">
            Discord: apexmwt
            <CopyToClipboard text="apexmwt" className="ml-1" />
          </p>
          <p className="text-white text-xs">PRESS-Acc, Writer, Supporter</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">后羿的太阳</h4>
          <p className="text-white text-[10px] mb-0.5">Discord:  houyidetaiyang</p>
          <p className="text-white text-xs">PRESS-Acc, Writer, Supporter</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">白叔</h4>
          <p className="text-white text-[10px] mb-0.5 flex items-center">
            Discord: baishu_dream
            <CopyToClipboard text="baishu_dream" className="ml-1" />
          </p>
          <p className="text-white text-xs">PRESS-Acc, Writer, Supporter</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">White Windu</h4>
          <p className="text-white text-[10px] mb-0.5 flex items-center">
            Discord: white_windu
            <CopyToClipboard text="white_windu" className="ml-1" />
          </p>
          <p className="text-white text-xs">Adviser, Coordination Manager</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">Joe</h4>
          <p className="text-white text-[10px] mb-0.5 flex items-center">
            Discord: joeegy1
            <CopyToClipboard text="joeegy1" className="ml-1" />
          </p>
          <p className="text-white text-xs">Social Media Manager</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">Hoffman Derpin</h4>
          <p className="text-white text-[10px] mb-0.5">Discord: sir205947 </p>
          <p className="text-white text-xs">Supporter, Writer</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">Spector404</h4>
          <p className="text-white text-[10px] mb-0.5 flex items-center">
            Discord: spector404
            <CopyToClipboard text="spector404" className="ml-1" />
          </p>
          <p className="text-white text-xs">Supporter, Writer</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">🇺🇸 Error fan</h4>
          <p className="text-white text-[10px] mb-0.5 flex items-center">
            Discord: error0414
            <CopyToClipboard text="error0414" className="ml-1" />
          </p>
          <p className="text-white text-xs">Supporter, Writer</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">Hollyninja456</h4>
          <p className="text-white text-[10px] mb-0.5 flex items-center">
            Discord: hollyninja456
            <CopyToClipboard text="hollyninja456" className="ml-1" />
          </p>
          <p className="text-white text-xs">Writer, Supporter</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">Yx190_44440</h4>
          <p className="text-white text-[10px] mb-0.5 flex items-center">
            Discord: yx190_44440
            <CopyToClipboard text="yx190_44440" className="ml-1" />
          </p>
          <p className="text-white text-xs">Supporter, Writer</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">Unnamed</h4>
          <p className="text-white text-[10px] mb-0.5 flex items-center">
            Discord: unnamed07922
            <CopyToClipboard text="unnamed07922" className="ml-1" />
          </p>
          <p className="text-white text-xs">Suggester</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">Flarakrad</h4>
          <p className="text-white text-[10px] mb-0.5 flex items-center">
            Discord: flarakrad
            <CopyToClipboard text="flarakrad" className="ml-1" />
          </p>
          <p className="text-white text-xs">Contributor</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">Yeti</h4>
          <p className="text-white text-[10px] mb-0.5">Discord: notyeti6969</p>
          <p className="text-white text-xs">Supporter</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">OberstLeutnantFerid</h4>
          <p className="text-white text-[10px] mb-0.5 flex items-center">
            Discord: ferid8309
            <CopyToClipboard text="ferid8309" className="ml-1" />
          </p>
          <p className="text-white text-xs">Militarist Officer</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">Янѫ. Pгапа Ж</h4>
          <p className="text-white text-[10px] mb-0.5">Discord: yunru.x</p>
          <p className="text-white text-xs">Adviser, Lurks</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">EPTO</h4>
          <p className="text-white text-[10px] mb-0.5">Discord: ios.2 </p>
          <p className="text-white text-xs">Bug hunter</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">枕頭</h4>
          <p className="text-white text-[10px] mb-0.5">Discord: lala079673</p>
          <p className="text-white text-xs">Supporter</p>
        </div>
        <div className="p-2">
          <h4 className="text-cyan-300 font-semibold text-base">VIPER2729</h4>
          <p className="text-white text-[10px] mb-0.5">Discord: </p>
          <p className="text-white text-xs">Supporter</p>
        </div>
      </div>

      {/* Media Members Section */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Media supporters</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            { name: 'Mr.Hasori', discord: 'mr.hasori', role: 'YouTube Content Creator' },
            { name: 'QWE', discord: 'qwe._.mwt', role: 'Promotional Designer' },
            { name: 'Joe', discord: 'joeegy1', role: 'Social Media Manager' },
          ].map((person, index) => (
            <div key={`media-${index}`} className="bg-slate-800 p-4 rounded-lg">
              <h4 className="text-white font-semibold">{person.name}</h4>
              <p className="text-slate-300 text-xs mb-1 flex items-center">
                Discord: {person.discord}
                <CopyToClipboard text={person.discord} className="ml-1" />
              </p>
              <p className="text-cyan-300 text-sm">{person.role}</p>
            </div>
          ))}
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

        {vehicleDetailsOpenId && (() => {
          const vehicle = VEHICLES.find(v => v.id.toString() === vehicleDetailsOpenId);
          if (!vehicle) return null;
          
          // Handle construction vehicles - create modified version with all stats set to 0 and no weapons
          const displayVehicle = isConstructionVehicle(vehicle.name) ? {
            ...vehicle,
            stats: {
              health: 0,
              speed: 0,
              armor: 0,
              agility: 0,
              afterburnerSpeed: 0,
              verticalSpeed: 0,
              damage: 0,
              range: 0
            },
            weapons: []
          } : vehicle;
          
          return (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div 
                ref={vehicleDetailsModalRef}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="bg-slate-900 rounded-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto border border-slate-700"
              >
                {/* Header with close button and vehicle name */}
                <div className="p-4 border-b border-slate-700 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={getFlagImage(vehicle.faction)} 
                      alt={vehicle.faction} 
                      className="w-8 h-5 object-cover rounded-sm shadow"
                    />
                    <h2 className="text-xl font-bold text-white">{vehicle.name}</h2>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShareVehicle(vehicle);
                      }}
                      className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-blue-400 transition-colors"
                      title="Share vehicle"
                    >
                      <Share className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setVehicleDetailsOpenId(null)}
                      className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                {/* Main content */}
                <div className="p-6 bg-slate-900">
                  {/* Image and Description - Mobile First (shown before other content) */}
                  <div className="block lg:hidden mb-6">
                    {/* Vehicle Image and Basic Info - Mobile First */}
                    <div className="bg-slate-800/80 rounded-lg overflow-hidden mb-4">
                      <div className="p-4">
                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                          <span className="px-2 py-1 bg-slate-700/90 text-xs rounded-full text-slate-300">
                            {vehicle.type}
                          </span>
                          <span className="px-2 py-1 bg-blue-900/50 text-xs rounded-full text-blue-300">
                            Tier {formatTier(vehicle.tier)}
                          </span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            getVehicleRarity(vehicle.name) === 'Common' ? 'bg-gray-600 text-white' :
                            getVehicleRarity(vehicle.name) === 'Enhanced' ? 'bg-green-300 text-white' :
                            getVehicleRarity(vehicle.name) === 'Rare' ? 'bg-blue-600 text-white' :
                            getVehicleRarity(vehicle.name) === 'Epic' ? 'bg-purple-600 text-white' :
                            getVehicleRarity(vehicle.name) === 'Legendary' ? 'bg-yellow-600 text-white' :
                            'bg-cyan-500 text-white'
                          }`}>
                            {getVehicleRarity(vehicle.name) || 'Standard'}
                          </span>
                        </div>
                        <div className="relative w-full pb-[56.25%] mb-2">
                          {vehicle.image ? (
                            <>
                              <img 
                                src={vehicle.image} 
                                alt={vehicle.name} 
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                              {/* Vehicle Tags */}
                              <div className="absolute top-2 right-2 z-20 flex flex-col gap-1">
                                {isNewVehicle(vehicle.name) && (
                                  <div className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[10px] sm:text-xs font-semibold shadow-lg bg-white text-black">
                                    NEW
                                  </div>
                                )}
                                {isUpcomingVehicle(vehicle.name) && (
                                  <div className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[10px] sm:text-xs font-semibold shadow-lg bg-red-600 text-white">
                                    UPCOMING
                                  </div>
                                )}
                              </div>
                            </>
                          ) : (
                            <div className="absolute inset-0 bg-slate-700 flex items-center justify-center text-slate-400">
                              No image available
                            </div>
                          )}
                        </div>
                        
                        {/* Download buttons - below image for mobile */}
                        {vehicle.image && (
                          <div className="flex justify-center gap-2 mb-4">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                // Create a temporary link to download the image
                                const link = document.createElement('a');
                                link.href = vehicle.image;
                                link.download = `${vehicle.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                              }}
                              className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs transition-colors"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                              </svg>
                              <span>Download</span>
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                downloadStats(vehicle.id);
                              }}
                              className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-xs transition-colors"
                            >
                              <Camera className="w-3 h-3" />
                              <span>Download stats</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Description section - Mobile */}
                    {vehicle.description && (
                      <div className="bg-slate-800/80 rounded-lg overflow-hidden mb-4">
                        <div className="p-4">
                          <h4 className="text-base font-bold text-cyan-300 mb-2">DESCRIPTION</h4>
                          <p className="text-slate-300 text-sm">{vehicle.description}</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Basic Information Section - Mobile */}
                    <div className="bg-slate-800/80 rounded-lg overflow-hidden">
                      <div className="p-4">
                        <h4 className="text-lg font-bold text-cyan-300 mb-4">BASIC INFORMATION</h4>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-base text-slate-300">Type</span>
                            <span className="text-base font-medium text-white">
                              {vehicle.type || 'Unknown'}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-base text-slate-300">Country</span>
                            <span className="text-base font-medium text-white">
                              {vehicle.faction || 'Unknown'}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-base text-slate-300">Tier</span>
                            <span className="text-base font-medium text-white">
                              {formatTier(vehicle.tier) || 'Unknown'}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-base text-slate-300">Rarity</span>
                            <span className="text-base font-medium text-white">
                              {getVehicleRarity(vehicle.name) || 'Standard'}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            {(() => {
                              // Determine the label text based on the obtain method
                              let labelText = 'How to Obtain';
                              
                              // Check if vehicle is exclusive first (highest priority)
                              if (isExclusiveVehicle(vehicle.name)) {
                                labelText = 'How to Obtain';
                              } else {
                                // Then check currency data
                                const currencyInfo = vehicleCurrencyData.find(v => v.name === vehicle.name);
                                if (currencyInfo && currencyInfo.amount !== null) {
                                  labelText = 'Price';
                                } else if (isMarketVehicle(vehicle.name)) {
                                  labelText = 'How to Obtain';
                                }
                              }
                              
                              return <span className="text-base text-slate-300">{labelText}</span>;
                            })()}
                            <div className="flex items-center gap-2">
                              {(() => {
                                // Check if vehicle is exclusive first (highest priority)
                                if (isExclusiveVehicle(vehicle.name)) {
                                  return <span className="text-slate-200">Event Reward or Gacha</span>;
                                }
                                
                                // Then check currency data
                                const currencyInfo = vehicleCurrencyData.find(v => v.name === vehicle.name);
                                if (currencyInfo && currencyInfo.amount !== null) {
                                  return (
                                    <span className="text-slate-200">{currencyInfo.amount.toLocaleString()} {currencyInfo.currency}s</span>
                                  );
                                } else if (currencyInfo && currencyInfo.amount === null) {
                                  return <span className="text-slate-200">Unavailable</span>;
                                } else if (isMarketVehicle(vehicle.name)) {
                                  return (
                                    <div className="flex items-center gap-1">
                                      <img 
                                        src="/Market.png" 
                                        alt="Market" 
                                        className="w-8 h-8 object-contain"
                                        onError={(e) => {
                                          console.error('Failed to load Market.png:', e);
                                          const target = e.target as HTMLImageElement;
                                          target.style.display = 'none';
                                          const parent = target.parentElement;
                                          if (parent) {
                                            const textSpan = document.createElement('span');
                                            textSpan.className = 'text-base font-medium text-white';
                                            textSpan.textContent = 'Market';
                                            parent.appendChild(textSpan);
                                          }
                                        }}
                                      />
                                      <span className="text-base font-medium text-white">Market</span>
                                    </div>
                                  );
                                } else {
                                  return <span className="text-slate-200">Unavailable</span>;
                                }
                              })()}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Armour Button - Show only if vehicle has armour video */}
                      {hasArmourVideo(vehicle.name) && (
                        <div className="mt-4">
                          <button 
                            onClick={() => {
                              // Set the vehicle for armour video display
                              setArmourVideoVehicle(vehicle.name);
                              // Find and scroll to armour video section
                              const armourSection = document.getElementById('armour-video-section');
                              if (armourSection) {
                                armourSection.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                          >
                            <Camera className="w-5 h-5" />
                            Armour
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end mt-2">
                      <button
                        onClick={() => {
                          setOriginalVehicleName(searchQuery);
                          // Save the currently selected vehicle before opening the modal
                          const currentVehicle = VEHICLES.find(v => v.name === searchQuery);
                          if (currentVehicle) {
                            setSelectedVehicle(currentVehicle);
                          }
                          setSelectedWeaponForModal(weapon);
                          findVehiclesWithWeapon(weapon.name);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded transition-colors duration-200 flex items-center gap-1"
                        title="Show vehicles with this weapon"
                      >
                        <Search className="w-3 h-3" />
                        <span>Vehicles</span>
                      </button>
                    </div>
                  </div>

                  {/* Vehicle Armour Video - Mobile Only */}
                  <div className="block lg:hidden">
                    <ArmourVideo vehicleName={armourVideoVehicle} />
                  </div>

                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left column - Stats and Weapons */}
                    <div className="w-full lg:w-1/2">
                      {/* Vehicle Specifications */}
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">VEHICLE SPECIFICATIONS</h3>
                        

                        <div className="grid grid-cols-1 gap-4">
                          {/* Health - Always shown */}
                          <div className="bg-slate-800/80 rounded-lg p-4">
                            <StatBar 
                              label="HEALTH" 
                              value={getUpgradedValue(displayVehicle, 'health')} 
                              baseValue={displayVehicle.stats.health}
                              maxValue={2000}
                              upgradeLevel={upgradeLevels[displayVehicle.id] || 0}
                              onUpgradeChange={(level: number) => handleUpgradeChange(displayVehicle.id, level)}
                            />
                          </div>

                          {/* For Jets and Bombers */}
                          {(vehicle.type === 'Fighter Jet' || vehicle.type === 'Attack Aircraft' || vehicle.type === 'Multirole Fighter' || vehicle.type === 'Bomber') && (
                            <>
                              <div className="bg-slate-800/80 rounded-lg p-4">
                                <StatBar 
                                  label="CRUISE SPEED" 
                                  value={getUpgradedValue(displayVehicle, 'speed')} 
                                  baseValue={displayVehicle.stats.speed}
                                  maxValue={3000}
                                  upgradeLevel={upgradeLevels[displayVehicle.id] || 0}
                                  onUpgradeChange={(level: number) => handleUpgradeChange(displayVehicle.id, level)}
                                />
                                <div className="text-xs text-slate-400 mt-1">km/h</div>
                              </div>
                              <div className="bg-slate-800/80 rounded-lg p-4">
                                <StatBar 
                                  label="AFTERBURNER SPEED" 
                                  value={getUpgradedValue(displayVehicle, 'afterburnerSpeed')} 
                                  baseValue={displayVehicle.stats.afterburnerSpeed}
                                  maxValue={4000}
                                  upgradeLevel={upgradeLevels[displayVehicle.id] || 0}
                                  onUpgradeChange={(level: number) => handleUpgradeChange(displayVehicle.id, level)}
                                />
                                <div className="text-xs text-slate-400 mt-1">km/h</div>
                              </div>
                            </>
                          )}

                          {/* For Helicopters */}
                          {(vehicle.type === 'Attack Helicopter' || vehicle.type === 'Scout Helicopter' || vehicle.type === 'Helicopter') && (
                            <>
                              <div className="bg-slate-800/80 rounded-lg p-4">
                                <StatBar 
                                  label="CRUISE SPEED" 
                                  value={getUpgradedValue(displayVehicle, 'speed')} 
                                  baseValue={displayVehicle.stats.speed}
                                  maxValue={500}
                                  upgradeLevel={upgradeLevels[displayVehicle.id] || 0}
                                  onUpgradeChange={(level: number) => handleUpgradeChange(displayVehicle.id, level)}
                                />
                                <div className="text-xs text-slate-400 mt-1">km/h</div>
                              </div>
                              <div className="bg-slate-800/80 rounded-lg p-4">
                                <StatBar 
                                  label="VERTICAL SPEED" 
                                  value={getUpgradedValue(displayVehicle, 'verticalSpeed')} 
                                  baseValue={displayVehicle.stats.verticalSpeed}
                                  maxValue={30}
                                  upgradeLevel={upgradeLevels[displayVehicle.id] || 0}
                                  onUpgradeChange={(level: number) => handleUpgradeChange(displayVehicle.id, level)}
                                />
                                <div className="text-xs text-slate-400 mt-1">m/s</div>
                              </div>
                              <div className="bg-slate-800/80 rounded-lg p-4">
                                <StatBar 
                                  label="AGILITY" 
                                  value={getUpgradedValue(displayVehicle, 'agility')} 
                                  baseValue={displayVehicle.stats.agility}
                                  maxValue={100}
                                  upgradeLevel={upgradeLevels[displayVehicle.id] || 0}
                                  onUpgradeChange={(level: number) => handleUpgradeChange(displayVehicle.id, level)}
                                />
                              </div>
                            </>
                          )}

                          {/* For Tanks/Other Vehicles */}
                          {!['Fighter Jet', 'Attack Aircraft', 'Multirole Fighter', 'Bomber', 'Helicopter', 'Attack Helicopter', 'Scout Helicopter'].includes(vehicle.type) && (
                            <>
                              <div className="bg-slate-800/80 rounded-lg p-4">
                                <StatBar 
                                  label="SPEED" 
                                  value={getUpgradedValue(displayVehicle, 'speed')} 
                                  baseValue={displayVehicle.stats.speed}
                                  maxValue={100}
                                  upgradeLevel={upgradeLevels[displayVehicle.id] || 0}
                                  onUpgradeChange={(level: number) => handleUpgradeChange(displayVehicle.id, level)}
                                />
                                <div className="text-xs text-slate-400 mt-1">km/h</div>
                              </div>
                              <div className="bg-slate-800/80 rounded-lg p-4">
                                <StatBar 
                                  label="AGILITY" 
                                  value={getUpgradedValue(displayVehicle, 'agility')} 
                                  baseValue={displayVehicle.stats.agility || 0}
                                  maxValue={100}
                                  upgradeLevel={upgradeLevels[displayVehicle.id] || 0}
                                  onUpgradeChange={(level: number) => handleUpgradeChange(displayVehicle.id, level)}
                                />
                              </div>
                              {displayVehicle.stats.armor && (
                                <div className="bg-slate-800/80 rounded-lg p-4">
                                  <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs font-medium text-gray-300 flex items-center gap-1">
                                      ARMOR
                                      <div className="relative group ml-1">
                                        <button
                                          className="w-4 h-4 flex items-center justify-center text-xs rounded-full border border-blue-400 text-blue-400 hover:bg-blue-900/50 transition-colors"
                                          onMouseEnter={(e) => {
                                            const tooltip = e.currentTarget.nextElementSibling as HTMLElement;
                                            tooltip.classList.remove('hidden');
                                          }}
                                          onMouseLeave={(e) => {
                                            const tooltip = e.currentTarget.nextElementSibling as HTMLElement;
                                            tooltip.classList.add('hidden');
                                          }}
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            const tooltip = e.currentTarget.nextElementSibling as HTMLElement;
                                            tooltip.classList.toggle('hidden');
                                          }}
                                          aria-label="Armor information"
                                        >
                                          ?
                                        </button>
                                        <div className="absolute z-10 hidden left-1/2 transform -translate-x-1/2 bottom-full mb-1 w-48 bg-slate-800 text-white text-xs p-2 rounded shadow-lg">
                                          Armor stats are based on average calculations and might not be 100% accurate
                                        </div>
                                      </div>
                                    </span>
                                    <span className="text-sm font-bold text-white">
                                      {displayVehicle.stats.armor}
                                      {isEditor && isEditMode && (
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            const next = prompt('Edit Armor (e.g., "1100mm")', String(displayVehicle.stats.armor || ''));
                                            if (next !== null) {
                                              saveEdit(displayVehicle.id, 'stats.armor', next);
                                            }
                                          }}
                                          className="ml-1 text-[10px] leading-none hover:opacity-80"
                                          title="Edit Armor"
                                          aria-label="Edit Armor"
                                        >
                                          ✏️
                                        </button>
                                      )}
                                    </span>
                                  </div>
                                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-gray-300"
                                      style={{ width: `${(parseInt(displayVehicle.stats.armor) / 500) * 100}%` }}
                                    />
                                  </div>
                                </div>
                              )}
                            </>
                          )}

                          {/* Agility - Shown for all aircraft */}
                          {(vehicle.type === 'Fighter Jet' || vehicle.type === 'Attack Aircraft' || 
                            vehicle.type === 'Multirole Fighter' || vehicle.type === 'Bomber' || 
                            vehicle.type === 'Attack Helicopter' || vehicle.type === 'Scout Helicopter') && (
                            <div className="bg-slate-800/80 rounded-lg p-4">
                              <StatBar 
                                label="AGILITY" 
                                value={getUpgradedValue(vehicle, 'agility')} 
                                baseValue={vehicle.stats.agility}
                                maxValue={100}
                                upgradeLevel={upgradeLevels[vehicle.id] || 0}
                                onUpgradeChange={(level: number) => handleUpgradeChange(vehicle.id, level)}
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Weapon Systems */}
                      <div className="text-white">
                        <h3 className="text-lg font-bold mb-3">Weapons</h3>
                        <div className="space-y-3">
                          {isConstructionVehicle(displayVehicle.name) ? (
                            <div className="bg-slate-800/50 rounded-lg p-6 text-center">
                              <div className="text-lg font-semibold text-cyan-300">No weapons</div>
                            </div>
                          ) : displayVehicle.weapons?.length > 0 ? (
                            displayVehicle.weapons.map((weapon: any, idx: number) => (
                              <div
                                key={idx}
                                className="bg-slate-800/80 rounded-lg p-4 border border-slate-700/50 group cursor-pointer"
                              >
                                <div className="flex flex-col sm:flex-row gap-4">
                                  <div className="flex flex-col items-start flex-shrink-0" data-missile-image-container>
                                    <div className="w-28 h-28 sm:w-32 sm:h-32 aspect-square bg-slate-900/40 rounded overflow-hidden border-2 border-blue-700/80">
                                      <img
                                        src={getMissileImageCandidates(weapon.name)[0]}
                                        alt={String(weapon.name || "")}
                                        className="w-full h-full object-contain"
                                        data-idx="0"
                                        onError={(e) => {
                                          const candidates = getMissileImageCandidates(weapon.name)
                                          const img = e.currentTarget
                                          const nextIdx = Number(img.dataset.idx || "0") + 1
                                          if (nextIdx < candidates.length) {
                                            img.dataset.idx = String(nextIdx)
                                            img.src = candidates[nextIdx]
                                          } else {
                                            const container = img.closest('[data-missile-image-container]') as HTMLElement | null
                                            if (container) {
                                              container.style.display = 'none'
                                            } else {
                                              img.style.display = 'none'
                                            }
                                          }
                                        }}
                                      />
                                    </div>
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        const img = (e.currentTarget.previousElementSibling?.querySelector('img') as HTMLImageElement | null)
                                        const url = (img as any)?.currentSrc || img?.src
                                        if (!url) return

                                        const urlNoQuery = url.split('#')[0].split('?')[0]
                                        const resolved = new URL(urlNoQuery, window.location.href)
                                        const fileName = decodeURIComponent(resolved.pathname.split('/').pop() || 'missile.jpg')

                                        const link = document.createElement('a')
                                        link.href = url
                                        link.download = fileName
                                        document.body.appendChild(link)
                                        link.click()
                                        document.body.removeChild(link)
                                      }}
                                      className="mt-2 p-2 rounded bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                                      title="Download missile image"
                                      aria-label="Download missile image"
                                    >
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                      </svg>
                                    </button>
                                  </div>
                                  <div className="flex-1 min-w-0 flex flex-col">
                                    <div className="mb-2">
                                      <h4 className="text-lg sm:text-xl font-semibold text-cyan-300 flex items-center gap-2">
                                        <span className="truncate">{weapon.name}</span>
                                        {isEditor && isEditMode && (
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              const next = prompt('Edit Weapon Name', String(weapon.name || ''));
                                              if (next !== null) {
                                                saveEdit(displayVehicle.id, `weapons[${idx}].name`, next.trim());
                                              }
                                            }}
                                            className="text-[10px] leading-none hover:opacity-80"
                                            title={`Edit ${weapon.name}`}
                                            aria-label={`Edit ${weapon.name}`}
                                          >
                                            ✏️
                                          </button>
                                        )}
                                      </h4>
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                                      <div>
                                        <div className="text-slate-400 text-xs">Damage</div>
                                        <div className="text-base font-semibold flex items-center gap-1">
                                          {weapon.damage ?? 'N/A'}
                                          {isEditor && isEditMode && (
                                            <button
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                const raw = prompt('Edit Damage (number)', String(weapon.damage ?? '0'));
                                                if (raw !== null) {
                                                  const val = parseInt(raw, 10);
                                                  if (!isNaN(val)) saveEdit(displayVehicle.id, `weapons[${idx}].damage`, val);
                                                }
                                              }}
                                              className="ml-1 text-[10px] leading-none hover:opacity-80"
                                              title={`Edit Damage`}
                                              aria-label={`Edit Damage`}
                                            >
                                              ✏️
                                            </button>
                                          )}
                                        </div>
                                      </div>
                                      <div>
                                        <div className="text-slate-400 text-xs">Penetration</div>
                                        <div className="text-base font-semibold flex items-center gap-1">
                                          {weapon.penetration ?? 'N/A'}
                                          {isEditor && isEditMode && (
                                            <button
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                const raw = prompt('Edit Penetration (number)', String(weapon.penetration ?? '0'));
                                                if (raw !== null) {
                                                  const val = parseInt(raw, 10);
                                                  if (!isNaN(val)) saveEdit(displayVehicle.id, `weapons[${idx}].penetration`, val);
                                                }
                                              }}
                                              className="ml-1 text-[10px] leading-none hover:opacity-80"
                                              title={`Edit Penetration`}
                                              aria-label={`Edit Penetration`}
                                            >
                                              ✏️
                                            </button>
                                          )}
                                        </div>
                                      </div>
                                      <div>
                                        <div className="text-slate-400 text-xs">Reload</div>
                                        <div className="text-base font-semibold flex items-center gap-1">
                                          {weapon.reload != null ? `${weapon.reload}s` : 'N/A'}
                                          {isEditor && isEditMode && (
                                            <button
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                const raw = prompt('Edit Reload (seconds)', String(weapon.reload ?? '0'));
                                                if (raw !== null) {
                                                  const val = parseFloat(raw);
                                                  if (!isNaN(val as any)) saveEdit(displayVehicle.id, `weapons[${idx}].reload`, val);
                                                }
                                              }}
                                              className="ml-1 text-[10px] leading-none hover:opacity-80"
                                              title={`Edit Reload`}
                                              aria-label={`Edit Reload`}
                                            >
                                              ✏️
                                            </button>
                                          )}
                                        </div>
                                      </div>
                                      {weapon.range && (
                                        <div>
                                          <div className="text-slate-400 text-xs">Range</div>
                                          <div className="font-medium">{weapon.range}m</div>
                                        </div>
                                      )}
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                      {missileHasTags(weapon.name).map((tag, tagIndex) => (
                                        <div key={tagIndex} className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded text-xs">
                                          {tag === 'anti-flare' && (
                                            <>
                                              <div className="w-3 h-3 text-orange-400">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                                </svg>
                                              </div>
                                              <span className="text-orange-400 font-medium">Anti-Flare</span>
                                            </>
                                          )}
                                          {tag === 'anti-warning' && (
                                            <>
                                              <div className="w-3 h-3 text-red-400">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                </svg>
                                              </div>
                                              <span className="text-red-400 font-medium">Anti-Warning</span>
                                            </>
                                          )}
                                          {tag === 'long-range' && (
                                            <>
                                              <div className="w-3 h-3 text-blue-400">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                                                </svg>
                                              </div>
                                              <span className="text-blue-400 font-medium">Long-Range</span>
                                            </>
                                          )}
                                          {tag === 'rocket-pod' && (
                                            <>
                                              <div className="w-3 h-3 text-purple-400">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                                  <path d="M12 2C11.45 2 11 2.45 11 3v9H5l7 7 7-7h-6V3c0-.55-.45-1-1-1z"/>
                                                </svg>
                                              </div>
                                              <span className="text-purple-400 font-medium">Rocket-Pod</span>
                                            </>
                                          )}
                                          {tag === 'laser-guided' && (
                                            <>
                                              <div className="w-3 h-3 text-green-400">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                                                </svg>
                                              </div>
                                              <span className="text-green-400 font-medium">Laser-Guided</span>
                                            </>
                                          )}
                                          {tag === 'missile' && (
                                            <>
                                              <div className="w-3 h-3 text-yellow-400">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                                  <path d="M20 12l-8-8v5H5v6h7v5l8-8z"/>
                                                </svg>
                                              </div>
                                              <span className="text-yellow-400 font-medium">Missile</span>
                                            </>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setOriginalVehicleName(searchQuery);
                                        // Save the currently selected vehicle before opening the modal
                                        const currentVehicle = VEHICLES.find(v => v.name === searchQuery);
                                        if (currentVehicle) {
                                          setSelectedVehicle(currentVehicle);
                                        }
                                        setSelectedWeaponForModal(weapon);
                                        findVehiclesWithWeapon(weapon.name);
                                      }}
                                      className="mt-3 sm:mt-auto sm:ml-auto bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 px-3 rounded transition-colors duration-200 flex items-center gap-2 whitespace-nowrap self-start sm:self-end"
                                      title="Show similar vehicles with this weapon"
                                    >
                                      <Search className="w-4 h-4 flex-shrink-0" />
                                      <span>Similar vehicles with this weapon</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="text-slate-400 text-sm p-4 bg-slate-800/50 rounded">No weapon data available</div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right column - Vehicle Image and Description - Desktop Only */}
                    <div className="hidden lg:block w-full lg:w-1/2">
                      <div className="bg-slate-800/80 rounded-lg overflow-hidden">
                        <div className="p-4">
                          <div className="flex flex-wrap gap-2 justify-center mb-4">
                            <span className="px-2 py-1 bg-slate-700/90 text-xs rounded-full text-slate-300">
                              {vehicle.type}
                            </span>
                            <span className="px-2 py-1 bg-blue-900/50 text-xs rounded-full text-blue-300">
                              Tier {formatTier(vehicle.tier)}
                            </span>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              getVehicleRarity(vehicle.name) === 'Common' ? 'bg-gray-600 text-white' :
                              getVehicleRarity(vehicle.name) === 'Enhanced' ? 'bg-green-300 text-white' :
                              getVehicleRarity(vehicle.name) === 'Rare' ? 'bg-blue-600 text-white' :
                              getVehicleRarity(vehicle.name) === 'Epic' ? 'bg-purple-600 text-white' :
                              getVehicleRarity(vehicle.name) === 'Legendary' ? 'bg-yellow-600 text-white' :
                              'bg-cyan-500 text-white'
                            }`}>
                              {getVehicleRarity(vehicle.name) || 'Standard'}
                            </span>
                          </div>
                          <div className="relative w-full pb-[56.25%] mb-2">
                            {vehicle.image ? (
                              <>
                                <img 
                                  src={vehicle.image} 
                                  alt={vehicle.name} 
                                  className="absolute inset-0 w-full h-full object-cover"
                                />
                                {/* Vehicle Tags */}
                                <div className="absolute top-2 right-2 z-20 flex flex-col gap-1">
                                  {isNewVehicle(vehicle.name) && (
                                    <div className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[10px] sm:text-xs font-semibold shadow-lg bg-white text-black">
                                      NEW
                                    </div>
                                  )}
                                  {isUpcomingVehicle(vehicle.name) && (
                                    <div className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[10px] sm:text-xs font-semibold shadow-lg bg-red-600 text-white">
                                      UPCOMING
                                    </div>
                                  )}
                                </div>
                              </>
                            ) : (
                              <div className="absolute inset-0 bg-slate-700 flex items-center justify-center text-slate-400">
                                No image available
                              </div>
                            )}
                          </div>
                          
                          {/* Download buttons - below image for desktop/tablet */}
                          {vehicle.image && (
                            <div className="flex justify-center gap-2 mb-4">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Create a temporary link to download the image
                                  const link = document.createElement('a');
                                  link.href = vehicle.image;
                                  link.download = `${vehicle.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
                                  document.body.appendChild(link);
                                  link.click();
                                  document.body.removeChild(link);
                                }}
                                className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs transition-colors"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                  <polyline points="7 10 12 15 17 10"></polyline>
                                  <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                <span>Download</span>
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  downloadStats(vehicle.id);
                                }}
                                className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-xs transition-colors"
                              >
                                <Camera className="w-3 h-3" />
                                <span>Download stats</span>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Description section - Moved here for mobile */}
                      <div className="mt-4 bg-slate-800/80 rounded-lg overflow-hidden">
                        <div className="p-4">
                          {vehicle.description && (
                            <div className="pb-4">
                              <h4 className="text-base font-bold text-cyan-300 mb-2">DESCRIPTION</h4>
                              <p className="text-slate-300 text-sm">{vehicle.description}</p>
                            </div>
                          )}
                          
                          {/* Basic Information Section */}
                          <div className="pt-4 border-t border-slate-700">
                            <h4 className="text-lg font-bold text-cyan-300 mb-4">BASIC INFORMATION</h4>
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <span className="text-base text-slate-300">Type</span>
                                <span className="text-base font-medium text-white">
                                  {vehicle.type || 'Unknown'}
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-base text-slate-300">Country</span>
                                <span className="text-base font-medium text-white">
                                  {vehicle.faction || 'Unknown'}
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-base text-slate-300">Tier</span>
                                <span className="text-base font-medium text-white">
                                  {formatTier(vehicle.tier) || 'Unknown'}
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-base text-slate-300">Rarity</span>
                                <span className="text-base font-medium text-white">
                                  {getVehicleRarity(vehicle.name) || 'Standard'}
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                {(() => {
                                  // Determine the label text based on the obtain method
                                  let labelText = 'How to Obtain';
                                  
                                  // Check if vehicle is exclusive first (highest priority)
                                  if (isExclusiveVehicle(vehicle.name)) {
                                    labelText = 'How to Obtain';
                                  } else {
                                    // Then check currency data
                                    const currencyInfo = vehicleCurrencyData.find(v => v.name === vehicle.name);
                                    if (currencyInfo && currencyInfo.amount !== null) {
                                      labelText = 'Price';
                                    } else if (isMarketVehicle(vehicle.name)) {
                                      labelText = 'How to Obtain';
                                    }
                                  }
                                  
                                  return <span className="text-base text-slate-300">{labelText}</span>;
                                })()}
                                <div className="flex items-center gap-2">
                                  {(() => {
                                    // Check if vehicle is exclusive first (highest priority)
                                    if (isExclusiveVehicle(vehicle.name)) {
                                      return <span className="text-slate-200">Event Reward or Gacha</span>;
                                    }
                                    
                                    // Then check currency data
                                    const currencyInfo = vehicleCurrencyData.find(v => v.name === vehicle.name);
                                    if (currencyInfo && currencyInfo.amount !== null) {
                                      return (
                                        <span className="text-slate-200">{currencyInfo.amount.toLocaleString()} {currencyInfo.currency}s</span>
                                      );
                                    } else if (currencyInfo && currencyInfo.amount === null) {
                                      return <span className="text-slate-200">Unavailable</span>;
                                    } else if (isMarketVehicle(vehicle.name)) {
                                      return (
                                        <div className="flex items-center gap-1">
                                          <img 
                                            src="/Market.png" 
                                            alt="Market" 
                                            className="w-8 h-8 object-contain"
                                            onError={(e) => {
                                              console.error('Failed to load Market.png:', e);
                                              const target = e.target as HTMLImageElement;
                                              target.style.display = 'none';
                                              const parent = target.parentElement;
                                              if (parent) {
                                                const textSpan = document.createElement('span');
                                                textSpan.className = 'text-base font-medium text-white';
                                                textSpan.textContent = 'Market';
                                                parent.appendChild(textSpan);
                                              }
                                            }}
                                          />
                                          <span className="text-base font-medium text-white">Market</span>
                                        </div>
                                      );
                                    } else {
                                      return <span className="text-slate-200">Unavailable</span>;
                                    }
                                  })()}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Armour Button - Show only if vehicle has armour video */}
                      {hasArmourVideo(vehicle.name) && (
                        <div className="mb-6">
                          <button 
                            onClick={() => {
                              // Set the vehicle for armour video display
                              setArmourVideoVehicle(vehicle.name);
                              // Find and scroll to armour video section
                              const armourSection = document.getElementById('armour-video-section');
                              if (armourSection) {
                                armourSection.scrollIntoView({ behaviour: 'smooth' });
                              }
                            }}
                            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                          >
                            <Camera className="w-5 h-5" />
                            Armour
                          </button>
                        </div>
                      )}

                      {/* Vehicle Armour Video - Enhanced for mobile visibility */}
                      <div id="armour-video-section" className="mb-6 scroll-mt-4" style={{
                        scrollMarginTop: isMobileDevice() ? '80px' : '100px',
                        overflowY: isMobileDevice() ? 'scroll' : 'auto'
                      }}>
                        <ArmourVideo vehicleName={armourVideoVehicle} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}

        {weaponsModalOpenId && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div ref={vehicleDetailsModalRef} className="bg-slate-900 rounded-xl p-6 w-full max-w-6xl max-h-[90vh] overflow-y-auto border border-slate-700">
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
                  <div
                    key={index}
                    className="bg-slate-800/50 rounded-lg p-4 border border-slate-700"
                  >
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="flex flex-col items-start flex-shrink-0" data-missile-image-container>
                          <div className="w-24 h-24 sm:w-28 sm:h-28 aspect-square bg-slate-900/40 rounded overflow-hidden border-2 border-blue-700/80">
                            <img
                              src={getMissileImageCandidates(weapon.name)[0]}
                              alt={String((weapon as any)?.name || "")}
                              className="w-full h-full object-contain"
                              data-idx="0"
                              onError={(e) => {
                                const candidates = getMissileImageCandidates((weapon as any)?.name)
                                const img = e.currentTarget
                                const nextIdx = Number(img.dataset.idx || "0") + 1
                                if (nextIdx < candidates.length) {
                                  img.dataset.idx = String(nextIdx)
                                  img.src = candidates[nextIdx]
                                } else {
                                  const container = img.closest('[data-missile-image-container]') as HTMLElement | null
                                  if (container) {
                                    container.style.display = 'none'
                                  } else {
                                    img.style.display = 'none'
                                  }
                                }
                              }}
                            />
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              const img = (e.currentTarget.previousElementSibling?.querySelector('img') as HTMLImageElement | null)
                              const url = (img as any)?.currentSrc || img?.src
                              if (!url) return

                              const urlNoQuery = url.split('#')[0].split('?')[0]
                              const resolved = new URL(urlNoQuery, window.location.href)
                              const fileName = decodeURIComponent(resolved.pathname.split('/').pop() || 'missile.jpg')

                              const link = document.createElement('a')
                              link.href = url
                              link.download = fileName
                              document.body.appendChild(link)
                              link.click()
                              document.body.removeChild(link)
                            }}
                            className="mt-2 p-2 rounded bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                            title="Download missile image"
                            aria-label="Download missile image"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                          </button>
                        </div>
                        <h4 className="text-xl font-semibold text-cyan-300 truncate">{weapon.name}</h4>
                      </div>
                      <div className="flex flex-col gap-1 flex-shrink-0">
                        {missileHasTags(weapon.name).map((tag, tagIndex) => (
                          <div key={tagIndex} className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded text-xs">
                            {tag === 'anti-flare' && (
                              <>
                                <div className="w-3 h-3 text-orange-400">
                                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                  </svg>
                                </div>
                                <span className="text-orange-400 font-medium">Anti-Flare</span>
                              </>
                            )}
                            {tag === 'anti-warning' && (
                              <>
                                <div className="w-3 h-3 text-red-400">
                                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                  </svg>
                                </div>
                                <span className="text-red-400 font-medium">Anti-Warning</span>
                              </>
                            )}
                            {tag === 'long-range' && (
                              <>
                                <div className="w-3 h-3 text-blue-400">
                                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                                  </svg>
                                </div>
                                <span className="text-blue-400 font-medium">Long-Range</span>
                              </>
                            )}
                            {tag === 'rocket-pod' && (
                              <>
                                <div className="w-3 h-3 text-purple-400">
                                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                    <path d="M12 2C11.45 2 11 2.45 11 3v9H5l7 7 7-7h-6V3c0-.55-.45-1-1-1z"/>
                                  </svg>
                                </div>
                                <span className="text-purple-400 font-medium">Rocket-Pod</span>
                              </>
                            )}
                            {tag === 'laser-guided' && (
                              <>
                                <div className="w-3 h-3 text-green-400">
                                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                    <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                                  </svg>
                                </div>
                                <span className="text-green-400 font-medium">Laser-Guided</span>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-3">
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
                    <div className="flex justify-end mt-2">
                      <button
                        onClick={() => {
                          setOriginalVehicleName(searchQuery);
                          // Save the currently selected vehicle before opening the modal
                          const currentVehicle = VEHICLES.find(v => v.name === searchQuery);
                          if (currentVehicle) {
                            setSelectedVehicle(currentVehicle);
                          }
                          setSelectedWeaponForModal(weapon);
                          findVehiclesWithWeapon(weapon.name);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded transition-colors duration-200 flex items-center gap-1"
                        title="Show vehicles with this weapon"
                      >
                        <Search className="w-3 h-3" />
                        <span>Vehicles</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedWeaponForModal && (
          <div className="fixed inset-0 bg-slate-950/95 z-50 flex flex-col">
            <div className="flex-1 w-full h-full flex flex-col">
              {/* Top bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
                <h2 className="text-xl font-semibold text-cyan-300 truncate pr-10">
                  {selectedWeaponForModal?.name || 'Missile'}
                </h2>
                <button
                  onClick={async () => {
                    if (originalVehicleName) {
                      // Find the original vehicle to restore
                      const originalVehicle = VEHICLES.find(v => v.name === originalVehicleName);
                      if (originalVehicle) {
                        setSearchQuery(originalVehicleName);
                        // Force a re-render by setting vehicle to null first
                        setSelectedVehicle(null);
                        // Then set the actual vehicle
                        setTimeout(() => {
                          setSelectedVehicle(originalVehicle);
                          setVehicleDetailsOpenId(originalVehicle.id?.toString() || null);
                        }, 0);
                      } else {
                        setSearchQuery(originalVehicleName);
                      }
                      setOriginalVehicleName(null);
                    }
                    setSelectedWeaponForModal(null);
                  }}
                  className="text-slate-400 hover:text-slate-100"
                  aria-label="Close missile details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content area */}
              <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col items-center">
                <div className="w-full md:w-full lg:w-3/4 max-w-5xl space-y-6">
                  <h3 className="text-sm font-semibold text-slate-300 tracking-wide uppercase">
                    Missile statistics
                  </h3>

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col items-start flex-shrink-0" data-missile-image-container>
                      <div className="w-36 h-36 md:w-44 md:h-44 aspect-square bg-slate-900/40 rounded overflow-hidden border-2 border-blue-700/80">
                        <img
                          ref={selectedWeaponImageRef}
                          src={getMissileImageCandidates(selectedWeaponForModal?.name)[0]}
                          alt={String(selectedWeaponForModal?.name || '')}
                          className="w-full h-full object-contain"
                          data-idx="0"
                          onError={(e) => {
                            const candidates = getMissileImageCandidates(selectedWeaponForModal?.name)
                            const img = e.currentTarget
                            const nextIdx = Number(img.dataset.idx || "0") + 1
                            if (nextIdx < candidates.length) {
                              img.dataset.idx = String(nextIdx)
                              img.src = candidates[nextIdx]
                            } else {
                              const container = img.closest('[data-missile-image-container]') as HTMLElement | null
                              if (container) {
                                container.style.display = 'none'
                              } else {
                                img.style.display = 'none'
                              }
                            }
                          }}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const img = selectedWeaponImageRef.current
                          const url = (img as any)?.currentSrc || img?.src
                          if (!url) return

                          const urlNoQuery = url.split('#')[0].split('?')[0]
                          const resolved = new URL(urlNoQuery, window.location.href)
                          const fileName = decodeURIComponent(resolved.pathname.split('/').pop() || 'missile.jpg')

                          const link = document.createElement('a')
                          link.href = url
                          link.download = fileName
                          document.body.appendChild(link)
                          link.click()
                          document.body.removeChild(link)
                        }}
                        className="mt-2 p-2 rounded bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                        title="Download missile image"
                        aria-label="Download missile image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex-1 bg-slate-900/80 border border-slate-800 rounded-lg px-4 py-4 divide-y divide-slate-800">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 pb-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Damage</span>
                          <span className="text-slate-100 font-semibold">
                            {selectedWeaponForModal?.damage ?? 'N/A'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Reload time</span>
                          <span className="text-slate-100 font-semibold">
                            {selectedWeaponForModal?.reload != null
                              ? `${selectedWeaponForModal.reload}s`
                              : 'N/A'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {vehiclesWithWeapon.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold text-slate-300 tracking-wide uppercase">
                        Vehicles with this weapon
                      </h3>

                      <div className="relative flex items-center">
                        <button
                          type="button"
                          aria-label="Scroll left"
                          className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-slate-900/90 text-slate-200 shadow-lg hover:bg-blue-700/90 absolute -left-3 z-10"
                          onClick={() => {
                            if (vehiclesWithWeaponRef.current) {
                              vehiclesWithWeaponRef.current.scrollBy({ left: -320, behavior: 'smooth' })
                            }
                          }}
                        >
                          
                        </button>

                        <div
                          ref={vehiclesWithWeaponRef}
                          className="flex gap-4 overflow-x-auto py-2 px-1"
                        >
                          {vehiclesWithWeapon.map((veh: any) => (
                            <div
                              key={veh.id}
                              className="min-w-[260px] max-w-[320px] bg-slate-950 rounded-xl border border-slate-700 overflow-hidden cursor-pointer flex flex-col shadow-2xl hover:-translate-y-0.5 hover:border-emerald-500 transition"
                              onClick={() => {
                                setSearchQuery(veh.name);
                                setOriginalVehicleName(null);
                                setSelectedWeaponForModal(null);
                              }}
                            >
                              <div className="relative w-full pb-[56.25%] bg-slate-900">
                                {veh.image && (
                                  <img
                                    src={veh.image}
                                    alt={veh.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                  />
                                )}
                              </div>
                              <div className="p-3 flex flex-col gap-1">
                                <div className="text-sm font-semibold text-slate-100 truncate">
                                  {veh.name}
                                </div>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-slate-500 text-slate-200 uppercase tracking-wide">
                                    {veh.rarity || 'Standard'}
                                  </span>
                                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-slate-700 text-slate-300">
                                    {veh.type}
                                  </span>
                                </div>
                                <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                                  <span>{veh.type}</span>
                                  <span>{veh.tier ? `Tier ${veh.tier}` : ''}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <button
                          type="button"
                          aria-label="Scroll right"
                          className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-slate-900/90 text-slate-200 shadow-lg hover:bg-blue-700/90 absolute -right-3 z-10"
                          onClick={() => {
                            if (vehiclesWithWeaponRef.current) {
                              vehiclesWithWeaponRef.current.scrollBy({ left: 320, behavior: 'smooth' })
                            }
                          }}
                        >
                          
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      {/* Social Media Contact Section */}
      <div className="mt-8 py-4 border-t border-slate-700">
        <div className="flex flex-col items-center space-y-3">
          <h3 className="text-sm font-medium text-slate-400 mb-2">Contact/Support:</h3>
          <div className="flex items-center justify-center space-x-6">
            {/* Patreon */}
            <a 
              href="https://www.patreon.com/c/mwtassistant" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#FF424D] hover:opacity-80 transition-opacity"
              style={{ minWidth: '24px' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 .5h4.5v23H0z" />
                <path d="M15.1.5c-4.1 0-7.5 3.4-7.5 7.5 0 4.1 3.4 7.5 7.5 7.5 4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5z" />
              </svg>
            </a>
            
            {/* Instagram */}
            <a href="https://www.instagram.com/mwt_assistant" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12.001 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/profile.php?id=61581718139293" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
              </svg>
            </a>
            
            {/* Discord */}
            <a href="https://discord.gg/zj6f4w3JED" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.105 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.078-.01c3.928 1.8 8.18 1.8 12.062 0a.074.074 0 01.079.01c.12.098.246.198.373.292a.077.077 0 01-.006.128 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.105c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.086-2.157-2.419 0-1.332.956-2.419 2.158-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.332-.956 2.418-2.158 2.418zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.332.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.332-.956 2.418-2.157 2.418z"/>
              </svg>
            </a>

            {/* Email */}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mwtassistantteam@gmail.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


function CookieConsentBanner() {
  const [showBanner, setShowBanner] = React.useState(false);
  const [showPreferences, setShowPreferences] = React.useState(false);
  const [cookies, setCookies] = React.useState({
    essential: true,
    analytics: false,
    preferences: false,
    marketing: false
  });

  useEffect(() => {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('cookiePreferences='))
      ?.split('=')[1];

    if (cookieValue) {
      try {
        const savedPreferences = JSON.parse(decodeURIComponent(cookieValue));
        setCookies(savedPreferences);
        setShowBanner(false);
      } catch (e) {
        // If cookie exists but is malformed, show banner
        setShowBanner(!document.cookie.includes('cookiesAccepted='));
      }
    } else {
      setShowBanner(!document.cookie.includes('cookiesAccepted='));
    }
  }, []);

  const saveCookiePreferences = (prefs: typeof cookies) => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    const cookieValue = encodeURIComponent(JSON.stringify(prefs));
    document.cookie = `cookiePreferences=${cookieValue};expires=${date.toUTCString()};path=/;SameSite=Lax`;
    
    // Set the main acceptance cookie
    document.cookie = "cookiesAccepted=true; max-age=" + 60 * 60 * 24 * 365 + "; path=/";
    
    // Initialize features based on preferences
    if (prefs.analytics) {
      // Initialize analytics here
      console.log('Analytics enabled');
    }
    
    setShowBanner(false);
    setShowPreferences(false);
  };

  const acceptAllCookies = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      preferences: true,
      marketing: true
    };
    setCookies(allAccepted);
    saveCookiePreferences(allAccepted);
  };

  const rejectAllCookies = () => {
    const onlyEssential = {
      essential: true, // Essential cookies cannot be disabled
      analytics: false,
      preferences: false,
      marketing: false
    };
    setCookies(onlyEssential);
    saveCookiePreferences(onlyEssential);
  };

  const handleToggle = (cookieType: keyof typeof cookies) => {
    // Essential cookies cannot be disabled
    if (cookieType === 'essential') return;
    
    setCookies(prev => ({
      ...prev,
      [cookieType]: !prev[cookieType]
    }));
  };

  const savePreferences = () => {
    saveCookiePreferences(cookies);
  };

  if (!showBanner && !showPreferences) return null;

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-800 shadow-lg border-t border-gray-200 dark:border-slate-700 rounded-t-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-blue-900 dark:text-blue-100 mb-1">
                  Our website uses cookies
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  We use cookies to enhance your experience in MWT Assistant.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={rejectAllCookies}
                  className="px-4 py-2 border border-blue-400 text-blue-600 hover:bg-blue-50 dark:text-blue-300 dark:border-blue-500 dark:hover:bg-blue-900/30 font-medium rounded-md transition-colors duration-200"
                >
                  Reject All
                </button>
                <button
                  onClick={acceptAllCookies}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setShowPreferences(false)}></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white dark:bg-slate-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white" id="modal-title">
                      Cookie Preferences
                    </h3>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                        We use cookies to enhance your experience in MWT Assistant.
                      </p>
                      
                      <div className="space-y-4">
                        {/* Essential Cookies */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">Essential Cookies</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-300">Necessary for the website to function</p>
                          </div>
                          <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input 
                              type="checkbox" 
                              name="essential" 
                              id="essential" 
                              checked={cookies.essential}
                              disabled
                              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                            />
                            <label 
                              htmlFor="essential" 
                              className={`toggle-label block overflow-hidden h-6 rounded-full ${cookies.essential ? 'bg-blue-600' : 'bg-gray-300'} cursor-pointer`}
                            ></label>
                          </div>
                        </div>

                        {/* Analytics Cookies */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">Analytics</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-300">Help us understand how visitors interact</p>
                          </div>
                          <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input 
                              type="checkbox" 
                              name="analytics" 
                              id="analytics" 
                              checked={cookies.analytics}
                              onChange={() => handleToggle('analytics')}
                              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                            />
                            <label 
                              htmlFor="analytics" 
                              className={`toggle-label block overflow-hidden h-6 rounded-full ${cookies.analytics ? 'bg-blue-600' : 'bg-gray-300'} cursor-pointer`}
                            ></label>
                          </div>
                        </div>

                        {/* Preferences Cookies */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">Preferences</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-300">Remember your settings and preferences</p>
                          </div>
                          <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input 
                              type="checkbox" 
                              name="preferences" 
                              id="preferences" 
                              checked={cookies.preferences}
                              onChange={() => handleToggle('preferences')}
                              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                            />
                            <label 
                              htmlFor="preferences" 
                              className={`toggle-label block overflow-hidden h-6 rounded-full ${cookies.preferences ? 'bg-blue-600' : 'bg-gray-300'} cursor-pointer`}
                            ></label>
                          </div>
                        </div>

                        {/* Marketing Cookies */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">Marketing</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-300">Used to personalize ads</p>
                          </div>
                          <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input 
                              type="checkbox" 
                              name="marketing" 
                              id="marketing" 
                              checked={cookies.marketing}
                              onChange={() => handleToggle('marketing')}
                              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                            />
                            <label 
                              htmlFor="marketing" 
                              className={`toggle-label block overflow-hidden h-6 rounded-full ${cookies.marketing ? 'bg-blue-600' : 'bg-gray-300'} cursor-pointer`}
                            ></label>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 text-xs text-gray-500 dark:text-gray-400">
                        <p>By clicking "Save Preferences", you agree to our use of cookies as described in our <a href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-slate-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={savePreferences}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Save Preferences
                </button>
                <button
                  type="button"
                  onClick={() => setShowPreferences(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-slate-600 shadow-sm px-4 py-2 bg-white dark:bg-slate-600 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const MainPage = () => {
  const [activePage, setActivePage] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const update = () => setIsMobile(window.innerWidth < 640);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4 sm:pt-4">
        <div className="sm:pt-0">
          <Pages activePage={activePage} onPageChange={setActivePage} />
        </div>

        {isMobile && (
          <div className="mt-4 flex justify-center">
            
          </div>
        )}
        
        <div className="mt-4">
          {activePage === 'home' && <MwtVehicleStats vehicles={VEHICLES_DATA} />}
          {activePage === 'about' && <AboutPage />}
          {activePage === 'contact' && <ContactPage />}
          {activePage === 'privacy' && <PrivacyPolicyPage />}
        </div>
      </div>

      {!isMobile && (
        <div className="max-w-7xl xl:max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 py-2">
          <div key="banner-ad" className="w-full" style={{ width: '780px', margin: '0 auto' }}>
            <div style={{ width: '728px', height: '90px', margin: '0 auto' }}>
              <AdMobBanner />
            </div>
          </div>
        </div>
      )}
      <CookieConsentBanner />
    </div>
  );
};

// This is the default export that Next.js will use
export default function Page() {
  return <MainPage />;
}
