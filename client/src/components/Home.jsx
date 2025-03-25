import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/devloper.jpg"; // Ensure this path is correct

const Home = ({ darkMode }) => {
  const logoRef = useRef(null);
  const heroTextRef = useRef(null);
  const statsSectionRef = useRef(null);

  // Animation for logo
  useEffect(() => {
    if (logoRef.current) {
      const element = logoRef.current;
      let rotation = 0;

      const animate = () => {
        rotation += 0.2; // Slowed down for more subtle effect
        element.style.transform = `perspective(1000px) rotateY(${rotation}deg)`;
        requestAnimationFrame(animate);
      };

      animate();
    }
  }, []);

  // Text reveal animation on load
  useEffect(() => {
    if (heroTextRef.current) {
      heroTextRef.current.classList.add("animate-in");
    }
    if (statsSectionRef.current) {
      statsSectionRef.current.classList.add("animate-in");
    }
  }, []);

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-gray-950 to-black text-white overflow-hidden ${
        darkMode ? "dark" : ""
      }`}
    >
      {/* Background elements */}
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
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div
                ref={heroTextRef}
                className="md:w-1/2 opacity-0 transition-all duration-1000 transform translate-y-8"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="inline-block px-4 py-1 mb-6 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-sm font-medium text-purple-300">
                  Strategic Digital Partner
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
                  We craft{" "}
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                    AI-powered
                  </span>{" "}
                  digital experiences
                </h1>
                <p className="text-lg mb-8 text-white/70 leading-relaxed max-w-xl">
                  Elevate your brand with our premium AI solutions. We combine
                  cutting-edge technology with bespoke design to create
                  immersive digital experiences that drive growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                  >
                    Schedule a Consultation
                  </Link>
                  <Link
                    to="/case-studies"
                    className="inline-block bg-white/5 border border-white/10 text-white font-medium py-3 px-8 rounded-full hover:bg-white/10 transition-all"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>

              <div className="md:w-1/2 mt-12 md:mt-0">
                {/* 3D rotating element */}
                <div className="flex justify-center">
                  <div
                    ref={logoRef}
                    className="relative w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center backdrop-blur-lg overflow-hidden"
                  >
                    {/* Inner reflected surface effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 opacity-50"></div>

                    {/* Logo image */}
                    <img
                      src={logoImage} // Use the imported image directly
                      alt="NeoWeb AI"
                      className="w-48 h-auto relative z-10"
                    />

                    {/* Light reflection */}
                    <div className="absolute -top-32 -left-32 w-64 h-64 bg-white opacity-20 rounded-full blur-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section with premium glass cards */}
        <section
          ref={statsSectionRef}
          className="py-20 opacity-0 transition-all duration-1000 transform translate-y-8"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stat Card 1 */}
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-sm font-semibold mb-2 text-white/70 uppercase tracking-wider">
                  Trusted by
                </h3>
                <p className="text-3xl font-bold text-white"> Businesses</p>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-sm font-semibold mb-2 text-white/70 uppercase tracking-wider">
                  Projects Delivered
                </h3>
                <p className="text-3xl font-bold text-white">10+</p>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-sm font-semibold mb-2 text-white/70 uppercase tracking-wider">
                  Client Satisfaction
                </h3>
                <p className="text-3xl font-bold text-white">98%</p>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              </div>

              {/* Stat Card 4 */}
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-sm font-semibold mb-2 text-white/70 uppercase tracking-wider">
                  AI Expertise
                </h3>
                <p className="text-3xl font-bold text-white">2+ Years</p>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
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

      {/* Footer */}
    </div>
  );
};

export default Home;
