import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Star } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/logo.png" 
              alt="Hammer & Hew" 
              className="h-25 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">
              Professional deck construction and restoration services. 
              Licensed, insured, and committed to quality craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:(917)250-2222" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>(917) 250-2222</span>
              </a>
              <a href="mailto:hammerandhewllc@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>hammerandhewllc@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Philadelphia, Pennsylvania</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <Clock className="w-4 h-4 mt-1" />
                <span>Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">New Deck Construction</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Deck Restoration</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Staining & Sealing</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Custom Design</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Deck Repair</a></li>
            </ul>
          </div>

          {/* Reviews & Trust */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-white">Trusted Service</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="text-gray-300">4.9/5 (150+ reviews)</span>
              </div>
              <div className="text-sm text-gray-300">
                <p>✓ Licensed & Insured</p>
                <p>✓ Quality Guarantee</p>
                <p>✓ Thumbtack Pro</p>
                <p>✓ 5+ Years Experience</p>
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
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
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