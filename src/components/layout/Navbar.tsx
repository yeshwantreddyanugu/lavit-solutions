import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-600 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-white font-playfair text-2xl font-bold">
            Lavit<span className="text-gold-500">solution</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="nav-link">Home</a>
          <div className="relative group">
            <a href="#divisions" className="nav-link flex items-center">
              Divisions <ChevronDown className="ml-1 h-4 w-4" />
            </a>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <a href="#divisions" className="block px-4 py-2 text-primary-600 hover:bg-primary-50">Lavit Events</a>
              <a href="#divisions" className="block px-4 py-2 text-primary-600 hover:bg-primary-50">Lavit Civil</a>
              <a href="#divisions" className="block px-4 py-2 text-primary-600 hover:bg-primary-50">Lavit Solar</a>
              <a href="#divisions" className="block px-4 py-2 text-primary-600 hover:bg-primary-50">Lavit Electrical</a>
              <a href="#divisions" className="block px-4 py-2 text-primary-600 hover:bg-primary-50">Lavit Elevators</a>
              <a href="#divisions" className="block px-4 py-2 text-primary-600 hover:bg-primary-50">Quick Fix Services</a>
            </div>
          </div>
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#careers" className="nav-link">Careers</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div 
        className={`md:hidden bg-primary-600 overflow-hidden`}
        initial={{ height: 0 }}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          <a href="#" className="text-white py-2 px-4 hover:bg-primary-700 rounded" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="text-white py-2 px-4 hover:bg-primary-700 rounded" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#divisions" className="text-white py-2 px-4 hover:bg-primary-700 rounded" onClick={() => setIsMobileMenuOpen(false)}>Divisions</a>
          <a href="#projects" className="text-white py-2 px-4 hover:bg-primary-700 rounded" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
          <a href="#careers" className="text-white py-2 px-4 hover:bg-primary-700 rounded" onClick={() => setIsMobileMenuOpen(false)}>Careers</a>
          <a href="#contact" className="text-white py-2 px-4 hover:bg-primary-700 rounded" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </div>
      </motion.div>
    </header>
  );
};