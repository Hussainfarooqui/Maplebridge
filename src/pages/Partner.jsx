import { motion } from 'framer-motion';

export default function Partner() {
  return (
    <div className="min-h-screen pt-32 px-8 max-w-7xl mx-auto relative z-10 pb-24">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-light text-white mb-6">Why partner with Maplebridge?</h1>
        <p className="text-lg text-white/60">We provide the tools and clients you need to succeed.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          { title: 'Global Reach', desc: 'Access a global clientele of institutions and executives who rely on us for their ground transportation.' },
          { title: 'Grow Your Revenue', desc: 'Fill your schedule with high-value rides and benefit from our robust corporate partnerships.' },
          { title: 'Reliable Support', desc: '24/7 support for you and your chauffeurs to ensure every ride is executed flawlessly.' }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="p-8 bg-[#111] border border-white/10 hover:border-[#D4AF37]/50 transition-colors"
          >
            <h3 className="text-[#D4AF37] text-xl font-semibold mb-4">{item.title}</h3>
            <p className="text-white/70">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-[#1a1a1a] p-12 border border-white/5 rounded-sm">
        <h2 className="text-2xl text-white mb-6">Partner Requirements</h2>
        <ul className="list-disc pl-5 space-y-4 text-white/70 mb-12">
          <li>Late-model luxury vehicles (black-on-black preferred)</li>
          <li>Professionally trained and licensed chauffeurs</li>
          <li>Appropriate commercial insurance coverage</li>
          <li>Strict adherence to punctuality and our service standards</li>
        </ul>

        <h2 className="text-2xl text-white mb-6">Onboarding Process</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {['Submit Request', 'Review & Background', 'Interview', 'Start Receiving Clients'].map((step, i) => (
            <div key={i} className="flex-1 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center font-bold">{i + 1}</div>
              <div className="text-white/80 font-medium">{step}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
