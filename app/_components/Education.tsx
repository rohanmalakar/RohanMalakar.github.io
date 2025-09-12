"use client";
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Star, ArrowDown, Route } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface EducationItem {
  id: string;
  level: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  percentage?: string;
  grade?: string;
  icon: React.ReactNode;
  color: string;
  bgGradient: string;
  description: string;
}

const Education: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [journeyStarted, setJourneyStarted] = useState(false);
  const { isDarkMode } = useTheme();
  const controls = useAnimation();

  const educationData: EducationItem[] = [
    {
      id: '1',
      level: '10th Grade',
      degree: 'High Secondary Education',
      institution: 'Govt H. Secondary School',
      location: 'Piplia Buzurg (M.P.)',
      year: '2018 - 2019',
      percentage: '94.8%',
      icon: <Award className="w-6 h-6" />,
      color: 'text-green-600',
      bgGradient: 'from-green-500 to-emerald-500',
      description: 'The foundation of my academic journey began here'
    },
    {
      id: '2',
      level: '12th Grade',
      degree: 'Higher Secondary Education',
      institution: 'Govt H. Secondary School',
      location: 'Piplia Buzurg (M.P.)',
      year: '2020 - 2021',
      percentage: '95%',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'text-blue-600',
      bgGradient: 'from-blue-500 to-cyan-500',
      description: 'Specialized learning and career path selection'
    },
    {
      id: '3',
      level: 'Graduation',
      degree: 'Bachelor of Technology (B.Tech)',
      institution: 'Madhav Institute of Technology and Science',
      location: 'Gwalior, Madhya Pradesh',
      year: '2022 - 2026',
      percentage: '7.97 CGPA',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'text-purple-600',
      bgGradient: 'from-purple-500 to-pink-500',
      description: 'Advanced studies and professional preparation'
    }
  ];

  useEffect(() => {
    if (journeyStarted) {
      const timer = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < educationData.length - 1) {
            return prev + 1;
          } else {
            clearInterval(timer);
            return prev;
          }
        });
      }, 2000);

      return () => clearInterval(timer);
    }
  }, [journeyStarted, educationData.length]);

  const startJourney = () => {
    setJourneyStarted(true);
    controls.start('visible');
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 3,
        ease: "easeInOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.3,
      y: 50,
      rotateY: 90
    },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      rotateY: 0,
      transition: {
        delay: index * 2 + 0.5,
        duration: 0.8,
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    })
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  };

  // Theme-based classes
  const themeClasses = {
    background: isDarkMode 
      ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
      : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50',
    text: {
      primary: isDarkMode ? 'text-white' : 'text-gray-900',
      secondary: isDarkMode ? 'text-gray-200' : 'text-gray-600',
      muted: isDarkMode ? 'text-gray-300' : 'text-gray-500'
    },
    card: {
      background: isDarkMode 
        ? 'bg-slate-800/50 backdrop-blur-lg border-slate-700/50' 
        : 'bg-white/80 backdrop-blur-lg border-gray-200/50',
      shadow: isDarkMode ? 'shadow-2xl shadow-slate-900/50' : 'shadow-2xl shadow-gray-900/10'
    },
    stars: isDarkMode ? 'bg-slate-400' : 'bg-yellow-400'
  };

  return (
    <motion.section 
      className={`py-16 px-4 sm:px-6 lg:px-8 ${themeClasses.background} min-h-screen relative overflow-hidden transition-all duration-1000`}
      animate={{
        background: isDarkMode 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
          : 'linear-gradient(135deg, #dbeafe 0%, #fae8ff 50%, #fce7f3 100%)'
      }}
    >
      {/* Animated Background Elements */}
      {[...Array(isDarkMode ? 20 : 15)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 ${themeClasses.stars} rounded-full ${
            isDarkMode ? 'opacity-80' : 'opacity-30'
          }`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          variants={starVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: Math.random() * 5 }}
        />
      ))}

      {/* Floating Geometric Shapes for Light Mode */}
      {!isDarkMode && [...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute opacity-10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
        >
          <div className={`w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 ${
            i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rounded-lg rotate-45' : 'rounded-none'
          }`} />
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Journey Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="inline-block mb-6"
          >
            <Route className={`w-16 h-16 ${isDarkMode ? 'text-blue-400' : 'text-purple-600'} drop-shadow-lg`} />
          </motion.div>
          
          <h2 className={`text-5xl md:text-7xl font-bold ${themeClasses.text.primary} mb-6`}>
            My Educational
            <span className={`block bg-gradient-to-r ${
              isDarkMode 
                ? 'from-blue-400 via-purple-500 to-indigo-600' 
                : 'from-purple-600 via-blue-500 to-pink-600'
            } bg-clip-text text-transparent`}>
              Journey
            </span>
          </h2>
          
          <p className={`text-xl ${themeClasses.text.secondary} max-w-2xl mx-auto leading-relaxed mb-8`}>
            Follow the path of knowledge and growth through each milestone
          </p>

          {!journeyStarted && (
            <motion.button
              onClick={startJourney}
              className={`group relative px-8 py-4 bg-gradient-to-r ${
                isDarkMode 
                  ? 'from-blue-600 to-purple-600 text-white' 
                  : 'from-blue-600 to-purple-600 text-white'
              } font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                Start the Journey
                <ArrowDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
              </span>
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${
                  isDarkMode 
                    ? 'from-purple-600 to-blue-600' 
                    : 'from-purple-600 to-blue-600'
                } rounded-full`}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          )}
        </motion.div>

        {/* Journey Path */}
        {journeyStarted && (
          <div className="relative">
            {/* Animated SVG Path */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-full h-full pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 400 800">
                <motion.path
                  d="M200 50 Q150 200 200 350 Q250 500 200 650 Q150 750 200 800"
                  stroke={isDarkMode ? "url(#gradientDark)" : "url(#gradientLight)"}
                  strokeWidth="4"
                  fill="none"
                  variants={pathVariants}
                  initial="hidden"
                  animate={controls}
                  className="drop-shadow-lg"
                />
                <defs>
                  <linearGradient id="gradientDark" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                  <linearGradient id="gradientLight" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#059669" />
                    <stop offset="50%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Education Cards */}
            <div className="relative space-y-10">
              {educationData.map((item, index) => (
                <motion.div
                  key={item.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={journeyStarted ? "visible" : "hidden"}
                  className={`relative ${
                    index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:ml-auto'
                  }`}
                >
                  {/* Journey Marker */}
                  <motion.div
                    className={`absolute ${
                      index % 2 === 0 ? 'lg:right-0 lg:translate-x-1/2' : 'lg:left-0 lg:-translate-x-1/2'
                    } top-1/2 right-0 lg:left-auto transform -translate-y-1/2 ${
                      index % 2 === 0 ? 'lg:-translate-x-1/2' : ''
                    } w-12 h-12 rounded-full bg-gradient-to-r ${item.bgGradient} flex items-center justify-center shadow-2xl z-20 text-white`}
                    initial={{ scale: 0 }}
                    animate={currentStep >= index ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 2 + 1, duration: 0.5, type: "spring" }}
                  >
                    <motion.div
                      animate={currentStep >= index ? { rotate: 360 } : {}}
                      transition={{ duration: 1, delay: index * 2 + 1.5 }}
                    >
                      {item.icon}
                    </motion.div>
                  </motion.div>

                  {/* Education Card */}
                  <motion.div
                    className={`relative ${themeClasses.card.background} ${themeClasses.card.shadow} rounded-3xl p-8 border transition-all duration-500 ${
                      index % 2 === 0 ? 'lg:mr-16' : 'lg:ml-16'
                    }`}
                    whileHover={{ 
                      y: -10, 
                      scale: 1.02,
                      boxShadow: isDarkMode 
                        ? "0 25px 50px -12px rgba(139, 92, 246, 0.3)" 
                        : "0 25px 50px -12px rgba(0, 0, 0, 0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Glowing Border Effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.bgGradient} ${
                        isDarkMode ? 'opacity-20' : 'opacity-10'
                      } -z-10`}
                      animate={{
                        opacity: isDarkMode ? [0.2, 0.4, 0.2] : [0.1, 0.2, 0.1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />

                    {/* Floating Icons */}
                    <motion.div
                      className="absolute -top-4 -right-4"
                      animate={{
                        y: [-5, 5, -5],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.7
                      }}
                    >
                      <Star className={`w-8 h-8 ${
                        isDarkMode ? 'text-blue-400' : 'text-orange-500'
                      } drop-shadow-lg`} />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={currentStep >= index ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: index * 2 + 2, duration: 0.8 }}
                      >
                        <h3 className={`text-3xl font-bold ${themeClasses.text.primary} mb-2`}>{item.level}</h3>
                        <h4 className={`text-xl font-semibold ${themeClasses.text.secondary} mb-4`}>{item.degree}</h4>
                        <p className={`${themeClasses.text.muted} mb-6 italic`}>{item.description}</p>
                        
                        <div className="space-y-4">
                          <motion.div 
                            className={`flex items-center ${themeClasses.text.secondary}`}
                            initial={{ x: -20, opacity: 0 }}
                            animate={currentStep >= index ? { x: 0, opacity: 1 } : {}}
                            transition={{ delay: index * 2 + 2.2, duration: 0.5 }}
                          >
                            <BookOpen className={`w-5 h-5 mr-3 ${themeClasses.text.muted}`} />
                            <span className="font-medium">{item.institution}</span>
                          </motion.div>
                          
                          <motion.div 
                            className={`flex items-center ${themeClasses.text.secondary}`}
                            initial={{ x: -20, opacity: 0 }}
                            animate={currentStep >= index ? { x: 0, opacity: 1 } : {}}
                            transition={{ delay: index * 2 + 2.4, duration: 0.5 }}
                          >
                            <MapPin className={`w-5 h-5 mr-3 ${themeClasses.text.muted}`} />
                            <span>{item.location}</span>
                          </motion.div>
                          
                          <motion.div 
                            className={`flex items-center ${themeClasses.text.secondary}`}
                            initial={{ x: -20, opacity: 0 }}
                            animate={currentStep >= index ? { x: 0, opacity: 1 } : {}}
                            transition={{ delay: index * 2 + 2.6, duration: 0.5 }}
                          >
                            <Calendar className={`w-5 h-5 mr-3 ${themeClasses.text.muted}`} />
                            <span>{item.year}</span>
                          </motion.div>
                        </div>

                        {/* Achievement Badge */}
                        {item.percentage && (
                          <motion.div
                            className="mt-6"
                            initial={{ scale: 0 }}
                            animate={currentStep >= index ? { scale: 1 } : { scale: 0 }}
                            transition={{ delay: index * 2 + 3, duration: 0.5, type: "spring" }}
                          >
                            <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${item.bgGradient} text-white font-bold text-lg shadow-xl`}>
                              <Award className="w-5 h-5 mr-2" />
                              {item.percentage}
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Journey Completion */}
            <motion.div
              className="text-center mt-20"
              initial={{ opacity: 0, y: 50 }}
              animate={currentStep >= educationData.length - 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: (educationData.length - 1) * 2 + 4, duration: 1 }}
            >
              <motion.div
                className={`inline-flex items-center space-x-4 ${themeClasses.text.primary} text-2xl font-bold`}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: (educationData.length - 1) * 2 + 5
                }}
              >
                <GraduationCap className="w-8 h-8" />
                <span>Journey Complete!</span>
                <GraduationCap className="w-8 h-8" />
              </motion.div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Education;