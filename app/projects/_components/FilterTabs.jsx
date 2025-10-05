"use client";
import { useState } from 'react';

export const FilterTabs = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
      {filters.map((filterItem) => (
        <button
          key={filterItem}
          onClick={() => onFilterChange(filterItem)}
          className={`px-3 sm:px-4 md:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
            activeFilter === filterItem
              ? 'bg-white text-black'
              : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
          }`}
        >
          {filterItem}
        </button>
      ))}
    </div>
  );
};