import React from 'react';
import { Target, Lightbulb, ShieldCheck } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans">

      {/* ================= 1. TOP SECTION: MINI HERO (PLAIN DARK GRADIENT - NO DOTS) ================= */}
      <section className="relative py-24 bg-gradient-to-tr from-[#030712] via-[#091129] to-[#18122b] text-white overflow-hidden text-center border-b border-slate-900">
        
        {/* Soft atmospheric radial glow for premium look (just like the second screenshot) */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-[#f1b434] font-bold uppercase tracking-widest text-xs bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-block mb-6">
            Learn More About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 font-serif tracking-tight">
            Your Trusted Pathway to Global Success
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            At Mentora, we don't just guide; we build futures. Discover who we are, our core values, and why thousands of students trust us with their careers.
          </p>
        </div>
      </section>


      {/* ================= 2. MIDDLE SECTION: EXACTLY YOUR CHOSEN SECTION ================= */}
      <section id="about" className="py-20 bg-white scroll-mt-20 border-b border-slate-100">
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


      {/* ================= 3. BOTTOM SECTION: CORE VALUES & STATS ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-12 max-w-7xl">
          
          <div className="text-center mb-16">
            <span className="text-rose-600 font-bold uppercase tracking-widest text-xs block mb-2">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1128]">
              Our Guiding Principles
            </h2>
            <div className="w-16 h-1 bg-rose-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 text-center hover:shadow-lg transition duration-300">
              <div className="w-14 h-14 bg-rose-50 text-[#be123c] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1128] mb-3">Clear & Honest Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We believe in complete transparency. Our consultants provide genuine feedback and accurate requirements to ensure high visa success rates.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 text-center hover:shadow-lg transition duration-300">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1128] mb-3">100% SECP Compliant</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                As a verified and officially registered consultancy in Pakistan, your document security and procedural legalities are fully protected under secure frameworks.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 text-center hover:shadow-lg transition duration-300">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1128] mb-3">Tailored Opportunities</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                From finding budget-friendly institutes to seeking eligible scholarships, we tailor-make study paths for your unique profile constraints.
              </p>
            </div>

          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-[#0c122f] text-white rounded-[2rem] p-10 mt-16 text-center">
            <div>
              <p className="text-4xl font-extrabold text-[#f1b434]">100%</p>
              <p className="text-slate-400 text-xs uppercase tracking-widest mt-2 font-semibold">Legally Registered</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-[#f1b434]">5+</p>
              <p className="text-slate-400 text-xs uppercase tracking-widest mt-2 font-semibold">Global Destinations</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-[#f1b434]">1-on-1</p>
              <p className="text-slate-400 text-xs uppercase tracking-widest mt-2 font-semibold">Personal Focus</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-[#f1b434]">FREE</p>
              <p className="text-slate-400 text-xs uppercase tracking-widest mt-2 font-semibold">Initial Evaluation</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;