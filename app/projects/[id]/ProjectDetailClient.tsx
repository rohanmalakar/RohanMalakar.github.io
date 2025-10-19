"use client";
import React, { useState } from 'react';
import { Moon, Sun, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectDetailClientProps {
  id: string;
}

const ProjectDetailClient: React.FC<ProjectDetailClientProps> = () => {
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
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className="sticky top-0 backdrop-blur-md bg-opacity-90 border-b border-gray-200/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full ${isDark ? 'bg-blue-600' : 'bg-blue-500'} flex items-center justify-center text-white font-bold text-sm`}>
                RM
              </div>
              <span className="font-semibold text-lg">Rohan Malakar</span>
            </div>
            
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg transition-colors duration-200 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Project Hero */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Project Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  {project.title}
                </h1>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.shortDescription}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isDark 
                          ? 'bg-blue-900/30 text-blue-300 border border-blue-700/30' 
                          : 'bg-blue-100 text-blue-800 border border-blue-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex gap-4">
                <a
                  href={project.links.live.url}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                    project.links.live.disabled
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : isDark
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  }`}
                >
                  <ExternalLink size={18} />
                  {project.links.live.label}
                </a>
                
                <a
                  href={project.links.github.url}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 transition-all duration-200 transform hover:scale-105 ${
                    project.links.github.disabled
                      ? 'border-gray-600 text-gray-400 cursor-not-allowed'
                      : isDark
                      ? 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white'
                      : 'border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <Github size={18} />
                  {project.links.github.label}
                </a>
              </div>
            </div>

            {/* Cover Image */}
            <div className="lg:sticky lg:top-24">
              <div className={`rounded-2xl overflow-hidden shadow-2xl ${isDark ? 'shadow-black/20' : 'shadow-gray-500/20'}`}>
                <Image
                  src={project.coverImage}
                  alt={`${project.title} cover`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
            <div className="relative">
              <div className={`rounded-2xl overflow-hidden shadow-2xl ${isDark ? 'shadow-black/20' : 'shadow-gray-500/20'}`}>
                <Image
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-200 ${
                      isDark ? 'bg-gray-800/80 hover:bg-gray-700/80 text-white' : 'bg-white/80 hover:bg-white text-gray-900'
                    } shadow-lg backdrop-blur-sm`}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-200 ${
                      isDark ? 'bg-gray-800/80 hover:bg-gray-700/80 text-white' : 'bg-white/80 hover:bg-white text-gray-900'
                    } shadow-lg backdrop-blur-sm`}
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentImageIndex
                            ? isDark ? 'bg-blue-400' : 'bg-blue-500'
                            : isDark ? 'bg-gray-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        )}

        {/* Project Details */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Purpose */}
          <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800/50' : 'bg-white'} shadow-lg`}>
            <h3 className="text-xl font-bold mb-4 text-blue-500">Purpose</h3>
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.description.purpose}
            </p>
          </div>

          {/* Features */}
          <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800/50' : 'bg-white'} shadow-lg`}>
            <h3 className="text-xl font-bold mb-4 text-green-500">Key Features</h3>
            <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.description.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning & Challenges */}
          <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800/50' : 'bg-white'} shadow-lg`}>
            <h3 className="text-xl font-bold mb-4 text-orange-500">Learning & Challenges</h3>
            <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.description.learningAndChallenges.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800/50' : 'bg-white'} shadow-lg`}>
            <h3 className="text-xl font-bold mb-4 text-purple-500">Outcome</h3>
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.description.outcome}
            </p>
          </div>
        </section>

        {/* Back to Projects */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
              isDark
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailClient;