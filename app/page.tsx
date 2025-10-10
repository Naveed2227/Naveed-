import React from "react";

const vehicles = [
  { name: "T-80", type: "Tank" },
  { name: "F-35B Lightning II", type: "Aircraft" },
  { name: "HMS Vanguard", type: "Ship" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">MWT Assistant</h1>
        <p className="text-lg text-gray-600">
          Compare all vehicles in Modern War Thunder
        </p>
      </header>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Vehicles</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {vehicles.map((v) => (
            <div
              key={v.name}
              className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
            >
              <h3 className="font-bold text-xl">{v.name}</h3>
              <p className="text-gray-500">{v.type}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
