'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send, Clock, Globe } from 'lucide-react';
import emailjs from '@emailjs/browser';

// TypeScript interfaces
interface CardProps {
  children: React.ReactNode;
  className?: string;
  whileHover?: any;
  whileTap?: any;
}

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

const Card: React.FC<CardProps> = ({ children, className = '', whileHover, whileTap }) => (
  <motion.div
    className={`bg-white/80 dark:bg-zinc-800/80 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-gray-200 dark:border-zinc-700 ${className}`}
    whileHover={whileHover}
    whileTap={whileTap}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {children}
  </motion.div>
);

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

const ContactPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [formState, setFormState] = useState<FormState>({
    fullName: '',
    emailAddress: '',
    subject: '',
    message: ''
  });
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // EmailJS configuration - Replace with your actual IDs
  const EMAILJS_SERVICE_ID = 'service_xxxxxxx'; // Replace with your service ID
  const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx'; // Replace with your template ID
  const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your public key

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

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
        to_name: 'Tanishq', // Your name
        from_name: formState.fullName,
        from_email: formState.emailAddress,
        subject: formState.subject || 'New Contact Form Message',
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
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-zinc-900 text-gray-100' : 'bg-gray-100 text-gray-900'} font-sans transition-colors duration-500 overflow-hidden relative`}>
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

      <div className="container mx-auto px-4 py-16 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Let's Connect
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <h2 className="text-2xl font-bold">Get In Touch</h2>
            <p className="text-gray-600 dark:text-gray-300">
              I'm always open to discussing new opportunities, innovative projects, and potential collaborations. Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>
            <div className="space-y-4">
              <Card whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="mailto:tanishqshinde777@gmail.com" className="flex items-center space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full text-purple-600 dark:text-purple-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">tanishqshinde777@gmail.com</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">Drop me a line anytime</p>
                  </div>
                  <Send className="ml-auto text-gray-400 dark:text-gray-500" size={20} />
                </a>
              </Card>
              <Card whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="tel:+918830180982" className="flex items-center space-x-4">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full text-green-600 dark:text-green-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">+91-88301 80982</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">Available during business hours</p>
                  </div>
                  <Send className="ml-auto text-gray-400 dark:text-gray-500" size={20} />
                </a>
              </Card>
              <Card whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full text-purple-600 dark:text-purple-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Pune, Maharashtra</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">Mohan Nagar, Dhankawadi</p>
                  </div>
                  <Send className="ml-auto text-gray-400 dark:text-gray-500" size={20} />
                </div>
              </Card>
              <Card whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://linkedin.com/in/tanishq-shinde-628468249" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4">
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

          <Card className="flex flex-col space-y-6 md:p-10" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
