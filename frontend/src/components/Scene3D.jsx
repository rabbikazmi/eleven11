import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Cylinder, Text3D, Float } from '@react-three/drei';
import * as THREE from 'three';

// Astronaut Component
const Astronaut = ({ position }) => {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      {/* Helmet */}
      <Sphere args={[0.8, 32, 32]} position={[0, 1.5, 0]}>
        <meshStandardMaterial 
          color="#e0e0e0" 
          transparent 
          opacity={0.8} 
          metalness={0.3}
          roughness={0.1}
        />
      </Sphere>
      
      {/* Helmet Visor */}
      <Sphere args={[0.75, 32, 32]} position={[0, 1.5, 0]}>
        <meshStandardMaterial 
          color="#4fc3f7" 
          transparent 
          opacity={0.3} 
          metalness={0.8}
          roughness={0.1}
        />
      </Sphere>

      {/* Body */}
      <Cylinder args={[0.6, 0.8, 1.5, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#f0f0f0" metalness={0.2} roughness={0.8} />
      </Cylinder>

      {/* Arms */}
      <Cylinder args={[0.2, 0.2, 1.2, 8]} position={[-1, 0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
        <meshStandardMaterial color="#e0e0e0" />
      </Cylinder>
      <Cylinder args={[0.2, 0.2, 1.2, 8]} position={[1, 0.5, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <meshStandardMaterial color="#e0e0e0" />
      </Cylinder>

      {/* Legs */}
      <Cylinder args={[0.25, 0.25, 1.5, 8]} position={[-0.3, -1.5, 0]}>
        <meshStandardMaterial color="#e0e0e0" />
      </Cylinder>
      <Cylinder args={[0.25, 0.25, 1.5, 8]} position={[0.3, -1.5, 0]}>
        <meshStandardMaterial color="#e0e0e0" />
      </Cylinder>

      {/* Control Panel */}
      <Box args={[0.4, 0.3, 0.1]} position={[0, 0.3, 0.65]}>
        <meshStandardMaterial color="#2196f3" emissive="#1565c0" emissiveIntensity={0.2} />
      </Box>
    </group>
  );
};

// Fire Extinguisher Component
const FireExtinguisher = ({ position }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + 1) * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5}>
      <group ref={meshRef} position={position}>
        {/* Main Tank */}
        <Cylinder args={[0.3, 0.3, 1.5, 16]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#e53935" metalness={0.3} roughness={0.2} />
        </Cylinder>
        
        {/* Top Cap */}
        <Cylinder args={[0.32, 0.32, 0.2, 16]} position={[0, 0.85, 0]}>
          <meshStandardMaterial color="#424242" metalness={0.8} roughness={0.1} />
        </Cylinder>
        
        {/* Handle */}
        <Box args={[0.1, 0.6, 0.1]} position={[0.4, 0.3, 0]}>
          <meshStandardMaterial color="#424242" metalness={0.5} roughness={0.3} />
        </Box>
        
        {/* Nozzle */}
        <Cylinder args={[0.05, 0.08, 0.4, 8]} position={[0.3, 0.6, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <meshStandardMaterial color="#616161" metalness={0.7} roughness={0.2} />
        </Cylinder>
      </group>
    </Float>
  );
};

// Oxygen Tank Component
const OxygenTank = ({ position }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.008;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + 2) * 0.12;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3}>
      <group ref={meshRef} position={position}>
        {/* Main Tank */}
        <Cylinder args={[0.4, 0.4, 2, 16]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#4caf50" 
            metalness={0.4} 
            roughness={0.1}
            emissive="#2e7d32"
            emissiveIntensity={0.1}
          />
        </Cylinder>
        
        {/* Valve Top */}
        <Cylinder args={[0.15, 0.15, 0.3, 12]} position={[0, 1.15, 0]}>
          <meshStandardMaterial color="#37474f" metalness={0.8} roughness={0.1} />
        </Cylinder>
        
        {/* Pressure Gauge */}
        <Cylinder args={[0.12, 0.12, 0.05, 16]} position={[0.3, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#fff" metalness={0.1} roughness={0.9} />
        </Cylinder>
        
        {/* Straps */}
        <Box args={[0.9, 0.1, 0.05]} position={[0, 0.3, 0.42]}>
          <meshStandardMaterial color="#795548" metalness={0.1} roughness={0.8} />
        </Box>
        <Box args={[0.9, 0.1, 0.05]} position={[0, -0.3, 0.42]}>
          <meshStandardMaterial color="#795548" metalness={0.1} roughness={0.8} />
        </Box>
      </group>
    </Float>
  );
};

// Toolkit Component
const Toolkit = ({ position }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.006;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + 3) * 0.1;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.4}>
      <group ref={meshRef} position={position}>
        {/* Main Box */}
        <Box args={[1.2, 0.6, 0.8]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#ff9800" 
            metalness={0.2} 
            roughness={0.7}
          />
        </Box>
        
        {/* Handle */}
        <Cylinder args={[0.05, 0.05, 1, 8]} position={[0, 0.45, 0]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#424242" metalness={0.5} roughness={0.3} />
        </Cylinder>
        
        {/* Latches */}
        <Box args={[0.15, 0.1, 0.05]} position={[-0.5, 0.1, 0.43]}>
          <meshStandardMaterial color="#616161" metalness={0.8} roughness={0.2} />
        </Box>
        <Box args={[0.15, 0.1, 0.05]} position={[0.5, 0.1, 0.43]}>
          <meshStandardMaterial color="#616161" metalness={0.8} roughness={0.2} />
        </Box>
        
        {/* Logo/Label */}
        <Box args={[0.4, 0.2, 0.02]} position={[0, 0, 0.42]}>
          <meshStandardMaterial 
            color="#1976d2" 
            emissive="#0d47a1"
            emissiveIntensity={0.1}
          />
        </Box>
      </group>
    </Float>
  );
};

// Space Station Component
const SpaceStation = ({ position }) => {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + 4) * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Central Module */}
      <Cylinder args={[0.8, 0.8, 2, 16]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color="#eceff1" 
          metalness={0.4} 
          roughness={0.2}
        />
      </Cylinder>
      
      {/* Solar Panels */}
      <Box args={[3, 0.05, 1]} position={[-2, 0, 0]}>
        <meshStandardMaterial 
          color="#1a237e" 
          metalness={0.1} 
          roughness={0.9}
          emissive="#303f9f"
          emissiveIntensity={0.1}
        />
      </Box>
      <Box args={[3, 0.05, 1]} position={[2, 0, 0]}>
        <meshStandardMaterial 
          color="#1a237e" 
          metalness={0.1} 
          roughness={0.9}
          emissive="#303f9f"
          emissiveIntensity={0.1}
        />
      </Box>
      
      {/* Connecting Arms */}
      <Cylinder args={[0.1, 0.1, 1.5, 8]} position={[-1.25, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#607d8b" metalness={0.6} roughness={0.3} />
      </Cylinder>
      <Cylinder args={[0.1, 0.1, 1.5, 8]} position={[1.25, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#607d8b" metalness={0.6} roughness={0.3} />
      </Cylinder>
      
      {/* Docking Port */}
      <Cylinder args={[0.3, 0.4, 0.3, 12]} position={[0, 0, 1.2]}>
        <meshStandardMaterial color="#37474f" metalness={0.7} roughness={0.2} />
      </Cylinder>
      
      {/* Communication Array */}
      <Cylinder args={[0.05, 0.05, 0.8, 8]} position={[0, 1.2, 0]}>
        <meshStandardMaterial color="#ff5722" metalness={0.3} roughness={0.7} />
      </Cylinder>
    </group>
  );
};

// Main Scene Component
const Scene3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [5, 5, 5], fov: 60 }}
        style={{ background: 'transparent' }}
        onCreated={(state) => {
          // Ensure proper WebGL context
          if (state.gl) {
            console.log('WebGL context created successfully');
          }
        }}
        onError={(error) => {
          console.error('Scene3D error:', error);
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4fc3f7" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.8}
          color="#80d8ff"
          castShadow
        />

        {/* 3D Models */}
        <Astronaut position={[-3, 0, 0]} />
        <FireExtinguisher position={[3, -1, 2]} />
        <OxygenTank position={[4, 1, -1]} />
        <Toolkit position={[-2, -2, 3]} />
        <SpaceStation position={[0, 3, -3]} />

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <Float key={i} speed={Math.random() * 2 + 1} rotationIntensity={0.2}>
            <Sphere
              args={[0.02, 8, 8]}
              position={[
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20
              ]}
            >
              <meshStandardMaterial
                color={`hsl(${180 + Math.random() * 60}, 70%, 60%)`}
                emissive={`hsl(${180 + Math.random() * 60}, 70%, 40%)`}
                emissiveIntensity={0.5}
              />
            </Sphere>
          </Float>
        ))}

        {/* Controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          minDistance={3}
          maxDistance={15}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;