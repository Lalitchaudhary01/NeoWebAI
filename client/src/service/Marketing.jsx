import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Marketing = ({ darkMode }) => {
  const headerRef = useRef(null);
  const sectionsRef = useRef(null);
  const strategiesRef = useRef(null);

  // Animation for section elements on load
  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.classList.add("animate-in");
    }

    if (sectionsRef.current) {
      const sections = sectionsRef.current.querySelectorAll(".animate-section");
      sections.forEach((section, index) => {
        setTimeout(() => {
          section.classList.add("animate-in");
        }, 200 + index * 150); // Staggered animation
      });
    }

    if (strategiesRef.current) {
      const strategies =
        strategiesRef.current.querySelectorAll(".strategy-card");
      strategies.forEach((strategy, index) => {
        setTimeout(() => {
          strategy.classList.add("animate-in");
        }, 600 + index * 100); // Staggered animation after sections
      });
    }
  }, []);

  // Marketing service details
  const marketingServices = [
    {
      name: "SEO Optimization",
      icon: "🔍",
      description:
        "Comprehensive search engine optimization to improve your website's visibility and Google ranking.",
    },
    {
      name: "Paid Advertising",
      icon: "💰",
      description:
        "Targeted ad campaigns on Google, Facebook, and Instagram to reach your ideal customer base.",
    },
    {
      name: "Content Strategy",
      icon: "✍️",
      description:
        "Engaging content creation including blogs, social media posts, and marketing materials.",
    },
    {
      name: "Analytics & Reporting",
      icon: "📊",
      description:
        "Detailed performance tracking and insights to continuously improve marketing efforts.",
    },
  ];

  const marketingCaseStudies = [
    {
      title: "E-Commerce Growth Campaign",
      description:
        "Comprehensive digital marketing strategy that increased online sales by 200% for a local fashion retailer.",
      image: "ecommerce",
      tags: ["SEO", "Google Ads", "Social Media Marketing"],
    },
    {
      title: "Tech Startup Launch",
      description:
        "Multi-channel marketing approach that helped a tech startup gain 50,000 app downloads in the first quarter.",
      image: "startup",
      tags: ["Content Marketing", "Paid Advertising", "Branding"],
    },
    {
      title: "Local Restaurant Digital Presence",
      description:
        "Social media and local SEO strategy that boosted reservations by 75% and increased local visibility.",
      image: "restaurant",
      tags: ["Local SEO", "Social Media", "Google My Business"],
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-gray-950 to-black text-white overflow-hidden ${
        darkMode ? "dark" : ""
      }`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Modern grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMDEwMTAiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFoLTJ2MmgyVjF6TTE0IDFoLTJ2MmgyVjF6TTkgMUg3djJoMlYxek00IDFIMnYyaDJWMXpNNTQgMWgtMnYyaDJWMXpNNDkgMWgtMnYyaDJWMXpNNDQgMWgtMnYyaDJWMXpNMzkgMWgtMnYyaDJWMXpNMzQgMWgtMnYyaDJWMXpNMjkgMWgtMnYyaDJWMXpNMjQgMWgtMnYyaDJWMXpNMTkgMWgtMnYyaDJWMXpNNTkgNmgtMnYyaDJWNnpNMTQgNmgtMnYyaDJWNnpNOSA2SDd2MmgyVjZ6TTQgNkgydmJoMlY2ek01NCA2aC0ydjJoMlY2ek00OSA2aC0ydjJoMlY2ek00NCA2aC0ydjJoMlY2ek0zOSA2aC0ydjJoMlY2ek0zNCA2aC0ydjJoMlY2ek0yOSA2aC0ydjJoMlY2ek0yNCA2aC0ydjJoMlY2ek0xOSA2aC0ydjJoMlY2ek01OSAxMWgtMnYyaDJWMTF6TTE0IDExaC0ydjJoMlYxMXpNOSAxMUg3djJoMlYxMXpNNCAxMUgydjJoMlYxMXpNNTQgMTFoLTJ2MmgyVjExek00OSAxMWgtMnYyaDJWMTF6TTQ0IDExaC0ydjJoMlYxMXpNMzkgMTFoLTJ2MmgyVjExek0zNCAxMWgtMnYyaDJWMTF6TTI5IDExaC0ydjJoMlYxMXpNMjQgMTFoLTJ2MmgyVjExek0xOSAxMWgtMnYyaDJWMTF6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-30"></div>

        {/* Gradient effects */}
        <div className="absolute -top-64 right-1/4 w-96 h-96 bg-blue-700 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-cyan-600 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/3 w-96 h-96 bg-indigo-600 opacity-10 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-6">
            <div
              ref={headerRef}
              className="text-center max-w-3xl mx-auto mb-16 opacity-0 transition-all duration-1000 transform translate-y-8"
            >
              <div className="inline-block px-4 py-1 mb-6 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-sm font-medium text-blue-300">
                Digital Marketing & SEO Solutions
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">
                Strategic Digital{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Marketing Approaches
                </span>
              </h1>
              <p className="text-lg mb-8 text-white/70 leading-relaxed">
                We develop data-driven marketing strategies that enhance your
                online visibility, attract quality leads, and drive business
                growth across digital platforms.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                Start Your Marketing Journey
              </Link>
            </div>
          </div>
        </section>

        {/* Marketing Services Section */}
        <section className="py-16" ref={sectionsRef}>
          <div className="container mx-auto px-6">
            <div className="animate-section opacity-0 transform translate-y-8 text-center mb-12">
              <h2 className="text-3xl font-bold">Our Marketing Services</h2>
              <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                Comprehensive digital marketing solutions designed to elevate
                your brand's online presence and drive measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {marketingServices.map((service, index) => (
                <div
                  key={index}
                  className="animate-section opacity-0 transform translate-y-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/30 transition-all"
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

        {/* Marketing Strategy Section */}
        <section className="py-16 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="animate-section opacity-0 transform translate-y-8 text-center mb-12">
              <h2 className="text-3xl font-bold">Our Strategic Approach</h2>
              <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                A methodical, data-driven approach to digital marketing that
                ensures maximum ROI and sustainable growth.
              </p>
            </div>

            <div className="max-w-4xl mx-auto mt-16">
              {/* Strategy Steps */}
              <div className="relative">
                {/* Strategy Timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>

                {/* Step 1 */}
                <div className="animate-section opacity-0 transform translate-y-8 relative mb-16">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/20"></div>
                  <div className="ml-auto mr-auto md:ml-0 md:mr-auto md:pr-8 w-full md:w-1/2 text-center md:text-right">
                    <h3 className="text-xl font-bold mb-2">
                      1. Market Research & Analysis
                    </h3>
                    <p className="text-white/70">
                      In-depth analysis of your target market, competitors, and
                      unique business positioning to develop a tailored
                      marketing strategy.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="animate-section opacity-0 transform translate-y-8 relative mb-16">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/20"></div>
                  <div className="ml-auto mr-auto md:mr-0 md:ml-auto md:pl-8 w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">
                      2. Strategic Campaign Planning
                    </h3>
                    <p className="text-white/70">
                      Developing multi-channel marketing campaigns with clear
                      goals, target audiences, and measurable key performance
                      indicators.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="animate-section opacity-0 transform translate-y-8 relative mb-16">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/20"></div>
                  <div className="ml-auto mr-auto md:ml-0 md:mr-auto md:pr-8 w-full md:w-1/2 text-center md:text-right">
                    <h3 className="text-xl font-bold mb-2">
                      3. Execution & Optimization
                    </h3>
                    <p className="text-white/70">
                      Implementing marketing campaigns across digital platforms
                      with continuous monitoring and real-time optimization.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="animate-section opacity-0 transform translate-y-8 relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/20"></div>
                  <div className="ml-auto mr-auto md:mr-0 md:ml-auto md:pl-8 w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">
                      4. Reporting & Strategy Refinement
                    </h3>
                    <p className="text-white/70">
                      Comprehensive performance reports and strategic
                      recommendations to continually improve marketing
                      effectiveness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="animate-section opacity-0 transform translate-y-8 text-center mb-12">
              <h2 className="text-3xl font-bold">Success Stories</h2>
              <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                Real-world marketing transformations that demonstrate the power
                of strategic digital marketing.
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
              ref={strategiesRef}
            >
              {marketingCaseStudies.map((study, index) => (
                <div
                  key={index}
                  className="strategy-card opacity-0 transform translate-y-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/30 transition-all"
                >
                  {/* Case Study Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-blue-900/70 to-cyan-900/70 flex items-center justify-center">
                    <div className="text-4xl">
                      {study.image === "ecommerce"
                        ? "🛍️"
                        : study.image === "startup"
                        ? "🚀"
                        : "🍽️"}
                    </div>
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

        {/* FAQ Section */}
        <section className="py-16 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="animate-section opacity-0 transform translate-y-8 text-center mb-12">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                Common questions about our digital marketing services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mt-12">
              <div className="animate-section opacity-0 transform translate-y-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-2">
                  How much do marketing services cost?
                </h3>
                <p className="text-white/70">
                  Our marketing packages are flexible and start from ₹25,000 per
                  month. Pricing depends on your business goals, target market,
                  and required services. We provide transparent pricing and
                  detailed proposals.
                </p>
              </div>

              <div className="animate-section opacity-0 transform translate-y-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-2">
                  How long before I see marketing results?
                </h3>
                <p className="text-white/70">
                  Marketing results vary, but typically you can expect initial
                  improvements in 2-3 months. SEO and content marketing may take
                  4-6 months to show significant impact. We provide monthly
                  reports to track progress.
                </p>
              </div>

              <div className="animate-section opacity-0 transform translate-y-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-2">
                  Do you offer content creation services?
                </h3>
                <p className="text-white/70">
                  Yes, we provide comprehensive content creation including blog
                  posts, social media content, email newsletters, and marketing
                  copywriting tailored to your brand and target audience.
                </p>
              </div>

              <div className="animate-section opacity-0 transform translate-y-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">
                  Can you help with local marketing?
                </h3>
                <p className="text-white/70">
                  Absolutely! We specialize in local SEO, Google My Business
                  optimization, and targeted local advertising to help
                  businesses improve their visibility in specific geographic
                  areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-12 shadow-2xl max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Boost Your Digital Presence?
              </h2>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Let's create a powerful digital marketing strategy that drives
                growth, increases visibility, and helps you stand out in your
                market.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                Schedule Marketing Consultation
              </Link>
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

export default Marketing;
