import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const About = ({ darkMode }) => {
  const missionRef = useRef(null);
  const valueCardsRef = useRef(null);
  const teamSectionRef = useRef(null);
  const journeySectionRef = useRef(null);
  const faqSectionRef = useRef(null);

  // State for FAQ interactions
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle FAQ function
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animation for sections on scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = [
        missionRef.current,
        valueCardsRef.current,
        teamSectionRef.current,
        journeySectionRef.current,
        faqSectionRef.current,
      ];

      elements.forEach((el) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.75) {
          el.classList.add("animate-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "A typical website development project takes 4-8 weeks depending on complexity. Simple websites can be completed in as little as 2 weeks, while complex platforms with custom features may take 12+ weeks.",
    },
    {
      question: "Why is SEO important for my business?",
      answer:
        "SEO is crucial for visibility in search engines. It drives organic traffic, builds credibility, provides a competitive advantage, and delivers high ROI compared to paid advertising. Without SEO, your website may remain invisible to potential customers.",
    },
    {
      question: "Should I choose Shopify or a custom website?",
      answer:
        "Shopify is ideal for quick setup, limited budget, and standard e-commerce needs. Custom websites are better for unique functionality, specific design requirements, and scaling businesses with complex needs. We can help determine which is best for your specific situation.",
    },
    {
      question: "How much does a website cost?",
      answer:
        "Website costs vary based on requirements. Basic websites range from ₹50,000-₹1,50,000, while complex e-commerce or custom platforms can range from ₹2,00,000-₹10,00,000+. We provide detailed quotes after understanding your specific needs.",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-gray-950 to-black text-white ${
        darkMode ? "dark" : ""
      }`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Modern grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMDEwMTAiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFoLTJ2MmgyVjF6TTE0IDFoLTJ2MmgyVjF6TTkgMUg3djJoMlYxek00IDFIMnYyaDJWMXpNNTQgMWgtMnYyaDJWMXpNNDkgMWgtMnYyaDJWMXpNNDQgMWgtMnYyaDJWMXpNMzkgMWgtMnYyaDJWMXpNMzQgMWgtMnYyaDJWMXpNMjkgMWgtMnYyaDJWMXpNMjQgMWgtMnYyaDJWMXpNMTkgMWgtMnYyaDJWMXoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

        {/* Gradient effects */}
        <div className="absolute -top-64 -left-64 w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-32 w-64 h-64 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-64 -right-32 w-96 h-96 bg-indigo-600 opacity-10 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:py-40">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-sm font-medium text-purple-300">
              About NeoWeb AI
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Democratizing Technology{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Across Digital Frontiers
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Breaking barriers to bring powerful, affordable digital solutions
              to every corner of India, empowering businesses regardless of
              location.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section
          ref={missionRef}
          className="py-20 opacity-0 transform translate-y-8 transition-all duration-1000"
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="relative w-full h-80 md:h-96 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                  {/* Inner reflected surface effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 opacity-50"></div>

                  {/* Placeholder image or illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/30">
                      NeoWeb AI
                    </div>
                  </div>

                  {/* Light reflection */}
                  <div className="absolute -top-32 -left-32 w-64 h-64 bg-white opacity-20 rounded-full blur-2xl"></div>
                </div>
              </div>

              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-white/70 mb-6 leading-relaxed">
                  At <span className="text-white font-medium">NeoWeb AI</span>,
                  we're on a mission to bridge the digital divide that exists
                  across India. We believe that advanced technology shouldn't be
                  a luxury reserved for metropolitan businesses.
                </p>
                <p className="text-white/70 leading-relaxed">
                  We envision a digitally inclusive India where geography and
                  budget constraints don't dictate technological access. Every
                  entrepreneur, family-owned shop, and local artisan deserves
                  cutting-edge digital tools tailored to their unique needs and
                  financial realities.
                </p>

                <div className="mt-8">
                  <Link
                    to="/services"
                    className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section
          ref={valueCardsRef}
          className="py-20 border-t border-white/5 opacity-0 transform translate-y-8 transition-all duration-1000"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4 text-center">
              What We Offer
            </h2>
            <p className="text-white/70 text-center max-w-3xl mx-auto mb-16">
              Innovative digital solutions designed for the unique challenges
              and opportunities of businesses beyond metro areas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service Card 1 */}
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Accessible Website Development
                </h3>
                <p className="text-white/70 mb-4">
                  Professional, market-ready websites crafted for grassroots
                  businesses that connect you with your community and open doors
                  to broader markets.
                </p>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Bandwidth-Optimized Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Hyperlocal SEO Configuration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Intuitive Management System
                  </li>
                </ul>
              </div>

              {/* Service Card 2 */}
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Streamlined E-Commerce Platforms
                </h3>
                <p className="text-white/70 mb-4">
                  Start selling online without complexity or prohibitive costs.
                  Our e-commerce solutions help local enterprises reach
                  customers nationwide.
                </p>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Integrated UPI & Local Payment Systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Multi-language Support
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Simplified Inventory Control
                  </li>
                </ul>
              </div>

              {/* Service Card 3 */}
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Practical AI Tools for Growing Businesses
                </h3>
                <p className="text-white/70 mb-4">
                  Intelligent automation tools that enhance productivity without
                  overwhelming complexity. Purpose-built solutions for the real
                  challenges of emerging businesses.
                </p>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Smart WhatsApp Business Integration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Context-Aware Chatbots
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Intelligent Customer Engagement
                  </li>
                </ul>
              </div>

              {/* Service Card 4 */}
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Hyperlocal Digital Marketing
                </h3>
                <p className="text-white/70 mb-4">
                  Connect with customers in your area through targeted,
                  budget-conscious digital marketing strategies that deliver
                  real results where it matters most.
                </p>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Community-Focused Google Business Profile
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Strategic Social Media Presence
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Regional WhatsApp Growth Strategies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section
          ref={teamSectionRef}
          className="py-20 border-t border-white/5 opacity-0 transform translate-y-8 transition-all duration-1000"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Why Choose NeoWeb AI
            </h2>
            <p className="text-white/70 text-center max-w-3xl mx-auto mb-16">
              Our unique approach addresses the challenges faced by businesses
              in emerging digital markets:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* USP Card 1 */}
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="inline-block mr-2 text-green-400">✅</span>
                  Inclusive Pricing Philosophy
                </h3>
                <p className="text-white/70">
                  Our revolutionary pricing models are designed to accommodate
                  diverse economic realities. We believe financial constraints
                  shouldn't limit technological progress for any business.
                </p>
              </div>

              {/* USP Card 2 */}
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="inline-block mr-2 text-green-400">✅</span>
                  Cultural Resonance
                </h3>
                <p className="text-white/70">
                  We create solutions informed by deep understanding of regional
                  nuances, including language preferences, infrastructure
                  realities, and market dynamics of diverse Indian communities.
                </p>
              </div>

              {/* USP Card 3 */}
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="inline-block mr-2 text-green-400">✅</span>
                  Human-Centered Technology
                </h3>
                <p className="text-white/70">
                  Our approach strips away complexity and technical jargon. We
                  deliver intuitive, practical solutions with personalized
                  support that ensures technology empowers rather than
                  intimidates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey Section */}
        <section
          ref={journeySectionRef}
          className="py-20 border-t border-white/5 opacity-0 transform translate-y-8 transition-all duration-1000"
        >
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-lg border border-white/10 rounded-xl p-8 md:p-12 shadow-xl">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  Our Journey So Far
                </h2>

                <div className="space-y-12">
                  <div className="flex">
                    <div className="mr-6 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <div className="h-full w-0.5 bg-gradient-to-b from-purple-600 to-blue-600/0 ml-6 mt-2"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        The Genesis
                      </h3>
                      <p className="text-white/70">
                        NeoWeb AI emerged from recognizing a critical gap: while
                        digital transformation swept through metropolitan areas,
                        emerging markets across India lacked affordable,
                        accessible technology options. We committed to bridging
                        this divide.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-6 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <div className="h-full w-0.5 bg-gradient-to-b from-purple-600 to-blue-600/0 ml-6 mt-2"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Early Impact Stories
                      </h3>
                      <p className="text-white/70">
                        As a young venture, we've successfully delivered
                        transformative solutions for pioneering
                        businesses—creating a family grocery store's first
                        digital presence, developing a local eatery's seamless
                        online ordering platform, and helping a traditional
                        artisan connect with global markets through e-commerce.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-6 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Our Horizon
                      </h3>
                      <p className="text-white/70">
                        Though we're in our early stages, our vision is
                        expansive: to become the trusted technology partner for
                        businesses throughout India's diverse regions. We're
                        developing an ecosystem of solutions that respect local
                        contexts while delivering world-class capabilities to
                        previously underserved communities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          ref={faqSectionRef}
          className="py-16 opacity-0 transition-all duration-1000 transform translate-y-8"
        >
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="mb-4 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    className="flex justify-between items-center w-full px-6 py-4 text-left"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium text-lg">{faq.question}</span>
                    <span className="text-xl ml-2">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? "max-h-96 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-white/70">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-white/70 mb-4">
                Don't see your question here? Reach out to us directly.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white/5 border border-white/10 text-white font-medium py-3 px-8 rounded-full hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Technology That Understands You
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Partner with us to bring your business into the digital age with
              solutions designed for your unique context and financial reality.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all"
            >
              Start Your Digital Journey
            </Link>
          </div>
        </section>

        {/* CSS for animations */}
        <style jsx>{`
          .animate-in {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 1 !important;
            transform: translateY(0) !important;
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

      {/* Footer would go here */}
    </div>
  );
};

export default About;
