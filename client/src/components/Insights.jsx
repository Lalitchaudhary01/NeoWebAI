import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Insights = ({ darkMode }) => {
  const insightsSectionRef = useRef(null);
  const processSectionRef = useRef(null);
  const faqSectionRef = useRef(null);

  // Animation for sections on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (insightsSectionRef.current) {
      observer.observe(insightsSectionRef.current);
    }

    if (processSectionRef.current) {
      observer.observe(processSectionRef.current);
    }

    if (faqSectionRef.current) {
      observer.observe(faqSectionRef.current);
    }

    return () => {
      if (insightsSectionRef.current) {
        observer.unobserve(insightsSectionRef.current);
      }
      if (processSectionRef.current) {
        observer.unobserve(processSectionRef.current);
      }
      if (faqSectionRef.current) {
        observer.unobserve(faqSectionRef.current);
      }
    };
  }, []);

  // FAQ accordion functionality
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Blog posts data
  const blogPosts = [
    {
      title: "Why AI-Powered Websites Are the Future?",
      excerpt:
        "Discover how AI is revolutionizing web experiences and why businesses need to adapt now.",
      image: "/path/to/ai-future.jpg", // Replace with actual path
      date: "March 15, 2025",
    },
    {
      title: "How SEO Can Boost Your Business in 2025?",
      excerpt:
        "Learn the latest SEO strategies that are driving unprecedented growth for forward-thinking businesses.",
      image: "/path/to/seo-boost.jpg", // Replace with actual path
      date: "March 10, 2025",
    },
    {
      title: "Custom vs. Pre-Built Websites – Which One to Choose?",
      excerpt:
        "A comprehensive guide to help you make the right decision for your business needs and budget.",
      image: "/path/to/custom-vs-template.jpg", // Replace with actual path
      date: "March 5, 2025",
    },
  ];

  // Success metrics data
  const successMetrics = [
    {
      stat: "95%",
      description: "of businesses see more traffic with SEO optimization",
      icon: "📈",
    },
    {
      stat: "40%",
      description: "increase in customer engagement with AI-driven chatbots",
      icon: "🤖",
    },
    {
      stat: "70%",
      description: "improvement in conversion rates with fast-loading websites",
      icon: "⚡",
    },
  ];

  // Work process steps
  const workProcess = [
    {
      title: "Discovery & Strategy",
      description:
        "We analyze your business goals, target audience, and competitors to create a tailored digital strategy.",
      number: "01",
    },
    {
      title: "Design & Prototyping",
      description:
        "Our designers create stunning, user-focused interfaces with interactive prototypes for your review.",
      number: "02",
    },
    {
      title: "Development & AI Integration",
      description:
        "We build your solution using cutting-edge technologies and integrate AI to enhance user experience.",
      number: "03",
    },
    {
      title: "Testing & Launch",
      description:
        "Rigorous quality assurance followed by a carefully orchestrated launch and post-launch support.",
      number: "04",
    },
  ];

  // FAQ data with English questions
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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMDEwMTAiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFoLTJ2MmgyVjF6TTE0IDFoLTJ2MmgyVjF6TTkgMUg3djJoMlYxek00IDFIMnYyaDJWMXpNNTQgMWgtMnYyaDJWMXpNNDkgMWgtMnYyaDJWMXpNNDQgMWgtMnYyaDJWMXpNMzkgMWgtMnYyaDJWMXpNMzQgMWgtMnYyaDJWMXpNMjkgMWgtMnYyaDJWMXpNMjQgMWgtMnYyaDJWMXpNMTkgMWgtMnYyaDJWMXpNNTkgNmgtMnYyaDJWNnpNMTQgNmgtMnYyaDJWNnpNOSA2SDd2MmgyVjZ6TTQgNkgydmJoMlY2ek01NCA2aC0ydjJoMlY2ek00OSA2aC0ydjJoMlY2ek00NCA2aC0ydjJoMlY2ek0zOSA2aC0ydjJoMlY2ek0zNCA2aC0ydjJoMlY2ek0yOSA2aC0ydjJoMlY2ek0yNCA2aC0ydjJoMlY2ek0xOSA2aC0ydjJoMlY2ek01OSAxMWgtMnYyaDJWMTF6TTE0IDExaC0ydjJoMlYxMXpNOSAxMUg3djJoMlYxMXpNNCAxMUgydjJoMlYxMXpNNTQgMTFoLTJ2MmgyVjExek00OSAxMWgtMnYyaDJWMTF6TTQ0IDExaC0ydjJoMlYxMXpNMzkgMTFoLTJ2MmgyVjExek0zNCAxMWgtMnYyaDJWMTF6TTI5IDExaC0ydjJoMlYxMXpNMjQgMTFoLTJ2MmgyVjExek0xOSAxMWgtMnYyaDJWMTF6TTU5IDE2aC0ydjJoMlYxNnpNMTQgMTZoLTJ2MmgyVjE2ek05IDE2SDd2MmgyVjE2ek00IDE2SDJ2MmgyVjE2ek01NCAxNmgtMnYyaDJWMTZ6TTQ5IDE2aC0ydjJoMlYxNnpNNDQgMTZoLTJ2MmgyVjE2ek0zOSAxNmgtMnYyaDJWMTZ6TTM0IDE2aC0ydjJoMlYxNnpNMjkgMTZoLTJ2MmgyVjE2ek0yNCAxNmgtMnYyaDJWMTZ6TTE5IDE2aC0ydjJoMlYxNnpNNTkgMjFoLTJ2MmgyVjIxek0xNCAyMWgtMnYyaDJWMjF6TTkgMjFIN3YyaDJWMjF6TTQgMjFIMnYyaDJWMjF6MTU0IDIxaC0ydjJoMlYyMXpNNDkgMjFoLTJ2MmgyVjIxek00NCAyMWgtMnYyaDJWMjF6TTM5IDIxaC0ydjJoMlYyMXpNMzQgMjFoLTJ2MmgyVjIxek0yOSAyMWgtMnYyaDJWMjF6MTI0IDIxaC0ydjJoMlYyMXpNMTkgMjFoLTJ2MmgyVjIxek01OSAyNmgtMnYyaDJWMjZ6TTE0IDI2aC0ydjJoMlYyNnpNOSAyNkg3djJoMlYyNnpNNCAyNkgydjJoMlYyNnpNNTQgMjZoLTJ2MmgyVjI2ek00OSAyNmgtMnYyaDJWMjZ6TTQ0IDI2aC0ydjJoMlYyNnpNMzkgMjZoLTJ2MmgyVjI2ek0zNCAyNmgtMnYyaDJWMjZ6MTI5IDI2aC0ydjJoMlYyNnpNMjQgMjZoLTJ2MmgyVjI2ek0xOSAyNmgtMnYyaDJWMjZ6TTU5IDMxaC0ydjJoMlYzMXpNMTQgMzFoLTJ2MmgyVjMxek05IDMxSDd2MmgyVjMxek00IDMxSDJ2MmgyVjMxek01NCAzMWgtMnYyaDJWMzF6TTQ5IDMxaC0ydjJoMlYzMXpNNDQgMzFoLTJ2MmgyVjMxek0zOSAzMWgtMnYyaDJWMzF6MTM0IDMxaC0ydjJoMlYzMXpNMjkgMzFoLTJ2MmgyVjMxek0yNCAzMWgtMnYyaDJWMzF6TTE5IDMxaC0ydjJoMlYzMXpNNTkgMzZoLTJ2MmgyVjM2ek0xNCAzNmgtMnYyaDJWMzZ6TTkgMzZIN3YyaDJWMzZ6TTQgMzZIMnYyaDJWMzZ6TTU0IDM2aC0ydjJoMlYzNnpNNDkgMzZoLTJ2MmgyVjM2ek00NCAzNmgtMnYyaDJWMzZ6TTM5IDM2aC0ydjJoMlYzNnpNMzQgMzZoLTJ2MmgyVjM2ek0yOSAzNmgtMnYyaDJWMzZ6TTI0IDM2aC0ydjJoMlYzNnpNMTkgMzZoLTJ2MmgyVjM2ek01OSA0MWgtMnYyaDJWNDF6TTE0IDQxaC0ydjJoMlY0MXpNOSA0MUg3djJoMlY0MXpNNCA0MUgydjJoMlY0MXpNNTQgNDFoLTJ2MmgyVjQxek00OSA0MWgtMnYyaDJWNDF6TTQ0IDQxaC0ydjJoMlY0MXpNMzkgNDFoLTJ2MmgyVjQxek0zNCA0MWgtMnYyaDJWNDF6MTI5IDQxaC0ydjJoMlY0MXpNMjQgNDFoLTJ2MmgyVjQxek0xOSA0MWgtMnYyaDJWNDF6TTU5IDQ2aC0ydjJoMlY0NnpNMTQgNDZoLTJ2MmgyVjQ2ek05IDQ2SDd2MmgyVjQ2ek00IDQ2SDJ2MmgyVjQ2ek01NCA0NmgtMnYyaDJWNDZ6DTQ5IDQ2aC0ydjJoMlY0NnpNNDQgNDZoLTJ2MmgyVjQ2ek0zOSA0NmgtMnYyaDJWNDZ6MTM0IDQ2aC0ydjJoMlY0NnpNMjkgNDZoLTJ2MmgyVjQ2ek0yNCA0NmgtMnYyaDJWNDZ6TTE5IDQ2aC0ydjJoMlY0NnpNNTkgNTFoLTJ2MmgyVjUxek0xNCA1MWgtMnYyaDJWNTF6TTkgNTFIN3YyaDJWNTF6TTQgNTFIMnYyaDJWNTF6DTU0IDUxaC0ydjJoMlY1MXpNNDkgNTFoLTJ2MmgyVjUxek00NCA1MWgtMnYyaDJWNTF6TTM5IDUxaC0ydjJoMlY1MXpNMzQgNTFoLTJ2MmgyVjUxek0yOSA1MWgtMnYyaDJWNTF6TDI0IDUxaC0ydjJoMlY1MXpNMTkgNTFoLTJ2MmgyVjUxek01OSA1NmgtMnYyaDJWNTZ6TTE0IDU2aC0ydjJoMlY1NnpNOSA1Nkg3djJoMlY1NnpNNCA1NkgydjJoMlY1NnpNNTQgNTZoLTJ2MmgyVjU2ek00OSA1NmgtMnYyaDJWNTZ6DTQ0IDU2aC0ydjJoMlY1NnpNMzkgNTZoLTJ2MmgyVjU2ek0zNCA1NmgtMnYyaDJWNTZ6MTI5IDU2aC0ydjJoMlY1NnpNMjQgNTZoLTJ2MmgyVjU2ek0xOSA1NmgtMnYyaDJWNTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-30"></div>

        {/* Gradient effects */}
        <div className="absolute -top-64 -right-64 w-96 h-96 bg-indigo-700 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-64 left-32 w-96 h-96 bg-purple-600 opacity-10 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-block px-4 py-1 mb-6 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-sm font-medium text-purple-300">
                Industry Insights
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">
                Stay Ahead with Our
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent ml-2">
                  AI-Powered Insights
                </span>
              </h1>
              <p className="text-lg mb-8 text-white/70 leading-relaxed">
                Discover the latest trends, success metrics, and expert advice
                to elevate your digital presence and outperform your
                competition.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts / Industry Trends Section */}
        <section
          ref={insightsSectionRef}
          className="py-16 opacity-0 transition-all duration-1000 transform translate-y-8"
        >
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Industry Trends & Latest Insights
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="h-48 bg-gray-800 relative">
                    {/* Placeholder for image */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600/30 to-blue-600/30">
                      <span className="text-4xl">
                        {index === 0 ? "🤖" : index === 1 ? "📈" : "🔍"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-white/50 mb-2">
                      {post.date}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-white/70 mb-4">{post.excerpt}</p>
                    <Link
                      to="/blog-details"
                      className="inline-block text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/blog"
                className="inline-block bg-white/5 border border-white/10 text-white font-medium py-3 px-8 rounded-full hover:bg-white/10 transition-all"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-16 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Success By The Numbers
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{metric.icon}</div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {metric.stat}
                  </h3>
                  <p className="text-white/70">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Process Section */}
        <section
          ref={processSectionRef}
          className="py-16 opacity-0 transition-all duration-1000 transform translate-y-8"
        >
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our Work Process
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              <p className="mt-4 text-white/70 max-w-2xl">
                We follow a proven methodology that ensures high-quality results
                and client satisfaction at every stage of your project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workProcess.map((step, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute -top-6 -right-6 text-6xl font-bold text-white/5">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/70 relative z-10">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/process"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                Learn About Our Process
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
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

        {/* Call to Action Section */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-lg border border-white/10 rounded-xl p-12 shadow-xl max-w-5xl mx-auto">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Transform Your Digital Presence?
                </h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Partner with us to create an AI-powered website that drives
                  results, engages your audience, and positions your brand for
                  long-term success.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                  >
                    Start Your Project
                  </Link>
                  <Link
                    to="/case-studies"
                    className="inline-block bg-white/5 border border-white/10 text-white font-medium py-3 px-8 rounded-full hover:bg-white/10 transition-all"
                  >
                    View Our Work
                  </Link>
                </div>
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

export default Insights;
