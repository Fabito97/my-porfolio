import { getDatabase } from "@/lib/store";
import { Briefcase, Calendar, MapPin, ExternalLink, Award, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function ExperiencePage() {
  const db = getDatabase();
  const { experience, contributions } = db;

  return (
    <div className="space-y-16 max-w-4xl mx-auto py-2">
      {/* Header */}
      <div className="space-y-4 border-b border-border/80 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <Briefcase className="w-4 h-4 text-emerald-500" />
          <span>Professional Career Timeline</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Engineering Work History & Impact
        </h1>
        <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
          My professional journey as a software engineer—building C# .NET AI webhook agents, architecting backend APIs, and contributing to technical mentorship.
        </p>
      </div>

      {/* Experience Vertical Pipeline Timeline */}
      <div className="space-y-10">
        <div className="border-b border-border/80 pb-3">
          <h2 className="text-xl font-bold text-foreground font-mono flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" /> Professional Positions
          </h2>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/30 space-y-12">
          {experience.map((exp, idx) => (
            <div key={exp.id} className="relative space-y-4">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <div className={`w-2 h-2 rounded-full ${idx === 0 ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`}></div>
              </div>

              {/* Role & Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-xs font-mono text-primary flex items-center gap-2 mt-0.5">
                    <span className="font-bold text-foreground">{exp.company}</span>
                    <span>·</span>
                    <span className="text-muted-foreground">{exp.employmentType}</span>
                  </p>
                </div>

                <div className="text-xs font-mono text-muted-foreground space-y-1 sm:text-right shrink-0">
                  <div className="flex items-center gap-1 sm:justify-end">
                    <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:justify-end">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {exp.description}
              </p>

              {/* Key Achievements with Green Badges */}
              {exp.achievements.length > 0 && (
                <div className="space-y-2 p-4 rounded-xl bg-secondary/40 border border-border/60 text-xs">
                  <h4 className="font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase text-[10px] tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Key Engineering Outcomes
                  </h4>
                  <ul className="space-y-1.5 text-foreground font-medium">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Responsibilities */}
              {exp.responsibilities.length > 0 && (
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <h4 className="font-mono font-bold text-muted-foreground uppercase text-[10px]">Primary Responsibilities</h4>
                  <ul className="space-y-1">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Chips */}
              <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-xs">
                {exp.techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded bg-secondary text-foreground text-[11px] border border-border/50">
                    {tech}
                  </span>
                ))}
              </div>

              {exp.featuredLink && (
                <div className="pt-1">
                  <a
                    href={exp.featuredLink.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-primary hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    <span>{exp.featuredLink.label}</span>
                    <ExternalLink className="w-3 h-3 text-emerald-500" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contributions */}
      <div className="space-y-6 pt-6 border-t border-border/80">
        <h2 className="text-xl font-bold text-foreground font-mono flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500" /> Contributions & Open Source
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contributions.map((c) => (
            <div key={c.id} className="p-4 rounded-xl border border-border/80 bg-card space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                  {c.badge}
                </span>
                <h3 className="text-sm font-bold text-foreground pt-1">{c.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.description}</p>
              </div>
              <div className="pt-2 flex items-center justify-between text-xs font-mono text-muted-foreground border-t border-border/60">
                <span>{c.date}</span>
                {c.url && (
                  <a href={c.url} target="_blank" rel="noreferrer" className="text-primary hover:underline flex items-center gap-1 font-semibold">
                    <span>View Link</span> <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
