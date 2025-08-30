# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Hammer & Hew LLC** - Professional deck construction and restoration services website for Philadelphia, PA contractors. Built as a high-converting lead generation website with modern React stack.

**Current Status**: 🟢 PRODUCTION DEPLOYED - Fully optimized website with real contact info, Philadelphia targeting, and live Formspree integration

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
- **Background Gradients**: `from-green-50 via-white to-amber-50` - Featured sections (WhyChooseUs, Testimonials, Contact)
- **Background White**: `white` - Standard sections (Gallery, Services)

### Typography
- **Headlines**: Merriweather (Google Fonts) - `font-heading` - Modern serif for professional trust
- **Body Text**: Source Sans Pro (Google Fonts) - `font-body` - Clean sans-serif for readability
- **Accents**: Bebas Neue (Google Fonts) - `font-accent` (not currently used)
- **Font Weights**: Headlines use 700, body text uses 400-600 range

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

**Navigation Order:** Gallery | Reviews | Services | Contact (Home removed)

### Section Details:

**1. Hero Section**
- Centered single-column layout with expanded container (max-w-6xl)
- Trust badges (5+ Years Experience, Licensed & Insured, Free Detailed Estimates)
- Background image with dark overlay
- Optimized title layout: "Transform Your Backyard Into Your Family's Favorite Place"
- Single CTA button redirecting to contact form

**2. Why Choose Us**
- 5 key benefits with emerald icons (Licensed & Insured, Quality Guarantee, Free Estimates, Premium Materials, Always On Schedule)
- Gradient background (from-green-50 via-white to-amber-50) for visual appeal
- Streamlined layout focusing on core value propositions
- Statistics sections removed for cleaner presentation

**3. Gallery**
- 6 real project photos (2 new-construction, 4 restoration)
- Clean white background for photo focus
- Simplified layout without filtering for better UX
- Real image paths to uploaded photos with hover effects

**4. Reviews (Testimonials)**
- Customer testimonials with Philadelphia-area locations
- Gradient background matching brand aesthetic (from-green-50 via-white to-amber-50)
- Trust badges (Google Reviews, Thumbtack Pro, Yelp Reviews)
- Simplified layout focusing on customer voices

**5. Services & Process (Tabs)**
- Combined tabbed interface: "What We Do" | "How We Work"
- Clean white background for content clarity
- Services: 4 compact cards without pricing (New Deck Construction, Deck Restoration, Staining & Sealing, Custom Design)
- Process: 5 card-based steps with arrows and time estimates
- Unified CTA at bottom with emerald styling

**6. Contact**
- Main contact form with simplified fields (First Name, Email, Phone, Message)
- Gradient background for warm, welcoming feel (from-green-50 via-white to-amber-50)
- Multiple contact methods with updated business hours (Mon-Sat: 8AM-6PM, Sun: Emergency Only)
- Philadelphia, PA service area with free consultation within 25 miles

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

### ✅ COMPLETED - FINAL DEPLOYMENT: Business Integration
- **Live Formspree Integration**: Real email submissions to hammerandhewllc@gmail.com
- **Contact Information Update**: Phone (917) 250-2222, Philadelphia, PA location
- **Complete SEO Optimization**: Philadelphia-targeted keywords, structured data
- **Navigation Refinement**: Removed Home, optimized order (Gallery → Reviews → Services → Contact)
- **Mobile UX Enhancement**: Improved hamburger menu positioning and spacing, fixed double border lines
- **Netlify Deployment**: Live site with _redirects for SPA routing and favicon
- **Business Branding**: Updated to "Hammer & Hew LLC" across all components

### ✅ COMPLETED - ЭТАП 6: Typography & Visual Design Enhancement (Latest Update)
- **Typography Overhaul**: Changed from Playfair Display to Merriweather serif for better readability and professional appearance
- **Background Design System**: Implemented gradient backgrounds for key sections (WhyChooseUs, Testimonials, Contact) using `from-green-50 via-white to-amber-50`
- **Hero Section Optimization**: Expanded container width to max-w-6xl for better title layout and visual balance
- **Visual Rhythm**: Created alternating background pattern (gradient → white → gradient → white → gradient) for improved user flow
- **Mobile Navigation Fix**: Resolved double border lines issue in mobile menu
- **Content Updates**: Updated trust badges, simplified form fields, and optimized business hours display

### 🎆 PROJECT COMPLETE - PRODUCTION READY
**Live Site**: Deployed on Netlify with custom domain support
**Contact Integration**: Working contact forms with real business email
**SEO Optimized**: Full Philadelphia market targeting with structured data
**Performance**: Optimized build with lazy loading and code splitting

### 🔄 FUTURE ENHANCEMENTS (Optional):
- Before/After gallery (component ready, currently hidden)
- Google Maps integration for service area visualization
- A/B testing setup for conversion optimization
- Customer testimonials video integration
- Blog system for content marketing

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

**✅ DEPLOYED TO PRODUCTION** - Live on Netlify with working contact forms and Philadelphia SEO targeting.