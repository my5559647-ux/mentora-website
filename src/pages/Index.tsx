import { 
  GraduationCap, FileCheck, Plane, LifeBuoy, ArrowRight, Sparkles,
  Phone, Mail, MapPin, Globe2, Users, Trophy, Quote,
  Facebook, Instagram, Linkedin, PlaneTakeoff, Youtube, Music2, MessageCircle,
  Menu, X, Play // Maine Play yahan add kar diya hai
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-student.jpg";
import ceoImg from "@/assets/ceo-portrait.jpg";

const stats = [
  { icon: Users, value: "500+", label: "Students Placed" },
  { icon: Globe2, value: "15+", label: "Countries" },
  { icon: Trophy, value: "98%", label: "Visa Success" },
];

const services = [
  { icon: GraduationCap, title: "University Admissions", desc: "Personalized university shortlisting, application strategy and SOP crafting for top global institutions." },
  { icon: FileCheck, title: "Visa Preparation", desc: "End-to-end visa documentation, financial planning and mock interview coaching with a 98% approval rate." },
  { icon: Plane, title: "Pre-Departure", desc: "Travel planning, accommodation, forex guidance and cultural orientation before you fly." },
  { icon: LifeBuoy, title: "Post-Arrival Support", desc: "Airport pickup, bank account setup, SIM activation and on-ground mentorship in your new city." },
];

const destinations = [
  { name: "United Kingdom", code: "🇬🇧", tag: "Russell Group & Top Rankings" },
  { name: "Turkey", code: "🇹🇷", tag: "Scholarships Available" },
  { name: "Malaysia", code: "🇲🇾", tag: "Affordable Excellence" },
  { name: "Cyprus", code: "🇨🇾", tag: "EU Recognized Degrees" },
  { name: "France", code: "🇫🇷", tag: "World-Class Research" },
  { name: "Canada", code: "🇨🇦", tag: "Post-Study Work Visa" },
  { name: "United States", code: "🇺🇸", tag: "Ivy League & Innovation" },
  { name: "Australia", code: "🇦🇺", tag: "Top Ranked Universities" },
];
const studentVideos = [
  {
    id: 1,
    title: "Student in Mentora",
    author: "Muhammad Shalikh",
    videoSrc: "https://jumpshare.com/share/4AoHFLq48fa6WPPaa7uy",
    thumbnail: "/heighlight5.jpeg",
  },
  {
    id: 2,
    title: "Student in Mentora",
    author: "Rai Ali Ejaaz",
    videoSrc: "https://jumpshare.com/share/TYC0vvQxE2zESoGII2NC",
    thumbnail: "/heighlight6.jpeg",
  },
  {
    id: 3,
    title: "Student in Mentora",
    author: "Umair Hameed",
    videoSrc: "https://jumpshare.com/share/0T8i6hCy8yMQA647lONF",
    thumbnail: "/heighlight7.jpeg",
  },
  {
    id: 4,
    title: "Student in Mentora",
    author: "Dawood Mustafa",
    videoSrc: "https://jumpshare.com/share/1aJQ19vIxdSxzzO6C8sN",
    thumbnail: "/heighlight8.jpeg",
  }
];

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTurkeyDetails, setShowTurkeyDetails] = useState(false); // <-- Menu state

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40">
        <div className="container flex items-center justify-between h-20 px-4">
          <a href="#" className="flex items-center gap-3" aria-label="Mentora — Education Consultancy">
          <div className="flex items-center gap-2 md:gap-4">
  {/* Logo Container: Balanced padding and centering */}
  <div className="relative h-11 w-11 md:h-14 md:w-14 overflow-hidden rounded-lg md:rounded-xl bg-white border border-[#D4AF37]/30 shadow-md flex items-center justify-center flex-shrink-0 p-1">
    <img 
      src="/logo icon.jpeg" 
      alt="Mentora Logo" 
     
      className="h-full w-full object-contain scale-[1.4] object-center transition-transform" 
    />
  </div>

   
  <div className="flex flex-col justify-center">
    <h1 className="text-white font-bold text-lg md:text-2xl tracking-tighter leading-none uppercase">
      Mentora
    </h1>
    <p className="text-[#D4AF37] text-[7px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] font-semibold mt-1 uppercase">
      Education Consultancy
    </p>
  </div>
