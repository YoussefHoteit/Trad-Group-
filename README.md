# Trad Group Lighting Website

Responsive Next.js website for Trad Group, built from the supplied 2026 Konnice Electric / Trad Group product catalog.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm install
npm run build
```

The project uses Next.js static export and produces the deployable site in `out/`.

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `out`
- Node.js: 20 or newer

A `wrangler.toml` file is included for Cloudflare Pages-compatible deployment.

## Business details

Update phone, WhatsApp, email and address in `data/company.ts`.

## Catalog data

Product/category data is in `data/catalog.ts` and was transcribed from the supplied 2026 catalog. Catalog page numbers are retained on product records for source reference.
