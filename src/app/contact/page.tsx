"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      {/* Header */}
      <div className="space-y-3 border-b border-border/80 pb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-primary uppercase tracking-wider">
          <Mail className="w-4 h-4" />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Let&apos;s Build Something Reliable Together
        </h1>
        <p className="text-muted-foreground text-base max-w-2xl">
          Whether you have a software engineering opportunity, want to discuss backend architecture, or collaborate on C# .NET AI agents, my inbox is open.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Direct Contact Info */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-6 rounded-xl border border-border bg-card space-y-4">
            <h2 className="text-base font-mono font-bold text-foreground uppercase tracking-wider">
              Direct Channels
            </h2>

            <div className="space-y-3 text-sm">
              <a
                href="mailto:fabbenco97@gmail.com"
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
              >
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono text-muted-foreground block">Email</span>
                  <span className="font-medium text-foreground group-hover:text-primary">fabbenco97@gmail.com</span>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/fabian-muoghalu"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
              >
                <FaLinkedin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono text-muted-foreground block">LinkedIn</span>
                  <span className="font-medium text-foreground group-hover:text-primary">fabian-muoghalu</span>
                </div>
              </a>

              <a
                href="https://github.com/Fabito97"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
              >
                <FaGithub className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono text-muted-foreground block">GitHub</span>
                  <span className="font-medium text-foreground group-hover:text-primary">Fabito97</span>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono text-muted-foreground block">Location</span>
                  <span className="font-medium text-foreground">Lagos, Nigeria (UTC+1 / Remote)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="md:col-span-7">
          <div className="p-6 rounded-xl border border-border bg-card">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h2 className="text-xl font-bold text-foreground">Message Sent Successfully!</h2>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  Thank you for reaching out, {formData.name}. I will review your message and reply via email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-primary hover:underline pt-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-base font-mono font-bold text-foreground uppercase tracking-wider">
                  Send a Direct Message
                </h2>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-muted-foreground">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-3 py-2 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-muted-foreground">Your Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-3 py-2 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-muted-foreground">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineering Opportunity / Collaboration"
                    className="w-full px-3 py-2 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-muted-foreground">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can I help you?"
                    className="w-full px-3 py-2 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
