import React from 'react';
import { GraduationCap, Clock, Award, CheckCircle, BookOpen, Users, Target, TrendingUp, Mic, FileText, MessageSquare, ArrowRight } from 'lucide-react';

const IeltsPage: React.FC = () => {

  // GOOGLE FORM LINKS
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScD07xOCfNhPU90DRzd9H65anyWvIhcTI3OOyGybLu-Qxjs3w/viewform";
  const GOOGLE_FORM_NEW_TAB_URL = "https://docs.google.com/forms/d/e/1FAIpQLScD07xOCfNhPU90DRzd9H65anyWvIhcTI3OOyGybLu-Qxjs3w/viewform";

  const courseFeatures = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Certified Instructors",
      description: "Learn from top-rated, certified IELTS trainers with 10+ years of coaching success."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Timings",
      description: "Convenient morning, afternoon, and intensive weekend slots tailored for professionals and students."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Real Exam Simulations",
      description: "Get access to 30+ full-length mock tests mapped directly to official Cambridge patterns."
    }
  ];

  const testModules = [
    {
      name: "Listening Module",
      duration: "30 minutes (+10m transfer time)",
      icon: <Mic className="w-6 h-6" />,
      description: "4 distinct sections featuring 40 questions. Master tactics for identifying monologues, academic lectures, and multi-speaker conversations."
    },
    {
      name: "Reading Module",
      duration: "60 minutes",
      icon: <FileText className="w-6 h-6" />,
      description: "3 detailed passages with 40 questions. Develop high-speed skimming, scanning, and contextual understanding for Academic or General Training."
    },
    {
      name: "Writing Module",
      duration: "60 minutes",
      icon: <FileText className="w-6 h-6" />,
      description: "Task 1 (Data interpretation/Letter) and Task 2 (Opinion/Discussion Essay). Learn structured vocabulary and paragraph frameworks."
    },
    {
      name: "Speaking Module",
      duration: "11-14 minutes",
      icon: <MessageSquare className="w-6 h-6" />,
      description: "A 3-part active conversation with a certified examiner. Build confidence in talking about familiar topics, speaking on a cue card, and logical discussions."
    }
  ];

  const whatsIncluded = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Exclusive Cambridge Prep Kits",
      description: "Get comprehensive, up-to-date physical or digital resources, custom templates, and band-descriptor breakdown sheets."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Focused Small Batches",
      description: "Our limited batch sizes guarantee personalized feedback on your daily essays and spoken cue cards."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Band Score Boost Roadmap",
      description: "Proven diagnostic assessment strategy designed to lift your overall proficiency by 1.5+ Band points."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Granular Diagnostics & Audits",
      description: "Receive weekly score reports and individualized feedback detailing lexical resource, grammar accuracy, and coherence."
    }
  ];

  return (
    <div className="bg-[#030712] text-white min-h-screen font-sans selection:bg-red-500 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-28 lg:py-40 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#091026] to-[#030712]" />
        
        {/* Glow Effects */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative z-10 px-6 mx-auto max-w-5xl text-center">
          <span className="text-red-500 font-bold uppercase tracking-widest text-xs bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full inline-block mb-8 animate-pulse">
            IELTS Preparation Program
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-black text-white mb-8 leading-[1.1] tracking-tight">
            Crack the <span className="text-red-500">IELTS Exam</span> on Your First Attempt
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you need IELTS Academic for universities or General Training for immigration, access expert-led personalized learning built around result-yielding strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={GOOGLE_FORM_NEW_TAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-red-600/20 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Apply for Coaching Batch
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </section>

      {/* ================= ABOUT IELTS SECTION (WHITE THEME) ================= */}
      <section className="py-24 lg:py-32 bg-white text-[#0c122f]">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-3 block">
              About the Test
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0c122f] tracking-tight">
              Understanding the IELTS Structure
            </h2>
            <div className="h-1 w-20 bg-red-500 mx-auto mt-6 rounded-full" />
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mt-6">
              The International English Language Testing System evaluates your practical language capabilities. Our rigorous training maps down each core module structure to perfection:
            </p>
          </div>

          {/* Test Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testModules.map((module, index) => (
              <div 
                key={index} 
                className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 hover:shadow-xl hover:border-red-500/20 transition-all duration-300 flex flex-col justify-between group min-h-[280px]"
              >
                <div>
                  <div className="w-14 h-14 bg-red-50 rounded-[18px] flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    {module.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0c122f] mb-3 tracking-tight">
                    {module.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {module.description}
                  </p>
                </div>

                <div className="bg-[#0b122f] text-white px-5 py-3 rounded-[16px] flex items-center justify-between mt-auto">
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Recommended Duration</span>
                  <span className="text-sm font-extrabold text-amber-400">{module.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE IELTS SECTION (DARK PREMIUM) ================= */}
      <section className="py-24 lg:py-32 bg-[#050a18] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.02),transparent)] pointer-events-none" />
        <div className="container px-6 mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-3 block">
              Test Benefits
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Why Prepare With Us?
            </h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Universal Global Recognition", desc: "Open paths to over 11,500 institutions worldwide across the US, UK, Canada, Australia, and Europe." },
              { title: "Strategic Format Coaching", desc: "Build exact tactics to answer complex MCQs, sentence completion, essay coherence, and cue card structures." },
              { title: "Standardized Evaluation Checkpoints", desc: "Regular evaluation maps out your immediate weaknesses so you never walk in unprepared." },
              { title: "Flexible Testing Adaptability", desc: "Prepare with simulated materials compatible with both the paper-based or computer-delivered IELTS formats." }
            ].map((benefit, idx) => (
              <div 
                key={idx} 
                className="bg-[#0b122f]/60 backdrop-blur-xs border border-slate-800/80 rounded-[24px] p-8 hover:border-amber-500/20 transition-all duration-300 flex items-start gap-5 group"
              >
                <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center text-red-500 shrink-0 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                  <CheckCircle className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT'S INCLUDED (WHITE THEME) ================= */}
      <section className="py-24 lg:py-32 bg-white text-[#0c122f]">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-3 block">
              Coaching Highlights
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0c122f] tracking-tight">
              Premium Resource Bundle & Perks
            </h2>
            <div className="h-1 w-20 bg-red-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatsIncluded.map((item, index) => (
              <div 
                key={index} 
                className="bg-slate-50 border border-slate-100 rounded-[28px] p-8 hover:shadow-xl transition-all duration-300 group flex gap-6 items-start"
              >
                <div className="w-16 h-16 bg-red-50 rounded-[20px] flex items-center justify-center text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0c122f] mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COURSE FEATURES (DARK COAL) ================= */}
      <section className="py-24 lg:py-32 bg-[#030712] relative border-t border-slate-900">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-3 block">
              Features
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Structured Study Frameworks
            </h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courseFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-[#0b122f]/40 border border-slate-800/80 p-8 rounded-[28px] hover:border-red-500/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-red-500/10 rounded-[18px] flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REGISTRATION SECTION ================= */}
      <section className="py-24 lg:py-32 bg-white text-[#0c122f] relative">
        <div className="container px-6 mx-auto max-w-4xl text-center">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block">
            Official Enrolment
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0c122f] tracking-tight leading-tight">
            Apply For Our Next IELTS Batch
          </h2>
          <div className="h-1 w-20 bg-red-500 mx-auto mt-6 rounded-full" />
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed mt-8">
            Secure your slot in our premium prep program. Complete your registration process in real time using our embedded portal or open it in a secondary secure tab.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a 
              href={GOOGLE_FORM_NEW_TAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#0b122f] hover:bg-[#111c47] text-white font-bold px-10 py-5 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2 cursor-pointer"
            >
              Open Application Form
            </a>
          </div>
        </div>
      </section>


    </div>
  );
};

export default IeltsPage;