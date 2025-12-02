import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const pyBase = process.env.NEXT_PUBLIC_PY_BACKEND_URL;
  if (!pyBase) return new Response('PY backend not configured', { status: 500 });
  const form = await req.formData();
  const forward = await fetch(`${pyBase}/api/audio/transcribe`, { method: 'POST', body: form });
  const json = await forward.json();
  return new Response(JSON.stringify(json), { status: forward.status });
}
