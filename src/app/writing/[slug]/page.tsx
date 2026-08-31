import { getDatabase } from "@/lib/store";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const db = getDatabase();
  const article = db.articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* Back Link */}
      <div>
        <Link
          href="/writing"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Articles
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 border-b border-border/80 pb-6">
        <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            {article.publishedAt}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            {article.readingTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {article.tags.map((tag) => (
            <span key={tag} className="tech-badge">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Article Content */}
      <div className="prose dark:prose-invert max-w-none text-foreground leading-relaxed space-y-6 text-sm sm:text-base">
        {article.content.split("\n\n").map((paragraph, index) => {
          if (paragraph.startsWith("## ")) {
            return (
              <h2 key={index} className="text-xl font-bold text-foreground pt-4 border-t border-border/60">
                {paragraph.replace("## ", "")}
              </h2>
            );
          }
          if (paragraph.startsWith("### ")) {
            return (
              <h3 key={index} className="text-lg font-bold text-foreground pt-2">
                {paragraph.replace("### ", "")}
              </h3>
            );
          }
          if (paragraph.startsWith("```")) {
            const lines = paragraph.split("\n");
            const code = lines.slice(1, -1).join("\n");
            return (
              <pre key={index} className="p-4 rounded-lg bg-secondary font-mono text-xs overflow-x-auto border border-border">
                <code>{code}</code>
              </pre>
            );
          }
          return (
            <p key={index} className="text-muted-foreground">
              {paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
}
