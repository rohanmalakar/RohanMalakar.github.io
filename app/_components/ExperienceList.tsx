import React from "react"
import ExperienceCard from "@/app/_components/ExperienceCard"
const experienceData = [
  {
    title: "Intern",
    company: "iotiot.in",
    duration: "23rd Dec 2024 - 31st Mar 2025",
    location: "Remote",
    status: "Recent Work",
    achievements: [
      {
        text: "Developed a multi-phase Brand Knowledge Graph System using JSON, SQLite, Neo4j, and D3.js; achieved 85% accuracy via Cypher."
      },
      {
        text: "Integrated Gemini API for natural language to SQL conversion and structured result export."
      },
      {
        text: "Built an LLM-based Reasoning Model using GRPO with LoRA adapters on unsloth/tinyllama-bnb-4bit; fine-tuned on Colab (T4 GPU, 4-bit quant)."
      },
      {
        text: "Employed HuggingFace, Unsloth, and RL to implement a GRPOTrainer pipeline for reward-based response generation."
      }
    ],
    technologies: [
      "Python",
      "Neo4j",
      "SQLite",
      "D3.js",
      "Gemini API",
      "HuggingFace",
      "TensorFlow",
      "LoRA",
      "Unsloth",
      "Google Colab"
    ],
    images: [
      "/project-images/knowledge-graph-1.png",
      "/project-images/knowledge-graph-2.png",
      "/project-images/llm-model-dashboard.png",
      "/project-images/data-visualization.png",
      "/project-images/api-integration.png"
    ],
    projectLinks: [
      {
        type: "live" as const,
        url: "https://your-knowledge-graph-demo.com",
        label: "Live Demo"
      },
      {
        type: "github" as const,
        url: "https://github.com/yourusername/brand-knowledge-graph",
        label: "Source Code"
      },
      {
        type: "demo" as const,
        url: "https://colab.research.google.com/your-notebook",
        label: "Colab Notebook"
      }
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Previous Company",
    duration: "Jun 2024 - Dec 2024",
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
        text: "Deployed applications using Docker, AWS, and implemented CI/CD pipelines."
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
        type: "live" as const,
        url: "https://your-webapp.com",
        label: "Visit Website"
      },
      {
        type: "github" as const,
        url: "https://github.com/yourusername/webapp-project",
        label: "GitHub Repo"
      }
    ]
  },
]


function ExperienceList() {
  return (
    <div className="flex flex-col">
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