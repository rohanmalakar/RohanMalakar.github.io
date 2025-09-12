import ExperienceList from "@/app/_components/ExperienceList"

export default function Experience() {
  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen py-16 px-2 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold font-serif bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
            A journey through my professional development and achievements
          </p>
        </div>
        <ExperienceList/>
      </div>
    </div>
  );
}
