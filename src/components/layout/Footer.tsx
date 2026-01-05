import React from 'react';
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 items-start">
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
              <a href="https://www.facebook.com/profile.php?id=61585268319686" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/hammerandhewllc/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
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
                <a
                  href="https://www.google.ru/maps/place/Hammer+%26+Hew/@39.9677477,-75.1412168,17z/data=!3m1!4b1!4m6!3m5!1s0x89c6c987fb1332ef:0x8ef3fec8d0cf4e78!8m2!3d39.9677477!4d-75.1386419!16s%2Fg%2F11xv0bz1k2?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  Philadelphia, Pennsylvania
                </a>
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
                  <a
                    href="/PA Home.PNG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Licensed
                  </a>
                  <span className="mx-1">&</span>
                  <a
                    href="/liability.PNG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Insured
                  </a>
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

          {/* Service Areas */}
          <div className="flex flex-col h-full">
            <h3 className="font-heading text-lg font-semibold mb-6 text-white">Service Areas</h3>
            <div className="space-y-2 text-sm text-gray-300 flex-grow">
               <p className="font-medium text-white mb-2">Philadelphia & Surrounding:</p>
               <ul className="space-y-1">
                 <li>West Chester</li>
                 <li>King of Prussia</li>
                 <li>Bensalem</li>
                 <li>Norristown</li>
                 <li>Ardmore</li>
                 <li>Drexel Hill</li>
                 <li>Upper Darby</li>
                 <li>Havertown</li>
                 <li>Media</li>
                 <li>Wayne</li>
               </ul>
               <p className="text-xs text-gray-400 mt-2 italic">+ More across PA</p>
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
                <a
                  href="/PA Home.PNG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-white underline transition-colors"
                >
                  License №064383
                </a>
                <span className="text-emerald-400">HICR number: T284</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;