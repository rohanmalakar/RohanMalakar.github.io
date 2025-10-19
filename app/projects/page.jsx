import { AnimatedHeader } from "./_components/AnimatedHeader";
import { PortfolioGrid } from "./_components/PortfolioGrid";
import { CTASection } from "./_components/CTASection";
import DotGrid from "../_components/UI/DottedBackground";
import { portfolioItems } from "./data/portfolioData";

// Server component - no useState or client-side interactions
export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Header Section */}
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
      <div className="container mx-auto relative z-10 py-8 sm:py-12 md:py-16 lg:py-20">
        <AnimatedHeader />

        {/* Portfolio Grid */}
        <PortfolioGrid portfolioItems={portfolioItems} />

        {/* CTA Section */}
        <CTASection />
      </div>
    </div>
  );
}
