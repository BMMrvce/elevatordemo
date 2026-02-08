import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <div id="about" className="min-h-screen w-full bg-warm-900 flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden">
       {/* Decorative Background Elements */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-saffron-dark/5 via-transparent to-transparent"></div>
       
       <div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="w-full md:w-1/2 relative group perspective-1000">
             {/* Decorative Frame */}
             <div className="absolute -inset-4 border border-saffron-DEFAULT/20 rounded-xl transform rotate-3 transition-transform duration-700 group-hover:rotate-0"></div>
             <div className="absolute inset-0 bg-saffron-glow transform translate-x-2 translate-y-2 rounded-lg opacity-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
             
             <div className="relative rounded-lg overflow-hidden border border-saffron-dark/30 shadow-2xl h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                  alt="Elevator Engineering Architecture" 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 filter sepia-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-950 via-warm-900/20 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 right-6 bg-warm-950/90 backdrop-blur border border-saffron-DEFAULT/30 p-4 rounded-lg shadow-lg">
                   <p className="text-saffron-light font-display text-xl">Est. 1998</p>
                   <p className="text-gray-400 text-xs uppercase tracking-wider">Heritage of Excellence</p>
                </div>
             </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 text-left">
             <div className="flex items-center gap-4 mb-4">
               <div className="h-[1px] w-12 bg-saffron-DEFAULT"></div>
               <h2 className="text-saffron-DEFAULT tracking-[0.3em] text-sm uppercase font-bold">The Architects of Ascent</h2>
             </div>
             
             <h1 className="text-4xl md:text-5xl font-display text-white mb-8 leading-tight">
               Redefining Vertical <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-light via-saffron-DEFAULT to-saffron-dark">Movement & Luxury</span>
             </h1>
             
             <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
               At Ascendancy, we don't just build elevators; we engineer experiences. 
               Born from a fusion of Swiss precision and Indian craftsmanship, our lifts represent the pinnacle of vertical transportation.
             </p>
             <p className="text-gray-400 text-base leading-relaxed mb-10 font-light">
               We believe that the journey between floors should be as inspiring as the destination itself. Our team of expert engineers and designers collaborate to create bespoke solutions that seamlessly integrate into your architectural vision.
             </p>
             
             {/* Stats Grid */}
             <div className="grid grid-cols-2 gap-y-8 gap-x-12 border-t border-saffron-dark/20 pt-8">
                <div className="group cursor-default">
                   <span className="block text-4xl font-display text-saffron-light mb-1 group-hover:scale-110 origin-left transition-transform duration-300">25+</span>
                   <span className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-saffron-DEFAULT transition-colors">Years of Innovation</span>
                </div>
                <div className="group cursor-default">
                   <span className="block text-4xl font-display text-saffron-light mb-1 group-hover:scale-110 origin-left transition-transform duration-300">5k+</span>
                   <span className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-saffron-DEFAULT transition-colors">Projects Delivered</span>
                </div>
                <div className="group cursor-default">
                   <span className="block text-4xl font-display text-saffron-light mb-1 group-hover:scale-110 origin-left transition-transform duration-300">24/7</span>
                   <span className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-saffron-DEFAULT transition-colors">Support Network</span>
                </div>
                <div className="group cursor-default">
                   <span className="block text-4xl font-display text-saffron-light mb-1 group-hover:scale-110 origin-left transition-transform duration-300">100%</span>
                   <span className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-saffron-DEFAULT transition-colors">Safety Record</span>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default AboutSection;