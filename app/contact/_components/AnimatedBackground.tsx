"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <motion.div
        className="w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 absolute top-0 left-0 animate-blob"
        initial={{ y: -100, x: -100 }}
        animate={{ y: [0, -100, 0], x: [-100, 0, -100] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 absolute bottom-0 right-0 animate-blob animation-delay-2000"
        initial={{ y: 100, x: 100 }}
        animate={{ y: [0, 100, 0], x: [100, 0, 100] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
    </div>
  );
};