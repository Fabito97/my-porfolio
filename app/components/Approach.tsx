"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full md:py-30 py-20">
      <h1 className="headin text-3xl text-center font-bold w-[90%] mx-auto">
        My <span className="text-blue-70 dark:text-purple">approach</span>
      </h1>
      <div className="my-10 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          title="Planning & Design"
          icon={<AceternityIcon order="Phase 1" />}
          description="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, architecture, and content requirements."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="Phase 2" />}
          description="Once we agree on the plan, I cue my lofi playlist and dive into coding. Form initial sketches to polished code, I keep you updated every step of the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          description="This is where the magic happens! Based on the approved design, I'll translate everything into fuctional code, building your website from the ground up."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border group/canvas-card flex items-center justify-center bg-gray-50 dark:bg-transparent border-black/[0.2] dark:border-white/[0.2]  max-w-[330px] w-full mx-auto p-4 relative lg:h-[30rem] rounded-3xl overflow"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children ?? ""}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-3xl">
          {title}
        </h2>
        <h2
          className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center"
          style={{ color: "#e4ecff" }}
        >
          {description ?? ""}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  // bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#ddd_50%,#3B82F6_100%)
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] dark:p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]  bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full text-black bg-gray-50 dark:bg-slate-950 p-3 md:px-5 py-2 dark:text-white backdrop-blur-3xl text-sm md:text-2xl font-bold">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
