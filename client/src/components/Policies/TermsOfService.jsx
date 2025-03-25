import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
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
          Terms of Service
        </motion.h1>

        <motion.section
          variants={sectionVariants}
          className="mb-10 bg-gray-900 p-6 rounded-lg"
        >
          <p className="text-gray-300 mb-4">
            Welcome to NeoWeb AI! These Terms of Service outline the rules for
            using our digital marketing services.
          </p>
        </motion.section>

        {[
          {
            number: "1",
            title: "Acceptance of Terms",
            content:
              "By using our website or services, you agree to comply with these terms. If you do not agree, please do not use our services.",
          },
          {
            number: "2",
            title: "Services We Provide",
            content:
              "We offer a range of digital marketing services, including:",
            items: [
              "SEO & PPC Campaigns",
              "Social Media Marketing",
              "Web Design & Development",
              "Branding & Content Strategy",
            ],
          },
          {
            number: "3",
            title: "Payment & Refund Policy",
            items: [
              "Payment for services is required upfront or as per agreed milestones.",
              "Refunds are only available for services not yet rendered.",
            ],
          },
          {
            number: "4",
            title: "Client Responsibilities",
            items: [
              "Provide accurate business information.",
              "Cooperate in providing necessary content and approvals.",
              "Respect project timelines and communication.",
            ],
          },
          {
            number: "5",
            title: "Intellectual Property",
            content:
              "All strategies, designs, and marketing materials created by us remain our property unless otherwise agreed.",
          },
          {
            number: "6",
            title: "Limitation of Liability",
            content:
              "We are not responsible for business losses, ranking drops, or platform changes affecting your campaigns.",
          },
          {
            number: "7",
            title: "Modification of Terms",
            content:
              "We may update these terms at any time. Continued use means you accept the changes.",
          },
        ].map((section) => (
          <motion.section
            key={section.number}
            variants={sectionVariants}
            className="mb-10 bg-gray-900 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
              {section.number}. {section.title}
            </h2>
            {section.content && (
              <p className="text-gray-300 mb-4">{section.content}</p>
            )}
            {section.items && (
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {section.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </motion.section>
        ))}

        <motion.section
          variants={sectionVariants}
          className="text-center bg-gray-900 p-6 rounded-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
            Contact Us
          </h2>
          <p className="text-gray-300">
            For queries regarding these terms, email{" "}
            <a
              href="mailto:legal@newweb.in"
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

export default TermsOfService;
