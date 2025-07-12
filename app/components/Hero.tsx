import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import profileImage from '../../public/profile-image.png'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='pb-20 pt-16'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='blue'/>  
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='black'/>          
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='gray' />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white-50 dark:bg-grid-white/[0.03] bg-grid-black/[0.02] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white-50 dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        
    </div>
    
    <div className='flex justify-center relative my-10 z-10'>
      <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center' >
        <div className='border-white-100 border h-20 w-20 mb-2 rounded-full overflow-hidden'>
          <img className='w-full' src="/profile-image.png" alt="" />
        </div>
        <h2 className='uppercase -tracking-wide lg:text-lg text-sm text-center dark:text-blue-100 max-w-80'>
          Fabian Muoghalu
        </h2>

        <TextGenerateEffect 
          className='text-center text-[40px] md:text-5xl lg:text-6xl'
          words='Software Engineer'
        />

        <p className='text-center md:tracking-wider mb-4 text-xs lg:text-sm'>
          I&apos;m Fabian, a Software Engineer driven by a passion for building innovative web applications. With expertise in full-stack development, I specialize in crafting robust backends with C#/.NET, Node.js and dynamic user experiences with React. I thrive in fast-paced environments, love tackling technical challenges, and actively looking to contribute to the tech ecosystem through hands-on innovation and collaboration.       
        </p>

        <Link href="/#projects">
          <MagicButton 
            title='Show my work' 
            icon={<FaLocationArrow />}
            position={'right'}     
            optionalClasses='relative rounded-lg'  

          />
          </Link>

      </div>
    </div>
    </div>
  )
}

export default Hero