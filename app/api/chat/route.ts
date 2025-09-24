import { NextResponse } from 'next/server'

// Server-side vehicle currency data - moved from client-side for security
const vehicleCurrencyData = [
  { name: "PLZ-05", currency: "Dollar", amount: 16000000 },
  { name: "M1128 Stryker", currency: "Dollar", amount: 13400000 },
  { name: "Pantsir S-1", currency: "Dollar", amount: null },
  { name: "ZTZ99A", currency: "Dollar", amount: 15000000 },
  { name: "T-90A", currency: "Dollar", amount: null },
  { name: "ADATS", currency: "Gold", amount: 12600 },
  { name: "BMPT Terminator 2", currency: "Gold", amount: 15400 },
  { name: "2S19 Msta-S", currency: "Dollar", amount: 14600000 },
  { name: "T-14 Armata", currency: "Dollar", amount: null },
  { name: "Ka-52 Alligator*", currency: "Dollar", amount: null },
  { name: "AH-84", currency: "Dollar", amount: 22000000 },
  { name: "Mi-28NM", currency: "Gold", amount: 18000 },
  { name: "WZ-10", currency: "Gold", amount: 18000 },
  { name: "Z-19E", currency: "Dollar", amount: 16000000 },
  { name: "F-22 Raptor", currency: "Gold", amount: 22000 },
  { name: "J-20 Mighty Dragon", currency: "Dollar", amount: null },
  { name: "J-35", currency: "Gold", amount: 21800 },
  { name: "Su-75 Checkmate", currency: "Gold", amount: 20000 },
  { name: "F-35B Lightning II", currency: "Dollar", amount: 28350000 }
]

export async function GET() {
  try {
    // Add rate limiting headers
    const headers = {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800',
      'Access-Control-Allow-Origin': '*', // In production, specify your domain
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    return NextResponse.json(vehicleCurrencyData, { headers })
  } catch (error) {
    console.error('Error fetching vehicle prices:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
