import React from 'react';

const FloatingObjects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced Astronaut illustration */}
      <div className="absolute top-1/4 right-1/4 animate-float-enhanced transform hover:scale-110 transition-transform duration-500" 
           style={{ animationDuration: '8s' }}>
        <div className="relative group">
          <div className="w-40 h-48 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 rounded-full relative shadow-2xl shadow-cyan-500/20">
            {/* Helmet */}
            <div className="absolute top-4 left-8 w-20 h-24 bg-gradient-to-b from-cyan-300 via-blue-500 to-blue-700 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-105">
              <div className="w-8 h-8 bg-gradient-radial from-red-400 to-red-600 rounded-full absolute top-3 left-2 animate-pulse shadow-lg shadow-red-500/50"></div>
              <div className="w-10 h-5 bg-gradient-to-r from-blue-800 to-blue-900 rounded absolute bottom-3 left-5 shadow-inner"></div>
              <div className="absolute inset-1 bg-gradient-to-b from-white/20 to-transparent rounded-2xl"></div>
            </div>
            {/* Arms */}
            <div className="absolute -left-8 top-16 w-16 h-8 bg-gradient-to-r from-gray-200 to-gray-400 rounded-full shadow-lg transform transition-all duration-300 group-hover:rotate-12"></div>
            <div className="absolute -right-8 top-16 w-16 h-8 bg-gradient-to-r from-gray-200 to-gray-400 rounded-full shadow-lg transform transition-all duration-300 group-hover:-rotate-12"></div>
            {/* Legs */}
            <div className="absolute -bottom-10 left-8 w-10 h-20 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full shadow-lg"></div>
            <div className="absolute -bottom-10 right-8 w-10 h-20 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full shadow-lg"></div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Space Station */}
      <div className="absolute top-1/3 right-1/6 animate-float-enhanced transform hover:scale-110 transition-transform duration-500" 
           style={{ animationDuration: '10s', animationDelay: '2s' }}>
        <div className="relative group">
          <div className="w-32 h-32 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 rounded-full relative shadow-2xl shadow-blue-500/30">
            {/* Central module */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl shadow-xl transform transition-all duration-300 group-hover:rotate-45">
              <div className="w-6 h-6 bg-gradient-radial from-green-400 to-green-600 rounded-full absolute top-2 left-2 animate-pulse shadow-lg shadow-green-500/50"></div>
              <div className="w-8 h-3 bg-gradient-to-r from-blue-700 to-blue-800 rounded absolute bottom-2 left-4 shadow-inner"></div>
              <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
            </div>
            {/* Solar panels */}
            <div className="absolute -left-12 top-1/2 w-24 h-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 transform -translate-y-1/2 rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow duration-300">
              <div className="absolute inset-1 bg-gradient-to-r from-cyan-300/30 to-blue-400/30 rounded"></div>
            </div>
            <div className="absolute -right-12 top-1/2 w-24 h-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 transform -translate-y-1/2 rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow duration-300">
              <div className="absolute inset-1 bg-gradient-to-r from-cyan-300/30 to-blue-400/30 rounded"></div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-blue-400/20 to-transparent rounded-full blur-xl animate-pulse"></div>
          </div>
          {/* Communication array */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-12 bg-gradient-to-b from-orange-400 to-orange-600 rounded-t-lg shadow-lg shadow-orange-500/30"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Rocket */}
      <div className="absolute bottom-1/3 left-1/4 animate-float-enhanced transform hover:scale-110 transition-transform duration-500" 
           style={{ animationDuration: '9s', animationDelay: '1s' }}>
        <div className="relative group">
          <div className="w-12 h-32 bg-gradient-to-b from-gray-100 via-gray-300 to-gray-400 rounded-t-full shadow-2xl shadow-orange-500/20">
            {/* Engine flames */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-16 h-12 bg-gradient-to-b from-orange-400 via-red-500 to-yellow-600 rounded-b-full blur-sm animate-pulse shadow-lg shadow-orange-500/50"></div>
              <div className="absolute inset-2 bg-gradient-to-b from-yellow-300 to-orange-400 rounded-b-full animate-pulse"></div>
            </div>
            {/* Control module */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-lg shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full absolute top-2 left-3 animate-pulse"></div>
              <div className="w-6 h-2 bg-blue-800 rounded absolute bottom-2 left-1"></div>
            </div>
            {/* Fins */}
            <div className="absolute bottom-8 -left-2 w-4 h-8 bg-gradient-to-r from-gray-300 to-gray-500 transform -skew-x-12 rounded-l shadow-lg"></div>
            <div className="absolute bottom-8 -right-2 w-4 h-8 bg-gradient-to-l from-gray-300 to-gray-500 transform skew-x-12 rounded-r shadow-lg"></div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-t-full"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Equipment */}
      <div className="absolute top-1/2 left-1/6 animate-orbital transform hover:scale-110 transition-transform duration-500" 
           style={{ animationDuration: '7s', animationDelay: '3s' }}>
        <div className="w-20 h-16 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-2xl relative shadow-2xl shadow-green-500/30 group">
          <div className="absolute top-3 left-3 w-4 h-4 bg-gradient-radial from-white to-gray-200 rounded-full shadow-inner"></div>
          <div className="absolute top-3 right-3 w-8 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-lg animate-pulse"></div>
          <div className="absolute bottom-2 left-3 w-12 h-2 bg-gradient-to-r from-gray-600 to-gray-700 rounded shadow-inner"></div>
          <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
          <div className="absolute inset-0 bg-gradient-radial from-green-300/20 to-transparent rounded-2xl blur-lg animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Enhanced Satellite */}
      <div className="absolute bottom-1/4 right-1/3 animate-float-enhanced transform hover:scale-110 transition-transform duration-500" 
           style={{ animationDuration: '11s', animationDelay: '4s' }}>
        <div className="relative group">
          <div className="w-16 h-12 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-lg shadow-2xl shadow-yellow-500/20">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1 animate-pulse"></div>
            </div>
            <div className="absolute inset-1 bg-gradient-to-r from-white/10 to-transparent rounded-lg"></div>
          </div>
          {/* Solar arrays */}
          <div className="absolute -left-8 top-1/2 w-16 h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 transform -translate-y-1/2 rounded shadow-lg shadow-yellow-500/30 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded"></div>
          </div>
          <div className="absolute -right-8 top-1/2 w-16 h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 transform -translate-y-1/2 rounded shadow-lg shadow-yellow-500/30 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded"></div>
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-radial from-yellow-400/20 to-transparent rounded-lg blur-xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Additional enhanced floating objects */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className="absolute animate-float-enhanced transform hover:scale-125 transition-transform duration-300" 
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            animationDuration: `${8 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          <div className={`w-${4 + i} h-${4 + i} rounded-full shadow-2xl ${
            i % 4 === 0 
              ? 'bg-gradient-to-br from-purple-400 to-purple-600 shadow-purple-500/30' 
              : i % 4 === 1
              ? 'bg-gradient-to-br from-orange-400 to-red-500 shadow-orange-500/30'
              : i % 4 === 2
              ? 'bg-gradient-to-br from-cyan-400 to-blue-500 shadow-cyan-500/30'
              : 'bg-gradient-to-br from-pink-400 to-purple-500 shadow-pink-500/30'
          } relative group cursor-pointer`}>
            <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-radial from-current/20 to-transparent rounded-full blur-lg animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingObjects;