import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 33, 71, 0.7), rgba(0, 33, 71, 0.7)), url(https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-custom text-center text-white z-10">
        <motion.h1
          className="font-playfair font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Powering <span className="text-gold-500">Possibilities</span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          From Events to Infrastructure — We Build. We Connect.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#divisions" 
            className="btn-primary"
          >
            Explore Divisions
          </a>
          <a 
            href="#contact" 
            className="btn-secondary"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary-600/80 to-transparent"></div>
      
      <motion.div 
        className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -20 }}
        transition={{ 
          duration: 1.5, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      >
        <a href="#about" className="text-white">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </motion.div>
    </section>
  );
};