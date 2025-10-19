import React from 'react';
import { ContactForm } from './_components/ContactForm';
import { ContactInfo } from './_components/ContactInfo';
import { AnimatedBackground } from './_components/AnimatedBackground';
import Header from '@/app/contact/_components/Header';

// Server component - no client-side interactions
const ContactPage: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100 font-sans transition-colors duration-500 overflow-hidden relative">
      <AnimatedBackground />

      <div className="container mx-auto px-4 py-16 z-10 relative">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
