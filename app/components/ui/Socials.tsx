import { socialMedia } from "@/data";
import Link from "next/link";

const Socials = () => {
  return <div className='absolute inset-0 flex top-6 md:top-10 z-[998] h-10 max-w-[250px] sm:left-10 left-5 justify-start gap-3'>
    {socialMedia.map((profile, index) => (
      <Link
        key={profile.id}
        href={profile.url}
        target='blank'
        className={`${profile.id == 2 && "hidden"} w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-100 bg-black-100 dark:bg-black-200 rounded-lg border border-black-300`}
      >
        <img
          src={profile.img}
          alt={profile.name || 'social icon'}
          width={20}
          height={20} />
      </Link>
    ))}
  </div>;
}

export default Socials