import { Project, Article, LearningItem, SkillGroup, ExperienceEntry, Contribution, SiteProfile, EducationEntry, CertificationEntry } from './types';
import fs from 'fs';
import path from 'path';

export const initialProfile: SiteProfile = {
  name: "Fabian Muoghalu",
  title: "Software Engineer",
  headline: "Software Engineer | Backend, Full-Stack & AI Applications",
  heroStatement: "I build backend systems, full-stack applications, and practical AI-powered software.",
  bio: "Software Engineer with experience building backend services, full-stack web applications, and practical AI-powered software across C#/.NET, TypeScript/Next.js, and Python/FastAPI.",
  shortAbout: "I’m a Software Engineer focused on building backend systems, full-stack applications, and practical AI-powered software.\n\nMy work spans C#/.NET, TypeScript/Next.js, and Python/FastAPI, with experience building APIs, database-backed applications, AI integrations, tool-calling workflows, and Retrieval-Augmented Generation systems.\n\nI enjoy working on systems where traditional software engineering and AI meet—connecting models to real application data, business workflows, and useful tools.",
  extendedAbout: "I’m a Software Engineer with experience building backend systems, full-stack web applications, and AI-powered software.\n\nI work primarily with C#/.NET, TypeScript/Next.js, and Python/FastAPI. My experience includes building APIs, database-backed applications, authentication and business workflows, AI integrations, Retrieval-Augmented Generation systems, and cloud deployments.\n\nI’ve worked in fast-paced remote engineering environments where projects were delivered in stages and teams had to collaborate across APIs, integrations, AI workflows, deployment, and infrastructure. My work has also included client applications combining content management, event workflows, payments, and AI-powered customer support.\n\nMy current focus is on building practical AI systems that connect language models to real software—application data, business workflows, APIs, and controlled tools.",
  philosophy: "Acquire -> Build -> Value -> Teach",
  location: "Nigeria",
  email: "fabianmuoghalu97@gmail.com",
  phone: "+2348104636559",
  github: "https://github.com/Fabito97",
  linkedin: "https://www.linkedin.com/in/fabian-muoghalu-37aa7a1a9/",
  twitter: "https://x.com/MuoghaluFabian",
  availableForHire: true,
  currentFocus: "Backend APIs, full-stack applications, and AI agent workflows.",
};

