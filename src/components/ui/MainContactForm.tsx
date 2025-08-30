import React from 'react';
import { Shield, Award } from 'lucide-react';
import ContactForm from './ContactForm';

const MainContactForm: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-heading text-gray-800 mb-6 text-center">
          Get Your Free Estimate
        </h2>
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
  );
};

export default MainContactForm;