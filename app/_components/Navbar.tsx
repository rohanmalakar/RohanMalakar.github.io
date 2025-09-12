"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];



  // Close menu when clicking on a nav item
  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    router.push(path);
  };

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/95 dark:bg-slate-900/95 shadow-lg border-b border-gray-200/50 dark:border-slate-700/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h1 className="text-2xl font-bold font-heading bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                >
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className={`px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-200 ${pathname === item.path
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                        : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-800/50'
                      }`}
                  >
                    {item.name}
                  </button>
                  {/* Animated underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dark mode toggle and Mobile menu button */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className={` z-50 p-2 rounded-full ${isDarkMode ? 'bg-yellow-500 text-gray-900' : 'bg-purple-600 text-white'
                } shadow-lg hover:shadow-xl transition-all duration-300`}
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

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-2xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-white/98 dark:bg-slate-900/98 backdrop-blur-lg border-t border-gray-200/50 dark:border-slate-700/50 "
          >
            <div className="px-4 py-8 space-y-6  text-white">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className={`block w-full  text-left px-4 py-3 rounded-2xl text-lg font-medium transition-all duration-200 ${pathname === item.path
                        ? 'text-blue-600 dark:text-blue-400 bg-gradient-to-r  from-blue-900/30 to-purple-900/30 border border-blue-200 dark:border-blue-700/50'
                        : ' dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 dark:hover:from-slate-800/50 dark:hover:to-slate-700/50 bg-black text-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700/50'
                      }`}
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;