import { projects } from "@/data"
import { PinContainer } from "./ui/3d-pin"
import { FaLocationArrow } from "react-icons/fa6"


const RecentProjects = ({ isDark }:{ isDark:boolean }) => {

  const color = isDark ? "#CBACF9" : "#3B82F6"

  return (
    <div className="py-12 md:py-16" id="projects">
      <h1 className="text-3xl text-center font-bold w-[90%] mx-auto">
        A small selection of  
         <span className="text-black-10 dark:text-purple"> recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-16 md:gap-y-10 lg:gap-y-20  p-4 mt-5">
        {projects.map(({id, title, des, img, iconLists, link}) => (
          <div key={id} className="min-h-[28rem] sm:min-h-[30rem] md:min-h-[23rem] lg:min-h-[22.5rem] flex items-center justify-center md:w-[280px]  lg:w-[370px] w-[80vw]">
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center md:w-[280px] lg:w-[370px] w-[80vw] sm:h-[auto] h-[18rem] mb-5 rounded-3xl overflow-hidden">
                <div className="relative w-full h-full overflow-hidden bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img"/>
                </div>
                <img 
                  src={img} 
                  alt={title} 
                  className="z-10 absolute bottom-0 h-90%"
                />
              </div>
              <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1">{title}</h1>

              <p className="lg:text-sm lg:font-normal font-light text-xs line-clamp-2">{des}</p>

              <div className="flex items-center justify-between mb-3 mt-7 gap-2">
                <div className="flex items-center">
                  {iconLists.map((icon,index) => (
                    <div className="border border-white/[0.2] rounded-full overflow-hidden bg-black lg:w-10 sm:w-8 w-7 h-8 flex justify-center items-center"
                      style={{transform: `translateX(-${5 * index * 2})`}}
                      key={index}
                    >
                      <img src={icon} alt={icon} 
                        className="sm:p-2 p-1"
                      />
                    </div>
                  ))}
                </div>
                <div  className="flex justify-center items-center max-sm:w-[50%] text-center">
                  <p className="text-xs text-[12px] md:text-xs sm:text-sm text-blue-500 dark:text-purple">Check Live Site</p>
                  {<FaLocationArrow className="ms-2" color={color}/>}
                </div>
              </div>

            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects