# 📸 Hammer & Hew - Image Organization Guide

## 🗂️ Folder Structure

```
public/images/
├── hero/                    # Hero section background images
├── about/                   # Company photos, team, equipment
├── gallery/                 # Main project gallery
│   ├── new-construction/    # New deck builds
│   ├── restoration/         # Deck restoration projects  
│   ├── staining/           # Staining & sealing projects
│   └── custom-design/      # Custom design projects
├── before-after/           # Before/After comparison images
│   ├── restoration/        # Restoration before/after pairs
│   ├── construction/       # Construction transformation pairs
│   ├── staining/          # Staining before/after pairs
│   └── expansion/         # Deck expansion pairs
└── testimonials/          # Customer photos (optional)
```

## 📝 File Naming Convention

### 🎯 **Gallery Images** (`/images/gallery/`)
```
Format: [category]-[project-id]-[description].jpg

Examples:
✅ new-construction-001-modern-composite-deck.jpg
✅ restoration-002-cedar-deck-refinish.jpg  
✅ staining-003-redwood-natural-finish.jpg
✅ custom-design-004-multi-level-pergola.jpg
```

### 🔄 **Before/After Images** (`/images/before-after/`)
```
Format: [category]-[project-id]-[before|after]-[description].jpg

Examples:
✅ restoration-001-before-weathered-cedar.jpg
✅ restoration-001-after-restored-cedar.jpg
✅ construction-002-before-old-wooden-deck.jpg  
✅ construction-002-after-modern-composite.jpg
✅ staining-003-before-faded-deck.jpg
✅ staining-003-after-fresh-stain.jpg
```

### 🏠 **Hero & About Images** 
```
hero-main-background.jpg         # Main hero background
hero-deck-construction.jpg       # Hero section imagery
about-team-photo.jpg            # Team photo
about-equipment.jpg             # Professional equipment
about-workshop.jpg              # Workshop/facility
```

### 👥 **Testimonial Images** (optional)
```
testimonial-[customer-name]-project.jpg

Examples:
testimonial-sarah-johnson-deck.jpg
testimonial-michael-chen-composite.jpg
```

## 📋 **Project Categories**

### **New Construction** (`new-construction/`)
- Custom deck builds from scratch
- Multi-level decks
- Composite/cedar/redwood construction
- Modern designs with lighting/features

### **Restoration** (`restoration/`)  
- Complete deck makeovers
- Board replacement
- Structural repairs
- Weathered deck revival

### **Staining & Sealing** (`staining/`)
- Fresh stain applications
- Color changes  
- Protective sealing
- Maintenance projects

### **Custom Design** (`custom-design/`)
- Unique architectural features
- Built-in seating/planters
- Pergolas and shade structures
- Luxury resort-style designs

## 🎨 **Image Specifications**

### **Recommended Sizes:**
- **Gallery**: 800x600px minimum (4:3 aspect ratio)
- **Before/After**: 600x400px minimum (3:2 aspect ratio)  
- **Hero**: 1920x1080px (16:9 aspect ratio)
- **File format**: JPG (optimized for web, ~100-200KB per image)

### **Quality Guidelines:**
- ✅ High resolution, good lighting
- ✅ Clean, professional appearance
- ✅ Multiple angles when possible
- ✅ Show context (surrounding area)
- ❌ Avoid blurry or dark images
- ❌ No personal/private information visible

## 🚀 **Usage in Code**

### Gallery Component:
```typescript
// Will automatically load from:
/images/gallery/new-construction/
/images/gallery/restoration/
/images/gallery/staining/
/images/gallery/custom-design/
```

### Before/After Component:
```typescript  
// Pairs will be matched by project-id:
before: /images/before-after/restoration/restoration-001-before-*.jpg
after:  /images/before-after/restoration/restoration-001-after-*.jpg
```

## 📤 **Ready to Upload!**

1. 📁 Organize your photos by category
2. 🏷️ Rename following the convention above
3. 📋 Upload to appropriate folders
4. ✅ Update me when ready - I'll modify the components to use your real images!

---
*Last updated: 2025-08-29*