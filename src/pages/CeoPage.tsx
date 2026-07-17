import React from 'react';
import { Quote, Award, Users, Target, ArrowRight } from 'lucide-react';

const CeoPage: React.FC = () => {
  const teamMembers = [
    { 
      name: "Muhammad Awais Munir", 
      role: "Chief Executive Officer", 
      image: "/ceo.jpeg",
      bio: "Visionary leader with 10+ years of experience in international education consulting."
    },
    { 
      name: "Ch. Umar Shan", 
      role: "Senior Counselor", 
      image: "/munir.jpeg",
      bio: "UK & Europe specialist with expertise in university admissions and visa processing."
    },
    { 
      name: "Bilal Hassan Bhatti", 
      role: "Legal Advisor", 
      image: "/bilal.jpeg",
      bio: "Legal expert ensuring compliance and documentation excellence."
    },
    { 
      name: "Wajahat Ullah Wasti", 
      role: "Student Advisor", 
      image: "/wasti.jpeg",
      bio: "Career counseling expert helping students achieve their academic goals."
    }
  ];

  return (
    <div>
      {/* Hero Section - Dark Navy Background */}
      <section className="relative py-24 lg:py-32 bg-[#030712] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#0a1128] to-[#030712]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-red-500 font-semibold uppercase tracking-wider text-sm bg-red-500/10 px-4 py-2 rounded-full inline-block mb-6">
              Leadership
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Meet Our <span className="text-red-500">Leadership</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              The visionaries and experts dedicated to shaping your global education journey.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Message - White Background */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl" />
              <Quote className="absolute top-6 left-6 w-12 h-12 text-red-600/20" />
              
              <div className="relative z-10">
                <span className="text-red-600 font-semibold uppercase tracking-wider text-sm mb-4 block">
                  CEO Message
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 leading-snug">
                  "At Mentora, we don't just process applications — <span className="text-red-500 italic">we shape destinies.</span>"
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-3xl">
                  Every student deserves a mentor who believes in their dream as much as they do. That belief is the foundation of everything we build. Here at Mentora, we ensure that your pathway to global education is seamless, transparent, and completely optimized for your ultimate career success.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    M
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-lg">Muhammad Awais Munir</h4>
                    <p className="text-red-600 text-sm">Chief Executive Officer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Dark Navy Background */}
      <section className="py-24 lg:py-32 bg-[#050a18]">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-amber-500 font-semibold uppercase tracking-wider text-sm mb-4 block">
                Our Team
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Meet Our Experts
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                The dedicated professionals making your international dreams a reality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <div key={member.name} className="group bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all">
                  <div className="aspect-square bg-slate-950 relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h4 className="font-bold text-lg text-white group-hover:text-amber-500 transition-colors">{member.name}</h4>
                    <p className="text-sm text-red-500 mt-1 mb-3">{member.role}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - White Background */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm mb-4 block">
                Our Values
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                What Drives Us
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Student Success</h3>
                <p className="text-slate-600 leading-relaxed">Every decision we make is centered on helping students achieve their dreams.</p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Excellence</h3>
                <p className="text-slate-600 leading-relaxed">We maintain the highest standards in education consulting and service delivery.</p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Integrity</h3>
                <p className="text-slate-600 leading-relaxed">Transparent and honest guidance in every interaction with our students.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient Background */}
      <section className="py-24 lg:py-32 bg-gradient-to-r from-red-950/50 via-[#030712] to-red-950/50 border-t border-slate-800">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Work With Our Team?
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Connect with our expert counselors today and let us help you achieve your global education dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/923153085976" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CeoPage;
