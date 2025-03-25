import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const socialLinks = [
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/neo-web-820421358/",
    },
    { icon: FaTwitter, href: "https://x.com/NeoWeb_official" },
    { icon: FaInstagram, href: "https://www.instagram.com/neoweb.ai01/" },
    { icon: FaFacebookF, href: "#facebook" },
  ];

  const quickLinks = [
    "Home",
    "About Us",
    "Services",
    "Case Studies",
    "Pricing",
    "Contact",
  ];

  const services = [
    "AI Development",
    "Web Design",
    "Mobile Apps",
    "UI/UX Design",
    "Data Analytics",
    "Digital Marketing",
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-gradient-to-b from-gray-950 to-black text-white pt-20 relative overflow-hidden ${
        darkMode ? "dark" : ""
      }`}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <motion.div
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-700 opacity-20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-48 right-48 w-72 h-72 bg-blue-600 opacity-20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        ></motion.div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              NeoWeb AI
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Transforming Ideas into Digital Success! We craft AI-powered
              solutions that elevate your brand and drive growth.
            </p>

            {/* Social Media Links with Hover Animations */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, 5, -5, 0],
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                >
                  <span className="sr-only">{Icon.name}</span>
                  <Icon className="text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li
                  key={link}
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Link
                    to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-white text-lg font-medium mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <motion.li
                  key={service}
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Link
                    to={`/services/${service
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-white text-lg font-medium mb-6">
              Get In Touch
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: "📍",
                  text: "Nirmla-C 708/Radha-valley, Mathura 281502, India",
                },
                { icon: "📞", text: "+91 8445646300" },
                {
                  icon: "📧",
                  text: "contact@newweb.in",
                  type: "email",
                },
                {
                  icon: "🌐",
                  text: "www.newweb.in",
                  type: "website",
                },
              ].map(({ icon, text, type }) => (
                <motion.p
                  key={text}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className="text-white/70 flex items-start"
                >
                  <span className="mr-3">{icon}</span>
                  {type === "email" ? (
                    <a
                      href="mailto:contact@newweb.in"
                      className="hover:text-white transition-colors duration-300"
                    >
                      {text}
                    </a>
                  ) : type === "website" ? (
                    <a
                      href="https://www.newweb.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors duration-300"
                    >
                      {text}
                    </a>
                  ) : (
                    <span>{text}</span>
                  )}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar with Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="border-t border-white/5 py-8 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} NeoWeb AI. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookies Policy"].map(
              (item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white/50 text-sm hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
