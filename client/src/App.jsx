import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
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
import { motion } from "framer-motion";
import PrivacyPolicy from "./components/Policies/PrivacyPolicy";
import TermsOfService from "./components/Policies/TermsOfService";
import CookiesPolicy from "./components/Policies/CookiesPolicy";

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Page Transition Wrapper Component
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{
      type: "tween",
      duration: 0.3,
    }}
    className="min-h-screen"
  >
    {children}
  </motion.div>
);

// Create a component that combines all sections for the homepage
const HomePage = () => {
  return (
    <PageWrapper>
      <Home />
      <Services />
      <Insights />
      <CaseStudies />
      <About />
    </PageWrapper>
  );
};

const App = () => {
  const location = useLocation();

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
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/services"
            element={
              <PageWrapper>
                <Services />
              </PageWrapper>
            }
          />
          <Route
            path="/insights"
            element={
              <PageWrapper>
                <Insights />
              </PageWrapper>
            }
          />
          <Route
            path="/case-studies"
            element={
              <PageWrapper>
                <CaseStudies />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/services/web-development"
            element={
              <PageWrapper>
                <WebDevelopment />
              </PageWrapper>
            }
          />
          <Route
            path="/services/marketing"
            element={
              <PageWrapper>
                <Marketing />
              </PageWrapper>
            }
          />
          <Route
            path="/services/branding"
            element={
              <PageWrapper>
                <BrandingGraphics />
              </PageWrapper>
            }
          />
          <Route
            path="/services/pricing"
            element={
              <PageWrapper>
                <Pricing />
              </PageWrapper>
            }
          />
          <Route
            path="/process"
            element={
              <PageWrapper>
                <ProcessPage />
              </PageWrapper>
            }
          />
          <Route
            path="/blog-details/:id"
            element={
              <PageWrapper>
                <BlogDetails />
              </PageWrapper>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <PageWrapper>
                <PrivacyPolicy />
              </PageWrapper>
            }
          />
          <Route
            path="/terms-of-service"
            element={
              <PageWrapper>
                <TermsOfService />
              </PageWrapper>
            }
          />
          <Route
            path="/terms-of-service"
            element={
              <PageWrapper>
                <TermsOfService />
              </PageWrapper>
            }
          />

          <Route
            path="/cookies-policy"
            element={
              <PageWrapper>
                <CookiesPolicy />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton phoneNumber="8445646300" />
    </Layout>
  );
};

export default App;
