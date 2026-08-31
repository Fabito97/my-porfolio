import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MagicButton from './ui/MagicButton';
import { ArrowRight, Terminal, Mail, CheckCircle2, ShieldCheck } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

interface HeroProps {
  profile: {
    name: string;
    headline: string;
    bio: string;
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
    location: string;
    availableForHire: boolean;
  };
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section className="relative pt-4 pb-12 sm:pb-16 border-b border-border/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Core Identity & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for Software Engineering Roles</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Software Engineer building <span className="text-primary underline decoration-primary/30 underline-offset-4">reliable backend</span> systems & AI agents.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {profile.headline}
            </p>
          </div>

          {/* Action CTAs with Magic Button */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/projects">
              <MagicButton
                title="Explore Selected Work"
                icon={<ArrowRight className="w-4 h-4" />}
                position="right"
              />
            </Link>

            <Link
              href="/contact"
              className="px-5 py-2.5 sm:py-3 rounded-xl bg-secondary text-foreground font-medium text-xs sm:text-sm border border-border hover:bg-secondary/80 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span>Get In Touch</span>
            </Link>
          </div>

          {/* Direct Social Links */}
          <div className="flex items-center gap-3 pt-2 text-xs font-mono text-muted-foreground">
            <span className="text-muted-foreground/60">Connect:</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-secondary/60 hover:bg-secondary text-foreground transition-colors"
              title="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-secondary/60 hover:bg-secondary text-foreground transition-colors"
              title="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4 text-blue-500" />
            </a>
            <a
              href={profile.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-secondary/60 hover:bg-secondary text-foreground transition-colors"
              title="X Profile"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>
            <span className="text-border">|</span>
            <span className="text-xs text-muted-foreground">{profile.location}</span>
          </div>
        </div>

        {/* Right Column: Hero Profile Card with Picture */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/30 to-blue-600/20 blur-xl opacity-70 dark:opacity-50"></div>

            <div className="relative rounded-2xl bg-card border border-border/90 p-5 shadow-xl space-y-4">
              {/* Profile Image Frame */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-secondary border border-border/80 group">
                <Image
                  src="/profile-image.png"
                  alt="Fabian Muoghalu"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  priority
                  referrerPolicy="no-referrer"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                  <span className="font-bold tracking-wide drop-shadow-md">Fabian Muoghalu</span>
                  <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] border border-white/20 text-emerald-300">
                    Lagos, NG
                  </span>
                </div>
              </div>

              {/* Quick Profile Summary Badge Row */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1.5 text-foreground font-medium">
                    <Terminal className="w-3.5 h-3.5 text-primary" /> Core Focus
                  </span>
                  <span className="text-[11px] text-primary">C# / .NET / AI Agents</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div className="p-2 rounded-lg bg-secondary/60 border border-border/60 flex items-center gap-1.5 text-foreground">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Clean Architecture</span>
                  </div>
                  <div className="p-2 rounded-lg bg-secondary/60 border border-border/60 flex items-center gap-1.5 text-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>AI Agent Workflows</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
