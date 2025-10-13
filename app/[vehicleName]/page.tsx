'use client';

import { notFound } from "next/navigation";
import Link from "next/link";
import vehicles from "../../public/vehicles.json";

export async function generateStaticParams() {
  return vehicles.map((v) => ({
    vehicleName: v.name.replace(/\s+/g, "-"),
  }));
}

export default function VehiclePage({ params }: { params: { vehicleName: string } }) {
  const decodedName = decodeURIComponent(params.vehicleName).replace(/-/g, " ");
  const vehicle = vehicles.find(
    (v) => v.name.toLowerCase() === decodedName.toLowerCase()
  );

  if (!vehicle) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
              clipRule="evenodd" 
            />
          </svg>
          Back to Vehicles
        </Link>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <img
              src={vehicle.image || "/images/vehicle-placeholder.jpg"}
              alt={vehicle.name}
              className="w-full rounded-xl shadow-lg border border-slate-700"
            />
          </div>
          
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{vehicle.name}</h1>
            <div className="flex items-center gap-4 text-slate-300 mb-6">
              <span className="px-3 py-1 bg-slate-700 rounded-full text-sm font-medium">
                {vehicle.tier}
              </span>
              <span className="text-slate-400">{vehicle.type}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{vehicle.faction}</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {Object.entries(vehicle.stats || {}).map(([key, value]) => (
                <div key={key} className="bg-slate-800/50 p-4 rounded-lg">
                  <div className="text-slate-400 text-sm font-medium capitalize">{key}</div>
                  <div className="text-xl font-bold">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {vehicle.weapons?.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-slate-700">Weapons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vehicle.weapons.map((weapon, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">{weapon.name}</h3>
                  <div className="space-y-1 text-slate-300">
                    <div className="flex justify-between">
                      <span>Type:</span>
                      <span className="font-medium">{weapon.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Damage:</span>
                      <span className="font-medium">{weapon.damage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Penetration:</span>
                      <span className="font-medium">{weapon.penetration}</span>
                    </div>
                    {weapon.reload && (
                      <div className="flex justify-between">
                        <span>Reload:</span>
                        <span className="font-medium">{weapon.reload}s</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {vehicle.modules && Object.keys(vehicle.modules).length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-slate-700">Upgrades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(vehicle.modules).map(([category, items]) => (
                <div key={category} className="bg-slate-800/50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 capitalize">{category}</h3>
                  <ul className="space-y-3">
                    {items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <div>
                          <div className="font-medium">{item.name}</div>
                          {item.bonus && (
                            <div className="text-slate-400 text-sm">{item.bonus}</div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export const revalidate = 86400; // Revalidate once per day
