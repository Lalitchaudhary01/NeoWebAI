import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Insights from "./components/Insights";
import About from "./components/About";
import Footer from "./components/Footer";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton"; // Import the WhatsApp button component
import WebDevelopment from "./service/WebDevelopment";
import Marketing from "./service/Marketing";

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
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/marketing" element={<Marketing />} />
      </Routes>
      <Footer />

      {/* WhatsApp Button - replace with your actual WhatsApp number */}
      <WhatsAppButton phoneNumber="8445646300" />
    </Layout>
  );
};

export default App;
