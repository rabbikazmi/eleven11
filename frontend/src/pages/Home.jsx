import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Upload, Camera, ArrowDown, Zap, Shield, Brain, Rocket, Activity, Target, Scan } from 'lucide-react';
import Scene3D from '../components/Scene3D';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Mouse tracking for parallax effects
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    // Periodic glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 8000);

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(glitchInterval);
    };
  }, []);

  const scrollToDetection = () => {
    const detectionSection = document.getElementById('detection-preview');
    detectionSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Hexagonal Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="hexagonal-grid"></div>
        </div>
        
        {/* Matrix Particles */}
        <div className="matrix-bg">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i}
              className="matrix-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Scanning Lines */}
        <div className="scan-lines">
          <div className="scan-line scan-line-1"></div>
          <div className="scan-line scan-line-2"></div>
          <div className="scan-line scan-line-3"></div>
        </div>

        {/* Neural Network Background */}
        <div className="neural-network">
          {Array.from({ length: 30 }).map((_, i) => (
            <div 
              key={i}
              className="neural-node"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="space-y-6 lg:space-y-8">
              
              {/* Terminal Badge - More space from top */}
              <div className="inline-flex items-center px-6 py-3 bg-gray-900/50 border border-gray-800 backdrop-blur-xl rounded-xl font-mono text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-green-400">$ ./initialize_detection_system.sh</span>
              </div>

              {/* Main Headlines with Advanced Typography */}
              <div className="space-y-1 lg:space-y-2">
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight transition-all duration-500 ${glitchActive ? 'glitch-text' : ''}`}>
                  <span className="block text-white tracking-tighter font-mono">
                    DETECT
                  </span>
                  <span className="block bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tighter font-mono">
                    ANALYZE
                  </span>
                  <span className="block text-gray-500 tracking-tighter font-mono">
                    SECURE
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <div className="relative">
                <p className="text-lg lg:text-xl xl:text-2xl text-gray-400 leading-relaxed max-w-2xl font-mono">
                  <span className="text-gray-200">Advanced AI detection</span> for critical space station equipment.
                  <br />
                  <span className="text-white font-semibold">Real-time identification</span> powered by neural networks.
                </p>
                
                {/* Typing Cursor Effect */}
                <div className="absolute -right-2 top-0 w-0.5 h-6 lg:h-8 bg-white animate-pulse"></div>
              </div>

              {/* Tech Specs Pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Activity, text: 'Neural Engine', color: 'border-gray-700 text-gray-300' },
                  { icon: Target, text: '98.01% Precision', color: 'border-gray-700 text-gray-300' },
                  { icon: Scan, text: 'Real-time Scan', color: 'border-gray-700 text-gray-300' }
                ].map((feature, index) => (
                  <div key={index} className={`inline-flex items-center px-3 lg:px-4 py-2 bg-gray-900/30 border ${feature.color} backdrop-blur-sm rounded-lg font-mono text-xs lg:text-sm hover:bg-gray-800/50 transition-all duration-300`}>
                    <feature.icon className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons - Much more space to ensure full visibility */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-4 pb-12 lg:pb-16">
                <Link
                  to="/detection"
                  className="group relative inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 bg-white text-black font-bold text-base lg:text-lg rounded-none border-2 border-white hover:bg-black hover:text-white transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gray-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <Upload className="w-5 h-5 lg:w-6 lg:h-6 mr-3 relative z-10 transform transition-transform duration-300 group-hover:scale-110" />
                  <span className="relative z-10 font-mono">UPLOAD_IMAGE</span>
                </Link>
                
                <Link
                  to="/detection?mode=camera"
                  className="group relative inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 bg-transparent border-2 border-gray-700 text-gray-300 font-bold text-base lg:text-lg rounded-none hover:border-white hover:text-white transition-all duration-300"
                >
                  <Camera className="w-5 h-5 lg:w-6 lg:h-6 mr-3 transform transition-transform duration-300 group-hover:rotate-12" />
                  <span className="font-mono">CAMERA_CAPTURE</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced 3D Scene - Smaller height to avoid scroll overlap */}
          <div className={`relative h-64 sm:h-80 lg:h-[400px] xl:h-[450px] transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="absolute inset-0 bg-gray-900/10 backdrop-blur-sm border border-gray-800 rounded-none">
              <Scene3D />
              
              {/* HUD Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Corner Brackets */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gray-500"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gray-500"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gray-500"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gray-500"></div>
                
                {/* Status Indicators */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm px-4 py-2 border border-gray-700 font-mono text-xs text-green-400">
                  [SCANNING] NEURAL_NET_ACTIVE
                </div>
                
                <div className="absolute bottom-4 right-16 bg-black/70 backdrop-blur-sm px-3 py-2 border border-gray-700 font-mono text-xs text-gray-400">
                  3D_INTERACTIVE_MODE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator - Much more space from bottom to avoid overlap */}
        <div 
          onClick={scrollToDetection}
          className="absolute bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer group z-30"
        >
          <div className="flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-300 transition-colors duration-300">
            <span className="text-sm font-mono">[SCROLL_DOWN]</span>
            <div className="w-8 h-12 border border-current rounded-none flex justify-center">
              <ArrowDown className="w-4 h-4 mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Detection Preview Section */}
      <section id="detection-preview" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white font-mono tracking-tight">
              DETECTION_SYSTEM.EXE
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
              Neural network powered identification system for critical space safety equipment.
              <br />
              <span className="text-gray-200">Real-time analysis</span> with advanced computer vision.
            </p>
          </div>

          {/* Features Grid - Minimalistic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Shield,
                title: 'FIRE_EXTINGUISHER',
                description: 'Neural identification of fire safety systems with precise coordinate mapping and confidence scoring.',
                gradient: 'from-gray-800 to-gray-900'
              },
              {
                icon: Brain,
                title: 'OXYGEN_SYSTEMS',
                description: 'Advanced detection of life-support oxygen distribution systems using deep learning algorithms.',
                gradient: 'from-gray-800 to-gray-900'
              },
              {
                icon: Rocket,
                title: 'EMERGENCY_TOOLKIT',
                description: 'Real-time scanning for critical maintenance and emergency response equipment.',
                gradient: 'from-gray-800 to-gray-900'
              }
            ].map((feature, index) => (
              <div key={index} className="group relative bg-gray-900/20 backdrop-blur-sm border border-gray-800 p-8 hover:bg-gray-800/30 hover:border-gray-600 transition-all duration-500 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gray-800 border border-gray-700 flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110">
                    <feature.icon className="w-8 h-8 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300 font-mono">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 font-mono text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Link
              to="/detection"
              className="inline-flex items-center px-12 py-6 bg-white text-black font-bold text-xl rounded-none hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 font-mono"
            >
              <Zap className="w-6 h-6 mr-3" />
              INITIALIZE_SCAN
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;