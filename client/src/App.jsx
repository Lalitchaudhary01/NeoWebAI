import React from "react";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Insights from "./components/Insights";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Layout>
      <Navbar />
      <Home />
      <Services />
      <Insights />
      <About />
      <Footer />
      {/* You can add your Footer component here */}
    </Layout>
  );
};

export default App;
