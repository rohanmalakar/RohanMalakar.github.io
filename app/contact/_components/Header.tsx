'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
        Let&apos;s Connect
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Ready to collaborate on your next project? Let&apos;s discuss how we can work together to bring your ideas to life.
      </p>
    </motion.div>
  );
};

export default Header;