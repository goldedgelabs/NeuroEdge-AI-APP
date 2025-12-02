import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const tsBase = process.env.NEXT_PUBLIC_TS_BACKEND_URL;
  if (!tsBase) return new Response('TS backend not configured', { status: 500 });
  const form = await req.formData();
  const file = form.get('file');
  if (!file) return new Response('No file', { status: 400 });
  const forward = await fetch(`${tsBase}/api/uploads`, {
    method: 'POST',
    headers: {},
    body: form,
  });
  const text = await forward.text();
  return new Response(text, { status: forward.status });
}
