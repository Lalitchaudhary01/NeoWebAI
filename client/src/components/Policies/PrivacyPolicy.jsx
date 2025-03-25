import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
          Privacy Policy
        </motion.h1>

        <motion.section
          variants={sectionVariants}
          className="mb-10 bg-gray-900 p-6 rounded-lg"
        >
          <p className="text-gray-300 mb-4">
            At NeoWeb AI, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, and safeguard your data when you engage with our
            digital marketing services.
          </p>
        </motion.section>

        {[
          {
            title: "Information We Collect",
            items: [
              "<strong>Personal Details:</strong> Name, email, phone number, and business information when you contact us.",
              "<strong>Website Data:</strong> IP address, browser type, and pages visited to enhance user experience.",
              "<strong>Marketing Data:</strong> Information from forms, subscriptions, and interactions with our ads.",
            ],
          },
          {
            title: "How We Use Your Information",
            items: [
              "Deliver customized digital marketing strategies.",
              "Improve website functionality and user experience.",
              "Send important updates, promotions, and newsletters.",
              "Conduct market research to enhance our services.",
            ],
          },
          {
            title: "Third-Party Sharing",
            description:
              "We do not sell your data. However, we may share it with trusted partners for:",
            items: [
              "Analytics and performance tracking.",
              "Advertising and campaign management.",
              "Payment processing (if applicable).",
            ],
          },
          {
            title: "Your Rights",
            items: [
              "Request access to your personal data.",
              "Opt-out of marketing emails anytime.",
              "Request deletion of your data upon request.",
            ],
          },
        ].map((section, index) => (
          <motion.section
            key={section.title}
            variants={sectionVariants}
            className="mb-10 bg-gray-900 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
              {section.title}
            </h2>
            {section.description && (
              <p className="text-gray-300 mb-4">{section.description}</p>
            )}
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          </motion.section>
        ))}

        <motion.section
          variants={sectionVariants}
          className="mb-10 bg-gray-900 p-6 rounded-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
            Security Measures
          </h2>
          <p className="text-gray-300">
            We use encryption, secure servers, and strict access controls to
            protect your data from unauthorized access.
          </p>
        </motion.section>

        <motion.section
          variants={sectionVariants}
          className="text-center bg-gray-900 p-6 rounded-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
            Contact Us
          </h2>
          <p className="text-gray-300">
            For any privacy-related concerns, reach out to{" "}
            <a
              href="mailto:privacy@newweb.in"
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

export default PrivacyPolicy;
