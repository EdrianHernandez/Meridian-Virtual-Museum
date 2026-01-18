import React from 'react';
import { Map } from 'lucide-react';

const TourNavigation = ({ rooms, currentRoomId, onRoomSelect }) => {
  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Toggle / Title Badge */}
      <div className="bg-museum-charcoal/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg mb-2 cursor-default">
         <Map size={16} className="text-museum-gold" />
         <span className="text-xs font-medium uppercase tracking-widest text-white">Gallery Map</span>
      </div>

      {/* Thumbnails Container */}
      <div className="flex flex-col gap-3 bg-museum-charcoal/40 p-2 rounded-2xl backdrop-blur-sm border border-white/5 transition-all duration-300 hover:bg-museum-charcoal/90">
        {rooms.map((room) => {
          const isActive = room.id === currentRoomId;
          return (
            <button
              key={room.id}
              onClick={() => onRoomSelect(room.id)}
              className={`relative group/thumb w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-museum-gold ${
                isActive 
                  ? 'border-museum-gold shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-105' 
                  : 'border-transparent opacity-70 hover:opacity-100 hover:scale-105'
              }`}
              aria-label={`Go to ${room.name}`}
            >
              <img 
                src={room.imageUrl} 
                alt={room.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-110"
              />
              <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100 group-hover/thumb:opacity-0'}`} />
              
              {/* Tooltip on hover (Desktop) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 bg-black/40">
                <span className="text-[10px] font-bold text-white uppercase text-center px-1">
                  {room.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TourNavigation;
