import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const WebDevelopment = ({ darkMode }) => {
  const headerRef = useRef(null);
  const sectionsRef = useRef(null);
  const projectsRef = useRef(null);

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

    if (projectsRef.current) {
      const projects = projectsRef.current.querySelectorAll(".project-card");
      projects.forEach((project, index) => {
        setTimeout(() => {
          project.classList.add("animate-in");
        }, 600 + index * 100); // Staggered animation after sections
      });
    }
  }, []);

  // Web Development service details
  const technologies = [
    {
      name: "Custom Website Development",
      icon: "🔹",
      description:
        "Fast, secure & scalable websites using Next.js, React.js, and MERN Stack with responsive & SEO-friendly design.",
    },
    {
      name: "E-Commerce Solutions",
      icon: "🔹",
      description:
        "Shopify & WooCommerce integration with payment gateways and inventory & order management systems.",
    },
    {
      name: "AI & ML Integration",
      icon: "🔹",
      description:
        "AI-powered chatbots, recommendation systems, and data analytics with predictive insights.",
    },
    {
      name: "SaaS Development",
      icon: "🔹",
      description:
        "Multi-tenant SaaS platforms with cloud integration (AWS, Firebase, Azure) and API development.",
    },
  ];

  const portfolioProjects = [
    {
      title: "Food Delivery Platform",
      description:
        "Custom MERN stack application with real-time order tracking and AI-powered logistics optimization.",
      image: "food-delivery",
      tags: ["React", "Node.js", "MongoDB", "Express", "TensorFlow"],
    },
    {
      title: "E-Learning Platform",
      description:
        "Next.js based education platform with integrated AI assessment tools and personalized learning paths.",
      image: "e-learning",
      tags: ["Next.js", "React", "Firebase", "AI Integration"],
    },
    {
      title: "Manufacturing ERP",
      description:
        "Comprehensive enterprise resource planning solution for manufacturing companies with IoT integration.",
      image: "manufacturing-erp",
      tags: ["React", "Node.js", "PostgreSQL", "IoT", "Redux"],
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
        <div className="absolute -top-64 right-1/4 w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
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
              <div className="inline-block px-4 py-1 mb-6 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-sm font-medium text-purple-300">
                Web Development & AI Solutions 🚀
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">
                Digitally{" "}
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Empower
                </span>{" "}
                Your Business
              </h1>
              <p className="text-lg mb-8 text-white/70 leading-relaxed">
                Modern, scalable & AI-powered solutions to transform your
                business with cutting-edge web technology.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16" ref={sectionsRef}>
          <div className="container mx-auto px-6">
            <div className="animate-section opacity-0 transform translate-y-8 text-center mb-12">
              <h2 className="text-3xl font-bold">Our Services</h2>
              <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                Transform your business with cutting-edge web & AI solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="animate-section opacity-0 transform translate-y-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all"
                >
                  <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg">
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{tech.name}</h3>
                  <p className="text-white/70">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="animate-section opacity-0 transform translate-y-8 text-center mb-12">
              <h2 className="text-3xl font-bold">Our Development Process</h2>
              <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                We follow a transparent, collaborative process to ensure your
                project is delivered on time and exceeds expectations.
              </p>
            </div>

            <div className="max-w-4xl mx-auto mt-16">
              {/* Process Steps */}
              <div className="relative">
                {/* Process Timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>

                {/* Step 1 */}
                <div className="animate-section opacity-0 transform translate-y-8 relative mb-16">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/20"></div>
                  <div className="ml-auto mr-auto md:ml-0 md:mr-auto md:pr-8 w-full md:w-1/2 text-center md:text-right">
                    <h3 className="text-xl font-bold mb-2">
                      1. Discovery & Requirements
                    </h3>
                    <p className="text-white/70">
                      We begin by understanding your business goals, target
                      audience, and specific requirements to create a
                      comprehensive project plan.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="animate-section opacity-0 transform translate-y-8 relative mb-16">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/20"></div>
                  <div className="ml-auto mr-auto md:mr-0 md:ml-auto md:pl-8 w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">
                      2. Design & Prototyping
                    </h3>
                    <p className="text-white/70">
                      Our designers create wireframes and interactive prototypes
                      to visualize the user experience before development
                      begins.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="animate-section opacity-0 transform translate-y-8 relative mb-16">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/20"></div>
                  <div className="ml-auto mr-auto md:ml-0 md:mr-auto md:pr-8 w-full md:w-1/2 text-center md:text-right">
                    <h3 className="text-xl font-bold mb-2">
                      3. Development & Testing
                    </h3>
                    <p className="text-white/70">
                      Our developers build your application using clean,
                      maintainable code while maintaining regular updates and
                      testing rigorously.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="animate-section opacity-0 transform translate-y-8 relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/20"></div>
                  <div className="ml-auto mr-auto md:mr-0 md:ml-auto md:pl-8 w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">
                      4. Deployment & Support
                    </h3>
                    <p className="text-white/70">
                      We handle the deployment process and provide ongoing
                      support to ensure your application runs smoothly and
                      securely.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="animate-section opacity-0 transform translate-y-8 text-center mb-12">
              <h2 className="text-3xl font-bold">Recent Projects</h2>
              <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                Explore some of our recent web development projects delivered
                for clients across different industries.
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
              ref={projectsRef}
            >
              {portfolioProjects.map((project, index) => (
                <div
                  key={index}
                  className="project-card opacity-0 transform translate-y-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all"
                >
                  {/* Project Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-purple-900/70 to-blue-900/70 flex items-center justify-center">
                    <div className="text-4xl">
                      {project.image === "food-delivery"
                        ? "🍔"
                        : project.image === "e-learning"
                        ? "📚"
                        : "🏭"}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/70 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, tagIndex) => (
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

        {/* Call To Action */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-12 shadow-2xl max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Let's discuss your web development or AI integration needs and
                create a custom solution that helps your business grow.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                Schedule Free Consultation
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

export default WebDevelopment;
