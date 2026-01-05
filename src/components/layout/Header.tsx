import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

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
              href="#hero"
              className="block"
            >
              <img 
                src="/logo.webp" 
                alt="Hammer & Hew LLC - Professional Deck Construction Philadelphia" 
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
                  className="relative text-white hover:text-emerald-400 transition-colors duration-300 font-bold text-lg group"
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
                href="https://www.instagram.com/hammerandhewllc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-pink-400 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61585268319686"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-blue-400 transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
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
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/20 shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-4 text-white hover:text-emerald-400 hover:bg-white/10 transition-all duration-300 font-bold text-lg rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-6 border-t border-white/20 mt-6 space-y-4">
              {/* CTA Button */}
              <button 
                className="btn-primary w-full py-4 text-lg font-semibold shadow-lg"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Get Free Estimate
              </button>
              
              {/* Phone */}
              <a 
                href="tel:(917)250-2222" 
                className="flex items-center justify-center space-x-3 py-4 text-white hover:text-emerald-400 hover:bg-white/10 font-medium rounded-lg transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg">(917) 250-2222</span>
              </a>
              
              {/* Social Icons */}
              <div className="flex items-center justify-center space-x-8 py-4 border-t border-white/20">
                <a
                  href="https://www.instagram.com/hammerandhewllc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-pink-400 transition-colors transform hover:scale-110"
                >
                  <FaInstagram className="w-7 h-7" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61585268319686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-blue-400 transition-colors transform hover:scale-110"
                >
                  <FaFacebook className="w-7 h-7" />
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