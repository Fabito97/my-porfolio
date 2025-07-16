import { skills } from "@/data";

const Skill = () => {
  return (
    <div className="relative z-10 mb-10 lg:w-[80%] m-auto w-[100%]">
      <h3 className="text-center text-2xl sm:text-3xl font-bold dark:text-blue-100 mb-6">
        Skills <span className="dark:text-purple">And Technologies</span> 
      </h3>
      <div className="flex flex-wrap justify-center gap-4 ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col justify-center gap- px-4 py-2 dark:bg-black-100 bg-gray-50 w-[80%] sm:w-[250px] h-[70px] dark:bg-blue-20 dark:text-white text-black-100 border border-[#ddd] rounded-2xl text-sm md:text-base lg:text-lg shadow-md"
          >
            <div className="flex items-center justify-between gap-2">
            <span>{skill.name}</span>
            {/* <img
              src={skill.icon}
              alt={skill.name}
              className="w-6 h-6 ml-2 inline-block"
            /> */}
            <span className="text-sm">{skill.level}%</span>

            </div>
            <div className="flex items-center gap-2 mt-2">

            <div className="w-full h-1 bg-gray-400 dark:bg-gray-700">
              <div style={{ width: `${skill.level}%` }} className={`h-1 dark:bg-purple bg-blue-500`}></div>
            </div>
            {/* <span className="text-sm">{skill.level}%</span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
