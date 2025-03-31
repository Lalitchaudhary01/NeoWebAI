import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Import images (You'll need to have these in your assets folder)
import stakeSolImage from "../assets/image.png";
import katarSareeImage from "../assets/banraskatan.jpg";
import ghumakkarsImage from "../assets/travel.png"; // Add this new image import
import Testimonials from "./Testinomial";

const CaseStudies = ({ darkMode }) => {
  const caseStudiesSectionRef = useRef(null);
  const caseStudyRefs = [useRef(null), useRef(null), useRef(null)]; // Updated to include third ref

  // Animation on load
  useEffect(() => {
    if (caseStudiesSectionRef.current) {
      caseStudiesSectionRef.current.classList.add("animate-in");
    }

    // Animate each case study with a slight delay between them
    caseStudyRefs.forEach((ref, index) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current.classList.add("animate-in");
        }, 200 * (index + 1));
      }
    });
  }, []);

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-gray-950 to-black text-white overflow-hidden ${
        darkMode ? "dark" : ""
      }`}
    >
      {/* Background elements - same as in Home component */}

      {/* Main content */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-6">
            <div
              ref={caseStudiesSectionRef}
              className="text-center max-w-3xl mx-auto opacity-0 transition-all duration-1000 transform translate-y-8"
            >
              <div className="inline-block px-4 py-1 mb-6 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-sm font-medium text-purple-300">
                Real Impact, Real Results
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
                Our{" "}
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Case Studies
                </span>
              </h1>
              <p className="text-lg mb-8 text-white/70 leading-relaxed">
                Explore how we've helped businesses transform their digital
                presence and achieve measurable results through innovative AI
                solutions and premium design.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies List */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="space-y-24">
              {/* Case Study 1 */}
              <div
                ref={caseStudyRefs[0]}
                className="flex flex-col lg:flex-row items-center gap-12 opacity-0 transition-all duration-1000 transform translate-y-8"
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
                    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-2 shadow-xl overflow-hidden">
                      <img
                        src={stakeSolImage}
                        alt="StakeSol Trading Platform"
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-medium py-1 px-3 rounded-full">
                      FinTech
                    </div>
                  </div>
                </div>

                {/* Content for StakeSol */}
                <div className="lg:w-1/2">
                  <div className="inline-block px-3 py-1 mb-4 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-xs font-medium text-purple-300">
                    Case Study 1
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Blockchain-Based Crypto Trading Platform
                  </h2>
                  <p className="text-white/70 mb-4">
                    <span className="font-medium text-white">Client:</span>{" "}
                    USA-based FinTech Startup
                  </p>
                  <p className="text-white/70 mb-4">
                    <span className="font-medium text-white">Project:</span>{" "}
                    StakeSol - A Blockchain-powered trading platform
                  </p>
                  <p className="text-white/70 mb-6">
                    <span className="font-medium text-white">Website:</span>{" "}
                    stakesol.org
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Challenge</h3>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        Client wanted a user-friendly and secure crypto trading
                        platform.
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        Needed a fast and responsive UI/UX to attract investors.
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        Blockchain integration for decentralized trading.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Our Solution</h3>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        Developed a custom blockchain trading platform with a
                        sleek UI.
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        Integrated real-time price tracking and secure
                        transactions.
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        Optimized performance for high-speed trading.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3">Results</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-4 shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                        <p className="text-2xl font-bold text-white mb-1">
                          200+
                        </p>
                        <p className="text-sm text-white/70">
                          Onboarded users in the first week
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-4 shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                        <p className="text-2xl font-bold text-white mb-1">
                          30%
                        </p>
                        <p className="text-sm text-white/70">
                          Improved user engagement
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-4 shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                        <p className="text-2xl font-bold text-white mb-1">
                          25%
                        </p>
                        <p className="text-sm text-white/70">
                          Increased user retention
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 2 */}
              <div
                ref={caseStudyRefs[1]}
                className="flex flex-col lg:flex-row-reverse items-center gap-12 opacity-0 transition-all duration-1000 transform translate-y-8"
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
                    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-2 shadow-xl overflow-hidden">
                      <img
                        src={katarSareeImage}
                        alt="Katar Saree E-Commerce Platform"
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                    <div className="absolute -bottom-3 -left-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-medium py-1 px-3 rounded-full">
                      E-Commerce
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="inline-block px-3 py-1 mb-4 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-xs font-medium text-purple-300">
                    Case Study 2
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Custom E-Commerce Platform for Banarasi Sarees
                  </h2>
                  <p className="text-white/70 mb-4">
                    <span className="font-medium text-white">Client:</span>{" "}
                    Katar Saree – Premium saree brand from Banaras
                  </p>
                  <p className="text-white/70 mb-4">
                    <span className="font-medium text-white">Project:</span> A
                    fully customized e-commerce platform
                  </p>
                  <p className="text-white/70 mb-6">
                    <span className="font-medium text-white">Website:</span>{" "}
                    katar-saree.vercel.app
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Challenge</h3>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        Needed a scalable, high-performance e-commerce website.
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        Wanted to expand globally & streamline order management.
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        Required a unique, brand-centric UI/UX.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Our Solution</h3>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        Built a custom website with Next.js & Tailwind CSS.
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        Integrated multi-currency & worldwide shipping.
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        Implemented SEO & performance optimizations.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3">Results</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-4 shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                        <p className="text-2xl font-bold text-white mb-1">
                          45%
                        </p>
                        <p className="text-sm text-white/70">
                          Increase in global orders
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-4 shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                        <p className="text-2xl font-bold text-white mb-1">2x</p>
                        <p className="text-sm text-white/70">
                          Faster load speeds
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-4 shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                        <p className="text-2xl font-bold text-white mb-1">
                          60%
                        </p>
                        <p className="text-sm text-white/70">
                          Higher conversion rate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 3 - Ghumakkars */}
              <div
                ref={caseStudyRefs[2]}
                className="flex flex-col lg:flex-row items-center gap-12 opacity-0 transition-all duration-1000 transform translate-y-8"
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
                    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-2 shadow-xl overflow-hidden">
                      <img
                        src={ghumakkarsImage}
                        alt="Ghumakkars Travel Platform"
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-medium py-1 px-3 rounded-full">
                      Travel Tech
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="inline-block px-3 py-1 mb-4 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-xs font-medium text-purple-300">
                    Case Study 3
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Digital Platform for College Student Travel Experiences
                  </h2>
                  <p className="text-white/70 mb-4">
                    <span className="font-medium text-white">Client:</span>{" "}
                    Ghumakkars - Innovative Travel Startup
                  </p>
                  <p className="text-white/70 mb-4">
                    <span className="font-medium text-white">Project:</span> A
                    comprehensive web platform for group travel
                  </p>
                  <p className="text-white/70 mb-6">
                    <span className="font-medium text-white">Website:</span>{" "}
                    ghumakkars.in
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Challenge</h3>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        Create a unique platform targeting college students
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        Develop a seamless booking and trip management system
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        Design an engaging and modern user interface
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Our Solution</h3>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        Built a responsive web platform with React and Tailwind
                        CSS
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        Implemented user-friendly trip booking and tracking
                        features
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        Created a vibrant, youth-focused design
                      </li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3">Results</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-4 shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                        <p className="text-2xl font-bold text-white mb-1">
                          500+
                        </p>
                        <p className="text-sm text-white/70">
                          Registered Users
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-4 shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                        <p className="text-2xl font-bold text-white mb-1">
                          25%
                        </p>
                        <p className="text-sm text-white/70">
                          Weekly User Growth
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-4 shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                        <p className="text-2xl font-bold text-white mb-1">
                          40+
                        </p>
                        <p className="text-sm text-white/70">Trips Organized</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Testimonials />
        </section>

        {/* CTA Section */}
        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-lg border border-white/10 rounded-xl p-8 md:p-12 shadow-xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Want results like these for your business?
              </h2>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Let's build something amazing together. Our team of experts is
                ready to help you transform your digital presence and achieve
                measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  to="/services"
                  className="inline-block bg-white/5 border border-white/10 text-white font-medium py-3 px-8 rounded-full hover:bg-white/10 transition-all"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CSS for animations */}
        <style jsx>{`
          .animate-in {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default CaseStudies;
