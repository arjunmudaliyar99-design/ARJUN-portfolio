"use client";

import { motion } from "framer-motion";
import { SparklesIcon, CodeBracketIcon, AcademicCapIcon, TrophyIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  const skillsCategories = [
    {
      title: "Programming Languages",
      icon: CodeBracketIcon,
      skills: ["Python", "C++", "C#", "JavaScript", "HTML5", "CSS3", "PHP (Training)"]
    },
    {
      title: "AI/ML & Computer Vision",
      icon: SparklesIcon,
      skills: ["OpenCV", "MediaPipe", "Computer Vision Pipelines", "Machine Learning Basics"]
    },
    {
      title: "Databases & Analytics",
      icon: BriefcaseIcon,
      skills: ["MySQL", "Power BI", "Tableau", "Data Visualization", "Query Optimization"]
    },
    {
      title: "Web & APIs",
      icon: CodeBracketIcon,
      skills: ["RESTful APIs", "Dialogflow", "WhatsApp Integration", "Full-Stack Development"]
    },
    {
      title: "Tools & Platforms",
      icon: BriefcaseIcon,
      skills: ["Git", "Excel (Advanced)", "Automation Workflows", "Agile Methodology"]
    }
  ];

  return (
    <section id="about-me" className="flex flex-col relative items-center justify-center min-h-screen w-full py-12 md:py-20 px-4 md:px-6">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="flex items-center gap-2 py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9] rounded-lg mb-8 md:mb-12"
      >
        <SparklesIcon className="text-[#b49bff] h-5 w-5" />
        <h1 className="text-[20px] text-gray-200 font-semibold">About Me</h1>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl w-full flex flex-col gap-6 md:gap-8 z-10">
        {/* About */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-4 bg-gradient-to-br from-[#0C0C1D]/80 to-[#1a0b2e]/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border-2 border-[#7042f88b] shadow-2xl hover:border-purple-500 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <AcademicCapIcon className="h-5 w-5 md:h-6 md:w-6 text-purple-400" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Professional Summary
            </h2>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-2"></div>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Information Technology graduate with <span className="text-purple-400 font-semibold">8+ months of technical support experience</span> at DataVista Solutions. 
            Work involves troubleshooting, automation workflows, website and application testing, and data management. 
            Strong foundation in <span className="text-cyan-400 font-semibold">Python, C++, C#, JavaScript, HTML, CSS, and MySQL</span>.
          </p>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Skilled in <span className="text-purple-400 font-semibold">computer vision, automation, and data analytics</span> with hands-on experience in OpenCV and MediaPipe. 
            Actively pursuing full-stack development with focus on <span className="text-cyan-400 font-semibold">AI-driven and scalable web applications</span>.
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6 bg-gradient-to-br from-[#0C0C1D]/80 to-[#1a0b2e]/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border-2 border-[#7042f88b] shadow-2xl hover:border-cyan-500 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              <CodeBracketIcon className="h-5 w-5 md:h-6 md:w-6 text-cyan-400" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Technical Expertise
            </h2>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {skillsCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0a0a1f]/50 p-4 md:p-5 rounded-xl border border-purple-500/30 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <category.icon className="h-4 w-4 md:h-5 md:w-5 text-purple-400" />
                  <h3 className="text-base md:text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 md:px-3 py-1 md:py-1.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-gray-200 text-xs md:text-sm rounded-full border border-purple-500/30 hover:border-purple-400 hover:scale-105 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6 bg-gradient-to-br from-[#0C0C1D]/80 to-[#1a0b2e]/60 backdrop-blur-md p-8 rounded-2xl border-2 border-[#7042f88b] shadow-2xl hover:border-purple-500 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <BriefcaseIcon className="h-6 w-6 text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Experience
            </h2>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-4"></div>
          
          <div className="flex flex-col gap-2 p-5 bg-[#0a0a1f]/50 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Technical Support Engineer
            </h3>
            <p className="text-gray-400 text-sm font-medium">DataVista Solutions | May 2024 – Present | Mumbai</p>
            <ul className="list-none text-gray-300 space-y-2.5 mt-3">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">▹</span>
                <span>Deliver technical support for <span className="text-cyan-400 font-semibold">50+ clients</span>, achieving <span className="text-cyan-400 font-semibold">~95% first-contact resolution</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">▹</span>
                <span>Perform website and application testing, improving <span className="text-cyan-400 font-semibold">UX by ~30%</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">▹</span>
                <span>Develop Python automation scripts, reducing <span className="text-cyan-400 font-semibold">manual workload by ~40%</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">▹</span>
                <span>Collaborate with cross-functional teams using <span className="text-cyan-400 font-semibold">Agile methodology</span></span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 p-5 bg-[#0a0a1f]/50 rounded-xl border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Visiting Faculty
            </h3>
            <p className="text-gray-400 text-sm font-medium">Disha Classes | May 2024 – February 2025 | Mumbai</p>
            <ul className="list-none text-gray-300 space-y-2.5 mt-3">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>Instructed <span className="text-purple-400 font-semibold">10+ students</span> in C, C++, HTML, CSS, and Python programming</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>Developed curriculum and hands-on coding projects (<span className="text-purple-400 font-semibold">~90% satisfaction rating</span>)</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6 bg-gradient-to-br from-[#0C0C1D]/80 to-[#1a0b2e]/60 backdrop-blur-md p-8 rounded-2xl border-2 border-[#7042f88b] shadow-2xl hover:border-cyan-500 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              <AcademicCapIcon className="h-6 w-6 text-cyan-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Education & Certifications
            </h2>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4"></div>
          
          <div className="flex flex-col gap-3 p-5 bg-[#0a0a1f]/50 rounded-xl border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Bachelor of Science in Information Technology
            </h3>
            <p className="text-gray-400 text-sm font-medium">University of Mumbai | June 2022 – May 2025</p>
            <p className="text-gray-300 mt-2">
              <span className="text-purple-400 font-semibold">Relevant coursework:</span> Data Structures, Algorithms, DBMS, Machine Learning, Computer Vision, Web Development
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <SparklesIcon className="h-5 w-5 text-purple-400" />
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { name: "Introduction to Web Development", org: "Udemy" },
                { name: "Introduction to Artificial Intelligence", org: "IBM" },
                { name: "AI Ethics", org: "IBM" },
                { name: "Power BI", org: "Simplilearn" },
                { name: "Tableau Data Visualization", org: "Simplilearn" },
                { name: "C / C++ Certification", org: "Certificationpal India" },
                { name: "IT Workshop", org: "Jetking" },
                { name: "Front Office Management", org: "Certificationpal India" }
              ].map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-2 p-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg border border-purple-500/20 hover:border-purple-400 hover:scale-105 transition-all duration-200"
                >
                  <span className="text-cyan-400 text-lg mt-0.5">✓</span>
                  <div className="flex flex-col">
                    <span className="text-gray-200 text-sm font-medium">{cert.name}</span>
                    <span className="text-gray-400 text-xs">{cert.org}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6 bg-gradient-to-br from-[#0C0C1D]/80 to-[#1a0b2e]/60 backdrop-blur-md p-8 rounded-2xl border-2 border-[#7042f88b] shadow-2xl hover:border-purple-500 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <TrophyIcon className="h-6 w-6 text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Leadership & Achievements
            </h2>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-4"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "🎯", title: "College Fest Organizer", desc: "Led 120+ discipline volunteers at Swastika College Fest" },
              { icon: "🥈", title: "Silver Medalist", desc: "Mumbai City District Powerlifting Championship" },
              { icon: "💪", title: "Competitive Athlete", desc: "Mumbai City Zonal Sports Committee (Powerlifting)" },
              { icon: "🥊", title: "Combat Sports", desc: "Active in powerlifting, boxing, and MMA" }
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl border border-purple-500/30 hover:border-purple-400 hover:scale-105 transition-all duration-200"
              >
                <span className="text-4xl">{achievement.icon}</span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{achievement.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <p className="text-gray-400 text-center italic mt-2">
            Bringing discipline, resilience, and focus from sports into tech work
          </p>
        </motion.div>
      </div>

      {/* Background Video */}
      <div className="w-full h-full absolute top-0 left-0 -z-10">
        <div className="w-full h-full opacity-20 absolute flex items-center justify-center">
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="false"
            className="w-full h-full object-cover"
          >
            <source src="/videos/encryption-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
