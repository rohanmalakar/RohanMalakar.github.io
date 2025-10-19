'use client';

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { toggleTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initialize state from DOM
    setIsDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  const handleToggle = () => {
    toggleTheme();
    setIsDarkMode(!isDarkMode);
  };

  return (
    <motion.button
      onClick={handleToggle}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-purple-600 text-white dark:bg-yellow-500 dark:text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        animate={{ rotate: isDarkMode ? 0 : 180 }}
        transition={{ duration: 0.5 }}
      >
        {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
