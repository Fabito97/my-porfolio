'use client';

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "lottie-react";
import animationData from '@/data/confetti.json'
import { useState } from "react";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('fabbenco97@gmail.com');
    setCopied(true)
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >

      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img 
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover, object-center')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img 
              src={spareImg}
              alt={spareImg}
              className={'object-cover, object-center w-full h-full'}
            />
          )}
        </div>
          {id === 6 && (
            <BackgroundGradientAnimation/>
            
          )}

      </div>
      <div className={cn(
        titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:min-h-full min-h-40 flex flex-col px-5 lg:p-10 '
      )}>
        <div className="font-sans font-extralighttext-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
          {description}
        </div>
        <div className="font-sans font-bold text-lg xl:text-3xl max-w-96 z-10 ">
          {title}
        </div>
        {id === 2 && <GlobeDemo />}

        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 md:w-fit absolute -right-1 md:-right-1 lg:-right-2 md:mb-5 mb-3">
            <div className="flex flex-col gap-3 lg:gap-6">
              {['React.js', 'Next.js', 'TypeScript'].map((item) => (
                <span key={item}
                  className="py-2 lg:py-4 lg:px-3 px-3 text-sm lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                >
                  {item}
                </span>
              ))}
              <span className="lg:py-6 py-4 px-3 rounded-lg text-center bg-[#10132e]" />
            </div>
            <div className="flex flex-col gap-3 lg:gap-6">
              <span className="lg:py-6 py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              {['C#', 'SQL', 'Docker'].map((item) => (
                <span key={item}
                  className="py-2 lg:py-4 lg:px-3 px-3 text-sm lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
        {id === 6 && (
          <div className="mt-5 relative md:mt-1">
            <div className={`absolute -bottom-5 right-0`}>
              <Lottie 
                loop={copied}
                autoplay={copied}
                animationData={animationData}
                className="w-full h-full object-contain"
               />
            </div>
              <MagicButton 
                title={copied ? 'Email copied' : 'Copy my email'}
                icon={<IoCopyOutline/>}
                position="left"
                otherClasses="bg-[#161a31] "
                handleClick={handleCopy}
              />
          </div>
        )}
      </div>
    </div>
  );
};
