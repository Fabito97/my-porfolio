import { Project, Article, LearningItem, SkillGroup, ExperienceEntry, Contribution, SiteProfile } from './types';
import fs from 'fs';
import path from 'path';

export const initialProfile: SiteProfile = {
  name: "Fabian Muoghalu",
  title: "Software Engineer",
  headline: "Backend systems, web applications, and AI agents.",
  bio: "Software Engineer with a background in English and Literature (University of Benin) and training in full-stack software development. Experienced with C# .NET, Python (FastAPI), TypeScript, relational databases, and AI agent workflows.",
  philosophy: "Acquire -> Build -> Value -> Teach",
  location: "Nigeria",
  email: "fabianmuoghalu97@gmail.com",
  github: "https://github.com/Fabito97",
  linkedin: "https://www.linkedin.com/in/fabian-muoghalu-37aa7a1a9/",
  twitter: "https://x.com/Fabito97",
  availableForHire: true,
  currentFocus: "Backend APIs and AI agent workflows.",
};

export const initialProjects: Project[] = [
  {
    id: "telex-ai-monitoring-agent",
    slug: "telex-ai-monitoring-agent",
    title: "AI Monitoring Backend Application",
    tagline: "Backend service to process, log, and analyze real-time AI system performance data and system alerts.",
    category: "AI / Agent",
    featured: true,
    published: true,
    date: "2025",
    githubUrl: "https://github.com/Fabito97/telex-ai-monitoring-agent",
    liveUrl: "https://telex.im",
    problem: "Real-time AI workflows and server monitoring require continuous performance data logging, anomaly summary generation, and immediate incident alerting without manual intervention.",
    role: "Backend Developer (Telex Volunteer). Implemented logging and debugging strategies to maximize system reliability, using Semantic Kernel for multi-step agent orchestration.",
    architecture: "Built as an ASP.NET Core service with C#, coupled with MongoDB for agent state storage and Semantic Kernel for LLM reasoning pipelines.",
    decisions: [
      "Chosen C# and ASP.NET Core for high-throughput asynchronous execution and low memory footprint.",
      "Utilized MongoDB for persistent storage of flexible telemetry payloads and unstructured logs.",
      "Implemented Semantic Kernel orchestration to coordinate LLM reasoning across multi-step agent tasks."
    ],
    challenges: [
      "Managing rate limits and payload sanitization when forwarding live server logs to LLM endpoints.",
      "Ensuring low-latency execution and high system reliability under heavy payload logging."
    ],
    lessons: [
      "Deepened expertise in agentic reasoning with Semantic Kernel and C# async pipelines.",
      "Gained strong practical knowledge in managing non-blocking API handlers."
    ],
    results: [
      "Successfully integrated into Telex collaborative agent platform.",
      "Processes server log payloads and provides concise, actionable incident summaries."
    ],
    techStack: ["C#", "ASP.NET Core", "MongoDB", "Semantic Kernel", "AI Agents", "LLM Integration"],
    order: 1
  },
  {
    id: "rag-agent-system",
    slug: "rag-agent-system",
    title: "RAG Agent System",
    tagline: "Backend pipelines for document ingestion, processing, and vector retrieval to support context-aware AI querying.",
    category: "AI / Agent",
    featured: true,
    published: true,
    date: "2025",
    githubUrl: "https://github.com/Fabito97/rag-agent-system",
    liveUrl: "https://github.com/Fabito97/rag-agent-system",
    problem: "Enterprise applications require accurate, context-aware querying over internal document archives without LLM hallucination.",
    role: "Backend Engineer. Designed document processing pipelines and query-processing APIs ensuring structured response handling.",
    architecture: "Python FastAPI backend with LangChain integration, generating vector embeddings stored in ChromaDB for high-accuracy semantic retrieval.",
    decisions: [
      "Selected FastAPI for rapid, asynchronous python query execution and automatic OpenAPI spec generation.",
      "Used ChromaDB as an in-memory vector database for high-performance similarity search.",
      "Integrated LangChain for document chunking, prompt template injection, and context enrichment."
    ],
    challenges: [
      "Optimizing document chunking boundaries to maintain semantic continuity during vector retrieval.",
      "Ensuring deterministic API response formatting for client consumption."
    ],
    lessons: [
      "Mastered vector retrieval mechanisms, embedding models, and RAG architecture patterns.",
      "Enhanced proficiency in Python async web development with FastAPI."
    ],
    results: [
      "High-accuracy document retrieval pipeline with low query response latency.",
      "Reusable RAG architecture template for context-aware AI querying."
    ],
    techStack: ["Python", "FastAPI", "LangChain", "ChromaDB", "Vector Databases", "RAG"],
    order: 2
  },
  {
    id: "traidr-ecommerce-platform",
    slug: "traidr-ecommerce-platform",
    title: "E-commerce Platform (Decagon Capstone)",
    tagline: "Full-stack e-commerce marketplace featuring product catalog indexing, cart handling, and user authentication.",
    category: "Full-Stack",
    featured: true,
    published: true,
    date: "2024",
    githubUrl: "https://github.com/Fabito97/traidr-ecommerce",
    liveUrl: "https://github.com/Fabito97/traidr-ecommerce",
    problem: "E-commerce platforms require seamless product discovery, reliable shopping cart transactions, and secure authentication.",
    role: "Team Lead. Led a 6-member engineering team in building a full-stack e-commerce MVP featuring complete product, cart, and auth modules.",
    architecture: "ASP.NET Core RESTful API backend paired with a React frontend, backed by PostgreSQL and Entity Framework Core.",
    decisions: [
      "Selected PostgreSQL for strong relational data consistency across users, orders, and products.",
      "Utilized Entity Framework Core ORM for typed database migrations and repository patterns.",
      "React and Tailwind CSS for responsive frontend catalog interfaces."
    ],
    challenges: [
      "Coordinating Git feature branching and code reviews across a 6-member engineering team.",
      "Optimizing SQL queries to eliminate N+1 latency issues during catalog searches."
    ],
    lessons: [
      "Strengthened engineering team leadership, task delegation, and code review standards.",
      "Mastered full-stack state management and REST API contract design."
    ],
    results: [
      "Successfully delivered full-stack e-commerce MVP on schedule.",
      "Sub-100ms API response times for product queries and user cart updates."
    ],
    techStack: ["C#", "ASP.NET Core", "PostgreSQL", "React", "EF Core", "Tailwind CSS"],
    order: 3
  },
  {
    id: "custom-blog-ai-support-bot",
    slug: "custom-blog-ai-support-bot",
    title: "Blog Management & Agentic AI Support System",
    tagline: "Custom Next.js CMS with Editor.js, serverless Neon Postgres, and an AI support bot automating customer bookings.",
    category: "Full-Stack",
    featured: false,
    published: true,
    date: "2025",
    githubUrl: "https://github.com/Fabito97/custom-blog-ai-support",
    liveUrl: "https://github.com/Fabito97/custom-blog-ai-support",
    problem: "High-volume content archives and delivery platforms required optimized database indexing alongside automated customer support inquiries.",
    role: "Freelance Software Engineer. Engineered agentic support bot, custom Next.js CMS, and Neon Postgres database architecture.",
    architecture: "Next.js App Router with Editor.js & Cloudinary asset management, serverless Neon Postgres DB, cookie-based JWT auth, and agentic support integration.",
    decisions: [
      "Used Neon Postgres serverless DB with indexing strategies to handle high-volume content queries with minimal latency.",
      "Implemented cookie-based JWT authentication for secure session persistence.",
      "Integrated Cloudinary for media asset delivery and optimization."
    ],
    challenges: [
      "Managing real-time delivery inquiries and automated customer bookings gracefully in the AI bot.",
      "Reducing query latency across large post archives."
    ],
    lessons: [
      "Deepened expertise in serverless PostgreSQL architectures and Next.js modern paradigms.",
      "Refined production deployment and environment management skills."
    ],
    results: [
      "Significantly reduced query latency and page load times for post archives.",
      "Automated customer bookings and delivery inquiry responses via agentic AI."
    ],
    techStack: ["Next.js", "TypeScript", "Neon Postgres", "Node.js", "Editor.js", "Cloudinary", "JWT Auth"],
    order: 4
  }
];

