"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import {  
  Github, 
  Linkedin, 
  Mail, 
  Download,
  ChevronDown,
  Sparkles,
  Rocket
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const {isDarkMode} = useTheme();

  const roles = [
    "Full Stack Developer",
    "Competitive Programmer", 
    "AI Enthusiast"
  ];

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, [roles.length]);


  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  // Theme-based classes
  const themeClasses = {
    background: isDarkMode 
      ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
      : 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
    text: {
      primary: isDarkMode ? 'text-white' : 'text-gray-900',
      secondary: isDarkMode ? 'text-gray-200' : 'text-gray-600',
      muted: isDarkMode ? 'text-gray-300' : 'text-gray-500'
    },
    card: {
      background: isDarkMode 
        ? 'bg-slate-800/50 backdrop-blur-lg border-slate-700/50' 
        : 'bg-white/80 backdrop-blur-lg border-gray-200/50',
      hover: isDarkMode 
        ? 'hover:bg-slate-800/70' 
        : 'hover:bg-white/90'
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
         duration: 0.8, 
         ease: "easeOut" as const
        }
    }
  };


  return (
    <div className={`min-h-screen ${themeClasses.background} pt-10 relative overflow-hidden transition-all duration-1000`}>
      {/* Background Elements */}
      {isDarkMode && (
        // Stars for dark mode only
        [...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-slate-400 rounded-full opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))
      )}
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              className="inline-flex items-center space-x-2 mb-6"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-purple-600'}`} />
              <span className={`text-lg font-medium ${themeClasses.text.secondary}`}>
                Welcome to my digital world
              </span>
              <Sparkles className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-purple-600'}`} />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className={`text-5xl sm:text-6xl lg:text-8xl font-bold ${themeClasses.text.primary} mb-6`}
          >
            Hi, I'm{' '}
            <span className={`bg-gradient-to-r ${
              isDarkMode 
                ? 'from-blue-400 via-purple-500 to-indigo-600' 
                : 'from-blue-600 via-purple-600 to-pink-600'
            } bg-clip-text text-transparent`}>
              Rohan Malakar
            </span>
          </motion.h1>

          {/* Dynamic Role */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className={`text-2xl sm:text-3xl lg:text-4xl font-semibold ${themeClasses.text.secondary} h-16 flex items-center justify-center`}>
              <span className="mr-3">A</span>
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isTyping ? 1 : 0, y: isTyping ? 0 : -20 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-r ${
                  currentRole === 0 ? 'from-blue-500 to-cyan-500' :
                  currentRole === 1 ? 'from-green-500 to-emerald-500' :
                  'from-purple-500 to-pink-500'
                } bg-clip-text text-transparent font-bold`}
              >
                {roles[currentRole]}
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className={themeClasses.text.primary}
              >
                |
              </motion.span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className={`text-xl lg:text-2xl ${themeClasses.text.secondary} max-w-4xl mx-auto leading-relaxed mb-12`}
          >
            Passionate about crafting exceptional digital experiences, solving complex problems,
            and exploring the frontiers of artificial intelligence. Let's build something amazing together!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              className={`group relative px-8 py-4 bg-gradient-to-r ${
                isDarkMode 
                  ? 'from-blue-600 to-purple-600' 
                  : 'from-purple-600 to-blue-600'
              } text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                <Rocket className="mr-2 w-5 h-5" />
                View My Work
              </span>
            </motion.button>

            <motion.button
              className={`group px-8 py-4 border-2 ${
                isDarkMode 
                  ? 'border-slate-700/50 text-gray-200 hover:border-slate-600/50 hover:bg-slate-800/50' 
                  : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
              } font-semibold rounded-full transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

    
    </div>
  );
};

export default LandingPage;