import React from 'react';
import { useState } from "react";
import { Sparkles, Film, Image as ImageIcon } from "lucide-react";

// Student videos using exact ScreenPal player links configured for smooth seamless vertical sizing
const studentVideos = [
  {
    id: 1,
    title: "Teacher in England",
    author: "Jamshed Hamid Dhothar",
    videoSrc: "https://go.screenpal.com/player/cOhYnYntgrt?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1&width=100%&height=100%", 
    role: "Teacher"
  },
  {
    id: 2,
    title: "Student in Mentora",
    author: "Rai Ali Ejaaz",
    videoSrc: "https://go.screenpal.com/player/cOhqlQntAvi?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1&width=100%&height=100%",
    role: "Student"
  },
  {
    id: 3,
    title: "Colleague of CEO",
    author: "Umair Hameed",
    videoSrc: "https://go.screenpal.com/player/cOhqlQntAvj?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1&width=100%&height=100%",
    role: "Colleague"
  },
  {
    id: 4,
    title: "Student in Mentora",
    author: "Dawood Mustafa",
    videoSrc: "https://go.screenpal.com/player/cOhqlQntAvQ?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1&width=100%&height=100%",
    role: "Student"
  },
  {
    id: 5,
    title: "CEO of Mentora",
    author: "Awais Munir",
    videoSrc: "https://go.screenpal.com/player/cO1Y2KnudtW?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1&width=100%&height=100%",
    role: "CEO"
  }
];