export const initialArticles: Article[] = [
  {
    id: "building-agentic-ai-workflows-dotnet",
    slug: "building-agentic-ai-workflows-dotnet",
    title: "Building Agentic AI Workflows and Multi-Step Pipelines with C# and Semantic Kernel",
    excerpt: "A practical guide on coordinating LLM reasoning, managing agent state in MongoDB, and creating resilient webhook pipelines in .NET Core.",
    content: `## Introduction

Integrating AI agents into existing platform ecosystems requires a disciplined approach to async task execution, prompt orchestration, and state persistence.

In this guide, I share engineering lessons from building autonomous agents using **C#**, **ASP.NET Core**, and **Semantic Kernel**.

## Core Architecture Principles

1. **Decoupled Reasoning**: Keep LLM prompts abstracted from HTTP transport handlers.
2. **Persistent Agent Memory**: Store execution state and telemetry in MongoDB.
3. **Resilient Error Handling**: Use retry logic and strict timeout bounds on external AI endpoints.`,
    publishedAt: "2025-05-10",
    readingTime: "6 min read",
    tags: ["C#", ".NET Core", "Semantic Kernel", "AI Agents", "MongoDB"],
    featured: true,
    published: true,
    isExternal: false
  },
  {
    id: "rag-architecture-fastapi-langchain",
    slug: "rag-architecture-fastapi-langchain",
    title: "Designing Context-Aware RAG Pipelines with Python, FastAPI, and ChromaDB",
    excerpt: "How to chunk documents, generate vector embeddings, and build high-accuracy document retrieval APIs using Python and LangChain.",
    content: `## Overview

Retrieval-Augmented Generation (RAG) grounds LLM responses in real enterprise data, drastically reducing hallucinations.

Here is an architectural walkthrough of building a RAG Agent pipeline with FastAPI, LangChain, and ChromaDB.`,
    publishedAt: "2025-03-18",
    readingTime: "5 min read",
    tags: ["Python", "FastAPI", "RAG", "LangChain", "Vector DB"],
    featured: true,
    published: true,
    isExternal: false
  }
];

