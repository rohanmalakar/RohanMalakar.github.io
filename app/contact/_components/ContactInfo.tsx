"use client";
import React from 'react';
import { motion, VariantLabels, TargetAndTransition } from 'framer-motion';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  whileHover?: VariantLabels | TargetAndTransition;
  whileTap?: VariantLabels | TargetAndTransition;
}

const Card: React.FC<CardProps> = ({ children, className = '', whileHover, whileTap }) => (
  <motion.div
    className={`bg-white/80 dark:bg-[#210F37] backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-gray-200 dark:border-zinc-700 ${className}`}
    whileHover={whileHover}
    whileTap={whileTap}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {children}
  </motion.div>
);

export const ContactInfo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col space-y-8"
    >
      <h2 className="text-2xl font-bold font-heading">Get In Touch</h2>
      <p className="text-gray-600 dark:text-gray-300">
        I&apos;m always open to discussing new opportunities, innovative projects, and potential collaborations. Whether you have a project in mind or just want to connect, I&apos;d love to hear from you.
      </p>
      <div className="space-y-4">
        <Card whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="mailto:rohanmalakar5091@gmail.com" className="flex items-center space-x-4">
            <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full text-purple-600 dark:text-purple-400">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">rohanmalakar5091@gmail.com</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Drop me a line anytime</p>
            </div>
            <Send className="ml-auto text-gray-400 dark:text-gray-500" size={20} />
          </a>
        </Card>
        <Card whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="tel:+9098905595" className="flex items-center space-x-4">
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full text-green-600 dark:text-green-400">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">+91-9098905595</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Always Available to help</p>
            </div>
            <Send className="ml-auto text-gray-400 dark:text-gray-500" size={20} />
          </a>
        </Card>
        
        <Card whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="https://linkedin.com/in/rohanmalakar" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4">
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400">
              <Linkedin size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">LinkedIn</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Connect with me</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">Professional network</p>
            </div>
            <Send className="ml-auto text-gray-400 dark:text-gray-500" size={20} />
          </a>
        </Card>
      </div>
    </motion.div>
  );
};