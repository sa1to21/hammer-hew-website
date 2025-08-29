import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Instagram, Facebook } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Services & Process', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-24'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="Hammer & Hew" 
              className={`w-auto transition-all duration-300 ${
                isScrolled ? 'h-12' : 'h-20'
              }`}
            />
          </div>

          {/* Centered Navigation */}
          <nav className="hidden md:block flex-1">
            <div className="flex justify-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* CTA Button + Phone + Social */}
          <div className="hidden md:flex items-center space-x-6">
            {/* CTA Button */}
            <button 
              className="btn-primary"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Free Estimate
            </button>
            
            {/* Phone */}
            <a 
              href="tel:(555)123-4567" 
              className="flex items-center space-x-2 text-slate-700 hover:text-emerald-600 transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </a>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3 border-l border-slate-300 pl-6">
              <a 
                href="https://instagram.com/hammerandhew" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/hammerandhew" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-emerald-600"
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
                className="block px-3 py-2 text-slate-700 hover:text-emerald-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200 mt-4">
              {/* CTA Button */}
              <button 
                className="btn-primary w-full mx-3 mb-4"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Free Estimate
              </button>
              
              {/* Phone */}
              <a 
                href="tel:(555)123-4567" 
                className="flex items-center space-x-2 px-3 py-2 text-slate-700 hover:text-emerald-600 font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </a>
              
              {/* Social Icons */}
              <div className="flex items-center justify-center space-x-6 px-3 py-4 border-t border-gray-200 mt-4">
                <a 
                  href="https://instagram.com/hammerandhew" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-pink-500 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://facebook.com/hammerandhew" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;