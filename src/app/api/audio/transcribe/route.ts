import { NextRequest } from 'next/server'; export async function POST(req: NextRequest){ return new Response(JSON.stringify({ text:'transcribed audio (demo)' }), { status:200 }); }
