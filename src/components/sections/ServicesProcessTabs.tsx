import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Hammer, 
  RotateCcw, 
  Paintbrush, 
  PenTool,
  MessageCircle,
  FileCheck,
  CheckCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

const ServicesProcessTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'services' | 'process'>('services');

  const services = [
    {
      icon: Hammer,
      title: "New Deck Construction",
      description: "Custom decks built to last generations with premium materials and expert craftsmanship.",
      features: [
        "Design consultation & 3D visualization",
        "Premium materials: Cedar, Redwood, Composite",
        "We build in compliance with building codes."
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
        "Full or partial surface replacement."
      ],
    },
    {
      icon: Paintbrush,
      title: "Staining & Sealing",
      description: "Protect and beautify your deck with premium finishes that enhance natural wood beauty.",
      features: [
        "Surface preparation & cleaning",
        "Premium stain & sealant products",
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
        "Design revisions included"
      ],
    },
  ];

  const processSteps = [
    {
      id: 1,
      icon: MessageCircle,
      title: "Free Consultation",
      duration: "1-2 hours",
      description: "On-site visit to understand your vision and assess your space."
    },
    {
      id: 2,
      icon: PenTool,
      title: "Design & Proposal",
      duration: "3-5 days",
      description: "Detailed plans and comprehensive quote with 3D renderings."
    },
    {
      id: 3,
      icon: FileCheck,
      title: "Permits & Preparation",
      duration: "1-2 weeks",
      description: "Handle all permits and prepare site for construction."
    },
    {
      id: 4,
      icon: Hammer,
      title: "Construction",
      duration: "5-10 days",
      description: "Skilled craftsmen bring your deck to life with daily updates."
    },
    {
      id: 5,
      icon: CheckCircle,
      title: "Final Inspection",
      duration: "1 day",
      description: "Quality inspection and final walkthrough with warranty documentation."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-heading text-gray-800 mb-8">
            Our <span className="text-emerald-600">Expertise</span>
          </h2>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gray-100 rounded-2xl p-2 flex">
            <button
              onClick={() => setActiveTab('services')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'services'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              What We Do
            </button>
            <button
              onClick={() => setActiveTab('process')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'process'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              How We Work
            </button>
          </div>
        </motion.div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <motion.div
                      key={index}
                      className={`relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 h-full flex flex-col ${
                        service.popular ? 'ring-2 ring-amber-500 ring-opacity-60' : ''
                      }`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {/* Popular Badge */}
                      {service.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <div className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                            Most Popular
                          </div>
                        </div>
                      )}

                      {/* Icon */}
                      <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-xl mb-4 shadow-md">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-heading font-semibold text-gray-800 mb-2">
                          {service.title}
                        </h3>
                        
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-2">
                              <div className="w-1 h-1 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-xs text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === 'process' && (
            <motion.div
              key="process"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Process Steps - Card Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <motion.div
                      key={step.id}
                      className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 h-full flex flex-col"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -left-3">
                        <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                          {step.id}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-xl mb-4 shadow-md">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-heading font-semibold text-gray-800 mb-2">
                          {step.title}
                        </h3>
                        
                        <div className="flex items-center space-x-1 mb-3 text-sm text-emerald-600 font-medium">
                          <Clock className="w-4 h-4" />
                          <span>{step.duration}</span>
                        </div>
                        
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Connection Arrow for desktop */}
                      {index < processSteps.length - 1 && (
                        <div className="hidden xl:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                          <ArrowRight className="w-6 h-6 text-gray-300" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>

        {/* Minimal CTA */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button 
            className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesProcessTabs;