import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div id="hero" className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-transparent">
      
      <div className="z-10 text-center max-w-5xl px-6 pt-20">
        <div className="mb-8 flex justify-center">
            <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-saffron-light to-saffron-dark"></div>
        </div>
        <h2 className="text-saffron-DEFAULT tracking-[0.5em] text-sm md:text-base mb-6 uppercase font-bold animate-pulse">Golden Standard Verticality</h2>
        <h1 className="text-6xl md:text-9xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400 drop-shadow-2xl mb-8 leading-tight">
          ASCENDANCY
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
          The intersection of art, technology, and movement. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-light to-saffron-dark font-semibold">Elevate your perspective.</span>
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
           <button 
             onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}
             className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full border border-saffron-light/30 text-white font-bold tracking-widest uppercase hover:border-saffron-DEFAULT transition-colors"
           >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-saffron-dark to-saffron-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 group-hover:text-black transition-colors">Explore Series</span>
           </button>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-saffron-DEFAULT">
         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </div>
  );
};

export default HeroSection;