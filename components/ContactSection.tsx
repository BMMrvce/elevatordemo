import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <div id="contact" className="min-h-screen w-full bg-warm-950 flex flex-col md:flex-row relative">
      {/* Visual Side with Video */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-full relative overflow-hidden group bg-black">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-screen"
          poster="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2020&auto=format&fit=crop"
        >
          <source src="https://cdn.coverr.co/videos/coverr-glass-elevator-descent-5358/1080p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-warm-950 via-transparent to-warm-950/50 flex flex-col items-center justify-center text-center p-8 z-10">
          <h2 className="text-4xl md:text-5xl font-display text-white mb-4 drop-shadow-xl">The Penthouse View</h2>
          <p className="text-saffron-light text-xl italic font-light tracking-wide mb-10">Ready to rise above?</p>
          
          <div className="hidden md:block">
            <div className="inline-block p-6 glass-panel rounded-xl border border-saffron-DEFAULT/20">
               <p className="text-white text-sm tracking-widest uppercase mb-2">Operational HQ</p>
               <p className="text-gray-300 font-serif">123 Skyward Blvd, Metropolis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full md:w-1/2 h-auto md:h-full bg-warm-900 flex items-center justify-center p-8 md:p-16 relative z-10">
         {/* Background gradient blob */}
         <div className="absolute top-10 right-10 w-64 h-64 bg-saffron-dark/10 rounded-full blur-3xl"></div>
         <div className="absolute bottom-10 left-10 w-64 h-64 bg-saffron-light/10 rounded-full blur-3xl"></div>

        <div className="max-w-lg w-full bg-warm-950/50 backdrop-blur-xl p-10 rounded-2xl shadow-2xl relative border border-saffron-DEFAULT/20">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-saffron-dark via-saffron-DEFAULT to-saffron-light rounded-t-2xl"></div>
          <h3 className="text-3xl font-display font-bold mb-6 text-white">Initialize Contact</h3>
          
          <div className="space-y-5">
            <div className="group">
              <label className="block text-xs font-bold uppercase tracking-wider text-saffron-DEFAULT mb-2">Identity</label>
              <input type="text" className="w-full bg-black/30 border border-warm-800 rounded p-3 text-white focus:outline-none focus:border-saffron-light transition-colors" placeholder="Full Name" />
            </div>
            <div className="group">
              <label className="block text-xs font-bold uppercase tracking-wider text-saffron-DEFAULT mb-2">Coordinates</label>
              <input type="email" className="w-full bg-black/30 border border-warm-800 rounded p-3 text-white focus:outline-none focus:border-saffron-light transition-colors" placeholder="Email Address" />
            </div>
            
            <div className="group">
              <label className="block text-xs font-bold uppercase tracking-wider text-saffron-DEFAULT mb-2">Service Requirement</label>
              <select className="w-full bg-black/30 border border-warm-800 rounded p-3 text-gray-300 focus:outline-none focus:border-saffron-light transition-colors">
                 <option value="" disabled selected className="bg-warm-900">Select Installation Type</option>
                 <option value="residential" className="bg-warm-900">Residential Installation</option>
                 <option value="commercial" className="bg-warm-900">Commercial/Office</option>
                 <option value="industrial" className="bg-warm-900">Industrial/Freight</option>
                 <option value="maintenance" className="bg-warm-900">Maintenance & Repair</option>
                 <option value="modernization" className="bg-warm-900">Modernization</option>
              </select>
            </div>

            <div className="group">
              <label className="block text-xs font-bold uppercase tracking-wider text-saffron-DEFAULT mb-2">Transmission</label>
              <textarea rows={3} className="w-full bg-black/30 border border-warm-800 rounded p-3 text-white focus:outline-none focus:border-saffron-light transition-colors" placeholder="Project details..."></textarea>
            </div>
            
            <button className="w-full bg-gradient-to-r from-saffron-DEFAULT to-saffron-light text-black font-bold py-4 mt-4 uppercase tracking-[0.2em] hover:brightness-110 transition-all duration-300 shadow-lg rounded hover:shadow-saffron-DEFAULT/30">
              Dispatch Request
            </button>
            
            {/* Explicit Contact Details in Form Area */}
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-3 text-sm text-gray-400">
               <div className="flex items-center gap-3">
                 <span className="text-saffron-dark">📍</span>
                 <span>123 Skyward Blvd, Metropolis, NY 10012</span>
               </div>
               <div className="flex items-center gap-3">
                 <span className="text-saffron-dark">📞</span>
                 <a href="tel:+15553538283" className="hover:text-white transition-colors">+1 (555) 353-8283</a>
               </div>
               <div className="flex items-center gap-3">
                 <span className="text-saffron-dark">✉️</span>
                 <a href="mailto:contact@ascendancy.com" className="hover:text-white transition-colors">contact@ascendancy.com</a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;