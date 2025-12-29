"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaPython, FaWhatsapp, FaRobot, FaChartLine, FaEye, FaVideo, FaPhp, FaDatabase, FaHeartbeat } from "react-icons/fa";
import { SiOpencv, SiJavascript, SiHtml5, SiCss3, SiMysql, SiFastapi, SiPostgresql } from "react-icons/si";
import { MdComputer, MdAutoAwesome, MdPets, MdVideocam, MdDashboard, MdSecurity } from "react-icons/md";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  tech: string;
  date: string;
  isConfidential?: boolean;
};

const projectIcons: Record<string, any> = {
  "Real-Time Hand Tracking & Virtual Watch Overlay": [SiOpencv, FaEye, FaPython, MdVideocam],
  "Digital Animal Care & Emergency Response Platform": [MdPets, FaWhatsapp, FaRobot, SiJavascript],
  "Python Automation & Data Processing Scripts": [FaPython, MdAutoAwesome, FaChartLine, MdComputer],
  "EEMS Dashboard": [FaPhp, SiMysql, MdDashboard, FaDatabase],
  "AyuSangam": [SiFastapi, FaPython, FaHeartbeat, SiPostgresql],
};

export const ProjectCard = ({
  title,
  description,
  link,
  tech,
  date,
  isConfidential = false,
}: ProjectCardProps) => {
  const icons = projectIcons[title] || [MdComputer];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="w-full"
    >
      <Link
        href={link}
        className="block group"
      >
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-cyan-900/30 backdrop-blur-md border-2 border-purple-500/40 group-hover:border-cyan-400/60 transition-all duration-500 shadow-2xl group-hover:shadow-3xl group-hover:shadow-purple-500/40 h-full transform-gpu">
          
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Shimmer Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          {/* Icon Header */}
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4 p-4 sm:p-6 md:p-7 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 border-b border-purple-500/30 group-hover:from-purple-500/25 group-hover:to-cyan-500/25 transition-all duration-500">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
              {icons.map((Icon: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: idx * 0.08, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1 }}
                  className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-purple-500/25 to-cyan-500/25 rounded-lg sm:rounded-xl group-hover:from-purple-500/40 group-hover:to-cyan-500/40 transition-all duration-300 shadow-lg"
                >
                  <Icon size={24} className="sm:w-7 sm:h-7 md:w-9 md:h-9 text-cyan-400 group-hover:text-cyan-300 transition-colors drop-shadow-lg" />
                </motion.div>
              ))}
            </div>
            
            {/* Confidential Badge */}
            {isConfidential && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-1.5 sm:gap-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-red-500/20 border border-red-500/40 rounded-md sm:rounded-lg backdrop-blur-sm shrink-0"
              >
                <MdSecurity className="text-red-400 w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-[10px] sm:text-xs font-bold text-red-300 uppercase tracking-wider whitespace-nowrap">Confidential</span>
              </motion.div>
            )}
          </div>

          {/* Content */}
          <div className="relative p-6 md:p-7 space-y-4">
            <motion.h2 
              className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-cyan-300 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              {title}
            </motion.h2>
            
            <p className="text-sm md:text-base text-gray-300 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
              {description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {tech.split(' • ').map((t, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full border border-purple-500/40 group-hover:from-purple-500/30 group-hover:to-pink-500/30 group-hover:border-purple-400/60 group-hover:text-purple-200 transition-all duration-300 shadow-sm"
                >
                  {t}
                </motion.span>
              ))}
            </div>

            {/* Date and Action */}
            <div className="flex items-center justify-between pt-4 border-t border-purple-500/30 group-hover:border-purple-500/50 transition-colors">
              <span className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 font-medium transition-colors flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                {date}
              </span>
              <motion.span 
                className="text-sm font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                View on GitHub
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.span>
            </div>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </Link>
    </motion.div>
  );
};
