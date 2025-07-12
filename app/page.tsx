"use client";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import { FloatingNav } from "./components/ui/FloatingNav";
import RecentProjects from "./components/RecentProjects";
import { navItems } from "@/data";
import Clients from "./components/Clients";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
import Footer from "./components/Footer";
import { useTheme } from "next-themes";
import ThemeToggle from "./components/ui/ThemeToggle";
import Grid from "./components/Grid";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };


  return (
    <main className="relative bg-white-50 dark:bg-black-100 dark:text-white-100 text-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <ThemeToggle isDark={isDarkMode} toggleTheme={toggleTheme} />
      <div className="relative max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        {/* <Grid/> */}
        <Skills />
        <Experience isDark={isDarkMode}/>       
        <RecentProjects isDark={isDarkMode} />
        <Clients />
        {/* <Approach /> */}
        <Footer />
      </div>
    </main>
  );
}
