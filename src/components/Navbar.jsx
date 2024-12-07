import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'Templates', href: '#templates' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0118]/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Portfolio Generator
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
                  }`}
                ></span>
                <span
                  className={`absolute w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'top-3'
                  }`}
                ></span>
                <span
                  className={`absolute w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-white transition-colors px-4 py-2 hover:bg-white/5 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