export const initialProjects: Project[] = [
  {
    id: "masin-advisory-group-platform",
    slug: "masin-advisory-group-platform",
    title: "Masin Advisory Group Platform",
    tagline: "Full-stack business platform combining content, events, payments, and AI-powered customer support.",
    category: "Full-Stack Application / AI Integration",
    type: "Professional Client Work",
    organization: "Masin Advisory Group",
    liveUrl: "https://masinadvisory.com",
    isPrivateRepo: true,
    privateRepoNote: "Source code is private due to client ownership.",
    featured: true,
    published: true,
    date: "2025",
    problem: "The client required multiple business and customer-facing capabilities to operate within a unified web platform. Instead of managing separate systems for content publishing, events, customer registration, payments, and support, the application needed to bring these workflows together into a single product.",
    role: "Software Engineer. Worked across frontend development, server-side application development, database workflows, event management, payment workflows, AI integration, and Cloudflare infrastructure.",
    architecture: "Built as a full-stack Next.js application with server-side logic and Cloudflare D1 for database workflows. The AI support assistant uses the Vercel AI SDK with controlled tool calling (Grok / Cloudflare AI) to invoke predefined application functions for customer inquiries, booking workflows, and delivery-related information.",
    decisions: [
      "Unified Next.js Codebase: Consolidated content management, event booking, payment handling, and customer support into a single maintainable repository.",
      "Controlled AI Tool Calling: Integrated Vercel AI SDK with explicit backend tool definitions, ensuring the model invokes specific functions rather than manipulating data directly.",
      "Cloudflare Infrastructure: Leveraged Cloudflare D1 for relational database workflows, Cloudflare AI for model execution, and edge infrastructure for media and deployment."
    ],
    challenges: [
      "Designing robust event registration and seat reservation logic to prevent double bookings during concurrent checkout flows.",
      "Enforcing strict boundaries between AI reasoning tools and sensitive payment confirmation pipelines."
    ],
    lessons: [
      "Tool-calling architecture provides safe, predictable bridges between AI models and production business operations.",
      "Combining serverless Next.js edge logic with Cloudflare D1 maximizes velocity and keeps operational complexity low."
    ],
    results: [
      "Successfully built and maintained a production client platform consolidating content publishing, event registration, payments, and AI customer support.",
      "Automated customer inquiries and booking-related workflows via controlled AI tool invocation."
    ],
    techStack: ["Next.js", "React", "TypeScript", "JavaScript", "Cloudflare D1", "Cloudflare", "Vercel AI SDK", "Grok", "Cloudflare AI"],
    order: 1
  },
  {
    id: "ai-assisted-application-monitoring-agent",
    slug: "ai-assisted-application-monitoring-agent",
    title: "AI-Assisted Application Monitoring Agent",
    tagline: "An AI-assisted application monitoring system that allows developers to investigate application activity through natural-language queries.",
    category: "Backend / AI Systems",
    type: "Professional Project",
    organization: "Telex",
    attribution: "Developed during my work at Telex, an AI Agent Collaborative Platform.",
    featured: true,
    published: true,
    date: "2025",
    githubUrl: "https://github.com/Fabito97/apm-agent",
    problem: "Application monitoring systems can generate large amounts of logs and event data. Investigating those events manually requires developers to search through stored records to understand what happened, when it happened, which parts of the application were involved, and what patterns exist in the data.",
    role: "Backend / AI Engineer (Telex Contributor). Built backend services, API endpoints, event storage workflows, AI integration, and connected natural-language queries with stored application telemetry.",
    architecture: "Built with C# and ASP.NET Core for structured API development and high-throughput telemetry ingestion, coupled with MongoDB for persistent monitoring event storage. Semantic Kernel coordinates AI workflows and connects natural-language queries with stored telemetry context.",
    decisions: [
      "AI as an Investigation Layer: Designed the system so the AI does not monitor the app directly, but accesses stored monitoring events as an intelligent exploration interface.",
      "C# / ASP.NET Core: Chosen for high-throughput asynchronous execution, low memory overhead, and strong architectural boundaries.",
      "MongoDB: Selected for flexible storage and rapid querying of semi-structured application logs and telemetry events.",
      "Semantic Kernel: Coordinated AI workflows and linked language model capabilities with backend data retrieval functions."
    ],
    challenges: [
      "Connecting unstructured natural-language developer questions with relevant structured monitoring event records.",
      "Curating high-signal context from high-volume telemetry to deliver concise, actionable diagnostic summaries."
    ],
    lessons: [
      "AI features are most effective when grounded directly in real application data rather than operating in isolation.",
      "Context quality and targeted retrieval strongly govern the accuracy and usefulness of AI diagnostic responses."
    ],
    results: [
      "Successfully integrated into the Telex collaborative agent platform.",
      "Enabled developers to query complex server logs, errors, and system telemetry through conversational interactions."
    ],
    techStack: ["C#", "ASP.NET Core", "MongoDB", "Semantic Kernel", "REST APIs"],
    order: 2
  },
  {
    id: "rag-agent-system",
    slug: "rag-agent-system",
    title: "RAG Agent System",
    tagline: "An end-to-end Retrieval-Augmented Generation system that allows users to query information contained within uploaded documents.",
    category: "AI / Python",
    type: "Personal / Technical Project",
    featured: true,
    published: true,
    date: "2025",
    githubUrl: "https://github.com/Fabito97/ragent",
    problem: "Language models do not automatically have access to private documents uploaded by users, and large documents can be difficult to search efficiently using traditional keyword matching.",
    role: "Backend / AI Engineer. Designed and implemented document ingestion, processing, chunking, embedding, vector storage, semantic retrieval, and agent-driven multi-step querying.",
    architecture: "FastAPI backend integrated with LangChain and ChromaDB. Uploaded documents are parsed, chunked, and converted into embeddings stored in ChromaDB. Queries trigger semantic search and an iterative retrieval workflow looping up to 5 times if needed before producing a grounded response.",
    decisions: [
      "FastAPI: Selected for rapid, asynchronous Python API execution and automatic OpenAPI specification generation.",
      "ChromaDB Vector Store: Used as an efficient vector database for embedding storage and semantic similarity search.",
      "Multi-Step Agentic Retrieval: Allowed the agent to perform up to 5 retrieval calls if initial context is incomplete before generating a final answer."
    ],
    challenges: [
      "Ensuring the retrieval workflow dynamically selects appropriate functions and gathers sufficient context instead of relying on a single fixed retrieval call.",
      "Optimizing document chunking boundaries to preserve semantic context across sections."
    ],
    lessons: [
      "Multi-step retrieval loops significantly improve answer fidelity for complex questions across dense documents.",
      "Grounding responses with explicit source attribution builds user trust and verification."
    ],
    results: [
      "Built complete RAG pipeline demonstrating ingestion, chunking, embeddings, vector storage, multi-step agentic retrieval, grounded AI responses, and source attribution."
    ],
    techStack: ["Python", "FastAPI", "LangChain", "ChromaDB", "LLM APIs", "Vector Embeddings"],
    order: 3
  },
  {
    id: "traidr-ecommerce-platform",
    slug: "traidr-ecommerce-platform",
    title: "Traïdr E-Commerce Platform",
    tagline: "A full-stack e-commerce MVP built as a team capstone project.",
    category: "Full-Stack Application",
    type: "Team Capstone Project",
    organization: "Decagon Institute",
    featured: true,
    published: true,
    date: "2024",
    githubUrl: "https://github.com/Fabito97/traidr_e-commerce",
    problem: "The project focused on building a functional e-commerce platform that supports core customer and product workflows including catalog search, cart operations, and authentication.",
    role: "Team Lead / Full-Stack Contributor. Led a six-member team while contributing directly to backend APIs, database models, and application development.",
    architecture: "ASP.NET Core RESTful API backend paired with a React frontend, backed by PostgreSQL and Entity Framework Core for transactional reliability.",
    decisions: [
      "PostgreSQL with EF Core: Selected for strong relational data consistency across users, products, orders, and cart items.",
      "Agile Team Leadership: Coordinated development tasks, sprint goals, and GitHub pull request reviews across 6 engineers.",
      "Decoupled RESTful APIs: Built clean controller endpoints separating catalog query logic from transactional cart mutations."
    ],
    challenges: [
      "Coordinating Git feature branching and code reviews across a 6-member engineering team under rapid delivery cycles.",
      "Eliminating database latency during product catalog filtering and search."
    ],
    lessons: [
      "Clear task delegation, code review standards, and API contract design are critical to engineering team velocity.",
      "Mastered full-stack state management and relational database architecture."
    ],
    results: [
      "Successfully delivered full-stack e-commerce MVP on schedule.",
      "Delivered core product catalog, shopping cart, authentication, and order workflows."
    ],
    techStack: ["C#", "ASP.NET Core", "PostgreSQL", "React", "EF Core", "Tailwind CSS"],
    order: 4
  },
  {
    id: "distributed-notification-system",
    slug: "distributed-notification-system",
    title: "Distributed Notification System",
    tagline: "High-throughput backend service designed for resilient, decoupled notification delivery across multiple channels.",
    category: "Backend / Distributed Systems",
    type: "Technical Project",
    featured: false,
    published: true,
    date: "2025",
    githubUrl: "https://github.com/Fabito97/distributed-notification-system",
    problem: "High-volume applications require reliable, asynchronous notification dispatch without blocking core transaction threads.",
    role: "Backend Engineer. Designed decoupled message queues and worker pipelines for fault-tolerant notification dispatch.",
    architecture: "C#/.NET backend utilizing message queues and background worker services for asynchronous email and webhook delivery.",
    decisions: [
      "Asynchronous worker pipelines to decouple API response time from notification dispatch.",
      "Retry mechanisms with exponential backoff for external notification providers."
    ],
    challenges: [
      "Ensuring message idempotency and preventing duplicate notification triggers under retry conditions."
    ],
    lessons: [
      "Deepened practical understanding of distributed messaging and background task orchestration."
    ],
    results: [
      "Reliable asynchronous notification processing architecture."
    ],
    techStack: ["C#", "ASP.NET Core", "RabbitMQ", "REST APIs", "Docker"],
    order: 5
  },
  {
    id: "ai-resume-analyzer",
    slug: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    tagline: "AI-driven tool to extract, parse, and evaluate candidate resumes against target job descriptions.",
    category: "AI Application",
    type: "Technical Project",
    featured: false,
    published: true,
    date: "2025",
    githubUrl: "https://github.com/Fabito97/ai-resume-analyzer",
    problem: "Recruiters and job applicants need structured parsing and objective skill matching between resumes and job specifications.",
    role: "Full-Stack / AI Engineer. Implemented document parsing, structured LLM extraction, and match evaluation UI.",
    architecture: "Next.js / Node.js application integrating LLM APIs for structured JSON extraction and skill relevance scoring.",
    decisions: [
      "Structured JSON schema outputs to enforce deterministic scoring formats from the language model."
    ],
    challenges: [
      "Handling varied PDF and Word document formatting styles during text extraction."
    ],
    lessons: [
      "Schema-enforced LLM responses streamline downstream frontend rendering."
    ],
    results: [
      "Automated extraction of resume skills and objective match scoring."
    ],
    techStack: ["TypeScript", "Next.js", "Node.js", "LLM Integration", "Tailwind CSS"],
    order: 6
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
    id: "backend",
    category: "Backend Engineering",
    skills: [
      { name: "C#", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "ASP.NET Core", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "Node.js", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "FastAPI", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "REST APIs", level: "Core Proficiency", experienceYears: "3+ yrs" },
      { name: "Authentication & Authorization", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "System Design", level: "Core Proficiency", experienceYears: "2+ yrs" }
    ]
  },
  {
    id: "ai_engineering",
    category: "AI Application Engineering",
    skills: [
      { name: "LLM Integration", level: "Core Proficiency", experienceYears: "1+ yrs" },
      { name: "AI Agents", level: "Core Proficiency", experienceYears: "1+ yrs" },
      { name: "Tool Calling", level: "Core Proficiency", experienceYears: "1+ yrs" },
      { name: "Retrieval-Augmented Generation (RAG)", level: "Core Proficiency", experienceYears: "1+ yrs" },
      { name: "Semantic Kernel", level: "Core Proficiency", experienceYears: "1+ yrs" },
      { name: "LangChain", level: "Core Proficiency", experienceYears: "1+ yrs" },
      { name: "Vercel AI SDK", level: "Core Proficiency", experienceYears: "1+ yrs" },
      { name: "Vector Databases", level: "Core Proficiency", experienceYears: "1+ yrs" },
      { name: "Embeddings", level: "Core Proficiency", experienceYears: "1+ yrs" }
    ]
  },
  {
    id: "frontend",
    category: "Frontend",
    skills: [
      { name: "TypeScript", level: "Core Proficiency", experienceYears: "1+ yrs" },
      { name: "JavaScript", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "React", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "Next.js", level: "Core Proficiency", experienceYears: "1+ yrs" },
      { name: "Tailwind CSS", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "HTML", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "CSS", level: "Core Proficiency", experienceYears: "2+ yrs" }
    ]
  },
  {
    id: "databases",
    category: "Databases",
    skills: [
      { name: "PostgreSQL", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "SQLite", level: "Core Proficiency", experienceYears: "1+ yrs" },
      { name: "MongoDB", level: "Core Proficiency", experienceYears: "1+ yrs" },
      { name: "SQL Server", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "Redis", level: "Working Knowledge", experienceYears: "1+ yrs" },
      { name: "ChromaDB", level: "Core Proficiency", experienceYears: "1+ yrs" }
    ]
  },
  {
    id: "devops_cloud",
    category: "Cloud & DevOps",
    skills: [
      { name: "Cloudflare", level: "Core Proficiency", experienceYears: "1+ yrs" },
      { name: "Docker", level: "Core Proficiency", experienceYears: "2+ yrs" },
      { name: "Docker Compose", level: "Core Proficiency", experienceYears: "1+ yrs" },
      { name: "AWS EC2", level: "Working Knowledge", experienceYears: "1+ yrs" },
      { name: "GitHub Actions", level: "Core Proficiency", experienceYears: "1+ yrs" },
      { name: "Nginx", level: "Working Knowledge", experienceYears: "1+ yrs" },
      { name: "CI/CD", level: "Core Proficiency", experienceYears: "1+ yrs" }
    ]
  }
];

