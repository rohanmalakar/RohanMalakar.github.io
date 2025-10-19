"use client";
import { useState } from 'react';
import { PortfolioCard } from './PortfolioCard';
import { ProjectModal } from './ProjectModal';

export const PortfolioGrid = ({ portfolioItems }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Wait for animation to complete
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {portfolioItems.map((item, index) => (
          <PortfolioCard 
            key={item.id} 
            item={item} 
            index={index}
            onClick={handleCardClick}
          />
        ))}
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};