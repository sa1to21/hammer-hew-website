import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, FileText, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const trustBadges = [
    { icon: Calendar, text: "5+ Years Experience" },
    { icon: Shield, text: "Licensed & Insured" },
    { icon: FileText, text: "Free Estimates" },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden border-b border-slate-200/20 shadow-sm">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero/main.jpg" 
          alt="Professional deck construction and restoration services in Philadelphia PA by Hammer & Hew LLC" 
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
          
          {/* Main Content - Centered */}
          <motion.div 
            className="flex flex-col items-center space-y-8 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Title Section */}
            <div className="text-center w-full">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transform Your Backyard Into Your Family's <span className="text-emerald-400">Favorite Place</span>
              </motion.h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
                Custom deck construction & restoration that lasts generations. 
                Professional craftsmanship with premium materials and service you can trust.
              </p>
            </div>

            {/* CTA Button - Mobile First */}
            <div className="flex sm:hidden w-full justify-center">
              <button 
                className="btn-primary text-xl px-16 py-6"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Free Estimate
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-6 w-full max-w-4xl">
              {trustBadges.map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-center justify-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-3 rounded-lg shadow-lg flex-1 min-w-0"
                  >
                    <IconComponent className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-800 text-center">
                      {badge.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden sm:flex w-full justify-center">
              <button 
                className="btn-primary text-xl px-16 py-6"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Free Estimate
              </button>
            </div>

            {/* Social Proof */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 max-w-sm mx-auto w-full mx-4 sm:mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-2">
                <div className="flex justify-center">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="text-base sm:text-lg font-semibold text-gray-800">4.9/5</span>
              </div>
              <p className="text-sm text-gray-600 text-center">
                <span className="font-semibold text-emerald-700">Top rated by local customers</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
    </section>
  );
};

export default Hero;