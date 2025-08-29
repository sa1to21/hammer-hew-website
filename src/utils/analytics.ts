// Analytics and Performance Monitoring Utility

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  url: string;
  userAgent: string;
}

class Analytics {
  private isProduction: boolean;
  private debugMode: boolean;
  
  constructor() {
    this.isProduction = import.meta.env.PROD;
    this.debugMode = import.meta.env.DEV;
  }

  // Initialize analytics (Google Analytics, etc.)
  init(gaTrackingId?: string) {
    if (this.isProduction && gaTrackingId) {
      // Initialize Google Analytics
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`;
      document.head.appendChild(script);

      const configScript = document.createElement('script');
      configScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaTrackingId}', {
          page_title: document.title,
          page_location: window.location.href
        });
      `;
      document.head.appendChild(configScript);
    }

    this.trackPerformanceMetrics();
  }

  // Track custom events
  trackEvent(eventData: AnalyticsEvent) {
    if (this.debugMode) {
      console.log('📊 Analytics Event:', eventData);
    }

    // Send to Google Analytics
    if (this.isProduction && (window as any).gtag) {
      (window as any).gtag('event', eventData.action, {
        event_category: eventData.category,
        event_label: eventData.label,
        value: eventData.value,
        ...eventData.custom_parameters
      });
    }

    // Store locally for development/testing
    this.storeEventLocally(eventData);
  }

  // Track page views
  trackPageView(path: string, title: string) {
    const event: AnalyticsEvent = {
      event: 'page_view',
      category: 'engagement',
      action: 'page_view',
      custom_parameters: {
        page_path: path,
        page_title: title
      }
    };

    this.trackEvent(event);
  }

  // Track conversions (form submissions, calls, etc.)
  trackConversion(conversionType: string, value?: number) {
    const event: AnalyticsEvent = {
      event: 'conversion',
      category: 'conversion',
      action: conversionType,
      value: value
    };

    this.trackEvent(event);
  }

  // Track user interactions
  trackInteraction(element: string, action: string, label?: string) {
    const event: AnalyticsEvent = {
      event: 'interaction',
      category: 'engagement',
      action: action,
      label: `${element}${label ? ` - ${label}` : ''}`
    };

    this.trackEvent(event);
  }

  // Performance monitoring
  private trackPerformanceMetrics() {
    // Core Web Vitals
    this.measureCoreWebVitals();

    // Custom performance metrics
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.measureLoadPerformance();
      }, 0);
    });
  }

  private measureCoreWebVitals() {
    // Use basic performance API (web-vitals is not installed)
    this.measureBasicPerformance();
  }

  private measureBasicPerformance() {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigation) {
      const metrics = {
        'TTFB': navigation.responseStart - navigation.requestStart,
        'DOM_Load': navigation.domContentLoadedEventEnd - navigation.fetchStart,
        'Full_Load': navigation.loadEventEnd - navigation.fetchStart,
        'DNS_Lookup': navigation.domainLookupEnd - navigation.domainLookupStart,
      };

      Object.entries(metrics).forEach(([name, value]) => {
        this.sendMetric({ name, value, rating: 'good' });
      });
    }
  }

  private measureLoadPerformance() {
    const paintEntries = performance.getEntriesByType('paint');
    paintEntries.forEach((entry) => {
      this.sendMetric({
        name: entry.name,
        value: entry.startTime,
        rating: 'good'
      });
    });
  }

  private sendMetric(metric: any) {
    const perfMetric: PerformanceMetric = {
      name: metric.name,
      value: Math.round(metric.value),
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent
    };

    if (this.debugMode) {
      console.log('📈 Performance Metric:', perfMetric);
    }

    // Send to analytics
    this.trackEvent({
      event: 'performance',
      category: 'performance',
      action: metric.name,
      value: Math.round(metric.value),
      custom_parameters: {
        rating: metric.rating,
        url: window.location.pathname
      }
    });

    // Store locally
    this.storeMetricLocally(perfMetric);
  }

  // Local storage for development/testing
  private storeEventLocally(event: AnalyticsEvent) {
    const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
    events.push({
      ...event,
      timestamp: Date.now(),
      url: window.location.href
    });
    
    // Keep only last 100 events
    if (events.length > 100) {
      events.splice(0, events.length - 100);
    }
    
    localStorage.setItem('analytics_events', JSON.stringify(events));
  }

  private storeMetricLocally(metric: PerformanceMetric) {
    const metrics = JSON.parse(localStorage.getItem('performance_metrics') || '[]');
    metrics.push(metric);
    
    // Keep only last 50 metrics
    if (metrics.length > 50) {
      metrics.splice(0, metrics.length - 50);
    }
    
    localStorage.setItem('performance_metrics', JSON.stringify(metrics));
  }

  // Get analytics data for admin dashboard
  getAnalyticsData() {
    return {
      events: JSON.parse(localStorage.getItem('analytics_events') || '[]'),
      metrics: JSON.parse(localStorage.getItem('performance_metrics') || '[]'),
      abTests: JSON.parse(localStorage.getItem('ab_test_events') || '[]')
    };
  }

  // Clear analytics data
  clearData() {
    localStorage.removeItem('analytics_events');
    localStorage.removeItem('performance_metrics');
    console.log('Analytics data cleared');
  }
}

// Global analytics instance
export const analytics = new Analytics();

// React hook for tracking
export const useAnalytics = () => {
  const trackClick = (element: string, label?: string) => {
    analytics.trackInteraction(element, 'click', label);
  };

  const trackFormStart = (formName: string) => {
    analytics.trackInteraction(formName, 'form_start');
  };

  const trackFormSubmit = (formName: string, success: boolean = true) => {
    analytics.trackConversion(`form_submit_${formName}`, success ? 1 : 0);
  };

  const trackScroll = (percentage: number) => {
    analytics.trackInteraction('page', 'scroll', `${percentage}%`);
  };

  const trackPhoneCall = () => {
    analytics.trackConversion('phone_call', 1);
  };

  const trackEmailClick = () => {
    analytics.trackConversion('email_click', 1);
  };

  return {
    trackClick,
    trackFormStart,
    trackFormSubmit,
    trackScroll,
    trackPhoneCall,
    trackEmailClick
  };
};