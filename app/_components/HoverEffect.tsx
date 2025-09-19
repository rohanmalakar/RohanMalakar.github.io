"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  link: string;
}

interface HoverEffectProps {
  items: ProjectItem[];
  className?: string;
}

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

// Utility function to combine class names (replaces cn from shadcn)
const combineClasses = (...classes: (string | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// HoverEffect Component
export const HoverEffect = ({
  items,
  className,
}: HoverEffectProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
          <Card className="">
            <CardTitle className="">{item.title}</CardTitle>
            <CardDescription className="">{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: CardProps) => {
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
}: CardProps) => {
  return (
    <h4 className={combineClasses("text-gray-900 dark:text-white font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: CardProps) => {
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