import React from 'react';

import { Link } from 'react-router-dom';



const CountriesPage: React.FC = () => {

  // Array based on your exact code from image_9e9a2e.jpg and cards from image_9e93a7.png

  const destinations = [

    { name: "United Kingdom", code: "GB", flag: "🇬🇧", tag: "Russell Group & Top Rankings" },

    { name: "Turkey", code: "TR", flag: "🇹🇷", tag: "Scholarships Available" },

    { name: "Malaysia", code: "MY", flag: "🇲🇾", tag: "Affordable Excellence" },

    { name: "Cyprus", code: "CY", flag: "🇨🇾", tag: "EU Recognized Degrees" },

    { name: "France", code: "FR", flag: "🇫🇷", tag: "World-Class Research" },

    { name: "Canada", code: "CA", flag: "🇨🇦", tag: "Post-Study Work Visa" },

    { name: "United States", code: "US", flag: "🇺🇸", tag: "Ivy League & Innovation" },

    { name: "Australia", code: "AU", flag: "🇦🇺", tag: "Top Ranked Universities" },

    // Italy and Romania from image_9e93a1.png can also be verified/added here:

    { name: "Italy", code: "IT", flag: "🇮🇹", tag: "Cultural Heritage" },

    { name: "Romania", code: "RO", flag: "🇷🇴", tag: "Technical Education" }

  ];



  return (

    <div className="min-h-screen bg-[#030712] text-white py-16 px-4 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto">

        

        {/* Back Link to Home */}

        <Link to="/" className="text-sm text-slate-400 hover:text-red-500 transition-colors inline-flex items-center gap-2 mb-8">

          ← Back to Home

        </Link>



        {/* Header Section (Based on image_9e93a1.png) */}

        <div className="mb-16">

          <span className="text-red-500 font-semibold uppercase tracking-wider text-sm bg-red-500/10 px-3 py-1 rounded-full">

            COUNTRIES

          </span>

          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-4 leading-tight">

            Study in the world's <span className="text-red-500 italic font-serif">finest</span> cities.

          </h1>

          <p className="text-slate-400 mt-4 text-base max-w-3xl leading-relaxed">

            We have established partnerships with top-ranked universities across eight chosen countries. Explore your global opportunities below.

          </p>

        </div>



        {/* Countries Grid Layout (Based on image_9e93a7.png) */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {destinations.map((country, index) => (

            <div 

              key={index} 

              className="bg-[#0b0f19] border border-slate-800/80 p-8 rounded-2xl flex flex-col justify-between items-center text-center group hover:border-red-500/40 hover:bg-slate-900/40 transition-all duration-300 shadow-xl"

            >

              {/* Flag Container */}

              <div className="w-24 h-16 bg-[#030712] rounded-xl flex items-center justify-center text-4xl shadow-inner border border-slate-800 group-hover:scale-105 transition-transform">

                {country.flag}

              </div>



              {/* Text Meta */}

              <div className="my-6">

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-red-400 transition-colors">

                  {country.name}

                </h3>

                <p className="text-xs text-slate-400 mt-2 font-medium tracking-wide">

                  {country.tag}

                </p>

              </div>



              {/* Dynamic Red Arrow Button Link for future detail exploration */}

              <div className="text-red-500 text-xl font-bold cursor-pointer group-hover:translate-x-1 transition-transform">

                →

              </div>

            </div>

          ))}

        </div>



        {/* Future Scope Notice Banner */}

        <div className="mt-16 bg-slate-900/40 border border-slate-800 p-6 rounded-2xl text-center">

          <p className="text-xs text-slate-500 uppercase tracking-widest">

            Mounteering data dynamically? You can bind sub-routes like <code className="text-amber-500">/countries/:id</code> inside these links anytime later!

          </p>

        </div>



      </div>

    </div>

  );

};



export default CountriesPage;
import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

interface CountryData {
  id: string;
  name: string;
  tagline: string;
  flagUrl: string;
  image: string;
  isComingSoon: boolean;
  totalBudget?: string;
  intake?: string;
  deadlines?: string;
  requirements?: string[];
  expenses?: string[];
  colleges?: string[];
  universities?: string[];
}

const countriesList: CountryData[] = [
  // ================= 1. ITALY (ACTIVE) =================
  {
    id: "italy",
    name: "Italy",
    tagline: "Cultural Heritage",
    flagUrl: "https://flagcdn.com/w160/it.png",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80", // Exact Colosseum close-up matching your screenshot
    isComingSoon: false,
    totalBudget: "10 Lac",
    intake: "September",
    deadlines: "July",
    requirements: [
      "Matric + Inter degree (60%)",
      "Birth Certificate",
      "FRC",
      "Medical Certificate (5000 Rs)",
      "Police Character Certificate",
      "Bank Statement (25-30 Lac, March/May startup)",
      "Maintenance Letter",
      "4-year Gap Acceptable",
      "IELTS 6 or PTE 58"
    ],
    expenses: [
      "Consultancy Fee: €300",
      "Documents Attestation: 1 Lac",
      "Acceptance Letter: €200",
      "University Fee: €200 - €1000",
      "Embassy Fee: €50 (Prep: €30)",
      "Appointment: 3 Lac",
      "Show Money: €6000",
      "Visa Arrival: €300",
      "Health Insurance: 15000 Rs",
      "Accommodation: €250 - €1000"
    ]
  },
  // ================= 2. TURKEY (ACTIVE) =================
  {
    id: "turkey",
    name: "Turkey",
    tagline: "Cultural Heritage",
    flagUrl: "https://flagcdn.com/w160/tr.png",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80", // Exact Hagia Sophia layout matching your screenshot
    isComingSoon: false,
    totalBudget: "10 Lac",
    intake: "September",
    deadlines: "July",
    requirements: [
      "Personal & Application Documents: Visa Application form, Interview form, Valid Passport (color copy 1st 2 pages on A4 Paper), Student & Sponsor CNIC, FRC (Family Registration certificate), Travel History form, 5x6 cm White Background Photo (professional).",
      "Academic: University Offer Letter, Acceptance Letter from University, Original & Attested Educational Documents/Transcripts. Attested photocopies of all educational documents, Cover Letter/SOP (Statement of Purpose).",
      "Financial: Affidavit of financial support from sponsor (notary attested), Sponsor Proof of Income (Business Docs OR Salary Slips), 2-year Tax Returns, NTN & Tax Certificates (Student & Sponsor), Tax Certificates of Both Student & Sponsor, Bank Statement (Recent 6 Months Recommended), Account Maintenance Certificate / Letter from Bank, Updated Account Statement.",
      "Tuition Fee: Original SWIFT Transfer Receipt (Issued by the Bank).",
      "Travel & Accommodation Documents: One-Way Flight Reservation, Hotel/Accommodation Booking, Travel Health Insurance."
    ]
  },
  // ================= 3. CYPRUS (ACTIVE) =================
  {
    id: "cyprus",
    name: "Cyprus",
    tagline: "European Education",
    flagUrl: "https://flagcdn.com/w160/cy.png",
    image: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=800&q=80", // Exact Kyrenia Harbour look with sea & tree frame
    isComingSoon: false,
    totalBudget: "5000 - 6500 Euro (per year fee)",
    intake: "Sep, Jan, Feb",
    requirements: [
      "Academic: Matric, Intermediate, Bachelor (Above 50% marks)",
      "For Degree Program: IELTS 5 Bands, PTE 58 Scores",
      "For Foundation Year: IELTS 4 Bands, PTE (43 to 57) scores",
      "Foundation Duration: 3 months",
      "Gap: After inter 10 years",
      "Document Attestation: Matric/Inter docs must be attested from Board + IBCC + MOFA + Apostille"
    ],
    expenses: [
      "Consultancy Fee: 1 Lac",
      "Other Fee: 230,000",
      "Regular Case: Fee + 3 Lac"
    ],
    colleges: [
      "American College, Larnaca College, Mesoyios College, Limassol, Unclean, Philips University, Ledra College, City Unity, CIM, Casa College, Inter College, and others different Lendra colleges."
    ]
  },
  // ================= 4. ROMANIA (ACTIVE) =================
  {
    id: "romania",
    name: "Romania",
    tagline: "Technical Education",
    flagUrl: "https://flagcdn.com/w160/ro.png",
    image: "https://images.unsplash.com/photo-1568224053918-0524ff002164?auto=format&fit=crop&w=800&q=80", // Exact Palace of the Parliament building with front pathway
    isComingSoon: false,
    totalBudget: "23 Lac",
    requirements: [
      "Matric degree + result card original",
      "Intermediate degree + result card original",
      "Birth certificate",
      "Family Registration Certificate (FRC)",
      "Medical certificate 5000 Rs",
      "Police Character Certificate (visa processing time)",
      "Bank statement (20 Lac)",
      "Maintenance letter",
      "60% Marks compulsory in intermediate",
      "4 year Gap Acceptable",
      "IELTS 5.5 or PTE 58"
    ],
    expenses: [
      "Consultancy fee: €500",
      "Documents Attestations: 1 Lac",
      "Acceptance letter: €200",
      "University Fee: €3000 to €3500 (per year)",
      "Visa: Bank statement 20 Lac (for two months)",
      "Embassy Interview: 45000 (Interview preparation: 25k)",
      "Show Money: €1000",
      "Visa Arrival: €500"
    ],
    universities: [
      "Petroleum and gas uni of Ploiesti (€150) | Dates: 1st March to 15 July",
      "Politehnica Uni of Bucharest | Status: Admission accepted, acceptance awaiting",
      "Technical Uni of Cluj Napoca | Status: Application in process, Fee: €100",
      "Babes Bolyai uni | Admission: 13 July–30 July & 7 Sep–16 Sep | Program: Engineering Physics",
      "Ovidius Uni of Constanta | Fee: €200 | Admission: Open since 20 April",
      "Alexandru Ioan Cuza University of Iasi",
      "Uni of Bucharest | Admission fee: €100",
      "Gheorghe Asachi Technical Uni of Iasi | Dates: 15 April to 15 July | Fee: €80"
    ]
  },
  // ================= COMING SOON COUNTRIES =================
  {
    id: "uk",
    name: "United Kingdom",
    tagline: "Top Rankings",
    flagUrl: "https://flagcdn.com/w160/gb.png",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ca1ad?auto=format&fit=crop&w=800&q=80",
    isComingSoon: true
  },
  {
    id: "malaysia",
    name: "Malaysia",
    tagline: "Affordable",
    flagUrl: "https://flagcdn.com/w160/my.png",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc18a523?auto=format&fit=crop&w=800&q=80",
    isComingSoon: true
  },
  {
    id: "ireland",
    name: "Ireland",
    tagline: "Tech Hub",
    flagUrl: "https://flagcdn.com/w160/ie.png",
    image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=800&q=80",
    isComingSoon: true
  },
  {
    id: "south-korea",
    name: "South Korea",
    tagline: "Modern",
    flagUrl: "https://flagcdn.com/w160/kr.png",
    image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=800&q=80",
    isComingSoon: true
  }
];

export default function Countries() {
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);

  const activeCountries = countriesList.filter((c) => !c.isComingSoon);
  const comingSoonCountries = countriesList.filter((c) => c.isComingSoon);

  const handleWhatsAppRedirect = (countryName: string) => {
    const phoneNumber = "923153085976"; 
    const message = encodeURIComponent(
      `Hi Mentora Education Consultancy, I am interested in studying in ${countryName}. Please share the process and admission details.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white text-[#0c122f] pt-28 pb-20">
      <div className="container px-6 mx-auto max-w-7xl">
        
        {/* ================= ACTIVE COUNTRIES SECTION ================= */}
        <div className="mb-10">
          <h2 className="text-[40px] font-bold text-[#0c122f] tracking-tight font-serif leading-tight">
            Our Active Countries
          </h2>
          <p className="text-xs text-red-600 font-bold tracking-widest uppercase mt-2">
            APPLY NOW FOR CURRENT INTAKES
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {activeCountries.map((country) => (
            <div
              key={country.id}
              onClick={() => setSelectedCountry(country)}
              className="group relative bg-[#0b122f] hover:bg-[#0f173b] text-white rounded-[32px] overflow-hidden cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5 shadow-lg flex flex-col justify-between min-h-[350px]"
            >
              {/* Country Image Background */}
              <div className="absolute inset-0">
                <img 
                  src={country.image} 
                  alt={`${country.name}`}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b122f]/80 via-[#0b122f]/90 to-[#0b122f]" />
              </div>

              <div className="relative z-10 flex flex-col items-center pt-8">
                <div className="w-24 h-16 rounded-[12px] overflow-hidden shadow-md border border-white/10 flex items-center justify-center bg-slate-800">
                  <img 
                    src={country.flagUrl} 
                    alt={`${country.name} Flag`} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-[25px] font-black tracking-tight mt-6 font-serif text-white">
                  {country.name}
                </h3>

                <p className="text-[11px] text-slate-400 font-normal mt-2 tracking-wide">
                  {country.tagline}
                </p>
              </div>

              <div className="relative z-10 mt-8 flex justify-center text-red-500 transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>
          ))}
        </div>

        {/* ================= COMING SOON COUNTRIES SECTION ================= */}
        <div className="mb-10 pt-12 border-t border-slate-100">
          <h2 className="text-[40px] font-bold text-[#0c122f] tracking-tight font-serif leading-tight">
            Coming Soon Countries
          </h2>
          <p className="text-xs text-amber-600 font-bold tracking-widest uppercase mt-2">
            LAUNCHING SOON FOR APPLICATIONS
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {comingSoonCountries.map((country) => (
            <div
              key={country.id}
              className="group relative bg-[#0b122f] text-white rounded-[32px] overflow-hidden transition-all duration-300 shadow-lg flex flex-col justify-between min-h-[350px]"
            >
              {/* Country Image Background */}
              <div className="absolute inset-0">
                <img 
                  src={country.image} 
                  alt={`${country.name}`}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b122f]/80 via-[#0b122f]/90 to-[#0b122f]" />
              </div>

              <div className="relative z-10 flex flex-col items-center pt-8">
                <div className="w-24 h-16 rounded-[12px] overflow-hidden shadow-md border border-white/10 flex items-center justify-center bg-slate-800 opacity-80">
                  <img 
                    src={country.flagUrl} 
                    alt={`${country.name} Flag`} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-[25px] font-black tracking-tight mt-6 font-serif text-white">
                  {country.name}
                </h3>

                <p className="text-[11px] text-slate-400 font-normal mt-2 tracking-wide">
                  {country.tagline}
                </p>
              </div>

              <div className="relative z-10 mt-8 flex justify-center">
                <span className="text-[9px] bg-red-600/15 text-red-500 border border-red-500/20 px-3.5 py-1 rounded-full font-bold uppercase tracking-widest">
                  Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ================= MODAL DESIGN ================= */}
      {selectedCountry && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setSelectedCountry(null)}
        >
          <div 
            className="bg-white text-[#0f172a] rounded-[24px] w-full max-w-[900px] h-[85vh] md:h-[580px] flex flex-col md:flex-row overflow-hidden shadow-2xl relative p-6 md:p-8 gap-6 md:gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedCountry(null)}
              className="absolute top-4 right-4 p-1.5 hover:bg-slate-100 text-slate-400 hover:text-slate-600 rounded-full transition-all z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Scrollable Column */}
            <div className="w-full md:w-[55%] overflow-y-auto h-full pr-4 flex flex-col scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
              <div>
                <h2 className="text-[44px] font-bold text-[#0c122f] font-serif tracking-tight leading-none">
                  {selectedCountry.name}
                </h2>
                <p className="text-red-500 italic text-[15px] font-medium font-serif mt-2 mb-8">
                  {selectedCountry.tagline}
                </p>

                <div className="space-y-6">
                  {/* Budget */}
                  {selectedCountry.totalBudget && (
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        TOTAL BUDGET
                      </h4>
                      <p className="text-[14px] font-semibold text-[#0c122f]">
                        {selectedCountry.totalBudget}
                      </p>
                    </div>
                  )}

                  {/* Intake */}
                  {selectedCountry.intake && (
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        INTAKE
                      </h4>
                      <p className="text-[14px] font-semibold text-[#0c122f]">
                        {selectedCountry.intake}
                      </p>
                    </div>
                  )}

                  {/* Deadlines */}
                  {selectedCountry.deadlines && (
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        DEADLINES
                      </h4>
                      <p className="text-[14px] font-semibold text-[#0c122f]">
                        {selectedCountry.deadlines}
                      </p>
                    </div>
                  )}

                  {/* Requirements Section */}
                  {selectedCountry.requirements && (
                    <div className="pt-2">
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                        REQUIREMENTS
                      </h4>
                      <ul className="space-y-2">
                        {selectedCountry.requirements.map((req, index) => (
                          <li key={index} className="text-[13px] leading-relaxed text-slate-700 font-medium">
                            {index + 1}. {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Expenses Section */}
                  {selectedCountry.expenses && (
                    <div className="pt-4 border-t border-slate-100">
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                        EXPENSES
                      </h4>
                      <ul className="space-y-2">
                        {selectedCountry.expenses.map((exp, index) => (
                          <li key={index} className="text-[13px] leading-relaxed text-slate-700 font-medium">
                            {index + 1}. {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Colleges Section */}
                  {selectedCountry.colleges && (
                    <div className="pt-4 border-t border-slate-100">
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                        COLLEGES
                      </h4>
                      <p className="text-[13px] leading-relaxed text-slate-700 font-medium">
                        {selectedCountry.colleges.join(", ")}
                      </p>
                    </div>
                  )}

                  {/* Universities Section */}
                  {selectedCountry.universities && (
                    <div className="pt-4 border-t border-slate-100">
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                        UNIVERSITIES
                      </h4>
                      <ul className="space-y-2">
                        {selectedCountry.universities.map((uni, index) => (
                          <li key={index} className="text-[13px] leading-relaxed text-slate-700 font-medium">
                            {index + 1}. {uni}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Banner and CTA Card Column */}
            <div className="w-full md:w-[45%] flex flex-col justify-between h-full gap-4">
              {/* Destination Photo (Exactly Matched to Screenshots) */}
              <div className="relative w-full aspect-[4/3] md:h-[260px] rounded-[24px] overflow-hidden shadow-sm bg-slate-100">
                <img 
                  src={selectedCountry.image} 
                  alt={selectedCountry.name} 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    // Fail-safe default
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>

              {/* Inset CTA Dark Navy Card */}
              <div className="bg-[#0b122f] rounded-[24px] p-6 text-center flex flex-col justify-center items-center h-[145px] shadow-md w-full">
                <p className="text-white text-[14px] font-medium mb-4">
                  Interested in {selectedCountry.name}?
                </p>
                <button 
                  onClick={() => handleWhatsAppRedirect(selectedCountry.name)}
                  className="w-full py-3 bg-white hover:bg-slate-50 text-[#0b122f] rounded-[16px] text-[14px] font-bold transition-all shadow-sm cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}