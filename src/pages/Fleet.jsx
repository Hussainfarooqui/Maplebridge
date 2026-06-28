import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, PresentationControls, ContactShadows, Environment, Image } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

const fleets = [
  {
    title: 'Executive Class',
    desc: 'Premium sedans for everyday executive travel. The standard for business professionalism.',
    capacity: '3',
    luggage: '2',
    models: 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac Lyriq',
    color: '#1a1a1a'
  },
  {
    title: 'Business SUV',
    desc: 'Spacious vehicles for groups or extra luggage. Uncompromising comfort and capability.',
    capacity: '4',
    luggage: '5',
    models: 'Cadillac Escalade, GMC Yukon, Chevrolet Suburban',
    color: '#2a2a2a',
    img: '/suv.png'
  },
  {
    title: 'First Class',
    desc: 'Luxury sedans for the ultimate travel experience. Unrivaled comfort and prestige.',
    capacity: '3',
    luggage: '2',
    models: 'Mercedes-Maybach S-Class, BMW 7 Series',
    color: '#0d0d0d'
  },
  {
    title: 'Executive Sprinter',
    desc: 'Premium group travel without compromise. The ultimate in multi-passenger luxury.',
    capacity: '6-14',
    luggage: '14',
    models: 'Mercedes-Benz Sprinter Executive',
    color: '#111111'
  },
  {
    title: 'Armored (Level B6/B7)',
    desc: 'High-security transport for high-profile individuals. Discreet protection.',
    capacity: '4',
    luggage: '4',
    models: 'Armored Cadillac Escalade, Suburban',
    color: '#000000',
    img: '/suv.png'
  }
];

function Card({ position, active, data }) {
  const mesh = useRef();
  const imgRef = useRef();
  const targetScale = active ? 1.2 : 0.8;
  const targetOpacity = active ? 1 : 0.3;

  useFrame((state, delta) => {
    mesh.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 4);
    mesh.current.material.opacity = THREE.MathUtils.lerp(mesh.current.material.opacity, targetOpacity, delta * 4);
    if (imgRef.current) {
      imgRef.current.material.opacity = THREE.MathUtils.lerp(imgRef.current.material.opacity, targetOpacity, delta * 4);
    }
  });

  return (
    <group position={position}>
      <mesh ref={mesh}>
        <boxGeometry args={[3, 4, 0.2]} />
        <meshStandardMaterial color={data.color} transparent roughness={0.1} metalness={0.8} />
        
        {/* Car Image */}
        <Image 
          ref={imgRef}
          url={data.img || '/sedan.png'} 
          position={[0, 0, 0.11]} 
          scale={[2.8, 2.5]} 
          transparent
        />

        {/* Border / Accent */}
        <mesh position={[0, 0, 0.12]}>
          <planeGeometry args={[2.8, 3.8]} />
          <meshBasicMaterial color={active ? "#D4AF37" : "#333"} wireframe transparent opacity={active ? 0.3 : 0.1} />
        </mesh>

        <Text
          position={[0, -1.2, 0.13]}
          fontSize={0.25}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          textAlign="center"
        >
          {data.title}
        </Text>
        
        <Text
          position={[0, -1.6, 0.13]}
          fontSize={0.12}
          color="#a0a0a0"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          textAlign="center"
        >
          {data.models}
        </Text>
      </mesh>
    </group>
  );
}

function Carousel({ activeIndex }) {
  const group = useRef();
  
  useFrame((state, delta) => {
    // Smoothly rotate carousel to active index
    const targetX = -activeIndex * 4;
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, targetX, delta * 3);
  });

  return (
    <group ref={group}>
      {fleets.map((fleet, i) => (
        <Card key={i} data={fleet} position={[i * 4, 0, 0]} active={i === activeIndex} />
      ))}
    </group>
  );
}

export default function Fleet() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((i) => (i + 1) % fleets.length);
  const prev = () => setActiveIndex((i) => (i - 1 + fleets.length) % fleets.length);

  return (
    <div className="relative min-h-screen pt-24 px-8 max-w-7xl mx-auto z-10 flex flex-col justify-between">
      <div className="text-center pt-8">
        <h1 className="text-4xl md:text-5xl font-light text-white mb-4">Elite Institutional Fleet</h1>
        <p className="text-white/60 text-lg">The authority in government and diplomatic transportation.</p>
      </div>

      {/* 3D Carousel Viewport */}
      <div className="absolute inset-0 z-[-1] pt-32">
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#D4AF37" />
          <spotLight position={[-10, 10, 10]} angle={0.3} penumbra={1} intensity={2} color="#ffffff" />
          
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 10, Math.PI / 10]}
            azimuth={[-Math.PI / 6, Math.PI / 6]}
          >
            <Float rotationIntensity={0.2} floatIntensity={0.5} speed={1.5}>
              <Carousel activeIndex={activeIndex} />
            </Float>
          </PresentationControls>
          
          <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={20} blur={2} far={4} />
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* 2D Overlay Data & Controls */}
      <div className="mt-auto mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-end pointer-events-none">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-black/40 backdrop-blur-md border border-white/10 p-8 pointer-events-auto"
          >
            <div className="text-[#D4AF37] text-sm tracking-widest font-semibold mb-2">{activeIndex + 1} / {fleets.length}</div>
            <h2 className="text-2xl text-white font-medium mb-4">{fleets[activeIndex].title}</h2>
            <p className="text-white/70 mb-6">{fleets[activeIndex].desc}</p>
            <div className="flex gap-8 border-t border-white/10 pt-4">
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wider mb-1">Capacity</div>
                <div className="text-white">{fleets[activeIndex].capacity} Passengers</div>
              </div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wider mb-1">Luggage</div>
                <div className="text-white">{fleets[activeIndex].luggage} Bags</div>
              </div>
            </div>
            <button className="mt-8 px-6 py-3 bg-[#D4AF37] text-black text-sm uppercase tracking-wider font-semibold hover:bg-white transition-colors w-full sm:w-auto">
              Request Availability
            </button>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center md:justify-end gap-4 pointer-events-auto">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            &#8592;
          </button>
          <button 
            onClick={next}
            className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}
