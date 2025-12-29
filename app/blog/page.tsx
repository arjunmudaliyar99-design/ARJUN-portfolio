import Link from "next/link";
import React from "react";
import BlogPageClient from "./blog-client";

export const metadata = {
  title: "Blog | Arjun ramaswamy Mudaliyar - Tech, AI/ML, Leadership & Growth",
  description: "Deep dives into full-stack development, AI/ML, computer vision, leadership, and professional growth. Insights from real projects and experiences.",
};

const posts = [
  {
    title: "Real-Time Hand Tracking: Building a Virtual Watch Overlay with Python & OpenCV",
    slug: "hand-tracking-opencv-mediapipe",
    excerpt: "Explore how I built a real-time hand detection system using OpenCV and MediaPipe, achieving 21-point landmark tracking with dynamic watch overlay.",
    date: "2024-07-15",
    category: "AI/ML & Computer Vision",
    readTime: "8 min read",
  },
  {
    title: "From Technical Support to Automation: My Journey at DataVista Solutions",
    slug: "technical-support-automation-journey",
    excerpt: "Discover how I achieved 95% first-contact resolution and built Python automation scripts that reduced manual workload by 40%.",
    date: "2025-01-20",
    category: "Professional Experience",
    readTime: "10 min read",
  },
  {
    title: "Building an AI-Powered Animal Emergency Response Platform",
    slug: "animal-emergency-platform-dialogflow",
    excerpt: "Learn how I developed a university project connecting pet owners, vets, and rescue teams using Dialogflow and WhatsApp API integration.",
    date: "2024-12-20",
    category: "Web Development",
    readTime: "12 min read",
  },
  {
    title: "Full-Stack Web Development: Building EEMS Educational Management System",
    slug: "eems-dashboard-fullstack-development",
    excerpt: "A deep dive into building a multi-role educational platform with PHP/MySQL, role-based authentication, and secure database operations.",
    date: "2025-01-25",
    category: "Full-Stack Development",
    readTime: "14 min read",
  },
  {
    title: "Fitness Tracking Meets Wearable Technology: AyuSangam Project",
    slug: "fitness-tracker-wearable-integration",
    excerpt: "Building a personal fitness tracker integrating HRV, RHR, and sleep data from wearables with real-time analytics dashboards.",
    date: "2025-01-28",
    category: "Full-Stack Development",
    readTime: "11 min read",
  },
  {
    title: "From Mentoring to Leadership: My Experience Teaching Programming",
    slug: "programming-mentorship-experience",
    excerpt: "How I taught 10+ students C, C++, HTML, CSS, and Python with 90% satisfaction rating, and what I learned about effective technical education.",
    date: "2025-01-22",
    category: "Leadership & Education",
    readTime: "9 min read",
  },
  {
    title: "Certified in AI Ethics, IBM AI Fundamentals, and Business Intelligence",
    slug: "certifications-learning-journey",
    excerpt: "My journey through multiple certifications including IBM AI/Ethics, Power BI, Tableau, and hands-on technical training that shaped my career.",
    date: "2025-01-18",
    category: "Learning & Development",
    readTime: "10 min read",
  },
  {
    title: "From Powerlifting Champion to Tech Professional: Discipline & Resilience",
    slug: "sports-achievements-professional-growth",
    excerpt: "Silver Medalist in powerlifting, boxer, and MMA athlete. Discover how athletic discipline translates to professional excellence and problem-solving.",
    date: "2025-01-16",
    category: "Leadership & Personal Growth",
    readTime: "9 min read",
  },
  {
    title: "Leading the Swastika College Fest: Managing 120+ Team Members",
    slug: "college-fest-leadership-experience",
    excerpt: "How I organized and led a 120+ member discipline team and coordinated with 40+ sponsorship partners to execute a successful college festival.",
    date: "2025-01-14",
    category: "Leadership & Achievements",
    readTime: "11 min read",
  },
  {
    title: "Mastering Python for Automation: Real-World Scripts and Applications",
    slug: "python-automation-guide",
    excerpt: "Deep dive into Python programming for automation, data processing, and scripting. Practical examples from my professional experience.",
    date: "2025-01-12",
    category: "Programming Languages",
    readTime: "12 min read",
  },
  {
    title: "Database Design & Optimization: MySQL Best Practices",
    slug: "mysql-optimization-guide",
    excerpt: "Learn database design principles, query optimization, and indexing strategies that improved application performance by 30%.",
    date: "2025-01-10",
    category: "Database & Backend",
    readTime: "13 min read",
  },
  {
    title: "Data Visualization with Power BI and Tableau: Creating Insightful Dashboards",
    slug: "data-visualization-powerbi-tableau",
    excerpt: "Transform raw data into compelling visual stories. Master Power BI and Tableau to create dashboards that drive business decisions.",
    date: "2025-01-08",
    category: "Data & Analytics",
    readTime: "10 min read",
  },
];

export default function BlogPage() {
  return <BlogPageClient posts={posts} />;
}