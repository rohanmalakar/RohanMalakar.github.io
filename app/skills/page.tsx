"use client"
import React, { useState } from 'react';
import {
  Code2,
  Database,
  Settings,
  Wrench,
  Globe,
  FileCode,
  Terminal,
  Layers,
  Palette,
  Server,
  HardDrive,
  Cloud,
  GitBranch,
  Cpu,
  MonitorSpeaker,
  BookOpen,
  Brain,
  Network,
  TrendingUp
} from 'lucide-react';

interface Skill {
  name: string;
  level: 'Noob' | 'Intermediate' | 'Advanced' | 'Expert';
  icon: React.ComponentType<{ className?: string }>;
}

interface SkillCategory {
  title: string;
  color: string;
  bgColor: string;
  darkBgColor: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    darkBgColor: "dark:bg-blue-900/20",
    skills: [
      { name: "React", level: "Expert", icon: Code2 },
      { name: "Next.js", level: "Advanced", icon: Globe },
      { name: "JavaScript", level: "Expert", icon: FileCode },
      { name: "TypeScript", level: "Advanced", icon: Terminal },
      { name: "Tailwind CSS", level: "Advanced", icon: Palette }
    ]
  },
  {
    title: "Backend & Database",
    color: "text-green-600",
    bgColor: "bg-green-50",
    darkBgColor: "dark:bg-green-900/20",
    skills: [
      { name: "Node.js", level: "Advanced", icon: Server },
      { name: "Express.js", level: "Advanced", icon: Layers },
      { name: "SQL", level: "Intermediate", icon: Database },
      { name: "MongoDB", level: "Intermediate", icon: HardDrive },
      { name: "Nest.js", level: "Intermediate", icon: Cloud }
    ]
  },
  {
    title: "Tools & Others",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    darkBgColor: "dark:bg-purple-900/20",
    skills: [
      { name: "Git", level: "Expert", icon: GitBranch },
      { name: "C Programming", level: "Intermediate", icon: Cpu },
      { name: "C++", level: "Advanced", icon: MonitorSpeaker },
      { name: "Python", level: "Intermediate", icon: Settings },
      { name: "N8N", level: "Intermediate", icon: Settings },
    ]
  }
];

// Core Subjects Data
interface CoreSubject {
  name: string;
  grade: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  relevance: string;
}

const coreSubjects: CoreSubject[] = [
  {
    name: "Data Structures & Algorithms",
    grade: "A+",
    description: "Advanced problem-solving techniques, complexity analysis, and optimization strategies",
    icon: Brain,
    relevance: "Foundation for efficient programming"
  },
  {
    name: "Database Management Systems",
    grade: "A",
    description: "Relational databases, SQL optimization, normalization, and database design principles",
    icon: Database,
    relevance: "Backend development expertise"
  },
  {
    name: "Computer Networks",
    grade: "A",
    description: "Network protocols, TCP/IP, security, and distributed systems architecture",
    icon: Network,
    relevance: "Full-stack communication"
  },
  {
    name: "Operating Systems",
    grade: "A-",
    description: "Process management, memory allocation, file systems, and system programming",
    icon: Settings,
    relevance: "System-level understanding"
  },
  {
    name: "Software Engineering",
    grade: "A+",
    description: "SDLC, design patterns, testing methodologies, and project management",
    icon: Code2,
    relevance: "Professional development practices"
  }
];

const getGradeColor = (grade: string) => {
  switch (grade) {
    case 'A+':
      return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300';
    case 'A':
      return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    case 'A-':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
    case 'B+':
      return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700/30 dark:text-gray-300';
  }
};

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Expert':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
    case 'Advanced':
      return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300';
    case 'Intermediate':
      return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300';
    case 'Noob':
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700/30 dark:text-gray-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700/30 dark:text-gray-300';
  }
};

const getCategoryDotColor = (title: string) => {
  switch (title) {
    case 'Frontend Development':
      return 'bg-blue-500';
    case 'Backend & Database':
      return 'bg-green-500';
    case 'Tools & Others':
      return 'bg-purple-500';
    case 'Core Subjects':
      return 'bg-orange-500';
    default:
      return 'bg-gray-500';
  }
};

const TechnicalExpertise: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl">
              <Wrench className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gray-900 dark:text-white">
              Technical Expertise
            </h1>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillsData.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group"
              style={{
                animationDelay: `${categoryIndex * 0.1}s`
              }}
            >
              <div className={`h-full bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-xl dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ${category.bgColor} ${category.darkBgColor}`}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className={`w-4 h-4 rounded-full ${getCategoryDotColor(category.title)}`}></div>
                  <h2 className={`text-xl sm:text-2xl font-bold ${category.color} dark:text-white`}>
                    {category.title}
                  </h2>
                </div>

                {/* Skills List */}
                <div className="space-y-4 sm:space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-4 rounded-2xl bg-white/50 dark:bg-gray-700/30 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-700/50 transition-all duration-300 cursor-pointer border border-gray-100/50 dark:border-gray-600/30 hover:border-gray-200 dark:hover:border-gray-600"
                        onMouseEnter={() => setHoveredSkill(`${category.title}-${skill.name}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        style={{
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      >
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className={`p-2 sm:p-3 rounded-xl transition-all duration-300 ${hoveredSkill === `${category.title}-${skill.name}`
                              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white scale-110'
                              : 'bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                            }`}>
                            <IconComponent className="w-4 sm:w-5 h-4 sm:h-5" />
                          </div>
                          <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            {skill.name}
                          </span>
                        </div>

                        <div className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${getLevelColor(skill.level)} ${hoveredSkill === `${category.title}-${skill.name}` ? 'scale-105' : ''
                          }`}>
                          {skill.level}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Subjects Section */}
        <div className="mt-12 sm:mt-16">
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-2xl">
                <BookOpen className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                Core Academic Subjects
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl">
              Strong foundation in computer science fundamentals with excellent academic performance
            </p>
          </div>

          {/* Core Subjects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {coreSubjects.map((subject, index) => {
              const IconComponent = subject.icon;
              return (
                <div
                  key={subject.name}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                  onMouseEnter={() => setHoveredSkill(`subject-${subject.name}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Subject Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${hoveredSkill === `subject-${subject.name}`
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white scale-110'
                        : 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                      }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className={`px-3 py-1.5 rounded-full text-sm font-bold transition-all duration-300 ${getGradeColor(subject.grade)} ${hoveredSkill === `subject-${subject.name}` ? 'scale-105' : ''
                      }`}>
                      {subject.grade}
                    </div>
                  </div>

                  {/* Subject Content */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                      {subject.name}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {subject.description}
                    </p>

                    <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-orange-500" />
                        <span className="text-xs font-medium text-orange-600 dark:text-orange-400">
                          {subject.relevance}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-12 sm:mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6">
            {[
              { label: 'Frontend Skills', count: skillsData[0].skills.length, color: 'text-blue-600 dark:text-blue-400' },
              { label: 'Backend Skills', count: skillsData[1].skills.length, color: 'text-green-600 dark:text-green-400' },
              { label: 'Tools & Others', count: skillsData[2].skills.length, color: 'text-purple-600 dark:text-purple-400' },
              { label: 'Core Subjects', count: coreSubjects.length, color: 'text-orange-600 dark:text-orange-400' },
              { label: 'Total Items', count: skillsData.reduce((acc, cat) => acc + cat.skills.length, 0) + coreSubjects.length, color: 'text-gray-600 dark:text-gray-300' }
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 sm:p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-700">
                <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${stat.color} mb-1 sm:mb-2`}>
                  {stat.count}
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalExpertise;