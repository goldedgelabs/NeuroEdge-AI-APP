# NeuroEdge Frontend (v14) - Clean Rebuild
This is a fresh Next.js 14 App Router TypeScript frontend skeleton for NeuroEdge.
It is designed to be deployed on Vercel and to work with 3 backends (TypeScript, Python, Go).

## Features
- Next.js 14 (App Router)
- TypeScript + TailwindCSS + shadcn/ui patterns
- Zustand stores, WebSocket client with reconnect/heartbeat
- File uploads, audio transcription API routes (server-forwarding)
- PWA support (manifest + sw.js)
- Floating chat + main chat + group chat
- Referral/WDC wallet placeholders + invite flow
- Agent system + metrics charts
- IDB offline queue for outgoing messages

## Env
Copy `.env.example` to `.env.local` and set:
- `NEXT_PUBLIC_TS_BACKEND_URL`
- `NEXT_PUBLIC_PY_BACKEND_URL`
- `NEXT_PUBLIC_GO_BACKEND_URL`

## Dev
```bash
pnpm install
pnpm dev
```

## Build
```bash
pnpm build
pnpm start
```

## Vercel
Deploy to Vercel; set your env vars in the project settings. PWA is enabled in production.



## Auth
A demo NextAuth credentials provider is included. Use username=`demo` password=`demo` for testing.


## Backend stub
A small TypeScript Express backend stub is included in `/backend`. Start it with:
```
cd backend
npm install
npm run dev
```
It listens on port 4000 by default.

## NextAuth
A demo NextAuth credentials provider is included under `src/pages/api/auth`. Works with demo/demo credentials.
