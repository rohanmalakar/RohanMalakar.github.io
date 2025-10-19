import { StaticImageData } from 'next/image';
import FinanceVisualizer from "@/public/project-images/FinanceVisualizer.png";
import Sahayak from "@/public/project-images/Sahayak.png";
import MentorG from "@/public/project-images/Mentor-G.png";
import Youthspire from "@/public/project-images/Youthspire.png";
import Grammarly from "@/public/project-images/Grammarly.png";
import LangBridge from "@/public/project-images/Lang-Bridge.png";
import CodeReviewer from "@/public/project-images/CodeReviewer.png";
import CodeScorer from "@/public/project-images/Code-Scorer.png";
import Inky from "@/public/project-images/Inky.png";
import Cepheia from "@/public/project-images/Cepheia.png";

export interface ProjectLink {
  url: string;
  disabled: boolean;
  label: string;
}

export interface ProjectLinks {
  live: ProjectLink;
  github: ProjectLink;
}

export interface PortfolioItem {
  id: number;
  title: string;
  subtitle: string;
  image: StaticImageData;
  bgColor: string;
  year: string;
  description: string;
  technologies: string[];
  myContribution?: string[];
  links: ProjectLinks;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Mentor-G",
    subtitle: "AI-Powered Mentorship Platform",
    image: MentorG,
    bgColor: "bg-amber-100",
    year: "2023",
    description: "An innovative AI-powered mentorship platform that connects mentors and mentees, providing personalized guidance and learning paths. Built with modern web technologies to deliver a seamless user experience.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "AI/ML", "Socket.io"],
    myContribution: [
      "Designed and implemented the real-time chat system using Socket.io",
      "Built the AI-powered mentor matching algorithm",
      "Developed the user dashboard and profile management features",
      "Integrated payment gateway for premium subscriptions"
    ],
    links: {
      live: {
        url: "https://mentor-g.com",
        disabled: false,
        label: "View Live Demo"
      },
      github: {
        url: "https://github.com/yourusername/mentor-g",
        disabled: true,
        label: "Private Repository"
      }
    }
  },
  {
    id: 2,
    title: "Finance Visualizer",
    subtitle: "Personal Finance Dashboard",
    image: FinanceVisualizer,
    bgColor: "bg-pink-200",
    year: "2025",
    description: "A comprehensive finance visualization tool that helps users track expenses, manage budgets, and visualize financial data through interactive charts and graphs. Features real-time updates and insightful analytics.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Chart.js", "TypeScript"],
    links: {
      live: {
        url: "https://personal-finance-vsualizer.vercel.app",
        disabled: false,
        label: "View Live Demo"
      },
      github: {
        url: "https://github.com/rohanmalakar/PFV",
        disabled: false,
        label: "Source Code"
      }
    }
  },
  {
    id: 3,
    title: "Sahayak",
    subtitle: "Community Help Platform",
    image: Sahayak,
    bgColor: "bg-gray-300",
    year: "2023",
    description: "A community-driven platform designed to connect people who need help with volunteers willing to assist. Features include task posting, volunteer matching, and real-time communication.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Material-UI", "Redux"],
    links: {
      live: {
        url: "https://hack-byte-indol.vercel.app/",
        disabled: false,
        label: "View Live Demo"
      },
      github: {
        url: "https://github.com/rohanmalakar/Hack-Byte",
        disabled: false,
        label: "View on GitHub"
      }
    }
  },
  {
    id: 4,
    title: "Youthspire",
    subtitle: "Youth Empowerment Portal",
    image: Youthspire,
    bgColor: "bg-gray-300",
    year: "2023",
    description: "An educational platform aimed at empowering youth through skill development courses, career guidance, and mentorship programs. Includes interactive learning modules and progress tracking.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Stripe"],
    myContribution: [
      "Implemented the course enrollment and payment system",
      "Built the video player with progress tracking",
      "Created the admin dashboard for course management",
      "Developed user authentication and authorization system"
    ],
    links: {
      live: {
        url: "https://youthspire.in/",
        disabled: false,
        label: "View Project"
      },
      github: {
        url: "https://github.com/yourusername/youthspire",
        disabled: true,
        label: "Private Repository"
      }
    }
  },
  {
    id: 5,
    title: "Cepheia",
    subtitle: "Modern E-Commerce Solution",
    image: Cepheia,
    bgColor: "bg-emerald-200",
    year: "2022",
    description: "A full-featured e-commerce platform with product catalog, shopping cart, secure checkout, and order management. Built with scalability and performance in mind.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Stripe", "Redux"],
    links: {
      live: {
        url: "https://cepheia.in",
        disabled: false,
        label: "Visit Store"
      },
      github: {
        url: "https://github.com/yourusername/cepheia",
        disabled: true,
        label: "Private Repository"
      }
    }
  },
  {
    id: 6,
    title: "Code-Reviewer",
    subtitle: "AI Code Review Assistant",
    image: CodeReviewer,
    bgColor: "bg-teal-200",
    year: "2023",
    description: "An AI-powered tool that automatically reviews code, identifies bugs, suggests improvements, and enforces coding standards. Integrates seamlessly with popular version control systems.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "OpenAI API", "Docker"],
    links: {
      live: {
        url: "https://code-reviewer-alpha.vercel.app",
        disabled: false,
        label: "Try It Out"
      },
      github: {
        url: "https://github.com/rohanmalakar/Code-Reviewer",
        disabled: false,
        label: "Source Code"
      }
    }
  },
  {
    id: 7,
    title: "CodeScorer",
    subtitle: "Code Quality Analytics",
    image: CodeScorer,
    bgColor: "bg-slate-300",
    year: "2024",
    description: "A comprehensive code analysis platform that scores code quality based on multiple metrics including readability, performance, security, and maintainability. Provides actionable insights and recommendations.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "TypeScript", "AI/ML"],
    links: {
      live: {
        url: "https://code-scorer.vercel.app",
        disabled: false,
        label: "View Project"
      },
      github: {
        url: "https://github.com/rohanmalakar/LMS-project",
        disabled: false,
        label: "Source Code"
      }
    }
  },
  {
    id: 8,
    title: "Inky",
    subtitle: "Digital Notebook App",
    image: Inky,
    bgColor: "bg-emerald-200",
    year: "2022",
    description: "A beautiful and intuitive note-taking application with markdown support, tags, search functionality, and cloud sync. Perfect for organizing thoughts and ideas.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Markdown", "WebSocket"],
    myContribution: [
      "Developed the markdown editor with live preview",
      "Built the tagging and search functionality",
      "Implemented real-time sync across devices",
      "Created the responsive UI components"
    ],
    links: {
      live: {
        url: "https://inky.breakmart.in",
        disabled: false,
        label: "View Project"
      },
      github: {
        url: "https://github.com/yourusername/inky",
        disabled: true,
        label: "Private Repo"
      }
    }
  },
  {
    id: 9,
    title: "Grammarly Clone",
    subtitle: "Grammar Checker Landing Page",
    image: Grammarly,
    bgColor: "bg-blue-200",
    year: "2023",
    description: "A pixel-perfect clone of Grammarly's landing page, showcasing modern web design principles, responsive layouts, and smooth animations. Built as a learning project to master HTML, CSS, and JavaScript fundamentals.",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP", "Responsive Design"],
    links: {
      live: {
        url: "https://rohanmalakar.me/Grammarly-clone",
        disabled: false,
        label: "View Demo"
      },
      github: {
        url: "https://github.com/rohanmalakar/Grammarly-clone",
        disabled: false,
        label: "Source Code"
      }
    }
  }
];
