"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {  
  Download,
  Sparkles,
  Rocket
} from 'lucide-react';
 import { useRouter } from 'next/navigation';
import TextType from './UI/TextType';
import GradientText from './UI/GradientText';

const LandingPage: React.FC = () => {
  const router = useRouter();

  const roles = [
    "Full Stack Developer",
    "Competitive Programmer", 
    "AI Enthusiast"
  ];

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
    <div className="min-h-screen bg-transparent pt-5 relative overflow-hidden transition-all duration-1000">
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
              <Sparkles className="w-6 h-6 text-purple-600 dark:text-blue-400" />
              <span className="text-lg font-medium text-gray-600 dark:text-gray-200">
                Welcome to my digital world
              </span>
              <Sparkles className="w-6 h-6 text-purple-600 dark:text-blue-400" />
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
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8 lg:mb-12"
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
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-blue-600 dark:to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
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
              className="group px-8 py-4 border-2 border-gray-300 dark:border-slate-700/50 text-gray-700 dark:text-gray-200 hover:border-gray-400 dark:hover:border-slate-600/50 hover:bg-gray-50 dark:hover:bg-slate-800/50 font-semibold rounded-full transition-all duration-300"
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