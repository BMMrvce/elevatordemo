import React from 'react';

interface ElevatorDoorsProps {
  isOpen: boolean;
}

const ElevatorDoors: React.FC<ElevatorDoorsProps> = ({ isOpen }) => {
  return (
    <div className="fixed inset-0 z-40 pointer-events-none flex">
      {/* Left Door */}
      <div 
        className={`
          w-1/2 h-full bg-warm-900/95 backdrop-blur-3xl relative overflow-hidden transition-transform duration-[2000ms] ease-in-out z-50 border-r border-saffron-dark/30
          ${isOpen ? '-translate-x-full' : 'translate-x-0'}
        `}
      >
        {/* Saffron Glow Line */}
        <div className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-saffron-light via-saffron-DEFAULT to-saffron-dark shadow-[0_0_20px_rgba(255,153,51,0.5)]"></div>
        
        <div className="absolute inset-0 flex items-center justify-end px-10">
          <div className="text-8xl font-display font-bold text-saffron-DEFAULT/10 tracking-tighter">ASC</div>
        </div>
      </div>

      {/* Right Door */}
      <div 
        className={`
          w-1/2 h-full bg-warm-900/95 backdrop-blur-3xl relative overflow-hidden transition-transform duration-[2000ms] ease-in-out z-50 border-l border-saffron-dark/30
          ${isOpen ? 'translate-x-full' : 'translate-x-0'}
        `}
      >
        {/* Saffron Glow Line */}
        <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-saffron-light via-saffron-DEFAULT to-saffron-dark shadow-[0_0_20px_rgba(255,153,51,0.5)]"></div>
        
        <div className="absolute inset-0 flex items-center justify-start px-10">
          <div className="text-8xl font-display font-bold text-saffron-DEFAULT/10 tracking-tighter">END</div>
        </div>
      </div>
    </div>
  );
};

export default ElevatorDoors;