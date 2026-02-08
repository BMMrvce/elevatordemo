import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ElevatorDoors from './components/ElevatorDoors';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import FloatingActions from './components/FloatingActions';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial entrance animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Wait for door sequence
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-warm-950 text-white selection:bg-saffron-DEFAULT selection:text-black relative min-h-screen">
      
      {/* GLOBAL FIXED BACKGROUND: Continuous Shaft Animation */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Warm Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-warm-900 via-warm-950 to-black animate-gradient-x bg-[length:200%_200%]"></div>
        
        {/* Moving Shaft Wall Image - Blended */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
             <div className="w-full h-[200%] bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center animate-shaft-move"></div>
        </div>
        
        {/* Aesthetic Overlay Mesh/Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-saffron-dark/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-saffron-DEFAULT/10 via-transparent to-transparent"></div>

        {/* Vertical Guide Rails (Gold style) */}
        <div className="absolute left-4 md:left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-saffron-light/20 to-transparent"></div>
        <div className="absolute right-4 md:right-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-saffron-light/20 to-transparent"></div>
      </div>

      {/* Global Transition Doors (Acts as loading screen) */}
      <ElevatorDoors isOpen={!loading} />
      
      {/* Floating Action Buttons */}
      <FloatingActions />

      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-warm-950/80 backdrop-blur-xl py-8 border-t border-saffron-dark/20 text-center flex flex-col gap-2">
        <p className="text-gray-400 text-xs uppercase tracking-widest">
          © 2024 Ascendancy Elevators. All rights reserved.
        </p>
        <a 
          href="https://tantravruksha.in" 
          target="_blank" 
          rel="noreferrer"
          className="text-white text-[10px] uppercase tracking-wider hover:text-saffron-DEFAULT transition-colors font-bold"
        >
          Built by Tantravruksha.in
        </a>
      </footer>
    </div>
  );
};

export default App;