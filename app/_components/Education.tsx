import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin} from 'lucide-react';

interface EducationItem {
  id: string;
  level: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  percentage?: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  highlights: string[];
}

const Education: React.FC = () => {

  const educationData: EducationItem[] = [
     {
      id: '1',
      level: 'Graduation',
      degree: 'Bachelor of Technology (B.Tech)',
      institution: 'Madhav Institute of Technology and Science',
      location: 'Gwalior, Madhya Pradesh',
      year: '2022 - 2026',
      percentage: '7.98 CGPA',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'text-purple-600',
      bgColor: 'bg-[000000]',
      borderColor: 'border-purple-200',
      description: 'Advanced studies and professional preparation',
      highlights: ['Technical Skills', 'Industry Ready', 'Innovation']
    },
    {
      id: '2',
      level: '12th Grade',
      degree: 'Higher Secondary Education',
      institution: 'Govt H. Secondary School',
      location: 'Piplia Buzurg (M.P.)',
      year: '2020 - 2021',
      percentage: '95%',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'text-blue-600',
      bgColor: 'bg-[000000]',
      borderColor: 'border-blue-200',
      description: 'Specialized learning and career path selection',
      highlights: ['Career Focus', 'Advanced Studies', 'Goal Setting']
    },
   {
      id: '3',
      level: '10th Grade',
      degree: 'High Secondary Education',
      institution: 'Govt H. Secondary School',
      location: 'Piplia Buzurg (M.P.)',
      year: '2018 - 2019',
      percentage: '94.8%',
      icon: <Award className="w-8 h-8" />,
      color: 'text-green-600',
      bgColor: 'bg-[000000]',
      borderColor: 'border-green-200',
      description: 'The foundation of my academic journey began here',
      highlights: ['Strong Foundation', 'Academic Excellence', 'First Milestone']
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Education Cards Grid */}
        <div className=" text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <GraduationCap className="w-10 h-10" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Education
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            A journey of continuous learning and academic excellence
          </p>
        </div>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {educationData.map((item, index) => (
            <div
              key={item.id}
              className="relative bg-slate-800/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-slate-700/50 dark:border-slate-600/50"
            >
              {/* Header with Icon */}
              <div className={`${item.bgColor} dark:bg-opacity-20 p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 dark:bg-white/5 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 dark:bg-white/5 rounded-full -ml-12 -mb-12"></div>
                <div className={`${item.color} mb-4 relative z-10`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white dark:text-gray-100 mb-1 relative z-10">{item.level}</h3>
                <div className={`inline-flex items-center px-3 py-1 rounded-full ${item.bgColor} dark:bg-opacity-30 ${item.color} text-sm font-semibold border ${item.borderColor} dark:border-opacity-50 relative z-10`}>
                  {item.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-white dark:text-gray-100 mb-3">{item.degree}</h4>
                <p className="text-gray-300 dark:text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start text-sm">
                    <BookOpen className="w-4 h-4 text-gray-400 dark:text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 dark:text-gray-400">{item.institution}</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <MapPin className="w-4 h-4 text-gray-400 dark:text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 dark:text-gray-400">{item.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.highlights.map((highlight, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-700/50 dark:bg-slate-800/50 text-gray-300 dark:text-gray-400 text-xs rounded-full border border-slate-600/50">
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Score Badge */}
                {item.percentage && (
                  <div className={`flex items-center justify-between p-4 rounded-xl bg-gradient-to-r ${item.bgColor} dark:bg-opacity-20 border ${item.borderColor} dark:border-opacity-50`}>
                    <div className="flex items-center">
                      <Award className={`w-5 h-5 ${item.color} mr-2`} />
                      <span className="text-sm font-semibold text-gray-300 dark:text-gray-400">Score</span>
                    </div>
                    <span className={`text-xl font-bold ${item.color}`}>{item.percentage}</span>
                  </div>
                )}
              </div>

              {/* Step Number */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-slate-700/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center font-bold text-white dark:text-gray-200 text-lg border border-slate-600/50">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline View for Mobile */}
        <div className="lg:hidden space-y-8">
          {educationData.map((item, index) => (
            <div key={item.id} className="relative pl-8">
              {/* Timeline Line */}
              {index < educationData.length - 1 && (
                <div className="absolute left-3 top-12 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 to-purple-400"></div>
              )}
              
              {/* Timeline Dot */}
              <div className={`absolute left-0 top-4 w-6 h-6 rounded-full bg-gradient-to-r ${item.bgColor} dark:bg-opacity-30 border-4 ${item.borderColor} dark:border-opacity-50 shadow-lg`}></div>
              
              <div className="bg-slate-800/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 border-l-4 border-indigo-500 dark:border-indigo-400">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white dark:text-gray-100">{item.level}</h3>
                    <p className="text-sm text-gray-300 dark:text-gray-400">{item.year}</p>
                  </div>
                  <div className={`${item.color}`}>
                    {item.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-200 dark:text-gray-300 mb-2">{item.degree}</h4>
                <p className="text-sm text-gray-300 dark:text-gray-400 mb-3">{item.institution}</p>
                {item.percentage && (
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${item.bgColor} dark:bg-opacity-20 border ${item.borderColor} dark:border-opacity-50 font-bold ${item.color}`}>
                    {item.percentage}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;