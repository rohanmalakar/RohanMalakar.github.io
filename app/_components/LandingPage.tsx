"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import {  
  Download,
  Sparkles,
  Rocket
} from 'lucide-react';
 import { useRouter } from 'next/navigation';
import TextType from './UI/TextType';
import GradientText from './UI/GradientText';

const LandingPage: React.FC = () => {
  const {isDarkMode} = useTheme();
  const router = useRouter();

  const roles = [
    "Full Stack Developer",
    "Competitive Programmer", 
    "AI Enthusiast"
  ];




  // Theme-based classes
  const themeClasses = {
    background: 'bg-transparent',
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
    <div className={`min-h-screen ${themeClasses.background} pt-5 relative overflow-hidden transition-all duration-1000`}>
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="md:mb-10">
            <motion.div
              className="inline-flex items-center space-x-2 "
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
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="bg-transparent "
          >
            Hi, I&apos;m Rohan Malakar
          </GradientText>
          <div className='py-5 md:py-16'>
            <TextType 
                text={roles}
                typingSpeed={100}
                pauseDuration={1000}
                showCursor={true}
                cursorCharacter="_"
              />
          </div>


          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className={`text-xl lg:text-2xl ${themeClasses.text.secondary} max-w-4xl mx-auto leading-relaxed mb-8 lg:mb-12`}
          >
            Passionate about crafting exceptional digital experiences, solving complex problems,
            and exploring the frontiers of artificial intelligence. Let&apos;s build something amazing together!
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
              onClick={() => {
                router.push('/projects');
              }}
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
              <a 
               className="flex items-center"
                href="https://www.canva.com/design/DAGaxusHOxk/aEaEILBP9z1ntDfqPS5w7g/edit?utm_content=DAGaxusHOxk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank"
                rel="noopener noreferrer"
               >
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

    
    </div>
  );
};

export default LandingPage;