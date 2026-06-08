import React from 'react';
import type { Project } from '../types';
import ProjectCard from '../components/ProjectCard';

const projects: Project[] = [
  {
    id: 1,
    title: 'Aero Heights',
    location: 'Gulshan, Dhaka',
    description: 'A luxurious residential tower offering panoramic city views, state-of-the-art amenities, and unparalleled elegance in the heart of the city.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Skyview Plaza',
    location: 'Banani, Dhaka',
    description: 'A modern mixed-use development featuring premium office spaces and high-end retail outlets, designed to be a bustling business hub.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'The Green Oasis',
    location: 'Bashundhara R/A, Dhaka',
    description: 'A serene gated community with lush green landscapes, offering a peaceful retreat from the city\'s hustle with modern family homes.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Dhanmondi Lakefront',
    location: 'Dhanmondi, Dhaka',
    description: 'Exclusive apartments overlooking the scenic Dhanmondi Lake, blending natural beauty with contemporary architectural design.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    title: 'Aero Corporate Tower',
    location: 'Motijheel, Dhaka',
    description: 'A landmark corporate building in the financial district, offering cutting-edge facilities and a prestigious business address.',
    imageUrl: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    title: 'Uttara Tranquil Homes',
    location: 'Uttara, Dhaka',
    description: 'Comfortable and stylish residential complex designed for modern families, featuring parks, community centers, and convenient access to the airport.',
    imageUrl: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80&w=800'
  }
];

const Projects: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-slate-800 animate-fade-in" id="projects-page">
      {/* Mini-Hero Page Banner */}
      <section 
        className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/90"></div>
        <div className="relative z-10 px-6 max-w-3xl mx-auto mt-10">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Exquisite Spaces</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-1 mb-3 tracking-tight">Our Landmark Projects</h1>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Main Catalog */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Our Portfolio</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">Completed & Ongoing Endeavors</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Explore our architectural portfolio standing tall across Dhaka’s premium sectors. Each structure is planned with top safety indices and pristine luxury finishes.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
