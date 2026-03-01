"use client";

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full bg-[#030014] pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-[1400px] mx-auto mb-6"
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </motion.div>

      {/* Page Header */}
      <section className="flex flex-col items-center justify-center mb-12 sm:mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 mb-4 text-center"
        >
          All Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-center text-base sm:text-lg max-w-2xl"
        >
          Explore my complete portfolio of web applications, AI projects, and full-stack solutions
        </motion.p>
      </section>

      {/* Projects Grid */}
      <section className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-14">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-full"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                liveLink={project.liveLink}
                github={project.github}
                tech={project.tech}
                date={project.date}
                isConfidential={project.isConfidential}
                fullDescription={project.fullDescription}
                features={project.features}
                technicalHighlights={(project as any).technicalHighlights}
                problemStatement={(project as any).problemStatement}
                demonstrates={(project as any).demonstrates}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Back to Top */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center mt-12"
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
        >
          Back to Top ↑
        </button>
      </motion.div>
    </main>
  );
}
