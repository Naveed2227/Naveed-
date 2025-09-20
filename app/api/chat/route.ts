// Real-time sync and persistence route
// - GET: Server-Sent Events (SSE) stream for all clients to receive updates instantly
// - POST: Validate editor email, update VEHICLES_DATA in components/mwt-vehicle-stats.tsx, broadcast to SSE clients

import { promises as fs } from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

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
      // Try reading from the source file (works when file already converted to JSON by our POST)
      try {
        const filePath = path.join(process.cwd(), 'components', 'mwt-vehicle-stats.tsx')
        const fileContents = await fs.readFile(filePath, 'utf8')
        const match = fileContents.match(/const\s+VEHICLES_DATA\s*=\s*(\[[\s\S]*?\]);/m)
        if (match && match[1]) {
          try {
            const parsed = JSON.parse(match[1])
            await writer.write(encoder.encode(`event: message\ndata: ${JSON.stringify({ type: 'vehicles_update', vehicles: parsed })}\n\n`))
          } catch {
            // Not JSON (original TS object format); skip
          }
        }
      } catch {
        // ignore initial read errors
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

    // Update the VEHICLES_DATA array directly inside the main data file
    const filePath = path.join(process.cwd(), 'components', 'mwt-vehicle-stats.tsx')
    let fileContents = ''
    try {
      fileContents = await fs.readFile(filePath, 'utf8')
    } catch (e) {
      return Response.json({ error: `Failed to read data file: ${(e as Error).message}` }, { status: 500 })
    }

    const vehiclesRegex = /const\s+VEHICLES_DATA\s*=\s*\[[\s\S]*?\];/m
    if (!vehiclesRegex.test(fileContents)) {
      return Response.json({ error: 'VEHICLES_DATA array not found in source file' }, { status: 500 })
    }

    const replacement = `const VEHICLES_DATA = ${JSON.stringify(vehicles, null, 2)};`
    const updatedContents = fileContents.replace(vehiclesRegex, replacement)

    // Attempt to write changes back to disk
    try {
      await fs.writeFile(filePath, updatedContents, 'utf8')
    } catch (e) {
      // In read-only environments, we still broadcast the update so clients see it immediately
      latestVehicles = vehicles
      await broadcast({ type: 'vehicles_update', vehicles })
      return Response.json({ warning: 'File system is read-only; broadcasted update without persisting to file.' }, { status: 200 })
    }

    // Broadcast to all connected clients for real-time update
    latestVehicles = vehicles
    await broadcast({ type: 'vehicles_update', vehicles })

    return Response.json({ ok: true })
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 })
  }
}
