'use client';

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

// Utility function to toggle theme
const toggleTheme = () => {
  const isDark = document.documentElement.classList.contains('dark');
  
  if (isDark) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
};

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
      className="z-50 p-2 rounded-full bg-purple-600 text-white dark:bg-yellow-500 dark:text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
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
