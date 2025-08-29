import { lazy, useState, useRef, useEffect } from 'react';

// Lazy load components for better performance
export const LazyGallery = lazy(() => import('../components/sections/Gallery'));
export const LazyProcess = lazy(() => import('../components/sections/Process'));
export const LazyContact = lazy(() => import('../components/sections/Contact'));
// export const LazyBeforeAfterGallery = lazy(() => import('../components/sections/BeforeAfterGallery'));
export const LazyTestimonials = lazy(() => import('../components/sections/Testimonials'));

// Intersection Observer for section animations
export const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

// Image loading optimization
export const optimizedImageProps = (src: string, alt: string) => ({
  src,
  alt,
  loading: 'lazy' as const,
  decoding: 'async' as const,
  style: { contentVisibility: 'auto' }
});