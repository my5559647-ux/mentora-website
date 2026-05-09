import {
  GraduationCap, FileCheck, Plane, LifeBuoy, ArrowRight, Sparkles,
  Phone, Mail, MapPin, Globe2, Users, Trophy, Quote,
  Facebook, Instagram, Linkedin, PlaneTakeoff,
  Menu, X // <-- Ye do icons add kiye
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

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // <-- Menu state

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40">
        <div className="container flex items-center justify-between h-20 px-4">
          <a href="#" className="flex items-center gap-3" aria-label="Mentora — Education Consultancy">
            <span className="w-11 h-11 rounded-xl bg-primary grid place-items-center shadow-soft shrink-0">
              <Plane className="w-6 h-6 text-[hsl(220_85%_55%)] rotate-45" strokeWidth={2.25} />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className="text-2xl md:text-[1.6rem] font-bold tracking-[0.18em] text-white"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                MENTORA
              </span>
              <span
                className="mt-1 text-[0.62rem] md:text-[0.68rem] font-semibold tracking-[0.32em] text-accent uppercase"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
              >
                Education Consultancy
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary transition-smooth">Home</a>
            <a href="#services" className="hover:text-primary transition-smooth">Services</a>
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
                <div className="text-4xl lg:text-5xl font-bold text-gradient" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>500+</div>
                <div className="mt-1 text-xs text-muted-foreground font-medium uppercase tracking-wider">Students Placed</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-gradient" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>15+</div>
                <div className="mt-1 text-xs text-muted-foreground font-medium uppercase tracking-wider">Countries</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-gradient" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>98%</div>
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
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold text-[#be123c] uppercase tracking-wider">Destinations</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-slate-900">
            Study in the world's <span className="text-[#be123c]">finest cities.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg">We have established partnerships with top-ranked universities across eight chosen destinations.</p>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((d, i) => (
            <div key={i} className="group bg-[#0a1128] text-white border border-slate-800 rounded-2xl p-6 text-center hover:bg-[#0f1a3a] transition-all duration-300 flex flex-col items-center min-h-[220px]">
              
              {/* Simple Flag Image */}
              <div className="mb-6 w-20 h-14 overflow-hidden rounded shadow-lg border border-white/10">
                <img 
                  src={`https://flagcdn.com/w320/${d.code}.png`} 
                  alt={d.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-grow flex flex-col justify-center">
                <h3 className="text-lg font-bold mb-1 text-white">{d.name}</h3>
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">{d.tag}</p>
              </div>

              {/* Arrow Icon */}
              <div className="mt-4 opacity-30 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>

            </div>
          ))}
        </div>
      </div>
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
            <div className="text-sm md:text-base font-bold text-slate-900 break-all sm:break-normal">
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
              <a href="tel:03153085976" className="hover:text-[#be123c] transition-colors">0315-3085976</a>
              <a href="tel:03001234567" className="hover:text-[#be123c] transition-colors">0301 3085975</a>
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
              <span className="w-11 h-11 rounded-xl bg-primary grid place-items-center shrink-0">
                <Plane className="w-6 h-6 text-[hsl(220_85%_55%)] rotate-45" strokeWidth={2.25} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-2xl font-bold tracking-[0.18em] text-white" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>MENTORA</span>
                <span className="mt-1 text-[0.62rem] font-semibold tracking-[0.32em] text-accent uppercase">Education Consultancy</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Pakistan's premium education consultancy, guiding students toward world-class universities with personalized mentorship from application to arrival.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground grid place-items-center transition-smooth">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5 text-accent">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-smooth">Home</a></li>
               <li><a href="#services" className="hover:text-foreground transition-smooth">Services</a></li>
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
                <span>Main Bazaar Road,<br />Hafizabad, Punjab, Pakistan</span>
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
