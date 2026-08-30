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
    skill_name: "React",
    icon: "FaReact",
    color: "#61DAFB",
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
    skill_name: "RAG & Agents",
    icon: "FaRobot",
    color: "#8B5CF6",
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
    title: "Multi-User Weather Dashboard",
    description: "A modern weather dashboard web application that provides real-time weather information for any city. Users can search for locations and get accurate multi-day forecasts, temperature, humidity, wind speed and visual icons.",
    fullDescription: "The Multi-User Weather Dashboard is a real-time weather forecasting web application that allows users to search for any city and view current weather conditions along with extended forecast data. The application integrates live weather APIs to fetch and display accurate meteorological data in a visually structured and responsive dashboard interface.",
    image: "/projects/project-1.webp",
    liveLink: "https://multi-weather-8ijr.onrender.com/",
    github: "https://github.com/arjunmudaliyar99-design/multi-user-weather-dashboard-application",
    tech: "JavaScript • Node.js • Express • Weather API • CSS Grid",
    date: "2024",
    isConfidential: false,
    features: [
      "Search any city globally",
      "Fetch live temperature data",
      "Display humidity levels",
      "Show wind speed",
      "Weather condition icons",
      "5-day weather forecast",
      "Daily temperature variation",
      "Visual weather indicators",
      "City-based search functionality",
      "Dynamic updates on query",
      "Instant data refresh",
      "Mobile-friendly layout",
      "Grid/Flexbox layout system",
      "Smooth UI transitions"
    ],
    technicalHighlights: [
      "API consumption & JSON parsing",
      "Asynchronous programming",
      "State-based UI rendering",
      "Error management for invalid inputs",
      "Responsive design principles"
    ],
    problemStatement: "Many weather apps are cluttered, slow, or not optimized for multi-device responsiveness. This project focuses on: Real-time data integration, Clean and intuitive UI, Multi-user usability, Efficient API handling",
    demonstrates: [
      "Strong API integration skills",
      "Frontend architecture understanding",
      "Dynamic content rendering",
      "UI responsiveness",
      "Clean dashboard design"
    ]
  },
  {
    title: "Smart To-Do List",
    description: "A smart productivity and accountability web app designed to help users manage tasks, improve habits, and boost focus. Features AI-powered suggestions, reminders, status tracking, and real-time updates.",
    fullDescription: "Smart To-Do  is an AI-powered productivity and accountability web application designed to help users manage tasks efficiently, improve discipline, and increase daily execution. The platform goes beyond a basic to-do list by introducing structured task management, intelligent prioritization, and performance tracking mechanisms. The goal is to transform traditional task management into a focused productivity system that encourages consistency and accountability.",
    image: "/projects/project-2.webp",
    liveLink: "https://smart-todo-list-fb8d.onrender.com/",
    github: "https://github.com/arjunmudaliyar99-design/AI-powered-productivity-and-accountability-platform-Forge",
    tech: "JavaScript • JAVA(springboot) • AI Integration • REST API • Responsive Design",
    date: "2024",
    isConfidential: false,
    features: [
      "Add, edit, delete tasks",
      "Mark tasks as completed",
      "Categorize tasks based on priority",
      "Organize daily and future tasks",
      "Real-time UI updates",
      "Intelligent productivity suggestions",
      "Smart organization logic",
      "Priority-based sorting",
      "Execution-oriented workflow",
      "Completion tracking",
      "Status indicators",
      "Structured UI to reduce distraction",
      "Clear visual separation of pending vs completed tasks",
      "Clean minimal interface",
      "Responsive across mobile and desktop",
      "Smooth animations and transitions",
      "Clear visual hierarchy"
    ],
    problemStatement: "Most to-do applications allow users to create tasks but fail to: Enforce accountability, Provide intelligent task suggestions, Track execution patterns, Encourage consistent habit building. Smart To-Do solves this by integrating structured task flows and intelligent productivity design principles.",
    technicalImplementation: {
      frontend: "Modern JavaScript framework (React or similar)",
      backend: "Node.js / Express (if used)",
      database: "Persistent storage for user tasks",
      deployment: "Render cloud hosting",
      architecture: "Component-based modular design",
      stateManagement: "Dynamic UI state updates"
    },
    demonstrates: [
      "Full-stack application development",
      "UI/UX design thinking",
      "Productivity system architecture",
      "Real-time task manipulation",
      "Clean component structuring",
      "Cloud deployment knowledge"
    ],
    futureEnhancements: [
      "User authentication & multi-user support",
      "AI-powered habit scoring system",
      "Calendar integration",
      "Notification reminders",
      "Productivity analytics dashboard"
    ]
  },
  {
    title: "Real-Time Hand Tracking & Virtual Watch Overlay",
    description: "Built a real-time computer vision application using Python, OpenCV, and MediaPipe to detect human hands via webcam with accurate landmark tracking. Overlays a dynamic virtual watch that maintains stable alignment during hand movement.",
    fullDescription: "I developed LUXETIME, a luxury watch e-commerce platform featuring real-time virtual try-on using computer vision. The system detects hand landmarks through the camera and dynamically maps a watch model onto the wrist in real time — simulating an in-store try-on experience directly in the browser.",
    image: "/projects/project-1.webp",
    liveLink: "https://luxe-time-e-commerce.vercel.app/",
    github: "https://github.com/arjunmudaliyar99-design/Real-Time-Hand-Tracking-Virtual-Watch-Overlay-Computer-Vision-",
    tech: "Python • OpenCV • MediaPipe • Computer Vision • Vite",
    date: "June 2024 – July 2024",
    isConfidential: false,
    features: [
      "Real-time hand tracking using MediaPipe",
      "Watch overlay using OpenCV",
      "Python backend processing",
      "Vite-powered frontend",
      "Luxury-inspired UI design",
      "Accurate landmark tracking",
      "Virtual watch overlay",
      "Stable alignment during movement",
      "Webcam integration",
      "Real-time frame processing",
      "Landmark coordinate mapping",
      "Computer vision integration with frontend",
      "Performance optimization"
    ],
    technicalHighlights: [
      "Real-time frame processing",
      "Landmark coordinate mapping",
      "Computer vision integration with frontend",
      "Performance optimization"
    ],
    problemStatement: "Traditional online watch shopping lacks the immersive try-on experience. This project bridges the gap by providing real-time virtual try-on capabilities using computer vision.",
    demonstrates: [
      "AI + Computer Vision expertise",
      "Real-time processing capabilities",
      "Frontend-backend integration",
      "Interactive user experience design",
      "Performance optimization skills",
      "E-commerce platform development"
    ]
  },
  {
    title: "Digital Animal Care & Emergency Response Platform",
    description: "Developed a full-stack digital platform connecting pet owners, veterinary doctors, and rescue teams to reduce response time in animal emergencies. Integrated WhatsApp API for instant alerts and implemented a Dialogflow chatbot.",
    fullDescription: "I developed a full-stack web platform designed to assist in animal emergency situations and rescue coordination. The goal was to improve communication between pet owners, veterinarians, and rescue volunteers during urgent situations.",
    image: "/projects/project-1.webp",
    liveLink: "https://animalrescue-emergency-response-pla.vercel.app/",
    github: "https://github.com/arjunmudaliyar99-design/Digital-Animal-Care-Emergency-Response-Platform",
    tech: "HTML • CSS • JavaScript • Dialogflow • WhatsApp API",
    date: "October 2024 – December 2024",
    isConfidential: false,
    features: [
      "Emergency reporting system",
      "WhatsApp API integration for instant alerts",
      "AI chatbot using Dialogflow",
      "Structured backend workflow",
      "Responsive UI for accessibility",
      "Connect pet owners with vets",
      "Emergency response system",
      "Animal care recommendations",
      "Remote consultations",
      "Real-time notification flow",
      "Multi-user coordination"
    ],
    technicalHighlights: [
      "API integrations",
      "Real-time notification flow",
      "AI chatbot implementation",
      "Full-stack workflow design"
    ],
    problemStatement: "The goal was to improve communication between pet owners, veterinarians, and rescue volunteers during urgent situations to reduce response time in animal emergencies.",
    demonstrates: [
      "Full-stack web development",
      "API integration skills",
      "AI/chatbot implementation",
      "Real-time communication systems",
      "Emergency response system design",
      "Social impact through technology"
    ]
  },
  {
    title: "EEMS Dashboard",
    description: "PHP | MySQL | Multi-Role Dashboards Educational platform with Admin/Principal/Teacher/VP/HOD dashboards for exam scheduling and examiner assignment. 🔒 Confidential - Demo available on request.",
    fullDescription: "An educational platform with comprehensive multi-role dashboards designed for exam management. The system provides role-based access for Admins, Principals, Teachers, Vice Principals, and HODs to efficiently schedule exams and assign external examiners.",
    image: "/projects/project-2.webp",
    liveLink: null,
    github: "https://github.com/arjunmudaliyar99-design/EEMS-Dashboard---External-Examiner-Management-System",
    tech: "PHP • MySQL • JavaScript • Bootstrap • REST API",
    date: "In Progress",
    isConfidential: true,
    features: [
      "Multi-role dashboards",
      "Admin dashboard with full system control",
      "Principal dashboard for approval workflows",
      "Teacher dashboard for exam requests",
      "VP/HOD dashboards for department management",
      "Exam scheduling system",
      "External examiner assignment",
      "Role-based access control",
      "Database-driven management",
      "Secure authentication",
      "Report generation",
      "Real-time updates",
      "Responsive admin interface"
    ],
    technicalHighlights: [
      "PHP backend architecture",
      "MySQL database design",
      "Role-based authentication system",
      "RESTful API design",
      "Bootstrap responsive framework",
      "Session management"
    ],
    problemStatement: "Educational institutions need an efficient system to manage exam scheduling and external examiner assignments across multiple departments with proper role-based access and approval workflows.",
    demonstrates: [
      "Full-stack PHP development",
      "Database design and optimization",
      "Multi-user system architecture",
      "Security and authentication implementation",
      "Enterprise-level application development",
      "Educational technology solutions"
    ]
  },
  {
    title: "AyuSangam",
    description: "FastAPI | PostgreSQL | Wearable Integration Gym workout tracker with HRV/RHR/sleep analytics from Whoop/Garmin wearables. Real-time progress dashboards. 🔒 Personal Project - Live demo available on request.",
    fullDescription: "A comprehensive gym workout and health tracking platform that integrates with wearable devices (Whoop/Garmin) to provide advanced analytics on Heart Rate Variability (HRV), Resting Heart Rate (RHR), and sleep patterns. Features real-time progress dashboards for data-driven fitness insights.",
    image: "/projects/project-3.webp",
    liveLink: null,
    github: "https://github.com/arjunmudaliyar99-design/AyuSangam---Fitness-Health-Tracker",
    tech: "FastAPI • Python • PostgreSQL • ML Analytics • IoT",
    date: "In Progress",
    isConfidential: true,
    features: [
      "Wearable device integration (Whoop/Garmin)",
      "Heart Rate Variability (HRV) tracking",
      "Resting Heart Rate (RHR) monitoring",
      "Sleep quality analytics",
      "Real-time progress dashboards",
      "Workout logging and tracking",
      "ML-powered insights",
      "Data visualization charts",
      "Historical trend analysis",
      "Health metrics correlation",
      "Performance recommendations",
      "Recovery tracking",
      "API integration with wearables",
      "PostgreSQL data persistence",
      "FastAPI backend"
    ],
    technicalHighlights: [
      "IoT device integration",
      "Machine learning analytics",
      "FastAPI high-performance backend",
      "PostgreSQL database optimization",
      "Real-time data processing",
      "RESTful API design",
      "Data visualization and charting"
    ],
    problemStatement: "Fitness enthusiasts need a unified platform to track and analyze data from multiple wearable devices, correlate health metrics, and receive actionable insights for optimizing workout performance and recovery.",
    demonstrates: [
      "IoT and wearable integration",
      "Machine learning implementation",
      "Backend API development with FastAPI",
      "Database design and optimization",
      "Real-time data processing",
      "Health and fitness technology",
      "Data analytics and visualization"
    ]
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
    link: "/projects",
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




