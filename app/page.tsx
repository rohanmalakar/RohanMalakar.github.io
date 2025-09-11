import Image from "next/image";
import ExperienceList from "@/app/_components/ExperienceList"
import ThemeToggle from "@/app/_components/ThemeToggle"

export default function Home() {
  return (
      <div>
         <ThemeToggle />
         <ExperienceList/>
      </div>
  );
}
