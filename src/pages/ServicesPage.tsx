import React from 'react';

import { Link } from 'react-router-dom';



const ServicesPage: React.FC = () => {

  // Future-Proof Services Array: Jab bhi koi nayi service add karni ho, bas is array mein object barha dein

  const detailedServices = [

    {

      id: 1,

      icon: "🎓",

      title: "University Admissions",

      subtitle: "Personalized university shortlisting, application strategy and SOP crafting for top global institutions.",

      details: [

        "Profile Evaluation: Detailed assessment of your academic background, grades, and financial budget.",

        "University Shortlisting: Finding the best matches across global destinations suited to your goals.",

        "Documentation Assistance: Complete guidance on preparing your Statement of Purpose (SOP), Letters of Recommendation (LORs), and CV.",

        "Application Submission: End-to-end management of university submission deadlines and follow-ups."

      ]

    },

    {

      id: 2,

      icon: "📄",

      title: "Visa Preparation",

      subtitle: "End-to-end visa documentation, financial planning and mock interview coaching with a 98% approval rate.",

      details: [

        "Financial File Setup: Expert guidelines on maintaining bank statements and sponsorship files.",

        "Visa Application Filing: Error-free processing of student visa forms according to high commission rules.",

        "Mock Interview Prep: Live practice sessions with senior counselors to boost your confidence.",

        "Post-Visa Briefing: Essential pre-departure advice covering accommodation, travel insurance, and foreign currency."

      ]

    },

    // Future expansion points (Inko uncomment karke aap active kar sakti hain):

    /*

    {

      id: 3,

      icon: "✍",

      title: "IELTS & Language Coaching",

      subtitle: "Expert-led training modules for language proficiency exams.",

      details: ["Mock tests", "Grammar analysis", "Speaking session drills"]

    }

    */

  ];



  return (

    <div className="min-h-screen bg-[#030712] text-white py-16 px-4 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto">

        

        {/* Back Link to Home */}

        <Link to="/" className="text-sm text-slate-400 hover:text-red-500 transition-colors inline-flex items-center gap-2 mb-8">

          ← Back to Home

        </Link>



        {/* Header Section (Based on image_9e932b.jpg) */}

        <div className="text-center mb-16">

          <span className="text-red-500 font-semibold uppercase tracking-wider text-sm bg-red-500/10 px-3 py-1 rounded-full">

            OUR SERVICES

          </span>

          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-4 leading-tight">

            Everything you need, <span className="text-red-500">end to end.</span>

          </h1>

          <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">

            Four pillars of support that take you from a hopeful applicant to a confident global citizen.

          </p>

        </div>



        {/* Detailed Services Stack */}

        <div className="space-y-12">

          {detailedServices.map((service) => (

            <div 

              key={service.id} 

              className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 md:p-10 hover:border-red-500/30 transition-all duration-300 shadow-xl"

            >

              {/* Header inside Card */}

              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 border-b border-slate-800 pb-6">

                <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center text-3xl">

                  {service.icon}

                </div>

                <div>

                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-100">{service.title}</h2>

                  <p className="text-sm text-slate-400 mt-1 max-w-3xl">{service.subtitle}</p>

                </div>

              </div>



              {/* In-depth breakdown lists for future data scaling */}

              <div>

                <h3 className="text-amber-500 font-semibold text-sm uppercase tracking-wider mb-4">What's Included:</h3>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {service.details.map((detail, index) => {

                    const [title, desc] = detail.split(": ");

                    return (

                      <li key={index} className="bg-slate-950 border border-slate-800/80 p-4 rounded-xl flex flex-col justify-start">

                        <span className="font-bold text-slate-200 text-base mb-1 flex items-center gap-2">

                          <span className="text-red-500">✔</span> {title}

                        </span>

                        {desc && <span className="text-sm text-slate-400 leading-relaxed">{desc}</span>}

                      </li>

                    );

                  })}

                </ul>

              </div>

            </div>

          ))}

        </div>



        {/* Bottom Call to Action for Services */}

        <div className="mt-16 bg-gradient-to-r from-red-950/30 to-slate-900 border border-slate-800/80 p-8 rounded-3xl text-center">

          <h2 className="text-2xl font-bold font-serif mb-2 text-slate-200">Need Guidance on a Specific Case?</h2>

          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-6">Our senior advisors can evaluate your academics and gap-years to suggest customized educational pathways.</p>

          <button className="bg-red-600 hover:bg-red-700 font-bold px-8 py-3 rounded-full transition-transform active:scale-95 text-sm">

            Consult Our Experts Now

          </button>

        </div>



      </div>

    </div>

  );

};



