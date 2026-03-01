"use client";

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";

export const Projects = () => {
  // Show only first 2 projects on home page
  const featuredProjects = PROJECTS.slice(0, 2);

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 w-full max-w-full overflow-hidden"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 mb-10 sm:mb-12 lg:mb-16 text-center"
      >
        Featured Projects
      </motion.h1>
      
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-14">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-12 sm:mt-14 lg:mt-16"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-bold text-lg rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Animated background */}
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Button text */}
              <span className="relative flex items-center gap-3">
                View More Projects
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-xl"
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
