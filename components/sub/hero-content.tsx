"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="visible"
      animate="visible"
      className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-full lg:max-w-[1400px] xl:max-w-[1600px] mx-auto z-[20] gap-8 sm:gap-10 lg:gap-16 xl:gap-20 pb-8 sm:pb-10 lg:pb-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-6 sm:mt-10 lg:mt-16 xl:mt-20"
    >
      {/* Left Content */}
      <div className="w-full lg:w-[52%] xl:w-[50%] flex flex-col gap-5 sm:gap-6 lg:gap-8 justify-center items-center lg:items-start text-center lg:text-start">
        {/* Role Box */}
        <motion.div
          variants={slideInFromTop}
          className="flex items-center justify-center gap-2 py-2.5 px-5 sm:py-3 sm:px-6 border-2 border-[#7042f88b] opacity-[0.9] rounded-lg max-w-fit mx-auto md:mx-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm hover:border-purple-500 transition-all duration-300 shadow-lg shadow-purple-500/20"
        >
          <SparklesIcon className="text-[#b49bff] h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
          <h1 className="text-xs sm:text-sm md:text-base text-gray-200 font-bold tracking-wide whitespace-nowrap">
            AI Product Engineer & Full-Stack Developer
          </h1>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-4xl leading-tight sm:text-5xl sm:leading-tight md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white md:leading-tight drop-shadow-2xl"
        >
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-gradient drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            Arjun Ramasamy Mudaliyar
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-lg lg:text-xl text-gray-300 max-w-[700px] mx-auto md:mx-0"
        >
          AI Product Engineer building intelligent systems —{" "}
          <span className="text-purple-400 font-semibold">RAG pipelines</span>,{" "}
          <span className="text-cyan-400 font-semibold">agentic workflows</span>, and{" "}
          <span className="text-pink-400 font-semibold">full-stack product experiences</span>{" "}
          with <span className="text-pink-400 font-semibold">Java (Spring Boot)</span> and{" "}
          <span className="text-pink-400 font-semibold">React</span>.
        </motion.p>

        <motion.p
          variants={slideInFromLeft(1)}
          className="text-xs leading-relaxed sm:text-sm sm:leading-relaxed md:text-base lg:text-lg text-gray-400 max-w-[700px] mx-auto md:mx-0"
        >
          AI Product Engineer at{" "}
          <span className="text-purple-400 font-semibold">Barometer Technologies</span>
        </motion.p>

        {/* Ongoing Programs / Training (Education)
        <motion.div
          variants={slideInFromLeft(1.05)}
          className="w-full max-w-[700px] mx-auto md:mx-0 text-sm sm:text-base text-gray-300 mt-4"
        >
          <h3 className="text-md sm:text-lg font-semibold text-white mb-2">Ongoing Programs</h3>

          <div className="mb-3">
            <p className="font-semibold text-purple-400">Generative AI, DevOps & PWA Development Program</p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Status: Ongoing (2026) — Learning Generative AI fundamentals, prompt engineering, and AI-assisted debugging using ChatGPT and GitHub Copilot. Building full-stack applications with React, Node.js, REST APIs, and secure authentication using JWT. Developing and deploying applications using CI/CD pipelines, Docker, and cloud platforms (Netlify, Render). Implementing Progressive Web App (PWA) features including service workers, caching strategies, offline support, and performance optimization. Applying AI tools across the entire SDLC for design, development, testing, and optimization.
            </p>

            <div className="mt-2 pl-2 border-l-2 border-purple-700/30">
              <p className="font-medium text-sm text-white mt-1">Tech Stack (AI-Assisted Development)</p>
              <ul className="text-xs text-gray-400 mt-1 list-disc list-inside">
                <li>GitHub Copilot</li>
                <li>JavaScript (ES6+)</li>
                <li>Node.js</li>
                <li>React.js</li>
                <li>REST APIs</li>
                <li>Git & GitHub</li>
              </ul>

              <p className="text-xs text-gray-400 mt-2">
                <strong>Why this works:</strong> It shows Copilot as a productivity tool, not as a replacement for skills.
              </p>

              <p className="text-xs text-gray-300 mt-2">Optional (Stronger Version):</p>
              <p className="text-xs text-gray-400 mt-1">
                <em>GitHub Copilot – AI-Assisted Software Development</em> — Leveraged GitHub Copilot to accelerate backend API development and frontend feature implementation. Used AI-generated suggestions for caching strategies, data seeders, and code optimization while maintaining manual code review. Integrated Copilot into daily Git-based workflows for faster iteration and reduced development time. Validated all AI-generated code through testing and debugging to ensure correctness and security.
              </p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-purple-400">Full Stack Development & Spring Boot Program (Coding Ninjas)</p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Status: Ongoing (2026) — Strengthening programming fundamentals including variables, control flow, loops, functions, arrays, strings, and recursion. Practicing Data Structures & Algorithms (linked lists, stacks, queues, trees, BSTs, graphs, hashing, heaps, dynamic programming). Developing backend applications using Java and Spring Boot, RESTful APIs, and applying Spring Security concepts, MySQL/Hibernate integration, and exposure to microservices and basic system design concepts.
            </p>
            <p className="text-xs text-gray-400 mt-2">Tech Stack: Java, JavaScript, Spring Boot, MySQL, Hibernate, Spring Data JPA</p>
          </div>
        </motion.div> */}

        {/* Call-to-Action Button */}
        <motion.a
          variants={slideInFromLeft(1.2)}
          href="#about-me"
          className="py-3 px-8 sm:py-4 sm:px-10 md:py-5 md:px-12 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white text-base sm:text-lg md:text-xl font-bold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 w-fit mx-auto md:mx-0 flex items-center justify-center"
        >
          About Me 
        </motion.a>
      </div>

      {/* Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-[48%] xl:w-[50%] flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none hover:scale-105 transition-transform duration-500 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px]"
        />
      </motion.div>
    </motion.div>
  );
};
