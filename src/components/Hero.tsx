import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { ArrowRight, Mail, Cpu, Bot, Layers, Database, Sparkles, Terminal } from 'lucide-react';
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
    <section className="relative pt-6 py-12 sm:py-16 border-b border-border/80 overflow-hidden flex flex-col items-center justify-center min-h-[90vh] sm:min-h-[82vh]">
      {/* 1. Ambient Background Spotlights */}
      <div className="pointer-events-none">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#a855f7"
        />
        <Spotlight
          className="top-10 -right-20 md:-right-32 h-[80vh] w-[50vw]"
          fill="#10b981"
        />
        <Spotlight
          className="top-24 left-1/3 h-[80vh] w-[50vw]"
          fill="#3b82f6"
        />
      </div>

      {/* 2. Architectural Tech Dot/Grid Layer & b5.svg Illustration */}
      <div className="absolute inset-0 w-full h-full dark:bg-grid-white/[0.03] bg-grid-black/[0.02] flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        {/* b5.svg Code Visual Graphic positioned toward top-right (offset from top 0) */}
        <div className="hidden lg:block absolute right-0 top-12 sm:top-16 lg:top-16 lg:-right-4 w-[320px] sm:w-100 lg:w-125 h-auto opacity-40 dark:opacity-25 pointer-events-none select-none mix-blend-screen">
          <Image
            src="/b5.svg"
            alt="Code Architecture Visual"
            width={586}
            height={383}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* 3. Subtle Floating Badges (Left Side Only) */}
      {/* <div className="hidden lg:block absolute left-8 xl:left-20 2xl:left-32 top-1/4 -translate-y-1/2 pointer-events-none">
        <div className="p-3.5 rounded-2xl bg-card/60 backdrop-blur-md border border-border/70 shadow-lg space-y-1 max-w-[210px] animate-pulse">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-500">
            <Cpu className="w-3.5 h-3.5" />
            <span>Backend Systems</span>
          </div>
          <p className="text-[11px] text-muted-foreground leading-snug">
            C# / ASP.NET Core & FastAPI APIs
          </p>
        </div>
      </div> */}

      <div className="hidden lg:block absolute left-12 xl:left-28 2xl:left-40 bottom-2/5 translate-y-1/2 pointer-events-none opacity-30">
        <div className="p-3.5 rounded-2xl bg-card/60 backdrop-blur-md border border-border/70 shadow-lg space-y-1 max-w-52.5">
           <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-500">
            <Cpu className="w-3.5 h-3.5" />
            <span>Backend Systems</span>
          </div>
          <p className="text-[11px] text-muted-foreground leading-snug">
            C# / ASP.NET Core, Nodejs & FastAPI APIs
          </p>
        </div>
      </div>

      <div className="hidden lg:block absolute right-12 xl:right-28 2xl:right-40 bottom-1/4 translate-y-1/2 pointer-events-none opacity-30">
        <div className="p-3.5 rounded-2xl bg-card/60 backdrop-blur-md border border-border/70 shadow-lg space-y-1 max-w-52.5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400">
            <Layers className="w-3.5 h-3.5" />
            <span>Full-Stack Web</span>
          </div>
          <p className="text-[11px] text-muted-foreground leading-snug">
            Next.js, TypeScript & Cloudflare
          </p>
        </div>
      </div>

      {/* 4. Center Core Container */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center space-y-6 px-4">
        {/* Profile Avatar with Glowing Halo & Radar Accent Rings */}
        <div className="relative flex items-center justify-center pt-2">
          {/* Ambient Glowing Halo */}
          <div className="absolute -inset-2 rounded-full bg-linear-to-tr from-emerald-500 via-primary to-purple-500 opacity-60 blur-lg animate-pulse pointer-events-none"></div>

          {/* Decorative Dashed Concentric Circuit Circle */}
          <div className="absolute -inset-4 rounded-full border border-dashed border-primary/20 pointer-events-none animate-spin" style={{ animationDuration: '30s' }}></div>

          {/* Profile Picture Frame */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden p-1 bg-background/90 border-2 border-primary/50 shadow-2xl">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/profile-image.jpeg"
                alt={profile.name}
                fill
                sizes="(max-width: 768px) 112px, 128px"
                priority
                referrerPolicy="no-referrer"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Status Badge */}
        {/* <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Available for Work</span>
        </div> */}

        {/* Headline & Identity */}
        <div className="space-y-2">
          {/* <p className="text-lg sm:text-xl font-bold text-primary font-mono tracking-tight">
            {profile.name}
          </p> */}
          <p className="text-xs sm:text-sm font-mono text-emerald-600 dark:text-emerald-400 font-semibold tracking-wide">
            Backend, Full-Stack & AI Applications
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Software Engineer
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto pt-1">
            I build backend systems, full-stack applications, and practical AI-powered software.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3.5 pt-1">
          <Link href="/projects">
            <MagicButton
              title="View Projects"
              icon={<ArrowRight className="w-4 h-4" />}
              position="right"
            />
          </Link>

          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-secondary text-foreground font-medium text-xs sm:text-sm border border-border hover:bg-secondary/80 transition-colors flex items-center gap-2 shadow-sm"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span>Contact Me</span>
          </Link>
        </div>

        {/* Social Links Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 pt-2 text-xs font-mono text-muted-foreground">
          <div className="flex items-center justify-center gap-2.5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-secondary/80 hover:bg-secondary text-foreground transition-colors border border-border/60 shadow-sm"
              title="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-secondary/80 hover:bg-secondary text-foreground transition-colors border border-border/60 shadow-sm"
              title="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4 text-blue-500" />
            </a>
            <a
              href={profile.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-secondary/80 hover:bg-secondary text-foreground transition-colors border border-border/60 shadow-sm"
              title="X Profile"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>
          </div>
          <span className="text-border hidden sm:inline">|</span>
          <a
            href={`mailto:${profile.email}`}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
