"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useTheme } from './ThemeProvider';


const SimpleFooter: React.FC = () => {

  const { isDarkMode } = useTheme();
  const themeClasses = {
    background: isDarkMode 
      ? 'bg-gray-900/80 border-white/10' 
      : 'bg-[#FAE7FA] border-black',
    text: {
      primary: isDarkMode ? 'text-white' : 'text-gray-900',
      secondary: isDarkMode ? 'text-gray-400' : 'text-gray-600'
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/yourusername',
      hoverColor: isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-700'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/yourusername',
      hoverColor: isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:your.email@gmail.com',
      hoverColor: isDarkMode ? 'hover:text-red-400' : 'hover:text-red-600'
    }
  ];

  return (
    <footer className={`${themeClasses.background} backdrop-blur-lg border-t transition-all duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          {/* Left Side - Copyright */}
          <div className={`${themeClasses.text.secondary} text-center md:text-left mb-4 md:mb-0`}>
            <p className="flex items-center justify-center md:justify-start">
              © 2024 Rohan Malakar 
            </p>
            <p className="flex items-center justify-center md:justify-start">
               Made with
              <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" /> 
              and passion
            </p>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${themeClasses.text.secondary} ${social.hoverColor} transition-all duration-300`}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Optional divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={`mt-6 h-px ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'} origin-center`}
        />

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className={`${themeClasses.text.secondary} text-center text-sm mt-4`}
        >
          <p>Fullstack Developer • Competitive Programmer • AI Enthusiast</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default SimpleFooter;