export const initialLearningItems: LearningItem[] = [
  {
    id: "system-design-microservices",
    topic: "Microservices Architecture & Message Queues",
    category: "Backend & Systems",
    whyLearning: "To design fault-tolerant microservice architectures using RabbitMQ, Nginx, and event-driven patterns in ASP.NET Core.",
    status: "Applying in Projects",
    startDate: "2025-01",
    resources: ["RabbitMQ Documentation", "System Design Interview (ByteByteGo)"],
    notes: "Focusing on distributed tracing, message brokers, and resilient API gateways."
  },
  {
    id: "docker-aws-cicd",
    topic: "Docker Containerization & AWS EC2 CI/CD",
    category: "DevOps & Cloud",
    whyLearning: "To package software predictably into Docker containers and automate deployment pipelines to AWS EC2 using GitHub Actions.",
    status: "Applying in Projects",
    startDate: "2025-02",
    resources: ["Docker Official Docs", "AWS EC2 Guides", "GitHub Actions Workflows"],
    notes: "Created multi-stage Dockerfiles and automated deployment pipelines to EC2."
  }
];

export const initialSkillGroups: SkillGroup[] = [
  {
    id: "languages",
    category: "Programming Languages",
    skills: [
      { name: "C#", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "Python", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "TypeScript", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "JavaScript", level: "Core Proficiency", experienceYears: "3+ yrs" },
      { name: "SQL", level: "Core Proficiency", experienceYears: "2+ yrs" }
    ]
  },
  {
    id: "backend",
    category: "Backend Frameworks & Systems",
    skills: [
      { name: "ASP.NET Core", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "FastAPI", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "Express.js", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "Node.js", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "RESTful APIs", level: "Core Proficiency", experienceYears: "3+ yrs" },
      { name: "Microservices & System Design", level: "Core Proficiency", experienceYears: "2+ yrs" }
    ]
  },
  {
    id: "ai_agentic",
    category: "AI & Agentic Tech",
    skills: [
      { name: "Semantic Kernel", level: "Core Proficiency", experienceYears: "1+ yrs" },
      { name: "LangChain", level: "Core Proficiency", experienceYears: "1+ yrs" },
      { name: "Vector Databases (ChromaDB)", level: "Core Proficiency", experienceYears: "1+ yrs" },
      { name: "RAG Architecture", level: "Core Proficiency", experienceYears: "1+ yrs" },
      { name: "LLM Integrations", level: "Core Proficiency", experienceYears: "2+ yrs" }
    ]
  },
  {
    id: "frontend",
    category: "Frontend Engineering",
    skills: [
      { name: "React", level: "Core Proficiency", experienceYears: "3+ yrs" },
      { name: "Next.js", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "Redux", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "Tailwind CSS", level: "Core Proficiency", experienceYears: "3+ yrs" },
      { name: "HTML5 / CSS3", level: "Core Proficiency", experienceYears: "3+ yrs" }
    ]
  },
  {
    id: "databases",
    category: "Databases & Storage",
    skills: [
      { name: "PostgreSQL", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "MongoDB", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "SQL Server", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "Neon Postgres", level: "Core Proficiency", experienceYears: "1+ yrs" },
      { name: "Redis", level: "Working Knowledge", experienceYears: "1+ yrs" }
    ]
  },
  {
    id: "devops_cloud",
    category: "DevOps, Cloud & AI Tools",
    skills: [
      { name: "Docker & Docker Compose", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "AWS EC2", level: "Working Knowledge", experienceYears: "1+ yrs" },
      { name: "GitHub Actions CI/CD", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "Nginx & RabbitMQ", level: "Working Knowledge", experienceYears: "1+ yrs" },
      { name: "AI Dev Tools (Cursor, Claude, Copilot)", level: "Core Proficiency", experienceYears: "2+ yrs" }
    ]
  }
];

