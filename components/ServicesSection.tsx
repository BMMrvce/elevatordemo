import React, { useState } from 'react';

interface SpecSheet {
  capacity: string;
  speed: string;
  maxTravel: string;
  pitDepth: string;
  overhead: string;
  driveSystem: string;
  powerSupply: string;
}

interface ModelDetail {
  id: string;
  name: string;
  shortSpecs: string;
  image: string;
  fullSpecs: SpecSheet;
}

interface ServiceCategory {
  id: string;
  title: string;
  desc: string;
  img: string;
  models: ModelDetail[];
}

const CATEGORIES: ServiceCategory[] = [
  {
    id: 'residential',
    title: 'Residential',
    desc: 'Whisper-quiet pneumatic drive systems tailored for luxury homes. Custom finishes available to match your interior design.',
    img: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1000&auto=format&fit=crop',
    models: [
      { 
        id: 'zenith',
        name: "The Zenith Tube", 
        shortSpecs: "Pneumatic Vacuum, 2-Stop, 360° Glass", 
        image: "https://images.unsplash.com/photo-1502005229766-52838abd8ac5?q=80&w=1000&auto=format&fit=crop",
        fullSpecs: {
          capacity: "450 lbs (2 Persons)",
          speed: "30 fpm",
          maxTravel: "35 ft",
          pitDepth: "None (Surface Mount)",
          overhead: "108 inches",
          driveSystem: "Pneumatic Vacuum",
          powerSupply: "220V Single Phase"
        }
      },
      { 
        id: 'manor',
        name: "Manor Classic", 
        shortSpecs: "Hydraulic Drive, Wood Finish, 4-Stop", 
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
        fullSpecs: {
          capacity: "950 lbs",
          speed: "40 fpm",
          maxTravel: "50 ft",
          pitDepth: "8 inches",
          overhead: "96 inches",
          driveSystem: "Inline Gear Drive",
          powerSupply: "230V Single Phase"
        }
      },
      { 
        id: 'urban',
        name: "Urban Compact", 
        shortSpecs: "Cable Drive, Space Saving, Smart Home Ready", 
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
        fullSpecs: {
          capacity: "750 lbs",
          speed: "50 fpm",
          maxTravel: "60 ft",
          pitDepth: "6 inches",
          overhead: "102 inches",
          driveSystem: "Winding Drum",
          powerSupply: "220V"
        }
      },
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial',
    desc: 'High-capacity traction elevators with destination dispatch technology. Optimized for skyscrapers and high-traffic malls.',
    img: 'https://images.unsplash.com/photo-1542665952-14513db15293?q=80&w=1000&auto=format&fit=crop',
    models: [
      { 
        id: 'skyline',
        name: "Skyline Pro", 
        shortSpecs: "High-Speed Traction, 50+ Floors", 
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
        fullSpecs: {
          capacity: "3500 lbs",
          speed: "1000 fpm",
          maxTravel: "1200 ft",
          pitDepth: "8 ft",
          overhead: "15 ft",
          driveSystem: "Gearless Traction",
          powerSupply: "480V 3-Phase"
        }
      },
      { 
        id: 'metro',
        name: "Metro Flow", 
        shortSpecs: "Heavy Traffic, Destination Dispatch", 
        image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1000&auto=format&fit=crop",
        fullSpecs: {
          capacity: "5000 lbs",
          speed: "500 fpm",
          maxTravel: "300 ft",
          pitDepth: "6 ft",
          overhead: "12 ft",
          driveSystem: "Geared Traction",
          powerSupply: "480V 3-Phase"
        }
      },
    ]
  },
  {
    id: 'industrial',
    title: 'Industrial',
    desc: 'Heavy-duty freight solutions capable of lifting up to 20,000 lbs. Rugged durability for factories and warehouses.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop',
    models: [
      { 
        id: 'titan',
        name: "Titan Lift", 
        shortSpecs: "20,000lbs Capacity, Freight Class A", 
        image: "https://images.unsplash.com/photo-1565514020125-69f35075e81d?q=80&w=1000&auto=format&fit=crop",
        fullSpecs: {
          capacity: "20,000 lbs",
          speed: "100 fpm",
          maxTravel: "100 ft",
          pitDepth: "5 ft",
          overhead: "14 ft",
          driveSystem: "Direct Hydraulic",
          powerSupply: "480V 3-Phase"
        }
      },
      { 
        id: 'cargo',
        name: "Cargo Max", 
        shortSpecs: "Automated Loading, Reinforced Steel", 
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1000&auto=format&fit=crop",
        fullSpecs: {
          capacity: "10,000 lbs",
          speed: "150 fpm",
          maxTravel: "150 ft",
          pitDepth: "4 ft",
          overhead: "12 ft",
          driveSystem: "Roped Hydraulic",
          powerSupply: "480V 3-Phase"
        }
      },
    ]
  }
];

const ServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [selectedModel, setSelectedModel] = useState<ModelDetail | null>(null);

  const handleClose = () => {
    setSelectedModel(null);
    setSelectedCategory(null);
  };

  return (
    <div id="services" className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 relative z-10 bg-transparent">
      {/* Semi-transparent background for readability */}
      <div className="absolute inset-0 bg-warm-950/50 -z-10 backdrop-blur-sm"></div>

      <div className="mb-20 text-center">
        <h2 className="text-saffron-DEFAULT tracking-[0.5em] text-sm uppercase font-bold mb-2">Our Expertise</h2>
        <h1 className="text-4xl md:text-5xl font-display text-white">Elevated Solutions</h1>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16 justify-center items-center w-full max-w-7xl">
        {CATEGORIES.map((cat, index) => (
          <div 
            key={cat.id}
            onClick={() => setSelectedCategory(cat)}
            className="group h-[400px] w-full md:w-[300px] perspective-1000 cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative h-full w-full transition-all duration-700 preserve-3d group-hover:rotate-y-180 shadow-[0_0_30px_rgba(255,153,51,0.2)] rounded-2xl">
              {/* Front */}
              <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-saffron-dark/20 bg-warm-900">
                <div className="h-1/2 w-full overflow-hidden">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-900 to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col items-center justify-center h-1/2 bg-warm-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-saffron-dark/5 to-saffron-light/5"></div>
                  <h3 className="text-2xl font-display text-white mb-2 relative z-10">{cat.title}</h3>
                  <div className="h-1 w-12 bg-gradient-to-r from-saffron-dark to-saffron-light rounded mb-4"></div>
                  <p className="text-gray-400 text-sm text-center relative z-10">Click to view models</p>
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-gradient-to-br from-warm-900 to-warm-800 p-6 flex flex-col justify-center items-center border border-saffron-DEFAULT">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <h3 className="text-xl font-bold text-saffron-light mb-4 uppercase tracking-widest relative z-10">Specifications</h3>
                <p className="text-gray-200 text-center leading-relaxed font-serif italic text-sm mb-4 relative z-10">
                  "{cat.desc}"
                </p>
                <div className="px-4 py-2 border border-saffron-DEFAULT text-saffron-DEFAULT text-xs uppercase tracking-widest rounded-full hover:bg-saffron-DEFAULT hover:text-black transition-colors relative z-10 font-bold">
                  Open Gallery
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={handleClose}
          ></div>
          
          <div className="glass-panel w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl relative z-10 animate-fade-in-up shadow-[0_0_50px_rgba(255,153,51,0.2)] bg-warm-950/95 border-saffron-dark/30">
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-saffron-light z-50"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* If no specific model selected, show list */}
            {!selectedModel ? (
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-display text-white mb-2">{selectedCategory.title} Models</h2>
                <p className="text-gray-400 mb-8 max-w-2xl">{selectedCategory.desc}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedCategory.models.map((model, idx) => (
                    <div key={idx} className="bg-warm-900/50 rounded-xl overflow-hidden border border-white/10 hover:border-saffron-DEFAULT transition-colors group flex flex-col hover:shadow-lg hover:shadow-saffron-DEFAULT/10">
                      <div className="h-48 overflow-hidden">
                        <img src={model.image} alt={model.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-white mb-1">{model.name}</h3>
                        <p className="text-sm text-saffron-DEFAULT mb-4">{model.shortSpecs}</p>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedModel(model);
                          }}
                          className="mt-auto w-full py-2 bg-white/5 hover:bg-saffron-DEFAULT hover:text-black text-xs uppercase tracking-widest text-white transition-colors rounded font-bold"
                        >
                          View Spec Sheet
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Detailed Spec Sheet View */
              <div className="p-8 md:p-12 flex flex-col h-full">
                <button 
                  onClick={() => setSelectedModel(null)}
                  className="flex items-center text-saffron-DEFAULT text-sm font-bold uppercase tracking-widest mb-6 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  Back to {selectedCategory.title} Models
                </button>

                <div className="flex flex-col md:flex-row gap-8">
                  {/* Image Side */}
                  <div className="w-full md:w-1/3">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden border border-saffron-dark/30 shadow-2xl">
                      <img src={selectedModel.image} alt={selectedModel.name} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Specs Table Side */}
                  <div className="w-full md:w-2/3">
                    <h2 className="text-4xl font-display text-white mb-2">{selectedModel.name}</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-saffron-dark to-saffron-light mb-6"></div>
                    <p className="text-gray-300 mb-8 italic">"{selectedModel.shortSpecs}"</p>

                    <div className="bg-warm-900/50 rounded-lg overflow-hidden border border-white/10">
                      <table className="w-full text-left border-collapse">
                        <tbody>
                          {[
                            ['Capacity', selectedModel.fullSpecs.capacity],
                            ['Rated Speed', selectedModel.fullSpecs.speed],
                            ['Max Travel', selectedModel.fullSpecs.maxTravel],
                            ['Pit Depth', selectedModel.fullSpecs.pitDepth],
                            ['Overhead', selectedModel.fullSpecs.overhead],
                            ['Drive System', selectedModel.fullSpecs.driveSystem],
                            ['Power Supply', selectedModel.fullSpecs.powerSupply],
                          ].map(([label, value], i) => (
                            <tr key={i} className="border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors">
                              <td className="p-4 text-saffron-DEFAULT/80 font-bold uppercase text-xs tracking-wider w-1/3 bg-white/5">{label}</td>
                              <td className="p-4 text-white font-mono text-shadow-glow">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <button className="mt-8 px-8 py-3 bg-gradient-to-r from-saffron-dark to-saffron-DEFAULT text-black font-bold uppercase tracking-widest rounded hover:shadow-lg hover:shadow-saffron-DEFAULT/40 transition-all hover:scale-105">
                      Download PDF Schematic
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;