import { NextResponse } from 'next/server'
export const runtime = 'edge'

export async function POST(req: Request) {
  const tsBase = process.env.NEXT_PUBLIC_TS_BACKEND_URL
  if (!tsBase) return NextResponse.json({ error: 'TS backend not configured' }, { status: 500 })
  const formData = await req.formData()
  const file = formData.get('file') as File | null
  if (!file) return NextResponse.json({ error: 'file missing' }, { status: 400 })
  const forward = new FormData()
  forward.append('file', file)
  const res = await fetch(`${tsBase}/api/uploads`, { method: 'POST', body: forward })
  const data = await res.json().catch(()=>({}))
  return NextResponse.json(data, { status: res.status })
}
