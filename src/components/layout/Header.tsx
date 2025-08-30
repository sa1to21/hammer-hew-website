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
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm"
      style={{
        background: isScrolled 
          ? 'rgba(0, 0, 0, 0.2)' 
          : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'blur(4px)',
        boxShadow: isScrolled ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none'
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-24'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#why-choose-us"
              className="block"
            >
              <img 
                src="/logo.png" 
                alt="Hammer & Hew" 
                className="w-auto transition-all duration-300 hover:opacity-80"
                style={{
                  height: isScrolled ? '70px' : '110px'
                }}
              />
            </a>
          </div>

          {/* Centered Navigation */}
          <nav className="hidden md:block flex-1">
            <div className="flex justify-center space-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-white hover:text-emerald-400 transition-colors duration-300 font-medium text-lg group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
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
              Contact Us
            </button>
            
            {/* Phone */}
            <a 
              href="tel:(917)250-2222" 
              className="flex items-center space-x-2 text-white hover:text-emerald-400 transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>(917) 250-2222</span>
            </a>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3 border-l border-white/30 pl-6">
              <a 
                href="https://instagram.com/hammerandhew" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/hammerandhew" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-emerald-400"
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
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-3 text-white hover:text-emerald-400 transition-colors duration-300 font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/20 mt-4 px-3">
              {/* CTA Button */}
              <button 
                className="btn-primary w-full mb-4"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Contact Us
              </button>
              
              {/* Phone */}
              <a 
                href="tel:(917)250-2222" 
                className="flex items-center justify-center space-x-2 py-2 text-white hover:text-emerald-400 font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>(917) 250-2222</span>
              </a>
              
              {/* Social Icons */}
              <div className="flex items-center justify-center space-x-6 px-3 py-4 border-t border-white/20 mt-4">
                <a 
                  href="https://instagram.com/hammerandhew" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://facebook.com/hammerandhew" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-blue-400 transition-colors"
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