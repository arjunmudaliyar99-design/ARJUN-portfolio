import { notFound } from "next/navigation";
import Link from "next/link";

const posts = {
  "hand-tracking-opencv-mediapipe": {
    title: "Real-Time Hand Tracking: Building a Virtual Watch Overlay with Python & OpenCV",
    content: `
      <h2>Introduction</h2>
      <p>Hand tracking is a fascinating area of computer vision that has applications in gesture recognition, virtual try-ons, and interactive applications. In this project, I built a real-time hand detection system using Python, OpenCV, and MediaPipe to overlay a virtual watch on the wrist.</p>

      <h2>Project Overview</h2>
      <p>This project was completed from June to July 2024 and involves:</p>
      <ul>
        <li>Real-time webcam-based hand detection</li>
        <li>21-point hand landmark tracking</li>
        <li>Dynamic watch overlay on detected wrists</li>
        <li>High-performance processing for smooth real-time execution</li>
      </ul>

      <h2>Technologies Used</h2>
      <ul>
        <li><strong>Python</strong> - Core programming language</li>
        <li><strong>OpenCV</strong> - Computer vision library for image processing</li>
        <li><strong>MediaPipe</strong> - Google's hand detection and landmark detection framework</li>
      </ul>

      <h2>How It Works</h2>
      <p>MediaPipe provides pre-trained hand detection models that can identify hands in video frames and track 21 key points on each hand. The system captures video from the webcam, processes each frame to detect hands and their landmarks, then overlays a virtual watch image on the wrist area in real-time.</p>

      <h2>Key Challenges & Solutions</h2>
      <ul>
        <li><strong>Performance</strong> - Maintaining 30+ FPS required optimizing frame processing</li>
        <li><strong>Accuracy</strong> - Different hand poses and lighting conditions needed robust detection</li>
        <li><strong>Overlay Positioning</strong> - Correctly positioning the watch based on hand orientation and scale</li>
      </ul>

      <h2>Learning Outcomes</h2>
      <p>This project deepened my understanding of computer vision, real-time processing, and the power of pre-trained models in solving complex problems.</p>
    `,
    date: "2024-07-15",
  },
  "technical-support-automation-journey": {
    title: "From Technical Support to Automation: My Journey at DataVista Solutions",
    content: `
      <h2>Introduction</h2>
      <p>Starting my professional career as a Technical Support Engineer in May 2025 at DataVista Solutions has been an incredible learning experience. I've grown from troubleshooting individual issues to building automation solutions that improve efficiency across the organization.</p>

      <h2>Role Responsibilities</h2>
      <p>As a Technical Support Engineer, I'm responsible for:</p>
      <ul>
        <li>Providing technical support to 50+ clients</li>
        <li>Conducting comprehensive website and application testing</li>
        <li>Identifying and reporting bugs and performance bottlenecks</li>
        <li>Collaborating with development teams on enhancements</li>
      </ul>

      <h2>Achievements & Impact</h2>
      <h3>95% First-Contact Resolution Rate</h3>
      <p>By implementing systematic troubleshooting procedures and maintaining detailed knowledge of client systems, I achieved a 95% first-contact resolution rate.</p>

      <h3>30% UX Improvement</h3>
      <p>Through rigorous testing and collaboration with developers, I identified critical UX bottlenecks that resulted in a 30% overall UX improvement.</p>

      <h3>40% Workload Reduction Through Automation</h3>
      <p>Recognizing repetitive manual tasks, I developed Python-based automation scripts that reduced manual workload by 40%, allowing the team to focus on complex problems.</p>

      <h2>Key Learnings</h2>
      <ul>
        <li><strong>Problem-Solving Mindset</strong> - Understanding root causes rather than just symptoms</li>
        <li><strong>Automation Value</strong> - How strategic automation can significantly boost productivity</li>
        <li><strong>Communication</strong> - Effectively explaining technical issues to non-technical clients</li>
        <li><strong>Agile Collaboration</strong> - Working effectively in cross-functional Agile teams</li>
      </ul>
    `,
    date: "2025-01-20",
  },
  "animal-emergency-platform-dialogflow": {
    title: "Building an AI-Powered Animal Emergency Response Platform",
    content: `
      <h2>Project Overview</h2>
      <p>This was a university capstone project (October - December 2024) for the University of Mumbai that addresses a critical need in the pet care industry. The platform connects pet owners, veterinarians, and animal rescue teams for rapid emergency response and consultation.</p>

      <h2>Problem Statement</h2>
      <p>When a pet has a medical emergency, time is critical. Pet owners often don't know the nearest vet or how to provide immediate first aid. Our platform solves this by instantly connecting pet owners with available vets and rescue teams, providing AI-powered emergency advice through an intelligent chatbot, and enabling real-time WhatsApp communication.</p>

      <h2>Technology Stack</h2>
      <ul>
        <li><strong>Frontend</strong> - HTML5, CSS3, JavaScript</li>
        <li><strong>AI Chatbot</strong> - Google Dialogflow for natural language understanding</li>
        <li><strong>Communication</strong> - WhatsApp API integration</li>
        <li><strong>Backend</strong> - RESTful APIs for real-time data management</li>
      </ul>

      <h2>Key Features</h2>
      <h3>AI-Powered Chatbot Consultation</h3>
      <p>Using Dialogflow, we created an intelligent chatbot that can understand pet emergency descriptions and provide immediate guidance on first aid procedures, symptoms analysis, and when to seek professional help.</p>

      <h3>WhatsApp Integration</h3>
      <p>Instead of asking users to download another app, we integrated WhatsApp API to send instant alerts and enable two-way communication.</p>

      <h3>Real-Time Matching</h3>
      <p>The platform uses location data to match emergency requests with the nearest available veterinarians and rescue teams, ensuring fastest response times.</p>

      <h2>Impact & Learnings</h2>
      <p>This project demonstrated the power of combining AI, third-party APIs, and practical problem-solving. I learned how to integrate complex services and build solutions that actually solve real-world problems.</p>
    `,
    date: "2024-12-20",
  },
  "eems-dashboard-fullstack-development": {
    title: "Full-Stack Web Development: Building EEMS Educational Management System",
    content: `
      <h2>Project Overview</h2>
      <p>EEMS (Educational Examination Management System) is a comprehensive full-stack web application designed to streamline exam scheduling and management across educational institutions. The platform supports multiple user roles with different dashboards and permissions.</p>

      <h2>Technology Stack</h2>
      <ul>
        <li><strong>Backend</strong> - PHP with MVC architecture</li>
        <li><strong>Database</strong> - MySQL with optimized queries</li>
        <li><strong>Frontend</strong> - HTML5, CSS3, JavaScript with responsive design</li>
        <li><strong>Security</strong> - Role-based access control and secure authentication</li>
      </ul>

      <h2>Multi-Role Dashboard System</h2>
      <h3>Admin Dashboard</h3>
      <p>Administrators can manage system-wide settings, user accounts, and access all examination data with the highest level of access.</p>

      <h3>Principal Dashboard</h3>
      <p>Principals oversee all exams in their institution, approve exam schedules, and view institutional performance metrics.</p>

      <h3>Teacher, VP & HOD Dashboards</h3>
      <p>Specialized views for each role with their specific responsibilities - viewing assigned exams, submitting marks, and managing department-level administration.</p>

      <h2>Key Features Implemented</h2>
      <ul>
        <li><strong>Role-Based Authentication</strong> - Secure session management ensuring proper access control</li>
        <li><strong>Exam Scheduling Module</strong> - Intelligent scheduling preventing conflicts</li>
        <li><strong>Examiner Assignment System</strong> - Smart algorithm matching examiners to exams</li>
        <li><strong>Responsive UI Design</strong> - Seamless experience across all devices</li>
      </ul>

      <h2>Security Measures</h2>
      <ul>
        <li>SQL injection prevention through prepared statements</li>
        <li>XSS (Cross-Site Scripting) protection</li>
        <li>CSRF (Cross-Site Request Forgery) tokens</li>
        <li>Secure password hashing and session management</li>
      </ul>
    `,
    date: "2025-01-25",
  },
  "fitness-tracker-wearable-integration": {
    title: "Fitness Tracking Meets Wearable Technology: AyuSangam Project",
    content: `
      <h2>Project Overview</h2>
      <p>AyuSangam is a personal fitness tracking application that bridges the gap between wearable technology and comprehensive workout logging. It integrates Heart Rate Variability (HRV), Resting Heart Rate (RHR), sleep data from fitness wearables with traditional gym workout tracking and real-time analytics dashboards.</p>

      <h2>Vision</h2>
      <p>The fitness industry has two separate ecosystems - wearable device ecosystems (Apple Watch, Fitbit, Garmin) and gym tracking apps. AyuSangam unifies these by creating a holistic view of health and fitness.</p>

      <h2>Core Components</h2>
      <h3>Wearable Data Integration</h3>
      <p>Connect with popular fitness wearables to automatically sync HRV, RHR, and sleep data - key indicators of cardiovascular fitness, recovery, and overall health.</p>

      <h3>Gym Workout Logging</h3>
      <p>Manual logging of gym activities including exercise type, duration, intensity, sets, reps, weights used, and muscle groups targeted.</p>

      <h3>Real-Time Analytics Dashboards</h3>
      <p>Comprehensive visualizations showing weekly/monthly trends, correlation between sleep and performance, recovery metrics, and progress tracking.</p>

      <h2>Unique Benefits</h2>
      <ul>
        <li><strong>Holistic View</strong> - See how sleep, recovery, and stress affect workout performance</li>
        <li><strong>Data-Driven Decisions</strong> - Make informed choices about training based on recovery metrics</li>
        <li><strong>Personalized Insights</strong> - Get recommendations tailored to individual patterns</li>
        <li><strong>Motivation</strong> - Track progress beyond just gym sessions</li>
      </ul>

      <h2>Personal Application</h2>
      <p>As a competitive athlete in powerlifting with experience in boxing and MMA, building this tool helped me optimize my own training and recovery strategies.</p>
    `,
    date: "2025-01-28",
  },
  "programming-mentorship-experience": {
    title: "From Mentoring to Leadership: My Experience Teaching Programming",
    content: `
      <h2>Mentorship at Disha Classes</h2>
      <p>From May 2024 to February 2025, I had the privilege of instructing 10+ students in fundamental programming concepts at Disha Classes. This experience taught me invaluable lessons about education and leadership.</p>

      <h2>Subjects Taught</h2>
      <ul>
        <li><strong>C Programming</strong> - Core concepts of procedural programming</li>
        <li><strong>C++ Programming</strong> - Object-oriented programming fundamentals</li>
        <li><strong>HTML5</strong> - Modern markup and semantic structure</li>
        <li><strong>CSS3</strong> - Styling, layouts, and responsive design</li>
        <li><strong>Python</strong> - Versatile programming language with practical applications</li>
      </ul>

      <h2>Teaching Approach</h2>
      <h3>Theory to Practice Bridge</h3>
      <p>Rather than just teaching syntax, I developed a curriculum that bridges theoretical concepts with practical applications. Students learned WHY they were writing code, not just HOW.</p>

      <h3>Hands-On Projects</h3>
      <p>Each module concluded with real-world projects like building ATM systems in C++, creating responsive web pages with HTML/CSS, and automation scripts in Python.</p>

      <h3>Problem-Solving Focus</h3>
      <p>Emphasizing that programming is about solving problems, not memorizing syntax. I taught students to think algorithmically and approach challenges systematically.</p>

      <h2>Achievements</h2>
      <ul>
        <li><strong>90% Satisfaction Rating</strong> - Students reported high satisfaction with teaching quality</li>
        <li><strong>Strong Foundation</strong> - Students gained solid fundamentals applicable to advanced topics</li>
        <li><strong>Confidence Building</strong> - Many students went from afraid of programming to excited about it</li>
      </ul>

      <h2>Leadership Insights</h2>
      <p>This mentorship experience revealed important truths about leadership - great leaders invest in people's growth, effective communication matters more than expertise, and creating a safe space for questions accelerates learning. Combined with my leadership experience organizing the Swastika College Fest with 120+ team members, these experiences have shaped my approach to technical leadership.</p>
    `,
    date: "2025-01-22",
  },
};

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const post = posts[params.slug as keyof typeof posts];
  if (!post) return {};

  return {
    title: `${post.title} | Arjun ramaswamy Mudaliyar`,
    description: post.content.slice(0, 160).replace(/<[^>]*>/g, ''),
  };
}

export default function BlogPost({ params }: PageProps) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#030014] text-white py-20 px-4 pt-[90px]">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Back to Blog
        </Link>
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <time className="text-gray-400">{post.date}</time>
          </header>
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </main>
  );
}