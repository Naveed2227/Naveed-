// Real-time sync and persistence route using Firebase Realtime Database
// - GET: Server-Sent Events (SSE) stream for all clients to receive updates instantly
// - POST: Validate editor email, update vehicles in Firebase, broadcast to SSE clients

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, off, get } from 'firebase/database';

export const dynamic = 'force-static'
export const runtime = 'nodejs'

// Initialize Firebase
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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const VEHICLES_REF = ref(database, 'vehicles');

// Keep a list of connected SSE clients
const clients = new Set<WritableStreamDefaultWriter<Uint8Array>>()
let latestVehicles: any[] | null = null
const encoder = new TextEncoder()

// Pre-approved editors (server-side authorization)
const ALLOWED_EDITORS = new Set<string>([
  'naveed.miandad.007@gmail.com',
  'qwemwt@gmail.com',
  'ooaraikuromorimine@gmail.com',
])

// Listen for changes in Firebase and broadcast to all clients
const onValueChange = onValue(VEHICLES_REF, (snapshot) => {
  const data = snapshot.val();
  if (data) {
    latestVehicles = Array.isArray(data) ? data : [];
    broadcast({ type: 'vehicles_update', vehicles: latestVehicles });
  }
});

async function broadcast(payload: any) {
  const data = `event: message\ndata: ${JSON.stringify(payload)}\n\n`
  const encoded = encoder.encode(data)
  for (const writer of clients) {
    try {
      await writer.write(encoded)
    } catch (e) {
      // If a writer fails, drop it silently
      try { await writer.close() } catch {}
      clients.delete(writer)
    }
  }
}

export async function GET(req: Request) {
  // Establish SSE connection
  const { readable, writable } = new TransformStream()
  const writer = writable.getWriter()
  clients.add(writer)

  // Initial ping to open the stream on some proxies
  await writer.write(encoder.encode(`event: ping\ndata: connected\n\n`))

  // Immediately push current vehicles if we have them in-memory
  try {
    if (latestVehicles && Array.isArray(latestVehicles)) {
      await writer.write(encoder.encode(`event: message\ndata: ${JSON.stringify({ type: 'vehicles_update', vehicles: latestVehicles })}\n\n`))
    } else {
      // Try reading from Firebase if we don't have in-memory data
      if (!latestVehicles) {
        try {
          const snapshot = await get(VEHICLES_REF);
          if (snapshot.exists()) {
            latestVehicles = snapshot.val();
            if (Array.isArray(latestVehicles)) {
              await writer.write(encoder.encode(`event: message\ndata: ${JSON.stringify({ type: 'vehicles_update', vehicles: latestVehicles })}\n\n`));
            }
          }
        } catch (error) {
          console.error('Error reading from Firebase:', error);
        }
      }
    }
  } catch {
    // ignore initial push errors
  }

  // Heartbeat to keep connection alive
  const interval = setInterval(async () => {
    try {
      await writer.write(encoder.encode(`event: ping\ndata: ${Date.now()}\n\n`))
    } catch {
      clearInterval(interval)
      try { await writer.close() } catch {}
      clients.delete(writer)
    }
  }, 25000)

  // Close handling
  const abort = () => {
    clearInterval(interval)
    try { writer.close() } catch {}
    clients.delete(writer)
  }
  // @ts-ignore - signal available in web Request
  req.signal?.addEventListener('abort', abort)

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
    },
  })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { vehicles, editorEmail } = body || {}

    if (!editorEmail || !ALLOWED_EDITORS.has(String(editorEmail))) {
      return Response.json({ error: 'Forbidden: editor not allowed' }, { status: 403 })
    }

    if (!Array.isArray(vehicles)) {
      return Response.json({ error: 'Invalid payload: vehicles must be an array' }, { status: 400 })
    }

    // Update the vehicles in Firebase
    try {
      await set(VEHICLES_REF, vehicles);
      latestVehicles = [...vehicles];
    } catch (e) {
      console.error('Error updating Firebase:', e);
      return Response.json({ error: `Failed to update vehicles in database: ${(e as Error).message}` }, { status: 500 });
    }

    // Broadcast is handled by the Firebase onValue listener

    return Response.json({ ok: true })
  } catch (error) {
    console.error('Error in POST handler:', error);
    return Response.json({ error: (error as Error).message }, { status: 500 })
  } finally {
    // Clean up the Firebase listener when the server shuts down
    process.on('SIGTERM', () => {
      off(VEHICLES_REF, 'value', onValueChange);
    });
  }
}
