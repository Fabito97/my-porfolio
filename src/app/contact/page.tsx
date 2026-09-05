"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, RefreshCw } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send message. Please try again or email directly.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred. Please try again or reach out directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSubmitted(false);
    setError(null);
  };

  return (
    <div className="space-y-10 max-w-6xl w-full mx-auto px-4 sm:px-6 py-10">
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
          Whether you have a software engineering opportunity, want to discuss backend architecture, or collaborate on C# .NET AI agents, my inbox and channels are open.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Direct Contact Info */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-6 rounded-xl border border-border bg-card space-y-4 shadow-sm">
            <h2 className="text-base font-mono font-bold text-foreground uppercase tracking-wider">
              Direct Channels
            </h2>

            <div className="space-y-3 text-sm">
              <a
                href="mailto:fabianmuoghalu97@gmail.com"
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
              >
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono text-muted-foreground block">Email</span>
                  <span className="font-medium text-foreground group-hover:text-primary">fabianmuoghalu97@gmail.com</span>
                </div>
              </a>

              <a
                href="tel:+2348104636559"
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
              >
                <Phone className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono text-muted-foreground block">Phone / Call</span>
                  <span className="font-medium text-foreground group-hover:text-primary font-mono">+234 810 463 6559</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/fabian-muoghalu-37aa7a1a9/"
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
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
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
          <div className="p-6 rounded-xl border border-border bg-card shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h2 className="text-xl font-bold text-foreground">Message Delivered Successfully!</h2>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  Thank you for reaching out, <span className="text-foreground font-semibold">{formData.name}</span>. Your message has been delivered to my inbox and I will review and reply via <span className="text-foreground font-semibold">{formData.email}</span> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground text-xs font-mono hover:bg-secondary/80 border border-border transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Send another message</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-base font-mono font-bold text-foreground uppercase tracking-wider">
                  Send a Direct Message
                </h2>

                {error && (
                  <div className="p-3.5 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-semibold">Unable to deliver message</p>
                      <p className="text-muted-foreground">{error}</p>
                    </div>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-muted-foreground">Your Name <span className="text-emerald-500">*</span></label>
                  <input
                    type="text"
                    required
                    disabled={loading}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-3 py-2 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-muted-foreground">Your Email Address <span className="text-emerald-500">*</span></label>
                  <input
                    type="email"
                    required
                    disabled={loading}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-3 py-2 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-muted-foreground">Subject</label>
                  <input
                    type="text"
                    required
                    disabled={loading}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineering Opportunity / Collaboration"
                    className="w-full px-3 py-2 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-muted-foreground">Message <span className="text-emerald-500">*</span></label>
                  <textarea
                    rows={4}
                    required
                    disabled={loading}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can I help you? (at least 5 characters)"
                    className="w-full px-3 py-2 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Delivering Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
