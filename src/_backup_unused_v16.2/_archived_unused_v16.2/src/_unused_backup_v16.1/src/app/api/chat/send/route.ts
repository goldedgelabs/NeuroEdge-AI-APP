import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const tsBase = process.env.NEXT_PUBLIC_TS_BACKEND_URL;
  if (!tsBase) return new Response('TS backend not configured', { status: 500 });
  const body = await req.json();
  const forward = await fetch(`${tsBase}/api/chat/send`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const json = await forward.json();
  return new Response(JSON.stringify(json), { status: forward.status });
}
