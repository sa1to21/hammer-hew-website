import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "(555) 123-4567",
      secondary: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      action: "tel:(555)123-4567",
      color: "text-green-800",
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@hammerandhew.com",
      secondary: "We respond within 2 hours",
      action: "mailto:info@hammerandhew.com",
      color: "text-amber-700",
    },
    {
      icon: MapPin,
      title: "Service Area",
      primary: "Bay Area, California",
      secondary: "Free consultations within 25 miles",
      action: "#",
      color: "text-yellow-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={index}
                    href={method.action}
                    className="group bg-gray-50 hover:bg-white rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 ${method.color} bg-current bg-opacity-10 rounded-xl flex items-center justify-center group-hover:bg-opacity-20 transition-colors`}>
                        <IconComponent className={`w-6 h-6 ${method.color}`} />
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

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-green-800 to-amber-700 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <MessageSquare className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Emergency Repairs</h3>
              </div>
              <p className="text-green-100 mb-4">
                Deck safety emergency? We offer 24/7 emergency repair services 
                for urgent structural issues.
              </p>
              <button className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call Emergency Line
              </button>
            </div>
          </div>

          {/* Right Side - CTA and Additional Form */}
          <div className="space-y-8">
            {/* Quick Contact Card */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-heading text-gray-800 mb-4">
                Get Your Free Estimate
              </h3>
              <p className="text-gray-600 mb-6">
                Already filled out our main form? Call us directly or send a quick message below.
              </p>
              
              {/* Simple Contact Form */}
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                  />
                </div>
                <textarea
                  placeholder="Quick message about your project..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent resize-none"
                />
                <button
                  type="submit"
                  className="w-full btn-primary py-3"
                >
                  Send Quick Message
                </button>
              </form>
            </div>

            {/* Business Hours */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-green-800" />
                <h3 className="text-xl font-semibold text-gray-800">Business Hours</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium text-gray-800">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium text-gray-800">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-gray-500">Emergency Only</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-800 bg-opacity-5 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  ⚡ Typically respond to estimates within 2 business hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="btn-primary text-lg px-8 py-4">
              Schedule Free Consultation
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;