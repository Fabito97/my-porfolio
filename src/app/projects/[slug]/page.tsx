import { getDatabase } from "@/lib/store";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2, Cpu, Wrench, Lightbulb, Trophy } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const db = getDatabase();
  const project = db.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      {/* Back Link */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Case Studies
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 border-b border-border/80 pb-8">
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
            {project.category}
          </span>
          {project.type && (
            <span className="px-2.5 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border/60">
              {project.type}
            </span>
          )}
          <span className="text-muted-foreground">{project.date}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          {project.tagline}
        </p>

        {/* Attribution & Context Notice */}
        {project.attribution && (
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-600 dark:text-amber-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span>{project.attribution}</span>
          </div>
        )}

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-secondary text-foreground text-xs font-mono font-semibold hover:bg-secondary/80 border border-border flex items-center gap-2 shadow-sm transition-colors"
            >
              <FaGithub className="w-4 h-4" /> View GitHub Repository
            </a>
          )}

          {project.isPrivateRepo && (
            <div className="px-4 py-2 rounded-xl bg-secondary/60 text-muted-foreground text-xs font-mono border border-border flex items-center gap-2">
              <FaGithub className="w-4 h-4 text-muted-foreground" />
              <span>{project.privateRepoNote || "Source code is private due to client ownership."}</span>
            </div>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-mono font-semibold hover:bg-amber-500/20 border border-amber-500/30 flex items-center gap-2 shadow-sm transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-amber-500" /> Watch Live Demo
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-mono font-semibold hover:bg-primary/90 flex items-center gap-2 shadow-sm transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Live Application
            </a>
          )}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="p-4 rounded-xl bg-card border border-border space-y-2">
        <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
          Technologies & Tools
        </h2>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Core Breakdown Grid */}
      <div className="space-y-10">
        {/* Problem & Role */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl border border-border bg-card space-y-3">
            <h3 className="text-sm font-mono font-bold text-primary uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Problem Statement
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card space-y-3">
            <h3 className="text-sm font-mono font-bold text-primary uppercase tracking-wider flex items-center gap-2">
              <Wrench className="w-4 h-4" /> Role & Contributions
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.role}
            </p>
          </div>
        </div>

        {/* Architecture */}
        <div className="p-6 rounded-xl border border-border bg-card space-y-4">
          <h3 className="text-lg font-bold text-foreground">System Architecture & Design</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.architecture}
          </p>
        </div>

        {/* Key Architectural Decisions */}
        {project.decisions.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" /> Key Engineering Decisions
            </h3>
            <ul className="space-y-2">
              {project.decisions.map((decision, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground p-3 rounded-lg bg-card border border-border/60">
                  <span className="font-mono text-xs font-bold text-primary shrink-0 mt-0.5">{i + 1}.</span>
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Challenges & Lessons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.challenges.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-foreground">Challenges Overcome</h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="text-xs text-muted-foreground p-3 rounded-lg bg-card border border-border/60 leading-relaxed">
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.lessons.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-foreground">Lessons Learned</h3>
              <ul className="space-y-2">
                {project.lessons.map((lesson, i) => (
                  <li key={i} className="text-xs text-muted-foreground p-3 rounded-lg bg-card border border-border/60 leading-relaxed">
                    {lesson}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Measurable Results */}
        {project.results.length > 0 && (
          <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5 space-y-3">
            <h3 className="text-base font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
              <Trophy className="w-5 h-5" /> Results & Impact
            </h3>
            <ul className="space-y-2">
              {project.results.map((res, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
