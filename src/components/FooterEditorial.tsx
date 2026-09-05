import Link from "next/link";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function FooterEditorial() {
  return (
    <footer className="border-t border-border bg-card/40 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Philosophy */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary/10 text-primary border border-primary/20 flex items-center justify-center font-mono font-bold text-xs">
                FM
              </div>
              <span className="font-semibold text-foreground tracking-tight">Fabian Muoghalu</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Software engineer building reliable backend APIs, C# .NET AI monitoring agents, and clean React platforms.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              LEARN → BUILD → CONTRIBUTE
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-medium">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>About</span>
                  <span className="text-[10px] font-mono text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">01</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Projects</span>
                  <span className="text-[10px] font-mono text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">02</span>
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Experience</span>
                  <span className="text-[10px] font-mono text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">03</span>
                </Link>
              </li>
              {/* <li>
                <Link href="/writing" className="hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Writing</span>
                  <span className="text-[10px] font-mono text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">04</span>
                </Link>
              </li>
              <li>
                <Link href="/learning" className="hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Learning</span>
                  <span className="text-[10px] font-mono text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">05</span>
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Contact</span>
                  <span className="text-[10px] font-mono text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">06</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Direct Channels */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
              Direct Channels
            </h4>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <a
                href="mailto:fabianmuoghalu97@gmail.com"
                className="hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>fabianmuoghalu97@gmail.com</span>
              </a>
              <a
                href="tel:+2348104636559"
                className="hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-mono">+234 810 463 6559</span>
              </a>
              <a
                href="https://github.com/Fabito97"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors flex items-center gap-2"
              >
                <FaGithub className="w-4 h-4 text-foreground" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
              </a>
              <a
                href="https://linkedin.com/in/fabian-muoghalu-37aa7a1a9/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors flex items-center gap-2"
              >
                <FaLinkedin className="w-4 h-4 text-blue-500" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
              </a>
              <a
                href="https://x.com/MuoghaluFabian"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors flex items-center gap-2"
              >
                <FaXTwitter className="w-4 h-4 text-sky-400" />
                <span>X / Twitter</span>
                <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <p>© {new Date().getFullYear()} Fabian Muoghalu. Designed & Built with Next.js & Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            {/* <Link href="/admin/login" className="hover:text-foreground transition-colors">
              Admin Portal
            </Link>
            <span>·</span> */}
            <span className="text-foreground/80 font-semibold">Port Harcourt, Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
