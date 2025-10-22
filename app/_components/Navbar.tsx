"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
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
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const}
    }
  };

  const mobileMenuVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" as const }
    },
    exit: {
      x: '-100%',
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" as const }
    }
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (index: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: index * 0.1, duration: 0.3 }
    })
  };

  const navItemVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: (index: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: index * 0.05, duration: 0.3 }
    }),
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-lg bg-white dark:bg-slate-900 shadow-lg border-b border-gray-200/50 dark:border-slate-700/50"
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

          {/* Desktop Navigation - Animated Tabs */}
          <div className="hidden md:block">
            <div className="ml-10 flex space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  custom={index}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  onClick={() => handleNavClick(item.path)}
                  className={`${
                    pathname === item.path ? "" : "hover:text-gray-700/60 dark:hover:text-gray-200/60"
                  } relative rounded-full px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200 outline-sky-400 transition focus-visible:outline-2`}
                  style={{
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  {pathname === item.path && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 z-10 bg-gradient-to-r from-blue-600 to-purple-600 mix-blend-difference"
                      style={{ borderRadius: 9999 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-20">{item.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Dark mode toggle and Mobile menu button */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            {/* <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <ThemeToggle />
            </motion.div> */}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-2xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed top-16 left-0 right-0 bottom-0 z-[99] bg-white dark:bg-slate-900 backdrop-blur-lg border-t border-gray-200/50 dark:border-slate-700/50"
          >
            <div className="px-4 py-8 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  custom={index}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.button
                    onClick={() => handleNavClick(item.path)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`block w-full text-left px-4 py-3 rounded-2xl text-lg font-medium transition-all duration-200 ${pathname === item.path
                        ? 'text-white dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 border border-blue-500 dark:border-blue-500'
                        : 'text-gray-900 dark:text-gray-100 hover:text-white dark:hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-600'
                      }`}
                  >
                    {item.name}
                  </motion.button>
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