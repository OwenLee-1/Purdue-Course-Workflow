# Purdue Course Workflow

Web dashboard and database companion for the [BoilerClassPlan](https://github.com/OwenLee-1/Purdue-UniTime-Extension) Chrome extension — helping Purdue students save, sync, and manage their UniTime schedules.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS**
- **Supabase** (planned — auth + PostgreSQL)
- **Vercel** (hosting)

## Supabase setup (Milestone 3)

1. Create a project at [supabase.com](https://supabase.com)
2. Copy `.env.example` → `.env.local` and add your **Project URL** and **anon public key**
3. Run `supabase/schema.sql` in Supabase → SQL Editor
4. Verify: `npm run dev` then open `/api/health/supabase` (should return `{ "ok": true }`)

Add the same env vars in Vercel → Project Settings → Environment Variables.


```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## MVP Roadmap

- [x] Milestone 1 — Next.js project scaffold
- [x] Milestone 2 — Landing page (shadcn/ui)
- [ ] Milestone 3 — Supabase database
- [ ] Milestone 4 — Google authentication
- [ ] Milestone 5 — Dashboard
- [ ] Milestone 6 — Chrome extension sync
