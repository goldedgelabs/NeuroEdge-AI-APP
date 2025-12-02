import { NextResponse } from 'next/server'
export const runtime = 'edge'
export async function POST(req: Request) {
  const pyBase = process.env.NEXT_PUBLIC_PY_BACKEND_URL
  if (!pyBase) return NextResponse.json({ error: 'PY backend not configured' }, { status: 500 })
  const formData = await req.formData()
  const file = formData.get('file') as File | null
  if (!file) return NextResponse.json({ error: 'file missing' }, { status: 400 })
  const forward = new FormData()
  forward.append('file', file)
  const res = await fetch(`${pyBase}/api/audio/transcribe`, { method: 'POST', body: forward })
  const data = await res.json().catch(()=>({}))
  return NextResponse.json(data, { status: res.status })
}
