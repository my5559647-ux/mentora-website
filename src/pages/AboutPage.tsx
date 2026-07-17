import React from 'react';

import { Link } from 'react-router-dom';



const AboutPage: React.FC = () => {

  // Future-Proof Team Data: Jab bhi naya member aaye, bas is array mein object add kar dein

  const teamMembers = [

    { id: 1, name: "CEO Name", role: "Chief Executive Officer", image: "/placeholder-ceo.jpg" },

    { id: 2, name: "Senior Counselor", role: "UK & Europe Specialist", image: "/placeholder-team.jpg" },

    { id: 3, name: "Visa Officer", role: "Documentation Expert", image: "/placeholder-team.jpg" },

    { id: 4, name: "Student Advisor", role: "Career Counseling", image: "/placeholder-team.jpg" },

    // Future mein naye members yahan add karte jayein...

  ];



  return (

    <div className="min-h-screen bg-[#030712] text-white py-16 px-4 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto">

        

        {/* Back Link to Home */}

        <Link to="/" className="text-sm text-slate-400 hover:text-red-500 transition-colors inline-flex items-center gap-2 mb-8">

          ← Back to Home

        </Link>



        {/* Header Section (Based on image_9e968a.png) */}

        <div className="text-center mb-16">

          <span className="text-red-500 font-semibold uppercase tracking-wider text-sm bg-red-500/10 px-3 py-1 rounded-full">

            WHO WE ARE

          </span>

          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-4 max-w-3xl mx-auto leading-tight">

            Guiding Students Towards a <span className="text-red-500">Global Future</span>

          </h1>

          <p className="text-slate-400 mt-6 text-lg max-w-3xl mx-auto leading-relaxed">

            Mentora Education Consultancy is your trusted partner for international education. Based in Sunny Garden, Hafizabad, we combine deep local knowledge with global expertise to help you achieve your dreams.

          </p>

        </div>



        {/* Trust Badges & SECP Status Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 items-center">

          <div className="space-y-6">

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">

              <h3 className="text-xl font-bold text-amber-500 flex items-center gap-2">🎯 Personalized Counseling</h3>

              <p className="text-slate-400 mt-2 text-sm">We assess each student's profile individually to match them with the best global universities according to their academic background and budget.</p>

            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">

              <h3 className="text-xl font-bold text-red-500 flex items-center gap-2">📋 End-to-End Support</h3>

              <p className="text-slate-400 mt-2 text-sm">From initial university shortlisting and SOP evaluation to professional visa documentation and mock interview prep.</p>

            </div>

          </div>



          {/* SECP Image Representation Card */}

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-xl relative overflow-hidden group hover:border-red-500/30 transition-all">

            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl"></div>

            <h3 className="text-2xl font-serif font-bold text-emerald-500 mb-2">Alhamdulillah</h3>

            <p className="text-lg font-semibold tracking-wide text-slate-200">We are officially registered from SECP and IPO</p>

            <div className="my-6 border-y border-slate-800 py-4">

              <span className="text-amber-500 font-bold block text-xl">"Registered & Trusted"</span>

              <span className="text-xs text-slate-400 uppercase tracking-widest block mt-1">SECP & IPO Pakistan Certified</span>

            </div>

            <p className="text-sm text-slate-400">Sunny Garden, Hafizabad, Punjab, Pakistan</p>

          </div>

        </div>



        {/* CEO Message Section (Based on image_9e966e.jpg) */}

        <div className="bg-gradient-to-br from-slate-900 to-[#0b0f19] border border-slate-800 rounded-3xl p-8 md:p-12 mb-20 relative">

          <div className="max-w-4xl">

            <span className="text-amber-500 text-6xl font-serif absolute top-4 left-6 opacity-20">“</span>

            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-snug mb-6 text-slate-100">

              "At Mentora, we don't just process applications — <span className="text-red-500 italic">we shape destinies.</span>"

            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">

              Every student deserves a mentor who believes in their dream as much as they do. That belief is the foundation of everything we build. Here at Mentora, we ensure that your pathway to global education is seamless, transparent, and completely optimized for your ultimate career success.

            </p>

            <div>

              <h4 className="font-bold text-xl text-amber-500">CEO Message</h4>

              <p className="text-sm text-slate-400">Mentora Education Consultancy</p>

            </div>

          </div>

        </div>



        {/* Meet Our Team Grid (Future Ready Capacity) */}

        <div className="text-center mb-12">

          <h2 className="text-3xl font-serif font-bold tracking-wider">MEET OUR TEAM</h2>

          <p className="text-sm text-slate-400 mt-2">The dedicated experts making your international dreams a reality</p>

        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {teamMembers.map((member) => (

            <div key={member.id} className="bg-slate-950 border border-slate-800 p-4 rounded-2xl text-center group hover:border-amber-500/30 transition-all duration-300">

              <div className="w-full aspect-square bg-slate-900 rounded-xl mb-4 overflow-hidden border border-slate-800 flex items-center justify-center">

                {/* Image tag with dynamic source */}

                <div className="text-slate-600 text-sm">Mentora Logo/Pic Profile</div>

              </div>

              <h4 className="font-bold text-lg text-slate-200 group-hover:text-amber-500 transition-colors">{member.name}</h4>

              <p className="text-sm text-red-500 mt-1">{member.role}</p>

            </div>

          ))}

        </div>



      </div>

    </div>

  );

};



export default AboutPage;
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