import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import MainContactForm from '../ui/MainContactForm';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "(917) 250-2222",
      secondary: "Mon-Sat: 8AM-6PM, Sun: Closed",
      action: "tel:(917)250-2222",
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "hammerandhewllc@gmail.com",
      secondary: "We respond within 1 hour",
      action: "mailto:hammerandhewllc@gmail.com",
    },
    {
      icon: MapPin,
      title: "Service Area",
      primary: "Philadelphia, Pennsylvania",
      secondary: "Free consultations within 25 miles",
      action: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading text-gray-800 mb-6">
            Ready to Start Your 
            <span className="text-green-800"> Deck Project?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch today for your free consultation. We'll discuss your vision, 
            assess your space, and provide a detailed estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Contact Methods */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={index}
                    href={method.action}
                    className="group bg-gray-50 hover:bg-white rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          {method.title}
                        </h3>
                        <p className="text-gray-800 font-medium mb-1">
                          {method.primary}
                        </p>
                        <p className="text-sm text-gray-500">
                          {method.secondary}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Business Hours */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-green-800" />
                <h3 className="text-xl font-semibold text-gray-800">Business Hours</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Monday - Saturday</span>
                  <span className="font-medium text-gray-800">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-gray-500">Emergency Only</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-800 bg-opacity-5 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  ⚡ Typically respond to estimates within 1 hour
                </p>
              </div>
            </div>

          </div>

          {/* Right Side - Main Contact Form */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            {/* Main Contact Form */}
            <MainContactForm />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;