# Hammer & Hew - Professional Deck Services Website

![Hammer & Hew Logo](public/logo.png)

A high-converting lead generation website for **Hammer & Hew**, a premium deck construction and restoration company serving the Bay Area. Built with modern React stack for optimal performance and user experience.

## 🚀 Project Overview

**Hammer & Hew** specializes in premium deck construction, restoration, staining, and custom design services. This website serves as the primary lead generation tool, showcasing our expertise and capturing potential customer inquiries through an optimized conversion funnel.

**Current Status**: 🟢 **PRODUCTION READY** - Complete website with real content, optimized UX, and professional design

## ✨ Key Features

- **🎯 Lead Generation**: Unified contact form with validation and Formspree integration
- **📱 Mobile-First**: Fully responsive design optimized for all devices
- **🔍 SEO-Ready**: Complete meta tags, structured data, and semantic HTML
- **⚡ Performance**: Vite build optimization with fast loading times
- **🎨 Professional Design**: Modern emerald/slate/amber color scheme
- **📷 Real Content**: Authentic project photos and customer testimonials
- **♿ Accessible**: ARIA labels, keyboard navigation, and semantic structure

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3.4.15 (custom color palette)
- **Build Tool**: Vite 7.1.2
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **SEO**: React Helmet Async + structured data
- **Icons**: Lucide React
- **Forms Integration**: Formspree ready

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/sa1to21/hammer-hew-website.git
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

## 📁 Project Structure

```
hammer-hew-website/
├── public/
│   ├── logo.png                           # Company logo
│   └── images/
│       ├── hero/main.jpg                  # Hero background
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
│   │   │   ├── Header.tsx               # Dynamic floating navigation
│   │   │   ├── Footer.tsx               # Contact info & trust elements
│   │   │   └── Layout.tsx               # Main page wrapper
│   │   ├── sections/
│   │   │   ├── Hero.tsx                 # Centered hero without form
│   │   │   ├── WhyChooseUs.tsx          # 4 key benefits + stats
│   │   │   ├── Gallery.tsx              # 6 real project photos
│   │   │   ├── Testimonials.tsx         # Customer reviews + stats
│   │   │   ├── ServicesProcessTabs.tsx  # Combined Services+Process
│   │   │   └── Contact.tsx              # Main contact form + business info
│   │   ├── ui/
│   │   │   ├── MainContactForm.tsx      # Primary lead capture form
│   │   │   ├── ServiceCard.tsx          # Compact service cards
│   │   │   ├── TestimonialCarousel.tsx  # Customer testimonials
│   │   │   └── AnimatedCounter.tsx      # Statistics animations
│   │   └── common/
│   │       ├── SEO.tsx                  # Meta tags & structured data
│   │       └── HelmetProvider.tsx
│   ├── utils/
│   │   ├── formConfig.ts                # Formspree integration
│   │   └── lazyLoading.ts               # Component lazy loading
│   └── App.tsx                          # Main app with sections
├── CLAUDE.md                             # Development guidelines
├── FORMSPREE_SETUP.md                    # Email integration setup
├── development_plan.md                   # Development history
└── README.md                             # This file
```

## 🎨 Design System

### Color Palette
- **Primary Emerald**: `emerald-600` (#059669) - Icons, CTAs, accents
- **Primary Slate**: `slate-800` (#1e293b) - CTA cards, navigation text
- **Secondary Amber**: `amber-600` (#d97706) - Popular badges, step numbers
- **Text**: `slate-700` (#334155) - Primary text, navigation
- **Background**: `white` / `stone-50` (#fafaf9) - Alternating sections

### Typography
- **Headlines**: Playfair Display (Google Fonts) - `font-heading`
- **Body Text**: Source Sans Pro (Google Fonts) - `font-body`

### Component Classes
```css
.btn-primary    # Emerald CTA button with hover effects
.btn-secondary  # Outlined button that fills on hover
```

## 🗺️ Site Structure

**Section Flow:**
```
Hero → Why Choose Us → Gallery → Reviews → Services & Process → Contact
```

### Page Sections

1. **Hero**: Centered layout with trust badges and CTA buttons
2. **Why Choose Us**: 4 key benefits with statistics (500+ decks, 4.9★ rating)
3. **Gallery**: 6 real project photos with category filtering
4. **Testimonials**: Customer reviews with animated statistics
5. **Services & Process**: Tabbed interface ("What We Do" | "How We Work")
6. **Contact**: Main contact form with business information

## 📋 Services Offered

- **New Deck Construction**: Custom decks with premium materials and 10-year warranty
- **Deck Restoration**: Complete restoration services with 5-year finish warranty
- **Staining & Sealing**: Premium finishes with 3-year warranty
- **Custom Design**: 3D design and consultation services

## 📧 Form Integration

The website is ready for Formspree integration for handling contact form submissions:

1. Follow instructions in `FORMSPREE_SETUP.md`
2. Update `src/utils/formConfig.ts` with your endpoint
3. Forms will automatically send notifications to specified email

## 🚀 Deployment

### Build Commands
```bash
# Production build
npm run build

# Preview build locally
npm run preview
```

### Deployment Platforms
- **Netlify**: Drag and drop `dist` folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Use GitHub Actions workflow

### Environment Variables
```env
# For Formspree integration
VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint_here
```

## 📈 SEO Features

- Local business structured data (JSON-LD)
- Optimized meta tags and Open Graph
- Semantic HTML structure
- Image alt text and descriptions
- Fast loading times (Vite optimization)

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style
- TypeScript for type safety
- Component-based architecture
- Tailwind CSS for styling
- ESLint + Prettier for code formatting

## 📄 Documentation

- **CLAUDE.md**: Development guidelines and project overview
- **FORMSPREE_SETUP.md**: Email integration instructions
- **development_plan.md**: Complete development history and roadmap

## 📞 Contact Information

**Hammer & Hew**  
📧 Email: info@hammerhew.com  
📱 Phone: (555) 123-4567  
🌐 Website: [hammerhew.com](https://hammerhew.com)  
📍 Service Area: San Francisco Bay Area, CA

## 📜 License

This project is proprietary and confidential. All rights reserved to Hammer & Hew.

---

**Status**: ✅ Production Ready - Optimized for lead generation and customer conversion
