import React, { useState, useEffect } from 'react';

interface Slide {
  id: number;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  year: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Aero Heights',
    location: 'Gulshan, Dhaka',
    description: 'A luxurious 25-story residential masterpiece featuring premium amenities, private infinity pools, and panoramic views of Gulshan Lake.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    year: '2024'
  },
  {
    id: 2,
    title: 'Skyview Plaza',
    location: 'Banani, Dhaka',
    description: 'An architectural marvel combining premium corporate suites, designer fashion brands, and a signature sky garden restobar.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    year: '2023'
  },
  {
    id: 3,
    title: 'The Green Oasis',
    location: 'Bashundhara R/A, Dhaka',
    description: 'A sustainable residential sanctuary built with eco-friendly materials, vertical forests, and a self-sufficient solar power grid.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    year: '2025'
  },
  {
    id: 4,
    title: 'Dhanmondi Lakefront',
    location: 'Dhanmondi, Dhaka',
    description: 'Exquisite lake-facing residences featuring floor-to-ceiling glass, Italian marble flooring, and smart-home integrated automation.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    year: '2024'
  }
];

const BuildingSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-xl h-[450px] md:h-[550px] group transition-all duration-300 hover:shadow-2xl"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      id="constructed-buildings-slideshow"
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
              }`}
            >
              {/* Image */}
              <img
                src={slide.imageUrl}
                alt={slide.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              
              {/* Dark Gradient Overlay for higher text readability and vibrancy */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/45 to-transparent z-11"></div>

              {/* Dynamic Info Box */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 text-white flex flex-col md:flex-row md:items-end justify-between gap-6 transform translate-y-0 transition-transform duration-500">
                <div className="max-w-2xl">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full text-xs font-semibold tracking-wide bg-amber-500 text-slate-950 uppercase">
                    <span>Constructed Building</span>
                    <span className="w-1 h-1 rounded-full bg-slate-950"></span>
                    <span>{slide.year}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 drop-shadow-md">
                    {slide.title}
                  </h3>
                  <p className="text-amber-400 font-semibold mb-3 flex items-center gap-1.5">
                    <span className="text-lg">📍</span> {slide.location}
                  </p>
                  <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-xl text-shadow-sm">
                    {slide.description}
                  </p>
                </div>

                <div className="hidden md:block">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-center min-w-[120px]">
                    <div className="text-xs text-slate-300 uppercase tracking-widest font-bold">Status</div>
                    <div className="text-base font-bold text-emerald-400 mt-1 flex items-center justify-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Completed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide Navigation Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 active:bg-white/60 text-white backdrop-blur-md border border-white/15 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
        aria-label="Previous property"
        id="prev-slide-btn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 active:bg-white/60 text-white backdrop-blur-md border border-white/15 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
        aria-label="Next property"
        id="next-slide-btn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Indicators Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex ? 'bg-amber-500 w-8' : 'bg-white/45 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            id={`indicator-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BuildingSlideshow;