export const initialExperience: ExperienceEntry[] = [
  {
    id: "freelance-engineer",
    company: "Freelance",
    role: "Freelance Software Engineer",
    employmentType: "Freelance / Contract",
    period: "Jan 2025 - Present",
    location: "Remote",
    description: "Architecting web applications, custom CMS solutions, and AI support automation for clients.",
    responsibilities: [
      "Engineered an AI-driven support bot with agentic capabilities to automate customer bookings and handle real-time delivery inquiries.",
      "Optimized database queries and indexing strategies for high-volume content and post archives, significantly reducing query latency and page load times.",
      "Developed a custom Blog Management System using Next.js, Editor.js, and Cloudinary for structured content delivery and asset management.",
      "Designed a serverless database architecture using Neon Postgres with cookie-based JWT authentication.",
      "Managed environment configurations and Node.js deployment setups, providing ongoing production support."
    ],
    achievements: [
      "Automated customer support booking pipelines using agentic AI integrations.",
      "Designed serverless Neon Postgres DB architecture with cookie-based JWT auth."
    ],
    techStack: ["Next.js", "TypeScript", "Neon Postgres", "Node.js", "AI Agent", "Cloudinary", "JWT Auth"]
  },
  {
    id: "telex-volunteer",
    company: "Telex - AI Agent Collaborative Platform",
    role: "Volunteer Software Engineer",
    employmentType: "Volunteer / Remote",
    period: "Apr 2025 - Dec 2025",
    location: "Remote",
    description: "Designed and implemented backend APIs and Semantic Kernel orchestration pipelines supporting AI agent workflows.",
    responsibilities: [
      "Designed and implemented backend APIs supporting AI agent workflows using C#/.NET and TypeScript, including authentication, authorization, and database integration.",
      "Built multi-step orchestration pipelines with Semantic Kernel to coordinate agent reasoning and task execution.",
      "Developed persistent storage for agent data using MongoDB, handling schema design, indexing, and efficient queries.",
      "Integrated LLM services to process and enrich logs, automate reasoning, and generate structured insights."
    ],
    achievements: [
      "Orchestrated agent reasoning using Semantic Kernel multi-step pipelines.",
      "Built resilient MongoDB indexing for persistent telemetry log analysis."
    ],
    techStack: ["C#", "ASP.NET Core", "TypeScript", "Semantic Kernel", "MongoDB", "LLM Integration", "REST APIs"],
    featuredLink: {
      label: "View Repository",
      url: "https://github.com/Fabito97/telex-ai-monitoring-agent"
    }
  },
  {
    id: "hng-tech",
    company: "HNG Tech (HNG 12 Internship)",
    role: "Backend Engineer (Finalist)",
    employmentType: "Internship / Remote",
    period: "Feb 2025 - Apr 2025",
    location: "Remote",
    description: "Built RESTful APIs, AI-driven backend services, and automated CI/CD pipelines to AWS EC2.",
    responsibilities: [
      "Designed and built RESTful APIs and modular backend services in C#/.NET for structured, scalable application workflows.",
      "Developed AI-driven backend services integrating external LLM APIs to automate complex multi-step user workflows.",
      "Refactored legacy backend modules to optimize database interactions, clean up code architecture, and increase unit test coverage.",
      "Containerized applications using Docker and automated CI/CD pipelines to AWS EC2 using GitHub Actions."
    ],
    achievements: [
      "Earning Finalist status out of thousands of global applicants.",
      "Automated deployment pipelines to AWS EC2 using GitHub Actions and Docker."
    ],
    techStack: ["C#", ".NET Core", "Docker", "AWS EC2", "GitHub Actions", "REST APIs", "LLM Integration"]
  },
  {
    id: "decagon",
    company: "Decagon Institute",
    role: "Software Engineering Trainee / Team Lead",
    employmentType: "Full-Time Intensive",
    period: "2024",
    location: "Lagos, Nigeria",
    description: "Completed Software Engineering Certificate program and led a 6-member engineering team building a full-stack e-commerce MVP.",
    responsibilities: [
      "Led a 6-member team in building a full-stack e-commerce MVP featuring complete product, cart, and authentication modules.",
      "Mastered C#/.NET Core, PostgreSQL, React, system design, microservices, and OOP/SOLID principles.",
      "Built backend RESTful services using Entity Framework Core and relational database modeling."
    ],
    achievements: [
      "Awarded Software Engineering Certificate.",
      "Successfully led full-stack team capstone delivery."
    ],
    techStack: ["C#", "ASP.NET Core", "PostgreSQL", "React", "EF Core", "System Design"]
  }
];

