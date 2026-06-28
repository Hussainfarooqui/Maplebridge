import { motion } from 'framer-motion';
import { Float, Text3D, Center } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function Home() {
  return (
    <div className="min-h-screen pt-32 px-8 max-w-7xl mx-auto flex flex-col justify-center pb-24 relative z-10">
      
      {/* Private Jet Background */}
      <div className="absolute inset-0 z-[-2] pointer-events-none opacity-20">
        <img src="/jet.png" alt="Private Jet" className="w-full h-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-3xl"
      >
        <h2 className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-4">
          Institutional Transportation
        </h2>
        <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-8">
          Professionally Driven.<br/>
          <span className="font-semibold">Proudly Canadian.</span>
        </h1>
        <p className="text-xl text-white/70 leading-relaxed mb-12 max-w-2xl">
          Structured, compliant, and professionally managed ground transportation for corporations, institutional organisations, and government bodies operating across Canada — from a single executive transfer to a full national programme.
        </p>
        <button className="px-8 py-4 bg-white text-black font-semibold hover:bg-[#D4AF37] transition-all uppercase tracking-wider text-sm">
          Request a Formal Proposal
        </button>
      </motion.div>

      {/* 3D Foreground Element Overlaying the UI */}
      <div className="absolute right-0 top-1/4 w-1/2 h-1/2 pointer-events-none hidden md:block">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#D4AF37" />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
              <octahedronGeometry args={[2, 0]} />
              <meshStandardMaterial color="#D4AF37" wireframe />
            </mesh>
            <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]} scale={0.8}>
              <octahedronGeometry args={[2, 0]} />
              <meshStandardMaterial color="#ffffff" opacity={0.1} transparent />
            </mesh>
          </Float>
        </Canvas>
      </div>
      
      <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Corporate Transportation Programmes', desc: 'Centralized account management & consolidated billing.', link: '/corporate-solutions' },
          { title: 'Events & Delegation Logistics', desc: 'Full coordination for summits, conferences, and large-scale events.', link: '/events-delegations' },
          { title: 'Executive Airport Transfers', desc: 'Flight monitoring and professional meet-and-greet services.', link: '/institutional-contact' },
          { title: 'Institutional Procurement & Partnerships', desc: 'RFQ responses, SLAs, and formal proposals.', link: '/partnerships' },
          { title: 'Safety, Compliance & Documentation', desc: 'COI, commercial licensing, and PIPEDA-compliant data handling.', link: '#' }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group rounded-sm backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
            <p className="text-white/60 text-sm mb-6">{item.desc}</p>
            <div className="text-xs uppercase tracking-wider font-semibold text-white/40 group-hover:text-[#D4AF37] transition-colors">
              Learn More &rarr;
            </div>
          </motion.div>
        ))}
      </div>

      {/* Built for Institutions Section */}
      <div className="mt-32 max-w-4xl mx-auto text-center border-t border-white/10 pt-20">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Built for Institutions. Not Bookings.</h2>
        <p className="text-lg text-white/70 leading-relaxed mb-8">
          We are not a ride-sharing platform or an aggregator. We are a structured, corporate ground transportation operator. Every account is assigned a dedicated manager, ensuring strict compliance, professional chauffeurs, and customized corporate invoicing.
        </p>
      </div>

      {/* Why Organisations Choose Maplebridge */}
      <div className="mt-32 bg-[#111] p-12 border border-white/5 rounded-sm">
        <h2 className="text-3xl font-light text-white mb-10 text-center">Why Organisations Choose Maplebridge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-white/70">
          <div className="flex items-start gap-4">
            <span className="text-[#D4AF37] text-xl">&bull;</span>
            <p><strong>National Reach:</strong> Consistent service across 9 major Canadian cities.</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-[#D4AF37] text-xl">&bull;</span>
            <p><strong>Experience:</strong> 20+ years of institutional-grade operational experience.</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-[#D4AF37] text-xl">&bull;</span>
            <p><strong>Privacy:</strong> Fully PIPEDA-compliant data handling for executives.</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-[#D4AF37] text-xl">&bull;</span>
            <p><strong>Financials:</strong> Province-specific tax compliance and consolidated CAD billing.</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-[#D4AF37] text-xl">&bull;</span>
            <p><strong>Security:</strong> High-limit commercial liability insurance on all vehicles.</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-[#D4AF37] text-xl">&bull;</span>
            <p><strong>No Aggregators:</strong> We operate our network directly. No anonymous operators.</p>
          </div>
        </div>
      </div>

      {/* Institutional Coverage */}
      <div className="mt-32">
        <div className="text-center mb-12">
          <h2 className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-4">Institutional Coverage</h2>
          <h3 className="text-3xl md:text-4xl font-light text-white">9 Major Canadian Cities</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
          {['Toronto', 'Ottawa', 'Montréal', 'Vancouver', 'Calgary', 'Edmonton', 'Québec City', 'Niagara Falls', 'Hamilton'].map((city, idx) => (
            <div key={idx} className="p-6 bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-colors cursor-default text-white/80 font-medium rounded-sm">
              {city}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-transparent border border-[#D4AF37] text-[#D4AF37] font-semibold hover:bg-[#D4AF37]/10 transition-colors uppercase tracking-wider text-sm">
            Contact the Corporate Team
          </button>
        </div>
      </div>

      {/* Institutional Credibility */}
      <div className="mt-32 max-w-4xl mx-auto text-center border-t border-white/10 pt-20 mb-12">
        <h2 className="text-2xl text-[#D4AF37] font-light italic mb-8">
          "Your Canadian ground transportation should reflect the standard of the organisation you represent. Maplebridge is built to deliver exactly that — every executive, every city, every time."
        </h2>
        <p className="text-white/60 text-sm uppercase tracking-widest">
          Institutional Credibility Behind Every Assignment
        </p>
      </div>

    </div>
  );
}
