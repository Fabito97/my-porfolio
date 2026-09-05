import Link from "next/link";
import { getDatabase } from "@/lib/store";
import { Compass, Sparkles, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export default function LearningPage() {
  const db = getDatabase();
  const { learning } = db;

  return (
    <div className="space-y-12 max-w-6xl w-full mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="space-y-4 border-b border-border/80 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
          <Compass className="w-4 h-4 text-amber-500" />
          <span>Continuous Technical Growth</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Active Engineering Roadmap
        </h1>
        <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
          I believe true mastery comes from active exploration, building prototypes, and documenting what works. Here is my current focus areas in backend software and AI agent design.
        </p>
      </div>

      {/* Learning Items */}
      <div className="space-y-6">
        {learning.map((item, idx) => (
          <div key={item.id} className="p-6 rounded-2xl border border-border/90 bg-card space-y-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-500 block">
                  0{idx + 1} · {item.category}
                </span>
                <h2 className="text-xl font-bold text-foreground">{item.topic}</h2>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 w-fit font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                {item.status}
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="space-y-1">
                <h3 className="text-[11px] font-mono font-bold text-muted-foreground uppercase">Motivation & Goal</h3>
                <p className="text-foreground leading-relaxed">{item.whyLearning}</p>
              </div>

              {item.notes && (
                <div className="p-3.5 rounded-xl bg-secondary/50 border border-border/60 space-y-1 text-xs">
                  <h3 className="font-mono font-bold text-amber-500 uppercase text-[10px] flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" /> Key Architectural Takeaway
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.notes}</p>
                </div>
              )}

              {item.resources.length > 0 && (
                <div className="pt-1">
                  <h3 className="text-[11px] font-mono font-bold text-muted-foreground uppercase mb-1.5">Primary Documentation & Specifications</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {item.resources.map((res, i) => (
                      <span key={i} className="text-xs font-mono px-2.5 py-1 rounded bg-secondary text-foreground border border-border/50">
                        {res}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {item.relatedProjectSlug && (
                <div className="pt-2 border-t border-border/60">
                  <Link
                    href={`/projects/${item.relatedProjectSlug}`}
                    className="text-xs font-mono text-primary font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Practical Implementation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