export const initialContributions: Contribution[] = [
  {
    id: "edu-uniben",
    title: "B.A.(Ed) in English and Literature",
    type: "Guide / Tutorial",
    description: "University of Benin (2023). Strong foundation in critical thinking, linguistic precision, structured reasoning, and technical communication.",
    date: "2023",
    badge: "University of Benin"
  },
  {
    id: "cert-decagon",
    title: "Software Engineering Certificate",
    type: "Guide / Tutorial",
    description: "Decagon Institute (2024). Intensive software engineering program covering C#/.NET Core, system design, relational databases, and full-stack development.",
    date: "2024",
    badge: "Decagon Institute"
  },
  {
    id: "cert-hng",
    title: "Backend Development Certificate",
    type: "Open Source",
    description: "HNG 12 Backend Engineering Finalist certification for building production-ready C#/.NET APIs and microservices.",
    date: "2025",
    badge: "HNG Tech"
  },
  {
    id: "cert-aws",
    title: "AWS Cloud Bootcamp Certificate",
    type: "Experiment",
    description: "Cloudsec Network certification covering AWS cloud infrastructure, EC2, security, and containerized deployment.",
    date: "2025",
    badge: "Cloudsec Network"
  }
];

const DATA_DIR = path.join(process.cwd(), 'data_store');
const DATA_FILE = path.join(DATA_DIR, 'db.json');

export interface AppDatabase {
  profile: SiteProfile;
  projects: Project[];
  articles: Article[];
  learning: LearningItem[];
  skills: SkillGroup[];
  experience: ExperienceEntry[];
  contributions: Contribution[];
}

export function getDatabase(): AppDatabase {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const fileData = fs.readFileSync(DATA_FILE, 'utf-8');
      const parsed = JSON.parse(fileData);
      return {
        profile: { ...initialProfile, ...parsed.profile },
        projects: parsed.projects || initialProjects,
        articles: parsed.articles || initialArticles,
        learning: parsed.learning || initialLearningItems,
        skills: parsed.skills || initialSkillGroups,
        experience: parsed.experience || initialExperience,
        contributions: parsed.contributions || initialContributions,
      };
    }
  } catch (err) {
    console.error("Error reading database file, using initial state:", err);
  }

  return {
    profile: initialProfile,
    projects: initialProjects,
    articles: initialArticles,
    learning: initialLearningItems,
    skills: initialSkillGroups,
    experience: initialExperience,
    contributions: initialContributions,
  };
}

export function saveDatabase(data: AppDatabase): boolean {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error("Error writing database file:", err);
    return false;
  }
}
