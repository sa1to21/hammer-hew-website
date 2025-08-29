import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  ctaText?: string;
  popular?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  ctaText = "Get Free Estimate",
  popular = false,
}) => {
  return (
    <div className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 h-full flex flex-col ${
      popular ? 'ring-2 ring-amber-500 ring-opacity-60' : ''
    }`}>
      
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </div>
        </div>
      )}

      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-2xl mb-6 shadow-lg">
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

      {/* CTA */}
      <div className="mt-auto pt-6">
        <button 
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
            popular 
              ? 'bg-emerald-600 text-white hover:bg-amber-600 shadow-md' 
              : 'bg-white text-slate-800 hover:bg-emerald-600 hover:text-white border border-slate-200 hover:border-emerald-600 shadow-sm hover:shadow-md'
          }`}
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {ctaText}
        </button>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-emerald-50/50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
    </div>
  );
};

export default ServiceCard;