"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaPhp, FaAngular, FaGithub } from "react-icons/fa";
import { 
  SiJavascript, 
  SiTypescript, 
  SiMysql, 
  SiMongodb, 
  SiExpress, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiRedux,
  SiCplusplus,
  SiC,
  SiOpencv,
  SiGit
} from "react-icons/si";

type SkillDataProviderProps = {
  icon: string;
  name: string;
  index: number;
  color?: string;
};

const iconMap: Record<string, any> = {
  FaHtml5,
  FaCss3Alt,
  SiJavascript,
  SiTypescript,
  FaReact,
  SiNextdotjs,
  FaNodeJs,
  SiExpress,
  FaPython,
  FaPhp,
  SiMysql,
  SiMongodb,
  SiC,
  SiCplusplus,
  SiOpencv,
  SiGit,
  SiRedux,
  SiTailwindcss,
  FaAngular,
  FaGithub,
};

export const SkillDataProvider = ({
  icon,
  name,
  index,
  color = "#b49bff",
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const animationDelay = 0.05;
  const Icon = iconMap[icon];

  if (!Icon) return null;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 0.3 }}
      className="group relative flex flex-col items-center justify-center"
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="relative p-6 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border-2 border-purple-500/30 hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
      >
        <Icon size={60} style={{ color }} className="drop-shadow-2xl" />
      </motion.div>
      <p className="mt-3 text-sm md:text-base font-semibold text-gray-300 group-hover:text-white transition-colors duration-200">
        {name}
      </p>
    </motion.div>
  );
};
