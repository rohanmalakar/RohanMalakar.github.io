"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import { useEffect } from 'react';

export const ProjectModal = ({ project, isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0   bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 top-8 md:top-0 min-h-full overflow-y-auto">
            <div className=" h-full flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-4xl bg-white dark:bg-zinc-900  rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors duration-200"
                >
                  <X size={24} />
                </button>

                {/* Modal Content */}
                <div className="max-h-[85vh] overflow-y-auto">
                  {/* Header Section with Project Info */}
                  <div className="p-6 md:p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-900">
                    <div className="space-y-4">
                      {/* Title and Year */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            {project.year}
                          </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                          {project.title}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      {project.description && (
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {project.description}
                        </p>
                      )}

                      {/* Technologies */}
                      {project.technologies && project.technologies.length > 0 && (
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                            Tech Stack
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-white dark:bg-zinc-700 text-gray-700 dark:text-gray-300 rounded-full text-xs md:text-sm font-medium shadow-sm border border-gray-200 dark:border-zinc-600"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* My Contribution */}
                      {project.myContribution && project.myContribution.length > 0 && (
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                            My Contribution
                          </h3>
                          <ul className="space-y-2">
                            {project.myContribution.map((contribution, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm"
                              >
                                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                <span>{contribution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Links */}
                      <div className="flex flex-wrap gap-3 pt-2">
                        {project.links?.live && (
                          <a
                            href={project.links.live.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 text-sm ${
                              project.links.live.disabled
                                ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg hover:scale-105'
                            }`}
                            onClick={(e) => project.links.live.disabled && e.preventDefault()}
                          >
                            <ExternalLink size={16} />
                            {project.links.live.label || 'Live Demo'}
                          </a>
                        )}
                        
                        {project.links?.github && (
                          <a
                            href={project.links.github.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 text-sm ${
                              project.links.github.disabled
                                ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                                : 'bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 shadow-md hover:shadow-lg hover:scale-105'
                            }`}
                            onClick={(e) => project.links.github.disabled && e.preventDefault()}
                          >
                            <Github size={16} />
                            {project.links.github.label || 'View Code'}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
