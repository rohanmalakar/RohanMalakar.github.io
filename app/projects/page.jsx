"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/app/_components/ThemeProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Utility function to combine class names (replaces cn from shadcn)
const combineClasses = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// HoverEffect Component
export const HoverEffect = ({
  items,
  className,
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  let router=useRouter()
  

  return (
    <div
      className={combineClasses(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={`/projects/${item.id}`}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full  bg-slate-400 dark:bg-white  block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}) => {
  return (
    <div
      className={combineClasses(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-slate-600 relative z-20 shadow-lg dark:shadow-gray-900/50",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}) => {
  return (
    <h4 className={combineClasses("text-gray-900 dark:text-white font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}) => {
  return (
    <p
      className={combineClasses(
        "mt-8 text-gray-600 dark:text-gray-300 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

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