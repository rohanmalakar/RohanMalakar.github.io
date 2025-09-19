"use client";
import { HoverEffect } from "@/app/_components/HoverEffect";

// Demo Component showing usage
export  default function HoverEffectDemo() {
  // Sample data for the cards
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution built with React and Node.js. Features include user authentication, payment processing, and real-time inventory management.",
      link: "https://example.com/ecommerce",
      id:"1"
    },
    {
      title: "Task Management App",
      description: "Streamline your workflow with this intuitive task management application. Drag-and-drop functionality, team collaboration, and progress tracking.",
      link: "https://example.com/taskmanager",
       id:"2"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information with beautiful visualizations. Get forecasts, alerts, and climate data for any location worldwide.",
      link: "https://example.com/weather",
      id:"3"
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive analytics platform for social media management. Track engagement, analyze trends, and optimize your content strategy.",
      link: "https://example.com/analytics",
       id:"4"
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course creation tools, student progress tracking, and interactive learning materials for online education.",
      link: "https://example.com/lms",
      id:"5"
    },
    {
      title: "Portfolio Website",
      description: "Showcase your work with this elegant portfolio template. Responsive design, smooth animations, and easy customization options.",
      link: "https://example.com/portfolio",
      id:"6"
    }
  ];

  return (
    <div className="border-1 border-transparent bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 text-gray-900 dark:text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="pt-20 pb-10">
          <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing modern web development and innovative solutions
          </p>
        </div>

        {/* Projects Section */}
        <section className="">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
            Featured Projects
          </h2>
          <HoverEffect items={projects} />
        </section>
      </div>
    </div>
  );
}