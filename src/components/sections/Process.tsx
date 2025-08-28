import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  PenTool, 
  FileCheck, 
  Hammer, 
  CheckCircle, 
  Clock,
  ArrowRight
} from 'lucide-react';

interface ProcessStep {
  id: number;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  details: string[];
  duration: string;
  color: string;
}

const Process: React.FC = () => {
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      icon: MessageCircle,
      title: "Free Consultation",
      description: "We start with an on-site visit to understand your vision and assess your space.",
      details: [
        "On-site measurements and assessment",
        "Discuss your needs and preferences", 
        "Material options and recommendations",
        "Preliminary timeline and budget"
      ],
      duration: "1-2 hours",
      color: "text-blue-600"
    },
    {
      id: 2,
      icon: PenTool,
      title: "Design & Proposal",
      description: "Our team creates detailed plans and provides a comprehensive quote.",
      details: [
        "3D renderings and technical drawings",
        "Detailed itemized quote",
        "Material specifications",
        "Project timeline and milestones"
      ],
      duration: "3-5 days",
      color: "text-purple-600"
    },
    {
      id: 3,
      icon: FileCheck,
      title: "Permits & Preparation",
      description: "We handle all permits and prepare your site for construction.",
      details: [
        "Building permit acquisition",
        "Material ordering and delivery",
        "Site preparation and protection",
        "Utility marking and safety setup"
      ],
      duration: "1-2 weeks",
      color: "text-orange-600"
    },
    {
      id: 4,
      icon: Hammer,
      title: "Construction",
      description: "Skilled craftsmen bring your deck to life with daily progress updates.",
      details: [
        "Professional construction team",
        "Daily photo progress reports",
        "Quality inspections at each phase",
        "Minimal disruption to your routine"
      ],
      duration: "5-10 days",
      color: "text-green-600"
    },
    {
      id: 5,
      icon: CheckCircle,
      title: "Final Inspection",
      description: "We ensure everything meets our high standards and your expectations.",
      details: [
        "Thorough quality inspection",
        "Final walkthrough with you",
        "Warranty documentation",
        "Maintenance guidelines and tips"
      ],
      duration: "1 day",
      color: "text-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-heading text-gray-800 mb-6">
            Our <span className="text-green-800">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We've refined our 5-step process over 15+ years to ensure your deck project 
            is completed on time, within budget, and exceeds your expectations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>

          {/* Process Steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.id}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:space-x-8`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                      {/* Step Number */}
                      <div className={`inline-flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full text-sm font-bold mb-4 ${isEven ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                        {step.id}
                      </div>
                      
                      <h3 className="text-2xl font-heading font-bold text-gray-800 mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Duration */}
                      <div className="flex items-center space-x-2 mb-4 text-sm text-green-800 font-medium">
                        <Clock className="w-4 h-4" />
                        <span>Duration: {step.duration}</span>
                      </div>

                      {/* Details */}
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="flex-shrink-0 my-8 lg:my-0">
                    <div className={`w-16 h-16 ${step.color} bg-current bg-opacity-10 rounded-full flex items-center justify-center shadow-lg relative z-10 bg-white`}>
                      <IconComponent className={`w-8 h-8 ${step.color}`} />
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="w-full lg:w-5/12"></div>

                  {/* Arrow for mobile */}
                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <ArrowRight className="w-6 h-6 text-gray-400 transform rotate-90" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16 bg-gradient-to-br from-green-800 to-amber-700 rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-heading font-bold mb-4">
            Ready to Start Your Deck Project?
          </h3>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            From initial consultation to final inspection, we'll guide you through every step 
            of creating your perfect outdoor space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors text-lg">
              Call (555) 123-4567
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;