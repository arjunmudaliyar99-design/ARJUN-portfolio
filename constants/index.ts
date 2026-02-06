import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML5",
    icon: "FaHtml5",
    color: "#E34F26",
  },
  {
    skill_name: "CSS3",
    icon: "FaCss3Alt",
    color: "#1572B6",
  },
  {
    skill_name: "JavaScript",
    icon: "SiJavascript",
    color: "#F7DF1E",
  },
  {
    skill_name: "TypeScript",
    icon: "SiTypescript",
    color: "#3178C6",
  },
  {
    skill_name: "React",
    icon: "FaReact",
    color: "#61DAFB",
  },
  {
    skill_name: "Next.js",
    icon: "SiNextdotjs",
    color: "#000000",
  },
  {
    skill_name: "Node.js",
    icon: "FaNodeJs",
    color: "#339933",
  },
  {
    skill_name: "GitHub",
    icon: "FaGithub",
    color: "#181717",
  },
  {
    skill_name: "Python",
    icon: "FaPython",
    color: "#3776AB",
  },
  {
    skill_name: "PHP",
    icon: "FaPhp",
    color: "#777BB4",
  },
  {
    skill_name: "MySQL",
    icon: "SiMysql",
    color: "#4479A1",
  },
  {
    skill_name: "MongoDB",
    icon: "SiMongodb",
    color: "#47A248",
  },
  {
    skill_name: "C",
    icon: "SiC",
    color: "#A8B9CC",
  },
  {
    skill_name: "C++",
    icon: "SiCplusplus",
    color: "#00599C",
  },
  {
    skill_name: "OpenCV",
    icon: "SiOpencv",
    color: "#5C3EE8",
  },
  {
    skill_name: "Git",
    icon: "SiGit",
    color: "#F05032",
  },
  {
    skill_name: "Tailwind CSS",
    icon: "SiTailwindcss",
    color: "#06B6D4",
  },
  // {
  //   skill_name: "Angular",
  //   icon: "FaAngular",
  //   color: "#DD0031",
  // },
  {
    skill_name: "Java",
    icon: "FaJava",
    color: "#5382A1",
  },
  {
    skill_name: "Spring Boot",
    icon: "FaCogs",
    color: "#6DB33F",
  },
  {
    skill_name: "GenAI",
    icon: "FaBrain",
    color: "#FFB300",
  },
  {
    skill_name: "REST APIs",
    icon: "SiExpress",
    color: "#61DAFB",
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/arjun-ramasamy-mudaliyar/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/arjunmudaliyar99-design",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/mr_beast_85?igsh=NXl3ZHJtaHp1dm5v",
  },
] as const;

export const FRONTEND_SKILL = [
] as const;

export const BACKEND_SKILL = [
] as const;

export const FULLSTACK_SKILL = [
] as const;

export const OTHER_SKILL = [
] as const;

export const PROJECTS = [
  {
    title: "Real-Time Hand Tracking & Virtual Watch Overlay",
    description: "LUXETIME is a luxury-focused e-commerce platform that redefines how users discover and shop for premium watches. Built with a Python backend and a Vite-powered frontend, the platform delivers a high-performance, visually elegant experience inspired by top-tier luxury brands. Its standout feature is the Virtual Watch Try-On, which allows users to preview watches on their wrist in real time using camera-based hand tracking and computer vision. This bridges the gap between online shopping and the in-store experience, enabling confident and informed purchase decisions",
    image: "/projects/project-1.webp",
    link: "https://luxe-time-e-commerce.vercel.app/",
    liveUrl: "https://luxe-time-e-commerce.vercel.app/",
    link2: "https://github.com/arjunmudaliyar99-design/Real-Time-Hand-Tracking-Virtual-Watch-Overlay-Computer-Vision-",
    tech: "Python • OpenCV • MediaPipe • Computer Vision",
    date: "June 2024 – July 2024",
    isConfidential: false
  },
  {
    title: "Digital Animal Care & Emergency Response Platform",
    description: "Built a full-stack web platform designed to assist in animal emergency situations by connecting pet owners, veterinary professionals, and rescue teams. Developed responsive user interfaces and backend workflows to enable rapid communication during emergencies. Integrated WhatsApp API for instant alert notifications and implemented an AI-powered chatbot using Dialogflow to provide basic animal care guidance and preliminary emergency recommendations..",
    image: "/projects/project-2.webp",
    link: "https://animalrescue-emergency-response-pla.vercel.app/",
    liveUrl: "https://animalrescue-emergency-response-pla.vercel.app/",
    link2: "https://arjunmudaliyar99-design.github.io/Digital-Animal-Care-Emergency-Response-Platform/",
    tech: "HTML • CSS • JavaScript • Dialogflow • WhatsApp API",
    date: "October 2024 – December 2024",
    isConfidential: false
  },
  {
    title: "EEMS Dashboard",
    description: "PHP | MySQL | Multi-Role Dashboards Educational platform with Admin/Principal/Teacher/VP/HOD dashboards for exam scheduling and examiner assignment. 🔒 personal Confidential - Demo available on request.Some of the demo file has been uploaded to this github.",
    image: "/projects/eems-dashboard.webp",
    link: "https://github.com/arjunmudaliyar99-design/EEMS-Dashboard---External-Examiner-Management-System",
    liveUrl: "",
    tech: "PHP • MySQL • JavaScript • Bootstrap • REST API",
    date: "In Progress",
    isConfidential: true
  },
  {
    title: "AyuSangam",
    description: "FastAPI | PostgreSQL | Wearable Integration Gym workout tracker with HRV/RHR/sleep analytics from Whoop/Garmin wearables. Real-time progress dashboards. 🔒 Personal Project - Live demo available on request some of the file is uploaded in github for ur reference.",
    image: "/projects/ayusangam.webp",
    link: "https://github.com/arjunmudaliyar99-design/AyuSangam---Fitness-Health-Tracker",
    liveUrl: "",
    tech: "FastAPI • Python • PostgreSQL • ML Analytics • IoT",
    date: "In Progress",
    isConfidential: true
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/arjun-ramasamy-mudaliyar/",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/arjunmudaliyar99-design",
      },
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/mr_beast_85?igsh=NXl3ZHJtaHp1dm5v",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "arjunmudaliyar99@gmail.com",
        icon: null,
        link: "mailto:arjunmudaliyar99@gmail.com",
      },
      {
        name: "Mumbai, Maharashtra",
        icon: null,
        link: "#",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Gallery",
    link: "/gallery",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;




