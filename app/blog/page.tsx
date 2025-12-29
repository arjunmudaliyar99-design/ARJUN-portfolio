import Link from "next/link";
import React from "react";

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
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const categories = Array.from(new Set(posts.map(p => p.category)));
  const filteredPosts = selectedCategory ? posts.filter(p => p.category === selectedCategory) : posts;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#030014] via-[#0a0033] to-[#1a0055] text-white py-20 px-4 pt-[90px]">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Tech & Life Insights
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Deep dives into full-stack development, AI/ML, leadership, and professional growth
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === null
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50"
                  : "bg-[rgba(112,66,248,0.2)] text-gray-300 hover:bg-[rgba(112,66,248,0.4)]"
              }`}
            >
              All Posts
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50"
                    : "bg-[rgba(112,66,248,0.2)] text-gray-300 hover:bg-[rgba(112,66,248,0.4)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group h-full"
            >
              <article className="h-full bg-gradient-to-br from-[rgba(112,66,248,0.1)] to-[rgba(59,130,246,0.05)] border border-[rgba(112,66,248,0.3)] rounded-xl p-6 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 cursor-pointer backdrop-blur-sm">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-300 text-xs font-semibold rounded-full border border-blue-500/50">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-400 mb-4 line-clamp-3 text-sm">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-[rgba(112,66,248,0.2)]">
                  <time className="text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                  <span className="text-xs text-blue-400 font-medium">{post.readTime}</span>
                </div>

                {/* Read More Arrow */}
                <div className="mt-4 flex items-center text-blue-400 group-hover:text-blue-300 font-medium text-sm">
                  Read Article →
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No posts found in this category</p>
          </div>
        )}

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 mt-20 pt-12 border-t border-[rgba(112,66,248,0.2)]">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400">{posts.length}</div>
            <p className="text-gray-400 text-sm mt-2">Articles Published</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400">{categories.length}</div>
            <p className="text-gray-400 text-sm mt-2">Topics Covered</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400">100+</div>
            <p className="text-gray-400 text-sm mt-2">Minutes of Reading</p>
          </div>
        </div>
      </div>
    </main>
  );
}