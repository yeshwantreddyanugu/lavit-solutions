import React from 'react';
import { AnimatedElement } from '../animations/AnimatedElement';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../constants/data';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section bg-white">
      <div className="container-custom">
        <AnimatedElement type="fadeIn">
          <h2 className="section-title text-center">Our Projects</h2>
          <p className="section-subtitle text-center mx-auto">
            A showcase of our diverse portfolio across all divisions, demonstrating our expertise and commitment to excellence.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <AnimatedElement 
              key={project.id} 
              type="fadeIn" 
              delay={index * 0.1}
            >
              <ProjectCard
                title={project.title}
                type={project.type}
                scale={project.scale}
                imageSrc={project.imageSrc}
              />
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement type="fadeIn" delay={0.3} className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Discuss Your Project
          </a>
        </AnimatedElement>
      </div>
    </section>
  );
};