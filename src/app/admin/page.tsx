"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AppDatabase } from "@/lib/store";
import { 
  Shield, 
  LogOut, 
  Save, 
  Plus, 
  Trash2, 
  Edit3, 
  Check, 
  Code2, 
  BookOpen, 
  Compass, 
  Briefcase, 
  User,
  AlertCircle
} from "lucide-react";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState("");
  const [data, setData] = useState<AppDatabase | null>(null);
  const [activeTab, setActiveTab] = useState<"projects" | "articles" | "learning" | "experience" | "profile">("projects");

  useEffect(() => {
    checkSessionAndFetchData();
  }, []);

  const checkSessionAndFetchData = async () => {
    try {
      const sessionRes = await fetch("/api/admin/session");
      const sessionData = await sessionRes.json();

      if (!sessionData.authenticated) {
        router.push("/admin/login");
        return;
      }

      const dataRes = await fetch("/api/admin/data");
      const dbData = await dataRes.json();
      setData(dbData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const handleSave = async () => {
    if (!data) return;
    setSaving(true);
    setSaveStatus("");

    try {
      const res = await fetch("/api/admin/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSaveStatus("Changes saved successfully!");
        setTimeout(() => setSaveStatus(""), 3000);
      } else {
        setSaveStatus("Error saving changes.");
      }
    } catch (err) {
      setSaveStatus("Network error during save.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center font-mono text-sm text-muted-foreground">
        Verifying admin authentication session...
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* CMS Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/80 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center font-mono font-bold">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Content Management System</h1>
            <p className="text-xs font-mono text-muted-foreground">Manage projects, articles, learning roadmap & profile</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {saveStatus && (
            <span className="text-xs font-mono text-emerald-500 font-semibold flex items-center gap-1">
              <Check className="w-4 h-4" /> {saveStatus}
            </span>
          )}

          <button
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-mono font-medium hover:bg-primary/90 flex items-center gap-2"
          >
            <Save className="w-4 h-4" /> {saving ? "Saving..." : "Save All Changes"}
          </button>

          <button
            onClick={handleLogout}
            className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground border border-border text-xs font-mono"
            title="Log out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border/60 pb-2">
        <button
          onClick={() => setActiveTab("projects")}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 ${
            activeTab === "projects" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
          }`}
        >
          <Code2 className="w-3.5 h-3.5" /> Projects ({data.projects.length})
        </button>

        <button
          onClick={() => setActiveTab("articles")}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 ${
            activeTab === "articles" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" /> Articles ({data.articles.length})
        </button>

        <button
          onClick={() => setActiveTab("learning")}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 ${
            activeTab === "learning" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
          }`}
        >
          <Compass className="w-3.5 h-3.5" /> Learning ({data.learning.length})
        </button>

        <button
          onClick={() => setActiveTab("experience")}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 ${
            activeTab === "experience" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
          }`}
        >
          <Briefcase className="w-3.5 h-3.5" /> Experience ({data.experience.length})
        </button>

        <button
          onClick={() => setActiveTab("profile")}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 ${
            activeTab === "profile" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
          }`}
        >
          <User className="w-3.5 h-3.5" /> Profile Config
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "projects" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground">Projects Catalog</h2>
            <button
              onClick={() => {
                const newProj = {
                  id: `project-${Date.now()}`,
                  slug: `new-project-${Date.now()}`,
                  title: "New Software System",
                  tagline: "Brief description of the system",
                  category: "Backend" as const,
                  featured: false,
                  published: true,
                  date: new Date().getFullYear().toString(),
                  problem: "Problem statement",
                  role: "Role & contribution",
                  architecture: "System architecture description",
                  decisions: ["Decision 1"],
                  challenges: ["Challenge 1"],
                  lessons: ["Lesson 1"],
                  results: ["Result 1"],
                  techStack: ["C#", ".NET Core"],
                  order: data.projects.length + 1
                };
                setData({ ...data, projects: [newProj, ...data.projects] });
              }}
              className="px-3 py-1.5 rounded-lg bg-emerald-500 text-white text-xs font-mono flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" /> Add New Project
            </button>
          </div>

          <div className="space-y-4">
            {data.projects.map((proj, idx) => (
              <div key={proj.id} className="p-4 rounded-xl border border-border bg-card space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <input
                    type="text"
                    value={proj.title}
                    onChange={(e) => {
                      const updated = [...data.projects];
                      updated[idx].title = e.target.value;
                      setData({ ...data, projects: updated });
                    }}
                    className="font-bold text-foreground bg-background px-2 py-1 rounded border border-border text-sm flex-1"
                  />
                  <button
                    onClick={() => {
                      const updated = data.projects.filter((_, i) => i !== idx);
                      setData({ ...data, projects: updated });
                    }}
                    className="p-1.5 text-red-500 hover:bg-red-500/10 rounded"
                    title="Delete Project"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="text-muted-foreground font-mono">Slug</label>
                    <input
                      type="text"
                      value={proj.slug}
                      onChange={(e) => {
                        const updated = [...data.projects];
                        updated[idx].slug = e.target.value;
                        setData({ ...data, projects: updated });
                      }}
                      className="w-full px-2 py-1 rounded bg-background border border-border font-mono text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-muted-foreground font-mono">Tagline</label>
                    <input
                      type="text"
                      value={proj.tagline}
                      onChange={(e) => {
                        const updated = [...data.projects];
                        updated[idx].tagline = e.target.value;
                        setData({ ...data, projects: updated });
                      }}
                      className="w-full px-2 py-1 rounded bg-background border border-border text-xs"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "profile" && (
        <div className="p-6 rounded-xl border border-border bg-card space-y-4">
          <h2 className="text-lg font-bold text-foreground">Public Profile Settings</h2>

          <div className="space-y-3 text-xs">
            <div>
              <label className="text-muted-foreground font-mono">Full Name</label>
              <input
                type="text"
                value={data.profile.name}
                onChange={(e) => setData({ ...data, profile: { ...data.profile, name: e.target.value } })}
                className="w-full px-3 py-2 rounded bg-background border border-border text-sm font-bold"
              />
            </div>

            <div>
              <label className="text-muted-foreground font-mono">Headline</label>
              <input
                type="text"
                value={data.profile.headline}
                onChange={(e) => setData({ ...data, profile: { ...data.profile, headline: e.target.value } })}
                className="w-full px-3 py-2 rounded bg-background border border-border text-sm"
              />
            </div>

            <div>
              <label className="text-muted-foreground font-mono">Bio</label>
              <textarea
                rows={3}
                value={data.profile.bio}
                onChange={(e) => setData({ ...data, profile: { ...data.profile, bio: e.target.value } })}
                className="w-full px-3 py-2 rounded bg-background border border-border text-sm"
              />
            </div>

            <div>
              <label className="text-muted-foreground font-mono">Current Engineering Focus</label>
              <input
                type="text"
                value={data.profile.currentFocus}
                onChange={(e) => setData({ ...data, profile: { ...data.profile, currentFocus: e.target.value } })}
                className="w-full px-3 py-2 rounded bg-background border border-border text-sm"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
