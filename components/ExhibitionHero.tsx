import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ExhibitionHeroProps {
  onStart: () => void;
}

const ExhibitionHero: React.FC<ExhibitionHeroProps> = ({ onStart }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax-like Zoom Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-in-out hover:scale-105"
        style={{ backgroundImage: 'url(https://picsum.photos/id/216/1920/1080)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-museum-dark via-museum-dark/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
        <h2 className="text-museum-gold uppercase tracking-[0.3em] text-sm md:text-base mb-4">
          Virtual Exhibition
        </h2>
        <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight drop-shadow-2xl">
          Echoes of <br/> <span className="italic text-museum-gold">History</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
          Step into a curated digital experience. Explore artifacts from ancient civilizations to the modern era in high-fidelity detail.
        </p>
        
        <button 
          onClick={onStart}
          className="tour-start-btn group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-white/30 rounded-full text-white text-lg font-medium tracking-wide overflow-hidden transition-all duration-300 hover:bg-white hover:text-museum-dark hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] focus:outline-none focus:ring-2 focus:ring-museum-gold focus:ring-offset-2 focus:ring-offset-museum-dark"
        >
          <span className="relative z-10">Start Tour</span>
          <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default ExhibitionHero;