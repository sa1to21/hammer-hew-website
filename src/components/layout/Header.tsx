import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="Hammer & Hew" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-green-800 transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:(555)123-4567" 
              className="flex items-center space-x-2 text-green-800 font-semibold hover:text-amber-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </a>
            <button 
              className="btn-primary"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Free Estimate
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-green-800"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-800 hover:text-green-800 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <a 
                href="tel:(555)123-4567" 
                className="flex items-center space-x-2 px-3 py-2 text-green-800 font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </a>
              <button 
                className="btn-primary w-full mx-3 mt-2"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Free Estimate
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;