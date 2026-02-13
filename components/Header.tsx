import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
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
    { label: 'תחומי עיסוק', href: '#solutions' },
    { label: 'שירותים', href: '#services' },
    { label: 'טכנולוגיה', href: '#technology' },
    { label: 'אודות', href: '#about' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-pulse-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity animate-pulse-slow"></div>
            <div className="relative bg-white rounded-full p-2 border border-pulse-500/20 shadow-sm">
              <Leaf className="w-6 h-6 text-pulse-500 fill-pulse-500" />
            </div>
          </div>
          <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-gray-900' : 'text-gray-900 md:text-gray-900'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
            PULSE
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className={`text-base font-medium transition-colors relative after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-0.5 after:bg-pulse-500 after:transition-all hover:after:w-full ${isScrolled ? 'text-gray-600 hover:text-pulse-600' : 'text-gray-700 hover:text-pulse-600'}`}
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" size="sm" href="#contact">
            קבע פגישה
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden shadow-xl"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-lg font-medium text-gray-700 hover:text-pulse-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact"
                className="text-lg font-medium text-gray-700 hover:text-pulse-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                צור קשר
              </a>
              <Button href="#contact" className="w-full justify-center" onClick={() => setIsMobileMenuOpen(false)}>
                קבע פגישה
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};