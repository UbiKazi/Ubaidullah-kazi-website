# Ubaidullah Kazi — personal website

A static Next.js site: a personal portfolio built around a **Work Library** of research formats, an **AI Lab**, a career timeline, mentorship programmes and a Term of the Week glossary.

The site holds thumbnails and metadata only. Full documents stay in OneDrive and are linked from `src/config/library-links.ts`.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # content check + static export to ./out
npm run preview:build   # optional: single-file preview in ./preview-dist
```

## Deploy (Vercel)

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project**, import the repo and keep the defaults (it detects Next.js; output is static).
3. Add your domain under **Settings → Domains**.
4. Set `url` in `src/config/site.ts` to the live domain so canonical links, the sitemap and Open Graph tags are correct.

Any static host works too: upload the contents of `out/` after `npm run build`.

## Where things live

| What | File |
| --- | --- |
| Name, headline, email, LinkedIn, CV link, analytics | `src/config/site.ts` |
| OneDrive folder per series | `src/config/library-links.ts` |
| Work items (library + featured breakdowns) | `src/content/work.ts` |
| Series (publications) | `src/content/series.ts` |
| Career timeline, education, academic projects | `src/content/experience.ts` |
| Mentorship programmes | `src/content/mentorship.ts` |
| Term of the Week | `src/content/terms.ts` |
| AI Lab pipeline, systems, articles | `src/content/lab.ts` |
| Skills, credentials, interests | `src/content/profile.ts` |
| Design tokens (colour, type, spacing) | `src/styles/tokens.css` |
| Thumbnails | `public/thumbs/*.webp` |

Architecture: `content/` (data) → `views/` (page layouts) → `components/` (reusable UI) → `app/` (thin Next.js routes). `lib/platform` is the only file that touches the router, which is how the same components also run in the single-file preview (`preview/`).

See **MAINTENANCE.md** for step-by-step updates.
