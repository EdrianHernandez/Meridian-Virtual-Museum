import React, { useState } from 'react';
import { Info, X, ExternalLink } from 'lucide-react';
import { Room, Artifact } from '../types';

interface ArtifactHotspotsProps {
  room: Room;
}

const ArtifactHotspots: React.FC<ArtifactHotspotsProps> = ({ room }) => {
  const [activeArtifact, setActiveArtifact] = useState<Artifact | null>(null);

  const handleHotspotClick = (artifact: Artifact) => {
    setActiveArtifact(artifact);
  };

  const closeCard = () => {
    setActiveArtifact(null);
  };

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Hotspots Layer */}
      {room.artifacts.map((artifact) => (
        <button
          key={artifact.id}
          onClick={() => handleHotspotClick(artifact)}
          className="artifact-hotspot absolute w-8 h-8 -ml-4 -mt-4 rounded-full bg-white/10 border border-white/50 backdrop-blur-md flex items-center justify-center cursor-pointer pointer-events-auto transition-transform hover:scale-125 hover:bg-museum-gold/80 hover:border-museum-gold animate-pulse focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          style={{ left: `${artifact.x}%`, top: `${artifact.y}%` }}
          aria-label={`View details for ${artifact.title}`}
        >
          <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
        </button>
      ))}

      {/* Info Card Modal */}
      {activeArtifact && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm pointer-events-auto p-4 transition-opacity duration-300">
          <div className="artifact-info-card relative w-full max-w-2xl bg-museum-charcoal border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100 opacity-100 flex flex-col md:flex-row max-h-[80vh]">
            
            {/* Close Button (Mobile Absolute) */}
            <button 
              onClick={closeCard}
              className="absolute top-4 right-4 z-30 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md md:hidden transition-colors"
            >
              <X size={20} />
            </button>

            {/* Artifact Image Section */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-black">
              <img 
                src={activeArtifact.imageUrl} 
                alt={activeArtifact.title}
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-museum-charcoal via-transparent to-transparent md:bg-gradient-to-r" />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="hidden md:flex justify-between items-start mb-6">
                  <div className="p-2 bg-museum-gold/10 rounded-full text-museum-gold">
                    <Info size={20} />
                  </div>
                  <button 
                    onClick={closeCard}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <h3 className="text-xs font-semibold text-museum-gold uppercase tracking-widest mb-2 mt-2 md:mt-0">
                  Artifact Details
                </h3>
                <h2 className="text-2xl md:text-3xl font-serif text-white mb-4 leading-tight">
                  {activeArtifact.title}
                </h2>
                
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                  {activeArtifact.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <button className="w-full py-3 px-4 bg-museum-gold text-museum-dark font-medium text-sm tracking-wide rounded hover:bg-white transition-colors flex items-center justify-center gap-2 group">
                  <span>Learn More</span>
                  <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button 
                  onClick={closeCard}
                  className="w-full py-3 px-4 bg-transparent border border-white/20 text-white font-medium text-sm tracking-wide rounded hover:bg-white/10 transition-colors"
                >
                  Return to Gallery
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ArtifactHotspots;