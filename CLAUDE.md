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
- **Maps Integration**: Google Maps JavaScript API with custom styling

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
│   │   │   ├── Contact.tsx              # Main contact form + business info + Google Maps
│   │   │   ├── Services.tsx             # (Legacy - not used)
│   │   │   ├── Process.tsx              # (Legacy - not used)
│   │   │   └── BeforeAfterGallery.tsx   # (Hidden - can be re-enabled)
│   │   ├── ui/
│   │   │   ├── MainContactForm.tsx      # Main lead capture form
│   │   │   ├── ServiceCard.tsx          # Compact service cards
│   │   │   ├── ContactForm.tsx          # Form component with validation
│   │   │   ├── GoogleMapWithFallback.tsx # Interactive Google Maps with service area
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
- Trust badges (5+ Years Experience, Licensed & Insured, Free Estimates) - simplified text
- Background image with dark overlay
- Optimized title layout: "Transform Your Backyard Into Your Family's Favorite Place"
- Single CTA button redirecting to contact form
- Mobile-first CTA positioning (above trust badges on mobile, below on desktop)

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
- Services: 4 compact cards without pricing (New Deck Construction, Deck Restoration [Most Popular], Sanding & Sealing, Custom Design)
- Process: 4 streamlined steps without time estimates for cleaner presentation (Free Consultation, Design & Proposal, Permits & Preparation, Construction)
- Unified CTA at bottom with emerald styling

**6. Contact**
- Main contact form with simplified fields (Name, Email, Phone, Message) - removed Service Type field for better conversion rates
- Interactive Google Maps showing exact business location and Pennsylvania service area polygon
- Service area visualization with custom polygon covering 25-mile radius within PA boundaries
- Gradient background for warm, welcoming feel (from-green-50 via-white to-amber-50)
- Multiple contact methods with updated business hours (Mon-Sat: 8AM-6PM, Sun: Emergency Only)
- Google Maps with fallback to styled contact card if map fails to load
- Custom company logo marker positioned at 1112 N Hancock St, Philadelphia

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

### ✅ COMPLETED - ЭТАП 6: Typography & Visual Design Enhancement
- **Typography Overhaul**: Changed from Playfair Display to Merriweather serif for better readability and professional appearance
- **Background Design System**: Implemented gradient backgrounds for key sections (WhyChooseUs, Testimonials, Contact) using `from-green-50 via-white to-amber-50`
- **Hero Section Optimization**: Expanded container width to max-w-6xl for better title layout and visual balance
- **Visual Rhythm**: Created alternating background pattern (gradient → white → gradient → white → gradient) for improved user flow
- **Mobile Navigation Fix**: Resolved double border lines issue in mobile menu
- **Content Updates**: Updated trust badges, simplified form fields, and optimized business hours display

### ✅ COMPLETED - ЭТАП 7: Mobile UX Enhancement
- **Adaptive Hero Layout**: CTA button positioning - mobile-first (above trust badges) vs desktop (below trust badges)
- **Mobile Navigation Overhaul**: Enhanced mobile menu with improved spacing, hover effects, and better visual hierarchy
- **Trust Badges Optimization**: Column layout on mobile with full-width badges, horizontal layout on desktop
- **Contact Form Enhancement**: Mobile-first approach with form prioritized above contact information
- **Typography Responsiveness**: Better responsive text sizing and padding throughout all components
- **Touch-Friendly Interface**: Improved button sizes and spacing for mobile interaction

### ✅ COMPLETED - ЭТАП 8: Final UX & Content Refinement
- **Contact Form Simplification**: Removed "Service Needed" field, streamlined to 4 essential fields (Name, Email, Phone, Message) for better conversion rates
- **Business Hours Consistency**: Updated footer business hours to match contact card format (Mon-Sat: 8AM-6PM, Sun: Emergency Only)
- **Services Section Optimization**: Moved "Most Popular" badge from first to second service card (Deck Restoration) based on business priorities
- **Process Steps Refinement**: Reduced from 5 to 4 steps, removed time duration indicators for cleaner presentation and better mobile layout
- **Grid Layout Enhancement**: Optimized process section grid from 5 columns to 4 columns (lg:grid-cols-4) for better visual balance
- **Content Cleanup**: Removed subtitle from main contact form, simplified service descriptions, improved spacing throughout
- **Navigation Font Weight**: Enhanced navigation text visibility with bold font weight for better mobile readability
- **License Information**: Added HICPA license number to footer for professional credibility

