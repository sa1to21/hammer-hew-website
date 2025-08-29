import { abTesting } from './abTesting';

// Configure A/B tests for the application
export const initializeABTests = () => {
  
  // Test 1: Hero CTA Button
  abTesting.registerTest({
    id: 'hero_cta_button',
    name: 'Hero CTA Button Test',
    isActive: true,
    variants: [
      {
        id: 'control',
        name: 'Control - Get Free Estimate',
        weight: 50,
        data: {
          text: 'Get Free Estimate',
          baseClasses: 'bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg',
          backgroundColor: '#16a34a',
          textColor: '#ffffff',
          customStyles: {}
        }
      },
      {
        id: 'variant_a',
        name: 'Variant A - Call Now',
        weight: 25,
        data: {
          text: 'Call Now for Free Quote',
          baseClasses: 'bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg',
          backgroundColor: '#d97706',
          textColor: '#ffffff',
          icon: '📞',
          customStyles: {}
        }
      },
      {
        id: 'variant_b',
        name: 'Variant B - Premium Design',
        weight: 25,
        data: {
          text: 'Start Your Dream Deck',
          baseClasses: 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-green-500',
          backgroundColor: 'transparent',
          textColor: '#ffffff',
          icon: '✨',
          customStyles: {
            background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
            boxShadow: '0 4px 15px rgba(22, 163, 74, 0.3)'
          }
        }
      }
    ]
  });

  // Test 2: Service Cards CTA
  abTesting.registerTest({
    id: 'service_card_cta',
    name: 'Service Card CTA Test',
    isActive: true,
    variants: [
      {
        id: 'control',
        name: 'Control - Learn More',
        weight: 50,
        data: {
          text: 'Learn More',
          baseClasses: 'btn-secondary w-full',
          backgroundColor: 'transparent',
          textColor: '#166534',
          customStyles: {}
        }
      },
      {
        id: 'variant_a',
        name: 'Variant A - Get Quote',
        weight: 50,
        data: {
          text: 'Get Quote Now',
          baseClasses: 'bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 w-full',
          backgroundColor: '#16a34a',
          textColor: '#ffffff',
          customStyles: {}
        }
      }
    ]
  });

  // Test 3: Contact Section Headlines
  abTesting.registerTest({
    id: 'contact_headline',
    name: 'Contact Section Headline Test',
    isActive: true,
    variants: [
      {
        id: 'control',
        name: 'Control - Ready to Get Started',
        weight: 33,
        data: {
          headline: 'Ready to Get Started?',
          subheadline: 'Contact us today for your free consultation and estimate.',
          urgency: false
        }
      },
      {
        id: 'variant_a',
        name: 'Variant A - Limited Time Offer',
        weight: 33,
        data: {
          headline: 'Limited Time: Free Design Consultation',
          subheadline: 'Get your 3D deck design mockup absolutely free this month only.',
          urgency: true,
          badge: 'Limited Time Offer'
        }
      },
      {
        id: 'variant_b',
        name: 'Variant B - Social Proof Focus',
        weight: 34,
        data: {
          headline: 'Join 500+ Happy Bay Area Families',
          subheadline: 'See why we\'re the #1 rated deck builders in the Bay Area.',
          urgency: false,
          socialProof: true
        }
      }
    ]
  });

  // Test 4: Testimonials CTA
  abTesting.registerTest({
    id: 'testimonials_cta',
    name: 'Testimonials CTA Test',
    isActive: true,
    variants: [
      {
        id: 'control',
        name: 'Control - Get Your Free Estimate',
        weight: 50,
        data: {
          text: 'Get Your Free Estimate',
          baseClasses: 'bg-green-800 text-white font-semibold px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg',
          backgroundColor: '#166534',
          textColor: '#ffffff',
          customStyles: {}
        }
      },
      {
        id: 'variant_a',
        name: 'Variant A - Schedule Consultation',
        weight: 50,
        data: {
          text: 'Schedule Free Consultation',
          baseClasses: 'bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-amber-700 transition-all duration-300 shadow-lg',
          backgroundColor: '#d97706',
          textColor: '#ffffff',
          icon: '📅',
          customStyles: {}
        }
      }
    ]
  });
};

// A/B Test Analytics Dashboard (for development/admin use)
export const getABTestAnalytics = () => {
  const tests = ['hero_cta_button', 'service_card_cta', 'contact_headline', 'testimonials_cta'];
  const analytics: any = {};
  
  tests.forEach(testId => {
    analytics[testId] = abTesting.getAnalytics(testId);
  });
  
  return analytics;
};

// Reset all A/B test data (for testing purposes)
export const resetABTests = () => {
  abTesting.resetUser();
  localStorage.removeItem('ab_test_events');
  console.log('A/B test data reset');
};

// Development helper: Log current A/B test assignments
export const logCurrentAssignments = () => {
  const assignments = JSON.parse(localStorage.getItem('ab_test_variants') || '[]');
  console.log('Current A/B Test Assignments:', Object.fromEntries(assignments));
};