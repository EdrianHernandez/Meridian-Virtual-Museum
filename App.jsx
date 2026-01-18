import React, { useState } from 'react';
import { MUSEUM_ROOMS } from './constants';
import ExhibitionHero from './components/ExhibitionHero';
import AudioGuidePlayer from './components/AudioGuidePlayer';
import ArtifactHotspots from './components/ArtifactHotspots';
import TourNavigation from './components/TourNavigation';
import { ChevronRight } from 'lucide-react';

const App = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentRoomId, setCurrentRoomId] = useState(MUSEUM_ROOMS[0].id);

  const currentRoom = MUSEUM_ROOMS.find(r => r.id === currentRoomId) || MUSEUM_ROOMS[0];

  const handleStartTour = () => {
    setHasStarted(true);
  };

  const handleRoomSelect = (roomId) => {
    setCurrentRoomId(roomId);
  };

  if (!hasStarted) {
    return <ExhibitionHero onStart={handleStartTour} />;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-museum-dark text-white font-sans selection:bg-museum-gold selection:text-museum-dark">
      
      {/* Main Content Area */}
      <main className="relative w-full h-full">
        {/* Room Background Image */}
        <div 
          key={currentRoom.id} // Key forces re-render for animation
          className="absolute inset-0 w-full h-full animate-fade-in bg-black"
        >
          <img 
            src={currentRoom.imageUrl} 
            alt={currentRoom.name}
            className="w-full h-full object-cover opacity-80 transition-transform duration-[60s] ease-linear scale-100 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-museum-dark/60 via-transparent to-museum-dark/90 pointer-events-none" />
        </div>

        {/* Room Title Overlay */}
        <div className="absolute top-8 left-6 md:top-12 md:left-12 z-20 max-w-lg pointer-events-none">
          <div className="flex items-center gap-2 text-museum-gold mb-2 opacity-0 animate-[fadeIn_0.5s_ease-out_0.5s_forwards]">
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Current Exhibition</span>
            <ChevronRight size={14} />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight drop-shadow-lg opacity-0 animate-[slideUp_0.7s_ease-out_0.7s_forwards]">
            {currentRoom.name}
          </h1>
          <p className="mt-4 text-gray-200 text-sm md:text-base leading-relaxed opacity-0 animate-[fadeIn_0.7s_ease-out_1s_forwards] max-w-md">
            {currentRoom.description}
          </p>
        </div>

        {/* Interactive Layer */}
        <ArtifactHotspots room={currentRoom} />

        {/* Navigation */}
        <TourNavigation 
          rooms={MUSEUM_ROOMS} 
          currentRoomId={currentRoomId} 
          onRoomSelect={handleRoomSelect} 
        />

        {/* Audio Player (Fixed Bottom) */}
        <AudioGuidePlayer currentRoom={currentRoom} />
      </main>

      {/* Global CSS for one-off animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default App;
