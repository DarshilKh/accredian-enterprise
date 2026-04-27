# Accredian Enterprise — Full Clone

A pixel-accurate, fully responsive **Next.js 16** clone of [enterprise.accredian.com](https://enterprise.accredian.com/).

**Live Demo:** _[Add your Vercel URL after deployment]_
**GitHub:** _[Add your repository URL]_

---

## 🚀 Quick Start

```bash
# 1. Unzip and enter the folder
unzip accredian-enterprise.zip
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Run locally
npm run dev
# Open http://localhost:3000

# 4. Production build
npm run build && npm start
```

---

## 📦 Deploy to Vercel

```bash
# Option A: CLI
npm i -g vercel
vercel

# Option B: Push to GitHub → import at vercel.com (zero config)
```

---

## 🗂️ Project Structure

```
accredian-enterprise/
├── app/
│   ├── layout.tsx              # Root layout + metadata
│   ├── page.tsx                # Assembles all sections
│   ├── globals.css             # Base styles
│   └── api/leads/route.ts      # POST /api/leads — lead capture API
├── components/
│   ├── Navbar.tsx              # Sticky nav, active-section highlight, mobile menu
│   ├── Hero.tsx                # Light blue card, heading, checkmarks, Enquire Now
│   ├── Stats.tsx               # 10K+ / 200+ / 5K+ with blue pills & dividers
│   ├── Clients.tsx             # Reliance, HCL, IBM, CRIF, ADP, Bayer logos
│   ├── AccredianEdge.tsx       # Horizontal circle chain with top/bottom labels
│   ├── DomainExpertise.tsx     # 3×2+1 icon grid
│   ├── CourseSegmentation.tsx  # 4 image cards (Program/Industry/Topic/Level)
│   ├── WhoShouldJoin.tsx       # Blue banner with 4 professional profiles
│   ├── CATFramework.tsx        # 3 large circles — Concept, Application, Tools
│   ├── HowItWorks.tsx          # 3 step cards with numbered badges & blue icons
│   ├── FAQs.tsx                # Left tab selector + right accordion + Enquire Now
│   ├── Testimonials.tsx        # 2-card slider with ADP/Bayer logos + dot pagination
│   ├── ContactBanner.tsx       # Blue CTA banner with headset icon + Contact Us
│   └── Footer.tsx              # Logo, social icons, Enquire Now, links, copyright
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

---

## ✅ Sections Implemented

| Section | Matches Original |
|---|---|
| Navbar (sticky, active highlight, mobile) | ✅ |
| Hero (light blue card, checkmarks, CTA) | ✅ |
| Stats (Our Track Record) | ✅ |
| Clients (partner logos) | ✅ |
| Accredian Edge (circle carousel) | ✅ |
| Domain Expertise (7 icon cards) | ✅ |
| Tailored Course Segmentation (4 cards) | ✅ |
| Who Should Join (blue banner) | ✅ |
| CAT Framework (3 circles) | ✅ |
| How It Works (3 step cards) | ✅ |
| FAQs (tab + accordion) | ✅ |
| Testimonials (slider + dots) | ✅ |
| Contact Banner | ✅ |
| Footer (exact copy) | ✅ |

---

## 🔌 API: Lead Capture

**POST** `/api/leads`
```json
{ "name": "Raj", "email": "raj@co.com", "company": "TechCorp", "phone": "9876543210" }
```
**Response 201:**
```json
{ "success": true, "message": "Thank you! We'll contact you soon.", "id": "lead_..." }
```

---

## 🤖 AI Usage

### Where Claude helped
- Component scaffolding and structure planning
- Tailwind/CSS layout patterns for responsive grids
- TypeScript types for API route and form data
- SVG icon generation for professional illustrations

### What I built / refined manually
- Pixel-matching color palette (`#1a56db` blue, `#eef4ff` light blue backgrounds)
- Active navbar scroll-spy logic with `IntersectionObserver`-style offset detection
- CAT Framework S-curve SVG connectors between circles
- Testimonial dot-pagination slider state
- FAQ tab-switching with accordion open/close state
- All inline `onMouseEnter/Leave` hover effects
- Fixing all missing `"use client"` directives (critical Next.js 16 App Router requirement)

---

## ⏫ Improvements With More Time

1. Replace SVG illustrations in Hero & WhoShouldJoin with real `next/image` photos
2. Add `framer-motion` scroll-reveal animations on section entry
3. Wire "Enquire Now" / "Contact Us" to real form with email notification via Resend
4. Add actual client logo images (SVG) instead of text placeholders
5. Auto-scrolling marquee for the client logos strip
6. Persist leads to Supabase / PlanetScale instead of in-memory store
7. Add `sitemap.xml` + `robots.txt` for SEO
8. Full keyboard navigation & ARIA accessibility audit
9. Playwright E2E tests for scroll navigation and form submission