export const initialExperience: ExperienceEntry[] = [
  {
    id: "flex-your-brands",
    company: "Flex Your Brands",
    role: "Software Engineer",
    employmentType: "Contract / Remote",
    period: "Jan 2025 – Present",
    location: "Remote",
    description: "Built and maintained a full-stack Next.js application combining content management, blog publishing, event management, and AI-powered customer support.",
    responsibilities: [
      "Built and maintained a full-stack Next.js application combining content management, blog publishing, event management, and AI-powered customer support.",
      "Integrated an AI support assistant using the Vercel AI SDK, tool calling, and LLM providers including Grok and Cloudflare AI.",
      "Designed the AI integration around defined application tools, allowing the model to invoke backend functions for customer inquiries and booking-related workflows.",
      "Developed event registration and checkout workflows covering availability, seat reservations, payment processing, payment confirmation, and registration references.",
      "Developed server-side application logic and database workflows using Next.js, TypeScript, and Cloudflare D1.",
      "Integrated Cloudflare services for media storage, AI services, and deployment infrastructure."
    ],
    achievements: [
      "Delivered unified full-stack business platform combining content, event checkout, and AI support.",
      "Engineered tool-calling AI assistant for customer booking inquiries and operational workflows."
    ],
    techStack: ["Next.js", "TypeScript", "React", "Cloudflare D1", "Vercel AI SDK", "Grok", "Cloudflare AI", "Tailwind CSS"]
  },
  {
    id: "telex",
    company: "Telex",
    role: "Backend Developer (Contributor)",
    employmentType: "Contributor / Remote",
    period: "Apr 2025 – Dec 2025",
    location: "Remote",
    description: "Contributed to backend development for AI-powered applications using C#/.NET and TypeScript on the Telex agent platform.",
    responsibilities: [
      "Contributed to backend development for AI-powered applications using C#/.NET and TypeScript.",
      "Designed and implemented backend APIs supporting AI workflows.",
      "Built multi-step orchestration workflows using Semantic Kernel.",
      "Worked with MongoDB for persistent storage and querying of application and agent data.",
      "Integrated LLM capabilities with backend services and application workflows.",
      "Developed the AI-Assisted Application Monitoring Agent during my time at Telex, allowing developers to query stored application events through natural-language interactions."
    ],
    achievements: [
      "Orchestrated multi-step AI reasoning workflows with Semantic Kernel and ASP.NET Core.",
      "Built AI-assisted application monitoring service for natural-language telemetry querying."
    ],
    techStack: ["C#", "ASP.NET Core", "TypeScript", "Semantic Kernel", "MongoDB", "REST APIs", "LLM Integration"],
    featuredLink: {
      label: "View APM Repository",
      url: "https://github.com/Fabito97/apm-agent"
    }
  },
  {
    id: "hng-tech",
    company: "HNG Tech",
    role: "Backend Engineer — HNG 12 Internship",
    employmentType: "Internship / Remote",
    period: "Feb 2025 – Apr 2025",
    location: "Remote",
    description: "Built REST APIs, modular backend services in C#/.NET, and automated CI/CD deployment pipelines to AWS EC2 under fast-paced weekly delivery cycles.",
    responsibilities: [
      "Built REST APIs and modular backend services in C#/.NET under fast-paced weekly delivery cycles.",
      "Progressed through multiple development stages involving API development, integrations, AI workflows, testing, and deployment.",
      "Worked in small backend teams to build AI-agent applications.",
      "Led a backend team responsible for improving the HNG boilerplate and coordinating implementation issues and pull requests.",
      "Containerized applications using Docker and automated deployment workflows to AWS EC2 using GitHub Actions.",
      "Configured Nginx as part of application deployment."
    ],
    achievements: [
      "Successfully completed the multi-stage HNG internship programme as a finalist.",
      "Led boilerplate backend team and automated Docker + GitHub Actions CI/CD to AWS EC2."
    ],
    techStack: ["C#", ".NET Core", "Docker", "AWS EC2", "GitHub Actions", "Nginx", "REST APIs"]
  }
];