### ✅ COMPLETED - ЭТАП 9: SEO & Documentation Enhancement
- **SEO Foundation**: Updated sitemap.xml with current site structure, Philadelphia location targeting, and proper lastmod dates
- **Robots.txt Optimization**: Enhanced robots.txt with specific crawler rules, security blocks, and Philadelphia branding
- **Alt Text SEO Optimization**: Comprehensive improvement of all image alt texts for better search engine visibility
  - Hero image: Enhanced with location and business name targeting
  - Logo images: Added professional descriptive alt texts with location keywords
  - Gallery images: Dynamic SEO-optimized alt texts with location and service type
  - BeforeAfter component: Added customizable alt text props for better accessibility
- **Footer Cleanup**: Removed unnecessary Privacy Policy and Terms of Service links, replaced with local business credibility markers
  - Added "Licensed & Insured", "Free Estimates", "Philadelphia Service Area" badges
  - Maintained license number display for professional credibility
- **URL Structure Validation**: Confirmed clean anchor-based navigation system for optimal user experience and SEO

### ✅ COMPLETED - ЭТАП 11: Performance & Code Optimization (Latest Update)
- **Codebase Cleanup**: Removed 12+ unused components and files reducing project complexity
  - Deleted unused UI components: ABTestButton, AnalyticsDashboard, AnimatedCounter, InteractiveMap, MagneticButton, MicroInteraction, ParallaxSection
  - Removed legacy sections: Process.tsx, Services.tsx (replaced by ServicesProcessTabs)
  - Cleaned up unused utilities: imageManager.ts, App.css
  - Updated lazyLoading.ts exports
- **Animation Optimization**: Fixed Gallery and ServicesProcessTabs animations
  - Replaced conflicting CSS transitions with Framer Motion animations
  - Changed from `animate` to `whileInView` for proper scroll-triggered animations
  - Added `ease: "easeOut"` and optimized viewport settings
  - Eliminated flickering and animation conflicts
- **Footer Enhancement**: Complete redesign for professional appearance
  - Centered logo and text alignment in first column
  - Consistent spacing with `gap-8 lg:gap-12` between columns
  - Fixed logo height (h-70) and positioning (-mt-6)
  - Improved responsive layout with flexbox structure
- **Google Maps Integration**: Enhanced with custom service area and TypeScript fixes
  - Custom polygon with precise 14-point coordinate boundary
  - Fixed TypeScript errors by adding Window interface declarations
  - Updated service area visualization with real coordinates
- **Navigation Enhancement**: Logo click redirects to Hero section (#hero) instead of #why-choose-us
- **Bundle Optimization**: Improved build performance
  - Final bundle size: 460KB total, 142KB gzip compressed
  - Build time: ~3.6 seconds
  - All TypeScript errors resolved

### ✅ COMPLETED - ЭТАП 10: Google Maps Integration
- **Interactive Google Maps**: Full implementation with business location marker
- **Service Area Visualization**: Custom polygon with precise coordinate boundaries
- **Smart Fallback System**: Graceful degradation to contact card when map fails
- **TypeScript Integration**: Proper type declarations for Google Maps API
- **Mobile Responsive**: Fully responsive with touch controls and optimized height

### 🎆 PROJECT COMPLETE - PRODUCTION READY
**Live Site**: Deployed on Netlify with optimal performance
**Code Quality**: Clean, optimized codebase with removed dead code
**Performance**: Superior build optimization and loading times
**Contact Integration**: Working contact forms with real business email
**SEO Optimized**: Full Philadelphia market targeting with structured data

### 🔄 FUTURE ENHANCEMENTS (Optional):
- Before/After gallery (component ready, currently hidden)
- A/B testing setup for conversion optimization
- Customer testimonials video integration
- Blog system for content marketing
- Google Maps directions integration
- Service area heat map visualization

## Key Features Implemented

- **Lead Generation**: 2 contact forms with validation
- **Interactive Maps**: Google Maps integration with service area visualization
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

### Google Maps Configuration:
1. **API Key Setup**: Create Google Cloud Console project and enable Maps JavaScript API
2. **Environment Variables**: Add `VITE_GOOGLE_MAPS_API_KEY=your_api_key` to `.env` file
3. **Production Deployment**: Add API key to hosting platform environment variables (Netlify/Vercel)
4. **API Restrictions**: Configure HTTP referrers in Google Cloud Console for security
5. **Billing**: Enable billing account (required even for free tier usage)
6. **Map Customization**: Edit `src/components/ui/GoogleMapWithFallback.tsx` for styling/features

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