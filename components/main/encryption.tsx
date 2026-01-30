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
    <section id="about-me" className="flex flex-col relative items-center justify-center min-h-screen w-full max-w-full overflow-hidden py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="flex items-center gap-2 py-2 px-3 sm:py-[8px] sm:px-[12px] border border-[#7042f88b] opacity-[0.9] rounded-lg mb-6 sm:mb-8 md:mb-10"
      >
        <SparklesIcon className="text-[#b49bff] h-4 w-4 sm:h-5 sm:w-5" />
        <h1 className="text-base sm:text-lg md:text-[20px] text-gray-200 font-semibold">About Me</h1>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl w-full flex flex-col gap-5 sm:gap-6 md:gap-8 z-10">
        {/* About */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-3 sm:gap-4 bg-gradient-to-br from-[#0C0C1D]/80 to-[#1a0b2e]/60 backdrop-blur-md p-4 sm:p-5 md:p-8 rounded-xl sm:rounded-2xl border-2 border-[#7042f88b] shadow-2xl hover:border-purple-500 transition-all duration-300"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
            <div className="p-1.5 sm:p-2 bg-purple-500/20 rounded-lg">
              <AcademicCapIcon className="h-6 w-4 sm:h-6 sm:w-5 md:h-7 md:w-6 text-purple-400" />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Professional Summary
            </h2>
          </div>
          <div className="h-1 sm:h-2 w-16 sm:w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-1 sm:mb-2"></div>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
  Entry-level <span className="text-purple-400 font-semibold">Java & Full-Stack Developer</span> and Information Technology graduate with 
  <span className="text-purple-400 font-semibold"> 8+ months of hands-on technical support experience</span> at DataVista Solutions. 
  Experience includes troubleshooting backend systems, automation workflows, website and application testing, and data handling.
</p>

<p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
  Strong foundation in <span className="text-cyan-400 font-semibold">Java, Spring Boot, REST APIs, MySQL, HTML, CSS, and JavaScript</span>, 
  with working knowledge of <span className="text-cyan-400 font-semibold">React, Node.js, and Git</span>. 
  Currently upskilling in <span className="text-purple-400 font-semibold">Java full stack ,Gen AI and DevOps practices and AI-assisted development</span> to build 
  scalable, secure web applications.
</p>

        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-4 sm:gap-5 md:gap-6 bg-gradient-to-br from-[#0C0C1D]/80 to-[#1a0b2e]/60 backdrop-blur-md p-4 sm:p-5 md:p-8 rounded-xl sm:rounded-2xl border-2 border-[#7042f88b] shadow-2xl hover:border-cyan-500 transition-all duration-300"
        >
          {/* <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
            <div className="p-1.5 sm:p-2 bg-cyan-500/20 rounded-lg">
              <CodeBracketIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-cyan-400" />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Technical Expertise
            </h2>
          </div>
          <div className="h-0.5 sm:h-1 w-16 sm:w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-1 sm:mb-2"></div>
          
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
          </div> */}

          {/* Detailed Expertise Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            {/* Primary Stack */}
            <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-5 rounded-xl border border-purple-500/40 hover:border-purple-400 transition-all duration-300">
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 mb-3 flex items-center gap-2">
                <span className="text-purple-400">⚡</span> Primary Stack (Focus Area)
              </h3>
              <ul className="space-y-1.5">
                {["Java", "Spring Boot", "RESTful APIs", "MySQL", "HTML5, CSS3, JavaScript", "Git & GitHub"].map((item) => (
                  <li key={item} className="text-sm text-gray-200 flex items-center gap-2">
                    <span className="text-cyan-400">▹</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Full-Stack & Backend Development */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-5 rounded-xl border border-cyan-500/40 hover:border-cyan-400 transition-all duration-300">
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-3 flex items-center gap-2">
                <span className="text-cyan-400">🔧</span> Full-Stack & Backend Development
              </h3>
              <ul className="space-y-1.5">
                {["Backend application development (MVC architecture)", "Authentication & Authorization (JWT – fundamentals)", "API integration and testing (Postman)", "Responsive web development"].map((item) => (
                  <li key={item} className="text-sm text-gray-200 flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">▹</span> <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI-Assisted & Computer Vision */}
            <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-5 rounded-xl border border-purple-500/40 hover:border-purple-400 transition-all duration-300">
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 mb-3 flex items-center gap-2">
                <span className="text-purple-400">🤖</span> AI-Assisted & Computer Vision
              </h3>
              <ul className="space-y-1.5">
                {["OpenCV", "MediaPipe", "Computer Vision Pipelines (foundational)", "Machine Learning Basics", "AI-assisted development (ChatGPT, GitHub Copilot)"].map((item) => (
                  <li key={item} className="text-sm text-gray-200 flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">▹</span> <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Databases & Analytics */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-5 rounded-xl border border-cyan-500/40 hover:border-cyan-400 transition-all duration-300">
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-3 flex items-center gap-2">
                <span className="text-cyan-400">📊</span> Databases & Analytics
              </h3>
              <ul className="space-y-1.5">
                {["MySQL (CRUD operations, joins, indexing – fundamentals)", "SQL Query Optimization (basic)", "Power BI (foundational)", "Tableau (foundational)"].map((item) => (
                  <li key={item} className="text-sm text-gray-200 flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">▹</span> <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Professional Practices */}
            <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-5 rounded-xl border border-purple-500/40 hover:border-purple-400 transition-all duration-300 md:col-span-2">
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 mb-3 flex items-center gap-2">
                <span className="text-purple-400">🛠️</span> Tools & Professional Practices
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {["Git, GitHub", "Automation workflows (Python-based)", "Agile methodology", "Technical documentation"].map((item) => (
                  <div key={item} className="text-sm text-gray-200 flex items-center gap-2">
                    <span className="text-cyan-400">▹</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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
                <span>Delivered technical support for <span className="text-cyan-400 font-semibold">many clients</span>, achieving <span className="text-cyan-400 font-semibold">~95% first-contact resolution</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">▹</span>
                <span>Performed website and application testing, improving <span className="text-cyan-400 font-semibold">UX by ~30%</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">▹</span>
                <span>Developed Python automation scripts, reducing <span className="text-cyan-400 font-semibold">manual workload by ~40%</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">▹</span>
                <span>Collaborated with cross-functional teams using <span className="text-cyan-400 font-semibold">Agile methodology</span></span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 p-5 bg-[#0a0a1f]/50 rounded-xl border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Mentorship
            </h3>
            <p className="text-gray-400 text-sm font-medium">Disha Classes | May 2024 – February 2025 | Mumbai</p>
            <ul className="list-none text-gray-300 space-y-2.5 mt-3">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>Instructed <span className="text-purple-400 font-semibold">10+ people</span> in C, C++, HTML, CSS, and Python programming</span>
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
          {/* Ongoing Programs / Training (Education) */}
          <motion.div
            variants={slideInFromRight(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6 bg-gradient-to-br from-[#0C0C1D]/80 to-[#1a0b2e]/60 backdrop-blur-md p-8 rounded-2xl border-2 border-[#7042f88b] shadow-2xl hover:border-cyan-500 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <SparklesIcon className="h-6 w-6 text-purple-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Ongoing Training Programs
              </h2>
            </div>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-4"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Program 1: Generative AI & DevOps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col gap-4 p-5 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-xl border border-purple-500/40 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
                      Generative AI, DevOps & PWA
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">coding ninjas Ongoing (2026)</p>
                  </div>
                  <span className="text-2xl">🤖</span>
                </div>
                
                <p className="text-sm text-gray-200 leading-relaxed">
                  Learning Generative AI fundamentals, prompt engineering, and AI-assisted debugging using ChatGPT and GitHub Copilot. Building full-stack applications with React, Node.js, REST APIs, and JWT authentication.
                </p>

                <div className="pt-2 border-t border-purple-500/20">
                  <p className="text-xs font-semibold text-purple-300 mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {["GitHub Copilot", "React.js", "Node.js", "REST APIs", "Docker", "CI/CD"].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-purple-500/20 text-gray-200 text-xs rounded-full border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Program 2: Full Stack & Spring Boot */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-4 p-5 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/40 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                      JAVA Full Stack & Spring Boot
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">Coding Ninjas (Ongoing 2026)</p>
                  </div>
                  <span className="text-2xl">⚙️</span>
                </div>
                
                <p className="text-sm text-gray-200 leading-relaxed">
                  Mastering programming fundamentals, Data Structures & Algorithms, and backend development with Java, Spring Boot, and Spring Security. Building RESTful APIs and microservices architecture.
                </p>

                <div className="pt-2 border-t border-cyan-500/20">
                  <p className="text-xs font-semibold text-cyan-300 mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Spring Boot", "MySQL", "Hibernate", "REST APIs", "JWT"].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-cyan-500/20 text-gray-200 text-xs rounded-full border border-cyan-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* GitHub Copilot Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-4 p-5 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-xl border-2 border-purple-500/40 hover:border-purple-400 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 mb-2">
                    GitHub Copilot – AI-Assisted Software Development
                  </h4>
                  <p className="text-sm text-gray-200 mb-2">
                    Leveraging AI-generated suggestions for backend API development, frontend features, caching strategies, and code optimization while maintaining rigorous manual code review.
                  </p>
                  <p className="text-xs text-gray-300 italic">
                    Integrated Copilot into daily Git-based workflows • Validated all AI-generated code through testing • Reduced development time significantly
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div> 

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <SparklesIcon className="h-5 w-5 text-purple-400" />
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { name: "JP Morgan", org: "JP Morgan Chase & Co.", pdf: "/certificates/jp-morgan.pdf" },
                { name: "Introduction to Web Development", org: "Udemy", pdf: "/certificates/web-development-udemy.pdf" },
                { name: "C / C++ Certification", org: "Certificationpal India", pdf: "/certificates/Cpp.pdf" },
                { name: "Solutions Architecture Job Simulation-AWS", org: "Amazon web services(AWS)", pdf: "/certificates/aws.pdf" },
                { name: "AI Prompt Engineering Masterclass(Microsoft and  Reliance Digital)", org: "Microsoft and  Reliance Digital", pdf: "/certificates/AI prompt.pdf" },
                { name: "Advanced Software Engineering Job-Walmart", org: "WALMART", pdf: "/certificates/walmart.pdf" },
                { name: "Introduction to Artificial Intelligence", org: "IBM", pdf: "/certificates/ai-ibm.pdf" },
                { name: "AI Ethics", org: "IBM", pdf: "/certificates/ai-ethics-ibm.pdf" },
                { name: "Power BI", org: "Simplilearn", pdf: "/certificates/power bi.pdf" },
                { name: "Tableau Data Visualization", org: "Simplilearn", pdf: "/certificates/tableau-simplilearn.pdf" },
                { name: "IT Workshop", org: "Jetking", jpg: "/certificates/jetking.jpg" },
                { name: "Front Office Management", org: "Certificationpal India", jpg: "/certificates/diploma.jpg" }
              ].map((cert, index) => (
                <motion.a
                  key={cert.name}
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-2 p-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg border border-purple-500/20 hover:border-purple-400 hover:scale-105 transition-all duration-200 cursor-pointer group"
                >
                  <span className="text-cyan-400 text-lg mt-0.5">✓</span>
                  <div className="flex flex-col flex-1">
                    <span className="text-gray-200 text-sm font-medium group-hover:text-purple-300 transition-colors">{cert.name}</span>
                    <span className="text-gray-400 text-xs">{cert.org}</span>
                  </div>
                  <svg 
                    className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors opacity-0 group-hover:opacity-100" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
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
