## Deploying to Vercel
1. Push repository to GitHub
2. Create Vercel project, select repository
3. Set environment variables in Vercel project:
   - NEXT_PUBLIC_TS_BACKEND_URL
   - NEXT_PUBLIC_PY_BACKEND_URL
   - NEXT_PUBLIC_GO_BACKEND_URL
4. Build command: `pnpm build`
5. Output directory: (leave blank)

PWA will be enabled in production by next-pwa config.
