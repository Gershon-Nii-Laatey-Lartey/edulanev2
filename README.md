# EduLane v2

Ghana's university admissions platform. Upload WASSCE results, get matched to programmes, buy checker pins, and book full admissions support.

## Stack
- React + Vite
- React Router v6
- Lucide React (icons)
- Google Fonts — Playfair Display + Inter
- Pure CSS (no framework)

## Pages
| Route | Page |
|---|---|
| `/` | Landing — hero input, stats, steps, services, testimonials |
| `/results` | University matches — extracted grades, ranked programmes |
| `/services` | Checker purchase, matching, full admissions |
| `/how-it-works` | Step-by-step process + FAQ |

## Modals
- **AppointmentModal** — 2-step date/time picker + contact form
- **CheckerModal** — Plan selector + MTN MoMo payment flow

## Colors
- `--green-deep: #1a3a2a` (primary)
- `--green-mid: #2d6a4f` (accent)
- `--off-white: #f5f3ee` (background)

## Getting started
```bash
npm install
npm run dev
```

## Backend TODOs
- WAEC index number lookup API
- Result slip OCR for uploads
- University cutoff points database
- Resend email for checker delivery + appointment confirmations
- MTN MoMo payment integration
- Supabase for appointments and leads
