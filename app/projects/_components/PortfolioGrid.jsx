"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { PortfolioCard } from './PortfolioCard';
import { FilterTabs } from './FilterTabs';

export const PortfolioGrid = ({ portfolioItems, filters }) => {
  const [filter, setFilter] = useState('All');

  return (
    <>
      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <FilterTabs 
          filters={filters}
          activeFilter={filter}
          onFilterChange={setFilter}
        />
      </motion.div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {portfolioItems.map((item, index) => (
          <PortfolioCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </>
  );
};