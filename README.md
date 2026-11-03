# Property Solutions — Greater Noida

`propertyssolution.com` (ss in the middle). Next.js App Router, one Vercel
project, one domain.

The sibling site — `propertysolutionss.com`, Yamuna Expressway / YEIDA — is a
separate repo (`propertysolutionss`). Both sites list all 176 maps; they differ
in design, headline, keywords and which region leads the ordering. Shared files
are copies, not a package: a change meant for both has to be made twice.

## Running locally

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build && pnpm start
```

Copy `.env.local` values from the EmailJS dashboard before the forms will send.

## Deploying

One Vercel project, default build settings (`pnpm build`, `.next`).

| Setting | Value |
|---|---|
| Domain | `propertyssolution.com` |

Environment variables:

```
NEXT_PUBLIC_SITE_URL=https://propertyssolution.com
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_gjki8za
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=ruKaOoyl7AVlWVPt9
NEXT_PUBLIC_EMAILJS_TEMPLATE_ONE_ID=template_m3t2hnl
NEXT_PUBLIC_EMAILJS_TEMPLATE_TWO_ID=template_u9vo8t9
```

`NEXT_PUBLIC_*` values are inlined at build time, so **changing any of them
requires a redeploy**, not just a save. `NEXT_PUBLIC_SITE_URL` drives canonical
tags, `sitemap.xml`, `robots.txt` and OG image URLs — if it is wrong or missing,
the site tells Google the wrong address.

## Maps

`public/maps/<area>/<NAME>.jpg` are the downloadable plans (2400px), and
`public/thumbs/<area>/<NAME>.webp` the 480px grid thumbnails. Both are generated
from the client's original scans, which live in `MAPS/` and are gitignored — that
folder is 3.2 GB and must never be committed.

```bash
pnpm img      # regenerate thumbnails + hero + og image
pnpm check    # validate map data, images and related-map links
```

## Commands

| Command | Does |
|---|---|
| `pnpm dev` | dev server |
| `pnpm build` / `pnpm start` | production build, serve it |
| `pnpm lint` / `pnpm typecheck` | static checks |
| `pnpm check` | map data validation |
| `pnpm img` | regenerate images |
