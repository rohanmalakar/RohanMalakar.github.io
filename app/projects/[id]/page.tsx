"use client";
import React, { useState } from 'react';
import { Moon, Sun, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectDetail = () => {
  const [isDark, setIsDark] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = {
    title: "Grammarly Clone",
    shortDescription: "This was my very first project, marking the beginning of my web development journey. A simple static clone of Grammarly's homepage built with HTML, CSS, and JavaScript.",
    description: {
      purpose: "The main purpose of building this project was to learn the fundamentals of web development and practice turning ideas into real web pages.",
      features: [
        "Simple static clone of Grammarly's homepage",
        "Focus on layout, typography, and visual design",
        "No backend or grammar-checking functionality"
      ],
      learningAndChallenges: [
        "Understanding the basics of HTML structure",
        "Styling with CSS including Flexbox and Grid",
        "Experimenting with responsive layouts"
      ],
      outcome: "Completing this project gave me the confidence that I could build web pages from scratch using only HTML, CSS, and JavaScript. It was a foundational step that motivated me to continue exploring web development."
    },
    coverImage: "https://res.cloudinary.com/ddhgyuf65/image/upload/v1759220186/Screenshot_2025-09-30_134507_m5upu8.png",
    images: [
      "https://res.cloudinary.com/ddhgyuf65/image/upload/v1759220186/Screenshot_2025-09-30_134549_hp97fk.png",
      "https://res.cloudinary.com/ddhgyuf65/image/upload/v1759220186/Screenshot_2025-09-30_134521_djaxil.png",
      "https://res.cloudinary.com/ddhgyuf65/image/upload/v1759220186/Screenshot_2025-09-30_134603_wdthni.png",
      "https://res.cloudinary.com/ddhgyuf65/image/upload/v1759220186/Screenshot_2025-09-30_134534_xb7agh.png"
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    links: {
      live: {
        url: "https://example.com/grammarly-clone",
        disabled: false,
        label: "View Live Project"
      },
      github: {
        url: "https://github.com/username/grammarly-clone",
        disabled: false,
        label: "View on GitHub"
      }
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-lg border-b transition-colors duration-300 ${
        isDark ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <button className={`flex items-center gap-2 transition-colors ${
            isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}>
            <ChevronLeft size={20} />
            <span>Back to Projects</span>
          </button>
          
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isDark ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <div className="mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {project.title}
          </h1>
          <p className={`text-lg md:text-xl transition-colors ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {project.shortDescription}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isDark 
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                    : 'bg-blue-100 text-blue-700 border border-blue-200'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <div className={`relative rounded-2xl overflow-hidden shadow-2xl transition-colors ${
            isDark ? 'bg-gray-800' : 'bg-gray-200'
          }`}>
            <div className="aspect-video flex items-center justify-center">
              <div className={`text-center p-8 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                <div className="w-24 h-24 mx-auto mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 opacity-20"></div>
                <p className="text-lg">Project Screenshot {currentImageIndex + 1}</p>
                <p className="text-sm mt-2">{project.images[currentImageIndex]}</p>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all ${
                isDark ? 'bg-gray-900/80 hover:bg-gray-900 text-white' : 'bg-white/80 hover:bg-white text-gray-900'
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all ${
                isDark ? 'bg-gray-900/80 hover:bg-gray-900 text-white' : 'bg-white/80 hover:bg-white text-gray-900'
              }`}
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? isDark ? 'bg-white w-8' : 'bg-gray-900 w-8'
                      : isDark ? 'bg-white/40' : 'bg-gray-900/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="mb-12 flex flex-wrap gap-4">
          <button
            disabled={project.links.github.disabled}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              project.links.github.disabled
                ? isDark ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'
            }`}
          >
            <Github size={20} />
            {project.links.github.label}
          </button>
          
          <button
            disabled={project.links.live.disabled}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              project.links.live.disabled
                ? isDark ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            <ExternalLink size={20} />
            {project.links.live.label}
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Purpose */}
          <div className={`p-6 rounded-2xl transition-colors ${
            isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <h2 className={`text-2xl font-bold mb-4 transition-colors ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Purpose
            </h2>
            <p className={`leading-relaxed transition-colors ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {project.description.purpose}
            </p>
          </div>

          {/* Features */}
          <div className={`p-6 rounded-2xl transition-colors ${
            isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <h2 className={`text-2xl font-bold mb-4 transition-colors ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.description.features.map((feature, index) => (
                <li key={index} className={`flex items-start gap-3 transition-colors ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    isDark ? 'bg-blue-400' : 'bg-blue-500'
                  }`}></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning & Challenges */}
          <div className={`p-6 rounded-2xl transition-colors ${
            isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <h2 className={`text-2xl font-bold mb-4 transition-colors ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Learning & Challenges
            </h2>
            <ul className="space-y-3">
              {project.description.learningAndChallenges.map((item, index) => (
                <li key={index} className={`flex items-start gap-3 transition-colors ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    isDark ? 'bg-purple-400' : 'bg-purple-500'
                  }`}></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div className={`p-6 rounded-2xl transition-colors ${
            isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <h2 className={`text-2xl font-bold mb-4 transition-colors ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Outcome
            </h2>
            <p className={`leading-relaxed transition-colors ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {project.description.outcome}
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`mt-20 border-t transition-colors ${
        isDark ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className={`text-center transition-colors ${
            isDark ? 'text-gray-500' : 'text-gray-600'
          }`}>
            Built with passion and dedication
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;