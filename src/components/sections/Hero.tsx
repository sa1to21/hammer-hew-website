import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, FileText, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const trustBadges = [
    { icon: Calendar, text: "5+ Years Experience" },
    { icon: Shield, text: "Licensed & Insured" },
    { icon: FileText, text: "Free Detailed Estimates" },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden border-b border-slate-200/20 shadow-sm">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero/main.jpg" 
          alt="Professional deck construction" 
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
          
          {/* Main Content - Centered */}
          <motion.div 
            className="space-y-10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transform Your Backyard Into Your Family's 
                <span className="text-emerald-400"> Favorite Place</span>
              </motion.h1>
              
              <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed mb-8 max-w-2xl mx-auto text-center">
                Custom deck construction & restoration that lasts generations. 
                Professional craftsmanship with premium materials and unmatched warranty.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              {trustBadges.map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg"
                  >
                    <IconComponent className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-800">
                      {badge.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center w-full">
              <button 
                className="btn-primary text-xl px-12 py-5 mx-auto"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Free Estimate
              </button>
            </div>

            {/* Social Proof */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 max-w-sm mx-auto w-full">
              <div className="flex items-center justify-center space-x-4 mb-2">
                <div className="flex justify-center">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-800">4.9/5</span>
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