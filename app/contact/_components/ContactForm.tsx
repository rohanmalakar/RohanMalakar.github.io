"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

// TypeScript interfaces
interface InputFieldProps {
  label: string;
  type?: string;
  name: string;
  placeholder: string;
  isTextArea?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface FormState {
  fullName: string;
  emailAddress: string;
  subject: string;
  message: string;
}

const InputField: React.FC<InputFieldProps> = ({ 
  label, 
  type = 'text', 
  name, 
  placeholder, 
  isTextArea = false, 
  value, 
  onChange 
}) => (
  <motion.div
    className="relative group"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    {isTextArea ? (
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        rows={4}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-white/50 dark:bg-zinc-700/50 text-gray-900 dark:text-gray-100 rounded-xl border border-gray-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
        required
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-white/50 dark:bg-zinc-700/50 text-gray-900 dark:text-gray-100 rounded-xl border border-gray-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
        required
      />
    )}
  </motion.div>
);

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    fullName: '',
    emailAddress: '',
    subject: '',
    message: ''
  });
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, [EMAILJS_PUBLIC_KEY]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Validate form
    if (!formState.fullName || !formState.emailAddress || !formState.message) {
      setSubmitMessage('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare template parameters
      const templateParams = {
        to_name: 'Rohan Malakar', 
        name: formState.fullName,
        email: formState.emailAddress,
        time: new Date().toLocaleString(),
        title: formState.subject || 'New Contact Form Message',
        message: formState.message,
        reply_to: formState.emailAddress
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully:', result.text);
      setSubmitMessage('✅ Message sent successfully! I\'ll get back to you soon.');
      
      // Reset form
      setFormState({
        fullName: '',
        emailAddress: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitMessage('❌ Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="bg-white/80 dark:bg-[#432323] backdrop-blur-lg rounded-3xl p-6 md:p-10 shadow-lg border border-gray-200 dark:border-zinc-700 flex flex-col space-y-6"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center space-x-3 mb-4"
      >
        <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400">
          <Send size={20} />
        </div>
        <h2 className="text-2xl font-bold">Send Message</h2>
      </motion.div>
      <form onSubmit={sendEmail} className="flex flex-col space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Full Name" name="fullName" placeholder="Your Name" value={formState.fullName} onChange={handleChange} />
          <InputField label="Email Address" name="emailAddress" type="email" placeholder="your.email@example.com" value={formState.emailAddress} onChange={handleChange} />
        </div>
        <InputField label="Subject" name="subject" placeholder="What's this about?" value={formState.subject} onChange={handleChange} />
        <InputField label="Message" name="message" placeholder="Tell me about your project or just say hello!" isTextArea value={formState.message} onChange={handleChange} />
        <motion.button
          type="submit"
          className="w-full mt-4 py-3 px-6 rounded-xl text-white font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: isSubmitting ? 1 : 1.03, y: isSubmitting ? 0 : -2 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
          disabled={isSubmitting}
        >
          <div className="flex items-center justify-center space-x-2">
            <Send size={20} />
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          </div>
        </motion.button>
        <AnimatePresence>
          {submitMessage && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mt-4 text-center ${submitMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}
            >
              {submitMessage}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};