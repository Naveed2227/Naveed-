// English translations for the MWT Vehicle Stats app
export const englishTranslations = {
  // Menu items
  menu: {
    language: "Language",
    battlePass: "Battlepass",
    about: "About",
    credits: "Credits"
  },
  
  // Vehicle stats and information
  vehicle: {
    basicInfo: "Basic Information",
    type: "Type",
    country: "Country",
    tier: "Tier",
    rarity: "Rarity",
    howToObtain: "How to Obtain",
    stats: "Stats",
    comparison: "Comparison",
    unavailable: "Unavailable",
    eventReward: "Event Reward or Gatcha"
  },
  
  // Vehicle types
  vehicleTypes: {
    tank: "Tank",
    aircraft: "Aircraft",
    helicopter: "Helicopter",
    unknown: "Unknown"
  },
  
  // Rarity levels
  rarity: {
    standard: "Standard",
    rare: "Rare",
    epic: "Epic",
    legendary: "Legendary",
    mythic: "Mythic"
  },
  
  // Stats
  stats: {
    firepower: "Firepower",
    durability: "Durability",
    mobility: "Mobility",
    stealth: "Stealth",
    agility: "Agility",
    range: "Range",
    accuracy: "Accuracy",
    reloadSpeed: "Reload Speed"
  },
  
  // Common UI elements
  ui: {
    search: "Search",
    filter: "Filter",
    sort: "Sort",
    compare: "Compare",
    upgrade: "Upgrade",
    reset: "Reset",
    close: "Close",
    save: "Save",
    cancel: "Cancel",
    loading: "Loading",
    error: "Error",
    success: "Success"
  },
  
  // Battle Pass
  battlePass: {
    title: "Battle Pass",
    description: "Earn special rewards and benefits in the Battle Pass",
    rewards: "Rewards",
    progress: "Progress",
    level: "Level",
    xp: "Experience Points"
  },
  
  // About section
  about: {
    title: "About",
    description: "MWT Vehicle Stats provides complete information about vehicles in your favorite game.",
    features: "Features",
    version: "Version"
  },
  
  // Credits section
  credits: {
    title: "Credits",
    developers: "Developers",
    designers: "Designers",
    contributors: "Contributors",
    specialThanks: "Special Thanks"
  },
  
  // Countries/Factions
  countries: {
    usa: "USA",
    russia: "Russia",
    china: "China",
    germany: "Germany",
    uk: "UK",
    france: "France",
    japan: "Japan",
    israel: "Israel",
    unknown: "Unknown"
  },
  
  // Messages and notifications
  messages: {
    vehicleNotFound: "Vehicle not found",
    selectVehicle: "Select vehicle",
    maxComparison: "You can compare maximum two vehicles",
    loginSuccess: "Login successful",
    logoutSuccess: "Logout successful",
    dataSaved: "Data saved successfully",
    dataLoaded: "Data loaded successfully"
  }
};

// Helper function to get translation
export const getEnglishTranslation = (key) => {
  const keys = key.split('.');
  let value = englishTranslations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key;
};
