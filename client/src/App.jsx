import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Insights from "./components/Insights";
import About from "./components/About";
import Footer from "./components/Footer";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import WebDevelopment from "./service/WebDevelopment";
import Marketing from "./service/Marketing";
import BrandingGraphics from "./service/BrandingGraphics";
import Pricing from "./service/Pricing";
import ProcessPage from "./service/ProcessPage";
import BlogDetails from "./Blogs/BlogDetails";

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Create a component that combines all sections for the homepage
const HomePage = () => {
  return (
    <>
      <Home />
      <Services />
      <Insights />
      <CaseStudies />
      <About />
    </>
  );
};

const App = () => {
  return (
    <Layout>
      {/* Global Tailwind Scroll Styles */}
      <style jsx global>{`
        html {
          @apply scroll-smooth;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          @apply w-2 bg-gray-100;
        }

        ::-webkit-scrollbar-thumb {
          @apply bg-gradient-to-b from-purple-600 to-blue-600 rounded-full;
        }

        ::-webkit-scrollbar-thumb:hover {
          @apply from-purple-700 to-blue-700;
        }
      `}</style>

      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/marketing" element={<Marketing />} />
        <Route path="/services/branding" element={<BrandingGraphics />} />
        <Route path="/services/pricing" element={<Pricing />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
      </Routes>
      <Footer />
      <WhatsAppButton phoneNumber="8445646300" />
    </Layout>
  );
};

export default App;
