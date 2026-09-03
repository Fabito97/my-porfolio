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
  const { profile, projects, skills, experience } = db;

  // 4 Primary Featured Projects in recommended order
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);

  return (
    <div className="w-full flex flex-col">
      {/* 1. Full-Bleed Edge-to-Edge Hero Section */}
      <Hero profile={profile} />

      {/* 2. Constrained Main Content Stream */}
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 space-y-24 sm:space-y-32 py-12 sm:py-16">
        {/* Core Technical Focus */}
        <section className="space-y-8">
        <div className="border-b border-border/80 pb-4 text-center flex flex-col items-center justify-center">
          <div className="inline-flex items-center justify-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-amber-500">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-1">
            Core Expertise
          </h2>
          <p className="text-sm text-center text-muted-foreground mt-1 max-w-2xl">
            Technologies and engineering practices I use to build production backend systems, full-stack applications, and AI-powered software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-6 rounded-2xl bg-card border border-border/80 hover:border-emerald-500/50 transition-all space-y-3.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-foreground">Backend & Systems</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              C# / ASP.NET Core, FastAPI, REST APIs, clean architecture, authentication, and high-throughput microservices.
            </p>
            <span className="inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
              Core Discipline
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border/80 hover:border-amber-500/50 transition-all space-y-3.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-foreground">AI Applications</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Practical AI systems, controlled tool calling, Vercel AI SDK, Semantic Kernel, LangChain, and multi-step RAG pipelines.
            </p>
            <span className="inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold border border-amber-500/20">
              Active Focus
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border/80 hover:border-purple-500/50 transition-all space-y-3.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-foreground">Full-Stack Web</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Next.js App Router, TypeScript, React, serverless logic, responsive UI, event management, and payment checkout flows.
            </p>
            <span className="inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold border border-purple-500/20">
              Client & Production
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border/80 hover:border-blue-500/50 transition-all space-y-3.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-foreground">Databases & Cloud</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              PostgreSQL, Cloudflare D1, MongoDB, ChromaDB, Docker containerization, and automated GitHub Actions CI/CD to AWS EC2.
            </p>
            <span className="inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold border border-blue-500/20">
              Storage & DevOps
            </span>
          </div>
        </div>
      </section>

      {/* 3. Featured Projects (4 Cards) */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-border/80 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-1">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs font-mono font-medium text-primary hover:underline inline-flex items-center gap-1 shrink-0"
          >
            All Projects ({projects.length}) <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Featured Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, idx) => (
            <div 
              key={project.id} 
              className="p-6 sm:p-7 rounded-2xl bg-card border border-border/90 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between space-y-5 group shadow-sm relative overflow-hidden"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">0{idx + 1}</span>
                    <span className="text-border">|</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-secondary text-foreground border border-border/60 text-[10px] font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-[11px]">{project.date}</span>
                </div>

                <h3 className="font-extrabold text-xl text-foreground group-hover:text-primary transition-colors tracking-tight">
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {project.tagline}
                </p>

                {project.attribution && (
                  <p className="text-[11px] font-mono text-amber-600 dark:text-amber-400/90 pt-0.5">
                    {project.attribution}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-border/60 space-y-3.5">
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[11px] px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border/50">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[11px] px-1.5 py-0.5 text-muted-foreground">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-xs font-mono text-primary font-bold hover:underline inline-flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>View Case Study</span> <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-2.5 text-xs font-mono text-muted-foreground">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-foreground inline-flex items-center gap-1"
                        title="GitHub Repository"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-emerald-500 inline-flex items-center gap-1 font-medium"
                        title="Live Site"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Live</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-amber-500 inline-flex items-center gap-1 font-medium"
                        title="Demo Preview"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-amber-500" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Career Timeline Summary */}
      <section className="space-y-8 pt-4 border- border-border/80">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-border/80 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-primary">
              <Briefcase className="w-3.5 h-3.5 text-emerald-500" />
              <span>Experience & Growth</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-1">
              Experience Timeline
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

      {/* 5. Categorized Technical Skills */}
      <section className="space-y-8 pt-4 border-t border-border/80">
        <div className="border-b border-border/80 pb-4 text-center flex flex-col items-center justify-center">
          <div className="inline-flex items-center justify-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <Cpu className="w-3.5 h-3.5 text-emerald-500" />
            <span>Categorized Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-1">
            Technical Skills
          </h2>
          <p className="text-sm text-center text-muted-foreground mt-1 max-w-2xl">
            Tools, languages, and frameworks grouped by demonstrated capability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div 
              key={group.id} 
              className="p-6 rounded-2xl bg-card border border-border/90 hover:border-primary/40 transition-colors space-y-4 shadow-sm"
            >
              <h3 className="font-bold text-base text-foreground font-mono border-b border-border/60 pb-2.5">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((sk) => (
                  <span 
                    key={sk.name}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-foreground border border-border/50"
                  >
                    {sk.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Call to Action Banner (FINAL SECTION BEFORE FOOTER) */}
      <section className="p-8 sm:p-14 rounded-3xl bg-card border-2 border-primary/20 text-center space-y-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 blur-3xl pointer-events-none"></div>

        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground max-w-xl mx-auto relative z-10">
          Interested in building reliable software systems?
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto relative z-10">
          Whether you have a software engineering opportunity, a contract, or an AI workflow project, my inbox is open.
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
    </div>
  );
}
