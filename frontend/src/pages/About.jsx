import React from 'react';
import { Github, ExternalLink, Users, Code, Brain, Rocket, Shield, Zap, Terminal } from 'lucide-react';

const About = () => {
  const teamMembers = 
[
  {
    name: 'RABBIKA AZMI',
    role: 'TEAM LEADER · FULL STACK DEVELOPER',
    description: 'Led the team and developed both frontend and backend systems, integrating object detection with robust APIs.'
  },
  {
    name: 'NIHALIKA RAJ SHARMA',
    role: 'DEBUGGING SPECIALIST · LEAD PRESENTER',
    description: 'Handled critical debugging tasks and effectively presented the project, highlighting technical and functional aspects.'
  },
  {
    name: 'PRIYANSHU BARIK',
    role: 'UI DESIGNER · PRESENTATION CREATOR',
    description: 'Crafted the user interface and created engaging presentation materials for showcasing the system.'
  }
];

  const techStack = [
    {
      category: 'FRONTEND',
      technologies: ['React.js', 'Three.js', 'TailwindCSS', 'React Router'],
      icon: Code
    },
    {
      category: 'BACKEND',
      technologies: ['Flask', 'Python', 'FastAPI', 'OpenCV'],
      icon: Brain
    },
    {
      category: 'AI/ML',
      technologies: ['YOLOv8', 'PyTorch', 'Computer Vision', 'Object Detection'],
      icon: Zap
    },
  ];

  const projectFeatures = [
    {
      title: 'REAL_TIME_DETECTION',
      description: 'Advanced YOLOv8 model processes images in real-time with high accuracy for space station environments.',
      icon: Rocket
    },
    {
      title: 'INTERACTIVE_3D_MODELS',
      description: 'Immersive 3D visualization of space equipment using Three.js and WebGL for enhanced user experience.',
      icon: Code
    },
    {
      title: 'MISSION_CRITICAL_SAFETY',
      description: 'Designed specifically for space station safety protocols, ensuring astronaut protection and mission success.',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20 pb-12 relative overflow-hidden">
      {/* Background Effects - Match Home page */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="hexagonal-grid opacity-5"></div>
        <div className="scan-lines">
          <div className="scan-line scan-line-1"></div>
          <div className="scan-line scan-line-2"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-black mb-6 text-white font-mono tracking-tight">
            ABOUT_ELEVEN11.EXE
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-mono">
            Advanced AI-powered system for detecting critical safety equipment in space station environments.
            <br />
            Built with modern web technologies and advanced machine learning algorithms.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="bg-gray-900/20 backdrop-blur-sm border border-gray-800 p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6 flex items-center font-mono">
                  <Terminal className="w-10 h-10 mr-4 text-gray-400" />
                  MISSION_OVERVIEW
                </h2>
                <div className="space-y-6 text-gray-300 leading-relaxed font-mono">
                  <p>
                    <span className="text-white">ELEVEN11</span> represents the next generation of space safety technology. 
                    Our mission is to enhance astronaut safety and mission success through intelligent, real-time detection 
                    of critical safety equipment aboard space stations.
                  </p>
                  <p>
                    Using state-of-the-art <span className="text-gray-200 font-semibold">YOLOv8 object detection</span>, 
                    our system can instantly identify fire extinguishers, oxygen tanks, and emergency toolkits, 
                    providing crucial information for space operations and emergency response.
                  </p>
                  <p>
                    The project combines <span className="text-gray-200 font-semibold">advanced AI algorithms</span> 
                    with an intuitive web interface, making it accessible to mission controllers, astronauts, 
                    and ground support teams worldwide.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 p-8">
                  <div className="space-y-6">
                    {projectFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="p-3 bg-gray-800 border border-gray-700 flex items-center justify-center">
                          <feature.icon className="w-6 h-6 text-gray-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-2 font-mono">{feature.title}</h3>
                          <p className="text-gray-400 text-sm font-mono">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white font-mono">
              TECHNOLOGY_STACK
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              Built with modern, industry-standard technologies for maximum performance and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {techStack.map((stack, index) => (
              <div key={index} className="group bg-gray-900/20 backdrop-blur-sm border border-gray-800 p-8 hover:bg-gray-800/30 hover:border-gray-600 transition-all duration-500 transform hover:scale-105">
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gray-800 border border-gray-700 flex items-center justify-center mb-6 mx-auto transform transition-all duration-500 group-hover:scale-110">
                    <stack.icon className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6 group-hover:text-gray-200 transition-colors duration-300 font-mono">
                    {stack.category}
                  </h3>
                  <div className="space-y-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="w-full">
                        <span className="block px-4 py-2 bg-gray-800/50 border border-gray-700 text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 font-mono">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white font-mono">
              TEAM_ELEVEN11
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              A multidisciplinary team of students in STEM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-gray-900/20 backdrop-blur-sm border border-gray-800 p-8 hover:bg-gray-800/30 hover:border-gray-600 transition-all duration-500 transform hover:scale-105">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-800 border border-gray-700 flex items-center justify-center mx-auto mb-6 transform transition-all duration-500 group-hover:scale-110">
                    <Users className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300 font-mono">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 font-semibold mb-4 font-mono">{member.role}</p>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 font-mono text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub and Credits Section */}
        <div className="text-center">
          <div className="bg-gray-900/20 backdrop-blur-sm border border-gray-800 p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center font-mono">
              <Github className="w-8 h-8 mr-3 text-gray-400" />
              OPEN_SOURCE_&_CREDITS
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-mono">
              ELEVEN11 is committed to advancing space safety technology through open collaboration. 
              Our project leverages cutting-edge research and industry-standard tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="https://github.com/eleven11/space-safety-detection"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-white text-black hover:bg-gray-200 font-bold text-lg transition-all duration-300 transform hover:scale-105 font-mono relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <div className="relative z-10 flex items-center">
                  <Github className="w-6 h-6 mr-3 transform transition-transform duration-300 group-hover:rotate-12 group-hover:text-white" />
                  <span className="group-hover:text-white transition-colors">VIEW_ON_GITHUB</span>
                  <ExternalLink className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </div>
              </a>
            </div>

            <div className="text-center space-y-2 font-mono">
              <p className="text-gray-400">
                <span className="text-white">TECHNOLOGIES:</span> YOLOv8 by Ultralytics, React.js, Three.js, Flask
              </p>
              <p className="text-gray-400">
                <span className="text-white">SPECIAL_THANKS:</span> HackWithIndia - BuildWithDelhi2.0
              </p>
              <p className="text-gray-400">
                <span className="text-white">TEAM:</span> Eleven11
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;