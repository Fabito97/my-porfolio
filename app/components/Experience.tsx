"use client";

import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";
import { IoCopyOutline } from "react-icons/io5";
import animationData from "@/data/confetti.json";
import { useState } from "react";
import MagicButton from "./ui/MagicButton";
import { BackgroundGradientAnimation } from "./ui/GradientBg";
import Link from "next/link";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Experience = ({ isDark }:{ isDark:boolean}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("fabbenco97@gmail.com");
    setCopied(true);
  };

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
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000)}
            className="flex-1 dark:text-white text-black border-neutral-300 dark:border-slate-800 dark:bg-none bg-white-50"
          >
            <div className="flex lg:flew-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-20 md:w-15 w-14"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p
                  style={{ whiteSpace: "pre-wrap" }}
                  className="text-start text-black-200 dark:text-white-100 mt-3 font-semibold"
                >
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
      <div className="mt-20 row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4 border border-white/[0.1] h-[250px] max-w-[500px] mx-auto items-center justify-center">
        <BackgroundGradientAnimation/>
        <div
        style={{ textShadow: isDark ? "0 2px 4px rgba(0, 0, 0, 0.3)": "" }}
        className="font-sans font-extralighttext-[#c1c2d3] text-xl sm:text-3xl z-10 text-center font-bold px-16">
          Do you want to hire me or start a project together
        </div>
        <div className="relative">
          <div className={`absolute -bottom-5 right-0`}>
            <Lottie
              loop={copied}
              autoplay={copied}
              animationData={animationData}
              className="w-full h-full object-contain"
            />
          </div>
          <Link
            href={
              "https://drive.google.com/file/d/1jx9F3NQYSFiof0KycziVNK8h44Eol2bg/view?usp=sharing"
            }
            target="blank"
          >
            <MagicButton
              title={"Check out my resume"}
              position="left"
              otherClasses="bg-[#161a31] "
              handleClick={handleCopy}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
