"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 mt-20 md:mt-32 w-full z-[20] gap-10"
    >
      {/* Left Content */}
      <div className="w-full md:w-[55%] flex flex-col gap-8 justify-center text-center md:text-start">
        {/* Role Box */}
        <motion.div
          variants={slideInFromTop}
          className="flex items-center justify-center md:justify-start gap-3 py-[10px] px-[14px] border-2 border-[#7042f88b] opacity-[0.9] rounded-xl max-w-fit mx-auto md:mx-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm hover:border-purple-500 transition-all duration-300"
        >
          <SparklesIcon className="text-[#b49bff] h-6 w-6" />
          <h1 className="text-[15px] md:text-[16px] text-gray-200 font-bold tracking-wide">
            Full Stack & AI Developer | Mumbai, India
          </h1>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-gradient">
            Arjun Ramasamy Mudaliyar
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-[650px] mx-auto md:mx-0"
        >
          Aspiring Full Stack & AI Developer combining{" "}
          <span className="text-purple-400 font-semibold">web applications</span>,{" "}
          <span className="text-cyan-400 font-semibold">automation</span>, and{" "}
          <span className="text-pink-400 font-semibold">computer vision</span>{" "}
          to solve real-world problems.
        </motion.p>

        <motion.p
          variants={slideInFromLeft(1)}
          className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-[650px] mx-auto md:mx-0"
        >
          Technical Support Engineer at{" "}
          <span className="text-purple-400 font-semibold">DataVista Solutions</span>{" "}
          with expertise in Python, MySQL, OpenCV, and modern web technologies.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          variants={slideInFromLeft(1.2)}
          href="#about-me"
          className="py-5 px-10 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white text-lg font-bold rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-purple-500/50 max-w-[200px] mx-auto md:mx-0 flex items-center justify-center"
        >
          About Me 
        </motion.a>
      </div>

      {/* Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full md:w-[45%] flex justify-center items-center mt-8 md:mt-0"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={550}
          width={550}
          draggable={false}
          className="select-none drop-shadow-2xl hover:scale-105 transition-transform duration-500 md:h-[600px] md:w-[600px]"
        />
      </motion.div>
    </motion.div>
  );
};