</div>
        
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary transition-smooth">Home</a>
            <a href="#services" className="hover:text-primary transition-smooth">Services</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
            <a href="#destinations" className="hover:text-primary transition-smooth">Countries</a>
            <a href="#ceo" className="hover:text-primary transition-smooth">CEO</a>
            <a href="#about" className="hover:text-primary transition-smooth">About</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild variant="default" className="hidden md:flex bg-royal-gradient hover:opacity-90 shadow-soft">
              <a href="#contact">Free Consultation</a>
            </Button>

            {/* Mobile Toggle Button */}
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
              <a href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#destinations" onClick={() => setIsMenuOpen(false)}>Countries</a>
              <a href="#ceo" onClick={() => setIsMenuOpen(false)}>CEO</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#highlights" onClick={() => setIsMenuOpen(false)}>Gallery</a>
            </nav>
            <Button asChild className="w-full bg-royal-gradient py-6 text-lg md:hidden">
              <a href="#contact">Free Consultation</a>
            </Button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-soft-gradient">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] bg-primary-glow/10 rounded-full blur-3xl" />

        <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-float-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-xs font-semibold text-primary uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Trusted Education Partner · Hafizabad
            </span>
            <h1 className="mt-6 text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-foreground" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
              Your Global Future <span className="text-accent whitespace-nowrap">Starts Here</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Mentora Education Consultancy guides ambitious students from Pakistan to world-class universities across the globe. From admission to visa — we stand with you at every step.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-royal-gradient hover:opacity-90 shadow-elegant text-base h-12 px-8">
                <a href="#contact"><PlaneTakeoff className="w-4 h-4" /> Apply Now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 h-12 px-8 text-base hover:bg-secondary">
                <a href="#destinations"><MapPin className="w-4 h-4" /> Explore Countries</a>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-gradient" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>100+</div>
                <div className="mt-1 text-xs text-muted-foreground font-medium uppercase tracking-wider">Students Placed</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-gradient" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>10+</div>
                <div className="mt-1 text-xs text-muted-foreground font-medium uppercase tracking-wider">Countries</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-gradient" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>99%</div>
                <div className="mt-1 text-xs text-muted-foreground font-medium uppercase tracking-wider">Visa Success</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-royal-gradient rounded-3xl rotate-3 opacity-20 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border">
              <img src={heroImg} alt="International student starting their global education journey with Mentora" width={1536} height={1280} className="w-full h-full object-cover aspect-[4/5]" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Our Services</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold">Everything you need, <span className="text-gradient">end to end.</span></h2>
            <p className="mt-4 text-muted-foreground text-lg">Four pillars of support that take you from a hopeful applicant to a confident global citizen.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={i} className="group relative bg-card border border-border rounded-3xl p-8 hover:shadow-elegant hover:-translate-y-1 transition-smooth overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/15 transition-smooth" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-royal-gradient grid place-items-center shadow-soft mb-6">
                    <s.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* GALLERY SECTION */}
<section id="gallery" className="py-20 bg-background overflow-hidden">
  <div className="container px-4 mx-auto mb-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Gallery</h2>
    <div className="w-20 h-1 bg-accent mx-auto"></div>
  </div>

  <div className="flex flex-col gap-6">
    {/* Pehli Line - Right Move karegi (Highlight 1 to 4) */}
    <div className="flex gap-4 animate-marquee-right whitespace-nowrap">
      {[1, 2, 3, 4, 1, 2, 3, 4].map((num, i) => (
        <div key={i} className="min-w-[300px] h-[300px] rounded-xl overflow-hidden bg-secondary shadow-xl border border-white/5">
          <img 
            src={`/heighlight${num}.jpeg`} 
            alt={`Highlight ${num}`} 
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>
      ))}
    </div>

    {/* Doosri Line - Left Move karegi (Highlight 5 to 8) */}
    <div className="flex gap-4 animate-marquee-left whitespace-nowrap">
      {[5, 6, 7, 8, 5, 6, 7, 8].map((num, i) => (
        <div key={i} className="min-w-[300px] h-[300px] rounded-xl overflow-hidden bg-secondary shadow-xl border border-white/5">
          <img 
            src={`/heighlight${num}.jpeg`} 
            alt={`Highlight ${num}`} 
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>
      ))}
    </div>
  </div>
</section>

