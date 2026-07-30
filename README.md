# Blue Cloud AI Technologies — Website

Corporate marketing site built with **Next.js 14 (App Router)** and **TypeScript**.
Five pages — Home, About, Services, Solutions, Contact — plus a working contact
API stub.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

```bash
npm run build && npm run start   # production build
```

## Structure

```
app/
  layout.tsx            Root layout — fonts, nav, footer, SEO metadata
  page.tsx              Home
  about/ services/ solutions/ contact/   Page routes
  api/contact/route.ts  Contact form endpoint (stub — wire your email/CRM here)
  components/           Navbar, Footer, Lattice (signature SVG), Reveal,
                        SectionHead, ServiceCard, CTABand, ContactForm
  lib/content.ts        ALL site copy in one place — edit here to change text
  globals.css           Design system (tokens, components, responsive)
public/logo.jpeg        Brand logo
```

## Editing content

All copy lives in `app/lib/content.ts`. Change text, add or remove services,
framework steps, or differentiators there and every page updates automatically.

## Design system

- **Palette** derived from the logo: azure `#008FFF`, cyan `#12B4F5`,
  royal `#0B4FC4`, ink `#06101F`, paper `#F6F9FD`.
- **Type**: Space Grotesk (display) · IBM Plex Sans (body) · IBM Plex Mono
  (labels/data) — loaded via `next/font`.
- **Signature**: the "dissolution lattice" (`components/Lattice.tsx`) — an
  ordered legacy grid dispersing into cloud-native pixels.

## Wiring the contact form

`app/api/contact/route.ts` validates and logs submissions. Add your delivery
mechanism (Resend / SendGrid / SES / Slack webhook / DB) where marked `TODO`.

## Deploy

Deploys as-is to Vercel, or any Node host via `npm run build && npm run start`.
