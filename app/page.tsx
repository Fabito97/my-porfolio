"use client";

import Image from "next/image";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import { FloatingNav } from "./components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "./components/Grid";
import RecentProjects from "./components/RecentProjects";
import { navItems } from "@/data";
import Clients from "./components/Clients";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import MagicButton from "./components/ui/MagicButton";
import { FaLocationArrow, FaMoon, FaSun } from "react-icons/fa6";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
      document.documentElement.classList.toggle("dark", e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    document.documentElement.classList.toggle("dark", isDarkMode);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };


  return (
    <main className="relative bg-white-50 dark:bg-black-100 dark:text-white-100 text-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
          <div className="sm:sticky z-[999] top-0 ml-auto max-md:mt-6">
          <button onClick={toggleTheme} className={`inline-flex h-10 rounded-md shadow-lg border-gray-300 dark:border-gray-500 border overflow-hidden p-[1px] focus:outline-none md:w-auto md:mt-10 `}>
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gray-100 text-black dark:bg-slate-950 px-4 text-sm font-medium gap-2 dark:text-white backdrop-blur-3xl `}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
            </span>
          </button>
        </div>
      <div className="relative max-w-7xl w-full">
        {/* <div className="sm:sticky z-[999] top-0 bg-white">
        <MagicButton 
          title={``} 
          icon={isDarkMode ? <FaSun /> : <FaMoon />}
          position='right' 
          optionalClasses='absolute top-5 sm:top-0 right-0 sm:-right-5 z-50 rounded-md' 
          handleClick={toggleTheme}
        />

        </div> */}

      <FloatingNav 
      navItems={navItems}
      />
      <Hero/>
      {/* <Grid/> */}
      <Skills />
      <Experience />
      <RecentProjects />
      <Clients />
      <Approach />
      <Footer />
      </div>
    </main>    
  );
}