{/* Video Section Start */}
<section className="py-16 bg-[#F8F9FA]"> {/* Professional Light Gray Background */}
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center">
      Hear from our Students
    </h2>
    
    {/* Grid Layout - 4 Columns */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {studentVideos && studentVideos.map((video) => (
        <div 
          key={video.id} 
          className="relative group rounded-xl overflow-hidden shadow-lg bg-black h-[500px]"
        >
          {/* Video Element without poster/thumbnail image */}
          <video
  src={video.videoSrc}
  className="w-full h-full object-cover"
  loop
  playsInline
  muted // Autoplay block hone se bachane ke liye zaroori hai
  preload="auto" // Isse browser video ka pehla frame direct nikal kar live site par dikhaega bina kisi image ke
  onMouseOver={(e) => {
    const v = e.currentTarget as HTMLVideoElement;
    v.play().catch(err => console.log("Playback failed:", err));
  }}
  onMouseOut={(e) => {
    const v = e.currentTarget as HTMLVideoElement;
    v.pause();
  }}
  controls={false} 
  onClick={(e) => {
    const v = e.currentTarget as HTMLVideoElement;
    v.muted = !v.muted; // Click karne par sound on/off hogi
  }}
/>

          {/* Bottom Gradient Overlay (Text readability ke liye) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

          {/* Play Icon Overlay (Center) */}
          <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border border-white/30">
              {/* Play icon wrapper */}
              <svg 
                className="w-8 h-8 text-white fill-white" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>

          {/* Text Content (Bottom) */}
          <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none">
            <h3 className="text-white font-semibold text-lg leading-tight mb-2">
              {video.title}
            </h3>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#DC2626] flex items-center justify-center text-[12px] text-white font-bold border border-white/20 shadow-md">
                {video.author ? video.author[0] : 'M'}
              </div>
              <p className="text-white font-medium text-sm">{video.author}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Video Section End */}
      
{/* --- DESTINATIONS SECTION START --- */}
{(() => {
  const destinations = [
    { name: "United Kingdom", code: "gb", tag: "Russell Group & Top Rankings" },
    { name: "Turkey", code: "tr", tag: "Scholarships Available" },
    { name: "Malaysia", code: "my", tag: "Affordable Excellence" },
    { name: "Cyprus", code: "cy", tag: "EU Recognized Degrees" },
    { name: "Italy", code: "it", tag: "Cultural Heritage" },
    { name: "Romania", code: "ro", tag: "Affordable Study" },
    { name: "Ireland", code: "ie", tag: "Tech Hub" },
    { name: "South Korea", code: "kr", tag: "Modern Excellence" }
  ];

  return (
    <section id="destinations" className="py-24 lg:py-32 bg-white text-slate-900">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold text-[#be123c] uppercase tracking-wider">Destinations</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-slate-900 italic">
            Study in the world's <span className="text-[#be123c]">finest cities.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg">We have established partnerships with top-ranked universities across eight chosen destinations.</p>
        </div>
        
        {/* Flag Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((d, i) => (
            <div 
              key={i} 
              onClick={() => d.name === "Turkey" && setShowTurkeyDetails(true)}
              className={`group bg-[#0a1128] text-white border border-slate-800 rounded-2xl p-8 text-center hover:bg-[#0f1a3a] transition-all duration-500 flex flex-col items-center min-h-[260px] shadow-2xl ${d.name === "Turkey" ? "cursor-pointer ring-1 ring-white/5 hover:ring-[#be123c]/50" : ""}`}
            >
              {/* Flag Image - Professional Size */}
              <div className="mb-8 w-24 h-16 overflow-hidden rounded-lg shadow-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <img 
                  src={`https://flagcdn.com/w320/${d.code}.png`} 
                  alt={d.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="flex-grow flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2 text-white italic tracking-tight">{d.name}</h3>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.2em]">{d.tag}</p>
              </div>

              {/* Arrow Icon */}
              <div className="mt-6 opacity-20 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-6 h-6 text-[#be123c]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- PROFESSIONAL TURKEY MODAL POPUP --- */}
      {showTurkeyDetails && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#020617]/95 backdrop-blur-md p-4">
          <div className="relative bg-[#0a1128] w-full max-w-6xl h-[85vh] overflow-hidden rounded-[40px] border border-white/10 shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
            
            {/* Left Panel: Aesthetic Brand Image */}
            <div className="hidden md:block w-2/5 relative h-full bg-[#020617]">
              <img 
                src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1000" 
                className="h-full w-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000" 
                alt="Turkey Campus"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent"></div>
              <div className="absolute bottom-12 left-10 right-10">
                <div className="flex items-center gap-4 mb-6">
                    <img src="https://flagcdn.com/w160/tr.png" className="w-16 rounded shadow-2xl border border-white/20" alt="Turkey" />
                    <div className="h-px flex-1 bg-white/20"></div>
                </div>
                <h2 className="text-6xl font-black text-white italic tracking-tighter leading-none">TURKEY</h2>
                <p className="text-[#be123c] font-bold mt-2 uppercase text-[10px] tracking-[0.4em]">Visa Documentation Guide</p>
              </div>
            </div>

            {/* Right Panel: Managed Details */}
            <div className="flex-1 overflow-y-auto p-8 md:p-16 bg-[#0a1128] custom-scrollbar">
              {/* Close Button */}
              <button 
                onClick={() => setShowTurkeyDetails(false)} 
                className="absolute top-8 right-10 text-white/40 hover:text-white transition-all bg-white/5 p-2 rounded-full z-50"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="space-y-16">
                {/* 1. Identity Documents (Red Theme) */}
                <div className="animate-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-[#be123c] font-black text-[10px] uppercase tracking-[0.5em] mb-8 flex items-center gap-4">
                    <span className="w-10 h-px bg-[#be123c]"></span> Identity & Application
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Visa Application & Interview Form", "Valid Passport (Color Scan)", 
                      "CNIC Student & Sponsor", "Family Registration (FRC)", 
                      "Recent Travel History", "Photo (5x6 Turkish Format)"
                    ].map(item => (
                      <div key={item} className="p-5 rounded-2xl bg-white/5 border border-white/5 text-gray-300 flex items-center gap-4 group hover:border-[#be123c]/40 transition-all">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#be123c] shadow-[0_0_10px_#be123c]"></div>
                        <span className="text-[13px] font-medium tracking-wide group-hover:text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Financial Sponsorship (Mustard/Gold Theme) */}
                <div className="bg-[#020617] p-10 rounded-[40px] border border-[#fbbf24]/20 shadow-inner animate-in slide-in-from-bottom-6 duration-700">
                  <h3 className="text-[#fbbf24] font-black text-[10px] uppercase tracking-[0.5em] mb-10 text-center">Financial Sponsorship</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-5">
                      <p className="text-white font-black text-[10px] uppercase tracking-widest border-b border-white/10 pb-3 italic">Income Proof</p>
                      <ul className="text-[13px] text-gray-400 space-y-4">
                        <li>• Business Reg / Salary Slips (6 Months)</li>
                        <li>• Last 2 Years Income Tax Returns</li>
                        <li>• NTN & Tax Certificates (Both)</li>
                      </ul>
                    </div>
                    <div className="space-y-5">
                      <p className="text-white font-black text-[10px] uppercase tracking-widest border-b border-white/10 pb-3 italic">Bank Records</p>
                      <ul className="text-[13px] text-gray-400 space-y-4">
                        <li>• Bank Statement (6 Months)</li>
                        <li>• Account Maintenance Letter</li>
                        <li>• Affidavit of Support (Notary)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 3. Educational & Logistics (Blue/White Theme) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
                   <div className="p-8 rounded-[30px] bg-white/5 border border-white/10 group hover:border-white/20 transition-all">
                      <h4 className="text-white font-black text-[10px] uppercase tracking-widest mb-6 border-b border-white/10 pb-2 italic">Educational Documents</h4>
                      <ul className="text-[13px] text-gray-400 space-y-3">
                        <li>• University Offer & Acceptance Letter</li>
                        <li>• Original Attested Documents</li>
                        <li>• Statement of Purpose (SOP)</li>
                      </ul>
                   </div>
                   <div className="p-8 rounded-[30px] bg-white/5 border border-white/10 group hover:border-white/20 transition-all">
                      <h4 className="text-white font-black text-[10px] uppercase tracking-widest mb-6 border-b border-white/10 pb-2 italic">Travel & Logistics</h4>
                      <ul className="text-[13px] text-gray-400 space-y-3">
                        <li>• Original SWIFT Transfer Receipt</li>
                        <li>• Flight & Hotel Reservation</li>
                        <li>• Health Insurance</li>
                      </ul>
                   </div>
                </div>
              </div>

              {/* Branding Footer */}
              <div className="mt-10 pt-10 border-t border-white/5 text-center">
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.5em] font-bold">Mentora Education Consultancy</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
})()}

{/* 
    MENTORA CEO & TEAM SECTION (Scroll Target: #ceo)
    */}
<section id="ceo" className="bg-[#050a18] py-16 lg:py-24 px-3 lg:px-4 overflow-hidden scroll-mt-20">
  <div className="max-w-7xl mx-auto">
    
    {/* 1. CEO MESSAGE AREA  */}
    <div className="mb-20 text-center lg:text-left max-w-5xl mx-auto lg:mx-0">
      <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
        <div className="w-1 h-6 bg-red-600"></div>
        <span className="text-red-600 font-bold tracking-[0.3em] text-[10px] lg:text-xs uppercase block">
          Message From The CEO
        </span>
      </div>
      
      <h2 className="text-white text-2xl lg:text-[42px] leading-[1.2] font-semibold mb-6 tracking-tight px-2 lg:px-0">
        "At Mentora, we don't just process applications — <br className="hidden lg:block"/>
        <span className="text-red-600 italic font-serif">we shape destinies.</span>"
      </h2>
      
      <p className="text-slate-300 text-base lg:text-xl font-medium leading-relaxed opacity-90 px-4 lg:px-0">
        Every student deserves a mentor who believes in their dream as much as they do. 
        That belief is the foundation of everything we build.
      </p>
    </div>

    {/* 2. CENTERED HEADING  */}
    <div className="text-center mb-12">
        <h3 className="text-3xl lg:text-5xl font-bold text-white uppercase tracking-tighter">
          Meet Our <span className="text-yellow-500">Team</span>
        </h3>
    </div>

    {/* 3. TEAM CARDS GRID  */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
      
      {/* CARD 1: Muhammad Awais Munir */}
      <div className="group relative rounded-lg lg:rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]">
        <img 
          src="/ceo.jpeg" 
          alt="Muhammad Awais Munir" 
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* CARD 2: Engineer Ch. Umar Shan */}
      <div className="group relative rounded-lg lg:rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]">
        <img 
          src="/munir.jpeg" 
          alt="Engineer Ch. Umar Shan" 
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* CARD 3: Adv. Bilal Hassan Bhatti */}
      <div className="group relative rounded-lg lg:rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]">
        <img 
          src="/bilal.jpeg" 
          alt="Adv. Bilal Hassan Bhatti" 
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* CARD 4: Wajahat Ullah Wasti */}
      <div className="group relative rounded-lg lg:rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]">
        <img 
          src="/wasti.jpeg" 
          alt="Wajahat Ullah Wasti" 
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

    </div>
  </div>
</section>


      {/* WHO WE ARE / ABOUT SECTION */}
<section id="about" className="py-20 bg-white scroll-mt-20">
  <div className="container mx-auto px-4 md:px-12">
    <div className="flex flex-col lg:flex-row items-center gap-16">
      
      {/* LEFT CONTENT */}
      <div className="w-full lg:w-3/5">
        <div className="inline-block px-4 py-1 rounded-full bg-rose-50 text-[#be123c] font-bold text-xs uppercase tracking-widest mb-6">
          Who We Are
        </div>
        <h2 className="text-5xl lg:text-6xl font-bold text-[#0a1128] mb-8 leading-tight">
          Guiding Students Towards a <span className="text-[#be123c]">Global Future</span>
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-10">
          Mentora Education Consultancy is your trusted partner for international education. 
          Based in Sunny Garden, Hafizabad, we combine deep local knowledge with global 
          expertise to help you achieve your dreams.
        </p>

        {/* 4 FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6">
          {/* Point 1 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-2xl shadow-sm">🎯</div>
            <span className="font-bold text-[#0a1128] text-lg">Personalized Counseling</span>
          </div>

          {/* Point 2 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl shadow-sm">📋</div>
            <span className="font-bold text-[#0a1128] text-lg">End-to-End Support</span>
          </div>

          {/* Point 3 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-2xl shadow-sm">🌍</div>
            <span className="font-bold text-[#0a1128] text-lg">Global University Network</span>
          </div>

          {/* Point 4 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-2xl shadow-sm">🎓</div>
            <span className="font-bold text-[#0a1128] text-lg">Visa & Scholarship Aid</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: REGISTRATION IMAGE */}
      <div className="w-full lg:w-2/5">
        <div className="relative bg-[#16213e] rounded-[2.5rem] p-5 shadow-2xl group overflow-hidden border border-slate-100">
          {/* Decorative Design Element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 rounded-2xl overflow-hidden bg-white shadow-inner">
            <img 
              src="/info.png" 
              alt="Mentora Registration info" 
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="mt-8 text-center pb-2">
            <h3 className="text-white text-2xl font-bold italic tracking-wide">
              "Registered & Trusted"
            </h3>
            <p className="text-[#f1b434] font-bold mt-2 uppercase text-xs tracking-[0.2em]">
              SECP & IPO Pakistan Certified
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
      
     {/* CONTACT SECTION */}
<section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden">
  <div className="container relative mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <span className="text-xs font-semibold text-[#be123c] uppercase tracking-wider">
        Get in Touch
      </span>
      <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-slate-900">
        Let's Start the Conversation
      </h2>
      <p className="mt-4 text-slate-600 text-lg">
        Reach out anytime — our senior counsellors typically respond within a few hours.
      </p>
    </div>

    <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        
        {/* Email Card */}
        <a href="mailto:mentoraeducationalservices@gmail.com" className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-white transition-all duration-300 shadow-sm border border-transparent hover:border-slate-200">
          <div className="w-12 h-12 rounded-xl bg-[#be123c] flex items-center justify-center text-white shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-medium">Email Us</div>
            <div className="text-sm md:text-base font-bold text-slate-900 truncate" title="mentoraeducationalservices@gmail.com">
                mentoraeducationalservices@gmail.com
            </div>
          </div>
        </a>

        {/* Call Card  */}
        <div className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-white transition-all duration-300 shadow-sm border border-transparent hover:border-slate-200 cursor-default">
          <div className="w-12 h-12 rounded-xl bg-[#be123c] flex items-center justify-center text-white shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-medium">Call Us</div>
            <div className="text-base font-bold text-slate-900 flex flex-col leading-tight">
              <a href="tel:03153085976" className="hover:text-[#be123c] transition-colors">03153085976</a>
              <a href="tel:03001234567" className="hover:text-[#be123c] transition-colors">03013085975</a>
            </div>
          </div>
        </div>

      </div>

      {/* WhatsApp Button */}
      <a href="https://wa.me/923153085976" className="w-full bg-[#f1b434] hover:bg-[#d9a12e] text-[#0a1128] font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300">
        <span>Chat on WhatsApp</span>
      </a>
    </div>
  </div>
</section>
      

      {/* FOOTER */}
      <footer id="footer" className="bg-card text-foreground border-t border-border">
        <div className="container py-16 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              {/* Header ki tarah Zoomed aur Cropped Logo */}
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
  {/* Facebook */}
  <a href="https://www.facebook.com/share/1B5iqWZHFe/" target="_blank" rel="noreferrer" 
     className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-accent hover:text-black transition-all">
    <Facebook className="w-5 h-5" />
  </a>

  {/* Instagram */}
  <a href="https://www.instagram.com/mentora.education.consultancy?igsh=enYwa2s2dXlqeGF6" target="_blank" rel="noreferrer" 
     className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-accent hover:text-black transition-all">
    <Instagram className="w-5 h-5" />
  </a>

  {/* YouTube */}
  <a href="https://youtube.com/@mentoraeducationalservices?si=OP5C0wJXEvd1hG63" target="_blank" rel="noreferrer" 
     className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-accent hover:text-black transition-all">
    <Youtube className="w-5 h-5" />
  </a>

  {/* TikTok - Actual Official Logo */}
<a href="https://www.tiktok.com/@mentora.educationa?_r=1&_t=ZS-96JXezta3mu" target="_blank" rel="noreferrer" 
   className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-accent hover:text-black transition-all">
  <svg 
    fill="currentColor" 
    width="20px" 
    height="20px" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
  </svg>
</a>

  {/* WhatsApp Official SVG Logo */}
  <a href="https://whatsapp.com/channel/0029Vb7LYQ08PgsFpiZg3i3G" target="_blank" rel="noreferrer" 
     className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-accent hover:text-black transition-all">
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  </a>
</div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5 text-accent">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-smooth">Home</a></li>
               <li><a href="#services" className="hover:text-foreground transition-smooth">Services</a></li>
               <li><a href="#gallery" className="hover:text-foreground transition-smooth">Gallery</a></li>
              <li><a href="#destinations" className="hover:text-foreground transition-smooth">Countries</a></li>
              <li><a href="#ceo" className="hover:text-foreground transition-smooth">CEO</a></li>
              <li><a href="#ceo" className="hover:text-foreground transition-smooth">About</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-smooth">Apply Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5 text-accent">Hafizabad Office</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>Usama Block 
47- Sunny Garden ,<br />Hafizabad, Punjab, Pakistan</span>
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

export default Index;
