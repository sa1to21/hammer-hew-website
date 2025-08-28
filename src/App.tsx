import React from 'react';
import Layout from './components/layout/Layout';
import SEO from './components/common/SEO';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Gallery from './components/sections/Gallery';
import Process from './components/sections/Process';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      <SEO />
      <Layout>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Process />
        <Contact />
      </Layout>
    </>
  );
}

export default App;