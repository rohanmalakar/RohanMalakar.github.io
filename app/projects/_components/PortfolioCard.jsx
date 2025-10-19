"use client";
import { motion } from 'framer-motion';

export const PortfolioCard = ({ item, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group p-2 sm:p-3 md:p-4 cursor-pointer"
      onClick={() => onClick(item)}
    >
      <div
        className={`rounded-2xl  sm:rounded-3xl p-3 sm:p-4 md:p-5 overflow-hidden transition-all duration-500 ${
       item.bgColor 
        }`}
      >
        {/* Card Image Container */}
        <div className="aspect-[4/3]  p-4 sm:p-6 md:p-8 flex items-center justify-center">
          <div className="w-full hover:scale-105 transition-all duration-300 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] h-full rounded-xl border-8 sm:rounded-2xl bg-zinc-800 overflow-hidden ">
            <div className="w-full  h-full flex items-center justify-center text-zinc-600">
              {/* Replace this with actual image */}
              <img 
              src={item.image && item.image.src ? item.image.src : item.image} 
              alt={item.title} 
              className="object-cover w-full h-full" 
              onError={(e) => {
                e.target.src = 'https://unsplash.com/photos/man-watches-aurora-borealis-over-snowy-mountains-qtpQOpdW86o';
                e.target.onerror = null; // Prevent infinite loop if placeholder fails
              }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Card Info */}
      <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 text-white">
          {item.title}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-500">
          {item.subtitle}
        </p>
      </div>
    </motion.div>
  );
};