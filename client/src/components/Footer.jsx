import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

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

            {/* Social Media Links with React Icons */}
            <div className="flex space-x-4">
              <a
                href="#linkedin"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedinIn className="text-white" />
              </a>
              <a
                href="#twitter"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="text-white" />
              </a>
              <a
                href="#instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="text-white" />
              </a>
              <a
                href="#facebook"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebookF className="text-white" />
              </a>
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