export const initialEducation: EducationEntry[] = [
  {
    id: "edu-uniben",
    institution: "University of Benin",
    degree: "B.A.(Ed) English & Literature",
    year: "2023",
    description: "Strong foundation in critical thinking, structured reasoning, communication, and analytical problem-solving."
  },
  {
    id: "edu-decagon",
    institution: "Decagon Institute",
    degree: "Software Engineering Programme",
    year: "2024",
    description: "Intensive software engineering training covering backend and full-stack development, C#/.NET, databases, system design, APIs, and collaborative software development."
  }
];

export const initialCertifications: CertificationEntry[] = [
  {
    id: "cert-hng",
    issuer: "HNG Tech",
    title: "Backend Engineering Certificate",
    year: "2025",
    description: "Completed the HNG 12 Backend Engineering programme, working through staged software engineering challenges involving backend APIs, integrations, AI workflows, team collaboration, deployment, and production-oriented development."
  },
  {
    id: "cert-aws",
    issuer: "CloudSec Network",
    title: "AWS Cloud Bootcamp Certificate",
    year: "2025",
    description: "Training covering AWS cloud infrastructure, EC2, deployment, and containerized application environments."
  },
  {
    id: "cert-decagon",
    issuer: "Decagon Institute",
    title: "Software Engineering Certificate",
    year: "2024",
    description: "Formal certification awarded upon completing full-stack and backend engineering curriculum across C#/.NET Core, database design, and agile teamwork."
  }
];

export const initialContributions: Contribution[] = [
  {
    id: "contrib-hng",
    title: "Technical Mentoring & Project Coordination",
    type: "Mentoring & Community",
    description: "Supported contributors in the HNG internship cohorts through technical discussions, engineering guidance, and team coordination, including contributor assistance and product-level coordination on internal initiatives such as VulnWatch.",
    date: "2025 – Present",
    badge: "HNG Tech · Community & Leadership"
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
  education: EducationEntry[];
  certifications: CertificationEntry[];
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
        education: parsed.education || initialEducation,
        certifications: parsed.certifications || initialCertifications,
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
    education: initialEducation,
    certifications: initialCertifications,
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
