interface ABTestVariant {
  id: string;
  name: string;
  weight: number; // 0-100 percentage
  data: any;
}

interface ABTest {
  id: string;
  name: string;
  variants: ABTestVariant[];
  isActive: boolean;
}

class ABTesting {
  private tests: Map<string, ABTest> = new Map();
  private userVariants: Map<string, string> = new Map();

  constructor() {
    // Load existing user variants from localStorage
    const saved = localStorage.getItem('ab_test_variants');
    if (saved) {
      this.userVariants = new Map(JSON.parse(saved));
    }
  }

  // Register a new A/B test
  registerTest(test: ABTest): void {
    this.tests.set(test.id, test);
  }

  // Get variant for a user (sticky assignment)
  getVariant(testId: string, userId?: string): ABTestVariant | null {
    const test = this.tests.get(testId);
    if (!test || !test.isActive) return null;

    const userKey = userId || 'anonymous';
    const storageKey = `${testId}_${userKey}`;

    // Check if user already has a variant assigned
    if (this.userVariants.has(storageKey)) {
      const variantId = this.userVariants.get(storageKey)!;
      return test.variants.find(v => v.id === variantId) || null;
    }

    // Assign new variant based on weights
    const variant = this.selectVariantByWeight(test.variants);
    if (variant) {
      this.userVariants.set(storageKey, variant.id);
      this.saveVariants();
    }

    return variant;
  }

  // Select variant based on weight distribution
  private selectVariantByWeight(variants: ABTestVariant[]): ABTestVariant | null {
    const totalWeight = variants.reduce((sum, v) => sum + v.weight, 0);
    if (totalWeight === 0) return variants[0] || null;

    const random = Math.random() * totalWeight;
    let currentWeight = 0;

    for (const variant of variants) {
      currentWeight += variant.weight;
      if (random <= currentWeight) {
        return variant;
      }
    }

    return variants[variants.length - 1] || null;
  }

  // Track conversion/event
  trackEvent(testId: string, eventName: string, userId?: string): void {
    const userKey = userId || 'anonymous';
    const storageKey = `${testId}_${userKey}`;
    const variantId = this.userVariants.get(storageKey);

    if (variantId) {
      // In a real implementation, you'd send this to your analytics service
      console.log('AB Test Event:', {
        testId,
        variantId,
        eventName,
        userId: userKey,
        timestamp: new Date().toISOString()
      });

      // Store event locally for demo purposes
      const events = JSON.parse(localStorage.getItem('ab_test_events') || '[]');
      events.push({
        testId,
        variantId,
        eventName,
        userId: userKey,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('ab_test_events', JSON.stringify(events));
    }
  }

  // Save variants to localStorage
  private saveVariants(): void {
    localStorage.setItem('ab_test_variants', JSON.stringify([...this.userVariants]));
  }

  // Get analytics data for a test
  getAnalytics(testId: string): any {
    const events = JSON.parse(localStorage.getItem('ab_test_events') || '[]');
    const testEvents = events.filter((e: any) => e.testId === testId);

    const analytics = testEvents.reduce((acc: any, event: any) => {
      const { variantId, eventName } = event;
      
      if (!acc[variantId]) {
        acc[variantId] = { views: 0, conversions: 0, events: {} };
      }
      
      if (eventName === 'view') {
        acc[variantId].views++;
      } else if (eventName === 'conversion') {
        acc[variantId].conversions++;
      }
      
      if (!acc[variantId].events[eventName]) {
        acc[variantId].events[eventName] = 0;
      }
      acc[variantId].events[eventName]++;
      
      return acc;
    }, {});

    // Calculate conversion rates
    Object.keys(analytics).forEach(variantId => {
      const data = analytics[variantId];
      data.conversionRate = data.views > 0 ? (data.conversions / data.views * 100).toFixed(2) : '0.00';
    });

    return analytics;
  }

  // Reset user's test assignments (for testing purposes)
  resetUser(userId?: string): void {
    const userKey = userId || 'anonymous';
    const keysToDelete: string[] = [];
    
    for (const [key] of this.userVariants) {
      if (key.includes(userKey)) {
        keysToDelete.push(key);
      }
    }
    
    keysToDelete.forEach(key => this.userVariants.delete(key));
    this.saveVariants();
  }
}

// Global AB Testing instance
export const abTesting = new ABTesting();

// React hook for A/B testing
export const useABTest = (testId: string, userId?: string) => {
  const variant = abTesting.getVariant(testId, userId);
  
  const trackView = () => {
    abTesting.trackEvent(testId, 'view', userId);
  };
  
  const trackConversion = () => {
    abTesting.trackEvent(testId, 'conversion', userId);
  };
  
  const trackCustomEvent = (eventName: string) => {
    abTesting.trackEvent(testId, eventName, userId);
  };
  
  return {
    variant,
    trackView,
    trackConversion,
    trackCustomEvent
  };
};