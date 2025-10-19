import { AnimatedHeader } from './_components/AnimatedHeader';
import { PortfolioGrid } from './_components/PortfolioGrid';
import { CTASection } from './_components/CTASection';
import FinanceVisualizer from "@/public/project-images/FinanceVisualizer.png"
import Sahayak from "@/public/project-images/Sahayak.png"
import Youthspire from "@/public/project-images/Youthspire.png"
import Grammarly from "@/public/project-images/Grammarly.png"
import EGuru from "@/public/project-images/E-Guru.png"
import LangBridge from "@/public/project-images/Lang-Bridge.png"
import CodeReviewer from "@/public/project-images/CodeReviewer.png"
import CodeScorer from "@/public/project-images/Code-Scorer.png"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution built with React and Node.js. Features include user authentication, payment processing, and real-time inventory management.",
    link: "https://example.com/ecommerce",
    id: "E-Commerce Platform",
  },
  {
    title: "Grammarly Clone",
    description:"A simple static clone of Grammarly’s homepage built with HTML, CSS, and JavaScript. This was my very first project, marking the beginning of my web development journey.",
    id: "Grammarly Clone",
    year: 2021,
    type: "Personal Project",
    details: {
      purpose:
        "The main purpose of building this project was to learn the fundamentals of web development and practice turning ideas into real web pages.",
      features: [
        "Simple static clone of Grammarly’s homepage",
        "Focus on layout, typography, and visual design",
        "No backend or grammar-checking functionality",
      ],
      learningAndChallenges: [
        "Understanding the basics of HTML structure",
        "Styling with CSS including Flexbox and Grid",
        "Experimenting with responsive layouts",
      ],
      outcome:
        "Completing this project gave me the confidence that I could build web pages from scratch using only HTML, CSS, and JavaScript. It was a foundational step that motivated me to continue exploring web development.",
    },
    coverImage: "/images/projects/grammarly-clone/cover.png",
    images: [
      "/images/projects/grammarly-clone/screenshot1.png",
      "/images/projects/grammarly-clone/screenshot2.png",
      "/images/projects/grammarly-clone/screenshot3.png",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    links: {
      live: {
        url: null,
        disabled: true,
        label: "Live Project Not Available",
      },
      github: {
        url: null,
        disabled: true,
        label: "Private Repository",
      },
    },
  },
];



// Portfolio data structure - easily add more cards here
const portfolioItems = [
  {
    id: 1,
    title: 'Sahayak',
    subtitle: 'Sahayak',
    image: Sahayak,
    bgColor: 'bg-amber-100',
    year: '2023'
  },
  {
    id: 2,
    title: 'Finance Visualizer',
    subtitle: 'Finance Visualizer',
    image: FinanceVisualizer,
    bgColor: 'bg-pink-200',
    year: '2025'
  },
  {
    id: 3,
    title: 'Youthspire',
    subtitle: 'Youthspire',
    image: Youthspire,
    bgColor: 'bg-gray-300',
    year: '2023'
  },
  {
    id: 4,
    title: 'E-Guru',
    subtitle: 'E-Guru',
    image: EGuru,
    bgColor: 'bg-emerald-200',
    year: '2022'
  },
  {
    id: 5,
    title: 'Grammarly',
    subtitle: 'Landing Page',
    image: Grammarly,
    bgColor: 'bg-blue-200',
    year: '2023'
  },
  {
    id: 6,
    title: 'Lang-Bridge',
    subtitle: 'Lang-Bridge',
    image: LangBridge,
    bgColor: 'bg-purple-300',
    year: '2022'
  },
  {
    id: 7,
    title: 'Code-Reviewer',
    subtitle: 'CodeReviewer',
    image: CodeReviewer,
    bgColor: 'bg-teal-200',
    year: '2023'
  },
  {
    id: 8,
    title: 'CodeScorer',
    subtitle: 'AI Platform',
    image: CodeScorer,
    bgColor: 'bg-slate-300',
    year: '2024'
  }
];

// Server component - no useState or client-side interactions
export default function ProjectsPage() {
  const filters = ['All', 'UI', 'Development', 'Design'];

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Header Section */}
      <div className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-20">
        <AnimatedHeader />

        {/* Portfolio Grid with Filters */}
        <PortfolioGrid 
          portfolioItems={portfolioItems} 
          filters={filters} 
        />

        {/* CTA Section */}
        <CTASection />
      </div>
    </div>
  );
}
