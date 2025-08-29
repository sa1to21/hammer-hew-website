import { Suspense, useEffect } from 'react';
import Layout from './components/layout/Layout';
import SEO from './components/common/SEO';
import Hero from './components/sections/Hero';
import ServicesProcessTabs from './components/sections/ServicesProcessTabs';
import WhyChooseUs from './components/sections/WhyChooseUs';
import LoadingSpinner from './components/ui/LoadingSpinner';
import { LazyGallery, LazyProcess, LazyContact, LazyBeforeAfterGallery, LazyTestimonials } from './utils/lazyLoading';
import { initializeABTests } from './utils/abTestsConfig';
import { analytics } from './utils/analytics';
import AnalyticsDashboard from './components/ui/AnalyticsDashboard';

function App() {
  // Initialize A/B tests and analytics on app start
  useEffect(() => {
    initializeABTests();
    analytics.init(); // Initialize with GA tracking ID when ready: analytics.init('GA_TRACKING_ID');
    analytics.trackPageView(window.location.pathname, document.title);
  }, []);

  return (
    <>
      <SEO />
      <Layout>
        <Hero />
        <WhyChooseUs />
        <Suspense fallback={<LoadingSpinner />}>
          <LazyGallery />
          <LazyTestimonials />
          <ServicesProcessTabs />
          {/* <LazyBeforeAfterGallery /> */}
          <LazyContact />
        </Suspense>
      </Layout>
      {/* <AnalyticsDashboard /> */}
    </>
  );
}

export default App;