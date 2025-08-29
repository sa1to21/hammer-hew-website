import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, RotateCcw, Paintbrush, PenTool } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';
import AnimatedCard from '../ui/AnimatedCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: Hammer,
      title: "New Deck Construction",
      description: "Custom decks built to last generations with premium materials and expert craftsmanship.",
      features: [
        "Design consultation & 3D visualization",
        "Premium materials: Cedar, Redwood, Composite",
        "Engineered foundation systems",
        "Building permit handling",
        "10-year structural warranty"
      ],
      popular: true,
    },
    {
      icon: RotateCcw,
      title: "Deck Restoration",
      description: "Breathe new life into your existing deck with our complete restoration services.",
      features: [
        "Professional assessment & quote",
        "Power washing & surface prep",
        "Board replacement as needed",
        "Premium staining & sealing",
        "5-year finish warranty"
      ],
    },
    {
      icon: Paintbrush,
      title: "Staining & Sealing",
      description: "Protect and beautify your deck with premium finishes that enhance natural wood beauty.",
      features: [
        "Surface preparation & cleaning",
        "Premium stain & sealant products",
        "Color matching & consultation",
        "Weather protection guarantee",
        "3-year finish warranty"
      ],
    },
    {
      icon: PenTool,
      title: "Custom Design",
      description: "3D design and consultation services to plan your perfect outdoor living space.",
      features: [
        "Site measurement & analysis",
        "3D renderings & plans",
        "Material recommendations",
        "Budget estimation",
        "Design revisions included"
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-heading text-gray-800 mb-6">
            Our <span className="text-green-800">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From new construction to restoration, we provide comprehensive deck services 
            with premium materials, expert craftsmanship, and industry-leading warranties.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                popular={service.popular}
              />
            </AnimatedCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading text-gray-800 mb-4">
              Not sure which service you need?
            </h3>
            <p className="text-gray-600 mb-6">
              Our experts will assess your deck and recommend the best solution for your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn-primary"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Schedule Free Consultation
              </button>
              <button className="btn-secondary">
                Call (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;