// Highlight images for official meets (Showing 100% of the graphic frame)
const highlightImages = [
  { id: 1, src: "/heighlight1.jpeg", title: "Team Meeting", desc: "Stronger Together, Better Future" },
  { id: 2, src: "/heighlight2.jpeg", title: "Team Meeting", desc: "Stronger Together, Better Future" },
  { id: 3, src: "/heighlight3.jpeg", title: "Team Meeting", desc: "Stronger Together, Better Future" },
  { id: 4, src: "/heighlight4.jpeg", title: "Team Meeting", desc: "Stronger Together, Better Future" },
  { id: 5, src: "/heighlight5.jpeg", title: "Success Celebration", desc: "Welcoming students and partners" },
  { id: 6, src: "/heighlight6.jpeg", title: "Student Counseling Session", desc: "SOP & Visa Guidance" },
  { id: 7, src: "/heighlight7.jpeg", title: "Strategic Planning", desc: "Expanding our global footprints" },
  { id: 8, src: "/heighlight8.jpeg", title: "Mentora Headquarters", desc: "Our bright & welcoming campus" }
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<"all" | "photos" | "videos">("all");

  return (
    <div className="bg-[#030712] text-white pb-16 overflow-hidden relative">
      {/* Decorative Background Glows (For Top Dark Section) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* --- SECTION 1: HEADER & PHOTO GALLERY (DARK THEME) --- */}
      <div className="container px-4 mx-auto relative z-10 pb-20">
        
        {/* Page Header (Centered) */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-[11px] font-bold text-red-500 uppercase tracking-widest mb-4 animate-pulse">
            <Sparkles className="w-3.5 h-3.5" /> Mentora Life & Success
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-gray-400 bg-clip-text text-transparent">
            Our Visual <span className="text-red-600 italic">Gallery</span>
          </h1>
          
          <p className="mt-4 text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed">
            Explore genuine moments of our team meets, success celebrations, and direct real-time video reviews from our global students.
          </p>

          {/* Centered Modern Filter Tabs */}
          <div className="flex items-center gap-2 bg-slate-900/40 p-1.5 rounded-xl border border-slate-800/60 mt-8 backdrop-blur-md">
            <button 
              onClick={() => setActiveTab("all")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === "all" ? "bg-red-600 text-white shadow-lg shadow-red-600/20" : "text-slate-400 hover:text-white"}`}
            >
              All Moments
            </button>
            <button 
              onClick={() => setActiveTab("photos")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === "photos" ? "bg-red-600 text-white shadow-lg shadow-red-600/20" : "text-slate-400 hover:text-white"}`}
            >
              <ImageIcon className="w-3.5 h-3.5" /> Photos
            </button>
            <button 
              onClick={() => setActiveTab("videos")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === "videos" ? "bg-red-600 text-white shadow-lg shadow-red-600/20" : "text-slate-400 hover:text-white"}`}
            >
              <Film className="w-3.5 h-3.5" /> Videos
            </button>
          </div>

          {/* Success Stories Button */}
          <div className="mt-6">
            <button 
              onClick={() => setActiveTab("videos")}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/30 flex items-center gap-2 mx-auto"
            >
              <Film className="w-4 h-4" /> Watch Success Stories
            </button>
          </div>
        </div>

        {/* PHOTO HIGHLIGHTS SECTION */}
        {(activeTab === "all" || activeTab === "photos") && (
          <div>
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="w-8 h-[1px] bg-red-600" />
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-center">Team Highlights & Campus Meets</h2>
              <div className="w-8 h-[1px] bg-red-600" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlightImages.map((img) => (
                <div 
                  key={img.id} 
                  className="group bg-[#090d16] rounded-2xl overflow-hidden border border-slate-800/50 hover:border-red-600/60 shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative w-full aspect-[4/5] bg-[#020617] flex items-center justify-center p-2">
                    <img 
                      src={img.src} 
                      alt={img.title}
                      className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-102"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80";
                      }}
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-[9px] font-black px-2.5 py-1 rounded-md tracking-wider uppercase shadow-md">
                      OFFICIAL HIGHLIGHT
                    </div>
                  </div>
                  
                  <div className="p-5 border-t border-slate-900 bg-[#060a12]">
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-red-500 transition-colors uppercase tracking-tight">
                      {img.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                      {img.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* --- SECTION 2: VIDEOS GALLERY (WHITE/LIGHT BACKGROUND THEME) --- */}
      {(activeTab === "all" || activeTab === "videos") && (
        <section className="bg-slate-50 text-slate-900 py-24 border-t border-slate-200/60 relative">
          <div className="container px-4 mx-auto relative z-10">
            
            <div className="flex flex-col items-center justify-center gap-2 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-red-600" />
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#0a1128] text-center">
                  Video Success Stories
                </h2>
                <div className="w-8 h-[1px] bg-red-600" />
              </div>
              <p className="text-xs md:text-sm text-slate-500 font-medium text-center">
                Watch real student video reviews directly below
              </p>
            </div>

            {/* Perfect flex-wrap centering on portrait cards */}
            <div className="flex flex-wrap justify-center gap-8 lg:gap-10 max-w-6xl mx-auto">
              {studentVideos.map((video) => (
                <div 
                  key={video.id} 
                  className="bg-white rounded-3xl p-4 border border-slate-200 hover:border-red-600/40 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col w-full max-w-[325px]"
                >
                  <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black border border-slate-100 shadow-inner">
                    <iframe 
                      src={video.videoSrc} 
                      className="absolute inset-0 w-full h-full border-none"
                      allowFullScreen
                      allow="autoplay; fullscreen"
                      title={video.title}
                    />
                  </div>

                  <div className="mt-4 p-1 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#D4AF37]/10 text-[#927113] border border-[#D4AF37]/30 font-extrabold flex items-center justify-center text-xs shadow-sm shrink-0">
                        {video.author[0]}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-slate-800 truncate">{video.author}</p>
                        <p className="text-[10px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                          Verified {video.role} Review
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-2">
                      <span className="text-[10px] text-slate-600 font-bold">{video.title}</span>
                      <span className="px-2 py-0.5 rounded text-[8px] font-bold tracking-wider text-red-700 uppercase bg-red-50 border border-red-200">
                        ACTIVE REVIEW
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- SECTION 3: CALL TO ACTION (WHATSAPP REDIRECT INTEGRATED) --- */}
      <div className="container px-4 mx-auto relative z-10 pb-20">
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#05080f] via-red-950/10 to-[#05080f] border border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Ready to write your own success story?</h2>
            <p className="text-slate-400 mt-2 text-sm md:text-base max-w-lg">
              Speak to our consultants today. We will map your profile for top global scholarships and fast visa filings.
            </p>
          </div>
          
          {/* WhatsApp Action Button with direct link to Hafizabad campus contact number */}
          <a 
            href="https://wa.me/923013085975?text=Hello%20Mentora%20Education%20Consultancy!%20I%20am%20coming%20from%20the%20Gallery%20page.%20I%20want%20to%20book%20a%20free%20consultation%20regarding%20my%20study%20visa." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-xs shadow-xl shrink-0 transition-all duration-300 hover:scale-[1.02]"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
      
    </div>
  );
}