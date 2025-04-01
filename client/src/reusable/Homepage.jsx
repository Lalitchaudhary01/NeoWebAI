import React from "react";
import { PageWrapper } from "./PageComponents";
import Home from "../components/Home";
import Services from "../components/Services";
import Insights from "../components/Insights";
import CaseStudies from "../components/CaseStudies";
import About from "../components/About";
import Testimonials from "../components/Testinomial";

// Create a component that combines all sections for the homepage
const HomePage = () => {
  return (
    <PageWrapper>
      <Home />
      <Services />
      <Insights />
      <CaseStudies />
      <About />
      <Testimonials />
    </PageWrapper>
  );
};

export default HomePage;
