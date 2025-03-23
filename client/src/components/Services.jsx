import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Services = ({ darkMode }) => {
  const servicesRef = useRef(null);
  const headingRef = useRef(null);

  // Animation for section elements on load
  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.classList.add("animate-in");
    }

    if (servicesRef.current) {
      const serviceCards =
        servicesRef.current.querySelectorAll(".service-card");
      serviceCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("animate-in");
        }, 200 + index * 100); // Staggered animation
      });
    }
  }, []);

  const services = [
    {
      id: 1,
      icon: "💻",
      title: "Web Development & AI Solutions",
      description:
        "Modern, responsive websites and AI integrations that drive business growth at accessible rates.",
      features: [
        "Custom Website Development – Next.js, MERN stack",
        "E-Commerce Solutions – Shopify, WooCommerce",
        "AI & ML Integration – Chatbots, recommendation systems",
        "SaaS Development – Scalable cloud applications",
      ],
      gradient: "from-purple-600 to-blue-600",
      link: "/services/web-development",
    },
    {
      id: 2,
      icon: "📈",
      title: "Marketing & SEO",
      description:
        "Strategic digital marketing approaches to boost your visibility and attract more customers.",
      features: [
        "SEO Optimization – Google ranking, site speed boost",
        "Paid Ads Management – Google, Facebook & Instagram",
        "Content Strategy – Engaging blogs, social media content",
      ],
      gradient: "from-blue-600 to-cyan-600",
      link: "/services/marketing",
    },
    {
      id: 3,
      icon: "🎨",
      title: "Branding & Graphics",
      description:
        "Distinctive brand identity solutions that make your business stand out from the competition.",
      features: [
        "UI/UX Design – Modern, user-friendly interfaces",
        "Logo & Branding – Unique brand identity creation",
        "Business Automation – AI-powered workflows",
      ],
      gradient: "from-cyan-600 to-indigo-600",
      link: "/services/branding",
    },
    {
      id: 4,
      icon: "💰",
      title: "Accessible Pricing",
      description:
        "Tailored pricing plans designed for businesses in emerging economic centers across India.",
      features: [
        "Customized packages for growing businesses",
        "Flexible payment options",
        "Free initial consultation & quote",
        "Ongoing support at no extra cost",
      ],
      gradient: "from-indigo-600 to-purple-600",
      link: "/services/pricing",
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
        <div className="absolute -top-64 left-1/4 w-96 h-96 bg-indigo-700 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-64 h-64 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-600 opacity-10 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Services Header Section */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-6">
            <div
              ref={headingRef}
              className="text-center max-w-3xl mx-auto mb-16 opacity-0 transition-all duration-1000 transform translate-y-8"
            >
              <div className="inline-block px-4 py-1 mb-6 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-sm font-medium text-purple-300">
                Our Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">
                Premium Solutions at{" "}
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Accessible Prices
                </span>
              </h1>
              <p className="text-lg mb-8 text-white/70 leading-relaxed">
                We specialize in bringing cutting-edge technology to businesses
                in emerging economic hubs across India with pricing plans that
                make digital transformation a reality for every ambitious
                enterprise.
              </p>
            </div>
          </div>
        </section>

        {/* Services Cards Section */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div
              ref={servicesRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="service-card bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300 opacity-0 transform translate-y-8"
                >
                  {/* Service Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <span className="text-2xl">{service.icon}</span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                  {/* Service Description */}
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <ul className="mb-8 space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className={`w-5 h-5 mr-2 mt-1 flex-shrink-0 text-gradient bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <Link
                    to={service.link}
                    className={`inline-flex items-center font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                  >
                    Learn more
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emerging Markets Focus Section */}
        <section className="py-16 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                      <span className="text-5xl">🏙️</span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      Empowering India's Rising Economic Centers
                    </h2>
                    <p className="text-white/70 mb-6">
                      We believe in the untapped potential of India's emerging
                      business hubs. Our solutions are crafted specifically for
                      the visionary entrepreneurs and established businesses in
                      these dynamic markets who deserve the same cutting-edge
                      technology as their metropolitan counterparts, delivered
                      at prices that reflect local economic realities.
                    </p>
                    <div className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-white font-medium">
                      Technology solutions priced for real India
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call To Action Section */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-12 shadow-2xl max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Let's discuss how our tailored digital solutions can help your
                business harness the power of technology without the premium
                price tag. Book a free consultation today!
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                Get Free Consultation
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

export default Services;
