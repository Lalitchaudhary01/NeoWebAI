import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Marketing = ({ darkMode }) => {
  const headerRef = useRef(null);
  const sectionsRef = useRef(null);
  const strategiesRef = useRef(null);

  // Animation for section elements on load
  useEffect(() => {
    const animateElements = (
      ref,
      selector,
      baseDelay = 200,
      delayIncrement = 150
    ) => {
      if (ref.current) {
        const elements = ref.current.querySelectorAll(selector);
        elements.forEach((element, index) => {
          setTimeout(() => {
            element.classList.add("animate-in");
          }, baseDelay + index * delayIncrement);
        });
      }
    };

    animateElements(headerRef, ".header-animate", 200, 100);
    animateElements(sectionsRef, ".section-animate", 200, 150);
    animateElements(strategiesRef, ".strategy-animate", 600, 100);
  }, []);

  const brandingServices = [
    {
      name: "Logo Design",
      icon: "🎨",
      description:
        "Unique and memorable brand identities that capture your essence and stand out in the market.",
    },
    {
      name: "Visual Branding",
      icon: "✨",
      description:
        "Comprehensive visual language development including color palettes, typography, and brand guidelines.",
    },
    {
      name: "Brand Storytelling",
      icon: "📖",
      description:
        "Crafting compelling narratives that connect your brand with your target audience emotionally.",
    },
    {
      name: "Brand Strategy",
      icon: "🚀",
      description:
        "Strategic positioning and messaging that differentiates your brand in a competitive landscape.",
    },
  ];

  const brandingCaseStudies = [
    {
      title: "Tech Startup Rebranding",
      description:
        "Complete brand transformation that increased investor interest and market perception by 80%.",
      icon: "💻",
      tags: ["Identity Design", "Brand Strategy", "Visual Identity"],
    },
    {
      title: "Local Business Branding",
      description:
        "Comprehensive branding approach that elevated a small business's market presence and customer engagement.",
      icon: "🏬",
      tags: ["Logo Design", "Brand Guidelines", "Marketing Collateral"],
    },
    {
      title: "E-Commerce Brand Evolution",
      description:
        "Strategic rebranding that improved brand recognition and customer loyalty for an online retailer.",
      icon: "🛍️",
      tags: ["Visual Identity", "Brand Messaging", "Design System"],
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-gray-950 to-black text-white overflow-hidden ${
        darkMode ? "dark" : ""
      }`}
    >
      {/* Background Grid and Gradient Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMDEwMTAiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFoLTJ2MmgyVjF6TTE0IDFoLTJ2MmgyVjF6TTkgMUg3djJoMlYxek00IDFIMnYyaDJWMXpNNTQgMWgtMnYyaDJWMXpNNDkgMWgtMnYyaDJWMXpNNDQgMWgtMnYyaDJWMXpNMzkgMWgtMnYyaDJWMXpNMzQgMWgtMnYyaDJWMXpNMjkgMWgtMnYyaDJWMXpNMjQgMWgtMnYyaDJWMXpNMTkgMWgtMnYyaDJWMXpNNTkgNmgtMnYyaDJWNnpNMTQgNmgtMnYyaDJWNnpNOSA2SDd2MmgyVjZ6TTQgNkgydmJoMlY2ek01NCA2aC0ydjJoMlY2ek00OSA2aC0ydjJoMlY2ek00NCA2aC0ydjJoMlY2ek0zOSA2aC0ydjJoMlY2ek0zNCA2aC0ydjJoMlY2ek0yOSA2aC0ydjJoMlY2ek0yNCA2aC0ydjJoMlY2ek0xOSA2aC0ydjJoMlY2ek01OSAxMWgtMnYyaDJWMTF6TTE0IDExaC0ydjJoMlYxMXpNOSAxMUg3djJoMlYxMXpNNCAxMUgydjJoMlYxMXpNNTQgMTFoLTJ2MmgyVjExek00OSAxMWgtMnYyaDJWMTF6TTQ0IDExaC0ydjJoMlYxMXpNMzkgMTFoLTJ2MmgyVjExek0zNCAxMWgtMnYyaDJWMTF6TTI5IDExaC0ydjJoMlYxMXpNMjQgMTFoLTJ2MmgyVjExek0xOSAxMWgtMnYyaDJWMTF6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="absolute -top-64 right-1/4 w-96 h-96 bg-blue-700 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-cyan-600 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/3 w-96 h-96 bg-indigo-600 opacity-10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="pt-32 pb-16" ref={headerRef}>
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 header-animate opacity-0 transform translate-y-8">
              <div className="inline-block px-4 py-1 mb-6 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-sm font-medium text-blue-300">
                Professional Branding Solutions
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">
                Transform Your Brand
                <span className="block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  with Powerful Identity
                </span>
              </h1>
              <p className="text-lg mb-8 text-white/70 leading-relaxed header-animate">
                Create a distinctive brand identity that resonates with your
                audience and sets you apart in the competitive market.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all header-animate"
              >
                Start Your Branding Journey
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16" ref={sectionsRef}>
          <div className="container mx-auto px-6">
            <div className="section-animate opacity-0 transform translate-y-8 text-center mb-12">
              <h2 className="text-3xl font-bold">
                Comprehensive Branding Services
              </h2>
              <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                Innovative design solutions tailored to elevate your brand's
                visual communication and market presence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {brandingServices.map((service, index) => (
                <div
                  key={index}
                  className="section-animate opacity-0 transform translate-y-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/30 transition-all"
                >
                  <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                  <p className="text-white/70">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 border-t border-white/5" ref={strategiesRef}>
          <div className="container mx-auto px-6">
            <div className="section-animate opacity-0 transform translate-y-8 text-center mb-12">
              <h2 className="text-3xl font-bold">Proven Branding Success</h2>
              <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                Real-world brand transformations that demonstrate the power of
                strategic design and identity creation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {brandingCaseStudies.map((study, index) => (
                <div
                  key={index}
                  className="strategy-animate opacity-0 transform translate-y-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/30 transition-all"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-900/70 to-cyan-900/70 flex items-center justify-center text-6xl">
                    {study.icon}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                    <p className="text-white/70 mb-4">{study.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {study.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-lg border border-white/10 rounded-xl p-12 shadow-xl max-w-5xl mx-auto">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Start Your Digital Transformation?
                </h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our proven process can help you achieve your
                  business goals and drive meaningful growth.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
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
                    View Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animation Styles */}
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

export default Marketing;
