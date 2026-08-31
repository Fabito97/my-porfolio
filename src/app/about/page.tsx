import Link from "next/link";
import { getDatabase } from "@/lib/store";
import { 
  User, 
  Terminal, 
  ArrowRight, 
  Mail, 
  Briefcase, 
  Code2, 
  BookOpen, 
  ExternalLink,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Cpu,
  Database,
  Layers,
  Wrench,
  Globe
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function AboutPage() {
  const db = getDatabase();
  const { profile, projects, experience, articles, skills } = db;

  return (
    <div className="space-y-20 sm:space-y-28 max-w-5xl mx-auto py-6">
      {/* 1. Header & Identity Summary */}
      <div className="space-y-8 border-b border-border/80 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Software Engineer · C# .NET & Full-Stack</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Building software systems rooted in <span className="text-primary underline decoration-primary/30 underline-offset-4">measurable reliability</span> and clean code.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Software engineer based in Nigeria. Focused on backend system design with C#/.NET Core, Python (FastAPI), TypeScript, relational/NoSQL databases, and AI agent workflows.
          </p>
        </div>

        {/* Evidence Highlights Metric Track */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          <Link
            href="/projects"
            className="p-5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 transition-all group shadow-sm"
          >
            <div className="text-2xl font-extrabold text-foreground font-mono flex items-center gap-1 group-hover:text-primary transition-colors">
              <span>{projects.length}</span>
              <span className="text-xs text-emerald-500 font-normal">Shipped</span>
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
              <span>Career Positions</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/writing"
            className="p-5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 transition-all group shadow-sm"
          >
            <div className="text-2xl font-extrabold text-foreground font-mono flex items-center gap-1 group-hover:text-primary transition-colors">
              <span>{articles.length}</span>
              <span className="text-xs text-blue-500 font-normal">Guides</span>
            </div>
            <div className="text-xs text-muted-foreground font-mono mt-1.5 flex items-center justify-between">
              <span>Technical Writing</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <div className="p-5 rounded-2xl bg-card border border-border/80 shadow-sm">
            <div className="text-2xl font-extrabold text-emerald-500 font-mono">
              99.9%
            </div>
            <div className="text-xs text-muted-foreground font-mono mt-1.5">
              API Reliability Focus
            </div>
          </div>
        </div>
      </div>

      {/* 2. Concrete Evidence Story: How Skills Connect to Real Work */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-border/60 pb-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block">
              Narrative & Evidence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Engineering Impact & Career Track
            </h2>
          </div>
        </div>

        <div className="space-y-8">
          {/* Story Section A: Telex AI & Backend Webhooks */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/40 space-y-3.5">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-primary font-bold">2024 — PRESENT</span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                Active Integration
              </span>
            </div>

            <h3 className="text-xl font-bold text-foreground">
              Backend Architecture & AI Agent Workflows
            </h3>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              At <strong>Telex.im</strong> and during HNG Internship, engineered specialized backend services to process high-frequency server logs, analyze alerts, and automate multi-step workflows. Built asynchronous APIs in C# .NET that coordinate LLM reasoning via Semantic Kernel to provide structured insights.
            </p>

            <div className="pt-2 flex flex-wrap gap-2.5 text-xs font-mono">
              <Link
                href="/projects/telex-ai-monitoring-agent"
                className="px-3.5 py-2 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground border border-border/80 inline-flex items-center gap-1.5 transition-colors font-medium shadow-sm"
              >
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>Case Study: AI Monitoring Application</span>
                <ArrowRight className="w-3.5 h-3.5 text-primary" />
              </Link>

              <Link
                href="/projects/rag-agent-system"
                className="px-3.5 py-2 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground border border-border/80 inline-flex items-center gap-1.5 transition-colors font-medium shadow-sm"
              >
                <Code2 className="w-3.5 h-3.5 text-blue-500" />
                <span>Case Study: RAG Agent System</span>
                <ArrowRight className="w-3.5 h-3.5 text-primary" />
              </Link>
            </div>
          </div>

          {/* Story Section B: High-Throughput E-commerce & APIs */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-border space-y-3.5">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-border flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-muted-foreground font-bold">2023 — 2024</span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-semibold">
                E-Commerce Platform
              </span>
            </div>

            <h3 className="text-xl font-bold text-foreground">
              Relational Schemas & Scalable E-commerce Infrastructure
            </h3>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Architected the backend services for <strong>Traidr</strong>, an e-commerce platform requiring product catalog indexing, inventory management, and transaction handling. Utilized Entity Framework Core with PostgreSQL to execute optimized database queries and eliminate N+1 latency bottlenecks.
            </p>

            <div className="pt-2 flex flex-wrap gap-2.5 text-xs font-mono">
              <Link
                href="/projects/traidr-ecommerce-platform"
                className="px-3.5 py-2 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground border border-border/80 inline-flex items-center gap-1.5 transition-colors font-medium shadow-sm"
              >
                <Briefcase className="w-3.5 h-3.5 text-emerald-500" />
                <span>Case Study: Traidr Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 text-primary" />
              </Link>

              <Link
                href="/experience"
                className="px-3.5 py-2 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground border border-border/80 inline-flex items-center gap-1.5 transition-colors font-medium shadow-sm"
              >
                <span>View Experience Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-primary" />
              </Link>
            </div>
          </div>

          {/* Story Section C: Technical Writing & Sharing */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-border space-y-3.5">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-border flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-muted-foreground font-bold">CONTINUOUS</span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-semibold">
                Knowledge Sharing
              </span>
            </div>

            <h3 className="text-xl font-bold text-foreground">
              Technical Documentation & Architectural Principles
            </h3>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Strong believer in documenting engineering lessons in public. Published detailed breakdowns on non-blocking I/O in .NET 8, Clean Architecture layers in enterprise microservices, and debugging async deadlocks.
            </p>

            <div className="pt-2 flex flex-wrap gap-2.5 text-xs font-mono">
              <Link
                href="/writing/building-agentic-ai-workflows-dotnet"
                className="px-3.5 py-2 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground border border-border/80 inline-flex items-center gap-1.5 transition-colors font-medium shadow-sm"
              >
                <BookOpen className="w-3.5 h-3.5 text-primary" />
                <span>Guide: Agentic AI Workflows in .NET Core</span>
                <ArrowRight className="w-3.5 h-3.5 text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Skill-to-Impact Evidence Table */}
      <section className="space-y-6">
        <div className="border-b border-border/60 pb-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block">
            Skills & Evidence
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Technology Stack & Real-World Application
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border/90 bg-card shadow-sm">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-secondary/70 border-b border-border text-muted-foreground uppercase text-[11px]">
              <tr>
                <th className="p-4 font-bold">Core Technology</th>
                <th className="p-4 font-bold">Application Area</th>
                <th className="p-4 font-bold">Concrete Evidence / Project Proof</th>
                <th className="p-4 font-bold text-right">Reference Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-foreground">
              <tr className="hover:bg-secondary/40 transition-colors">
                <td className="p-4 font-bold text-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> C# & .NET 8
                </td>
                <td className="p-4 text-muted-foreground">Backend APIs & Webhooks</td>
                <td className="p-4">Built async HTTP alert agent for Telex.im handling server payload parsing.</td>
                <td className="p-4 text-right">
                  <Link href="/projects/telex-ai-monitoring-agent" className="text-primary hover:underline inline-flex items-center gap-1 font-semibold">
                    View Case Study <ExternalLink className="w-3 h-3" />
                  </Link>
                </td>
              </tr>

              <tr className="hover:bg-secondary/40 transition-colors">
                <td className="p-4 font-bold text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span> EF Core & PostgreSQL
                </td>
                <td className="p-4 text-muted-foreground">Relational Data Persistence</td>
                <td className="p-4">Designed indexed catalog and order models for Traidr e-commerce platform.</td>
                <td className="p-4 text-right">
                  <Link href="/projects/traidr-ecommerce-platform" className="text-primary hover:underline inline-flex items-center gap-1 font-semibold">
                    View Case Study <ExternalLink className="w-3 h-3" />
                  </Link>
                </td>
              </tr>

              <tr className="hover:bg-secondary/40 transition-colors">
                <td className="p-4 font-bold text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span> TypeScript & Next.js
                </td>
                <td className="p-4 text-muted-foreground">Full-Stack Web Development</td>
                <td className="p-4">Developed responsive SSR/SSG web interfaces with custom CMS integrations.</td>
                <td className="p-4 text-right">
                  <Link href="/projects" className="text-primary hover:underline inline-flex items-center gap-1 font-semibold">
                    View Projects <ExternalLink className="w-3 h-3" />
                  </Link>
                </td>
              </tr>

              <tr className="hover:bg-secondary/40 transition-colors">
                <td className="p-4 font-bold text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span> Gemini AI API
                </td>
                <td className="p-4 text-muted-foreground">Autonomous Intelligence</td>
                <td className="p-4">Integrated Gemini LLM pipelines for automated log analysis and blog drafting.</td>
                <td className="p-4 text-right">
                  <Link href="/projects/telex-ai-blogger-agent" className="text-primary hover:underline inline-flex items-center gap-1 font-semibold">
                    View Case Study <ExternalLink className="w-3 h-3" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Categorized Skills Taxonomy (Directly before Operational Blueprint) */}
      <section className="space-y-8">
        <div className="border-b border-border/80 pb-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <Cpu className="w-3.5 h-3.5 text-emerald-500" />
            <span>Categorized Engineering Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mt-1">
            Technical Skills & Tools
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            A comprehensive taxonomy of programming languages, frameworks, databases, and engineering tools I utilize in production.
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
                    {group.id === "ai_cloud" && <Zap className="w-4 h-4 text-emerald-500" />}
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

              <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
                <span className="text-emerald-500 font-semibold">• Tested in Production</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Operational Blueprint / Career Roadmap */}
      <section className="p-8 sm:p-10 rounded-3xl bg-secondary/30 border border-border/80 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground block">
              Execution Methodology
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-0.5">
              My Operational Blueprint
            </h2>
          </div>
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 font-semibold w-fit">
            Disciplined Practice
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
          <div className="p-5 rounded-2xl bg-card border border-border space-y-2">
            <span className="text-emerald-500 font-bold text-sm block">01. LEARN</span>
            <p className="text-foreground font-bold text-sm">Study Deep Specs</p>
            <p className="text-muted-foreground text-xs leading-relaxed">Analyze protocol RFCs, data structures, and architectural trade-offs before writing code.</p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-border space-y-2">
            <span className="text-emerald-500 font-bold text-sm block">02. BUILD</span>
            <p className="text-foreground font-bold text-sm">Production Code</p>
            <p className="text-muted-foreground text-xs leading-relaxed">Implement clean, testable C# .NET & TypeScript codebases with proper error boundaries.</p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-border space-y-2">
            <span className="text-amber-500 font-bold text-sm block">03. SHARE</span>
            <p className="text-foreground font-bold text-sm">Document Lessons</p>
            <p className="text-muted-foreground text-xs leading-relaxed">Publish clear architecture guides for the engineering community to accelerate team growth.</p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-border space-y-2">
            <span className="text-blue-500 font-bold text-sm block">04. CONTRIBUTE</span>
            <p className="text-foreground font-bold text-sm">Open Source & Mentorship</p>
            <p className="text-muted-foreground text-xs leading-relaxed">Help junior developers through code reviews and contribute to developer tooling.</p>
          </div>
        </div>
      </section>

      {/* 6. Direct Connect Banner */}
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
            href={`mailto:${profile.email}`}
            className="p-3 rounded-xl bg-secondary border border-border text-foreground hover:bg-secondary/80 transition-colors shadow-sm"
            title="Email Direct"
          >
            <Mail className="w-5 h-5 text-emerald-500" />
          </a>
        </div>

        <Link
          href="/contact"
          className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors inline-flex items-center gap-2 shadow-md"
        >
          <span>Start a Technical Conversation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
