import React from 'react';
import { Calendar, MapPin, CheckCircle, ExternalLink, Github, Globe } from 'lucide-react';

interface Achievement {
  text: string;
}

interface ProjectLink {
  type: 'live' | 'github' | 'demo';
  url: string;
  label: string;
}

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  status: string;
  achievements: Achievement[];
  technologies: string[];
  images?: string[];
  projectLinks?: ProjectLink[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  duration,
  location,
  status,
  achievements,
  technologies,
  projectLinks = []
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 lg:p-6">
      <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-xl dark:shadow-2xl dark:shadow-black/20 overflow-hidden border dark:border-gray-700">
        {/* Header Section */}
        <div className="relative p-4 sm:p-6 lg:p-8 pb-4 sm:pb-6">
          <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-bl-full opacity-50"></div>
          <div className="relative">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-gray-900 dark:text-white mb-2 break-words">{title}</h1>
                <a href="#" className="text-base sm:text-lg lg:text-xl text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold font-heading transition-colors duration-200 break-words">
                  {company}
                </a>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-xs sm:text-sm font-medium shrink-0 self-start">
                <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
                <span className="whitespace-nowrap">{status}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="font-medium text-sm sm:text-base">{duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="font-medium text-sm sm:text-base">{location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Links Section */}
        {projectLinks.length > 0 && (
          <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Project Links</h2>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {projectLinks.map((link, index) => {
                const IconComponent = link.type === 'github' ? Github : link.type === 'live' ? Globe : ExternalLink;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-800 dark:text-indigo-300 rounded-lg hover:from-indigo-200 hover:to-purple-200 dark:hover:from-indigo-800/50 dark:hover:to-purple-800/50 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 border dark:border-indigo-800/20"
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold text-sm sm:text-base">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* Project Images Section */}
        {/* {images.length > 0 && (
          <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Project Gallery</h2>
            <ImageCarousel 
              images={images}
              autoPlay={true}
              autoPlayInterval={5000}
              showThumbnails={true}
            />
          </div>
        )} */}

        {/* Achievements Section */}
        <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Key Achievements & Responsibilities</h2>
          <div className="space-y-3 sm:space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 group hover:bg-gray-50 dark:hover:bg-gray-700/50 p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300">
                <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 dark:text-green-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium text-sm sm:text-base">
                  {achievement.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Technologies & Tools</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs sm:text-sm font-semibold hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800/50 dark:hover:to-purple-800/50 transition-all duration-300 cursor-default shadow-sm hover:shadow-md transform hover:-translate-y-0.5 border dark:border-blue-800/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;