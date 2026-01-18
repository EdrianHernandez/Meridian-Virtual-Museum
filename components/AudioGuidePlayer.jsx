import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, SkipBack, SkipForward } from 'lucide-react';

const AudioGuidePlayer = ({ currentRoom }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [currentTime, setCurrentTime] = useState(0);
  const duration = currentRoom.audioDuration;
  
  // Mock audio interval
  const intervalRef = useRef(null);

  useEffect(() => {
    // Reset when room changes
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, [currentRoom.id]);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, duration]);

  useEffect(() => {
    setProgress((currentTime / duration) * 100);
  }, [currentTime, duration]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="audio-control-bar fixed bottom-0 left-0 right-0 z-40 bg-museum-charcoal/95 border-t border-white/10 backdrop-blur-xl px-4 py-4 md:py-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] transition-transform duration-500">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-8">
        
        {/* Track Info */}
        <div className="flex-shrink-0 text-center md:text-left w-full md:w-48 lg:w-64">
          <p className="text-xs text-museum-gold uppercase tracking-wider mb-1">Now Playing</p>
          <h3 className="text-white font-serif text-lg truncate">{currentRoom.name} Guide</h3>
        </div>

        {/* Controls & Progress */}
        <div className="flex-grow w-full flex flex-col items-center gap-2">
          {/* Buttons */}
          <div className="flex items-center gap-6">
             <button 
               className="text-gray-400 hover:text-white transition-colors focus:outline-none"
               aria-label="Previous Track"
             >
               <SkipBack size={20} />
             </button>
             
             <button 
               onClick={togglePlay}
               className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-museum-dark hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-museum-gold focus:ring-offset-2 focus:ring-offset-museum-charcoal shadow-lg"
               aria-label={isPlaying ? "Pause" : "Play"}
             >
               {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
             </button>

             <button 
               className="text-gray-400 hover:text-white transition-colors focus:outline-none"
               aria-label="Next Track"
             >
               <SkipForward size={20} />
             </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full flex items-center gap-3 text-xs font-mono text-gray-400">
            <span>{formatTime(currentTime)}</span>
            <div className="relative flex-grow h-1 bg-gray-700 rounded-full cursor-pointer group">
               <div 
                 className="absolute top-0 left-0 h-full bg-museum-gold rounded-full" 
                 style={{ width: `${progress}%` }}
               />
               <div 
                 className="absolute top-1/2 -mt-1.5 h-3 w-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"
                 style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
               />
            </div>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Volume (Hidden on small mobile) */}
        <div className="hidden md:flex items-center gap-3 w-32 justify-end">
           <Volume2 size={18} className="text-gray-400" />
           <div className="h-1 w-20 bg-gray-700 rounded-full">
              <div className="h-full w-2/3 bg-gray-400 rounded-full hover:bg-white transition-colors cursor-pointer" />
           </div>
        </div>

      </div>
    </div>
  );
};

export default AudioGuidePlayer;
