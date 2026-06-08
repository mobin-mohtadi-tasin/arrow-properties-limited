import React from 'react';
import type { Project } from '../types';
import AnimatedSection from './AnimatedSection';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <AnimatedSection>
      <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-500 group" id={`project-card-${project.id}`}>
        <div className="relative overflow-hidden h-60">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
          />
          {/* Tag status badge */}
          <span className="absolute top-4 right-4 bg-blue-600/95 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow">
            Signature Design
          </span>
        </div>
        
        <div className="p-7">
          <h3 className="text-xl font-extrabold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-amber-500 font-bold text-sm mb-4 flex items-center gap-1.5">
            <span>📍</span> {project.location}
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          
          <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-400">
            <span>Completed Handover</span>
            <span className="text-emerald-500 font-extrabold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Verified Active
            </span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectCard;
