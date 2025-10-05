"use client";
import { motion } from 'framer-motion';

export const AnimatedHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8 sm:mb-12 md:mb-16"
    >
      <p className="text-emerald-400 text-xs sm:text-sm mb-2 sm:mb-4 tracking-wider uppercase">
        ✨ Our Works
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
        Creating next level digital
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>products
      </h1>
    </motion.div>
  );
};