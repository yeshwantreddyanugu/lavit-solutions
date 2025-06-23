import React from 'react';
import { ChevronRight } from 'lucide-react';
import { DivisionProps } from '../../types';

export const DivisionCard: React.FC<Omit<DivisionProps, 'delay'>> = ({
  title,
  subtitle,
  description,
  imageSrc,
  ctaText,
  stats
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-card card-hover h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {stats && (
          <div className="absolute top-4 right-4 bg-gold-500 text-white text-sm font-bold px-3 py-1 rounded-full">
            {stats}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-600 mb-1">{title}</h3>
        <p className="text-gold-500 font-medium mb-4">{subtitle}</p>
        <p className="text-gray-600 mb-6">{description}</p>
        <a 
          href="#contact" 
          className="inline-flex items-center text-primary-600 font-medium hover:text-gold-500 transition-all duration-300"
        >
          {ctaText}
          <ChevronRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};