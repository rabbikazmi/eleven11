import React from 'react';

const VideoBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main space background with enhanced effects */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1447433589675-4aaa569f3e05')`,
          filter: 'brightness(0.15) contrast(1.3) saturate(1.2)'
        }}
      />
      
      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/80 to-black/95" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/60" />
      
      {/* Animated constellation effect */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div 
              className="bg-white rounded-full"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                opacity: Math.random() * 0.8 + 0.2,
                boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Floating nebula particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div 
              className={`rounded-full blur-sm ${
                i % 3 === 0 
                  ? 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20' 
                  : i % 3 === 1 
                  ? 'bg-gradient-to-r from-purple-400/20 to-pink-500/20'
                  : 'bg-gradient-to-r from-blue-400/20 to-cyan-500/20'
              }`}
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                opacity: Math.random() * 0.6 + 0.2
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Shooting stars */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <div className="w-1 h-20 bg-gradient-to-b from-white via-cyan-200 to-transparent opacity-30 transform rotate-45 blur-sm" />
          </div>
        ))}
      </div>
      
      {/* Aurora effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 animate-pulse" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-500/10 via-transparent to-pink-500/10 animate-pulse" 
             style={{ animationDuration: '12s', animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default VideoBackground;