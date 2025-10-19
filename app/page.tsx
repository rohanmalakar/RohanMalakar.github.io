
// import Education from "@/app/_components/Education";
import LandingPage from "@/app/_components/LandingPage";
import DotGrid from "./_components/UI/DottedBackground";
// import ScrollVelocity from "./_components/UI/InfiniteScrolling";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* DotGrid Background - Uses Tailwind dark: mode */}
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 bg-white dark:bg-black">
        <DotGrid
          dotSize={3}
          gap={15}
          baseColor="#A18A87"
          activeColor="#1707ED"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      
      {/* Main Content - now with transparent backgrounds */}
      <div className="relative z-10">
        <section>
           <LandingPage/>
        </section>
        {/* <section>
           <Education/>
        </section> */}
        {/* <div>
          <GithubTimeLine/>
        </div> */}
        {/* <div className="my-20">
          <ScrollVelocity
            texts={[ 'FULL STACK DEVELOPER']} 
            velocity={50} 
            className="custom-scroll-text"
          />
        </div> */}

      </div>
    </div>
  );
}
