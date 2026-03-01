"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaPython, FaWhatsapp, FaRobot, FaChartLine, FaEye, FaVideo, FaPhp, FaDatabase, FaHeartbeat, FaCloudSun, FaReact, FaBrain, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiOpencv, SiJavascript, SiHtml5, SiCss3, SiMysql, SiFastapi, SiPostgresql, SiNodedotjs } from "react-icons/si";
import { MdComputer, MdAutoAwesome, MdPets, MdVideocam, MdDashboard, MdSecurity, MdCheckCircle, MdExpandMore, MdExpandLess } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";

type ProjectCardProps = {
  title: string;
  description: string;
  liveLink?: string | null;
  github: string;
  tech: string;
  date: string;
  isConfidential?: boolean;
  fullDescription?: string;
  features?: readonly string[];
  technicalHighlights?: readonly string[];
  problemStatement?: string;
  demonstrates?: readonly string[];
};

const projectIcons: Record<string, any> = {
  "Multi-User Weather Dashboard": [FaCloudSun, SiNodedotjs, SiJavascript, FaChartLine],
  "Smart To-Do List (Forge)": [TbChecklist, FaReact, FaBrain, MdCheckCircle],
  "Real-Time Hand Tracking & Virtual Watch Overlay": [SiOpencv, FaEye, FaPython, MdVideocam],
  "Digital Animal Care & Emergency Response Platform": [MdPets, FaWhatsapp, FaRobot, SiJavascript],
  "Python Automation & Data Processing Scripts": [FaPython, MdAutoAwesome, FaChartLine, MdComputer],
  "EEMS Dashboard": [FaPhp, SiMysql, MdDashboard, FaDatabase],
  "AyuSangam": [SiFastapi, FaPython, FaHeartbeat, SiPostgresql],
};

export const ProjectCard = ({
  title,
  description,
  liveLink,
  github,
  tech,
  date,
  isConfidential = false,
  fullDescription,
  features,
  technicalHighlights,
  problemStatement,
  demonstrates,
}: ProjectCardProps) => {
  const icons = projectIcons[title] || [MdComputer];
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-cyan-900/30 backdrop-blur-md border-2 border-purple-500/40 hover:border-cyan-400/60 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:shadow-purple-500/40 h-full transform-gpu">
        
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-cyan-600/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        {/* Icon Header */}
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4 p-4 sm:p-6 md:p-7 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 border-b border-purple-500/30 transition-all duration-500">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
            {icons.map((Icon: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: idx * 0.08, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
                className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-purple-500/25 to-cyan-500/25 rounded-lg sm:rounded-xl hover:from-purple-500/40 hover:to-cyan-500/40 transition-all duration-300 shadow-lg"
              >
                <Icon size={24} className="sm:w-7 sm:h-7 md:w-9 md:h-9 text-cyan-400 hover:text-cyan-300 transition-colors drop-shadow-lg" />
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
            className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 hover:from-purple-300 hover:via-pink-300 hover:to-cyan-300 transition-all"
          >
            {title}
          </motion.h2>
          
          <p className="text-sm md:text-base text-gray-300 hover:text-gray-200 leading-relaxed transition-colors duration-300">
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
                className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full border border-purple-500/40 hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-400/60 hover:text-purple-200 transition-all duration-300 shadow-sm"
              >
                {t}
              </motion.span>
            ))}
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400 font-medium">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            {date}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-purple-500/30">
            {liveLink && (
              <Link 
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  View Live Project
                </motion.button>
              </Link>
            )}
            
            <Link 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2"
              >
                <FaGithub className="w-4 h-4" />
                View on GitHub
              </motion.button>
            </Link>
          </div>

          {/* View Full Details Button */}
          {(fullDescription || features || technicalHighlights) && (
            <motion.button
              onClick={() => setShowDetails(!showDetails)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-4 py-2.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/30 hover:to-purple-500/30 border border-indigo-500/40 hover:border-indigo-400/60 text-indigo-300 hover:text-indigo-200 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              {showDetails ? (
                <>
                  <MdExpandLess className="w-5 h-5" />
                  Hide Full Details
                </>
              ) : (
                <>
                  <MdExpandMore className="w-5 h-5" />
                  View Full Details
                </>
              )}
            </motion.button>
          )}

          {/* Expanded Details Section */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 pt-4 border-t border-purple-500/30 overflow-hidden"
              >
                {fullDescription && (
                  <div>
                    <h3 className="text-lg font-bold text-cyan-400 mb-2">📋 Project Overview</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{fullDescription}</p>
                  </div>
                )}

                {problemStatement && (
                  <div>
                    <h3 className="text-lg font-bold text-pink-400 mb-2">🎯 Problem Statement</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{problemStatement}</p>
                  </div>
                )}

                {features && features.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-purple-400 mb-2">✨ Core Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <MdCheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {technicalHighlights && technicalHighlights.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-orange-400 mb-2">⚙️ Technical Highlights</h3>
                    <div className="space-y-1">
                      {technicalHighlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <span className="text-orange-400">•</span>
                          <span>{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {demonstrates && demonstrates.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-green-400 mb-2">💡 What This Project Demonstrates</h3>
                    <div className="space-y-1">
                      {demonstrates.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <span className="text-green-400">✓</span>
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-3xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-tr-3xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};
