interface Vehicle {
  id: string | number;
  name: string;
  type: string;
  faction: string;
  tier: string;
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
  description?: string;
}

// Set revalidation time (in seconds)
export const revalidate = 86400; // Revalidate once per day

// Generate static paths for better SEO
export async function generateStaticParams() {
  try {
    const response = await fetch('https://www.mwtassistant.com/vehicles.json');
    const vehicles = await response.json();
    
    return vehicles.map((vehicle: Vehicle) => ({
      vehicleName: vehicle.name.toLowerCase().replace(/\s+/g, '-')
    }));
  } catch (error) {
    console.error('Error generating static paths:', error);
    return [];
  }
}
