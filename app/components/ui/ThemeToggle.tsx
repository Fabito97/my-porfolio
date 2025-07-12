import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa6'

const ThemeToggle = ({isDark, toggleTheme}:{isDark:boolean, toggleTheme:()=>void}) => {
  return (
    <div className="sm:sticky z-[999] top-0 ml-auto max-md:mt-6">
                <button onClick={toggleTheme} className="relative inline-flex dark:h-10 h-11 overflow-hidden rounded-md shadow-lg p-[1.5px] dark:p-[1px] focus:outline-none md:w-auto md:mt-10">
    
                  <span className={`absolute inset-[-1000%] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#ddd_50%,#3B82F6_100%)]`}/>
                  <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-gray-100 text-black dark:bg-slate-950 px-4 text-sm font-medium gap-2 dark:text-white backdrop-blur-3xl `}>
                  {isDark ? <FaSun /> : <FaMoon size={17}/>}
                  </span>
               
              </button>
            </div>
  )
}

export default ThemeToggle