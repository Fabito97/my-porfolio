import React from 'react'
import { InfiniteMovingCards } from './ui/InfinitMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <div className="py-6 mt-10 md:mt-24 mb-5" id="testimonials">
      <h1 className="headin text-center text-3xl font-bold dark:text-blue-100 mb-6">
        Kind words from  
         <span className="text-black-200 dark:text-purple"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center sm:mt-8 mt-8 mb-7">
            
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />
       
        {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12 mt-10 bg-black-100 dark:bg-none p-5 rounded-full">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
              <img 
                src={img} 
                alt={name} 
                className='md:w-10 w-5' 
              />
              <img 
                src={nameImg} 
                alt={name} 
                className='md:w-24 w-20' 
              />

            </div>
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default Clients