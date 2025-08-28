import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Award, Calendar } from 'lucide-react';
import ContactForm from '../ui/ContactForm';

const Hero: React.FC = () => {
  const trustBadges = [
    { icon: Calendar, text: "15+ Years Experience" },
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Award, text: "10-Year Warranty" },
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-green-50 to-amber-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-800/5 via-transparent to-amber-700/5"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-heading text-gray-800 leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transform Your Backyard Into Your Family's 
                <span className="text-green-800"> Favorite Place</span>
              </motion.h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Custom deck construction & restoration that lasts generations. 
                Professional craftsmanship with premium materials and unmatched warranty.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              {trustBadges.map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm"
                  >
                    <IconComponent className="w-5 h-5 text-green-800" />
                    <span className="text-sm font-medium text-gray-800">
                      {badge.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg px-8 py-4">
                View Our Work
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Call (555) 123-4567
              </button>
            </div>

            {/* Social Proof */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 max-w-md">
              <div className="flex items-center space-x-4 mb-2">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-800">4.9/5</span>
              </div>
              <p className="text-sm text-gray-600">
                Trusted by <span className="font-semibold text-green-800">500+ Bay Area families</span>
              </p>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            className="lg:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-md mx-auto lg:mx-0">
              <div className="mb-6">
                <h2 className="text-2xl font-heading text-gray-800 mb-2">
                  Get Your Free Estimate
                </h2>
                <p className="text-gray-600">
                  Start your deck transformation today. No obligation consultation.
                </p>
              </div>
              
              <ContactForm />
              
              {/* Form Footer */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Shield className="w-4 h-4" />
                    <span>No spam</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4" />
                    <span>Free consultation</span>
                  </div>
                </div>
                <p className="text-xs text-center text-gray-400 mt-2">
                  Typically responds within 2 hours during business hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50/50 to-transparent"></div>
    </section>
  );
};

export default Hero;