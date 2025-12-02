import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const tsBase = process.env.NEXT_PUBLIC_TS_BACKEND_URL
  if (!tsBase) return NextResponse.json({ error: 'TS backend not configured' }, { status: 500 })
  const body = await req.json()
  const res = await fetch(`${tsBase}/api/chat/send`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  const data = await res.json().catch(()=>({}))
  return NextResponse.json(data, { status: res.status })
}
