import React, { useState, useEffect } from 'react';

const SLIDES = [
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1523772354898-33df4c6e9491?q=80&w=2070&auto=format&fit=crop',
    title: 'Panoramic Glass Lifts',
    subtitle: 'See the world as you rise.'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1541530368-8096f26df806?q=80&w=2070&auto=format&fit=crop',
    title: 'Heritage Restoration',
    subtitle: 'Classic aesthetics, modern engineering.'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop',
    title: 'Future Corporate',
    subtitle: 'Speed meets silence.'
  },
  {
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    title: 'Installation Excellence',
    subtitle: 'Safety is our foundation.'
  }
];

const GallerySection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="gallery" className="h-screen w-full bg-warm-950 relative overflow-hidden flex items-center justify-center">
      
      {/* Background Slides */}
      {SLIDES.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="w-full h-full bg-cover bg-center transform transition-transform duration-[10000ms] scale-110"
            style={{ 
              backgroundImage: `url('${slide.url}')`,
              transform: index === currentSlide ? 'scale(1.05)' : 'scale(1.15)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-warm-950 via-warm-950/40 to-warm-950/10 mix-blend-multiply"></div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute bottom-20 left-6 md:left-20 z-20 max-w-2xl">
        <div className="overflow-hidden mb-2">
           <h3 className="text-saffron-DEFAULT text-sm tracking-[0.5em] uppercase font-bold animate-pulse">Project Showcase</h3>
        </div>
        <div className="overflow-hidden">
          <h1 
            key={currentSlide}
            className="text-5xl md:text-7xl font-display text-white mb-4 animate-fade-in-up"
          >
            {SLIDES[currentSlide].title}
          </h1>
        </div>
        <p 
          key={currentSlide + '-sub'}
          className="text-xl text-gray-300 font-light animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          {SLIDES[currentSlide].subtitle}
        </p>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center gap-4 z-30">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1 transition-all duration-300 rounded-full ${
              idx === currentSlide ? 'w-16 bg-gradient-to-r from-saffron-dark to-saffron-light' : 'w-8 bg-white/20 hover:bg-white'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={() => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white/30 hover:text-saffron-light transition-colors z-30"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button 
        onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white/30 hover:text-saffron-light transition-colors z-30"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" /></svg>
      </button>

    </div>
  );
};

export default GallerySection;