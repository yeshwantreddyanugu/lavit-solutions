import React from 'react';
import { AnimatedElement } from '../animations/AnimatedElement';
import { CareerCard } from '../ui/CareerCard';
import { careerPositions } from '../../constants/data';

export const Careers: React.FC = () => {
  return (
    <section id="careers" className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedElement type="slideIn">
            <h2 className="section-title">Join Our Team</h2>
            <p className="mb-8 text-lg">
              At Lavitsolution, we're always looking for talented individuals who share our passion for innovation and excellence. Join us to work on diverse, challenging projects across multiple industries.
            </p>
            
            <blockquote className="border-l-4 border-gold-500 pl-6 italic mb-8">
              <p className="text-xl mb-4">
                "The strength of our company lies in the diversity of our teams and the innovative thinking they bring to every project."
              </p>
              <footer className="font-medium">
                Rajesh Kumar, <span className="text-primary-600">CEO, Lavitsolution</span>
              </footer>
            </blockquote>
            
            <div>
              <h3 className="text-xl font-bold text-primary-600 mb-4">Why Join Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-gold-500 rounded-full w-5 h-5 flex items-center justify-center text-white font-bold mr-3 mt-1">✓</span>
                  <span>Diverse project portfolio across multiple industries</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gold-500 rounded-full w-5 h-5 flex items-center justify-center text-white font-bold mr-3 mt-1">✓</span>
                  <span>Continuous learning and professional development opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gold-500 rounded-full w-5 h-5 flex items-center justify-center text-white font-bold mr-3 mt-1">✓</span>
                  <span>Collaborative, innovative work environment</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gold-500 rounded-full w-5 h-5 flex items-center justify-center text-white font-bold mr-3 mt-1">✓</span>
                  <span>Competitive compensation and benefits</span>
                </li>
              </ul>
            </div>
          </AnimatedElement>
          
          <AnimatedElement type="slideUp" delay={0.2}>
            <div className="bg-white rounded-lg shadow-card p-6">
              <h3 className="text-xl font-bold text-primary-600 mb-6">Current Openings</h3>
              <div className="space-y-4">
                {careerPositions.map((position, index) => (
                  <CareerCard
                    key={position.id}
                    title={position.title}
                    department={position.department}
                    location={position.location}
                    type={position.type}
                  />
                ))}
              </div>
              
              <div className="mt-8">
                <p className="mb-4">Don't see a position that matches your skills?</p>
                <a href="#contact" className="btn-primary w-full">
                  Submit Your Resume
                </a>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};