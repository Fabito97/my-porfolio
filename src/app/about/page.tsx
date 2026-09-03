import Link from "next/link";
import { getDatabase } from "@/lib/store";
import { 
  ArrowRight, 
  Mail, 
  Code2, 
  Cpu, 
  Database, 
  Layers, 
  Globe, 
  Bot, 
  Sparkles,
  BookOpen,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  Target,
  GraduationCap,
  Award
} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function AboutPage() {
  const db = getDatabase();
  const { profile, projects, experience, skills, education, certifications } = db;

  const roles = [
    {
      id: "backend",
      title: "Backend Engineering",
      badge: "Core Foundation",
      icon: Cpu,
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-500/10 border-emerald-500/20",
      description: "Designing high-performance APIs, robust services, and structured database architectures. I focus on clean architecture, asynchronous execution, and data integrity under load.",
      technologies: ["C# / ASP.NET Core", "Python (FastAPI)", "PostgreSQL", "MongoDB", "REST APIs", "Docker"]
    },
    {
      id: "fullstack",
      title: "Full-Stack Development",
      badge: "Production Delivery",
      icon: Layers,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10 border-blue-500/20",
      description: "Bridging solid backend APIs with reactive client web applications. Building unified full-stack software combining content management, event workflows, payments, and authentication.",
      technologies: ["Next.js (App Router)", "TypeScript", "React", "Cloudflare D1", "Tailwind CSS", "REST & State Flows"]
    },
    {
      id: "ai",
      title: "AI Application Engineering",
      badge: "Intelligent Systems",
      icon: Bot,
      iconColor: "text-amber-500",
      iconBg: "bg-amber-500/10 border-amber-500/20",
      description: "Connecting language models to real application data and workflows. Experienced with controlled tool calling, multi-step RAG retrieval pipelines, and orchestration frameworks.",
      technologies: ["Vercel AI SDK", "Semantic Kernel", "LangChain", "RAG & ChromaDB", "Tool Calling", "Embeddings"]
    },
    {
      id: "cloud",
      title: "Cloud & Deployment",
      badge: "Infrastructure & CI/CD",
      icon: Globe,
      iconColor: "text-purple-500",
      iconBg: "bg-purple-500/10 border-purple-500/20",
      description: "Containerizing software and automating reliable continuous delivery pipelines. Configuring edge infrastructure, serverless databases, reverse proxies, and cloud compute.",
      technologies: ["Cloudflare", "Docker", "AWS EC2", "GitHub Actions CI/CD", "Nginx", "Docker Compose"]
    }
  ];

  const philosophies = [
    {
      step: "01",
      title: "Acquiring",
      subtitle: "Continuous Learning",
      icon: BookOpen,
      color: "text-emerald-500",
      badgeBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      description: "Understanding system mechanics and engineering principles from first principles. I dive into specifications, architecture patterns, and emerging technologies before writing code."
    },
    {
      step: "02",
      title: "Building",
      subtitle: "Problem Solving",
      icon: Target,
      color: "text-blue-500",
      badgeBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      description: "Transforming real-world challenges into clean, maintainable, and reliable software. I take pride in crafting resilient error boundaries, testable codebases, and production-ready systems."
    },
    {
      step: "03",
      title: "Creating Value",
      subtitle: "Meaningful Impact",
      icon: Lightbulb,
      color: "text-amber-500",
      badgeBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      description: "Prioritizing solutions that deliver genuine, measurable outcomes. Whether optimizing backend latency or automating repetitive workflows, the goal is always creating software that helps users and teams."
    },
    {
      step: "04",
      title: "Teaching",
      subtitle: "Knowledge Sharing",
      icon: HeartHandshake,
      color: "text-purple-500",
      badgeBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      description: "Believing that knowledge grows when shared. I document technical findings, write architectural breakdowns, and mentor fellow developers to help elevate the collective engineering craft."
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 max-w-5xl mx-auto py-6">
      {/* 1. Hero / Personal Narrative */}
      <section className="space-y-8 border-b border-border/80 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Software Engineer · Nigeria</span>
        </div>

        <div className="space-y-5 max-w-4xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.18]">
            Software Engineer
          </h1>
          
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              I’m a Software Engineer with experience building backend systems, full-stack web applications, and AI-powered software.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground/90">
              I work primarily with C#/.NET, TypeScript/Next.js, and Python/FastAPI. My experience includes building APIs, database-backed applications, authentication and business workflows, AI integrations, Retrieval-Augmented Generation systems, and cloud deployments.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground/90">
              I’ve worked in fast-paced remote engineering environments where projects were delivered in stages and teams collaborated across APIs, integrations, AI workflows, deployment, and infrastructure. My work has also included client applications combining content management, event workflows, payments, and AI-powered customer support.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground/90">
              My current focus is on building practical AI systems that connect language models to real software—application data, business workflows, APIs, and controlled tools.
            </p>
          </div>
        </div>

        {/* Quick Highlights / Navigation Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          <Link
            href="/projects"
            className="p-5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 transition-all group shadow-sm"
          >
            <div className="text-2xl font-extrabold text-foreground font-mono flex items-center gap-1 group-hover:text-primary transition-colors">
              <span>{projects.length}</span>
              <span className="text-xs text-emerald-500 font-normal">Projects</span>
            </div>
            <div className="text-xs text-muted-foreground font-mono mt-1.5 flex items-center justify-between">
              <span>Selected Work</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/experience"
            className="p-5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 transition-all group shadow-sm"
          >
            <div className="text-2xl font-extrabold text-foreground font-mono flex items-center gap-1 group-hover:text-primary transition-colors">
              <span>{experience.length}</span>
              <span className="text-xs text-amber-500 font-normal">Roles</span>
            </div>
            <div className="text-xs text-muted-foreground font-mono mt-1.5 flex items-center justify-between">
              <span>Career History</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <div className="p-5 rounded-2xl bg-card border border-border/80 shadow-sm">
            <div className="text-2xl font-extrabold text-foreground font-mono">
              Remote
            </div>
            <div className="text-xs text-muted-foreground font-mono mt-1.5">
              Global Collaboration
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-border/80 shadow-sm">
            <div className="text-2xl font-extrabold text-emerald-500 font-mono">
              Ready
            </div>
            <div className="text-xs text-muted-foreground font-mono mt-1.5">
              Available for Hire
            </div>
          </div>
        </div>
      </section>

      {/* 2. Roles & Engineering Focus */}
      <section className="space-y-8">
        <div className="border-b border-border/80 pb-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-primary">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specializations</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-1">
            Engineering Roles & Focus Areas
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-1 max-w-2xl">
            A breakdown of the domains and engineering roles I actively operate in, from backend microservices to full-stack applications and AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <div 
                key={role.id}
                className="p-6 sm:p-7 rounded-2xl bg-card border border-border/90 hover:border-primary/40 transition-all space-y-4 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${role.iconBg}`}>
                      <Icon className={`w-5 h-5 ${role.iconColor}`} />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-secondary border border-border/60 text-muted-foreground font-medium">
                      {role.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground">
                    {role.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {role.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60">
                  <span className="text-[11px] font-mono font-semibold uppercase text-muted-foreground/90 block mb-2">
                    Key Technologies & Practices:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {role.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-secondary/70 border border-border/60 text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Academic Background & Education */}
      <section className="space-y-8">
        <div className="border-b border-border/80 pb-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-amber-500">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Professional Training</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-1">
            Education
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-1 max-w-2xl">
            My academic foundation in English and Literature combined with rigorous software engineering training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item) => (
            <div 
              key={item.id || item.institution}
              className="p-6 sm:p-7 rounded-2xl bg-card border border-border/90 space-y-4 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    {item.year}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {item.institution}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {item.degree}
                  </h3>
                  <p className="text-xs font-mono text-primary mt-0.5">
                    {item.institution}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-foreground font-semibold">Academic Credential</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Certifications & Specialized Training */}
      <section className="space-y-8">
        <div className="border-b border-border/80 pb-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <Award className="w-3.5 h-3.5 text-emerald-500" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-1">
            Certifications
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-1 max-w-2xl">
            Specialized engineering certifications and cloud infrastructure credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((item) => (
            <div 
              key={item.id}
              className="p-6 rounded-2xl bg-card border border-border/90 space-y-4 shadow-sm flex flex-col justify-between hover:border-primary/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                    {item.year}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {item.issuer}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-primary mt-0.5">
                    {item.issuer}
                  </p>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-foreground font-semibold">Verified Credential</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Categorized Skills Taxonomy */}
      <section className="space-y-8">
        <div className="border-b border-border/80 pb-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <Cpu className="w-3.5 h-3.5 text-emerald-500" />
            <span>Categorized Engineering Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-1">
            Technical Skills & Tools
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-1 max-w-2xl">
            A comprehensive overview of programming languages, frameworks, databases, and engineering tools I utilize in production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div 
              key={group.id} 
              className="p-6 rounded-2xl bg-card border border-border/90 hover:border-primary/40 transition-colors space-y-4 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <h3 className="font-bold text-base text-foreground font-mono flex items-center gap-2">
                    {group.id === "languages" && <Code2 className="w-4 h-4 text-emerald-500" />}
                    {group.id === "backend" && <Cpu className="w-4 h-4 text-amber-500" />}
                    {group.id === "frontend" && <Globe className="w-4 h-4 text-blue-500" />}
                    {group.id === "database" && <Database className="w-4 h-4 text-purple-500" />}
                    {group.id === "ai_cloud" && <Bot className="w-4 h-4 text-emerald-500" />}
                    {group.category}
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {group.skills.map((sk) => (
                    <div key={sk.name} className="flex items-center justify-between text-xs font-mono">
                      <span className="text-foreground font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>
                        {sk.name}
                      </span>
                      {sk.experienceYears && (
                        <span className="text-[10px] text-muted-foreground px-2 py-0.5 rounded bg-secondary border border-border/50">
                          {sk.experienceYears}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-foreground font-semibold">Tested in Production</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Core Philosophy */}
      <section className="p-8 sm:p-10 rounded-3xl bg-secondary/30 border border-border/80 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mt-0.5">
              Core Philosophy
            </h2>
          </div>
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 font-semibold w-fit">
            Acquire · Build · Value · Teach
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {philosophies.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.step}
                className="p-5 rounded-2xl bg-card border border-border space-y-3 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-muted-foreground">{item.step}</span>
                    <div className={`p-1.5 rounded-lg ${item.badgeBg}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                    <span className="text-xs font-mono text-muted-foreground block">{item.subtitle}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Direct Connect & Call to Action */}
      <div className="pt-6 flex flex-wrap gap-4 items-center justify-between border-t border-border/80">
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-secondary border border-border text-foreground hover:bg-secondary/80 transition-colors shadow-sm"
            title="GitHub Profile"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-secondary border border-border text-foreground hover:bg-secondary/80 transition-colors shadow-sm"
            title="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5 text-blue-500" />
          </a>
          <a
            href={profile.twitter}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-secondary border border-border text-foreground hover:bg-secondary/80 transition-colors shadow-sm"
            title="Twitter / X Profile"
          >
            <FaXTwitter className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="p-3 rounded-xl bg-secondary border border-border text-foreground hover:bg-secondary/80 transition-colors shadow-sm"
            title="Email Direct"
          >
            <Mail className="w-5 h-5 text-emerald-500" />
          </a>
        </div>

        <Link
          href="/contact"
          className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors inline-flex items-center gap-2 shadow-md"
        >
          <span>Get in Touch</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
