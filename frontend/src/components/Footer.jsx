import { Ship, Mail, Phone, MapPin, Globe, MessageSquare, Info } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 font-sans">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
        
        {/* Column 1: Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Ship className="text-red-600" size={32} />
            <span className="text-2xl font-bold tracking-tighter uppercase">
              Atlas<span className="text-red-600 font-black italic">Logistics</span>
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed font-medium">
            Your trusted partner in global freight forwarding. We move your business forward with precision and care.
          </p>
          {/* Social Icons replaced with generic Globe/Message for stability */}
          <div className="flex gap-4 text-slate-400">
            <Globe className="hover:text-red-600 cursor-pointer transition" size={20} />
            <MessageSquare className="hover:text-red-600 cursor-pointer transition" size={20} />
            <Info className="hover:text-red-600 cursor-pointer transition" size={20} />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-red-600 pl-3 uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-4 text-slate-400 font-medium">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Our Team</a></li>
            <li><a href="#" className="hover:text-white transition">News & Media</a></li>
            <li><a href="#" className="hover:text-white transition">Career</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-red-600 pl-3 uppercase tracking-wider">Our Services</h3>
          <ul className="space-y-4 text-slate-400 font-medium">
            <li><a href="#" className="hover:text-white transition">Air Freight</a></li>
            <li><a href="#" className="hover:text-white transition">Ocean Freight</a></li>
            <li><a href="#" className="hover:text-white transition">Road Transport</a></li>
            <li><a href="#" className="hover:text-white transition">Warehousing</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-red-600 pl-3 uppercase tracking-wider">Contact Us</h3>
          <ul className="space-y-4 text-slate-400 font-medium">
            <li className="flex items-start gap-3">
              <MapPin className="text-red-600 shrink-0" size={20} />
              <span className="text-sm">123 Logistics Way, Houston, TX 77002, USA</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-red-600 shrink-0" size={20} />
              <span className="text-sm">+1 (800) ATLAS-LOG</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-red-600 shrink-0" size={20} />
              <span className="text-sm">contact@atlas-logistics.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="container mx-auto px-8 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs font-bold uppercase tracking-widest">
        <p>© 2025 Atlas Logistics Inc. All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;