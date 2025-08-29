// Image Management Utility for Hammer & Hew

export interface ProjectImage {
  id: string;
  category: 'new-construction' | 'restoration' | 'staining' | 'custom-design';
  title: string;
  description: string;
  location?: string;
  year?: string;
  materials?: string[];
  imagePath: string;
  thumbnailPath?: string;
  featured?: boolean;
}

export interface BeforeAfterImage {
  id: string;
  category: 'restoration' | 'construction' | 'staining' | 'expansion';
  title: string;
  description: string;
  location?: string;
  year?: string;
  materials?: string[];
  beforeImage: string;
  afterImage: string;
  featured?: boolean;
}

// Helper function to check if image exists
export const checkImageExists = async (imagePath: string): Promise<boolean> => {
  try {
    const response = await fetch(imagePath, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

// Get all gallery images with real uploaded photos
export const getGalleryImages = (): ProjectImage[] => {
  return [
    {
      id: 'new-construction-001',
      category: 'new-construction',
      title: 'Modern Composite Deck',
      description: 'Custom composite deck construction with premium materials and expert craftsmanship',
      location: 'Bay Area, CA',
      year: '2024',
      materials: ['Composite', 'Modern', 'New Construction'],
      imagePath: '/images/gallery/new-construction/new-001.jpg',
      featured: true
    },
    {
      id: 'new-construction-002',
      category: 'new-construction',
      title: 'Elegant New Construction',
      description: 'Beautiful new deck build with attention to detail and quality materials',
      location: 'Bay Area, CA',
      year: '2024',
      materials: ['New Build', 'Elegant', 'Quality'],
      imagePath: '/images/gallery/new-construction/new-002.jpg',
      featured: true
    },
    {
      id: 'restoration-001',
      category: 'restoration',
      title: 'Professional Deck Restoration',
      description: 'Complete deck restoration bringing new life to weathered decking',
      location: 'Bay Area, CA',
      year: '2024',
      materials: ['Restoration', 'Professional', 'Renewal'],
      imagePath: '/images/gallery/restoration/restoration-001.jpg',
      featured: true
    },
    {
      id: 'restoration-002',
      category: 'restoration',
      title: 'Expert Deck Renovation',
      description: 'Skillful restoration work transforming old decks into beautiful spaces',
      location: 'Bay Area, CA',
      year: '2024',
      materials: ['Renovation', 'Expert', 'Transformation'],
      imagePath: '/images/gallery/restoration/restoration-002.jpg',
      featured: false
    },
    {
      id: 'restoration-003',
      category: 'restoration',
      title: 'Quality Deck Restoration',
      description: 'High-quality restoration services with lasting results',
      location: 'Bay Area, CA',
      year: '2024',
      materials: ['Quality', 'Restoration', 'Lasting'],
      imagePath: '/images/gallery/restoration/restoration-003.jpg',
      featured: false
    },
    {
      id: 'restoration-004',
      category: 'restoration',
      title: 'Premium Deck Restoration',
      description: 'Premium restoration work showcasing our commitment to excellence',
      location: 'Bay Area, CA',
      year: '2024',
      materials: ['Premium', 'Excellence', 'Commitment'],
      imagePath: '/images/gallery/restoration/restoration-004.jpg',
      featured: false
    },
    {
      id: 'restoration-005',
      category: 'restoration',
      title: 'Beautiful Deck Revival',
      description: 'Complete deck revival with professional techniques and quality materials',
      location: 'Bay Area, CA',
      year: '2024',
      materials: ['Revival', 'Professional', 'Beautiful'],
      imagePath: '/images/gallery/restoration/restoration-005.jpg',
      featured: false
    }
  ];
};

// Get all before/after images with real uploaded photos
export const getBeforeAfterImages = (): BeforeAfterImage[] => {
  return [
    {
      id: 'restoration-001',
      category: 'restoration',
      title: 'Complete Deck Restoration',
      description: 'Professional deck restoration bringing new life to weathered decking with expert craftsmanship',
      location: 'Bay Area, CA',
      year: '2024',
      materials: ['Premium Stain', 'Weather Seal', 'Board Replacement'],
      beforeImage: '/images/before-after/restoration/restoration-001-before.jpg',
      afterImage: '/images/before-after/restoration/restoration-001-after.jpg',
      featured: true
    },
    {
      id: 'construction-001',
      category: 'construction',
      title: 'Deck Construction Project',
      description: 'Complete deck transformation from old structure to modern outdoor living space',
      location: 'Bay Area, CA',
      year: '2024',
      materials: ['Quality Materials', 'Professional Installation', 'Modern Design'],
      beforeImage: '/images/before-after/construction/construction-001-before.jpg',
      afterImage: '/images/before-after/construction/construction-001-after.jpg',
      featured: true
    },
    {
      id: 'restoration-002',
      category: 'restoration',
      title: 'Expert Deck Renovation',
      description: 'Skillful restoration work transforming weathered decks into beautiful outdoor spaces',
      location: 'Bay Area, CA',
      year: '2024',
      materials: ['Cedar Restoration', 'Premium Finish', 'Professional Sealing'],
      beforeImage: '/images/before-after/restoration/restoration-002-before.jpg',
      afterImage: '/images/before-after/restoration/restoration-002-after.jpg',
      featured: false
    },
    {
      id: 'restoration-003',
      category: 'restoration',
      title: 'Quality Deck Revival',
      description: 'High-quality restoration services with lasting results and attention to detail',
      location: 'Bay Area, CA',
      year: '2024',
      materials: ['Quality Restoration', 'Expert Techniques', 'Durable Materials'],
      beforeImage: '/images/before-after/restoration/restoration-003-before.jpg',
      afterImage: '/images/before-after/restoration/restoration-003-after.jpg',
      featured: false
    }
  ];
};

// Fallback to placeholder images if real images don't exist
export const getImageWithFallback = (imagePath: string, fallbackUrl: string): string => {
  // In development, always show fallback
  if (import.meta.env.DEV) {
    return fallbackUrl;
  }
  
  // In production, attempt to use real image with fallback
  return imagePath || fallbackUrl;
};

// Generate placeholder URLs for development
export const generatePlaceholderUrl = (
  width: number, 
  height: number, 
  backgroundColor: string, 
  textColor: string, 
  text: string
): string => {
  return `https://via.placeholder.com/${width}x${height}/${backgroundColor}/${textColor}?text=${encodeURIComponent(text)}`;
};

// Image optimization helper
export const getOptimizedImageUrl = (
  imagePath: string, 
  width?: number, 
  quality?: number
): string => {
  // Future: implement image optimization service (like Cloudinary)
  // For now, return original path
  return imagePath;
};

// Batch image loader for preloading
export const preloadImages = (imagePaths: string[]): Promise<void[]> => {
  const promises = imagePaths.map(path => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = path;
    });
  });
  
  return Promise.all(promises);
};

// Get hero images
export const getHeroImages = () => {
  return {
    mainBackground: getImageWithFallback(
      '/images/hero/hero-main-background.jpg',
      generatePlaceholderUrl(1920, 1080, '2D5016', 'FFFFFF', 'Hero Background')
    ),
    deckConstruction: getImageWithFallback(
      '/images/hero/hero-deck-construction.jpg', 
      generatePlaceholderUrl(800, 600, '8B4513', 'FFFFFF', 'Deck Construction')
    )
  };
};

// Get about/company images
export const getAboutImages = () => {
  return {
    teamPhoto: getImageWithFallback(
      '/images/about/about-team-photo.jpg',
      generatePlaceholderUrl(600, 400, '1F2937', 'FFFFFF', 'Our Team')
    ),
    equipment: getImageWithFallback(
      '/images/about/about-equipment.jpg',
      generatePlaceholderUrl(600, 400, '374151', 'FFFFFF', 'Professional Equipment') 
    ),
    workshop: getImageWithFallback(
      '/images/about/about-workshop.jpg',
      generatePlaceholderUrl(600, 400, '4B5563', 'FFFFFF', 'Workshop')
    )
  };
};