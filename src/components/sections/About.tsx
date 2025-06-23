import React from 'react';
import { AnimatedElement } from '../animations/AnimatedElement';

export const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement type="slideIn">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-gold-500/20 rounded-lg"></div>
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" 
                alt="Lavitsolution Leadership Team" 
                className="rounded-lg shadow-lg relative z-10 w-full h-auto object-cover"
                style={{ maxHeight: '500px' }}
              />
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary-600/20 rounded-lg"></div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement type="slideUp" delay={0.2}>
            <h2 className="section-title">Who We Are</h2>
            <p className="mb-6 text-lg">
              Lavitsolution is a dynamic multi-vertical company with a singular vision: to transform industries through innovation, quality, and unparalleled service. Since our inception in 2010, we've grown from a small electrical services provider to a comprehensive solutions partner spanning six core verticals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-bold text-primary-600 mb-3">Our Mission</h3>
                <p>To deliver innovative solutions that exceed expectations and add real value to our clients' projects across all our business verticals.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-600 mb-3">Our Vision</h3>
                <p>To be India's most trusted multi-vertical solutions provider, known for excellence, integrity, and forward-thinking leadership.</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary-600 mb-3">Our Values</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-primary-600">Excellence</h4>
                  <p className="text-sm">In every project, every detail</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-primary-600">Integrity</h4>
                  <p className="text-sm">Transparent business practices</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-primary-600">Innovation</h4>
                  <p className="text-sm">Leading with creative solutions</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-primary-600">Sustainability</h4>
                  <p className="text-sm">Eco-conscious approaches</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-primary-600">Teamwork</h4>
                  <p className="text-sm">Collaborative success</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-primary-600">Customer Focus</h4>
                  <p className="text-sm">Client needs first</p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};