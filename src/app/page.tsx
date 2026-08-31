import Link from "next/link";
import { getDatabase } from "@/lib/store";
import Hero from "@/components/Hero";
import MagicButton from "@/components/ui/MagicButton";
import { 
  ArrowRight, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  BookOpen,
  Code2,
  Database,
  Bot,
  Briefcase,
  Zap,
  ExternalLink,
  ShieldCheck,
  Layers,
  Calendar,
  MapPin
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function Home() {
  const db = getDatabase();
  const { profile, projects, articles, learning, skills, experience } = db;

  const leadProject = projects.find(p => p.slug === "telex-ai-monitoring-agent") || projects[0];
  const secondaryProjects = projects.filter(p => p.id !== leadProject.id).slice(0, 3);
  const featuredArticles = articles.filter(a => a.published).slice(0, 2);

  return (
    <div className="space-y-24 sm:space-y-32 py-6">
      {/* 1. Hero Section with Picture & Magic Button */}
      <Hero profile={profile} />

      {/* 2. Core Technical Focus (FIRST AFTER HERO) */}
      <section className="space-y-8">
        <div className="border-b border-border/80 pb-4 text-center flex flex-col items-center justify-center">
          <div className="inline-flex items-center justify-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-amber-500">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-1">
            Core Tech Stack
          </h2>
          <p className="text-sm text-center text-muted-foreground mt-1 max-w-2xl">
            Technologies and frameworks I use to build production backend software and AI agent workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-6 rounded-2xl bg-card border border-border/80 hover:border-emerald-500/50 transition-all space-y-3.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-foreground">C# & .NET</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Clean Architecture, REST APIs, Entity Framework Core, and high-performance backend microservices.
            </p>
            <span className="inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
              Backend Core
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border/80 hover:border-amber-500/50 transition-all space-y-3.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-foreground">AI Agents</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Agent reasoning with Semantic Kernel, LangChain, RAG retrieval pipelines, and LLM integrations.
            </p>
            <span className="inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold border border-amber-500/20">
              Active Focus
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border/80 hover:border-blue-500/50 transition-all space-y-3.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-foreground">Databases & Storage</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Relational modeling in PostgreSQL & SQL Server, serverless Neon Postgres, and MongoDB.
            </p>
            <span className="inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold border border-blue-500/20">
              Relational & NoSQL
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border/80 hover:border-purple-500/50 transition-all space-y-3.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-foreground">TypeScript & Python</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              FastAPI, Node.js/Express, Next.js App Router, and clean full-stack web applications.
            </p>
            <span className="inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold border border-purple-500/20">
              Full-Stack & APIs
            </span>
          </div>
        </div>
      </section>

      {/* 3. Selected Work */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-border/80 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Projects</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-1">
              Selected Work
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs font-mono font-medium text-primary hover:underline inline-flex items-center gap-1 shrink-0"
          >
            All Projects ({projects.length}) <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Lead Flagship Project Showcase */}
        {leadProject && (
          <div className="relative rounded-2xl bg-card border-2 border-primary/40 p-6 sm:p-8 space-y-6 shadow-lg overflow-hidden">
            {/* Background Accent Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  FEATURED PROJECT
                </span>
                <span className="text-xs font-mono text-muted-foreground">{leadProject.date}</span>
              </div>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-medium">
                {leadProject.category}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight hover:text-primary transition-colors">
                  <Link href={`/projects/${leadProject.slug}`}>
                    {leadProject.title}
                  </Link>
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {leadProject.tagline}
                </p>

                <div className="p-4 rounded-xl bg-secondary/50 border border-border/70 space-y-2 text-xs">
                  <span className="font-mono font-bold text-foreground flex items-center gap-1.5 uppercase text-[11px] text-amber-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" /> Project Overview
                  </span>
                  <p className="text-muted-foreground leading-relaxed">
                    {leadProject.architecture}
                  </p>
                </div>
              </div>

              {/* Technical Metrics Panel */}
              <div className="lg:col-span-4 p-5 rounded-xl bg-background border border-border/90 space-y-4 font-mono text-xs">
                <div className="space-y-1">
                  <span className="text-muted-foreground text-[10px] uppercase">Primary Tech Stack</span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {leadProject.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-secondary text-foreground text-[11px] border border-border/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-border/60 space-y-2">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-muted-foreground">Focus:</span>
                    <span className="text-emerald-500 font-semibold">C# .NET AI Agent System</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-muted-foreground">Orchestration:</span>
                    <span className="text-amber-500 font-semibold">Semantic Kernel</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/projects/${leadProject.slug}`}
                    className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-center text-xs flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Case Studies Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {secondaryProjects.map((project) => (
            <div 
              key={project.id} 
              className="p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-secondary text-foreground border border-border/60 text-[10px]">
                    {project.category}
                  </span>
                  <span className="text-muted-foreground text-[11px]">{project.date}</span>
                </div>

                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {project.tagline}
                </p>
              </div>

              <div className="pt-3 border-t border-border/60 space-y-3">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-secondary text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] font-mono px-1 py-0.5 text-muted-foreground">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="text-xs font-mono text-primary font-semibold hover:underline inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>View Project</span> <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Career Timeline Summary */}
      <section className="space-y-8 pt-4 border-t border-border/80">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-border/80 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-primary">
              <Briefcase className="w-3.5 h-3.5 text-emerald-500" />
              <span>Experience & Growth</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-1">
              Career History
            </h2>
          </div>
          <Link 
            href="/experience" 
            className="text-xs font-mono font-medium text-primary hover:underline inline-flex items-center gap-1 shrink-0"
          >
            <span>View Full Timeline ({experience.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Experience Connected Vertical Pipeline Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/30 space-y-10">
          {experience.map((exp, idx) => (
            <div key={exp.id} className="relative space-y-3">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <div className={`w-2 h-2 rounded-full ${idx === 0 ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`}></div>
              </div>

              {/* Role & Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-2.5">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-xs font-mono text-primary flex items-center gap-2 mt-0.5">
                    <span className="font-bold text-foreground">{exp.company}</span>
                    <span>·</span>
                    <span className="text-muted-foreground">{exp.employmentType}</span>
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 sm:gap-1 text-xs font-mono text-muted-foreground shrink-0">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {exp.description}
              </p>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 font-mono text-xs pt-1">
                {exp.techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-0.5 rounded bg-secondary text-foreground text-[11px] border border-border/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Technical Articles / Engineering Writing (LAST BEFORE CTA)
      <section className="space-y-8 pt-4 border-t border-border/80">
        <div className="flex items-center justify-between border-b border-border/80 pb-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block">
              Technical Writing
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-0.5">
              Engineering Articles & Guides
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Practitioner notes on async architecture, .NET Core performance, and design patterns.
            </p>
          </div>
          <Link href="/writing" className="text-xs font-mono text-primary hover:underline inline-flex items-center gap-1 shrink-0">
            All Articles ({articles.length}) <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredArticles.map((article) => (
            <article 
              key={article.id} 
              className="p-6 rounded-2xl border border-border/80 bg-card hover:border-primary/50 transition-colors space-y-3 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <span className="text-emerald-500 font-semibold">{article.publishedAt}</span>
                  <span>·</span>
                  <span>{article.readingTime}</span>
                </div>
                <h3 className="font-bold text-foreground text-lg hover:text-primary transition-colors">
                  <Link href={`/writing/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/writing/${article.slug}`}
                  className="text-xs font-mono text-primary font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>Read Article</span> <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section> */}

      {/* 6. Call to Action Banner (FINAL SECTION BEFORE FOOTER) */}
      <section className="p-8 sm:p-14 rounded-3xl bg-card border-2 border-primary/20 text-center space-y-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 blur-3xl pointer-events-none"></div>

        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground max-w-xl mx-auto relative z-10">
          Interested in building reliable software systems?
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto relative z-10">
          Whether you have a software engineering opportunity, a contract, or a project, my inbox is open.
        </p>
        <div className="pt-2 flex justify-center relative z-10">
          <Link href="/contact">
            <MagicButton
              title="Start a Technical Conversation"
              icon={<ArrowRight className="w-4 h-4" />}
              position="right"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
