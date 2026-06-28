import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/10 pt-16 pb-8 px-8 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="space-y-4">
          <div className="text-white font-semibold tracking-widest text-lg uppercase mb-6">
            Maplebridge
          </div>
          <p className="text-white/60 text-sm">
            100 King St W, Suite 5600<br/>
            Toronto, ON M5X 1C9<br/>
            Canada
          </p>
          <div className="text-[#D4AF37] text-sm font-medium">
            corporate@maplepont.ca<br/>
            +1 (888) 627-5313
          </div>
        </div>
        
        <div>
          <h4 className="text-white uppercase text-xs font-bold tracking-widest mb-6">Services</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li><Link to="/corporate-solutions" className="hover:text-white transition-colors">Corporate Programmes</Link></li>
            <li><Link to="/events-delegations" className="hover:text-white transition-colors">Events & Delegations</Link></li>
            <li><Link to="/fleet" className="hover:text-white transition-colors">Institutional Fleet</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white uppercase text-xs font-bold tracking-widest mb-6">Engagement</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li><Link to="/partner" className="hover:text-white transition-colors">Partner Network</Link></li>
            <li><Link to="/institutional-contact" className="hover:text-white transition-colors">Request Formal Proposal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white uppercase text-xs font-bold tracking-widest mb-6">Network</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li><a href="https://maplepont.com" className="hover:text-white transition-colors text-[#D4AF37]">Individual Travel (Maplepont)</a></li>
            <li>Toronto • Ottawa • Montréal</li>
            <li>Vancouver • Calgary • Edmonton</li>
            <li>Québec City • Niagara • Hamilton</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} Maplebridge Group Inc. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
