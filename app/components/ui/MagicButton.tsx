import React from 'react'

const MagicButton = ({
  title, icon, position, handleClick, otherClasses, optionalClasses
}: {
  title?: string; icon?: React.ReactNode, position: string; handleClick?: () => void; otherClasses?: string; optionalClasses?: string;

  }) => {
  return (
    <button onClick={handleClick} className={`inline-flex h-12 overflow-hidden p-[2px] dark:p-[1px] focus:outline-none md:w-auto md:mt-10 ${optionalClasses}`}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#ddd_50%,#3B82F6_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gray-100 text-black dark:bg-slate-950 px-7 text-sm font-medium gap-2 dark:text-white backdrop-blur-3xl ${otherClasses}`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  )
}

export default MagicButton