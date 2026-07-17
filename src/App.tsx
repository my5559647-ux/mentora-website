import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import CountriesPage from "./pages/CountriesPage";
import AboutPage from "./pages/AboutPage";
import CeoPage from "./pages/CeoPage";
import PtePage from "./pages/PtePage";
import IeltsPage from "./pages/IeltsPage";

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
          
          {/* Detailed Sub-Pages - All wrapped in Layout */}
          <Route path="/services" element={
            <Layout>
              <ServicesPage />
            </Layout>
          } />
          <Route path="/gallery" element={
            <Layout>
              <GalleryPage />
            </Layout>
          } />
          <Route path="/countries" element={
            <Layout>
              <CountriesPage />
            </Layout>
          } />
          <Route path="/about" element={
            <Layout>
              <AboutPage />
            </Layout>
          } />
          <Route path="/ceo" element={
            <Layout>
              <CeoPage />
            </Layout>
          } />
          <Route path="/pte" element={
            <Layout>
              <PtePage />
            </Layout>
          } />
          <Route path="/ielts" element={
            <Layout>
              <IeltsPage />
            </Layout>
          } />

          {/* Catch-all Not Found Route */}
          <Route path="*" element={
            <Layout>
              <NotFound />
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;