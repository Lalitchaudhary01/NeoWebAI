import React from "react";
import { motion } from "framer-motion";

const AllRightsReserved = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-2xl bg-gray-900 p-8 rounded-lg shadow-xl"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          All Rights Reserved
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="text-gray-300 text-center space-y-6"
        >
          <p>
            © {currentYear} NeoWeb AI. All rights reserved. This website and its
            content, including text, graphics, and other materials, are
            protected by copyright, trademark, and other intellectual property
            laws. Any unauthorized use, reproduction, or distribution is
            strictly prohibited without prior written consent.
          </p>

          <motion.div
            variants={itemVariants}
            className="bg-gray-800 p-4 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-3 text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
              GDPR Compliance Statement
            </h3>
            <p className="text-gray-400 text-sm">
              NeoWeb AI is committed to protecting your personal data in
              compliance with the General Data Protection Regulation (GDPR). We
              ensure transparent data processing, respect your privacy rights,
              and implement robust security measures to safeguard your
              information.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-800 p-4 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-3 text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
              Disclaimer
            </h3>
            <p className="text-gray-400 text-sm">
              All information and services provided on this website are for
              informational purposes only. NeoWeb AI is not responsible for any
              inaccuracies, omissions, or damages arising from the use of this
              website. By accessing this site, you agree to our terms and
              conditions.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-6 text-gray-500 text-xs"
          >
            <p>Last Updated: {new Date().toLocaleDateString()}</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AllRightsReserved;
