// Client-side currency data fetching from server API
// This keeps sensitive pricing data server-side and adds a layer of security

export interface VehicleCurrencyInfo {
  name: string
  currency: string
  amount: number | null
}

// Cache for API responses to reduce server calls
let cachedData: VehicleCurrencyInfo[] | null = null
let lastFetchTime = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

/**
 * Fetch vehicle currency data from server API
 * Returns cached data if available and fresh
 */
export async function getVehicleCurrencyData(): Promise<VehicleCurrencyInfo[]> {
  const now = Date.now()
  
  // Return cached data if still fresh
  if (cachedData && (now - lastFetchTime) < CACHE_DURATION) {
    return cachedData
  }
  
  try {
    const response = await fetch('/api/vehicle-prices', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add cache-busting for fresh data
      cache: 'no-store',
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    
    // Validate data structure
    if (!Array.isArray(data)) {
      throw new Error('Invalid data format received from API')
    }
    
    // Update cache
    cachedData = data
    lastFetchTime = now
    
    return data
  } catch (error) {
    console.error('Error fetching vehicle currency data:', error)
    
    // Return cached data if available, even if stale
    if (cachedData) {
      console.warn('Using stale cached data due to API error')
      return cachedData
    }
    
    // Return empty array as fallback
    return []
  }
}

/**
 * Get currency info for a specific vehicle
 */
export async function getVehicleCurrencyInfo(vehicleName: string): Promise<VehicleCurrencyInfo | null> {
  const allData = await getVehicleCurrencyData()
  return allData.find(vehicle => vehicle.name === vehicleName) || null
}

/**
 * Legacy export for backward compatibility
 * Note: This will be empty until the API is called
 * @deprecated Use getVehicleCurrencyData() instead
 */
export let vehicleCurrencyData: VehicleCurrencyInfo[] = []

// Initialize data on module load
getVehicleCurrencyData().then(data => {
  vehicleCurrencyData = data
}).catch(error => {
  console.error('Failed to initialize vehicle currency data:', error)
})
