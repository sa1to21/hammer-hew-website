# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Hammer & Hew** - Professional deck construction and restoration services website for Bay Area contractors. Built as a high-converting lead generation website with modern React stack.

**Current Status**: 🟢 ЭТАП 3 COMPLETE - Full-featured website ready for production

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
│   └── logo.png                 # Company logo
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx       # Navigation with mobile menu
│   │   │   ├── Footer.tsx       # Contact info & trust elements
│   │   │   └── Layout.tsx       # Main page wrapper
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Main landing section with form
│   │   │   ├── Services.tsx     # 4 service cards with pricing
│   │   │   ├── WhyChooseUs.tsx  # Trust & credibility section
│   │   │   ├── Gallery.tsx      # Project portfolio (6 items)
│   │   │   ├── Process.tsx      # 5-step timeline process
│   │   │   └── Contact.tsx      # Contact forms & business info
│   │   ├── ui/
│   │   │   ├── ContactForm.tsx  # Main lead capture form
│   │   │   └── ServiceCard.tsx  # Reusable service cards
│   │   └── common/
│   │       ├── SEO.tsx          # Meta tags & structured data
│   │       └── HelmetProvider.tsx
│   ├── utils/
│   │   └── formConfig.ts        # Formspree integration config
│   └── App.tsx                  # Main app with all sections
├── FORMSPREE_SETUP.md          # Email integration instructions
└── development_plan.md         # Original development roadmap
```

## Design System

### Colors (Standard Tailwind)
- **Primary Green**: `green-800` (#166534) - Navigation, CTAs, accents
- **Secondary Brown**: `amber-700` (#B45309) - Hover states, gradients  
- **Gold Accent**: `yellow-500` (#EAB308) - Stars, highlights
- **Success**: `green-600` (#16A34A) - CTA buttons
- **Text**: `gray-800` (#1F2937) - Primary text
- **Background**: `gray-50` (#F9FAFB) - Section backgrounds

### Typography
- **Headlines**: Playfair Display (Google Fonts) - `font-heading`
- **Body Text**: Source Sans Pro (Google Fonts) - `font-body`  
- **Accents**: Bebas Neue (Google Fonts) - `font-accent` (not currently used)

### Component Classes
```css
.btn-primary    # Green CTA button with hover effects
.btn-secondary  # Outlined button that fills on hover
```

## Site Structure & Content

**Current Page Flow:**
```
Hero → Services → Why Choose Us → Gallery → Process → Contact
```

### Section Details:

**1. Hero Section**
- Dual-column layout with form on right
- Trust badges (15+ Years, Licensed, Warranty)
- Animated content with Framer Motion
- Main lead capture form

**2. Services Section**  
- 4 service cards with pricing
- New Construction ($15,000+) marked as "Most Popular"
- Hover effects and responsive grid

**3. Why Choose Us**
- Statistics block (500+ decks, 4.9★ rating)
- Certifications and credentials
- Customer testimonial with rating

**4. Gallery**
- 6 project examples with filter categories
- Placeholder images (via placeholder.com)
- Tags and project details

**5. Process**
- 5-step timeline (Consultation → Design → Permits → Construction → Inspection)
- Alternating layout with detailed steps
- Duration estimates for each phase

**6. Contact**
- Multiple contact methods
- Business hours and emergency services
- Additional quick contact form

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

### 🔄 NEXT - ЭТАП 4: Polish & Performance
- Performance optimization and code splitting
- Advanced animations and micro-interactions  
- Cross-device testing and refinements
- Final SEO optimizations

### 🔄 FUTURE - ÉTАП 5: Advanced Features
- Before/After gallery with image comparison sliders
- Customer testimonials carousel
- Google Maps integration for service area
- A/B testing setup for headlines and CTAs

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