"use client";

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-12 md:py-20 px-4 md:px-6"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 mb-12 md:mb-16 text-center"
      >
        My Projects
      </motion.h1>
      
      <div className="w-full max-w-7xl mx-auto flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="w-full max-w-md"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
              tech={project.tech}
              date={project.date}
            />
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
};
