import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  // TODO: forward to TS backend
  return new Response(
    JSON.stringify({ ok: true, body }),
    { status: 200 }
  );
}
