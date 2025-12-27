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
  {
    skill_name: "Angular",
    icon: "FaAngular",
    color: "#DD0031",
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
    description: "Built a real-time computer vision application using Python, OpenCV, and MediaPipe to detect human hands via webcam with accurate landmark tracking. Overlays a dynamic virtual watch that maintains stable alignment during hand movement, demonstrating AI + Computer Vision expertise.",
    image: "/projects/project-1.webp",
    link: "https://github.com/arjunmudaliyar99-design/Real-Time-Hand-Tracking-Virtual-Watch-Overlay-Computer-Vision-",
    tech: "Python • OpenCV • MediaPipe • Computer Vision",
    date: "June 2024 – July 2024"
  },
  {
    title: "Digital Animal Care & Emergency Response Platform",
    description: "Developed a full-stack digital platform connecting pet owners, veterinary doctors, and rescue teams to reduce response time in animal emergencies. Integrated WhatsApp API for instant alerts and implemented a Dialogflow chatbot for animal care recommendations and remote veterinary consultations.",
    image: "/projects/project-2.webp",
    link: "https://github.com/arjunmudaliyar99-design/Digital-Animal-Care-Emergency-Response-Platform",
    tech: "HTML • CSS • JavaScript • Dialogflow • WhatsApp API",
    date: "October 2024 – December 2024"
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
] as const;


