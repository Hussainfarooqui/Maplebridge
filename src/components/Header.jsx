import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center gap-4">
        {/* Placeholder for Logo */}
        <div className="w-8 h-8 bg-[#D4AF37] rounded-sm"></div>
        <div className="text-white font-semibold tracking-widest text-sm uppercase">
          Maplebridge <span className="opacity-70 font-light">Institutional</span>
        </div>
      </div>
      
      <nav className="flex items-center gap-8">
        <Link to="/fleet" className="text-sm font-medium text-white/80 hover:text-[#D4AF37] transition-colors">Our Fleets</Link>
        <Link to="/partner" className="text-sm font-medium text-white/80 hover:text-[#D4AF37] transition-colors">Partner Network</Link>
        <Link to="/about" className="text-sm font-medium text-white/80 hover:text-[#D4AF37] transition-colors">About Us</Link>
        <button className="px-6 py-2 text-sm font-medium text-black bg-[#D4AF37] hover:bg-white transition-colors uppercase tracking-wider">
          Institutional Governance
        </button>
      </nav>
    </header>
  );
}
