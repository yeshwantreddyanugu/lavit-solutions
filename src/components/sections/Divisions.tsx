import React from 'react';
import { AnimatedElement } from '../animations/AnimatedElement';
import { DivisionCard } from '../ui/DivisionCard';
import { divisions } from '../../constants/data';

export const Divisions: React.FC = () => {
  return (
    <section id="divisions" className="section bg-gray-50">
      <div className="container-custom">
        <AnimatedElement type="fadeIn">
          <h2 className="section-title text-center">Our Divisions</h2>
          <p className="section-subtitle text-center mx-auto">
            Six specialized verticals working in harmony to deliver comprehensive solutions for diverse needs.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {divisions.map((division, index) => (
            <AnimatedElement 
              key={index} 
              type="slideUp" 
              delay={division.delay}
            >
              <DivisionCard
                title={division.title}
                subtitle={division.subtitle}
                description={division.description}
                imageSrc={division.imageSrc}
                ctaText={division.ctaText}
                stats={division.stats}
              />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};