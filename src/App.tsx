import { Suspense, useEffect, lazy } from 'react';
import Layout from './components/layout/Layout';
import SEO from './components/common/SEO';
import Hero from './components/sections/Hero';
import LoadingSpinner from './components/ui/LoadingSpinner';
import { LazyGallery, LazyContact, LazyTestimonials } from './utils/lazyLoading';
import { initializeABTests } from './utils/abTestsConfig';
import { analytics } from './utils/analytics';

const LazyServicesProcessTabs = lazy(() => import('./components/sections/ServicesProcessTabs'));
const LazyWhyChooseUs = lazy(() => import('./components/sections/WhyChooseUs'));

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
        <Suspense fallback={<LoadingSpinner />}>
          <LazyWhyChooseUs />
          <LazyGallery />
          <LazyTestimonials />
          <LazyServicesProcessTabs />
          {/* <LazyBeforeAfterGallery /> */}
          <LazyContact />
        </Suspense>
      </Layout>
    </>
  );
}

export default App;