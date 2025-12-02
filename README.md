# NeuroEdge Frontend v16 (App Router)

This project is a fresh Next.js 14 App Router TypeScript frontend for NeuroEdge.

## Features
- App Router only (no pages/)
- TypeScript, TailwindCSS, Zustand, shadcn-style components
- WebSocket streaming, file uploads, audio transcription proxy
- NextAuth skeleton (client-side ready)
- PWA manifest + service worker
- Vercel / Docker / Cloudflare-ready

## Environment
Copy `.env.example` to `.env.local` and set:
- NEXT_PUBLIC_TS_BACKEND_URL
- NEXT_PUBLIC_PY_BACKEND_URL
- NEXT_PUBLIC_GO_BACKEND_URL
- NEXTAUTH_URL
- NEXTAUTH_SECRET
- OAuth provider creds if needed

## Run locally
1. npm install
2. npm run dev

## Build for Vercel
Vercel will run `npm install` and `npm run build`. Ensure env vars are set in the project settings.



## Floating NeuroEdge Assistant

A global floating assistant is included. It appears as a bubble in the bottom-right of every page. Users can click it to open a conversational UI and choose to allow scanning of the current page (explicit permission required).
