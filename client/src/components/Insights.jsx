import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { blogsData } from "../Blogs/Blog"; // Import the blog data

const Insights = ({ darkMode }) => {
  const insightsSectionRef = useRef(null);
  const processSectionRef = useRef(null);
  const faqSectionRef = useRef(null);
  const [showAllBlogs, setShowAllBlogs] = useState(false);

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
      observer.unobserve(faqSectionRef.current);
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

  // Handle "View All Articles" click
  const handleViewAllClick = (e) => {
    e.preventDefault();
    setShowAllBlogs(true);
  };

  // Get blog posts based on showAllBlogs state
  const visibleBlogPosts = showAllBlogs
    ? blogsData.blogs.map((blog) => ({
        title: blog.title,
        excerpt: blog.summary,
        date: blog.date,
        id: blog.id,
      }))
    : blogsData.blogs.slice(0, 3).map((blog) => ({
        title: blog.title,
        excerpt: blog.summary,
        date: blog.date,
        id: blog.id,
      }));

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

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-gray-950 to-black text-white ${
        darkMode ? "dark" : ""
      }`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Modern grid overlay */}

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

            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${
                showAllBlogs ? "md:grid-cols-3 lg:grid-cols-4" : ""
              }`}
            >
              {visibleBlogPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="h-48 bg-gray-800 relative">
                    {/* Placeholder for image */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600/30 to-blue-600/30">
                      <span className="text-4xl">
                        {index % 3 === 0 ? "🤖" : index % 3 === 1 ? "📈" : "🔍"}
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
                      to={`/blog-details/${post.id}`}
                      className="inline-block text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              {!showAllBlogs ? (
                <button
                  onClick={handleViewAllClick}
                  className="inline-block bg-white/5 border border-white/10 text-white font-medium py-3 px-8 rounded-full hover:bg-white/10 transition-all"
                >
                  View All Articles
                </button>
              ) : (
                <button
                  onClick={() => setShowAllBlogs(false)}
                  className="inline-block bg-white/5 border border-white/10 text-white font-medium py-3 px-8 rounded-full hover:bg-white/10 transition-all"
                >
                  Show Less
                </button>
              )}
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
