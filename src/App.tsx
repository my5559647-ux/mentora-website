import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/ServicesPage";
import Gallery from "./pages/GalleryPage";
import Countries from "./pages/CountriesPage";
import AboutPage from "./pages/AboutPage";
import PtePage from "./pages/PtePage";
import IeltsPage from "./pages/IeltsPage";
import Layout from "./components/Layout";


const queryClient = new QueryClient();

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Main Home Page - No Layout wrapper (has its own navbar) */}
          <Route path="/" element={<Index />} />
          
          {/* Detailed Sub-Pages - Wrapped in Layout with navbar */}
          <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
          <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
          <Route path="/countries" element={<Layout><Countries /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/pte" element={<Layout><PtePage /></Layout>} />
          <Route path="/ielts" element={<Layout><IeltsPage /></Layout>} />

          {/* Catch-all Not Found Route */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;