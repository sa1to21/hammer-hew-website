import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Wrench, FileText, Clock } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const mainBenefits = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed contractor with $2M general liability insurance. Licensed #XXXXXX"
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "We guarantee the quality of our work and stand behind our craftsmanship."
    },
    {
      icon: FileText,
      title: "Free Estimates",
      description: "No hidden fees. Itemized quotes with material costs."
    },
    {
      icon: Wrench,
      title: "Premium Materials Only",
      description: "Cedar, Redwood, and top-grade composite materials."
    },
    {
      icon: Clock,
      title: "Always On Schedule",
      description: "We complete projects on time, respecting your schedule and deadlines."
    }
  ];



  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-green-50 via-white to-amber-50 border-b border-slate-200/30 shadow-sm">
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
            Why <span className="text-green-800">Choose Us?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just another contractor. We're your neighbors, committed to delivering 
            exceptional craftsmanship and unmatched customer service.
          </p>
        </motion.div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-12 mb-16">
          {mainBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-2xl mb-4 shadow-lg group-hover:bg-emerald-700 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>


        {/* Two Column Layout */}
        {/* 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          // Left - Process Highlights
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-heading font-bold text-gray-800 mb-6">
              Your Peace of Mind is Our Priority
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              We believe in complete transparency and communication throughout every project.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Free Detailed Estimates</h4>
                  <p className="text-gray-600">No hidden fees. Itemized quotes with material costs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Wrench className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Premium Materials Only</h4>
                  <p className="text-gray-600">Cedar, Redwood, and top-grade composite materials.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Daily Progress Updates</h4>
                  <p className="text-gray-600">Photos and progress reports sent to your phone daily.</p>
                </div>
              </div>
            </div>
          </motion.div>

          // Right - Certifications
          <motion.div
            className="bg-gray-50 rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-heading font-bold text-gray-800 mb-6">
              Certifications & Recognition
            </h3>
            
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl border-l-4 border-green-600">
              <p className="text-sm text-gray-600 mb-2">Latest Review:</p>
              <p className="text-gray-800 italic mb-2">
                "Outstanding work! They completed our deck renovation on time and within budget. 
                Highly professional team."
              </p>
              <p className="text-sm text-gray-500">— Sarah M., San Jose</p>
              <div className="flex mt-2">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        */}
      </div>
    </section>
  );
};

export default WhyChooseUs;