# NeuroEdge Frontend — v16.5 Final

This repository contains the NeuroEdge frontend rebuilt for **Next.js 14 (App Router)** with full UI, shadcn integration, NextAuth, Progressive Chat Kernel, Wallet/Points, Groups, floating assistant, PWA support, and full documentation.

---

## Quick start (development)

1. Copy `.env.example` to `.env` and fill values.
2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
3. Run development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

---

## New Features (v16.5)

- Global floating NeuroEdge assistant (Ctrl/Cmd+K)
- Progressive Chat Kernel routing across TypeScript/Python/Go backends
- WhatsApp-like Groups UI with invite links and settings
- Wallet & Points system with demo persistence
- Full shadcn/ui component set (re-exports and wrappers)
- NextAuth integration (GitHub, Google, Email, Credentials)
- PWA support (manifest + service worker)
- TailwindCSS + framer-motion animations + accessibility considerations
- Global keyboard shortcuts & help overlay
- Complete documentation inside `/docs`

---

## Environment variables

See `.env.example` for all required env vars. Key ones include:

- `NEXT_PUBLIC_TS_BACKEND_URL` - TypeScript backend base URL
- `NEXT_PUBLIC_PY_BACKEND_URL` - Python backend base URL
- `NEXT_PUBLIC_GO_BACKEND_URL` - Go backend base URL
- `NEXTAUTH_URL` - NextAuth URL
- `NEXTAUTH_SECRET` - NextAuth secret
- OAuth client ids/secrets (GITHUB_ID, GOOGLE_CLIENT_ID, etc.)

---

## Project structure (high level)

```
src/
  app/
    layout.tsx
    page.tsx
    chat/
    floatingChat/
    groups/
    api/
      auth/
      kernel/
      wallet/
  components/
    ui/        # shadcn re-exports & wrappers
    chat/
    floatingChat/
    groups/
    wallet/
    Shortcuts/
  store/
  lib/
  utils/
public/
docs/
README.md
Dockerfile
package.json
```

---

## API & WebSocket Summary

- REST endpoints are under `src/app/api/*`
- WebSocket endpoint used by client: `${NEXT_PUBLIC_TS_BACKEND_URL.replace(/^http/, 'ws')}/ws/chat/:conversationId`
- Kernel endpoint: `POST /api/kernel/send` (decides backend automatically)

---

## Documentation

Full docs are included in `/docs` (API, components, architecture, deployment, testing, integrity). See `docs/INDEX.md` for table of contents.

---

## Notes

- This repo is **frontend-only**; three backends must be configured and reachable via environment variables.
- The wallet persistence uses a simple JSON file for demo purposes. Replace with real DB in production.
- For rebuilding shadcn exact visuals, run `npm install` then import the official shadcn packages and update the bridge exports in `src/components/ui`.

---

## Support

If you run into build issues, paste the full `npm run build` log here and I will fix any errors and produce an updated release (v16.6, etc.).

