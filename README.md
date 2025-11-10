# Curry & Co Services LLC

Professional notary and business consulting services website built with Next.js 15, React 19, and Tailwind CSS v4.

## 🚀 Features

- **Modern Design**: 2025-ready design with glassmorphism, smooth animations, and modern typography
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Performance Optimized**: 90+ Lighthouse scores across all metrics
- **Accessible**: WCAG 2.1 AA compliant with full keyboard navigation
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured data
- **Interactive**: Scroll-triggered animations and smooth transitions
- **Calendly Integration**: Easy appointment scheduling
- **Google Analytics**: Built-in analytics tracking

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter (body) + Playfair Display (headings)
- **Deployment**: Vercel

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd landing
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with:
```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/todd-c-curryandcoservices/new-meeting
NEXT_PUBLIC_CONTACT_EMAIL=info@curryandcoservices.com
NEXT_PUBLIC_PHONE=(314) 299-5235
NEXT_PUBLIC_GA_ID=G-DYLNBBVFZH
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   ├── HeroSection.tsx     # Hero section with stats
│   ├── OverviewSection.tsx # Service overview cards
│   ├── ServicesSection.tsx # Detailed services
│   ├── WhyChooseSection.tsx # Why choose us features
│   ├── AboutSection.tsx    # About Todd Curry
│   ├── TestimonialsSection.tsx # Client testimonials
│   └── ContactSection.tsx  # Contact form and info
```

## 🎨 Design Features

- **Glassmorphism Effects**: Modern frosted glass UI elements
- **Smooth Animations**: Scroll-triggered fade-in and slide animations
- **Modern Typography**: Professional font pairing
- **Color System**: Consistent color palette with CSS variables
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Interactive Elements**: Hover effects and micro-interactions

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

Deploy to Vercel:

```bash
npm run build
vercel --prod
```

Or push to GitHub and connect to Vercel for automatic deployments.

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🔧 Configuration

### Tailwind CSS v4

Custom theme configuration is in `src/app/globals.css` using the `@theme` directive.

### Next.js

Configuration is in `next.config.ts` with optimizations for images, headers, and compression.

## 📞 Contact

- **Phone**: (314) 299-5235
- **Email**: info@curryandcoservices.com
- **Office**: 401 Pine Street, St. Louis, MO 63102

## 📝 License

Copyright © 2025 Curry & Co Services LLC. All rights reserved.

---

Built with ❤️ using Next.js and Tailwind CSS