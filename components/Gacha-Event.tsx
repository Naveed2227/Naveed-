"use client"
import { useState } from "react"
import { X, Gift, ArrowLeft, Search, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"

export interface GachaVehicle {
  id: number
  name: string
  type: "free" | "gacha" | "lucky_box" | "crate"
}

export interface GachaEvent {
  id: number
  name: string
  type: "Gold" | "Key" | "Black"
  startDate: string
  endDate: string
  bannerImage?: string
  featuredVehicles: GachaVehicle[]
}

export const gachaEvents: GachaEvent[] = [
  {
    id: 3,
    name: "Winter Warriors",
    type: "Gold",
    startDate: "2025-12-15",
    endDate: "2025-12-31",
    featuredVehicles: [
      { id: 1, name: "Leclerc S2 AZUR", type: "free" },
      { id: 2, name: "BM-57-2 Kochevnik", type: "gacha" },
      { id: 3, name: "T-14 Armata (Winter)", type: "gacha" },
      { id: 4, name: "Leopard 2A7+ (Arctic)", type: "gacha" },
      { id: 5, name: "M1A2 SEPv3 (Frost)", type: "gacha" },
      { id: 6, name: "T-90MS (Winter)", type: "gacha" },
      { id: 7, name: "Challenger 2 (Snow)", type: "gacha" },
      { id: 8, name: "Type 10 (Winter)", type: "gacha" },
      { id: 9, name: "Merkava Mk.4 (Winter)", type: "gacha" },
      { id: 10, name: "Leclerc XLR (Snow)", type: "gacha" },
      { id: 11, name: "K2 Black Panther (Frost)", type: "gacha" },
      { id: 12, name: "ZTZ-99A (Winter)", type: "gacha" },
      { id: 13, name: "Ariete C1 (Snow)", type: "gacha" },
      { id: 14, name: "Leopard 2A6 (Winter)", type: "gacha" },
      { id: 15, name: "T-80BVM (Frost)", type: "gacha" },
    ],
  },
  {
    id: 2,
    name: "New Year's Special",
    type: "Key",
    startDate: "2026-01-01",
    endDate: "2026-01-07",
    featuredVehicles: [
      { id: 16, name: "F-22 Raptor (NYE)", type: "gacha" },
      { id: 17, name: "Su-57 (Fireworks)", type: "gacha" },
      { id: 18, name: "J-20 (Celebration)", type: "gacha" },
      { id: 19, name: "Eurofighter Typhoon (2026)", type: "gacha" },
      { id: 20, name: "F-35A (Midnight)", type: "gacha" },
      { id: 21, name: "Su-35 (Festive)", type: "gacha" },
      { id: 22, name: "F-15EX (Countdown)", type: "gacha" },
      { id: 23, name: "MiG-35 (Party)", type: "gacha" },
      { id: 24, name: "Rafale (Celebration)", type: "gacha" },
      { id: 25, name: "F-16V (NYE)", type: "gacha" },
      { id: 26, name: "J-10C (Fireworks)", type: "gacha" },
      { id: 27, name: "Gripen E (2026)", type: "gacha" },
    ],
  },
  {
    id: 1,
    name: "Anniversary Celebration",
    type: "Black",
    startDate: "2026-01-15",
    endDate: "2026-01-31",
    featuredVehicles: [
      { id: 28, name: "Abrams X (Anniversary)", type: "gacha" },
      { id: 29, name: "T-14 Armata (Anniversary)", type: "gacha" },
      { id: 30, name: "Leopard 2A7+ (Anniversary)", type: "gacha" },
      { id: 31, name: "Challenger 3 (Anniversary)", type: "gacha" },
      { id: 32, name: "Type 10 (Anniversary)", type: "gacha" },
      { id: 33, name: "Leclerc XLR (Anniversary)", type: "gacha" },
      { id: 34, name: "K2 Black Panther (Anniversary)", type: "gacha" },
      { id: 35, name: "ZTZ-99A (Anniversary)", type: "gacha" },
      { id: 36, name: "Ariete AMV (Anniversary)", type: "gacha" },
      { id: 37, name: "T-90M (Anniversary)", type: "gacha" },
      { id: 38, name: "M1A2C (Anniversary)", type: "gacha" },
      { id: 39, name: "Leopard 2A6 (Anniversary)", type: "gacha" },
      { id: 40, name: "T-80BVM (Anniversary)", type: "gacha" },
      { id: 41, name: "Merkava Mk.4 (Anniversary)", type: "gacha" },
      { id: 42, name: "Type 90 (Anniversary)", type: "gacha" },
      { id: 43, name: "Leopard 2PL (Anniversary)", type: "gacha" },
      { id: 44, name: "T-72B3 (Anniversary)", type: "gacha" },
      { id: 45, name: "Challenger 2 (Anniversary)", type: "gacha" },
      { id: 46, name: "Type 99A (Anniversary)", type: "gacha" },
      { id: 47, name: "Leclerc S2 (Anniversary)", type: "gacha" },
    ],
  },
]

export const getGachaEventById = (id: number): GachaEvent | undefined => {
  const event = gachaEvents.find((event) => event.id === id)
  if (event && !event.bannerImage) {
    event.bannerImage = `/Gacha-${event.type}.png`
  }
  return event
}

gachaEvents.forEach((event) => {
  if (!event.bannerImage) {
    event.bannerImage = `/Gacha-${event.type}.png`
  }
})

export const getVehicleById = (eventId: number, vehicleId: number): GachaVehicle | undefined => {
  const event = gachaEvents.find((e) => e.id === eventId)
  if (!event) return undefined
  return event.featuredVehicles.find((v) => v.id === vehicleId)
}

export const findVehicleByName = (name: string): GachaVehicle | undefined => {
  for (const event of gachaEvents) {
    const vehicle = event.featuredVehicles.find((v) => v.name.toLowerCase().includes(name.toLowerCase()))
    if (vehicle) return vehicle
  }
  return undefined
}

// Consolidated Gacha Event List component
const GachaEventList = ({ onSelectEvent }: { onSelectEvent: (eventId: number) => void }) => {
  const getBannerImage = (type: string) => {
    switch (type) {
      case "Gold":
        return "/Gacha-Gold.png"
      case "Key":
        return "/Gacha-Keys.png"
      case "Black":
        return "/Gacha-Black.png"
      default:
        return "/Gacha-Gold.png"
    }
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Current Gacha Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gachaEvents.map((event) => (
          <div
            key={event.id}
            onClick={() => onSelectEvent(event.id)}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
          >
            <div className="relative h-40 bg-gray-200 dark:bg-gray-700">
              <Image
                src={getBannerImage(event.type) || "/placeholder.svg"}
                alt={`${event.name} banner`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{event.name}</h3>
                  <div className="flex items-center mt-2 space-x-2">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        event.type === "Gold"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : event.type === "Key"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-gray-700/80 text-white"
                      }`}
                    >
                      {event.type}
                    </span>
                    <span className="text-xs text-gray-300">
                      {formatDate(event.startDate)} - {formatDate(event.endDate)}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-300">
                      <Gift className="w-3.5 h-3.5 mr-1" />
                      {event.featuredVehicles.length} vehicles
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium inline-flex items-center transition-transform">
                      View Details <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const GachaEventListTab = ({
  onClose,
  onVehicleSelect,
}: { onClose: () => void; onVehicleSelect: (vehicleName: string) => void }) => {
  const [selectedEvent, setSelectedEvent] = useState<GachaEvent | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  const getVehicleTypeBadge = (type: string) => {
    const typeStyles = {
      free: "bg-green-500/20 text-green-400",
      gacha: "bg-blue-500/20 text-blue-400",
      lucky_box: "bg-purple-500/20 text-purple-400",
      crate: "bg-yellow-500/20 text-yellow-400",
    }

    return (
      <span
        className={`text-xs px-2 py-0.5 rounded-full ${typeStyles[type as keyof typeof typeStyles] || "bg-gray-700/80"}`}
      >
        {type.replace("_", " ")}
      </span>
    )
  }

  if (selectedEvent) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setSelectedEvent(null)}
            className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back
          </button>
          <h2 className="text-2xl font-bold text-white">{selectedEvent.name}</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
            <X className="w-5 h-5 text-slate-300" />
          </button>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search vehicles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-800/80 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-white placeholder-gray-400 text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="space-y-4">
          {selectedEvent.featuredVehicles
            .filter((vehicle) => vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((vehicle) => (
              <div
                key={vehicle.id}
                onClick={() => onVehicleSelect(vehicle.name)}
                className="bg-slate-900/70 rounded-lg p-3 border border-slate-800 hover:border-purple-600/60 transition-all duration-300 shadow-lg relative cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-slate-800/80 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={`/vehicles/${vehicle.name.replace(/\s+/g, "-").toLowerCase()}.png`}
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/vehicles/placeholder.png"
                      }}
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium text-white">{vehicle.name}</h3>
                    <div className="mt-1">{getVehicleTypeBadge(vehicle.type)}</div>
                  </div>
                  <div className="text-xs text-gray-400">{selectedEvent.name}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Gacha Events</h2>
        <button onClick={onClose} className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
          <X className="w-5 h-5 text-slate-300" />
        </button>
      </div>

      <div className="space-y-4">
        {gachaEvents.map((event) => (
          <div
            key={event.id}
            onClick={() => setSelectedEvent(event)}
            className="bg-slate-900/70 rounded-lg p-4 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center">
              <div className="w-16 h-16 bg-slate-800/80 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={event.bannerImage || `/Gacha-${event.type}.png`}
                  alt={event.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = `/Gacha-${event.type}.png`
                  }}
                />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-medium text-white">{event.name}</h3>
                <div className="flex items-center mt-1 space-x-2">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      event.type === "Gold"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : event.type === "Key"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-purple-500/20 text-purple-400"
                    }`}
                  >
                    {event.type} Gacha
                  </span>
                  <span className="text-xs text-gray-400">{event.featuredVehicles.length} vehicles</span>
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  {formatDate(event.startDate)} - {formatDate(event.endDate)}
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const GachaEventDetails = ({ event, onBack }: { event: GachaEvent; onBack: () => void }) => {
  const [selectedVehicle, setSelectedVehicle] = useState<GachaVehicle | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredVehicles = event.featuredVehicles.filter((vehicle) =>
    vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getVehicleTypeBadge = (type: string) => {
    const typeStyles = {
      free: "bg-green-500/20 text-green-400",
      gacha: "bg-blue-500/20 text-blue-400",
      lucky_box: "bg-purple-500/20 text-purple-400",
      crate: "bg-yellow-500/20 text-yellow-400",
    }

    return (
      <span
        className={`text-xs px-2 py-1 rounded-full ${typeStyles[type as keyof typeof typeStyles] || "bg-gray-700/80"}`}
      >
        {type.replace("_", " ")}
      </span>
    )
  }

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Events
      </button>

      <div className="bg-gray-800/80 rounded-xl overflow-hidden shadow-lg mb-8 border border-gray-700/50">
        <div className="relative h-48 md:h-64 w-full">
          <Image src={event.bannerImage || `/Gacha-${event.type}.png`} alt={event.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent">
            <div className="absolute bottom-0 left-0 p-6">
              <h1 className="text-3xl font-bold text-white">{event.name}</h1>
              <div className="flex items-center mt-2">
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-full ${
                    event.type === "Gold"
                      ? "bg-yellow-500/30 text-yellow-400"
                      : event.type === "Key"
                        ? "bg-blue-500/30 text-blue-400"
                        : "bg-gray-700/80 text-white"
                  }`}
                >
                  {event.type} Event
                </span>
                <span className="ml-3 text-sm text-gray-300">
                  {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Featured Vehicles</h2>
        <div className="text-sm text-gray-400">
          {filteredVehicles.length} of {event.featuredVehicles.length} vehicles
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filteredVehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            onClick={() => setSelectedVehicle(vehicle)}
            className="group bg-gray-800/50 hover:bg-gray-700/80 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-square bg-gray-900/50">
              <div className="w-full h-full flex items-center justify-center bg-gray-900/50">
                <img
                  src={`/vehicles/${vehicle.name.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}.png`}
                  alt={vehicle.name}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/vehicles/placeholder.png"
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-2 bg-gray-900/80">
              <p className="text-xs font-medium text-white truncate">{vehicle.name}</p>
              <div className="mt-1">{getVehicleTypeBadge(vehicle.type)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GachaEventList
