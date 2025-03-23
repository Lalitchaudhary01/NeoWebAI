import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`bg-gradient-to-b from-gray-950 to-black text-white pt-20 ${
        darkMode ? "dark" : ""
      }`}
    >
      {/* Background Elements */}
      <div className="absolute overflow-hidden pointer-events-none">
        {/* Gradient effects */}
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-700 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-48 right-48 w-72 h-72 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              NeoWeb AI
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Transforming Ideas into Digital Success! We craft AI-powered
              solutions that elevate your brand and drive growth.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {["LinkedIn", "Twitter", "Instagram", "Facebook"].map(
                (platform) => (
                  <a
                    key={platform}
                    href={`#${platform.toLowerCase()}`}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                  >
                    <span className="sr-only">{platform}</span>
                    {/* Simple text placeholder for social icons */}
                    <span className="text-sm">{platform.charAt(0)}</span>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "Home",
                "About Us",
                "Services",
                "Case Studies",
                "Pricing",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "AI Development",
                "Web Design",
                "Mobile Apps",
                "UI/UX Design",
                "Data Analytics",
                "Digital Marketing",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to={`/services/${service
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <p className="text-white/70 flex items-start">
                <span className="mr-3">📍</span>
                <span>Your Location</span>
              </p>
              <p className="text-white/70 flex items-start">
                <span className="mr-3">📞</span>
                <span>+91 XXXXXXXXXX</span>
              </p>
              <p className="text-white/70 flex items-start">
                <span className="mr-3">📧</span>
                <a
                  href="mailto:contact@neowebai.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  contact@neowebai.com
                </a>
              </p>
              <p className="text-white/70 flex items-start">
                <span className="mr-3">🌐</span>
                <a
                  href="https://www.neowebai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  www.neowebai.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        {/* <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Let's Build Something Amazing Together!
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white/70 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/70 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="your@email.com"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-white/70 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Project Inquiry"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white/70 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} NeoWeb AI. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookies Policy"].map(
              (item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-white/50 text-sm hover:text-white transition-colors duration-300"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
