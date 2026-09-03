import Link from "next/link";
import { getDatabase } from "@/lib/store";
import { 
  ArrowRight, 
  ExternalLink, 
  Code2, 
  Zap, 
  ShieldCheck, 
  Database,
  Layers,
  Terminal
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function ProjectsPage() {
  const db = getDatabase();
  const projects = db.projects.filter((p) => p.published);

  return (
    <div className="space-y-16 sm:space-y-20 max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="space-y-4 border-b border-border/80 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <Code2 className="w-4 h-4 text-emerald-500" />
          <span>Projects</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Selected Work
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
          Applications, AI agents, and backend services I have designed and deployed.
        </p>
      </div>

      {/* Featured System Breakdown Section */}
      <div className="space-y-10">
        {projects.map((project, idx) => (
          <article 
            key={project.id}
            className="p-6 sm:p-8 rounded-2xl bg-card border border-border/90 hover:border-primary/50 transition-all duration-300 space-y-6 shadow-sm"
          >
            {/* Top Bar Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">0{idx + 1}</span>
                <span className="text-border">|</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                  {project.category}
                </span>
              </div>
              <span className="text-muted-foreground">{project.date}</span>
            </div>

            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight hover:text-primary transition-colors">
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {project.tagline}
                </p>

                {project.attribution && (
                  <p className="text-xs font-mono text-amber-600 dark:text-amber-400 font-medium">
                    {project.attribution}
                  </p>
                )}

                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border/60 space-y-1.5">
                    <span className="font-mono font-bold text-amber-500 uppercase text-[10px] block">
                      Problem Statement
                    </span>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-secondary/50 border border-border/60 space-y-1.5">
                    <span className="font-mono font-bold text-emerald-500 uppercase text-[10px] block">
                      Solution & Overview
                    </span>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar Tech Specs & Actions */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-background border border-border space-y-5 font-mono text-xs shadow-sm">
                <div className="space-y-2">
                  <span className="text-muted-foreground text-[10px] uppercase font-bold">Tech Stack</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-secondary text-foreground text-[11px] border border-border/50 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60 space-y-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-center text-xs flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-muted-foreground text-xs font-mono">
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-foreground inline-flex items-center gap-1 font-semibold"
                        >
                          <FaGithub className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                      {project.isPrivateRepo && !project.githubUrl && (
                        <span className="text-[11px] text-muted-foreground/80 italic">
                          Private repo
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-amber-500 inline-flex items-center gap-1 font-semibold"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-amber-500" />
                          <span>Demo</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-emerald-500 inline-flex items-center gap-1 font-semibold"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Live Site</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
