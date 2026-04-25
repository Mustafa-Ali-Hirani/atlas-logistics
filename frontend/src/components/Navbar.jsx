import { Ship, Menu, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50 font-sans">
      
      {/* LOGO - Now clickable to return Home */}
      <Link to="/" className="flex items-center gap-2 cursor-pointer">
        <Ship className="text-blue-900" size={32} />
        <span className="text-2xl font-bold text-blue-900 tracking-tighter uppercase">
          Atlas<span className="text-red-600 font-black italic ml-1">Logistics</span>
        </span>
      </Link>

      {/* MENU LINKS - Using 'Link' instead of 'a' for instant page switching */}
      <div className="hidden md:flex gap-8 font-semibold text-gray-700 uppercase text-xs tracking-widest">
        <Link to="/" className="hover:text-blue-900 transition border-b-2 border-transparent hover:border-red-600 pb-1">
          Home
        </Link>
        <Link to="/services" className="hover:text-blue-900 transition border-b-2 border-transparent hover:border-red-600 pb-1">
          Services
        </Link>
        <Link to="/tracking" className="hover:text-blue-900 transition border-b-2 border-transparent hover:border-red-600 pb-1">
          Tracking
        </Link>
        <Link to="/about" className="hover:text-blue-900 transition border-b-2 border-transparent hover:border-red-600 pb-1">
          About Us
        </Link>
      </div>

      {/* CONTACT INFO */}
      <div className="hidden lg:flex items-center gap-2 text-blue-900 font-bold border-l pl-6 border-gray-200">
        <Phone size={18} className="text-red-600" />
        <span className="text-sm font-black tracking-tight">1-800-ATLAS-LOG</span>
      </div>

      {/* MOBILE MENU ICON */}
      <div className="md:hidden text-blue-900 cursor-pointer">
        <Menu />
      </div>
    </nav>
  );
}

export default Navbar;