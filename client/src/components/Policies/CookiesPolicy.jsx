import React, { useState } from "react";
import { motion } from "framer-motion";

const CookiesPolicy = () => {
  const [showDetails, setShowDetails] = useState(false);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6 py-16"
      >
        <motion.h1
          variants={sectionVariants}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          Cookies Policy
        </motion.h1>

        <motion.section
          variants={sectionVariants}
          className="mb-10 bg-gray-900 p-6 rounded-lg"
        >
          <p className="text-gray-300 mb-4">
            At NeoWeb AI, we use cookies to enhance your experience and improve
            our marketing efforts.
          </p>
        </motion.section>

        {[
          {
            title: "What Are Cookies?",
            content:
              "Cookies are small files stored on your device that help us track website performance, user behavior, and marketing effectiveness.",
          },
          {
            title: "Types of Cookies We Use",
            items: [
              "<strong>Essential Cookies:</strong> Required for website functionality.",
              "<strong>Analytics Cookies:</strong> Help us analyze user interaction (Google Analytics, Meta Pixel).",
              "<strong>Marketing Cookies:</strong> Used for targeted ads and remarketing campaigns.",
            ],
          },
          {
            title: "Third-Party Tracking",
            content:
              "We may use external tools (Google, Facebook, LinkedIn, etc.) that place cookies for tracking ad performance and audience insights.",
          },
          {
            title: "Updates to This Policy",
            content:
              "We may revise this policy periodically. Please check this page for updates.",
          },
        ].map((section) => (
          <motion.section
            key={section.title}
            variants={sectionVariants}
            className="mb-10 bg-gray-900 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
              {section.title}
            </h2>
            {section.content && (
              <p className="text-gray-300 mb-4">{section.content}</p>
            )}
            {section.items && (
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {section.items.map((item, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            )}
          </motion.section>
        ))}

        <motion.section
          variants={sectionVariants}
          className="mb-10 bg-gray-900 p-6 rounded-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
            How You Can Manage Cookies
          </h2>
          <p className="text-gray-300 mb-4">
            You can adjust cookie settings in your browser to block or delete
            them. However, this may affect website performance.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowDetails(!showDetails)}
            className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            {showDetails ? "Hide Details" : "Show Cookie Management Details"}
          </motion.button>

          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 p-4 bg-gray-800 rounded-lg"
            >
              <h3 className="text-lg font-semibold mb-2 text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
                Browser Cookie Management
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Chrome: Settings &gt; Privacy and Security &gt; Cookies and
                  other site data
                </li>
                <li>
                  Firefox: Options &gt; Privacy &amp; Security &gt; Cookies and
                  Site Data
                </li>
                <li>
                  Safari: Preferences &gt; Privacy &gt; Cookies and Website Data
                </li>
                <li>
                  Edge: Settings &gt; Cookies and site permissions &gt; Cookies
                  and site data
                </li>
              </ul>
            </motion.div>
          )}
        </motion.section>

        <motion.section
          variants={sectionVariants}
          className="text-center bg-gray-900 p-6 rounded-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
            Contact Us
          </h2>
          <p className="text-gray-300">
            For cookie-related queries, contact{" "}
            <a
              href="mailto:cookies@newweb.in"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              contact@newweb.in
            </a>
          </p>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default CookiesPolicy;
