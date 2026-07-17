import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Facebook, Instagram, Youtube, MapPin, Phone, Mail, Menu, X 
} from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* --- FIXED NAVBAR --- */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40">
        <div className="container flex items-center justify-between h-20 px-4">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3" aria-label="Mentora — Education Consultancy">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden shrink-0 border border-white/10 shadow-sm">
                <img 
                  src="/logo icon.jpeg" 
                  alt="Mentora Logo" 
                  className="w-full h-full object-cover scale-[1.0]" 
                />
              </div>
              <span className="flex flex-col leading-none">
                <span className="text-2xl font-bold tracking-[0.18em] text-white" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>MENTORA</span>
                <span className="text-[#D4AF37] text-[7px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] font-semibold mt-1 uppercase">
                  Education Consultancy
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-smooth">Home</Link>
            <Link to="/services" className="hover:text-primary transition-smooth">Services</Link>
            <Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
            <Link to="/countries" className="hover:text-primary transition-smooth">Countries</Link>
            <Link to="/ceo" className="hover:text-primary transition-smooth">CEO</Link>
            <Link to="/pte" className="hover:text-primary transition-smooth">PTE</Link>
            <Link to="/ielts" className="hover:text-primary transition-smooth">IELTS</Link>
            <Link to="/about" className="hover:text-primary transition-smooth">About</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild variant="default" className="hidden md:flex bg-royal-gradient hover:opacity-90 shadow-soft">
              <Link to="/">Free Consultation</Link>
            </Button>

            <button 
              className="lg:hidden p-2 text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-background border-b border-border/40 p-6 flex flex-col gap-5 shadow-2xl animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col gap-4 text-lg font-medium text-muted-foreground">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
              <Link to="/countries" onClick={() => setIsMenuOpen(false)}>Countries</Link>
              <Link to="/ceo" onClick={() => setIsMenuOpen(false)}>CEO</Link>
              <Link to="/pte" onClick={() => setIsMenuOpen(false)}>PTE</Link>
              <Link to="/ielts" onClick={() => setIsMenuOpen(false)}>IELTS</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            </nav>
            <Button asChild className="w-full bg-royal-gradient py-6 text-lg md:hidden">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Free Consultation</Link>
            </Button>
          </div>
        )}
      </header>

      {/* --- MAIN CONTENT WITH TOP PADDING FOR FIXED NAV --- */}
      <main className="pt-20">
        {children}
      </main>

      {/* --- FOOTER --- */}
      <footer id="footer" className="bg-card text-foreground border-t border-border">
        <div className="container py-16 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden shrink-0 mb-4 border border-white/10 shadow-sm">
                <img 
                  src="/logo icon.jpeg" 
                  alt="Mentora Logo" 
                  className="w-full h-full object-cover scale-[1.0]" 
                />
              </div>
              <span className="flex flex-col leading-none">
                <span className="text-2xl font-bold tracking-[0.18em] text-white" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>MENTORA</span>
                <span className="mt-1 text-[0.62rem] font-semibold tracking-[0.32em] text-accent uppercase">Education Consultancy</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Pakistan's premium education consultancy, guiding students toward world-class universities with personalized mentorship from application to arrival.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.facebook.com/share/1B5iqWZHFe/" target="_blank" rel="noreferrer" 
                 className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-accent hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/mentora.education.consultancy?igsh=enYwa2s2dXlqeGF6" target="_blank" rel="noreferrer" 
                 className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-accent hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@mentoraeducationalservices?si=OP5C0wJXEvd1hG63" target="_blank" rel="noreferrer" 
                 className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-accent hover:text-black transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://whatsapp.com/channel/0029Vb7LYQ08PgsFpiZg3i3G" target="_blank" rel="noreferrer" 
                 className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-accent hover:text-black transition-all">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248=-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5 text-accent">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-smooth">Home</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-smooth">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-foreground transition-smooth">Gallery</Link></li>
              <li><Link to="/countries" className="hover:text-foreground transition-smooth">Countries</Link></li>
              <li><Link to="/ceo" className="hover:text-foreground transition-smooth">CEO</Link></li>
              <li><Link to="/pte" className="hover:text-foreground transition-smooth">PTE</Link></li>
              <li><Link to="/ielts" className="hover:text-foreground transition-smooth">IELTS</Link></li>
              <li><Link to="/about" className="hover:text-foreground transition-smooth">About</Link></li>
              <li><Link to="/" className="hover:text-foreground transition-smooth">Apply Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5 text-accent">Hafizabad Office</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>Usama Block 47- Sunny Garden ,<br />Hafizabad, Punjab, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span> 0301 3085975</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>mentoraeducationalservices@gmail.com </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>© 2026 Mentora Education Consultancy. All rights reserved.</p>
            <p>Crafted with care for ambitious students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
