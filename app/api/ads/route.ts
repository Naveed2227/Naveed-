import { NextResponse } from 'next/server';

// This would typically be stored in an environment variable
const ADSTERA_API_TOKEN = process.env.ADSTERA_API_TOKEN || '';

export async function GET() {
  if (!ADSTERA_API_TOKEN) {
    return NextResponse.json(
      { error: 'Adstera API token not configured' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch('https://api.adstera.com/v1/balance', {
      headers: {
        'Authorization': `Bearer ${ADSTERA_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Adstera API error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Adstera balance:', error);
    return NextResponse.json(
      { error: 'Failed to fetch balance from Adstera' },
      { status: 500 }
    );
  }
}
