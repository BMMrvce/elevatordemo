import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-warm-950/80 backdrop-blur-lg border-saffron-dark/20 py-4 shadow-lg shadow-saffron-dark/10' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-2xl font-display font-bold text-white tracking-widest cursor-pointer group"
          onClick={() => scrollToSection('hero')}
        >
          ASCENDANCY<span className="text-saffron-DEFAULT group-hover:text-saffron-light transition-colors duration-300">.</span>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item === 'Home' ? 'hero' : item.toLowerCase())}
              className="text-sm uppercase tracking-[0.2em] text-gray-300 hover:text-saffron-light transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-saffron-dark to-saffron-light transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 rounded-full border border-saffron-DEFAULT/50 text-saffron-light text-xs uppercase tracking-widest hover:bg-saffron-DEFAULT hover:text-black hover:border-saffron-DEFAULT hover:shadow-[0_0_15px_rgba(255,153,51,0.4)] transition-all duration-300 font-bold"
          >
            Get Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;