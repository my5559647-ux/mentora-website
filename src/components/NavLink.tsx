import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#030712] text-white py-4 px-6 md:px-12 flex justify-between items-center border-b border-slate-900/50 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      {/* Brand Logo & Name */}
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md overflow-hidden p-1">
            <span className="text-xl">✈️</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-extrabold text-xl tracking-wider text-slate-100 group-hover:text-red-500 transition-colors">
              MENTORA
            </span>
            <span className="text-[9px] font-bold text-amber-500 tracking-widest uppercase -mt-1">
              Education Consultancy
            </span>
          </div>
        </Link>
      </div>
      
      {/* Navigation Links - Ab ye section scroll nahi karenge balkay direct pages par le kar jayenge */}
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-slate-300">
        <Link to="/" className="hover:text-red-500 transition-colors">
          Home
        </Link>
        <Link to="/services" className="hover:text-red-500 transition-colors">
          Services
        </Link>
        <Link to="/gallery" className="hover:text-red-500 transition-colors">
          Gallery
        </Link>
        <Link to="/countries" className="hover:text-red-500 transition-colors">
          Countries
        </Link>
        <Link to="/about" className="hover:text-red-500 transition-colors">
          CEO
        </Link>
        <Link to="/about" className="hover:text-red-500 transition-colors">
          About
        </Link>
      </div>

      {/* Right Actions Button */}
      <div>
        <button className="bg-red-600 hover:bg-red-700 active:scale-95 transition-all text-white font-bold text-xs md:text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-red-600/20">
          Free Consultation
        </button>
      </div>
    </nav>
  );
};

export default Navbar;