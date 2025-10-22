"use client";
import React, { useState } from 'react';
import { Code2, Heart, Brain, Database, Zap, CheckCircle2, Star, Book, BrainCircuit } from 'lucide-react';

const AboutMe: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
    backend: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Authentication', 'WebSockets'],
    tools: ['Git', 'Docker', 'VS Code', 'Postman'],
    ai: ['AI Integration', 'ChatGPT API', 'AI Tools', 'Prompt Engineering']
  };

  const interests = [
    { icon: <Brain className="w-6 h-6" />, title: 'AI', desc: 'Exploring artificial intelligence' },
    { icon: <Code2 className="w-6 h-6" />, title: 'Coding', desc: 'Building innovative solutions' },
    { icon: <Book className="w-6 h-6" />, title: 'Reading books', desc: 'I Like to Read Books' },
    { icon: <BrainCircuit className="w-6 h-6" />, title: 'Problem Solving', desc: 'I like to solve problems on leetcode' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {[
            { id: 'overview', label: 'Overview', icon: <Star className="w-4 h-4" /> },
            { id: 'skills', label: 'Skills', icon: <Zap className="w-4 h-4" /> },
            { id: 'interests', label: 'Interests', icon: <Heart className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {tab.icon}
              <span className="ml-2">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-300">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
                <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                  <p>
                    I&apos;m a <span className="font-semibold text-indigo-400">Full Stack Web Developer</span> with a deep passion for creating impactful digital experiences. My journey in web development has equipped me with expertise in both frontend and backend technologies, allowing me to build complete, scalable web applications from the ground up.
                  </p>
                  <p>
                    As an <span className="font-semibold text-purple-400">AI Enthusiast</span>, I&apos;m fascinated by the potential of artificial intelligence to transform how we interact with technology. I constantly explore new AI tools and integrate intelligent features into my projects to create smarter, more intuitive applications.
                  </p>
                  <p>
                    Through my internship experiences as a <span className="font-semibold text-blue-400">MERN Stack Developer</span> and <span className="font-semibold text-pink-400">Full Stack Developer</span>, I&apos;ve gained hands-on experience in developing real-world applications, collaborating with teams, and solving complex technical challenges.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="bg-green-900/30 rounded-full p-3 mr-4 border border-green-700">
                      <CheckCircle2 className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Problem Solver</h3>
                      <p className="text-slate-400 text-sm">Love tackling complex challenges with elegant solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-900/30 rounded-full p-3 mr-4 border border-blue-700">
                      <CheckCircle2 className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Quick Learner</h3>
                      <p className="text-slate-400 text-sm">Always eager to learn new technologies and frameworks</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-900/30 rounded-full p-3 mr-4 border border-purple-700">
                      <CheckCircle2 className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Team Player</h3>
                      <p className="text-slate-400 text-sm">Experienced in collaborative development environments</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pink-900/30 rounded-full p-3 mr-4 border border-pink-700">
                      <CheckCircle2 className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Detail-Oriented</h3>
                      <p className="text-slate-400 text-sm">Committed to writing clean, maintainable code</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-900/30 rounded-full p-3 mr-4 border border-blue-700">
                    <Code2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.frontend.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full font-semibold border border-blue-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-green-900/30 rounded-full p-3 mr-4 border border-green-700">
                    <Database className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.backend.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-green-900/30 text-green-300 rounded-full font-semibold border border-green-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-900/30 rounded-full p-3 mr-4 border border-purple-700">
                    <Brain className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI & ML</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.ai.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full font-semibold border border-purple-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-900/30 rounded-full p-3 mr-4 border border-orange-700">
                    <Zap className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Tools & Others</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.tools.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-orange-900/30 text-orange-300 rounded-full font-semibold border border-orange-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Interests Tab */}
          {activeTab === 'interests' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {interests.map((interest, idx) => (
                <div key={idx} className="bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl p-8 text-center hover:shadow-indigo-500/20 hover:shadow-2xl transition-shadow duration-300">
                  <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-indigo-400 border border-indigo-700">
                    {interest.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{interest.title}</h3>
                  <p className="text-slate-400">{interest.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;