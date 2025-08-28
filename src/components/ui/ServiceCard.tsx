import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  startingPrice: string;
  features: string[];
  ctaText?: string;
  popular?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  startingPrice,
  features,
  ctaText = "Get Quote",
  popular = false,
}) => {
  return (
    <div className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 h-full flex flex-col ${
      popular ? 'ring-2 ring-green-800 ring-opacity-50' : ''
    }`}>
      
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-green-800 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </div>
        </div>
      )}

      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-800 to-amber-700 rounded-2xl mb-6">
        <Icon className="w-8 h-8 text-white" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-2xl font-heading font-semibold text-gray-800 mb-4">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-800 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price and CTA */}
      <div className="mt-auto pt-6 border-t border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-sm text-gray-500">Starting from</span>
            <div className="text-2xl font-bold text-gray-800">
              {startingPrice}
            </div>
          </div>
        </div>
        
        <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
          popular 
            ? 'bg-green-800 text-white hover:bg-amber-700' 
            : 'bg-gray-50 text-gray-800 hover:bg-green-800 hover:text-white border border-gray-200 hover:border-green-800'
        }`}>
          {ctaText}
        </button>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-800/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
    </div>
  );
};

export default ServiceCard;