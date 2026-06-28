import { Canvas } from '@react-three/fiber'
import { Environment, Sparkles } from '@react-three/drei'

export default function CanvasBackground() {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#0A0A0A']} />
        
        {/* Luxury lighting setup */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#D4AF37" />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#ffffff" />
        
        {/* Subtle background particles */}
        <Sparkles count={100} scale={12} size={2} speed={0.2} color="#D4AF37" opacity={0.2} />
        
        {/* Luxury environment reflections */}
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
