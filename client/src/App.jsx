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
      </Routes>
      <Footer />
    </Layout>
  );
};

export default App;
