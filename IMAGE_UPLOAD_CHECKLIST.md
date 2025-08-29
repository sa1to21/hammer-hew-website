# 📋 Image Upload Checklist - Hammer & Hew

## ✅ **Pre-Upload Checklist**

### 📐 **Image Requirements:**
- [ ] **Resolution**: Minimum 800x600px for gallery, 600x400px for before/after
- [ ] **Format**: JPG preferred (optimized for web)
- [ ] **File Size**: 100-200KB per image (compressed for fast loading)
- [ ] **Quality**: Clear, well-lit, professional appearance
- [ ] **Content**: No personal information, license plates, or private details visible

### 🗂️ **Organization Ready:**
- [ ] Images sorted by category (construction, restoration, staining, custom)
- [ ] Before/After pairs have matching project IDs
- [ ] File names follow the naming convention
- [ ] Images show the project clearly with good lighting

## 📁 **Upload Locations & Examples**

### **Gallery Images** → `public/images/gallery/`
```
✅ /gallery/new-construction/new-construction-001-modern-composite.jpg
✅ /gallery/restoration/restoration-002-cedar-refinish.jpg  
✅ /gallery/staining/staining-003-redwood-natural.jpg
✅ /gallery/custom-design/custom-004-multi-level.jpg
```

### **Before/After Pairs** → `public/images/before-after/`
```
✅ /before-after/restoration/restoration-001-before-weathered.jpg
✅ /before-after/restoration/restoration-001-after-restored.jpg
✅ /before-after/construction/construction-002-before-old-deck.jpg
✅ /before-after/construction/construction-002-after-modern.jpg
```

### **Hero & Company** → `public/images/hero/` & `public/images/about/`
```
✅ /hero/hero-main-background.jpg (1920x1080px)
✅ /about/about-team-photo.jpg
✅ /about/about-equipment.jpg
```

## 🔄 **After Upload Process**

### **Step 1**: Upload your images to the appropriate folders
### **Step 2**: Tell me which images you've uploaded
### **Step 3**: I'll update these files to use your real images:
- [ ] `src/components/sections/Gallery.tsx`
- [ ] `src/components/sections/BeforeAfterGallery.tsx`  
- [ ] `src/components/sections/Hero.tsx`
- [ ] `src/utils/imageManager.ts`

## 📊 **Recommended Image Mix**

### **Gallery (Main Portfolio)**: 8-12 images total
- **New Construction**: 3-4 images (your best deck builds)
- **Restoration**: 2-3 images (dramatic transformations)
- **Staining**: 2-3 images (color/finish changes)
- **Custom Design**: 2-3 images (unique features)

### **Before/After**: 4-6 pairs total  
- **Restoration**: 2-3 pairs (most dramatic changes)
- **Construction**: 1-2 pairs (complete transformations)
- **Staining**: 1-2 pairs (color improvements)

### **Hero Section**: 1-2 images
- **Main Background**: Wide shot of beautiful deck
- **Action Shot**: Team working or finished project

### **About Section**: 2-3 images
- **Team Photo**: Professional team picture  
- **Equipment**: Quality tools/machinery
- **Workshop/Facility**: Professional workspace

## 🎯 **Priority Order**

**Phase 1** (Most Important):
1. **Before/After pairs** (2-3 restoration projects)  
2. **Gallery highlights** (4-5 best projects)
3. **Hero background** (1 stunning deck photo)

**Phase 2** (Nice to Have):
4. Remaining gallery images
5. Team/about photos
6. Additional before/after pairs

## 📞 **Ready to Upload?**

1. **Review this checklist** ✅
2. **Prepare your images** following the naming convention
3. **Upload to appropriate folders** in `public/images/`  
4. **Let me know** which images you've uploaded
5. **I'll update the code** to display your real photos!

---

**Questions? Need help with:**
- Image resizing/optimization?
- Naming convention clarification? 
- Folder structure questions?

Just ask! 🚀