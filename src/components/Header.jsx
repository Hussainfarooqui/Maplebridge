import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useState(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-4 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10">
        <Link to="/" className="flex items-center gap-4 z-50">
          <div className="w-8 h-8 bg-[#D4AF37] rounded-sm"></div>
          <div className="text-white font-semibold tracking-widest text-xs md:text-sm uppercase">
            Maplebridge <span className="opacity-70 font-light hidden sm:inline">Institutional</span>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/fleet" className="text-sm font-medium text-white/80 hover:text-[#D4AF37] transition-colors">Our Fleets</Link>
          <Link to="/partner" className="text-sm font-medium text-white/80 hover:text-[#D4AF37] transition-colors">Partner Network</Link>
          <Link to="/about" className="text-sm font-medium text-white/80 hover:text-[#D4AF37] transition-colors">About Us</Link>
          <button className="px-6 py-2 text-sm font-medium text-black bg-[#D4AF37] hover:bg-white transition-colors uppercase tracking-wider">
            Institutional Governance
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden z-50 text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center gap-8 pt-20 lg:hidden"
          >
            <Link onClick={() => setIsOpen(false)} to="/fleet" className="text-xl font-medium text-white hover:text-[#D4AF37] transition-colors">Our Fleets</Link>
            <Link onClick={() => setIsOpen(false)} to="/partner" className="text-xl font-medium text-white hover:text-[#D4AF37] transition-colors">Partner Network</Link>
            <Link onClick={() => setIsOpen(false)} to="/about" className="text-xl font-medium text-white hover:text-[#D4AF37] transition-colors">About Us</Link>
            <button className="mt-4 px-8 py-4 text-sm font-medium text-black bg-[#D4AF37] hover:bg-white transition-colors uppercase tracking-wider">
              Institutional Governance
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
