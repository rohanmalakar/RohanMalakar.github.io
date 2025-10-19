import ExperienceList from "@/app/_components/ExperienceList";
import DotGrid from "../_components/UI/DottedBackground";

export default function Experience() {
  return (
    <div className="relative bg-gray-50 dark:bg-black min-h-screen py-16 px-2 md:px-10">
      {/* DotGrid Background */}
      <div className="fixed inset-0 z-0">
        <DotGrid
          dotSize={3}
          gap={20}
          baseColor="#A18A87"
          activeColor="#1707ED"
          proximity={80}
          shockRadius={250}
          shockStrength={2}
          resistance={1200}
          returnDuration={2}
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl dark:text-white md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
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
