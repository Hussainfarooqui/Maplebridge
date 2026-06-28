import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export default function About() {
  return (
    <div className="min-h-screen pt-32 px-8 max-w-7xl mx-auto relative z-10 pb-24">
      {/* 3D Background effect specific to About */}
      <div className="absolute inset-0 z-[-1] opacity-30 pointer-events-none">
        <Canvas>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-4">Our Story</h2>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
            Transportation Is a <span className="font-semibold">System</span>.
          </h1>
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>
              Maplebridge Group Inc. began with European airport operations before expanding to the Greater Toronto Area. We recognized that true executive transportation requires more than just a vehicle—it requires a meticulously managed system.
            </p>
            <p>
              From planning and dispatch to monitoring and compliance, we handle the complexities of ground transportation so our institutional clients can focus on what matters most.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#050505] p-12 border border-white/10"
        >
          <h2 className="text-2xl text-white mb-6">Two Sites. One Standard.</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-[#D4AF37] text-xl font-medium mb-2">Maplebridge.ca</h3>
              <p className="text-white/60">Dedicated entirely to institutional governance, corporate accounts, and government body transportation.</p>
            </div>
            <div className="w-full h-px bg-white/10"></div>
            <div>
              <h3 className="text-white text-xl font-medium mb-2">Maplepont.com</h3>
              <p className="text-white/60">Designed for individual executive travel and single-booking bespoke services.</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4">
            <button className="px-6 py-4 bg-[#D4AF37] text-black font-semibold hover:bg-white transition-colors uppercase tracking-wider text-sm w-full text-center">
              Request a Formal Proposal
            </button>
            <button className="px-6 py-4 bg-transparent border border-[#D4AF37] text-[#D4AF37] font-semibold hover:bg-[#D4AF37]/10 transition-colors uppercase tracking-wider text-sm w-full text-center">
              Visit for Individual Travel
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