export default ServicesPage;
import React from 'react';
import { 
  GraduationCap, 
  FileText, 
  Plane, 
  LifeBuoy, 
  CheckCircle2, 
  ArrowRight,
  BookOpen,
  Briefcase
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  
  const coreServices = [
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      title: "University Admissions",
      description: "Personalized university shortlisting, application strategy and SOP crafting for top global institutions.",
      features: ["Profile Evaluation", "SOP & CV Writing Support", "Scholarship Application"]
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Visa Preparation",
      description: "End-to-end visa documentation, financial planning and mock interview coaching with a 98% approval rate.",
      features: ["Document Verification", "Interview Preparation", "Financial File Guidance"]
    },
    {
      icon: <Plane className="w-8 h-8 text-white" />,
      title: "Pre-Departure",
      description: "Travel planning, accommodation, forex guidance and cultural orientation before you fly.",
      features: ["Flight Bookings", "Secure Accommodation", "Pre-Flight Briefing"]
    },
    {
      icon: <LifeBuoy className="w-8 h-8 text-white" />,
      title: "Post-Arrival Support",
      description: "Airport pickup, bank account setup, SIM activation and on-ground mentorship in your new city.",
      features: ["Airport Pick & Drop", "SIM & Bank Account Setup", "Student Community Meetups"]
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Counseling",
      description: "We analyze your academic history, budget, and career goals to recommend the perfect match."
    },
    {
      num: "02",
      title: "Documentation",
      description: "Our experts help prepare flawless applications, essays, and required certifications."
    },
    {
      num: "03",
      title: "Admission & Visa",
      description: "We secure your admission offer letter and manage the complex visa application process smoothly."
    },
    {
      num: "04",
      title: "Fly & Settle",
      description: "We pack your bags, brief you on foreign life, and guide you until you are comfortable abroad."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 text-center max-w-4xl mx-auto">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <span className="inline-block bg-red-600/10 text-red-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
          Our Services
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Shaping Futures, <span className="text-[#f1c40f]">End-to-End.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Whether you need help choosing the right degree or settling into your new host country, 
          Mentora guides you every single step of the way.
        </p>
      </section>

      {/* 2. CORE SERVICES SECTION (Dark Theme Grid) */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#121829] border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40 hover:border-red-600/20"
            >
              <div>
                {/* Red Icon Box */}
                <div className="bg-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              
              {/* Bullet Points with Yellow Checkmark */}
              <ul className="border-t border-white/10 pt-6 space-y-3">
                {service.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#f1c40f]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROCESS SECTION (White Background with Dark Blue & Red/Yellow Accent) */}
      <section className="bg-slate-50 text-slate-900 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-red-100 text-red-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Our Process
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[#0a0e1a]">
            How We Make It <span className="text-red-600">Happen</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-16 text-sm md:text-base">
            A simple, transparent, and structured path to your dream international university.
          </p>

          {/* Process Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                {/* Big light red number in background */}
                <span className="absolute top-4 right-6 font-serif text-5xl font-black text-red-600/10 select-none">
                  {step.num}
                </span>
                
                <h4 className="font-serif text-xl font-bold text-[#0a0e1a] mb-3 mt-4">
                  {step.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;