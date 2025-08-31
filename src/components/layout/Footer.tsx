import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Star } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          {/* Company Info */}
          <div className="flex flex-col h-full text-center">
            <div className="mb-6 -mt-6">
              <img 
                src="/logo.png" 
                alt="Hammer & Hew LLC - Professional Deck Construction Philadelphia" 
                className="h-70 w-auto mx-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed flex-grow">
              Professional deck construction and restoration services. 
              Licensed, insured, and committed to quality craftsmanship.
            </p>
            <div className="flex space-x-4 mt-auto justify-center">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col h-full">
            <h3 className="font-heading text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4 flex-grow">
              <a href="tel:(917)250-2222" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">(917) 250-2222</span>
              </a>
              <a href="mailto:hammerandhewllc@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm break-words">hammerandhewllc@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">Philadelphia, Pennsylvania</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div>Mon-Sat: 8AM-6PM</div>
                  <div>Sun: Emergency Only</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col h-full">
            <h3 className="font-heading text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3 flex-grow">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm block">New Deck Construction</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm block">Deck Restoration</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm block">Staining & Sealing</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm block">Custom Design</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm block">Deck Repair</a></li>
            </ul>
          </div>

          {/* Reviews & Trust */}
          <div className="flex flex-col h-full">
            <h3 className="font-heading text-lg font-semibold mb-6 text-white">Trusted Service</h3>
            <div className="space-y-4 flex-grow">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="text-gray-300 text-sm">4.9/5 (150+ reviews)</span>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <p className="flex items-center">
                  <span className="text-emerald-400 mr-2">✓</span>
                  Licensed & Insured
                </p>
                <p className="flex items-center">
                  <span className="text-emerald-400 mr-2">✓</span>
                  Quality Guarantee
                </p>
                <p className="flex items-center">
                  <span className="text-emerald-400 mr-2">✓</span>
                  Thumbtack Pro
                </p>
                <p className="flex items-center">
                  <span className="text-emerald-400 mr-2">✓</span>
                  5+ Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-gray-400">
              © {currentYear} Hammer & Hew. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
                <span className="text-emerald-400">✓ Licensed & Insured</span>
                <span className="text-emerald-400">✓ Free Estimates</span>
                <span className="text-emerald-400">✓ Philadelphia Service Area</span>
                <span>License #XXXXXX</span>
                <span>HICPA #******</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;