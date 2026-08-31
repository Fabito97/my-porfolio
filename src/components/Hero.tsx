import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MagicButton from './ui/MagicButton';
import { ArrowRight, Mail } from 'lucide-react';
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
    <section className="relative pt-4 pb-10 sm:pb-14 border-b border-border/80 min-h-[90vh]">
      <div className="flex flex-col-reverse md:flex-ro items-center md:items-star justify-center gap-8 sm:gap-12 md:pt-10">
        {/* Left Column: Identity & Actions */}
        <div className="flex-1 space-y-6 text-left w-full text-center">
          {/* Status Badge */}
          <div className="inline-flex justify-center items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for Work · {profile.location} or remote</span>
          </div>

          {/* Clean, Direct Title & Intro */}
          <div className="space-y-2.5 flex flex-col justify-center items-center">
            <p className="text-xl sm:text-2xl font-semibold text-primary font-mono">
              {profile.name}
            </p>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Software Engineer
            </h1>
            <p className="text-base text-center text-muted-foreground leading-relaxed max-w-xl pt-1">
              Building backend systems, web applications, and AI agents with C# .NET, Python, and TypeScript.
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
              className="px-5 py-2.5 rounded-xl bg-secondary text-foreground font-medium text-xs sm:text-sm border border-border hover:bg-secondary/80 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span>Contact Me</span>
            </Link>
          </div>

          {/* Direct Social Links */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-1 sm:gap-3 pt-1 text-xs font-mono text-muted-foreground">
            <div className="flex items-center justify-center gap-3">
              <span className="text-muted-foreground/60">Links:</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-secondary/70 hover:bg-secondary text-foreground transition-colors"
                title="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-secondary/70 hover:bg-secondary text-foreground transition-colors"
                title="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4 text-blue-500" />
              </a>
              <a
                href={profile.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-secondary/70 hover:bg-secondary text-foreground transition-colors"
                title="X Profile"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
            </div>
              <span className="text-border">|</span>
              <a
                href={`mailto:${profile.email}`}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {profile.email}
              </a>
          </div>
        </div>

        {/* Right Column: Reduced Compact Profile Image */}
        <div className="shrink-0 flex justify-center ">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden bg-secondary border border-border/80 shadow-md">
            <Image
              src="/profile-image.jpeg"
              alt="Fabian Muoghalu"
              fill
              sizes="(max-width: 768px) 104px, 126px"
              priority
              referrerPolicy="no-referrer"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
