import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Pricing = ({ darkMode }) => {
  const headerRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);

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
    animateElements(servicesRef, ".service-animate", 200, 150);
    animateElements(featuresRef, ".feature-animate", 600, 100);
  }, []);

  const brandingServices = [
    {
      name: "Startup Essentials",
      value: "Strategic Foundation",
      description:
        "Kickstart your brand with core design elements that establish your unique identity.",
      icon: "🚀",
      keyHighlights: [
        "Initial Brand Strategy Consultation",
        "Custom Logo Design",
        "Basic Visual Identity",
        "Social Media Starter Kit",
        "One Round of Refinement",
      ],
      recommended: false,
    },
    {
      name: "Growth Accelerator",
      value: "Comprehensive Brand Development",
      description:
        "Elevate your brand with a full-spectrum design approach that tells your unique story.",
      icon: "💼",
      keyHighlights: [
        "In-Depth Brand Positioning",
        "Premium Logo & Identity Design",
        "Complete Visual Language",
        "Comprehensive Marketing Collateral",
        "Multiple Revision Rounds",
        "Social Media Design Suite",
        "Brand Guidelines Document",
      ],
      recommended: true,
    },
    {
      name: "Enterprise Transformation",
      value: "Holistic Brand Ecosystem",
      description:
        "A complete branding solution designed for businesses ready to make a significant market impact.",
      icon: "🏆",
      keyHighlights: [
        "Comprehensive Brand Audit",
        "Strategic Repositioning",
        "Premium Identity Design",
        "Full Design System Development",
        "Unlimited Consultations",
        "Dedicated Design Team",
        "Ongoing Brand Evolution Support",
        "Enterprise-Level Marketing Assets",
      ],
      recommended: false,
    },
  ];

  const additionalValues = [
    {
      title: "Flexible Collaboration",
      description:
        "Tailored solutions that adapt to your unique business ecosystem.",
      icon: "🔧",
    },
    {
      title: "Expert Guidance",
      description:
        "Direct access to seasoned brand strategists and design professionals.",
      icon: "👥",
    },
    {
      title: "Scalable Solutions",
      description:
        "Future-proof designs that grow and evolve with your business.",
      icon: "📈",
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
                Tailored Branding Solutions
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">
                Transforming Brands,
                <span className="block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Empowering Businesses
                </span>
              </h1>
              <p className="text-lg mb-8 text-white/70 leading-relaxed header-animate">
                Strategic design solutions crafted to elevate your brand's
                unique potential. Personalized approach, measurable impact.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16" ref={servicesRef}>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {brandingServices.map((service, index) => (
                <div
                  key={index}
                  className={`service-animate opacity-0 transform translate-y-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg ${
                    service.recommended
                      ? "ring-2 ring-blue-500/50 hover:ring-blue-500/70"
                      : "hover:border-blue-500/30"
                  } transition-all`}
                >
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-3xl">{service.icon}</div>
                    {service.recommended && (
                      <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">
                        Best Value
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                  <p className="text-blue-300 mb-4 font-medium">
                    {service.value}
                  </p>
                  <p className="text-white/70 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.keyHighlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="flex items-center text-white/80"
                      >
                        <svg
                          className="w-5 h-5 mr-2 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                  >
                    Explore Solution
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Values Section */}
        <section className="py-16 border-t border-white/5" ref={featuresRef}>
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 feature-animate opacity-0 transform translate-y-8">
              <h2 className="text-3xl font-bold mb-4">
                Our Commitment to Your Success
              </h2>
              <p className="text-white/70">
                Beyond design, we offer strategic partnerships that drive
                meaningful business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalValues.map((value, index) => (
                <div
                  key={index}
                  className="feature-animate opacity-0 transform translate-y-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all"
                >
                  <div className="text-5xl mb-4 text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
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

        {/* Animation Styles (Same as previous code) */}
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

export default Pricing;
