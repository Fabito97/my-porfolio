import Link from "next/link";
import { getDatabase } from "@/lib/store";
import { BookOpen, ExternalLink, ArrowRight, Zap } from "lucide-react";

export default function WritingPage() {
  const db = getDatabase();
  const articles = db.articles.filter((a) => a.published);

  return (
    <div className="space-y-12 max-w-6xl w-full mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="space-y-4 border-b border-border/80 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <BookOpen className="w-4 h-4 text-emerald-500" />
          <span>Technical Writing & Architecture Notes</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Articles & Engineering Guides
        </h1>
        <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
          I write about C# .NET API architecture, autonomous webhook agents, Clean Architecture patterns, and technical lessons learned from production systems.
        </p>
      </div>

      {/* Editorial Article Stream */}
      <div className="space-y-6">
        {articles.map((article, idx) => (
          <article
            key={article.id}
            className="p-6 rounded-2xl border border-border/90 bg-card hover:border-primary/50 transition-all space-y-4 shadow-sm group"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">0{idx + 1}</span>
                <span className="text-border">|</span>
                <span className="text-emerald-500 font-semibold">{article.publishedAt}</span>
                <span className="text-muted-foreground">· {article.readingTime}</span>
              </div>
              {article.isExternal && (
                <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-medium">
                  {article.externalPlatform || "External Publication"}
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors">
              {article.isExternal && article.externalUrl ? (
                <a href={article.externalUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <span>{article.title}</span> <ExternalLink className="w-4 h-4 text-amber-500" />
                </a>
              ) : (
                <Link href={`/writing/${article.slug}`}>
                  {article.title}
                </Link>
              )}
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-border/60">
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {article.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-secondary text-foreground text-[11px] border border-border/50">
                    {tag}
                  </span>
                ))}
              </div>

              {!article.isExternal && (
                <Link
                  href={`/writing/${article.slug}`}
                  className="text-xs font-mono text-primary font-bold hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Full Guide</span> <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
