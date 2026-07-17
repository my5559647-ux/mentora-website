import React from 'react';
import { GraduationCap, Clock, Award, CheckCircle, BookOpen, Users, Target, TrendingUp, ArrowRight } from 'lucide-react';

const PtePage: React.FC = () => {

  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScD07xOCfNhPU90DRzd9H65anyWvIhcTI3OOyGybLu-Qxjs3w/viewform";
  const GOOGLE_FORM_NEW_TAB_URL = "https://docs.google.com/forms/d/e/1FAIpQLScD07xOCfNhPU90DRzd9H65anyWvIhcTI3OOyGybLu-Qxjs3w/viewform";

  const courseFeatures = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Expert-Led Training",
      description: "Learn from certified PTE instructors with extensive experience in helping students achieve 79+ scores."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Schedule",
      description: "Morning, evening, and weekend batches available to accommodate students and working professionals."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Mock Tests & Practice",
      description: "Regular mock tests with real exam simulation and detailed performance analysis."
    }
  ];

  const testModules = [
    {
      name: "Speaking & Writing",
      duration: "77-93 minutes",
      description: "Personal introduction, read aloud, repeat sentence, describe image, re-tell lecture, answer short questions, summarize written text, write essay."
    },
    {
      name: "Reading",
      duration: "32-41 minutes",
      description: "Fill in the blanks, multiple choice questions, re-order paragraphs with academic and general content."
    },
    {
      name: "Listening",
      duration: "45-57 minutes",
      description: "Summarize spoken text, multiple choice questions, fill in the blanks, highlight correct summary, write from dictation."
    }
  ];

  const whatsIncluded = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Comprehensive Study Materials",
      description: "Access to premium study guides, practice tests, and real exam questions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Small Batch Sizes",
      description: "Personalized attention with maximum 10 students per batch for focused learning."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Score Guarantee",
      description: "Proven strategies to improve your score by 10+ points with dedicated coaching."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Progress Tracking",
      description: "Weekly assessments and detailed feedback to track your improvement journey."
    }
  ];

  return (
    <div className="bg-[#030712] text-white min-h-screen font-sans selection:bg-red-500 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-28 lg:py-40 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#091026] to-[#030712]" />
        
        {/* Abstract Glowing Orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative z-10 px-6 mx-auto max-w-5xl text-center">
          <span className="text-red-500 font-bold uppercase tracking-widest text-xs bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full inline-block mb-8 animate-pulse">
            PTE Academic Preparation
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-black text-white mb-8 leading-[1.1] tracking-tight">
            Master the <span className="text-red-500">PTE Academic</span> Exam
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Achieve your desired score with our premium structure. Get interactive lectures, certified guidance, strategy sheets, and full length actual exam portal simulation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={GOOGLE_FORM_NEW_TAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-red-600/20 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Start Registration
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </section>

      {/* ================= ABOUT PTE SECTION (WHITE THEME TO BREAK MONOTONY) ================= */}
      <section className="py-24 lg:py-32 bg-white text-[#0c122f]">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-3 block">
              About the Test
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0c122f] tracking-tight">
              What is PTE Academic?
            </h2>
            <div className="h-1 w-20 bg-red-500 mx-auto mt-6 rounded-full" />
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mt-6">
              The Pearson Test of English (PTE) Academic is a computer-based English language test trusted by universities, colleges, and governments around the world for study visa and immigration processes.
            </p>
          </div>

          {/* Test Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testModules.map((module, index) => (
              <div 
                key={index} 
                className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 hover:shadow-xl hover:border-red-500/20 transition-all duration-300 flex flex-col justify-between group min-h-[360px]"
              >
                <div>
                  <div className="w-14 h-14 bg-red-50/80 rounded-[18px] flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0c122f] mb-3 tracking-tight">
                    {module.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {module.description}
                  </p>
                </div>

                <div className="bg-[#0b122f] text-white px-5 py-3 rounded-[16px] flex items-center justify-between mt-auto">
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Duration</span>
                  <span className="text-sm font-extrabold text-amber-400">{module.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE PTE SECTION (DARK PREMIUM) ================= */}
      <section className="py-24 lg:py-32 bg-[#050a18] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.02),transparent)] pointer-events-none" />
        <div className="container px-6 mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-3 block">
              Why Choose PTE
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Benefits of PTE Academic
            </h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Fast Results", desc: "Receive your verified scorecard within 48 hours, eliminating long stressful wait periods." },
              { title: "Fair AI-Powered Assessment", desc: "Computerized automated grading guarantees completely objective, unbiased evaluation of capabilities." },
              { title: "Flexible Registrations", desc: "Book your examination slot anytime you desire with test sessions running 365 days a year globally." },
              { title: "Global Acceptance", desc: "Accepted for study, work and migration in Australia, United Kingdom, USA, Canada, and New Zealand." }
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

      {/* ================= WHAT'S INCLUDED (WHITE MONOCHROME CLASSY) ================= */}
      <section className="py-24 lg:py-32 bg-white text-[#0c122f]">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-3 block">
              Our Program
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0c122f] tracking-tight">
              What's Included in Our Coaching
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

      {/* ================= COURSE FEATURES (DARK COAL THEME) ================= */}
      <section className="py-24 lg:py-32 bg-[#030712] relative border-t border-slate-900">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-3 block">
              Features
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Premium Course Features
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

      {/* ================= REGISTRATION SECTION (ONLY FOCUS ON REGISTRATION) ================= */}
      <section className="py-24 lg:py-32 bg-white text-[#0c122f] relative">
        <div className="container px-6 mx-auto max-w-4xl text-center">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 block">
            Register Now
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0c122f] tracking-tight leading-tight">
            Apply For PTE Coaching Batch
          </h2>
          <div className="h-1 w-20 bg-red-500 mx-auto mt-6 rounded-full" />
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed mt-8">
            Complete our standard digital registration form to secure your slot in our upcoming premium batch or to get a custom invitation for a free initial session.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a 
              href={GOOGLE_FORM_NEW_TAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#0b122f] hover:bg-[#111c47] text-white font-bold px-10 py-5 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2 cursor-pointer"
            >
              Open Online Application Form
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PtePage;