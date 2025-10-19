import React from "react"
import ExperienceCard from "@/app/_components/ExperienceCard"
const experienceData = [
    {
  title: "Intern",
  company: "BreakMart Technologies Pvt. Ltd.",
  duration: "1st July 2025 - 30 Sept 2025",
  location: "Gwalior (In-office)",
  status: "Completed",
  achievements: [
    {
      text: "Integrated Razorpay, Delhivery API, and automated product/cart flows with admin panel enhancements in Cepheia."
    },
    {
      text: "Enhanced Youthspire by improving course/lecture management, upgrading UI, and developing the Bouncy portal (task bounties & job portal)."
    },
    {
      text: "Built employee activity tracking, attendance, and holiday management modules for BreakMart’s internal admin panel."
    },
    {
      text: "Developed the homepage and implemented animations for INKY."
    },
    {
      text: "Contributed to multiple projects focusing on payment integration, admin panel optimization, workflow automation, and UI/UX improvements."
    }
  ],
  technologies: [
    "React",
    "Express",
    "Framer Motion",
    "Next.js",
    "Nest.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Docker",
    "Git",
    "Tailwind CSS"
  ],
  images: [
    "/project-images/cepheia.png",
    "/project-images/youthspire.png",
    "/project-images/breakmart.png",
    "/project-images/inky.png"
  ],
  projectLinks: [
    {
      type: "live" as const,
      url: "https://youthspire.in/",
      label: "Youthspire"
    },
    {
      type: "live" as const,
      url: "https://breakmart.in/",
      label: "BreakMart"
    }
    ,
    {
      type: "live" as const,
      url: "https://inky.breakmart.in",
      label: "INKY"
    }
    ,
    {
      type: "live" as const,
      url: "https://cepheia.in",
      label: "Cepheia"
    }
  ]
}
,
  {
    title: "MERN Stack Developer",
    company: "TeachingHub",
    duration: "1 March 2025 - 31 May 2025",
    location: "Remote",
    status: "Completed",
    achievements: [
      {
        text: "Built responsive web applications using React, Next.js, and TypeScript with modern UI frameworks."
      },
      {
        text: "Implemented RESTful APIs and database management using Node.js, Express, and MongoDB."
      },
      {
        text: "Collaborated with cross-functional teams using Agile methodologies and version control."
      }
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "AWS",
      "Docker",
      "Git"
    ],
    images: [
      "/project-images/webapp-1.png",
      "/project-images/webapp-2.png",
      "/project-images/mobile-responsive.png",
      "/project-images/admin-dashboard.png"
    ],
    projectLinks: [
      {
        type: "github" as const,
        url: "https://github.com/rohanmalakar/teachingHub",
        label: "GitHub Repo"
      }
    ]
  },
]


function ExperienceList() {
  return (
    <div className="flex flex-col ">
      {experienceData.map((exp, idx) => (
        <div key={idx}>
          <ExperienceCard
            title={exp.title}
            company={exp.company}
            duration={exp.duration}
            location={exp.location}
            status={exp.status}
            achievements={exp.achievements}
            technologies={exp.technologies}
            images={exp.images}
            projectLinks={exp.projectLinks}
          />
        </div>
      ))}
    </div>
  )
}

export default ExperienceList