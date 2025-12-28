"use client";

import { motion } from "framer-motion";
import { FaFileDownload, FaEye, FaFilePdf } from "react-icons/fa";
import { useState } from "react";

export const ResumeButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 sm:gap-3">
      {/* Action Buttons - Show when open */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          className="flex flex-col gap-2 sm:gap-3"
        >
          {/* View Resume Button */}
          <motion.a
            href={`/resume.pdf?v=${Date.now()}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-full shadow-2xl shadow-purple-500/50 transition-all duration-300 group border-2 border-purple-400/30"
          >
            <FaEye size={16} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-bold whitespace-nowrap">View Resume</span>
          </motion.a>

          {/* Download Resume Button */}
          <motion.a
            href={`/resume.pdf?v=${Date.now()}`}
            download="Arjun_Ramasamy_Mudaliyar_Resume.pdf"
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-5 sm:py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-full shadow-2xl shadow-cyan-500/50 transition-all duration-300 group border-2 border-cyan-400/30"
          >
            <FaFileDownload size={16} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-bold whitespace-nowrap">Download Resume</span>
          </motion.a>
        </motion.div>
      )}

      {/* Main Toggle Button - Always shows "Resume" */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-500 hover:via-pink-500 hover:to-cyan-500 text-white rounded-full shadow-2xl shadow-purple-500/50 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 sm:gap-3 group border-2 border-purple-400/30"
      >
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 animate-ping opacity-20"></span>
        
        {/* Icon and Text */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          <FaFilePdf size={20} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform drop-shadow-lg" />
        </motion.div>
        
        <span className="relative z-10 text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap">
          RESUME
        </span>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 via-pink-500/20 to-cyan-500/0 group-hover:via-pink-500/40 transition-all duration-500 blur-xl"></div>
      </motion.button>
    </div>
  );
};
