import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Import images (You'll need to have these in your assets folder)
import stakeSolImage from "../assets/image.png";
import katarSareeImage from "../assets/banraskatan.jpg";

const CaseStudies = ({ darkMode }) => {
  const caseStudiesSectionRef = useRef(null);
  const caseStudyRefs = [useRef(null), useRef(null)];

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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Modern grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMDEwMTAiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFoLTJ2MmgyVjF6TTE0IDFoLTJ2MmgyVjF6TTkgMUg3djJoMlYxek00IDFIMnYyaDJWMXpNNTQgMWgtMnYyaDJWMXpNNDkgMWgtMnYyaDJWMXpNNDQgMWgtMnYyaDJWMXpNMzkgMWgtMnYyaDJWMXpNMzQgMWgtMnYyaDJWMXpNMjkgMWgtMnYyaDJWMXpNMjQgMWgtMnYyaDJWMXpNMTkgMWgtMnYyaDJWMXpNNTkgNmgtMnYyaDJWNnpNMTQgNmgtMnYyaDJWNnpNOSA2SDd2MmgyVjZ6TTQgNkgydmJoMlY2ek01NCA2aC0ydjJoMlY2ek00OSA2aC0ydjJoMlY2ek00NCA2aC0ydjJoMlY2ek0zOSA2aC0ydjJoMlY2ek0zNCA2aC0ydjJoMlY2ek0yOSA2aC0ydjJoMlY2ek0yNCA2aC0ydjJoMlY2ek0xOSA2aC0ydjJoMlY2ek01OSAxMWgtMnYyaDJWMTF6TTE0IDExaC0ydjJoMlYxMXpNOSAxMUg3djJoMlYxMXpNNCAxMUgydjJoMlYxMXpNNTQgMTFoLTJ2MmgyVjExek00OSAxMWgtMnYyaDJWMTF6TTQ0IDExaC0ydjJoMlYxMXpNMzkgMTFoLTJ2MmgyVjExek0zNCAxMWgtMnYyaDJWMTF6TTI5IDExaC0ydjJoMlYxMXpNMjQgMTFoLTJ2MmgyVjExek0xOSAxMWgtMnYyaDJWMTF6TTU5IDE2aC0ydjJoMlYxNnpNMTQgMTZoLTJ2MmgyVjE2ek05IDE2SDd2MmgyVjE2ek00IDE2SDJ2MmgyVjE2ek01NCAxNmgtMnYyaDJWMTZ6TTQ5IDE2aC0ydjJoMlYxNnpNNDQgMTZoLTJ2MmgyVjE2ek0zOSAxNmgtMnYyaDJWMTZ6TTM0IDE2aC0ydjJoMlYxNnpNMjkgMTZoLTJ2MmgyVjE2ek0yNCAxNmgtMnYyaDJWMTZ6TTE5IDE2aC0ydjJoMlYxNnpNNTkgMjFoLTJ2MmgyVjIxek0xNCAyMWgtMnYyaDJWMjF6TTkgMjFIN3YyaDJWMjF6TTQgMjFIMnYyaDJWMjF6MTU0IDIxaC0ydjJoMlYyMXpNNDkgMjFoLTJ2MmgyVjIxek00NCAyMWgtMnYyaDJWMjF6TTM5IDIxaC0ydjJoMlYyMXpNMzQgMjFoLTJ2MmgyVjIxek0yOSAyMWgtMnYyaDJWMjF6MTI0IDIxaC0ydjJoMlYyMXpNMTkgMjFoLTJ2MmgyVjIxek01OSAyNmgtMnYyaDJWMjZ6TTE0IDI2aC0ydjJoMlYyNnpNOSAyNkg3djJoMlYyNnpNNCAyNkgydjJoMlYyNnpNNTQgMjZoLTJ2MmgyVjI2ek00OSAyNmgtMnYyaDJWMjZ6TTQ0IDI2aC0ydjJoMlYyNnpNMzkgMjZoLTJ2MmgyVjI2ek0zNCAyNmgtMnYyaDJWMjZ6MTI5IDI2aC0ydjJoMlYyNnpNMjQgMjZoLTJ2MmgyVjI2ek0xOSAyNmgtMnYyaDJWMjZ6TTU5IDMxaC0ydjJoMlYzMXpNMTQgMzFoLTJ2MmgyVjMxek05IDMxSDd2MmgyVjMxek00IDMxSDJ2MmgyVjMxek01NCAzMWgtMnYyaDJWMzF6TTQ5IDMxaC0ydjJoMlYzMXpNNDQgMzFoLTJ2MmgyVjMxek0zOSAzMWgtMnYyaDJWMzF6MTM0IDMxaC0ydjJoMlYzMXpNMjkgMzFoLTJ2MmgyVjMxek0yNCAzMWgtMnYyaDJWMzF6TTE5IDMxaC0ydjJoMlYzMXpNNTkgMzZoLTJ2MmgyVjM2ek0xNCAzNmgtMnYyaDJWMzZ6TTkgMzZIN3YyaDJWMzZ6TTQgMzZIMnYyaDJWMzZ6TTU0IDM2aC0ydjJoMlYzNnpNNDkgMzZoLTJ2MmgyVjM2ek00NCAzNmgtMnYyaDJWMzZ6TTM5IDM2aC0ydjJoMlYzNnpNMzQgMzZoLTJ2MmgyVjM2ek0yOSAzNmgtMnYyaDJWMzZ6TTI0IDM2aC0ydjJoMlYzNnpNMTkgMzZoLTJ2MmgyVjM2ek01OSA0MWgtMnYyaDJWNDF6TTE0IDQxaC0ydjJoMlY0MXpNOSA0MUg3djJoMlY0MXpNNCA0MUgydjJoMlY0MXpNNTQgNDFoLTJ2MmgyVjQxek00OSA0MWgtMnYyaDJWNDF6TTQ0IDQxaC0ydjJoMlY0MXpNMzkgNDFoLTJ2MmgyVjQxek0zNCA0MWgtMnYyaDJWNDF6MTI5IDQxaC0ydjJoMlY0MXpNMjQgNDFoLTJ2MmgyVjQxek0xOSA0MWgtMnYyaDJWNDF6TTU5IDQ2aC0ydjJoMlY0NnpNMTQgNDZoLTJ2MmgyVjQ2ek05IDQ2SDd2MmgyVjQ2ek00IDQ2SDJ2MmgyVjQ2ek01NCA0NmgtMnYyaDJWNDZ6DTQ5IDQ2aC0ydjJoMlY0NnpNNDQgNDZoLTJ2MmgyVjQ2ek0zOSA0NmgtMnYyaDJWNDZ6MTM0IDQ2aC0ydjJoMlY0NnpNMjkgNDZoLTJ2MmgyVjQ2ek0yNCA0NmgtMnYyaDJWNDZ6TTE5IDQ2aC0ydjJoMlY0NnpNNTkgNTFoLTJ2MmgyVjUxek0xNCA1MWgtMnYyaDJWNTF6TTkgNTFIN3YyaDJWNTF6TTQgNTFIMnYyaDJWNTF6DTU0IDUxaC0ydjJoMlY1MXpNNDkgNTFoLTJ2MmgyVjUxek00NCA1MWgtMnYyaDJWNTF6TTM5IDUxaC0ydjJoMlY1MXpNMzQgNTFoLTJ2MmgyVjUxek0yOSA1MWgtMnYyaDJWNTF6TDI0IDUxaC0ydjJoMlY1MXpNMTkgNTFoLTJ2MmgyVjUxek01OSA1NmgtMnYyaDJWNTZ6TTE0IDU2aC0ydjJoMlY1NnpNOSA1Nkg3djJoMlY1NnpNNCA1NkgydjJoMlY1NnpNNTQgNTZoLTJ2MmgyVjU2ek00OSA1NmgtMnYyaDJWNTZ6DTQ0IDU2aC0ydjJoMlY1NnpNMzkgNTZoLTJ2MmgyVjU2ek0zNCA1NmgtMnYyaDJWNTZ6TTI5IDU2aC0ydjJoMlY1NnpNMjQgNTZoLTJ2MmgyVjU2ek0xOSA1NmgtMnYyaDJWNTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-30"></div>

        {/* Gradient effects */}
        <div className="absolute -top-64 -left-64 w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-32 w-64 h-64 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-64 -right-32 w-96 h-96 bg-indigo-600 opacity-10 rounded-full blur-3xl"></div>
      </div>

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

                {/* Content */}
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

                  <Link
                    to="/contact"
                    className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 px-6 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                  >
                    Start Your Project
                  </Link>
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

                  <Link
                    to="/contact"
                    className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 px-6 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
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
