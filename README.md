# Bulbul — Screen-Free Learning for Tiny Hands

A complete ecommerce website for selling children's activity/busy books in Pakistan. Built with Next.js 14 (App Router), Tailwind CSS, Framer Motion, and Zustand.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Navigate to the project directory
cd bulbul

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
bulbul/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Homepage (16 sections)
│   │   ├── layout.tsx          # Root layout
│   │   ├── globals.css         # Global styles + Tailwind
│   │   ├── shop/               # Shop pages
│   │   │   ├── page.tsx        # All products grid
│   │   │   └── [slug]/page.tsx # Individual product page
│   │   ├── bundles/            # Bundle pages
│   │   │   ├── page.tsx        # All bundles
│   │   │   └── [slug]/page.tsx # Individual bundle page
│   │   ├── cart/page.tsx       # Cart page
│   │   ├── checkout/page.tsx   # Checkout page
│   │   ├── quiz/page.tsx       # Product recommender quiz
│   │   ├── blog/page.tsx       # Blog listing
│   │   ├── about/page.tsx      # About page
│   │   ├── reviews/page.tsx    # Reviews page
│   │   ├── faq/page.tsx        # FAQ page
│   │   ├── contact/page.tsx    # Contact page
│   │   └── track-order/page.tsx # Order tracking
│   ├── components/
│   │   ├── layout/             # Layout components
│   │   │   ├── AnnouncementBar.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── CartDrawer.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   └── home/               # Homepage sections
│   │       ├── HeroSection.tsx
│   │       ├── ProblemSection.tsx
│   │       ├── ProductShowcase.tsx
│   │       ├── WhyItWorks.tsx
│   │       ├── SocialProof.tsx
│   │       ├── BundleOffer.tsx
│   │       ├── HowItWorks.tsx
│   │       ├── VideoDemo.tsx
│   │       ├── QuizCTA.tsx
│   │       ├── UGCGallery.tsx
│   │       ├── BlogPreview.tsx
│   │       ├── FAQSection.tsx
│   │       └── FinalCTA.tsx
│   ├── lib/
│   │   └── data.ts             # Product catalog, reviews, blog data
│   └── store/
│       └── cart.ts             # Zustand cart store
├── public/                     # Static assets (placeholder images)
├── tailwind.config.ts          # Tailwind with custom design tokens
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Design System

### Colors
| Role | Hex |
|------|-----|
| Primary (Logo + CTA) | `#E05A4F` |
| Secondary (Trust/Growth) | `#7BAF7F` |
| Accent (Value/Joy) | `#F2C94C` |
| Background | `#FFFAF3` |
| Cards/Surface | `#FFFFFF` |
| Text Primary | `#2B2B2B` |
| Text Secondary | `#6B6B6B` |

### Typography
- **Logo:** Pacifico (script)
- **Headings:** Nunito (Bold/ExtraBold)
- **Body:** DM Sans (Regular/Medium)

## 🛒 Features

- **16-section Homepage** with animations
- **Product Catalog** — 6 busy books + bundles
- **Progressive Cart Incentives** — encourages larger orders
- **Age-Based Quiz** — personalized recommendations
- **Responsive Design** — mobile-first approach
- **Cart Drawer** — slide-out cart with incentive messages
- **WhatsApp Integration** — floating button for quick support
- **Gift Wrapping** — optional at checkout (Rs.150)
- **COD + Digital Payments** — JazzCash, EasyPaisa, Cards
- **Order Tracking** — track shipment status
- **Blog** — parenting tips and guides
- **Reviews** — social proof from real parents

## 🏗️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom design tokens
- **Animations:** Framer Motion
- **State Management:** Zustand (persisted cart)
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Pacifico, Nunito, DM Sans)

## 📝 Notes

- All TypeScript errors shown in the IDE are due to missing `node_modules` — they resolve after running `npm install`
- Product images use emoji placeholders — replace with actual product photography
- WhatsApp number is placeholder — update in components
- Payment integration requires Stripe/JazzCash API setup
- Blog posts link to individual pages (not yet built — add as needed)

## 📦 Deployment

This project is ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting**

```bash
# Deploy to Vercel
npx vercel
```
