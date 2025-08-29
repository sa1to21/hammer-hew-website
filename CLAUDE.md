# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Hammer & Hew** - Professional deck construction and restoration services website for Bay Area contractors. Built as a high-converting lead generation website with modern React stack.

**Current Status**: 🟢 ЭТАП 5 COMPLETE - Production-ready website with real photos, optimized UX, and unified Services+Process tabs

## Development Commands

```bash
# Navigate to project directory
cd hammer-hew-website

# Install dependencies (with legacy peer deps for React 19 compatibility)
npm install --legacy-peer-deps

# Start development server
npm run dev  # Usually runs on http://localhost:5174

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3.4.15 (standard colors, no custom config)
- **Build Tool**: Vite 7.1.2
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **SEO**: React Helmet Async + structured data
- **Icons**: Lucide React
- **Forms Integration**: Formspree ready (see FORMSPREE_SETUP.md)

### Directory Structure
```
hammer-hew-website/
├── public/
│   ├── logo.png                           # Company logo
│   └── images/
│       ├── hero/main.jpg                  # Hero background image
│       └── gallery/                       # Real project photos
│           ├── new-construction/
│           │   ├── new-001.jpg
│           │   └── new-002.jpg
│           └── restoration/
│               ├── restoration-001.jpg
│               ├── restoration-002.jpg
│               ├── restoration-003.jpg
│               └── restoration-004.jpg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx               # Dynamic floating navigation + social media
│   │   │   ├── Footer.tsx               # Contact info & trust elements
│   │   │   └── Layout.tsx               # Main page wrapper
│   │   ├── sections/
│   │   │   ├── Hero.tsx                 # Centered hero without form
│   │   │   ├── WhyChooseUs.tsx          # 4 key benefits + stats (bottom sections commented)
│   │   │   ├── Gallery.tsx              # 6 real project photos with filtering
│   │   │   ├── Testimonials.tsx         # Customer reviews + stats
│   │   │   ├── ServicesProcessTabs.tsx  # Combined Services+Process with tabs
│   │   │   ├── Contact.tsx              # Main contact form + business info
│   │   │   ├── Services.tsx             # (Legacy - not used)
│   │   │   ├── Process.tsx              # (Legacy - not used)
│   │   │   └── BeforeAfterGallery.tsx   # (Hidden - can be re-enabled)
│   │   ├── ui/
│   │   │   ├── MainContactForm.tsx      # Main lead capture form
│   │   │   ├── ServiceCard.tsx          # Compact service cards
│   │   │   ├── ContactForm.tsx          # (Legacy form component)
│   │   │   └── AnimatedCard.tsx         # Animation wrapper
│   │   └── common/
│   │       ├── SEO.tsx                  # Meta tags & structured data
│   │       └── HelmetProvider.tsx
│   ├── utils/
│   │   ├── formConfig.ts                # Formspree integration config
│   │   └── lazyLoading.ts               # Component lazy loading
│   └── App.tsx                          # Main app with reordered sections
├── FORMSPREE_SETUP.md                   # Email integration instructions
├── SEO_OPTIMIZATION_PLAN.md             # SEO improvement roadmap
└── development_plan.md                  # Development history & roadmap
```

## Design System

### Colors (Updated Scheme)
- **Primary Emerald**: `emerald-600` (#059669) - Icons, CTAs, accents
- **Primary Slate**: `slate-800` (#1e293b) - CTA cards, navigation text
- **Secondary Amber**: `amber-600` (#d97706) - Popular badges, step numbers  
- **Success**: `emerald-600` (#059669) - Primary buttons
- **Text**: `slate-700` (#334155) - Primary text, navigation
- **Light Text**: `slate-300` (#cbd5e1) - Secondary text on dark backgrounds
- **Background**: `white` / `stone-50` (#fafaf9) - Alternating section backgrounds

### Typography
- **Headlines**: Playfair Display (Google Fonts) - `font-heading`
- **Body Text**: Source Sans Pro (Google Fonts) - `font-body`  
- **Accents**: Bebas Neue (Google Fonts) - `font-accent` (not currently used)

### Component Classes
```css
.btn-primary    # Emerald CTA button with hover effects
.btn-secondary  # Outlined button that fills on hover
```

## Site Structure & Content

**Current Page Flow:**
```
Hero → Why Choose Us → Gallery → Reviews → Services & Process (Tabs) → Contact
```

### Section Details:

**1. Hero Section**
- Centered single-column layout (form moved to Contact)
- Trust badges (15+ Years, Licensed, Warranty)
- Background image with overlay
- Call-to-action buttons redirecting to contact form

**2. Why Choose Us**
- 4 key benefits with emerald icons (Licensed, Warranty, Free Estimates, Premium Materials)
- Dark statistics block (500+ decks, 4.9★ rating)
- Bottom sections commented out (can be re-enabled)

**3. Gallery**
- 6 real project photos (2 new-construction, 4 restoration)
- Category filtering with project counts
- Real image paths to uploaded photos

**4. Reviews (Testimonials)**
- Customer testimonials carousel
- Statistics with animated counters
- CTA for consultation booking

**5. Services & Process (Tabs)**
- Combined tabbed interface: "What We Do" | "How We Work"
- Services: 4 compact cards without pricing
- Process: 5 card-based steps with arrows
- Unified CTA at bottom with slate-800 styling

**6. Contact**
- Main contact form (moved from Hero)
- Multiple contact methods
- Business hours and service area info

## Development Progress Status

### ✅ COMPLETED - ЭТАП 1: Foundation
- React + TypeScript + Tailwind CSS setup
- Basic component structure (Header, Footer, Layout)
- Color scheme and typography configuration  
- SEO component with local business structured data
- Development server running

### ✅ COMPLETED - ЭТАП 2: MVP Landing  
- Hero section with lead capture form
- Services section with 4 pricing cards
- Basic contact section with business info
- Full mobile responsive design
- Form validation with React Hook Form + Zod

### ✅ COMPLETED - ЭТАП 3: Content & Trust
- "Why Choose Us" section with statistics and social proof
- Project gallery with 6 examples and category filtering
- 5-step process timeline with detailed explanations
- Formspree integration ready (demo mode active)
- Smooth animations throughout with Framer Motion

### ✅ COMPLETED - ЭТАП 4: Real Content Integration
- Real project photos integrated (replaced placeholders)
- Image organization and management system
- Gallery updated with authentic project images
- BeforeAfterGallery component created (currently hidden)

### ✅ COMPLETED - ЭТАП 5: UX & Design Optimization
- Form moved from Hero to Contact for better UX flow
- All CTAs unified to redirect to main contact form
- Services pricing removed (consultation-based approach)
- Complete design system overhaul:
  - Updated color scheme (emerald/slate/amber)
  - Removed problematic gradients
  - Floating header with dynamic logo sizing
- Services+Process combined into tabbed interface
- Section reordering for better user journey
- Spacing optimization throughout the site

### 🔄 NEXT - ЭТАП 6: Advanced Features & Polish
- Before/After gallery (toggle hidden component)
- Google Maps integration for service area
- A/B testing setup for headlines and CTAs
- Performance optimization and code splitting

## Key Features Implemented

- **Lead Generation**: 2 contact forms with validation
- **Trust Building**: Statistics, certifications, testimonials
- **Mobile-First**: Responsive design for all devices
- **SEO-Ready**: Meta tags, structured data, semantic HTML
- **Performance**: Vite build optimization, lazy loading ready
- **Accessibility**: Semantic HTML, keyboard navigation, ARIA labels

## Customization Guide

### Changing Content:
1. **Services & Pricing**: Edit `src/components/sections/Services.tsx`
2. **Company Info**: Update `src/components/layout/Footer.tsx` 
3. **Hero Headlines**: Modify `src/components/sections/Hero.tsx`
4. **Gallery Projects**: Replace data in `src/components/sections/Gallery.tsx`
5. **Process Steps**: Customize `src/components/sections/Process.tsx`

### Adding New Sections:
1. Create component in `src/components/sections/`
2. Import and add to `src/App.tsx` in desired order
3. Update navigation in `src/components/layout/Header.tsx`

### Activating Real Forms:
1. Follow instructions in `FORMSPREE_SETUP.md`
2. Update `src/utils/formConfig.ts` with your endpoint
3. Uncomment Formspree code in `src/components/ui/ContactForm.tsx`

## Version Control & Repository

**GitHub Repository**: https://github.com/sa1to21/hammer-hew-website

### Git Setup
```bash
# Clone repository  
git clone https://github.com/sa1to21/hammer-hew-website.git
cd hammer-hew-website

# Check current status
git status

# View commit history
git log --oneline

# View all tags
git tag
```

### Version Tags
- **v1.0**: ЭТАП 1 - Foundation complete
- **v2.0**: ЭТАП 2 - MVP Landing complete  
- **v3.0**: ЭТАП 3 - Content & Trust complete

### Development Workflow
```bash
# Before making changes
git pull origin main

# After making changes
git add .
git commit -m "Descriptive commit message"
git push origin main

# Creating releases for major milestones
git tag -a v4.0 -m "ЭТАП 4: Polish & Performance complete"
git push origin --tags
```

**Ready for production deployment to Netlify, Vercel, or similar platforms.**