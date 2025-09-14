import Education from "@/app/_components/Education";
import LandingPage from "@/app/_components/LandingPage";



export default function Home() {
  return (
    <div className="min-h-screen">
      <section>
         <LandingPage/>
      </section>
      <section>
         <Education/>
      </section>
    </div>
  );
}
