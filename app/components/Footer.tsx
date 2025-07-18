import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full py-20 sm:pt-32' id='contact'>
      <div className='w-full absolute left-0 -bottom-72 min-h-96'>
        <img 
          src="/footer-grid.svg" 
          alt="grid" 
          className='w-full h-full dark:opacity-50 opacity-70'
        />
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl md:text-4xl text-center font-bold lg:max-w-[45vw]'>
          Ready to take <span className='text-black dark:text-purple'> your</span> digital presence to the next level
        </h1>
        <p className='dark:text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s see how I can help you today</p>
        <a href="mailto:fabbenco97@gmail.com">
          <MagicButton 
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            optionalClasses='relative rounded-lg'  
          />
        </a>

        <div className='flex mt-16 md:flex-row flex-col md:justify-between items-center gap-5 md:w-full'>
          <p className='md:text-base text-sm md:font-normal font-light'>Copyright &copy; 2024 Fabian</p>
          <div  className='flex items-center md:gap-3 gap-6'>
            {socialMedia.map((profile) => (
            <Link
              key={profile.id}
              href={profile.url}
              target='blank'
              className={`${profile.id !== 2 && "hidden"} w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-100 bg-black-100 dark:bg-black-200 rounded-lg border border-black-300`}
            >
              <img
                src={profile.img}
                alt={profile.name || 'social icon'}
                width={20}
                height={20}
              />
            </Link>
          ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer