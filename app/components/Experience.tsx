import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Experience = () => {
  return (
    <div className="md:py-24 py-16" id="projects">
      <h1 className="headin text-3xl text-center font-bold w-[90%] mx-auto">
       My 
         <span className="text-blue-70 dark:text-purple"> Work Experience</span>
      </h1>

      <div className="w-full mt-10 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button 
            key={card.id}
            borderRadius='1.75rem'
            duration={Math.floor(Math.random() * 10000)}
            className='flex-1 dark:text-white text-black border-neutral-300 dark:border-slate-800 dark:bg-none bg-white-50'
          >
            <div className='flex lg:flew-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
              <img src={card.thumbnail} alt={card.thumbnail}
                className="lg:w-20 md:w-15 w-14"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-black-200 dark:text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience