import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectProps } from '../../types';

export const ProjectCard: React.FC<Omit<ProjectProps, 'id'>> = ({
  title,
  type,
  scale,
  imageSrc
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative rounded-lg overflow-hidden shadow-card h-[300px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700"
        style={{
          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
        }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-primary-600/90 via-primary-600/60 to-transparent p-6 flex flex-col justify-end"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: isHovered ? 1 : 0.7 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-gold-500 font-medium">{type}</p>
          <p className="text-white/80 text-sm mb-4">{scale}</p>
          
          <motion.button
            className="text-white bg-gold-500 px-4 py-2 rounded-md font-medium inline-flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            Know More
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};