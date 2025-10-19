"use client";
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';


export const CTASection = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/contact');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="text-center relative z-20 mt-16 sm:mt-20 md:mt-24 lg:mt-32 mb-12 sm:mb-16 md:mb-20"
    >
      <p className="text-emerald-400 text-xs sm:text-sm mb-2 sm:mb-4 tracking-wider">
        ✨ Ready to work ✨
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 px-4">
        Let's create your
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>next big idea.
      </h2>
      <button 
      className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors duration-300 text-sm sm:text-base"
      onClick={handleContactClick}
      >
        Contact Us
      </button>
    </motion.div>
  );
};